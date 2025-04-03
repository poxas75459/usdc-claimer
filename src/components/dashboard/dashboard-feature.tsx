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
    "5Lf9QUA1MGrDAcBa9cdq7ikjqYZPAe1oXfuxKXLXXcxJsAAPQ6vCHo5ELoVMHFRThWfLQzMJhD7zpxCxcGY1sCxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JqawnoHvtrLuejBZSVvHr87Tn1nfTzuHHwLymWbZYh2goAU4CvQocbKJ8eRkG6UAzarFoFrtDrLQ4BRyTcvJ9p1",
  "key1": "3Bdk4hAZr6xSVcY7EiAAMFMoCwTF4kaTQLWYDHJhbSELhpQgcUi83LCHapk4LMaMTcyN772hjjgabf838EqLCmWq",
  "key2": "5QYMon1bux5tfztmQpkr6ekVt8zQkce4E6nbaT1rPEv9f56qZF2CNfmccS2EPSCmYnEsLs5kVMuQr2yggEuQfFxV",
  "key3": "22pF84tiDXsGnoZSk1N9U4TKqnDqmxr2Eu49wYmm6FEQDPWzm1BorBHgNWz6GhYbGuE8PQFH9b3tej6nZQUhQ3hB",
  "key4": "3X6W8m2qKReS9j25wYVjah4tgmwZq5nUzDBQLXdx6HBJ1HcSVPnwz8ZQuJ9QzSA8LJA4GQ6PbxgY1wSnQKpdLtxT",
  "key5": "3cz7eau9Ms1gWmFkZ6GgSoKRSE5jfTczAfRhLD6myQeBiUVvGniFPQCDREgPrrPgPmFbCffXR9h3RSe32JQ6Q2aL",
  "key6": "5uMVbQbZHKk8VFqFjNMMvwFpFHgbMam3fMVstsxBCDs5arsQXYdpRhq3RAjaYRZpuNLeXj88aVKrNFCNXZzEJsZk",
  "key7": "4yqfiH8x2Q9F9i5jRbQyVop22x9mULMozo49qLq2pbrPFBY1w9iZ9KBc8SAimHkZqsTwnc7JBXizfW1Xk568C1zZ",
  "key8": "2jnXyjQqLRhuAhhHK6kZ8BvwQufr9L3dvEuYimANK8Mz3EMNob2vB7c3v6aAfxTxbk3TCKi2oRKURqii1kMMXwGQ",
  "key9": "3jewCqJDetVPdgR9f8UBWRUsSj7UDeMPe9U2LtBvLQtWyVhe8Tx7sGrvZ9AUCQuR3Hg1vhZzq7ryzHcs6mx4vvgL",
  "key10": "4xjeUjpc3jsUcJffSxt77X5LibvYFFnWE6jnG71NUdrn6azahrBBgkNB2uXD6Y7kFMLQ2Ezha6n3WfHkhg8SNGRf",
  "key11": "2QkE5LY7YKyGDJVpMsbtKciBcBYApPcpfhZqC8W5LXRsQbtJMawB5ERbn1UGMw7syWoEv811GHZpWKsirpSfenrW",
  "key12": "MavhHWuH6E7MyGjLrvBTi5KRQDPsPTMPZ1TqBX5eoqJ29ktREAhKAN1ZQ1G8H4TMXUJQQywwyv4xdwf7mxFDw9e",
  "key13": "2uQySDaVeSn7VVRfiaT2BvrRshXJecDYXzT2i5Gh23PaVPjrRchxFVTukSFMfW2e4kXfYJdBe8RYVQHGFo3bSmYe",
  "key14": "QzooyqZEfXWtsEgKZ6CGXqhpswK4GSmv94u4u9oX6enpfAqrNj7GvwbAXqzUKUUE2iyrj1XtmEvpnS485LeB5YW",
  "key15": "4kkj4DMPEb89SKt5NBNGMHiH3SbHiZkQ9p2zNrvY2A5KveqMTMtZTWzNU7Rw4FYXnYff3fe3ti8XzH5UnQCYubZJ",
  "key16": "3ENFDpjme75AadVZZyTiy673CbDRdModfDawYE8SXBteish9AUbDhtCoC3uYn2RaBqRCVk7dkQurAR7NCf5KFta2",
  "key17": "3iyCinNuxcD61aSnXiLq9i8MTWw2gBPaXf6LFG7fFVAaFBND2LP2PM8pLGFgGxKoTPxubd6JCXEE17BWLoDkRCtS",
  "key18": "5kWVpNxtQLk8bxU8Gfy5zJEpzW4tY9tdMLfcGkhFnHL4wVRpt8AJgqtsRrHSiExucqirUaTtMaMAUdo7HWD2aM2j",
  "key19": "4eNP1321nYTP8k9dXjm9h7PRZvoge5k6Ngxpv7b1kQ6kZ57hPauUsLK9VHdjCBZwpNWvdWnM7jFzrn2BV6n8dBRB",
  "key20": "Nv7AMt82gb2S6qaqTHW1SNemU2DhEEkSBYkGhZ7YdZVkHvPBL4jUjY1mhJWJ9LV95BfueNgcBebNAPsKpyCZzQy",
  "key21": "2f7JjzPuHL692EftiwF84fCbLAVFct9mhM7qxHkdf3nCoU6kEbNY2z32XaPdhdshw7GcXwp455DJt1NY2BDXaUd2",
  "key22": "4uJkp5LuSfayqCa4BJLTnt8k4DrwtjpQm7JMD22pHnLm3NJ8yBg9nAa3F9een6hammKqSsTaAKDxHKtU35vqLeUc",
  "key23": "3iQW9Rq4q91KkBmpc99anH55z5B36FsgJYGroVnCWepUcrHNEhuSyV8FAuDp2UTpCpeHn9jyZnQyo1g5h4tzvtCY",
  "key24": "CbxLaVXcC7ayepPptB4wm8sHdGCuicK9T2WFmZqn7bDyNqSYQyT1jowbSrVYrvvBtotxYr4rgFYGBsk3Th7UYaa",
  "key25": "4ab2VQUqub2bHBRAGaF5AjuUM1hKV3W6YokxtxqNUCUu5T9PbS5BGXBypuPCntnHudZYcRH8pPyEtyum2CsC6nTe",
  "key26": "3cwhUXTPDetgWMKazZFZfgKfUjaPo8PN8KXJXBxJWLycfHY6rUJUyjcFwPirdge4AnsaYw8ZbtSCYf9uthTPSTRv"
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
