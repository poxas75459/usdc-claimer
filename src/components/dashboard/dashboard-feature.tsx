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
    "3BA1oyqPPDNzUirsdRM7kz6NvgStYCMNuTkys5BUY4KLgB7uPAPxfEEBmkTwDH8RAs4NC7AaQKQzCT8C3QqBJ5fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPETiAAL2wAQ41he5n79zXGxJC2wJRRzK8JFM8Nht3NKXaowm92SRGNXpMqbTdNm1LmHpW2UJqxN4Z37FLypVCF",
  "key1": "3UEaYHx9E2jBMb77HgfFYLChgzxKVNTqGN2SrpWgkGoXrKxZ2Jy4Us1JtjUZ6njodZYUBb9QqNCk3mChJFBALqCo",
  "key2": "2ie5pGzqxa73gc1Ue2tGfcqmHS28XqYqysRXqphHsamwp9pF4z1BnBPypQ6ChcnURxHaXEpNAtTxY36gFE3yhDJt",
  "key3": "4zLTVMXnxLCjc7kGM6i8LysJmWmbwEiP4LsS2Umv5XLG4WkAnWJoqx8rumRBbmobugA6WDJRqg3nNZ1hJqJRTn94",
  "key4": "2SsvqX4L7928eMkkchXBtJE77YnucR9ouCLjtkkK9o9Cpo4t7FPYLRY4Z4c9TSyBdrrY3M2oJXPtTwEgggDh2TZn",
  "key5": "62JVafSXG1qr7eEYgy81yzwgozoRn7pdivcM8Nx3QSpqTCQBy2XvomqcXTXBZyMc9rJNpKZauAzEissD1feh1NwR",
  "key6": "n3LWDYeFsPhM4zWVNk5UTcChFvX7ajj4sg7AopGLuAZsfSL3mAhiuThx3qnNBVjEpLou8rUH9hghZFCMFT3z93p",
  "key7": "5HWDS3Y1QEeFhjfSVYq9dYxuDitKSXhuUSEmsgVqgfKLJKTKjxYmuDUgVroLEk2rNb2XRThaxCaM5SjJP27JJtR1",
  "key8": "56992WSqTaU8JoTYf1PENZUcto1X3SUyv3eyYv6H3LaKHfDEGQWBxxqwbX71wtgDvzQjvBc149DTfnr5DtVjGVSm",
  "key9": "qnBCHyED3Biw6pC5YN1BKvp9Cj2QK8ecnnxCF9dEFC81oTvKaQF1YzALK7jc9r6dTCmTmYjnMfZ7dq65QisECHH",
  "key10": "JQMTih6pKBrmY6rb2TtD7pcBc2UFmu94Pemfu4iwfBgD3y8wYaaPx9rFSNXQRArybqXAvR6fbk458nuJjd7asD7",
  "key11": "2utPYnZ2fTZGe3tYbtS9UtyGcXBRk34wDxYvpYpms8mwX1YG6BBiDeNy39keENyYRNG7d4Uv1QkoQcrRPGKmxqBz",
  "key12": "2WyDAsBnCCZ3rfDTG1xRGZcVToXyX5VU4GR2Ux5yZnGqXwxYyYT7fvvGNKYJko7MLEvthFuEi3NG9S1pvzhLE46s",
  "key13": "2MbBuTsyqhHwBQ7MUYuJc1u29TfAgWowhLkzAKoDwYE8ZLqvTcj1t3QvN8U2ET5NFYu85f9rUGodcwf95AW4mins",
  "key14": "2MndwWjgfu6J2jUXHwmG4f1oMgtT32iKUoZk97BEPWaar2urta94dNGo7YxGyQvLu31T9spGA2Pct7LpHM2kNAUk",
  "key15": "Xtu57mtLZqn9fKKeuSkhw2q7uWMfNeUFXrbwnWbXnRUiQV2UnGpFvmrvJtyYdKnNCSm1EzxvWAJmbwWZAyZNZvn",
  "key16": "3PqSkZAj6PuHfmXvpCE55PkwCHryfTRqsxgYxZqPgQwdYMccLQxLx9yZfjiLMX7SREBJKRukCiMS9GHt6X8hVZjM",
  "key17": "3EvQ97v2TrYWu2boprcUSrK9myddbYeozVSvogdWbUEzhnr4mtR8jfee2kHSTEYbQZ1avwGxpnNFNAAHFfPMeh6r",
  "key18": "gu6Sg89dkPXj4oFtZikSMnXwPX4Q9v4FiZiQPp3nuJ8njhcmtvGhaHwPS5wpqB5dUjgzwhVkBm9QoW9WrR3hfqt",
  "key19": "5BoCWQ9dg3e8HmBB7dncvCrzSyomeWCYgW8KuNUtrBGCpvkHt5vAhb5sw3op8jrHsZpMvimK1mevoAe8MNTdyA7M",
  "key20": "kgjF8CRZ2qLXyFnvFkapPwhLJjfhfVcVm9GLCg8ms7nkEnnirTux6KsUQmd2DTeQK6eHkSAMcJP5jr2xZ3nCW2Z",
  "key21": "3wt6EcvE9DC2B1TwobV8b9chrpfanPxdS6sXM8XXJWnqqCVqtNqrD3PLjfrvEK2vaG5rHcP4HGA5QnwSt7DL65sk",
  "key22": "4ZjsTU2NEuvHXnGK5LVMgsWk3FSSq8dsmCnb1HaQaTXvme4EcrknFJ7S9Aq7YU1Gne7NoxqETpwTqQ5tFUP4Ps6j",
  "key23": "3VndjNPTqHkjy5VyKLHhWww9cfPMAo8LHH9ivSSdBopC4ey7uGbW6UJNMvbHgQ9CHmvefk157YhtqgT9fiJNW9jq",
  "key24": "AzALij5Z2jZs1iRfjBcoJF4tMGkgzVihFm23D4eZZLa2hic3Dxm69aJrivYpuAVFVgnEnoDXaxRkrSf9xrLxr2Z",
  "key25": "4NZj2FDERNiT7QKdoMGRedNVzc3qjzRwz2MdWE1taHonjHQTrPiBai65GVVndAVRCkmjeLKuxxkVvsiBiKfeJwAQ",
  "key26": "2VQju1egVsFPuTEU5R7smyKbWP372xdrv5Gt386jSzi4UVWNW9rkUEsQofR3cS14tapZi1jyfP9ZwAd7F1ZuDYis",
  "key27": "5NBC1mpkMrn1vFXkWY8bNw4LXhKMtEWrEjDxX4BGED1Qq7uNcMeePhh4xGywBCjJKfXRJbspFxn4EANJk6KzsaYS",
  "key28": "64RMx6SSmL1SJs84Kg83vzk4HDxBAXeri7U1XvqjHhidZJeRMyc689kdnXWrtZVn4yBjL3J8M6YVMPqZh4FpTsME",
  "key29": "3CDosGWeZQz12D4xfB4uJoU1rL2ZFZ7zeDg8TUvJenBvzw4AFYKp9xc96gqj5Nktbn644beWDiP6gh9W79YJ1ZKx",
  "key30": "2oPZbVeRfRPDvkPMMMSaQNoCZR2PVMNEmPP1j2X2zStkwDkqhFbviSw5h2ha9a14HJFbGKbaMyEfFrzhLznVgYbi",
  "key31": "3ShRnTDQdBuQvQYianp3VBcuBBZKk7C1ceecEhd9d4bNiGuov86GzQ2QJWyRMNyBGfohRSPCgnMZjyJNbg9qG7dc",
  "key32": "29CSC4ww3D5vNkQ3CqGYzCJTNFLAvR9WQ76JMhTgjnmZqh3DpYKMun4tbCJXFrjmTWWemUdqReuXJWRDr82RxV5B",
  "key33": "5NSWqRcUxaFuws5c8uqSgn3645tgQhxJpHmAvu2Dki2zQtrfBXCkiMbYCm5a9fZVBWnzPX5GXPYaoWFuBp2ZLsnu",
  "key34": "2F97j6uuNx5vJ7zq2P6mtawm1We7APXZ9ASzPKuRQid3rsouDzcoCyQdXmDEkKUHeCD2uvgT3wQEY7iWghWWJfhq",
  "key35": "yhdXVYrFefauQJ98NWscMhpyp61q5tbyxR2sjA5a9zCFNjpykWRBuSnDktsM8pV6nvbaFY4sDK2vibJTfoCyQXM"
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
