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
    "4DUERchWF8y7ArZ5ncZkpLpdxtrMXd9xSkCpF1jB8JUGmY3o9RPYomM6kUq2gL6Prc6qrxT5eKj1HKHPDKVWc5qb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NUy2ok1bCt1fS46QsPE6ZuDHU5eB1jU321G8CN5DyMoREHtnUhBRfMNXFXG22ViHqAz9FEC2LdeS6TjybX7Bwm4",
  "key1": "5bsyqBUy1BEN3mzv3bkMVi4jyXydYD8pvKr4i39HRp4U4PKupVrTZLhXGnnAPGySe96eyGeNpvzBaM8DbfQ2fne2",
  "key2": "4XS6NcsCBF3To9tF82irPQM2ibjSM1WqwBbfeNqxS32qV46sQcg6mzwAwP5kCWUod6N6i5FpmUqouZDHx6SAdpDh",
  "key3": "2hDABm4LCxXbX2G2Cg1r56qF7fpAUevMwRazAppNNagzzvasdaatCLgqfddS8swH7Sb2upcgbJDXjwz8jMDP1gG2",
  "key4": "3jkMm8B4BPcn9EjQ9GFZjxkZTsVZRgRYCT29uqWs434b4nhpgKkTXdPwcqazEUV1AB5VJ7Luob7USfzyxK7ssmGU",
  "key5": "47nbb5Ertcc7xkbqEwqmX6BDmFdF3bWxM6QDApetMJSt1vRZGPnvaaPhkffXHnqvWSmGHAYQMiuWo7CrHtACvnNg",
  "key6": "5aZz6gfWQEeCT8vK6aBnynfRMLmJZPbJS8bZVjHYwcsKgTwmERfZ8oMuXEioCNjWSUbB7A7FAgiBexVAeL2j217z",
  "key7": "fhhFkQ6AUZ5rspseNU4vkUsRegAFPpDsWPUinX6Pcf3JjVKgeERoPrC2HRn1zRVmsy8GpwbyHZ1Q9XfXPkz7HEK",
  "key8": "4E1gWt57RHYg6tdj151YsdrquuYZbtdqTrjFqUhG3WGqbd12Zq3iyfmpKqq62ggdiAU8d8keJLShcuEBSjG1kcEr",
  "key9": "2jNibhqyjoqrAbNaVLh2462HEWB8Vp6LiRcpS3DEbdQAV8UaZDzRXj16HGuxZ172gtCFhgJpkf9VH1oCZt2aQpQr",
  "key10": "2UqQ2dsv5iEtMzVHYzdd9YNnKRGkmEAhjtzf7LQT2P1oauYSCeH2f9rpF5H5UQZR6vAeUZ8sSUtUzeUXCDG5qUwA",
  "key11": "9rfRgUNJSpGF6Hb16DMaLJAYh4zLUW8kA9dac6XCdza4EDRiP8xLVgxQmFm4aLUDFEb1NPTMcy2jfzUGWSzQxhr",
  "key12": "4M9j15Jr2mtwET4DLURhrSZVHN6Z9mRDa7pqDoFV5rhNhMeyLHbaTREFf1WnwRc54jKJFeKtyci9TtJSC1TDTnEy",
  "key13": "5u9mWL5Ek1qVDNeh7i7wYLsbkVEoLzXdBsq5ixbotJ4LrFQd7NCtF6bD6UrAoA7pwZRbo62hQ4HVfoWrqnr3qXfF",
  "key14": "3bYJZwEcH8PLYydrM2ddgyArzRmhQreqdzuKjzBXi2xX1MKMHEpDVAEsVGXrUQnQwMefg7iFE7kGMB9gnrw8JBTw",
  "key15": "5JJNb97z77BbvqvCnxydT8RcjbhK6VJwRXoFddmkKcWPZCqY6es5tG9wf1z6sVX9kRJQyJzN3pbwFZNBWcNAjz2n",
  "key16": "4vABuaxMAS9k55NFQf4Qy4UoFsmNucw7WpPXzxhuUoLkZgaT8BU1A97itCcyDx3K61H29u8KWvUqAvDywWA2nLsk",
  "key17": "RfPaDLHzFNqDWGEUWfHzPDm2pJCZdBjQ3k4DWbkUyxwZPYZMh9gVstYV9NT18ChKWWdBJcHtGi4yNo1hqDazpMi",
  "key18": "4sBRuHJDQXK9XX8QWzp9G57JNr3LGkytAQY1wKnjd1D5A3VDXPWxyLtt9edFdqKQpLjjUqzdqCRvMHRh3ago7iyb",
  "key19": "4mwU28SzSGmCnBNkLxwcjt7wg197k1iqgw18zNMGWTTuNUimid7bmjMkiHbGhkYiJm66cX5Z1hLr6rBCdzhuAebi",
  "key20": "2YBacPxSXThC5ZDa2ar3kYMSmVq5fPLYWMsWSbt1eCGD5n77jbGimrZtxoKmhvmm9iZyLzt3VTwbzMjC1wVFWcR3",
  "key21": "4yij4aZ63eKx63Ftxr69iTLRzanoWGpEG7AW3fUwahca16anQiFMNXGpLrX1xp5upvrYwv1JnzLJRUtibHBMrUr7",
  "key22": "27jBQb2BkEt7ojJHYLBdh1nSXjNt3QzS3JGmuVejsLickmoWeZvg61JgXp1gTFZrrcSNiGiAT3kz67hhUdoTpJ29",
  "key23": "5HjATQyniK8r99ZH3UMHnHLdw8L9GqLJCjK97j1cQqLKWHNxZiAgdjCmxfLzCEL93HGzt7JKBujWN2qBR38be5dD",
  "key24": "3cDK7WzZsiL3RBtP3BvSz5PgxQxXF85UvRUSQYF3Cje9f8JseAtdpWQwP82JTPPZpvbeLEAjrfhnBYZWVBJon2x9",
  "key25": "wgC3EJwvr6vUsr14WXprf5ruiwuWb2A8KT7Er3xWbtXbBAKVsgZUnmvgde9FFKaMiPfePzgej8nkofArYVBAs5y",
  "key26": "656KWmtumWqBijJruB8s7wMiKxB7Vo2JfXSXfsrRTJZbpMfioDmmuAUYLP7uBsd8j16icADHfcmDgnPXQ694sswz",
  "key27": "RFSoJzGVwkjFsVgZzvS8oibDrFcnUNSc2YVVnXFTCr8DDce1mXks565rUWKRxiRZiHvra84DJV9mjpHQs2h5jWZ"
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
