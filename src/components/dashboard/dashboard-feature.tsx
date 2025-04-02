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
    "5aiitmoRPPfyejgXRFd4BMMxMtrEmvajsTZCX1idVg3G7ADooxa3fzZ2uDH7vCW5w2qvKqebFp7jnAkAgt2Uabox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28uuGY3xaHpdx1RsxV5AHrJLtfpQEA77Rqjc2Nxrgppc5mh1FZQEkejiN2m8tmsepCW2Kc9JLpC7E2MRmpE16wiC",
  "key1": "6ZmP7BJyQKx4PoHrZL8ABu3bb4TAX3kzekQhtJPMFGfSqHM2AiReRDYoyYp5cGG7VhhNcjnR6PjUf3W1Y34zPw1",
  "key2": "3BpTZJArfQ2HADUat1z1r8dtq2PKX5F8Vx3vCQR8AQVLavVE4czvu7iEHdRiUPbTZdT47VNPuTHU73PuL7VnNTNz",
  "key3": "mkew4hwUGqUs4kDqg5KaVSFpnK6d4FcYJxeJUGwxYJe5QFyDzgQMoTxfYD1YArszn7N8xS5nM873sC7QZoRKKHp",
  "key4": "3Qq3Zb1mFBPx4PmkkBvf1HeoopFyRn7dFMY98fdGGGSerJHpynxyiiw7AoHPHv7kkyewdU7aquV3chxfB7h2YN7Z",
  "key5": "2E79mZam7CqQFZAR644KhuBNi5qLkCN5TcB8EyV4Gr62NzZY7we8gGvM5CEHuKutUy8KD2tWws8C48kGSfVL6QF5",
  "key6": "5k3x4vPC2aQmuJ9WWVfjWePRp1LWx84zS7YCg41LhvUZgR3hLGMos2o1VPMinureBDDjMTnHaStSKYLhh2iYWPDC",
  "key7": "RhtMKXCJd15eHhCZTZCcuvxeTHAV9hMuNHCkJcrUzEyYUppsDk3LYDo7T33YMniBoMYkdxEvqeiTT1RzyzekCQs",
  "key8": "5t4FaNNqQvYEUCuBRg8K8zytj1PAqY8P16a7YAaMvwPPuPcbFfaMuhYHpELeivh1Z2URGSC6b79KbAqyHd9Rpf7j",
  "key9": "57KoNHHcee7kiUuG7SWvgSPqtx1yh1tJ9y1t8jX1LfiyVjFaPhSsxEcbPvfpvbEeS33bmVyeYgoeNPsxvdeRB2PQ",
  "key10": "5NjboH926MJfpMj7sWPvJDnmQeUhC2JP16YwEHAxj3LfbVUCZboTEuuppidd5YzsSWCVtAhs9oFkAJMnebfZ1EDU",
  "key11": "5D4wrAAUSv5XMN6jnaSQz8YR53a2ZwFUvcbRmeQaPtEq4pJktyqopcy6knX8sGhWbYgzReQ1zMpwAYzbAT8tWNpe",
  "key12": "4xj7rWvaytnkS4QoRokDS2omgAxLJp6Qrmp7N3DMsSHPVrzNEuH6dSGr5vHCr5SWCFkBpXMeixDSots7eU1tiTuM",
  "key13": "4N5DPWKN9y95T1CtNJFBamyWsbaGJHDnskvK71Bn2t8sDk3yVdavEMnmqRDcCZDu33pBNeryVyFJate1Uy8mHXNP",
  "key14": "6AxLoJwBzkvAgrJDpcCnZw757LVnnnKgas7LQxEqm2xWCQoAkEcYxy22DJUiLy1j7vGfjcZtwJoSUJKNZYvo5Zj",
  "key15": "54FWSVAoqemRLYJNHLTZ7RW9rGD5zhzdw8XEpdv6wmPEU2bAznBzhYueGi1o9KiE5cwDfvuAGzibkWoVndYRqFcU",
  "key16": "4Eem74HaX7iFNGYzecTEzCaa6QBdUWWi8z4zQyyxWR8eg3AJcU9Pu2debb3sUrv9Bv5JrC1aNbauKavauoo6Vdev",
  "key17": "DPukHemHytowGRfWWQAtVhdsnu7BcuhraBxjxD3TaHUyzioE544Ax8s1WLcrZaqpRvmY1RhaD2XnqeUQxiHNhGC",
  "key18": "63EWJDx6ZpxDsmUwvYMApuBpXxdMpX5Z5P7RiDAfuXiuGVBFqvL3bYpBPExKDkSARyjwK5YYEyH8DQ2N4gXjKS1P",
  "key19": "3LDja1h8mMCYf9tUwHzRyJdWxnz6CiQ6cL8b7L6Sx52XFcjmCyXRAsiKuYCJA8eQpLXaLKTBLKojss4ySL4kV97r",
  "key20": "ZsC9utr8LSRVB4JkdC2tXTBygEbEiNggAik6Gfn8GRdqQtvMnxb2GJajf1hgiPspuncRXwewY25BmHZGTygYSW7",
  "key21": "2ppmsE5v74vDWbEXuD2vBARvzpFpkXrSCeusg6FuQRKVqFrntCYMwoG1UAnpxqn2QX6SC1J8ufhYahJ68rvgtFEj",
  "key22": "usDTh9HJkvq3YpPGbw3MQM6be5HTMqY6Gu2bCjS3CVQb1ExQeaHYkAJEbnXnwDyi3c8DqW53dggjXtumxBbZhbx",
  "key23": "qAjAhfWVpoHpqNNdXboJpdxSBhNriTu8vgC6HsGhu1ce6AQfi2DH5rTsnsfi1B6VZmnagJCLcdNg4s5KrTfF1C2",
  "key24": "3J249YUCtmqTXd3Qh6rELsZuefSDK5raeoXyVN6rZxCAqRqgC7HQixPPxzbSPLcNFa1Pascxt9kGmhAKiDpkEqYG",
  "key25": "3ebyPsDfSSj8zjv5QmaM85Fd8ym2fmRXdvYt85GFHvix2hG3LpXAqUdv6dgYLdvk9PHyTBswghfHgWbdAeN4fMow",
  "key26": "4KAs7Kd3nXjRycmo6vXDgzaq5UKBBAutaJvGvu7aUfAH19HiP9pqibqj7u7B4tbgahCmJ4Y7FiNtonNo3a8jrutN"
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
