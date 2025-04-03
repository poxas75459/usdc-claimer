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
    "4W2R8KvUd7jVoE4FGZq7oaMfKAssNLeaReyt4pFACGS45THoMoz5qNzfKadp1wUvkxSsaQbaZULyBugSzxuwrsU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qi6phQN7tC1RDiyB1o13w2fZ31CVb925rRpjf4dqkhcorXtavzu2VpVRD6T6ZY4NbcC8ipYkSBtVK2DeKjmgifB",
  "key1": "mmcFJDxYgXcCxNV9kdmqngTuuCh7rSxajHBFXJhWMYbWsF9XMRfzKofduWzJFg4mDzxCMqi3BbPrFboUL1UmVwg",
  "key2": "2XiWy9XdNarVfabm1qNAUGbJreJmdH9JuhNqrNYVfcQ7W1U3VTJkXysxdhjwPhFu55t3pwQEZB5fifNC7vqD55qi",
  "key3": "3bTYTLJx3STm1MuvNdNf3HBbMBf78BnW2HE143gFaG1MRRjhxjuVe3xGn8GPgWVYHo5XNbgd7sYvNRuHii6tKE9P",
  "key4": "4Nq6fWZ5N99eijPLixKWMzLziZSz8qoivS9BJYdM63qVKXcrYSEo48MVhydKqpTLJX9wFsC3wBZiNuTWHyPr1GTd",
  "key5": "5nwHmM5H7pd5KFayShGZaZ4BnphN7cvAgdsSuhSHwHZGmUDTHU4wnVK1ujETq2Rn3UTHJ2aKPGPZAWvpTWdnPxDC",
  "key6": "5BLTKJhEhtaAJxML3Nd1YBeuQJQJp6ozprUBZojwQCU5JzGUKTvTTFcziKrsv62ZstjiDDNszJYmfqM9ouQUWh9b",
  "key7": "4JfzgZsMpcdKmEDzzyjVnrvjcerqV68Nf3tyAfCcmqNZ2ZWBN4ahehgu8FrpuVj7s7dcmiAngJa3pKBHUJexUCrk",
  "key8": "2bwnyoaak1rrGLW8GEuz3GyVJ2u2D5JUP3tz4FmzeN7sdqtWfdBqTL3R1YvKMeoxkQVMyziL8GX9UXUDKuRPEGwq",
  "key9": "5Smpidfw1XRksNYBZo4jrbYH2y6n4cmpoaobDzvcmWDTMe9GsKwicfXxcSsDZcfXBRGnTdJd6S6ARHUnghzTMnxA",
  "key10": "65PYTEgqXwpV46aT73UqWgACJvxfFhHp9RudbJ9CuP7sVkG4bJR7PoEgE4hp8BDsWyeC7CqsCDdPfjgVKVJmUqge",
  "key11": "5p3m7fnyMzhJnGpfT1ogzoP9uJCLNSC1KPYtpfGYcUiKRFJsEw5yBSCFiS1huK2LcDjm1NC7RWdsLcDpVfY4PEe6",
  "key12": "4CeEPVCVkfmMjvuPT7WaWgp3ykBdQP3G1DUitwB7nubEbyuDGquYazgstLaENEMA2dGiNyLDSP1yjFd3GgGqyrvo",
  "key13": "5NcYX6JUQ6qnq3oWziZkiSEuGBNLMr58EkVgYrQo46WVyJ3d4DTFEnUPpMxvgP9AHynCRDxpR9ScAWS548pm1a8p",
  "key14": "57C15CZGMAdSEC8Z9rtgWHxA7j6r55hVifWPXVw1VCdYcRFScevBAjHwF4VF4CDEo7unbniBiG8pAVGYogpeqgDi",
  "key15": "4hsHaeEkf5nx2gRE2W8fu8U6ugCyRQSN6GTFawGxL5FXzbBM2Ry4AshZwdc2atapEK1xbTrhjb1CGEU4PnCAnWBF",
  "key16": "4ixN8LrMzqexqmT4tFQyCF82kkprATgG5BY2aePFCHMVqDsP8TPKeBw1qjLVVWS2TQR57pgmhr2rgy8chK691GHx",
  "key17": "5V3DutqJHLH5QbqJYdqHZMubZS2Yda6qPLK6Su2LJwu8St4WunrnbEkr6MTeceHPg15D8Hmx7GZB5ySgB3tdGUDj",
  "key18": "fkj9UPdicJ7tK7dAd7KP2xDJBvgwc6YxW65U4zD3BSQijWjpXcYerqqKhT9innwMmw6YcQUDnCkgWAxbnde2NSe",
  "key19": "5uXLhAtfdCEc3S235vaCKw3zMDCVr1GFsvmxsdtwgNQ8VtmdfqziQw1GcfyAJrQzvvTqQBTXbVG2QcNLdvT52473",
  "key20": "32d9hz1XDM8khUaxHS7nBkEUscqJgD7ZcYzdMG536UMzdLC1h7sb5gHviwYNT4JTE5N3eziHu5tRsnfpCd9sUJcs",
  "key21": "qjW4cbMK2hG7vFYz6UZD4QXgYHJxQeGFypzXind5V4XJvTFbwqLJHbPmHFTnu694zM5Mef9nKBkMh6NUyckMx47",
  "key22": "3EqrTodaGdveWakzvDX8J7sRHKVreAAjvTBfxvFTLcMyZP3pSWmpoA98oeWjLkP1DxFWz38FBxbsPWkJE8khcFC5",
  "key23": "cjfeQRxnSssjxBVq8QNPSVZbMp3ZCo7wZ7igV3rSjxDUzJgaPTpA3HXHRdmpHbFJRt3zxvDt5Q9Jg2ebViJ3jdK",
  "key24": "58LHaWgP3oWEzT4qinrM4cJTE1JF33TTnDhPA6LLGvYerC8J2ucDHmWhhCYyJ1CH8je8B1tuwphaV1dFRMRRtw8N",
  "key25": "4Y1C1ganVFHytMz3jfkosiZY4XQ7F96GtwCqiYYJxjEDfjC92n3bzdpC3dJDGf1o3irUBVLzgrKVvU5mC7xtbPjj",
  "key26": "5dNXgjyJNs4AuGh5xVGv7mEKZJLN2rmKuE3BfQNuYvumDdbhokSHzynGswHtsbrSg4GQFxHwSPSWSYp4HfiiCK2E",
  "key27": "5hLiUg8fRDmHPfk8Y9TDg4qExe8WJJkZ3RQWKYqLCqoDMTEKp9K8jt8PpCmqYsXtMumY7XSyBZTg5Vr4N1efDbib",
  "key28": "22Bzo6G4uwPmYc4AYBNZv18SAgbEfiBqSS2BvYTEDAqTzghTZdwHVCqZyMzDUgvUTWBJ6PdfkrRq33GocgwLnLKm",
  "key29": "45DtsX6yiEi854MAqVSkdUGQtEi9oC2HQ47jZ3U2BiEB9GyoC3sjKCinQM29pLbUBEBrRVkrzbL7eCxd1bi4M2QT",
  "key30": "1bAgZvKn3B1XkxbBq5Vfhge3qF8GgrKWz7qKhn79hLubXJqgo8sLTygZGfBpq2hZQPAfHinsWmVLGeATT98cVj2"
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
