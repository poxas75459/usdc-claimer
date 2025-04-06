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
    "X9wcJH9YYvzQgrpNidtt7PfP69nRMEfXgJvVGo2xeuJUvtDwanquUshJms2SaJoEtipJ3n8yffAkzYXWCLd5tVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WgoZFeAeYESW3aa6Tfeos3zj3HpRdbMiDXiPJUUcAWZ6wVvZK3qLvmUTmKUBKgziXryK5gF77ASseQeNcS6XSw4",
  "key1": "exuse5jFfgSqnGiQ5hnLSdi4QAttHEW2Ymiam17zSbvExzQ2H7i1Pn36RmyTSzQ9h7vwXJ9GCuuMidcUsFJbMzS",
  "key2": "AxoAkrqfuJqMS3Xqtea23U1nT9PLLiDh24KoBS65pL624D5qFJdjHLUZef4hFc5JRFMpUSCi3dRXhNcTmoRzaU5",
  "key3": "3a7ZMB8aar3KoU7gur4u9yk8qwU2fW5M8EBw2LbGAeghzt5RgJ8an53zZtYuujHCZhz7p6uVYx9gnRqfqr5AL5r8",
  "key4": "389jUfu2PApKpTm7gKsetJS3Shsq3ksv1TiXuq1UYYby3ASJrZgwm2dT1AqqVHNqoQtxZw72KzjmSDK6dVcSYNBw",
  "key5": "2ZKiNjxrYmAPyGpv1zGDCUG7s3L3Vo3xyyvqRQvBm6EBswa3Z55hCAeeBTgDWZTe2rJu4E6r69KahdGtvDjAF3HR",
  "key6": "3hwoKaKkisYXnpznxKNoKqiMMwFrxkq4wwGeUzH9aFHxz4ozcvhT87Qm199MNyaaC4Fn2HDzKbKaaso7zBYKxc8V",
  "key7": "SWjxs29P9coUb7aTUjPcsZDVD5UCpbnNWvFRNQs89KRMe5BwGk922zQfaCguqSCi1ktTSwWsKEeFNLJisTpiSbm",
  "key8": "3htQdCjM1rHw58NvgF3q7ARucxetR7Rf75uBv8j5mCU8Du6M58fAzG8V8XjT8DPTQbxcKbmv1kYrm7Rm8FBjCR6W",
  "key9": "9F5AAeTWNQWQiaA5jpPWrwXYrxN25V3G3HAXA58QcdQhJnRJJ6whfaRV3KShrcHeKwDYLHoJ8Aj8QZoKNDgzRuL",
  "key10": "k2mV2QobKKvjXkNMeMB75ZYe6YeYZGi5E65giqmVEh5updVJZosPaToxAZvSVJvV4cMUpSwxvcA8uD4iE3i6ToG",
  "key11": "64HD5DHDpQ5ZDMhPDvBMzE2zQRUX1k2MX3fnE2ChnjB2oi7uhQUsdfGH8DjvumvzTgCMicbfZvKAP7m38dR6dZ9x",
  "key12": "3iZRK9XkYSAA5JqxJQuWCrGKeibYDq5dJFEbvHPdt5Z1cwkT6kSGu2Fnwq1ZX3An2t8xwdyBJUuGhoKf5rSi7znU",
  "key13": "3cKQtYBKozUM9HrXkFuvwXgkyZheH25HmacBWY7WmXKLJtMn87NgHmqdZA1n3GwwGErPPNao8j5PVfySCDhx36zp",
  "key14": "3N4RUfHBWzs4CTW1McFGUqehTYVhvu7fGTskn9AwCQnDWLCMknELSNPdZku4venHMtwsnCitAXHkkcDkQ1uDLNCJ",
  "key15": "3zSSNMYRr27BC55FkYAtNyBEDJNer2Mfxo5ALA9LDKAVWa6yW9epmSi7zwA7Awa8Ei1JFhRTTaMjPjtWcbg2SiKX",
  "key16": "3L9h49VTbj2RBbu4EWaNRtzCTq1o8aACpFxPY9S2tC8C4gdriJc8aGpxWrV2Gwo3WnaRWxJUVxTU9CDZhTHSSgn9",
  "key17": "5ek11vQzVHmEcRdh5eidapp6xhWiAogxVwgrseuVNcgRfucAjfUiZWPEBusBBx5V5DoiYQ8SV1PhWGnwgy6TX2De",
  "key18": "63houTbqM5mzwjgy6KgRx9D6cmHGDGzXoL1kUejgtL5UWkXEKxLVXJPUMPjRDzihMscowhLaQ4TpW2v687vBbran",
  "key19": "3XhDjB4C5nm5DF8XAadKqUf9z9JTStudNCZmqJcXKonRq4CZKDHXwpfTA4nvhBmKurjf8FqCMLYgJgPrDLB5HVjx",
  "key20": "546pz6uajcwbY7UjcjrWxLXUJbpNJwsBeD76x4Rk5KKmGpupwVoUS37j1UviUDQUvaphpNfa7GFjkvJxd1nAgWUV",
  "key21": "2htG4Xqkq3no5QV3HUZ1HEyoqFdDnHBysPqDoQHPdgGVRz4QnY9Mwkwu6oZZjGAv2fhfriVVEiV23pt3q1YvNPzo",
  "key22": "5uAgG579cCL5wHvyRSxPbzB5BJy6mXNYRCZS6X3GEuxEsrqtxhrEBSXPGPTVNwGDRqcmydjcNnCiNNduMuXy897o",
  "key23": "4Rc8kGfSLR23LoQSn4QvZDKEYT6HHpiVsfAPdSZ6mWFX2HWanUmawgmYvCuanGQEsk5vgWncx34W9zN4oZ8GF4Gs",
  "key24": "pNFL22F8yze2YJtnQUeDReaRUWqcaBKpnmt1harCSr4mN51tHksm1BVEoWnGgkCdM6K2S6MJJwq9E4T7v3aNQFt",
  "key25": "ravxCTCyPRs1f8WaNf3P2BGhfCG7dfSYGx7B3u4P5eQkVtjUGsfvhmF8WN7iytPAHXeKAGmbc84V3873A2uLhAB",
  "key26": "3w1Q3LNvfTisDH62etGKRD5S5cvpm2qGGXzKCpx7HgS9z9Nc6XY7dw5zEgh6MA7KPnVn3S2TxNxBGdik4NepAu3n",
  "key27": "44TN82SvNhWL9Z5z7PK3EfHQEVRGTpFZFAraYHXwHNZ4Y65gJt9TZo7BAC9GKrAajeekiSiTNGxVc5g6QeXVjCCu",
  "key28": "5tS5VSvPJ6qv3LL3gFFWGoyVjnxQgG75s8QsjrWW8n6zEuHSQcNqqSDww5ZSmJ6BLG8uLQEyGKpzCZPofdDQnenq",
  "key29": "5paMveCHd3LbHwoZ1yKbcophvzzg8eCNksZZwCAJGTS8kahVEtiyPEuqF7HDYxf3zLxnh9GCtBnVgugNTVkh88in",
  "key30": "48UeyCTwagXSHCRLaVfNHQw29gPG95YyErTJXjyh8r9aH3kFqbe6iXYJFwieSca5QXK1sutxfnzCfRXynPYe2F9S",
  "key31": "2zqY8UpUU9S1Yw63HzCEjfMpg8w253AAki2kqfS4uWrLQixi8kkZ6GKRwWPpGC4xqeeQdjX69c6vpKR82ZdDcr7f",
  "key32": "2AmTLnJ2Lh9Ez8ozXbCykC8PJT2gurDjyyD7sSjiyK42iHyFMGenBnEaH5XFPjeNPrSsA4tJRvZXfbvCkSJQXSur"
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
