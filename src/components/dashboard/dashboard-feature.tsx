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
    "2Z39LDvsPZ8Gx7NnDS7g4CQSzvii9rnmD94N4DDzBAEjZ1TJRP89HrChZ8t9RikUAChAigyA2HeqW3SuQMozfRbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QHkAdXmZrJpfAh8YEU4XEDWVUDGDkbM8zPNg8YewEFemMH7y4VyxWaY9PdV4x5ZXmjcWQJoDriSbquyAgGFYL6a",
  "key1": "3PGmvtqYScBtcYTTkHQC8CdvQrfDCDvciaJAx2dWdMXasFv3v3pxEcdLt14XgbkhsHwiQ2gYU7k7TcAzh3RkjumL",
  "key2": "5NKfi3Juwjk27X9QtywZQnWjfcVXM4imskwWH1KWKMCR4zTFFCXKVT8QmfJuARpHwouMSh4M9GTxdFCMSGeZUz6M",
  "key3": "VqDc2CYgR5g9AwsPiN8guVbwY5WhuNWfpKx54o9QFGLsWLF4GNzPV97Udzz13LygJ2dEnCoV5GvA45AtPM1hEa9",
  "key4": "VysTNaYYikPzxxLfxBsVGi1eiYqSV8BA62EEBgsuq4ntjQHpjeZQzBtxRBtgvAhTM6osDyqti9prz3WW3EZKMXg",
  "key5": "2Yu3WCsui3ykSwVe2HhxyXYgKqqJ5G7MmfyWJmGcxcpA4RFSpAxeTbMyWT8UTkenETgH3m7jiLExhd3hHTtES4PJ",
  "key6": "5HfWBuTuwDou9Ukw3MEAkNngPAZs5DbtmWGpzSxmVcSyorTXrf528ozFqHpiZfzdY4o6gojPU1KXEZf3JzjRXd35",
  "key7": "3D7kHsHGYfebZSzNskei9aLGxjLxCNHFB6RkjXMctnHv1C1ERwY7QigsVtjmsS3TA87WMXABogiwNq5FEEb4KdUj",
  "key8": "6mQSPPLJtaiHCVoPojRVAZm6NjRnszfovK8ia1NYkUBz8ciVne9MPaLzECZ35TbGTTEbYNmwsZJATwKMCHPSxhu",
  "key9": "2CTVgDrpzyhrHmmSMbv4hWRFDCzeRKLydwev8YHkFvBBwFSnkXWrGZxTh3WvkYEaZQwRRGwz7UkQdLkMP16V68V4",
  "key10": "h1X9yqnx3VyF6cK54bCrqvjVp8BYVFijpsfrnjxZdYCCwVSZkSB4h8XGEWeiXjQWdZNgS8n2gEPsGSAKDe12ufp",
  "key11": "4QQuEjfbo2uaD8QLo7VgeaMdhCoXpcJPguhFqaTy9XwQojDEifvbVgsoNPrFDKyXKEQCec1Kz7sd4wrskWr4BEuR",
  "key12": "4iBPzJx1fxCU5Dx1egDbDmW8FVHBdMedBwkxJPiJ3Gs3Bxbwt7jJj3nPyXbDi6UUKfbtxEjbySPg4bysysnydKVH",
  "key13": "4f738VdLF89fuXFyueC688ejw39dDpPxn9nh44g7qj1ZpMubSbjAgpqGAcudWThbHhNh5TrJQKPstAzN4akbKmjN",
  "key14": "2V2oBbjktzzY6c6M4wSRgoA9bGhngy8a2iTYPkfHb7oTLAUEd2VKGmcpvP4jtUkdT45VzGRzpnWYZjwF8VQTKaPp",
  "key15": "3kFU2GNNmBpkLT4dnWPnST88xf2WxjSe4q4TLZqi3ebQh2ms9SJJ1J32KqAym98oUeesEtVeHqynaiSLwyVdvksK",
  "key16": "2vHe79EFmyjDvARKZnV1aLaJUxMRhQjLoooGiwmXegBMYzYFZsfRbwh6VhTaw2qFZKX1wjbRP7q1iFgpKjqHewDq",
  "key17": "hkzH7h2F58j6NNEfMZCRiACJriGwdGJLBK2ksoSAHbTpouxdDWVmWkiBgGjpuW6BEgX6h9MZTgdN7wkho1ZLL1o",
  "key18": "4Jau9hPMxBQHpkkyeMR2zXHFA3KtHQ3hHVwKa9P8e7mQHA1dFNGWwu3D7u3s1Cjnn2Fk5XGJQdymitmofj6JvZ4p",
  "key19": "4J2DpZCW7N7HHs7qk2bh5Cg8JnWDSZRh5TYsdLgvpEZq95orBDEDi6mk8DvFT7HXN33y7ov1jd4VTXSpXn2Ak83y",
  "key20": "5n1UpVuyXoeRinaG8QAYxtbSB8oDFbDgbSBQVSpawp2PaZHXUCp9wP1gr7bwr6ADegLHmkY3CpJB95HGfM9LuJtA",
  "key21": "BiHXHNKBCUh1ruxrjwasbvwJbYRb9GXWHSYHL3fa5CA7ZwhHdLYKS2ANBTfH84xUQc3gwGCvQuEMC4bw5MeDEei",
  "key22": "2ZPQ81TQR9ZQFLLgNNmaXjmBRb8CYyyce1FquLeRdjcidLwwkTNghsoiNF2dU86iLp3LTtxyBWmgXbLcxbBciekq",
  "key23": "2fZ7px7q4d4Faz4d49tFbsN5GuR4FYVTKt1vSWji826an1AT6zVNzgqSf52pvKjwqDegymr9nVjEhkxd12JsARmZ",
  "key24": "2zX2bWf1fJpkSGQ24tp2uGBPyE4zqhsbu9XuXMieBppNvx3aYoot1B5XgwU2uAARD3UqRx76iZPAEwWnZR6WA1RW",
  "key25": "KFYwAjJtUkNeYv2BH2RvaRsZrdxLqKy9XRZBc81Dq1LKkvgLXz5CGkNJKBqYdBZMfHLcctBY9tJ9eNAK1CQGi3g",
  "key26": "3Y2q1Q3gDXhLZNQDnmtY2pjsB3Kr5tDLTQqMxhW1RFuxdKH6RCjNnpsQioK1s2zprFBkaAd3wEcnGBuGmG7o3n8B",
  "key27": "5jTRKx2AZr6bM5EYvsKZS2aeMrSRQ9YrwUg6JT7ZAgTFUzejjNjhmDMBL4XFpZ4DcX3rELup3AoZyFAiacRbtA7q",
  "key28": "2MNws6du4bZvGHQs9vR4KMeGS8294owPvQ8KWSLknn26JKxFo6FLft3oAYmW55mfhecfEPog7K6ZzMpknEGzFcC1",
  "key29": "YAnkuF2tN6hzyoaFkE8DjEXMZDv4HGoA4fVWSzuZbSoYicp2Az7en6dSfmPsnsAc8YucgTgW4Teh9yEsB4He2GF",
  "key30": "wWvnK1TYSQbvQcovgugFxiq9hTyCANdCvcE3gSdJfzofR6rBjVzp67CgkSK4rCn7G8S2AB31ctzCPYKCGSW8AfK"
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
