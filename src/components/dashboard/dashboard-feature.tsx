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
    "3uW2WLk5gS6UHGs8Am1YkkgTjiyzN539XFBgXM2oRyyAcMvc73gFQbKt6p5WzvxNWMzf2VRqDeGdhLewqRDpc8jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44VATX9pAxfw7Wc7unFuHHvqLdNis3B1AoNQcv7RcBXiZuYyn17tBrfu9cRJH6YFrknbwaeLDNbggNAJ9LScSiK3",
  "key1": "XSJUPSdncoX8Qogu6URosoEj2MHrPMtmkHph6qUDHEFU4tigwA5AuASZTFgQfVhvnBF72BxkXyfDcXA8rpGcNdC",
  "key2": "4MEh23jUqTTvSVfcq5fAmfS55tHE41pGVyRPjMfqh3vYz9u5NDXoYjAFBcYpKvz8Tve6zsPNsGMM4yGFiVKGfnHQ",
  "key3": "5Bu65jJLzLTyegfrncAmKyG498GQfbaFLmNGBet2YLcBKF2PztgSQYSvUXCWrAM8F2zc8rTpUCmQFukrZfmFAm7L",
  "key4": "uWU2VB5F2HLaS8mKU1MCmtHDX9NRCDyh8vGw1YhoQ2EkbM98fuGCUwR3kcDbembXyREJKUunjuHowCFG5bAUBpC",
  "key5": "2Yx9SJaUyvcCy44YZtk2ZsS34om71SQgkptW4H4BgYq8nw4mUC3B4Vrex71TiCnLPG4s5H1gfTmxFStMV3u1bQnB",
  "key6": "23Qyv3irSCLLkcWeC8XupT4ReSbg7zfZMfEYR7R6d8dLJRtiSe3DgbeaRunhBp5ZYtPNNdKBPsADsABNpTbPQtwo",
  "key7": "3d46ckZRtCXZjCCQ4dPyQ3ubcVHsznkefYFoqqcJyRDA7dUvkPMQzAdJR6m1Kz2Yrb2gP9aQ8wHWw4hyX2TawX8L",
  "key8": "2uZWRMJeSuqqT31wFGQyHQjdbDF6nKuY7UWBa7sWebMobjpPtsTpdQoXUNzhkjukeK8G9hxnayDRp6oAdjkNis6A",
  "key9": "3Z8G2oZa4j68DZedfFsSVfsdxPQoR6DFCdM2saRNgAMfPwZEMbrWGUHkpRgkDB9F4R5PvqmxAMDLgXYg7xbWuhJx",
  "key10": "25CFLWwkm7D4dFYS8rLY8nNcH6EGF7kxaYs85bqVmgxbNY5LVfBn7JQxXE9wL4gcAcvKigoDXs5hw7mocq2duQcy",
  "key11": "4URo6E9BnWJ1XW8eezCubmnWr5jq46ZJbCNh1yDZLHPZWMiCJds7HyagAHCp2p8G26vRYYSrqmdhYadzLEw6MjxY",
  "key12": "51Vq17jBpeAnEtDo59eW5zZph2YzpDFVtvZQMq9aMLGSCXSUZcVVkjFsoVreTa7mNW7riF7T7YARPyWcJ9k73gDk",
  "key13": "3bwKxfz4sFxYvHcYhieznq6ngaLCfMfVsumqYt7CPrZdi61qJB9E7okL9YRSfMQGQ317K83nHJE12rP4st2ZR8ht",
  "key14": "T6QjFVrgx47rJxa7AzBBwNF52Pfm4LmaJCicBoNVo4aVaoiJRk7Fzdi2EqXyC9xs1KTEeryBRNEumrpYXPqqJwc",
  "key15": "3Wujsy8wp7wrB427UxX32pYzPfeaHnyMUAo8HjHqJ38rEKaX73w2vqxHCRhGYN7KoJea8RU6onqGsxgX8aBds9Er",
  "key16": "2nD1edKYk36LfLb8LoCKYAUzzft4G9QZuU75NzHGsrwEuJCWQnqaY7HeL7qNEhaBicnLKhGGSALeRiSJUMbmZaH5",
  "key17": "4qHmib9Q4AWodC1kHZWtakVNV1cupaPpQ7JDfh1tGVk6tRso5NeoquSneAQSRcUwkmkE9cyGtu2m7dekLRCdL5pH",
  "key18": "3CdnWG5ZXEyu6aVDCCouUb7iJAVaTa8QanfLtwtgs7xXHTe1td9x6pkCynx7Y2n6mrtLrGZSz2djRws5u23VzW1J",
  "key19": "4LMkgajB8hk2n5BA73mqkDEsV6SkpNZPQVkC62DKM1NxzyJAUG58darE6uaB1ESHcPxLqL5oByt8JBPWKM3CBtnM",
  "key20": "5Y576cYxHMTJCBJbnmjNKxLEMDUwq5FZ43boTdzP4J2L4VnsXdSsRGRkc7b7zqhwGRRPA2eFaTJmG5UPp32t94A",
  "key21": "3yqzeugrP7hzA6v55wZQnUbbS3Wfngk1tNhG3cTNatXHHiLM77kCsSSn3trTtZF5SBSSMrfQseY89kinMFE14jfk",
  "key22": "5wATVuPjhEycY5N1GBMiJiAVgMpZf5WM1CtcKeDiqcjvPQffPpkm928m7xzLKdMVSmht7eXdypocd7gMtapVDJgE",
  "key23": "3TZzKQiFHCmhztfbC37cWVDEA2c3wFeWfb9Mbg3Efd8MzLGyXXy7S18D2rGTZfutrByF7YPBGoY5v3ctEfCHFQJs",
  "key24": "4uFwihttjfMpSc5DBd7XGBMyuAbPrDr5qbzwZ1YJ5Dc3gnGQRNpGX62b8HPz7TT3d4VjGUhZgUBssugddyJQW5tu",
  "key25": "2miPupaJbZVzuoqw4YhyoToZ5SNJgKis4N8AwtffeNQGi78TUw8na9VsaVENUz7BWaX51K4usjbhmjkSCgDfcPhn",
  "key26": "4e6THT1vXo1ZeexQzv472MhMYvanMnUGwdYmXyjfeL3nvtc2bD8yeV57UZvDEMcDktzKz5JJsABWT5pgDrVWYwF6",
  "key27": "5PMCqiix1Fb1hkAdmiYctKQRZojUCgyZN21tLv7e9hSLLa8MUvMKyVfjMaHG5dxqAXSgMuJXpYtfJdSPit8EFfJ6",
  "key28": "An2RrtW3aVVc4DAhrz8B6193QvWRQVLaEtUkdTx7LKEdKiEZaALZRbq87zSwLt5gkU5sN8SmvcmdWUYfqrttBmV",
  "key29": "3cheX3ec3v9Qqsv8HpwuGhEnEfhtThrVqiu4FjSp5zF7X5d9AT9K9bQrgZiyTGJvAvsJ8stvQBnzCp9eQ1rWDgvx",
  "key30": "Vmbe4jHXTRXAaMBwdQGPPUiprDfpr68wNoamohiJFD13fRNJsaqrsAC9WgpnNrRTjVaveuko1Mrq1o2XQEfF9fx",
  "key31": "5mMiTMQP41aFdKgMk9e9CMZYSSXvwWwCYpVM48Ysq1kTPkixHMYD9pTeVDx8vVbuNag56CazCfD4BQgdJQyftfQ3",
  "key32": "ddsn4a5zHgq2vHXpJNqjezbCbqg4Qrb5VEcnBHDkS1YN2VMDSQHp19LNUxQPziHj1M3no5Tkh4wchKbufQeFVBc",
  "key33": "3HYxtxX4aFPamY8CPhtFdCq7roW7kTHVYEr2EmVpSL72rS36ABqCUrjabdsCq8pcpeHTWykXSsmBkfNfxWjnJJvP",
  "key34": "39e2DrncHTNY7zaj9HnLQLVgadw3ZDdybiPvV3HZw33Va2sEUfD4kroqXgdVMKkno1XbXdZsZzFR8cnSZaZijFYB",
  "key35": "17SaVhfxriisxQGWyNTwuEv1wrb7RQzmGVb3vhEv2u2245P3UxXuVVRW9xdTf5N3uSF4THXni2vGHXRNAvLcKjV",
  "key36": "25C1AWhozxPYK9vRcnkyWyp3iBJmvBDiv6ThoaxhAU8pvpcw7G9LAgM7Lq69UoMoqLR8sQDZPhDt8hBHsQUxfRL4",
  "key37": "omzks2q1TbqeSRRPJad2a4WxNLcGc66gZGa62VaCqWHq7CKoxkxcge6aAAov7CVNnkfmwN449XtCVzFMQfPxqHB",
  "key38": "4AhK5eEzPajqQrWE1iXqyAWW2456UT17FoDngvoJHVZt7HW3SomLQ3BT9aDK8dzU1HRGTj61x4diJSkP5U7DQy5U",
  "key39": "3b8Hik43uHXRpdFSwnTneCz5pFjH81Qs5ypeJwKMExVGTk2PvBhCojE7j61r3sP8ifY97XMnbNzJuPoiUyXuJZRj",
  "key40": "n3PCWRjYvWkpuNbAo6Tcis5P6nycqudzhtwZf9FaynWuiK6ENkmGtVRqzSqQCgf2YA8Y8h6Yq5AtD8jWU1tFe6H"
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
