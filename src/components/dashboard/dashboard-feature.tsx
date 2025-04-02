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
    "5KpfzB8EsSCr9yAuGtQ5g6FYvyp3kycQwaZK13Z2ED1foFAZ3XTsND4EdmnWefBH5PVZ3o8dRfDyyqaHTWgEFhty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HBF3Jp4zt6221j8aZ4Y7yB9RMMV2SF38mXUrZVLxnZqaMnNsnZTxH13qgAbqVAcgBKWFQhTxPUEVfpN9KJbX1Ke",
  "key1": "5bya4E9aBnJPiBWuk8jJVHtkYTJBTV4rEGaKWQ76zyNTtnndsa5A2nnCde127SFMSTJk4ovvnhDzNBieq4afmm7R",
  "key2": "3Bvi3iNbAmxXvfM9dBkAHkjfcuRpgpeKVAY4JZi5YkSV6wM4kUVWwwnZa32Fm3WuPSaroPuAwskvkZHq5AP94avg",
  "key3": "5AY9DJTewJDhRAT9gs92cN9Ztw7GyuzU9LkDVtd5ZFnTfQU5iNdD7txk4UZzfzpqDc62dUDuSnJyDHj3N6qFdCWr",
  "key4": "5XFiGnJucsBseoqCzxygVDaQfGuU2bj1CpTmJUDGwwMpsBrdKDoKMJKjWN5wC3fz3FUSEPiAAJkjeEHw838vqvEV",
  "key5": "S1R1Sg7E33RwwWzm5RtGgs7eJtLEB17K9Sawzcw9fSeeuVD3xyWxzD7ADiXqE4N4RwuPWzmGi6QeaQ7iXdrw3Zc",
  "key6": "2pKvqyRZqwf9iEvbBgGQBcWhSvigjvghMuN6ifJ681xCTP9WLkNBJx9Q4N7ESYBqtcedxWds2GgTh5Vsf4YryXFC",
  "key7": "xKgEeDUV8X1t1t8wgx5dkneLRQmy1PE5DfQhnYspVSNe69Gh2iz4VdAhRcPZ7WhqfjPnJQezrftjAzDDfEgVN5S",
  "key8": "2HHuiUBP83xvpvhAEuhg6JBQRzbPkdGr7HDLxdHaoDmVxnD78BZ6sB18aQPsVi2QwYU6eK5TzKfn9EdBhJM9heFT",
  "key9": "3kp6D3cWRDApPacnPnDieBLj8YuSb6nH8rvY1s5kPD9bhND3N7ZtKB1Q8uWWhZKYGQAnea6DyJgKW5PyXa4VGjTM",
  "key10": "5DqTPmzyQkpGktmpvP4qZ6CLFDqkkmtLhQrZKY5Jj1kFRdSCmd3bS6XV7n7hhMeyw8cgzMLzv1c5QApJDDurum2w",
  "key11": "4H6sgZS7YKUpo6kUfVzrRpimRoa2CS9TnXMYqTdCbsD6AWF422ttuA8QVa7gJE4KMFQTtqfvmYE4WvUe7QbTXuRD",
  "key12": "5agj21xjEvtNZoYMmSDfwEvnJYD2cj7qBKXAhNQvCuCCApu9mJUBiJHSoqHXJQFBZvzyik9u8qTwyQMsxqy7NBqr",
  "key13": "2zxjpJSKoLC1YxUvBoDD5vE8JVDv9fPhMtznX2i5b1h1fuLdWff2pyVLSSBrqqqh51xV3Lhk9wkAXChNwsCgTSnf",
  "key14": "TjEB2kbcepMmFjcJQL9ai8LmgxunqwpvxzAbYygGF75i59hDkFbZReBFnquD8UMDE1cxG6W5jTqAHUgygw6KQPw",
  "key15": "2GEGwuadiQg7kVYQdhcRnci9UfBkcHr82n4QStPa5qfXoS9tDdnnZH79MKvdMxKbqhR71kmyGPpZ4wVkhzaPGYKD",
  "key16": "UrffnyBAL9ugoVXsohXqdxdZPac8Gv3EyBZbE3A9xPwTPYURWEr1Fdki5DSFTrV6Z5M9RHEpKofGzgfqkhSoMg3",
  "key17": "2p9mxMQCw11fzm8g8VM6BLp1aA5iC2XKD5Q8KTpitn2ZpM9fqEuufbFtaAhwTgPQGugZg6j97XMobugfTZtk8jQf",
  "key18": "27CuFeRchrVmhLQbfCiYePKQxw3Q6zAoRkLd1EZxbHjeCAiNZTZiBRKSwLFVE7AoPcozYQrFwYyUwXY43FwqgMZ7",
  "key19": "5fXtE4jWaRNyw22NrG7ea8gZHWZgGXJxa6kdZooGznbnu2Ezz8LYn2cVj5o2n6VH3a5E7qxmkfZFkKt2XG1sKuwv",
  "key20": "2r4FABaVgrvmRmokg8LCheFURUjZVTLBvZ2zETSuHMYEfhZd3JbFyNBLHK8oQAHRqQmGwDNv6uKZzYqyPYosyr9p",
  "key21": "2K3MQgUE3ZYVYRUMt7XdhNa5rpvDM5BaPtqxiiiftWX2U6DmwJWEa7Z3MHTsHdn1t2rMzMpnjtEwaeh5zt3PdwK5",
  "key22": "5c1dkU8FP61dRpcyM9275vLRWtFRcgQ5FAK9cwawjrJxtQGwJgsGJ8hs8zzG6uCJi371DGezJnZnd7GxKyfwnnvg",
  "key23": "4DRYfGMwdTZ34r4TpJzqmGCRfWF9zvBgiVgGcixeqmFqtdQoL25KTGoG9zpJxvRLzqcg2Sd24BwdfDa6mXtPbfUh",
  "key24": "4VCrP7eh2md8xx1DMucKqt7BYhepPZh9NvSHVKWavwxfhuRrZJNcsvheTcf2JWzjwfpWqQwMWaQcNhSCQTwH8n19",
  "key25": "4zHF42hyj43jqd9GEnWDm4SG88UQtdfM5tx8ZzoPt594vLnADrUB6GX2Go1B5YfQguS2zCQ2P4dvhzMDo5UEaE19",
  "key26": "2nW6vW8gX4GjbWSv1DQzz62wRhrpU9nqziW3Sz4ucMGnWgDh8wGs2qa7GQMdn7BWAKZRVmEapy733ZyPkeP9dfmV",
  "key27": "3FWA5Zgf3zRSme9VJhpiuAfZxozUBXotL2JK8pCJJEjmQBg5a7m2wMQRMFqKuP4XBEyLnsKaM5RPCBDmKRhnVaBd",
  "key28": "2C6YUueXVzeU1WpnqBDcKwH46XFz6GUY77sLyEdpXtqkBgK5Tt1o4oTFLfHshvzRx92gdDHu5EssXaYykUmdFBb4",
  "key29": "9aSF71fkfyW2qjRdGztdJBewPHKZWXbsKa1LEuZb2LcwL1dv86J6X4ajnYHXEGyUvRXnFT7RYWBnt2Sesxp1DgN",
  "key30": "228WuTWJ36SmSFRvkWcQuyh4DFtePSy9BSWBcXAQhZ1ntkGDeScvJhqrk3Wo152ctwbJqGL9oN83gFe7Zy9DFBSZ",
  "key31": "3EY92Sb8FdwW4hHtPCbX1EguWGq3DH4rDByrfsBnXyLfW12jq3Rd4GSWK7ed7wEtjxgwyCtW9ohv3Yv8GHw6wAuX",
  "key32": "5QXYi28W5ByKkrF66pnmJXjKq9SNr9mPE3dYy7zZu4in74mvf8WY2NSnS5PWM8w3kwTCQg58KgcAzQBuYCZvBFEC",
  "key33": "4EGte2U7szNovMPfTeNKT74zxag4MiPYVfiEZzcgamhiti4fs8LTDH5jZAUNWLvyGxyEPF5WNNowGiw6VFfh2QZ6",
  "key34": "3L37pLrcTvkyaywZC13cuToVzi6m6XojFHm9VvP7ueoYdPQTXAqwbaVV8sN6vHLah6AC2hpDGQ9v2momE2FrxAW6",
  "key35": "4VwYtQPoQotNKNhwUXD4wEV9CDRzk3H1Fjj2dds1bbJY2WHCaUvLkM3Bo5Rn7U88s79wPFiTzZD95ZRUacbqBfJj",
  "key36": "4wrCuxNV1nempE4cVG2e1D9ECr1JViL9GeZ3XMkUv2AZ1bw2WoVdqk7D1qWgw8Sk3AVSJraPVubBmrixkw1W9Be5",
  "key37": "47kUHL7AWRuZXQQ3ZH29nkFSEDPhBWADLN6xn7D9JH96RWHFizFYuT9jWqdSWD7HzceBU47XRgqbzV5fWgaMqvHs"
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
