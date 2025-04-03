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
    "2T3zZ9FxqH3prrD5e96TboYADv2KSqPxz2M9DPL5kQc4o5Pc7MmX4ohViyXFnDdeWAjCLeqwqZFpf2dBCXUr8ATz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5buhFFTyrMhoMqnyTHusNS3KjAj6yNthwXNoos5mJBkd5t52XX9YQw3LUfMbjtunRSXU1vKA9bY36JPpg3hr6UM6",
  "key1": "23CL466RpCRdR1YhAJaycfc8TaEDYghCsNCUyBxLV8x3Ai5x7U7jeCq27dEkD1sqyMSeeBXpKJxWBwTcAjjzyZmY",
  "key2": "4jk3JnQgXEagCYBG4eyFFKZfuPZdx3rwk9eUEtS6i5tRaYQkNNyGM5cBYcgRhrbD64PB514PbsbhkF8Zba7TnuFZ",
  "key3": "4aKjSLgUXnZAggYapu7tiPKmSWssYoG47HNpGD1ft8wgx7DuFLKMigDw5g4PV3FyikinBSs2Gr1JYiFzSKr5oTSE",
  "key4": "Gk6w4LWSW8G48JYqGR8NZuRJCu7SaDk9Qzp9pX4ypA2voWgbwcvnezvqHUzX6k49Z37hEshWLzGkUP93BHix2bz",
  "key5": "5LbLjjhqgWXu3RuBH4Rb6hcRvKeDCo6jdFXY3ZruNgde3q4ycrL1AVuEyByEyHdSEZRCHufuAxFBwGFMDYZ3hFDr",
  "key6": "2fQcS9ffJhfmu9XpKh23JZtkYVdHD9X4nuGE9B92KSfGtfWnH3C9wjcgfU3NDf7bzzDPX3iq4dLaoJQM7eofxesV",
  "key7": "3UoaKJc7wsBjFHvJakS74gYR5ytjZG3HXkoHBCXBMdQFG8XSH9oVpumTGwpXSfU49hH4KKGr29D24yXSJUCsgm9m",
  "key8": "jyDrMWHry1LhrNtUUfAYmg9AHwtZUbK7wbGe3U4H3hHK39zKkwYjR4bZFhoo51CWDAxJLJR4CamuzbkeXaricxT",
  "key9": "2KF9S7DHGZe7LryBb5YDyaAN6gJbX2hYcwwZkLHFnJd13Vsak1ADyW7bf5XQg1L1CK7DHNeiTDqe2JVmarFf16p4",
  "key10": "5eqxZj5BhDMDZqiYmPLpcgp9eycqk4iaahEDQ8i4xJ112eqJxTB9ecdHRDpuheKMuLFZuS86fWjZDn6RSgFR4Br5",
  "key11": "32dXV1crmmjSnmtSuv79GHNWiohJcFKDVxCDa3iuV19NeM4AT7AjFJuEh8E1UnzCif7r7UJTBCgfbDAKvM6E23GH",
  "key12": "4eTkfdBEfSUE3z5cc27GP3aNZnQDP1J1e3FEoiiE8aCcufshnr3LYjnL4sPG7gKCwRFbbi4A8cWy7NvgAFtLm4Bc",
  "key13": "4gCkUJTcSgfyyEusBDbFc91SVE3c5Jzo83pmNR2tfJjoHTNoGBLH872Bcuer3AZhbzmDg5t2n7oPk7Wd3xreVPnb",
  "key14": "5pBM9QQG73dvLzYrAPE2cRG3qdhPrzK6VNqM4W5LYiNKrsytKn2r1JF48vu5NKjReS1f3MFpRt16ZZ2UHkY6hu8a",
  "key15": "3fwyWoPTsQZfAJcXe6kaTtUzjT7N1gjWrA5s8Vg5FFvWrHEQhVUu3rsV7TTy5WFz8JXURrtypTk23FBy9nnhQSBD",
  "key16": "2mwX8jSMoCfAmbKKKuaPa7Lgxj6Nf4Xzb9wvDLY5RdnjciUd8NExgjhrYa8dxxEPbt9qXnsn1cwyAosJfwbc3QsM",
  "key17": "2igqMDLez1AwdSa6p7XuyWiUV92a9YUHLx3xyKBM7tkjNoaPaMjb1gRydVXX7yMpqKh4n9V11puTZjUN2Vgm3588",
  "key18": "5GTN7MGcayhnYybWV8TXaBfSCANU8XRYvwatEX5qLJHJYr6EWatskcXJ4UzKoUiPVJRfv3EyiiXzAq6nVXKi8Lbi",
  "key19": "vSb8VHvG8NCtHzM3HX8F1ZfKY4wtm82iXiRFdEWeWM5NEap6gJeAX1cfk3bqk8uhoSPQp2XDLHbkcbTRx3oSNYS",
  "key20": "nzdXZzd4m2FjfenTscfPzKTfbjoV3aM3xYuUA7bppVys93CUgXXSB5Dea6JeR2HUWvdVY4npcTGE4eDbNknMReT",
  "key21": "2feLhREdhbM5AJuF7metJicPB1NPNE2gEa8nn4JJ7twR1vMtBwzGpAvffUf7ukPo9L39DEzWo9hGgCwLhoUnYJub",
  "key22": "8AqJUa9kxi9RZXTrfwacXocsM6EoVDdcjHpGghURnj33yVP9ufrkrHzxri9KCAWM7L1xW2BZwp8hRkmEr21kk42",
  "key23": "3rmyGrJmYA51XGji2GhSdd1LoVz1jNv6bScnzrdgkXJiYSatkYFtiQ6xXiWvbPv7hF4sVYfkSjgbxquDw87suvLU",
  "key24": "4L6aVUSqc8SYmPwBbHxk2FQh6FwfesQ1XzVBrRrg7GJV6iUV8WZkDaQZQpZ35au7prHjA8o6jGpdscthMeSTY2Ai",
  "key25": "3GZFM78NeEz2hxDMZJJQFmemz2Hdd8rcW14NU8kzJyUrizbRkvZniT2sWaR9373558oUmomrV1vULYWHzhwjX57s",
  "key26": "63wPo4dfAt658SSjrysgntH9pdxSNGYMBmapjT5wcrDc3a6zNPw67HSyYNRPatWtihsY1ZEvxEX18TTNSAvZjvHT",
  "key27": "3dJgM7ETnPwvSDdqwJPFCGGpqRFX53knvPKKigcncuZDXQZETuWZWq4HLeyApjd36GjF5rCkvMnGc4FxPUpwKKhP",
  "key28": "A6v3dadjvLhhTJZpt47HWkSCapvu8WmXB59JmD9uD3emQzvoMDnjsFLnn2kpa227qg3755k577dBLnMbmsrR4Wo",
  "key29": "3AuihE2nzmqzjMF3vAejXFkrxno8Guq2pmhhFAJDnco1g2rgNEuitPiAri9XdGSb1P2MJHsaykxc7Mo4BCJJxhRH",
  "key30": "eG4cRWxTRwbHMMYgBY1b87vnTp2NptJSB1U2mpKwhpD4cCBSrcL59NKDAfKRiYzNUBYp6wCXtn7L46VRZJcxoQA",
  "key31": "bxViSSUS9ULi7AsVo8G2sjfTAovWBRAoPFJRPoRJJJoYWpN6BUPL3KoNyWoKAtrsH5fUjtbpQgZ6rMV7dGrTCYw",
  "key32": "3iBbUq2xGCw68KotCrP189z6gpyoMxHbVDpSzA1inpKJb8CogThZCbFEDQYKG7o7emF9UkuzJhLoeqFnWuUVS3tg"
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
