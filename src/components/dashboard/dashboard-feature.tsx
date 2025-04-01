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
    "5gFucVCS7oqfkvpWp8RwDBrFPwK6Rn9hKkiqoCXK8mC9624wmKsGG8iwFnGA3Gq7YyzPN5Gxu7rj9ffgU2EEHzqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42pYDujZCfQydfw8mbEoTuyEj4gXn9mSwKL8ujt1q5VmKGHhXFUZHAyoYTo5kkZhSX5RAesyEccPx3sBnC7zpvj7",
  "key1": "GjKcdj13KWGXs15HeDK4cVmVmEY7f8MgsJwoh2ey9Ezag7R4DwiRiAtohFxyxuLJxSd2tvfRFv1Ud89KTyiEFZQ",
  "key2": "4GFt7zsh6kBTrRUnAefQimzbVzBeXruTGzuEkGH2cVoLnqZuT2ncyL9JoWR9MxiZcJkrKhSkxo2qqjAjkM48Wr8V",
  "key3": "4oNaXstnTVoTPskqXeJ9gcrgQM9pFi7oFRaXjUKWFshKNJygP4QbsPpSGUZB4saHWQMcZBnxtbTff5sGpB3JrTre",
  "key4": "5zvEAeZsgAo8rnFwanuzv2RzFLzsZmSq1MpDkFfyNdSTewkxrUMEWZMbtSdo9Sfaz7qNRSL5nVtdxjw8DKUHzrC",
  "key5": "2jXtQ95LA6nn4tR8RctxLwuT5S6gsutXYLe3mVFMEVqKnsW6XyNJjMsBu3wYz4oF9d6kmPfj6wHVGpVRYdQxUgBt",
  "key6": "5nZ9KDgDJxCyv5S1FsyoQJLXsA8uVQXVUBMRrmnLEp6x3BpF6Z91Y64PuJciBv5bsTDNj3AUbnssri9c7WTW93Es",
  "key7": "2VbKhfbwdsr1RFwPKQgdwy7myrpjiSmiskL128sRWWndiJWGuCAG16dW9qRpWWZNAo7nJD9PixSzKC3yfzDguUet",
  "key8": "2Z79NQipxB97o7v2W1xPKimTj6YrJCXogsYUpxqvRbZmof4avnCQtNER5nreZdqAdUBtoGkBb54yLd12gPztc4Lv",
  "key9": "4Pnw4d6s3DAf2EkVW9BGcX5GLXkHaUoDkZWEok8DLssebgtj97akWRkyg5Pt2RZeu3i1mq2kYxhWDLkxPunXut6x",
  "key10": "3CxS1RBCryDGrwxGs8aQd5H8Q8DSi2vF114EPjUNskkwoHNb2fnMGZ9c7khPXwUpWeo9LAZkgQevR6V31xBmeXSm",
  "key11": "UbZGzt3oi3VY2tkiqke2Qdm9J6ffVkEy3SDT8HG5Y7KkByQf25ua4pVaPbSx73jQya4M7sweDLuM6rhiJatP6QE",
  "key12": "5kUtpBNxCotS1u8V37RJnm9PHB1nnPqHDuEXjtJCSzSefc2VmFiFYukNErxhyiUADqtTsaYDMgshQqb9jwTaZowu",
  "key13": "4kbYcLumK1WRXtHfSVnhM6YmdLp1Xh6kzL4Cr1CHD74mCAtPNTuUwWCM3Z6wiK5QQgHuMWuFnoNSuvhgSx88qfdu",
  "key14": "332ykVJcXVthN3f4xEKbbM4QrEW94Q5zbBfQUGmNbysbSqs8gZht9daFbhZZrPc7qm4YSghBWCGW2rJ79xkGHHmb",
  "key15": "36AqUNgYQjoMkUrPHb3XYx2VetSVkTjqN59wNq5otQYxrRimPTfEjjfAR8rLS9zH59hR4CJq87yZE9vtu3PgMaFJ",
  "key16": "3sHzD4MXJYNXeLRwnHHCFGeaUdR29zKQ9vLYQqrRpo5TWdJnZ9hYFchNj46NoGrgAmYqQSQ6BZ9UGHuxLujLGBqL",
  "key17": "45dujksB9k1uzTUvhaUsUPe71gY5w2vSXz8XcnFZrr7xvXQC3TnNsChHW1nVzF8AwY1fn6vDKKpuwvBfKvr6gjMw",
  "key18": "nkq51kuJmZRgrsMgMoHYmQjUUcJKnNhfmoknXvymWVXw9zc3fPVaVTRoE84CwLU1JeM9xRG3cvUgJi1H6m4gdGp",
  "key19": "2SBW5KmtSZisT6ZFaxKK3SFXvA8UGbies6UpNUPZumnmJLHKV7Hb31wVYhgEpz9Eyuq7ZaCY37MpXQb8bhm6dawu",
  "key20": "mZaDKKPtMFrxJfAT3xNdrywYosuNbcf8og7afyYQsLDrnGRN5BwA8gnXj3jSzs82xLEM1WVHafMJND4fHgVaW3j",
  "key21": "5VHKCwvc3aeZ5RwkmBiyUaMSS2N8UcRxpoHnG7NNmQpMapxzFaCxEZ7euc7b99KVJ7et1TbJ9TvTbh7juvg56ohr",
  "key22": "36sgApWqn8X97uSwno3zDaf3yxQaYaVQ2vKGsuXJHq8GFSAkUjtTW9eASNYSXMdUd56AL232qwgLsCSJoWnN6PTa",
  "key23": "7bSqoA3PtbDsQy43a28DEuRYj5McjJ4ijUr554k7xoBmjiQsGux9kDt86NYpoTdyVw8ZTENweR4aAFrenXZndJC",
  "key24": "C2JTkYxHYiQi24c8uSnP3JHqDHQkcGRmsFYxpAXeoQgYzSWTsqytxFTUpkaYsW1ZDTQPykbW6LwAoEJB9cBhCWB",
  "key25": "4ZwAXkyBjYTas81tG59xwYGHPbJjVVSNVxuQezRxmgkR6ig6556MquWDGYqiLLmRQUWpQoFR9Jx4wrH5yytuWdMX",
  "key26": "6Mk5QgcPFpV7WWpw4tvn5NAAuUQGPSVSKc5k4AQPC4rGbb9zsTaa2muejwN6CA4am53vHL9uB1tLQa14p2ZBegX",
  "key27": "3ut1GaAks72fzjKV6MyovS1wbGzrSpFFpqa3yr2aWwoip1vfvH3zgnXwfRzWBzAm2UtSvLMLSSbYJonKrqG6PQjy"
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
