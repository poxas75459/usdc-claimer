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
    "YntARSEPR8f2ARq7snaJE45pRX3YjjEALi9MTraEamJWcfRFMeXDsdh7LDw1GQXMjP7z5nRYi9LeDDy7J95PpPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JmD9XCkvmaoUBsSh2ArhzSmnYmdV3cbwjQDYURrfiRyeqcp2BJ8xXKRQCxJpeL7R91TRRZT66zkQnRx3e3VXzxi",
  "key1": "4ZTnZFK4E1G6tcGJ86zJuznoZwWzWJ6jpq4rJN7GBPF3r5iVf4fijHxJCZu15RGMjUFCLUzgu2TjsjRBMJUG5Z8R",
  "key2": "5zDsL8L6gr9b1gCEmtWWoR9FBasQ3JjfMp81QNy7UaktKYDkFV8UAL16B37SNeyBj7A1HppRQT9JTkPNrfqAP4Xg",
  "key3": "48oQxfd8ngut6ZZL1x5aNH2BXj5Ftg27qF9YCPfLAkQamEgYyPAhddg8mXb48bHASwxAT5oUuP1QYt4FJzwaMGkQ",
  "key4": "BCrMG6CgtGaYQKZyWKrhjDX6anStL2Epcnmzn45dp38rjgLo6gSM81v39UB7M9vjyxVm28YD1aamTuTZZPY1JHn",
  "key5": "3gLsW4ddqqHt1c6izz5HgJjjHDdkfz96aigGX17Lvmf4R4z11gyd5uqRGyVFZzTdjQEBcbjT4Hfiorc3eNU1q57T",
  "key6": "5okKHY86ccQ1ayWa3HHyw5XvnhSyPxMZfNYHtRV46jaJLCUc61UCEdHDjBUdvcMAU3oU4ULKSDhhoYgmf38WC4Na",
  "key7": "35Ud6wTvExe9uWTiBFT9aYzxFC9bfhPsinwTEgR8XNs26Yzbhsk3Fy7QDkXFDSBBQGnLsLtAU6V8mSiCtME6TMgt",
  "key8": "4RKu98HsKhx2R4Xir1VzP76fpzDjVUNrUoyzJnJYn5EvXH1zUTjtazEEXg5wJuAG7U35pw5HFK9weAkzLaK3iKSA",
  "key9": "44uT1hmpo25qLxKMvz7TXUAkEBhq8tRXZqwei75JoXQLWk2cb1cAzp9N6odJ9rLoMX4zLG7N9jar98dndohJs5LP",
  "key10": "P3kQGh2so9TvANHXqk1PQhVRWYXvX6hDMYh8RLYZJqbEdMeS5YPk6b263oEQSMHs3HxD51UQ8aJFS8wVCm7R5pu",
  "key11": "323WRUPdfHML6dk9EKpfsno6chAeKYgcwQVtVaBjQaNpVPvx4PGabg9ZQJw3D9Jpeumq398g1EpBCKDdQBauuCst",
  "key12": "qmmRD3T8wcQadiMnRD5s8nhicGwoAtnxLPoWNRUMc2U6GUVR7qmbzjiojCRgFhfWHmxZErtE5TtTJqDD6TBCYEN",
  "key13": "2fHUo3RbWtxBE14FTwJfUJELqCWM7mZ5bB77m6e9bkcim4KxZtS7mag3zrwbbXMWucuhzL5eFMtPDF7gtJuxSsCM",
  "key14": "3zzbwciziAG6d3PxnqfufzG5kYHRsMr8GhxtjR7fF7eBsLT7TQtSR8AF5jF2a96uDxHVP6YvYWoUWamujuwhfHe2",
  "key15": "51PEwggxYHu6Fde8cTP6hN6oumHuU78CWMJPkfLaUrx5xSftEfy7u2y1SfTiZkHVYiNdUvHo3PcEM34RjbzDSyTq",
  "key16": "ZiDn2cDesWE6rG5xZMZJzzTHmXCqtxHEsRktH4CaY6Wos2AGFtVTi9cBw8Z7RhXW4iGxoqXdhBm6gefMmEM8UBa",
  "key17": "5Gj8xLL3CnTCyg4Jbw6qwj5YNVUWtvSvYRbz9nXuGNVdAwoibdWoW8VnNKS86igrXZ8ZSCrs9qAKdmA758KfaMXu",
  "key18": "5QTR6Vuryz19krLzemTy8WJeH3fYacb1WnTN7vupcYW74VNjoJneYDdwRGUFX97PzFtbjS6VMid2gtnkuiHN3HKV",
  "key19": "yqawKDg4bwUf9buV3DJqKo1mGwf7c1J4Hx4ygUMix2koYbwKJbKVbWjuQfNmW9imxzSCCKz4H6HuGonY5RQjPEa",
  "key20": "2bnn4RoUiUGrZsTmPrHvSwG8TEzgVgCS6LDejPSbVuFgii7BZXE8YDM6zyU6z1hVhtgLbZSvHdKiqDP155Dj3Fxk",
  "key21": "2RYmmeLLsAyEfbWjn3vN1thi5UWv2K4S9JeQ3PXsopm2cDr6gwJcB2RL8A2wnhEDWFW6tcWxLAEfqDTuPtCV5JXM",
  "key22": "cPY8C7zAhCVbiUnFqSTt2TF5mdqyEuU2itAgRnpY2VqDD9BM5aC7Q4g1HxkYifsLz49b7jChPDXJs8UbCJQRP71",
  "key23": "3oSHNDuYn3rjxt4wcYoqpEtCtcc631WxC3DMbvBzEzMQnBDQfQMKyh2itcetV9Qk2EXFshvFVB15Gx6YF2DrA3sm",
  "key24": "b2Fq6qtKJYKRGTQwqG8LxBx5b29KftQ7ZoSnjduMdSzTZQJPAr9HzbuM4pdmv2xmrbaREXopxfgJPwCeNUotnnG",
  "key25": "2hAYjoGbbdYNjL4N7LUmaQKnKa1Kc1NHtnchiG8tCKZiEhcMKmk8Ud6BPPC8C28Fyee6kdMx15RmHdKAVb1L3AVM",
  "key26": "2mVevZPVqSYzpJpoCB3Q74roudanshFhaA4ktSVRMWZkqEStk6MKUAGkSHbuTcDHoVdAWw9xpQHn2b1KWWmabmzJ",
  "key27": "5BaTxUiwMVMb8U92gpuHDY3JkPdNiJYB2ujigQqT25fbFD9y85hfA5wFrtCxgwLPiJFMajXF6W8KUqWnUfdJwG2V",
  "key28": "5NtyMZN1jLwPfETEUtysYxAMysHRfkppNKkFj49VJq1gnBCzgbS99nP3WgvimbQrB9GZ4uWrWUTqvqQDjBaSiJSx",
  "key29": "5ZS7BxHbqb8meS2rU3ZbhJZLoRrwFkD1SBFskBpW1mtqv9pmir9Vy5nMYu6RXVgawSkVEYuSCZ5JUuKqyTwbUyob",
  "key30": "39dB1txQVR3Pa5gH337K3Hc7N7zRikVXn15uQ6wPihYG93BdfTHNufjjddAeSYdz4jYSgpPddpLjZDvAFeCRxhxg",
  "key31": "24LkmtGwsYzAbAQLXwhSJsansCGwGQPwsNqd3iiZK9aGNTpJvyBRXQQ4RXTyoFjwKZvSEYvCcYnnJtqTLBP3WPhJ",
  "key32": "qXs4xtLVZ2s3svJ26arfdzULaDPCTz5qWtB1KuojKFcMB8H2TVfc6k8ZkZcPcDHGok18NWZNikVmpnK3i2aTt9B",
  "key33": "2An1TDp4NXRdNFsULgk78hwMhXMEa5wiGh8MptszRJSmGdLJJ6SRfpX8uCbcREyJnxAHCccfjA5f3HymLBR6HmNE",
  "key34": "47ehpwkxcFH4jLxYiydZSoJVG8HVfTBvQjANGrxwV1SFfCGsKNkS4CHY84b7a2auXGsoasVXJGcmwF95B1o5zCpj",
  "key35": "3a6YWMy5wPxSRNxw892ok3WRGPLesNhoJaYHpB5BwbjKF6CHkzqHY6hLEkqEPZvCS5qXMqVfBxW7upBTcgHW1uoW",
  "key36": "4SbmXXpe5keJUcFqaZaBxmdgZWj7nsZsDTrR6LBPXrGCioFHxWFkv7dGQCaCkoLeyfFSS63736B5ututJgwhJk4u",
  "key37": "64HUxkPuwfPwNJraz7HuGZtdqsxY4LYV19nZbwj8AmASiGNCBBnZcuUmsePECTESXYLtXJtNFTtY8HJ4mKcWYcTs",
  "key38": "3HriyxTYcBeSTb6frZaNxa1py37gWy7jFBdPbs1JXC3EX7PJGKHJLBzu5eRGcRX4EFDNeTuvVjkptgJ18ebw5v53",
  "key39": "wauDgcN8hGSrDoxS5z1z27jNt6r8hSJu24BebVt5WwHVUPkVnSE8ZkU9sxYoSRewuAkB81qEtZd6QY2wmf8Dg5s",
  "key40": "4ky1DyBWA1hrC7wKbWzjQUzKESVRkZTyv3UtqCzFPqfBFzL6aEjR6Ksyw4Hr4J9vLNM8XajpAPwTxmkoXWUkTTUy",
  "key41": "3vxUZbtEriTKArVZ2Q4ZBrPATRcwkt9kiHDY7mWNrLUFT6tjy2CQoFsiDyRE1gpTSsqn3HhYcafG3tCuY5Va6sJE",
  "key42": "5qFAv4dsWN2AVGrCVdZMnnezdzB99ijJ5cVP5wNQ66FcnFPhCX6LGoVMWPtBnb4rshNawGNTANk28EDsy59D43vS",
  "key43": "5KfsP6A8SS11yVUKY9dzYKhRjK7u7qNF3UGVE6oetSWk6rRsm4YTanaKyv1AQMrfyoR8cRjiDi27aHGo68m84bm5"
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
