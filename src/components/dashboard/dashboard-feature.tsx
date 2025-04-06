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
    "344QJYzEKgE66fxgaaUBUQe7SjWf7QR7YSnDvNmmQRqVbxHwmKPvbmrmDJcpJ32YK34kAtxdgcWnJvNqHTR6EgkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nhb3m3f7Gv8jeoPaqJPkygacKVR72AiXYqKY3bVUCGf8Nss3M6V3kWRnK2WLkJfwuRTDTRBBagGaStmoT16ZH7t",
  "key1": "4gndFYohTfbYDuj5pKBPYNsBxoxMPwn2cwZZMHaZVMGgJPb6n2tJPRKvLPsYjeov2JLkNkf88tMgXrJuCADaJSy6",
  "key2": "3QdyFyXRGySjyQNPt2X9zqpYcxjfQfevn44Sai8Z4Figk5kTLeWGUf3XkJA9b7FXboKvrkjHPs8ySeDg2KGPBfoH",
  "key3": "5cjquQw9CxKHEzjQwGnPbbqRaZvDVDBGPWvSsjQHHw1FXK9AHbfYJcLezLo8LpvZm3MJd5pivc7a3saMCJJihqNq",
  "key4": "2Khd1c5HN4GBUFzaXSrFYHMcxR3tibLVYLVMbEQs9Lxnqt9BAd5zUCCfh7HUByGy93JJ2fGfU92pookkbpsbCSEJ",
  "key5": "28EHXoGMeDHurhJiK8FrhkRBjZWiYajUAq94sXkXAUs7UchnLDeTsAdeAACmaYVG4ib6whEc8EMiPTU3SSRev1Gp",
  "key6": "5trPGVzkL8ZzUQ5zcF4e2QxhRZz9475XYTECWSbbGURd3bFLCv2TCX6kaMArB7cM6ztak3LKPfYTTSiZ4ZVwjkK9",
  "key7": "4hQCVGuCCvhPNP5YLHNwAfZMjnUcy4mbyQw1P6z6aCSP9RjtTYt4DWgnvdpgKdzbWKPVMk1Shy76kfi5AEGKt5uw",
  "key8": "6uyHg5b59FvLdrrnkvn6ZJ8DbAytLHfBzPjzh3Q6N6Ub48sbRWQzKgGjBhAmo5bRnKaF5NxySfp3jfeFeQ8huVK",
  "key9": "5QaSVNEy69KGEn5nVrFjwXXEhLnnhSf4Cn3iLbyoEp8qJnBvdyRgMYKVAEphL9KcS7NLgaThDoK7WATHwo8bFZ8t",
  "key10": "2t7ETphkeAkHCfithFkoDY4443saPsRMwYKH1JEGBTP4tVycxvLGma6to5MpbV6bPxUpRpgVDCHdMkeQVzK8fA5g",
  "key11": "34BGizSNLeXbDxN7BJAofL9Y1SGf1TFbSrm7urSo46tTGpjKmabpGTLrzi6nuH9um9Ss2YPk5nDRydwqwK8xdvur",
  "key12": "5FyLGQ7zxGUvKzvk6Ji3zFc5f2EnygBFmU7seS15ww7xcR33FkahuoaiCrcLhXhbzpwud4j4Zpgw22Pboam2NG4a",
  "key13": "4QzhjLen2ZFzpZqHumxkwk6fZxLVYdKLaSpTGv9Wp3yBGeywWZXnQvTzrFq5qsKRL5mphQPiqfRyDzcCky5FqyUX",
  "key14": "XVfcafi3D988Dy5BsvXRHESoNHu14RCMrvqAG6cmEgJMUE7zgbh1fXHPxmpDH66MP8jcxo8WUEnj9fxF8qtA9xV",
  "key15": "4Qqtv5w4BeSAYDiR9g5Qdnp6p37tDozhvJr3BnGfKUEvzktXrnJhPcVNMstyJU4pTgwSH3RQW6swKkXEsEEjPNhD",
  "key16": "SNhqx6yvuwYg52dNTJ7H99cEkLFEJ939r7BJ2AD9arVWqeNRQf4rPAjPY7QbM4fdHu3TPAzEmj6o6y9uSjzNrcC",
  "key17": "4TF8QrmcG47UjN22gmVq1cdb6kKBHJ4DRU6Gkbi3nRpoMY7VHqUVQQETS9kAydnwngMTjoZfKw7BKDgMZyHcm869",
  "key18": "2c2SS2YjNujRre1kHzCUkdcESEmUCjF9VXgkwXgSj3B1dr8SgRXwW4t6RxdJz3fojfx3yQWYudDizfM6wpPecowE",
  "key19": "2GFJGFLaZLSc3sk9Z1TDUw6tQQfjy1mmUGuquV2fCY2M27bFZFfTBuFj7CTuqDY8aMBG3L8aXAVzCYKeekCMBU1C",
  "key20": "JQ3nh2cEoogmHSp9mWU94yaEwcC7MBLgNukMrtZyMZsUHm9ckDy2x5xKrW5teapoPkamrHoLAyna6Ymn74dCRDd",
  "key21": "5SAB7eAaXTSd14nKEvUkKTpFL6Q59zeqsMH4mxmc3z3fmPVN17nwkGJ7KPBpbdQhU6yPZtT8f16KTmVMq5M4eZRk",
  "key22": "5V2D46mPwZ1S8Hby3sCarxvA8dq1Qg9bp5HLh2UiVnzfv8sBsjVricvGQJwxXCVAS4ZvuZhGqbPkUAkf2LShQLHA",
  "key23": "2nywWEVY7ht6cc6G83v7Cq6n7Z9JkwqskWEjt4zL7EZnfTnMQ2WfGdyoXZb8N8Tpd4kLCUvZcWwer2MwjrLuPoj1",
  "key24": "4s8npdUHMmLm5tSJBt6A1oHa7uwTvppev149FLkq5imWGFoz77fizXvrD7hXz3rovZNtu9uiWzTc3JwAxjf5WCGD",
  "key25": "5CHt3nucZvJ8zKtu8QvCb8AVXyCd2hcgkmEKnsxs4HjqdaQ6d3QmLZ4nrc2vE1DiGrEKEaH3gzfcK5Zqfx92m5e3",
  "key26": "5zmLtqk89UX7HtvxRJmNq4YX5LQWR8TRLsv5zkC236GfdSxgGD9V6Ku1m5QHq4DkYY2KaN8XVCbRYfJ4XFWzD5y9",
  "key27": "3uqFGrSPV7nevdBNHekiSYHuwjmTkhL3635X6LMPhm4nXod5xbamYzSzoKBQu9QU3u88j769SofbGGMf6bPd5cY9",
  "key28": "2QmBYAEfLnstp9nbJTUDJBXniGm4wU5RojFkHY9vqUKzT8uGDNitsBTajcj92RhnJBJjLmV2EWrM783ZoUH2i8gq",
  "key29": "EKCTGgn3bQTMRSN9tnqEkR2EXNRCraKaiP5Xy79Cw5KcQyhPPszEUf8PopjV3AKFHR8ozYrCxPn1vGfJjQ1WNeU",
  "key30": "3BGNNRNooWcKoCGr5Veyi6CXTw4xQVCQv8KbbVRvnhFcQsYdiDLjsCaiCpeCoD4xzvwU3naB7jNRyByPc2pRBNGJ",
  "key31": "4NwgK4hSoTDYhZEUmgZDqgskvFvKUX4dgBfu3g2yaNUG1KFjDYifKSsghvL425hzsEmVKxb8ce5vRoGR3XdXBAA6",
  "key32": "5EusZWvkvC4X3prE5ZKH9jC2aVyMFo1pdJ55KRQRskLa7fomGmkwaz7DqyqkYKsn4pH2iKwqBTS4g7MzHRFaik6r",
  "key33": "5hTbQQEwrxzAn69A3ECDZX6tT3AmsH3e39rC4m85u6iyz2gQpSi7zvSkE7WPTw9o4phVwSeBw89aULTDg3MdHz4P",
  "key34": "bS79p6MfmvRu9BKWofRr2vgGJcVWxFnMEN6FwiCXPzB5YkTm8hnz39NiVB3CwJ61bwwus2egWNjkHEGWbZMfZEr",
  "key35": "5bMmS1JFBbPXbtgakyPheXCri3PRvgR5kwBLsYhCjNr89LYNE3xfynT8DDrbcjQnBps6DSurJ8ecA2cMDfJqnZpb",
  "key36": "TrxjheGraSt1x7hNUkdNtmugzGEABN6LHkXs7qW1ns1MEZxT8YrUDfNkhuV8ZQJJSSHnwcS1njFHkdvqioqp8tg"
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
