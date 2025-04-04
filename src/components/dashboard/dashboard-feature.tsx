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
    "tLujVgHbNFsBoVhJqG8JCiZTXJG4Uq6JrQKYLa8DHx2RiJUb9UfkCzWF6BuEVwmS4X6pmbuj1yGVQNv1cX3FyNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cHhVoQFkYzZo5VGhG8hUg5jLJehzaDejFw2WJvU1LycF3dyV6yyssbKR3fEvXxn4Fn7EYmeji6vu7GwYfNxc3H3",
  "key1": "4HANbAGnz38Pgb79USDGUr7oE6EeYo2GktQGhoj4yVRmL5wPBj8Da1Fz18HNSVBewShDVMxNHv5pHphPtXBSH4hX",
  "key2": "3GNjeEVUvFjXY5YjR1yZNfhnqCrUsB1Wby1Rz2wLvwM9K3mDesCdazkaixEEajz6zLbWQXhtFdkUnXjx1DvXB9WH",
  "key3": "2htYXa2RrxkmLXcmqymWg4dPG1yERGHTf2wiQV6UDoQ3ChDzrBNEqCi419gYw5PU73xyuzvCkBqX9x7FkAkYw1bb",
  "key4": "ZhLsNZJuqidNWg4zKCwQdEhNxkfdpR8ZHChifGUopWqtW6RaZkQ3prXSiyG9TEcguxssA4kaFHUa9TTaTaQBN2m",
  "key5": "2keCCQ4RTWzckJ46c6buDn5CiEUmHYFQ9mxn59YDoXoK9j4Ku8LpLxwWSTFjtBj9mVtP2q5FW3cNxF2FNWeDWN4F",
  "key6": "31iBuPHVEBKCSpmcd6LqH7f9BdFhFstA9R88X5ChZXSJZm4C12qPUNHPZK79qPHrDtrGAb7asyT8Ldh1QT6Er1hM",
  "key7": "43gHCd91oSsTaCuFX9pLXFvHsD53eVEGR5PZ1bH2DjRJcTCXscQKnNyQCTrf58cHbh7ZfDPgyU4dFYh9vsq4qz9n",
  "key8": "5fXbiWTPo56P3GckbC6SR8tZqZvSmTXeSBNmUvnrkVZ91pmGyQnW8r6Woa4xsHnEDJVj8ic6axectQyZXmo1LXWN",
  "key9": "4KjLASPAFuwYiJfVMUYF3PHyvLue51SybuMPePTCfdJCSFLkp3P9EnUGaGLULWnHaZWe1w9jFpXYswPyab77iU3G",
  "key10": "6fEHWjikU3VuR4mK14YPvvdZgoPbPBV8Vhqm4vSAVMnb7sVoSBqCYuDErqgnWzPzBMz6AjZp27QkzZ6q3kbseDg",
  "key11": "3ycrc63fBMaxuEaKfzutzvv6k2tXtcJLb4UWtpMtr2QZ9uHRxcKzVTq3HxuJyZc87yzRopmnveTANqiYvvnVdErH",
  "key12": "4oSAFdoSDxwEQpCAsiFrA1RLC56xXANuheqGfPq6CproVemiJdrXUHM3GfhDviC7q4Dp44mC44bzxKb9ZkgxYu6F",
  "key13": "35wzwyo4UCJzyCJkEnveddkVqFHgLvQdZXodSoGeGTqEa8L6zJ2dy5fSSEMY3WxUofRWSFti7nYbxR3VmgJfXGPw",
  "key14": "2V9cT1GJF3JNQqsxfYN71f3MQFax7JuUm5sDfTFHGG53QJT5DFC56uwLU7s4SGkh3Nt2P6QybdXYLGp41dw3DCpZ",
  "key15": "3cWPPkWqqx7HFnG3MVeWZfzEMvK8ucS96ZYeFQnBETYpRtNtegckwiws52sgG1aVSxBY9LbhjT82FCLRbLYpiVwA",
  "key16": "5FtLpphLWKw4nrmTcDriT7U7i8DM1Lb7CAZoyE55AMxFqAcvTEzCcwb6VZ1bDaw5Vby4nQXaswZEXFLcYajfE5US",
  "key17": "s7G74FTs4z1phXdtEXLWY72Q89xV8DNQMnbV9VSutszhz5FdXyUbszJR2nVTdu3DwqvrNt4g2Y6925Sn7je4uMv",
  "key18": "5FTTDNhxBegaGJ2H3cz45DKGi4qMAFiBRqPofkPHRhBoHNAfxdxHPm95QCqwohpLRfFLmzaRsZDbzqNfL6BdEQLd",
  "key19": "2xuio5V6oY8RnFKuz7KmAiuPYbTQD6a7Ln14yK31r5wdpPtoQNECHmmakHrcRqDCEDDxc3HH69fY93aeDJ7Sy8x7",
  "key20": "26JUuaam5wE2bUhecwQF1ydZsgwkKzXydS7jX1HuHvs5y2hMUpjThsYMYcYchhHVvPtJLZZjkBTH75qigFTtDzmG",
  "key21": "4qVDA7xHZDdj6xXzaiayVMTeJjHypE5T8GZyfbguUDzsuPEXksR2vY3mhqf9yQgdbrXKBFauUkduoPDWKyEL2GCv",
  "key22": "3Cd2izrNnQ8cn3rzyKsFj5LKZtByvSVzFPjNZJu5s5Ytg3yyzxhEPnZCbgYZU16Racr9STdTKg5YY3BKMzomjWb4",
  "key23": "3dTaXmenwDUuqSiBA3v78My7DBuvpcpag9xJeezWgd91QRgt4hNhyi7nFt5PToZGD2u7m2ovUc1CP5GYknCmMyHe",
  "key24": "Riex9Ai2NvF3wnJZ1c6NQ73dKhiKByADyAKUnyE9BcS7yjR2SF9UJTVubnmVrUF9eZK7A368tYCFH8jyFucoz7k",
  "key25": "2ZuHnZVC3xu3oYCuYKyFcpigWAMyibEaJPpxf95eWfWxqcGKqQe9vJiZWqume7YeSgNsr2mttKriyApd9i6yzyJJ",
  "key26": "4BiEGCqrZvK2PeRJySAYkqNNvwVGch16hUGhZbyEsR4fGrvucQYnuRWRuW18Bc1ZGxSKbGaeChA9VvjBoiTVNncQ",
  "key27": "52wnmjYMfGyoGYLd4fw8E4L66VXQjY3S9idDTjymJ29eWG2bBaLxH9ywWgt59uh6gPLp48smjdXNBWsVtWv43pc",
  "key28": "3eiVXxRXmwbPj8WnNAiH57JW3RMKftP1n4AWGkaFFTTDSHX988h8DQKTCSjYvyEzbKWWTxUewqXB5DksjYN5jbgv",
  "key29": "3TFbtqBwmzSBfUBm7FSKjgbDfG6ANYhyEm6HAS1aLvhPCqeGkw2D4a2oLmM3oe5H45DWxmmJX2n3tKAJqKp7Zrxs",
  "key30": "4ddCo4Dsv1i1HV8G2ciEEYDPspUkcXnVYWfxozHtsnD4uZwMszueKMgMeMiRdJxYSV3jiw2sqMatrhvUpaiMummf",
  "key31": "3xxCxibySmhamoNA1AZXbrhRhoAx4PBhfJ7WV6tsKRPr7xZt2Fa5PCng85Q131zdcMhBFPrRGVDC25SpjNEpGcm2",
  "key32": "4NF3buJWJ59CCzuoNGpRqCKUQAcxZTZuhARNNYMDRmLgFQkm9zQ6ENycfu8dR3KEGS5hbUzv67HEFJkw9xyXDNTh",
  "key33": "4HigJv67PtisBxqjSz5sB1i66ksNxrTANaR1C9JapmuCGdhJEdyn9vEUqSjoUZoXmcSLFrN1LnTW71VaHUyMk9Pr",
  "key34": "32oebSytN5HXU3t59g1BfeMfDt1twb5AFfrQr3xdwaVSJ4e5sLhQw9jKdvoAQJAXB3cTBgmSwwX9StP97sn621Je",
  "key35": "5FcYmv6zc5s8LavvSoCqaPmHFU3Zcv4RXo8TzE756LJU3YgdSioA5uMwBEPcZxwDgo8KUASqJgAg4pRdZnkqKz1f",
  "key36": "5UEeNgF9TgjRgUqQ7izEPxf7nDsVG8aTS792aqScSg42BuBus8Gs6MMXCKunxrf9MJ6AjT7VnAHHzzhVB3sVW981",
  "key37": "251nV55Me4juRFefiboFCM89E9dZaWWnsTiBZTQPGPhHKUAF3J5D1A5g9esPBHFvQpj1HfKvmnrps9LUqNqSonW9",
  "key38": "2AXfzvgEJpWBDdEhowsYyUrWp9aENqP33fed74fdkvMjk9XeeH5XzVod5TynJcfSvsueJvTETTHkKdLwZbnpuU9K",
  "key39": "57Z1tfRyUKVor1NkWCgcXNk68KK9mqnmbtRbZQJZyHWLQ9cm1pNV7XsJakjFTevNSLT7wQfKGhHsQvBCosCQc4CM",
  "key40": "4bbZ3btgewYqE2B8pQCprQb5qabG2GMzJZooLp5jcJuY1Vyaw16ywiuvB1udByVaLDcM7tgQST5j1PFX9sKnFuiQ",
  "key41": "342FsCS7HHyZQEjGRGz1HdNa5drj9pLr6N2A5Phq1X85PXKCUxA62nujwF846p7mnvEyCevgzLgZrp1KBKvUXe4T",
  "key42": "48UnQw9rPrvgfCvdLTVTZakqPXXCeEp1Mn6bTwA2PDz2pDTxL88Jw83PPHrJt9XhNiAzMbDcgiDPC5Xi7rDEcmJg",
  "key43": "wdgHGEvfAt1yvLsDKYyg4bgvWfNtUeQtcffafsxoZKKwdcqdtdWMjcSnqrLd4hEJXABpmZFC24xcc9eLaSKmUjU",
  "key44": "52ZbjSSSMq9s2rv4A5x5VY55cRKjsPRnYesYBmHvEvEar2iQ1yJDSZgqCa6sC5DA8HWttdYzAaYURUkwjyAUhYZY"
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
