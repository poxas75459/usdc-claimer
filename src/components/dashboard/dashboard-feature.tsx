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
    "5Pt2huw4m98vUMVLSM9XKS7XSN5t6Q4hzTQwaKMUQUznXq7Yn5Lox6JPVjpui4wqpcioR4njbZG62uvTkpBgwHKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YcBS3qAqkm4ansnPZkPMbEQHCyHckSqEYy1YYXs8na3DKosv3RZbZb9yEbrH9Ugr1WR3VoMnF3FGbhzDZXGcUii",
  "key1": "Fo6zrheKv6AGebMpWxQrYmQywsUrSft4J1c9gsEdvP3ujqnBu1AriZFHW2Kzv8SRGaEzQTGiGk9aU4fH6fk4RPX",
  "key2": "5ZSXZo9XxNVP2f8dBvRo1UgS8sYRsYDijycAdPKdsYyLNDF2P68vtUfX2BEeT29cHbLfp2rnZUWqQNuubiAbreAN",
  "key3": "3dp8f6bQjUst9LkC4DtZPKMceRZkvKkTykATP3aUsPVWAv4wnfjYCCWNAFmWMguhSqKp37twrBeogKzDGXWu2CSN",
  "key4": "2CrmmV7MvHKiYGwrnkLaeiAGHWNnmMsfCzo7ntQMmEKLKc9rTpsPR1PsYesCGWdiDMQLmse3vhz5t9n7LprmuSRL",
  "key5": "3AqEMFZ8z6KMwHN8iUg3jehcWsMLN2RyXUszEiQ4A2EWRGZrCoZdxW4tGVv2yCrgNUciPFTBbLvruiU6cYjgbnwf",
  "key6": "3MgNHgfWGfnTUHAV6bLhzvetsZataGtF81CB8Q6jcp5S49ZXQnDHj1kPSarvrLbuCXJvfjAxpeis8GWi7SyaskhP",
  "key7": "2JfuFCr5ZeXUvvdRpSDrYvL4ReFHSb68vjgGmwGvCDt2nTPe5cQ6eH3TTb68qPMhK86YKA8hxsSrBPzADQ3CusuR",
  "key8": "24KKYmYzXa8yUT62ghBMMqUmdvQvTF5AXccezCR8h2myiVM8viTbkw3GoDD8vfauDpXt5agf8HEUUJdzxj2N6q2X",
  "key9": "3PFZAU3MJbHyaTaXBZZbdRZi61W2g7WnMEm1UHX8DNrgrgf5QKYYg9oMn82Wu2SpRZQ7xzhfRaPiptPc2AUW59zj",
  "key10": "5hQy9ioNRQ4Q1kRnqusBiCj7Jx69DMmJx7r7oC7H5qYSkBLnxNHckntCgSnc3XMfVzti7KVLEqGCWmWxo46FG7Uu",
  "key11": "2XYpvY3ivr8oAmQZubkaWM6Q4DjXJzJgR2poDqjDe4xo4oMSr2DiDdtEQvY23DijCRAe8axmsixvkbm6Rf3PQAX5",
  "key12": "5i8gG9zLgCw3wd9pwhKndfjcM6Y6fEfTAhQ7NKokaBeGk4U8Ek8WC1LZDHgAjxZRFZniattCsRT3DfZuVC7V4s4Y",
  "key13": "3Gjj5QXzRVXBkfUXZSnUWT2wD8dUbV6j92s8vujETJQGYwX75kBoCMse8SKd1JKxXmu7yvLncPu69TDp8UEwbWkH",
  "key14": "21teu4pXnAK2pibyY8Gto8JJHNXMqvouU7b3etFwXo5E9oSSawodD4ceD7ctfZF8s1WFov18w2JQGPAdDMaEvgYL",
  "key15": "4oZ4MTVrirp2g7EHEsNtaPECU6fi9DkKW3RspvAccoaAm622BHCtwk2H5Lq4HtKo6U2Vdnz5k23hSSj3VNxJpNkx",
  "key16": "3EFkDMq6eVyvSdMtukjqNUMZSzymqUnwcwwdx27CTg6qyG1YeJVGXUWCFCoU9yGaznBWfxhxCWJqYEapovCvJWsg",
  "key17": "26qik6ViHxiB7eZxASkEgPadFkH1LsYAbMBUroTLMoNwtjCrS7cM5BSga2wRX5berCJC3m6YDaXYsCbwSwR5tgHa",
  "key18": "BSTC43hS2CS9RGwHND4CrhF2LsLUTdP8RsSUGjtgVCbvtPhiT33nmz38TZFoMdQF4tUP9XED34T9xDd6EiMjZDK",
  "key19": "S4TyDwcGNc7Y5k1hPkSVSNsTJNYYyyrkBpeVjSHbvvQaEHThNPcj8nes1YK11dcLFz7eYMvA1EVvtU4pL3pV7sK",
  "key20": "DbKhtUTJbmibfoTNxDs38gWX4JufamRpfp8jvwShoGqk3XwFuBhQrNMTXy3JaAxtVLBA7pkZM131LWFWPC2cfYL",
  "key21": "63mVtvz1WhtaxaEeWGAksD2P6p9L2nGpeznzK5civRuRfgHduyV1pHdZJMy5L2FrfpaYY2ANJLHG1XeoJxrn3ZaD",
  "key22": "4C42PcZWGAGBGDHCtWgYVVJ3rEgMbtSv8gsEaeHqcLUgLSjoe3KGJ821rGuXXNSnkJUqsp9BkuRbuAuwGw4WWUTg",
  "key23": "3NUkQfNiNtCiujNvtxiscnMSRuxypQc6hF8Nj9BXzLn74ywDUkzRY5YAg9oWan9wTKmKTFsTDaHYkpGzGUo5CRfP",
  "key24": "3T85DrAC6xbLPRdPpNAndCEbkQsxZoJ1vQWJFVtEEFmV75qm3gsrT93wc3BgiekpkFMCHgQFeCVBKizBMMuioAoB",
  "key25": "3MU7LgihSvRpcnWiBRvD3Uv1LcXYhZWTh9EPpSQTNoHwqeh5LmTP1BUyvqeLN7gJ1WNshFWCph5R29ZLeadx2eXA",
  "key26": "47u31WYjxxYPrdsSTxMcfstDFmzhJayEYFiuUkysEM1Eqot73ZVZYKvubNzNisCeByMiWyRXsKwBStazdJNqCs5Z",
  "key27": "5HFRG7cVgQ7Jj7ognCqTDcbhFmftMnLHvhEoWpA7z2ysMxmPkfBq34WbRYeqDuxADn6kS4WGMWQYkunYFuNpHWLi",
  "key28": "5i2AfpxafaZTZx4ucLxGugpsN7znfDMZXHjgLtVn9QPG94V3pNrYgRdrPPnptqALudQHT6UZQTSpNm2dte8PtvYK"
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
