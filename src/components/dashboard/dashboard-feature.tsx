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
    "pPPPcXQUbUfr4ZeQQjWYKvea8dphawYYUC9swV6E8PRe18E9CkxkN6kQpfqWBKMJR9dYy5RfJNQ59yKENg3VwZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e4XEeS4mdvuN4na9RFLq9qQkZUKipWEomAM8iiZuP2ej1viUgGpLSFRnsp1Bqo634JA6WhGjF1dG59EsAUShZVt",
  "key1": "37v87sGzLvQ1kfEAAPiVkFUw5ABBjMb9UghFD7h55awZwKE5ThhTdFN71adRYf4rTF9aJLxbg2YzXzieskL8u8GE",
  "key2": "GcmGoiVgXhL7z8pvvNMYqcMPWvdANWgvw1xA3GXWMdWFC23Tkca8AjNkG16FWn5fff9CaMAEfk8iA4XHVULC6C8",
  "key3": "4ZK333kWnqtrdThYtRxM2uiw9pqftqqKNjo5RHYd9qu4xxq8t2V55cv8JqB4P7ACLospK78LzKyZBNMxF8jUWLs4",
  "key4": "2CMjAYcibpmnAH7ykaqJfik28JkDA6rnC3tZgZi2kTLK8ZFmByTmn6ZWeQ7r39sBajxSeYnBdKoGwBmbeSBKBEgg",
  "key5": "2nFQ1iLWKLCJ65ZYvuu3SmLhTuujn4ynLi8FzCp1GjDgEbi5SPN9DVWZx1ZSBc147m1UTHm2ULBunpCZZPHcF737",
  "key6": "5fA5yRouAdxPEvJBLuytiYjie8HDNxMzdLMj995DbAseeZbyDJMcFvFQiF5ofXvYU3J748cBCAyxgAhgRMr6AmP4",
  "key7": "2WhZbTV3jnME56e4VA5YomSf4cvMDxP9czwheVTEbJRnsaXBWySwaEQkPXWYn2u4tfTjuP82hAXrJndRwGSAJvKk",
  "key8": "3c6FAbqhodgcaYSqnB58pxJ445V3Hmx6LQST5jGJxnvsVxBAUS3SkJdETUoXUezGYGcoKyMirux8NjR1uXnwK5GU",
  "key9": "4s9jkewkd89QEqc354Jk3bCHP6J6wigyw2JxxwXegYS2n9sksuZnmyxkuVTApQAWhVMLhxYP7wLU8B1Jttfz55YJ",
  "key10": "47f2MfqVGWCbqzXC5yfzfD5J8wfpQNyzn99JD8Dc1SsqxHTnTAmRk2JNCeFqWXQso3fseccdLMRknR8CKgEjK1sd",
  "key11": "tpxyU4iaoPvBg2eEJYXpSKHntGx8XhD6kUDrdGHYPKdYuKu38nNXUNrCYyjZFjvyJ4twpniDpY4U9KVQvv8mQMc",
  "key12": "56zULtpW7yApiSs3B76qy7eJoj84gAPfXY2DTsVLn9py2xn7X7UgF4skGu62SXRDBasEfGFAUZEwHYUMPER6aPLY",
  "key13": "bbyc6oiyGKrg6z5dGKifXL9sLTSaa3s36jVMDadtXACGeVJyA5YmVanTcQCXTDJXYWbJWZsqCgCb3dd9wcVE1NJ",
  "key14": "4M7qN8wtRfKbNEqT81gdRmedUogdP88oE3NHRdZA1cawjgiRxn63ZgnTe3NpgPswFfNr5BnehK6sLJ1wGDLKu9RR",
  "key15": "4y9XteMxQryg5EV3Fe84qLdArMAxa2kysraQfY219dzGnSLjHYjHJpXNqRFJViRQVcbjuLkwshL5ubknrSRwNBQJ",
  "key16": "qmPV3MJgkvM9Kxfv3WKqcVBhtkLPeHponKgkDhehD1Wq9gjustzYQkXfdB4MFawoK5xsSntoG511WZDnv9emKex",
  "key17": "3Vw4HwnH262b1syBiokHdnEQXbr3ZTaQuap8HKSUqkadj4CF8TpUnDuCoxSh8ACXLEfp89TiQhR4QzDNA5KRQuDm",
  "key18": "38GfKHu5rEnnxbxkypiKE6ipYz3Zcwr6yxairWh1K2TufKGwZbDDA12NXeNqawoaUkAdQnodB5enzTyqMR3JDNxy",
  "key19": "61JrsHSqYcoStnfPVKHJ5cbuxrgENaF5s3cC3Jp7WFgoTs3vMuRdkZh6yaURBKBGUS2WDFxJExaRRoNLKGqDWwKC",
  "key20": "4i9Jf8Z2dnV1teb3dNJn7vocFqdDR2dMU3K247YeDGGRWwn9gVwKSiAcQJwdEnSPbrRaUVnEY7KyTXpzqkwGbXKs",
  "key21": "5xubPmxREkB4QtHb7enchLeSBoJdZch4Gwuqff9ED6WYiLpessrmZMTKPadJd7qizhUyqH1GTYQpSdTWS6Q9Dk7R",
  "key22": "2H165z3hGP8d6XZkfDNeYt3hhzR5457Y7Vm4GX5NEQAyN9Ur8yEbRgR8X6t3u1CTpRfHTfZ1s839D2apDybLqcJP",
  "key23": "4YaymxyVySebS4rM5z7tNgGjyzY2pGDyrKuZ3K1EJTX6ojWaoHobKjh9utnjpCBCKAgqN9u7VDvmWXh9pfpQf8Xr",
  "key24": "21yC9KjiiLNiAPZhQUcy4yu6uWhCxuJ3w8xtgN8A2Wbd7M3tagSVAXCXaMmS55zXyTkhUM8hwDnM5wYAYv55oge6",
  "key25": "WLWPcPeNKoZEz4XFeuZTbYnVEF1aBykiLSnM9x9DnrP1CZy2UJvcqonBgMmJpRNAihajYpA47Gejws8CbgW1Cm3",
  "key26": "5u6XxjUCacSKKKryUgicywbqR8tc2Hzd6j5rxsKjDTcPNucHrhdLfHd5RxcfiXBpY3k6SHrpim8pc3zzf9sVPxvP",
  "key27": "4UaooN1jQrdyShNHMwjUPMbACqrJVws8g8t1hyY5ek3LN2rcXVFjuyHNymcZSJpVPKGAjMkpWG83XcYDpdxyw53K",
  "key28": "5ry2KYpqytJBLuNnULeL7VdWVLkTfHbSQ1zHpi5hGzJGvu9MaNumAqSRDGDc4f14M938Ke6bgxvvnfhMHgzA47tP",
  "key29": "5EwExTVpLfk5JfikHPjLCywwEBTD8sCArw8pp33nPbZZGZXLStpwsCmAERVoRVGRpkLaNgd165BS5CYhtokQM7GR",
  "key30": "5er1KjqUfNaYuYtDYe1jJM5aF69vtgrEHAPFWyk1WbiDhzM7tGxPbQryTkVz1qWMzPwxA6TfgkW8EzYkXkbaygmV",
  "key31": "WrVoMzGmkZqEoy5oG8AM79prEF81RS1oTuV9UWiDe5AHFAAQuLDcCaBmLHwqSxYRTVBZgCYGzBDX9hbMLcW6aVm"
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
