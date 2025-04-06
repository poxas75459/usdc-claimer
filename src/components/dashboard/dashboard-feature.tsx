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
    "YpcadyDGTRanxevaVAbjzx72foazapkUce2YcLi4eDHhZsQYLH1LNPGgKEW25DyYppe9sASbPFKttnksnBHkr2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pmyxo12yrT8yYqkjbDyXu1eCfagXEP9M33Be9PwUS3ZBnewyVZPGmvDUgDPtjCZj6h6Qan7NiuRZmvDCVA6VLVd",
  "key1": "4Wxtrppmpf6nYvhT2p5imUkBVKxhACKdA2ganPPufEdU1Tumzv8hax7sBg4Zyr2rGvCgfiKgVzJAcGeA4vWyn4xq",
  "key2": "3LntstiMNrR7Ad6PzA3Q3WB88LkFnWfVGGdiHQRsKV7yXTQaC1fMHA39Rtay2umToGbNHgoEhs6A2QtFNorLAaoX",
  "key3": "63mZ852jEnFqSVCay5W1JbWYZXCb2n65RJcQR9Z4Fy726F3NNKWJupzBsQmHDUBo1fKSeECGNovqKZnERVPWDdsa",
  "key4": "29DFJrGDVoVYcjU6xbUnSq5mDpNkuAmbXJC4mipvybAjkVZAxmynJNfpD7P99Ey4U7osoXqprfTTMsmAReEriGtK",
  "key5": "3SWm8QjXenmuHjXXjbL5hazAifD8FgnhdVToWLFJFMUfjaTTuWb779YQmgkjkKaHFAhih2wuVQFBhsg2ZoFiVg9n",
  "key6": "2Yn5cePbZSpZDXYXqxAoDACHTwHC8SwHSnvdqFdzYn9ptysTU2JGVBLw1ZVUGBjhTrFBFt6mY4pdCr1hj2hv9eEX",
  "key7": "DuMBJSzMYwUgzM9R2arag97F6JcMXaxDbAZgw3kgJh3pBzehhLmvhcHFHSCfYErHntgodPfyJ1mkTLJRHcJXe45",
  "key8": "vhzpqwNriszxzmvc2WzNxeSeRgM5uGrhnCKyYP72uuitUxuqgPU9GXzi2fdtBjPirS1YUTLbHabNoZhUAVA2fP1",
  "key9": "51KTrMja51YNRXot3w4YAvPd1aW9dWrEtXfAEyj3QZaoTohCZ32ViBdjXifVdYst6LMY3UvJtm8HauSew3ADetC3",
  "key10": "t7FEAYGW57HGWfpJrDodw7yYjYDqx5Y4zMd75SU4tMwTqayniY59qKpNZEqMgpeRc5XUcH5YYknCvFwu5LUhmz1",
  "key11": "3nKifqe6Z5reA9VNdEGvKKWhsBt3ZPumCcy2jVcgqmPLcrNchQLctaANszGpv9xvWzyeX2YBwyoxjTeS7QJQ2KGX",
  "key12": "2VCsAxXRvoPTzX4mnyDNxjoDE3HpoXMpxuWMRYko13UwgdpftWoWpCodeTNgpNvCfKrRwkiuyKeTV5UopN12f2BP",
  "key13": "4q52U4mnZ7KRH6pwjLZcUced3nWwyGsa31MKJbuhUMSrRRspPy5MX8BYKM1FQMbVvNjhy7QQdENJDV6HnEGYfhh4",
  "key14": "5Z7oZufoVaFVZrBLcf3QrdmodjgxbxvhLrPAnKPaQCLpcxEmq4Kp6StfBXTMtvrydWeVdZNA1n6wYNecdHKw5WYM",
  "key15": "Zh4TmeXB2HPaDCpRgjbPz9KyTY91ZZqYVjUQNrg6WyT1jqvTMwDA5cgHb7w8gWw4ZmZGxWnUnYAVkTwGERfD1i9",
  "key16": "d1j3pFghRXRZfHZmLVjNyDVziYpwD3dfB3mAvoLHVHCP1HceT8TKSWUcvTKaUP6hbghNRo4PhgzEeZK47EXX2Qs",
  "key17": "3j6udzw3uzzVD9Aypd2DeH4f3ompMqzh1ADWr5Mm4gFJYzMrYZXFmH5nYB2ZoDE8aFeyoiAhMYv9p3T67bssXc3S",
  "key18": "4ipXTW6D4ChDWMkrPPPjG1x2GcnZvDrCkDXR5J6KRZFSV4zd3u2BK5FbJzVuJH3xGoDbn8YoAzffcgvZCupS5DrF",
  "key19": "3mJjby8MQNQoSAEDzs1uAv4Cug49KAbLwRrkSa78NHp3zqbRztb5LWMHHBq32yyAPVfhk3z39GVTrmRJmHFBnxG2",
  "key20": "48bBwi9Pb8b2oTKQMRaVHUBSmcJCGQvBN3fGoXz5B4oH2pUQ17X4RBorzSxfDCggaGmPPV4NrZRP7PiCkUoDrS57",
  "key21": "2Vba4qL28oSEvLgpM3W82nweVaesxEbpbhNYAZrEdzDETBbhxvvgjEY5QAjya8vteMmywGERuXTqn9oNMtnLJo54",
  "key22": "WyNGuhLwyr9FXuDmbcCqgyftArLMycbUAVBi5L4AZ16EijKru3k7Fjj59zVgRpjxizY6QJGgVdWN1DKZdSWzrcm",
  "key23": "2vsqY7zsKpYHUsisnLScANSjgRb5kA8VoJhjgY7KXo4BnUYB18jMCgH8zmdK5z8MogW5kaxnqic4rTAdyB1oPSPW",
  "key24": "2wJraApfMxHXHJc3sg8euiRCFbgjDDjYsV4uGGcTwoJCCGxqRTJVsWxiU8Nx389sbhvm1tS42RuXvNpzyFKcZi9n",
  "key25": "4ZVfZ3PEPKoTVTrpdC78d4KvaqA1t57mvxmrCBLwf2pc7XbFYusA61irf5t5qVYgk3xYJ2AQAbXQBqAC8wZXL4Bp",
  "key26": "4NGkJEdErM5CgvLZYvTS6X31ruuHpJRyz9F78GwR6aUph7TfKekrbfHd8c1mWbNehNxgCwCa3bSRyCcjFAHuYDL9",
  "key27": "5NWQkjAWGZjHXhj2XU3UGvZpAZjGhqoy7a6b9jZV6CXaeoyonq6N2mRfoSX7SX9162BctF4x6ygHtvqfDZVZRnh9",
  "key28": "4ZAPGGANtqxUPP7azXgi1RmJ9ggrKvwMNgAYFs2dZrppjrnMZmKMoWuL5nf9fMHqXufMxgocsHDvLbcUBafhP69P",
  "key29": "GQv4CAr6mDcrncTR2XUJCX51PBbMab7f6zV79jpbc92r8Any35jJQoz2TfQWBG48SoiajZLQ2jgyPiaXXZJ2zgJ",
  "key30": "5qn78yd374NTWsVg3zCpfp2fz76JE2f33ezbMbSj92k9FKEf9qEQQNwnx9WDFyWETKjzp3wySj4bs3wthMqeiZP",
  "key31": "2LnFwVc4cRGFRChN1x6MkB94uPGQ86A8EQqAaw4G8xUKyMZyJSwVyEqgUvq1NrB3WSm8gFF2HsdwFHVjxeVp2aCy",
  "key32": "3tyV2CsPt8obBbMjC7y2cqG6VMW235CH9dANSKjrWuEeGogeFAFUwg2qc1vMzVJvyLmcGU6wGSE56sNK1aBUV5j9",
  "key33": "3utSxXAEQWrHXFwaTDsjpo3NGE41NtdrWGVmxrwhJQLNFZT9HXQfb8EPVcGrGrAfN9GwofX6YLMNWXoPivarfyth"
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
