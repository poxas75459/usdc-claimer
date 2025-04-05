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
    "4P46xVymVxt7zb9zActqfWQPFnyUFUkCnSM8LeFCbof9PUmyrUzzBFPYtL4cWmXyyWiubAP5w6pVsaenodnyegHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kSwmghTxF1n2aH4KJH3cejdDMDF9yYwY1pn1TkdCHQhAVDD7p8f3FwuV4u2LraJMqon3VHP8SKKwyRzmPY7SYjU",
  "key1": "h8jcb9CPj3doZTFmNMGwKDSnv8jv2ES1RMY5y5ArpNmSz4cJePmD6Dk5aLmmFCa5dpxxvVZ3ujHYJiMjS6br7KU",
  "key2": "4fQD9ovryq8Taod4KscDRjzmuu98nuEFmmRZhwsWA7UwnRf6FTojQmtwhktkp5uxgJgF7Q2mLAAhcWcT4CpvHfiF",
  "key3": "5XNPcL49wELJLSt1tAfvVTNCcdDmd1ZB5ZicPdbC3zEvS2EeyER5bgeevap2qX8CY8RWQL65YYGkSGkrPcJU8yZ1",
  "key4": "4jx628HiR47fvBreEo7g6drqRdHeptSYTdTiM9GewCX2KxWgjhTsYqm7Ub4LLXSh5RoD5HsvntpZ2mGqBRtj3Sf4",
  "key5": "2Yo37kAiEYvwt6uLSYhTt98HN6egBFs6U4CHb4JMHwJmuNCeaoJzZACJDkMZ1a13qhaGWBpHioXqq3fEAswszSLB",
  "key6": "4b7V4xzuBQackEzxH7hgimWbNZn79UNbTqdRfAyA8X9k1GjwoaKy26sJFgqFWsqDWBHnpdwNuG8YaQqFGGRmZfD1",
  "key7": "ehk6BamWEDWVyKvqzJvPUKWYKLMj4LamdeSDZ2oG4XiSEmHLVcG1SYoP31MeLtyNnmKPgdCyDkUjpaHqGjw7YQ6",
  "key8": "5XUWr8BVi3JqamUj1rtKx9m6rMUZ6zQjqQ3NSNQUH1rKv8HDuqyC33bdiaKqnMCt8NET2JWtpHR1atgSwZHzkRn4",
  "key9": "3A78jsVRom7nyj2hrJ9Y3M9nG9PBbYKePHCXG14nb7Kw99sbgHUv63qzgSmhujkiLwfT1ktwRJmg5wNt26DmRD4C",
  "key10": "3FNNbkHgEtVkPJMmwDGEsHSt7yAJGq2txWKynYcHSKqqL6khi4yJPBSAeDrJyJcMEUah2ZQAviCqZUyBePggq9sP",
  "key11": "5K7ALyeyMmQXsH5TKjASNdZiGm9F1NqTWr6j9BcEXBgD3Jpzm3AB845swidzytoVfz3feGRDCqQo3AtUxQP3uDZL",
  "key12": "63zdwm1qeLgbqJm2wGXLvNghxFiZhk6jsz5Cpmb76S6xYkcUGqJd26XezYXe15fQfCpgjBL1gVgYEAKcMfGZAHB8",
  "key13": "25KS6gJ7VsL7SHdPBX3WuJB8C5wn1hWs6uKFt916rAVzWodqY7oiY76ToYbdem5VpK1NyzygVKCfqhba8BRqemc2",
  "key14": "5QmHSPPbNzefQ8Ux1RNUHVrsfZ4rU9etQsXPDSWz6x3GH4AHEToDjQJEP1nvDv3DkWY1pEHUnsSKKYi3iZfkwiPX",
  "key15": "3FdWsdshCfMQiVDkexiMu9QLJyCeUipstxFhw4K5mo4mFLFTvqBkWo1S7TkuNM4Tob3Vzfy9tStahbem91tX9MXW",
  "key16": "8R9JKpqKZdCL7FDZoM7AQZUwTsQ1AnjEGJLWpBSVRqauC9jAmBb71HFYEQrcLfkumRtTkS7p9EDnRX5Z5kxAXRo",
  "key17": "Rd2Uj9gPJNou8cYCwYks1nKeHJfZiWTt8djQHqHJzpynv55ae14cesahnebTKEmWUn1kAo2r2PhWAuP5F4sAfiz",
  "key18": "55DpTw9ecoZG7KoT9T7GmAXMe2oCzuLvxb3117Ji7k3s1am676F83CmWivQdjwonuZi3Z17M7Ry8SEivJzsV2S7N",
  "key19": "2uSyKKNpUQoX5vCP4yCS3zxCjLpurw8nkoxZUQLsZs9WTTbkQtn42LGKKMQ1E1K2z2JB3NGXTYeyc3wp229goFNL",
  "key20": "4EMHV2N4cuqnmpTjtP1UX5JBRXt8omoCqwtvwEZy9xZpQNcAhzWVANACFsmh4TJUfbsLt6o2freQwyLrDGdp2cQs",
  "key21": "4wjuVfZaJyJpkcUE6ffqyjP7sTWLh7wULcmzAkfpBnfvr8rHV3DeZrVLiYtwxmbWMWpuYY83zYTbQixTiutxi62S",
  "key22": "28kJxvxVCvKYA75JrLMFqAjn3JGSKrRK5Ubt1v41kR9hnSp9SMqqqzWbxYaauLCX9TNTZ78WYBYswyZT7PitbXRz",
  "key23": "27T4jTzLyx42TRnrjo13jj2sHWc2tpNZbE5buVGCVsHBYFe2tXiZ56BYhyaNhkBKNpCiHkNpBqvoPMwUuZ1Yy7cE",
  "key24": "ZZHFiXsDV1HTRcMHtz894T3txdRG2HgYa2zeUFNmv6DZCTUmHsojHhNXa77TNvNAEQi5CsLfTkJJ8DYh25S13N8"
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
