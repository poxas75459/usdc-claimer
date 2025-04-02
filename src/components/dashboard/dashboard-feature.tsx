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
    "3nH2uP7RLFDdcijaQesgwSQ9n4BnnjSGupcipRKKfZBDPJ2gxTgQMXDjL1aM9JhgdW5SDYCBrV7dF2ex2vLRe9Ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qSHDcuJ15FPF6DUUu8cNuAN62m8Z3AGYAY46mw2NabABPYySg8SNzJpAJeR1fqt73dgX9w8vxa7BGY4Ey7QJGDE",
  "key1": "scyDq3t4sUhx1Utrt1NXn8vy4zKaPqPfASJetanCnJF4bRxsDCjRYx8qhLGVCoFkvnmY3XgN5ExJ2PmXAUhATiZ",
  "key2": "4kXp3x1Y9e4GoiRVsRPog7h4HnJcwpionbi8qmj135zVFgXJNe38L8eBzmMpcbdM5XuMzpm2bdoQC6bFuo5SXsDx",
  "key3": "EUPFvUqHKNP9LWSUXkczA6RigSFPhwa8VVRqmhGo4s7wQLUtt2fyB2P9xrp6VQ5g6WBAycHeYVPXLtnCH6Zj1Si",
  "key4": "3URLUoukcZqPz8w9eGkqCQcKDFRtthGGoBVo5yuWAkJA2d3LTMtsdU1oqRq1uDhFdaCeQzjptC85Fsjq8zbgjUXL",
  "key5": "2NbqEVtsTwjJojfnLERq7Vk7ipH4Sh4mUR9JB1854a5PMn4aKckZggaS3TgxVip3Po71mVrePnKgAgCCcbuutJ61",
  "key6": "zQGZjZX6XoESppHyDuF4YtzJcgWEzeYZm8Yb1MiXK9kYAAjspLxRBGqenNkWoXhX1HaL46CVXCcS9NgF4u3eSf4",
  "key7": "22NXHmTkwFjpst9rYPqwfgYUz9xC5UMrYSSf5Zms1USkEcin44HZ8RQYwYCdChsPb14iDUgf3Ea21q2s3CjUgKEj",
  "key8": "31qNhL6j7wPTt8XpvmydkeYw8Q7wvZ1cRsEqG1AvsVSSASyodbpxXSJ8CfUZ1wf4MdRHThJgKJeCy7foAoAiw4Fs",
  "key9": "21w6vhgUJRqvG4aAheEbwKrXrrym8fmV7aDq5BGge1mMR4sAn8HKkZBSykNjFU4zpbDAF7SEdGWm8PCPUC8dpUFq",
  "key10": "3jodfTJqr4E7GHVB2uxVk3QiAQZ6LsirCL37kyxfcEUPqDZsp74ffFiwKYk6LwRs4oRd8v9qHHvA9s2P8oRotGYd",
  "key11": "Jg9ynQP17fBhWfZfkgaEQnVQooT2wfNFwAioVNh9XNxnJhjKtVHyt8Gh5gTBxgNkDkafV9MVi8Xu2CgowsVB7jX",
  "key12": "5wXwLnhiwrYcmxkGqjnB23DuUkwh9A4TrcwVMxQHKZ43XvWY72WtWqr3k8RtWFsbA3yQfMay9Fkq4mUXx8BUK3ts",
  "key13": "4Fa5Y4cMJSMfzZrZ7t8X8xr9vApKcNoUBXD5bvSVSZUzMmUJZvXfN4B8Ch24HmGShmYW3WRAFCBHeRx71W2ynwT9",
  "key14": "3qqNz3ZD9iALYXdypjaZdgq6Jnd6qg5jC4YDhofXa6SMbq6txtpdq48UhvhQXLPZEswU11D2YF7s4BNSHQ1Z5bR6",
  "key15": "5LDs49oiisZHd4JbTMFaAjwfA173JaoSaoomWdVoR2w4V3uVC8hmww6exgjjFScVJEZ8CDDDBkqAA11vRcUxJs9L",
  "key16": "Uai2E6B6Vp7vU6zqr6bTpVS3FbemDNaGdgTQ9uhoSQRBDEs7M8iD3YMcrjPsiLyyP7azGevJRgzbxLQtRYFHC5P",
  "key17": "K1pnZ6UU2cHxAAFFJfFMBm68Hvzd6Qsj6WKxPKTFBjnUKkJ8EHUrg2oxKRfyXVM3CBRmo6dwDgrbosKWHPKE4kd",
  "key18": "3Lv4HHdQ6mokWY2NPcBA1vo95DuPCWbw6srwua5SpQVadBuQBzy7YKmVyLafTyeMmBqbZ9r3ahWwkMS27Sg6D7jf",
  "key19": "2Xr6PPWvPxekfYmmeJyMM3sVD4wcBtaoEj6R88B5N8HVBtipGoNvXBFpcURyuBoWmWTsbrcfWXvg8ddZB5S9SUMp",
  "key20": "4YGG8uAqvFZNFA4gMbFZKzeHp2UaxYoTLPQBAPXmSdgzUa8dcBHYeSD9PK3FGDGTfSYHuhjHCkcbmDPuw4dyoKah",
  "key21": "63kanRqUcmFJL38xFk5YScaaYgo3XUbF6t41DbD2tadaDZkXXsXU96md9C4W8z9ddBJDUbTUziW2Vu9Qbx8RMErp",
  "key22": "3ADVsM1cD9XJZ9tZoAmuxpTkWm1jwE923oZxjfdYvk8EsjKjhLNMfLuWeNLHPNyQAaj6YsnkVFhRRjM6yAFxWoJq",
  "key23": "2etRUdf82jkFbV8KAnsBiqBpqqfUBUp26ibDrujHGkGCpoSLBYi3cSqo8K8RvFArQFiTEMitadTTJwitJar7dDPA",
  "key24": "Qhhsss2buHp8FFKEQ8L3F7WUZCoaix16ZgtWDVzPjVf2gDgrn2HJrTZ2CEzBh1WPNtMyBmuq1L9uaUvmLW6GQpo",
  "key25": "5yVTMXo2oTBjjRmP9AjYZmLb4RAMwFhKP1mM5WRWJqJeaDukvd6wgD4kWwruqmGWgmqNXCgJk6vKbFBJ7A2wCFT1",
  "key26": "5rPu8TEpVgZ1c3pBPBqYtc3TykY3Lx49YAfmWR8HdshmSshYdJq8n4b9mnzStAzR2YPgnvfTrSsF3DQVWa6KSKbG",
  "key27": "1YC3o7Q3zqajk9Zv1Muw1DoesQ4yRJL27jZp1z9tKVBWYdWZF4CkcgGJzABjRfPzfW56YmRyr1zhCgCjqtmxaiP",
  "key28": "3yfPVjxQeMctpETbHUgXY3MtNPuvKJi5S1WE1zVZihf2K1K4AXhGtSckX7FhdSBwXNZPP14ZUpwevjgCdGr8UoS1",
  "key29": "2JBnw4DXqYFqX4E9kcwYZcWPi4eg7amL5wdijnMg2j16mbze7PV3CXEe6Njo9w3cPjfac1h5x9tEdcDj8wusNMn8",
  "key30": "46R8a3FkbD3axxqbr8K4f7W29eSw3co73ZLB698qy8VHXuKH9W4MMrUHSX5nE153zfnfnmtGzYf6yTJhFveV53da"
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
