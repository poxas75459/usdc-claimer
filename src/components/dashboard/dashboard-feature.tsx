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
    "2QfFkLWRZDG4pMVjax8oex8823LC8WnC66JEkyyXy1VSg7VWFuX1oWd3inF7tgS8YYTSY7z8e3GQK4jfBKgw9Fo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZ4bMMHTh2sNwz7PxVMdLFWCGWKGhXz3qiCAsQZSFdcmnSxfBL8eHBcqpxSG8RZpaGePhmQFKBM7Jz77PpqbDVY",
  "key1": "4M7iYwebXoXoAawsTzeE5VcrD8phET9r6LKXJ3UQmtevNF7cXc3WqxCBza5fPmDpUxvKZU1E7zZc8WqwjTBcTKAK",
  "key2": "3J8fZ3rqXaMZ5xPyzRTMJmM7MBZAVUkx896uuoFuJ2iYTnfbdQg7x57baqYTWvxBykgh2F7WkKXUFyvzwQAvwco3",
  "key3": "2pFKxMJWecRbB2kyPwAFLqBLLWavsY9Hz69UACsje2Kvecon3sHchiazYxVktbBGXL8RbFqNxwfSy79aU218C9uE",
  "key4": "581KZo22z4W7YqyMyZZV9jjYsYCaGtQub4CT2WZMhwZFiuv5KHdA4SA7MwWkHZ9jRYp9u85C1iN3kCKkhEA1F8um",
  "key5": "jJpuypF5YzN9EJ8wthsBGm82iCkfxTHS2f1Zm5YtmgCtA2y7jYofekP95LyVHX3Jc6aEyjk9E9Fiy9tQDJSBoez",
  "key6": "2VurVkeUVByp6EGsHk4EEDm8EaLdWP6Xo5DDoJ1dxrKcDDBX1u1XWD6TbJGeVk9oud37eY8BUVpPToLzph5E5vRL",
  "key7": "4NNrhzg4T5kXkMXs9kxAYqqNf77TNtapoTgwc6cgVRQ9YMwuBGTAdG3VEaNFyKb3Bh5u8WtSt2iiRUTwgMWmW2tj",
  "key8": "5iwgDmH5pbzZFLX9qtVps9Y9rMfbMko3sRqemXgXFH5ynZZd3ow6gVtKdDsAFP1HGushu1g34M66Fc3wddqUTV9e",
  "key9": "4FYdGqPLVLdvuZB3VriU94EWbZAr8PZh4LRcQ9rTwk8sYanWi92o84Ky6S88yL2pPtUekqJuL33gFT8aPfymEkPv",
  "key10": "2H5MTMH7uVSuMKSHeyTNMuH7LQqpUYQHG1muobxCv9icAQQLCs9Vgp2LRhkx9oEP34kMpfPVV5wbdbum7cRkBo8p",
  "key11": "YdgvU8eQYeDYf57sPLzrTqCHV7KTyup67YEerAYiuxKP8HHtunUymn9hgmwS5LsbZjqftqnbQRzzg3GHKLLR9uG",
  "key12": "3McugWcY8EWW6HvqXsVL2J8gouD7QR3yHwgiJiz4uXY6adtoxPsLq2U24uq5gm16GepPvBAT2Rehrypfw6nMVsPx",
  "key13": "67ptfr4oAQi8BJ2DpPeLnnHJFWMdU7GqAhzeh9YxC7zPTxsmtQ8zekAyvPtMK2Pvj7XLuvPDQVcBMWghx5vqy9hL",
  "key14": "n1c9xztAX3BxpX9LVpEJBzqsrK9Bb45iZQJuJDyUgqG77DcsnASFaD187LPUvqvbspxiGMMrCjyD6kRTejLEPRG",
  "key15": "4uZRMnrWo7aS8YNJprewZQcmPxNv3XaoWctMmfsuDbLxDqbBj9Jj3zFwosaJKPNLcFmUrhc2kY9Kqc2JTZkXoZq2",
  "key16": "i5TrcaeyeAGJydGoXU9DeXQyFD6zcGfC2eUTd89DTabsgvcDL1tUvjm7UpNH1RHaDzhZY7ooAExzvZd6STz6tnb",
  "key17": "2soHZJEpExx9E2BXLW1fmQdDrwzuWmUq5AJ3YN1XREPRo8Bvs3NfzmYnSPVrTujVPQNgypr7BCvEFLfx27JZo8Mm",
  "key18": "2E5sgDRuMQTm5VGVbcpHmXxMviUDi9Z5fEWu1oDJyFAZLwpWoFFLDkBsaVddysNtiW8oWeh67sQTaa1hFCcSAZSk",
  "key19": "37GTTS31SRDaa3rYMmSpGTAhLLJWa9LvcXrE8s812AHUBpWgSCNanAnhxY4xpgM1th7shHTCq95Ma4MNxqpWot6Q",
  "key20": "5YxJ6x292L4wGFoag37zhtt8XdGrRszh1p69hDDGSV96exBRQh7GAAQDhBpWJDUwzLvBZVpF5tJdS6y3zk6P9EtA",
  "key21": "3tD9QaothJgUkAiJ5N6ZKRp7gKUbZNKWAEprD9PfCDNmuQ2xLjTa7pZTnQ3CBKMdtihH9NnJGrCqkib7EgkPoD7X",
  "key22": "2Eo9VxRjhSdZqtnQ8hknDSPzMRFqkFpu6tfbkvk4zgLtejdSBgDcf1aQjsDwHcyTk6DiZftvXocNJDx4sECJUYgh",
  "key23": "6513aVWCH6euJukBaaqipx4rq1NTRuNBGas33cTK6bPstMpPWCeg7Mex4fYj24kPEQZfcwUcAoJ74J5qkHKm2X9b",
  "key24": "4YUDi3BY1fc6JPBwbQZhLCJejBnhWoQ7tDKhPensPZGoE3azF5WS8dk2ow25R5yPJGYWSXxBqXT2JqJbNWD5BPMh",
  "key25": "39YAaNyZBu3a1iBzUcFrWrkLAPDtwT5SXiyUJLotYYAJr4hdfKTijXYHDNRnsEFLzJEUvmx8Arvg82V17v7r7mhY",
  "key26": "iCnwvS7jTWZShwqaQ4W3bdcpujfWiEWssy9ST984f4WkhMvxZiMhXgg9kV8XcGJJ8SzdmakuLZ8HkaLHxEGBL9y",
  "key27": "2gRd971RhnG3Z9it3F4rpRGT9KnmTZYhrVAbU1MMmGqSFwDWeDVevsowv1jNcg5bWzbMRdr66VCBqtfDYSpUPZsm",
  "key28": "dcL6MPwUKhuGGSK9nwV9FpwbYSVNWVfMhKk9yQkR3PszzAxxjEWjvWqcNB5wuvv5pX9ZWPDcRwtoNxvQuhmiFTp",
  "key29": "3zuruzQrXfoztmSxgXJNgAG35UuG9dTs8MRpDSebD933pkDo6vwGr1iRs9hBtb2zyxsYEYrzYP3UobE4DZWtA1sw"
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
