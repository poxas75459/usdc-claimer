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
    "2eYXqbVyjwM7H1xG1dD5oMTYbehgVNQADWdgfJMqq2DLrat9mrMyZ71bPSLru8U6x2jcVT4sMmq5tbtis1fUUATM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kpVPj7qQdpiQ5UUtMNT9SesQNrsa3mCG5Zx8juuW6L9WazaqdEZkyCqQpFUuPqdXuQTMob4ZkYexn1Goa64PKx2",
  "key1": "xe2ZpFdYgz31cY2XQrHNP8rCqMYW2cPZc9YSeftez9o6JaC3d2sghaFVzFbGUrhnZb4rdfXkiu73iQhUGAxs16J",
  "key2": "2DKK7PtxFwFRPDP3McSk4HMx18Xx98KRYGibKsMuyj38UxMMo5BQT7xUyCNR9WG2FJ5uS6LrKcD126MsRk8gHUPW",
  "key3": "2D9Tih4sWotDnXUx7L9NxwBBa1pUPvvQR1zud6PatREjfbdhtyFuSquKWJeGVWfrUGwSjWmx2LB9uurJ7TMiDsTX",
  "key4": "a9mMid2bM96G82VPsyXT6UokTETYyY9CgFK4eD9A8PWJkPat3bqRmy3Y6BreDhqS682bfWjGu8mqPgdyR2rQxNV",
  "key5": "3f3TatNdLTA6ppVj7YBNMCkwbJQq96i95M7i56HFx473duGLhHCZnXHAkB1wS85u5gEtZNcAQo1CPcotwW3JGzLi",
  "key6": "3ogZtWzZPcTYrb1o2C4DUmvBQL7NgS5kawhVKVxKF1FJGbEUitLbj5X9w3hksbmoqifHkRptxPE9uCMDxWrboQao",
  "key7": "6492pJAR4zw4QnPKVEug8Qq5A9aQwgoisE9K4D1ENFcyBE5Nb4McvVDWK5t8QGArCn8BZ1XhfQDGDJbca5YHtmQ4",
  "key8": "2fM6mMwVnC3A3C3UKZcotXvXfVffK2zaAAECaBLZVkJKucZ7Xgugj5HiyNwysNLBr1Jb6qK8fEj2KQVumgwKUKDs",
  "key9": "5gGJzJhZxKxphEHv9HDTDG2pNHFftmmrjMiPdcjmeAMFy6okjyWC4nw45jVaZyrPMnWRC18UobXpDhmbunkaRGdX",
  "key10": "4tgzh1TxNgSdKRza1nQjcWqb1ByW5zg5WD7bPSrYTN2Kps66V5gRsWpVuCTukjruXLbqmLeaJBfAe5e5q51zS5ZP",
  "key11": "2qiuah6rD9ezLqkC3u9yi19MPVt77J8GxXpRjUt8LHKj1cTCgLYKehhg585mJwU3bEtBpCtQuYCBsxk7avbkM8c6",
  "key12": "5QfdazPw7zBwy7DA3sa1Y4v2ppy8j5kLfwhJZMgVwTGcuesbR5H11K3arAstcdXiyHhdd3cBHqnDXhe3eGazPSG2",
  "key13": "3nvKHD9YyazaTtGQk1rzJNKyPphBhtV5HFupFMTCzgHjtkVzJ3Arfn3Nns5dgQYspRShNEY8dv51Hyt4CXEsHsMW",
  "key14": "3jNLKMPiRCGJNCMcYbUSdV7KynErP2wwd2AssrTAJX4R96VWCaHmL1dMooHd5WMP7BScJuC6XW5USGvuSqmcEQdX",
  "key15": "3BLoyWeKmHDiAgWmNFMGkuPhwVx7JfrsRUeSn6Ei4nMun3RvHxsfFoWJLrqMR5BR3w7x4EsHcFmzNrNWoboErD9B",
  "key16": "3f7Sww7GneTDc94qsrnvJ93vRfd499B5REUENUBcmxDPrjC9z6FweCAX72d897MB1JYtt2dVmi35hBJxJ81PXgCS",
  "key17": "38fY9UeCsLDoLRvH1gmFbLNHFbqrHihbp4VMxBGNw6j51Pn7qqHx3qGdo6edakww38Jimncwpb5hKBZeFrGJJWbV",
  "key18": "4Rs97x9gqodej7FTtPk8e5sY7XFfxV5jcS7SbSsXuB59twvz9ZAPyRjWfsa5UxoZ6sH4VmUTgX2JbYqDjqncmbeZ",
  "key19": "4oY4kD2fQ7PZTkZjkZe2cjkmWLCvfy21Bd1bzFPkZRfYGv36zgMG4fYyP2nFZCp4ZBMbVG7AcLwm6hxHFWEL3fkG",
  "key20": "5nW4fHXW9KgnLJMJk8DeUeF9bfnzoAZXmT83NwM5D9oMfuYi3ApRGuqUeeKzGSCYqMpSj3FohzFUkfSsuj44jEyU",
  "key21": "4zhnQbCCPF6jYnJusg3rQqW56HoptyogbsCdx7djvZvF8Gwfb4aCL7cd5j9CR6JoJVaucamLGncRRsHyoF8JcTDM",
  "key22": "3FBVQ34wbP5G3aA81pyDhXJqv659LzcLwo5N9gF5Md4YWSLuo29iubRJ996XkVWYEjg87NBZ2LAUjMXTLtkmfya2",
  "key23": "2uWKa352R3Uf92iUsbzuK87k6XWRKLWaiupCkvwbESWucBEsp1Snv4qnisLq9nw9E2puCEiMF87FETNzBDhtA4gU",
  "key24": "2kDhsv2KwW9sbKMUmnQM1F19g6PU3C8o3XkJbmCeWc9S2NjqP6Y7ZxFBXiDMPnfshWDo9JxTnU3v7A6NTD6CGH7P",
  "key25": "2d5joswaJH4iyp4r492gNtHNzgydUyre6pMvR37WvpTT4fFNYUyFY7P3F2Mg1Ksdk5AG5MaNgXsXs9i3XwMt9gFh",
  "key26": "2EsBwg8j3DAYpma37u6qJJWbaFdFEU6kuzXVbHxnLdhBewGJ8HeCVrpCyqzkXQw9i9s9j1NyJ5oybBUkJ5yWkTEZ",
  "key27": "2FgCPUuNo1RJuzJ7FvbuCfqKGYgU5SayDC36b5kQeK2TgETTfAbbU4LhDa94TcMUTSiYNjfAmmTZy6vR2maXAJgJ",
  "key28": "4tGs5ChCotws3pAgkAYt7BcFeU4FSiNpHy4QEAQwSwPZYEZaXAnN1392X846uAuY1iYgwmuRL5gDzNfLr7AM8Jcr",
  "key29": "2NW8bh12Q97GZi8hUjGcDxReXrAjuhkBxfkQH5V6A3CMkci3nK8F8AsszafT24ZpiqN3XiTSBo7L5m76rbTU9Tbv",
  "key30": "4FE6KYGH4uTneWhcECYVttoU59KrQrxd98AzJFRmLFSJ4rGmPwq3pUPjZW6gwL84B4BRv9Gqi6R6MLAMTaAwjonT",
  "key31": "32HJCEfd9pjtgoPbaJ7SDWi785oXownRkL1vsJwW9zcF8BZwHkiFA6FnXTWFFogKKixW7BqAomdQCBiMCr2g84hf",
  "key32": "5equXVx35YLMCof5iV82HMm5scU5s7wbo6zuAJuV1azHyCrJniRncvSbSa7CDWq6KYgA5bGb2mJbCD6gikH23BT",
  "key33": "c2kZfKnLX4atpqBwKfBUkKH8VQ3DpmNuMerdahbgy65cKanvatEbRDwABPwP1A9eXFQWABRSkaJTNxy3zcFr3c2",
  "key34": "3ueYKzRcX5nL48yCyTun99YMkvtEAV7Vvv9ccsBL5csZFqEMXBm6cgK6TQPyBJ3UsJW2k2Jf7aG4BggRHRsR3MEg"
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
