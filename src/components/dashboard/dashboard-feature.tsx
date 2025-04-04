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
    "4iVLx3raYYf8zU5cpM2yt2Kx7XwL8h5cfu4g73tGR2r4jDgZn5S9owMGPJcmU4ca22bFrT6MEZXe6McmRaFvW7Zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iEELTDJqAbyk4LZp3kHZSYjp5gv9Do8QbPzyeKuPmwWorNAsAofcmy3CjZv4p9xsuxzm2bsJctYJMWhKQm2S5FE",
  "key1": "3pV4gasDwzgosrMuq1Au5hEvpjeAtYcFV5HFpBZf6CS1uWxLXLupruXKZcMrnwZMYF1dDL8K9mZsw3A9F2S7ZWEA",
  "key2": "5PSJnu5eNVqPsFPmnFPXh3CMLL2V7MRCqnxpHdKuLNtp8iPJMWN7BWyTSCZoomTFUHa5VnDpXjAtwmrL1tAy2TCA",
  "key3": "2mnkdkNZYCxaof9dqGro7uQWcr8DACgwJTA8jCfcVuzYDzjAR5jL56eb4qribeENBmpnHxYnVQzEu9qXPxGNgiN8",
  "key4": "3EU8LjXp3LFxrc7XZck1pThRqFzEQfyJMYgRKtxrsJyVgW29PfBrQY5krh3a2JPmgbVmxQWCybRZvcSRR6ZDTuDa",
  "key5": "3bB9ERPjFBcPvb3Jcyr2iCJpH4S7zbPDp6N6z3M7AxPa3a98t5YMPRDSBrTCrT4A1Uq5fWnKJowbyCDdp9p6DSoz",
  "key6": "2smoJK24Kc68V9jos1vnGJTBj8pHye23X5USvQmxQqnAyY3tB48gjbuWgYaZJbtSp41KxcZNjhCViNM4HYP6u36r",
  "key7": "5hBLnaaGLQ9FtxBAzdALCZGpRvNNMRJBvYteqSYzyXC8DvSMMEwau4iRjCcnreXGQ9X62BPuAi4e59nUeGJLjNgE",
  "key8": "4VdHxDnHu49M17tpPvH5sBFHKnuQY2qy2BMQPezhQF26oTQyvRoVZMZReuxUCYv3vtspQRxGcCEursS9izXUhh5Z",
  "key9": "2pgWyskWLt3soEF1w75gvX8TJ377VwV6E8S6NVRhVCjJzFn4fVRx8XkRjZxzr1VQ1QQhEoMkZtH3G3e2y9Lwxiuk",
  "key10": "2VbPEeoDSqkHV58cTtiLb9T1BhpeGYUwHEndneGyHJCSwEoM8nfcrpbirvnf4fCt4LzoK7HY4caTrhu1jRLfLmfg",
  "key11": "2ZQKEgFShu7EgKJKj6nUhWL3T9NJJaQujgFQLVVk6EFao7XBpsjaCfWWyxAVG13Wnc9SjyMfnxerykyBsQ6fkRpc",
  "key12": "2VNTNYLeQHcCaYhmpniPPgzm1SpooV7zTcp4oUafi3uafJeoi1iTCJsuGz7NGg3CCbWUAzY3hkA5teZt7Dm5nJuc",
  "key13": "5P5bXEEByyUBuAMLN234KZ2kY7yQZUivK5XB5C7J2AAEYjMxP18q8M6sXGVrprPMCUXiBDFXr16SGdZgCJ3wwHYd",
  "key14": "3iVBRCKj3keMC5ET6HE75kGKKjFAqQEZAD3vhbfszsaij6GJuKkjUVvaSjyDs9fP2sY12echF4n8V9dndvwiVqtY",
  "key15": "58YGD87MX3z4w43owzuzEPEHrKQCTZSPZhHuVhXNjGSe6EDQtBDzJCHW1utdLTtvu8EWNkrzANU6ncHcZDG7J71S",
  "key16": "2s5KXtX6fqGMrKH4gNU62F6fqDahKmfgtuEQFEJ68zmyDfTZpLqorFm3W5k7FKaYXDXUcC93towEb51BReQtbrdG",
  "key17": "RSxi3wHdC2gtJaYp45Z34AonWaKf7boi7C5wfuaTLvdjJFvrMFwrcnuiZJDyK9JhT31TzCRPCpqRTEnk5TV2HH1",
  "key18": "4FrpM2yuZSiaQ4n4X8koeZYyNWAu4vSHGDSc4D6tz3SM9QRdhQfs2Rm1FeL7v6uyyC5D9XQSQ1oeKmsSkg5Ch3Hm",
  "key19": "56iZ2WjQ3TvqFmR9GhvAMpCD6QfRD24L74nJtjKCAXPqH45TSCSgHd4ryPW5Y2U8YHvEjq7XzVdHm8vPERenhUgE",
  "key20": "YoJs63gJkj2gaJ2xJ2gFJe5haHWWTD7YAtZ6NiNYyfpKGoMDpZHTuEx3w8tnm8yFmQvsHrLyWw4Kz3EvhbaxN81",
  "key21": "5oDAPoB8ELGq9ZqCC4Fdiy9rBqofK3NnGfTwVBsnZifK9ADXgc3krEVYanagCiL6DYEbzUY9hsc6bjJdRyxEQaHn",
  "key22": "E9dg4tBparB5JGeyCuycU2Com1QUDEBRANXUco1zEQzwGgh6hvXNodSJj7iatEtBtSNicjBbBnJjYLQXgxRb6wE",
  "key23": "3EgKLg8LH1fbwoaTYchn1PX78kd3V8ZL8iSVCpcFpkG2Apr81LVSD3Hk7oJ9jJVDpyhE2xAJGdXEku6z1dAm2fZz",
  "key24": "3FzVkJQ2a7r6NDU9YvLUgP4ApSj4AuUVKYE4ScDA1bkEJqTxYBxHM378C2Q1ZrfojBk9KxhrNT8rW9jGe4N4PrX3",
  "key25": "5j9hNTHqtTiJRHgpVG8kQFrx8DtSG1naPjCQqmUi8wJgjR3z2zdbibggRMvNRLoWE4YTRS5smkrdnCaBhZFMsw9A",
  "key26": "3RQ5cdzWySDKTPvaKCJ8zeWdK6N69M8XBc9XpMv2SE1WHx67nPpavCA4Hs8zUUpJ93tFjHREBzGEQ1ZA7bP5gKp9"
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
