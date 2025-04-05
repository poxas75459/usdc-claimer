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
    "4XvnzUk3qQQskxdcK8WnajQ87xgGEbK4KFktuh4QSdyQ1ZMdHwzPDnaoyrQEvzbMw6iuvMYM4SUfGZiQzFwXFhY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zc35MqJVYtB5e5vd7HfpV2kZnE2BBDZX8rPaKsJGriE5HTv98wt9m57sZTSu4JigMWSkY7xgdRXXYa2v48wVbno",
  "key1": "WiHPKgDPhRERXgoEvzyRVFGRqjaR33cEmNbk6ZLJdUaasJhs9cLJivRrSERo5H5kT8aktg4AyDtNVk1YRho9XXx",
  "key2": "35dhHmMiDdViyUcBRMkkBS7kr28kzSAyq7U291bHXgDzNWHE5BFybgsfFdsZNBu1wayesEXJcQMJQMN6QoZrBGAn",
  "key3": "63gZd14HrgPrSqeTtdCuAzmBYGE8AgU1D4LKMoi9vNcFxCNmR8gThLyQpktwpoQy8AtQc1jBg8wxrDMAerBTCxPW",
  "key4": "4DvjwkXbc3fGrxWeBcdkjKU9R45P7dX3PhT715LrEBfrZXkWBiKFQutwk4XmfZii8Q9Vo4s6mu67DgVMhftFzWS3",
  "key5": "5J4KkKDHz88if6gKyBte5pQ3UVkhZNQg2zvovTTUmuwPtM4VWNbhNwqjbhyWz25nfxkUXc2H1EnMtSQHjapWktkD",
  "key6": "2hLcie2xTkyuZVio3PrjA3igzqGBmmzUYQAfG9GnWFZwS86xmgcRaQQ7E2g2vt77wcMGAFu436TkcsEJTs7qDp6P",
  "key7": "2VCFSmNmXoujf2RW6y1gxSu4LveKGpu2Zskxz2FAKhtcZ5XyoVJ9NsVM4mFmxrEhhjf23CginK1UhMvgEiXHMHqr",
  "key8": "641xFjBzPEd8e7M9mdAMAP3GQ8tMt2r25VHcrE5JoVPCgBcw9APddR7P5rDVKLb7GJHRUJUj2QWtoJg5Q5m4cht6",
  "key9": "3WZyozV1xJuLGmcVuN1YAgGLr7SJvKb1UrHukMjki5qcPJ5W8f6Nsj725LPJUwWe82UdhS6sn9kUXuBU7muLZmBS",
  "key10": "4gxkcMSdabqznn6eTh2EXRLrGGVedVohsmzsSCDE3N4wcFyDePKRNoN3er23m3nwg6BCKPro56ohR7TVoSSR2Th1",
  "key11": "35HZ5SKrYfwE7LUnvhtaJn88pntSQPpJfELQ1T8o6PKW6h7uGQGUzov4cZ5qkjHpB3Xp2xJKtvTuGpAJ2anjSTJv",
  "key12": "5rvZLWs9xN68FpErBBvqaXJ3fyRAdMnVGV7jXArHX7ErhQqizMzMgqiC7oJds61RdyF3aMBvsJVBn99seYGmFyiN",
  "key13": "56wCYm4tntAZxN8jnfGExWeqW1sW6ZLHXAWBk6evQyfq1jPNBUZ1j7TYNArPbVav96h1E5uCKrrsZCSFpyGh9YzZ",
  "key14": "3T8t4Ai7Vcdonp7JDJAdedDiKxZJiA11VBfJ8j6ocfdWo1qn23fZHAYXaT87emmGiAoYeRkzNzrzifTMDPD3T5E",
  "key15": "3Ge2fDuuYYByJX7A3SE1WyeMkK3nW7pyj2RPBkv23syCsNcDqmjRXiubSD2RW74mTLC6xCmtUAzw9ujencwXP5hB",
  "key16": "4Q5HGw3krRmjSsCE5F34HWtp8UhZaqM1omhKzE9CXYQPFNGdVugdkBMVVHUYfmTg8ecCfQ7spWUw4YBGG7R91z1j",
  "key17": "3rU1yTQrJPKV2wRj1ZGNpoX5j7BCKyimTR87vhwvpaHzg8sxdqB5sC25Wo4fR2yhhanm66ZeDQzwPjn6ApyAuThA",
  "key18": "2dbjjGhy194xp4UCyzVXBSDZRrNqo9M48icacMXLmdsrTRPoFZ1bwr84FqD3SSRBbcxcTZygQXCyWdQ5ARCTCmuz",
  "key19": "gtyR4puLtpJgusQNAdmdt1M4932EhjPvLjc5XMK9uwFWQiT813iMxFqw1du2aMj9maKMGAT3sH1irCujHisdJMU",
  "key20": "58qVq4wsqaVtp7w6AQ4ADhTiyu2bGEPSYMqMDskbJTZHE4se1YyUAtgXjawaysZMFb7b5AABpYD4C4zL6hEuG7Va",
  "key21": "2gt8XUFKGvJMeSPJZFqapLE8mhCgwpsLW5q82A2vwzPugnMN3WQiAzspUrx4CpAUSsMhC2bHFMUAH5H4fJBAXWyb",
  "key22": "2LfKLPEAzo6mtRJY9ceUswUAeGH7KLjwy9mJXzeNmkjhZM7pRJ7PZHDDGoUSJcdQtBXn8MT5vEB9d4xMzLiD77oH",
  "key23": "66VmmPFkQHao6cRrAZ2UWFhekjnezFJvQg6tR3hQinEiYVsRJ1zjHUTUepT4zqQu2AaLogF3uwwDG8m8haMKoLXG",
  "key24": "63d9rBmH3BWThNqsefX1KtAumk6GGDC1tghLNXANKEEECSCyNou9RDBSKAZyBt1AtXy9qgadx6CB4NzQ7KuWioDB",
  "key25": "3p1r3mbFEkFo5V6raJD18DEJ6XjtBooLNTnes4b5LpYNRbVPtxvGqGo3hjUSxTCnVwhsotWjbp8oMHaKEU78e9Co",
  "key26": "5zmUYqHkjV5HG1wievvkk6kLgtUFMrCsjoxRFiuuMmEahCeqakUv3ui6F9xkFdpmN6eyBFAQ9gGh21kE64MsGUSU",
  "key27": "58EFLMnmgYANJvfvhjZ7EXcJoRQ5D7C9Aen4sa78mmip5jB6jFQeBpUxLmdzVQLja9dejCrRGkEdmnX1SXp6h83Y",
  "key28": "3FQseQxEwYhTMxnZ5kGq8Q2K638yNcBpKXciwj7QvfiLqxhLGTG6viX46RARGZxZzFBDtBn9GU2SoGARwLHwdRbL",
  "key29": "E2snCaWpYgzLVLQWvk6LpkigrMjqZsUoGREv717a1ChEiGSnLEhPcYr8T9UpeCUPUJ4ak2X2CUMb88eMoFtyvtv",
  "key30": "2WGiByGmrXorj4j2guW4C3qYUE9NRzyv5w3DLDV3CgtLarNRxGvRyT1xpkWn8iMZbWHkKgsAcYM3sWf3UCkmwDrf",
  "key31": "4SMvcCPsK4qquZPfdMtHHEXmHFzcU9YJUTDCsckB6HKYCGL4EFAjgihkpfg8sjhJZJAN71VpYhA2aReS8LPNgdcU",
  "key32": "56FfZ6MQDZEYQpFwc8g2aWg7FPCWk425jgfrtQ6sRxwuBZ9ZGMwBcMBtsbcKbfvNuJHDLAuM5mk4p4xDbG4zMzmi"
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
