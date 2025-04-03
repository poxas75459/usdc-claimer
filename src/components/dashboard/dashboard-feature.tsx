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
    "4k6THjxXXp4nAq49w9T2NGA7MeoDrjmG4czUHpUH8X3YnXdHwq9rEaaAcLMqRnavyhpHAgmjtBhHt7rVNHYugtJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oWhkozTj1EicvEpJdxYyuJdZWsdDX8z95AYqQgG8AhwygrQT33nthh5AX2EBXJj759aZjrUPxoJQdU7WAwLU5TS",
  "key1": "4CqrFc5UB2kRS5Lp1HC3Np8TsmzapBjxSqcpwXiUG1YUXLDMYg5Vcyk7ryyUcvbGNJ5GNXzoiJi3VoRNdweefeDi",
  "key2": "3aNaQrcW6d27E3eExmkui6SVZ943v4TWZTvTrTt67znGDBXCvXVA4RRtsqDYHs8HvpNkYAuV5a8rAYQuxzWGCTNK",
  "key3": "5mFXVdDCkBqQ1RvQfyetAVUzCk8pGyxKBjw1BMC1E4mqhneeXMCfk6up93gveh4y99RChSUXQZQPnMkkxrkuypZ",
  "key4": "t1SK1BYHDFNqfRpiENdmsHb5uGyMRJqrQE6DitBQijiFaK29GX5cjgQBgVwZJm6nvE8M45moVc5nVemoXgrKRyK",
  "key5": "5URcPKB3E38GeE5B5zKp6Y1zia6mGJwGNGoNZFmPPrh8rzqw5E1668RWrr4cMfsvKW3HxiwWxNmsEQ8ZxbR5pugZ",
  "key6": "YP5nC3TEQFzidVDMvbRNN2CGzngYE8j6x6X96Ze8mhrEnxqKKU3WRB8S2bcexLx57YF9TuQtP9S3ZsZGC4jVqSD",
  "key7": "4xERjxAbPhgM2LvnPaLWrK7bkkSBpgcbexTuxfxPbpKB6HZDgwfRwcMbVXxMr29UGma7MVXXYmX9wAm6gsRZYexu",
  "key8": "2VH6iWy9ZfWCL63z2Aa2dL35aehLj9P5G4i2fJ71jF6Lsd31tiAMKkz7x7ccf3k6ZM9aDjnGMug4L4nb6G19xE3w",
  "key9": "5yoQ3ugQU5rzkdYdrPaZ1TKK6azXpKJ46bwfxrwA6P8HFE6AvY6iKUj7c3BipA2zsfqaqtVsP2kwpabP8SRuEC1D",
  "key10": "VfFyr7qYGGdptCjUbQnsRzkXYBPUzEtUz5p86z8zKgE9tY7ACwQUxJ2xdVHb93JZhPUeU2C2mzNijetKyfpZE39",
  "key11": "4XB44qDXHgTwdrnA8pFPpn9X8KgQ84MwYEigJbvJ6te4Gq9bgd948RZTAvpTKhm8Fw81vuQaivjZbyCaxJR2au6W",
  "key12": "5HM3QttA8wmdx1bhWCEmP9u52kb2iXispjUsK9WEV1mtg6KevGvffagX4DzbAZ2qcEXqxFKyd29c197nggUJc2jP",
  "key13": "5EKbQjpAJHpjndzg5hjicxxDqd9o5SkG7mzHxjpumxPU47pi6BP9sYXCSzjnpUVPxtDzWEj7SEmumBQvJjE5SduJ",
  "key14": "5oZiSaeRtCmyWxZ6hLVURQBQgpKYRGry7GvttQ4CrXCr6A9iTpjhJXkSj7Fq4TBJLnVAHvbTEjL35zcsY2H8jP8D",
  "key15": "2JbpLYF7PoGhm243CkBHwWbTHnTD3eM1bKR13cAGYcRbiPsXQagrebpYiF45bPEpHG3ko7Fge5Xf174a5gTqqzuS",
  "key16": "BKy6772AZuV4CUvxRMbJy7efJPkzytFc9fFveRN2pJTnL7Uc945CtEfumSsek4C9Se5VX3pWvSJxENXXXipiBHB",
  "key17": "mbG4HKUwh449avTTNg6UbGtdfpM46wqQ6LqPcmTeA14e2Z6mbTG9azcaahxuoKGPE3u4v6KjoGAWK4e4xuPj46E",
  "key18": "3KuYQgUWuuzP1CFB8V7mvv5xjzEJkB7XwPbq5oFN3VHHB1zjmmuwBEVVtbFZw3HRFxiXMJTpaqibwULJ3tmFhDX",
  "key19": "U6EeufpzzUrgMTKi21Kg7cTF5f46H7gQzUBaY7ziaWxLbbZSRF8EnSq5chiFdZnN9bYfUDyn9CXpm9LJyJi4jtU",
  "key20": "4Skki16BexZ8tGexKpq9ww2tUhPJrUWV4eWxvU4NJVtfmzdmDUhfnfGfX9zWPxPzBy9ykXxgSambo4HBw9M5rpuk",
  "key21": "2Vsciz9iPCsRHho9kyfBb8D9vgPi2kopssv96qc5zLonaPRRyzq2nATBq9z9nykQ63f5UKkS6yEELYJLWDTUqPNJ",
  "key22": "4Uh4T4YoA26bw6HSNkkeAcRMhVaJ1YhSUCfFp8PsCqXhBpRHTUZsb2ALEgxniuhR1UAc1CdTzNxyJ4Mu9ptWryNs",
  "key23": "5oKMCq4GmjYeYkUYw5AxQdyzFcU3FjFqRL2yekepNop5oznG5gsC67ohjh7n3eKQ7TBxuYwF2T6tt9fK9x6tw2LX",
  "key24": "5EwNmEm11sUeEDggzysm1MdcrQK4E7Xprszovb5HaV4xyYxeVDgG4qHCMqMpuT3ykvicZLaqsQeN37LcQ9AnDbJ7",
  "key25": "3xgXNu7EpHR2xNSwg4dn7ncoPuipa7WG5r1WwFMy3371kvtyh7W7ddZKHpYTDASWagasXyLybWR6fFKwV59dJ1gd",
  "key26": "5VGD5pJ2bPHJq89wdQfRD8TPZHaPmFgYzA7tRERMYkjvKE8HqKQhQqRJg6sap7i1YLN6bfAcCPsqmbgBrEyEz5uq",
  "key27": "2eP1mEuWCu5mstNC9HKa2FfoJXfp8vHVjC4B5snyXXhhkLhDxENCZzsRWhP9mnbt2pSM4poBVYjgBdwaCmvQtwvd"
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
