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
    "2UMqnBUXwkE5KLk7izbtGWyEFM1NiEAd1WdrKLNxWDKAsDggw8UBryUyF1FMfaivDu1msAHqUAjepL58pzN6kKwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LWMShFidEmB2PQTZKxvprzGGJmwWVipv1xgKEW2QVwuuvto6kb7uT1AXcqgt8cjbc1r2zTndhxsLiYoZnx72rqa",
  "key1": "3o73C2fx82QqsLG5PCGLwjKAwhcDF7zN2WUsLmPphkuqQxCHjmmu5BFBgTTfYaNZ33hj8VVsK5ukaB64ykvBybAs",
  "key2": "6wKpyFLyjwzrga9NDxzUXqFi1ZSY4i1eDFVvv9KhxfMpa43Jb5y38yjGxbRps3ybNceADHLXWGM5CYRNgMFpMoH",
  "key3": "S9JM82FRSbjzNtuoG3L4AqqQTUDJvZsZ2JNYzZf7iXkiS9mRBeb6Lc2daMQgjnMjYPbQKBGhGD1BeQeTWCcJHKP",
  "key4": "4MRX4k83QyTF9hhEVvmCxHqtHzjYJThoqL7B9zVKgyemcJs62g6vqMZCb6RFfXY3CjoZf5QbXRMjwrnYqupPTcHf",
  "key5": "66dVxRRPJ7c9hPWnisuSkoFVHHZDJhNPkofVjFXR7nUTBZjudq7uLhowgEKe8AvWZ9kFQnuWVPKujBp2gAV1cmUc",
  "key6": "xnkBd4eownPR9TTJuQocDzzd6nsCxkw7kGJvEo4L6aWutXiamL2qSybLqjnqZ8YEmyT7RDy3WFjd1vPRBcUbbqG",
  "key7": "5znrBvLPtQTtawvxoV6FKZPE6uWGwXqTSuaMYkrJSAohxSWZFCBzaZwqwCiVhxVzgtV1cvbBPyKkvsY6JCws84mR",
  "key8": "27WnafcXgUVU7jZpqU8JfJYkBzev4pL7teWeoxeRu3ZGkkEXsAYZniniZfLSACXVFr7rVeiEk4KH9r8WFhQVxFSS",
  "key9": "31LZZdgy9E39BsswVLtJCeoHaEV1WYJPp2v5TzaDUZFDXGCRbAsBpn6bpDuhtSQvGF878caT5ncdmzW4z15RNFDw",
  "key10": "JMtwxZ3a9JXFsdpM9oHHPjGvXArMAcNHJBVZx499D5uiLWarfoeEx8fu19bNKjSkmVgScQf3JxU2h52MPKzfFvt",
  "key11": "4TSiqHDwniqrLTSMAL5gdUqqp2dTApQRMKgzALNKPMwRGhdjkvjwUMpaKaFULU9PtXu3aNmGKRYDHQ4madod2swj",
  "key12": "54uKU751oLTcQDRRAyGdZLnpgPuY6VRWjpfWL4YwTYabQHHMx4aKKoVtiaL4pSaSJNdjexKrgKUhkCGGU5VZSfgM",
  "key13": "3pfsMdw7gNwuqwW1Kp2dSwgb3ujdT5aTnJHCFFGDcnN1g35EBpyi3N1DzcpeCY5EXTbYrshRPJaAxxHwsxEYggz1",
  "key14": "zd8WdaAPzx7vUqWzdL5bcvivbN6h7BpU43Xdc3fWFfB4uGCAvTtzoGFiPaEsb66AugRzURuFDo3F5W1sUZuCWpi",
  "key15": "HxKDWo33RxJLiLCseMgSp5vGdhNwKvwgH1dHiQD7PRJfYbXNBx7NobhQWXvYJavR1qoJqJX7QzejYVJpg3Ei9SX",
  "key16": "2VtBM9Ujf8f9Ge47YGXhYBBDwmg5X2QnLyRf7ed2uqfQbob7mbj5ApF1uh2QnJjhzXZ7tbeDV3vtj3eZow5UYZCT",
  "key17": "64PFgXe7GXa5mx6RMHAxScEYmdEo3wPe76jq74G3hHV8BXFsA4pMFsLxxbFbaZkcW1LKxxpTxYdMqLjKG6YqGyRy",
  "key18": "29UVH5tQBdfJE3N3LkZsd1AnbQs2maAArjVhzPGhWVZ5WB3e6gJ7aiNbQXFSb1fwMAgdkF5mQ2uVDRjrB4ZGus3q",
  "key19": "HUNQAn8wnRHZgBKuA8ARkDwLxZgWuwqo6XLBzGtSgs1vtw3HGrKP2aD2SWFH4JxqGHWudXXpScSihEsMHnXNYzH",
  "key20": "3bj15zzzB3gxbSuEub4eiZVUUWL7XhCkWnc8AXKfT8p6EDwwD3S9vZMYXez5V8Lia68pNtEHJ8xHMXnoaXqM7hhg",
  "key21": "2Rg326oLhsf61V1fXoNvd5BoZF4WibHWxYUiAfxWDrrveYfdhoUi37ouH4wrBzf973hjB3ZGSQiJvBmC83bWu5VD",
  "key22": "4hdNPtFLemhqvthBcZUAciFFEsMJRoYUvtMtCoj7uzMsZ5qr8AHwvEaFJkNrMpQZVwWTuKUBMWkFYPVtbwGqusBK",
  "key23": "5EWBVKbxgJ1ZsEhY4w4MhijrnTiZXWeMPgWzGxSiroR5VHk9W7twgTocHov43EjRryRZ35ENzYuVyR167KZVgs1Q",
  "key24": "2ex9GZJLaKUuJU1EeEamNt246B5JPGvN6sdbhDRq2y6cpcz5Bqe62T5xDGjQVscmU7dxBs1nwj1bbKzAFL8zy9gY",
  "key25": "PkPsS11H2inaywX5z4CLhb8gAJb2bfVvj3DvAn6GXs8aooNaesLJ9DC1MHT9Cao9cr14hNeaHqeGbisbjvAEQN5",
  "key26": "5bCzqxnxXcPeC6A7k9Eg6fQqA8LkX2fmrCfv52bE6L3HibHt198VYEp3TREbhebUnms5NXqG1nFiRvaCbiNXFBt9",
  "key27": "4na8B5h25rWT4Qp8Kge42d22j54AbHacntR53QNhpyadkHAc55auvKXnDb8Y1LEF1pRVMgbMX8GkYTiKEkb7fnWi",
  "key28": "3Houev3FEz6Ba66ZRd7L7JGXcxo8as9g4Qv2vagtBnxMxjLhwJKJ2JVQxt59H3WyskvuQasqbqPjRfWckeCNt7hk",
  "key29": "5yhXpqaYNmdWP4R3bsDPp7AkY1sMXjgwjhHK4S4ymBg9qnCprvuf6Nk2YreteTntunwgJ1EjSQcj2aXvkxSYT9Vh",
  "key30": "4W48Rr71hZyfjRA7gETpey7yTjPNnGV8hVbLgRLbXwb2EGUt3qChcDw1nrHJpe7fjBAEWbkwGmcvc6w4oBGciRjR",
  "key31": "51orp9iSFn9RJFni4zcCDfn3pwhtfcXhjrGxKHE4B1d2E6cULu35WXG2vm3V2ErDy6RwVtgmtf5ViYvcvW4DKZDD",
  "key32": "129zg7NXsYRtHzN7EkiXfRrheYmT2MDzf8UJGMV965C9k8kN5ma8BhECw6QYjaRYmEZAUL7HgmHRdxkfYYQ55Zzu",
  "key33": "2R4A2H377wcbZSnefd66vZ8GXCXBYjJGmLwdZ3vkzo9K9ZKLEbxW4AVh6PuJGVq76e9eydq377CtomCwrif4JqiS",
  "key34": "2CbyHnFegeRmrWKuAZgbGdCLSieGno5uwRNjF26YJvHKEcQ6HLYhoo7dp7WBXLiCPuhupoqtQhfmfJoNgmgZwX3d"
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
