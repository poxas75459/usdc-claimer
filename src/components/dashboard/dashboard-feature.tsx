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
    "42MYGhox35u2ibGLy4tURoVjYCzZnctGpLGyFxCLLS7HH6sa45UuCft9QXFPKxAH96w9nM88G6JpBGeeVrAA2RKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HMVB2abaxu7ZRGwqZJeDCUzrTqY9B2AV2SXbBHsxhPbcAjNQW2EiYX7eBzrKndC4rb66mj8qKSVcYS43bF3q8z7",
  "key1": "iRXpyJ2AF3pwUCwTYHgB8uBYG589trE8t1i2iEvmhda6R9vgVNDSKkGZcVhAHfq9TKiem7BFxYgBtvYSwBMEY5L",
  "key2": "3dti2KRM7GizLACa3HT4tBGZmpPgohTLJyAuGVq3W1stSi3K8zW42zsGRRjguAQQw4LoohpZXXEZsN1Jm3qSiiai",
  "key3": "aFkb4qNpQQbYQpZDAEkrXSVam8EXWAysVgXEWzZyqHyVVuGvgis7z5J43LrqEj9ys2rFcMhFVcnLcdwF53Tt5YB",
  "key4": "2SiCJ4ptFGnQusiaHLA9WKmdxaDYM75hR69sbHFBodQcL1uQNhiVAHe3iznHx1SU6eq73599joMgbKETjuUm3ZEx",
  "key5": "3Hq6ozt4E1isArpaprxAKBTxTmrgr1NGADb1THoSVtjd8uqo2PYoxDYTRsTbtnqR8fgzzR2Hf759XqbdDMcrtV2q",
  "key6": "WBJJpk6oyvVjjTPVXgDt2eVzwQ4oayJWYzoR5kUSewcytHSkR6kbStcA1eJbLX3vqYuZVa3edLFeEWS7sQk8CgY",
  "key7": "3vdaWfxY3LYHZ93fVZmEBDrDtY5Nqxmo4G8XdAANTGsb3HmZx8WbZ3nU2scRqWpPY1Q2bGFG7pAV6RacrdWjuHzy",
  "key8": "46urysEfo3EQTxuURUU2EYJoamGorX9V5zjzdHFnKXYkMgX4jXuDXL2iz9DK4qnpiQkyRrLD1SjPScbyRatdetzc",
  "key9": "cMsfYtzvcZP1PcE9WpJRPhjwxXHf5WPYScVfywffs7Zmg6qUXPzEB2PyikcQd8t9uHEB429ZCajsjzWhvUvZ89t",
  "key10": "5EJNmwV4BMtT6DmYSLCJCexjKqp84j9iFz9hBdsac2chYFbABEVXKpsRWD49Sup6mdd6U3Jgk3VG9AKo8998a2a1",
  "key11": "37jWKT2A2R3pfoduyJoQi53vnp9yrvQv69ipwMs5kpG4vJisZUYtMCKkYYie4pNeKMW6uoQHQSjQdWgK92aExLVk",
  "key12": "Pv3ZqLn5mCpZmeMwWHWF48YvxCMfcsq9s9MZcZc1Dt4vpz3MzRXm11JNNHTZKPrxuToyKcnZRTqbuYGewJvxQLh",
  "key13": "4zjMGw7pXxdXSrdZC4gHxfDkDKXSK41YE8kBrsRcH27fJB6YVZPks39bHXGaNKoqrzTBiG7QpUirtLj5vchQJ3sr",
  "key14": "5ditSCkUr1PxwShPyEKsjcqQ3cfhzSGAPbf8p4bwvPifgmi2sjfK4GdX4D6tgFzuPRgLKpQLYCSwFTmh2pvNsFry",
  "key15": "hkwknKKoCmrPERkiYokFXDCPhsrsCBCP85rfqE7R2CT4xgntEfaWiZej3SpNzfzYCybHFLk3kW5jV5umtffSx7J",
  "key16": "53z9115GKkgYDuSsJr9w9VBRRpbxtgyBBDhQy6JeYDRX6EFP3ZV9HrSKdbAqomV89RqVouWYVNZpw6FPsE6FoShf",
  "key17": "3N3hRShQ4z7siLGEvz4BM97MsmUUiveP7F98sVsEzfqxv8VCF9Ma5NP1Gzbb29oKGPHydXGAA1Z7foAhKxQXVLRc",
  "key18": "4z1xqS8g2JneUSfVnhLKLwUg1QKJUTRNuCDa2bmYUxy85uzQtLWpbFDzias2oL473JkshV13sAQjZ1r6vNbF7DrC",
  "key19": "ePxyFfFApKmZbiN2LDv9pvBBANN8sFE1nEUgDjhh8CJ4JjoHMJ6dt3tMU1dGEuVkM3WkxJhcNvyNoHVRA6FPn32",
  "key20": "5cYZAMnTKcJZ3TDSKtN897owFtM4tMPpyJLHFPkY5wYzo9tgxfbRnCz3bgL1oCVPobECQrRoNUChYn4J1yoDhL6G",
  "key21": "52t5E1vgDHB9kC5TrtJFTGPxxPAfvtfe5s68kzMMvgSB8pji6kx6ZkSSDkU5hjuPj3YYGYQHLnJCmJkCz7QM9WE7",
  "key22": "5ACRjwG1shrd1inkKxk1WPzwKU41cZ3YWnjP1sJ7GD4P5n2YEsxrXAmnPbMAprTkJFsvrNCXmQ9nH8bHTKh7mwV4",
  "key23": "38bLvUmJfiPCuQv4EQL3P4WjsfpEXLeqSH852LveSMT6GPAbeNrX1XA1Ci3KxQaxKGjszjULHo6w8YCEYZuUhjfe",
  "key24": "63k9tf5EzHNwXwoX1dywEuEvZ5fgWE67QKiHq2q1NY4W3JAtw1fZiWLH5wMcwcW9iSWiNFvrFZcEJWPi9X68eak2",
  "key25": "TV2Gj3TAsLrkBHTiDZrRqxnLnN4tdCE3pmjbwTFYKDPKsmp5RdE3Yq6ZmY3Yj5nSpwnhK822SnThsTR1JK32h86",
  "key26": "2VXJ2qXiYsAv74XU4UgnWXXeFbzvtxPzqoA9MZ5QSDDnqsviywUA4hDLK5vSjC16u3jQYaHzghzdxsVis97QN3bB",
  "key27": "2ynhyZXtDvaCKLiDTHRuHhpEGoGTdHafi81sao4C2f8kyXXTcwQ5WZxNkSfgKLUWKdYU6jKLXBv9Q7tTRQmy4oDQ"
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
