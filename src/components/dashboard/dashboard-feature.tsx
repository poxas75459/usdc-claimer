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
    "4akdZhWJT1GfS2mHPEqMSkJCThQj8rRQ6Aoyc7ti12WjZRLUvfeqLvSQrSgKxH1ViycKpSCiMFkRhsjgLRz1gUqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jofiv23AmdWWiNk8ePuBnrxa8KLytNBHbgCbWzWD6MfsfjvyDyfdR5X27ikmf2WJDqLDYs6FFF5PE6JBJXfyzcp",
  "key1": "59K3E1rgn73G3E12uEbweXN7Hiz61gRy2C96bEoUQfVJyLTU2E2z6o9mrPPWQ3ARhRsrKaShTr3zg6i62Yo4vXNE",
  "key2": "2Amj66YaPLR1nG5osb4bt25TMRKvfccxyUzLmsBojg5LuJn3Nz7MuaHxDi5GLmDhQVwiJYjbzvaQUS4a1QzZ2BWP",
  "key3": "4UKki9Dymrx8raxNNYX7AD1z7W4gBfsrnb72NK4dms9eRbFc4jfQ6JBkW3Eg3JDYx8g15up8CsQmx1keuzSMVGzH",
  "key4": "3EXrTmfvfkDnBVa4A6YE2cAhU6VDQ4iwyukhuwHXMoErJULQAWEjak4Mme3DmnFZhhD5GmKhAx8vgQ9BixANWdAx",
  "key5": "U5CUdEZsCmasEKn3GCcYN6B5icEYLHmgtoV94Zx1PupzRuMdjePJM46WFf2ksCs4EYvV9LRGRxr7cjcEpXpvwMq",
  "key6": "4HVJswvdBuLws77jwAYb9osLDneoMT7YvrVicLpsVxKk5WC1fCt7RbKAqdWGqTULpTv6i8EvkAmDtqEqkqCRhMDX",
  "key7": "2kXrwjtdjnAb2TCrvXZWNcEjPWxEVnw6sUoTDvMVn4E7TaNRQWBYCpZWAX7zAcdRHf3r9TFUfGmMFX3j9h5JzWBG",
  "key8": "4nUKYkixnD6ygT2sUTF27QuhcaLVB4gjqyXo5zqrmeXiZvxcoc7Xq8du9oDD7tsdfiGrbBjcTzBnwRpc7WCYxUfF",
  "key9": "4xkTStaMJTML1YzSu5wHzb15seiJH7PriTDbpAXmnzzh7hdct8kYBMqVBernqAv18Roq81YXguUbMYFDuUjxD8wk",
  "key10": "2m5tx9DdKJ86wrQTjk4MXkbgyZ6qWs5ej7aj3LsdoKX3mTrukbfA8Gk8WPuEqYiCAXygDNR8W7vhK6MBos3kN1pg",
  "key11": "4Zcw4rnCVfcaDoy62URYueH859H9h8GiJmCDexBeP3sf2FmYtNxqB6TywYZ72ecqtr9J4NdMzsG8rgtQLR86W3R2",
  "key12": "35myFrTT5keyp5X4ME2HtcpV5MPcyZabyPbNVDKuTfbtM9tAecqy4HknKqeWBn3Kdhba8L6XJ2cHC1urC8p9ddXy",
  "key13": "4EnxDn2AvHMsjQcT4Pf9LwJvi3Z8qqg6yLMqD1nSNSqeFnirhfU4FKx5dseedRYNRny3YHMJBEzAomVov7yqBCWW",
  "key14": "2Gza2zQPDJasoBNWRz9F5u8EAWQy4MSpvmwXugL8wsC7jcnRVxv4qUNzyztWNCLN8DAR9NvBwFnKF3ZZ3RDfytMU",
  "key15": "3NF2zq6RHwXReYuMaAdHh5mDn69iXmJDzUTx5ozQJ2wKKYDHsynCHEfJobJm9gyNrPoMkt2jnUZfMXnhWrhWyz2h",
  "key16": "3L8msYC9SargAsuwzL34EBeQBrJSSHzfyT1YHiMyaTzL6BEsebH14tLp9KBfG1y2FS38hiJPrXmWX7Re88uTF2Ft",
  "key17": "2opvYzjxsiz14jiHCqGmwimL58t59XvPLqdg3nPaw59JtrzcQ9xsix8xQnSM9pW4s9uCPYuv1M3fNntnAYYvHCor",
  "key18": "5Uk2JMJ4FYJabqKSDX7H171XvtTnTNaivnZkbUnrHKkF47rTbVnQJS92jqFegpRD3MpM4x8vcUsB337VUfbP9wjX",
  "key19": "36xMZsA75WxCDWjVWzcMsRGsKwycpyiMxmhxiQMHRKqfH3JdpMDMGZpyZAADENE1mA2SiotfDhyLiM9pqdzMEx1A",
  "key20": "GGhTQ1xJBQMgHq2rzS6gTbDny9jP9hzaWTvZSb5P7fVuNhmDXqcMVKWj55wHzdaQ8rFGt2z1yYnGzH3pvejfJK5",
  "key21": "Lt8e3JeyGM2xBDyrxTXf8MrcGbxFAksyNALfpQNKAm5VHyVbpQ8Pp7YCv3BbQpRrv3KdoS62LjYUU8tM6PKYmyZ",
  "key22": "2417Qm4DXGJjPq2UtWL5AsyQZiuvnozQDPecFRsde3jo9WndD7F9DvegDkGLphnV7S8zEtkBMmuXhrFv12VtTgtF",
  "key23": "4hmbnBrfg79wWYiP3gi4BDiruEM96o1f3gvdAiuVzQDzoBUSGDWBWMbAh32keTrzjQWsHcAgYzonDRL6Dh1cEntA",
  "key24": "2jtsxHzT37GCK93ZPe4zhaUnabeawGtgTdC6bj69svz9D56beiGDfZnt9HXCQ67ViBa955f5HWWZdundAu5bjN7X",
  "key25": "27ZHeb7Zi6ViQ8vUUmw47S64UYPGBoHHkexH85aEgo5o8y46so5jDTcMAvr3PcT92Sxedj9SP7kYHSSatxCTrnhP",
  "key26": "2d2qiRYNtNgSBUAmDuQgKfRWX4wbLUajjmDDnBo8USMG856WaND8XBze46ksp3u4GQv3XCFCewuC2ysrxqWPzq3A",
  "key27": "4UKzYdSP5ZXwLzr5mgwoe5XfFTzo9hJgspMU5JjFPZUHm3U3cLNEkRLTVBu5LipT34nhS5qaKeNvDmFijZjhgJSg",
  "key28": "Ychyc6cuwD88WBAQL4bLscCFXdSWPzrMZkLeEyT4h8fhYP1Py3QtAhQSV1Brj49p1rCAD3eN93ZzWW6LwUXzH56",
  "key29": "2G2xphznEM9XR3GTFa5ZgTbAEYL6zYQPnq3XuRBgqzxUk7wbisdmTR3pCcBXK2i2JUZGV755eAVhjbcuQ6AhzMUY",
  "key30": "3rDqbejRZ938BNPQQTJoUHcgtDE6DnDgAuZD7Q8mUgSXAAboZNMJm9JSkEW5E7LSbasKGoeXS179ek64upGqo8H",
  "key31": "eC6xZo7BZg5WdgcCBLVo6FUYESR1ZDA5hEJm5MYqxJiKrFNYcfHBWZcbUAz4wyUrTRqtkpzKLWAGr4s4jGYGXB6",
  "key32": "5hVRuPXk6SKdJADejyVcKQyss2Ucu4kB37cPbTECUFduqUfSzWj6gjo9E4UQ7dtsGfEKdygdD7Kajbi8d8fCSd3E",
  "key33": "jCPmpxk8dDHHDjUe2Ckr9djzdWUjhZZmftJEvK6dJy8CGfEGk1PeUp35duFyVsZMjuYXJwg91LbBukCP6PJUAGZ",
  "key34": "2co7WVAGTQVtP9h1XwBytrA3NJs3sbgyR89m2EmQooG6JDNQjigovzuRzkfoQDJnEqwQwsuf8oWmQcaNLJBUSoTE",
  "key35": "2y69hhYeJKzpLwkdg8GEPb96ueTvRCbCD3VvjDMG4EUMRcNACMzkc89vaU8JM2QQXPdvjLkFs3ajDLsQdjGPucoU",
  "key36": "3rL7nATYbSpGp1pv86KJHYxfUyiL1TdHmPAwVnucNkQhZwXhYr7yeXtvXA6j7MtfkUk1Psm53ycvDe5FQxELWx5G",
  "key37": "2nRLDCG8FzUt9R1iicFCR1UvutGknDLCfS3tRJBTzKeTNHzxBC2wiAXwdNxokeESWUaaQ1QF3GBRhMywen4NJZxH",
  "key38": "5rWVRFpNjeizzJVija2w4BNgMRMJB9AxUc1MUNBZ2boD136TqfRGhdwwryAG6cixKq55EzuzhuzjZcu29Rpa8BG8",
  "key39": "2jA9JNGgotBUzsLnmnhUZE9qFHqayT8v6oX1vGvjkRjJob1eAd3dLH1e1d1YgGNGAbLRfRLNWzQaXAPe3ypiiBVT",
  "key40": "Cajuo8dkB9uix3fi4Yr5qcWE3gUt7evuHTrAhSZt2MSjzQANw3NkxzKzNKh3xDPrecjKjZvLzKHeyjZPrLqQ8ew",
  "key41": "4BETwbNBtAhv5KG2hSWnYzfVKPBngggV9Skid4kpeMqrhzpWkNhBc9Fmjrqq53fQqGW5wjAQV5hfjXFTL3Jgi6YJ",
  "key42": "3iTGWcTz2j7fVvqTdoxTpzGDnmwNZ51TBfEsaXgAAr6ZShiic3cPWZHVyKQADBxsmo1oJbGfgSDKkoJo5qmayab8",
  "key43": "MwZNBBtNzSQ3f9NFocEHj7kxnWt12WYNM4Afei1Eb1RvrX4eYreVhtSW1yxwvMfX9veKASeomDxXaJLPcafSKB1",
  "key44": "4g7qykx5ZYTQXB6RjzZYqjfoqQfB49aHvh2Sn8orb6eipv4tQU8ryPVxsVUpRXwgXhZkEs5Q731WsctNosSi3u8U"
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
