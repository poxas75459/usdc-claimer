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
    "2MbQXSYBZiVCvb63tn6Tt2rjnYQLz1aKKRBpqjeotP3DnczRuy5NVa2xMGkNa35oh24GVZbHajEuXMmd6zE6LMbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WdRsyLMWsnsUECPUxmYwvjmg9Gk1vfjB343tAyT9N9bAiKFmJBQLr3KiGwjQy6kocHHN5eVzfii45oQxpTmJ7oz",
  "key1": "5hCcXoZ8vnDVQs7Mb78LTtNPwjuerhJh1DAGzHkd9ZUf7tV8numhKnZxmnjnZie1GF1nwSpQz3j9VtN5zf64KoGA",
  "key2": "2yq5PMQwrWKfr6mMDah9eYdmJgospr3UMxKkUsve5zNcD96hLNB3Z1DBArhS26UFmkWsu2csc8tActg3VmFF9aXP",
  "key3": "2M4iAyeA3v5mrKPbJ3onEJfmXtPbyurxDqvQspzGFtWF1wjRotweESdj7BsZX2zfxfuEbiU7NxaiqwBxGcuGLsKS",
  "key4": "5rUvhTyZJ8e7scBjuKEYtfqfRa94revHA61SCFRMvyDQqFrUEVNYawPQCv2fvVefZvJ59s5BFHxPmCfcJvtTdu2H",
  "key5": "5axNUsE411LQdtGB7UC6eoxj7UKjTVMup1bdddiQiBsk5wWfsrpKbeWQEBRqGKqzAyUko8zGocnFcPUzNBMeggxG",
  "key6": "3LuwcvXgHMjoRnC92f6iFMFhPS26UMDSWVpxX1e5j9UgDWpPMUXcPga3FvLTUJL95Xgp3MKNAHt79XhZjTGrXi7n",
  "key7": "5xqhavrKwYPS7sQA7r9eLZQK7VfgKpBKCTWM5goywQR3rwNpa77iYFjMhsuhhyib6ctt2AaWkK6UWzMTYysyLfmW",
  "key8": "4ffmLXVYBpx8s5bh7pM1K1rtNyd5NMPgSZYhyv2a9PXo2vKpjiH1xdhqXt4YhHf4t4ft969zauMnESJZX4uvwF1P",
  "key9": "37wdKZe9pdPMaeBX5KQBECCjnDBW8sdvzcWmrRqGjWXvf9HpjxtNiK8RnGAgCPKywkHHTdtgTxNiG8Q7QeXjaXgw",
  "key10": "5eu9fgc3f5jN6NatNvDxsdp8dMJV8vKmubM2nP1wKN5z8Mqi3FgEJSQqj4aQCxZ1Y98JJ1KB2DdgKBfrAPBYpMBS",
  "key11": "3xYKhU71vbjb9p7JrrTkC1G73y4EYwACkWHD9LaN4mVeDnUiaMTszcaBNryaygL56C839qnu9gYNf5A9uq5hrw6x",
  "key12": "2ELaPc29DEHSraFGcnfeB21hCs76EPhkd2xbSSYuJYGj1a7KHbBUvsdMyPDSwJ8mpRpRNvVPkcTaNkFpd1W7e1je",
  "key13": "2XSAQKcxjJLhATneD8YaV3PgUaGEVsPeEjNxSTEsKzCGUX6m5keRwEoTwUJYMC3Mn8bVWyfQKF1ZJyh2eSe4FwbW",
  "key14": "61pVViq2nWXRGrXo3UdCqCbuNcTaAs5qoksYwpXAHnBD1Rs3T8okJMtR71tgyRnQURa9mLw31v8N6z8xpv6hBymM",
  "key15": "5XkdFgCyLh2EBisBQvY54koNzaKg2ZRRQrZ2pEvDXkdij7zY7aGYtdUuYb4PyphFACyrPyRGU225veR1nfaBsAkD",
  "key16": "e93P6jFmTdS1PMopKYEohuSrcj4dRysVwMMEWbU6Cy2uSoWvWpk98j8D4wv72FiVMLWXExd1U7VtYVBbRt1cPET",
  "key17": "4HvJ3yubWWLiLyPcFotUzFtCbB89WPrEcY6j8awCTDnECjXJGKT3fEPjTkfjjDrobGpDW9hvkBs36wP7b5RyzsTK",
  "key18": "23PHAoQLxPcsZFiqHyoEfeoRZZBkjGGi4aN2Q5XFTsAgQsqpwxZzEgG76Zdfv6Sb72fNEV8DG6uYfjksZHUnwdyB",
  "key19": "2ethmiBttREGGVpozcdxxxFGrNDrss9SqsXoLigRQ7vmEVwE8kq8crnwGeDJbouM7Jr46Da86yoghzxKF4kGmS9t",
  "key20": "Fd9PLyjWeVZAHdYuXVkTAC7a4MtD7ZaySiZHi9SLZztitAUs7AKReCGJhXc1KKhj1TnqhWtjWGQB1RNWQzdF9DB",
  "key21": "4oMkUB3dGpvd6cxLSfABkzAEe5ABXzBe1FXAjnXeY4BjrcGkDTsksrGoXjdS1DNHq5CDkKUiu264Pa8jbL11ALoy",
  "key22": "4B8127RUBtchUm5gaVx2tuTGXkoFFqKESefaKMsW2pjz3Prh7TKmfUtqYRxPvUgmp8UvvCSA3iwaym6UjgDZWD1f",
  "key23": "2kFKEjeB1GTts2qTUmxagt4EGqnPqZ9T83dCNgjFUfCyzUB7iyhr8nZj2TjaLQmPkJX5srqp29Rb2XGobxn6UxGk",
  "key24": "4QrQEYwMuc1er3TySndPrU5skPoumgRcHKWMUr3D1paGg5pmnUGnd2ea7AEYQxUBEhopVb2JTnDwsGeFGSh2QnWY"
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
