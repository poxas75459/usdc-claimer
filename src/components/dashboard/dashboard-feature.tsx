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
    "4Lcr2Ht1s3H1cCgHJs7qePqxShet96mqDr4Khs1vB4zbcqzTJStaaM1voJgShPxbSgJbsq45iY546XUemfpYuAb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vgCHQpParPBV2Wegn66T6DsBLBomxcCDdTr1Sp3CgEEK4C8kzmZEtYrA5tkgjJBwcC8vW4ev57eo8XmXX95cPM2",
  "key1": "2rvPUxJ2fpgChHizfKqyS9pgyXw8UT88TcfpZPJcg9bmYLs9x1RV6yT9FGo8bcShvx5FnyWo3bioP7W4F2UjDYjV",
  "key2": "2tC1WrbhdEod5924Li2SJd7r6k2pDZCzNqNkCoKcTAGYk4PXe6CsGwghEr1RufpBCMXGjyL8Aa5pUwtN3SsaSNpW",
  "key3": "2ghkjXUiVtUFzLf84ddkcULcGtW3SaJ3WBah4puU8dc9eZKfGLgRVwWhzA5Mkwn7U3DTeDXpB8FYHwHE1USZp64j",
  "key4": "24vJRaou9spGZWqiCK5hm64oWv4oNMoBRUznKxHMj33p8dJ4uyWBUZKp52Tb3mwUHFVVVxQxiuTZf3g26SUagjBS",
  "key5": "5QPtXfo8zp7vhpSPUCse5PfhZ8d9yKfYjMeJQiJxHKzh8GogCTVWXxG5dWxRa1ZsmuBC8MaEmqNtbqmbmXMX6Jym",
  "key6": "42kbMVm65kRofySQW7U2Xn2vetTEPHnziJFrujYj6dnLoSSKZ3DfDRcPhQWqW8qAsHK1ekyxtAYv7keJXK2oFNWk",
  "key7": "38MHh91KukkP7eCsZZpiELNs58pUaw7pDfgfFiH1zisA84HhRiaFpepxA7NCRhXBHisBgkWgjncVcHVzyNa3PLr9",
  "key8": "2cicdgEs6mk74hS2TySpb8fTihcXJfzE3xv1ozGwk5oeeZuyPEEPtCKbrK8otYutkm1SYgqhpHuFjUdGjA8Y3K2g",
  "key9": "Rjskxt6CJw1JZBBzfmw4PpLxTetTcCFqud9fQHWnfjhWB3B9mc9h1842nHcBoZwdewSLrDP4rMQaY7KgoH4ocNE",
  "key10": "3U4phyEJBCokNP5Qp98eRRnW5RTyAJwEMc4FhY7mjfyKvXoU3581abb1h5GMNFLtMPeYexfAgAS4cdH7vusBgxE9",
  "key11": "pxaDG8svk1MQrtSZpBCsvWzysWEt77JaCnGpoJeTEUjM9K4z8PAhEMwJ1QqfnMoWWhQvHjMzKZ7RBqUhBQqyW29",
  "key12": "4CZrdc6DpmuHuQDWPT5hPwTQHgT5wLYppKDZdq4eJGDnz7F9C9rNXHiYjnk8XpuydGzRSxsTpEkhwwmsMNZKrvoa",
  "key13": "39h548jdPwf4ZftaDoMpR8UggRZNipQRHqRAV7UqwuEP9JSfSfNv5R8xikbjUqZZNJciBo5yiEVKRZz1d7LfxNNb",
  "key14": "2Q6jWoR5KqqE9hkJh5qdhY5NnQQnJwUyRxGroCpuCZfE7nrTHvn9GT1N8Fcayru8eQDZaZ6Gx78B8H1ZVbkW31ce",
  "key15": "5GsNoWQn3s35ooL8LfoSDzPPTeskyuSwTCnfiL4ncsnHcC6G6B9mpLGcq8BwpYB6WnewqzdQJLETm19x9yLVbMEP",
  "key16": "4xZscXe7bxggBrANPsAa5HxsN6dWE16UF7bzgTbS3AWXU9AmhjBH4pk5iyDTRaprJXXm9VbP42J5JriiaWKWx3uJ",
  "key17": "3Nv6wet6v2wUysYngqAsVYa5Gevq2LHQw5Gtu5UyZ9dSpgF2kTCPKCqgySx8MKF4482Yx52puficjQhvx3vrWu4g",
  "key18": "5hpz8zDtszT9s5MioygCNpAMGVvHJN5iUrBr4hXxyRDp172e2M17XmVuWovsrtzYdeSCYfiQRTbJf2ENEpmet1RN",
  "key19": "3iRvpxSk2HySEbEzbDkYx4W79btbPrP6YzwLVL7zqHKPU3UfA99XvQaGYS6majeZ4x52woaR1mqcxq28rcdVaUxT",
  "key20": "2GxLrH4pZZfPiFEZPMN8top63uhjSN3cFfAYyDvez9s3nnNxEHVgJ9ZFEVY5aDBjhzLn98LsSNvoFGZtN85166f2",
  "key21": "5ra6mbycBt5eetJBSQ5htZ1bkyamJ7Hvzwkd1YphSX5P6aptJhr4RQsrsVokHrQDG4d2Pg8rNbDQHruHf9Tg3USp",
  "key22": "39st7DYZBMPoneAMbfxvpWTFaCDrxW3DT5mV8FF9XNu86Qw2U3bCTgy6geVPij1JHSfBGRBbadabcNBQyqHhGm1c",
  "key23": "NiX5bYfKQTcxMkJPCWsijhdgEYFb5vLnE79DGccZjsZjkThBYwDZEKPrRjxmryNRphc2A3fM8KevcaNsaxkqWCC",
  "key24": "22er7ssxEXGFg8CZ7Y4riLpdFiH5JU7D3L8sDXHrxbHWxHL24q5FiJYox5gcuTrx88ZKMh3H9jzFZvAswQoTo6Ut",
  "key25": "5UPcFmGXdT93GVZaEdGWxmNyFQ2YnRAS3PaGcqMHXJeuhX3sHXy2F5nuzTCSYyDwaJ2aXfbk8yTi1LU6tXywALX9"
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
