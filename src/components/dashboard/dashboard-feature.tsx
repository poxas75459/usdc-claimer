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
    "4gbsNVH95MUJBNoc3R5yAVi3MrRMJB4CFeue3V6xQf3PRLkn3vdqrpK7PSM7DhnMSVPY8Lfenkd2UP3JVLQCKh7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GmNg6hNkysKoKCrUSyBwBgrejq9AUo9zc1r9FMYdYuwKBvn1S4wZjK3oJAKNpqwAFtSwmJB3kFxqfbctbpSRhfp",
  "key1": "4Wz1jDpeJR3eXDkcnv4nfesfgsBzkJwz9Z5QWyMTnq1cN2bxdBscxc6QaySdtVPSXeq7HrY6Ty45sdUUmJpbrfhA",
  "key2": "4qTsojV3kpFjExT4EtZ4APBUPKZuRukcxvT6KdYnrDuSLxXShvUdyUBGPRWo6Qvtf5uz65wwLvnc5wrsj3Yg4ykL",
  "key3": "x84RP16Tzv1gwsQFLTWpT6ByfnScn5BfVxcxpnoKos3zmqcHHzvEMcdaQB3yaPBUkWDqgNsePzKMfkzJSAHANvC",
  "key4": "3A6C8xxXHyZWGMkAUE5RM2ZMxyRBUmZHkdSVURBrYHFTLjWBswmG8taSoWSeBTjzRiT41cS4bJuq86NHQ5zJLbx5",
  "key5": "3UNxqjZ8Ykxa7oc1GPu6dWhtWpZYq9XeY1iamWAU29PhFqebPvYk5wD6MU6hBaLfddVCQvS2jxYLJzbGE4atiQ3A",
  "key6": "9Es8W8eBd1ry3siCrmh3c1i5hXSedFBciX1gVZLMBT3x6Nj4ZsPJqpbKEPqFMA57J3jbPribSUrj2MLFGKHozS9",
  "key7": "K3zDFMwUGacBEe2kCXNVxn5KQ4BYx6tbGbVPwQoEv9LPfi98KYHh47JJFydSw9wjpkRFkrnvbnXABJZaMSQeMvP",
  "key8": "2ce9mQSkhxQgjZh1Mm2fMVfB3uMnfZL7KjWw9NGHC2dAGmc1tMjydvpZJbkdqqMJSACkVXZbPLW6ov1eLPXx6Sfw",
  "key9": "Nqusn5BynQZSNfGHaev9DeVGsLPHhsMx3Q7m61HyWk1FRLNE16jDRPeWot5igbC84nHBnWet5che4w4eXbqHVq1",
  "key10": "2jrNZEmS1JFugtcbUYobendu18ijXy4DXh8hiQARbdCNPzNrtZYquZgXUhArFGCPw7v6nPzYRfyfX7ouMt3fqeJY",
  "key11": "mtdnzw3ervi5Uw9Sgf9jPQnJXaBhGdsvnxWsuqxgmRgRYVMQiV2hE5dGiRw3CiXVzdBDNHRSCL1VS8PwH6dcsNT",
  "key12": "3TT76SF1thfDcBAom3Gm1gRHqgGcdDB5SXD6yUBRrzpnzr91CfLHA2QuWwuqTSHCVYUYND5GErrkU9qbYpeQwaPA",
  "key13": "4Y2tcjKMwDZpUqPcL5ABAawperwgHWAYnaSiBeX6aBrsHKqLrRRPJrSaDXMY8JS9wzHVEzDB5Jf71WaQW1pcEpmQ",
  "key14": "3Q614LQjDkxYGPGyJCMofPsgJCiinDzPudnkhNZAvPH1v46ANkuM1GSa4W85nqe968rAavjPropxnVLU4CbcR9g4",
  "key15": "41FDYwFqxiKoibHam8bYEs39ZdmJVaYPhkPAtFKv3XAN9cbLSGu6PkjKHgf7xN4Wat5ca4XAWGyYTQU6x71e9hCa",
  "key16": "4YfWN6KNAyNCqPnrCjd9Bcw7Tjr6NRz75WKn8FAS7S9nmSq9CaAyF7FCgaS4iE8pzW7ouu6jzAQZQEjv48fnQY3V",
  "key17": "26rUAEAepyWqzrqGPgS1h6We45F1T6BSmWUkC1g1xw4miAjiSBt18LXoRo4vxY6xJYaVrsd4mTpgEYvCZP9tF3Uc",
  "key18": "LC7XNcWRAx4BZAZ37dj81VbxFwnh3wbmj9z7Tpjyae2VkHxYWAaF6EWs9eDsJVqUT1ukpumqN1JHFGNfCN9CPQH",
  "key19": "2Rvda4AoskBYXjLB2mT8SpxsYbgDiyjiebK1MNArCpKVPygRtiwK3z5WBS9UeghYQefCT5KEP3xCrbFNAs8L3A5e",
  "key20": "2JjLRNxPe3kHSKmskmim1WnYaC69nXez1GE4MsAwbFGi2NnqqyAZQ9vBhdRxmUFS45aZFo1LifvioHTLZL6ai54d",
  "key21": "3CSMU6DctbcX7sAD9oGHKYjRA1mTvZqfpWxqHrPqgHQ5tRH8ZhQnqpFB9rmPG1EUCyKRFDCmk26KX8Nyrfoyi4qB",
  "key22": "e9QGGJmR9aacU1eqZ6m2snPz1QGQgN1RoysfH74p1tGRQ2UNQijaLPFb9XwgC5zTQMFgvNL56g4wXfzfNdCvB8C",
  "key23": "5AE55hCaL5Xa1z4R6qcvEqDg2iNJxJwLMpHTsWxHD1Tmp4j1AvXNHPhCGj4Hk7KbBB5vg6ujdnHtanXe3x5nPSrm",
  "key24": "3rTHzHdC7hf9zQLAM4pNeK2TmZRa7RJ4fsqEwX3UV9Y1fWAZUWpwDFjBUN1VDhpQFa8n9U4tnrAudqS2L5cm1Ser",
  "key25": "4RqLXxycHix2Z48X35DTD6q21Gp8ePpqiTzT8CZCQkvQ4zgfCWG9oc4CaT2i6ze7HemW4v5F1xmHgVLqRRsSjZy7",
  "key26": "2LrvCiD18ESout7GKZvshB9eB9Scb6Lx8LyAZ9GaSSLnQDQox4zMSWZB2raY7KnZJ5qx78N1tbj4F52AmZ6y6JqM",
  "key27": "4arbMesEuxpAjnWMKixYjRFQdxgENkKJ4EYbgquyVvSK4GajkiAbSzkkYBvGWdmD5vrvFUicy6jKywV8n1aGwHrS",
  "key28": "ZyN8e97LZUoDRFfi3n1cEYvgFLzZxgRJiaSdYVbHHCgpvxGmVSpT5buYfkrR1HrppzfbbXuzFhMmzrZUS3LWy5i",
  "key29": "b6LW9chmVXUX8qi78Q5c88PoeXN5nc98GbX95jVLch3yu5JZWWmtJS4RwK8d3siyCW8ibkpEWaYpLta5S1zVyEE",
  "key30": "5BNrqUy977Y6AwqRUQHQ6EdbCHdAX78hGgPxJLSEydWxpP3fEsFtW7qHXvzdYvbsBCVTtyDBcWH8fqtywatgDqrG",
  "key31": "2U6QEuh9ShECiZYrJxmgDwagZPn3xpMGDc8SeyPMWG2VjJrjepVWdJtCwm54reroS6BYnRwHJ5h4wWZ7YwkRYCaA",
  "key32": "cLKBUzsDHv1c2dbhThG2f5jCYCh8NDTXMtgriHdyrcVxhuXdFXyvo9S1SNgju6u8NbMTDeMquoBZGcCzNmHNXPh",
  "key33": "4Pgv4N1CdifaFRrgk7LuvcDQnq6vtac2ps4NF7KM71Q9gHRqwGnVKjxbXJCzmEWrHHTSyTNXgYbe3d8BZ57EWKyV",
  "key34": "2r7B5ZYjPp7CxqkBnZwtgni79mFBS55vSQvCHrZgkCN9F5Kx4vzZPq2p6mD8Nm3pZhsoCQnYMdsmSvhTFQ15xQnq",
  "key35": "5MTsAfwipfeRYuU6xcqG25XpkfcP3TMj6vob4z6Wkv9GZEzVqvxGcncJxkP6ZMTLsUwPsMt2Dhr1FFrTr9mVUSCH",
  "key36": "2EmU59ehPBNpJTa1Hgdn5aRD4HsbRTTkyCeYoaTibvEd2fp9L1PgmXeDBvUfRpMEvWZN9ckMqUT3JqYABh7Cvai5",
  "key37": "24fipXoAQrRnuYfgDbgSAjh1jT1tcq5aLsphwX3RJzL8xguQTyrAT7AEgg36tMqsrSdjBe59J6fEWv8PbCn7nr6L",
  "key38": "33xZfHraW7aCsRgdUoxaeA1ZJPNUs7BukcFCmSHHSwrociQ9nPzw9kAqZgwMGov7SjTRBf7upZqxgEzd8e9nNzjW",
  "key39": "5zGGkNBNJf4E8eFpR47zSuvk6oTsfaENPFajRYC5DUyoBtN5STbCoa52USbvyYbVkb4apQtqwwfeH3pdbV5o5j3N",
  "key40": "sgusJ2rqwcDUd293aXJsDk8P5WhutXpsYqwb5GGtzX328TPNzUY7sVbp1BsviodgDqMAuRG5UNrdvdfMJcMG1KU",
  "key41": "3nZKZdDggorpXSz4XDoqudDjjFb5jX1QbFSQCBA2ux2PoZbTq2aGLX9rfdx2Tw7kbBg2dHHJmeVuPggFYHSTEivP",
  "key42": "jT6j74gHuHV1MR8dBnMaMZ6CZnuZunkCm2FGY5nDMLtUjDiaVdj4H8YcdpiqwZkDrK9XHUFpJ7cHT5FeZjN2qJ4"
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
