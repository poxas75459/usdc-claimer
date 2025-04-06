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
    "2qj2t1PrKFpoiaTjp7vGQETo7CYuwdVxfYoTSbupKLaFShJ23Q2f7ADHVsAhZoNUW4SnvzrqgVcva4obJCFhHgv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UFoexBqXEASfF15tkXWHyP6cLjNY5CPfanN6JVo6bQLYzqYvFdpNHRyhdrRphLYygxoUbYo9ZBTee6PaS8QbrGZ",
  "key1": "2zb7CbHwjxQc3xuEDonwXGqTWrHHQpBZkqJ7od3iRbehL6L6qk1z8xKemMaUDJa8H5yjUtsuLVZbQJ3Wxo3VyMi",
  "key2": "2fw2eJH7vLWDUTDd4A1YQVLpPvZH2PAK1G8Tizpww569noGJ3YVVPmg67HecStxfLd8Vd84MYXcYNapU8bxC9R2",
  "key3": "2uw4TjyYwdRou8wTspnp7HtUTy5UW1oXD2ctymAosWKJkPW8V7FtMwPUFs8t2XF9BzHHCQrFoa1Z6qVGU2Jer4no",
  "key4": "483AufSZ6fnv1dgJYzAD1et52kjrK5MRSgsdkF5rAiHtUsrMGFwpjFVEbJaQNCNmNDLraqNupBKBLFBqexs5d1Mf",
  "key5": "UToRLCbBWRDkvmsDdW3WBFBjKzFaX9BLuoFZhNUgYBm5gy8dbM55KhRmp4GSSgTPPAzfUfbhDZfmPdKuhUWx5cU",
  "key6": "3NkQqWNXps88sN5Nkg8XRr9t4znQ7aKCQzb4p42XrwdAvXvUBN7a1x24AnBsYoZ3fQD5cQ6fPfcNuL8uhcd9fCjg",
  "key7": "YZrZSu8GuQey4GLKM8QKcbmcD9f86H6jSwZk45qo9pF3aNh1dXEqdcoH3A2R25fk1YgU3L8beQ6HVDRzxRHuxYo",
  "key8": "67TyRdmR8Vjfqwrya4bJk9fi3sZgV9DkaVJS1kA6eH26hPcdpPVxtaeZdGjR9wXwqZaQLQetMYQPMiFNHT6nQdcd",
  "key9": "5dWdrET5EgnmwkvdMXRDtS2isdhchfhZmQ13RDed17tt4ft4yHJwDGZKctomh4jCs1PD9GacSBnkzRVVkE4cpk1q",
  "key10": "64GqwoJSMH2yWq8xhCFAZSirCK2wZU2MNuVCBQXr1L5B12McA5g5X5fwRHogxLrfucMJuJ5Wrry7aByz8boVbnjz",
  "key11": "3MMrB9xfri6q1M1ihXGQMUMBBHJbiws87oUT7m9hVsg9d5kCWqefTQEtKrETQciF6HkJVcRmj5y8Tpy5P1vPQsMY",
  "key12": "58R3AaAXfAYZcXJ2uDJpP7AvQd12QQZU1VDgQqGjgm8iDxrXcg5Y5U36kvE6pt9Ekgpx8myz8wTcJ4ASjrAaHjkC",
  "key13": "2Tcym8QRVYa9oYDnwao3iyUkQTUdhkg1897ChXP2EE9Jq3rCd35VjeZBC94XCYhxhohu9HzyyThxjnB3LR6G2WEE",
  "key14": "5V2EG9TPYaZ8cA1ZVJYMdJirvSKaXVJt59swiyZ5dcDguMsmLk7Bda93si6N8C53kNr6JPRRCv4EFgoKUiixfUb6",
  "key15": "AXaeaNDjbDgp1CN93XrVxUt9JReLf6EC69YxQBDUMTnQPktbmfReCHD9MENXXCuUxVJwnYSFsy8BGMukXd4ptN2",
  "key16": "5BEhiykbRV7xXySm8jCJRGkxsnBK51vWA5gLiEQsYxjJ43ijqTUeKVGfVvPSf3WJEJKCGB4HqWyz7KdPNBWqCiSh",
  "key17": "MsmnVFa2Y4EYxbZb6NAaizhNnyQaTi3Fq1G3WcfW6FpKYuLKgVXVPmTn8iKR63QsmKsy1SuPd47zndnDqpMCBVh",
  "key18": "5t8eP9afgAEpsAbFBCSHT63f7LFY8HGkHZiL8rPwcBudLDgRdd6nXMtUQqrUjaZ8LNDRbwppHA74YKa5S6gmLd2Q",
  "key19": "54gF2ZMUBhSkKpwXmUB4dPC9G3tfYvzNDpJwpyWJHw79vcXkNpsgjd3n2SHEFZmt1ukgx5XBQGpeF3Lq4UunvbWR",
  "key20": "5be89uGagAcfjCxzCG8ZWnKUnTCpkMessJwSBbj6awP55csXjmrnhGHxHRJgsJLkRasEKo7MSR7hFnphHpWancsF",
  "key21": "2vFmzCFP48ajhDReerxvw8qsaLa57fpNND49xntvbFGX1W2mkRiptptySAM6QXeyL6oU8tJ9nASaSFaJRvzAidE5",
  "key22": "Rc8QMjtmoLNMthbafwMCXwLB5xEN2LLr4SrF5Cuvn66aZEWtQe8NpNC79M345Vw5R9EaLhBPrH2ecpMS8qqtmDx",
  "key23": "KGsHGdXJFu6CVoJtgXz89DQ3epLeTE6KdERz5YezH1E7TAmXPTRAx12qWke62Hy3Y9Ev39MmGpKvSjcUCkfucvY",
  "key24": "4obiNxrh5xipuquGWEwQtvNw4yiLsDJTJaaV1xosFEyi6gqoVJ616iAY1nsHSkNeg8Ff3kEyFSpMRWhx2fhr2UVZ",
  "key25": "26XEJzRA72vCkZENUmBZbcLet4dLisAnnNKf13YgVZRbfKTG7CHnVzowiLDS2vD936qXdV5zboCcH8LaMAxo2T9u",
  "key26": "23U5vwMonmDvKT52poFJvDBAgQhUzwftHiEdnyxVucAunSH3nfVhuh4NRzfem8WoB4PmVpJgC7axz7h3tZKKcshe",
  "key27": "4sF1sfwr7gyokpRBEqCa6jX5L3HvkQjedikjjsMYh3p2z4v5KRQiDdfAWSy9CGMFSgG6gi92k3YVXcYbDvSpVy8w",
  "key28": "uQcXXRbAhdNkqzt7veCYjU5GvFUyuyQ9DifhufC9utSCz4E9CbNNvUm94mSqbwXTAnML9RaBfMtA8Lens38odgn",
  "key29": "3f7RERTkYvbyCqZLu7t5FumMnqoHfhKDVYj7qfXi1Riep1Aef92TeVtAUitjftKvz3inyrxM4CxC1dAuu4Nh7Zzz",
  "key30": "4cKRCGEngiCv62EDDHNjH3nrA9TSzETqrBg4tqHWxgHc2XXXUoufjAjz4BkrZZ6tyy9NMrYzJe4Vc73JBFZseddm",
  "key31": "ffdksxJXwNczSpU1KLqFw51JguZ3r1wksRBLiw5cLqNVASnabpHcmZwauJvH4MGRwCBUTySsYUgE8s3bFVCjvRu",
  "key32": "24NeXgKTYWWay53XbkN7B3Si6dPG7DHXQxkvAZNsFQFFGDwAvSaob4cfhdFBsqdh95fK8SsAYQVAYbyTdmxNH3zu",
  "key33": "2oMZN54bCZPZxxmWgEyLk6Xd2yd2qm725jEq6dFCPLwZ2jvaQjY7dLVEseXsPdoA5RdPDQfjKm9xevuBNisYnKUA",
  "key34": "5qNQwGeZ3T5CqunV4FDJvWSHodoN6vDzrdTRa4B1AhA9DztjL71cZ2BGirnWsrP7ySNZybrZvw8bJ4btSQyUJ4yv",
  "key35": "3mZjvMi6sBaP9AgtGzkjKXEr5mSXgaBt6gWCfjjjFUZHXnaJdjDecYwWa2skPjpXBW4BZ3tPiPTtybS3MLD85b25",
  "key36": "2Akm7giUV1qhwRsyNU2agdvhYUgBVLyTHQ72kSn3VWFdwnnv4X3bwKkuF4rPEGpr4rCkgVr8ujENEPMBmBEPJTKd",
  "key37": "3owaaY2q1oGNbtFdUw1wvDKU1X9TX6MYSB8LZnG7YuJq4TaYnisGrBoceLnJ4qGUXYeixgJF9kcnNvAd2fPmWimt",
  "key38": "66eecjWiTUeuPZZbhYUpC2aoX8PchuejYm9H2VjmqtAmrTRgUoikmD4xYqUdtmVEwGm4u7exYzMqbE7SwiG2zDfy",
  "key39": "2nuPd7jLjB1nGeFU8wrAmsXQUuLKzmuFkaXLajJLWW2jhsEzF19NSUihWj6aaDg5fFsiAjbW41weBmoL6drBnFPM",
  "key40": "3YM6Uqo8C627w3j7zLaNuwNJYUb7n7L3D29yNYPy8WRjz6LgGSd2dVTfrNCEpcdL3NAfhHomzr9HThDAXEkXpgf3",
  "key41": "2u1WxV538KfwJTJ2DqkCoEoonX4nKs8Dq4xYKvZJF5WaBFNtARZDvFPttCCKCwSQ5jd8KzfL16Zqu6vrCPtTsQb7",
  "key42": "oXJeBZfAPJJUG7u82EGfYnPcbVuyjTrGRjVYyM5YuxDGbVeWYz5UaYhdySyBMBDfvwEW9355gGqf4wKrbnh47cz",
  "key43": "4MZXjPcn5d9TiugumHXghZ237qqzzH7gNs4EffMEznx1SJGK7NSBh2xhhfse6hM3U73rfAKRodazjqKmFxNyXyXd",
  "key44": "45QGgjwuYFHefosXWn7x1DpajC3ms32XgHXZALe2e88oTV5cBcBdjTQnKFUx48DJXvwsirgy9rbrxXFbviHYZRx7",
  "key45": "5o7nTHjhrZyUYdPKhgAbQH25MvTtq81Dxq5WVREaRnk6XPJWyAiiTW72LQaKnnQszgXwrNvVF2a6HTowmjo7MBfo",
  "key46": "2Z1fLRg1ktHutwAaZAvmGVQ8oYRD5WAeVkWPKRgaTt3fsyBe8nJVB5KyKXpJc8nd3NobtkqubW7ffCFKJv8Bs9Hm"
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
