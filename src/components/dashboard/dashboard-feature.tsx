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
    "2mTqDYoJbnMqefHcEWWxL2YWn8CmtexQKDwtidhBChLBJkei79HJ2wcK9EtCHRzZEwf95y4aEzwUAE5asovQC1Jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bfh9mqHCZfCAVbdLfhHCJxNTbZFyyXYS8wM8giLUuXApwvPAYPdrLP6ak7huH6YUXFeTYybNfnSShVQsEfzfT6z",
  "key1": "r7JVF4mFXr7PiAHtSiUMWAib44dmSsZxXVCDdBYqGnmSkoYcEU6pLzSUtPN8FPUxCwEur4LzC7UwRxD28sYBUFo",
  "key2": "5e4sUwfu3nxMeBYPiDZ1S7KwBzepcrN7f17w5TqWosZBnuJyfvwdG4tD5z2E3R89X7iAWBhbYBgvsGWPrGuvp139",
  "key3": "2aQKPVrQYzFgoRxsmzqqdX8qZLNeRhjqrYnLyauUAzBxPZYQcN3CwqZjjKW6ZSXWzHEo8UXCyv1C5FiXEFvMUB7s",
  "key4": "5iwSZEDaGRmCx756QKN7g4pfXWgPGtB56pMEVXCHX5Q6UPR2gGEGM6YM6VwPoPvko2pytQLb4DAGBmUTPDD7AtHf",
  "key5": "3qtu39MLPqtysERAEv6Q319Q8zEH2xdUsRwCdAjbxTc8ADETuVyoK2tToN6GmEhBZ8dqWpcn3dMspwvfyo6pb3UQ",
  "key6": "fgJEj7icFuv2kigUy6Yhrer1cj7iQjv26izTQvaygcrmfX8xAEFA5Y5aT95TDnUfhjP1Ub6kBCaRfpg3UZ3wMWA",
  "key7": "5a3shYhpaS9v6Yk1D1dMBrWKnfjJxo9tRZEqc6AG4dD2XH89sCXeSXhexc8P5sshen5iGaBVvBtHc34mcD8mKsdZ",
  "key8": "4f4dBb3Nk3xyR7qD86WyUSgo48vAXX2bENWiq5ujT6NBYxkVvqmxk85bFDvCgEWec6h4hyB2SwP6SqJkQrW59FKv",
  "key9": "5BGmEHdBSPVcmpvyR7HeBUq2SRdauxtAWdJo2NSGa33DmLNhmNXCpqHbfiNfkJAuyivjmmSXCQiYGMnNLJgfc3XY",
  "key10": "5Vsh4NUSt7ko69apHoNZU2YDLegtT7uZRJaGEGTQXfQPgydm5hT6YcepfLqNez43ygrzR8eZfG8oDDVHDPnk6mAM",
  "key11": "35qD83VhtN5HBtig3qxTjLKUTPvJasZspKR4xsKALG7QavRzpHkDcBqdRYVhsjXaR6MVpZ2d6grfQbz6EicwEus2",
  "key12": "654NesLai5KZybAx9kFKmcPYpH52WfmKr3M9tTuZuDVnmiMhZEsDxZNLvEstmjJb7txYB3EpVsA7KqwieEJ8T3jp",
  "key13": "4FKfewiDmcznvAEBVynbWT8WwLjkpGBaGTpPWSX8xHjSinwAuvqKVzjouc5eW1WhcwmLAR94UkbeKkNtY6i2NfYG",
  "key14": "uHXHpmQYng2ivv4TZqM7iVSwhgTHwKgYYcLjVV2QwpEtwskczZnt9bUMktcuuxuwd3LQfZ9v6jBPjY4qbA8LN1W",
  "key15": "5YLDdJRznLmaUh29ZQ7M6bi1ZShMAFF9b7t317JMoMXnwoPrCA6dXi96ggc2QBQGWKURmjuuMWvTxTu7V8i3BEGL",
  "key16": "2ZamUnt7F3pSEKSZTgpjTmTwA7epXgx85cDXoq7pYPq33hCxwScDoe5xGqtjDdxjvHE7ndi458JwvXEoY3D6wuSH",
  "key17": "AfkwKa1Fsp3jFCCdsKsNrLJavXJFSdipuTJ8HDMeKC5kZpD3v5y6Np1YtaZqur8N5PwnwTUddhsD3JDuG5fmh7a",
  "key18": "317F4Xe55E7Y5gMGo4Zp2bmLc2gMJHQaL9j3Srfztigrmde1S1isUJLNdununhPhw6DJNHRJxqXA2TtFYQZRzgP",
  "key19": "56b5be6TmUNLiKCDFFZgc9SaLyLypUDxD1YappdDp3xcnohJsyRzoaojDp4hBJt7suuMaYdRegiQe6hRmccE1WP9",
  "key20": "59SWQLm97wG2ebuY3P731oiezNCdN7RX3EBuGnqDqu2uQNvqwDT1FTprzZ9kHiPsEh2YY4cnyYtTJ4nDSHUu4CeA",
  "key21": "4PdrtiX7YvyeWVXKjAxAaPTu7cZ1dHb5CF4BodLiWv2QRv1XT4msXy4QMmsCvsEz9wTMy41rAfa3BZA5Hj7XZbEX",
  "key22": "3NNuEMpgRgVu3ZCK1YfAU1xbsdscJn52Mcv6mK1a5W6Kt75L9Hwns7Pedndz84cfnTM8vx6ckY3evz6NENeiMfEi",
  "key23": "4AE1JcR2oM92MR9RAnP5UqqhJGjTVPgvV2xbMr4RzPvWG1TNjzG735jFS2hxpdZWoxJfisJ6NZsuScNWNcx144MP",
  "key24": "3jrC4UHoy9mibJLAFSjdLfA8MgVp3tT9gyjzi7Ygt8Aunn5z8AqfeJeWEWrwt2TurNPDr7fsRMvWhoDpdv4WcSmX",
  "key25": "27Hg2cCGwUUp1ZGrt1JCeZMR7N4U6jX8F86Xn4QXgyJAdmM5GsmyA2rnxWnZCfwtKMmFuK1iuUqhG7Kx8dqGbq4D",
  "key26": "49cDCNXx3xQNH7egQAvoVyaaws8vHkbsQMamGW1ic1SvKzxrqE7E9fnq271n6JJTma7Hyj6kAPf7115BRamjRjm4",
  "key27": "2EFt3ikQvLtGRVk5NdwonAyncsemoJNaxhoGvXwMNpyWg27zKsWv1zpnKfH8L9oePJiN3qDtqv81ynxURsqPjyKM",
  "key28": "nArdshDSMNeBViC4jvsFDgZqeThXVnN7Agw3mYB9MrAJvZdDR19tMjAPqJ8VpkTNF7uExPhTc9c555uriPeEcgV",
  "key29": "3wNMwkBuiHhFzHQC5hwFqYtzgKxqvQpZRSqRr1s2SceYTEXtQgdc4xG77pHGTRbs8JUV8JFUn48nU9tauMhXZgDq"
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
