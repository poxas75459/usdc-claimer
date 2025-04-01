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
    "4TxzjALgT7AZnx8AVvf1w6JXa8UtSX6eGZbLxRy3aXTi7X3hY2K5dEpmPDn6ZfDhSE313EsysnoFbEKd3LgyTYoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49gFWGu6H9Y6frayhHKGT7thNVjoL9ZQpXuequmngWCYSxQ3cVxXVFzt9HF2iPNPk24NNYHaYRcV4fbUxc5H44zm",
  "key1": "4ASWjEYbGjXvkhQAwbCrGe2LFk2yuw57xQYvRHQ52c66QVTxv4Si6o9DSo2BQA8YGVDtmuXo1ho5LMD3RyBAWtpK",
  "key2": "X5SGPtLfTjEoHRC5CXrc3iB6FKD4uTFig93gEcbdYpER3CEx2ybw83UEFPQb4PjBZbAzgnPUQdYQHVqCAJxqPEH",
  "key3": "4UKAgkTHej3UiE6o7ZfVi5vaQbqRTAMwe6TLSHpM4Yq5asFoeziAJjzxSkEvgpUZxkbakV2UZiNZmTai5xaojZZr",
  "key4": "31dXfAhM4Qy8NtyABcdtWQ4YVa5hMd6at3BabxU2fVJn4xyx5GkY3RFiPrQVAi7tSMeNdLEiacPg7NaSMFD4L7B9",
  "key5": "UW3f1MocqYKituuoeVt6YyMdbojvriyfipaiUo41Ard4ArMUF4xaPo5L14DtAqwALsmrqFnkbDvtVd1jgehE4YK",
  "key6": "5XbFJzs8vkm1U9KNsrNbWgoq7qynmo2f1KFkZTanvLuXoWFjsPyicMyGNV44NoUyKtkdzcWndvM7NJJidjE2pzKE",
  "key7": "4duMw9zQsZcq1BBdyhF5LzBBJoGVavoqgL6TwcgfdhNvm7nza5DYmPu1o3anCwjCa1JhKxeziiUY26VjvyEjJwq5",
  "key8": "5urX4SgmMhwL1t9k5JKCgSKoRZKs8qC7WyMep7jbKydSYviaNDrPoxBdVQoN1MhteaSqdaS1NRP2t7JCrwPm4eMb",
  "key9": "5RbgmGsMBzyXq5XFC2e7psdHDeiXpxKDmBDMDwhpU2kcyHafY4qZ3u4bukgHQCdCGQR93EovobWZymrr69nzRkt4",
  "key10": "3ZwMCgsq8KZvzY7SACaM4XeB1qngt5vNFrWnDc9jESyRioFj1Pwz2W6okhusS4pWngaenPkvAQQBhj9VtJAJaNhH",
  "key11": "23kuFNfAb1jDh14XHDNPLDvTviKpmzVcyXjbiHm1WzfArEtMcU3ZhQWQ32hmhY74dxF55K13Dey5ngpfMvbgeEwH",
  "key12": "5xYTRmL4u5Yc4MNsGhcXwrBtiyneqQmMjKGwixHCLiAFi6TJrUPizsDcDoqswU6S9BkkS9nJPkFkGN3qei27qXoS",
  "key13": "3YM1f7Hi6ccLwcTYN222eRJKiMeKcKCtkgXSiD8SJSXHUZuZnfz1ZNtdMQc7gjfvGXu3CmiGi56kb8EbvZsd2rH4",
  "key14": "3RmKjVxoti5tK8WTQWZjxZ4q4Ta3giJUwmMpM6a3caTWTBkZvUiTGwn73gAxddcvTQJZYinEpENXcLNYRMXhvmMx",
  "key15": "5XKJFQ1pYP2SR1Y8vMhXAJ4K16D4SJCvTSPL96NT6kVyFUkZUBjFisdnXVwM4SKF6X7SBB9HViAd5jkkD8GrMZM",
  "key16": "KBhtzXbRi3skbQJy1A3GdPXaW5nHdQUvkR3XW3Qy79BhwzEf3hrYyVoiaocgsEknwxcrJJtPeymi5yqmjXP59GT",
  "key17": "Fvvo4USEFaWTVG83yZ8sAcRbMxuFeZMw6eGhGRMzz6Kg9Vz9Abdir3yhmxKDeJPqbyYVF29L64inbLYLGN32q4o",
  "key18": "5x5QNxXg9sg3Z3SgG5kwbEEs8kKdQAofZSR1WGW68WVRZxttsuUpab3uQiu1bCve6MT122CE4N9yDu5F4SzSwnRr",
  "key19": "4BogfTiuCnPTyodY8Xb7DXGxpeV35vP3hPfyYVgd8GPy1aKmRyUmnn1cEBNEB2MgXTemPJLNbW9Yg8r9ycqAxcnb",
  "key20": "1jFegvJS4mFS8Y6Qjmfi8BRfjtJQkdrSYVq2pfpBmRmqtNyqaniRoT9At4x1E6kHaHyHCg5x2VQkk3XoAt9sj5d",
  "key21": "4jys3MuECqZZy5NV94caSamoxZ51HAsJDcfbLB8Td2ZX89qf9GPVc4ZTZetYqKHTgvn5P1ntrECcLpjC2d2ESWLb",
  "key22": "AX253eFrfX7aq4Pc9gS51UedorRGNyUUtoZEfgpcZEUNd3BxT64QuMsESxdY89Ng1hzFpzffifPgKjUKnWracLs",
  "key23": "5bgNyWeoTpQ57DANaTuytT6LVXtysjPRsS1Gx67GiErekwjz7FSLedcebZSe1KYtoatvzhNduSm8ZqJBsUn1DqSh",
  "key24": "2zMY2W6yZcqNCyncQKuApqrfwQsNvbdVViixvvZQR6AGZ3p9zS8d3WjYp7MB4is2X1Lg7SVTkbek5ZFNmArMKUqQ",
  "key25": "2fm25SHS3bAtPTnZZrv6EiPo9x24zYyv39ZMBmatDDBmnkQttpCbvSHAsJwackgEMJ4gXBKK7bwmugG4LgWBC6BT",
  "key26": "YBETYoxgiNogsemaDLeF6dnG3sxcyBnSftUKedSMaHUxv4Kh8uF7VcFRcHBA4qceybRnqjqcdkY5WKrbqdjLit9",
  "key27": "2ZFFcY2PqXJ59X8deGM94jeS1mEBHSZZiUn53YNYU1ooQMyafCUwe5VhYaeVm2nRS4bgkUVNz1YgJoEzfJoGyWGF",
  "key28": "3qm254aiDsTfU6n3VAHur8JBzwjrzqH47wYUiKKsdzB9T3oixDHGZdnkL5ocPQQEkXVvfBk61zceAni35XHMRMwL",
  "key29": "556uUBghbXprQKsL2SwsuCC66CHGuRRdPJP5TjcZwpq5AMFBgEXFtpEeaRVDNBhUi3wGq1VDqKdSfvpaa9Zc1aP2"
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
