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
    "4fBZUPu6U9h3jxSe823E7UumpW8LyZQbmbKkx8p4MHrFDsgk3mLRwshAFGJvmHwB5FdAirC9qkTNKBkmrSAuUrQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tuEuqRNs7H7mibZycU2BvYCCFGAnWYygQfv5p8GeVuTjYPxqkJBkwwFh2mddkZP8ToYUGAG3RLHf7Vp1h83A7XB",
  "key1": "aQTQVASRdUtNDS649DjdXkiVWW6tgvwbsKndS8jrJPjvshKUiC8wuDP9SCcziKz1q4Pbp6wKifGJv7KfN14QuzD",
  "key2": "4ZQ6JefAGKQCGbBo3eRNFwARjLmLGSAxRXeJa9tCQ4ryjG3Km1HUMvXzoQ86S3swrbNs1rvPfo8AgGYo6jUE47vT",
  "key3": "qbTvBreDYoKJTFTYJeoEt76CRCMgV1Zsob7SZ211fxS7sbLmP93SyTyc61xY6zJWpJTVPJMKzEPemK42YWqRi5v",
  "key4": "3tBmSKRPH99mjw6zKEHG7yomyaxjw1TzZ1BgqjNPqJie57Vx63yYC4pCF71RhhcLJnWZye4pm4CNNyfTtQ5YUAo3",
  "key5": "4B5kzionR9hTecJMehWCsCiK1yVSQyBup3xJofstLrqsrFinxjKPedLpYEZbHjnPXJBCPAKjm375eSfTSgxDAuDU",
  "key6": "oBjfFkCsiJ7f8U6Dq2BofYVLHX5Sye2xjBw5roeiqC7yH9A3qZVJwiuHLiqEKtMoj4DBWo1J8AAUFsBAp6h9y9L",
  "key7": "514NPn8mzVUXgFQ82nheS4WU9TFYNpNCWodfho963tTb5LHYST6kGNQcWLDZ1PDaUna14Z7BGsLWrBrUWLM4gzX1",
  "key8": "3sYaYCHJg4R7CLijeT9fvXaeQhDjU2M95XRmiEbht3Fv2arQpYkgWptE2YXNd89vJenPwVNWT5bqDEwsQpiddYxX",
  "key9": "JbYxW75JyeSKRfF8Lz6aXVzq1LLdUCV2ftHiRpaXqg2R9SK5iwNaMnGAj9RT5FfDUyjBDrGYyPm8WwXEgCZEfor",
  "key10": "4zwUTefoQPFsqLJ5gSj7zZdLoSpLfBu3eaZyM9JjT5szV3k67k4ECm2FHAA86JdHN5ozqVybzEjd68LSqsao6D5P",
  "key11": "3hs5C1ShUws2a6vsDXRvwBZC2wQf8JKSExpXCC4KbBPaaxHLiZP6VQKnHMgZB8C2NWSTnFwtBjEw8bYwssoAmqSs",
  "key12": "4fJySvq5WwKjPSztesPRfe27c51gncBCs1drvkH8kGUdLYoEGLqAbTsZuEy9zAQ64FgnTJKXFvcnjZ91EqVT7g4a",
  "key13": "D2ktBmwPMZUDhedER9eNJXtLqxGTmHc8pctqoyPPdHqmgjaGgXpAyws7buDP1t46kJmQFrGRU6sE1oEnHpT2mot",
  "key14": "2aZFaDPsixwWXq4Q6WPBPf9ejCfHKdHFdwrpttRt8vKc9CUvmkyx4ZCyscRrshtdp2EBygdxq8a6dZp4D95TbXTv",
  "key15": "4ys3bVm5SgUsUBfXwfmTHKLuM4vbZvYMv2bXXAfLTpfKyHqSjxFbNkTdgtZgP4zeZFgUrv5Nit95sLLTzJ5z9UKq",
  "key16": "57HpYjT14Yx1d3yi5eAGQUhjy65mLPrQo5Zuxg98ajyCUEaaxE5mkfYq2hshDByZVE6BT9Kkot19uxAC4oKuzhpC",
  "key17": "26xKqXtbVBuw3fTsiSTfgwNXoqUaf86MWXDc9HsSCG5UcSZ8HXZTdyGnR5bAivUzL7d8f3LGZVkLnv4gh1tfeJBz",
  "key18": "4u6jYYAL386Z2CbLJ9vDyimMaZSnMdzusGM34GvyhxuwfzZciUdEC5jya77tGxngx7DgQGquRetPcyzVfSqUpKX9",
  "key19": "4PD1b593VV22oVnHVytoew4guE93QkvWmxXr2vnkZwJniwRBn4bk2F9kHgjCvAp3T1HabVs65cHwz1c9wN1Vq2mg",
  "key20": "5oJjXy3USsWcQsoDS3e3znfbJdrYKtfhFscviWFTXTxiPFXtE4Zd2EwXGEfKFjrJk4LipK79dK3wguEP3TcyDPGL",
  "key21": "4G1MQpFB51LTTxdSkz7AdMEvajFpk9EXe8hyWGpmJ9WvSQDCv1dKjTqTyp78W8AeJqSjGwcWoGegbdEFfDzuoPcQ",
  "key22": "5Tx9gn12Zvdyao4vzpHYoXD2VChUrgrYVh9rPiqFVj9PmpRqZx35kLuZ5179HNa2m4wjtHNyac4hHGqDE4AYSKxE",
  "key23": "5FMwxYBUXhpJ3TMrBsUGg1m4QwPZZ8ZykzLNaXvTEoisx7u8XgfAiZrrXHfPDt1r7h6QU8BWowpTSaoasgsKCt7G",
  "key24": "3DGTqCL3NoigncWLcZgfVTdNucHx8owHMojjUYrfSctj465Qj2dSgynfMBwnPqm2RRCdTqS1ihup7qvorcfAkfzU",
  "key25": "4Ts68ro8tNsPEow62BAa2Bdy9dLgLsxJkEhuAvbxnCaXEvh1zytzgJLYoSjPwcoidxEymsi3zjdczqBQy4acd8gA",
  "key26": "3G1w2otdM8wDoSot8RKQFKgwyLW3XdJkT7DHcU4745Pnk9yoStYXWz9ed5ueBXzSzs1zApyCbocYiyYXoA3pKQtL",
  "key27": "aWJ1HQWnoBKq8HHtQUvSMw9e2oTuzLRuxA5SRhfeHZzv7Ni6qcS5QCd3PQL1rVVftWKjzRmHbZNHESdYKYCU6Ui",
  "key28": "48YL7zSpcAo8Gi755ZLCPVguoidCv4GC9Q3MKG9Nw3CuoB2ctrB4jCrT1x3uVyowQTkFirHcBRWN6JKMjtXwfoxK",
  "key29": "oHrfifLeiffACmRhrPWkfbHbmBt614qjzabr8B4VoizG5TEmaoRwY9PNGZnw24DwBqJ3zvxhmoMxd1EfpdqC7GM",
  "key30": "3eJBZTuNV9ReRbCTn8Ug2PFaqAAKocuUBmY7e3MN3zfxuHbcvRoPEcXHLrHWqqN44s3E32PqGj5u7wdgaF8CYTE8",
  "key31": "434LETfa54aiEbRWkvKWqocbDCnHo2DdCVwzVwq7PYsbb6uk8KVRYtChDebm6t4WC4tV6GmwfqHm78zmXvHMqgax",
  "key32": "5s8ys1p37kusBAudr5RBXqQ4dWKV47ccHMe4iVTs8qxGhtgRNA5wVHRGCyveb8wb5UXLvy9yjnhcfeXLJVB74MmH",
  "key33": "4VztGcy3q7vKgwwA16rCg2fCD1TiqTfa3Y4p88GjSpzSx55QyCQa3cMJ38N4GRbrF8EprY5zri88sZr8eHm9637y"
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
