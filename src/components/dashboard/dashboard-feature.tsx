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
    "BWHJz5Beu43vhuSrTLvhsHNBGyNq4VM57bRH7AaErXK5PmQxYBJa1ESM69Qvu8h3zB5NJERSdxBn6G2o239A3ow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYzHMbUVNkaUTfHsDD4hm6en1wVycz9bCtTWhNwZsawiDV9HDfCQQ3SmZHYY6Cbh9k9w6CYWyRGCwTVzNZRvd6r",
  "key1": "4kk3iGTF7SeoK15dLDPJY4trdcCPQZ9WWJ6bvkUBSw48J4VNJ1VhfTEAvT5iUDpLQt3ritz18cXLFF2ze6VVBr4",
  "key2": "3vmMdK6VmmJUfkkQSA3TvPjyhUANL2gDwgJYMjfs3un37GJuPSt2L3EEgkWYuJWGDSXJSJ6PY8MgFWU29vBYMZ5Z",
  "key3": "3iHEdcKQsGhnzn7VQvFSkzpjo5QH3WVs5jUyZLrfaYpVU2A9fFTMF2qcWXdg4bunSsq5tpQgWv5oSF2USMSDLsRB",
  "key4": "2x3nNNB58SisDdAgaHGEjSsAa1GHg8pakSaef2dkNaVAAiDTvfChN3dhAYgoeidVEj1t8f5stdRd1qDtciWQMr9e",
  "key5": "utHvE4EkF9J1pPtj84kGw2xpqXkgxQo1fVNibj6mYSPNboeSVb9wqB4C4EmM9CjFFj8dpqkDJgyFJnu5z1AD23q",
  "key6": "5hh7je5eRXE5A5QxG58WHh9vfBqC9X3ouiTBLhzZYRkoVMuNAdoTXm9fVrUX5yp5YX1XjJCm28JAKQFLrqVSevQo",
  "key7": "4Z2wGNpBjCh4T5LQAUcFdjFTtba4gWrsKPZumozzbawbpVx4SaEGha9f4MmLQidoAB18bhinFVdSuDqqVFz9PK2d",
  "key8": "31jUwyv6vf71UMwrpTCatGCbywue6dLfj93f3m5DMoV3U8fEeahshyJbWYJk1b5rb5tKaXe4bkV5C55us2VkxLUX",
  "key9": "5FFy6NEVgrnXnhNb2uBPRZ5igFQnP8QAaGkEASs8N6Ae5obbw5t5FeJF8vAi4Li4Z4uM7wwD6euSkTkvh3EVm1Bu",
  "key10": "Rs3Z5mb2uGZ3P48pjevAuTUKzVE8H6GjFXDRc4Uapjv16RqYKpxVyBJsr5Ckc5tJqyFdHW5xQsxrvaNWtTMVea7",
  "key11": "HyNSAzZ8P7d6rgZKzs7BUVvsbt7q5WELhLU6fjBstjTSfEuNGoNuo12bYfEGF2JK9Fz89aUnAzfcsWjFCtYXAe2",
  "key12": "2K91rmgS3RZDmiXVFNi89gr8fHfRshwcEgPcrgYZaENFDiyRZvhWfgsj1Q2FPi55AY2WGSQhcaqSWJzpLHmWhKfH",
  "key13": "56i9n7TJqKWmgkhHHH2xksHTvvFKHKG9LicqrSKALffv57DKNWSYQpMjGi68dZTqbdpNj5qNChkcFuv1WVK1gbWn",
  "key14": "56U2i4HWqCgkyHM1a4SraYmTqnKdosRMxp1ZBRAArHacz6jj719ndK67XWQWEg5uqHTagkpkyrGMpXYZ7V5cHYV3",
  "key15": "2DrqLvTPyn2u1xdqy1iriyuL84HjtqfMUZzjjDenP6yYai8p3nSUSQTVF6y9x1nHUt7jxsV4c7DUiQHSh245sAJQ",
  "key16": "3evpi3WGGzrd7bKX4zEAW9av5rG5e8gKtvQkBh5F4NJF7ygzTUKJY49CKnWZeKMDsEdDY1pCzoe3hWoa3gbfHS3Y",
  "key17": "Ek1guebGQRSs2YX8koLFEWx47Q8Z56NfCo5wV75LKDPm5jZp9VQ7da4goA5EZ7p1WkN4SpkC2AMCQjVSz8SYPzi",
  "key18": "47174VCqQQd3UzQy9qgwgrTqHKsehk92bhTEqNmh5aQUqc12c1PH4nYprAhr49djiSBD67vYyKanuik2qqfAyQEK",
  "key19": "5XPMLkfHKCGTDBMVa7uKcBmUc28wSj8tXqaoD6BRxUf24STmTDdpU3DEgQgdV1p9raRB1SY5H33mJHAMqzgZQihB",
  "key20": "354zxJTTkoZKzcgxbJ2B752uSLYAEDQepvn6Hks6wuRVJvaxwByp4EG4A15vihF2eTKmuhc31Jm4gkAXsGC2rqQL",
  "key21": "3RQrq1fXat8S71hjPAUkgJr8NEHUJAfvfDvcFyx5Ji8zpYyG4dR1KiAwzyWemkZebqj8pXeXnUDLq8a6MUUw192L",
  "key22": "2r8MBYKxC3iLAhcUDknY1QDGJkkGxCXHogND6DCEM5P9mZrpvvsbiaGdviYaaJDEnicDUay5PqYxo26jtffkGRLF",
  "key23": "3oiC4CXrMWg9uGEyXkmm86DJpoMjG2igy5uv7zKtt6nRjThmKuEwLkVwRpzHRkYa9RnA1putc3kx96wc3auaDZA4",
  "key24": "h8mr8nmMfMDKYimP47fxKwtwkmNzkqkR8HEoJZaAtBbDf9naZPKmCevkYNRAhRi5f35m8Rtcr3DxNQUp6jqFDfj",
  "key25": "5zBxubB7KMSbNJTMvRhPuEDBhTcAeyxpRcPrP2scurydRhUxCJNanD3P4LDyyYD6JnthedRWSmu8ZnVWZwMAoDbd",
  "key26": "5edV2RPr8TdzcPVRW8phsZaEfSC7fqG9GcKUyvcG4Qyzrwazfkw7h1v2Y2GYRJKY4seaaaBtWCNhuWpX5Li15wJz",
  "key27": "uUeEePiV5FTnv1mafdS2bewdJgxo8NwsTrLXfxahieEvM7HrkQ6cHbSiJ7ytcZcDTRqfCsBhYAyZ9Wy5KegVKYM",
  "key28": "3nqNic54pbLuwWdg6TfrTwXkbsYPptx3faQzcq3DxPCrX47Fq5VtzRZTfxPsQJtU52DNkY4bWFbCM4PCUxY8xgXn",
  "key29": "BtYpGPSL7LkRvPgUUzYMignrhNDzsStdVQHL8iBBxQ2UUdBtbECXt2bJ1CKpTm2yqMxAz1mds24pga6Lk1oyRqa",
  "key30": "4N6SwDSVNQbxi1CHJNvBNfFq6Up8eDUMfaaadebg2FAZCzd4hUJ8XPexecmTFdnHwwWJ7fvuwg5mncystjdtCUMy",
  "key31": "ahajXhxaaUXUgoB7dfpWsZzXiiZfL8VXDkf2o2n7LDoUcN3ZyArxExT8cETvaG3QUZ5ii9sJKu59SeThb8oPXHW"
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
