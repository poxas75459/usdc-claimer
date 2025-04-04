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
    "2vSR3RNC8TuCoZXqedi3GmhALZtcEDfRBarys481VLfW1edz1ZTAyDTBg3fZSbAJ8Ay1nyoP5o93eDA1xHzx1Nhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cVajSmENUarv6Tp89MRPmPW3nJrtLZHbRQRBRbP6aD3VGofPy4UNTFMJmvyM4fCwiH9cCGwfB32Rz3C8wviAKEp",
  "key1": "5iv7KViiEXtprhCWoA77UDYwhN2JQvEDvywCFBXhzhNxj38eDxBSn8HfS9vY8oPDfrsGitsjLY18cWsMdzRpv9Ry",
  "key2": "39KMfrBFWPaDrw5HMWibicdjRg3ryLX7AKHnfPG8mdsXbDRY4t9iuycJAjotKM5N6iHhikAKSDAmmChHqmdw6Svs",
  "key3": "uJCZoabT6bGRet1gkgTYbpZTvh4jEmLX8v1khVs5MKboiDBeziTTwqtvoYeEWWMZaxAkzH1aj2hH5EvgErJWi9M",
  "key4": "2agnaoWcXfHUWLBYFranSaJvS9avnnA4bUiw7iztsiU3m1nbjw4eHX1LgvKJWGFh9WzwmtiVH6tg6yvkn21gGWUy",
  "key5": "3AzTvC81QbxU2GzSQgNWkzLVZCrc2a4fV4PFFTcPCjnmGahXRGZgqWRrSiwqgimQfbeabgWkQafeNhV9hWJ2886x",
  "key6": "54DiyhB87GxKy1Jt2484JXTkgt6MfU39WGtkotJt5uvSgVxL6kai2qg6xBQR7Q6PkvKw7WCTjqHE6caZ4TpBFiQX",
  "key7": "8QyG19ufu1VscD5FT629uMjJim8BxoeAhPLiov3aiVW5oaCwE7GGm66QMYSKyphjvdpDU9tdoT9XLcuPHV1NYcV",
  "key8": "U8NCmkz9Tch3DFpkU5YqYfRx6i2mDp9sQdSFT3Us9zCri3evitczxCdowWmQzXKWgAobtcgYVZsukvc9jHW11vM",
  "key9": "2ZvGgKK64kePaMx286xFHwHhy1kSaMTjBAcjKMqC7sJjHq8Qja8wLtmdSyDkWX3N6fKBrYiEJctEW91miyG1Jnb",
  "key10": "5GavBawFhy9Fe6xR9sob6Q4DtGDsPkLnztHL6p8zDigbjGdwu3Q4RURxirSHV87pCHJxfwSU1ddqyV64644fnzVC",
  "key11": "5kbR1S1DBodpuF6UbATkLUga2s6SYMqsFuzii2oQGFwPwAM8uXppxNpcHbGxA11GApBZ3JcMM1FXoXaRDfs4nDGF",
  "key12": "34KEkZUPT51tLvMwrFzTs21RTEGzKyvXhxPHAZWGUvj4AzkCBbzmrUSLqgPrP76YrqYK6TVqC7mY8YNZ6Bfnc4Dn",
  "key13": "374zTYP35fu1ceeeFETRg9LrzVnAiXz9viL2L1p4GDV1ihXPYMeHfQvE4sJdazDbExHN7EnRwikNJvfzX6cEmUyh",
  "key14": "qrCwfyUuXwY3hPbB3GJZD7v5sLWNm57nnPotj7HPrqAxc7gm5z115f4N5Qf45x1SLK329UaLmJcHzvfwgwCwjmt",
  "key15": "5yDDw9fC3pxnTEqfRrftGc2GuanKxSWFPGgG4nGnt2rSFmgf1o77JMAofCHtGtaKKAFq2os3KB3ozcPqrzUutuHJ",
  "key16": "V3Main3DAT2iJCYgtT9uBPKrTycZ7DHGWkb89q6HKGbw4QKnrghzLj9ePJzU1znrsneZiEuWYD1dQxDH2TLG4dn",
  "key17": "53gUFrZAnQeDnF2G9bRvwttuBRhNABUurd2k41ap1haa4zi2hRU6Ha4fzcYsufs79jrHPJ7TfpmFpjDoZaZeSm6c",
  "key18": "2m7ynbvnPJ34aVuM1CUVkZiWtqEYLyZcig4VX3GyLvqs6NduurSJZhS8biShE33bQ1MiZ5Aduc8isB3VAZp4fWLF",
  "key19": "381DWzmYe6eCqNLk4FwwPFSpqPVcKFNwxN9aPToqUgy9fopezq5yE177NFC6Z4s1nPg8z4TVLd9y8VG5cH1ysWzi",
  "key20": "4aaTm5jqnGbb1KH4GQMv6dZLQtFxdemYuJoKYjia1pE6quGqimo4NmaRckxZibeStJatxP43GoWKyMTpsqFBTsYi",
  "key21": "2gusP4pgt6CnjYgRn9R8Jhg49Mj6j9T426mwd2Ew9qpMJDHRNCYNNKYt7c6GJBQZXa8qtGkzMMFL14THvZxHFnCb",
  "key22": "2xFzeo43c6URCRTn3MZKUa9rJ5wUNPJZDiQspMCte53HoWnsD8wPUrxXLqgAWKiMq5Ryzk1Psm2dWtgihikkQfw3",
  "key23": "H5s9rfLBRyXqzUYXwhqy1i8rzJ771f9J3N8UDme7iTwLpGaEGReQftAyXpdBMSXrmK1WnWwqi3TGtytMPqRkLMN",
  "key24": "3iWijXYNewGaDgTCuEQGxJhThQ39abzAh5KyWW87acGx342g6kdoiVXv7mD9q7KK4SUA5jHU5KDurBhN5h8nXoxq",
  "key25": "1QXMDDkLJ5w4eM3ecafDcJgwcUgSSa2hF68KZhC7TMNkDotJYUQMLF1yvRmGyZ4bzhkXnAE3EARqEGBqXgPkysU",
  "key26": "wJZcGG6yXD5xKxUN5pcTNHHvfptGtFvbwE177cCRzRWZcZYfp2DR9dXstbNVbFcfRWckdsky2kn3fBAhZu9qZ5f",
  "key27": "4f8eUGnEJDqALL1LzsuuSTfiCF3hLeTfpHC7bo6ZWwGePqdBW5G7V3duhqUXT5xaxBrftJWcSSJTDyaX5qoNA33H",
  "key28": "2kJZuMq1wjWYpfRBRFSnuMw2Zi84oKrf1fTgYQv2n2WQi6f74FXVgbUyYWQusPWeVvLThn5kdRSymccFMH23MDWc",
  "key29": "4LEfAxwg57tamgCKRHrAjpNRwN27XDftfCSxGosqJqJD8GvYCMrXub4uG38MWvyiYWg6EwYxpXVyE8znodw9K9UK",
  "key30": "5rhSDHgMy4RLE2ygSiZX2C9G1RzJhb8ft44NztKqcGShRYHtAvYhS7TU7GZSrprPu7P7jihTjdjYCRUMXgNKU7Y1",
  "key31": "31yo2mjMR9sXy2tvHmTKenSwe17z7AGAy6Ei881AKVwZK66p5ysJNsxAzkFwDY3VSAyVzXDm4BTzmrARfSo9tGt8",
  "key32": "3ad7wHjjhcf7e2k2wBWwLYRJPDW1af2chTzb7bZqifpwMRQFLszEtTKRPuH66LGDT5AQQaWsQZFidYHe1cB5j9e1",
  "key33": "4wgr1cdDDAM4AmFgANLXL2kveYkPZtvPUNFm7KXgGHzamqZDiF3RmzhvmpBkRrxB6mXtjdYy6yDNb6AM4GA1dYsL",
  "key34": "4P8NYmkumyJ8jTc6n71itzSEhjJMrvcMWn3AdRJLoxPkvih69WpqUZged8FL3wvcF8fm9kaj3KD1NxdBfBuxX3dL",
  "key35": "VYgVLVVY688Bah8BSQBZ8AuMSAZs3xQiigidFo8iHwnmm3UxKmd4SnJBqrgArAbM4XKDkYMvJptuSU2s6HYV1VU",
  "key36": "3YVXNYS7a8JP1hMt6i6z6wYAhWdJbAU3FUHkddd8XZXsqsyeznYVdodRc9zCRH89t8Tz4NUVcXzXWeNnr673t7HW",
  "key37": "5w4aYJrZjhVDuVS7day8FPaSuppGA5xrKodqXAPqfFxT9GWiUPY6Lh3Ltg8Df3t9N1sNf75xXYjAwqt7gerGPozs",
  "key38": "4WNTThC2nM12Hu92mMPgWZUSNCp47H7R3S3HVnCYt8xHdWHFwTbJpvu7rrA7qBQWgn7P7jCysFiNScc5q53uQWc",
  "key39": "439wqjpnfTCATrCZ1i8R4Pxb1ChbMyufVYEbH6V46hKRNhFK9uViqgGCJn3i1PgGYLsugXFPNFBX1jihgteBexCC",
  "key40": "55QKJuu4PGHgm9M95kQ8iiQsakPNNsDV7fXTMLBWTWnSgGy6ySkfp7ocqu6TqSKLBwc28Uw3KbHZDnAhPvZ2HsPV",
  "key41": "4AFAti2JjSB9EBVfQDBvNPBj7qHpwTH7hw93QyA2h1kTMMetaXUEhFgwrNKro7nBxhMcw1eDQ2SLbLR1yEHm3jS5",
  "key42": "eYt5yA9TkjiuPGn62RdYwbj97NpVuQ97Cs65sfwhDE3VFttZUjpFiigsfpExPLyCfTb9A6NoHNfpRNwWns1Gx67",
  "key43": "3RNcNfkdtze3nQpDzqbxv83kPaXGzrX7G5iz6AKpzALmtXTRkZ9kfzUDSMS78NySRRHQmzpW9EKv9ufwzhrjErcm",
  "key44": "5UZaYCx2LL3pr3DRtgis48cs3RW2WbdNPtYUogHZF4qwdicAuByie6kbFcnhSwAvX1mk7wzphjq2NSNidkMsosdu",
  "key45": "3Ckqf4DtUz1DdM5QheHh8dGT7Z6hwqeTkqrL4226Gh5WcD1CSYMtKCpUZfd4fGNXKiw5isZnSHb95zFgxZf8HYuF",
  "key46": "3YdMoPwDSR2fUjt7xLP8dsPFs25CjfnN4FRrNbgU22pXw6TeuFAGMfwNR9goXwy4N27F9Qtc8RLfPN6hcYKVa9mU",
  "key47": "5N29xpNsdRFGCFjeio2nVpdfKudHuUfQWMmReZz5gRSt5AtuC6gKAHdSrJVj8fcdKaK362YYju934E99DKjqJVbU",
  "key48": "44VGnnSB93GBS1sdCYdZFtMMcheTcybayejW34NSNL15r366RnUEF62EnR6ByEZNz41qWVEdXtDg9pTG87eomoJ6",
  "key49": "4V4Fj4gUM2TXJ3ZU7AbrMTsGqhzDeNGhaAwJkpsFofCiE2NYsuYtw2bqnni4WbxX1dPQPh7ujkT1zVkGgdKFULUj"
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
