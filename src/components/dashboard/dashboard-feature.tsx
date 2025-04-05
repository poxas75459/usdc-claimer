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
    "5PFJ4KABB4ZyvZC9VdDZHcXUx2c7Yx1rGiKy5UfAMnLwmNiY1QNo3Ec4etB9qyZoAcYNmVQibZxyyUubn29DP4Yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45qJaeKnjrqzcAuViYKJEzVzwswrZXJ9CravTTKMgpdHfiQ4bPahJkQfrjE8eeV7euQwMNCybHhQeGJEwBVgzvvg",
  "key1": "21SyvfnY54V6qyrtw8awmyh27Szt2GgpkeUSEt8bpffn9qg6hxECZpSHdnyRm6e7wo9t86KKzVyCEUh2LGes7zZV",
  "key2": "5JiY895Sta8pVdGerXKtuBdpVred79pGAeRU4dPKk8cHTSw9jz5iGHXm4ZrKEbwCXQBXE6aTJ2d8bqgYrXiyyhUf",
  "key3": "5R3LgKpx4NaqJtTiNz5vYCPpe5v8bbuZAj73RvtXCgRJ39X1rp7x6eucnkPN2JP3P9u8HAt5JDJSsNHJ8K2BznBJ",
  "key4": "2fT6dHcm5AcChRwNc8pfhqD2WEMETezoTzFRp7tDBNBZQm69qiSujyUKCUfvPjbYWfSwj1KeqA4oTht2HUtW3VjT",
  "key5": "2bBHhZMKL9qFCfkoUCiN6L5i3Q9NW35RF51BZYnrSCVBmra7MZTnck5pQqPxiyAPE4him3gBxg4LsUgeMfSmNtQ2",
  "key6": "27BZzrnUuy8uVcEZd9qxNoaVQiJC9yTo5kEpjjWR2WvnD83iHLrAck7fwytEzmfjcdRKSevYivo57CUsWyXnDPWj",
  "key7": "5kgCx96wEKTYbH1T5JhUzPMQn2nRMSj7vvPSQvFriecmJ6z4tSUAu2HmGFiZqbV9qxHiM3rbYTwXqFNd4KMZnTFr",
  "key8": "37NmSpmazkEyBaBjDTDf84SdS5eKZttSEYVFecM4QtNxfWBNQaLm3odGR7RrK5T53rMtb8nxm5fPVF7mRtf3GjLz",
  "key9": "2VvLQo9kwCtLeUUu3ST3GtFdRrRmLgtZy19Tbdh8BCu96S53oUBsTPSZ1MsaZyfNobvr8D1K49T2ABPxeqzW7HcY",
  "key10": "5GSqtrVyy5P1fnnnxSxdHE2yWLxeJaP49m4mKHoT68RrCQAK69fyiGK3oMFVygU6mcY8b287fmMLVnVZ1wx1PJ5z",
  "key11": "5bZjzgMxsEyjJc44A9nkVvUWopvyqMrUJHpJBavZNCBmrQaPWceSqkFvw5mybjdqVvkPVv4RpivYkiDN24v6KuJ",
  "key12": "2nNjk7Nrg2jHx5HB86q6hxk6psgvBvRH7tgCCN3itBmU1n7iJ9eEaVEbdTSFWQarKfjrwr7arRGKjbsreM2tc6w4",
  "key13": "3YJBKXhKKfYUG8VRFSB3r2bH6QukGxkKYBuC4SNLHNt3V2KEU3ALmgK7H8iWPs4kWC9qQeFXkMAcdnAw4SundWqN",
  "key14": "3ajrhYCYkqFa4Px6V9rDV2QJTkt3deEDfsD1NfytYFPGeBeq1nAh1Ci2HJVEyapguqwmUCRE7zxWZAPxf6T9GUW8",
  "key15": "2TwJSuBdfBxEifxeY2rEaXXqY23qg8jKSFJuqa248v7TcMgaB2PpCSMhkuhuztYRADZ9ZehqU4nJBhDmfkTw8qGm",
  "key16": "3iWCFfapTmgqNKphqYdNPapNxrAAph7rSi3oyXKfDnvvhNs711X2FFiCCTKasbqfh5KEhAcf5YfRdNyAQmFTjJsK",
  "key17": "4UdTyyBRkcwiWkJ2suBbJbaQcUx5nBuvf1mqPVs5cH6j1DQAbhtxokhbijRX2j3AqDyWdbcxLEunB6YBxJZ57VbB",
  "key18": "2jTR2wvcU28Ycj1wTyfeaYnyxrSAEX6NEJqVt7TjacDjXTLoUsaB1yWVR6cxNfzsPWNFRVunUZHSDK7mSam6aYAL",
  "key19": "4RX32yE9kBD4JCJ6QqjQgtHHSStdabAg6RkJJnMouEtR7e78bKUkYw4N6uWakZXaMXPF3hnfPS6awgim4W65mPjw",
  "key20": "54pBL9vgQXdNswJ1jJT1giaGhXjfopi1XdBNS99jPxG6F9Knj2o5qPd33QkWE9suVro2Jfqwxt34hppt1pySKKDu",
  "key21": "5yQdaxGberFF5dYq56p3GRJkXvGPeHNr3N1eWVpMBAn1dNponYShHANRccWYQ7HHKpnf1wWpqTAWQfS326vGWWpD",
  "key22": "3sUBeAWrwQRvruzNixETCo63hjhBSHq6oKAdBD8X1CnKrr2rKde2uXPFk3LZ7oXFFGT278CZN2kLxpvwuxNNh7mo",
  "key23": "2E5MzJw16Z1LrU6TadidVCwhPxSyygMY8qeAc9hcwNE9TJwJt82LbGPQgHJQn74REABd44tCu7tBxgXzp92uTNJ6",
  "key24": "2WiuQi7KTaU8RwVZV2wUFZKwjBm6JmyMcSQAydBnQGZod3TT9ZoJgDPicuUgRoftcyDtWycccuKUf4MFaAxJ7gAQ",
  "key25": "54EurhwNocfsvLFe6vaPoEyocD2p6L1ytyT1rNBojSKuNfdJj2mMt6AFGAayWuUsxjjbSvCu4JRzx96rz95vuPTg",
  "key26": "25rsB4AKdnYu3k6HD8iPVYCjtHXD8es7cSjL2fXFgSqmuW8jz2uA8YBhLeNJwhmov1bSDjhBhEgH5XP4rAY7aemN"
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
