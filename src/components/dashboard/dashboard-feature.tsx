/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2RtAxZ3erVav6apy9wXZ5rmP2C6Jz1CtKt83Myyu2TVcSMT92LEvSM9vfH3LYsLEDZ7n5nHeeNgj44njJr7MFJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31SAAsKkKRDvLsWqBJKP45dKeZYFGXZB3PEFfzb9uWEDTktwrVbQ1m4Qk9BfPt74Fa2NNspjNdd5K7JP4V5nDt25",
  "key1": "5kaaRQB8DCYExDG12Luy6HdvkkNgZHM1QTP7aKM2pchrUR3eWvB7TdSXMUm7oP2ZrnkceKLZrAmHNCXu8R9tUvk1",
  "key2": "2pqX5b3xrKXPAKp5ZAPChJVbq7FKLPRk6soyo9wo8wUW1972sg6j6Dx4NYWvRTGTyFRQmMkDeagmgTtdmWsxL8oX",
  "key3": "5bH77sXL55vBMgE3EtxAUzbBFVnSa6QPhQ97mSWsf95eYZRaAQ7CAc7AgotYPVFjRMdnV9mapWrM4LtKk48n3AFS",
  "key4": "3dmcCmwPgT1yWCh4tNb4Sd3X4UhPt3P9x6d4yPDXmoxcju586jWxeFz6o8aiYci2ckAG5z8keAVVBSPAqC92BAGa",
  "key5": "3b7V8ufwR2Hv78fjzg77mboUWSifksifyYZaFN4B7damGM4E4vNwteTbupwXWDjLtStZHb2WutW8UBQLXuyipZ9p",
  "key6": "3dj5SHJPrjipQC4VKdB9NodZBg6pxsh7GWr4uCdQTuYSUdWVyVt1ZWmeB62Q3RLeyes92KsCFqRqXvi8d3x3xt5o",
  "key7": "2S3695zUqFkDoAs7S2RS9utKHnU5FNZtaMzX3jQfU8CC2bNbQeaYKCE8qkFbAHit8T9E5prWvUyuGAsSciSotrNR",
  "key8": "5vU2bn6m4FoBhVb3N6i8unm9dmNcm7axcTr2A8wnfm73Arri7cej4PZ6eojuqrUjmQLzxVA8poyc6d6z54Swmenm",
  "key9": "3uuMsXsWZMnn1vG8CeqFddRrwJwDSTGNr6Bin86sdiK2HLCYFWZUGefftmgLiuNZMkZnTkqzpwy8puUY5Z5zFAeK",
  "key10": "1G28deCC1v8qy5jHcN7EVu6DuShjSQMbW4312pUGuLVpAttg4c1G2xFnxP9XspLzyKpeZ1FermJnpt1N4J64YDV",
  "key11": "5x4BKWGz9Bvib8JvqVR75tE2Ka4cDxJ2meXFM9kog3uEx45E1XLJ9v6TukiSqTivzAFEbotBYkQxqMUxVBkWcoaJ",
  "key12": "3xae9MwrEBAp6dHgdWQ53xYapsC8PUjDhj9TU9BdBUp5o7CEUB2chYXiXvVDp34uhRX7vcjzyenqWa6bMDbLNJPv",
  "key13": "2D2URkf3sXXKo64nF7Y7CUVbdZPLZgabFXVZhJcs7BQsQZRp5McYmbMiBq1dycYE7PrhST7dVXw2QeX6zFVYmUfk",
  "key14": "CJDyMFNMJ2viCY1DLsoKffWD6EE1PaFgLajyWxuUr8SGVsqszbkdnvbQ5VuGzmDfZzuK6DwGEN1o4jf6QDte1Ni",
  "key15": "4wu7Y6jxK7X9QQkfdJbgndyiQ6rXtrGHF66R65zQFTeDN7c5EWFiURTP4SPLpFfqRyk16UGnsw75WDu6Z6TKPTi9",
  "key16": "21S27s2naG1XCqcTvM2pdUnQYwdVu4ZSySvr49uTGjbLTWsFPtsZu2RYXAW2Khipe5RJo72fN7mTZZ9pQr1PMwMk",
  "key17": "6165nL1ZaSUf7g3ybhoqkLCz195pN7CaALpGLWbi6breJREwS6rbx5cSUgT45V24A6YMv7HJ69tQRZVHyYjXH2Ld",
  "key18": "3Tnq1pn4rNxAQsBgpoj4LX1GTZgju6YsSeimav9JMoGD4dwiZcNF4ztWuJTMb2faeTmyBNstQWpj6BzA4AroZaKE",
  "key19": "3ggMGsVjJM2ddThrHvVB1Fj34cDfN8woRytaPAdY1vFENyN9ZsDsN1U1kzhMYPwbBTU1SxpunWofZu6RoJbujsX2",
  "key20": "4T6T2RtWfYhRr84rfmJfGecZ7G3nWM6risvvCuMsrFqcsWxSbJJgSAFeExSBLVX2ZU59eMj8e39GToqJtkVKZ1a",
  "key21": "impTpkfi751uiBYZWJBtD7ZGAisgVi9hKVrzBsfhcwDLCJuutsSaYwCAmzepjwfwKJM4TuGPzNzmqEeokgZYxQ3",
  "key22": "3Lfwd4GnamzjhJ265fVNk8tS6zk6tpYqCAAaLQvW4UZFBdo7sF3LAEw4rQ4HCqeZ6W1CnYV2XTwtLLCte7FKyXCp",
  "key23": "4QU3Wxaavn4qcpiUWeRJadmW4UtHW3GHSHL5iEqfxtG1twNZpm8GrFKTExckksuvX1hQvwYtePbULzMUkEnWZqYr",
  "key24": "4o2A7JBvBWPz3N8gcQRY2BRpJpJpRsW9qX6isFxb3FCvZnWMQ4bTCryRBQpCxqSN8JPeY6CBpMrdoZXeS8QvM8rB",
  "key25": "2YGSNtoisEyUAQhbFGP9RTcywXdQV226bA5844mHWyS8Z9S5aeRkYy3EMxytmLxAAPLvaqEczPCcvctT8goYkSTA",
  "key26": "4dfqLRM1XKKx5f7JjxXE5EnSntjUuguBj1L5iKNttui6fLag1TEVjrxUqp6b8VxqVPaHWry15bhfv48xrd3T9Xzn",
  "key27": "5aPAo8g4epogmUu7QgkcBtBqcYTCakEDeFuWVMUPGaPMdxrEvjK5YzKNB3FCddt26moeDV7bb9GtetmjRarTbusc",
  "key28": "3y1S5Fiioo5s47RBrsRPekTwC7Y8C5tjXE6EcRn2j82HAkJ7cUN6A11R2dyvHYM4GsrPkiXcrSgTsKAa6c2a9Nkb",
  "key29": "uq1jZsuVe99roX3A7ztHdw1f4E8abcZmniyTSY3gXfSnTysfwBT9ttfxX2Q8FjgAsKayEyS1KdsTArEqRRWUDGQ",
  "key30": "3z4p4Ukn9wssDM53gF4TejAYvRsfkc9sTBqo6goeT9N3PzJNpSYfbHk8BaZPGD8tnmGS3XHEM9UqWzRKGvSmE3Gg",
  "key31": "3KUL7e2eaavCFstELnTZAf5w8yqpwX9hEyBbQeGiXf9ot4qa8qbYVNgmtSsicHvtZqXKPuufdmjaLL8Qy6tfMEem",
  "key32": "43P7RKaVgFJ2yoMxwYLgrxNn6u8yCTuyYRMpmKFb9Kgn2dfMzMpt7NUXSG5pxoSVzq6FKM35kZJAMiKeqmx8nAp6",
  "key33": "bAKi5SKowHCLoWDyhL1VHqyxCPKJeZhnHZGcZE9zy4f8VqVw62ReKGqpDJU4nrS3NtDxGqrDQX1h45PBnQNegQk",
  "key34": "e5zLL9CBHRxvRX2bZvMp56jg8T7cQgTf86wQtL8eiLRL2CzPsziXFRAEGGqfdLRp5h8bS5BE5Dc7w6Ztk9aeyTG",
  "key35": "3Fsec4uq5ZnizzU7CsFyr8bvzvqJ3bVzARrEJjQUVd2HwFAnAHoTrxC5kHP7KQMwnkviXwKbx3sxRoXtnHEAv76d",
  "key36": "5NmzWNeCCw7mbpptaDHXpSiJAFmu2fh2gMKwzjAVSXqytQ1xPuabVtLWjMo6S5p2E2JBW4UU7xLwjmwbKZWS7Lu4",
  "key37": "4wb8jgz1UmiXD4B5Q9LG8LvLQvh3vxLQE6prghAK8xwfcndVUeMkmhjZHDiBEsRtmCgwJ25rBGnHfaj3KSim71q6",
  "key38": "3sNdgqypBykfjATAcZMrrfFt4xPAw9eKZMFQctzt8c4xkngjXR3en9YxAtbh1jgvGCA5SH8t2QnyqPPTRwhi3g8T",
  "key39": "3KRwCrGJHyMACzVjHGKUYotUmpuLoHr3E5gsthrqr41vDg39puYmU3crzTdhhi4euFVipPcf9566GAJEPMVznPDw",
  "key40": "5enUJrxJ6evY9Fs6RdqHENBhhxLVhSxhdtR4da82AcyVxTSPuGUbYjK4p6uGv6SGraHwN7ggXLjFDUUSnJ1gbYvy"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
