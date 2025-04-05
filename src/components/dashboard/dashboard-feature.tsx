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
    "4hWRT5zdvNB5bbbg5pF1YuVSNXdnVtXDu2qZkoWEdvqWTCpjVjPjXnN3vyZma4peMXdDCuUdyMcvsrQdQRj3wyCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JJseNagwVWPpdvVvrrr1k5y5dNKUs6ZqsA7KXZXumvfKhSGJ534WQeakK8ifSo9c17N7qzQfVPTV6ghQ6GbJ4Gr",
  "key1": "5DG2GTTtFP7SxKbvWbxpRHTvxjaXM5fWnreDvuwA54dCw74uopqz1D2dpa8fF5aExeWD4fLVDDBsUby7Bvc3kUyP",
  "key2": "2N1iujENZzJm7aUTyQCNwtgPyGZSEEkVP3BS2YX9S78zibYSiAHsrWPM75i84qsPDNoaeQdmbPqqBWysMDXExEuM",
  "key3": "5KXPpbM3hKrUeEMoHqTfYKAjARjpJBxacaFLAeub2jhasYnUrPG3pssvkgv7bnc9RY1fiU3wttXvF4y4Mmoggv8y",
  "key4": "NQYSMjJUyGuGWcG8h5iQuqjvVmo67hBzsYhfGgyae4zRyvLzqqhPij1QBdBPd8R3hhhL3n84SsAQC6Rt6aPaQf1",
  "key5": "AJBhQz5eM9jqXrKsyqaRNG2vRTHSQCCQH7HMZC8hFuPzSopmpcctC2BhZ1ZbJABTn63FGryBKJKppNNEMAnDm7c",
  "key6": "oShEtVPKyFSELWLJpAxugqgH67RkKhWxABm4BedxDCMiSNMeoGACR9yvp73BiFRXY1eRW8ccNk84ExtxKJ7mfwd",
  "key7": "5oDDeBzh6RVMsJQEFWTffx32zwihrCB6MzWXVQ5UaHZoMgK1VSoCsB4FR5DwF9ZT8eNUQ8HHwf5wHVuynwT8iKkh",
  "key8": "2BU8hVMC7dJARpNAiC8Zuwib7uLKU3iGzFWtNZaetFCayUZc26Nr3zkZhEGjddkBfA1fgrCPpJLKxhLEfjFg8Ppj",
  "key9": "3aWjTRYaDTWqpvNNtXehTyjVkMXRvYG6eihNVqp7Qm7oqLusCDhaF6LyyninNESonozj2v8iQFB6UJhcEw19MMBb",
  "key10": "3hPSuFoMwQmn1WWxL22sFBmpXYgr3VLG31BHTDGusXtF6dsEQx21Jtx6FKuCAk12CCXyi3gALRBVdfkuqh7a5H63",
  "key11": "3Z8V7SYEqAeEh73yG9kqQ33FoHnEiGxsVmvsvvLjtBsb1P6ZHaSsdXHX7e3pYA1a2akHW8YtnyE4xtcxxXjdy3SV",
  "key12": "5dAC4kjmsWAS9iJrVE6LaPyEb6oJN41tEgNHoRMosQ6ZW7E8BjpYpFhbwHvbSDxcRTnH1iUTix6vCcQvMevdfwDc",
  "key13": "3Dp3pPLBexCjkUbwd78yTL9vrVUzhunN1cRYn8MAXK6G5pS9vpXEczMjGsZTTfxEc4k8hFtC3TEJgEo1nLuKdXbB",
  "key14": "2s7jWjfCzdWZoRX2mk3Eg2TkPnqYCHG4USMxVXHsLzsUaT9AXVGfbuYgjzAyvxTsdAcob4ySWXBzbwXyDqsJtUbQ",
  "key15": "4F5TRigwx2TCSJsjFme7ppX3tox6t116JMWUDrtTya5mqp7pvhYyvKhPKddrzUnCJGU7eEUeF6gkvfqJji9fqqjY",
  "key16": "6BHLsMYVHeu5Rn8qRCXAoK4cmieN5EcGHFALoqijmn1Pt1gkaTob57cF4EkirJBshJfHNmnrvbJAVRRCT2meABk",
  "key17": "3Xen631atjVsNDFfXpjiRCkaH8JaPSMYxrmvExGcDsx8qEJ6Vi359eP5DcBVKYcc8q2XCZChwNJNZKmEGk8V7dA8",
  "key18": "3K4ycQxNzE2RUxx2pYiLttDpFgiBjyR3QDXsNurabhnPuLVAnCJSEeJxwr9ac8R4djKUbhFQa96s9od9WjKiwWmm",
  "key19": "61UBpCXCNjjVohF28VzBCJzns2reizJyvgA2Ge93uE7awmGUuUTSZ6B9ycZyiYDKvzCGN7FAFDWq9mdq9RNZGyKk",
  "key20": "5KKWEbsRTZGfoGJSeW5CnC8TMKWCbKWp8USrpUPfPbu9y1wy3gDLnjVnEAAXwdqWKr95UzofadwqBnfSjPwt7FVb",
  "key21": "4BxAegCTHLsA81M8Q7hgmijARdhKeUMZPYAjeQepi8ZiopzkgxrbtprxpUV4KzEZi9J4zVk7GhwFWBWJG5KSfyhK",
  "key22": "6SunvJvThmuuSAp5iF1ck5rrnqjM3Xp99peN5B37v12u4b6U3GmFYFe17aWyCBSJscXZAVZgagVz8tZE7uPHg3z",
  "key23": "5gxtxAade67RY1Lo4JRWaQKLEkD3tpWMDJPzmYvRCnd8Vu4nWe6BV8BTBLNJAs99Y9nRLzMhxEXdm9d9xUBYMkXX",
  "key24": "GQJfcjM271zNbt1qTAvokbTCNiaBL3AHD4dZxCQiqFqDRznvYm8mN5FdFHFHwb3si6Z9QdCmJJ9oDMiKfiAqUDJ",
  "key25": "3anrxS2epYAi35yjFB1khrsRfA1XhwZLDZA8XvNbXmKDZuPmyNJJuzwVWbRYJbgrnSzyTHwbDHzBwAZDJ2aSySdJ",
  "key26": "5o9JM9pFCRerN6iKAhPBW5Ruyx9gnj8FCRzJhL36NDDzfC4btaV2XDjGWqQQrVtJiyXjr57GoXTSxv49KxH9BU96",
  "key27": "QqrAQbrKCmgEh4JwCZqMna5QXiJbHLSBdWzoqdLXQRcib3cmBXfJHV7HXgcewJYg4GuhAZkyqPZbuc94LiBSMVs",
  "key28": "2jmaSdfoMK2YDDRDrAAyysfYNaxkyacg7QNY5arEXzKU8RTzjLthVys2nnEsYYoPvN14pNcy7GGmntii4AKziCto",
  "key29": "2mUKCr36bxrMqb2RMjV79yXgFgamcTgJHJWXKGqRmVdgpMqcuDsW7Kpj9Mja8QZT5vtFysZg5QytX7gZFTH8WW6A",
  "key30": "5Y2gVP4tG9e6G1PFmjwcHL6RAmCr3VP3BoHW32cdKm4CatDHLmydovZwsgc3MDwXeYK1AUSwBabRRqK8g3UqeJ4t",
  "key31": "fhDcsGAi2WgwHAGKF8ErKKRn11t2CpVK5UGNRCLhZ7w4cE8HjP3EkUxpmzBLooWnp4D5enQYRvHhxdeniQV7HWv",
  "key32": "2XXjAs8ogvuLDVrkmtMSA8vV9MGxY6QiCXA3xDBosTV5uiEDuED66uawNAzFP5stMs8VNTX6fT9d1eDJ2a4Ekb7b",
  "key33": "4jNJJWGpLyxdbX4xViP3okqSHKpk8kxPdBqdXN9LkL2PdxvBV7wjUW4UZs6uiiBN8zQad8b2hesywu6eiLFkZfPX",
  "key34": "3HP5QomBS2pgxscPTqxatpwyxBR7hZmyACazV8yn2L3gPNGVc4iDVYiGQYKXywpzErJxmM2cQknz5fWyXBmLP3ct",
  "key35": "5KCvG5wxzhjmM4jfcN6MrnGoWUSMj74rWYNCUCvkQ5AEaWMtjJXM8vzbGGATkx8VmLyjDy8EvLsR8GD9VjGra77d",
  "key36": "3qEEB4FqcDQHjopDPGqLdvTp521WjHwgwLfRXhswShy7imsCWRVscHCYFmueLFaPa3qFE5mbMwnnuLpKbNep8bMM",
  "key37": "5i9D1w47dyrePzMq9Se3D8zXoVp83x1GwnqKHcNyMSdPcGqLXM79aJRhy1GANwSw6YapPZTPUokmoriYuhUsVHUf",
  "key38": "4p6PWrwnzfZsTJLo7Q2eG9sfyrWPuBn6Jjjhf3ejYcH4f2KfAtYJG4LQcMQ8NhC9vVnsC7drEMDB6Z3K1z3CsrKZ",
  "key39": "4BWPS6yRoSfdeFAJNuDWQx3JF3KkHh7iiZovj2SAoVdoLxxPnjFSFSAZfQr2YfvfXbceaX9m5QZ4awz8R2RePPUV",
  "key40": "4kyT15VJ8Xugn9bwJcp5Si9Fwv7TnPh9mpn56cFsxzvEwYt4FscnnEz7E6vQN7i6gjGVM6fJHeHzjVScwvEb43vY"
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
