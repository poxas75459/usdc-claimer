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
    "5uz3diMVDxLtgbePHmHkdBpKSXfbt4Df2ec8t7hDKeGeBxMg8nCTBdM3Gvj3kibLM4gDb7jRCcYE1vFE2C8VhyRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64M1afDNjK8tp4riMjgkQj7UiEBjoy33NgujcampBWRRsDWLiVnw33gED6qmiyxMLSNmJA9Eu5FGLXGof1GEefeJ",
  "key1": "4R7EzFjhtNNbmgDGXNL4Lj6NnJKRHEmjBRjFUBK2V9NmKemkPeqv2YSTAfVSB3YVqkZywH2EG1Ma6UszhD8osVFM",
  "key2": "35ytegbiUaoLWy3knDFqWjNAmugN6bokvfouwB9TenKJYRL9VwyTtPvo9g2dQd2gvrwzuqp8Yx9WVc7UmTcHb1Rr",
  "key3": "5o6svUxM7zYQCdrRXhyngZkvtAnRmR9NBZRGh3xdxEUzrG4aMm735adgDcfvRvbg5c9StGpx93bWHu758yqmffZy",
  "key4": "sumJi4RQAZqKCg1Jym6DR3Tcsm6ZY9mWRZ1UXoiwdmHBCXtRdWHEZu8miHnFWcAs7gzP2YgiGE7XV3egkwBmLYx",
  "key5": "ba85BFP7N6sde3tHsnVYZKWTtrBetDbfdjTKUS6aa16TMtzw1Ph4VeqBn7NgrwnCpv6oVJRonPZbSQAyHrsgPvL",
  "key6": "5VRJEm9iBfEPmTYpFUkKse8vDJSHmvJMhsyaKYgGT1h4LTfkCzWKeHkvKmja2cYPjmkZMdQo5UFP64dGAou5Dozv",
  "key7": "4Ds2U8ck7PU8Vqn9NrrUkJSHMCekoibMPXiAEEkwhupxjSmHGrwZ6PjYhKNFUELBSYeS3ifKqGEPzkSEZSAP6YX6",
  "key8": "2Sw6q4TbKAhMD5RYXVuHDKrNZJKg9nSPZCZL8fxXCHFE1N5fhGvqDAJDBYihYFkcjWgmmy9tzC1NbxMyTtSUxsSt",
  "key9": "4vaF19mrj1qppr5ydRMz2vf5igrLbvDXn2q5NCRdrgK5obZR5iahoGK4G5GZ9g3LHSaSNwZHLXDe7EAf1ntiuCHf",
  "key10": "2vQW8kXrhuDm4spdaTpHzzpxtuUqdK8hA1YqkgaMVKytqZrc3QvtjdvPaT66JbiTLWzW1Ks3f2DR4Z7FnypABkrc",
  "key11": "3MRzsK27vjzJ2igcDxBDJ9PkQmFJg5dFDisnjR9eoUqTZLjmJF9ovEh99QQQA7YXzGmMNJ9JZRL7KV2H7gnEHcrP",
  "key12": "5urBJjhbew2Lz1oVx7EQue6pPBxRThvSboiJc6tvXL6QipWDK7U3GAbaZqy6J3LCL9JzVKyMVis68QH2iS7TsEay",
  "key13": "4mFWrgRD9ZVJSLzFT77ZcLLGwkCTD31mQGt8G551gbEaqvGGCPuPQotVqzv74KVFdx7mBwzrekxJ12Pe2ULZhgXq",
  "key14": "LiY5V1NfkchSVVk6CnLUQRW4FY9BW3EMBibJ2RY7e9u772A89NnS63MAysm1rnCHcbsjc8Bc1PmQAjsnz8c4nEE",
  "key15": "4HrH5ES4xuSA5xpWgWnEDubdwfhtjzJUzx9DsBmRmfJV6A8g7y6gjTJzqN5E7smNTQMk5CBVGYH8qMw5PS7DC29x",
  "key16": "65ErpTqqCQ4atjsqjvUwWPR31wsDSseBW2W2RC2pyQaBb7CkKUFWHyQ44AHzkk5uaNLaeHdS95VFxD5ZU5dNbXKn",
  "key17": "2XxT8Cej6TsMVbfvMkvtxpNQjyjzomPhH4VwQCyevRD63de79tjXzcJhBGHZGCLoasFCJkaBTG7m9idWTHfUfqPh",
  "key18": "5BGenm1qgpaRajPsvKAn5Ygo2fXToiRyXpePCRYtjaRkBvqbVaZDwA6yAag8RHDvm21XqA7QeCeYPp4faErc7gye",
  "key19": "4NNzGEvBMYstVRnnGkRpxYmCNM8Dg2aRoQaJF8LXwgeeLA8XsXe6pJvCxjxbvmdPfcPuGFMmbbMJ3C5XXT6NpmVL",
  "key20": "24wMuEoHdXssWDJ7XUWsUMJdcuM63hmzdCa3L9BQfBY34cE3XXFA6W7Dz8qVDmaGzecmsyfUJuwap5fCnydfZn4c",
  "key21": "2zSxbToCKw1hXk8wVz9HJoqZVfvvHCrSRNyxNmTF8DBGrYQoQcY1eeNmqLvXurTZfrMopbq2c8UHak7W1w7viAoN",
  "key22": "2Yd7kb61h9rTjrEQMxQmdEHHj9KLAMsv1VRqqZEM8EQZ5n86QdVVkyBr6MhgRqC6QFnAHwrpixmz1vprQ3RAHKpd",
  "key23": "3tngF3Z61T6ucpwcrmZyBGw7F3G4Ekd1NCsXh1PyAmUbrmD7V52pdJcYZSoWZ8mUExQaeNBj8UMivATFtdcP91kA",
  "key24": "2VRRugvRCBowEZj8dGvZM8xwWGmeMCyAH8cqVyksyLtzqexmjhft4VCFTeTmis1tbnNVLDEvDUuTnL7KLJpysseR",
  "key25": "W7oUAmdSkdnsqPuz3JUKGiR7vS5joyzDvVq4eDeiBsMqsHdQ84hRNnwn8Z1Kd6tU7fyhBSJHPL2jF44RnDGRgDs",
  "key26": "21jqEGuZN6CZQn4fmTNUbViZ4LHQUFCJft14tAzKau44ranaq731QvdZ478Da8up41UM3FU3Ecd5TrzqWkZrUohG",
  "key27": "3JyZa69eYEKJPVGoi23AZzNePw8Verm68Kv61wNvaAmnQZRfh3Sw9MsqWvEBeYW2yKRDzbJe3xswPZTyXfe2rKEm",
  "key28": "3WrPrAyG1VGufSL45UPvikLLYQ6LqvapdAmag7gd7KjPbJfYHjHQ3T5Mkp2itweuhYMVc7oxiX4kTnLnWNRWCHEh",
  "key29": "3S7DdwKoYDT7rKeQLVLspJhsZQn1cboK9BRqFLED7uN3JzcowXwwRSSrsnwbAahsZJRqqQJ21sa9BHCXxehNkBvm",
  "key30": "4NzGxMQbW18jk7Jkwmbqz434AVnvPXgcchzgdXs9oXUfjjhsLuN6toJMVBnpmfwaeCYWTjPC2QVmZqWpJkruYnj",
  "key31": "3h5tiRjSZ6fEVj8SkSf7CkcPafJSsmTghCaZJKKExro3viD4uRcTxVrEg4KkHy3KStSvQxjt39TqJbGocPBbVUCj",
  "key32": "5afrvhPvA4R9UqQBnoyidkQWyYurt5PDnnkJSc8JpEeRDruUXUiG9Fuqz61RjLkETi5JPd91fJ3CigtrmMcaFVrV",
  "key33": "4Knd7RTvDyfApXS5d8amuPgWQwUEesGYVgg3THUuUJFeUcTYHZ8BpdfsogNZxC2ATbyyWtUfBB2geKgB8CCWz6eU",
  "key34": "33EK8YFcE2zpPB3GkbcawiPf1VAN6ALDUeKTdqzWMco45t75NEuVwWeeDcnYNhjfSamMRxH7QpARosApnL2PNgvK",
  "key35": "27std3dYw1Nf2FwFkkYKDW2ZTeuiRPPb7o8DFBbMgtittuZnEpMDwLT12mn8iKcz7YHk8azwDFFRBp36rPr6J225",
  "key36": "5TF2eyziwK7NXLd9328Y7SsWagBCbd42wwrvL1wnpppj9eiUedhtj9W7uutykGaWbdhUomAWNcH1gtx47v7A8eEC",
  "key37": "LZCE38WTQa98WvhW9foPfN7rAThKtcJeR9LLh7at4kuajib8BNCWGp7Ew9gVYvVPo9N6ZT8wrEwgkxt3Fdgtne5",
  "key38": "4FiXji7GuEVn2nBK4C6mJssauHg7yudW8HwSz2a2Ce9ea2KqgX4vPS2r9SagoE78oJ7jqw7rviComaD46UZ9SW59",
  "key39": "2tT27srNBVDprDzW7bVX8RsiVsccseNdMJ1FT9VeTohwKENxUXc2GoLQjxbr2uodcGvxC5zKFHEb6HX6qP1gPwBU",
  "key40": "4fwRS2PTuHx3NA6f5PemdTD3WNZ16NdWXKfjhuoU2EzEvn6iC4LJufLAuiRoeFevFsTsFSAgCrvfg4y1ZjndNEjv",
  "key41": "chJnxy1xPL4hmfiyVZAMqfBq8Jb3kb6TqNy3e7uUmbZre8vhmTH42ikF5yP55nkHQ1MSEDk6DXswL6eBLsFmxAw",
  "key42": "2xMwFN4XhdavJh3ViDkNeidBKeUMGyaNF6sEjDLZXWQx3e3dX8FQ8VA1taAAEaQ6mNFj9BFfKyg1AtLQWhs5MCCn",
  "key43": "2upBGu8XH25ZkLS2uaxWFDkYNjZxP6XGzLAmgTWjuVjp6teVRzNkWtKmMMv1okbxLwcvZmi3E5aY4duHcvMV9jQs",
  "key44": "bPbuoF3HcNPw2H8qSsUbEWxeMh6wdg7pm5D64WqHVzowtA1XXSfh1YHGr8UBg4L96Fe8t7QArN3feggDYtdKXEa",
  "key45": "cBaYYBASQw8dVCBPnJcnv7gb74gJSi2Yb3oQMtgxE7Er5jc6JtMdz4FZdo6QZQgQHeNoQA5SwDk74yikaNm3JhA",
  "key46": "2cDS97p1VreT3Cf8qcypyYCgz3V2cZfWr2UFhTy1VvfrgUcZ5TKBcgWjW7539hn6EGVRJvzZyaXSMre46RKkP6nX",
  "key47": "2wv1AZDnm1P3chLhErSf4XHWTFbxc2vmej8fUYegVXvUeAHfzk5XAym7vj7qitrFjrn5h3DDZeA6Rqs5Js5PLSvr"
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
