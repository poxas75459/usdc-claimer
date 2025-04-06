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
    "3Y2BxkLnAnru5ooB4NDFcFS1Ppzbxp2TNUg9fqGFyGHyTUc5NormjefQJM6Nf7DVRN9g5ZogZ56BqBpua5tqPPNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BwaXpV5VqaBDe5heHVBogmogKBhpGSgV4KBxgA4F7Du6BBEcdSFYDARHFPbsuqp61WeevS4VAZ89ERaZuYvWQtt",
  "key1": "63ujzdJK5QFu6StTfjfY3BC7Xviymq4LNxND6aPsja6xaDRi5P8HQmoaRz69rre2dKwGxGU8ovQV3EVxc2MkaaKe",
  "key2": "5ucHEuKUUkhaR5d8JLQoHQwqLwSaXQXomVjsU8JarfvGZLE3sDyHbDkJ38ggKe4i73wbRHwowofLZZ5SxjjkDB1i",
  "key3": "3EWpE12ffuLHpzydjZxG2fYAWXRLVmcGvpYqYfejVxqDRn425AG3Nsh4JeS6m5ruMeVNZAuXfyo4b44LM4uxArWP",
  "key4": "GqYL7QZn6WEpmgRvN7MibZRF1q3JyEZUMG4y82CmjMupAEgYS8UzmNZoaWHenbmkBmVvL4syEwvb64P69cPyeVR",
  "key5": "4PSv6JwfYhbq5NSSM9zovXfoSDSbrz1SptWzos7KoKTy7N87BU8Cod9bpTTQDhQRNprco2Rsnf2ZrfHKcTnD9772",
  "key6": "3k5PPJYVWdhaqzXJLqJqTpETnbnzQ98cAchmY4Y3cbfPNXZJSduWi9SWGqbFnWQkxA2zdeSmXujXEQnWLCaBdcE9",
  "key7": "5p6UNPmqoGbQzifQYjsWJkDph3W3CTSLpLRzSUrgGMFj9xRuCBh1Gy2DcChWxSkHv6mz9yFLqPjiuHsNq1onhmUr",
  "key8": "5j66foFoQBAbPX4ewGZyBTo255Ydd34TfuKSih8ghaWPQZVwasfbVzavP2xndRkUCS9p5UAdZcVTFT2WnkeCXou2",
  "key9": "kv1jRBFBzdmC7RSYBKh6nGUifSkSaNGvTNyGrUDF7gbGQwwiJGfmE1oArEovWJy7TAdWmdsz4oVWgAkuThkjQYc",
  "key10": "3DAKkcbRwThj6oPUtdcEHKPQdqYpEt3zrHqe5ewr2SYpw7PdGDoEeuRtFQ7VDaBdjQ1iAr8p62anNsL1dRNa9s2U",
  "key11": "5uy3LH11eWBr242XuyXTG2bCi1wQ8jYidFhekGYE7Y8UYvqZEy3fGzpRafwjkFB92PcQgBEqT8x3njwSJ6Bk6McR",
  "key12": "5xcJ2aD7Nf25U3KNvGzeBEqFjSoGpe1dCYTuG7CGmQUD6jJZr5h3pS9BypYW96eVyoEss11N3DuM6ibjaJkmu5q6",
  "key13": "3jZggKkyDbb7jVpf8XnwtFQqB6VAgaHhsr3My7AWhH9iWmDf4tx5PKe8gHUPHfBDaNwokBRdWUAunYaJVPhUufZt",
  "key14": "3X5u4wWcf7ZuzezBhNTySvhaJGPCJvs4cwCJtdijnh7RsFEBtS3x9iatPP38Z4FWuf7dryU95eFeo8onfye84ec8",
  "key15": "3DPSYRpCHM2L4gL4nbMRzRQJupZnMA2YTtk9vRE4w697ryxpFjShoco9QK7yuEANZKzkMtx7Kxdujr63Rfea4Mfg",
  "key16": "5sN3FFLjEuLGLCbYZuNVB92vd3gBvdmUypCy1Fw754Ry56JErkiWBbzyuSkn4FoTawELRWfG2JbXdTrLRwgzm8ih",
  "key17": "5Jgtruvz8MnG6HDHVxfs8ERQadgQbLxZReCQ86ZxRU7qXjaqbJ3YkhY7rLHkpsXoYCAvmuyUX8kRecCxvEzdgYEN",
  "key18": "45hnoUqrdSj7koB3HxNnqHmfMGXazMfH96WkvFtqMnNYm95TzeuYfR5jpmPG1coQ9NYSKuyXyi5AYyNvMbgBPqS4",
  "key19": "34du9GeVA1b44FbwJ6w21WkE8jEz9PSHtNTzfhWtvFp77KjSL1BcTsuzxKFet9WosJS1npNBGNvSehyz81xq156t",
  "key20": "3hAthPrZCFBmT3sNABGKeWa3KtP26t4DU8jwKWNVtBwpMYjJG3cVw2MBiQx4vdY5bgZbxvr7Qt6RZbjAALLyXCYK",
  "key21": "wdhUQ3EmJE4XFFviAssFXxyfgP66bsyHtxDBARGVEykLf26ZAiRMn6Ys5CXNBzoK22omJeaW4VsvxviVeW2SPXM",
  "key22": "3aTbTe4MkKwQGTTuW6az8A87PoRNybpYYGt2XSBZHhMiWM5YtuQej1mUGXGjnUnnB3fKcyHehgM5tNLLKed3mDaQ",
  "key23": "5aSvNbkpt44hYVJJPYUVKvVHHx6eFexbUG7CSnXLpxFes3dLs729T5xPjXFEL48cvJRc1XXcmLSRbiVsevBgSKdD",
  "key24": "2iqpijzezfjQUiSHbwFjJDCYWYXQG1Vcqww2aq8Eo8TQqCKmfDteqodaC1uJ3KALLd4uhX9bu2JBSwfj7b5dZbUg",
  "key25": "4skCToFkFrXMDqzLLEsKGwyvKB8gmXXwhruDKAhWRKbjhPrJtcX7sB299qrQSTFF44idyFm4bVXCjrTMTrugAAn5",
  "key26": "5Uwcbqd4ymbKy3WkEt2Fg1gDMEutmZP2oeTNUyTBfpZZSpbNpzqjHuqi3e2XHpuhnZjPN4szuN7z1t8ojNZj6AsD",
  "key27": "we3yjcMGfts5fRtDXYoKYSKDjytQFeNaUzDDdz1qpKxLwRyonWXctsSqebkXM3AbyGZYUA7UhsveSCwxpsWJTRD",
  "key28": "42jUJ9gFfTcCo9MAiirkPkeA9SsmvZ1n73Lc7dBLuVD4dmkDkVWhF3DGdJo832W7yxXUucEjFu8iRyAjr7EsH1aH",
  "key29": "2goMfEbVroZWQ9vRouAxEdrmv49bDHKsQg211XVFaF3cJySeLotLPdDZ2a6UEAsJD9gzVfecDBRac1wukLwNKs7M",
  "key30": "ZsDSZCpo2KoFv5e3KCayvPju5kHXXfYsSbn2nyyzp3L9VeiURQUCz8iPY4LiJAzavCKeEeipUcLR5bqb5JcSAEF",
  "key31": "5dM3wxwSsfZAtRwyKMSMzwubwjtFEp8oWtSBspyBRDAovHEQ6CkP9ZxXitTr8QJzx1V21hmi4RrJuAS6qctHJj2c"
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
