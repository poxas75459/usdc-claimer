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
    "37ofwsWyvsRmARLPVA57ANTn3ngqGJ7JsQpd5kyipQDszcp1h3gWB8fsP7W1YPoi5bADCC5vmdb32EqWzh2nh5Km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kUAZPjHhf3CKRga4Cd7BdtLTdAEkftW5huMZv3bnufcfws5LTwRQ8kDEQyAGpZgKbrb6Rr5hm3cPkKLTdgfSTSS",
  "key1": "4o6TSiwZDocrTGwRMDoprHHh3V5a67sBeQ6L5zUeniPkWhNgRjrBet7NJX4ELw2DLX8NGccZrsEB91h9UE3duE7N",
  "key2": "3EsYgoA9qojAFpEmimvvX6T9XoUR9tFPVnKqvPpezMohPNpW3NT7qvitbHEKqCQhbZ4pMe16gvVrhekQ61eeUCuE",
  "key3": "2svnRf5K1y51cjycFmkcp3UNXnZDk4WSmTvZaJjtrTHBUdrm1Gtn5D5gzUsFfXoxaHRVdwHaP6EHyH7otjFNhKVC",
  "key4": "3xe9wdp4vhZdQCwCTwsarEwhENxtyi4uoTHrKFgAzwvjLAPXnnvfYxnQS99rDUE1cHqCkrm8nHLeCirtd957uuYC",
  "key5": "3zUK9VFnMZNZ3XoZPCtHdWRR2KJJtje4HdFJkCfxTRUX3L9zKp8eBUnf7NSRzr2eLJYd7rQdaVKWsRCgxpB3yP2o",
  "key6": "4FexLUJdC9aiZWCxk1nqS4Hq9GV3hnaFMYwwpjWCH9t9Dpa9W5D8Yv32DqsvyVjGZLmPhhrsPTRRH9ft3yTcesoU",
  "key7": "9CMSyFn5bWNhxN1bD8jw3KeVcRq9KZLe2aSdtiWZ5Kg3JRhJks2JZwHpMwdhvXeVguE66aW7qRoYwbiCLoc1Abq",
  "key8": "3V6rq832F16zWmNbUdiTEKU37DAR7aYq2qkF7H3ZgWaRWwumz8ZLmPJpqTMRWrJHaw3EoDQ5JcsBhXaT3q97H2YT",
  "key9": "sP8et3R6ebfCaVz7dFAcwEgzCQcKaWbTkCzDN7m5vzeHAy9EM78fFgd7xmGxbFUQxp3pSGowzPVM6sJz4efgZgN",
  "key10": "3W5Feu3bQizs8CS2ZUTvH8Tt4ZkB61pQnuPnQ9zPD2stXXFN1GRToyTRYgyCPRBZB6g8JSQe78p1sLYMbdVEjBYg",
  "key11": "4iAcF95hPx8Xfy1W95nfhd1hAbQ3Lw1UojAqLRCZ9DM4eYNGENqwEAwBLEx6dm3DymkoEvAuzo36MTf8rhiZDyzc",
  "key12": "3TnXK3AsmtzBuMZwizsznLSbLSeA3BxSSPkBC1BSJHridKL7uMudTUxN4zgcCn7VHYiQDubZbWaXowe3AVH7pUr2",
  "key13": "2RNuZjkXGj9C7J199gTqLfdVym1cvb3y3MqPKFgeUwQzqmuGH4KMNJZdHM85JKYhzTwKS4njAxWjbhHTjG2s22dj",
  "key14": "3E82vdFquGjdsfJ5jX444JVvdzxTszLuznZ8fokCbJH9XkW3pKnXttqQUmYq1MZwfDB9gRjxZL7frPdfSQqP5vHf",
  "key15": "4CKjTttJYp1FZo1A5xy2sg2CmXqAcMpZUNesM4Gcy5E2XdSLYpQbFvqapoBgQZoXebH6UWrDRJhw55zKFKVmX9ve",
  "key16": "529US5QU6Fn4dcy25kFZ5FJEVvginXrRwjHdSGYuX33GjduZX4P1naE1bKCeVoTmzD4jNxMHNVeCvBqZowfJmSqx",
  "key17": "ByLfQUKuVg4vxd1sjDaBB28ve4pjCeTwAnqghX84vwyekKtdyPMJULsWAwBcYE87bKzRAupj69ysetkXhWhrsHX",
  "key18": "4Lcty4ub3RWLwW46ztyLHCNhg8EsBsi3EsHJM2XqmU7Di5wvWv78ozjEn3ZgW7frWDPUE8AzywcVAtvEymfthq9a",
  "key19": "62kqRgsZW9QgAF2tMeA7M61GPVEBt1MDHvWqELNXoPysjZutmeJWmyDakvmE5ptHKahcZfAYU9jaWyXiaWfMb3eP",
  "key20": "5CuDwiuFtGbF47PFgLpSuYeMy59J8tUEHktJG4LZkKzxZuUV1QBxJ8MYhbp8vMEQWdmWKfRUxbpCJeRUXVo2tXjV",
  "key21": "4WLfgwfbZssEKKtu7o4QCFELP2GSCadiZz261Fsw8R5LZTSvcQXVzeQm9egv8bFkUwXMagGj75BiaNyd18tgXy2Y",
  "key22": "5s3aXNCDcssW4e5cFGozhdaADK9MarxXodqRPhTbCiZoi3US8Xdz7C2ENcEvhh8ojLdGsmJu8ky6MCk3XHNDpP3j",
  "key23": "5cEZwc53hRkr3Fk7LLtyrVDpXpUTXtDAqGM4oTc65CNowBEDXnB4BvmPPEP6QXwz3k2L8LYLP3p59dJP23PDD4mB",
  "key24": "3Lt576FYxLCXrnJFKBSx5Dm3RqVckJuUh9ALR3e6LPe3wxqrtqH2WWocy581QuFTGWifWoeMXixtc7NecFLqDGbe",
  "key25": "NLyKGydD3wfTfV1abrQMGzZqAQxVeJqR4qowA7vACUNKSb7nyd99uJ3SCz8AuNutQ7PywAqxaVACuDrL221eAAj",
  "key26": "3X3XVvk6ofsYYtXW7Mom4TV3GQYaFCHtWy1L9Jxe4jxJoUmr2LdL9ERQK6kEb4WYRygqi5wNJCs59fwrmdii6jSu",
  "key27": "5PTVkXbeQFWRCfmMxEo32czP2XoxkyoUSUL3YEQUhLq2fATbRtFt95zHdNHC55JNfYDV2Xx5c6ungtyXYVdDqTLS",
  "key28": "LmRU3v37jcj5fopyKGXKX7gRDwKq8c8zSvUrfz5sghWdy2oPN4ZnSCpsj4G3xoLSmvhYd8sj2iHkwJ1tSD7dc21",
  "key29": "3SM4Kj2b9JY22L7kFa9uyZjZL5mf4qfmXwEqrJFwgKpPo1MbnG4uhGYhDpPGDMPPDiwEojnxwZf5uu8mjDF489c9"
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
