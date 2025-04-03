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
    "3QLJ7eHZrChZUmox7QrpZX88A1Kd1aZifgd135BFDLqa9Rbhz5WiCrDtw4DBadLa3UiV6Wx6TCMDG62mNzFbXs2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHJcFw4N26jVWSJGHLj2SK3kygyRg4CDvARxTfwWVrkZcCCLz52kknT3qJstyWjYKkqSAoET1hiHAnBMTcdHN33",
  "key1": "4bcL6uG3R7LjQfZxHcm7NnFRHC9da7CDqNHzpJUPD1KGzardtvUs5XmN5wFgvSCja4kMgtsvXNhmpNoVtafDVZ8S",
  "key2": "2UUcj8HatPfngSDBbYtqhr2vsdSr9ZbVhXx8JVRS3i5QeDPWLC2RRHm21D7dGJ8ArYZpCGc1a6VkdftCPrWy2NbK",
  "key3": "5xNWRJdH1RrWK2iex2pgAK1obJye3LqXzYQxbeXY86QXvdKWWppT3SojJcxuJMPPXCk4qDkASv5dpK14PEtAurfN",
  "key4": "5B3eTMRRyGNKBm4Twx1UmbxDJ1dwsYo9rCZDrVpoguMzUJ1b1Hb6Lh9oSSncXjgMwQR51vVhHX7oeaLypaZfyzqv",
  "key5": "29XwA9mQJrbyCR5CNhbrbfTEc2s3VTt3kxkRDGHiQFavTApfEN9pCzdB5paG81J3DiUTLTZFmxMKBbc7mxjjGYCb",
  "key6": "34GEZwVhSqEsELwS7hhxLtwaY2bqLvgFcqnLrot3h6ffQZT1C7eE8Bt4GAbd9JRd9G8fwL4TEctS5m2MZzP9eFjK",
  "key7": "369PbqWeLDmAwYSvNTrENR9X6CUyViPr6o3WbsLyFCmk96drRXzUaGUnkXqGBixsRVK9oVuYqdA86dYjqXfntrUm",
  "key8": "3CVqGiosyqYxb8MPHuPe4UX19zzL1tJgJHLav8Rkt2yySxQZpaNm5zvfVJLRZribwkCVudoB1TaQhQAkJqZ6PC2",
  "key9": "5geekvER8CYiPo5rkhp5UqcK6S4QtE6JHhi1fagdqFyAkTcJGtGAfH1vKHL5wXk43AMPX2VHZqgwtbyUp7jvNpj7",
  "key10": "ab6KzXLYSimXPDH96YjxBRBRB2T6vh4pVyhFBwGtKdtjh5HV6QgMCjHPBXLqJjGMNFzgcrnKEFqvS6Dh3r8qSsQ",
  "key11": "4SYvSptMradxNWCCWyeQPkewe2v5c2yHABpKKftEpHkmqz2EPRzZ1pjcV7skQdViK7fqrYW8jLHE1Hxfx454WvMa",
  "key12": "2mUx8pgTFya4V96UHMHMVSwHXc2YoXgWzTVDs9NRSwJz59uykeZcqGvGoPeaHwSySvKfU6AVcKnsgxYgF76sSar5",
  "key13": "nwcASzPMSP3RaDY3vuh9iT6itagA6BgsdqZMdY8HXwVGEtpCdmzzSkNvWpRQCxmpWW8fNy4fbRMGymicS2pgwUM",
  "key14": "24WJgvVYb3Z4GqNjVWbVammEovuRpyBG3a88KMxBVrq8r1N8sbJDk3c51HBA41rtA1ao1Vwde1y1UrFS9J3yGWuY",
  "key15": "4h4TSsUrHegqACUW4TGvDFPGce7z8LoRc6j4gUez2Lf9jtwoB33S8Mm4ux4SyofuihrFyyX8SnqTM7XKnMLrCABp",
  "key16": "5BqvoFXfWN4tvhCZaDcXAAUWhqDVRmjvhPTcUmhxv5HzE4WM2RkitaVYE4zHS5C7DmVbD4Cddk51XWXi4WxsZqWr",
  "key17": "5Vpk5VFxco9vockXAxBzZovoSSJyMe1RVbNB3oqMCJ8K3mm3feWJY959bKk6ueo9UycvckgEbasMNeE21nAua27m",
  "key18": "5pxr2nXb3uPHqfAsU31xLxHmQX7fGQyAjCU7UwhuZX1W4m8mHhQXfBJ5AjLHtwsFrxyYWFEkpdJFDSiy4R14fwKF",
  "key19": "3bjarihyu24uhTnpZpcWTGPusHxWSyxucoH5RyUcfqXzy1wRHNyvAKvqaXrTJtTHNhrLEV1XgQsTjzWRoFo4NGAC",
  "key20": "HdsNFWF4jaTuKPZsSMkL3HEuFauboGrsASfgFJVFeonTvM23i26W2ZXmGoCx5rAUtiE2kTjxuBH7V2FfdmTbCJ4",
  "key21": "2SXHUa72Nmqx18fXkKnV8ekYC281JSTxJpnxTWRQCaEum2Q6b6b48HDqdRUe64uqQoboCvzdwmdYSxDyi3h5dVDp",
  "key22": "mnuoNVimVv1KFZYPSrYEfpcGDMdyCGarGjJNbKN13gqPHMJw51KQd8XgadSi3NbajtGpgnPFNZRdobxXYjdbGRJ",
  "key23": "4RVESWFFZcQwu2rm63MQDhRgNgqHY164eSkUY26AXBk38TPPm5hGpVQ46JnmSXW2G2YR2f1oUeJyYcmpkn8S1HwJ",
  "key24": "2SueBPvAfE81KQcq9LpHVqwjaCvLAv7QH394MqKyiaysmyDpJKypvKdQvyWbKPcq9GP59rWcBo5VEKiwpx2ZFsYo",
  "key25": "5ZYyJ2rMbo6d7KTynpGNkRSfX39y3qiQ6SCTHHZTZt44cQWoiMvpCfStSLqkSS1JA4zDP2DBbGcXH8S48svL3BuV",
  "key26": "41D675yiGEjjCTELyyYAL9gf8rqSc1K82iY151LtbF2PyZnPPJJxJ7b7XmzexV5mvjFqpPvhs5yDBGwLeEKcaE1x",
  "key27": "5kERTFNMs9sdg8TE5ikLC1Zdi8RULSdqgUTvfzJwJmEfBXkUNGZ8BrFXQRcfYuU9PuDQqdptcEV27MJKm8N4F1ch",
  "key28": "eepbpFcb5c2etjLJrgPVUNncJybeg1KKbJWfTjdrM4DJEwQ8dqsebSZKvEoRjnC44vjhinPwKej3xneAUoxeaNZ",
  "key29": "6WaynB1bTY8CCypcitAqu3SSkgWseMQJ1qR2MvHKquBKuAdp1f6P2qVuvrHdJM9zJxTaaucyraxo5qZAaqHruqD",
  "key30": "5aTF4fWVf31oXtdU8Z8xQMHnKVADyrPTgxuHNMk7XeoWcSksBbe3SWhn9sRFVmEJtTJ5ivtKUkZtcrfGrU1jEvmk",
  "key31": "4MmJcqa3cSJDqB1FtuUnCvH2FFCvFjtFJ9gWa4QHdkJfGK81xnE8T6aN8boNhydrfPEfF2yKqu2qLuTYAXPNNyJs",
  "key32": "5ewbdWrQ9vV19p5XyZYtCZVQ6bK4qXVvsEbmJHZwrc8eRUJYitpri7KZNYm7LGXV42mW8VeSTc8HHC5iZ3hPguzm",
  "key33": "5yqdSLDsx46nE6xHnGyYiRwzUAvW9XDf2KX56wqPozTad54VruJ6EnPwwxm7BjCRUFcTbBYNCB7wN4s8RZbShdwn",
  "key34": "2imAPaPH1aoHWk7bcnkHXxv4vKLWEqPidPyNaZ9SJhV9yLGWuoTBY85xyWkrP1XUDwonoqUWJiYgRYaSYNPkEc6R",
  "key35": "2zXGtpU4vcU2pQw65SjJ42NvgxyprdM87hgLGbRNrBcseoRVy3XjkV7sALmZcsT7k3n7rSL5DzvZxfPnGjXdaDKv"
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
