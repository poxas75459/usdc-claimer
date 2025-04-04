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
    "3oExJEhThtDzexrmc8g1mFG8NAWfHM2Q9DHiMKBmT2KoP3kEgPN4BfxqPiz6eR49jUXBmfVcLmQoxgT5qqnCfprA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WGMhFwbDdbnNNW8DFsL8VtQNT4JgEP9qdjemSczFNJp3ktgL1vVrj8xpfufovDc33z8dq6pDrQTeeycvi7CygKv",
  "key1": "ZzNwmENTipPLThRZKYejCxu7mNMaVcfQWe34wnR1RokWBvqZ5iJ7rxU4NMLV5RcgG5xdQYYKdamtHuPnhVGVXBx",
  "key2": "3vAYJ9cM21we5TskbjKht5fmtAGezkp93nqK6vEUpDehsdoiDMVisp7pbFvfWXwqJzEk8PECU4ZHey14fynT5usP",
  "key3": "5Xe1Zu3qDrdL7drg7LzFsmoqgLf5WzfZxDrd3YmDB6sBqFDURwycb6MSaJKbpTNbZZynZh3f3MgxppVCzDtHQUXT",
  "key4": "pJsVZMX9mAm5nWnnXG527QuAVzRPZcCkApC2sApSxFeHu8Y3rbXEwoc1kisugPnLiQLCpvustaFSmHuNce8X5k1",
  "key5": "2N5Smac6LACsRkuTS1kdqW7gCKzYCCs4Xy4ZSwUGSJ9me238ZiPgSgRrcBu6in2GoX7QPV4NMXKEmHMtHTR52FuC",
  "key6": "5ZctgKSyaxmseBXnKiSYuZ6Q6r7tEGS97T6nJftKKc57hQ89PxhDh2FrJDqZeaUcDaAkHgxjnTrd3LRELouCqV2o",
  "key7": "5xTxjo8V889SsXiakVk17ER9QoaMsAt4H38qai2sSNYHLk4Si8Yjbh4fUbBwwR8gjrjAKAgesjohatyngsZSAqvD",
  "key8": "4u37ch1xcdGnHvzUTL2n7gbArVL46becm1Tp7YewpFPbFrAMFc37esmKNNybsMWGAKZMWrLc2tuDnxcdpbWXqgqJ",
  "key9": "GCY4UeqL1TB4DCeEyjz7344n3fDYZ5xGiRvZcKMYY6GLheDeQRmKvRNaA9W3V7w1c52U829Q76Gqy1oQHRnHWjU",
  "key10": "4FixiFxhXNHJMZsbCYQpkyiyymDyVWmdofBTBZ54qiztLaBMgi1WU1g2BWVxbwmjWmaA6ZFmqX9f3wKTgsq9t9Pa",
  "key11": "3B25R7SNxaCRCe7yJo5wTWU1uTwr4fy7LQU9nxGmpTgcgGiTDTFoaWzebVNncZiesJM3DgqcJDnjjqGTa1BL5Lzm",
  "key12": "35qjZ9PYB7zbikrMn7cjTr7SprUfmyxdZwwtKLoruU3YsGgxo4gsM6jHs2S91rU4ZPugYSxDKphG65bRoPZR7mpN",
  "key13": "63BGxsoVMaPK6h3ni98JbYLfWnk7YEqBiPkB4RaJ3TzYp4Evdux3skNcHF6RmJV6UU53SDabSyUMYu7SyKUY7dDG",
  "key14": "2aJ4F1KcLNsdLHnPv7FCRgVTpN8n8trUxboAuSsXfMspAn5tYXQMFtHd2LRmZ7EtirtUvz11h5QN1x8GK1hdawQs",
  "key15": "kP4hdxDMX8GqC8ATDXJ821jyXNQFq6nW4bXmr7HoEewPjy2QmVJ3AfbYdJR4giRMThgmBQeo1bHcNaZgGcG2faB",
  "key16": "2HPhFxNyZoo4JCsPGtEbGzDxFCVr3rqzQzFxRoKk2jPkWVnyso75YefnR2ToeKXpBHMFBU7VtnBLFEdxemxmb8b4",
  "key17": "5ETqCWjXWmH3MvvgriUT64kUWzDPyxjhLetFN5rMjdcm5HVLSZ9aiJ8nPs6LxazKfDSVM66d4hEb64EUx89EpKAA",
  "key18": "gkUA8rwWHNhffJ5Zdun1daCpkWqKN5CMikauSXrkBbpGRt39rT1BPVkZCyzAaNSAanyvpeNc53bQLgKsh3R6cVn",
  "key19": "3RWcr17vPGyzUzG5dNoCemb1f4TKCkoQZX9cxEaYhnnvG2NxERxztvv9zJBQDFGSUAqVkygwkHSfNZh9Jt7UVCNv",
  "key20": "WDzLz1ej9u7h1Hk9oVtrgWwK1tovfgtENEXryET9rqbii9J6h55ifopifTiUmw1VE13kjvAh92bGQ1n1CFPLDhR",
  "key21": "4VzDMsdbG6SSrDFpuWuuVzaFHS3qmnUup9ffbCPw3BfgwiMVrrgobqz6TNPFEcWiFxRtHvJYr5oY7byCEXNYEzeV",
  "key22": "5LKuYEYu77T3s9sxPGtFiF9FW3NmTAYfDDsABper85vRDfdZJXbrzZSyrZZrsCCPLhEsSQynpYnrKSf4ddur3Rkz",
  "key23": "b5WdDX2tUFSoifAosEi7Xsi1jxwTXsm7gmH9AqLe669dZgsejfKaXmPbYG42HKkNMxCTY6J1nmrYL9EapqcCqRf",
  "key24": "4Jf29Lw6FGqUUYWUjqS9rgH1Y4RqjFvjohzZFBg4zHiVcigsv1Pb3d9JZZoycdiJmACZaH1jBStULdQMJwVGEEp7",
  "key25": "2PX9JsQ2nU9K3WRerysAJrWy91sUuxzrRa57FLoQzWiywkVDurNr1U4RfXbBqavoof8wpZN5MFVzeaVfxn84VZju",
  "key26": "35LKu7PusAdzi1dHZvSfybqZ7iGTgcq5ccAxjohctQoQrE2JiLkRXbHWxa8S3ycRFRe8rpxXyFdw14q1BQmN7Yh2",
  "key27": "2j7LqqTRW6qbifPoQcqcAEdgViBbp2g2TrSoWAemFXGX5XX8LsGeXG68QtSiMsjqwHyqnbHvJk6htcbnmVdEtcJP",
  "key28": "4eY33GrecS4QqdjuKQ9QDPaWVaJtdkKEz14ykiPFy8jYyXL1Tw3pJZwDjGJ69TjHeVeVyGYoowo6zbpbYfdoV9Vi",
  "key29": "22wiQMUGaZpqGFryFeSxLRacd1Vm8QVyFBQ5z3XVs6mtEPW71cHSgVuRcdjusVNfHUfAkfHYjtq8rgpz7oRxu58d",
  "key30": "5w18RsURgFNzE38Jg5qsV3rqiWhuji1AVY81Mo3R4m4FDgHVRjmfWGA8ZcCupQEhQ4iaro49BD5pEWANAg8VkUgD",
  "key31": "5jewszpUKTpWt1b7UVYFX9hAHfhfUfNTZQ2ciLFfPiH7F9wYHaYeekP5pB8HbwKezNigQFbS73Bw1wrMBWdMQdh4",
  "key32": "24Q94SXf2j49S1iuQ3WrGb2HGgd4gFsLZqLBxkX4JvD8wvyMpMuf6Z4NZtR8fNnxUBnpTC27WHH3fqeRhpNiHN6D"
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
