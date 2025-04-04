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
    "tVT7A6sRp2214BbvxUoTaTRAWnjpumPnK3D4huRkrt9KGAcFrsbgeacckjRGHjspGVoRCwC3UYEBYUxWkQWQDsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRrBBzFMZQES9bmpi3FrZ7AdzqczfjFJheLs8mXFbDZypFX8BBuwzxyfkzfmFnN1X4hofUtQHrtQFTDc4VUHaMt",
  "key1": "4gxFgUDs2gqP4XyezF5eRGfVnsGs6W8i6HQi3i67ChUfBTjKdSfKWmX7Rh5eafcrz4M9ypiewuyG6katP1YvmqF7",
  "key2": "3zqknbokQq65kibLqew2KWPmKeLf8hVTgbFNtS2oJcCcimWvG1VGz9dfLqtzDoJKCaUqJSamXD7eq3D7SuzD6NSh",
  "key3": "2gnVKjZR6XdEcW5tmWiNiGGXtw8oJXgSGjWtbNhaKXDft1i7sNxs5PBqv23Rosri7bhVpJAMb9uXpzsUVKMsiGEx",
  "key4": "55ag5SkWyj1WTcsT9MzCF2Vko5Z4VubPiRetFmLETxYciA74MN17sj4fuLh4f7ZCjKWWx1mRt1jmpEL1oAykZowy",
  "key5": "4PuVEbNkqCs2FFCbNWKJoxVQHpxsKn2GwpAR6aDjHNksfBgrdZqPq9r2BvqQ7TLBZzbz8pEX7rfySpzDZDR7rCUL",
  "key6": "4dkvwTf4muY7u88dop3W2Fbv9geU75wkyLWXqYQFjpHh3X8SDEafkjWyomDXGbKGxJ4jeF9LZeHsEQ4M3yCZuXKr",
  "key7": "4iZ7J61ZuN8q3wM7DBwZpBuKAgiqczt1HYJtYBnuH7iD8ME7bX7m2uoovHweAr1pNE2W3wFZ1cA9kb7goYTFvJ1B",
  "key8": "63GKNCLFoV4mUdQFWMFeLhvLCaNsfLZS79v6YhEELLtN5X4859Fsi1S8hBbbdrjyqCurQhFJKubAew8WrEKaDML6",
  "key9": "oFyDquC6U41VcUkAxDsCzUKNUuo3VRVpd9Kz4euk58U44gCBRM2otzApDVi79tuhZDn6CW4RVGh7jvoNkNzgjjy",
  "key10": "54KQPumQCRnrUdMY53NZhyuqjS15czy1YwoYLYesF22EN3GAFHzZ9crHcTfonhLrh9KrMzSgEg3DGZDzqtyPBqNZ",
  "key11": "TVqUzeY7FnxtSmrcbupaEPDQK6kiMZqWAm7Q8UpEVYL3UW2Bt9WbEGuyPLmB2VyE2r32vsHswfFqaJSJXEN56xY",
  "key12": "uCRPTzxBd7fktxCGPsUxtVbu6XKYnrQAfpjGaCNoWoBk6rnUhHdWzRuSHHhaytEwb9G8ePbaKErfqcwBsQdASe5",
  "key13": "5N3dk5NL2qXZBwMuphFdsuDQQHAPPDcDie3og1mksZsnTXbRNHWuEwTZEmdkKEgeDatcULfNr9azjbhWmS24KnSS",
  "key14": "2VRhA9vnpGrY6pUGxLp5SPEss4wv3HAWqwySPiR667xiNkXadZXFWVm3AfhykiZdg8uNVCpYaTDVszUuifbDEH4x",
  "key15": "4D5nivUmfP9kiHe5tESjUbEoBMvbpU3oHLTnwujeZvppkWh3YxpboLDyQyMh9ZeSUrvhPygH9qwdFMbY72RVpbpp",
  "key16": "2vPmeV15SqTHwfRZb2Voqcn47Q9bcwGg6j2ME9Uo8DLJPvdN2uj5wm2SuyQfp7PDfCDYf1Hi6v2yuuSCBn9YSCMC",
  "key17": "2DheCb2Tt4di1VdB4iZAQEbwhxXVjVvrdzLqKFMbkkB7yGb9JhDefsEuG87jNNqaipxtXCVuEapWqdd8J7TJvSxJ",
  "key18": "2Jh2QzxCc25NGoyrD3ZikiqTQfrfzHV7pme1KLPs1AxVdTKDr5ekcLY7QsP1E7w41xEdmqwbZokvWpsQ8R9nLx9w",
  "key19": "3yPeg4mLwiCt1MxrmaaMVvBrAsZjeDiJuESgphnBi9jeTR62McCKjumrftXjmdt5bZ2qmYfADZqQE3akYzTnHaRs",
  "key20": "5kNPjTaFaZgVgBJUPZK71bVwyb9BgtnpCaJZrcYgyDLiLpQCUEZ9W5jVtL1N1ZRkyZWXBHBjXdstPzNrKKkdAFSq",
  "key21": "5tjdcgy7b1nxNFhhcvB19raUpi5jLwcbuWWwSh1EaWthh5wEtQvokbTM5W7cFHqyBwzxVaguRs3t43K5xznuP5iK",
  "key22": "2ZjJVNXYKQqqAnxnoWfzmJVe83F8s8XdSKmaQdVVKAHrRyT2G77kuTLChtwcjXY6V9693w6tLru4yVKcx8veU4pA",
  "key23": "2prF6dLdFZGGGL92G7v9QikuM56YykrdsudQ3dbeBDqfqJFEzEmno63stCzVjeC4qASbriMZspkj1qkErTZkPexm",
  "key24": "p97UZkNRAbknZhhG6b1561xYj2WJA5WuT5VFP4YXk6Zfip1j32KitntQTBDeffCAZmMcCaPcNjyj93meNzvHBpe",
  "key25": "ZbUDhRsvaqfLMsHXhwak6cxT5VdZfhaR2267J1sojtFRQyHweJSSNhLzrJdQR9ruVLdhzmpN93tV9kJA3J4UUv7",
  "key26": "2xeoJmeMYjG8jaiFvnkXEZXywLcgNuQA3B4oxqZ3JH5Re7mgdkWrxP3Kf54kxJBndy4iRTsKerGCBN12i1sxd2yo",
  "key27": "ivC3b32U5AUefJ6r9KYP5B36T8uV1SCqUbVaNhEGw4jqASLftPAX2jeWYNuRxrkD4sYe95Qc5qn7p3o1mfEnBAE",
  "key28": "4Pn9ouftEXWXr68vx5CXReVfx5h9fekBBJTrXY6P3SrFanCEbfKCoiMo2mPqZtdEjhzY1tGfTNvayqfpn1jYzTwC",
  "key29": "44GVkUshXyUdeJHyTkMRdjixH4U3cBKWHRLsNzsE8tLyWHBmKVLfjuDaiJ7gxT3nu2NUuCmbvagGHffmeVwnF6pc",
  "key30": "5Eqic1Catp5me7Stj7AB72YLumB5yhbK3nUJYLLDB4VcAQfPaq1gPjbEbynWKczjCzQnYgN3bppf2AVUwJxkegqF",
  "key31": "5HwtV9sfQWsp2TBRiUsf1oQA12hqgNuXPNa15fwLAHaqHoe1QLrrE7W7b4sCa9P4NGHmTyGxse9imnohhQkd6fH8",
  "key32": "3vsQHFvkBVjax3Y1hPhnPkWUjg3Wja1vBEqntnC5uw4KcRGhrhA7YheXag98HXJyGoukve6rJXofj1n1uk682G3u",
  "key33": "65J5MsTsihAiUFbAz43ekJFqqzJZQaaMzPkqSXCHrxp6wedjWPsgGSRwF4SzjafYYu54eukSENfWG4gcLnfbv1Pe",
  "key34": "4XQ6K9DKMnP2M7QDe1Fvj4tQduuZo6KLpTZkYH9rRKZ9t9DNXXX5qiknxhv1buHjXdZsv25zjLXq1wsBZE6EvuUc",
  "key35": "32nceddo7miKiF8WAziu6K8vrbJY5grLdUjT6tsB8q4j6qMkoLKfpyWN8rS9j99L7CsqwFaYtL8PQA1rE55LsxrC",
  "key36": "33fz4s1SYfRB4mfYyTd9snqAtX9YkMczb6Zpwm6ZZT7VQgcfg1StVqfSsDo61trdVD5wsGw13CDHwjZJP2FzGDa5",
  "key37": "3s5veTfBJ3vq1zb7sMzhmqv72ejp67DzRBWmVnk9bVvAh8ir6TPjfKio85MLPbZ48q5SH7TNq5AvtbVjhrnjtwbH",
  "key38": "3TzpWQbFWAkzwRbCz2CDdc9rjYE4BUrhha7frnkpkUiHccBWBQD4PwoqixwoD8eMcaWfrVs2vsmBK2LifRcUPeCZ",
  "key39": "5RHo4xvhF9uKECGp6LWKvn6gC8LtiNR2r2AK1RnjtGj1yUVALNF7c83WJSTFaa8E5LrotHgffMDDtSEJPq7VzAQs",
  "key40": "4sN4ktF4vKBtHSwUjsb25sMq956cRW4VzYdbDqxAkYPJF4nsg13yromkN9hgUGbR5aFFnSxASuos87ycM9LtWLd",
  "key41": "2fsyBz9izHaqq37VCV2o4Eaq219qLTFiidR96wzRS5CV77kWSBwj4NXroojSgqXAxcyHckp8y4hiFj7Z7Y4oW957",
  "key42": "4veYJHn24A98M7ojdrSrD2MikpK1Ky4eDkTsfe54ToFnKDKXohoT51MQEqqECFeAfnz67L1ASxJr8nPnriG2uuM1",
  "key43": "3gpvYhdK2Mvq8KK7rzeTrasb9SmFyG93udSJnpnEgVARUvHQu4VvKirtCbRdu1yqqFzptw4PgetbeF69hMDMt3SC",
  "key44": "4ugc81v7gHWqM3NLW4dGPY5PitV9e2Kjo3DLQWvCMRD1Gchr5cDthXo4iJ7iT3DJr9bZSE83gSpBKCwV99YcgSkB",
  "key45": "iB8Sw5joCrT956WobQR3QP1VUAjxcTNj6QG6sGGBn9zrq1AcHu7kec195nkmjUtrNjfq4NN59mXdo7YcKd8w2Yy",
  "key46": "4vXEsW4eATPQvU1DrMRruLFGDbZuhBgxYddpkT4M9HwGBnAHadoQDbMVRQYyc7AXgKSpYZEGiRcwWdKyypE6H7Jt",
  "key47": "2dFqYahfqzvxdptRnnCEiR4k8pmVjGZGtaoCCtbFk5tQd8ZWvSmbiEV7M8Mto6oeciaSByu4axrJtjdqsDWaoo1D"
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
