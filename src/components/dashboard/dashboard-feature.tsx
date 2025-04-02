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
    "3gMpt8Jq9p5i6pFjp5hYk8D3gT7azsyorWh4kV7wdenqD3t8EbZhjKvZeuXKi7tYF6crURhHe1cqhCi7h2tbsSDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xhkkuHo9DjKRGTof4ujU2XRbEcY36f8UP4SMS49xbtnFjM4vncKfqTmVei2B6nx8fviqcyZBRd2gX9XfYXXcVXG",
  "key1": "4n2BZzGWAkdoGNecbM7DEnE7Jk8wa5P2Hbhd3ngdCNzKtuJkQq8L6m62R8B7nGk9irW5QbiavZBwrBDsfUEoXB5k",
  "key2": "2Ap3UVa9NfJWV1DfFSptbHDC7kHEyGPovnidHpUGoPiY3djttpCk6rkqF9Y3hMMdRaU6zFKpxvWksnxn9ndzQDGW",
  "key3": "2iXnXRw3owc9bssnvq6NC5HMhvS92M47821AADua3nzstm54CMqU698Vg2jXC9Dm3SNQRxrYW9egt9G4Mqhn7pzf",
  "key4": "3aCY7T1uz63Lhmazz38vfegmWvtZhDHAPobFdbtEj982SM1YLCw7qmweANXhN43nwpXonfvyy1k5tWzcmvuvbcxP",
  "key5": "5iv2ACVACKptxTurbAYfbhXmSyZLv91i9kbraLTBcC8JtrsCXdZdYoCV7wNceyLGz9zYJBrQXSmnjS1tsDMdYdF9",
  "key6": "vqoFJi5vyfHZuMJCJhFFNWtDAngsTkREearjpYujisPdS1CFhD6AgWWMpy1BWwZWR37HNTMXrZMjSjoqureD5zf",
  "key7": "5XvWNp25vApvX34fpRbD8gozfhJmBu44GMeXxZZFybAH8skTxHnHnmCt6gCFMmxgNc9NiFy3Qh5b7ghzBCmaUjaq",
  "key8": "KL8yZMGTAtFPh5EP9RgmH5m99M5FLWFktY5zKNZCv4RDNt1WVt5bd15L1xXrYF77nHa12FPciD4SsDhaqvWd4hK",
  "key9": "PjGs9Ypu1ny3KyJXTHVaNoLtSfS5PFzU25ksJLNEMURojzSi6n1Q1mKDMGbQgM7e1BezgqHDzqMP7s2QLbPZpCx",
  "key10": "4ygxFVZKincpbkADm2o3Dg8ZKQFAx3EMERkEePBP8q7NSb3s8VkXcW95KLBcLLcd1Xprfs7ydAEQZL6pCoKuYHj7",
  "key11": "3TVK4XUqzob5NuNiDVYJVZibvTYirLbuvxmTKNaxCJirjQAArXXorcWEaHQ6bXR5PtkF1aSKW59dngjx2mZFtZmJ",
  "key12": "3VWuboWdsGBqxqf5gYS2Bf7cbaYsvdNC1cRve896Vij3QVoKP6aAuaMBh8n5x6EMwVCfXAKsLrPJP38g8uA4aFTF",
  "key13": "3uN9uRjZF4qdT35EuKfaoh8JjuwZ7PBECEAXGMdNvxWqSMnXbEDABBG4rJ8Bg6yntL1wmuRkNiLnChibSBtrAL9d",
  "key14": "QB9T2AhSu7N9dBoXwPNFdtDPCSP1pdRhUSCuwriQGEkQRpgxV2DU63y86fVNFk1Y5Gisg78vMbSRSz4MbkrMcxY",
  "key15": "2LQdUfxpZmsJpvn8GNUBW9cRw5ixWDRnvvtgYKDWefcj2Lz9nD1TYm25K4ZbccNxAhUW1y8Csy3caNRC9v5SApXp",
  "key16": "2DeynENdqbiS5uaVTF4FU9KaAj8tcdYtrk8QkMq1nq5hYwanVyCbKJFWSD7M4oaNNjPFWRNzSXQKjckE1FWQXCGe",
  "key17": "4ddmNA2H3ZGDPFDKAiXpvyckDTv9Y5j5BFBseTfYkwazHmzFCNSDJkfGXoh4d59SM2Gxd59UmEf8XEYVi9m7yiCy",
  "key18": "4ypodGGRYh67aE5WD8fMtem1zvnBXXT7dmBCSESvuTFuSwi8QevzrEhGk95aVjhXY66q5JgbGPdh8HhoSdRXieFD",
  "key19": "jb5TCZ5iFNFeHEqSB8VuL4UsnkfuHX25PAJwA69aVaog1cu4ajMkxxLZKyPV6f4JaZK3gYHbgmxS2VYNeWm3BQJ",
  "key20": "2LXR7F6dEo99fTqo1r7aNyURAGG2GpUBeG4UKu5hXyzFjNgAMsQbjf7dNo5no6WkVDp3Ahc7MBhHuGm3qeraZEiL",
  "key21": "3YeKxuofiKyWTZkF8TksdhGPJ28bqizP5Egkxvcyas1BsiqUKGx42PmSpysHvHSsqxzMV4C6JtPnTBKYXHNp2Jv6",
  "key22": "5s1uGubB3oxUqZ3F95bju6WPT4vrBXnhiu3omxX4jJ76akGPToedCtV1q8Zs6sX8dwaTYaYCRPywFaat9uretmgR",
  "key23": "5Jk8CAj15zY73J7cErjBAnpfLpTKpBuCLxBS8EdyKGMosVW73QWBfCbL3yKbiBpFFFfy3ZAEs4m5AFiNgwvWQSuL",
  "key24": "51o9ChZk5BCEJsCH4myXYxCirsWuJVsY6J75FezWwrZysCZwwfxCsJTdMtwU2EDGNX7HfnFmxVMcg7QF3okSYtZh",
  "key25": "6ZGmkJcTb9PpSodubqyKcV47PQ9C6bNTz1aobpggHC29c47W39Q8dwgPR78aKgrAKj6fav2H5Vszd4FkqsXsNEa",
  "key26": "3LU35oyP4eJXV1E1MvDAicsXcGYzk3D2mYJXsYqyTdVdLqXGXooqFzZ3Etcxc9Nk4nBKCb2JaFHR1DZKCmZJkFpc",
  "key27": "fZA94Kp627BJWd1bggkSYHKusC8gBoJoiwofi67N5UaRECD6LjGcsV3n7tkGd6Pxh2XeEXdiJnPTQeRjLAxGNUp",
  "key28": "2ZEFuz1n7PmMNqtUYciN9Z8uaRDg5YULyym8h45Wu8D483VeRcxGfsqnt1N5iDFzFVCJ3efEzmJ5SEDyWi5PUYrH",
  "key29": "59mmgLb7Y9CUkhrz7xtUAp7C5wv7GjMhUd7EJWX2G2PfKSeeYW33sK69jHhMNiK7bzKcjqwQUdRFo6LjVeM6tKnU",
  "key30": "5aw1pGyei7W8NWCXgiiWFEJz86oXdirN5Bw1o7QTERffYXX5d36EzfzLz77qZJVAJpfpp9hLbZ86FiGke8RELBQn"
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
