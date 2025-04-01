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
    "2bF6b1A45wmX9n3L5RoJBVm62EpMLQq3WoCWiK7YznkNe6DS883xs8fmsYbCpqfs2TxdBqUUauLoFF9SQf147okt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PxWCtfbzSiKJ9n1UEjUenQA9kQMofraTgf1n56JVc6ic9pYYhryjvDC27DMhbKQtkJ8uS46VaeWxNhBw6JfWgiN",
  "key1": "4RSZfCi6PCooLMmG5CZNijVEkG3te3FJNNAgqzK47e2AvsXVaxuSPTBwU4tqCvekBejBBpqjFFCTEJiHDMSaeCGK",
  "key2": "5YkqkBxGsmuCeHLrUZVgbyTmQ5CHKV7sczAvj1ruTcAt7Bq7DvxkEU4Ec75rRWXLeyEeMWCTGDEsTzwhnYx2RWfh",
  "key3": "2epxeHmGbdhmazP4FCT7y8CP9pDXid5pkHsBnTf3ynoYT9KkrVaKT1PSpdJpD1sHXEbGMdHCgFn4LM3M2JrmFkPu",
  "key4": "XqURQuSbpzwioQ3Vpnp2paW3D2HY2cqfnYUKNwZ3EX9aPrQyCzqDC2wskX98Pv9VZDWz1S6RRFGLz8T2YZkeni3",
  "key5": "35W6DoDfpSKkYJ7WQAfp6Rxz6WYMWunPsUJC4wwyTb9FnkE3MR82KHDrub3rsAoXc5r3X42qDbYzemnQ9z6jV8m4",
  "key6": "3MnCNedBwxJ8R8V4XnJDRHMX57DwqSjN8Di3RZoWqV1EzRExn5fLj8AFVFXM5RghAhmf8gRsYz6sqHPdD6dkoG2b",
  "key7": "2JwBZHkb45wrqHLJm2PRUe65N8DWzbAPe1ubhn73HKMsbLBThdftdQPfmjvYuaW1G9vEAoN6TnoDdrzWWPMZwpDC",
  "key8": "4p8mmQcBT1jiHvRzFt6E2EjPe8dfSSC44i2W9uS2bNGXcN2ocubQEeVERvDfKoZ8f4oXFSQvNes7hwp1G5jnPmix",
  "key9": "5fds13JCLgGw4h3s9GfvgWifBx4dpousqKHpwCdJK73gSyZdM5uJaayPfarEPBSr2mbxnht8oFyJTd5JnYNhyFoL",
  "key10": "4ZQoxmr3Z9Jx9pA7VrVHMu9pnnhmEbQKe5BvsVtAJ8B9b55jDqXE8KxXqQ713Cwg3a4GmDceLJmq9sFhJSKxq8Sp",
  "key11": "2N3qjYDt3i5Uv1YUWkH8FwQAQL6aqD46U2DLQpbWqJCdZdFcXAiEKn2zxqrpPm3MUth93LX3Zpg9CnvSKbWKjeXu",
  "key12": "cBeVaAL2iMmEc6bBVAoGiRetNgvynffBsG91EfkmEDvjiDVoTaRgsnDJS6AhGuX8iFddkZ8T6cDcXRoCXvjZxZH",
  "key13": "qRBfySADJazG6m3rLHQxgArpHxwwZuujmg8EbQ2wRuXQhWWYEoCrMCkszKMzCBi6DnaHFfoFqQB4usrm4dFoGGb",
  "key14": "31N281QXSV2StAb78ecA7ytzTkDPxJ89k5KDTcZbESEWNnM2p7uABq2v5HZ6ALZ8oFrGBweRU9BbKZzfthsL8Sof",
  "key15": "5hDBvoSkgU9NPR8abPu1S53dWxQUynmCm9cGNHWynzxaTH57uaSAdyLirmrD1LJTGcaBsMFrHaM2q7eBEhs43ihx",
  "key16": "4w1Eiuu7CcVqkGtctxJ9c6sN19X6YCyX54euNuaHHuDMmSwQ9637EPb7Rp8ES9W2ep4UNvffUFj38gwhnSLgJSe1",
  "key17": "94WquWDsaUm2hWgS7QkDY6e2gBh74csMTAGhYWysf6eu7o8ViBqP3SiJpC8GVmD7UKSmbV1seNFUjpPZBt7R9MB",
  "key18": "63RadwYFCLEF2wBroQydgwPbiP8AX293QLedYHQpghMMsPw5Pwox4a71d1gRYFQWyXkFjywn4hYbXaSYBAcHRLMB",
  "key19": "3WmgLfQsW5qHorUD83pGWMZjW17QM8EwMjUjCzJBwxJmoWa85SRi29caB71MTQpLYcBAe8RMmfsy3bRJDZxM7gPw",
  "key20": "3hrjmJBykf3GMZyv7SQw8tk2JKUomYgqsiCR2nEg77Wr67RTMx2ivn88CSbHrpGaDffhqzhAgQGeRP6MixptBK4h",
  "key21": "3Vxe8xuc8H1CSdMSQ229wdUCqdTsqpG17Z1nrgKdt1hxFBziMSjxq1AWZp9Q7UJEtW32VJ7dTBdnVbj9pq4WXdrg",
  "key22": "46AQSas5Udiyho3csJpfTUCYqtwFWdFrmYp3uWi31VAKByCQ9ptHedYYnyJcTz84mYmXoHYfxYLqywH89SJHEmRV",
  "key23": "5HFR5rCkcJobMY3dSkQPiRTXamP4kjnAPRfMN34rxGeekphA8a4qyP2BuE1WoEtZmZcfjRkQftJ8xGWuUVZktWqS",
  "key24": "U5h41x9vqNWeFnPUZuhQ7LoXyb6vNX9BSsNu5M3dPpTBm3QjU2gj1uccGbppWmSa2tK8iUWcMLySKZUjtL7JqKA"
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
