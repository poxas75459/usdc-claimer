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
    "4snjYbHf7RAsrUibJbPfeHbUZzEA4YvV19FsLMwCfWT2CrtAJwC3MexnJuUebc4npT9S5WLnRuyzkxNn1P5S9NdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjyzSxxcPxi1Xuf2HRFDAoXBjUvanpXHYsv3d27SVmi5hjRZcSWyR4aFKL9nCbZVvCom9v1JjU3Ppr82JLuwBhv",
  "key1": "4dRNjNNwUgGfqbYLZGUg9oF76ZUReaDoXB981jToCYYAPGonqHGbz9QUdKQVKGfdfhrwEmg85JaDxArVnuwdYcFP",
  "key2": "3H37LUff5pZXqM6EHm81csTMKbHurAdujizHa3bSjq6mVHiUzkDUt1M4XdYfrB7WTPScfX1qiVfsx24GHMnEJ1kP",
  "key3": "4JAjzsy8a7hUHRi6DGDNVbVzJ9eVDMknyUo9oyFcXeRoVPJq75KBPFgRR8nymjGLJzMJdunQTKSoGdYF77WUSyWy",
  "key4": "4AQmB1bsXrxxywQpJvjhxYGPu9zR4zHJP16U1hAV7y1NVSN22LGEtFgxRjUWjgqwmaQMDUzruyxWomoFZ8N576BP",
  "key5": "Cu7svNHk6h8D5umGDZxNFq1NMAfg5pMMfANAeLtRKfy9NDpv9HWJdsapBJhP6to6vTf6QsscFWyQciotzW6H2SZ",
  "key6": "2eo6QvcnGZ2o2XBVu7ndDsxoDULt4TedkVWjtSbikshsqhxYHTnD43LBmcLLsFKg8nhCiTq5jXZHYNciXPAHqhXx",
  "key7": "2Ww1GHUFpVYBymuSdiZ1XgbYngvhvytEBdahBjZrBK3vHmx6u3Nmj1BDu9euNaFmCpWWhkUwDAUnNPzKMU9dpSFi",
  "key8": "4HBAdPjVvqXkfaZjA7eKxZFSVMW3uKYQ2CSUyzvzipctwANtqogJXhb3srHRo7QAbn2ASpo3mchY9dTUkgi5Y4wQ",
  "key9": "3aqym8q3uLmBR1wY5TSKwcizLBPDjtWd8vBNmTKis4jByJCZhLx42XPznWfwAvRBTaqFkR9ar6K6HyKwWEpj9fEe",
  "key10": "2UGr6YA7rHHMGTPAgw1vBcBjH9XWivzRY5PyRRqETJdqMvmWuunPh6kXos6vg9Rv1TrbQGNvFdo7Q2P6eWo3Pgta",
  "key11": "NvBZMdpwSrhorCUXjg2AhAQtNLFQu86yuRgM24kWe55RuqJT2DEf4JeYHhonpDqZZz2PbSJuXnDHqiNj6A638xD",
  "key12": "2TkvTokSNzkr2NpadGaWEaysLca3JgHDYR1Ugrv8dFBQyV2Yut4tnA2pVNNfbfjUh1pJhWn2t2mmT6XNHbteiLMs",
  "key13": "5sQzRBwgbAL4fBmyHZmrapnCSqZ5xRCDaQXkHMsYr32F4tHxrEsmSpHMi9sLji1p8kuQdY9xmW6KvfQu3Udx4DyU",
  "key14": "4vBAgaugVHzMmd9aE2VxQ7WADkW7K5jX3KC2xFNi9Mc2MVDphcLHFzEg6vN3UxNZtuceJqcLCWykYRt75arsd7bt",
  "key15": "2P8wKZ98gwFanRuMsKZEzfphFYsXdmqfT9cQJc3TR25TUSdPEUxM2Nj3HFBcFtsNWR1PtpacnmFXvtPwUMujXhoi",
  "key16": "2dDYEUDuaSE5Xc2H651ZdM8b1DhYo4hWBkYUxctP7grjz5PAy2Q5Q1o7kJ2K1xoybe8uNouJQ7G4GxhZ14Zrc2Tj",
  "key17": "5VKx8zL6KYcdB44rJQ5x19z4ipwr4dbaRf4zKNonpVMnoD2wWFdqHW1Gc2BE8BeDBQcSK4J7rsDnAxmYeRkJ4ihq",
  "key18": "39ZDb7RviTiTXC6VjXyxygBzGPgpA4wRh9To6Vggv2YGEyZwcfmBU2en8vAzjFhztmQY4TzAEpwd5oyGed3dJ79i",
  "key19": "oX1EDDrzfyEzQYm2Y2Ejwu8eKUD3EhihyvJTD1A6C7nuBA56M6X5dUTFbfehfYanyGonRv8zrYB4WFcv8LiPpUs",
  "key20": "5xQtUe3k2M7NYbqZ9db4gM3r7QTBie9GDdJjBKzSVe7PvXaVeemuhG2ZVyrxGwMQDxXaUydUhHtWktpiwt3Ev9uv",
  "key21": "5YVgfGftN67aUTxSKtNfEC1nWxFxGUXgcdwhRBgXWJiUaqwQRm9dAfcpkYvfM1wFsxextkDuWbvjXF1WHPhS5un8",
  "key22": "52wRP3aPicwR8Pa95ygSHG2Gf2Pf27pPsrDHQXEbXUF7qdJLMfce8D4Gtuow7bkWwZ4oVdpFjZPfHGcRgd5a84nf",
  "key23": "ToQJfSEaRXXXTRRUArbmL4Heg3BnTmTstpTgYbBivdbRcw3j1HsGHV9EQMekwgujMuXfRuNEiAs5M9kJzCSp455",
  "key24": "n185xSCdHYWXWTdWi71uHAA2jM8RZKMjJNbJkRPBppsyE26woENCsfDH8gtkH6wVsUbDg2YyHraUuHKuARNSYye",
  "key25": "3Brd3BnAZhBABLezRAJXqLFENnMH9F7Ry7mkNZ8WnZVvbSDStjrb1CPBf3XAc1d4AVQgBMBTcD3mxLC2dW3S8Cpu",
  "key26": "5bmjf7zKSRU2sL5Nd1YTnoyh22s7i41F3vRTpKXuAKj4VP1cKuNPTrNdoeCv5M3aQDCewCLMNqdLzTXm8FE2jPDh",
  "key27": "2G3UPpaN7LQvUNsAwurLGZG3xzPHqjsYn51nw1Lc7zjCRQ56FwMnbWf5JW5LvBApk14wej9qy3tk6v67KEQU4suC",
  "key28": "5YWH7146NPgwxgNqCYkFVWXeHHXMbKEVcHwT69RdkHxmEgZB4LeGBQPZmw3hXKs7BJJREh7CwsTBjesFwfUfKr6L",
  "key29": "5Zj83ZH6r6NhAjHE59ktpgKC6CvqLcyE3UTH8cJ8W5oRUdMB8P2JDrh9pbVaCRZjx9LVR2gKqgwApny7FgeYC7Zi",
  "key30": "3X73vAuMc62Pdskky7g4yxvorEbToxQ8gXmFYnJLqDctYNLYgZXGwsyoPtfG4PxPRE61ypgiFUcjnW9d6xhsuxbA",
  "key31": "xjvfe9CtBqpbkM4Mn29UkqQZ7qyZwuAM8iXMBvjubwT5UhmydqCgdCp6omCoEKAAeHuHMPXKoM9CA5iiT7V6JEB",
  "key32": "3U35FBgBXMezm8St2NdVZR4WLEinyVEtQ6M6LMbs67BNudkL4WDg97DFyTUvNccbyfFUACBMcR6TxAQ3YzQYMpCX",
  "key33": "URvTo4fuHWq37zfT4fauQz3a3U5B2ATToCYoGctNmM7VyTZAgHJYrf2npC8c2rudEa48bfnW3wr3RR2SXuFc8Gg",
  "key34": "2sLqrvVqBH74MtKz6Dv3vJNeiZq7RMQpqPvyJxUMKU7HjGBNcxA951Qw9rZjMyGD8yrFcedrMnNh2BmbirkjpEj4",
  "key35": "2Yjg1hpXLgryNTWL1kmJyFyztgcBPCULbsnxv9MnM8KnXSeDndVp1v3ezbaZX6Z9WfAL479q86UUaa4CzrVZ3rwB",
  "key36": "JZ1eYemxDZCsKE8DbGGKh1FhXhXLQaSxicUZaKyRJU2xmKr9eDKX6Vm4bJV9rj2mFkE65afm8Nj3yNztgb26CfH",
  "key37": "31yH8AmjmGm7FwMoF9qVzaxK8x26egMefkmVBGnp1FChhijDUNBwjFDj61sMXCoEDyH8gqx3Wpo49WnfViMb1hBz",
  "key38": "4FXBj2YLH3PXVBaLZv8FkCmwhrhETQE5rn8izqrL4MHsnzq5HoZDiMNsY7fxjbwy4UrVZkL7aPG1KKrTSnbqHA4e",
  "key39": "HamL5SH2fp2b9FNhkYRJCKeTk4uckJywYUSmShFcJbxng8RhFVPeGYD4zpAG3tkCzdjCBVXTe8phJgNfA6fLnjJ",
  "key40": "2PxVKMtacqR8ZhZmaE4jSaMAJ9Q5CXJDbbEEprL1tc1MdF384QtxECAyhMT5tnAVubUQB3LetRBZdNn4jVFgfxVw",
  "key41": "2qqWG5kui4G4EtLxoiiQecUoYGJek7RjuFDvH9JHArSbFbVZihXP3gYYzeuGVbo12fdyRxZayJ7qfhxjMYvkaCDb",
  "key42": "3S4EL4KRnjmX38UXUsbsWS7Mh5hnVLiMRmswGxyYD5PwYR1QmuQU4bR81jMcppP2FKMRbhtwmFBd1JG55D5Ssh4D",
  "key43": "A6TdLiShgPCh9XrqnvEk8ViJDhPRvwdUf74Gg11QhWbECCznAVSKTZkYK45kEeguj1s9sWrMbHBSFY3GMPy11su"
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
