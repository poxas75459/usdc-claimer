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
    "4Xkj8eF2f8Y4vPsJeR2WHUEMqwNEqTvLLBDdR2UsgQitxS8j25apeT4JEeJED4PZSuRTHN66seEcHXVQsen7FvBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31xptUcLPgYAVB1kyW4XzJyZMVzUhSVPLRucwf4NxH2ztJiKonRhLBiWRu6nK7ceQfeamcs1buLWxLpjfsbBR1ML",
  "key1": "5g2Lhcz9FJcy4MpjtwRin5r8GABVaZVjUtfoo1JL73APmHWFTmicAj3zFbSHbYgTL8YbX5P7e45b787M66o1WP2D",
  "key2": "2ddzTefYYD3cdRLLT3FB9VXeYrAoYkG92bzDN7RQp5Bic5nq5Zo2nxFkBDHBTy3M5uEMJSCbCZSikAjCbypGJbaT",
  "key3": "2hFBwjWJK4LevKy8kx4aTH687Jj9B9rBeaksq6rYUMDsSmbnyw6spDCACpHK8NnThXnZA9bVVMTUkLVrbFtx8u1B",
  "key4": "vzmLqjk6fz84vcCKKrQB9533qacv3kxKnL6AnrVULWbzeBkMToaM4TqisbF43A8tzCZ4eXrDUPgQumCjkpFBuiG",
  "key5": "5WrS9Hti4685c3tsJ7SufaTVgQm8LXtpCBdumBMLBuAM2tZQXDwBf1avuU9FGqqBN93JukH3LzVdXbjQj6fyqEjn",
  "key6": "3zp4ENprFAdxLJRH5oAfBWCFLVpiDmKQzVb5uGKTGFuvtSvmY7QSAMEcM7yzewQ9PiUoSVB8DrcuMxVxvh9jgw9d",
  "key7": "3Bm9rdEyjzT5Ydi8guPi4qQCAXFwu9BMrUyXa4e1R2nnY5TNcDedDegoRLA5ZfzddCLBZD1hNbvfEKQGyVSTSS1C",
  "key8": "4ARGneKBTrZkvdoNEFhYeyMjBbPfSuwHmugWwwWxeLv4TEKxxvgAwHFYHKGZkEB65zvpX2RWQkMUkjLiFkgy9cjZ",
  "key9": "5612QQozJopMz8XznxXzEGZw4Z5zGCNaMGXQddFqy2EJ68Bm1irDDVJ6Hp2tY9ck2B8MTtNAbi9Tf7FTb7mLQb59",
  "key10": "4rMKkHqJJdZFRXRNpqXDumwg9qnPrJcF8jxdnNRoicNbrYK2HtV875KADwZw5FcP99Mg3S8k8mqMUxpyC9HXZrSp",
  "key11": "3p6Qjmondv6qWf9stXZk4Snc9EzsJM6LSyxJeUVzEzFVSvQjjpeizVvKEVry4W31AC3xLsKAefgfdeeNCXoG254E",
  "key12": "3XQDKjvFQ3DJLsJhb34vp3mCZpXw5yE5XSWJQ6iwd1SmZfFSL4gTgWBMrmWWDscBesWwroP13wEsNaF84WVQLBvo",
  "key13": "3AhWPh9z77XW2u5f2DNCmZYMZUumzh13PNz2x1rsz997XrE13r9sXfaDLR6KgrENNryETu7nCFaafSJG21aYmPvz",
  "key14": "2S2ViNiPZVd64xo7RWBSQj2qVGXNfKs9uahPC1gQuCPDbQyv8q78PpbLPyMiLwZPMFCHedEGa4SfJ5WiuqA3eJuK",
  "key15": "nqLrzKiEU6gTubAfsvnX7zo8ecdDnSr3eQLUkFEDmvtPTRB2LkhNZefZuDfpQEv7ujKq9o12z4SNr5DRw77Jczw",
  "key16": "16rMToCUk7x2nRBsVPPVRsyqLMLT2VY1wnRsaaKy4dw4mvxV1yAkvo6cGg4naoYkZ5bNRZJPRdGkhNYVVoYC3WX",
  "key17": "4PYNm4ir9VLLDfUHap8WkEpkCpJKMybTHXCoh8jHrrbZMrByDN7PrAW8SFpqN1dxerzW61cpZafp6Q7toz4dpnxz",
  "key18": "xQTyS59ZycsHyfHNmYmUbkZX2yx3ZMYhBHJAurE6cv1FXUH4xGZvDWPNhVDXcDtnuUPsVfd1y2Q9V8S3GNtHiAu",
  "key19": "YfarxwEEy6eupPVPH9oLEUQTML33Zts4xNLMfa8p5xneNZLvB2ekaMcj4Wr8yeu5VKz5Ru2y4rVpgG72wxrg79Y",
  "key20": "218ypHbGRMBvkBn4aVv1Msh2j7LkXSyKDJPwgjKVkbkJgwVTBtMJQ8EUXHfpah4GV7xdHsZHgGwNYv7Dorn3rC15",
  "key21": "2xA797zvTXM6aHkSr5xJvsaUM7tV79VMHyBtCnN2DkGfMy2Eoj4EdRLT9LCgvKWWPz3VgnvbUwiR2PQMinMDgsNZ",
  "key22": "3sPj8sdVXqAAf6kobVFydZ9Lgp5GfS1A2j5vKGh9iDKEVGwf2dyuJpcRdHrjXJdLAbteWqGKGHYZzrvqsiSvMQbn",
  "key23": "4AugyEaY8qnBCuWRt36nvaGWYqYaPFoV8u5CGjgGcNbRjSEMGhnkvtqAEQ1ZnBctXuHPo2bWMCsa3aL2Tdp2UbhB",
  "key24": "3vWDNvDGHB9iwsMkBZLHJboyj9YydfVct7WMv3CBJCY351W2x9Pf8UBhBkTpg8TUdQ862LZzcYUFCKuGzjpzxm8J",
  "key25": "5ALykFppusar8SPuz2rfNHoCEGbsaYrDy9Y7cxT6zvt9u4CsiPUovHJdozHyuGgqJ8XzUsY3PSRqAGnPt1te2x7H",
  "key26": "3L5UZZ3eNhRd4VKXvq5uKMz6AcRgQ97p9BkPc35HtowXKxdKDw4vRKvmMrSuWDeXfjBSs9vQfuhYBajDh5SPE2Xa",
  "key27": "4gHyZRUESZQ3SWAwY5gryxUohWqpjy6TMpC1SqKs3rWzKd8UrBqbPNaoC89q2zPJcveUqeH8ttawSoknNNTXJZXp",
  "key28": "59Y1GsEkNsJYHPrSMtDrwXmhGfeWgCUpXJXZWTqzPUqRyeg9PxJhXA2aiWzRCbc4ZrPJ1frNajnQbApcpjsviYUW",
  "key29": "5nnqy2rXbhcUqXxCvztAawKYqhCDFTBEaBB1G8uqSpNeN8v6WASK4JdE4TUSd7tH1gZSpFvmAn7twTnWuRQY5bDt",
  "key30": "3xFQZdk2zd9pns9QriW7L4QP4Przyzb3NaqzswkHB38WHRbaT53Suek7JLVR7njcia5CBTiXq13BvWxdMpNLd1Hj",
  "key31": "3tmPYShem1PRVLwGPVkAARPv5u3cugLGnUr6nDfJC7GgT2Aq4yHMXF8Dg97GMSPDwZBCuvYWhNFD2Ga8Eb2jwLpF",
  "key32": "2ThU4imRjMTjAiWrvLZYFNH25vgMC52B3VLiSnABdddRWkw3h57Zbi6UDL4ae1mSMCqrZDDG2EqFKZmrS2xDiH57",
  "key33": "XLa5jQppq2J7TCPSKHqRMX7Zx4LB1LCGJmVsSbPvPyuYu2DqCu23dGDC5VCJSaho4FoqYgYR3Cfs2rHAevfoSJB",
  "key34": "5Z51vrKY92WABoWewjyfFKHJ3FwnAMkWP5Czy4LnzTmf27p97PPvhVF3aAmaMHJKY4G5pHqsDbm4FxMq8VGsYS1i",
  "key35": "1SbiehbiAgQQkJk4VutXvhL4kDJg3ZcaFLLdMr6aXXMRt6swZRPcqmu1WMDe7EXq4vAAXFGtMcGTjtCXVEF1DWj",
  "key36": "2APXEPnHeo3RHKf9kgoxshFmzMnj1tL9WEdQ25W1VEMs5nk8HzXuWvc97VWFq8i9hxxf9JugDFbmJ56WcS3VUoVH",
  "key37": "4qWYR2bUoDuAFujpK1Q5pXPE8KXG8SGtwzbkZ1nQG9bfa5DcyZyunZMJjGQdmxEHzAapZqdym9xwasQUM8SFVT6D",
  "key38": "fuykUiLR1ZgsgxYaw25z2JdmbrtTuVfcmHW2BkG4sYJQvVP9YzZPjPsRxkAicWhq7Ft4DLTYmrZU4nvNgdqExdP",
  "key39": "5mRD7HgCvAibHc2TWFz91X2jeFAkp3Z6b6zozMhnXEuEacfeGD8AuZyhzLKThqdmqtS9S3SiJ8DGfMTp77YLXZTM",
  "key40": "4j1ShMLyB32QY5a4BHWYxQUDEZgJWd74L7eNHycMqaq4diq94njhUc28BL4a39BVewBwhWpkYsQ9kG9R1kmxQM4E",
  "key41": "5woxAcCbyVx51KGQ1p1devT4PbyhDkXb8CqAsSSFQ4NBXFRKEhu8Hymf7cZ1t1HwiE132Lvs3MSs1EDoEeh7AT9T",
  "key42": "s5NjoxidFn5MGMuXPrninmSEFCChiVNKQtdP6TeqdB7WUEYygRnnbDFVXAM7Y4tRcE5uQCArxNKe7LnsDCfxbk7",
  "key43": "4TnMmwczuYoq1Km4ADJMMLgJ9Evv6DuHpJaXm9MpdbGKCzoca21t7KiKeeDnAKL91cFywzWwYGbGuWqyp5GS116G",
  "key44": "2pHQBHxJmNGajNw9wwL3SvuLymiSnQZWJ7BZ2yjwCjxJEb59wuVsejhAzQXUWgXwdqZSNueVkHbVVWkH9RghYcTi",
  "key45": "38RceUZV1tsBBwHwPEp1oyS6SDXtL8uydMA2Ydqu24S12jZyQ15odS8edARHP9vbDyqYE5HW3SDw5CeM4YuHxH4s",
  "key46": "4zQcR6QmPd5ZEDqLSscAu9sb3cKdBZZGyW7EcjRYqQFjMkDN1dsvkZ58fFXpQaCh8mcCp2WwFEivFhFx3Miq5KFb",
  "key47": "5Ay35oDtDDKyomKiarqnpRFuUsDv4dVNmgnh2y4TYuS5VE6f8BzeA9jVrpvooYybijSR66DGW5GKbe3uBWL1zBcB",
  "key48": "2DRUzhjHcdmjmvcFh2UAHci4QisxQMPf7mEogXZSSeZxChvyu4hDe8Z74Bqyrg6eHu5bDd1q2YAZPVG2imK7tGZ3",
  "key49": "26bFiEqFZc2krAVd5Rir5dJZ37HTUpu7G57rngrDQWeDmi4buAbVN4ZRmiN86Y8a54SDawr7rnDWxwiECCEgafj6"
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
