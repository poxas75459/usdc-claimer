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
    "49bqfhUFNzk8F8FxKDBvgNrvUM7DZzn5rFMw1vX1AcJCjQ2u8uCQWuZKmoBDpBNExDpxkCi4jiQPSZrRvJXaUe4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a8xgupL2dkByjkVaKfaLMNSRCnueavSFXPWvSWHCYYSGdqkgwh1u2zpfSRHFbNiiUmW3irkwNZmGRWth7iwPkck",
  "key1": "2PqTpaB7rcHtkacaS8LsE5qZggstsSEX5jtt51cbQpfB8T5Xqk7q3AZfYTCnJ2PDXhq4BLjrHMbRqiH9RTiY59TZ",
  "key2": "3iT31vHERvDCL7aV4fACKFS6XdTpypEaEqYqJLu6LXmDAJA6UUJVZpAqj7XwyaS8BoUmPLQejzqwDcpdJabcPm7D",
  "key3": "Zyt4J5epoWf6UByMiNgcDZKGBERzdiMVSrvpKkck1tTLMmuQ5ezsCLYPPvyVSu2kUzs67VSspz9jg9qbRrQHJ4f",
  "key4": "26Gb5Ct2gzLYxeuLf3b3v9eW9hDhX3FYkUVvSzW1cGe2Pb5RBAyDdEBRp1wjBmFjJn3uCfoYAR3Lu8nx4htw5kQA",
  "key5": "61ytEVULBLgVK3C4rJyioXabSCq2zLTdPaN44jsGVVoim5rKmD1wxAaJ9JE2afVViPR8ctvTCXZGRgHt7wqJQXX6",
  "key6": "33ruK8CXN89EKy5xFzkVQBbZpFgL78PFB16rgWNS8yCyAxCNuHcYjcFaUAijv6Hqh5crm17ZS3kFvj3o7otiZgXA",
  "key7": "677bwgpgtCTiT2ieKBcCo56heAjcgXpc3e2tnTGmksn1cuzyVSTvwJ256kpP9nVfLEW5i93RbeVAzvj97TWsi1Wa",
  "key8": "213LxasCGbSdUSXAUnBBVHLxNjN483CMwcwsGaMpEcwgqYbN3F7RY95VR2cyrPC4ACS5eKkZ2qjR7y4QYS4HfTJB",
  "key9": "486oncjCBVB5btd4WcmZ5QWjfzAkTwRNFiWw3TnqGiyv7GKBAg8RQDsKCkpWV4PZj4qbzj2MyA5deKCxUvRMKHu3",
  "key10": "4kjYsK5W7gAMM1WDGF1uWhYujCtGsXBv2SAEMASk4nRYp4YkRG5girFbxzrwvGwgHKeDJzxbFsLXMj3TVtHBaXXa",
  "key11": "3x12YXgy62HfknipRst7dr7CoUt5sesamJYzaCRAbmsGi9DP1w3Zn2xUtBhnuegiK1m7ZEoVgGvYEsqFWHh38GHo",
  "key12": "4jCUJhDKw9CZgeDjmXkquirA1LhatTF8t2LpACRNaFex1kybrpcw5BA3R1B774mtVsn2HPvBqcisGnz2tNrvJQQb",
  "key13": "P5Q8J5TFa2gzLUBrf86yBRYZPp9rAN9kHbBe1uiV6PSDNhKPN61NyFv7wEe2WyHuaCkHrEYB9cJ7gBMkK11QZnT",
  "key14": "4cRBGbJcuyAcvTMq5r7Q8dfgtpo5VdharKNiBMVp3hKn3HGWn77T929ZbKzRfKpBkXvpvPvTFpiSGirVN6bw25wx",
  "key15": "4TdtEJR1iXjUGipBop1sghYiULerGoiE1GhMMMLfzczFNumWU6Jr82PYHjQw4uaFvTR18GLobLPV2b2qdYH8mLcH",
  "key16": "32zemHsGirQEursd99Pia7V9snc4QRAMGDg5oayTFjd36rHSj4mdPvcJfPHj9vYYjCBBvGL3k825Eu8ekxQ6gE3U",
  "key17": "2KRx4qDMkCLDKvzzU2LqeDXpP8fTpxT7BXCYSWZQLikXWSXNJCqtkTvduxa9PudVobH7tm2jKRJrViq3mJeEW3bR",
  "key18": "4j3oGc1rbJwzdmEH4cBDRRCVdAHczTGCbBFTi9EZyW1hZJZxxPi6KmfCrZJtfTGCykErPfDphHbdcUdFiDEbmz6R",
  "key19": "27hqB86uiohp1ZRiXvAF7ijqEPJeirNeMUPRtcJaqvbubpZ2r2S4QudNjhVMzKqsV4knEgxutkwST4E2PvWg1QDF",
  "key20": "2fNF3vuuLDrG6ahB4PhNCMuAxZNtbW4mindHgkkWn7RScRUDfpgrcUMhzwHYtpScTfhtEyJbQf3MUh7VmTrrUtde",
  "key21": "3uBUFVcKGtDT2q7tAvzE8VfqddtDe3qtzKDWiRTfTBpk7GKKBzfRutwyfwaS9xwTmUom7RgN8JCazevDnp6XFtDT",
  "key22": "4gzBhTuB8ygWGirJow9e7qPfh7XTVhD9bRMm9ZSGLAB66t5ohR2AsGVc5qV6FB2bbV6rLcpW22F9JLnfnJTu7vyc",
  "key23": "55LZPqgHJNG27jQHRgpw5APFBhFotfN4gwy8QZSfMksK1Qna2Kkt6cLbFSJdwdjTEsPT5cNThq5D2SzA6etddNjq",
  "key24": "7NYZJoMi3KoAWCB35KnS6SYqBx6PAWuB11Bc6GggHMZN9mQFoNywJSLCUczsTveYHbPuGxs27tspEiE6PL4ykXD",
  "key25": "2NtddAqsPaiaDZdRSM2azVC6ynNGaATdpm9VwvGiFEHmgTfgRmGEEYX5jNuSfyxndZEDddG7eqaxZEcTdNXqb3M4"
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
