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
    "5uLtNEE4M9GrJatKr6zB8VYpqXciKT8yDwEkuSGXVMZydRw6JB2uqy8viiha33zn5AVqEByQAWsBKdhdJUGcqGHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HAeQF8svsKWvKQH26M7y6zzs1Tryzr78h7vfRs2jVJo1N4KSBjNQCBfTHTc75bhEppvD4okc1MZPPpkgt9BDysD",
  "key1": "5s2ZAW6YrfxSnXZpTAa7v51x1i4oB9vYhRzgQdoNaBsg31ssAvbWTXdL4W5pDkcWH6SEPmXoNUxV8raJKwbKQZmo",
  "key2": "348dEfRHkQ7HiuG36bBCRZeA4HGxUkSioneDqFvkpQtYmQ8agXyAJP5u6PAi9snn6Z1Nm6WXcjT3DPRbKocCmRTS",
  "key3": "4yJXUqDpn6PCm48fuY2UjLc9bGjNdEDUdEJWwRcoNuWCiiGBXCji7ubqvinZhD3No87Pzxy4THTtexNDptLh1rnB",
  "key4": "4hKPgjCy1ihLHXx1YVZWTtu7Aj2NfLntd9sxQqdFmAJErELEMB6vDUhCZfDT3BLSaAmeYGZ2rvLoGespXZcM2xGS",
  "key5": "3EgpMM5rTPPcrnKQ5HckUpxf6sv8pEgLZJy1bM6jYa5cHaNK4eidC8LgZ7bmRwa3j5TYhfhVJ1mpmvoyebX1HB1L",
  "key6": "2HsDZvsGpRXQWWTMpZtpGf4AV4PZJhhxrkXnc94e2NbDhAwLJbR1eVGkDXq1DZXRu8pNtu5c1y4GPEmMWAiFdwk4",
  "key7": "2Qqi6HKv2thCd8W5hrJ7UJzD3Rze6dSi8UjFGSEWyNZTMwvPMfh42oXvxk3An4JcbbjWkSkgSFuURde2GnYvKzea",
  "key8": "5tH952KV1RrjL1kL2pe8aMBdg7FeLED6eNy24DTsVSqsaszhMfKK8MiZqe16JejUo9mauJTWgz75CJiSrNVYYZ76",
  "key9": "54BNpJsjBZGewUMfGSug5MBdLdFEcoJQEG7U3PaVtEZqiRoEneMUfmmp2oyutHKFYDQNjuYBqa9bXnZH3FYi98o",
  "key10": "5sW38eV2LkR3J9GD5LYUDsuVBSufRQYzfv6NCgw8YdXLnWrN3Kjk4K2GhqEMSkakdvTr6iS97yWYA98o6KBtRRgP",
  "key11": "5GMKVL3g6Xa6za8Fks6oCeigHyH1uVLWRhHrXVEXNy7trqQ4WQii8gtjaJnrqKUcYEq6Lcxp2LqYdHVsWRj7uqAa",
  "key12": "43k2zZC7CvXtrCBS48Xp9DkHSRb6UUxL7QemgUk9GFSpYJLA63fJ7NXtMVMCWBJc57ceHQfW2ZHZSLFZ3ywMApsX",
  "key13": "3LyfbL6KqZBs44cYq97WoZppkhwsGTcHVJ41nN7ikVughMHUpDWjUQEB92BYAGcCDE5vL8XdJSqY6Woydqz7PCpd",
  "key14": "4jDjyb3jDE8RBMCHh1YmAbfbC1p2CAm98GXC65HsTBCjyZkJTAbFhEGgQkEyWokP1wAGGd4nZJxPraT6WuZtoTMv",
  "key15": "3qhjPSAJ27wnAafnpUA5ErcmHyKF1K5UiGJtXRNHDzrhHUUhJ1SXkHsoUCsLXxEmKftLRXsKCPruoRpBwLL7Zg7d",
  "key16": "o9w3dL5fib4J8buzF3yjRCbR8Tpo7tdPbDpyN59DFJrgSXMSCkCx2qoHo3qQkG2XBHUoi3evF7EZDY36S1kV6MD",
  "key17": "3JiYxRsN9qJXt1BeJSxNeFvyDfGcqACS6oed6qThXabEo8qqjDUboqEvDeWNbdu9PkpjTUBrVgjzBfwYQoTnEiLe",
  "key18": "2S276Nat8na54aaYzf24mhVT3BaYXhf5uWT6hfy7FUpJ6SjSaxvsGd51HbAHwgiPcDEXX1chLCdj1YXM67QJE7TC",
  "key19": "PZCyU9BQRFhN5wT1RFvAehtiBB2FbYyoknuyavExLaTHmAF3H9oRTGXAGsmcpMSMPAuuyTjrWAGz9SipQDZ9d4i",
  "key20": "3mJ2ebSHdTcZ6WkJLf8DvdSQTZc9SypkG5kpe26n3Hcg6bjsZbXEJw1fhr2Uh8kHY7UFHgZgqSsccUzpSyQt6Lu1",
  "key21": "4xgNAkop2YVmH3gA36aeC4oajf5QukHmfFYdj1g9PaDGJs1aZ5FzMvk9c8jZFMbDvzJmiDKnHk2Hb3TqTWrN2ZX5",
  "key22": "5ccRvMzpMYfYvwXi5kGxCoajN6yZJqVRqcdCTBKgLyTsutKXmbihPuBMUsyN8ZEEkdUr3VQzyzFzahFjWuz98aTj",
  "key23": "57wmxM8CUTn5Brvv2TcFtHZa9Zw1edRCR3jfC7deihTHTsVyDAaWjiBB1B97k7ZtNGfGcByaeQruUHHfp5Yonzmg",
  "key24": "5BoMPdTpLFBbxwJqJSJb1VFXeUwzvioNRzqp3VxLeiDVwzvxZR3QzbRcBMqJNyQpqbTRCnKzA4wHdsdqDUFNBYoS",
  "key25": "5GYN77Jnmhw53NB1ZU8QcJmgpx8Wo4MArj92oU2kpfRaKrJXJspRoE5uaVzVCgy6adJDEWR1491EvmM91byC7CJA",
  "key26": "3f91tbcHXQDNqkx7bRgb6n6k6vhbKoF5MXpkdtpAD7cPuQrcDs2a1FyGCQPQ6zW86T6PvWKJ3DbYWhEjQeRHtBAh",
  "key27": "3NPrx2fxYxX8gDxc388CwBQ6xxP4Tcpw89v4mMocGhssHAg7APmXZZWEQQNYkSF211VYVLwG2EJqMCdGT3tP4xDa",
  "key28": "5nVK4Crkk3ZFoETfKpLzwn9HP72vyHjesTnNEGbYZNsmsreB1wNAx1awDhfbQN5RyZDr4N8S5FDp5BmYeN6fUS9X",
  "key29": "5rsnVENiT6QLqr2gVnavfu8bn5zWvkfpvPeAd81K6CnVMUysxfu2yyW6k4YvYaStGqCqiLN5FYhJNDbrauubCsDk"
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
