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
    "65N6dGg1cZbqbvqcuQo3uZCTHBbzRomQ536jbUqyt2n1oqjjiHaLAZmEQbzZXkbTwtmAMwkHXVJsByvRJAf1sXpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SZk9sqt214AyVvWCLwZ6NWeuwtjayy6mFkfhCMEXVnwDiSHxHo9icqRyGeom6Kma6EVNRoBFHwrETLDTDhdtAJy",
  "key1": "5iPQ36LB5Vw2vRmPXYEhura4GTiG7KvEe2juY2L3yVPYgGPxKryfRJozc9N7GbrfgShfiJEZBShFc3WoLzEtd3xL",
  "key2": "2tWaKoLBS5JGNk2Ds28q9u9izHBxsKAWwcGDTuZHybBAwiDiYWjB1HH25e4PVv22Bzk8tfHN9iHEGtBrbAfhBegJ",
  "key3": "5kH4tSSZzheY2XtPYe7rEVdyR9r7T83DTiADdtHk7sJ4tvqUNCefmfTcXEFNU1eqJnRR1PCUVaKcTDTbARRxZm8D",
  "key4": "3TqvYForS6ZLh6imgSL5Wy3vDfdZriX1ZLWBZ5VYqeJ799CDzk5bHRfWFk1utTnZukNndtahraWhZpPo4dDeWgf9",
  "key5": "2REZRf2fMo9qhM496mnqpMXREkL5JRhUrpnDhjYo2hJrA4A2dUWkhze2DVTaRyJLHE4aapmEfhpsJoHsLmzBu9rm",
  "key6": "3YZD1o9MpSyZC2iuKSqgFFt5RfMQsnKsAig4bPjcJ8duQsgSsUFi8P5XkattikUpwV1FurmWc75KwhH1hp9K7ekZ",
  "key7": "39vX8jG95o3jS8CsyzVdCVCtAuGJkfNzPw6AQy1w2s6ng5swjNnoWfmLF7zx8Q9i59sD7QyA2s6d1WSbWMFkd34c",
  "key8": "65AantnWktWtcEb9bR558FoPGPCpLPr3T4fVn7odpAPUWy5dpfWWWZ3dvzFb2aDoMMwnrzRTNaQLzSumXhBxU8nm",
  "key9": "31ytbfXeKTGZ4Qub1Vep3arQBkSB4wcLXTSmVQbngAUSKDSWGDdANsZiv4ts9TXrHRVSsuEY5cjttTAN3E85TtKv",
  "key10": "J4Ah9KXgnayii28gS1h6UrC7rVbW4QuzDorSauS78fKATcyCwA27MifZG1Xb97B6Y2s7GTXwHzGi8m2qmg3ZHgB",
  "key11": "g9fvw1SwT5M7iuJP4Q9PjS5wvFSqdaiCXFPRf6m1AKk2oXdwjsBYhE9tTEbWfgmheyymYNc5ZAgDUQNJzaigffx",
  "key12": "5QwVmstUprb8jyy7jTh41BFVyaFQCLtYsW2um1dVHCPHLw2aVDsMPgB3roF22TpDr7tyvUaSU18gjuuiu7a8SDzC",
  "key13": "5ybyns1DCvceSSqTJiErbRatmPRx2TN8CqzxABnJoUZa7nrEh2TD7cxMNa61NQLMVmdMQ5ii37VPjY9enWjbPzU2",
  "key14": "42PgVjryEaPB5UBPAYL9nG4whAFHwmVzjq9BkK79yS5ws6HySmentS5v9XbmbQZv7BBQbFV4yMx2BSjV8mpPKbjg",
  "key15": "5sAMKPMAQ6KUs3wuVt5YXtT6TUFWhHtmF3KrHKGNQ5iJTe4WQsezy3pFPEsteBjTCiNK5p8XCpi3TABZzKYrqYm9",
  "key16": "5J6UGu11Bdi5sz4YbZWUQghdzv8enYFEc1BXr9YB5jMakCnNxppU542oUJyxfUNsAAuKp6bBXEQ2mTjkdufSKMiF",
  "key17": "2s3h7KgTWCXLgFGjWHb2VqRneF7FqkSK4WeffDiS8G6iMPKyjsJWGMkyhYmi8euTiVtTiBNwjUWXmQvBFE7Esb86",
  "key18": "56H3zcPh65kTTAeKGr6Q1sqzEMKRfhzT4cF5n2ZCayMt12AEYScjQ1jNvVi5EnMVJDKeYLLwwpNMD8Ao6VsPPEtt",
  "key19": "39V7Q6q6ka4ATG5JQaAtH5Fvxp4JcHVAGRJNcSUAyu4Ua2Nns6y7d9FgAo2NFWzffNKiqYibJP12cSF3xXvMadzB",
  "key20": "5skc5ceesYM4p2r3uiKMynhUiDxgoz5NdzGR212asT7v7Xf4JdYpS99J8RoCytGf1KakBgmaH8H1HvrC55Qkansv",
  "key21": "29yjctdVFGf1Yq6xPoPo4VC7WvmTMttm2qqstvxNwBg5wyxys2zNvwy5HL8Y3AVZj6czEkhsd44M3csEisAAQPgS",
  "key22": "2r1xqYtx91mqAdCjjafao2PVzYgSoPWqtpXUg7jDvt7pbaQyYjGBUheUKkmC4eb4mpLjRtZNSnTWNfD8nErzdJYJ",
  "key23": "3ec8foxVLRYtz6viMyUTZ9MBNVAeaQk4CwFZhEXX7LJAbbt24eRiNyad71E9mujqAXyBDjA5wXNVURYKEDah7pd4",
  "key24": "3UbjziiDiQjj9LHBLALMWDKKTYZKTq8TCMvu8TDYYguCa7vePjvmESmYvt7Q6cq4bRTDBx3PXhXs6SKN1m5AL667",
  "key25": "2N6m4AD2FajWC8tnKjoJRiFySVNFwpSCvhG3LKQbbQWCEFMGn73NvjDd4xY9YJiAwCktdSqmrUx8Pi971eyHd8CT",
  "key26": "61EnRMKziXnu9eqeTdGbHx2342sWFa4F3f5WToub6GPzSZsdBUN9wpSZf2YzsTZHDzfC2YuNVMPJEpnqs4SVf4kW",
  "key27": "31gRmK2MUHUKdDokgcphfj8MbB7PVZ6Wd1sAtPYJAaMCumsBpvzMkW7PsDhyvAtMCZjKdNZNe5YBPC2ipZiexkBp",
  "key28": "5KuaehD46beaVSXaDGticMtcFSqsN3AYSoTvYBHivztmxbRAKiYJfaVByjCXkefXY1HThzUUv1zRQ8AfoaDtB4yJ",
  "key29": "3YiFVNNhCqQCDcUb9Nzm8e1TUhjievGFFnijrAzDtgpvzCP5EyvWYk34sFVvaMtpyt4Sgrt5HJWeK4f2JJ9yYUxH",
  "key30": "se63NEuWxJe64vpTN1jCWQWhXU8mjKmMcAdfWNTqHMyzCe16GMxW9CiiCLf2Z3xxPYKnbPpm5ANm412mr8EbGNF",
  "key31": "3LBvhksrrYe67RdLUcMzbmuAYecHhQ7UQc9MsUyDkwAHac8ncfV4XDSdELwP3bLR5hDzXq4r3xVaJfZmoHqa2HGA",
  "key32": "gfxcrq7VAfgpdZuoqExgaHizchK3oqtR4VgAaGoUiY1aXpgxjy773nw5QQZgwrbSoVvLGTVx4SrV4Q9Ng7RNpeD",
  "key33": "5Xwss8SKC9TGunAMfMyffpZ7GPAvk4hfJwPdkncv5NP9epByhg4Eh5qnqzWb3ytL724FWRdFEGC8hyd4wMkEJYGp",
  "key34": "5UxcqVCnFhh43oCrPV1qGMNX4ZNpPkcUGMkfesp9JpPSVaHu3hVM9SSqAUPfedt3Xk21aKesgBjLkzgRk48M8faZ",
  "key35": "5ULTLx7fwSW5yUJ72JoSLdbKAeJhk8uuwWD9URhWyuN8rkofLgu3fN33P8pfr71ib1wGSqUzCzZaNUBjnpx9NQbz",
  "key36": "2svWgQZZAvk4jWRPHNt5PbhEprYqfLDvC2pESHVD5QfhushCMXueKRjQ16poBRhTLfJqrqs7ZaqrzMzEpvCM2wyP"
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
