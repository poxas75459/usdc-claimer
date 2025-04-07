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
    "2VbdQ6MBfs2LeeDZ1a5nWXc8jNMhY4eVzvVWkJr7nwKfwK1HAW2JykqPhAs9iC4MQWW8pKHhNoYhEihGXQNuYPZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WsoP5czgnk5Xnqiq6w8RBvJHFdjhirBM6Vk7dW4See2CZpW9gCWcHDgRw6pkxHEbiMySbFN1mSLK83Ndui2YVqR",
  "key1": "hrAi7nA5weFKwDarnHmhtTRBp9UyNNvMMZwUWMJL7aBXzmNKtqywRQWuDotfwm9PBmfJ3AwApTSB7acF3681mmB",
  "key2": "5hXqhYCn3ujxSexxmhz5xCGK95co8Db9rE39uknYQSaJaWFmGnnopZfTomF2v2MSBopXVhBjRctXtzpmAYLq9GbG",
  "key3": "4nagRgBno9pmeWq4wToZs1oLKDRfse4szm6yn5a7VVQuK4gWPjGRiwc8mW1YPFryvWr9U2FjYVjkWqRTyQ4vYAUQ",
  "key4": "cD5BmhnLrkrpEa3LPSBhqUXXJdKc8Tajvd3hWkiiuBWdPrcp8Dgsia11HVb1TWfgaynLkx52BBZXfEUVYqrY9WQ",
  "key5": "TNL7QhS97qmDQhV3mToAUNTRNCVWurvMd9GZjnb54HCLMZUuLWT8wfRE3UaCpzU2Xm8qXQjHkUzwq2eN21p5QaH",
  "key6": "44Pg2Fj1qe43SdVvjft5rwS83UhBdMQSVveoakxa7iSc4uhcSVdEycCP5TWYoQvGHx4jhJtZ8QrKj6FmpASqmgpt",
  "key7": "281LSZ1DnVqxFCaqKUUu5Q4smqddth47U1FezgRK71EMssWHM8G19MbmAjQ89jPZBXNxN8Up66hP9SG1Jo7Yx33V",
  "key8": "4qKRidkhdY1jFmopAPvvMMUKSN69Qn2whDg9qgbLbF9iGd2LNx9g7wTwY5gVUheZXiNESryZuZeYneVDTZgm6SJo",
  "key9": "57GwGnqtdWQakhzGonPmjNNu5HSyLKFKNoE18MD624dbTCxHMSNFACrhCEoFEwJ5RQDNgLWG5Ag9BToNRMCQBXE8",
  "key10": "36YNxx15LnRDBHbag6UED5ww9Vq2zL9qyoAXjRYEPpBQytzHuvk5cdS9X8o6ztaDbuAYTpyAjFyb98mCfkhDbJkm",
  "key11": "2jAyywfc6kV1FyGvTCUgWVSwZjfNbZVvG86WWGTas7c1C8WZuegWWXRyLJHjupfCXiJQUYH5YHVX6wpux8Rkahj7",
  "key12": "5RRfPxvn6KwMUbgz1vhKDhTNYK6616rtByWNzRi3ZSVWSyc1XZ1xVEYV3NEhDhTm8NmUkEE4hNQASzRHH96nbqRB",
  "key13": "4FYkw7FyJKxv38kYy2aJMfoaWVMKLpvfeNpRDX6bUsJAyNMV7VuTjEYUFtU6PnD5TCV3p5mjhEMPDmAn2QgZEQf4",
  "key14": "ER9dN7WJoP6xW45rWBztBb6h4s7QFjobhveYHZE6vW8oZ2Zhn8sPFk433zC5EnFXNXYF3sBkySRxxgKp4bNuwXt",
  "key15": "tof85wFNBDNu5P9GxcKuCfCLPHJi6dAuqunoooEm428AjYxYa6pQaPs1J3dvBQxtWNAd34xEFqDo7LVzfxhCuRU",
  "key16": "3qssp5LeS6bJ4ExfPHqAd61YWRvRUK1UEEN2aHHp6qAJFESxjsGjMctLb7BaSbnAU6NwVWrVRmXAZUUPkZWALT2e",
  "key17": "BPEVE5gcaKtnngDHxV98rmZSp6whF5p5UZeuRGb5gUB86XYSzYrwq9qFdDr8waKTRZPVAE5uU2B677rX546C2ce",
  "key18": "64ttvz21KqBEhCg9W28bMJJyW81jUnoHV2drCrhQ6vicHBfkbYsSkEtTUBsjYdTjG3CFSAc8CGGeGHYybwpSj5Rv",
  "key19": "2tG3QKjFDj3E32egm6nTmQ5NRF1n7aTRE3D4uy1EJiJADqsP8YowwegvfcbTxNR2o8Z9M3WDwKx3mcoyTckqLono",
  "key20": "4i8gqV9EfMzbVvpocDEi788hZoUz3ArB5cv1gVXwQgberZVKDooRZDe2HYCZCEB5paLnd9JDMKgrechpcVnvXkK8",
  "key21": "35QLBkUAmSapbpjx4y8fpYVtFPzppwFsTvaV4RzdamK3ZWbFmAD2TVJit8DD6UsqMdbgDnvskVbSWLNKgZiQ8LUK",
  "key22": "57GdJpLNZYZnVP21pZimLGVTFUjfcLt5ftn8QDUjE2mv6KYySUX2C1VFb59MjWarGvi1HAHkp1a8JDmEEV29zzep",
  "key23": "2b7BpFKPDRffpwVEstrJRxHvXJJYtaD8mPQytMGdP8PNKoXEQAWk1xPXz3dAAnRNpXWDhAYMDJxiugLt7UeBnNcx",
  "key24": "4CYTA3bYfTAsG9tss7YdFvKyhv1P5Bcb1RXqji9nG1GZvNM3fnuV4dSeeQpis4F2hpPVE2k2kSsHV6NdQmqUjN3A",
  "key25": "2GyB8J3Z8wkvLVFwsJTKXEdjLHqt3iuPjs256uwn2gYNXvxrqPTDpLYMmhteSmzgWuAZAdF3mQgahSK6vG9MkWww",
  "key26": "5SHQreVgxkjeV7nBZeFdUH7wfifz7vR4V9a8LD4F196sgUw9Sy4S3hrWREyihxFngr29vQd7KCdAQrFzDmbvEcib",
  "key27": "6xmGwo5ax4f9neWZCmyxwgfirAmqARBuRvMWjDgiLU1czdUBHav9Vej4RnbWWQ9Vxe34rcHzN2QhVCLXxMswBBo"
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
