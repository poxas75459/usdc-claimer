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
    "3qbPuVZcxpReRXQXYQ5sxru3L4M7jv1L5yhxj7EUd8mUKoxDsaX6HQykQ1Rk6Q4HpgedoQk1DLGCEJbwThXF2b1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pk7TnrguPPa8SVg7rfGcPnqcPSSpdGyjoTD6yfG3xNKi4EvwLJbTu5MXtbjxxr9kT5uV4NADUNnojesJ3ebYN1V",
  "key1": "2dnjhCwZRa26hC8hMQFdVmgPRaQDVgn4JpDbuq7XqTpTLEgrdCveESpbMcYdZ6bDWciQCZ9AvTciVaySGVbdtK1X",
  "key2": "38Hgw2NM7obqadfsPQyFXZUfqgfzaVhyYq2m23FKj3mq4bvUCjeud4sFro7M38K3hvbpNZFj6gDRoqQdPxQ3m4qd",
  "key3": "2FSyUwD63JqEmY8FSjS3ciQozbLY95onwXVGGN2h5BijvPjG9Zkf9wcfkL97ntzeXFjXK4TtZYeZvyGWKvJAYVa1",
  "key4": "5na8cNKCgxxXncpGdfTajh7LrZGCDuJaF7ge54ev29NAi8BcoREfQ5HjNRemJcuG49re9CRQLUiFJj96a32rmavx",
  "key5": "2rCmhr6Cv1dJLNS2oSDgxdyrNVzBHFj1T9HewvbN3AXsJt3XTMsUBUDJaAwfKp4CwLnFdC9FqBC4jjnfFHT4d3Sb",
  "key6": "2J6pQch8H4A8koMEHYWv1MHz9bX6KnZjoEQYRizHQQExdrLVgdUWK9DTZxPpKJKTnXyDzFEQbCok9NY6twgox5Jf",
  "key7": "3MmPcC7jzcEJGrSnyZT3hdA4a5Hj1yJCCPWvs3uSmaae4AVSyU251Q1vEcrjvzoQoFwWWpdvu4oAFusKYB1k9TcQ",
  "key8": "2RaDXHfERUCYfW7PJj9RYvuTd8V1dcnawnfzURtkDBQnjFiuhA1D1zEboED5xxTKh8YPdYEPrYfaQXBPpTvMYAiU",
  "key9": "5YeBAmEPKvNsNbqMLF8NmsJBuFM4GYFgJbhCeSWgwrJPGU6Y4NVzNK7VPRrhPVt1aWZdUEEf9L2w7bqiPTLJgSZP",
  "key10": "2822SVKpM2e7JTxDmYZDUwnRrnBuMH9kXENPuGn3u4SA7BwzUmnhziuk2F93EPT2xmBkkkFC6VCGmcqMs4siA3u6",
  "key11": "3iUCkZKdBqfqgDtWHX4rcJrRPzcApxtFsQFciWrdaPkVSsbQafzQRgygvUt7N9L6BWHumXdJ4Am3uoxUkTJXubeZ",
  "key12": "5nkvwmENrc13bbcycNveiio7ufvw1NSLcFq1eVncyk5UdaJy355W8HofbjwVQf47SRakjtyARZM15F6S72JrczzD",
  "key13": "Vpzvud9PR3HbhfJwzoxSV89YKEC2LBcYBdXwKfZYS7gzTTe5y6JWTKQFzKXch31eauNnQ43RQhAfVhhfuytRccQ",
  "key14": "2X5cL4fRYmXViaHAtKkVi6ZWceATPQsJ1kzZhHwWaDPGFMNeo5dGfP5FLSVxAKuRDm7JgPpxLMwy9RAp1UXysG4v",
  "key15": "2WsocKhiXjCy6mzNtsH4VEvwptc5zfTNEKCbMuCX6NSRr3yLdmFCnXPcGox7KivLAvHD9JxRStEKuG8NGrmMrJKf",
  "key16": "3GTds7ejCjRpZwr7gUoYEUCAKMcJFgCqwDXmvuJ1yDaFoT4vshbDrfXB73suUFFnUKf7bgVtkegMcfwHTyWzH6sF",
  "key17": "2NEUcntWEHTXvbLhRURs2xBFAzoekGN8uEv8BzjBaH2rymCY4p2P1RQ2u6ebZjkEHoyHdFuGsLurBkoSYrsrThJL",
  "key18": "2B1uiTtYfk1MZGwNy6TPBANbBgHk5f7WCjEXazG25fmUJ3C5LFSkoZREkCLksWgUdu7vQnRNePTgbz68UXWAC6Ea",
  "key19": "5w2PHuaXH5L8DpMCTMnT3rZna4NGtyHpUh3TV95ALfuBkNdBiRGC5d6EUiahqKDsgj3WLD5tDhbLWTZUACQozHRG",
  "key20": "4ZkLCUhF95vqXCbwpPzFraW66pKv7NQ393J5E3GjMUMRtL1Qx61qjeAuHxjKZKZpXzxWruiiNh2H5DnrmpiYwSjB",
  "key21": "4aqynwXC3wodmGHrdXC5GUPE9hJcEe3jUhNYrSskbqEuLnYwm9h6TMmxAHr2M7qpw2dUzD7XZq8aVedEMwLG635s",
  "key22": "SC8cNxd7DMNN9K2TsqJCzcNKbCTVZHH8Y1Fsd3fGNMaZkcVhFwnyoD1Re19WUVcvffgk5ZbardSUA2E4u7sue6o",
  "key23": "5q8YZTXiExAsuDfmjJ9619GJBy7gQVwp6YveCEkj2qB3vfhik6wXLcTGTL4KyyzWRJoXUPFmJiU4n443HvHPewRz",
  "key24": "4Gjw3J9ojdUmdcj687tUSAfmRtr1K1xmw4uERNxu4N39F1QZ8gwstsoYQVGCXW6zq8Nc14tuWfSoVH9cKKbdvwQX",
  "key25": "48QLNELnN1n4Lux5LutozQwPbQokUbDrHKHH4a5hG6F4q65LMdZ3diEzxgN2uQHCgBzQgENqXoPQwWbLZVCTCHvN",
  "key26": "2Ngzvkv1wYbRFGo6Su4U9BiwXZ5Q3SWRWgMF3eQqh6qjoVAmNJdvnWoCdU34TBxD6DFBw3cruwJkMybhy2JZD1VF",
  "key27": "3J96BiyassMdeuEAHu2jdF1hGHs4Jk12M1JVd7Lc98ktzdY1ArGTMmi6RXP84dLZqSL8kCrfuAupA3QAfZ7fgazx",
  "key28": "3cCn2mQQ1SjhJ7kmYZ3wHzkEivW6MF9pfBTVhFrHxPacdNiawTDaNn19zjKRkhik74LYptb14sDbFH623bwso7vQ",
  "key29": "3nCH223868UyeFQhgko5oRaaHZo4hv1d3EqAoYP1SptNVGx2uTEJNcw2KQ3RBcA12Kui9WWbPNhM2woTTJwAjmgc",
  "key30": "qG5TKZrjr2wPSsBVcZQRNzZ5rkgBoxDp6DN8HxXP7zLwEtnkyn5dpy4HCZjZ4jWo4CqbwkBvdpq8zV7iejGuViQ",
  "key31": "4UDYD59rxawAYLLFs6za9DJY7qKgnZZC38y4ivFVSr9oHuwHVkmXbQCnybDp8eDLcHssryi8hY9UoBJVvgxtzLPj"
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
