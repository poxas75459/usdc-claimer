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
    "5WJUAY5fuukWvsfWrjpRhoAdU2Y9kKLiHn9K26yDV25SxTk5qffqUmM39MkM8nNvHedmP5j6z6a1sFCfRonszrjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23kEyVJFvVAh7qEZivThADdZ2VDeT6Wuhp31pSPwD91KaPeDuKhVf8f7iUC3GQ3VzGUEpwDUDR3P3pNmxs2CRg25",
  "key1": "2eSJtdJHHWzP61f9Kuvvav2U4UPZ5dETYmEJX9Wqd5sbBwh3t8iLQtz9eXibSzRegd4H6ge2qRXERP2ZWiYS2mqi",
  "key2": "4L4tMmL6quyyXf911NmQm41c8ja1vykptTpRkJwxJAWzJekkWfuCeQrh4LQ8RchA7CwgPqrQaywP2xacB7QQ7hjF",
  "key3": "529Rsbw16zcHwonURz6oUNE8PtY2dZW5F4fpevfXqco5UDktausU2icj2sBK51BYUpEWGkCDBXS39YmDmTPbUaRi",
  "key4": "4YUzsgvRdTbZmHFFtZzsu17dt5QHLDTnFwnQZQdS91Z2k1MM28AwdvBJdQoSyvNctpvKChPrFUozzNM4rX1sJgap",
  "key5": "3rqDWmTx48JciE45xPrM9hccEvGDirJ8nN8Ndmr57FK3NTzDRCEQPh7isn7RMpr5JxUq1Y2DoxrqygMYNNTdtHfz",
  "key6": "2VwEyqvX6rhNpuC6q7BQ8rEymmNHNTxHcTjwbZbS5T6Mjyw7ntoP8SR4qZ273EZTau6myLXxE1VJCaG4iATZPzQi",
  "key7": "4Mew9SV7BHAkiUyCBiv9naNjYBvqcbvtrK3pNeac7eH3RHAJAvJtukMh6yKwu1S4MZQGnKdut1FLnkBJe6Z3dEsE",
  "key8": "XjKyFFKmQumL1vtGihwrfKXcy1MZMjyBVLhCynVANU8aPPd3EZmfQxKhVetRJG2N8tYx7yyKwAm5cAxhvR5Cg7T",
  "key9": "47NW58rPR7L8ncRYdcDPhQ2Xt1DiSXxNJSDaY8bEkYSw8TX6wvgDyUhFBbb6LVvXyGbTTPzfekVnASPXhunVaPkv",
  "key10": "227kajcLmqDxeNtpKYMcJrjYHm5o6UM1rbvdWsvrFR2PBiDHV2kDtSEpZvLNfsgkcipsNSGPEAScpkMEEJEnUZyk",
  "key11": "41G2rAm5SbypJxm9uXrxBvWZpiaPNG7Cj4G4eNbLpE6ACKDzskvcabBfa4VsM3bYRQf9esRVQCbAcsMc8Jppm74L",
  "key12": "2emDYw8M6tMrz1MDZvbFjecdVvpLDMVrLHj4xVSYtordqsXv7bCeCtHErNQy4p4LDGua3xE1RkZF7K9oVAbN48GW",
  "key13": "57c4E2oFTd4HQE5PQWackxWLCJny1JBxwuDB5FkfLw4r2dqbx4Bpr9C5zS2TENt9iNWbwrA6YzKoX5zNpHYAsud3",
  "key14": "UdEqRQfLmeKbcPSnAqxes42wFCV1qTAoaGMetDLUnH28ZojnFKyfzeoVEovAM1w5MHXif3Fdub2zHaow5pXhUV7",
  "key15": "3Axq4tGaKQy661TAbRwbdSycPnfvpEgRwyGnnx9X68wp87gcvs9yQ7cG3u6Gm739xn6Xq48vSBEYLgxwkiQbHudG",
  "key16": "4VxD1muDcNXjRTVUJvQpKRUJDCNjMibiZFCXTsXro2cC9h41NpWuKZ4iRkgCKJeV1zaQ1jm3KrRrdbv1hToVbSRS",
  "key17": "5Z9UsWbkFcD2yTzSwQunej7LTaFrrvkjQzaKVGVoNix2ag1WhwHyxuePaDZACQoZixpUR9Mc9osFTzRJmAqAqymv",
  "key18": "63UVGXVw7jMFSjyQUQv8JDKBi9FpSD84ZtDjXD3TjJwhpWKLfgfHvfWU8sqzrT4VBYjxK4JAMHNURzC9HFioVRhM",
  "key19": "oT7PD51Z5UjUUQ3JESscHJTT1c8uhCuiZNFsTfvYLZmChjr86XN4oYX5jRV9qvrixuN42FcVju8detA2iejECPL",
  "key20": "3en39XSJBVyCwbjPNDjS6QCcdzR6jKkono8n2AYe4T3VWPjbvXZuHETYitAqf8NWKEvw6tPZY7FWsUjWdG8vEpPx",
  "key21": "4w5FhKyeuCniW3qhVZsKEEWrr9ZCa7jXtTQFHzbe8CTzQpcuiFLSuDRLRtsVDBKmgYU71YBggvGyxNbehimvqYLg",
  "key22": "2nfcejfqgt4SbsGec9jmTkxH4cykdCptSYkQvpQMipJ57bquiuCJGcnkCrRJoXuwzsv6fatPhiGvRJax9h1ban6F",
  "key23": "5hSnpPdjW9ZAp6DtCQvnBYg3A66WB9Uy8hv9GGzJgU3M7EJN4gmBPUrAbjUPsSV96LrTQ8tkBw9VWgEA5BknAFB7",
  "key24": "63zS52n4G3pW3AnHbWrQmdCx4qCwbBSyFcn1VKi3Ab97MvaUhNhRnnUziSV6hZGmoeAnxDExkkuY3P8rP9595TB9",
  "key25": "pv1hVD7nxzddqGuBXtdZAzCrVZ8Ko53nzHBoBEyS4tYKqSr8TtwJ31phTyeWfvawvL64k7Cx1bdzLgyf4cufhtX",
  "key26": "3RKL5ZNNtJF53s4SrvVQVdBrTaszm9rU9Y5Dqf2w52tbE1RdD2LuSnvfjgJWAuNCpLHWxQJa97QRtR9mMWLjUbGU",
  "key27": "24wugjsBS3fEEzGFN3nAnVVgTArcfbHGgqMgTFJJLuy1VKLEt3DxK8bR7kGP1aWLPs9trLJqUA9QwhdciKgov1NR",
  "key28": "xycZqXJ6Pd6SLWmNPQKkya51rJqdQ8Ui6vro7hj893gP52cvqNskT2MvswymR4Gp5mzoo26rMQFdMyX8pm5QuHq",
  "key29": "27vVXnHeWnrRDKH7b63hmzcVG1E2Q2UvWtNRW9oY2eMuwQXzWs4PwB1tLUvwhRFw7ug8aktZLwv6Ew4Tx8TpcAaK",
  "key30": "4eQnj84whbe1wYVaM9uC1TNitzR6sG3vj8Gwnk264NJV5yt7LQB6hbL2T3cc6vkzCUu3SqjvYdYhAC33UF8sC2f7",
  "key31": "5mEtrrmJ6WpKuC6ibN4dornv6qHQs8azGJq6mozhrLiMa8YS1gp25znPSHc8T3htmXx8TsuuBDHk7EejZhFrvaMP",
  "key32": "4Sv1VgRDABSfCraw5bL9aLYieeuW38PUcpDmpKPvqXtrdsuRX5ciMCUKThH7JiwrFFspRhLEmqwsnXe9P3jMbMUh",
  "key33": "joBfbSqMVkALxFEcnXR3h3CCF3hJBiNK93uWvBocgJk987xSvydBZ5snwojuMecFubD6HHAKGyLxZsRYqbnjx5x",
  "key34": "2HB5F9rb8VJGzNDg6rXngT22R3TwQsVUb3e896Taqf1zKttwXYmeFfoG1Vboe4cQBJJD62sru5qF3AhgfScsJhFA"
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
