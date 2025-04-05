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
    "3eDVteLG9e7NZUmBSZMMCbKb1CHHttF9bv8aU7Wc7EwAa3qMmQKEzh4N3PgdakgeK87A2rx1tubQXeFX7GTqGU32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qJ336JvxSuFv3VABwbuvQFBqiq2W4qPaE5cJxPon4qtQwxBBr4pt9GpZaEHtBKUbzkG23wKNtMUA4qXEeC7KDds",
  "key1": "3S7nLq1cetSPEJLwDdo7s6CNwNHg46BLW13GS2s2yrh7bZvDgK7AjPfW4S8L1tLzasGqPtUfNTduJjyAxR8g1vey",
  "key2": "4rC2iq2cqrKYgFaHt4BrmYmin7gfTXfpsVtk8xVat6uM1WFVp1KegD1rmyNUkeygW1AKUSAFtZorUC13VjBp1VM7",
  "key3": "Qbq7iBicJQ7eohHjRWQDyHSVFbgXTg28Y6hAcETrYpCKgkXgMggJEUDgaPRuhauKQ6pbECStKw5r2NZLBzB1HLD",
  "key4": "2V7ExbY4HWB7Wtoib8JLhHQgXhvbHWqwDQNrv9vs1Z3h5YHfYDbtGKugfcdXK5vF9KvmHNvgsg6EnPj2e7ePst84",
  "key5": "4VfssbjSsQRtcTfVK7QcLC4shv4bqaHLrNuV7ZhhU9M4GbrUXjRwaDeuSHuB3K72ZDNqLfMvoNsBTVeApHB9DJEs",
  "key6": "3c8C131ARWndAeVbBb3bhv7dcEd65TrffgVN2vYtygxJqE4qtrKxawirFBbCTsjfbqWq47FmyhGHbEjBF32KB9cG",
  "key7": "41ypQAZCKgqp1hcP822HUA12se16KjKZYg7Ybp6GB3ZLEJZpxpLNMoE6zmGjCGUukwkwqiwJuDMLeKYPPbJ37YeQ",
  "key8": "5ggpeXAUgTPmZBja6Ef7bKPpvz8aoTDSkLhhWmqVwmTV8ybUZrLn7TjerUvDPpiYgTKarxzvAa9zbW4koxbzTtYo",
  "key9": "3Hui28CA3vuf5WPMr83Zu9onxswR8yytwJ7Vd7iKLX9A6kdV7EsvuopmSiHAjzCpim3mu25zLCsSdLUBa5kwif7V",
  "key10": "pS21vjmQprsicMpAfXMFcP9bxTeEVDCDLBWY1xgR5CwdoZ7MCvRLAyG4ER4ADUbhEYrAEruN1G2A3xCCeNidwQR",
  "key11": "34RXPKHdTeCiF6pDnaeAeDgmstRprJvb7YaeZawxMVUF4KTMPfGWVXnXMn57PfwyqYbqAMqTJRXhh2Wxkvazurff",
  "key12": "3xLQvn6P23cszgDJW8RCc1GnbUJejUp6dqCJNnsbuSLufQYaSwiNJhkPyjqnyuPzvhsKghSvaqoKxCthNVoAieoK",
  "key13": "4SvBVpiZGCpS2TEJvjkjXtEEM1iinJ1vuTnBPZKC74AD2864NBPKGDQJ58AEozoym77nS5XWcQrRBgybhi33cs4S",
  "key14": "4nwgBV2UtYdL6jaU2C2uYLp68pXSsT7gzFrxxxidq3cDM5b6pNMfja55Rc9q1QYLvYaGsAX6rgykekF5cYJucV2d",
  "key15": "3dkYojR6XYCrWq8qgp2CnWBriQi91pLVXh39hzjiXdcwQ8yqXvET9wbwt6pWDKRcPRnC9HmfzwPdVST8m6DS6V5W",
  "key16": "2xyoNm8oKiWyvLEFpbszk4657PcejrsrYtQWei2d9aL7gjQVGntDPopgFLjd3M8s47hxZBvegGeYaMDMtghoCZ9s",
  "key17": "5dhG8L633ite6ndkW9BnKfhWKQLkwo7AmTGHxD5a3pg7x8h5MCNT46cUk5AmDcvZEdGqySWWPhjSQEMb1WhUFsjX",
  "key18": "4EAM82zBMRngK16RjYnoERRvi2kDPYZMkqYb4v5Cr6i7WB7bvGFXxs3zupFwSU3ADKhLeBWvevZg57WU8pfgAD4p",
  "key19": "4VTdhoWti8Xg5jj1YRy2zKaucKZ74bRucxfs3aq5K9d8VkR1za7K7S2t4x5p89HQaWUHMzrmwCjeQevrFRTavY29",
  "key20": "NKtxQx6SMoi6ac73BeYnknuhbxiqW734bfmrGKPS4s7v41o1fb35RF7zst3ZGsYV3X1hARxd58zum5pFnP3jDza",
  "key21": "3ay57a4yMHaFZsgoApRNFakEY6fQy4YSHYNKWN2JsJzsyqmkjiKhNds3pNDDdLVcS1ALbjhQaLV8Sd6JUsnLUMqn",
  "key22": "46CKHAPbBRXMH1pM1qiwvzdCdXwySTeK8tEzzfjoa8bNRePPUpBdc4X5t7GPSTxwTRAHYve9ee4KfnDEN57kQ3aW",
  "key23": "qjrfVrmySBsbmP8gESH5Ryn8zxMFRkggHhgCaeeMhPmir6n6fQMpESh3GnT6vsmfTjFtwZzuhkLe2YwrtQYNDps",
  "key24": "5QR4BjvGEiUEQZGNMPn7GCvAAWbDLA3QYwaofdrJ1tQrBnFtKcG5FytXyB6s9DJ3zL8m9J8jkRZxLh7jAweRKLQR",
  "key25": "2BSH9DuxDZVoTsGrZsFD2QE7UxMX4i42pfFrmDdnitGGuggT1ynQa1b587BeXbnjHebc6PrDZXxz3KAaFtwhwcV5",
  "key26": "2zRAiyhf57ZFZDd8qStqLrGSU66ikURrc8h5QaCp6E9qr1ovA1EDza37geqM1k23947KhgkgMPiNExdWY6rC9xqd",
  "key27": "26zpB8q96m3LjizacC1PCWdKXKs2eXLDFC2m58uSeZCJU2wADSEX1wHnztQvTyUKisn18dWJLFDmoM5DedbkQwMY",
  "key28": "4GM4UDtAhFcFYhzJCzXamUGLU88et4EQkFRX8NuaMiFZqgb3WhpcAmABRGN486aSTiM3EaFC5M6wr6G3jgDMYQva",
  "key29": "5SU47QKthKhFwczuaGQy2bCucnMCXUdcwqoywmTagJ6GfZsgL274VETppPx6jPDcTscK2N4tXEWUuusV9X9nVng8",
  "key30": "4kpSMmswa9HNJPUK2RpnnbhxBrafrKjRdbBnUTRkBpfZMgG7kzr2naUDikjvum3rZREaRQPqSHYyYgneenRJHwzE"
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
