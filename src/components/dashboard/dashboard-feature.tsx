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
    "2fuVCwrXkNq88S5ZBtEHTg2PfKyy4YUoRR4kyTu1m2sXQt5h9TS2yRzndjg62JzojPw8Wr993heUCgrcLaKDgjU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43t7KmKVDLbFoGkQQdvV48K9sSZwko9Yq3RJJe1UksBB8jGY3t7nC6rHVoMKtw3wpK3bPz3XuqAuWmt8T4cKqbnC",
  "key1": "gompz7vCMbeefBfEuuZhsCCDYZnXjv1r3FLAZTn1bPxojzaXEiBWXjut8wGkS2YimYK8VDA6gqg8ERZ7s3VEhQH",
  "key2": "2mRyGoSkJtiWh9WBfMpK829ziJafkK5a8e4nhR1wCvdhe4BZJTdHgQ1Ccm6FagNtNuvp8m2JmavYYeDRfXqYQmr5",
  "key3": "4c5KCrWX6uKvYS7H63UZ4KNBgV5xLmupR75Pg6MATtxsPqGjY8ujmApLVGuMjscZmKyW24rBAe666GngThCpa4Ce",
  "key4": "4H8N8bPRN6SXqDGtdwhJsdeF6s96VvzRuMBoBxXPrFMCDvYUTnJU3kKAFGGaTtz4Zrd78K3i7xNTqs4VgkPrQSgN",
  "key5": "SsnWedntMrTvvugC6nrAtzTHdzJUB2Rk3G2hbiYWvJnPXYN4bdpL1vgt5epGDwCDfD9Whjvzc2ESZBwcX7a5UsF",
  "key6": "bSngWoV34M8Df6EdgwDZyZhwhwVyacuQWBfy5833jPaddtWL6gN3NWFabJwK6Avvs7qKvqz4wLdBCSJhZdxACkV",
  "key7": "3DzG8iMaekenEJDcXEAjZXmTrFqzvDucWuRr6TkQFDD7GA1zhCUySU9R68BbFgQekVj5yATuEASyEYNDNSXZFXuH",
  "key8": "5saujMWQJT5L6uHJ7jnfRXhvdPRNEC9HySZ3BpJfiDM62zF8pTwyQsGHKPSLzj7KuZGDT8uT83erVQ5eXtF5ocvx",
  "key9": "3ne89i6jbFzTpBVx8XceVcvFANoodCPdD1Y9fGqA3LC67KSrzppfyJeZw3BUgNGnbj1yPXA8dii1xhRVsU6V6yvV",
  "key10": "4SMxv3WFbzuMjHZxA9h4mcoW6PJ9GXfW9YGWUeDJZFbHgM76Wv1ME66NFYpbqzwAdxCxRNBuhESq7Unts6GHmmHo",
  "key11": "4tRQWMipgd3gvX1Lm7sRYtvWbsqmpnrHMJkKaKGaRCXWKJRtyJnWoxyyYNQQFK9jJmrA8hxLbgqzkm49M1Qfna57",
  "key12": "dM7VtALwRPMKsvLDHq6dHM1FT19E1dzCRBJhxAM6GbstegBvnroGEzSEERPcYvMkP98vPfBk3cwjM5YMKqbzysn",
  "key13": "3wAnFa29DAofkdTCZTEg1PMDunAikdRQd7Pn6dyu7ySJJGNVoyzMu2NmYwtaDoj3pfn6dBvpVmDr4tbFZ3EzX9Jq",
  "key14": "2yzUXH1tZ9U6yjPqbAZbjdGhPwYPdCJnvuCdmi5UJLgWfXQhxZqzqr1htJniRCwX29S7sMmAQ1T6sCT6cyKnMB83",
  "key15": "2ExMe9T3gPMcGXYZ5zLeDznPf7yKjqgGf69nzGx95H7vxXGLdzVRpcNuvx5GiG5ycL7QR5eEtZ9q3sKTh6hhK2dY",
  "key16": "3ty3jW5MkzKNzCUm7RuGvmWrWq9cWDoLzZWjZ8NFcj75yjs2K7xki9m6reiS2etJhQFQkgv8DPrkH14xfBVFEH59",
  "key17": "neeSvCQxZbDUrNjtZemZyQVnb9rMqTdRnNmXEQNi4QsBeCPC3fzxMNZJ52pedatWPPMZddiAoqn41hTRX262eAT",
  "key18": "4gCNRFchYpMEL9xKfKySgHPpb1iUbBXUsF7HVNPqS63ZLVVouBe87ZQpCW4pQhTfMcxFQHDexGoeeqgtBVWG4Kbs",
  "key19": "25zCLB5QxNn8gGLCg3CrmX2vjCWUewQYVqSbGhjZUzbC8AFEz4FCDTDVEQ7994BCF22hbtyxVNrD1EpDDFa9Z3sZ",
  "key20": "3UmtoF2tRV4XBgU2Qv6DBifjGMdN2WWEihb236ngp9GHnzu8t5R1PC3VRNGUQiVXsxzkQdZ2EZmvQbG3sdN4F1oM",
  "key21": "2iC4AnFH4LEH1gzhVBs9BBLxpgic8pDLgfgEKVMXj5KyWhN8a6YBwGr5EqEhaojH3CcYiTxFKoYmJV44mp6s6fC2",
  "key22": "3mnkY7YrG5QG2UUBn2VWDCWNXH9mGaSCnUQDdtgKBsrrLVj4iMPNRLgo88ohrssyHei2dBhhFDri2PipstRXCHe5",
  "key23": "3kkDmAU6n3XdrcfN1eNDTKhaioctQbxZ9YM3RnGGk95wMHZLUUACnEQHm1BxEFbakZnBzjLRH79rcwbuQnne2Xy1",
  "key24": "223vy4y6bX3QfSozY9VKmTSPAbon4wpxsKVMRanmaxbPCDZbEUvNTry7iMLDvbUwec6JWTK715MShLn93paNc9ni",
  "key25": "3DKTQUiCQ11NCGxZwS1KDSCdfxQnjiu1ouCTjzB6jf4A9o3f8r8DLkw6FxcHHSkwV98dmk7gE4Pqui1M2ffHw54p",
  "key26": "4KWNJwFoVLDRYm9xPN4xtiS7mXMJWZK16rmtHGgKAUJVkpCysKT37EUENUdEpXsyZazMcUgVVTo1kREmuPZ5swWF",
  "key27": "5vqQrDvBTbmwErUaXhfQANP1hD1NGufCJ4pkpR2DpwZhZR431kHmxGgLbz3AMs2iGjUUnDTFa7oNWn1ijfroRtb7",
  "key28": "56x58d1xk7hAggJRz4ADWaDJpZhzLHnKiNVmVJ8s7zBVRH2Tbwe4fczYsp83kBmEgr9Dd2E7zFHRwFr3VjXUGcHZ",
  "key29": "3sqxXg2Bcub3AVfrZ4qY1weSqWDvJZHPr7wrtPwxKe4nEPYj3i6hT46VhuZ8bsY6oWdm7oQPbWywyfznv8YYPZsB",
  "key30": "4gGBVK6Z74WyZAPrMKvUDKtwnMzrHgB7hKn6vh51xM7GNWyCwLvANBRKbUynxJLmR4jqiP75pneuJMnWhEqtUcGc",
  "key31": "4fBNyRUkke489tAJqtR2uCnBJjmVTLqHMrG3dH1fTtcDzGtSmbrRsxKNCp3iMAd1E4zKBcUABU3Q9wyiqZhHF3rf",
  "key32": "hLfnoPTv6Hf5f4e5i1wATbbttJrn4KdJ32zbkKxax2oNBwM4mcDzutVfU4BiK9cRY1C8jsd6oaLvJGQ1HbCXCX8",
  "key33": "5pnC69P41maHNDT6wKSnpxkEKiVPhZvF5Zoi1pTHsKt8Dx5bZmjnMqvRp84KpFagQVTe1DjyPHKtrdcNNgTsuVvz",
  "key34": "5rFWDxMLJg1ebkRPPKj8DxU4qKFJ4F92BFWEi697cAxpyW6TgWgMCa4d3bmiC2jdEWyqFCibAh5iT2wZNUyBEUsN",
  "key35": "2D329ywoSvT2P47yCfi9E6t3aM7JprD1Hz9HMqYRDpjnQGhHxq6omxdSN5WpRxegq3teZRB6dKVhaUgbhkoh8rao",
  "key36": "2piLFVjhvXDmTKaYd1ATEccbK1TEuzX2Lt5QTQuKYzBh82Zd7KmFc3YVeFz2FDXBQ2wstDDzMQUhfXHz2VaFNtik",
  "key37": "67UftE4nN7azzGRiLptdy5D7ftjujr79UGRnNE6FkmQinj87qG76sRFRnZvmDYm7tU1u8yZzVaykZkhx3pTHtruC",
  "key38": "57fQNXh5BkyJsFDkxumLLTyvnd6De5fmgw3jWDYv9emmtv8BecuoNoESSmP7RC7LdEibazmTNZ8nRphGeGLL1vNf"
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
