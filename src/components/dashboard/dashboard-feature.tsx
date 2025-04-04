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
    "4Ffs9Q4L64JPoAW6ZEwJtSmr9PzQVQe3NX9mPJoYdVMXzRL5jxziEMFbXqebNBDhEUpCpkDGgenDcAbETnZt5WnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jxdNWzE1nsMCtDMMGGB9G2PXhnNqAia3vxUN6uzm3kyvA4j1mH63KgmjubwtRez2M6MphdVtN6vYkTi1rNUgC8d",
  "key1": "32wvAjGtkosc3UptBsZgX19hW6eBF3GaNnv1sz9NNhtZ32snGCnUgjqJtxzumiFKgfqaRsBFfQGYXgUxdUmhw5mN",
  "key2": "Bk8MYAQmNvn9MskrJjpL4KwRJAyKcxKbTwTUjwSWXgvcm5DuLHC1WNaWN65BukVbZ9gx338DeKnCcH4CMX7WQo4",
  "key3": "UQpDkoCNzcuErukpKSqGBKpKCa3414DiwCjQbFrrDfPw8qED5fb8zEHYrwY4NQYWZcqE3ENj28DGssnk3Kauo2c",
  "key4": "5Y8uvgcNPGUYYKdTxf7p9osHKiRzRLAcBYXTH77nCQriXjE6yGAwSvxob3GpZJNAoKnwGAsjhmN9n54mJirnUDG4",
  "key5": "3jYF9q3BoymRHqkErHs9cAaSHTyEZK3Y7LYnNuR42Z4SfCDSZ1K27g9Lkri6BSjt1Bo9msJ5y2G6riwD5fq7unHJ",
  "key6": "3gz4xiXEkPk2ZV8E8cov55kFo395UkjrwUT1N72eiiuEbZ7SwWXMuevZN62Matcy6L6eVYqtEChtPea8enRG8g79",
  "key7": "3bQXsZHsjdAV7P4xKpWrMQ1syULcHBKbuEY2nAgGM8mJfkvYiCCzUwgpxecgN37DKgYkEz6Qwbj75389HdMtEquQ",
  "key8": "Xd6ScnMTxT9L4DKmvSh26X7PSY1w9n3cXrk5azL3g7upoR1HgSfVLf6wtgdqxJDraq7r2oSujPhFRm7sUFoD3Gv",
  "key9": "5F6XtjHTg4saqTKHZEGzE7Xg9AAvWNufz82gz3PG3nqrSc43sGrPsEERsaPoegTQGxHPYwSPbTuBpnwTLibkXTns",
  "key10": "4cvjB8WBrgg4fNjQj74WNw8BNg7fFjfrUrPZPjKguchF1v4fwJftcXBcm9VQH5hkktaUDm6odYHZsD22a9gquJWY",
  "key11": "4SvKoS5YmDGnVpfkCGd9k4cRZurQcWpnnSKRhxJj3NETtGD84UjV4TL6FTJFaz27cSp9WcpTghszGHFiCdH48BoS",
  "key12": "4BYebeiXxcvhinzucDqa957mas4yoTfgZ6cnkKAZ7bp2efQ74c7bdMtcwGPYzoiyyz2hj41u2s4UENpgTbrMhjqC",
  "key13": "3is2jP9DWoQnd4ij9HmP7igmGRQNtpmq84gzscz1L3r1i5xEUHXAQmULXgagvRT3VbJGERq6Ui7EMKy1Afa61pvE",
  "key14": "YcHrsHDiQ5XmmHdfW9hQ56Ct1Ty223YEEBhVygGNaTh72G8ooiDxybz7C6BBGDgKb2SNLJ5xh1HjTDY8RiVC6om",
  "key15": "5KmA4RCReL5C2aMx87HLka8cipFNnBMNowzkh36S8PNZRjXTyyh3BhVACWWo44Kg7dd4ELxQovKb2s1zCTW2Dk49",
  "key16": "66EqvBEchRZ2C9HNrVN7p25x5yR8yofv1e9dY85sy1a3pZcTRF9EYzTkZJQT38vNuf9fCxSvaVrFA6fJ4ejeMXVg",
  "key17": "5gnekM6C85jtf1uwC6A5WRPXJYZMdKaP5orDVarYniXVtSuKmYrwsfnxFKvYnxTovYyvb9KhTX4z83nV8daGnPvT",
  "key18": "4sBaAr6AtN2oHoPkwdfG4wGYSV8EKV9AwEegErjSkrSLv8xm2DTu4Tk3A7M96Si8WFm5MG8rXCMPLkEC9VrKaYaa",
  "key19": "38xeR68Ff5zbTraaFH6LpJZDsuXxbpd1ubV47bgpUaG9EQutzKVeV9ByARqGVfGHJEnZLUvNBCid7XvjX9udMwUA",
  "key20": "5YNUds98DHZgRqQywtt2QtufEW2c3JyaEiBgjuJTUeghr7GsPHS11vk59xNPmtjJz9RhpQkPyMmoQgrwKXrBQagK",
  "key21": "Bp4QH242nB9CJuGLbWTPAosEzaTPbFA6NDpdNAwNSMwYWmpMeELSUY5WwknziCEZioqH9HsdvMGVjkrSh8MK6bp",
  "key22": "3xeFkh8h6TjgJPVT8GHwzjPDyZnvqxuJRX374BJm3jPQPRNfBvjzPZFSSxo741z6kzWeUDnfNCzsFA6Tzy8FjCvC",
  "key23": "61C9oRXAVzovi8zT3uTFDHJiYdR1RFTvhuUci1yv59hCccaCkP1nZZNeiE68BjuX9wwzUqzaMV8VJmd7PLS6vqcE",
  "key24": "4AcBMY8g8WV1eUSF5vbmbWaPTiMg9pRmabcKfkXGfob658L3pYjYgF3Tib3FsgYV9qjvjT2V8hg7KLuDRMjt656r",
  "key25": "4S3TAy3cdV8cqKmgHeacUbfTLzerk17rBacVZpLqajoEyyRkYtYhBGiuaM9aLqqPhfSq4m6UNWxqVbcVhzrBJmjj",
  "key26": "3c2PJ2VTPFe6B8rFUYCovT7jcrYFSMwYt2a5SFPHiZQuBjvnKvtS2fWKp4arhgwCSH8UDip9KRdcbSre3ZTxDpJr",
  "key27": "3NrezJpHjYFyhphujWJo6Px9kdVjRY6x6sPUGxyyngH1K6SjHGoTDgBCU3hwSnj75L61HMgxrHUzso1rrecQ2AZt",
  "key28": "5PTFtdvWphBX2Ub3xR8ikx9noxCYB4rF9HDpXkzaicQ6GsRz8mXd7desy2DHiPLSzyLCwTaJLhEfYX15eP8Qn97a",
  "key29": "6SCub8pVrpq2mwh9NeLcQaJPLi9GG6qM9NZJUK4hMm4dM7sqpy8PBrxWbFqRGGzUQZnCpNm3iW9GzPe17d1MA4J",
  "key30": "4xXWrYWM44RjkjPGhkFN2pi4JzBzVyq6hQ6UB8uNMCkmSXecPBYXW5DDdkDiR4bWf1TKZR7ZRufR5fp5woyAning",
  "key31": "5hPdDLGLeuGcLu7EKewyL5FS86b4dCa7CKa57ZouffuGxyL4wBiFXZVWiTyKAPGd4uY1DeFN7GUvmC74nFb7b9yc",
  "key32": "4C468KwaLv5Vi1Lhic7TXYMmVMdryRDG5MAMTCQb1nNRWV5qFGXZ7aYSd5au8BMwNZpQLiTb6oW2RpQnR1TD4NLM",
  "key33": "7JPZ9FcpcxKmGWCnN2Kvs8iNFiM5sfyGPNbD7HhAKTQ9wGxGS5369z73q1p4PjD58dyjHBE4VGi1Viqu1iLtkyS",
  "key34": "ktrLf1BiCLonJCXFAc2TCfNPZnYfDPXLn8BwyfZyH4w2ckb35nSvqqhqyPDgNvqvQYiWpQhkkNM1x8JHcskh4za",
  "key35": "4H9q2btdrMsdcghKHp5ySrEkFMsWJENNVrr7BjpoG9ZitPsURGecM8vNShvfsmLYCkEgG6LWotdPRJtuFaPQpk56",
  "key36": "5RGSfeaDrksicptaNtsLyGtv2dwTU9SJE76tmeNPJeMb3UpJ5tEb4qmTJxoXPi3d8ryX1bf6mR5BEhKU3DjcaQj8"
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
