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
    "Yk8bRAZrNus99hi7uhmZZHZj4m1WkEaQFzwxdyHcJ41dV6vBFoj5YwFnewtWWvFat5JoPzZs1WDt8PBMAPfQUKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5faZU1aerukFjPsEzX1oo7rLCUUtVi6Ajpioy9k4kciSL8C5jbMAEdWDAyjq5owuMnte5E8eTMaxtnaGEwNYB5v9",
  "key1": "3mexURsxKXxbtUPifgxFwVKcLrcS8QNgfrDfc4PvV1rv52PFKNVZ3MzhpagU4QfmZPQnvygA9KQ6G4gVcvLgCyuM",
  "key2": "5zixbs6eEzAzfCrV6GqYvX2BqkiC91Ef2YftoF3SoDSc8uN2TjYgcMh4776SjqaRug85PJ71kNtXyRmEUoaqS1sK",
  "key3": "3GzTHj8jDFzNhSKHe14j4xncGLq1aPpyAerWcuyEjXAbXaEqqp6jsRBxWu1iNWZUXHx66pJorL6MJAAswqK9GyNJ",
  "key4": "3ZiTAAQzmtDQeF17C3hA59fUscpjoqQKrEpDsm2d5aqZdVdebVjW98MkYPAjDV8omSLJMzmYhKoRZVoaGDSYjZNR",
  "key5": "5mbACBKuRc1TtXeCXoLth6pqRpNCUMmHsFos4ATgorLfKijfhWdkF1EDY2TLv2trrQjmiyY6Zai5sJTmjht1Eb39",
  "key6": "3nCHup6k6HCSSh3TP96kbypy9Tgd1QRFDks5awfh2Vh3YfHT1WQu4mczqqmFkrpcsFzKEyRbVGh7fvu2Jjxy9MEJ",
  "key7": "5ccGciSzEAq6Pq8agfAfgvnwL4jjVMtGWFXNx157qtsywQgAnEEvtEMNnmMswkbh4YYW8DHDDueQpiqGh3KCz7Gb",
  "key8": "42KkYqJVMgFdkqKF1F1ZXi9uPPam9b9LeacvFDTuWHBaGgKzhFFnUstrjR5VCPTESGxidAcAPL8Nwbr2Q9LZCJKV",
  "key9": "4Y2sLGw5JiGuQXzMF5h3nK5yapgCjnvPkYq7pWxNfywgdK263LC2xbRNQaBetBMm4TE2xKDUDK4rRDQWPb8EYpEo",
  "key10": "BWcvtxuieKnsEtWhGZg1jWTbgZ1PZxFsRKerpY6LwoBm2TD2nHAyFjZysa3rA1gLjd39H5meJ2rkv5qtPXQ5C6R",
  "key11": "41njF7fzrSgt3tXQ2wjWXk82cX9DRuioBrBVuvB4v8GmDX4AJxCeVL1Pq6CL6jTcxnEW4Y7tSSc8xpF8nMoiB8qW",
  "key12": "hqzWKBzx2nfoUFRLSq2vmsBuLpswviANMQnjrCFnhWHkxLe9tPYfmXMMnNTXsJQsb7wvZ5cMtnmob1mMbFxCeg1",
  "key13": "gopmLaSdEmM7QoRdRccEatTVVDDiBWVw3z2jrWBChMnFUptz5V166w1Q1Dhx8MZcVPri9F6VuxcLLEuZr1u66HD",
  "key14": "3GKUok1B5WiN5zBxURzvJx6bNL7oDG4ZiMjK5PsPNpStbgJtc3GuXTrtjcFt5TWWR3x8qCmqouMZKPLtGJBDDcbr",
  "key15": "4GMnaqhkNpdfH82QeapBFWpPDigoQDrjBJCet7atUGwWwEuNZ61AGjcgRWc3fpksvFe5QXC4YFg5pxBQzbdujT1P",
  "key16": "EFrbSSG3WZoZDfdUpd8HbY6UTZe54DS4FHpv1w3yfd56bw9qkdtbxEQGJ8zB5yavuh2khYV9YFnDNeDV1Kwd8rb",
  "key17": "KSxXdGnvj2po5Pc9sT5dowrs6c3vjczRH4D1s8Gvk2AgG5XrAqACRRBQpCBfcVtaYJFJWHgYU7NsBQhaiUEiavg",
  "key18": "xGiBJ8741XrCQtJ5ugiEiH1ntvrFKtG8LFUZGtyULJ6oavMR4zh5GwwK5XtjQ8WXAFyYC6YvQujM6EzypqRejfx",
  "key19": "28Bop78Jz4KrJ8maWWXdyRvSjWLiqrtqAjDbfYNqfG5zA3sc9iy3PKPKukmNxtJWxLJkbigFjx32MkCUSuNo2G8D",
  "key20": "TwpWwdG2GAeNpyLDf41F6eLvae6TKTYrsXbBharuTDqd2dDREVdSYufAXAApSJYNhDuchemKj2paVYcZdyA2v19",
  "key21": "566oNvoF77k24ePcK8JpMnkF3WL3nn8uHdiT3YDyx5NQT1AGbErWJeEo7SEi96MAyztMrC5FrhRFJt4LKUyRM5v",
  "key22": "2m8G4pjxRBmovzhtTHCqhPZZq7euP37ywYfQmvZSJcKrA29d41Gq7HNCfwv6fsD93bKcFNrZd7qJRXe9rjKRtrmx",
  "key23": "8Coe5dMfDG7XKyfzuE9kRPUp18UCDgpiEB9sQDUPuoLKV4GTvvPYGXKh4Yjd5TVcQ1ebqPj8Gr6pZYJphmxocGc",
  "key24": "5HLAcdrS2xZdq52DViFR9pQuQuJaQp6DPA7JFsAEqFPutLFdYGYdjdXEYAXYWVqfnr5QreKcgnreDWLaBXsaHVxc",
  "key25": "51oXVTZSVcFDNezzogqeNLFAmWaLwwv2yAzXKtR8qVbw45XGcTAYtd6boP9Z7TNbqrsCwpYZuws3F4wQz22qgr2Q",
  "key26": "3g7enD8MwENzcRDdvvvCA8k8dFn5wteLrr6wzPVcwhfQR9sCHY6QV2eYBkfzn41SavkSGd6D7EPzFigaoWQhFW22",
  "key27": "2KonvAagyxBpRHfukh5VWSACmqaQtADW3K4aqJhwFhbVNbzpbt4G6ZTijjpBoiHXV4co8d1etRwXPu9EcHZWmtFm",
  "key28": "4WZAewXYBEV3fyf76FiSsfg2kDjoofyt15EX54ei3heCrKsCgg39eqbFSZr6deVSvVRneNdGGa4obHcBe9bEVaBc",
  "key29": "57H3D6zYJmNckeJYdvLYyRFPv7N7kiagCcoHi2sronE9sJxSLW5UcdDWJRoRp4uND6JNL54rqCC8XWB3Tb18jCwW",
  "key30": "2pD8hXDpH56jdRoA2EPWzxo259u8wSBucFvXQpTR2koJbUVxQiwk5UPX6XbmjaXNyWRViYmkVxY8R6ezuTwiEmz8",
  "key31": "5g3KVaYvBfGfmHrxBmTBPSFDYUUTAmwcuaBSom5NxtXNP6gGuntrzCbctLWzxS4AuDu4T2tWdR5titoqZ39gPn8C",
  "key32": "ffoiHbMKouiZ2qa82q66RcoECp9vcJTEo1f6M4NrQnQw2eyVqcyQGJWzP8XxNo6bmZSxkaYSWAx83GmdEKTdTgb",
  "key33": "2sKXgMsxgQotLsxEwPfu1nJFWMNvd1LozQmF7goeZjH5HA5hjfFXGZpgn4DjT1y5jhWLPqfnrcs7TZZQ6zwZ6zGu"
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
