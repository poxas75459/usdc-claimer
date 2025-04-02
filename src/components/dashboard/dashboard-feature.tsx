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
    "5iCHL9PgzH2nJWs3Bz22bg3CBNETVcugNDfXCv1inn6jRnpJaM5xU9Fd8pEThjXgoF6vynzKPUyDaKhSgsYiZPHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cz6XzcJPCtdEAHeZdNPCncYVveMJdzqZHAThGMQfv3SVSbwYVxKLcWLyJxj9FZYuWcHMTBBftzVwpBa9D9fY62k",
  "key1": "1hG54FVmRmTi8f1tUwnQvAu9S7LGtiHBNaocYtbwRZNTX5J3AfRxNqgHJmiiYtb1A97wLW7jK2W8BWPU9cfa8Zx",
  "key2": "2GZxmsXKcWkB4RWWS2aupMAj81AHyBJUjujZghN1WYFYGv1hBxqjfZv3ZVaPxeWegngSUNCyyVM9fsV2mnfVq3hG",
  "key3": "4LUpFp1ZQne2p56ygkARgAxbk1VETnyVdiYz2FY5rfTFFgGTKQwyhpP36kMCN5k8yaiJweFRTxqsoFT3oakR7eKT",
  "key4": "2GsFHi4e9EzCfoCfkNNbF3woY8WG8AocN2EXXqjrDKmPktJkGqBMzb9gzNvKrQXYepKvetm3qsqq5k8E1SgFzfeK",
  "key5": "4AyZcmNkdEzXxNcNQYYrpe2cZzWaUr4xP5TEDJA6rNWqdjL5vEyxb1Re5Ve6SBY5koRHJpq5fnQtdhe8RtK7RBMt",
  "key6": "5Pt1oZR6mqqou2rzqjK8wcB1L5USmDwQjwZdb9RQKVUwnbF9hm3BJrfi8r9xP2dMrgEuo9bSXY6Lv6Fif8sZVVAs",
  "key7": "5gNpewQxcjDRtNqc3rTxuyHkdC94b41Jn9dNerTedVHSunEg4MvSHqkPKekyqHVPQNduGBG7qxNKrxseVcjoYj6n",
  "key8": "5SH94cNyTrdQP6DNjUisC68RzBa1kk1EUn5inNvGS3tXVuxiytGuFuNBRoaHS9XuWQSBzTE5nKjuDSgzhfPQLLXv",
  "key9": "2PN6JEiH5d4ehDPG8eFavsDSQVMNhpuSSQC9iXuJk6tmZXcmD7jbmUuCm33dimvCK6uxCeAmgJe5SH3pAVoM2SVh",
  "key10": "ZsLtW1BGUuiJ3UfAoeod9ACgkjxjdDNx75aR4bWU1fBa5KhTrRs1MshpZDKPCwqq16p7DWsNRvGE2SvKRu5pXY1",
  "key11": "xcRfyUtn5UVYGWJgbj2gSB56nyhQTxZDnLrA3rw23d18QRvNySVjjPZjgcvESntUz9RVQ1VreQK3N4hFdC3hupi",
  "key12": "3Uz4SxwSiAoiACmCddgdewhBiZEqAGEdHkaJLjPtPNur9M4E7MCkvyLRUDrovyUfSpDTiVNmP97MZ7RYtirzVV2y",
  "key13": "2JAezJrjX8ZUbwEp38rZPUHXHNWtDpa8vfzJe3TdUYEdoAGjhz8DeNCzCJy6AEQguYeEQWdmwuaWydAxL3b39owY",
  "key14": "3kX7ELubKv13MUEsRWracz5peDNCVSgo11pcbeJwDdeo5LAK7Hhgs3p2Da8mTsKXoQBZNnyiMH2oovqj1sJuQARM",
  "key15": "35L1HHA9njw1e1fw6bmgyPJ356HKrFTyKhXQFsMtZdGwXUHqvDupnsACmEKgNMh35VYXsYZjAVFABsfGTdkRv5gf",
  "key16": "Pzuza7J9skYNagrJeunpk1LwEyXR3Q94b4XV47AKYFqM7PoZzTZnsRykyHF9sLeAyfovsfSHVrXpNRAnHynfUnq",
  "key17": "2htGHAEJjqLjifJ5CGS4vKC5LoVjik1NC3VEfYDDYfeN3QP6H6oJFAcc5AJzyyunmeBv4eRd3ZtyrBXojvLnrguU",
  "key18": "4Hwrm4B3FmuDkBcrinYL9yGDeScJ1W9qdNfLUCeqViBeUC73dWW4nBxgCzrZY2qBsnFV2dYFzrxf2Dwc3vYwEfh5",
  "key19": "5i4Z4TdrWRfpe3YcFtRQxh9cAnyxiG9MYTRWb53VSLvRxyqB1bSBx7nicuoCTTRsv2WNeTuSd2VNpBXAAkUkzhAp",
  "key20": "2g25W9XhMmd9zsgC5ygda3si3rS4pGALBjp5v5qNgSR8HWJrB1xRU69SVTfc5Uk8jwRcNdWc1MwDnEaVj3Fk9jS2",
  "key21": "YGBx1qLtc85vXqWJCpJP9J9bbTpoKC84pjU8KZrHKTMV67Gv3Y5dceG8HEUZhmLCmAREjopza9K5ukGrxxbY3fj",
  "key22": "2hMydWg9St84p1BoFj4JbhmPuG8JJhGJTiALYBgJRW68U9vfogtCfytPwk3guyRoZTBUsRqPqpP8WdzpRcVKcPM7",
  "key23": "3A1XLS1hXf8sR6S3P8PcYUb4qcHmqW1iAT13LD9gDC9gCWaVgaX3q5UtQ1Rhd4ETbM1KU2u2kaLogr9ERRjDZ2nC",
  "key24": "21jC52S1iqJrFnZvRbm2RSJsropKyCApAHskc9cjibMoKFz1SuwWbkNjgAe5NLv8RYVRLunv1VuACy1VnSGjby6r",
  "key25": "4BMrRa9ySmYS2VWCBV2QC4VEmpU3gvpKPGe6bni1X6TyEyuFYJLxk15jD1TGExGC4P2u5jLvbqJ4poBQNY2QpgzF",
  "key26": "5PoVB6zeqtY5j1nTHmvDd8ytrUYQPQCMUKYKsLS3NfHauC7Qts1pQkGsreze91XhawUbQg3FyijJUUUj78SPou9o",
  "key27": "4DWGcBe77cbsVrFLcTgHfrK6cSem9QVoSYJXKxAWENRf6MSmNhSa5w19FEV8aYdn9CaW5wSUjNg5UyGSkH8MJgJw",
  "key28": "4rD4MZsb755o6pXVYtdnb4NaggWYsDMdRNt9XKXHPS5Sq5J81gZFpPo6EGeHUW9Mr2tmdYfdcWZjYKUWEUa3XtWB",
  "key29": "2q5o3AFgJgf3QhQKosVNc2anJwJZeYJRaZjjsqXNJqEeuCEYa12osCgyzwCC6gThv9pmpc1ZbF62jw1sdPXWhMqT",
  "key30": "3D6ajrkFtaC7zYQqzhDSNRomiiNkL2zwUyGeGA2vXYfcQSqp6nHWvHDC7ZNnsbjfuV7v4WzycrsNuZADm6c8QU44",
  "key31": "2Qf2LZSbEEAkPnWevKx38pCZMjTEuEFkKR4oaFPRddMmxD1tGG63wBLL6r16mLRwd9u2NwwkMmr26NCTnKpMPCaT",
  "key32": "3GfAwTva31mcvqJKnXp6NvWAd8hvttDgzDhpj4kwfdGymdQMjRX8UayfPfyVr5KNkFSrJSg5Pj2tdkMcQz3Pjp42",
  "key33": "27bQVTfzFmMqj7719cWDZUdyLECKS1UPUCxsiAnJhw1wuVsYtoVRQ4F4oky883FCAW9XhxNhBWSHovGq4XEF17gj",
  "key34": "2XBLanm5CxCXGjYRhzzgAkFaT9T4JFUCEuMkGHFXmywLAAzYxTHsf2o1U6yC8pxzMj8rUEubh213evZ9k1ZNm6iG",
  "key35": "5pJJCqnk6m3wnDLxfpDtrejyJQcNbnRq8gNgFGt4JxHcPyzrJXbxy8pNw3MLkMy2aiojEsboRy9GYHykvepAcSwa",
  "key36": "22QBnzfvCeRfGnwEa9s4MKKNKfE33766unkWrxGqM2t2aAQr5hCiJ2VX113gdF3C4QbrLzojV7nHdRuUhpAfUZza",
  "key37": "BWt1L6RP9hgBwwLHq68Ruufo1PVp4hVzU2qATLvqubqkvMhMjScJbcH8pPPy8kV16sYWseor3fmoQsQe88qw3mK",
  "key38": "5Mhkm8S95g3H29VqQygV7XoTc7e5SMbFV3jgG3Gninv54q4QzLVNmEDgsxZwsxXRrtmeue3CajpFumA2ZxgYVNPd",
  "key39": "4V4924X54MQ6gpfGV7y66xcZtGSRGsr9ZyHPEJa5AQ1JoYRhwSu13QE8edbJLHoG3MXTq8yvcq8uwWcxFMquPC1",
  "key40": "4UL3aVrA4Av22LqZ1JNMQAuS48UA1PGdUrPpw8BA3cPpqQe6G5rukUfEab2KLPsZdPYYTAF9LRvqd8XpCT2oxXK7",
  "key41": "4pbwR4pnprwTCRpkQ4HnuJ4wNuZXXVYkbSPZPFDm7SH9A6ReT5XmMKqSRUhb2iNY9jiC4TH6exK1AE3DaTP1TyoS",
  "key42": "2oMDbMfsEjeF25apuHevZPEsxs65h7Ayn5h2VnXRDdBNympvHGnBrs6zTGfntP66ErBiFJaW5h7uScX5VxVZ45Lq",
  "key43": "3QGeuLMnEiyohnkciRd33Aj6iZYmv2bWPkKfq7Kzd3zdgU7yF5fueXBcjyJU2HPs1ezTZn2Kdm6nkhSdBMSJVybY",
  "key44": "4LrAApPb3zFTMS1ww5NeVinexwyjzPt6vVG1LL8TyuWNvn9Qg1VhSzyLPAhmbGC9bKfGFipws6jvPgAw1h7PxBL",
  "key45": "3gReiJNjthzUXfmZuKeZY66v37FtyDMhv4Zmh7x54cQFDMnNhSxWTob3H4toptQMGGYx6zoxUUmMXFbAqiYWcwK7",
  "key46": "64SuCswMmYZrqJANAzZNXvz4DWy7yiJTgWdETPMutJjdrP8hCgvwv6fyYosFS4sSYcXB5bh1VXbADYT7vkYbKfsE",
  "key47": "ezypV2EDRTw2Sd5UcKV9iHgFBTjxcQSrDqaoea4TCttyU34cgVZN7kvEZGpCyByP9q2kv5i3mu8vHdKLL5VSH4h",
  "key48": "4B3uW1he54hepM9DfAaDiFwstz6WmQoabyLkJX9z4MYnzthtnMkQtp1Wb9Ev2C7TUPfKyXrWZyHK2sd6ZTAYb45r",
  "key49": "3Su3CN6ddQY1MrwnbgpqiUobyU3c2CGXpbpudpudsBkkB5JtwuYv3JLtBj4wuWGLo2c6PSNuGJn2yKsZ3Cg7ZtsM"
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
