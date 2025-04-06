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
    "2Z7caGLMw8g7GapcS8QuqSBtEbG8DsUqDFi6JEhKoBs1Ehh7Bx2M5Tn5mdsfNRYy35ak6zU3taRvwZX23rmJrYEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "298s8ARu8YXNZkK4DHek79hgkkXw7RWA44QX2NxXGWwy261T5nUtwPxZQnitPHutt426TS6uY3XE5fxso4rwN8Tq",
  "key1": "gvJjSdbTfEmkqYagKUKNQmzFbFXPw81Sto3q9ywHZK7uDiwa2wrRU9PfkWZVamnKoc2LjCN4ULVq4MPKXLa14x8",
  "key2": "5rk8izBhXRG92n5MnB8GezQ2oQZuAzpsxJmhYiFMWzxrsa4x18zrGeDn5KVc7GTshrikvuxge9q574VtqKCiKYx1",
  "key3": "5idPhjr1CseFagcQffg7bWNNoww8NxCNN1X8ivKKcAtvQMxzLv7h28XMouxKbREuL4vUhwkYwB8FWq8zWyZUzd6M",
  "key4": "2EVBQxmCPpSqzqhRyRJQcVez5pcmoLZHkgWBvxqGJuFNhvtznisQWMxujmsC6ihWXBsV4zs2ozWXGAqdAxUk3FMd",
  "key5": "2sazjh5GX54nkQqfy5LTmQHNzTMJEVYytkATEp8iFVWag871SqC7LZ8F9MQxGXWh7CvFojY6M9xKujd823MVxqME",
  "key6": "42PrfezXZWCKKkvcqapm3Nkt58vZcpkKfi4MYxoVg2fcXimi8Zi7YFCh2FUh6N3QrtZDPvH1mL584T2CuRVfWwdM",
  "key7": "4g3b2BSWjMBZwFKDNoBUUsUcBSCocPviDkGqjwJttpB3wZNbfxotqstfksTEysQPg35F8ZdPoC8ADwbRZsg6rjsr",
  "key8": "5SvL9CZTLxJgXrB8wcDCaXtA4mukju5HU3X7utvbz6WZvnr5wiskbDMYEoGzoDNKGWbQcuLRMPoF4gm84HjuEVC5",
  "key9": "yNDquCCrtVYxVzjHGn9QeoxZhW18LNYg1bTnyYP5WdX6TAkQdXQFQxUC31dNZEuayEGvv2Antb5nw16UgKrV5zn",
  "key10": "62XNpMb3b6seea2K768b2YDhzgtVi5NXeViMesLz3z99eZ6531jT5o4NPXSeUYbKAFhnKrB6aKvWdTU7sXzRg1Gc",
  "key11": "3CLBdSJoRb9YNV39jDX97ywc9iV6fFLWZxFbpnqVhUWYL3DikR96qF7JseNYEjPd2EozSeBcxjeTffnq6qeU9ckG",
  "key12": "DppwMoRkaDhwHkv55nFQj24gS9qEGDBLM51Ed1Vdafv3KppT8Xhw8qmYqJ2zqB6xurt2LbrJ5HbbvMc4iSK7PuS",
  "key13": "3us6y4SpU4AzKhGASLxV43GwDoJm1G1nifBfG9cs2uSYpYvyzJKvMiFaGvf11tvCzoKE1kDBharttkD5FcCGCF6k",
  "key14": "5JDjGXmV6Z1WMm4LLGFCZQYMAw4pg88LRm4vrBVnPBU16bcbbbfPMBARhq4WAcKVoRVfR9jUbPVdDozoyR1PNWMv",
  "key15": "2AcPUUVvKcsV5v9PqCj5j8sDQGM1rA3BtBXiC7o9pAwyy1F4SLqVh1auwA2FN9wfSh46AxsseFzvjqhDvuBnEDWz",
  "key16": "2FsLQY6L9xW5sxwxih7UujHxbwD27qFnaSsqi2XXeGxhpBMBSHXVXxx3A6NxFJffpNi1Mse3bMDAHR4KV4t2xAkA",
  "key17": "2tzipJqvWCae1tYwh8w5TvjaJB3PSZ5NYHfuZU2BBKexjjtQFQusASqnx38wmmCUN97h9i398eMh46iCE96ojCzK",
  "key18": "3oFKLtT31EjFb2445qkTGhTviuBHVNjwFDz6ForzTwvTiU7DxRJDFp8j4ThufZhLkEUdYTwiD2D7mN91WvNkH2ro",
  "key19": "5P8UcQoMmYKAzZW7ziXYDuMpwAUGMtmL5teNrULbZkhKeKJUh4cQXQH49ygGXGGnwG6Ko1EGbKQzu4ThaC4PC39J",
  "key20": "2igjEcEZH2YSgHzX8TAgrwE59Faofkdjt8yNu7yHXSVAKZvA24zBbzMrnTvCMasUsDLx8PE8pSBqEyx56aSyu3cK",
  "key21": "2ftBQeHskR6ceiH3LzckMvfRbbb9VkLtci654degsKKvPNTBrzj4Cp6am8Az5gR2eKFVgP2zQvdR5M11rFc938gV",
  "key22": "5y4RH3mavJsXft2PnSGVZ3dUXV4NbFnqUfs2ZoeDgi9NKo2q9LmTUTt9T6kVe9RrNBpjkM8bsKH3H8YsGSEo1pWs",
  "key23": "3ZPd534RZYpATQY7qQ4o8Yvdcm5bMfbegFe6DdE1G1DWHKwRFovnoPaMZaBK6NgRLibzqToie6vKn5VKMBYAm1Qk",
  "key24": "3ZN6A31u8Uz9z675Txn4Rw2GEU23qMB41KLtBTRU7Fqk7g4SMn2n9gHPsD6QF68X1bTBe7EibdYa9fZrgBMMptk5",
  "key25": "2XmBDPDToNaJ5Z1n7k9VhmbPfyUP2JEBko78fgUMgxnPxCdPo4DNDXRZGK7N5kS687FGt14Vzpe2KzUmPepeaoDV",
  "key26": "3JXUFGb9DaALnpaJ6xzya1vcJHBAXkC9K6N9mWos2rz1sKGWmHqHdKY79R72Bp9vBvsLrfED1sBB16yxyfn3wAKW",
  "key27": "5E2fM3gfzorkLjWTMJuSCEZx8JrTrKUpVA5QmuD1dAmc6DM95FFJvovBsmzE9B3R1c8M4FmjAnBT6v4fovcTsbBe",
  "key28": "2jbUBNatnpk26bXMy5ucfa1ZNBgyhLBWvimttVYmPQTFQh4BDyi5DhYPddSmjPZMcoT38Xf7Gm6KisjSeJU64vAD",
  "key29": "2fqHHTHbNcKYGKHPuAK2N4yBQqm87keJenuYN3pgghPY5mFpWHYAaJrsUNHM7yjUaVTShRYVLGnAD7DBWkTZuavU",
  "key30": "4GffoDKnwX5gBQCX9pH5v3d1kC7AyE3XGNCVsuGvoVqUNerzbi2ufGMrWZRQw8ktP7uGTAerKrPSHGe2Hq595b25",
  "key31": "5vpdHezpzj6f3AvCLJS6kLF5Ek5kBEmkBjX2a5h1UTnNSHVDn6BeY2rKMjgvsZC7gWL7bbXB1xJSBH2FUXpAUogx",
  "key32": "4ejA3P8AHCHKre6pF9cqFtShoucV6wARCRxAx4z9XFmRFQ62cKFWGejdesq4FTPgrKfWe55BgRi22UPLHRJCLK6e",
  "key33": "3dHmzxQdH2dkqhKPUKavjhQ2XDwYuUbyBkJeCsivL9D2KMpjz3KB7SUDjywhZMvo6NsU11KryietirhFAunipF6n",
  "key34": "2jobweHGHJTTSmemMqSGYYB3xqJabjm4kQMkKsQXjzuNw7rP3kEJwpiYAgykxdczFEJU6sXcW5L4rAbuM6kUTSvR"
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
