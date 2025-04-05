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
    "5m6Zp4JaU5URGFeLGMWBWECgJ12ffWTePZV5yu9wozxDgX5GmeQTpX3zMQREcnzmxpj3JVM3bPm43MuPYQvBUu7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RgP9WeMXqt53DbFJiLnJZAhAv2p2Pv7Krh4TWEEHAY7bc5x3gwVwf5HKtYGsjLvm6ZhLjC8eoEQmoZM8cBLPeXH",
  "key1": "5chTHGLXYYDQBnBS2jtRXdG149BKhtKy193hNfomcxa2PbTBkcopyoJ1eGYG91AcgZBwPzeMhfQRBG23R5zLo9fd",
  "key2": "33HrpW8qDeeX9BpfXQ7uEmYVJxXVH9GrVewWjKuoeFBFVZLkVG7Br6FUs6MooGTMK8htHA4PefVB8rYf6jvnCXVL",
  "key3": "4K1FDQHVUuZLFAHUd62cmnkVm9kqrKc3E1c2n61jqFjcPwCfZwS5Fjo7KnGMp1wzNA7Pz3jNMpef49A8uFaDYWSW",
  "key4": "2SymSfauaUyuwiGkjwxH5ZPTJCLfyK6m6teREy9d89qsUMo1nWGSVEBQW8gmQU1yhoCjHgHLPxLUpKC8uhvwzVCr",
  "key5": "wAVXHSZZ6kyru6cNLvCVKXSSYTWAxXvpeHF2DY8mpLMru3S9akAgYAW199J413Bek4AtK5ds8eE69KqQaR763Wb",
  "key6": "5wPH177ZQSTpJf3mDQKdzB9gaNnUQ262fWBB7BZoED7DdaoaRdA8kqsXuMwskUAi3gFyV4XKC9fxwci1YbV5sN5K",
  "key7": "5NNuYTJkYDTdkNQJMiAhw22jP2admbp6zpeaPG8Gig6vNUWrwfF8pBLopjE43SQqeWydTi8f6jLgZARLVtzgARFU",
  "key8": "ks1sqLVjti8ihty7B9CF8bNT2ckggVrKmipnP7tBCjAT7T4RAGEz3g7FT9zZCDsGr18PgRPtCiNdQKViYvrAN3Z",
  "key9": "2jhKWLit7HuvtJfWYQ8Cni3okvMQJPRpoZrjwkDSFreUZAYEnjxnr4YYaUgmd8zvAzMLhm2EtspYACZ5YeUhfNYJ",
  "key10": "2vb2heBww2eHZWjp7Bu1ZC3MYRuev9SLWXpCCCHFZM6WzrUZVJRJSPDs6Dt74cDsiRtYMLXwS9YFZD4viLVyD5jb",
  "key11": "5pL8XSQ6vFDeyEvyK6b53GXAnsxHoTp3b6iq45JwDqtGcmk9rCSzMA5AQfmdEg4vxQ3HH3ZqX7HptnDcJ5LcmbjU",
  "key12": "52ZzHkZYkJobQjmoHSGFWEeYFP2LYopuvYEm5dNFNBhmDxZu3ADonv7VN5hFb3dkERFTm2uamcrLhhrjSUJLLiuo",
  "key13": "5LdKfDj7WRDTVKW9L7FXmTQvwidWgFYVPfD65ETTmNmMY8p3zgkmMPVZCnKove9qJSzhgUHTD6Pypuw39fUPkm1x",
  "key14": "4UKoxAbKkjakyWg8rxpZLLzUS29aMuaBqwXS8cht4h8JZ2fcgq1waBTBAMkFsvw5S9w22ejhXymzo4oKaj4NinuY",
  "key15": "kxGFB1XXKGy4xbYmpMcpJBnf6N2xosezPBg4C88LNF4LzMP9tmEMZozZsUMy7yctziHv8mh9X2Kk5S82fEL8kXY",
  "key16": "4X1PodHpFkCyQ8PGZGGpnVV3rfvdssBiw4Ym2VvKTbyaATMe526pGw57YP7hX1i6BRYzpoipWx7Zoe1PPBapKCpb",
  "key17": "3c6taU6G3dtEckztUozGsYL6EscdcEWoiuV1SnPFeX5wSajZduuJpDmgE9YGYzXcqXUHAoDfFCYoeVXBMwtyho1R",
  "key18": "3R3RHBfrGUUr2KecAL1LunCQzhYzGjgnCD6MmGqEM6qP2DB9xAGA8fsxcieEorQvKAnFjeoZZ6c5QFFvR8sYXozk",
  "key19": "5BzQnJAqojMS6eHWsHa54DtJB6Vq1M32fa1xwnpbaT3NkK8zUyzuPkZeKGpdcfChU438GThQq8YmVCepEtL5w4Bu",
  "key20": "391pEAxdnUVCEhcgQD4h7Ah44rrXZaSAMqLgQyLGHaDm5sMjGBhrFT6F999L4vyF3mG8LysjVmTmALqBQzKqepAJ",
  "key21": "3ceUyzj9vYGVVLGUs11DZC7iyaQyoa3phyPJoQJFt652uWwzfReqKGBKXuqP8HETSJ7wx9rkGUMMdj8fUV6PYzMm",
  "key22": "4FC7tL53hQXFVjwKnso8bGhWJMzNydCTtGYzbHo34cw6csLJKtNgxuufXwDrUy6afxG9pL4jsMR3F9Ja2oyytamu",
  "key23": "5SBGcE68dbJ3Uuc8pn6D2eioMGRqTdvmMLRCu1hwB7s2offT2k6SLMkgCdyTv5ekaMHGn2dD7khYYUaMrZbNDBre",
  "key24": "5mhGU2uwiqqjnjrjaGefEdaMdiyM8hfkLzNxdtrmFQvh2tp6JTTBqZ6gQiAtoed1HBaR1iNzQi3eZwQX9kGjESi6",
  "key25": "cnpj7LEq7uvvFyMVxdmEGxs4kts14KTow3SNk5DVQfL69oWM5FG3WeRDG9s3oWwHepBL2z9tzSw9yZ2pKFvrZYy",
  "key26": "3ZtL6fTVLb3KR4NuCo39tjESGzvbncbPh5VmSssz9pG5aTgfTdRfoUy2nJdTvMsvCYa1oBdXRPojDa3EXmfL3heR",
  "key27": "4QTtY6sCiU7tngSZqAArgBoNwDpCFsB3CS9Nq8AhQG8csG6ZKotwm7scijkDvyLTrNrm4Ry3fNfmL2f3NAvHvBYS",
  "key28": "2zWRj24DNqXvH3UmyKm8Zis39eYZZWin3mZXwV9bVnBD6gs5g5HAbEhpJtRb83iXNdQAXMRCagkQs4qFbceKZdFZ",
  "key29": "zwn17Qt37PAu9ve779zsFza4hL3hqxBv2FiRGUPpize3DSBo3onnh9QdJiPZqiwpN8ZPtmbWZCatAmpsjbGkceJ",
  "key30": "5ZcUcGWMUrResdws2rujtEQ9MbjJEJ5WZppYjqLLw57Xb6JSVQLWXqdgWL2b2Mnfhs4WMAhuYjGKF4Mcz85gG1gu",
  "key31": "4y2NmNiDof5bxScxkM64nRMim8pMb79FGGmeszzdzDsxgBwP88VjGmZ9pAmpPD4RhFjvBhC131HpNmFvQdb8s6Kt",
  "key32": "3hp8h2WDKosdEtwMSjfYLRTXViCtpPaJZZyzR1UQkS4Trrxi7yiKBGzeRT2SYkBwbXLx9yVmb5kf2EqKfQYLh88j",
  "key33": "677K1pQgNYhmkZvmnvo7Ed7aFSQBU75VR1v8qjBJXjN9ZumguL9SepxuesUVBUF5puuCjok6yC1XKRVCcBPznFtk",
  "key34": "49rfos9FSiZBNwuxEPHKdbnk6CcptganumRDP2Tu6P5cfdVfaExFwsBaRMwQTzhoH9d18ZQbVp86AZq24wv51pZf",
  "key35": "RmetKogPkPK7jCDbXbesedQ6DFf76MZ5p2pCEtpM7e37uEGEbA4npKwu5WvJgFyWQDiCp16WCTmLb1pKr7BxGZn",
  "key36": "21bhrGSCnrVsas5f1ZBr79HtcCg6wQbUF9xyxeTQtBsHpH45ABjUGz7XgqeuYHsf5cKfuQZkWUQks9SUcL33S1wE",
  "key37": "3GuPxEMijH6r1DMLQwX55aZpFge6JU7JFhpBG4PB2BvhmtwhxTnTzRDYDR419H13nzfm3vvFzCJwQEsE8sNC6mWi",
  "key38": "347f7hQzegnmMWEZQcoR2Ug2vBj3ZwiXtHHo3RzMKS3S373ywcyvrdatR7CUPiZB2D2QgHqMsGGJzm9y78tRPCyP",
  "key39": "3x76pwUQbGm6v8cJcdyDr38KwWRRCU8cponi6oqx4WSQ3CbiThJWqWzppWUdsnoW8V9wDLWYKeKi8ELCL9rcKGAk",
  "key40": "4fz1DPVy7q4x8TVD75Aap1HoFigZCVv5PdLpR4NZ4d6EeXyuCUCv8EJfXcMAdTMW12aSDKk18Am5qmDeNFfFVuBQ",
  "key41": "5QoPoiXC9qeZt18nLUa5mse5qtRqdG59D2CYyqDNWBhttA23v1174E32UczSMwXwdDVrQzQvErXwuzhgNMPXKWqk",
  "key42": "3zCY1vs2uC5NbPmQcndAkFGwktFrBMSazQ1Tf1AgDGg2qEqGruRHTYY8BkP7M8bGvaFAsTR2KZFXrrPabDkgZJ3Y",
  "key43": "5qececbcWGDN7pJLdAMw8AcaoDpxYdyxu7tbfCBfLVEW1NZ5sCV2WsTFZDPqDG4tLyCVBFGdxAsATRQyDeqRppgj",
  "key44": "64RcFVLvgmqr93uEC4jfQx8WXeTunudyDmj1sem8tHGKCS2Jd6ztqLMQjAKybUtxD6zK7fT2kwyTp8A12YMAgGxi",
  "key45": "7Hh9sPJwHK1mN52APNWyG9iW2xLG8bz1pQjspZ1PnVkbWBKDFNqKFZnCqPjqxT1XfWzpTRPHBs4xsxh3XzZySHR",
  "key46": "njbmMPFhRUrGHWsPB9ommMhi9uuHsM7HpVGsGhxNqvXWkxbfdW329VSn96BuQ4hBgr1ZsP3GN8kn6S74LeQi4yN",
  "key47": "6jzuYn1khf7813b6Ues3FJZm499miQqNqg2NKWKtREujL8SBBfTuoEWcubwTtRD6zkCrifEaDhYGMRA2ZUAqLhG",
  "key48": "4a4NYbRobBBRDuUiDRuhRgZcZpbejESFZ16mWvZ6PLRxYo44xf3cZJsTYLvKpjHYfvMMNM261aqsx4HKWpQcCT33"
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
