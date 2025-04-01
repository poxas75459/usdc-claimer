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
    "4h7VhZFMgqwLGsba9M1VyjGBhaceTgBbzkEJXURzZGurnYnbCFUAAvMBDwyrREjAY7uLRMz5vcpHivRdd7kButVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JEhWk93wuhtMEZTF8RxXmfHfoNjXV4Uzq64oPV4QM6srouC5y8qDunXKvQBVxPz4EoKE1WKK1DyhJbH7E1JeUAS",
  "key1": "4BB2NG2dc8gDyr4qznND6b11QzMjSEpeBr67avwEa6Pq8nMfEaB5aSyhU3aM7CAwASARmQMAFT7HP9oPbebUpMNn",
  "key2": "4vk6vJsYHn2EyQghHnchSuuiewN3NdefGqJVScaqp6rtNJ26sxq1ToeYMW1uSY5SNpi7Vjtrws4ytrt2thRHRxRC",
  "key3": "wW39nQR6AXRChu2eyRt9kYo47hzGo1zQXVL3Gu2zZovJEAVj8s9EQxXZFZkuWih7CaKFK2Q2bov2X3jFQHrrnLs",
  "key4": "5qwVn8gGfqB7aucEnPSkMDKzdCYMhpX7TnRNAv1HXR7PmpSfWtbLz72W5CuDrDafvbM1goKT1SmkC4er6yoJVS36",
  "key5": "2B3hi8wDuwQ7FJR5m9A37cm1NsmkBwGyEqVSMVfBn66scJBaeGgQWZmiZCVVv525LoX9DN1WXieJQ4tUdqbiUmF1",
  "key6": "3c8JSZ7GsHGmw1kS943muYrJfsndCrFh5sxeoNpxCeHbAx3YtH4GLRWDvbJtWDacwx3TJWKLEM7ZZZaqeeRN1js4",
  "key7": "49LkoPtbWgVwNRmDGwtEztuoLeiPsiSarNebCjazHR4Q7o47JpQXDyd3awGLTRqM6ESZzajbRXqUKr1BNrHvcHT2",
  "key8": "4isnZB2ndvWarnQeoQauNa7yPn6513jnYRoHsNYEqxn6NuJf5REPTXLtn1HeimTxMKjVUjdZFnDgSqAvk1DRowW8",
  "key9": "2p4hSvun8hPR17MeGpafKDm7n8cbdCgaLCFNdbExfDU9RmbjKSMqob3vmmNvziRbDeEsMDPJvpFgYdiAkSU1fzG9",
  "key10": "646GTtb3Uye1TDfPuotJrnF5JkGkMorfqBAjdCKs6DZ3HUma68N5TtdEoguU2w9bcsRmVuiJFYFVAmT7anSrj3Eh",
  "key11": "eucgXEvh9NMpfnhKLsc5jeug9Y8VQHZ9MfGZS3SkGhn3upWQ95qh9qJMNz1Xx7QbRBK27dnBcjiAHtNCRf5ovFC",
  "key12": "4oVHNeuGdineeKbmwqiySk47XbEvCwEPZV4k2R9KaTf6DfX6MwfuEiE2f6957tFir7GJiEU4Rx1ySYQzoqmtEwSN",
  "key13": "3gNyrWEW7iQ9owniiFjczBZs3Wnwx7YNR4umiaEGsJMrQ5EmscPVA7gtaSo3Hm8M3dqjb2abXERfP2tCFoPj3a9g",
  "key14": "5nzgcEsFoQT1R4XtEW2TT7vzLWR8rCyviJVPbvAug9AwGX1sThA4xmMvhhDmvQVXwoTmQmntQyKWTLw4TLSEVMgK",
  "key15": "3UF6hyMka2vbrU12xj7wgP2PdC47LUDnfH1s3VhXErRPRMrbEbSiyn9KX24Y2K97A3pvPXnuLqV8HwsYuqmDuVRA",
  "key16": "2MvPS6Acp1HcsSPUSUhfsb58X7thND9pgo9TXuwaToB3jWjtQvs1JwxiBGipaF3e5QCdidoWLy2i9o1zxP2VrGK6",
  "key17": "2ZzBdbboRjxQar7AHxqzkjfoXzfAyE7B9B9riLCZZ2agtDEr8CWTnbPoajQQnSds5h2upVMHNdzqEK4vrN5Hn6vC",
  "key18": "3dVEb9LWeaj3jXG59aCtrXMKDyPhoTutQPJxqd1ts2Ju2wQsHkb1WN9EyFVEtetVC6zrj8Yf7vpg7JBhqpp6sQju",
  "key19": "FfuvrKUR5HKLga4mp4J7ma1PzKAcFssyWrQVc2pQZxLZohe7qwNztfZpvHh3Jsyjd42PWwedndWxdFXwYbw4i7Z",
  "key20": "2WWXg4zi5c1MJAaRgnofMRHtZqxZ169rgP7PGGZZEpXxqZvtdQbtLx3DRjKNU9msmBfVp73utc9tQMYUNrBXngMa",
  "key21": "2eC4M2487tGNLePHGKtfNjUWHbZBw7fM33Z1A6EtDdhmx3J58yDnRUme67E6JF5ecSDsWLRWF1JBr67DordX6EmU",
  "key22": "4RCWtRXRZqF3hhBGGmXnFDqWqaBY7jYFnqBsvLq6H825mv1Ws8ZD4exmjSjQr2c3Hmi7Z4vKN8KTsoZLKiMTwNhP",
  "key23": "2HF931CceufX5VXAVDDckpFfVizycDr1W5KmcDEZytxfVKPrSLmARkwRFDcMeG8XKxFi6njLowXsw2c3xbdD5hSq",
  "key24": "5YccJ3moEn97RomhcZBCtrEcc2orUPdXHwjdNCPdkBGdmx1oEQNLpQ7qSFatA4VwncEJR3c1TZVwC6GhtWAfdTrY",
  "key25": "BvvriZg7eDb2YwBUv6zgWSe9JL2B5E1yufHctgA3ZMWKqt8No4xAWTnBi1J8zwVmHnAd9LGqCbvHZC4KZGW5rEP",
  "key26": "yEXsP6xdtGFPaqEQ2vKK5hCrkokASsSwSEnA7D24xzCCVwNPrZeKWwdT2tMbrXqsiUjrqReXFFv2b1LX9N3zFuC"
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
