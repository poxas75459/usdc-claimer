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
    "1jyXzTxMsf2sHrVfbCMyJjk21UVPs6BprDshbp9AWFRkLrFLvPYTqEGahoSANKJUMaFoo6Xz3CJU8gtUEGoW6Mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oNhm5GQuVch3c5gYgXacFT12yKLKttjtmrS6uHBUoSGTXHxxhcc1baoP5atcwsTpqUGFZXLPC4d9TVfd5HqzRMb",
  "key1": "37wxL2rTqswVYsktWPvJt2Wi3iqXwLnhkL6eYbyBMy9tXU4Y2RfFWP8qoKvdbasGnj82QToEWz4eHDGwgMihdsta",
  "key2": "4pao6nGR4nNakwY7MnWAomDz62bggnrDrWyajU979YonPyu9RsRd4wQJsAoaqXPFdi3cbJiXB8tdsLjb1U3wtQpd",
  "key3": "635F3ZWdKKRgwiyDxFNx9EvicReLzKaJFvCNpAG2Rpo33kSsEAxx9MiSvspmwPC8SSPrCop5MXxUYAnuviadCZzM",
  "key4": "21AhmB7FKH63WUr4BQsEkiVErXaiMcJPcQY5UKpdJC6WvWXKt3eTd87YGLK4obPNGKRmrNhocN4CfDJkxWQPHAdi",
  "key5": "2mqaMpTTFtaoKPsEb5zZQ4N858AVBi6udVWbn1qaA9tkHXKhjcqqmwdNsPCH7SC2zJcYjL3DRSVRa1qf8orwRadK",
  "key6": "2wVVhnGk5kv53WaUAnt7x3rJCAHPigv4XL6n6qhknRB6dVxbBLh8ceNpmjxXSZwnhn9JWtWYuuKvvwVH1Q5P9tV7",
  "key7": "2jQcqCWNaKkfzH6RMASxFmK2KwAXGAB3Zi2BgcFPEwQ1r58HBwjk8WfHtUbgzuKKqoZQCQ8DvTPWiaDEth3uEhZ",
  "key8": "3RbbLZs55dQmp5atQc3MTfuExzpH3r5hkatfcuN4qzRF7h2hgk8ACfZvQ4ZDX12uYKYEMpnpMbHXmboFySpxrgot",
  "key9": "21o66frkG91hhYdGvMKSLDqvCndTNUZ5EKdNh8ZWiTfsh88BLZK9wVUQamAFoULkFJUMbForsXKwPCc7kpVtoq62",
  "key10": "5HVLqdbcDvm8VuzqM4mPG9Zm8YLmrkfBkp2z5dWvu4BWeuHkENJigsfYphwcr3AhUW2eaJwEhtvufZ1HNH1bpQwf",
  "key11": "PqFiVdsy7H8LSkKXvvrVuEBmKExVf4QWswh65DyGdP7XoCG12MWs89Mpp5KxFBsLP5ax5v5uThZKyj29VG2AQAk",
  "key12": "2EbzCPr2EyAb8TeDiw6fcCVScyFBwYTNMzjzFABhfgFaSruJxircXCbb2fLVCFuAYZE2pTgVXVtLAxZFzt1qd1KJ",
  "key13": "571rNt1AvzxbKoVfNQAnTAJGZCat6mjRCGakriQ9jCWtZFTY2SiKqEfhd1tYb4wzFAFmHe3PUbYg4vnCjCF7qnxd",
  "key14": "2m7euNf8Fcq5J6zyjbWG2fYUrxvip9TERNMoD9hHy9srHk6m2KQ4CN9y1eTwtJRiZHGk75Vw9pjAsaVifG4zLuxN",
  "key15": "4yWZ2b69YKQLrBR36kZ4AJgkT17ecZCrSASjLxibk8tfTqp9254eUfFiZYY9C2Sroj8FJmU119RS41GeY4tCqt1j",
  "key16": "jH7bi5RBKW4X2wLiejdSamRmq4jxUGpXVjk3hjkQhgJRez6srnnLfy3iBu6pv4u7Geg9roNQRutSqwLBpEvZ2zU",
  "key17": "5dV2YsMWuJybgD8RJoK2YirWajfB66veZocZTtbtuxH8TMGv8PdW2dJ9cbYGqUdVDGXfikphNeKNqSq1MungxccH",
  "key18": "28zRcvAGN3WzVCTq9NMidVWr38kbRHGvpWef2eyQj95wit6fjZVam18EALHqaRsDoQeDBvNgyDg18FMS6Be8dWAy",
  "key19": "fFLbufrzYN9d2ubsLNKEKnMfvyVDC58mFV2vfeGZZkWDaEfgvCHCAW8iFfiGZ93DSBAd9Jghq9ZddmAnETx3TXT",
  "key20": "577dBfa3TMSXRuWmxz6Ni3NboB72faqt7vf5PiAydH48PuACDqmgKj2vGxtGeJtF36ctCwebx3xZezEmGJHWPrPt",
  "key21": "2vEabnTQQumvgAxWg2Aa2eViaxYw8wRhqzeKHhXGYNT3C482oV5qNqQBXARZ5oxemKRzogSaQoPv85RNnjUsVUJQ",
  "key22": "V8sDMfsTdFsuGqEnSrw5VPeZWSc5GpQT92mVAp5FLuRFSQSCMwcYqCWoq14g2tze8xujrUGFAHtdts6eSGCyrPA",
  "key23": "5KqtkNVfiuE5cjUWGtMepvLVhebs4idrsZJATw6uubd5noup3kaxqnWSzkBCAfxBkNUn4Qpy69fFgYTsRoDn9xYy",
  "key24": "54S355g8dGMZMQaSbYhGjQRDDMqXxm314Bsxqq7MM64jnrAxw2eKJhpYp1d4ppi9YCXtxri7TN545qjeBbX9Hn78",
  "key25": "4M9uw3ZUJQpJmem3KZpRKVbPSxPVru8LMMNNZQiDfphajHsWRsEtfXrkbGYyf6avyfL75DdfQFzfPsXNqUwncsTW",
  "key26": "5JyJUn8kgSRo75DyaafgFNCgn257pxXqVVf8ifZAGBE8Qt3uATWVN93ZD6vgUBhfy6U4mVTyEnmcDiX41bfTXJax",
  "key27": "2YiJjRs1anYcktXLaa7zU3CtzPqT5Sv7K6RX4BMTA6wP6pyvajVHgq7mQFMVnJhnD3d9QBEmwtC2JsLE3SjGHBb5"
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
