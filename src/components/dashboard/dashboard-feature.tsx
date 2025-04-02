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
    "5u68hyuZocDcEJ1xQ3Xp48RMnFaRDuUcgtrjBekr4Puz6qoTGGAfn9MTkKWiZKFPdRdeR7nVAPJwbYpBFrmoVMXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ziK3jLRBZSkk3BUW3S1oCPVGqCe2B6WERivhDAyy8ZSKGqLXCEHKTmPYP8TpmJTrCbu4catsVXtDd6aGBDR9yyi",
  "key1": "5RMB8Nb95stKKR8V99XWcZd7aBWhN9xvnB2KSqxVCdBF3DBrrfXgTWgt9bKJxmhPR8XrNm2JUaM8QAPQEC1ghH1i",
  "key2": "25hnZ5KsGA9yHRuK38kcWHN1ii4gqtNKDrXAGoZD9TwnJawX2pUpzBK8BrpjfUgqK4yEuJa1ijcEWRDjwEsof7Ri",
  "key3": "4rdNB8hgteDHLcxq29u2QmHVhXFKRNMXf1rhvgF22DftW1uyy12Xy9FqwjSWgP968YuTeuri2WAm64soAyaymGF5",
  "key4": "4RV46Jq4mFTQcrt23SkwphN8gsw2XHGuhVt4GZ8JpRSWHbK92LEjk4LfFcsXRykSGjnK7kmnMJxCHNgcUzoyEFHe",
  "key5": "5CLJ3BptPBDwgdH47H3V1YpunUKPTJszdZrkH9BYnCXcmng16kKNw8GKBHgwtUGzzoD3GEfu7MgpYxa6wCLdTt63",
  "key6": "4X4jM5vMPBhLmDR2UAuSQ4S8Ww64mxxdTKpoMa6kLvKys6nQo2d2tEUHwpJQm1MbAUqZt8bYGVzqqMxgKpWqqs6o",
  "key7": "3uVJbbmzj1QDAqJUKyMWzfwDnbYqCPf2G4PouhYT3LVRPitYPVUD1dCCbehXECNZpHG5ECFnTz5sDtkuad6GhrkD",
  "key8": "2DrKH4ko5WuVuZYm7Ct54PQsRC85figShr8xAXp5XHTepm2tMRqPz74RTRkYTAT89kmUuV2oQSoia6LrvUVCCKHB",
  "key9": "ttwxECKWVrVtRJnbu4DKYtYbwm3fQErLMV9CRCBgWAJnwKH7m1F1ZdYwcwaiwpWpdacJcUxqDH3DmAW9wVHpXyC",
  "key10": "3VdG7DVDpqwXaXiY5G1zSSLbz7DL2uMhfZQ1sXNKUpmtzSfgpsGfrFTH3UEVkD6kTBGR3xhvgpwYzhR3SbiDBVWK",
  "key11": "2xEVMpz6nVgvY9WjbHYZbZVwHKyL5XaTJ7Z9K9QJ5SayKBzzisEvfWPmQs5AtaYseRLcZirkEVyhMJErHYoG8ubz",
  "key12": "4fXysr3F8TivYmbYRLo68vKQmT3CURbeoKBWd1XWo4LFqp91Ask8ZYP4RFcbsBY7d38ZMP2x9MFpywKhw4aZYaNs",
  "key13": "21u3ArPXAtJ3QGxoggoH2V7XYbdaDzjiw2a3ntk8q8jQmM6VXbNkxeaf1FpHGk18G26xX6mu3jCw1h4AUcHEuzJ8",
  "key14": "4Ss9cFHJrgMBKijMAS4rNCuAazsbvBx3jDv2ZQqZyhAYBsyU3qbtYQEhUaaxcpzFKLramGekSVz8mWu88bCLxDMu",
  "key15": "5kmTPWLCVqALD7x7YcmCdgwCvMgePqvGyuP88SYpw4U2QMDnTry149wdzkdmVsUXoWQJnSNrEq232iL3YCbihvvo",
  "key16": "4wxftdjryCJNCmKqE2EukD5Na8xSiHzjMVaTE7iJdYXdgv1rbh8vGZo3JZyDdcwyTRQBNRSCoDpWBfS4u1Qufj4J",
  "key17": "4zphry11B1hYLe6Lt7QkhXD7a6XHGYi8yHkDt6UdC2cKej1U5W5JAvM1sNxLqJd6t7kD1VKaaxqFCosRbW81Pn8w",
  "key18": "3w7Kx6ZMLaJ6DLQcbAjbwUv6x38JEHVYV4dh67H9X7DiGDjSEqFhsF77Zqe2Ujr7vcNPJRGNgL8QZSe8c2yPNfqM",
  "key19": "2MXpeKGhxKTsu4tUGnFWfSV9sMMzr7SYFqGoj17nghX1Z7Kyxpnbb7EPhR7BkzFkMkjREzBD9AnzWtXkuFsnj9Re",
  "key20": "3eRMJ2tR71FNTd7BSqdwugSvwGnFttrN4fZmtoYXNmxM8rsR7e5F7b5wz62AN6vr1DRcV6nNc8BUgCwNUvvpyThu",
  "key21": "46cLX3uKJVdsnQBMHWbS8w3p85mJfZhiXajkxEv64EieUyfQ5CnA73MsGG8pWcDviea7Duivefu1vVnbNcjDQfbP",
  "key22": "2D6JivmkJzEpG2AXhyVGuP2iPEbGxH8USmidPAJv3pgr6RHbBoUpbTUiqynStkbQMzdsoLbsqMpPa2E5GrcbT1J",
  "key23": "6DeKDLECxUnSV3DWJMdk5uMHmY23cBqhzXRm9AgoAkJRxGnQAiWLhxD6t3sscH5q1DaSBYb3ine6P3q8SV2K5TJ",
  "key24": "6S9w8dLVgSzmF2WAyT285TQQaD5GKJxhNXAmiNKWJWgAvRipiUEm2TPKc4CbF52FmXYwVm23gKv5fHjbGQzMiar",
  "key25": "4sYTT6CJtnFFE279hMHhgmqDFQqbsgc65QtKYFXAHNSoAg6eR6S9niC67S7n7Douf5Ge4JXtPdyYTA44JN9Bepiq",
  "key26": "Uq4iBAmhX4Locy3LyVQhLrBQLF3ifJcbgStcUdkxhzp1WBHFGUUfMadVYCCoNmN7fdHvcLnoL9umDq8jDUJHgyD",
  "key27": "2mM9gUKVxtxfJJWCMx9P3nJy9sur5wQKj4aEXDxvQ5wrWHRvDXYm6zhsEcaa3SsJiChvRtRi5Rpz7hPTMHeevwug",
  "key28": "3N3b8psYS7eCkkskyZqzPur84xcqLCTk66Que2ZFCBAX5fmQ4m32XDnPDY6ALkBA5apjM54KUVDqUPCk1qKytfA",
  "key29": "35iRhj23JpaWMupv2r89bbuXt6LkiUK32kostcVXmNXmwLkejKbzjxhirEzwVDDPWYtHcWSoRJzrTzSwHmMkQxWd",
  "key30": "3iypr59MbFz41kUjaG3c5EMpcELByJ8f9ajtRFvQ9H37m61YSzBD6zVv8pRn6PnoDLuTxtqFvkDGVTTsgwUB3Ksj",
  "key31": "4yJctTihHFnRnr6UB1LGaypTzrrPycJAQbB5UNywvFnpNMwUMXbDojLDkXiQGUBAc9953XjwqeB7BTyVvWUi3SX6",
  "key32": "5udzBZfnmJkVXoKD6RSBMPp5AD2sQNzTg9VyagK6r2ixiGLiky6dTLYLro6EhMv4MiUkBJEx9TSdGfLj5nrrEdBJ",
  "key33": "rm1C366m2orJVBX4RiSEgKDF4iPKrdLFaDwXPFnMwJZzsn9eYKKB8PcAdeCTM3mJnRG6o3i5b9L3Tz9sjY2qzy9",
  "key34": "41cFwjD9USYJMrxHuCZG1HDuxrxjh4cWgj8UeK2kr69DaXYp5yYMtbEvJJ4oNHKSECbbrk2fhqkxVD4n3LepSJaw",
  "key35": "2J2iRL5ByP5U4eztbCWrs7dQqgmix328vD6x2pQsZ29K3HXztqRqrXn1EkzWCt1agXqgKvpJoFYBtrep6FNQmwFn"
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
