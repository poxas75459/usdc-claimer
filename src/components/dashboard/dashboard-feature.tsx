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
    "59xGm7sz8y9YALE4t2XzoPGnBYZ8puwMMNAt7VZiAdmFoGwjB6yk8YxgoYcr8GWKM9VncDdTAneUn1moYq1RGgx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdgRLWzM37aztt3sMrWVRNp4FVqLWSvgnVPuRxfQJZv5AXgj7mXgHcqyHgGsRAC9EtGyajyzp7tvW8JzK8vX7w",
  "key1": "trbdXxHBJ5esxEEJSzXf3SNTuCxxKVNqKstegui9Z7ivRZdzgC3TjkcEJkuiKhvXvRwKT9vYPJKTevwvGAdnjVR",
  "key2": "4eGhzzYtSevhbzfZ2KYpAwpSdiSVJ5X9bV3rKrwqQJ9FUBQZVARbpxEX3ZcQ8bk1gNGtdWckznrxvcYfQcHPZcth",
  "key3": "5XPdnuy8k3CQjiEsjK8vGiaxmuGMXLfvBaeodbzZ18JAs9MvpW4du8dFhdAgTVWnngQxSyMxEtTkWtpKzAoNdLq8",
  "key4": "5zr3Xqpxt1CivfMhH8mUEHxJJ6M7qvXxXcpamdm39ErxjpBzS34XUCST2omi19ER87yNAsCiV1Dspevpa3V1MfR3",
  "key5": "4fbvrFEgxDjJdDr9veyey6b5SWBW8xAcbdfKSiMaCJ1DWfKHZBJPTVnjBs5SoNpKM68oAgnuqwxc6tw8B635wyt7",
  "key6": "ech2XiqLZ2BWumaoq7Ju7J89b363pihWeHYU8bFnYdU12q4HsufPq4fDVKknFy6ZQgPcUJ4x1m3LGYmPjytYtHH",
  "key7": "3jEwiE22BfRdAVD1P5K1UzQB1YNxedixGUNxR8JVqghzyzaLbLUPwSr1PWfPRNCrCnsEwa5mpinFFpcBMDFMfVZ8",
  "key8": "2UN2qMStwuS38833QfXqHcUyT9gnYa8WqGnQ7ym9uUpya66AVCtsvEdKRrv7piPfR4uh5Weo1NMqBf1uSqnF24Yb",
  "key9": "hWseALdePcnwqRazPGZKm2HHaFVniUbaddUifUTc6PhiUryasNbDMpRw3TBUZ9C7KUgRJ7RibTmdPbJ9M9DXk3j",
  "key10": "4YSSb7UrF6Fnq6NfJY67VJ9cbD4pf5pkjngS3tVEUXEgYwrKJL3bwgo7SfVZUeFvsgVrco9SyyT999PVSbNmy3uh",
  "key11": "2QUTWD6FLSATo1VDwDAzPXA8nos9qGXN2iqFdmzMMduLKyP47e4S71JnEBpzmAPQqLyufxdKeH9GG1VCwBishjX7",
  "key12": "J3YZrVwb2hNuxrvqBxqA4KAn4DQ1QcJXrfF4ojmPRvZF4qisjm3hGtV2jUPmYqWvCf2rxoCzYTT4aPubfzbbQzk",
  "key13": "5xSZMRYc2msgkPSqrw4DV72HqL9yN5YipH9dytbo2YyLGQUrzHgodefes8xz3hegJXGdBavbXLSZUHa1MoVhKZNG",
  "key14": "3gKEYGdnXBzoBW3GNsRMTA8kiv9DWwUjvMjyTbnj5Vp8n3k5vGPDMzvs71mftQ6ckmgV1cbZDCfEyiha9H6tb99s",
  "key15": "2MiZAVDMo4EEbUJ53pg2eqquAi9BJzq2cfRSywCNCQRNB1ZEs9L9FNeDXCbSzgEJaG5jmh8w1TQ3cjYsVoUGgXMc",
  "key16": "3tv9deANDiKJ5N5sgyPfAoCzPk4fcqiYv1mtsxUw4ikqnMFoS1SWwQXSBE3By2rzJtg5Kgm7FPyUwLpYf6ZtVwUW",
  "key17": "4tS45upF9mPNQAE3vxd9LAjM4qcg864DVZCEkHEiUeasng4yobg7yKyGXk4FamZMgxVtTG4QpFdDKcSKz6amQ2Zw",
  "key18": "5VPRgbrrgyyyPmLTXYLV5tXAsqzoV7XzMyTnB5EWi3P6QwFw1hcDCwe8ZEmLi6SPWPU7gfowBxe9JSzh5zPQ3d8B",
  "key19": "LU5sJMkM1qo5jF4bHx2aaj6NfVPjDms9PXcg48DphANiUfVAtQjKpoTmN7YogLTF6Tf3YkeJm6abcNxC1UXKJuV",
  "key20": "2UjAPMjXQf1zR9ZmQBnAK9LBdUhrYJ7zD8x7m1HFYiT5Jgh8tEYzoqbBZrbKzyERMBXiHpf8mcY42UXG9m4v1QoN",
  "key21": "2pmwo2uovAR5ZEZmUguzyhKjir7XRrQhBkMZTKQ79rx3nbsmAJ8uapYrCEjPkJUT3z72b3pw392tfc3D4aWLqVU3",
  "key22": "4jxwhe4EpitT4VPrWzVoYXg7EbdVHtjw56Qqya2bKrQwMMpfbFip3edpcwPGBMEgSqf4Q8ZopHHXTSm9NwBBpgNV",
  "key23": "2GzQm6HA58gQqvp86tBo51LBjcisQY9EeoFkJ6aWmNUaQTVFUa7CqHXqbQScj8qbGVXrAPjGuSupMjmq8WNBpKss",
  "key24": "AJAaoab6wmCvnFySdWzSZrfdbhxZz9xkgCaqQx8kDUckq2ySGyhE54C3viCKHS1DeMRtpeVfqX3hiMyhtojQ7Hn",
  "key25": "537kBKFobgPQMdCwxps6AbJ4ZhrJrpJe4ykrugQeXFEsDJF6Eqm7pRYaUKMqQZvzbm4kKuxJKYMq9ZLHW9DEPDzo",
  "key26": "49kGV4wuzYTb1txSjqyNfTmzB2mGUeH6oysbUuPHP7gdaR5k1rcMyuqEDVevvQXBkBLu3vRsa5YsqPeHCKBqMFue",
  "key27": "5azmG24h7C6FVqifn2kJ5Het8DDPYkUL5YLcwQtyzxkxUyiwq4C1QMF1UtMTDypbYQjfoxMgtRCmuEMntwpFEgRY",
  "key28": "2nX7B4YGqThJL3VnRgVVwEtbggnZNQCJs6P7tjXFYktNURjihDoYwqXB8ExECWVfjWrHv7XVtUE5CMTfX6AjPsWh",
  "key29": "45D6i4Wo5aLZLKFVzPMdRbgW7KHfxiUbSKGwkQTPepWWkSdwkWqyD1FFFg8bsPC2vmULFUwCQuTTyxKRjYzFoVzs"
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
