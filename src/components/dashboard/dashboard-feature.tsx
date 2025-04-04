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
    "XhCV5hBLTL1tm26RG44a78NWX9NJtLF4t6ruTAC2VcdxG9mmv2Xvh2nEr7rWaLqyBDL9XQM47Xs62sAi3kqxiSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uz6jEsndXkegSLEvcbPc2iKLhBNSzjU6t2eNnLegz92Qx4Np3NHK2iGAVGzTjJwvW5CjAK3XQyeaWCGp5qxV7P3",
  "key1": "2PLjnhBzmzAsRBptMRy6rKU5CggPtAoC3oBv95j4bHpbcD4kHG17s28Ro58cv9woDjeiGfZvyrtsFnvankJy5jVQ",
  "key2": "32XuPdnEEiyAHVqbvo4DSSBhGwTfUZFpygsFmSTi4PNk7XaTyukHwknnici5b46ryaojadMvZmbrWFb1ra5HMGYP",
  "key3": "2iCKrSFxzvg4NziuNhqAkkUTVMNo5oY4uGd3DkANkiQTkYCrCRCoqC9dKTxGZkZF2HzxGe6RVZxRQhrLNoXRTwrA",
  "key4": "2rzkoePfFagDzHiSN9Wo2PdRFY778vsRhShDpPdRT2S7wWiy8fHdQywmVXmvp7oMzdReDxmDUaWVsNewpNJJ9xrw",
  "key5": "2PtueuhiZwoooUQGjWMBWdipuBYDuDuWyuLH99uatD8N7or1HZX23ACa2frDiKDLJp2q15kj6MkR9JrwYszcDJZq",
  "key6": "3y3EDuDfbQDrUvMF2mfd9DcKrikZe2uLKDVRTZM93zVjug2wL9sXYE4Nq5zFQpFAurabspLCSJdxT8HgvY7Sj1xi",
  "key7": "eAa3v63HbpTmhBZoRjCUndy8p1tRdZHMexVRyJS8E3AdCDqzyh18YzKoUhzD83LumWdTPzKdYEbiBWhygFtWbEN",
  "key8": "2stAKjnHa3MeX3iPHzhFagMeQUMAXpzzdtipCezyMsRaRAkwu8RvfxVxGzu9HY9d9TSRcYofDfiggjDMXMfdidss",
  "key9": "2tgKZFwjLA37i5sztx7R4EnvzcPtHC44p6m9SgCBqiG5fwDs25RxqMg4KHEfpgnt8AMixAryH9r3L2QHvuY4kdk7",
  "key10": "gabSJVZhQyfdtPsdwH14a2PXEBmLhSrE9y5pFpgnFyN8QjrXM1ZcRcZLy7dMMZzwq1a5vj7N49mWqWPr1PG6GyZ",
  "key11": "5Ek2E1kpkUsDKSnY2bhZuRrBfiySC5rJJwiUkkVj8QT1LNxshxhZBaktJUhL6US5XLfv9y7eDSUVArQZpnn6TQDm",
  "key12": "3vk6uxxCkuPpgmRsuv7eYxErhXW9c3iensagpCQ3Y5ZoxM3KtiPctuBpa1FC3UizjEidsJphcmHd2aRxqKwu5Q5w",
  "key13": "t9Yf1Y9EMqFvehAMGHyz8aJy4ZxE5168aaWrJMpW2hw77tegBZgQFHCD4F9BkrwH1EBk4WYeZ8UbJJHnT91TQcn",
  "key14": "E9Mw5h6pkw9vWfCMSSHvHYbe551sEQb4CPURtKDQsAFxCG1A8NBneVtRyXcZZv4pE8sF4ARgSzcpvkoLuMMEtUa",
  "key15": "51TTNnXzRxW5EHbbzbqf9wGXS2fMDDpn4YSArZR6Mzk12Ljh4EuGGCxdUQHymfwtp12jBtB2RiVkznYok2aroTs9",
  "key16": "NmWmope5ds12kABattzBi8eJbs8iQV1WJkbjy2mVJCgWXd9xG7jRbk5cFAFNLByVzsLbzjgxzZZyo8dFEu8WKHe",
  "key17": "2ng1n8FyufCfzdRq4zGCvR4M4T4zHSJMsTZuaw8QrGDMuvkdaLgL6pwi4xBL4bdWybrQEkTHnkyBic532G7GQ3Gw",
  "key18": "CH6Yut7wokQyaGnAmpoupLzex5upWVJwjtogEMWmFXDdB1a4EbBUbwpRx2MPwEGCSgwCzKuaKqDvuDUQqUbBjRB",
  "key19": "3h9cWxG6ULqro8d7zjVTCpRDgSg6CCZ11N9VzLwoiu19z84z6uMcDjdysMzfFxN4PRV97rdGFJ5b5vRDJeufHNPA",
  "key20": "53SGqZWLkm8VnHew5x5NghuL3uk7iY2nAfH1kKHNjXriMYKwMFVEY2fkrPLHu4v78STvsaoroCgxmJtethUyHhcN",
  "key21": "3wwTmQDbRJcaSkgaxnbiJHL7oT2nSTZCp75wh9iF3UJGaYkZXLNb6PAXnHGhFHqpiMja15DPR9KcDCnj95ATUPwk",
  "key22": "65JA8qEt6U4uDeu4vAQXDHVhTxbdCfuaMtLqDeYNZ66WYbhdnmfkY8RZMfsH8ywarqgSZcC5bTv1Mra7SxgmKRVW",
  "key23": "5PByQuAYxRfcLPuRybHwtuGDYued29YuFNqco4zBBYgSr3Tu8qNihPsFCEyCk5mhvGqT3Mq4wmZYjbC8Y415VcTP",
  "key24": "4kQpwMA9tit45s78NAgy4ZMXtZUiyBuENWYVQ4w33ECtAZYEAcAU6Pizdn3Ahy6e2BJq4tK2vBwteUHU5TC6v6p",
  "key25": "3JoGZeUAx6tqacyZwK27twMD8SQ6DCUApDwwRwZp9vVCqNY3ZSjCHR5aBr2BTVoKCnh7cP9tvESLRay2HqzEK5rh",
  "key26": "xRhpcryxuRqGGsMWd35MtZdVWkG6AZxT8Ap3vAURePvZ79zGGafe3YKZbpGAM11npPQYyDKweeZNxMsp3HgRfmY",
  "key27": "2sX9sy7e8WZu57jPutwEtNQHGzn4YY9RJzDJ5zpk5PBTpBqqb1QqdHxJuUABd1JxwLyHaLDaQ4y6MidHT5vAd2mG",
  "key28": "y8DTPGVsA2bQTwVGcodMV7nAuPUPA8DxNvnxa9MemH6YcFteWxMQ3YwdmNc2xgXf5AX4syampK9BHHssMxXCwR6",
  "key29": "3iFcAR4pFswHNaFqxjszJUPteD2YrVhx8rdFpnBF9fU8Zx8Nett2iMJMXNYsZcMtQWnuvb81ELZFuQ459Bj3cXya",
  "key30": "5S1z4mb9rnLXsMfFSQevPHUYYSe3f25d2H48vpCaryFPXKH8VUtXffJtbj3cgaKzUrEU9iAVzecAGpu8BLwzA2t7",
  "key31": "5AtVQTKGjZswjNPg6GRo8ezbT8vSCbveb9Q96o6ua22i9Cnb5ZqVLKTo96ykpPLFSpw2xixD6th7KrTdPzKGcCDZ",
  "key32": "3i6ZN8YbE9kET5UuuTT2xEZ8tJK5tiSys9zr25iwfWY3wnLP6mNsKxUcjgckPnM6R3SYXKTpAs1TDp8Wwr6bRsCQ",
  "key33": "2oFkq3mCYeVvXGdcstxjMedAbgWsHyAPfF977w7WB5Wz52CadDVQACv2QcXZtQuGzBb5ENYUbyAQt77TuugH7Pix",
  "key34": "4UJQ8hZpCFeEX43jKy27HcX2PvP7hup1Qz4apMVhQdgnGC3Vj1D7kSX8BQikRt3yeL33CaZ3ahaTNphf1SHcUNDc",
  "key35": "3QEaDQ2X4LfeG5AjGbr9VtzttghSLPqRxdprmFJqswotjoky7sjFoViApve211nmLpmj3CCStKoMjUeUYQNbJNwm"
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
