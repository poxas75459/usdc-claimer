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
    "2NXLsvMLaRb3R7k5mtA5hH9CTeogiALRx7Zr1LGcjeJpixTyb4U6NuEKvop1KoL8YtuaiLLgWDLhLJectPZn96uU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Eucm7K6kLNDw6GTpoUnhphDVSXdjtudQaCSt22MxYiyMF6BcUCqeucC92GB5XjAReZL8gqMY3VuRiHdYa5dJK",
  "key1": "zk1cNtUF9rY1ZMKXro2bM4A92UQo5S8g2SvcMfZGJvQ3dxu7zu2bH8j81S4jiMzc3S5dTyova4ougV8Lhw3BvuT",
  "key2": "226YKjfF3E879LJrRGKmtoypqk2CKKVGfQD9nztW1AMtUsusbttURaMgxcBh9JfMH7xbgdFmSXZGKUe83GNqHdVo",
  "key3": "4Cmn783TuCVDCESBg9YiDN6H7Efh1w5kGGkoGcF7hi3ecbqmridBaWmpHMErgZKvpRuPJFsLRdhY1HcDXsfoGJMv",
  "key4": "5RscSMawUTFu6c95MkeCfbnPGMCuBzCtbYMXCrJu4VwUt7wqMu5v21kmW7bwiSmcAxhRY5M8VrJKy2PpT3H3zDwX",
  "key5": "3pkuJmMcULbivsJai9NFtAEC8FjxMwdm5vEmGgW37n6fyVygFLEZRSwnftDs9Hmj9DcWk847qqDCfcWrays3wD8P",
  "key6": "364Z6Nj9u1Z7DzHQDtkyLJQGQxaQkVESBeXmJba1GcCsnrcPNxpEFDeLk1sk1x5kowkPEYqNQmYib7zm99ym4Vvv",
  "key7": "3teyJSEu24zKf6vgPu1HRRjnt3uXbmV9CYACxy1EMnbFiWTrLtjU52XSJTKnMCQ7BhG4nVcX6V3bTje5PZWq15tC",
  "key8": "5ZgaKJSXXppu1fTjt7xsRpTkikVXxWFdkFEiUvpbErrw3fW8AwdFRS289bSK4iiFNyhMp3CEmfjVgmZEqUdSCGkM",
  "key9": "2sJrdfQNKC9vu3Pc2n4petERzcTbVszvhAD6sDgCX3kw473sSGxGeKrZgPR5y3guicsQsBDfmjvw5K9vdkmEzf9b",
  "key10": "dnZAuBCxvvSRT535jXhAcd3HdcXs3kGQvjkA5fcrDJ1F1GA1QxATVDenK2QrRfxijCiineGLUCKTpQeff69XmGc",
  "key11": "59vQJFVHcSsBnyrJnQkZ2ofphJstXifR9nfJH3SJxEzGnZPEXn3Qn54EExA6Prt8CVdoqy31WpL4KKZ6Q2LYQoAC",
  "key12": "45275en3NFRmKEyKFngsRScp7o1deoW6tc93GyiFqLSUGK4Cv1Ditt2h8ViMMznRVKhjeG1zTQQSXekoHJeuxSVX",
  "key13": "kTGoX9Gbhec3qYbiTj8buRD4zCGA127YHATUX8hyTCH8LYQrWTRfHY2hRsj8U8Nv38TNR7xifa7oduoiyirfEvK",
  "key14": "44aRZycXp2Q7z9hrFUR2nsSqAyp6YDauqwibk9rT5ozoCZMLFtMrvSuw8qWTcgRMEau4Txpjv3E6d34Hk2bWGWiv",
  "key15": "2ByJ2WDJAqffNQUBnNrRaDktJTcrgHBjcLx92iPVSV2AskC5Bu4vM8REfHSCzBBiKg39P1rNedyf58iYTNYtaVS5",
  "key16": "31727C5y99sPNjGVkmbvUsn2TpA7FK7RcSkds1AhbchQ3JMCwFTNTgSnjxvXD8kXRagZujuJxJiW669gK5FsqmQm",
  "key17": "xSttWLJ3y9qHLPxHQ4HmpshgmWCB11rt1ZrcCJjFEY1mFDL4QXsHUGvahdLqAc2ByRCPuBQTTSkVdAMMbsrxTXe",
  "key18": "yVZa3eLEdEdRS6Y7aSfhjC9teUwsyHTEsCGYDCJrLoYg5cMCvYNiC52EHBztcpVhpp3P8i5BAxpXmmazrUnPk3s",
  "key19": "4qJiKiXVXCALyWGhuj2ggmLwycrfi9fMU1ML8um4wP69yonmhAXuGstvYzGVdT1oNn4B1mevPq2YiaEtLU834gCR",
  "key20": "3SFFoAuKYVEwt4WYUbZCFDeC9dwrfQqHUJxyvm461cm63Tv33sVJdzZf1hC4Q4F6NR44e1Dz7AHEe2bgqfELf3TG",
  "key21": "5u4f98sVoFGAw73b1zGYMonNM48x5RZXfWCA2JZHd2A4asesGrJQ7a2RdRXq8H4YmHYvGfAhCwGyw3s9zaURumRa",
  "key22": "4No5RY6QEiLGiVGwUhisr3iSHDTDH9TAiiSkvj5iioqgJM6U9DQs8TJNWijvLEMq4ka1GsYwPZsmA2hp1QPiDQAB",
  "key23": "45QvbfHhUJqaToumcbZE3dfm8cHLzbKNbobbARe8u69Ca1JKykxD76h7PrXrMXZNvewTv7VG2frSEBWwWEVhtzPk",
  "key24": "2o6XoY8DX8sxiMD6VA5ngBFLDMdqj1pTZXKDZsXETkCD2vsVSoS2Xwxm8rs3syBkvivoqKxHPqRPABDrdF5Lyoep",
  "key25": "5c5DDgcUhC8Bn84YN6kPpoR2aGdPnhjpiNQZ5WaRdeYRB9c71k27aLNsxv1ycgTTnT9kGm3jA5U1jrWuovyUZh4w",
  "key26": "2cduBgWNtwb8GuD1ZN2U7ieqhx3paPTZ24pTnrYkVkEqvCfsMoawY3Z6ghkmd8uJVbZjJ994gZPqFYvMskgjwnM7",
  "key27": "4XT3VDvnNiQoyzWobPMaiF9GTZHY1tURd1gtTxsHJE6AMy6z9nqmg3HkdUxjALmY1suECiSDuBYdXRNm62rBsdxe",
  "key28": "4CS9RyNg9FF7FvLbwPJyorhE9kYYC7SDLtzKNiV65Fy7VPBU9wpVsTV3t2nCqdKfuEn7EHzJiuCfLKK35ZwhBRMh",
  "key29": "4jjWNJXUauvfh8eQtE9ovTo7TgTJj1L4KWfpYZrPfEfJme5d83HdVWEBGvV2MMGLBcC3vU4uY9a1w6ARmVVpuZ9D",
  "key30": "3tfybJN4i7TRH7VL7TD4e1rWtXW1YnQgoLjcTdGcT32EySgDTWQkTtdP7uSTfr6R9VrM62wEazz5P5wDnhGtHpqB",
  "key31": "4Fitmy2LuuHHYqgLMW1B8McmYHTcx1yQ62Ui5c8UCG4em2BMdgJ2b4xxP3AB9NhwHMqUJj9yhGKVNSRxa3ZcuZC5",
  "key32": "3bC5p97dn5ZiCHv9iiq6b5duhrJTXrKFS14fYRKQK59iHkJdqcYyvHEMWRtntGx2ubjy1kEqFXu5QvFokKFcTB1w",
  "key33": "k5r4jrLyFXvdjautyU8DprE7zR8mMJVuea3ARvXy8JD9p1bYMUVuQ53JvmrmP61xyADwf7Hb38oU9x24goTkGWZ",
  "key34": "2KnYesFYKvHgUGc3aC5z2ByGhTuH4Jy8xpNNB2zRu789jrjwgoGWhMTb4x6VkbTR6PJUv8zUGR8hLvMWLJY9rbYZ",
  "key35": "nMokR3qB6cMDdMowH9jfzcUkioBx17rZfq12zmk7cXRcaqh97w5s1qjfhzKqGF5Si3QLVdLijPiEDKBviQLauna"
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
