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
    "5R9hrrp7GcrpKY6GuCW8xd3HfBzNosYkqsoZq98BCKWxjMRuPed42UmWkCR1iJNKm6okySKhBvxsezHyekmYAnCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GegAq51nuZmiN4qXEvu4c3ZFtJwHQaJxzvSrGCX9ze8krTeJum2FU9gngtkDbM7RV7kSUZaKyCT3cKBez2fXn9J",
  "key1": "3T8pgMQ16MyDgD2BoVo92cXyC8DNbHP7ayizKgSP851XZ57bvwogqSdidCNoV4MMSt9nbUtU8tLLQeb8uqebmRDB",
  "key2": "y8HJ8W7ChLd1GnAMcwgpEmkGxDLYuzEGSTXPtGorTqrHHnZa54U3FXkKnnknFZxYzatb9RPEb5AYZ5RyXYofvL4",
  "key3": "3YgrjKPNMNfQVGVFVomALCYLiQb95GhUC8xkzCESSpd7CuWPVmwkpLeccwH4pMiAnPrDVsbeGbtNQWhtZDRuUg1G",
  "key4": "2giFFSWfHiQv3YvZWnSYMZBFQTnuSEHoQzCTzz2PsdqoA151FKZLDmvXeUpj2B7Fzu56VHnuEM7coiPC9BLCxSDM",
  "key5": "5DPiSk1VkSwfJNPeiJQdTbjL7aJRyrvRYPU1XL6d5ptw1b2cQYnyXmP7ZoLAEDf3RKEno7ibQGuycLJWQvr67soF",
  "key6": "4BiySFzEKZN2gS9CPzcYRbNebzAKxGpJ6LBv2nmVqNksb9is2Kp6fB2EJFALtCjNN5jSrUP3CiyvjjUcVYgNSfnB",
  "key7": "3u6cLPdFEe4jwRcKYREwr5ZfSoeuT6VJ37TrzN2iYheYRxcjtCWbjsJu1bzqvNoi2fTviMHJRwnRgb3H76L7ox2r",
  "key8": "4mFfaQAD8HgnL2bnkKuok3FpuGY43QV1k5exYSuVRmpwiRx1PqY8F8VoF8x9ax3aw4Ny7kdAApzBYpwQMqSNrpZE",
  "key9": "DaM44xAzRvK9yyT9xwWBfw98LENtgyNYmE5XnPwhq8vzNXGPC77QqRBURtmfuHzhWF9JS3VexRxxnn8AxExd1hR",
  "key10": "32Nh4kUQyobkaRB5p1DD8L2Jwp9wC3gkGA45rxZ1FWTnZSCUM4D5fBAsHtu332Ad3MemhL3qBEepiBu8DdSxCjur",
  "key11": "5XtnB77bnUzugHv52h34FAq5wmXkDVWUaTk57JLVNmx6aXsiWrX2EtGw3iF9KWcenSfjPdzNP4NoZBncSoaZw7P4",
  "key12": "cxUg4vR1TcTs3hDq6TYN6wpkKXgTSBc51iFDWpoaTs9bauRoAusqMP5sEu7TSoNJcwXftgoGAvH66MfrwqenWVe",
  "key13": "2L6qBhhqZ8M7GfjJmXStjjQLYGX5hZwm9Tg7NVnDfVnjTQz4rsUc4377aPBoxbik5rAYnMYxoc4sofK11umZZzE5",
  "key14": "4CgdTiL7Y3Cm577TMhpUJHYSZX7rtUjB8cW4PW2qdHJoxYAMBqWTKZ5VbzrVKtPC7MLhd6NRHzV3P1kNq3VfG8S1",
  "key15": "8MyrY8juHRoWf1Lp71LaaToG9Qi51bNZkW8k1yoCRyEmVvQJ1zZnbAVHZsSwGBsqbZTht4JaF6g1BLdpbvN9rDE",
  "key16": "Lemw7CU9NNcTTUNUduDGSCujiRUmxeeHsLGJ3nkNhzZvUoz4f4kZrypfLQ1MZUY4s73xcmvMBH21E7QVVHBm4PE",
  "key17": "3TYZjwGFoHRQTh6ckU3LWUwM2q4QxxUKwmrhx4diMwHc21ZQmfNwBo7RcSvVmLFktdQ2YSfCi79j2ietBwhMxueS",
  "key18": "3jNrTXFpSsDF1VdGNBLH8NygPZHNCimSUvUAvpvMtfhzXJNnqg9J88nVcp5ubhbLbHuiMQQTWppsY1c4wYkdkWsq",
  "key19": "3hnFdZpmrmqhHQfLb9UxFgF7uyEy3YUzbBRy5E8vxYNVy3h8s8en6ZEQLiYzz87yX2RJBcjWKBfq1icUXdeXXG7Z",
  "key20": "AMPMxmzZQHeVvvuespjhHUfaVDLfcAMmfhpYgbEDaoD3RGBgEoLZ3PiKk7WDvnMGEoyvKNEgJXSQXQ5tNzMEo8y",
  "key21": "4XkGFLrhtMpy86BmodVC7H7fgW39HJwbwRq5pRUAdbxE4BA2dxZVf6VqrbRr3YyBtLrmAds4mUzo9NnEfdTUxLN2",
  "key22": "2GEF7WXwzCzA2PBpxRVjvTGBRXM5uAStiUTkcVhWbCSWHHgvnPxMoxAXVUVA77EavVC5P6VLkRpACmTcrBejmE5m",
  "key23": "3FrtfrZgu8wvREjzQcZkBSMrAaCZWgqt22URuZxvCgU6zjnFAjvwE33CufA3dMtvzpQ4zjyWDbqahNBzfophSFmT",
  "key24": "3J6Yp2RBgov9Y9JTXMrPdSLz1Cnsa1K1oJSciC5VZDn89gtHDTSEMfY3FVaQPjeDTF2NxZdhNk9unbtTSGns85Fo",
  "key25": "5nZ3dF6TYfcPKxBwCSzB6bVFhTuSu2vi285rA8xsr1xCQX2SGAgzCupMecvYf6UFCzJCkdRiJfd1NWdRkbUikowx",
  "key26": "443V6UPH84AtSp9XV3kBF36qGoMxGnguypwQ7NGXU7CKPz2qkUZwv2bgTiiRFX1TPoP6ynonYNmQDn2iiDXW79pK",
  "key27": "1mi4VGRdYZaJXF5ZMUGfY5H5oX5EE3EimdZFqF7FM5syVpxynkgKb4yWyUhbpoQUk3pRQGvMD3e6RoXRbernqR6",
  "key28": "51GAtWBR3aTtuuguNa24Sh1JqnQ2nQcuFJfxWHk9ndgoDPfTkQeU1hJuwE8JrQPcPX6y73nozYbQdbeAg5SanvaW",
  "key29": "4ggb7PWLCwmKCLiwAcU5W52pqUbwKQzcTyfwG77oD61YfotPvWGjg7VWY1zKMVDg8faQ5BDSqvnMQ6csJJV8YydP",
  "key30": "2uWBtHfcme9o1yDSbQ1KHnk8DftWwHtpihYZbMwNVk8vXGJVe8mfeVkkgPyjbk6N1sj9dcKwQDiTeCMyrHbxNyQj",
  "key31": "5467TRc1bb3Z7zGDNuDXh38e1pvPnSvQL5My8FGzZ6XjzKaj2d98ooZvJV9TPTczQQw9H38qoBqjfyjguZxXhPD",
  "key32": "SnaEdh78Za17zomr2oo82qSWzHj3iSfACBQAmsM77whfp9AsQhxsNPnCbRFxQgQiXzRDX4EBenVznK7qRvB28PL",
  "key33": "3aeXecuf2rMSA31oYh8JiuWwh1aiNMEFSe1zb6qXxNpeCGUfmbLferLDYZn5CB6LLyxbdkmZLjsumKa2ebEj1nVM",
  "key34": "VYYiADtEErop13oiBbAFNevEQC6KV2KEbQmAUU6Sp1wFxNzZ9SLYKxgSKWytoULiG35SLnzVUBV2c3Kr6U2HVer",
  "key35": "5zfMPdCuB1Gn7Ar5XLM8oxrBnwyKBuis1KGA8oieFvj6GRWAFSdwLzLruW9Wg4ZxWv742xi3eSu2zQgTn156ik4G",
  "key36": "4CutjhnnTygiY5m1jPyFDr6xuubkzsxUK9fLdnEbJhTpXEFgYWCmagXEoEW1Wct5bVWHyeVBawRLLE3N83k8zsMC",
  "key37": "3kKqQSRFkaVuG7sAeZ5K4Majap96E9whQ5NCG3mZcqgYbUfMWAXoZGBRMxXTr2TbPKPdS1RrpKfjRXVKZU8vaciL",
  "key38": "22VRhzr1TAfQm8kCBKVwPjkzhSCgXPgD8qVRxXH7cQmZDe5J2i8rhwb4FDjgBeqTKep62nMM9mmcZXgC26uA5pqv",
  "key39": "wrYKzrJT1ahiTotyCULKqmkjjN1bV4eJ927TgDka3gBwhzvkGzgmAuJg2PTHLheTDVD1W5cLtxwhQ6jsT5WLLY9",
  "key40": "21oye7bAPq8FjYzfmFj5MwEgmscA4vgpDiEE4u6CdCASZLSyYg5k3XRCu1TqMG9ekn78tYbPQAzKqg3jhNFyVkno",
  "key41": "2FCrWvAzJCHGLbjjAT2eCHzrF5zdwnFeX63hmEkcVd9NUG7eaD1qZEy2KwkiR4AyuR3XijKBtDdSZ2xkCm8Dpuvx",
  "key42": "2DSHJtCGizxJfh6mvu4wwuk5WeeQFTa4qJcx6ErgC6KpQNiV5Ek73AFYtNrUqRTrZ2pu14xNxiWf9KayxsC245A4",
  "key43": "5jz7kwTGZVDtqzY3xAafwwpEk5ea2DGiLWmSh1EvuQyafG82Bic1HpVdZYzEstScG3pt9GT2M61KDzhyxB3WaGEG",
  "key44": "2yS3KA8VAA7ZC2LKv55h49c9okWdg1avtyuTNDBCZcS6sdRq6mz2gJgp1BMsH9X7gHHFV3RJrmT8kqXCayefZcbR"
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
