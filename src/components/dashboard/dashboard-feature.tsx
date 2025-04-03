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
    "2BKdh2wGsbExV5TMZy1ofNear7UcDHQV2mz1r32TMgqp6zigtzzebzf2kp6F77ARmnYEhcdneF6GCHS9SWudC6sH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xUndAjb1HteSs1qSkvkhn5QoiQHpt4KoH7Wv3SKvwxb6n6ZXn1AJbabiEcGLYWsVpVrUaBjxLrUeRbojaHAVYYo",
  "key1": "2RZhx5cvLyUucesWzTPE7xxycWJVRNDwJe2yTYhZHEvZy4P2rsmidxv8SW9s1ZcXwavCuYJEdVxxuE5ZTXWaQnyt",
  "key2": "2TJRsDyAzdaSmdqYw7yMsM36VkDqGPUgEM3MSTPVz4mhdA2UhxB1A6N1A1Eco8qF3TXm8cAGnPCdP777oBmvDUp7",
  "key3": "622eCcRtVmwVvi2KYwDSqdNPtwCLw4cgmeVNUsRF1WzfVbYDwvTqKqDnR9dzJgZ1PrKyFj9ghQn3CjHxQH2tc47G",
  "key4": "23meJyRNya7cRchKBqK8bxqiqMJKDfMZwEHhwNzoMp2QqSJ5YMScKiGQRrHrZvSm4WuqJAt3vpTqbZvC5pEembdz",
  "key5": "ffJpKCfAznch8qXPzUDkVVP5iVKToqvdt39ZKCiicZ1enLYTxHpxS8Hd9YunkeesfM9vbiHH3zpKUM8JpYuEUAV",
  "key6": "4nWbV6Gw4PmN6bTLXuUKNSbhQgDziRSPygnnK5TDwbTMHpPW4ZVmsWcjd4W2vRrFLWfZ1ecjnffzPDrN3rznPivX",
  "key7": "2BaiG5KuhAYRgdivF3u1dbFTeboXBnCB6CdEo4XBPSRbAxAxCLAC4M4GGgfVpXrXHCx6xzN9vAQNWuiXxCXrAB3b",
  "key8": "3MBr1asbwqRtDCq3tGHH6rTzDZyV3X9paiL5pR4JGKCkE1WumVHGVsXddRYYy3pV8e7ZCSbxnZ2rWNikQ99GetNt",
  "key9": "3Y1otcCxYjdA8oDb8hfruVWHqt5ncPVNjXgd7rizWp2YCUVhSj3zr79BcEqx7wFE9bfk1mQy3jqYg4xgir3UspP",
  "key10": "3bqDLmD4fhGJR3kKzf4XmkDeFKGjm1BUqWDUh92AdyKUSKp1jSjrQjZVPGGzvgjo6K4xmTZAJ9gcz5PZfuVqYpjS",
  "key11": "3aACWJd7PAB2GUPS6bvmjwkzKnvCaNtFWvhDP9aUvrgXpveKmXEMPQ4Z7ncw6KJJdLyJ163UED73XkQAXg6Pyiyu",
  "key12": "5cf2jKE5bLv8r24SYsVYTCkZ5jvxmkBbpqp8vynvmJGCpkKKwJaZT24cKixiUrbQBoUqwtZ3ihjXoGDCJEMjbUaf",
  "key13": "2HiAW8fNRDng3ohxju6GpyFPxyGX6SaguPFoMBjB17TooEvSERSUeS1Y4NxXVubFEvQBGmqbXTNiF6io1zNK4osm",
  "key14": "4qh8kicFEm9BpFtrhuHxPhkj8WxgYL5GPWZJERdGeXcnmYVVyfkAov2MibyLxtN1k2ZencfHiPugqmyTqPSP4tJE",
  "key15": "2q5ForYYghFvZCKKL3B5rA7JFRk4wGs89QPyNTiSVRcfPoEGdYqy5EpQ698YFnjvSJwnWPoi3LAa8vxsaqV1dgP",
  "key16": "5uXxGLxDtFuKJzMpUxNvcSip7YdP4m4GwNBw6ecSw53igQA7XF3ChhZTNXZitwXJttPjfVa47RLYVoDCpdSg4Aoi",
  "key17": "5CnBXhZ3QKm48ohHRZCYRptNCnrRnXFJAWmdhKbP3CgZThUVGKLDkWU5U5eQahLDTLP9HLYLnrXvs1BNBhcV5GpB",
  "key18": "5phVuJ2KeJfiDYgf7Huogq1TSpvcuCUPXW89RxnGCzj2SGwKvTptENqwCU5p5tcgcCVCBC8fiE9RShj2RswuAa43",
  "key19": "5XTuYx4UzVrWfT6uDmfyE9Uf9EHgu2PATDtyHHpbY6Jtouy6VPBDX13brJh56AiGZNmBxuu93bkibUC6PMv5S3Xr",
  "key20": "VqiwQKHdSvBBJbLuMCwwopQYJxwn5S43bYFWy6W4UBjuhFAPTNoWF3LpiNif1CGnmH4NW4xBAay8eeYfG2Chiwh",
  "key21": "2xcvzw4hAL8G9vPPKQfyHQJszTNPAVjg2K7oymemDYRPuJYHywfSDkPzqUAETTh7rymKsHgdya2j3fd6erpyPX8",
  "key22": "46ctBt1ETyXsGc86ziufAzQKHNC3bQVtsBqVXedHWwRys6yvx7Hk124kmr1rpvgcmkqEDhaUdABdAz6M9CGt1o9q",
  "key23": "4ENJMd17VhAgCwyp48uvj93p8a6Fp9YLuNnn6MLmX1Et6PfLRktrJzrwugsZBgjzSM5mSVkJpkUdGuUfJfnaXU7",
  "key24": "kxo957E81S2xLPm5fJereh3rpqo8NQYz4jngQosHmc65T6Hyzdat8Nw8jzs9LvPq9h9cxDTdRffbXxKZZ8zXH8h",
  "key25": "37fLrs82tDECbMMW5gu73qX5eqkF6XehPscSnRJtD7o4HHT173kpov5dEfNob23oZdSqNp3QVktKAaKpWxFL6r3v",
  "key26": "Z5DGpYGHAnv2sv8yNLy1frYMv5fc4TZqTEXttokRGEGLzLsKA222g5R4GVaCJGxAojWXeqPdqdCKtDPCtjtAcZ5"
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
