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
    "66UET6SRS56T5pLVJfM1GuqoAN15M85LSJypD88R2NYNQQZWwkBMFdM9t22gke693STtPcmrBJKjuuP9baucV2Y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXmb3j5iPz1DuZ5P9pNkVbWR8Gu3nu2PwmpfNzcugveb5w3RRLwx8D6CCRhc8EBQvCQmxxfeXSFsGDxrVKnCwqa",
  "key1": "4ahWMzM4UyQBBLWoFNzqXDtHfnbg5oqkZqSkkeYF7vzL1ke8F4ckhj8G56sDLN9oTvbakwTViis5FbnMZC681Tf4",
  "key2": "5nbdMChFaPuosEJu6enU9pdFXME2MKFeuvfJLc8rkydEMrX2u9MLManfZt1YEqteTiPv8JwSHdd7oVuNe1vpmcTB",
  "key3": "61baskoXcZEHrsbMW25dkHmfCpVwhDbNDbkcE71QHHGSPf8YP2mdVWpqyBXkU6RBzXRGwGi1DW1cChzDsJuAnA2G",
  "key4": "5DcqcbCGoVsS8VWoK8ta4s4i9HiqEaZuum4coXBqskUm2vUodjQdxj94wk6XYsVzwqiGt441dLV2bBb6rmRaBHVF",
  "key5": "KUywVt8MoAz3YL6W8WeoT64kzTK3a58VJPtfZ5YbBSTenGe1VLW2NyaJ9fLsWzN5G5fWDSgzayB2ChgAP57HrXw",
  "key6": "N4dQ8zWfdWr3BzAngx17WEjFpTBci9gU5DnsVF4Web7gb71yNLsHwP34yUYqKicntkHzrLs6837q3W8YadgDWe2",
  "key7": "5pn9F2qhzptjxqfbUe1D8gADzJt6JWU8mYdADKHUpGBmJazrBcw2qYp2Vmqg9QyPLBL1NVMWRrou4utYdnE5DdLf",
  "key8": "5pdKgahiZuDVHPWWeVPdQpym2Hhva7ntnmoMYkkpFUrG3Y4y7VdSShUiXv6FnjesXAdnkik9qpybqqNSBTYXEbGo",
  "key9": "4zMe71vUQMpzrbd2qfo5WwuuPG7nrbesaWqxTKgTxjyvMHXTNbbfdMLCp9dAPcYUmszXNpXsKFosfuLb1qiPPaZe",
  "key10": "2Mz5uewhRGduNfvwVJyxHxUD6ayH1cQWL6Mpig26DtLrrkGjvPbwXv8h9eCUKqoSyKoEFviUpVsXpMG5F18u9hMe",
  "key11": "2dHMbc6qZTU8s5tnBSXBKxfR9tVH8bfsJSwAKQ9FP5rbc2QLnwjT1AjfbLaahuMdjMJ8wQpmRQj7TWSvd5suf3Cd",
  "key12": "2xU974UrTYzv38E3FtUmoWHNrVp1AAva9Ku3M8XyKjEQ6tv4M2bCdfmmKSF9wHDsGbNM6H5uTf4AzbFe1iUK8DCN",
  "key13": "4PmLy1PoswcU53qFCPMQJ9wds2u5HBPSVrKJXH8smrAEFkkQ2pr7cfa8hrETEm1Trg2WwQ6ean33rz2fAYnH2Viz",
  "key14": "DKHeWsWTZKkyHAox4ez8xSkD6ypXo4RA5by5hBduM8J8F5cZcrufxqteBnF1TwcadaC5f2Ac6uMzFVeDvZ3xUdm",
  "key15": "5GrNKrBZuSLwU5bG47HSuwD4azKrhhmAeuXp2tyLoZ8rvk7ia1fKfwP2obzWDXQ5r4eMCqCUQsDep3XidzmRcCcL",
  "key16": "45o66QfPC9ef7cdVPLTvEhrFwmxPUDPoQWZLatzhMitCUiYFAB38vYoyHDAUDeneHBPdxuzVCXNunEMQaktysFpj",
  "key17": "485QhFZ2MJ3yvacGxt7V7NAfSzAXzCN1UVAzBwx2kePfzc3HB7tXbELva3BeQnefoaeSLdQ2JB9hMfG8MyHzCLT5",
  "key18": "14nhBEzqzhPzTssDwBbnjajUu2wSZKEBby2aHrbsJD79E8GtgLfEHgcnzFwEajpXHYR6fL7tTqggBMrZNXfa8bd",
  "key19": "zWTYSXQvtxB51J32M75CLzmBPnF8MUu7iXD5TmJJJS3KBDgV6GedzRTfvxnBFadjinEh5fJ9FdCqFkgPvW3E8EB",
  "key20": "5VZU8Y3bBohuyAbPBKL6eYGPCnaaSjXEH4P2ikT9RzAQzq46FAknEyaoaWkmyKZvbBz974oUos8FyaTK3t1ECGQt",
  "key21": "3AhcXp1Tv72qKo1h9ChfMWHFyFJmLE2FjN3LCDkja5ZEX4GZsNcmNdBgfysnPRGxQBiQTJ94XBB9M3S9jwqn4XBw",
  "key22": "23uWE2xNuYbgGpkxk1iujKbfXQLttbukdEggTJm7ztTDo5mxrgPriPvppLxvdJ35n8nLcXN31EBkzCTAiWgGid2q",
  "key23": "5sF9hRMKyLdvV2n7gwQGKaaGyyMafhy9jc5FqyxAmk19xGeBEnYyvAT6E5MqXLAXPCkBjgKarjXQMhfCYDCutNrJ",
  "key24": "62HAakMCsB5gEgLUhXV4UjzHYeuHbcms9Wf9Q7FDHwmRFGY9oVJTazYxFpDgzPPURxUwu4ZjmkA5tGN4ARhFarX1",
  "key25": "vw7TniRNSshHMynS2QSRNra6xrn3W5fiuQ1hNvZYkv724TJUJzE5bLYXPq3Z8PkJYAGjBVLfDJyfG8eDPf9LSVj",
  "key26": "58xskJXnoy5iJok5VYzAxgy9ubdYz7SSxPELWwgrStntbS62QiMsY8QkkRg6mK68iqadkkdvVP3MDhhJ4hN4Uwnn",
  "key27": "3UfaYjr6NbReCLddWhwbA9o7WZgK7o3QqHd3LfcWRa32EBPNn6hMcb8YLwJQj6DBrQyLb683Z5HqhSjriyYciFU7",
  "key28": "4j1rnnGabEGepEUXpS8mpVF31jeb81wW7ufdXatYVcSufGEvTJQJM2cLQvX8y31mYPDMm6Etkzsx31foNUsHMWuT",
  "key29": "5pGq6MYPaVVF2aJZ1iUqGUyX5C3Za3eeqVQgP3rYCyMBBUa2dL9y8u9qke8wH5hFayJhp8QZwPfzjHmcFVVWhsr4",
  "key30": "bQKAuzswAybCVUk63mfgNQeBJRDymv7Q81c69YgMdiVazbEM5P1jfx9cU7DT1LPkmzJxEGyVn3wBzh9UWFK634b",
  "key31": "4FWjz1pdK4Gv57s2k2SW6BoocNrgwpNGzaxnzrGUc6K6AfHEkkDTAZPnNH7PU3Cxre6BWSdivAVW26y6B7JUcijB",
  "key32": "55o9obKUaN37fDT4pCTDaDQreJzkZtDSyGsXLn4Bn3FWDP4k7z3T5mZxyCZ1kfPmFP3ZQFZQTBVLYDRJsmHnbtkD",
  "key33": "5FrCPhywpMLfExiiLsAJcgFcN87pyX14mRZxBBzZUCtyyXhGb2ZMKUUVTkvLprxfhdzEZVCm1tVpvkCdRwMyw5F4",
  "key34": "2BP9EfP82WzBKKzHhU7ZMQRXddmLkxXENh75Zex89Letc31Tvr7HY8hv3Ji4PSyeVbgqJAJLLd43Xhh5YW15mBcs",
  "key35": "57VrXJnvaDkrLkgknC2c1P6DccFcUnhRNRYgYcfMWbdCQtKv54WjoKe3hfm4ME31AQ8ZBxzF7mRnNwEtgiJ1zTWX",
  "key36": "2vqxFtzJAWLpG2njEq6tpo2hNF9bERCX9ubyfuHaAnuSi6kMfq2jYFTfBT8oYMC2MfHbcDoZzxM7pnSaejbZjAJ4",
  "key37": "5LZXnGwT8iV4NhqiDKkbHZWANsfPheFUuehWz2WCrAX9sVZXy2mTUTsdQitPWFddKUZKgasxZpycdkpzSMHPkXuu",
  "key38": "3XkJ27ddTnH9zZTmnRTtnoLniVcUNSNsdMjRDQqxeFivMje8TptBXdQrpeJFUEFXYMe4XFnp7rUEUvvc7gN4bHCz",
  "key39": "2wMtdyXnqHvHFXexmDw1wLef4UWARG76fAJk4WzjT4wPtei1oDSjfKcJxZBDrbvnSujXEVZhfAL88Jbz2sPLXGgW",
  "key40": "2RSsrAuytaRPYvjeGs1hb1WT1PBEz3KBTPa1m6UZgDEf9HBTLaEczvj9mT3P8FLvjLsLFn3SW2hFVHZCZ6oWpGWr"
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
