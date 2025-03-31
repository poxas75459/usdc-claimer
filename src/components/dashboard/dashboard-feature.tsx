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
    "5PbXkVLvGjJGLS6CvTubSmYjHQjxchNMJX1tzsX4V2BRf26xR3q2uvZeruoNMmGHSrGWk9raB2bzAgEMoJiAZ2wV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RUs76diGnAzQoV36AgFvcn2G2rGD3gEm7rMF9ng8BLQidVm4qnXuqruU7NgtzjnTP76UCphbkUKKHRnNCcrJqPk",
  "key1": "25YkjoGo6VwfazH8oEuw5gDp6mxQjrC28iBcjAtK7EkFi3oLnEUdp6HpNLPu7qCkgFwTm6bQ4SHr6qKn1mhi798t",
  "key2": "4vi8Mfbhuhmtmg4uNo23xJLudtjBsRat7XVYyf2dJLLzRQ9gXPTftL3SFCeyLhf5mnktPVKJV2FwCBqsVs83G65A",
  "key3": "iyc5x7oGe3xzaXGB9ta8G5PtVAG9yHguMpYLyFeLuQawaMP3fg3wvse3EjPaiRwp4zqfneZ5UGbqhm2eQrKCwu5",
  "key4": "4qLtksS29e3XYtYig4pn1ZYoErBN9z9bahtEdnzkdEp3uLgusT25vLDBtqVywc23xnNH91dphjbE4d8YoQcSunHR",
  "key5": "566WR4sh3VpgXdsGQWkc6eo1uLm5uMzRxvAsNST6i3jYZ2armytECyYikXQBT7yFm7pHTujuhGAebgHCDpwrtbdB",
  "key6": "59wrik8Po9pM99NYBPhvJHkmNqVXVHHMJTh43XR1FsuZukJjqk5iS2h3nk1Qdv1Xk3nPRUW1BcDtp762gE4wKriE",
  "key7": "5NHfH2Xw3wsNJJETaYdkS2SdAV6VGUPJcLZoBEykmeZAHaqKNDiuXmt5VNufbMmpJC4VmGeQcMieXX1fJfSQYtwz",
  "key8": "2pzoVaEKtu7CYNJJbmoNE5Lvr921sqQfksdPy2nQM5ueMGpGRD2cvqJ4EuJPDJfFZwMT2HBqtmoMpazymmcUaDVS",
  "key9": "4xVa4CEerUtj79fqiyZwH8HrTeE6wPQDqrsYwYRFeKXKRogR1cPwZG8u2tCZvq5Pj8gnXurgbQTqAGE1Qm5S5Z4x",
  "key10": "367NzS7fWPA4Nepe2CkWdXLAedWNc5rdAj1Fz7Uv6PFALuf8bWvkzwvbsBoHzvNCSksLuzyHXnSQM3bvfqN3rvDz",
  "key11": "3fQaCdQhoqpZdWzdtvwREpNU8SYRvqVoKXAutQKodYTN3xqF5XFptom3mEzmxtDyEocPd1VkAS7Rcb4zC9vFJ7rQ",
  "key12": "42A3REb7ZBmNooBhkFeeJeQEZ5mjn7yRQMTzuivbt3mfyi9QC5DJAaue3X8qJKsGin4RPthJKsQQWYgLmGk2URSL",
  "key13": "49ZNVvwYXPHz2VKneK3vi9C69eHoTuDknUqk8aBcDbLNLyY9aiuqTZE6BxsSZCnr4m1Ts4QMn7nvmsL74qFYXs5F",
  "key14": "3NCyNVHb3zxzT8tCaH9f5Qz7wgmYH4YGW1teouekST6bGwyhCu5njiqsSUBD8ezNDtHPzCAFgRtWmvMBhcyV4mwU",
  "key15": "z5o3hd1v6MdJv7ph3hfFNDuayYL6P4tgzgisG2UemH8rfo9gUmzR9oac6oYTduHfLxAjGK2eh1GAhpjiT2pLmbh",
  "key16": "5LQddezE3D7SPmxiFCcuj3Y9tTPxMyu3Thre661sT1RU2rc4sX68DDH52E3XhSMwznVwZJ4KyPkqpnuYNK4vZZn6",
  "key17": "4dELHJvBQFUygRR8y6dM7h8yK1CPbcgzJZaEJpp32arwH2UNsG4awT5QEnc9utspzVzoVdghbujsri9Q86oRXhEN",
  "key18": "4iK5wcmgHmFEGc98LWTQdMFJUrw33wxj6ez9DQU6m4yLYduTCmxVKLPqTG2yEZsj2Z8y33QDhnzSSYmkkRgjKutq",
  "key19": "e2diZcKVRS5nf9e4inF5Csk2uakAKdPWE6cpfFVjhwv5zxboXx4wRpPqEYQSSk9EUFpZjgdYNyDi4LPCh9PPhSf",
  "key20": "3LCDbijH68ZEhU1vxwUtE1ud9vriX2r245JBm5UiDfY7J34KKeGWwubx52u2gZ7MjTmX6CSoT72cZDyYhXfj5jwN",
  "key21": "5C6vtT2RvKkB65UqRLg98k4uvcfxMKCEUbxcQxnkfNMdTTqn2Xs6i1Lcp72sQs15UTFG8MLGbvR1DAYAUbFUwzdP",
  "key22": "2zPohznxhEMjF3ZbWJkF9QdMtmrc3okKMP9bgtVLGeadvL4NsRFwjpUn2L6SLiZwKSrcnHjuT9aBWS44sinF7gH9",
  "key23": "4g6MBkrRdW5FHgqSaBHoD6fygXerAZt9pvkhnkyyksjV7QXbfMsM6o9t3GNCcPy4P82aDfYV8MofMn2cmgVpyvVp",
  "key24": "4sGEZz1EEKsxgMQ6ZSz5511Qn4kPw5kqYwPeNRYAkN7WGuRkgBSjdYKcxxcpVuqX4MQCjokx9d8n9Dv7PZtVDyys",
  "key25": "3U3hbvyAStcQZbaAVyu2a76ggAmY9R2DifWUxAma2HdcZe4aMfdwzGHwnmvtN8JQnXK9a7n33Sax9xG4hhxzWgzp",
  "key26": "39bqbB38J1e9CWXpGEX3UvTjN7AGduFxg6KtfkVpeSTSdhNuZ5WSEhP2X9rHQTX4ECx71U4fLJRafC2cV7Ubdax"
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
