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
    "2Qc3DMSTawdFN2AmUGtTRZ3wgCJPbrdEDsmZjsyb4huJLiayUcziEvz3V6y2MnPmM1JGSP4seCrvCXtPgBiNq4rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FyAiTQmr194T423h732DZdFU8fN73faEbRJPjeYicnRu39fh7zBmoZad5asyhq6ZupSALw9YQGL721UwYZpue8b",
  "key1": "3wDt8Hhzuw6J9DpVGmb84xY7SiwjBgBKqAVpXrpdj4YNBzw9nkgFv2h6ckecJKHaexYHvcXvndoGzvbUVoUmQBN7",
  "key2": "5kvdtJ12Lh1Dr8xyFonLAWFtEhbSrCTuE2YfhZ9QoZuoiSyD2P76U8vKCZj6DJzgYSvHTjQkzWb3MCWe29xxNsZ4",
  "key3": "7xKieLo4aah1yozoz5ZLnhGGtmL8Fsfebk1LsP5J69csn3YQMs9nxecWxU2giDJ3VTifbpx4k3EMTXv4ki2L1EY",
  "key4": "vMxAoXg1yN8WDzbXovKCv7DLmaWBrJ2TKWtj8gNjR2M5SXzM3ZFkm8YmiXdV3rDSYQ278eqYkm6WvuQL46pQovh",
  "key5": "2vdiopdRLaRtirrA7ZYpbLNSt7KjH3fG7R2wewkMTWauYKqFrFL8zqH2hUQQYoQJ9Eqitpmo3MHJL3fJEYymyoiW",
  "key6": "5MuUrvEUFENyvfeoHqcYvsZto7vH2YAbqceoQ6SK4UiWb5jSvG81tgqhmcHrB2r1CY3oBNuePXxicbywdXXnBCxc",
  "key7": "3t438T5inXxbLC1vnuENF3jSQdkHR41aVLS6scart2cXXuMMiTaGR8Pw78kNYXj7ASA8xmmXjXg5EQCjaPNHfJwq",
  "key8": "4XXama4WJwPzFodpTMLWQTCWnmSdyFdTJPQHKHFhw9Fifx4LH5ZtPmYRzwVqiqvkG7Y76ETwuZn6fLree5khCHXT",
  "key9": "8T8RKn2A3dZpAYq4jb6MYzjcAeYfrdK9y7k4rwgg68CaGA6YBbcZtFP4fd8Sjh6A3rPh8gbPRAuaSMMKhkFnq6Y",
  "key10": "3zPTU5MwdNvz7zwbM99Ew1rAnELJVMzLksqjm7Pk8Tq65jEvitUaauVDCDBZsxW9idz7T94KCYabaqwLCWn74Cdz",
  "key11": "3CqWmEdUwUF3zj2zpndDVZGy66txbdzPikcxzdiyBVKpCZvAJmMzfNGcCAxTKZoNCfyb9uXcT3LUZGxaThM1Ctqy",
  "key12": "4ozWVw8H8pvk7kiswa2D38rPU953MGVqqiT6PhiANuqs4vvDqaC1yxxVw6mpP4oCGCpzpcL9jBwCCKQQbETNCdjP",
  "key13": "NT9EJ6T2paRXeoVaru4wPJ8jktzAJLJHujquzKZ3RqFocNAjXbad3oUAF5VAecEmHwnxM6tWkjLvcsULtbTgdNk",
  "key14": "a6CMJFabvA4rNpcTnG2mFFtW799A3trTx5jNev2cWcFA8GGqyb1ZUBsyts3Ew2XG1yGtehmmgJXnTuxDL8hJ7vz",
  "key15": "2TkqhfrCPiqwqzWrhGNtptEQEdkCSmXQbs4A8kuBnDDjwSW4LnTNEDnu9ZddcZNRT7wWLq7YFAGdRQtkT1XNhb8e",
  "key16": "42KSKTxWFfK82Pk3fgA84gq97MKnuiNtY3Ua2hMzxsc7dLJT7tUD4zwVMaGWmBfG8M4E3mX3tMMABVFKxYTr5mF8",
  "key17": "2Kiavhob4GZygq4ZPcjLFX8YZ9L5JJUL98mE4kMqnr3xF4deGYyTwzLynMXtNRaU4ENyWD2fzUGi7a3nLD3WFrqK",
  "key18": "2rgERkqJ6UVtn6Kj7MNHNP42Q8VZtL1uFrd4ztjcEc4oLBjNiMkP9WT4pn7WnQkMJFHHEuXyHsP5NCLiM7Q8JkCD",
  "key19": "JMT3otDaH9aGGt2yVZEkSq53fQHavPUbusUKRKLPSLtGA1GtMMp5UNPD2e139PiVZouft3Qm63SPuEJjp21CX86",
  "key20": "72Y6Scq74wK46YvAugHe7GHXXF2ah9JZVRo9Fet7gLJXsJuzNMhYioMM1BTUrL62aYHmZRLogwCaSZD2tzFZXJX",
  "key21": "2NpbFF1F49hsdC48x6Wvi2wUYgK5bWd522pWjDiLjPKng9SXXSfpzU8pV2u9nv5KpKV1m3hJ4SVhns5yXuBLt1sW",
  "key22": "5GjDAtpRPCpm7ZikacqK15VVk9skPwL47gYyj374NJyoMijEq16wBoUx9Rvd2wWFYy6KV6Ue139kQFojLoDcAfuQ",
  "key23": "2sQnZavZnBuw9oCvPcBu89G7jFzKW9Me2cwikpEWm9oRidiqe5WmEUykkvrt8UZSYpTyUXJL8SjHd5fxmUGMoCUw",
  "key24": "2i2JBJygu3YtKvoNuaZ9Mx3J6fe3vADbeyXJSEuYawtAn7AFDmy5Akf8hY2s3uU9voaxMTKpPJGgaAnu1UaYYxNy",
  "key25": "YYHUVdbHTQ7sb6TeJRutCiaetE2sH8cdXS31qzS5g7oXHizwPkiayvk2C7P8uGq1CDcqCMX3MjL3LSUzRg21n2j",
  "key26": "3PsLyCNddkzDcDaBuXTFE9g2RvEiGdJ9bPdMwDuuA2BmB13nZGEtAD2H71T4HTPB6Wt3KxvdnPZQzZSBnBJy8Ytu"
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
