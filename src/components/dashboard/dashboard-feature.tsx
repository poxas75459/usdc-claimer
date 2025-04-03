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
    "Cdjct1m1C5pSDwevEYvLTs3KHGxryrgft7Bxd9ST5wnqBBp4CEdhFUVKwYsmETHwGGodPnQhkKenw1df2NQuMn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FHy3qazAP4tCHDV6f8qSQsgLsXH7h1YW2z3okGzf9NcxcQKBJaBTVSCvKiDwzAjs8c1nQJCirsUTM7TXPy2Jvdc",
  "key1": "crZhCBr6hcWc1JZefwZgQJTeCByKXWjLmetsw9vxMeCm9HpkxLhUtXorT4adN4USt6EPYqi6xTVwB5huqHPchbp",
  "key2": "4eAMgTwB8P8RuUL3ZZ1ataevASnXA2bqr7XXCcx8KdT1i9B7qGF1w25AQ7ixDww9XuPanQ1uQpKC1xtPwbPHE2w5",
  "key3": "4ToU4aPzm8eacKk5STic7tjvXuSp6koavYoskuZiShtGgnEXqnnUcE4uEq1u7Yi9n7mMF54xkXzPqVC3vSVgXqPu",
  "key4": "4yKVjy9W3R1VchCtYqaY5opGMKyvvwdXsrx4bQRfGdMZ9bVRxEnqS2w6Ncm7wznuB4mQyj8R6VA7xHY9VsbCWAUR",
  "key5": "3ztMSQcUNWx2gPj7VSUjWYHRzXFb5gcXaBPeEeX2siWiWbCngMmKgUAGrjeQb1EpCSyF23vs6xPp5FoqTrprmEoh",
  "key6": "4tHnELYsdeB8B2p5LM5AHwehaVYoHDPkantnemiLCDdgjkUo63Fd94bjduxaPCQtHJuVkrydirynzQKueKuck2Cb",
  "key7": "3YU3KEkyyyiWvse3txMniUk6N4g639iQPt5YEENYNwJZh7Up12VHzAKNbvuBnV293EtghuiKXYKvbogKMAW2kG6x",
  "key8": "3dQJUkUph5HsysGL4u5YbxsaixG4zuz8LpUHx3cC3WztZYad44dJGMrYaFTyfo24DXmbyFiTqfETZNL6b9PsY7aC",
  "key9": "4MA97NXrwXwc6vxiGbu39PSDmGpgMq4iKXwpXvLjzC58ppPRddUiyu2PfUa3qrdCUqtUvfg5wRSho3M7d6vvHR8B",
  "key10": "rKa6YMR4fHGfsoCCDxhK1shLjuoJvT5NMiVHvf27n8SA63cQ6ihqPugFmgYCkjwTPXZ9sJVgi2mb7Kv3JNaGLYL",
  "key11": "5EnL8W1gdLKGgXxAr4iTUW9h43p6a27SikofjT8qJjmdFRGAcCTqvBWVNs3u5dWD5NVkeCQmKnU75kYdK1WFVX82",
  "key12": "2wVUMrPwFoihLJ5H47QYZkff4vGzcJyoDX5e7ZJFTRhTauV99hstA6AFx8aKG9LtU4HQ6Rj8yZe7eyQFGT3HToRK",
  "key13": "aPbNJ1uzHsFvj1gPD7oj9DFTuznzyJHhXQgXbX9RFjvMTyrS3Y1zmCL4WjggickKfsJXR6nPZfUqskEmJ4W1itY",
  "key14": "3th2K3X9CHuAgAv6Zu7PhQjDvsdhYQGQFvq5zz9FDHapFmwwg1dJmZmZofoiMG7Rjh7DfjJzqv7JQC1sStgbWvvE",
  "key15": "4CVdGuK1szdBYd6q6ngEwETGooivK8rKPEPEHWuS8S2TUJbXyHdsXZaKv7Pn7BDz8JHueRHkXEVuqpUTh5Hs41rJ",
  "key16": "3E8XeetN8PmUCLF7fBJum5zmQAgKRMyjTWN37eH3offaGADhMh4VGcaiJseMET1FJbjmFT7LBHEAvUGzwY61Vfdi",
  "key17": "KuxekmbdkhkG7PTtBVb4E4Cz7iuwvqXU9ZSfn1LcNeeTi97Xr71MjSjLh87LLRQyQWFt1U4Hk8fXpucDQ1XbXxy",
  "key18": "33nVKCi6mZqXxi3Trn6VwwNugDYibjnyxkgcwsNidCQSXc1hcMGYbYE6ePmaXm9dY1eHL1SWhpxSnCexyXkpXZ8h",
  "key19": "4LWzvrDBvYuXFPiW5pGAUL5GP3sYg9F55A4BCK1FdtcY7DSJ3jic8M14izBb7J48dnSBLCgCPZ1gtSTwoychREkR",
  "key20": "5HDuvYcu5kwGTRrSCLDiYUYRHnrY5BX2PbqbUzTz76DzcDRyCKYVqRS1Bq8tWvssQDrzG9aExKTiMP82t93Z84BK",
  "key21": "2LrzUoMm5DGx5vXRNtdqHTLdcHZikm3G4zSpxpttToPDuw7S482jqsbnesn3WihAWoCXm4RWVGWKGv88kgAB26TU",
  "key22": "ZuiFKyNou82qaJXa5NXXmdQyLYu7S25PNreNUkbwnm7fwY2UZNFm1A7WACHnPTH5bXuZQswP18gpE1hon1Zn8mv",
  "key23": "w6kwZRgVW8Y1tmioWhLnyLgUc26N9cMht5KhnECqTJKEQFDsMsh7fBQ9Y3e3ECU4GbK283hfZfUQTqUALChZweT",
  "key24": "2kQnvzDAksNWcFf2Bb1hf2445TCrnaZHocCyVVoH89hDHxChQGMCVK8qrfjpDkesNCgSwEm3y76BZTXf5M3YK1B6",
  "key25": "4VPJQmhNKsherCfeTYDhVJgfGbYrd4npLC4wtzJ7zFXhtYmHMTtSVo1ctD5p5zdFSkh3KZPCx9oqEq1fzEd5AhPJ",
  "key26": "2atQ2giwTtZZ7ydQC8MqeLZwaH3DfKPxem4ugDE615cJwMg93b6TBpHiqai9aMD7YUPQgSbKrAsKvFiJhxgYPgwe",
  "key27": "MQNQxZC1Kw25rRg7whF3ZxcfeDj5AMWKy5PCb2xCoNT41dCno1wrhS7qAz4F7WvRwcXGpSDn73U6QJiRdF7yqC9",
  "key28": "7X58ZLbDNKyCXBZgooNr4r8cskSsRE1KiqYLMHRBFELoPkxqidUNnkFWnFWDubSmpSoaHLPtxSdwpJFvfy6DgBb",
  "key29": "56Sr8sTAVojfkrzchX8FrGEnz2gcVxJs36DuH3davs1JFZbAKW5oayVWapVhRV1tn5yzjZaPwBrPXwomrx5ftRLq",
  "key30": "1jBECtTPvujE161WmHtdCUkGEx6QJTfNPY8vuiVyMXo9eoQ4GqZvzEhHXZhiNrtJBQbNrkue4acvygrNP7wbUdd",
  "key31": "PV2HC8SjTcEgmsrU84rAcN1P9PmfRJ85CMKonoNUnNCFJ8YQvyPsq14CxWHxvHEJwe5rAoTRCjBJUW2Q78fTkg1",
  "key32": "4Qe8sQP5DLA11hPKxaQrpQcyt51rXgiP1tG6YnhFaEPmbk8X46HJLMViqaLJvxSBpYRiGR5cMdCnX9jZfeYuGEPR",
  "key33": "34Yt4NMFVYwHHNZmUNJwvYQpRqqtvpZypDpRkvYPRAod3VCfxfXucLTp7qyk1QEGRsaGfZG9HwHFKTcN2xNL4v2M",
  "key34": "4HXkruEeqZCRpkYoqBvgeERicswwqSG98kep7FNRzooSBteV34QXW5iVV1KsQ4GqHvZczEP8LS86yitPQXmYXjF2",
  "key35": "3fbWRf6ZQ5Jz9u3EStyv7UzvmE39MsDr8Z1aNXRNVkrqHo9Zw6knAzGtSSepzqKK8U9aBtg6WnPkkPxTE5SsURPa",
  "key36": "rPC2mdAA3mdqxBfoSRy7vfUsttVWe1tzjt7zPXTRHzDXbVaN16FsKu1dSgvi5Lm2tKy1Wpq1ebzrw933vUZDqid",
  "key37": "338et8bmHFBThvUXUZ3aYDQzBwbaLGxaRVuGEmR1FVXnYmeXgn5ot5DaxiQQUauWsGiTx3Qdm9D9QYyoZ6sSSdv4",
  "key38": "2Qe8taignUVXMGVzfd3Q531Mh7vrsNVpLXBaENgAEEYJ8yALPRXcWqneiegqJ4Udzs36TFeUZRdnnb4krsWRRRxz",
  "key39": "wqKtNgDg2KNoUWQvcBa1gSZuUzLN4GrQUo2YpmbYBV9XQh7nooodfnsbceksfZyYaXWf4nZ3JHxzJFWa371qfHV",
  "key40": "5gLdy8d2BDpyMcb6kzJxiSuzSzF4nHZ3Vp2P8rLdNu1RwfXXzsvQtzEuS2Tq9PS7Gp6WJj88w8yjLP2CHuTgxjNM",
  "key41": "48iQQnBfw3CSLbXm83JBeSuPWEFmMNcJiBo4Ggj44KndEDtGoAcqRJifB7HjG4XLHEJBtu7gWXWs9KgnzSuPjDZi",
  "key42": "63YHfRmVRnNjnryse1eeZe7KRYJ4Ai4S1aq6D3ZgYuC4FQkP6xANfEYmXzQ1QwLEFuwnbDgHeiK49GwM3A5M34pP",
  "key43": "4utGm23cey9ypAtLvSooCTa4RsZ28eVWJt6XcXMSTnHcNKf51wp7MpMQU4VopRbFmjRkEkU6Wj8iRutt77Gz6td6",
  "key44": "3hHjMzNQmfHjiLp1hKW1kLfLuJu6wsUB4KKbSzZEDhF81iyhaSfVADWRLtxbLoPC3jahaX5m4gEq2RbHrUjhY6eC"
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
