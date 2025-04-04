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
    "36Eo42N1yCvqXCz35RWiTt4pocgHiEMzLth6phGqG5aWBTqBAPtRCGpZcKNqiYuANb3izhnr8eCRVJfXeKUnanr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWBKk2vVNmK4rbLyzjCVX7yDDzh39NKHsRWxZb864mMVi1aquFnRLaqfQZnbKTDb9YgwRHnV5cd5DwcT3S48xQS",
  "key1": "3cEjBkW9cx54JScTvmqj594uyDNmkV8tMHJPYS22YjwQWt3wG6Pe5Ce4HnksDY63ftnTb3PkbBz7tqUvKXbMq5fQ",
  "key2": "5ayWjjgcn1eorqVbdwMhfiooQGY5QsMqN74R7YdRWJf5L9q1FVUeKPGiHouSTGC8kEGKSy9W9JUbbrsuxfzM7HD5",
  "key3": "nVxBLc8EbN5TxsfW1ZhwKdTADk2jGZok4EQL6Q8ko8MsaRQp9nEfoHRwXRwx1RjPXywzuXbRi4mXwsnqwxWgRfn",
  "key4": "3EP51CAyJdDCRWMuGm2tTn6i3QzshXTyg4EGYay2vNYjXdQYEDegvAdwxJfxqMRucLQqcjMTxu2hf8vwFNWWQGee",
  "key5": "2FVKEoYyEiH9TdZG74pA7YpYs9JBP2sC8cuoAyKJqKXXGB2cpVBnuhYczytSSDVciRUc4ELkvbYiqpgyAqih9x5Y",
  "key6": "3SiMp2aD1J7nHEbwk3kUFCgoz1v5FEZAXFvpKHhte5jdg9yv9utB1un85d6RKxiiyzMZ1syy3UiibnUtSpMgggvU",
  "key7": "4jwQAGUajNGvxPqfc8ZNRWECFTTPwJAx9EoLBuoADGp5mn9cn1nhUBGCFhoqZQieETCjUAjkeZepav527HJv83Gz",
  "key8": "2Yq1XcSyRy4QqdwnB6iM9L8ubpWp8czs7hjSxs6mhd1hdT2E8DypUArTqRr1bUukZUz4aLzQAByzRAtpuAYETtk4",
  "key9": "5aAqtAWskDa5uUosxCTR8Ex6hMJC5pYYCoQKvweygBKADVx7wYk9MNiTsqFvgizLT6yueD6qrhveagsDn79qqEDB",
  "key10": "2djtFPTMiXob6YsL9PsgXcEkT4PgWZ8SMZq5D4DB5TW7dahLMPutr8H6dV3EeKfHACTvmWjwW73vrDjFU9om2dA9",
  "key11": "49kkwgGJEVKWhp17p8sdiCAbmBbfexkWLQkZ6W4Rb23vtmPgrfhANbVs9Lw1eCBuBRTNXvyX8x2Xm1ueWmyZb8nT",
  "key12": "26NHgvDDd84Dqtv9rQeuYbw1RN6tTJpnQHMw59sA9DzDaeRsjEB3tinacibUDoLoZC5jhJJmNJNTSE2QdMFR3Rqc",
  "key13": "2uDatixN5PLdiZ9BHMn45G35bS7zp8bLvsM77qNWBTYCrzdPEGZfwtkE8KdypHsoh2GQL3fMweH61N5BmArEeSPy",
  "key14": "3pxDBW3JKBXjRf7zaeYSHJVikx2WmftG4BDUunpyCt11t6Qztf3G5zALpPsXUYFzZ1j2a6u5WMYZhG3oYHF6Hf3V",
  "key15": "2iao2UZoknK9iam3Bqz6R4JoJ7j8w9CJs7kV2oWCggFk8EyuAKsQ1q2YzojZq8nb8PzQ857Pr31p7r4UoBJ1zjQT",
  "key16": "2o4sCjmxuiGLAzZAy3fdsPsEVAhgtFYvVgSoF7wHJtYFNmrVj2ozS3Q51TkyqRZUwmqWcx6puTNRLTb2Pn6fZWva",
  "key17": "27GQCR7w8ghLzxxLx5KiifPV6wepU6qwsC8LrSt1L8mgeETBATsmFBmN1ukppnuy1i7cGyBBWU37CdVesPUZ3PiD",
  "key18": "dFQ8oTYtn4fNGa1Lw4HbWnBZXbAjWB67YEL5AQeSRU2C5iowaLEUbUNr6SWb276QKi2d6jqgkL8SJRVoJYDWjHe",
  "key19": "5uQzTXevgfh8fRymW7dwPCu3onFxc4vSxf6Gk3Z4tH1YHwWSfwbSpuE8QJE1W6k7RMPqtzArStmxUVLHFyW9NUa9",
  "key20": "ybteg6q6NJTTysEFYaaS9XXgJePZprnnS2NqN6u9gBP6jpgPzJY3P9kwrEpmAfSyXGLPgB1dYdVFuRRvzcDt5xE",
  "key21": "Nh8ENfvdK2kTCeMAfuAQJw8AA3FbayVdStu9BU893aKKqqpWk1teT9ujXV3z96FhW2soJc4F4RR3RSpFbogNe71",
  "key22": "2YgrUxey5XN8yQxPKppW1csncyaXG3oJGzpvBpREYcANAm6zHQ9R787p32Jr4gHKNwrBdBuVYdXqW7ZFxFwNVp8m",
  "key23": "4KHHVbzFj1xqoH6Z6LUdvNdLMdm6ndZWrFYor7yvcu1aSMQNdN9Ty2SmCYKpPw2Rdyx7CScoeeP2jnNjogVkHgRe",
  "key24": "2e1WHHyeirrodHV8AsGr8AMn99Rp7k3DEndwCT52GJp44NZ37GDRbb7mZNwZwuY9SLwwjsQJ9SfzHWBwL3ufPp57",
  "key25": "hpPkb6o3kijGimb4bESTbYpRei6pJQcU2iwQxtfja3g9Pz9ormee1NiXUpfd6s8csyEirr7WnsTtogTM9cAytEL",
  "key26": "5kYWLxYCaGYEG2EGfq31h7Fx6w6G6daNQVPVaK6YBbp97qSAjGMv4Y2AW48imvMS6GFEhHbcaFiz7aMuGWiNEiPQ",
  "key27": "iSK1kjvyF5Z3MJ2u38cQoaDanQYaCH7d4yxpz4udV6QosNaxeppz4276SBQ41ArRBNvodLaiKZewrqFT9MQaWT9",
  "key28": "3E9dKCEZWyUASS78jtpKQ1td78v7uA7fD7ESCJcRkT81UcGwBFF8gNaekfnRscC1wRMCzXQYbicJ9F3YhArieTRT"
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
