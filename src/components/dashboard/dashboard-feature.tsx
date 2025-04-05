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
    "pJQfDaLGn7JLtyZ6ENs2ZfqssVauxxnLj5NJmhb6vRNa9bSbGzXWWpg2UnW1bBq6j2e6aofYFLkA5JANkuL7XTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ut2Sj1Jf1phdGhvabBqfTcTFGrxizmqQ6iiRHzLJAkEq7bvF6uBe6oVQbv2HiSVTXxDYQ4fMjiJEUtCLDdxrEtf",
  "key1": "5KYGa59iR7Mg2cKZ7QSok2kNguB8WSZjF89n7BZ3jTMkAop9c2gDjrTdwYuvDjdtZQnhRMdSMC74vKtmv12QxZLC",
  "key2": "2HLFWXLbaCKPmEG5pjAsMQVen9x1FCMZDLGHE4ZW18y7eKkXZgpLueybfDUgFDMXP5C8QYzZaNuZRqccQ1zUefp4",
  "key3": "48idA83QxFfgYqnF5ifTbiHMxHst5Ag6nwMuTHNQGSifoQZyL9QwMXyJrtUANaVdDUjQqBbwsbwbCTC82Jmu4L3R",
  "key4": "3edDeYkZr8WCvNMHTJ9JViZ9RPiND4Z4QvDWtsxSsHdyCyNGakmGCet118BaDMnuBbmTxD8JFu7AKkV9TaaGHwLZ",
  "key5": "2ZaEsJWhWUDxp6QwKUEnxu5pbavqgLFrdD3vSSe2GuHj35QWe9No93c3313wQ1CgchEsUPsziAxppfQk7LunaLwp",
  "key6": "5Ki1X2zrLbPCMqkcpWSta5Fy7NWtuxrWkTjkiQYRZLJMZArAY6aTmoXMdzGJ26RayDVHShzWWgQnMKizmmTSEcu6",
  "key7": "222VMjhnDSboTnArfo4fKBZ7AUdUjZ25GPfanU6JYPSChYKgr1hHm5UwCxWdqMcGJPxPLpFNacSS38VNLKnG3MSe",
  "key8": "iQi6ppeGEE1Du9YKVHfr9kRTy4otS4ju6eaSE3m5suwQooBEGKB5ZdC7ktKimATbgV8HG73fjWkftT2iHLuxXfS",
  "key9": "rugX4sJFTb9MxF4nr4pwmpY5wk1Hoe5xKajojmQ6oj9kEPo9n9rWQGNoWGP4uFgZ3r6FZPrjm6sCoB1EMidpCMf",
  "key10": "EuUFuqPFv6iKzdfiNk2Pu692LuTP2u79T6hcrzErZvVvuRDTUbKaWmMYVFL7fiCNn7K8q3EzV42c83p7V32vau7",
  "key11": "3qkkakPAeXgXswU2qvoWnJBoHzC1rfPCxsH6KgJrmgS1VJ4xrFdyJJYhaiGNbCxqqWQLjso1A2jaMJQjcqSkNGFp",
  "key12": "3S8UsHawFU36MVzyTZ129ucBYGPxPVu9wrKL9ohxpKszBDJH8MuzBaAeJ5arhLFSoPVMzww1bWM58bW8axqFqyZ",
  "key13": "4B8CtRgP8FEf6e8KmbHRhisWTp6uYSAT7nSPJeorCRFMVrUdUj51t6hUZwJhjamTzBFLgfHAvHEYgVzwouCPLZ8x",
  "key14": "WhNfopxZVh9bZYChXh58cmzYpvcbk1JuD9EyaXYexr1hbM8fa5X9FkCHiushjes9TQvTosrZ16LzE6JmQHE5eCz",
  "key15": "4ZXUnFaWpjJkYaj4XLpakUSecZ4Dy3ay9aGNseVZS1Um8zXwBDXFb3iKo6aDxyu2eSGMcTE4ZNWfbLCtxMtxYTBX",
  "key16": "RG4LEMj1wUVvSsmp8FCKQEVsT5hiKXkhdZMmvNcP522kTTAEAdXnjChfcMCUG9ho9gQxhZZwq3mv8C94t6KEZwH",
  "key17": "4ftHGYPwEtwPydPTthnFE1zTf8S7ojK99PZWMdXrVTP6yjzCLyVsh6XFCaur2WhYe8d7jdH2d34o7g6nXBrH13ck",
  "key18": "53z2WnwQaQJHqMhXSZ3Gz7L1mRf2R2LHQQ3k44z27iTvEBrM3e1sWMNG16iQERHdgV4XdZnY48636yyyApfS9Tyx",
  "key19": "45mP6TrKzPaQ3duSmdjwMnh9hCCvfEqvyhfGJXYEre77C36NR8W94ASNNSrsbkFHDBSNcbEMsHt2nkS7wJMoauJL",
  "key20": "3Nn3YEGFAts3bJc3EL6QwP5RvdzkdafFauQbWFV3WeLs8AqPEbRvfTYTUiCH7pvxzMqQQ3ciSDXDjoHZL4VB5Cjj",
  "key21": "2pSe1GhLMUHdfxDAjThA9Ddyoj2RqYXzDJMShyfYHR8LcPyj6FAaMZ1W2RhHJq8spaxciFTT6P2BCZpTYUaLG4Nb",
  "key22": "DW4J3C5ddwe5Dq28PxJsgrZ4SWfFb6VS3oinbpZTzEdYMXpJxjez6V9eSDRLNQeRjnoCTtH2uBzXexfzo45NszB",
  "key23": "667hZDom7Zvv1SL5PKseE1TKBBMhDBmEQ4piL5RB7Zf7RZ6Lm2tEgsp1eqA6oywyb7hXaNsGifKAj8hHVACvXyTx",
  "key24": "2D8etynYzBvyNaC9NejqZhCdAV5bofiH3DtkBtPsHS8khenqRD1aiY1nCwzvwta6EABELAcWDeeZVTcNdNsTjAR5",
  "key25": "1KTNPSr8aAGndpsr71xWbDZByGULpXPPktwK2tnLwLyN36bC355JXAwFv4XKSVVFYbkm6QWBeXxjz6m4H2DJ8Ea"
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
