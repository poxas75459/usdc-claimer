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
    "2CiCvbUp7uHRTyFSvK9YyZ3pRDVxtjP6LRJkCyHPVSiq7Yife7SGdWo5MJbyG916RPk5QipYrXSvWFTv16DW1gkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x4XhJTRXvicBjtnLJiTfz5XJ8ULXdGxFaovPtaSbn2rgVs2kREVuSV4e4d4SicNpthv2oFnXfikCxGPFZPhs9YK",
  "key1": "4LcTnyke7JE7uM2scGyTzpSYFhrQHhM8m4iw6moc7okNA2h5UR14wChpyR1NRcpxpuJvmi9xknyzozgseJ7davGX",
  "key2": "2xDKdrzPANKN7idPLMfgix3JpGdYnH1BeyHzJxJZLxuH4HG3kDVMRUbCEqeK2NiViB5v33mTbAijeLHXrW4mqM1K",
  "key3": "3npSUm7V5qEspZxSsGUzKu1MsYT35q9tDYKDNQ4MWRb4Pg4rYgeaKzEr3rThVuoAWz9bCyGukRa4ZiKtjVuJ586S",
  "key4": "2SniJTtxPxLHH1xVCW9zSRgiwwaPJ5s5EUa81LBL2vuwWQFiNt1HAJu43BRzpirzHKpX8E9cdqvKEL7eC6dYnvPp",
  "key5": "3yqVdoUVGRL3GG65o3YzCBKp3cWg3DW9TgA7u87raREMVXGZcwdXcV6j6JyzzYaihtUWem37YDoHHLBcu46rwDqy",
  "key6": "d7RHUCobtgYUeDj7LDJgZqCBN4N68kkLajPkJ88CUXtx1WbtapRpvyK79ZUdcWmhGSh8jqQeqAjnfDMehYGoqof",
  "key7": "5oz4RgbiKeBPwZWPWvENwzq6cNPMwDgF53BcQ4b1stiW4DAAeXRMAVxccrs1z5ydewPQ2awrcKNnMz7khuxuhc3f",
  "key8": "TowdDAhCxXZWV5xHyjZAgw2zebhomfXvLsnSHm5MJC3VQaMVZLeDUozm5YW5RfLpMzwkeHcxNA8NP7s9yz2cPYS",
  "key9": "5egm4mQEbfBZjVeTvLjVys6xm7onrge1Ae83qYM8ZVb41DMq5rc39sp6zasVJ4Sx88LnsG6EzcG54E3x5CcYKybe",
  "key10": "57r1pHQF4vtLe7XmKeQFJ4rds8wox2Vq8KQ8H6LaFwUGXYbunM7QbUSUgvFoV5Sji7DQxfndY7XURBQB5yVbWLo2",
  "key11": "2Utzyjsq7K5XDEXa9viLTaB5ftUvKjxwguj7zR21m4gLJZBsXw4N68Kq66znuqzD667WoPRQz27U2TojEVFNknQ7",
  "key12": "4sJgFUDDSRC5a2PZBURk9GoUKmt8epUt7F42dMs5MBVmzsP5yXuNAJmYZ2EYv5zzjuhdYDMxDrsUQwkHE1snL6HE",
  "key13": "3MWFXLcXi7jUSXvoaZALBve2u6YnvSHV6idQDKAKGX7smkgsjC2pKhy29u4aQcRxeBFWqU6MG9PqR6Zp1EcxgH6B",
  "key14": "2xcGmUuKo1c3LoEcNi5jFYUQC6y7BohJ33AY9QDTfsbHu22ruaS5PDNZq6iiDcgBXmTqUjmJhhhGrjqRgpGS2Wme",
  "key15": "5RLTqB5VmNQ21YdEuKjnujoNRK96rtxEXvHsma9Vk26879aqScGneAyh6vZ9VnbkuMYnzpB93NYzJGWSxYVpVWa3",
  "key16": "4HqHYD9qitPCruxwq3TibNWJNRsMtxm1zcBwTdgBSgc69ju6wTF34rrgg18vEy7HuyZzfHnYAxWL4QxoXYSkEtmd",
  "key17": "44QTgTYVZvR7mfsjtCsQjDwYBJFRetjTyzvvrmWoLqr7F9vjaKWLMD7pfm8ASUVuxXVVnP3dPdX5HYiaFDejMwNk",
  "key18": "2SaHY8TCGgQ9i6dapw1ns2FrY5NDidcXuNnQ2YftYHmeouXsHRDXNS3CUwnQiripr6VFThupEVxVMxMpRWEpNJd",
  "key19": "3SuZEKTT8mgibDmVVr2tDUYWoSy9RpDhiMG3UH3KgqH4s8xaeeUat5vKsSVFJfok93QPs2wq3ajuKBj48xrCHeAc",
  "key20": "5nPFtc5boHkYLfDN4x88j7ZBWsXGtvPPP5YMTPf7ZHCCVBrfPJwF911ecm8h9kYAKNsNNmSMggu2VJSTV3MJt6ed",
  "key21": "29ESTLF3UoGsKFcekLRPZoCvEy7rfNoEu7GCqjPPd4Si3jTrUugfpv6LXEVpKyVQTc5gsQ5oq4YZwbpp95zhES8M",
  "key22": "4YjhjyWNdWNqBkpaGzxtjCCM8QQAeo4SzfdWJWuY9LKDaxg8QdEkfq2yb1CkZq4YhvonGBU7AYYAJsgFTLRcGD7p",
  "key23": "rtypPZzgX1726d9iizCwHqPG4kE2asgz8XiBYa7x2MG7Ra1Fez6HjrC6nJQ1qHwbicAQkMfND5XCkL93Yi3ZTf4",
  "key24": "2Kmeydny3a999uavm62YmASzPUjStcxEET3uzYc2UZRTb3J5tkM2EqaHJXz5GjDCYWuVuY4qEj3uHDGknxnfbkdz",
  "key25": "38s6tSgwQ3oedn1G3x1v47DJ3k3z8XmryBq4Dkari3Gp7ZkwPHeHqMwpW2BsV2pqohjkiVRmadApjWDPx4we6aKb",
  "key26": "2C7RuMX7qpL6FkPX7SD1rJLCwBAdqWd3gWe5MRfvwMKJaa5zeB21tYzvhuhYjXRMJ6tghKKSY6FZENxD16amcz2v",
  "key27": "3qZV5w6sMrnjw7Cnozjg3X6NcooCSbgsHhNFumP8oBA8D22LJTHnVNHiRRELpaEdfRMrXKcsBYLRokH61rYaDkhY",
  "key28": "2zRwZZRqEryNVHkdTUZY3TdJZPWyd2s7PcREbhH6Pja8D4B7RjWxB7Cayq3Tk1XE9GABCR9AmGeDJdDC9h6iDVxY",
  "key29": "3YuBT6VLA5vmuEWeaRJqkQGaNmcApzxdH3TER6Hh82MAkmyJBgTJ5Dy1i4k8ZNrE9M5sKckhGjMgtZzKF9zSekmo",
  "key30": "3cjfNKCz16addQLSvchyb5NyK3jewbFMbHp4j3P1Y8AgzepKpJzS1LmWM4VUec3vwp8AxLGTHpDNtRjYcwCSUthx",
  "key31": "2Mxg1kqjgX1qMstoLsK65VyTprRrN9bibkjte4nnf25KFbup5b6mUUyEnP1NTPRE3pc1T5MUuo8xh2ZqH1bgEp7B",
  "key32": "37KgrrsfNJAi8u8T2LYjxmJGTHSorRSoUC3qGP887w9ivMhGe94K6EH2eYD4Mhe1rULPYz3TUdRisJ6YATZnCby2",
  "key33": "25tvQGcQnpq96tstkC8z1sUmgAfGv4iKQDRazAb1ADEVndzjLNA332N8PKYz9ToZu1iAmzapTabjNa8AXQ6vbRHo",
  "key34": "3LGbXfmsuj3JHYDi3hMTdDs7aeYyKZBRq5EeLq7y3SJ4jzNHUsTycPDg5RsG44LrkF6DJWoGJXptwpxN65A2bY8U",
  "key35": "36jM175zkyJ9bXaSj3BjLiLBqZ7TzqyyDr9qzZXSPWqbVjgvxjUcCu4EBe5syUBRUkno7J6v2Qf5QGQSGvwwoK2E",
  "key36": "33jepcNBwkeaAh6mh5B1CqPFUaSQUAsNhS9hMVifscq91iwqqVhtJAuLQYnPqqXhpk5svn8BumWCut4fNbp2eVPf",
  "key37": "5UC1GdizibeQX7aS2UeJPNTQFBAM7nKFzJshEi2czfST5bqnH2PvddWqvs18NF8LLUumbWXL2BuniVtidjTQcDKw",
  "key38": "2hJM2idHr4r7LFiRwKYqTgrFrNpQDgrApjYPUWd7VPVQvsuwFBCaM8kJxi5VG5hBHJg8qmaFkEQEuoEGF3SKkx9L",
  "key39": "3c9U3wUChsypWR1To6gjFoRcjmYbHceAG48gv7UXuZGDvSkbawDozKgTZgULfGiq4D9w59dLxuKEecs4WK6MCZhk"
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
