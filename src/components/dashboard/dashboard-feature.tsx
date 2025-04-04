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
    "D8USdU2AqU3ERjJktDoKya5UBA3G6EaKz1WiW8KGJ2nDM1uP9RfE9asQZuDgAHjZqUG9GgxHQjH5cRk9PzZuG6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wK5RKSNqdGJHfdge62FtQoNUmgqDXskhWqg5VATx4vkYGTJYNfkffdfLNoFePfRaoSfKcwUtmbvnf3LAC4EvyPS",
  "key1": "iwDpV69sY1EFJ8LKfZ5FQcdz7DfbERj2eNvxUyD4h3UrgqUnLUbauvnqqX3FMVhA9nwXx9tGK1u8vSp8qHKAYxU",
  "key2": "25szfqrghF7uZVan5uRrydxAMf9VY1XbPQHgJAXHzohXPQMAkSxTCxfgYErqwrt7EFGj5gpvrmKYAVjAgr2FbCA2",
  "key3": "mmuRqom5RrvGj8HyyJA6atoVUn1ifDYwXTzQUZARN3xQRZRjwmZfjXTH1DJc4f7xVALixmCgYWD6A2XHXSVjigw",
  "key4": "3LmdZ9dkxsNcwqJsuMsBdb8o76iY38Ncu4Wau9x9e3zyQTgXgqPBS4FySLA86T2g7sUBCTyfqsMQRndEqEhDwTED",
  "key5": "3aXhVGQ5igyhp7s8Df9LfJN6S1mQbF6at8ARwKffHZ9bLhDydC2RnB7WPDZzPnCceQGiWGp4aeWhyCK2C5LJ2Y2H",
  "key6": "2xgCMAUj9kTmamBEw5uvigr1o5q7bhJ1E8N6riwpXGs5Q5vzmgpzDfHvqZhS4F78jekosNRW4aFb1VAGkHa5HfWM",
  "key7": "2Hn7xy2sWXN7UcSsQUDKGhcrU3c5B4cWF9mbpTLYSxKSWGNKyoYvWeVhAkhFYeTBUZtLHquEcpJDyP5A9SpiEWCz",
  "key8": "3QdX2fDNTpo4CmSj4ndrnNbF3MSeZNy9MXaqAT2d3Nmu3ZUcaqN1Ljwa3j6odQW2YiT7aDWtpsgF7YhoEMajKS6J",
  "key9": "3P6VrSinPc3isgy823Pjoiddg9TrRFLbXykr5Y7Zqd4WfNgTWYWFTNGoXAdxGQz2AE9uKRLBa1Hc2B3xRYZQ74jo",
  "key10": "5GuXjwiiGY5obdpJZuZbscE3xK1Zf4pYZ5hje1gmhVGHE5uNQbLXJ4E48MfN4FduGTUY1YnqA7UiuNGSViCkauDA",
  "key11": "2ia5ZJiRxKf61cHogYCs2tqjhNfAP4hX7UhyTQysF8XKYf2jQqjbbwm3B1nqYsJrQgfNRiEyHytStTgw1nvTtsvk",
  "key12": "8z5te54yCMDUbbh87L61gnG1SS7e2uhvJNUhcctHXZpEAYeZpvoRhZMwJc7WFCx9AgeovWEoyMRt5TapCmer8HN",
  "key13": "4jGa5nrVyFDoC2S9Xn8eqKob6kCFPf1ZsirijWV5AzbatnaHx5JinNHRWXGg9ijEMEaTk5H1YJnzcdAHBmyRUjNx",
  "key14": "2cnENSYxsKhRfKhfBj8S3bRmjj9CgTszoa7mgHhR9AzNeeP2uCxZiu2zPyTXMQHgVpsbukATx5y8VZKAsHij5i7o",
  "key15": "Rkh9JYBKYbTFSNsf4eeGGtcuGUdqt52H9F5LiPaPWNb8B6xaMnSyLpjsubXzABkcTU1USpWGokgoymG2kp9gCC9",
  "key16": "4PaEuGNF4DTD3QDNUJbgidsLUqS4FURS1a8tmux6oK8WutcXdCLmmakv6yn4dENsqvn76rF2JRpsgrpSEe5Ck7K4",
  "key17": "4aRdhjUp19cLoFkm2zESjk128ezkk685pk4kce5dePn9AU1HTbDATvTN61APvc9dQPMkA4kqJmo9tniZ1bobwZkH",
  "key18": "5V94UNpvBQ2bYXP6Zpb87YVTbGgJsD9WiWhNE3MvnSMSMgSB8yMh63fTY1gV3j7hkuKpd3qLv39DDQfWaf9c5YTi",
  "key19": "5XQcmx7M5bJZh1MdHoiFGtBXeVi8E9S9L8wdUjLtrGYaM4R6WSxS6J4pMTAvnxoMnYAK8FcE6RCXwAramNmjmt9d",
  "key20": "Ka5aiK7Z9VDw5DFb5mL2zEiHkWgSDpJJvRRLBNtcravcd3LcBVPeQsUcZtoQ1L5MiJEEfUasun38x9X22UZcXze",
  "key21": "2MBCb3n1Ns1fXq4TGHCB6WzqfyygmJSynrq6m3PYz6rYCVmapj8At5jVMXNcNSE9J3ogGjZ4p4cJu4gbo4tLdBeJ",
  "key22": "2fRfFMqvPqeo4bHGTgto8vgQaR75FA26Kt51LupcNAX8P5PZNS5ErbkaxHrpzFL4V9UpJLu6APRugDtae8ohQPj8",
  "key23": "5XuQYqkiR61QK4UU3yrVUpvavgHSU9gPmjK2T3TknZn6BBXibx6M3sUBpUCtGUvVTeM4QEFR3tWRyEnfHAdcuG3H",
  "key24": "52WAJJdV4qTUoyp2hkvyaAbxGQ961jBxU9UEUTrbM7K3EtS98UVJAzrHhd56xAA52FCWNXsh39R4kiyGJdr1EiCW"
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
