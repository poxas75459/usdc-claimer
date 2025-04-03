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
    "2puzo2si5ZSQB3VdN11jzUYCXf8DXxjDUYFcDa6cyT4RzqgMV9CPTrYBfS3b11GQwVnmLtYXj2seQ2e4rgNMXkhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rrp1HWVHUewQvMFmVNwS4RkczmfFpoFXLdU7Df7ppcjRjKZYVVDjJuwQ6ibFgSLSgcmMPnSmXArJDggLNPSqoGH",
  "key1": "5paooEK8quEffzAcaB9YSQwAQ4BVT3jmxTqPANrwuT9AESft8va7ApEyeA1CkvLs1GNZTkfKDK3qFe8XaGC9gLMi",
  "key2": "2oPU6oYhy1hvJnvrwPheDz8qiBLTFEYgkiWxQb2H3kfG3FytGogkhaybfxaRDTWZzCra7xiVjjdHSyRLetuJT7wx",
  "key3": "3LqgRV1gjHg5cDCKpbU4WJ1top4n2P8wgZ8ZyFr3BpQn7yA9YjmRrnQSc7hNaDG8zKdKechbRL9UnPFpC8AKyzt6",
  "key4": "2mWnEpmguFEiPd83dv56GygwAYgZDcgRZREA549fEcKadH7o2DV2Zi5oNRtjmPwr2xAkY9QhkUXZcsk5BkUKfP1A",
  "key5": "4hudaG6GNSgoTWSHbX5tWhcwms33AAzFYowwhxNqqWSoC86HvBg9QSyCPCj8mbooE1PDwpSG4wKdA29UCmaGKFUY",
  "key6": "m6QutUmX5cbLXF6uRVRePRHEmmvsbnS518mWL2nwMaJfrHEAExCeacb34t4xhBpNVojCkwsZ6Ce8YMJC6UAMVam",
  "key7": "5Am5xzQcbiyRYSe7j9PN6Y1KBNKkiSsHZbKMwZ4wEmwWiBF5hybK4p6rEGmaLE38SGWEjDMu5K5JSLN6kPTzFGGY",
  "key8": "4ZX6pDcrP6JQtgMSj9PHqSfMW4FAumMKDMAbzQgDtZQh2A2CAxTTGiFKaJHxy17v3G6XwsS9xVoHzA6PQbhSdkLA",
  "key9": "8JLVa5NaHpUny69yDksqgNuDBBFsKy1BUFrwiiB4FTsUFbT9CfrZzxNz4SiVxTsvAKyG9H8Y5Hg9rUwbQ4BW8mM",
  "key10": "2cWkMjVhCFUuyTKuihJeRpNqPwUQsCjqe74WFpb3R6JB8Tqfkb62hLeXMQPSqPNP9RAxAhiv88b5sMQdXDS7khC5",
  "key11": "3hrpV9y7iVC32VfWqysjVFSVhjN4YeKNUBHgfo1FGdJTfM8iSPNkkU24znEvcoa3zTzUKDpYDLc9UYr3dBSPdPzH",
  "key12": "4o4dskCzBXVN5T7pXkRWvEP55Nu2pf61m8XzcDK8128sEeHQNupzEZVfnLrzEUhZTuaSr6JNHaURC2Zts2GJYtZM",
  "key13": "21kkXiHikSVNcTyUPcrnPkpDPB88GMWdJGqWr96fPQu6dpyUKcJpnJp3Rsoe2V5d9vpzkYipmmhLkw8EE1ddJcA4",
  "key14": "53tgQP9i1WXhMUpirg8AsLV2GiEL5L88TCMN8dPRir6XwYQikKJhfKWhV1Ko8x3LnxqYZiHN8Vsu5NGzhszkxbEN",
  "key15": "54ybAGeVBEPcT6Xe1LgNjGe5ix35zEFrJLbgNun9jh35TEPoSXMaV1NsknFwz4jPECFXdKbdgvPKD1E5FfcPx36e",
  "key16": "4TpXn968qVfPXbfSjTnAg4FNrqCxEWasSPryrmB4gG6gjSTUPFLDpFVUbFnP21HzTfKtSp157pQsPopj1dgesDcm",
  "key17": "2iWoE56TRGkwxn95MqmnDuJESAqAj9nJuF1yvg8NQegjWC5J7iAA2bRPGpSvQMR9vyBcznwcbdsJjuCsB9ybaWZ3",
  "key18": "43DCsFYXGqLsbcdY4Xdee4Jgs5ig29AX4NHXnYRhYhqaSh6tpTjRgJ177qNqzN6fkWRiRLjDuZRxJmJUyfUeydSx",
  "key19": "2Pmzc5ext53gX4uA4azx6oLiqP1fxbZDnGBSqfyxjzowHLx16PnhaXXWFHNKp7qU6zvzQqm8ABoPfiVvgzras1Xi",
  "key20": "2aNRhCQ17QnxDKB4wARAaiY157wByTqFyAVcYDBzMqmX2ZNHjXcPZhbgSsH1MVzyc5fuwa1n8t9FLPhW8y4wn4aX",
  "key21": "6CnPF2NVcmJ66zCVBL7XD3bwm7Azhv9dEuqLa9pzaXoz6j7EbSLMq1dYSRjU3SN6JP7BDRpmoiaMrYR2pmD3xi3",
  "key22": "5n6stAn3kfeAbAALRxWcwLbgsVBEj1kqxzE5abxHJwezpVwMHDG7y7AFECs8YiBfyNagFCftZ4b6rX7bdGTCzpy6",
  "key23": "5G4BoT29gRpjBfwAk2Cs633WqPFonGsC6FHDGDP88QtpH6Ns2h6rDFpXohJnZQFdwKquXV2k8VZhTWUiXLwRH8jC",
  "key24": "5p6RNHDhPM2k4mf8mT4ZpCvrhEiHBtqPLQEb5crgj9u9PdbCunjfg1KNAuUBY3CFpcxUTyd1X226Sg2GzaD6atWP",
  "key25": "2aXYn4yMqcM3U4enLLxnt1ZJySLa9M245KFCHbMX7XxqcpcXCH35s31Wp3tPzhhF15EZyNTJGhkQNNGdjX3dLAgG",
  "key26": "53WCZZMZECA3gFXjyPHY4J2wPhKYrpRJD7VRF8z3dcrPV7usqzdeD3emiuPNMfajckRJiv92jhQ9dNeywJMGcJJs",
  "key27": "3je6JfiVNDKVcZT64wDTcbdrdRzVucu8pGkPnfQJcmiqMsHTdtayGRuUHjqbSMzCFAeq1EuvL871toZbSis3Pa31",
  "key28": "4KzNEmQyqE3DbVS4LLNhsbxwN2LdiS9fzyHtudKhdZ3QdrthiHWVruK7RjGpWRDg2Z9uNg4pt6PHFbXTXZ5Pcczp",
  "key29": "35ybgUU7hwj551wFPGjxYkGWSvsRK5UrGLG1BeF617CXAthdyG1X6abGriW2cLh5LuKmzDqyLCLvXZdJcATQzdPq",
  "key30": "3BmAveywvAjwkteCBH1zGmYHENajCqAoTkC7yx5pVz3A3Yr2PtBJx1stWeRSPHFf69Nkkru3Avhma2p3mJvHRZA2",
  "key31": "4Qy21kidMeXQQR35J8Wf5hytDLcChQXvnCZFZ3CHetBHBt5Lg8tjHqAjNcxcy4w7gXwtQEErg8BEPhrvzHMW3r3M",
  "key32": "jL2i55bXfhVRnr2Ahi5yMfmdgTi2PjEPGBqfaLPhkaQRoM2b4nX9M5Dxrf6pzUe4n6jLT1rpApHX9WN4yW7XqXU",
  "key33": "3wbg7a4bF6MxXT28448iSPhBxXrjzQXtHooXsa6WFZBcLaezyf6CNhJJHHjuYLCupGdkiyWJi1cEuFikctiWjeNz",
  "key34": "555Ysqq8TGWiMsV6a4qY37ZU1jzTGttHagLHz4rkTHYKNWUZNddccsg6PsmyhFZU5ikw8Wp3nR5VUWeGZsTEuTMn",
  "key35": "5wbgFNJR894SznwE1V29cqVXLKLKcCwYTycD54WuMyYzokDTiFQbWN737EBHxaDbngVmsJcSNeqeqCe6YTX2uvsV",
  "key36": "iwnLmzfefCP82W4n3DF4KkYDWghtm49nQ41vYRg7sMRdF3e2H6RZJRzeLvs7VsNkmmRTjiFkMmxWkGX1aKpRtt9",
  "key37": "5uciCHnNPLyoVBdsRk5rNWSpRhT5AKRUShGA64ngxARo2HawQdz5wpdgm7XjTnjsxWKFcG8Cj7fdJyfCZnMhsVi2"
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
