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
    "3955kgV6nHCXa6cUVtHhSSJUv7jt9fjU2zaWnPfpu8GFX5uarDGuoCZhe3H1NwmQFHNwJQbbbHsRrPiSfbCw55Tn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dh75GvRUWBggG3Lgm34i3x7NtACNLErSbQa3DPZYkMk5UTLUTiDyhTa6LaD9pEuvnbRxWjrwkrV4EeWgv5vk2Hp",
  "key1": "5vj9r2KhxdtSetFToyhKm2jwpzFQtoBFkBCCE93zdshw2GpXNJ7ykr8Pgknrat6d2Ji1QZ9uWszdWBbJSt8hht7j",
  "key2": "4FCUPw231UxwmvC4i5mD2koe1sKT8caPVDe3RRrUUf7EkeMjSYWMbAzwjFjBreSpVLd6vCb4Te5fxryKQoBVpnCh",
  "key3": "4xWAWeZ1PATWFYMyAYtFzXZQ5Xz6f7XkyYxEGBRPuWDTkC1ZnvPq8y2mknE9sdndbroa5J64a567YhYTMdwTmz7t",
  "key4": "3qgsgTSaRAG1ZsD3RTrPCBH4WomXAHiMuFTq7VnoGN5UDCDzNYQzuJykVp4Ppk5CzP58aPZbbyumEJ7uw54wk17e",
  "key5": "3eeLVQ1Pze6NwvYWaGhAvhzB2xokp6etkNJ72czjfcHVwjqByNA9bV2MQnzRX6JKt3b9pYQRK5Hgf93n4zAu58WL",
  "key6": "62c7ouLNr39ATEAgwobWGoT53FcPJUGBcbi35q6NoD2gr2izmzXuzwAaVSiX8C9WFSEgtgmXBqsNY7azuuHCqYV1",
  "key7": "4oH3XKkEC3eKHjG1Xy45K79YEF9XYuzK5SDi6VHCgSnjCQuqVLuk7HXp8AXDEFDkzz4NKoymLqgbr3BV694CBpfJ",
  "key8": "4A8JwFmLtU7PjCSvtRA8EAXeGeA1rDiYyEVWSkzwz9iazprJSZxqSiBvd4amMkyV3ycxt6KRc4x4TfJZWjGead5E",
  "key9": "56yVY9x8vCSu4iKtUPGeWS7rQhPYL6m1KqVi35RXBUNyNhV5X111wgejfCAGphAMiobVfUDusP1AT2i6kruske7V",
  "key10": "61yxfPau1RcXa2fDV74h4SrgAiW2SDqXcfwW34ST2eZWtFFWv1AqbWdx9RdSSo1X5TCvZT9VmBY7e5dHxEZGX1wU",
  "key11": "hqZtxjuSkfDMSE9UHZd1HY6gKnsnaXe8nbsCtoapa5Drj3UTJwBTktJCoazx4RocnK5KjR5wwZJWdk8rLmgk2Nc",
  "key12": "4zRZ9jN9vjeQKj8JPCU7jZn3STjKDvMizvgr8CKjaMtFoQwb3g1yKghheAtGxorfjrVGqcWKaQcQwuMiunHRSSbJ",
  "key13": "xVasHgE3TJ9a5bXnndbPVRf34pXAuwuTWvgPf8iPqWj7PYWZ9MiJwLDQMGy3AMjsWuRvVw3QnReL6pvnAAtTGcX",
  "key14": "2ouct2kztpQ7e9fYeVMLPwE5pSNjJDGmgFR1GX6JmMttygrnq1fPvNrAUpjgiwg7qn2kStmnGVjWpb17ELkgywPC",
  "key15": "5Bg5ZByoVnoxS3RsR3nuiKw7TceQuDEnYx1NeAxpTyPYP1BMqFMkvmSw2VVfaMkEK3pjN4davNDpU963hHkZS6RJ",
  "key16": "5a6vpnU4u3GxyaMHX5oKUZNc6K97cBXBzELnjn2WkbAwRZXr21ZpaVoDRG8SeLyXv6j4cs7DBcATS29yM6Ws6aS5",
  "key17": "4J7TwT3nNGsuEVLFkECrAhjkPUqe87j16fjfRrF4oiRdz6vNyvW5JCeMjQzxQn2peWhNuPDNdcKMgxMfLQsnfdfn",
  "key18": "3N7PMC2Hr7GgdaDtDauySUWoLdHFB8uBiddBhLtiPjd9g26DeXrm66SLDDtsT2TwFBHCsjAbYoBKuF6iYMPrmxR2",
  "key19": "UfVqKReBmUeurBwScuby9q5mLKrKgAQH51csHeuepS8eg3Cxgp2PddxcB9rRqHNLNr7Jc2LYi7KvmiFqwdmxyTB",
  "key20": "2tRDGrnhr3EJRVe5g9eGHivXkHAhyXB7ZpbWHTcgrkUout1ECGRBBrmdeQeEK1NhyoXcKSqmYYUe8fAbVVbyLGcz",
  "key21": "3XapXuXinZjsmXn8YdkqRGit4HeLGPD3pQvtqv8593K3N5YBpvyL9pkv2VxBr9TPNwSsyWd487b9f4dxXAKWkJNw",
  "key22": "87FAzDiztCxNxQhKwHGEGT7UXVduzFLWSfgnzVS5GF5n4BqAyPCnim3LsViaHdZHHAZSJvJp5D3RFNQVz2BVhny",
  "key23": "4oApheFs57zhLzWCP7TgonKjL61tAN78oSJhcGUHfZfvoDYSVDszoe3APyJjXx6cDmgDGRctTfkgeZ6eVfq92oki",
  "key24": "5j9y9FuSRDdujcpC8BJQXoMiqjgLsSBVZ3QNkeJuYeFwGAT7ND4oa9xG8wLzWvo4kMEGoYHVffZ2cppXbtgBAqEQ",
  "key25": "5q5Nj2Bgx5oJr6SgKX5fEcnZeRxaR7SggsPVgiLc3zfbasbmQeKtSeCRoNKncBdZr6XiRybDC85BSKot8WZWXNrP"
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
