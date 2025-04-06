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
    "SbreXgpAWqgXqqACMnrVDsTLe4VUcapWb5f8Gg3udU5YdjkuT8PtA8RjfprcYDzLn1LP6exam66qduPDrhUDQWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPAm11M5Ykvm1oz9zoajXzofwcc7uDGkCB1nMzfdFSHwQDc38zMdMocqNuiL64uAz65nhrjfXKeN36KbkSsa6nB",
  "key1": "5QDfZBu884iW7oajy66iHBMYHpEQGcJAJ4eh7YcC2VZox9q5Zfm4PWUJyXzjGoDxXAJwP8bACbEhu3L6UznKbGdX",
  "key2": "4ntcRAtxg9vyVD15q5YeSeNvj1zZfq6XAsnmfHDvkAADjAXMc8kBTSzYxcckf1gJcob3YrnKV2pJFWJVpZjRKftm",
  "key3": "3DffdbX4f35bqXUotiigTjBMTscDj1cQiDYcRyEjT5ibngpy6s6VFtGX788ERwsrdGrnutSN23Rqmw8UJn1tBuTG",
  "key4": "3unYjL48KuCGLuB3iLr1DhSQUR8vb7KfLhr2J32ZLhqxL3kHnPokD5EoshtYn38gSg2T5GnKLCTtwRt5d2AZGDB5",
  "key5": "kng798i6e6m9QmSPXtuBCFS6D5Ydi92kE7miTUd5DFH1nMS6zGQ9uWZHtCPQbuaii2MsC611WXMw7pa2SGHi2Hy",
  "key6": "2mfRssoM7jxwQQcakD6N34ZXqmsVUdPTcZuaXxEQU9LHH1tSnfpMMEXaQotHJmwrcbBrK3mPStzENjcJN8ARqK9o",
  "key7": "399fod5YDUQYnNbFaBK8KRXbe2TBTd38LFkSZGEbJCGFouJY8JQEQT9vmumiuXAsBrSoPo8nE1DH4MZEFGUFB8LD",
  "key8": "4TYJ9T9V8hLiesJFnSrvws8SkuoKPAALLB2fFg4yeDMr1anLoTAmLM7eSRDX5n2Ch4x1UbcRoWcGkdVaoE8Ng7WV",
  "key9": "hXPiKKuuwyAwEsuwokFxVfxzWnyWPj6iSWcQaXbYQTjkJfcGWYqDQmmdQxuBC5dyuGE8hSWvCrzvJk71yMQWnbJ",
  "key10": "2mWaEuAPyrP3FKD795gnpe71p28yE4rSGVrWUT2opJDT9XtGTKpKoXzUcr6HoeHKgPaCViw3UV2hPeTbiKzSo8g4",
  "key11": "2wcsfiigFrhbkSnfqMtHUHY1Jff5gZsULrEj8gLpNgzEUSUneQFL4r7kT3a2Gwm4Xmyg7Lhym52mgLKNegxvcbKC",
  "key12": "4KLGYCkSrwUiHNDJt6cjVbxctmbUrNZbz8EBPJEFTQkSBHoAAAupDYb6bWQp6EF76kb7DFxKF3xktcgx9kLYrWNu",
  "key13": "4MzAbAxUN8e3Z3f68roq8EzRc3FdCfU4bZmi3TGuud9gxe6nA2zSeN22NqSyCdZhJhWxX2Y25NutbfKfQXpkH63g",
  "key14": "2BHZiVqffhoPxTYSZS3FAK3iGEHJJ3a9bQ18xBgrjwdJMTzSPWd2tnguxExWtLMfEuszP6bSq9wP366ewyLpd1J5",
  "key15": "4EtXnLzcs7mzDyvfrEHmLsuuAYJ1Vs2JPVLFSv8bWS4iikJmXrevCfbVAnAPxL5fYLR2NLK79FgKzyGrz3FYDPG5",
  "key16": "4pGHV2mKktW8j7LszFmwZPZW4bteTA8kQTk8khimsMhSRtKo8dNur6cMYbgBDvqXKDV5DAxSRkHQjoGGdEhRBFLd",
  "key17": "4H8NrVqXb5s6PanBq2bKzaHaf791ZjaTXXDAXiB4sANnpgKJXJKYKk7FZFqqqDuC6AVQrcMUFmzNwYpSrK1j1fJk",
  "key18": "2x3EmekV3fYWimbJTeknz8kFxMgmW6jTzBuTFLqtwrC978uVxd9qfqycYF5YzfyJyHGRxATmKHgG5TUzc1xHzxkL",
  "key19": "5E1fzzNd9bXwzXJPGv73Q5p2jZ2sct4mbC4k5MZx9qsRviXFjuyTA95yL4nX4RFpf7QJSjnwngtcuxdxooQMLwVC",
  "key20": "ASLH3F9vxLkmTiYcS7PhAwLG21CuEUDsb7cng1Y85JoPBsqSP9X8EyGPPHg37iP9cY1XWbZRvndJFsyEmqaDftu",
  "key21": "5ysE7MGHXPMcLSVkPDJRyeiANq9HScjRXtJnsPU5SjNtrCe7BcYhL8u9awEVPdvBeLiMRKmtwnxCLX2oySoZ3jfJ",
  "key22": "4V7YiwTdLq1nhZxDUJ5MBXoSH6g8SmvVm76XoEFaXF3wZhG8ubUcbXeqxHEe4JJ2nVXqmQ3phTt8N4rwTw3bGEWj",
  "key23": "3aA8h69KSdzJtfGbmieUcGaMa4xVyv52PFUHstsNQaEZmSihHUSH1CvGzFCj9XccWjYqS9L4JoXagMeqPf9NZd7B",
  "key24": "2Ej5EpJ3VEz9UdYAHzNQz2FE5Q61Mi3nTMDouGRxEjGHjMHVf23MYyJWRzyr41DZzj2C6HGTa9gwtNhJswpfzKZJ",
  "key25": "4JjnKKqqYDWHSwFyXNex1rEuRzB7FpW6yPL2Qi4uU3RDg7VGSaoo4tYVSCCRmiDPb5JFcHEjxRx1qRe3MS6S5zxE",
  "key26": "3LydjRfuDdFs3FRW1ybTBCnu5vir63DM5gnZpvuSS51Gg5GNMqdeuo6PG4HJb26RbP2FHKa6aC275Pu8qTNhh47",
  "key27": "3A1teEkPxaX8wA4ETFL9mAQXUnmv9RQkuwtHGT4MZHHtpwUNFfjy9xDFLY8vGUdPP36EwV5PGR2JCiFv6Z92Ttib",
  "key28": "5sEhbAq4Dftu6Jj2ZboUM4pFgWCju218xCDTYbxndVGLG37cjX8wpqpH7W55YEEjv4kRSwVs5zKfimMsehrgmXXh",
  "key29": "4dwN8VnVtKr5GUN7vECgEnPXShL1x48LeypoSMfXWg8P5QKm5G11HaSWrYgHUbjoS9YJMb8WdkQGNbM7SXcyDM8z",
  "key30": "5suCTrGMXT8gys2gkDvgGna6VamQMciXw2rMXxPoi7xXAsktgrq3JGXT8KWLYVd9kS6tKmpredp4jeAQJ3TFyDm",
  "key31": "3KrpCzzxpNTDYFQmBdAGfvsuctjTgfwu342j5MLmdGf7fLjcr28B2Aaws6xNBzRc1d2Cuz6EERHbQe7V6rQgQJyC",
  "key32": "5btLr3mwSqArUZDXe37Wvz9MfBsNrdDwHE92gndi1L9ArRLhFkx6dUMFjCw3UumiT5ksjMWsbUhf7ePcibCTufvG",
  "key33": "5Xm8wmpLzkEYTVpNi9wKA5vNLUvZ7bBtjH92ros5sJNBpJwjwk7aWZ9b2yffge83QdFePTEcTHZzK6jUNMidYsXv",
  "key34": "fv4Y1eurXM8m5EDLtr4AdyiuEbqKHayJuPb4MtggVFoXYCjJirW3w1DLnNAGxXbVHWYuzyvca5di8Q7FRYUuoLb",
  "key35": "5VLhVCCUNp981e8G9VSDHMqZra7DbQU2SdCkpLsAypjvHAJBaMbhUAgWsMi2V7s44BseySTfAFPLqnFMzYcKyv7k",
  "key36": "wXKWqZ5mbCSFqrwegg5m1pkX8iVZxGbzNniDpz763qCH2hyyM4QtcLwD5v7XYSvXaBbe2GuqYFsLu6F94uTtPmf",
  "key37": "4jTs82hVdhFqwn4vQ31JLJNyESztiNZMsnbRoGWCu6KwVzJuNA2NpPnyBHRhS98dD7RioceuWkCdn2oSE3M1SbkC"
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
