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
    "3t1MBqnkGjHiAKy536jzHPpknCGwbBYGNvLnNpp1sL6j9bDUpsyayA1yzH1L2WtuMPToru67FvUBuhYk4QUywTFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yWj8g9ZVCo3PFT47Zi2iwSSRnDt33J1EFSR6dTMRrYk6TwomzYiaJvmTBsoPgS8zwi3somcS5bHFDSZz26r9hw3",
  "key1": "46WVv7qvcmA8WymMCJpGY4pa9DcjtGSZ5aJj4PS5Yg68AbsTJBro96LJEpMGxNLVRbpNZXdL7vTi5DUc95WXZ4eq",
  "key2": "2jtoDwfVp4fvfYdD9H9d5MJ4kjYCEZuS8YqAg8HZ2NX52mBciupx6cg3rzCnLyonbdmJE5kwSAoWVK4t3waBfhnj",
  "key3": "5eygnpE1ssVGhKbfPjBtF8ZkS7EexBY9gtGn1yKTcFSrqkCEnV5gAnu9FxAvVYrPEm69SGMNWVUcT7hw72pH4YYy",
  "key4": "2UdhrmkYTfSA68zzmQiSNPX9osuCBPcWdfe3UgRFNmeVHQb7NhKo2Pz63q1T84a8k6wysp6F7BhRu9wxqZNjXz8M",
  "key5": "jCkWNgV2k6hAoEL2fXgC1mhgT39Kn6BiAy4khYLQi9BZiMRqdjjLds1VaCVrQVYLBRWo3wWWmQxBLHShmLTqQJc",
  "key6": "5NXdL4dvAUxq92sbM77ietpR5ELi7qZ8u2VALkn1ByGrqhPcYH13QduXuYQLXJkyAem98ZqwFScci3kJVVzFUoLU",
  "key7": "65DU8Tawfpxzy3vngAumcHtv6XsPqYHqdV89HsrFdJmbqVyHY44EvL19rsDGtCX9MzzdxA3PYKDcu8hcCToDFJ8f",
  "key8": "4f7K5KSHMiXPzZTCW87MtckNRyZC1iT3GYUfz1HP1S7uqiUHH8jnkuwxwm3nia6JHNZn5JSpNr5yhtKoE2m2p2vM",
  "key9": "3zh1PmjJGpzF9RkgTuCDCZ2x1Td7FKSF35wmBhc8MjKP1Zz6VrpKhHFgKxQg512mpRLLwvikGrwCza6EtCCJ6yQs",
  "key10": "3sdrAM65We8RJNhCRb64kStwdfADiSVXB9ogwXRMGTShXRdiwUwDUdg6MbYnaotkKaJyjt64xFsAU9GYGTEKEBp6",
  "key11": "2ijL5xpoq68mW8kxJV7LnJTJJbXNscLeg5EvB3dFNSTFWpunJT1GFb7tvBdx9wXMqdEHz9Lg7cHFtccax6UyNgpr",
  "key12": "5p8dU4k8LXaJbjCrbP8tEcyXsqqhTtgxPLQ9c8gZMfK3KfEMArf8FNKZVnyLAiN3WPPCeTDQDiLKsUKyC65qnQxc",
  "key13": "3eeFyC6tPX7H2wkawES9TUfetjoNbR8FygZDg4ZNrFcCUBa3TEMxzADWtFDP3KJn7YEYfpTzwmGsuDFwRZNvmmp8",
  "key14": "5cMjmE57xBm19FPGCYfVLFhQav8nRuSXd3Zxfyz2sxjar2XH6qK5brhJJ9isZEwp7LeMtczdVE1XGrr1dnQYA7jj",
  "key15": "5au8CamDNZFUyUXXQhyEeZeXTuT8gZSwfvwJpYepfy2zKZqKqMAxcZE4hiGxotSebdTstL7FS97YLP8KoBdxFpUB",
  "key16": "3uYRWSStLLAU3uZZBhrtQC7NUdj8yet4UHLDzxN2You7SVwx4a5LojNqVLj2Zr66iZvnZUvvSybcwWv1shtpRL9D",
  "key17": "ZNJ1bh5wDXfavC7QDskGUMeSTXJu8JLkGJ3xW2UXAEYMKR9Fu85NjbN3iXehRbpL4KXoWqUyZoHL3iMiYmCksDG",
  "key18": "4VdiMtvDkPpycAU8q7FxirbAxkTCAAKUwH8tM4PCfuV5XHzYBJw177fSP8KNQzhoYCGR2RBKvLuH26UYGz4JhTdZ",
  "key19": "5Dg7HLxTMa88j1Ligytsq8ZsQyyUC4vKvUynBUUxH8FdBgC62dh3zNpMbJY7oo4KkjbAjPot7LVSgatXSHAcDjJs",
  "key20": "PGuLHh2tiyA8HYnqh4eH69t6crqtkondrRjKXmPtATRai1HxtSBHnbPjAjP8xoYDymy6CivhNE25kqVFV5tDgW4",
  "key21": "5491WguR7E6dyd3HJQMenBskBLVoAgMrTFjK6syPMBRUuiZowKto8YsCjV8JPLkMkTAeSd8FiJTjKwZ6RiqMWNJa",
  "key22": "273R3DCoj8WLjKByVfPS4fq7N5YjUCnEtFRXj9S2Rk1TVpowCwZBQYrKo6vHjogupMHLc1sZdFYbiZuvrLSpt2SJ",
  "key23": "24Ep7nBESkwknMhEU8oR9htF8UzGsxS3Yn36jZJMTHKR6PRNK8PLEXBv2rmB8n5t1BH2M2JwDQgVwjdQZpdsTtFH",
  "key24": "2WANrks8xeMYyzXapfQ3t2KYejqivtfxJyw5Y3huCBxBKdM7jioiqZ8g6AntEYaNKjaJrxeDH47r4957n1q3G9Pn",
  "key25": "5pRyJkiiszrkAbbCmEP3ajzhekktqZgbPM1iuoKiTjKzz9h9vWow71X7Y36VZeMrQeW6h4FdpQTpvHCRqGuYnCyb",
  "key26": "5RaTcsnLYeVmm22d5rQp8HC7nHdwVHJ4L9d8UXLBaS4FCH1hwbBoqykShNKQsUZ1Go1uoxUx5zseEynhdLW8Gkaw",
  "key27": "4TbHmoo4reqkJWxZfZBugzBHhD8CdxGCbhkQpbGtu1PcfD3HX4T4imeF5qVcn5zgUs3dEMXki8Cks6FhZsBa2wXh",
  "key28": "31ZQJGchfg1481odaRnbXDYgNdrXvprZcW7HSTuKwWVXkGfFHEsZXBjQ14sixmhye6baXisJsDXp8jvkj8ykRG72",
  "key29": "3acnPomBCvrrFzi8WRPnpgT3b2SeFWmfASx6gJL5q997E1uHwe8nRMaLTeTUV1JAVYgPqnH7aRGjwuvBmiPpR7TA",
  "key30": "3mtb84SKenKNN1EtPXyZbPjis2Mv9XSCkvWzW7fLPeYDCXaU7HrdCCGUs8j6zM2uuXH55zbTWj9mEHWtR58fGvfo",
  "key31": "2Lpr9Nsm3cnnRQQBM5DvHi2feQos9JFpukqwXWhzbPL7r9jpD8csykZvk3Jf525nDkG4q7QBkjs3XHRBNUkedTVJ"
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
