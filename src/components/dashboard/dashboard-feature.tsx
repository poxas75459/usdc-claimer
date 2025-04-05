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
    "5mSxGAKKE9Cuc9ViCy8LJ4q7xVgPadb2RFAqBP5MGBdTqgQ7gxQLGoUMjkCS2TBHYda1qvJrMpKBUC2wniU2mkLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCNrVnGaMxeuGsGmtG2EV7mxYPrUJumiqHfyHd21nrWWAgYDnZUCAYVYTkp5ZCJ1Jcvk2R8C9Af4NZRcGDCUrEr",
  "key1": "Gh6JLLqGHQvMWksmhq5ZbyPQuHPjRfcXxdYXRRPpReUK7jqTGHvwkij2uF63LCHd8bNdKvyFSxXT71mHRPhkT98",
  "key2": "5vjhtnV6HSALtijHjykcdpbg5iMnAXfXj6cQV12Z1vPix8RttMEGFpxeGaXTkRCw3G371LrRGYvdePyrPS12sHwE",
  "key3": "51bBSgqNeMrt3QwhoJSpSqvSw5DoobHF1Ji4mymyekc6vW6RX5Lg6sdBepUbZAdHR2bvXZu6tsRvPVzvcwYL7WwL",
  "key4": "3HN9yK6voabna3sNNK78hABoz6txruePBTNEMfeYc5JRZP4yH6UdsoU9DUD5tXLTkUfXqcnDfQGUaQofojshriEC",
  "key5": "2wJuqZSAVcJVrdZLKFRSHa2dBCT4BWPiGbcaYBjPLQkHmMkkJrouVwxuhW7ksCghAnMVhdynZSRYsRWHChC22ySC",
  "key6": "5Dmd5DYrke8gjZpTQZfLswgnK5tZSn1ZYKefk8rhQZe6VgfXUDNGBwdiPL4cjyq5jXPGrVAHSpaxh2i1Bim9HTrD",
  "key7": "8LCW8DhQ9tEu6gjBP6jSZNpWyNt7CePzKdMaToe1f3jqkMY6PDjTqJ5aRpcAJwg4cq9PYjzvzSfqgFtmH8ZyKSe",
  "key8": "3rewNQE1859voEjGw8RwWg8GQRVqLtT33TQUXDiTE2SeHKhRQa9KCahHgkLSgm3iFwjgSb9Sw9RjP6N1pPADCLkc",
  "key9": "4rGZByRVSN8s8VPgjaHvUk785McheQoBVEJSrFKcD1aFSkoYPsHs67EnS4YsQinGAeQgDqKUcNCZ1gvo3dDYemnP",
  "key10": "4JgtcRkBYqTF1odfUJVYpD62HEvtK3GPVxg8sFuboxSXJwZhuriNEvB12LRRfX1KyJEsQbCnpjFNKYpKG88R8Bpg",
  "key11": "4to7hbZufVDWZPE8iY39Yb4QCUhdskjfxve3VfebKMpFSuKsbrevgKtW2e9nQ9RxerjqjePaM8DpYnJHj8qFB9i4",
  "key12": "2y7LTMUr2rB7rGzhDtvGBwLvefd3fr5k3DU5Va3DaX3vpf9xHzkCqnjTVickwAddrLWoyQvi35KEAve2enk4k3aY",
  "key13": "2mwPh1Qdqhi97JkFXpJvPY2pnZXdaXpfj2CJnshocEkwhha9iiqXxPWARWP6RQwXyWD8X1sMecZW68sB4XB939Hg",
  "key14": "2oYygyahUC8rZxXoffonv4k9HMu3Q55gx9FgM6YMiXmoNr4ca9JHARLVidkC6Sg4bDo8GZ1YiMVZ4SXgAmb52wxX",
  "key15": "3G2t3b8pdnDAUjJr9g75S1N2HDkJvyPahDSfTTJQhAYHSyNvkmGj7E9H2kJrpoVKJLUu8rC844Af3d2WGVFSadwx",
  "key16": "5ayh9kUy7dy6gNxgie6bzUtUspXrwH8dntUhbYUtSWm9gpmmreGcDZGYJMQDWDVxrPWRWZZqtrF2MDFtrLssq1oX",
  "key17": "3ybCkiACLcV8brtzkLrjCQjai7dzjck1qfddbHmLWHyt99uE9fFkcrVHPGzLYVK5pZyAZ7LWDJ9HJe3wA8hpPmtR",
  "key18": "3U63MLrs9NwNmJAVssnW4S4CpwtFxay5nFBnM5ao44ZJetgRZWBebBEqA6kZn8nLq55UFV3J4czC1iFVPSvymJ8L",
  "key19": "5xg6Swkkm4a1JFGJzBrSThBao4vc6bmXN6gkTjaPxnfWMHhPisbwJhRW9SktwZAYb8WNQcDvEeX8fEBEvU3wi8fZ",
  "key20": "2jS4wknsgdxzjym5MAkmdojvCzNxkUxdU1CjkT4SSWGfxQXC5fvYg7vjJhtgQhQhwqNtwF12Qr6N1cDS7HWacjPd",
  "key21": "3LLfPJqnUL5nFhWz3JjQ2vD9vgJvWjiwcCtvpavFuWFbhVjhBqQJZGedavMwFYGSmt2m54xfR9XorF5cnvk7jZ2C",
  "key22": "4xCkU8EdLX9cn5563vzgo8Z8vgtHVMyQSJ4d4iPoYirb5mGFSKVP83s9qCTwV9r26y4qPfHQWQN6yCLiRbzvSEvK",
  "key23": "4NgRiAZci24jii7ukYkboSCAgFkbf3qfCv3z1i3gN23QqdpeYjFoXrEGHGF3v9iBEYRX37JYGAD3AFcd9m5H8fbS",
  "key24": "2pBGH865ESJFn9952gfcP7mzxioGCvCDM6URDas5RGdUr5xJyomva75R3uuFpP5e4mKnXDwaFdWXLHE7DstbQwUy",
  "key25": "2sC2vMu5jBkkk74xErwH27vsomqLcfx1KeoY6NTYhjX2Ti6dKHtTRfb1B6gE6SmWW3R5LG9WapLo82MKh6vKyANQ",
  "key26": "5TCtLptp12a3phC4Gfg5BbhYr6EgcErzv5NhqAv9Nbd1Qw8FWMV5z3EvG9VVwfHEdXQL8TuL1wj1iijhe9rYudL8",
  "key27": "h8abyagzzWnTy9X2yaDoBwDqMrqPX34Ak8FYg6a2zbDfoaMF3TSL77qYRMMChKwxxMtHSPVt3TyLh2cVKDzAkw7",
  "key28": "5pxqWD3Ddq7yMsJnE4zh9RUq9FsXFE4uEKTyRM6DkWZ84AaoK7sHuvwomf3geaaiYBohVRZxx2WNFC5ji9iWX9Ga",
  "key29": "2hkSm9Staoknc11t9VmTMWpKVC7P7zLEPaA29CdM83ZX7BRdSQugacyDmE9KSZr1cKtG5UKNYurRnHQKQVLbXkhB",
  "key30": "3xxPticMwTCQP7vtqrpmDsXiVUe4pUfFtj6awhQFdUpYb32GLbBvYQ3GtFiPEF23eQd2RUKg1tZATRogpkLXzhLs"
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
