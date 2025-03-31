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
    "V1m6NdLZxCXc7r2mzNQFNAwPJn53vc5E5TEHUVw6fS38hCdKmzDqYGsjMTQV6aAh3vUcjsmucMhz46tqAzmrA8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RkQxJuRHgdnBzzXWsuWpsuqKssS5HuXetuqoFSE2cMvPAFkEF1wvULJGPK2AvRev2Bm111p8UGxodZetDCi8ZdQ",
  "key1": "2U2axDjpybY6mEvSS8u141Jq3XCyCwbvWy2M5QjF4LcRC9c8LkKzFr7UV7dpA9ySxK8hvvNyJVNpsWnRGquJ4uNt",
  "key2": "4sgeWxUUNqG5yzCFHnLiE7mdgxPxVhLQkaNqAjLR7xadqVyyFMAQyno1Qk7VAPTaSLTmEXEZCG8AyRLcwX9E4irx",
  "key3": "3RALs9r2sxnnRtZq2HxKYDVrTrQtFCK1KuaSGn8UxZSUNmP67iTwrfSANTpBoM6Li11s6PAYnBXUq1sANdyMiCuT",
  "key4": "3rXx6og99xYVAysSsuth59tZFiBfwCZAVW9hVkawfhiTa8Xbviegyey6Ky6qEdHt4SwnoYoE6F1dPw53sVxFAte7",
  "key5": "4MDyaqr1hRmpATmqUmUTekvCdLoHiPwZsqnxj3zSrAqAhvjAiVJH88shUGiu1rDnazoCS9DQbaCZyQGD2aXBSdKq",
  "key6": "1M1gtbN9QyxQ8GTXWbTvTJCgFdhXZXGuEPbdPjP6euh8ANjAn8D38Wu13FFZHAeom9MzjPQgCPDKhyuxfpQyKVX",
  "key7": "39RubmF6XFKFq4h14ZkYCkuKja7R11nwBi6FGFWV7YMaTLyXQP5FCG7Bkkd6EPBZfMPm9o3UF9nHzw4ybydB5rjy",
  "key8": "3SyJaUKJMQBNUHaknmegRGEHoH99dfn55wLY3Zqhx7QJZzBSg5XDCHPwvErRxF2u1N7i8vGfz5dgNPyQ6v4AXe7R",
  "key9": "28ENedQ6AAqAwL7sFayKyPuPdhEKxyt9isFuguVS3ca4pcVUk69cs8xDQMrSbSVNfuYm4LVyLRJnRBdsHMRurfLv",
  "key10": "SDLh8xhzJtHRCA7K4RZmP84LjbtDiuCBwGFySUJRHA1RLQVKoMtyP12xHudbz1uBDs3o2LqUxJLJ5xZAYcysrij",
  "key11": "5YWMkhmJv9LkCESRxoNCJ9XkMvEYW58CF2Qnwa5yhwwespxRcyh9teAmfXqPz4faEBms5ktBqvZrwhLZ53dUNqA4",
  "key12": "efG4wxpNhxvYoXePVHQ7UEpGJof8gBwfQ4eu5LDBPLK1PrxbBPT7FCFTxkwadFPZ9mQiNG8syhkES4URyukN63U",
  "key13": "5mgL4Gf8Gvh8J5CTNg1jbKaYgVkze1r7gTvPeFmNeHDNssaMYPhXMC55QXwjviEgJQUrVhHvbYa1ybFVSwTgdCZW",
  "key14": "2BbwTSSmwsTmYKLu5nRa7QFxvmis5Rhj9CD5AeGTz9sb3KcdwzBxoSPFcQLJJH4SmVscjfLtbaxSxWWzJQmC9YJY",
  "key15": "61Km2LgDTmHXVsLagZ7H2pty9RaYR7cr3u4KeFtsiBRD6KiEgPFNie5NgKYDGn13eXkYrLc6byzgsL6EDCYzYChG",
  "key16": "5QTY3V3r7dqnYzb5mDWMMdVP9t6Furx7ivKTXDe86tPS7zS4kuBgrbAuPgeDmLw26TJRLXDWsKFxiuKzdM7xiLYj",
  "key17": "YvrWnxzKBwrsLFWw1LVqUC3PATTfFK1NSo2vYeBTKiAa8B94JFGWCQZxteeuuymt5iSt7HQgjT6NPeMtHCbzFC9",
  "key18": "3d5qrY9rNy54UYAm5VESbvj73bkZC2Ni3TcsStMYYunFjgeLZXH829FkY4EJRTa2Mrfm4kjkjuNhbMp6h37noTYK",
  "key19": "SPudE5th4DMFkTzYBnALVGULfq2z1PwxFzq6rv51SQu35FztymP3mR17oQPyv2g5GS3idd47cCeo8WJDq6VskJv",
  "key20": "ff7uisrqZen1gtujJfSSfoHW43YsmfzLHjsDoF1kk45DBgRmKb24JWX23RbQp3tGftDC6qW95WPx5Rczo67Kezn",
  "key21": "hLn25jJsYSNkjEsqFQUXFfCP83wthbHh5EdvTfWvBYTcXeuqiX6ppYaYbjc2xo8JTks5UZgTL4X9fdvvVV8Pk9e",
  "key22": "4UH1JaTqRcRyytfXscUt4HPpcBEh128V8vGvyvBxPr62Q1LokwyBixTH63VNEX2Cf7kwCQURhKmwsvPJ1ftNcqeb",
  "key23": "2Q3RnRy7TK6ns6FMp1jzC8DGtnBJfg59CumjLgSrDmNvsKecqEcaWQLdj5MhabNppBaKj1AtnwKsbA3Fvuu38AT6",
  "key24": "2hWNkhdCpgUq9cL6P3coMbf8SmhEmAGFYnqxo1jhu7EJQKK7ybCVGV51YCmzdZegYX3CLCVKEzSpDFpYGAXebGgW",
  "key25": "65YHgt3qYf834hPyt4XkGMRUsX7BhsJc55yj4EYWa1bxfMVpB5smQii2vxt6CzGiW69f8e4LKioxnEzfJNRrLWTZ",
  "key26": "4YtxPk5GGoKxcQWVBP7ptPKjj9zfoB7CdfyoBwGRS36vSpmoZmjzJNDSFcKo7ZDSJRHCap9JCDAXqtFfZSghkNiT",
  "key27": "5hbFg514qZ68KqmZmSagQbvMyHzbswixzZeyM6RapV2sF3kuHPt23LU9VyN5guBrALRoezwi8JyzMkXiWYic3EH6",
  "key28": "5NvWFpvwsbwy83NZ3Hh1Z7XHHasTVHCLRmG19YHVSqesFCrEz6jSEP9N4qsdFB9S5z1avksfQZtymkjaMZCdNrx2",
  "key29": "3hQJV54o3iuVzJ4BpEif91p8SMpMMY62MbzX4Y5q2hekW3qvpx8ts2hJY7B2gQS8khSMfTC92fooif1mAGLdusF6",
  "key30": "4mLajpD9f9mBYkaf694DMj5ysU4z7js4Cm8m5hQGNWWv3zqaLecTE6fC4u7RdtRhUx1fBjWQwCnbZQT7esGVVvwQ",
  "key31": "3kH67cCs5eNtewvfrVuEtkjBpTv2tn72EX6BKiwSo4317Bm1nAFshYotVLi3iYwdb3Yh2UHnrN85WNNRyP8qjS1i",
  "key32": "zUJPePKmMe4ggF8k3fwHd6KySrd34p2eXbcWnFwxpGHwiS6ZoWDhBkJnZSFU5JjJ9JnoF6vBwtGKwSpsdHT1Fbm",
  "key33": "3DeoND7RnBVSf29yPk2qWyyozwYh3J9cDzRPPZpHS4ZJsyuSugyCxgdwg7TtqwnpLFiY2LnM7BKCwXYUoi3sdCfh",
  "key34": "3MB5crMnsteXKgMapRhNWiiDnsBaG7hGmrdgeeNpzFvDnrGc5rTkaVnQvSrTSVvowwW6t8b3CSN269kEsAozBf1h",
  "key35": "3iUZEGtW5rG6wh9Q1EyfSFPkienoEKyMqub6tHy1xFZpZ2djRG4LaZE85GaaP1UWNrrj1d1PjUQz9KsyRxhp8WuV",
  "key36": "5EzVU2twVHEfJ422ANqWFgbeud4yT5cD6FjhPLWhCDyQgByfrmtUkPGfnc2TikPtmbzMQRq3tfwAeoUPoDV7KhVW",
  "key37": "5rpHm6gThHLTPANkwPf5MUJK5hfzzN2YEqMWxJZjiDTNhXH45cviFQqW9jYQyjQLtj1qRf7Q9kJpfT34M5vCmYP7",
  "key38": "4GW95Lw61JyKFG4DYAiiDn4E5yhH81Fa68Y1Jm1fvFpV2YRmJqkCFu8EuxLZ7hte7kWRVMa1VYwwSdajmMaRm5uY",
  "key39": "4nAoZdXXx4NGs9c2VimRgScyQi2ZURbNPz7QjWwByTtkHRXGESq5fG1dTGr7sieyfbiK9X4FrdcfqRDoPYcAPCtp",
  "key40": "3qN5TT5KS7ubEdgigWX1DxSyCyjcWr69vcW9d61UUSLAcSkH5qZBXNsTmfAN3Xwh8aEoJLuzZpr87BW2qYeRCPsG",
  "key41": "2h1SFvfzVobpfd56SP5MQWneAjajLa4r1EjEoL5gMfVm8wgh9NdM65XjwyjVVNkhD83EMmCa2yxJCo9dYtQfNayQ",
  "key42": "5qcHXhZHigwne1biYDKS3GXfkTzbkXxfBHbmdGdLHZnuRMyu785gXLcbwaJzbYAcGeWyJ7Q83cSPXMkEoZckLUik",
  "key43": "YeSHjQhupSuHRT9PufavbTt2EZqX5vj5pW326knxsG3GxnRrpwtckxQhDhUHk7jywuX8daW6fdMQZYAXvNoNT5q"
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
