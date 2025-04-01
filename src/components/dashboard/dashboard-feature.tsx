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
    "3ddUfCAnpiu4TE44Q9pi2rmtvP7gZJ6fc4i2zN8d276WGcHMSrL3XfgQ9ya6aKmwhSCMdQXFUNzpSeZcbJy48zwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cE6eb2nRhEEQim5iuWgYtcLypQgxdZt2BjcodzCA9CoR1XP8q9cTha7CrLtkBUCeqDd7QSwTWsKosg8tLL8ohjL",
  "key1": "4GxagNQMWGwaNCy2QgKq3nHdukhQgyc5fYBTdLDtFwrrsbT6uqUnUEGgSg42sAYf2X9iz9RHJks4JKqLRJ1WojSF",
  "key2": "3it74ykRxEQXJUaZ5HULyy75GfmyvLqq3RuJMybzGFYv6UP5i6QSzyx1AfmiMNrhemBftyr996Vru3iA4k1HPJvW",
  "key3": "5UXJYyNYxK2BKRZSjNLscoHSSvb6CtMJ5dWKoJB4JDhuT3wBcsXp17UBSwyUCYBXpUZ6iWDgVKceixoq2vRbu7mM",
  "key4": "3sN1TQRp2AATgzBoVbv4TjF2GNxh18MU2HPFR2qAwr9LfmUrBgRxMaAa4DnnYAgzMyqnDV9HUfUPegWNWwDVLhWn",
  "key5": "48ZahznevuePfzLt4twx7KcwQWsnYdV3LgWyPiz3LzeontVuWiDAbteBMLkeXf8XqLLzWCckMfNzMChEzbNyuP6G",
  "key6": "2c2XwRjTUe2RLhfWVQhMsDaiAB7q56WdiT7fE9QXcDu2god5hYRXtnFJ4oB3XBnvyDpakcxMYUs1Kien1JDCkHXN",
  "key7": "4uT452dNjuL2iN3RhGZXodErgk3xQhhguzLGLo4U73hAHMEcezY1pwmyHMKcrS8X4BSw6RgTyrScW6tUVUcc9xah",
  "key8": "yxSdxTY9YqvoxPFhrnakXfeM3LZkpFmK2AGJnHLv1cp1nEdH9C2N9Mj4kpAipAEuyZcgt6V6ARxh9VCytXRmQxG",
  "key9": "3yxAdbVbXcZKtEuHPyMjExkyiyB3kBkWFZ9uhLaq8wfBBLunADCJhybbYVb1xRwcYLAPa6t9AQBr651CQknvjjmU",
  "key10": "51pKAd1agLUPBwEqkaL45dj7FdfwGKbbjMoiNS22p4yBiw535tyPBUsU6XAKVzqJkxp7AG19TBz7mJDuck1zmPTQ",
  "key11": "X71t1anBMwD4knjtVBrpw1YQ2qSPeQ7cYUk5X33afmMAHKTvRBizWHpSo56GCPSu6i9SqzFq5B3rXMY6fzznSB4",
  "key12": "3CQ8i3QDp7pZJYjX2Y74Y11X2joCHRja7mr5tgccLmZehJ49fG8MKs8ht1r2ryKJmreSJW2We5UeCrUmSbN59kPZ",
  "key13": "FHkw6fYnKnrD8669TEfLSQ3VySj4pfXNBhfq5fcfdCZrS4CTdpJvGxg64yZXPcmcY1VTv4EcjsmS8ob8swZ51hx",
  "key14": "61vUnqzA6qRsCGFwGTFMzaSZLuNe3xJKgqquVRwvDHEemKQqQPC9o7eLNCH74KSuXeSMg5WeWEWQM5CTPS3mb921",
  "key15": "2MMWC3y65EYAo2G7xS6xC2VqMKzLPPiS1rrn6dpJjrLoeUqK3vEtuDedYPqTiSQbnHc9vbHE817vsFsGHfUeTAHa",
  "key16": "24nr7XUXBZb5jDM2BW8JRAzD8ny7pZD8DBPof3akMcNAt7Nucxjxn6PNiJU8fqPRWYivmWGSSiCwP3ZXfipi1BUH",
  "key17": "2v6SJHroXn3HGdLJku46ihpceGikA2wyA12CqfA9MABu21seZkhL42TFEqKYqcwrBFudgwxXX1xtoYtskzEAtQbo",
  "key18": "4m6wfH58cmXDQCpxLn7d4HxvNLJF4zaYQNcKQ9whYoKsDacQPvw7VfqBTsM9p99dgDDd9z4e3YiBMpY97JR6aKZu",
  "key19": "jrmLRPjPi6qoYGgi9Gh1fjz94CpxDDNMzyZMJvEFfRzK6mxBDADQDReq8wJgJUqik8ftw7QppM5itWw9WHZyUNd",
  "key20": "34t4BSajW4J3GK33CioenQFqWMkFqxcLqmpdu947po8tobMdTjWb8jdhgw1vvMRPTBKYo6NZwzV8LznKDNAZogW5",
  "key21": "zsgW92JHqHhwCmuP2xEBLav89QeizFHtyWbqXUJwfUNYQugmKXZt6kerECVyXUCmSH6Hc48ZJj9DEH1vozNxUsr",
  "key22": "5A7b1CULzaBjbWiE53ThoiNniQZJUDfgQd1sPYZrnqsQ3rZ27aVpU6W3RcP2ufvyNRrq5gh96boERtuPUBRwJKLf",
  "key23": "4pU3ysuh3kjeMSQaVaXBfnnh8FrMDTq1ty1AwzCSARkdDHwaSV8VJakixcpnYqjD4QHXvyMNvoip6s2GLgSUyVjr",
  "key24": "5kReEgSYtrLUxUTxH66uGhBbMwcvi6VbsUbP2wK2HwhhEAuyBnvpAmzQDj6xTuxow8Qnff72KfvSFAeVJM6BrGQp",
  "key25": "5hUtjXjhefuxjxRxnkbg9GUAvMVpZVLZrTRRhyPxqkMgHsNq1QMm9eZjCNM39MKhxekJxa6PVUZGxzANyQb6jLoQ",
  "key26": "2nHjQtDEcnJYXQvYgJc37bkaqt8nrTDZsFNDvFT1JUG83KGWYMLG9V1MET4fwfV9SVPEiPSSwaSKXPyjA7tYmp3L",
  "key27": "4Pf17uZGxyLx94hz8dJV9yKYaeJWxrn5HCbx92h2HqWza36X17RTfQ16Bkn6CgmMi61mnNSLABssoQQbRs6WJuL8",
  "key28": "5pExWbPseqYxC8TKuDkYnYYCg8E6vApXosZdjbFnr8Qj9PambPsfZsgFD8s4BMh4jJtdUxogi5bRyH2LDS9ZqZuQ",
  "key29": "4nwQr3MZZgk4w7FBupj2sjpQBGurk5uv6CiDPVxugNQt3UGg4NCsWNa5N9QjUqzvMYsNYTrXZJoytcEaNmuU3zET"
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
