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
    "2AuhW3nZ9D55Q5Fqujm6gXEEGR4SXCptv6nQkAahmovzKCK7M1J9w3idh68BBr3tzjkQYad5fCMfW2jwtjhfxaKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PGCfNKQQX9gV95iqFuDLLuQBYVfUBYrVYwKKD9pNhUg7x4i33q9TbH6VX386nqGp7H5Awvv82zUzujDLYq9TAbr",
  "key1": "4DbxtUhGBY4rypnGai2x3DbEfZaQasYeQCk6qViNksTqYDmYT3GeFEcEVnmmkbbQzNwN2YtZxmAyA11r5Pn4DFJS",
  "key2": "2tSu6SBDFEysFF2EAJTFucqsN6VixPkKsQvqyot2LzpaYkhCVHbqz8RZjrUaBPyZSUa6w1SJpenU2sf53v31a7wt",
  "key3": "35CdPSw3GNb4fmZ8GNPDytd5gH1fjGsPU6maGSF1CEnYZ7eZzfMzMgsasN8dqyqp3mcZW5tYab2mN2zuGMRD52gY",
  "key4": "4Qx6fs5K8RuaUjMRMoCbcqt73C34LGeQkTWxACmC38XXmyCBP7vUgyqhpiRGjQxX3eNWAPa8DuuDxMM8vffaN18q",
  "key5": "SoAhy58eG7gtq8KtX9qRb3DLEVSnT1z8xiBY7Z5CLNr7wVvkb9uWufgkCJKqKZ7DhjaVz96xNwpDH7tjRAC1tRi",
  "key6": "3bzPZmSAgW5Ezmn1ZVQz3uE1n98Py9sDDqLq7tANC6Trse2Retu52AZHuZ5i9qXBcBUZwmqSdji2vR6Ht4QRZii3",
  "key7": "33vswsMNNmfxenAqbN3gN6wBwor7yxkVwPXENwAqsMP4pKkWUxb9QoQG3NDiLgFzDE7UxvECSSfQZkwfxFb3dbR7",
  "key8": "5aEya4TxiCWfUuYBvg6EEdJnQnMMwui6n2Mzxv8BxPQe7SVHc8voDEaEE6emDyzjYuh3YyLosHwN9wgFRJwmvxyY",
  "key9": "4gEChfFJpsXc65RPsUgjM7MRTewMQrRebWtBfaHRRxQKUQ8rATMqKFTW4mN1tiRWmaaFTBt8f8AEXKFG6Yv5Bwq4",
  "key10": "3ENQmqwqe5Kd7oiT8ivAywzjRdhKWpPuHLr2DckHQwnHoboUrnAKCjdqBhaT5gCJrCKaETHzYPb94gEHRNwdDtWp",
  "key11": "3d3xmiXC2pgMwHNN5DEgqmRSKCt2BFDiVcGNaK8uMBFizFbUTX3C1JEKDdwJxvbGDdFqy8U47CVjDk4wgjghWgqj",
  "key12": "4oBj6asTd2XXQbXS645ezVBzWCnAtuzoCRArdvzE1CSLgoEJ88buFU6a25tsEWArUre17JHLk9BMo9qsoy4N1Evr",
  "key13": "4Uq9LiXKoDqgoUssLDGXwszXoCxvhPSbEuV3BvTgbXGD4fNFQNYhQe2oxSL8NdLYAQgZbnj6ytauQkkGK1L7kEVm",
  "key14": "4cXftutcADyvzMP7MbSVEb7NebcrmPiagnDuUPn8VzLztNku99CjxpHaH1JQqdNTCFDPZqezukmg4WokW8coTqjx",
  "key15": "2qksejHPsLU2NQL7WCAGYHyt4sCSffVk1E5Vktt8JBzWg54Zm7UE4ZqbTDSPV3azeS3goXRG7EN3zAG6uSQ9UEBs",
  "key16": "5vTZNcVWrn1vLvVLan7wpLMvCFXgTu978YfFKqewNpmXgDZuaL9BmrLi58tiQ24HbLeKvqeuyh8K1eCzxxLzC7Ux",
  "key17": "4Dt821RnYXcvprheBNZUBMrLF98sizZx3NwzNBbfw5W8ZpAi2yeKAtGJFACMUKZ6HLs285KnkaASNMi56derWxYk",
  "key18": "44q2qxGa3Cx7SFDBvCNX6ojZvsrs8BPfreAria4tEkFS7tKd9cqFNN65oK81KZs8QTRdsxaEnYwY1h7xGKycBGVb",
  "key19": "348XhfFrkYLYTsdLcTqaFbcr648HT6pAJJDUfLzgXjJCFXqPeDQFsAYBhqHedyGfAhtD3QHZF6E4UizrAiUDTkTC",
  "key20": "59HRTKgqqmCHeDvBYCrkbP9qSikCwmuFtxY3XWGHzENaSPzKnRbadayy7PZqGFickVGZLHRSzbMnMbNCQv9Nt43k",
  "key21": "2R6UDgGiZF9gM2rNN5bCyZKsbDpvgKUcek8t7JRCCrB83qErspy4YwNSXy9gLNVd5EUozgGEF7nU31Yi8V4z1pU3",
  "key22": "3isCkoP5RjpfzKVRmEgaxMdh4YaqGK7fytYosPdLEJEpk6BUAqP1nSANWGcV9SrFxoo9AUkgZygchQRcuGXuL5qV",
  "key23": "2W56HN7iU8EU5DkaYAs4vuhcnVQ1Tr3a4yaxLiTVJpeDcDrxDqkaDMYUnFP2ApGNGZUBTVgTrBU2kdLQQXm2Np3K",
  "key24": "5hb6eUugA352KanT3py5sKRpAxoYbdLW2eBrbQSv4tHD59my8jzXwq1Gh1zkSjvSPcb6g8KsvDHJy1R3B6ZESYms",
  "key25": "Rkqf4syVaVStdABcaA8Mx6UvdUPyb91EzHrjCL7SP4zaJKKGCfH2T8CqD9heLXHVcdWDjVCQuj1nL1iprsGuAz1",
  "key26": "2AsKkqy4pP5er8wgRqERCBfUywLC4RTvnyX9kyKTZh35j7tvo7LjES9ju56xvGQUAdNva5h8qJC2s4xWbUMGLrGQ",
  "key27": "5uM2BZCFPXiBbw1ggr5qR2vmuVzBWDgKxQn74yBu7rrz3E2syBXaB5xwAgEHxJRZoCbfLoHP7CcrG7RShyijXcbq",
  "key28": "HWqVFRqAZfbbYKAF8KcceNbnXTbsW37xpmTx5Dy5dmPnUysmL4yv3VWVgMsEDqisxVa6yZHF9b8y1TAKvoSY2zZ",
  "key29": "5jwRarBea786ZsxfwxQXLyJo61hACNEH6cPK5UjzsJsf16cVgcuZQHzvj4rLBJaeoLmTfrz2PD7hakod6Kn2z4tq",
  "key30": "5YQR2gYruXTQKhB1HDM7EdK8wxrHD1u9UFS7fWJYAaNwZCNVRPV3s8jdtWuu5nPaNcKHjXhTGuyzByr7Q2nfehEr",
  "key31": "3iN8zQy2iKiw5U2x6f2PPhCaYEwtd4RodmAicSNBkURrcV7szJGi17j74briSuijeHaqmsaSUkh4XkArBrQuBD2o",
  "key32": "3d31g6BhEeK1Kt3yTgPPmHgP5NAXB16cpHMrynNkgFVau1NekvPmgatEwJd9gq5bBcHwHtZk3AxfuggFMMmaTTJw",
  "key33": "4ByQjwiRJH7Y4n6RkPYHRbQyf5fyCU2S31J7axTrLh4n7cirMUR7fo2KgncUPyE9fn2gkTWfTBR8M9eemyMPNFoT",
  "key34": "2EUrbtR1dMT5QpFkd6xSH9pH76i8ypgPZVZMrM6wgV2SuUc3Bwq3yemy8ZVqG7QZotqTnwXaZBZ67FDfwt3MtDqh",
  "key35": "3T3Bkyo5regzeCXUG6UESVgPRZdC4z7rumn5n9xJhid5a378HqMT6xYY4zEmh8hD3Uaceqx1rXM5CPQvLLXsKzEm",
  "key36": "JyGypRQjPute3HUL1pwwrHxYQTBuGsjkG6C4rdgNUT3WepionaXMEf7o8G1bQ3cjXtMoVSnyKf6VwDank2JWSzB",
  "key37": "23HfCjkSDS4gJb8ppBytf2J9jRhTV6rq8QExqqVbmJFBHmFrQemKG3enKsziXczzHN4nHh8pjM2nMzoUDc287DCR",
  "key38": "3Tv8Nw3WZDY7moeKHsMF3SXJPBSZ51WMAW6cEdvzELAqCCbDEmULE95AxG6TTvXvwSYHoQ8F8sUR7mp7nbZBSfPk"
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
