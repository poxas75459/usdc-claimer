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
    "3pCqocprj127BPCMNtyCakWS8ptnBapYAJsXDVnFxKF3Ek3CGqFFVgBbUwDsgdE5sYHPKgEkxxdzkmp6ukVy5GKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46CLCVPZCs8q99gzZ2MMq6gamgfKSmkTodu15ExuFnMJZz5ZiCQfpu566B8zHudVXTNwZEi3MtPSVHcG6ShPs1uV",
  "key1": "22TSGxu7NQPRX1jLBLmmoxwZwHQierHKjuyF7FyZhg6EedFWmg4RUp8ZPSdcoXtf2cd3QaeXdZGMiyckfmKf8pXJ",
  "key2": "24mNK5SL8vYYdFo2chVazVowTo5DhckqharjuQSWUq4mXmcysdr6Uc9hpRw33ffDiQq5BYgVAD5KvCLbe788SQ56",
  "key3": "2CUAuLtSkr1rwdD1PQ6YqQgq8xmw8cfbEJHbmsibGqw9UhDdaHDYK9Xg9eVza3ZKaUc2AvGm7cpY3TsTnRfpFT97",
  "key4": "2N6TkamZKqJsKoDZYy37pfjmgArvPQ4HReb5uyGs2aWiSKfx44kEHjFF7xgM6czPxhhZPwSL2DWxjrCbahhTZvph",
  "key5": "3MhtJ4DB1Cou1Yfn6HZ6KrrhcVAGNgmSHw2EmouMB35zbkWLowACgTS3bwQuFpDqRSRCN3ewGL2LVNxBFj2hK2UZ",
  "key6": "34SGXcm8y5SotLJ64GxmCFse2KKFm44fcoxWrYpvn4ThXH5kv1QytonfX19XJyJc3zssqTHcxmXxkrLSkZXSnvHG",
  "key7": "5SF8fFE4ALf9hJ1wmh9PCREh8rj2Rcim64xVWWk23aRc2DxBwcwoPczmLom68TjwsGDtZJXKMkf4Yx7UpBuEaxmL",
  "key8": "4ofjeTT8kTCBWvS345RKsuRwcbZMJPF7W1KRCF7umPja37JFCG5a3jy8QKQ5wSGdkp272zDXjn2a178bgvavZdhN",
  "key9": "2vQRiq1HG4XQ9RAsisJgJ75tCNnhHMGY9k2MKCX4r4w6meML7dLWzKqowZQQLf1KkWXAwRq1u7Jo95tBj2uwZbYc",
  "key10": "2ryyHe7SsTDm8YjrhVbwfJYZGZ6Vidm3nFwb2wdQcKYVtERM69D1NZE1qisbWAZEytFQuZXKxVnjDymmeNtxt1ev",
  "key11": "DrKF4pMcYxCS4a2e5mFM3LhgWcqknp871VSsvXe94hotW7zGQhaxhKVQPGbUgDW71pKvqBaE456QqHeePbFJxAc",
  "key12": "5PPKsXptprtyLCptMqdw3v4gBid4jYUnVZzzrWZPNHpwJfzJoCD1t6QbHUYyVN9eVGej2LfJHhJZVSM8j6RASAMJ",
  "key13": "5KKEZN7v43sZxUVMBPzMzEpuGggS9qfaTZWUG6SPj7Lx2y81eXd4UT4NDJjLemxQJjdNecGhiysT2iq7zHdiSTSy",
  "key14": "g1iVJQUx3X4nWfxjXpWH5o6hbUJosvQpu7zwLo4CxRJYYRygoLcrMeCjsyFXWuf2DYSkziV4zui4nMwYaXEpZmr",
  "key15": "56Njt5fVV3GFoHgnFxymyh6153pc1wNsGYxqqzsDRvhPYFiiTe1vR4ijyuGqpanStxGMoXrUGRAyeWbAzCUqo81w",
  "key16": "527PTjgdeBaGGhJWeSRfb5Nt4u7sHCJTCbkG9K9jeY42yx7B3x3Ay1MEBiCDyiwFc25DL6t9d23s5AHoHMogzkYf",
  "key17": "5pxRKdSC4SmZJLhM9T8JxLTMc2yL3UMtQQi5WvWvV86Wt2SBpKgicmureLeScoL7bjdmeZ8c7LszaY5uHj6Adj92",
  "key18": "zfP8pRz8FfsRJEYgdq9cSNTR4SVnCKFAZnbZLFvtgi4XNJtNzu9F764TT54dEv7kiHCwqAUUnyHYsaHebhCdbgL",
  "key19": "qQJvpncnEGeKvBSRM5dQv4Wz2FGHHiaiRNj8BpGbHbnskVKN6fGBwiVvWN81ScbyevDV2hdHK4kgWhgA2YQzYZK",
  "key20": "5qMwvtNpnakH3iHbPvb1rjR92Bx8SjiZ2jM7XfpxGAZ3RvePwU6M6uBpsDNx2Q6A28FibDxmcGCkCG1HFabWWdPY",
  "key21": "3yVhcBgeJj1fpjP7cQFFQinWPPa9nrYNcbZsrJnMRGojPreA1e1aHGsNU16GFDBtNdcW51vxCdapXXdgJLGsMYxM",
  "key22": "2CbWVG6RdqciyQ7ScVScugxvfket7AsZboE4DsweqKLWQVNGeYLGg5pRcpifz67NVV9hNNaz8ZhmzUqHVFkwSE7g",
  "key23": "5jj9qjhN7vGYNn3mbVUQhYcWhZFFwJcGKosAPB5QjFuHqF4Vb9He354UHrXG4HWT5HYcbfnvP8Mz28i4cKMiHQ9Y",
  "key24": "3AMdcbnAXtoZa4Jsn1PBPRMRy9oNH4Kwg54LH5jW2iZedtjHXLBWRYK1A4rn9DBrBdFA1m3QspUfVNMuNoi1cxbB",
  "key25": "2em7nqaniF4G8qae5EzyKbgeUDj9d1ezPn7PiBE8P8MwmNYp8QvQSVet9xrRCJwRNjHuL2fhCtZoq47pcpAFdBRb",
  "key26": "2z6GtD59cPeZJSwgZS3RuYD7QwTNzaz33N9s3mHD3zDnxBbQ8mxvB47T2S7xEF4nWdw2KCMoij4hX2iWotEww8PP",
  "key27": "3qjGmkGQsAM9aTSjZBSdo2UruXEiEKC9HSn8fBsXiVQfvQrb6LNETapEVm3YYaTiBGLi8HdEkJxx1mP18KSaGnqD",
  "key28": "9Tv8wzPSykTKYCyEtM2am7UWFCswGfwiQ7XSMoPnFXUfA7WXhSiaGxHodqvMCSvvTVsP7ZY48n81QGEyuTwEcES",
  "key29": "49aWikqeC6rryW3Ttm2sn5n2jWdUizvZJduXBFLqRRKHfh1grxc4PmUhAPWXL5bbdFM6cK7tAmfQae4Xkd7TVicE",
  "key30": "5v7UEL9TxdDwjaGYNUxDZdW7bpZEjBWYuZmEb485XzaKck19NcvY4kq4bQuNEZSWZhFuFvTH2yRT3VGG7AKzFmvC",
  "key31": "2xVnhVkfKi68SDGn5hwfi4Yq827DFFgn6UhU1PiNzAv6XwxHS9d1v5oJki2QyrQCiADC49UT3cwF4nmUKsXAVm2k",
  "key32": "5TJmP6hqJ83KCrVR99sjk3yfpNRqvENDVbRUvXpxRnFJuW7q7gX4NtbvwzX8y2MR8GH9pZWsjv36svTqkLHgKH1v",
  "key33": "7tgZpK8DvXwBbCeH2Z3f9qpPNG9aGDzTJbKtcvigudYTiTzCh72azNNE1i2YxGq2K6YJmFtc6D1SDALu1RNyHo7",
  "key34": "2QrsnbdKSsLV134mpzuo91Vci9uyk9XEbMLU84JbYqXb4etHpWxmJ7W5J2TAwtPUM2me8QnRM9xMTKf2dbgoj2sX",
  "key35": "2r93iebsAkM8hakQh39m36vqHXsWpLVpRvYeccJPakheTdt4eBPz8jLXKbfZVAZxBfTvT6gbzfJ65M6fERQESZRt",
  "key36": "3Fe1fY6mTMAUsAh1kEsDSL8XCgXbfwoCrHKXMJmaKmwHQGH9VrdRB32N6dv98dHJZ8x7rbAUJaFeEN9LuBAaGTGP",
  "key37": "3wuexJs9zbiKQhfrKX7kNy6WUe9cadovtm67s3gtasQydbeAFieH17LKkqmwwt2KyupMGsG2CQvMmnsF3Ljcghe3",
  "key38": "56XyU7LhtMujsZrrRUCkKEYNr2TDdiZ6gi4beTwLtHVvZ7yQeoPAw7dSkdef39WVHKwrMfidM4Z4QeeFhRNBvwYM",
  "key39": "5q6fjqHx6xu6oLVXcJsivdTHTnpuoRZTFufKayKdLTk9MT8fnFdd2Bfwc3GUnRyKHXeU7EsoTWFH9JhKqZ4bkjsB",
  "key40": "2S58d3ejMJ7MVFLDvHKjfkp3gWrVY1TwgXYLn5sTVGLJmUV7MGHaUBPMmAxRropQsfKtP7uVuvv88o92cDUmXShQ",
  "key41": "4ZBii9kVMQm6RgLGsKi13tuEJ63PUKAjgaZG4WkMtZb1mHdcPh6sCocdcHVZA3kKbKkQbi8J85HR4vsZYowYusVP",
  "key42": "4HYM6qWGr85te3agudDNTDs3iXSbW28QJw4H41R8WhGa3UacahL2LkwwxRgrXQcxz1J7GHeWKnZYgfr3oYfoe7bj"
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
