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
    "9ann5u3aTMiJYccYJ5XUwNXL6NNCwKVKSVq6nuUP6mU2yzabr2q1cVWrzCMgsSYCW4AX2qRrK1PVMZnDgwptSPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fMMyp6uABnaPxQ7SfbRrWECEkf6ymG4vDD53nUqQ1QCDHYT8YKs3va1mbdxFUZaNmBgp5DP7h44T2RFzRmmdBPA",
  "key1": "26D5yw4gmp5mcY7cfcvWyoS96MmbgRnifx1wT5JB1Cn1w1NcREV5idrfUBBUb3et7ZjUoAeckKTMNJoQTd7gvzyx",
  "key2": "3KuH8WuRH3jqgWeaWg4CvtcuB7eWXkyEa4gM2W8bMFj2fQGu83cC5roW6MoTPWSg8JcUwuhwioncxV8VZRVUx5ad",
  "key3": "2MhvaJtK7yjKFziXM68cFWzC727a4HGXdYveYDD62sg9wcUK1fKQbPq4c9wnaNGAK27KCGUMzwQ7SzmcL959SJCd",
  "key4": "4UuoC8W1hT4QtQ6EqF73jzzyH2WRENVEG2ihm4L9hTbmWF7W5B71owD2FDr5myryWxcwz3DDS1Z3Zw97oTvWeGAq",
  "key5": "3hFieobWj79M4qZULGYpCkgMMmD3ASFwN8RTETMGF9ix74gsqa7XM64Q57guDrYQETYU217ms5pR3oi24yukM8EP",
  "key6": "5TEUXga97gXTCPoc6e7JzgPGivyX934BEnZPdSD5Ktb9AQXMWnv519fGjZnYQNDBTFUJfT4yazBuWwctVenNKrG5",
  "key7": "3Lc7PhU7MKu69CKCcmsBNx7bXv17LShQw2G2CLqa4crxMHzSmsHXgXZv6fLeHbD78FeAy1xo3d4gQYiAmeRJg9g8",
  "key8": "3Hzu1BcrPzp5JPfrVYym24vQc952zTwnHkA8mkyNd17JBRabAo2HRdacAGxqGuDnjd1q1zeuYjDD4FVL7zp6Jzw3",
  "key9": "3gZHspVotm1LdDib4P6NU4z41dNXv68StA6yvuHySiDrntQZ8ryRo7ZetcS4qzFse93w3GjydYaGEjrmcQJYSC2J",
  "key10": "5uJUBen7K74rYD4zrk9SCGvey1BbVZuwdU6dwrKp3Bxj2AvPAw9ETcZjBww3Dcc452uPKArq5SSv6Sc7X5rY84rz",
  "key11": "xUQuQobQe8hyjxf5NHeUBVfq6UnXfgxP1xGfjKEdbVqg3jt5Z2PtDVkUaKMqRMZpor5tUJJg8NY7mozyaZ31Xxu",
  "key12": "2GxzGdGZhDFwhqFqC8HgJJAG94GTx3iBsu1GPsb7BVsrUyvK8BzBUwekrpp5VQkBp5oSXHVdVjp7zW864Em1uT6q",
  "key13": "4QuYVHTw4s4oY918Hce4HpGhFQw1x2f8zNswsR6bQs2iYSxDkHCziprGpBsnEz1tKqMS1dxijQz4AJpm52yKbYUp",
  "key14": "fy1ZnHnPJC4G4my45G6yi3S9Rg8K3xA2wS6nSihSB2fr95jAp8vK7WJMnLUyGw152LdDMhBf7WQvTbeA6upxKPq",
  "key15": "u79uh9i9pJC15FCK86G2oZSD7xWFQAq3yCz1X9o8bTwCxTxUaVbLBeWvZpGSMT9qS3FS6NekBfvEwm3hWGpArzX",
  "key16": "5Loyectg1ng6i7ND6EFCajAWbFRxeddq3QXgVGWaoUEmZGTzpKpULaRa3vJmXwxt8ikx2CQH8qcUiHZfHg5TYX4s",
  "key17": "5e4RNhyb2Eep2ecyNoGXw6PHqR1yRsYbe2sKo9JujLcxz7mM55X7QnsUyLQMK1PBxgb18rK4SageLxhRECMWdB7L",
  "key18": "5f3e1ZDUXQ3djqCB8cMsBEMAUso4cA3ypxfR8sEue5DMcUN4GwmjCwAQ6DrwSQwEJTt2KXM7opnUiFJ4CUh5VrNZ",
  "key19": "2ch9BuGvK4XcAvuow7MXso4eFMYX1Kocb9R5KzDb8g3Pe56jWvPagScAttQwsKftFJMEE6G6wyvxGdFzFbJmqNvk",
  "key20": "4nAKr24m3inWaAc3EMccBYJbfZqE2qhwQDTB3oqAL595voxWv9g2vsxe86v7mJ4AZ4PE2mrUtzxLnZPTe2Damyqv",
  "key21": "3RvvX12QBcQviideun7qLDupoUqDRVM7vLTtHV71hSbtwQxJN4dn5YHZnCYhE9vLxxTihWfrujm2HQJi8V5Voh11",
  "key22": "4Z8xYWFdHmsmGtkWdUEvz6VcCtVs4StWY5aWb5xn9H8ndTLL6ppYHCwZacJtFdPcWeqyzasAbgecjNCwabntbuvf",
  "key23": "BJSBCZo4E7voscJvUqBhEE7JWnb44Qh6xHmYRku5YbmdYGeAmdXWPoim84MBXQZqUGWwPcbqGi4hLiMoMTW9sxG",
  "key24": "2Ey2NTRhi3rkCatTYUbkLszbTUC8xWqttVgQnbdCMGJB2e8XzAN1Cdz5wryhEN5R9x26dFYmu93i9UxdefD4f4U6",
  "key25": "3YMnwSa8Udm4zKrAuC6oiSyMUkwuEahjcL6FciribuxQv2dLr4r5c8ZTWmcxttKWZVfyCS2XkdtbRLTLLzJDod4K",
  "key26": "mTndbCwHkEpWv48K69neCKz1N6e9iEDRHXQvw9MhgpZomE5syHMY696BQtdEjXRWgq7Q6tJLmi3vwv4sspu4oxu",
  "key27": "3DEv1Vbbk48kbHidpQJ8QBGF6Ly2qfBvrp3jZULd4CgpgEiFh5RTmfWDJvA6uA7PcFBfi1GF951WrqGqHmUX2jKb",
  "key28": "3vGx71Les7kR2YL115ZaCx7GF5ykFhoktRsavkFxjHnzNZvn7iV5RDmrSLoJ9kXbgPWKspKMabRkK2c99aPhp9qa",
  "key29": "5tq1z3Eo1Aget4LHHucboYvEFR1XXxcduTCdW5h73ixLezeUDEbb3GH7Nmi1e6XWTPvwJa2ZxeiZbgQiMWLLmn32",
  "key30": "45mAfJVWG85gz6dcTisJtFu9s9zHPU6V4BRxvmLmsJaTGccv2MgiKm69ZnJnCUShBuNmyVeaZw7T8tWfsGcD5c1q",
  "key31": "28u9e5AQNcw5Aij866Qd8fsmKGtBsWSja8sBJmBmxbPBW9BL1nymi9mJRX4L9dyqnr5k4NtxUWUqRzXsPTb3fvqv",
  "key32": "5zg6pC5dsHqYXLoZzVCDJDPZH8Hps4cu29vM2Cj68TaL5Xgaq77DKernDDE3pxyStNpEcafhEURdtSmHoqWLXbDJ",
  "key33": "5N6XdMcvbY1zzxaioYKU88kvd6tmwvF9CDDKXdmmxWPf7EWiMM6Y7E3nxGwFiDutPYdMJZvQVmHXVL25mnH799fE",
  "key34": "1t6enYrxsKeZezrmpBW1vR51Jk4HBpYBr5mj4kzYpsgBK9oJfeSE5kaJcuDUS9JM7qU8e5ff6gBwtaJoqh2ZrTy",
  "key35": "2mNE9vVymKqiGNCzx3dJQNH1Y7Zw1bZvrcqbZmLwc7xmURcGVyveq4fjhzwkFNxFsSLhTD7RLfREQKC5zkWWCzyU"
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
