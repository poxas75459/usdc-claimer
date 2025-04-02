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
    "2oHhcq4NfA7imYJTnYJCCpFiRbvmiLRJauENU5kjvx9nApYBujy4o5BajZEc9HbbzgcYgPmHoewkmynnKKVkUyMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DuuW5vAfALKKC1KyFJv4kd7hKdvatAphGyC9h479qj8iHW66haeaRYVqLMHXkLXsc3M4JkaUKWdYVMXdL75p52X",
  "key1": "5TgCX4DcT6n35SZ1HNLyAnF8JmxxFWct54xUFW3uVP4bPKHYCHxbnUQ2fCgRkzSWXXA3QLXD43yFrjanGiaZkCjA",
  "key2": "2Sqh265LvYdTfZmDEFTf16EZtKXNZ48B8ZfXSD8y9YFZwz5FmijwSFpAk1EqAQkp3JeXPzKDjywzm69c4rq3PeX7",
  "key3": "4xGKA9dRhxP3qfhfD2f1HLAxvLjRsufpkWoQTreb9JWHTC9fbgjnPWSK9RQKZSsU5i882CRHGVi887SEZmxRTqCT",
  "key4": "43A2vyyZZtSBJ3stfuZtvsQm3pqFLp5umvkJmpBkcJ3jYr4dvTeZoqVL1o31xXgqgmg2agQXP2KKgFKbRwLQoMk8",
  "key5": "468PttKsmX5gwwbzT7esbnV9vEmDRQ5eqjRZ6UiGkb9Eyy15wM3aKy5dGt2EeRiNzTDvEJ1JTE8kxpGxZbKagwQx",
  "key6": "2rXrHV5SNkdcunpsKLthTNV4KgUfVz62ye9RZ5hcpXo83Jpa14y8p5SCryhFnrYiXnffKSYdxmAMGmnKwbwR69xV",
  "key7": "4VBoJHTLd9Gadw8kUSqfGB2eSBemcxPASQBoaogxoDK9d7kFPzBV3RkjtcKznEeuVCYzKYEnmoxLdhHz4RZsnpX",
  "key8": "4BunxhmhM9YhzWntdvwGmo9HyBtfPATgzockNB7CzBiXYcciaSgCiKmgwq8KsuXejB2jr1uMwbn7R1hcyEB1sD7x",
  "key9": "5TtFJnai8uVL2zguV47JsDnMkxJEu3osgygLKpe7D83kuWP7sZLWAGZEpkrVsvNLkgNZ6WjJP87fzkagY46nWokw",
  "key10": "PnamNQFu2SzpzuwxuwJztfEHbJepN2MZSzu6sLtRKbFrze4C4vsVkRHQES18VVBHHteriT22c1ztdTMA1VRmQmG",
  "key11": "5BKde3D5t4P9WR7gGoZsdEh88ahMtHRpHSXnPWDjdMjxwwads9GdvHA1wGF42RXVmHuZz7YvcesyYNUyYzMv2yU2",
  "key12": "DQWvw41M2o6ZsBWPj2zpA1N7dKNQHGmk7f1KgZnz4GKFS3YmWPu2dyrcJbzwRnS4Ed1xdQyBT3iKKdjozjRMXnc",
  "key13": "hiJDb1paLEJWzT49jnMZ2Gvd9dMmtzSF5hq841YLMH6n8JQrvdjujnLwfjpd7ziP9rcLSGoQDKSSTrgfFQE4P9z",
  "key14": "63tpvsrhqHyvoqGDNC9FpSDcRABVbr5xfhnM9AZjMUK8aB7ZcmbHXnHjcqrHNThVLZfZNFeN7HaK3ekSC6SSCvQB",
  "key15": "4wydpJkQf12RnydUpBtDP1ea4W1MtUarWqh2bK3LZ8ivn34HTpwgbZDNppZFsDrJLJPGUfVkGKzAbk8HUBVBSyky",
  "key16": "2hPRdp32rkDfrcF8QtDV25VjdcEyccb4RudxuH8KsLQh4EpECXhwaFUQesnCHUqwnjqG3uLunCC1hsjX9yecaQ6i",
  "key17": "4dpJSYE9gABT2q8eKWigeVAezwAs55GPx6TJTgHZFFksExp6daxeshKr5ufWSCjHHnH5jejh1iJfW5tuAPTkYyLj",
  "key18": "2pZo7cLuRDdKwMmyFrC6DQwaMAQHSkuzT5i7MPoV5pCjgAd8DzKEeUXMKRvgFQYvLApJjdPhEDfmziyv33PNhCAa",
  "key19": "Qz13gYMmWEo9UsNXok7u7tgXbYgyD88j5XGpJGWifWszLrDEc5M5UMata8n1audBX3fJ8QtCUmP8hsL46BEGt1q",
  "key20": "2HcX1Kd63B2ychEg38PXfVh4yf1gtRg6hmwFGbRzUS59tF6PRCJrbaujbsM1JixhuocopHRHLkGKzMVzpQai5qoV",
  "key21": "4wpcvtXEJM5qy2o99nPfwHwJuvpit6xenjFbPwF6asCZk4qo6CKxkMfppSsDKZD2wntC9LeVXkWuXWtZdvDbyQ6r",
  "key22": "ghCjUwY3rY7qRSP3zdpmdQvi4ttYVA7VWA7mHDbhhKtB1xMxDJ6eEETg4Z3QrzbNyRCMPXPnvShW1TGNzeNPCFX",
  "key23": "iUYTaiFViJXkZy2C5d2AbEEiQ3JeNJuTTQbVRu1EuTp6e7zvDeynM7CQvDxSKrKYvarC9k8VywZeka7r5ofNrZ7",
  "key24": "3oysgP2Lw5oPFaFUwsQqnwAGd9gtwVyd9LCaDkEriULDbfW3M4r7JTv9DvfH11rRXwLP1XtCz9hts5yBxxaHbmh6",
  "key25": "4DMRoianyULhJGNzxcj1ZCgGyuS92UD9EMSRSgGMzeHfjKiqDoGFBAtvsn3LC4UWVSf2GmvgY9N2fQgAZo86WvLP",
  "key26": "4Uy9xi8DZh8hNpYSmbvGzQexPrMe1kPfCZ1jdXuMwgBQKK21NL3fVUPZpsLyXLPsLs27LGjBZdd9m2YwPEDV51dx",
  "key27": "cDZF32LcBBDiLPHtq4s5SeRwjxLRV265aSCjU9pKsCQz5BvBdA7tC1Xrm9wHsXSfg5upnyxf6YrH6Qi8mPegY1Q",
  "key28": "5rFwBb9v2Lu9AseorUM2LmxvGATn6WL1bhvJp1rFiEv3UuFX4dueWKPoz9wRBJDNJoBDLpi3H52cWtiAz28WwaMX",
  "key29": "419oTBrHsTPiGyLNQBarT29rHMCg6kHRCQ3wFtVvzd18xEUyeJVRf5oABwBiB83ci7fFWXo6U5v66xChG3bzkci",
  "key30": "2LgqknnyHvmMVYXwA8dQUQvFhzhRMMRMFzDf8XSATSK6d8HFiXMAuCohduG2w91XaPwzR6drXPJSz14mYq2Z3MKE",
  "key31": "2Fdt3EPpQbTPfJt265VNr5hegT8DRqa954Rk8z3jfUSwdZVAxEAuTmnntuficrvuem3gKBWiMMBsKkWTVWKWfk2M",
  "key32": "51orqz6TjHW2vVfEktF167YQxNRG5LErnBRV6nW6tauvHuSiTys4z2Epz6Fb96uNFRMn42Kg7TDAKzxcp5r2kdgZ",
  "key33": "2KjSSp8mFo12z2WET4tWSabY2jvs9NfFziPUMS8cM4kW1bkoWGcjt4ahuYRBhvasUTPGkNajrbcKw1Aah2p5WR1k",
  "key34": "3Frj4xadZG4FjUZS5jLy2xtVjreqtR5pfpbUo5E46j2d5zKrDoPeaKWr2MrGX4PMkEcLp3x2bTr47PAifqVmvaAu",
  "key35": "4rCF6GN7ViKggFmZJE4f3Hwg4Zsgg6csTjfDQpGpmLMy9G8Umba5wZKucoJsBCKzTaXDMbbpRteRgSexiYdpqXHJ",
  "key36": "46mgp6n56j3dSWHpUzi2mdcvEGP4duZ2WxErtw5zLSZjb3BSppUarLGoZd8PqsnzUHK56dkUtrwiAh3m5njurYUA"
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
