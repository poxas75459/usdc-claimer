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
    "3jYGmh6YFXhfvHLYtGWnZvta6SZwJzccR37oRhyH27gAv5aYZeWP5fXUgd6HH4pUNUuCfnE85ooEzfX4fsd3AKf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aAfw7sBeeMZ3Er3cVjPJn3TAHwtB7YspteWXqfMFF9Avindddts4ukoej9DKu1XH9TyrByrb6z7ofzhMFsTQKYb",
  "key1": "4CgW9NJi2RshtWLhaSB2tXuyeXVaYhAAeaYBVnzLc7gqWXEREXNXpYrjEdFwYUTqBMjQL95DonpW1DBristRWWEr",
  "key2": "3iiBXrs2vPWfkjTnomMNZ9iXFDr4FB3Bt3DgsiCjxf1o1tnQKWXHWgFTh7M4BMFMNBdfmv2EAEudygnMHYdHPjcf",
  "key3": "2zcWB2PV7fVDYs1S9vFPeedBR6ehK5CeicmL8nnyGCK8VKVXL9qtHjiviRaSBeRQxXaKpqdbZJn714q57TVhxoGf",
  "key4": "2Q8wezetSqFq4wmdiLPbTAGQ614jHUajBFMwnxJ1DDjZayqozYccWP2BUi3uWH4EYXxyytccFQbNYJMzbbQe3ewi",
  "key5": "47FMo5LE1s6fkhtJCpGCKY7t9KrW3TizqUU4PiKNibdJctGLBhkXhUpYjXJtBhJDktXootpKKAoonJWhc4jJP5iu",
  "key6": "2K8NAy3TWEbrPfSd8E9uj5akVvi85483shM1cuBi2a9CswmTgiAfv1tKLZxyidNnTQuSpWu4cCrD6W4RCnWRnaM2",
  "key7": "dMkt4RFgyHEPmkcGRJ5ExJYq15M5qbGtWuEJbuCk97kYTNd4VSnUZvcSuXpmYzceckZRsnvy5z1itTcfaiWZvr4",
  "key8": "4JM5hCA8AFAKH8nsAngAPuiz3F4dYXYz4c5BPRz8DoSH9LVzMyr5RCaMgSmmXzDUoHJQom9qhTsyVCWkrpCP3ZAR",
  "key9": "3ZmMDn1TwsZYsCXH7zxLbB1K7UfkkyD51HEQvxoRG98N9ZQGfhcNvzp9NR2umiwzqfGuK1EQRyyCN6HbEucRN7Zg",
  "key10": "FSSUQh55ZSz3bPjm3Vg5UHYD3gSyZ8yEZodYViJNhHuuttLNaq8vSEVXG3oGUUuykpCrdB9KcWaUDQvn7zDrKAh",
  "key11": "5dKmtAcGHHqNbUe1CpQ4ehBUjn3tuexCTA1BVqKN3kMMeXbT9PBgR8ZZgiC5eY3bAuuJTqg1dsCSqoPSj4QAijhD",
  "key12": "3JipyNzUv171SZd1jWvGxwznnHkC6Cxa35cFjWqrhFxkDG9MSvduh4CWdikpMLchQenTiWjzauwAt2SdywG8d6cy",
  "key13": "5TZcrttaynuMWv7iyYBUQwzUSu7wLZCaGcF5oBakadqmqdDZvw7Nv1dBqvRCu6kD16hWyGJwW18q3p9xVz9bmQnL",
  "key14": "3Er1X5gmUmFNybhrjXEPPEQq8kyyMGE41b6Dekac5twdRsWzTFcx5VpNoe58EXpoWempDdo63UqsMCLP9rmcaMmq",
  "key15": "z6GUXjGvFNEbox2WTxQgjWtwWEENfgGnCYGZN6zCgGGKaVGRop8dMEpJqGMjSAQ1Jnr1CYsF12pARTFXZW3yrfG",
  "key16": "4gNSYA4FZ5X4JeteRzdK2DfhtoXA34X4ir37oDHnApGmW29ekQpm6J4b9FoiZT1JMBW6iEFavdiLrkGNuQdYU1SZ",
  "key17": "517pDfYqmwZfgH8wAwumExZdH2zZT8dkYBsWq2Sbr9YiyU33qWDLkhpeKKknQnn7u8ayVP8DiPMD24eYHJRPPS4p",
  "key18": "3u2ypTBaZBLSqiMt28B2mTsgmH2NzKruaS29CkeTwjCQ6ThSQFJ4m1Vp55uF48zswvF2cSmrhpYDK2W7XJnQ6L3Y",
  "key19": "5J5KnL3hTY7ksJ3FgLye4TWPn9qBcnscJeBy33qcbMG5o1wRyijpZuTeZQpHGxmcEHQ8prSStN4fjE416CL87dq2",
  "key20": "41E6cHYktpjARnhuSTHb7pKCj6ZuCbntXn6mTsTRFT8CtSLBgvAnkZzGwE5sFinLdAzPNr2Rzmdyogwjc7trQNmd",
  "key21": "5mivTxrHvdHUnKxFdNHqDHStEvCnm9Eez5yviRUwgsBKxDX4yTjehVEzoEXbDpEoop4ek7nbgtKvQ9C5DP79AvmX",
  "key22": "2716J2pCSATnSpqN47GTYyFnA4iDBsBaZ3xpSPeyHHyuE4MGqfRtmDzrNouZeJ2QxcZqEpL97x8n9MLndEhFswcN",
  "key23": "62U5LXeCGZ1kpC5Vj4GhdTv8rSkMNrh8614T1KUEbrZwoqBBLGobP2Qv1Qcx6jetCGHwMW1vUujG2mM6eXBoZA5p",
  "key24": "4ALdzxZUcEXzMYsjG1rHMpjVVUcyymbCCL9iXrrL5MKXPwC8UG92t1BmjPCASXtDZe6Y8rxs2E2qDAM7Y9mU1hGj",
  "key25": "MZeFvXhRY1t7TmdsmvWDkCmwsVMzwEDcqxYPTWyaQKs32uYoyWiXaZh4SFUnoaz7yJxsL7YRUM9AAyuJ1CzGjq8",
  "key26": "5UjRYB5uiMmVUWGieAE67xWs6ffz5aNe5YdREb68oaR7p3Ygns4TsrF5jHZxoqLSnNmrGies1eXv3HNatYyfvJ71",
  "key27": "44KuqRhQRLdnDNPZwijL85MaybW6QdUXas8u5NJycj4garcvoW9oUGjSYfSgCyDJMwqRwkyN7nLen4QQpCx34FTg",
  "key28": "4eRqScSp2FESgxcXwyGZZzCAghMJ35o1VTmFKRDXigYPF5E8emvrc3Yzc6xneBzyfP79PjMoBLHVEL2ohC2WkAzJ",
  "key29": "3wfZvcHApo6NfuKPUr8SoagLXXt4BCUfoycahLQf8zZAywQFgLpQRpsYoyLMhEiVVAeobNSKTqcrRSzbhqLeLsQj",
  "key30": "kL7sn9RhoKGriBQVZmzAaos9nXESUa7ZKPUMjWPW5emJXVXXkeVdKx3V1j4czHt46LUHdCK1r7ghJgVbQ33JAJD",
  "key31": "2XeWnkHtYNpZNK1FG6U5Y9Hjmd2ksxDpaNiwrH8wg9xeXkSaLVLz8inBokJHhJ8CBkwPWwPHF9h3xtndTZvvfwmq",
  "key32": "65xietFGFMfLRRifB359URZjFtFTSwW9WGDCk82shztPAGvYeuda3Yt7HzUtxhymGxTtGfjhghJEVaswjWPvobKT",
  "key33": "2PDasRBuMqhHJPR9TYU7wrBHpFxatdBZJPta5CTEFRyVk79uqg2m5p4i1vMSsnqKdewzHDJ1nRjzKN8tpUSJe3Ew",
  "key34": "35LHKFmtzaHz5RgcQfR6vKW165oCVNWpCSBbHuSt1Fi5mnLHpd8CYzjGLTybunrT4R93VxzvuykzY46ZNxoNNZSK",
  "key35": "zUD7ZHhboRAYtVNFbAgNEz7nTAXhj1NJWdDcPdeApwbm13CA81RHh2tWqEeY7xz1kygkBv23qDkULaNMiq5vpi4"
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
