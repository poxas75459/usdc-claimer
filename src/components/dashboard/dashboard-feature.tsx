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
    "rn9wp1WSe4XBgHUGE3kZCRSLhvXrmVjjLc5TEUmhMy15XVEZvjUQL7Ns8ZUAT7Kgp376HLNJw4aWB2muKQKDab6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W1sU76J5bG9A2ftf1DhkVCppSKSEzc7uDigDi2uVdCBc98VXJf12ySNFZ55GPysgYbzWrJ6YSjXsbeQb15onSZc",
  "key1": "4CNfXyWih7DmTM6FwT34orZWtLvZQLc61kqwLcopk1PazcyBhcgHEfjHnX6MMU7b67ZPtGkdQ2CF41Bo8DsbHjHj",
  "key2": "5UFtvWsL5ydU1PkscqJVtrE82kURVBnTtbmV7PJ6kHjiaiCZtBMSHeZ9cRkYKezWfNY4nXAXKwvci2A3PgrvzYrU",
  "key3": "51ggQ2Tpw7X1TfizftLkyFpadAYJbtwtcnvspxovBQDQ4R5VPkyZ8NqpQrSCrddLiuCrG7ABuQHEahg8s5xq5rS6",
  "key4": "3sqsaA2B8gPTNwhsByqF2krLJWUsenxZSnjAkShBwqdUkhY5c1Bb3yLYLticeuiFokr7tzEcRfDpMoqvyrAfraFp",
  "key5": "4foacBPSSxPBpgp5xhjsgEmP7a3GNX9S4d2GPS1QK9vPMDEw6cHYd5vGqjGDn2XrG5dx8NSUJ5Ma4auN3hqM251z",
  "key6": "2wF5S6pdaiD814KkSKndsPbiXVB7HddszoJ8WfyxhjGk32N5HA7JWzMWQvpA6tYUd6v9KoyGpgXSKJqJQZPQb1GK",
  "key7": "3aBFkQ4TaFmVKbvMUhgnTtQCFeKb3R3KCUrXqoUAmD3jAGxv7PxfbvqVRUmfnHGrDqAEuk4xPpTbph9k5oRDi72F",
  "key8": "2rxzdsFd8fmXDrx1HX3EEYu6Z1QidjrDHeRzgVY9BTbXPt9ZNLUaCnWBb1E7getYsE6Fmo4DbtmejqvcKYcz9NS1",
  "key9": "5bBfCcC8CqZokxfS2xPtoX6Nw2vy9WyQegyx8Q2r5et78CsQ3cVGP49eNH4EGaVb6hJXuQdjLK3hwrDC8GTTSnJt",
  "key10": "3aZFFqcS3ruBT7QTF6or7YikqfZZSWxEG6gL81SN9LMqWvd3BjuuHWwZAHLgKnsXxcFfxjr7hz4Va4rq1U2fSdPZ",
  "key11": "4qX5fFqK2kWSrkDnUafxRaGjhTo3pKkfNMxbKxifmUPRZodN5dXQDRWw1FVGLPfSzR12Cnmy76Pkej9UDphZPpot",
  "key12": "5oUXNW35y3XQw32Wb76GYaMCdzt5gnMRVw1qTwhKqAyaHyiQKewacVz8T892AcKNLgU7wfPTMZ26ahyhui8MwVLV",
  "key13": "2jjYSn27Qj3d2fPcpiNmpgWJCvUSaRFwrgZKUSBNWAfG6RwAmZSaG8yN5awxxbs6jMuKyvL2k5E1ig2T4dXkbTrR",
  "key14": "4tmapAv4U2gkUFoir32jg6gHd25Y91Q1YUFWuHKLsKDk2U5yXLSYZunxMkd7BzZ2tpmco9jHdfTMQF4Norv8owuv",
  "key15": "4Yx7hXnmX3AwfCY3xguhK899kArpSFvYF6vSXccp36pCaWrWMdLxi3bBRBGPwSANhvstcdBsWGz2u6skAjsLWdGf",
  "key16": "2yNZgrWcKsFWvT1bRtBo3N2HepZFP4pHKwY1MC3tFVfXJE4Ek4A3pRjo4qRjvMpceVMbXkM4E2HSCp1QJnRaQcLY",
  "key17": "5FG6ZGRU892nQKz177C7bGt14bYUHEBbaqJqnmTc3R3jEcZ4kRMnG947T189RY7vvWXUXDHjd2KRRgrbQbEFr3x3",
  "key18": "51cUQn8bceefKAz1Gx5oPiWLZFc3NCfN9juxP8WoEDsNSPhc99bhCEM3yiAvzmN4rb56db5oWE4hZAYbQARJjxFa",
  "key19": "2tsYhnAoK4a8pWV1KxGnUFGC2T8VW9v7hke6uMsychHBG46q7chr3u6yc3LAUCCyhgMdcomrdJpZaoZCP8aJV7hF",
  "key20": "5HwYbWrmJKAJqwQY8VQZZN6HK9mYfSu1ZAtdFFT5NDRS8uvMpa5R3s8QFWVy1nbLMkNG1vE6Z2537Xi21EBs5V5F",
  "key21": "21Uo6hcA6cprpfJNb4fFFe5Vvf3MZyXuJ6eDKujeWwWiEhWPLBwa6Sdie431ZK4BwnN2pCjX9fiR9mZYgCg6kwF8",
  "key22": "bzRYZk5nHbKN8hAPAw5qBGcTp1DryKNvtALAtL9TwdaDCQsXt8f7SQ1aduca89bjJAcrGVuj6G1J1pQ3Wt6tJ3p",
  "key23": "5D352L7YRk1t6PMS8HtLsuYfwAwuheSwgifXfojcFTRx5cyNgvMpLuNDYqisbPsr6FUoMjewx9ZMRngX1VL3RRCG",
  "key24": "yFMD87yH5RPjbwMpKsy3v121h87eWgABQa5id2sxPv9dLNxHKGQzhQaKHTKKctWS8Bz3GLaj3LxTuZcc7iPn4vL",
  "key25": "4hPzRajmEwji1H4DPCqN2u8h6E12iP6XBvqd4aiQbeRduLt6BeBcwtUB43DvYAy9mNCwwjT9NJLsNwiLNkEBFSYQ",
  "key26": "4t9yiiwnw1x3AJwy4TFpvpGvEnaV8nZb2nYk5bzZLMpsQ6qD7L8T5sVi4DRxHUK5gAsKXxPmpMwQe8pnuDD2f95N",
  "key27": "4EEESDogXDQ1VbvGDGVM4X9pbz8F7bngsoevzgvPFggna6pUJ2g2EJYwXAQkuALgExDDaXhLYsmNuzAiAJZVhTXi",
  "key28": "4pC1xXykv7af3XeQBN1hCLVs7zrro1Z8kVsJnGvwAkCCadqNnQ1ub7rSQSL3bX4x8toU1LEAfG7HHS6HmuN2mco8",
  "key29": "4TY3n7U6GFoagL6EMoBTS8PePmiKvBf9K7Rzo1dAtCc5bZpfkXmrLZEYh9KSU9yXtoR6p2d5BTxUFbc5Gw1RK4nm",
  "key30": "4w6BuvZuBYBS1Xxv5xjLHJfo7WBHZg2RLFDvzvrkxP6zHfdGBv4AphiQFPtYJ5Y3szSbSVDdhHmYMW1SV1mAg4v9",
  "key31": "4nbx34wsJ2k11XDDcs5CZ9va6TVuJaRdG33wFet8U4MHZXP7oKirMWFZrfaNhccbqwogMso8hyVMxxcdVD7qXjFY",
  "key32": "4dzJk9FB9h6iHUhS7AQg3NApqj4tLP9MGst475tVKsBPsqcTiMsBiorwwTXn1yDBjihFcjWkNJJsM8xSWvrpFYFA",
  "key33": "5kNgEFkWdEHUgg3ffytEK5h9B9mznNgAJezMVmC5f6eLBF29fdMzJsEgcBE5x3r3o5BkE6e1VmPU6WW7jGENKp1P",
  "key34": "3Gjac1MJnQFxKFPEyaR1WFMTNCemrbHNYgCD3E3KeDVeopxJkNRmUq5UXePGZ67HVSYLxogTSDpgXx5WgjbM4NT",
  "key35": "5TVwgwHq8eaUkYrtFVNbv8txvS7y96QS6dzrAMLKWjm4MhvBE3zWT59UdNq9aF5qdpCQH7QNVTXeR4Y6Dvd93bVL",
  "key36": "4GLrGSmqEGbUTCK9uMg6ftmfUS3nt6CMPD8xoHSiXphzSpdD6rWVRpyEgfULWwtD2wzVypvM9X82HrRV9b2PTqKc",
  "key37": "5wThMiRg9QekhF7VLZBRnwsVwmHyELSAn1CHFKPRiytaBJAsHhuuiPd9wpTjjjmC8cjuv8GHpySWAJdeXTCQkbS1",
  "key38": "FCd3VWRy7DmpQF3VcLuMyv6gSdyb9BzoonuzANpVcDjMJeSTxSCdUM9QotKc3jQjqi8dwEyF4niPqwoumYwuSsb",
  "key39": "4g92pdkyuoUdR8gsYkbqJWazqPHw6HuhKyowqUib1Ft51zNxRkbxaWPrHNbP6WUyAJrLGdn6dfBCZ8Uwz2ReVsi1",
  "key40": "2utKCqUsRtKYKem4nTbiSPbLcEP3babkgaQG5hfsdwfURMr45KydRDjpwuQVRG3rvvNQAdrkHUKYSmkd5nEd1Ln6",
  "key41": "ZyXmNDudms6Bwce4idqFxgECX6HmkdLXnBFUeAP6ewKshJqZ4UMC3rmpa9e78cFsXtdSvyu4gur1xhkyUuAdauu",
  "key42": "352ktRzcJceCMrzpzjAXzVkBPEBvW5xGAjT6Y2fe6p4eLYDXWV93nrPrBDXm36MuWCm1CvaDq7QY6Z1YZGur64d1"
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
