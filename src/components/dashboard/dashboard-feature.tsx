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
    "5N1bDgw3WdmeX71m2w2QzYPV7twCPNG6kJ5fKX9pWS1MzZrT2FiQSpMjeQt5MmFHUyooFwtKzfrUQrJe8VbMMjXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37h11CXY1QAn7dhokNCmLMeA11HtaNuQhxTbZfeNSCfw4AycauFnQq4gD9Ua4XpdgnjGQApmuRD13pvhB98Dhi4i",
  "key1": "3CkbThEKPNnbjEjkbMi942YrvZ8maY5KDJZUux2Wio3vJQvF6eu3LQXPrCwL6aPB4L5eTr4kys4MSotwsuMZ4VTF",
  "key2": "hi7jM5ZLCnvxcpKA2NR5PD4GeGL7ME3ZGy2m9xTicAcPgjr54xPrTzFTp4GMKV1kEqUpCrECEDMBHa5v5nchmFp",
  "key3": "61J5rzXFxF8DvnLfR2inUYVxPU4KbqkjuqHa4ezNLvLoTPshCi1MCmv3B2gSeqgmYbiHAUCdxF4fzY71y1uRrSYJ",
  "key4": "44v9Emqs9UeDYpXHvY47ovL9uH6Niircm1Eq4JjuF9Ubvx5cjuUvUydtGyjAP75nKWMDz2vy25EmsN9aWaafrhpn",
  "key5": "2D2h8BGdZvvkUCTj5etcD8nhBa9hNAJRHhsNP9HAu9RtBH718udj2SjptMYC69jyN7SSUw1kSSPX773spi8UTCdM",
  "key6": "NonpQ4a4rCxvXunTojtBLxYhvFjnR1bKawFpqbBiRRiC8q4bpm7yKju2aBiJjoMes7ucLwrSewS3HSompxxk3rR",
  "key7": "5C297ABLs8qVD66wk5iE15RoHXg6hMRmU1imph4ncD6E9qoYu55p6umjMfo33Cz4EGaoq3wLqypvtMXUhZ8i5Xgy",
  "key8": "2RgyFhAiJ6L8hZ71hM1q28cFe5f2TxWiy54wDqyMVqZNtNWTFh1MtNcBP7W3x8axrsYK3SRfhF2zHNvxs4G4NGes",
  "key9": "34u87s4y4DEnZz3aqnb3WKZwRTT8wbWYPbfQDDZWZEPvzU6MuJmNKeQ6y31perm4edenXw8DgYaA88bDAJE93Dmo",
  "key10": "21n2zve6BrBxmUgS5fHCsPyX6WKhg76UditxjrbMydwf3dinCaZytmMHFiowjhezV4kASaBJL78txWVSegAAChFh",
  "key11": "2urB6QdA36dMoPMhACNbLJh5G4E25FwPkteQm7Q9RauVsdgCoXVZw3JHXKCEyYjfzGNtdFXs5WZZq1nPnPTsuUpP",
  "key12": "4hxgRWk4wC7HcAv9hpQRDsBe8e2v9TLRdJ7Z2ztQudrhzSrpt3EvuqpLVcee2R5XTQv42hmrCP8J8ugZ6phttB8m",
  "key13": "5ZrQdBq8KKwLk9SjWEpdR1TEWBNzcWWwpprSnq93J8vy1EgXhq8U455y5cqFQnUA4YLvUnHK83cqrBEzVJsSz6dz",
  "key14": "2UDa94bHU2baoGHAA1XzASEVBjcyuqhNAn1BvGD4yczFompqAzwAMxqGgttEJ1EcQuAKXFisubhGEBSh89aKLYok",
  "key15": "56ga5EtwhagQWnvAQSeZR4QC333SSLpgcBvxGnqBaC65UAZTEXJj6TbjwLy3Y45uSob5sycpyHxw5sK7zpYibjby",
  "key16": "4NWoPHiXXAuCGDHXCMnjbCAhs532BBr2brMDV12ZUvT2DY3GEoA8sEcZqjQGmjouwj6fjmwcG9FdFjVKHMSeQNsV",
  "key17": "5hnmCXrrrhi5NkgwQHFZsNQgRR2BGQGfM2oHd84bRWcpuMgFKzB3fAJxbPubK7JEtcXKrSq79ZvvctqD2vg4BuXf",
  "key18": "3ZpHv6SNSbSwkDoPiuXLaQCYuCNEhsw5ZRFNr7RYptWvgEXgcxe1M1r2u3eveNtgycJgJKwpSWri1xiRggdhzWyC",
  "key19": "4WQ2imq3WhJmSE24qgFEa8HWBHVBLpJFnH9FEBoG6Yn6uSSckN3aXbdEU6GBwdUmLTjWEoDMgguwukdH5eVzpxre",
  "key20": "3zYhA7zRK2nVGHBJ4tyf7kcDC13mhGjRh99ucnighTN5kqF9h2CYn4kJPs3mQbJGMCrYZCE71UJdvy1fDeBBKs5d",
  "key21": "MJE2sFdkVDAi5T8HGQ6ywc1UkuFrkMf64FM6euHpwJcZNagphoB7C9jBnNxbRqRpiEtS8MbuwDu6ygZfQMLPPhY",
  "key22": "dN1RVW81ft7qv7JGkyxLHqUBF8PZKn8sPwe9uZFfADw5PyHYBEK6tRUbjFjzKCa7nA5WF9VWMCpnu7bCyEhMb1v",
  "key23": "ywJQJFfpVCoA2YHidedWHh3XWPT3ja57ERtFvVB3jKfZLTtQ7KPgQYZVwmxai2bU6tHRsUuNf4d8dQfx7A8hwYU",
  "key24": "4PMPDif6wz1HrF8Uew8NCKmu1qeHRoqydg9fYy8L8d4nosjroK1gscShzeYxmC7vHeptHeTLviSAF3aQogbnumR4",
  "key25": "WHdBak1qTBrpCn6EaRH63FgbeZoB6ZgkWx3adiycimbbTHbfpK6KhcSTDdDr5crr2xd5ExSUvTaNnjg8mhdkHWw",
  "key26": "2XHvwbSfVtUSj5ysvoh9huoV3PMFSRbrKMAS3xyfK7Wqnv5Cqdpdb8m2gtnzZTvBYDBpvZ7MT6hpXKmb4piJVXzm",
  "key27": "54ckFr31CRyesDngDYw1C9ZQoHAwdhHvvedWzVHwpEr5zDBmbyUV9yk3bnjLZE3ibGVRBJE2V4gMMPBzVsnZbLGf",
  "key28": "41NwwGyCRPjwMqfWTiRC5pxW1xgDsKgqSBimvPAXqbUT3jJnDnHp1dCKxb9cjAesswLfXHSZbDcsupMJNMTRWjE3",
  "key29": "NabS7Zk9ahX8mo23jGL7cxNV459dRRokB1UjsCmRRC2uzguHYzki6XYFTMPXoG1QWntamsze9QrNBj3bPLuSTMz",
  "key30": "23iYZftoqC9WVS686b6rgmp3tr2sesoj3rDcpCT4vSmTHogpEaVFqV2QtTM9F4BHnZGyH7oGcTsehGtMV7BaK9kb",
  "key31": "3yPi9pjsEnArfjyEXoS1UtyLwryqwZY3p3ZgteFSbJbdFbufrkLs48iu6v4Kp1cN3Yo8MzTxCkfJwb3JfemwPGqe",
  "key32": "4Lr3vXhvUtTp3Px6erB5fYbQ74X6Wenvt5T6m25c865Ey57BPUNKTYr8EDKmpGBNtMxAo92hPUYrGa6T6wdu3Nns",
  "key33": "zCJWhyAmF31QR33iuY38fRM9g7oAirSdPbgHwYzDHAdSkw4CrrEVBFn9i2CUXN6oBwH2oJTYnHJeBCQwvrh6pfN",
  "key34": "KXu35nL51n3rd8xMwC87NUzHsBMqKJLXQwvA3UAr9v3WLgLhCDUmKz98sWgL3MPU57PVENpRupikFSqyYAJpXLi",
  "key35": "31TmfG21wHC4LaV7rHtwNcsjrrijR6MftAq7oVvhmG27PJt47QXW8vwWJcGwyScwvg7dE3xQQNCuoTLUoqBDPaEG",
  "key36": "4TMNxM7XrtSqioVTFLGeN8BhFD6xdveUkL8fHKA9Uk2hEqhxBmEqyrexYtUEAiraznybJHPbPYKp6cstv9QAt2R2",
  "key37": "K5RCGK6U3qbFBXpmFi7YfgykKr7z45JTLUYkScCVi8zYxrDfZHFQJgscH1Y59TeRE5egY5NAHvbwta1Sti2XF2x",
  "key38": "5Ap8r5TxEh62PjyxHjKueP1WFFitg99GBhFK2kdZ85mvXWsWoPGFs4TeBsoN5w2hyLBEDM8Ev23HKAp2B4JerRa3",
  "key39": "3tfo2E9CX6HDfWiUnNn7Ln25xtxpcFWEdDP7Kymep6wr1Q6ETeJt3jxoK18yH5iZztnt4LprCXKsLfkwbR1EjrF",
  "key40": "5Yse76GKVTgEiZr3PNvBParFVgrufGb4RmpKxpaeMSSAKcA7dvwxVjLBRFJFHSZYnQcLdrE9pe7aoHiZoW12vEpR",
  "key41": "2hVEmbG9VLyUng2zvQU4LqSdMjKaUxozodd8wPL7p6azMTsuJsUVixXdvLnobvh37LMYetRZKfQHimntvm9hjX2n",
  "key42": "5Sj7vcbnefexaYFyFQRg1XiqgoynRXNGrVdZqYFrULyDYmwj5EHK9yw2tLbnqE1mgBuEMWuVME6wVGB18n4sXLkV",
  "key43": "7KhKf8M35tCo6qf6hErxu5XQJZGACqTq3jYFqqATenweBoCpgaAAD5H6gMFchSm8nDixAqiXoAFpzp8cCsPTjyS",
  "key44": "2h7Qc4xkyBgdpVcBGLBTMtEMXLuYgayUbBAQjfzQsLVfoVmvaa3AhUr8i2Lzq3hWMGNVyrByQuW6EStpNNUCW5EL",
  "key45": "65XR5NBX2t2dnHxyzkW3i84jCSSCRKK4uy8Rbpe27TEvmjDPE5uqMnk5j8biARFW9GwsfhrCEQmfhZPtt7jBoYju",
  "key46": "26SW8uGiYxBDGvZ97zenKqXxQb9B8eqLpsVF5taXnD8LQkRwAwtfDNd9hQuvpkiwgbzJVNLjvEkGAVjYbCmetbbq",
  "key47": "57DdcLwN2CvoXRgfNEsi17iyCWHvMoniqSv5Ck42dwk1EEHzNeHfY9ihQ6G2SetdVNMzfJdpYwSAmeGBEqf7xpKw"
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
