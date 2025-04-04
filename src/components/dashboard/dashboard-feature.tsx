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
    "455UGM4UsVfdXeqG8toqMsiX8DtXw1u8AbF89kVVvEALEwFEpDnP5qcQZu4zw5gJKtza8KspwEtNTNu4596PmuxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LaFko3aTskcuq4GtspBSpnJWn9aHFYyA7BLTdeNWApzHX437AZFwKNMU9JoQwpSE7AFDPdc5Cb3miAy69smUiek",
  "key1": "YxSUF1ZLkg3hVgWQSemQtJ5N8JR3Vm7Dih1uRAkcZQsCzjNJTW4cyYEEkiRWuzyuQF1gjNHhpqg74LyyJPiFaPd",
  "key2": "MsDQjERbiPWwjFyuY78umoEJ3we4tRVTqjGC9b7joAHWXFgQky4fhS5Ae9mcEWK9moPdsTxj4ZWUaRJtgg7RV2V",
  "key3": "54jYWKGPqawfHwjnpmyQVgj2oQzQJBsTFZ6AstCR1ahAD6FjiEk5Wp9vuCSKxSmV7WU48tPuGU5QQntrXpaxq2SH",
  "key4": "2tgYAfN6PJGhbcnrSB84nU9U1iLvNLeRNHkWk7gsMhiqBombabASn4i9Z4GwGrjk9P5Rq6ZZZUmF5sb2ZBJW3X7C",
  "key5": "b3TfB8U1MQMXSSvdhQhaTmYxksedE3us3T3DmMuzRR3Yku79ePLg9nFrRWJ6QGaaAMHhVRaStebPZHKpneujPdu",
  "key6": "4Av6fCHNibS1DUtvCDYo5bnWtAipkFwucwo79WaBm8HejLGVe2M58eHxviRKDKTe9q33ZCbsW2kX8mJHW5oua7tS",
  "key7": "56CbPUkea3USigmgVoXF2EZBiK9DhjHtWpGM3XXnbyUYN6tKeQ72WdJhu9bdNAwH2AKGWYwFXrgGHuVN4AYX6fWY",
  "key8": "ygWGqSNsQwzK8EjtQrRK5iYLwmPLLLDmvZzPxMezoj7vh3K9eAjcbFmC4stLkUDKZKnNm84QqTDw1rRdgBHiRif",
  "key9": "32D296C7jDwWGHcrkomC6P5qJ9kNTLCra8DBvzmWmD35PXstybKLQP7JQaVUcMxzhr9wB2r49aHLqfXUuxXJA4GQ",
  "key10": "4koUdeNPvE36uQwosDxAxjAdYniQ6LqWQKJUo7ERot1VuJuFnqzQ3hquP1d2Z4CvrgbytzjhXYGGhsZffeSJEn7E",
  "key11": "2mDvMkovUjofkihpzwZTxPeYvpAFzvYRVdewZprutpDzvcSencJYJiLaGjXiwfjHRQhZZ2nTaVsSjJRnQhtkw7Ld",
  "key12": "4hNaDMS7em3iLh55zoE5khqVpqj5yLPc6wVjPnsxYX9ZFStsVSZSF5yfuxqBFsQBDh5mHc58huARyQ5g5dij6fKR",
  "key13": "26SwrgYhaGkop3hxoSzhzANMsvcxae2x1oySrEPJ7VNdUh6DAL7pjgjxaQgDP45C2PFrCJHGSotoubY5yQijS2c5",
  "key14": "2JRyB1UPJx2P1qLGAVszeneiyr4y87R9ncbcrU8q9Cz4NAqPTSxaihGt9xoR1XmsWtGYpb7HKNqoUMQmQn9S1g5i",
  "key15": "ydREBCvh2ApbktxHw4p5QzzvtzCHNwNCtauPuGZcbWoEZsmSeZPaqZMf5SVu4feAuJovMtzz8Vzc5vhrkNd2Hnq",
  "key16": "2qnNPsCzkdPuK2AYwULC4QiUL834FUHiUZzhjQ864Vzf8pLSUZBvuQx3gQsNZGEk7mgQFZVoPYX8nCpufye9zzpE",
  "key17": "56JmPZ8AqM74mcdgEmfc4tTeenm22sudQjZ6htoYByqjLCvZwZtQhpZqPhLyvtuhJuaWoXvPvGyZMtB5DXTbPv2Y",
  "key18": "4qAxC13bSuX62TUnSsfB5gG3zjBZ7mLJAYuqbVGUMyiPJvT4ciVrWcLZqCvcH1ZbALnTrKb99wLeDoB7cKBH73nv",
  "key19": "4GSEh7c652DGAcmmEwLH5hCVLSmAM1JFmrt9WG1Zn56iaf9ePQPbyFHE3yskPUomNyrTCjhVBHdeCBDqe22fY8M9",
  "key20": "364ji2i1FTotyg8Mb9dB6VBFf2Gsd6SKi4F1FWLdYofXrcuYvw8h6jENWF38yyqbFzsSXT75Ly4AV2eWPogCH26j",
  "key21": "3LNRLEyGiwoR8hVgAxZcAda7H49Erx5FhGUTZoFXY5JGtuEjGGC68AGDrcAE5oPEb713XCDDDJGA8od18XzvAQXh",
  "key22": "2wKiZpx3hD5NKSGXVXMCf3D6RxA8Zk3cSRBh3Y8TTWfWFMKdm5xrwWvzSvjf3XGjSy5WVNjpbeUPvrNY9PLwF2jJ",
  "key23": "6uodnkoA8BiRBaG9bV6ZLJueo8gTGEmFzMYm1k3RFemVqudmqUuNGKci4vhaFB6MqnoNp6EtXsqvgTHrbkLmebm",
  "key24": "3TZ3ej16MeogtfjqgtmouGNDF6z3d8cZVaLMbmGPMgwf9tDBJ41hF48Lbco4D2ejhcNoki7g24cWWvpNgg9PGdfi",
  "key25": "3r6pAyNg3Y6jdykoXxNQUayd2bWgAcfqsptgGTjuzR7LPHtb2xYofJwKpAZYLUc8ZBmAjmGsukw9Y3YMcfqB7exa",
  "key26": "KtEn2nUTsbJDSbUibyajkrsm93VmoQYsspKCrNVuKWU4QkeRb6HQP7gZdhZraVc8P5k2U87aeqTjq9hVkEPVJBx",
  "key27": "tHc35sgvhKWEfuu99Ayk32bCdK6waxsboBG9BXD4EJ7jw7KgGcDyzsPnUfUpyVJ6Yo9xZNK6yYTTJVsBBqCeFPK",
  "key28": "31oL3qh3uzAQjjH9DAdHFfF8gjT4m1bTtfPTh2yMJ5ZJGwxgMnsE7arQr1e2GQjL6cidQnDre4paoHnnQN4kyyuu",
  "key29": "57Vjw6McDJSEvwZDweWv28CwQnFP7u2kL5tTVT3k2eqJnauqdHKx61N7tczdspafaFkraCgw7V93TRXwnRfxY2Ve",
  "key30": "q4yrwDyDZ1ekit2EFbmL83KnM5fxvbefswEv6TLLPrUXsP91onTLyooy771LufAkwTMFpVZNqA5TqCNizRi6wR2",
  "key31": "5CGog7j1PEUmx4nTWiVqJCbnoyxmKWR4awdBVX4id5xB2kuS4yuNGAUMTZChkyVUFeeYNw22DEyNGRSDRwgyUBs5",
  "key32": "4sR72KTfs1TeQ2oBMmtgZWKMLN7V2VydGdJKdc5nZDPYy5DHk6gxhPR5H8aW6xWRbMXLKxxddk87TBNcQVZtsRdm",
  "key33": "47iJ6ykxkTeTnTWgbbkhKWYhZT52xuqxjmGHhsySJQgAdaukbM66nX3zKzjgbPvx6WqDtrKCSC4jXiKvzw44J4e",
  "key34": "4LgSrMEM7kjKqa9d6Hbx77wcSuxUjqWXVEyZ2brpirr28kCUgAhZJQSk8KzkU99tuY4rHLr9RfZRH1zBPZ9vkyKK",
  "key35": "24LzjRGR7NnJW26xSfRutdngQH9FqU9BVmMr8as3Xuv6uQ76hez291nQaHiw8VaEQqgnWRY9TRejwnKtMLUa3bMr",
  "key36": "2NjxkVvRmGxEs2iwXgkELoKc5RD3UTikb4R3Bi8yDGBxFFrUEWvXQcJBh848BKBDv8N2x4YwH9MQopvcTUgZh6QA",
  "key37": "2oWw4ZatgLKdH9XQ1SkccMStJBA2awQUYiHfTY3Fg9zwkZuSpiizhZ98YmtwU9cDwcpaxhred9Hrg157KaQ3kYZo",
  "key38": "3daNJTuVPcUZLt1hxcRN2LDPi6Su9vRstRnyVZE4Lb5WfDEmzoptFzKeCcJ9vo4zEPSZFpU6hNS8ykfiHXKZuMm1",
  "key39": "2ANmUntn8KbvpYTwMXBD4TqsK1A4RUrkMgEo6rqASCVtaQiCfXqHQNfLu8Yid48kPdn3Qver8m46DfLznU2AnNBB",
  "key40": "56ftNCX3U3uHwxkggQysYoPKrxVCwQbaEeXii6pUnR76vUE74c6BWhR3fo6DacgthVBWGuQJiNWPNj8kP9bSVv71",
  "key41": "2BXpD4nLUeYBjNfP49bjiB2q7WPR61QzmrJk4w6yj5wy4afVzvYL51wWW4rK2f2J4H2qLNWws8WnoxQm5VSBZmUM",
  "key42": "4EZZ6gkuSUefA1DncR9F2Ly1wmzypaBgUabcN8oFsSGSrVMWvKmSQ419jcotQsgdSxjrPubcxUkMRvnTK9hhfoYs",
  "key43": "21hvBuS6iKDdxUxohH95Kqm1x2nETH9ZS5CwES7irFQCMqJgBqVttBc2DFCmsEJeiFeJnJf1bES3fzPvASwwxUQw",
  "key44": "CVvE8D11moKFVDm6AQFCuzxqcMUSmnXMDXs1QPL7NEFVFNzn788jUkzCe5k9P26FutAdWe9bxNQMsWywJ52EWtL"
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
