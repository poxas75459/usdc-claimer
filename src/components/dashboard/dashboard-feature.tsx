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
    "52bBtESYHGn4FsenEY3MR7PUz1iCCjVZk4BZogRadMdTHEQz3BRFvUx6QqVogG6Gf7tu9K4YFx87ddTcP2DjetKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uyVTFpG1vFuqmkmYynZNv2AW4h4mSwXHztGH6cNvsjxiryByRU8gSqtkGVVQqSLtZTuFeo5bRRHPbVda9YiLaFk",
  "key1": "3B8YzwdepqsuqxYhVWAjtp8MHD9eg1Dc2dGZmqC4StUWNWFmy31BhWPheQ2fi4zx4GkdyJPb8V7q9jpcmbwLtyyM",
  "key2": "5nPh5HBnT9nvv6MgRYBpDJeDJzuDa78wKgur58AxqG2F6a34jnTtpBm1QsGYgeEtGqdLoLmFt51w9JeUSzyC3pK",
  "key3": "3uWmHLw4jjfECBeNHwFrM86Tqmi7cjsqKPtEKmSbQQJ4Frfedvb4RJLyorgE59WtNooTvVqSd813XLwW8wDhu1gf",
  "key4": "4qdQTGnHq3zSxbhiSn1gyfK6m9qD9bobNLfgMNaUTfrakcAFfx8ed7YhPHKanWV7LtqLTnqRbUKhyMQ9nYzuNBHv",
  "key5": "2TUmHpeAwowEWCU3MAV3rCxWLN9C3NBpztGUJbVsGA1tq3gh2r9nQ4yhsxYYwQW4uLMMVdMzdaNvTBa5QH7EgMGe",
  "key6": "2vacCYs3249h2g6Xzro5Geb9NBkqZModScPhrXKXTSBpJWPFwn2dMAYWGBZWLMDepwz3Cn41GeLRy4WdqhGQBtWC",
  "key7": "35aoqV6vLEoefKUk1xtErzSpyasn4Uy8Xhr41o9XfkoDSLJsGhbzze1TQJ2ZUSAWPEScCWALmNEkb7QZhwg1SVeE",
  "key8": "3peBGsonYfQAeGieMFhothgoFTfnHhAYyDYmcLyPoKSR5btmNyHRMDcpKBNJc1UNb4okLZbHgABQGkmdriUJW8p5",
  "key9": "HxhshEvoAfSX845aSE7RXTvVc9d7zdPFArBPCPZEtxcGckDx1uE9rmTKxeSMK35JjLHw1qZAQyNM21ZNdzEquJ2",
  "key10": "4QgswXyLLHBDLWmRuDj8JWPSJUai8nRzpRZh6fHEnhyNKntKP7Q94X1Wr6Ts8KsWjG91kA6sJMuUEzxTKEZwKmDH",
  "key11": "TDMEJCv7zqay5RwTJRUzBeoALwVtamYxD85uVNvaVYkdrWFMo234nCZry9jcUtPworHPSEMqqBQqbVpCeLXef4v",
  "key12": "4RhN41igV8vbop4EMmmKcFtsKRawctpJ4ZJiiy6T13Ld2Uo2LpUzogcJ1e42MHZSEyeUxe1mLY1tuDfuBXomjxK7",
  "key13": "2h6rTxHzCtZGcta8BcDSfNsxWikDsuFoEKsDtTY5r7NjzYroHDweWycd3dtuyED9kVzqPozjFqGeYbJcE141gNUy",
  "key14": "5DEx8sCZtTf1AU9JVwaYHVzwiWAiVSivfvKofqbY6GHG8dKHRAdRNbooAjbiyfmzi84DzxAZEQp8GH5y97BRt9Et",
  "key15": "4TDRdH7nn2zRQc8ws3cfzn6kpRvQWKfrE2nLKcqm9biQvXRoRbF62tza6DrhJpG3VK1Ai5Q1Z2ZZ5CbsY3C3uG9e",
  "key16": "HwgrsMaZixttSupyRE9CXGrVimdZS7xnAofVtnXtk5FqP9KzxdxtZFndvvQ22QExDweVhDVtfBnR4qdtXXGvDVa",
  "key17": "2tstDJJg1MHmME9AS6kTmyAszDL6pTwoymiusDZNZb1oNfdcFk2vD3B3DDqahFFPGTAGRVsmgqdveNjGj2tA2Dz9",
  "key18": "28iFXky2BQZXKaBCCCokhCH2uxBczguhZesB3o4RpsfzH1Meyn4UC9HxsDXezhrTHN9c2bDsM8s11kf8JziJL7wY",
  "key19": "Yt5RYfMJvjUavSbbf6cmDVtzQRu4fG3c9gcexYqvpLaRi9CSNV2hhpd6dhkJEJayRFz8q4DnJceMFodwhifhUjs",
  "key20": "2uLdUjG8oiXnX7PUm6rwZwNQywCE4uGFUmjjniGMjJZmmTikCiV1JUF8jUdSkHnbkPAZ1dy3NXJVeVyWwy6qTUB5",
  "key21": "83uv7XWs33yS6xmTGRCzsSnQyJ4r2ufdXvnmS82p4z2noqiYdV3QmbnnRYxedahH2LJAfx4zSRNwr2BiG6rwxTJ",
  "key22": "66F1hxiZidfeWdYhMwA6wudbVjUZsWDQCJVCkm5dn6ZAmvyqN2SdG9p5iZWSD14mKSPY9gt6F4KP7btxaZgqy9Xc",
  "key23": "4d2NN8MfEs6z9xQyZkowZmqnnaSu6eEyCRoE9skrL7f3bZt9i12LqZ5yDr86urJDkTCsiYpwWieS6TQfR1zk17iu",
  "key24": "2dXCDykTDkj73qANzFdGgpVdUBE5m66hvF4x7ZQm5yVvTBfbgkNaELTxX2FJwYrUQ93Wa5k6LfPHQE13dx3LKMGv",
  "key25": "2ayvCTWYJaqqZDJE7jZMxkfQbfK4t7cFmg2qEqF5WhjtPYwGWKyiVUQWQn71BtvcEq5akphouAadwHRcp3Hvetw5",
  "key26": "2mXaMsJ5o7129DNYmfEX4DpcCsQRd9dDN4Fpkd8KeDCBcFviuk6P9Yqkkk7wpWjjW2d7zzWUHLwEjNVD6cmNZz8D",
  "key27": "2S1M5mSE9aD94ct8E9sLTwbayjPVjULNyFMRfBBNC2P5t1iTDyUF737Xdcej8mvanvg1MbpiBpeYvAm7M2RCSgSX",
  "key28": "PXidQRMtP65uNeyiANt7VsMKTXdzE8a3FLzJpc4RMNsfZoCATJdM5ZcuPH2wXLFeAtXLTPLcHzDPpnYPSQ5yAH6",
  "key29": "3RmWNs252R9fTUJaWDQBnZ7dx6UVippp4STLxP1wHEXv8w3H9pAxWWbf9bPw4QveRnytfk67LWMK6ySJ1gabwib3",
  "key30": "5NyPqLZyxdJatAeL898WVQ4X1i9Eiu3bcfYSajgfJpsv3wRDB8XG2ijQqdQCLJzy9YA8SUyg6gD5We7diyUYdXDA",
  "key31": "4P1c78reNBBJDBJRbd2nKgAVTaVLJAWzbPP4CqyYARxU8EhYoiitZNYKegp9XnQDhEDTMieXebD5NanHsYpq9KjS",
  "key32": "334tLvBYZvbCUg1hiLV8RUdm1FnJiqyYB357E6XgcR5GGKJyJHhC76VN4TypA54S7D8gWuzMVty8Duo8V2wYTRki",
  "key33": "phpJeMmCpTW6EgiZVhCwk3GutKyMRM33tnfLi13pM7SD9nhp4kmFnkWw739zkKoMaAWzN15BroWn6Bjsex9hMfG",
  "key34": "odEeRXv3SPoqSmtDeKYjPaRq1snM6B7AUW8dAaEKxRyhVr3K6NiPkxr72MqMB4vLouGocgppPwCqxZLKfKQfmbH",
  "key35": "38XuCRvjwJw4z8QWJsH6HrBntXFQiNtTDPeuYpBz4joqzgy5QqvPda61CRQxeFFK6NBTQfXrQjEKoDqE5gdgNBP",
  "key36": "3K3wZJ5ZThdMeMno84viRetrZ8YjRy69u1vGKcLuJQPMqCoFBi3wTHdoBHcZ9WzyRU4mGuDrE6KnnHxSrAtnZSFU",
  "key37": "2QCoXGM72VY5vXpdULXDuxTpxVfJcwAmXr5oChwDuJd8NUzYxxa4mE27TUCNL1ML4NuupDZKECjGJ7V5TKnBuYsE",
  "key38": "LLQTaKnmpoyZRuoZErXppZ8aaa6BZkPuTLUnrmN2qb3xqdpuUZZRWdyTQwsicvHBCVxcYdcawzJTMrcAgrUkHaJ",
  "key39": "3fhq2k6T4mALJCUNPNnXPVitHWgCtuBh6JBy2jgFTdLyL2xz4PQt7WRj9YtQ5aVcCg5ujCcb33moSF4XJSQ92QCT",
  "key40": "3qKNE9ub5x99r8k6sqcEqYK4BdkMe7aEsy67NXgNHwCdu6mtR3wyRdZ8Ah5Jo4Sgao55NDLf7AS1hZK4wpHAifbe",
  "key41": "53mdbmLZuc2P46bDk1WARPD6EdWCs4CE2PncyqHEXXGnLqRrnMWXxnJuATMf2HFdom6GvPbojMHDZFKN9PDZKncC",
  "key42": "3RwX2kF4z8Ty9EiNXoydHbSvGjGHpxGE7SKfE1tefy7k6bviEVmbmLMdhk6E8vdNiNshsVe6sYpZsrGvNSMEZC48",
  "key43": "4uiHBG4nmRfyqUYsnryh3sxqG2GTewGADGKG6cqV4SKn3SPzHrVjNrySPNHcJdN3k7xyh2CpHKvPutSDiR87WFFd",
  "key44": "3kE2TK1wn9LGR57raPLQVXc5MNYVAz7ZFgFPSLjcLFAWU7V3iAE2tVf6jAKAGZt5DWgGyycpDELbLLUpofDqLLLv",
  "key45": "GG7iy2CzxfjzVj9eCgbASUcg8dT7KpSJxPP7Z61FGnLtYC6opJz9aV3jaP6fjfeRtUKX8NpGWZ6rQzVk9D9AeKp",
  "key46": "4q3HsxpADMFwjYQALVmgPvRxiAdipvgFxsK4fE2mYoGc68NqR6NnF5zzv1S9ycvWMWtKUU7iA4wQ5F8znWc2Gagv",
  "key47": "44zQPSrSFYTfFAW1Hrk34RQVkWTMtDYUSSgdmL3q5hrZTo2iKRohvYxesUKBCGXRtCJVUF4nRVrAcwHVyDWgA3j4",
  "key48": "5YGnbu2N9eRvM44KPLQ6w5YiCYAiYjDwzm2rFr1ZvChiHrh8zt4E9pTGF8r3pTQc8acYzsNLV95cVEFCX14hcXex",
  "key49": "599Hu3niN1HNHehv622zburVGZ7NmhySwgnPSdYw6sJk4SgPbWZh3sfeMPuqTnJvHZj9HLCQxv59eyYSkcHv85ee"
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
