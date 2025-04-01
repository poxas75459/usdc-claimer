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
    "3JsgVeFvQ7ncYtsJggRYmk2QVMD9jm25Qm7UhUaF4SNKh2GbQL8gmyuTgncWm3nRqDcjjqhRZs9gHiT3asZmMp9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PwVme7ew1QyvJRwuqWidDCgQuuC2nxhYfHAu9Qf19pJZJNpnrcSpCMxPou5GcuyCaxdQxWD826ymQ3bQTZJAyui",
  "key1": "3ApPxS7j4baXoPrUSZeHEwULDk9sQADZK1MJaQDUSQvCprhH9aw4zJ6Dx5RjbTMhpqWYiUmxZTAv6tWTezDsboR3",
  "key2": "3aqVc9ajspguSG8S2mQQcKcaxcYNRzuoFWzxcZEvP8pfovuDr8FkqcBNB6ZnbNa58NxyUQky4x1DCNSwdiGheyqX",
  "key3": "t9XQaR5Mc3DxyDH6LKtr4pbETRCynzxsM9NRaaSbXWtKRT4S7mZCLiwsX9jyXJzRQMcKDEQKs74mad5t3dRxjHG",
  "key4": "2zXxWkryBfTARh8SztxPx24MuKpjgW88qkntoRvwfdPxT26JBJ5M35L7D2C9zf7PSjUijw2MsqwRb4aW9pdcvj6f",
  "key5": "3X8G43UebdPEvBAYqssa2EhHZnp8JGyoH7Csu79Ddb3pJBpTmJ8qrMToH7cfYGDULRtTFwnWaQDoaUFNo8RikTbY",
  "key6": "8NAptUeWRf6R9j39n7epC4ua7pbSWMRahqXd8UZtuQvT6oEGvEN71EJsxF793NqP4F8DUSPkCMtWDvrqWbDGGZL",
  "key7": "3RCqo4G5R1Uj6Ub5qmQeUehRu76FHG1HR6SW5qskeoYDrjPosDi6QiqmLerp7BFKV6tYkGi3rK8mGdpv4CCGFrS2",
  "key8": "59jzosHtgH9Xz1fd9HM5r9itagA8c9jKtmxYxZzmryZXa8ekc1yUbSzGg7ZYhPGw3LL6AHVMhYgpqwh3m5xU6ZXE",
  "key9": "y2JYHSz8D23WNeudQb51iJCxVi7TqW3jBJng9z1hRJhKxnX3Ste1QFFuVTLb6DDMixSCGmE4VspPRx2wZJNLZbr",
  "key10": "5iNXXfwPbGU3C3ij5TsAdBgWdvhWjgnM4hQJfAgs2TKEuRWSwMg46Bsf3Mbp455GUfbhUZpepymqsHM8UMnYnf5z",
  "key11": "3gsYV6gpvSNAfygC9XRf27RVDrzLkacPWJgg11aKsnZyhWjgpwJhk7Lr3kzL9Q9AUM7iU3GEVxzvN3a3EZtd3dke",
  "key12": "hv19EqbEknYhfYvF6BTde9LjBEsXN4tsd7STHpVDfmrWVm4ZaR4Sc1ygc7MWMJvDmbHHqnJjj8FRjjRCALFUwhQ",
  "key13": "4AtrXFq6j3byrnDUUTTH3ZW6i842X7VoCs7ZUrS1Ufn6JoQYdCaDGRTfoekn8D2tFgV4SZMmWQEhx7hduY2ZfH6v",
  "key14": "2sJp25pAnFLp2Aa2BFAHFcexM1Ho5ULR9YPvJGTCsKnptTTtGXbsmtM8MmH1rJmajZ5PJx6TK9x61idZMmF2mBkb",
  "key15": "5vRWKFuCLH9QHWJjrKGpATwRo8UgnvGcfdd549kzPijvUkoWuJsEZZT2u6WNZgsezbK94SAbXgCkgewRD4QzEVu",
  "key16": "xyjzQR77hx5veH4yA8n8ayDd73QnFoCvx3YjeWNyREgaipia4LMnG9W83Dy6KaoeALG3TqSPnjzbwQ2PXGqeuAY",
  "key17": "z9KhpHSSmH3UnxtQEetunMshsf3Tq9VJCr6gekGXm4XHmaPJFjScKw75PyPskGQjdKbmrSCq125GxWv9NMWvuUF",
  "key18": "4JCyfoAM6eC56o6PoUxCQzR7po7XdNBBre3658rWHvUv5P2FrDowokCcLLxytwmiqMtLYrmTThhYZccnA8dfkSpm",
  "key19": "5iq9mUPU29DqhC92ftbANC3rXvS4bbo4GxPn6gcqfSK4mTqGis6nd3WJguKsMVdSA6AQ2PuuEuT7XpxjYbejApJA",
  "key20": "3kVUAd1n1L7SWSiC2WP91RyFm5PQrmP8c5Lru5Zra3unscowGsGnYeXwR9ptn7Ngz3az4LXatK2N1sjEJbbGekFx",
  "key21": "4h15uA4tkC3v6H7CZW71LYVRPmXZxnCg1eN3vxFtj925PCRQerZ8mcVBkSz1qTq5JZN4eMcFyyzLgf8JkMVcw8VQ",
  "key22": "3WRbRgq7mSnAB4EYLQ8pXqqHUV5bkhdRpsQ6Bkncy9epjcUHzjWAz6mFKf1uMySjBc3vTeFsptEYhkxDwqQ8zdWJ",
  "key23": "Z7YJSntoaMK7vpnDrVUWnQX5B9AfbzMfNT4knc6jcaraSWe6TCpVuTfPmaPZuLWBpgLFai89z9wWsa2Dav7VHVf",
  "key24": "5bGvrpG1BV4uZT64RNsjmbseW9q3mN1hnchGkdheTRqaevYSGZUTEvEzwHbMupN8CC1Xv1pK8qk9W61hdjRCnm1i",
  "key25": "5HU1SMDEWv83rogoXh7yAxqfp7XJvV64sJtLe8LuVaSEJNdnwT284Q389BXMLA7Mmv5NwkAo8yYVCxnWJnrBM38r"
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
