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
    "4ARjdKj61jNFQJVsoc8uWbFwLDChCep5F9cBz7KCLQgMmH4svCPebTSwC3LT6xpyHptUb59nKCMpp9fKQ7d6rbsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XMDvmzd1QgBLbTnTutUq7FHQEtPCMhNBXxGy9tP9eWA7YUJunaLraU16mXHSgv94TQ7R8nbccJZG2bYcR9n1K5f",
  "key1": "4ncwCo4wZfJJew3RhKBdFsJ1ZJCFfWvyULbmxjev9A5SvFTADemfTZfL2Y7XcVUSNwj5MxnnrAGTAxsUAYWuc2j8",
  "key2": "2cV8oYGsTQSHdFAL7HYeQxbiwGHLLnUDR3kBNR91KpZf5MsYZcHdkMM7fRku85JFPcibBgBN2DdETWxwQo6UjTMu",
  "key3": "3hRfKW8i3C148gsdUc9b5rdw9FcDkpRXqCwmfY863ZLAUymWJKRPEvapugC15SgX15P1RG3WyqXfiV8hCmrLvFjA",
  "key4": "3WTvDTftdqBC95ANyoyqssqk2aPAskVVQAjY6CnrHhBxXjjZEmJYoxoxKdmQSQUf9J1wtPZFHzNf18SdAwSC3tbQ",
  "key5": "2PbpkQgVdQwofHn199PVW1qVGTCyUydgr3ipv3HVd3YxbEiqAAygxfg9hGpGatFt5jhxHb1niWenkFSgHTxsA1va",
  "key6": "4pS1n4cBQYAywkNojeaGVvzPYfL6N9T72qpnPJEkS5BSNatwJPFf5bfWLKayb88XdocAMVXPeVb7bwGrBVSb9ML",
  "key7": "8bunuPG7d1gQ5a2fZ4T3E1UN6Q6xrP9kZzW9p3sKXSeAXYanaQHDph3F7kHoRLVuJZHL1PW4iddKNvgzqbKX6qA",
  "key8": "2MvP2Bf78sT9aLKBqGD8JfDUrGeRWEJkWSTYqZn7C3zn2PzSaCkRJZURTCcm69fePMk2CtwyHB3izUhEpBwM9LsQ",
  "key9": "357nxc1Hc9e6Bj468NRViwCyjTdGhUibq29DkroSCbu1PHnsGo8T5bmV7hNyRVGTeP7bAF45seKVYwfTxdvUYLLa",
  "key10": "3oWPmt898nwMRx3VdZwWRKZ8VGHmV7ELsPvso3JS5SsUWGxqd8WqeBcBdwtNdfWRjokPzt3N3YsK2Ri6a5gdoRwJ",
  "key11": "5zMMmzfSjQWmmREoxSPh9rTKb9n6LNCCqj4DT64V4LEnCMezrCPyWTJi6cV7zv4gCWdCVwhJuNEaXejiJNB7zenZ",
  "key12": "5unTyxUJP9k6AwtcVKnSyTWJTfouNT2ToAXGk79p6N29marHNmi8Af3R94ByZsBh8r2omMVDKHneqQvtm5bTaumC",
  "key13": "4i5WeU56A97jFGArHz7jtdvTwA5wBQzMJvx7QCe8wNPjk3gN3bdC6isAZNaAf2oGV9rSoYeMRDbtzeYbw2UiSurZ",
  "key14": "3GpdeEkzr8BKLnVnSy4FYpNrzHDjhJqzkvfJWh2oacvkA8frjuhSE2Vt3MNKwxToaUa7FjtHr5sXK5H1TPR3C3no",
  "key15": "4RCMtgzroRdvF3sSa1LwafKywPF9vnYUDLxmh8rWXPJ6XftxeU72wN3dViY25kWQhjCQz12wDqqN5WhZDBTqJ5Zx",
  "key16": "4YmrgG2vLCvSP8tCJ4QSkKU6RpDmKxTfiYRpg4H7pwra9NUUiUDKLAiLSFdb5KvjrmrThfcBxBNQ1dfYDdQhcopW",
  "key17": "5xJ3cQuw9KM2RSPW6Hoc6Gi54vVsXpa3Gv9wYCVUjiKReUqg3BrZtLu124GDtzxprRotHNNdS1XHi8PqnKKYfHUv",
  "key18": "5Uhhm7fN89bfRmYHRGhtC9yj3VMXr5mb2woBvpcAZtNACt9yx5ZoAv8f5GUC9G2u2mKv5UWLgiPiWn3XzFyYr9PS",
  "key19": "BuFPfxhX8yRrGGy9FKsxt4qRuerzR4k5remJNxpqhKRhmPs3yKaiswtWgkDFwkVAxdiL2k9pKbCWL5LwGpskDkY",
  "key20": "3oKSJh1qGFGyjXoNLkwmrKu6S2J17DVw2YcgkzN6PtDkcdfNZMGR6LCGYNTJ3qWyeAQv8n1S8A1FdRPpVzdDX4UG",
  "key21": "3z4TH2vNjJXxzw84cVDJDYCBL24h6djpzRuEaie9HC2xFjGbFhgUKNy8RA3tS4jsiwPjhVPgreZGapo3F5htTsg1",
  "key22": "uMntgCg6YpQ1NUTUwMacFR1xuWUZKJn9euVG7VygYQXkJpJakmX9Ja1rVDmc1JhwyuHyBJE949ix9mGBmDxkGqu",
  "key23": "2S4qmxcfgabBCAUWWaTHGmtAZfLAxwYRektpb8kns22bW6ee59YyGFYUSqBPUcJayXvKLEugT8fuU2P1ruQKRwKd",
  "key24": "2Erfcs9LmeQ5z3JxnYTbC1bTYhWZoAHB46Bui9dP1t7v2UWMsp79CFgaLUkR3SWzXSAy87DboPCssE2eoTpfwF4L"
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
