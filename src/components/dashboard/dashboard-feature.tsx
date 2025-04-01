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
    "5qh6fovPqqT4CL5vj8fpBmGZqPdWWUi3rm1EC1ZfDEBvgLAEf8Y4guaDq922jywn1XHHWuahV5Lpu4AaiVCo6k9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2foE1yiLtjfqj1jc3BkRBoCZGoqvSCLqcbYtSrAGeKzHepUnXk6t1TiJNyVGp3UiM2NjHtn2t6PpVuhqt4XpMezj",
  "key1": "2nbsDaqHg8Qvw1zK3JwZUCaiRR69kHCPC7eka5gt3wRHWQt8PQ1vSSDahB1Fj5GL65JJoyh5M3ibtG6kjpSnq7kS",
  "key2": "2vyf6Ue6WCLfSQCuuNze67VCfMbWDngC6vqWZnGFoup7jPDkBvm6vv8nh8ffKdSeVKn5uWjDAqPHW4jkERDWNciB",
  "key3": "5Mr7p5Q5CxPEsCdZ7eFerHYfxr2xgN7yT6pakhc685WFft7s4Sf5s2yTZeYRYd6utymfyT7n9pH59VpPgs2hSx7u",
  "key4": "2uXLd7HaD9zzhN4QFUEmmzwkApTHjB4DzrZMrJ4TA3TYbRab4CNiWZiUqqZ54UgyzGitvpVkNTcm92GcNBnhcKcD",
  "key5": "7dn7ivCzJ3pfKu6xGLkhrubqkFcHJUVjH5owgi4JuxhoCjT6gG8pfXcZsapu7D8SsR7ZLgZLwpBqeUnbEz7WHQ5",
  "key6": "36fcerQw6nTGfb62SvLNN5cnjt5QKJVwFosurHLJiwFSvSmVah9iLiB15AZmptVdimbBWnFzUw6ja3y3PbG2DGsj",
  "key7": "5cFf6cRmE54rN1T2FTeAZq18CxiZzNojGcZuy3ZYT5kEwLYNv6e2mxgWjdDXC2tgarP5MmPZTtUc9p6sHRDngwdc",
  "key8": "4yjShAxbXhd4zrZAdVyaAwvbQXb2pD6gsdRsibheQZBFpYHSxZ8avb6GgqKRmXDprGkA9YTFYtXU1weEYzwuMzcr",
  "key9": "3ScxnvGCMKX9SaKJdANshcPwyH1mP5kV1iVAMXR4Ybc7q4zRXX9VKyp62kJkTszKRPPyAqhDefDkqQi33NjhWEQB",
  "key10": "3zg9QaJmXo8hJDp2YKUBEW1mRaXXoUcgV7Jf8eBcUwaxn6rt2rGcfY5esqhbm1PvYihvBPmRcyPhWGDLC5sr6YMJ",
  "key11": "3mUDfvoLYgSWME81Stj8uhNrM9GdxpYYGoCNuQMUcwcd91ibcqgFrQgivR4eJokqXxqgQ1QCAGMBATVznUMmBe9i",
  "key12": "4FJoU8X5grg84iSFzt2GgTBPhDDJFjR5ueaRRxuW6Bjr9UmvKJJUGzNZpzNADWLW3LVjHwYgfXmrStuTdhTGAzsG",
  "key13": "21D8SxeFXCMkZw2KNDLFDwqftKiSFdGAPNVfPCWU1NKidp39V5gTgLVymBiEniDZFS8wCWiU29ybPVXJxAKdTUpG",
  "key14": "2GgH53fiASCARQepGqU4QCjoYuenULgvqBCVHMhvSzhDTA99r2VqKP5cxqTpM2yAC9ouVZ6ASTBN4RvEjvUXE9VE",
  "key15": "4MpUWbPm7GUJpjomDfhEpn6N8pXQXBghN8c2VmNREivNYj6dqEt1Zd2WsmGNmH8iPuSAQaUAkXKazSeMFdy1WQoH",
  "key16": "4xt25ajsfKQUsDpHKhqhJjgBrCaRXaiTJo9hRQGV8L1Y6P5xzBrh7ChQK3NADPBxtkWCtMvYdLbqqcQZmVNbUWZJ",
  "key17": "41ZECKX4t2SqYsCyymHnDeQDwRzaGDH9epxvvSukY1h3Jmd5sGy2gc6sT6qkn8Est6Zkdv1Ee7uXyEyNgQMSbEd1",
  "key18": "66Z8kE7aWZHpKTKoFYFmNJr79wizGbUh3wm6GV9XQNxc74qjbQiVGtfp6dNYssXsGuSa4CzSkgUpf19ew2E2z26q",
  "key19": "5ymPa9Z3pr5Ygef4HxP4wbFe1V6VsEm39NR5ZYm4iLUGtDzTtT9PQCQ8DkMX4NnV6C54PDqszx5JkLzQBNDudwpz",
  "key20": "jQFQMYX6APtkkbM1PSgDpttGiJBo9JZMPy59kLQpCooc4NGHLRTyfve46bqJQMCWB2SqoqzA4Kr2erEaPkCC5Ln",
  "key21": "5QvbBB5eQzZFEn84czZqhknxdFhBLKS7abRZR8txEv2JKXRkVXEVF6Hjtsw6GU9UoGBwQLn3tKv1F9S16P6E42pY",
  "key22": "2oF2heqbkFobyyCcdLrvYwsT8Bhe1QzLn8wvHJUMeNXS3WHopJtp3NM2FtQM7CaWJCiqP2qvRacno7PQwF54hvhc",
  "key23": "2GJ1eCLX8J62tUxRRTgqCn2ix29wzbfRWkWomVGkWd7reCrcdXsDMC95HA6iae1TJ9qdVZ6cXnPGRLWYumK1tye",
  "key24": "34TNLkrDArow7p4kqxpgxCnVttissD28RD9CxRHqFFKLgdGTVhygXFhbmPysphhe38gor9T1o7JZKyQCQdSdzWns",
  "key25": "3ADZL7BepHPU1XMYWNe6dL88UdKTq3E8yqNvWvZYdqhsoy4T8mEvB4rV615A7Tc5fp32J29JAGuTSiU8mcpFE7ci",
  "key26": "YQZ3S4zbgh22monU6G1HDtxeDuAMjhALkyGR6VU956TDp1sDRBeuxuB3YVN45Ck7xsa3X2F3qVkizXQSJNSbjuN",
  "key27": "4w5cRH5SvegjDgPCt7pnLgAFR5szT4H4SknYCg4sDpeUKhCLWbihY7rmpPXyn3CtBMYxc4td1gWGWYnSySm11F9G",
  "key28": "3pwfiPdocwPu8uRyCxLn2LmntiuoteY3YViB8eNA2bWzSxarMBLSGDmToqDj1X81obAk16iAhgkQeZ2UpHXakyJw",
  "key29": "5DGxcd9wJxHVNidCmYbJ176acUfvBe3NnT9vnsVNmvnaHyaenhqUKF51JDoeSVTr5et3D2C7w7xWcvVVFQgSfXwM",
  "key30": "5Kqz75q7pYoSEyNS3WcU2XaoAzzKccNxnLLbbJsfvF8msZucRakz5g97RnA5s1Z9nfwru4VJn4XZBbXSRjb5ddtY",
  "key31": "2pcxZhdimDtURib6hibX2dk2HtCxTPrzSRHw7vfhkPs4pPp1s1iDxtDojwz9Y1Ga175fviD1WCUQUDsaKNq7b4AQ",
  "key32": "2wk32VnZNbB1uuUpWdctZPYPggNqomUQky2jJuuTCNPRVehsQCmSi4hVCUtxLko8AJheubVuH1uFYn3Hv8DZq8Ye",
  "key33": "5tgZc6eCppGHYss4PRB8qX2oRLxPH1CijFLjVk8s1KmHC8TZZf1aqXATd6cTW5UVsmUFJ5XFQDvBCoEP7Qb7WxYP",
  "key34": "57eUHyFQmrxfBpCgTL4LPQm871WVKzVLBoiShD9tuNYcPE3QR3K3hwdvzgqvsNgQjs5jcENJx1DPmANJCYo6UNEW",
  "key35": "4CvVG99fXMPtewR8koPSjLnT8L2s5Us8RFsMRQ3sn8k3Lg8RzFPG2w9A8YrvPBKAHr6tqqKbBfFCoVSjUVTJLfiD",
  "key36": "2u7t5iifaRuaNwSiBADy1JpwgHvKtZa7DJtBKCCuRJ4TcCJBvKzdXVk4Acq47dDJosoSN5uKtRMwFMtQEjYNPdx8",
  "key37": "5fD1BHJfTjmLUgEHHo4rRTkGApMKnh2CC4txvm5njRovDNHRMLPQMfbWLxqJj7hCnewow3CfJnqCEeTG4vxohvHS",
  "key38": "5EqKR4RJEnv3T7bXKVotcDQ8onYfr9PjoBr6Jt5114TuhqyL2WSgqPtNFGjEUA564wiUY8t8GWRTCU9wxWCYNsnm",
  "key39": "3bXXVaDeGiJNsBoXghx7Moh8xWnniQksJfw811axFMz46kLRLCqAVj7vUUMYb5XRf7GAL6r2JgHWXfECJmYKBNuS",
  "key40": "5TNva32EVBtcB1xHj7JKHeGxAPassZJPpwxkFbjB17rQRUfysz13KJNyk5AUnam58Aw8sTdzcTkzZesWdKecUvep",
  "key41": "5h83r5LMfiZNNj2H3XRfCdbiFLxPMh2gDcLEzfwvsAE4XAhorxDBaDXbfswDPX7vnQ4xfeAr1hVWWTpMgBv3i3gE",
  "key42": "5TofAzV8APEbiC2Un662AooTYageHCU6Eu46ZLbuequDwMDLr7GP4pFD5bcD5HWEeciAnBcre6mSjkXXXJzMQ7Wr",
  "key43": "2ZYyr9rC8EjyywLSsePTF9pQJvdEbcVH7faiFgPE7qdpW1uua1m8nrNhXZr1BtqTeJJymYHbgP27HoPhhyFJ9YZP",
  "key44": "2SNmdzcuY34GWJbZJ4kVCjBHzz46p56pUWbzbC6awz11fXNHvf2ZAMU2asZffS29q5QbDd42FCKqZK4TxgCLZ3xH",
  "key45": "5k9ZNfYtWPTi59nYdnpfGaaKZRDfp9ai1pJZo1FVp9yDELLbYaevjvjrDSqJHgjkYHHMav3uBjLuLiuyqoV2ohwz",
  "key46": "5nnk7sZK9CZ9Ln81gVhnxQ6Xc1L8eraSJbjbB9vkLfN1ZvsxRWTrZtYepQrBRZxqnrggYVHGU6qcjRunTqAWvrnA",
  "key47": "4hLELXqtz3vbCuEjPt2sdTT43UPhPhvxy5dyyLch1HZauEkVoaPR7Bpc5ZJKs2zddqqnp1bxXf6nEuje5HAMEq7t",
  "key48": "4VXxst51ohtLb4Wt5NHhkqNfz17537hbgku85FshiwG9J2n1YS1KBs6HmBJhPqpKXkm44vujU4qNdzpUBWaqdRRP",
  "key49": "3KykqeWjxkgRukDJtt4CKg2RMW3oRqZykXoTLq8RpnsJFNf7tp95zNYaou1cvNuodoqdDx9co65BvuWCTpHt721f"
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
