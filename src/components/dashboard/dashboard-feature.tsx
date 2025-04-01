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
    "27ZH5nzaSBkobRNe9GDp9Na1v6YyXTtngsJ5wdmT92iQ9XfPDBs6t1ANCSJVkf6mWPMqUWRNnxJ2ChYNy7CTUXyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "og8Rzs4WRqgEmBRC4pWdoqMPX9zxoQBGj2ZcNDWdCeBaf8N7Kn1tLp8AG7cahcdPrvJhnNuiAWWybsLGAgyJJCk",
  "key1": "ugkxQ4TAbKqxBBk6Ns9YwzVVNdGiLUTEtDe9v3PaM8zhP9X5UKKVwhnaumxRdRtU85hRJZkLVMHqpsgg8nP3g5f",
  "key2": "377eX1499A5y9AzmBqG7LrSKkpBy7oidt8Dz3YsFE2NX1LM1X8yGkLTVsEcjLS3PLZ3S77P8PnRmXe97c51mogtv",
  "key3": "4BrUrSpMXqhTaWmoNW6yY4V2PAzPiJetCf2AqmxDkYYWUndCUEhPBbjeaheAG5snhMkyCKGqEp3uyZmczdA53dMt",
  "key4": "23YJbCwxY6PgHp9LbiofPWVxuewCqD7mizjADacLjw2AaJeU9Pa7WTz62FqWjCGh9nNjhfTRi4V7ygeDmxDEREcy",
  "key5": "2aoaQr8jPH7vhCuDvMyKHnU9RXDg7Scqcs8TMC7WAMQQsCEVsiP6CUKhfhTjNc2kBmLvyCkTq6bBcfDP1enMJDDE",
  "key6": "ri5hLKKd93iiA3JkAgvRHDi32htYupcAWbMPfHV8FZpa7AzcoedqQm4rFqop3AKXc8hMND4eajducs5AVB6DqKC",
  "key7": "4LEe3QCxipWc3sZxqNs7NNUtZWFjtYtXWZpUhY3FWS2crfFGUrEc3a5SvPUYhb4fdWvALP8ZLzk1biGbpT8DSe1E",
  "key8": "8Giz8PMpXDZfwBDVLF8z3XJLTLVzzkwtSH9yE8fiC5XwEfZ1PdK9emFz6ydqmpxjBHMjyihRCsBpHeCKaR1KNfa",
  "key9": "2V2xc8ciaKEGbCeNLdrgco4WcjyMtBkboQD7BvbEk2Artpk6r48qXzS1sbEVgACSqCVJRqb6kJpTzLXjysGayAXk",
  "key10": "kR2KZddf3o3RNcsP57iHZWLWgKRwECAmwv4mDztNk6eki5r57Nk5CZBsqc5fmJVTf7UUPF5DCcMcEcq4zYCTMgc",
  "key11": "u7jXi3MEnvkKgEnuXBggScomqYERGawJ9Zf6diGqiBB3pUYK2Gy1nDCPz2d6dKncG6uvnuQTRGgXCNvK4kj9DXZ",
  "key12": "i9wufum3WSnH2pJ9yWGKMW1DMdJUeBL29C4nu9j2U8N48hAjDvvBYJ7hzKCVsXaCBeHBHSFWGNnEKUokpKMwSJ5",
  "key13": "tsCFeqfST2pXaT5SNpahx7NVjBddNwTRje3W5aVZZJXGgJ8NuMLhFAWNMdJbPaJz8AbCYiBXeFH2qrXaoFb6Qig",
  "key14": "5Mt3tZ9ibLxygXLNpPaYVmQKhET6TPEAP3XGXrbtvLT39JefUeXh1UMY6Pa7cMUL9Qt46dWLFDiAGsfe9LzJafNg",
  "key15": "2jVZjcmtqpwGo4R2vyAAzxeb3eTa5aivWWxii4pRrmSbZkG9ZK333uEqrWCCTJNjB4WGoddETUuQnjNmxEMycSK5",
  "key16": "4of1tjybPEkrX1VEEtcWgvKavnKru6SyoSSGLuc4VoiPmbEbSpKAoL5deu7meuLhzVaZTSpXQFPkUk7ih9X6UcNX",
  "key17": "3jrHgP7VFtQtG7xNZrksc87EnACuUFKaFkMLteHNC7U4hm1JUtEgVdskVDsGKGfUJsM9QyQDeoxgSKYFs9r68dqZ",
  "key18": "DaVXgWT8KeirHszCbodD3RKXvAU9dAQGFpVS3y86n9xYjLd9duLkywpF7XvP2sw7M4r5ff5kzkoqTzRDnfHyvCP",
  "key19": "2egBsAgfcb9H3QMwWqDsf2LfCDUqk8vX17iHTGppmmSNj4W6f5SCiLoaXHrGxxkfXtvQUSGDeS4zqthLwVq7QvoA",
  "key20": "3mU6nPhz3K9ikde7SVyJvv6ZdVY68Dj1JrANM3EnDDSmZvLT8L3V8zBkfJh2yaBxtVihqYTBXinq14a6RggEmmNb",
  "key21": "5JHBsZoXqqBYhTkFXHGbmQDtaF33gWF2MHdJi5MYhhNGNHKjMd1ocod7KLLQGetiije1n2XXsqjxLo2Pk8YkhEev",
  "key22": "2TjnZWaAzNHjmEZxn21zLp6eW4ZMLsgCNxd1DLCtPAQYfaShTy1M1R8MFK3ZvVvUvJqPqQcNSX1mXBNqfMhAaBaN",
  "key23": "4mfQvZVJRofzrcoGtqGbm2FNWS1tnqirEpFftUsHUsZdC59ubuQgDXCtGm22vw1fqPoHCJTECvZpJP2jER9DTM3x",
  "key24": "5xFUWeWZQp7vT75PV91n8L2vrRwqWMc5K8eSZEPypk5fd9eDsEh1Ggyu8knMnZAsjNSCwwpxtN82dfq6fR3JkmuG"
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
