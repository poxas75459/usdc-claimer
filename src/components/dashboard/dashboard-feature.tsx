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
    "4Zhb5h9QhiRFNQmqBoPMaEnKX7z1JW1i3cR2zF1wYEr5bnPwyReLAKz9GyJFExfekdy5s4yy1wWQhxRDfWocippS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o3dt8cxKehVF2zGLzDBJYsPkoSQ5m732RHhb8LS9JV2pwfPQa4MSz768KUwWymkkevgVwNEqbUNPgkwB7cmbKfk",
  "key1": "5FnpvyYsLVQYo32g8H1L5AUrAzDXLB6wsUNNRugr8816F3dyDw2EngKPU1aqvRtdKZBaLKGoLd1xq9tnr5M9irto",
  "key2": "2zBrBHhTrbftjjRjA33j2dcAdoTMHwJU4VL64CxE8FapaYp2MqdpFmTy9S4ojkBeWFEmYx81VwxmXFwdUkAjb8Zg",
  "key3": "5cRYNXXv3A5LyJxeLN67hMYtN9xjDakNACkdWasXPxt1vsP5eaga6UF2WqvS3vunjZD4WAB12E4XZ7uJa37A7rtS",
  "key4": "2hfuPR8jPkJEsznvGdoXtj8NJn8xDXugaYCv6JgbuhP6UbUKV3dMshS9pzYRn8FG7Sf4RoqXNiRUY427kFHtWcuP",
  "key5": "5Y8bAGGREF18KgFE7Bywj8AunmdNS2vbZq6RbhXmvmUyzs2sRT1rk4Mu4AsmBwMzuE9AkNGviNCXHjs6ygoTT4hg",
  "key6": "5M1jMYSdpfxGkciV6M2m9NUzu9dgQ9Y2yZ3JtDWTmyb4AHAAXJhD5uz2aRmsJrhqfnG7A6t7vVHv35rCCbkFhsAa",
  "key7": "21F3tgRmm5t4rPXBkLWAPF5vHxEFE4GETR8vcA8Q4JtsSC8HJLJAAQYTeySC4S1qV8QD6MP23WU45NJnhak9dggL",
  "key8": "5s5gJ6E72HpZcmXDfYS5xHPA1r7ejCn3LdqnoQyqy5WFX1u1wcRPgFgTKawQdqDwb5DarD8gBX7zvWC6iTJ1tJs3",
  "key9": "66J3G9CTwdeni1uwq5TKiDxKPq4fjjNnp3KLSbTrf7SVMHLn2qe1CzLqBe6r2XtuPqnzEGxjwLmq4uQJU1ZHVy6L",
  "key10": "3DcqcPC31hrdC1oHzwMmrnisESoAYTVg2cg2CxACsY67s17jVbgDcJV3KhWaFFuBFmNJXxnEwvUiPT7eFkdohwnb",
  "key11": "3bwrDzaS63wkuxgaUA76VovX7hKsPbCg9MzPnXYt9DCrYsk6gJEPocJoniFgYQizJv63HMJQgj6uea786mT3wT8T",
  "key12": "5kbduSZUxULrztvghW6X8MahHRB71ii8jY5rWKUybGYH2yyXdanH3VicRMgSBkPEEUCuCkxRRnEZyg5LsoTVtqez",
  "key13": "8pTHqe3i2cgxGmduWnsUnkV25YFngHnQ14JWSDWy8zd24pLUKywkp5i7enr3wRam78VZZgCGnkWk7VzAym3WFqU",
  "key14": "5QtXgwCdqKpXgSjfJeoKLRfGRk5Lpf5ytAthRL8MRpErAAiYCyccuB6xMbsHVU8ft2n2bEnXRJwMtM2zyYVHScpZ",
  "key15": "2xudhjmpQzPWnxsLf8D5qvs72KS6Pm84Uu3HdwsSSKJttQshJMsqtUa2ocUqk2tFpRDX1yYnkqttzx5hLJTsLxER",
  "key16": "4etpCJ1NLxq6M9zb8r7ArCSMAoxrYGS29QVWie4mpcQnCUT97jp43BqR787j4zP9F6upYa9Ta59LsYBW4946c6QX",
  "key17": "2R88hVhjG5KFJPMz5PbRMMMpDAdm7QNJnWdYciNbYUdeDx8GiyhDP638cXApKJSDicnqSpB6a9dCfrcPMkmDgfud",
  "key18": "5JBeYYLWZrtk2HMaMwXP8nMk3o7YhKk21Uw5xhbY96oW23MZBvsiK9fgNb8ccFan3i4qvSyBp4Cc4ktqHrd8rS6t",
  "key19": "49r56UFBgnVQUrHb36fcEkscUuwMNybE6f94QYsnSuuMy3sNTk2Woe1pJEA2hTyCtwyCYhgAmodEiUBkkZbH2KxT",
  "key20": "4Sy9bh6aXcsE4m79MpQCeiEDaM6moATgNiPF8XETZweEtqQjp1LiXgkNbjsDZYy1wvzFBC94GwKtB9vMW9DHiw9V",
  "key21": "FxDsu69Vi5geKDeLnYLRRS3teafzjnHyQ5Rkq2FY9m6AisWPYRs5FeR1Z8s4YNUsRrvofkEdaPbn3rvs9G5NrC5",
  "key22": "arrFShUy3fk2J3hNTMfXRdQ2ABxDCZFygMWAXXq2PdDUTZTWs8To8kSwbmBNzAB5cqmW4VhNVb1JAREoYf96wkV",
  "key23": "3JyKbypg68ne1kKED9fe2Qopxwwy7Eutm6zL71wM4vVyrYC8ZhwjvrzCxAcNBP2ymSmnNQCSbcCMveS3HFS4Wh1o",
  "key24": "2Te5RmCrYxsccRL6UQY4WXr2WgqbpmN8yUmTbH7cdJHm9Pjvyoiyb5z2234dYpfJnmxzt3AdX1W8rSpimATLYvcV",
  "key25": "5nBbWd9RfjEdhRfSen4682qWHB4jbvtXr1ayN3RLSPu3UbX1dHUExANLUDbGKKXg3grmN3DCJtG1YPJkZmyk8cuc",
  "key26": "5xSDpjuFH2RBicSQJeiFtApp4hSRPusE35w6hoyEfgaFG3roeYqm9z6NQGiV75AQXZDsvtXviLi9ok49DAvy3yP1",
  "key27": "hioXKp2D9dJrMMtQrV5gF9US9RsEVkbTGBzP6BDJQcUhFHSf1bxx3nNwMwfPQFvRmSBUcupcDrKA94kB5ijaVig",
  "key28": "4ewtsbap61Ud8NSvGWuXdUfeJa47WirPx8y7PXTj9T1hrfKeiL4MYBo6SeMVActrxC5vukhsu5gFjN4Mca4FmjgX",
  "key29": "37FBBjRu8du3iquFwPfLBpxUtD8aUxCaJoj7w6GsoJi9p5z9cD77Nrop7CQVTYjKSs3EC8BXonXNDEv11QvnVW5G",
  "key30": "d6yevHkpeRYH5dhREbW9wmr4TjiD4G4JUwhC4GyWBb4dSzSDdMSMMzpSQowzUY5RFpfAwnDKZUSwQYYaGMDgc6u"
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
