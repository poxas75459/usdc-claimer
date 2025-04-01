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
    "JBvJRKfZspD2MsrLfjJZE4oWqiZA8LoXFf3XerGJvqbZdZZJmmGTUX7L8XQKG45R1ArMkKoxZeLo86C8tUyiwCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hndH9ieKXt5p7EwYtUjZUgzkkRd1b1F1GEkCfbchJcaekz9L8yJUcXkPjATCqwv3CoeoJVq1VzWP5N5RFGZKZU9",
  "key1": "3q72gAMJH39FSyTcNwbfqaCQKpdJxEuiuNCXawDB9ZixpVsjcx3sqbX8bMZhRVosekEL1Wq4BtTGzNLvZqxoAAfG",
  "key2": "2VfwYR1pZuaiUMvb1nsP5b1QehdTRQeHV15oNF6MZgaswdATAeWD5Nj3aM23n7mnpZWfMHJLELmfGMaCb9jRAx9G",
  "key3": "2QMd61N5EBDM5Wssjrumq5vJZuuJ2YMXgPBiZmxvJcLSPhVs4vZ1u29L1MQfoW16qv4XLe5ixhAo3cTG1ogV2sw9",
  "key4": "2G2GTFcQDbbPjwYVYToxsih2QJZ9yv3zL2gA3kberHXYrSgcGhjKatApjGUXeiLVpRhdhSFFueYJqNvQCkJ6wxQw",
  "key5": "2DafdZn6g95zHRQafdVjGfZEKgz5hrKjiBuF5Pccog4yhwvtXqxVQ7sZmwq5L1czZeGZBdSsfiLynHqMuZzpzM46",
  "key6": "2LYxArDkRVNEVd7SqPb3RgrtBDfDgGf5wD77Jf6DpikzYUjE4r15gzPdWzRXcpBFiBxs7dWgQk95qF1zFzWWsYqT",
  "key7": "2kh4xo1Gdh5EBczgxXDayUMgnsHKBcCiebhuVcMufFhLD6BtTJuxwnXqFuX7SnugY9Bsq4iByK4BAdf2Dhurmv6x",
  "key8": "2vfc6Y9pURDpGYWUEQ4Sac1oT9qxpJwtPjcTZ8z7u75dZGC8syAyubHpaeQxEPVwnvAJepMYy8Ns4nesRZwMmvtd",
  "key9": "4jo92rLRjWf3o4k2PyrQtBeUaaFxBBk837bpKDHGLQBYXCM86Hu5GyZKVscZRdnsCJy7TV7sANLFu23mqX4eQoVi",
  "key10": "5cqrCKQRk4UhaJPnXHKGUEGYD32wGzxKRPhf17gERjmt8Hk9CRJHyhkFgPSFwQV7kyFh5U1Q6G7mHTKfYg2n5uqd",
  "key11": "5QWnZCtsB31LH2NZ41JhKNQS2PHhWchm97uGqEqfrgf5nW3hSEVZxGnzGdXXEvia26Asy5pqMTHqHX2PSLenGLbo",
  "key12": "S13MyKJnY49AkLVJKowG22uESmRxLKuZZMQByszSZ1wn3Z5ngrikwN5o7zNWAgpZfUkYUQb84wxQvcAzQe7BvKA",
  "key13": "3NNLWXtP1FSnmmYrhcbj5nT2nSLuXky7r9cfumynM9NdGv7FbqBTWBkAjpFgpuSDAJQ3gi71WGzEUdu3WyZZ7N2j",
  "key14": "3ziE87RZNa5uUGLGBExCVNyCrE72KKNxSSy15NqWbecAnU8jzGy13wpVp9tqBXhyAvzw6XGAUbgPuThxeZnKcXah",
  "key15": "2NSMf5Fkr1bb5xC1UdUQkiQDHAUwW374VMXJ3bJtEL5QuriPgoVknRBQn59LRmVoXc5x9R46N7kPV1GY5DeYuysi",
  "key16": "4vftGuoK9LrVJJX7A9m73hc1XzaLBfvzjKStHcGTMYbKsUxGcZYYfpkwDQXMK6GyMyFvwyE5XH6mBU6D1tWUBQXK",
  "key17": "45EwzR7STs8Q4aaBLktfEqVhNWtAcXsZRgVTtFK5GkTxauD1sVeeRyDBaLxNFfDTRGYxJLApd1YrqEMXdx5RztBT",
  "key18": "45qLeB34yhAAAvz6rWsLkHTLdZcTgoSnStpSTqCinQcxJbEXFBHwpUKT79DrVfcCrpSD34vTE7pW1jdStkpA4kBN",
  "key19": "3ES4DSUkCE2XvqaP8D2d63Dz7NDpFKHJgdJUyoDBw9mQCV24rqe97oiJDXFohJWRRWdQrjNboBzdY7NZW86ieNPu",
  "key20": "ouBVrYvpV8TgzD5m88D4UP15d6AYPGyFSjcvEhxjH3mP8vc7fpE6n1F8L6nfAG96rTv3JiidSaqVfkXBLJVajqV",
  "key21": "5u9fYm3EUFhHCvbdKE8UBUL18icxX9YAigJejBukSX1SeMEqvc2DXX9jCEJk1mWtfxcrAcQSQnhKEvMGJSJzPhtr",
  "key22": "49Mvx831DKYUnsZ9gCybvPEwh2xyaVAJ4PhTS2YYLAmyHnhGCeajFuUg6nT6uq45Afhhir1e9ikbNeb7f2LK4KeW",
  "key23": "4skSiPNkTQhEBtLobSHrQVgGYYYRKepQdqgnDWiTGyGigqN3HRTwhYVfzwoJdfnmmy5HgmrgwKncaAqaFSgfsLJP",
  "key24": "3idwco5qdzbRcBUo44M73Q4eGmSQ8Zx5aYccqEsprRXuHQfmLVErprWqfuGtF5Rzr3idPsxyWF7WsEf5TLqfrZms",
  "key25": "3ym1jHpN3ytxf7sLHvk9FJzfcEEsYPKvFCSXevgWRDHSjpdcp7WcanNBMnA8t77aXPXPeF8Tw4bWXYDUG6tXeVXH",
  "key26": "3Mm2B54pDJF5o1ittMGRTXp4m7B89az1S3FbxeE7Gfd656FAur4E1pwH22rk2qEJCsicEgQHWQS1QWfBHiSAzXoB",
  "key27": "55vGzyQF69DUUHV4ZQGjRZBxZEUvJfkuVRk75sZRwNhFPTXhpMaYyqL9PjzeVainJyLG1WJ2szFc874mdi9eEz3C",
  "key28": "4YA7jmB2NGwMwg3UGBDArCmHBoXGiqcjsZ2t2TqNG5HBQ36TuBzFhVHxzna4f2pWMK1jGdCZQroK1pBwtXM4B1Wn",
  "key29": "2NoR7cXTmteCqp2m71XhNQ2LpF8QNFbmYJKBn3ZQVc9zQChuuj9CoGpyjkZW6zCzsZ7xLD4qrzkiajTx7Tj7YWPS",
  "key30": "3uWNnzNYkhMvKfZsduqaLDGySihV6RFN6jaN1mbxQxFN1YcXrStCSL8UaSroTTCdD2ghAWQLQb8fXNy7ww9vpRnw",
  "key31": "3vnK95vpVdvmyAyjPXtYnujgLfJZi9N1mG5qaNi4seJ3w1Fji32sELKTJ4r17ksCmrcHfAHW1hqEHvRe8eRBBpA4"
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
