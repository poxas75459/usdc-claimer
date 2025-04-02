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
    "HrMsGaBy4nbPhwoYaaxNPiEnqdvEu8gh1QbzX52mHiTyEYcu9PVDUhqWLEv12ss7DKnC4RPuBRXb8fQ7Ny8UZCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wWWtvmyCcFXoz4GLBYS5AuJZvWacdKurhoMXzvBKyXzK8AHSqcUo5b1LCuCENoFZFJjiwFegKLFVFVgp8bUtFFM",
  "key1": "4rF4egt6d1Ax3pyNArzdsqrRgnzSSadHcz5NkVVo5wXWPTtWv1gkL8oWtMmNRAVXtN5eeZy4BsK3wyhNvrvuf2no",
  "key2": "55VpyTnjQmWLixjZ8h9gcECYFr4Yx23JsMT6DPHNEcrkf1hQQRP9gFVa2c3Z7wq7ZdiVN76kKqYyXhj6oUx56bHY",
  "key3": "4wxzN1tJspXFTDTbjniEgo8bfguNHYXmzTpq6T1qdYnzVkVtjZrAP7QTF9ja47f8fYWru5NrG5bNu4bkFeAWJcyK",
  "key4": "3oNrsHJzfYnkuTU25WRs3yVFiufRKPVsfmdY8UwcRir696BFURV2vrPEFovXNRQiifGMabJUbpJV7rDE28ec3oRC",
  "key5": "4DPRJzMfBXbKeRP3fL3PTzV81ZZE1cNhVQ48DacbN3C3CTpp3zABkVHQcTf6ix5M8YYPok4xseZbm8q8RTgUfuVV",
  "key6": "3h2rtGNFZa3RcuuxmorpVvtn5QZt8KXgjZ1okFDT92wpPvjsVpVwjthRwZMdv8fEDWbAYonG3nuTccMBuoB8y95M",
  "key7": "5wDDyG2Nem65ikXZzYk2UP7epfs3inC8SbpLtqh3mEiDJLmPMDf6qsp43em9ffTRfcXaCBgpGVtxmgqwq4jDfEpz",
  "key8": "Po2tsP3h9EA9SARPnXPK8UbHM5LbrtFUofVacJqN2sgjTiHzVSe5NYMoU48TFzBMEpfwN6j3RSMVmUMNCoL8uHz",
  "key9": "5HjkGC5SPNBhx4eYWP6boy4qxGrtAm7g83nNdMv7FZYV5PHr8ecbK8yHR5TuboxHXNFxUkNMZZAk5sKXb4vtjcHZ",
  "key10": "f4zu3z2q2unzaUXxKT8PnLAsFKHTWTBM33hsxZzmkoyYmQxeDiaCX43bTqNjtuKc1CffCvo9sVmQWDHLqcoNs2L",
  "key11": "259UTpfvcJ6QB1jbpxLjppmeQfWEuDvQhVwZPenmnBkkNCjtb3QJjdSeuJP4UAkFYiMtymeeAzSkCVg9gQXzwNox",
  "key12": "65K9jt3vecBi3nJkCKpMcxdQQF8fMYhNagaPAdGvQzQSLzLGx48HD6sajzAxMv77aD5A8jaK4kJmxCE3xX4TjPKe",
  "key13": "5wxxZn6JcRFj6Rzi9tQsxLQ74iEWBjJJVRSHmoGriruCScCf8cbvAVP416b5CGREWfMyESNyY7U3Sq5NvaKsVhwM",
  "key14": "2ULgPrueFY9vSRFk91GZtmGzs9kWwArfHZhnPF6cVTi9hYmZKPhoQPeXWsCH63cqrnM6dmbExDUXKc1Xcf3SsGGr",
  "key15": "3NNAWhomP31cx6wnKJwgJSPbd7PKmxNDRdwW3xptmjHSBoBxNy5N5SNbVtonkX5Bah736e7EsxDVHCfBFMrwfhz9",
  "key16": "3xSZmPwf44VBYarz52WJkXTCrxPSSKx79HxRbPTHscxifpjxWMTy5Y9Ru6ja9o84Q2fTjL8ZabLSE6YQqjzSs1Sn",
  "key17": "vsBw5BW9HSARTxMPUjtrmnzZfPgQy8YmTRT54mMpEegQMMC7NBcf9A5hDfBbec8GLGMR8M1dGdkBraySSsuGLwn",
  "key18": "5rJABajSzfM5puPh3jZvi1q711fvQaXaPhcZ7f5XtkAfMKn5sSu1UZRdqSjefcLRRUBZCiazwN6b3XwxnVT7jEU5",
  "key19": "pRnZ8eBTvycjTeTy8LJPe3iVVhf3gWHVUXBAfRxtGbHhfW93PVzoX57HvcvRpA6eZwZofFKZcBZGE5yh8oa6chz",
  "key20": "5261orTYUVcAUhWyyAc7v8AWW2WFGuvcSW1MtXRioj79gBcFgT5gQy3friaPFiA1rUusQQtVG2RhQsceViAFPNmG",
  "key21": "5PJGsSL5Mh29EwSKHAKPEnHxQXwNqYnXiDzbo9sjVp6doMXx7UCSwGMbKdpJhHa2A4HPcfyGHAWh5vpkqDvLWpjs",
  "key22": "2W2xFtHYyXKPYq36npLvpWabFHLbTJ7G14mPXez3bBLz6PCwFcR9ccjJRaecvGesyJagpMC6Ufd1vnd3AviF4QWc",
  "key23": "6142G8S4Qa5EpLiCdxk8Mh73w8GDnVmeL2YqX5oUHi1zeP7XXgWkAXR2bHopfyAnpqjq5EUq8WJh9GZY7ViDA4W8",
  "key24": "5vQiry37ethe2ro33R2XHHebzHKCEBgNcFxAmcHzoVUrRkjsQ6V1zUu2pTES58eh4PBZSzSRCoYV1K3kfBacpGFs",
  "key25": "cL34QoYwBgwuHn9dEDjTE4Aqdnerw94PbCDAUW9DJsrAaQ8i7AbDeCMmvzE2yAPzQ7hxvcvTp8UpfcRWR9vzcFN",
  "key26": "3vhVuq6ktWjzkiabPx54Avqu1f7b7eZihQq6eVojqPHuq48vwYHWmVeNVZwQSfxxPMFTtZcLx49SA7Vpmfyh4FZj",
  "key27": "4aTptwY66jD1j4UTj4ZJ9VKX7BreqreLVjbTcCrBUSCmWkda3xd7hsUTSUAy4XdLL6xKwwySG1UfYxCpaMjMWMaa"
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
