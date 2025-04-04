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
    "G5V73PAFZQRUgKcg1nToYccWtwVnFCTqw6aNd5H6XRf3UmeZhFy4o8XxMGhA2qBpNvT72gQfpteHzAEKfhS6anc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qi8t9kanN9MJeh32mc9nHc437kNj5jNcSas3uNwtZi19C4mQzeGke9sqHPYyfxyyeJQEpi6w1DsChW1ACUqdNoA",
  "key1": "3qkD7YURzJH2QUQRKY4BSrezFFPXvV4b5nXDdibTSxYqkLQbePwbKntnS5gxb5t9G9UtSpK9WECo68io2pNfN5SY",
  "key2": "5vczDXSnjaNjMvT2bopdvZvSQ4KK7EXwjD5pVii7vMCtTAdA3RrRP2N6etLRHc1gHQ7Gq5mxgqVQaiyGMX1f3jN6",
  "key3": "5rV2QozhAScFXMAGnoPsJnQAfMTkKGLfebfy6fkxufgsD9gpmgYR2DjsY3G7SVHVuUJqyCJvAjgCtCLXegBAK66n",
  "key4": "5JmREkup8LZX5LPzygsihDhXDbiGLi3kkDSjvR1XERkff76eJchybUwvyFY47dKr3udEKXEkP2DMmvJ3dD5kvwSS",
  "key5": "SQmmaFrr34kUikGQPo3a8D4eKRa196mzsE9ey2RMhW6qvoUprkwRtggcWi25ZMtZUSAC8PqHQympDnb3pDyc9km",
  "key6": "2GAjCVzuf2ochFaQMNRvtksHxPXmFti8LCiDGSAZcuLyyd2M8kQ7mi6RFUu73P51YdC6ZcTNg5jwiNLJLZVt39pj",
  "key7": "3gPqdF9VV6vfbspo9swzw8DRFjjSuFWE5jpjDA6hUCkvezFWgPVvXzFQeAaDq78aQV6eJxunQYXXmgv9Y3hPWBW2",
  "key8": "5n5qkXTV2ktukXvFVKqjyBcwS9qTAh2yNnbcUj7EnxCFYEsAdpoxsvU4qPqwTnYSLQN3KguGBQhULnbvF61ZQT3Y",
  "key9": "5tv71GAeSoCSSLWG3ptScHoiqyAnkmHy8gpNurWHDCmxD5nXKGkxqvE9sN12WRzsV8trbXwCdj7Gzk22MYnnAvhy",
  "key10": "2yMAA5Gck2jrbzNiQ6bjbyjYAj5fLf2ou62ee9NvscVyqGRmrWGshswnitAMcN5d9FMAEW1vebHAg4x36EShms5T",
  "key11": "3ChkyRm28PGrGE4t4RDLWoEGw6TXv9H7BayAZz3xdTcofyq6rvgyyL6LBA3t1ixUrvCbmL2Re18bzwyneVsHrfPe",
  "key12": "4q4pw3QDk528T7GmP95JPsSEmAJzVrdbTRbfftQz9mokhKHDKUN9ce8t1EWb4sZozH52z8QCSkT7zLF4H3AfKE6X",
  "key13": "4Nk5mBjU7ye4scJzWBpvQVscJReK3CpYSwBK8P6Km5ENs87pSAntTY7woZsn6FMzHMLVnWLHWCZRddt5CDmHkaMq",
  "key14": "95yBYoMKp11zJnZavZJSC4fqHkKDSptYvyiv2iRHPEscpYpxMmygJLzPsyJbySDKgdJM1ZsF8dxmFzujJUFVqgH",
  "key15": "gfnEjvLkgetkyXvCr6V3rhLLk5g4McMBuMstXuAPFk4EZza9H8AunjSpTnNmc2yYcL9wBrTJJiRAcCSRHxBagLF",
  "key16": "5YHkUotXXVpHgnwMFQzcH4SJPRwakAWH2ck3yjLHsPiZxLGgXQfWvY6u9yRRpeVRsypoeTrX432Ct5zr3cn59a54",
  "key17": "Dwe6cqJLaqA5adcAzh53fzC1ccbi9yjg1cYZ8S4fkRhUGVNSmqv4HnHtFh5eoYze7N6ZQZdd4mn1PcW4YvyybBz",
  "key18": "4abPYecqZRBNuB5QUy3zYgCPo1WcfHbgKDpXpJkFcj2uAwTFJM89oH81C9X6L3GLFRYUhnLVo6Wvrz1D4LssFfXu",
  "key19": "4Pm6b4wyhXSBms5kLUavAc7XmGKSgzaNQ3Dx4EcfnuZJMcwjpxREuyiqo6SnAGtno3C9CBX77AKNkJL66pj5RdML",
  "key20": "3Gb1B1ohSzPgrasZdx8h8hkGcCYdGrhz4PJkZokDfVJscaTxFjPQSgVSU7Sr2Kzo4hwKzR71LQ2PLgLgj9EB7RHk",
  "key21": "5ARzuEzQQcggopBjRh4ARPfGYtbpXob1oGij8FwRWooEoTFwcWEUvSVorXNCv7AzwBRCDJfieW8u8RHWcjMRXkCq",
  "key22": "3BeozbznZdjLVPEtg3s8g1jzXWx36CWXfA3UqksgVpPeEdg3UkyuRBtYoGYrc6yjs339okusSQwEvi2D1vLKE5TP",
  "key23": "2oN2thxRCD7yjHh3xYTBcALV8ryPcU7b9bnrkYkH9Feaa6gsHcYSrGhHyPGh6exB9F6HXhpcCYF8c3b9UggKdJ19",
  "key24": "2jzKchFLh2uFd5BBEkPLWVrRLLTkdeJ7WgBqGdemu6YnfC56e8zygnQ3Vv6Qf7QxLoRLbFKTWYRw8iQ2J1zpLzuo",
  "key25": "mmeMUFnAxBx5aNMCGwj1rVbRz1GyxvrRTUixG85A8KxdpSDaqYQ5HcQSC1QwSggBMTsZDJLzWgZdhXYR4moGuCF"
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
