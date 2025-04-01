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
    "5YsUyP7cvCXrR3AqiNf1YwV5kJEqhRW4z6CVm8DHGNFyVinnvSrrxAPQy4jyEyobEwU7aMn7R6FpL58yrL6VE94B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UWqmSvVjn6Vbxcjm9k3CzPDjnFjHDhRUVS3xHENvBVtEihKHkXog5uuFihAzq3QEire1ErpHg6o4jX5fReB37Kc",
  "key1": "tNDMzggaErHqNshKEaJUXXQ4XPtN2RcPFsRC5LajLayJbEniJRgTyC6KEB5wVMqz8X5znvZWv8axeGwt8hxDkdt",
  "key2": "2Vnnet5ni88C8S6imPqfTk22STZYv6ABmxPJXJQLxHWJe9qSP4T9CKirG3boCKuyzwuZ5Dv5zhtzKehp5E8CtYss",
  "key3": "59HnH6ZbT6vsy1dgwHxQxcSUGjyyi61zZPHM9EUg1SgAu2qrFY5hP9Gb7yof986J52gaJqoGNZc4wVWn2pNTeZoC",
  "key4": "orr7RJ3pZJZAn8ZTf4a3xfmZsuemJ2GWK9icn1hXpjqBmVKy6zJXL5TBcVhEx196ZjtCjmJ1abTbq67kHdRaYZV",
  "key5": "CZTU3aT5CLsFK3JeW2sPPkB2XfpCzjZsCoLz8w1worE6NJd9XvrALJuCRBwT8bXwnrVpiA7iscnA5XtP6g4w9HT",
  "key6": "4psHFqjyQvQYysWXcYVu6wiSoQN1LZkwvaVpor4gBxF5WanteUgkm8nYvECCPaTSeGYXx7LM6Kg4Ua7Rko8ttqqN",
  "key7": "63wJjkLjZz8aJRfaMm9a24QjbsnJFQShsdJinYQhFZrNSfhtMbY98GzmR7QfhcrLR8MtjzwXdXpSjmerea4q5YAE",
  "key8": "5r4GPjaTXq5RqnAFryvAzQd66C8wBL7eSB94t8cBfDWZorVVjwaYWaWQnqfEWa79nqevt1NCNbBahwaJN6KP4hX",
  "key9": "3ES2Kvbotq1V2WJ1cTU33DLhWC3VysSyHNLm3k26JW7Qm8nA1pheFuPXAGTKwnd69oCmNAamfcRJhV2ABfT9HCvp",
  "key10": "2skVQYPMGNLUhVzVk2mMooqhXzzm7wVAkwmidEJP17vy5KhEzG9Zmbyr2mtCThZvZH7e9tpBFPVL7unGmtMg1Wjd",
  "key11": "nYRhPe1jB62Gu64WHnejhzrmcwmdtMjfpDvZq2SXs5xuZzpkReo2fBN6MwSRsbzcEqwhykTWPjtz8Y95azL5a8y",
  "key12": "2gRnvzupWvUZxtVFFSxLh2ncU3oaHeMrKxGrVnehcpx6SDvtr7ZkjEn81RihK2DpYir116pDfKCBjVbDXFrfZUiz",
  "key13": "3oTW2iYXhfkR1TwhfHyQ5jBGCwxfGT1crJuugohNohYkVF5NkHAigAi4khG7hFaHx4pe7kmuDHwefkp6B6ExnNCU",
  "key14": "5FP5vnsopgYUEatGNf2dV7m873KvDXW3TVT8nQLcFrJziZ3P7KRVLjpcxCEi5hdecAh8igQ2SkKbSc4eUrcpK1yc",
  "key15": "3aWSnuLXaXRq5JRSAs62TnTxzt4aAcGZMmpzdYa34m7PzNj5NzHok1nqFasN35z62rbJWJdPy5ey8SgdscPd9Lc8",
  "key16": "2KzNqUJ54Y8Cu4mtF7CkaR75da6znHEUbDP6Qvribqv9kGpf7Fns7oZAqScd1YcdFBnzqViHJPmiQxGoLhvpAyS",
  "key17": "3T6rmYzz5x8vYncKHYE7tuRx9gNYQNV67uAsnhaZ65R6MvurwE93spMgAp1uQZu2k6PMpcWSpCvGFvWrr4Y2HXBp",
  "key18": "1hGdbQ2pBpRQdnUZcWYV7AXxh2wf9MGvczWrkXhi4RhXQJV1JoTgvk7sDbaom4hBG9xtZwd8Uqwb6LzdvCo9cAn",
  "key19": "uyZfssjvf6VTESmVEZ3g7k4jUkaJu7wfjwZRur4rAPZYuNSV36nabA4zSgt8MRXgL5vDFzDvYAx1TzLT6kdwvGp",
  "key20": "5LdwAA4kAR5t54wjvdWWZk6WhhAD3FkNiJtzLpGsSXv4W2es5wvaZDX5U4JoX8jhq7FhSfioHfXus8ea1h6MFEDX",
  "key21": "5vxiSZL53TvReskEHgsmiNpksmMP6zNWvJ2f8GAVcqrqJf7Y18rGbMNyTa9afFf76FW25rCRedQJ1KUp57hqeCuN",
  "key22": "2mWiuXZFiKv1zucFiRJag56E77C2JM47dhP6Zvh8m8w2VR5qUKNEZzD3yKPsRZhAf7jq7ZYkjsueyJ1PMByUgVeg",
  "key23": "9YHemKRV8qKqCs9vivNkvVLqnRGcWkAeJizkSBQPPGGHzutknaQx6SXbcXRabrZXM9nCWnkz8UMXibVJbUx3p2N",
  "key24": "5tFUaY5mGbX17RX2MbT6HtzBbQCi42nKuqX6CW4RemYKoopPV53ZT6dxr3BKndTQVKPoL76f9zX2bb8TGyaBtDnb",
  "key25": "3zgtAX4DhPPahZT6HjLs1jTA5yKiZGeAeiVsKYB6tNmdTqHDi477R7x7SKUapKiWdyKFJxYm2BsB9edeix2gphYE",
  "key26": "2sXjQRwdDc2DFJrZQwfymC5Y7KUud2y2n6tqcwpwep83A9A1nFbeLHPM1VjjBkSH5rUfGPMg3yv4DdMBWMSgWMLy",
  "key27": "D6nNgNF5YFzsHLNa3q9RdoqjwPSQboW2MGuWptQTSGLpeS7vyoT2JxnMaUsqw4prYkaCHN6vkmDTzjyZSAvgeN5",
  "key28": "5xHpMYPcKCwsynMjhvG7UULorL7yzL6Y8RpiMLaALpGsCSKPx4qa3XoBEadFKSpzfj7GHL8T4ikG7XEv3i3X9vp2",
  "key29": "231n6j9WMcqshL6s4XPjBHhSANnEZ5uwwTLwf3L78S7pezUmxYz8AX9kyvTzoS8RZK318QEeJjUfL8ZGyQTnhJtZ",
  "key30": "8BzQxt7ha6FYRCkK85EPAobTRvyKG8S9QBjKp28C7q7E7tEuoZgxkJ5N2A8LNbx2FUfERhaG3nyf3u8Qfwg8BCS",
  "key31": "oPYTXwaZdmy2cFjWjVtCKhfnpwzWVGNaGUS2EkoMSJ6HDJgs8UwR4GD9f6ewXGZCe1noB8JvPzuTMQZr9dFjWJt",
  "key32": "wtb1mHA8qmhNZY3WS8Sv8Si3LZ2UGBBq6NtmE8wueprY42UeGGrQ3JysDrtAMfD85Qdxu9eWVwpynL4FvEBNvPR",
  "key33": "3fZLu4qLFxyxJn5QkvxuDkF5vGyYZWSg5hXEGXSpTNHUkZiBANXuAr8SaepvAmsmfvdsLZSMoGNG3f2RMWxCriGP",
  "key34": "2BWJyQQE3mkpFCcXGR8Fqhkabh9HqRH3F5xfmAJcyBa4xBq9yEQjnjYnjF2K8nLc16weSyZcaois7wFzZWdz9m78",
  "key35": "21mkz8kD91no2myJqssd9ejD4ZaavbY7v5k5f9XZ8vfNbJQTuZS3sbYoxCYid9qCxPqLhcxercUXEzMc4BQrWCop",
  "key36": "5fUYLXEKSwxuhGExP87hkGSjZnEk21JX9p7GfdfRgVDrSV8CsKr8UX1cgSnHZakMxTk1vM7HJYJfX3oAPt6kJRM1",
  "key37": "5wzs2rh2vnfCEo4bt856jQ9dQrbXDQPtURpGVo3CRQ6W3k1zJpPAjbwt9YA8EgS7DXAFkzh52JcjU4bWbfTdk25E",
  "key38": "3P8iE6moXkNSk3soDiJi4sCsrwoSLRh6UZ95BNqccpQwiBKXCAEYjcqEqEXKCr2VbjPUm1rmsDXkoDczgteM9JXQ",
  "key39": "63EwqxU7xQu9GVYfNE6iyQopdRfigAEQWbJdzQ5Qi7nWj5tZamrViuYEpU6neSFeME9gRqRgQCpJG5edQPZniejv",
  "key40": "LpiApLVBD4rbHpBzX138Ks4MMMyGjMRUWGqS1qoo6gBQvWDgdH4obCR8NmefSjMThNcwYdReENsJTgok9TDTX7V",
  "key41": "3kpEsQCjrf7AtFUzpbD41rbA7D3T9s4g7oJrQgrDex7Z8f9ufxF5ojwG9xXEBvKgd8JDAvpUNkyMUqXxe1S7HwE9",
  "key42": "3g6A9WEPqGXVzg2AQHhbn35UYvbUSn5jDArMmhxtb9AfpRdrBkP6t8wbF7MDwMmcoDXLFuTuqLhaZmFwCKY9CPaW",
  "key43": "63qhdhTtPGzibCrxAfsif1GqphJigf7FM4MKXFhNhpqwpDLLLu9PePK55QgaLAwhgEtN1GuN6iKL8BWhKUg8zU9J",
  "key44": "TtHanTigwZg5X2BBuws5bTUJrbt8Nr5thQzdt1LaTSaDXHMton3aEPgSzLaoHHAeh9QiNxwUVqJyPQvYWGtD6nN",
  "key45": "2jMrgwgGTcapH5jNrFyyvjQnXhc3bEYfQomeA8wfWPQRLNvceP6nFqsxQqdtwG326Ro3fpuoc97nJHn1eiCPaZnT",
  "key46": "5TuTHGiZ1Z63UMzF6bD21YUmoRQijQ7saZZdFdkDbHykhzcs3P7tNxEnZpgYi69GgTD7zQNWiuQ5kjLpqQCF1hrK"
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
