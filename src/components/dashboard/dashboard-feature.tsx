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
    "3Dx8vmUm5dXcsAHJjPbQQoe3nCN48Lwn85d3H8FJ5iWD536CNHUVMgTJ8Heds5poWAhPvrwDqQMwzkFk9FoSETNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3soFfKeaJmyC3AaYKr84M9NBh8zTusKDauzs53rhLPqMsJgQsouxuWjY2UNjMLGsT3epfkd9qF1kZ2691Bzeey2V",
  "key1": "5r2CHyi7x8YQtCSM4fyFuBjT2AHiskMca7obd36ABEUMg8VuPXvPAn6YTBqgQjJ3AnXSFhmzm3e2H9LofU3zpYRn",
  "key2": "yNvmFEr4uBKEhhNbYHySpyQ8BjHrcr9ZeNboLrGn8GQLBSsSUMKmy8oMNcGnBy6KJpG9aoPPNHJMLYgixCmhfvW",
  "key3": "5bbtdzR5iTkqDLuVQZAHHUpQFrCgKV13N2dqPmyDEAikyXGcgvYz8WWUz4S9qhmm6bdRenBryVY4XL6tkkT2oL7w",
  "key4": "2B8brvJ3CqCiHcdQZvy7LhF4sDVDhEkuRFD4nQr8re6KmVimfUd8kkZNPMPMEWUJvhX1zHFfnoUod2p2x9Cewi9m",
  "key5": "4cgEdd9qCmXmmN425Pz1cVKBsCHWWLnwB2CumULgvksXr6Jgg9ex2JVxnPJTQ2gv8drdEiJP2dWrnFgAK2VqzPdz",
  "key6": "MvvQsGgTifcXaAnXwDX143hd3F66dcfSD5Dryk9TAtWrUs8f2R6pTnQ8E95N1mtRykjBG3UwGGtaVEmRqZnuJ41",
  "key7": "5EdbW7sK7aZrCWHfyTefoRP9Novn3S8YbejA5dNHehm5SQ8Dkef3nxUvwtysXYg7dxNBS3JQ4QyhnD77NefjEJxb",
  "key8": "4AYwmaMNfey6PdhGUp2KWdBFuQv3k1EvbZQ9cZNBRHqfVAYP2aebckB8HEAfMkf8V4J8krt6MHyvHmXcTHodWRbs",
  "key9": "jGrbUjG87rbfaSxrnBGu5SFWLA5X59YU3P9imRiSym4XPBnfHLRY7cmPFRcschKcmkYsVoZ1qxXENqbHcCJ9wwy",
  "key10": "27MQkUxPf4LsFqep2PJtHvfWPWRHNGWZKT3Hcaa7iFnYzKHQwZQaTwrroYDu5osSjAt1YufQhEtfq8eHbEcouCRD",
  "key11": "4Sf1uwQUmbiV8iAp4uPX3L17shuBbNDAjMLBAK2Gr8g33kzSp7kvA9Z3iRd6kavAHZauRMNWa3g4oQrkyiUmX6a7",
  "key12": "2xPT6tvvQntUhuprehyjV7m4NH4Ji9RggB4DhF4QgC8jypZEFcdNq7e9eBAiJmjKBGLgq1G8GQSrcsGw2Q3vrqjh",
  "key13": "mWivzc3JMhR5HSZkCrz7JyT7eR793emnhfZMJ3BHxNTMU3wQbXuU3geHzx72z5aMqoxbCJ3NHBaJ5AiezVLWPSr",
  "key14": "4rA1sLrcescB3AksjiWjRG8vp2bgYYgEmQfU4ELt3ruzdj9AzWfeXuJMsaGWTMKH7QrBTUPccTChMJ7FyjjMrMBr",
  "key15": "2SSXYhpgu5XU7harNzGzTccjiF367gSfsj887ejTwLJBUQ5tJbmFtx4QUtFmv3EhciHYTJg3Y4yaU6G88Vvbn2gb",
  "key16": "Wg3qo5PSzXGKmYFFGDcJrokKmWzWtG5sUNEaZMSYw2J8xcqsgRd89UJWAg3QiwbsZLWxGrxYb1kzBqU22GXekyH",
  "key17": "q32HhDauKAYrr1FKUmxJBsHuQtMjVUSjJLyRkA7LrJ3Q3zdayPJ4pYMnaBrggMC74gpLXneWqnr9wi5CqY6boGd",
  "key18": "2PueNWFxX1pcWPVHMVukNmMmoEmc8v3KmEoKdLkeHH8kdWoKqXPibKCjByoKPyuFLJ66TQttPssHTdQsFDYdufzM",
  "key19": "3a6j2TVcQHwmzsqJM8RkBiTbEWqYTjAQC4b3PEps2pLpATEkbcskMiB7wPxw7rq4rUar8oPxmCF4GjRJvbXhkd7i",
  "key20": "3dyVge3BBPaV3SRjNAntofb8XYJoqbwA5hrWZVtvuWtenvn9gRcLTwJWfmxq1151LQSi45soa7vNcCMrUGpuKmLQ",
  "key21": "2duSr2UpW6hQ9bshDHiQZvN8wzc39JYNYeQJwcgVWWCFmxCKkH143PoYZuX9CrNn2JRdSX46NR4AvvCUZX6GuRbK",
  "key22": "5r3RuCa8uQbnZ8TaKS44jDLhARK2KvTTaP87foWB75gp3ADnYpyKhnRnK3wyc8nfYgisbKdTpKWyvdMCrTbGFnWD",
  "key23": "3qQ9ctdQD6H8xcc1fK3jKF56Deot2g7KEEKGmVRTvioDPYPAeofAvPHR4FcizVZ6GArHVF1DZfX2drTE95ojqeLV",
  "key24": "2AhUPePmVWtdSqCT6gVFKA8yGrZgnftMcj1DFpEqaVvWbuRjv3asBM9jeS3mwmRNoyHGiNjMRq33xiPwBo6S5wyo",
  "key25": "CDaBWbBLPUmexbpdFaWHmfVsxkd1goHDrTZtpLvL7s2YBYjGH5ybQitiBMna6MDTxUz7HBJJdtN9HhDvcKa6rWL",
  "key26": "3dfUHf4e2g5u8TfknZrreWhXpji2Yz2B89wRmy58UXgtQ7k1xxvC1wBUTWwAu53PK5zXvELBr8LgexUC8FdQWsVy",
  "key27": "262XcVa4NzfP5fPoh3BZqWEp5qAZLkf1YXk4igjJqkH5j9c5zCMqKjEKWZMCEEaLaNXQ13SwcJ9hjTvXXWB7ZzLV",
  "key28": "2xJhstVsZY2gZJAHGwTE4HxzJNmkCU3YEVBRNqxxq4AG82ZvR1bJjHnsKFY3VVvKwUpLTZXxRqxuC1NnZYuAm9iE",
  "key29": "34KgRtQfCmEhN253MGtpzH8kHvRv5NCKmaJqDrzBshsiSCwceFrkzpZKCvWeyPDbDZsWf6yMKK1eJDtf2n1mCUXn",
  "key30": "5KLQc43HrQHozWRPjHocDh7BSV46qCLL2aMPWdtyrPuTctMk6pMwWUz7EWiEkoTCiHwHEz2WcPwwvoHaJqNG7fYr",
  "key31": "4CduzxwSh3cW3cfDutavVDDBB7PxvSokm9ia37W4rDrVXqw7Cup7tenerR6GhvYwFQYjVd1rAHtguYwQMFc35iWh",
  "key32": "4o3pHwcuvnKxMFUzmZS1amYXeFvt21Edr7wXCViF8bFWeDTocXvR1c9JBrM2gspgwQVvkk3T95K29tsKm2eKp4FQ",
  "key33": "ZnxP5jquNFEzbC6E9k9cDVAHv8HGmvmnTUJVZhijWUTPbufN4dLELtwcrnrtdx2e55k9cdEMftsCGR4tHpFsAmP",
  "key34": "3deYjRxEndUJS1RiFRWHLp5wwbwMVipv7xjNfaRy3YzSqAjaDwVgumbsQEPu2gk5mcmjrpJfDxBLnuDC597Xm6SK",
  "key35": "uBYb5s7NeGrMknrJvR7UgYcjypyc483Wgr8nGi8VFfoewSYidJQktF3QTrkjk2ns11fxaxZ3dgWYtyTDPZKDEy8",
  "key36": "4pkr5yHqmDLHeCZAdvWYEQ2Uf3cjBfgjxCsm6AoGjejQZjyREwn4uarVYqEzntiZaoe2VZ9k5UMKuPGLCN9kWbRj",
  "key37": "4tUyLW5AFZyeggySc9a6L4dL84dHAcykPpcnC8KdgHMQoutY8BvRsXZzA4g81maUKKN9hiwR8isgGeENVbrA8tYv",
  "key38": "4zeXM6XxPBXck6XS9Yn18iUKaVDW6vDNg5xbX79E4aHbvvHoJME9DUD6aW3Ue5AnAXDq1TyV9h3Am13KzqAuFfcf",
  "key39": "3msTZLWhooA14ftnsGayz8SmPkU3SPxT6K2rUvDCXHGybC1LDZZftQF1FBsdtfe8cANViDDGd8wTM5VDuVURzQUm",
  "key40": "3PoT4SK1ubC8CVZqFJqTPCJS4XFCNUmrcfLsFsbGAVLbS7mo5fEovgpaBbkx2b5wJb9UYbHDuVMKKRrXWc1EEGAK",
  "key41": "3naVCFUEGPKhsagHhh2XuugMvakaxqG41oRGrj92XpRufYAshS4xjw37PqFfgUzXaXnW17A4QtgygKwbfeWRY3Ej",
  "key42": "UWdgKBbodKPXceLraijF9TvYscNFdTUGJgT1Tit7wDysNddWS8oQ2siqZurZT8MXbvLwk2NUmgsuMaKBk1WZtJ9",
  "key43": "3jHasBxpfFfPPpk3T8wSrSQzqZpejjdTzGXQdcidpEQLHZM9usa7VDactMyDBwnDgm6jw32iZ8MSGFF4TJFCSCgP",
  "key44": "2NnVXknJpvmhUS2q88LwPcacA4peWcMKyCMUzo7C48zkuxZ8oqZn65nU2VMn3zXbzqokk17m6TnEjef2y5RqJc9F"
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
