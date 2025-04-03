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
    "4xr7BSAYBsoQmQr7uRysRTRWYk8RCpYP9jJu3ykNSdo5wFdYJsbQwPCA6V3zDMqK5ufhg6z43m4FZabL4YsFkQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FhppM5jWy4mKJH9B4e5h2AuEXH5kasNEJr7GL1fFdN7HK2DLzaxTysJ9XYnDqGVqBYQnYbavfcsVzsTH2Vr58a6",
  "key1": "3KCyuEK3Mn5aJ15TUu3YS44bpgLCGeNiJG38T5Y74SDrEgrQtDFPhCHARNLb4fkzFgwcr1FC5T71TtuSXgU5HRn5",
  "key2": "aJ6pdqtFP3oo9GR8GtFSr3eo4Hz1b85f2RYMB1ft7Noh3BPvxaj6wdgTGdhwho6iyk6kAd1RM24DQJQzRuctEFL",
  "key3": "63qLzz6cKymtKoSyDbnHw2X9bXzanDDdwQno3DySXAQZtLc4MYEPua7trnU3QXffEUY15yEw1U3Yn5PDYENioTeh",
  "key4": "2jfeBXFFdpLybzd62NoSPeuJtUjYENBYxUr8neYL2aMXBKJSq5ybhS93fCNjgT3xa5KqetF4m5Ke67bVGsVyQ5Mn",
  "key5": "3a8NKmWNaNseVtLFvB4GH96xRdTQCeDvqZh5mQvqm3QEpy657njq4Ycd8i4pTaJZbW4r17MvMNRfkbxAbWDmvvMN",
  "key6": "2V8R7mBy58kpNFgHEVPZ6NnPwZB3UtVSs5vcua2H9NuKcpVUBmM9nwRkPerzYvsjeeDYazvGs3bmfBbFGSiD7Mxb",
  "key7": "2bxFMaK75F4KXT8WFdJR8aALGvGmfULeyy55UdRVvgBueMuhSQzJegpnj2DLkdrQcnsJWV8tzRfpyeouGZC1s7yH",
  "key8": "S2o7QwuvPgHTYAGTcy6kN1rxShishwGHMY1YuYkDDvJvoaJUxPiDJAmM1XXGeoCBGZ4GrNPeQ4ZiUq89xXXEBDw",
  "key9": "4JWUcie96XWPvyGgGckRdA3z23f3UQevCxGbKKHVqcZKEReV8CtAjmfFJc3yKWDUoYTz6fq35gjGaBgWLEu9bHCU",
  "key10": "4XVC8corGQscydLwJvngwmhnZz1E4MPNg3JBMAmMUGjoCCaQqcoMqtdAzQN2bxTteSFi2rgKiwRrHdiLQkbu8Z2J",
  "key11": "ZdkxRuVdJw2nNdPpcpN4iGd3Ba4fvWAvpupPnRFGzwk9RHA3eW97xhzV22b8TePyXjnSHqW1jfbNFewqpt6Xnnz",
  "key12": "5GQjwxBzHVvAX1hv5A9VDBEKoAKXMYr2ixJDsc8RJ3HeG85Eki6Pfwz1DGVkuMjjDF8kVg3QjyDZihCSSucDZGKn",
  "key13": "51rfcoApEENjzD4N8TbzCFUx8VR726rHMX8kgNjvPcwYBpPmb3bJ22578edrt2p66vXZkStRw74Tvpwr3UPeY4Vi",
  "key14": "5mLKtZJqPYLMxHKB9DzzYqcQCfRrhV8yZqtMeUTKnB4YjQoK14ovFrxmqUdPr37aAmdviqR2Ue4Qjyh1btLNQnQP",
  "key15": "2JJ7SjmRoJGbLb2F9zV2qNNTPKt8UnYgy4S82DgE5c6osEX41WPRS1TRgEeDKvvGQ2jbKBDU3DWt5qZgaLKz4sQi",
  "key16": "3US8Ku7Xmz1X64ke8Jjbf1g5NbAZQhgcSVZ8K8FpWBiD8iSpnv54qZP8rRKkbbefWSt2uJ2gGqcHDhBZedJxPXrM",
  "key17": "6FdYkm9aC3H79DtBCApmBsGcZYf6Pug88EJQgLjPi7GQHFVWA3xsrs8rhpmTX7z3CLCZsPrqnY8fAvxgbcGowqN",
  "key18": "3rZNiieph9P2jKzNjQBaDxCh3WoGYnmUJEi89pY62FB63m5sDa5bfBRsxV6aMGAdZS5ktuWdPQdZxEzMWmu9T9Wo",
  "key19": "zkHmTmoUYSJAb78VUBLrfXyAQ97nz5HtEsKwhUaURFcprgkZJpYG86fnMYmLrZsqGR5RjGn9H4HshE4c4qaKtgd",
  "key20": "2njnPskx8mwh5zCcRiSJe8u46SYw3oQtL5ewK9MifvRQTErjKB16o5zX5dPk4uwvHpUcxdznnTNYY9PTJgExMHbc",
  "key21": "5LDoBjEZTWQaxCqq2ALAxbEMcrtUB2QiwD76SvTHxrF8ASyNssSkY7Y6V4nwp15kb73i5FuJ14HpMV6s93RWiQrC",
  "key22": "ntKEYNen7Gx9JTcjx9mNNPveGmvsw8Boort3a6BhdTk7TFetJ643VnzWy9eHN5EEJhMYhGJ92Pm9B1QznM3wtDg",
  "key23": "2sMDoDV8AiiTph9oTf3fgEEEJA1sGyenDQWWk67nUx8cRdm3BX9sBzSD7qtL6re2pLSY4reQgLYmpvLuyq8prdnd",
  "key24": "4kn5RRfQnoLUpY71sG6hirYuknavcgpJZKiQbXweMHpfDevVLASFMPtt5bCEoftQyu8H2yJiPKzEDtdcUDCsA1C8",
  "key25": "64gcSbeWvpCV7YmBMJAwavxgmtYHYaZzEUyeji3zfcgfj1C1Xq22cSs3Smb2qkjMHCM5EGQdSpGLudRUMDxLXo1p",
  "key26": "2D5bBDLP3tTdoJtv7Z8oT6WAsKnZeu75gbek2qjxVi1kTKdQtJuXmZkci6Unh8xr8VpnDm2814MqGHftLxRx6teL",
  "key27": "2u58G8PzQUjgxUJteioqhyauP4NQe9K14p1zficn3CcbExuEpjzkw4dhxJb2Na2vCsdS3eSbmxTkctXnGgitiCLs",
  "key28": "2ipqtwufEao4mGqXnRwCrkoiC4Zr2xS7s9JDgHRzk2SjtBAVEYAGSJcfHVa4LxuNuJwZvV4nPx7pPnuVX6qqw86B",
  "key29": "AZRD8oYWyLnKXL58CPpiASC9p7TA85REZGDph8EV1KkaEeQkcN4ddgH4h4NoeXmABdv3gzMJeerCuTHUWosQYoQ",
  "key30": "5ZM5c5fmsDmrNSidnz4hFZWrh81BacJ644WH2zKmgJdGCDj43vMTasufMiA7R2wzcPMAz7kttnLw7FtxvhjKvwtX",
  "key31": "EktEiJe1phBh4q3xKJrkCFa9bLmdo3L59Ej1pGP19MN6FttiA9KkH4pPRXNz5pH1mPHX4U4Lr3QY5BersF3Lm2a",
  "key32": "2LJVgWjF6DXmBUgLvmfHyPCWKawWfUrFk7MpoCCH8g1gmqKY7Agw3ymsgkG6U7NrhACw43BdV3SNDDbMWf3cf6dj",
  "key33": "2LHRJfgjwC9Z8j7kXP1iDMaZ8mYygdZqPhA2YJUHv5aqhFHfmtmX9uQbiAKe6DWgy2BfqeKSgxWN1Z3QHPmVsmvz",
  "key34": "67mRfE9rg2Po1Mm4WakqzmzzDz5Q4ky99K4aW1SGvcQZWhwkSNhDyVVxAW5WDCMRweCzXpaZthpPq9Cx8dW1NVs6",
  "key35": "4dJmwGYRdYQsJKUKGM9qg7zyTUoB8nFLAAEbJEmZRDwX5bC29SZYXXpvDguaMZWs2B1nciiVBUKyuC5EDND7t461",
  "key36": "4K2uvVeys4vFugbjR5UWcm8XJy7qdRD864Vv5qsR4xVgYa3Qq3kWYn7T6Lj6Ady2Vmizv218qMVVEU7fg7r6TYPA",
  "key37": "4eamCfdyJr5QFa7jRHEoe6tYLC5dGdda4jFiFt3iT44kUhVnaY9CTZjD26bZnry9c79PeCydyoPwaYxdRmyqo5Pp",
  "key38": "5Qd8iHmr8AHgmsLG5kr5T85ptvxQ7GQYJSMXzCr6WQqLWB5Eik17GgKBSCxCLkNvMxbJcAAZJrQC4dQBkjRVtCuc",
  "key39": "1reQP1qMbbCaYBJjP6USgtWhe9oBRJhiq4WujQyifFMp9tmeH4EPBC4w1V5KAfRruDtkPNsrC6FKJ6qJv4vHxSZ",
  "key40": "qsYEXiDK9WBk4g8PgPNn9PHobRrQJqLc7m1vp86XiXToPh86T9pfxP2sMCHewWYKcJ5tbmYYnvp2LZjCaQkUW5c"
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
