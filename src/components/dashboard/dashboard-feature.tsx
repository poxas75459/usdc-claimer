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
    "94R6QaP4BLdTprnhRF2eXJRE8fJo1BaTNAe6JEwo6y7mfm9mtLs49b3wVpfSKxJ3fiKqqcSPmyVPLk7tnn1feKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xVh9UM4em3YmLtL4zNsccEKtwtUbxJvGEGGXNuGW78DCXBEJ6mVoVcZJ4poPVsbLZYQbGsdpZRCtNngDo9gPtXd",
  "key1": "5qjCnSnhhTZyp6113DSh9D3qYpcFhcQ2qC699USWn74hdtEbN6RMXKPmPMTLwTV4tnY3FDqGgjrQHFuf1RqM5GJX",
  "key2": "2uEAKUP7qTudMewfgQLnMPxCNagZBAU84J5yVv9yiW1cZR6ot9sNk9NypyFumXwg6vwYh75ysiDENwzhHZZqp7LP",
  "key3": "5Ak6CRWmg8q4s6pxeYAznC8rnjH5dXdzp1kzcd6wD5waDaNqogSz33AN54zGV8w1h5NYg2etkjYujs8JmZKk8QdE",
  "key4": "5pq13H62K5wjFSpH9N6mPDPsRNuwR2jAcxQUBnpssxsEDXd3M4UQqNzZ6oit3hFUYXGfB3f7hpx246Zy6xKQjmku",
  "key5": "2hzyj3jRXTLHhK99iMShFJfXJgHJM8MagwzW8JW8KLNfZwy1a4iJrmVzaxRBFx5hFudvB8M5AKG8drUA55USDEQe",
  "key6": "usX1MqqfqXz6BATSNWs4NACsq3jhfxFp7V5VrdQYrgJG2idMgjYF5Xj1BYJHx7JUE1P3uPRSZNaGqBUKbt1Cp5h",
  "key7": "53pxVv3jWikaLH7v3a4pMQbhfVKyHE1639xUE484DUiqYK4eNxscSWjgbdm85dCgVhNUnqHzmncQX4vdE4Ji1y2y",
  "key8": "9btNpGyFQ13aL4G2xZdAUqTzUu7QbryKsSQJsvhjpdPpAyGw2GQ4jDm6xag5iU4wsgycgoKQmtzCLxJcW8zrGgb",
  "key9": "3FGbPpitxdPQJfFsMAoo8xSeEu2csXdTvzET4ko86Xw2PrLEKSJXV8gLaXRG9H2tuKJ8rP8vUhzsYPmBxtjBMDGU",
  "key10": "2R5By44sQcJJssShPbsoMsoni1QvtaDszoWC7PD7denUPA7YXjg59Tgdu1e3Da7pzpVZusvdruCfm1kKSvfVE68y",
  "key11": "45TsZXg7Yx8yJuvnPozRWU836wSg3Fum23rt3cfNc7HfEX7VED4NYQCRy27kseBtWdGJDoW1vvJNVJQZy3dRQE8L",
  "key12": "5mebpZFmS42NMrVVrX6HjfqZFCJCjchP4HaRpHJ3bMmqP5vZeyFX51Wc3Vdw8uYmg9DXP4Rc6YCfQUsed3cGBvDV",
  "key13": "5ytkwStaLJseJZ43uuJt2tVzVXJPQKsuFevnBR95fpMT6SnSmm7Ktf2aCL1EKGC7FpNTFsrhGLZkZbjXsmMbJgEy",
  "key14": "4eiAvAbqdEW5CDbcjWbBRLmo7vYb52ASweR7vnwHKgF23Fu3RoQGAJADoxTmRi7DgnF7yUM8nJwmmLxg6pMzCsog",
  "key15": "4CnkJYk6LHDTSUF2tTaQh23via7BMW2XXqXtDzctgA2t5QF7VyaYZ41v5DRvBisBZ4xsvkEF6axaLFG4ZsfuvvwT",
  "key16": "5Fdk6RiECTQ1pELqbSDW7p4EQNfw7cBBVtDUyDFEyhN1eKdG5S4jY6LKWCWFTd91sPTtCRW7GDj9wn1TiskRzfPT",
  "key17": "3ntmFSsxNnukqNXuxYNSmZgYZ96E8RxJpCMqTqHGwJVf2z2DAgtf2wVsq1raP8pEgzzYE5Rhv57zCgDEWHJsrTjb",
  "key18": "tBLDtVgBzNQFLXQ4vX9eWt2eWUVoD6PuxcXd4tKBF9uHfLmt73LVG2xebTCaw39d8PkKFGLnXdmJYwcV2wZ2Abs",
  "key19": "2ewygESpgwSV24Ti9ywDLdWiUVGj8TvWfUJpxUHZUj5QgLeQ6N3utZijqCosAQyhWuiAYt5MyZuFSQNV46dhQWLS",
  "key20": "329zMy8bJUw6wvDo3QMNo2EAgvcMSJFADuech6531Cb7MSngHLW8M6TTGWGpSkpRKc5EsgyAghsf1Was8VTNkVkF",
  "key21": "3CNZrCMmoJiCvf7aChQfHR9eH7udRcyjmEpCji1KTupRwTQ3cmRwHYjkRaWNXq98qNBiKnvzxAGnX6BsgweX8JFm",
  "key22": "52E4JjXDA5f3Az7bpv1hQfY77EYtfByGTGeopCNXcgU4kqL8UjLbKGjMzpHuviykPBexYbBqe1DEBbKiETPUyLpt",
  "key23": "3Yen8SHfSYdTtW7L5VASKJxzEFZecdjxTyNanJXCNEaPTz1omKeQtJBL5N1PAubZJVZ1jgzK5ohdx8PA3KPpHSUH",
  "key24": "65DaL7nV4FfMbnFt3D7JodzgkKdkQ75Mh5VHXkrzW2qYgzemameFVNWSvf71gazSFM9x8tGaXCBmc771duTeacty",
  "key25": "4VbY96QPiGLK5Ap4vQcQmTAyxcdY5q13kNbqQsQgp8xcZGRcsU4SoaiMfS3m8j8RHcRCeu2XRUM4qMZbEgeYE7Vs",
  "key26": "4xHQcrqonk3nK8JZrqz1qAbbUp2aAScCNVkXWA5cXZy8w9926aoWyMV6pjm3EkbvKhsvDpyXov1EZoQthkfdbqqv",
  "key27": "5VmNCie9UVZSRcaBy1vr3YMTdEiwqqjrC7XwcNahoZioXfCq4Nbz8tvFz6CQrNywwGL9Kp7zP568fAt47Y3Je5YW",
  "key28": "5EV44MgggBafmAQFnpyVbfEazHAexsF4KCjbbGAKdxF94MnWGRKRvFak2GgYfhphPXFGvc2GaMpUxNbtksQSTm2c",
  "key29": "2nhAXYYKftNANtQ6crcU8gVp27iN3CBr3ATygMhZopQFWFBuvKSgWtQfwNVxaJb4XTs9aPhSpXqcrZUXe7MXkZ9F",
  "key30": "2P9bnasgrazhSiyMAJUiNotpTWUr8qMaPYQAZAkrLvs8xrK6ieGwKtH4nNenuxBXnCTBqu4RMvx4foF6juMfPbhR",
  "key31": "5aywJw533H2vEbskGEQ9DRM3gvmSQfjqXny2yC1Ju2bWjwZofRjBRkhn6y1jQ9Gums9FaSJU1j6eiK32c67ZsP4c",
  "key32": "63WNsXNx4QRBNC1ec3VJhvY7cmuMrwvA6ZmCTcpsVAHiGDwQY4kECaw8ghzt3cNdGK48mvPHwpHVvNyC6cpw9QKr",
  "key33": "4cE24dSWds7fEfEHdcc4HLs7TbSzkeedV5xYoofQfKisUsk5ujCK2cASSQW4wNY7a3CsZXCvAtG7MBwW2YrA5s7u",
  "key34": "5G6gCVAPJaxKeoCN6UDErKS7bAeLqkvTS9fBV7pr3TevGn7ZQSTaBWfMD4YpRgHfukAdbEpnoFoRwW3uzVdA8y32",
  "key35": "47gJ81RCtWtjacryjszspYkZ93cw54TG5bz3z2p8UAdvnWwgcxhG3ZEoHTnF5obFVJ3n7S7PxvyunxfPn5FMFf9h",
  "key36": "3Vj1BTKPVp27spWyGnRSihGYrhvaXHgcGnrLYvjpCCkNqGTn7SajqKNAFDRqXqEfMLG8WgG75ydfiXm5rcxAM4RE",
  "key37": "2bzjZoSu9tT6rSe5HpspxRvQ8incZgEUmsHoF6q2xGYz3eMYgP1japSt3k4tzvai8UF2d14ChnxdBtbEBxS69x61",
  "key38": "2VNLJ59VTRdTNBjuzXw1zX5DVhYTPiDCfUUadqZZ9fh4aUGdLFJvohPyxUgZoDxr2VGvcDrL1w1oickWiYZUCmGM",
  "key39": "4LAzx96zYhjqi1aN38eXmQzTX6By19gxb8fTnw2GG7p2CSzLcgW31kPxU7udTtKZHeQ5W9F26dZ1ms453f2GPUzq",
  "key40": "Wt9jenxfuEraKf2vKx6SYPgNCUwHDLyypij6FhhbMckgt87ZyRFnrg6RgMr2yL7vQevhZtbnT4swgND1w2V8o79",
  "key41": "2MTNANEWAy6xcVfypHADLTacYH6pp6AgEFKSBsQJxw6VLP2fVDF59MovdNUiiwJEkiW2V3f1KhN5vUL5ecLemyfH",
  "key42": "39cR8rwXS6peBfnSdH4vcyUXSJt9YzkUtD8b4gWkDBbXyE4THWpLvT7BmEfUPZJgQcxDtNBoDVFJUQrYrX4xf42s",
  "key43": "tZWfkUP7pXgJSAyS3W9RfzRoMs17yUZktfXLUZE8qidoMWmNTLRSLXU6SkxS6Ks2aZtvsTWvGVgsq8sn1YpWZhc",
  "key44": "5iGijoXe1Vche7U25EPebG4MokKS99L4iHkMP8YZCYpZsFQ4SB7mggfVFfD6Yc62Cc66ttp39tcq5qoXyxKeDotu",
  "key45": "39rJs6cijdM1UYk7TeqRuvkYwu39VgGsxwoWkjBHRrHjbYqTDit2D3r6mhjZJniTyUXWToDsYLVEzCfoMaUV3wjb",
  "key46": "3xEv63QC3ZGoma2ubhJjDtgpHpbxBt8rnFfjYYygju2dtqBpGaWu924Vxtcxr4kUKkjVfTXw7WmHs9Bo44rnaVP9"
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
