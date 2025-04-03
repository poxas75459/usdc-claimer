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
    "4X17LgmPQAvm3PBGeE5uUAsbMbNkzzFSD1uL2KDiomhhESvjZJQG1rNuZc1PfuqLxPEsMNQH1jXJueeF3bWvbJDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BxdJQDD12eVkdUn35vazA9r4yPMmRBGrBnCSKM2ipVHCsshitEsRtToV7gQ3xLccNg7qfDuLwbDq7vCyDpysyK8",
  "key1": "629hBHhQvKoorBy4TgFJQkxjBiJTY36gjw9beGpHpiMb2pHWJbzDCDQ4zhtVeUPKWCuBNScxNbp8wvei7yfDxQUV",
  "key2": "6qSEefSNmpZvGhPxp15y9uBgt82Q7tM3b4eo7bm4NFgy75QPa9Jf8zfDnE2xJbbwn2xvzAggNJCAdhHZnofzM1A",
  "key3": "3dzsL1HX4qqdi79jM7AYLgDbkpqwYdHftdhp6FaNFvybmFdquD3CMBBx7aqJKVXbcCPmDaKZBw7WtTr8fyZHy2MG",
  "key4": "5bh6dg9hQkogacG7cxHRyb8LBpoZpntPTQ26KhGLoZaquqW72TgPJ3nk75bWVpDjqUsbqj2FSo3vNVfANqAdBTWd",
  "key5": "rpsJLTBgXqwiCtw3Gjei8JJjXxCXhKVaxsYXcKtqowJZZFg9NiS1Umy5mAyZz3NAmwzn133wDoBQNxxLMhLJED3",
  "key6": "48PxYqcpgzz94uvHLCgWsFk66VdRZvHDRK1wrQTh8ojpiJXrYB52iZwR2J4VohdWJ67KbLMDYpBMRKSrvnf86Q7z",
  "key7": "62mk5KbKevi3LW8GyRGiAUr1bT1TgoswT7UEoBLaCmbiZa1zWVok4eoqumrt81HG7ZoHadiuMLgphaCThk9TQasQ",
  "key8": "2o27TXdN4Avjeuw2bKZpkLTYyuiztcBG4RxJBZS8qxnbdCHENjcbkDmb7fGaZGQVoV3FA3f1vkYzHP5cwRo2nsCm",
  "key9": "4tqBG9KtiWNCHWAKsbbcyXRFMUV5AmcGkCAUwbjn9Wfzbwo7XdkCLa5q4DfArTkHd2wUfwXfBmDkZ8UewAkxz5dQ",
  "key10": "4mYFjFXapREU3nYNZh7TdTcMK6fNSDiYBEFPA561Tmv9r8La35L9UzrwJghvE7mTZoRXhdhDgjfH46ZxEJAMioTR",
  "key11": "3LnFfxoT38vPLz6m2Yox8yJJ5ESfDbDxZ5uwhD4gHWjJFscTZPypDpLK9bEyigXJZNQMu9AuCxGpnJQ28v4hBZD1",
  "key12": "5qEbj2sZwmXPHKKZYnYmSvn9F4Pi18EULFNxCgupLResCbgK6G1qMcVmEoJdQtmzQc7VE4UZX1vt5bHVGQXKxSKx",
  "key13": "3FnGm2bwXjpemtJyLP2oCPXQsiAbDPWnuWBYLKRJyTjSkxpMwAXjoYp7d8Rhzqksb3PNbYLm8LuffGyfPmzMUEwQ",
  "key14": "52RWskJP4Z7okYMmVsd8ZRbwvgrcWXajqHnhReTNuQeRCC4g8js1Zj4PEsWinNq1VQNU822dPtbaEjyiJUN3xABo",
  "key15": "3tqxHiNpVi69cLKoZ2DD28NdoMQiWTqjtnvGBQgVySJQpnzVKxeTGEhAD4XHrfiSWLLN78UDcpWeZMYNwfKFoiXU",
  "key16": "5zABtruTKci374PWWAuWcq9bLKyJ93D5F8qks8NWvVHVx4XDVUagNwytFW3iF6TxT5PjMhw1R3uvNUedDUbLtPQS",
  "key17": "CUA4v5NvBWgpHUiupvG365tpSNMUxHw27Z1GqawHJutjVd4cY233Gv5Y2Wg8Rw7f88P9MMktQXRHagVupWDAS3Y",
  "key18": "3UZnTbWAw2sFV3JfbYMefdZJE7ernZX2gVYiXxWN36eaaGftyBerASbKhzxrCVtSiuJoZJa614ZJsrfSLWvmXzj4",
  "key19": "3RxtmJeR7iREgnhHb4PfXpbyivb27qNmiAvpf9RS3AZDzUg52NcGiJgCDXLzkoWZ9JvtMEJA2fur5bwSs8zedxyL",
  "key20": "4ZDb3D91UDjLkg7eN86w5NQMGcYqmR29zs7NeXDuFPg5EqmXN3U6FEARnTVNBuCWDnn5knJ9iA3i1k9FG4cXdcXT",
  "key21": "LYbhQX11hnxycTethHF162vK8o533KFc8uRnBfNQfmtawD3SJZN6wjZwnuctT4ZHP5YU7chwvND4UWPjQVUFTkP",
  "key22": "5DkH4dLchSHFv3fGGytt8u3mom21oXSTWc6KzFF9KYAMG3x8yaz8TheoACbPARzSRnEacdMVDotGynSqDy171jJF",
  "key23": "5Je6zuLWB9oFCwQ4nbFysSrbxyKjdH7JJk3wMoBSj9SxV5z1b93LAu4fe2Qf2ErbFgrmndDyCS6tZE91xTZ5a4Mr",
  "key24": "4kWfybBX9cZEzHjDDdN3HoLCvuvJ5XtjozSL8jDmft48JngKeHxZwYmCqJebPvpGVSViMs8DpxXjBfJd6nTAPRTn",
  "key25": "5aC1WAoBjHveCcRxiU61mqaXkKgacXy2u9HP7pMnbsGiVJKhnoMmgyGpvswJAJmPt5G6XCAuux2oeB8eLxKwy3rp",
  "key26": "thxW2B9uq83dM25nYxaHse591136jJfrSznxojVfkYGokQpuwTK9YAZbdmHmipfUGXYNSeudxmUoxi7ZGFaqzk6",
  "key27": "221zxsyAvcLBsbBafRpdepU7ehJGiVrqBwnTUGZBL1keXH3ctMWR96JMHrhEGWzNmMN32DMfMrVpjVACq2PqhWrW",
  "key28": "4bvrSJQwvKJQxSppoczuDLU78uZXvsreWtasvFL1mzWhTZ9X4mgHGhzjptRmhQKUpRki3Qdj4ucViugJtaaUnU9o",
  "key29": "WzNwsh6bsNuRgKWXxrkaswnEbhzjxQUiPEhnL6Fz9LtxdUsYeF9TJfRH4mWsP55Krj2Z6BA6TPbZ5Qt3vYTYPUd",
  "key30": "5EEkARYUSD1C68QF6hJiN87uLoxeMBEppcTLer4ycFnphhhk1zRL4hkLxz1yvAqVhiAwpcjUqhQ8xbzQGt6U82hy"
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
