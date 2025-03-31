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
    "Ak5VoUPrPYa7Ey5apMj35RKFwSxdDsnUB3P4nLK7KHjpQTLGeMERPC5fscEcPFbFB1NXBDC4pLSqfoe5Zc1JZXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HV2EyygKTWBmJRVz59nMBsKHwpTGh6vFPXD4b72xE3Qke6iVw7oS9j2nPUTvFxiT1xJ1JuRauUunq3hxj3paYQ8",
  "key1": "4aZVj4USYx7YSQESfgmxhJ7ca9wKBAU63kAZ2bDL7jaDg8UArBwNxSvPokMaBLxXErp7cX1NwJeGqicdk5jAVJe2",
  "key2": "4rnvRpnBZe4nW3gkH38bcRgmcbkkvkDdwzyTv73XF6SMptui8NsniCf4MJNMV79aFs23zK2D3vTedRESbMi2gPEm",
  "key3": "3WNx5wgmjgNhgxdPZAJjNZNJuM4y1Vb25kZxo9spbc5w2PnCQeaPLY1sZ68qWYopo1XikzsBs7CqicqWjD1y9Qii",
  "key4": "4tztjYCikrawNGBpbFrfRUnAxFfBCJALCkCjBg7WaFfq3m4xHfnBdUvurpjSMwoy25bXe6quzDbXejcANvMDsva4",
  "key5": "2vT2JhBtaygPykVEt9nJ3ak5y1fLcALZUT4atvtguwjxkqHApvukzskZrmpkE8uEyUnfAp85fBHGHiq3Ew2sKzwE",
  "key6": "ZbqdZVUb1pyyqJj1fHZcwxMWg7mvqYhjFPEAQjF6MYZ6CdbGCURDoA4xPKf5jpc8oGPcMvnCoLGEJBDR8vkrRAK",
  "key7": "Kc7x4mLPwSzoRjkx39jZQbS68T7sYomMPkByXc8FnN3ytyHaUxgWAdnLKbvKhcdobFvgHcCDAZgGvLEArgsF4xW",
  "key8": "4QrvqhFP8rziG92LZHLH4PvfbeW9pC1qTWkWncS1xpa3AbE9gNXnAmhDiuPmuZxPL7iTeQTqAJUXZ7aV971v4JjH",
  "key9": "45SAeGQChqJ7z5P94Jn7HLbM5fs1CNn4e6jesgKmtMrb6m3hWWZpJ9wGPKGozFhZBfnHfLuuoS5Q4rrXV5WXDcXi",
  "key10": "4X9hB3ko5skrYRNVAetcop6GrDLLZcuxCs87MJt5LFFZ3iVtUreWYPehXHgnKF43k39ZMencrVxk3oELfNwZmxAC",
  "key11": "kYuMYG8ye5jwDCsQThx9eD4wxKgJ2buPaAkakWvTiXtC8zY9vnU3B99SiqZkHHNbhBy5snQEYJ3QQnnAaJByWE7",
  "key12": "4XEZKkmiAXh9xdwyGCkWkGthKuVJn98M8T1igkJoyViufkR9pU2ZiXswv4e4dWMWEMNraacsK9AJZehAuXQW9zoB",
  "key13": "2ZUmBKMMfW9n9YrxkgELyydsCquYMeoFXuXxgyRd1PZdgvWTx5GCRJxYMBvSBjCghAcKPpfXYfWRcPtuhEvq9M69",
  "key14": "5iY2tUJQNzMo9gsTTrvZ7AA7efBjA9PNbwKoc71qjwVwYjWSJrxuUBGxQTjoiF9pjLJ4rC1iB6eUrTDJbWLSnz9J",
  "key15": "2RXpi6cLVq4KEV6vrY3WURzBoer2nCqDHBEjkAyxZGNESsnDEvxrakGyN9PnBEqfUyuAT3A7SBM6KebKx9qxvsGc",
  "key16": "3S4j6mTirVKS8kJXcqfaXjEaU1uJ9J3Ee8qs746TqWZ7iuQxMb5Tm45r4JUMSHrEHKL77UMhiu4BaRX3RZFf2ik6",
  "key17": "H2z9KjGVESHxe9SLLUJHkcvQdUYv1yuMkU3L6yP1pYmVL9n18Qhkd1rnHmCivPQTfWsRE9rVYUTdgP7gCPbUbLf",
  "key18": "2rzkuMdFRHFjWvBzk4hjcVgYpyzjopM3Ey4bWier5A8EpMmYxPsEQP4WQD8NTQbMTfTF24Q6ru5rx3hnu5ZodE3r",
  "key19": "ftwyUVWjEatXFDwNAUHvrqQR2Fr7GGePHVRcmcR765gVkyQhcMakgxC6RAw3UM29yL5s1EWDdYTc7iz6ka8GgeW",
  "key20": "5qTBFMUV1qS1Ay8RCpXTMNqYVAUVxa4pqT4A8CKXAQHEmeRWN897E1EUn9ivi6kgg97gUnCi15gmd3JTwCkodm7Z",
  "key21": "4edhAKTV1shf8d5gFhM5T5cerui8pXtwRv9cgpftpw6mmoeMNBazJa3ALsKepYuazu4EFfBpc5qUYrCTVservmR3",
  "key22": "5eUn7pxWxZFjtktFvct1Y2b694NKZpDUNASsBcGqu9djqr5qfznNwyLGE6r7BGJ1JgxDm5FvaYp2zdMxrrBUDjEW",
  "key23": "3qEsA9dcLELbCa5gZKFQMVJahK5r5kRoevLeA8nEFnUMrLLAtqNvAMYaoLZPqSq66G4eE9zN57qF8fPkf3bgRTTV",
  "key24": "4rYVM5LWRf5YLs7BHURQydbEW25aLf6eCsK3ktrGgZGQMP19VrmTbu2EqmKJvRp3heymUXqx8xkiAVmyu6WKyDug",
  "key25": "2WW9WL3pbqzRCdcoZogmxKb7SC4149j1b7ghFjdgkD5soPs9bRx5tkF67R6YJfWP6Aus3NEuznUy6S8W6ZjAGuWQ",
  "key26": "5EC1Qsakrg5bHe4zCTVGKsT832WDs5fYPzwuT5GSDUpPJXfTgJdwEh7SD1P4sXpENSEKkAN497tgrNMMxiHHe6VJ"
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
