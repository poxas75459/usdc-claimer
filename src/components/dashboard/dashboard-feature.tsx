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
    "2YS9iWcADPDBYzVG2SpvkYx9jKfZwPVBD6vq9d8UqhHbbJrVtBYFwhYnzXaLCASkLusHsejqx3WMafYeyFicrWiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4faQxVuPyRMmdZUchJBdZx9gp1tC9f44BTvNTiF8Kx7bgwG4QNAAAqnTJJck1bEyHzXvE47hawFkNYTAn4QbXyrw",
  "key1": "2hbfQzZ5u9JNVY5Ff7RNiu3TF8Py7gz8FXmdXawC2BNfRCDzj3Lx1Yv8CynNvRkYJKivsZJ6now7LyDB2zzcJyAD",
  "key2": "3jkHMW3rgXm3WgpqKf7xSdrmjHMssqWSihXwNpcDBxwXkcbhaEDtLMT3mTvrvLFAXYuFaSWiRUgZGoiSL97QJsEX",
  "key3": "3CoCarCCg1FXmL5P39Z7euGE7JuUJajC2FrUFS7LuW4wVN8Az9X1vBntqR1JZkxzCvmNJNDc5PXASDty1WikPhds",
  "key4": "4Eam22rUTPVz7cgACKfEVtakFwsQhuATXAX3cFs36xESTNei8fUJcbLLc8BCUbLgZb8m2HNVadfXDxsiNvYYfQ3H",
  "key5": "3zx9PAxzPJUwE8s98gUg5kAFQqKXqUKuuMxcjdwAwRuWPUrfWrzCXrJCHSkWnjq7XUWQGxS2WcLC6XTDuu98pgLS",
  "key6": "5KW48aMRRAHTPSjf5jwYbBfdSsdzX2p429VveDDXH2xrTP2Cumr7LHiHy5RJm2dpGiCseDiLqjzPtK6CqCiqGGTR",
  "key7": "4fKunTQfAWaPmEexRKP4R7TPNPKXE5j7rqsVLyu3rAxogzdByuFgCfiV1WhE7n97tHWgjtmzMqQsqhT5dz6fE64h",
  "key8": "4mvoH9Cv6BUfdQtbHpTXRLqR3yfQLD4ftjke86jNiY7YfpnRBoJtZRECieuVrJAowHprRPfBCqjmGzEFEiBbtDKH",
  "key9": "vfz8qPf63SCijV8t6rCSkMveRdSn4ioPyWbE2kseDKpSFce5bEFx36UEK6hr4L26yXiRqKuJMLx3rxv2gyVHs9j",
  "key10": "4pf3ad39craKTrL5CDQH2UJCjUF1XziDViMPcsSqsKBchGkwnPor7LAwNUrHrH6GnavdbCfaQAZJ7fDd8eJWzXnC",
  "key11": "23sbJSAnQN2mBcLCvidL1kfdKaaVHY3AmAJGPzqU8jVpg9wH9HQG1zRXMMQsrZop3DTm7WRN3RVYrSBfNmQim5K1",
  "key12": "2uxejkQGaqqYchTEbffqPzAifFFsuaPoCpT1XxRkGjS9ZVuMqojVjCxMmk1PSuSzqdUBQjs8bNfKpvhFjyzVfuSM",
  "key13": "3kRejY1sEHr4pnLiABH9yKybip4Am4JZ1m3HUnHZ1MYuQ8tHaa3QsmnorR1SwYuQqF9sMDcZcLNVfs8mS44HKwuo",
  "key14": "4ABmssKFod94ZT7s82bnBfUk5y3Fvqkjko1XRzPijagasvHLkqzkBhcw8KkS8F3HsQE1THqKLgysyZVYi6feQ2p6",
  "key15": "3VTQC8FakQdjvGakSiLsG26C88vwvQSzqGUALFxcRi7126wQjyidLQ659oRsBCihQFDsXBBdtQrLPQG1TiNGRY44",
  "key16": "59dtCbYi7A9W8hhF2BWqvfkoonZa6rbh9coyxM2dpbEcAARgHainw2CAY7tVWsP7akUuJGTeGd5AVTh8BzKB3zfa",
  "key17": "2k4ynPGFg8AM3KdWn9USaCacNSxBjXArgDNNtAAh4wf6Kd2YsYigi3MoN4CB3WqWNQcWAHGBDMGJFLUtqyZoduXm",
  "key18": "vzdqVGHoAvtJb9ewoaUpfrAKNJQr5LBzAWFzKohq6g1aqf7ULekcEpDTkp4AaBzyKLM8F6aHT7KBPJbwPPkjaCP",
  "key19": "54hM6WYxwLTYZ7Kf3aZ7SQr7s3hDCjUKgBrgMXwEdXcQStjJZQzSLdG7vdqK3s1TVqJ2JKYtjcBwSDy69pYSE3a8",
  "key20": "22NuJjghpjAkA3Q3XAvUc2Tg9Aq1t9F7bLYQoYJPagYKt1bNRX18V8UqpzDceNgumzCjszq7dx4g1ezXA9T2uMRU",
  "key21": "33gzUJT37XRn5uBkitQQzeYjBao7jnWbJfkft4XyqPcqKDK5gHwLzwQuDiT5DHH8yH1ub3r22LQhVm2ScLBFknwF",
  "key22": "4yRvpxxXkXPMiDas9R38ACWfF61AdWpoWPXon15kwzQ3W1Riuh6scc8qr6hYPdT6iHsNMwzfVv1uBaBzcNC3mL71",
  "key23": "3tprVw5UzeAL6ZBMMhn5mwVXJERpEtZV3LnJpkhpQgDWzDNaWYeVcMgBwBZb4s9qh7GxeoxDZjYZeuBach288Vh",
  "key24": "3HDyxshmuwANDGbFHoavieBnjwX3Ui3mzLeHDwz8jB7rPjdhYZkWQpFy33udMJoeQYx7PJ2XhxeXyAkPcjvXjxH6"
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
