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
    "2toUaBTmCAuiUN3zuvRt9kcjWV5eDsgknJsooXZqKJCpSgLgL85fuRwwjG6SZPhqu9s4k1pjCEVCarGVEq3KZaEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SsYyGuH2NjtXjLJT1Z6DgC5ZSoiF251WkTvcmo9w3Ggrw9EVfw9isz8fGMSevw9fAweDBM3P627v85tF8KRdGZB",
  "key1": "4wd3WDbXc2NwtfT6yyq4ufmn3uBLc5N7zTFEkAoEteQT2Meqjzw2fVsE9D75UBxgru9QX1qAYX1mYBgToV7fUgFY",
  "key2": "3ZFhd3G62i8yTdCBTEdVXUk1FWHFhFxqXYVGHwNuSBN6smBH7NgAVbWmkp9BpuRPMXvuY9AjeZDjLNWedTa9pZUB",
  "key3": "3kGdH56vuEjpJrrjZn9JvAVeRHFUiaL9KHo4CjtMPYXMKRQbvYCxkaBNcU9ikh7tHvGq4HiwgoMamRjuV5Wmcgmr",
  "key4": "5E1RrxDVHjuoy9p8PJKHnHmnjincTt3dG1m5vrXDzE5SP1Tj31D2cT6UCj557cbD2XXSrHuoD3zVUQQ7iqnsKt8X",
  "key5": "4dJC6LR6RaXS19nD9f66vLrxuoahpU3o48hU9cQ3PANVsWcRCzFuko7EZ5WDYmqB1DwfargG1jX4SQon1PDZPu48",
  "key6": "48aEzAmXCqjPToYhCXPBUtUkh7AqaB1PxWNK56F2d3f9Gu3aHnRTBae1tZsnzusmUhVn4pVawNhrD9RtTZAU2V6N",
  "key7": "4o4Gxmxyf27RchzCdGA2uM6U6F7zsXo1n49SU931jRQm1bTAEsNtGruwMk1e4qKUmGobuXzoTVTp9dxqKKU1JLpB",
  "key8": "3FdrrsZcSoDqYaVydzjj42XFR18n5o11GxuvuvGBtAoYw5CqFoSRMfegZEPvwfCeCo2ijaL5MjaWv985PhjfrdLW",
  "key9": "5Kgiopq2MKXMGNkrfpUNZV9mtDNeVt3c6ZwPahgDw29dYW9qLizdKiJuRVoFeHpidm9By6DcT2JGbRnpzeVDbkNJ",
  "key10": "iSf5G5ULoZeUv5V8FLPnei1QXLFP3ftWHUf8fHU1QFacxjSpNthL6q4iPqNwYFynMkMU6b6qQ11E4QwMn6Fn17e",
  "key11": "edzmr7oJyoDutLyFzTgiiP9tKWpLkAPYysB71KjrhsWbioTN78ehpVXVXcD5BW4RmfJLFMBzcX6BU6htGAaEgMT",
  "key12": "UtTiuNi7jYgQokCu2Hf1XqJQS87Bj1esYCDhw388P5F5peri5Fs7Cm1iMy91gbAz4QvX2PRsU3mtNZMT5kECTL7",
  "key13": "3UxaSQQy6sQK1bg1uYA9ZRHtwvP1dhF8yF14HCvBYofV8SKrKFJBiimtQYva19QHs69LKTfXcrNA2topwJzJDiGv",
  "key14": "2wFZsem66thAYbyYFaAzQ3jLHA1WPxdyFCng38Nwvz7kcETUTNTFXapzjuJL62Vj2pM3kEUzvsG2g5GLtayjTyLa",
  "key15": "hnQyxd99hdCQYXYchdXSsgwbxW41vgckVPYwnB8DfAe2VwwT92LX5r5w9nGwGKu1aBYBkJE9q9H7k7vmrXRMzWB",
  "key16": "2ZHrbuFrjyb7h4a9zHDprNXpYxW6FSbDZx7ZYGG37Wvt3Y3YTEWHbBKxcN7frFNNauyME9ThCwm3ZwcSDvTjJGpS",
  "key17": "3RyHZ1XdXrQPuigkPVnBDXfmd4gBVSYLSJGVV1WSytFh158V6mSdXV9Dos21AjXzFynJJutyLiyisEPDByfXZWcg",
  "key18": "5xjW8u6RGoHhQKYYeYQ7zgZKqc6N9dPFpFduEzkFFDG9UjA3zsDPUV48poJjjBX7BM2HGkkqP4RMRSPoGeM45Hcc",
  "key19": "3qavxj8Wng4opCRCQ3h69EwsJ9VxPVRZZ2w38Xnx9Fyy3xcfKxH1sz8YTJjvTbJsoHtSgL5GNss7bawKjM9fYUoW",
  "key20": "56DUxJRG3fQ8QtNzvg4HFZq41dJiszhNT2VnWNt1oXJQ7j2uBqqiH8UgQnHztnUBE9yDSZRh7jsNwxCDEpcP1Hgy",
  "key21": "2Cm6NT2xx76UnjurixGbcQcvs2GCmzZZzCXwLrS8zpGprHhjUbrUpkCVbJWKAnnkgyYC3WtzzroUJnBe6z8Xt8SJ",
  "key22": "hCKdEyLrq57Q2breZ7K9b1fg5DQfSTYSEsA1HnbVoUfsitfvnpwLzhwc8RAVzH5VqjAzE63Z4TBCgqRFczHNW1Q",
  "key23": "4s83bPD72jZKM2Uf4vWGL79G6LzgTerfCRyj2686pM4FAwnFr6ABTReed2vY6VoGhWgLi7Y6MYcRnuDBKz91vzAv",
  "key24": "25EZeCr7tX5fGzkuJmdnoNWp2syUco7a936cbaoPS1GrcU8gMKTMytV8cb1QruvBTqkbJuDZ5ywM4YTZq9b54Fe5",
  "key25": "4xKdFjcLoojnDnBXyH2nZEtKpp2BU5EHy4a72Dn17Kh1FdfXxUxqXiqHDdKWovTTryZbbTLGYn7fEK1rXtu3BzSh",
  "key26": "3izQq76P6apT68ndM3AhibakBrobcTDZw7xobKWtExo5EtPoaV4uZ95DZyirNUjzs39TY3qhPm5UL8Nq1XtVXvMV",
  "key27": "nRJGZPSiB6m1bfXDjtUAXZx36o1kZMfY1tTcBZPNM9czrjxGa9C3TnVY8k2Johr6jJLTrPBjcF68AnccFAWdm7f",
  "key28": "2u3wh4CKEWC8Ze4E8Cbyy96g4ZDgk4qmZPVdG9sm8mgLWvB1mVRojrt5V3LiyBn7sfmpLUATrTk3ndsFkyUA2JpC",
  "key29": "gt9U2qK7R5cVWYvp4HgeBXVcgJxhWgUAdhwBPbezuHvV4cv7vaDDSq94HiBfdeq2naF7JkkyABRs6hzG2jfk7sU",
  "key30": "urcnVBhqWhEdoi6vkKaYANqefTKZPtBHMbKSKMBHRkGSdng5ZPfdhh78tuqVu9jvzsjvMvWNYHJmc7WsuKiUQig",
  "key31": "3LKg7N9iofBxEHC1C6dKieeijXPwEmA7XSjuCbtDxAQ21j374AvKP2mvo5ZLGV1umY9MYjkze3Nah2woubbz5wdF",
  "key32": "5ec44WT43SnZW2xTht8ZncYmbjyY8ojQZsvVDDC96ZaGhUy8jv2kqjWKmGAK6mkz7jnB9ra4HAs4ChU1JY5siMso",
  "key33": "2CryAayAoaHaYG6ioqiPDu2FH1rEMwDMideNAv7L3S4eHie3tHSg3DmFGrpG7xZEaLhSzWXeV4B47hDLmW4i5CNV",
  "key34": "eZ9JvvX5M5DS7q42FJeFNEozMMwa89gGZC73a5RBEN8yESndkhaQeSFo1n5SBtAphXF6CDZy9dQMdt2EwCubQtW",
  "key35": "2e7EGAZUmajLjqTvyHXaJbsmLYdKNcHQr15RBrqyQNQ5hkifuXDL2krLS1i1VrqsEYKoRJfso8otjNd99WR3vEDs",
  "key36": "5LQgkNpMidm2EgRpA6g75xAiZjErv9ULdyYG7G1yqEDR37YMfytriDDbnB7xTWZLM4eGzcVMzQudAHp2dLxRUTq6",
  "key37": "2hBDeZaK7vKv3yQybDKCCrkLEvtBAxsfsdkns9de6mdtuYJszSK5xyQW66yxH8kHxEDRejpb7fN5syFrKMzBAvW3",
  "key38": "oj4GgXKV7gS2HSUbNucYw1tfoTmBxgWjgevtEyx8hwy3TGvdMmLztgMRTKoBDxoN4R5qNKH2w36WsmGknvuwfuv"
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
