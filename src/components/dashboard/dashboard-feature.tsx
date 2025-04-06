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
    "53adgxf9CcmbG2BDHr57YBop7txZL8J3j1pWBvv4UYHXNuXcUXrF5PGSG1yrmf3BEyQMT6QQXLLbF3m5iRGVH997"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fzK6YDaTMRnxmnyKdyvMBwJrjQUtBxqE7FjjVGtZzPdyGYa5RmqM69B3SBhEZaevWaLQdTLddSh3LWeyGw9tAdR",
  "key1": "3VjjyayFvwTM15irs2UvcRkJni95H4XJKrmTDhJp2EQrz1t92NdbpwrN2WrgMTeMYWu2YxKKjF6jEBkf6ERV3zdt",
  "key2": "4QbQ45QncUqZ5naVr8r3dbzTDhszdeMTTS7TxF9LzCFrYikDPD9QXSRiPBeUNW7F1KRsUZJV1tYADvjQnwN8z1K8",
  "key3": "21MK175jgzHKeBSfnfLY1NXm9KV6pMLppLdDhKzyNo2Ab92g2TfKoEPPmsmp5izMurKw8Rg6MqUyzSNo9P2Gpfyw",
  "key4": "4iRLQFkSygtiT2YmYZMNK6fTYQHDyoHnDrhwntHa5ohuNPT1ZUQSTPTmnQ8bJbv6oaNDRTvXDwAwC3NMac2cq8qr",
  "key5": "3ryQTxg1hHgr2XjhMsoRk88VSLub6iiS5qzJx9usuTfhsDRFeJzoUtWfejVYffqkp8Ku4imXuF1koBaqMKyxNu23",
  "key6": "3ynL8KE7unKLZmLbn6zMYmyfp2dwNCUvGg6cgasEAxGusm7uDh2W3TWPo6i879csNvUnJDUs78JjLG2V6bSPuhxC",
  "key7": "4yWm4qUB9W1SzCh2VJqAWMkDnEQhXDejGhz1pD3QSuPgDnaHsXYxv6tBPSwZoAW9XFyqVm4A99ZsYa3Whp5MV2d1",
  "key8": "4ANv71M41vxqbdoXch2SpeAqxwLybKUi3GUQEpoF9dNHcfx3fDdoWjc3ZhwHiYNF9fo5PhAnnLdUs4aYV5vC8ZrG",
  "key9": "CQ5ymNTLGajnc8TPJUKitaMfCq95ScYqYtHtvgA1s1mcyABceqttVVbcvHspgij19W7rfcb97nXbo4nf4tZRQkq",
  "key10": "2d3yShDBVxtKVMD2zgSbSCPtV9Acv1DD2s3rdSoTUf6AEAHgskLZcRvzcaHZD5UE9sM6BwpqKnpatEdtcgThSTMx",
  "key11": "5Tr3a7RcZpxWtfihN6DksNixT1Z2hb4sWqgarrZGMLyr6UDmSd6Ahnyy1kXxeJUxW6zreJoNyUPwumcHp1GZKzR5",
  "key12": "4n1fGsfbtFMcSd6E5uety6xyG9Qc6Pnago8RmEzh7VJ5kaDewKamS4Yzsc879vA8V6q5K4WwY6pnNypjmQq1HDji",
  "key13": "STz4NYBkRy3NKHMFrsdGz6VDnVjG1ffZGcpiFVxTRk7mwfQAALFoPPqahFUHpAM9bGthDJceJimRTNnYt7dpZTy",
  "key14": "3mpH6uPMSRNPB62YeFvG5aZ6KrCHxmWaxXRgMq8pLNBrnM2UC8WTA4CapcW2xn62EiDXWbCVRe4s48wfKJAD4wr1",
  "key15": "GqmHrRCiujHeRfGjFBruhLW9fju7Q1cq245XXtp78KVWgok8W72G5bQmkiWAbNoQtPjjLioNvduLJfUqFyCZ8kD",
  "key16": "3yi2a822AGMXxDbitDh2FJiVncTpWhZUAFk1UGy61CeACwC1vKgY1s2mudkefafsSp96LBzGJrNwZBgE1jVCtERV",
  "key17": "jpPcWfxJXsronvpvh1t438FzhrNyZNuAUianoMEb92R5vVjjADAvc9hN9GCNLhvUxdiYWwGCkL6ufmu2QwtBtBy",
  "key18": "4Cnw29adJ7DHUt8wo4xh5HnsKU632dykqTHx9TxtWkhVYnr4ougmMXuquC4KiEhGKFepkQvYi56iarebABME1KT1",
  "key19": "BhjtWDfFRVhNCGCiJRQc8xassN3Vojrk8NCqyvHEx3nBbWFHuzrno3GcqMg6p2BVDmqH4Nc5XLmuuu7bDXqf8fv",
  "key20": "3a29QCLjotDNKUArt1ETVrGao2rW2uPd8CHAgiW4Cx5evjY2QmdEhFkbDN5nqUTgRXYf5JnGLHxLd9KiVoKHo7uM",
  "key21": "4tEYS6KUFHsiQoXzcxwYrS51DgGWgGw8Y7fiaB8W9UVHzh7FZWjtuJ2Q944VGVZLQyPHsr2gaoFkCz2ew4fRYCDo",
  "key22": "2kiaFo3JmMNpbcMVu1VsKCm4jDNr88aLi2zA635VGxoqaYZ2Z5Trs5EiBwXjk5jWsx6ZeBRHZn2AD3pcp1U4sbVS",
  "key23": "R7ChVgHadRq79j8HEcaxG1vHHDwW7yVgxBpVX4ntzdcTJ55gH2hdFNLRWgYgfV4shmhiSQFygS8vFzu4pAjfia6",
  "key24": "27Hvi4xW1n8vPVS3UAQTxtgKwau8BJhrq1gQEiGjSt86thT9chFjojmXu8k6KsQUQr5FwSXUw2YjLydNVDtfgJBy",
  "key25": "4rH4JfcaREHzShZuwtBGB785NCJDXytMXMeko2VkNREULkUm2THdmQMrDTqEXXECGUta4L5vFjnCxVPARrCu7DX2",
  "key26": "3qpBWGGrhDtwtMWz2rSsDGrUsfHGTgAyfdBKndTMESWZBYHKwBdtdYv9Z94ZzW5q2uQvWpBunaqAr7eUzWrNQaKU",
  "key27": "5GQr8bNvanWN61RguPKKiZjxRaciZEszHa6BVxCwbtFyuE8ADfjGwhkGG4ZvP8m3sL8uuEp8c4pDNtKx1MVZAiK",
  "key28": "4oH2UR4ffthZt99CY2Y5cgeQzsPU64BiruERiZcEUE2p2K5bK1XU4PQbGdXJxrvTTi7w9rrQWsZxg9WGXnZgg2xv",
  "key29": "5BAvE7gk2T86F4zMgPEysCbQdLHP6FafFYDTCaCDXUAJPXTjWLgULMCQk2iofsbvDNS9ERussPxebAaztah3SrYX",
  "key30": "3QaWxHP51Qw7RXXWm6Tc2Ar8XD1UKv47xzuffvK1DaEwqfexV5CguxSWTyDVMb3rDC2RDYbNmM1qcNbeJr2URnCD"
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
