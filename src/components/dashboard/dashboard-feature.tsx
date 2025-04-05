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
    "K11osP5VFY4q9HtK2qDcUuGSc1ezSBuFArbfRKtnXecykE7sCFtcug7yxod1WYNtuqV1gyDcs8v8VD2XUeds87y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5dX7LemBnyXi8agLKniEU3BJR4ujwSHZBJiuyZn7WmarCCojbAzNkqaU5VRstAUPs8pHHoXN6gKw3X8S7e3vj3",
  "key1": "2ubY56SE8nQEYef6N1TLigHaAj9Hb7KdGjCrzfhRXv5WyDbkEzhZGVz8PgxiNNKZwBvvS3DnDx263wQc5Nm4WXyf",
  "key2": "5VpetpqaZCNLkMs7N8tFP2QXDhgeMZV465b5RbJq36hPBxWxiFjaDjLzE3S35ezoANBgFY1H1DC5RDkvaE8gPHuE",
  "key3": "3xaqL9oCVTUayXZq7LzpfLRM8AW7Gi1EKVXfSm8aFnF7gffcwxmhWJ9mFLh3afM34YzaSA7io6djSZ4TPjL5CWTb",
  "key4": "2yorq8y8ZJrkZSU2WvVUZ3rDMrWHNroBsYM1rF1KJtACN7Sq4rbJdp2GPdxuzsnWthDxiRUFN1Dfz2AggryieATN",
  "key5": "tad8Q5fkHeFzsojscbNAQT17HD4f2uSxA6giuMd4A4e5dv2adkfG2YCqn6ucWQ7nyxd3EA3getxTuNDnLzvADEP",
  "key6": "wCoA1XxLswMgv7ySmpb5JNBksdbS331Pn7jitZsUSmq5uAnTnqFhuzzeaamVHkgG1fysRQS1tE7S7KB2F7Bgjai",
  "key7": "4hMM5Nas2DPCXggXofpzE47E4AtEssmsYXLGrNNE6qqvM4egiRP68SXrEr157W26Uc2MwqHzpPxRfiGsRGt4AyQD",
  "key8": "4x1jT4C1gXYEBzT6u3Ny2BZPJGsQuGGVPm28sRzmH5VCghfs286CYpefBtdE3qsDLkGVksjDoNECDYxcz3G9swLj",
  "key9": "4gBoqJaGxC1ViyQpbaRmefTbT4MpvAXWtFkQFRhLsDfs24SXSkpK6aCwZX52oa2Rcch1r8bE2qVcGVren4eqaQoB",
  "key10": "4tyEGRKwVpwGCG3qqG6hY5qzL2HsEzWWFrJz7PuvGJfqYsRFzRGK3ZwrL2UahNVpZd3SKfMoEgxCRj1Xs7kHYbCe",
  "key11": "5GyzboZt6jWHBKKLcUWEgTEBuAKo1fZzgTqVJ6XNAs62VLFYhH6aJ9hDpBpZczybeWhigLRGc96qMGHFJAM7dcot",
  "key12": "2fxR4eZQKA61DLrG7ZXUGbUVoiPkVwLAVTT6dytDHGSSioS4btzswJ4gbVcVRHJhxmcEbGNTe7R3Kdo665nNov78",
  "key13": "4YN6S5k3zYKgEExTk8qs4STLW7NhND335qxMwyoNnYEskqjFUkULxCvsc81cAErrBThsuLmHowQBQNQchwFerEsf",
  "key14": "EhiaKWbpKQtGNbcwv4Lpa1bopWGgV9aWLZdVV9L1UMSLcH3Q7ZCNGaUmZk9cMpMVPr9CTjkPsYY11ZwtB4a73UF",
  "key15": "JB3QFDdDGvA1op8Q2KKpSR9fABeX2p6v8GuQbHHEXxbxz9foiFmCsyYdy5SM7Zew2rHEHS3qW5k51qjimDDwxSK",
  "key16": "2QcyhnJ1NtuFFNMCoA5We7NDGUAMpTE4TYcD772WCX2vPhFzjbb3tVLoRfBZ9wmQWz1BDQSCKmLnGCkeJ5f4EJPF",
  "key17": "tRW347q8sNeAX4LcBQ7k4LF4wjB43QzonEZ8dso4Cb1h4bs9wFPj1k28esFM5HT7HTqaDYimWZSEb1GwGgBKfbS",
  "key18": "3MFYXEZXTou18KZCqAuPWzdqv312NuxoDRxaBSs4K2d95XRWp1ADTJTZojX8Pdwz4TqDDddhfeVdNPWuqg8wVibA",
  "key19": "3YrvH7NPhVQbpdtzPwnV53L5TZoDw4Wp3iCsNqyJoFFQgvUJz35VmqJP5os3oqpiztZUQiovM5oPbuLXQM7MpL7f",
  "key20": "2C2Vztxn2ZJ3fLmifqsAXDueLcfvJDyfoR3KDbyWoWgnDcow1cUGsctAfD5tYXgAZ9cr92y88mbprFxzX9SkjWLi",
  "key21": "26AsgmyRsQyFLDPA6KyPJEpz3skrLuQcHcjai1AnskmvqidkrAzHijAouNVbaoSLM1PH3yzFhD7iDnWPypAZuoLo",
  "key22": "2Um7LTEYKieb5MpknHx1g5SVBo7c2WB27SCxG3AHjbt3GaievWCP8mdqemjasM2Lt6HMu8vcyKvn7ypk4heVvzJt",
  "key23": "2QpTsH98fHYh6LfMrT9a3vqgYk4m4hrXEukS5E1GrwxnVHLQrzvtgts2RFG2hScvsuHjzhaFbbEiHRnJtXUWSZ58",
  "key24": "2vRkrAHvSQzN4rhqXqAD8KXPiWZUfFEPcs4FzNW2e2yHw6XrCiiMpwuhfnQva2fjv1sfBVUSzhFDtnsNbutggawh",
  "key25": "3qJd86L4i3shWPdiXpsTKkEyN3EfNEDwJdXPTWbREg16y2kUThQ6SSEfux9evmbwEk5yyXJwH7p7Y8akq3YERAra",
  "key26": "5hjUXazuDXW4cyZkJ3QnNjYumd1huccYGWDFGnMZBDLhhKXUsZSTyLqManaxUCyQcYqUinfWifwApPn7CJ3Mgc1",
  "key27": "5dMsnKhKDwRnA4S8k3nAsgfZTYrJi74LwWDtNb8RwKz3kckkzGuFVsAduHAxaKiD4Fxq9CkihXEzfjRtb2rZG9uh",
  "key28": "c8Etpe9cdDRVR3cwp2UGzhcb77KVo3GcCS2D9Xiu1yy3LVecNYCELXqbAsFbJeJtBTvPPFQhHiWK8d9d4ujGshX",
  "key29": "2bV44Qqx1pwmnPqnyaYfX8uyZcgUc5oxWhC2QxJ3iddbAd3oiMDpMTauTpHJcH5eoKXd5dv9BHZqMjhXqCzKK16P",
  "key30": "4tYKv2o9JHW13AsJpskTH5d79Sn2hXbwCV1uVmYmaoYFrQE12zND2N3XqBR7nYjcCX6g2Rw7KPHdiqc8YbatG2G7"
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
