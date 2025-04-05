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
    "2tTCEdHYXQ61xpdd5rTvot4SahSrpBPB4igjcMjAJfXHPPScdymXWPNr8F6cEVgAycT589zteYUMtMXuXWCC1Wkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dZhdR56qu2Y7BuMeeYwLHnvNk3sjbNkm9tywgV1UxmoRoyhgtDrVBst2xroNrGmNzmmTKgAVhGYmtAaJN4XrKzf",
  "key1": "5j2Sj5hQkSoEt42sVWUHn4MC8CD6Xiwm8Ved9vithacRaZMkDyvZoa6KTVeFzqL9o9ZdrgiK2w2S2c1g5HuHELK4",
  "key2": "yaenzh71Uc1ZyK8WLb6H5qF81M73x974CSwdeHkueyPJW4C1qs3wNoekW14VHKrwemErb7Hc3wbP1jm4g7sL9cA",
  "key3": "2cbkwcJg2zgwwxQaqXYW7icUhYMr1JiUN4HxU1y3VDaKkEzPV9ymbyz66KhgfM37BwjrEAvxBDHWwNxCfjYHopgH",
  "key4": "5bH4RxmgxAd8L3nKeW51vrHiYWvfwJ5jQ43teve2d1PpEmfseaxramh2TxNqzsDyCVRsZb2Nzc2ewvpgrsPiFfSk",
  "key5": "GkTvoJd4SCD3d2cuan9BCUAnndKLgLdYYtBWUSA5c5FZB8D6Un1PxGsSsLsn8sa1HzUq5RzEjAag9yPTVB3U2zQ",
  "key6": "21jKq85e5yWS18ZZunzmwGY4qtWGxEvUnjBBaotNUjxjNqF1itxRoGk5oEV3tbHZPYVLev7LaNPL9qbP8oVP6BUs",
  "key7": "31uJkCJiAcS4KTFy38bzM5Ba7gNT8wwNcrKe1L8MpN4jFeAR9NPbRNqdpytAeSruMafSeaZmumbK3QQHAZQQXLfQ",
  "key8": "2Wcx1k38vYUAGsdAArzdseEuFBFmUB1wxyUddgnvS7UCv7Uvfsr9pg1SyiiADuERyrVK11Br4i9hbPpguw3j7fsX",
  "key9": "v7kFmbg82dj1vqexzT9HdEiesPXV6tcC4ijBoxRJxboQZ8nBafVxNmRZPqLX8uk15U4AM1APjWwxid9dHZzbapb",
  "key10": "3oXqGyuM1ZUtxa4BScCWSpUg3vcdKRdgRWMj9mCCcSxN2qVTHfnnE2pQZ3UCwyoqjACjmcYPiuXJWyVbQa6fQsY7",
  "key11": "2T5YDDih5FcaFev2C63tHhmoHcbWSLB7wneEvQmRXFDJymiU3c5cv2aEktpxADQ8DqRDqm4AHkAE1x6M2jG1gxfM",
  "key12": "5ykTfCLkLuytycXsfpj1bzoeF9mX2nG3vNxgD48yYRtEyF1vdiQFhtwtXGJVSu5XdYuY9jrkDdqtRKmBsw9gKobq",
  "key13": "49qD1xgSKP64LPGdqaZvYtiNuLiKLSFRnrLskVX3YEehLiB1DdHQhfmYrs1ozK8ooMyTRQ5o3LRfstMGdbeJQzoj",
  "key14": "4zFzRhmViGNi9bNQdVJ7xZvrTA1uXXdN6zQY7oW4jCeek71rjN1WYrahieGgNqNcCzS8gstQwwTaXUVNusdf8o9F",
  "key15": "5YK2gg3Rfub9HqHazjca7x66amXBUMXLC2W574KZ3pXAuuFkR5KTed9TPTPRnGxKPPE6FbipkMDQQ1v4E1559e22",
  "key16": "5KKeWmQ3wYkw2FK89eRyu8ELcuhQCd6JTL13iALkuNmnrecarXF58yeVwfTMmkJhBDFFBvCe1tov4XZxMqdJJx66",
  "key17": "66cEjJMxRsQiuDpcY38kKejdEHeVJ2JhdSLdBN9WjpaSAQGLQRNcnsdLHi6TpFtJtnzNFcxCaNKphF6FbNifRGy",
  "key18": "2CaRPMsY7TA9sBdXP4DDu6J1LmX4CAqW2YodD1n7pStM6As8pWUg935pLCSdw6hecQ7nFt8KZ4Qwur9WeTrbobZp",
  "key19": "5rNhrZWCibXpwshDGZLPsokg7wKFKmX3jowsj9fjGdMb6rbiCHPj9kZDJuEqh4ASHDh4kN5ht1D3HQnsUiZ5nu9R",
  "key20": "59Dh76b3B4zcaCUNVeBTvUSsXQeFTMA7hyYa1VEENwEySvCAzKRWcwfNA6NbU9446JTVzmcAJ44Qmh72fwSQzCXc",
  "key21": "5HLuUqJCp3deWUMopLC6AnTLEt5FKzt7XkKrgB2Wg4tjLgWQngEWyqR8ohKvhbuEvMQecLEuWGPGLZTv51aXybqb",
  "key22": "CeXwagG83S6NJmRk69TcQxMCvSBL8tS8qGDsVpNax9hZgjzwsf8CzY4psMKgygAnQ8gCzqaJxhiPvhgS2bWvmbX",
  "key23": "4ofc1Tv1UBPC4WAWrNxnZJJxEToYe4hqmCCjZpogg71dygtyi8Y8PFh645fELz5CDJ4Qs43qJG5M9N9BtWrmvt8n",
  "key24": "53EJSXeYQk5ytfTFeqWVoUwtTDrU8kQHzcLEYgnMgLX664Jhqp6LKCzyCNQYskG9LRB5EwG1rpTxn1pgaJhqDNJ1",
  "key25": "4s64Wp7j7pqLEiwEBb3xkWqdiPrkq6xo3FRWizeQW2XvV2W7U3LLkmKfdWV7Nh4WQDy2ZUtcGCoVcYGDhJhus73r",
  "key26": "53naQzby25RcFSUix2VEmnxvETpanWbtEtVtEeuAvQS9iLMk5U1jrKb7J8oWWQA4GwMs5CMVQFw3RNvbb8kuEM87",
  "key27": "5K9K1dX7GkqAeQvCjCCzt3qTMcUYJYhkzETC9PaHVgoGJHLEhJ9hXsxQiBNw41ffPGCT7BmfQaSchwE3mAMeqYkZ",
  "key28": "4KAK6nzmn9EXopvbPeernTGM7A6uGpD9tawTLCc8VhH2uG4a3SjRgW9f9yKFZRxRRTtneuzx2AwEL6gwn5RF5suR",
  "key29": "smB5UjgmNb3V67P87r2aEywbPLgSXQLjw1wyiG6CHW2P7bsGzMwy7Wm2t46fjixchZamMsLQhVTjV45otPJr5tD",
  "key30": "5KcjafjxNXLaqMv7SeUihBKuqKDhnr7VdzLtzBqAca7RpzTSw1h7ppXUzJvDn2yGdoGWncyktq9zwEAffVTJaYVy",
  "key31": "WabHQQZDcSmCxx9nZBcXfpuUHzZwcfJApeNZB43ZY4ZhbNaRicvPQJMafMev3f6gR4ogtEzvfqAfNfVZWJRe5bJ"
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
