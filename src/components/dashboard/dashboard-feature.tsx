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
    "3GkFoDhvWmBBJtoevAyFB8LceoSaYpibikuevCpu1eekDVQuBCm2heDjSHwo3Fuj4SvqCbrnJpz9TdhV1o1AXCsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FC1LM4AG11Jc29o9A9CZ5gs5nmY28YPziBg2EF12V4G5wtBVhUFzZaQcwmRoQDJp5xhcAdS53EGJecpR3SBexzZ",
  "key1": "dD7wtBBCWJuMSLQn9mQAtEuNBeWvEuM4dAEMpQKBCwxFGRVLqhWKtH4JDn4KBB34f5WTdmHARDo3Y5GLKxo9ktX",
  "key2": "62E97KQ7mUrP2tzQraaLFk5GC1nKW5onLL19tyufRv3kmN9o5uoAAv6yXjgv4Acjr5GU3VXwAAfzx8dtV4VuMXDJ",
  "key3": "Q9QCHuB1XHKTy644KnUx1BgNQJvyd2FjEMCEjrJxSku54x3vjAMYHjb51K5CSo17XNZHj5HhspUuJBe3aM2emEp",
  "key4": "45CKjwaJiFwhpKtfDj1sJsX3dM3FNm65iL9RLtDuS1HVYMAxFjYNtryG68nqYKtxnMDf79zRaSPoxVVfaGSUWbLK",
  "key5": "4PyyCPYto8a5JP1DrNBcaoYiQ7EDHRTNwAYDBzQGCP8dp1b1PZYwZV5wihjxHod2zM6K8QUc6ywNM3TGaRFUA2jd",
  "key6": "2ZN6kAJdFm9bLJGiLKfKAv4ekEDPrA1qqjn9Ttfs7A5fFVL2eqa2rNB8L34mi6Eeb3oMKGtNjtDXMdcEB3irMSaQ",
  "key7": "4XxSiWdQrjD61fLM3o8CBu8ZqG8L9CfyFrHkpneDm4L23PcjEuR956qVs2hHuNYFrRqpLGQL9fEqg2iYbxRoQsNt",
  "key8": "66MJqDFyY8qfSRYT9qs31zvrR4KE8qgLWhE9jyyQZ1Dvmr3bxXnbTJGPrRwBqnJSKZWvGyrPxxhVC1FFkEPghQmy",
  "key9": "33JXoH9AAzBcrRqRd9k1rAEH3GNb5NkYcVcXnxAkz7TKKxXjS3D81VWJBgfEiP1AZwJCQFHmAGStWHtHC7RR8RWd",
  "key10": "4jBXCisz2B5eu53FDhUb6TsGC2RBRgxETRFZH55XWXMHTebBU8WBJ6ZMxJ72h5YSoNQakguxcJkHDEKdEevrFu5r",
  "key11": "2vjExVU8tNW1PVyu9z8fjLnqRiG4pKLPhBHDmfKfFavqYHn2YN1XRCNq3GZUSBa8UotjJqinZPgdNiHQxUgFomJc",
  "key12": "3c1nQMF9UKFzbR8isPdxrZhMziRkxUvGR3hLh39EmgYEjqRbFg4LtDT1TaqZL6VV1EvkMoV1iaeMPfJC4pAijuAQ",
  "key13": "3AEV5vcNYjm88V2RJTGgbpru2sQCwYcmeLyivL4fBx98NvpLoBy1rSxmJx29YCJuDSidEzT5SPM1dhyLfUmKG5B3",
  "key14": "3tGWu21Txwtxqo7rcuaUNEyahTYML6o7J2c67e1Pjg9biEBsySVneLTJLwsDCC59cr7zogKGMcfC5uNaCw1CNDCN",
  "key15": "5gBPeHBMpEmfnBhHv7WEtUuHV9aExeZUbrz2zShfcpLbmPTyZLJM4qFxskdUfwYdQ1iwKrCu9SsyMBWNifTZXM8T",
  "key16": "5NxDbeD4nU5RWint7oHyYJ9uWwpQEZp19x9vkrkChtUni4SQrqqTSBiatSGBFpVkk1j77wguhGyv19VGccQ3zpFM",
  "key17": "3wfxuBKTurvEGjUpVbinw2so3gTBF3GSEFfDPQ81ztZzPiTwuAYSHWA46PJejpwBEMNqkazXPR4o45pGjydbbqtD",
  "key18": "42eMtbzqdjSaVSujzdg88pqvDkgx8t4BA4L6Grwo3rXEetgiQTJ2b518ZxeLWuXiWCgQyqBP5NgVHh7YmFC7cLNt",
  "key19": "3jSC5Bxpsu4G4AcoaRUCJw11VsSsF3PKFqB99Q5FsaDyoKJxWo1Wdr3ZdqGBUBmamVrkR7NZxu3N3jAS5nn9S6YJ",
  "key20": "Sax4pUc2tovV2UNjZktMDvKJzJhXxZG1csTV55bZyVK4MLJ82pdRjT1cbsgvdpURYPTTzVxweEmzBKNGyA517Xv",
  "key21": "3AYqYUSKztRzneZmR6LGdaSLmfAm5C47TAhehEm8xHtKYuH5Xusu6qnMYPsT4A1XCZvc6V6z3Fdzg4tgqB7UePkK",
  "key22": "SM9BqzMbU5sbTjNumhsUSu3P2G2FVV4icMfn1pSeQgtw7Yyk33WPKwYcgpaqxe7ebqZ2ErQCVQ9TLFpdPkoRrTS",
  "key23": "5UyevjzTZR5JJRhNEun9yb1GCLnnSdRnQpq4xXNByYb7dG8p1NWfRvYo4cMPxuLwXdotERokc2uaGF2eCwcQFb8q",
  "key24": "4begrj26BtZ2Bsgkpi8y2dRt7o6oaX3oxoQFiuad8UheCTK6NNujgafuefHk3ZxEM2SYvdJHsZWU6L5Jz3NAFHab",
  "key25": "MCtCP1ykfdAf4R1Q9DVQPBKgTbTRY81gJx3duCp25nKANMQKLPndmD3PoKLH2NWcUtkpFxShLisfvq4uUj7GXva",
  "key26": "Xmqm41gsxeibpUiV7rgaAK69NUA7sQMU3YUAaNiNYZzKmdDbagMN6oiFjAJSF95o8cjcbe9uXx7FFxdKy8ABUeG",
  "key27": "6JTuTGCi6jmtnBPRxbgjuJaD1dTyv7jCgM9pFDuPexFU2CxAYK69qm1AYwYw26Dsnjuceqcn6cZAmmcfFKbHsw4",
  "key28": "3BiqV59HRPQfGoNRndUUNczwa4C3x4Qw78aG8x9BDVEeEgYyUfyBjMoGByJjKmXqTb1CDQbNi2WVudf4Tdzt67K1",
  "key29": "3QZbBctE9m511Hk9RLK8aKV7JT1ZWDGigMerdo7JayvJdndPrXnLgiMLndn5qLiZE2zj3UqCkDVsZ21DmFWseFVB",
  "key30": "4FVuQ4zGeM65mbfUYpMsVU8iFTcYvJeiRSczZriKrMNVAkmyfJnFMAsaTPCY74yb3R2N9Mb3YAJoyGN1NbBPYYLR",
  "key31": "9MvZffkXV437MJGDGQFSPRtXuu536pYm1ppTRMEKAK3SK3uLYWBxuyjB39Sfae17YAK5YYstXXau41kDx1SbHdB",
  "key32": "2MLzweRLrqKokXf861quGLCcox3DGa96szBFDwq74njj1eGK3MNT5FsvpPhkf33beZ5U2roNTTSJ2Ue1dRmXzvbi",
  "key33": "2No1Ya6QkDEUuMqLb4qVYc8F6SPDEtSbN1CWRNzfpUWnvNtbHKZXRrFM6UUmUMUL7ddXdEP71qWR2kVSaDyph23i",
  "key34": "LkoCnEiGeHujKqgNfEkqtcdGVzjNj9sdhzEHVFVbZEWokFf4PWrPSrZ8dE1sRf9kYUpu2GmuqXHfbdn8ytZ8NxF",
  "key35": "4HKVEa2QLffbAhZD5ukQuTbzJJh142iG2urtSRjJPFo7pN3HoJeLGGvKhsz2RLs4wPwtouzkE2zgwWQt2aZrWdXR",
  "key36": "3wBNaoAzhpsb6pZmGazqBCA8oFy8Zkp87AvNRZw72VRc7AEPpvkGM9cidMQEiPDbzSZyTEZe9ibzKadgp5UhhoY2",
  "key37": "2HAHKW14HWzAYiQkrtaJKa6zRVH4dZ3MPZr7PvXqf6VYwuZwEqegn3wpSAFFwzRxxK5L5MMT4D39ac5iMhkQABrA",
  "key38": "SrzhH7tJqb1Gbm4Q4sbFitcVHPLs3kwsTqebKRmNanJvhhkw69JpcRPigNT6Lh2BjAxXH5rHjqiyR3vNxF9YgHu"
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
