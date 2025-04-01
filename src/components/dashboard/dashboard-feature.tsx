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
    "2L8CABb1ucPWwETBTSGdUHUQp96huszHQnK3dyLxNriqgoQjB1SXzEijFb7KAcWGhpVEDJgfpynNGKSEuAJWAJC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QGXiC3vKErX3BYz5JMDyv7bb1tXTUf3mMC3LD4xmMWVFYrH6LfUHj7G2oQdk9TxADyhYXmFFh7Cr48WmBc97jhh",
  "key1": "3MQjGcWxggfDpDKaq7DgLXL6yT6PBvaXedWu7gP2pnHY1kTQKjeZovBusanuAVMJrqGvsd19DvmU9nXisibL5Jfq",
  "key2": "QBkf93AdqLyMdsGEQ3NEsUjqPc4z54yvLfqe6b6aFLbxJekqR86qCvfB9qrJySUt2xANip2pKkuJfS3vzqsWjp5",
  "key3": "2Cu1YmEZ3sBk9mzx5QSfrAxXfyj4Q3K82hNvLrrA88r1do5KuFU3bgTkPjD1ZVVjNWgxXk1Rwa46qNUW6yyUFXVm",
  "key4": "3aBeNZarahhcq6c5i636nLgwyu9kyr2tEqFpnjEq24cmFWSHM5L8hW7EgQwhLH89mvhk6cgVX7TKm2foMegRgpwp",
  "key5": "62SWSmqvFTKTvmDwJaLN9xtSSUwsfaEccQQx5cx4gc4KSrhNgdZbDVugugrj5pDg2wF9eghkionkYrHbesjpNh6C",
  "key6": "3JmamMqqJDr3R4ZMmPQPzcHayT7RaB6AUhS7MydshbrYLrUWYzDthbgZtZiRCwn8zWfwKK9MzPtXJmMejE82FHmD",
  "key7": "4byZqxyxVRSoV1kVoJAx9xDn23wJDdh5b3U1hxwobtUK8dxFpgGg34E7qesnmcwqYMrxSmnGe1MbGnfPnKT9KQq8",
  "key8": "5BnfixB2c7wteVtC6NLYXhqy8TsnRwKpCJNP8bfMrqcp4zUVjmz6Xb7oCCouyWyxNo8putWBFNni33HJ391gUje3",
  "key9": "4ZtiQTssKtHu8qscVw7sGAYQNqh5qseiVDBSHBnAXzDTZBaJgtaPnXxDVoFWqJhwUg6DmaPFJ8cHUCX3VFpvbr9t",
  "key10": "5cwy5w58ZGvh3qGhLbXCAQVwDb1hMu3p9DttL1B15HG7fgz3iTwVTwTBwta5wZo48S3oDvD78iudDUDRbxGXYzTF",
  "key11": "4WBe3684zdfQ7FFb8PWfM7Uu4dzxgCiHBDSwsT4Zw2Frmce1Cx9vzMZ9Avv8hxxQzihJTv8spQ9BbjyZwDkcRkcZ",
  "key12": "57g81P3fc6gN4BV4FYuEorWTKmZEkTdSvLc17EvfCVEdwn8LB9MSfazEdQ8DakxkEtipm3LCUb5rD5wJrkb7NfWC",
  "key13": "vkjYvEvUy8BFPAmYFDffriRbnMceKP3eg4N6hVjqM2v1QNiqxyKCBhDSsJC624LdKcYt8BgpU5rPNHA6SqbULvK",
  "key14": "62FeeiSCkDtcKWADWicp7yQUH84JMzucPaHn2RVKVcgY2MH26ApnE659Bt7QA6DySMyYQim1fXHQRbgMGHBbzDuS",
  "key15": "nt94ZGVTmALrevb1auFXURPzSnFG4rjJtuoBRkQnkk4ehaG5XwRj2TDhxH8U9m3FDPXVW4KV9rNtiHNFXLqwWTn",
  "key16": "4u1X1Lj4BDNKepy8AGSd8YTPFLUKkkQBS3JWFSWbhEBoAD9TKCezfJv5eqgrycJp19fMVcDYk7JcwYtMkrafBoG4",
  "key17": "3cHE4kEju6UnseVJYgqfeUcYrS6yvM4tJZ8voAwECNADSNX5aSTXp6cckmgoEY2gNr2L54EyKDrfESttVxRuCkwD",
  "key18": "2ReLqK2mfxCggMUEj4iVV4iVbpycyYobosvZrTBqS4zZzmcuH64q3raYS5cFquG8GgJuW5jW8mccSLNCyrVFgWUL",
  "key19": "2DvNMnsmSLiW4J6bd5A4n87oiFCQKwgVaQfvHCAdT3Z9gRLKMerwXCnV9hZKmi6itGTcrjRSvtumSTLGWDFahiS",
  "key20": "2kK5vvN4L638wcg8B1TA4u5NnzY6n63drRmn7JcZxcVZBc6583YxnjFbycj6QkcQAb6WTziih2i1NtmM9HqhWQPU",
  "key21": "2YoVFXrNqkhZWMdTuNyHGhAbyaJodN2HCGpSUJDoSmf3n8CjLSbhAxAphEZXm2CEBjB9PQjs4eKaCSGLz42ydY8C",
  "key22": "3Uspp9BbuwbyvcZtTiwrj4acDmoLBrGN2WvoW4uRx4tNY7rMBg9KV7YtuwNtSZyfdnR6HusHb1eKpuj2zw6nmDKv",
  "key23": "59i3WxsJWHSeGpBTS42Mp1oMP33jvRkg6bRzSagU1h4PWB4eLnzGWartjsgHt1tbQ4hZx1xFyCuffmaA2m3YDTjA",
  "key24": "2Y4JMoeQfPLB9Z3tdUqzrZCBgdTYrixHTCJFeVf6bXcjqGNtJgpY29RwHRmhxTYshNLweVPsGLAvYaxrW8VvUS73",
  "key25": "2F1k1euqP8i2zwtBT26CZk4nVxR3zUet5xQoC5q9PSzVgPeTTnP6pmJv4F39BC7i4aoxZTmRQACDCVnFuE54K8Xq",
  "key26": "4jcDwGEiRT6G42kxJ4oDYcf6gUUweXJnWXW1V12oYtK27YjsB9ZrErcfQ8HnsiPEfrm7GEYnciDurMFrZ8xMaemK",
  "key27": "2a75fJudyspGi2riXPj4yq3YHyjfxzaYFHYZfbvanWBtdTv4vr5yLYyXNWWpn9MQJZx4cqfsYB8omSN7pNMLQKP5",
  "key28": "5EY3NRCYfDJb7tCzZ3xmGndBTXiGQya8JDBbahuTDHVji4HUx1bXRSTerWoxfxe6nrWLvznD7yeRfszZb6xQ1nSK",
  "key29": "1Z9vys5kEc4Udmvib8WPxjhj8qSZVQUG5X1nnRj7VJNrtmqRXx5xW9d6KwHX1GE6E86nnEGdaG6SVsMjt8ZHMCG",
  "key30": "3BNM35GhVRZhNvbXQXGgtYrF6dTFz2WuX4pHEQeRrjkVHFJiNNsEMthphHYorK1cbvqjiKDfxVeX4H8yqAQMKHY8",
  "key31": "3wiee1V1J8YKvpNHjy5ia5x7T47k2PmwTePkgt7Vqfs2WWGt7RL7Lb1s8neYuMn9RQ81sUPp8oX2XXjp7qnP54uw",
  "key32": "4GQTJ59CEPUAXjkWsZSujaLipafAUoNXCY5ZH44fh7xhCXA5M81YV88d6Hqs6LhsCH2uEh6KdNiFpfYEnBRGxFvh",
  "key33": "4v1SeKrsBTEXqURitmhPke7MHQ8xiUvkAsjcBsqqmeRx8AioijezQgYruTUbLc4EuY7v6PHGULzMgTt5e8Nm6cWZ",
  "key34": "2iamdZaGvmFritvMA7fgc3hsavQmn5LTnHGtygt3cf7omeeUrRBQ3aZJYgTqa9kcK2y2MzoGcX5X4ZRx9ge8dEJw",
  "key35": "4JiXCX57fM3apk9DPHwEchUzdPG9J1MNrWnN2U8oa9q3qYDyZGnSa8aAkwoqSTyExAVQ64qrms96xuwgY6AuVggH",
  "key36": "56fJZ8WdPoacxGH5K8tfiDEzc7uLjjMx1RArCRLkJHpG4hw3QoegT8GK7b5cKDtM5ChYEaYasCzPHyAp5x8ytoMH",
  "key37": "2yqG1UYuFjL4mpm1swfy1FioM3V7LAtF4YyQJ6xqW2fCtT5hr1pCMsbYyaycyR6ABDbnw5qH81DQ2VEn7GF1qD94",
  "key38": "2nrX4VCC8L4XDW59tYTCC7MpUJfvppydVPfWZf9zV3QejnMWVYgC4BsDVc2HEGZxSMKYD9uYzEZVaNWJJVKgYswT",
  "key39": "5shSbYrX2z9LrqFkb8vsoDDHj1Fucc584cRQ3PiWzdmsB1oNHJ1HmvGSdnNd3rSY9WVF6CgK2X4Y9g281Nx1dF4N",
  "key40": "3UcQnAdJEQRM8VMW6MerGvfgL5jkgZVBPGvQmWkZnMN1c8Ji6mamdZ79YMMTCxJLPoEXUqNCiLt4VijUqFDx4n3Y",
  "key41": "3WC5RmKuyd66qw3JVL5ozny2BhWbUFy66Gb6DPcvyUGGCpcddB3nJ1J1cyJfWg2C6YZVmee6X6JE8JMdo9n5RoJQ",
  "key42": "5LheLEzrDfm1Ej2dUsJZyJBGXQVDLRk3QAnxteJUZvJmps2FxmQYy82Lzbp5uMVsewhzXUf7NknRkR6WybuFMuRP",
  "key43": "5CE7pDEghEnHvHDkVA3GeEh34juWX4uwKYYvP2PgjFwiVX5sCHBbyWDBeaEykewn4keKyMXxi1uuqdTAWzmy5h76",
  "key44": "4jjbd2GHJ4iJc2wNoFzDWgRch3LPZXGgkP8yJxmu84YDNNkUW9T9dU9V2NDpPpzYgnh9d3fpvTKMwCefono64A51",
  "key45": "4r6Q3ULWRDXU4tjDuGN7MqWafGqY5fDZLKkxpQzbAMq4iyrRXdQ3Cj5NbdxgvEMZYCR4oEQzhfKsPuBThS1G3bqY"
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
