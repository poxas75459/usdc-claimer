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
    "5AA2YEMSP8izzpjg4AiUzoKKbueuWmdwroTvwCquW71vGd5z2BvgP7oLTFJF7TWsaN8JvHELZh4qQeE7n5zZq4kN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAUgonobC4qazATZmSBixzcpZQjRxznv199nWduszNpb853PgHhMjSck5UxMxiQzrS1pVLRiwah3zD4w1cGcqBA",
  "key1": "zdutwwEgrKoX8KS4MGzN38818rcB2AcfQoUfuyqzke3nx67913TwBFtQRUYUkZVdNsbPunmQxRHQmQuBJZXWhvP",
  "key2": "36xDdasAyEetr8ccajyGbJS4Yq1AX23qF7Zjnm1QA2fvqx5UAazKMqAH2DubGxUPZEdfVeURRB93SoZfs7zaB42r",
  "key3": "4wZJN8aKQFu3pxcR3PMiaXmdbbFHQEWBgfTkAofrCnBAaGK276E15PnxzjE2tYeGYodPujh7C1nG71jnXNBtoB33",
  "key4": "4miDQJswTL52ThLPf4oJzE9HP3H7wZw2JStP5g2P31mXCbucrjooaQSHkErtD4iUcCSr3NHESr7ERuhzp6RMAraR",
  "key5": "3hV8BN1UV6rNmACWvSqpfSnuPc51AHQprWFUpiRkR6F3NExGHxd7Bg4a1ozVxRh8rELE3kysYXyD9KykSfwkTjBj",
  "key6": "3yZkjdNYTmLa2WMMW5agGdN9Szmtoxzq1dvrgQoXvut4QcPBhrjDojftPQAd3efd9GtDME8CxbviXHPbADAMx8D",
  "key7": "3DXfgmxe8WMfB32XfBSpsncWtjRsnLs5wXqWw81685q1yShrUoS9juKcpquf59gBWyyoCBCNgnTXBjbG3up58sJW",
  "key8": "4nc4NfSckUKB4HhrSRUPEbaJrUWBcRKmPzeJLGZ7CPPBhq5fWuSxz3AERYws1SjxfCT5V1FBqrFtmfK1ttKgCGBL",
  "key9": "3ZJerqDhJm9H6iJXQddyZqkgeK8MkPQqodSNntyfXDU3ivfjoMsazFHtw5VyqXAKktkQKRrvzJ54EvqSLKeuVLgi",
  "key10": "4ZqpqLfNzL4Ti3bLJ2jTrZeRthugjh9itemAm7u5fpbaCFu19LdKuZtjx7dWufkx763EAFiFDkgHbcHpXdu5njWM",
  "key11": "3TYxn6WzouKfWcKRHDfjHJFVBgrdmfC4n4y2QVLhxKy7tfH38L1L8RUn95p9YGxsd9JbpcvaUqb2HCj5dRz4TXZN",
  "key12": "5dHgSAs2wNMi2D7uHE6huizf4FviWBjaK1CD2oeZMiSMFi5AUqDoDUiAHXZDHFD9YABdCHQz3osMMqaR6T9knvgp",
  "key13": "3J25DygHxfdkCrX2tU2epKmZT8sJZABsvQUySv36bT2mPxQa7cF8krNdjy69C8VDxj2EQX3PiytJf31Mx8V4NLG8",
  "key14": "33XF88N1Q9rBQGeCpmAPfC32jB1rurxRugZyFKbfRVwYMz24foMPKYM2zTG1uY7z7dTPY7vPZQKbFczyRE4NAGRo",
  "key15": "4TEENJx17izdBHyDLvWDoZaY8P26Zw1ZGeLfb4BVFeNiEBw2zvdALRnpbyU98dXvFuQxqWj7MFN34uoDHVG4L33D",
  "key16": "4kXgnXEk1gfKPa81jUocsBnBmAvFmxACd3oXu8GR7V78vAqXy4KdmKAXsVFr7DZAv1QQMpCpRmD9oB4ErUirit9p",
  "key17": "5Zww1qad5D2Ahn6X6QxrRirreowQTRyZLVpdU6Sqb7oqLkMTVxc8VpZDSuke2rW3U8Q16E9dhX1Qrewsx2f9duRH",
  "key18": "3qWaKEMqcM9EB5jNtiJZY38odTV5W5y2sHKWg8m9Lbu5PNPsYqGQ4jUwa8aBjdGeG5DNwfrCPMmZvXXaXU3nq1VW",
  "key19": "5D96gPbJKiLbqNT7WiJrCsaLhqfjEb4wZJ7hPtREuU4MiPH7oiaUboyckrLdm7WdZL4uYrc5qmr9Ee3nsubp18vF",
  "key20": "2ThquGPQiESsJH1uCKww4ux9QdXFQWHDJbx6h96DTzRVwFDQrjmQdXDPeLoAfKoEP5CvFSbKKw5CeRFTQFKyCaex",
  "key21": "21KVpwgaJ6z6xbav1av3MShYcttYN44aYTrj42HTR8fj5ZK5YdPE7er9398TVo7XFwbC8ADSCywr4hzg8CnJLPi4",
  "key22": "53XjUubnP6uJ51dQbX4vvwA6gjvcgEoGvvpXrz4sYD48C3qJ52QAwsDFq76FX5J7eSFLhDzk5M3cMTBoBYA2er3q",
  "key23": "4YWQyTsTbE2c4VmVVvx7wpNxuAgau7EdtmK76rGNukVZnkcLK8srBxXPFKx3oUf1SDfK8CPkcY1nEtbF4AiYrkkp",
  "key24": "4XCwhz9gRoYptH4uYZn89FpjkQ4yP1uj7hBThkNfwSRcCKGXKLCSu438GPSeeQhdmumW6VhBkpcUvrrsDkmpa2bs",
  "key25": "AEKzg22hh5sw7xGMqLoyZ3Ks2HYCRzFCv5cCoTKLrKmRiBakfXmTY3VZUYubYPn6PGF2VxjLD91WErRgFGd6xKw",
  "key26": "33u7NxJkZ9cJwyMySXWd9KBf9Ss1YvjvJMnZ9X8fLpRvzMtch4M57i54MPFxfc6rBHC1nmjX7Syi5xjtdjbXsECM",
  "key27": "3ocDAVznDSNwYjrZQvNx2XHGBAyJp3pQE932i3HuEiY39AP3QkkJdCcXXD9Ea2LZnZ7yNT9LQECeuiahSiDVFBva",
  "key28": "4GVSUiatQ3PQX8QkW4nhSwumKHGTvy2deGa9quaFCz95tnLW57LL1Sfq37qLY3DjAFG3z38ickdCprB6fnS5qU3",
  "key29": "58vmiJMAH85rigBRMemChvnQnkmpB92CvpZZb7Cfvv1MtEHo6caLcCr6dQckycApPpugReuTQsYHsdAaajGVqPJ9",
  "key30": "1269X5Z1AJapwX5nrnjiTnp3LWLx7tErpTyvwA14iTNgYws5zfGt9L7un1dZftpLA6B2EuKpkuGvLhNHyZ4DQgLG",
  "key31": "33ZVZeXQ3o6wUK6e73F3wFrewz7UMe6rVbihiVXTgw7ncRV17U24b1GPCgLCni9EL8ho75VH3eJAGzpNunDSnvrF",
  "key32": "4q2mLxVb1bEQYP99tkBywrCiJUCUyM2i8gfzvzq335hopXfjueWh3qiFHw5xgMBmWMAdRUnRUuZPAwxmRJRBfZnV",
  "key33": "4oXv96SYmYyJTr1q51iyoyDnYQcRpYeQdvMRsquHLks9JXbvWutqxoFVJYUim2dwYa3BF5WhupcSFg4AcoYj193N",
  "key34": "4fvdm3uTUda7dJip1gV2Fs9vpAJmf3ZxgTmfKcY3EVdh543mQKMgNWqKnipfQCHQhe7F1UHn2uA2weoAtfx9piAZ",
  "key35": "4LpAQ2hdTbUGHdrxqdNAWf4CDQ4UUEHuXCK92Q6AtghHH86AHW6vTuEH7cCXF2hFfvGAdF4QbZvZydzG4mGbADUU",
  "key36": "4zFFYxE86sQrASc5fWpWvELRtu4mkgi3qZ1R2ENEk2nEcyJEo3Bh6HPWZZrdfx8StXkrQTcku8YkhmidZ2nyJzZU",
  "key37": "3uhGWmMgYBSfJ9FpFg1sWC6xr9tQRwdUKoAfZFWSni4HJJnFPYzAajZNXj6TTFNbStfnqYw6f5ZKhncg3VzKoTUn",
  "key38": "567tC3S1Ss2NKZnoz4zkXbAx7z6jKp7mT1D9kXK2w4xBLCm3EbtzJA3PFgwAajvo2cJDZki2iDgjkaCygHb1wj5G",
  "key39": "7JbroKHwMoaHWWoL1wm368iZJqSkcNXvJ9597cmh4TG3watyXDFD4nU8cTgLmLEKmC41A6u5ezZov9mTStoLG4h",
  "key40": "5heH8tQpwXK7kiM4VfH2e2L1j5WawxAK4pTRAJSpV8vqZS4ByMRSmSnEDXS9YmEXyrT9urD5przzr8z72bPTANmS",
  "key41": "4wFaKE2XRe4H1efnPM7y6wzeHwabhYweeKP5U7795ek5frJHFxUWEKSyYYX4SuQ17zK8xQNWLhmaFDFkXpsgrF7u",
  "key42": "5JW8L8BfsWJLpi8qQHH43A6SmY6kz3B7BZuxtGu5G8u4a1vQ6xUvimpUg13KrqHJXJiRsAjD35ZgYMhet6CmVUQ4",
  "key43": "31nP8WHzFaqxgV8ZCc63JfVTnG2rBKwtvxu4wQWLCSaAtvzfS2x4wDmxDCtPG7NrBgbCDdWm3tQxw6mSfNigGMLD",
  "key44": "4pUX1p3tMJCZzLFiUKkqmRzxKAEztZgAwUihkJfonVcxN38BfsYiw2TMSh2EjHECK25amFCpmpmJYyd7MM3BGSbF",
  "key45": "JjBiVpP9Ntv4FACGugycZ24HkGN6G88iQyLY6okfUpswCPZLwRKKZSt4NDhTe6VtDf8Gn6TF96xzaZPcUFEJzkS",
  "key46": "318J8z49N6EJgWKe3idN2h91zyfc8y4fmFgJJKVLWCpyu5ydusPcjkuv7Z8EJDaiMCQceNT4txWhp6QNwqbN6XTN",
  "key47": "WHpHwpzSj3NKug8MjWsX4xYGiCtPp1YkvTv8zqVvHUu9c6nwU7n4B114LGTxRQgRDpXZfsCxDreG6FKFqq5eKUo",
  "key48": "4tocTx7px216qgnymgSKXovHikiAcaJt29L9AFXK7g9Dw79fR5WPH3fsfaSXtX5Ktm9jDYF4nCntAtpmoy2Mvxgr",
  "key49": "5faPFrvi2eqB2zh6vjw6Nmx7jTurdEwc6AAeW3F6g6dvhxmmSV3bvjwMH2ZsfrtB2CCzZPuvC6UQTWbneFP4yYvt"
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
