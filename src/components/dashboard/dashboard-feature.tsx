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
    "2ySucPWigFavBEoKdt4zLNjfKzcfLu6gmS5sioBsYf5aSJgtzhhLQZ6VHzKF4wJHQ27QtoEW3bA7etavoXNWKNkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pLiGBFTJxPXPQ99K5tdGpjgWbFv3FNKmGog66yDsJkU6zwobYHWC4x1a1ZhgEtweU1kAZGGPo4pMm6egkNUWzeC",
  "key1": "5Mvb6icPSzh6rkhgD1exCXCsrvyy4zJhFH61y1TSLT3wuaUi6HQWVqjsoYKomobrxLQ6XHfmkpohCV3wnZqE9yF5",
  "key2": "235bEeLgk575RvU6XFBBBAjQew2u16DbJX8onF2suer9uMFFthQuXSUBEX52Gwvt4mRyc7uZ2AGwty818GkrKkss",
  "key3": "28PfHJrQq41hvfNdA2Na7TSrf7qGACRpLegvAevQHbyU1hKmHRxmYHBG1ED1hCvhAAEKh3qjxCK8x7ZAnkkkTENe",
  "key4": "3qzXLuuuihe33ZuZPXb19PjJSsWZzMn8e48VJdiZ8yUJmxMnvwBvHtwtT8VPT7NXisuVzYwfKUhKCJWUyEVXfXBA",
  "key5": "2bhpmnL7CUA5XF1pGgG3Fpkuva9jSsWEaY5La2zUjB2cit6dxLVUE9xDe9dzJFHLNWejyuZL1J2LD9uvyt3b29g7",
  "key6": "39u139csteoGtgyXmfTaa4uJAqga9h1aTWxjAdiuXe6o8s5n7sLU7EeoosNki6RscWsN3bgvgoGL1tKkLfpXRYjm",
  "key7": "2vNEsswc6AfUyR8H7kbLMWLM9TCYHdQRin9yEVNsrD2UvnBXuRUztjjAFcKRTyc6mtiFj2A71gNqP5m3Rnb5deGm",
  "key8": "2bKVFZVZ8HMFXbiydaHfLBV9cosF9gFvB7PhycUMnjX5RxCKom4x4DNNiBfvMY9rKYyJ2bxbawqeyHYUodYGq5RH",
  "key9": "2ADqVXbyTyJGbvezdSz6jKeYd1tJ3k5UogDwNaVbBCCh7ZcCV3pP1uBTyFmr1hHLxVQRvPmE6gB3XsbppdEjoWP2",
  "key10": "22yamVKpRrYLyFjqZXggwTJy1cezM6m6sdaNF9RNMcRKagiuTP3f5mjZDhGdXJiLZZ7QxtB6fuCqy8ZrgdQ58HVb",
  "key11": "3SPUHRP5k2LqbVFkMZp7rtsSSjCRd5ERkXj4CYwSP1RCVBFQRA8UkPm3KQadvuw53yPWeHcAjt7W6hqHFb432q59",
  "key12": "57Rspd8xoaXbzrebtMeDHp6iWegj4Uth4WWKjG45Cj8vL8rt9zgu542Y7EbP4aNTAQQzVLs3TMqSHkXoBRH86Ygb",
  "key13": "2BwE4vmreStKKDikGSmt1baA3WXLQqar1PpHni76WgCfkyUsk1xx7gjgp89mXKtnY2CR61ACm7WbSq5ZHrCFo7Tb",
  "key14": "495BBtY2wVNTF5ZeA1HCchTa7JJ8Z3uubNTWMVLMADfSRnT7qLSfGfLiS4mukLr8je5QipJZY6UrfQyBrVLhVGj7",
  "key15": "2zbqdVgFdg5Ch8o1YK3qyj8X8A32SFjS1YmSd6bhSbU1qYWco8mizpPKggZgzXHZ2FAi3edLMYPc7KuaRWiNCpNc",
  "key16": "2sCayuRLCeoUnK5DSbKhFcmufa4vmjRFS2s7KiYC58RVfk49EgZ4VWLPZaQKSDHsh5vAGA4FwBuAjAbkVU5EWjHW",
  "key17": "4Qju6MG1CDdhqF4Wq6KL1kmnQX1X4yaQScka1D9X8oWMj2wU1KwbWMUX25HfmcymL975Dfc5paXeUQmPeEMvpZZE",
  "key18": "bxPAAXhsNahHqLxgoS8XzLj1uQifju6bjSPWMUxpy17PEb5YR6xGxcA7TNT8gAWmgrR5CQMHx3DnghZjvwEonWx",
  "key19": "4gX4qgtKsWR1tc67zLCw8sUMpmSGAbqc688j77fRNAftS9MVEmXwrkESrZ8atM5Yu53bC35e4mdUjj1uFws8ZdBx",
  "key20": "KyZVmamFWL7gxArkcQYcsHVKHhrxmcQBtnDoq54PmvCoieAkypfyAZvu2ZP87RaBz6LNjb4BR2aUceoBJ3CYsng",
  "key21": "3ukaDYhNHu3Tq52kDspQgretRoBfHTLCqZG4LTaeMvBGxMDM1gP9GAZJTeY4s1RfDc2RBTdzAxRez3e1pupbkcKA",
  "key22": "34PXR5afgYdZkzGHxWvUbSNmwf89xuVhEtptSivh4WcgtEsbnLNPsbsiftsUkV9RvMd8hPEdnvn7oQCfadnqGJPC",
  "key23": "2PBPYbh8bHxpGqUfstLSUjFGFKove6P61hgbojH3aNFWPZmaRB98xDvEieARDJLYUGvGHPhYdS95Cba1tmMjDiKj",
  "key24": "5uFxedChuVLo1TyfdajWiuRvR5h6z9snxw6tWUEoX6gtMrwvtMVk4d3dG5Fh15AM1pjQRuvvBreJBwrpsD7eLLMN",
  "key25": "3CZ5wDVFLmaaD46fiodNMpzpygEqmvwznh5ZcCv2ScrdJCPoWonPbYqoCEZzS3uW4AurKbwBq6zn4qRPXuRCDPe1",
  "key26": "3m7YxZQr9r9MrpjJT91JgMxNa7Qe1A5FJgebdWhXPdkLXVioPmRdmnqYPqxLR7NC4XWbijViT3GjUKLeCF6TJQJP",
  "key27": "4VBANztuMD6EGgxvFmM31N6oEYJV67QKfcM3qc71n61Axcin7wFGmyZFisZtpVZLdGMJjg41RV29bAvdDxryXfqv",
  "key28": "3vUi6tt4Vb9jqjQZcRMkYb7a8JPXxH1vMovUojJvj4FVUmVotfFDq7cPgzcaRaLVFuunTqBimGBGi3hUaw6QHxYz",
  "key29": "4P7DKZxibuAzZhBqx7PYYkSwsdzMZhRY4Fa7meLJTtLbG8JyVQXg8C9vAHin2ERLiPRtCe4abogJXbybZUdxLLUZ",
  "key30": "4rVhBFx9t4JF55GHCgY3eeu8VutsjfPcEGsurKxkvebGQdv3eAnMN8v8xxcBsApkpXQKGsCFdp77edDZnxjyCe1n",
  "key31": "WAQUQWeW2mYEDZEdc1ieLTAeEdpJvH7XurJXaMN8DMpKTcbo2dTsc3v8TNMLDgjgyRsu1hZy44GaaNwQLBt2C6o",
  "key32": "2uWb61jkAc5jEZfiqv6FN9CKbDsYzmQAwmzMmwPy7y5CHhfHeHzuS7V17qpPLDEeCEgqXEEMZz4TR6E7ypCMPznF",
  "key33": "5YHVRKVZZiMMgGSS5gXGMbfoXwDjxem18dz4vc7XyRVwMif6RkpfQp29gGSapusG8qMypEobder9k7Jcjacrdocj",
  "key34": "4snSqqK9LbjxZiHdxhS56VUcrHBvPpW8pa8uCtWpeiLBUfvMCgLe2UuiTSERmaADxhE5DKRfzg9thUQ4jBVaPDzZ",
  "key35": "1qNmQ74SMqakg6BMC2dJwoaSjLoqTeVK4GQDXK9uB1nYgZkCR3SvbVVGcwhqyjvP4uWHb7m5jfmpBxqazBXgj67",
  "key36": "5AbSpo8LByHXBckjAz1T2JUmqFYW6NBJW1CGSstbKjWzirervxp9d2d9GP7vBozFYgcyQvqwCtjpQ48tH7TBREjp",
  "key37": "CoehH2ko2A1vwJcadmfuLKK9hMzLajjAFA8RvYyEF2MQA4zFyVZggGU2Wg7QEGwkkvYa73uHGEH31rSPqM26yJM"
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
