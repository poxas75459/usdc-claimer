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
    "wup68JsSgyyaHGtiob5tUsdJYcL1PKDu8L7TzzGXeQXT5SD8fSgcSMdRbGMBr2m8PuefthpDjVp7TpUjahGGCAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KWx9evftCjFa4ay6k6mygfdnihrqMAXA7czKm2JSPLHfPhJ4zJ7iHQUDDQRTt8qzoZWNCmVNhRNUaZdJBC426xY",
  "key1": "2ENs4GJf9jXpWEVP7RQYHdjJ7ycPhr1NjiQdQHfL73WAu33hFXGM1HN8qp5SRJCzC6hJDaRS7ckuV9RPZVaHE39o",
  "key2": "5NyDjuwGhMp497uQYXpWaVBq4AZjY5zfN675TuYtASChT4QcMZJJyKp24q6AGjQBCe1MseEBJJT1LZGtjv8tBSAK",
  "key3": "5Eaw3HvUBnqtA3e8Mmk4ac8WUSfoCiPQRuQHj7KRA6V3m6cZX9Jer2MtmCiQ3fMR2HzhMM9QoJXrCCHQEQPH7Rxi",
  "key4": "66cTByuTP9Pw47z83M8eZEwji4N4pWLpAeeKsmcHgEqBSmYtTtY5BiQ4Uk4tz4RZ6XcDK45GWfPEw4g62bKvLNeP",
  "key5": "3oADNVp3jnodxdws1f7GVQRZfFYywrB45cxPnPL1icrusgXTtDA7eUPi74GaWPFCgrqfR7L2TBE5E2CwwbsPueah",
  "key6": "55i2ZmKHnSymqsraoyimWfWM1SDbLmUieqDaACeCjds1ZUX5xmsqLfiWRvHUKa9a5Hz6cxQ2acDw86RHezjGs6wb",
  "key7": "5bqvdtjd2QYV2YpCXKqVirSqD7DsbfMCadEzNwqqCXkNX9733a1Atk1nSoJTv2gHH8NnpMZ625fo5pqC8ggjz3rT",
  "key8": "45p63m7XLJhkHNVyw57uCeNnVV2dAQj9zJRQgMZJMknhyx3gfDuSAwsaoXzWxRE72omqLuC6nLJHmghmSsDn5Nw2",
  "key9": "5HpisG1aCtWHmeD1VNebExwwBum5jx6WwPDvEydigvxpGzhruPrCsCHa6KRGt34b5WEwo3FAxC4ywXxgasnh2wji",
  "key10": "8YUzeqU89duh2AB86BXiveNbdRS5fx9HXyGaRhN4p7HrUo9XY6V1cMEcMFaDY48t8nZPAoh4exi6Pu7usXbAdYH",
  "key11": "5Lr6WzkXPYVTpVvH9muB4v1swPKSzbh1YzA97yt4zj8frzoTLW6HnzA7io4T9J2DFrXkjYf2WRUzVmTcwQ6MCCWR",
  "key12": "5PJPb1svcZfyT1ZPrhekeC3uR7KaJbj4NzPkG7DNiq1AkJTB3CcNSksrW2u7aHuRAyWag6XgaeyZYpxeEyarvG97",
  "key13": "5k1Heb6gdj9zSaz2gLZkJEYci7qkB32n3uzzU7XgXqafysdvDxA67gXjpNKyUAG4CXzy5DDpt2tCcr351ts6fVDS",
  "key14": "3hdMZvBhmdQvPzyMF74HgboRemRZxm2QtN79gXJyDzxAeTw7YqHXRtuqfBwaajv526u9PxqiycmxUTkt3PRRhMqw",
  "key15": "3S4hQd7Q3QRGqcxyvzmYcdQFbtQCaahfcq5DAoEneWFPeJgmQH7rZcV1uYFaZxLharoM4zG2CEXoXWQdphgbZJZo",
  "key16": "5LXYfFWUA6rAWsqHTCGmRQ6gaCB7NVABzDFrVwdM7pg2mHyDvoNpXQQUvWnR77dfnfUnse1XcyqsAp8fe6Cm8VuE",
  "key17": "trfqpiDfCoX6wBAtFUs9D6DJo9ggkaoGcfQZfUhuDmb262avtauKMRP1ebXxFWX5QxTbQTkuQZzpnrcb75o1SqG",
  "key18": "22hQLwWUTXmwp336BV74kNXou5ghCv7jn3Pkfko41QZHe1ewqB29nJL4U8Xwq7CabKwUNn5oP6QRA5MpQ3QQ56o5",
  "key19": "5PDEMWxkUzG2m3W5at7E1jWZBk9skcqeTupx2Fh8p2uZWMu3m9xpYE76hp5pVqhPqr3gfJx3iWkKrki8tLZuaQyu",
  "key20": "2cFU3GDTezTTh6heLvDDNCHYv2VDHvxL3ZmZud2HozvtTv3bmXg2bjG1YTp65dRmwzyCEz4R7Wi4AYhAF7367MZT",
  "key21": "4kwQziUdRHzpNoXuiRCmdnKG7aQ2aR8GxJvzDNkvjFWMoEHzbvortMBkCem2t1LQ1N8trzbV4dWyenWZ2WyKqTCa",
  "key22": "3Ry5edMXpY4KYjqdwCKV1fLDGykaSNawnS1jAHtNBjEa6pt2dcp1E2X2L9MfLsFkDhXhiz6qAWW3YyKUk1xC3Mwu",
  "key23": "JdA4EaoJCxx3e8cPGyckzQsoztUuUfF8BWQtVWdH14tGLHhkqFGu4V2y7adCrLFBmP5cJukisFQ5HHctuxEMrNh",
  "key24": "5gXCpLoYQWmU2a2ZWPJXGtMW5JBRu9kx7NeSWsh1RStvGpXTcCBpLHzuezAggKdbqcZM2mS9bBVZFM5D6aaXKJmP",
  "key25": "5K9rovt9arUkhtT6a1xxkhCCWEwt7YBn3Zsn3RZZAfqtReGL3gyc4DHkjbtEtKhz9K88QB3mJh643qDrLToB5vVo",
  "key26": "nYuYFkyi8rQFxzgLF9VFYSDDXBMhtkyc2DjLAka8MNhjNxmyuiY54CARQzAhuv22PeYKfA5sYZ2sYNBs4V43cpm",
  "key27": "2Tfb1vMaA3Sebyb9Q6UU3xXg7RaLpgZdbnpe4A2EryMoAgtQocB5moNmqE8SdaiL4XvvZVhjyZxciPDKxmHTAnEa",
  "key28": "2nzbCao7VZuGBa2YYCUhoqyuee2r6ou2ZTEhp24DqFZkLJu9KTamztpynMa2ggoypvt442gqTq7edPJGFNrxEBVr",
  "key29": "5Hd8nsoi9PjUBaXkxLGwN7rmNHges7XctDreD4ZFzvBVxBKdHMEys8wz2YPERsKbu1KHHefrvyBXSwcXmqeiLiJo",
  "key30": "4vCjYTnk4MQwgaBEAJUq4L5yFHaiKnXvcUv741ebEZukUpANvE8vHv5BDq2eUrzRqSU7pHXM9P7P5Z6vc2pj3RLT",
  "key31": "5SJcf4TzuJzTxQ2r6EnEkLn9RsdsZcrzob3sBMwBiK8Q4jjsG5MSzfbkLwAVNXcmsCJDXpPuiJ53BX4JEqPrVUpV",
  "key32": "2HKnQLVPLDYNc1A6KRuDFbhkpBmik4nvoG4rkodhrq8p2djCk5AirYdGCqswddSfBWxxAqxtCPbEhEPBXevWoY1Q",
  "key33": "3fcedZxW3Znw9aqiPsFZ1UQXGMEYoXuddBsnrsj8pcq4oDQ4KU3t1U7QuYvVHebajppoDeQSYRwVytWRpJbYCgGt",
  "key34": "2fJPnBr4nukc5YGGc9R7U6gGGDs6MphCuMC4t91fv7RtJvo6qnsf9iB8rD14CD3Rr3Dy8YVs5YwBqBLi5iF9BNGx",
  "key35": "5Gysk3EW3ZsavEEfpZceBYpo2bQvT1LGhaV3XzBArkDKv851NVmFSK7wqEuwwsFC5PceQzZXX8jPypzfgYyQN9eh",
  "key36": "6HocjB16TM71kSn76ixJGAawEb52SU6iTWu8fc2PyrkweRjuevJsbopUJt5tuMBVYkVhu96AjucgAnXupBzT7ZE",
  "key37": "5gAeKmmwS4HffQcigNURcVHUveAJPvJDqv5MQ7S6iPp9ZE6SNLonDS6124bnCbvUrDZMajDTu8K14fg9mmRsCm1b",
  "key38": "2DQGjRY6FtB7XQuUyRSkbeCEdY5Qp8CqjojNketXpUBvchvuDhjdJvnUEhxDE7SBwvEWaKypEFVGaFibwqQVpf8z",
  "key39": "V5xUwc7RW1KmPd9oGfJ3arMfzHiRHSq7FgrtP4sNDgv7FL6GSvNoL5k6BV8JjhdLYLP8QU9GnTmTKJ34K2qd2uH",
  "key40": "2YAoNWUymvWtrYAhHo898KtF3pGYLvTjSfxhpADp9Rf2QBUCK4qp1FJhCGMQqm9fne58szQGv36CYppDH3Q1QinW",
  "key41": "43C5aErTvdVuJVkCbLu6h9jmJNmS3oUWQCtAMQeLrL9J9GSWnR1AYpQTpHpKkx6mDnN7zptABd544xR15NFyB5nL",
  "key42": "3XXZVGcxTJNxgGnfe3KMRpUnQsAtALFc4xsmMPGpAypCUMZxqs77Z3tRgsvMamrJhDzna3jDXQ9yLpg7LchUEWZ7"
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
