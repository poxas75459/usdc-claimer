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
    "3uTwq5x5CBYTs58c9eXT54WHj1arES14huwrH79jHuWeNDPNwfmP7tkxc8ijonfEBaJ5pKGeECLRFD2F89aGYkD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xzkHmujKZXJVT8DgGiFK9suwoAcMsQsFVYysEeigSzeSStZE2zghqL3boPtoodvHwCry9KwDiLwMrA5hrp5hgGR",
  "key1": "5LpeDsz1sVLmTzaPMiw6QrhC4u3PsoZf1q9xrH6QeTA9CDubmUfphR9BeUfdqafDzaXXfS4DAYgwERrzxRvPP1Cw",
  "key2": "3MHQ7LZxgox27nGAs7VbkpVnbUCAYZneaL1adFdhQ7ffkFMhJ1R5sc5R3nmpMeQbniwfHUzVH7FYiCUb9g6FCve1",
  "key3": "274aSHte4igHSCCVb4XcvtV4sRqiFfgNK4gY6Z3SUrHbHQpWb5V9hog4SEH8ZsfzhEKRZVKqQgZsTRkbwropmx1J",
  "key4": "VkKuJLUrFjBf7BpVWpxYynfYwqh2iWNXozsQa2KC7SNepsqbtRoynZyt1BwbucX1dgXZnx7SvnuVoQdogdwmsyK",
  "key5": "581yKhqDDVgWpYaTGmFxTiwj872ota8NNM1fZQ52HfHHqLxrUqExsuGBdjf7XPte1VKTMJMUxYfVrrZw45svew9w",
  "key6": "45kL5aLm179ZyBaj5ZPZVM4hYznMBsE9bY7EE6hxx91Xy9Da3n7AmDd3UCcQnmuaVtwDvW3zqaxRj7H2eofTsKSV",
  "key7": "244qzTPNwvQm1sehHmzAaGSEjgv1C4E5MQdAp2sHn6D16gY1f9B8T9jNk6p9kJ2femeF3Jju2pvUZ39XvfNB5ziw",
  "key8": "24CQNHFENhZt4ex8CtVueFvhhTH3a9QAozJ3Yw8GMkoU566Aissk1csn8vmLVSQtBKmuWH7X2LKhW5UaAc9gEZo5",
  "key9": "2SD7itsDTcZZg6RCQVuuV3d56b7SrNwMFDQZKmRrEw8iu3tFixiQJdbE9oH79Fb1ZhfGEACepN6wrgfM5MNj6pyQ",
  "key10": "5Hps6NUXuYdrMPt89UHg3pLYBWdECMzkQYsEkdkEDbDrFebkVsnh8e2B68rb2KLKRso5C7xEts5tRqDe87UuN7J5",
  "key11": "57KBk3ACtPje6ka8AW53EVSjw4TehQce8s3VBGNwz9R2oj7Ba6Q5dCTjxSLLP1fqW7nfJTQTMiTfkMak32HUUUBC",
  "key12": "4afVMEumD5eyY6HpNx87caoNVTaLSLvoCT8Qg8vEWoqPcXX3jKtGaxZKpk9C2MS4VaKJ2yuTbkjSAfR2Jrvzro9F",
  "key13": "4sUErXq5WtttfGJXSvmHtz5A6iddgKhjgk2stRHaF6UdUqyc9bsD18Ky8tCvhf27LmzbwKNowwCN6TdfNbc7Jhy1",
  "key14": "5Z61VjkR1ENWMuGjVvr1ev1qCGuxme4WbmBZDLxsPkNH7EEPS8QJiYVw9PD2G16QDFkBda4bz5DaGCBZXrUcrZWN",
  "key15": "5q3m8McrkuJktwC7twQ8wt3dedEEoFs4xR5TtoRRHEEy7rtEgzHemyiWYpfrc11pjstWwN1EBiWy43JxAFXuExMq",
  "key16": "254cyEHoadDG4EquPgRrfGMAeTCbakVzTyH359Ueo3pLeNWpQKbL5j5hhSL2jfD8v7PfFB4SnvHFDbo2X87F5WJV",
  "key17": "5aAmeCcRs6mfPtjyxjpMgSkDhFsmSeoDWpfZAT62SF1Y1yYcsBgsWzdic9USsJByKsHmnh8D6KbcwNBj6JGA4zit",
  "key18": "2ovnwCnfpQVqMRmjZF1P32aPCM3KU3Z7FNtk8iY8FHiqMnXYxhDBqryKsH9dNSeeLvZ5Aurg6mwKwLrHVTmL2K9y",
  "key19": "26kHRQ7fF6N6TnaTuVLaDSGC8CLEkhCPKjH8AvMjwgjjjUHYAfqkRUgfn3UtvnWUcWBuxj9o35GdH9pyYx9eGPGs",
  "key20": "o6LuBkebxXodHwpM8QTi4Kr1ciDaZ6cgfkmaM3X9j8UnGz6LXkyq4iWYQDL1vemu24iUTq7dUbwowHr8j476CVo",
  "key21": "5VZjhZVUw2u1F8pYdKVDG3w557gi2PrmLpiDipMZ1PEdS1Ratp1MX54GBe7EjLrDd5Ht897qf8WZSJiwF6hdYXhu",
  "key22": "41KZxyoF15XFm5ezAAgFRjTmH9q2EpnbqDjoct2wbQ2eBgN2UJ9oUkpTjeChQXgdCYHbVaFYAp16YRenu2GJJsRp",
  "key23": "PeFuZSJGDNW36jkizVS4SibKxDinexRKGKaayWLZKi3t7ncWN3iN54gof5SfBfpAPEii7mrVfzeUTs87eexnDEg",
  "key24": "21hNVDoCDk5Hhz6cmrPoXxh4wZrF4xDK5ZGPj9oBEHrFT5HcfT6zCkdwj7Z7Uef87SCn9kfmDjiT3dSERnQkUsX4",
  "key25": "5DNpjbK9eVxddu2UqWMeXQjMtiMH8rrpCPEFzHrUZUdL91ukzV6HMCqEuQehqdLvYZ9LgXaM6fMWyj7goY6hgwb7",
  "key26": "dFNbd1SMYfsa7GGwcuu45Lyiw5t3kkoFXrWuPafKvXwvPRka5htpbKaKtT77aJbSx9aSoSZHaUYyqHKnzBrqCsc",
  "key27": "3zKXNcJN2ABdwdHbVp4m8uVKPmt69jYTBwkoBvodojEtSsCpezBneU73YxwtBpaPfFDsTwc1dUXWkVefWYTLmZKV",
  "key28": "5WunLFLHazYwNWem5HWqh25j2Rj2iikAsGRdfbRZddAiNFXypxgCy5LvmqpWtKKKtsJaHez1JULrkLHyr2k88zUg",
  "key29": "24QzXqMkNNyCo7QddVbtM9H4etQVKPzxz3254KNshHV5sZNjxHv17V23HzvcUdRVhrjqQuyoqrbaz27hmenGGBSc",
  "key30": "xWZC1YwxsTRXa77rpfUrNdSZQfYQKgvnJKCc1yu3UHCbkG3d878wqYAc9c6q71BksHZVsWSud6yx4YDqmPpPYY5",
  "key31": "3sDpDf8317HFfeGipKt62JtPf95WKE3oUTtmHrKYkUCMyURtne5x5Vjgzixt5ywHkcTSXrjMYLTibeJTkVcS4Ku3",
  "key32": "3Rsg7hfhoEVraLxUPvubrwUCsc1jRwiuJZYt3hsTbjTYTnbtKYpXJpiQv9QVVS6kCmou3DcjvwkrwDWXQdaoh8vf",
  "key33": "619iTinznMX6JnzDz5VpmCb3S45ULCEiLkC9vEVtCSNEBDTCmwNAULgoqfTruXmHiJhEdWoWMuQWjoSuAQ9sfgbb",
  "key34": "3DkxncgWs8tr7tVXGSpxwnwy1aKgvFKeQc6FMeBpuPPea2FRdk5SvYX1kUGdck9znCQLNkbAVZv7zQnHzYP8ckCh",
  "key35": "63NGKqHtD4xt6MUcMRtbZLDGQJJhdqTj2sEmfmDPf7Fzt2JcuqCXpiJMGHnpEFoK2neDZVAFZ3DC5j9TnmotWU3C",
  "key36": "31FviqPqSF5gre8oQKwgT7Nhv86JjenSzDscb4zSLmgiS7CcpBU2776qwyRBthQYkypsoLfFcVeoN9CR3Qom3EWh",
  "key37": "2sy9VHZDkbBZqSaUmb4uvVXsgu8epAH8r9JJbh9pAus81KoZZ6toP4ufeS2ZNAZw5GscJrHR7QotuhsAWWDEwBvC",
  "key38": "5GuGz2v4GbXaqbNf5uQNLVTSjwsWowne28nT1VKteptKShxyjZND6ALyTY62tjViK44Pc5LsEUGMaUbFswWuQcLa",
  "key39": "3Zosr4s98a4dz8EU9o6SJo9o5MgGhCT7gSq3Fz6hiD65WogSKc6Um6fjPx9YvhvYHpH1CB6nWm9S1i7kotLUoPMV"
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
