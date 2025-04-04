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
    "45W65xWqoiJwuwG9YCKiHsAyGUj2BUPDxvx5MbvXgNVt8eYGTvsnCB1Y4db1KQKQ24K3j1JcU69xHt3in84tEAKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KnqYFvrWv6Ew7Tc4DPsDfNzPu98NPFK3Vka7a3DJfRntTnNMvczp7RWNpabkZpbnCLV4W72r5zJ6AabGynYoFkY",
  "key1": "2jdQbxPTN4CyTCg8nnBm1DMzDMTK2Xv6r6sUUs3EQNnU8SBadyQoEc9ctWFvnS5VFdpjwhNg5NEa9brk5toDF9VZ",
  "key2": "BtqUzuUCTTyrmCq1bfeK3bq3ZMthn4BaqM8VE6AVSmaVsVHVsmrCY9t2it3RwUj9wDRTyPCHz3pYvRcyLpVv6WU",
  "key3": "2LmbENeXs668ag2xNahzmuPjC6YgiUV5rBtBb7SCYjCfHsJLtuEfkg8RyqgjqiyAq6ychuxpfA4rpKmncMHrUXYo",
  "key4": "3KEhPcLGoNcvigc5eYtnyn9EqQMunhmsbvvVPhHDz5GcovF6nssMif4jKiqbsLqfuPCRmMkaCeVCdnSK7EhuPQU5",
  "key5": "3JhihgmYFTiKNQHeSUTn4VeANSqVLrZSE8bRqLzcU5ZyRBcEySejCtQ9dVAty4E4axUjGL3rVyrr7VkC4K3sbJD4",
  "key6": "67F27jWgF969ycRRDXQo2pcvSzUTELAFYNWRv7XX4CzZqHni2FoQxpGVt49FfKqvr81rGHcUekJUfegEbzrM3s1h",
  "key7": "4jVQGrwDSac1hEG7r42RD5omRDSLbwA59n2buQhpnA1dWR4mH1RvUjmdWLEmyhJYMMoNBQPRU8C2a6oFxPXUJNTX",
  "key8": "5teDuLrzsDX6o5y4YjjH1LJrffewTY1aAbSq2R4AE9e5PyL4dHsZszryjM1eDiK5ekMyny2XzY3gzmhTfW3GAEPU",
  "key9": "Kmm21SpEwsaLuEKm1hP5wjZcjpWCzdNdqzmN7JjHFY7PjWyetCNwi2QStF21rk3PMLouxwtf4k94SDJpKGHz9Wx",
  "key10": "31HuypJASiWw9x4NyxxSvdT2QJMW3pCCHhhQFZxzhjSFFkKpViLE6SpbriQNBwjd4FZJbPKPnPyuzgzS7nvNQp6f",
  "key11": "4fNguF4qF7Dh4jJ2vWuJMfjjeus8drRQ2mbf91i7jQ5a7zXcvYSxy95BiiHs1ymp78zH2BGH6UACnPGxH71j8GTb",
  "key12": "7TWbReuYMTzAkAmKTXZv7YqYvxY2C4mDZFaJtXMF9r1QPmjcCi1oD5YRSxj4fj2fveTBpEZa2Aqau59EqtDk7We",
  "key13": "2xqr82vZgo49J1D3Vs4YFTmVyk6NxWK8R5kDXeL4QKm6iL8JoPzHiJpSpeaYF2ySVPit93RSWSZLjWWHNSghY4Ur",
  "key14": "4qJhtjsM3uFAF7qWB2j8iirURFW7mgeK21J4xmESAs2PNUC8374azkdGbKesnVP1qPgsY44oZeKnVLjResvr4Xsd",
  "key15": "23K1NTvm6wi53kdewHvL2fiCv1N1AhiaQGoh4Gcno8kx9VTH4gmANF7Qu7LZaaUhd8GiNYvmPd94VfbTpx1q4H12",
  "key16": "53FszmRrNYmfbZY3VcUDuLsJpJw6u9ZCwS1aFw2qHcpNPxsdQuNRXnjVU2QTyrYNrEhbATVmuVrJ2BMro1Qn6Mqg",
  "key17": "rXbpcg6dmxcF5DePkb3x3E8NNkNAZRCNnYd4Uc3jZQ4Xzak5ZagECET4fFJUCBXL5heJQWyjdWozhwgRJioN6T8",
  "key18": "53LpxbhgVvhb2H4CWijrmsGcXQcYwiDaEPPFQ2FePAUCRTXiTUDBS1LcVBjdC6SFVZ3yxFARWMuuTTyAMzd9QHsT",
  "key19": "2NUqGY4kE5eAWccAtCZ8BrCGPZ8u5j9ozmh5GEnd4USCHXAjK7NxEYSzqWceB4Bots4uiWe955RHtDD5tuankZ81",
  "key20": "MpfEzZe9kFWpHSks1VBDd4vqSWmVBJUP3w8N6AJoagYwcp6ZaDwFC6EFGSZPBgqGd3LizCLTEaAoDqECBbRDv1G",
  "key21": "2eT7xcnh38bg1LdepPagZtUuvmVnhvYzujiBRsw8RKN78d2mencqwQts1xBhxvkKFNPSaimCBFMTUGb6Mu8M9pgW",
  "key22": "5PKbirxzdyXrdhu8NamagsmSuurhTjEUVVHwih6qAQYRV5onAvnZCrea15MVsNrSAssh4AzAN1RCAQuU8XcJ1S9X",
  "key23": "1yWSUgB6PDTfdNjYtC1upVJgxmPEagpRLx6nZBMDs2dfgRuuXmAq6qkfZwb7XaRzeVzQC3oUJGyh8SxS91PPr11",
  "key24": "4UcgYN4W2t3hmNW5DHkCJHb8URouf6EgDp2CdBPPBBBmwytjAhtXcXaimjaUPmsGiVQ1ZuJ7GdN4wPnPpiM8skEb"
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
