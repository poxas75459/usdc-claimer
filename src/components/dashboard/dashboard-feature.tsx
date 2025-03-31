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
    "4s2rdeU95FE9mHHLTBi4eZowFfVQ83RyWwUfatG89vD7n9J9aiQP3JHYt8vwDZMTRp4gZvXvpaN3PtDUwGiWMqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s1QZFkn9gP4o3Z3g2ftAWVxNfzQTopEWq5hR9HwQeY1H8FKVfQZuMpg64fft8KUoQngg3P6tt8nXCTY8Ap2w4ja",
  "key1": "4jLNeqY1pqEbhWCrEWsKamGK2WqzwjmFXdNwbRN4XCnpiytAE7fntatN8eV8V1AUYwkhnX7CNB9QuqotFxbsTrt7",
  "key2": "3hgFsaP5PTesCg3QXXraXX3x4wrXAbdVPerJWc49ZnpBsRzdk3mJpH8Rrq3J3zdYHRX9uSMi4pxfgB4fWyfDG4eV",
  "key3": "oRKFatbRYtsFGu8KncwsmKqbr2HEpfPn8vSdEXg2VAUDRmYL4zNJjqJLT92RAka7LKTpznRvxR59TQi6AKLxFYE",
  "key4": "4Kw99Ae6SNBXSNSieuKsg267y7UtxHMkaVLkSA6tjGTJHxpxqYYac6wLoNJ4Tpx7v7VH4TrgC3gnwgEYLVsUUEgs",
  "key5": "4F5GF4Xk9zcrpJNPnXMwUnYVDLppe13ddN7jrSUXALZ3GxnS4nto3gmJ4faEokN8o2WWFsRaCzuVBCTwJ1Gw3vnD",
  "key6": "3VHhT2EEaScNadNVggUTmrkdWBhp1q7JVPkNwrSvTkH8tX5zBfJikUUKANgBLkkBgr6xXjoPuE4zR42KptW7rMGn",
  "key7": "JzHhux31ABnYLyJpjyeQxypptJupAcQU14Y2Qys9ipQUCed2EAjw2tWj3r5rg4iVQbaQwTdksZahbZJSAJWXio4",
  "key8": "5ACQ8gRcBPhg92VtEDiJG7XWqTTTfHfGjRVhC6dQ7ym2XVqUJrfAzF4K3HqNbEoi8Gy6y4PZaqV4RHvEAeqHfhAU",
  "key9": "aMhSJRNsRjKz7im4Hpxvcy8RezoAQ31SFUrGkEyLYtCqAtjPmQX23HNWZQJEc6zmu8CB6imxkRdRRrYAwJQV6cy",
  "key10": "5vGZhomM5kvLCppihV7VjFjjKnKgFpGLM56zdnQ1ES9z7A8EV3o4dQJnWgEumorJbtmat4tpcya1133tqUgo46w4",
  "key11": "631pUtTKmgmYpDbuZArpQvdmPXgmUErkXBDfLbLWewWbUDGThBmH1vtuhDLqN1fifRXpF8SZCFnPLkGTnzKeXQWY",
  "key12": "2534LwQtXFitAQUCcg7mNoGJFyqL48N4zgMy13soZYWZGNVHq2MMHQRzfMc26oiiV8kjhwJs1W8aDTKJ8tpGTz3V",
  "key13": "5kKRGyXgUMscctRLDZSbpdBsHpqyG4URYDY3faSnXgtqKxJaiHHQKB6upGvnE8PCyWvWBtqppzpYd1XAkgJVWhch",
  "key14": "5U8nRuKDJY7yuBPcpdxbLiGmPjnbe31V2e4W84u2mSEcRgtntxVuTaJiTT32omJr5Zf8UfvoALMRaeK4J1ii6Vf3",
  "key15": "Pakt3LBrKDAAPUpZL9Pf9z94BM58V5whWLBrXa5VoNaCgZQaaqVY32DrPoohEGpYiPLD3ctCVC4PkiZ23XT6YV8",
  "key16": "57XBYRSeM2WrNd25RMdVbyH85Mx1gtVSyVmcbgwQ7LT7joNPmvuxviKgfPH9eS5Aime35tRuCyMwk6rT5acVjPR",
  "key17": "2JQWPQ3ufiDYFHRJFCDj873HNDNNNaBhT4eNbH4NyVjXPWbFX8h38yh4QPLNJdDiHa8282pLNHLMyKRnTrXBXUmh",
  "key18": "2deUUiAXPqFbc5TK9opGexkWKQV5pMq83AA5tNvVJeBNMLi1CcYiDTzv3A9uhiQ72jgZck8Mi8C6H1Q2QgRA9Ptj",
  "key19": "2YSwaa6rJLHNkBX7vqR8pbgQ4VJHtJnzVTUaRtwzA42Rf3XCoTcLBnyEWmGwkFEQXfVDfsZVysnsXufn8mm2PU4V",
  "key20": "cBtcV3mCyPi13SgTwpD2wv1Pze7HHgxWUgsErwHRgbGe7Tsf9uKQEUvt637jYfhav48c3FpcjRyJswnEHaLVUrv",
  "key21": "YpdrudSJ6c9iXxzN78FXQ1UBQLxRqk9pHQPsqETxxR9GAnD4c434BUuD1XBRaMkYVDmiYpLFG9aJbgwfcrxrvbo",
  "key22": "4VDTXjmfUG1QHTSpksSKMEhbjVRRkML3C7hHdT4t1836EnhLtKaMjHpeGk3qp8jNoEzFFgy4Gpb48BwHTvDessSV",
  "key23": "G5akerbLm9V4RLDu9YwMMfPqesoU7gtskzMZ5cNvaZEdMznAqdiETvbWD4ScLpf5ho68WVvCAp6cWosxXeiixj7",
  "key24": "56iUKDpeKTzMHeUxgaxq7jW5ngpF1pNVq4dp4zCqsHwEWMyZujExHeEP9Dbq15AMN4NwLyX2SJbe7NuoLaAq8sd3",
  "key25": "3idAJWrAnmFjpz4dXxxqDKZgV7vSR12psMwugeUX4yUAVTPLxKM3C1TXqAzwCSCywVnK3odraN7v9iS6BX8QZxub"
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
