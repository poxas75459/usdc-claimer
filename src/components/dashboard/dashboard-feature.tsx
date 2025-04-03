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
    "4FzdwaVuqRX7Zv7aWkWmFkosSb72DYxCzEvjAVggy1f9TSM8kFTkM5JeSRVBDiShdKhqM2RgwNoPJXijqSBQiAPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sgfM63TLBMA8tqpovqRPW6sWEpQ746thonpJ7GVCtfioHnEf3M9QSQqLnCxBwSuxr1gB6T72fi3gx1gvSCANsJD",
  "key1": "5Mm84Jmhi6xPUiF8ChEAauGhErn67BDsNH3sPAtD6vbf1oNgNaS47UFdetZw21nb4K5cgTAsvfN9xUdtB4FSemET",
  "key2": "422bMe39nJ7Gik3oFrruzPVywgZLBpTrdAhF2kTv4NVVRky6aYv1Yj44WjWntQZwHvqoqFR3f5BMZTCUju3hwCzK",
  "key3": "iLDRfrn9H7Ki5ufy3n6R3na8x4BxXtDiHnqHHRfCjqSCRBS8bWPxBaMgJUQ5eQu32nR8DFyVmu1rZD73TzeRBF4",
  "key4": "4Yn14hJZkPBfYnmMy3gkvCgXsEKzMyQ5F5Vngu9GEucvsVfF7J5TTYawPeq9BhAhP4JBzpgunPe1ePvkybTB7SHR",
  "key5": "3TrqM12DyVXtFfgTaKN9tPcQdDYT9te2MCEdTcetf5pVt6g6aWctgsrPdNUF2A8GPGWjTrm2uB6zJnNBFab1xPAV",
  "key6": "3XyLBPBKFShf51wLEggjbeNbvukFRQg5F3ezG92PKfjHfP24RCJdUi1tdgpXKTACHf2xphKaxTqd53NmZJUaTLXe",
  "key7": "UXaSex5Afn8GbwHayFbsqU2ACZUbZVdNpnkErzbA6MQY1q6LznK2XJQyQbGm2kWiQVDsCzrfRX8yRS8U2ZXQoNX",
  "key8": "2ffVmLq57DgxUVQSTyxMK2bs2beSKfW2GRxCrk9JmwbGqKL2Z6KVXNXg4tNegm73PEyhFEyDjA5WNuohNM7e3HNw",
  "key9": "5LTrKwrPHnL66k26FpS8fXTbYzkfdopyf267UiKuTTsizfMbKNgwshHBWsnhnkPcP7KuQTjnkZFp2WZXhipDXjoR",
  "key10": "3NTy2CXegZLDrMAkDk8p3XYi8vvqY2MJ3krD5YnhjAUTqz4XRKGLtR96L9ov9Yj2QEkDRosfKCB7eyjaogs2TGQc",
  "key11": "41kxGDLC2AnirBAdVoihC3APpPrC8XxmHDTRDFdkjAFNUBhTLgjCPJ6GPJx9FyfNhqqFWdJgyKTxTcTeyFNLcwPC",
  "key12": "3bWrsfmy9Z3nicDuwaDk4wXb32qmS33XLhFcfEFg6tXM91mGkwqYWKU1TgkeUHkMdzXxB957Tq1GRwKmJeyUCycr",
  "key13": "oqw8YoM1g8EyPVtwZPENLgoPbhhwX22thrG62qMfnVo7GgD9uuWg3WLxgW5tB9urcJ3M7T8g3mPjoepStKby5ye",
  "key14": "52WskMXrkyh4Sn7aUY762nq5CaUJwuC6Nkg3wNdRDHULdw3daV3FmBKxp1a21RSw1RHBZF4WcTUTixxUGHbYPRdq",
  "key15": "SjEiT2EXTKVv4Z2kS3GqJbxyse4Xfx7x56PW8KrwrS4DuKhyh4hVmBFucfBwew6VCX48PR2HwjSX1Uu24GL4RmD",
  "key16": "4UjyhnWuZSRNv2fGu19Lr8akncB6hgCUbH498ybXF2V9UD74sEHEicYNGWrpw8GmrbS1R4EZ3eqZFAyr6HAEcAxG",
  "key17": "44GS3DHyFSu9wf9PXEtmG9B4YGjZhkAQRqA8ho1J1yCCpaafWGaTmLfx9GGNJuPdNKrC2ZWnvUtmTqFkGwt9Um51",
  "key18": "3wbiFPMNeRGVT7XvfFPNFVjbrC4ABqF3Yhf6bCeNnXdvPnsKpQNeYm4CfNdL2JBWfPifRbNbnBmzyoxGgFEtXwZi",
  "key19": "3aEqwdSZj5Tt55SMrpA3gYd5dKjTnMA5egE5x7NFKVu9k1myyzHGVhX5pEDHm8nG2uzwEqp4Nxsajb2LTD4vjip9",
  "key20": "5BiN6JYjNDGDMKDmETSJNG5f1R7mpmZfKbiJDWEAJKaxVt4DncXpmyCeDHLm6Ezi4wBvXejsDtnRrBwn1FG4GWNJ",
  "key21": "3P2Si1HsN19Pj7KCC6t7YdTKLqsc2K98p1hqqYD1CmDUBVGk9qwegmC3oiuMoszUfYYziogud82EG3BzzarfyUrY",
  "key22": "2Lpd2sAF7iGFiNZW782qnVCCX4M4v2qdbMEGKimgxac7Zbo2tNEB7Xj7XkLJuEbt6wtRLBan1tWxaw4LgYCqhaKv",
  "key23": "8xcKg5MXZk9iKZCRNfSwYdJmG6kR92DgwjWA3PC5vRkhJiLBCp4hwvnUGnmUA98pKjDitAy8ChRz7rZX9vKmRrH",
  "key24": "BPSTromWrtpGkYyh54mz3bQep82Jyca2UsWDd8Z23t4u7yiqR5AApJbBU9WDUM8TkvuoLkQEiPWfBaJVD3PyEdn",
  "key25": "3EaYjSLSbswxC3RCpCNEehTdJmDokdfKdiLpuymN6MGJNoJTPAYudY8jc6PLf1VeaX7iVikStXoYEeswPSVGb3AJ",
  "key26": "5ALmb2yuA9pMVtMbg81mfh4yiQNtQNPFbCn5csGwtSnQqhwjRx9qJFQwJ5JBYPPeMT3ug7ydxEw4HVYFx83hosaK",
  "key27": "4YdbRj8uKEQaZP32xPUYsNJc9x6nsSqdPAJMwRTCqFSQw2aLxe5B2ABSYQvYzkqrxhJeV6fAwY6hFyQyezAPKafU",
  "key28": "47mXYWU3qHKe2QA9SorLRfWcvPKtzE5q2dtJ7Zs96B97EMABcceRbrqmBofnWbuGWvUTMziQScMPGD4koao9to67",
  "key29": "jgPtEhuxP4HHF5tjxnECL56EZeghsdeVqVF4Y1Rn7CDatYWKQVZxpPVU5bihqkk16ZFiyEsU2D9rE5qmcKsdbLP",
  "key30": "xapp3YnwSgvJ1RgNNHYDynZhud4joqGeUx4A2qsUySVCZD54miw3vNiJ4eiRWTbXXeL7YRvWdkPrVJN3aMW2kPj",
  "key31": "Ui7sK77tLtLqdF2U6y6zNdTgUQSvhUvEMHavyn2Hexf9zBdSfZCrupCsWehbh7usYyPFzNtEtmV9ZRwoBBM9rDX",
  "key32": "2USUPZJ7AJZjLmbTggwPjgjz8sdD8dpXkAA3TCPpGWq6uGg92KM72uUWUKPiBFNzrHyH9uvVPinoHsMBamHp7MVe",
  "key33": "2aHsW17euj7B2pjYPdVL8WTcKvtpTVNnRFLoGoASU8FG25SaMBjdZU8dr6QfNAUGfmB6QvzBq51afaKth5EXPNhC",
  "key34": "5pKvXQHedMKuLTTMgYHc1MuFnh7TELkcfXq8CLNm2LBQvbpofu4tNESQetAEmMr3x7fEtpP5fVmDsD8QMRpWftoL",
  "key35": "5AkupaqiQYUJUB29NeyUmuVb1RAHpcUaAtrCBodpuMV6WY3GGAZ5Wn9seE1t5FbsjRibM5XAUgA6naKHzSZCSD1o"
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
