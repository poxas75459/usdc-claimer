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
    "3hJgYCuKz3PqXP4YLaa1LnM65wu9wRHN5DsZN4HxHvYzjKWKTRk42MT1egtUB6TXTR96yHU2kMKfnUy438fQ94pZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DQPndRjJ9aoPUeKzRxUZSfx8fxEmphkm8onywNV5yhxZgD2SGGYnuxkoXrvDVL9mtUBj4ri4AY3dqk7DcDNxA1C",
  "key1": "3RSfNmTeqKrXBWjvPEv3VYDCd1qH6GLhcvsPddfRbMg1T1kLkvUoQCMAo3Byt8pvy9qh7wxWch3wh8a3wbr7D8V2",
  "key2": "2Wbr8Ng2oZ57XmTkGTreiuV7jsXSq6AbnNQcnANhUFm9zccoZxoFHc92FHVhEj8K3TXNPgairc8zxSPU3JpxbwgQ",
  "key3": "5X4Zwwkk8vPXPX1pGEAWAn1WDRddBUbryN2nX9x7mDjx7qRvqfWUqY6PDn4kPZ5C9ex8sfK6qcAMtahf4dSrffMg",
  "key4": "3BYxg658sYwRRb3KpF3VJAgkYiWkUXEuicQCDLxq2zr4LrgU88yXqCseotr99kL1BQUpapAUy4TovDLh6fV7YNhB",
  "key5": "27rCT1Vwnfys4bqe1uniwpvZ6dgY7a533M9TRpdrS4U6e1ajJK86fjxR27L6sGxzzAoqKxp4afAw43kPySTWVEGp",
  "key6": "uRtZ1N8Va8VkrdpBa4DEHPvXpWJzEwgmCUJ839xgCWTUMTmEYoSGrXVx8jyx2Rs2XHPJup7G39L7asSCg5DMiJT",
  "key7": "4iJsEyES3LP1hX9X3XUmivQ44Tuy81avUsJHCHy2s4uSxZHkDGXvJAKsaHSkz853aoJ3PwQCkyWNnJJZ8MRLskSn",
  "key8": "4sBi5FT7wJeEcPdRKWfHuWXpUqZeuw1NVYJsVqaysgTa569YDeDEYAgeS5FbbVzPqHCLWLEUtTonTteCqN1U6aeW",
  "key9": "3m9dyBzp7UuPHFRRs8ZujrTuioBpMEeHTUW4BkqT235Lb5udc4eErQgRy64orPxjTC7Ta2WT4jXG25RCF7dZCECH",
  "key10": "iuSLgs686RtTFGSmkmGdxUb74tD13cQgZMA3dPaJimEyTNTsMrcJJBhAAfd8S897ZrpQoo4KiisT3bUvrkhB66F",
  "key11": "qRXP8H9EnJFJXFQqQUBxASfK8kMnQcGE9B6nyaDWzdFMZJfQ7RRUQLMrKKoq131wiKz4BPko8YgbTUD5H7fPZBM",
  "key12": "3bjzcJLTTk6hX6jrJmCQVAdQAojQpU8xuQVS9GFrKj3JMjssUW2qfwHwS8R1bthBqWcF5EWa147zmVYhikgYJsS8",
  "key13": "2hmTsn2WzHjTEMgwwi8e1CG3ojLJccz7wpNeTLCkBpq8kCHHr5Sfz7qsqGpGwLzB7hAtpJkcrGU4iRkAKCsQJ3Gc",
  "key14": "28i2HQFPBiaXs2a4gJsbpQgTpaQjJeBncopfB53ig23Py7XDtzt7gxqFp5oTXVUDZXTAqGvaUpDLfdzQgJvUyEa3",
  "key15": "SvPCnojECumQCmZ37t4ZmFWmQ6tqsTnh92EqSefWNukvgG4h8MVt39wDJHfHWXSkjA2ptdiBWLFE1jHngA6tJqk",
  "key16": "67AEaEbuQd7V7fKKUk1ZYVeehbPS3eeuYt7U1Ces1aBWNan1KvZupu7bb6vp9GSGtSs2HeYFH72Uz4sXP9UDbHet",
  "key17": "29Kfc6YgrY1ngMKBpft1qD1NxZgzZWhVCWZhtPKKz4cXXr6YTqLase7Mr7m8KNaZ8rK7nz74UTU273wgroyrndZm",
  "key18": "3JVP4f1g7KXVnq9CEefH5LCfaRAz73CpG85roBLvQnwLLDgywxMW2M1VqnBJ3bzg6e6aZ95L2H3h2jm6VVK1KDKs",
  "key19": "3q9WoHefDKqHqwBXcgyGCzFcFhPJLvnYpU7wExnpk4w7dmonXXcgn1P98kzyCaQ66aWaFigSHpVQANGbhBpdjLZi",
  "key20": "3ygh324rqtkGVBjBKz3AZ3NwpLKg4bEfqP2BKqq3z45r8Jc5GmoozZzvpWKDR7WWy38Mr6WcDctVDfFgtU6FQwh7",
  "key21": "5Q7LPr79wmnKx2WZgSChV8BGmRKTF62VJ1eB6dLeiNfEDBaKb6LwtnQCzjF5a8PPjsaU1htCfsShfVBRxRRWvAbE",
  "key22": "4TBq2WR2YGKZE49BbCU49RCdmASAHb7pUbRhmduvqod8BpGjBX8F8q4D7W9iN7d6TWn4JWjBSTp1R2EgNz13TYFE",
  "key23": "oak5yfYDUnqkeWvWQFxDSDicCKUE5UshUCyZicBGdVGDEWS5rWk6YDaDQQFVDJUotNPENSXEEj2rfRx2R1Zuomr",
  "key24": "26eXD1QuxUHjsqZiFcZP5bCsuMyH6kezRjjbQsf4M8BWR9U2NNhqmh8g82KCfW4gbw1zM6nQ19NMFhuCjmShWehq",
  "key25": "48f48L6MX827B7SQ78sdKLpMGMA6qEKt5wZKYaDAN53hAqTGZTJjsMAWvVQ71tEPDgMyDVszEsBeUdCbHEz8xKuz",
  "key26": "2szFfudDB4yjo1PFosy8xdtUN4pDV7uKiFarvm9dydQNEKRLejFtCSJxLMuoJwU7Yzh7bdCVRPDLcuM9WvnmuCQ1",
  "key27": "4fDbCWSyBWh4HdYY9fbK4RrwSNwWrqB8zcTapbZ28ZEoQoCdWQZYoUV2tdWXRz21sXFyV1wrWR521TdWE7aEZ8Lx",
  "key28": "4voPFLpGwDADiRGcnzEcjve5xieE5948fToogRPQVB33MpJMujr19qsnqy9kEXetDgHFGvWoeZJ63WSdStjTZRL1"
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
