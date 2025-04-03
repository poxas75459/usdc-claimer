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
    "5r464DoQgz9YhPPzjLwEfYqjgE8w7uq9vAuBGKShWjVW2Pmpdfr1XWJAeHNA2g9gwEuAV3qx5j1AfqF4y73BWemz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "438oyugybUGa9dcMvC9zTf1hoN9SibE7t83jp7MNAUP3EifhwEotnbAGLue22sDRNxQxksVC37PNhxAu5DAL28j1",
  "key1": "4ztctMHomK5Ug7TdhwYSRQtHJSDmJxJeKQSPMwzu7sMdubk2orXbpdx9hwGfg9hiot41Tnt9D4bLjdkk5ik8yW1A",
  "key2": "5F2bLbm4S1t69A1KAXcEETXqBfkBTr8M8KYU7ydro7BUcAtL9A6fizZnFHG6EB1w6rJYn2mHprixiULudubyxPAm",
  "key3": "2NXyfFJ9GWmPSJDx6avWMKLkzLZeQa1pMZPvA4XyKuasErXg7sYCVUSFPdmzNyEKwHGEXEKFBvHQ367aLGgW9tyW",
  "key4": "j7szzsugGZagzHALgdpEcQuhEofwts2kryPdTsYieFw63Y6FEqSkX2zz4fNZXJ8eGWFHbzrjXAAWQNtCDkcxMSB",
  "key5": "5jAHaiSMNMHoYkgoavois7GdZRmPMZZecTJUHRFeGC3kuAubrmCHjfjpY1p397DWy3Tb6K7JNSnsz8QZurJvQdmv",
  "key6": "3pBi54JLc3nYCZuUoKsaS2U3AkcdoBbiHUfdrQXxAaVCLeoQPv5NRvYBwZqdP6J6KZjoGYhe6GWxJwbUAGGSmBsV",
  "key7": "5UpwdoShN6buKLAxUzEyqjMhgoCdXcxgmW3MEb2y9nJHJmooFM4SQg4zK4AkoRQNgmUstric8KqftNj6ca8WCqR7",
  "key8": "5cxo3sohgeyEciFRwRPmjGprXZDsMWZnCfa85U6XdWT1RSU8ehjgAEyR2zebCJckzZnTD4SmNM1g4zBDQsuHQJrc",
  "key9": "2sbxoUDDGYJ7CMVkvDPoCFGXex8d5HfdDfrwHkt4Zk4c6Eu6etmoW6VaSiqAGiCxy1wYiiSpT4oDqzpxx2Rgdhi6",
  "key10": "2pkbZeqyxqJKj1JSrQMZiuT15CjbiAE9iTx2fLgviBfoL7zDrjqJsruzkyRj45Z5u2whQtnZauEBRZUbeF4qMsRW",
  "key11": "KbLZtaMhnuLKJ1LS1QJXANp3BphmYKf9rAXHahYtzuqnNUsgAD62QiyyaSU3XhVygaxwBmwFSWYsWNWN2j4QudN",
  "key12": "38RCsVv7STapcAHZiDJ45pMvL71rv8H6WnU7guiyfAoJfvnHioQtKvSn5B4dQr8AoMbtGBEhUc2BzuogT3p7RcDh",
  "key13": "efGrfYNTPWW2CfAUDHMugAjEY2ebEMmQbvxbzEFRMjXJ1KGt31hv6zxDNNZSy1nThKjMdytA9dbidS4r9nJkDLj",
  "key14": "4YH7svavWaSoEix3mJ4Pg8TYnhCU7x94GY8QZCTUt2JPVyMzgkuWLCpe45cQhgNZStbXPbHE7EAQ3LJHGaJh8AUN",
  "key15": "dmsh6Z2akp4samMq1oe16JFZuwK5PuCvDhLr1FvKEk2YNKeXfZfD7zsry5qnJ3ZouhH7vtBBdAMG9GSjfTepBSe",
  "key16": "5wYgCHWMKQKbN1xP1Lwmb6LvBMEkzJSAKtm9RT8Hu83PBEfR18X4gWRXzBMgf66dFXddPcfygjRnvW3Cqwq6GXu",
  "key17": "5GqXRVDdB997xpUPEBcLHBnrRpawtuBwLaaxi8aLhSS9vNJoa3XJ9aG3x4MFrt7tz6kdvZp4ggfGdNkNBGNsnS4a",
  "key18": "28meY6rVgYZKV5y5xXmF1fwZ5VtfyruJu44bY1tgnqCcVaguyBs93AkbHaGn6Wp9munJ91BxLkAT4mDQxCR1Rvob",
  "key19": "5NDa4xDWPXV9HLuUJymknx3zXKpmD6cN4CQMvLzDtSK2SkF1wfw6YkjUyH8gq4nifQXZ2bAjS6HnP6RevvaLfY7E",
  "key20": "kQ3ZV8RTuAV99ueRtPFk5DWRgsTxCPWisU9P8ApkvGoGeDMTYQLi3jiwkAoSq8mnj5eJuewas5kjroac5SCq3MP",
  "key21": "4sfpckLNngjp7j9kwMz3ueXkyhAupJKMmJDqPAx6wZxqfN5rae7QpDKduLQZQkqifT6swvvJADBBzZ9TEE1Wcfnb",
  "key22": "jCqc3a79JWzroUFNejjvJ9Tw1WDLyi17jxWpuZz98BYoDYj5avJ4hyCFFJrtW9M6aHww3ykLEr9t8f41JTzQKxn",
  "key23": "3wG5VRwhDZ4BsWpp2yLFFvw3ijRtnjQZvepQUd65S7qpwLbiKhRctyH4xkiucp2ZWaniH87PHFFyth4QvByBBJhe",
  "key24": "3UtVYtKjjecQE8QqqBzKeFdtjHqEYWdPdSNcSWZGg9JNBwEePkg94c3UcRHp4aJHQEUhm9HDxJh4KXCfQrQEjSnT"
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
