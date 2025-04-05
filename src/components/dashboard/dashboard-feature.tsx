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
    "3d5h2nVFk59GwRgEjUVkzkwbx6xFBZioznX5K83gW9bxQQftjULPMn54VUxu3GwephUcXL7P5DQBETeLqBeSb1pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RRHJZ87x4R1c37p1DTnLoNFfYiaLWXgpZXcKoEFc7Re39jtQX6oB4vhsDHtHn7MtxU9x8Z4XvNtbfvm9pZ8RLsx",
  "key1": "2TnLjF4HZKSn5KwREPw9vX3VJGHwuMgtJfzNocuzybnnUj4Ks617Uzb3SdCMvgLU7kroANDY5QmZV4DxwVFgDLaz",
  "key2": "ThYXrNoYk2ANKAKnv1z9bgFFDvyKcVC1Sk8oSGTtMWUEoEtUzqd8FL8UhcbJQecCybFWcpB6HQHG5E2ybQGHk5k",
  "key3": "3NohHHr6KqVbPJ2AkwNbqfHRCujQZ4Y3miLw7gK9YrvSfidDDudXd1Q4kLPqiRZBDZbPgAze2dDod39nJjgZn69h",
  "key4": "5iYkCJWqL9aNopWKCJNxH6Aw2LyvYF1126jMEpM2WjKXdLrRxqD8Ao3jBorwMAhmoT81pEGExHbNJB25sjz5suYN",
  "key5": "cAu1PL9GxbXtDeH6Y1j9EP8ETAFHoLkis3z1ENxYwwoKTA1RMdAnoJrscevxX1s54D8ZMg6S6kA25WQ8du5ToNx",
  "key6": "4hYG3XDoagxbC6YSRQMAibUqJuxVy8WZ6iaoYDAHPWAZDcENBt8U8cgHqxtk176Mnv2yFuAZPeMwFDYk5rTfyovY",
  "key7": "2eg2mhTdvTgn5tP5PK2iKygBHRBZvXW1az2ApY2qBekx6rmcri4bv3NGekTHfZ2yEQdwHhLqyokYjNMaQzYgqcVw",
  "key8": "5usVYHXRvY5UXCAB8MVws3KsiqMNqWL2PoMsJFH3ZBGRA1KbAkkQTPqPTtRMwQJTF3njr4xWRHd7pNAwpLacUgGw",
  "key9": "5RCG5SEeh48uyUBzhVcZH49zRDrk1WzH7Mkb4Nq5vWPSinVcyAeceP49ATMiSTgji9jG8YRShTFb1dGPp13L948k",
  "key10": "kexqy21jKZLz7WFPwWYV79eDtxxjNZTjmu5MbzsSz5d12f2A9eSjZSwJJkcworyvrB3uNqj3rnfdnMAH4zQ926j",
  "key11": "3Kay9v6Rw1uRKh5hxMoi55XKqHTtnQxQd7vC3gfamQEVsd4E9F7FFWKgiNP2qrJzwVzmxngses7UiGaVsqdMk1kU",
  "key12": "DDa7WnPXbWtDgTcxa7jzpYGphAcZYZJrj1vKKgdLcNvCjCS6LCfwVuhQ9Fx4hhHEfhgEshvFefwHx62nr5dY5Rj",
  "key13": "5w5gw8osdZJx7hucF1WhxwR3yAESTXR8ZxTiSm2Zv1fJxmt2jVcfYTLaPpf8m36ePfoeHsEeVX6DZweSaXHEed5w",
  "key14": "4jTJJnxDHLmQSuR75UuLqh7thgXJqG1fg82nrPVktJxx5PyKdoyU7xVTE87femNkGs3pfg8ufA3HrSdLtuZuJjrc",
  "key15": "5pCGrLroAMQcDnRCcWrT9CzEMEYRKbCv5zegdrJaMuzzfC9KnUa2kHcN6nQjZjZjLcLN8fHcn6BXpobyea9xT1o7",
  "key16": "5NQSbm9zPen3ckyrVNZ2ndxJidrhWH17qi2gMYSK8Jqh2AY6CoTV4NBJdmfRWzGpoDtCmSJTWZ4oEY7GtvzJfKpM",
  "key17": "3Ze5Zy5g6WAdzM8ChUaLw8TsoPLai9qLv3v2bPt5V6LNSvSpXafgBotHV8LDp6EJCxTbAa2oNhNd3c5Zyf3RBWvy",
  "key18": "2WSS2wjPYzX4rxiYrzxJnDBvJnY1XBcZQHA6gMFBmrUZKCMG3UBkq3vRSH3REZdDCVq2M9ftkuj9Y9dej7tYkSBB",
  "key19": "1gfU9bBnCZe2eSaDpsyH6y7HuNFSZxNnefi9DG2oRv56yWxsk2gyS9uzaTEag6v4aD7MMQmLgK6AMed3Syxjrac",
  "key20": "RgwgZg1Rvg3ddwSZ71QLo7UXksNuPiRmdkvLfLS7fmgGuLSrYQDxEZdwwXYbb2Azdd5G85Ua5q2JtC7Eu6A9Ke4",
  "key21": "3riM3Q98a4FZFmgrJzCsDmpamW3VmmNc44qhZNHskcGyHUfBpQT4vjTnSgGhaRBZXy57uGw2F1NPK9RbneuUJH1i",
  "key22": "3ya5eK95LJ6ZdrWct2t6PZCuDJ8E1qRa5bXseLiF318yiyhogMJvy9jZa152riM3qgTkXPGr4cmQHpS3T7KzLQzT",
  "key23": "65HCvKLtSoSdiVwTZN9mHAHEchGTYSWvXTnr5iWLkU4sjK3CFsZmt11uCqLeaZoyFrNi3278fPrFPZ4P9gboFsQA",
  "key24": "2nqfym2ypstNAhiArfozVUcGo8huKZKxfi1q38hAoZLJ4KzqYg9JQcz8PHQLv3TAEiP3simUGkSMY6eKAA5o3Gb3",
  "key25": "3UrqAEjiXAVyG9xi765vfYspgU6GgPh5BFbZxhryRhxnSVG3hjJ5Pr9uswF1zEb41yo8twfcYn8F6kwHyi2m6i4a",
  "key26": "3o1Z8Rp2gTBqW7zSan8HEp4UeRZReSg6e1SDUAwcKomH5M8YA4hY5bvSt5xRH8aB1Dq4m16pVkwkvHemKdqnH5HH"
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
