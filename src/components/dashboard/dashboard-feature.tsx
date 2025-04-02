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
    "3SWjt3idY93L6RhW2vmai5JKP41Einprb4oFbVbamjh3c1V6B9SKCgdcE8Hsbmshb1uuRHXHwWa1G6Y6o3bt16YR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZfMYatoY8mg5kcZnJ9NYxgzEG1k5s43GhBY2krxNYvaoJdExCN81HfjDysypE1y85YCes5XjcDhrKdUzx2NgswS",
  "key1": "3Fh6JFt8eCHEC6124A7m8bNxNzjeo9wLHWD5exDzp6zz2RjjzrTsYhvJpC7Am7aEw7PhXGXr56ikjqXJiYdqujE1",
  "key2": "61i27vqiyiuuxcZn3NQNTW5ncwstw5DoYVDRKsJxREXt4R8XKQotAkx7bRU31xvLJUr9joFMzLGcHd3ZK5YbwhQ4",
  "key3": "31zhHc56fynPGpfbPAWZ93d2nnoKFufqh7ao1ZEHrU6ZJntbfeziqEgCsrHhPNjXdQTBL5erFxdLrouKFy9ATULp",
  "key4": "4rAvsuabNkmjxhdC62uTo2cs65s1GtZKP73cLEfoBGet8hTVxj5kDojf8Pdfze5xfB1pMiQgwyg3mgw5vHN6rkNv",
  "key5": "TLqEkgQA6NHnKtkUGqpCzLgznZqMBURNJxDGUwbtRswCGENhyP4KcS3DhVGXKSNd7ws1W8Yak1kDQQmr1ETy6Yc",
  "key6": "4g9aH8pqRMbyZAUSajMvQ7r2Q4iR2p1KBshhJPAQX1sWeLfEQ3qPBx2YvyhGyPwRCyqiodb5MSMWGKtLmjJ86Hw3",
  "key7": "2wHmZ9aREDK4iPXnpemwARnoghXixzU6fvyiEpRhV4XuPgUTjwKLYq5K689yCZF46zPchnqCvh7rRyNiFGeN3fCj",
  "key8": "5KTsyJBVocQvtmtQdstTUD5TKC6P3Kr2Gz2RQCUMqLyaL4wMeLATNkE8yJGo1Ytf83vUn2Hs8meoCjNqpwXJHHWv",
  "key9": "41LuPkXzM7DyKFGFZk9wnEzLkpVuTpijXkXyj4jPXJLrSHc5QmCqaVmzEppeHQ4V1bWz7oyUZoSxyfF2j1dyhWG7",
  "key10": "5AJg4ps4Mn3W6gWt6mdyzarxa7pn8kRecyHMZJJaSPCcXV5Rsw9fQRcFmbL4eaLtWTftWp2xsiguJWiX2AvxmCMn",
  "key11": "4Cs229WXJ54o2MqFroMXXBPWDXDuxs8VGCVWTEALFG9gNirweqzUp49XQbN15etev71fX7fMQgGmzGG32xBycJzf",
  "key12": "53WoDvBJRiSZfb2DegAj8G4jp5UCw1U423Vm2QohRHHTV3ZB3LEFjDErWPNo62Rswo6VgKpcAMm8ZTEhTsyTSDNR",
  "key13": "3vtrU4xdruJ98wZVGrJQibHyPY9zC5edYXDWMe9xe6pTv2HmkW7prfQtcYjJfUoPFhdVjmkNrAQWDbAwgACaMwxc",
  "key14": "3TkyHqwQYS16ei84UAzrA66aELGhjzkj4j48e9ik7fCDBkQEDfs2ieq8TLxPCDGA2naT12C282wQibT8Jy3XwaFm",
  "key15": "29tw1qtRMZj3M3eQMJXjBDDptBbotC3bQ1w1SBctRS9CNJ6EZ14UxjbhJ83SNfMjA7qzC6xHRHD887ELD8C2fEzX",
  "key16": "5XnuBeMKDfUdnvrttSnRbPN99SicRA1wJNLkYDJ9QXXt4AD9KYuoTph5gVW7B7oC4NtLQnyipb7KUjXa3Mz5sFY6",
  "key17": "4sU8edH2r9ESy5TxFo5yxhZRpfXsSRxJj2n439G8AdbPLai2Mr33JhSUXkT6ZowNrhkHPrMgNPvU79qTrk26Evnr",
  "key18": "3iVaRzUdcck6YzyMPcPxWtukDCd6aKYZZAg8GhfEa72FxQRJ8NxoszwdEph1dwV6V4CfLby8KwQqgnW8jUwP9W93",
  "key19": "3g5FCT56GUbLjNnagEv3CaRFTLHgYnTJjVzgGvCWaPNRmx8riXGauh5yHgLNoDRjFYv8Q63tnGsjpEb5iXp3raAn",
  "key20": "5VXXvdbJhFyKXYQ7epoZyHE6JeF1XLZkb3y38W3RZrGSbuANJwdUYesUsYRc8K6bspEimrZWrtv6ZmqdLjEL9WaV",
  "key21": "3WpszR3ukpBRrYw3cFWHPqDRuLqQAHqhFD1Qc4WgDMKM7Bs72xHxxUhiZCScYNr7zxJGzBX6Gn7yPyJ27VpyXbmu",
  "key22": "5iyV2uojDsei62ndsZwUpuDoEvrLXFvr3dS6Q57cQoNcBQvtknVGsk8uUSy2LZSVZR7Bv2hmPpxf9feMLs1ZdrVv",
  "key23": "2fqs6mzPkFDecRVQxM6kvc5ckQWngPHNPfyvYVUFqAbFyFLE5r2gmYtAcZzWFB69dZXX5WVZHSrvGRNCjZ3MWDxa",
  "key24": "313pkGBxGzmcqgTi4uJg3ufwTFgRMwHzEP3tk5qQ68c2xYKYZvvHcvHZJ2A564wgJkoY7vKhaExoXRNbt2jMmF3L",
  "key25": "25F1dUxPq6jtehjWhcX5uZf2FA5U5ncbfkcLQzYq8hege8p8GMcyVFCdwEi6ihTh9pVqgTRqJxgi5Wv4APw3KpM9",
  "key26": "5kKq9K6qECA868SPqjgZVJHbuvytxrfw2qwbMczQeZaJDMoPHQdyT437MSLgkhihxDGMUCCNE7JZEHYRZtTwFnmb",
  "key27": "5pt7khUZHQAmKzVnmJtU7CsJsHSEjVcLxXFtGZYupLGw2S2ihJRxcPNRASrkouhGPZrq7AywGFTZ7KREPoP5smDo",
  "key28": "zRyzTBMd4WMqNDYRmZrb6uSN8nagFWNadeQtpv6tVUqWUzVyUXdjKu78GWNPgzehwwiK7HtcTNAh1k8ATVG4go5",
  "key29": "5otUAsFNNhALr2MYq17XjGYozTP9TdiB7HbSxPteRnQjUDakwWeVqidRVTjCm5qkn7ak4pNCr9vbWjJF7hV6dY3U",
  "key30": "3R2buoHK35DKrBE51WxVArzX6kEqEwFPtVzRRPS866wWojwRWRNTid16ZbdV7X28MMdv6PJeMcGJJrQ73mqPQQNZ",
  "key31": "5S8NuzUy7pe3esZw3NR1qMG7eZoSachjFya6jfd2yMs4UH7FnGjYAQe3Ha2sy7T8Vv8yc6shJokLdkZvouf2TYid",
  "key32": "3cyvs27XSWMF8EtaDrLktWcYM6ZYesdyns6xKGHc47j3PQASYw6Jh82PMPd9XYxicLLfRTx7U8LWBsTERn2LjPG2",
  "key33": "5EhskU6PXcT6YVKjXQBFgPpb2iSetPwhH6bNiGzsFbysC3s13NaGj2oFHwwmqZLY6NfDVBrPZbfY3uawmJGWW2bp",
  "key34": "966vfC7jQmcjaFEtHeCmhuDSCLBdCuNgjtvcQzeMunV91bu8PaUc7WfuJg8AiwGhDArizZxfTTgVsQxR3XkWjfs",
  "key35": "58aL8kEPAS2UgEAYDui8y26Knr7jmkrLYAmDYFvEPf4uGmb7YKbmtoKX29NymynuC4cSYhCdBBbEfDRy9hPYTz8P",
  "key36": "ULq2hwDS2qTyYn5mAsv3Zq7ANRYq9w6sELnLeYb24NjEMM7ZZRCm5Yscuiq4NjtJoZHqfyLV3VV6FmNScwwRvwt",
  "key37": "3FwZPzAaFL5pRiaxPh7TK4PR4dCJehMQ3BNhhrj1h71NCsfV7souPg8YUPUWZwNVrB4zykKy2p3ZURbnkRvdioZr",
  "key38": "2GjBzxjVdeu6KZrhKVfF1WKitTFeJV868wcxXdCMp9mRYFXjAhxJMHJZJiWtj6XG6QxUqtXnAHAdiczZ9XSjEECe",
  "key39": "5cbP4NCBZVncdW7WsYdNRNYvbwWQMKN5TBipzHhmeQosGFY3LeBsT5ZXhb5hK5M3BioFone131ApknRFT65G24ss",
  "key40": "B3ykSsm6sn3HRyiiTMeA82NuvuT6w3cDKhW5JkEbCfyMZGjHMTGHqisnqUbX6YptZXGGBWyXQvNYadwvcvz2kCP",
  "key41": "4v1K1BWhmXGhgxNbyatVQMo8musuYeXe9ChYzE9rPntEDe4moeZZyX8W7qTttPBx8yQ4K3zBmWpj2LEef28ftaLc",
  "key42": "2pgQaSpRjx4PBoLe3KPSLukDX2EsTwnDebB4cS3thaQU4aE28GDs9GstrKkFMFaCchxjJ6HM4csTYjGZsf5GNWFM",
  "key43": "3UxxZ4c8kWyV5gVfjCtJZNYUvocsXWPCL5o6qPgambmhG3M2eynCQCtvwAoqkRwpiXnocG2chmw1XniohxabCPte",
  "key44": "25HZGZGHUB1uUUFcuCYfbpbqRCPpfZANv8NepoMy8ktKpHCpHFLHA8sDNesSM856AbFHYF7wwdZbJXyYPpJ2Ucub"
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
