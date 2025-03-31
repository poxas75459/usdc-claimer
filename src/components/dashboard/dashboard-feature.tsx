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
    "3jMr9ZaGEytVhEqcRyXrpFXRyBXe4SgzTYyBCftz6q7JkjGsN5wJELSKLkWvDqSWBwaJaeiSfzM7wCNmpBrsMnkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ur7oBN5hERABhb5jSZaXn7yEryXraiHkM5XUFjjNUQQoL2iSRVcAoxTM3caaxxgiJgP4CMpoErKDftNqQShwLEd",
  "key1": "4u1SSURoyhd5BpAmYTNyEe5GTzd43PhygZ2ZBLMyiZXcWe4vfsYoVtXAT5rEnxd2gqRwz4PbrxtqQ7ajhF3VD34H",
  "key2": "54f2MVV4hZaydFi3o4YDRtAeM2u5xU5RPNvzUvDuz6PEZ4U3c8cFt8HeZHVPnKiXikb4YcJr2wQLZQEj1arW5X2r",
  "key3": "49Qg4ijFM4uJQCNLUJgytRnwN5JFzL6riKxPz97Nzh1NwcXfs7SfkUMeiD8YGhFsUn5NeonN5MwoHZnkZMnCQ6W8",
  "key4": "5FYJ4zRfNhAQmShALgY8pJpwbcvb2pabLVPnz9jyaioVnfShUwNHFxjCXEeSUvBJuskNhQJvXS6mBWmsF6gf3o9B",
  "key5": "35oKiJZH2X8WvGCV29gEEyLZYvGUMJK4fGPqh6SEqmA2aLNeh82nahEPZW93c23QET5q4Qwsmxbra16j2iUoCawH",
  "key6": "5KuE27Rxv4THXYbqVyZ5DtAfQT6vP5u2X7YNurpXvwt6M4Pxkd6YtUV3ZCZaHH1RFwaaVz8GGbQDQ2pFZkZtDTNp",
  "key7": "4ibpwtKnnV3aqXpDxirTJeBtvz9s3fR5M4qQyoBAs4R52vJiTFCXi3uv5YNuu8JNrs2CaecbQqsJgTDPFo82HpPx",
  "key8": "592FQPaq1MrntqbCxBmVX3MdcyARxwkieU421WhuHowwdRdHQdQP4CdwQ1mSrKNtyBvHJWSwaxSik9qzA3A2xH6X",
  "key9": "3tAzetEAC1B4xPYWZy2cvXtX3FRJ7tZpVQXjqVnDrJ4gN5dtkkMENSuJab3XME1uAPCQggJLu5zrG71JtTpUUm3C",
  "key10": "1AMRTY4zS9MTV8QU47mbFuBKMix7JSs88nsVR4YM8XejFwc8dcDcm713SgDW1XHC2QNk2aqiapr1vQbpvcnqj9x",
  "key11": "2Vd1E99gcaPbrXJiJmaCiWfxtMkQ6qBUb8wvsrBK4DtniKRkDgkVjNNVDhyiHYXtX2TpMEoay7FeELec2T6jnNLY",
  "key12": "4F5zj1cNpKc38YhbdaPwHC6rEBRks1Pw7E1UjrUbK4d34LvDMAuMDKty6TkQ3hAYEbu2F4d2UGfiLFJvieE98zhy",
  "key13": "2aVMSWQzhoVypSfEH27CUdKN4hL63WKPacBXwQy7gB2gcLEqFTMmFBngzoyP6PHEpADJ9t6i3KHMnq9Vt7TdJxqs",
  "key14": "32oscjEFQEZFSsputGhr9QsVWfhtw85rcYoMCVxfETjadChVzAoZEbqssZh5tpjvwvp9bMXnApjA4S2yvYbe4YQQ",
  "key15": "4dHndLyd7n55E554nQkWTfHEieVgwUJ8nXSDnJgD1gJHm84rFtbkv4XqtJuzdvz4C6TLUkQupctN6mkoAdGH2UdY",
  "key16": "dEASnrAY5YsLNeWHiQVmWem91uCq469h5FUYW56pntHPAjMtq2RbFBv3a1bqwrsncv5kVJWNmoUkm3RGVgpcf9Q",
  "key17": "43sYrppre62cZ5vE5jDntKGbTKcHP7V9voMbphp5iFSnYAcTUa9HzmFPvp8XuhZJfp1mv6VB15NVfKrPmSaoTzzS",
  "key18": "66TpbptnY2t7jD9vJE6f1cWfCeXaEogfCP2NGsDzTU63L4d7iF13s73WSpEqNJG6iiwLTmmWXLQd8kAyLhfAMNqG",
  "key19": "2291MSv974ssqsrCaKj59qV8qU7nsm1w6it4Y8XHUKCVgMXuVHDnxVG18hvnhNmtRzNWeB9uzdUWWqUJhZAEXUU5",
  "key20": "3aCiUxWFtXCSyuvRyPWizS3rvUN6o2eoBAtykh1SbStatDPQEYH1F9Am8TXCrNuTfZ5ULGJJNtzdHxDwi3A69H5W",
  "key21": "4vxztKyZbUAWfyZh5JfpjJih5Q3zCK3vW1T2yT1aNUYtAWhnnw3vysuZtBeYHkfkDxoTsyMrchTYnBT2sGMGWzsr",
  "key22": "xU8Wvranw94YhWdRupAK8CTVHLZbFMmpowgtBFJEASpa3EF1D5zZdbpS1pSWkJGQmvVx1mUM7yEHzabct1a1m3y",
  "key23": "3MN2dh1tAaYq6SeWBi6w9f5ob2QU1JAfRtYgjKP4bfVUbEeeieKBqjpJ1eevNS8mt5LUeF5Eg9hVY9q6uuUWgak2",
  "key24": "3LruhJkrQjYPpWzgi6jHoD9xSC5tWxexm9vs3HMiVzKRMk4jbPWcdrNDF1DzVELdFdDoVzy6nD2raLrvJgLsTF9C",
  "key25": "3PNQH2cz2gSHgkc3ccKtGRJGfDzBWAJvQdRafaxnXFjH777M77itexA4EdPvLk9LnGoyUQEXqnXfYPV7a9sNtRe9",
  "key26": "5ycVGGVZeYdWMcryKtkYWHkZJtpGvLdPTxg6hUeczsAjpJa3E7W6ti6WcpCqB9r7j5yYM9phFcWhLMFmQbQxrXJN",
  "key27": "44NJjwGD2mRUVHq16dcgvbFvieuXkc1YiFwKqCkCU6gxHYLPMNoGvcpXywUJbUZdC2n7kf266mtu2B9NuNnSnCa4",
  "key28": "2W8Y3G1tauqDTGrszQYvFMuDcvv4c3T92bTLVE8h5nqkTAsxHc8PDEVsm8vy7rWVXpUefeJNJjfRDp2Hh9XByW89",
  "key29": "ytRWYrNkXMMv5uQj5Eww85DhpfG7Cw6XqdXMi345iNf5bhVufdYrhkc2qKonS8wUVww4AwcFEa4kbLGE2NTtwbH",
  "key30": "5HmJBEM43mX5aKAfNBHTDhkiknY2uLfJ3oDZXDijpUTK8yXHMeSWkcUFdPtBHsUT1DEF2HWh2rStpH67hfCjiJJ1",
  "key31": "23a6DuH2TpH64FZrTVWdcgU2xWduAAMvHQyUGceCXYe54M3pHkrXV21KuiVYYmj2DubnBJyUoy5vcnX9HdV1DNN9",
  "key32": "4ggSAEgRebVBopyDPkBpPWspXNWPGgLGVTp7g5Apw8dVwUTmUBEUEoJArvRtiRToXT55Jqs1NnZSQL5Awdy5rNRN",
  "key33": "3YV7kay9BTCaX9EApfa4SbxpTcLWiPYMhvXK6XHTKkKiktxhxfx9uTYZLHia3TUvtCvWjcJpuFqn6pmt1D531kD6",
  "key34": "5ySv5QE8z8fZKXJ7eZaaaJmWfHzs5R4HzUHwvr74XgHvKdiA6gnjrmfC4de5Z5FbTm3GwS6a3sG7DJyqZHyXUzJs",
  "key35": "2NKbhBWx53roz2DZWo5L9EYGztsWn7SGCpu5sbVHdigqU7s89yFfEiRhFphvr26dJzhhga9u81fU9rKuuQJvk9pC",
  "key36": "H9L75xbkpzRzF4Et67CrfeprMPLsPPvepi5KZzGF5kcozD9BouXfcu3DnUcroogQPzocCtFwyRJ4EfxeMoZj4Ug",
  "key37": "4MiGc82kzRp7kwbrpWexNmCh5p2ZbmWaNsnZtqZ5UdXzJiaso7G2EmcrcbzQqjTMDzkyJziqYw85KGDG6wtjGQPf",
  "key38": "4kPazf4WvHwSoVFi8LXvmqWWwJYjUDBuixskvrJioiH8HYNubLZpSUSJ7pxiK5RyMJqCh8uZ9Qjn2HYRULmBgVQr",
  "key39": "3GtD7fpFQ62g1DjZbCx6aK3Ee5ijigkoJHRDESvv6gJ6oMwzSDZJMbVzvp5uditZekr8mqMmQY9EJBpJ5hTS1qhu",
  "key40": "5gHC5MSVcbQKMEG9MQas3HHg7WZq5WCefFPsz8G3sfVx7oQgoWMrziipjT9Z3xJb1nQ8KwBnonpgi3YQL4fre2u8",
  "key41": "Vj6HRjN85i7NuSuvu1QY3mngt3aaHAWrR3KNECMBVcVCpDJ6TRnYywbR1jpoCiv7RPEbTWmYjPCaT3GEmjUktBa",
  "key42": "5FE5TEgp4heaWXrH7ctWQah9EvMKgCQuGVfACg8TcHydCqHU7B7jm85MDU6nW8g2if43N1yLbwDcVuo7LmNkARUa",
  "key43": "DnSvSXzxqL2oACKBMd6Vtdsu7Uonbz7TZLvqynZqMyDmcmZYWzLu8T7baLhRXJCrRWcCt9FqLvVqoRQBURCFbeD"
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
