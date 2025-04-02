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
    "2k8Ut7kdkZaJS84MrRTXbGw21V6hKgJEXjZAxXdewpKCVzFrxEe8VM5J1NAFuN9J9WmNPVBf3h48Q2VYZT52cTnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29gvmLdyomkFEiCdBMzPX3Q1yn66WSAyfFfcNK9zCsV1LSKJb5ZHHQoSYRVASX7wuW4VFgWxsNxdCGwWuxR2zE2J",
  "key1": "avesTGsZMCeampMuoh7MT9ARPycNb7jz8nKCkQUD3AD6foGnWbSx32bA6BPTfz42H2wbKYMNb3Nu5KHFCfzMRZb",
  "key2": "2mbdKRN3NPJQ6163gfPZYVjj8jCggbaKoTkyxJj1i3tWH5KZen9pKieArYYdZBCg51H7PwGqsgrXBKksgbCRvxza",
  "key3": "ouSQSYV84BSLrbh88P8pUPysnTSRpt3i5pEqhj5Wod1PqXPgV5UaoqA1YV5U89mh5Cacm6mCiddsXLAYwFr3e5u",
  "key4": "3P7pNBVBBSnmxkccCKHrL2RQmwzyjbpt7TigWAF6NBdvf8PVA6FQhJxJwdJm1D6ngmqEBQpfYERD3XAfzaAr94mC",
  "key5": "3ZmhvmFgnvzRazjiMPTjmxtiPg31TGJhjJY9vbgphwDzpQUR87zx3NDzCLDCHtDAiYzxpCKqLYTrLQ4LDGWaEUPp",
  "key6": "3QxmhRZBzWG8SdkiXSLKn461ZfGR2fB92qERGuLCh2tGpoU1KYxUQZwZTgP73LDLcLdwjGS5mUJyTxskmNQt1wmn",
  "key7": "5RiAtXXH1uwhVKP1AosuVBPu5JhBuc1vFvynxHzY4kh7GY64byyXFF1JV1XnV1ULRK52QVHU5Ww3zBeUvnWSgMk5",
  "key8": "2rRBEwZrAEhKkwBprdXAtMkNh3tfW88UbpSUE4M7mtQUcdw5suYNBuQtK6SDf1nHh25cxVoVY7M2vWke3AdAXQL2",
  "key9": "2gyaWTeYoJLjQB9d6pu8XSesKvhwn3MhQdTAfLEbdVMrNp6jegWhY8dnUorzHvTa6jA3tyLBKssh9VKy6kP2URvn",
  "key10": "4DyvjmsR5RjnzCcpV5rbSwohcSmTnhT2SoYowPhSftJeuARtczb7URMbJpxj8s9oTFgzQpJxwSEYq1b9gaxBnQF8",
  "key11": "3AhN3NhiFSfoDLHD6shVS2yeFfX15a3PhHzYvszQ8X8MVs7kMgWZ4jtLZkbvaveC5dE7HM6j9DBfCoVpjA17oHkJ",
  "key12": "59C58acdLckExrd5SmN7verxMVDekSUCNDXcndf3Dm6PPQMppaCFnrdK8NCH6U5Spum2xa3hdQ7q2oY6HarjupA7",
  "key13": "qDodvoPBj2QPqi9SvsUKE8ZzSQNu2Mfz7AswRLR2rfiowPwRvPpARBru2ucFM6QesRysqvdsHDM16G5c88cW8PG",
  "key14": "5BXUJKtkyUSQisrrriqisYZTTkBw1jcxtZy9vxtLWC8X9kw1YcwnsdUFSTKEAuLmubTsjMCEk14bASkfdn9Yc2mE",
  "key15": "ryfzMzBiMBgL5m33SeMHeooxvUcKkcYqHpwp3JDcR6TmegzZdWnYFBAGcG7d6kFrRdhqJCa5HhhF8M2epaGLnuz",
  "key16": "4a3vydPKeSSkC3J2T17WJx8t95WfzU7xtQhyKtVNUPXJ5ZS9SZtGxnU28DK1aVUJCQbrAjBboaLftWhDwSEj1TvW",
  "key17": "2eRnMtXXLRh1Pw15RfoZTvY2VGYAon7fM8Axu4fBjFTTBJc8NRdhdkxdC8EC9Luf2Q2aQ1oafFQeYvsrdcmHg2GM",
  "key18": "27Z6dW2zZGoS1TqWVHKb57LbSdZYbuPjeo3VWArzhcHqra5woNxdsb1VutydNSLWKYYfibQpqD6xN3vxuLPk3Hhe",
  "key19": "9Z4FWwQyNcr9YTiM9z6PMAQCYXJBJhovZf37rPR7syj1jznKdUfn75TmsjxF7VKTKnPe61QZu5gApmEc2jvTHbK",
  "key20": "Rk6gPJ917fV6cskGZr6FW7uoSyq3BeYQNWnHMvA2VCPKhD1PvMw7vWoxWRwXnMPNv7jnGzyPy1TcHGK82nnhpVC",
  "key21": "5HavRiiRq7uYPFN2voznFWU1k6ynnEEZvMftYqcF9J7r2yC7VaRmzb9VSM4A11qmic3TaKcfWvTr7PeX38czJohv",
  "key22": "2KMtFpw1JnvaBJNBx5fYfwsrKHzXMvRArP172TQ4SCeXCvsM9tLfcLfdyghmTgGrG1UPu6Ubc9fGcJXsvMfnQzwL",
  "key23": "5mXUgfees5QdbU5PgxARUPLtRr1BawXSHX13dcsUqCm6jrdbdRoGKgtH6KfrgWzguRnw27ggaxLiUrGbrD9k4WJt",
  "key24": "5YcBiV3KN1dnzsAabhog251JwunQxLUi2bnMCqhQMFJGcAKfUSuXFsYQkg6ooTubp9QUMwqV5ymPTbwsA5B4Jzjp",
  "key25": "jUfJANwf56sTBB8vVZuvGZoJEx9r2hw9R953x474efT3Kst8tDijYcHRKB4WrXYBNyX6kXS2XVzt6nenFZheCje",
  "key26": "3cabfooczpCRv5wZ7RGUe5AbeaqzURbJvHF7XvfVZ2dGtXP7XxZx5FvEFX7RceQ7oogMmFm7nNx5SBi937JMvJ4e",
  "key27": "wuEWXFSm3yAEwK54aQsp7U7JVBahJSLW14SBh5fngV26sxCbLtZpx1HcymHaYvyLg5Buu7aWdDj5Fvf34fT7ned",
  "key28": "3iN1ExW8E3WZPk8hxj1nhD5k9bDf8daMdNTcXAggUwDJptxJaSH78g9EAWb1QmiUb9gFKQM8oM33Wmj2wY3JtZTs",
  "key29": "2m5Ru2saFpXbQ7m957nHRKigKVweJLD9YbPYsWjEnmxC92xBYkeHGvkHHCcLuJzJtYEiiiRu6eYufe1rS27JTsiv",
  "key30": "7nWffU84JHaqsSazAgM2LD9LUA6iz9g3DwkuczavSnyZiiSdGExn1js2dtfS3Azmt4kxFaBSgiksJikZb1oHhG9",
  "key31": "4iFpqaxpoGLoT97CKzC7rydaSebPn7ZKJeowXKkJbqUgB3fiTQGaWwBBKKckwgy1VqvkzKhmsZfPQkdwgXnD7tqG",
  "key32": "2opg7vCdWSKRy3AsLRGGye1QRZf2fsQN8FL72aRzQo3Gjz4XA6mbJTsB4YQ9evGq1jZtYydjnNLUDBwGcD4kbCxy"
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
