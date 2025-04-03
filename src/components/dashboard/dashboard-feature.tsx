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
    "2vLS7kRtKuQdpGyQXip7vRbzzgYkDE2xw6r7yZEGxuMj4evt3ksU64CSsT11GYyZtdHEbVTeDLoD1aUXWy3B32uG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33jP5pFXKWrV264M7MasBJ7sZ1fBav9fQNThxRmPfKDYPayravZturor6DcsAdthmaGRtpqZqbgzD32ysLz8Gnb",
  "key1": "L9WG63AJnbrb3PVTc2PMRLB2w5749HSbaVAugLUWRhq7EE3q7TZ3oamxrLNBorggZUjwoUjVZzZQrNFrw51Kq87",
  "key2": "3BaqrbTNU5HViYSDYTQ6pu4tvwkjTkXRU3pwBvJYvis8GtLCqgkp9g4bdLtoGWWopXUANxYKz7ktUxVifeCUAiSe",
  "key3": "65HT8h6qNERQJKebsEKsJjREnAzWkTTYm1XNVB4TSvBeBunMnQ2pVAgAuteMdNsmq5P1qKSJDfXRrAb8SLhtFerT",
  "key4": "5MXG31xravpNsH8f6kQmfz4obgL3wW487i2GuctLRzAv8KVWPNSbQqNXiF7oNRmXzJ6RXLrrvHh4GMYMyweB9ubm",
  "key5": "gw3q9CNA1TkABGnR83B2nu66Wgm22jUT36biS36gx3V1AgCqjuRvYj9QFdFmq5x1AXxaEMAZr1q1AzHwrk9i42Z",
  "key6": "5VToJYiARd1D2LGQsEiJkfq6aWk1CSphDq9fQWKRyVxTH2MZgicKhmfdtFFK4izR5AcA6UYehPrcxd3WMkpNiD96",
  "key7": "aTCeWjzYAc5xrVw8sAGckQwfiwY2CDKFCTWzo9oBUuNvXtnE3bza5Z754agMTF9fs2F4d41S7UWMuzZX92x3V3R",
  "key8": "g83BBEsnxUCFnXwy7RBsHGF1s48mWTJi14ztxHArngqtePkGz5ooDPCiiH5w8aXFmwfFWworAMyQBCipeZwpcc8",
  "key9": "4rAAH3vFi5tX1Eb6bSTHW34fuZ157Rc6GtHAnbNgP8D2AKjgaRo7oCiv2b56WqVcGRuvqyuSXzqC2R2ghT4hEkY9",
  "key10": "3VgD3Gem94sbF5i8Pq8v58kFRy9nF3ynMrNxvPdaDSaAn7gyvcVLbXi7H4u6wwKhfnh3tqPPZCmJ38Lp849TNidx",
  "key11": "5og317ToQmREi8iJ6Ym4j3WcvmCAhHTWDmxcsA4D1LMW46Fs2tJdWaoKZVbBy2vhQjtDiAtR43GZodkBjxMmZHD5",
  "key12": "2FQAuiWStGNCztozcy39PGuh9iQMz4yKV8yxirGa2KjUVWnn1o9dCcxKgg2k12J4cukL1DnDQS8pw3eQeWN1bU72",
  "key13": "2vQdpSvhisP8KAwUGC7DPSSq2gQAbWoTQ3rj691JPqFcAxgUsyeXLvcaWD92D89uV2mwSvUXWGbkLDyKrDKHKbvZ",
  "key14": "o5kc3ifQzB3U43163GmAr4bYkxioPAGz2Xh3LMt9B41gCJuZ13dGJKmu2kofKueDUexQgWW9ieVW9pRK2T242Pk",
  "key15": "47vVxkEexmNdY7cjEZbSCNpcELAXHBuBynQFYWRxVaBfDNcHdcK7GYoDiHiuqdwCvAnEgKTTMz8hcXRhQdg99VdD",
  "key16": "4eFEDkyg42Eerzr1FMPkJiHQmuXoZCu4cWoELxsQNErn51JJAN9ViUYAM4V3PNyFXpLVh1VhQGZWMiKQqP8aKiCj",
  "key17": "2Yd7baha2TaU3nF76Qu6aXoNSDrnxZiPQvYppqe2TRH6Vav6oyohs2Le7EeGR6rCpQyKbJJ1FwyAJHPQtZqp7S1r",
  "key18": "36hz5XPEYMJ2o54GrpzjMJyNpTTCA6YYxNP77zHgHNa7NqnxgybmjAByzhqZbgGe7XE2A6Wjo5rMH6zxGRV8Hzti",
  "key19": "3mENBcZ6zicDWNUBxgwHMVopSQ4uGJJeBtSFyu2N5ftFKRX3jgSfiMfvrhZWkTCFXRXcF68Cf58W7aNDRCo2HSw4",
  "key20": "4Ba15UQ6bnmDuJN8inY1qH3LsoGiRKdLWihV8f3uBJeKVAcoqgFYxaDRM3b9AHFajPaqDiAVQgvReDsfRtF7Msfp",
  "key21": "2Di8ocUbrx611FjLUmbKv8rwMqyNwBdKJJWoq8wJsmYHUnbSsdH7r4o1ALooS4qs7nNhrw42vmSEz3yBcCAb746v",
  "key22": "iNZewmfwoKNTnUpspAo6vp8qhaRLt7iRsnukySo7ugqPJQJLBjed4tC3ybH1KJz87QXcxcti8qWdwhoVgfEPsBp",
  "key23": "3gLbCon6FJCoyTaqLcVXUKgVMWvu28EZ9srHE6pHzMNJ4LDJypoe6VFpZveZ1e6141stoTxXUvPT8PmkRMTNUpQv",
  "key24": "5K1Csv5SAUhJu9D7Y9tBLSLZiwyNi2mQ8FK5Jz3zZ3xJui4vha2T5jJuM7wFUZ6YsP7HQzNpCVS97Htcko1EyQnG",
  "key25": "2U3hXBnYPSD26LTU8iYRiwWBKT1DYpNvwjD2574dTACBbTBZUxyWxXHBdmU4FePgNChhr9PS4cTnPsnxhFte57pF",
  "key26": "2RhdnGbKwtXs1RmMXhCF5JAjQ5j2ncJAyCikWvCp7DPdbaoE6z3pwUo8Hhr6UdypoNa9QCkZF5USUS8v1t3aNKjK"
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
