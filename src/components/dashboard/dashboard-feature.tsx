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
    "2rXjjeBXVxy44dawNn2tMreybGt3enmerhRM21XHeds4VtChD6i2jqKVSwdZEJw9gs2QQ7PtQXQkhMhKXLVjNjCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBXLe8kHAREeBxfy5HDqssMrSNantigytXs6NqsdXq1mz5KUBwttdoxYJzBWSqoJ258KJTXWW6ap7HuBMcKY31U",
  "key1": "23NgBAkQ3oC978QQyDSxBUULRXYVy4W2ZD6admwYL4AC3btAmywu7Jgigjq1KqLqEFZNsYGwKFjgdBFSo3g3qDP7",
  "key2": "5GHyirwrfjrA93C7TnF5eEAE42fEVriA6zjxdefMpkee7enbHeSCCBWviivVb5bYWFHnAatdCk5dKbhm98XDFfPU",
  "key3": "4LUVn13uKqNEPsXAnXPsW6DNS1Loq1S95UfbYfCqbZHvYeyQZbjAruX4BubeFZWC2JNebuYWp3gHVFBaEb3CxrCL",
  "key4": "2wLaaNe4JFFAVBQvJdxVMAv8KEFQFzWyEbxrHsana2Acvg8eNZisSxuVbY8dvdYpPRGN4zmXPh7tjPiPJ5KW8xQA",
  "key5": "5mU1aDAGEHCx3Vhobscw4gjChBZQBKGxuBpgEsAngEhfKMobtheaLpWRhzLynuQTrMAJKZ7ipXuiSXoYbKZ2jGJv",
  "key6": "4aco1m3SCSgQCngE9Mmi4UKoU2vi49CNSMsZuAhWzE4Pth7F9pCMnGBCPzD5hYSfL5HCgGVHd3dm9FjUqrrk42AJ",
  "key7": "5kiNQzK5sMf1mJewcH1jcjLLxyTushgjMEokYqSd58Qz1kAH3RXkqV3nC6k3sGJK93B73SjEgUuk167ELwfuxCc1",
  "key8": "2qcDVTnJciB8RhoUat5H5qtTQbu3EjUyky2oX5QsvgJpu6onhSa3AW7aey4wYYyYZsB9JMTypQTJut8FWf3YSgJJ",
  "key9": "xK1B8gdzptjijEd6uPvpggVMREmMHiRd4MX34jt51xJJy5yBttkNFFze28yPUYMp7Ce1fUUtaoiFPvAAB9APQnV",
  "key10": "5XpYj4wK6HFgLeAhiDZCPBLmfNYd4yPgtiaQpYJfx6hZZqkS5djcuViGHYgfh6wvrfBJoM2rFAkXg6vpL9bcoFbP",
  "key11": "4fkqBuu9A7Dy4myeqUUaqEsMd93Nn9ViajiR6svPcf2m9JVA7anKuCTrvBczVggdXHBXSh9YEXVfQUPPNu6LgSSd",
  "key12": "UtrRHJMPiL112LDR7N6PgVzABoTvbaHf9nqtHXZCwLpMVEtbVikevM78BBBGzX2htVqFgRHYKng9VAzB4wMJttt",
  "key13": "1NLDXdPGj2sYhAG69yPWaGur8BvjAfMKMVTUo7Fbgs52jdKcvvq5FKoGZfbBhUvMRP86f5Jh5DqDqc6MreEpV7X",
  "key14": "5DmQVbMivupk76Yuzd9rQpZbVqFv1nT1GA3CR44XA7SP25HfCkksAT2e2DTqjvXYYuZ1cRcLhzbztEYicCH5mvvK",
  "key15": "iT1aWnsHn9ggKGBPDxmnpw9PN1vgPLFgCD4AUqCc6qmzDyxYhkvzaFSMp1FzRVBRZ7Pa8B8neSMRuYdAWLqm9g3",
  "key16": "4pjB28egvHQjhS2DvjEAkNNXUz9ez4xLwBMig7rMA7W1yiRpXxLEj8CYC9FL4NeXNLSSLTbaJf7M3EDfVKkUCmxV",
  "key17": "5EM3ym4GKPd7U5Psp6Sx5iDQ3VC52e2u5tnhwsBnCtWUqE4j6vqprSE3Ghyh3GWej9SsLS3VgA7pPfe33JmJNaAp",
  "key18": "4Tg7u7L17VK21NEuCow5H9CdbazFqoVpibjECsNBo7WqB7Mpgz5v4ZL99NavASNthLwis7bRxY1JDY1k7VJDRYuq",
  "key19": "4HhxvzK7BcGmeNn3LHCd249LchyBVH5am3qUm4sdTXAEXHfidSMHgq5cNZLXn9AabF6uTx9TpeFHD3ChECp8FBDV",
  "key20": "4pkmsaEmfpaZBFK4VHjNoe1doJB8RMSfLBHPKF6e78rXPCfMdu4WdEHYMWsETcA4nfd9WoCRMtxNrxCeqki8b8U5",
  "key21": "3Pg21AXFeCTsUXAbCf7dksSTBpvgevHzWzFos9NqofniQYJYUdUhq6zRhgJjsCprACYkry6MbVZx24s9gQi7t5x1",
  "key22": "3FhByyJLcgevTuw2druLSQBVp8r2GU9noCHB4Z52FcAiuT8tQASedFsJwzFY1iiZV4zUcwTUedA2JU7zXHu9at61",
  "key23": "5GvcgqL8GLtagijN6XrdroZWgFeRyH6cSw3rhQC5pf521usow4DnodsYVGxWFZPTxheNsmk5agjZxRJ8BC9DwDS8",
  "key24": "4Wr5j5Q7QQ3GvXkzRxjP3bbHtdBShhdHLHjextdpkqVoFsLjNYG4v4uUrQW4jrUPs76VfNPYTZ7ZjmMRG3io52kz",
  "key25": "2VMZ4A3zuPFxDKaVBMQB2Cr7tPYwYApdemqZwKc5WxYRFX5z9v5FvXrTb9VddtbFn2rXRWQQPh9Z3FcYr4i1yNPM",
  "key26": "2Ute48W2JEB3gGMibsJG4gjyp1TmD4QqFg6Z2Gf11n3fxP2s5h2hQ6P4T4HfkKetcQCzwPYMr8TutvTEh9WfXbjZ",
  "key27": "5AjsEskyZat9vWGRwmJqwvFaRgToR34TTVhPsGjQfwbqui2MWUZB4bq78jZRZ8YzSknwLN8BK2dQiJyaGwK8ztnu",
  "key28": "32iAPGoB4mk4bEAYqX1Q1pb6FWD67K7gtfZ4jtCQesa6sG9EM8wR1Wtp7acPCzeAwSmT58pxytJJ76NBVYEtzybB",
  "key29": "4Dq5DoPkoz3m7q1PfkWPoFMdGwPWUnf56hRe2ToNzWFuACm2QsgS4DokjCKt2HXWXU3NffzuVdh886qePQoFjxQa",
  "key30": "2r5ohNbmz1kTwGGnJ6qJiTT8cD4kipAQktSPJ3zTm3XotAjzdeULG62jk4Amwz9SmAZNyTvp8PYCPRs6nv8mvKLz"
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
