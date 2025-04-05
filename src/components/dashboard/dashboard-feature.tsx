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
    "4Zfqrddot8XJdz9MjfcuCNbU81brtcFiF5hsdJ1mfWyfUJVe4NBtuvdBqSNFzPRiGRFiXgL9mnoL82VjYRGCYSpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PgC2z4E1v97wdRTGqt59SCminyUX6rFMk5fWSSno2UhYQKGyi2MfRG29D1qzi6AVLt4RufPERYZiaHb6zkd8iKz",
  "key1": "63Qye3Zm2DQykXQ3KBw3guopoBYwMRmXE3R2kuavETSrQfH8Qu7AiLLwoB3QYmit5M6WF3iF8TwDCyyKteb2Pu4B",
  "key2": "2MKfsgRR3ZPgrdX3iuLbiaXDpLB2Tg8vWk98jS73HpZz8JidkwC3dw7dkbX18vC2PbWKYYmp4vUePonrnUT9wDhL",
  "key3": "pzi4wsjpruCwM7M1KhHYLGabdgkXzPjzcrxr9J1Drt67CUDGepMMMCNsMm689ASLwtSLRbcPcY7obR6oLBgrUSh",
  "key4": "3PwaDYW6L3Mx2XvDSPqT6x6GcmuZqCct6AqzY4h6RAvbCcHGJALQtpxkS7Qk1depmagyG49sghsWg1E9YrAyGcH8",
  "key5": "34JcaxHVh1SNLfxD6ct3GAY2fDRXV3KJ423NdKHeqNwz3XE39ehRi72nXuFMRZm5DmNZP8ZJmhwwzZeNphTXFVj7",
  "key6": "5fhpfGKrx2kTzqvWPVCpEbhYmMiDzcgSHnV3JdZhHSmCk3uNCnZADYrJVEUdd1FqWv3pDFjnWJ2EaAQfF8tDausa",
  "key7": "3BDiQraGzUQZWMzdRJEFjUq63JLbAZJyAQuijnqEeXneXmk7GcJDyxqitbWPckvqqmCMPPXMw9LnGctWX6ShRCrg",
  "key8": "3iYBef9oDobfmk6KFGTeZ235dqVfkRSRBP3EUdsLWm8y9sispE1gum3stMxdFXUC1SCngWk4xf6zuvaWwNp46ZD6",
  "key9": "5Sdk1u5Udw1ZyAEMMkguDyggqe5kQCBdHYWoGLBVwmadgtS4WMPmunD6mcTMM5j8rVkeusSR3TbqbBT9ZPs4pLmc",
  "key10": "5efpDzMXqCzYYHHCgFgP2TuHk796nNtmLP7d1Kcupynh6Lb4xaokudWrgYDaqA3jZsNVqxVXaB1rzUpfvkYMzVuZ",
  "key11": "2pUwUjWnsqt5XFTsYi3NwnZQEQFDW5ra6Xdq7tuRqdyc9p79VkGz5pP8ywAmy45nsNPxi4so3C2VHFXB5cvUsJBR",
  "key12": "23sCNQpfdAxUVfG1QgenBGfsab7RwYiM1e7W6kGqrNEkJGJQJZ5ZYZdidXCb7g842tUyuWiUnWbH6LeGBZ7U6o9m",
  "key13": "3JuhHqwbDSz4Dh4t1RyCttLVnByvbUm5kVKh7VeWVYasdkAZucBcKT9gEqYRyhG1pCfSBnomNDSwgaef6UktjEJg",
  "key14": "vfKP2HxN4KqvHpCDykCr2zmEtPY6keXA8Eoka4cJD6XtKBKcnkWXegZfaxVDBYjqjp74VuoR7xyBRR7ZrwmYweq",
  "key15": "2LCighe7z3mCG6rTWzDKtuQud7zZXBo2d2f6a32aFYAoDqEErdj5umBvXbGJ1cDxEaXZ5YU5gmcuM2pBaWxqv6JE",
  "key16": "4nWChHAjcwC3gczPU2ntLjiiWr5LE1yhd6qMv1q3te2CHD9zCaaQvVeMwry78eWZoHrSSNpaBz58y3jVWjeGpqyx",
  "key17": "5oyzE1Mq3xgd4KcJ4XyKgu7imPuzGAMXNCYjjuMQo37w738zSrgScr2HUGnvwHmHgwEh7m7NbMAKz2afzKPiuTxR",
  "key18": "5JstEyqWB9x6LFVnBdWBseGGinLZ5LdDqkK2BuEedHiVCoQVSg16KtdtZnBksT976X4xJxvcaSRQKv1XwjDoiYz",
  "key19": "6ALkhGRoLumRSAGb18zpwUZj5p9GZxxNdpgtWK8CVVKNj2EdqPZxtYBfK4o2cQajoQvRf8VwYAU3nS68dag9MDH",
  "key20": "LsUfNPUwMdEbuycGq2PLfgxN5afDt1CsUj5rcyiPxNq1BEWnLMPS325hw8zSix9MedCWgLqWtzdF21AEWVrEeoD",
  "key21": "5LWiBoi7cC4HzCRSjNMUXra294G2JGKsq1LXJRzwbFRLdn7QU649hcN9aNoYn5h4NTGjzqyWata4MDiJyQTx5rJV",
  "key22": "4BeYb8orHdw7icUTN9rycBYbtR6xArsjoyuWd4NrYMLrsZNunfVV6iREiRcLRvW5mhCh4ezaUpi7gWs2aPxiCygz",
  "key23": "2pxAZZCTpVFEZe1sC9ig4HjNbbBEEPoJ2gG1FmY6DQfxfuyeQQr9HNm9SbvQpDRXgU8iM4EsK67yDmmFT9tPaUSi",
  "key24": "4BqDREGrvT3ev7vofbiuaJW7NRoXqbkRmaKkMwAHjd9D7XpJ4c1sbJHpgqApN9rXUwHJ5NN9FA9JmQUVf6VxUDP",
  "key25": "3sakreKW1aYex1CEQvSoDzTVFZWqYnyGKoeCY1QqhKvvXrbHgsGWHQiiEqseVyB9FvyzB9PSVuKb1vxWfbt6PJdM",
  "key26": "4pL8VM4TrbW2fdVaKxuSndTWwLbC48KaoqkrWKqJJqV5rnorHFR2rihQMHp9dgwcMu6rjcG1W3mYMQLq6C2PM5rr",
  "key27": "ok3Shz67J9sTu3Qs27Fh4JmiaFumcy4osbf1yBBGQAy4RMJrGKzFEoW983R8mzdAm9ue4frDmiFuKPxxvGjSA6B",
  "key28": "4aMZwweWAxcS8JCU9UFpyigKbLWTNrkbc729Fst1zRxszWF6x2w8gcDfd38a7SzWqDycdzW2NC9RC6zS7xjJAtZr",
  "key29": "xfvx56uRCY2gJ1LctPHcLZHa9z3vLuW2kuPHxodtie3yVemgdymZiFdq8FZ4Ym13Bj8XDq3FEmpL96nC7KF5YLx",
  "key30": "VrgCx9Cc8gUbr9nSh3XqWMW9PYQgfMf4d4M2rEJffuB7QKnQUYjjrPZrD5q62xzqroWjpaxTGVgt37PrgJy8sjW",
  "key31": "28n5wQ9xGtPGJKMCrdDFbCBYPNka3E72E3VUM1iDF4w41N22k84BwaVxsQ7PgxFwbPPHxxjKGwrxDi4oECTPBocv",
  "key32": "5xyhXG2bDkb9aYP8sfJrXeNVQsU2xbCmBKU3dryumbqWXtQCcHhH2mHCBE9v1vjyhW8GxtsTPmrrXFS524xhbAVw",
  "key33": "5XcDsPwcxNxjFxbbckU97jfL5CGh1nL2fAaB3XDeFq3X2xLL1Jv31U9zQn836TTVVAA7HPNhWPhNLWXYebvVNk4L",
  "key34": "29gMRxntskNSHCn7orZ8W689yD6dGvWCvEvCzc1PsRmqp3KboCehpL9eD9L6rbUdpniuZb65AMNKYjNTBPaUa2DM",
  "key35": "SPUW4VBCKwsmsu27u8ffPeW4qyV8T1VPpUH6JwY1hchPWzbhFzt1W4zB2aeDBYPY428iFHJHorAQh1iKikPbahC",
  "key36": "3Mk2yGRuHGSjCSjgjtXSXW5FNFuvFkEagnbXfHuziBiUQ3E4CpfynBaKjVr587GzxQk7d8LLJQwQkkg5h41JhmGW",
  "key37": "4Lz6L31WYha47ZSFBXHGrAzTPZ8G1o2ZUjtUrn5sRoXs89ym9zeZJRYrq7vmDrS3cq3HdyZDULxmwJrGGayJrGBp"
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
