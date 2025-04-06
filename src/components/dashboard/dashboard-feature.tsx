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
    "3nKRbCw7fsEEaPHRG4Xjyh5aK1J3iitA54NWGgAu4DBFDLNmAWkCFsz1UovKTYmNktr8p7itgV5Q6ftrGp7hrMNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DWSfrBmusa7kkuEmuL2k2k4dxd1AKaEeye2UNXMSFfxNe6KYmKKxhMm42wQP7kQw4eZ6VW17Y48Joa1jvc9LXSR",
  "key1": "3fq2JqARokGiKjjBfq7m3UPQvUGgMKgUgEe3rC3Fj7CDBp1Vs9nXe3oGakpGCtUgrHhvh5LudprJv5oTFGRcVVvd",
  "key2": "466YqUj1DTLR2DgjmcNqoJzkrQdAngaKmk2JYSTaJAVjCN2aSWX4d8pudg2pdW2kVVUy3FJqHwm3AQCcd7AK2KqA",
  "key3": "4kjLX5jUzkSFceak5BhL5CZzYyk8YEBxaCHbwseVNkVLzLW9bcxe1abud7HMZEBwi2S1HAxX1TWLTyYJBVtJAUNE",
  "key4": "4zqnkaGA6C4SsSjZag69Qh7PSWTN5Jg3tevWUVosF5GhqCPKXo55LzFhGEQSxf5841FMJPL5Kbpfhqy2j8pxfCrg",
  "key5": "3P2dYxmukzLTAMWSqXXXwmZxC64CDf8RYpmPCLTaEmXpZWu5EkTYC9XvX7iQvJ4DGZ2HPFanw81J1nDGs4JCnd6T",
  "key6": "3jxfUUzPuLgTsMRPQ8iHGKmjTscxMTgo9tB1K66VcUq7SSCLuNpf1bppZzfw3t4wWwpwCvhtf4h4DLPdhD8fs5ce",
  "key7": "48ui2hB1S5tgeTBLUruzgvge2zJdP9J2Bo7zJxS7VG15rLsJfXkK6rjTyFLp17vQLvfNPE3Eap5QtguPtaRVQqJ1",
  "key8": "4UswBSww27BGa8PFrhMu5jnHTFBfQYq5xAo28KMR7TmSFTmnNjkeBqWUM8FsEK79fBXTHeriuLJMNcMShXGHUhJp",
  "key9": "2aNR3phoEfNySMkRw3WcpE8L4AwSWuzYqwfoYwp8tsCarWKX2Brve1ciHZEBYoaQkF8TKWbuZk5VT5pZ9QEyxy3n",
  "key10": "3RPRnHW7q7gTt2w9gTJJzTKEXMqrMX4LsBhfJxeMigppV5JgpkqhMYPp8m2GeLRT13CebBrzL2yLMhRbAsKYbW7w",
  "key11": "2aseBvzaQR42toujrCp18JbmpfdJzXgUqtiLn4MeGTmXT97VNmTUXmwV3Zf7dxSHroNQGA2TZH7QuqyC1AANQGVh",
  "key12": "5Tz39KKcX8uJA4nN5NV7EUSY4HfQSZbkZs97xERpCz5c9UM3naZWpqtW3gaALz9qbY86isT7b5qpHWtj1PStY2h3",
  "key13": "QvHTCxUpeSxsetzbQ4VPHYhUC1DEgmRnv4BTenirB2xjpJazvoUFXt8hc8dMyYBdDCqn7YKYCcGPwGNNzSiGPmm",
  "key14": "63dbyt2kgQAX4TFVcHuHjKPsWxpjQHQ7iQ7QEXw3mHmCxuZuW65w7dUQnW5Ro5VKMtZZpEQnegJWR9cE3fBsTSjW",
  "key15": "2ebRF7WWZZLdUW6SUvoBs1bako7Q8xHxM1BYPcYTLqHPN9SSUCYQyychXcbBCeB2usDEY3e1TTtwxwWjE8Fqz9h3",
  "key16": "42Yw8XxzCsWV2zvpf88LXXQAKB7JfXSSXaYGCjaMaH9k1TD1BGX9By6qtNpMGLWhnpDuQS4N54neTHkEyM1GH9Z6",
  "key17": "4g9pZdE279jytSePs4SCksPkNxCgC1naM41s2rzNNyQYifCT95eeEjMfqfZCzzuSBekqjP411eXVUQz8pWWC1gLa",
  "key18": "3Nmv2PfH6QUXSJWPwSgFBt67XoKmEDTcZQBPa32dfG7oKs2dcMcfuvNJYGK2WNeRuFwUhykAMKbwagep7y8ZmfmT",
  "key19": "5SXTwUbaEv1i5MfMPDH7MAjc1wboU2iEJcrHfY2MEY3j75Rb5EbsTG2WykTcx9mQCp7gDccfvV3yCiZMZsDrk9jj",
  "key20": "3o5SnzyXeXQ2MoxmEjyy8C8CX69GKiri5D1YxMpM9BFEGCSCNHPU7ukQ83edSy53QkReyVyt1iD38BAi9sj7wik1",
  "key21": "3LwZ494yewkaajrKGgnwHNk7i6nym7j8UtXLbDvWEXU8ADS6D7n7iPdX5HxcJ4tGWeLqT6Drju4LrBTvFZkwodxX",
  "key22": "5G4Mk4YqRc8gfvS895LrCdnKtR4itToHRGegPP2XnLMEtHeVhdA3WrF7MpycjvPBxqF2rEgkisPbuGQgkVXZN23A",
  "key23": "3rKe3kHkDHkNCcsabnVZRJUvr414TdVNJr5PnKCj29C51ukhTtNkN1gTAbuHmT4cVRmVMWFjKsMsEWPpp28QiQYG",
  "key24": "4mTsU8HPrWviLe1RLWeDgVMtkwWc6MfEzw1j3XsK7vxhGpp2xr9mdzYaUwz5fymdzdYFpDYZ7TwF8rSG9EAQ7PbF",
  "key25": "3FsdAGDpXnywhjMXMaEkCeB6oEFgRat9RKuaSFzS3fRQ6rKkmopHeEpYWvE3Mcup6FHRygSTC2VhrdsTHiKbweMK",
  "key26": "3n8AdRbhdP7PoF8xLyPNSXYY186QPmWppcVna4VUFQu7gG5AYaV3A9R6rEUFJAXPC4tzneDq9BccdbwqnVz9ghFg",
  "key27": "293fGx1kLALgQf6PKsEt6uKQDRpW6L719dN2iS7redEMPe34VkSyszA5RfQGyrC5rGTk79DcvQy2C6dQvJ2t3PE5",
  "key28": "2Z36xgivE6Ga2RWeL3jiZz4R3WokUC2c9J1RiL934hVRxj558rUnvhYcZM1N1hdigjaemwdCBhNvtN6SVutmxLSf",
  "key29": "WPisGrW3tZw3hvUYeCbzfrvJQWSKruH16AdeeSguL9jygpktrfQuDRyESZi6VLZy8LUXMtasoJx5io1PANCqmgr",
  "key30": "3P93RK6mvWiJQ5r6AnXcUpti3K8XnUA9qmJM6BVHXRd6h3FJedpNFUHAiUPpx5z7mCFKFAxrtQhLDrTLb8GHgGCG",
  "key31": "3MmPSc7ojmBUYJxNy5kRwEY2CkNhXnnQdKLebVAF9PjjGKpmEYX7f2EFFLkv5Rgd9b6qk3ixEx3CTWpPTk5At2ez",
  "key32": "3xVLducZxxcRtRJx6VPeykurbLYdn7HucGhM23LECsUQGU9UsmNfqEQt11Vf5icG5RA2zdye1tagC2FcjWkP88RY",
  "key33": "2STjpqFeVb6PTqUjD78mvg19u1AbTzP8ivgV4Wfighb6Dn68DAXw2zYeYxWGpGrSPKhkuVpg7248hXpJDeKnbaGA",
  "key34": "3wmQmJLLah9ZdsTHyHjdprov48oWnBQ1po5xAWHxdP5P2UDySx55tgsbJah1oyvMpdtRFqy3SXTN7gLCaFhFQcHy",
  "key35": "2bjoBftwFY23A1FdfJRxoFYoy1nkrqpHfoADGqTWV9XcFYA4pNmttdQu1X9pzyxZjbJXMwgxDqK7L5vhHh6wasBE",
  "key36": "PFuw1jKpAjDna4nHG7W3eLB9idfFehuRjGp1WXAg1UUPoAvyaZa342emHRRtLdy8dBCppnXWekxt6nkYkfhWKNr",
  "key37": "2fjKwmTfocXPa1dGic2dhEMwvaBfCFLmTC7gmM2fyYDu1BaeXHG9GT5a9JGe2WM78SnLf5iV2zgTLxnpHypjMrHJ",
  "key38": "aVkpft5SJen1Xnb2iSfTUyrfz5Mz2suwvYpi64ysUGm1BABf8fTU61R51YzCb8U4PrMEwuCpZh5trNdoxNN1PJp",
  "key39": "v5naXwemoLgfWWJiW1VLsYtoJGQXziCiY1ggEaYTUjDLhenSYKWrCQAzD4DGtdzUAk29wBdykcQsgxMDZ7BpK9Q",
  "key40": "5zcFApGaop5kXThU9fkRAgGY5E4qsCw2JPeAjEAjVmEvbdEvfuBtzgtWTGgxpXePA8Ps7DSyukLnanAyYi3XNFdJ",
  "key41": "bKFQqEm5RVYMCZMFwPynYY5rCoU4FwbPXHegV9QaE7Qb7QhzgRoD9tAotpDZUScvrTzHKrbz1uystgjEboLjZsi",
  "key42": "5z1wxSZfUKs1e5aHAF5XyJ5eXPkcuvGuzaK3RWPAf6cutDt4fQA1fEtgAfnpe37UG8gqx5XpCidgdsFimToLAyR1",
  "key43": "4yhpPMaQPMzrA26tHXV4sdbJHSFk9PyGo7GjEVEcoao5B26UUwzHgESa9PBLrCZwT1KJhU5L8AWXRXAJT1qiHFwU",
  "key44": "5GKWNqzH5VLGVbbawkaZts5ap9tymWkoCLLuSW7qCDHd58ieEA7QjSaqPXWaijzfMmAH5MfoySgpmB6snSVLDFd3",
  "key45": "5egxHocUAdFdfsa4SxSkdVdEQ3HhvaZhCd4GdbqEDVjWXBwzzQ1UAEAdP1tWNHweRuaSoe5ySqBBBmVoBUfkpunu",
  "key46": "4T74gAqPvSSYBbgBSm7eoSE5cXgr43m4oDWVmMUUG9HRTgTxdFpzJ1tKJ2GfCSk6Z9mLzmWmBCbGJUn2P2miaQbV",
  "key47": "cDL5FrPHLkSCzWBgyCYp3hWSDYM8asN6hWXJkMh7A9KcR5d5P2iw2mTEh3vWzYhev8iCYx7Gqq31EXQE8hRu7YL"
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
