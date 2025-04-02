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
    "3yYE2aKKLdpeyULdnkk7nvzMq6z7GvGDBwMo1H2PkMfaUDce38G6gBXCD7gGEYBwbd1ie9pKZoHETfdZiVib8ZwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e4tnwJVKWcZ2CWVZZ4TbWWv1P9XHv23ABgx2cFGq6GxPQgNr23t6Sq7Uu1L34uqTJbEFVyH8hsRb2VpMu3P6pN3",
  "key1": "65nc1kz17dCbhawSL2tnSQJTb9YqU4zPJZ9CVpqUmsSzvyiLUGsCkcMxH3rvRzYnqzcxCNy916bCPNsv56cEGa9B",
  "key2": "3VKnpAsNWHf8GWDoca2fAYmoXiB6HUT35iFuV9G4BtHiV6jFo4zfWHo4tTiMc3ZtsaNfsazw9UEv2EpLnDPYZwma",
  "key3": "4AxZBHTsctJ8Xh2YDoMtUMEyfSz9fVt6F6PtvrvF6ouUqjyGEV8AzLTbX8aABxHXqpYEo4PKf3xHoLCTtkP5RTSh",
  "key4": "Bmz5egmr18brEDSC4nDe4J3f1hzBm7HvGKgvVtU86BB8ryYxK4Eu8d52oFLSzUiKRyrjaULKUpfoq43b5DgD3ev",
  "key5": "244nqmxVQiJT34SPciykkgj2EEAprhXEZeR9Yu3KcxAwvxB4GZqTgEAfwg6Ugyk4GJK3BRKuhmRmvba87rnJ3dcb",
  "key6": "5yMaTTxDojUjGBQ3qTYkHjDm8bt69v17g3RbybxY1v1kBbzLuhiGsXtQ7hmZ2PPwPnjVMWyjdymF7Usa87wQ6KJs",
  "key7": "4WPj9uCrwZjJrLWBbn4jksZZaCwHioWUfz6gVHKryax8jt6ExgchsfJ7CzKJtuntU8QopsQU1N8AozrpoKCt4zpg",
  "key8": "UsRtAk4u8eVa7okNiF5aXzrFdm4yCoAKuTh6gDXCyw32Xgme878V5NTMrfVwh9wsXbP4G1YKk315SGoJptxuKbW",
  "key9": "4hDwfZwnjWFuyy6Hn6x8dUF9TppESJ337qtnJGoa6oid3vXihvK41Jid5JDLALJJbvKR2wnBKDBjHkZ2oRM45wRa",
  "key10": "3eEC6KAHW4876MAkrHrVwZXNU9tDCnsSYDGPFxYRprnLMW2FcmmMTpW29UAVfAYauui7DTmc75U9zbctTphKmNHm",
  "key11": "4vjkc1GjgdfDieaEtGzk7oaBj6U72Ye85chxaPSfMNPTHqkVxzrzoFBX5KJrJ7K79WY36JwJskzzGmB4uUqeC9xT",
  "key12": "42ZdtagaJyqopBtLtGJuoJg3BJS8qMmm1tzHvteCAMTnBFtK7jkFSSsU9gYwBXaiXMtmPawmaXMwgGFLsgUynF7f",
  "key13": "3dSqPhXe2kUd5spyR3cENPNb5Vz52k9cdMgxxTTGyrAxW6BGfa2peurTKYmhrFDFeJDMG8oXD3vhVTWJFZp7EvAs",
  "key14": "5wzRyRqGoUEYNu2m8g3KtKWMdULDAdQnkSSFgFPYfNCw6Zu3pSvMgcU2sr5nKxUHs1QUjL4z9oUXkiudGD9K969A",
  "key15": "5J72rH53ttm8rAtt1cgMjAZcPf2ip3iJ6UFiXRT3FTn6dvi1FKX3V9FYA2aW47aUDxVg9xkD4fqpHuwNMTYtVCFe",
  "key16": "4AvSpqMVFRQhi6UWe6pmXaNeVg8SqBYcxcfaJqY8a1ExrJjt8s2SKkuytGQD8pREN2Uhe2surEo14TGS3EnNzneZ",
  "key17": "4CAJzRstm1xSAtHY4FGwEZixZfxquFwg8ZZprYvkpEnGsYaoYzKqkxqGKPSrGnPR3vvdChJYp1xQkD3dFWWVrxRv",
  "key18": "26iN6rw8h7TFuS3A9rP464759VpVZzDfXQ4mLzgKKiE4F2SPWDMtiMbfR9KCD3d5xXk54f8WsByYFjvX7BsfWWps",
  "key19": "2YxZCy4q5M5xS6jZsMqihdoveqwnDQ8WGoxDFqgazBkfhR7usdcQiX8q5CDMgz1xantZQSEZSYoS7dnPvnDv2r9T",
  "key20": "4WbduEKNyD2pRd8ypSfrUyEZsnWNYjmPggsqS3K87jieX2P8Eftx5QcMU3GwJHDrMRL5bTEsMX5sGdfTrMXKQ9kN",
  "key21": "2jU2o7JGMwmDFb9hQjBXKgo7R4X19v9aTcxRCrvxzmN9xkftVK81Xuffcvqs7EdHcXUoG34M2Sc1PuMFZs6vqQfw",
  "key22": "hbWJdqm5ZbUz4jfgwALy2YwKU96mFACc7oPQNtbD7uouax9z6iMtVhQqtuogrASnwE5rVcTzgE6rmnXWziA1gt4",
  "key23": "Zo8hffrTVA9BFJBgiQxaCXGeLMnvZfspewUKZ9h8AeLNJcU3ycES8PF3gbTSvqPda2tWUxq3SJyK9d79211x2yA",
  "key24": "Aw6mHcRPKfn1KKBGbJgaH5n1qZTVp9G3BoGqc3JgJGfzVydVMaDGtfHRTabtXH5GKXQuN7teVctcpzg4wYKLwZM",
  "key25": "2CnZDkwh1VjJD8McbLMJSkqK8VHVTLpajvkhKTUx7yAbJLK884Ye2z9WAuHPLgWNdZULtFoyTMat2LZA8QbWaWuh",
  "key26": "9DD5ZNjupXcq75RA3HTWij3yacLGRDLoSTohzxuo33oxB6QQt4NUKLhhHtTu2TnEKg3Lbg6Sua7hFaXna8iDjfv",
  "key27": "4NG2qu3QCLiMHVrQt2ZpTpJgdPkjpbYRLtHv2Jn4AwHcYAYVMMyi1hJFyww2yHRAbyNXu3JrFmhzPCAtGFkbx2eF",
  "key28": "5fGQDyVjTXjjdMAkEard6tU7qovyuP9fNVBg1k7oUCeJZ5yDK5Ksj9GboDYCZjs7PwQXwP4bDkbbdaBBxDD9SZDP",
  "key29": "4qBtRCaMLCmb29bcUnU5TKqAu1JF12MFHpEqafkAVUUgidbYbk9N58vgbNM9NfbsxrACcTHyZAXWnz1yTXbAxVDs",
  "key30": "2SL5nWyCXzLcKUtieXE1a7BUJ7Ee5QWZzyG2mvBU5GjVAQ385LJ3iy4aQgNBhsHq18tgRiYq1skmUrCDn7hesY1r",
  "key31": "2uCCzpC6Pbw5mSBBcN8Rx8zaUMaJHGXUtwgZqhZUA5PcCrEbXF5skRyWVcAmkoRi4EdgoJgbgMc1oE8a2Q2QZ3q4",
  "key32": "4HSNpVTfraXoDWCrpJ5ha928QwuD9iAm5Yd9zTu5tZRqG15Pqf7kwezJGjQgzLyWftdohq89R62jY1kcuuhGJfD4",
  "key33": "CMZwDDFDh9NUq8kKuSEzBLawBWa4tJTFKpNxS6Zikd9grAgW2fMZXwsSgFXnqPy2VFKY52e3QG7BZQ6MyskDrp7",
  "key34": "65aUb37D6ZpVbMTNvWgrvrGujHS5wWuJAtG9k3Sy7dijRHRngtwEavcDkqDzGfpncxf7yuqJEFFKsonHtHjd6cDE",
  "key35": "2CGdDz7M2pjaGWzX3uwjM88AB8aAFe4iiTDCAYuTuEqAw7ThBjifeQXmYEryHMtGbkang6fWTFpunwijyYTtvDj3",
  "key36": "3WtpPVVE5mVAG7XhAxPH5yLLSSRuzkcKEq6bauPJcArsxrqrXCrhsZ36QdY8dffmWRi33YSPFDjgMEf8uy2YVYuQ",
  "key37": "2MGgw3ZRzsQwnVYVeP3nYp3AEHZhfSVBpSNcRhMUQMdxnFTdhsSMj1spxKJ9wav3tUHwMnTPajppZ654VC2QD4Vn",
  "key38": "5aNDum7D7HokuvTU2Hrbu7XmEmPwPshRJR8RAMbXDvmUBNwht891KaVLqPwGQXYvJiKzAZcMmmGUaNm7Cm3Rrv1C",
  "key39": "2ady8YpN3s5MvMXBR6gTx65Cyv7zdYXKocrbA5bH3aLcwocBtXU9YCG19Hjn9XrLRy2topDUGwuSKrgRvxsuLZkE",
  "key40": "4YAcmoR8i2HVrRtrqK9n5YjJ2uVzw7TKaYnJ6m8mv1zFUWYmUJvwZu5Nb3V9nPL7QHGMWFzzyGw9RQjWnaqq7vtW",
  "key41": "3jwUE4VTjbcLmAs7QBN5hMBNg3W91Re17ou2Ra9q1puxRMVWoC5mvhfYEGitZ1NUW8ES5bP9bchxzEzGgNsoWuoR"
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
