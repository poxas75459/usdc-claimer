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
    "2kPa4geEq97dmtx58KJDnmWUqyBRaxS5bNQS2bnZV9uE2WyHCQ8vvUD6MBvLvGjbm3DGza7zpsx2v4E8bgJ57BBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VTXZVf2Awm3paZBqQgnxZGGjJCaSqYY2pLYQvAocKr8XAeSdWQZ4nAK64XNMpecRyEvNofWNiRqA7pEQd3nYKyy",
  "key1": "33RzCt1NLaPWpV3kQFcgkHVrjtsuW8hiVfd1We1ZYMa2qx4ZTMHGfesF19pNZiQFc4jraeTir7yHYYiJUFZVDj1S",
  "key2": "3hCuccwXbqrtoMSY68ZxEB6VqpMmwqUDvGZrYNAipjFqycydUcGsAWCF2XUJJTGTtjjU6ik1nrvN35165wQUvivd",
  "key3": "3Z23rWB7EujStCdLmJqBG2kPwGBX9Rfr3HhZz2bPJK386mVcdcwhEMMAixf1gX8dZ2R9fRPyEaFbnpd7fRJQBJNr",
  "key4": "3s42b9XSD7FWPRxnhTWj95L7AM8p25K4RYZHAroZos4ey7pGRkmRiNtUpoNHaxd2FrzxzvwBfPRCQVJ1ovXXwXTU",
  "key5": "5atBhUWXTGTxqL4L4GmFTjwjL4mMwkdvzn6zfcHi3ZDYxfMt6fFhorjccT49L8EkeAcNBo2oZQ9zPSugwWwWprXn",
  "key6": "2rV9dRq8Q1WgZHedbaJSyznuEqNfohgd2i6kwsJ7mqMBovdxJH4iQBB3YGRgaHkVMJTwaLHADv71M2sYTNKfgoRq",
  "key7": "FbC9GNXbSerH4m3es1NCxMxvY2ViUEyg5vPZbBgHXfGHSrvEaQD48m9NTGYkjGa27gBM5BVQwiajbpMTn4cWS8A",
  "key8": "5YMJ6hTs4kZQ9V7MN4s8hNZMkR5y5GTuspLPZj8gnEirwP5TSRmFynbAg69kpmPhY3J9kD6Vg5BnQDqA31Pz6Tu5",
  "key9": "pfEHkyu9TfrmBTzeAZpGhWNxrKpdvhhVchbcxdkrtYGwZFi8wKEFkCjWtnXBKuxPZxtw4YoLF7wMAteDR3zch2a",
  "key10": "23z1ej51yZbx913dT3qU6cqa2EacCszn83XZPXb3Qvhnd1Sbr3vvJjUPuFVWCBdqpgiLpbTUjP27abKzbTJDVQEX",
  "key11": "2yu5MJ8BCFksqF5B5cho4i2JYSMeibedZnqFGYCtaxwWaTsEpn7PG7AMBKSpGtXHZhjkq1NafQqAPMdfwZKHyXvY",
  "key12": "EySRsvDKtcUu8n5sGPmxL6XADm8ysHo5MmnuJnqHPQ3ZSYB2T7gNnJaAvWxWpFMnQKXCzcqBMuZABipUXhMa1mi",
  "key13": "4pKTxUycCLk361KRRk5aPh15y4CeyECR1QWJigeMkwoPtPb8PrbM3kAn6PmbB9JV5ejewfEDXg6HFZ3waALWT48B",
  "key14": "3aQEhzqkNfeRD9uDkoHLXQEjzP5TQYTwQbySQxaDaGc9cH29fxNSynLroKHFUHUCFq5aeWYsBnAkE1JykSDsAdzt",
  "key15": "5rx3ocmTYHscgkqFbtLw4UeTr3rG6GPJBShR7Jg2gaUJjRQharbFNQa3tr847oUGu2ZEDowgDfcweY9AaB9TJWyf",
  "key16": "28rWMJqF7ib7QYaYNWG51KGQ8XYFJohuCVczsiWvt9VzYDrHDt9XevLGpQHyKhYqwbqU9fNpD8nrMFh3t4YnTxCL",
  "key17": "5xR1dXRffiSEXtD2VVDSLHRLvJwmATwWwby5RRvk2hoSpBvQXcrPqYTSX1EEb3sFgH29j7oDG4D9FP1RCF2e2kQX",
  "key18": "4TQuvUSFu5A5j6V78HKUNWpCYvJPb8SdebjuFXYe3Jo6DPWSC1n7zRXXfugpbBB5bEqvzeU8XwCQrSCmdixD96u3",
  "key19": "tEZULNr4B2P5rcREkLgMWWzhoXnoAKbiNeBWp61m68JyE5beHgv5qrr5paoBwkW8SU8krd1C5m3Rt4BxiysB7E6",
  "key20": "7UgHeWZhgDspTb7foErnqGYsanDZgDYWqamn3r8jiYZNzaMAzLnPAvjZJXWN8ccwhjPQ1fLCjVzu14r5zz9Jh6N",
  "key21": "3BmvNGof8BCpWn7AazRMoKe5yVVV5piyQeEja439JDA47CvymsfP5V7WiEYCWmwLtXsXHjkjeJzEJJMyGMr5pcEj",
  "key22": "4JGJ4ake27RdLD2NCUxnaxwaGqst8QdFLTbs8tgKhpe2syNgkpfpiqE2hBKAWRM4zbZZQCpwXsAEXPcs7ArU67f5",
  "key23": "622QYoJpURibT68cbyEaksAsEqi29vjJEDm7NMaxXhawcwKaXPCFMJjHv9UoA38bz5nhukeizoc5NGn1MrjtqQcj",
  "key24": "2MixYz435CSSWqTRHYMEWd5wd1uW1RHHpwtLjXSC9oiiViKqQJiviM3Q4dkgq6sGCTNNyhayyh7bGBf9fwKEvnsb",
  "key25": "gZsWzEoci2e3MxBZFeH9j4U35mJnb7GJKm9ssvT5hn4K5oSCQ8rxZQgxHuenru2R2ozV4UA6MaUyNTMMLWFTJBt",
  "key26": "2Up2KDekP1b8SWXPVgshaxSffbT7JufHG2EDTKXQe4kV7m8Ftw9tAxxoscaWHXMkUSgeF8dK7BRrRWZpjkZkxEJv",
  "key27": "2viqn36p1zcxcHA9cUQuz8sLrPdVrqNfXFNvw8MsYcUtnpWZm5WAtG9j5cPzmzLrLjUMLyH5jphQBb1wxshdkRG",
  "key28": "5wHKJcjrnzaDQGfvQebNaNBmiH7Noy4Tqynh8SW4StbwWYB7bXmV652TgiGdh24KGg3B4Jk9jagECpbR5gMDXA8J",
  "key29": "29KDHCcSKNTWXVCt6ARGQfLeRcyMAknL74zHuWZuuBJurzeQehVeaNwfqCeTiRUE5w7ixh2REHmVcC1YZ9CFoESq",
  "key30": "28GeaE2j7Tp9mY8mt29EcqsUyDjMGCNaqKoTEBiuW9FoGmU7AxGZPfnDG72YExZfLrt6Mh5i9zMqZjHjFgAi5ZKM",
  "key31": "5XCExhJsY4rZ2wXJePfycXpvEKYakrrJjtdUNksBqHN39TBAGQTyHtDGWBjkQHey9hLKCQQ5XashoTPshhxx5huB",
  "key32": "E4UmDnXYgTEVLDrdUsLUMFyTnGptUsdeBHMbi2rVc8qhfttnyLhPYrN5Ugp31UUFZmiosFiHvXiZxq5wJMhph2T",
  "key33": "3VP46G9R6nyroshwG6Xirc5qpoyxSZieivdPFPgezHP7TtxZGtk1eqaBMUTwKXEpaw94yTfYshC1fRkfpkTGSvLk",
  "key34": "5Lhw9PydWnVjxwNj9qdBB6xNjsCykrEZPKvQsoKJ1emMjWqMXKwC756gu1ybdVfutKoNQNdp8oY2eohZPG8hfm86",
  "key35": "5trAenGDvehF978rTWCP1ta4QRbeYbeirgAGiL8ZekYk8SZHerx8V5vHoxbLjoHZT9878rheUf1RV2jHn9gHzwD9",
  "key36": "2a5vGgkZeiBsRk36ayE7i3R8PQwMfLfQBXfoPFiUbirUGg5VQy5cKCV5uVWLSjmu1VTSWLWHJJPYx4uVcJVrLniV",
  "key37": "5ev9fDYwt5axLszfC6EQoPUzcvgpDF2vp2EutGYYieA62Np4f8Pn7zfCVvUQ4LxQXMd5cbEy5Ve8rULgwgPyJm5W",
  "key38": "4kYECQ15czza4PfP3gGnjacCa8UoVNbAYMYQPxeo4JQYB5UBte2Kj6RdQFMAzHQEK3gsSPZ99vHr7y4Mow2hxLD4",
  "key39": "npxhqppAxDPLRhE8sES4iNTvXZqaHqPNDTjrNbtCR2bvd7LUKGjCwWbLLcjWmWVPEAVK8qBYj9Epmk7GDTRuvsL",
  "key40": "4au5pb7wtQ2SRRqk2rH15qj3u3SnYbaTDDnyFF4e8bibV1v2CGAUaLnxZXRb6WQ3Jpg2aPaGspi7jPumQ6XWiGrc",
  "key41": "66cH9fTW8UR9myEXQd3bqNPCrpeJBzHwoCz7KpTBtczxdjjRnwcWnZqanXqPcSWnmvqSRSbjPKRg7qAy1FWz5xUn",
  "key42": "3BbQG2Dx5yrinwcC16uicWyJKGPeTb6hqfqqLmXv5qNQ9HexfyKgTWCVzVKz52nRCShAvKjx5We497mYTy2EwvkU",
  "key43": "2k4yovzREvYAu5NgFmwChtbWSb48RnC1FaxTGfZ5iboV6RmwvSZHMSfBsCCe5TUnmJAhiDGBYxUfb45hMd3DKQU9",
  "key44": "2ar6AHg2MzhbPEA6hh8FLfB54tN9dH9gM48DaPNc58jHwKzdGbL4JQSmPfeuMC6yZzqrHea9YjiSE9Chsn4vfZv6",
  "key45": "3qfuhW7g9De5U8aDDiQqRU8EK2igfER7ti7XvuGm3EZ8KxjYTo2vawthei4sDpbe6iS5vZWhFL4QUrMmAphZMg8o",
  "key46": "423qbTBn8hawe5y2VRj2ZAZ2BzdcAHsdNErDaj92FKBFTdnfAK3yUzfFeuZwJLL9qfpMdBxujYjRashuYfHaHV5u",
  "key47": "64J2jLpuPfzWBnYcvTfjLYHoUhyMn1MZoER7EYbaH8bVcaNiCwULMStgsGgNtM6wsPqR1RoJF4sAB9QgtJT718YS"
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
