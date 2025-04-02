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
    "461rGoP3XC7GW92S3k5n92aCEk949sj8j36KNo3mmmcoVdVFdUzUXoTanXS4QhN8x4qC56mmAabAFWahe4BC4GB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9pw71sk71G7XJQqbamUWKBQhE7qDKMtCpwpCLKytRHAaN2ioy8wUgARpDh4bJmZ6m3RFj8gn46EM974XLdxzbNA",
  "key1": "whrDxmNyLUpGVCTXg9NQCntBhJoscXNTSvS1ogRqxJm6qCD5TUuFX8JsaiEwM3UmjkvPcNADtd2E6xmgyfUBnQM",
  "key2": "JB4UDZhrQATzytip6PtQtGSHBPRow1r1FUHpfswwtP8nTEWfDj9gXTcq7yfnnGFKDVK4g9swb95ZATJZbCdf5bP",
  "key3": "Hibujm7dKrxrt9Dzxs6TKziKnz31nhUtWLQimFrANi9u9AU6xjmcGDN1aiibQnyuRHTU3BPByZuv9v2f2Lcw9zJ",
  "key4": "LTnJizBFab8ufFqrK3GX1asMqPWhYqe8YtfWRTn2Lpy8rzwtGMb2XLXi1GNGUfz2Jbxk1i8jhC4rfktLGT8EsBK",
  "key5": "2Zzy5HmQnjwGLvh1o8Gwrs9jrsf3R4uU5DDgSNAkZmWnzXEUbArffXEitD4GeK7X52pgMc5vy5qUw6WYMPKNk2dT",
  "key6": "5GAAH3kivNjSHJgmw8JgmiojtQSvw4gLW769WLZbqxMbF1U6v4o1jX5nc942QyafMNQ1u6WsbZE549bqeRkJNxPJ",
  "key7": "3HWbmWxgLyyqowAhxCj37cuQ8kNF8fyMsvedibx67vFjc6t1ebALecKqd5CcQM4T2p86vXdQbFpZHScyfiBWepUK",
  "key8": "4GmLPpbNADqoBrn4h3p24dDu1U38KKJu51U52YJqAp8mxxyqLW2Uxfh6rynpkU7qXVRAZEz968NJt9KfCyK8j4hT",
  "key9": "4HbBkGr2712TWHSuWp3taUTwQvDwJL4w3pXPsdQ3v3VmhxXry1G4jDWYuQtkbrqNHHzoKU8vdpbZo4kutFvfwrhE",
  "key10": "3qdV4KvySN28NEqs859D3t3T2Se2pPTJRphTeBsPbWtTrQgPKwYThHhQnMPHF8vGnmimoo6UaxYfrSVp1sXfaBSH",
  "key11": "52H7v7MXmupiR6rw5P9DQfF8XD9aS1D7iEK7AhzoBFa6LTn5yui19XW8QmEK1uvww6gW68gkZDJBHVcnWWRodnBA",
  "key12": "5oGWWj6Yehc5JyCfapgJRDVM22H3VobLqFeJVVHcboWBMC1M6FyTzJGY99SFZnu3iXSVK7QSJkvgiq3SCr4ZnyyL",
  "key13": "2HY4DTXd4jLdvK5hMxAeR9eC16rzAMyw2wqTm9Bdz2NBKeMgvgiNdWVCgVgUiEnrn7DitTtCuzWNNuzrorWQFve9",
  "key14": "2doQqsgAX7VpJ24cF8vSFL7sV4PqGg8JN2F7csxeMBJRKFTTSc3vNGKrimoZREPG4sSHp4HUqa2gKQfpcgDHmcgX",
  "key15": "55A3rwMnVwooCNxJLV9R8bX2P8xxUs4cWtE1sADE5EE1EqHYvFYxMUUHvUMvGXanC1pACRDzBLFgXUorYNET6YaG",
  "key16": "4rHYnKXPScfQEC79Lyj3EZZAoYLy3xKcNJkJPsnWsPyf8HanWryfZ6X7ZHEvFfgQLFsfX4feRRdf92snJXKQj49J",
  "key17": "YvjMLnu1RFiCnYuXz9bwiinFpWAhwMLfzaQ5HPj86qAhacxJ2DBfGdGQpNLdY8g9mtT7AnTpA9UgJJqUNNANmXk",
  "key18": "3Wojgc6CP2jeFUS8FusgLLx1uF5gwhWQaypLgdFq2HrgkZKob2q7DvbPjm57Z9cF4mN8mZEqoZerXraDS2fQQkyE",
  "key19": "4xCSQzQSSovbW5ooUgMGSQiqFJtETYi6CoyAPmdwAjUFnsnR1gfk6L7SkuxF1puDAGmTGi2nbbt3geaq4reRmTJo",
  "key20": "51QA1bSewmpVFVwxE1yNEvjEs4CB5mZEsRtn2L4hrbJmWcomT98Ccf1cPoWHiCEVUF5cwgYXmvNe3SJLetFdgazF",
  "key21": "5yhL6KEgsZRqDF3Y3KE9DFz17gxR9YaAteKi9g4wsog3W1Zmbaq7besTHkhyGs5HgNKWrrjiW3K9eDtaLiFpHSey",
  "key22": "ZFTviNBndqBryBKgx5ggHwnLvytPYbBsLg5tDXpKXJTkRvv5vzdQGLEUh4vnzfWV9cu4xADMR16mLSgQ6Pr83qG",
  "key23": "3JP3mwmNq4BbPkP48HpkSvznYtdEJGvvPK6rJaQZEjF8ME7mGSEa3c1KAkRbKY5t6UwT7tQSgpG74WD4KKxmMMQB",
  "key24": "pPpaU5Y92CzSzfWwQhA3SG6mkFZPa7JpRYr5wSzvEXMiYdb4USLLonTvpyDtPinpMYdKAYtwAy5654syGJAmVJQ",
  "key25": "5GJBsaCFULxLUkA1pcKiA2gyap1CdAa1Fgb1ELk8HVduYdWxp2n22gDGV8UDneo8P5meRuaLyQhd2VgTvnT6KLQo",
  "key26": "J75hqnSdpBx4Xkf1PicynsFpHMoB2up4517kDnGMfbF2SVBT4p6e2mNLFV25q4KjV96matuQbGaCzEgQpcdjMwD",
  "key27": "3BE1sMS5BjgpeP2BF6CqPXJSQmBRdeZVVB3JgbhrfRXvV9CDRsa8MfQ7pEFu5EMg9y9bBpUZPPggLcF14dGoDaZ",
  "key28": "zg3iwZC2es8vCHMMCC696tBh3wRJu5W7GASURXgak7gyrtuBR92dPtSwCswq5LgD1utizbSo9gysJcZmEEEeYSW",
  "key29": "3LWX3GWpTgyrPEDg6D75FLr9nEY6G41wvDSSB9YNcGSs9aXeRWn4qFUMUXt1wEBv1yijhcr7yaRTUe1z1b4PSk4D",
  "key30": "5Gf7sJjkz8AQHvCKLvpHd237uyZcaEXNmUqT7jSqW3VR6E6rewbzzx2sA8TccYpEkyDgbLT8H1nkL2EVJehj2BhH",
  "key31": "5r4hZfLwaf1aSvvZ5uzu5raVE1kizV9DByaXsY1JqezeycU8XagxPovpFwtk1ng4soA7ewhZ3aXAkPqTHJ5QGnFb",
  "key32": "62hEibePBpTisk6CCscwrunBr9Za8G26ERGiGnXBA7intB3At4HrADG4vgCvPAgA3HmE9VBJEHnzMcEFWVJaFVPQ",
  "key33": "3f38fzECNdoaynf915dKgYV2Az83rggWW35PHNBJfSm6UoBkPUodPG1TuueVgJS8rxoq4tcH6TGuGwxZcsg9Z1hZ",
  "key34": "3wDPs7XDxQcLEMvRBCCTqh8VUSZBX8tX48L8pcuhhBbj3rmA9pDF8afpyFCR5WAFSJYKv6EyegCWExM33DBKJ9B5",
  "key35": "3FQTZpoeV2Bzyq6TitYmM1VJPpDcfQrMAnCFuBBb6KGyUgeXiQM9CLxXmowfZLPwfz1Jgh2E5PAvfgPpdYqDjiNh",
  "key36": "5qByqZ59Nymhmmj5sNRH6A9Y45SFiXJAk16tqw5w4ARAR82XsSgWMuN21MZ1KQ58zYKvtX8BMsQPKosuMwqZcAv6",
  "key37": "344z58t1LiucAsgiW5fLRPs6CqRbckUtST31o5rowSP55rP7WemJaCyVjYMQzajpz9x5rtRxMRHxmpCSnpQprLdF",
  "key38": "4aUF77ngSKMppDQU9HtGpY6HrVfJJzMJ4Ya1f5FMf5Rhir5k7EyyFTyGc5VwcmiraedW9hCYVjYKZHTzHos247V6",
  "key39": "5vAMPCxpRdzTWKpauaTjF4yJLs4vT8LsKND35XjtunrWk5bHBMBUQ9EUZY3vv8TZYR2kbmQNPtAtzakrMTrHJt3o",
  "key40": "2WnSmqtexuv6W3KtheS4nB7be9ir3dvfiLVvJhTtZTKoZ1d3Ay3Ag49YiRXXJgKnvnGmXtRgCav6dw8y8sDysGM5",
  "key41": "2xCjPWQp7a5fvPuDXWeGAJKTNhn8gT51msjbvC8NtJFx9iK8mAV5LscGzbhk6CgbtEGEaUiQNvJWRsBkDVq36afi",
  "key42": "56eJho4HR3UurqcNnibkNTyWjs4UEGYq31oUTZm9wANocectMKCTo9EEnqbvgRy8WLGm8yMdS75VYfsz3HpkNAvz",
  "key43": "4PKrP7wosXqsF7UTsgeqk9U8aJYtYn5nwAshdM9KEuDE93EtjM5qC9yALYmmmRzooLmcR7gLHEkGE3YXwNczJrfq",
  "key44": "34vYwAyJKqp2bcnTsXh9E2B9iWvRkUnqtmiTgvcATCZ9zU2VwmdWFUGkSmYdpBq88nCQotHRoAtqvEgcTpM33V83",
  "key45": "2DUQhNDnmTvZUCr7QcSZeTJxZx9DB9PfxsDuXyLgn9sBrxRpfH3QPmk6exxmHNvDzjXPPk79AJSsYjfQjbxuosLg",
  "key46": "5EZw4R5NHLKutYkmJKxJojhYoANivAw43VjkRNYeczoqdN1zJpUo3SnmBWRgxKsSyLPinemV38JzVUGR2bgGFM4q",
  "key47": "5cS4ymEqDdoidrqNxgNHJmCcGgof1R4NjXhv4BUko6zmiCP8bpcfywVy3GVhGcpyHEo3spfXnNVLdhh1nphjLbRC",
  "key48": "2Nc6F44p8r5NEgwyF3UbwmHCfby7B3o54HssSxmAsjZPP4ARGpUaZTa5Txz4mNF9Z4d34yVi76CckdvQ942XVabk"
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
