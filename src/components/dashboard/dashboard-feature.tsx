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
    "4iTnDWFR2mosDKoGB4hyzfwxHw7VoxhkdYysorBzNexV8xC48NRENWC2j89EVYUuVPYHnn57DeJjGUYLM64DWLQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hME44nLAA65nGnVeZuSXgfEdQhfEXTkw6tWxqXBTXQxPuBcmRNBVdFsq6nR2jFGeVrop58GPYCgDv9KhYyQ476G",
  "key1": "37xE9Udyxrh9gDQgYHP2ST9dfYqRkAsZ6ndNTp2rL1x3Jb1DWJC5xvmZuXNCp3v47nzRTY9L3a5au7kiHgroA8SN",
  "key2": "5Vn5PmFoYe5QTLcxdLnEVHkSXtLL3aZL1tnoUJbLoQLwcqQoAZGSJhyJtitja1anivHuNfZ66NQKDPvZzjzCSGaz",
  "key3": "5ByB322QUgu3xHwusuFYGtQXgMKLD2UjDCPY2jRTYMQnTDD3nJbvvcFyBhJwfnKj7f8sq6WzpcQssssonZoDoDqs",
  "key4": "CsfRYsUJ6AWAjA8YFwAALqQS68PDneXEpRJQmDCM67T61TDLeZUe61HJVrFXQLBQcZbT1J9qsFdctoMU4dRRh8r",
  "key5": "5LPhFqXNQg2HnyJd6eFELbv5zhLvTzKQFkPVr5DALQFomK3ZwL7aTw58WkTYmcZPZ6jf88JpLkAtbTB2tB9ut2WV",
  "key6": "5LYyXHXBWpVV5TPov4WkwhMT1RaLuoBVnWb9gfpazakxqYnsA6av2cuncmMk2dVKJcjYimoYcXfodSTvE5BBmWww",
  "key7": "3dvNLpTmpFs6Dc2imewMYPi7tQcgoGPBLUdcVRuhsiPyjZSCH8bPuxQG7VSGYd9gzYsm862VHx5qnkLjy15xhHeT",
  "key8": "4oumA7Gbh3WgyP57wUie81WJEwaat51gtC4DfWr6ZA9o9q9oxTfRPhqJD4cmEy3XK4asNybpx1KJUt7SgEgZN7Hk",
  "key9": "2jgsq3WcpML5t6HTLLapU7eCFmEquPaV2C358wK8VUhDxmzPxozsb5Nwkb1iyFxHbu6YHUebzSqJMTJTvUxhyeeF",
  "key10": "5BKUbKo83ALeugg1ASKhdb8FBkF5C1E5ariqb6FnqVKsf7dn9DfjRvBFPzhwbr2BiBP8mU7WeZQYNHgATM5kP6Nd",
  "key11": "21opqeSZqQkiUDJoeQEUAApPKeXWxiaPW8hrhmyKoF4bwc8j6CpWz4XnGSncGHzPpgpmyAxyfxh6T9gTkmJ8NrDv",
  "key12": "3d5EgiU87fh6qb66nQSVDnZmBo3dj49rhrw2R837z9wagreM9pgexS2f8pBbqkn4yqStSryBGSRXQLqyPcPWBS1",
  "key13": "2Gj8M4ZxZrMXjmbyQchTHkfSBXZXy5HnpC7VJmFJ7nMWj4LaKsKxopJrSf1qiMR5BPp2CYdUAiis6HzZZ4yMVcEa",
  "key14": "2JtYHsM3cr3pBNNaMcs3yrQPfdJHbGQ5Sf1ygVUumqxBgdqiDs72SUXabp6CpPpSpmEf6ZRi9f5KPGhbFZFoXiEQ",
  "key15": "5gscLJYrfVB426XHMZx1AXpi21mocJdntovquY9VVxwsnbma5AjvHrCDmZNw9hoaT2f3n2s3hNxoab3yMiPMu5Yb",
  "key16": "4pV8Tuuu1CaRWWsvXjDJV23h36eqsJgE6Us9WNA8zb92g2APcPShGHq8J3S1JxBjE5JwgRGAahy9hTyir5Sr8NhG",
  "key17": "53W18gEWvftQJF6SveeJJmRtn66211DuET2VuEEgtPigZ9a2DAnoRE4VnX9rWM75ZpJ5WNjoj7uau7bC41Q9jdAN",
  "key18": "ScvB9cxMmvRdG5jzyXqxhXz8UQLCiomb2PCvW2d7ptttTUjNw1w7xiy5FT77KzurEAMz9HFXiU3P1kpSgshL7H4",
  "key19": "SPbG2ZLoizmYNfSdnL2wAVBDECT4Pj4BxaDUFFizRpd7ameYhQ4Q44t7UsReo2aFfPUqJHR7SDjUGgRH1ZJjgMx",
  "key20": "461CE1Lw2ZBBhYbCnt8qfV2qk9mRzemgN8kUjJ2x1s65oh7U37R2WYxvYkNZjSw7k5K7R8DZGEaxPR5vNodxYmJq",
  "key21": "4zWSqgpuLjrEqt1EY3p3F87SQgKEzvoCr1ZZzGXfH64jZ6zndbzpzXmoVfUdi6DZprz2ujufPdwz83pz4NS3Jzbc",
  "key22": "5qn6w23619e6c6VR6azqA1LfegU8VYhn8wx8y1UVdUESghf3Dt3qFgh5jc8X3rPhnMkd2MEBB4wwBFgPvBHJiD9h",
  "key23": "1iFAcFA6qr3w2aaQbqhGJAEPm16i8yK6EFBSGf3GJ5Etr1toqaQXbVmiciUqZrqjP4G6vVsAD5oh3qWnwt3UbU2",
  "key24": "5e9huCnJuwbtLpAcU7WmEBBy76ALBNjMXTUk2qL82zLxg2GFEFgvGnUcNepJQPFLXDDzndbtDGFvP5KhTq7z2bTT",
  "key25": "L8Z6L9iaYPQvAD8DcRNZZVbfYJ2vQeCdvg6rMybeRrgjRgESmQRoCgAYsEaYQPy3JkjQQUMujAumj9Npm7LcYmp",
  "key26": "22Krmx8X87yLQan94wBk26q3tN5QaZCGFyW3YZ53WkM69zYwVHvbuFVT9vYorSYCYWyRYf3Z61SPPafvDY4PVpDp",
  "key27": "4af4HTmmEQPECFgMj976vZb1ATSP7LVWFuwmdMvmyjd5MJ1gFUoexXjtP1HCubgsM7ertDqkPtzz9auwsdq4THr5",
  "key28": "5H7Yh8hpVoGYCjthzboRmS5k4xgSh8Becxu1pY1zZPPgTtrSiwE54CsHoCsY1p6VN1FE4uX8BVGpFtbpPWG56EKh",
  "key29": "5tmp24tWeVhPpgygXk1UG8pyVQb2xrpZTR1ELVbk1WsjWpAu8oc5AANqXgSP6nVtZPVfhtncPiD7S4A9W3b8eF4i",
  "key30": "4viWco3vu5aXXv2KJTReKDDjCeEUqm7q99Cuh16rpDSfpXppybRRNyq4FvvUioV44qFdUke4QRY4FBAVuK14zbCD",
  "key31": "hSo5TxQrdpGmpBJN1mwqHbCSuax43x7J4AQ5mA13c7zeokRMejo37A6PsRCcBgYhKvZM4iwKj6L8NRsNtosF4hL",
  "key32": "LjqxzsHwrYbd8estL1em9PFtCpW5ZdjaL7nV1J46nd3pkrvdwN9LmZAN5gqEi32D8MiWPNxRAmouykWcCkRDemN",
  "key33": "Q34SamL8rfkPhfHToX1v1zxmSS1SWK2b4YzLhL5yaedAvNKuzTkUVKYudKGy8AS2nP66F6bwASXurCbwPePsxcS",
  "key34": "61eai7kCYrb5Cmm18mEKCLk3N534A2NWfc5Ei3s8Q97boLshji5VrEW8GfgZYWcuSyNSrXCf2brbGJGkXz4Qh1e2",
  "key35": "2z1b56wkkJmkA2T4Jek29CPvErBRJiCke9QqswcxFG4nMJrYxurMzjTdjwbwaYDhfPjYEPpkrPi1AZ1t4jsXwZbT",
  "key36": "5MzDQieUxuou9BZCwxkXy7ZdEK4pZN2uH9VMwKtC5p45izTAqT7x9QVfC2tzzbTJSJ7YJ45uSD7j3T7oyYfV3qo5",
  "key37": "33E2Vc3ww4SqpgpwpdYAwkPXJrbiFdsg8msenSGLKyNGgwoUv54yjfqNho4j2R1MAVyEKc5wmmTHsUdQ4P4HnHBL",
  "key38": "3nJu4jiZJSWf6ZDZR5j8CdRSEPMNwRLZPqFrXhR6UTHV8LApXoeoTKMWNSjspCd3dwNTwnKH2cSEhTkb1HCHWeX1",
  "key39": "2NA2jLUBXu7kNqETDr5JFPKjsApywtTSs6Q7zWGbJN5sx4hxrirBEWdMRqHfVRteVn3AAZqFKqdD9fN1pvh3bxEA",
  "key40": "DWdyyPBD9MkHjxJhPPDbT5da8YhcUGVrAREjCWPhceAvPc4JefWBMXtK5bYDCn1PCeJpWtzJTZTDXCYdrKRhCv6",
  "key41": "3RYDPyzdrEi8XaZadExpAHqE9uNDQawwJuJd4jQHSkFxF6sgwmX4nhHcc5yScRN9tKXmNoV1CvxTQwFtntUe2nSy",
  "key42": "2RziKgQ4bws7JK6tktwNoB8TcS9gcJQTyt3aZSbksvgUGHpbHFdB9qYbcPw28197ERuAV8Tja11xHcYPnB93cKL6",
  "key43": "3ooWtPhniLjYGJmLTzhHiGfGnCATF6pypxZospEgS5ErmLqFgbs5AVP7ENvC8CsaW1CNmuyQT4y3mHACC68sAKt1",
  "key44": "LTsFwfhRJpL8C8tC3GPHypV7hzeiu7z882CaKRZ74j85PD22YL4TeztfsVWNg3K2UQg2DkTpeod6jZoZF1vix7s",
  "key45": "4uqTtrxTXYCQDDUBsKSCTFRvedjDCATaJ53TxXET78u3BNh1WEFtVi875P1hd7N5LSh3WpKwLJskRzgEtpAd2JpA",
  "key46": "5Qc1dMdwjtnjd2fzjjbkHru8aF5iEWufrJ47w51PbZvbPMpZx79qJ8WXjEHwz7wWBxWt7g3VFrMNKD8Z21s8MpmV",
  "key47": "5NjEBVPe7Y3DeZAFXEKAhRzPedsry3BC4fhRc62wbzKw7BwR2VfTmAz4dCd8g6fnra9xufmL1dSAaBxuWfnph6DH",
  "key48": "3y5KMRBVArvPTUntmbq7SUsnKpCQdSRJjXnXYLUcy7SoQQk7NxDUBq1ZLTo13QVz785fwCCc5FwAADrYfx3PkDQd",
  "key49": "4u3fbrC5Z6yTqZm8ok3NtqmarNFY5hL68Acg6Qa7iKjbKqepD7ssMvSPL7tKMnk4MubtWLvoVHN4rGyf91QWzLqb"
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
