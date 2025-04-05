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
    "2yRfVrgf8ecD32iWK4uM2euir2xbKb3uMTABvTDFMe4Te9YxUmARiBLaC1nWk27DiZTGXrF6VJSKr5s6NmXoLTb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w9TgS7gXug49ZnbH3LFvui5b9ekDNvhTm4hvWDM1AKKdMvcC43vun4DQgK1oTRLPbwnmXV5E1mZ5HsR8a33i7uQ",
  "key1": "5TfHfE8aZpB3npSzS1LH59QF9WnDCNFBhJvTd6o2fGcUFCvCVeMWV1p4gNktbTBNWv6Z1BYatxRV7UZbKhX5J67m",
  "key2": "4wqZjCVdusKh5dJ2pWYMC4pEppj7DPzgTrAyL3eBvwpm99LX9cv656rQfohMsCsaygbqwVMqhgZg6YMnCZPuTDDF",
  "key3": "AKx3Ah89MEa7SKj29YQTj749AkZTiqAC5rsgiVN7wqMNm569htFKUYhNrkaX34WHoq4F3twDFk7MJ9yorzQr2Xu",
  "key4": "61C5DPuE6D5MvmFZwwo4kNNC4eKbtbKU7bQyvSKFyuDbQTTCW8eHQXcbdyj9hs5nNcr8MgiuuaHX8xdaRFtSXqeK",
  "key5": "51q458U2HLcSa1duPdWMXmx3jpQDkyUBjS7jPQZ41pdGeVYr6j7FjjDR26dYF1AAXb4oEv2BG7x6MwbjLTLLTMih",
  "key6": "27SteiZo7WwSMDdrTshPHgwVibSgcbRLxFzq81wkKCQosTx2n5MB4oeytKQFxXzVRj3pWu2iQxy5XbVP3Rwjpsru",
  "key7": "4UrzSqvqRWcAYYBS4WkgzNKTyRMrmThZodhr6MpEAu8cpFkcohyirazU2ATWZJcpMB4DmGKS2DDs4qgwoJUBkoUv",
  "key8": "4RjT6qaNFYZRNgjGopMEugbRRFU7cXjFSXoncq9MzbyaWftkdvnWyR85tfZskL1dCG4xetkrV7TBmJ7wXuMaAH1L",
  "key9": "21fcYe3dCnK6ipxsgrKEewB6FMHdzcMbk3ysT7RUcWX15AUD1Gef6MmbVu5Ak4mawkYhVHKukQRgHg4gnDUqpqv9",
  "key10": "5RhzfUNydySqsDoeKkEPp4WyFnKFsHnHmjYBjabzvTakEbnUg54HvUCj6JRyLV2yH9GFR3TmEGjbRrPwxweQPysU",
  "key11": "5YbN7K8dccFX6HezTedygyRuiK5PTtNjk1jioiX54fJjQrDNepXtf1GR8dFkaTuBrF5oSyqqevSFhbu6oCaci4Ty",
  "key12": "3yPMPeyRGghuuyPR3b9iZsgTzaoBCcjsgEwSVa6bHfkxajonZSmg7QNdafWHeBn73BrJ5UPFTqDJujYLu8RLj2P5",
  "key13": "2jbRUQAw8XPty83ohb3sCM7UcXqZtfdJ12foGxUrV2CV3LcW792a2G3rAkP2sHpUTaNm7qGQr3UeXCwhbjA5G5gr",
  "key14": "djC4AxcAs7M49WfYGmzEGJBStHqzSXToubvTJPdBSBcf3QYZC4DepgjasfPRBRf9qJfMpV4zThstY4nfMJFe8Qi",
  "key15": "2bWeEWUh68aXN5rKbqZzgf1ePZBxKEVm1AizsLmDeUaUNXBdx67wC6QaLobTiywbXD6SCUw2B74zX188M6BaWgzq",
  "key16": "ezUjNfARVqtAZwqiWaxG4LqroaJdNsPmVWBm96pMFHcU2Xk1DMCJ7L6gUmy2sZd6pUwPUaa1QsDAMNrU5G1kmuA",
  "key17": "3Y28GyuWBcRar8iDxbXqEZFNG6ZtM7ge56DDbNZRyTQx7gcLGmbTJ6mPBFZRFGx2h1XW6bgkHSwBE1GU4Jm8uzgm",
  "key18": "2ia7SK8CXyE4TkNEfz3qLmhBLcr1dGrdPFXDmSkfTYwwgYUyGabk4PQUwcfrsKBhh7YdcYnM5h8MRW7FW19SFRfA",
  "key19": "3afKmqo96SQueL1CqCHiHPYNcqtgRvfe5UBUYn9GM791j1nMh2VUjiKzRkmCGjLCXouyKe5QRz884fhytAVmpzJg",
  "key20": "7w2AMLfTDg6g8jxKBswSFP4mU3YkzmxevkEobtx31nx9apW1QWppUUHRnY483DaNkiRotUtJCqFFu23pymk1grp",
  "key21": "3xAynqMsQFVR7yEbFkXmZr1Y7EryLsiqatGUhgJcDMk2hmsqVG3qxFKHmiDCGnVQqPaTsmKnRNnN8YLHxuRv6xbq",
  "key22": "Lk21NwMcPuXfMPSpWj7kjPkMMdHhHUPvoKLx84FpqUNGKFCRXXMsjwYW1zthE9GFLC6nycEKGs9mNKh2LStWBhf",
  "key23": "5Q9X4S5KVufw8bwTE239ub5MrhobnUUWpsDh6FQiibpai9mqb4n7EsHxs5C4DPDQT5E39eEkpQxF4qQURQzVCXat",
  "key24": "2zo2hwidJiTsjjkfP85pGF4LzSSq6qJ5gwakxVnSepgWPfCRQArnE6wr3HBUfWeokm46cW5nuerEFe3bPqFmUaxz"
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
