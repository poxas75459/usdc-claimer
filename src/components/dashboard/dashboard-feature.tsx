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
    "2mcja6zMadPqVmHGJfPGMZJH6MTFeEDxeZbU2ffsvQJFLw5bBANhtFt8v6UZsxzmsoguv6L2BrN3dE3wM2Yc6GJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "95D9FNciqgJQfdemTF1cEpb46KsXcyo35kT2ZRSKxcDzof5rfSW2zHPHXrFHrECTRkiLduUjmFoFBECgqS8PcGh",
  "key1": "3Mm84wsuEpdJkrMLJyDFJjiSBanZVPc2jbe6zhWfyxwp798cp1sBLwf5suTyLcC4RmCJAEDcqNzrXrvMo8fW2YLw",
  "key2": "3sbgExWpcYLh19r3Ky9tAT7c7AwmogQC59hNrgCbybYPD6DUyE7LPtuEYpD76nEU5vx8QrfNVMfUPJ7ec6XSVknz",
  "key3": "457M9hMnodgZ1kKuP6JKEzqGNAKWMjpRJpeAk9koNcFbV2n3MhVL3yydPPRXkdMhrarUy5TFk8ygyYe86swg4ibF",
  "key4": "5LJkCVYirSBQmeePwFDBfUzWm3SQGxgkcpb4QrXXYZdKdWW2nSASSoKhM4c5QVAv86Z8DaReSHVP5wgQ6vtHA9Hn",
  "key5": "9EqXwjCQLBLPET5uzmTCYD3gjGcqtXTeACKeRzpoSN9t7vVywmDrfUyMcvXvRVZLEM4zFrfHLLZwhEaTM2ReyCW",
  "key6": "7tTmPPBWdWk9rQzR1V44K4uMQh8Eh4j5cgV6LPJVYpakM6mz1CQ5RRgmQfm5YopVDpQRHF7FkmffFtPrMP3YXdt",
  "key7": "2Z7S7pLG3HQtwGh7S8Tujm1Qum8RT5AH3so18zYN1eHgSAMHgq8JgYH6jwux3UUiybWaNUWwo6sQxHwbDxkKMQyp",
  "key8": "4noccctfEAFH8Cz9oexLVakCFUKP4seqBs6a9FuoFNioZVKrTFhNBXRJVZ3kRLJUG9wT2fX7BKAP1JJsvCGN7ZgS",
  "key9": "5CybZ8q1o54jj8ZLD8wdNH25B1utgr4agCUHADSSH1xJNRyH2eZEwAKCkBL1VHMg7Ti5e8dQfHJq26RWZnvsuumm",
  "key10": "3kFBPeLhRSTxLG9hewpbamyZuGH7H9HGrEMkjMi6aEzZSyEbKcDprsGyqKcjERtrZtxhtUfY2LUCYpc1BiNYcDSZ",
  "key11": "45A3e55jZDh4D34qu493gZPcsFUc972qcURvchkuEmmQVCCiSdAa16uEyYYYthVCW4PLjGenjySBXG3rfBkc7oG8",
  "key12": "3MmtUnZY5wMKzxKWnDbZSKJAnLsEfkKLeec4NXptgjeuAiAh8LrQZAxzraLxr8yMGmYmLYZ9aRV23Vqm3KJu4fBL",
  "key13": "2YNjgUJBWANsFbDewQq2XDNPEABAohKKskTdhALgyPGXU4cEjkaKRPwSrZkEujbbY4LmuXPam9MMbKRNtYpMBc6a",
  "key14": "2cqJTqbsFnX3QQG2jvpjNcQv6NFKZRrFao9TFpq6VH8kfzzQHbuhxevWr3F29HV71RECEzS4dTtnrwzHKaZqW6Nj",
  "key15": "55JXLiH22BaV4MsUzki6j6ThWw5rR8pGdxSmh3H5tywzogcGLiEt65DUkZCqPo6jDowCNWWN9Hy36crB9TiXbZBV",
  "key16": "61w8DcTS8RAPSZurmAekkKrGurn3qYiQeaVAaGcdMymNEY53sWkGjLNA2sYN4K2GmpfUJWjkBsTcgb1yV2xeZ8FV",
  "key17": "mHRLqwdpyF3zhWLT6zh5WHS6RPSFvDR1ut9c4VLyKFfTxooHoGqFjCRFT4kPz55yYiyK2wy2eWXF2CSeYM2cNS2",
  "key18": "22kYFyCj8788x4Rp1eeqDhdCfGKWv4Pr4TZr5AhARaRPpjy1zAtYfN9n6zgjif2MFVZ8TNLVaKgbwj3KZivdWVgv",
  "key19": "fgXoRPiNW9tEnmZ74H3qcAh7mFAMtkFqLbxS9KCVZh6SU5aq94kZHWgggcMYrBYXjryFAuAVHA8ZNLaKwqonxEW",
  "key20": "3M2e4K5B7z5qyrDN3CtpwrX5d2eq129L25FoYF172sEaaGNg8bU8pCX98QPz17kdsWP82gLVQX3LUZhrowCQ58of",
  "key21": "2t16YA7LTFKEfhDif3cGfdcb7tJMWEVYSD3GynWLhoB5t5hrJVehJw3tb93t82TxxtgAjeaR8tQJFasYW4BKwgJU",
  "key22": "567QxYNhxMdSKyotLEx7xD4o1yNYfL7YJz9ygrgGMr5ou1g25UUrhnsfpBA8zWJmyLDXuPmG8g9DbpyLbGTScpYt",
  "key23": "3CWXaE7bM2jp8KNFy1msDtPxVZXvu6UeKQojKaECGUHSJb4y62FNA5ncRMYrKdm9Ds98oBbuwTete7Zm3m8QSre6",
  "key24": "2QtzdnJSgdaWGQS55JVzRCHZFxPhbnUJgSJ3LN3AT1R1cyHMg3vAhH33ZjzgU42M2zTTDEjd7h2KLmxobSxQ2H2m",
  "key25": "5p3jhpxSvBytdiZFonVFcJuJ6hhJqgM3yztEfABribYav82VxagHKZaWr7cPTLajMQbDarrUpgv1gCMgg9fuQFVc",
  "key26": "3fe8cWLuBzp4Jg6gGXPHmJKZGS9CHcNaZjoc7qKg4AnNmm8SPj1Ne7QowkevnpcTsVvw5yfLtf1VGCKbwZiTE6HD",
  "key27": "4hEt9E9VZP64US1woZp5jfqX8k2Lpz1toEXe6bbxTZwddj39yzAniZgBD2mwCbjd4xZ1Nj9NgFy5STtQMLbHJaG7",
  "key28": "5pc7NTsm1brcL8Zcf1iVdT7Y7Amv14f8JyTFBe5NJn6Ysep9TqSPkQxTEpuG9VnZ2hpoDBKVUCj44uYgy2U74NYX",
  "key29": "2FsjB99ewQVxgsm9wgEwV7mPmikWnAdMiptFnyYWemn2gVtkdT2bBHn1UAsEf126esxeYJxumQvF5yXdAdGYiMTd",
  "key30": "4rKyakb3m5QxXvFvyr5XJunbG6KNZ92eeG1GSwC48rsz9YfcUs9q6MjiwWHZRUAdzGbUG3S9AwYsNeRSZymkB4o6",
  "key31": "2yMaRktmk6NNUxbyuEUQghbFV247FuihWw6tAStoX75TZMCSo7PnYzdZcCdx6kWt7SC2LN887yBTaZVHJCsU3mV5",
  "key32": "532JLPaNWd2hmwvhFu7YtCJLyMS7TXHyzGWv52dvA7R33SiNUK4KYkU4tvPrWpXg1i9Ch8iuknMGRFjkzi8FaeCq",
  "key33": "5Q8ApeGSBMZBQmDQmFtSGubqhshsTvL1i2NLmCrsdbFs2aWHQaHN4o4i4j5KFt3t7A6DHT1aUJZ39FwRHx8dzhUL",
  "key34": "2PQW2pvEiiqTf3uUnuFMcKN532kthF8s5PRPwMa21TVMMbms1NVYCpgkLNPKE5iXj3Lfdfth34nTDYN74FVTfk7b",
  "key35": "387cyR4iez26T7YFCZTP7SuzYyLXyW5Qv4E6K1ejmXxJ4Qm1esC1pksKtQdQxjv1cdpnT3hYs86kVCKSpunYhjzo",
  "key36": "4jQmVPs7M84bGacxLUoTMfvthTFYhXonHjExG2i4GzuETrQuect4QNi6WDBojKFTaohKPsynoMtaztyE11RVheoZ",
  "key37": "5YSfD8KQqwWJ8CX1jizYcPtCDiY7cvamGJkGGt6wzB75Pnvin2EnKHNnfM5eKBYV4BKzEadd8vj3mvBtsDYk9L4q",
  "key38": "DsF1tJagYTgEj5XuiQTzuaUiBMgK2sAr5vjbZFYDwNnY6vyVHHgxcSgzNJ5cLfPV4TQrzkb9YqgbuvDYcLCGScS",
  "key39": "2S8f724z9z2oWGYsjH9jC9S4rfBgnPtchDiYxZdVSTDYoLPWpTddzSBcG6fbqTieCpeb34vDaznA6uAgLYc2ppv3"
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
