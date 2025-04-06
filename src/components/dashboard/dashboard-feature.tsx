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
    "atKH5RzVrTCpdkm6W7w2j5FJBmp2VAmLcbsewtoKSkdYC1Xo8nqobNDeDmLi1ZrpPemvRx5X8rVrjqZssPvfaaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "649AY7mGkeKAPk3br4W6QbN6ru2PtMU1zLirfGmPywAp98mbQsPLdbjBtkrSA4KesTAE114HvdgcssFiLynzv25t",
  "key1": "3UVYBhck45Qsr9CUw7gNiUtNSe4pFpWxdc2ceaRRknBDGJYRBCACZTdywfKSWta4HMCCPF1mxVar7tZCDaG1bSbd",
  "key2": "2RvGYcKSsYvCZqhPoAVNCK8SRCHKozNTSrxYFRuLp9mVJ4dEKmDGZYEj6n1LFu2zUGmFN1sqKNLv7SKEhoVyvECS",
  "key3": "455MCHKYCxtDVcnKqvfG3qUWpuRTJ7xb3Do523Meshhrha58JWYq8PEwhUYkMUERFw8DNhUCNhcjQfoo61oeXYdN",
  "key4": "5cMWECRsqoyM2MqRVEdYWGezFnn1wzYSYXopatY9CCNZyrv9BxRsBu4TfY14owXM2RtaH8aVMiSd1Gq5So7KkCyC",
  "key5": "2Zedos8DaGxirt15axyqUipb3nyh9Y1DvHfGRKUuxUy71FamtP19kCXLmiPPGSNXRzNQe1sXBgWMP3oAkShoB2qQ",
  "key6": "66MeofLEeoR4uDis3863aJLGhFczvhAp5pYqMmwa3aCUPkWWhdDufKu4nTWiZVga99RM5Furi2xoyqbqf1ASFbpy",
  "key7": "2hqQQMwrfk4mJ2kMDTHQb9LYnAR8QqHvRo8r8GgR1f7SPYjJaEvsqFdoGerhk3W6vZAuHBhWizf4riQHyzZevBu4",
  "key8": "3MHLV8TFjVgcRxmE8vocoz2F91oDYKzgcAUqWVv65xpdkgu7kDG1wD6ijRiMURa6fNoxLRCo1ZjpLfcikzvxqUFu",
  "key9": "4kStGiD1sEVUPnTwSAYupxEddWEzhCnkAcAPK4cVQe7FJie4QHoXbEQZw9YFvU58xC9uiSPgFh1QmjkaQihxHJ2z",
  "key10": "UkoDJo6ZQLRorCRmZmdTbvAnkKgjcF3Av8vV4ip8N6pXAMvk5vYLgYQoKC8wZvH4gwPz24h2TaHDZt2RpGKQY1j",
  "key11": "3grSgoc6pDNtiTVCnGFRBtgTcFCk13ymHXBkJh9EC3LLsfaStgf95YNEZuojYD7isFsdmjE9JQSy8aWX2WPD1G2F",
  "key12": "3Fn5wF4yzF1CsY45eiDaufVvTRxF52JjPnsi7VRewrvTq3nxKoBZf3J69iawb6Csw4JA759LMqff49NwAaDAMtMn",
  "key13": "NuTH9927eLpjuEraUHV1a3FDzQAnRjuZziEhoRVMraAawDTqV4rMTPfpbNZyVtMCPrnR7GJzYt3Lmtsnmni1cKn",
  "key14": "232LWABphdWaoPHbxieHgG1MRDwZxta624o7rdtC7AsGDh8BtTLpvaXiypxPmudgwBuynXqGq6vLSzxwKhtPjhzf",
  "key15": "3ZZeAhqjkuyfpxyNG7M9XPxrGUNJM7CTTbNzyBGSunaXdXRfq8odG5Q5MCpbAbdKvZToaUhPb4us9kt4ZvuTR2yg",
  "key16": "2q2ZFgQkHeBnKhKuCp913SHg8fC67giCk7u11MkkWw26NNHosbFiAAXJuy2QdDY7z2Wo5KhcBESvZCMm5zNDmuJ9",
  "key17": "51xqLqNcws3aUAKSVZqyeUZnjhvVzVgNtcXM7z5HsBfPtg7x2epdL2kWj8c5XZy3vMyXp66VWmnicXbWqjAw7J69",
  "key18": "2tuEeBwiRnbha6V75LMDiEUygxwcmyPthPgVU7fwoSBMcziiGXuuZdvhMfMKADx33fU66ZRJPioTAjcPApPgCECT",
  "key19": "3HPu4ESDyNTjEebKCJVAnqtyh1p3owTR48Bz99DrWVnWmFL52Ktb7CGqUukeH5d5mWQg7575tV5WNj1dokSx1F9r",
  "key20": "3w3pJS1EcQR5PNg96Ci8LSRZj2KW2eZa75Xx2Haomv2HFNuygi9MFD5p8oMVhc71r31PJq8YsfRNte65r9bsR4Gu",
  "key21": "2S3jGh81nWZYzZmPBbGLNapmMYccx3XQHWq6oTk8Ce5Qt9tt1UW3AxBG96u1vnjddMZLzjKn81DcGxsGBwPB6Ubc",
  "key22": "26tWCyFjZoJnB8maAY5135LcC1bUpaasXm4HquCB4CEWpVVL5SH7pAmuRSPpzLA4RTBQSSAFPy2AGWLyHfrsnacn",
  "key23": "4oAEWGWKdtqMdrT5ZeE7vMDtLPpVbzydUFXbSRhUwDN2Kg5ZV2USHz4ubmdZjLgqk36qTd9xNuHuQPBosB3qVqAK",
  "key24": "5Py8MTGqEuAREmGF5mL2fDo7SmQHW1kapBbrniadm6i24sXS2w6RcJ2rzxS9y5oxDCPYUHPpj2CKqyQh7idEuXkr",
  "key25": "2z7cdkcfN4sERKjqhJhNuodLp2VXjHcEjwfRWjKRqivWFcJNhPvzQxrNytCDoPcnCUDtbVytgcLfRYUm3fAnFBLM",
  "key26": "2NwiotyPNTef62437gN1SGRApB5d2KbSZkvYTTAApPvNzF866pm9D4MEVhmsswa6T1Wk3kibT46sGbd6qD4gvxVn",
  "key27": "etk5Hvg7wsb2iaMTbiGndFB61yHFSCZyV7xPeRRAbtTGAzUT7UpB29UorpUV3KHQboaeNGVq7vrbrF14G7Qc11i",
  "key28": "5597Ri55CBACrnKWPF8j4GMYB2acpQgT7D83ubAEJR6Yj5iz2f7ViYrSqsPTiKYe3vSFyEg3mmuUGpQ9i83dJJ5b",
  "key29": "2YYnMH1hZN41xvfkVHsJFJATw4tpgVhB2MJzTSxKKfaG5RHTbNHpReCwNVjj3msCa4Uwe6LLptJjRNVAJRde9oyd",
  "key30": "5FUGfbQejEL8yq65mE52ZeuZzLTQ3tim35xLiJ4YJoESfNfjVK3rfk2E6N3Psf2YPZL8Jwu8ubvdrZsW9iv1Bws3",
  "key31": "2Rsg5X7Q51csGzK6ssKKHdkh733C8q6sLPurL45jKt3vsGtXu7tqzPSpoqhDppXK5VLYCT3uCwgW9bjezTLNcQCA",
  "key32": "4ZyvAC9mtiDfC2FSWsKpg6ft2zKoGhV4f1aDKrVRrfAd5QxE75x4yCkUtnBs6HSqkcoAnUWWhGirMuut9YhifL1b",
  "key33": "3ds2ha5FGFHXvoUEVT4MjZgS5oq4pZMKYMfVLZx4zoyTqHPQfWCutihgs3QaLJg2wMuMqyva7nA46Ft4wjP23rfs",
  "key34": "5tYVnwimPmMnVkhcrRTYz6RUA24zb6jAdRJ2JSNHBhQh5xNYCMp4ZT8ysGKCzM6fcScGrsHLdDTMCVdqtGpdRZnf",
  "key35": "58DzbLHxVPNm5TG3JTwsyLJfk4D3BkCiP2hGyQszUm8scUAXzkeJkAz13MtXCDRdn6gqyviGtnSvwXerzK7svdFF",
  "key36": "34wZFWt3jgSCoXfwQ3WUHCqSQzcfpvRZ48QsnC6HmGYxZS9u7mor1iJfY6WpHW9BMv41SgvvWTTfG7wuG3916dR5",
  "key37": "PA9HpMpRGbeVaSBMbE78oU37Rxdqa5UWQVd7BHXoxsArQongaQ2yd5ZDWNQq383e2fCJYHuEHn79rpJwMsbgoBQ",
  "key38": "4CYWrcbDYUXG2ZfDNtKCbHBCeayevu1XdhX5voaizj8UtHQUkiEcRkSKMxUymHGueQxCnaJCTAYC82Zfq3PCVbEB",
  "key39": "5TAb4swgrCBREuVC3abDoPoByY5MAHuUJdhj8ovxwMynjYxSCvbDtS46THBUW641haZvNsx94WKEW1Rzsgbrgh4",
  "key40": "3PtDAAEWhbpYf45kd5qNKckDTj7YFbzqYJW826TkvZPSp1QAmxkQBSmvzuXauHbXoJ2PsQd8UAn7onTH4NeUyk1E",
  "key41": "4o1iQZMBfWwCvpYZ6BM3zRZvNdWqNbnmScwChz1ZvMYAitTs4QzqDEosZ15KPYPrJ4ifyaTNjAzANgvS5bNDY73n",
  "key42": "3B7RK3Ty4wVGK7HYBbkRwidf6ETWHbKewQtYusvNAL6odBYPMSsVv7qjnkXPPLxZwFhfKD4fJmfhTYB3E6pZpiWW",
  "key43": "4cTSousQKjxg7iD1S8Aei5reGXSZEdJsJdsDQy38mL734EjyYy7UFWcGWgFoQ5vwP9WVbxwmXGX2zUV2ohG1Di8s"
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
