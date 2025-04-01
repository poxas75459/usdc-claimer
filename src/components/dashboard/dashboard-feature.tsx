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
    "CbYemd4yyXLZj9ShCvSSAZBUppKLJr4yKeHmLzeHspjurwnMh3N5uWbxkWFNUQAY22XtrHfbkkq6iCm12u3LWMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W1SAMAMANF7CHLC3o5w2U5RaWigXPUhS4NrsuXn33M7boxUyPPmC7bgZnrTaZ1pGphuyLrSqQUcrzD7SyePHY8L",
  "key1": "5RswbQ15VMrA3dFjjoEa4suSGCUdm12jVYvtTByWZDfyrdX3cqCh48dqcAu1DuqWLN7GHuSfd7D7GD3XVSoPUYkv",
  "key2": "ZvbDqAYbvAP6KybnZA4rcbgUStXZqb3XyScvz8ESHDs9o66MrfeoEsizB3AM2vJLbpCmu9Bmmby3U3g5av3vVF8",
  "key3": "5ZFWnEhZrGfMtSUWVjh6rabdzbbociPLuVRZy1RusAcB4aP6jkGS9yWuM7wsJ3as9Lqe2bVRN4aZkzzt5B2Axykw",
  "key4": "623kJ7i5Hf3XmoTXcXYiVWBo9XQeqNCK1hEL8aPw939tJQJBXWYzJDxEK2BbZRNcN55HKKNeatdyw1kjfQEQ6eiW",
  "key5": "3C8Dji6ECbYLVZQUMgSAKaKVoLejwmeQQ92q3opN82MJtpqB7G6eCSXs2Ls6bc6jeTSzDsqaUr5mtVzzvjrLA3aq",
  "key6": "3nLQSYf79Ef8A6a5H6AaSKc82oVFkjs9WdRsfbpwzA4xgDKLszg6vDkhHXzyUSWzvwv9bns9o9ybJUAKp8RUYRu9",
  "key7": "5j5rgcYp2jQiFzyZfVydobWzL6bKDkAjRFaN98RhMpojdkC4Ui56c95NurtdZNnuVAbJG4S4gkDeA5ociqae15i5",
  "key8": "4nwgimpgaJgKwU215gGZVCH8TVwr1ZnPzVH4ocyF17u8QGj8ZUndtzCRy9LJCzgziBUnPzN7MqXQ2bAtdzHWS6gY",
  "key9": "4oRook9suYmsrZZpQF5RMW1CLSeE3fi5QXMKqNsr9gaiVYM9x6CNtrirVVyvPwTkar6uqn9SapCQniteiPDCo5xU",
  "key10": "5nVQFzHVooaWbL7ok3hvNpvvmiXPqd5XoGD7ExhDpo6K5PXMCFHiduPYnk7aB4EF8CVg7HK5PXqxQRHKUpRYh5Jr",
  "key11": "2zEtDTMwyejxz5VnANEKFbfsHnktcGNWy8ouX8Q9FrFkRikojG98ySqyKD71Wu9oWNPWKXTvEmPtmMpNgpBCwpYm",
  "key12": "45S7pgZUkQkGTDe2dpeGCHYig6gM5ENFLgGEiz5A22GGJL7JJFf1v4vHPsH5NXYSmBcXiUFrQtNpW8VGQe8tC76Y",
  "key13": "4KH8qPfQomz3CuR9ewMpWMPoCWQz3NtBEcf9bc5peQ98hqvvC5pf3NUkmN56DKXAseT8trUURfkmmKoHWMR3Dtdg",
  "key14": "5nbrAh7GoEDksiTF4oh2aqHSAY6ik7dnZ7Jis8FKAZdSDLmZJ2tGrXC8eBLS5kvnbbKsR31CqJS6dHB6dpHQqgxQ",
  "key15": "3WDQmApHBNYhrB883KsNXafqVySDX3AJ5KjwybPrhaMZWF5a7Zx4NSvZH8yD2b7LT4nTnkLrFRfsBUVXSkq1iGFc",
  "key16": "zNY5Cm7b5siAXuLQ2FT2C3LBZR8MXzS92XfZACLkaBRNVbYHvE95ktnJxCWKC5HkDq3cF8z75VfTZ9gDP5F662U",
  "key17": "eVfurpo5AKuLvhdAKBXTepVJi1hQd5VRrdrcJRtkASRyM4Uw1cAyE4RPhZFro4a5mU9rAabFqc1oZXf9d8DcCFo",
  "key18": "3fPcpZqhkzSbsr3jUhu11Vd7WsQ9wTx4fgGy1MjWGnm7NeqrbrnRJMf5FbK6F3ThVKFHsBrvV61ctN2k5d4XhJSX",
  "key19": "2zKbCgSHF6Z8H2V1vB4fDdgdpMij98RCP5uFHUNVTWKyV1bueutbhyx6bHKAhRbX28uZX95ynDzt8UL5VvuJA34R",
  "key20": "5nJsAsX1NKgxc8pYD54s6BobQuRzuqWhDshwQqmckmyWoRsSNeaUnTmNheqYdTbQPRCyxHUzwRn3TmwVJmQjKycs",
  "key21": "YGYydPnfQiEfhNFXE8exTHJzh8VKikbnSD9226uUS611WuRhgJrnPbipJYLrUQ3NoZLuDUg5dqkDjUUizkGEXhW",
  "key22": "2tZcPMepKDBMJMioJQVprvrYd6sFmEq3C1g8d3PDvH6GnFo2eKEu3H96KaXFXwhCfcyGUfgzFagVLR6gYCeZC8qd",
  "key23": "2CevJJEwtTGbNeSWvinavhXKn7gypJNKJxgCs71wdwsnskjUu74EuUJFmdc4xqfAJXhkoBMBXrS51gbfVtM8bGmn",
  "key24": "3qaVQMKXs1qwEXHPWSPeZukrV6fVSmsEww8S4J9SYB5MaWKuYi9JhLop3zT8vBsq9imtm4RLNRp5sHvU16u63R9j",
  "key25": "3YXDjQ1T8DXx4fYSbgGGrppLsZD4umZCrZackhJ2ubwQiPoAafaUH73Mho8d76kQUkgUaguZPTQixL4LALeTZ3bp",
  "key26": "4CNfHWW1FS5WkJmnXMpeZ1QnBiHjCGXfciAr6qDvA7dgm5fJEuNtZLRJBxH5yhjh329a3sZ9Le4U26p9YUhWMkP",
  "key27": "3SfyMUjSiTNjgLAgwJJEHzd9X3oM2Ec7MCZxviZD7eg35FZuKDsi4LNEpkt3yPvSWpJcwxuTLp6Jzr2DSshbAGA6",
  "key28": "47M3QcFDmDJaGtHLVVfMhYjDHUcMXWPYvkLZ8VDNotzMAdaaBqNhF555Vy1ZpCHQJAEwDjKCdXUdog3ZmiWEzpB",
  "key29": "2zvY78b3U6srPgDTD9Wb5ieaKcFCypTk28sHuy8mE9mzNpP5ycKPDB5gYYx2fsRwmb8Q74udsd1th69J38YvQxin",
  "key30": "1DSPbhBA4VvZeTA31hCXMNX2TJy3cBnYuMWz4jzf6EVYgA63WfXiJ9q2d8UEPo8L1fyCtP7HtjbZGkBeBihn7Tn",
  "key31": "4SkSArtFRSNE3XF2WEtB26kpzf7HkchWAErbgjCxdaJuvApxpUQiqdL3s3G1X8Kia8i4bLCaFVYubZGPFX4rySej",
  "key32": "4cRbGEqUVGoRCVofHLP9NnUPKkJviCzvgKeaSHG69kfyb7vcunTsjmymJYp9f3j2kKrSquNL9drM4hHXW8BW2N2C",
  "key33": "jKdV6kcyobFPbExAt3Pw74vU52wY2xqRyq1qYjVBuyRevr8AsCwfesVoZ7fdHdqqJhpkxcbF5fZQvABDuWHyZsh",
  "key34": "RkEMZNLS1akFQU2QyJ3TFJ2twiVCDHvz1suN2Bqp8rSqBTnW8cFqSbns9TA9oTPVT5TDkVqwMgTDrrHHJPXuzwx",
  "key35": "3vaWfHtY5umhtEDJAShSMvmrFuXSmBULNmsuLUqKoFYYuPWajaMcXubUBHtSSHyaPkVGc4WoaHeSJooPFtjf24Vw",
  "key36": "MwjZ5krPdgxWUZqxYVufb9tHH6Qb2729suGqTBNxLPjJ3FEHqHgMSFhm6QV5FUwexR59RcQeAcufpdHfqVScoe6",
  "key37": "5N1ximefnH2YH7tGFNCVd7hXEFKMZXjXsSkhR8FcMnfAAe9THEVj65DNbEAmdamwDaKjqxqy76mVyhdrZf7eDRXw",
  "key38": "2FtBcE7ENSa9SphsPVXNc9nTSjPMaGiUkdqEYP7iEdxCWsESdzfS4dXqU7KwVpfr1XxyXfCpBN8r9dGgAFuCutw8",
  "key39": "44dZV8QEx1YVeT93LYoD57XPBnR39BqwvRxpNfqRZENzXduWzYrt87srcQa3Ht1JYT15bZHqZjgW3VaXu8gzReHD",
  "key40": "2yntcnTRY71Y85LvjxoVvjNYe5YhcD9acWRhTrMa8jbSmPs9uArnJtVsuVWTLotJCNCABZsxhWvhKqYJJMBnndJj",
  "key41": "66n1qgegi5UDJEq8cA5v2jvzpuMsSGGkTfT58n6Phd696vDKnc47gAyjANDWxZ5QDecH5umqdLDnkscH2KiQdj2T",
  "key42": "2ygo92trMVjRfnnAh3pqCiJtKD1KzXXouE9wFLsA4PcMqHtXBXv2HwTsWjrHnCx1XJCfX9Yu1rVUNS52e5UqaYML",
  "key43": "5g6SXNiByiUfk7ku1HwZc6yiBp1zfgfjxJrfhganq9ATfLb7jadXF7maNagaPX9ykmBf9n2sJ8XbB1wXRLfRqL2C",
  "key44": "27q5LZfKyvh1pkZbFXEfNAmGHxW8Ua8WgBExrqQzyY3NRSnx7SvGtdG55jFhY3pL25wjzGEv1nd3582LJCjM937g",
  "key45": "5UTQ5JfD4NkAxNnHcEhJ7EbuPNfe6SZpWrUBArCEd9id9wf9NT7vjVxwPNt86vrbXdnnbEG4199UkiwRCX7Xdn1t",
  "key46": "2r84KFCXm7nkyDvTZgstFqdNstwYeoqc46y1PGc7wAaecEok4XaVJcfwfcAxo9WjqKZb1UpHpKxb9CtAGhAZTSTE",
  "key47": "VHeb96kzmSWxRVUe2RDCxJNxVg7PRYZVVGJEGHwMctSjwzYwMcHcgowHf2HBgbJe1bdk2b6n6pnuE52XZePqiuB",
  "key48": "5WAaYVBaqXMfet5kuTKmR9tR4Eg5gHnjash4W7GSNkVqD1tDSb3SPTXhZvsPbGkZSrRh7Qf2SsrEhtpdF6p2cej"
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
