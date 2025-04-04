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
    "3kgA3SyRrMmoVeDKpCH38cBYqvttFsSuonuuBz3hsdD1vSv9tW2t6FrujuLojURczEjsPibmCx3GWsLGgs8sMAKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tuZwwSyxzngEFNzUxYDjuGyQ78w2W45TAw6czNkA398d6KRzUCUQiuSxKWq9Urv9r3SM9rWcBxE1EPGUV17YTaX",
  "key1": "54pppS7GeGY15wzFvd6nELcPywSerwuJHwDHCgKe8rSR39wPLgKPjKXyeLm6YUx6dz8HMR4bS34VRFNvfqVfgrsr",
  "key2": "5oXZ8KYzVZjkBVeaMBSW5oH7KujvovgF8TF7ceQWEgkrXHxRhCLti4fPX2iYnryeAdgVNfZYpT8jhJAzsNhkfzV7",
  "key3": "2kXkjgtKacwKQRRuDtzLP6vhiuoG9i95rRuKahv8WrhF4sin5mPBtibXtJnf1suAYTaANmWaPTQ32bXLPEhkXu6i",
  "key4": "4DAsMnDt1pSmkJVLrUiFwjHCu6daomtyKSM7mzXjsWGJ2PDyTKJ1Yc27kzFZa9yzduUrrr7jJus3RY9B6rxiM2y",
  "key5": "4gsNe412z2Tu9GHwgh8YCCqExiBsfgU7VDF5GyVnPq2Btm3JhMdFkdtrc9Sht8dSKCvcvvvruMEVZ628AQWnrUCM",
  "key6": "2xvRDdVheDKxsemJiwYw9LJCavaZ738Vp7qUpwSuMvmgScJddFDEZ4FVtrjq8cTiWtL3AecN3HujJE2GV28fTDMc",
  "key7": "3YU5gpcTAAJnaSHmdjp8YXtvihohpx3wsiNf5qQxLuC3Pcr6uJiT1ipKF5QkjEmW2ncg1AZNgEEr2kWR24v1dyWJ",
  "key8": "2PfmKxQoqV6fZ4BQRZUKmZdDQpjNNUjyxRbZ1a43X8wrDi3ieTFYSrCGo8q3JdCtEhLVUKSgRd3xvfWc4p1hbvNz",
  "key9": "4hqBu2qmHZqGg2Bs9cGymPbYgeZ7VevEpMaZvQCiftVYZeydvxhkq5LCpz2uidiq9tAbvG43AFroiTUwGbjpTY1s",
  "key10": "25FsCJkBD5ShN2zHyk3an55NGWWqUscS9qDNvhHTNYKts53r3ZWSwmv3df5gCiZK8QVQcMmAxyk8Pcw2oEYnTLZT",
  "key11": "4jR9M55rGQrvaNmJhGxx6ecWb5cVsc8o52YNQ39BZcrd7MeXg4TgQSD2ku7kVykpB7brGcnTkhiiSNQ5wwxUa5Do",
  "key12": "5DqZN3pXRDc8Te9J4X6WA9LYUMPTvg6bC9gmM6E4DYKBBio96MyUejRECYHtu9RwzY9zSJgkjgqqcKMXRwFrtt4Y",
  "key13": "T94V9JNJQNZJfddXe75DQjRdi3tb5LqK7YVzJUB5ZUAraVTJGXTxwAomgWcHHUA7E2Dh7ykBEZ5wqwTd2cNiH1V",
  "key14": "54Pd28tcDffRmQptYMktt4o6pTThmRVVqY4cDWUBY2Pa17DuvDnincyhVygqr8hrQKWvES8nicpZi1go33CoBuVo",
  "key15": "29RQbaAvL2rHEg3DqSxucBDh1Gzsr71TMrLfY39q5Np9c1MkyuiA2DSs9rfosSC4rLWFGDhQXKoWZkWoKYDCgDye",
  "key16": "4u176kbQ6vR9vx24exyTqURFhm4G9VZtP4DHVH7tWAke5r7RybiaNmVRzoAYkPGeUdD7aSsmMnxyhSrRcGuAvCa5",
  "key17": "3rEvUbN9AK85PR7berhkpXL8gEPPuLXmg7med4VeiNHXiTFudQSKEhPdw94gyMSgYrFFYovwnbJ287X8QS9M9bmV",
  "key18": "4gdVYAy5Fd1wYfhd4wUBuWh3VAeyefAKRTwMp1CPJmbzTS2ZBASGz4KP1fhLMzZUbCncc6KWMhz5n9r1SZb5hK2j",
  "key19": "7oTpkVC6A5t7m9p4Wzj98Fm2TiHVKX59PSnkj2PSV5ZA7MtvNbrPiMZcXpCHD39NoDvQeSNwXVW1H9jnmk83wcU",
  "key20": "2VqSMkgKhiK2q1SmjF1piEmbuPZGR7AaMhre53YE8qu1SxfqcfSbrfqDZ4JkpqmCpxtz2m3sVh5ioNtoNbtbaZsY",
  "key21": "2aMmsp9qxqgtrSoTUuEXz591mjtuukTXd4hNqm28ZKj6Q4TBtNiQVmy93oLijvvXcB28NyvbUawevC25taJX23X2",
  "key22": "21cTSzCGJWxvUuTAKRVcD9cyU2ieRAvsUb5MuBaosi9zjUVCPShpBK32gBKwwU7HS4Pr5DdVS7ma6Lt9Uv3LPptU",
  "key23": "3M82StbreF9sJExQ4e6xK4VCU8gNdR4jvub7yzeWKY44CQdWY7dnkQMkNF7oJbNkbhorX5w33ZQFF2TibpK5xudo",
  "key24": "54E3kcXpEtS6AqJbyKZ3tDpkSPtpVv4NuvvSZUVEBwk1fbrfqnzxYrmNUoHcZtJJjnv8ptYtCmXk8JjqiWpLUicw",
  "key25": "4maYMnbnGZF3krJQATxcFJrqZyGt4irDuREKGRKeGKMmdzr12jknx8QFPbR1NudJuSrHLsWY5QXs2VhxR6uXjwUv",
  "key26": "4LbAfexENMNcAU9ywDeRihwTKWRz6MuUt2aHBzz8d7muvNYhcakT1X8UWadBfAvPeos1zKom2kWTGu2Xy6L5vosj",
  "key27": "4tF45rY3vLjqWGBjqkSuCmy8bAjtgVJBmqATkMBEjQWZMmaL22nbT5uZdHAMXewPKjFfoRLKFcXAGdYzi8BVDBFW",
  "key28": "4PgrRRyjrLgopQYtEQhHvYYnxtW38aXHvvJod1Bef3oEbaEHYxtNfXgMsNE7uFBmmeCPJWK4qYdDmM1pUqXa8a8n",
  "key29": "5enDyGXL8EoL2K9kguaCHGNqBa2XKePdA3yhLsBLbUxDDMa8YxAsbnKNpHty54VEfSA48ghYUFL3P5jQ1bbb1LMm"
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
