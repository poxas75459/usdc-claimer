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
    "vu37mWrSzF51FjEwAZvp49nEAtVQcWNyE4gkmG6hDc6CCKHP1bPdHvjcxpxrfQehxZ2PNoonZHF7VJZTiQc51sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JVR86vxAhoWQXKP38475cGcnHjcEJq6xHuXdF2mjFMB2Ybn4P36N4in3wVSjo5j82Q6QLNnJUYXa3fGVaSBb8Mr",
  "key1": "3N9qW8PiFxc7MP9r6rBZJBKGp5qB8pUdqDB6R2K6KxNeYkBNc42LHq5g5UkyFAh27VWSgdWRo7HbAsKUXwRHFikK",
  "key2": "2oFA9dvnT4Z6TuT9fJSqR4pio19NLeKMpNKRU18QYZq1fShjttiGfjAPSK5MLUNKY92wL9ZB8KAYa3CpcFGQ1B9z",
  "key3": "4b9aJ7eGCWRziEJkdJhzEHfjRHY7jhen8U1YGpZM6a3UPon9ZLhvFWQPs23eHhrXdpNjB1Ln9rXzf2yzkwaGne3B",
  "key4": "359wzu76PCde5sHHdFGZaesu9t29MysXERAeu3Er3p93jYvcMEPp78bqBjuuFs8onuFaXRaipepABRSSQDWdaqyj",
  "key5": "4c5oFmKN8yheNvoAcGDYaNZR8bA2hyxzNY4bv5e8dq22EctTbVvLGbyF8wLsQpvyizeHsTAeE5qMCwm4tBhpPrx9",
  "key6": "2UzDMgFJQFtXei2uABGydm3oFczdR3BxkVgXpjmEUgPYDBXwfT5jt6wfVfF8AfGboPpmtDhp9TyDKi48ZwEJ77yQ",
  "key7": "4CChUrCLKy1tYBgW76BEChevHyGGZfihKYk2dr8binSi3M6vpExncxc6B8AZr9TVEtQYTvb3A1XMBXiSYLMgtoFP",
  "key8": "3Z5hFHn2zn4xPRYqJ61gZU2Zd4vqwQ7854vMe2o9tR5qCa3P3iRzTrgPRSgXebCH47WzYsUkzkRccuGv4NJHFMVV",
  "key9": "5r8fVtLu515ygrC9vsT9A3udXBZjWx92MvgtHdJhGtKFBmKqzsk75kuk5heKyqDC5oDPW5rEddJjDc7gAdssDhWk",
  "key10": "2jjxxZaj9y2ERUTsTF1pEwFVfZ8ZhpNUbv88xtTuAVQosiMWDqfYB6dbmXS8ZHnZSmpeEJvL5PhS33jsiTHEFnUr",
  "key11": "3398PWfiUWkpHZZN9WgrnT1PSgpMPfLH5xZUmMLD9eHyuj7pqKYqxRz4AqyBN9MhrPj3KYNyyE3cwzcfrZSD7hsG",
  "key12": "25FvtvGMzARzCH1gh1TfUSAtrGwYPm1JnjL4v4ykehjZwkS4QgpnvoPF9PVJB2gAEGav1UTJbtjWhyJHm3LbDR5S",
  "key13": "65ouVm9J8nMpAE276FtKaGWuR5NTyb4tok6JZ4TAWBnyKY3nf83hK4sZPDxxaq7qSyn15nzRoXmAt7VdJUKUBLLQ",
  "key14": "2k2rAUpCqpDgGPibHU8AQVCh1m1SXebv4u4jWsVVVk6hTW8CrsD7w8UpBJyeRUC6TzBVDY9fvTVvJW41XWe7N5oq",
  "key15": "4YDx3x5tRrL2USwBWAwCwDd6xmacTTg4x1VQi6ujYzYfg4MyV3bhCJwJ4po9iSXMCWZBTRxUgLhcyFdNN3xs5rYm",
  "key16": "4m57jJS2Eu4HEKqLCxvvEkhdQ7GGZ1AerXgYPxeahwTjeKYqkRzSZxnRtX15iYKodhitcfagBX4NKR7hVp5aB94E",
  "key17": "5tphiA4aa4KGWCvfTSK5eDVKcjXTEWfDDhUggfBJXU72xjBZkJqF3GxZzsiP3qNmoEsP4YLaUwJH3Rk3Q7i4bJ7k",
  "key18": "3AMtVGGFtdzhbYctMAmxpheKSENnJqUpp6pg75wY4hdrXtSj9eBdpQ4Hy73NJon2CvmTXgZNpy4tTGcdFkYEbr9p",
  "key19": "3edKcJxYt2aX6MWDV4FicoFpa3v3EQL9qfQjZQT2GeuyyBLq5i7kD4saEuzhqfJf391SuCia7u1cWh4s3yoao5Uj",
  "key20": "5HRm569i7Yh5V5MeQh1UVnK2TvxsiaRMtc4W2p8hSWbcb31r325LeYNtiYYFNPCmexWTAF6FXzx3EwitusPZpHtU",
  "key21": "3YVeNfYJDWZP6MaK45H1PvGdVKdumWGEUZU7UDFRswqJx93EZ9W9eM8g7M55ggihbuSaR7tRwsyQHddqbZ9qCYCP",
  "key22": "5qF92qJytg7R5r8CL2Vi4VGBzYxajA3Z5GJNSVCZypaD3KNBmVAKhiNt2c3XQNP2FUYswWoawtfU8mUoZvxphaXn",
  "key23": "43ydonKJ4affUWbb3mJnTTzvnUgeK4aXqP1G1HyvaUcgtgkbaRpn3jp5aGYuH71axZrJTQr3p2tipUx2JVsHtawg",
  "key24": "3o2Q8DEX8P6Dcw4UL6urGUGTwL1chj1M63SGZZkuibZqCGxSEvEFb4hwLzow1X7qJvFzRaU2ZJbf3iYkA8DrjiiB",
  "key25": "ghNHQutAaMjWS8ssrqrSRmdJAy52ZK2c1hqjxH8qdavAD7D4vHMZGsWagc16RGHactAHUhC55EY9dEv2TbyjLS3",
  "key26": "65pNpaTyqCxt3r2wum3DnSw2eJCBAqRXqSP2dpiC9oGqNnua5E7h2mmpFzLQYskdgb6jZSRUQEHSSQ5oLkEaKpZ4",
  "key27": "4rTh6ifqVyoVazSAAG49D9zQBS6qp4cAbToZ12WU4Qg3zcccq2oGERkJ4UcBBb7j77TxrUXrdEkA9ppeZMMNDGbc",
  "key28": "2Uq65F3L1nfkVQdPDDg1Xo1Az95dxxHRuXhEF5xdCG1ND3YG7mrBcUzoemgau6FxqpcBAsAgfKNBFw6Et8vdFWQ3",
  "key29": "G9Cu4viVct4yR7piNhgMaQeqAGK4rV93pzwLoAVDUiEZBbhsZvVAe9cNwXF23f5sMVkX1G6feiMESqqCMDw9hHc",
  "key30": "4anco2zviZMchdfSE6R2Mnvp1cxRyXfMJrSgeQzzu6eQ3v9Fs1E26hinyFDCKwFF1yc4GECMHf2SaPGZ9Qtb5PEa",
  "key31": "4Q6AjMYaSp2WNZGvq1JzA5zmahESF6q2wEP4B1JzRDQszNyP82wMcPBfjroeMnBzLsDAbRy7x11sEY6dRAjNPdzG",
  "key32": "5h69TEVDnHszUXEC4icJLtGjQaqJBz4VG1i37MEWuAH9f3NrXxDKFmaWLysX3wq82WPXDGoxzxXox8dfcTpdV4Lh",
  "key33": "5Yx59brr6hsvr4ms3D8tjFy9UDz4KiZMCGqNFL4QQKZ3R36to95cJtiC359izDhdJMBLXGJTsp9JmPNrW91ULRNT",
  "key34": "2Wb8JeFr1k3CjDxRM1EAB9tBv5R8b99w36DVJuoaTftN1e6RNJa2fB7YYDekYZAF7rtYkT8m1HEZ8FTd6EawWsh2",
  "key35": "eMspSdXBp7vUchLJttmBEqYZwntrMkhXhoEuCLUKExVkvT4BGu3bdrenEiewPmiZuQMjHX9ayeqJBo8KXpph3dU",
  "key36": "3vzf6vk162NsFSV6SAGWXvNLfQdRqowCfhcQM3FddnFv5SmZUu4TFbXaE3m9zeDYdF8e7fUUZ7yNr6MaB6rzNJZv",
  "key37": "4RBfLQ6XQKKsrj5cCaZXhuFepLA3ouUHr9W4aL7yV86uSxAtKUsekL2isv7xWwCobkXbeieMRwgLWdtwsuKLRGNx",
  "key38": "62ZAmyCzAUvNEi9WW13FEJ1d3LBATAZzUacWGpmiDKd8g9cWGvwb9RdkYy9GnJodFmHcuZw5gqbM6yd1Vip6M6Q1"
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
