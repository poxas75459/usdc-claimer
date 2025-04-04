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
    "2v147Uz89MLCea6D3TkAC3ZerrYyFVQeqPz43v3xg7mjuBttvKpxAKvgF6dpN7Mq1mWbUNfPLTiH98oMqezyBpAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PwJ2EwfqUSBN9EtXgnjUNsfFcAzjQuSYTy9CaiseqpKJqRa1aEmY4RSL1VUaWtsuQcmppfXLD5XFV7W4CEb4L2x",
  "key1": "4kAUNcj7bLmam7mgh8gaZpHBx41D9B8eZqfjowirJDNoGi15TyvbhXKaoLRu3FAutFkYP6SpPmNBuGNFQDa354bB",
  "key2": "4DEnuN86G7gw59XJUiZW2T48Mmj4kZugS87BvWUekZB7V7ZgGSvpw2VHRzi34L2ZeSvu2qMoufcEd2mrsbuEwu17",
  "key3": "5PHniHN6prvVbuqg3pZFa973vXqrqxrqVHUnda3zwawBgeFgimkQxbgXv9c2WGPJtn2VUZUQx7ULNYCwVBso1wHn",
  "key4": "Jio45NRaSWU4PaWDeR4y4eD7brMcxRpUiFgsyMwHW1prnSuQVNqGtR1vGuAsLxDk9sEWRqZE3XDtE15iP4KASgw",
  "key5": "3Gw2ktZkjb2LhpJ2yyjr65tZKU1hiD4PdgsvPYvsFhU6KiRC9MJLDYtAi9UN7MCZtkSjiCjGKMJyXaFmPwJYTEe4",
  "key6": "5Yq6ixZ1jknQhbwKqYmL1zqtsA2rzca6F1rgDcHSkcLLkHK93BRrnjZSDQH4rnU2tJjYToFL1efRLnpCzNDqsybC",
  "key7": "4mGSyGMWKPMQj3KbdQsvYnDcm3FfSPkLn7BaNM9YJJj192ng4GesAfhPv9D4dDSeSAo1FFWzye6P7EQFdxECm3JQ",
  "key8": "42siGqV2Qs8ZbWMJCMqwUgRbSzBGYkrtwpjTFz6tHQJNb6pQ6qgUxc4ArY3jPq7jnnhPNC9QEsy3dA8rbQRbsg2g",
  "key9": "4YDLYYPV8158GkgFswsWARpSj62RN74sQgcZDy7nTmfyKoJKBSY6KBFUoWNw8WoL9ZFchmsvwMxgFomfuMzGumkP",
  "key10": "3fLRgKLiqgScYg7NP6d1gvUbnU7RwG2heYfKUCmY3scJPwkvpUiQA1SGnrHAuRzoxhY159GJqSYosxu5drnLgfWH",
  "key11": "2PpXQEUsyFTEqmEgpGeH6D7oS6J2aNZQ5khCNFz3kjGHinDi8GUsb82QvfpdSd5nvhWhgRhb9sCdekXKEjafHv2y",
  "key12": "2Gjf1PMpFqzrZ5dHXc1RZPW5QfXzEZgGqbetFirKiQswLouyoenarkTNrkLfp8fLUGNnonWjLqy97sAbjAQH7jtJ",
  "key13": "5YKV93PtW7pXdjLJ5uH78tqkWRVWFAcmvYW2YVxjMYg6WUxocSqCDKoYKLjpCV7EZVTj5skhENwUpYcV45oL5pUX",
  "key14": "3F3aQojm48sPXobf1vyXp1S6AunCn5W3unvm1tucQMPoeYSnoVP4nxH5w4Q1BLRPBMhNxYBxuUiYYEVZ2i3cFGhM",
  "key15": "2UivpW92xwhTkTCLReRCUQLxyP46XBJEXKAU3giiVb2afiXRTQcC4zvpx2ouieckdoHK9R7Beo8jDpCYEWnnU2MU",
  "key16": "3idQqcNfWeFtndPdBtmGnCkVvvGxiER8RA6nz2fboTmKNUXhMmJhbMfwgK7iFdnBiCLhxMk268GMkBdeMMwVrc8V",
  "key17": "3XBxKapZZZtHrETgiHCSZBfBee6SqAweTCXm6LRy4jibHT3ygf6pUaCp2jvbcR6F9Cx1dXSM8WWGBwuQVQhBjNwg",
  "key18": "7GAoPSbBm8tbbrS7k273RwcgXijDNKKmu9VEUtbtxr7S3jHX6qCiNitb9ZW43dUkTu64c5uiQCwA1Ct4xVz4usm",
  "key19": "3m3Bnso7vvD4924JHSuu5yF4Wy8iBHKhRsMQDFymZPQ9ZgGCmTehMtTU3wWfGfjdRTrmnRtCJAMw5iq5ay4fYkV4",
  "key20": "XxDnSA513oGvyVHs7HesGAjgWp5Tx19cMispndycimj9yEMi2x7YdSGcpAvszkwN7x1ejdQS7Ut7tkTrt8jt7jg",
  "key21": "61fmuecofZ526MvH1Exg11qZMwCu2Ri7TDntpbHWeaupop3vP2FtWsSrYSM7MyRyMZV7RB86jgchj64JcB94DGZS",
  "key22": "oug9mMhfCGkwN3DJ9sqfFV29bAy89scA51Vomi7dwaCQUqh1U5d7s943kGHXQvHrUNYoQCPbSUpc8agGr7GhAKL",
  "key23": "5dk4mK8np43NZGaj53M56VHEU887cMKwSbZaa5gr5uxagmNf6AdeqCMET31DHoogNmNpLdMSBDnwJX5YmrFJWtvG",
  "key24": "2W9Jya7s5mcxHVbm4eFM9vqRxs9hFXtJzdNVQu3nNfY3Cmv87uajNDsoQJcCZ8nbrxUUoxrS3Hhx2u2fw8CicWYA",
  "key25": "5xPVRp4HtFe3YxSZyy5df8R2H7TLCVNPe9nuTESuKD6g9A4nd6xAHTM9ZsTTqb4UcNQu962xgFFHjzGQWVQhhU1V"
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
