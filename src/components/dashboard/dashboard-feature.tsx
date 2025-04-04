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
    "KaHSmKJHtxtxkvwGS1TD8gS38Nc5uFejuT7TnWWTtVaLou2xkpr7a42g8dvKa92mqFn3Btcy3byoSZFyGjPNi8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uzk1m6WZ62Z53tatXsKb6UMoNbSNrZtgRGw1e8S7RQUzvuLDoMd3qMAuhdxHrzhv9Nntk6Sw6CpsE9PXfGM3fFn",
  "key1": "BEkB3hMHjppNAb5iu4CikhiCKHDW6nTjyrbtm61ituU5SaZKE8eYz7ZGvbq9ZKdauZd4nqEdgF47t6Cy7FZxK2y",
  "key2": "YwKVeS4UySxjhFudh23ym3qwRkouV2WxpBGXteUoTHmLRmq7P5DYs3X9CavBUn5d6dicMCaC6gVkDaqq2dpYp8r",
  "key3": "2wzr92HFzpt9XaJ5EXM8GoYDF5GzH5MxUbh7xAoeq2xpR25bQmvHwvk6U92L9HGmK2xb43KGcjuUbCtLk4mg1b6q",
  "key4": "5aBaNGd2Q1NjrbKhYN93Ni4ojMr84gztaiXGmRpmNfqobX5EMZmT52x25yX98N3uZQttTKtfLceXZkyhY9CBcy5J",
  "key5": "5rSZJivbhzcJgiNDjcnWN7WaWg4eCiexfy7Ugx29UZzg1K1EEkm9bmZ6oZNbLtxi3jFcybrE4BxTdL4EcLA1QkwA",
  "key6": "YxHY8EocDmLynSiFcLYjPp2C6dkiMiWvbWrmBhyaUTnxgzyBcZM27nvFSAWLXHF3bdEW5JnBVkXDmMEdA6pisVv",
  "key7": "2gMtkTTXJMKLXamK9Z8DrFKc1huu89kEuEvxrH7MojzLZSft95ATjfecCWjNEaNQ59AVBnTUrKq4s39UiG8uYx1",
  "key8": "Gok8d3ZjdMeJp9fekViTGZjhbXXjmZrjByEumXGt469Su5PDxDEBMEFQNUVTxBLejHsDZPvNcTP3i7wTUYGdumP",
  "key9": "2ZzBFakGMHnEhiSJwxGERqqXgv2dsJ1P37zwWakGrzkzH8s75b2kWBXJ6hiLSQUfJHWdTmC4HJaKDVRjydmgWND1",
  "key10": "2w3iMHiZKyLdRMXJg4a4ZXn9L2sGr1EkjgL91DGY8Sy3j3ahZeQJz6FuZTPpzKouS6fG7gDPKDeX9Swj18FDa8bS",
  "key11": "2D3Hwjr6b1R2ZS9eZkpd62ehb5QcLtsKhdVY5fufMNmRESaVnW8mrUB3B4qy7KhcWWdTqtitpj8kS4HREFoXsVNi",
  "key12": "3Fh9gbtzsmTeRDuzC4SKsnK5hbe9aPRxTfuSUtNJy2MTggttdLX9vfh4btUheSXyMCRpsXoDyEf5TYXZLfufkhy",
  "key13": "abquA3SZ9jasWzZ3evzC3RkPKASZXyRNbMKg5mumP7RK8yK5eDYmagrLT61sCiqQMWJQU8CF2RFbMVE6AacvnWz",
  "key14": "4PskD7J64rrANmhrYZhUbpyAFTMEt4cApQhByiX1YGnBCtV8wCwvdwJTf4tjiWeQpTKEwfDsR9FzxAVLe4ksq7kE",
  "key15": "F3zcvXiJaqmEAxaJCquVouJLmiNcUHL3G4rPNKYmxTUzhB2dmVFMhMnA6wBwVjphfbqw6iPPLpSukbQGSfH6g7q",
  "key16": "4dAtqGrD5C5zKhgxUKQ6djrgbc7qkK9VpDNUmFtyYG29zxnHXc1zBXTyPp7rAduJF2NHgsQ4ZirpFov2Ren3HSGf",
  "key17": "3eQp3FUUb8reNeFmLCi1t5vHMJiLYYgrpN7q36vZpbioDpmbx5y4FKFCBdHkSFyraKJmNyjb8i1YxK36fJTo9QdR",
  "key18": "267g2mn5x4pJaRRGpiQuGGrEs2yqP9qh3KJhXPNhpDKA8onzhQ5SrXFMeuE1Fi7nxyv9ZnqxccDqHXsNQMNESqzT",
  "key19": "3PS94pSJhNdowv5AsZqiFKEhbu5qQChV9dNLTcdRhXmbQAAoetHd4W3fgBYzRqNHZ2TcjkaaJiyKUsVNtKQaKB9m",
  "key20": "2gmTa47SU7ETgLtcMxAwbGRc8vCeAs1BFqBFpWERMK84za5gFTewWPegvn9rq5cqoLsdRo2pwDQJ2eY3bCg2u4Km",
  "key21": "3SKC1V24L6ddKLG7ieyUJUJ3vUDNJCAo7a5VawBpAN3XZvPaCo6s4ELBZedTV8tyGDVQQoyG35jJvfpGbtXL42Mk",
  "key22": "7Pf9t2zbP9qcRnPHdAJZsrbzL5cVM9owDBYXJzEqHa5qtzUx6TYFW3QL4ALBgLtQwddKSzb73az6xsiT8szaSdG",
  "key23": "2Fa4hUNhnRV3XsD88Ho8h2dJP5oV9EcpovydRyL3VpMmM2AfC7eTYYLGctfiCzWbYak49TPMEgrevrQe4kefmUHe",
  "key24": "4gdz4cQgujLmRsYEjs5HBWNH2TTArgobhNwzVdBvkvzijZ73gESSvLj5K9K1JLX2Rc21FDSsFFya7Qwe61tKZEuZ",
  "key25": "3fLWauuYu5Vp9JnUnVupGFPFuNNx2Wax8394uvMa32TzUVj1KgkiggchYdhJ85KrpZFdxb2oCBvcb3ot6P5SVE5d",
  "key26": "4docedJW7uDAvEjYKr8XLvMb2Bzd4ivYsEeq9Yp25KoAUwekCFTChyuha4gzn6qjtcMphZ6reeQymp5tKTcC8do4",
  "key27": "5xcojQSV5nNhmEG2fGXjSn23ihKicXGJFqT6fr1wfwnkCBGy4Nv2zMXbQsmQnr4fUzgZD7SpqqnwrbgiPtgtZMta",
  "key28": "3RNPGE7c8iRkzeU2abB28zrsyCcFsnzjB5EVm9fQ2uwNfjJbXHDq5JdPxberXT7QsHCdZvQco72XEx2dN7jW5kY6",
  "key29": "2ycn2dKdLbS9Voxj3imL3sqLaeT7AKboV9oQDeZxXC86UuWBPFSbKt6dZud9L5qfXfem8oUxSd1zyppKnxJn7nbw",
  "key30": "4qBNjzbjMbXZSrtfAq8qidT8abZnmYAGBrZY29hWb1WuNiMdRW5MuMk8bNukmYYnsDuGidKe4qR6TJ1BuVZGYtkc",
  "key31": "66oz1vFpS5KTPqSwsUEiHsiFeHNifoWP6c9Krz2eaD7AcQUsDN6JU2x7tDBjd8tgHW5mWYVntL2T1WVPkUkwyot",
  "key32": "342dMr9XHBpjF3zWiK6gTgqwY3PmYT4hTLzVYRvQTZjxatLJNAosxtEtzcLfdUWqCN4zCWMy9KZGzYKBYx1utAuC",
  "key33": "3FsUbeKS66mBAnmxDydJFAUzLmidSrrmECraKNJXYjZ1AViABCD3Uw64oqkBYdx8kmQUJMgkhoXjM7wF44Fyonds"
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
