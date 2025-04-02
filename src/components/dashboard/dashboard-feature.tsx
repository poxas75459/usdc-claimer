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
    "4h6gvDdDqcaPreo5UW7YjMhb3A9Chqin5nhmuPo6n9VMoouez8oo1qLQUfTMsb7nykCBG1XU1qq5xVJxv3ey8KRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29EawHgHUM4pYLLQnWAvkmFs6ejP2NGoqczaQ91nXmbFYU1s4htK415x4Jfmkfc8e8qTSUuU6JVe4G1np6PU7ofs",
  "key1": "26t5sDcXm8sUPf9udmLhYbiDEeVGZQjyMDQWAN1Kf2qM7gNUgBCBadAKvgFE5orwZvGDTp3baAQxm3j7vBwKRxdH",
  "key2": "3UQY887inbhQZSk7xYu4jhdfKW7heamabsEutYMTs23fF31wBdeyxXEETNFcZuAkEb5mEiH6wNQGQEF1Fh9MxiRd",
  "key3": "3tspJnzacciRk8shgR2aDxHZAQrGtoNQFRJzbS7zg7Pmcaig2ox3c84YVrYVjtb6nfggsYbcCiEH36BNJnTxknLD",
  "key4": "4Y6stiNuBgrZwbq2VxVTUwkVLzaJexmdGFM4H6FFKP95SfAu2ZaseSjPwax44MJm4BeSqMg5XpgfoKdxmaZWuu1q",
  "key5": "5TaZtEYz7YGt9U1bfxzxZFNcAeXDKBJ6aAjqLbEExhEcRjPEwKjmT4FHWibQHPw21tfGk1CyigZ6jJ3c4Z9C6acQ",
  "key6": "xE8DoVr6JwWxQGei3McE9ANV55MUaxny7wDXDSz3UEA3eSxSeJJizH3rjrNSU4bedmxmSLGq8VEo8Faoy4domhj",
  "key7": "3dCt5Pj2gTf2SPnMMw4xGN7bPbtXiWvqc86LdFAaiD754fp8WgceKmA26ojse5d4pZdMT5CuQpBwF8bWK2SgerV6",
  "key8": "4ef7LCptwUudSWxZuv5MsdnAFydRESc6w8VRvBQniRG79fjZH8TWAbPVns9ME3FKjrCBTVyroS8dBQyCxcRbcyLS",
  "key9": "4c5h8C2AzffX1u7GBHZLSyFmjYWv1Et8sCCGBRzTagav454gkFfURZTbDH5T4Eo4GAbjzJBzKTQSXrX3Rofrkpff",
  "key10": "3mP7wLZY9CNCYUS2wFB8aAiWx8UAMYQAsatk2uHfnwQSZpeQwA7t3WvVJ967x91FKv4FaaBU22oTaoceyiNwrhy7",
  "key11": "41QtvutjTqJEvo7wf2RWSF3ZBZoYLRC2zsE6Cyp9ReP94y6L9LwfyVtFwFhXXbRZBLXR5YbY4uod5bva3hUonhNk",
  "key12": "2KqR226i8M8urA5TaFGfEFuuxVkgygxjHzqjNUgtcoSAzjoNQSEdrv5NniokMNWm68csY1k1zrpr7MiJgRNGo6Xb",
  "key13": "rhB5mKYdNLbRyNfJaZRBaVwoUCmhsCGffwPATc6hP9c3K9AthtTAjJBbYfLWbyxq1KFcVMMHRySzYRZtdHHBqof",
  "key14": "3GPLCTuNS6neRurhZeTvdurFLD2BnHvDEH8UEC4u6vv2Rt26jR1d6QhneXRSupfyRsdPQKWsB9GTsberikXUgQV7",
  "key15": "rHtuBdi1JmSrb6KtVJroYMkuAbHHwBeMxNL2hq2inmUDMuuoASSSJwcv2DWqbENfQJZQqaoS8sVrkCwQuSD1bv7",
  "key16": "5hAdSRm4TmsgkHN2FRLgXsN3HEyhXNWQSER9Yz3fdN69AjKKy4ptqvCssog2JPHakiV1EN4eBQ2nx3AnwhY13Ufg",
  "key17": "4K3eTTPamF8bMLcmjgFRUk1cx6ZXiDQ19Bnv3AiV61UKxo3ALX8fp9XbPrs9eGhW5jsXJu5abAHrAC3gTCNgPmy6",
  "key18": "wBBzxPEhPWHGy5vB66UT3ZDU4aBRPxJvBzVfnEugJ7oDCXyYMtj22UP5faQHe3FwyXd1oSTQRfHzrXYF2SsE6tx",
  "key19": "4YVG9rNSaNczx3bNGjksufP6wzXZgnwo4PzFXYRKnMM2ya8AiuKxWssNveAsSVFPCCVcYK31RNCMtvG6PTfEcMLF",
  "key20": "4zk5a7nfPupwMhwudABWJHUY27HWH9Cy3ngN9kS5wGLZPJ8EKztwziKdWB7eFhnsj61uJwRHyXsbZmxVLnTG9Zsx",
  "key21": "y8eZJkVvrLX92EFpeRqsFJjmZ5iHGb3nMsidwdorCErkCcDBKPFt6sxTG2UF25LrgFky2mjzNYTe4JR9reAM8Ae",
  "key22": "5oeQUMGh1vPZtuVgjTJDhQNKY57KiMKuZ9Nw1ygonKrNSBvXyW3EfUhY8sycAyEarRFKrNZHQZ1cssqAhM4DMgxB",
  "key23": "K7re4sr5GYzLocyZQcaJ9NeyVi8NqrwSASWvijBbxreg7TgaLqektyc8ZDp6qUgGTojTkHZEpMp2nZCLhe5aikX",
  "key24": "r7qNg4N4XTZmZUmm4MQ9EB5t2vQXNmBLcRUEQM5uUBqZkHAz7fEZw4wKYYuYCPj9fKQkbNpT2b9kp41QGK4EnUy",
  "key25": "3bwnbnAXZqtZqBvdgRy9QqUyiqW3vQw6pp6sSuFKdR86A9oKdLB9T65YPVcGevAhUskPW7TR5VbnySfn1vQb3HXZ",
  "key26": "5y6CBXmPsDEjZDPyTbTKHSftZwrojn6k1ZFsfMsrnMorq8FvFt1RaNXGQXyQsEQk5Y2zHhfUQcDDz1L9N8w7jazt",
  "key27": "5usGMbBPqxBbBXGaZCyLmRtSjkidjMrSeCMh26E9jjvEyQNxZedEFiPZtqbQpF7wJcVhHVKbKy2L7nvonmjoUTSo",
  "key28": "53TSUtN3qZnPb2ywKZFSNvUaJiihVhYaBxrnHfom9sfYFX5KBSLPs4FHZfLabEKKhzuCDz1QVNqFjhdvEPcvxmSJ",
  "key29": "M3wXtbWkfx62hNxmWQnajxg7VFGrj9Muioiq6zqEq3RuXwRizAe6WfG4ACG4SiZFuucENVGJobV8uMkAdGZSSvR",
  "key30": "2r3G3dcvnS2tPBm5EeT9nDF3jCsL4sW3vs58VNdWTigAPPei5DhZxX6B7Wjm3Wasw9w8nQQraZidLcu2A5fVp3aF",
  "key31": "SWWu9C6bnJX14U7UsBx2EDakbuZXuqbbiTj7zVg7B5UK2dCU5H9jcRuXrsDmkWxqgXHbQkKbPDUKiZdphYSy3BU",
  "key32": "5bk5htPgjgjWitrVr9Z2APRUWuqEWv5kHRbCyKbLChqyeyrtN2HoaWp2BGYe1y1XKiKzUYUUQ3adWHmyxXRdzaHf",
  "key33": "2by2EmQUiJNexZ3vqcKosmPoS1gz45q1PzNF2T1eoY1MjYrGyqsQKRHQt94i98zjKmokVqZThuLcNNV3zhRRPUJd",
  "key34": "5h6ACbxvKjBGWPmRPq72KvbFiEE6cSo2vkmiRvY6dfbFG8xstHEAfYa6mGQXjEYmRjuQq7y3LUXQaDudsdudPjWi",
  "key35": "1WQvo7NF9UDnnUcaXrkPGbsAE8mDszpQEDvFAQ59w2HD3N7dyMse6BzEhXFaVTto44VuUUgT4AhzbVbD7JhfqFh",
  "key36": "MzGEFzmpMhg877h2e4JrTAjpnJgvhbRR1bg8uivt1TKaPTwqgLH4BcNLEi16eUzexhpiM3jx4rcSjkARD3PMkaU",
  "key37": "3MQtzrhQdLAocXzU8361oURb7sQfMKNRQjwEia9h1p1gQni8L23Uci5Hvtf9cK4AvyAhM6JeuyePgvbuFRGny4V7",
  "key38": "2aUgPeymu1d48tcATM1NMmjdcGQLaJ5ujXYBsH3Rodxr1mnrqbRmrwPzjf3ecJ5W6aKBHB6wPwCZifRdzJBLZoP4",
  "key39": "6233Fr4K4qWHpMGybyNmGShwts4uYy5sCHZkrJLKS3i23nrJp47Uuw1t1FKbM7o91tDPhGbxSucZ1b8bbZiRBMVk",
  "key40": "45guJS6Hwq82wLZsLx4BksrZvxAn62pPPXPfWRzmBwBsXUeHTPHAuZEPxmEaMvDpwkyV9yszJoinmerCj6AKze9B",
  "key41": "451uiQRfbicQbmDhwPLV6uJ9WHjr9Vmy6BufTKXd2MTJ8U2BJ3JvfUKAEMhNnB763MbtHh2SGoG9T9xdcWT5myd8",
  "key42": "6sgVYmk2yzkWoE7QSiE6dyfqtc8mFmNVa4oGhmjPaNbcQNFw7EzfJtEoPAUkNnGY2rPmvRTC5aqaeK6LD9idHXP",
  "key43": "5ymWmADNoHR2M7NZPzTGTx1qX5fGpXmAb4aN9Th66U9XVyQvK5CoVyVmncPMmsVAXYJEyxXXz9TkKp9LofbrCfJK",
  "key44": "2VgJx5TfWrXs1PQSdkubWc6iqPjAhFiGkFKcZPqRxJ9PSSGAmsDBC5jEzHDpaVq2VQNXVaZMTDj7zB4SfMNNRxUS",
  "key45": "3iLZC6646QggiVnfpuLMy7onvMzePLDSbmFajGm49zbjUZckCjknB2PmzXEQPJQ8RZw6gjd2dBJ2WQFZy4vp9dMD",
  "key46": "5SrDN4d8s2JQzJ9wDtSMEGTRxcwuC9JRmMZ9yvmUMkqMByF25fpsnnLqQfAU47yPga64972a73TuMGaELup7ybsD",
  "key47": "5XK2hD4GToajAmywLR7i4rmo2gGwcXAsfoK2YgsU8ZjEG2QP4XCHwF9VAdkFyNxJ3x5jvk2q3CkVcVeHY3wveThY",
  "key48": "X7YCKJtZHiDwnHVJBUZYL82P7ftnBpjnqnmfamCgaQCTvzEevRZbNFRAyfNbJYF2Tuu6jdbC6mg7FAadCFCfVKX"
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
