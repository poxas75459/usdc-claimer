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
    "CspJRfXdCJtcbkoZsUiBEXeNtav9JtK7rUsR55KoDhJGLjyCequRnP7zweK25W45biuCCnoviN6bM45T922sDQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RBjmM8hwiPd2Q9FKYathzF6fyziAQfpWKU83oKt4MukYkJKiMq7tSmDku2mFZ8G4wmRZ3WeGSFX2WNZGSsqGAED",
  "key1": "2QY6J1PjxNLF1y17ZVD7cMpvumRQQUGesN4HZ9BoHBy4pw89ZMxjiJYNYY88o6X6zKy3xc47WxSmU2oF8x3cPPiZ",
  "key2": "5By3Eb6wGXP6s9MScbFRpFKYhLrPf7uDdakweahxbfHb5ZqX9Qqncw4Z1U9WJaehfWMrX1Z3wJYrRgnSJEWhs4u6",
  "key3": "5kPxQxp6gN7idpkyLTYqRXnqczdis2YJXWtagBNjkAsLDDzHND4Nge1phjvcaravRYXrSVHGLkGNMVFKzBhMPtrw",
  "key4": "4vvHkywpz7KuENGUYP8pH6g4fhECtZJKBQyXEb4KFL4Vv3VkukUXToSuW4jXcJMRWZpBVAnH1V6WxoPfthQUqP2p",
  "key5": "5Sk1RcDfZVTGReXqwLzB1yLjfMb3y4DBuP2TTFRyqPf3ybmK2ueajeNLusWpuR22NN1GawYkQPdqxKrxVf7LQ2fG",
  "key6": "4bM1AqkzG4rpXRYiffSqE3qv1DXce7LZEzznm1CC3HanXw8c515vhWA5BTZMdFWn5ktEHR8qkEpUrcp7murARn3u",
  "key7": "5rh498V3YDC2d3zmMQQEg5s3mS3WCDFR6vqhiXhiprvWweLYY6XUQgq6P76gV5NTqWSiZiN3r4FbCTL9d6R92xBG",
  "key8": "2KJ5hBXbiFyoumQwbQeGA2UaWvu3dWWiDgiBzY6Z4cuDXWkNjd6Sm95iAvXVrSNiHs75UzLQryqbEwWHjkgU2KXX",
  "key9": "3tejN9Hrctcaj2C3EEJi3dmCkdzbJ3cDX4LUzB9KKfQSWh3w4pU1d4ouGSqW4b77NvPuxwkzBfaN8afagHWt1U9T",
  "key10": "24hqJJdxk9YQwb9dgpe2fk9TViHcpxrtoWzJ6TV5fexUpCvpmZbzsk7Rf7K2Mw9nd5VEQYvwWZP6jgq6pQmxcMvs",
  "key11": "zYJi9KpUorZPwkLYFthmQMHAZD889aLh82BwwACbdukVhcmC7JvpmzU3knboq8i6WS7rJTSkS2Qbo4zrtWWMjSX",
  "key12": "5gMgNSPfzo9BpiHzryXUatTxwUV7gQT5owy5Uq2LWh5gQR3Y6Bj6V13grxxbsXUbt8wVA7FxqzYDNzw3sUN3KSsN",
  "key13": "671NMXxnH5F7DuCJuKspmDJvv6b2uQhgY73a3oK34JDzNyHFQwqKjSRnMPHdXUCih7dorAEmuh7KA4ZFpP26DTUa",
  "key14": "4Lwu9d5bPohFhUJxB3v65nzLjWwyEtD4zNDHP2btVGcELUgerewZY31jdSsRbP9PKS83HsbqXRXX3m23VfeoFSHX",
  "key15": "4AesgmBZTT4Rg2ouE64EE9RzFVBLcW5ZibF5iehUBbq82a3iQsEpydHBHNmSBeXRabmRuAz4oxNsAV8KMvpyGEtW",
  "key16": "2AW8Ji91NiKavSZz2GD6wo42F3ZMNCFid8od8AKvWZkYh9oRAVvvroFmMLFJztkxdsfh2C6SicKzjXXYVeAdE8DA",
  "key17": "4njxXWGqbbz6KY1VXha5fJZhgEcvWXx6zNrzuuKj3RupwTmLwkPsQVabwAjuHWCuuf3FuUGKaSC6LNiGWUDxwUMM",
  "key18": "2ST2SuciU9cxgWvVJgjUD8NU6ADotRU2y4AEwzv3so5HksaRLTdPrDdzaAtkQq4wjJ8T549azAyNFAcfSyDNCxQJ",
  "key19": "2Y87fAi4cmnJ1iSTdCFBbNagyh7z7F8nVQSo2ZvaNKSDDVDgAccuar7hpKfSUKUGk8GiGrcmoAJK8AT3vCqUkTJx",
  "key20": "27zkmidXNz4TEocTgB8HfTeaQATzrn28ksYrm5mnPtXFxJHDoe1CRoJdeTv4Wfp8bZEYk8ZwJ1GzTiQSmt9hTGE6",
  "key21": "4Q3fMKdrDDbyzx2Y4gL9YG7atePQFdNpQfZ7ecMvMPYqtfSP8k9umeegzxLUW4Nw7wzn2cxBbAAWcBdNAz465MFT",
  "key22": "2z66YJHfQsQVuqsF3G3LTe92W39r5SKStnpr3qVhypyWhaKELvEJs2fQ5EfUcopzFK46Nagaetbj6VR3A6utKHcQ",
  "key23": "2dm2FzJacvtAAfhmny6EFpwQKRBsQ9CeWKSz7m32AYSYchZeroLjcGg7jvUqDzfgTEvzgW91KtFnJKnfntMiBT31",
  "key24": "4AZiD2j53ZzN1aJ3Vg74aX7cB7CRDbZGiiRn98U8wtMCVTVP9ZBWLjAh3tcWuWLbRwjvp4yv21vhStd5UMhRoCXU",
  "key25": "2f3Evaa1qwfzzvbJrLe85v34hUXSnC1Yfgh3yenCVgaFCKULT81rXi7hC5bJRxUCvgqMmTCXXta385M5yRavCnSN",
  "key26": "4pwBCxNJZhgQrs1VNhE4goLd96Hrs5fHNwuonWgTZVKEuYMxTyDZbjAKUSqzByJNS2qyDs9ibdkVtX8oeo8gVuun"
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
