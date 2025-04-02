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
    "3VZdwWJwya5C426CHyqzCeC811CLSxRTdQJV1D8TGSHt8ed6B9vwPq5BxsydcQLe458SLkK5DpBU5138oyQ5JUKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PuzomsRxNEVLBg7f7NWfchTrMfkRxFc4SA67WtfZzXruoEpAJdkGqwmgBEQEWHM5we6FsVLkx6n2sP1hc8b4PP7",
  "key1": "5awM3x1bCTJM79XKtDx2qWNvKLtgBr4fSioE3kC6zXs8sveQnD1CA6bM7bFJVxbnyppmhJCggB5xCP8yDvbnFeJT",
  "key2": "2NeWdSA79e55GLmfDKt6gxX1pk274Meg68mto4eVzQCJv8L58pyRWvcR3w4vxtgLHoLuE6druniFh77ErWMp6nbn",
  "key3": "3wb2ifthYezDjWCjWqTB14eAUsDEvRhFXsqH2QdgoPqBZgU888y5P9YFxqJmuLB9v4PGmyp8PUxtdKC1npo3QPsr",
  "key4": "eYzrRR6SAf7BYhu3devjAJy81tHxyHwpWoZpbBpsZ6JWbFSeCTUaE1zc9i9Me21XX683HWk8yg3HXRmpnUiqir6",
  "key5": "2juvxCErkx8LDbTrTKyk5zTiU441wJvXemoLi8zWUYS4npSkddrEBgbMSD1yJx37hHq2souE1F4m6xfai6EucXwp",
  "key6": "49wpFqnhkznGZ6Vf2BFYQ5CmHuWjXo1xPRYYjsdSp8A6jSmCoFkhGB8cakp5vduddmNm2FZEnoPf8758BuM2ZnEc",
  "key7": "z7DYWzsEZa4F4cjdjczSHMLAJaDWbcAF2aSdTfduXqey7fwdF41MooeUWGsepvConqZRechsJrowsS7YKT7WMt4",
  "key8": "4PnwYxBg7UFUr9wMUue5UV2yKUymFkRCVsbPY5qzSTWA59JdjdJesr1s9cZ4BLSmFzqFCfh2QV7SPNbEkyRG338a",
  "key9": "59bGqKJv6mBSEp3Mi2QMNGXen2f2Uv42QNq43Fd8c8bbb4reED6wreo4gjhffAPKKSPkB2YDLtRFeFZvSSQzxptk",
  "key10": "4fSFpnzpmx4cvrivQzWLcMemFVBHhVEk4v56AX8ZoR6WxR72QK9ueCW7nQBHuzi4cqT3MscDY1gT7SpjF5DoRVvV",
  "key11": "4aDs8oD8CEvh88Z6Jvod6JN8uHMbQNnJgNS8a9mBRoUnLRmSRWE1hfbhiSifcqMbECJz8Rk7J3V6MEiRqQnCkybm",
  "key12": "4tpkmvHsGaGyS3X8XaKNvogHZhVcU9ynxbGTadT6CG1gUtnVLYW27yCTSS691spkaGFcru4hb11TGkkrBRSm9b9g",
  "key13": "4xyw3yeCTB8gY8J4jmWzb1YtupkqoBHYUTNiGor1zbhHNCx875YsT7ykubaxeufshz2mrrpwPAh5UE1gCxBDCjpw",
  "key14": "4QovhLZ6g4kyYHsnnvDmR2GxHKJmtmRUbDs2HnAEyLAMsbxgBeRHYYhLdBdFK9A49AUMPC5T8s9g8fRcVgSahyQj",
  "key15": "3PG4SQZr3bofnHmLku38ctre3waGeXqo5Pkdds3yaJ6P989dxyhPnSSUfn4okKfSTPpRg1kMKCVHjHL45vo2N84D",
  "key16": "5BjPw1dggpLzW5r9HxeyCcfXccj2DpZWJhDs6htQQZAYPa1VyqHrDv2zpq3CbnMxF43a5fNqxGQDeSExpL7T88Xu",
  "key17": "4AVqUfxmmnhGn6us5ees9ZXwf4nUVykFQYNzhPLvdtY5B6iwf8p7rwp8Kjd3zQBZig8aigy6U9akJMhLgNdGyqqj",
  "key18": "nPkyzvTKLqeNowpFRz2cqQ5YTVDQEk5LNbMWNRdXWWAtuEBsEtpwn4CvCE3fXnyKx4tbCaTPZ8CJzqkUvWy2mkv",
  "key19": "2xSosU9uDqSou8h8EWWMNdbU7St3gztoTr77QD3eLoqCGHP2SHcj6xUfgpcUZkU6TDJnNssvksvPaH6XLBMngos4",
  "key20": "46ndyHBb3uufthKwupQeYtjYUL5gpDFXuX4LAJC1LA96BNWtwDtNCrVSqXjkMxragp8MPp63FVuRiS2xXi6wJvVJ",
  "key21": "71LjnNJhAB5ckzF5Ey4R6SF9mZ4pp4Bgw9L3e6UqUTnq4rbuLc1UX6aCz41fRakJNGYJfGkgdg3WEfLTJT2a5F4",
  "key22": "5R3qyEHNgc9rhL6ZMN57vsd4c3nrVebqc4FyLL4BHsQvDstnuApmAAq8YRy5ukibVyr9B8564oSSbcEyCFpJZn6F",
  "key23": "3KWMHDM8cmvzCzsgN9rZvrZ5tCSKFp6vWJNwJ7oR5qg47iugZJaH1e2ZUA1NCKM2LZj1tsGsNcLiGW3CDRqGNidh",
  "key24": "5kfe7fvB8E5gB4XwTYSrf2BBSwgLRtqGdpGT6LCnHgfYn4LW2NvmNSdCFGonasveiaWoG7PGD3yQ6pcVRPWrvW86",
  "key25": "5BTFBCKrt3t2VsasXTvUDVsCF3ZrKW2r8gDSGSUeZAfQLrmZLgQDqL6h1NRv89ze1MmyeRuPYYqda2esfSWoaQSX",
  "key26": "2HjQBFbUf4W3QGcYG58jpqPhc9KBLP61jPvyfZvV65D3FTjG83ttAtE97PHXYtheKmmDXqoiffqZ96CreqwDvcd7",
  "key27": "3GdYxsQ2qTRqSuxGfCnWzPxY4Q257MqTcSP252JuM357qQjNf983gwbydfXoHc4nfdEP9gy18ayvHCxD5NuFUAX3",
  "key28": "4AfCHYGXsTCJz65Ww2Fq5d64Q1nnJXcs1aRrLYDwALoDgJknAecBcyVEZjgMCkf2CmyFh72CURDPfAfipKacNLpj",
  "key29": "99kxikgzaTbMvV9HAtynNJ9ajsQkE9E3TSYaJ8r6NpNdHMkF3oSVxBeG2XeLSWpeA77ZXWFLueGWwHHLTJDWoNs",
  "key30": "5WneqgJ8VPuURWdQk4tm6UigZck51W6RA7vBqmnMSXiV6iczZYuMsjNSpRY9dSpxnRrCSxrDiZ888JrVhGh58WR",
  "key31": "4pMdB927eBVxGJkffe66N1xBLtzZgZoc3DpvXzb3bsbpNaDiHQHxxLXTxY5TQ3rSEXSpxNbLGVK1KyYPDY79Wcwe",
  "key32": "4A2T4Wsx4Qi9EaP7H8m9xepeBddqW6QSi6PPffbrVVrsSsv25jXKXrA1YR1EJeTqvgJ3oWeFvWSjLG7UksNfpW51",
  "key33": "CEUTLEEsHXmt6iW9ye8WjTUeneK4WsauwK3ahhBTRh5JnLr2avUpaiJMJmL2zMWWxhfq25rauMziPmHCQdT2mW8",
  "key34": "5icV67XFrGqyhNB1uQj1KCsghxcircUbKVzQC2mjBzAEyUgY9QYEpcngJk8VCH6FfixLUPvtHhtii5wZCxscd8Ub",
  "key35": "39dSDJybXHPZJdsaMFSAqcjciWkGPoiY5mK8bQA8eJjNc3KUVctiBurJSUAWUzWE6ZyCJKbFqBYRR3ezY25oAUS6",
  "key36": "4SQKq8GdXibyufGpSe4oECEZZdGkSt4V3jpSvEq9KFq36cAu1nr2VQTktY5DaZS2wVxqGgwk2cHhtVfkYsgtt6yj"
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
