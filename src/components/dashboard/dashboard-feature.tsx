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
    "2fcaTShtyL7AwMJrktbMPwLhDBiorsjvEgsLU8J6S6H9BnSmqX7xYpiGvWtJT65rAeqntghrav66yPmWFrC7hAyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45mXmHcc3vk4KuNDFRsSswazaQgHszdYDPisnn4PJGVPtCEtcyrKd3Rx2iG1nWrbdLya6PBxoTKVCKFcTcUzj8Nw",
  "key1": "2GxgTgUQAZEeB1HApX8dcMBmFx49gHK26A4PvzfUBqhbPyLUBAyRLCpcGH2svgckPAuM5rSoVCvDmkkgydZrTsAj",
  "key2": "3muXfStC43TAB7ZCSQAuKe7np9ctv9FX2WBitCpc3DNCvk621ZJvYC4NcDBkYpfWfkWS31753BDZ8wKu1HZr9sWB",
  "key3": "3EuNEJKkugGEfb2hZEaTTYP4bdhunNsRWeXWCtL1o9umDserLC1ucwmhTkNANzGkrLPBPGUgFtYKNhmXCNabwUD7",
  "key4": "5Jjn98kRnfdApcz3Pk8WdqbbrbA1fMSXcBoQehBcKFj3W3yyDLwoRQRJpSdWojkn8VCdVQosmSC1baaXSunUbqBH",
  "key5": "2Hwf5AyoMAnxa9NTYHaP6dtVeXBTq3418PwdmxsZmExiHHuT8FquEpdwiqAh55tHdd8NHuGzqRzFSDAtJwrgGstB",
  "key6": "2XzZDv84zR4k3STrgbJ5H3eNikiG55at6H742cRn43WdijYGESDHdQZ11Tj4BQtRZ5p5R2haxg23k1jEfcqJuDPP",
  "key7": "3Bk4s9HXf2Q7zz3yAWw3RC3ZwCirUps5KxBhySxpffowMNpCPQemH2Woy7KSphRkQ1RhVUaW1oT22jzMaSYHjVQZ",
  "key8": "5HkFLRXNDWRpcxHPYL166tUTdv7GNLch99Bwxaw8hL366KrfwbpMHMdSuwRx7ctBPcRaRuEE7HiBhD6WyaBZDckV",
  "key9": "4KAFx5QHMkddi7R4hWSBHrN6YqySAxuwPMNj1skWHi8UAqawhcbqRP6zoYqMx75a5RnZWeqF35wedTqKpiGiYGoa",
  "key10": "4xGpoDJ65Sa1owLXeN8GKf4qbnHVDcbv6T3yzxWozcvWfhYYknQHpe6MSr91i6GyXAJvNg7WHrFDBRHkeNpHivaJ",
  "key11": "3YzEHnWyRMHw4gqdxgB9zULZ3TA4gRWWYvqCerKcgPUK3dP27STMNf5sqvCgKRwymjC9wSdYho2hD9ND9ezeMRzt",
  "key12": "4txWVCUsGnmfqhGAA2LZYQMd79Uo1aCZP1PyqkXivT1ax1hgJyHqFKg3aR4DcZX8KdQVWdiCFJQ711V8fjX9GsSX",
  "key13": "3HBnhmq1zgJDDmexCqBCc5p5LtNWDhaLYzWzjzWnYQjGyqVVr8vJjj6QUykVZDBGf6U8LnQhzdEsVK4da6mFYDUb",
  "key14": "2YHcE4nNwE2tvwpaUKU8z1vAepzh2uJCsSzCwyA9nWZJrNVVxBpbz1ASpGrnJjzQVCADjG4zWQcCpH8aAtWxYvwU",
  "key15": "o6vmUC4mjrLPfQvdNqwmUv1aCXxxcBx3brzZcYemmdNTdMboApDvH4hmhDG5PdxaMB8KttfWwN5w6Zmnj9N4G4P",
  "key16": "HAEGabptD6e2mwjdVonU4z3ZnWYWAkoT5tNyZXouJJNSZDsvUPFTQ75278vmY1tuWSzRx6HbfxhQXFcYTE95puE",
  "key17": "3Hvr4cbCmGseCKeWKqu1spMGy6XRfvrMN25iNbdwkbxrwLuQT4VsDoLu7XXG29TcDwQT6EiJixxPxHbg358CRpjd",
  "key18": "3ZE2mA7ASR8EypN9NQnoW6sMcHRFWsBUveVgBy2j4f7kTmwRX8TundVym87EUXan5ApwbZDzDVELNCxMn3YnjfUN",
  "key19": "3VV27AKYUs3L32EuZKiWU5dfbwQGjcqdWKpwpzuHXPocP2m9Y3gTzJoRzdcBWCWE24yvmbfycvRKVbL3sRy9tYqJ",
  "key20": "4nizTGFJJzseCxG8sdhDn6Z59u5sxUBf2EDxBgYUvM4nmPo2sPHPiKiPDom4kQETshiLjQhLSKjdzNNo3641Sz3w",
  "key21": "2KDbX9o5ZHg3hKPd2muyhCsJBeA1h9zECvLde9PLdGXZqK7dUV4GgFa1yvSmDuNu8AC6A7TLhupoUwpPqMq4o2ej",
  "key22": "3JF1neC9yVALNPEWnvcYnKR3n75YNhsGMKYhrkAEKxfN4pj3TRnV6AiC7Tuwp2XEcMuzL51ChDbaJtRG2dWUMspx",
  "key23": "4wGqtVXqnBKPHgVwq5VCRG2w35qMn9xAZ3oedSBiFkbv8EzXtLLioM2ZcNLTyiLF9WFqqG2wUKv93yRG5fToUpjA",
  "key24": "3T8pDqrgquYa42LUD6t3b8XhbUtet2EapcCeRDw6QWEBDdQDQo5sDjX1e4P8WyLKLFX8NpBJuqo2Lrikcvx7CMYx",
  "key25": "3AEbko3pQ6SMsqMwDBfENtouirrjFJNtrETHdrEg9Jp4adNHnGdLk2enY8rCjvFGgcCb4vsfsuQ3J1AuW1HUn4jG",
  "key26": "3U2cUmN9GfRo4u8zbRsgJ2oWZR9mFJUvFTZtWUH8wbCDeMqmqwsgs3Jm1Q9ocuJcXnBke5gja6TLtj1ibHV9K6Sj",
  "key27": "3C87zBWTnPhUYFuxpR7VNW7x1cY43uUzDJqdP2MfuqmH7rbPQqn1m8Xp5ZWh6E2Z2US6tgpxk3FZ2Z8LVLRbSAeE",
  "key28": "2XFo3kzke237Jf74SNmWzTsVsRHjbZNzKvobap3WCkiQza1F5Rv7YSX3J5PwDsvxXN64tXcJ7UoSxGEBhPVLZcNy",
  "key29": "pKXCDwJsKRa9FsyW2CTfBrrH1hBeUZEDeS9UT7LBj4f9s9BACciuSGzknqCRGWVnNJqaRj5kun98VK7kLkHCoCe",
  "key30": "32urNrvGwT4S85htrw2LbB6AygQTDQ6BNasStnZ2SdSqj16CeePjjsfbiHteHUDThZQLF4wc4BBRTTS8doKHiutg",
  "key31": "4WXPzVHxFSuCrnmLjZchXb4qtS1nrnqAXuMX2r1AUasTgVPCAMf3k98eX6HA5bX7izCfGSDge54bZgxyhYB9pDaq",
  "key32": "2pNJBRfuFivEWPbaCqDHYcFagGitJ14NehetRmgya7wdxuRufRp8Q1zV4PVEjanNfQJKkzMhcFhR7u2nRJ7B7gHW",
  "key33": "61wzjRybLSiTPzEv8mb8ERFAyqJ1oLv1eE76tVGgfAcw6ivtJAPDLLRAN3iGhcH1hEiTavppgYvnDzmvymBqcWt1",
  "key34": "2wtc7kX9bout3Zjtqy5Um4VmGxAU32fFxkcyYuw73NoFwiZj53Zw3gKSk14CeXrrL3tPQghebJidLTfpj82Hkrii",
  "key35": "4bXZk5khcBQWCUF6nzrM6PCrDUcnW6wHAHUVqSgkPiqZAsnHWnVpMmhbacbLHTMwvCUnyh5mNeWC2QVi14zV8ZXi",
  "key36": "5jZ7iowT8PQzH9EV3VJnpPYLKJk4LNu3qcjQ1Y4A7uCcSJAgUyva8W8qtjFBNfvVdQGgZRZPpmSxLAtBKPtvXbov",
  "key37": "2HuQjWmJbs7bZzP1uGbnvHn9XfTheRZKb8gjiNa6AyMvvUHQkcTRw8gXVL9Wf2tec7vhpJJdSesUY2jZ9YvX3aFB",
  "key38": "3871YfZ259C5xEcsxMLkjbZwf2GGAizjj6dVPo6LrxDyvnkgW8BjY9kxvQR4UagKCfxCy9GbC2n72KRYhDSsL9iE",
  "key39": "4LqLWoJmg2mwjqiKdzQg5SDfAdrCJBMGC7oHb4ZEuMDqBUEgN3bVW662SiFCavau3jctbYoPNuhTKWMz9vqaAtsv",
  "key40": "4qgdQrTpKd7GpMEtCLbc8Z4pUofMHRvSX6MmMqFMP3YYP3qaQg7oVSR8Pt3xfV62Eh1cmyt3A2f3VJPYsDmXgzZa",
  "key41": "5UxPzP66ynHPgQVBJtYbPbwkMSMFkizCBtRphqXWyRe9NCgBk66v7jD3A5QKs4G6iZSMmNNyriqUSyghmmuwCtDL"
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
