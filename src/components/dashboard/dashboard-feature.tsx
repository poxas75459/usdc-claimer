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
    "9RV23qy1PosVMogw7VLJbX8MsQqGiC1eEpCp7wm3nouRUz99Me7eBo9Lvc7u5XtGaqCH2pKNkbfwcxr2VQDTqTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jp72P7Y8jDR8LeJV6RQUcCrrTDgLG1xR6MPDQe2aoohFdj38tLgUjE57ZJ1QaRAT7RwFB51zqMnR8u3nhsYMiLZ",
  "key1": "2NamMsxX1GHREMt5hK9DK6DP94hnFsu4Hm1wDFfFmmEpDMULd1XU2UiyhACVvqKZe97j4ctGggDre4zs1JeLEntU",
  "key2": "5yAPy94q8E8PqXbWxM4wbyuKEoMXzrFbbv9WpTcHdhJ9o35CjidjGW6duoRrH9eQF5qrFCJU6qVB5ER9YE5wTCNw",
  "key3": "57zqDYzvz2r46K6mrnztsTqjXsGqtvtLx5c3pxs2v6fuRqxF5GyciawJNBvck5C8aNpxDncMnRwY2zKxAR4Fzar4",
  "key4": "4NZ8e3TrNRpCzVpSobSV2qM99oJKGfNYnzZLPKESQ6MvdgWgDWK1PjMMgg13Kdgs1dZSSrLXejkRqVgBBC5kcmdX",
  "key5": "5TN23SrYQwKbSVwHHfU8RgHWEzZobscAg4UVDdU3vCsZyroVPVE6wYrRF9pXhzd7AnLczf1XsHKKrBdJzejsfprj",
  "key6": "3nhPgrm6izCAuwd8nr6m1seyr5JdjEWjjAqqem6kxCxSkKgwyDmadfpUhqea7o1sLw5xgfPzZoJLz8EXrNeRMaJF",
  "key7": "5MNrxQRScwauukB7qaYR1SpsFrPEEU7sDknDHtyTrHroZwaoYdHAStBZuYbQAsK58hLLGYkv1udAgAzZHSiPY7sV",
  "key8": "4J6H9Fo95efVXBSojyvoJFXzQX4B3ZtnfYmdc3KqcNK3wdEgrKH96T3qhrPi6eWJU1js2HhWv1TBWJesoqrLjhir",
  "key9": "52VkWVPDwqybaEY7ekuAGKR5htYJmcU97auxAEeSULwpamH1MF3zTFc1L6ZwfT95BSXFqQL3n1U9iSicEAD6jGoo",
  "key10": "5MjiiTDVQJfLs5AxQWNaBoYWBVAYAvbNfpM8VD5yG1QQmEGf5Se1LfgGGgAkF4AAYcwvCDudvUCtpKHVVWVxoq46",
  "key11": "t9eYNscXssZZCiHLYSsuoMCm3nAFgctukhzdsPftYUxPjQku5Utfx4wRt9V4EQ2TgRugh7nP5DPwGoczeNJ3M61",
  "key12": "37KkZ2LvnDMo15tF1G4y7dU1JGHJCe5xzU68u92rW9H7DVw3AmC4qQHznsfs3NYGEsXTbCFhzo4ew5eoXiuWnn7o",
  "key13": "5LBwwEDwuyxrukzwwM9iUWBHpsBcVhFRvCLDZRioPiVygVdw4sZZLpuumXhTN7LRbBF7Xn8gjAAmYpapKQS3btjJ",
  "key14": "K3Mm7mi6UJdXWKoS1TsEQnMWSQ8MbmMSr2g6FvJ9N2BjRndtRRmG29X5Xb7Wea6DmbmTN8KEKpJAvgWG9JSVf3i",
  "key15": "Aj4ennvKGQjngYgKsS2uKbzt7u7AwALmfKG1MZ9GMpe552n2hTXChozcucx4qzbCXGHS8eABbEWZvv2NXqoYUpS",
  "key16": "5JSWWofQPebBbHRcjD8M3mYHVWBGSJnu8qEd8spJgPJHds1aq7qagASQqboAXfRZq92iLgGkwdZ8N2ZRDChg8zDE",
  "key17": "5cFXYtwMyjJGpC4g5C3SHMfW7qrumZk8JbyWcarQbJzCaACoismur6EAkaMghvHqf26dSWMMMxSGmVMxHTeZ673e",
  "key18": "2kqpxNtq8ZkpN8S3KT2CfpVYKmkbkqohGdVhY8fJkHWjRrh5Dn5Qe8N7qo4YyxPUjbKzctZ6yKTC15uEDMBaVm1j",
  "key19": "MWPCCaHZen5otuQGN7sHxRshRFso985TJgCMbzdz5fRYwHyLv7zgAZEuPRLNZFgcGiFXkdyTn1ddLDuQruSSBEh",
  "key20": "5WQosBfg9feUH4VcSqFnoN68xTpH5b622SrZJEMDrDTNjeaiD3iz1c2LvEDJKApfEh9WvAsW9FFfNFZ3aJi3fZ6e",
  "key21": "2LkMs5Zvb73UgeDAs3KDbQejF4t9UrPVzz2EoFWs9vvgSJJiVw1GUnUp57fL7CrHqZEJot144hdNgExmS73aj6ND",
  "key22": "5MJc6eF4TEutK62wd9hvQHJKtj8PtXFHP3Q13QRvHygETsGkDX6TMXCxL2sdXnSgbmtmMv3hXnMZNyXDihYJCKow",
  "key23": "5kTqbbaVnNEqZNiLaumAx8VJCsLFwuX57AyFaMWtC1XUSjNJt9kAmGJFJdSzVsrXJZGFZr8uanTShzaLb29gMrc4",
  "key24": "3Pq6JTpf8MxMVjhCWCAD1pPYu4yiRb3D1Uo7198zHGrvgzoMRHVLXyq759Czs8Uc3tXY1yCqddyakBbxq7ZDcuF1",
  "key25": "uRFgMyqG9DU3HpRMp1H2FdskMG9D5MB9QPvBdF2575HH5zVuFkXtYW52xfgRcJAzNZKhqHuBYT3AC7Ehhb6k6w6",
  "key26": "2g4rUNX11MfQzG6nLxXN9d7SHN1HrZeZZoXhJfheruk75Nr3yL99U6LKGbVWTr7tjAsD2SuUiEZPARwhaHVbgnoN",
  "key27": "5HLtGsER8rtSpoH5Kz8VKRTJzM5ech8eTA97GjVRXpqofRnb5K9Px3Ctu3rXy8dnyZRijgv9Ur55kiiHTXixUVs2",
  "key28": "5gTLvTUbNVtNNcSgTXAcejZ5vhxxTjgFRJXFMvbK2Voo6H1JVPDbKFAZJpsy24gNGYcSqHDHKnqEP9RwnR8sxsqE",
  "key29": "4EJrRthtyLVMRBGzZeUv8rJZEvQ9HKts9UzS5MEXwuB51sQKG3199aWqR3mzqPiPtHLKDYH9k9sfJNxrYXLWYQ3w",
  "key30": "i4Dd6gTUSkgmoCK4B42hQBxXuiKbFnyJRZhbS2kwdP42C5RPCzbMSSRYhbMXaHuEQAukWEDSxGM26vGNTmrnidb",
  "key31": "2yEKCwpGBbBU2evB7ErwxBjviv1AdAPwaoXb487CnFUoYMvypkKS1HpbWrJSB3XHXdo7XcJuov5wM2ZvgSgAGgFG",
  "key32": "pDVx58DUy11arzz9MVigkzzvaEV6Ms8vuPRB6creS3SXFgU6n69EMwDTwn7MowSicZyBpGnWv4E9qdfmk3GuYvc",
  "key33": "3sEBWc9DhnZhgoVtGAzskfwVGVYAtFoKTUz7XSewy94eNj6tPWRxd5oi9xCHaBjArLTicFEFmkyWQmebAeiC93zd",
  "key34": "4GLdppPHCQppykTXMRdv18dB9ZveF2V6pE8s6SW9GyoQyo7YEKorcFaEAYdRuLF7vzVfk6HpN6tJHPvevF5jikJA",
  "key35": "624hXvtmRKjs2vMjE57v7TEmt77g8tov4bgEMt9LBFsJVD2pbeJZaUH3aWarKfCHobTD1uTBAFFTmKd6BY6soSZD",
  "key36": "5qCqRnGnteNGP1gaUf2yAShxxjxMxSDvkgLvP8apYkWGj3TkR37FGkzJ8Qodh9V5fixjnVZN5CHJfeJAetDr31A5",
  "key37": "3CjnJzXLsp1CDFQREZCBofxp9QYRqJzMoCxSQpZs3DYBEDSxgBbMpvenkdvXDEmNfHwYiHnBnY8wG42drHVHhy6F",
  "key38": "2oiUkMuEqgtx6va3vEUnv7KQBBqMEwKedHV2iaoawv4k81GWoRGQpzwjKjHuN9UxXpay8Y7p8Z2C5rDj9uiuiyAE"
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
