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
    "4xoMKC1QrbwXPMQ4HiP188bdCemJi39hGRNfHf7n7iR9rJd3g3nn3MrVSUb6fiPxBb8wGz8ZMHXgmNPmSzXW9KSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WJBxAmZo33cUAVFTaqvZuSzkMKaCv5HiJbUvyTBBxdFNVRMvWbcvhNtrUWkzBTLWDnNohb3NAEsu2ts3KM3rANE",
  "key1": "66eB1KqxTgFAoWxzQiW6eEpjJm5hjohnSwdeE8gbLuDyRRh6oMotFFBEYQXbtA5761i7ApcpK4FXNfJLykRpC72A",
  "key2": "3QBnSkm6HS5PZeZgbuN5a985Hh9dLoGWHRqS75T1XsCRqLZhXMHzzD86FL6kAcYYxtFjx55Uniue1VjfReCTZjJe",
  "key3": "4yWkTSJv1B9D1xexuyahcNFqqA8219G6qbbenRrs61mcCQzrsBmah5PqW8LVeCBUA1djgV9nT5U9GZWtsgAnukM2",
  "key4": "4H9qVW5yojmCm5ZouoSuJQTR6UDHAJwjLQh8ArnfZmqRRe7G6jTTmbdTe7iW6jwqJERpCfWFsHiYuHuXLXEZzy7N",
  "key5": "db96YfbXTztnrM481vDWBukhUBbiX7CbybfLZGSfjxP9ww13vBfTqfEL5ptgFZUDTw6cJKAgynFR8TK8aqrgGyD",
  "key6": "2ffnx7AkgeWU6c6FavznCKue41RdPuJgFWC9qCV6DbtKusxEFYS2NJ5PM8gK3SaYiQLLuici8MqJFveKhmB5XteB",
  "key7": "28zSFhkQZ4S9ixa8gPvMjFDkvvzM7C3rXs9bmV7oJfVaALEj2kX5SGw2bF4DJ7ApaotSCFu3gxbbYDKJaMMAjdSi",
  "key8": "qUpZqHtjiuzXaYxmt9jLm8hgyMSh5d4YcbGHaG5RTj2LzWMXzGAaGSVey6WcYEy7jQnF9Rw1jdEkaoCPGAvPq9M",
  "key9": "4S7ivVtKErDDyNae1HrfaEsUTC85SSpiodFA2oX5EFXH91guRQsojwGtF2QnbtssNeC2FxEi1RBcyVZ8Rb6zJhut",
  "key10": "2ehvdGdvCqXDruyWbdtAbPCp4cQnz6r1GK8rvrraJHEdmmSSroqtn1SkWrmeHkwRUTUBhCYUBZd2dMkRLBUkajkw",
  "key11": "47HRC8fEjzk45qvFosfV4JK6DFHN2FW2etr7fmjvyyJFn8AaMWy2bA5U9g6EzzdTeoqMotDUVCNKyk2zukbXu6Ap",
  "key12": "2QXC9ZstYixgqb4u4iYmkU4B6ayfX9ZHr1FVxsGiorfo44nAFxVpxP382UXQa7tRKPQahC2g13YYWsx6cukCEFGs",
  "key13": "3mn3KimRpeTm53wmmT2WubuR4NXtTyna1igXxeyGK5wN3PRWEagHedW7CsQMQ4xgE2Es7XZC8CLUpf8rb2eivjK5",
  "key14": "4A42VTHCYwXZEY6fZQ2dZEbrfayMhtgyqTCB4rNX4XC8F926EXTQZmno1xTbcP1PA9EVgLrUK9YxaaVn6LjsxJpJ",
  "key15": "oWkySzKTz5zbeEiA5DDGANcGaWDy9b282BAMccauPUMYx59qiZFN6cJqwTAFX2QzyYux9vuLt9kSPYQPJst5r8y",
  "key16": "5tVPDsC7SMmePpqwvKPKG378w8tk1YSWaAMPRPM6HDCkx73JrhfronYugFkRznqz9XM6aAMLtD7RJh2h7up6dZU",
  "key17": "51uopSdYjpVhx6zLePyXrpAuhNWo2wVSkh1VfN9q37djgVsw8Tr4zBs3qL78HjkvTyqnaFjeHufxVikiMM78Cf4E",
  "key18": "2bBgSnky34MAUjFnbfWk9WB5wu4DB4YfHRC4398FFoGmm638AKctH3wGN2uPsndNMAaSo9D6fgB13mXtT8WyU7Na",
  "key19": "2cURxcyAQqb8yr5Un5Z2WYPfnDuNbWuYdMBfECmYJtt3BttB3NCYQHU1jN6KAjNH59RZtfecnHdix7XCDXuBsPT6",
  "key20": "3y8aq56rHNCxX2Ktz4mxmoH8jwbZZEb9M7qsus5uNp3CL8ntvX8ToG5MMgJrdWaU1M85vgnF485HnYEwoYxP6ok8",
  "key21": "7B1PVR2PYG4dT47KzRAxA2ykKo5kHcNabhi3hrmhHP8Umr7YqQtpqAgbYrHaagotNEips3g2Gux1SRHNX7ttLEN",
  "key22": "2U7BV6hSjPCYvs5nE1SWvFxSsuhLKVom6KWmLG7GfKzRyec25k2asShvSa6yBrGyhpPBJkNZT6FbYYgvZXTXfZpQ",
  "key23": "3gDyWEHpPKEcK66hPJ5t1cVM21q8cYpQb3eeSGRiYLGpJPTzK5td1WkPwhXinW9NPTBcB7nXbxm7eNQQbFy8Wpn6",
  "key24": "5pgYz6hkfetAgRgRojS9YZ3xVznV9wWan4TemrCgUr1BoVjBAWB88BG1YVim1jGs5se5QQfy2bUccoNY4cqYXLhG",
  "key25": "2CohasUcLbgpS7GAEwqNnCZCD8H8NDjqcrPAGypr7rBh5p7Jj7KwrcBiw43854PrcGfE9gKVsfJyZX6w5iHA2RiY",
  "key26": "5ab2GgHzVd5Gj3NVbPqyi9A9g3ifzzvJ7WSdvrYrEBqkrU8avd4M1jFqGkSS6WfX8Vd4kssgdNqfu7xFktmM2TSd",
  "key27": "4r9BZ4pbJTLT6V7sAZnzfCNNTfTGGXViDPAAEgCFgWcNWESfVADAUA7BE5wYPitefEmTAwKj1gEKaaMzxvVfRmdG",
  "key28": "5K6bpL3BU7BJsnwUTxPUUE5jEJyPk88vHV4fFHk3H8HGXtMTW1FDJiPhcMHnEKQ9nCi12XgaoxBwa4Ah5iSZvm93",
  "key29": "2J4Z8aKLYPKeLHFududXmYHdBUctBFkNAuL4eA4V1GdL96itXxrWjXU3V3cxKmVeATnefGLb9WpCMqsWTzq6xAGK",
  "key30": "ddHzboGJXyPnmqwHKnS7HpaVZWfXVkbsTjjcYXqgW4McRr7WE41DSFmSBm7pyz7Cef1ddMXgq1vPa6hYJwywYhv",
  "key31": "2T6sMhfZiNSuTj5c5ziWf5rYNg9a9bm5fqvypBR1mwYZyz8jgAAGsYkzCeg5FnbeXDKUthTFtsBT9YGAYMHp27qE",
  "key32": "3Mcxm5MXXNRpNmSTbYEt18g5NWhJH8KvQcVuZtLdhP3MjL1Z15h1tUkN1XKZaqxCE8dMX9KsUyaAYsHDTeqhhJ9P",
  "key33": "2cBdqa1z432qGuk27k95PbibkVtwUnuo9kdmubw3xoDDAEPLSCG77L6honC4iSvbB357PvzFrRTsjVcfyLuLdqio",
  "key34": "9MePAmxgQTZiBtarNUDFEhWASUHq28dcNtV9Ec8wxy9YE5tVzFM4ppJhVkm3wKzyrvf8NAGQgncVZc5A1sQ9Vcg",
  "key35": "5v7MnxYQKTLgLWhzPetdVgs4EctLBuPkeRE3stzfkKAX1Pnyh6QPK4UizBKDsRaE9PYXVFRCgDUTSdvvdy541tAX",
  "key36": "Dt7WjiNLkSMqDMVns96A8TXUuV238YtvfEfaRuUbZiJMPRCnpuxWTKiHwTZvu372Uu2KJwB84aRgsfh4R9UsYKy",
  "key37": "3dCqDnxNeRda5TL3DtkMB2T2mQv83e2UScKCati58Avvw3a45sW8v96ZAR5DjdWpMcy795fQ3E2E35SMrFceDd93",
  "key38": "3JDNogCMrRVVM91RM5q3jdnMYNzpJswwA5kSXGB2cHofYLX13k8A5br2QJutWAGGe2ni595Uwv6Cjho5okiMfSvk",
  "key39": "4sAZaT5nT1hFYLqEH1uf1v3hQcEcyFYq1Qw7ybxA57cf8rFp8AhNyAAe21SRETbWgKPqSw1KoWm39Tvb68fFtSib",
  "key40": "2EndrGa8i47DqvXqRQLPhUM7HgfF24FwjG59A7GpSrxo8njE6bZfEqLmrAJXMRnWeirPjwUggWf4yi6nVxXjsw2y",
  "key41": "5aGucJWBRE2hgwDc7ovDqf1Te86ir2oeYWa5TZ8RdEp7yNWe1tzys2fGG7xDVEr7Y8aLVLvWjNfAZCwBZTpSobVS",
  "key42": "4KRugN3s3bTZjbD9wcwGdf3tCqGYFLE2UjPysgiWdJxkMs82JPQyCbs7GvbMR57mQbRGDfFCAJLPSL1ZiY1zhbyN"
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
