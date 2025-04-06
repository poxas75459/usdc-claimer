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
    "2VihmdUN62Xf6z7DQcNJfPirH2rNeN8RXM8Uweekv5oybxC9kMJBmcGmrdZBrD7EgjqRmDRbUCYHdkosttzq7yJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wyhyYhqvWPBFEmhLg7fkzjwiDTzwSsJsmDpyD3UnGAwZEqEb2XdW8GUoeQ6rF1FmcXY1rRjg8Ej3T1mfjTkoqV2",
  "key1": "3kYJmPY6iGpSkBVozyzG2A26giSo7RkQcERjMFMDRd1c2uHuLiNhrsrr8CXpf3fJtVgV7gZAu2DfrnnKzPeZZY1D",
  "key2": "wSjQDwSFHPUjcz9ZtQtNNSRmF9vnHXjXE5RVnrDY9JcdeNxhUxHC5CQcw5w4aWpDUzEudF7yFDKxtUgGJbqjmwV",
  "key3": "yu4Gx2HdrBdaGCo2o3vyYWkKZb6CpG3BFajUZaNc9Lq9KUXC8gmv9ZaNn75Cq7r3e5k8EkaymyqfUpQCzrkteEf",
  "key4": "2A3Pc47ogVFhDLG8DuGWCqt97EDht3ogEo6f8nEKtxBYwtLf3GuWejA2NzDoM2dDLtwEFzWTkEFW9i88bDEppfjA",
  "key5": "4wfF5dRqFTEKqDGCqun29GvzppjV2KVxCgho1LjpEEFEXr9xPgVUSEsYW23sBGb1bvegZDb6NEbURynQVE2R2V7u",
  "key6": "64GgDUZi8LqSW7Ff6TrRYh8jNPdxjRg7CxWdgvC3eJSdeMsMAwr4kUQMs9Dvfi7wApbfqECUWohy8FgXTWHiA4mz",
  "key7": "4oXQ84Vw4xpSd7wgwHZsZYgYj4EB1FZDaG6x3wP9ANanGNsDKo5PMwC1W3o7u9DdthwnwH3nsd19ab269MA1VZCT",
  "key8": "SqU235K3PHVt6TQWzZ4Kp4k9LE3uBj8gh3FmAHfVc2KxxBTdxtYgXNdib51D81HTNXN9LiyyBRZ68rpfR2ab7Lq",
  "key9": "5oCAsAboGKZX8A8pZN1KUqzfynxPwqNvSqKdkvpZWdZpakj2drafq22kFo2SzNqHNq4nhKm9x1iusXNpZn7YNrxS",
  "key10": "4dqgR3E86ve4yRZkzB1NYCj38QNqbfn5CAMFL8op7mAYdAEAksfFuSt3ymdxFpd6dq7sU7dE5TaUQoXWWCu7UxZ7",
  "key11": "3fZdxf46BsSZaiQSJG9xyKE28RwVdC3UYB4p3jzqxyCEbfNgTvjAWZt4Z9efoVrErqmMRVEsEapYFnPGwKzT2F7c",
  "key12": "4Mewfw1seXc2QNYbvYPRBQ6Dne8pdG4XMRYD6yd683F2fovwq8HXHnj4e9JwawxHaVgEGR46FJZwEmxmaDANoEXo",
  "key13": "2CUjcYhPTjA8k6jAk2UFt7EVTSsmWyBPUjNwvgiifuN8yXeErkTgTL3NmFjYru3bvYBdQNLxdczQZJfJNUevnaXy",
  "key14": "5K9q9KvxAnfQ6kzEozJJdKqH6SoLk4Aj7zrqCTS35aKr4gVUWZJTNRYzeWJNdcA9BtAij6S6HdaYGsRTFShDXkei",
  "key15": "3utC1WHKuKfqGcEobaKnzRWMHcNsBefopZYagvvuAb81towMgLkoFvb37kk5or5yeyTkriUNjbwtWA5w46fvC14y",
  "key16": "4wVYyXTnN35qHNd6GTqMEh8usDTFYyhbcaEyBRXjPN5PdihHwx9M4zcMDyodh4pMfi9VWFJjaYJ1NHXHhuDxf7XM",
  "key17": "hKABCcGeMzbBTv7KBvZ8xmiBtL4aR9X6rG4f5skzxtdgyWQpbVneCfsHB6f8iDa2T4LjqV26w761vbYK5hNuDEu",
  "key18": "4WDGkhSf8PCX5eotdpMZHPxk9Z8uZoKXQZjb4zWzrjWbJCrmBx6aDi2cVPcA4GdTVm4URCQ1p3WrmLvBo45X64bJ",
  "key19": "273CctBLHySCXdA3oQ9SCPySVd7BFS9ZhQhuQGR9A9cuhAvhZXfthtK55ED2PNkj7o7MRoUq88F2ksWFpZ9zDCeF",
  "key20": "4GK6qhzrjJvXbM2FrKiVoPB7Lj8gr539w9ZzUrYnzPpC5nfQnfpZDv18VDpqdNmmcfKi7mo98JVSZirZ36CukEfV",
  "key21": "5X3noZnGNBxwJMVbunQgBQoM6d3FEY6DbvEprnEGfimVtCHfdyWPQYBEww7NkoRV6tcoz7ZBMa3d982dPYzskurY",
  "key22": "5r93nSruyxgw1hGJ1QZFXKQCKmtUcjz3dhBpZd7vBkhvrnyaFRonEiRvQgQzyAusCwF9YeJQVxPQyGpa9gRXXw6g",
  "key23": "4eF1KbBP2zqsmbCfBWVri12j2qVhKajrtuieKpweRiTAKJpCbwBFTcEyz3b6XHXEsFtizRpUVLES9HkFZWSi6jon",
  "key24": "4gUicJTsrmwwrALxQ9Nt8jUw5a47srvJT5F3rks6hd8vQywFWZ1bF6bGbSH4woY5E449mKdpSeECfWB6oY4wvKDs",
  "key25": "4CNXpYrsGmoWkeKBTofCL2yYwsnxv2YBHPwMbSYBxzB3qptDM7T5r23HgxNsZzgszRfVxT6HUEBL8iY4Rt64xzgK",
  "key26": "26Zk5DrSL5ACeLtbM4sfUkSK45HH2dBe68SwXU5dFvdYWAuuSd8Q7jAMR8GHzzi219rZEhTWxFZKeFbw6hGfj3Ct",
  "key27": "4ztC9UoBnNgkuhYZQcv9666if3Lfnt1pUz51tSGNqkxtqsdMZXT1vW9ePTQ6ZmFFJ6hTHdN68mFia2ie4UPqbuoX",
  "key28": "wWRXZepzxt2jTDrSmG7ah7B79GX7REB2Eif6dtvh6TG9hn9yBCq4CoSVtSChRBc559MGnATrzCzcY2SZPxbh9Hb",
  "key29": "5dbTABXQB1xewc2NrCJbGXdWUZ1XUQwAgpfqtnBWfKDgwuHJRn27WYmTADMQJeDgiks7jAn1Ex2VmeJ6JZenikTT",
  "key30": "MGJNNqzyj8MKbz7uW4VbmYv9mzzUpGX1mvToezpD5bsw6UKTJVNNSB1rGx9TJCuVGpkFE8JfPCiY4rHwoe9hcj1",
  "key31": "3RVF8HnVhhNj5hQQYcRnx3YviHQMRGYZ3SrGKm4GZX76kVf6HcigHPUhWVtBCjgLmNcMfLsRJDmcf7DF71TBNgE9",
  "key32": "44YfY8PrzTKoMT9QqGmNKezTaZiWjsChDACL5FMxmFKEEzRsZLQ9uaAtGRMYL2PXeYZwjrB1U9mRCbH4JAv1NBA6",
  "key33": "3HykQqX6wwxUMguw7SxEstTooAh2hgQHFa71a3TfLeABsJVJDMdbc4c7qZewb1iWNkcQJJShxVJwB2HwJDvjaFTn",
  "key34": "kmXo3z1obhh2Tsh2CDhtLcADhbyFSSzCugXm8Z9MV11xoj26CFTc4C7g3vTQemQjKDNUCQjZiU15DMNyBb2abw6",
  "key35": "2P5YdgBU2aXSxhkr5qFXTLSn6AmayQnJRkww5tkRCSGJVq4Jw4QBq6eXGcGTEPJGwT9AiSMXfm3HdJZ2HkvF3gG9",
  "key36": "5mm56K51m8r9JRfQhoKbuu1Eq6u2CeJGYWLvy49seezH8mmpp7ZwgVZPQZ1Ts2uyRmTij26DpQf2CtNTgTCn1xhp",
  "key37": "36SGHgmH7NarCnXYXeAuXKyVF2aEBubvEAWNZWyBupb3YvG2n8MtYssEBzJQVtBQ3giHfGpGr7sAB8LnM5kkLgUC",
  "key38": "66rZRNFv5pZCyBnMkReLhUvYvGRvpj2P2AP5VPCCQx7GmJ81coD6Mqa86A72uyit8nZPQqW1axhPax8okAret8M5",
  "key39": "4FvTjJart48JLmhwgqbKSKGzGSJevXovQEB2LDtwgYQxtWbYBXiUqQ9p8XCpzZvJMr922YKyLDi7557ZSRdZebPo",
  "key40": "46edFZfE3L2AqJkboJaCSi6uKt4YRtj7Sh2KGTRYuCxgXULUy8pmh7WR7viHtPE3DQu1PgyWW2mxAAu2Z4RWoZ9j",
  "key41": "5PAvnY6MU74avKhZVATRc4kfbkordG9rrC7FawrTjSERETubvTGSYRjpNXaShfVg3hBGDJPZMV9hbqcbgURCGAUH",
  "key42": "5hXb4gzxkbUWT7LeyNQ9vcJWHzg63wSjUsm8zCVEj5vgT6cFFw66ZQjWR8ybJxuW8eCLwpBTtjmLY8d6wKotsMpw",
  "key43": "527SpGJ7CcfFus1i9avNtKsew5wLPG3PmCFNAsw7XyfoQnW9s6yVgg8jMnFE2mKzbvkGhaDTFsAbgiy29YVXjptE",
  "key44": "2A7rA6g4RPmhFJKihrWSmDKCcrVn94TwdYSKhjbWJ4ikBwdD85RkrtWCRg8CkyYYgKrJLQzfKVQm5PxndBZciCWw",
  "key45": "ULRe9iGQJdHTTMSVHPKAjdFGSdgajzgBCJxbfqmLc4VBrLALCLWFZ6L3PH2CLE5zAefZ233oN4SzyAqQz6Ls17H",
  "key46": "3tpCELRbQ4n2SiDt8joQjPvyxEPYEp6BPsYw4YtTVEtJTNw82G2P7shTSm842R7zg3WF23YLcMCHg5h3ZJne7BbX",
  "key47": "3XwgBMJWsoM8Bc8AHFgDX6ypMnTM8GvNfmADJrwB4qLD7spzC89YrbpeWRwqDF5kBfuDkqizR1VLYpXhaqxdYir5",
  "key48": "4iT8sUJP1oqc1RDWo99aWodx8QB1FqBurbivKA7WUdy7mdZzMQgkkLc6NuAzTmFHrfqtrwo6Dp3bYhUXwHfBVFKz",
  "key49": "5pDWy8hUARvv8EycXZM5cwkPynjjmvb9JxHFPvQiueXwrqbhdjgp2sTGQADeYyHJ47jivMaATDS1cG29DtwePwt9"
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
