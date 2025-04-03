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
    "uXMFSCkLeTsucqLZ8JXSym56Y84crx4wJ7Nzwsp4oMoxWqAvYidjLbwkoiEV9kcWbWA3XkE2zD8sEJ6nWF6SXmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e4Qa4KuZhe92RPMAnsr6n4hdsnE3vom9Ggqk454bRLdFuusZqPbm1MY6DC6agK2wzcnvjGk2KnHXqTT1Sr1YQQe",
  "key1": "Kz5rJwwZhdCXbKKMEHZdL7Yn6uurtvLynikmgAY9ehUjkXK4pCsjnCg7Hrz6AobHrLZr41kqSV7ktU83zsdvAoV",
  "key2": "Ps34MZWJQh4cY95bdF8iMVWLb4R4haS7AXbUQEGAQoR6kYahQgrrbdPf21rWFWib8b6P4gv1QRPkS7Uv5oCHWr4",
  "key3": "4fcKpXyrNGybpPMf8XA55DXGJWonePbCmsaK4jbG4XDxMmRRyCkj1JAPEXjiMVWNM6rPn7NZ4dPHjxtPjFyKXq9S",
  "key4": "5dDQdgSH3VKHc2Fc2VbAgKHdEKjQwihDYvGhvsTDqYQLJSqU7oqdTUYRasAR23n5qvq1pB6qMcd4HVjyHPcN3ubo",
  "key5": "5RuiLPdLtw7vXFfCqz73DxyC9HS2Ka2KnhrdvDqvia4NySK6SpkDeJ5JU6KmJJcf3e7mjuet2e7SR5FSvf3YH2d6",
  "key6": "413S5Hk1ebcSWyzAEYFVECNdASZf9csHDZrKTeD5hDQdbYFpQ21rFsZZjHcCBod9fWQTx6MRPfUGt41fdoLoYwRy",
  "key7": "31k8z6uX6PimkZFWzMSwmCyiAj61zhapZgjFRo9bzwXbUaQEEoqcM84mG4RPx7caSPKHTxhxRDc4fhs6n9xM1nCG",
  "key8": "643L3rmmZC3MEiQiXRzB3P6WcQbzjPmd7Uu7ww4ZSv541UXerwXbHbTc8zNYk15mGH5fvzxDMLYbfevHvXBSbHnQ",
  "key9": "4JWoSj9kHS1aMB7BMEAmxd1cTVm9PE4yrQviKzGR1YdAcaKwEYoHDn66nEMjGhVVr7aSu7CPFbKUxi1emnPGTNfP",
  "key10": "4GuUbuEbSUuUMcSZ5dDEHZ8Xzhf45DB7hJ5iQodhxc4PuY7fnBFDoC7JYu7u9Wsw8zKChhF25moj42BwHQ8WaqzS",
  "key11": "F2cBPS2PhPWC1QkHL4GMQjitcYW4VjS4EbVM5CWFCqSwCBtA9MmR82z2FzE4ykRzPVCosFrvrmogW5nrJSqtep1",
  "key12": "5RBLaC1ovFFECtSkjZFpbosgLEWnNmj8s9QgfgeoJfKKSaNJ8MREyyjMDUBf18AfSkupSbiYq9w83hkz4Fd15V8E",
  "key13": "5UYQFWF6HeQ8ouDk1Qm2nUWFmyf5yrSBrgazggpMMnMrp1P33meRoppj8rUrET15XD6bbfmCAt1qyjUj7Nxut89x",
  "key14": "4Pq73oZANRZnTdpEbcVmGvrJx3jpN7athJNkrVhGgUKn16K8Qp2Sh9u8roVr16n6EuM6K39EZKVR5quMSFTpVnkg",
  "key15": "3141qPsS3EykRkRRh2ZpHvPUieKLS7ebMfTZHDr5uVTLwxi8ufTRDxcwKyCnRsQqmppfjRdgNFDKrAArrPBSuYbm",
  "key16": "5nqHLsfCPmnrcqNWkB9qrRG7qWx3KviYFGnpWmLCUHQALNvQNeTTAY59EEiwSNoDWKxQwiSRjKkySb635vPpKeLD",
  "key17": "3q4WL2XK1nLkLJL9VUu5WXvAGF2yWycND6xqBhjQML8DDdNDkQZVT3FCCqKANLfcYyXWPWe34DHpvNkYuPh8XWm6",
  "key18": "5d9iEHL7WuTW4mEqsDD6BwWcXJZgqNJMrFD2C6drcxzdzcVAAQHXm2VY6eVGeNXfDozWu519wp6ba3pK6FuVYazL",
  "key19": "44DSMYammj5tu3eNZFTZwMF9eZ3rRveQUSo7BcaFCij6fyMBRheWyqhio2chXTZh7tLvv68SeTovMiPvCv8viAXb",
  "key20": "5CpSLtkKPKaTx83HnpkF29P4uN1msbe13aSW8tiHmXh6xaR2CGtQDZzgEtkvZqcNbkfbbKB9vNh7GsBWkoMibhMt",
  "key21": "NB2qtcAzX3NVkyYCCWvnqTb79bDPN8ij4MbtJTPbJvTxkYQ7C5nhJZUJkpQPp7AmGaW53XGL2qFsy7h7ve71sgC",
  "key22": "5uE8mn6f4xnaS6HEbRLp55Ya5uH5XZTArfuFxBaZgKaX3wWwii8eC956SwkrW6CRKMTa1tBxJTED6hqptChLNTX7",
  "key23": "4KkMntKU7WKzcC6b57kXbZsJKhMmt8SLHeXJqWzbLSZEiDjyUZVun4Mg1iAYsWGeuM4MGEUEp7fsiQu98YMTUZpM",
  "key24": "4KKozrV9he7kDQNae9RMzmMyjckiH7rHXtniYYJdcVpVKeQF1zzb5awHeKgdXdGJ8ZPsRfeWjyTw4MJvn4qEXhCa",
  "key25": "3tiCo8jqHSC5Mhcoa9ZjrC1ZxYM9aqsLonMmwdmYy9n6CLApvhpYnrc2xMyRrmDCneEQAfHwgVtNfMyEHAv5EYDB",
  "key26": "2t8p8uvYy6VkFbEx4HtmTD3WYjWcgjSDJWMSXSmMnGTX3oukU7HwxUMP7LBWvu9AAnQmihMgGEq1NpAf1aASa1Gq",
  "key27": "iz1tgN3eaxaJA1oRxtxDkvPmfZH3Q2KN1DKoJrfBTBX61qrtMndwQuktaHSq8PvPuMQH394d83kyTxRJ8Tq257T"
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
