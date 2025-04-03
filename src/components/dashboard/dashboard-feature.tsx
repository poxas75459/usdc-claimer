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
    "2KF3oXuTDdSnuMEWynp3HFPgQnMVENr3MtCLTgYAELTuhh2ZiqywAqakKKtjTXf23j6EeTF61mV4qAi5xuvvMLqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ejm9kvsTqSNgMVXhpaTQzx9md3619XdpiwEXBVLgBtbLRNzYgicJpeHmVm6K2M4pKMeCCc23wnUQG2Vmxr1zGU1",
  "key1": "3FwcVsWnuA2qN4tCJ5n7KkCN3v6AukNLfKfGNjydbni3NnwUEJGRdr8gwHszS8NGnysxAFQon6596yevfRyidxDT",
  "key2": "4Twp5CzUo6bmYdS8SvG5LTE4Pj7r8S6ZF5js3Lrn9QR4rMzgtJF31MqQmfkq68pidJmVXVsRtTTiaaxmut4BHUm",
  "key3": "5wF578RXfMaoFBuSPmhyApNnoZw8JCCRt1qnficvZSF3HrZonTLwPXpUezsG2KEMibp2q87wp8HJkDDuoyuCfwHF",
  "key4": "5PAi5oLrQHbUhbLyDimF8nDDX3Ek7jn9ZVsJvCi811sRBE9o8egB5HJ9hsiiJcg8gxs7hYRwVWbQgowyvCp28CAB",
  "key5": "2nFLVZCikAPjR8yUb3t13wCyXt74pg3MXV8JVNL7bWS6n5bUfiRjBvfo3HwYANsy1uGK1qeVHC4zHkZ6SCCHscXg",
  "key6": "58aVRo2R6vFhbfpPNJfniNyjxxXmFMEF8F9g6WXJLiamcxZdn5vywYSnoT36dh2sXPtnrXRvQQBMpLQt5zHCkGnp",
  "key7": "4dPFexgCVgMNR56GRWByBP8ft3Rqh92aNBn9iaNiYvejwLFkjwsG9fTyGKPq1hRrfUUNFLqEFWj2W3CmtjYKEjPf",
  "key8": "4WpjDRmBjvWmNSiscjtqsm4b1Yw838Pu35WeQFGCxQKeqwaUoGxMgbRGissncwGiSKHNyioH5dqqRLmfx7YkBZz2",
  "key9": "3cZGXabZtGLuiXrDA8Pk2dV56J5tPHwhEcUeitaxGe1cW52cwKzc2USEnhPWRhR1YsyunTPEaYGPi1S2UwbrUF5p",
  "key10": "5d4KCYmHRam4a6W78BowJCiCXVBAJs73VcDr2mzMFGDMPm47uwnJvq8egtQ4ifs3CSih4D8RGjzciwuErQeSJGvh",
  "key11": "3t59E9ZuqNBZ1VezKvA8hiBybXGfQ1fb7vVmVQC6QnvhfNyGNFAgF3MJi1WkJjncwSkTARkQ1Jfhv3sDsqMaV1TD",
  "key12": "5Dnb679uvMq8jMjUQghhXzVb5n8mG56EoE8xseNYCwV3S6WTo2S4LqF9uWNezqByuGGZtUZiYx2pGdDE5FfaT7uS",
  "key13": "1b7237KLXgxDqDfii9ir2cQLBynRb8c9MS2UZWiS7vkdKzDbYN5KaqhwmHh8isxzV1RS4dNQo3XTBPCtE7Wx6kJ",
  "key14": "7E86FQVvj3PYbfqHSoDQ7kkqLmvbvUbkpLtMvrj6QV289Z6hWiUgHALc6HbrcX5HeKZdviPAhASdo5VQfFRakEX",
  "key15": "geg51525ugY61vjweL32HHuzLtDL6L3Lt2sjgoLrFyj9agaHKKimENsfv3Cbaftg8Fc4E8X2oFkx2zcWCsJhtM3",
  "key16": "d6xWoH95up6eKLZKKvNQB92TR6tbX4MXpqmB5PjMsxELL9kBCX8PKipufShLwzfrum56qYP9aRasZGDfPARetdz",
  "key17": "2nDgc9tJu7ZNfuNMKG28tFobyCHE7hgzSAt229McwRFpcbXVD1qw3kyt5q4movsnRHnC3GGpRpVgCVW7VFPohpwm",
  "key18": "38WUhBUcL3jpjYAb6JAGJdjYt75426c8iTXUMmxWuiqRDPpSW4MCPo8ecS3wddHuevtS9S3eapdzSo27ChqZXXwz",
  "key19": "26ViVTRfh7sbfd3xuNGA46U56VGXxmvcg6ce6rSCBzQ46DZiyAWynHJNTs9WRhWuL2jMn5ck6DHt9KfFHjhajCKx",
  "key20": "3JD1VJVTsBGx6p3AqukamDtiepi3kNKn87GwNoHxipmgraihxTEhyFCtCJx85Ydg8mtgE2JzRZwuGFV3V1jv7zj7",
  "key21": "2WZdbjg1NqEFLxeXvbrgoukdf995THqvn7S41xa7CGuPfkyJPUBzz6d4Jy1vBbxYDFxaGqKkBAyZrDiWJdy9tZNm",
  "key22": "3XJ2tKgUfuCEFo1i69EAhv1ERE1GUcLcuCBvtpJKnY5JmB4guP9V8S5FjhGhKBdHUh8Czw2xgzXCKndRRFbWpy8o",
  "key23": "wRfwcw1r44h3euWN5D9b8z6r6GNYGBgfGQtC1AHpfUihW7oNJBZP2ZaK4iWc9Mr57FRfWPQRyYZ5xdopihxTdQm",
  "key24": "5Zp3qzdUPnjwAAQBa9R4pQQTcg3qvKwsR7es3ApuACaw7KJjazRuCpgg1Tttqn21dY4si1TXJU2wFzEBk4FKWmjQ",
  "key25": "2s1Xrkb3VhNmymJ2HX56RZ9ZyAkiVz1KeRuPhmKH1hdGegYN7jUo3CBUCzdgHjXMSbo8UphmhpShig9q5YmdnksE",
  "key26": "2oHJ54azia5zvFbaycDaphWTtmFm2JvN2sQ1EYwDZh5hu6pAaLRZ3cWiN3yqDjXfNti3VXKqrxAsw6kAGjwQ8Fve",
  "key27": "4QqMn8Go8dt4GeNLViu3ruW7diRAwNVzzSPyEf2AdCQRey2pjFUhnMuGV8kKctPMbSvQRgw125R2myweM9UbkDQJ",
  "key28": "5nc7of72R8kKRe2VyfAaaDUXUTDJtjm2iSPcPYMyK4v7dpB43sgyau3VoQPy7XxiKzuxx7waRx6oCpjz7MtVMwZ1",
  "key29": "226MXi5ztJfyJkByDFo11xXsBw3qK3djkRytwZfbE4ky3stZjtackf734t2n8xq3WPRqc8JEsuoXMQ56tnjXdbhX",
  "key30": "5qa2LPz9Kv3MTzA8P4j7TngvfMicMspD93G9BJjos9HoDib4EyprM5zHNyJ3RBi9WUSHBoPCXMqAdj5NcxbcP4tw"
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
