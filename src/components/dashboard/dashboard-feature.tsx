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
    "5JTstAnTchWehCrfqsykwAd1thKe7SHo47LywbXs8qZqg71aDQNrUaWBnLHECkCcyTDTVC3PpZU6MujZ8vM2EYZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45osfNUYWhjdDon9bezZn1BMKvVo29SMNmTRf1Y3PbGg7X2Uo2nG92XjtSqGjskwn4T9imYj3ap9MwzXFsa3sRvJ",
  "key1": "5TeeUS6kikdcaSksMHpvkKUL5A3HDHWYhnVG4aahS2qbkQtK7r9Pnwyruae9P3BU3oDTMMs1p4VZBoDCxmM6VCso",
  "key2": "3CjxhdKMrmAZ4SdLMPBDGb3pAvswyp8FqqUFNiFJFEByT6sQt4zJ9Br1JX1GMiKdET6PSiEySmatBKZnpSChT7E",
  "key3": "9sHL3hqYPjqZJsdTCVsk8DMLp7qQgqA9jjVY68B12zjaGASF9rq4mWxy1REctgMdJpV7bgjTbiQJEb4L6yChx8K",
  "key4": "5GBjmZpghTcxmAyULQ7aPmoBAa52wkToRxE8z5Umux79nDt9DnvXuozFis9XBXRipQ8TzD2oZJYaKmZ2w1gFnpo",
  "key5": "8DAn8wqXPufjqwn7qBz7A3jhTZBNbEcQNp1UynJ2kRtWLL8tdmqN2sdART64sKkJRh6jCpubcfMP4yMLoqZeZe6",
  "key6": "mnZpSzSu7uV3qPVftD4mRyA6dTg7nVPNuvfTAaRsE8x5oNuFwDTc24J9AcERgh4u7evWFHhKHk1dR9M4KJdNnZf",
  "key7": "3hP4ygNMQsPTnrdaVj12a6DxUexEnEh3U72a4hkJo6nL3SCsfokXLZPCwp5977mCwxLXh7ZHQKDKSht1cgRsyxgk",
  "key8": "2U2t6KFnptUY7gLE1BeqHHAr65QictWDApEjF7UCidoBQwwy4r7Lk8DAvejCt7H3TYGxSU6PXbBs3cxuvQGtNszn",
  "key9": "4KLyEoQE3vys1BNtoWERmNJRH6uhzhbQ2hLjLR27AgEVLF3yJ5un8Jx7kJvhyhzwtaWKJfsjNMuG1fLnedDB5Nnh",
  "key10": "5LZA1q2cXwbst6nghLo6YAbSU9qfjCk8oLXVArqaCQJPdiQU8JA1cnJ2goQRq3MR1w3BNGmosMD174msFtKqH8Fs",
  "key11": "xnceSMohsWywGm6sHnhPDB9WqtuAhHibC89NKKNVFStpDdJ7zcGYyxKnkdqY338ZadzwAhNvUx2DqizDiwjbrti",
  "key12": "4ua2YCzeRbHpYwMJqpUKeGdzYhT2vT6wNKEb6mrUdaYR39sjQHCd7VYo8Cz7atcSDZY2Fd1eiQ56WisauZSVjgBi",
  "key13": "5XH9LtAz9JTUHiGEGWifVjygYjwoEcNAo8m8obdWVqAb4jNaVSg8Ub5roBctNEA66BrwRQwQ4v4rY8fkevMAUbEM",
  "key14": "6hLZhpbWFuNYmv5dry4J5Gmygx2Xxx8cTMNp53L2gUoYodn8g8oV9yyVNSGmNwh9foG3KvPFsEFJHYt3i2ZW6L3",
  "key15": "265eWbcD6SrBp1d2ATy69FwWX3smR8D9YbXyWC8ZbKzACiVJCPvMVbY6RhmGcJgMfX6YTmAmcoE8qibRHNzjDxUf",
  "key16": "525D61jgsvMmL2XrHaQDrupdbJ5eCq7MmhhwCoj46AHhU3G4KUnGffvunvuXdmrJCUpUJP1R6g3gcTDKMdEgJazZ",
  "key17": "4Yy9xfqjwFqCAFX3tkVe87Qv4NNMXSf8WTA1newpfKLJJSuzqDfBkUqSqcfXJTZFJiJoMUpixzmvdD93keBiSV8A",
  "key18": "4vvqySMVek42cRnYepBfyUT11uE4xXhKaZkur7Eu2Mub6pnMe2L6nMccgTHVyKJQNySJefrDaQdHQ4HDr63jN1QL",
  "key19": "3oaDvmn7zLTpye3yZgbUsFY7CYiC741zNHaB1nyydNAcsp8xNoR2RenBu5oZ65MWTuvTvAbykn4Cjqqw7jkLw1HK",
  "key20": "2Yr6Ad8oNztWP3Nt5AycosRg5KF8j6jeaNAT1zh4L6BDx9PyTA5ZY9WoFd6XxLVQcTxj5Yq9RNixzjKT9DkSuCya",
  "key21": "63rpBWY1ZKbEJmKeEyKw4J7ex2pL42JYtXf73RM2mtUnaPDpeAc8yK9a8KoQQmVF76qyEeJFmpFQZqFGmm3bbDTN",
  "key22": "5ozkBxuFYsYK7tWZmDFNSikAafG7j4Pi1oCCh2EVFmmrgp9YnUkMAvQ1kNyDni76PHQQhGdvWbafHWKb8AbdEEPZ",
  "key23": "iKGPghHNzj3sDFW5tg6zn8GyntZaByVt9Jkxre5Ksd3nBZMpdRKJDvokgJ9th64hZZ5NqQw2Sbfz4FBspbu7ycp",
  "key24": "32RZHD1tmJaP3zL9RP7CZyCmjd4s63ELqun3PAi2G2AmcFjorVWD2ZTa3i8BCvASqMc7R1agumvd2WegMtDWbKF7",
  "key25": "2FMqxUUxxVqGd9e3HxtaxdNyY17TYMhRci2qXhckgSe7gd8KsQ5RghHJNGf92RJW4Uu2siLDrH3AVusz6hsnHUmE",
  "key26": "2q51ganSCbZH7viRZDDVSca1fVmRTPNZK5EWH5ctayNrnhQHeZ3H6rX34fa76bbcXJJAMi7FHj8HP2TLnXU4hY9r"
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
