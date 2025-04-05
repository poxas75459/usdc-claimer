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
    "48K4ZAGqcV5jFd8D8nHRGPVJb516SzUhWcJEqXRoQyTCZsqKYDyGmrwzqRzedPGzyCJRYn93B3EC46M1omURQTZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hBJvPJgueoUhqdsVooSEUrs7HgAinpAhTxcFMaT84nU8UFWm8i3DLaDh8jwoXmGzKDbJ8ajqjWmMC9iH1yyPLQb",
  "key1": "ajXmerg9CNQAsjHdNsfNKdNrHzXwksarf1hgTWFbPguFo6UYBsp3zgFPt2fmeKHSMHZ9Fc4UKtK1Stjox5Q3WmV",
  "key2": "2jGWvkNQzMywm5hiff2XWbnmLbrH3xgT1MEJxTqUd3GBvYWsqTauhnGSSukpCGDzF7BCtKHq9xHtefjK4SNsBRQX",
  "key3": "62KDaCpbn12fePovjWhenMeQi16QJBhGSUpWEB1AK1hD2E4knZCUYcPW64w5A5RZcZFGD6uNABdqSUnQ7cnex7q2",
  "key4": "4VZnqGY2dxjtJqr7hcRsXPHnTrw4pfruBArHrWzZFcPLhnpQ6cYtFpq2PdYyBDzEcb7wJLTHTCGXSC64AbBD17LK",
  "key5": "5gAvQbCzHiSUPKGCptFmPiE2Xorj87jiuVtLFK5hYKH6Mbdc3YmxYorXtxCieox6cboSgbPb18HDAxUPZLQPhM5o",
  "key6": "5fZ4x6Me2fUyWbH6b684WWxpLEUXagy4SZ62mTJxxMjq3A6TKZxrQPFy5gNShyhGKieeaHoNu3bhKFRUTAMcWJf1",
  "key7": "3YmodT4d4cqg6zTbtGTdW691qPYQ1EmjKrp8aQ9E4Tp3hga4kxzLA8cFS5Lavjj9ULLwsTahCmt5cdvbESyScr5X",
  "key8": "3FikdjSsPEwGmyKVqWXRaxHihHjsMpZoKHSJn3vKQAqPRFnykeJ9drVhqRARggMU5eq7k2fcq4LLuT8ZKUpPEyFX",
  "key9": "5LRxZppX2Gf72gizu8q5RdDTJqZmFfBo7NQ8yYZJkuCXTbtRaixGz2FXafZNobgGYCv4mRFCfAWmYThDLdvrAjYf",
  "key10": "r7dZo9RRT1rZL3LDaspd6Az7RB7dRZY4CHPJ5fJueysXrLHycWZvuD2Bewqj3RZuCpdDRroz4VBf9xbRa5mYWbA",
  "key11": "kEyAcYP8Ghpwgzdf3Q66fjtRSQkoH2qYVJyxG6n7GpJeA6vhBCfhUNfYG9bA55ALUzxwn19sEaD7qpigVaHRtGH",
  "key12": "38Mj9QN6eAaxp7D8xJ7ktfF6Ncm6EspKJ2vE9iTzG2VHhBqGEt11Mguhxts7jnVaY9tw9pcCvmgyPRzFVZcvr95j",
  "key13": "4XT7wn2SCDusX4GEJZKNn3Lkp45QjtzSiSmzqu943xh7f9X3weTj1gVq8yUifuK9CF9vJaP8Wde3gb4BCVnb1e5a",
  "key14": "5EdxJMLTXhKxpckFGPfX65huTG6NNtAJWnjZZHBHR2udmJXJaY2Hy85HXuRdmCzVifKiMJwukr3X1MpPNQgQupFe",
  "key15": "54z88undQwcV1nt5NVByGaVkoay5SoKHU9eFxh123oT3a1fCo7xjCwnRKvyYRv5Mjuj3E2xdGhHqN4vit49kxdre",
  "key16": "31EGnFxWwPpncjVv3xxH9j9bjvQPdhdKV7xv3qAu6HEYVhFFX9Sm9Gx1XkWuVpC24hWsnAqS4Q6ZF2PrLu9XXtej",
  "key17": "5J71LY6mqnqwvSgYwFVfiasVorntaB1uouh7vE2e8DLo9CnpALB1r4mHbR4bas3XyokMCeq2HR766moCfniw1UdB",
  "key18": "5uyDcJ1gk32wHYGMxtc8Su99Kw8MQYfYXtyNpXpX8BvMTcTRf8WbFwUscYEkUECx8qi5HExC39tsGRNaSRt1rgS2",
  "key19": "3Bv3FeoMJtegPBFxXFU9fwq2bB3Ugm9EcJr9S8qjARaPrcPULXuLEbwhjvXfmtmyZJo85FrEum3GsNccqZBGUnBE",
  "key20": "3RfAHWvnDEMaWThbwKKuSYDk2HL4viZTkninaFS46kPNzenNRvbiKF5QYBRbempPL37eJsBd7gRy4yVzCF4eZywS",
  "key21": "23KqVTjjTfi8umgtMMyiGUdvBpwdsBWqMVm1M8TcqZJtJYxEyxERVqvDXef18EYovsvRCKriYxyncQo4tL13Vkb4",
  "key22": "4dubfVpCB8YcLR4VFxguLQ5zTSRFSjSYtzb6KVQUGV3LFxFxXjkqG1aSFXUbgwcevyb1FYtdy11GxyR7jFsAsg8S",
  "key23": "K5fnD7fuM5RbPVeKtqQz3UmjntHyiK8kZweTcng5uPu5b5YoxnrGirXHLUW178FS5sGtNV9fxspWBn2BmaHCHib",
  "key24": "3eEqkqzKqMAjDpTRo5SnXtvKYvXfsSZyPRHy1pequfxkYxriViBoQTzDszVLWm9Q9Mbr7eP5MQQEBvCKaugeoU6k",
  "key25": "zvQtXvkeGjS8D4a14PwSmqavLCdfAH7e7d86imEHorvFS3VguiHs6DrQDwbLFSvKyRnEGH7G4YHEabtZekMkSdq"
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
