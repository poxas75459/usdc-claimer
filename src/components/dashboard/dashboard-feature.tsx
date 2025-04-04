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
    "29iMWhU6mTdbnoUnRyGMKky4SRxCGBv1VKCvyyPvgDPBhCeW7Bq49ZuFTZMNPP7reqsaPFMpidnML6oYtcs5PjRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wrYYg4uMp2PufQN6RULuDFmtkQ83uVPykTUWPikEZFdfLg3YXWXi7DMFAXHWkQsqUp6KaLQjQUtTDw4Q9WjwvBy",
  "key1": "5zXGKGSapCguRkdWgBPw6kyj1QL2UrAbF9pBjAQv5HaK2JzQiEHLJA8YbCVTHgBC14HRyXwBeo69is4ipVH4AF7o",
  "key2": "X1CZ2whVgNajoCaxjo2M2VP5Vp6q5XuwVDZ4YQEwwSWGiFrrYLRjMHGmonAjxcFWRx2ZZ8Cz5TAAdr9oeeNj61C",
  "key3": "VvGcNrZhyfx3yu8X5E9KQ2umUiKvHsB6RjfsNJ57eeVEpLRfAHis9RgNFXvViYzSLgpwdpbyzcwsb93T5vJC6Gb",
  "key4": "2EtFfZsCxiQ2R57vsMrfFqWmzwKYPED3qQKRf17u55MS57u17ACHz7dPYE8xhyLT6JnzKKs5SkXQJ2D626bjh9f9",
  "key5": "639nu97fXzAQhAYnRq8WAtuzXjtnqzGM6wxmCvgUfyKmfeVphm7QsMM3xZXDMJiDBYAZAQEfBLvutQbd3XuzMHDB",
  "key6": "4Qq214A5KwetsvaehTet1QVAnkFAFnMBF1ifQDb8vGJDX7kKXvQa45RiKSou7Vkz56G8NmyaGqCVEquk6T2dgxNE",
  "key7": "5YA5UUGDCkVLVyvC6kAoz42murmompdCp6Ytm2jve8KkGtw8PJmGVhUJCSEoTMe84h8LxtrfcXB1yjjSDsyX24kM",
  "key8": "45z3HTthkX9CkoFyW6RHcpYiq1FiEWG7X6cTAjVcqhN8X45KrB5kKuGWRib9GYTanTDwb8rFgjk6qaE1cbwbfPiv",
  "key9": "4d5aArACh4cN8N615WARjk7DBGF7hyHL7Mwxd4G9AZfcs1sUJGq33nRBuac6F1u6cieuN53cMtkrC3wdchnQJWTu",
  "key10": "3NvyM5rokQoTX2xvGzzKYbqNQa2UTXhNWPJQtxoxRjUtoKCnNhNG3vNUDcasWnv5qQkseGAg1VGbx9T4GS5p6L8n",
  "key11": "4bX942qD74GHRKj4Ys6RrbJBwgVowF8caMD9yDAPFUVAUDnamELzB6ZUKxa7DWmQ8nc88iVTGezm7qJvdnu8LyMh",
  "key12": "65g4e7KLemaG88zpJ3DyTMozxsQz7n8jCtX1Ww1H2GZpWCPy7GWfQHRsFFa3VJNqEeQxPfCA1kMF6QSJRcnfvZnE",
  "key13": "gvERNWut2ZU3KmGHc2txe4cpmQBkMJFZ3UCohrA8VHzCkedMmkYzBg4pFD83APyGd6Tf7GhtMJFyRbAxMZ6L4vu",
  "key14": "5tWXC2d5BwnYHBe6VZobHxzt4Dxv6HUmaSEtUxP4AmGxvcskyiRaZtko9vBWPgm6YSUvrjEmSiQU9oMRGZ4CKpiD",
  "key15": "3m9feaE4XTvuSYue1bsc85tkZ93gGJfCN7dAtGoND1PFEd9fQDDu3k64xc58uCJnFMC69vdnAnvUvoiQiLdVvgGK",
  "key16": "4sw18EdVPUhjireGXojBw4EfLtpK4ZqVsR9Z36Zt5vRAYSJhAMMxt1yPwUEWBVgbyUQ7QLWFcGVUeKTsnEzdZzqM",
  "key17": "2nBXZp7GncxsuuvnPSxu8yjm3bZREcCCVrU6HYDzop3y3rAXt1SxnBE9qhQvj71gj64LzBfQ6sWaycQTvvaVYRcd",
  "key18": "3xhydT9wqxdU3VYxrAvWG6N7Am9xN5YAAmNaa7Fmzr8AcgCoqdwtvDJb86oTFGU4mkg2pBj98umtHjbXc1QdLcfJ",
  "key19": "4fTnsor7icnuB4K45ykoxPjDjxELtPhcDgUEr26Emm46MMMkFUWrxJ2sS5qu7B4ZsNMJEMp68af6A8xByn1HmB1e",
  "key20": "4zvZTKAaQ97T5NKmGGfvvE1c3kYFZb6xu3iu2nMp9PBEZTjM9e9LU9P9XX24yDbVumg1ijTrSZSDorC9EVabKokc",
  "key21": "5fxo2wG1fDzKmFVDZu5d2csuCkW7Em4rt97Ki4DdW4TJxNfxgZbhYkcFzHqfhHqJk5JJ2uQ2DniH9JQMZSirQgjv",
  "key22": "5n9zevyx7ddjdH8deKgk8uwm2xMEfKnknhNUFDNYzrrXZMP7Q1snK1dxqVm6k8iMEnHqgXXbD5Uh3CM8XDKxq9Xr",
  "key23": "mNANkYxUZMj8d1nf1gKX1o1ho9ENRyzdrweuP7ovY3q1V5T7NbftbqKMzKGwLEWVv7et71MRSwe3quftsQvb5GB",
  "key24": "2kezVPx834Nwadufeg5YA8CQmXLD9Ve1zchLeqyBdiCSkBo2L1bJ83hGYfowSExdZMK3sKnsrc1fT6CHWm3syw9T",
  "key25": "2p2wg385yh3tsXHn3dgH4jEuPoEpqZgwokf4DZ3LxST8ekUSq8rsUDUbyRAQJbgLQxHoytU6cxbYHw9d2gMN256w",
  "key26": "5aec9G2ppgyDX2LmS2oQGWErfqgeFUu2yPjdXysuwPy61gZKqXEwwEouu9W3wDdQkbcdsNrSVocfVDviGZKSaEX6",
  "key27": "zMAj6zarQ46C499KThUwHgzwvJCqgcVHnGByLrwBh5wP7RDuj6Fi35zbFeDtAE2BTzKXWAPryV2PwggVcfNXYBR",
  "key28": "JExAFuCJy5FXc623vxfKLXVsKdBvFUKnRNzQ27q5yZA52KKQzpUaKZ5kCm71k4LkPyAbMxHR1aMTQkm532s46xx",
  "key29": "3MgexdsCjFkbGhj3YkDZaN8n6BxRM3tMs9qxisNJApG8S6TcSpSojeNxMW1jLaHD6TqRSEjD6asjTADp7UZ7eXH2",
  "key30": "49TJnojZ2BAfMez32yiYESB8moa6kphZnq4UN96hgEjCed6wXG6vpGkNDugh4N1vhKUXjBgYERKvUZt9BUMWvfMS",
  "key31": "5xfwPoLBGPCwjNEspHmLxzR4ywHKaZ5nNNB4cEwfdjs2qSofsrxroCwQ3Gdiz6LXMvoRRiujm54bbg85GcMmcxXx",
  "key32": "4oHy6DMibntuEowEPM2FS4HbGbdS5q6sY7786FrBncECN544U7hgyACauyYe2qJT46Q3aDMXG3KbqcG7iEzu1TFr",
  "key33": "2MqJYmwhupZni4sDZFxqKP7w7qPvFHrw1p5BeYEJpwRxcrsmLZNnL9kUfhi3v5Pvu326xNZbcZFWoKp3HqZHXn2d",
  "key34": "4nbr2N1q2vxp7UTz3YZYMg9aTsooXVNByhUddxPbx9auirY4nq3Tr2PLqjiTLtUtuEp3qrxPq8yfPMDJrWijPoJy",
  "key35": "A2v2BCTebPPuq9N8wyxRaDgqZYh7DBT8WrXse87R5jEDbQ8RThXgVvARmYeJExfJ48tpMyPN9bHoFLfj3hNw9U1"
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
