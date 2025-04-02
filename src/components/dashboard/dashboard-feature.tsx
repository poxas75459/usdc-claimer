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
    "2VVTQXbu5mGxHjjZkD3Xvb8XUEe3TR9oUtdexu6U24ej9yjBH2mJt4XVZALdedyVWBtUnvLwjMTyyqP6roFaV5xA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gejsbe2sKftu44VAhW3umF9BGGUT8ycGgJc3ZCzxYzjkDQaXAbp5eZguJFCdp4xhRt61uLkuYd6s2ogsnp6k9nf",
  "key1": "3RLZwyyFAhpRG63UWZ8K3e8qKePDgd38mrQ92L3Yw26aJiWxS6Ujsjf6aW4PUsssBCepUMsDzAukX58kj8CpdmZM",
  "key2": "4kHeBQpdtn6YjXFBvjR837eDZSzAqEwxrmWheS81AynQmCXoPdZTb7Cy7iTGSnV12oVVNQj2PBBXcNp2XEs1WXiw",
  "key3": "2koFCusUEhdwxvuM4Qf9JQEV3Vyi7ixVjA95DAJGfoJ5h6WypT6om2bMfijuSKyEN3hJHX5UBUKRCsLbWf996ccK",
  "key4": "n1WhN2t35JpmR5DagHUwNtyZLbj8pQG7EYaAeH8dyg5LGwXVt8nv4PicURbBUBWiU1xZzqsRTzPTNfkibbAFnrP",
  "key5": "6152XXdsSHZYquXQgF4qrzU4ZEhxL1Pu93WvhwDiddXt18DyQrsjjzu5SvcWWZhE4u8FuQBKrMLsDCXmN2qvwWRi",
  "key6": "2gjMxTrEdYskYL8g9nX211tAYCj7c38EFFhE8oDTvwGWnsMYMmocNJKkexSWFnp3qz284M7gdpmELJh1VFRi7HTC",
  "key7": "5aq1dGmVaXyYSviEthgWPAQhiUegUtpoUNxiH73VqQhGrJCR1yxNFt5tHzrUwPfHXoYZ4oTDkHPSXhTuuFBz4XHY",
  "key8": "5KjDNhz9TdHJThJqNPwyWPebK7BCkWHJPCHqpTi2wBb6Y147Hmrx2Wt9rawgA7sTvbFxfX94vrKwBNvhZqHK4j2A",
  "key9": "65Astr9sqhUW3pybLg2bZtVHHEHPbDi9GLRdQxX4uXogABUhqjgxh7ip6Uyudy2fXFChb5Cdp9MPEATy8w6oPjmM",
  "key10": "4jCSd4uytHJcjUzMUAwkqq7pfLpmKKgVvacaE8FqTTdnsJkZVf6hvTYPe4nyohh1MTgt1kv8dSZZQ8suwBJi7p1b",
  "key11": "39yZHksSR3sgbDQBWHq6QnQHGKhu42Btz2Amuc3GMmJdVfhWcbmN91TZDzezEbkxSeaQNsMT8pneriNYugatpj2o",
  "key12": "5XrETUUC4d4iu9bX8fNpK7QjLqU1Cz8WrL29HrYdMfUkWA8cLyvCxfrYPGBYqeqKdUcZQ44t7XYYcNwmtRDoYC4K",
  "key13": "2KYHktTKy5iEdrYLZogV4HN68w2HP4CYCwnDpC2gzVztDUzvVHMQvtJ2cBJCkNBYax95TRD543XYFZNtVHeLsjg5",
  "key14": "3UPk4C7nUXcmVyWSmsmUhEqK79Mg6kkta6JJz2YUhp2a7PaMKGf2XPcTFsPkA3xezxy3SzDJBnpNQEZzAXqRR78y",
  "key15": "2iK1oM2aaGEwNf4miRn6eM69kvpkS4CdQfV5Sjk5z71doQ4XSy9KkXgm6y9bcjJXsM63z5ZAYDRsuTA8pmD31pVV",
  "key16": "qP7Tm9yNRh8WAHANgJM5WeeEHwHqJ2TR9Yz7UPqKCwCoYfmH7e81zPWBoVcazvPU53U7FdT8xw8fPYcgyKUHjBc",
  "key17": "9JFAzSG8u3XakDABHDnxMWZSrjHsjhfu1a3MN4nopvszRgQeDkMUFHFqsteRCkCLChWUcQ84ER8dK7z1LeHgAJN",
  "key18": "3opYx6LTzMQ7QgELG52NfMr3i3vvHonfQnLsW4S3a6RHGheaVkutKL8YJtBZnVeV6EuJaejZeAxDV6kW62eEYisC",
  "key19": "5TWxeUEZVFetLjD8WQmc2RrkkoDEhrZRQWNXDu4pvsYFXKUCiP84cS68EroC4M7QHuddhTy5zUFPZSQzt1H9aL31",
  "key20": "5BLsoNLxXDAwqtqXFXfpnmTBeaua7gyECecuEsHR5fwiNeX2z4i7ZDSP6PiATSUjbtMDkk8Lxrtp1DFSjAZKBR92",
  "key21": "mVant7kuSgnDLGsqWxGSbZdXGVffJRr7zam1dkrBnw8jwPoGR7qyGHANqQmoczLi5FJEc7ePTKVJCUm5XMnnqMU",
  "key22": "21ZQkYWoB54tTcjsAB9jXi5Wn8BWa4F6E9GSQ9zC47Z1RHJGqxqrGVTBLmtV74M52QmryZrNsAMhF6heC1BuZaSf",
  "key23": "4WcwesMzqXY6arU2rfj1MFq3H8eLH7zCVyGio9Eb1SxwEZKxiLE2uneYW8se3vtDFrhPYKasAw3K5LXYUvVcrSa3",
  "key24": "2tvLNCnayWF5Y1gAgAdZvBua3jCe75AokQFyvFzKmLyiiL9Gfcfn3BFbpEGA3Q1ecUoZmsNYuNFE5t3kxuQofzuB",
  "key25": "4VMFAWpD2wYFkgKcfuDHYyGXwAjpU3E9Yf2pLwm1K6U7gyGVQLu2qcaV13CZj7ZncwvbQaEARimSqy2DMnwzFr7A",
  "key26": "4xrZVHpZEV2yRdoWsnymemRMdv6yQJuyW4pwYx7iPw8LaHunJa8rs5bSaUSs6vxJUb79xCbS5zQL4ab5Uncw5DYK"
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
