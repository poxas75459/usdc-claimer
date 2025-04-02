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
    "At8FdXsE4N2catt9dA3HXZGzDKVEx523H4GiQeSTsEagUKveCi2QrbFUaF32vagqYW458PHizGAXJAY18Ctoy9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hxX56rukQcRcKvpjTEvMwPJsGFYbJ8VvNa9Zi6iaN66JjLx92f5fmUk3GGgGqPEqNN1H9VUHZz2zngcvg8kyEio",
  "key1": "3VDmcBVp9piFVNXsjmF1PQw6vMmhGtLMCvsTXx19Ux8dx2f8girHmcqXaSig78yVcQYppeh75jTgrBsNmbdB6Se2",
  "key2": "2DHCz5s3S82kFKhVKjNqR9JjQ1hj1hBRtrcDFveZhhKJoUVuh7QajentpPq7Y2GryJJPSQ7p6ev3yR1Nk9xwJNM1",
  "key3": "4FgXNWcRyKZyKB9oPiT2hRi7RxrHZLqMceZwi3QdXnJ5wpDpBJsJPGqoRUnoHMh1wSHzvog3WMaT6o2MkoUnaw2L",
  "key4": "5i4HfvXBdXeBaJu96v9AbuggNpE413WSNt9Eezu8uq6BGqzHPwthhdmHmDBHh9vXHfEhUWv6WZgBv61Jk4pQb25b",
  "key5": "39TEs7wDUGNXNzjY85ReoH7LQCkB26FiFrbxZfcHNB7EJMGHuBErZmLTFuTNzXuDkqJEyqZtzjj3gcxJxhyJ8f27",
  "key6": "2EiEgLpLJdTHDEDnyCqTABm9SBZudDjFPGGWb56yxRi7vqmZkU1c3QQjLopCVM2v6d7XBgoSExDVi4GNFwQecxQL",
  "key7": "61BqnLFBHe3KoXTFXpGczmNTtBhTk4zrFu5ub2dSN1QnMgw33NkzPnbhja2izV5PH7Uy27fUZXAkxsqaTR4PSkZy",
  "key8": "onER9iWex7FC7xZ1xDwhjSaoaib9HwhwZbPr7GiRK6NgJ6afhaaR28o8EfRj1nLJbMTmrghrzjUQEVzUiZNUMsP",
  "key9": "4nVnELH9N1Xd7emXyrAVPdszG9ZLyDoLGu6e21ARxmwGPH81vWzFPeEpWGseiUBn8gCfZTE9BA7UkE3bHEA7xJqz",
  "key10": "5NRtLaa6ioZrMC3smQ9U2WHSPpka4opP63GtexZk3NPtETW1F3PK2m8DuM9yAwitWaiwFZpKTjWtcRTqQzaJhn4v",
  "key11": "5GqMiXSeyqXgqBgPfA15fb2NaJhdu2849eC9E8Z7WooKfJH46krYk67Qbg83JcEWmded6GhodxS2TbgzZj5RrxJp",
  "key12": "3zojsAAYfuJeXkbqttL7r2crp71g8eTPkwB2aABH7fK8QHrmU89yA3aiJ4QNpdkDw1yCcCgXJA8fcqzY53tyhreo",
  "key13": "pf5Mzxz3Gqbr1g98jMG5RXqvQB4RjyBwKXLRaEowiDAfLKa4hh9SzExes28nQbr46UnNy4iUbXvfihUpWXPD9EY",
  "key14": "41NqQNyqrSFPyWBjLJw6t2tPTdc4QwxH79Lo6avQ1Uqj8mLzBuv8deJtxanx2AcTMEnZxdsto3i9HmLY9HoWraYv",
  "key15": "57DAkXewVNJsBXvdppzhS2yey6BDNyeyw8WswVZmYNUGs7FNhnD7Sfk7P4FvEsPfbss1TymFNRVqiRTcYHBVpuX2",
  "key16": "3eSU7BBvMYktzTdsaGi2JhKCMWmhPxA8BV1m7tSZizmZxSG6Dyv2Kx9k8qQg75RBuxPt4x1cvapJ7yrVfKbdwFpr",
  "key17": "3ebGVMTJ96gNLrNi3N9B1EwG65JqymtdDYPMSg6GhG97H1XJ6oJDfATWg7Xj5owSXbgSSGzfZm85bKhnY9CCtrmp",
  "key18": "3H3vcFjZv3rymbCXLfE5UroZuKhcLUPHkkUPNM59WFiSixeYSkxCLmJ17WLe3bHiHa3vbvk4QXdd3oE2P621x1Qk",
  "key19": "2VY5ZuDLHWeAd1yDUFU3XuC1wmKmLr5KPaWC6uf6oJsSKFSpLczqXHVAcYNVDV91oMHQU6SqSpyTzSwvwSqC8U8X",
  "key20": "42EuzmWAD1uuoE3z2dA7k1RKymJ3dnpCrGhEwDcsp2yCnNpPgJV14fTX3p3iSsyoG7rhDKuUX5gZe8C8f2byZPuW",
  "key21": "4HJnUfUcJKHcBdY45QRAAwRxcVXy9Ezj686EYAniyHWeBZsYqjA1wriNokrDFzLEFYGNNh5PnZUyy4qRaFY1m63a",
  "key22": "38L2zqWAfXW8YsoUaMwaUHrL17QYv4MHS8hH7uisRR7P38HFfc9M45hA1N1SH8cSV2FENX44C76SX81sifBWTmP4",
  "key23": "5DLPDCrEwkgjcvGQqbWsemU2SdQ3cXr3jjThy8zWVWA9oYhQQW2S8Ns3ZGpMFcE475bAHxEaLz1XuQdqke1ingrn",
  "key24": "4qLLXV3uznFBaCxin9rfmun5irDw53JckNJog1KkQfsWJKMsitW53pKUbmKFc6Y8JPg9ZG8pn4aSBccr2MjhH7Yc",
  "key25": "3MNYqR6LGZf36DtTSi3KUhbjSLSXKMw3d1QwcePyd37EcGQAUWH9BS4HjMNW2Ahd4qFbqBc5G7JuoXjJmMzLbboT",
  "key26": "ahTj1ADB5AWXhPCBAZsTvoxffSj5y1HyhcDtKS6bfSKqLapX729UNFuC9ngC5opo94UCA4Kkb34oEkahtoBbGYk"
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
