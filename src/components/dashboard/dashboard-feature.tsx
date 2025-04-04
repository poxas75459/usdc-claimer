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
    "5onUDknDFTUXnYmwTwtdsid3ub7z1T8xzRecqiytgnpmiVkg8zA3WhfbRwxNgBwAakXPxzes8v7yAhTgRNemi3S3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PqFn1NweRAk7wqBLPi7uezvMXXRNcJSLnJM1TBthrMKweYrRKsLRmPPnDaLTuoy7YHoYWEVo3h6UvhxSTDn1fGo",
  "key1": "tfJieGawwcH7w8gcTww6nh2Cn4E7X16vDjrESAMSMBkDT689zcpTeikY3SF95sjj3GsksJdCSRGw61DwzAbc3Fq",
  "key2": "4t6WBsHzq67JtNrwg4wWW83APQvNz6v6sYrFh63JU7cX4sCZTsQ6SdGioXgbQygRhhx58cWZKjPWBWPzXMrQi6zS",
  "key3": "fDJM4N9CAGzVw5zmcYbXkzow5eEKegUCqtyrHSfEAEa4BjBiiFFzRs3Z3guh3Ee1xCDwE4j2A57atVVgVhYYwgc",
  "key4": "5GSTXtGZaBkzmX2gFuk3SBMP74f9Ldj6Fxk5CjKqdJf72V7NixDWBctaBZ51XLdPQ8xjD8w5CPvY9SYp3sJgmGe4",
  "key5": "6dV2TfkQzjR1tRhSdTmw1tJuXQjTuX4Ht215Yaio7VhwyAdg7Gj8FxUD7HT2mTFeBxsbgA5b633L22jdCpwpTtz",
  "key6": "3Locu7BywPMFEnu1miseNHo3CnNYp9JwC2TLr1kU2RHZEynDxCuxaY7a1rkDFonk7ceoWV6P2CLYjjCWo43i5wS6",
  "key7": "2MsvKqA28TNmqznNfb2PWZpBoEd6woeg2bWi4Mrogt4bVPeCZx4Lq8kmAYMkws6tKeQtXPR5ZJSk1f4DVYwrrErC",
  "key8": "3ptsa67yFPnzHNsBTPfTdUX17y2aR4aKG5E5t4hPyimETnUpTCBC84gqxVt1SAMib3UmzsBbewHtcuS4tLR2SBwM",
  "key9": "3Rg5EsoHPs3awwPs5fuvBxXfRGQFNo7WoJsaL2HhPdnffnPEydZUxBwuzQHyoCKX7phTxiKJvUUe3Ae3GRhf2DkA",
  "key10": "5Zzz81t5PYxKXQ4ozDqRS4Pq8esdigRd9xSBqRixzGXmWjsLf8duYYmM6nkmgGNFY1NaP1y5mrCeQc283UTEdCi4",
  "key11": "BbwNgB8gV8JbT3YG9xQ8UTmoV9TPxuR8F3PC4MPiviQbzcpomySCktaDaPL5kQxX2JJKpnSL9BW1Jty6NJ5WnZL",
  "key12": "VdsSnuUvWi1ALvujyyVxo8iuzvYBMzYkVGhRHqoW9XXB98TG8HjL1DRFAyshbwFTJp8SnpKqMRPe8RRsPHhmX1k",
  "key13": "4jM7mENUfqBipJysTy6DyX7ZhDSBFFj59koiAe8JuKyjFTnGszsQj8HYZbtKJ6rcPQrTwmJsfytkbSQwU9xujMVJ",
  "key14": "63EVy6Am4cUisfM21cRz5KAYPRYtZzWZKNJMBUkkvdM2tPqpUg3iX4a7JfN6mmFpwoMc4LuqzGJ6GKvoL4Q4ayV9",
  "key15": "3xyDK8roqMRwyxtg5b6mhwifCRApMkrWhYyQURmCnqMCRFsBSHs1qEDuiMcPk2qoxPur3rXcmne1xdTtSCcJzbjR",
  "key16": "2yYuYE73t6ffHYoQnhxNcz3G9LJmMfz3utN3HmJSRq1NLX2wDuFFUG6drmRQFQ99w88iA4HHfos2ZaFzsDiV9sw4",
  "key17": "3NYu7asbQv9E1cQp6K3kYBuUrz2nfae4BqJjCqfqAyWYYFMsPnyxgneJpUT9Z9QgHpXqJLLsHSi2YgsCgmCQPwZz",
  "key18": "4u4HnfNXxC6uCknD5JupuEvfhvb64aBYwTEhhBDU6Q8BKgY3cpxEvCDAYSgEFpaGdAjrPPercTPCzQrhiEDQPPfz",
  "key19": "3hCX59KsZkqtu8kwJA8VQeFP9gsSNeZnXnGPWV6pnEFCX91KqkTwRnQa2UFZcMdy4yNfeyN3ihjVY4LedZ1CQ6hv",
  "key20": "5aMKigo9ueebTkL12cLNSZJarZyJu9ETkHaPtWpggxZtCMXss3GjQqnuGADmaas5xNqFgmgkAZx4X1g7iihNjqd2",
  "key21": "5Ef7Fw3gux1kmhqrYjBcWjUE85HZtoyVdmx9yuwr4wG2FWTDUQPTAT9JC2DDfTUKg1u5ntFVnTKMeyWcJGp1NDVp",
  "key22": "ujS8CZcZCcZ6GVn4PHN4ntw5vE5F3aqNehna2tZEG3f2CQQa3VsfCLwg1v1i1DMXjTcsNqebTDjgwVgeXQuXoEZ",
  "key23": "5STuLNF486BgpuVrMLKZU2DvBd6T15Yxsc2e8gEE8rhKWWtVNn7F2VAgoFgtacMPBmX5iLWxnMfUqdbfB54fSg3B",
  "key24": "2DwiduUuZK5EmUYu99NFi5sioGrjtFDjYVYVxTC5HBt4DigYbkYW4b8TY1zkPcrEoXpE4wfe7DB7ixssmd3k7Jnd",
  "key25": "2edTmsz5Gn2Nb8TeJVSWPrUK2PKmudprPugPRT2zjrexckcdFmhN93X9ws4CyRMijMX5LFqKkd2465Z8cTFxTAEx"
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
