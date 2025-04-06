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
    "25S7cUTVNrimSjnFJiuhiwFJDQqeNgTecFx9UvWKFjusHagS3bDqgr3ofoNwTD4u8hjdCnYQv8k1dx5PPgQhvSiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23dZ8YsHauQZnsgM8A3VAHbvw616KDpm9aQVPiNnUapgao7iG4ujPatkcXwLshxsC4xHUpVqbRrNLhXPU3FEbVjJ",
  "key1": "3q3VucZfRigHS7baZnNpf7nPN5P9AiRRuZwgGSMRggcp4f9qiuTUHor3oWDa8kgNakBu2DeGUXbmHFXpaT7CTusq",
  "key2": "2pvxmU4Ku7o9DbWCwki8iQQhymakH6DXi96XDfjoBNWE4cASaJNJBEAv8gadv6UdRS9LtsrwSwg1FyQLZrUvTd4Q",
  "key3": "27JDNr4ZiVKhVhtfxZ4Mtmibg4kZRBMJh6d4sAcgyQhHU1HtURbhg1T9z8F9BtEZECVk6hxJ3kNceBrZ48ZXitMy",
  "key4": "56E2e3EiC7JqT5YkstGoBKV7zoAmLuJyvsyMPVRKmdrMrKpxFJo9LAaqiDU2Nr4ArikcRt4DDWHU2eZUU82hqzqS",
  "key5": "9bBoeao7LUKxJNzcb87WU2PPMKDQWsFXeSnb6Kws7hRHvPGCqBYkf5EXbHDaFEG7K8Sy1pKnn7ssQFmsSFDxzwL",
  "key6": "2ebBAj4kDBv84xpc2rELDKrvgjHiB3yWzH4rAG9WDrATZobiRNWjwaY3fTPj4RGzNKzMwN5T1TMUAwMRJYo9f6tA",
  "key7": "5A9pS9ZrA8LYn6kEvKXiMS9BZqEFzpZtmtPWMUP5qKvDRaBuB9P3F39at5Dp8LD9rSy2w3JEpxpr9nv774qD2dKf",
  "key8": "2ZLUpDrqoXwhRKbJn7AzWK4ffQ3pB2cnx29tUxg1p66QjcHZSJV7p2jdWQPPsF9ZkhQbieL99zVzPGZmQr8WeAYm",
  "key9": "4qUZUqzbk4hqxvQzyWiLWXbvm6cr4rxQJzfP4qtBBApz1TdPvPZSRFeZWLqvnLMr2HT1JNwwdKRfjFLa4noe76rG",
  "key10": "5EdyVHiXSMrD41SsaFNbFis4GjSrAKW1EzXTLBV2imqoNLZjtY5oJV7KMHU3buRphNerWstBrDpQ7rMss425sJNZ",
  "key11": "5JGqpwmy7itJNHVndjhUkUR14LHNXPK2sR3RUeS5WiueFJhnJbZvcgUpXVhtemDDZrZEaQZqa2PzyAK4cEqo4J4K",
  "key12": "5XEBddN6mTJwuzCJeuD3t4tAuSNMwcEaz7tqQQz1GwNErFKVax3Lrn9QpT2itL2hFDXEMb698TSwkxScTaqvBcNk",
  "key13": "4gyDEXtQpgXLGyZuU9J6uT9ffHhbKTWNgoujZa7Cecfpt8bhNmxcB2VYu3rQGdnkMh5kr9Y7xa7jw5K3t8WE4ngp",
  "key14": "5mcooRKLEYDEAQALZ8w6EdN55ZkQD8LDiuQdp2HvjkgWZBazgw6LgFSqWKR2T8ZW2L5WYLLHE6CaYGBsWqBuLarT",
  "key15": "31ADJkRm9VsFYZ3mJ3a6RmeACkBCfnzFHHALfmFFG3sGwKwzT9FECgwEDgtvzmRpUXPY3ZEHazERiLGWDctbWzWC",
  "key16": "BkYAsUBSZ9QJU8BmbFTVWpNkWk5qCFTho17Htbd3oUqaCXDjnqCro2xuZj2bw7KSV83ykJqoEjLh5eZwUFcP8qF",
  "key17": "4teEabbSvXPBHwLFuvQNd8bUfdhbRFn1mvFMstLL4HD6TBeFend5SWvYuXr8fiGSiXVBWK4bnaDKR2qsweDWji9g",
  "key18": "5EMtvHf8Rr2AxnNTGsMM5EWszwPWrHNmEhysamjYvbbYWihytoaVvfrdERcwzHRRp68EASM75WYAEicQzzh3zoe1",
  "key19": "34LzTnTPcayKysQLN1faR9rbYJuWpRWCz68pJbnmxJH72a49mtnuFdrMy92ChCYQ8aZVG8uLmQKhTFjNsv2mFh3G",
  "key20": "22t421TxmM398mJq3w9sfB8JdHcYgUneB1mCwzj9enC8DssCMFjcPJ7CYi4gpmT2U7vJiyvFdBimJQAVEmyvThki",
  "key21": "3paTymTjTxqEi7g4B4cDMD3ZnoDi2rjVjmeX5xmTo3qRoUNQffXfu2YY15ueen2mVdMxEJd6uzeuiCXTRtBxtHhe",
  "key22": "66dkKpr7dMaysPEk3HThKV85kAtFxgAPqNTRyMAEGafPjgQWp5cmvzpSZencwkQJSKd4q8cGhXG7XifMQkujo6i1",
  "key23": "HfDd4ndPnFEN6QMdQto2hAJBN84sq5hE6B5HmjTHvaYu7YKv1HzfcLp5eV3krupfMGEawM3KJsvp4jAZMhq6V5t",
  "key24": "3xKKusgGEMMuCbjCVAPH1NFFA792QtjgWPpfSqRGmx6upJuUk8Dzr2AtAanwh7tKG2xRaooU1qTmqL5uE6iwyBAu",
  "key25": "5j5FdCRwocfLyr3ZzZ9FmC7DGuZKxFBpP2Csb6QyX9PzDSoHVsQYr9SfLYeGiQfr3ZEbR2aAD9QscHCXVJc7ULdm",
  "key26": "4RX4XCqgo4biMC5qCv1nuvBtDJfWHxLhtS1tDGGNCXhsTEet9JwAphXyhHb5swajwZUNL5K1ouTyVMvBEZPjex6Z",
  "key27": "54YfSB7gpFkTsj2HLEkjmKvzFcAenU5B2zZ2cfjxvH58cnx8LRPGnXbppHEnChu5BoC7hT74UU4s9oxyFq9XHsnz",
  "key28": "4t73irQzm7HpsoHtqUTbHkKGmJJCxrhoQnG76EqVHRtr2ChJeFmEaKYzHCtDDEYhHjRuLVsKfrXL2vY1B6EJ5Ttb",
  "key29": "5cCQXxd2JGuas5nb4og4Vj4ahgBJPTAM6ruPHALqh7h9nCcHqsvCFHePKMMnqVpQSrTvJy7b7RaTfCsGSGszAwAo",
  "key30": "2xo3GxFaHzopHhWrBcUF8UYNP3LfSzv2uZXwhRh1NjAPfdmAc3ua2qgnWVFzYxxywX6XRcZsNAde3iH7uK8aLd7P",
  "key31": "44PDUvvx86hR1CA5eADRrWLjHTJBTBmM4DnkZRQTFa2wgoSGpHU7fycVjio11acyc1A8C45mbNaotiy1Na6oyoxN",
  "key32": "2dqbsXu15ZxSd1Un6m6cnVPfcsxnakscoWv8WjYAEAPgU2cVzvN6gHDUWT8x9pAMQiCCJDPYeUzvJaxW99TmQCmL",
  "key33": "JsBVPQ2gTjM9YtAWtUUVtoxDeuJ9L4Rtrgdip3daQ2A3xxRbmxsM7WjQjYyQHABsbE33ttFj2j3fFU4nFgvC9GV",
  "key34": "3mLvdX73TZuJ6RYfb8c9akWeS43epnPwYPC6b6jkTWhw2rhLfSrPSheEas2H8iEqVoK9CicfoyjjnnY6tXq5Ffi6",
  "key35": "yjZ98dL1HfjqqLcsQprN7vZK1FpXQZEc6QCHRz2iAEGR8oNB31ZeQSM5bxk2ijwfbS6go9NmcrWS3oVJxumpM8m",
  "key36": "2nzz7khkwviZKBR7GTANfecPpADCRd9ArD3TcM5kHhcYvbtKU8TK45TPMbBYK1R9uDWSMDMUVsKDhvKR6xTRBYzD",
  "key37": "5YQtJyv9Q93WVLhe1FS5W1HL8mdpJ9MUerj65Rjj1CG7FBGrMahck6hDZc5jt4vrQmuaMstwhEtzhPFse6GyhCyn",
  "key38": "28LpEzk7CYMKPzXSUGfjBdJX5Nasq8ixeP3J491syMEft1G6PEzqnCukdk1Woe53MyLzczPNwYGARcnLCM1YwBtR",
  "key39": "4pd14HBnHpMWWyenMLeSxMpHwXtBjijakLWb3kvVhFMsQQZX3RMe4gSgeiEpjoPkNvQcCgZBG7ZvhH7Ht8tGG7zH",
  "key40": "5Ej5jQSRSMTnLocWaUxunLBfo44EHsCn7WLqTYwRGs66p6v7oqJzmQ5eRFdo5va1ju9Y5mBkkxQadP1Az1HMB1Bb",
  "key41": "32T4Hk33HyLcPsKA9Rvm9hdmSvPnuddyBkpnGSBwDzvkEGgLE7cFDzNxFu1suw3hBz18NSE9BaBDfjMKAuV4iV5H",
  "key42": "54LVwRj5NX6HUQXDUwbjzmoDX4qG1NqaYtQWk3A6JD6m7LRg2pyjD2pfpQJfhZL8MCYeEvs7S98EpFxVZzenUTx3",
  "key43": "44be5DR4DDpnVnLrxTimHmCupB1LNn33BLDZTrmcYM6WusnoVqCaxUtRe5q5fuJQ2Dvm1YwBRFYShgetvjsq2WVP",
  "key44": "vj7yj8xdCLWCvKbTY8CgLMpsG8Li4zbfXdp83dwXVrRyKcJmYj1tpCtRcP3YLoGqKGuHi2FNv3BeUk81wCAzKSp",
  "key45": "64L6VYFKWFytnZUiVeaAWo3sGhLFhB7RzKieGgVd1vXxoUtDuJPUGS3vq9wyR9JeCTQ1dtP9wHH5tD5kZVFCXCMq",
  "key46": "4hGAjD3hmyDMWkrh72fxAEg7z7gKgdecHPUhRaq1CUZqTKPeRv4vbEs6LeVaz9U9SGFGRDfMd3zG8nHK4GoX8EXS",
  "key47": "2MV4mkP4TA1JNT3nY6HFwFZEmwfYSd76TCKfJ4zqWYjKqc491hZYRfYpjMFfv6rvxZ1BvsBZiR28Bg6yu9MowkGa",
  "key48": "3mswCK5zjhE4n6YiUY8skb1E2eb5kGZBn5tC2guANQvoLCaprS79fSpf28qcFEDNnZhJ4Sgz6hh4DJ67F6LBZER3",
  "key49": "6ZANmr5ZoGfam2gp6zcQyPTJG5FSQDbuYc3F8vxVsdBSwUZ37pienuybPzL7ProEmbBFRaVQG2XvT2mNd3cj1t9"
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
