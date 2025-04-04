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
    "bukwdw3CwNGpQJc8zXuusvPG1RsgjoZTLmnhbH2YKcb33CLLd9XDCqUoXoabqKk3GkS6QkQuXvZk25hQg8VK25U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oh7vd621Z82QMvDoX4THrCv1VxqByJhbAkvwN6Hbc2GtTRpPtVKBjXnQsQWTVMohs6ryWACQiV9MA1nmH19vrQw",
  "key1": "zQHupvp42THYKzd2iucw9w547X56LrVEx9aoWrunRnhqiLEZFQ7yUL8XEjn3GLKWeyPrHP9UnRyDbUVuPts4CG7",
  "key2": "3NeygmrhUEu6CmWgSGPfYBfg78euKcU6peiUgdR5y9SoWxUbNum3vDQrn4t6HLnvsc9L9vjdYUrjQxb4kXyPrEgp",
  "key3": "JwruLr4GycRotwKTmx7YrVRKKjbbNz3vfK6s3VPtwnBUJLmGcMfUfBFwtevZSoKCXAeTsGt1nv2nCkok7WVdAPc",
  "key4": "nKxyhzi9jTeE1Y3XpYHwJ56D1XnjcgcytGGHehpeSeWFHA8Dk7Yppzn3MSQQwHBptpAuon31wBYVgxRhnwkGtti",
  "key5": "4oyJbDvB32MKwLCCS4Gc9sJbZdx9RUpG2XcAD59bFsuoSj2kNgUUZwJ7kHyoUawLb8xEGdsYuxyZsV6ojoTUT7nH",
  "key6": "3eUM1X8XqZo6wtQqkcAosxzAozuM7VB2HBt96bEyyZgbGfP98JTc4YSmL81FhPCgqC6vL48gmZGVg9NdhvNSnpc6",
  "key7": "38DtmUEu9jUoQWBZwjJqbHXUyK7ypp8U4GkRgZXH7NaJ425xfZpr4wbC5kQnMRK6iG9jWSu8XUBgdTUDKcgVzEDt",
  "key8": "5mYvWHEry78C64Yi9uABxiE2xqC8FhRqCGiZDEG3hWiTKngeZiWZsMtu2os6aVRTyKWRJy75b9tTfhVu6CwZB19s",
  "key9": "ghHoB9qdR23byQK5SA7er81smhKtzm4tmvw5zBJg5AAofB31LSW9JJSFZ8vN8RMpDD7qDVHWCMGY6JoFy48xnFr",
  "key10": "Z6p57nrtaLBTMMAvPdiXJbxZqYp63gqAJB1REqLfCMetzV31Mdb9JsJbznD3kKyydVZ17kWCM2KBvUuyVbKw8nE",
  "key11": "2WN6nuNeeLdDT4bcqfsnBPqQhsY7rS4wJL1JrWTZEWF1RnCyZWyQcLQ7goP3zJowKziGM31myLtQYnHLwdcwJZMB",
  "key12": "3C1jsv1vS3VCG7PP75xh89nSDcs1HqMqUQ44U91boLxRZBUmBRzcoweChJbhz27wRJ4ufXyfvHtnVF8keUZURsYb",
  "key13": "rZwguTV6UoY3xi2BL9to1iQTmc9BksEMvMP2SSW5Af6cEegr3bhqNTJagJ3iEwuinJ1UUmLTrE85gin7nVZj6XT",
  "key14": "2qE22r5egVsxeePtkFiGdBji1AWwobfDiPYmiwosbafxYdKUuDrgy46KDGP2g48giDpJf3aaHPRPFmmqtH7JtTes",
  "key15": "CcWXdpDWuCt6oAPagDSo6YrSzQQqjM8NDaVhMS22NAdXna6coe7TUMvE5aBFbjb5g6F5eoa5w59GjfBREpWCb47",
  "key16": "5MTkF7b8NiPQKg6mRggWiWLjgjQCmJccfYiohoUnZBbMXAqQqPib8CJ2qsHPuxu1adB4Y3hxrXE7U8iHgZA3Aq1i",
  "key17": "4GPcfQqdaaYkCRfwSiKAmeL8YLLwTCLE6hcUpN1SDkQCMn25mFiefj83RjGMLuK45bm9xSvMJfbgmqkSQJKaP2xP",
  "key18": "4jZUVcJL8RpvrRyY2fsTPn9Tca6PsRSeSwP28wnHc5nLD14XrTE7KgTCaQgCRZJovAe7iy2w49uy1Yso4NN9QpQz",
  "key19": "x6z7wV2uz4b8Qi7SWmj6pUR8gMFWEeCMg8VzW97CdATz2EakHzLMn79hk6zCeHt34JdFGjsxP663AfARv8XpCMi",
  "key20": "44DmsH9vyniwC6rXu5cMsaMtwurgSevEzbsFBn4ig6RDaAQcMscP748JiN8RV6ZW5763H24UXSZRVevKwEYNJ7wD",
  "key21": "2iPQS45ATGqaQ6Bmhne9ticSgkrv9zrgRGgzAWHjkaxTwBXDaj39qo2Xgqfkmt6wgPkZhjNnhz412DPvfcryehuT",
  "key22": "2U22Uam4MH2VEqL97GEWoAGrL1izjhYEeynNoqpLCTJAVFEo6Ns7kMbn6rShxuTWMztSRPFKLTddfJTSU67TMKt3",
  "key23": "5ve9UnTSnE5GHbbPASquTo6JipxwgWwG5u5t9W6RU7SENasr4e3GtanKuSB8sbkXEqhzycocFbJS1sZkrH6fFxJe",
  "key24": "3NfvZpPiQ8Yk3KNmexof7LaBPe6ZeUJeYnMJy2THz6Sh3z4ZuavJwKx9wayBQ4yYZgQ66BAm7mnwA5ET8DDfBtb3",
  "key25": "3pPbocVXPTycwF7d3WKpk282M5AEJ1t2upbbSAqWwipsseohU9b1EfHkqBZ7KiRhDeMnzFNrgFEUh2nHjnNgncBq",
  "key26": "6CSLr9gRe9QPi7Fw7RLbPuNfsHwyTekafnAmbXUTHudHXf6oCxqDWhMthKb7AdJZsVkUpoQ7gAgXFfmBeAntuyd",
  "key27": "5dTZTM66FV4vUpVfk6emoGRiZo88QrWuF5TCT5DYC1bBZyYtPQGSrxevvvjpF68kyTXJyNM3kFM8RYNof8crLvY",
  "key28": "4Mfx4tHjNgTbTU2LJB4dAfHcmg4aZtuL6ag5gZZheA6Hn8tHd9cFdwB4ikK6rx5WVVX1RyE1GJfz3VKiiciycAGq",
  "key29": "43wscB7B32Yx4tCq8w97A9xxKJj6QFTpjNNYcvbQN8vNZhsTDnmaTHMXNwFEn1jS5APCGcVZJcarxYDYYt5k9aLr",
  "key30": "u9zqhocjfoAYbaEYBgypogTSViDddcXKEFx6tamtzwAH1SFLdvwqkTv2yEAKpgLGkozzCRSbvaFYfwayyPDg14B",
  "key31": "5ejCsDbobm5uFSW9x4xMsWQTnRvruETQuuyVqx1vyzs6tS2XjsvhW1Vy2KfESKZuP4NDdPmnhFLrh9UjPk1Sq9Yb",
  "key32": "3wzqLXWa8iGDAu29vUtzWAPNnZgykV7hT2DUiVhjt5NQVVmFmi275XgbPvsdpRF3Bmd7B3krLMP1WHVQrQdWDJH9",
  "key33": "WFZetzaeVJhth5qZYskWjCcerpJFBnW5jkrnqwNLjm5DdsCBR8QuYQp71ABjtiUNKuosBXxh5qkQzxtt5VxjjLa",
  "key34": "52LNonLhgHuHzz6gMgu9rsUrsQx1dBikAzVvW9BWWEbD285gf5Pi1gsQoDbxp4TMqmnTSMN3CfGdiVFKNyApMtrM",
  "key35": "2CoCWmosFF2X7UpA7n7at2FSE7S4n2ASf3zXzbbGNce71UezU4v9YXfkq38QbDtciysLZUKWSH8DZPyiWLMvR2LB",
  "key36": "obQatp9LPeBqkKy1M7TdrSRoJP6oV35LYK61wiZFGiEudVyuxukg8ZpjG9ypmoH8jyCSi2igQ2dBfR3Ymc9U3do",
  "key37": "5q3MhKbEJnAceS1EzvaScZoaUsSShsD3k4MrigXRTzBZbGXbWoUaX6AnHbYDrW4nHpMGsFsxgbkJWwXNCx3GpTcS",
  "key38": "2c1752mrVRF6k5MY7DP2dTuVYWS5ytkm9bdCZQjAtKfxMgCqrA7cxcwVuY338naQWrHU1BQdSQSnXPbA7BFzSX28"
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
