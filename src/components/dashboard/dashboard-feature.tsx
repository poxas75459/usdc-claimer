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
    "56a4dbTFuVD5UAqFGvxd3sWVAT9GcW8brjSSDc4MZPL8YDeAPmrZeVPu3m3BC6xupdy3qPmn2diYZRDXWp1RGgV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52dN37GnNteZspNHdT7qK3iLce91zhh2pxLdDWmbYJoqmunKPTnr33ymS4RFuXjg7Rb375Uf9GEWCRRH8qgQXaZn",
  "key1": "3F6UHDRx2ZZaaK1FxSUqEZrPgaWKak1RAW7RaJjJaS6FuWb8WN2GqVLH21XbtgQAEfQH92x2XD1H7b7GZnrXrYt2",
  "key2": "2D3DS1GBYL4viRRNvrTExDeM3A2sNN3irS6xhYuc157dzahCnL28RWXsB68DVYYeNTQX9UuQ61xMqvvxvgsqVdyJ",
  "key3": "3y3SPjLWiJEm1PtjuJYP6CkBZXV5w2JtgmxB8QJnzeWgAdsGoALEMf1H6EhsbKoNHp1TqF7XXg5d6RujLL9vknJm",
  "key4": "pF3tMCoQuRWu4Gn95zHPxsFMenEHoz69ub7cSA5WCsLhLEvQZcCg8Go4RJE7RK8aKHQeR1X21Hmk8eaTxb93Nc8",
  "key5": "55K2wEDUbk8JiEm3LMHpvzFftRwYs6C5LJpLSdrbwVxYwEiJUkTw5g3n85RavKrvSoqa4Fg1poh5wudSu1Wm24wV",
  "key6": "5beSkWEwacinguVQqigZdt15B2t4eX9kQyxmEt8dDJbc2KuZGCAXzKyGQZMbm77Ta7ukUKvc6vTQbns5t3jiEkvn",
  "key7": "3Y1UR5Edx1R4swyBsXSwk6eBtdYR3aLD3dThxFD79KJaCNMr1QxstWHmVnJg4RVGju1a14XmBFDZjSAsKMLx8cib",
  "key8": "oNYURHicgdKAjNsdxuwikhsfPBbkULMnDD2a38W8JKfmxhdapEybQJSHq15xfxYgWdsS6dHjj3A55hjJiGXBQnb",
  "key9": "3vedNPLkxzm6CKjx9WZWMbTjfkLuTBZHqMnewBpjvYhvT8QJPHB8YNQatZnF6ZUpYjP6Ctvk9xKQQyi3H8sWkLdr",
  "key10": "2aBp9ahHFPLFfqDkoSjfgPSZdcknzuanRGNmioZsPt5DgTZo5cZWCRmrTUm9dpNQz1GPtgeyPzxpizam5PWjn6m2",
  "key11": "2qZ8gwY1zNV9WLhAZVLWptWjvsQUN37KnfSmCa8Ni8ovmWUDWfRbgAWkmyTixsTrswnRAHZ9NmtgKKZaHhYbbmii",
  "key12": "5PxN9SSDwHqbDZ9zBKxpBuarcNZ1uNjdDhJZsPWyiHzvt2bWPsdFqfhSrJkWwChZ6Jh1uPeSBtBJgkRyQtkuS3Br",
  "key13": "4wbmaqAuRmMShQzvPfMiZYAL81DP8enjkDBqt4fPEZGtwTsraaWRQrbfJmnBcepvmYxT5pizsw8Kc7F21tghwt2D",
  "key14": "3eNTJoYdMAdMUqzDhAD3vyy3NpWcWKLkZ4yHQU3UQ74UYQYTt6qJvpk8hsTZztMYTeNbnoLBr2pD6L2zcEhzG4RC",
  "key15": "5ExbZEnAgnZ4xKrXJie1GeF32jVfLos3Rxn2U1PnqM9NpD9DYChgzTNVENCdjVkBKBrntKUwU4btQZbsMTvL6PP7",
  "key16": "4tdZFnbsNdYmnMkyayRZR39uhUh9gf2UHntHM3s4i5JBBza4sYydmYaFJq1ZuvY2wE9xMXAX3rKF6EuLdNs1mUv9",
  "key17": "5e6BeLfJ6a1Mc9JyaDcjz7yMcGZY5i2CdfVPjpruwxoFvADPK4H8YJCbpwgAATN8GmV5hbSrb8DaDu6qfwYBwP5y",
  "key18": "XFiWRTuJQ5TPSU877uAHA2vh89FCyBN2YLnC7vkgyHCJ5KqR19QzQXf2Bano6jsjBzwprVoQ7FuvHX6Jeuvj8Jw",
  "key19": "3tbYjCFxmwcqhutvEavBq7RvrXsAd6hbbdTdZCNd3anisTwfUJt5R1tifhJHViXsAsQxbbpfYPeSw3AWgyvbEjfz",
  "key20": "2atx1ofxZYthZvVEqzXahUg38FSJzvvBB4LYBxuPeCpcRQWPAyt4Ctm22HruFpqMgWwFgfqGYVvnE8qunteMaMUC",
  "key21": "x1EvcUEyiLUetzupjKpC2kGFKejGCYp4H6RRgUuuycphf4yL6VJCWtf14qpqFnG9un1Lnup8pfLjoN3QfKskbbW",
  "key22": "51KFfoWn1nQTh9t58bbxgnZcRHWHz7X2CpZ1Ss5WsVunUeMGceWk2TyjmuEzoVJgSgB8PMqQDGsxwovzFHkr4nqq",
  "key23": "5Sm4pBa9zpZqtkJnpw6jYyZim6Sj8d65dCGRzRFogu1jgoRQbWqReTmWqB6o1GdxnrvP4ShsEb7Fd7swaQ6X5eut",
  "key24": "5UAcKmmTyMWCYwRRN18bJFQQn18SVeWMcSdU7ntTZZ7aoHUS32WpeUw35f8ScK4SufDV5XibDciRJSg6xK5N3EmW",
  "key25": "zqHao9kDdFB3KhZ228NevA5NGCj9KbQeJS3yWRLQBysbtMzC4BTaZh8uMPazht22NaBN1WwccUmBeAkn4V7RRXi",
  "key26": "5tFYBwXj6DhsrD6tKXPmx9QLCGT3SmASheYz1idb79uoeHA5M2oegepYXqte8HgfJEvnu5Qnfnn5XALbGZCxg1p4",
  "key27": "2v2LhAm7X98Din4PBp1awyZuS2Qdj4gvdNMW44BtRwUFJS8mh5kmTChgKx7hftk7SpRXHJ4WJXSsxnE5qQ9sXjnX"
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
