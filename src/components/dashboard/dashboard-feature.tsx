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
    "Kpo1xwZeGGY25o7iS1wse3VT2RDXnSPPkL8szKHZQGfssgz4kgRwyrCJpwhw1FejQ9UHNXhoUbLLP9k4BoMizNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPVGSidyHJsnLrHA6f1N9mjTvehkc6VaVtp9EVWSD71N1s9pfRTXFeqMyFBCqU2YRGb5ASDu1G2hjedsxLHpXpn",
  "key1": "4SD1137BpNY5Miw5Gx98xc4YUi5wFx8xFPBAF2fQfimLEgzfsLdpWS3dW3YNAj2j1ZiP8yzsg4uREjhiB75ruPim",
  "key2": "ihT7tCu3UeY8DJALv2jXtdTLLt1hCMdeYEbEm473vYShQLtioKVnyK2R1gMDZBK9mGqgowdDb1pwJ23AjKRKVEF",
  "key3": "3HeTDxUEpK2E7GUcn9KVYk4GYJhDrE7igBbR2FGsQDBKxSwPVKkhprnnSM5XLPsQq4gMsUo5vihK284xWhkM9aY8",
  "key4": "5LbcBu2KUAJcNyvwVEWfK6wmwFFfXDTr3fkTNYMDhWr5Wr8NnxeRnhkJ5PDoQRAB1XsKwqKRT5rw1fu9HbHCYfdx",
  "key5": "3K5rchwuNYVqEKpZXZ3WCa84YP3bZjaabizqxG9fmEfkbe1z8yJQ3aBMtj3xixjmKgT7z2u2ENSp34xCeoLvQyDQ",
  "key6": "43ZND1a8y7uJuNM9jjytmTtbkjn2coQuZbDWAy1H9PPqMMr4jUDyasNgJEGAAvqEYJtSh79diUrFv7g3L1T72c9W",
  "key7": "5UdJaESU8VFRidCAiCFScKRfMqsUraRwLopAzK7LDYSX5AVWXL6nM9umVrq5m94X4eMMbVMVtRj1467ZgQzk57NX",
  "key8": "3PgfMJwBD5mpFsCM76xe8zCHYTxg7fT2JPYz8KuNUZLXcky6kjYbAXhsC8tNqZE3vwAj4nsKao3vNuDnURnpThZh",
  "key9": "39eDkncL8RVSmajgD6y5gvfhkRzgvz7p3ze4SCXYDfdSY9oLbLoD5C81s1KrPUe3cVjxENMuUHwncz5X8dRoLQto",
  "key10": "3TfEGRW5snH59y876aKcgwV6oz8fcjQz9eKxD5komijCqvFiqLwa5wxxSxfB7SZRy7sJwfeKh69tZwuvHk56wjPG",
  "key11": "4ER5Jv1PZ2EDnZNBwcdGJexhRHveekHVKMCWmGNstUWmbYh9nVZ49TXiMXskeYQFdRDWK2dEZe2tRnyhCqQARm3c",
  "key12": "3esfd3wM9KfBiFxEAz73Sws55DMgJBMPWR2byLcYgiyGg9G285Kb7UeqA99Y7DFDLipFTZfCphRuMq1vPLUp8nuh",
  "key13": "3uXtdqKDfH7xRo27gBAe8wGCKKbw2HmSWQoKX5zdBAP48acJYBvE5SCpYtwPvqH3YEqWeVfX5d5tv8QQ1MbS3RFs",
  "key14": "5oTQKSMZWBsx3S1MaZNaEV2A1mqJStrecLrzEKWUCJ77wcjEX73UagHfmnpHYV5UTb6bSvLFmw64CdxTmLF8wA4B",
  "key15": "25tSaAd25GRAX3xUXmm38Ck9A3Jm2vM1NV9Kru2oe3piMAmZHQG83fqyzcNqCrYRHfkGqeeVmzFiY7T6Nxo5astH",
  "key16": "4V5PABmJ4CQ8mKoMBwQ7aB8qK6PHaW64LN4kveYK3RxuKUEiq22kwK1fnxZ1zS9yEAo4qBe8cwJJevbEDXrdRQeV",
  "key17": "55Mv285FHN6kvxFG8HUqDWSgMNkP5MDH6fCuuuAcHSzsptKF4fuxPFf9SFP6kyaFyVyvA516VkTtDh4o7RtG2sdF",
  "key18": "3hke3KnRgPgYKtsDJSKcJRHqWhtr6RysVd2rGLBGFTTtTuYwgN3AWCf3rcjqBRqmAjLJNEXqpe6JtU7D2B2d1sT2",
  "key19": "4VfWW2eGxxEkmyfQzirMrYq6yCSfHueU8ya7sG44mozHUsn8SwGMyCCP3pLx2jYSZAbNkFPnYyvguxXg32fWepdw",
  "key20": "qdHJimcySVsv1SiCq8hHKTNSxCwPSBYXxTA7qtdFM9m5BTbbwRteJJ4RW6mwhC74NA9QfiBBNi5ygiWNxMwbVS9",
  "key21": "2gRMToBoVpvZYc7u87rspv89WadUrVfPwg3qhHLZmzLEav4X5A8dCsR9TvnyM4jz8CmhvtyGBET52UQUhz7Ay1nA",
  "key22": "3nC2P3QRMn3nef97KCoTXsY3CywtzBKJNTCk4XGFVZ75UitVViqw7WtxrSnZAPTqyngqMUfpJagBuauJZ7oj4XCd",
  "key23": "5cp4pBPqRsc4J6fjfs6E3Kueq8pQyohiAkX3v8aCuYA8RMyhwFHfzFFHtBrpYZEBKikeS3fhskCotyB1LFemcALT",
  "key24": "2QsrbUGcxcWUEqWqWp2H44ZsFsbupu5RhCUFunb2N6Mg1bGkYuJA8WEAKAhra4VSFX91QrmyRoAcADkjwmPGzqRa",
  "key25": "4vKgZhAR4VQm1UiJpjtnFD9tFwX96qsv5eDtVKcu1Njgt8MWz9xJnyyBSPNGxZ1dH1QENYt7E6dMFibe9e85BWPn",
  "key26": "26n6oMZugpUxSGcU5pujnEz8NJAMVhQcym6MrniKAbd5tdB9QT28VWBi9t95iyhZDdDiBnmcxjRHrUPr6FnSnTnu",
  "key27": "87mRW7xM6syp8CkdM8xCF1cbragnugQR9HGK6yUr8aQhckKLz3FFKSqVUQBPMFc1NTEHdJ4a2xm9Sa4U1yxcTAX",
  "key28": "4ciU55ckwYTVSdCtp1YyzqV8cX31eKgWv2PtauPtHebWnJzkccfTFexzisibYxmqGkt62FFJbBsb9U9NpmY4Ei2t",
  "key29": "23zK1APrVpPhmqk2ocVVmjYDh3QfeAoG5yWVY5UHN4A37Tf8M4hXpKqHFGB6UhJKA46rZJVbgRP5soLXbzzdiNMR",
  "key30": "65DceuCu9nyVwZXr2PWHvPS3VyFpZitKtBk7CXin2vok8jyUUqZ9RLiAMjDyiRXDG4hDEh4PmLcrKEh8Ev8afFiw",
  "key31": "4qsTvW4z7iSNigSi5zMb7GXNNuJ8gqC6cD4AgsEYsUMYPMQAX2Zv37viUbiCWnuRZupguKS379SCfgTwgW8XVQUj",
  "key32": "3yhkZEKcdTUWvagG8mbGA2pJLVb2ggdgPWsqLQwyqkXL2hwtaA6ZCR2vQq63Ymzr2KwarUiqf6JmkicmNJ98tbWZ",
  "key33": "2EcVBFYomfizNNZZMvU4zaPxwgLTcPzHr3m3YkAYsyAfpDZY65975fgxAafTPppb5LMTZEzcdAdFz681JNEooh1Y",
  "key34": "qrY5uYApKh59Q2jYmef65v1uZ2PxjmJTtAjA67g1qeL8HX4Ta5pRpBNuxGhQB1CTWCft1BfnwmrYd4JnF2DZGLX",
  "key35": "4VAqQSkZhr5tqEtp1Q1wonSRNEh96vZVptmwaUsn6FSrFR4RmXcTsdYQTWizMcTHp8aELKRmFDDARnoEZTE8E7xN",
  "key36": "3hULsf1F3ae1UtRHWWwd1Q7ztf3Ki3Dc3SjkuhfngaYpdd8CsNoCjT1eaGFDrVydjeq5Jn7qsTiub1LjyBwu5xEp",
  "key37": "3cf6BeAk84tTF1oDGr5d3DgdEgKobwW7AdrKz7rq87hzLmgg5PG4MGhP2GUjRPCa6bkKi25d8EgKBFiYGninhjF7",
  "key38": "Ba1PqF3u3FRnQYcVXzdfTwmbwiZx9GnTnK4zMsZerCztdFeUFVqGjbDBHAtbH4pyebNmym6N2df3Gt4HVBTNNTd",
  "key39": "4AE39Nh7piLaDtjxWyur2w6PJx87aHSbWKBpW6xvCLfd9uZE9RUc3ZnSeLpumFBa5pVTdmDdPyCtCxvttixv12Tk",
  "key40": "5cuU2EiLfxFk6zc281onGG4aq1EJYAHEZcMrWoPufRDFsWe4cRrf5tvg9B18Z3cYiNErnKtt7N1T8MjYAXgkXjYQ",
  "key41": "5M2HcdsMZhZ9LPRYHeWAhCovjnV4zEa3yBj8yMhfciJxYxAC3vefBNR6JEBoMNhVHNqLJTKzWHmJA2TSrR1mP5uG",
  "key42": "Gpv9EHe3cNdAcS4tzTMptSXabEeeFBi8E399o5LHVMdpjVnfrEudKA4Mnu77YR2f5XeWDTyP3AUPfusY3HzRqUM",
  "key43": "PhYwjFfAtuYVzeJxGbj9r9U9jqEhNjVFGCNbUeczpzWMCnhtj2BPPYRCMhvwRDTcDUzh2bZYk6StFzevEnCGkZi",
  "key44": "4eEmeRc7rdwnxr8zkuMMF7dBSRSkhfMhzhhm5WxW8c5uCQqyuY9u6DRpwrPw7JHSn674SDzr83xxHrkDGWTDJTEK",
  "key45": "UsFnoHhvZhQDbNQLjuttUSdoD22vXya2vyEFW54ukc8QUqe1dqjSFf8ydEptadmptsmMfmNT15PyxkCrvXSt7nL",
  "key46": "MLjr3z5dPg8nRvPpzcSuaR4PP1NLCMvCax5e97du7e68YssugadmEtqDnpz54RspunFRYjCe3hpTWqVYbKzwEuz",
  "key47": "3MKSVwsznSixUiemE9CoBGfQ6pM7eJXRURyyq9S5n4EvLGvUXZAz7DvGaTXb9rvwZ4V29jZD3gy4ixuWjYCTVgop",
  "key48": "gcGEjT39Lq7VQQ5fKcDZkrRH7rbWjoLb1pVGU8LeB8dpmYTBoMyLPReyUcxFYXTEpMMqv5wSymyTqEdJZkXgS3r",
  "key49": "5Vf7s2hzEBNkS9fKvpgc9iNsuBgVr75nH8QiU9zUK2SMmRmyttP5mtmDEVWZwZsfA1MAXqNfwJDG6itt6gzdxr7b"
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
