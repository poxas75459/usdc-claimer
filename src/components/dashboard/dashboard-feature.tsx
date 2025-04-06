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
    "21kjiCmBSLTAWacEVtbiRVTyopWw279ofRJznazz2QXqNxa9G6MMrJwKgEPCXyEUKMhskofV7aAx781SSCC4ry9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zXEQgvyAmyLXnY5Nc8vfY1AZJ2t9NDFSynDVN8HcDgLEiLvD5GdzsSsTh1VmYDsj99AAoFemd6gXXE2asMu6raF",
  "key1": "5r2FqPggD8fYZivp3Utfnzfa3w8eYwSV5Zu5G7nVMEpDf6fCtUEkZTLRav5hXYyBMaeKLXRdhJKEqMgvfU8a24iu",
  "key2": "SaenuuMBukTkkTZnvaCjdeaRu5YQD5Zqzv4FrKBpk3H5Egvv4pwqkYmnnXmihxZ5gMKhsEyeU1dZ5hb2sPNcLHX",
  "key3": "Eybe5EmJzsHH7EUQvcRgJikEJQv2EiE887tqxytA32HcXLVoom7Wtnfv924Kd1T6KkqtMEh7fdxsmpfeGbmkPB9",
  "key4": "5E3z9yvbArJp5vHtzwHTV2s5TSxcW4vN7tuazcJQ68hrdDYsh5isKoBtHDqN8f5oxx6a4fyMDaSFxohReGKqBwRR",
  "key5": "5s7GWAeXgJfK3WhSHcBpnmG6SAomqJBUGYyqyQF7s43M5Mg5AGMD4xwyXGnBHS5U4er6373YsdQxRYpkscierxjE",
  "key6": "2JMB8pqA6hF8UAyPWdnexUNt3bDGJdDWBU3nMHB3MZ7zuRy4Tipk8GM348FWTwCPSCMX6pdoUxp6xjuRnWL4VSKW",
  "key7": "3paYHL1vPLmWBpHpbyphuR6HA7zjQ9LFVwhrMDpbpEUdtuHik6zu1ba9MeeDLf9SZjFibS8twoKs1tuho1ArMt3h",
  "key8": "2EqTPGuPBACjp8Y8ubeKkhxohSp68YFnKC8nhi3pNs7rc4fw6EYooxPgERDu1F42RgvCcnwFohkPQ1kajuwSpRD",
  "key9": "5FacdBAk7XjuhBdLm3uyBWoocASMHctyYKGaX9jj2PbeB4pa9o7FLyJ3ReBVCBoSuXHECBvSivHsnbSwLcHyWKPL",
  "key10": "3roukEeThhci62fHve4Df1AkaMioR9KXntRkm2414xNo18PWj5cUXHXRvZG27cRfhRWUvtdkMbTWoP3w3PPV1RGB",
  "key11": "5EdfWy7FZLwMFbx8fBXQZqjRifTq4dZGFdTysKhaZrXg29xZwwhJtyemaGkQZ4P7LgerG2JTiC3TYFFdEtJvXsyB",
  "key12": "4qWh97AqHa23B8QQ2Au6vpnYWArAzGFyrm8STdgdJSHpFwPiut7NvRgCCXpZ1Y7NyFTDWbFQQ4KtZn5VFAKGceZU",
  "key13": "4X4sV9V9u442s14Wiw8DdbVLq5QaAetmSLf9vr6uRLJanQEetrt1yZaGWLR7qBcaE18h83GBKu3FiWfs5ks6vXwk",
  "key14": "H113MBP23Ga6pAgegJxin85zpncRXRAQALeY6UfDVdyTSt4yw4P2EM63gZcZRm495XdgQkS9UmWeU8Yqw4sX1Kz",
  "key15": "2X2kkXsMG6Up8RvbD47GRpvx6kKV9jWEwft62zW3bZSfwegdwJouBmXUiJDB1yaq9YtGEpYAYMDPJYhpQS7boEY4",
  "key16": "3ediPWNHCkYwEhKVtUsxQUDNuzDgbCZK7mzvyPd8sHNQYccdtLW6dMkrwRptkdbNgXC92PXPoDYamJ9YQFYVbxeQ",
  "key17": "2cxj9RuJ3R92ygmC3RwApf9ywapecDSYfVu8KbBNCkuwSyrdgcXzHCe331QH5qVa1TuwE3TQJCngaUyViGrKPWUR",
  "key18": "4hbEZTsfcsdQiQVndc65VxiGqxe1SEhfm6iZnPD7yMKBMWsWiZnp4ogeundNQREVsJXUT538CF2hhFyquHJv3ff2",
  "key19": "G18MNTSVU9x6dpHfHrFx3jYZCVM6yKug9jAmr5ayufSE6aLMPWTZG8bRLyCsYboXsJhUwSUZ9nvjifQYXqgbx8a",
  "key20": "nj1eCGRBK8NDiSnU1FfX5ZXyhx3bDdwXuFm7WVP6z4Ygwygvx4tnaShZuHC2jndk9TqkWoGcnuzhJG8Y1YLKCKb",
  "key21": "3MMbNrXRQ7wMetag1dG4daDmieZAm5euZ9UPJzaTik2nURkUA7VzBdCH3cNL6e1VCJPsCHh6cdUx6sioLwkjewz",
  "key22": "5GZpPWk7sN1ciUSDetSu84kh61mNCu3jCTbVSL1V2ApNUqkVTA2dg8ykM5ruBzEBpDqWtaRmWpeR7UxizQ7iKTuP",
  "key23": "3A5odwZCstx7g3XBvaro9G38kRJW8p2VPUkTLZRzpTxxvVEUiwBStaMaHZYyrradKzwuJbs98NpCwrvEVsFJE2Vw",
  "key24": "3KVMNJMcEdGh2V4Zgz5zmgitDHmkZgxz8a25istjAB58iq79nSWn6es4KX68VJ97NMhSvpatos2AxDxLup9Y2k3L",
  "key25": "2YuWSohBHneBnmnKgc4RiuPtKFjjV7fWJDzedjfffohdk6FE1m9cBoHtpxnPW1kLCCLBgdcKpNDCNZXy9ktt458Y",
  "key26": "3K9eiGqxiej3CFnU7m55KUoBgUhoYe4Z8D989akfYFBbAMJkKGwagtVZSKzWtBqcCmwbXosHkQGrcBq9gyK5PquE",
  "key27": "5xG2MJgV9JzCDenH7TrKoMvVzY2TDjcvq3BEfJpn6BAheb3j71MormsgkujRwKt7eMTcciUPNCzY1RKiWjv83EEL",
  "key28": "5UP4VvjFNaqKVubcKXsdNPZAKttKty6bdDBzajMRVTY5YzKaq14HjaX5aR1T6imqerAtVfqgUW4HhGB2RcdBPcQX",
  "key29": "5BjNuDst8wEjiXUKpKy6b2ir1QcHEzaecV2Qvp2mjSHwPxTV5XrvYyeWPNoQHre9N7XDj5hxfdzjcU6RHc7SLYVF",
  "key30": "2oKybtYWkxA8m6zG9uPgeo2eam7dDhvEjSH8YW1E4mdKmE5kDEno2ZZYHAnSTZskH4iC97zBb9ww8r7t8RxCqEq5",
  "key31": "4HYBKYEUHd113hFtg6jc9opbaoDbvmw7Rw74xphdgqZq1PGFdMTojVFkaSrhNeuTx4b1aqtfxUYpDxXwR6ayc4H1",
  "key32": "z5jg9q4mMq46PSgBrfXkVYCZoxkevjw2Fb717r1jU7kBCWE1WZPHNwPic6Uh22SJZJVGqVouVUN7PSSy9oTbTQk",
  "key33": "4JfTzVzXGb7igcTcVTtq9E7CxSMWKWbngaC9Xwd1JUaLgWHEKw1Fbyv2fHa7haDz1oY1fJ2BZksfd82tBt2wtDih",
  "key34": "32b1eLCX3CeDXow2bgT1LNgHGYRL6nEDKftmhLaU619s5Jt4gFFaagA6Nenq1BQm59ofFCukK4bbwQMnGeiMT5Gc",
  "key35": "4Gtwy4DhJdskWf9DzkephG51f78WGUnHDGYs6idWNWvNRAwA5CnmbfY37MameDVUYFqAWWkJzQfhgcNRKaA9GuzL",
  "key36": "4bqjEjzGiQEXqsdaXUaKRzDCEYixXCyr5mqwWxR6KbDuy1gC2uHpcDTX9UJ6jKY6164TunFVUxZi75X5B9uTiAuq",
  "key37": "2M6jccYTBxrmyZrPxmxVaBnYV2UxQMCh7YNuEbBw8w4w3mWTSWwXB5pF7fxTaP7DDaJnPjcTMusLZ6B3UDU82Yuz",
  "key38": "51zRuo5UF3C5SeDjPzUxo71gAdEChJWBwMMfd5wp9D6AdXVLNnrgkXbxZMukUjgzojc3VyAJS682ZgHckbiiUvD4",
  "key39": "2r6Fv8YTQbFV33XgWWQoWtFef3jjXSgB6chEgjraoqupEfYKDH29VPUivgB7B2Bvg8CAtFGKF6MguHw8HPwtYNhT",
  "key40": "4TVtS111TpWubcFkNZzhkYJcngdnzjsKaCifZjEZbH4q4qrVYSwpN58q9HXVPYzz4fFUVBfpvPTafKyo8Y8NrxwJ",
  "key41": "4mx3CBA6awfciqqJYkqnuXCpeGA12bPT6xRJUMuNMM1SWeTN8obqNR1dUUvn54QgaBYqqDd4LDYpow1r7ct8vGEa",
  "key42": "rZsNVX2RvHsLXdq7KQbumtkBVLUgCVDG512FNTxWZCnouqoPj6AWzXJeJidMSHYdq42gJFdPxzd1JkJ6uwxeAGL",
  "key43": "5GsGtgq9qTUWrGk7yKBdUA7rP6jnkb3YjbXmNSwR8btN5Tmwb4eeLY1RisdVvf2hJYgJdkP1WvsnQFQiizLLjXdc",
  "key44": "3poQ26qRacU1jeAbmg6m8XC4GsSW5kxHx1DCU5kmaiq8AGwW5QmLZYpnp3Ram1TZCiEeDU37bBb7dA839eLi2hmp",
  "key45": "5Xg89Ldzbu6b5w1JbBYwtsPCtckCz3Bei9kTsuPRYF6qFb2XZmBs1Rj8wCmezh9gBG3X95niCb4iDVv2KGxQxZ35",
  "key46": "xDmsm8zGviLfjoUDS68wGpvREKXnz52DGnYVYbz3WrbbM4Hu7LL39stFgL8opkLbPRLZddwovrj9ZdaULsZi7Xf",
  "key47": "5yQ2XN4qD9Tkjd33xskZRiRKUNP4J4d3kNzcSziXudU44XPHURYEvPYLMQYvJLfHWvAWhZPu525USGdqmqfL181E"
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
