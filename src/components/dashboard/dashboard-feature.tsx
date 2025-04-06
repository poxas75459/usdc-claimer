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
    "rB6w32gxaVXigKLfsDYUxgRoSdQVrK2yDu3DtEGy4ELsp2J3PEFPwDoAVDjTg9uiz1RyVyjLPzDBU5JbTWVvUJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZzazvr9WX4sHWMZevDgZTxHWsMaG7qqJTZVR6vc2dVVzwQ7zoBMNXGh5mGSCEdmfUy9uJ3priiFJ7R94ggZBP4",
  "key1": "4UjAWKTzWYGJF1qg6KSt42jyRpKCSHbREJxTiU273UT8h23M9uNGm9HZyYc8aqwSHyPzxdUU1e8PJwxJCEbApa8p",
  "key2": "28EF3uTCWzV4tMEU9mJE4dhC4S2gJRGUoYSx6beL3sAQw2k9sL21hkkbb5WwXTx6rqmQWZfYideh4T79oX2tu6eS",
  "key3": "3eJE54kJqhPiMn9TzKDjPJfrpJhSLmXrYR5uCsSeoTKJMNTjcuDcWQMAq6dQdV89JgBqW6dXztkGzpFksqpyS6f2",
  "key4": "5a7PJEA9KCbNPCHMvxdXCyiwDKNiEwrnkgyhpNcMz6LMaZYqAWWcfMPScnt9crXpnXpzaceTqYQJCtMRMUv5NQe6",
  "key5": "2bv77AeQ687GzzqhE3LAbPm2AUTUSKc71RiHfgir8RVdkCN55RFgaG8YJ9jbHLrhe4st8Z272zSo1XG5UWCL9XST",
  "key6": "JeVqVtggH14nAwyrgy7fGb9FfiLjMcoaDT81b4esvgArFrwiTuRHqV8a7vQcrcpXDE9v7H75vEpfjGUam9FwbVk",
  "key7": "2ktpXfeRjxxoiENE9PgCabT4iUngFwjtGho6QgXeqCz6cLPxyQ3mf6MQ2AFGDKkm1ZyETsfM1qBEGRWXUbTH3Yhb",
  "key8": "4MN7FwDtwFbGCZKCq5PJ93qAmYHANtYrB5cnr9zjxTSoFkTk7ZKdqiAANnyJ3gpLLk1oPBB13F9PjrTvVdFfwzNo",
  "key9": "3ymfUepWqtP8EcSxPgwr1dyaDfn38ntCW3stczKzPGJgYWPfZC7C7T27eCEsWivUgtp57gUaofxdnKVR8iaAYzFv",
  "key10": "66HRRG2Hyqv4TMXQow8P9CVXKakrvhPDAdhjjYJfc4niGtN2KTUrnjzDeWYxKzcJnvh1UzaxM4npeLiWgxjEBFAP",
  "key11": "61VBKzkUPndF1VcRxvKhjNAwvCkUVdDALX1hL49ZiaZXmA4MMBdYx4a1PMKdsSm2MtVJajiJpRG2d7TDLvtcT2sk",
  "key12": "3iyv7dUvqfJWYavRo6x5qqkS9JvvCgSbbpLjjSmissudXos97MKcRHj4KZfjeoxvNzjSf7ThJktDBN7dF465pUZ5",
  "key13": "4MJhH3ZaNcoxuq3uLifTMgY8Aq5mv4ZdSsvmCv6wV8voQUwoZSVH7Bd6VtLa26Dujqsf8LgtPdoZ8vQnCFozhgCd",
  "key14": "2AcaKaYqg5dwCgaJ7fKzHbbPNo87KrbJCieVZPXYAh8cAuMjnaGBiRo2iew7sdswA4dKAgoLz5Yj2DjY7cXGH8iP",
  "key15": "54wRAKQqXzWVDBKLFsvp4wpHqUt89Z3aiHsUNKu7vYxYWph7ib6ZjtYJ8SVc7tGKeGywPaPpSR94JbLJnbe4Rcin",
  "key16": "GqMEFKVvEkrXhUca1NhPZRn67J2YfN3jdEpdZHmsdkGVR93QQFkRzokx5QivhTaNNVbQ6nE7FiftQQcnHtfx1X3",
  "key17": "crnnDufu6cLif5WSHK9iqFKUWHXVAeVdd5643N5syG6uSxWc9jG94nDE7F7TfHwRLbKmN9HkxtvMhw4ULUTUNei",
  "key18": "4vXk4GD8raYHw4F61ud1AW1WogRch3eJARsHtYMVQ432mBUW9X6TG956sBfbcPcgPNb2qYXMW5h9QaC1fJkAiw3Y",
  "key19": "22bCMKsQRNWb5rVwrcE85vVHkERGJogKyjnLturNGivqEHzwFBEuiJ81a19druZMRDEbFUokfyDerWDfC1rptqto",
  "key20": "2Vsk1QpNQ5DG1PWDBpUQrCTzKsG7rNPLWbT8DpeeYdLdJM1ppQPbiHt2ajLrjw2yRHXS3x5pZMVLYQDWys2fvA3T",
  "key21": "2j2LpwqYDuWcA3NXUyVS1sFxjyDLJoJEtuciiid1h1uNqmzbtzwSxpLUQyCbbW9rA2PYzg7reqoQHeWce1Q69S5T",
  "key22": "2hpniTxFrRbBqbr6kJcTHG3t5yg2pRyAxK2HivJ2FNmGMRCsZgEaFUHs6iKCTrHGKkzRT5CwyhLPT4imoQHogXxu",
  "key23": "4GHNLSdksJ52HDdHjrxZ82iuvFtdLGbLzBwKdxf4fAMoy3UnJtEi6rSg9cyhP2q1DTYry8fJUyZn4gTndscLvxdN",
  "key24": "5XBAqxwHeDQyhRaLker9uhiBTnLG6364W9UqQLUDgZzGZS429rTXYXwZSgDzTWBmVEfuDHE5uxjVRb2ttpnsFcMm",
  "key25": "5qs6bH6qWyYRLMCRyucFALQDr2FpRyr8YSQ2hi7M6GGB9AyxhBarCvRPy4JU7g5uwHsEgRiPURcUobNUd74NqCEH",
  "key26": "2nt6pWpTQzJpzaotQun5do72ipP2EwXhidwmPLDrXwC94ZBFpH27ow1CCHT7Mf5ukPtPperU9EtzVWJakrd7ieoB",
  "key27": "58BMURNbXh87K4pU8C3KgJLZBkj83GrpJU5dYUbYRM9xPzrZYZrkLcAuWeZM8U6YjNo7WGiqFJrc6xnc7meC7zS8",
  "key28": "2SynCcuywrhV8aDmKMwufcMtJM5LVCimSus1vLXoBk4mmNVrx71A3qgFMBRrhgzT88G1t7tCoxdTQHXVxDvqWmTz",
  "key29": "vmgw3rs8ahT5SdYATaF5SGw55sVK374DVuDbypEYCLycnZdxEL8KJY2deeqeHZ6syRoLvPkN2HsYsYy6WwmHD7Y",
  "key30": "5bHG3ikjWmmJVaHNN3wo9XjcuE32GTi3h5Y3SLLPYgdKZXx4KsvbjdiPCpHV6zRWhsdkUrdXGEuUkZJ4Zg61YqqM",
  "key31": "5dKrDyLTuW3DaKezNp6ayoJ1SajBR5Kf76XsdeaYitdLnqswtknnZkSDs1iAZ3JFprJZU93od86d1P94FmMMQ9XA",
  "key32": "4gm7Kou3zpEr1w9eHNiuqeDReRQx2Dmv2pPvvAenfDzfjKau68yJ6PBVoyWitFEwMGJaGssjpkPTfhwBLJdF9HYb",
  "key33": "2F57BvYqBib45EPHB4wrVCP3Fz3GLJ8ewjCKrijN68GZengDKaErEFLCGQH4v7fwYyY5QAWUbmUmfzVJMquBXNwX",
  "key34": "2UFytiqiqWnLXqt6vpG8LMAQjuNCggRbUkm6JQAFVf6kpB8fbGaDFx1iysrbyKYZyrLbxBh7EodJ8bjFDQRd8RVQ",
  "key35": "2g6ad8XxjCsW7EkbxYkJRbYzSWgUx92mRCAg8YoPW5r6sHV3cVGSLTenU93R52Qm8Dbjej8UjpzqHKw7cNS3wbV",
  "key36": "5gyPtEkxSc7ZaRddmsdHKZYJ83T5D7XiPDbqhaa9EXwwWTd5bUpLeLiE3WzSoGMB4P66om2zxg36wN28QL7MD1SD",
  "key37": "2ziEjDxAyDawtJ2HP1fNycksAjX3kPmw7AcdSxiJpbkE9c3uhVpu4wiBUW3e7sFbbBREXNT88RM67sdNqsBxadWz",
  "key38": "325BxS9ug2q27epeQZMu2EBoiYsrZ2pK1gLyTzboXY8c6pUCNQW4H2yZa59AnpFvepmTFEjoHKJd4vKBvbxfKj5D",
  "key39": "2izHzzdXtJX9Ssmi6TNLUGQ7ndr6CqcmWPm5YWj56B1QfZUnomjgCcaYPKtnzFQZF2DvJLHpMkWrkBb95oDMYFrS",
  "key40": "Ukad47eHheWM6Np7MBdxv5fMV5j5txMS7Ry4y3iLHoRDhftSfEBLUogCpjdg4hgoyr2XK4SXtWqePSm5jfDKBHm",
  "key41": "4TCQLnw4U2zTRPVQ3grm33wZ36T8iFDhcgAU2EhUd4bSFoPNxDdx2RquPWXP8ddBoa1Rn1uGsTKE8xSPD9YdBLpk",
  "key42": "ZgECX6tZ3sDbDV4CHNoYDXfaLREqmTuP1Ha4vwmFKo5Yh3C6AnUtBdn2iuLEnacQYSHXvJ5ujdHmqSiNX3qwm64",
  "key43": "4zSUsGznxva54eywfUqrRno228g9cJ3zvE2D5rDJxFMg28xi6r19xxAqxgSCEJSv4zyHbmL8T5NsKH19eYVwQSpe",
  "key44": "3PqYvWBVcqgbGMmvMjkHCHHYYTVEF5mmj2RRGjpHrFvcE6Au2jHLUBPYBGLKx3QaeQnrpZNEaYxZDGkXD3h1ijRA",
  "key45": "4TL1r6SsQHYE4sEAc4STiMdsgyproLND6RUFgw6buSG4y8fg4yCkjQLNRmQgWe5ZEUVZoPQWoWqMPGw2mDtqUiMJ",
  "key46": "5YRqG17PPx2amUNoFRdByWUj4sLdTkmiZeyMDDtgqoSbF6yBbd6zAwce3MjbjE56vTANxZhfBrBNsGnPyQuXZJZP",
  "key47": "56M1BSCMPRe8v6Rfz1NFBAroWffJaEc8m8Ve29faGWpYZ4uiM9KvqZZjCEgPsfbdMC6edJ5Pt6YWr3rs5xCpjLHK",
  "key48": "2Y7gNt4Ltf9m9u1mzJTcWhHEQLhPBrP6iQU3pbdWVcrQ3EjdfMkicBkYXCBbCwbdQwnTUoLoSWf9xG4H3752qDyJ",
  "key49": "wixEMmUMdX81mJEYYoaqw4gmvQF4LMgMR8Jg9Y3SNSEqNgoG2A7p7p2ZretiAgWWUSu7zuN6XvzYscABCriT4dm"
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
