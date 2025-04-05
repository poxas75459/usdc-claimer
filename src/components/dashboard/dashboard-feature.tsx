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
    "3jSdkZjE8uFkkfhPZS3W1MwiTmY4zWm4MohajtfJ8Zac8Bkrbe3nfVsq3rYaPhxHQ1G3AnBAo2gcJNBeAJrbADei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHFevZciPCjDydqrYyoHLDYFsJRbj4kDTWQceTnbTXYua9aiFGqfaiPDDhMT8azhJ1iKfwc4eY7fKtkCShhfDFy",
  "key1": "2uAFN8bpMwJavYR7hzMkLeZRTEZkLAjoBteJXjurLA4QzPTKoBgHYkVZXanuh3dx8vxKWrPbxdr8WPRxhxL7xen7",
  "key2": "gQXEcn47uz7JzEJ6aL99WGHbBa8557BL9cwkfK1BQvXTRZgws4tJDeXHSDo6t3a7tmnNY8uG5Q84Wq9c262VgDz",
  "key3": "4mrmEtnFj9NCkCRuvMdnqikQ7Ztp9z95ScYEhRgUzeg9Hf9tt575ECcbFYxjhRtjCiLJiK1Ef1iogVJ7pkXJrSaQ",
  "key4": "3auTKzzZcdoPVpvCVdoTPV7TaW3fVKFLEChn8iyzfVadEaLjjBsEHXZser6k3MHqXwgdUbCrdQLN7vCSZcjhrpiX",
  "key5": "58y7UT81xMekHJNDJNdmhx8DxhvacwzM6rtBpSRXKYmERqUghrt5mtbJX6BMz3Bxtan9NNqgWMX9conb7j4yNbhQ",
  "key6": "38HVMy7VTD46K39pLtd2v137Unr6Vj9r8hdvEg9sqi8gP653B81xqLjb7GkzP4RNUQu3PJJympzYfQjADcxG1ujB",
  "key7": "3CrdBqADoGzqTt3UuyMczsgopyNVzZLGbpm5eEtaCRbB79FvC5VpJMEo9q5w4Ce1597j5bu6nzFEqbrjMgVu1YMz",
  "key8": "vWAiXLrWxejz9jhfF9xBF6mt8DCA51oxcE6qoKWj1c3H2nnRU1T2AghGnuv2tVc82cCYSWN6S2xiE7eUBHisBQV",
  "key9": "2b4pNrMBo79FEBiiqR2PhZ8fjVEB8zL34JK8QpU981ETaGbgWJYew8AX1EtjTTwuaN5LjRR1sCfAEvuGNphzhHN4",
  "key10": "4WjRj64Ged6umy6g1T634TDxhDKoMSHQreHbvzyNYrVzEugcFg2GRE1wbLMSzjn83zXv2ZWXZQC6XNpZRaetti3o",
  "key11": "5jfBpg3W2jnNf3DpTd1XiAQHyuAQcPPnZJwbuBNPM3f4JfeeVXCw9WEHL9mo2ToJbErgjkDKzTQuqxaFKda4Gjni",
  "key12": "SVdMyLZup52nJrwKibLesMLHu6D5g49Rvb5mzCo3gX8qhVGdrNwRKu8CSYViGzLMZLFfmsxZyFSYLatQDgGCeY9",
  "key13": "5GR8DcFNApBm3rzPHGgKg6onVeWvTs3JxA2t1YDY8YpsPoMgxoyX3t5ChaZUuyctJ9NKRdDWaTnfaLeCsF8jjwx5",
  "key14": "51GRuoiNEMXobijvUcYaujdv5LKinvQn7TgNMgSjkwxxMnMsWWKLnR9KJXErR4MHEwwGBgsWE4kQcYsfLd1iN9WD",
  "key15": "2NWS21DedR2ENKjCVKMRu8SkYwuiFEAWJCsN1VJiPUYvBrTWCs73aRcLzTYeDgFgVaXcPyFe9PDvbS7ahxXsFLKd",
  "key16": "2hERpE9eFjjo7EMNW6WbUBSEmYHNAThyrE2oJoozS2SnYJzYmAdBCrc3NuWhRaaiC4LVCEsRwVv63hafNLT1X4Gv",
  "key17": "3tGE5Y8GscJSapWyvJWS5P3esCaz5zyC116jriHr7x97SAeyS1Wpjb8xdzTAnV16xcUzr9H2Uq12PibHnMg72A7X",
  "key18": "3H6AdsVjMjAwnhcieabxWSKhq5zyU6Lyt3ve8J3pTusbgXqrtSFtoyaitMJxW9H2scgPCKsaK9oTAiyc87XJFXH7",
  "key19": "2754R5rm9LUpnspPTEB4Q21ajhKSPSxpmeJKWfEqB6gbKBadS154p4Ya9UrspLm258shSLwJW81afWBjvMBstjo8",
  "key20": "8fbovaxCJComgDas7PBM8MZiZ7V9MPBXAjha5u6sjgGm9Nj6Us1eMc64t13raJfrYMSJ5G3h2AvvGmGijdBK6aw",
  "key21": "5449PqNPbfYbhpdzvhqtXABo7BwBWuSB62VC5vAceWiv7eXT4VEtdYRKpZqcECKdvxUKQSQpRrpeCjs458k3p2Eg",
  "key22": "35jPENRpNmuTbKUn3GZTwtRjMGaLV7nLhFpia4uoHV95Y2xo4Dwoa9KwrQJmiKNq9yxTtc5iLj8brw3k3yAqzpfS",
  "key23": "4Bykpke9DuuDFXdo6tx4FCL69MRyaUV9re9xgaDnb8Wpk5QjdXRCdVVTyaMpfboJFGnGbTyQ1ioigSvjnjDdmMov",
  "key24": "473aac4UyAmaYFM2pjmA7iqbWF7yAWir9Nr54vLdqtEoctug2LGEGe7YNmEe1iHRDAJW9WUQSvAQEcp9ZoUFiNzQ",
  "key25": "27bvjvBtw8Jgp5N8novzQSbGRzMbrrQ3L3yUjBxJskSpXe846yMS9KvmBGgLfToyrbYjrrJB1nRiWtwk8zbNgk4B",
  "key26": "5grzv71QT9dvyL9VnTR68oviCcpmNh4jsTkUTx4CmmvA4MFNcQj3dyrHUVVp1BC45rBVpQVDhZSS2N2Xo84zEuj5",
  "key27": "3pU96beKxTAAecsz6e8WfLkjDTmCyacLaVk38VRASUU4g7xttYxkVM87e4AymijFB8fBh6x2cpnALrJB6bQfjbHf",
  "key28": "2T8SdSFThqBgVTCro7kVZfiZebnRYy4EiiSZ1xQB5rgiip1WMPKLruZKPP8sExANPX8Z1B88RYtGjY2UioCwyFVA",
  "key29": "5fXybt4L387guf3P9Nm5o5mnfrGu1A1vXU6QaH6Vw19Hsag8ofWkScr1NSPifeB9QmJLiposhHnz1gD9GZJPRaLP",
  "key30": "5CiRXddh6UPzVvHXStySchfFo1J5rRhJsieav2L8m4PDEaaZvgZUoW41kbRFwagAMwLaHzqY5XcPXb88iDDX9CNp",
  "key31": "5MSs3iycK3LtatcNvK8Rd58tZ8MssmBJrQYWoLSS5iTiDvigrfYN3ACA53yN8TQpgNh7MTPPD7dmeqPrGjqmxiKa",
  "key32": "2r8yLYPrQFms1zwEnVp6osPH1oHgCWfRWisEioVKwVEn4uZvtUBtB7o6RAFsnSGQkhK2vAtarQCPWJTFi1zmSnvK",
  "key33": "587QJRBB5vcWxRFZLeKvHZJkXhx3pSDPCiRSWLQhmHnqMuG1ijhgBymiveV9H7qCGug4avGyQR4HVXZMzXkYKLhr"
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
