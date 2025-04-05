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
    "3ZWpUWsXdLjgjR4A5n8FhNk338ewGmDfkDUe2V7pCqa7srdFsHejBPV5UPoTnTAekL7J1aVHuJzJjMgAmCYmcMRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fuVr9WiHHeAenxgKBKs1coacD1yz2E7oWvqbKWoYVQMj287eV2Km6UTYaaoW2XVpS4ALkwUZnAdwmvs2URgGi6b",
  "key1": "5zve3CV3ct2Hmdkr2BtUmn1EZ3Wc5bcZyhqki4S3RyK5hFiUiMXwtZxBhkfKjDUZREP4MHHsRhokmNmZ71GCCXkY",
  "key2": "7djvEUmVipMzXobbsL64FbhcCqVtUM4Kq5Va7egmJrggj6YxfaqgsG77ZPQqxBEeNjSguXuJUo5WHyd5abjJ9d4",
  "key3": "2MjAuARyC3vfw7DWx2qR7nqxMxvrtpRqrqpCwnmy4uKj8BSLL8Mvkfwh62QpF9SLChB4LfRpUXVM8GgVZHy4FGUu",
  "key4": "483zRBYmmb2PvYWMrr4aoBCY4ipTvkByerVvTKjyiVdZvbZ5Xr4zVGERHQP5fXDXG8y5oRbTnjoaUEkChqWYwF1M",
  "key5": "jS2ybyNdth5i6ABZvE7Rkk8qpiVvUzJVkz5qyTiXSkibb4ECKJRnqMbmUoxKpvvp8vssNTbKv8NRsXGrHWWLm6V",
  "key6": "jAPsgkLTwxTHJMxLEu9rh8RYXVwfR21jvXHE7m8Zn7E3gc1GMZxafwQPuds1fWVkUvWwQdL1trRuHNRoSzGc7WH",
  "key7": "Gf6HG6VtVx6giVFRVY6HjGrQ53CDUpktJBzxijCvyJ7Z5gL95GC2cQ2dchboQ74hAydei2ToeyqprTt5BnwoMNB",
  "key8": "4UDofEjQLaapGAirUAURVb8eoCyrAiHqvcEQyYRnR4xBDet5tPkE2mTUQqmDPkW923QkhV3kxgDFUmEjibnt1Qiz",
  "key9": "5MAys1ZU1b12wBGqFFTfew3uSRiEkBCDE8jXG7vjRojKQNumFyHTybQBLUJ2afXQw8waY2h6WjH7k46jCjnferFT",
  "key10": "5p6qjGRetLVWP7V7NPX9AKWqgewZNdy7NaYyJg3G71VM4iTkcVxAdxi7vKmCCgesWNDJGtYtshbBUEg4ejYqqbf5",
  "key11": "44DvDbfJukvNTCSKt4YDjERJFfG8CZt5jVmmDyr18Drc2Jmzo73WKkNSmsanpLBSCYidGnAun8poa6sNV4dxDd4Q",
  "key12": "67iJBx59aMKFFLnoff8EcuGCxkEzrtJaHCtkJETZFWAJUmiM5kMF8Gq7ntTCkx6f4wyTispy6qXUaQsTvRf7ggS6",
  "key13": "bezu9HbmTE5k5FNhGNVCh9LDsiwZWpnfPQw3wYvkhXe6e1QL9fLQG8RxFngzw65sEdnctXWDBiDyczttm8ikuFq",
  "key14": "51MjKJnLooihHdF3fvuAp9ivNxEECBmuNviDHnMVKGD7b1EzCmVoVbsRVDGLt63dyQWz5MucR67HHEPNTZmsD2tr",
  "key15": "XowN9ZVWefm5MnUZmxjW3xqc8hjoiuueL8BTbrrQFeeQybymLECShREhgW3MUbnpYGg6yiF5NF7W3F7Ehp1qX7b",
  "key16": "5Nt6VhAxd5RnFVEcCjmQyPA3DWEaYZMXqkSR8eEFbhvcaYXnwz9VgbUK44bvKsLN67Agp7fAPLkbUgauMnuQKbky",
  "key17": "2NneVXHG5eSaQWhDS7wyy1JHR9uo4hkWsUwA1N8tTfYrnXvqAfXHUHNis1bjnR7Y7GDvNA6DScR8u1HkcT5sAEXo",
  "key18": "4iHS1w7gBqxXTinLJTn9iMFvHSqZPbkph34RraiPGu4outNGJSQ7c2dDJB7m4DwUTrKsU5neEshnR6Dfk43UVrJt",
  "key19": "5GJoqaJ8hXC1CwQgzaMutq3pp5jgo2L2QU23Ko3Qi2PpxLSUU1x5BEdQv3fZ7i3RBFaXoUx81bqDsbcpGhACwnbw",
  "key20": "36qaXePQ5cgD3nKkqVa6cEGw5uPCPvWxMPapsHSxMpWUE2bLXaAcUJnUJkBHXv1DHhXkskPX472j51b4q8obLs6v",
  "key21": "2EtTTa955Hnh491HRBANAFGm1d3iqT9nwAjmH1oELubUScMAZfG6naUnoS8SS2XogYKgPFpfVDHguNygNt8ZJb8U",
  "key22": "2o4ti9CrSwMZhcEw26UCyUjgPdXoTHSddDYrtNTXSG174gZDXy3Y8T3k5Hd3rHP2h8GtYUyQqP7z1Wd7YhjEGsko",
  "key23": "3AtwLVe5d7EVS22UMbMjvGM2ewHWVxV49ArV2R6QNycAwTCzVezHcPpAu2DBBWEHxYNPhYq3Rcyn63nevPReET91",
  "key24": "2Ti9wue9Wfy6quSwhXtTosZuoLo936eBNktp4xLkQFk1E2QPDgH6Upjp9qGBs8aYVbb85QXkuiWEWN6guLk8yXjx",
  "key25": "4rHEYn1HgKoyJhXCV1Vs2MtdALWmYZ6JX89eK4wzyx1etX6Hj64prQu91PsMx2ibrziXDL46UugpQUepSLKWLfxr",
  "key26": "45XYEAZMpcQdH3tiWdwWk1U19ZmoMB6WFQZBdwDC93xmPsN41Q65y2VykqjY4y5dxD5z2ALGmn4qXu85bm8kwX4G",
  "key27": "4ZRVBqn6YvyEdQ3bTphYgaqNyzACzvPUWKwEbM7SKPyd3pVhu3BqFAE7HS7wCfwNhYJr2LZ8J7eiz8iAdooc69SN",
  "key28": "Cxkhad5p7zH4Lv88yfSBHtRF6ExcqrXFSMUHij7wwQ3ecUo5GiJWLSKnxgofPbosk5GPueYc1fnNHszuLpshzBC",
  "key29": "HUWZQybtwV5H7WCfHTHsMRG7uYg31Ud5cBLzHyRn19fQL71Njhdvkvs1u6j85nt6sqneRyYDhtiJPATm7cubnMi",
  "key30": "4PfjmGBSja1wLMxGWCC3exnay8F8dteEjijdXGmz5tyt8zmX844dJQJkMmUK27qNiHYb2P8gWUAiQSL1QnN83i5S",
  "key31": "Qj3cJLKjdNp9VzVjPBSTb9ntZ5zBayBesPkmMv8hvxHLEf9As2qXZK34B6BZDx9NWdzTkpXUcbVkrU3PvWy3mxn",
  "key32": "3razGkeq2FR2U2pV46Wg4uNzzZmRWGwWJJdP27NyvwgZ35DRGadjbPyTwiXVeBLdVcxGSt4TTa6sLLFWtn2ezKU1",
  "key33": "4QhKd31voJWUWW7n8qFKNkNk8gBXzxBEnwx9QtdXaZ6uUGTFH5fLigMxbtQxrK8AdP1mZDuz9mqoJWbMAnTSQ51S",
  "key34": "3MppoRhGBHmidkh5oSuM2WXmywFkHnxcB1SuYcYUF2UeBDUjdYaTxar92EwzTbkyrWeWjizuACZRJLvZnynRWqCT",
  "key35": "2K9HLyoBgMJiiH8wLMkhp5mgM2BFhDSCLUvLPZcVpkHZs8GVxEY2m6RaG4RY6RvSHScogbtSKX6pxGVhoSoke9Ua",
  "key36": "4GsJArBASJYHvBemnuLo2k6bb6p2HVFcGEEWGTYSAZpeWErGALoNZgnbfSuKKwtvCf1gUeaqMkuQ6bWi3ZrdJMiT",
  "key37": "5eftaySWnJwdXHvrmiYtaM4ufTMNadY2EASZbUUxgfoVGMULCx9kuNHuAs6c1ipXYi9Pg9X48zMpvGvvwggpT8Pc",
  "key38": "atyvUhevvh2qH2ZmGYfVKCUcjSZ9rrLWHYAYkZhQUNVtAMTPRhaV34ZxgBABbpfdUuwNAZbZtQJEAhe2rPhDany",
  "key39": "38w5PVWn8n3sLQtex1TGzwfNcCBKSd9TBjrWhvGH7E5QpqpoQ5ddYMxhV6bkwo1n4SuGtdexcdwqjpA8sowmRrQG",
  "key40": "2ZgFHw9k2d4hVN8RjbZw6TKSm85eAczdoJp5BwZ42btcZvLx9ipNAzybqcBcnBXB23NpEs27aQ3SoraJqxPmVZyQ",
  "key41": "5SYcr5hXZPD2gHFwSkyfKjbBKf2rmVrkB2LdwDimroGat9qDQRpoeW1sfP66ko4T2YAtKa2LCFvcvVM3uUe3Vd1K"
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
