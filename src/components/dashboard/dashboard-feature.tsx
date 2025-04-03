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
    "5twQrfxGtzuhzJRmswRCqkDAPii9KXRugftqyNqKohiv1QW8uPPn9jYWHyT16TrS6rzSsawMTbpphqfeS4bQVxRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xGFmuYkmTAZ2wFn5izDEeRJpwMkjMPg6LYL4tKMKM3zhoEcpM7VjXAy2ercE3BY5wYwgLDpRzLhrwhAkXAa6ygW",
  "key1": "2PYGFWBNqjQvtm5n4LAx8oZuqyq4e5wiX5XhNsqeDCSWu7gWFwDAqmgfy77rzg7JsdmBAK2P914TX7YVoazu6gyn",
  "key2": "c28EcE4augtRgfCW6wdVnxgBLkM3Woq3f7MUE93mp6M7YwmhuAPAWKh7DxFLr9X4pWGHgzhRpfP72vK8SA6h2Dr",
  "key3": "3YzYCmywvNw2pyv2b8ciS7veutw7YAdHoAUiT8NnAMgZAAmr6ymXGjqtfXiwRCueraSKkB2fVkMqP7v3Wvrk8VgT",
  "key4": "2FSRAxcJYnRjYPBTgP7Nt7X2nN3T9ncwzNBw4ZAV6Y9XnfChHekCMVw98hhPED6xoEeMC2ozWHURUFMjeAe5MKZz",
  "key5": "2JzJRC1763nHR8BMTXRy9QBBDgGaYUVYL9cJNPHiP8xKDrDSyuXridehP95qoVBHPjstZJ8ysxGdS8gpmmey5nfq",
  "key6": "2SZG4vEvtQMFcsdqcnGN8RzKu52x4NanDYY4kNXzRwfk1JPSzyxKwqoinrD8AjfbAm9ZzrLqBKeewsXnbDJRcnGs",
  "key7": "3vNau5zS2gnGEGGN5m2Us8XjmxfTrHPYzhR4Fsyp9LPCr2Lu1Wu6yzDjL9C9Rq8uHtVjFxBARxtTyiSonN7YA27A",
  "key8": "2G73ak5ydnNfwgXAkbGdBubkLfi8SuLKo75BPNJosquZbadY2nGfuT4rzgzkCZ2mDqdeejC6U4bXMi1oYABdjuqh",
  "key9": "2i161qb9A6MUp5CTuQTAY7QmEFjRm16sCosMG2H85N6hWYC2Eh8cWQJeDYymepnRAYnTVsX68Sfv17Gtw9G9Lh1g",
  "key10": "46pwpdZYGsyZrdYqaJij2fwof1DYQZyLGfootT6ncZM74C9oF86kwoNFKqNbBahHQesyWoBJhr1fHV19MuWhhqPU",
  "key11": "5DWsrEeh3ZK5Nktsgk8MQRDsmcNrAcYoyquMsUBQgZn4xorWQwNA1hapWyEwkUH66HdSkS5QAmuHveY5BGaJbvV2",
  "key12": "3nXCHExNbELiYYTXW8tUHBKsNwp9KmppQH28P3KVSCjJKXcALzoez4BzntSArEtnD5DdqjX8SyZpEwxhqRnnj5iP",
  "key13": "62gkLk5a4cZAe2HeUpjquybHXoTfTjpDRPmAcjk6C4Nd6ik98MdHQwjYYZzVG8UegUwFHfMwevpG5BfjQn94Z5H7",
  "key14": "2jN4qUX4KmAruwEm527JdWcF3hTs6YvnkHvrJSAkyvEiBnPy359kXSYnDSu5htYSXAk9zA6DYHXUjCySQVq2wcYJ",
  "key15": "4w49A9UKVmwry2CVfB81KpEd8n2Kmz5sSLAnJapEnkeL9tAnz5CEVMfcvrHq28HnuycGpt4vJi5aq7dgFqaWqqpG",
  "key16": "41yRbszQMbXpTS4FoXnC3B37eQ9yhwWVgS2ojZ8bMkGd3v24J2mfpCt2AynTi5RqPPujFJL2tjUMgExRH7yiBMkj",
  "key17": "3WUvnSitoVv98XiVHktvv95zzFXyCgJqgQoRw9XP9NALmGRonLUCYbji8vLkKN6Yp1SjJ68M9XeAE1jbvpkCvGSP",
  "key18": "2AnTPWz5u2NGaxFFaCcBWAJRbSVovpd1S3UKVhwfoRBB2X5RWc5eKb95bbUrF5Z1xvzbPWYVaiL7PuZa3w9SAaWU",
  "key19": "4sysA7StL9jEVQw2CSYoPwTzyAi6p31zXTkVKpCZdwMmrAUgqsT4LurgvCnnd4h4LQmQjvb6MUpf2Q4Ki3perdYf",
  "key20": "AxniMGSDrXkg9WtLXfogmEy28ak5KFsDeLAZQNkSAUz4jBLDCUhjGWnFuoSYB4HcnzC5KhqdcYDGXHKCcWuoiyb",
  "key21": "47jmCn7svapAeGJDAhEp7g76iX45xQB3Y14umeEZR87L59JwNvM9ifZ1EczDgyffFMp3QGkA8aniCCFzeZ19ScZr",
  "key22": "262VEdUSEWnF6eyZSV2wAW7MdUAQrgAxHAFnqK6BCh5daRXcoZXTVDtgP9TQyj4pxkBmUWM5owv2g4HMDbaUF35u",
  "key23": "2AcNhPEpZ3KbwJ8XT5P579WwDdd5drpn292GnW1tXawyT4mdDGCaZtsQXdY2BZRceYQSXzQY6uoampD2rhBqx883",
  "key24": "24MiRTff5LorTGwGmPovWBLxL4dGtEVxECaAEtegkRsD9vtcuQp1AkEjkt6NmKuzs5BnzKmNh4C3bwUraUxCWVgH",
  "key25": "3HA8S2fqTvnvQB7PkbwBBb55nEYto7F2QvTm8pnkQs4V2nwF89cnm1R1h6c9jw6VY5icVruASug4FXnq1TDaLHHL"
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
