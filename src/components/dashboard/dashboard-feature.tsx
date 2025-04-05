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
    "W6FSz5NSxofK7jedDo9YHgZEni8KAKesgUN9pmWSxPxcnzha2pREp2iUByFoKhDksCPhatCSLEcQXFoLaCKLosX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S6i3uuPSC8rsVauwyENwRd3dXXeJAo12WaUamB1Zt4jFrVwg36dKjnfjewjwXyhT5QNmFtQxqY36wtkkqWYee1H",
  "key1": "WtHANo3TTvJ7PmN9UeL9w7hAPcBfmndKBtZMAU1ZVnbkXEwgXcke3hjcG7tiyYuyk47NxkX4hV7hZ17Vqs6ayxo",
  "key2": "5ek95FKAE9oAWgqPpkV1LAPxqBZMNKRookCtLbrvpi77PifAD46Tu3UM1GWhFR4pnJoCJSPQRLFU9iYfqtuZqBbK",
  "key3": "5YpLo22zAARnW2SkxCBN8L54B9gk4a1r2hDoCnzHYDoQzzgS8FQdYq8hYMiD7MRpBE8WdZgLfqfaSjK7EPAJutaK",
  "key4": "2JYuBm7QvFsT1bRPQ62YqpJquFzp2Y1oUBKoPpAivohE52sd1wDwiU9PDu96d5d2YKCTyY3UdMmdFX7ZcK2KvFut",
  "key5": "5K6YJkhoqWJqB9eBfFVp4TYwK86y6ByouBY4VfmC8pgwnNa7ncJCJeCjQb4f7f4UUTc5cdqZX7coYmaipEgrcjGp",
  "key6": "33Zqex9w7VaACjUH5ewAMUMmFrS7k9ngtzwucAThFQjyZ5db7NuzFKzmasQA5ktNpqHVQ9Rt8gwKEWgHK6ErJZGq",
  "key7": "2fc1rVQ5pJ5RsopRiRQ7FQiW6qEmgpskbxzJatkqkygfQ6fh1g938gQR3QSDAUciQxa3sZ7guGZpBLHZBtizsvNR",
  "key8": "4b4TrCxW3Ma6uBqEAhm55th3YMxrmbgVEpE6hYLbKfZcv3PwymZvtHkbs1yDR9ucBUHK4YCEfZXHiMT5oTH1zpHr",
  "key9": "5EoP4Qwf6sGACX4zVsmuFSUB6URunDAs41vyULytnyhNswEjiajLhfkYgkVfgHxuCbgpa4yWetybzJ1aRcQyw3tg",
  "key10": "35MXjvvj65XdNfWHA21jRvtVyrZbvbMdjMG7sKvveTPFFvu23VxoXuydwRhLmgBXvYGhvGzeKBiUQZ6mwJVdabYr",
  "key11": "zBgTPkok1DuiTehMdH6C7BoV1VEYCrbrvFWRJZojyufg8SbZuZdwg9FhiCjRrm5M4zj5qwLz9VLHS3PHV6hnnSu",
  "key12": "27URaTGaUuTvRFNZ1cB4rXGfeuzHs1P9qXWhxJ34vyu2XZUec7ZaBYNUX6hw4J92dFyuyd92uXxQYCMLB1HEb9mt",
  "key13": "4BnLkqwz3NLR8vY6VLfhSnQt9Yo98bwTYSQfz8iaZwZZLRsPXi88xpYuP7qXX7bFnj2oKbZPVD2qvf1fcu4phBiw",
  "key14": "jxxbC1ojhqMefyacYQ3X25Bm3B46v2u4MiAk7qNxkYL9hjc1nJntM9UqEGTxUJKfQP8n2P3zi6A27ShtGwPBGwN",
  "key15": "TLjiJ28UCk8YBvuEDLnMvMpqqQHK7PKMY7dX8gsFXqCXswVQQfd956w4Yd7Ms7UtxUxmZgDg8K9zPrg94WdAUhf",
  "key16": "66Znrh4sYwxVLSyguftVwauayTxSU4FKEmHPG68VUEDWUheKrUXFqPNEDQKSqhyF1dVAUMAVz4qPFau6FZzGnVT1",
  "key17": "66ocXYGjtsA9VfJpnRtHtdmkHf4E3yPBvHYerycNkx54zsSrw2QSgBNNhsyr93FYR7CJJ6B53uhYG81CKXxo4BqS",
  "key18": "8diKgrRzfUkLbNCWtCwbmyqB2Vsc3PqgpPcKdqbKPNmjVTBcFf5EYe1fmQj9cmJcibkTtKv3xrnEoqMw2ZfiZNS",
  "key19": "LvY65DYaA7wLnj35YBFfLSMR6i1UCTwHRnSv1BYJf1p6HbewkQoCQzQxnc7SYc5hAVPUSbdAFBGvbekFKUN8RiA",
  "key20": "5gmiKgr7m3yLSQYLdHg3BAiyai8ocssVCAac6UYhcChaBLEFhjdgytpd38pBZSJUnMCtKmdqfjs68ecU93sWFMyy",
  "key21": "4vhL54yhMtwXBy5PzVZqagd4urnT4Erp63rG5e48jQuVXvQWiz1cov3yDmLAkCAzGpV9FzXNW2Z7EzDPQCXWufGR",
  "key22": "2aRtCt6QrMJhLVDzFZWWDNXzaFe99CLD3ahvRD3p1QFa1CxoQEV8LBotLNmxDZ6xdYViKg9XAw9mVgeo2khkEuzc",
  "key23": "5yoE1yDKLGGusZDUQ74Dwu4cRxHRv9LYpMNVMBAS3EznkRLqcoKDEkmxsgVVRnYtGaSTjQZfsMaoaedC2dCq9U6u",
  "key24": "5Xm2w7RA95eDbbryENwVfatjgk4Jr4e4hx6yz918kQ6txEBmTE9xK82RaqCwECYC46oKDnFcLJw6Y7oq3yFhe9Pq",
  "key25": "3zECrcSEtXUAhGnefUEMzFgMyT8A3UcZRQ58N4UT7dyECPvySQ3VFytvEr5aZ1YhNxBFQJqzBwnZYXfYQqtt1BMT",
  "key26": "E2DPx1TfChi1xHzJYMuhNo2YGWzgCVrWRJj7ngjy4D6BxRUuBdsgxHiviNG59eFw3CRRdJPEB8MbDZKmn49yVf3",
  "key27": "37yHC4iJ8JQVMfuXGXVdpjAHBjQhPV9wJYErrC7KrdkF7LETV3TDP8nZqJWhbAHVDHjpCmt7qGdT9FCznPbWaVjq",
  "key28": "4SnVZaJsaQpJy6WvPinqYxiP3xfj7onDhKYFz4QkT7ydxXFdXbEyfaC7DBgQsdZ8CaeRVmVpRBoWNEsu1Ap3NYE5",
  "key29": "4xUACnKAin9utzobjsAUXkPspdy2eLuiyehgGkgHGJcgsWeM4KP8XHgpPZrdQA2922V8hLEyKC8ZYxAA1ZweW828",
  "key30": "5mXk1AvekAea1GB1MVeh7fYDin1aFcGrxQJDAvMGHF35TuLm82vD166fgXJizZHYNjvuMGvjEdfMfHQig6HEKHMt",
  "key31": "oYQcV4USjU9z647UvM4WxGfCM6cG5kswbpiHgK3pGu9MNYTeT7oAUmwccJrYg4fPrvJozVUaxpebUi62fiqhLXx",
  "key32": "5vWCxC47gFussRJTFeNDpoMEd8xhHrRsZ7hzsxiiVesRQ7xepg8prKCr1a7n9xCycejcSDMKi72AE91D3RieDtKP",
  "key33": "v9Upv3KvnKnKEdsw4G8xFph2KvxLMQXHJRXREgNvBfxviFogMDGz7n5p4RzbgeFu6FgsqKUV8FvFmC7g3TCSjU8",
  "key34": "5szNXHbcxoZktYdsTrg8gaigTkyhTEb7uxxhjZcQQdkJiFvTVmb4xG5vjUNKvrEBGTDqAJC4yTJa5wgBXQCM7oug",
  "key35": "2REC5dZ1cFwxwk6cB4GMoEdcp2Z3j8DwobXFhjFxku8w3diNEU7EKFG69f7xGNevxp8Zh3Bby9fKMEahmCasqwZB",
  "key36": "2PsuyTgedSBGpKRhBXd4wXNgiASB3ibMUT5ov5h9foaimPyVr2VMdFF2aFPnGEYMkYXWAsWuWEgUFAMeiYAJLWX1",
  "key37": "3MyVxoVp5JJTC7gcCHDra1xqHbMkfEzMyJjv3FPB5Tief9k4YJ3GUd3YfoumKiDSmzcFACvLu3xMkQgfZYqukXkX",
  "key38": "UPp1epPQkzfJnaNcMjyjsVvw3eGRvK4uqzwBP52jHtvrrBnEMgVe5u4nyKmE8WvNTVXSrMhjHPsgbMXAHKeviw7"
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
