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
    "4zd16uwcpHjsb3S2haFz1bJgdFWnXhRgMVEP5kRw3eA3arJaPL59tZt7Df2jptk9dc2MKZXdf5oof5QcsdvRas1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UyQRCQ93YyS9eHyqBgdygQWyQkjf733Uabh5Ppepqg94oAwgyburR5vAvmCzryMVUSsCTWPpQo82z2KmHUXbA8m",
  "key1": "66W1ckMkMRb5EpzykJtoqwXRv9Kzj3GuSgQTf1mB63MnN6XJ8p62Z8kwDUBqHcQHVg5bQg96T7WhL6gyCmfbWU69",
  "key2": "RTYjUWxTTRnZYr1YsPdinCGcYPLwgZMyRdFaCYNfvjRHXVT4y4x5usP9HTcrxdMgD5F5aTdP6bArACkY2CCLi4F",
  "key3": "3MoyXbfXsNXa5YgJfqnQr5m9scnXxSbK1adrtvgjgiGTz7sx9o1CSfTMta5LChYBvj84Gtj89p24NGyp8Cp1UqpM",
  "key4": "399uXZuat7dsgPJVAsHY8pYiJoYJMDaSqxcRaB6dKrcMjfjxD58ciTP7U5GMfV6yKuzyEJ8XKPdFCGFC56hL5Nzk",
  "key5": "4XyNuHrUcT3xfkSrGggomSUceCANmGesTXHiqtC9VVm7WQbFKfqmfiysecrbAHqUptkJpsGQgL6DZbDBGnSVJY43",
  "key6": "4q9FMGEUujHPYpXHAa2qyin4uyNWw5AufEKzBCHVadpi6ayk5faYyKTWRaPXGxp55g8WoaxUuhSnyRP9rdhn86j3",
  "key7": "4psPdGwhtj6PVAv8Sme1LpSgxm4ng7pSdp8Rv18rMU8s7uxoWbBgfxoEyJdYjUU9fVbtRQWmcCmrJUJACaoyWfq4",
  "key8": "3mepjPbFVQuEK7JJ93JhMf2axzRs6s2DWsqTNnd4oAK8iLGMHXuwVd1csHg5FysQomUqzBmQDc6P9HRYgocsFoh1",
  "key9": "3Dn1igno9ahCtTW2Qdv2hQUkbyyzQDVmR7yPss1u7WDhTW1KwrKnWvciWCxikahVGdi3YSenxNhDRDbMB9aLpKJT",
  "key10": "3Vs6vhPRSVMqUYqQJtvyzY822LSDF4usZLG59rH4yNo1BAjxUD1tALJNgCYTFmZMKKA99pZY39XKuWox3MC3PVyt",
  "key11": "2vV93tqQPe7BmjyMmaLkcdVTpwSF2ZGt1GP2K1W2iURCCNZLqnQorTcCD3KKxYU4KzRt9WNZdJdH9HYz9ADrcnfV",
  "key12": "5VmMxMK8X7fnVR6ZqLXZhdA4ohgXVrfZ95S1uPSiURHWmMUQHJSgDeCBv6oGQ1TA7JxAPU9AjRduL2ULEcpxppra",
  "key13": "fTtHPiSDk1SprVkWnHqHCVt8XjFJS4kU3Q6ZP6unTJpfFrYX6LEh87p9jrSzESckUAKKaY7J7CBR23aVmwY8J2K",
  "key14": "2ScJAHGteBDMqwhqsoXzYj49bDeJQb7LQKhpuwzYRG2kN15aVmWSRHEs8oSkD9DBgibybEh4czf9NqAfccm61Ffh",
  "key15": "5oooq2GH7m8SbM5WVtx8JSWWhLLmUKjojAeQT4nBX3JgAWwgqVCiJ7T5whsAUtttYcwMWVBhbsiYjCuyQQrW9hfn",
  "key16": "3GvwTVYA6kf2kgWwj6RxMAajvzrtqbkpTHW7FkeHovhW7FEwmwRvWvGpmRhamMGxgNGacGdXyAWMFykervCp4tkJ",
  "key17": "5NyysgHDbPQkvBWVLDeoK4Wz1nUn9jEczUrDBg6T3G7PY5ckHkmPR8HzLoEyg5LJFg6Rm5ZEZGtXaZGoi8D6aB16",
  "key18": "3rJRgfPTGEKzqQkha6PyLbTqxPttcvPNcWnFmrUuQvGuVWsdd59vWAEUX3n2C5rmL1zkd4dEsrXJLj7r9vMCCMn3",
  "key19": "xXLLu4op6wUqwHquy7RDqcn7xjkvPdXv82LRjEdTx9yoCz4ZKxw3358iTHfkqsXKNjVwDDZq6jxmYfqfVH5tXT5",
  "key20": "5HfCeUDc7Ynm74xgZLLK2PpEW7dpb2N1RukSK9EyUkxyKktS5cH6qxbZKDyvR1ACjt79YwBQzXLN1yncvEsne7Qw",
  "key21": "2S7Ujd6ptX3WBwrbBdwdxWdN43ByP5xGC4GAQ4pAhyg4JmveHV8rXWZt13N6VLZhfgnDnxiKrZJX6iEpz5dQ6a1t",
  "key22": "sjJwCRUbobZzchR4WAJeEm4Hk314b73FxicFT1TU1pcrFvpUPENfhTSnJkhxcSVDm7hy7d1mjDWNS78MLqUgxzU",
  "key23": "3gEU7kAbsVvrj8TFThMGqbXEHmJKQ8ZeDNf8NGtLmWs3KFduVQ8sAVQ1kd9i1Ufuf48zhdT9jguHmgcS5WqSFKfp",
  "key24": "3uYGcHZZbSeRPHXp7G2JcwnSSdhrnw64XM2MZY2fbTLLJbZb8PoJTprxja6MW2bRM3hbDfpwcztAwTaMRZbqv2kk",
  "key25": "eGED1buy85K6ufWWyc7bdr312iBBG4Au3PWD7qVKw1tkpLC9Czun66o2ABhsofswJ2MsyrYWL5zT56EMH5eMbjs",
  "key26": "33qftpEUywafDu2NvGaoBichgqmhQkBP2Jwj9LiozPVHRNERw4K55CHTpJUviktT1vZjNuj1xvsii5gXgGbRnkR2",
  "key27": "5RYaQ4LoX9ME8kNZLAvn3nChkUeCdaL5oN6Yd61sRVuxt71t7qjSKqCZBvhUvTqAjPFv3knSSd1rhDTKHSWFJnYX",
  "key28": "J1fkARY2UvxyRdynah8eUSy69bgbWrQPdmrsv3oUG6fson6wNGww3c1oCqXxW6guZrVSnruarphW7HFgkXuRFEX",
  "key29": "4AmdHhNMQUbrtvTKitc5ncBbAm3GVSNxyddQhRSZR7ehBFuj2bbv6B6pb19Nx57AQ2Y1KP5mYB8DPDKfG7y2Qq1f"
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
