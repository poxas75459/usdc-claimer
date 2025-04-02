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
    "w5dH9oJKFEDgJjUXkex95YB8ytW1e4vq3ddagnKJszqTA7DKyXWT8rVc7JM2ZFCtKL8u3V6L7G5BnanJoDpjKE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bq7J1VAS2EQg8wUH2TmEqNvuS3fbXUDseBmWcBCeDer7qr3tfDmHYFfXFy66Dfe4nToRB3Ua38udNBfNR81LJeq",
  "key1": "4n7SCYqjZP4PeKyUG3XMHSsZMPNvds6bEXhyHqoYekAyazirFnJBGcUnSXA3PiyFLVRve5K6hYiJxnnPnrUGEMRe",
  "key2": "3b7djAyV4FGzscwYakM3qcBLarTKJcqUU9WLYLgWpJertwAQSC62nhW6dGcRv2M5Kqq2uosK92U6gaswAvARfjJh",
  "key3": "2oy5X3Ear8HX5Vpn9ggkm4fa45x7VmbPytyd1pRbZ1eooRxNq6y4kP3JXfkqqmZ1NdUGHxiKrxFu8fDpyATyJARU",
  "key4": "Ntuya3kLGtzdhJdmZR817XX7NqqhaRY4NnQhPtVHxRuDy1Z1vYWPh9D1swGwe3Dc6kNjxfyErfCEGGjvjjwsSYV",
  "key5": "3sALuXg5KoWh3YzvgeWaVtUow2PjzQn4Wfs7FDm3N1F5gtCrR5zhGUNwKzhCsYKC3Hc39uBd6Knc6WbXgzGHiJHx",
  "key6": "eBeqAgNbfeiChZPh236z2HBTN6wqWq2EoE4ydmUPRtiLNN8ZP2NapZSJJ55ievUfxGBWuzkSC5TCnjJebW7GhEm",
  "key7": "5Rg7uvERw13DxvWQg3V2xfpMen7JFxtQE8yKxDVy1eP9imkRBmkEtzs1AnL2z579pQjr1NupYrJYMP44aWV3GBij",
  "key8": "3CqX7k4DVreA4EvXiwzBSr3mJCu6JWtA9JqJymtHWbSyiHedtxtXj4Qz8uQa7RY8RJY6JYZFyHLpVwMfKuJwB4F7",
  "key9": "41Swp8H3cxtRwB8Atmtr9VwNEGsHLmEnMowscUa33tun9i4RkmnAN28FmS4YbimgvHtq4xfaPk7b5RVkhwBiEeYT",
  "key10": "2hYGEn4NoacieYuBRNqiyrG8tmtWQdxgWXEwgtzq46pDU1G1BEqSPEpKhrNqqAhaumDEf1o5TeGGuuYkRjwgwo4R",
  "key11": "2qP4BJsv5UtLJPhE9oGBskizRLRuAWLoJK5ou2v3XUnneZv7LAdswg24zSbgyE2PXXcZwbSyKZS95gADtMKb8YTV",
  "key12": "2yHn3xN5bmXfKqpELibeBU6MfgTAerrGmMWFBCSBcmmUsk5RBdBviK9qac3PmzEJaT3ojETRtPRJJ2oAsQeTSJ7U",
  "key13": "46tfVJUWQcHXDWpCVwonWQbtiTCgGcLwS96fJxcCANZvgESqPaS1HhEEqz5Ne9MtRd5vL51UaK5TyMfKHTSP74m4",
  "key14": "5gfJDd3GnXHp1WrDP85ZDCkUJZjzVZUfkJfJ7HJHpTwyXEuTWJms7QacTgQNWjxXFXPFQq9Yp3oYDBkcPtSVJtUg",
  "key15": "3uD65wpKkAXkAMp6tFG9c8udmwu8SKm1ifKYdeCK2YL4HZzxsQAnZv5KyzhB1NiHu4Eds48LfWSz9pMSDfuXhkJn",
  "key16": "3W6dq3yDKrWnhFT6D818bd2mvcYEzDwAdzwRwBiJRA2vUfuftpFZr8q4WNfysnj97qrLTUpF3NTcJRW4Qxmtqpqb",
  "key17": "UdaFAWpwVHo3FPiTzbAjU6vYedJHEcRam4uwFVLURNBcZLZatk4ShhVRSHHmEHBjmF4iFjPHaygFKqKffhPTESa",
  "key18": "2qF5XutLowYhhEffvxrwa5f3khhWbYxfr2gcgRm3v9tZP94knMnwAeg2ZpX2RxDd4gGyqpd4cT3hfbtWDWyYMNFt",
  "key19": "3gw5D4KGTXL2CU4VA4emZkeNN25GNjmwwoHEwoyKtks6HMxHAuuivKQECPYxq7Ew4sVXUoYDF3M6AV9GUDbKoeyv",
  "key20": "4rtNxyj9G7TkW53yGwkSnnAF7Zqd8FVqgSRPfjxMvZ8RTRP3pF5yi33HCiwXRgN4JraK8zSPhLQzgW6JkkTh4eh3",
  "key21": "DzRAHvYotFEHjPid1G9XLr5u9gEiewGXQqLcpsVTiMDcmX9TxrmYnTAstDL9wvaSBArREVPMwAev39Vw2UKq9CS",
  "key22": "562dCvZUc47vQVeWiC53iX5pLtKfAX1496E4H6uK6gVF1yoQk5jZpazVT13rc9bNjU6t23pJHCcgYQVVR9eVt14Y",
  "key23": "3DpwvqBT5qzVLu8FiyBCZNHGMsfRWcKmT5siXHVch2NUCBdP8FF18h8jUS17gPAPqE4kiqujvU5mjJbCMGLWC7m6",
  "key24": "mmefvodF47ostw1SArRHab5UCzxo8nHCHw9pys4qRbSaML2gZ9HEc1RKtdyW3DUHHh4HMyVUGD3bKf29Z8VTDZV",
  "key25": "2L3mPwrQRUDaR3uuXBBkhFwULT9t7V8ZcTcHNNbrothm7k439UMJmsqYLV2Mehofs8rzYu5f288gvPsmF4PpkjYb",
  "key26": "1RpLPRNqpnnCTjwMeoDiXMQzCJrTtwE1jQTNW8MfeDGSix7GgDUq3M3b3hhSwEkqN88AbpKBvc5AzMKCqXPsdY8",
  "key27": "zRpU1bcVcnkRPuJYedxdgtTgZfZux3XwEnF1JzrfYcayv2AWznZtEHqPXNYfRWD1cT19me2mi11Kt6xstkzYUfT",
  "key28": "3E7xBJsKCq6jLBN5d9FyhynoP4CgF2FigkLn4aZUmGxQHV1ZE2toLKRHpEmigezT9hMXDMWEAksyDMxzbfaqRjpf",
  "key29": "3BikabcSzGKjTMabqif1CGBbZ4xSQJkcVstLY9UJa7qja6BYHA2dCeFN6dzxhEHfkt3SHWQWjubh9eFbraP1rBki",
  "key30": "5c7HRAwRMjmgYTCmXj3Szj7VH1Z7eRZoBUYNKhYDkNU968FoEUr516feCnDLAKDAkFKSMN11nNajTTsGhPgPo1pW",
  "key31": "65fDLghTqKytk4cvfayP1hUTnS2JTEnYU9SdnK8CFvo5Xb23zo36guiScmi3fbS66Z5wBe7CAj1tCR6sXnhWD63v",
  "key32": "51Vx9dNyTiDxwQZQ5psyBYjTAkHNiuiydnvtXeZh8zDe8myZCaWcEE5FKVVCqGN9zsD8786Bg7hxYG6zoC5M19qd",
  "key33": "9dd5uJwg2yNP61qYNgsVp3BTawtFJPgJcQRqWJghhy6BQoYX1tQRwupuuVNYNDbQXXEyB5tVxzaMvJkfvWijQP4",
  "key34": "5WdekEgPc2AgqRFbYyXYb81NeTvT4ED3L8BnWprGbwAHZq4fWsnoE3qKCFuGbAXzYiDzWyQqs492V4axPrzeKsvh",
  "key35": "DbFnNfnQwPFxpsugAzVh4FAQTDcGWQGFo2HghAkxBgkWorRSeg5noQ7w6xwmExQfKSDTfLrJ4f8nEL7TDqfiVzC",
  "key36": "3temQYfas8YmAUoWbNrsy1uxosXPfk3ND1CsEySjruSCfVHWibR8ViTmYSEtd5zXwmGRc8J68EeEwaN2PwrpgGWG",
  "key37": "5yZcgDLoPxAP9Fh5zJSq7EGoU3chCmmgV77dQKwdTK8co4t7hYLwbLU3J4kzbRdk2Kt4JSdz5zNdtc4E2ExY2V4a",
  "key38": "4AqB7A66nvFeefvyU6WM3Fk9yo2t3v3LXbyhen7tWdgz14dnowbarMoojxhJ3P1JdU3mDjbAosXJ9ZTbBvs4sbe4",
  "key39": "3gHggniCnwD1MtMBxT7Xx6VjNeQZjGK1gNwdZffNBGBLDXZhL2BH6ewoucods5CSNe6uME6zFimqP1YP9BoniT4d",
  "key40": "2gfSbH4p8cMqwitW1BgoWBNGUWKjV7SYVhsW4RDA7VeakmkEgj3txxVALktxge6zyHmaz7Lcqut45X31MmnvsApn",
  "key41": "2SCZMt9vZy1X1gCGvTD2meV4krsya2w2Nm2QdAnUGEgfKbzuvseT2NTvkKZMwQRVC7a3X62NNYGtEtELg6HKqdF6"
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
