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
    "3H3Y4iMYibRTDcpfBzRBUSW96T2eP9j8ckUVdMMe1GKRgGUfgjWu4khuSUL2EpQjymPrdgLkparbM5vYuPtJtFd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bxmUC5tV5wnTz3eY8Th7MQymPCiBFpSTvNa7jMiEoLQuU6KFUiCr8g4c7MygrHykQWpUTTwe9ukbocBfWyAfeEY",
  "key1": "2QGTQyRtKmUNUwbVAmokJRXBCTppAwyQzZvFpD5e1tdJw3yKN1WokpEkeYo65Rwdmcp1SCreC86GKjQuXzMRNCwn",
  "key2": "yshKJQGkX5kEZfGhYJSfRttwrk5BJ4W4fzcGYAzdvPgmhL6jLMkEp39GhYCTEyhJCPmCoXcj6RX687cqkHwUfLA",
  "key3": "eaBrQxgkjAGwe7VbNdH1UyixsWFPmFrJiypoQe3f5y2PdLboNkT2cNxoEkNAfyaR64UDb1Ndb9n1iQr7R9uAQBj",
  "key4": "4QZhoG6ZFEzxFWegYVajcuomfHGvFF9PZ82Z9khvPBhpjQHCCTYBn3dxAUC3DWMemM54my5fmPhRHmtPEXtMFFek",
  "key5": "53TefANsr91PEdRf7kUVEMLGSromxFkF9MGavJg8D8f9UvnKrT5mbdHPzzvgwdPf74a2zCXDDLUbFmH6MgWJFuLx",
  "key6": "2UoK6GKdBRmf7xKStapiiTisDDLysrGcf3P94byZQYWz5XCVXVwvSf92ZYwtbBGXKwercVGvcW73862DmFSoAkSP",
  "key7": "5h4qnQBPyEm5drvSHUWixAzAYj2UShTjyJ2fMW3W8WNLEeokFtjo8hZ6YB164dXP6Vbxsu1v2nFdMR6RJngtnrNC",
  "key8": "4rk7veUihQx38Vcvp2Q4cMCUfYW4FxzdQpQ8PiVgtMqJgZSoFBgqkgc4ThXpCfSJRQXd4FTqXFH5SqycvXro5dmE",
  "key9": "21QGejkRFszwk8V8StfmKK43DfoGhhwP5Eawcw2MrpKcPJZHnSBpAR9LtNt76Xwo9LFGvp2ZC43FguUM9UCXYhec",
  "key10": "VZ2hxn4KnCafQFsHVkvXpWQx27AGvigfzaw5mwjwzADiNU1N3vhzpqu1dGUkCcjuGJxHdpMhQSdeMHAmpeWPUhd",
  "key11": "5XEW9wE5Cpd1b3qwh6FfLGqvwprDFPcPfCbz8ryMmmKwxzxW6ia5pmeKiYkg8PtK5EETv3Pbnj88wbgNNQEM7B5",
  "key12": "4ruXqoHPLo2BAjGJoFKUKD3GcRUShdyuqRRbk3NtqdJtfdznvsCW6zfNGYQ1HcTvaA4qGQR5itV9jwfytSGE2AsZ",
  "key13": "2dZirFTCPRSiMCnh3hGYEe2M6mPekXLvMZAQ4jNhW4bXvRjHmB9nqcwcXy3LkL8QwGYE3DczoAqKLEAbwL2g68mg",
  "key14": "81z4QVrsfmpeNGgtAatwdqPwmrProk4qE6RVMkGMvuvdFGH8QqGpj9K4Ns4mRcb2CbEhMTtckTzvaFyGssrHT3b",
  "key15": "2kZiQiZYP6xWqgtG9E3J4Q3f6JJBqPq84ywxTsCtXSoBgVNwJS7anYXGnJWnQWut4tf87FNJUsg6XnSyyCvAEGUe",
  "key16": "rAS1EaEp6ZBkFj5tGpGqQR9wvJCaPcGKnUTk3QsJ8jcsKRvfYZuBkvtm6SBpxAUXrGmVUdxVZnatVhSHbgzj8zm",
  "key17": "28NBCYBUu8DQWy579Tpu9DbkEWwV4BbRVviYeMLbYQjysXtuDaKJrAJET1b652AUZgwX2LLYPpHqdHLmY3ZDWdba",
  "key18": "2eUoXUo8maEoMEG7rjjoJsRuRXaSQqKKM4kMkYpHQSGQXoE1bswzxBm7vM3hXyCnvnGsm9inVKPNHegFtXmxNtbV",
  "key19": "65D1mSdEuJDzJXW8gZncpioJpQNPyJ6z1U7zmrUQZE4X8Mg6Tt4RLLuJs4ct77ayhJkVU8uuyoYZuqgza3wWg4bU",
  "key20": "2B7g2iHAi4jRoZuebd5JDzyXR41nBuN14dTuRVab7eRcsTVLDvHke57vUbrhgjeMXWwjriiu5KudhyfAv7izSEZq",
  "key21": "4VDCmNwjTdECNdXzgtxZkEzW2j1iYzQ1hPyMnVKryJUXrbjmUykoFySStAv2bDBSVyuUkdU8JBphbwRpiHuACCf",
  "key22": "4nTmqtSDHoKwUgi7KUMa8SJXy1bYG1pHNRqSYejhVTGxqC1kGUUivK4qmB2mhMQZ57jM7g2ta9F8qvWwBtFFcd9L",
  "key23": "2yBeuWhzNXPEP7qLESMcwwnA8kXmwqdzmKFb4Aqwfnp8rtgQ49GNobHFYKhM4YUwuUaND5qeN3rhs51G4RhUMvPG",
  "key24": "3YmWsUn16ENaD2VtiTsJCwkMR5o2GNo2R3rZJ1YAoFVuV9Mea9ZHHSAwQACKWxSEVxHgYB2hQPEmbZ9YgEsumhFo",
  "key25": "NhzyVSeAqnMGVLHgymZX8XnDr6tZQAQncc7mhCkmvKGvDahp4s9LXwVrhSnMKpm5pov4jfcAUJbkchZMtwQzJCy"
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
