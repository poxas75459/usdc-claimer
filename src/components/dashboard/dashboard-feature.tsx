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
    "1mfLabA8HRCNwLVupdoZBpew1FfTHDnsEWg3uodedgqm67yuVQFVSwjSh546zYBGGH35z57frRvHDRgL4mx1DLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cvGdNGpgbrM6f2Dt42ggbegP55X3ur1NCry1ePpPs2LwsJg1Sc57ZukDctdUxP4pqMgJCt9vPsNcnGtrizRbBxH",
  "key1": "2aWfikfCDmFLKfiMLY4xo9Ur3xGZFBbkKXKhYgn5QKrdB2LXxUPWzbT4LfgiQ62CX4RqMC7dBResUKUtyfvoQfFN",
  "key2": "3oiJrzmchjym9RztmrJeW8SsZs6c87tHvBD4NeHriLSPpUYSrFRMsBeNQrtchxdqSMMywTV8W5AUJE91uVeWhDzT",
  "key3": "2rE1gLgg912Piaf7DpSfhj6cdN2w5in2xHk7DrPjXeCWkFpkU6j2PKTLVuMeQ5CpGH7wE9R6usFcDpcGMFeGULCw",
  "key4": "yXVPsoJYko9ynveg3rkbskwp9jMHRLXK1m4GcJCgCSZm2dHoYekS1BbDMbxtEfXLkmBGVuXvKmTPZetBnU5EGC5",
  "key5": "4E4KZe9tRp7CzURscpyD3W88DxYiE9dMTKYaNrAeE3Nk2grzPA8nLNbr6za7EUHcb8TakCFszVFC1YfkQYTa3ktp",
  "key6": "2vheuTnEvyvtNmdTrHQTPEzWMMpFFgzLfxDPGm8gcmPNZzXiDMvf2DJ3HtDqyUWWRof6wbFndZptJjGW8nVhTPr3",
  "key7": "2Rtwu4MrTTngzmKnxXbdo7XrzXrLJPrRwwJ8mVh6Ff5dRW11XUvsE4hiD14jwaBn9jrFP3o4LM6upXP2ymEm1R14",
  "key8": "4EVwjSFhSZF4cEsR4GAuu8XAL1PjTYA6Tx1Et9o1tA3N2VvsLxG1Y12L1NBqdg26SHm2AvkRgay8n6rVG6hGpW4e",
  "key9": "4qAVSM9MNtptYJNDs3zJ3hT7pkNNVqK6B7HPCq2muYHj6jHXY7gjPsXaddDEiWr5etorSVvB4ZAVrEyHLK7PRkic",
  "key10": "4isHm4cUBhKNJ6XBXqYwnLX7jpYW7eNGAERYRRp2qY2CKPr42How5nkSeMiL8MM4J6BzuWqm4iL7GhuuRJCaLrVp",
  "key11": "5kZyK5S5Xq1rYDws7pHnaQZXsDmXanyGEsJHygQvpXAdjnQGStkGYcnmHnTB6nRDofXzTo2fPqQ9yL3hWxW4Xv8f",
  "key12": "AwJAaz144G9oTcP9DEjaATjKCHzLEAeb7u5AJQ7rhk9vG33pgrEq8jkTkwhcmny4v9Q3UQHwxUDFGbNZwQ11jwZ",
  "key13": "597n2TyRcUF8MKTEaFnLjBNaUfWgdxTAGgfzfuf5PsyVzWd4Ey8goQ6UdGuxYNSQkSShcsA8GhbWhSvwEKzPL9qR",
  "key14": "5ZJKbXKkRC8ZLN3EGJtzkSLPt14Aw3G33bj7X3cknTU9YW7RfCxutKWbJvBmTV3oyinsh7sZdomKmpcawYcZyBkn",
  "key15": "46H1TxHivDutBCPx3YGgnj5rgaonDU49LNVnzHGDwBTrQdu3UxMqrmJY1SGDfeDQ8M7Fn5fRmogsmUDgRLSWC5zQ",
  "key16": "56Wighcr8zYxa97x3DN19xY26VAskGbPueZTuFgDyri4jvEk4tMQ3Gpc7BnBKAiDx66KVCxAjEoAbU8nvkeYMSGz",
  "key17": "2ejT1Y4eFFNDBC9LiGw766AUXmQPg7hCgBmE7pUgYvwTCoL2RHafYoupWwrHjfyeMoEaWuvdmJGRm6mL2vMwA6dH",
  "key18": "5TjZ2aPcSdpjJqzD6HoSP9rHtEUksswufEFg8zhSBmNyJFA8Q4GLZPyH3LbzErUDYfyy5NxGoKMCtXTYkEVJ8pRd",
  "key19": "3CfT1fJ723UADtRd5dGdmiiKXf1x758DJTBpKFtorCpxSTDuVZTusYsuSk8Gh5N4DrCoRqtGwmFgX7a3vhxEe1gA",
  "key20": "3uuqAEEqP6HJmDTiNx6HMhKECCgfQPXpTew4uUsL9hMjjxCYaAx9hZ9tjvjzXhenktaPd5cyVFqg8XWCRX3oqCwN",
  "key21": "2xpEg7fyeyPRXkaoLvezFSCjXSbqWB3AtUfLDRV1uLhNtnDQp9r5T2CBj3D2xvmuFRuhws9pmh4WbyFmc4hWQMae",
  "key22": "5Pqtow2KFrdbTZPsLf1HkKBFfeQEgNSrMGxpFcGPPBpifoabDZhnTiz4bZaNvoUaLH9gPVWX5hSSAZ9ALorMNeFV",
  "key23": "6KKpmwgGLm6fX6g2os5EKxqGjCyJPNuAG3RQw2CcBhUBNWu5CZSL9d95Ku77TzNNLnX6Jn17avqPevYfZui8HrP",
  "key24": "4MaHxni6hsoDvnFVMMB1y68JVGdX1DjY5CtAym2Dh8ZXyhW43vb3EGSSxHazSBuen6cyctgAYbg84vczPZnXiNTr",
  "key25": "2mavRB3bdnk9caMegvbu5WU8pwzZqKVG6YbcjPyQdGL13qnXGU1xfWeG2wGA8gFf1Smrbj6i8PaqaUKsHHTiX6Wo",
  "key26": "25gy5E6NE1Y1erEaSadF1n48Ugw23PF45th9ULDqPUaw5izTq4yshrWujVkuKcUQ4WvxSYdeC6hzzLQzfx7yk3oz",
  "key27": "hb5My98cgXnPaKNtN7sNHSgEfbvqFqRvzwbaUyhDJM6f1J91HNyZfMCEhhUQFfEFJxoCnxeaqEyfYXo5NZThSKM",
  "key28": "32ZrxduTScBFox9Bo6X7Xz33dxCQ1GwwDvkGmtrYhNiPuGBc7vTQnPoZZsCxqzTzizcJwzfH83HfKuPwyHQzbNKA",
  "key29": "49NkHHUJv6GpyevW2aJwxyRg1XtF2g7cHYNiNm3NiL4ZfMD7XieoLjCLvRDNfMEVa6SRLvFAdoftNEdpqfGF1Sd2",
  "key30": "426ozbScqXjSruM4VrvjFEfddK7EvDBttgkkZ1F1KA4PPeQc9r5KqAdXpt3dmJi67AMMHRFiKgniUBNg5PLKQZyH",
  "key31": "65iGAhbhPQzQk5knYcFeVG1qZD3i2Rs13xcJ4ykpB9no2qP8mE74yaZLkKP8vvuF9vktQmPaCDuAoefmX3yyh5bm",
  "key32": "5eYw4vJp6DnyQRBKNCjgPwQRCDqDTekLa9ETeaJPmiYE97eYdDSnp95o1eRD1RYAMeqtJemeMksxLpmPSMQKkQTN",
  "key33": "2vpGuoy2NGtKVHt8jEYN8BP7GVbLU79aCEmzXB1J8MNso2oUfhZbF39k5V4i3oa5x2akRwetpErZPj5Y3SdkNzoa",
  "key34": "5Ut8HY9tChwj8U8D6Ui5AviRrKRT5Z4SSYMCwuBj3K6ZhkU16FrUARBLYEv5biiHfJY19KfXVM4HZknsiTMAXvpQ",
  "key35": "3hk7mtdrH79vPT3bF49sh6hbnBhhm9gHFvmAk9QrQFCE1Q6b4NqziAYr4p2WUKMzNBpzCzW5iHWWAo8kVyKHm94y",
  "key36": "64nLZYqKJpJCH2aeLPp7p1QBD11WT1q7mHPX25ufMoKy3Y5GNuHqQ3131VCUtoBRs3Rsn7JPnQJmPcFEaaykqqqb",
  "key37": "63p86XHoaZv3ENVRJKp4nxufGz7fTvW54q6xN9My8ezmznNKTpaq6soty4rquxiLmx36YukucHhtQf1F29tLVBMu",
  "key38": "4UhNujo1j2XeJ6PtuE5aZWEtLTkKNN9ovr4cPS8nurwxu63xWvUQZpjnCRRXdwozzJwpjtR9Ts4rhrw8daNiF1Lm",
  "key39": "2JC1Fy4zFjiR8MMP7vHs1YoMZhqPecRewuGmGarzLSCGZPQaekHd178dhyZzhf7vopJRkRW2kTL61fmazjrYfidQ",
  "key40": "2WP6VgyJMiWCxyfqUMCm55s77YiS425A8GTd88QqH22w6BBvB4KCwbV9xo2YkrJmAsFAHbm2R7YZLMEb8ESbXdfn",
  "key41": "4exieHfdzNqDGau76BedHrh1BpYKvnHB8ennnWf5mpnv5BrhhFjHkiKreEhAuynbXQ4GawNzQu9wGXHMNiASVSst",
  "key42": "63NpA7Pk3LdqM8LHJqhiwmDGoEsDNg75Jd5Y1cnHwGxdbdpRGGEfhb8cEvHpHoFpSSdbKSS3aBZJHx9wRnD13hJ7",
  "key43": "2pJj2BAcp9HvyZ8grefpHD2seAbT7iPvTUNjxiZgAUztNn1YD6mx3Uq42UE8EobpzpJcJmktPq3NGmqt8U6TMB6L",
  "key44": "5LowQ4Tn1Uqa6xxi7WcQ8aZJd94SUdozHJpJ5qpT6ZQYAvhGJ1koD4vttRd6QPmf5ouvZGk8oUw4A8EiQT6KYJe8",
  "key45": "3uFrZWuUQnU9eLZTMAcKkamZVV4hqWoXWxEVWdUqkU99VP4b933VkH9dFdESS8q8x69wYfDaneLKqkkdHZDcaEkx",
  "key46": "4NHX2Ze278w27MBkTFSgEdompkggjLhz4ThV5p35Km7aYsxCCL9szjnnMKjtWQFJUBqVYEiFC65dpknxu5KmH2E2"
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
