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
    "55aSuS5aqyYdqs4js2evdupZdXsB2pqUgrJU3dDBZ23sL9uBuMJjpw2Cw7gMdUpByz4upo5obso8G8f9yg23vSRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H2S7Wy1VAJhir6U6z314cgbxn1ygy38eP3THNNR57R8cA2WzxGm2HLqXjrRuQ4uZF1BCQDzGhnu6fV7sdmQ87aH",
  "key1": "4m2ZCZE2j1JJHeJuBsZq3ogKySAZZDQBWKqxkxLUdTWktWZubez5Da4oboEk5odv3rjyuqDGuuvbQAZPQZLQjB2y",
  "key2": "fxVouALSv8UxULBqbAp8cqVqq491nriZ3PDWyXQYWrfW5Wzoobmw9VmcvXxwQb5RcytAQXTje5GYpqeQeKNxoNA",
  "key3": "2Tk8NH5dhuWmTcn1SGxzUeJ6sWsaXhfs7rXLhnNrERnmfXCri2JJTTikNdLVythTWLH7g5V7eph3txppYqdtcm1k",
  "key4": "66b9P7cmYAk8bPAmkVA9ZbXMkoDpfgKS9YnMx1fTL4WXvSiQcjaRae32fQXdQiyxXnKvN9iT5mUQyQpSq7ifKKz",
  "key5": "2Vc9eXTQussZxswqdqn11i5yE1tcH92UJqHGuoMi8frmRu8PGMboDugMLEYDtiGKzuNrqZXQ1DDxq9c5RCaYkZzy",
  "key6": "3pqDo6MJu8bAAb8df6QYeoE4Bj9DwFrZ3jfy5moJvW3KQLxXrdCyZUtrKFzBxv5DigHHoUkvx5vsMUMPTjk9oQed",
  "key7": "4k7L8z81fJGQrD5jmdbHeqDQTgKVyGh6ePpknbSfQACFRjPErZATvdEYoL15NG3n5M4RSe4MnFa3p9ffRhAorLYA",
  "key8": "9sHRerkpJNAnbZ4EV71RqNd6SUfWeDRRTp4yGj1kS5Y7tWk4fADgKcTkDFnT4cxBdbG9c27PR2tmvkouzT5GkqP",
  "key9": "2gLsMjooKvdbZ5fbe3z4PEVhAkTCgxZosE2869gFRQcDizQ1kNhLNsxvPzq19yEUJ8FbpFzswjbfUcwGBWZbewwj",
  "key10": "5g5VrBwXXuevEn5uDMm49EZpdJ2i8X7CcMzLs43ePdwZt4i9w63toPxotwgeVPEMpwaNQxJLCcRrsdqpDnyqWrGn",
  "key11": "PQFrsNk75SaXvT6ewnuTVGX4tDxcY2MiKcqR4xd4dPDQu36edWhgswT87EyyeY1if7Sa7Wg9hs83VMwkB6AZw2h",
  "key12": "5GFEZcvcrJwB9SXYbcazk7yb929ku8weBkU7ovQp981Xk5eFM6jrXUsNKsUQ2sr8zeN74TPfedfuqR8sQzHaaMdw",
  "key13": "32vwFxVvRovMn3cjUpBBTB3zA16M3mVeaEr757iG5hkcvgQNMdg4QtcejP3nP43ysMvSfuCTz5KrX4sQEux7skzu",
  "key14": "WicbMvezSNM9eQwxMMc8HwrH35AT5ouZ3cdCngzRYC5VuXcnNXrW3688QYnm5hx2LcywSf76E7LJKKtA8caqa6k",
  "key15": "BCXnsoLSddE6F5Qk485FJCzEtYVr7aa43nEoAndqBHoppnpiNEtFDRBUq17PJ96N8LM3K8jDFZaPea3xXnECxek",
  "key16": "3XVHgvTVtasH6ujbwihTkUQmJiVgB3fhgCzQumLSP4wJKW549hdtAFJeXMHfv99JgMSgy6v6VJAVcQYo6svBnbV",
  "key17": "3dGYZyRUucXaFhgdVKUWsfD3byFAtVgWVA9bf6cN7fAwQSLekA2rzRkNkp4gAAftXDCq2nHbwFrJNcB32Msw6z6V",
  "key18": "4kUotmzKKkiWxjffqRaxHRT2MqmNkP6yj1HeVLxcXSBwa1zkFTh9SXvhCZCdDrME5mqTswAZXksZ7NTUwfx3dtx9",
  "key19": "3iExcZ51ocn1irvE6YFRnqpaERq23drdnwUrRhEZZxq9n6fw8Q1mvYCdMUArGoHtnKsgTEBZ7VV8RMaNxcH7XASX",
  "key20": "2kpH4ez7NMJsXRJ3mfF8Tz4pWAUmDBMxKaPZLGEmAyYgwbhzuLnhApjAo6LHEpcmxA8zDnsy1RU7rjfLdPrAxpME",
  "key21": "3FRFp6giu72qskqzvGQdWZWDh7gy1dN1pxutmGspY8myHF3LdUJvixdMBfu92GH53Y56duSKKPxwrStom5xvkhxY",
  "key22": "5Vamv1sdmfg6wK3C9k2DzK6YzGLkuu3zuRrmr5mD7Qo29UtuDcD6HriDR2b7V8cErGukYV9FikTNYVVeCxPtnJg",
  "key23": "xGtsFPXyyx2we7Gen55P7rKDV9VjGRSc4QuFToJpKr22wSneRMTR3vj7tbVJUzv8M7CEWYjEwxZJCw18thBkJYd",
  "key24": "63dZd9Qpdt4o46a7N49Aw9fZLAeJBoimDF7cV2BvWzVNRwifnsR2d5K9yD2eVL3QzwWV8D9hvNXEgCnYEfWQDSxX",
  "key25": "3ny13G5A3BDSdGH6oZagPPZykcwkPe3Zv8P6uE4PziTopPddrVBJwsELYY5D5ogjukHn26ScfkArF8b582C925ix",
  "key26": "271Zt9QaKw8KqUeF8VJgZu1JisjjNLwbNyMh5yGpyB86S8bMi2rkFMh8AuQkHgYJwNq1U1xLSBmF9JNvcVcKGzQS",
  "key27": "3hdHB4aYfbFkX62BAJXVAp8yXF3A9noPv3LzX5m9SF216MuNdN14oUc3aj6pesFHQ2tcesP1hyUWyo4Y1qx4kF6S",
  "key28": "3risAFZvER7sUzKGthzpG9E6g64uWboyDtDPnrJh5fmwVE1dzCcXGMyFtzPSA35HkkZ8XFGj6R6U1EqHZcJ7wpVy"
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
