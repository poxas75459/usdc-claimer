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
    "WbmLifaJ2H7EWU6dhqjYmicsiq3CHwxA6N4YaJbX5HtK9RMTnmXcHSme9SpAhqJ5Fx91NLHfLSJXeRQNYNuLPjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PrhCVgvghBcyDCmncvw1gRh1sNsbRFwCYHXDrEwYHibFeqJMv57f4vkQNYCPzkwgnivVvECxWUmM4zi4kcWyhTF",
  "key1": "3nXs8DZ2jjqQF8WDyQCNzPeB1wkGevMLsm9RBAFfNWtoVPqyvPBEBhfCipu9SPYdV3QGTJub9xqWdFaSiiN612rE",
  "key2": "3NHMWEAn5PDqreDvVkiKBhhYQGekjvEsLoqg8AWBzwZXXZnpztNJDTxmqxu4JdbsrwQgzuaDYBzkKxHpY8kWDWu",
  "key3": "4iVkCgvUHJcRnVSjZGoSxqPpDcqCf7eGfbKkWK5gPM9TbSyyaoAx28j62Lt4W4ubxhM5z97btDJLDUmxDvEoQDhK",
  "key4": "5coDsZefesoQSb8sw9Zm3kQU6ZrjNSaikKMoX4DHotCr7Sro7tzugyYowBm7XAnpYkResdM2BPSzUKdmDh67pF9y",
  "key5": "2rHFU9NbH2mxhWS8cBF1r1sHyPHjUrhiqXvyc4vceSvZzWMyYDpAmWW2bEFTuUFdMNgsQDgsAGLSXgjLcQJK35zN",
  "key6": "2yqkpLMqfhPka66m84Wy1T7Mbq3ZxKgbGRSKdecab6WaNSpLyGse9wwzZoDEPADpMo6YLWXYQAPLG9yGdcRVuniP",
  "key7": "5DDUsfQbgaxRjsaRMcQDKA87TvWPDYDLEfeSLSBquu1uf8ugKSubjizV9ZmZD4RXJfedcGcPEudWhAx5dKSwkATN",
  "key8": "2YdQmJDg1y5QnEqNpiR8qAjSYkMCdP5Zom4GgAbb5JALM2mbZGiELY9hVSdZgxNWHwPK5tUGu9gDa7M2CmNabdzS",
  "key9": "2ks4oVk2J4PpLueCwyByzE1FyEs8saedyCWXceHDxUX55bnf438aQT5VDH4GFnpBqc948BYh2NDYkeF9wmTtRDjH",
  "key10": "KYoakvpx8ZLur1G21jM7MiSPNtEFCK2FmGUqgnvRHpNumMzCHoKGcmVSzaJ9KET4Zw4NfQwkxD5wJknRipofUUE",
  "key11": "5KdLGux4wYdg5CTLs5bUWBkMseEZRNyCy7cv6cUq2WCJ8jMVzXZaNdnvX3bhFmYnBCg5x7RPk8BGu6eCcLvVuydH",
  "key12": "5iZpx7GhffXMm1efXe1j26Zptzw1VaGtM9zaB4CBMx4r2viGf7yFjxk6Q1r9zXhKcPxPGiqtD1HjxTGJTiza6mW6",
  "key13": "3Wsjg4HG3vm49Hzhuv7TWk38aCRHfBfZXU2ucPavKwzCogVKSkkHon5zwWpVtHWTSzVm7J9rGZfeVr222GFqgtWR",
  "key14": "5zKdq3hNU4h48B8mNbAgm1CuAmsxrCnzCfP3ZygBkjeYLHnv4SdT2zwwLSJ1Bjt2ZZcHjqK4HvAT8LcCYUSZsubL",
  "key15": "4b3C3i96Rr9AtKgq7yN336T4jFxR6odKZLJzys8oPoJc9VtLybiKiusSnFN32eCsL3iD5VccAkKW1qje6EFnQnRN",
  "key16": "2u9bKZ5yRVfTyDoei1HRHEugHX3tsydSUVsfbQB345C5EN57j8Ts9iPSyNQmBrsQauVJ5NFDne8p8bfBuPgozG8s",
  "key17": "3GNd57fDNApqBNWft9whyUfRKxHQbPLAxc7XceuTVF4bmSC4tkRBt1C12v9NTnubvaW5VibgriTitftxGEzgzEPD",
  "key18": "2iTndx6jXuXuKcGKWavo1Hk2UYUknvBL5xo5H6xPXZ19BHc74UgSwnenVsY7r933ELJxmF3jjCu8W8iVoph2544t",
  "key19": "5AK9eBUoePU8VqoGf7vDdTcKmodVw1oDGL13G62tEgkPqi1r2KPvxaXbktwZ6hXaw64D9kcFkuah9R1HrruJXcR7",
  "key20": "4Bi4hocFLLsQVgTGvSb5DF1RhNtGjpoPjspTXkb4cLeKgWfHam76MLmsksAYJCuq5Vqti2J7ZRR3yN7awP7SBJNi",
  "key21": "1vLiaUXYkgTA4Dr4eVPGwFnUQM1CMcZPevtqUDhPt37Y6exE6spqQsNStD23tzwpLcWKxyiYcWQax3jvnxYBhgd",
  "key22": "B21Xt2zs5xCTJzuFwP9fzVa7yUsoyKcZFTsTNxZRgqdtRyMRJaGYZuBS9gG63a999fHfdNJTD3cfZRfbU1irFuE",
  "key23": "iGuP7D6Tgf7NDdryd41fNduWE6NFcG5mtD2QfMzWf3dmQexznD2jRAuRu2kvwhpC682URx48qscbrHWx3sZVZ1M",
  "key24": "n7WVn9qC9Qjozjw9QHqEvHGKrTvam9NMU6UPoatS9KYwchqyJccXX1FBkJ7EKrsjVwek3mPTRWFA7KRqG2rKqzP",
  "key25": "3vLP3HVDMNP9ZcengMxcAGL4VGji5NuR21BMD6yQqyrEPwyXm7gKT4rxPyDQEvqofpnwYSS83bafsUNGg9YqAzzr",
  "key26": "3V2zYQV6MpLcyT9h6SweYMUNrdgrv9tcgLAn8j9zmxqxf3qzNAVZL8WdhHS1drmhJkaGirwXTM9Z7WiZqqDcQbfD",
  "key27": "32FziCLiYtRLxKwBmZUWJhsMQ2yuSC9D1MoiNY9xbH3Hc8jZ85iQ1SjogKFpChT1W2LJxJKnvSbPAGVZG1g9oKB2",
  "key28": "T43PkHkmCKghj7HenemfpRfo3HLZi5RAya1Pdyw5gRKL2MYeQecsPdX6UHosXMWvSRUNMKDPoLsEPNtrRFbp6CR",
  "key29": "2pwgrhWkt1U3y2nQRQkGiLxfE5ZKE1asUnokPvwWaA9jXVyL3SqsomAdMXP2SnAwGLfsjg5xdKoaE8ojaKJR6zHa",
  "key30": "4eHx6eAReVG8Qnvzy37cBbkj3SeUVthRonvaND8UxhKBYZPe5n86fktN6CQX6ghfyoKJhEfMLnmbix9o2AwjtKtf"
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
