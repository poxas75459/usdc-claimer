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
    "4vWqLu1ELV9ahmPBUmDSw7ZSL1dnyWdPxfX2yogLCaoWgsgz9EcitiD7T85bDN2onBCZHGjm1Mp6Cecf6HjPK9ZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ga4kNnXwcMdVXESPMmTUvtqaMYt9aUNj7tKrdaZ4NgksmoHYGBiW57GDGyy9Z5LfY8eTbXx6oRp2mq3ajoJW47w",
  "key1": "9pDHVtZ1TARn2k7NcvLDgBaGBdwR8Qr14E7qLps2NVH42AGywbZ225sxARzxD2kvWxKJHXR86HLQSVZsvYWnBzN",
  "key2": "4WGnjXkgjmikg8j8gg9gjLoA17YDi2pAe4udQD8VRnbsxyW4iqyY7ic69thCsUCrGC4upRNXLhoNhTqttgPmTXsS",
  "key3": "25rarrWzmePKJaFDWnceLYqX4dLcysYnSkoAoe69CNb9o2WtVGpkkyV2WPk87LQbwqGB1oyD2miJsLbotsfmgQCb",
  "key4": "3PF9syFBCV2F1FcVMszvkW5AizrQzvsaovGNxSGKX5a2jHNGD54D5aogRAi5WGNf7WoaGKsRwZ2RUogTioUeTokE",
  "key5": "eSjMV42JDmKKXBVqe8jUtxfsWKf9m1W5dbmAswwAF3ciTzATeChxSB58VEEXGApd6cXshBK4zdpHfckbEWsq6KX",
  "key6": "4rpzFHiqfWyDhYhCARFVFP12dPmcUsdM5V1QdbzJqDqedqMiKbjvcj1HjARruJBtspZrL1UqUUpjVgsny5sfiBse",
  "key7": "4jw6mVTqBGdo3PHuCRiZys6E3Djm7KPiKJGdr6sdFXnX6A1gneYjZQAMB4nYT8Bau8iSFpEzTXxDJfAoryLC8gn1",
  "key8": "WaBnPmhymq5QnoJk4dQiSWpLjzri5sMzPbru6sQmYZph4ejSYQNvh5LXC6TfJ8nsPeJwb3i4emocHMtPfgQmLPG",
  "key9": "3KK7Y79HCmozQhBbvjSTYdDTdez8BL5ADRPTEjdFMF8NUbWPtmZ8Dz8FSyosi5JmpWarRoWH3xLPNeifMf86YktR",
  "key10": "q2qUrX3xPzoQSmpaipCFaycUnTFTTWyVQHPaYe2Umqux4veyUrWepHmRhEaXpQccQBTsPQqyK2oAcMFCepq8BTZ",
  "key11": "2jVBTcEmqVnsLXniNuunDSfEBYS1FmcghZDjjenHbMNoCsUxPZ2NdwWkkyYeQFvbVzty77H6siVY1x7MTTybZ58h",
  "key12": "52L2zVeraQScbnAWYP6ywo5RQBTLcs6R93e7zizrBmEz5nxha4Vd3ZPftLk8vnAKasMm2wzLxYeffTchP1ecMhbP",
  "key13": "2PMdZTkR65QVEvEfUSVSWQohvd2dtJcKCri3TwDdur2LENeFopeYRra8dguHw61e8y9ETsdzYkatYpxjsaz1ZYwA",
  "key14": "2xYgyfmPNxu56WuctyNW7Eju3chLeG4jEsW8Gox6vir14u1jRBZsrR9deoz2e1xmEjLvQBQ6t8J4Ehwnw5Q9qGCc",
  "key15": "5fTYx5B46ob1MeamxVsyx8eS55TKVd9J8bxFbsPkYyRycTmvNZUHQyYk9aBcvLzGfCGtvT3NbEvN1fqViUARFx8M",
  "key16": "4DdBZRtKjYpJZGB8gMz23c2xnuUjFyqwvHEu53KhFz9HFxV4fTTsquDM72tzrDpeQV3XYKuEG7XdYYNYJ15ZNJzL",
  "key17": "2tEv1rXYxqkcp3sfdK1Knu6zoCTrUNUV9YeAgrWGF5VkW9J1h3C4MEemyZFWW7SmWdpEjtkM88razX6ZZg4b9Z7n",
  "key18": "EfKy6dj6Vt2iLVcWbXDnekaEY5NFv8JrA1eywauBocSw1vrvrN6sg2aBHyLfVWUyAdakzKC2VRRHyc4dztAx3oJ",
  "key19": "25Q9c9DKRe6ZpyXiSDfk4BRSERq54v7FTChaMBAvijw6QKfgSjdckKeGB2chJtDDzFbAj8NywTWqJ8LPSpygd5Sk",
  "key20": "Jh6gjGbyk6en8fbXDPvoSSdtkQSHS2kjfxC5WGuYSxoWSzu3NFRk4vaWo18vMX2LoRjbRy1VEdeLKruJag7HZ8k",
  "key21": "X7kGqqTpc9CMfbF8ab6iTAzBLLtzh5ojWYNfQMPcWy4NdjiGeWPiDXhKqRXqAD6s2vUjkvgA91NgnXuN4vaJx45",
  "key22": "4dBocLiS1YRhfBRYDX1uPjM9Gp3HYLBrbTLbmyxLusBXtqBDTVgqpbkaVGijtzUrqvtdwYESfhVbTdbGzPJnofo1",
  "key23": "2TDK7zjnUap5bPjoJZGMPv25m8Hg7ggG5UBM1y2k9QM5mdMtu6y1h3JHJLhDSBj9ijpRFL1JH3TZYr4uUFunRFXz",
  "key24": "4Mpd9vqACUp3tZ2UnNsaYU8dbmn8ut3My64v7GxZ756rjY9AtgdmNVVdRnx74cxpckaWFRzvJFB3Trkf3w4PHSxE",
  "key25": "2fVyLGgRuNPpjQiCuGawZjwGNQQHAafCebcMc6ZQKuCYrKyJxTcduWoC81fL6TtttNzfzWW7wCi1PY3Tecs1SZXR",
  "key26": "4NaaJRcjetFnmS5oQVwb2zAZKesqaavC3853rjqy3LCmSuD7NMSAW2snBab4a8BUzqHhjUQXhoEn8zxCVqvCtpuD",
  "key27": "2g3RNmNpbZoAfYvEXZsJNiSNU9tqiAcc4xhXRxedbmUD47vHgSmrmD8z7m8YDHEAjqWxf7g8MMa1CJECPqtTdcE5",
  "key28": "L9VzR1kC92EtVYGjTSRDJ25gfXXKBZLs7cyuu85qJm9KtM2z4RnQM9cpAMRK6qeVqxCvaNV4VpCAULKW9bwfuGt",
  "key29": "4r1egT7BFAqUHzCnxjzpVJtKChEBYkFxVFqbVQXwF1LNqjLZsUFXZ7f7vZGswFZizUhwaed8pvKZXAUWdREbt44F",
  "key30": "XfrktFsajRLq8xNgCzciGNXCz2oWdfPiAePRQydy5biCYuZktreesjWgSKDiFRd1gNn9btqPNhL1dkjMFu54nFP",
  "key31": "iLcdck24fRdW57NUriZe4qQPagfvzyKSxHs5RKJDhtyJUpMNZzucGYC64Td1oXiRHRbuMzWtzP5ehCfRVUtsnad",
  "key32": "4h2adfvWTCwrnD56SchBuR4H4bXFBwKV2X6BxubiUr36orCVVsKka1h6cLdfo48CRwGmnJbBiszobyrVmT5CWoU3",
  "key33": "5EyNtwcf9vzrUQ2odmftQNhMyjGKpcgZGLicrwfxb8msAD9cT81JxkfytLMft3YNfWphpJsS3c6GBemUUL862m5k",
  "key34": "4Zgxc1kSTt14g8hkVd3MwvaVB7sp2n1JbCZMqoQMFpMnFuBu6rB4SdbPbmmmiktmCkWftBDygdfAkxWUXEiYBKkm",
  "key35": "2DSACqdsuCXt9zEDxHj1Gn9dRKNsNeXHunTijeomJtyr7PPZ5hpy5NEdXaSvPhrWHuBaaxqzytofxLX9G2J9YBmV",
  "key36": "4LKKNzR3ta1EwjugcVGMcRmKRqqpaHE8MBdM3hyGNTM1yppQsmpyhyBYgq47pEZKp8rEn2gV7YPMF4DokY6Q3NZW",
  "key37": "3uz69Lof2CCVZmTBdyb793PAYmwiKVwwLfJy8MrCBem3RzT3rPfCppzvUEZ6gSMA2qG3X27u3RAWQwnRkmHF1aBc",
  "key38": "56uRXoCSqmVxzdQD31hyokCte4wu6eddzBU4fBdBxL6Dn1xAoqqmqUdT7EMpLeKaEvKDDGgf2JBVyYN7nS1NGdg2",
  "key39": "55S6KaHtZfVpd6EX4M9Fwwo9z6fcMjToEZcBdfMcbXVqNHTyA6NBfzGoKyUgCvUpT8CFZsvd5ZFxHG9ZKTa3kuFv",
  "key40": "5h1McBNnLaRGLW7NVqt3XwcWumkZR3G4pWyX6mfamikfY6XddZAWTNSnk1LNBA7zKitQMFQfrbujAs429yqvvcgK",
  "key41": "5qND6Xcx8xiyXZ2NaCszY2ATnbkQmX6naUG3DCAjfyeD8henT7ea11eGBaXr7NTwkh92qRoGYJ4sCHvizLRd3LwE",
  "key42": "2dxvxS38kupB1a8ob9H3tYzPypZD9HqHpGdhv6tui8uh388ie9cnbQ77dBLA7J7iYqfSWtrLTLWCz9ejix84xK2Y",
  "key43": "2vnRBEW5m11AVkP4LA9qhVjQLc6AL5X7QGo5QwCCVoKYJdBNcVFsQ1fDnpE9KC5PqqRwYW4SDkRXrqsXizq14Uxq"
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
