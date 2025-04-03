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
    "4SZjeyMix1iVZEP4XJHnmCZvRGLEaPqMBwGgE6sYDLiwrmAQHmiKMhFftyQRzX6Hs2evQL7rs8Mr3TaX7uZrMDbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n5FMP6KbwgnXbX3jB6FPb2pUu59xpDD8qen3cQZFuD1Uj9vkr2iaxsUPsUVikCsgqcmsWkzToqmzKrie4oCfEF",
  "key1": "4RAYXV9zZkD6RgRo2qi7Ukh7NbNQ8gUTNyXa1w3F71zagNThX6HAwABWVaCAFQc9W4cDW5qYGPGrH3RRjGcbFN4s",
  "key2": "3udt1VC91XWfKgrAMAo9zVCLsqpSPWSZf2qa2Dv17rsi6ofS4iceuFk5RhW9JsCGpfcXVdjdYDS7cbykFMVEvTra",
  "key3": "4To88Cyrtufxrvgo7TfqykdcXzgidk9uqa5oYy22raZSMJsWqWb1sK36952tRTDVyyZL4UfgKmrEP3VDJfTmdkiU",
  "key4": "3Gc4SsKRQ6JDJusrVLbTDXAeLnu6t5WzvGvCdc1tn1CFAYz3d7EDNiv4MJ8BtUdJqJV4iyje2TMrcvc1pMZauo89",
  "key5": "4oSLR811K1vNqoKpH75CJVuDai2L29p5DWYeVKjawqBeZuV8tWVJnxekWUW8vF6sAWc2KJ9ytJS1NLjAtU8d4voC",
  "key6": "5sU4jQS4hQqzdCcVK4jcMivywX9WbXMdREErixoi71rPezDUnG4uunArZCuJ9VN5zMQUwy8xAw7D1xXwn93N62cG",
  "key7": "3DvPKVJ63UNauX56ycxZ7ag3M6zrwTVpMc3BqRsFkuhh7Av4uwJrLXn2wyvfVjFPLuXyrwLVzCsvKKyTbkSz2EuU",
  "key8": "WbyguG46w6AjDQuWMBSoKPH2pmncTdfqMWvhqatLgQ4ZL1nVhH9f53AmFGuTTGDkAmMmKkYwsQDYYAG34rsiuND",
  "key9": "4PVidpomhTLDV4fUnVRhHhdjPV5CL9TsRa8qGGdGJ4HLn5NGKqKfKuUjNUwUpGqWxHF2dAHuDdNhNbo738mpvddy",
  "key10": "4ZmbKKz73CBsBJr2c3QqdaSNJUixLgRXHZDp7tFTzGLLoGh8wQMAUfRqfM2Ctds7tdqqPAQLdm8Hz6g75cASA21v",
  "key11": "5B8AaT1VQsVTzQzeCPeCadr9xeWWWeD5orDu5Zyvvyzeh3Ly34UfzdD2Y3QyHU2ZRbBmPdJttjgBUdsQFgAXy54S",
  "key12": "3prPpTWCCnQHfufVvfRfpRsHyf8sGgzrapZprAG6A53ahQaApCNu1M3aKGX7Wy7dUCJR1G5X5BnufN7Xjf1JGUPk",
  "key13": "4X3tcXTwVYXjVcxnqP9dV55fKLewuFJFLghhnavG3VdJs1BufEp3E25emBc15adN44umYd7rumFRWEgLpFMcHyHi",
  "key14": "GhFdmZQkmCf5rdKRkYkWr1gH82NMxxKdgGHEA3dUPE89HZUX96qRFjuC13PwX6wDbMyfpJxm6iufXjdQM9ZDG6y",
  "key15": "5nqTn9UWczTm7y87VsU4gXbDw9kGjmqL763nL9JDpHxH7AmSCmZzxm6Zux1yvtrVBeFwdezEyVSKp8cN2ediuBYB",
  "key16": "5JUvWqoyJyKJyZPWPA2AuN49wHsS4S59yoh3f5BHyfYZQvbn3dcdLPkXz6fZ6cKAzsH3Fi3xPdVBwfMmhQ99ZVeK",
  "key17": "2tbYyaAnJiin2spRZFneVzBtW4ukQftXrNCVWMaudoYYGvYSxGaWyxckgdzFJWT5SqDdpf6fjcY1U8GFT8pogNUo",
  "key18": "672tUCvj3iyt1NCDtg98oqFtUnEqjaAdeDaYdQpH3kEoTE876wRttbxLt7jWmCYLbuFPjkiW94i7fXjyw7AVWHzR",
  "key19": "uvJJX7z46ELhRhsPRVinCmZuH1WxKLwPvu4Awok56fLx3xpH2UsZg1xyFfefNL4KXG25CopnTSLpuvCdnWLV2Yw",
  "key20": "FuhQvDtH2EJ81C3EuYFtgg7YvuXy1c6mq8cDTaLQUqmWGLFeRcgX6zjCouWXD2ZyJtgVLixZAmVWbNzr7VTmbri",
  "key21": "63r1DaYEbRihEyp8hqDo9vaGwxUmAtkB5BK5KeJhsr3xH7ma6vhk7gZNGZv5vwHKGBSFDqXK4CKdBuRqZR4r6FS1",
  "key22": "Z6YP8hgSwwHhubi3WjqqWUm6dH1hgSCo8DXiZjhX52ojPgR2XRZ49QoRugjfqbsnmWqMj6zvx5wYT8QCLidSgZG",
  "key23": "4msXcCVdM8iBJkCUoMdXNbJ9RPV8Ay3x2EecsmYptdko5kwLWMsJ6CmZRZCoJXfYtTiL6sigCZLGtZXSJoGdamWB",
  "key24": "4GbKv9z7m8a726nYNNztaeckgaaNLhFTZi6dUAz7FphryWU2LAiNHbnbHYj7RTW6AKPKDc3qVP7ev4gKorY5no9h",
  "key25": "5BnpvUpPN2ijg5cXKyta55uPPSf66CQZ6e6q2emzzsfdC31Ku9wrw61eTvfSDgqL9qMgG3AB764KzzbpgRFQwCSW",
  "key26": "4QnVPWV5RYZtT7GJmGmL884LL7j4b1GKJwVFjUG2JTDj9YqRk3VG7vZR2pikVuyRsRTzVBEpDU9ZtsqJyKHtY16L",
  "key27": "4jy1LBnDDbhFmAF9bEi3zhn8N6v3pU9sFXv3sqHpSjeF6c6bHPZHSSxrksz5WZhqzXuHx8kCHK2cLSRM1X3sRBZs"
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
