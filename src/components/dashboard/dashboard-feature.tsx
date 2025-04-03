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
    "4wo1a8pgW8o3xr5RKLZbXE4VCKecXKbCsAcTLn1Yqxxk2tRDguVakyY4bw1UjuPpcLtLF6Kx1Vhh39cksHfVpbnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LZBE7k3eaMFs8nWgBi86xcR8f6qVFu8bPBMgkb5AKwhkrBMiJHXx3fdGFbnB6UdnBbGmJU7Yh9Hodsy1oZefash",
  "key1": "45EPtqRe2tQZmcfsjU7SKE9Hxr71mDC6mMchhRtWksK6vnzC1oS3c4RLFxRK9GyEFvhNEv6UH5tp4M51GGT8zSaN",
  "key2": "5GKh4aAJrrntRdJsW43ediRb6uTytdrKyAWmBPBwHDP2dtzgeL4wbdLL8pVu3wijtuqdwKMyCVbYn1SujbvykxYx",
  "key3": "FiBRHEPkFKYSjeF613eMLsuDdEN7h56PjDJXXFHwQt1VSftQcekZQwhtcxC5YJ5Umj5vfFEpRrERwz9t8pakfB3",
  "key4": "sb6BPrwpBKwk1LBf4s2jNKRmMce6AiGuYLauJFhfSMg7aDNRnNY8mFjStCXGUtiy9TTKR14fpT71Z1GjbS3BAxC",
  "key5": "TGa5kPTD1RfdqAeCfPCL6uA8ffT1vsGsD2TYr9gkB32W8F6FceCaXkKFFHFmpbpQLLEDjtDeo6KviSNHeC4wgUr",
  "key6": "2QoaVJuo2XHc3JLUugXTxAon6qb5H1yQh56LGTqqA5Qmsmjm839ZaiPfVQhNsEMAdD6nEKsK2PB4ns8qzF1edKih",
  "key7": "2Z9qo7CxqJSvnHBGfh3Dh3wuAdcNDaHV8QFYvYSA6Ydqw4jZ8EP9YT9s545HZuzihH7hPx8cuPDwuFk6ZPgjS5Zd",
  "key8": "38UP3MJRrzKoHxrpHfGK5jAiKk8rmx71t18wbM17aRybVqYt3wK3Zyq7fargew4BRKbz58go8irLofLo56wyLAan",
  "key9": "4RYiFcFr1xScPUf8nStbuseoLcuXqeF8cyY2jGAvVKtBRjF229c2fgZNkEL5AEUe6UCXtpeZSErrMPuZW4C6qCLL",
  "key10": "5RDPheyYdBLX7b3GQWtAJeMBfttHWDAkC2RcmWSrKWx9cjzRvrG6wJT8wfQroKDyrwUkwKom28KhoW3XxKP9JSd7",
  "key11": "5eqhCKgD3Hwc1HpiC1WxKSL6mDNgWR8bCh1FMHUGdpuURtSiksY4vUkpuGD6b1UwNCnWBcoSWwNm8k5eUqs3vBSE",
  "key12": "653FCbwTP7LYjXGLZTM51j6TAVAmfwXPx8uiBz7zK6jUxBu6rbunWuKpySNfirQ3e8VktMHoFZAHXT9HJfxiwGWV",
  "key13": "3zJc96iprADzhyZbZyWaWYuU4gj7E4dYxbQ96fDeYfDJvnUMyEbpZsFZ4Rea3k7x8EnekjsLrJSxsn89iEBzBPxx",
  "key14": "3Xhq5kdiMJF1TSKuNmbhcHxMvm6puEhuT2PK85Sm76mXCHsME1SdRqyaZkco2TwW8G69c1RgPXvDihAHgrAfd2wJ",
  "key15": "h1Jy9nPTLm1AEBFuBQ2418nHRssSiHhYY59iSiwJAAokdQc2aCCyLMVCNmz3AnGg4W2qqHX6fbEFqqvne4Xx3uP",
  "key16": "ArfSrR7BAdMuiw14ASctVynZzZcEvLaoV3qCPCP5AfAXzEeYk51cwsa36MTP5jcaaE896RwoS7L3uC1JUvUeuK1",
  "key17": "2M5yEyQdjeVpgYzcfaRsoXhsM1hiGQgD4X8YEjeUqE51gFLfJJmKy439arryqrEpLtkT4wqyJCKR4E1yY5BXjjJh",
  "key18": "5pjEgUwSAMAUspPqwEadr2XXSTvEmQt5kE9RwGXCFaqbvRyFqjnQUij66JrPRmxSpRSwqqdgt9inoAUqYorsCndu",
  "key19": "2rJekcQMvAzFFgNDFYpm42is8BRQpQ6YdggHKh93m4qcW23J5fkB5or2oRdRe7zQ497HDnrfBWRASEujeUj8Np3b",
  "key20": "5i2Jnku95xNxwL4BPMPuKEfZE1RaxD3ViZKQYzEu9WyouhazH8ubinV7ip38RsbjFSM7WWSak9pVUTStexJqxHWi",
  "key21": "Hu8VTvfGbRBjkf7eGUurdtvZMdmb9P9XfgmERDGFCpjt269Xfn1NkUrGYXaKm1KDS1FgRmGU7faq4DSaFgtgW7w",
  "key22": "47tn1U4CXq3a3YRvetXQau8YgDBhKkb9V4wFyU8ypaBCxD7b1kofhB3zREMbRyjpo2dxtE4QS9vfUAALc4T6fxgi",
  "key23": "5uh6iz8BAega39tnopHP11BqHNFzw2dBn1ziMUxtisSDBhKekWADVhn91hmJFvg695hAAiGiarftLMCopruEuVVm",
  "key24": "xQsPQC8HABWyVAVUHokDgm8bNTWJFwzpjL6uDjB3ZgUAiLY6hDMCv1Pus85rQ3srWnFVwyS5KUAC8yP85cctApd",
  "key25": "4xuVPQCXoUXxgVpmWJ8cUEVaWyuH9efrBPmkcg2zAT9oCsVRr2JLA7tQ9Sw4eNFdBccZm6x8AxCA5xizN8cE6DgM",
  "key26": "3RYVWPCKKTwNUQAscwUeZZ7SsfdzYUiwD4g3Uqr1ppLYfp2XLpZXQy94XBuFCpWdtyA1PyfeZpYwLqsbeoBeuHn5",
  "key27": "46xFMVBaLBStFiKHdydCrLTZkQCrsYLwJACEhPJmELkcFfzgBzuATTqr4CpQYjrMNxsMN28JHtxdQtfZ8iufP8ot",
  "key28": "Z2jnuEzpoS2VZgbMsFj77hzuzUSAWCkAdUAJRrmoFyynKhhSRRbxoWjWYh2VMnvcLxm5GBWuX4vsxn3W3CRkoVk",
  "key29": "4nQYKe6Wkmfq3nP5N9LFKUb7bzw2Auo2fjcU8yhJwXJ3tRm9DYGys71jPeQcQN2pR2iyY5sWnLRskSdLKg8GfzHT"
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
