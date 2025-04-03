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
    "38bKjDMtikrpLffTwcwcJH3UveDUSv3U6d3UtVXwNfDiiuNTjAuwBezTd91CWV3gqT3QdLaBvnZiK9D3X3EUgBoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pg8GSRiuza5ymSbAAxhdcbvfW9h8Ftt3f9j4LVGeRxKeaoJs6VTCg8gUwTTRCx9SaNjeCUKhvYKg6jJemNmcHb5",
  "key1": "4rYJZ2Zd5C3Y2Ymtg19HQDK1WTAQGK7oCCCKoVhSnSGgGmqAB3vQoeZJT2kQfo26xjnGYFrJBKAzqEk2EGgVdkgr",
  "key2": "5ZmFM9yw9DEQxDZ3jPXLxVebU5SorFfFRvf8fN9LsgoAKshFHSJp4V3zbXDciJnBgaVP9UgZxP5xmXFymTSStMzM",
  "key3": "5xbD52SuuZy95wa8iG9bYPCcQD4XRajZ58CbRoiWTUSy61GH7kqJ6z8rpDYvmKuEFGBoDrcT7buPwyk4MkUBQwcT",
  "key4": "4P6z3ngwDjZWcW9Wk8uauqD415J2ivmGWxGdiV1Y78uLFnkG7D65aUrY7paNtZaQSzaVyT9yyeXicvZv1gP5tUn2",
  "key5": "3LqddrFtcXj7mPywAQRPDDvUKW9vZjCPmb9cBPTmS48X1LqBsJPXAcALwzm7KaCrUPiqVBLNgUfhdaFZWTtRNrW1",
  "key6": "52DRZWiSELBW5RhwPo82ZjkBxfWLuxmUYAA8EAwRNfjH3w9Thi8am61LzpdHD9hF2CspnXCmYBjqLVwqFSxoWDo6",
  "key7": "5tDtBwKeKf9XmYM42Wy5biStCVM3z9LFoCPrA3CYUaKnvbzf4hmaCVEFA3vXCRm7BMNaqWcYmfZS43QQdy6YYoaT",
  "key8": "2cqRCYzqTr2UvXvZkNSoyg8DvfMUk3QQZotRQx66VSgrsAQ9opBXvio3VNXifkYNVwSaZiFy9yAWLqJ5KitKyf52",
  "key9": "z2QdQwoUqjaV5gnogURjcmtQ7D3AmY7w1irZvfFns254r6m9vm99RN1ME6qxWzeABzgWgv2wr8kLa13ERg68PQc",
  "key10": "5g28ve3Qk5N7twj41qsvHP7nrjCcZcbcNYEcT55SvHi2d4nLtcWuKpBqyxkanvYfAVSWHJswPVCSt3MVRNtY8VLb",
  "key11": "2rzL4tRvYk4C7KzxvPHCfSavkSiKRr3pKnRKMcnQrreggnw56yZ4GTKFz4HqX9k5ZfdiUaxCvTbTRG5cbRmJNywD",
  "key12": "Lakkvjy7B5WJDndzJHUHkQWTH8sbTrYJY69RPAwYvvp3WNPoCYgVDWwdzMkRWoY3PpBktyXPUCtp5UKeeu8JXFd",
  "key13": "4gkCfbg2CTfV3aaHVnQEvXZ4XvFCUZHwAHdH8CmQzHYh1KoJ46Zqtdj3F1WZfxc6FBE92vXHR3FFUEsTREB6iwM7",
  "key14": "3KSSRD3pb1KY9kx48sVZtRoLN8tVop9CHsfHk9kE9YVSnxu7Qp99WCeieRHxXjhhXfdSWtk7wvjE5J3SEWiEX3bh",
  "key15": "4dQx47nk2RNJQ5iscEcLjgb2SRtDndDT3jbHmJ7Nf23D4UUNp1NGqCi7yPD77WZnthQVyTSJstQcXtfNosezGCPB",
  "key16": "4xrPfNCE7yBAsKdxKtfpkMokebvEa8zpcTQ8BLMBS8ZuR7PJTt4VFisvC18uWxUzaYR1oRTA8SKXjujFEqKByzwb",
  "key17": "4StwTMJUcDyWgsFe6TNnvzXxvbhzWQfyBLtBeP4Nw2jiR6dQyQuziT3niaKfDoMtjn4GLJpv6EFoSHDW3qJN6uFr",
  "key18": "4S6QXZu9wqKTarEd9Cq3Eph7UqnbbCyCgSBSFGsZegdz3sW8T5GPh7ThEVwwZzEG2P6z8R1Ajx3RwngVoQQcm7qW",
  "key19": "n4Xa4bEtUoevLmg3EANPvxwVQRwKVyxXb8Jm1xqi6kNk989wWWou1XmuBdy5oN6DDuSzQwAf4TTodD8ttVzWP7q",
  "key20": "2ZjS5EegqAztKqYD25jhRdPtCdMoyJqYNGEksc8bgSJnDGttQXQxTCDWCeLsFEeusdYWCgaWr6rikc7xLA6oGfY7",
  "key21": "3TA9pVBCj2Mnm7eSWYQpJ3VxonE6VRmhNC2sKvXxVrjLfyVWAxGmWiDMaZhFEfiDkdkg6HVaN9HKMU7EKDoRdMA3",
  "key22": "A8GxhLcUZaNZUQQf7AyA1GdmzAQqNDPM5M1rY5eN7s7ziMDkrsChoBKpFmzh6mm41BxoRfFNqUBzzmdvif5kQX6",
  "key23": "2ozTPMvJwGMxAgq29DhFyzKFPXKFbt77wisj2PDT8t1aRjDiwP8xK2DhhtX9XSNdbTxEEkk2CVbMMUhVPcYL76Ct",
  "key24": "2W5vSsUapPw8vTDFW8jBhaukZDVrYbwaEWmGLrDyqRtud3EwJDEgUzUoWv7xyHVrJbtqQtR5TZtTyJuuaReUF3Et",
  "key25": "5Uck4f4Lfei8DpzXqeZDtjckp8aAKqHKCq3pt9ePr7uoNtusWemPXtjubMyErDmjb4x2NKMWb4nic2bqt62xLGkx",
  "key26": "5JZ6nCsvfmytY9kFD5g2ZLVRR4jU9ouJ5PfkrTqeQuDKYid19c4zZJuNNhAqZG69uG1RfwhFrQ7xuFRUASZMVEUN",
  "key27": "5vvnXbfsWyiiHGWogucenFZBPx2BatvTokAwKAiGFYEYk9N2h8dWkyonxC3p5Q9Si313ML2LFytRyWovh778kGgQ",
  "key28": "35xXxEyLpoP1QUrGUhvxSrGVAH1qqjGMaTcdy1djiyeoSaYujGZY8QkafrWdYs5CaduHdAxAdB38s31akCzoqsPy",
  "key29": "KGf7ka5DVfoxFEj1j18coSHFP9SyHvMZQejoRsTmSZLZU8TvWUNSdqaqARDjVNiWBNqZRNnvULodbNrEDGQ4op3",
  "key30": "9LoLLwvfZ7f2HQB1BnrcgPJ1FMvT84k76QDL2XL3gxdqXiLrjPA3exWSqp9cPka3WfQ5VbbSXS3ZdmRT84bHX8b",
  "key31": "4VKQvPrfi3a9J7t3zYUWErHqHx8KUsbPyiqrz49eevUwQwAExxngZqUbYYhWfNeeiXj2nYRXUHFxmMtuc5q5CvS4",
  "key32": "5ymRwkWJkvr3niY3U7KWB1Qah248RZpiJG2Pqia9GKaYn5jbGvykMSb56ZN1JAkSsBCphWY6sKa5D7x5GLQQym6W",
  "key33": "55PP6nhY7tTLM4wmeeDtaBonLuxVf6Rip9dKfbNwbJofbf2yy2Ut1KZ6K3mRq85qj3QmsNNsq4RA3CRZLgQdeWa1",
  "key34": "45c74mVFnNSRuGgvmNdDkpJz9AySxXvar7mJ9JWQb5PHTy7qtX5VZoNidEbTbResskGvvnkGJ9GqKjrSYV3AQk3u",
  "key35": "3weWwndjKGm6zoU9GMnKMbv2aEqc3mmzRB4j3FMPBpMsZShkkYdFSBLbwGpRvzyMN4hBTXFXL3FucDzKXWF7bEGk",
  "key36": "UDhJuUHHWxoyDUmM9pnoQgBDwr2cPnGnsbEsyzV49Nt4Aeq89nGgL4c3u5XmuV9iBzEEpi4JkRsgbduNgq5SY9k",
  "key37": "2RuHWWK1oAUHP5Ps6RUW35Rku53d256pvx2yKzXSjEsth1pKMDum3g9KmWrWgxCD8tCuiHpwjMgktaZ8ZUi8jt37",
  "key38": "2it2hPDhwccMvEbg63C8onTd7wGjUHjfnuUVHkBLpmLmdQRCw4X46qt9dEUnn5Gtes4eKbVR39ZbaT78R7xgbrRv",
  "key39": "EXMSuh5Cr1GCWGFHF9WKk2rkjkUAwDQjLrsYqxinYcj8BtMZZw2LuvNQx9XcqCbAs7oH4knEgKkBApj8pWdZbuB",
  "key40": "3whFA9mvqYXYZayXcjUUUr4SzCfreajCXgKDwkFMnEDQM3j9mVppWhTh5VLdhqEaU3T3BGKnUr6waBQ1FFR28CA3",
  "key41": "67Ew1nxNorrAADox4iVaZ2oqgtBfJR7BPrZUWAvL7f2aYpVSrUE7PZvJcLf8VaqcZcqN6DqGbT6kfAQiS57xXNiN"
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
