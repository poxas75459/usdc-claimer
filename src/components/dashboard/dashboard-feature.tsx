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
    "5JDKdpLiZG1FrG7Ck2HHi7dGWk3DvHfrgv9beJ3G6DnGhyoMadF7U75qgihH1Sqo1iBprAZNGq4NsYFtviNz2h1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9NbJTJn5Ycbrt7BdyjpCo2zsRpBVztfpqHg2ExbVoFd9vfzmd7GmZtaHwpZQiGeLjNhnu97X18iqAk4GWc1dLpL",
  "key1": "5dKUEGdoaKjQCxHXPbmbyxbpt2RcHNce4AyLnbwYcydaBpbkv1TVagFAbaXQczjPvoK51g2N8vrJrPeRn31BdPyC",
  "key2": "4FVj2UZoC1K97CJLs51WJ2rANNPGZGAo8iJ6CxHr3Q4D2DPNNMpvuqYLEpevvrbofJaJa2yU91hJBKM4DvRn9oEz",
  "key3": "5hMVdrPbPVdm9wqbtXrRjacbZtcGxteUvif8yM4qF9enGPqqRundt7YE5odJ1R973s4yqHVGMgfcAX8hfyGEqfRb",
  "key4": "JY5kV18HTWR6VXAq9TxKNeCzt8VJ7iG8CX62euSfrSWZg6FkGT5Hd5NKc1UrxCt6YgTXqLwxfQCp8xpDiW1gTn4",
  "key5": "48CzPFvHuPWh1MPXFHAZh8tuyNkERMDirf2YHpkVYdiHeNEzERNGxsadfQCBr9SQuFBhsb7Z1ajrXuiZYfqXonnp",
  "key6": "2SWCzUpRN8u8wKjQNtwVLh5SSfvdUpWLutL5wEysDvwEkUgoQ9NmzXMecnjymPrG7PRttLujmuPQXTEoFdbWcPU7",
  "key7": "4jjnBn5qtR2cBW8vw5gJXNWZiBBMrt1xVJ4MbHxyQautp3uiJ6eDk37CRyMQZ2vR6VBKZjfDK1pnBjPt42ehNUai",
  "key8": "5xYSXw9AvWwhhgiq1bSnpMkxjFyhYSy3vAkDcmXDPEb3rdEKvZy7j6EUgLo4qvMiAstGqJ1v15Fs6vJ7keLxqutD",
  "key9": "2EUaC1SJVa4QrCX3fbRkJWJL2pCKahVmCEkwoBdCRbYDSf7XPJzyRV1ppnsCDK2Vh32AtDNbcB1vL5tKHNXfHZRS",
  "key10": "5t88w1LBy4QrqvskJkSnfMuDLaJuc1RGptEyZUKavtq4uhB8w3Wv7smau5MHkc6ANXA1rRvz7i9wrGj3LPCXViBn",
  "key11": "Qx53CgVRVN1csEsofnTEUVoF6f7uNJdLH5kgpDiF1FmJMd2JigzqsAmEC8VkPNqZPcZGppx3Adi3yBdnkxUitbu",
  "key12": "3cZjS1ZqSqAqkxqfhykKoKjgvU2GMMxq35JnftWzjysFH5udC1Fu5K8fR3dErxzt385s3Uhm3r7nbp82iEPPboyX",
  "key13": "5bWPEGpBoA5J6XRdHCjA7Bc9WxzAxL7f4k73sEMKDqVoimEFXYyhGpFpAVS47CCPXCVbPvhZGz2UVCLf2dPJgR2p",
  "key14": "3tZspJD7CjxciBUUnjSPASf1SUEyFQzUtKaYBjdo3qceRyenfABc1huiT9QDJWC2zaE8oVkymAf64gs9durnSZbu",
  "key15": "qmzo878J3Lbf5H1strgNc6woump27DAdASfPJTbHHtQAw5i1ZauPtHNH1mokXhKKsswcg8eRyVqUcMfq79hgnY6",
  "key16": "5dVWz3pADtWad86rok5S4KRfmW4UkHbMd5jxXcAif2oVDnr2Dycz51dugqKsVT3ne8B3tJDimPj4qJGFHuUK6tjU",
  "key17": "3ieRyKKjF679QgjYLG2XfAPHM6BKijq8JMb36ueKiJfKWKwpHMbScTgMB6zQdFopxBYG6aDRwrdY26fXkYAwpmqW",
  "key18": "4kZuF3EG3wXc9jXb4R3jc8RmTTCPDhM14XgCTMGpWTULgboA9fzrZeKbZZR4t1FsNeZ3VkbyjRm2M9jLUeXox5fW",
  "key19": "8TJTPEVQXmTRgSmEM3WTqo5jHKSijaDVmqCwL5sq2ZVD8Livqr4yYin9y48rdq6nzsyBmwQJDVW7TvtYra3jCsA",
  "key20": "5JQaxKJWaQ7Ff1vfzMryinhkttBbueYt8igB2rqUP9gwHqMmu91UBDaj8tzQo2MLTtZxXcQvV9bfCNezv8YgSrv9",
  "key21": "cECiZ112mtB9ZUcuCXC4R8WfBVjCohJUeBZMSnTnkSt71HoopPvi7fuVStxw8f2aKCko6qArnJGLjDor7XCjwfV",
  "key22": "2YjzxAUmnyEAWzQqU9XE5DBNpBRc5fVwdSB7dKt5YXfmY6zTA42cTxXPST5wjw4jfVDHu3aeX2hv1fpDrL1PeL5D",
  "key23": "4TN9c4WjbM18QqW6UdwhWxjWdkdAPy2EViEkL4wnkMSDbHaY2tcSbPkJkBe3h96VQsHtyZfguHp3jsKRpQkP5d11",
  "key24": "vPxqtKqDMXvuSSQ3BxADgDACs9HYwrQcdqWWqYBiKkk3M4sapYDmuVnWh2uN6SMsSp573yqY1TyxtUG8TEdsMzy",
  "key25": "3gJX4j22v9pDPLqVSj8CPQYBo7cmwMC6U5qyp87vmxhD6f8mNqK1vP6jXTMrk3vyciGvcnqTya4v2A8So6Xtejvo",
  "key26": "5MitCQ5MxMmkgUeYamtxux6z72a8TauGcPvDv6hiuriayyymVQNbip7uKwkpCfvB4Xvux6FQgDyHf5UiiTbuCnDP",
  "key27": "2XrYhstET61cv2E6PqsQJ6QENwJFDY6Wn5w39rg4t5EfEiDyaLo2wwmETAgfLHabNRwciURS1Y2ekBnQq1z3Xv5r",
  "key28": "51d222iK85RMCPJeDsWnioyWJXWc8YVUDANBx1nBpZrNQZLkkNTZN1NMbdFycYqv3R7MD5CLvrKCJAJHJxjwBmY3",
  "key29": "TC6b7NU8zE45JLrWBvG1c3KjV1JY4qWCHLVJoDX8KJHt67qYLqpcBpYDAR1dMbXAzqpmCneBS7NJUB3wFiTpUc7",
  "key30": "5mJbqHUAaMg51RuVAb5NaKy8HUwBcugiS8AN4YvNGrTvfMMY88EqQmzY7XShSLpPSVFpYCuCAgNp6KVKhEmNdfb",
  "key31": "8u7GX2ha3sDHqQXYSX4wojgLAo9Gssk7DzdktBFP5KVLAxKDabTrFssJ3Ct6ddVyXBBCLxYiNmVxTT61aU2Tm4H",
  "key32": "4SahDmw8TfE4iFeEoJH2fn7t1Y2JCaXScfZ1wAcwZToYpu9PWqFUmVuQSH18FsjNmNhpE2r7Ch2Cft1nJtWA3D7w",
  "key33": "2ubcosbCaUpnFv2PmfzkDNRNaqhP6LY78aLAYyFWy6NdVrNorJ1ePSuMZ3iJtoXqDKmDy8ybEVuCekTB9nRFr1nY",
  "key34": "4HohnTHMVuTN5CpbmviLm4K3EfV1RKgJjWyxfMsA4BxqnsMtUDfFiUXzXuVuGNiA9isNLxkZvFkVkjV7WHvVTGjs",
  "key35": "wVTDXGaUGHyfG9BiXB9MBBFLDQoXqtooQ54cY7mjrfvV3omfSfUHUdntyo8Zk6HWy3TnYYojyYS5c9i6Yntb3Wg",
  "key36": "2CUHyCGtRZYoN6tCssugUpkc6WnfAaZGRuvroDSXmnaK4RTWHWKubYDCf1EhAi1DMGbrBfymdJjwees8nb87cisR",
  "key37": "n2YMbqYshHLvueh8NnuAns2sFzhikpE3ozHvJP1dG9AeiDrX58CE7dAo6xxGbypTqbkbVwrm1vVrw3GTEmPfXyV",
  "key38": "2PRw2oNSxBXyjGLYz5YmmrnL7Qf6PGMBCWZRC4wNo8wxBzgh7JxbuN7ZCHum6R5dC3adZ6A4Jdj3nCW6CCvsgktn",
  "key39": "5uzrMsmJh4nwPZJSjVaHD5H6LFinkPyRXuCqX18YMPDYnjvMiRQnfzLXEDMWxvfDLjLTAu15me4TyvkDhjnDC3Uw",
  "key40": "kM5W8C2cvkwZK6mmczXUBwNddbXKDTbbnAgYCfX3D2y3414U9jUt3hoSkvJVikzuXQp5hYS3X2vJiF8tgU8fZTE",
  "key41": "2tioGxzUCFgRpBF1N3dCbFnzX5STKV682k55Z262xB3sRu7LeRmPr9YyTNAdADfXS3p32ZiTnZwnt89rVR4Qi1eY",
  "key42": "276PFFpVT87qitW7cym3poMifKfdVtEvKcrig3ZyDoZPTUjQ7yRcisp5otkPNFgeTsHK69c1akiJzp4YC6XAdHoE",
  "key43": "2EexdWQ75K3LqTP6EoTWMoZnuchxqX8HwteiJ9SPzPTcpPtNGygLFrWfBnpGzNrS1KnYifXCYGsndQLHXjMz7FZU",
  "key44": "3zCgF7H2U5g6YWqL8aWCxLNUnVsemun8HLxLqVzrXix9DRCYkJHcmhm51HnqGhfbBDVbaE8mnE4CPmrp4WfsEDuw",
  "key45": "kqQrJ2EW9w8EMJcmJcAvXqH1pcbbrtXDxHnCzawFWdEHqh1LbUkc46XdgyLxpqnNhq9q9GSbBhbVWdP9XmZpdbf",
  "key46": "2wm4PRJh18ekV75dCrpQLf6wzLkHZQ18GL53yfAcjE72sQLXzyFU9YJW7jxt76u2Cgv44jzq4UA3PrRK5tJf4Rye",
  "key47": "61iYRHo1Qt5ScLU2jR65jtwSeKgQXHntB6J13ToCKQnagnUDEETSoVnWGCWpiBUKp32r2jST2KK2awzmdUrfufBR",
  "key48": "5vZidvnBqN7TZRT4hesiVfDRSurS8dHbWxTwvPHGqPN3vdUXtpSso7TgnoRjbopm5PBxZv676N3K8pvAGG48ZYNa"
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
