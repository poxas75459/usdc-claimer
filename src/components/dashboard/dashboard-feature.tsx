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
    "37rJ8mdKgw7XMato2e9ARFwcH9G1Rz3PWeudNTDed7iDmenefwujrsu3FUaNjUU7fhJQrky4U25atbVtmJfr33Vu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cRbPhAPobGLsBHHA41NcEDASYTNbPicdtueamKb6TrjLTyZCqBeYUnWkwZMNFgaq8DGCxLJyaDHdJuaMCh9RbWc",
  "key1": "aLcjc92nZ2b1E1eT11zoje6NC4j1xHsrMGCszXXqybk2LWGtwEbx6pmEuJFPeTEFD9gHD4zs4aQkAPixD7F3ugV",
  "key2": "61rUntaxsTeVgBxVvSUxRXdSkpxwLGDSpC4RF8Fsb7udARYdmhARbxkKVjSYVtf3N9auHjuc9ySFVTT4Tg5cnen3",
  "key3": "5weTn5QvMzcgjLkBZAwEvQLS1UTRignbxTpFJKnUPUZPnsp8ERQvDVBXg2BPFYn6jv9CrBnfyNvcm52h5MeVtgw8",
  "key4": "4ddysVh2UVQkwV3LCXAALZNfBCVsgUrb6xzBnJ9NRwwbWbmhwqEADsHwT8VaL4wgmdwwGGhdoWAstoMh7RLF5yGz",
  "key5": "3Sa7p2fAxH6XBBRjfA3BY9AgAkBraiDZXLVs3pwfKMDNCC7oxjBoQPwSTnMxVehGiAK17ak5PGduj6gQkuhyE6Wj",
  "key6": "61Xaq7UeCPswXADDFEuCjCwo9qPonRiXuLxz33A5HgKLBnk85Gr5oX1B3wHXeCXqQSNPdho6s5A6rFG4fSPnbn8q",
  "key7": "57NUvVJhe6HTooVL4nM9JXEAE3hKi57pRPhoUpe85irfXFiAUbYt4MBCm4ZrVFPeCBpMnmtUibFQo66xUpvn6ipF",
  "key8": "3axZUjfnUvTZKxD96j6mBPHrh3Z6jP62Y9yNnJ6R8Gw6TjFyqdqgwHzXExvQ9ggKK2aYzwiRFP7VZznT61TahsMF",
  "key9": "41JoeoPpQGv9kuoXSqsk7Dozj7T7uhtLygv9heRtpDhXeWkpmmSSzZKAiHUVKN3w8kSRrQmP1BZnKAh8J9dEotHY",
  "key10": "VuitfVwfy2oYBs7zk1CbU4wQAe9W1rQ4zYaaoMWCkM98cUuLa9qFyLCdDPgozEkb9b3YHZ5PiEJs59i41wiuyrR",
  "key11": "2cnLur4ZhxaKo6QxdaunA2k3uPh7NM2GS7y1qTQe8FNLNe1njnKEaQjNe2jtFYrpsDM59M4y8DgWx6jRzDHhLH39",
  "key12": "jPMLKdmVV3FvtoA4so5stjbRRYBh4Z5wx7BPp7wEo3BMF1XLJp3KqaxJRpXUxQDa7cUd4DxYdu9BLrDG7fHJj74",
  "key13": "89BPLTSLNwnVWkmKdXQnW7Sv4WwK88SSo6ZC91Xh3insWzSf6UqrvbmWb5Ki7CcPoNnSAG3NSaiBLyJkxLxSxZv",
  "key14": "5hWuwgm7doJm2sv3pegY3hzxfBi3Yns9TLv53RJ6ufUJVEUpAxn2D7xC7ieW8dYkRH1R7NvHsGpzgJo79V5oaExp",
  "key15": "2WXGrCUjHnrRs9GeHcdo92CGjUKXaZ5BMVRQiZv3g3AEszCqZaVZYkJkG1A8tMNzVAma1FLEAADgy6R8EtbWCGAE",
  "key16": "2mq8L5fBZ2W4h19JCJpdcHQb89zxqQaKsiwZWDEGvQswcsNLh5ZfgbpoZxPqngfTL3KggbFbi52MEwsPM6Xs6tij",
  "key17": "3QaQLGXuVqtS7Ekmgwygy8x7hFdcFddFXc1Bw8K7WdHVBzxRjyhcz3EezkEp9FJ1bUAhxXY3nRe8cyzemVVwJk3W",
  "key18": "3QYFYCzfpvVgTG5Q59ki7tdxhoM53do3gMEGszxKJoCJpn5vEQHNgJgsisonrSgioNyAqjb8dCQauNuQCo4PVTj3",
  "key19": "4eYStc5xzTUX1AJYFoWAafVWtNxsi4Gt397HNuPiE4GYYEytQBJcbPFUTJM4VhNquQ1pUBZeLmub5wf1G9MpSpQB",
  "key20": "2eseesuKGYmF9znZcSDvsydkcQDRY2sNHAUnd4wHJ8AXc6euygYC3PcKwVVjybHjFYkAvX9NB7YqGxAQeWKBHYEu",
  "key21": "25ydkn6BpDT35X6r1VYkTQ1cJ7C2UCfeHoc4ro3ZK5vdEUTGiDh4pM8g3SAmHcuzUuDSXWhgwTC9vdPf3BHLo7Dz",
  "key22": "3F5mq9ctCPc1jFR1Lfgyyt3B4tpfUNXsyagb5RTmXSnYaWpK7NwmgdYQZWfcwuhfmnTGtA56rbMFFXPjK9LqXvjg",
  "key23": "4GA3NeHgndZmB9ekjaa3s7QnZE5ydpiJsbLooWq6Nnv3x88PdHt6DT7K16XXedgwFcHZj1yLa8FpKzezNgyZKsRb",
  "key24": "seuV3UaUFNp3tETBnvgonhDHMP62PEkvLrkxKEXK2XdaYFf1KeukcPu46vvFoeCvwwg6mKQEM6S9TRRPFcMWmyg",
  "key25": "4Ue9JjkRJ5enCeKZQPQQMZvUWN6ynseazNMCMU7emvsgMZSryJwNBSweF9qvS8c86DbJcnApztKxxdV4MgqeufFz",
  "key26": "2GB7yNjoJa5rsjN2LLN16tX6ntWbTt2WUc1S4YYbTMvj93s4nqYtqUP7eoTQ5xY2Tzogy45aadojkiiEGTRcUXZ2",
  "key27": "53n63Am2VAaRCQ2pMzio9RtdB9bnEGHwu8m2FM4xFw7wsiV1Y83ZEx5XdLnofZJ99krrSPEdi8j4cT2njkkpAh66",
  "key28": "PgP9LsU9aDbhBmrDkHmAE9pBpSqK1MamWCZuRFJ4qpQRJLBvxym5Xf2CgN4HGokrPBDYaBY4WkZYwprccBLhVno",
  "key29": "5gY5KF4aP6jZkT4L4kw9t41K8jsv8t5rdjQ1sW1AVtPZLD4k3T3oJe4BDDyQafib87Y2bHyD6ZpnZynUKzEN47Lx",
  "key30": "5EZvX6eiWGBkVvNosxrjy4o9EyHnQhFM9s2G7fJHqLfN2CEjXXk776kDYoXHY7mDcxtc6exxXAppALAw3Gs2TCzw",
  "key31": "4tNJgykg4duFb2uWp3LsbvhGfYqdYcNzCQBmtav7Xx5aUHvgyJSnockocuuuNdbaqUB5K9Y7WrB9p4yMbbVaf1vJ",
  "key32": "5Qtt4ymtVC5k92DeqUF2U7Bz4RnUVEaZLWrhE2eiSPEFaSMricmyomdtjaBnFv5ynnDp4MaNbKnS3Cx446xWT7xz",
  "key33": "4D632BdEHCkUyMZCwsvNCAFxjg5J6aKspEi3NLaDVNAvtXuLmuMHK8757FxZ2DrarRChRSjGPFDKme47bi9eSTLX",
  "key34": "5SpiAC66Vvb1nzBfRxSqCkzCs1UR1C2QP3B52cNz2K9MqjM9nt9pJQYMeBJRiV7QWQ1NCCzfUVuxFz4FWgdPxhL4",
  "key35": "28ZeqESH17sRvgMG1LTUqDcHcYNa3Zc2uEeNYD2dtuYdXqNfzdPFs4nVUXiJ191XGj8FSWff8KbqeRHgpukQiaiJ",
  "key36": "4pe7Bi6ytH9N32WAFcDJbAWQU6iChHMNRH7V2tK2oioNwGEarSF31PJ76584ANhBpk4iPr1dnaTWU98Jy6xTKgi4",
  "key37": "3XbhdzbzNZwrhLsTitpYEy2D4wotzTSmqiEg6trRv6KqogF4H27zrZAVemGWv25MLHRZV6QfiLvac5wo9y6EvnaU",
  "key38": "65SCXpFTVjR8UMgKhPUpUYfktTMiGC8TcArfsvfraXx51HuJm5Zo9whhwhRLN4oX8AW2By1RQQ6An4M2ewCLZWjV",
  "key39": "64vLAzbMTXiSscZmCyNMHhTx7d6gxbARfoQyqa73P6Fdrq2ARdHHsNjZkyoagRLFB6LhXYrJE5cFThWBzivTwbav",
  "key40": "2HsHieYNGXVRqfKqzfLcyMn6kiPvtCbiEYXRMhmBiEuvLxcRYutKeKiNv7SRjjJPfjzRGHSiURYkFnxNTPHYU873",
  "key41": "3stcWyohjuRdL8vGtbaUwkPiduU6uHkRKTEjdJcEKW9NRAfjcBJNpiy3vrDEq2Jq3ZKp53QpuNipsQpJ7QVEKEKq",
  "key42": "gbcXc8c4g9VHej8oC6H12Z1zCMM963h2wNLUVYBVt8Khd73Hq43JqubBsyL4XptNo9WvmN7Uqx2YRWctUbU4Q6e",
  "key43": "126Q3ZsKZSJWktN3Z57gutCYfWbrmvSHXznSsqbe2ZEQm442MmMn8HUGfHJ2aC7s4JTWRDcCgvUYhhgFnSnSFqeG",
  "key44": "51bx65ScNgJDkCQiWxWWhHqbQJrtn7kC34eGwscPAkY5TzVfN2nP7JC55LnvCwg44fPNjsdR1SaAS6jyeorqNKWe",
  "key45": "5kkvmZzJuY8J1mTSE9ju4zYSSzsPGiUCGviSwJj457VhM2UJ3u1dbnZEhVD7N29vS8FatG8RUyMUz3Zz2w4hvwgD"
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
