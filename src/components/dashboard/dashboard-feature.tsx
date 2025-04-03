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
    "3HkfTQtjxnZK9f1fpTN7E8JXxxv9DrGdcRevRFRecK9DpVsMVdWMfc6bBfgh6XBnyxZ2QThsBpaLGiibCpFZ7Cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pR4qoWXNwv4m7YVu7VxyzHHRAKE7wJN1QiGKEjRuCEJz5Umo8bhCpuyUbud9qsokYQY5SZQXfMynSiKxEZGcdT3",
  "key1": "4JS2qUUucW8oEkhbkCEcNX1r6ium25v9UR5mLoHxHniZ2f2TNW3WB26nx4H8RQrg2kq7jJi4tZqh9qxX1nYsgKG",
  "key2": "4vJS8st5bfTaEAeHJANc18foFbdPzHXDoMZ34W2sRJBdYAnKZVNaVXige9r3XDyFUks1Zbhux3CuLKnm1YVPbEkq",
  "key3": "mq9rXYox99Cm6GJhBcx8ws69o9TWyCHfdKx68XAJeGm2ayn53mX9oKQjBTBNFsrLDw1Prh6Epsqz296xeRNeZcb",
  "key4": "63eLgivJuTgmyCSuqnFQNvot2atVf8FnQcNdeJB9Yb6DeTZEtRaVvXbm3yfGY8BPWrMs2vjZSnVtqbb8Hn9E16UT",
  "key5": "2KmohZdmT8kAMstQi9oftGD1DYrUL2T4bqu2wpB7SzDwNWjoUFdESRRZ27oZySZajxBFrXHqQEw75CwVTqfqFPNE",
  "key6": "5aoDvb9gVu4ndYksB1HmHpG7Y1ibYm7nDs5ppGf5SvEiNQhYq55d8UR93FmbSnUJkTfitgCxfVPVNcN87DTxFSj3",
  "key7": "4eGqtZfWhLsAhDaneEh2TB3mgPvzNX72n7aQN7tAJCEnWyn3GV4dra883kifyGRtPxh9x8tejVeRRnoBKDquHz2",
  "key8": "Zqm8oEYMYkh6CcGzgn9g2F4XkBuVcds4goRdYfuHLvsEHsbrrfTW1hpRbDpYCTuM8XuPVQSy4bqcYqHuCZDULqf",
  "key9": "4Ai1DNzPkGumfUy5Hoj8A3YZJESvdbfqLSK3Se5Pg2u8whuJvWCTKiv7y1b9g2A3danz5HqAucbnxFoCoY5zV3XN",
  "key10": "3UViiYSD8VCV35snzwPFSfQP2RLCrjfsPz1zLM63tJw9YcMZ4jeafrJVGPbVfL22hxaPeHKCNN2dxH7Pb3NbS5kS",
  "key11": "3CRUr7HF64Ei2hUJSHL4A7nBHAkc1PxFz3HKBVeXHkLzuvUPuPWVCqf7qs1om6qW9yPCeLw5JLbE81wn4os9rhHv",
  "key12": "2ZybA6phPc1xeuto3rvfWQsMgTprFAouWnjG5bbzcMBJXXraqYYxc89V15bZQAGHDHvp91TzeSzJsFFmTLAmBz5M",
  "key13": "5FiK5asoWrFKg2wEUfTWVuGpxm1ujydunnNStQEDwXTHmqpVmwFj3AyKRuxNgZNQv64nVxEHZXNPzzUhnhHARQBW",
  "key14": "59JMCnR1c6a3LvR1975Gj1TxobMuFzU1hGYuamXHaiYNMWXP1cE5NBEsJ8nBFgLeCsyJr1R5usu1pJQstVY7efvT",
  "key15": "53p9QeFNwCkS71feQuhmxKs77vUaSeakJSmb5i5PUNX4ZEjWDHgNNqFeiVVgyZkQ1GoCCF6mMhnWcBQxAP8b7Nao",
  "key16": "33PkzQxFywztrZYMeGfA6uxrXQ49EHKjLSQggGPLEW7F7ZHTv3RSCj2cmkNGu1UCYH3r6PmBQKYAMTVfZc91991m",
  "key17": "24Kmp3XkrMEJ4ZUkQ8QQYuw6ytjQBPzeXbpL9kCfWggEoczcy3Jn1B6NsEgfwXozVEBbv8KCNQcuTUcK3TMdDQNa",
  "key18": "3SPgNgJzQ7tEfSFBiUW6vHe4i3zSHVeHFLjwdYdzHj8kpeAx9iCdwkQqYZ1oWtLHfpMXxZJtBJEumwKhvnUKyhV1",
  "key19": "66gzsAYX2JDdNqq2P9nHMoUbmSoftjpiFchG5H9YMRZAr85bfd6n99d1FHuEmfMkuBZ9yU3sfdmQCVc7qeie4REt",
  "key20": "1KRjdFYDmMJauRyKuQ9dZaayoQauGs5u2osrdPuusgGUV21LhRVoGU6KrPJA5joR28zML7B9w9osVaco6foZz1u",
  "key21": "5WwrrQfApyiAt7fDEpDe99XWocPe2v76WETV2AepsaZQcncMZG8itW2fffgndFSmvuFr6hHw4cWTCwYqxUgSmCwP",
  "key22": "5BfPQ6UHA6GC36CCdjDJ2UJ1eQ3QHn44Ggib2ss8N45mnGbRyFDQr9bMAWbgizTDgJdf1zudAmxz2dM53gSBQ6zU",
  "key23": "5ouYKnaJLZGLo4WmqQD3g8quieP43XbjabzFAouXifAkLN1QqEMtRcVYszJjSzYHN3392QUMavDTp8WN4yvk2RNM",
  "key24": "5rCc5izrGP4ZqtFr7ZYDEfEh6zN4m6M2wpBckm4hYJmZDnPkztDUnEhiGT74jSnYXfGjBG6Urir4Vy9wiWsS5do5",
  "key25": "47Ea4nD2QmtV79jcA1rqxrZLZtELNVYDX5aQRcXCQzqDFN1k58xkXu4BU58t3UUAipHQb3HkH1UgVf8CYHciRxg5",
  "key26": "GxBrWQYrYHtz8zRwQwk4T4ztS4yM5rfcjLWhYdphDLL9WwN3e1QRR11VBJHGUEyaoeJjxoUk22SHbsSvdZMDwvw",
  "key27": "5z8n3FFiq1CLKgNcUEnQ1879poCz36NjRqutHPns7J192ethku6g1scZNU7eudN53pXDjfpN6HQQFDz24hRVhj9p",
  "key28": "4RQqjgbaQKJDW5TLRoq3JzY6u9xFq5NUp4fQdVPTcmapKVhHoHGbKqbqfYDzvsFpRbCUVuznTGZCvrFLU6N32Rbq",
  "key29": "5ET29n3jUNqBczWZApXhxSSPr8e9hCQRPvyg8vMB7zzzs7Bni7LDPx6UzEUHcEpgzumb7V2owYaX9xuxsV42Qo6s"
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
