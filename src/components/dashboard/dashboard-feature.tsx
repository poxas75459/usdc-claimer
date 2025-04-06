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
    "3sR415RPf6feSs5SdMu8x5ZuiRKBB9eKxkdjZcMbf3N77dvLD8KHoUAJUVVrK2CJUjNLUcWdinsVRMPcFzB8QPan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DVuH6NBCdNLBq5Qpuzv24n9moLrvvP4M2zpYuwfVBAhfiufvbL6PS5i6rc75XcGwQQorstHgEVD1eiBYXg7bVu7",
  "key1": "uNWqFifGfu3qVkuMJEXUZ6RQwzyqmGpWv9hcMQiTCqaJLeS7HdK9zSXMmgjiEf1SgpjyBXxh9erQyk3nyzCDyBb",
  "key2": "2kHUCdyEuKdoFUUGBd4ictwTW3yGisDK53tTMufWWbECRuonNmSgHVuTPboFWPCT51JtKf69fQtwMAJVb1yNiTG6",
  "key3": "q3rGHf4cjbvah6MAVyMtePMAN2w77eHsBbqXvCR4V2bKiUw3zrbN2EXoXAMkgYCeGbrDYnJkF8mTkvViuUbVYVP",
  "key4": "35nY6eWjJGYLU2MVKEwugteDG8o32Ws8xMppxixCdGxTKTsz5BdoEXjh4cm7x9pDgTHerXA6ZikuvxHFGDei5Vvq",
  "key5": "3kEdmX9JbCapz73v2MtExgCtgpQKo7jQLYYri5rLrJ9qVifexpX345xPXeqc2oVqX1KLF9BcfPtN2Z15owT3yGvc",
  "key6": "3ijBmVT3E8xiY3wWSRH9f9uFp7pzwYxeemD9nmR7hKt2tmBX7QVqeSRM8SBkeb5q4PhAaRaDGKtGDK7xvdYd5YQR",
  "key7": "4Wez3MArydhL1bBrecWjtdZaP7Cq7qntw8qw5TyJ16qJN77djXXQAwcBGysH2RMHEvHdJEUNiDSRDGjZgEXepa3z",
  "key8": "3MvJ7rFAtY4r18HY8C3qBKnJdxH8LKRF8UtMzd3zYex9kHj7EaR1a6XuZyqZpZCm9RoPZKrwvSxfpKGj3xZ1tGGx",
  "key9": "3dsoC3WPUME3dMRweAhnNJgcqQwDXKu34uZo3T44DJj39QtfvJyGLMa6pjMmmLaeqvDdL8vLREBR1ZJ53o3cbNBM",
  "key10": "2trB5npXmH2xyQiKwom96XWH7EYG8EhwWvKkY4FpV7x7n6C8LdK2KSQuoAy9snsVGmh8qSE9xbP6HTTq4DCDk6ru",
  "key11": "se4TE5bPFyYHpjAJ6rSEEQhSdQrDq2wyKdLAABHfxN9NpnYaJ6T3NnzUzgJ4g6ab4LFgju6HcVKcKyA8reT472c",
  "key12": "5GseUyfEiCmqGFyTvD8hF9eVziK8HxgyKYjpkWSdaYY4BK3SEh8bV8qfnaRLhYqQdghesQYMXuZ6vf8h2DTHa6EN",
  "key13": "35VC6w3RS6uRvwFSsMja9KsmsbBZVg8wdUv3uwFCrSKYmQ62Dp5C8GQLuPGBetavFC1LswMG61gFsnujQEbrdq4E",
  "key14": "57H6uBNzJFMZdSvk7hZVn9TeizNHtNabEoPaHRpyzoMpNZ1eVMTQMq2U9xV7wpx1RWXHQcEESBfUhNGz1VSk61fh",
  "key15": "3R73XjE3MJ9yKqwT9pvai3JJQZhii6JsTJRBKXkyp3cRQcmHut37Y2uPYYn9jiWU4DYwNb6qSoT9jksKJa7dufqE",
  "key16": "4WjoNJFTCuwic7EfRZXVcKM8QXBGDn1daV7mbL469QJbQGtiTfVTwrqxQLCJaUqzzFMYUsKdowRufPThxtKs1Mk2",
  "key17": "3ZQqSzCkWvUT9cmJTD7NJaqyPxdAXEpJ4dEV2SFc177Ahi9TNogX5pfaZcW6wUaawAnHazjDrBcSjjHCLVemRW85",
  "key18": "3vvmzQNYaukGb4wvyPAZ3NnPQGhJLifCyUpQyCMpowhdJnr8SQtc9vwC6N8ktoeL9igniSUpkgv9wkcx87FSHTFL",
  "key19": "5eXRa8i2whxv19UX5fX5qnyaceDoVYiWexRLXbhB5YrHyB5eo82wMduRR3a8XPEeKX3nadYR8uCYYuQs9iaSUgaF",
  "key20": "3GYj4ii8rgKyKpiuW5vBRs8w738cn9K7FYQ1Hu5bx7xuEQzrrfDmSJDqpsmqw3XG2XDAETiNpRaZmWf6jfERkbMR",
  "key21": "5VcffyuDEU43C2niHqgsGwuwr49nsPjAveCvHrtt4NgEQepDeFnFL1kuiAQUXWTy5heYp8BiRwVPPz2cRfynTLFj",
  "key22": "vh9ifCwcy7rEWhugeyzbVz6DuajTgT3DyKKkxv5qkxtghwBpSXDH8Ce2TL4nJ53QrSERwBcAxkaDC3AU48NCP6m",
  "key23": "2MVu1GCuvHKV2SvU3CeDW7MAXcRv9MLfnqx7QXjWCgY59eWmPkEHbWM2Ba3NTZS8yEbJWgZYCuULdiAqBR5BDzcW",
  "key24": "2brvqtjPUgVEJGmcmZHjsk329tkaFk5A9Hsc13HFS25Jv5PynnVHvP4Zq3bgv3U4BnhzbF5V6kWZ3NA2Wq5FV4zK",
  "key25": "5FKGmoybwokGJRspCFRDdU8i69t9W3yxKKQgpbUkWtUgZoMxzW2eNjDpHJnDRYnkujFGwuRyqPYbdP9ypcVC9ijY",
  "key26": "4qpqTeDKD8s4D8Jv11f4ZMsxsUjQHNVxs7rHQ75hr6eVfpStdKWTVgV12o729E7cQMd36DMQz5N5i8bY9dG8iG1W",
  "key27": "hrjhRhwH5mZqDgfTmT9xD4mNHfcSAgpGHmWoJnUiaJBWcoDmaRpEKnJ8NYJ6H19mbL4iA3uSxYvxW71aquPNfsM",
  "key28": "27oKPg62XiPi6D5TJnFbsoEV197ZJCK4whXYZgmGVmQKDqYwnrmpUFaj9YKjBfqbQUdFp2eeeLRnhRetZP8dwtgd",
  "key29": "572zz7A6qwgJJH6k1Dwu4xd93jkrRfcK56e8xi263cD1K4Ent8tgyBPtG82UQk63p7Mn8YQ5KQ7xdbgixyHcfM6R",
  "key30": "3L59UrXNiHwVFpTYRaycw3GkAM9Jjydgnby2dQLoJGQYyi1qEi22JuWn3wB8F6nyciYJJkwm2pcAggnL9EtYQhMq",
  "key31": "2o9b1MZxGd8yzhkYbxmWS2KHNHExQfDkfb2qXTFRFQYFL9ALSxceznsW5wxKrRvdDb31YtuXXQHYo7yprsyDJbnY",
  "key32": "knjRbnNNQWRYDgbZ5JQbfdCQXnNtQTHye4kdoQwv7L9zRW6xXYjNAYGTCMreVVEsgiAbQTrXzsS7XFLViJMpyhy"
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
