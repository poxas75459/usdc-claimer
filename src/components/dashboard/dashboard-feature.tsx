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
    "5zSMmGs9qMoNFVYUEuGS5YWHU1GMaDRRMnGVDDnwHjmNAffsne9g86jWf8kKFHSvr4JX6QatXNeJ4etEokzR5QrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AhnDBDGovXj1tGnTkX1vfUxvw2Bxmtb1sZGWtSPJfbo3E5jCT7VixDm2U6CMdx9grWENzmriJ5CBbGRaEL3NpN8",
  "key1": "2eckv2L3WcAr7t2HMugDwQnwrdjukjcNe33KW2nYvZ7di6hZiyJf7BgHRdKNBQECiibNbaTSaoqFTLBrKBTAVCxC",
  "key2": "8QEKzLUndTrJEgGtXcodQgcxz8RiLFoUZ4FmGzMtq7swy76nSc2Wy6uQBW16aKmcQTftnpQzrCxrzAwYATs6ftM",
  "key3": "5gjzPsNBLMp5j7KwFr6xBTWPxKv69vs3tnfuL4yPpvusFeosfE9HYJ7JUME8xsHFEKMc7TxMMfdyfq1pu9rNvCFi",
  "key4": "5Ae1ZJPKvuMG2DS8mowdx7LCm9aXb4AEQj92RZdJTZKXtmPkjSX7CrWXXj5DRnT2xommMz8PCzZmVGjUhjrhesqW",
  "key5": "5ie59B2yHRrzKxSyfSZScUtruBdxSCVSgG987QB3MFrR6KzeKup954DpiFu9YA86Cms64i2rsBQZiQDSMrsPsEBX",
  "key6": "3fU29mWD14n5Ea3pgJVjbyPnKWZkkp7BnaMRzye2kywu7pVHFF7X1dHb5dEFKDMMr4P5tzTeV4BY6EuzwTcgbRat",
  "key7": "2P9pT4iZ1s9aJRcq6LunWdcigYUU8khVo9V4zPR3K2GWEqjiBUaYEhRjFCuFFvJAscxtT2Ts7SgQXGyzcp3LPsMF",
  "key8": "5J3T3yDCoREcHZGxxGBH3rUGkaGoRnQ29pQ3sDRrk9K2b4NoAX4nhh8Ay7aEL12bD5MPzDgXc1XwJTLuEM8mKhZx",
  "key9": "WpDP2MSM5yLSWAeKjw68tZqxZ2h1yJvVmTLKACSNoZf54LTsNuqTvHe6vJnzqDxQyHC1ns8XR13m9zTgwTURz2r",
  "key10": "3dvoPJY3ZA2XycmQ1HsrJCJ5kzePXa4UGJs1N3V8WvjSrgUFNLBkvFfD3fjjV9UR4rvcPwzRi2GhryV8mQUqXozY",
  "key11": "42rk3XTpm1jfkGqfFFYQrCfZ7b6YECQj4oN1KNYfHHEb998MhLT6dRwgSDKu8kXm3vNARiCGkXdqSDQWU2mPmRQz",
  "key12": "5KjTuYVDQYN4s4oaSLD6x9XfC2YteNshdobrgYc43mwbdACqDVHfGyh2zpXQvzrczy5wb3qcdCbPhC4SSbPTk8zV",
  "key13": "2SCbumyEw6LhdnBbrxc7WZMbbWRUY6BCajh3omTNaVH77xbYxQVFmsThcLugofQGXoWXxcLXuGup6cL2iYKRZcka",
  "key14": "641ApH27eLGRc3weHPJK83NcpYiKFE9adN4jBENELwUCcRc5wNXEP1Di8qtKvuUx5TRjFRbZerYn2fA8DpANwYoR",
  "key15": "5F7nTojRsTmmXq1Hug4x6v3xZWksbp2DMhSUnwix2dTnk8pBUA1eZGsHLY5R5KwcCtNZhWZVsUFPRLSWuatdWaZS",
  "key16": "3tbS4krgKvE7wJN3dzLWmCuUa3srz5b8SeApStKTbzyQAJKweHumV6BxFiHVzFAmnR7fNKshvcdwTRmtvGGtufqB",
  "key17": "5E9CHtv8nWSg6uzHeJDHzo4MghoWPn1vRTYqqKTGpn3Nb9Y6QxEC77MqHKZrHPwnHusaMpuA9ruUH2dcJTtFEnrH",
  "key18": "2Nxz7PMusqntCADkHscXq9KNQsnoV9C648BSyxZJ86vC1LiCYr5s9jFhmm35yCSJtdfAv7YdWNmoafxsvpP35d5",
  "key19": "121aT34VTU4PQuKiPzh4RU1SgekJQcAJfD5Sensm2pfTKyTkpKuN89jzck4AkXF7NfNHKtNUUojpmSB5VCvzyam",
  "key20": "4qiXeevJonWmrNtaa8d1GPThwX65jT2hnogSz6hGwB5sGX5KdbjJ79dvpbzm1qzhv5sGjPUMgCr4rS1JKRWT1yZ7",
  "key21": "6RM3XyZB4NPadLChHNzzyGjL55BuaMxctmJ1AetYW29cazT73VUVbym6h1zEZdrpD96dMMJZJPXXSnDevtAv39W",
  "key22": "5xKnUEkuSCeTjxPUHrHsExU3s9HY9kt5jmbcoeKDdMVSr2ykcx78CCNRBHJ52akNinST45kpVtaLMPmiu8oriiic",
  "key23": "1swF58sHhKRfNLfAMHviJoEezRpafRehTXfVGxqJRWERKRXq6Gn6UXYXihTDhetvsgUy7ji7EYfg31c6YK4ArDR",
  "key24": "46ERWgxz2bqGky5oWPDCMaquQ342PLEsdoP2aEbsVW2oo3f8UovtKqzFsoaEBhDJ6QZwZX8cKg65hmCttrREezi2",
  "key25": "4ABJFvXhVGvdGy47HzbHrJVV9V9NZUNU3NkMmkDvws6H4qtczhNZp6yF4dafFZ9t6X7ukvjriCEcp3km71dGTgYR",
  "key26": "4h7vUESx6p75br57s4CPoQT2MtE7yrz169d7sSTewxpZFGjzcJmHp6EHrMKuhLfeR6JWMf1hWhK3tercUu6ziepW",
  "key27": "4qPVrKhEq7vwRvXdgkE3ELstAueo4MRMUHMk7DAy57hcNL9mVLErWFZyK8HRW8MiRX8oEzhrJML1MhiMkhNrhfjU",
  "key28": "5xBwogSywKgnJQ9kSbwMvXsmpdPBDys7TfXoL3xC35W66yaAxAtT4uRX1Wp9rGMf6WfTUptuExfUWnE8ijyp2yjN",
  "key29": "41XtaW2bk3vjNyPkubbpnMMj2mSqu7uGNLY52wUpTNCmhsRtU1g6s4BPKLdthEQ32a2995Q2eVNMdAjyNhuLEfuk",
  "key30": "uXEYQSzfjptAarhUr93MXqRxSz5h2tC91CGNBSHoSjgpxav41NGqSkFnzynFz92B7MaiLhJJaFGYNvcADnTtqcU",
  "key31": "5LTuCoWpDT8Dr5Z4fL8ks4GxGqmSTB4kd9CfnGF1hZV4PqYxWtk8y54mL7pK5bMo5ey3KTd161RPeWfMHMKFxVQz"
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
