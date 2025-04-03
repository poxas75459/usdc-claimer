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
    "5eRCH73VCaaSb6oAQwSCx6BU3jcW8zsAtDuRFg8XVBAYLKVVeqw215tDJS1CWkaoPwKvCLzKMMH1hvv2kEcj5Rbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6118dZ5R4gLxSyZwzpoR39bmbCH2FUFygFZDRjEKugLUGP7d15t6PWPNbBDvbQ6f8if3KvxM2tLDFuKvVGTgyBsH",
  "key1": "hpkC5Vh3XjmHDkXTfTDiaEjFrmAFJxnb429uQJmEf5BV9gkmL7uCxZmnCNVr2diTgiuhuTv2nzKpEuDF9mQLVEY",
  "key2": "4HPo9mwHSxRis8npno6KQQJUJEJMKeFNCHAVE1cq5v7UFkc8pegDJzVdCK31xBn7DKyP9bPSx1VoK3UFB97QgYaJ",
  "key3": "4EeCXbNaFUWydGKsLB7r1FywHSUb24GQEJZsknX1DNaJtAwNrvfFpaJ6WkFbLobd8knZnBmT495Xev5L6Lpc5FfC",
  "key4": "21bDKrniDFTErDZFsnJFShFQ9TbvV2s7DdhiRSfEjGYhvpNXJjAfcQD9unG7KxMGAENHo3fyi3379GPdcJtMeqY3",
  "key5": "5uqLPiCK6fNzjvHMtDTAGvFMr9tKPAu29cKNQPJqbnWzJ4f67d9K9ta1MxX8GzncREYWcJY47pErvNawfd2hRSEf",
  "key6": "4WjjBmuKNV17v8LveSndB75id7r3CGC1ttS2m4CpiDnMzp8wpYmeNVLfWvZ5LNiLUgQxQa3Sk6KaLu7DexWKJKwj",
  "key7": "ZV57V8Z9MVNaXyySnTr9B4PZpxPWi7yX2SQ6tQNyqSfCsJqM2dE9udKP9NDuwJydJ24KhCrnqAvt3yk1GHPVteQ",
  "key8": "2RYUECfhDNehAFLvz6JvrjCuw1CtTP6o2ywBkZCc8XR7mvaAK4kNhipVPH6LoPwxGFeWNYHxvDKvU4VdkWEKtjqh",
  "key9": "7ADM8atumFcUruXvgCvDrNebBuagpaXSmJ47eMa743AyecPAaAPQ9owRCjAVzMxP4mJoAvUbAb9nS915jJ872dJ",
  "key10": "54wu1whX3hFBQUuarGv5qNza86jprHCV1Wr53h8npoK5BKq9CYnktYyG9GUjeYEvEvuJf3PQ19iJL85FQWrDGUSj",
  "key11": "3uqpfKxohtyUnK4CpvjiPLyEusB5rSk64CwRiAbtv3N47EuWs9fyLVHTvogAQV12dsurhfMuxJm6neAX4svq3oLX",
  "key12": "535q32cJeNMrtSkqad25wTyGhd4Gkh5YCKKp5aou4zDnCuonzZrJXLGhwXGB4qAVNhcaMDApeoqp9SBJhQQ4Qa28",
  "key13": "2qJzbhYw3ysr2UWhhcNFqZQD5SZdftSFyNWrPCPnPesU9whxtGTPbA21hokhLise4uaZMhgBeTdRWosGETXLkeuq",
  "key14": "5Dr1fmN7WhEbtnpgi28sEvi91izL1AZuVdSwtZnQYH3C82vBbA5NoeTVgpmNb2swxh5K1RCXd3zRoq19v6B99cPK",
  "key15": "3R4xDPV1FvqQ8D6GYxMatpyaFAgpxzzSViZvrUQBpGxZJfunF4XPZkTJB4y1TVNRC7oA6zwPaERSdbE1H1xQLWXC",
  "key16": "baB7UvJ2uWYE2EwCyxwKdG5UjUPPQS7wjLsg1P4k22Ss3Pq8n6B4jMGNCDvF7h7qvhjbxLLPgqQoQhFrJ4QWSqy",
  "key17": "4KKwNrUgurpECFsjmJzapq2MdguacyG4jZ87duAnoNkrGupWnyUttpMXmByHLC6kBvYu1QrPowJWKJqFAYMiuncL",
  "key18": "3KXCB6hYtzbVWyLa48ohCfVKv2HFfxTzcuGPJ4FAfNEPmZsLojdYequzjj1ZUd8BDVtchys3oNzxMWzhnh8Q2cKd",
  "key19": "3g7Jw4SRUYzBeP7MmP2iVR2gfQL8kbTUweKCPcgvkXUQWGAUqFR9SxYLtK9PdECU2yFGq4eoxjcNmyiVaEMW13MG",
  "key20": "2Mv4GJWnoptGTqQEXU1VT9z7tvMu4MMHdUyE8EHqApGUheTrUgd57MWkkmE1ZaVafs28PTP44Eaesj6SNCwxfFkz",
  "key21": "4mrJkonfMvGxPQ9fyMmQFPvNjNYiojo8AjjXQDHnZG2An5VgZGPBTZwvvdehSika7JpSP539wD98qQQsBbyUcceb",
  "key22": "2vzUdMBRtHkLKABR8rtdc5mxnoaAom6QythnjFHrSC9WtnkpxPRPSPXt9bMrh3j9ysvYHXP4srF1XzHiV5Mb9ECx",
  "key23": "4UFj2kpdWqastQw185f4f5iGewEF8SgdNsR77imaYnRD8UQ4rkErPY68vB6J8AnLPJy1fbqHPHns4gHqFMdmMeBM",
  "key24": "5nC4FLBaTifKzL2e8ws5frSqzcZrigPw5c49PzwWk2tjHtjcY63c1gUuT7shLBv5ByCQgsiNLDbtouAkkWYXq5wh",
  "key25": "2JXZpG52EFdNEo6gp3Rc5HiwEXiY1GnY3ezfkZAEm7zaPaLxsVcj7crbWy9Jq1UQHGGpG2eUbncBf5tmMietXRqc",
  "key26": "25JQ6PPw53SpCoJYErv1HRatG16MWfwfdcb5uqQik6SKLHBVdCJynaq4Q7NWjCBf1eeVzGGGTAmodkmqLF4D9gWc",
  "key27": "2yHP7RjkENwo39moYsEPAE21jYeHBCaNM9bvSZdqJFQHn913gkVk1LStJT2LQirh4bnn7U883yE2taki9AN5GCwW",
  "key28": "3twK8KP3ky3bfR7a2T7YZwLCCjMEkchQ9iZEQ2dYDQT8rQtProB2dvXsi8gzRJ7X1k7eZzemBiPX7vzRVbFs3PMH",
  "key29": "2p28TXjFJv7PaChsGpGdWgHz71PkMPgcYJoeunmxbeE37mU5TVT81xRuek2gkfjM3cwBbmGVQD59jqV89rjcj8Jt",
  "key30": "5ojmQfYZ7VzV7HjqHbpXLjiFrUDJs39Lf2ULTFZh52i2ZTsJwpde3z285o5Qfe22vxzfF2cboQpu163t2GZJ5Ggh",
  "key31": "VkmVptnQeeKNJo4mM68zCcA2hdBKC3uFZQQXcXD9nzEJiR6AuwxUDN7pnxpu4FbECeaWeYFAKG4u43Gj84oQnVL"
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
