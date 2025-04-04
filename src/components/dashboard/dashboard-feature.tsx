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
    "3PkyZeSB7H9onQXVhEtq6VQrUbpsAb1EbLCpWsj3Nx4ubRfXiHYXPK7mj9ob6t2855wCyYhNczP9UgLYCKGSmHyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nFJ1CsJxGUJWT6hHjCb8ygwnpet2RQTQajhR22Sj2RLnQ2qFpSs8tgZDa7AM7ojwLWdFtAZNYshJ7KLfnjRXThr",
  "key1": "2gRrsdvcFu4Fowoa71Mrxyw4P1zR4cnqM3jc55fyGiE9uNK3bY9bJzbSrAoAAonUh5Gd2T44fHBSjnKXhzPwMGgG",
  "key2": "4HrVq5j8fXiZn9QoL9pi7tyBE7fkGweYJL1d3m8zarqUZmCTDMHRvnsu3KVL2JaVZGEWERpSsciPMErVKNsf8ri2",
  "key3": "TDYoJJCDLdyxqc7ANm4kFshByvJ8spP1yKwsR6aNWFwrshMnV2AjRdBuw4oMEUKQQyJ1cd518xg8fujL6U3aFvb",
  "key4": "5S1zWPhHRr3yfMuoG62nqeC4D8s56ZEhdgJbPPX8SVQTQTAobcxYBRA6xTg3dQXMsqPfQwn1n3xETo1MsBBJgU7T",
  "key5": "4kNDHBZYaVqyEdkoV6sgUgyzq5yL5MmFx8oLKU7iRc8VF1nWALm7PQbZWsu5JyLByGdX8rABkVvXWGTuixm7Y6rL",
  "key6": "31MJEkTiT5EZ9adj8YPxwQjQEKoB8h8LzLT5xPU2UJGhJAtXe5fV7kzua4aQz9VJ4Jm59JNpGCUPwuJBpiKjgENM",
  "key7": "5KzwFCk4Uenx8APTMULQ5Nf7X929wpZTAgGKnEtMZ5TnzxTGbKqoxL16pZsfc3vdLUJQNdVEPdx6r5zmqMZrKzDz",
  "key8": "2FHTEawLPrcBBGYn8Qup5Kt9Met8Jco6xKRGnZS7BDAzcPXFNoPfNkgr8uTzP42RhAz5EvtusG3boeWGPGt7VK2A",
  "key9": "5NYYAyHGTMcvuoHYZSoWCH4xn2H7AEb8MDq3HtFpRiexMSdBmDfQaTm5aBqABqs36VhVAPCxj4hPa6jkgY4XJBvZ",
  "key10": "5hfQ5Q4ngE8hTR3wCnQnpKVZ6MZmoPrmKFMX7J5izLavcSxr1WzT3AVKwut3Cp7fbLB5W8Hb6BtL5ey7PN6UFsGx",
  "key11": "535dCy7Bc8qAX6Fmbhy9ee2jtrU9t1NVcJK6VZADKcZPJsPSpG9sQjjd8bRYhb6kUiMXJaZyDShmg3dbnM55CvLs",
  "key12": "51CsAPTWJgNgqcEMB22gEcMGdREwbe37yNyQ7PbRHEX4412mjGSG3W4Q2Pu2X4rG6rjXHm1xRVVGc65zjccM2HLb",
  "key13": "UaXpSb5AdEaYkpk9eSvZR986KP7ctoBwR9s1bytAatVic9dAVmgt43pQUhJqMZEkQw9KKp1YeMx1Jr3Q7eSvSHN",
  "key14": "5zbq7cxgiYSc8iQpBgUGBuv2CEgjze5W6eZcygZPJULk5xyzcu1joFG4kLjiY4vphyfCux6XXUP7WjApEixuMSYJ",
  "key15": "4LLACJ2fPazmgXJr2gWaFM1wKsZUv9bu2eB76nJChQJYiJcX7Xw5mYrd6cwgFYGztdn9UDAHBsUC44Yq21Y8iC6Q",
  "key16": "3B6XFjAXDSiPZUtbYbSBTa88xiYmQekWbPzV6fVYYfTY2mAFCe7exRx1cS9h7zdCinYBmwuLHsSFgxsjDRFJ424g",
  "key17": "33qiS4PNEc33f68DBkkWByptYf2QAvVb7CdJe5yULWVLEMqns92kjHGSmLNUVeRnRK4oP8j715ws4jAPe4N9j8Bz",
  "key18": "4UC8eR4foEzdrfRmipoN338hToZCo8us1gcw8cVVwq3iqotGoZoTVnsjGC2Z8Gdwe8dF6LMVqJLpKa4MXp6kSZ3o",
  "key19": "5ALsenM4vgtoVhF3SnAT7aFAeKP7mJZAVYnZLxAeYzyaWjnKDoMVVUstmfZsim6C3ZbVrEkBeLXtodzaX1a5cA4N",
  "key20": "2Vhhm6mZLjPLEDkVLwrNMBoexPRP1nHvYrfPQLtCGGHTSNVNzJ6vVfbnMgDkBgYLPFYQaF3nLcpoqhBcFSZzmWNC",
  "key21": "3Ff1RtmaJPThkWXoEE7PCBtRiFQCGaX5xuQrazQG1Lk1wMGXRJDmQRtfxrTMhcvWRnb39cR9yKVq84dBHKhpkHdN",
  "key22": "4FXJTQFwK3yLRM35zxjxccdQiqcTcdBJYu6BG1wg422zBT5N3NHhz3F9zDzyaEbStK1Xsk4PjypEfPrcEGhFLmq",
  "key23": "51NFJ3Ao1PftnV3CrJpi8CMVKGr4v8jDfk7BCk4rmjmbhFzC5zzS7UT75XF34fuuVLC8LVrMuFkSco6jYFiuJnAv",
  "key24": "53jSMLnbBNFbFgPwwBysym6MiFY6SBDC8edZ5iyQUHAQKCmEkJjHDwymSvyYY4Gddb3syFTTrACVuTf8E4wa6knz",
  "key25": "3yfevsUujf5oA1VFSAmU6ew8uqyXKVM6QuVPSVx9GGEiuqXNk3d9ZB4thfBDjQMXUA5CVQtEmMgurX6y8FaYZHQD",
  "key26": "3MoCit7YNpcbhD5fBj9GBhLtJ9YXzj1Rzdbv7iA5bn6e6dmbKTTrcsW1nY8L6CyY24pB7LXQ8dyEYJxdvz7T7Ydm"
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
