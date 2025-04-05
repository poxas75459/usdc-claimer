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
    "643k8qwucmdroo4K4qBwCLRCTnFwsyvBn2DSURiGTkm8tcYgEmU3JuhrgERFrfHyaCYrMwZkZ713y1ka1vjyyZtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ohjue7AXoB8FgPBbGjv6MeQfWMSdfwMtwyDj1jrSKKf4wnWi277CPje1xdzJqKs9sRjRnm5HErJRkZa5suEe4VZ",
  "key1": "3xD3MwHBUqFDad7rVNBUCbXXyLDGYYH8DZPvdR2YrgXJ5D72oCddSZiBoQfnpP4bpH8XXa58hwyf3igRzkvCe9bR",
  "key2": "5uYcQQSivvZFKgHHTSwxxhP5urtmcEnPjoyKMThAq8YJdY45B9PFEcGSXdY61jS6hiiKHwguow63Q6rPtwcDDk2M",
  "key3": "3Xj1NjDisEKU5RNmyikPVPCPjYqN9scLJ1F4Fg9pDm3JjeG4EnZE6JgWuzNYL7Ljt7LrZAHQVRmUaTA14ZVFGkxc",
  "key4": "5bqZG9yUDWhhZtEAjMjPwdjvvmporYcXeQtSqZFuwj9UN1uWBgfjYniNTVRJvD5nnzFa3Zh9RDdQrMrY6g3t85uk",
  "key5": "5w7ijmvd98SW5KzfArSCMGEioAQganYYxMcAcGhbou6owWs9hYRoTLGbFciXqmqqYEoU1XLGrm4Qb9LgtRqc9WNL",
  "key6": "5E1DAsjfzDEVeR1Ng5rSwEDuMMnxQkVxvLPHbkaq4vX7ufD9gsNk2eXzyXaapshMVoicKmF72kvBqipPje4aQ6aH",
  "key7": "5WajKxMuPQBiYeTTfZDutC9jEswCv7use3SQRG6zTZzMno1rXFZxfs5vJa2Lai1xdKhdZk2UBSBVXBEQGs55G2Hp",
  "key8": "5WNLuZj1KiDgTK7LrysT1pJ4LhJPXwMTatnJzBdWnbQmkBTTtqxnC6aTSwry4ra9wzPQCYyqqtnq2r3pmm3iByt3",
  "key9": "4S1Xmg48LhAA3u11h37FfEQbTJPbaGgRJ4mXRupoA96XNmc6DhxTR6XbnwENaGZtq42vC5MtAZCvgrFX8RYDbfZW",
  "key10": "nDLsoUDEJGCfYcTeCrzT2fLz9XHcpD6tVVmy1vmQeHHQUc89docG9J6jyD785jJyFogcWzzX2LQ6NypF5sTJxVF",
  "key11": "2TGMAZXTdXmPtqHsZAXLmSPvAjLA3G2YoSMABRnmCe3xfF9nv9uWYTQipS4LAgGxwn8FVnTDkmXw2Cjw9qDaBEqn",
  "key12": "5AeaZNww1igLB1Xi3eoebiNbSiSq1yh5UNjCEK9DaiVyE6Vjdx8mceQBmw42promCkP9sP1hDcJWvZujMxFmNQCi",
  "key13": "2SaRmqhgmr5EYx2nhNc3Sw1GviPEsFC8RTYrmbq8d23pPZPH1qRHSXWB4SoSEMKFY1avb1JFE7kLvZLYxjEWSSsE",
  "key14": "29YKqPo2QVAFA1r7jbMvgFJou9hUCJf7ezn1czU4eqR4QVJAFiZzUvsnwMG1UQLYogv7NdCRqHr75voSt7YMiz3r",
  "key15": "4evdk9diFoCqZS6QeUbXcDPiNr92njuS7WE1kkBNtUDMMG93LuWntc5rYnFQ4NN17TUk91sGSZtFbY93JHayuDp",
  "key16": "2s5zHziEtBu7uTcRBr4Cw8uYH43k4UeE89bCwsob1N6xkpGqBfkCMMGJ96cKYiBcFnxqdJJXxnKnUpu7HbAeJMCb",
  "key17": "5xDh7fSCWrFGtd3ooGMsUmYaymFJWWSqwUyh84yCMnP2WC6Cs4KW4VM6AqLz7Qvgmmbt5yLQKWWGMMWchmVCYWM9",
  "key18": "5fUbumQMXUYydVWTETZvR9oATLNuuhbCZSs2PLpK6Vbn5S9hqq1QDCs1Pzu5tG6dEsdyNqvj5U9y1bz6qTey4vah",
  "key19": "5iveMEnR4MJPZFUJSMzo7gL4BctFdyBkPqzFbZrGJ2d9wjW5n2buWRd9L47uY9Xg4Fm3w4YLL4trS6zANX62zfCU",
  "key20": "5M9nP5tke3R8hKdRrRcWVR3rHD9dK9SfUnKfoDTwExPnR6aCgLvfJcyTVdPUY1YP5SDMreeUNan5sgz899Q5HZaV",
  "key21": "3PnLfJ48Waj5zEeeSwBfeWJvx7cwqriX34MRUQeYSRsquzZtBFKmbzud85kon5W46LMAHunBhhJh3ZFbfW37sgF3",
  "key22": "2Kq1htNDSfWc2RyZYB5bXA1yJ9kEoU5KAgjVRVndUancGurPpi1unTMKDenW95pk41UmfrdbXofyipwzrLw1MMD4",
  "key23": "4hEVSW6hbM93aDLD6XXkJwUKnXxAo3aw3MzwuiC7npNb59hRsFB3WP9zzjV2S4ysCYcc8YFqQDwzHWaKduSnxvv9",
  "key24": "24f3dZiKZ4NtezuyU7daV1ZmQFiN937hjAhtmyH2vQG3j92ZF54GuMB2YPcgLmgqt9LWmzmFADB2YXRn17KQowLV",
  "key25": "jNqpiFyxmp7nvbKMKbteMRiWaVRruCXyXadg5mVbig1Gjt6qPPGpajBWto1Nk7CnW7cemLJ9qiaajZ1wH6TFhjr",
  "key26": "5CdSBpSveM63u5hzuEjt4HhhtUZmoPDENssQyv9JJcY1WULnYdWSpgN8v1HF2wtKxEBcyixJmgbpv9zrVxkW4qbY",
  "key27": "3NQatLcKyLodtnLvA3cUjNtN1GNNLzV6SfkdMuZ7omzv4nruEN12GUpf155orvDFs2hUSbSj7AsSVZ9VGT3WNuBV",
  "key28": "5P7oSD3CJN4CzJ5sAprCbd61uWsy1GZVHyYY15hLYrX76ZZq8KjAgSVFhgxD5b3ZFCK3eeaCp2bSNpcc67mzWFKY",
  "key29": "3661h4ebNvXwJZSMzhdR7eL397VXuFRDUdg6XsnAZes7UEqdZ4kpEeeRu5ws1h1NvrsjLqPMdjC2TUBJAStg5RpT",
  "key30": "2DiL8yPepAbRZ7MNaGf4gyMCSWp4ikPSBqtqrNUrVNEBu3U7hZAPRLkm3p95hCFko163eBZNzLG3TBBJZTmUfpum",
  "key31": "4gkTAX9XtHHSL9fnXGPj6g1kTiPTcF4aYmrDHxMcSyPkkDoshyapmyBRMnfZHUW5uo1zky7PAiMRpuBhT7vswfm8",
  "key32": "5ZSDkaneSiiRxSU7epuD7McGeUHQHHfxmoxsZ8NSq65tLJerwv22QpXhyp3vFovc4ECB4DHe4qS4misP6sLsgpTf",
  "key33": "kNEHWF8TLSjGzeWyudPvqF3ZV8Y1dJB8JkGPzptiBmRZpqRP8Q6PhnDRZSdPZpYLAX1W1wcF5R3RdGcQX1WqkLc",
  "key34": "5MhHAbcr2FDK8bf9Es27g8qZgex2DwPPoiRMPWpiQhCR65RQHtQefxg3jwi6rvEw7YeiPBo9KzhcHME7kwxwY1cX"
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
