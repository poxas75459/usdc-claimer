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
    "3yzTW95LmC2WicLGXNrQ56xDJTEeJV3CnkHrAP6CoNmwZZs7jNkMGeEK9MaMqJgjD89gbTDpFx4Y3yr3wqNvc5nA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pvM1BahniAAvY54YfxbAx6v6hYXBCoTMZZVoKpTYRePQWnLkA4UDbWWmfvnS4HvzWbWnpDMzoU5TB7sXRdZYARh",
  "key1": "4M9GWvnnzfcibRP6LTxMFCaxHMy6o5v2XDGBJaTd6eJqN1H97qZ1ZFDvbpmPp16Wcn48jLbSoWC6rDoi6hPskW1T",
  "key2": "6wqECa7Kr2wNuz6LURUekcuoppRUzQNs5JwJr1Lkd5fXcL5DLadgsihMoiNM7ivtfsm17DkRjZkK6VzyaNMJ1fw",
  "key3": "eQ67j3rXHAWBn9BbKSKtTFW8R1kxFZ191obDnYJentid5tZ4uo7gsKjKLQqnJFowiXTVPqe8npWMDcSzST6GJTX",
  "key4": "j5DqB1oKAdea2eMGmkGTt5N9Frdv6ZV451MVcKoP1c7U4Pk7ASkgzjukTF4pLEzqzJkUgaenz8syDpCWLoxJzS2",
  "key5": "469fNREu7ER7WT8jfCZ3i4KYAYaJx7yPwTzsVzWrDsL3JPq2DjGZi7U5gvuxX5CvuZonCWWWPiobxCkQSFaWzVMu",
  "key6": "32Mfswg1jBhw6QT7NFkeBoLisyEV5vt8AQzuEbY1vTqDrf8yiLMxi5yLTB9eNGE5N862yfRQgZCbZZvj1sfTX4Fi",
  "key7": "2n7MTHD272u6TVxJCmksv9H7Vt9UeXwsTkCLPmtXsSKf7HpGwbMyVsmGSRDn8QGEquHvfGYESLcJKqn6wCfCJ2ua",
  "key8": "32fBJXeKNio4LeDBnjiriBhjt4sYEY2m6SG3MDTHeGB8tjcezNnYx6V94j9HJW3ZXqxaB6XWzdcFyUmR5FHrfo7P",
  "key9": "66PJGp9HeKEkSpaN3P4UGniRdnfXcn7Wx7V78QkHUrxHcCEhmn2jQ3o31J27dSNj5o1ZgUXT4Rz5FUdDozTcDE5i",
  "key10": "5RpqxBTdiFmPLLke6i45cCozaNzvgozN7ARQ7DtYuDuEE3SmyunM1WX41iT4hCNm6K8eq6g8JLnnjzJfjvFh8Xis",
  "key11": "5m5uZE2B4eM8C5rpXyxhRLwZD4QSzjVkL2HPa8fqzwcBvLvyRNPXoiwXLnxJwCaL9RLuV6DV21uqSnbMnMKmXGSK",
  "key12": "41cMzwfvT33c2VCxp7K3rkpEQKvewcDQrkZLpuK2HJ1CMxzMvU8LYJ11HeEjXEoarN5nvijjKxkuMTDRcyRgS3QG",
  "key13": "Ux3WeUKtEwPeuGYEq1Q6nj8pqBTpTPWN4Gd12KsLCHH8NCAXDFsbjbT9nM8oR23p3cjKqkAJcVtoaKmRVLUKC2e",
  "key14": "5sSeRMzeuxVjreBdzWWvCjJTiyQTjwjqHcUUX7gWh5mizwhAHxoYVBrxzSk2pXJ74owrF8BTYMpPNdTuWuov7GnG",
  "key15": "4gAirhJGNkoxgUBMeW7YAWBqFwEec3gRmax5rQUxaaorCWVjoqsM4KeY4LNyU5kT7tqHTUmGuKCxd1ZEjU7RR2nX",
  "key16": "2Fd41PuthFUFVCkpKkJ9rwA76APRioXZEh5mo5wTMXWaTbnicyLwYJosXwETWUUaSvjRZ37QUBxfVeGZwfM6VgXp",
  "key17": "41J7n8Z7B2ALQRsxwQVumVv8pranXSy1U4f6gXV8DYxNnSadZhiETzDbS5jbCLc9uSwye3CqXq1XTbv1w7GNn3X",
  "key18": "3gGTKkYJAD8xFAeXHYHqhRTgQEnTVP98UixUco7MyVTascfyKM3bYDvPbG756XJ2zsDeQo4nxWCT73V7qatYj8iM",
  "key19": "4PoVvDqx6oS8ZDhyF3e29QJD84tuGdTjWaA64yS271VAFSfhGmxgfWxq3kNJPfU4V8CidHnYpjWL7kbHqJBd2hjP",
  "key20": "2RhzTBKYHjXuGPiYkdBU5gnC9sub34KdgZ6ya7xvTmHW7HzoerJMgHhZXaheYcfebBs9knFg1n2oZ6gxhunPRHTr",
  "key21": "5ew3JkHFyfp1ujjThSwYCtJFs8RuBXN3o7RjvvSzdSozXQ38AfbaBY3GZy9UiK2C72HtTqcqEZ48X7HgR1qSWG4H",
  "key22": "37maWDfRhCDVxqSpr3dPn5tq8Ebi8k29WYrB4zRTbfynRNDTQgtLz75Uv9hrSJf3bvFJ6nZcsTzDVnaAirTsRmqU",
  "key23": "4TQyezhFUj4YuXLbBxqnaTk9rv1aFkyuhxktow994YTa8GiEgbiasTF8ZaVQMzKuarGSMRYdvZ1vn2jVD92t9Pzk",
  "key24": "2KpCEJQ1EHKAU2hL7CGKp3nWecVhX36ywdCVqZH7ZcvUcALLZhGi7JhLTkitDLABTXNLmkRrJdRvLN3X91vtT8w4",
  "key25": "DS2NSUVRX4nDCsv4NWJ4VTxinWvJc3EE3ZhEFZRuKDNDtGmcowBXVq4FC3LvJ5Q6249koDwZT7XGvZ4ugEUif9F",
  "key26": "2Z58xhYJD5UY4pMPRHLY4NjEfDpCV3zWyBUcKTxDcmyZydmo3VUzkpvXXDw3T1o3sGCghr5LZk1XW6aSt5DsJzS5",
  "key27": "5XdnieajWbkZw5N6nAUTrRg8xbnMPJy41ShSeWYXTnxiWeNFHU5Q4mmEPH23gs6MY7MibVSHisRVgS9qFYKg1kQo",
  "key28": "3fQYqik6dWRm2aX3s1oFQee3cVxXZLz5mYV6NEJNn4HzizT7PFu7unUxhpM63ARhn4k7SP1Parrcpgz2xFtdrDzE",
  "key29": "2PreZavWa2pbxbH2Jex4C2bigD6JR4T6kmV7q32ernT3hqyigSuQpmTqdRjKEDvqZu5A7NVMW4Ki6gkHhxAtDsuN",
  "key30": "47tawWvbxv7M7aKtR6sgBFCR5Bb8HbjpvuyQfgAA34AJAvGUmudCHPcvKjKc8cfCWk3gdiMMeQDzK9kEboAX1PD8",
  "key31": "3uK8QuiaK2hyeGLBmGAsxQEkUXb71w5N4GnDnpQUQu6WsraGhx69zsvgnBwKNK6T46yJ9ug6ERRaZz3jVVLY5o4P",
  "key32": "Kd2C7vcri19n6k59uBdbNEhJRsHYsi53ubUbfbQtLPiWxNenFyznft1q2uNPmMydy1EqhTMcQxP2X99id2Fnf3C",
  "key33": "4c1WCuPDqpSGMde4FyUP1mRCdiX5UhFTEG8jm7FBunNicYKZFk1fdCpiuKCKFha6UPbeck2HHZmrnF3qq7RbWu63",
  "key34": "2YqkxhdJkaTKWaTMB1MxVhLsB33o1J9CfD3z9yScitzxPk7wBTnjDjSXQR2GskU9g54TNJ1dNYiTPGgmaXeLfSJv",
  "key35": "2n525u6b4sB5g3jaKT2VkKNdvYekqFoAfQkKa7Afiy57CC2zkQ8WRyUa51qnDTHaZU3DBHzZq9WU921akHNAokEP",
  "key36": "5rHDsMBwUfyCgDj9Z1ybYXSU1ghTM795jMRdQSjrexM8G7VNv61uQVeAXdnLwzd6UTFbRphp49V4aMfbxtw7KnCJ",
  "key37": "46GZ7oBnh8CxAYpbDV5DhmJA6dLx6wt5zX63KiehANyZjntJ8Z6aPdxBwQtx6fmSwZYDrYACKQTvP3A3iGtfsK73",
  "key38": "5uscGmy89HA2F3cSN5ffXxXqpJycEYCaaFBEGgNem6jj9w6XuLDCXQ1cMMhEQyYCSyVLEhbvraVEkXQHxjYsjmKB",
  "key39": "3EKQyiosZNW6BpcTM38Spw3My5MBBiXMaCQKCqPtdPLuBzoFDQ7RQqnqaSNvj29ezK4RjvPv1ZSMUX5vHrgLyGiY",
  "key40": "2LmebpMrAUNB5uonhtKkHcs1HHmGuCuaYseySb6kvUG7rEogVDmXjphsV4VbKHgMNwejCnLSNEmjPyGVPGh3QXUC",
  "key41": "4ZPWhTo238EharrVeiCLv8cQN4SnbWBJYVJFguSu2rycnxPzW3XTVrkyypQXR4ZMB11ESFVWzN93dRatxb7Hd531",
  "key42": "3nbxQgPm6MDcoediWdNwMb5UNxpGrKdq1rUt3QPWJZdavB1dUrWyQa54rEHdCwmX8kkkMPhUmbqNphwTk5EmFviY",
  "key43": "5nSjsVRXyTyc6EyJGsjBjinpXiook3wU2rcN1zh4FxhXguKrvfEU1xq19vW8YAr8dRMXEQXeg4hvgsGSozdqLu2o"
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
