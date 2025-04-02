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
    "5KYh3gqTubkhitst79RvPJMTWNoAfuZruxVuNJCj4q57QuWbVAup9w1SFZ84Gnmc1zsexkK57g8c2ah2J3d1aZaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bh7d9uhczpFBodVcyVo8Djju2ysksKuKog5uQcAaza1EnRtdxE7jtA4dd9ZF1xBkSKuXbZtFLZvLN6FJLvE9gcm",
  "key1": "McxmzjzCrxdrRPkeeBvA6LufUaQPEFuNHQMu9nVASBuQQQuN5ArAHY8Xvsxrg2p56JiTfdFxxXtxhBrXi3pMa2M",
  "key2": "ABJ6sR4YJSaAuBQNWSUXLQLCBS2koLfdrXyNydUW1VVx24EvwXoV2M921pYb6M3yv6fDo7J3yAbNQoPCAh9qyno",
  "key3": "26tcqrjDHtDbefTmkSj8iHZXWJ1phR1q3c7DUVgu4wx2th7NSBBjrTfssB6zPaFG9XMa44wFyp4mpbGK8qfXT65v",
  "key4": "2sAC8YLHgMWJP7rPGmemsGDPBfzQFSxvucFGYQDuKp2KKUrq3QT6pdErur5C9259pAZYqgVsv3GdHQnRTst5qdqR",
  "key5": "2UhYEiPqkLVQaj9xg4aUXev4dyJ2F8s5vAWt7viJpshZ8uexny87kRBSa6qX226apjHj2zcSFhDHKJWjrq8UCfRT",
  "key6": "5Krr3Ch2JAp4vJENNVw73YvZuspWCJLyCaRbhqYDBBP3SkdZtLXF93HpVzmdKRsHv7fg1g9GZMrLgbat1qae1EcF",
  "key7": "4ckLKMgXiUQkmMdYP3tvMPGWdYz9yNTnnpsc632vKq8q6a9FLCfXiS3UGKfJHhp5w2LT6RFeXYrvSR4qVJEptYDr",
  "key8": "4HLc7AmxDbygcrXUP2vCA5zpTS82BYQR1fy8zRXVJhVtBRaKwzXakn3mwzGqo9vG7HxgeLyQLyQKjYEGCePEeweZ",
  "key9": "DbP5JGEBdnyv7L6UgwSA1DKNvTLw8dUxtTUrvxwARdSaGVhDgV3apxi4rEWbisohp9DxNGo372oDLmEB6WpgFmG",
  "key10": "3XpREsVCcMQwaHwvW15FojMe7VWC8WrWK8oZSGn2zz4HW7qE6X9VmWSQ5QKjjsr7sHqcXeEYKEizWPDMdVtHJmfd",
  "key11": "2FeAySKedjbmveGr948nphEEGXGTp417w39DGYwVi7d2tWMKGcfQs2nbcmidxXgjxtuJvrGEVsos1PVjNCsDmGte",
  "key12": "5tb58SrhkJit3rTrV8RHPS9vn8G8vthgZm7DMyZoQY77qdHcJJN31zHq523dZXkNAo6kD6D1Ed37hcK49qetbjj3",
  "key13": "3Za1EdJFRSJJD6hR5Uv7yoGDDj56KYoWanM1iHVmQpgtARsLdn1RNguiB7rxxj1irmRd6YZXYgiCUSDMDmRG4i8v",
  "key14": "4xyXhgFSCc7sUSa6BR5jKJE89KpaDsr3FhSXnnVQruFpGGpqGM49NVCCM3xkm2um9qkagZY5VyNfT2FMtMqKdEPk",
  "key15": "UwTLw13QzwTxmJiDTKWVserHZuaBVoL7T6JCXUNPzb5JRS7DQEkpxpc7he929wxU9QdtnuD8if1fG7itf3DP46i",
  "key16": "3MDeyEMX1EdFLz5754f9Gwft4PA7Nic3QdTKZRZHo8Hn4dH79b9mGjz3B1zu3cLR6tXzu88kBDSqZQ4szfiJ2VjN",
  "key17": "5rJZU5c8xtL6D3uKYHAe5jDojrKsyrqBXfcieKZUTBz2ReuioYhTyJAihMgpD3X8avYaCbM7whrHWKeXNJyEdxUp",
  "key18": "rsvgwcTvmkkPy2xS7DyASEs5e2LAWYs8M5WVJCgnV2kepDyNUuMTKXYyp8oQUx8RH1XZuh3UKfHeSbmFT4hU6GQ",
  "key19": "3fGHWPnXtbwvdh4yACNpwAntxNbZL8aA2mttYLUpwFgXjF4dctpykV837g5WFHYRTyiKpDr6K9XbBogetXcZCy9p",
  "key20": "5pJ9PhUfsVfUrmTpAxcBKB7QAmoEYoUiJob6B2irhdtZHmv6XsZVxJNysjCSUmv9vAM6XPAZYMwirX9SiUkTkNvq",
  "key21": "5N1ikhTfqy6nu1fwjb9N2JyaCXsiiUChsxJw8d2fLfAtoMzjZxhFtdXzCfJxJAXFVu7m1GRts8tAW545KbWskW55",
  "key22": "2dwP9RbQucA8YcJb7b996JWY2hzwXxcy5ueiWbyytEaZFSDgqy93SrXAoedJCcHV49qQibbRnFnphLKbmt41kwyK",
  "key23": "38zJM3jGAfMnbLw6xKsG9Jk9FMrzDj7Xbisonv4Gxcibegbnp6N7A88GpSpQeUCtzXjYu7Xyc35CtEW9MByfAAET",
  "key24": "DsJUfcNRwffsvN9A3ZAihQnkGuRy6NWuAD1q3KYXkRWdG8TCDG3yya3D62eQxRTAaueDkuxMExa6qqSzxZY7RLF",
  "key25": "5AherzHyuS15WUtjAJzBxW2u5qXJ41ts6p53SoDZJ5ejLwVLSisDs4KUChtxx1o9gY1UKNfjJQGqony4HVVXX44p",
  "key26": "3BDbMMRYrvUpKaAy6ufcSKhmF5svJY7aaN464uXRKhKVKyqKE12Chi4Vr4p8rDjZhEtt4tKUbY32xzbCQdyYEfxR",
  "key27": "34MrzMPWZBquPig2WKx2S8q1oKHiwVtpCUyBPPEuA3qTnLdMDBEnp1XmsVR67yJhXNUCgdzp5FGyKbBTKigqSLo4",
  "key28": "44DELdcFv6wEonTBSnCU8aNZaTQz8EFffL7fuPkQL8B2B1J9t1nuH59E4ePoa4nGBumdm5ggbYzMrumSN4dnp6pV"
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
