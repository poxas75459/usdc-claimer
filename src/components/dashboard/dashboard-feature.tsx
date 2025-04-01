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
    "5s8nJpnoT53kq4NnLwMxC6hvdFMuLek7TxEodHG5yZVZWsTUS9Rh4gQ6tiKKdeV2t1bKaUxERiAXjPd37rwdVR68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NtbFbDGWmSSGCA2bjJHRYYcDwZUXuMPX21TTWdJPRFDfEjfXbGXEuWEaRyPBo1JCxTZmPBTLGv2jx2qwHuFSLpZ",
  "key1": "2eFEY74KLQN3BTXeSt8rkoi9tBVTuAKrroKBjSn7Msy8izRCox9vTirxqqspKrhfSLAzhEw9sNgS6CRTrDKEAMHH",
  "key2": "3DUnnCzWMCiyD5LY3CpA3hU9MqReycLKA5gZid1yw1b2n9qJaPGef1dn6q5Qji89FPxKMRx7KLpmkxmLf64k2kVV",
  "key3": "3MgZcf7PUiLhcrQiWDNbjaMDR6tTtzyC3QE86uUe5TMUAJsqnEdxtGEKm7Wj12XnXzVZ3mkW2wsWsYMMsypRZD9D",
  "key4": "2yKcba3B4AugbctqgCJDWu8FQWhf2ANJV8yxDHptzkSU4Ji27i9aKtCxB7rjrrivv5QWKejKKqLoGRUrQjF2pvnx",
  "key5": "TDDKNiwvgmvLPMzLwnr3tYEAF8zg1331ugJWmFb4Kf54KNBntvFf2nZqjUxJUre7RSjdqiNqFdWHJTFLrgV5ATc",
  "key6": "21GSGTQs6FQ5CfyfZB1wfmLvRUB11LSqGGfqNQ4mS5nasQxzzryXzNC13cFdrMA1yVLxAxkJNEUSkjvyb15EuK7x",
  "key7": "4an8AbBWw1qYJycqn4MHs2f1Hq6eXenfYPotdT82T7HkzPGnVSE5ZZzZ6EjyrvyPhQpVuGg2QncJ5C534hhAJh3d",
  "key8": "5A6GJSGZ4T5vNFFFX89zSFqi2h3o4frPXfeKHxX8JZhGH7h539rESiGy2uTNX64C84pv4gj83fDMKwRwT4zRH2BZ",
  "key9": "5qVEhHgJ1VMNmfThV1RcZLpEEaowQyMDsPnzU6QvmzGtbDbWdxXTD1RwSzWHYddMX4YKaKKYqV2Qt4EcLSdyu4Rf",
  "key10": "4fys6WAWhQZQ4fC2WCYPh6uBF8KUg47xPKvrqyNTmVJwJZ5woNQeeeYLHHwpVdU7hkG2MYLSQwKwXAb7yJXNLYFZ",
  "key11": "5KnYU8YVxuqoQ6zyd1pXHSHEuneXtLosMJrtYHntnZ4pNsBfZaV4K46J9pwS9ZQpeNQHbpaYiGrhM3yiKbmH4eJp",
  "key12": "56LDwfabKhiGLXMaqNmvCiiZBjxSYUZ3QXU7mt61Zz7GWLRpNgrQPxLLpYqdfH6ZQbJ6usGTYjr7hhAXkzNqmbuL",
  "key13": "5c2KDuS2Th2j99aEZ9FuHR25ewwveumrpyeXsdfrR2vDYjSaej4JWWX5iPcF88PgKyRKKYyuTpBgsBjZGvqJWyRp",
  "key14": "2JK8Nt7RoQrpNgfPRXh3yJJv4ijnQ9zNCuD12uBaSp7QsTeJvUrm4omv1cs9fEjnrcCoVZrqppSEkuVYYeKkBYx",
  "key15": "G2bzuEnZSQcsMJNZ9upfRRis88KRo3XVoCBMNY3iRvLWdzA5Tnh635NMrpktr3627RfFUZx1Tf6FiZJGFMozhSx",
  "key16": "2vNqqZR1abVXKyMnbes4hpLx2HwmSUaa2HdakKBCQVNdR2B1hGhw9ujKPMmc9HTZRZCQosYx5Gi1PrBMexp69T62",
  "key17": "ewejxS4vmY9KctnMJpNssncYfc3aLob6bGB8AQHX76npdyC5H8yhMUqJ3g7CFQ5YQQCFAaGrPQcKcYoH2pQvcjQ",
  "key18": "2PyCDj1NuciLAKTAaURNt1wZZkFkBgttLxUEjnvETAhuM7nkebgtAidUgQ2k5FWX9zExZHJRnX6hz59QZotiw8et",
  "key19": "3cby46Jm5BtjgHMS8kRDXLiaGAZRyQ48Cp9vX7hqJ55oyhR7w9yLe2y6gyavh972K1z3buk4xF8PwVmiDdrZxM3x",
  "key20": "CuvwmjiYDJuu9QJwUGcmmotjFAr8SbKCWXhRizpFR8StUB5LcyRTDY9pT7yPG7XSsSKUNWPrcbqbZyKPVeYeuho",
  "key21": "2cgL6w2tWp42YqkyXztbJnRXsiGTgBzVNvnDCZsRxf5mynBE8rrpmT9cXKVViUnuoGqWAgo82QyJQmQjtRT7VnLB",
  "key22": "5byHWN1hwKTx6bg6So5P3g46DayZLYMwSErH3PEifuRedfrMyHyP8YQg6JxUndmhcaUEjLFoZgQQxRxmWxQPg1nf",
  "key23": "4BrjtdgY6QCfc1YPjdvZzxMVem1xM7fCG5xVAycpiGmg5LxK7yLBhY84XMvaNdtps83a1C7vTJWeLzrZGGj5HmzT",
  "key24": "co9SvybAbwthLH5sTfpCb1tUP3rUFrQfXUCP3pHGB3P66wqiJtTAjytUHDz4J9q452XtbHeAFhg6d7zB5Sfnk7P",
  "key25": "2oDfMq2mpDPHXHJNev9FLHBJsTqFM9aKvq5C13n1VknEw2kBYSL3vezGbehBwzxfaQCptwc3cq8KTFkqLXW33Ybm",
  "key26": "572xuGioFhrjn1BprF8GttGCM9NgQ9w78Dsfyjr6iuL3kR6yahC9ezrV6TQYE7uCJxYYytEUVQWxeCaMrmS4AmWA",
  "key27": "5SQtHLZaSFCyWFZEzqfahWokzHA6dpvjQm5rQzvjyoWAWV8oH326b1sQjhtmW1KGYA565KWq6yr5HY22LaftVPN2",
  "key28": "2eWJoPBusrGkaAuLjxfgAcSKrX73jEYM8tV6TYJDRgPpqhVjrgGUvA4ynZAsMV2mvMwZz1pqpKPG34Wxonxsp4Ur",
  "key29": "3yLj1A5sg9dtMSmLvh2RR7JUzYnfYtianN8inVppkxVf99WXhJ1AeBfto8D89MNKWLRdfc9LbGizJqUhZngHNe8U",
  "key30": "3dJtmQLBWpi9AEHeeZ89LSrtT4xphNzqXUxa8iKYvNSGyNAsUMRPTDurb4dpCoDg7CM49ARGBH2G7Aux5pn1naqe",
  "key31": "23BR9Ti4BpGJmpiCpvdJ6yegqvjFDYReswwkbq5hgfUhR8W7PdSYvkLLGYLJw5ahoT3dKbdsXNdnZ8BU5W7onyrA",
  "key32": "3tSSNvgFFZB2TdLrPofJ3QVaxWhHYg756nBubVy5Sj95REX9ARMLim7SLwrAo9CfjuLccSGCRjJSLuN5ek5f9unn",
  "key33": "4t42Ah8eKL4QGUTzybdLiA8bQKvCV7JzZeTDHUuKkBSsVsopx1Mcj3nRg5nWA4S4NdhMK7XFiUoLEM8JJY975rMg",
  "key34": "4gbp1kP61JW3ARj4AxDXPghSfoFF1cafvWucNFRvWvccEdTNh9sRPcP8TvhjNLMb7hvVynpJYwib36QGJfPA3X7f",
  "key35": "ZJHW23tQNUf4SH8Ek6NBUJzrLJ8aJ9HzEUSUWpR8fqkCLckXMohGwVrmJfh9S7Th932i97RwkD55rTx49t8qiK2",
  "key36": "4y67SvYKCJZF1u8XYcGLLEiwUv2N1WVpw4EuGMDhQiSksBQQeovwK8LUGAu6MkzNmn5Sy6ezoof6Bszq5oiLPtv1",
  "key37": "4Kpg85h5pKad9oJ99HXkPE1r6XWV2XNqLTLgQhEQw4e32Mi9HRctHeHadkbwMVnHu858Ph4Y6x1VYforbsjS9ig6",
  "key38": "4gXcwRAZjzuR9uu6bVUCyxCHrs6s8NajGVL1to8PbFEH3uNGnxXmJYdmx6LbAq8q4cjprkw21b34FS8cz7bTqTC9",
  "key39": "2o5GqavVkAgxBzfygCpg2dnkMM1KqqKGSSUktWV1s2EionQWH1KL6REjc5QSzwDRUKYVUXX4PLD76ah74ZwEMaUN",
  "key40": "4DZTH5HL1yWPXpWY9fLf61w3NNejxWUpxqxMRbA5KWmeWN1NCQk5tAZvh8hFDDCrTvA6hWexFBUJbgn2ZcMQiyHn",
  "key41": "5hcQF7axT3yoMNsJ1mRgNAi21NbqMBWNwpW4MNEMydocLM9FYnw46Tvdqft4ycUEX79ooztmPSPuXrSJdgSEivfy",
  "key42": "2aRfZJqrgyVBzBDvjDRU4xScrDDrNfuWtnqa63MkV6aXreFSUqSZkUVu8LjLJeGBTSJv2Brfrs3Sz1kJFDmvQgYc",
  "key43": "3YqdsYiFTeU45KXe8coW5Dmna3h4BAxACbrurTPixm991FKNcqdsPhAmaJp5aFfDLRuVnAjaYSR6aMwgktN8RqCe",
  "key44": "2DB4cwQ3E6pExbg8cTCz9v4hMrFfudtuSaffFkQqQSPiaqu2KVbbdwFcqKH5jCCP4A7tfeWYvbwBbApALnTCVGSu",
  "key45": "5CM7Qoh8qk9v2ZvrepT3UYAKAKA6cVZcqNaEokiBDRmAGq4zr1FJ6z7tX6iZmkNVuECxdsGmXaMy25YKUhz35uyz",
  "key46": "35sorHLFaFdKYE2F9uoMQAKuPFy3x1MtmybAkoWjYxxDptW9yW5KXhRvjyoWfxsVu64riEJ61ZSN71g3Kz2tBKfQ"
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
