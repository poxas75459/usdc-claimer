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
    "25MZHBvZk627ZJKJXKBnbpKq3P4qdT5YA8Fgn668HxnvGv9PE7hu3MWqh3jKBEmSfcYTpZxcGpKkHENcoLQxZNTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z1nPMgqvX4RkXGG2RfmgZztNG6PXJriW1ey6Hk5NxhQ4Q2PZx8d3sjADChPQPcFiw26C2i3bcHBoaeEiepABxA6",
  "key1": "2DTwpnUyQ8KQJSBm8yxAcZn8D855ifgr2z4nsLz7TieYXoJwEDM7n6QBQDBRKsWuSRibLRGfoq3ooiMubqiUG1br",
  "key2": "4C9u78GU1PiHoQtLPdn9jsd3DZPLVSj8c2dPYe77azj7p8Wko7R3bJ3Y6TVMpXn91vKqVfLamLAQ2hhoCHgFbMY5",
  "key3": "4GdJkv3HSBPDkBzL9K1tzFD8vYVafzrwchjGP2HAzUV3WuF84durCv8CQthCRoxkQBMib7RRVKco49LdyyNaVadB",
  "key4": "58RVx2v3EVfwDMmusDYuCTg65KSLamVyiCaZsWobBwcixRw8JtC5U27aENoEJ2Um9H5vJRuR8Es4DpCAdmPRmCNf",
  "key5": "4tQeEg3eUtKosc3n22V2easorqpN6SeWmLknjidREaZ3HxZjpB9ypSJNywhMemQj5SwjqvSHXN6ceYjnD3oYVtVU",
  "key6": "4a8qvzUucRdqapcLUCmLax2osx8QkQRgY1aTyxbkavb2SPymK3ASgtprMsGsi3eYkrBvoQbtGsHpsfgBvcD8Hf5J",
  "key7": "5BC1FrxbrvSkpZmw5FgPMHtJ16emfXDH28UPYeT2Sco6K7qkjcKRv47nTCAAypjubbg9goCMGhDyrucYfsnZY5Gr",
  "key8": "2J8mUjHUNgTj1K1tCopLPw48HGRG6KbkGHAaVrBi5CKT1S28kgDkQqj8NvGqW4HsMnse4XShUxGrDA2wEZN7BdbF",
  "key9": "49txPka63USTAWg2MbkCj5stYERTgF4PGL9ReqftTtirbzyExLubyxnBmds25yTGzBGmt6GqDFw1jomFeN3Matj3",
  "key10": "5wvJg9yfDiAZ9yvBXrcVgHBwxMLjmn6V8VKbYFAVSQZv6Z46LWL8LMfn6h7i3QWf8CwdtBMkbpjKtxQWXA92afiw",
  "key11": "3ckSyN9Ljnhw5SbJA67ZMdHMsjNYgHd6enyD1s2XUq2ETaiHpCeDWdax3wMMGZbgxJgnYwsQ1bWa2KUrDuz63eCK",
  "key12": "3aVWw6Tv7z1FaStTpDpWVih6v1LULEqLBBUs5puTTzBua5c8sPyBgEyeDoGdMUXUSbpA7Jgqw49a3gvPBd3pKcDd",
  "key13": "8Wuf1d9PumWPLsa7gzArFws8DCQYdfQbFgNBRZWff1PrTb2ikSDCds8AeVDnQHZ6pdzV5NsEKaCSLADCThpB8K7",
  "key14": "2PyABXH8TuJJUHBx5RsAuHZ4bWrARwDBQ2GSxWTEzNggsFtYLHpem8JF6m95WwGv6VXgdgW1cCP8j8PcevyWLugU",
  "key15": "2P8LFkLR55Vf4AGJ1fxo1NokUepc9MN6V3PeqFN1VNQESgdYWX3PXtMprryy6BsmQu2aWPSeUpmuz3fm7nHS6zc",
  "key16": "51QiZRBmrsBAm7Czy6GvZRZtABaiB8UKLnAnQWuSZfhTiqjqD6UNdY6kDsN7JQHFtKG98V223k4nBjE2i2pzhBnJ",
  "key17": "eZb8UPY91PQPr5yaPqd1Bc9B7G435G5TVD6KrQJ4taBj5QpLfemGkos23FF9jph3aV7EsJxE7ow51mVQk5kEh9Y",
  "key18": "5KqrNJZ7XLsSSEfQeED9gSnyvmHRsF9dcwVBMdW5trxWCmRNBHL5ZRBcHszCq6Bpnyp5zSQUnKpK5hvYHoQFzVJs",
  "key19": "VLZhM3hbrpUGLLXjtdQbYH9SxfyEtXgxePcxri8XtZtMAu9Tgu75vnYWGSsjVMacVksvfuAeKetyRoZxQXXSdc4",
  "key20": "35JiAToo2Hv7iwmJjL76jtwruyQL5BQHPUwJhD8Dcn8ScHL4CZsMfakLzNGgZVZWaizbHzJvdezTwy3SEqSSLvYm",
  "key21": "3VZwosD6iAVU6Ge2EcR56ha96GsHkRVFuy4JXBbjjEbHgnkG9s3r8mRbp4aPAtrtrb1dUrfic7qohusjUx6HCyH1",
  "key22": "2LYBPvPKdkR7pfHjfsm5zkBCCd2TxTgJVZPWYzL928MSSHvgtGvCNGmcPGd4iEMkczgEGAaKaw91ctDxR2LpmWXZ",
  "key23": "3byG1dceHAEhJe3bBLAtTLt4aiLxcnceHCyJrE7fuSi13oeDd68aYJujWW1oMmmBx6nBzM8XZrQ7Mm7aj5BZ5LXW",
  "key24": "3wSgM4mFhykf1EpFs4d1NQmJA9ehavKvSvjFxrtsr1VBfinEHhgbqv8NfnH9Qy8eGU2Rxcz7McCTghjen8e6NFDk",
  "key25": "2YKUAtp9177CT4cJ8aC5P89HAMXnm5LfcgymLZGmyCyEXhGkcUg3t27UbiAv4K2XLZNysLq2TJP68eAqWxZyzLab",
  "key26": "2PMkwrtZbhMpt1Vwm9Soi6ehHS32v8d1qW1ZrkbzNuvZiYEUqaVpSoQKDmEKgDuvzQn65ZVU9XHoojkSEnWqwojH",
  "key27": "39HyvywZbnJFJjcbg7Aczt9T2pkiAoXykABkqLWEgwipZX2KepSNoqt6cmx9XSg6CJaHkFnLhzyonaZf5A92vi43",
  "key28": "QjvFcBeLKj4tcrczmwhvPvCnBjAB36ECTA6B2doDQLgBqdWqq2E9EGny7UhPVdktHfbpu9UTXJySjChsDMtV5DU",
  "key29": "4ii38153Bh91rR4eCNwr4TJsNcrs172xpHZkcMZyAg7uPdxkjAdJ8ssmJh89ZzkxbUvH8j5AYf7N4biLHrikBfzj",
  "key30": "2oHEvjed7P54jUo5Uyg98kVPaXfdkoPb3ghU1CHz2Hwmcfgp9Tmb33PigcDabGwTnuMDujdtgnaQK3gWnthL6cYA"
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
