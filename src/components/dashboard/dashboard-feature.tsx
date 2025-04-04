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
    "2yN4F87VZA6a2G5W2ABwP3FQ9dEfzCRE3GFSvDcdgiZuvqponp13Niv6XBQsaW55A1vWWGQjYMcmgDnJJz8XX4zB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v88TDhHJWe5J4PS387DvSKqSABWCSJF6cQ8vEDRaGDw3YSp2D9gKCkPaeUgfASoHcZXrxTgg2tmjbRTYnLZNXmr",
  "key1": "4MNsNuUpk3YuEddDn1d8r5ZtYhFzmqh2tw8xeVhwiSBGrckkxEZsjz2pjCZok2tEj8DxvUfdm3VX8g6jXCWQUKtj",
  "key2": "dwJzgDFa2mE9ikummRf5nZazLiKJXfEafUDzNznWgEWtb5evh92zZzM9Mg69gKNMxnFUiqsecW3mJ3M5TgQU13m",
  "key3": "4YPwZijxz2YJ3K5nGGc5wG9oLPnkLApiLgmCAdHYmoxPkDS4jQeaMMZBywMRiEWa3WN9BUpPMkdjWindF4Rf2sFU",
  "key4": "3bGhtaamPbvcdNUGJrVVzmisGx82LyXCfLWJwPM9Vgj875kMrCqi8YVmmy5MB3yNoz4M6rmuPkpdSW2iNuiA3rby",
  "key5": "2qbLfW9LseMGsXmpGcpa4dwuv7vyKaseS9eH8mEjZ1Lfo2x16ekQW4jRPgJgRR6GF7mxnPuwy2d5X9ch4hR8zghi",
  "key6": "4DebL2u4vDxPvn138UKyRo3LPagCyrkanZDvtbJV8nso2joVEEhopLW8cqZRJN6f7MZs2z7BXBtG2eAv9Q1R16L9",
  "key7": "2SVBqw18n3gBf9UbLtJRYjUqJyuUHdiKyJWmVrE54LJ5s5JFr9FCoHfjXS7k769EXZgNgqvTxM6mDBWUJ3LQV1Er",
  "key8": "4fi9aJTiZezeaUSxZKXAbVt9iyNEY9dTz3CLjg3fqBvgTfafBC42cX2Hb2cBJg6sXsPw9NMdNXQAVoKHjMCvign1",
  "key9": "4EhQfQV5umwWE2jHk7JyFK41dhFWwFB46EgFnkdJwT19m1mUAqTzKvUwh1YwujNfmY7uQGftEX2BekrFuf3diSVA",
  "key10": "4Bc3sWQrWuBExBsiYc74HYRVQtU3UED4QoMiBG2AVapWjnDAQMyw7qY7YvtbqxQxdDJEZMwaExpyRsHLcy4M4dAQ",
  "key11": "2H9hNYGTNd3kDY1fXahqfcDD7jRJmE16vnvkUsCk3XUPQCYmBq7CkvXx19GFL8EnYFoWYUJ1dCLYnS4K16zYtpgt",
  "key12": "2WAaaEAnYz6muFLGDYfVWpE8F4xEKAHyraAkZrbNYacPU16UKEQyh9nxwVxHztB3oFzGKZXLEDNjgo6H4xgrpWMv",
  "key13": "VAR8owGZV832HSFrBHHfr5N3YZwNaCjq9rmziGBZqPv64nNYPNJAvToaZiy9GrVfkpdmQNQAH5TgFPawEsUeJED",
  "key14": "45HK24ZWX7VRaZQ1uYKPSFzTjoP4xDyxa1UFgFtBsw353JgQ86A3uKUPGoMyDQEE2JzNQmNByLhoXcn1D46oxPqh",
  "key15": "4McJGPBqsoNghNXQbu23jza1yWKnNnr5LUnE8rapfoS6yYJ1129a4VrL8JEU9z5e31yWARA2Jnkj257am3F6EavU",
  "key16": "29GwgbRxc8a7AZgrMEwwMs7hm5Y9uqK137Gf52AuzmLrpsGZvow1kzgrQU4EzrBq4M7oZJ6NtkcWrv7hCfunN95i",
  "key17": "4fenNzXHNzwmTjGB5uzZrm8dtCZUxbbECHX9ig8oUh42MhVjAfsMSnpPYD9rcdpGk5z42U35NPoTKd2HUAkHDdGJ",
  "key18": "59Dfc9psyhgCmMgu52Z67wegiBjv4tn6tMjr1TeBNx1LJjzzHAQxXwuAHRRHFecK2BMtMV36vwiYPfjbpYnvZLsE",
  "key19": "39JNfnXHvBaoqiXRTSLTXmSjuzuWgWLNULtmFgr7ombtm7pMqtegPAF2cWY7t7VaU4Gvo7m1kSy25nxQXZbwVhem",
  "key20": "2ozHVmkNH6iBA6j9TomPgJpeCxMMs9n5AXLv4qFP3FckVhGSJNpxcQmqzyEHHWZ3972w72JW2UULXTUvf8yjzY1E",
  "key21": "5XWHoyM9EoXrMLY88YxAzpuHs4U2bwPKkjGggAAnftCdPuCURt31KhR6WzYEQ9VGzzF3GzsqmfRRnAbACsBEfPhY",
  "key22": "3kGUHR2W3r882oPJ6bjRAGQqJXdeb23w4Hc2DhEf8p1MtcK6NwSyPpNzRWmto8ZG7FZbTAKTNZfCLgyhwG6tpWFP",
  "key23": "9MVjRjASdgJmErLRX4Xm8Tsv6xK5HBgZwwSpohDm7APT4vHgJWNzavZwepcPSVMReK1iMW1zkfQBM1C78GxAQeS",
  "key24": "46wJV7nktcg9EQEYu3S87puMwiywQLVB3wDNYW8sX5UFv6Tcabzq8LckGDe9c9E9PkXYBp5hRhGRHiJK5dBCjjNA",
  "key25": "5SsQQzZbftbgHcdj7vvu8DgZMfvXVn4vvSKh9hH3E3X6ThGC2zVBkJTrLUrwJyaRApbxLsDtBSn29DPGk1wqdAw2",
  "key26": "49fKzwBThmsf17gzxadE6XRxiftZ5nj1Re3K25PERXqjRYZn4nhc8ohCrAmQzx1sbjDfB3ZqnHMkmV3ojy46huVx",
  "key27": "3nSHGoZUymibaKbVPBGDUFwAS227RnQ2RDgECgNw4XDENKjaHLgkprGUXtT6QXwjqA61bizTTdaxbU7cSz4zuxXD",
  "key28": "29vjpVp8VardTyhGgGUVjqTownrb2cLw9P92U7vZkhbD5AucKDNYkWM36ekDTeyMaZ8s8YN2nVyLCahU7o7v1mS6",
  "key29": "595GCaWkn3HZdvNU8U4sdjZjwYss1j7o8U57WVKPxnVc4wWsMmbNFd5UuAAYaQ1jLS7sw3RSPgjYTzcUnk1WTdQs"
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
