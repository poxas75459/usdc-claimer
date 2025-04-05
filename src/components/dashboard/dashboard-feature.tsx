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
    "uBKM9aVZc6yZxC6dTz7D9BYnyixmAwczQVJZmYvPyL3oWp4wcAHboC4sL5ANF6dDfSpBCPLqi5bgX3xKzSjSsSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25fpasb76gXdR1WFTUBe5c5Yg78TXeiLwCiL2dPRzTnKiZ8LzuV79paPNucTm4dDVnNJvvmT2H1ERDNjEWDW3MSQ",
  "key1": "55smr3U51qtacx7jFffiYtwzNSaxiRydssoB1rYC343hiW3jCzRHU1iiv7ASAVod2kRUYHqtKPbwg7WMrnQTmMiD",
  "key2": "59kMSsMseehbEKb6CHL5Bu7CdPakTUK4GBWjiCwM47p4e1rXKum2i6ARpnkpoR2WtCZvBT3pnaUZoiE24pzicNfq",
  "key3": "2X5zFXEQSunfVUUiKMFHbwZDQDCbCsTyuwS5xC2tSSwPWKBKdmyUQYb9bxy3rVYgGxB9HBi6e5ybwrqPoN4zkLXv",
  "key4": "xYq9zMePUaQb6HYUH1EtLqA56XbNDgEpaHK6d9fa3z8UA8S4ZGCqN4sZeW1zfgqgWqCWK2MbNWf4oJQgWGLCWP2",
  "key5": "2uiYDviDYPYTjKNT6GwVTR6ur5qyrq9qh4dpawQSLdmVj1ucSicX7YYSvoSEgCkB8Av9MM3NC1QFir4mvC7W1Bdm",
  "key6": "2mRKPHWwnbboPSvbbRL2eDDeA8jRw7EywdYk5exvh2HV6mGkCbBYV3rNeXnj47g3cm6bRHrMiFqHgj5VePGxTgnS",
  "key7": "3G8wYeDcRQ3G1nKnqLjmRupGJqTnkrCbjBDYr2uP1cUMqvXSWxa2GqrSDmq7dcNJwkdxbfaLtbimWCBcS7abuKix",
  "key8": "87YZofBN78qXc7mgcDJW7Keu5WZMuNsDyEp7r25afZULbpCJ6RkL2KvEKrAFZ7BfTWFEMXgTqKnLVyDDa6hR2wY",
  "key9": "3rCtijhouCvhcwBnxVXhfc2esyjdT33Q9UvM5NAe2MzjWmSBmxZJsMHvfGDKQHNfinHJr62eMciq3mBUNKZ3Rsm4",
  "key10": "Wi5EXFYvGYpm648xQiPAwL8My7rG1FjZdru2Vnou5FEsNkFgtZjEsQvHhdNi2og4s6tBoSyuy76S3sXBkPMaakx",
  "key11": "3RwuwbVZgyJAgpJgRkWTLfHtmPWy5zJ9g3suSDft5jX8vAAKzJX9r1sX8qshwXzDN8VEYcZX664UDuezoNtYNg4G",
  "key12": "3VSdwdBAe1pabz6M3oQJTo4AjKFjXUR8HcS3pTxg4p1PeKuN32yLHN92kbYwYcfLuB2maWA7Fn3LEFUd5VuzKzGr",
  "key13": "BJ9paS3EM7U8nV2qSTgbDHzAZxRtedhAqsNJkZUL5ndMJuPxatxf6Czwm91aJiNudmZWE9eyLdvHsCqWr2uqmPq",
  "key14": "2Anj3Yo6hoSAJiCvjfyHctej2vf67ksy1EAmThCzjrQ9f3umBrRtMMChfVjGH5YtEz3tDrgd19UBQk5HeibAd5Dk",
  "key15": "27zX7AaN4V3Kzr8a2iwGc85JBXawvuCNzJZ8eFwDa1uucCMyFSW9vr9ZRPioD8ZopsXzpH2qHkCkVPS6Vnk26MVC",
  "key16": "4maxSbxnGggPfTWsyW6SqERH9Q5X7MBRRAdSombJ48XoE3cw68CEWTNM5Yp8g2PeDpQ99jLrJF2GWPYwZDHHRJXw",
  "key17": "AMSEgbyGgva83sQ1UWKteGTW7UaYwidTkC2JpUrcuhmHAWFKaDncwGHLb1avuG74Pob9Ym838uqeBtSacq7rKPz",
  "key18": "4WTbLdFqWAEg9imJrUtoSqM26iw7KAxcwA8mEswrzMtMkRUQYQFhTRLjggVmstzXzf54vngnbgatmWBLrL48Tyj4",
  "key19": "2LD4S6Md6ae7VRaqWMmTJtG36pZhacbTiiWzG5RZcP7ZVkr8KKWuP1vyYwGy9pZxz5vRqzn6wBLYMqqE52g3NhaN",
  "key20": "gEvk1B5bgZAeFREN2bfLYEcXJFVHks7Cw5pvSZgPWNTrJnd8wrJSG3swRdo8zw2JEoKvebiMHpWQodhr7BPs9kU",
  "key21": "3FegfSYJyqngNqhHD1Pk71Xtkg4Uj8j1nPYLj5G7TZymNhtoPg2EoFapAdNxWatKCwZBgX3Tw6KBLNrXPr3RQcNR",
  "key22": "5N4xwFTzaMjdDRP9QzyxSpsh3hAHwFSYeEBQFfrPNyHQjAyRHPkhbqvCzVRPKr2s93Ko2PuapC9NhKCXP7uxwWoH",
  "key23": "26AcRYr9D4aikwqK7Z35tTQqmcs44MQyvW2epKCrtByktCHDP7ABg4dSM8wCCkkKmiwXp9gLLD57goWfvM93zHAz",
  "key24": "3QsVLg46zTaRNRBmw1JWB8wh88uMHr3g9ZZDnHdRd4RPzLr2poMtB174FFu2BrJDJuaWojjxX4dLoXXh3FaREZeL",
  "key25": "kvhYhDndPc8pCYc8QAz7sDTMQsX3k4ChrKwZBkzjPt9JsMgqvWjhMDRdfUKAtuDbgT3uCYApLs3JVsPt1MyUvaa",
  "key26": "55wFnCM6WNqfEsBNPPmRGkpTcKLoQqt6embrSfLmVA56SnPN4xaSauZeBLyk4bPBeKKhzdwBuFWy6xPUi3F37YjL",
  "key27": "4pGF7UMVRgQZFZvsfpNGhmCGVohTJhyKQ6Lyt2b7DcAxq4ZeZXVuedKDnMkYEWxwh4jTQFGSyfE1T2QmTYbg8GcA",
  "key28": "4R7cnbojSjepnG8BW1H3vBnqjyDDdEAwvq79amMCgaLpso1CouQXX252qKc52AUWJHdKzf71hceMeMvJYHVe2KzW",
  "key29": "479rVDohja8v5zKLx6ibvYmf1m4pFMNYCyjnSonsSB9k78bTHqk3SMZgBzdSmz6TzhgEtj2GcBbtMDe1GGrQKo3N"
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
