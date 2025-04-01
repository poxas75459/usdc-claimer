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
    "4vkm2DQKwrMrroXS57G5oYpvQRs5cKzMF7XcZQ5BAxiHmhYWZZ7kE7Fb9YZ6imTSodzEhkrSyEAr7vtumedEYERm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P15VQr7ccawDRJYXvbwLey8PwsrffyMLZrkDAcLuxPdKVrP9JH5jazuycGR7ZXDuGKBEwjf1JbJiVgB72MKDo6U",
  "key1": "5poP5zGH4infPYRAJri3R1hfzNuE7W5M471z9Acvf1Qo8de3u7EzBeNkYUrXCmcWJVgagNNfX2emrhMkPs8oHRUy",
  "key2": "5xSRrHWhKpGbgovVPrMZ9gJzHCUSXxoDu8bGcnBDDzXNMvBwyH7JHn7oWaq3VnrwfWgsLGHeFfufFqvu5rwzYr7H",
  "key3": "47mBdtMC5Ack5hbQzCekop73EwijXx6BCHErbMUx1doBcUNABhUJ4fP9UEC5KJVv9LhpUaJHZMhutYuov1K34syq",
  "key4": "5qwts2ciJL2HXxvUWoX79wjaHJ8vMcx55mBVUZLxqDHk4kJFVNBF7aDALJiFq5CvdZXS7iGkxGDp1S5SuYnECdsR",
  "key5": "2LsuqCXCodK16B4S1bhPVqDuwKvPJFyC1PcW85EjDWcitXGwC7W1GXDvA9QXKdFwWGkFE7nq16TKtgaSaKAxuqx9",
  "key6": "2NJhir1D2EM1DmE7EWip9W69duX93dpKzwk39mCdv5dz1wPhBKMpf6DdDrX5jB5huxS55BHPN5ritQ5WgWjrgPPH",
  "key7": "5gGD6aeW912SCdjx4jqo2Z7ynU8A4fi7znL6hCPMczMRbtGeyzUegcD4NbMXuao1BmBEwNrqsuCZnobAUd6cPQkK",
  "key8": "3sj221bCn7J3b1TnL78zNuLQnRSihUaTFAwVVz87dvsW4PNwiBknNbKYfyCxLAicfZ5K86qqvZjR94ZG48qpCita",
  "key9": "VWKN9GVwk4pFhMW8hYumHeNhcWSmzJmApsGjbFzEd8GBCm2tf97GQ5P8ypzeZkAMbxv5ctKwELnv3ecfUk7Dayd",
  "key10": "46kaFCdEHUMnBpCHLsWctEcspWATeR5rjae8vHVhayGDh7G8mA2jHoT6ruduh9S67rsf5KhtfmNcE9THYHRv2jHp",
  "key11": "5i2AMov76uBf5LNGwMpYGiqZaC1X9SDT7czNKaZTE2qLn72CG2HhMtraJ6mBRkc7acScUz4ARxbVk8DisbTUMWSi",
  "key12": "2vgJqEDcs76zKpq2NyqECqiPp4LJrB57Mqis4Et28zdB3Q2pJA3V4Dg66zkHRGwmfGEFiDzZe7ukzwrP6r3MGpje",
  "key13": "jeEDbceuG62tRtoZw9Di7AJnZNQQkLihuh4BYj5FpV1teSXYEGvbnKhD1DLkZGuUoXZcZNJuf2pB74BamqDLq7w",
  "key14": "59MwBowwNp2XZkbKFSyH86vxTK4EexFsr3qHYVuQdiHLTWN6kduJFi7CyvCmsrZKxmQSWFBuY1VUaZYdgce2c4NT",
  "key15": "2KmiLrSpt3DPipQpcYMF73xcxquaXYgNsfWFLy1jpDaXLQMCugKGafpndXW5VwFpH4vguTTCD5C4fS8KGiysFTr4",
  "key16": "4ZCJS6Faxn52TJRGxkfrjsSDg9GsE1oL1zThhUQVm1MNuL6A3R9z9jsg4e8UYqWhkLMTsgy37riTLym1RPuDziHu",
  "key17": "hmKVxFLjFSbnuV2DUr6wvsbbBgdbPEboLBdVsrZXryx6XervwmFtXJ8ZgcpU4CZhmbbxcz6rQFyYzQKYUQfx5VS",
  "key18": "4B9aHYPS5UaKK3TFyBfSgdpNHfAD1p7PtWimHHu2BapRyi7Aujx94tyxsCSF215ZyoNazqfjReRNaXbsnbqnfKuG",
  "key19": "4PtsStMje8rtYgD9TEhZ624PJqHu4wwErAQdikDus3YV9ZDGNG28YcMMSNC9U1j63bHJ2ED611MSQMmekZy1qVZd",
  "key20": "5NmHG4Wdkeo71kdZxz7dz5zdwuv2fFSPJb4LTd9z7X59efiu5XB9oYcssiRXDcfBHdcNV9tSfwXonw2Anzssa582",
  "key21": "2bD6pzQKdt95J6gJEZNMtwma5upMLWLYnXx1Yee7bdf1W8cRNQKXaaMxEBDvB5myztwmpCCtQEmDjK4S83MPK1fC",
  "key22": "3c74i5HLbVwKh65rd9DYCW6vPNig7rMRuTt4ZTjVmGQdHoe1fujwHHFniwTyoXwsB5TeGJN9xrbBTBfTAtKVE9zK",
  "key23": "5dtR6wKbuPixQXBbbAPmwZ1SxF6YeHPS5Yb6WFSZN9eiRm9BsBP22qDCsSFsRMypwW2zqEpV4hP5qRMs4bnwLBqr",
  "key24": "DFbrxsJFkH6xFfnHXN4ZKZAr4FaEicEunCXBiH1vx19c2zM8PCaenjNYmpupwhLJt4cdw16TH7gNWKXLLaebkZF",
  "key25": "2rqrXFjWus9JDjeRqWQCMWgnaVkSB6VXXAqwGWoYVCutYvdWE8iNUBuYy4L3qKijrd55ZpdfBPCvA2uxBVLYGL76",
  "key26": "2NPwDNQuvkJfp4x1QWXGk5kc6MYnnvGuPGMNPLTQeEKDRDaek68Hfn5rSNwkYiHF4ioBdT6cw6A8ZSFh8CwVaj2i",
  "key27": "38b9aC22XJWmKpKywa5vCBUNHYzMmkXgD26dTKeaqFyGUJZobTMXyQ9ZSF7kFgQBMuSHTTYTjheT6y7xKHeKmRn7",
  "key28": "3g8M1bHEu5VJtaTTLAMsVacoX6pYLuuxS9w4krXrAqjMXnwdtKK9YCE8Hdu67f9VkCfWcpfYGeqUgw64iTRx8NGT",
  "key29": "3En6oPJsT6kZnYZdBLsSSrxA2uvmekNkeRL5azMKFGc7iYXNnuWbMqAcCtsC2oXvKQ4LrLLDsixVYkJ2JvR97b5L",
  "key30": "5U37XL95Q1AGN4XZR8wWhdrpUSq1aJFb9sPF7bGbPhsnDNhJxKaSDtH5jdVpMgCLF2bZ1gak1KBWY3PdtvPrnnZm",
  "key31": "pufEkYLC3hAsG4sUQjgBBniLPkmznA59ek9isrJRW8ivPY5qfkzy3c87BQ3KSBoWkSEremUSrLzeKHvEHsHhQ2Q"
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
