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
    "33oaAQyKqWNNaUVWAStZz6AVZ9Z5GfuL1hRxfmAwdLvLmcVeiY3gD5Qi3Pyst1mi98V5Z16Y9yqHX7aTUE8uNVBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ly9R2mMvsePuWQg2ZmSsWNx5JpwLkxcswqJsyeGfZAw2mtDYYfjx7GL1EcHf7wBUaXTHgaXgH74zsk3qD3Lkg7Y",
  "key1": "2giuSdezigucXYU4VVrXcF9WeRQTDpEesFwKCVfdWsGHYTwLYH2ECtE6obuk9GPm5374gE5XzZhxjamJQR9MCVjx",
  "key2": "3o8bb9MgFKuGmF58PrR5vjB6q9L14h4Hr2purGe21ScWqJSq1sYrbcCGPt5UCqcPmdbEDzHikTSSmsRkuTXUmjvu",
  "key3": "4SQ1Yg99Hne4q1LPZ2aodYfBjRRctU8ZS3NdLTJwgykHji1QytKHhwd84figSH2tb7RepBKttpr82WHXxoKWufaJ",
  "key4": "5Bdf4BDjGDbCUNNkA2CW3NnbsaQuJWrfKujqAiQxAcshX1GUhp9FWyURAugfFW6erofq4QxpQ7RPZpcabjtvuvuJ",
  "key5": "5Zq6uxRGbTShmrFncRQaUkM9MbfEgDp8XsnBhrhZN8c2dBhDTGZ7WMTYxvVLprFLiBp3xySFeP5K2USWdYr6v7fQ",
  "key6": "2WT4XNaYpJrfeQq8Tgm6v7xqYr9NSSzGCxFQ8cMuHGkMsYL7HzdtxSHTqh5ziTEaCmBaDenBquqsAFdi2yTQ2Ykd",
  "key7": "4d7SporD3ES9YZTXUYpcSTr2mKHHLygAuJQmiCGMSi1NzhtB7h5b83d7X5BWmmLX4825tyupVtJT5gNqg1RTj6DL",
  "key8": "2PBCsV52Ue9vBoDZzZnma9Jbp4RYriSRmMbYHmFXerq91ecdGPXwRmkNm7rvAUuNCgqxJGUW9yVTsT5oX8z9ehPh",
  "key9": "4ppypWpcVzbvvXCfikEjdq38Tnq2tRzbY3EkWPrQHRLPexj3KDZGAYrUrrtyfGRiw26PeeiKwEcVeaDaBmSZeXkQ",
  "key10": "4qY6AaRpgvZKypY8xdUmdT7YUykPnKLRt5dwnCHwGruoeACZe8AVtrywDxS9Gu9DZRCgRt6yvaPFkbWrcLuESVpr",
  "key11": "2g19q9mCSyNuPmdzYU9gf85KzFYg2fnRHTLW9B56gNvHK4fQoMDHynxabjc94eyiXc2cxBLbNzhp8juSR6dVDe6d",
  "key12": "242JR5LXYsTKXghNHnYWUpdzMNmELEEbbs4t8Cq9grTdHPudDXCBQbobCwu9caCncyQMyMUnrFGiCRbV5foNNyit",
  "key13": "5GfHZuxdphvWvFUWtADURhFZRWyvw4s27qpDLHFtZz5bnSvG5W6FMN1j4cCGbKKve6SP5VZqncoH4BomHBFFoHvP",
  "key14": "5NgjeqmtBHZ8KxtYF1g8BUYSbCg2KgppftmjYuNfJh5TquYGDR49RDaYkii9fJDhF8KttZ3EXmGZ1paR3g2hoJcz",
  "key15": "25gaEG5kbGxCYtpXHu93KvNryKaVzhrF5Pd7Ly2Y84j84A1ETPKCJFSL9NWPmMH2B3j1djTy4RRJvzW6ETyLuSdh",
  "key16": "2iYgjLZ8W6b6RQGA6hatg8hCHeJXKwMm1REukMevnkSZigEfN9rATZPUiTDgyDMbB58N1U93dG4eZMPAE7GFbQsi",
  "key17": "RBpQv7FULu2gNLoSPMMUFJNcyTaFJxt7dxcMeVJ5b28MRtkhVXgneW3kksdoiaicJj3nJ5ZLf3GJrWwbx2F1Ybc",
  "key18": "5EBLYXEE21pbaxnL1Nz5BdBN3vaEsae56UQYiGbBuQdXCz9nLiiGsgRGWFodYyTm5iaKWEa3S4fd1Uzxnh3DJ1N2",
  "key19": "fz1nZeUhhNStyPCj2M8ZAWU27ppFmGzBARMpZRKqXy2fQKz57gGVzcd9aDjFPX5je5pQMoV56o4ds8PSC5VA454",
  "key20": "5sFMYhcfZw4VovYFajrMZVoY3QyeUXBcX7Tki8iqYST5UmcTy5Qt55HrvdW8jedDVk1mos3gayLZAYVvd1PJWLnk",
  "key21": "2hAkJPto4b5NHME2a3qK6FiTD77Mg8FQwmCoKehaF1Net6aQivQFgoJ8PieXshnZSFpHkgL4eWkzb4GHiwogx1oN",
  "key22": "2VmkNDttbcxERUVZqFtvCgCNx4aM8uHdtb7ssMDfeV5raLRW7X3ENfD1tJRxMDm2sGLE3mpYDvPEh26rPRcx9gnv",
  "key23": "5WjFAcVX9J28aVHc7LWuAWwsR84WsfWk1pTPD5VUVNfEqRKwtWAYjWczPdu838LN7nSY23YU4jSfQzbGFKZuwmBe",
  "key24": "5GQa4cQA21Urh1wgXfshHbzn9yRVVcVAXsfQhPdyDqBfrQaP14twq7qV53g482wbc28FiRGESkxCGk63rFgJ221V",
  "key25": "4qGbEtVE78nRTkvXgAEsAVxMbBxCeXr6xicBJ1rycDNXGq1Hkkm4XNKT4UmdAo22tagJjwPZ2j6Rzb7fXJg3CKEE"
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
