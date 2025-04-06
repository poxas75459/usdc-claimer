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
    "5e2y5NBgYiR9cTSN1k5NN2JUa2ibFhVDpS4btwZkKeAm4HJaLxdFYCSAwSHfBjLbczAeJb5P16b7maBCad51tEE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ouiXsbQXifpn39ipCmSF7yYXLmuXRMmkwKHdLisHpzCt3MDi8PbGZWgcAW3qbRjxDxPyTk1wLTb2fXNQU2bZiRG",
  "key1": "5shbDsmFMmEsjVNLmwTpxBh94Ryygj34dx3oSnQrdBCagnvgooMcXHkbZJ5RowD8ywu5ZzQ6X73wjLDfa5Jx1Lqn",
  "key2": "jaWYLNAectHwHoYEzd128HcYb3vVynHaaX61UCpM2hM5AFGkBusA9J4XxVfUiG7VTuJkP9TSUhxb34TmaryQPcR",
  "key3": "5KKE8PJc6pNvEk7AiKE9VDZGuXm2PUBkjbvvSMW4KXr7mESLwCnTEqM876Wq62FXbgRGLttkYf4kCH2xXCnHy8Kz",
  "key4": "5XdAiagT7nL1srj3XJZc2vW27UsQWyuuwMn4y29AHv5VgCqe1heVwa8T4RCNZXM2Jg1ZPRA7h2ePhdz93wepLzWp",
  "key5": "43z6GGEYShVhcMY3YVpyDGYFQvAiSQSs2vpZnuKZL8YUUS1tZcv3Np5Hwf6TNE6CLMhd38eRcgmGZnihmWy31j2e",
  "key6": "4RMWog3cFmWSyVXBGhiRctbhw7KkfMZBnAu6efGXvbaPZcBezrDAWWA2TD4w7im1s8wM2XqSMk36fAd5KnVnzuCf",
  "key7": "3maiTj6qSEBxXpqpK9V5hdL4o6ozAxLp5Ah8iC76oFDFpogVsqPHB1U4p948sVxPgkxsriDsEZtCxL9jAx1uRgQ4",
  "key8": "TVyHik3DKwo2NitqVv88ooLqCxkYLQZtapQFx4ByAnB2h6fL9UKMfLL4t25isSrYCx7J9TvTw87hFJrk4oiVxxF",
  "key9": "QfhNgt7zLKJFAxmJEEgzr7aZAKmieheCwHWTNWU5m1ajvR5qZZtcHCGUCv1mFq34V8EZmnQQVMYHotx2UKykVoR",
  "key10": "36xV5tbdUiDnH1xthnwUFezbqDKnTrDm9KJy3ocEDYjkPSpcQQ9xWUS7qUkxLTjXjmx1PL2GN8LrxEYB5w7H7k41",
  "key11": "54P76gSiqaRq8HqbiBgc8mLK6hsPtnPke7qZGPiSuEAVYqvZTH347R4SezoBM8MV47AXaiAqu7mHMSEHvArcBvxe",
  "key12": "5B3UREQNPBpUAhjnMNsZ2vKj6BGTdAnswzKKsCWAYuyLcjAFswGnyML9hg3vhZfbunA7oBEdSZruNYS9fSMBNYer",
  "key13": "4DtV5a9FKcxZDAsFfQUaz6wpMdrJrqyrTwLpcLSRSmeF24sgD9xU9hWGHC5TJmJ74YfgWE6PkB1NWnK8QaRBVdYK",
  "key14": "4tK6LTMsZA3Hxx9pDGAsW9tC25YZJ1w2gMPQypThppfhve9RKmG137drpVdsdg1xvFYTCheZF5KFk3pv9Gp2yYE3",
  "key15": "5piPNGyg4idj1vUqSnhQHTP5DprCEJ1vEHjxURBTfBy3bZcyxwFfRuyNFSaCXsuDzrC2Eiwhja6HrAAqyPprWYSC",
  "key16": "5xa9cLx7M9apbPWWrAA5sq2hK1JqZdayfnAXJuUnpZ1eoPgAevAhVdXQrM8NnohFXp7GQNE9a6Nzw35VRS2BbzXT",
  "key17": "3ZBsm8XcUWL8o86DKCvcF4ZCavpNmCcq51kTuk1b66PBmAWbj57EJLsNe83c37PGNU68z57SvVjpfHrK7XwuMUAw",
  "key18": "5VoJAddUQ6sRkd7MWdHmPNB5K7Copw6gZeTwLweg1vsckdwZFxVfhtPbS4xNXAVJD9wBJQnmfAc2xxzWfcGsdxpk",
  "key19": "3qMFBoeGadJVjnPgz4F54JRP9SGfQvKAMYnWcCsXuAgse6K5W8Fur95HaCJxVLKwUBrGmEgETEu3h6pWGGJwgrWS",
  "key20": "Hb5fPP5m4CLhhepUSXpLcJGKVLPhvbjrWLPU33wynkxnzD1vH2GzobTTAig9x9uvCof7RhCW2iRMUDBwCZr98cg",
  "key21": "2kvPnvjahJmNj6APe3ZejnwEmgdomfVSgff9ZDWMcPp5nWpqnFCjeDMxzPcsB9PBDJRRdjQtxBnuu547fQuiWwF9",
  "key22": "5m7Ljr69iGuK44h7drgyvFZASesGWdqjEgaPQT9sEkfc95kxtoafDa8BJL3mXNK1553fkMVfmwzdynmwrBvQZqvn",
  "key23": "286LhAmBHP44uEyUryXyRwJXQEvXMA8bt95cTiJipL4pwCEX4wjTaybzzrR2WZFQvmdfoGP2mUjEdsMp7jNUnULC",
  "key24": "2meVvhGSEAxDj34XwsGsx6UrpP2udrJBCpKZfZp1b3vG3ftYQvadNmXK4gNvyyuLiNXf65x8uVADJSURpYtUdHV4",
  "key25": "3MqXJ4hqLRhzZseC1vqFwHoadcoorcUJtcx2rigDZ1WPZTHN7vUxpCLoxFsqzUuGMkVAwAgiXYdq48YSMniSkdEs",
  "key26": "pPAgG4Ygt24DULHw4xAKWb56RNffs4P2rVyiEKpjv275nn1WLGiwL2R9USiUqAHdYPtV3dDdBLJjCiMiC8WRzRE",
  "key27": "2RMPSm73duBPPWXpQqHDyaFdafUTeoBea1vxMyBfroCQsjv3UdfJicCPW35Tz9PzBa49GNhKWiqA1w3XWsfXmFXU",
  "key28": "3gCLrQmqcfazRia1GSTAAdtvkLcf4TYtk5BQyPAMTttmFvDBYZwf8qQbAcw4ojBQQMVaRF2Q3SGndWn2NSYupGkU",
  "key29": "5nNAD2Z1xAkua865Rm8JPmCfUjMWysrYTr2BPUcpi3u7F5k22SgBrTZASscrF1c1dxCD2X2XgK5zJ5MNL93YtsUH",
  "key30": "5h6Sg3Mt7iJ7MNBuowjqFUuwpKXhjZJUSVTeo5fFvanCXUDzwiYJT6h3aMjC4s2wYMbBKCB8HEV1DPpfoVBfoQRn",
  "key31": "2Fr2v6Knn3HY8YGxYb1kozwefMLMmt22pCPJAtncR11qrZmLBi7uA8Gi7YwXVWWb86YLTGWXr53TrzyFZz8hCDH5",
  "key32": "51xNd2h92Ry4yJdzuuceVzB8KkANmAy1VXAn3f5axf9gC9wvd2JtTyBGo9HW3UPNw6TbZaN1gfPeUMCs29qFgrtQ",
  "key33": "3afmk6QJmDQ1psdpEJMaN1iFzrJJwY556PXKzQgR8JiDKc5KwA4f8d5QxYjmptLXEtqWtLB93y62sF5hKChvP7h3",
  "key34": "4a72BrVAkTCrSX6mn6BtFJaeoxseLvw2MXdVSBPKRdb7zh8ayU6gSUjDmH3JRvjuATpjzFLhyCp9cj6mRdM42NLx",
  "key35": "3WuVfqnyxS8VfBHELdomxjdMeHhFyyFY4WsnmBK9mfWeCW1mwooJdtLfwer4UsPKk2TcK35awHi3sjizKW95izUK",
  "key36": "5QFUw7HzUQUikgkkkHkYDXsneFXmhjVDM4p7TwNmedXgRsMsKG73cQiXMdDGEXfgUvKpMVoF9sp36DwJqNJJma71",
  "key37": "6Hxe6w9H5pJAhJtkrqkjvWGjqm924zgxUBjDk7g5DcwXtPDv5LzKiwRGLi5hqSaEV8ZVc37LdBsk8YwFbasW2eC",
  "key38": "4WhdGWRAN2zEPD4emXMcQG2ziywfvXqgs4xCq5PoX7rWJgzhFtq62fpH3pd2mmP79EE6Jq9ai9Ys9s7VyWZLeuR1",
  "key39": "3SFgGinHpy3m1Ng9gmRqikwvLx2KTgzRe9N4wKgp4g96RewWjpdB4i5una63KitS62y7aNrCfRVDN4ZJ4k5n75Uf",
  "key40": "3VVK6UP9fuBosHUQTWboePgX4AqvetN2nPM2JLPkMFYNdSvLReY4bSTpW3HfdiYeBCP8N1wp3eBiDFbzLXcWjiDk",
  "key41": "5gfarwuh2z5HxDDzNfLRH2ADGt5Giirb9DPub6qSQNjSd3oydXwnW6BHL667iANRiaYjbgFv2MtqXSnYxDRTAUTd",
  "key42": "4JWEp9mkAZN7NV3B11h77WQTsYqdsZHyP9ZMdBbsdjNSkuYRMVdwHr91Vux2EHnRWY9o9XTVzdB1hPUWMZHvNDG3",
  "key43": "34xADKNr9uWACwB9Axe2J6nndtrJSbZKZH4Erd9dT4YY41ZkScvWDNKi1YjP7X7bJTAz21Sgm9p7SXk17tUfHuds",
  "key44": "44ZCV3ZUiJjVJwkqcnxHkdvpbzM8b5wkTZ27aDRPKnm1ddwJ1FpAL8UqruTtfQzs85QgC2C9278UCaxBWHYkwkH4",
  "key45": "4EYh46zpEsodsCT5gxRYFNTSvCYagauE3xWtjphfzUtCGc5gQH3PVfGjkT8pfCM3Ckh19AmuoLowNGQ7kpkxdyAa",
  "key46": "3dZDoG5r7mvn28t8RX5sojW6Qs19SNPssL99akF6z7UAqcZvFP6fYUktFPDFd4c5V9ajEgoMQm3e8CTmeQDns6sG",
  "key47": "4Xgo7t6o56mvwLLZQLvRLCvVfAyas2XmyZMauMPj9uiY3XhYpfTjAqUiKspBiadzRjTX6jCyKZkkYdGnnmiajzLC",
  "key48": "R61BXmKYcWYp6uHoCt1nEj14KMjiyPRByvMCcfSUrPnHLEqeiiWoQFr1tvSvcUTzeXwiV28zXsMENK7zGCaDxHN",
  "key49": "582D1mNLQikrJaZcfThqQwrhU29a1o4XsVeEEc8jDbf4jH562vB3ikcHASVbAQrsE4amw7HEvsHKKaTt5kRCfKwi"
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
