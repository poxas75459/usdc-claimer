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
    "494ZdUXatnALcG35b5DsAYce8XV1DWh5VQEWfrwfQyDaLbrHFG7Nu4b4mqnWQTmtzdZSCnWUmWCX4y1YZoWDuXoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gjVPp1sjEQdTRq9kyPDw3FwGryWVyzzRBNxPmomTvs3ULckjMaSAcueV5crHHBsvaXY5sBtW4TJRkDrUPrvDmVZ",
  "key1": "3B5kcbixFyJQTQqENsJMW6mNWSuATciXLFbdRPHUhozstuaS8Wdz9nDyS3AD2kuVKkHad3RtMFHRpTjooDrDVbjV",
  "key2": "4U7BRukybaE4k4UYe4WbksyeXZLK52x3JiZtNLZvP2Nwz4rozLGpcngEcBnL9Uc9xQG8nWyNjj3GNmqdynxx7Zxu",
  "key3": "58Lozs2H4F8RShyvRRM8oZa4hG5skG1ikwSF1Z91xrBpEczHpxTFLERUmnc83YZDFGUtY6CuDkV1GSXtCdS18o9o",
  "key4": "4W2GZCX8nPhcfu2WAp4r7kKW1zA2NjvTtiEkJ7pSgHeDSMSSntiktiWVEGWjv3w8yFiJ87SucnzHhUF2qg18TMwg",
  "key5": "4BU1SbrUwekfPieWX37YaooAZn3wjjyaPWMkR5Nzeh3ArziG3W8Hqkfq3y2Um8DyPMQzyw7aXWQ4CQJJwfVLraV2",
  "key6": "5QrDLRQy1zG5jh1uKNHbXin3PGviUoq87ZkgAy9HCpNLiazMgTLvYM6F58LYhpeNhmK1Wkw2Pn599H1soZgGjmKS",
  "key7": "27SsXzHCKcvgi928XjG4Mx8Nf69tAU3Jga3yYE3KzJYBwfGVUnz4mwbTMhttaUuAT7hsFsjNtW7s72LRgF6qEsSU",
  "key8": "2UoiWdLjoLPQNrYykvCNz68xYVaa54YLbrCFPer4ET6uJwNH22KPnVZfMpqNkxKpCgJXFXe9ae46HizZsQjAiyjr",
  "key9": "2N4Zb53uPnBKFC1raT7a95fsGauf7EsWSBDd7N5mYGXdGPdUAeo3fT4ahrXUUaySJ96yabEM9LYg7vMRTYBRkShE",
  "key10": "2F3oS3q5TM36ZUJknTHyUxUEHkngzSQF1R8i8KnzLUagHyPQCZcZ82v9KhwnjL7wTx7t64mkTKMCRiGE7whhCb4X",
  "key11": "2rqCxRrCzi4jA8g5oij9pJ2MxpD6PZt78jHYKGNizRxVCj5CP7Ty4a1ph4nmbfRmn2dde34MV721i2WzwCEguHkC",
  "key12": "63vEXusAieU7mpirv91XsLU3s7LgRxZJVWvcHRsWinUCjMdoTXbcZD5LvKrRZGfMUbpM33o6ay8FwPN4m5SUcAxQ",
  "key13": "4agpoUiYKJSDjXKKR2zkndUXJajx2z9WJK6YjREXYicw4jZVe79abbpCEcViP5v7wG5BB5NLM14sbMREcTJU5qfH",
  "key14": "38fWLZzjbgKnxWvt9tSrq8EddnD6B1x5Sa5P2PRcA4j5dVdLRhMenyxhHM4rf5QyhSBR42NHo2BE1oDRP8y4yTiW",
  "key15": "2KBd55e5CKV4oLY6DtwUErAAu3qbUec6671dH65Pxb6bCKdUuNNK7TjB3TrALqENKA33vNjwHQn3mWDPMaMx149p",
  "key16": "5dhV9GsNtUPiaGprm2bov1RK4xxihB3f8bGAPRpDXqVYsXpMR7HJPGMjAvDf3XU9d4YapoJGvhKxcnok6xdCFW4W",
  "key17": "3YGSFhFMVY8fRZE368fgKCep4XyGfdPswcci38jWQhMndMQPCJU9qEvb72WfTTtMQGTWCrnkHoTMk4K8enTBxErJ",
  "key18": "2AupunYfbhJgWsquQuHgwZErYVtQmTugU5AimTv6xpA9snWgFxvm3xhnqdBAtNz78JiXnYrxMgd7N9znjg43fkta",
  "key19": "5vZLQXELf9HAsjhRFbo3F9vJdAdhagroK9rkCyovTSFBK6ebQjj4h5P3ZDCScCgCPJqbEezRoxp22yrmkRgqSZwX",
  "key20": "3zwxSRPGs45EyttfuSxnWL92eXmDog3bfszyzmadHVnhS31SMrXLi6PyHxLjxvprfkaVSwCVGqFrLHbygKnY64TJ",
  "key21": "vQuBjeoKa2ZLJJGkaFK3fke2DvZ6kxw16U9drpD6HZz4DqUKgAiAhz71RpBu7enJaQXU29gMinfmKnfoVvDvbgU",
  "key22": "3s1M9pPEjWFVV4o9qzQDdXCpvzGjWgVU1tTgzNHa4PC83T77rXA41jeDybJWKe4EENDxkQ6TySLPSc1Gz6bqeTN7",
  "key23": "3FN8sRKF8bcsbDUGrtrrjNb3Rg75nhV4xdpJMGC6L1EHQi5JcF8Gnhoej3JbzggNWFdHpD1bKUcwawfkgTs256JA",
  "key24": "2fykEPAiUrQdLcj39pW4ihh3r3KDmGzpMcwfE6wBG2M4w6pmqGeTK59CKXKM6UttmpTthg4BW72tRaE9aMv1KTT1",
  "key25": "5i2uaaR4phwnu6ECivhAzW1x5J89y4G3JTX19rdcdnhxvMJNEdrkKgt9KyGpNZZCsmdSoiXcjEF6DrmGSED43fDM",
  "key26": "6z5UrL4njULpo8987RGJ88njoMk762yKUUsa8UnuZAkmSUvZfPdi3qCbzpphBpRaa19CRSgPdMQ9LaPFPmzD1AC",
  "key27": "4rsoSrV69VKgUJE9j828S65ekMmutdVRhdVczw3wYqxj3GRMaQuMhUo3vHPf3ubC1SufmJ84kwrxUeLo3Ff9kUgK",
  "key28": "5GCMBECKagXvub84V3BwpBz9r5BnLNoEUAWdyHmPUN2ogdP9ZtE7xjWinTXYB9bUvB837nWBnoDPgAYX2egxxSEf",
  "key29": "5Xaejfy7emHktzzgoE7zJamU8r21FLwaEqnQddDJqPyhYppmtZdYkeektCP357euecTsnJfgkFaai2EwJhvq43wc",
  "key30": "3FgQShWcz9vKCksdgRTnuBU4zcKsQYXVsVc8jauz3cA7KeqjpioPRnv56J1eU5qDKRhSTEkJ6Ydu8BWh2censokV",
  "key31": "4QHPXg3eNaPAUNbsGGK9r8p2r3uSbfX6L1H2yXs6RGjvPUVwMfK52fjfYJLLFqtJzZYeD39mtaMmXoJnjwqxuXfT",
  "key32": "3CniTYqBPBe2RwgEvtTKapWV8radYetdbLe69796ztpwVsNxBBbEfKyvJjG7apTuLPoC84rmZnZZpaXRhB61Zi8s",
  "key33": "4dzwX9zigYzX5suAEj3zeCTN4JyeTUYQTjzZi1kjqxoNYS7H1RGLiksZnNRxVZveoZbC1RaPu8uwn74zxtKXMcM4",
  "key34": "3eoRZXvaPiK3kQihme2xaPHDfYKi2T7wfzzueLQYBRa4Ytpc5Bnf1R8oNYbBTX7LV6er4srqvsV3uXWiPzXxGo5p",
  "key35": "4qdfnRxGCRVQDSejZ83WVjW5riWmnsUm8DHb9ELoNpbpVZZCyWm1j7DxU7rPohkV1ztXR23Nj2iA7pDBo2nBtZhR",
  "key36": "4PJzRfoiDAVf2y2UC4VDrucVsjrkbRjj4aKdieNsKg31XvJAGS3jNWy9JyEepV1Wq9EyLZp5E2iy2eK262RZcxEt",
  "key37": "4t6FrRNJUzVQe8rSqnWx3PgLyFL2yJdJe27pJGWzvfk82SimVecKHDZAajHmvHu8ZCTCyZDxGE7xWv35cU8V2Dy",
  "key38": "5VkqkdVfoB7osZ59w4eVkMq2nSADosVbzoMLqoPNixzTYgG6qt5tgba2pTSVAaCbH5xss5JPyi6TaDBLMRenuLzE",
  "key39": "631ieAP3DjyX4atSH63enrs1eTv2tMRN8bPbWTAXsh6czuFULY3DLx92h4V7azj5bcFrbvJCHHATveri83J441c1",
  "key40": "3KAcDmUGzSqBbS9Tp4zeKyTWERsCtzVB1vErDFFuJLEL6WcwaFJcXeppP1M4tZg6ZXNL5ugw3EN6MX7rBiS5rmNC",
  "key41": "4NmPrfrrAmNcd4rrySWsbr6smYeBwpq6cf626dAsmY6T8geerrqREqYcCFd6eSmVGT4mUoHqvo2dz8q1Nmfhyqo4",
  "key42": "2eEZM3gFGQgyviQMBzBposPkpykzEybfEDUxLFmcR3qRw5kKCc7MHmdu5AsCR1S8VdbiEfe8WWUJkLMytffUm9jq",
  "key43": "3sumTeomYe26f2CWw9ZEceZ1x8vpKBdanME3PJVdLTp1KpBy1sBhGBSUuhXERmnUvgMxSc5hYjAUoUYWgH6QLw9Q"
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
