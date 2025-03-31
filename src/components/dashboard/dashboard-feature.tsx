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
    "5bNhFeMAhgFBZJuk1bJ71XafJxCZuDAhowd63fWRQXRTojsnkRb58esczYCxMjHwSzgnqa3ofaDvwCXJLFaGWZ8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aASNK9GDqUNyBdYmoHVma1rXhXuapC9Cv3E9Fp9xL7t2mzZBxuwM2Ka1R7sxfxdeFjk1dw9QXR2GzhvqHHnzM49",
  "key1": "3kQY5edAByZ4AyygFaHByYZdw8frTvFct9HwpMQBWbULirdYwxFhjHvtAvLb7yqGyjrxMAvQFkKPAvMc4Jftn7jo",
  "key2": "2dBfq5Avp8qLpyfWUxnzEUYLRNt5brNrXSNNVCRRiUymH3C2o9q7bQPxgVPYpBRRYYbb1E4haydGYbsG3fZ4qasz",
  "key3": "h4NPrgXGPAi7Bwx7owDshYhNx4My3CQec81apqbVSxpAJkmucobgE7Qt1QgMDNkyK3EtgScXmEUQ2nduyfLyYSz",
  "key4": "2c8EwkFVeRayvtroenRD8vdcDhAh88d9nuWQjPQw1S3gQQ7qLMv5C8gcGA1it65Pi7qRuigoXKqXC9CtQEWJsjr7",
  "key5": "kvXF6baEKMxfRdnoVfdyKhQTJXMUqwZiKd1rnXNFp5oEXfUUMosRDspVTXHbgnBgoFFLKUfWXCK3BEDs9MyYoo2",
  "key6": "61ZqNYNR8qxeNB82BGy8e6LkBgaEEEyD7gxdQa6WaMJ8vLpkLKm3Ue69sVpP4jyJAc8vE5FffqGUhZbwsDBvhYS5",
  "key7": "4chqPTU3SkMZJbRiUDYiccWJq36jGeLdW1H3WnEQ2r6vE9WMGS26RuRU1WRTGvuXSZRZdjBztxyu5DxLjTTSnrx7",
  "key8": "29PKNqwFo6CSraikYayo2jUiwMBkASbRthKAkmFWNEWSFvhyKs5dJKkjXx1ZZ44VTKYRmmsTX5qRDiThLP5uAbnE",
  "key9": "3kVedE9x3QC2SonQPSCe4zDENpEqa7W43eLs8fGp4j8QD6x9WaEcUtBSKc2wgAbPzSgTZJzi9ragrvEyw8vNxgCZ",
  "key10": "98zwVvP9nwrmLV1EJTvzXDD5r4qhG5RfwGkqR1gpJV84iwk5P1padEJFnmKSQTMVbpHrismzWbLPXSdr4npXjkm",
  "key11": "5oGuxFqhNp9KdBkBxma3CRKywMvxdSL9onrC2gBHsoH1GSCq8hzHPpx1WKEzyYy6n1XfdYL2SRAacRg9uULSCfhC",
  "key12": "4Ycpe9dJfaCh9Ct4YdozDbMSApCsFHWzdSrL9K6zjimLcVgr26S4q4E9An8TRfa7a4KA53UJUHCPu1X8wLPHLFVT",
  "key13": "3VZKxFSfJjdj5ytWPBqUm6tV9FsYnYuiKZPiMiLi8zkxLWz9eksc1zavtGNTyxt39BqChcYrCSod8RwZpudzVWJV",
  "key14": "3iYZywCz6LW83o8z7Yb3N3m5VuucEAendLqahems5zuChPNgRr6LXrzrKzaCTAo1aLDsHnnVLZQHDR4yAhyR8Xih",
  "key15": "3gdSkhqq5mVx1sZ5sCUNY6GimH7WH9swBcNXwAiHdmX7tEhFXhEuE1vSniJxhQSbWVJd8kniEDcjJye1WMn9CieX",
  "key16": "jwqkRst7GBakj9foEBqHtZjadNakjpEXrR9ptJzbYLZpJ28zh1xSRio7JgGxiE8z47iSD7ueNAPbtt6vgTWgmYt",
  "key17": "3buLhk464zbXi37cb19jS8ZXc1GAf1TwbJMnf3ctiCyanswqp3Lbxpmq4DVP94vcssjSAgLPMGfm9QxYiTkMg736",
  "key18": "2ekaGeq8BxjbGifM3jwUtMKorGuUXtDT8hAzCsHknWhXNCcNxFyM2QGCZAdAGYM1n26cAMPGGeAi49wVeWEZBDYV",
  "key19": "42g9fks5UKozgPimvhzJf6JnBnDKRDmK28iXGNNeJ7N2uXrm7LBgQ8eL6cpSG7anXAsPQidyFUTMafRdkofLFcYc",
  "key20": "4W1nvsfiawnWA7NtkDDDSQ2bgk8zNfniERSDDHxvZ8tLgWxAa52m4fUmEomi1APqZkinEbp6SLkxKmdNpGB7XxG4",
  "key21": "5xsFeDwKHTCTBeyqfbJKvhnDHTiJu18DuGCGanjaTFJY7aCsd3AKHHDCmGnPc2M7LLe69mXGUNYGma8ehFdhWg1w",
  "key22": "4z265yxezwFpgJh5EirkWrAb6QuV8EjQWvuScV5yvtEJgAadx4QEyNiS5xyfrTQQthrfc8rtd7FEcD5xLkBYuwQL",
  "key23": "3zayQMgj5qUrRFmQGjDn7ooa9BMd6jrq6Dq8BAa1uh2q2WDSQ3NDaKC9hTiLEh5Db1PFXzoCMHKy63DM2G5rMBmj",
  "key24": "42XUzcUoy5hdqWw2i8hM64eMkgcdR52xF753DV3SJ4DnUbnGPSweisStncBSD5dFmSLSiRJkvsC5fcaBioDQxweW",
  "key25": "2HNq6rg4NC4YzqLPXc35EM3N8RwS4iNYnSskJhTGXvv1PVu6WvToV9DFCrUGYxAaTfV8xREMrwKeMjLrjxeTFwEi",
  "key26": "2cfyZn3KHCM5yvLW2uxHGe64wft3jbGJAiSPDYFPAMnf8TUgQEt1x81BGZroMzEdA6eQJYqyhKz89WADuPgd4ExC"
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
