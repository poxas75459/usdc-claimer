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
    "5973Y7epNpJzn3VwL1KHcB5Sy4ix6dY3EZ3awcv1DbogaPerp5cv53xvghB8VWA4oFnbPJitLVPxEUay93igquiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjjiuZtNe77xTzNUr2WHQMHQaxUPtzwxnyiK9qcFue11tTjxYVSXabUvAGf7Qbtwd75vmjEqdL2caN7JAm4BQLm",
  "key1": "2rbxrPPGJevcjg6FekyLm9yPaTucww943FCzmBoRKFHhLyEwEuMxyw7aZMRGgLTXSMnhYXVZ8x8GCuvSc1UVUkZb",
  "key2": "5khWhmnXFK8c7o3xnBRryu2rW7UUPLxB3oTTUm9KwjUGPPu2Q3aWerWNQG4fJztQxn6HwGDR6prsNsJs8X2qqVkz",
  "key3": "5HB8EasmQvQAyp8iEwsyWZMCgTFgGZQXQdgccZPX93p6tMeSvhehtzexuUBTUKBycXnKTifUvqNwVqsaajfHBzty",
  "key4": "3uNymB2bpBTwe3NSi27LNrAdZekB7WqHC9ykuDLKWQi48j47tnCSeezgGr7QCVUCwHTmjWQrZemvYktEjmW6yG7U",
  "key5": "mJ17F9zTfk4YSjcL4p9FGJ15ffD4WtZMo8kT1K4JzPZeUatRLamxPikUv2eWi8zQxKfCoN96TFHxsPvQcTuQ1P3",
  "key6": "tkYRSMYT4n2WmzH7TBBfyjpLNtb82kfQmvS67MpcYv6i4fegAPn3gVCmVQDF2W1Ftq3SgmHAQshsnMfXeUJustL",
  "key7": "5hYccgb56ZeD6Y9QNuruwwwagU5SBn5DPi2oVX2D9hSwpW2PD2ueg1Jp9KLCJ2ertTpMBq3xRxzXBFx1k6EvWCAc",
  "key8": "2Y89R1hAvpggDWganjGLcWfuMrDDj8cPynMyMLccuwfjBQ6MjUt5WH3pWmLXCE5Z2yRoeg4aheW6QFctkMX8XTPL",
  "key9": "3ndVvUNLarKvXMNPhqgVLEkfpsfnkTEJffr6p7EPq3GgYMqCBoo67LzfsqktHvu9G4jRbDiJeBmycHNhiaMyBknS",
  "key10": "5LkdUtC9wjDbJEKoPSfzpw1gu8NEj9zn42Fi17RRKJzkiyyQceQqJRzZuo7BX9C1duStAUKjd2MX4FvTaDPZiadY",
  "key11": "3EdxYxVxunvCBffkQNqELvhfvw9qXHnc6aGmpUbyRjCWtvNejio8ByceAAKFr3paNmX46m2qFonRrxE4dgCZtPhY",
  "key12": "4zgZPTxh4mVNbDN9jZNduuAwrpsvg6hF98GBfvX1t1shWNY8aVHejzikw4LtkNmHUrrRCcci7j4JWmhyXFPECaMV",
  "key13": "3oKnYkQmBhaKQHMkwoRK619MpKTdSmDcijX31UJGAHPUSBySDUvqZKBXK9sEPBV43zanxR57hHowt6Rwqd5KhUYc",
  "key14": "2qJx4vRg5W7b1bNWVeqyB3nYkoKTPNNx9SRou89w3z7hoyqUH6p9ZwGaXZvtgy23SMesk8xtaGNVdxYNrJQGJQXt",
  "key15": "414hWZSJv7GnCRgCEcjuGdxrhaxEdbMFAdSnSR1fkSyRSAhvXXWPiK3rEKe6Jy8NABEsRaX55mKJTAzSZoZQ8bF2",
  "key16": "4pVjZE6tn27C1GfAENG39B7iCQAYNEcNKCUhKPYyi8tSuFZ83H9MrEiNRfynHJPDaMhJG4YykapfMyLUEPMfGvUf",
  "key17": "353xCvLw7CbnJdm7enjMLv8TCjTdg1JrwSKLp83pL6GLv1NJ8hkbdrjXia4X4z8ASFK43w7nSa4H5zCDwNErxVEV",
  "key18": "byrRYfAkVcNvCAYMcfg8Maknjk1WLfYKKHWdgZ9LMtYyYxE6bqZXBePYkcQDp2Mfq7hz2VZVfysvGFgV342bC5b",
  "key19": "2cHiouoibbkQV1Z695rfqYzhjzi7uHRH7tdoVy6HihiHx5pAbQ45QHkvLZuhMzWr4p7R7Cs9m7fyvmHKg3UgBo1u",
  "key20": "5bJD2zC4TfunsSTyC2oK3zg4esSNL8kiAXpXuB1FDkycNjCgToyzNxZvpTr57jgHGttkGAHCasYzJzTnQfHjEygH",
  "key21": "5ajhDzhXYeLBtrKwHUN4SjdfeJ8gXVeKaRWyvLKdZsifjCK2FiTsjEHLN3KnHrA9DUCEUkPAFuUnAtyxkTtrfCXQ",
  "key22": "dUGFTsSVymuUqpscr8rDKgaSpGF8ws5zLzo2w4B1nQEbSbLy3NGRxjceVrnamQj3vECiw1cxupzADwVj5XbCbkM",
  "key23": "LgxKVD4Btj1EKg7aAFc6XGp3YLmEy6mmMksUEwHGUUseNosWQiLym94uQL5Dgx6bPMzgfWXuS6TTQi33LndggP5",
  "key24": "2haS8vKgwHoueipTzSMmMBo9aDFGyhTXzVzQ7rPNxAjEUrLgmiadCyPPnpeVZRukV4EtsS5d3X2AK3CeAc4bUdXH",
  "key25": "fe5Kb9rZ4WqxJ8AktAMqCNVcewgDjnWSTn4SUBT6EifKE8kmt3VzE8hezK433yqtFSMsNjKBQ3TFT3PiYUZ3amt",
  "key26": "2wDEg7fonajMEhWTQ9Kakn1XjBBBPPUNmuYSfWZBKkYkrNtqU7DRsbUHuQ8imEVMhk2uZcFpSoDfrr87JL9mqvEK",
  "key27": "29RrSUw7n12yrj1UA7jdDBMFkGgCd83nMNLstevjBd2v1TGXQ4LyFe48vQ3ATmsbPX6uDZDa2GQRrkjXSNQNmucx",
  "key28": "5AoptgFWvHwhpmakmyPAq1G9Y2BwDEJDT4MhxU8V72xU9SDAmvmHFZvcqHMTSesZjxwd5GWWqUa1zRpsgLmYoXtd",
  "key29": "JQgXLLXjkVTHXfBbvrgtwxR3ywHpHdxzSMapq8Y95dZAvko66pJCiKs1fD69GZbV2AZshedtaiTF3R19FJtxec3",
  "key30": "LcVdBrMvGBYnxTLSZDwAVRormoQqRLQWikaFU8cEPudHAF5odwJhaLSH77smvNqSv4WZGJZHh1gRJwqrVSw78oX",
  "key31": "5AwiH8f2xB4JZuEHrEjEpsvf7ixdn4jQzUTXRHVNhmEBWqCABMoXG7JKrgKgRUyJYBTspYcXwPRzZAo7vGsawYZF",
  "key32": "4nBs4Dy1SxEGjoKvkizsKMqEB9suzcnfdPd4r6RGB2AZ6QVxVyV7TdGQUX5e3hQCqghmKGwjJtezZTjt1vEZBgrk",
  "key33": "2WUDPSQL51SPuMN2JEn43WnHddW42DGeaKMnhNm1jETDpFKP2fAn8mXv2nqifYo44YWgcBxH5yKT9wVm4pcA8WjT",
  "key34": "4u3ic3D7C1jMyaGvqJG9ygu9aSJ6tK2bNUAv5YZPrq2417roBvbyLKez5E73onpd6kMUumAiTpNU3DDxEspFXU4G",
  "key35": "34H8njZ68GFn8nDu1jjgAwSfsgrrKFwEmGjRLzWNLDDxJutvJqGUXTs1qdJ6LXdjkePXc3sqM9tprBUWbM2sQg4G",
  "key36": "5AWSvMaGVPG37VarAJFuXX2DYSyXWkgspJowTALE1MsGQbvPs7yyCoBGMjTGaZZrroHnSnvTo7qDob7VX5fM4DkU",
  "key37": "2JjPNYsKbFtKe1G9K1sXgMF1oM22yrQqyPBPP8dJYfnBBprVbePUvGMfbGFmczEUykqHKLa2cTrK7JcYYCZTgMK2",
  "key38": "2npJ3xJNvPxr8HTw4J8N1nd7aocrEQRzsPtTHzKMkHYWqiaUbQ5ifygzn7n6pGDiJRL93tHgZikkiamaHiLrJ93X",
  "key39": "2hQAT8g4TWWAsJmLSALQ5WydcXht9di7SUaba4xfzM8SxRzTWPwiKsMM3jg2sSUbKiwbUCdVRrWG92wzokAhmb1g",
  "key40": "2N22DQhowFEF7UBJht3Scezemne3QXkKy9u2xgCyM4pSTh95mLm6rhfySkgdiRTW6kRWJartRJGn3ipq6B5hW4AT",
  "key41": "TAbFTuRRuFo42tZuP7PgtNebT4iYz7nSsydRVGhNWV56ETFzNFp4vqWGZeZfnomV6ZXm93fLoSzZpBYg95YvWbv",
  "key42": "2Tfi9TMqkyH8iQhhhVPKiKfiENTrb99qhdnpkrSoVSMv2BJB5fTQT2wokfygfrFL66g2m62py9CjswVoAfYoJgxq",
  "key43": "5UVQig25w5sojfenn4RHMepqNkcptg6V2Snr98GsGWUTRfgZiZirttsduNQuKkADFikVSLxWhj8Ydb5FyM4Yprkj",
  "key44": "4atnMdxbXufidTU3Uvnr72zzWTbHKfNg1H3vbsTnMXpTZ66MvGs6dRbfctkXoc4fDwPRFooECNzVVLHepd2763TY",
  "key45": "VAAPV7xLDKgWTEEMpe6tKE36gntigjN6p2KyZfMttYXbGC7zSk9tRyqjXTKk3nhJwpD1nvesz2sGtEvx8PUBMKj",
  "key46": "2p9LEUgXV9vBQpST6LP3R6yFyqG2ny2DuoeBEvrXFTdprvrCirXbqdZve97GMs8S6vfpxr714AJs2aC8kcScKyvt"
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
