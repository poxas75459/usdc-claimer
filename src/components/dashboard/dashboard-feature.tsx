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
    "4AZpDkuJyiS7SbMVdX2PwT3FKvemXkgq1oDEwqnjSmUAS2Yo9oTJnHTYPETUbTyhC3yw2CVT76rsuBYprHTVRhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gqf5KSgKtXTGAS4iEonkgLRsHQNmaBRHvJK18dXx25utjmvXb1iBnVmMPBZ9mJVpYFfxB5RvFLyW3w98r9dnKE",
  "key1": "cofKDpbY33xwRkThGEhzMv6P1GiEJonB86AnhJ6gUcf2LnxZeka2c4s1CaCYv63a6TAEBoUcd8xScNG2UjjN6Kt",
  "key2": "5H5hFFtqhFLtSPosvadbdZPuTFrjDtG31X3D8tXMHYNfS8qFudy1EC4nzRVeW6GXkWnE21vUsQfdEzSqiEH8u9yV",
  "key3": "4YHEUsyRU144tQqokouDucYJvgj6rvVX9ZVnCTCGmjqXv3XkZmvxrQfHpZk4xWr9eoToLcUR8ZemNj2Bhuzakorv",
  "key4": "5E2129ScuThkGczqmakKZG5nmeFhgardik7YV6TcwJoBCny2iwWFpmY4UcWai6vpsP7gMpyqs5PRyzyQy6ZJxKyC",
  "key5": "2CXV2v125DKRMRELCZ2WmSfKdTFkMbvMqW8m6nMBA5x5kByVCHpAz6iEM9i4fuLhSRZLJYWn1VHu1xiDfRp7p1UF",
  "key6": "3qW9oTo9mU9wynozLAimgUWsATyLsf3z8onxkWTY6BdLBsxfXUir3YvdDxDRKfjR62HcjexZJKhVKDXntFswjv6F",
  "key7": "2TeugYBucwDK7qxLn7oT7wyDQRAvtuqCU9JGWCMm6y2tyEt7zr8M1WzNmJqbXZ9f29zZEVQomsaqhfNPkPjJpixx",
  "key8": "4jiUYWJqWdLWQcKRynXyN19EmhgcZwbYKSMkAiNiXHgmhj6YCpbK8gp8eHQr2pZonyh8GhTSq5hhS2AAbWs6LdZz",
  "key9": "5RQXLmPtU4E4N2UqAnZaAXPAGti5MorC4eQJBeBWUMRpfSRq3xjVmoVa1bDH3csViZ3hxWzfLgWWVrEWd37SjJph",
  "key10": "48aTFV3RzR4QGaLHyi7yTgsiNmwW5uQ8zWrLcZCN9PSU1xSoP9w4bELGkEvech5eq7XtYagJwmwLLZm45E48wYox",
  "key11": "aDJPydGGn8QthaDeux6MjdG9TCZh516x7Un2EAA3ozihf3NPDk2AvZd7vpmTBrorzsU5FqAg5SMnAuYAToZNAnM",
  "key12": "3UPeLJmt4G8vCjsySXhAC8MHVyHhwvr1gFWR7Vu43qHxTpPbKcVzmd3cVS4PfDCL2huRsdsBTU3747biVNh2QEYf",
  "key13": "5knWsmzkKNKxbC4XF3eAhakDkjfkfErXaJGX1PjyM57mBNG2p5d6CwfCESbn6vt9PvjZ4gZ2VVsCizq8PuAFZe1Q",
  "key14": "3jmthjCc5a9GGyTT3fshPUjaj4RaJmYebbzaSPdk6F2UPxKxCr1Ba7RsoMgfJA5Vahh2qrL6DFnLiEsFsV24SNyB",
  "key15": "4Vtu6eib8CEqyuWv2adHsTm95VQsd2vLsT4vcE3NY56E42yRVtX7fbKUALSjDwaok8hn42a35DgY3D2a3so1mXeG",
  "key16": "5SNufXekS2mU7FZrLxPM9ArKTMqPfQRK4h5W6kHxyoSeTXRq13oEg4qwH4iKYF1CjtAmiUNNGQKL4194bKXb278a",
  "key17": "3zEaboDAaq36uwYftG7bqwZfJMpXpNQiA7vbSj9o1baczCgJ5QuoDqMxG7in4W5kKrt3RGLXPgw1gV7NPVs6BrWQ",
  "key18": "5NKvXD3cqiLYvgYfvkpKKG7Fzr3TBkquRpu95db2aWvUryyGdRiTy21Hqt24Vxkc9wBm8d5JSQgCy8HXKdycXNWo",
  "key19": "5FF9SWA8p7NzmuweFB1QKRw1DnfACtjoW1XJdbjHi19ZetXaxPWv5wZWu9e1AE9px7ppRbjUhL31FynLqmt5WXqL",
  "key20": "3636414so2rbM8fXtQH6Z2YSQYc86qFLbTt8jnXMuy35fMXBFP78Wyec7eqsrhLWpcH87tzSyRFSzKVinr5hPoAd",
  "key21": "2vdxFsfBdQp3shd4vUvqT78gnhymVNr6mJbEqdm2sKTdtntpGZXvLKeneLnrSpczkKpDDLSSNLSh1PeU3LRk2Zej",
  "key22": "2qbL2YvCDc46FVBBjohTNSNWuGH7pK6HMaFxYWey7iuBkdWFYGLNpoBLsABNh8XzFRCh38g5vu6cxvZdHpjn5ug",
  "key23": "3hEFPAZQYU9dzPYDxhm7q25aQtPnTz1s9xK9DRNTesCokbBxRMu6DiS5i3JphuW3zfnAodSqeeYyGsrXww8fD7RG",
  "key24": "5oruAogv4eaVQMko4jZLiWRU1dKBykKmyENBuguMFA5AMHPRuXfTWAoNYTmpidup2h4nW1DJMCXpMmYzPAx4kJrm",
  "key25": "5itfvid7mdq7mPnRyXJE21XBttxswGVATMjMK549qN8LLTEDZjE5rZ5weLpV7o9SCx8QsDZTDNS9FfE4GPjoQ7JX",
  "key26": "4ddVaJSWKdW8zQx87BLieGJhK7pqLZLywi3hKG49CGbpta9oJP4p99uYPTpEugFkyEtp7YLe2cto74Qr8CiHCd7D",
  "key27": "2ifgU7moEygPF6y9vLM5EMLjDTrhp3Tho4RsZBtYbZRwNPJhFThvd5w2krSAxHuMvwUjRtP4JFYA2gNXFrCgt6S1",
  "key28": "488yhdhk18eD6VbDzWakhcd6fWZmVeAPTxcEHKDEHR9YPbUtvB3bFX7amrqEP6TLNsb2bkEXg8ThjaCZCifuAUTa",
  "key29": "51cJkaxPo5CqB67LBgPkmQKcxJxBH8gVSSexNy3DUDLFaF3aDFJqEvRFwAUs986b9aDcDFKvoUQbUwtwTDVrqtNP",
  "key30": "4ELbSTX3ecm82TrK4bhmVT5StPwzumhqriCTv41ZYhY7cBqHwUcqVsTWiFYysXVuHdEvFpi9yWzG1qGvsHWwjNkj",
  "key31": "2ZzHAzG3xV354WJJHBHnBeYxQnMGJfhq5i1ZBfZ9y3UuTyTQ4yMCu7LrYeYRuuskox1TYjzyjE8yDhAsKmArpwhV",
  "key32": "aKFC3RrBr1KZyLfBNuL1TskraPuH7eqks3jGd1YXNWNcvzPvNCKwmDCfTqxEuP3cjxQaEiQqdg8upAi7gJ6FbwX",
  "key33": "2upihg76AczbJt7zPvsJoM5mWSQt9U49vqaC5vRdJcA1iEvoPZEDZ86SErN6P1pJwqnDMzGfhdMg15rD9Q8KvdFp",
  "key34": "3TuSrxAmaYdjhuf1YEZBmmTWDDn1ByYAg3mbgBANp276B8jjJxFSKyKtAGGQiKvzz6DeZiQfrWPhRuMQpbBFS72Z",
  "key35": "52CSp2snH9fwTntbvjWKgu27nr7NdkAM5XMhjDE1MnSFFExD8X5fXqBsrY9p6pXWUjyjzJ8n4U1RWyJ2Ga62cjEd",
  "key36": "5PEUi7Arkto9G38kxkuj8N6bBT1gVm1rYeTz9JL8AiNtzuLe1bYfowCZEDvVw1xhqgDnA3s7RgwoJ2vuzWBnzNko"
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
