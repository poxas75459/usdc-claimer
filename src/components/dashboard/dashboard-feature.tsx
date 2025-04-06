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
    "2WGbPyrHpoMWYiDSQnCbwtYCgEhktYFDjFz71sqSztr1aNje8Ei4NWvpjax4Cc877rP5QNtpQvJQGWAam2bS6UV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a7xdXgDpgwSuhZGeoPx2aRr9AKR3kZrzw36TGrcKrwQ5EJCrr1jYvtdKK5qGJvozHRw9vAwc6RQRsNK56DX5eqb",
  "key1": "4C387JSk6XgXEs24N4tqdxocyfjLzR4T5sYa7buewWKeQECD9CnSfY329ikz8MNiybWR25Ujy5Hy2ZbmLiuvLQRo",
  "key2": "5vdB4ibF4zse8YoSxN9PY4UrzUM3e5j51aPZzjjncp2n2xuGNrWWsj5W79cNrPYis8jNDKBSXTbVwQh3RzdbRF2D",
  "key3": "TBxBbfwFSXyAAvZ5CZn6S9jX3e3qiLKbEptzaCE3Vf9r5rE9bEvaM139fZsCi1TrtXkqGQPznMMyakhi46r5ZwH",
  "key4": "os2VRLV33QdzEiUY23d1qnrndhEqpm9gKfCXug1uPB72rsjfZqLN1tvvEKRNrYpepn9Q1KHc47WwN6rzPVVrMC1",
  "key5": "2Ye96Wv2NKiC3W45g5v3DKWASBx2fpdYqaakqs7JrmGNW86XXPxcYsjnc9v5r765FUdeJrenLrp8YR9MJRsU2ixU",
  "key6": "jvY3p8eB3QA7Re6CU4FwuJE3o3BGVqFzvfwNNY9k3BQEgodc19fiMETxdKRDsaUZ1XWDaTgGvfEbVaZAVLVtvKc",
  "key7": "2aSg2HWdM2qVZyzRLWtanF3Y1mTMbn8B7Mb85ByAPsa8tHWxypP561KnAU4UBRYRz39wqqBKCryspe5pro8cniUD",
  "key8": "MbUiA6NFuHbQSajrHqZCKXuxkFtzwfosYFy1ELbYcAJST5hS7TwVTCBRZ452MdRUqtzcWk5gFgCKXG8yUYZbrkS",
  "key9": "o6H2paA8KfqkZornfQ3tPgw31aXEErdUeqXrhS4JFM6cKhVemaivamzW44WfnKfRagFNsKGFzXEssxtP3VNCzz4",
  "key10": "5K96ECJWbPNnwZeGnmxAdJEfPNmx4L5DbeDLMZRBB2BPH3Aym2Zc4mTJ51RQUq4YNkCHWjzkkgudtj8puD9K1ugR",
  "key11": "Vk4VXqVhbdc7RA5pjoLT4hAJAuGmSrn6QVL38P2Q2FnxH7mqAra2mWNb3SGdDsacDEHcmJZYL1GxZx4qVNrQyxz",
  "key12": "2FHhVngH5d7RmhDmAnXtMkaNAQ1WTYqJB6Zb8GwmJTLhKXfzTSR597qk4h5Lq8WCBh2HknteZFNJfo3AmBMSuRwg",
  "key13": "5mtcewGsxAL4z5JRCMYAt3vw33vnojt3E1C87sCnKuvEXMhi1YEBRPW2Tu58bjBHVFoa8EPAGtRpKkDZSMgk5m1t",
  "key14": "3kVG3AceyeCYd2ko8ysvN9EuSqSgSUJ9TACaq16TUz2oXV4AS9YJEJ7Fkf2aHAwwdbjrs5tMFaPYR8RE3mudzXbm",
  "key15": "2eFuFXouQmGLcbPTD4JpCyNQqmE4HbLtPr3PhDeb3oJLAt2HWypwgWUxDNju3ToGDwcCXBNmzrW3e4kDdi65UGc2",
  "key16": "5igVabqCDjRWSf7N8fihek1nn1XN5NLzYLYrbmTyKeEECJfzEZnsopFC1P9MxX7BBa513aZtx1i2pbTus27zefz8",
  "key17": "p8e1KXSgue15YKgSZxCKcvo5j6xDh2r7VDh3rvPYAwVyXWz3ureueWneBTCWEuygksDCX8yytJL1YDLxtZSr4ee",
  "key18": "5UbEhAthtFyfGkFddVPdpeXgZUq4kYi9qwVPftrqZhMEHCZdX3PRTi5WwRpqY74uSVqnYfKLAyVA8DhhpuYRJccK",
  "key19": "5xafcJ1MBgyLkNbHc6aC6bcFvgKPhQQ8TWnB1REc6UpeTs6uRez2LqMm22CPBusZhhSCjHFdewBmLCtvLcfwPrFT",
  "key20": "2oAWDGNPp6K57cDk75GrykowtTzWZJs9SY9oZ2ayr1ZCCqeiW7pDtRateWVRCq9LgC6LzmfMMGvEnpdVsiArcxQX",
  "key21": "61YJt2R31PQxXD6rtirXJNRDSGM3jcYSPAE7AHV8xXFEV3VBfLS1XFtAgMDBkhCjZw1ezWtEzqeu9m2E6xQLVG9v",
  "key22": "239XTNHtrqgut1KkgV52yT1M2oaGSEgtxcyAAk3D5W3Pwhs5Y98cScSkGt4NHvWQ94DCahhHbRmvWfmWuDwq5p9r",
  "key23": "4hRaiFfuPAeDcSrQSQGVPiaCuXGbr6nVpegi2DDJRfGEn7oeE6o7TVNCWQ4K1V54AfF3DUYPs31jDDdwd45oQznv",
  "key24": "4s2xVcZX6KLSA3HuxuJUry62vcBsW5TXvc3JBM8TCxjrk3616qXGRZuZuV3EgK3PLwzGPbaKbj89DxgePzjDuqUv",
  "key25": "3ptVSMMwfEUhgPmJUVsfXvSx8Q5HWLTknawVpTDsH3LQ9882gjpBgTwdGn8UHFiSxtR5723GPCrKDt1oQfmiCgDy",
  "key26": "5rD19ttUwwsTcTzbhAsbtYBspT4oTrq1WNd8RLGAX41yB5TCE7gyMMHdo7YGEp7tzY1JRfhSq9b4Vu7TytqgXkdq",
  "key27": "5NKooFFSrFCxQrax7PBPBCXjt7UD8HPW8w4weZkbkL2jXfhHQ9zS5FEd7rtURNjWERJ4cfBKXAEkNRw9jexwdHeA",
  "key28": "65DZWCavmqMHoVVGjxgDCbaFMq7CbU8tkCd1kSUp1N6zTwarAVCUREUKBnW1AZFwqxLWp74dQvCgqQdJNQRa5v7D",
  "key29": "2xY5EY2gZJQiBDpo9MPTHNMewrAH1wbW6fbvmB8LuPrpxKsGWMJBE6jsoAxLH6LBUv7jgVwhek5U2cgpeWE7gCLQ"
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
