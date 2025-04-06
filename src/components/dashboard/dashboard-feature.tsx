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
    "2Mu2nJohjMFmw2mBQWEpke5C3P9WpATfrLTPMBJrUUAnh4QNTJpqxkMdkU6bYMDdYSZXdah36eP6LVCQJ3hHTTrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ervgKZCpkfrgFoVJxjZ2mrJW8fjkkhb8hEokTCYsTetPZVdvpw91hqsJodRWtnf3Ckfs2N4xXkXxqzfZrSXW2V4",
  "key1": "5sFRWMg7jtvJVyVWbkd9iH9J7uvqPnmUkipNDvZuvzeYPPL8Cqcp6bxEg4CePpYeXaLTRCshC3boHbtwHFFBywT2",
  "key2": "438pwQuk5ZGH9vBNEtuidqbDeCvZcBGnifufqqW286xZS1Kwa7RKPssMZMFpaRLDfrb4Xez5kw2A5XeKFAzE9Znr",
  "key3": "3ZvbaxGbkkPXzmR8jtvncujEwBbJus9y1X1PsxHtpzRyBLPRChymyDhJbiF9KqtSEeLh8saGMok1nWU1rTdHDzkT",
  "key4": "36DQZsPiF6HY3BHmGPx9HUffKELQdUT7TeG9PZDaBe2RZEGDTwH3Uqk3e2qMn9M6PbUb5aZbbRPFShshU98eR8tK",
  "key5": "4BdBwUiv5jQiTaj9nbfajvihCedqbfAGw5mpZMtCF8stpz7QXfFbfY2NrxeBNh9KCB4LNfvM26EwZ1eYPRy6oqxQ",
  "key6": "4U38oD8RW7bcKx6D6frnzPxFtTxxxsVaTRKYCKWVmN3g3cQkDDrgmUqZBa3ZwxNPphiGFfnQJ9aMCHaRxwz9KAXT",
  "key7": "2uaqRsVHfawngNQnhrZY4NA7Q8d3rKxddN39rPB5mEJ6exfybLVaLqMgjYv4ZYuzm4UcRk96ZFEHbfX3qn6GQkCk",
  "key8": "4AMTme8h7fM5jKomzw9QkQRhD2djekJC3bkTLVCuXNfXjiHSGfGa9RDcRnfCxKJZCb1gSBdJphfdm2a9g8bTku6J",
  "key9": "479Tdnht18P3TcCGCb6Q8QufL4iu7a1DJHvoGVrmuXcA7TtaqPUVFqAx4GSNV4ShFob9ZquZUrZnNW5tzky85QuU",
  "key10": "2BBiiF1nLmQ24jep2p9kbAsqhzJSZdVTDktJzjMZEJYke3Vt9QQV8Bh3UvDUxXmU4VgvW9GMGsV2SfH1oQv1ktQD",
  "key11": "2Y3cJMk7TkY6Yj2Jkaga7B3AL7bWQdN9a2MFQz2TUrwsDpEPywjXry3iYGG91zgS2AKiLgZKNLxNupaKLC9zM45P",
  "key12": "2ATZELBcW9ZZZ2oPaRZumMEV9bJZyBm4odaYnXqJ67D1hac2bDUCzi81k2PCQJPetmrdER3dXLgXc6TNSLNNw8Yp",
  "key13": "5nvbBCN2HwNdDtP7u3ADtRq7Uf4sodepQi6tHSX4B4R8GtCMXEciKkWspqL93zxDmFQGGe67e8C8Fxx8zC9yypRo",
  "key14": "5p8KSiL2YBFp5HFKFRbPnqvgmqweqXScPRKR5K2j9y3auH4nNbXM28KCNYeVjDhvnGNJB3dPkv6Rzp1fsSdbwgr5",
  "key15": "3TKQsJKbr14UtkLMSqQ4nXzupw91WmtD1xF1BkCRAhPoHDjh4zkGsVcW5ZjfNnuAgjt4oadBeUdpMRVan5dLLAY4",
  "key16": "5Jf3iBnzpPHDknTW2agRhjpME8XBiexkPBjXgtHogzVvTadRy6XVXDTjPywAiq2LukA7d57s9kU7xJkUXieAh29e",
  "key17": "34Mg4qtoAohcXMRPV8e7RLpeLy9gA31QkxyZDr7gdQmQ9utaHXxfqQoYCiW4cnXhB8MSCS3MQ3ZEUX3LgAEFrZ7x",
  "key18": "5pAKFN1sgT4uiAh9EHPMTpjogZdrdURPeYCdfiQ9uykARujgsDNh744UKw3k2xbKhPy5pmGRmypq2Y4dVd3Z1wpw",
  "key19": "2jvvVou1NyfXT5iq7RsN5ttXVJVpXJV2pcFXCRGKF5HFwTHPMWZmF4cMQxp1kJGomqWEKg2CjLwuUirnBbd9YfFw",
  "key20": "2STZPdow9kEiQRqDCeu6rP33xdyJfpXE7yjQ2WrLCzeMtBFqyQohVhWjZ3YLD7mVfAR4vBHbkhGzwLNNPYdB3Lo3",
  "key21": "FiEF7aEn56au6S7z3smxmttezEe34i3zLAYX21Tj7y7X5a5WR43hbDvmfBqR7Tf9braYEeVNiqQKBuz6eK9QeXw",
  "key22": "2zPWXEPaxE6f1RoCn6DjZ4fu7WWpsoYmzvh6jnLqeRaqGVJQjeLiZpX5VhTpRtmknYHnBQhFP3Y9QYCvPf3mYMkw",
  "key23": "62hn2VGkkunfJDDHmtpmhSg8iB1BaJdL1kgo5AmoiDixsS3P4pffn9nA6KMQPFquk93gC6vDh7AkY27eB4ASB3yQ",
  "key24": "4XUf6ftU16XVhuprbh5pDbWbX1XoWtwi4izrJm6qade4jvS98eUDVQZZcsGJoLCEAz3EPWC7eCxj1McnfLcUqRqU",
  "key25": "3gRq3Qw1xxUiP6ym2jX4wVB4FvgrahCuLpkhYy25C5kbs96d9NGxanBT93nuFDpzz3oVfEi78MAz367YWwbC1gNa",
  "key26": "5i35PfXtzP4RogTveunXEHxCDvYqoctXvrQL4eSSQEFgYLopRwDp2xK8izFtoeou141CrqQD7KouXdqLxEv8NWLi",
  "key27": "2N4hqWNtg2xyAYFFsfJGEGjL8doisp2JCf3EZGpiWEQVfvKDpyeHnXzkNwiQXmDSJJueCe5bd9aSfDMXepdoJGUe",
  "key28": "4RpMGaAxnUir588xvfLsRjHAFv6Q32iQgyC2vibhMVcfopSLS3BJv34ntwPjzN3gELgQzPPd2WSKyxJ9mS1dFSm1",
  "key29": "5qgF6yZcyM7DUmAGAw93rT46UjmwdYKpS8nRABwhh2gA1TpGs7yLLTUA5fiGAhggFATyKYEH4XnMU7nbHHcJZRmG",
  "key30": "5sMoJGDVaGBNw7EALMR3N6UkydwTTVz17qUQ7qcrLKegFzu5omnGAFKPoMQc6Ht26ZbT8odp7ggv1TXq32R9q8Z4",
  "key31": "4hev2Jy1eG8YwSXndPL6YQvua4w3WU9XKfCwWfti2SDz2aWKMA2zFbcyjVGs5MT387b89rAunuGG4bwQxGWG8fin",
  "key32": "JcY4DiWBUwFNyuGVmyYPkqWkFBrhaaANpx66fiUBDaVSAjcWCaS8eDoL72sz2Dab22Y5usUn4DbfXYWU7wnu94J",
  "key33": "39oRvhWAgB7GHuV2YhQCGikfmUcjfaLTrR5z2D3fz6sEeU2JnKztqcdBNAaT4giewhT8RaKo9PykYUYc2iaDNpDw",
  "key34": "2CNTnCaLm9RwfzdBxapBiJeDjrvf8y8sRDq8HuPhni4nX4G4iaa63LV7GFm4AXtjqd5ChtLuaU785C4G2TcuVkh4",
  "key35": "5HXzcgmyHLsBywn99v4sV8Ds9k1p4kqTxrgq1t5DuiniZBQ7rdDbuNHfS8CwRHNRtLzCEoT8y6BYMBYmhaPoReeR",
  "key36": "2i4wET47rd3TtSp1jvcFWF8SYPrdL4Ap5hachsAMrDm8pQLG8QH57DSM3PtaRS1usgSdAaLbCYzTCHGYbruybLjW",
  "key37": "2MFzUnts9midHPgr3A2Jg34csfTtTuBZZCnuPA5zv5QMWnvg2JHFUj8Moea2dECMpB2urj6RQ12PVqrHejd5QPG4",
  "key38": "3kzD8FcjGGnmeyznUChgkXeffnBnETiPCkUVBybawNwwfiRveWLg4MZetfuAcPciPkFSeDGWZiwHivXRn2txmdrc",
  "key39": "2C2CkAQHrhYTxJcCk85dt2DqpzhvsnQ4YcCoVUyYWsx1vcEGqf5ccSd6xcEDxMYsBpf7RCuyJXWvMHPLtyeqsJu8",
  "key40": "37B8Gg7YFYbrCVFRQetpNyJw6kNH6L7YHqcWmb2DcJm6BfwZXTN8y3Jyc1i4rqgSeRiQPKjqQ4xrix8hz2ZHMJkN",
  "key41": "4C9kWL9D1uBn4z5WcmCAcPcBpihvnoMzAtMiGPbsGZpKNBjqahNNwwvb9hnGrsCKo5gfyv3psRnQrj8jJ2RakeHB",
  "key42": "28FXzFw3SLS7uEeAdx5Md62WCxv53FXG8a9LH84Hst6zaHaCA9Ncy3XDHodUUNerA2HnhnC9YGFX9KNbVEpw9pHo",
  "key43": "4Hcigk3rBGAxvuutT9eqVXtjqUHtZ65MkgNMRFhDb39Ky5twQdbPjFGSuHPZuGn6Z3KdHUibBPXdnUuSsb4s5ytQ",
  "key44": "4eVqXFhfxmRt94Lizth6UgAr9bXqALcrJQDY91gqaqwBbDJY4pZym2GeGdeGnWCEZ5h1vv1Dknidy6XqZnz8PKhi"
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
