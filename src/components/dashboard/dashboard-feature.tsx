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
    "5HvDmB9QrTvWjB7wZCZx9DbKQDtDecU6cNYhawRPzZWofgYuv6GhtKn4Ct1AHR2g17q3vQ1H6gja7ftfim9EincN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fRvtKRFnBCZqRjzwcWd7Ppr7yZPHKEiBy3XYL2csLbLBhFmRRVayj4TsEwurPDqG5gVt687QvWcSCDoHQg2U6KE",
  "key1": "2NsfsxsEXTrihtu6edcrUeKWaTnpRmMGRKFh7AvucCkZUkiQiewHTJovmRxQ77ixLeXiXA5D9AVzoccYaYTxYhXV",
  "key2": "5qEMP7KcnaUbv34ZnXUTkbFEt1vfxMPxqBVsBnrngjFkfT1maXGjLwzMKviFbYizU726Uwaj1KECBnrGYp5GzqmN",
  "key3": "5bnVSJFfoHH9Mawma7oNZNLTWzFNAN78YKaKG54RoU8an7BL4LEBcYewFJdXWYpX2RVYkkbfYLuWpm6AoEDetR7J",
  "key4": "o3CwHKFwBAnTwFmvJFpQ86Q9CSBnEBbp2rYutdmQtUWKCiki99WajzNigfyo4hGEM7xXo2A59e2D8TUpbWFm91v",
  "key5": "Pk5YQX8GfvujwRo96tbPB9Gxdn9NWHdu88ZZoLei9o1GbwuAYFaVDsBNucqik8du29zLfFtMRaQnyvNGbVQFGij",
  "key6": "5tyJVqXL9AKBLupZpKLSFjfMBtCG1atqNM7K2WTRBtXb7ZUKXnTfzCSURSaEYfp7awb5FmVudP3e54PSJMPX9atF",
  "key7": "fXNT6GnWYL3zYcBmcnbfeiAoyTfUtDJ8eBy2SBY8VK82DCBvJrrE3UWznXDRDsSgGxdRKDxEK8SR3DFumB1T8aT",
  "key8": "4Zz7cvGbMbUqezwBihrSCBqkwF254R2rGBDQ829D6jdqsJUqb54UVqcDy6cE5o3PtDTB2QhRaxUS9QkmbLYXFuLG",
  "key9": "4S4doGMisLtyvyDdCjnXKs4RVqHG7giipuvDJart8YNW8jKT7FyXHzvjw6z8kJ9VXxWrwT1HoRcF7fyKTLsFn8zK",
  "key10": "5mVs6mKQNch6KgLZQbB2ufyv5ZVMuAwNyQUtcQF2cnxcax7oMi7xe2b4nsnQGQUneYkgELS6GtMAoi9dyzveDQJP",
  "key11": "5g8UBHJMvhrp46yLQKCEJVgpFoTs6hm8hz9ePYNkfi3o3MJmjbU6W4xSzgzKzXvok1iQ5J2cNB8QeFMFsp1WQrCV",
  "key12": "UuaPBUf3CvwtKGibTMvgk14mcHvTBFTKZtTLzF25wtZsQxW6i9HPkeN13MCxDp7C2uDvWscL7js7k2eWcZf3GKN",
  "key13": "rjXb57g8XsZ43ePkMzJHoKsjxC7onRSraAJvQdd3WtHoxq88YBYuqKuTGPGGFrgPtZWGdhjUXoKtmEDdKoz3NV6",
  "key14": "5wDF3z4TwiZCNjPxH6kdXyTQFxstuyfEYpbue87meBrxL2xxHjjDE8AK8RUtyzftr3ZxbP23NsNdqVtvmf1ZTQvo",
  "key15": "HXmHAdnDBpiL3hZWVZGSzc6P17b7BSshP1W43vw1kWnd5Zz4zgW8SaDUAU8gdY4XxsXhWywSLNUvdX17PgGsHcE",
  "key16": "2Nqszojnd3cpGZFRBnYytSf4QQPHxqLTFj5JdttLrVDEqDXmTqAg1g4nHS6VZtpvbsbsd6SJT425qaLP7XT3cK57",
  "key17": "gGsXU67YMjegwDE9x5Jk9cRMLm4A7LVoZVFErvVJa2CdZuQQARtXEpbxTKstbULZYtv8QFpbqZ3xZR5VpyQbQVU",
  "key18": "5edQmALTRV1YQbZdYJpoprtxpnFTxVZMGxcjEyNA5mj2FzAXCsiP31btFWiqaWypUE9rVCAXAVnzBChfnqZbay1P",
  "key19": "28wwbuBmcqezF9D81bb6ippcwyzXVBXJksvBdpuJvX7o5mnm5k94kYFZT8d43sFk41Xs1BFEDVx4RmZyBfQHPwTc",
  "key20": "2Jg4MEitCkHA6W5sbTQnGZr78jRy7boQexJJvbxr7yHrZrUd5HCMjzj6JXEiddt8xaXenmUDcaRwSR2uAg7d9rA3",
  "key21": "3R1jirszmtb7w5EYtLe55dikoifHc5PreuABrehZ2MuQA1BLqTu96f9enffo5KYfPBq49C5nonaMr2E8krs2GMDP",
  "key22": "5p8YC1KaY9p5nQ46SV2dNeiQMLDD6BX4XhXum84LDsML8sayyz4CNtCBGeWEg4fkfGv2e6dqPpwiXGcBeoCgdLW6",
  "key23": "aLdCd4GT3Y6xCdzoYfHiNkZvMDJQNyatxNnJoTD5ARU6S4oF9GJZZehoEiPd8ZfAB319uN5EqKY2KYFNy7mezuV",
  "key24": "3FTjGnnUPkrUkkg4j7d37kguJQjtvDNaLT6QDEK4cLtaP2ctns5umgN958AvCxTkpAHnDPYGWNCHJgwLPmxZT8kw",
  "key25": "2fCUZokurKB1Vv3P5vUVNZHGkHcP9dnHAmMntGvQPx9HXBfmFdXwg9xkkybqpo8RjgndifCi36U9NfWEsK5Zq9Cv",
  "key26": "2Jethesypost1VLp5Cb9MgPmUT2SDbigGmY2N6nxgApZjXE3GhkxQ4DFWYn6V2cSCdr4zTXdmpecNsJbSrkfESXi",
  "key27": "23gogDt1HEUV4mTho7jkkHSagkVfRQGjSqcHh891sNFSSKkWt35KpLxbovwsP5b2st1LJvzSqk3o296pvABBo4Ra",
  "key28": "4CpEdbxCerCGC45FyPZtWvq8VUjMB7hRC6JvdmFDJtmTXfGNuPjara8UuJWzVmXTxSUhbxz3jTCuJZETbc6U1dbD",
  "key29": "4NrqyfE1pmaqpth9Ug79UhaiC7cHQynfywR1YxAkpiNSNdo5n4GsxUzbVsPhjDM2J6n2e1TqjqpUHwEZudeWe4um",
  "key30": "2qiCndRcKrpgykhUBvuhKsPh3wRRpoEb1dHMCMLWzJXygdkde8pTCJ47dkBVZQxnbKB687ALZN9m6xNBtvpg7fM8",
  "key31": "5ME8rtiynxPkXKxgbcrxw4pxAuTp1hWw2mnoytbTrhiNwBztRyfPqB3Yvs8BMDViisLxZqKMPa2ehFivz5HUnKne",
  "key32": "33cPgBUtX7WBu6nPzyj6kBxXN4E4GYvw7YR9QzUdUhqsMTbJg4xRdaVkDc9JTV1uo16j7v78k3doWc5nGsAx64hr",
  "key33": "5nA9ZhD9aSSRa3tsqhUkfm4NmBHSbZkR2QH7LNVbjcyWr6YcBAjNAnzFtMzJ6z1JFUHPDL8DKa2LT97z3Mybjjcz",
  "key34": "53kctP7KsNHmARAsrYfKTfx3UXrakgmt51K3yULLyEWTfjJq3ujXkjWc2RsTat3Jrvtm8ED3bEpgpWhW4ffppcxh",
  "key35": "3zzC4tD3MXnYQdaDAEZZGxME7J9dKg9ppTzzCWoZfcsVwPVJgtQdfKEJXfSrZXcHXvFKrKDu2qh7fx8z9pmaoV7r",
  "key36": "3y8W8KqF9WsfxdJigVGMxdW8CLMTYjTyrqUxgiHGXh4Zp9Nhx5T5uixsUubNBQvJqwt3wSTwm9vfipSmUeUgtM1m",
  "key37": "5ZsQ5CLx41a2bYjGGJZkKre9VH3VuHxEDFdPgemAJcd5JDecdTj5JwHxzDQtBDgBSWeE7yZTKYBkHYH93N3u58sq",
  "key38": "tXB9AppyB3FAUNe2mADKZq3X5XxepcmCpm9ArESbe62pj8opC31fEbhWMo8tRXGM9fkibeWKPSfSSGcCiNsnEwY",
  "key39": "2o3WsHBCdyDPTrL87sktSLwxiWmfyQYZYdnDbeAv8ZcmkhFgUbubkMx9zKUEyY7SRTies2Nohg8Ex26QjSnooUtc"
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
