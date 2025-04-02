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
    "2CsPMZoknrHRegaRVHxs7V7tRTemppTngBRBWT2pVsXCR1rhcKAd2z5ZYfXVPntwy195ywViEc6wyFB5K27QipPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xMtPYwHeB3pouaGbouRWrsu8kSRgasu6NJKKUnfGuU11oXRejoL91zuPqQHrExhJqjVc7xDA4jvrQa3MeCL9uGb",
  "key1": "3b639CB9mXT5rxn5X3RUVUHRdQWu99uk7dGg8mkzDAmZXmtNDYyPm8z7vkfFaCH2ZhgDigkhe2CsbsAWnHWnqbTV",
  "key2": "676J3xAvnHy5RPLXUi7FY7wKhrugTDtnUiHFEGGJeg6XQUapH1YPJxd9ogycY44gqy3j7yyb6iPCTx1dfByzhjMz",
  "key3": "5WZJS7AS93WpL2WpvFnzwKu6iw1C2x2kyG2HDadBYewo7N7v9PJ1mBcA22jjmMfSWq9kMV2ksZ212B3CUfu27Bdv",
  "key4": "2sn2koUzJWGs9PCWx49TVv1fxnD5X9udphn1UNo2c1KrXNLZ7TU8rLKWZJSDfA4UWzwrV7BB8wYvRRH9HVuUAbHH",
  "key5": "5t2h7nnoSF8ZZQu1EQ9Z956we6JNjhfFMMNaN8zgEmZYKWRmZnHWA77TN734jB3wfqEJTGkY3f43VUeLt6nd9She",
  "key6": "5odYFbnNuKQ3Et9oNCmCLjBHcimAdXnJjSyjMT5JuhvP3X2hPBdTiA1a8YwH9SLAEwaX2gVVceBVibhypSk6BcMX",
  "key7": "3sqeBs579HW4nAgKpQx94SEvCTzGWSy5WWfLME4vXEcAyatSFXNTCrLwckCo7APhjsDftMDtJTWGHYe12pa9jY8Q",
  "key8": "7jQeqwRYFzJ7Rp8GX3YvK5LfpeDFKsLtf2QbyH8ZLpZYVnVRbZuyTEdNRexUkRC2kodUW61tSPV4End8k7huVYq",
  "key9": "2UntjMhNJb6adi8MBViHeJcrjwPuVs5UtenC5BcinxkCx3f2YgBLhueXddQG6xSFzHayrsyWvE8vpLHN1rZaSXoG",
  "key10": "4AZN4J3fsHSscMqy996XNjZ1x4rJXjKgSShNjHmbBxyHq41SXsYVtwM769sLWMbnF4FAKRSMsoePFZVtpptE76nh",
  "key11": "5XQViZn3EhwSeeW221qEApuRBSm1fj2UGZnYSNgxRoCjhZXntRqDaarVGhQnY5HSFxJozAua32UhYL3zZ2snPtv9",
  "key12": "5d2VwCBMKbiTYnkMdxzRiGW7GtGC6GgRU3ATtmgiQE63jx8kJK5vx5rdvy7F25aJzuxrJRpomcr6EFyb6MyBHbzu",
  "key13": "KH7p2imANNfq8kQ1aDDZ6w13LqmZ37qSRoQb15YLvFKg2ErvUHMqcHc1mDNXwoaNAq3ZkerN8ZDe1iaSt61M69H",
  "key14": "wZyjum2fruqxBKUChk2c64PGT793NojUSZYbjtzJfNa7iPNt4rj4guNueUJjHBJbf9tiwaAZteBokEUDUMCqxTn",
  "key15": "2DGtNoCqD1nC4uZZzcdDPRcZVm1pVcJ6bQKivdtEo6H9nSLji2KxEVqNnbL5i2dKxLP1wHRVphdTzDtP3zqachDr",
  "key16": "2dCkicArJFb8SissQy9qHcmKkFZnUgrDGsndNL1QYNBwbUZrJ4WBHFXsioAunuCgTcwbBNgbhjwcKsKXHf5PDAQg",
  "key17": "yT1aa8ML71SfdGi6EhtoX9ujjPoXrAZnPRYzpKxKmaPWRvFaXD9FVnpBSWejRpc6m1J19gp5u7tdWGCiYFLpBQh",
  "key18": "2tgurc1y95Y75NebntezuLTNb5j8xyefepXswhTwWECL5GhyvBiz6cPjRDd4bTQKL6Pa3DkVWJDYKYDuD4ysFanp",
  "key19": "3sbubnjd9dYaot2Uonv5fK9yqQRTFYsnUd5mQJbPguCBRvic6oYwY7qeGsvm9kn8ufU5LBwGHWW89sE8ijA64sKj",
  "key20": "fEEvztj5qTphiyLLVSb4CFopNNNVAUpouCHRXuo8NB1nig8PzG3u1KzxYNnSEuMa6BycjMunUi7vRgFTP1oTcGf",
  "key21": "49PhMYZefpGx7muyHq2NGMzvFvyDyfQBHNB1R6NiPBZnR2hnBmo1a1gRy1tJHGeqH3RDBPnEwGVLd7nkAvnzuGbt",
  "key22": "2DJbW2bB1qAeozzvte8AeBSdUihXKLppto85vRr1KyRY6GLqyReQTdLZfYm5xakFrugzpXNktc9vt2MUf74thc27",
  "key23": "5H93vAPVY2PHYgcxmDSoBTpd2m99XgxKhtwx2wE3TEE4dsiopCfJcp98gu7dvJRHfMmCLDZwMJPiE1vEaYDxYDoc",
  "key24": "5zW69VjAVwevjtG4XB5W4pmvasNe8ssk7PfQ4wGk7bP9tDVj1xusAKU3BYxvjf27eVddjNWzhtAL25bZgGrxZkXj",
  "key25": "2o98UJsDruYjAANFwYpbr1874XBXJWSQLDa4hd4YuMEk4vwoSsFAaUof7GrkSYp5SGQEVCyTthuQfr3MFbFtuhYx",
  "key26": "5gp2WMAVFD1wcj8u4uDHNrs9aR87BXuUWFfHps9D1HDYBRw5GfMqU2HqwtRzx2zFwDWJyhwq9XwAQXJV3jrqUbLD",
  "key27": "5ws1ckZvXqRtFMu2s4eZ24tKmywWxXTrkq277NJsLBULPbdLs6TbAQ2iDB5kEPbQ6qxiu8fghMGRDLVP8u5u7PDc",
  "key28": "zokA1q4X7JbKAr7jmasYBbRxHuNio4MkVvU2TyBRPnPexjZuYHeEoYWtUbqds6mtNfDizDhXLk7KtofUj9cG1Eb",
  "key29": "2iJDYGYMJg6KEVKnNmkDq2FAQZf1tURkuMVYyoNFu626qu2BF79YsYG1xHGjPCRfWRNtrVSm3TAPgTmWPhWXzAeC",
  "key30": "5tCRLSVBZViZPvr2KKZMK8v8P7ruRSGd4s6AxgvsFV2SJ8G2Mrex2LUamxKKvHScxRGof7tM8etgPjLrgHaoigXg",
  "key31": "7Q6oVpJCx7dYnTNGYiAes7BFRer3xCMub84T9ynHLEDqJfxkWTQMnYQECV9SAxHFaQWR4orRTnMA5m34DXt6Xwf",
  "key32": "gNTBtqE2BNo5DC6VewSucpxZohUYpKLst4CS4D7ofb5LkreoAVdGnQUWnoL9zDqCuxEEMn1ekyF49zEdJNYyBDh",
  "key33": "hcfunT7yntkbkcn9KNH3sBsQQViULspGeYEr4fm84WYBVRScYZKqs2ujna11mdZ8yxhUaey6nzrjjLG2un2nJmV",
  "key34": "5DCLCC34VMWDK75aPmj7275jEdUxGFwKnirtnyqkAr4ZR7AgMEYybrgdC1WfgAny5ZYvUmWtW7pPB9Co1uu9pQmN",
  "key35": "5zcTgpPusDhkBDFW4ydUvgvsPrwyUgHDphg9NnafKyREZj2Rfh3NG6YnmgXiXBr4p8PSxfJgv2oMKgAu9DzBDA5y",
  "key36": "3oMoKF8CUGXW3rQcBos4PSd7ASXwC6Uo89nvNVizZ4HrcM5qytyFWFRVxMM2S13ehUUSbnuU9yLU7AvBhCzDeLR",
  "key37": "5e6Gm4wFnZvMRck2fJaDCRXuq5Vf3jS1GeEY2qSgKmqjwbZxqgozndjbLy9EvgYP11PNL9XN2dN7ju11fNtXx6Ad",
  "key38": "tZo45ewAgZhiT8awWQuErjDPKcW7X3JArTjzqoWwSTuQdoDRffsQGBQh3Gmk8cpNBJPAMiwbGrXK64zNXPpcCbT",
  "key39": "asB5EmgqoHcEuYPttrJ7qgWMwqMZWhcQHCqUiiKCAWRctH8WzNaEoVtPyCNKomtAneaCuJmJi3HqBCVk6z1nBBq",
  "key40": "sFyrYGDQFnbAqi8WVEgPvTd6qfHirXmLxNkH5BHXoNVFj3VC2SDdaBYghQgRZ8DoVde843syGLn5cDqixLQvauC",
  "key41": "wxQvmKXKVM8G6a1uqSr6BWJrFiUUuj1oAHbmRtRKHTgc19V7Nk77CaBXijNMbduMFxZAyppNwsSCT2pzWiEFc6Z",
  "key42": "26zDAkW6z9JgqHEfEq666Dhvh5BVDq83bKAnF8gqufMWzDwHxjNyefpHDvCiEkZsckbV1hkqjax1wz2XAZaVkRQH",
  "key43": "4VJkrJiKHVD5nnBPMQMoXeuYikhT1CR8pMafsLjb87tFYnCFpF3s8rqJE5awUN5RUDCDWWu5ggJ3Ft3KRkyfdRub"
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
