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
    "4qKA21kQVXvsDFmXVVeRuZiTVBQpqkFzGkKzT9oxdcRow8QhEi5iRg4LQLEy9mmLF8Uf2CuxGFLjmbxnx4H3mwUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dHDpCBix7jERjX98PgNXaUrTs7qEN1Tv4uvzSbzSreH8uLWG8g5sQWuTWFKT2tExSeL7BYqdWXRrC5kGhTRTYUH",
  "key1": "5S5TpNpsYvP6sEhPFyd7pVAnUj5Ceh9ZjgU6HSHcnQZLLHgzXU7DuTwAhy6WzuRRAn5vkatpbALnFwwwoPwRKe6L",
  "key2": "2PkvFXWYqpdZPrJp5ffS4aUvANsjEozqy1NNdpXNNJwy8aGQN3pXy7aZBqXXFVxhNdyrA14adANvT3fhLQ6We63K",
  "key3": "5mJ7sKJLohmEBV2eZdHzQEnRepxNXTMTMtu1i2nkphdGNdNTPjJ1CUm4h3AhxpP6JPrLYFHmXDhNbXY3cpXeEBL2",
  "key4": "2VZ7TozAp7f2xcTYyRzHMorBUoKYALmLda2pqGQZwfyD4TrzfgcXZJeVbM99ForzYB5ZWVc49TYjXvjmkR39t6b7",
  "key5": "2AoBP6qAgtid1NWA396NMpk4F4N2hP8EKWSbcpjJ8hy7S61o61HnFzanKbGYFFsYTYPdjQJm3YGhWmfHjWMKa87W",
  "key6": "3EAmocM9Fg2FjfiChojQkgzNmcCtFP2bvT8j1NvmFYHeQtMRqbZRn9KBrivEpSnRaCK4D3tKxw6qaucV4imgHCZE",
  "key7": "3FNHmHrH95Y9MKcNSSTtVjgjtruDEYUycRFxwnQevCG1x7NiQwA756j1wdYzxeqjogFvvW6pj7Qhj8jFq5Ss4oPP",
  "key8": "3T4kj8jKUPEPrpT9nw8PLquxi4zacTHye8fo6CsVsCa2gahEQoywKRdWJ51JjRHrQVusKr5Dr9J7PYqGrq6UGtR4",
  "key9": "MnF76obTCJDH9gGpvZ8J7J9R1RZrD76m5mzLfybeADcJhybenr494r8Pqjmazyj7wjKMSj4e2VeWVPLh15CgVay",
  "key10": "56DxAD53wyLrVxfdySRzcdRsUg8D8ThnkuyBfPwNpyHpmJqcz2eRCHHcXiywko4AmmhZRp8biQTpmvXWQRrpRzKw",
  "key11": "5xKP9S7utanP7VT15bmNtQh5ArMK2j2z3MSVZuupf4YHm5qUQfgyWj6YrnwPE2fkQUnoa77CqQ95TRdPiCDQkLVr",
  "key12": "3Qq8nXUj45kpE7Ezzec5j4aSwug1QBvaqAGeosmcYVFieH7xPcXMVVetSr1YsjCugMd6uca7eGZi2Agoq6kG9yS4",
  "key13": "3dhwpre5gj8i2RZAYkn9PmUbvySiWZ3vq4MshgWNaXUtjSiudUiveX1SnrLJ3yiTMFFseFfMp1n4VnTUkXcjnR4d",
  "key14": "4avY1rfz8qt7nSLdGCrfFjrTS9Y4S1nzbfxukdaqJ5WkPdqG77Hntd4tRrcUaWRcRF31M4am4FqgFFQPxMnpzS2h",
  "key15": "5vNYRQtN7iQ3fuKEaph3RRhqZV5wVMD5YmHdJyvqovDdZ8X9bTu14tY1fAf3hf7EG8fmKFBogzEhLpcmj6rnKbez",
  "key16": "2WjSbvCMS5Zt6igzsmr2BtkE3qWjGGRFMRPK3obzm67bKerZLXJWudh18bxBAjkXXifvVLW1ohompf7dRu5Nyx5Z",
  "key17": "3ds6TFbAr82WKyMNfaWj2MGS3HeTfWMpopTFUU6bcx12oWHmhVu8NAyZRwwajGQUkwo4jQmYWvJJkbnqiUSDLagv",
  "key18": "jrYvT1UNSdpYAJrc1pUd5XXvdDYujiDqN5h3d4NessvNwGsrPT8iPvgUpE88Hd8Veej4TF8szxQdYxJhhkCdMZV",
  "key19": "4E5FMTunb1BkC54X4uvqW6chyeyruNP9a2QXp3n7VxcyJm7nbBcp2mex3jYYyuioJgVS7ZK7Uh9SrT1a4f4uwHe3",
  "key20": "55FSbt3Fc1eQLVzwCMbudt4ddZicAS18LxYaEBbEixWAPydarsvsUx1jjVmMXTvjcgUXUKYhjzeuxRZxMc4XNvUf",
  "key21": "nkPqVCtsUPkHRfXwM5t2t4LnRaoCPS5fDw8MnSwmon6mXEKkC4cqGiMG2HXSxmsjo6VHcayaHZkPvxYGKmiPfze",
  "key22": "iuFDiKTQCFjUp3ivLWzcgnEWkHqA7qDpVAJnT8sWb4KbaVqsXrtnof9FHAuZH3uiWe2mZmcAZ4jbJoqTEM76voW",
  "key23": "2Tnct477Fex9ZjDJ4JZR52SuYUQLhTnHbi1SScbzRym4dhuwgGKserNPBycywcZa7gj9iDfZztfQM8Ea6W6TAG5o",
  "key24": "54PmtXkuyCZPmQfrfZbaa1YGLtujX5UJF1pL45rcJyNAHG5L6NdR1bR4EBymxWmgJ4d2o2EqxmvgLX7D7khFbnX4",
  "key25": "2Te5dCzopYF7AR5Di98YD2fQhmtKKY7VHPEfyJCHEsgjd3LHCP8rQnT3HC1XvNDGqMrNtU6vzatQsNUB4Kiecpk4",
  "key26": "5rWhHXeC9ibJpgDpJBMxSjwY3vZo2jrxMrPHEyEursSBJZ5jnznpaw3VPhPkG1vywVCpzB1F1t6AQpsg3KHLaLPP",
  "key27": "5TK74MJCW3f7ju6hvxuHYThkXL5e4kagGBTPTWKBHQxm2VTvtoaSUmWoD7jaytL1EXmEsNznxUwTvsX8gNGjAFi6",
  "key28": "4C2ngYkPpeA5wexDXHun5FyMpZYGknanmEXAeCZsXKmPySeeVdGpypUGGE2Yq9utcatrdPWRmoN7tQkZsxMYVhpp",
  "key29": "3YF5p7DjFvL3X2t39Efd3Zv2qU8kt2KastiftvnXU6j75Tv5184UcVPcATnTFoQwZ4x3vtjbi7jMMHLxjHnxsQM7",
  "key30": "5W9H3bAPZ2SjfF4jktZpWjywSmjoRZMV3r4bswnAg9Aan2fj6Ah7ZRhnQMvFtba4XGFUPZEAutBBpiMBz26WWXyz",
  "key31": "333M4Q8BdBWrT8hJCrANTCbiVMmhFwwkrjV8GLFEzD7oPUAcc1RhWw6v1W58S6fM4jz8h65hz2hwHNkK9GuJDGWR",
  "key32": "t1oBCYSchWVfSLpSKC2fS7bhgKzCzqHCRL95AJAWRbxXx35Q9peERsSx92pszGZJ9EpqtpwtYGuSqGBquGWVzbV",
  "key33": "4hFXMkTc8hJBmTDjQQ4XFmJpowpknZSRfTVyBne5bG3x5sH44gUVZofeKQyptwSHWC3CZUjHwTBvr9mQES5Nyntv",
  "key34": "4RzdSfVGv2sNcyvdwKAodq9KW7qn3BTaTDtVQ7is81766nWiPMR2Hv9KCYouVJJ24VauLSdMZSahn9JrT8Z1XjfJ",
  "key35": "36b9BgYrpb9yCE2Qry4X8L8sWp5sSZZ8taGLRxt2s17HQdyyZTrbqxNcwXoe2Exp8cTkuEtxssRsCB34kTEL3jRN",
  "key36": "2m5w67bJW1FX7btWd3hzF1nn36KqyNNPdtFnd5tCMi3DGTUtbePqEpw7qV3KGuHzP6Pt3rHof3BJ9hTU52oXoxi",
  "key37": "3hPLixmetzFpZakbReWg2o6JcBePGb2j5k17BXBFEMWb1PFACouDg27QhTedJeQA8vBMa3rUiWMNiXQozNG2bmt6",
  "key38": "s7RFHLYfa6WWxQyR5xKTGcA2FutXbS7sywVpEGDc9ndpfvhvoYUXACpePLZY4MnWFesCzL591vE3LVNT8qMQ1hU",
  "key39": "3R7Tgi96uL5girdGkeyRUg5yH7rdiBeFQmNimgzJwPraoCxzHA9k7jxixoyZMTuRAEJibuWAFMEJqvi5TXR2YicA",
  "key40": "3AMP3HQhsca2ZjdCDiGBa6BPX81PuYsi4GLRSnEpXKycQ73jWjn5xaQfpbCfqzoDJDthv3DqShW9BGApJTCCgmCc",
  "key41": "3N53dpDA6w76m6LYeKNfGhqoSKRqo6VqPdXWLK667FLrZT7mm231ineFGQcsxLDx7upw6H5b1PLiKzZTGvQTSDjf",
  "key42": "5uFTZxtCVKRfTRSc7trw7GRS5HG8evwBw5FNyYnwcACoYjGzTNous82rk4RBjuTAzmNCeJWPAjL5QUekmd1Hb3Bf",
  "key43": "HxSoHN4a3WN2jgV7R4yXrxUNyTnMTVwBJEJk7ff9MVx9GbU1kN3452ZMuWZAse6WR8jqypRGJgDyFtKarJMDExN"
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
