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
    "211LNKr2ajiJtNVbsef2XKD5SjTF12ymwCyEvhDyGva3rPzGnkGAakMqruKevjcVHSmGKfokjN9x3UWCW8ZjbhhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G1be6bGSCVE4aszHZkHKdiKnCKaTRjFBUCVBPof4hAErkeKGX6R3CL8Dtx1yeiHeT1sj9FLnf1iqhCkP49EKwLN",
  "key1": "3hNtAMRgowN5Z48LW42Mv1KKzpagbnQJrSpQH3qdnncUGQ7d8agg4dSGxKeDyYGzP7oZcyu3FvhbNGm6LtcGJTgb",
  "key2": "2e66vPhowsPDxJXJ3P3GKGPp95BZv7yLzdL89Lnz1iRs4LhRRibcm1bM6uni3bgXJ82ogXxUaM22fmAwNPpRjo18",
  "key3": "54QZ9sEhrw6m5KKXsmvkkrBkk8AHPRcsTp7Lx3ZtDgGrdcVBrmjYAiN65EgjdBjWPhS4pb6JUQrjWCqETmSHaBar",
  "key4": "41Sk2Fw2mTTZunbGwavbW8e1P2AJHzKPad6Huqz2i6iye8wAicKXLiHs6RheuLG2LNrJVihWfeBUnttHae19ky7j",
  "key5": "37vxUgiEsGiWcn8i17avUH21rhQbrAnKnKFP3eyfPbxafjgfnyUyA6P8DCXqVHgwrn4raqHxSDGN9Vf829nYZNqV",
  "key6": "3phzuYRABPwEGDDhyfCKakcBPRf9S4vMjfaamPujzzWM1U5XuH7K7vSxVmG4RSck5cTT6NEqnyzVwbCULZBachmr",
  "key7": "5sZ37mBNahEFpRPe6Z8Jttfpkmp8qNp7uRxM9NDJdpC9jCZRLiP7mhp7cxRbHsbKtBaU5UEQYDUY4Zd2SpxxndJu",
  "key8": "2mTUFADG68rm57viV2FwF9ikvuH4Ns5uLEPoH2MicRiBwatiND6xmMs2Gum8xCW1StAWxdb7aWzZ4BVb5YaeHvAb",
  "key9": "4bcuSYXeN881NytMw9ym1ZTTRzSixvzdFy4cJ4iiR4jbW8yCBLs1WVqheUU4tDu9LNc8dDX5xyK43SRhoPKA3PEW",
  "key10": "4ojAEfSyJ1Nc57GoLh95CH9DnDHYwhVNHPt1ugkvcYN9RMVW3P4VzBviS714NPsypHHDg3D5QooHaTamA9nVxVMQ",
  "key11": "4jvjjtbnDbVVCpC1hXsobAHTKCjppkzE3PkpF84y88cZUpYPRTWm3BopDpkAKJ9CxCuCvHTAoT8exA8ccE62tkM8",
  "key12": "5p7Vkyy6nkpbmopswqjzDf7FVKtmdrYdHCnXAbAdaw3o1dmpiprj4siSauA2jNQkQTbpZhhv5nThuoKoe2ghcpa9",
  "key13": "26dpQKeicYfxVjv9CyjbdDL9cmgoDkUSidogteD2aXMfnzaZUgQrPJCgshEUdxjmzRtHCvvPhrp5iNGsxjsPzbS9",
  "key14": "QvKiVUDorCtMfSW5KJB2w2HRTZyjdPjSgYnhg5XxJjbCXFxnK3r4RmwwVe7GdL1gxAsbscgnR3PtvFxoireJVNc",
  "key15": "4tVBLRdh1hypmfc1QNn53j8bgkvfek4k6edGLpmPj1KRSBUwd7mwXxe2wLghvVhGDNBXWsy6cvHu4vGAQLj55Yzt",
  "key16": "VrhdBc7SeyX179PkCevjxNAqG3Fqiwar7Nqw8qBHH6wiKfaGNMCiuPGguixNhthiksdP6kys8DNPfKud4bD1bWK",
  "key17": "5aALgxn2PxdgHgpB3yTwGXmke7USoMDdKngKJVmbC9SbNgJLnu1bvyG1qLdouKx8ZNi4VFHdzW4jxgjAzkhcxMSv",
  "key18": "2VPH1jMZhLb3rkyXzMPrha1GW4K7QnRdLNS8F5RipHKJsQR6gjm27aFLr2Za92a3kGJB9KZX4cMaZLheJh6XkSK",
  "key19": "KALV4auFi1Y8Bwfkoi6eiiHoHpvTUfh9tTrz3PUyM9sc8A1H1Z3231LBZkjjMQFiREVLnpThxAShWE3P1dosvU6",
  "key20": "4ZJ6ii3LWUa5znRSdbpGvc7mcaBGEkDGsSAwkob3EEuaKEKowToAqQjT8aC17yQwM2LNQP1trxMmt3WBkMX7UwJB",
  "key21": "4VJqRcf4KAskpWuKgDyRoRUH58k3VnMYFggwHoTLs5Tohh5dpZny9nAzyXo8uXksEuQ6TC1x8gGrVb4oaywUhav1",
  "key22": "5ChDyQ75REPajpJZoE7MRc9ZgoYztAD5FuwrwKS9ePdu2Co4y1fPnqk4UcXMuCTP6QpvEXxjSK2LzbE5TMWYGyKH",
  "key23": "67HRuGKN5t8t4Wj7keJN9AsHxfTYE8PMxz9bUYQeD9PP1exNMkBPCetdDb8MBjaPS8Gs8JLwDR6LQsYVARpF4J5N",
  "key24": "9gaQgreZTEfYjGzAK9BrmVQmNW7TdwARZeUhCVd1dyNVdJiG8aKsPCg7rGSGrJqAUg7aQ2RkvozUJpKCwyXc6mu",
  "key25": "2fcruw12WNYX1sDBKt79aKLaBPosGvx3xygocC9wq7sfGfzaDy5VKTX49hgKTEy4cATzWpNVLD8XycRBxCVutr3A",
  "key26": "3nuwQerB4rDgLKuMiVBBGqk6sVqEHM3EH5dKXESYwJLmhD8rBxD8qiyma3E8TbiDiFJfs4k8XF7pBLmR19PTgMes",
  "key27": "2qaavXckmk7y3pVrBxGUP8gsRBMYUafQNVkTwgkSjixKQiTaxFhKqQmg832rBM4qd952ZuNFU1VgEPpKJ8zRthW5",
  "key28": "53pqsXPS1TWswRR85FNBqeJ4rw1kLreE7hyTVocCDfNZ9teCAkaHKxFAsPQk6j8JLdxCk2MYQhpVSuscc6hAdJ9f",
  "key29": "4SdUGtQ63Ru5kJwBSkPACPYhQ37eP9QWNVG2PjWvhudtQioFVYiXG3D7qdwLZMP49SbBeFBmgzCMpejxXjHSLr7x",
  "key30": "j8gbYVK7fpiBWhqFN7ncLThtbhTPfQaFHsnasoxwzMn9EMhiSgtkPBPqozuddig79eMVbFd3sBeCRWqT19wUzYt",
  "key31": "4WJnvRNq2yLLZyoersZJfd1J744g7Xg4vvqrFknTuKGfXpRwBRX3Wkk3grUNw6K25LfVdRVL2AkPZ9BiKv1RSEPB",
  "key32": "5QA6Hwb9RyEWEd3md58mK9JcTREt1bVwzG4J6N5Yibu7rxYeYUZz9S8WSPcQm5M2JtHPFQDAazinkhQHu6cfA9ou",
  "key33": "26T17HYEsdURsM9Afw1FjunY1WMXHXxpfH4KJqqcGWhuqLfp5HS8tBY1ZpTLhEDMRktNbF4U7UJrhtqoh3tnUsZu",
  "key34": "5iERTVQPfErokTvSti6y5xgPZmUMfrMqLgFfxhWPUhjhyaJo15YMq5Lm6fooRqdP4YCfTy8uwdaiQMqCjAwaV36a"
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
