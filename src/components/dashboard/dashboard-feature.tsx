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
    "4Yjkfz8RNbSzaKKsCnA8Nbn7h9khr1iNu7kLmk9DTvRomJzM496VzeeZfGnCdMMu5asxitmSuwfgzEhpHpb1jVyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rcDxq1dFhpzdjgsV9i1fuFswB8BL16WJUZBh8GsUQJSrFS6Nca2RPUd5KcDaU7jy6RBbP4kqGrTco5WcKmBBCHX",
  "key1": "5W7iG38GsoVU5Tn5coRzBSeYymMd1V5Ez28fRvkpUY33oqBwJACp2MbPvyzM8aRiUcHZUCB3dva9ifCmJvxdcbMD",
  "key2": "5tTkaWKno5huVEUpXgz2V23bo219CCnaYfVSHwU5xX142tTFunuiUYwoZJEr87B6DYB6XV26K41G4thH5XK6S1HH",
  "key3": "5L45p6xG3VSU1iq6YjY9JMBkLrR4Pnvrf3HBwKf2Ne3VzNbPGBAxZTZjBqJy32Z3CrNpow6vDTSFYzJewp3jXWtH",
  "key4": "453RCDMTWQhoNsAZnrbwfip6u8T15xbYY6Soy5f4fJAzL9i7MJmbSdfvqYedTpPy3ZkM3j8wAwZfcuqKgJ6GumJp",
  "key5": "2LJtuGHw1nayEtbF4VA6rwv2R3yGQMyh2ckFdRnxcNoCrmeiPPVPejBuPVYHoRUFfuHWRzs3GuW4iZTscpzzb9PL",
  "key6": "2YdzWMF2ead4d88eVqKSoZGWV92i3gCr5ZDXUsWVrNaYyMJVvTzD2JPJVo1dss5B6EKCQ2BZsSGBb4fAiBB642AY",
  "key7": "JtKWXCvJwCv8o81Kk5ivEYCwtGgmFfKhQ5V3aFGpAfaHD3XvBrUBFpyyt9h7tejtSSQVMVErZTryoeyZsyBVUcD",
  "key8": "4ffic15Hr51cttpMkmMqpYF4KzqDocB8o3vXbSc6kUU6fHP13Fy6bgmMEnp53Dqn7N2ur5DsvaZvyEbxm3ZWmRzD",
  "key9": "21MS1PhfK9AHXvuy9DH8iNRMW9Rx3sUe3e2gGmDm2YP6xSUNfj5NT5sXZR9a5YBxEL5dFpnUU6KsSNWR2rELSzJ1",
  "key10": "4Du84KeceKbGHsFjCnoyMgraEp4FSXWHMgzh7TsxMXV7QADA7fFxXDsiCUyD3vy2QeF45q9BCtRHm15udVBVRxcp",
  "key11": "3GVXojoS7DMJRZhSEou4ivcULBDmz9AySMFAAGHjw5xF8h1HorcfHrt1yJeyLTPFUXM6HyMmat2TJZ3nb6gmQ28S",
  "key12": "4dLKxKXj7Ndk5SGe7VZfDUScRompUEoifNNwkkELL668pAbaoJmXCr9GTvahGxMTopxb1MyzYMPNpuqMXJdbpjzV",
  "key13": "3bTvhVYZjwSMoeiTPrY1QNjk1a176ec2xyxgXyKSPaUTcuoeL7yHUQFeoZrpvfoeArND8dZEv6n79mT6K3DZcaqV",
  "key14": "44thjXehrRsTPjheDZMtjUgbWG4VuDChhe8uvzSDDCyDLxTdBxV5Y6HgiS9q33ubMTsa9cRf1GKmDm3BhM8qYBUv",
  "key15": "45H3GCwvDVqvLszwR8z5EkM2ze8UvvyrH8ienUhJtHbjWEUe459wLD785UmDpHpadbxBL2qaXLz4UyKDMnMZu4cK",
  "key16": "5bKqJ4EPpgHgC7jsRPf27GywzQ5KCtehvj5jfdDS2NwJLSt8VwoS4QKimCc8SU87Nn69CuJpvzo4eiUJDtRgqEvc",
  "key17": "jdf87NKuD6UHjKosPRxxV8aUfQJbvnDL1jb8QEbUgPyGvWxMezPUn9PwLLmxJdAGuZcezH2GLri68ZXcxaAwwdi",
  "key18": "25Ft8d9XRSM8fJfNZHAzTz8Pt2cYb1xsgdx5gUJz4yEiKqm3guNa9ACJnMYhDUFAtdZm99RL8erwcxmUV6SR74Xp",
  "key19": "5ComuLpmDeUmwqtUNHzdXdggtvqJNgdjpRUBAPy5Lq1XccRwCEu5FARcbcc5U7SuFDJTXsnJTT7kJBts1j2ALbnX",
  "key20": "5VcB87uTCXF2PGWyWenFhUyKJuNf6CnPzfWe1brYB4R37UeH4n67LKs8yRCrNzMdMTDvYMV3tNv1Myx671RSJuEB",
  "key21": "YjdMsvdRYRXtCb2faa4QYH41Dw3Nkgt5FhR5stfxU84ZzCEu1WpGTWfwtEpKgxjmE173ix5D5nQWdEaEL9dRC7Q",
  "key22": "61sA5YLChb2MFsDgkazM2VnYKEEmULRk9X9yFH7iNa6TuobDjxHcRNSSC7UvGjwRAZhFatT3F6RjTV6NQaUaAjjK",
  "key23": "49pwdrbcWHpLg94xYj71cNGxKgcgLjq2b2wADfCLeFeHRU72oLpzSoCRZMAiJydsXrmPRg1oQ2pTA7XZnVohLEK1",
  "key24": "5Hn7MvhdhveZaBXjwSfLc2yQKo8PyJM2bi4kWYcarEjWRfkQNiYXuVYVCjNJmDbSGX8gzYUo2Wckevz7suoYwJ5V",
  "key25": "3kt9a3LMDL5VnCU8xaJVRGwM3QBND7hbGcTJmMoYJ3QdLAP5kyUwqHd6EtdwExLyg6e29c2h9fWfyjNF7ULPy9ba",
  "key26": "2FryVu57MqdtzjK4hs9mfbEA2bN7mmC24mvBUa8u24az3ZSbq2ZpNvHZRGGzVD6EkrofiBGTtpnbsF3y6jbsukSj",
  "key27": "VtFZmMHtZaDTYnsYHTM3L3JoP9nKFPgPBi98DRjxYioSymjzkRnocqbYwKEQZZukLbxLTLT9SvSpke1qM4CViBb",
  "key28": "5m5S5cRnVhT8ciHw37BuaBJyL538bgsWpp3qmJ3rZ9r8mXzjF3Q2cHweAJTVuHqpi7Qsr14YKY8c1cRZNG1QVCqt",
  "key29": "53gU1hGsfiMcZuYvB16Eh7MuxgTNvj4itsgNFsLGUjhec6hNunCPCLkCLeuyJKtsti9kfDJgf8VofFd5cRNf9rzw",
  "key30": "3fXNM8E9qGPnr1FGKP6j9u4sW6pY7haiWuA9iG2P3FQLNuZ7tBz5bMMrcACyEsFv3S4si61CXN5TjZ6BPyhPUaCB",
  "key31": "3mk11XyfWmdvGo1DyNacb95E6Zuufs3ujBuHuH9dRp98YrLmXDqF1xi8uRC9LsxNiCWqK7rBAm5Kf4hbJ9Q2ZN5t",
  "key32": "24Lm3JeLm7CEc9FuCTsgssLA7TZLdQkM4veMrHqaeGyYdC8n6EhNJUhDbNq5KwahrrQNzW2sTfmomteH5ULpCYMF",
  "key33": "jKJ7aMF6NeuWK5pdiYy7JAdaR3gsfpSdqfxxxihiwRDvPBAfoW4y1xcYN5DUwzRncKEikCUxDtciPx3h7HmS2QD"
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
