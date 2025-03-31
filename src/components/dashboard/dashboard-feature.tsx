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
    "5afTVMqw26yL1vfzg291dfRUE7fy6B3QP4VahSuE6SWwz4GQceeMapLULobWjC6yyF1hS2jPzbPz5myVbXKEMNZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kmQvrLTGkLRrHmKADL9qeT9gfUDsdaCtN5zYcw5M6VzLf8MFsjFAUtQmcpud1jN6fKUFqZ23pAG3uuYtTyRWiYa",
  "key1": "61eDtdezd2xzXeiRwAV1tvNrRqnSMWzT8wRqqsVArrL1pKWPvB2SNLbP7wEFoagZLyg5xgZV7vX7n82KxuL5noLH",
  "key2": "4AfCN6S5pfAQZcsLHocxu2kx8pf7EFV7zmc9bA5sEC92xEG6uQhr1wi8abV6u1hfrYvbo43PdHrn7KRzyfbg5d5E",
  "key3": "24fj6YtJxgbpQETcWrtBrwzrrRQifYqDVcCe4e9VfE4W93qBcrxmB8XAwjqkqXa6f55QF6rcWuof4f3CcioGWJah",
  "key4": "1xCiZAmsT9MyN4ksyAfj1QL77YpqvzmxcqXZH97cB2dkM4iyQ1wCZeRFZ11ZhWb3CN6GeyhcFJga4UV6ykahuZy",
  "key5": "22WFsLKTcXEphRuzHT2Ly9mKtYaqCLrjaKs3BTzZomqmroWeerwu8MNK5kJJsTRy2e8nTLe9pBSjyG6Yc62SYnBh",
  "key6": "1h68bSFT9vuALq1tYkvjQuMYQwxufrN7xzZUfJuuQuDfuQuUHrm4R9BBzHQk4DBgL6SEpLpDkwKTM1yvH8wkYPy",
  "key7": "TMeqWN1WYyywaAyXQ1Xnj31VgcRTS6E4qyBGxyyN5eyohQmweSSQEW2oKg7RDCqE6U2kLyxWcEHSBFteJfdxS8g",
  "key8": "2faiDpWLTdZoqyk5nqkjg1MbBrmGA1GDBt7GZ9eMLHsvKLw9SFuDMetvYBzcFHnF5pKacKWkKMxQPNMciFvAbAPn",
  "key9": "RPjyNaz8m38ouWBwnvxAqdshN5LEeeSkRYAqYvV1ULNuLR7CfAzW9vdijLc8sLjDngh1YjBQRgxzA6gS7hprfVp",
  "key10": "5Ma7FJr2CSZocDVdtxV8uiZjcBYUo1dB2xbTQQmzPFspp7oB4E7iSPovV4ELdCs4FzkxDQLmeMg2Ugs5HTg5a9ZV",
  "key11": "2kg5opH5MN7K6Vyye6AovoXHzQfY6F1JmKNws1PeXMZGXNwsFtEMGP3T9Ho7b6kGRQXw4Cq76LNdmmPFEzeZJVqK",
  "key12": "V5H9soJJ4nDoe3j3djqKwcbw4iM8XASAvd4yAMLF6mqfE8eab1gxaYTJ9P7DBiBqATJwGMfD59XdyNLHNyrXp5D",
  "key13": "5eL4c1FSqpuYEDLwUBB6L2JXtMVfQ8haXkEcx8TS6f2dvtHnZ2tk2nx8it1rh7H7urArfjWXSWVvwBXU54LHdXuy",
  "key14": "2ooTSR9tG8WexDdfrHXUW4nYGFhcnf4K4A2x6BFtD5HwHXa4uMahrek6VQGno8PVfQwDHki68Ey8y8pKtg4BuoGX",
  "key15": "Vr1PX1NKx8UjdJWBV7ugFrCV7ZahVrLLkL5Vi9SMhDysaESwjpJxYmAUfpdgWZWvahfirgAorYiJXrF3C7cqMDx",
  "key16": "4NcvG6fULKUrUrzAXbmD4pZpPVuh96UqBjmnC9W679RMXbsY6adKCZmWjqMvPw67nU6cwdcDSyTycDAgnnQfRQWJ",
  "key17": "5FWSRSctHHrXkriJbQSKVH2Euy9z2JX9i7VDV6ApBF866Dy8SbrYSP2mw8ZHMhWLj1dB6GiZaBcg2ySJhUjUnMK",
  "key18": "48x9fzRQ7Ng5rqWGeCg12emvqU6gbvh4rdbgq6Ud7vy3ZfhBbcWbuSBtTjqToEG7bZTkTTMfbjMHjv6P3WJHn33L",
  "key19": "3KNMRPitALjFyjD9x3jtNBzyJm6EPtis1eTzH1n5KZEC7HMz8kmqjt66AnLAi1wktA3pz29941qSt1DZYA53HvP5",
  "key20": "22mDpFqDLbTzrrNMu45sZZcpaf8jh28WEvpuFro8YL5bVp57xEBKbTN3wnsWPf2dwFtUYLTe7M9sVW1xTK7CFVjN",
  "key21": "5pCDUNjqDtgzdbyvsVx8ey8EqRzgvrfXWKsWStwpgtGYR5LqeWgrnup7Vo18hDvNb5wC1a28zR4wKcUj9iPToMik",
  "key22": "3eV7Rp4aT6kjD3dTv7R3EYxJ6UVToxbQPqhRPKp8nKAp1Hi2WQcp8gXpn9GCdGQ8iwURCn8Bq1uyrQYydGdW46EP",
  "key23": "4nzTAr1wP6cWMC9uPp1H6GamNEHd6fWqMFwzfH9druotap52Ta6rVpTXqgcrsGWK87GJ9ThQbFsyqn1DUHSzzCUJ",
  "key24": "3WSTA2nmhmBYsBxA8fMqxBmjtay4BzmHd5EkNRm9RqqqWQ9eHdGmfhmm7nZPweKcojPHWP3n4L8z7288y5ke3uMS",
  "key25": "CdSyYkv9zAEM5VGdRKwhnQ5bN7Zv2gdfkBS8C2SURuHiev97DU3yujNx5csRe8nrX9ahJ7JjF9PB1dQF2Y19xuH",
  "key26": "4UPdsQmAtrK9XhQXtL1NAD2YKXLtLcXZAgDVy2m5GREbGDQHxVut8BMkzSS54UvoA8Uq9gMKY3D8gs9vDqGKEQMD",
  "key27": "2Lkdk6Dt8sqxepQDrETxYSNV9qixfFg2ZNQ292WySJ4rFDo6ibiYNSYNxUwYqXD2xQ2Bg7rSKJdvZE8TArUzaRkc"
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
