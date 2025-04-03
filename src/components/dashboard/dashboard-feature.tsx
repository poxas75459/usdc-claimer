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
    "2LeRpfg4NFESALJnZvoTqKtAuQb5uujbJ69M8e7pf5vSq9a9woJkicNHLw5bAW9qeCXijUd5g4dSLTZYA16zuzfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "521vP2VXjzDkg5M5XbgvucggKzev2MjqWTuu8Z5Ea2i5FrqjEi57HfW7XzUJ31Gv7oaEBM2dHS6oSp9vouoppqmq",
  "key1": "jHD5QqQUxCCpruNGiz2F3WeTnyCUBMciyUrCsy3zscx7fKoJMUVAET6d61SmfnKMsdmus7w2SQ9Maeoqq733qLu",
  "key2": "5M64vnqmshC5yXhe83fuvekJg6UemYLPZN14oGNtmidWCiPQs3vspDzjB81Ko8riMryeSLPrZ5JmXQJbGe3maVgs",
  "key3": "3pY5S3A9PMGzZuHKBuyN9EpzdMvQCWxppMURM5Kz2WjKHvtT9bMmKTGBSy6Yv2CDtQPZYS3cF56HmzjBmLkv8NZb",
  "key4": "5vaj3iVtoVdEuB9BfphYWmpqH3gEdBScRPUb2vEjjJiDh5QU2mMpYUzRq4EcRzHcSBfmjKe1WUgzHuwSukH4gAL5",
  "key5": "3hZoUXLg1m1m9sJHnThgzuPjLbF63NQKpnyn8NAQBkjYarKgUocG5pGny9QA6UVNTtEUuTMKTqsjkJBiTB8M1W4k",
  "key6": "3LKppsczqBf74yKsmUoDMsxHSruUuvMzn6a2NuZbkeZeBN3YohxFSv4PW1okZQdAqTn7CTQQXiuzxQ6fvkLpYMHs",
  "key7": "2wrKx6n9Gf4jfaKmHP7qfy6dcame8cHV4kb2gfKbhe3K4E3EzMW6turRDXEW4cKq3ijpwjwEb6x5dsLEFnz4da3c",
  "key8": "hpg5AmVHfv8E4bNYMebbWTPPoEy141zqYMNn3XBXxLnubUm9i2KWvdGUiSnrr6tFSTczbb9GV1g1ZCHcW7NwUNN",
  "key9": "4vjkDf1KCEvjcbuzh6EQA765ZQ7EKtMGdgku1owrYDZutzTfmNScaKr8Lm2WfgGTHzPdWug2cScwQGbke63n17Gx",
  "key10": "2inHxhxDJUdmdM2kfWPG5WmHV2k8v6igYGJSuZE1pt4NEurgyqZgYoa2bqLQRbwwUZ2De5grCDPnketqHse2rQQM",
  "key11": "5Uk2Xf9KJJeZfyiq7o2MNuufk3okmS5fiBtnzyEaNCTSY7np2W2VXxc78K4zmEJSzDsiGceD64hwNXog6npCoFnt",
  "key12": "2pcgoUSb1aRqaCN3L5vMfcpQVUydzLYodGfytm4MfNJ1dcJqnTKEcU8bwBu2zwktWVHnLhEjwVCWAYRftNwHT37S",
  "key13": "2h48MTGUi4ZoiZm326c5fjaysqX8LPh2GURcqUY4YmQn2Sjua3qXZggcb2xR1ZuENnxUnx8HM89PoKuD48TbSo6A",
  "key14": "357JoeMoxsHuCGggYFaRQMzYiN8cTBtnmsPbLs6dXvNFg5bFM33pPGXG5XNGNsibYvAxBGnpqNMduWomPpSwmCGb",
  "key15": "41XvYEe2YQcNNNpbyPRWgixArdV99LdX5JvDX7zrraNEzZT64CkT8GH5wcRyjWjoBcF1u5bbdQXxBuX7pzBDCasS",
  "key16": "5tT7xWwq6GJBKewATZDxcj4yLnZzHi7Uzhwiy86TNHqPututpAVUPBvKg56KpDWS4Xd2SU7qd6txpZPvzY5CG4mP",
  "key17": "66b3sHzkMQxvHM1JTvbtDvGfEfJwLPHn5oESwt7GtXnMF2p36ejttodsZikjgEumEQLX2CR9vRXvzpuDHvBg8jhe",
  "key18": "36GoSmjM3GMY6p2rkeLQiuMFPqGVKdXYnP8zTtTD8jZhwutWb9UxNQQJmoAzRD5rrjgmEHrRArGjR3uxjFzoQLo3",
  "key19": "53oVbZ84QC8HrKdvs5TtC8EoK1NKB9tNpmfiHYVxSRdoKekjNAjAk3tT6QSsck44BYRk8bGYnZq5vd8LJLBJTk9E",
  "key20": "4enLJXi1qZhzwLeB14t3honuyghedJJv2U7XMDUpdTo7gpJoCKJxqUsvbVUXeT7SuhDL2uC1qjAMh61NgBBt7Ho3",
  "key21": "3Hqbo4MJ3k2D5T7c9QfHH9wRE9X3hRKuxtzCH3Q4ttGNWBytNmX516UUfAKUL38216Z5S7KChhsTFjo7psuJBJiQ",
  "key22": "XBCdBiSjcccJivjJeHKvSZC7WYLhNPowFMGqQY6DDhs76BxkV76XjBrwYuwCcUdt9ECptzBiZUuCWkqSnu5Udrj",
  "key23": "3EomSbonmgvLiRyYgSKTGC8yLoRLtLuwU9iVZnNyHD7xr8rHCH87b2MnRPcfEV2KJSdaBSyfRFLYZ5V8mSLgfXAr",
  "key24": "SdcXKzrxZzhFYjzXcXskVGe88mhiDogwnEAfqZqWqb68AUs54nDcQnqHKVMzEtKMjYDWckqvuL542RWBNPE9q8o",
  "key25": "eBq6aEoaKfjbGUh3QRDhxB77cCVwKrxbsYCh2Di67ciBsptVoVgNnRNtvkg2xJtLV3qqr5KDSZwgdnsrN68vpBJ",
  "key26": "21o3pyGPpxpNLe5p8P6bTWKrmCAjskypgPA9HEVHR2uSbkigaKZPeqwiz6eJXGgLDAnQZh5bDB5hRNw9tWgcFoT1",
  "key27": "32ZgRmYAsBEkdaAYSPsiEa4VtrsVvQsDfK7bfGmAQmhc8cx7ztBCuX5wCrfSxwYUiCJVPoLGEXE3VVP9rfSc5Koq",
  "key28": "3avPqGivaHATWf9PfihAz2pHsmMKoEoAwisbZXq8WfLxySkc51skdPzFBBifTSYQf6dGFW21HKFuuJvrPQkyhAmr",
  "key29": "3KorUHFyixJM2hh4NeM7YQbanM2SYG8VPuEMekGf1V9C7R9EN84xfY5K8Q6STEg27uMsp4tYswQ6RLseq9QU21zH",
  "key30": "3XJNDsE1zj6w2cW4DoWVJSEGbvtL5dwJxizqxpLN4MWcQDcZz7sD96a3bN59DrtX86jhyz62nmGrzn9FyqLCdj1s",
  "key31": "2FUfBWHg3YV8zyUztWFHp7qPkwhGAFWbhbXosEAYwGzUpGvEc8mEf7jmokqpQSYxuRJzxQRKTWgBf2rMFZ5Z3S6f"
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
