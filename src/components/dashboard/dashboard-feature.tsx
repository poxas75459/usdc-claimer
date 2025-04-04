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
    "4xyEkwzCX5hjWkjRP3EQ3dxYTEbqsTGWFFkyH1dhPjJrSRekU5Xh5Hdv7epW6kvqYYnCaRGogttuMHHirBXRdqfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NJk7NaUGDHo7nC421Eg4zFtmmJUXQpwk82GafCoQUVUiHkLcTqSjswHYp8N63xW1Kp2rxkUGnXDqk4XEenTVvRj",
  "key1": "4rf86uu2tRFeHz8R16X5Zm1eBuWGTWK5xC5cBdpifgnxW6EzDMBDhWdz5ubf4uYWanarftkAhLivR4k4rC3LQkEW",
  "key2": "5GKhym4K66Dj9R93q7LdrQSetZ1Pc4vWT9gUKrj3T2Fa2cQELEm5VK14ybNAYfX5JRjxpubSAvjrrE8wnJoKJVyX",
  "key3": "4zF1MK5m4CCEsyxFSyS461c6igVu7DhW6qfr9rmjypyM7JzdMQ6yVjhhiJ8RGtgLqpie8dYru1VrPxr7oUJRVxT3",
  "key4": "5K38u32QZYAGH3nYtGHhb3juYepjbCBs4ziDqVyzmDnXtyfapPXQPoSWJmifsZxtEyQipysBbTKqw8amZdszHjPa",
  "key5": "26TnSswatyLnXa4VuHhgqeSqA2Raxm7YY8sttt2R4qhboEPYjEKopG6Nk736uuZmFANYVPeDA9vhXJDVzUfys9jJ",
  "key6": "4faPXGi2DVfcB6mUvBKyYV27pxv5H6Ev2LvYFMGKUbkgxUf5aVqzBbCXQ75vByJ254HnR1L76ToTghNY1k3hN4qD",
  "key7": "5LqHJTbvBQZ55GQ7dbsatdTP9d1SV7Cx13oRocEkfuojM8JUjtekDCpLRAX3rEDTfyrr1QiaTsUemnTaVJZszgMk",
  "key8": "2cwE8EGB9ajHfRq7eU3omCecoVsMcxxq2j5dPpn2PmB76VgZfjAX4kzAXVrwmsCpPYkxkfzVQb39wbfgwQMZKu63",
  "key9": "3AkmhFKS5gtHFgeTrxFsJcTRPQdjALPtApR7b8cDRrsjezFgk33gDZu6hvv7Y1koRyoh2od2jyhe7kxjKgudYj8L",
  "key10": "5w2FC9QUcXY4aJ4QPsWmXwMY9ZCKnEzGty1iWh1WrL3cBRTBMk8w3kxNbVADxBW3J8R2nRzP4tiKEULVP1dbboVM",
  "key11": "5zByuFWM4c4sVR5vtbbYPeQQyUJfmNkHERAApdx8botYMNV7jWSAa7ARaVu7JqzBBsJj3jXpPqkNJP7KRHU971AE",
  "key12": "vM7jm7XRKrB81VfB6RFf3HMuKYA9Z6FuaoSFXAqkix6uNuhUuPproDsD6FYPGQkscotayGeG7wJyzemtBfAWmFQ",
  "key13": "414LmivG9sAdgfqZcL5xHoLF2P23AMRegiKP5K5y7wUfBoLPWKY8Vrh4mxByZS4aNi4gVp47bCaNsGQwSaRRu6it",
  "key14": "65BLV6sVAJitgxkNTLBUFMaCqFGxbT8ieNHMs9LssNXHoGEuRwGMFWUqsbpu1Z64MDD4RHvAf856tEViifnQ5PrU",
  "key15": "oUAbSdYDCTC4N8DhFtTCw28Ed9gNR1tgtw3to6gogJP8SQCxpK5qdjdEa5VBfxonc2YKkAYy1e2TNKQ3wCkSgA6",
  "key16": "oqCtiuecC6CxLTi95NQoGfyq7ya6B39gaUWpP3Q6nntFDN5mqeEcqHKRBwzSTwhs2jteB6M99Di7RuohKQcuar1",
  "key17": "2mwCK1joeKWcY91A8A1YYPcvyTkTzv5TUVmsSUV4zzHGvqFVmhEHj5XiZmMpP3oygK8XqoeBcwUQNZM85daL3rNi",
  "key18": "4EWiLjTfpe4o48j1ZvfKNRHmmYcTMWabgvUKQtkujPRfEmnSLs7GH8YUgjHe9KN2iXxJNLQQ2vbwTdvgJwNwy9CT",
  "key19": "4fQWbdoSaS6NP2Z7Y9e5mTorsPw4drvXhhnthTuKgLP3i9kpAz1zkyTgwq3yTm7CUGEzuED9C3ooiHKm6hNpGJi",
  "key20": "yunfRWizZroKBih1LdNsuXfPRdeAmrJxBuCyfPcRufVs5xbnUdqA2YdQhXcfCCgps9hg7L5waJidrShTUX7xXQz",
  "key21": "59RUEbpnoxLxZwybFowp6xJb7Ajh5UbiZBHvv4sQPQyRY4Y6bqMC4YGpueSy7niphHsGiNWWmpKwPfccGaFMNoc9",
  "key22": "3NtzUS7G6rM39Lg5JG3TNN6drwqpr4hiNGLsxch2sog5VGgcTtk6LzPkhW5LfCiewLQFHYQvWg9DG1oEbk7igC5K",
  "key23": "26ecniWg6ttddLciDWRgawjWUBvEjBfsmCpYim84aWfdKNzLhr6C7rkUBgzPuZVKGs623XkHnRvAGkeZ6KSna8Pq",
  "key24": "64ECkAwuj25FbVUSwRJcvTPtJKJ8MNMbXFmZwFMAGrYRFceodSKcbstaZv3tUaJqhYmbXjtMVTToh8KuRM1APoXf",
  "key25": "57fHsedteGJfJ14wjxzXxd794PfEXNN5pEZdn1zrasdLN6BFyYkbpfDAAcTsi4HhtN5HPw353Mkz81GwoT5XECaA",
  "key26": "3kcUsfQfaE9c62BnTJKpHqUzj3sxHUqck6dX7Js513ujQQRnubWccscVPFtfgRHSGX6ZK2zzCn1hWxXjXXms6m9r",
  "key27": "3to5vVeEgoxRQ1oxmDfSpNc7ck9Bf7W1UULSbhFksXhADfsgsPXKPvth2Eaqad2Er2fGGHyByWF2FeBrNxFsaXRd",
  "key28": "3EnuER7MigpgrRozbqqeAQeDk4FBcBHbdtGVSN74HXJKg1hFs1ENefeA3S7katcxWMcnZYgTJtuNL5X4u3TUGuPJ",
  "key29": "5MMAThsdrQafrQbXrnqyfH6PFM8MtjUWVHQvFKdXmDYjxdh4BsZAdCwP3X41QrM55KFKEVey4e5STQq6aZ8Yf3NY"
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
