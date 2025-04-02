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
    "4b5venvzaK6cSa8xod8ZEbZhDLo2jCYNkSuUTshE282nUEmeatTwpiTk3qdaypyNi13WWwhaa5u56dDFw88kQXyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XFXuugrBDjom6RktNV5gXx4krQoYKBt9hMa9Q6nx7g4c4qxM389nQ4TgNPA5eLfQUnZyVmZEkTae6EYZ9YebXrd",
  "key1": "5qe6mSwXvoJmek12frGk85YtRSh2nA4DpACg4JG5qBWC5NqrExGG44tvspeQV9rNY7Uw6ipttcn5d1ALUU8ZYJCL",
  "key2": "rJs1BxrNdB5yQGeZ6DxnNNBE6z46w6P3WqVVxfbFK3frBgDvyXibvQzLEVR7GAcuf9FJ2Gv56hBVomYhbiRaKD6",
  "key3": "2DxQFaQDquotk2adxZLjAqLRZzkNVdwZWUdhwuPZF5MErN2uQr5X2TjN64awwWTaM4H9MZJfD24zofdm19rWdXx2",
  "key4": "3mLWAsTigVW5cmGshAXZWtWXTUoPsEQ8jQHZTaGNBR9HeVKZNjwERYA1xvBdw54kic7vS5GdUVjVdsYusRvCiWLM",
  "key5": "yGF71pSsMpuAG8BrSDLATwcNzPK7dG5gfhrXqhoRSXQFCJ8Cstv5U1VVsWBfCbuDXgMKaeTgA3Bb9vmk5L7R46i",
  "key6": "4YHpw1HR6z9Ck9vignpHq2dPNUMa32CFmQcjWNRXPzrFDYuyouasYkTbiMRhDfFNg3DFXNPn94eA5i2FFBMLaGkU",
  "key7": "4FzaDv1Kuvj4Fucb1Pp1ZULAqh8xH7RdN9B3u6vs5LHV8s9Fa5TtYTxk7ZiX7BB5s5Vc3YZ7WsSwAZCtFivShugL",
  "key8": "5s4m9cJ2M5ygQeh35WJxZXwzF9WPBXrAv9jkUc4c99TEo96iBtjvpdWjo1YrvHNMnBNbeCHqLZbJVDifZVrEN4PH",
  "key9": "3HLS4GMzsxJyDgdB7bc9hGLk6PEyaBPZov9XbNqNnryWzxH6pBsddskat1nbEvN7EgXZ2GbE8zaVDor749gwfvvU",
  "key10": "MrnSp6X9DEBUP3NLr61NiBQ9cisozbe5bCT12d7C3qF8MEHqbtdwYmf2ftfaGHUUJ5QoTJWcaYVgoDRvHtEoKYF",
  "key11": "poZxSnGY19ckCjdNWHAtR56vWKyjJMdLDeKWx6gNR2o278v3WwxKPsNH8QdVHGuuSFG4Z8j7m3WHv9NAQjn5Vpu",
  "key12": "2F6cLHE6Rn967tjLBSUQFMekEcZSa6agvbj1jmWEbUyMMZXNFgWcA584NNwG4qDNZSYBGKy48ivH8rS9JDxbFDgf",
  "key13": "ek2iuaxorJwCicifMxfhSctSu8pFjv4qFJbdbAvfisCXGxMN78eqbc6NxHrHrh9Q6xBT5UDLqn89UvkNVLgvhS4",
  "key14": "5UgihAgwiWMuCC5AhS9LXv4ZoXUyoFx72uo5EMokaBt6GirugANbYiNAL6y53VUnPfQgS2dZjBRyHTBr9Qfx9cXa",
  "key15": "4Zryvsva8BaCusBwFehYs4tFi1UWZypaQrTffazpGAvRMGEYdhTrVFQkZQmzNuMTZRBWLvJSpzD9gpmtcGUY75Hs",
  "key16": "3eeHyVzDhcJXrFwj1uDaTYVqnvjxqnxrBqh7JAnAVYNznnCm5ahKESzVs5XMg3zN5uqRiGdhgKBhH7CsD4ZocXsY",
  "key17": "4w75Yix3yRVRTkHLpnjpsqDL11Ab2Gaw4bYfUVYu2sSt497pJQeHihjp8wxpr2PhbJHUdgfWmDBNDif6teh2x8LX",
  "key18": "2kobfaRFKSn1SSj5obrsHWMQoHtmmrbLLBKqZVQtqh2jtfZ7wqXnRe568UzQ17EQy8ttwDMTR3nrmdEAx2qCztBK",
  "key19": "33TSfH1uNytitMmK3Taa7KF6asaSykXr66ze1Gwffi2ZXhBxkJMWM6PAGoUNQSNXSPzdTiVrWDG72iwTrSR1KqKW",
  "key20": "2jcaMu8TaRoq8G2ymwUgqyxofCLuJwUW7NbVmHmeEzF7jkVuyAAs1TaXruit51itqegmqqJNCczcXotQVJDKgz8x",
  "key21": "2E4vp1WU2EEFLUrV5rtaiEihnVPeKxNaMP7Ju3ZyXz3DMB7wCvXjfsMUfU15fgkHgYuS13VPFRq61jygKgJDSpnz",
  "key22": "4TUDsNC7GALtK3p5yoBnLbqqvnmvwjWhe4vmWeFM7Vfc6CaeNfdDjkkDB7LVYE1ipdwt2ysMqX7jsHdza7EPgm8C",
  "key23": "33E6gqCUsprQS7Uh1k2zCjxDnVtVbrJPuoAHxH4sPMhuuDFBaW21SsZAzLNQJXteYcTp7CZPxG2MeNgJpmme8sq2",
  "key24": "qZiFKHLpgd27fH83nzhftbaVy1fGJWtrKY3B9aHiufu6XBeeav1Wu6GCKG7yhFqsDFGHXEYyUPahLs5YkHUJGUJ",
  "key25": "h2WpfAxX2j16SeKoRF5toCZiq6pH8wpj4BkCgoyCuQo2NEUxvfE31UUfZxMhUiDscmvgpDsTpNUMXC7iJgZD5MD",
  "key26": "5nLLrVBuD7mUNMTC427KMzr97mXAPdEmXaeohR8ZfMuUBsq8GEABzPMn2X7dxL41wo7pdDtNyYg4QfbW34hAaDeY",
  "key27": "2PerZJ6Jt6EaT1WwzJpo1Z72ZYhST9r8zD7yySPTgPNskkSAA9kuwMrsnbAsGTNFCQDZyqUYPxYdoLh3GSkmnrd7",
  "key28": "3NyApASQvgSE6zMDfvfASNe3JiLVb5JewjaYRZWwM4edTTJw9xryWRCKsbZBunc5E7FYSiKETMWd1fCtj19QYHza",
  "key29": "2oYP98JfWywwUcSGtexhQtPP3kmzwihD33Hu93j3Y4Wezr1vBcstNy1mSTTJ7XpxY43aAZCVHfr7AsaCtz68fhg2",
  "key30": "4kpBoz3TYiSfVrCGLhkv4hrQjD7yrcq2U6wnaQfdEBR9kX5j4vxPovaQYF4rM8JHxFdJcxJrByEMPnycMud93Dji",
  "key31": "5i3AgPAabSG5pRGm7JvXdEW5ionxjY5DHptCj9TNXBMdLvsb3sDRzpbMTfXnpw1uPorXcmcxZPjQqe9SvZW8f5sB",
  "key32": "5AZPHhZSUBt5C9dB1Y2JtK7tjb5ZSKLGEs9zEJxB4VEsmqmfWubP98DLejKM2WsEdKPidn4C33gJAns2YsVrVSdL",
  "key33": "2smYFDzBiaL5ZBJh7B4kce7DUhC9WHnw6oCWWJeKL4GcpYwakPKWVY5o1DjaMzUMbBFuxgGHXPRM62DZfdWNWbbw",
  "key34": "2rfU6f7w1Av5mgq6V5kGf1grRQohLgTzRByUSys1fAyXxuCzqabbqoDEGt8YMbbPanCitriApfUGWsG4UBqQW3Y8",
  "key35": "5aXAZR49485roJUWSdAwc4pgHoSghiSfGT6oSc4UK4S3SE7TEjGNc75SUwb1qnvYZbsUFwaNEvYAtdREdXW8xmfe",
  "key36": "2H8uWKkzNWnvzMnhkiGPgiFo7RA1yaf9DrTrYe86BkTsu1LrHw5RG1Cdjgez1E9RdGxxdrSHMkFuN5n2QvvsWTZB",
  "key37": "5cwEr2kLbB52HStjEikKhyJ79cTUhF8BPkkk2KYWYX1Mfwyr5RqkCjpo2ScDmiqTBop5XTXq7PTVD2eyi8ieeP5a",
  "key38": "3kE6JzqVgETrCKm8KoqUy6aJXwRYN1wfXdv4QHya25Du1SC3gekDRTxsqZnq49e8i5W6sk1ARcEo2u2isYBwgWnv",
  "key39": "4vdSWButUBHLxXhRv3EGf6YKR3rCKXBPYtFEMoXrewZeUkfUsQMXUuLPGogE6JYp7a2ZF9PdmvTFC9CphssyvWtP",
  "key40": "RGKpz3EgXvLEUd4hPpVfL9dvZmuubdkoHvDZ7hUQbw5AZPyyHPN6N6kGDx4jkm5KubhhVzm1Y2VCxAA7Mc8WH1a",
  "key41": "2h3P4XUX8NSDNaDg47THLEk5wq8W3EnpjQEbunxu2KN8nVRFEGGz3LGgm1cFcjDXazcGZhSDUxWwkjzAyEnkzJ9K",
  "key42": "8nLu3WDAzwix2pdUksGbrK5yWpLsMxAoUXgsNUCiyjUun6x2iB3pcSDRuLaKuviJnCGguy3Ve8zACHxVWq6cHHb",
  "key43": "3zd65yZfFdcLrhkg7ntEB5KoQDxbZeWceBwNYkzNnQfvpPVri8tVBWVGVYNwRtnwHrVbjaHWR3yPwA5Bjbk9rFuK",
  "key44": "5V55Ds27THnUDPuwPzUfdFo4v98DGtdv5hF4v5brnEV2xU4kmxz2hzQ7WE5aoHLye1rgoypdcAXcDjVhTSZT1ier",
  "key45": "2nuaU9FmuFb5Tgo63adms29cf2gbCxLSzH9LTxyaS71zDuytTzehkjWks8sQr6rVqZ8YXivSuhXXjLXTBnjATkpc",
  "key46": "3874Bt3XoacpCqRbN7KT9AwLFFNGYNs5P1J8MPXwgF4N2y7JvU8B8uxENkTUnuCKm2XGVteLdTbvVVp9hdTeMmGk"
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
