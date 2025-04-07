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
    "4dzmEjpTzK3kZ76w6ggu3KHsVWSN2o7sw1k1jLcA92zEjNyVPZXcQRrrEEStKwhuMARrYAyAXqwnaEm6j7eWPNRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MmmBKvstJB4hNbUZWn2tPuKFkC4as4K1CPZdbwYbVT2GnbzxR68Es3axfoVKdHyY9vNk1xx1usmT5c3rHAQMWAk",
  "key1": "4awSZacqt8w8A3d3MFtZiyqXFxMKob7MxBLjpLGneXTh7r5yjC27Xm73vweDmwG2BRwjp4KdQPfDeuF1z1pYmCYs",
  "key2": "5PZ92nXCSbyZniWKsKVyStaG97yuAYsqzbsLnPZtrrsNEwJRtqiYERzpJo92qMyFJsGFhkSxv58XpFCx3KNboYdz",
  "key3": "44ha9LZvvsGRBYuiTcNxUgiAjcBJeqXraqvvSgeGovkESvHwcykE3Y1kdHD3Un6kJygpG6JEdv4w8Z3V7zmtcU1v",
  "key4": "3VoqxG9Hwr7j2Gk2C9vzSzov9TK9iMWH7jgVrYSX31m3R7h3sKR756fKLMASjLFHKgTJJh2LuZ6bYo6eC2z81H6S",
  "key5": "moi24SsEcvqRJFkUFECbZcW5NYRtN8tNaB6UFo8P8iBcZ6Kq5bUpEsPe57m2Pot2xaKHz3iBBytaGVHhjNisozc",
  "key6": "5MMhRS7Ne6f4obnNk61iE4yay5sSfQYT3o8hoD9trQHj9TXvbb1CDQoi9XQCkVjpwRR6RjjdyctBo4ajpqCxP1xa",
  "key7": "55dhontTf1jH82ePeEjMj35zZ53Yp4Qv6NuK5zw5JUaSzcugxjidRjKjLRQWUgp3taWo3xKeRLztD4QPhDp3FA7Q",
  "key8": "3Cim4PEfnnExEWkcU8a8GXVWA9Zk3Xpsr5Yaki5GZ3GEfPcvmv97Ggchhfb87pCizJPQMjrNQ5BJDTs1uT3CF9u6",
  "key9": "2AaMGfgM2MWRde9fVgx492idrHUu3aJtsgSFEGzHYd9wHqVuPcyK5HYCujvWPaWpbHVC6kDicxXafzeTzN8ZmEA4",
  "key10": "5kCEGgMrjvwBY9DztA6ArRoAn6LQS3NB8tLXaGSBtGDsEK9r5CiKZCtcvwyZYAMZHhxtr9PQh9C31Nzmu5yE5nP6",
  "key11": "BNpL9VMeR9yQS5pEiKa5sMWGZ6SYLAtL5hvg4xyyR4zr2VnfTi6A6JpASCCSEf7pFRLPGSgBKqpAxbaciFmKDdg",
  "key12": "3YTuVDD7saJLZF2gbWm5w3k2i3VkSAuUVz7ds47uSe1f2F7T4GPun7vdaFZwHMA18SQtXg112mrAV124Z9mHdxiy",
  "key13": "4wy8JSjydWogWST9njagw1dnH5mN2gZ98TeKyxhPCybzzxGcKdKfJ6cNHdiNgHSL7VKLwnoFWtdjwfqiVMiyzy5T",
  "key14": "huXkmPQ7vJLxC4wkfyEH5QBnjFZJhW4qo7TVw7GHJsUZ351mN8tNtwBCD6vVcN1qoFtsTpsJeSWoH7RRej3pmoM",
  "key15": "2XV7jzTAJGxeTmxdVqcop7yBz4hNe4XQofU83ZjwvMASi5eXHeHezJLCL6wX43pHsMowpHJ4gSPhXUoZP65BxS7Y",
  "key16": "w4WwUTK6dAVBeY9fPuB8PDTKkZm8ZngwDC8PBPUtN8EDXVLxvtSg3YZ5My2nbNfgfYeouNhzATt9NUqZPgHj7kN",
  "key17": "bqU1BaV5MGroGth5J2Chnbwn9F5ZFgqYHETKYWu5gM5J2Kd5juir29MyzXDGwF3yZPCnRSLqc1RJwhkrKaY6b56",
  "key18": "er653A73zjFsS7WYVggedVEJQr9tzdA3rLAhQSvoHLN5q6A7vsVGg4sW914ciC3a7uMGx81AdyQAtvpdVh6o11d",
  "key19": "4iuUGBdXe84rxVPcjJ7bvUtzEUgS64W6KddbZcgRpvs17CtTBtVh8ro8wiZExfQpE8roAjZj5ogeGjZLCHqKEk6u",
  "key20": "3cNdNJNuTnoAP3K9mmyCVKr9ScvVBT7pxXwTCeXx6HiQV4AqmFZMoGb1L2r3BZRXYzCA2PVhCmS86mJ6KA22c227",
  "key21": "o4kVw7eEo3SyPAcM76bcAuQHN7TJotLYufdvvgfjdZZWisXicSiVSQW56cQ5uhzVmKizB6r2ALdKsYdusnJUadC",
  "key22": "57w16ib44JoiUXFtup79D74UJrLXecegkGkYaKEQcNZkorGLfGf5wGNYnro3jmUPfwd7aiqEWDYZMbSQurY4WRJ5",
  "key23": "44M1UwDkbw4RirkWhgD9MwJhsctQghiZj8CJqye1JRmvzZWk6tGgkXaDxGSU7wcn3NpaBzRsV9rAQhoVXTKzUq62",
  "key24": "3wsKn3fDBFb8JAeTAvHK9K57ZFtGb829Kyc2Q12vHugGXhe3SM8iZQzvnnQLRLhLjEoM37T9a71JYBa2rnZwgW7K",
  "key25": "3G1HSuyQeBcSVxo9ZnzmdEYT8aTDtdPfbjs5aaijDmMv7HgcLTsSujETi4MBTPBUz2KWMKbwzqao2EJvinHMZNWB",
  "key26": "4druLmQxByjevfG3iqZdwZJHivw4smUqr88Su7j2VJPC9b5kQkk3fYaToaRwnELxun5u57gWybKa15gpqN9EpqjG",
  "key27": "G3paouy7kUHhb1H1T8E2P9bJaJuAE7gYur8fxLb3ZhohvpnS5NSPamfgD3cGkYWPwBMM2HEQBV5ZsoH4GRYRQj4",
  "key28": "FhyVMPHWLytuUvu5Rj5gbpWTfh11USD76verr5gzoZuyCpf6w299EZ6Eu5mfi6jnNQ2TwToAY6SmXosbbWw924Z",
  "key29": "WUpbYNwEAVni5UzBBRDknT37iT35jVEH5a1pQhU7GXVoL5C3XyokA8hoSdiyxKhKquNLpERJevCKxTGiwV9DoV8",
  "key30": "LttXXs3Kb9F8TS1bZanHHr6yP7BK1uphx3sJBcsMWtYatA6Ema4Lnq6iygSnJrYF4yNVYuLE4k3RZj7Px8c4Nsj"
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
