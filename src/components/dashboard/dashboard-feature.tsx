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
    "4aSb3TUHFoA3cXSUaGPjaqfd8FBRRtrY2vg9NxLVrgyBMmdcBmoRzMW7rfmusL3DUfoQiji55rAA13kEG6z6S8rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gPrKMthiK8nAzqQbkyuCnicojf1DM9S8bRiSBV6Eg4YccE2NfLxE1Ldvj5toQfNfhroPYMwmiJEvj39z7XNEPRE",
  "key1": "3uSxWBCx3tHN7mtCTSc17onwSQdHWBzB2NC36iB5x29n8zWm1sonyBpHV41yRmRVfXgEvd2qMhCEyVCtdA8RyAUm",
  "key2": "5m13KbMq7xeBmTy4ZCEEEgfAdL4sRwqZneh61fghszsE7MDKW7jRhK9Mydz9GDfp55Q3KfmVAqgZTaAC1Hj1pNNT",
  "key3": "4BRZJLb7Sc4ZnFFnqLjnAKqcZoLB3vRCr6mN7wafAWbfKPirhk1k6QpFR1vC28J3nBndaDfs2ULprnjk1HZjRDxC",
  "key4": "65yzdb18VP37cpn82idyfo8uobspLGejyihQzmyKNTcZrpV7FQdFHWmY6vyXTkbMX7CXYhgErj3Gg75uRf73XqS7",
  "key5": "5QgS2qzrigRCP6UPTARJzFqjXhmJnffo6ZzQqjCPB4dLUHojJbd3JzfDGdihHDLLYC2zNziEd6HFCe4NzziouZm7",
  "key6": "2GDc2A4wMWhaKVPhGCjBWL6pWL2UcAbDrdXrULChUo3ceQaDSRLxTyTSNFysR2dDocb27jvVyUsDe358Jui3SNrv",
  "key7": "5vd4gZNDgNwDCB2Zu4WxLfkf125xRRb7smaXGF9QiTv6e6ghQPgrs58baFn38sh23i7dk7amCce2rabVkeK4YDsm",
  "key8": "4qcZXM8UCYfvib3PmE2kPsKzkbEKa1fL6boF5MHnmWnKxMMgtmgq6XsvRYERdX5TdGsyrxEesobTCcuLbnEZyY7c",
  "key9": "5F56oNjwFkM2qfm9y2eExUYKfufBydTZ1YFhH3G99iWXLZ5GWrMfWdhPqZt3FjDvZLpZub6MKwvqwe9Kvffw3zZj",
  "key10": "29mYbDjgw8PsXRhHawtfw54TBMYauNUQSG9yaAdHtuKtPxawkhPRik5TGX7tWiPWRBcBWe8guctiBuy5aQt933Mb",
  "key11": "3xX8vT7vTLtaB9QwWc5KiwzpX238oUPhpkHLJMHRbpjS18xxgjGBr7SoeZ5SrGgQKFiYqymuCjYkXUZJSyQXaDtd",
  "key12": "63zSQH7oWdf1i9NMowhUYf3dLd8aSFuF8eGa2FHtcqjQ7DJWykT3BcKvog9enBJSpBqBkBaByEi2Xe2MpR9qKE9Y",
  "key13": "2uNhhNHn3rCdZXAowcyTeeXfxiyzC77uGQyVgSeE7kboMXFcBtFNBfuz7KXyf6DENpFfaC7JpWZiZ4t5dhaxSdY4",
  "key14": "21FngGPnK3AFFRo11HtpiJp9tCbE3esAEqJGhBGKXNMk2C4A9ARMJkVeHEejG7so41j5eNQ7SpuojWwWBGypJeWa",
  "key15": "3HXtrJCqsGkQKFFVa4wThg19tonHLoDqrbj5Bf4KrRByp6gGKE9t2kBwiaLMgeaoj56R9ncL2o3tqw86RYqDzFDN",
  "key16": "4t8J4WAsA5uPDihFDUHB3hYRdZtWqNMK8FBJWpRZ7qKYdPob6Zuq964Lz23PYmPFkeRye8yHNbikHf9G7zupXpZv",
  "key17": "YGby8R4oBP6agJ2r2wTtv6FXQkfjf6fNYefwcM8rKZfiwoDD728sZVxwcruwzdMw4og82g488F1o3JohAQb3JEJ",
  "key18": "5znBff5Toe9fn7YJLmFe4AToo1GKvPkDS961J2cgmsLpyK74ETBXyV9kRbTDscEd2w67vNLadRxgWqaA1gZEBrXn",
  "key19": "61hw59SW3UnbBLPs8gq7rSSsPjgLn2DvtPXFnxFCEkezJW2N1A47WVUEXAK1PXoncVoSjSXxBtfyaDRkUwoUsMNR",
  "key20": "pJc3RG3SNEeRh1zmkzUuzbjsbi3h1UMNWXVgicU332vJNchtQ1MQX1xbrrebwWTGND8uvjN4PQvi7jH8vF3QhkL",
  "key21": "3umXqd54XoHqZqMeUKs4v1gZZ4ZxaMXwFvS88j6Ztqb6Yk9Gk2qpPqLyXaqB2D7Q7HyX5QBhHnPGsbkymdRr9Zqh",
  "key22": "4F7sjTL9T9Nq7d7tH5RkqPhMJ2WSN3qE8EotH7w35Wi5FSfd7zBQg3nBBtY5HSURPodj4uXteJwQ8Qhht9c4Gj72",
  "key23": "tS9n9kFxzkYePNYZVrHAEh21RcgEDs35SvjyRFtuq2ekTdrYzCPVMa35i9BrNgb3FzTP3zWFNNDtwQk8X2q5vpg",
  "key24": "55McmXnj6ZuR8v4SihXHmhyVCAbVe56eFNxPkhfGt6z7Jr6teDLh5jWYbm1xLaWrCGDrbqrnr7uMtR5V18TNAxLV",
  "key25": "43MgiAcs6Jx6Jy8rmbwrMjD4qESCr5j32g51NFVsTWYCwzJ1m2RgBPH6C5A43sSKZxPWW6WdW8QyNte8h8ePt7hM",
  "key26": "3F8VgHHWeeqktC8eq4zV7nYQYTBF6hrFAvrDpa5wVBrhq6r9MfJAx8QpyJRg2HetWQcJB8tqreEaVi9tJP4zFCGg",
  "key27": "62UpwgQsNzUHK3Eu2SpWmoSEJb6ngdLwwq1VmzPAN7KqQSZ33W4AcmAuvrQbfh945mPDS7fmoFqqMVnAHxeJLQV",
  "key28": "5s3HcpAxaCuHA5QmLBXFwExp6mWG66Fgj1xsGfVW9NJ1oktM9Adr7fsGVH5uQb6V1VyMuhyAHq4n22PjVqvSwNrG",
  "key29": "5Hg8KrrbrD8kUC7VSwEpAadcHHwje276WmqEDANiqoBbmRFtQYwwXUG9QMAdfsQqj9K1TY4zHcwXTbKuPeH1MDAF",
  "key30": "GaQ5PZMXXtSGjLhmeCMF5VCWXysramfyU49PZyg4AnXr67yGhSvjtB9s9N7KXfNVoDjGswKW3CNReqMwhYc7Cx5",
  "key31": "46vv9Gom8JUULTY1YJepB9q1Hv3bxWJHm2msUmyCLo7NW53HrEZJEWVNv4oVq9VzgJHCvGSS2ydiQHGt2XDhaPA6",
  "key32": "2XTb3fCKB8R6WDepFb4DXNYX9TdX3XkQueVPzmPXMrHSDhgeeqQPDicexhpjiDGay9Vu2ACXc1iGf5NgxpGq5Rau",
  "key33": "5oSayNWMcXK5WyJDiK8G8qkP8uvyjN2zKC1gGL9FMRba5hdtTFef6KiYzStBWqrfhE74bkDwJDkyEj8u4RQimWE6",
  "key34": "mL8ZAPUFVgFLoWuGshb8vvthohU7DAVgBzBge8Uh9CX8VH12t2tJ35dwyCayW2ZpFNbWDbtU6zZVzK8dLuWKWQ3",
  "key35": "XgfLdQXSyM1PGNKb9TMWwnE2m4D2W2ENUsDgvmRqzD5uMW7HyqcHr5MiisdY7ig9DmFAWHFAPyXDF7RY8nqU6C7",
  "key36": "52QSvZRFvew18AqVGP5TertXMEvqzmtscq49sUCNSAgiQ5NZPVfecvyCYaZRr3Y7r8jT8xCyB9TxDH2XVkDfr393",
  "key37": "UvcNydhB7fnsumpc2eGPrGEqYC56rrX7x8yFeTM7dsnra1rog3vi7SSc9SnQNvNhKF9zmtpQ1woEtqsFyjMwMZ4",
  "key38": "4zD9aUVK6puUdywT4BvgSJtFKVaUAW9YCf818iTrsF18QbZ9EXYYgpS6fCVnPGfoofexdPv4TMXyXzuYSYCuwPtR",
  "key39": "5xpszSofJEFVSTy5f48gsMWQp4d7yLnjbFKcT6CAHbtgkG5McA3ZnQ5fjacnTudNpxjpD3akEQfryrkgFntqB9ZW",
  "key40": "4rdT2Mov5HxDqobRRFfuvnT2ZmjUmWiTt3Hd1m7j7vtLu7zEex4Y6SSQcQS3wBRGfr7XLFrXAvxc5112Rtbdyhka",
  "key41": "2SQUErbQoAanpLboWEFzaRpjc6dyrwPZpGAzDtg28hyhsskdQEXRpLdL4tgD4D4ftiReBdogMDDKipPJWCmZr1dK",
  "key42": "xLkker96UJuBN9VgDC9GF9g7SKD9cLCbB1SRGZzhgrRiT8p8v8UCiynK2PB4jj6x4Kjm9dgZ5LztymfKbwez16c",
  "key43": "5hLayVg19cbhE7VthdNFWk9uUJjRX9yYEXn2cd6QbPLhX2yBDJFt8Lbd3E7xCDUSAtTUsoavfDbYvHPJrCxrrj9C",
  "key44": "3HWRAexDWrFk57Qf7ga5EuRPWtG25D1WG3gYvFp1czZL61s1JniSEoQt8kgTSeKQVuy3jWze2Vr6fUiWSoMBAiiK",
  "key45": "4HF2dkUejLDW4nBATJs7uvDYycjyKLsTNzo8kVUrW9XsnoxdHhtSk3K4hXd9d37Umv55VtHXHwriArhh62zuteab",
  "key46": "4GVjVxnnfhRmSe8UGbJskuHp3Ne6Xv7agDxqjBQCYt1gWWQPTqd2kcQkPS3cUPdUJefAbq34aNzjRhgm6fVncoYT",
  "key47": "4GMtMCQj1gJT3GLWNwwk3nbcJ6FLEQsGRswv1XJ7TPpNFr25Eho8Cf1pxrUnCPP5s87VBCv5NzxyiSkd7A2h5E7j"
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
