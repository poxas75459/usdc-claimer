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
    "31nQGZnBAXs8k3vJAfVCvj7N5aEdNWArQM9561coZEkMBBhk6vvegdTmULVFHyqD6d9tD9b8Ej2AHUVy7ZmFHoQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ffoHQ7ikeHbzQ7NRNbYKktuWTiFXs4K4FjhASHePSBUX8UwJ95FCxbu86hjmVxrwq3hFzGsVJB9R44vQJDHrk1M",
  "key1": "bKxh87WneQo5mi8zFSKPZiFpfMbEPr943sge2ys8DUhkiRwu8HcM7wjW3gFs4wtLY2RFjtXJJD9V6ecinQ2Rgpw",
  "key2": "5ru4r2vEmsivw7wCmkrukwojGjcSwLrZjBeAZNZPAGUF1a1oK8Fmt59srYij9pk2Bjb6zKUEsDPy5TrgFWiihxsY",
  "key3": "2TdUVrt6ujHGwykUpZcgBe3jMHkSnKE1HK7kmEkDV4STkeyT7SBQ66Y8MKo79YJGVgKDvaK9weg6U2xsPek2R3R1",
  "key4": "55cYE8WLnkcMLjjtCN3AMCiAtqi7pBW7vjntZNaXtVEyhFCGbEqyLgNWQRuysBhh2TB1TsurSm8BxZS5h1hxhbXF",
  "key5": "244zEESijT9M4CReFGo5UVhydySC3tg9xJtZPFctFVMW7ekvwEfcxC8Wra9rrzdLQ2i5UqizWwsA7SgbkFvBbR3P",
  "key6": "2ZjRByKEgu34PT1z5N58ksQwB5yk42yqCZfFmDPBxcq4ujxveYKDNuF1q8Gix6b8jdYZ2aJ1WYRdMLbwtgicBDkL",
  "key7": "2haUuF6JBWuV6a5AhjGYW9QeefVWQyDK2CrrcK7iQAe3j6pKhaLpRYnC5pt4SGKJRp1QxUDeCkFxwQUiMcjHd2wn",
  "key8": "BCL8nCd3WCEYehmR5DipsJDmBxH1n5pjqqZHyzxtQsZMnuDLq3pDfn14rDLjycQzvh7BygdfRCPMfYbyzdD983f",
  "key9": "2VugrWrkH7g5JpjPS7CajXHdyXATzXZefetXwKgm2GSNucdNSmWBpqrquWreb3D44hFRYUZtxX4TJmp19hV4a8Pf",
  "key10": "4XJUeSMU2i5xzssEcgxBFn4c8R8zv6tLGuwhcWG97KHEk78HZmYdgHJckHquHorzanmDpRMszZXaDBy29rDGCnw4",
  "key11": "2z2AtK7jxL9Z6iVDHGNQpRTnx6CRTUib32MMPjK6oDSUiiKeipnL6xhmgSFBrTB43Kt4f1NmgjLi31RVxx79486s",
  "key12": "3Jvgae8SDjGvRKc6iiBHZUWBLXaZoUJjGyHm5LLij6XH8bPogKCSSQD72qJ7hfA1kaGkQAFsfkP1zW77Lkhs2v9U",
  "key13": "3pmt2qghYFRdGiPDoBDu8zs4oyo4doMb6wybQ4fPmkHfCrcRtbZKenN9h4G5w2GHZZi7R2tETdmH8K36VBr6qpm7",
  "key14": "5Pf1AP9sPWHScg3fcWWyRtpAtBLqPDgtNa8Mi85LSoLAg7ytC9X9NLYYFfpbDLmMhJd7g2SQDrPGq7uE8oN7vgRz",
  "key15": "MYNheE1RxdBCu1BbccmgmoSjCmggduEvkoWXdm63RpRxbn7CwC5FCXF8wHJk2SBD8TwGS6HHPYzgBHddYrVpHpk",
  "key16": "2fFy6TXse8Z4yAhVxLHxpR6qupfQej8qBek2d8D8XW2dNkHFxPJRrEV75dkDz8tfzFwy6585NigHegmvSbbcQdY5",
  "key17": "3zw4YABTYjkrqfpGS37o3oYJ9ogXHPufTPLVGe3ZBVGzpRCfEaEv4wzhWFTDGxyp7kSBS65KPHJpKjuJwnF6rXtF",
  "key18": "2NfM7ojctcHmp8NSsvWp8yr5RgrDbKHf52aEbLMkE5TJxWBwNawfKbj7aqK1EFkSmwoeeeXUdQfRbgywjmrv3am3",
  "key19": "2mLd4XY4n8j7aA2E5QtasZ2kfVMyZx2LimUhHQ66MCoTXzyj2BfkxqkigJFhwHY79md3z6WUPLCDZu6vqqLbRTkD",
  "key20": "4f1K2kdtLp6at7uwjWcAY9q41m9zdWzYc55m5kkMtvXi697XQzA1ggQ3EmmHvsNT9Ab2xpKdVEXbhghE5LPp88qY",
  "key21": "3oiR1ZoxnQegT1JU45d3Czc6kHpxdXRV5zRX5Cz5yQtVX6PTza7qFYLu3UB9pYXhKdjKVABXuXzGFLrmQYougJiq",
  "key22": "2fqGC1k95Nq7VkXLPbztXGzCQAaCeTAW63vWi8gUs181StDRoBA9zgUQRt3ZaCf5BVEVGEGvmKudmnxuYCW27g4A",
  "key23": "3tN8NmNfbAHfAaFzGM485uiiek2Zr3oVXmZkiPvsF6e9inFmjV7U9CinSVkGcC7wkvWpUKUkc47snqMF3TZtZ78d",
  "key24": "2shqMddsgMLEspx4bnqocJ3zKZxiftyoF8ZBjA5ZreqHutY6a7PPC1uom4qd5AGvhV5BB971B1qcF7sBC62zHQ1s",
  "key25": "5S7efoMDft1J9oLXGDokzBmNRyJAh2hUdVzxZCecBrpt6KeTR13SGuBsNHNMiH52tdfvYkHPizVr83eAUiqu1NZT",
  "key26": "2gsPxbEwUNaDqwYzha9oZfaBRGD6Jtm3fj48GZhhirVsVqQs9asRJVjukfjChQcaySA254mahUwk2gpPoNzPqk1z",
  "key27": "4VPmPoEkNLTBe85KFwpveFTKpGZVDpkTmDLruGWQFeA6YNuJQfD93CmANZR8WYrwPfEosiRPfLiCi3tZerLH8xfz",
  "key28": "5Cv7ThUzjcJfsn7LZpSwSBeNvW6TFbzvgiJJMdgQL5uWcxHVhrSqkecbXTxZGsSEeXEs8zyX8cxfNiUc7wQVqRTT",
  "key29": "4AcZ9KVDC8aRcDJRvcbDGAM3sJjgajb4EJNriCtb4hKCBRs9eYUA19AzAhHs4gnMpgfJBpmKApjFqFoYxDuGzxZM",
  "key30": "5k8JeUeXNZffN3ThEdMHFY2GGrCTXKPoQoJQGDynbaqoyrzqKDEBJjqfaAqAp7dd4pXzQZb8HsGu9oo34oYDWcmo",
  "key31": "56VoBiEM4XVkVfvLp2xrYfuQK5HDB2VQU4RU6HYfeRSpkW7ghzBYLRnz9itiZQiySKsB6BFXaPmX4hhAuuoWm3Sc",
  "key32": "yb8mJacXxSTPUsp9QiJSEtmWhjCLjHdzRoTvoG4ZEMLwh39Rpmc6o5mT36u8hcZaCFGbdhdmjG3jzcjbXPThGi9",
  "key33": "59JiCYRzD8Ty55Db2aF3WgXdyt4G4LxVNxEspwMoyA7fByf4P7EymCEKfihrVBTCWKyUy2oYXLKFJZsdbhMWMp6W",
  "key34": "5mMa2rVRuvY66fstYjPnHxTTKoic8oyMRCSJeiSHrZ81pnM2xADGm6pnK1iBVG33DhmF3TJ1dL9R3pLYk7MtZrei",
  "key35": "5fEBP5JNfDLDX1HzCc24jkeUfGYLWo6NNS5C2CPpLKCLbm2zA1aNo6fL97zSua1xV7PFWEbft3mJLkYuf74wYczP"
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
