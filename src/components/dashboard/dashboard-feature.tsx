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
    "2A3vVfUp9D7iH2nWuNXpehtrA4FwxWTWazrQ6CeZCTe3bEsK73QWHpcdvskHe4zHJPKuKLtQ88vynfGaWmUX1s9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xmU15om7PptVhUhZqGLW1He6e1PivET5gJLFrhvbNtYj2CnEcKHFRL1ky1Buya3J76YCMCYUA9pBDxZH9LhkfLW",
  "key1": "om7DnFUPxW9Vna2yrL7sEuAHwk8gXs1fdZJ1biwcnJz8FgedWd2uuuA1nNW5EQxEXnM22ZjarV1v57XTD7EA96a",
  "key2": "59HDCiatc7EENnPSwXi5DVnAUaqMMyprddXyp7XU2tsNcbuZFpSUB4XrtNxG9ngb2zd6Cy25c9juGKfJVhU5gVh2",
  "key3": "5n3jU58Bu7Z1XeofU4VfbxHDXuZGxYbWTwuddqHxB7jzuYp8PCR4BMhXpLjAavD3Bxt7wNh93KUoM8yiGxZNGA5H",
  "key4": "2Dx7uguxQ7nWpLs4BCWcDMM7wicR9D1ftatLomeXUVARZwnN6Yf8geL1qq9UkjhShEDa1Mz7qWTLpcqAVbaqkh7j",
  "key5": "2X21gwz2aZcVAxiBXcRyBeXQ7p6QbEq1AarW3VVhuD3LmskpPewCHYGwE53U82UmzXr1QgTpBhQfd9vFFjmG5cr4",
  "key6": "2p91eDgtkwLPPN7pzNyG7QG4NmDDTVVBX83cLaPX74vBeMfshz9RTF15cJmgX4rxuMDyUToYeZntG2iBRRHqns8k",
  "key7": "5EdQ5yKxRLDo6gz27ezwKas64YT4MJMdZ1WKUJo3KUbMLhcjczdbbDc7ccxSX5czSE5GGBFVuRiCqvNJuT1MXciu",
  "key8": "usJCjk2kiqPfYSzBdKHJNe8q5qZJ9NM1SWJzTDxXcGNCoVB3wVY1vinwU2H2tmDZjnBukRrXU3aGYeuwxowBfFW",
  "key9": "5EYC85t1KcAFBx2pqtsiF8xa1yKK6b8WXwyDh21twUUn5vEtNiazBn61bf2cXTSFE8tAQmXEyqJQUrLK1bYxqSHe",
  "key10": "2ZFSF5kbXRFGKHJnKM3orXgDQarnYxPcpHsoGoLoFm1cYam9zBpEqSgGdbBCX9VSeW3GAZAqW7efqx9PY6ZnrSF5",
  "key11": "4qB8wjMKuWeue6WjJRtY2yAoXKJf12rAoNXGBt2zPGgJeVWcRDjaMWd5gSoaUEYK5kECSPmc4vbqoaJZse8koHah",
  "key12": "2T3cjZ34kL8tNNzWNzY5Yjrgd2AcDB9rNNn6qCEUvGA5vjHpMpGdg82yz1NuwfGeETYSwVFEkH33VpofPxxUf54u",
  "key13": "583BuiuZ7vyyRsUmSeZyt9NyhihvzDJCbMsFsmbT2MHAxDXEjuxcSpXJ5RMPkw6ZGw585x4YTF4mm6Hhv3M2UUwz",
  "key14": "2un4s2CkfruaAyLKksDUd6shEfdxstaKiH6UWt3neh5fQRMdVJmw9akjM2NqenVor8QSVqBrDTq8oQvZz76n5AoD",
  "key15": "43urbaps77CMi12LPGMscZJCJR9tAC6eYPwaKYeGxdVU4hFGVUJJsbjYp7Sg9aA84ZHn8owBRfSb5aXnAeSiekzs",
  "key16": "3wAabgPe2S14z9uGM5jKp9bpr8GgNsetpf8Lad5f8FhvGvSumatUdTfM65L7Sbfk9fCtvQ45fAzyHJ7TcFj9vWZf",
  "key17": "3WepBLdWQt1tRQPkTo2LDE6nmzQD23ZT4hoqpdzUMfo6P6QrZtEB1JovozqkEbtSh6k6hbKGMXusw3tdALN6Wmx1",
  "key18": "Wp8z8t1JufxSuEsv3G3E42o5Ngsa3HiPfjoRBq3RUUSaVuf9zrHX5nvUFACgEGPRAwXiD64Pf2DCg8toMcWeueR",
  "key19": "3hkkogZ5vysFF2RrSKWupr5vVC6isDLz8piKJoXKPbumeXmcQNQ2LLtkH6iE7P4hhinbz5fSSVm83VQc8wxSPApd",
  "key20": "3Q81v6ycHbunMD2SGYzKTjsR5vSoRXVd1r7L53QkVxYC941a3ur69iDeG3emiSTEo2CPwgGwnt9UtpbSRrcCy9h",
  "key21": "4h8pTmVVmRKVAUT8VwJcTAd4cNaCun2J1irDF9EaVAYANmgr6QT2HQboYEeX7TLZmbw9UpaWFXjsSyFSmW1bdkFH",
  "key22": "3VPXFJQ8fpZgQ2KGMiVoaMM2ETmH2JA34d8BFBTt5VK9QCvU1E4iJetWeMeTudWHPufFuEqkTVdqLZ9RbCwg96aR",
  "key23": "2vcy43DXbD4ii4GCNzUto1ea1TPtCEjoHYjdjFkb8XyWHEd6zWrAC3dpasMuhtfdNRRqdQUcgnFnvGTPpg87F8h",
  "key24": "4cbkjRZJYj8Q2TpnsBKFHCpcybhA9ACm63eH3wx57uco6n6Xxu2Ba7weL2vypXbZgGNgVzsJ2w9MrnUvu9iRyGz5",
  "key25": "6dEqc56Zoy6b2wU1So6k8FTUkhR2NDCqK5tDyKTKWHPFTunkWiGVHoYbUxx1ydvPFnCWCvXxETzduGzVaWKcCU1",
  "key26": "3V7GmJ9AG7igmuw9WpacAokX9w2xGytkjbfRQPetH2EcgNzMnX69HwATJRwvKR16dR9tKV9gLxavnBbGeeLJfbrv",
  "key27": "2GutdBn9v2FrtyjCPnqwHuDDtfw3LM6Y6YJveFRdGDqPttteYiwjHULa42CXZjqadrE4DaPp7t9ifTFFaeJoGnJB"
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
