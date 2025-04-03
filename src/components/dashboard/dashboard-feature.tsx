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
    "55wKMDtDKYzztXUqWQY2qUKTP6D3xT2nsVNQ5m89guv8W6N58jAzpbbWEagB1Q8uo5X87fRpscFtdwXLUnTHZbR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CsY97CQDJsgVpi33F7AUVZEuG15v6kTqG1KU735mThypABRREPgjfeNnUGSuvB3UVdPk96QX9uCF56KcJeFmZCt",
  "key1": "ZJhnZh9kXFiLySkZAWgsmvEaMwYJQ2w5sLJqKZHUCQZMEuVhiFm5FZ8jqb4JkLZCRSkAk2HsC22r74dGAriLPhU",
  "key2": "4dXorsT4dPaHCnmo7ySi5DkH2LR463DpQwhhk1r8pnY7GTtKYztBBj8HSYwNjgnyxvs4wigFAiT6ckKBWaRLDJ2V",
  "key3": "Wop9FU9VCCV31JnGLvNvMQqoNrFvWatB27JVp3nX4PJ6ygM6YfYo1MozPpnz3CBvTMbmdepSRtwaoi7FcVqkF22",
  "key4": "31vWo3ERuM6kcYPfFPY454f3ER55NzNTTZzZjrpFj9Kf13NJCNHmfXFt8aU7Wazy7yt432k455ZrYjMQhxFmcQ8n",
  "key5": "3BbgQ72rc2d539Ust8CmLTYWWKnLMu48xfo9Q7DWnnka4fjFk4WZBTv8qMuZNZqD1V5htHN3CRfTEJJ4TSB74XGn",
  "key6": "224G4JSDGkEFxEfbBYH6SEFKAHxotPpvJr6KvWPQG7rRBYbXoNtNnxk27hSgjLMUewJqitAnFP81zVgeF5DDTQvk",
  "key7": "4zvWDEStvEEFzPL2NAADUAifCL3fXXNRMrSMULmqjL4ca9oUWHFKcgQ1f2kt7suFDE5jqei8uv7igzKWwaxHr6gV",
  "key8": "4fdpB7mcxVEu9eS6eijWUYsbVvin1E64kmdqxMrafoKdfEAZsFf1PTZGaQrC84SB2q7Dw1iKR8TY7CfjAaUmkWfR",
  "key9": "26oggcseJps24RLKFhxMJdeBdwWNzfykbVQyoCXriMHTC9XUpx6oTxBRuVyktrmfbzaqAdnCU49JJEJrca3rXr28",
  "key10": "47khe8eFoHpp374sfRjNxkgBbPwLCGksYs4sQu1zXDAu3HiJnrCD4MfJSVZiPMzBzyaPVHW57q9ZEme1Q8WqDRxe",
  "key11": "3cTzUepzQiktEernWNfUffXhY4e2r5ezSs7ixaiPiUULqgfzef5gwGa8h8umGzGXrkBNKmaHqaxedhQ4UTaEMYez",
  "key12": "3m8SCu1NNboihzGnaaddakJQxR8AV29Kg8MvDfT8w9oV9DK45LxA2uXfgcTxgAPEhvegvi3sBbqaCP3izmirzuDs",
  "key13": "3dZ6AJJy3ds7qKoXKaHPotQJzw11nqmfPjJEuUUdHfAYwxBuTZV7gJyMYfjM7f43Di5hVN4bYZLQBjZvm6rP1E4f",
  "key14": "5LPRmWJihx7f4Prc7HT5cNDKaH589bB8v3BHbZZzf4jA4B45Su8QPN6HaB5aSTwrj1xrd4vL2JkeWmpuryq7WQ87",
  "key15": "4N8KrAygTZfeqPL6ZDDsCBjkasbGsYrXnwspa1HKcyVpjH6RPFoxZNT3eK7tbuieR3MBdmQPdcFwWA5xN3HsmB1m",
  "key16": "53d1XgB23MojLnfK1uFNwdaXSLZ1cnio1hZ2SxrwcaDqP5zvocHE8qKcbiKZhSXAzVC4DcgB9gKuMD1vSk6j3Eex",
  "key17": "38Rnx4BaijnEJnqxmp54BXQQHT71dSzaJ5cFqkKZc8MHfCQF8dTRbHemqeKW23Z1Z9TLGvAGwFnkn5iSx4zvV3Xk",
  "key18": "4M3fBSMkwAgcD42WVS5NtJLW2m1NdpqYMvsUFWxH6BE922Swos6HjL9DVi9idxJcwR7bKJHjv9rq7dzU1jJSy72W",
  "key19": "g4a2Cavo3nH6CHm1f21K3bMNSot3fZCfuFcMSMPS8PtukVNhqyFt7cyDnWoMf2gLvbK1h6kBmeabrpkuo8bgRAs",
  "key20": "6ijZVwvpqW3jfcZNPteuUSbQhYBjJmhFpoq1zorYBwV9jSbLQSrQgdicnHnj1S9w93K8edQKZmBF5yzs5eyTdYu",
  "key21": "3xjjxRDn1z9qUHomhQF9jABKPnjXzSKiBfQ4ayvYD5tj22ei2sAxzUaJUSQqEdnbbf4URneXmda2X636orCiUPeA",
  "key22": "3pdi4ZtrHhgzx3nvF9gXayWYGu7VE519b6UgqXp2WGbjiZNE6Ft9NqQWjqvaGcVjYwPqZ9u6RxiY99wJjvoZyauB",
  "key23": "4xq3ZZBdJ2YyxqmBhTszx7suGrMiDNhLVtcjktVyyyk4DjeFDejCd7gPsocATx7GaNEgZFfKj7Wgw8urqvKpQjdz",
  "key24": "4pRdq1478vF7qmtnABHVjHmbkxT743YPsHeR1ARBPf4ERDaS3xP5bAk4dxuohRDbNY3usHiWcSwD9YvK3tmGWyzJ",
  "key25": "3DymvSu8fwFniBJHiYKCZLkSuVTwE6cyNAs9hD4FznScVuaWSb7AZ2jXuUKCHxc7jMSgsoneKGqr5b4hjNefuJyq",
  "key26": "3YS6GDctfw5nfrDUnU9K9ecnEbDmzpUgh92G2MjzmSygk55W7rSisX3huzi57Bs6rR3EGMujKH2WFG3snfRhXTM6"
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
