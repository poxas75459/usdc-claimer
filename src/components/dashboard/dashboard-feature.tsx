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
    "NaXTnqf8YWLmAH9qkfRJK9NAjFfdV2tTZNnYQKKxemhrSyunUEzgHfoz2C7Tv79e1htKuB29ASdxjFVMfi5KGJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59byPTrZxogBtF9WaNGrWrnEe2Nqtev3pJRYrHymmoV8vJkSU1Ja4BBJ4begeYi7QR14bW4pFFjvGvRjnYuWyV45",
  "key1": "5cqywtVuPJTkrkbsENCRWbbSvwKsdVxMJpcYV4pxzjqRztNgkqa3NH2w9Tz9PXrcjrLrNLPQmhGsnvdWNetEoxrd",
  "key2": "5JL2HwTLw5883Wt5wHYMrjm6pd488if3KP4shAfxqqZPtsKmeaxAQi4vbFdVxeoDrGZvU3E6uE4VZ4jQ1JwZ4Aur",
  "key3": "2MEowLXH1XBxDyesBv82wQpYatUpxxwBRFaLtcQKhPrVrFCJhwcNYVr7BytX5TPVqe9YMRJ3aAqJVN7PJbN3b1dX",
  "key4": "5duZ4pJbAAhMgcvk7hqZx55dmazFSgQnZEH5HEMKZ5R1JKNYcMnef7LLwYKDhGuiG8ta3vkXT9RQKWMT9BcjUQsw",
  "key5": "2AFTPKJ4qCLYWsAFrRoE8kZnM6u3jruqUMofhkNvaEZTURxiPPWCgZ3BTmRPwRvNLth8293jLb9RHfhe8oMTbxxu",
  "key6": "3aWyLZp4rhstBfc2fAL4zTCty1GJp95UifnKwfNyR1dgef2eHWvp1UxKSy9X2undsGFgdTWiuwuD6zWepnSMsnGx",
  "key7": "61UfpxQ4A4hvTG4LfdHNFG8rpgA4DjWYvnj9TLopP5jzxM5TagyHcfNG6xh8m4U8y1cLxyGVDWNKxv7KgyFVxz69",
  "key8": "5uHUXb6JZNqkosHBDA8VYc1AYVCLjRsbMYFhCYBsQ2GG61ws9PdY3E6zTm7K5pvpw7LhcZWLcCwrCMn2rzqfUNHw",
  "key9": "5nLVVP2yuq6JdFZQnnkSZcUH8XgNWeA4Ty9umS4JB2tximiPDoTcvtMnAmV9ncesjqsnmUc7cRG1nZLM8bgwqmZc",
  "key10": "4wq4kT73x7sevaYA1k6e2jD1tCSaRxSpHiHrRoUbC8Ha5dVvidx4qQntqYEx8BUZT7aBRx9vpPpMY7sJWCSynNnr",
  "key11": "4jZdoSiSvJ6BeDUzvYwSTo5Ufty32hgTg9QyqnpAocRWSfPre8qVfC29sBh5oxbxhLg9UZmeFBPxJcuip2mdSWeT",
  "key12": "58Ho8oFqe291dCpuLWa5oUmF3yydJPKLQpHXsxMMrodfkrtvCeJQvBFa3F5AjYVeZjRaTR3ERUjBzGp3tj8Wkpt",
  "key13": "4xfjDKuNwUbPMLoVismEYDegWkTsf3Tzi4pYKZ96gCiDreitgG2pDnVThzNHUxvvpi3RNmanM5M3p6WNutHTUFPd",
  "key14": "2fSv78ckL5nzcN956duJtG7GNgsNVBQx2wdk4dkoRxgV2JHTvYvgGNg8nVZ2YBWLEtCrZAuKxuREmvvZ7kGJq7qh",
  "key15": "47V3pjHEA8LwpF1hJfRQpScbLrKpKytBznRPPGkza64giiK9QenzLnAEbZzmT5op2jCPFeoM1UTEmoW3f5kVoU73",
  "key16": "52zHBFAv52UFyVce3d3TZwy38Hjk8Nt3hQqPjimyQMZRbZEYXsvpzReLx4ZNkqZ4D7459ZrCSn1KDJV4x9LbtWHW",
  "key17": "HuMfiGAHxNEWEkohk529PjcBsgsZTEjqJjJY1ShSY6LLNsWQfmySPUPE1CuMvwDYipNVitcKZ7HsiusRRngh99Y",
  "key18": "5re2nDDC8xT6hRnhUk4QPh2VHvAa1FF1x7MBHdL4iv3NoxLkGKasdX3tnqBRt4g75581g6BrLciEjD6u7fE5vRfU",
  "key19": "386wiHsv1sGkoQ6yHryRpsL9KH2W7MnuSBy41m6HfioXkXQ6QgaRhp7UvLSD2D1juZLFpuV5ETkLF8QogaryTgDj",
  "key20": "3G1F4DTt2qFqfunpQBCH1ZizwbAJxM4CZSBsN87qQTgpdGHaxp8K3ebrPHvpxSumqSCykjNAZAjTCQkLjxYQL2ga",
  "key21": "2BHHchWxZGN3hsn8y25jupwpiPG5vvT4qNgVxBEsQmtoTiTtcEtFCyZXj8TQqRdmfUihsXebw1XY7cWY1czrm9UA",
  "key22": "2FWNeEQiAM4HSx1ZEqBwgUdFTCYFTJ868j46BZ4aCVJMLv8fD9ZpyLAwFmtxmK7rUJxcWwT1cHXgPQF45yGNPzpC",
  "key23": "398VSBs1JvSEHH7vcaJb727jTz7CovZ1NRZa2wi2L76hcZMf3x8UBq52xG4jyVbwjrBmum8BGuiye552aw6q2JXy",
  "key24": "5qLWjJpwZwt2cjgMpHTq3qYnYwpocgJdyfy9KJpp3DTdu34AeSnHTkyE78qpGYFPQV2xvmEZEBhVPRom1EvmEMSe",
  "key25": "25wapQDgkjM141HAN7kdbFT73C2PfNmuXQbTEKjCXCJdU56dZLcpxtf8qhyHjKvYqh14RFJEz5tAtNyGPxDvDJaB",
  "key26": "3guT7dGQ7gvo5y2EX3BNsqPt9h2aUdu89Gh4Pk4n3DgS8UQQspHjuhLE1Vq4KVqdzm1uE1gLqRG3p7HMxpf44Efp",
  "key27": "5RKBtBqGpWK4B82e38b5xiR5VmHyaXqfhfZnTHzhkBHtF8o1CgDv4HqUeQ9v9N2vrxJckw2VuvP75RPZEgPcwh48"
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
