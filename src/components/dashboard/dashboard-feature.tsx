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
    "4TtKysf3x3EGSgbhkNZbeDxSa9chjinjiEMMHLsA4PU4JLkNiXz3CkShznQXjS53h5tvLewVknsTKMEPFWpV69UC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6VEig2Qwvda4jYobDFcFi5WTntDsjhQRziG4bTRH3XjuwJsqTxgkixxEDRdKKSk9sFUsbFx1SivzWihBZU2BBJ",
  "key1": "64Wf3bvtNvNUPaGEg8cDEFgqdHLB6MgpaawnCsXDkpKTYKxChVkdJSsV2FE1Men9ZUZT7TJffFGjir7BHc5dxJgn",
  "key2": "48fTSzS2Rn54hAc2vnLqr3rUxpzWrBv7LUxpjHrSZHeBqk8Wz88wPTjmXiR7h2LJRXUAMEjYYxHc2s9khbHgdBQL",
  "key3": "4fBjVNZj9sZfP2ByELwS4tKLUcUD8HK25wo5hDsTciLNutbf1aZHX9iEYaA6BcLYXhHCwMfHXgApGQNnJAsS8nJo",
  "key4": "XwqzXCerUHJvAXwYZfcCs531xhaDaEHnGKkCjqJqur9UPX54FBmJfREPqJdU92ybrpVz7LjS9UXdkTpnUtzCCfQ",
  "key5": "2a7biTPA5grXcMJJgLTkqNhG8c5xBX43j9HdafG7xbfbhggX4Y4nPMFE9bkCba1XS2DYMBv6p4seBrDZen3n56ur",
  "key6": "38nvz8r7AnEVu7kux7A8nw8WFHXG3KKsQoTi6n2t23huB2cMmFjcuvPVSZsDu9o7NRzZtgo2BxbKyf7ohoyhTeiL",
  "key7": "2W9s5zhtKWnopZB6TXDCj6YrTRPrcx84qGVMc8yuv9m5wpjKmuewHMD8NUThiHaDnN1m6FBYBJDsvTuDZxiWsT4Q",
  "key8": "3x7bn8jUM6AhhJg8Pawr7ubHbbCNe9GyBJBC8GYBNLjAitqYbiN6MRMn3wxuuSj4MH5KqxQh8Md1EdALssuV1voD",
  "key9": "ntBhPDLWMn1EyExoem1Ys8gPM2AguqhUzkmWdu4hTwBm2e4KUWT27azTfA16QhF7q8WhmAMeMjG9Cghp4VCiKy1",
  "key10": "4yKHGEATVJXWjJqgs46hpKZguv8hHTyBA5f4NCcoiup92GKzoSKnMTwsNdhfKQMVV6oz9i5dNsQwqEuGVhfVYTmE",
  "key11": "UH6tUAWHd9YVr7jvi8FoZKwUXowVw9BerFJSGXt3DoCWMUabqmR7CPcxWL93bXPG86XiCK2K7RsNCRZP7mTP91G",
  "key12": "MDkfjb4WYgWpzKS1v9SQGsStgRxKk7u9wsBfDtySaRYkGagf33oAxj4bj4dhMQ8WvFDT35w2qbdQC9jKHmrD7JM",
  "key13": "5cUQgtM7MkpAzwPTySK9PJzGYENayQyPBdqNWDvcSumLCakx2JmwMwLSGsLw2CEHQ5abLmumTk5MyXes8xs472iH",
  "key14": "2HhwaFU24JFn2t6wgVQAt2P26PkT2VA62t9A5y3hP78P2f4T92WbU869jvTdYVrLLFLNZCNAVkqTC2F9rxb4fbLF",
  "key15": "4EVCJ8hLWYQ6zzUdehgj9ZB63L52MKCDNexRRSKK4FxBBgT9akKkS2FQXG1LMQ2NVPBRhFhAkqh5DWFQKLKMku9f",
  "key16": "3Hhe44scE9xM4k9fQFxZCePtnBu1z1nwrT5wNQNZje4faGkh9kik3fFkaKqNSpT9Bb66V8k1SFcDhBLTf258wdLT",
  "key17": "5uJimDXFGjbV7E9Lb2wmTYwATKQ7Gx38YartE6p93kbrAj6JCMQGPN71mTDYaNpVK5get2WyRZoP9YqX3vpmvbNt",
  "key18": "3g21Vg1Vqec4vkZdQWe2CkhbStvtp6rcAXUWZxsgTqQUZCYb9v1JyJ3iTfdd5RFY6MEHqKxxTNd3HjBzDFx5ES7X",
  "key19": "QBcSy8tN287G6bUm62ubbaCFhm5Rj9NQuyKq3hf4dT4PTZcg1haQvMwzGsBkkzsPexT1ypyJfWiUVe78wVeBqGP",
  "key20": "928gyt4mFjm8sz2QVASnHNrQHsVC2Lidewd1UHDrtCtvL7BZDLNvJJSbfwxokELDudtyUbqk4LFQqK1FPaA1sjb",
  "key21": "2BQWk1GwHUeJ7fUiXXQzWrjMBCJbZFx5vMLXMNmu5CyHAs9PzjLE2ovUfiVrL89xpFpX2kGTGZM4x4boK7sGDGMv",
  "key22": "3Sa1ZvHV7NFJ2oDxTfsEzTuuDZ5WBB2toYHCCVkVCUH59FWPjDLcrQ1374TUAVZfihcqiimyxrLk1iQJ4upmWSAs",
  "key23": "VuVVLuc8kxQu9okroNkm57bvaLNq6sgjMUWwm2sGrgESeMNgpUwn5V59DtdxNxmmT9iWm9hzp4rjMbX5K7imUaK",
  "key24": "3p9izRgMRNNJ99WK3owMokRji33AWJ6Z6CpZFoouewj1v8PT7YKHA8ftT5kEKsVc5YFEXh4wfwyq97TT2rG6Qwod",
  "key25": "4wKVWv27cWjdTaC6sseKeyJg3UQ2JjfGf2fGS4eMsHf9L67Ef4STiLs9AbQAMGXA9mhiwpHwLEE5QK7Wp21wQuwR",
  "key26": "37y3gRgLUd665Bg5ByhvfA8jCaBqeDdRLoFGxXG5gZt3xMPKoKyPK6LGCRVforKErJoabs2syZBHY59UNShHHaKL"
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
