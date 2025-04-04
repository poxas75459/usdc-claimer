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
    "sSoNkYBveFGdmrCniMSq3kCH5W4BDH9VWrgtwSdxmv9nkg4vVBWVc9ZKXagKLkWWwcwhZsv7HpDKd2ThTBP2wnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m4PsVGGp8TagJP4M6vXbvUozu8BGtbgw5pERi3knzX9ndDNFzpK6jM4tPn8yLtn8hVw22Be58r6FWD36Sqccq7D",
  "key1": "5Z38B8hzLDu9t81NHnE5QgkH6XRbCoDcpf1WSi4L6NqKb7Budb3qNX9LJdp33Zewpz736eo2MCsAWHCf58sDWXQp",
  "key2": "6158estqzEJ3h4RdAn3ZCPA26upRyEedJtSQ8dsuoiZMCuvVhxF1oJ1rk25x3N6Ty3hU1VL95iDhbYz5yR94iPUV",
  "key3": "4VjhgdWNHs4wVx4y4qfApr1xsWJB7VAxNCguXbicK1385Sv9vuTfuznh1tG4YBr9rXXoptdiGLHgZfeFj67EB1HM",
  "key4": "3JiVewky53E8ZbkcaY8b4GmjFaaNPyjDMZh9MdjTRruYUgSqVXuwvmWn2EwhwmYLe4f4Z8nTmW2eQD8SJMjpeLVu",
  "key5": "3Mco6JAJ8NFgB6ezN9d5t9vqXwS7ks68boEqpdSQAu4Degsd2xgX6EpWRjibsMiceRLEbHWzVpzs8nteL72Ym6h8",
  "key6": "32vBcM2PKnZCQFxhpHaLHUdsqC5mBwGR9MPgXYzRjVANhHTtGe38mMT6yHWEomR8w7suLiaebGYDS9rMo2t2cqaz",
  "key7": "kUWWCVbkAofePwdyAC6JZPJ447bLdnAmHg8GyHcR7GNUSXFsQHBcwjANRyoPJr5fWYQY1Hsm89PkmRBSUumNsCJ",
  "key8": "2rGuGY8BzG7y8SCr2Z7TmT8T8Syb92HfXGNzyveULzopp4xd6RwaRT6HtqHzbPJMV4xDtEsGVMBoNQfTVd8AzkNz",
  "key9": "tnyAMqQ6gLKg5HMsFFkWt5NTDUnmZ5LRZruVPchgyqkJgm2BSNBC9WZfExat9s3fqavbf3BxXobPNQJWJTr8aPz",
  "key10": "52YLhGrRNGe7z1r5F6fgC544vvLQqd7z9pyTRWdj3VZwbgSUZVHPJopHKGJLNRPW8T72bRhpEtJCZBNMNx8yxwSU",
  "key11": "57KCr7YRo4zgXobxh8xyEraK6cNeZ3p2KxFjxanvppQ4qd5pZAgr3k3kgo6RpHK7Sbn5YZqLJ7gUusFVQWftW2s3",
  "key12": "2TY1sthwRjFBhpfJL3Uqv2x3NPcASWntMTpJjQgwqQ3fPTPkau2rC3YVxNLeq4dSqhAsGoneY3nfEkJy1D1K3TG1",
  "key13": "64qfA66vjYF6QRzxMiuUWWboV1oRBYFfpBbZni4Jwv7YwvHfsLQKiTuv2HX9vuoyarZF5ryW6sNT2CgtJyRYr6kN",
  "key14": "3WELAs3LwejnpQoNbQAvh85SeyWGPkXX3qBxeCnJGKUZYw1PqjeiLNzKd5zHF5hMQ5hfgu3aRFVoENyGUft77T38",
  "key15": "4wagNhpqRJnuqF5U7LANMFRqfHF5GvwXvo2LyZp9d8EdEBU76ra8jhAN44nN7oBybCFvg1kwhyeqh8cuhkmcCeF8",
  "key16": "33knnxddz3pGLyfDRCWQHr3rh3ybG9zbqg5r7dfDjcd7UxBQj9cppqfcpUzLcJNqZw1C1f3tMqESAbwwLxgoLKeL",
  "key17": "2fmFde4AfxL5ycsAZ76bVVMMGBpdrfGmT3MaxTcEHh1JXa7WMtVjpxC3VCDtsxAwoXsWyutjtNz8KaLRN1Atum95",
  "key18": "2oh7stBpw9GadJGSYpYegNrPSPRpphowbWrPneLvjZvDLGvdtZEDUpfJEYieWn47vzw2xXickAFYUCoYed4ifpd8",
  "key19": "cbEZH2Jimb2UqLJBXyj7XeZL688pjVYu8nVDxznRCXCuKf3HuiRMEVhXDdZpKR1sAUXfnWMQtVpT5anwGj9rTQG",
  "key20": "5uhV2QHZmLHE4j5TiPSrSjP9mkxhxtCqfVEy7C6J9R6XWNnN6LCa2RNHxyVYkUcfpoq7NBmqmNo9L5aHJfnBQAcu",
  "key21": "5isihHKhuqZJdEs6HR7ACspnLJe6tGHrc6U9MczAa42uLHXwu3msoDdUAq4rDAMgfPo84apWahA5BQ4nKtAsXjfM",
  "key22": "5dc38SvGxsCU4V7xCUMHjbkkKPhouwz2x7JrXbEx3RafeNXW825KiKgwfHbLeomBLpR8HurZDXUkSMjfaPiXgMpE",
  "key23": "bWwdF7Wm8u5hnjU1CptPdEjdJU5pFZY9FNgMs5eKiquLKaA7DdXDL6mqYS1rzzerHg4dDm498GTsRuaqYLJNK2x",
  "key24": "52yrVQLsoBbXmbEVKNrB5NBgjD6WTff463S5eoUjLNJZcjW7grmhUtfhK4ptbhkzgATxpgttbs5vv3jXfyDLD3jG",
  "key25": "4Gs1dauzFm2fpnaoHL7Q4DJ2xWUiULKDwcRSwAShaEVvm8ye4Aqn1XpmGurQUqSQ5yxfTctXs1yZuoghgjsfGGKK",
  "key26": "2vyrmZg1z6zo6pv6BCYSpojrcyLkaUe9xU2kAmbC2sNwspMp6GLGAZ5Ry9jgQPa7ZBtfxJo1hmFuXhpwTm4vyAmP",
  "key27": "5JKkZmhANANd7MuYwhEzTbQsPPGFeYKuPoArRL75ik2x6rjAEvit6tedxKqoPrLvcLivH5nuMqwHmyD8vwwq5chN",
  "key28": "2QrWk22np1s4kZoUmvZoNCYYAGGErNv1k2GsJxHbE5FpsRzEjKck7WV3W9kpKEbeBxKGUeU2fMXNnJpQWvDmBwXe"
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
