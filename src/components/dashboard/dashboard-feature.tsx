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
    "2naSsCk1xULbrEedGAT63SAayZgronaA6oASLS1vBznaHRye3nZGoLz64yng6tBDRCGw1rERCbG4sdBMs3AAeoym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NQW9uDy8gFBUH1TnPEnrb4FdcY6FdPaYESRb9owNTeXLbPSpHWzqDGR3rquySMoXRn5zR9MDDjVzZj9Gpo3dNaL",
  "key1": "3Y59xwCejWk11D6yCfAYk6gSV1euFf7gKEakJKb9vrTFnTMNJeMTBHEisgJkUR1dJxWVP1eTZG4mhFHwUShFG29i",
  "key2": "2gmTTwM1aiJADvsRFdFymvVxR9yn3YjfBXD97yC7KEzx4kfJMJd6UMxp7gg22zLJUbRLmTuYWyQvhotHNJi9WScf",
  "key3": "4JqJscWtxKHTXG5J7etfkdxnUE1RDmWd16EX1ZVGFBReczjiqi7FUQhRUUWbzMHH7zN3fMiFiigar9o4RQBWXH8T",
  "key4": "5yco7a7S3v1d3iinRQrn4xwt4ngTg4GtYdyizkbnv46RmAhH8x2QaWUms8PaPEtGnVqd3AJNVPvqetzXBMWBZyar",
  "key5": "2oC7WuYsRSJXmB78x5NtorBxsXcvFBF2h7GzehQjV1WNCT83hVXXh1DhttK3RxCkpn1LVonPe8M7Ze9mbVdYuze7",
  "key6": "65wCS1fZjAEhdjhf2aWk4G5QFLyfgzDxdmfAuqLcaDmg9TSptykkv9Xg3d2DTyZ1PDzoj23JnLvQP28juUZw89yR",
  "key7": "55GMFiVQST2f7S9GsWQv5hkWFRQM8pWobCxujD1mPNHpCHGzQrqWqFUuyqgx6GycYA1NArjt3obz62KhpjPrPjeQ",
  "key8": "3GKCEQSAcSWn4KW2LTSD6c7QLGj44qQtMsYCRsGRvctDWPPec7GyyKhHHYNJCEucNicdfJpVdQCQUdR1XfCPs6Ka",
  "key9": "iHmdz8SXSGvXdQVs4FnjtBeU22HFJWz39L1EG5sSwha3Nun3B4rvRPmCq2LP4smUqR89sBNyHa8eU9By2yC55ML",
  "key10": "1DbPJewVGsm66FEhDKkDw5A5P9DCdTvjWt9JCH9ojSLycoWE2v9CtrwknCnD8XZYWRtJK1BVfG8QNFcCerbFP9N",
  "key11": "4rRy79XWrBR1KWG5Jr4gz5Bb1u4Jp1smqYXVd9op39kKztGsNTrhqxr9giPaQF6iNn2tQqn1Aw4oRmDHeAJJpPkX",
  "key12": "2hSxj2UNh2aDJe8d1NfJFQYUj5QVF5NXiQ5V9C41Hsb4yhYmnTv64aMRLVPscps4A6A9223rTmjY3B2BUZ9e5Qer",
  "key13": "5B8UPDvs7JEhttxHiFXwyorBdi1QVYvWYBbM8urayfWbGaKaUfuDyaaVYGMHyLPLSoJy4VMnnUCF79SxH98E9BGb",
  "key14": "4ATGSVxMMErvLsK3feeDzoa2CNymYV61fKxcymX9HviemeQCQ7jxvLbuW2Gpeqa2sLaaZJhEsoSw5duntV7Zdi76",
  "key15": "3z2dnv1sp6rBjXxchs73EneqVCGMPxy2BYLqGbXWxoDiUBYLh3nSaK68rb3Bs7Jd6Z1rHbRAHpgXYFngTMLqS8wg",
  "key16": "38YJxGhdvyDwd2JF53nASMhJ8xKcJFJe1iopFJFJe1TnSV6ZJPGv6tJmDUVxZdheRjZ2dk7uvLGRP8YQ9AiquYnT",
  "key17": "22e2qjZDVk5DGH9ssFivjbadqQjVKyat28foZZNSAXBQqYuqsHTCPDHuxkz4VjYZPRbbDZsXvbdV3Q1U8qT6LLNs",
  "key18": "yh2aF4VJsaNE45f1HVTdAsjDti3VVLpxbo4Q5eWk2vkZP4VwKsMokFQxhMjmTf4FLgMZphfmjG7HVRRgiqzyud4",
  "key19": "2jEF51MZqBWjtQohy59FEjsGRqXupYyAopwmjLajYSA3uLFyXUZGuYXS5VKE6awLLwFrzaJFR9usr87eHnBirezv",
  "key20": "29JPVTBRBb4PtEzWMfjqeUfEjjQUzmowq8JQ9XpQKXbtwWf8xjpXfV2D1LZnr7wew338aSwpPcjJKecFVjkf8VaC",
  "key21": "3toHaSChN8tHtxu5HY5J7xXN7MprARJaEW6TiKis5hJJaH7pjiykVfTDJP23S7SgqGMkN1wVnMt6uQDt4gCMLUgQ",
  "key22": "21jm69MKopPgx6jWH5TRGZh7AXfHf8es13dkAEmdjFEhjNWE79S7qG1v7PcksS9fSyS3hFJ8x99sWXZp2mFEqh6z",
  "key23": "2DZtqcvkutcxmSdMEAR9WkLps1cNP77jiUxMs9MD1RGFdFUWukQVWWiDJHSRx3N99Ph6sCDyU3ubM8vRvq6JU7Tv",
  "key24": "3ckKcqJQQSrv6JzaVRzqiU3WUegT7s3P58dH5zenLT4u1qi7p5uhnkVNBWnCnQ9hodX5KQeuegvojoHBpCAnQh8R",
  "key25": "57iyvmCvyd8Fc3uarpgsA6EsWcdr32sSbktAxXH2sGsT9inTY4R5S5tpF1BkaMv3TWvDtomtg1ABBLA45vmuLFQT",
  "key26": "xQSH4iVF3ND9Kuvddng9PZHDt745D9kw3QDDmTkpajZFPveYzxDdsf3Hkw8GggcgX68VEXQgp3Mr4qsbhtPg2ZS",
  "key27": "3msKNmnFETZ35j7CscgDg3aSvydFTLmecsJedwenDVth3SwygBtZrrgqfqRSq9DQ51Ws8o7DuAqp3UbL1zt3a119",
  "key28": "3xazqrsKVRpcLU2EEckQqbdhUMz2U4pfWBas3qnERBGNf7KbDjdxhitwf2PpsuPUwM13HseLfZFCFcP1CGkxqLxi",
  "key29": "mUVZYtS9iPPxnEdUdN9XjLJfEXxR7r2Uipnam5zVoMjpeUHsCbj5aHi5vNqf9zw5AiF8AffrrcV6TASrP58CZrh",
  "key30": "5hs4pSyWNtGkocv1JY1cUS8uiHpgbhwRJxgp8LiECR8MEBjdDUdReKN8Wety892US24T3U61M3oWLydvkh2esW6z",
  "key31": "gpQU22PV3vows3PjmUEqqjJhNmcohtr2L9qw1SzDeQNo2FSMFbnosKv13U4J3duQ78oY7qfBCvpapBAB33q1kw7",
  "key32": "31X4Whx89xmJFDTMjpiddRmELvWtqUCsesEfmVbR7wi879pJBG9Q1yiPWPpDjT6sXUYvYpZ5yNBRJXmwiH6KTSP1"
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
