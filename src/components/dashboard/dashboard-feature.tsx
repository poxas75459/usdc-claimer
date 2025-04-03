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
    "4esQ2vpTtJxt27BhjXmymxU7qA4W5X6RpUAPyXwShcDzKCtmqpgBh14WN7aVHrW6xYvQL7zehPvLUyokztv8vMwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34PZDLLokYdnwVRByZc9Tvr5WAMe9QKphtksZhw17duPYUP1W2G82nW6suYjfaRBtJ2EKs5p4zeWxr2ydgvaSxvo",
  "key1": "2DrEJT8boDf5LoHM26NpWVvszB3Zc1LfLC8jjBx7enphbHJCvZE7co1kz1HeKP68om1fyBuyvNLG55h4kb6m3WJE",
  "key2": "4RR4uBoR2CJxKq1fQBDPweBRThZp4qk7Jz4DnzMxzfb4PEd5FvzRMJGbozY2xfXAPeq7wWfX5qh62xRGjLdxhu1P",
  "key3": "47foLSo7xxCrs5vNXtvuBfQYA2hNunSaxVyRhERqp4Jde9rFvcJkeuNp7eWq7Ep83LGVnB3MnMPJkKYRzUjZRVab",
  "key4": "5eV7CPvZiBvagyGRdvMrAyXZVgimBMgXGHoFrAHXZV4w5E77CVNv73FxXrpqgdMWWJjjgZew1yzjd35afkwgBVRE",
  "key5": "Vb7X9FY7D5GbuSdqiFADwti2FJpcPwJ1hvyBWTGf61kz89DUKfQ1o7eFaczRPKZW4e2hTAPGRnQ1Wz5LTf2u2Xm",
  "key6": "3RXUebKSYVJowNdDjNzvCLQmN8QKS39qkVg1rg4xgwqyaCGTKRghsgpSHtDFA3tCVHCZWce2xCnfj1xv579YpXwW",
  "key7": "2YATptkV34YrnjwtY56TqPQnG24vPH6WZGziGQZSiN1zJzo81cbct5f4NW2LYfeDidy7kdhc8RKFWGZksVBj4s4r",
  "key8": "2zEFABYQP7wWBCDmuYbpCrDZCrRR6d9t61v3SFzYfKjg3EzNrQe8RoHGo3guN8Xm4rv33RiBq4VKHKkw5TA2WtLc",
  "key9": "3rNHyVQnaBQqGNnsSWH6a9QuoKY4WcmVvfsjxyXgSY1LW4Vmfhcgg9me6jeQDC55Z6Ms9PstDcaUN3qw6diw9bcq",
  "key10": "4BUJfhTx2C9FX1v6XGP7QbMx428zo3uxt4zK7rCL7wvQeQ2PdLuqjr9uEqBbSvoQwjHCVDobsUyCYz58MpjCQLjG",
  "key11": "Yde8zUDRnyXJ45Kyo8kQNQG4Q9FZXWzcY2dxictteRkvV7KcNeFBE4WpMqQFzgakaE7reigiC7Q8zYL1x57NqNX",
  "key12": "5NPW7dCfvQmcvUjgCsD6o4YdTbEahtqLYwPJdxpDzbvS3GJJw7rDQhXBnYAhM79EXLizTJcV4yvooQqj9wkrPN9L",
  "key13": "5c9nfsjeh3SwqY3bYWcY56WDDRs8LLS2Eh64X6hSUKF3aDLuz4mpho2YSddaafXMrQHXaPvNF1UJfKdUpYAX1B3Z",
  "key14": "4ofEf97novCDVCigQ4XygumghybY3Mnr1ezbb798vaABhTUpigz5o8CJ97ta6A156geWtprmKephXJ2ieYbqcesp",
  "key15": "5cYJ3rUP2u7mDpi1GQC46VGZQpeNWVQp1mQy44uuXuxHHx8D8f1qtEn5zmEmEu3t7CSg4Pwcu5NiSsEjDh1qtisM",
  "key16": "F3DPjZfPwgt2y4BMhkNWQjAtCRMZJzeE5eTxoeTpfTDeUX7dUz97xu3vquWzAGzstMWmMZNfwx856ytn5Eg8E2X",
  "key17": "3NDPRrPTNN5LXwJ7pVMDhXZBPkmXVHoVEuKqXfbaQtJrPMut6aQNYgy2dyuRp5SFpKmLQr9iT5jA18WffCGg1cSh",
  "key18": "mqnGPjKj2FGU5AVUe58cjssYaDiVdWSC7onEm7Xp739HiTKS2ubpZBwbQbdz7HM7t8LkcK2QkN6QB6vtDcLiXys",
  "key19": "9PbmGDwwxX8X97WU1hRZgmrCwvRygp6YPTkHoXzhQuQXQoPRufnDyvSfeQuf3we2NFL7v3VBajPmFTGy5Wok5S3",
  "key20": "2YLzgDTgQ6MkMrfVNnRv7K2wPP9FV4A7tovX6g3CCWERmNMKNvKRni6nTJjDWrjBPFgcLsVymQrh9SiH1LMY8JnG",
  "key21": "iWTSi63UcZQycMVw6p2WoRndJ5iBubTgZERV2m9sHeaNZkZvkBY1BkNvsBXpLZ1D96uM7kKX5R4ZUqH6b7nJzU4",
  "key22": "29tfpBKeXNvkin41tPU28MNfMVowf7thE4dUtk71i6w1iJ4t3UrA3YoKjrd9EHrSaUoqvTo7R1WURASnkU1cWKGR",
  "key23": "aD2Y3cixP4zuuMQPHZ377Cdeho1rz13kvyvhewiZergqVR3bvdJjKcX4d4E2SNQYASU4tdqwejokQqRd6WP97Rc",
  "key24": "4N415vwJNgRRsj7xDQPfa1HhkF9XRcDQf8y6offTkWD2FznrSihRSueYtdMS7L2kST3vkwHVReeXLncwdH1npZ1M",
  "key25": "3miMPPNsPVFwuZ6aJiWEj9qfowKajDZujT9Mroznff6BtZxVSqat2MY7foc7akreNduiVjpeDvKxbryZDkRsFFo2",
  "key26": "3zWFAEY9gV5WFB5EhQd2twqGipScsxeUWifM3uoLELqRwt5EoZzkWT6zCo8E4bEu844U4N81Mgj9yMpYDPVdTkQC",
  "key27": "53omrZ8XwnfEvPnEVQzrCr8iyYy7AsS6Diyg7TyvxbuA8dVFeUUKsLAsu28Div8HQTxvEmMU8UBCf2s4iYTkWyWC",
  "key28": "257SQpaWyPDXDvwdscyM2yjBeAhmvxpR3S2BwCw3BnDeQQorbmHEGbbhxUfzBRreRpqMLuR5CPrLkF6mTfmNzq4P",
  "key29": "4ECnF659kDhoQnVZjnDbATycGMYEqvwAySkHEevx6MEUunCoBLPFCuLv7aojjN93H7RYRas2oNHLtyEsybWFeofH",
  "key30": "2BjTN52kUWG9PJ5tq5EVxbKyXC8Be24QE8CZS5iYvGyyscS9eawXrvjysxSUchUBUSvqa1PPf2dFvYCDrpwzeLCo",
  "key31": "5DhxuAc6rRouPP82LZS7w9AgMuoXVxsTBhyrgU2w2raFgt1JTjE7naSA4eewgmKwwfdpQAwTPW4N1FNb3vajV1Zu",
  "key32": "4aNBFWfaMBv3tz6Lti1TcExGfLKb6GXtnetdkUH3eBV3e2azZPdosEMCusLBd4ctTWHpWSJJLoo7tdnAergHyDzt",
  "key33": "2fVKJ1YDQJMiYMwhG7eKnkLbUxt6LTkhboZovHMq38ZzNT7rByZaURUnMaKma8bQb5UK19Mqa8mQ1UsnpNZSoNL4",
  "key34": "4cnr1LwkLAkXeJZ8mC7r77fsKN5RnDTPh26GfnFYEsAHjHaqcVkMPU2txDqsoZRYT4Z1aRd3hn6SaJRn2Am9W59T",
  "key35": "4NFR5TFmgxFSJAcMhEXnwmDP2K4g4YzG8v6935GTRgj9RczLUPD6WZh5r1LosjyEgFkiMWHubAw9kuzQ7VPq6r99",
  "key36": "4grD11pP5H5ej3KyqLA6BCcXR3P9iiuRcSUJbYR5ep5NCu48Sib1rbEg8JAakuzYNSJEqVoREMQMHGCKS8Tnb4De",
  "key37": "31d8Cq45UFAoDEKEej69qhz8sMf9TfbAERMK1CrGk4cEiwxAL1S8WZZ4aQaznMu7ZroCpWMhcunqViRkSC8moMY7",
  "key38": "2KDqLfutxaNDPPxnzjRzEgzfVaCowFvC19UhAeGjZyDLTd79g1n6dorZBGfY6oeyAM5Zchn6DEKBPEsJbwmjcHm8",
  "key39": "2aeraYdnCyV3MVmKstWzm1wcJawRJMRbMWtkfTnvwr85RDJ6J3YPwApUWZ8ZkuxJUYd542ovU65pTKK3rKuoTeoe",
  "key40": "63o9WmBqZPdT8VWJuTDzSRBQaVxMcoXvUvpnuTrHQF8dV7nqZJGKqcP8ALJ8ZDR1tZYNSQjNoekDvaqksYL1Ebch"
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
