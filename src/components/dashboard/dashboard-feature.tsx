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
    "4Mc7B21fCXLg26xWWBaLvPVEzAgFvpSj3iEgVqBA28MSBJQPUwU4q1KGeW2j2nU8rwKvrQkTpwUwdiWLsrT7881Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nzANuqWMCikZk5Ech5CBzQAyTyNPgYKUZAgKCyVEKjsJdNBLQyEH1LxV1tUheJXfkfz1i7orbyaJp7NYUp6QYZB",
  "key1": "N4brA47CR1W171FkU3xocN7ZZ6aSXFCPK4KZKh3E9UM3CNs1oraWmDXgUgdZL9xiesjPvUJS1Scn2cqa6Ww4ZTx",
  "key2": "4wWm38Lq8pTGwhyg56JM27zTWT3rVqMqAezNw1Wn6ihKhQ4Z6q5gh371kpqyvZjWgo3GU56uBg9CueHQu8bkmCBT",
  "key3": "4ejMftHDUwweVnG5knBu5cdMDpZT2noB3KB69CNCUALbn5EHbjugckX75xmUZTVuFb2ZbXmJW613J6vAMqGdTWGD",
  "key4": "33aDv7vezDR9sirWEAkNgEzi592PNos3V1m43feRUipNTa6KgTTxrVZ4yCFnpGtDAYiwVUDYB528LTxaShfDf8SM",
  "key5": "HWnDauxkL9m3kPW56r3avNkn2Ro31HsiEwgvKxTcZWNw954HhHNeb5eugrPwQEwomhfAvYEumpiHHTRw5YmiQGv",
  "key6": "HY8Pi7aGokfn1SemNr9Zirg7E65UeyRp7geUVfgLmRKzK7UC7949fLCrB3ddvJoY8SGQzJRmX4RQPMxSSN3bQWC",
  "key7": "5ZGn9FprcxTedroqN93541o9qC4FTNikSyTw9i9qLfC6igrjSYbaPHcKDSwHycQTxz3fTiVBsatVDsEeYHxj6F11",
  "key8": "4jMfpmt3Vk1n2T3fM8q2gyfVib7xezicxM32Pq6sLak2V6CFkXyboU5mgmE1itEJWLANMaJUnoz3HYQthvGkejGd",
  "key9": "4sXG2LQp3L8TAPb6zCGdzdaqfL6FMmWWpsNyy7A5G93fGeWYEPV7rtyEsdkfqUxEjeqQQLNDaiNBGVhg1wXxy4fQ",
  "key10": "2Tf645FkHoesA8qTPDM33USm7JT6vrwn5krGQTMvt8N5w5wwYruYNtQKVqNFEeeyx6CoyukxKc1GgiE68Qxma4xf",
  "key11": "4tanuotoNywbbkRXTj4A5P2qYgHzsCKNrJ6aZfVTUYWwyqbVhcn2taw365Pi7T3KBzsvnLySmj4EF29c7FkhyfQG",
  "key12": "27XVjD1niHhd3gkhbRDUUYh3FoMi6oHGLHvigbLHqoFazhicVzQdJoptVQySQxUzWdsisMVReDkxv7e8VSDdcQAx",
  "key13": "5jJENnhBAz8a7xff8uGEE359nL3qYskNuMes7yqCq1cDtcjvhbTutuKv1fmBAZBRzvrt8VwXJSafts3bP9h9Hacz",
  "key14": "63J3kUDeTV5nKNtGF86BKfwnpZYe7Ja3e8Vjjwfz8QTFmR2fAzYGnasoy8hsinfCwpYBhCdEHyKqCkaaRL5Shp7o",
  "key15": "tVaUYXLT4wcPihDM89rkBTA75o1fobjHKErREgXEusGEZNtrMGDq7UaUNaxoYjA1FKUsXr2Q3owQsPiFtddWHd9",
  "key16": "3FStMUBpHjBoPJ2JfkrGgRPcKib8Bqhr4MhT2bh5HTa3GwzRV1NRhB8mvsNX9YwXf4ikbeh1q9gYB5y3mH4mJ2cU",
  "key17": "in4MicaDwn9A4YfRNxiTJDdcRszK82S6oNESk57HdtZyBtN1ZfpwK3qquPCvJVfwZEGacRwEgUARV8vsufSyteZ",
  "key18": "2sHbFEPZ42Yh5DhrojbyxeyTTQwotgYzxnVcoHkXFUPi8T2rKkLoD5rUWZp4VcfeV9AhJh27Wn767Cx6efAMBWNR",
  "key19": "5Qfsct9FoXtXm2Q7LG8APakywgvd9b5Eu68FcLowpZXuGwnJz9mg9dDgVW8sVKLocEaa4pQg8q6cHTZxZ92rCzgQ",
  "key20": "3RjYrFKJAsTY17tFFQe4tDLBeYj4GbJab8QH7jZfYZa2eSgV9jsVdu3mc7rzBHAoaKbdDwcmZsMLdKupkBCpiX5y",
  "key21": "goEodg72krRHvPvYehFP4WR1c8AAwjC3WTRaZ3CRh8UyRNSGfRZkFWGdVryNtrrFwHB9xfGTZgJXsFKRXCbAFXm",
  "key22": "44HRR8KpaC2GNyDURQ3pQEcz2ZPq7rZFTCE4QS3Nxm9fUomekK5NLkMgoJDpuPhqcJr3PWbVXJ9MWxnRhZ5KHHJx",
  "key23": "3NfqRK3ndR7WLnxphK68KovRWZ29yiGteRW5qEfxw87QSWvWM8fAX912cQHEubLdMn5R3BByFfUyLC7QuebU5h1d",
  "key24": "2vLw4CBLme5irCKeQS4hb9ZUEjwXxkhTRzgTy7fum62hAwRPoFvnhbbdN7goqig6PFA6gRV4hZSEsXGBE7RRcvmK",
  "key25": "6uxkwoWANpYoFcAXegCjvR3Ptcq7Jh3JEtWja9RUw6vNMcztBAp1zQTPCAivoWfyGYgJY4yyJQxAPEcLgsZ8Aio",
  "key26": "5PNkVXGf5XvLd42hhr2G9oFnumirC55eo8V1hVryU8yEoPr6GBxjPya61QBzFv1FrbvkjF9RVFU1fKG6swfBWi8R",
  "key27": "2RV3xvfLkPVzTsnTQ1sCEvLy6BN8rjcWJGbmiJPJumVU7AcizqX3QAB5JtYvmgNmeSbKLgQ8iaQLd4LLiB56k5FZ",
  "key28": "2rrkrrscW14BCmTPcTL6kX6HxmyU8JnF1LivDwK5cJQHjEv3MfYqYqqmdLooG1tTouBQrUtSC8UWzesTmUBPz9t"
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
