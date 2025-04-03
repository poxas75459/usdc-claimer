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
    "534EECvYDhCPm5MFm7PtRYa8ZV8LVoE1iP4icA64RgcKLDujfhxkr2V7EokeyAVdPuLWhXa64jKjzWCTTumiiadn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42r5ttGUXaqZAdPuoSug4Fz7M1TC97pV8Uuf6JPg5soEu4ChkiMYR6XHn9nSYAxn7Eojb1gBEMbfzdUvMe2xhc4D",
  "key1": "5wakoPT9xugdUmvAVy2eeSaAzZ8GBQiKBx6NjedvrncDqT9Rh5GWNxdjoi7f25xaSu9hAu4ASzgp4Z3motSRDx3t",
  "key2": "57nZyK5JxLC3D1z2MNw9p9YkBFhLTLeJySm2PTCpUFSxCZB5iYrfDUJiu5tfUPZqAJ6DfhUkq6jf2PW9SzD6xKYR",
  "key3": "2CGaccNNfUBZSXrDVksy6VGQaju14jbHdbS2eGUm6jeSagWjZKUubnPXrNMEwxoTPqHRfPr8uSZBGP2VTQ3y5bbY",
  "key4": "2hxSLHfghzXK5KBsj3eFhm9vrveuBcKWxdZ3jhxDWgqCwbgjSmo31PijCt8pXVsyv31Jw5vjn2SDhZrdqSMDzLyu",
  "key5": "65kJkgy7cz4zr3qFhFRm6nu9FRtH7HxWQVzMK38ASitKz6P9YhLUv44F7e18DoGiULR7JBZDCKF5iSYBkvgcxJdP",
  "key6": "2c3p1E6t5gdW9tBTPZrgepjoVQanRCaAiVgE72fdLLR7QPYFFTDTdHG5GbMXcFZHLLmdY91MpqGQVcDjV8yLtnAC",
  "key7": "4pBhQR6HBdMNbPKoCcXcCpAPsREBYU3jsZBkbjd7KnCvN537iSB7Q35u4FXcTtbTcmb6xqMFxGonUt1c6NmkNKsR",
  "key8": "42vzR5riXGStLi1kMDC47Gtfry6Vot7TaBQ3bfnQx7vLK7a6fxmZRjQEJmK5VG9yFfkP7rxR5Hf1qcHjQTJAkYx",
  "key9": "imZ7jTtFDxT2zRme5jnrvVR4FC9e6Zj7NELyVd9KgqTYd1q6AQAKM3JnnD3FBq5FFKd3FgMrKd75i4FKodwkGK9",
  "key10": "4uBGZZowkPU74scJTaQSMjfpx2KwjQhaZ7YSCm2hwi3iqmuBXYin3P1TRPCPWoZgkWqrsVV2iRodiZUvpZEBLZ4W",
  "key11": "MmWH44LoXAeeiAAy6zgsohbSiavEgvESAe9hjHU7EdfZkmkK5nYAi3ijBkLLohH8DBcWncmCxnah2yGVDWZVWF4",
  "key12": "3adELaAh7QSjSaH9JnMJnNwYkksjJaUVy1YgDjQjxjAA5CEYxeHKw1A9y4eCeu7zG8bu4cn3qqQQLKXRo5yVpCov",
  "key13": "2Kok1EQuw9eW3AcZjNgXke2CnPpW2eVtRqn4gDhoGaMM8vx3uGnyGoc3yBE78W35cFSZSynvVho8pG7BRbTGxETJ",
  "key14": "37Cu3M1BxToBfdH3jJdUwkvRktRW61izhz4e2M8R6PumV1D9dj1ffLLvxme3w7XsnVDRANNdQynF7Pe6Bokt8gwE",
  "key15": "5D9u3Sw5895NFN8BjxHcmW2T2oqu7HTLS1sYn5QWfWU2xXUZbBmcg26BLL3emudSVo1anxqdC9Q45jUn7gskPmnj",
  "key16": "49qyHKUE6y5qM8J3XyAyzDjQzFbRn14NGXiERiygsWjXFmcV7qmt2nwj142XqyWFMQPGsGqPxDf7Pbntarbu35De",
  "key17": "3FQ7b2oZ1GJ382YXjhctgxgDtR2JUQ5RbrgNsCS5jXRS4jjGb218YpoeSmBfFo4wjLfwZ8Q3UCTLoukabLTsKvJG",
  "key18": "2Lccy8wSqE9smPYVA925be2JA5C1keEpRax8VXw8tZpDDkWz3d7iLQVuRoGgpQ4GizSwCxqXZqA4jAYCj37SCEae",
  "key19": "5wdTiW2spJci3eB5gftjDRMsy8hyRYLQcLHnS81xYLDSpUmPk84w7PnhyzjuY8hG41yA6vevWBTjaxeqZBs4ZNFN",
  "key20": "2fPhPRG3sCPoKQhDfU1qA333YGQjanwvKp38gMB5rjvP855wzuaeJs8Mxw8UxJSh7YtMcCFMFGdJajkYkvd17WFb",
  "key21": "3bZRWVQtzBXHNYm91pCfwixiJUKrABJ3VvbMvqsFKPAGNx94uqFLDAxUptSLRPV6FaJYcEjqTu8aidSMCMQBAiD3",
  "key22": "Vr8NK2WCJQ44JJgXbMBYA7UUBjs4wQbxvExxJE6JsGL12KcsHvuizfezZBPaK4L2CgW14V4c7bXQtdn7bwxrv6F",
  "key23": "328s2bXu8ZY7mYt3KnfKbjpc2xKVZmwxbE85AeTSKt1g3Ai5h2u4CUQWsAmgsKiJjaMsXXKYApBuqh5EByHpUhrq",
  "key24": "3a4wLyqefRZ9Jp3AfkjWgXQtSXBAER1TPoRuRh5UAMeLi1Pqw3H87M5N3ur9seQF3rPwG9AokugB6LX4ad2EdFKA",
  "key25": "31839txbQ3Dtza3oHUFsW6PqN3MuJ9rqq1EV8AXizCiSZFSmjqUwBBzfUTgGvdzQN33RXJ45noF3tLHLBihLHeek",
  "key26": "5EMszXZ85FznVPgU6828JyhZxtAF99WtMVmRpWrE4ZYXs4Cs3tCdvLgUVFuak9UzZLbFuXzNkRfqtpAo9PuJiP8U",
  "key27": "2xzUVHZ15LJKZTcLQtV1awqmdPFSgg6iVFdE1ypeAWGMNKuqLu2e9c8dX9dd6CoGhFqwHccCAyqmjQJTmSoq4mCG",
  "key28": "3Gsh1GXbQsNSyw1ycKTVxW9QkhwRMWoFE7yoEQwaTfVxamHkApEyXNLHFeNWKLEQK1cfScjp3Lpi8s9BV7yphPL2",
  "key29": "5hh33yu44GwxpUhCDgEjq1ys1prBTokm8dXYFwQ2vxSKFrhqzCpjyJ37xxyES9EEYu2nTexGm4fv3WMAoxRBpvys",
  "key30": "58QwtxdZR7qJtAB6xHBrLGZZghwLDJeJ64fSQzxmTKUuSbEMJQvVUprtnetux8r9sHZBRYBzsZkWCRuTvDjgRKze",
  "key31": "4XmkhigVGENMttDZ2YJawFwa3cra7vE4bGRvJz18XHwskZCEXzTgtvzwnwCYxJUnSgKk3eUqtPqDPEHKN6299uDe",
  "key32": "27qNG1MPzPmhRjCEZfu4bNoTW6criu7KiuYtzCzRcxeuTre3FdAZKQob2c4UEvRHx3Dpk7oWgQAavWQBtJ1aSfu4",
  "key33": "4KbQRduMu6cggTMCqLUBAo4Y85yZjkEemiKwETHNw35U6Lz2LpdTQbmeNPpk2o9FyHiopkrJDMVzMGX3z1nv1ozE",
  "key34": "48MfnpkD7zZvxtahKniHuUZC28HpYvnE9yazGk4wfw9uJ4tfMgcrNKEdW8EoJx82EAswBsRgFnDiZykS9Y5fzpuC",
  "key35": "2NQ2vDLkeed7ud5KGkMGSWaeydx17gSxhnj1RZfey9REyryKCPZjqvewMr8YaDxoo7JQkivtZFffrSeVjSdNqn15"
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
