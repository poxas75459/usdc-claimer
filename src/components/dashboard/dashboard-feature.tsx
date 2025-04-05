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
    "2PfCPX9uoL8iS7rMsgh4W4RmhtawW9xsjtGcdXcvCy4dXzKh4ncZEa9DUomYQshwfsYEJmHEXGPatgTnTo7VbhSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aVULnmnCBA7Yg2dbBYrWCAFx8MsD1Nicg4xPHZtMPPtVUdM8dxH7hovga5HxqpdN4ipzCnRfX83BJgTv1RGYwY7",
  "key1": "369nQyXkoUkpUeXfBeKmzx4xfjFzS91RSz2n7BoJVPYhsC97vz43GobFuAYcYQgpVddSBb9gnnyVwpBBqVuehgLw",
  "key2": "4oH54m9d1i4d3hUqK25ATs9z5xhNoVX4uTiSp5tWN9GqyDpx5Ubn16HVhpWebZ8Pwra44EkyBzqv4YVbdkDeNqPx",
  "key3": "4FKs1Dr369aa8gkvn6BkSjvW1y4PsTvph6ECs7QNg5ZXLNM2QqZdo3qUH8BJK2CHfwu2fcqLHYPBu19nnx52Wgji",
  "key4": "24m9iaz37RcPwjXm8ExMhPNUu879oMsJWV3ATPCLyonHnNYB2a2cUo8GRpUG2W6j3RG7iRDnm77YDeH5jktfqa9r",
  "key5": "QqGtCDX2ug86khCEhcgVQCQs8o56pamYhKDGBJRWzggFAY9iByeAy24gTCymSxoxV4PVYDjTjsKoK6u1m6GAkVR",
  "key6": "2hVjXzqMRyjmqB3oE75VTzmTcDVBr2mLAcsYfXcrNKpevatw71mur2pHDmTbewJ8pFW6irrdWXHhqdXyu782x9NQ",
  "key7": "5NoUF8oPnRdzYCxnJhhyGew6LyTAJHXXLXMsgf1s2dwHeaJM1S2wAyQ7UTez7jr7NdxaSyUXmExWz4S6tgZteqmB",
  "key8": "5F7PUzgq4SfZJqngXrSwaZ7XXaEKxZCZTg3tQMBr3a7a8kbHbgPrCWkcv7grhMHHsUfaXaYXjhoDaAptPdqW3KSW",
  "key9": "kTSpUPeAx4rrCreGJJWtMzNX6y2esofAqqLWopPNeBeboho1tr62H7JynDkUa9kWLzLmjzGCWuxU8C2ALDZrTGe",
  "key10": "3Mjesss5iiQtdWVP2RmJhhz1VzXfiKqSyysXL4eTHz1hBZwAJ5R1JZEgh3E5TE72mzLqbfVW3uJDTvhmiHu9Nt4H",
  "key11": "3gbxZxTR3YWTTp1TjcUEsnZg1vUo1xSnQGg3GfgC9Mm2YwjGXgHUsLcaXzVuAjcEqTPstpsoc6iFe4ifzjkZy2RJ",
  "key12": "5Lokrp3ygYe6mmbtA5EvGmPeCGwLgaZBnY5KKAoHpTZfyszCfWnk3NFZSz2gFRBJqptFRRUBbKSNSuFfRKCibtTn",
  "key13": "2T1ts5UfaaisoGH85Dv6bdYGS9QRSxDerg2PbKYsQMttyjB122AnLfFi42QpeKhMxGHuAczvCt6zJ6Md3vRWPETX",
  "key14": "5awrcr6BYBuXDSQDwmYbLkCaMxWCybQtaF9d2mckegabCay2eshHUz4ALguvafJvGV9qSbbM9pSux3Cys8NtvSMV",
  "key15": "3F5nG89QyhuMfjc6y4TKSFLaiUjNDDizxnfTMCyZPaGZ9H1NGKbHRCaCDcKBS2AFp2DuByywdKvFy39pr8uJrzqa",
  "key16": "WwuxzaWcmRUTKesLUX6PzQH86JpHmzoX5WPgkqMpQBP1iYkHsjk4VPwjHQhip7C8Bs9Q3NbRyZPBKT7wAid9pbH",
  "key17": "3Ri8yDko9GezAU4XBcH3GhB1eWPoX6BbiE3SiLuv3EvcQW5hDTavsPo9VhqVgC8takk9DxPT4Qyqp9YCebQPtM2b",
  "key18": "2f6BGUZ1MRCSL6pav6Y6cUwwWLWK7P8eTatqGXRG4dtQgAG13jYstbQQpyNVrdAC2Kh7xutChnD1fNg2kaUJN8BA",
  "key19": "dof7WB9Fr9AAJU4BWJ9YxPWtp7or1gG5q2u817dg8KvG5rXscAgbfBAD4PDTKTcLCrLbV1bY2XuNHWVgyYyUNwE",
  "key20": "LsHmcerqYUfe86RyFFgqZbnw4HfeZrv4C2sKDbdUXNY2h7LefEzSWbGZWFxw5DwqN2mS8upaSQTQWHauUq4c77h",
  "key21": "3wT29NJsiP5TD1VHQ8NoWVY7g4m2Rtb7iYPojXBj5UY97iTKYCG31eKE7ReySdm39Y1rC9Cnn1zXqpHaoJKDsd7",
  "key22": "2r8YpmMLtLar4cdEe9xGyEUQH48Dq32DYdSkXBF6UVGXPjfG1LUnhQboDkw85DnCvFcnNZzE3jG4wfYDudibFbCy",
  "key23": "2BotbeUZ1gYR9AwZA4vkGtX6N3Bnfve7bfTUS3Qugc2oSvq9zJegsgczDCdQZhBrvrNtezEbaatoR59f75noviDi",
  "key24": "2QeGjJzUCqbEwiMvgo1qMtHGUpYhTw49Ms2yemimGbA3MFf7wgKYt6V73Yv1TT1hqWZTdShtL1wD6wLFvr4qGrZj",
  "key25": "3wndhKShfzVypNa5qMStHd5NqxgSrauCi7c8a3CzHh9Mauw2xfAU3bJqrbuRaUr4E159Vyp9EVpD2386jyyDtt7",
  "key26": "63Ke51ynSskwnARP6vRuN7STcGy9qJw73KDi7w3DuB7tHpFF8CTZ5f3NYeXzRSL7JcQrtsGEDDDxZLvLNkYPxShH",
  "key27": "32qgzgt4KSfx3CvSs4NXqR6PtMT4QibnQptnfgeQjWc6RjodEUWoyZuPSxQ321mn4dsx9BESyKa1v2pHTDqES6jW",
  "key28": "4o4hChPe8iDvBpmLqLfJkMkB4dnbPvkdnYaURqpFLZ1pYeRdGCEzgkRPwdK5nL3cjUdrAdi118qzLsNMiJGZMV3Z",
  "key29": "37SbMSEbjpY4d6GyaS1CVVhdso1b7vufWsqqvNmP3v9xawfDNVFe7JZm3B9W2toGKB7XhRGL3z5NuqcXttE4ExtA",
  "key30": "GqVGdvq7nY8DEyAURLfAHGvUoJM8bQLTKLRUzNf2XXtE6eYUPSDHYc6FkdVu25nGrwHfDcoCgxQe3vCWxbL5Hxz",
  "key31": "34cB73btypzGv742SizeyoQ9Rq96TfGnXSg4Q3ptxr1NznVWXNcYy3M4ohjPqP4yM48QSQ5TMDZtkqT2jUFf65kD",
  "key32": "4EpPLBg1bxE5okB196Y8mHiotmFCav65HBxz6x7MeJsqgakQD1dtgwqcUDmE6wZDboW9edwH8bmdc3dp8iLG97mM",
  "key33": "5cpmtRggaaTQ3ysGY8FPfLvMk6nKP1ySAWafiVEV18gyax596tvpBRwyzugVGUzuWfZffD3Jew9q4jnRFVYRQJAx",
  "key34": "3V5GoWnw3NqdhCix2zWJ1hfwh6Gg22kVjC2WEBDHdqgeheEQtCgTTFPGgykkGU8WnT1qpnjK5Nfcxy3qijWt7EL6",
  "key35": "2pVKqyU1g4BQSZpL6Nvb33spwUDNyqhhk3YL4nB7przgiSLB8zbUBA4fYs6bg5YrmoU5pJ5tCF7pCyPUZSPZoxtX",
  "key36": "3zcE6WWrv4apWBSkF1vurauLpKZ4aBiHotnh7kSSbMoo3pzfPYNfccKs8Bv1iFezma2XzWXTRwyYC9SkEzWqu53h",
  "key37": "3STXUzimwdXYwVNmRbfDucnpcvTJQodYKkXVyopeqoXxou8GwysDyYFzXuR3zCk8Aa79enepd94qj4em38g6NSyd",
  "key38": "uXVmcb584TCzAvb9t1D7qVesu4DFtrQufXV7PBsseS3f5fB6Yxfq6jPnanpWHo9eHGYGnSoUD3jN3u45vGZzziP",
  "key39": "3tXzVvtcb4Co8RTGsKLuzYkEizxbGATdG2aawL2YqaVKmDrdBkm2vKUon3HdQmSZmSYqBcSkap633gD6WHQZ1uaQ",
  "key40": "4Les2YeJUR3aPxwzQi342XP4Stz7pCE98ZaZEExat5rUaWZaLZG7NvhLGqwi85eGTxqx67MpBvqrRrnXuCYjHoXp",
  "key41": "5Bv6B5PHcFtyMujAgQjuzCpypKszPSfAJUV2jvdLLjez3KMfiAfPrCAjNd7HHq1sN99jKzGWbBQr72HAR73LnUsp",
  "key42": "48exqT8FtqjkKKqUGEPPxyJyDurj4L21VWRHL2MpQGWrGfNzu8gMjdKZBUabr6dRBc3eE7nENBxgcxUVkXGFi9Th",
  "key43": "5EqBGRvyBniu3thrgC7ixbUdYqDVWv5FXq4q6qtqwaisWRepRwc23DZdi6bRETXDYAP6kXvtjuVLAMXLe4723XVa",
  "key44": "5yGZjNjWM8W9BGMTxUfQvSa2kvb7R9FkKKXdii4hRmVi2NzYS8xWAybuzTBEkYQmiLRF7mMZeQUWgTLewZvrPPen",
  "key45": "4TvW4mxmbgaVf8VsUQovZBFWJwanz2qgJRRLMnVqTYHdDdAMF71o3RRWNXpYnjMd8GfpNNTMVDcWjSwuKHkAoPgu",
  "key46": "KnhSYLogGFcUrU5JjY1kWc4Bm5eRZYAaSHU1kwQMDebEYQwXuuamrnh37KiMbwYcsVtpC7JCdJmrVH4QaAd1B2j"
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
