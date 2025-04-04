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
    "5yiPUvvZwhX2q3pKLKq5UBDMkUycMvLTjE8nsAHssTyYLT7Eo9SnneQFepm6U7p2uKATKWAGBUjXhKZ4VjVH4GMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eUCjMTCrJEUqZGUwkLGZkZVTFSrCq5M3q3xAFG7rfCbVPHs3nFt4Y2WdQBJgDhKrXs41JmFsG3ZS4c3JfSz5yFU",
  "key1": "2xE6a96agWruTRESdUq6A1p7wLQt6kQ3n2YaTcVYEffbMTzKhPSRDbB3TRTgeF1WjfmPgs7MosP3qnuGVFuazHSJ",
  "key2": "uHi74JHWnYPkBJ5D26DUD5cgaPCh3s6JaBZi6uCC66ppwdDKcXsaqV49gXauPf6JdxaKE1MGGHdk7ZeiQc6uCsi",
  "key3": "2SqgTUq76SR62GdrvkahFj6zk3pvBVcopkQHhQSWZZ8Kdxwg9werkTpYurFxhXiGKxfp3gCWWxFw1PUokEeki6fY",
  "key4": "7znYK7dqeTLNySd8v4fDxDEWn2doLFQ6j9QVKbN6nDfhTCETUo5Sg9ZJGvkz1miKFM6GncucqcRHuet2UyzYcWc",
  "key5": "tgsWtUXFhNZWwpSQci1jvM8GqgEtSioJFYPhubotL7YFvc4H1cxaPELbNpzHvDRkLNfTZVLhzdrRggVroWKyfhs",
  "key6": "XVxMbQNZEfdJ3dHvmmMprdCqPxgwaEsdSY9iYmPd34xeBfnY8ByT7orfwtHrFgGEg4Pu1p9f3au6xVHFyV3SiYJ",
  "key7": "4dNv3xGWEEdMSimqpYBMcqWnRRt7Qvtg2F26c6SvNyyn8XNdtFyh8tDR92cWTiBE7FJMMzFDTUykScqvQppxjGVF",
  "key8": "2QAfxvk2R4DKU9xsGRMqCHqKHZ8GaCcFQrA2bcRsSzANHcVuxjNxHekxBh7QYdBix2CtgsUgVQh57UzARq6XDnVm",
  "key9": "3axRNSaT8TGVLdxcekaRhppFbPXRmFubKW9hLA1kpjgGgwkTscnRdqsRezxVbGEGmeafw7Np2XJJCtYqymiJovKh",
  "key10": "4gZ3w9Tq5dTrW65mNAxQX2bDbVZJgFhnC6VWtwvdjzb2MEwmZucuzvv9vgTmPyFjeXJ6kkAPzJhEP1pLMmYQ7Ed5",
  "key11": "pYGo5wW73RUM85QgNXVbqocauEdgk2mtcab7d4vaeSAvbaBng1tQuVSRDigfQwf9rzccTMZt82Byixv4XVpdxkC",
  "key12": "64XVKFoVNgxhpCZdHuNNEDouYDN3Moq9o1U3qaiusW1WHDtyhkB9wScbWPjCtPTKJJoFnrz4WemLkJ1UcUsDEibL",
  "key13": "2JqHHPmZwmXRHyy26HSPyHmEhgjhQHayoLoxTs1X1D7hSzGXvW61exgAPyBQjJU4e5YXNaaxBqvoNBp6vcpmbX7P",
  "key14": "4cSJW7xB2E2qdAKZjshaf7f4gtA1XkYTWiVuJmmUp82iSf3Di7MjxPhG41Pc1JusuyY2Wrys1trotbrqzuTLZ2Ja",
  "key15": "2ZwVDC4j9AfWjaztVhmvNDs18eWgcDmq6VPPi5F2oGhhhPS1thns3qzKMYH5GCBpKL7qQ4FBX366nrDqZ5PhE8Av",
  "key16": "52VwMKoiWfsw5WGJMxzbukWsTwfzXDxz7Gqhexu74FfFTPBGcYFVXZf3iVA5f55n3gFFLmfx8TaCQ6GfE1H2WefQ",
  "key17": "5zrNGsbeCTACoZ8eS6TKJqfnkLpNfRp78ydeRLg1BpdM1ZQakLpmKb7hdxCdAEttZoQnjKNtX9nnhkK6RaFKaaTC",
  "key18": "4QLXjK7pddBFm5y5K2J3ZEEdmTd5iDpYokHBSXPZJgVeXNVbEnzy1wtRsXV9yLPDiS7PsiMREsLMn1caDPiJWTHq",
  "key19": "5RxJZ3qnCdtNcuqJe5T2NvcccnTz6pvQJ1kfyBSAkPortLS8tBewMB6SeLaYZ2UTUGLZyFYApzdL46Fu2iWCGegj",
  "key20": "4QfRESSMdWXkXsXBVMZDfh2fPQd9mK1pt5P2WSL2tfgLgCGoczyEAbgdLzvQ9q21zrCtv8dMdgoGQPiBBdr96WHg",
  "key21": "rVAFZcTsVyhQJZsFYFytzbfoctHPEXj5fj9Suudxxi2M1SnMCtsqHMESddUfdkyCLxCWkcREk9UeQZ45thRbscX",
  "key22": "2YmAU1a5yAgh3zvkX6amTHqzeouMHgn981HLXE4yjKtxjrT2NatuvXXArEapFLLcEyLPeh5KLMU4ovvWmKCA19ha",
  "key23": "4iLcyJhPu4QXpgD91HCxM96YEfwzVT3p3jFDrbJZSvyHLRGwThcKTV9SA1Sa31k8GLVDD4SdFF249mSCgQQS1Bs2",
  "key24": "PpM5VUdU5paRPZN5BKFfs3vqdekBoZW2jnw9D28xpzwyQhk1VTm2c3BcKZd5dvjDm3VGwgfVbDFPKmqGArspaGD",
  "key25": "3MAenEm8gunjdXUaodMBbk7AuLaCB7rF7s2RWP7h45rT6R1DSsaZyuTuXYsFCe3Fafpbpbz1mMtj5pixYwHoAUHy",
  "key26": "5ZY6GY9ifvE6SatvLgs5DBXC1LRLXgyw5DgAyK84P1cJkFczHkYbaf6SzAD3rjLFx8h7GzC9VSYwaNrY7U2reneD",
  "key27": "4q9pGW8tigkCu33svFVjucJbqfWz9UhjXo3nQSJwUrfVhdtSoiSrFMUGGCvfkQ21M7bWBGHoWrSSnELVGV3fKnyr",
  "key28": "4MRYdQfXNtLgEoB2F2iVMVVXvmjV6YxZuyoHPPd8VcCEWFsZWTSLhxsfk1xkQaN58K9CS5MXuWthD3Mv1UcuxyT7",
  "key29": "2RCBM9sGqQXPAn4P8VybYRejJzAa6b2Fh6U8vo9nAsxxi4j8AD6zHiRC6NidBXKdYgynBxb9hYiskTE5nbJZrKXT",
  "key30": "3Juvnqw27ZH2GmQFUBrRGMuH7NQ8QdAo9cHB5VLQyBpvdFTJCoLqbg9nBHUkE3onsbyWQczAnUDiAAwLroBEa5Xi",
  "key31": "5P8rqVoaoR8yMSPEcpKoR1871YNmUGnbP5zQZ77zk7USKoMBYKaaeox4xuhqWpAHN5DjphFP7AGoTHci2vZQtUvE",
  "key32": "2bNck3V8NSFuc3hmBCsmrhbUsUAW2JjL9bgteL9kYkLzcW1g2bfWBXUqMSHRZm2mC27df6kkYNYWUcT3FtcEvL3s",
  "key33": "2aTf6gZHk6E4DjaWfP4Ft1djgxePv9iNzomq6qE4sA9NaEKjdBoLrRtouHvMg4XGWi9GDJC5jmPhv53etr44ZYAf",
  "key34": "5W3vRELLz1FUyYXkmbriZ51ctHwbEJWxEEHxaRPWWfCR6oERs2Vuga2C62ApuhT2r6uhWse4q2kznbAcZociSu2p",
  "key35": "jKpjkRDY848hqBPRZbcmwBvFY2P33vc4GeEhMcGfbKmGNPPupKhHaSFhLPS6c3YBvVrxmvysyTLmRgZCF6d5j6S",
  "key36": "2835j8kmXArKcJEKitS9NiAYre2WvNb8gLFjvwuT31QPJVkn9abDTr292CouLCH1zCbgGVWR8KyunL46oe1tYKSz"
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
