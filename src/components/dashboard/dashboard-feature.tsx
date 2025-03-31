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
    "5C9JjMgy4UswcbwtjWX3CvgvyjoYKuhoK7pDuwobrgAsCTBQjUdASHHQXniANGiYaUNqVcnR7gp6cw4Fdw7BWrNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mcRMCNrWLDTptPqw9KZhRjSHzPAiUyAnGg7AEYLLD6wn6dEddAKQtj1CGuWj2sjaHUcgExFjjgSsn6T9JBhgDXx",
  "key1": "skcGYiAa51STXRjAUYhJTfm9JQrjyuokv8xwCBzCUW3Nfqtzbysezb6Vist5gF8XDVgQ1am2qAy2oYGrSyckwFU",
  "key2": "2G5DoD6rqhyb97RMjSLoERDnVQSSSVxTvnXGpEwPBRsmkNoFFAAVvTALpdBeusXz6sEYWCsthwaaGBTz7NUpxSKz",
  "key3": "2SZ2AsAawqWRcm9cehAFTWJTFZgJZMkiw1ZcQQPDSm8gJjKf3hvyLKhLjxFTnkK3W7D8V7DDZL5S3D9y1Sns7ASQ",
  "key4": "3mHR5WuQRQSiDvvpfhW9CFV1KyVncxY6ph8K9Th7hwtz23sdPkEX3Yq71jTqg5U8DDpjHEarfqvy4bEksQqyUEuc",
  "key5": "21v37nCBT2dEiSoYrN8fM7CnBgUyKoMaoLapaWG3hG1nNAgxK27zeJ663qALPFcUhpKdsrzQg7hVKB39Awccv7no",
  "key6": "u1TDoVNbwf9Ej2JJKg4kekmFFnYkv8m5kTL7MP7QfK7JA6L7zcTmhRckxCs7ejuDRNsSz9nKbmUR4ktQwxNibvm",
  "key7": "KHCXuc4sKYiicT2ES6urMDxCc5UViEwq8dqhFCMZtDDwhyJb6UgBhzW8AjDg2ciWtNB33N55QGZ2Vw3Jzniej5p",
  "key8": "5oQgLP3yRLebeBPnPfemYjN1Tgcboe3ybm3QpmPGkEK9x8NmCijo2s9krt7wNULTzShqwetQBmffK86PqkZEvrnw",
  "key9": "aefo3Vym9g6AggUpKTEHv9YUgLjQtkW9xxKNRpirDS5C6PDLyi98U8zDhMJYubPkiVTrMxcSdFSB2LvF67SK4Ex",
  "key10": "65QDzEgyMmuXzMC3r7mnfQXRVAuMZDvApRcExGfYwdPoXrcmHsU3A9Srr6LJNKGTfcwgcJVnr1pev9cj6VM7XmLm",
  "key11": "3XFXT5Wuodhm45kPKC7b5TGeoBw2joDpRCxjEsoXj2HtyFLMCTsV4ungeZv9soiaSY1mnPwhJpM3SaL1DdcHLbbD",
  "key12": "32gJMyhiFrhxxdJTvzseNA6p9NFwicbHXuRmeLUvQUMH2XikyLt5sK1tLcYKjubKYsXZ6uxQWiaFxTE4FBAkpDEZ",
  "key13": "4XTBD5AunTuTjK4e9QTLyLXiWULAP92Ef4TbjbwBRrsexcwqq9qiaHbqMpmB4zAbzoKLLqCutF3XdkWC5Lzx7N4G",
  "key14": "jxwjfnVURtAwN5C9xatTZuFwrAqpTJUvcPEFnMu7ZCT5u74F8txKXq1q7VuScJWfSEk9PNZmYs3Kunk8tpN9s4i",
  "key15": "5XqSKJt9n6L5QqeBAWDEXxwHV6anVhcFhrYMm96DN3kGh2LqCpZh2rJwWaiZcCcQrJrKXgvwy63Pe4MaZneAotYD",
  "key16": "4vpzWhVBiZJ3XRL3nxfo3tKHWV7MdxxmqU85NBoEak1dPn1W7wLg88rx3GHTCdyiSb1gDqWtkiZhtaPwFyCpQwVr",
  "key17": "28eyXmZRdCsM63wgPexuQV4ykdGhZUCcrLZh8WZzK4ygDBhcKTp64uyjXAbUiAoTcs4URYVeFtx8boDqPnaKYaQr",
  "key18": "5SqVEwo31RYLcMogmxEZoLAS2Ja8B87cvGqW63cSAdF8ZnVDWKnzDE2LBTaoZMRaD5bvo1GG4RHCHzePBScWyHzK",
  "key19": "2xjZBNpF1VvzPL9M9YZE8vxWsRRs4nN3nsaXpUDfMQzFfAgsKdnp4doonNsLvxodkjYxinpG27SeBo76oF5cq33D",
  "key20": "2qr8DfzN9ECaR8y59msqyjAypPeRp498rFUFX7rBVNChuFHTwn7GofgrGudBY1EQzWgFePPuGQZjFA5nGywUgxcF",
  "key21": "5PZSjEEha8fCTARiCXPPNzjuyuuS9dgQeRjmK9D6cip7XrrYL5mqnF2rtA6as9csjSPx5mZox4ar1vz2vWwF3pUM",
  "key22": "bP2DAxBRaJHsc3KaYykwjnrX99SuRFDwW5UhfH9i5Mu91jh1Rebq4uAY9wcT5nF2YdtQoH7BGFN87k6Y7Kt2vxL",
  "key23": "4RWXbogVTpBxj4dAnV7RPfWSUK54rz3Dg8LTjqs9joiJ6KL8wj1DsbGqedfC5Cz3oLCckNwrQUBvUwU6TAwAyGmw",
  "key24": "3zCFsQ5AkKjMtmFkQJ6VwNyhcrGYrXqvSAdrXZBPenBhHRTB1muYYS19eNF7J2o7aajyQ7fUn4hncJhcHAU2R1Fs",
  "key25": "2YeeUCj9khqYCCv6NXTyrDTC9Bokri3C9LHPq6oWwxFnxyXEFWSyCMY8j2ZfzLW4N2Lrw2yYDPtRWqQo1ouc6Smw",
  "key26": "3hUQbGJC3PTnBAxYkTjT1Hqxr7arenQv6gVtDzN3i9P3JmJDRYTTkRxWwPYXt1w9iyDFudP9xDFoBt9enJEsc9os",
  "key27": "3vDs3Y5dExFNZzwQB4qBi9Kvhm36KeJyu5FMXnFofGSegCoRzvTpEGQWqKu9sKFx8VBD82i1MoHwEy8wf4Qf54aN",
  "key28": "3m5MH8ikPEMLUn7M46iA2UcXdZm5Lwjv2poDAzj8sCTn79hmYaWqitQRJWyjs622LBPyBw1E4gbGAwHXdQbPKXA",
  "key29": "2bP2reENGNPEyH2TBbnWrnPJ2sEv9SqZtbj1reL7JPd1ujywx6xm3D5XtCwHZvZQ3BRVDAnw3dMNW3gcouiSP9SD",
  "key30": "4vvPiCkagQJqTp7SDzWKHbXVpXBAPDxWH3c1f6gt1YyKFg9i8NpfcaMjZKztMQfdGxta7pPZZoFwfwRDVh6zJ5VL"
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
