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
    "5y2CaiJKLzgR8xrGPRuRmjZYu98AQ7yCYbxfLmomCcz34TLqxR635G7pX8sYWocZHcaC7YnopWt5Dzw6tJo9xNoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UnGtb98y2AFujA7vZRjS6KbCUZMGXgcy5Pb7Z9H4YphQjmn9g8pLnCyHtvgrSbzyFochKiYSYPoMWYLFFzkBvFK",
  "key1": "2UsuDcRkPXNfqA512XtSTPjmYipwc3jcN8vARaLERMjP11UzZnxNCgWAFdYFgGhCoz9wp8WwBzkLyz2Q3Y4HQoYw",
  "key2": "2fwmP7m4BtP2P4GU4LkjsKC8gQh3fw5o9kvfXsaLzWQVhaLaZM8FZ9h8eLhWWVPrG59rAjTR9JEhgmjVGmUR2j11",
  "key3": "33wUAvQhjF6655c7SJoQDqvxGnt6pMLoKr6j1ZMfh9zyQEnevs9sRVdxHvkZv9Sf2ZXKmeg7JHgSfQjXAiCokTiS",
  "key4": "zHAjev5L31doLvMo8tenLP3H6fPnBBcuWh1Gd2QSKniiL3qS488ZaqryUwawsSyaiz5xKWqKjGKaTPHJMKHWH2G",
  "key5": "HmBerU4JcEjPw2rP6Juu5Sc5CCRZymuxmyk4QjWQjEvQxeuBqNLa3YxCj6BHFF8AH5TZz4KoEPmDoZLYZWzeNg7",
  "key6": "2iBJbLoFFxBcCJeVv3Jaze3pZ66YY5iXYmtAUTAa4s3HArJwjcuk9A9Ba81qxqkoA9jBxVPc1n5T8N11ot78T6Um",
  "key7": "WH3HGMYRFBy9HtuprUE3Pf8es1yyTqDhGn81TiSsr1u1o56t6kcfZujhzKiiXA9rYnkZvMEoHeM2zf5vHBJeEmu",
  "key8": "5r8EVPp2B6NnsAdTvhKvbZBuHibQpWpB8XPRAcBLv9mgsf2YN7rEYLy9ryyoS55ezCmZJ2K5HbSGMNaQAKTYBZFt",
  "key9": "Y2gXUDRpCcufJAqj1GRcBqFUGb4PETaJbwARDPktU4TdBTzkn32h4MefBgVuoQia3tJGCKhwcXDvA9nb6kZeTgq",
  "key10": "46kXjQxMrk71jWYukSnfY4sgUcVii74xmAjLZSsYWY9PCVyazoEhRSyHoKbMLQaYG65QgTpbCMV5heLnQSPQRbJx",
  "key11": "WVpkihWWE1Rz6ziVE3JoxCQLRqS18NRvcZCtv1tKpvCp5PwCnviCe4JFYSLWHyqjb2kURtdDDV9gQ1CepUYVbKE",
  "key12": "5SLJBtDiWztpW4Zi4qw5EAg39nvjoriZoXJLdQYdZXre4fzZFy4nCgdZ85g17Thmw1cb7rAyWHM1w8GYw5JeiBk3",
  "key13": "SuL4hRtE2UoaDoN3ut63UfmjnNgL1iDWhv6KtP9vFd4HvqpcLNfWwUmB6xUKRpkmPZGGf3uawcTiJULyLU7AM8K",
  "key14": "34R2WGdhntn2MeDeu6T1LnXcWCfKPYigeT2dH1xKKRgaWkaiAxpNDWKukgcLtxB3wX2xyTEFU1xV19CMn4QVNM3p",
  "key15": "2hZT9Y83kLjEAqFxuqKhkw6NHnjqWzq4orsezf73LrKC2mCa9GRJ2aVTmZPZnRUdPtTqrH4hfNv7p6t5VWrp7kX6",
  "key16": "3fETKm7xExP2SePH6UQEa29bGV2bXXF5i148GsAi7A5XytTzmD5Eec1bZqUgPiD5zLsfuq9fiSGzF2awYqo9GwN2",
  "key17": "47GjuEpicz7fSvPageCsutnWPsnXSmmXjRwKoC8HeVeBE6qAZ1iEKk8HBr5DdE3VQEpPvhB76MrW5c3ZAzhWmfhr",
  "key18": "4EdygCd31aTCxEPmjBbUgwsfFMRfEaYa8kbexr5PkK6TBg8tkMZnTMwDWvauuF6XNJaqDDTdKCmynBKJtp2kHt8k",
  "key19": "2a6dst5Ly27H2fvK1MkKCJwxSdoNg4tXQkREaCnGt2WYVg6Q3figXnQMnNZkubhqhPA9sKPDh1p6tmvzvdfcFbms",
  "key20": "Dvev8bzXfGmRWucbuSCuZqiFd7kkXSBS5KyjpmkFhsvnM9yHvPvV3i9rQM8xDAcCTBWw7Y6ZgnK9aZAfW1RM3Ef",
  "key21": "5eA6LLoacuGmTN43aetE9AMxGseW9ATrBH7nMMARZcCESkM6rsbVtJEhdkCZRU85ScBUdrA8N1pPJQUH5s5PYpZ9",
  "key22": "M9JDsSnGPFn6fNJiXAkfqecJ84AUXjyC3Y2EQREaADGvbJbUthJ9FKpZzQvsyJDuwPvxMCab8hgbnchWbrbf8vE",
  "key23": "M2BbhRdc64zB72EGkwZUwhzzMS371P54WrNQ9BPdJ8KixNqVmuSPTjxjfDkjqjzsRgx1AEuUckTuJoBmht6CLkg",
  "key24": "3dmPjSE42UfQxKTz4U3hciDKTEzL75Apiv4j9cmfTVJFoLpKocEd6pCX8Tjr9nvt7bKbtzdtRPmFguTRqUmVBDAS",
  "key25": "3H4KxPsWe6b7niNFxV6ZUgAqiePLVJsCiAFFnmqfPciyZf9Dz5Cg5HAoLBc7RVjLAP6viLAGgeKr446EEhbHbMPH",
  "key26": "4MToueLwqmyLyFRU9vbWBVqckC6hY8hD24h1dkDCyLSttj31jdjfKhhgJeKCTxVLoTX4rmfWT5B1mywfP8obFCAh",
  "key27": "4kLjYezms9vRCAABL6irUgpj1nh7m4BZwKddJgbAhdrPubH17Ch3JbAzLZTVcGakBumTk6c5dDWYfSwf2CNtfccy"
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
