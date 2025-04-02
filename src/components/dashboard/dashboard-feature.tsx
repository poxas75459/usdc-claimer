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
    "4feGeBqb5ckjTDDaebBn49U5r8SoLm636hAUNafResMjLHZQyJzrUgBf9gsuvVeJk89HwAPkU7ncSJoUFr7iw683"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnpXiC6uBSVg64ueTMJoLsnRJMMKDgCk1dxW3GzAebFzYAMY2jSkswnW41qMm8foVEmcocfNFp6FPnT5RXTcZTE",
  "key1": "3SPVsBf3uN356wx97wJwFp7S8jPNRu9XYy4hdGu6H4CCVQCtyZup1TbyxZAqW7XphE5NCuovShFWWKsNDn9NRkqW",
  "key2": "5qQJytJyXqqtUDyjTGYU2TRRVTjxDaCR5rU37czxZWn2wYAZwYdBJdj4agrV24Y7hbjF3poTNkLsMvf7QjLgQPsW",
  "key3": "v4qccf373jiiG9kjb4pQdSZ7y2DqRFFD2kSRhUu56ixBkgEgwqYn8sAZvvgaZNGHDfGF1WcyGS58mqT56kaF3U9",
  "key4": "DrHXFau5C8aanGnvgnicboRwmPoyAuF8naUrSFqwPnKXYHynTMd161G8KtxhZFwgxkuPNaZwgh91VDXjnrHVuyR",
  "key5": "3ZtQS3EJpN87rR62VPsoNVfdsTrEWPF2SEEv69qPMEXTmTVMkgsUcg81pfrA7SSTxoi642hFxSZQ2Eu4H24Tfoi2",
  "key6": "EkqkKYnLZZ1dqAGgG95N5MBkDWzz83E8ZyeCAggmJJXxuML5aT8RSHiY1Q1JHNaCu984QprpBbaLPh1s2rUSqsd",
  "key7": "2dfSAqm1uyDL1a58ngs3HqocfiHK8ThHeEgn5ZTZgxwfc8cNCx3aT92hn1ZorueUCHjnF74sXrd8pGK2P5NzWvUN",
  "key8": "GwX9ZMLCFBqkpMVZoA3ER7x25RsJxYqhb1NnCoAytXevFHCpTetmvo5kjXr75PGXXu4zkSZTrbYDLXZ947xYfEd",
  "key9": "2FoPVU4gET7ysx6CFSLHfsDVGYQgBgmHZzTu6qqNK2Xreeqyz3dsWC1TSocrbdQNYnbasgZ7P5cC4DDmDB1JcMxz",
  "key10": "xVQqQTYGJ2dwniuvfFostQxX1kQYYDEsAUARCqFTVnF6DU8ixohYwaZsWcqvcFUyRtFi5iUXkbYC9Lv7hCFfuUv",
  "key11": "2VpJgZDxGNPu7qakHouBn6ynBduq1SAJ3KUMPcq9crvaRrcVnvcLS1Hnu8FZPgUJM1NfAnGSEh4jhfMfruavWmvg",
  "key12": "3PBkEHxPfH1SnhaVQfRJ84WMzTdadcyBdNSYVpGH77FmqbvZS3pUGAJVEAJ6WqqYcefwYtjEhRwcnLTNqr7zPERa",
  "key13": "2RyaG5x3vNgg7cA7VeHPBanVgpoWbYmfpM119sRXBv8sbqA7W1ig2CuoWibCqHHZ2yMz7dvaqZ25FXPGKkLRWg2b",
  "key14": "2VdkZKGxvTd1mPNWRNh8qkFMT8pRdx5aSknG9AuBGEWgu5aT9dRCq6Fvj2RnbT72P819WWAtNBFpVSQHkTMm5cS9",
  "key15": "2gmw3AYWHS5FqKuKE6K8jxLB7TV8PxjnLHg13Dek7M1orWE9kaxjpGknwAwuGXPRsVKAf3vNPC8TbTSf5xkWTjcZ",
  "key16": "45byXG3JrcX4TK6qd4A1F3yyeXTSuSj7JtF7CxXbdNZ3HqmFuvZCw2Ji9rUAP861Sr7wqgjNE5R8F9o6nqX6saZ3",
  "key17": "2sEjFpaLSmj21gExo2Uy6c5G2MdWQRu7ah6heugm32XHtxQsTD3wt9z8s3hkmVW4LVUpY5pYtEyohQxUrZfVaP66",
  "key18": "5V5k9iMAfNtTfnaPT7mXk8XoU86BTCKnf8ZtZsZbsuisfhmvHsj6fWFvxb7sNxCxzRnJAY4YP3Xsi4i75rABDXPd",
  "key19": "5tnmhzcs9PYuX85dxF2cXeN76jdKo5oqtitsAs9JUQPxSdZTiUSxakcb8n7VPKiceJm3n6yDfZjcQLHJWm5YFqoR",
  "key20": "2E6nnkF6uxe5T3SfrUVwLk593dythRfuevbKBK9cZt9WGQDRFBsFm4kuKQsywfyX3cTzxXoxvPjjEWEbd7zHwH6N",
  "key21": "37sJ4VESokconpur9xwfAdh42iJc24h7fgEp6w43a7TdKPmXXCM2CS4kF8rh46U3yBs7PJVxA7HuzUFwvGoqomzZ",
  "key22": "4buwDMQVfYqwu1gohMV8wmPSrNYcAh6cj4CruZh72p9SyXpuZz5bKaPG2H4wsLaCYNUm7wdSgkN2Sj6ugKPyGHfM",
  "key23": "3WujQ2uECNjn6QfCqMfLhJqHB11w3cyQGodhTUswwTB43sWNRSci2hDR4WBsUqUbTfREqkNWcVpGF2k9fqdNNVVh",
  "key24": "fuCD4KXuExKsYakvKTaiKtD933X72WvJmMWBp71FaN5u2bfNmNqz4FGKVFtChHES4Xamri6YW4EWxsS2k4bXWmE",
  "key25": "2Ki5caUfmz8cqLLagSimT1UcHtuZaS6zp3f8mz49kiALCCiFSsyiuZ6V5SYp9kv7tV4erCjcxXAr6XpNoR1MUPxE",
  "key26": "E7yYuAjxC2anUH6UAq2Bxh3chRcsEjDmykXuvfXW6pRo4xgrbtfxB16Nd44xigWQziR2fasCZzAWSjFfT2vWkP8",
  "key27": "49qc6qAaqUBKhPwLhcNCXe4EaGv62NRrYhEVgdAsVjAGzZwHQ1MaZqoA3SWAt8b2apyygW7v3wW6hxyzPj6ZM7w9",
  "key28": "4Bzo9oymHcLXYyABDwRLo4ccJXTqLS5chdBXKvTtYtGjjQUVYTQ83T2GMqAapVYGjX1MT1wP93TMfhc8THfqXy4Q",
  "key29": "44H14pBDvMstbVwHdr1EAbsuMHWioPqmj6seyBFqxyQzeqnFkReUmQzFWWgbt7MHqYyEamcrJEoWKY1eN8sxZBEn",
  "key30": "55Xg5WcktZAfBt2w542dwHQ4DeL9oSHHsxppqfLkqZeFgKseJCPWnZZqwRZypkQ68jmPwRRsUs5kQYhv3aXvKzd4",
  "key31": "52H7nyXUkB5KM52kqD6iQwamuW7RDg2yVPjkBHuM6oTe8FvyRyXgBH51QzjHv3qY3mrwu5jNLzR57M3LDnXprQGo",
  "key32": "5vR5uSxPGWc6DMFoWU8YuKsgzzJG4sNveELPjTd4DoEeAp7PtVLjLsiwF2UuagjSNZekxSBCuvC5W4KHKgHE66h2",
  "key33": "34E3giQRw2QhDM63w8dvSbpePh8FM2XQNwBMqWpqu79QyX3Z7A8fBNL21LwX5HLbqDPfDKygKKZCX9W2Dk4xAx9r",
  "key34": "58ubL3WfwkwRzDnvzUCMkhmtwXX7XcWK4TxTPa5uyWvNcGpjjLGioE6JCbUm1SfH6ekSfwCtUbsoYtbVitqsddGy",
  "key35": "4Yg4bnRRA99sTabD6oRL3YRsXiCmDDTWDtHyx7wsTH8HraepfDHVJxN6gJMf3U9euYg89SY4QmgRGPRmiFyjZ1u4",
  "key36": "sETreYqFhPFAg9dWx8umcnPzYyC4JHdssKSatC6NeDrobMorMkoFmUtZWsFsTfrKYVo3xH5EUCkrbHg32SNXJ4a",
  "key37": "3JQKCJbMFFT9199S5ZR2KjbRGMpWmPQhQxutRb2zPGbuqNpv1hNYp57hm259MPN5cCDaKAA7sDiwLjtGk7UnTXe8",
  "key38": "3GPCzo8mmYErKsm3F5agjZQRepKonyLXgPtGnZDrkrwUMHcRUUTqiPA731iPcidoCKKWgcmFuCYDNsQnua2RsBwz",
  "key39": "62YxjjonsGXc9zWW5qRxjCchUpptTEBsyMMHEyBSXLsjr3VaNXku5kDx6EpV93ujESX7YLTqvXYx8cqnMRLUMy26",
  "key40": "5GuYQXoNAop9WwR2g3nK4j2bSi5WbvJ6yo5cCpbsnTKFDgErLyop3DhEvV8kjsEUdiHwaDSg23A7eQxfdwyxByA7",
  "key41": "5ZcSmufZphtm4j55aWNzVhYMWwBVwstcodDveheUL7vvdvZh3aJSePY9GujE94WZvcRvzt8yRyhe8MosenN4g7rZ",
  "key42": "4gA9cjNQ8reUAc6v4yDGMYrpxMbfXM3LMJEsd72rwBZNX6APtqJ7zMSvDYJ2yJJAh9Rm6jMrH82JLuZX9dt9NVMP",
  "key43": "5Rq2t6ifyJhgrGmPimYVqWWjhK58W75BegApi82WjJyXjd9Wpa5U46o3PzCH1CujmfSTZWaGr8X31v8DFE5hfzkP",
  "key44": "48pqoAjdkyX6eVrSrug3dQWponeAnW1SvuhHcTEv6Zkj16inrsb94vHd5QaxfHhze29TexNqLRJRfTPL1MmmLYYB"
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
