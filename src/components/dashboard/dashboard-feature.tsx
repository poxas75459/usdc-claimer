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
    "328kiDzsxDYpWJgrUAwgK3hRAeVqe9WVpEPMGtNVvFenrzggcscfs5uj5zbB5Xg6AaP3NbhY8FRvX4Bb2Rk3d1zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bLKMhXNQeL3MQwWfXdjWheawmKh1PiQ2GctErYMfZ4FCcnjb87W7UQTv8hKg8rwBAxK6aHRpiWEEcMZGffgJjqS",
  "key1": "4puEApA673EMo1fm4ZyUk4CEF6wCxEKTEWT5nZwLkajoFFSCxhLKL7nCQvBBPp17LiSY7YGRvfG43pogZjWsq7xt",
  "key2": "PnQV6VnDJySwX72AoG4W6w4YUwe2nFsA2QUvEVqWD7R1vzeai9G9UqUq2JGMiVJkjiv6gnYGzcA57XKQv8NQdEk",
  "key3": "3pWAzwfwhQHRAWDX6pdcCVvpGHUE6ZEUH8R87wRtko5ggb2FtUz4DnzRkNMToW1YXvYLawUDSKuKH5N1B4D91qaz",
  "key4": "2D42owFThQG3NyT6uaspjJxAADReyoZ1StJS25CPUwWmcp6rVobtY6is8CkRk9j62U7LSbiYWKsGmGcDxpEiTJ3v",
  "key5": "3Tph7eNMRC1pmbunrWAu4W7rN2WsCv3hTvKCBRzxVDkPAA4YWdzgyCZheGL8Jf5yNhmK5HRQo2YTBQ2CDaqEHngg",
  "key6": "5yqRNv1B2Cr7BdCk1ctM2qKpkd983TcbEjhuM8ZTNV7AirtSL2267qS8pq1pe8SnTiSemDdL5SLiFUGvXLRwDB2S",
  "key7": "3w6daJ5uomUpXmvkTq873Hxg3D4AuqJ1aT6cKDnsPw2N9bbVjxmXrRf7HfqRUivpmDsWjM7iD5okmq8ZWxS92rnW",
  "key8": "3JkgHS8oJXrHvpxcgSxLERfWEiMexiwixn3tc4K2AKyQ7eKQetwgdK7rbt9JFC9kyw3JqG6r6R97GyUESwxvpNDs",
  "key9": "53ze8TGnZ77e9TnE1KjzxjuBrrVrqQLfgchpBEfqEU2N6o6gs4Rc9Uid5p7796n389iV735HbWiH5nZ3PePfYb14",
  "key10": "5rVKREmu7S3swN3Wphcc47WErxh3He4DvWjjFQGF7EtfjkYgjMxqA15qvbxNZ5QAyarpuMiSGfioyaPCHnj7By2E",
  "key11": "2sz8SEbfqjn1z851kbqdj4jqStj85C7RaGGrXrj6ExPLAVHhvk3gDY8CaD24Zg5a6LhwDn7maBARfV7DKyiFikfS",
  "key12": "3ECqeqhMipY1VKQAhHv7ph8u2MkSR5QGZG7dPijoEdiMVqCTKpb7bfFZp7bhhYraQZG4vUw56XzqZ1rn4LMyetjz",
  "key13": "2Qq3XjeNHNmP45bR81TaHtpafXmQBdzjrpVvZsXtfdJ7cTgdvo1VWEJnvghU7ZzsKmre8zPuVfMYqf3eMGcTFFcm",
  "key14": "5cs6Dcdhu958nhQUAwy6onzDKyAmMY9sNDwWetumSAV5vW1eYiKuCuTjj3JyurJkxrSZR9F5bQ1seoZ5i8KsyZEh",
  "key15": "2kb8JA4jw6Pe3mmZjrU5rvtu5Bi2vj7u4AwKUJD3ResueQ41M225smbdRHahiHykRCAAT9jXMCins324Mdeujm8g",
  "key16": "2iAWayePUMmJ2CSaA1Wspq6UgumQekdqgUhRyUALcrMVbEq8iGhgzGsRavNGWFaBHqxGCTUcnmrVyvErbhiMozah",
  "key17": "3KuhQRnxCZuhER9ay1yaLLWVSjHWD2gGdbkgZcDKMzKjC8LmMTULDcFR4Lg3jSxbFX6Ds3RqguQb1jGMpFo6ye8x",
  "key18": "2seX7mSzZmV3kSCR5i7z6mvYVKykbRu7ANDbuQ5UXkE7tgw16FeFP1PJBpyeRcfbSVXEdZc1gbAtVJ5KrNg3QaWx",
  "key19": "5qDHz7NHQmKMsB6EkEDzDT2KAMtwU3x5mURPRJeQk178TgiYX9ft28aZs8ojS259d1nJVEoUNeczGfAB6iDVWVaj",
  "key20": "5oqSb66djVoXvryEucz16Bf3DwbhzcnMUUhb2WMQTUguD3Y9zhSYjN3XU5gTKeBg2D35xM98TL6Xgz1XR32hdZZG",
  "key21": "3Hvpw1rhC4PLDTKvj7bajd2XV3WVwTJNdbzMVRZPfxsJZsyf1aVH6b71d8oDb6CKgRKxSgccLTwZAoCeCcGY2Ade",
  "key22": "3gAX8qqtnavVe9KqW38te79usp1sx3bwt7RbW25ssx5wEbzXTJqAkp4QwChZ6dT1gHV2yZi8k4ASpqj7Au5DNuw9",
  "key23": "z8DQC2aPFwTgAbFRZAwnpcPWe5t66rKG1sNA7goho5spWf7Bv12pctbxZV9g9SaRyDeQ97jLkfAMRuNVXgt7gA3",
  "key24": "fam79o7dQjv3qiM9XqjUGfSMZ7tRY8NqAVaeonNuXMedeLmsRJxugTFSZpPyrj6nqrkZ9SMm5YY7mucYxVpkfSg",
  "key25": "5eFsasoSxmvdXivpdmqmPXCCC4gqMo7RtUpE22TSHicKESe1J8x9T2RQerNGrvCfXDhv4Xc5KkJiSCFuH2pjLXbx",
  "key26": "5JhkLVCsR1c2Nsxi8ziSSvcLSdnBSWtdZ7dtWQoPXtaGfzYS9rERXyZgex5WBrJUVHhTuVtCExUjjwUJPbXHQyRP",
  "key27": "4D2E4pn2oh79rcJjm7HyGKfA3ckz814ChJegYs6pnNGq4vb4aRzEVSQQZhRdH8tMbAVoGjPg6kzF7ahfUoNsT2DP"
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
