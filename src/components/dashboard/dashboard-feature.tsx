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
    "3WEfWw2StiuwKXwjR4bn3EUvHPAyAVq5LfGj2znp4HDCV8qx8kynAAtupMKVN5wsUhicssQ1MLCYuwqoLJQhPkZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x1oj7E7wU5YEQG5Mpqr1qou1cpFEME4q6FQSR1Ag3xuGNneMvbYWVHuhENATAkJTWMywzVsVs5o1qimXRoaQRLk",
  "key1": "56dz5HM45xFTyvsTZ4ehnJRjpxKeuTBizKaaNK2ck3teHoj6wMaQpTKpqhRwzmFDqgVPWFDY48W3u3J9EXxodGaC",
  "key2": "4pceUFBkgC8QWnvUsQhy2wPBJevj7ao4Uko6TF1kutENqW6yCWXM98M7ZuXJhdj3x4yBvFPNjpLK8BzvkAVm3g5d",
  "key3": "4LJ1nZSwwbZ8Jq34NbVBqPBGf8v6LZeonkDTXy44Du9sU2dXNQFGXCXKDHkbgykzRFBJpdQq53EnuYVMgRsr5oWu",
  "key4": "4QTumKCTwmcySEhf3E6d1tfmfJTbcJw4Chra1XJohNYar78acTibEgo7wQFfhJzjxPra2H9fvozkaYbee1pkaSXi",
  "key5": "3uJaGSEB3XW8iWANXWMRGLxj8MGamcD7cPNFGM8YUxpzQkqiQpNjXtR41jkg3GJkfAvAi1zshMwzs9WuxwZyZgFp",
  "key6": "5uJcMb5TBAP6mHCz7ZVccBponDSaaAhNN84Zvqr4S3Vc9Vec88T7S69VVBQXLuWvRVoogbevJ5HqgGHJFwQXw2CM",
  "key7": "2KkNXegCLdGf9LkY1L4EWhPmw2HFAo3PYfWC2FNYi8XMqAhzU1TBEszimEA9eCRU8frKPEohGdWKZmJFuR8zM9BU",
  "key8": "5XFfQm6pYAmndemnceCjujwVGd36Hs2VKcGbDSPzkWQv8F9beuxEr4TvEEcWk3dEAMXnpFKtiHLLm2eosze2VBgD",
  "key9": "3qCbuMDQptF7KFoJetUzvbudzTViNWPocFRKvxX5r12bb6FQNn12CmiT3HX5NuGKKiC4Z6nV4VJLXhU6GjweMYdj",
  "key10": "2Rcb6hHSSbATwLdqdoQsM7wk7LKCw15PFhrpoQpKN9v6VHNPxouvZ3QFEJWhcuT5Y5kZruup29eRdQ1WshkGzEo",
  "key11": "4gGzyA2Y1VzPwzgAJ2u6ENpPFtHNEQf2bxUjsDDG3bMdgMo4LtE5bsQ9d31ugdtBoiQ2FpqZNoxhah7SiTmmpabY",
  "key12": "QGnaRy5LNJbKnutiwGnMEwrA3CCza1K3EosBvQSS82CrkaX88cYijeWMuVH5kk5Dsh5zaG3FhD9prwyDhZ5EhAu",
  "key13": "ZGyrqYDJG2S5f8V3E4rkBMi1SD9znphz6D6Agd7wB8uaiUvhSPniCagsmcFCPkseQbhzCZmgHr7wDE2Xhz4fXJW",
  "key14": "WjaQE389UENVWWiWDzo1feWyPHq3nsRwRr5jM1ajMmdLzSxEZrTbRRSaReeR3j97eb7yJKC7gkxis2AnFr4PTHh",
  "key15": "4RmRe9ZJWJhm5QaSwfqFrDXntUHwBnV6EADZiyMwYnCnC18j9mhPQ6638DE6SKeMr3impuRA8ktDAh44VmRnfiHs",
  "key16": "2j1hxXXpqYZzNBoyYAoMdYhN8MFYMiCpakaJgb4hQkqi1wtuep7HHx5zUFTqUqSPLa7nLU9UtPuKAa7AXFXw5cvf",
  "key17": "42LP4x1e97uVoDYhXopYeP35w8mBRDbgRiZY7iykWtTGF52YhGheqpp14mNA1DYbcmS7sLhEaLRBT8vkc2Mtisou",
  "key18": "4qeKa13vomrU7LtEcypWj1JvJuxTWVJzqPXcnAezGC54r5XudHP9dUxL1UXV4w1uLovmSLapymasa7B82NLDbKkh",
  "key19": "2wfF7tywfZwhtMjG5p2h1jzmRs56CSpFsGJN8dAKhBoRkXQV2rMzT2Nby4MxM6jnWgnatDJukVvhArTFLT9keS4A",
  "key20": "646MZ7XxqirdibsSYPmSqJtTjzAtf2JNVsau8sJsWaXMTndYJW2UZrjTFfysWR6s3djFnujAF5QvPvL9Ve6EkQUD",
  "key21": "4TskPwd5c9Yad1rahuRKNDYXwY95jaojfpHfCvJUaazUp6umyf6rU9kES1WYyZndg3LcDTUr56La5hZmZHL2fM9b",
  "key22": "4RghXLEVd65j1Ch7dp3BAWwdnnTozthL7dbGUDsGJ8pdow4rHq5VTaSvkFXghF4XakXC445aq1GyDXZBR9JuEsUD",
  "key23": "3BguufSKkK8xEtbpRJjiNr6nnJBJduqq8AkLmNAacQGvNFpFpV1R7DAqR7SpThTKbYq8XiptaRVZMgiDQ9o2GFcW",
  "key24": "3yEddURDznN3VrEcSHNXSoNuHxL15hBf7ViXyThedazxWVDKGXCJpxd7dkihSMQvUJ1MaVzRdWin6owKQFJxckds",
  "key25": "4Ru9RkFLzVxBK6HVRpcDh6pjj5Y6reChczZDSRkB78XDawGg49nUSPW6EmPDJ3gsQxEgfjdgWro7H6Ftxi84M2hi",
  "key26": "5pMxnTmGrjuvK1nCPWNitZCnYAwD8pP7saXTDRyerdNKDjEaUCHCrXq6DyBcpDsurpYmyvRu9JjKcXw1gokDNnHh",
  "key27": "4F2xxXbSYt41jwvNsYgVDQYHY9Ue2Two9NCKzppPG4kwPrm6AriGBbQzYp5uNCC6z3rXLnQvuhxPspCjh3PU22KR",
  "key28": "4D9wgwjMjNRn7KtSEKGBifJVp77zw96HMj5rk3XxMWLDF2dufVzCbw9RNYMA9MHJ68W5hPtRgns4EJTxes6423oz",
  "key29": "5sSzd4XbH76FW8P57hy5w9KziHVmTtrZ8xQB8B6sJ3RfwWYkVEzNkuNHH6oGtqBJ1WukW6xyZqYYvWztFCmrTrBX",
  "key30": "3iqkjcAqY8Mdom122HVsKxPzrcQaXvm4uNV9GzK93ioSfQh8WzcANQH3ETSJc2jzwnJMZeJ4VzMHLzSXRRNSNoGm",
  "key31": "3A8uuKLpgDMwVy8x7wf2YQuE2uBMVCtAkUrL4PVY6rjPaD5yEDod9nZfNsbZi68Jn2rRp52njNKksWKUjZ7Ms7eG",
  "key32": "5hxquRMQXwn8gHGiwvb27BZTVfwxFwaCKyP1nShjeXqwM5wkzWcstRit48MQFkhfeHkE7BaujeqDemP3uaFhdpWU",
  "key33": "3U34jDG5Mgvco8TAycgWzVdYxtW1ZL4jjRqpKc94xXfkGajZDnfNC4JgDvALxoidv7PKVSutva5DFtYsjsnNG9Yn",
  "key34": "54Cyg6bBLFz5iMFfqp9SbePJbmKQPms4KPbt7Mw67wsPi3UZRyXU9WykrPAfh1HxWY7uSLxoSp1Dwaf6wPaDktC1",
  "key35": "drTGvhZmYqHkVxPNQ9CDtae98g36zU1YtgVWSkkyjraGVoKSAbtjAxdkshUDjWXpBrBwGP5M6G4CxAbfJEDmETP",
  "key36": "YYbrRYGUs8ZcNDjNvrWWqEKKv5aTEJ3kToHPP745o7yZK1i2QyUVCzkTw976Qk4efWBV3kwz4BeWLNtGjQxxHXb",
  "key37": "SCHYsiHJvM5rK8c7uRqdoy8aB9uyUDybBfmFcvVvRond2HUrDnjEkbLujeHmMk5rjaMo7JrcxgZC6X34Qw45tWJ",
  "key38": "2xtpNGwdfCM81rjWW4YJGA2yftVzs5nn1r5ibMxS3MrQxVun4KCWehPcECfzqmW9DA8qLTTHMAQoyxyW7GTwhMze",
  "key39": "zyc1ZwYapHC1ohCB23Hb95wtkGXRWEH6A9Exzo9VrsEDYZCrYv3aWNabdBZYugwrxm5zkE6qser8Ko8C9dqiFFT",
  "key40": "5m5bVBL7MptCBAiqfmLNUT3SdyTE1v97X8UQPzWfVz1qNiUxJT3xVo5MzCf11gJdufJvAaMKhvMC4rWAYsfHgJss"
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
