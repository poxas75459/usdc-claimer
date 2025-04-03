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
    "hiRzToTrQhdwCFmeSfsNWnwbM21KiiHrrJM1488fCzMffXGZoF27chvZrSfYshJrKcu37JA2nkD9LsmvtdeuvSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FrxqrtUU8FckSv1TF4LBwpY7vksj6ePLNtqPJRXv2hve4j5QGFN1vR3kcRmNCo9Pgu4m6R5B48jwrQ2ns8ytesa",
  "key1": "3oHbEE8aBVDbiTczoBfpmRnEjXTjj9SHYrGAAwnYZYgCGsfyAdq1dBZgQe19Aj3qqCZ4Q6baSQZ1UFU2JgttqXtR",
  "key2": "5BYEBo7Tt1LBy1hoWN5sMx6gCRwwkDKESfPwD5tSyNqiSXxLJEZKQA2ijAjqTVJZxHakcNXFvpcqFA61gsh5Vpp5",
  "key3": "2ZG3JVrWrUDUdBFmRTU1aTAdhuaWy73hRprifkvxWZdWGTR1dAQ8Kzrjg7Ziar17CjwLfiPZ8o8MMWAa6KrqTRRy",
  "key4": "Lr4sxmCpMtuBk71M9TLPtMVREPCrkDJEmVgwm6Q1FusKBpUDH97Mrfh9tVnN4FoXwGewCi7Kgm9FSpveb3dXoSV",
  "key5": "61zyFHnEJs3egnhRh8NsCB3d8VM8ULfrvv4RnSsDhg7iRVPzA55BofQ2PjSc3CRqU2UqByBpjszLY3BP5ZXxC611",
  "key6": "dPPqdY7URGCzYM2SWxBqAcnEpvmu8WrtPSDgUnrSLzxSXGTNbcarypxNBEox4sQQMxyYiDRXnhN6B2nRGjUsoj8",
  "key7": "4KZZnCkCPs36qWNmiJWnDkdLrWmDk7WNEa87eS99FEm8wzmWGm4HXL1fp7kgBXDEzkpiQA2MC5w3gM5hVPj22mfy",
  "key8": "t8Kj8Z865xLHHX5LYY6ou4NJyesZruphzkpQDepGj2Rf9HhsU2135RS6TteQSpSa9kbBAosGgR1E2eni6JKRbtw",
  "key9": "2ncoGcYUmPcbWkBCBeLLfVA4MVmDiK8pbeKss4iU83y8aJYog1HaUX1ijT9nWEMvEons7Sdc81eKPZspfmS1UeQx",
  "key10": "fpVmvB89kBBNH9fsM7XCFh6nBbKYXfuaEp2iMv6FoAcS5qQi3LJuL7x4LDkHg5qQKGWVZaMo6QNmoE9uU6zVwqt",
  "key11": "2Ttr7kNGvgBS5uvH3P4oDG2ssWFseW5ZTP7BorxmhzzKjAUF4UPUoUSpAjRU4rQHY3hejT67JikJTTXYTnMZDzw4",
  "key12": "cVcwdTZabBtGRCVJRRrstDdXzqLw1DJgQWyy5qBduA2Ys38KdjWSsd6JZAe16bh75y2MFfCYc3XfPVtjXMaaVyn",
  "key13": "515NtUAumhLrdGusJHbiV27vYaw8xCyTU6HJG5tiRffFZfWeYxpCPctxdQ3WGK31vnndDdRiDTz6Ui1PdWAyTXGw",
  "key14": "7vjMUbduGJMvYfhuK9BFzdKvFwiUmPDiXWLY96BkiyYQhmApY3tf59zSeGyEzNvsPHFem9E6m76Nv7N31WAypdH",
  "key15": "65hzLwLb4vntcFpEy42hvS2xdzkWdhsEbEd1VRMTrzPgedkpAosEhWhzBBsX1ZgSsGHgqU9pJM4q6L66xj35Smnm",
  "key16": "3T8CtPmV6aYTZStTMdKQUvwFnovuV5fi9R2Xmq14dv4sQbib8h76DLmx6LEeTnf3YmfegygwGPfU6ZXqqgzVz2Dm",
  "key17": "2ini8B9jPc58pM9nu2KkyzoxyhdYrSgepquHEMg6RynrZzBjEHru11zV2cv1nGxbpm6bQ5tSWACwrhgQEVZXpxFX",
  "key18": "5nJECvppp9zKAoRB5nnxSyfPpm1LyESkH4yjRuvMGyNzoWhmByemgjiZE5EWA65PyGQif5Keg4YeAzWifvESjbXy",
  "key19": "4XWuiGzD6oS1SPazzzWGpRpqh1WbANoqu5ymd5XBg3513d8PUQnC2VwdFLhmTLGyw7i22vH2dzmZnow7dEV6s9am",
  "key20": "5onwznpR47Fh27Y6dg66A21YXGkUnHHmzMvR35HygjDZGp2xwsDYBd89hUeG5CYyVSxT6L8S7iA611o9sBDG7Vhz",
  "key21": "5JeEwttuxByxjA1tzXxS5CXn44x3vKUvu3JuYim1FNvYGhd8uDJQJx4geG5Nqy7znFaPkMGSEyYznQQYpVdVgZ73",
  "key22": "4zzeHFKVAB59Gn3UwXXEgzBRvGCtjjyW54JfjwkiZfdpZcEqVKDKZvhPeFt1U4GFRWegr881EmpcpJ1BExYghu6S",
  "key23": "36NBEzTULYTRJRknWWW9ZEWdAK1Wm9S4AVJZ6QojmZd8ZsNJz2Ec4eZvLcrok9T2HC3dRzTDy1wHCEo7DupN11Nm",
  "key24": "5on9SFAe2cVgH3cQg4Mixqt3gnontLkn8464zSkw7hnNtGRdnCftxLFx3Hh3k5fHZjuNG9gPNuqLDoNdina8QDfW",
  "key25": "4ekkRHdaw7ZiJinQjRAy5RQ6S1cKtHV1WHVS1zcCSYXHkJU3Ar5crDyFhaxELsuupwQmuQbvLQbw3cXba62La8Dr",
  "key26": "5ZiByUV3TbrKPoSzS14TCWuec53kGksAUJ31cseZt7jM1VYjyDHYtmyAUzjzhYsQPkM2hLajkcuzGbwHDrnam5pE",
  "key27": "5U1cqJNLxhsK2ZcKiCtmZ4oDLgngWnDpFBQbSSbTXgakuDX95Ef55EUzrvEi2F6DVic9Yhyjo2uArXEteRKw8Lj3",
  "key28": "HhWv2zPvY8uoGj5y2YNqhr6iR5gdNoyv9RNcnrhd3Phk3RsDms8MnnQNfguSTtX8bxwFnHNt1jYuf8DAFTtqtXK",
  "key29": "VzJtgD5vDdMwVC6FHhrjrSsD3NiahQcuePUwCwXh32sdUPJMh3JNAswhELMmf7eh8wBC56SrqB2igwNTKuQCPvT",
  "key30": "4Gdim3udvpEb6mK7jv4H7DW5cdz8SJ9F9jzKxXSh4GizmaQaFoJUcU3PxvzfFSvB21U71vC3cEDeSFH4UK7CbHP",
  "key31": "xfXVxyyhcZcn8gbEYeGVShB5Grp2k5A8dmUitgUhu4wYiz3Ut2t8q1sYZnBNb2rFJT89Q6Dv6it7Ect6U4bhzmp",
  "key32": "4J5v9rzzqshXAA4ZsF1BNGucqpHYLUdGEZ8QNKsqzhPrGHKTDbK4De82cTjToXsFrVZAgZZKPacbZJfRuw51WUvs",
  "key33": "3T4hE7DsRFkVe5qA1YP96ZspUuCfy9g2G52NyDLsXQugWsNLsBQ2yFQyMcdnrDbkBQ2HS3azrkxzuNjVZNNxjCso",
  "key34": "2tCosrSEh5RLDTnn73PkCQ62HWg23hH9jFXNj7132yJG5KJr2aF13gWYdK6GpNQKJz6rGEqTSpDYpqksEdvWa1Xi",
  "key35": "N5BePG3Z3VC2hi9zK4xppTqEmimbTcdSdYBBGc8y1sJxiATtG5qtdqxG5eryF48Sx7fLoGcrttCtZTNJMdsd6pt",
  "key36": "51WcRSHH2GPLAsihstzN1w7gN71mwa1SwotDuH4Ejon3zb1hep5xLgqzN8FUEA1RJhJW4j5b8JtNNNk1hn43qoJe",
  "key37": "2wKidCn4YQzYYQ83PznyEiEe3itV6uZXfJe5nFEvmeDDJRTs4psrhAhkEjhDaGYz5e858estb1Fy1uCWZRdMTk4Q",
  "key38": "35oqgDX2xSZhsZySfNkpNm7qGg7XMBZtXSyuiAYDApR9Xs1pQ9pkpqhWXVdriSeidp2Ly7PPGCQhSWMsh5mQaE9w",
  "key39": "u6idvrmDvxaqCX7eo2EWhvpt9TtJrYe5hMkvWGGfjgnita2VDTQnWcxzS5utAakUiCirmCF1RPSFaMGYovBgNPB",
  "key40": "2PbDAJfNvDfMQdq1USQtLbNomYhwBU7UXAKPkuFAaXLJEsstk6ivNrPgbpgSYuLyjj7vhpQNuYoQEpuLRfUrRKUM",
  "key41": "21tHL8yNt2t7hxZZrpv24ed3UiRonEFB3XG5VTpcZCA5sPLrDo2RsT85X8rNcxHwwzUMhKiaEL5Djgp8AJGpth2m",
  "key42": "4MtnJoREMDA8HR3WDcLJDrnkZhHpBkKUjzLMRZkRPLqx12X7nj6tuKcoEm8LGEPEnFZmKeiPGAMsNtFFFAmYbxac",
  "key43": "283pmcqc4PwxKtWwEEphN53Gi3RzJ8EJxCPsyqubHhrweHCkQjK5DRscywUwRWoqdAtbZiQnT3BRNwa3L4kbXiEw",
  "key44": "CE7rRcVUigDfyj3pvtemvMbSAAG4LJYLjk7mtkVfRUqXMEgCtPnzcig66xvZTp4A5QY4jhSiXS5KoW4ke9gZ16f",
  "key45": "3SXc8UnDH1eSzPVP3vEeyDfLvWW36nC3Y56YAN5Du7BJEbN3PbEKUVzDaYt1hFxyja5hBecC5GLUn1ps2cShKe1f",
  "key46": "3hJegs9GbFA99ixf6UyqTFYumKe4S39dvtBJHDzPeYGn3YiJUAExUYp1t6s5BxkvZ5mA8G4nGgv1VnWJnpjuffR9"
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
