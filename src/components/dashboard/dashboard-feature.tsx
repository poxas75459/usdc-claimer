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
    "3miG7KbSSRQ7BuAFztUv7tTBaafp9TE6SQ5HxF8vcgxRd5V5CbGHzWAN6H8o4eH9NQHnPipujW93NpGEjgGpNUTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7mduuTdAGm7ioQBxjGTEVtXaFsL58bAzRghzGs9px3wx5utKmoEmUhbCQxJULWgFa9dexfc65dPkThTpyw2Pg6b",
  "key1": "4ga8HzKoXg3MeMS6jYwEMPhuJXYZhTbkd2uNXcyBnbopLYHMboTFMyjNrs8vGz8EKmTvQ9bHi4JykPMKJn8Jphc6",
  "key2": "2SQfymvqGPwg9VHNP5fToDuYnx2qCRRwv41HRYD9auq78hmQL84dcg4shDNJFbGTdqFDvxXe5rYwNfyekCxHLB8A",
  "key3": "4YAhxCxRMRyyGkcToRpUvJjJxwBZpGBWhpH2RvhVf4tpqDX14GRKfPLRHSHdbheVMoEZxk1QH2MgdU6hq89x6uP9",
  "key4": "VXTX6McqbhaAYPD7uJcJmAfGSYkssMSjTqCm1LTrUcGbxJQaj2uYw9ihpxgMtBXfNxemH92YxpMiLqUqxN6Luuz",
  "key5": "3u2LoZiDZ22KPXRFyxBFnCaqGwT4U4HYU9QwRFwKQdrxzwL2u42UMnDf9zsNVTiwgTPLUHKpCmmrdy5Cdppf9hSj",
  "key6": "efyBEQ8nzxypeCVFrb9EyyHdq7giNT7aaEkeiVeJQ6GALJp8tTF6LBf8P9FDadQ4hagyvSCfxbddinLK2Ej81ii",
  "key7": "2XNcy4D7Ef855FEC1UESaSntHcp2eBdsSdy55kXMUjVfhBayNYq8U6pbHXtQX22zbDbsDDviCC19YwwxRaU3yXxd",
  "key8": "54GiaS6h9FVNhs5mAFmVH7Rx7LH4wdbq5zsw7cUbtTqfKVeSMCDUDv267E1P3ENm2x3juRimd4X1ecD1LjyKYZAa",
  "key9": "4u5tHg78TBg6pqtAEh9tCv83Xzi9n2Espcq8C98sUmHzv918U6MheY8dMZZnwwq8RGygqcuohwU7G7YCXsQbgJYd",
  "key10": "3fwgcosFcqp32DHuXsKG3oUfNdorsKrZhGCChGtiUAVPYM6meEiQx6jLPwG3bzvsaKPN9MKMyRfU8pgAD7pc1ot6",
  "key11": "4YX9veqfp91aDbSj54U6hrn1wzxyzgCbhkfSKMFPWdmaZPcQqqNuQyyvL4wYDXrTaHmwNgCoYGJFxrAzsqMZ9qAt",
  "key12": "2MEZjn3viQK1XfDC8SMDCxLQxvoCZ9ty2pFtGg8qiA7SBZmVXQaqhfwJ9jxYUhyB8EzbWEv4fMsSAYq4MYjwitDu",
  "key13": "32i2TpnVETRe8EArjYdw4gKcbAZEyo979wAjZpAmdhWcXJbd9rGeCPRRJNwt721zBQLRvj1UntNVvnXxm44jPAaw",
  "key14": "5J4Eu3WWnaRvQnejuaWUvUAiMGnRfsPhu4p3eiYAn9B1VMdSSPjsJxAfajNEhXG4pBJxpZFaR7oaF9rGz6xzG8W",
  "key15": "4rXrgTwxCo92CPL9c35uFh1SgZUhbcu5SLzzRVMLgGzTRmdCwVaWUbQhjxWDbQpmW3HFMQMQvkUXRs3xCgPdymzi",
  "key16": "675CaMnmzt8ztr1DcSW8SZsEKcKBA1rViy1CHVDksLneykpoDAqcaEujEop1KQmzmgjPH6WZPNwmtRhmJ9puZYgE",
  "key17": "2oxWKxP2mv2BynPkPesan7qGcyHrbi1PSG3EhgSwiJpMEk954v64z2VPZ6y8HCzAy6xiNsXsBGVcGrLAhWvXanDK",
  "key18": "4AVqcwKUREAp9JCNnDmrFTLjUcvYs32gHaQKmY8Q46WyHhkSfm3wRrugP7DUzfKBuGk5cT9VzFgKFapSxaVAdUHN",
  "key19": "3h3FVneiatFTXAiqa6DsdC6L9WABFJ9HaMcW9YWPMSUpLwQxuLsCs1NAaHtuU8oGMiSEKgzFQsix3kp5gL1Yq9JP",
  "key20": "2PVVxgtaQLSD9gJrdtPxvUMzi6Nh1sLRjkX7YfywDY6tNQfoKw8AryBNKQN7m5NPijRSLvXb5SqBbwCxUriNXZRq",
  "key21": "3gs1xrAR4BdWC8sg4r93YcA4zKJLEUAuWPYgmNeFxiJgSHrmUbSSB8ZZY9jtpTXtb8xhCUiowHWzqZbKfGVZzv9U",
  "key22": "4mtvAPgba9k53X3inW6UYWnBpRWLxin3GNqt2t9QxnSRJdXihhV9zpMFx7q4dNyQ1mwoRhBYyc2DuZ6MEoHC53V2",
  "key23": "rDRPMVzWLmrskQf5ftDXG2a9dzF8wZvYigq2HPE9tBgdnkzppqagRgNuKwQei3uprd9W4TUE7ukMh2caPB3dT1N",
  "key24": "2WaRDDFyhMqdht8Scw2niULmaaFRLajUePeGMhA6CdEhuhpoBdYwg7brycsnYExDwDVZabh3PqJ4ekvKRdLwmmD4",
  "key25": "64gq5RabV7ARoDymY182neCQvgKrJJePFpDoLns8w33vGhG9zH2VehNaKbBUxQkmu6CAtxDVLB2jd1TTKQbjMHNj",
  "key26": "5wmwmWdFECNfZVAf84y8Go1LWQCzYFg5WHD1Ukjvdg3EZdtcVPZ4xmhUTH76t9W7agivBMmM9B3DnZRYfJFca7JX",
  "key27": "3MSbkDiBvQyKvtzA7Ht1JeLK4UEpMkkmgZ7DM9TamZnvxg7YRUCs7h9hobChjXAWobkZRu35u4a7gfBdgxCkoJuo",
  "key28": "671GMiZLtivByUHQMBZfukW9Qk1CyKNe1qygbAu6UcEDPKL4wEKL5Yjas6i15WZHuJzqiBARsn5HsMcGVRRe3TDz",
  "key29": "ofugFghjD5H3afGDAoQw3cfQS8QDbutQZQCvk7BSfLtEWNpJCB8hXQNMyzaX446th478KffGanLXou92NPfh2h9",
  "key30": "2bZQrSyducQ2vU83rkoap7YhQan4opnTP5fmPzgLN48gUUbHRaUbq2TqMM7K6mjCT23ZDgKiv3DSJMmzVWSrLRYS"
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
