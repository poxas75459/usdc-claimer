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
    "Pe6qk6KXBdPxuaVaEZrWpk7TCTjJC5TBGu938VsMWXFFpp5Rfd23WQxujVr9zXMg8aGoSpYbFMMyQ31FhxVbN3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zk64kpZQ9J2Yep7yWx81VJjnedEtf7ZJnmeN6eEkhVyRYXCsWviWVzceNv9dsC9Ds3uyuWukNTpEFAAQDoviomm",
  "key1": "4MwDVLYxofP3RwG8TK7mTa8CDrvUCrXGWSeBZUGnEqvVpqfeuxw3yLDyN8TrmTaGibE7DY1hXh8VtGqdMxRM6EA2",
  "key2": "4ce5hxHSicrw7KZuN3QHX36XUJm3nBsXAukFmwTudxNY6itqMknXuJjuLaFai8BUbQU92su287FzxS6eUe5pxCtc",
  "key3": "x9tZefPhLpCPAAhhvmCfEEAcwcSokcFX8ZqhdozTxet5P5GbEvPRogztsfPnWh5kTQ9xhsRyktM5WAjgY71nQEx",
  "key4": "5spVb7czpr9LWp7AthUE3dWtVREdWFipionioL5dMms2UHqxmfiuyQbYyUo24LR6C7xPqJFzUB7YYMuE8d1QAEfH",
  "key5": "5ANXrbk9Atq1dBJMyY4TsXEJpoezAiox7xTQDgtcSpz56gH6egCHnvk4aAZ7sQXEg6xk5yjWuMDbpY2jxn1ECD6f",
  "key6": "KAms5NYnLY5sN8NY72DaS9C9JBDA7cufMFB5ygFCYA2UUYwk7otzj9TtotnPurHQNaX4YnFH8nreZR3pZfCo8Ue",
  "key7": "65dWvt1uJcmPhsdBibSrSnsMPDW8gPD4YUq8wRGyNuC2DZrrm2bop54LGNaoCTMifauBsS8bD1qEPx31uqKhkUBP",
  "key8": "NUyQtJDT1oXe1fpgxRbSN74fuD82EVFuTFfX5BJifJmrnHpTTVUFErZVcqpYujvLcN4yJQVQNXeDGnPaip8wSGk",
  "key9": "4C5hfwP69ztgjTasFyqd9Kg3Ccu9gWVMKTrQjzPFc79TfrHnBPHCv6V448Qg4RtHKdjcCTiLvyTRfMzCnhiEodiC",
  "key10": "5iQBdHHtVytpERXutiPWGGMRMAPvytD2KQBRtJLLcTVowgu5DChkxED3zk5Hzuu6PKkLXg3nMfUUwbhijVJkkZZ",
  "key11": "5WUCpFi1a9Ug6NNicxc1b3P1jD36pbZjZahspyZ7czMo9348apajtdHQ4ZvLpFhxES9Vi4VwMMaqNGrsx5qcn19m",
  "key12": "5BpxMB8KSmFjHmGUXR4z4iRicKoNpCodavmGbPhPRTfvC1PR7XQumRrf58LACQ5H6AESBX7NvrWCySWxqgn9zpu9",
  "key13": "61thRAcnosX23RucjDto5YFck9vmP78moRyxYomRjX5XbapBroLZYkuzFCG1uQ2cq8x2y3X9RmWpnwioT5hj9FK4",
  "key14": "5FL9mgmkngta7ECmmP8SK13KW1wc9AwQZcYBUAm8zpuoDp4eANN3wFEAsQo2t3L2Ai6YjyxFpEfuKUpdwjJUiGcR",
  "key15": "4JufjEX9BnmnzxSwWYzEnjn4oamX3uFd99rRW4B8gq3gm3mowScDEt9ypZ5v8LedtAA17zA97WE56E6ydBFfA31",
  "key16": "ScSAGAGm1RC3TaCZfTRABpGrdjJVsGjnv4evMUosT1bFZ7oryMbsjN1MthZsrKR7wbP7A8MsczrvnwUqgXT5RBP",
  "key17": "62tB53ekEM1bzL33U1rwVefKANSKbD6Exexk7BQrrVEMRExbrKr4QaKENWR3vJ82PLLwiTGST1sttujynxyRPkaV",
  "key18": "GTRgn7wDcDTfv3RkXUcF3w3oK8Zw421sqyzZimUhQxFPRarzSiSHdwxzCPi2boSs3s7735WtGkqut4fWBQrZXLw",
  "key19": "UYmHgj7wWa9NeBSb7no8fLdndpGQ31hTTw5HmHaKu8j1mG5wwhgKePHAvWHrKe7SiiWKsp5CgMQ5XnDzDH7xsnN",
  "key20": "4WPtmFD8ea6QeUDZjTuYQdpPvBbKynysD8aUEyCKijEDKv6Xyttoj2nzDuZAtThu6QSJkSWxU6LunTZPfEfjSWDL",
  "key21": "AA4j7Xib9DiPgZuc7t81DrKEN2Qfo3ZbdzoL2L7PZFKgjoUooNWjvnRNaQB5gMTvsfi22mrLgxnWnKShuKxBsA7",
  "key22": "3oFwcNJJKiShHkhU4Pwm77NpudQyGhAmojh2BtZu9vFnb6vMuwixVKqRjzQkjSUfaeEe3DwiFvRgRH4VPpWLr5ia",
  "key23": "5mKA1NepdFcDfqrSuFkbcHE93AEa5QWDtAMEovkq8MTazgyxD65nnkZUVUAao6sjg3vkqZ3yCxqLzHFZ9Fq1amDK",
  "key24": "4UQtdusW1oqwCQcbjHZjvx8K4MkQ3FkgLXYdyKvgYxeWnM5npVwtMWHvPkCcBTZCmcP2aaoUWrThGcHFSUcSQjG2",
  "key25": "ocnfFY7SLsSYukkEqKqJPvKrcFE2Vz7uaqejpMvCCeGzLZProw11ZHfPeQnqMK4ZkxHvogE6WiYGNWTEJd53ywk",
  "key26": "3Gh3rgAuibgK9iJab4z9ngsHLjW4bEFMG4UwGAkasRGTRUjcSoDi76CiEJmYSLHiiYd6iP1fa2E25JsQbKhhwiUU"
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
