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
    "5uVqmd6UutTruPbzw7XVAkgJHtuKCqPkYLbpjRxYixVL5Ha5Aj3hKK6Uod9riEaPRtXcTH3JAkhXrkwSR7pUXPgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54nJ1Msu482bEL6f6xo5SU6HgUyFCAv5JVMDSwW28uvocFnafdppbRzGYiwNio1CqoZEPbDwPn12TZsBT6V8CVZn",
  "key1": "5LvbApAMviJkXNpsdY32fYVUKoh3RDh98zEnpwZL11GnP4Kio3239vdhufxmcJEShy29P7xQMRjztjYu85VR2Lqm",
  "key2": "q9gjt4gprs6mKLH85gWuPsDbi4p5y84iMH2CaBc9hF8pT6h8z7vScyUBQmDyHVuKFrkbZP4UUovoxiTbGVGHB4a",
  "key3": "2hxaHGecmpLoE7WjD4fooDyLHv1FwWbx1MX618cCFR7BbwMALAXE9HSWNHuLspYyPtFuX9XWkkdwamrYaAu95Fnf",
  "key4": "qcoG4aeXvmMogeRnxUJNAjXyKreJRF41sDskkjRi8CjoQy9DD7Q1zDE3aqJBQWtmD1DCPVZ9maRkgEn2XaLNVZo",
  "key5": "65ticFyYJ4QsoKYJEj8iyaDkvkQLkQ5BwhMtP6Sae7ZY7F4WpXAykHhbcKCie5cL4D1eT7jt13FwG2xM1faRgEXF",
  "key6": "3qi6D5i275wW5rBFL5KF5suA8P28rpUDAA7qgfC1dL2dUdhegFL5PNPfpei3KgX1Zf1vi8nqB4YdY4CjRVNwkVPW",
  "key7": "29mxWfG8TGzJGzVqE1wyHjxDnwAhu2N8hwU14MGTQFVfjJ5sSX12tdL9xr75KxvfQadcUyT11RXGET5GthEGoP8f",
  "key8": "2vHAeonZMz5eQaDh5cjxYUqLmbjhdcKL8pf9GzGCSXhWPsfqUxKnhYQQeSQYNwycZrBUGUP5bQ4CVV7xwF7oAZmZ",
  "key9": "5UFB3WtN68tsqcNkq1YeNsHyDgM8aA98E6E32MdBnCYZYdXyLNoKSss13DjjPKpBaZXTkHGWWhDBkq5Y2vtSq2QA",
  "key10": "2uNToquwyiCNUPZZhrTzHqms2GUVtFvaEMUJGVBYZ3S2xthNu1wjSQM1eVskHH4vFk3Z5fHLNzY3NAPZtRHbMPVy",
  "key11": "5fpVrzVyTNkegFttTFD26f8PxSyzDCBqz2NyeEiwKiSHcQAD2R61RJ9cynaEVBaTC5hwcBr4yfEMJGuVcsUsjMp2",
  "key12": "jA98YDVMr4o1GJW4yXjou6GjRAS4kNPJ3NaUwNMGWVV6ipe71qEC8Zab67oEBeoVEHcQD6cqfRwcph5KSuWsLUw",
  "key13": "2GT96K4MLCNrcrS67ZD94QxLhL4x5hXUy4aEVR1uP73cL3JNLSdjrGsaHQbixDdTarBgaT8RTF1nzSPmtPRDA2iW",
  "key14": "7kUQ1kuTtb88MEb47w33eX27AFgxy8Bfq8pKknp2bctZRrH5iF5JQaJqqheBQRXktzWPJfmQNhMi2gYUyVQVPvG",
  "key15": "4seZqbZeHcnSTTaBdTbcB6ubdTLgMzGeGoPYU5GVnCZXdYeZmE6piHhzyhJWqDR9JPiQMVM7EhLpXN5usaENzMbX",
  "key16": "ixZr83nAtRCoGRJ4ddCqSQbXmAQs8GSQR4fGM5jeebRQtqQqxdqZ3QC7nVpFGqLuHqMKX1NiSScmnH3JC4PNxga",
  "key17": "58HSiDy2UtuGRfHrKBkVqPLZ7kSLQ5R1Vgj8wXPpUg2JgFq9GnkocB44faK95tWkCnyYvCyNUHQe7wCGLacj9zWg",
  "key18": "5kahWkfequE6kFLmhw7BJqbe9t4GKhQm7KQXPM18wzegttbSiZjMVDXqv32buT9eNhH6mgok1nmhJSXMe4w2sQER",
  "key19": "3UhBBskNToZxEoA4ecuCXn8e2ycz2ZeZqkCgqopyUpxN7WESy1ghd6Brj6RD19g7oEjfzhcKmvkSkveivRyNSXHA",
  "key20": "9TD3vXwYa5g1QMoei86KrFHH9ugydEM8VTgKuFGbD7rriCd1dWzRjrRXoP9xC2SNXZHyXqZgsCFhvCs1D2UKE8d",
  "key21": "2w4KLNejReUxEnUHwGZhqhoqjqGGX7vWqMZXMQ2ngQpkvYfVrvfFeA9912U8x4fHY8vccKrCxMtqPzfFBYnE5ZAU",
  "key22": "48tqJVhDNxjYeBbbCU7MKD39n8B8AvEzK2pbPaBqePXtt9tPpSifNNsSCdAzP8mSFDvwx7qVwSUZn1q9iTPUbdVx",
  "key23": "4PkYahii6gAW3EWZ8CtmwZ6rTu6tWoNPXbsZ22SsU6GXbBi42AuorKxp6W2A7yTb52bf9Kgc9dDzfh6SV1GfgSXv",
  "key24": "Lhixvh1bFF5J2uNSLfUeEDB7EmKZ2JirjbyMi6hwnimtKPhrHroCEWxYryugVrriYev91rHDUgMdYw44USgUfRV",
  "key25": "4brDhznVL51Kn46eQ2dkRt1XirfoADK4EWSA16xSD6wYjAhQwVF2NZSjMaTRzx19fyn78gCUpzQiG3YCsh4zwDKw"
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
