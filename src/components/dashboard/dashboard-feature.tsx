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
    "41egmXrk62FrpaGriZvqLZax3gM7pXCuhkrjpeRv7pngT1EcMzDWitXFCbH66RaqiTmZMogDQaBYyZpPUpBhCWhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qLmyqukpSx1VWbZErVxNd3Qqx4KayVJrMBHrEne1KqohbACE3byrwx6nntzx2Yzydx5L5XTwcYScVoyALqSTo6m",
  "key1": "671RBenP5ywofYfpVb9un9Rr8kc2QsMNdqVdHtf4H5LMoGrxq65J3HL8x4rhHHeaW8d1zKhLzziyLnUx4GuYTVZu",
  "key2": "2U7E6U4CsHoJFXeAuVrJ8eKQBKo8Rd3FGADCYjK8oDWLbbnczjF3YPRp6uLREsfKizWzb9sW5qhqxtvBZjnoVEXN",
  "key3": "t5w74WmaGni5zc1vbYZpaYYMtMNz95WJcw8Q1E77mS6WUEV4ETj6AE62UfS21wWKi1ds7pZB4rLick8ojE9xj56",
  "key4": "3hDdUoZ7asit6JzgWwxXJXguYEuD3eEYigFJLAd8pzMoJhojtyHFzWVPJdxNQmNF8HG2MY9vweBesZFUAKJLbksV",
  "key5": "4aQn86pMknNFc2kh6f8cKbmTCEVgbkk6nyx95vP6ET5cjAuxiNuUMpfEf2ZqK9i8R3yfrwhK29JwdVRVoTDPbJgh",
  "key6": "5f2YJekUpz1JxkgQFfnpkUeaMRbbz5su8Bi9bLwC3Bju9pYPMTygvFtYMAtC5zjSHvHVHD9oVsybd2BpYtTrgZ8M",
  "key7": "2JFDWXjF6zpioThNzArNPE8wgT2YMh9o3eHFTQvRKRhc5rNuJzDAJYAsZG5wi2JDuuLtuy218PLnCwviWjsAXFNE",
  "key8": "23Vtq6yzdmJdUzFPPdWW3dzES5bMBDLrdRfbjpYuS8kB3kj4P55X3oubTXJhaqGfZQGe7gFkhjEswRFHjNBc95SD",
  "key9": "5zVBfXdE1T7J8e7brnHDMTXxp1nbYVDzifFQHE4v72197z8ZmsxQjWqy5udkFGBqDFnui42nWeY3SLUuU6ncZs7Y",
  "key10": "yjUFZahCVREFTsdhJHowmwRDf25VVfrWdAnXGApGcF2uFcPFW1Ps9fTgchjkvqpQXsSu5sHS7ZtdUJnxRtLyhnJ",
  "key11": "WYkAQMBkkZdc2DXfjtCh55jpXKxaPBjsShwQHYSfcV8hx7PSZy1wmxAu71etghkG6kKJNpZggPocTAE7rrfe56s",
  "key12": "2FxDmmcLTbnnYYdQD3LMjsxjpEneeAUGPsJeEhiMisTtCvcQYqYKGRfzoidZ1oS4TQPjgQEFbiogwf9cQnwK7o1W",
  "key13": "3P3tyUTdHcaAK8Vq4fUBucpx2kR6qqGehtPUxBjeAn2xP2vS8T38qXf7B89oJ8Hre9AvuC7oAzcWwgjZyYe3bCWJ",
  "key14": "4vFswmLbuLNb8Q65T4sZM818Tk3yebtDwNUpcQ6jiEAMBeY9aqfsvDrmTUmp9hveJQgznALGJjLnWxtcVW9ntd8n",
  "key15": "2VQLFqzQzBm8BJBDdUY6uZXgf3KHaShUeN542WqZcxw5nAiwmSXPYKm1tAC6s5zC7SLq7zfQMdRA13z4DgGoAw62",
  "key16": "4oYBFufhTrH7cgs5J9abwAsPPvAt2t4TPyQifjSsDtHYUfBbAUh3zkqT4XqitNAMjgyV9x7oNfpM7vWtCMhR6zQD",
  "key17": "2DpCVLYjBwJDzg2KTS9nK7Epv5LmGEE3carXQq6bvVaxHag8vsw4aPdr1UN3P8bKnhousYGCYpciMLbkTkNJSCby",
  "key18": "25FzQ4UVnNLzhdSMpTPHuDw2trPhzcdWnWduj21MTSBAnm9i15iAZwAq5BWHqgjd3VLB4dtoMvaPXReufcK3Zw72",
  "key19": "3FvX1y16oJpHUHk2QqTv8PPCJFNJgySQMFqRY5RQJafDboQ5hWF6VyunWjx1Et4YvEypCnQLLEA6HLg94j6FwZnj",
  "key20": "5f6kkqKvwUVDm5mB4roUEAU9WRxqTFxGGVnWHQdw79kCfnwYAhBU99APmg1fgo7bN7jrPVGEs9tR44oeXpzpXdzB",
  "key21": "2AUazR492FHXXSoQYDr25KyWGkgWP3UMbVSvv2GoM6b8w7b38mrHCwxUCdcyM8rZvHACjtDAEMWNUcMmXGv4RWto",
  "key22": "2Kqc7pfimeRaYR5R72zZKqsBWFofWQs69QcHzj5xhTqrUZUDnyPnS4tEp7vaXtQbszXMBUuBcDKALrYmapcdrdW8",
  "key23": "2riEHmQPvuahnaJdiJsVGD48V4W4AvwRSZWeebuY4Bn3zjhmyFvLk6wtWCJG5hwVVSGGFPSPM7Rh2xWUKUTJad9J",
  "key24": "4aPikVr2SgE43KLJW4y26Pyaa9WTgGqxTKZUwdY4DUz5XRYQdZ8X6t5ktDsLn4QKsVobftX8soENoFSM4uXA4aZJ",
  "key25": "5wSomAhvkDdzHTSueuT2HzJCsEBE5U4euifHewaYNvLwyRKKV4DHPuMHvd9fLTxoCwRV9dcJgmCLZAXsh4qCyJEJ",
  "key26": "2D2we8qYnbLq7AuRKrkk6urzrqDSXiyhKin8LAEyhtu5NniAxG5JhhLvVKpqDAPArUQHbKU5Vgtn9sfnzdEsg9Gu",
  "key27": "5V7Pm3318SkEG98WY9qcPCGtJQ8nnzjWcAw6mJugrhiozUm1SSp6ySbju9e2CxFkUB5sQDveeQgXpmxdTYAYBoHT",
  "key28": "3edBrGvoMtJ41Rr6roEYGsDfPhucvQHUiwPhMoV6h5NicgkxSA5BZ5qy1JAudJTsyp5RKuh4HRqVpRuu2PMs5twb",
  "key29": "473LzgSK3YWJvRaqfAr1MD8fLThznGFa8gTn31GdWEn2SSVqCnxczKHwe3u8kndb9hNPsXJykCkq3KiyMcsKnfzh",
  "key30": "aQLtd7ZYYq4YKQcBjj4nggBRUjB4RTKjGc6zPzfbjVhvxGPq5sEHfxYS1m7dWmPxcDwsayrVRqWWnfBv4aiBJjT",
  "key31": "3jZ7h7PUeMC4VPN9CHNaMXqGmqm314iuup1tdygDeJUJpaZiraKwpTrdoRhg4wKXskV8h7pm6o26J69vtGAiBxC7",
  "key32": "3hR4h8nffkvUM1ZarE1MP9otrNQk8g3ZNoBQvimzHv4evVbs9pzzu99JtMZHvsmQnLYno5pTc6tdz2QESVfqeDCT",
  "key33": "4xC7qU9mKV1VtQwn8o287PE6wuy7zY1wFYfeg13xcNyyu2Hbd7KnprmLX9Z752R4WjDpwTmnFkyVkar96SsujhBF",
  "key34": "2bW1J2DMxN9XgVPezgX3YNGJ91n3VYrvioB64HbrEscEBW1TEpUGk8UL8cRStcWpeA11ke2Tz3kadTZUVVXeYKq2",
  "key35": "3YM4vtAC96dxMWwtboGiepak84zQeyqBQGPKiYxYyZdwVTZZPD1tYBJKT4WnrXKuso1AT3TbH6Qr9UwRXCD4Nk6Y",
  "key36": "2amTRyMFZM7AefXvsxf6EyyW1BindJvKUYiJx84iruhC7nRJienzgSZmDL7eptWkcLaMm1ijL5wHowWANnihF86w",
  "key37": "3LG2EkYeGMtJPA4pxYQcpjK8tAwMMJTQtL6yQX9Mi3ER5P5EQWjAVxto4sd1FpfTXTqSLWytQnQzqmbt2S1BDwMU",
  "key38": "2LryG19czEmgTqMFm93WLWFbtMm8RoUqzxdGz8WtBziT1p1q9k7vYEjK4XWPbBXPinpPpwdjguRbG4xxej1QdpYR",
  "key39": "5o9pGNVA62kccWcXjcLWkg81qN7QX2eES8mKfjXMdF94p8qT5MjZKTndAGGnvXjkUs4Czfqp9pLk2pWdGd5pDkoW",
  "key40": "3n7JADyPGF5eUJpxkQAMjni1PvePxBYxfwmp2SxQQ1ELpWnM1Ty383tuWbMt7pJ4uZQTKZ87nMqg3U8hvKL1N4N9",
  "key41": "5BFT5Jd8BJ648rKZzLtU6AGWjNbaSMfk3pG46sFySaAcLRahaCaMws1yZMLtv8yu9Rd4h2hUDWciMi35bpbCCdD7",
  "key42": "zQyeRDP9v44j2H3dYUbehbqxTYo7DoGJQ3fkdgBRQcAL8cScMciixje6pRAGydmeEfV2DsgYbGbUv9R1enqqTj5",
  "key43": "5quHoV3wFAcQQ4CjNiiqivfoXctw7D2opMeS8bBKGJDJB2fD8ZVqsLoDBN2EBoKyT5Nx7hRDcMFe9JSLAE7BQXWG",
  "key44": "3BkUJ7mWDoFnfdoPeB63akJbEJUvm6xqSXCPqX896gX9ekT7vr1bLnKtrQGtLpw5mT4mPcT8CBPaMgaVY8Re4Kt6",
  "key45": "4Y8tiDpeFxB5xsurkd1Mmbaie1DReuUj52XKT4oJnBXpCKju3o9T1hiW7ZJQ379bHT7orKoQHaduUjcJsfRmoj4p",
  "key46": "4s7mgZ4R343pCxFboHZM87AWcJF4CbDatHcdhFA63THBynrcJ7hwxGDsEP7Euoq8i5knqjWyQn8HotB38RTVRGqo",
  "key47": "3dyq1pawwFUYdBRtV3GccD5R3baDgNyFJFKbgf5MDFPcgtqSQ6X8MAhL2GzkTCAyL5cga5LxCyWhsEBDYcuamddW"
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
