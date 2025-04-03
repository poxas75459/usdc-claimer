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
    "3271Rr9iFAsrMRuy27vURY69fiwvxA57xidLKhy643fkgU66iUG2qJVxYSwq8EETPHJTQYz63GMff9Gf6Pesf6xW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RxZeFkqvhHGKS5B3VKdq6XukzVYAeFhZ4LxipLy8KADf4Td9wTPr3ZDrVGdYC33r6zi6qLvKPjjNamDN8L5rPrW",
  "key1": "663phhmFpZf5nLVzfPaHMcmAxtPEJJyQ2M9afB9W6LZUEUPT7bbaakVKLeEqNNEWGEjQpTWMp9fjC3ptrHbdnBEX",
  "key2": "41uRsxcHQWYxHryJy1ihu49rhrqS9U8vRTvsSXtWJvvqszgYpNgRkYk9Awixk3nJkHXuoPAJvSoLfqfsXSZgS7P1",
  "key3": "3cAdDQf5Q5R8AR9VQau9LFBx35iaZhygdx8fyJoeNTVhqA8gDJVEKFUcyQq1oiSwiktTHU3e8JVxetZk1gBs5ztT",
  "key4": "2ZJW7k8ax4i5ReQNepZhSZ1WbCwnRZzMmrqe5PzhxETQwyZP5wk3m1ya2DvnSj6n7x3iCCW7KCdSMbjhB59adacE",
  "key5": "3gdEciUzV8mNTJuuGEZHFLR6nB4VEHaVHxeSGXvTW7AoWDKrjg4owx5Ff55MGn4CnpS1FtsFVkMx75nejpBfL6KY",
  "key6": "2Sn27Q5zAPAWjo6N31UpmDcMXwJLQZ72kj6xaD3jpB34Edsx1UvqkhiEpb85NDKhpnEzqwmukrWDrcrjJSf9bo21",
  "key7": "WDtq6tnDke2zqK4TRBEnwq7kx2EkBXnCpgX1do89JabyfF4BXpmkFE88pEupdzL9yWNGkpzdS6AoYhdLNC3PtFS",
  "key8": "2hP6FpeCVNh6C7fUNh4p4gdqaHX4FqCtt1m3cDHdoJb7KdWNEQHySY7yJzkSa7FjCrj7h1QvSYYkxsW4zNQE5zdj",
  "key9": "3E9EKt818G5QUCrNWR31Y2eXLGhLYQG2SR4y1UtEhj2Mct4yTJv1zA6uAnQTvvnSZodpU8bjUyNEsKFX3MFzMgam",
  "key10": "5HveGBbCZqKF8YEwZhkP7vjALt2dTFLoicjGMrkL4S2D2qPGjiwcYJ6WnmkirFKEWk35d2x2xpjgBsEsjiNBiStQ",
  "key11": "g7j3ZGNUnPdYchX3BAU6DcHXeAhex1zQh7x46bGtT7riTdr9V7HJou48cu6NiSCWZnw5EYQrn6qh1zLTM5A85mt",
  "key12": "y24VQAyoPZdJ23VfkiWMX2hM53zdjDTy4897KGRQXsbhD8akz6sRzUwt3hLzn7vDHF4sQFScoN3dtVD9guEV7jw",
  "key13": "4r7aw2EzXWy5qjBcTBjqMZ1SvCHvowzd8rfHDiSUKQNNjsmynsRn8G9MUma7oyeuHmZbMV3YQz78LK9UQeD6SAGt",
  "key14": "5HQ5xzAAsmvRu5ng5ePnmwdU6Cpk55kjYAtCX89dhcsFyoJMESUCqsPS6AWs2aoZyT91NX6Abk5PXrYVTyhsjADo",
  "key15": "5bs1MscGCQZsor5gFNFECk34yoQWbrZt8DPdmfPRp565AY96Ya4eozQWcwaVcvQFX12H42Yvd8QnRinD3EuEF6fT",
  "key16": "62iT2CiHGKwDDZFHWhPKk8NrpZVRwC9FPdFLt3xvGHFWcgZWaydDn4meM87fL4vZAP6CB9qVeJ4x64LeKdVoG8YV",
  "key17": "4ic5agc2GruzUamy5qtkSp1DfP5MbQvc86ox9rMy32LiQcUhB7Y5a17pYBWHxXXBGYDautbEvbSpsxwNVNbgZ1ct",
  "key18": "3uBRw1YJNgQjFMe3Lbc5Tj7mbJzzjYJkf5bnXb5GW9QU3a662BBZPbrk4KAuPZZoh8aS78vV2gdYi5t9Pqec788f",
  "key19": "5SjtxrSRQV1EKDWYQkHZTDCVCfMX3LLfa7785mpMohZy6DR2hnEy3HFam2yXKN9dBMmeEfW6rk7vJmhMPMwaHk85",
  "key20": "ShjS7mvg7XYn1eb9wDda8PWR9UR1SR4Bzj2JVSdoPUmqfpywRP9MXTdWyqmEZhxfyPTYypxKzpAsBYPmj3qyNTJ",
  "key21": "5JymFaVKBV5y1au8cWo8sc4HUt9xH2DQtBVLbQtEeNreqMqowxkLC4goVS39MmUCVDcc4CZyvcGrdWPkvMw8Sw8C",
  "key22": "5WarBiTRj9QuhNQgodaU2hMZjmsftMvbST4WTSjdQPdfRCw1g3bAXP1T8PmV298cVWnQM11ykNp5k9YGRGjAhjcF",
  "key23": "22miXpirTi8R1ifHL6PA4NUuhehTjMCaTLoBk9CNG5k7cjc7ixWGVbvBHftJbq7qgwRMmRBx5JgmA1oBew1cUs93",
  "key24": "mhUeF4xo9NMx1JxBbfwTAEXRRrgFdXiXXZNukHkyMpDq7vmv6XjJ4717j8jQPQuMK5q7HbDqMA9Gf6oPtGGTx7L",
  "key25": "4ZG6Qqz9pX6Yu4eGdYqqL9oa2ou1fFfGLLMMeHXgTgcFLy4F53P8S39yb4PNg75VoHBz2JKhEF2hpNpaoAnMmN2T",
  "key26": "LsfraJkEYJzJtCQEipvVF1yiTSbiCh1c55MhuRm2L1SokfNN78QisDmgh4tyqsvJWC8yhX2XhKf7HwfVKUr6Pjc"
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
