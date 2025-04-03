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
    "55cQyFBxihsGim7w3eDG8gP71hyLouor5B7fkqKCEzzWJRNMZ7vb6B72cHKddSRMPzuSJeHebAGPLq3PmNVTHVqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KUXXvT2uka8wM2bTfw5gWNYzYBkxcofrGc2KrEZZ5is1yYQPFXNC8cNtmnhY5WDsHaqqG7JN9zdJEQPz7VkyPgf",
  "key1": "4bg7uuE4ToQwrpgBKT76enRN2VHeUrwvC55yKuSnVnyr3aDqCb7S7ggx8U1DVRjjzn8QCKdVFh2oMnrMyv16LRkU",
  "key2": "2neWEV6qyaqn7tKjUXf3G6EM7kLmeUFC6HYQMhFfnCQxJq5pcm5XFDn1Q4zzjS28zbEBJjHtH8FV9y4JTFejgVoS",
  "key3": "64jZGpRJ7QwmxkmPR872JFXwPBQhr4usqzyuUaW7a8NmmqRziVMdHbapQqBWDz62TTyBL8P6FDtmsCzEujAJYBj9",
  "key4": "2zD9jsEDmotUp4zXhxwbWTXgAj1CodCD7Prx27p1wkD9pUz2fqgWUCU13nLdwD8xSuj5eGygoqDyogapauaxuJtP",
  "key5": "4pJ1JyiEvnWLWo2dvY4AFy6SUkij8vvDYzd3xX23UQn6UV94TDLh6rgeHSdZByySB1zRvdPd5J3bU49cssf5mHRD",
  "key6": "bdtVzDyaxnsDVZHcw2bboFihP4ztYwyjkeaCdjWY6wZHWEEnmKCfoQ8gKtAg4j7Qkog6FbtGWQyk5v5Qv8TLMkV",
  "key7": "FMh9LHrYRLoZeMN34sFyptiryVNGb8JJ9DV6z9o3uDKQdgwc6rw87MaVA1JQksHcHkv7yv2kmbyqhui65B25Ly6",
  "key8": "3a9vzuxLy5qZEQH4QCyijm5qTka7StcDfpTJY2KUPo3j8r7ftYSmetY6Kv4uvgKeLytg3KMvyzbiSbDUJjXZMZpD",
  "key9": "2WrmsdBEJDWUHxpyr3vKYbBTuPYEXyGtNYnMwm9Q3YJt1Gyo47nzFY6H9pYjWcMWAYDGvDUZkdMy4z5DUorGgCPh",
  "key10": "37a332Xve2DzcHJDegvyAsxj51mWaKbFGewQLtretZkyPJ58rDpbXTuoQmN8sFgQkVBvtxoSmCc7xqGCQwVkLXs1",
  "key11": "3fm9Lr3iMecij8NuBhVL6TPPwmCGuMC9GxtQFDbrg1iQ4CBFyct7ijWcKpbFJqHX48gHPRXCSZyHUHvDvytWeyWg",
  "key12": "2a8FGdodtJcpg6AgErG8QHKVtXZ1ie5VstiYbxs5cBbDwPppcPDyQFNsHEqmeYaWRnG7gfNUeAe7vwrLeZWY6j6F",
  "key13": "Y63qrcweeTCv3xCkWnYsqdp7CoUyMtmKMxXeTZyzwoSkF5Hx2BNkF5EWiKn3WWd3dq54QBrWmV8aM6ZpAuPS5Sd",
  "key14": "rzo14Bo7KNunqMtcqwPqUjJHNBFkhbYNfuhNCQWcv6sQduxAV3qEyUvQHwRUF6X6hAMKS1Ba4mJjMvsFfgaKMvc",
  "key15": "38uhL9nFELntfCVSZuxoaTcfDVGaESwz29LzhCc6atiRhtEZbiSubuXyL94fm1pkJy6HjKpn6xXqNq2pyiq8RCnj",
  "key16": "3PjzGRwjQyzjujvMqKGixcELtCysaX6nsfiHn6nSRW5HmjrF19LoS2PCeTvJbhuVik6KWAmtFmuJjhZ36XKVHBVt",
  "key17": "NbAsT76Jp3fxhevUsh71DJo7NUdVsPTZKUh5vC1bbEBkCnNyQLTowNPr1RZma1EaNgPrkch9f1nLoj3LqtSjErK",
  "key18": "2obi85cgUSNZrMvSu2oKfyBxeBZQsgqgBbJ7JS6rsjkoyYBf4Z8XYjWz96F5gLUmDe67oFFswkLJAZs7QXsQWZAH",
  "key19": "3njcuPCgoCuL8etdGsRrjdcQmBxGqK8sXbxVmGZCGqJ45NA1nWSjFv7k7uZ6j1YJx9dCC8JKQRCk6yLVszx4A4Z3",
  "key20": "3C9xuVcapsx48fFGCNnGXG4aJcvkqzNEUhcKon3XUaNhiYtkSbTNw3Yx3sLMGu9kHJNwW99hqhSu213MwPwWGRnA",
  "key21": "4EZnRWpfTvcxXpnLvpTu11Zzu2mNg6EX57FCygiph1XKgUSnwKv3CCfxaEq4R5TmNtmxMsAVRimMzxcqGVhQkz23",
  "key22": "ZAoxs4nMLeyvgGY2cadBtDZLLCp92w3vudPSCcv5avE2qNWvcLnoaGwoBbs35XoqCYXHvVBjLSc78gqui66ybeD",
  "key23": "65HWeRmQgHy2rXLju2RnpBKnWPEr8DiCvqThb5wLVtkBwPRSg24nFXzgBqAT1yPiw3vpyMhrYEEUm8LRpUKNgtoP",
  "key24": "2fjJdM6G4jzXCd2mZ6YB9gjFULiHyM7R94RZoWP7GEzp9bCoZgxduQda44ius3TFgCCpKd5YPrstcszXsEe72GqK",
  "key25": "61MtMb7d8EKW2wbt3iJXaTJGznfTN7hGaScAii2Z5U9hufZvpHqT6bBFTJMqQZ2ZcCzRA7h98eA6bzjNw9qHPC9e",
  "key26": "3L6FA8QtngZUYkAM1ezTvWqB61RRJK6mURcD2Ww8zSX2XN7vvJBqtJztsgoNSYicKgRGBz3e5tcKKdfxA33iR7sT",
  "key27": "5eDiuFTkLiZouG3rxWgabEf3HHFXwKHPbP3HUru4hKVEZaRPH9W1q5B4dLXpEyVTXaegL656pqNrbfGuZvzg2kUL",
  "key28": "4Vo9QiqFrHaPoWGBDrWH9CaFUnioq7dEedgjVWxtsgD58cJZskMzSr5bigXRwamhoziM1UBubaNyprGmS8BukAtt",
  "key29": "3yzeDRUkxWMaT4U8bBZBoM8qF8kexisgqaPNsigFmQ2sziMk82VdJPsdXCwagwtX8K2cLBq4gp4YtqF9R4dKFuuR",
  "key30": "2yCXASreeHRqFFsZy623C3CUknPPdHizGvg1B8LXVy9tDDPXVDop9QVvAGF1cm6DaFDb2MTjfarmq5EJuz3JAML5",
  "key31": "2S5QdkkdDRf8WqLi8NJB4PgU4dgT3a8qem3YrSyfiGSeVK6eSbcSzVJVFLyiEsg7LvQD2e41KyVLV387aGVM4DJ7",
  "key32": "3hQjcAPZdMrNEj6uzFjYmZxqAygN8kz71AUN79qHXmNNzRVkTVKgedBau2G4cMNnMYTRVyE1BWGdo333abQmeNKC",
  "key33": "mdHpmeGEmqFvnkP12odXZu9ue82f35gsFbFHXbmLumtkrmYsvrHPxMaJXE8rt8L6PNLqTo1vRPELrYD3GN6wvYB",
  "key34": "QkzmDh3Uu1M1mdEgkN8nbh11GhBKPoWTowCi6NaXae7PMiQJ1sMmT3FfJyLCyazAS1RyjgzNhk1GtvjcpaETPCB",
  "key35": "5aKjUS8a6ea8AuJoTLFT2Db6SSqKtEFLp5wn8TajAWDuSM11Wczwt7JipTMwWtHmXgjM8o48SLtsxEeYgyUQf3Z2",
  "key36": "3ZXRxcorXLsYN8ajkKjcrs9sfoPEonLWB33ZapyUbyeZ3ZyWzb7yyC7QXozTeUd6DxTZJKVNWWeK1e17ue2C5trU",
  "key37": "3H96tZz6kPMbMTweWwBygWNWUVgDFnDqN1Mz1h6L4yrcHgKYHEc7WFCuhbrXp149h2PEh9T64btHKu26LbAsmMRQ",
  "key38": "RvXiu2eYJ8p4fS3EYzQV38NXeV3NEnZihNxVFfp4SUmj718RHN1vu2utvQvzB2m2xBN9pRnArLdJdQn1qLQVbQT",
  "key39": "2bF4mHxNEnTipiRshhiKEUvqV9LvyNqANtD6q2fM4uXW842oYeQj1Sp3XywPGMmENS9PybNtLByp4emcRV6o9DQR",
  "key40": "24srZbw4Tbsh55rNyW4zcsFDb6o3ZBHgr4c9KFeSuKrMXZjS6WrfECSmppZj58C8zN2g4MQK7WgpBQimX1KhtR2S",
  "key41": "3czbLGe7rkKFWcWCx86MYaYc26YbduDQzsH6zXRmLzPCFNnbsgFVNqPeVqGtYx7AphdboaphJ4oW86eyi2xthW1w",
  "key42": "35GmMph54AHuArSiww4bsMMcuQPcFkSsKmLrojkjrNBADUYyvqc8fAxGcm5y3uXJV9wpSG58wJCooCsxSsBJvext",
  "key43": "44LdMUXzBkez7JEsgjwXgeevkb1VxawNg2ULwVHp9uX5nWBpTYc6D8KiButPbExE7pt75TsciEDxVAN4b1edjqcC",
  "key44": "2usza37RkRVzwrnFjAWF2KRSKYXw5LbVgKyzpsGdiSHaD8atz4Wass2MCHjQLtUapWSUgS4ATrtpHztPTVGphi66"
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
