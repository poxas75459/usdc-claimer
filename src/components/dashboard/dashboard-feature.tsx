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
    "4d19gVQX6gg3fJAHJ7y9wAEh4nYqEtP9WrZmWNYbD8ra36Arbi3Uu8sTaacx2TxvfMZ9iKfvTEHuA6BbSHd5EwEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f1GQoji3XCcFCYAG51HQs6AC1zk4WzRTcffanNekPFgKSV1G5W99aKVJACJsKubwQ3BPKn4na3MNeaBQ352zUDM",
  "key1": "4iHsyzsz3pj67RvcXjGLz4MeszKTi1qk5T5g8RSomYfQwud4vwpSFM2hnqJJeQ61vPcf5DbTbLFH8Cr89QJsXmuW",
  "key2": "2nvBw6vEf97v1iMeKSFM8aPKdiML7xUX3SNZU3SXeHRQ99Cy3TWw3XkepTUMdZufg3WdqJsoJ3aDyHGhcWru4C3j",
  "key3": "27wnvg4NrbwtGoER6EchfpG8Q7nHDDTGeASVrLaTVE6ReHjpyvytgxsfYJisUQrtV8cdQFX4nJnfos5TkKKTssKF",
  "key4": "tcbnJ3ox6ENyShcUvJJWKMo852YxBSNDTsRphY6G4sDp2rMZrBqBGRKrr7NViCrRyvNs1KwtwbDnvEV71fdXjWg",
  "key5": "eR5YA9782WctHExnuZ4pWu1BCdLFqzWfzs2gwj6J2bXjrPRFgbMDNLmFt5n2JqSmCk8uTqvq6K3cbbP5gEVXMSc",
  "key6": "4YgvDwij2NB82j57mexF27Fk7SEiSGyFpGbSTv9xzLibzECwjGjvCHdyg4mj8qA5CCkg2hNBuhGn9DPBG2pbynXQ",
  "key7": "5MoyCmFnwoqC4AcyGLYeRgeAHDUbDYuWL9p5nHWgbAkKLR83dfVVAGRdR5UeGCugss9vU6Js9B2DQYb6DXKrATD5",
  "key8": "2ESRhZtp6EZYCDCMMKZWv7hy8n2MVfQ4USfN1vtxsfuBVqG8ELhwxAuTcGHRY1kFhi1RWAfY7C7KWxLSWokBPXEw",
  "key9": "2KuhdbwYZsRqadKSgoNx4RPkTynnAvBr16kRFWn6KAcJ4xBVVMVr5yjUCnf4xsywX5vj9YM6QzE2opeV6MgEYia9",
  "key10": "5yYRzJc4XZ1PiprEaJQ7BytAYJyN5UWtWKprsat91ER8znw3qKPVUMW7cE5icjURHTkBLMuNocNXePA8L8BHZgKz",
  "key11": "HSsYFhMi5eRneLigiTe9Gg1eaH2hDLHpmzeTTnqnMPKtaWguwJjbyF3ntVKMjDqF6Vi1vsnht9FEAbpxCqQbbN6",
  "key12": "5ckATJxEex1gW2JinCM6XURzLyRUsiGp98kRq6MdTXfwkctG96g5WpLsFEkHcoWNkMdtrogg8HXTiMezzjL5UCrs",
  "key13": "28yu1sxriuj3PEoCs92LcStJkkzrgzQMRBK8ykj9FJtNi7eE8ZdRX18sPsLnujtP8EFrN4MaMJHNaz7WEfgDRpkH",
  "key14": "2Xsrbpg46qEAoVCqFtq5YH9xpDaLSzApnAHb1Rsyyc3yjMyV3sJf64aVmyF7FaB181vVVqKaGXXCNLrWTKZTMfaZ",
  "key15": "2dY5VdD8UyuMVdPXRgxb2qQ5vwj5MGA3hX335Fa5aNA8iVCP7dhDQSGh8QxdRDohmNnVHJwtcf6V8g6ojr11CQ14",
  "key16": "2Z2LYDhGZAZNdfpxUujK2HRUwX6H28PSxp5UrYomcT43eDLbSVqF75FEbzaXwiSrWC37LFPfg3Y35cQ91fXKDZnz",
  "key17": "54bQvEjV2bJE6b6EXpx5FjFE1LiHU8egaXX8qUXbCeb8vFZV81VmkftMskVHyCKwBt8zqVK65dJSCgvx11UyhEPE",
  "key18": "5UfsXvsKTPAXZAGAzmT2Y3kwv616KX3HKPCSCQeGELNgNAf6GrmyUaRy4HwPcn8DoV2eMAovPfrTGcgPMrhBExJG",
  "key19": "jtup5eU46eiXuoMb7QkHVCjh7dMWNnuZnaB1mv3dn8wQiQN1xJXjwGTuP6qojWScBQRMZQTsebDMqKe3dSQaq63",
  "key20": "LoJeDptt4MjW3smi8weE2vL9QAX8z2uqzeksQYb5w9xb48DbBwy6SRghQ8WXWpp9GZ1fRnH56gfft9F1fAb9q1T",
  "key21": "3x5RVoj5cb3z8PNPWAs37eXq87mpnzyEEBn5c49MfddeNsk8csuxdCvPX5y7dKgJb5WzbTtD6JqWj6JPfhMyGRCd",
  "key22": "JC1SwguQEBnbEzCKVKDejLKKpakxeAdLEsjNeh3hcZaJ7KzyuB5gZHf4if35NgpewkHWiytpZapJ7YGEpjsbRZ4",
  "key23": "2z9i6PHtse2LYzoNGfvHEGhckhZ7WD1eAyYRE4Yo8QxPGNFQp8JMuTxdrxur6pBC2RAx8mZKGxS142r684TwuTnG",
  "key24": "3UoS5u791gcU7qpydkcvEJ7h2qPNNudp8u8448AakCCRiUVwuZ99x4poDEHcstpM1bzbpzKfLEN1wqmzDrRr81Ty",
  "key25": "3NexHF7JwAAgCBtFwKTHm3Y6MncKY4MEBzRd57RXZLtnwVVwP7v2JpeEJMScuxcqjkwJ4mTdQz6RrW1xTKQ22yaV",
  "key26": "cURZfJM266ASa8Ku69WWpFgqgSzPU2oTLbtb2yXbw8U6cc1ZwgUwTJL4viAXLYs1PKqiaFDtc6SyoCSkLFbv7Xd",
  "key27": "54LFssZTEFN1NnBeSUjR9z4hSWqXLr1h4UZ7C7wFqrnXoYnxYjMbXg3XR3emKxW4QPA2wjRdyoMtiWVtrP1AUByJ",
  "key28": "MwWDQ5t1LXcGCYtfaBFQZfx9RCCjcWypgx5dzKraN6BrWVe9rNEqSfhSW6MeeYXxoqquifvEN3xfa6GCWLeZtNX",
  "key29": "3VTNMXFGaxBTFpE8UNanMKvET3snH5NmqNnak1Zfi4je1R3WN2ekX6Z6GgbhrsY89Gi6XKujdzDxix794vSvewkN",
  "key30": "AiLhbAAHmoF3TGZ7qckDehm2DZTKcLztoc7iS4KGyTTDjC5975CtnJ6NZh6SidgtZ2FKr8EG9Mqz4jnh5yVh4x1",
  "key31": "2f6vgAPSxTCMt3t9V3brkNgyt2nfP26tCApUW7ms9UgHUmACCnypZCiGNp465TMoBYCBCT6Jy6u9HGhqtWmZ44TE",
  "key32": "3mqhZ4ZP8XLw2obsameaHE6wcAumPT34QsSs8t8MUvZoDPQ1Mz6F1jhuimZqnWWLgkavCxpwWRfDyT7n6LqWhzQU",
  "key33": "8b6YP7t64m3TeD32UaoKULWvvtgZxup3CDUXhW7ujRrewkE15hGTocGYb7x7gsYqwYVhQctfmwWxMUZi1QWQavd",
  "key34": "2oJ2bBcLgJQDoGD9dmKxF4TZu1pq3QcCzCfGAan6ba1mhh9vz7UW4Y6uNZVW8VqCgDPZJAjsbwUKivCnA3KeFn6U",
  "key35": "5xNNj2dMbLHNUNNazZCbHWHbjKy9dYkE2943aWBVpNjcwMGmixswWvxzukTZSMTTVLTCcyKkndPYbkBHWKrnPrTs",
  "key36": "5tAEfjKHADR5omUSD1s69jVtBRLPtySY6WzmTZTnqiwZJ5a6Tw5aUZ24TSyA5MaFnbiqiWDFCAbAuRX8hZaths1k",
  "key37": "2iWSJWPE5ZycnSVhSqngYamSAJQ1KLrzkfQK8hNnx3bDzwiLixwW43QuDxCHVyzUVGnRB3fEqByM2aRQJ6VhBKkd"
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
