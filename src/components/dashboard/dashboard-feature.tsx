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
    "2mbHDXJxX6EREe1AaHXiZQhwRA2fbn7RwE48smHm415GXiQxbvH4bACNGRetG7xKqc55Xh6VJC5W2RLXLD46Jy5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z9tkU742keyiHSZtJ6ouYGgHacYkYkGTpqcBCqKozEdG8mTDpQGMQRyC5Ehj89vC6E6nfsyimdexzz1D6St6g1c",
  "key1": "SAMp5qPsXpPJbzb6mGSZDc3vLvhoMEdYySPr4XbdGZUwzXvZJZqDZT9vrtJn3Pnr2hUg1pqr31qNG2nQZgykvrE",
  "key2": "2oFtLKyuoWp44MunCcxPY9D4uSdyBCmhM5TTkPRM5e26UmGh1TknzRHixdrgkMVwERnbknBJ3YAu97vWcVeLrDn6",
  "key3": "4RcKc6MEWrMobt4fyfLZd3PxsHeiSb8sMXVaTtTmxxQMk8aeAWrwwGAJxcpoAHy1enpXBLLDatK4onNmmH6TqoGs",
  "key4": "5eumEoCrvqUy5RBxD7oLF9u3QsnGTTv17CyXe9GNURAEcNjf4F4uonLVcQA6zamiM4SBShLYWkK9DJhfUryfQFhy",
  "key5": "2C7ehLtghAfhxMSnc3Z1YieZW3MiYBTNmTsVjo9m73qbP3wckmepXKg6nEigyxGndKctHRsx4cGpDeeH9YVfGwqE",
  "key6": "12A9UbxQYVdRdmTANrcDt9SqhFfsfQcUQAzN4wPZNtpttBBKirUW8XUHkTHiaX9pn2uQrN1og3adK5yGmM3kLXdy",
  "key7": "3nrYgyHsSABc5KzHQadQ494CE3mtoYK6rpukhiZAZ9d3FrNw2HF59AbkTj6k9sgCg1b36bnaheeimYq8xCKbr9aQ",
  "key8": "5Yesrg74pyyEXPn8HD6yY3D7sqEFSKueHfRBcufgjdjKFvcSBa85Z2NLJW5kX6H9poiMbjWFCgTGeZ99uSjqmnGF",
  "key9": "5XNEATnwbE3on38Edxjack1UifChNrRFAWPeP3KvL9x1EdTb5S18Ewzm4tweeU2vnyWCGqAiaiLgEZg5CCMQCz67",
  "key10": "3iGMzkH9NegFBFNE6tQj12ebWpgL7xgKHVB5QXKxyt5xq4RPuYSRyERbE8xqhsdRcPMyG23B875Fshu578CE9YTx",
  "key11": "5THTD2ZCmTxT5TBXnKJ7cohXbimBzJFDrTsw4wf8UnotrTcfRxAic24ej6entjwNN9umxoqRnWkdaJGXoWQ1N4u7",
  "key12": "46YkSmBUsUmDVWByBofvdawsv42ky92R5Vh232p4sGgWk6tfFJz7ErLQX2WhcpsMobS43cJj2K6gaCeVksEH3YZW",
  "key13": "2TQ2aShtgyXtugoXWQxtnbJCkQLoqfMrhbpqtSvHjhFjrpyCJogbagoSei7AY7AFgVRVJ7C9jvcmRKNmaNMrC7A9",
  "key14": "3icES53S5jmcn5taXe9jU8bSdzTZ9Ruh5vyHuZcAT2aN5yTbJMywN2R3CEWRxoR7pdXBmJ6zJY9Jyd4csu9KCpyt",
  "key15": "sEPfaBsV3XzpWXk3qvAEuFtw4H13ffk9gPe6nc9vG1Xoz6J21a84kTWFHmMB2KcZbhqYTs9ZS4xHwUq9HTWapHZ",
  "key16": "2YJyVc7H9XkoHHSHVheef9ftR3CWbPazFmosRbHDu1LXmvBXefdsvnPzE785wnEnNeoAE4DGxMrTixMwyrHuj1XA",
  "key17": "3xtmnYHSshy5TTZ17jAbXxqjXhiU6Y9jaTGhgz13oZGRDxroMuhDMSfz8enMinvBVKJhaVsBH9tjVSHeZaM9RqwA",
  "key18": "JWpptSt5w1SvSppkwTYTfep2Yv7k5GNFyyY8ih2zsqUBta9JqZR8A7dm6JQ9SYKRnGvPg9o5zZkcWnyaLTcrEKn",
  "key19": "4cSxCeZ8wys59kk1RkB38pySX1UZG7XQQAWvna1goefKqgvxqcZHhaNLhuF5GoQGycCaxG22B2F1GSCagcAhqccv",
  "key20": "3RjvMzv96uJjZAXFvU1TNqoQNzLSSoPjDiyugCEPFkk31Po5zfRA1TuhCLs6voKwAhmMk3di6k6bRYrPkU3jGGm3",
  "key21": "2FyDniC7uAqc5MoAt8EyVk78n952kCW9S2FMo55EAo1qSHekB1n569mbpu9GMtiukELkEKV3f5Cpec9fkbz4xRQN",
  "key22": "4iiEQiohEfy8LpX26HPiBQgYJDLh3tTtgT8h9o7ZCXf3fm8yFp8Wp2w4z64C75nS2nkZfpfiCV6kBJRKqzeVHdJn",
  "key23": "2SDPQ7dMgAeEhEn2T37Sg1EZKmiGipQm7bdfSpr3JvzhW1dm7dHGQXkTaj7hY13WuGxePCBAABNu6m3U1JtcHCw7",
  "key24": "94EQAo3eqt2TTHvqPL6ss9PWQNHuwAH7roYYji7K57qpXH24t16gZPAe6wsQb5uUAJpeZ3UqGEDGBxvmMH2PDXk",
  "key25": "2q2WoYPT9FkGpzGgmSQiReqfdCvfdCbW6ugE9q7UcuKPiABSTU2qqxejBq5pGkthrXm9VeGY2bwcrVF93krhWh9e",
  "key26": "oXP5qmQ23nboNkjeJqQuLsZY2UPpu4eBjksbq81tybyvs8ZbGeDy42PMiaBySJXPfWUqdhm4CVYXuRcRHFrdjVZ"
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
