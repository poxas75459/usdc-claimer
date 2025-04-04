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
    "5CJwxJQEf9beUu9aXMP876AsbSxrBK5DS81WN1QpkfbcEVT2zxwvsevjseyj4DcktvEyuR1ZZTEfH8fVYcjAzaev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DMwFHZqcgSXnTZsU9H9gvMCmLWWGQEogHiQyk8SuHydrYFVcxwScyoAnR9t2UQqxzuHVRcmVpK2zrTX9gKyvmE8",
  "key1": "3zZzsM1dJGGq2mhSJFmoTVtR89jgadLGcTeMAo7fJ5wNohA4WdpzeXmGmfNNVg5fGKWvX6V9WFEHPfhf4CaeBJDm",
  "key2": "46bFuccs8pnQojo147arVXse4MAAiHzS2ntsBVCt6zXpEBzpEj3PHACXjSXeNdWKSv5VFi9GYT2TNpnYE5Po9ciV",
  "key3": "5ZFpUshSCp3Bw7pmJ3BDRTpjYFpmDNLqppdN7U5iTSQeUPyemZWdbfSAzK1xDPUFGpVdEUHDyBnhPxJS2yVKqjPa",
  "key4": "3CVuACSyF3ASwyFcVEWU8HFQ8xqJ9NSfbyXCCF5YHg47vhUzbH97cmszM5JfgZFqGQaNB5jK8o1ZbPQVvQyHtTaH",
  "key5": "4X6A9UpUQyDWcXR4PsqQznh539ToVC7SQ1KEqfU2NojLhpkDjfo9e76WyHj5wwpt1HDkkeuNJ5q1PXqu2dHWqPS3",
  "key6": "5DvKtKBNrRv7ZSMxFFCMQuuWyJcMpTFJ7RaG7Zd7ZpRm8gRnW3pa5su2YPZUHxFEBJzy1625bbvcCoCsBR89DYM4",
  "key7": "3BdyjTJhTXhZ2MzRtJaDj1eKrDEiYN62anae9UgWnHQqVd3B28CmVuh9fTE8QkyRf7HaKpLx2JQFmyya6A55bmXz",
  "key8": "35Rvzh1AJzXiQ5ADZNSi8ibnM8aa4rWbrDkFCnfghRavS77tkohNKjMHomgrqNNz2dd2MhJYu8kbHQNYLhKRDz4r",
  "key9": "52UrF6GqPJyd1NKoaPr6uKVffPZV66MzLquz8yar8VZ8JrT3yZnjFFePtwygWeydgGhj1GwjqrfnKBPeVxwDHUJf",
  "key10": "5pHPSbSRtKNnVGHM7Pg7oPKFf7ifCAeMwkZXWf24QjNzNVcYMSBG9PnBPB32XRfhM5pxcw3aCgxcxYbmfyH4Hd3k",
  "key11": "2dPU3xZWqdN5oEDkc73Vg5UdehYDLUqjaUcvmip42EwupYMSzT7WTiHmB1FaKJNhUgH8fRuY715EwNH9dLvN2rP5",
  "key12": "3Pyk2qFELy4Hi12F7S4UazszdGKyJSFnrV1YHWcXHN6ndy8ZA8Bq3WqDbMiUk665VCHhmoNLKfjZknwHNxEYCiRF",
  "key13": "4GBuAogzuEWh4U1bT5oq7eTg8iZijroEUZZMuVh3bbDKTzEpjmHYsbu84jiNmeLKjs1CRs6t8ohv9BBz5igcPVYQ",
  "key14": "5Xz8fpimv2GqgDbDPtF3wszku4uy4LwcyyWEnNC8mU3R2NTv9ouwGTHaNmz56mpJA2Sm4wxLzCBsEd3ZYYKAr6d7",
  "key15": "5nbY5Gi3Wp1WD1W1MyJfGSaDeM56zNx541M6S9WayJ1fosi2jjUeKaj2qMDFsUkQFVagXEs2LRRE4bjyFPVsBKsN",
  "key16": "NizNB9EK9t6QjCk1PsoVZmHGSRQASxuN2RLzbdg4WjhsEeRs8toVTNHgP4NnPpMpxr5Fd6xL4ZBYK2QZbNB4dQN",
  "key17": "HYhq3sqT9mvYqLUNGtB7GGmABcuBUmzXka6tWNfaqe5UJhz7gXiC2cudumCs51Xkm4kXaykJVyt9k8tJ8KkswWV",
  "key18": "5Ygxik2qC2xwd5ekjqeyhes47SpABdJA17b4tLwYAcXWibYXemf7Fi2twqgaDraL8U6PwzwqFGYtdYdzVnHFWKff",
  "key19": "2bkqfYse1BWpjazoNytFq6hkZgFX5vLd38tbXX3zqEmicxm9BqN3bohKgwfg84gepchKM26bnzvFJo4jwwZPG1px",
  "key20": "4dNBhBVgFcV7i9t23VH31N1s1dHsKyxoM3YmRDxj2aT7FGmS5nn6gYSJBmmQuz7edijr2VoqYsYyejYJjEfbZJ4z",
  "key21": "5L7JvyReXAHSDVYkUm21NnBqB47kmDYqRb8y3xg2f7DUp4gLb4F8j6822XvNQ1YRBSAaB6dxWEVUXLmKsb4FvYBE",
  "key22": "eDwbNow8ptVdzFzjV5P5hDVaC1kFEey6gT6GnzfRXyzx9NyVKyArYhHbPB4ZqCLL5VNHceRnRa2qrCPPGsfBfk7",
  "key23": "3a5jK9TE2BQ9uyzV1PUyNrVbUJGr2xBcN9abWiPGyvHzauDFhgQj1sskqVmSsdsha4FQ35pKdy2RfjmsGRnXmWNS",
  "key24": "51KLJteNPE9EYHTJ1T45WaFEC3W7uo2XjViHXbsMHRrNd6QnWPKYv5bojadhQHoWav4zrr8prhechtRXX16AdXDj",
  "key25": "fgULh8o3KfgTfbDaoRj1dkt6fhG1J7S42P15p1zGwaZEsAi4v5WGeyzVYzJ22oEidYAHM2s3pVf37cnPj1KsVtY",
  "key26": "5XkYX5CM2Xn1xiZLn3spsvZq4CqaRBcFS4nJAwyCNeug19KwGWvB3QhnffpuawZmP7bzgPGzHe4iFsMQiFMumWPS",
  "key27": "3gBSXE1LbnpncY63Aqg97F1efME166Hg34BAmDtRsitHHfXEYA7daeCF8DNH1UX1dx4anLm71LBtkEiTED8AKquq",
  "key28": "4DzrcJos1gWAFgSwQkA59JtBxBQ2SAus9PrYN1i4oWYfbpSZktzEAKbqbuZR6sRCJjrDwWmA7EbiC8uobuwNy89E",
  "key29": "2vb2JH9rGT1J6W4119kBkfZoazJNgjEVqzh4jccCNKAQxPcdkJ7JhnLdAhRsavuF1wia6cALFWUZwCWDMmLrCa5e",
  "key30": "3j91YiQ15wk17rQtaDorVQk5HE4pps3XRMboYMBpQDHcyY8UWCYZvxFSDwPy8pNXWnFuCabYfdYtez6JjMwR4Mne",
  "key31": "49Ri7MmVDGKsBf1kgMCp6ne66qmYqZXmCWnM9PyfCEfnoqVNNgTMsML379xpYebzYiCmVwVYfHxGNrL8PYNDXhQs",
  "key32": "3xzJyFkQQM2g6cJVi4w69pQAnERR5XqJhpWRGhyX9KM5kBNAWortqXc3PtAkUwmQqhWWeZa49aAGLhsf8FaTwF46",
  "key33": "3eDkNZ8bTSnDKQUVy9x4SCKY1Mp9hhFTysKbrwCAXfdegETDdVRTV8KCF3hB4NYSWki4eytS3KvuMLuEa4RyxLPP",
  "key34": "4uBKoRWErP9KnbeRHk65t4MMtcmTAaa63gcNxCA427PiWL5KFqcdjiQMWoqUaDPpoE3C2LEnLbDtqKLz6bYpGr11",
  "key35": "5ywreQZ8XW9EN1LUWUgr8edxdvM6dZ21LpBy4f432HQ3NynvdvRhPP3HvQ6CUtvVUWXpgQRE9s7NtLctHEqxoVtx",
  "key36": "2dHBzF2WbAbNzhpVwjdKvXdpNaDWVBMLv7uB5pZFGc8caMdfpCMRLyuUtdEHfTyQhUKuSn4TA41dCZ2ey1fuVmau",
  "key37": "6fVVPoWdvMdkP8ki6B7ejPVJdKyuzU5VnyHLadCibuGXWz8Su4ar4FWSCxC99PCUNULDFDWt4J2Ez2vPxmmoKXx",
  "key38": "23h7ksnWFDUvdz3Zvch62zWspA2mxBLixHEN48sqP1qTJ7iEJ7PnQweXkJJypDMYhguYVAtwk2Y8hGtevcoAuwW8",
  "key39": "3QrPemL3k1QqnRYk51b4mLG3jdXJXt4pbP3e7MBSiM7N2whJGyzUQM6ofsHoeroAhyYFFLkWhPyqD1ZceRv3uQ9H",
  "key40": "5j7S4Jikvyp27iHsDUhjBmmUTZbNUTQxNmqFu7caKc4VMUfyKc7wsWtRVk9L667XZY9AkNWChiC6JxE9y5tfFM2W",
  "key41": "3RWVMQGM5UaHpyehgDTa1NQiWARyjNmVNURXwaXJP6VxYQhb61rsQvMbzj7iSAQdi3zgArk4XDTxFKEutaoAb7pb",
  "key42": "2u4mVamJLPFfCBXeoDhFe47UKBjWWQjZX1CfiZYExHThgDnv4KyuPAHsRS49WJRjDASVqZg4CXgMd2UejVhQAHwC",
  "key43": "48H4iYofuhpfpMJ1j3kHo5UkAZJtr4vTYyaNMi7D8hLr8z3jzuTsPZNMc1EaGrqRoa7vzrj9Q1Z9KTm4uk68CgtE",
  "key44": "sqfyhpkK8WnVyohCPwQZcuoCtz3F7nnYCKHqzH8KvdvuBTrdsaatAXGTqqSBRwagPpiksqrGajCy8bQxohtxGaf",
  "key45": "4vbBFagsYYw8m3GXaorEt9kEFQSQeYqEvHALewG4Siy5yNXdKn1cBVSFGMBApTtYvm39GYAyfEoNvKwARSDW6Cdf",
  "key46": "MxRFirMYjWQFytMN2dTmYiWHHhwDfimwKuViCCJBbtf9RvvXJ6bske4EDQs147LAKu5QBqdkfWCpFQVjMwzjifQ",
  "key47": "GMTZB8mfqV1VTiHLadLzGocGnhpt3sbBUndxdYzVpb89HuUC3ykcPmTXU1ZjuebQ1xYX2e922pzM72MweKdp86q"
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
