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
    "3KPHCSZeqAw7MGVZZBwkK1NfLDgwYyM9Xs4s149rYwx9W4oFJkexRghf3rYR3jHehvV2H5AKm2rvJPTpGCx82doc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qVRqVX3bjXUuXR4rGbcHjHsBeJnmTwiGoSyUmrJk3BtDbuBbzYUmZxQppQQXEgro4BpoeZmpiNVPyMK6P75DjAe",
  "key1": "BgDr5kb9RDURw7dSHCFChBCYvWcGP196JCpxhDVBC8WcWcpbU51YSGR56yYc1cztKxbMUkUa6g7fgQYbyJb5Feo",
  "key2": "29YQG5XefAsyvGmRW1HNsBiS6aSjqhWwb1U3xb5aD4siax1tkQkws1G8XU1pcmfnEHVxQ7hdpeoyi4nmx5x6r52e",
  "key3": "3zgpKULXSdXTMRDZaC9mqEgyoUUoUMmUz29iyxZ2yxodvpzsc3YB2Qu7yDq3PsPbfd7qCGv1135HfhtyqAbRQkUw",
  "key4": "4qT8XcTNRHY5AX9UnpwoZCD2pqW8xadRnUti4mwBbe7TmtnbGA97ynisBXRyrvRRJNNfEkQhcJFjaxdGtgUDvnfU",
  "key5": "3VgUXMxHRSLaMF11M9mB7YCuMyD4jstgGsSgb5i1ogsNZTZzUzXnCTyipvc2CFBXm8u6A9FFRuayyxHSw2PmNqwo",
  "key6": "5v6HR9tMvGo9ywP8mF8JJw8WHasEmHixuTmCf5BqqHtyvp3cXwyFdSWjDTawwoKGnosGFr4NxdV46H5Q6ZD8My55",
  "key7": "s1jq2QZ9zfpXKx9nQbH5Tjqzs3mPhucTusLAQVbceBB844Y8y9HM5rjpLBSceAVT1KBwkSMeeUjr55QJ9p7Txra",
  "key8": "3ZEzozqfjfpbYqEFksZ8Kez2ptT6Loyzjt891nzvqtAutvV7dA9A18BAV8mE8K5JA2sB7A64ncjnHThhvtKoCG6T",
  "key9": "4Wfnfxa2BgrEQgMQY7sixZicaMVueEhTPcx4Ud7br9P2iwcmmcZr5pb68t5YWv88xWKXmGVnjyvKZMYN4gMrfSyy",
  "key10": "5XfwW1oZKj2TbsMBGHUo2d7pYagaSPLU5UpDawZeVUBsdRY8QhQW9KpRd9bxivoxh6GbLhNT598PSgbS8WcFAb28",
  "key11": "56mfKBu6SYPdQtVfrGSEmZFeTYr5SPg6fp1Z6n6kVpbBFkE1rX6LWsHdBbhp8KJYN3x3YQQCaR82SJbR5f88q7w1",
  "key12": "4JqozvRD8bcQQ1o3RzapU8FPZVBRK1ADAWATNKbmJ84Y1iqCKCLRXYeCfjHMEVtxWgdVLw9jUs312WNSawza7xsr",
  "key13": "5v2vv9K9UCbQf4jJDtxrirhGh7jG6rv7WeQcQwMq2pHyF3PG3WRCJKpTt69MpQ5VVSdmC76MG1wjKESBWKeUtNNy",
  "key14": "65ZTgmLBWgB8VsEgqwP41BmDmPyn6mvzAc6MjCAmSTt2kbFazAKca6kdzJZd1ekWQPtNmqj8pxNMpcDW29eW4NdP",
  "key15": "3ZGfzeuRDKVu6YfiaN4GvmZiKYSv3QkSFmwh5R2SsBBS7onxBnQrtVBQyGgthFTZDkshJNtizQJgQuH8TV2p2NTv",
  "key16": "3foanF673m4JqvVd3jYU3Cg97rdtST3oz6PUg2fgfTZibYZwZW7m99jLJm3ELAyrGyyzBekoRpvMfWjfKEdJwni4",
  "key17": "AAbKSdSGdPmmfBvbd24rn9qNN9uiVBktkLoUwFSL6dP4poKmKfyN1eQ6tYtFwyLx93D7hU1ULad1icpkm7Hk1Py",
  "key18": "56woWM3UywBDKdVUX3URkEEoJC9UA9UEsLxvznF9v5rZnmMj1uJVsAiUSvHTnL2fGmppApomJWzdhvjtKh2878sg",
  "key19": "3xTTmm9bbfcus4kMp3CgxJCevLSkKiFPEjpU8ffLpnmuXDThpaVxZecoVWn1aMEH4h8pyXhiZ2FX3JfHYE4JpNke",
  "key20": "4C4DnthZkcgFYTPvFX4yevXY6sTLFdTeiwU6WkcqW5GNnCgZvG6aPWXGW8BU1ioiaPxRCvJymALfBntGow8R61z7",
  "key21": "5s8YVQGVcMY9xKZmCC8bcJXbmhBYivqXJ7BFpGBzASBxETVueTrJX2LZb34q8oNEBATymtRK2792jEvVtJaSs2Em",
  "key22": "2xkmkZWtyhQ74dWmyrWmfZUJNTyYkE2Xqw1cn16hqA6YvnyGmBeTsPArK1jEMU98R32jaZCD3v59zXE4JGA4Tont",
  "key23": "YGPURRZdZYEF64inWqTW8uvKNubQk5ec2Nn5LdSnfdCPbGEPcCewJEmkSUd6pUhnicZ95d2ko1qdN4U3cGz8kG3",
  "key24": "2WznfTg9NTAmqmbrrNHBK3V9qAexwoqNHyM2uMq9Be4EpKyfzsvgVTTq1LWGYDLmuvekzWbbiTGr246AAaqs6T8L",
  "key25": "2P9kwbjR4mes7iFnq9gvVRx7gd3xqsnKbMGeSP9P71nvzZyi2uq55AMNTfe1DwVJWRUnhNRthwqzTYWs2LJVooqQ",
  "key26": "MSeSe2zkGBB2yjCmh23Ms2wdqnN3oQueHCjXaCnosWAdsXrZnGrwuG2sUAVWPZsqQzYxrZFhmxnYUp9sAtkdbKj",
  "key27": "3KvGoWuJpyveRdwD13BrudfY8GxUsJSAtkGR2HY5kozCfXDiTcE4uvyg2GEFw8jcbvKJF1GrKFa76EBuRmyiN877",
  "key28": "3YgjATjw61pWFRiJUiPhWEEZiPotRsjXz4hkR3cS6RnZu7F3BRk9MuYDVbewiZxbYBTniCRhuebUxaGcTUpASGhc",
  "key29": "bVFtVPu3ihr9bAv1x1zZSm5r2uD4Mekto1eZ6oV59YbGhmsWt16A9qY7P9FFXqrDwsEQyQyzKyd7ScZwbuqVLDT",
  "key30": "4hzfFgJ4EAujzew9vhVrxMwKBxPNsLeDkwWGwUpYNxRuQFEKFTWTwKvd1C8LeXGBnq3keuZouP55zQcmWzFHDeap",
  "key31": "2dtZjSMsny8v1HhqH1rnJdmt7uvELmXvAm4NvNBf5TUEHSbJYmVx4AEjHLbTvffPZkom5sgDmw5dvhTR2PbrK7qJ",
  "key32": "5MBYgnZnLaxdzV1YhgF6q4aHfquBDYJf23McL2GjmgsHDZfViaP3EQnqXg1vvguZU4tC7hj4oTMCtbgBBwHtpfJL"
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
