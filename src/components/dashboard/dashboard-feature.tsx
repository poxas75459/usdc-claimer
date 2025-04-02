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
    "5sW14hvv1MpQENBkSDZptaXhEmhLRCFkLewgANfB8bc9vvoSHAvoiozgBtAtYZe1XJywALUwdQ8hU5wXtH6Xr6uE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MRjxTfwkpaioxtE762e4a51Yt8AYmroDUu9yUczKHdUMww8eYD2artE2t6zXFU8VAspLKu6KuMCjbaACX8pZwS5",
  "key1": "5qvuXMGwZducpRzKBoZFcpessPUvjKrEj1Bxycyd4qPrTdXa9QmxF6MygqB9g3QSuS8gjVX46okx5N9GAaBFzPK1",
  "key2": "5C18DnHRE94rufCn5KvCSmxqhhfVpUQt4PBJ5miwPLqR4xjmY6EqrMXBuPBjR2Wdmtrmqe3PVMg1gMm1TmjLmQWC",
  "key3": "48puW4pKqn1TxoH7HsPyvfT2LKpUrKKMM7PVsfMo8UTtnXUyzGUEcmHFZHg6wWMsUtWodBi2QiUZf7CwQLdUQAvz",
  "key4": "5eDfaAAoZqX2CmFERAQwfAmkagBiRrrxVLqccX7QcU9UxxXi71fi3v4H97oFEJU2ocuJcsDXVkVdn3p5oPGHQhRx",
  "key5": "7of5srVGNfmZYnYNZU55MUgNxPafq4h74v4vkwmkyKFHa2AaWuvag3YqbJaB9h9W3JLZpG1s6HmMuyF2zW8AWUF",
  "key6": "5iG3axDmWavVauZU9qaSRft65KvxypcaWRzgRX6KbjBsZhYNHcsKKG1jkg4rdDsensjqcrEyEWjz3t8BxuhydFpF",
  "key7": "3tgiq5CqwC3gve4egzVEor1EUwu8cKsQqFrKtTQBvcgK6DMUsiHJMrtk4PNSfmtwF5DAaAJpheTs3BVHmAR6654s",
  "key8": "4HRzV113DsJxQ6EXXYCjFLDWZKBk8oJbLZQeGD3ZU7X7VD7Gd4prSEQUWYQbVphDVszf7edYSUYAi413EdPtKtmg",
  "key9": "3hfyFHzE5fypLL62zHFqEmzDR73Z6bjVaJxdWLB6FC1zRJ9fPA9MNtJgbKTwE6mZSuFWHSU4AXsCEvEbxFBK8k4T",
  "key10": "2F5LHxrN37bXgk4dgtKsRd3CDoYPW61wYBP9v196piCpErZJXZjTPy44hqmnYX5t66Ki3NV8TJq3Xf8kV9AvsPpw",
  "key11": "31FDFiYW1Drnkq8zrbMjHVPoTjzVvMoNTC6ZmuxyHsA51xP7QXkQWWmRJPYWw8DhgF4dj35QJJConuo2m7pUhh3X",
  "key12": "cFtw25J66Q3NKp57sRgK466KKKrdCLhPpEfUf6BL654Ce2VpxUG137xMoBEmLJeSicTTQp6DMPGUnry9gyUwavi",
  "key13": "WHg1mJqBrvpi6zdFaoKFkNk3bqT2K9MMrrwcfnoTy9ARYBsrVrGLbN4mJLsvttkx6s2nPZtoxeyWtEketqdo6N9",
  "key14": "46iDN9CLFmYF6cXHcHhhbwyduRN89Qiei8TNM5xwBA3viA6BL7XhLvESqaYHpAb79MFQ9LxCUFTvRrxMaZrPj2Qs",
  "key15": "2gsFhZfkdvmsFs193EsuDj46PCwRrsWRCcecW5eTpcmaW2coWQvkfqzsoeyvQE8Q9FfDgVZAsFu6RC6B8nz8BDvZ",
  "key16": "2iDUSqDxXPGbRo7gtwArphwebKgqKn1YQVQ5QbrBsgBymQeh9vUz6MEVVDthEg5cuwTEEee8ZZcQsM6RntU8Qobt",
  "key17": "2YUsywBYRpP4ZsN2mfvgEsPP31hKsdX82GgAxkEHgnP7ahvyGHZmjBB8YHFSGvyUK1ZDbWLnvNbXmUVCu9JKwRM",
  "key18": "2wPdffUFUPTRhii7diTdzAkMHDzQPjXQy5D4AE5Re78v1wSLdZ8UXhz97x4Y91w3ztHEedSfkbupnVAr88h9PHrv",
  "key19": "3vxwhcXH7WhPvX2ftNpxzayZMwnapvXSsTf8sN2W4CLMrZgyijg9HwGVNLyz9C7iFnbMABpH4dzZcHuH37hzXCsu",
  "key20": "5vHgXr5fgjgAaG9hM87ByZDcuSUDYH3nAu15rUpF64xEqfNiH9wtWTcQNLXdRHGLHhQ8wAaYRqCv9qrjEezjHPKu",
  "key21": "3r4NSzADhQ4SNh2fV7PLoUsEvA7n3R1Sawnjs37t9uC86iigqv1JAj2CFPwR4ZnxFtUU6e2La5Wsw7Xx8rMBgce2",
  "key22": "2UMhT4dyJyJRjZwd8XQiBBaD1rv5jio2TKv112QaSAyN13hDLBSsFbdqRJSqDGPhEgsubZRA44ogqJr1btSRbMnc",
  "key23": "2v3MWAFf5M5yuk5ms8iLN8KonAo2k5FnZddhGx7ziRviyDcTc56ApjX9bJ1SPXArcTnzcWaxYW8wQmLsvQwssGSE",
  "key24": "3uXnwv2L8HZG5i4ofLUzbh8fihGxYtRrVsLhJUf8pUKUqMridW5qcaUa63U6GXt1x8NR94fKXT6iYsUQ1teevNxP"
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
