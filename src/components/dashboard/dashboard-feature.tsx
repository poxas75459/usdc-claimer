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
    "4xrW4GxvWZ5YbJqS6UJdBr3FUHPNnFMy13VMB6HtnTEvKT5mpGq58HKz7eJ961o6qcEVw58APV8GtJ76tC1vhctg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dT2HgYAip8W5Ao5ZYG6V1VmiHhQQaBqK9AHSvig48Aiq3yHBJAe5uzNPAWXdAAViSATmeYkhUx8zFtfEe2NRrwJ",
  "key1": "4nXBVWEC6U3MAhy7RH8MuzZoSygFqg4u6D5BD3sjBwsanCU2G2Xp6e9EwkaLL2SPJC2k3b7k9MWfXQkxSR5pcA9h",
  "key2": "44L77WbFNHWp2o3vp27mzZTSSyQ7LuZNMh1vpTydZLhyFHNWvTgWDPRLo7qbuk3VyvQBTDv8L1C7QKzgviviGvoK",
  "key3": "4NjtxmG9rHUjKjsTVbSUTeWVvrvtMG61xVb1KJMm4atmXdgdrkcR13upUsDyue58RfwEfwJXta3ZcyFxsphQ2ECb",
  "key4": "5r39RKm5nzs7W7RkpuCVXKc3RhKg7Bi3GcrjSvUvhauJMrCuBjoJiwpTrX9X9rMb31H5tD4SKu8ZkK5TgQnCPnu1",
  "key5": "3EeHsERej8Sq9xkfpkYY7e27dYJAYuqsmVqb6ahoDsd1kYVdejRaQ5TaKw9usmgNmU1DrnRJJ1VYs7q6nJda3C7q",
  "key6": "3PGGjRBdmiK2Ce8Sb21Fz4zeBJ5FupfGrvfLcyKJHFrZHbDFVuBTqK4UrpQEvGvR9iVPHn5WcvQ9bdFTz9Qv4kwx",
  "key7": "3r4NWMfMVKJdz5RFYBzLkNyL8Vd3qRmgVSC7Xv5U6NtBz6JRkZ6UjRDnePygYPXtS9z9Yti8mUZJ4FfszVaviC76",
  "key8": "63pSMPEDRcBCLGk9bHA9CJDxN7QUifjrHSKSoWnfhcBaKjgZazZUG2t67RxvQYJtTn3W4vEjMckWCwktTYYEzRJz",
  "key9": "9NouTAcBBcfJkhcScPHWuZhFHz2d9GkC5wxud6xXpj6PptuXkdfYkhEMhern86F118fTtLa8MACX9vyx4rLrZiN",
  "key10": "2GEVS97cBn7yzp4DvYeCr1qyUQk9jwCT63RW4p6gt5Dr2qwXsZGRw9eUebPDmqyjwG11y3xPZodrSVXmAjN3ZqLG",
  "key11": "3RgjCwkw1o8364kGnUiQBKeVXaqfeD1vkdArs41WafTavaqz9fXcsgkduLLWmoy4sdEARt5veRn7QJDJYvka9RTG",
  "key12": "5SKQcoG1tyYyKvY2pVqmdSgBGKVMdGJFWog3CgWNfzBmxe3icUo9d6XYNC58mga2nLNGKu6Zo8mjzWxes94phqpt",
  "key13": "5GRVEb5PjD9mxEQyfWCDuzwG8shMgCVukEuUrFcsLipquEyN2hTKv8Fm48Db41kQDWGhcyVvoLL8R14w9AMo8Fr5",
  "key14": "4JZXzE1gPz2FHkJ9XZgN4A5qQMuRV4yuwSGrr4JbV9e5cNrNf7d8TnsoHBJf3Vnu1u2nAEa3NNqYCvrKapWgcoc3",
  "key15": "4434DZDnaAuhSvcDfbvX5nUoB3cgj59Gj6LpzXgkz6xpWXSuVXx7xkhbVgApmmCLVx7TdtySYNe4FKcWHHm9AjFe",
  "key16": "38VURU23neGubrCzbZpUxLDhADkgVmwWVrb7c9Hw5wFoRoLkF2aRCA3yWWiyPMr5TLiKg4rmS83TToBKpK5vrK85",
  "key17": "5ERDuq92aD12SP64hEdjCrugXgxTVzYh3S6LoDaYpVpYoAUjEcqjfgKS3hWpx4i5NmWxDicKNK5RJkniUG9ugEut",
  "key18": "25u1rrBgtr2Z8mV9ZkUdWPVhYTsgL1d5v7eGvEBBjp39ZNPqdfDDoqmic25niZbWA7oe5RRAepCNxTaUhMZ4kgyq",
  "key19": "J8oD7GKAgsiq2Nf67QLA2qT6Gtdx5fVgsdvShXfxJr9fcTBYfFnXwvY7A5eboBcwqufNg6VjKkdfrXWELu5YAL9",
  "key20": "eR9DNC4YL3prncYoWd4sWbLqY2wR5v6W3qFtsHz7PSdeVjq6zMKinBuWZNX7RNKU4MBy4k2vV3hcyWPBmgop1Bi",
  "key21": "51cekRbLK2Pynp2JqDv5YnQ92iQgySmfCZFP2mXeVgMTReePX7xHdTKsBkLkpcDntkZgDP1eAAP1vJXtH8myt6VP",
  "key22": "26dwRRXRLL1nQbexNXgKj92bCY8KGXfcyT1ocPzTEBPE54548jkJKysG4cGZBsKSt22Coga43pSD2YahSSpRKBK1",
  "key23": "5MybnDwQ7mNnsRrYPVAbG8HYH22EWXeVBvwqSNbDUmtaYf7ZBnNvvovDM88xbWd9wPFeJoPe4S9XdtzM61qNbX6Z",
  "key24": "1JPz5yGEo1bvYmLX6iKcXbpiHx7YrW4qRxt1WiSGfm9GfD1ZC5gx48a4YTrNCBJKVH7GMPG7Pf6VfgBcMX9sWcV",
  "key25": "4o2fqwZ6rKm5vWgHGbP1LD6Wdp6pe6LRpTG8S7EU7nYHbdj1ZAzNzVwffxyRh7HXrsiTmEsKNK954SDQRKStXqYU",
  "key26": "3CVEr3eNffRDGsPPqtF4EeXZf1tSm4DfvucYF6AAfCvpArUnMALexcXznLeYZgUU8XX6oK9SkndajBDxdTQVV7Mk",
  "key27": "2iLKMMhNbqk5Jtphjz6iGa5XkAYkmATUangdoARAMZ3bmsqN1Bi1cPtgNzk3skXwZssRaF3nm6RZARFD68WPq19o",
  "key28": "5TrfZ6y4CAn3DCp26J9V9uTMjmymaCrXcZ2JgSFkBuCYpF6fs4iftG5HGhTVzfE3nB1vaydaogmVYxedo2866sxF",
  "key29": "ghWUyK5vyXw3awebQp2ZN5evtK2yoGrXz4S4KhFaQgoPnug9j7HQoXZ7AxuiMuHj75PHWGzoHELcQJJRnCbZMXU",
  "key30": "TBWv3QhXWUk8azjRLFLbcyWkKgMSg5jRvWGpizvN5Kx2GifCQRLEKkSipFxwxMG8WQ2rbPCh9LoaKwvbznu4Q4Z",
  "key31": "3kjBfyDdhXSWP56j35kXiwMYoxzDfqv1uQ2jKgCtKh2drB1igDoRQPREUhborzceeoyvs279PaP5AicTDB5GBc4U",
  "key32": "5LrfY1bGr6t6Kj5a3XAaFzRuNZ1tiVuMKDThEgXCwKXEnPoVtWshGsa8mRkRE5Gk6nizFXaBKLP1ZjFLJCZQxzTb",
  "key33": "283T75ixouDKbL586kJUh2WvrSSRQUfBgUbxrT7uEyxQaREMWnvpMWVEy5y4FTpzXYmvgRGdftJKMwWP6dmJQVKH",
  "key34": "49VpYZiHv1xYCfEgPfEdi6jRudhSAU8VDVi6pWCdUgRe5weB9oXKoVyeAeyYeTTsXZCKkxN4NPvMVmxYVdNQKYZN",
  "key35": "2QNVMFmFHvQWjuJg8xCpu58RfgJQQCNqEjzqbZ9xEWS9DCoeLrYaVRomgwoxZwzSmMT6E9iCbuG7gTkcsDqxPgpM",
  "key36": "5778DSkuLxygM3erLVcgqsBd5sEFidtg8uchsk2zvyknbPpd5QtmhBERb4vMqM6n38a615u4fwBViuSG2kwHFt2e",
  "key37": "4zCh9mjit3VziDsqFJ5mUNdrtUXMU2Wri7uvnMcJpaasbkxgwvQDSMVd6KgYCrMqJvM9MptUa8yfdJU83X4BuNJv",
  "key38": "57aaBeR5wGuoXom7kKLeq5NeWqj8b4S9zzEDuLZ4FPxLWKcfFAEmahRHc4xXaXNbWDuPNWeP6APE3DxjthL4RJR3",
  "key39": "25bQx22A3PkVnupcUaF2tYCSagDppbYex68cskkJZtbRcqpJncKmjpEwCnhschYyXvmMauHWJYmCERJdhANBGdSC",
  "key40": "5bopf87ygpBPKBeD2R2zZjpPVLP8TKUypT4YA8FCp1v2oWxsR9pSMXqQWJXcNg8DEeN2Drn6muSRmDd7LiCt6V2r",
  "key41": "Q3SiMWTsQX9QQi2pjzKwTD7EUv3D8CMrWEgRNQHqNk3teeFb2BDkx27ZPkxyAG2dGJziCVcDCpvsPnPkZtbeA8r",
  "key42": "41EJCn3n6SYn7aRtn1NzwGghqhcdWiQgF8oGvsb4c1qGcESEvQzos5WQceCVAgFvbbf62THHsCCqFHtj9ZVqDnwU",
  "key43": "3NeaKsiPDaajzDs9pbCARkygzHQCEgbYHdg3m4E9ttvw7b3tpN9qR3DPD6gY8X4Wi9D1ZFvjqfGFaqGyJMqgcFB",
  "key44": "5U7LqgrcwDrbTAPKM3gicehDwDDrzUzCT9xVmC4GVTn66k9mN4HxUgFBjcaJytXSmeAPzqR2kxYaPhbEDc7fDAWg",
  "key45": "3jzGfMdATpAQcdExZtZx4btz3FSFTq3smtpa2paV6hdEiQQVQ7cpvAqsvcEwmgQWsSyS9vpegG3RzrxPyAq2ANEx"
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
