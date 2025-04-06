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
    "2Y7os5DVWgrtXspZuV7aXKWWGpUdV4CeQ7gYWo1NFVc8d7pt3bGLuNT581F2yf3TQdMa6DtnUUnhgFnWqL7bMwV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uCAYmFjCCDcpXXNEMKoUP2UT3FyE96qw9nv2JenFrECTBptdGEtW6kGNxiCchLNDW1MdUYPr978NerCXiHwv9Mi",
  "key1": "28PkcyyLCgqCTLh2UVutehhJ45SoB7pq1LgoBCpKthZdDsFLs6tqrcuQZdcQigSnRkG8JYHDRGKCgyzz7F8HLzgT",
  "key2": "5emC2uiBU2mzM9EnnZzVoebwfeCqvPLdauNjq829HQquxhqkGfnaQjPWJcsm2Bith568CyT1AvQX2mYcb6n6LLsM",
  "key3": "GHcfqmjFQt4s52cdnyMqQ9KVrCc1A5cur5qLY4N6RpC3iy795EDsPEyhZUSkMBZCguzmDtipB6fuLHSm1hpSqT5",
  "key4": "24nxW2hCWQzUzQR8SS8NHTuXsnTXHiYTZikzF7ZsJ6ei7AcSRWoYZ4TySQLucqs2CKLCvzvybZ4hMftmjdgqa5tk",
  "key5": "3mfW3e6Kn9WwS95i2LooXm8pPVNWA1ZKB3pqbsZoRdwnMf4oD3kmYRjFtu2ozSZWHTSpRoSNVjSLx6i8FK8EUx4G",
  "key6": "4bVPGPzj7JAvjrg1fsxAf29ebQvqfWMAxEHBTqPdYEW5H3DgwsgRR7n18jUMn62NTnr1G7HY1pTH2aUvEy2pmpov",
  "key7": "3vMMvVqM72smLX2ffNJuT5oJbhMcThg8wCxNEhVpJemb1oDYPgkiKnH4hEHVEC5okFnQ4XLKCUFhQHZVQ3z6bKKn",
  "key8": "5aR5eS2zvSaPam8u3JURqTrGZiFEk8JVXotALk6jueBrZ7uwNfHMS26gprYnr5RZH2e6sxgtkAaE6PbcD2yFuRiK",
  "key9": "51damm8vRVr96paW8PvpA8NUoj2SKHt7VYw3ECEhqPUjZJDNiiALgLvMWbFkGkE5QCktwmggJj7ZYR33skGCVx1k",
  "key10": "7iiextiT1CaqcntHcv1MPawKV3QvEvPxnvVyDhzVvFcEEcQgyHu153G5vMxuv5p3b3V2HskUBdyE2pMHZWNiXEj",
  "key11": "2ZEvvTVNaZM8P7VQCWhzHbribF4FUWwYbndL4Q4DF2diyt7Uc7iW2LZaFft7kDruKH8bZZRPqXzCEHfJURAx59F",
  "key12": "5WFC2a57NiS4cryvsDMaiPr8EGAfW21RZEeX6aFTe1SEVTB5gYkqFnbvsTWrVNLg2JVWA83wGwuaTLPH3yud9GYz",
  "key13": "N6yKEa5aCcZaK6kLVSf9J97uGt8Hw2GHRX5uSryZDb8boVqxMvsfpemBCZctm8fjiTzUHXaNU4LJK7gJoSUuaiM",
  "key14": "4zYsipm89usmdeTkLS3gSnE6DTUeqYAYeFNesCy4qBL6a1qQNSXwxqqJcsRbfqvhPLq7mdazTg1NLvAeR6XC56N3",
  "key15": "zeJJpR4VpxAd4iUbfaDdhJ3kPrgqcAsKzAn7uBJDxsELyN4BzcEKEHB4X1QrNGPdo1SpaSQbrQZKUxppnmci2ej",
  "key16": "3uoS2XXoH6ajRtWg4Ywq1eYrtYuoGmAkjoeG7MRpTALavZA4UnzrqPhuUNzhC6UUifNhcX1dPoLJ1Gy7UcJcGGSq",
  "key17": "4YAAgmh4enqUNAWwrYzSfjxt53bwNTjyV6Jcgbed19hfYxHsHfWavbLuUcwXGPGBR6gwEPk7ofNujhwM2PABvy2C",
  "key18": "5hNmSEpvEbPpBQmDF2tUoxTGHXx6JHn6XkQeND2BEiwcw6uACWoqCxkhaBRapYmBvD6Ai3asEWiDfNgSYx3Tv7bM",
  "key19": "2t1wq3nezbeAysy9VFV2TEY4F4fXiMEMF4MV16jgCdLJCHF5gVy8KSVkixfH7kK3MbGriKHJ5YvWNf21qPj2zQhC",
  "key20": "3bsAg2GNDMfLWHn1kjBuKkyJH2Tk4ymRh4fR6FGRP95KGc6DEoPNjmyfGpGyPZxz5739fB9KFn3iXS2p6Lzxxjmo",
  "key21": "4NNuYxBSVPiBjo8TZYr1rMHPK3EKc3qBdKrpYUTv66m9QXFrY84oGoJhxYqHQf6UzejiyggGYR3n4xxuLYbGruXR",
  "key22": "2TaVkysj7Hv327evNyfybBpeq6PUP5MUWf8e8YtmrXxTYj1jvcxTkTh3goizrWLgUWhQXHZFJu6t1ebjrRxLSbhc",
  "key23": "4krGRrNZprJKozGdmkfehukjTgkVGbfJVjRzLN5b7WyjNVXxZZrCMVeMvrkoTrDLM9EV4Wc3U86XfMfS8z1mvyVf",
  "key24": "5KKcdxcH8ahapz8BBjUr2tSnJRQyBLwWxmYUNf4Vhdm8gB4ECatGjk5PbS2eEBA9jT9k1SDawK2M6SJjjsdZyNsR",
  "key25": "5RMTGZ8J3ezqdtAsRjBSPkgKMcxoxgdiyuLYRZHn58Gb4WprhBZEhwXYMedjyqCQKXqfCjCQ4a528YZCD36LMrm9",
  "key26": "4ySSHiBCuFmkxwtq5WamoZim9ivwSnbPjJPFUbD3qhkCx9Eh6JFfccqknztiTFxvjNSBvXHtG8xWiyDms989BRBR",
  "key27": "5NnYE9rVdaoGK8NFm8ETX5TLUY9526yunAzqzYHkrni99FtQB74wPT1xScpH5cCY98NjndfXehN9zB5YMM11aaac",
  "key28": "2HwmjtHFKKu7T4hLLuUgWFDEVjGKYCVKtcWaZz2L1EB5Kp6NstZUoCREBQGiuyHj4u6zoyuGgC19omSfXHXtJe5g",
  "key29": "4h2QngNmTrskWMxBSQdwk8UZv9Tw7gwNDak8jyhHmBSdCnRcYP4TBDB1R1sBBbcyksxibXLV3LkqFphqJGPxKCng",
  "key30": "3rBx4zKEAV9cgSDf9rQhcgieKF5mgHCo4GxL6XwmbQvrpWhSg6UGZ5RiyjbzFkSmH62YTDUHZ7mHbS6hq3i9eXCr",
  "key31": "4EgMK4RRj2BUBh6nMvjwDVxCmB9NuvucZ3CjZvmYLDvL4Ztt4Vv7SQjpo4wQ82LP69cDcNPeNEEPCfXWJid3Dcgj",
  "key32": "2hWVPJ8hXGQca6ktv1A4EPUXsJQdCRuxzwVx8HPEhdNjs6ESdjpBrKpQHCeEPSaL3cuMAZnJMYVVgZ8tahba7x9H",
  "key33": "4fyd3rbz2tzExKMEgzqSXyTNBViiWgud8jXzB7h8m5VPSGkx1Phu4C6dcbwUrteWLPmuRAY5aYNgezgVp6Ruopq4",
  "key34": "5PGLm1JHaUKoJverWH3FyxnCETCwihrwBbM3tiG2Ky1KF66CTDnnqaHQBKVtaYECQo8uS7Dobf27eo3tnUiDpRXL",
  "key35": "57w2rvNTcDGg6SyDfxUqhXDh5cjGtwSMLsQayi5dBbQYkBwuvMDyU3kd9zEHSvmgth7qaX7JVZerSq7mJz3RZh79",
  "key36": "2EqqM4AFcELEWE52sHakfqCk7Asnb9GXPx6wW36zT1GhqLBvUrWPu7JSM4uhUFei9LSqqP5uDp1FBQ4Au8E5iF8b"
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
