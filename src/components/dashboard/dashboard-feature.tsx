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
    "5fdRPjgzpfb1Ztr1GriS5AGGiRhxEhZgyUvs1ycvJaGoyiBswjNpnz3VEcaWnpEcjkpqJHeZMj5EnLHNJ48U1KHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e3otfb2FZqqT7i47g6CN3JqaXmXv1AEyGLhu1NASReyXbHRdrdmotFVASG9fUPUXn3WKyfbWdTGdetmpuh34CGE",
  "key1": "29r2UZocUCGKADqTptkvA2UCgyeANPVFWk7q3QQgruLFgcFAffp5uyjvNdvZKFRtuFNJvHbi4oX6GTpVk7BTGfA5",
  "key2": "2Qxs2xmZCUc3KJuPzfYE9dL8WhHTKnBprAYWqXRkLSXfWS7uN5qobwZ6xcGtqkEf7wjD65C3xLumWFc8FWNztWbB",
  "key3": "5846owseke5nQh1rmfwWWpNdyP6dxYe3uBcSh3c3YoVrwPdk16fmjZsybpgvmscr1CqrmYNPVyEyArXJP5tbf8mh",
  "key4": "3nqwTTHqphX4R7hzs64c8SGqCcgpkM84YZcsdPKMDtxr1vN9rZnF15tBrxGgaH71dUtHj2kAjwCSZdnWz4QseydT",
  "key5": "2NWKNe7ohGEXnDht8p8x4Hjz6GBa4aidHHgPAB1w3zMFiCFkFsj4EQ4tiqJjyArd2gLB4YrBCfVRLpEJkRovKLYc",
  "key6": "226ff86MPAJRkV2QXLyaZZW3EfPbnnrFTf7yFpLzFQrSSrSuSFec5FRDX7J9XtGPxiaHytqnavgqBD9s6FSUXgAn",
  "key7": "49hXjw1T2XW66onvep2vPdwJFzpJywRVyosyBKSw1LKT9DCLSv9kUPvUtc2yruotV9TpZanPfWj9u3XrettfjK2C",
  "key8": "4DhxAHfCKku28MzKV2PFyna94Yvi6t56Lxo8uxNPCYjByFAgVkm7VgQx91XdaUiZmJSARJk7aUfyEfzBrWpYQJQs",
  "key9": "3m9TVL41CvvcpiKt8vMXtqfE62KCpnSbpiTtuK1GgjLVbjYDkcogLwpVS8B6vjy5DmLSnpn7F1AfMVXn2UmCKiio",
  "key10": "zaXxWJSgbk4Gbf8hABLb4YXc7TQQTeFfPrPy7aNuVrZA2jhwQdJe84R72Kc7HEfdGMavm47Gz7XyLQ7hXk6vpFo",
  "key11": "5cMA61oPgninQDcTMohBFvHvxvB3TUgKsrXdRVw1HC1FwHkAuVXBZxx2NMyhuqzcK8TjAzUyyjK1TQHxJijkFSco",
  "key12": "5Nh4jNxfiMx1MphkjArwSuYCTHN7xp1sHGLSJtfMNHDyY89L5mm3scQnHMRArKZcti6Dv1jxT7cUaLXcxq6Ty96A",
  "key13": "32fqbbJKyWmUieDxauWttyubDVxumc5hHfCi3osfyfoTKSh1QVV22552LDyi8jPiBfeJXVjJscgsnWpNA1udoYTh",
  "key14": "FF5TsfawrEEEfcX9gfwbhjh5Pkusmx1LQHCTQmZgt6L2JNW2YimaHFtm1yLSHuT4iAdmuovGt7gf7A585yzrD4w",
  "key15": "4PgTp3LSYhbUPigwWdkEhJRMAbTzPs9q3uhgRCdbrDq1VJ9gDd67ME2vj6RM36L32vze3SAYm159gdUFTUz3FiUm",
  "key16": "5Zc6C7RUR2iuNaQXCLuu6PLcWRSt2g9zcH7dFJYNmfMp7bxELt7qfrZg9P1oaRFMus7N5SNEm3vKBQF8RpYVXgvS",
  "key17": "2BLykjFca4jS2vX3uqz8L7FPSEmx8MjEXerNcRJCYStvJcmCt1kjXsFz8aLZ7u2bArLbYaECCf8iJiiaRf6Qa72w",
  "key18": "5eeM7ZcTnbWs5sKiDgarCW1BNFmYmAxj8MRE83z2UuenSbC36otp9y8XjsWNYgYXhAB8ixHQxQBi7iuupqyfR4XV",
  "key19": "5gVepLz9SmYxT6NyfaqmFiVSzraEVMp1fQhDSqKyPsfvnzkdJ2sHD5GxNihPEHiDCgtZM5ddQYdYv3bJEfRA66GJ",
  "key20": "4cuLsnngUKwz5Mg1wD5pxk37E9XZGEpCtPWCas4XcfZ6CkBwrFrVYCURXqNPadeFfxB42wg3yrbGeAs14PECWt2B",
  "key21": "2MW5pwYjMyjRKQo3GcjWtfW6fF9znYcBgsRoYA2NBSN9VPAdkzGgfddy4ZJLxD2735qZ452CThXCCpKqo6b4nU84",
  "key22": "2wNa8CLxLPxwRjstUDA6kPGur8Aaqf3WVmAHYJiCKuvE7WU7SzC1dELz7hMuDyJvhpGjcctq1EcnDifri2GBfk7B",
  "key23": "5Mrids5s8anqPu46hzxe5Ur2KnHiry1Rz6yNkD8RevLxTWdYdoMsnqqU1aewhawJAgM8TzgoE4Cy1GTjkhLnrmgB",
  "key24": "3SmBCijMbMaijzETkAxqpQ33YEur3rqxPjcXybcKFATzwiSgE9FbnorFVug3gDRbgdvMbhTnm15FhsaSvbP9eh8x",
  "key25": "3kSm9FNBGTtAZv8v7tcT89yyPW2L9DYf6hXfVpctRnuEbza4hiFroeYCa13UVdh6URKRNbMdYmy2CNwABoFLDpAe",
  "key26": "3QA1CqmSikidn183J2C7cyS74PqTqb1xBbqVQpcHt29F4MJYTB3QCVrvH4gnB7dFehshJdeLxsCeNtQtQHhPi5QE"
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
