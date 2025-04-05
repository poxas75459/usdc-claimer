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
    "5g6q9v2xuQGtnsrvsqGG8S2AjPVFY7wnHyr5h9XZ6Sum2PLTQXTqf1nsVHpVZspS8UP6McRq3fH5XZBxU8KkxVXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LsdkxnY5yu5oqFZJyMxYGdLJG1osaZKqfpb4RKJgvYoScMAGZMwyyjtEBTqoyfQ124Wx2MRDpmQ7i7MSamAvg71",
  "key1": "5T9BG3EE2dkAcyH7RjG54LvqiD41kJLzaiHm8FiFsBkm9AB3ZJ2WxXBj4v7aDL8Pu5FFBLcHV3EvKJVnhgpEEnbS",
  "key2": "5FX2fzzBviHb9naL3iTuHVc8UQtpdx1aqDANGq3nMcn1UWQz5PRJhayDWzJpd2THXHHjcob9Fs86QpkybkCQY5au",
  "key3": "42shWC1Gf6Hsn9dMyMN7nN4erzn2TjWqtY69jfwAYcAq8Fmnpqei9xZDGQWmDJNC1k8cYwz2weqkEnfeaS5xGR4P",
  "key4": "4hfKutsGkYLtBWZzWguR7Q6s7Tmf97v9toCg6seHjGPzvG39Je4A94f6nnNXZwQhD1qkzCHjKv9rRPEtapWVUU2x",
  "key5": "51sQ6NL66jYnAi9d3T4Y4zNUFvyMBx5pmU7ZGumUoJKGyZFja6BL1LmJYBHfxNxwJPsnxmrTG1eQNPEvuxiVZf3U",
  "key6": "Z8gfJKXiHEt1GWsEg59yUsCkBUhGjbFTuXyCApy9faxMAkMHkFBviSpHNG2u8ucbu8zDqAfL4FVJkdwRUekHxFY",
  "key7": "3cFDfydfkCckqC76zDh72Wq633oTHVYKPeSQTYAfU23hYDJmJwnrbtUoqCwN6dvwroZ5zQFZzuB2f76b7Kn3iPMW",
  "key8": "4HUf1KgursiLTxcGgg3sjqo1kvnBc9PX2uX17en25SfwbYLM7Ewpr8Cnz1yppxhnJyStpEoqBLfadtPANUs8vHb6",
  "key9": "4MMZBEC4ooqbfGvtbKFZoaiVk7J1TcsFLLDtZJTu2AVRZ3iZHCBRhyk5KmaXXQX3oEWTLHkEe6xGAKRiZMqiR8ox",
  "key10": "T1ysiqg9mnzokq15g3rWFxxtyqfcbbmrXZgBjPBf9425vbYciUc4pevLKxNNWvhkf8AxkrFEEQhhSoUpc8Ki1jc",
  "key11": "66KursbP5zLbv8TPDDZhrnyDoC7P1dB5pQCM9DQMRhrqpARd7cw1en4PoYijXRvn2cWXuyffDcQPd5DRy8fMVMo",
  "key12": "3oeHexHHjaU1Z1V9SSTe8LxjAAnz7j5ioSDxAidR77ru8cZtkv4rDjxdipLu6AtDHCY5hvWiMvVh7NEDM61c9Br9",
  "key13": "5fGGGW2e16s8QuxcJWVdnUoxsHzM13joCtzhdoSePex4Sn8BJEJc1uoXxiftdbFtuqaRdtQa3FRSMG44Pd4rZfRQ",
  "key14": "3J6vPDai4oGmWDN5NrL6Z6Wp6VP7fLA8ChgMn8UwNCkCf2A35GCVokzeFd7QSQ2NHePAZgQp8TjSFnvw8oWYv3Kg",
  "key15": "77vkXmJFi62gkAy1LFdczs1berAf7p1XBMcQC4G1edMWLdGUejB1kLrREcVedDk8tc12zFH1sBGJAPugeJUaBEy",
  "key16": "2GTJXzJXHn4ur1FKYZTG228GjfRV4xXcAG3HSMfQoKrEULFN3cNbEA21sLJxFFEWFjsKUibqvtf41mi211QmUJfu",
  "key17": "5T9VkGxakteRX9UHB9JwVx3BvZaFbE1u71ecn4rXUUgUnqUN9Tv9Nr6VVJ89qxvXuUoFJQAgw5qvQKG4AckRQAKR",
  "key18": "35Rn8uHTkvhswRyCep1qZiBZ2hB5uZqJZ7A3gXxNNsMutbEoarquPgq6HgmhjZBnBzZQovxQ7Ds5ohZxPDxCxPF4",
  "key19": "3fYhr6dRU7Re5fvzTg1cdBhKDWXv5CvpJeQ5PV6Xjj3WkgcVAtaA9bJ2MB88LUS9hdMhvPawQGcDDuWa3p7ASJnE",
  "key20": "33ZpNBfmP6Ph6NxKRNZZ371Nts9Uuf1t5DRAGJsjReR26joJzWPiC78Z9Vx47ui6FeKWVWE8XUwN7mYbFykPkHsE",
  "key21": "4He82on6dwPPnsbK8GNiz4icZxfY18DGZiBKN5ZkYEyqFG9oVDEApuvjJgVuukS7hxonwDz3Piv6WVdLwD8UykeF",
  "key22": "5QR1sZsvJBVLkyKx6w2DWrban9NeKr82Wfqr9mg4ZmuQsaMqrmcoB86S78ZfBgTErQkdFHj7uYC8PJbGQshbDZWP",
  "key23": "2xeVZRgmFLPSdRdkjqbFQVt7rqrTYUBRHLMx5k44uxxtbg8k7kXHNpoChQgbN7T99cDpWwE9muxxivBnHDPPFcZL",
  "key24": "2i9CZZRFg2RfHzPP3geYy8KAWVwvswYzmbAq51QRSkhwhzbwpMpRq37ubVnDmkacv41kV7YJKEWmMZ8dhoF4B17y",
  "key25": "Ar6XKXKsvPbVxiWhwCXhCqxDK5EmKHssSx8CYWpGwMnqjXF1MhXKNRbvTf8covPfqEEpdhQN1Q5geo8GaUN6aEp",
  "key26": "49SPY9DTnmkazVuQYwuj3ySPCCLBX8D2sQdF9yj3nZ337aXM7s1pxaz7htDnWkRuJgGi6UukWe6rETFAd7ZCW5uk",
  "key27": "5FyKo2oA3EpMkRahNNmeuTEyErqQAuKPf9ciHNLaiS5vF8BMtkZaDdVHmCZ1Lk4Qa9H312dvTeAYB6HVRuwRKoDZ",
  "key28": "5SifDau3sa3AV6X6t85Y4gVdWcfNnVxYAzVo22jbsctcCzhKoaG8U14kbCmYMVEqeWtb8QCaUXQMmAkYooBCH6t8",
  "key29": "3eo8RBEXAFSGn19Eg29A92aF9K7XN9gAZvfy5qjp2NcXdau2pb9MVUVi1GtPPy4NsKR7WSZhd4c4JVVuzNbnyGTW",
  "key30": "5KrLjCFkvkxQWXDCw95i3VVupydyKpvQb6KsCDi4x8B8swL4vhcmg3oLJvPN3NLuQoACBaBG1jScmhErQhNEBbPb"
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
