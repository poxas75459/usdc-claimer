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
    "3dVL2EDi4EMWaBmfWAHBScqcSKNzAC1aTSm51uipXS3U3eid1Ear6MjezefrNZPctGx6T4tzMHCSYthz6TdVw39a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hhVt65zWb7SxDCEwBvSYHA8WXHawq17FPhNNhBCnzLz6ifx8FRBwnKaTCn1Lnt3Xyy37eL1i5DUHerHfhDLGTR",
  "key1": "2EZugKgSGaNqz2783EZ7ua7cysi28zzXFsyiqGaBRPP5fjrGURLXEM5wC7yoRkRj1imiYsbd2Pg9UGsHksQg1hfq",
  "key2": "414qDVTuxe7KCHnB8QYoUYHKV3vxtiGvcTzKLNyM7fGYa4GJVwLiWyQLNz8Qnf5XypPcY5VJgXdiXwLR2EtF4LDe",
  "key3": "3jcKDFg6tCfaPodwDgDrW2hm2BT5qjsnRLNYiLw4b8B3neVJUj1cuA2W1HprsQuXCDsMRKRCjtLKRL2RQDoxNahf",
  "key4": "4aGLjQsvNx4RBXWftKMiortFgTg5dtM1Q7BPGS1oJDH14fpzLwkv5qz4JuiJic9tAkzj2Zroe5Evgrrd2xpvaBvb",
  "key5": "Us5mUa9dydUXeE8Q6xCchzrqrqSXKVMnfSB3MbdCWUPsC1xvDeW3bJX54HYDM5vfmeaQk7yfKF8Fki2aRvK3JFr",
  "key6": "2APd5HVAwyUJNTAwxy1RCnEBi6kWv98WjE2vCVN4gpF2Kk6PPfBSaFKLabGk4UzCt1e8gt8kWctNv5TKytCBd69j",
  "key7": "2UpFRLwobmyR9kJ9kUoyWkfcPDEs3XCbRRd33QCdZCvERgoZCg67TYRs7PTGajWmjs35WpQZ3tFCCBMHoGiCWtSj",
  "key8": "4gSiiWGhmiKGvfqkU5ga7m88Qmj4rjQ1yZvHENHQiVBB6oqLkcjS3Qnoe4CDHjEEidLXEppVxHttBgFrB1XV9RRN",
  "key9": "5S6u3Bspg9Wx4Ssx3Sw6YYhKaFXbVsWNzT2DLnsa59DVMf4CeJLd1YxsfdRnf5LBPyZ3C5QtFKJgTz1aRUio5eyB",
  "key10": "3nhkEiWSjhKQK2Z6JAL9WtoumHFjDNtFT4PrNWTe18NzcX5HKf8CdK32yJsYtebBuUymVxw1iFaot4YXTMdYdP9f",
  "key11": "4fpS6eJkTJARp4haotEsF8ogLkJ14ksfRaYQTUucsgsXsQvqx8wXHaiBfugT4sbn7ZsdFDWvvEkeheY88MVrdfBm",
  "key12": "4sHVwRA2fCDdMPRiHavxfCA8Q8Rh8NozCbwgyRs5X9uC3yGo1Hcwm2dM6NGFb7MdsTSspMoE9Qd8UecHuYCFzw6v",
  "key13": "64LRfoRxLc1ZM6BvsWdcFcDEJizr2jp67rKhgzoRVXHUhpFCmYk2nvzn8Y2rZ7UWWYcqc2KkY5fq5Lv2N815xLvU",
  "key14": "4UdyzvMTv8ig13sh5yco57AN1BXk7NBEdsZUvJ6H7YYCiGNh8ThEYvufAtqeVB2xagcVznH6FU2AC6SNptmqBKxP",
  "key15": "3XKDp7cCbGWeVn1mGB4Db7VirsptzEMc4u8CEZ1xSedv2SbQ8ESzxPsFF9C1XMbXkuDj479yVXYz6g1vQN6q7ztr",
  "key16": "UNawKkWRhsXGkHayibjZbswtWNkCD2rjxrnpcAHUCDru8fQDDPMcLXu3oYNR8kxyHV3riEk5pnHtWsQgNF9RQUx",
  "key17": "15n3S8apRxo8xJYMDHikDLG1xwk3tu42EHicCW93oPZziosuxqZymskoUjnmR8Jds9wT7r8f56QZ5WaS5EpmTzg",
  "key18": "617aF43Nqx5SJqK2N5wJ716mFjMfU6LHDcseVChrF3xAFuZqim3Af1uuwSiAPSDczNucQcGio6yMpJt5vpYfGmK9",
  "key19": "5KhbvGiK67zvRJRf1CV6FebqoY1DaYeBF3iw7cuFhrbGKdcVdu4XMY579VqtSZsX29xKv5dWzMXzRSy6E1eVkcaR",
  "key20": "2VoB3DanTUiQ4hqPY2MB13RKbkMeEUfBca21PQc4mBd6ktZqJMfkuN9JDJxgTceu1Po7csALZVUEyMknKJFxrgBi",
  "key21": "2BZmSNH976u4km3ScA4TwggCt1n37UU8ynXB1dadgENbTSmoPZotAyWJhntewchwLkwvwkA3EfqxRsB2692beChv",
  "key22": "5Bb2AxQmLZFVXfEHmTA81VGmSqg11T9YvVJVYUNyUSNpQ72XQFJscSvcSNW9qzr9F72pUH3MX2eiw8eqbMPFGcux",
  "key23": "4qhwghUSXpQ7XcL6vKmEyqAggDzxFQ6P1yjFdccfGuccwry293EuJFuRjNVVJNq1iVXbR3oe7w1Hw9XfBEgtp82i",
  "key24": "8n79sf6bwj3f97KpcnqUMm8i3KpQmha5jSXzbGMsa6zEemNAfiN5i2DoyMKfETbppvEzkvx8VhCgBjN7NF4367f",
  "key25": "3Q5bgqtJUao62GfFFTFsFDmHXnNM2CxfVatMtBXzHWMSvJkPzHVpeKSt5kiR5o618hhRJmRjmDSsBhBi8LkBPJu2",
  "key26": "5sC7YgjPzaahqrF7Dn2qhrfeQ7DkejwFJ7vqpMfBckYY6idBPnG2L4APdCH6C7fYzgcgdrgH5hdaDryWhH99f7yJ",
  "key27": "2w6qATuKnRAEgLyCQxECNnUtpi1VzRfHmvpbdExXgsEvqYWbAqme6kpJHszU9B1exnEWdMYvD4vkVAx2NFv6HVH9",
  "key28": "e4PBSbocgknNnBngLvT9GPYCwNi38KMb6BtPN8411FyJfs6mQhDRLSPYfrzUwdjdGhgBCCxQdinymKTBH19Ju9N",
  "key29": "2fA54maBMXavjx8f3MZdYfe4JQmbyuV53V18XDp1tm2L6cxj1nSYp8H1ZbjxxYXDGYD8CEe8sy3Rd7vPWqMmn2s5",
  "key30": "2SaUSGLUvd8earQg7Qmexja3FhUiETqSff9mcBBsYqYqZtHWmpiCAxzbxe4ekasttf85uLbekUPrkzzDKZT8p4KN",
  "key31": "3SAs4ZuxFSyN2eivghMqh772YWoEsvfGecQ1LT8eYouatv3iAb3EqgNaxvKk82s9xqQT7MQjRdP5efY4YSiLdAWx",
  "key32": "5SUa6HsHjGYKs4X6uM2pWeLGnJsne2ZYeXzWhCyPuLeJzEyQfse46CnuoYWcthhuAS9tzhjhk5gKvcdu8eWu3Jgx",
  "key33": "Zr3ZjhLY97oYQyjz36b8YwABYZFQ1FDMUfyhNceWdbfDak6uXHrHj2f2SWH21uQ46MQx87EVEzSAm8JTFPzFFwM",
  "key34": "51MRT53ymxMkw9bfABMvM3gMqbUGpZZnBtAppruLeyRRjDXnYx9AKG7TywuGydRhxUhYsNKnjmh1uUJG5ZbbDtTz",
  "key35": "5za56sPqFzM4oQ6YPDa7q7Nf4iTR4qvbMCuMvnqb9fvV8nMQDuq6zraWFwopatUy52iwb1uPNpoP8vDYyeeoUheJ",
  "key36": "5zCaiLVW8WW41G1W3vLZCrjV1a5t5vzxtdceoBTauKS6DFNGcvXwmgyADv9o3ui3aT35BTBHt2fyrLsbaYSk24Y2",
  "key37": "5Vv8b3i5aaN89JT53EzMSoBQ735tQ7Z2nG85dnUknUwjzfFGFiaFEhAAoBis3y86FtHUZKfzhKhZv1ZHD6BsAQai",
  "key38": "3WfUAZ1fwXp24hUJiz6eH1ZYNrpnoFGKuvj68hcaebTG8swdMfd3FJybWECGbVJECuvkeTAbfiFf4XEbpVn4gwdM",
  "key39": "4JTwsgteLNS27b1TUjhzBMfvNoLop68ekK6ojmwCXntCkTqHaPTDcr8xFitmYaANnJuWT5ekZpF7qc11uQ2YBVAL",
  "key40": "VMwxGDUPadfMqdfqHphH2PxWRgFRpN5rzbewgusf4fxBmMK8HRa82vjPdCoV7vrvzXY4SBQSJ3oeCYQdPsk5aP6",
  "key41": "jWZqYaHpPwpr3tUqyDLBwkBot2cJM8xZR5cGjUCCWbHz6JrjQbLFhW55KuLP9p7NyYPHcDNiin6X622C66hCGBf",
  "key42": "55j6QcoN5u9ioBBEWpMccMj94RWaVSNUY8bT9QbCCVYNXPeEYtNqTaNZbXcoNmEatTCK36MVt4snAGD5sau61C23",
  "key43": "5M5j4Kdxr3kSmyeKcSf3D49YenjvVLMEXpqnBwQhQhDbtYwMELfFHGymvwx9VsZ2pMJJy36k6qL8w44pvxRDv6Ns",
  "key44": "NukpaLzLv8uyFnFZrNzGwTShZV2iyMoxGiufmTZsx5i5S5NMASySVyTiyipPbrgKzESjfEh9eX4rMipuJR2u6sU",
  "key45": "4MhriBtKAXhH2Y5FE3KwLCz4gXiwGChWkaSdG9KcnMBxYK1e5m4XTNuo9eSUhXUcBWsDX98714Pxv46o6J3mj9iH"
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
