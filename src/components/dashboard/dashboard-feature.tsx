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
    "4Zffntxzpa5V1y5Ki4H3DwBpkgxNJWNNw6akNeiePqUnYHASFMAM51HjfoSuFWKi6iV4tsZEzDLeWNpvzbcfKveQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jz6BHwiimvxfRWLVjsLp13nF19ZzKQsUjftzS1kdEhxWiFpMsHfFhkyVTcrHKPSMquFi7EKNaNpLo5t6JgvirSp",
  "key1": "67g3UZDVNBeZpH6dSS7LvXpqLExwNo7gdJU9AThHdnxrzuYGqmPWutUhs9Uds9hxNTMAfSbbF6FNzLbqLuSdFLar",
  "key2": "YfGybqyyxSKMTtYLzX1kwbLHohdFbbsRKiC3zocjk93jJWHZLDirARhFAUYLzSffoHZ95j4rZZMVX1WN4doWEDV",
  "key3": "3JrUAt2vn2Sdibn2D9ZyrusBfNLEgv5W98R6pPw4JTNzv8dQnrDHRthCp3m9MUoUFkVLZcS2LjicnP1cSek7qLin",
  "key4": "aM5n1RVGeZeGt7KApfnzMH7PPnMzsse8ADohRp33CDVdUVL9bxCPatMFoQ9HTnDcA7f1sgmsvKgskuSmAZXixaZ",
  "key5": "5ULm8kcSkXeX7WD9aVGcfHWLSb86xEzoqEdH3UenRxV4FvkEwvfz6DGLeSqh3By1NGra9ukXjFT9fpXEaYPj6UqS",
  "key6": "2NP7yyjsFSMwtaPtoWm14yUZC9CXJRwRKK67cobvAS49PD3Ay5b1Xrhe6YyHy549MCk3t97B5rLcZxTVUUpumfmi",
  "key7": "2cJEXqdw2cwK52SWL8jPAaFCxV9FoUhPD9TPzDS16GKSjjC1418u5zTkCZ5bZpktDaTw9kw9Qgnq7KfkC2YDxpih",
  "key8": "52uddHGfhmAbHEqbctgmPtrGRn8hTe7i2mo6k4Nckquxf7QPGDDokarYQ48p4WKJz9kUz9fy9csZt3eKFC6U3tio",
  "key9": "4AfWgq19Q9XVSsZH4VL1N295Bwp1hWDSqqreWU7bTRi9znMSQCeZxgjwbomomjrRpYoVbjRAuEWkqjxST4VFygAn",
  "key10": "35ahfvbZojzfEFbURKDuS3TnYgoZvxghQLm7DfcTbmSC8xdGXWEvETnACU7XH9ws3SbKu89MucKrVsaVVUnMwXuM",
  "key11": "3EVTD45XsB2mrT75fvHTmSLsM1MNsMLZVmhmFPn36mxdvxYKnHEP57day46aFfvjFDyuPucpoF6FP1oUsx74JaH",
  "key12": "34ZjbM5Snq4cqpmF3BAgBJLx8PzqYw24w1uMpND9QZShEy371uuH95Kh32nuyiWJnzmYd2eF9rcKhGY1x6SaPTnJ",
  "key13": "3XK9oCsvmeSG3ej49yC6WtAYTU9VXGN6gWwq42Fe5Xc6TW7PPQVzgh6UQ6CJhq4yP3y7FbqGkj1UPpVmwBbRD5Fu",
  "key14": "GGv6cEWNqyHFMKW5foC9Va3S15ixUogQgN9e6cBQihUsJUWoxKu93A1c323S9zgoJrRMGeP94eoR6yCPdcSiJCR",
  "key15": "3huf4mZi9yQyXfTXAzkQZLHn47qCnuuEZ3dx3R8Vktp9HkN3NyQLT8NXL8MSefx2Dyf6kJB5YL95MNdMNnrTYd5m",
  "key16": "CeJu1um85dbYQE1yhRtzxRoMrdYiqAH56EVp8R9zgd2mpDh7u3id9L5DfjFUNgf8P7XhsvziZPm8gGURr1vgaGF",
  "key17": "vHV8dYbdaVyeGiZu3dRokTw6fVXAbBCDAFu8FpBPePvVBL1q4FGaL8vtrT9EuYuR9hFAy7PbSAiveN15RZgMukD",
  "key18": "3UX6Z7z2asPqQHY9Zv6wY22xPC6CrsdT6h8UPaYwxZEN8Y8cjE2w9yWLJJzTdUnyiqFi1dj4SFbTdrM9WxsTa4st",
  "key19": "3Bhv57Tzq12q1CttQgmh1zJojv1GTfoZkpF8wZY1ocwaHuFiDZNsAGGsMuzfVGeDZ2WBHZafLB96NLDdvrBmUWwT",
  "key20": "3JMLKrvNoQMYG2xoj84STy5zxhu13EYco3o7tDDdgkgRfP4BYgrNshMFiYaZEAgUb2RPQwBYrg2tmj29k7dMcyhz",
  "key21": "3HBeALw5oZZpgDNyUkB3ZnR8FJGHwjta8qjf3HA3koX1KaVmsZHwYeq536gt8f2BsTTFPXvvX3ByMJ1ypCYjV6za",
  "key22": "4s2LQeUkFSsfaskgyEBtExd61pnoZYJ4EMuztEBda4d1VmWyfKN16eW6MkAZN1BCZjMfy6Do5c8LGYcUssbgKoi3",
  "key23": "3HLJaA7zE8nVkDKhQtS2iGAW39XHzvCrULofz7VC5Z87g7TGqQc63frsM1EwhxEZZmckyyJk6NexSMcfzePjUqps",
  "key24": "51MfuwNDpqffAJgjY3HtDsbXYCY59wcBMjhNMCiwBBDvd4RUpuGFGwTXGbwVpuK2xt2i1hvJkZZwuk7pBTar85E8",
  "key25": "5ZukY6RqUVZQFPbyDDv9BCvnzHMiiF56moSgn7YVC6cxyyQRAKagoyJWHUhMwH62C1cpBRWR6CGTgUENDFWz9f6W",
  "key26": "GTCAHXUu8BDYnodVq6VCRmXfv9xVi8xjZsbw94AHNEPGUSGdbXaQaYomA8mwcueACKPays1NbVZqSD9pT7g7BGa",
  "key27": "49jTHeQLEUY25BizirFJerVVe5bHS2FoDDshRe6k7mNzvfGxVZK2kNvx4pUzED6TiBY9qK9qrYUrCVh8BUPi9PZy",
  "key28": "2kGp4RtmMAXrRxdyeNWEg4rTLDqQ6e9axqPc7WZtcWFiMbGoPz4BLfP7mNc2Q2Kqecw8HVxQVfJGgpPMp1grVyva",
  "key29": "4VKh13pGkvps1AU6GNgmydSceG2M7LThP6Z75J7RAPFJiadxkArXeNxhEwWsWem8FjzeV9kcRY3UCc5C9vS8Uud6",
  "key30": "4LCJb5hzWMS4gSmo5tFsNADTS2UGVQY3s67DRaUvWYdNtXk6A6fFuhJdfhQ7VxjqyxLx82HYTFVGJicNeuGbqzpw",
  "key31": "2WsjLgZ4y8mFbjYvasPRiRGUjExeUaVEWjxJ7gfuFJsfKmXaREY81M7LThSH6YDaiJyuRjwQPqKXCkTh1j2uGK1A",
  "key32": "5ncLfkwes7C6CT2uuT7zkKjE4hDSu6G8ZeRrGanjzaqpiXAQ9Brpf1oq1SE5FhM6yDyDDN2crDLNDHGPB4HvCS3q",
  "key33": "412aDXqaG1Ae4HSc4mCeZVSZBXhjoK7Et9DsGpzKn5A3rYkzr6k9LfLdxt5rzkxtcctbfVKv2jRn4Ub4Tt5ZitwK",
  "key34": "4PvQ4uBaAv4RF2w1oXQnJDu5SShezwSNnUydS8A23egKy9E7rUmdy2aXjT2f1W9VdZyBHn2awv5o5WREnvZE1mLX",
  "key35": "3rFQvKsqVj7L9PTtGT8RPj1NDd6W7B7HfJwWgGs27FQRpMu3X67Xhi3D8AYYidSTWeuDR1rb286La8W3cyvyhTVd",
  "key36": "3DhGZSR6FQLGd4cqkHQKdnipK1vRS12FCR3fJsL7CYfPcAmQWzMHi5TrXEPMvvup6TqNKWSHRCFfQyZvzNr1d3HV",
  "key37": "3m89GjpQoBajznQrq9TDCjjL4tNNLu82QeNQvZGe2i7VRdpdp8j1k6BcEAJgi7dZmsnT5T3kgWf9Vx7GU3o2wJw",
  "key38": "25gbmmF4A4Gbb7wsiwKMyA72UrFotVwCPETZzD9wSBZ4Fq2cYewS7iaBGemCpRPZ6f77HoqvsWg2h4rSmAGRr4FE",
  "key39": "5fNHDVJCYY3ZrLsWceT2gfseHsryAnnEbyKdU4W2fjVDYag4qhd6WyL6UbJX1yS3u4PdTWBFmXpM74iuV8icH2nX",
  "key40": "24MWuT79nyMH5eByDL4Jgu4rFzh5oqKg5PKbeLF5Ko1SmJ1YTKRFTTa532geYUbiPwhxBL7iiVF15PrGVAeN6D3D",
  "key41": "4ZyMUgbQc7e6wSGq1DoKVs7MWeACM87ndvDVV8VSNJ6QhpopjbBiNMCMQx61mJ85yFZWqJeefWWv9CiJ6yRW32Td",
  "key42": "3J56At8jeUwiLmeSrfcFAZBA95V24mY7896W7Ui7HADf9FZnta5ahYFhoTrqbSpXgXwaBtBgn3GeQnRLt9frfmpR",
  "key43": "5qEQYcnZTYeBGi9gCUzuwbaNqybRYS3SEnVznxvxYZkakCTkestdHpKwUi5GxwKaZniaz83PzkZ9ykVB1QdCUxdT",
  "key44": "WKxyMvwFvZDA2MaFSMqPBU2idP4jModTaHkSt4FJaHnhc136C4FE93bhWDJoJHvuCP3954iCsino9Ub7yMP8xM5",
  "key45": "58Lz5hLH7DfxoHAPu7oc3tbJtuYLzUPrwvXfeoLpTeCBUPXAfzVBd1pgE63V2ACshomY5eWPmMFNYvAJoeULoBoc",
  "key46": "336RFk6RW5FusNsnYoAHPERqHLJjkEwXJn58dMfzZSk56QeSMjgrs2yd78FKinN7KqYWRQwGJLrmgU4Tg77JfxWq",
  "key47": "7c9WXUg8jHsaKKPUZxkamitY9pf4h9sZLMHQbwYZ6tZRTA3uaiCDHVTFzGZWtkwgyhGEZpxd8eJkvAJmfPz7seA"
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
