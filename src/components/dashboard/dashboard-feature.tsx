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
    "2MWEsSfi5XMkJtA9AbmR6gqJmpsRwx94AriWMrLPme4iY7L2CSiuutjBKLj56gnZDkASnhbceUJGEojwywYhCfJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iBWCEAwbNjefMm1RPUau1SsgozDEWDqP4STc1dCaKbSzNsDXAYLS6sJ8G44aEyUgQwPg5cr9yuzy1bXdbqXa3Je",
  "key1": "2UQJjHGniuqviSbH9WPm6Kb1AtZZcVH8eJZDDUvgcWTkxmcsV8e9BCNZoCtN7NNV1awwTF4HY6aFz2MC4hzTfAx5",
  "key2": "CB7eaat4a4RXvw47MviruWgDhuw1U4mJYJRiHPgck2PQjyZ97EvUJUHeY9425pFSCGTV9MHQUaeUDVmicdVoyws",
  "key3": "3m3PBonkiHTvfdCLUJxpTKUyYdmVod9XXNpL1hMqCFEs8YCFnJdwcavXeGXdwLbkP29zYKzf3s9bNARUDHTnGYG",
  "key4": "37fm1NpgmtWtTHX6qSVUPmJLBVuuWaRY6nwFoshWRh7GbpBRjUMaasuQfUZwxvGRGSviECLkLCXHSHRbN9zb79ud",
  "key5": "K6GoWjHwpdQ7EWHJKgYBKP94bCNzD9ScmHsq1K9gxSny9T8MSZVH4kVitR3E129x7WkFrRzXMc13gdd2otpgmQ2",
  "key6": "3YmVNgZBzVbH2eQ21KX1R1ciKs6hWmAfgPpSbK27Mk2Ge4KBSGHyorkaPEU35qKGmh3y39VGVnsE7EBGAMtv5uNk",
  "key7": "411yQPHhE2tskm7ucg8FVKj2DJGnEr5TW2KKpjtv5ek6r5nNu1tUJAmCAbHtpQk6WVnjnotqG4Fxg4kdPxhswPez",
  "key8": "5x3Cjq6sAs65PCeU8R3twe3j5E3VFb3eb2cZG45GhpgpZjHf4xtPDna4jDkX3iuHF7FWk3cKkXdjhxiYE4SmkuSq",
  "key9": "2rCMhCG6chtxezeZVUhPT69t5EnqNR6ovFQZ6ugh3puFhpQ5VKb6HfsMhAfRn4jBcbPTHsEmbP473GNP22TjiSwS",
  "key10": "2AcNpQZDvQi3ZdqyJKMfynnArHwWRvwoWMqwcqhot2M6qNa2Ct71sWmVmdX8AMAGNmxMyjcVmo8htGH8A32eXrD3",
  "key11": "24a8rGd1AXsxD5kcR5TYwyspyPpRZZvspPVAijbxAG619N3fBzCvgcjYbgnqYjyNj7bDEeyb1WEBwJSqicBWFVJN",
  "key12": "3TQNT4LsDxjnkirUVnNznDTYhebyPkot7M8skRYJq6jwfkPK7QKFA8Z1rhGErKS64x9AofUGzwAhRLWGdTKAVRMF",
  "key13": "4BcpkpXVdoD8VT7Dso29w5oiktwe2kHSEoheqoh9KV2ebswGbVatJnXMifTuwJvBL5y6y7MCAxaxTy26BgqjQATe",
  "key14": "3AyZ6jKHkbnAMbmudSn1vKdPt3LJf28Pp7SnWFkRapNrAzdAaCavpo4irGn6DiYerZ8jK8CZDCGaDj6rCWYMmrUi",
  "key15": "3Cr2f1aRo9ezdm1DwxpHY6JQWtTCdDXhbQ9eCDnaTcPzD5BiL5TC32mb7kSxtDUhji6vec5vmjuAQZxL8D6kagef",
  "key16": "2EE5hiHeHGDuRPbtX4kzAgvGFoxr2QBpcofi8xgiLkBoC1w474tzzbbSrvNARiik5tXjEAbJpRwX8Uk89Ee3q867",
  "key17": "TmNEpybcs8MzxdV3vw8R7aZwoAxcGDdLtNYjrQPMPS6rrjkXejPWhDA7ATaWGprQu5wgYN7BFbLyBBcAVzowK8w",
  "key18": "4iH52nK533oxaSP5uDDymU1AfQUeizHMNhF86X2nhxcvRYSuxHKeiy84WFFwMD9C8TxtJzkFEhCaNaCf5ehTPpmL",
  "key19": "3tTM46eVZrjGpaNT1tG6HDxSdaJftWDDrnYfdnDSxNW3NetxcfsuNp8uRJBPWWhWrG51pRfrjyqFr8Sc4uE1yJxT",
  "key20": "3pAA5KiqxSD2h6o8EA2SAW5wiU3z22RjSk5pGmJDC1TpYqWYZ1Z4rJURHdfFsjhTeqeo7Wp9ZeZ1h1XMcQJ9WF2X",
  "key21": "3g4zjA5L4qV91xZ213obbjSy6q6Cx2jctkRRQMzNB8cfwTY2jkx8ULQv6A5wwCY52hNcAWXAP2tTzsv513P9i5Ly",
  "key22": "4BWR59xwyXdC7GyRafz87FNKJysFURr6oRgwVRscK1ziunfFeWcPCQoXeGUzxzob9VSAZvCtpKeUXu8RPMiGb7pm",
  "key23": "3sgG9rQhpJ5MiQh5HGML4L27jvnMWpGP1x7g7r82BagFAi9SDyenW11Pxr6wXxxTLn7Lp9jGSwwp1PLUDiRTWmdU",
  "key24": "4z1rp9d5GPvJ9Lq4i6Yq5r4bsoneiECUY7MAjF1p3tcXyozAEekDabZqS9CM81xsket2exLzZ8etNWq3ufmZ3b54",
  "key25": "2ntxa5Ffauwzrem3RVs2pGvk56ySM7rzeJsu2X1U2dvJuWyfiKiDiSAfrWJp4Cx2oNakYfptvNjKHggJYYSj7vR6",
  "key26": "RpgUb7qBbS3AEZ3utNG4W3ffvuSBdk5C6JMtdp7k6hpLJrxP28x9Aa6JHVqDMgyPs5FnWy2MrUJpngCqKUSNBAo",
  "key27": "2GEZZ2CbJgR5wgAAcLZmefkm5ARthzBDCQkE9SgZ1S16aodZ7hy3YjzEvkkAGnpD5RoB15ETem2zSn5UxVkLehjR",
  "key28": "R1PYpMiGtv6LTb6NFuqYnEgSqjiZ3q2mgHbcwBbqSP5CUp5s5ZacDuXN7nYjrszZ3MFXaouXZugocqscQQnXRBh",
  "key29": "SuNbvCqoKDofRbzZ2YZWpJcn6CTjBwmDD5JhM2C5fbGJryWLCsvxSLGj8shJnh4T45QH3coMnP7A5pirj99CJES",
  "key30": "399EPWpM75DrYXguL5S4nPvc4cyUeNn6QpwcdWh1ddXmJHsDozUozQaKNUjjSRKQz4uXkPbSJDK2Q3eAfZTAuwmT",
  "key31": "2dD8hVGTJ4xTSnTfK2y3vE32WPAt58xNVYDC48mRFjPfA7ypgTbQUZEfnftNwm5bwVUbfzUK97qcUHcAWwJrMehT",
  "key32": "34C9m7FgirpjsNnJJQ7zDzU6vBaDTq8NAkWf34UL4G42D6tdiMq2Rq2dJ6NiCxLbQVkN4w2f4mVjjuE9qNF2WGfW",
  "key33": "5LfPkPWEmWCQgHQ9bQcrLTkNsXkFbcszGTCdnzMG3XPxMomrJd2NgdyHZk3515oWr7nwaeGZLnz2Eqn7JaxseX5Z",
  "key34": "3qkysksDk1VGt6NVhadsoT2ifktLD66fH29e1VZs8h3SfMwGw2Ymr7BKAnoyAsSDPivYR7mmKZjStGyvKjDw2nSW",
  "key35": "3M1q4gNHWSNVa22T8X7pzEqg71igu5Ev4akucaum64aKnpugvL9SCRRvte7mBVRU9cKu9PrRumKsFvW23S35iMai",
  "key36": "4y3ij53nQMWkMifdtVraJ1APqqT4Kf1ijx3J6GF4yzM2YyKVsWN7tNpg5p7bxiCaXWsdvuj9nF5t36RpArzNTWPQ",
  "key37": "4kmmjQb4xZmYwsQA9QfPgtsRJyx2pocEx3ujXNZkq1RTDfQ8rXSunvb4sxShEPkZJ2XU2DpNBYghLk45zXkG5dHC",
  "key38": "531MXHsRRjnGga7aWmPRB6tXC969rYvrovW5HjWowm9DnwVVudXEvSMHAz1qoEREJ9sBCL3tY2shZveXuAwFbTTv",
  "key39": "4MeoXFVn4db6wgdGh7VpadMzNNKNQFbpTSwtWqLa1j1ZCNm1afUXy9uePsa8YYqtZhz3Hn9rnEWeTb7mLczQTQ6B",
  "key40": "5dXaFpP1adNtkfoUFpRUVhsRx1CwpHoQawQYanjVeYFM4JdUcMvB4XgcdiCVM43utvCvENbyYKbN3q9UGcytgWqa",
  "key41": "4xn66H68roRTaMbcSprxhU6UA9mP6NhGQkw3upcV13adntvm9h3UWL1j274FZgB6R8Nm5Lq1596nVomRoN3ckYwE",
  "key42": "3sSwDSj3WThjrwxSexY6V8fN9kEjEYqrQWwuKVaxRkLNqyxofjiDx83byuFe45WRjrSJ8yDyiJjR2AkPD9F8LF9f",
  "key43": "2mi7Yhpnf49av9MJm3hjM6AknqjFVfVNTkrFaitoVvZYZZNpYeC56uNygQCwfzTzm1SjuuKcuJmGaBCpb4Tc19BK",
  "key44": "qNZ6a14LwA4w5tFMrsZiy5ea2dYNAxy9J3tCFS3YMtrPEsm1zi2eUd1512kbtAe7VNxf3v5d9Ebi3okH3An5XAL",
  "key45": "LeUgsEmQ2inj6MvvY6X2FfyBA5QkjtNJ8XZmYUyAqG5gXVqvH9jmny3kJP5Wo1r4wB3ezm4aru2BdMntPLfQHqB",
  "key46": "2Kos1Jrh4JEVJkpx41y3WLY9TJ2Mz42VWrFLKz7ZsdWCX37gzfPsJ6m18BRFmFhpmoPttYypjjJCumjN2hdPMAKj",
  "key47": "4UZA4Bb4W6k6CE6DwJm65vkcxMGHnaZD9GkKrtv9vQcvATYMPLo6Bp1viawR719hkbxQedRWb8KmJVSPDuCcQtZ3"
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
