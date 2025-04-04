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
    "5CxCqp9kb2cCQ8LGRY4e2r7pwb7tAmcrhzznCpAiLRNdnFuLSFZXTm6bY87HiGfZsw46otvU6DhmpPHtLXxyz1QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hwZ8RdNoC8Xm6C26i74qMWdLHNnUwTtH1o4odEAB1dJpMrNiMaQWgViXfBAEoXFAy9a7v5yV39ba5g9A1syWGpK",
  "key1": "5WixAceTDRi4ptMAMRuFFVGzUJgdhqhZrM6xsKXuDJ2KZtZW5JgiDXfjTCH9XxQAEkxgz7me4iwnEpq5m7tP76q9",
  "key2": "2ACiVEoKoVqQCkYFJRoE6cpM1F85pKUa4Uf11yZe2rEYtApyqcRSf2fz5pZBzjgbWZ6G7eC5hqFRPsBkVPrEtPQ8",
  "key3": "4zvcY3k5HYRiUR9GkHQfYZWfazNQCUbuRN2Ug8sPvCH9jtB3PCoAqAjNkm57HkgQH32PMbr3GVZUJquWi4dWgcq2",
  "key4": "4Q5LDQudbi6YCAtQVFCD8tapLjqUoBTXaV5Vn6ZjR74aLPftDkj6hanPArBFo5i7yxeSbYdfKTzFX1nN2WPbVvFJ",
  "key5": "5Qfn765yKDpno8hLGE4HyT2nozqCEdqudsr3TjnQ7hHnizpBuUtvcd82GZwnRnHVCVxLAAWXK9AYnc8mAL8rTHz4",
  "key6": "4Pmo8cfQUMoTAnGUMRXe5NXYiCFmvmVu1MuJwU6VBNp4yVqyruz5g6H2eq5e1RET2mg9GZNiu2cSnsAijMiS9B81",
  "key7": "5CTzdwXAX9SeN4a3d5C59kjZD5Pe1oAkFXEPpbcMcimpHLJeNYDaZYhhEQrbdivAD4Zen9YhYrwpxDfRo2UWxVaY",
  "key8": "5KYetpdWvgenMA7sKp34HiyUeyB58tv3Ev5duFRnfzDUJsxtzE5Fo59kCKcoFVwVvisGumGyYP6npnNW7u2YX8y6",
  "key9": "Ywp3YMHPmkrxdnYKhVfggyHohBNDm7137VEPZYkU5BNf4WpAEbyGZSRGxtzR4FVopzqozE3k4AwgevpxKAkdkbX",
  "key10": "N4cRNderCTDonfHdyGKfTfnYmnAsjGtQkr9HJdxK3JeLzUc5J6S4XwnYyBcL9wSnaxGupkyDy72j2aWtqNZwMuF",
  "key11": "Yu4qVaWBGHvoxV3Ud3FRUg5Z3pNwrecA3LnAL9kyToZDeqMyCkyXntfND9P3PhMz86CfsxZ7kViJbsWfAP2WoY1",
  "key12": "DEDaPgcJyUAJkbnMrJcmaQT2AhneeZKhnA1w7fvQegnaR4mW79DrnQ7HYErUCH5oU93tAaGzHU1phxtcUAD85C2",
  "key13": "44x6gEuEfyXjx6vagsF2VphG5PWsRcBQD5Vxe2PciJhg6fZ4DihAQVj3F7pZkLyp8XyWW9eqARaCEmcMAAVwQPoF",
  "key14": "3odbYLie4anpHtWuTicW1pobaucLAqHdFXYz2LQzmp85ZryLGV8fHWoK568X38X7AmiMYS5Z6MwiBbtYoUCENWyp",
  "key15": "2iGRhbWVzccELBvoA1SPcexua4gFcWTpWUtaAsc13GHHXoN56Pi5LBWdvs6kDGaBuwCHuAa2L9GxnbXUVWT9wUnQ",
  "key16": "5bNSyk9ZS9FE2ykPBnnWinE2tFCezrRXGL36kdr7gKMD5cm22KEyJtS37Xdg3zaQ8XukwC2K3xJQzdw4XtksmfYX",
  "key17": "4Kb1fKx2uKPQoKbrvaCSi1QdyVQriKnHysH1Ji1mBCrrxuy65sdLJaWy1objZQZcp9w1NNzk3MwWHKDWSkCgii7D",
  "key18": "5BJGgbaF7o3jFNpPm4kmq6oGGPmuZVcSTiM3XVPo7QMCiSsRcsQa7oyPaQKLgKFsXH49bmqAvWDUEfZdDXKB2JRd",
  "key19": "4LpDVXveeBbFT3DRG2hyWdFAnyaNUqToNtA6q9VDh6qMYD7LXB1jF8y4huata782NUEKr3BpYbUvp1NwoLUc8FVs",
  "key20": "3msz1G29RAo6Bqerbd2xnfANVqNnB1JEshaYaGjnbX43c7tuygZtMtaJYTF3HT2MDoNMBtXn7bdrhC9DbbLgZ1Kb",
  "key21": "35Si9FeaTh1XKFCGawTxCsbVPTUuS4SCpAf7SM4a7EXy9JGB1ePgWftsz3fT4iZGvFfzknU8Z93SCKPLPhXGAVdG",
  "key22": "1C2a4CDzvCG2Phs9mJ3Q5duxBbtisr4ufucM7RkocGdW8g1FWpzD5PB5BwFHUukjRtoFdCf7sYj952rRV31Asbz",
  "key23": "B5Q3JfjWu9s9G6JZq5wK1c8rEX3Jant4B7ib9YcvkyxC6HuEw8BaiL3zppFeJMEAovGHV11fsMCG213y9iceN5h",
  "key24": "4ABSBckgdsmtwtPwtR8EPJ45pJixwvut1RiLSDMGgQkbobvET3r2PkwKtGgjT9gDnkdMVSMhyEgESuHvv9exomWY",
  "key25": "2paUA2CZ2wUGvfQkzNJx1V6oLtbsyVungKaj9U4XkzLnEwTUagaXuLaxubn353L8ghPPtXXudVxieco5PU3jCScw",
  "key26": "5AvEjmHChLMFa2L8goVh9WkqxemqR9AjwkDVw9QaXCCrhg92ijaNNV7rZ8rJPawbBmMEv3envoEbQQQKPBvBBv6x",
  "key27": "4Q76PnohFRT4dkNM44LwUzhe1S1z6SxyanpNxjAqHf1V7D1KfMRo8aZcBfjmdYoSDUhvUdHrNhprmcW9wFbUWKLa",
  "key28": "2RnYsfkAUQHABRC1grtRJ3CSi69RFrnns85mD6psBPv6hpLq7bgUjSJid3Md6Z4ssQ61Puwaa7DsGnSu4vJFK19w",
  "key29": "4EekMj541MqsQbU3fhuc7kZFfzbbDtLm662SqkdekvEH9tFJd6TXAvEs66xijk7ZSsNTmLWZLKdPeWqWdvQJimH",
  "key30": "3LGTVTzpXYL9AV4v3B9tnQAQ4dW6WZ8L5rCc8KeizKQxh3EoQbZ4VsuttUJbpvKgFT4E6b4WD8RZBfkHSQzoQ8uv",
  "key31": "5FPAyG9Xg393xSixpRBRn9YoUjWKVaS1X8Z8zn4NYAZdKDuzQnoNGQ3AQn2fP9PHinKAUufTYnAyHPaP3k4jCd3E",
  "key32": "3uAnf9yBfHhRtb5qNoP48eqxpXvE9DKYUddWzUgpRGSNZjU68BbFEwDfUNQ8MMD7nkMoHRheM9Yp9mAoQYjteWwr",
  "key33": "56zw94z8ZEskAR4Hc1K3xaiM8kJbJXRLjtSgB99c95GrLLJAxNXM8ViZQsY1vWnpFQPzXfTniWGRyXmcNRNpeuTT",
  "key34": "5nCup6LHrpRsunHrwbACcrXuosE34APi7NU9M2n4f2eLaAqH3JJUkatnLTgyRGBbzrBdhgyxL3MQiSaWxe8q7TdT",
  "key35": "3Zgrst4SUJ4CMJErLef9r2NxxtS3nLGwPEAdNjhk7Ps3LH58iWsy169eQqrDXezVq39qFehyDp2YEhi8H3aZoyHK",
  "key36": "5MvKLPRyNxYduagTh8DGy93KWuovU3TG3zisWQt22Pa67dFh9H3mHEmM8hUEQY28X52taMgCPCX5uc4d8wSh7Haq",
  "key37": "5LYE7XDT5GBceEw7k1df7U73xQ4HJHXBDrGH9ppZY9opSb4oeSiTRHEtxCoLvy95q67mdnqDRHRPN8eLkVacNZFb",
  "key38": "4U9tqzhsNxSPGhrVBdaoHniNKATi4LTHL9Sk37hpEA3ABNqbp9DdweVRahXVpAaYUMnEeLvuX5BRFKVnVY8BGGSh",
  "key39": "3YJtdKVgUfEvnoGWEXQNQqhg6ZkaSApDcrAExojbKRCiPL88Eng5sEYWYMMT26WMxE2iAGokqwNghFSPvsFmX2Wh",
  "key40": "Zpsw3iQKjj454hHpiSiTzHdjY5xg57W7CauJ8S9sf4QZcCsuDyuKPRtPat6S1E8yutjP31p31N4JPzyx4hvbbuY",
  "key41": "P4cwz3hHtGb3UvecCkYceqQBVaYVKeRRX7g15smhoV4p8By3wwn6cHxXMg7bENczb2b7DzpZvyuAFCFZSLYT2A9",
  "key42": "Shw9SaQhFFuWHFf9b71DwAnT7HFCGmLbUsTEYaRrzEKgXUB1VfTSAhB8ysX7quotAZQyZfw6gV2fCe85NTsx4vU",
  "key43": "3qnAxhKcWeuMCfJ2UVcgipwYyLabsLD1p37rRo7gm5vNg8oUeHpYdXLgxkC8KJYnZeXLJuygpo9BwT7TxCvhkBjj",
  "key44": "3sQhQNTJ9EA9BnxFjUxjwFe1L1nUSVHkr44xuQuh1SK9ejq6LskHhzoP1U6m6QkKdH6puuoWjd5d6E7Mp3kvKBxJ",
  "key45": "sUGzRifGsUSQ5soN5wC6jpw81F4xE9gMUb1WB7KoyeY48acpojAKYov6oVF1hPhLVw1Y4zYpckaDe4KCtrvPMZ1",
  "key46": "5T2zFu5YERxrDrg1MYJ7sU2jjYRYm49b7j4nx1zWcbTPWnVZqKS4aijSoSWJXUkAcHxsPTjuqMokdwLP9HF3w9Y6"
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
