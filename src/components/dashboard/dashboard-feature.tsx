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
    "2bUhS1GHjmv5EktX2Ktd15HCKpUa3YB7NzU2mENGNLmdRpRkV2VyofhxjJzuaL1hTWtxqeS3UFEKgmLecw8aFWhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LYhazfhi74QTJGjEjT4gt2Fwu3fNETv6Lb4W1gdyAUEJnV9weRCYsB6qJFmUQ9R5ipoQkP88nhTLeSSbTtnijJa",
  "key1": "4JzVf3DJe9XS7DQankqARqkPRHdHnTj5T1DXZPRxRYkjSyoJShmKPNvtEKTH9Ye7TjDHrsVMdW1batQvSFnFEmwq",
  "key2": "3pkFFrX8YLzhV8mBPh2orU3fK8uuMT8oqFiVnh7PsCnr1fGb1J6PVA5mzspjSCZvKUKbkUpwEzvdP74SpzdehQY2",
  "key3": "7KpD295MAwZka7dfouoLG5HTY8mMbm7fFz7prPSx4Y4Xr399JpTN5BN73dwiR2vkaByibyJLz5xj4vSHFsY1efr",
  "key4": "2kbqfod7awFbcgDbJuoWnUAnTNDjEz5B7M68cmdVmjS6eFfzhGCWYDB8Q3DpQ2pZANTxQroccdyw57kLzceXCihk",
  "key5": "3PkYtk7gF6BPw3xsCL3iRyTnxDqhuvjPEmYfFZe1rEfuaR6QWsfhTtmMDmgriCZe9buBjN2Tkqy6dLxnTq4J1hV1",
  "key6": "52iWgvzzGzqCozXfbV3h89u4nohj8MkXZEE11rYwSGipvLLanSY7cS5T5kTt3G5kTjV9SzdNHnACoLrZyYyQWaT2",
  "key7": "5mcHuBnprfKAWpUqE6BHaB3SyVApe4yV5JwxRfAvee1wUUbbg3avd1mPfAmyhDJ7jZSLrcwZEFWzTQFmgck8vXeK",
  "key8": "2MmneUuWqbRGjrpRjsFfAHK9gfzmvf8y1zN6R1p4P6MjDYJUiMgbLLPSkFzQiXug1NzqMNcEQh81xpshfA819hQX",
  "key9": "5s7YjM7TL5uuowtWc2tg9LWkHRqwMcTn2vSr1rRgu2cvbLkCpWQjiqxjoTVGDCwLGc1jwrt5rLNGTXyWWoZuwS7C",
  "key10": "r7EQxdaPzgCwqQoiu3EfhdCHZv8bvGtqRTnQrMEK598sd5JM2PrSTfLyt3ayYvJhRKbAfZMhufrp8pBkYYkzvic",
  "key11": "5AVXeL7Y3kLxy8UnjwjfkZbe3yGRNWsabweqjKaiDRRVk9qjFut4J4ekB47QT61GYLYU4xNRzVsCP2Bc6LZw7teg",
  "key12": "24mDNKwqVfcjnHp4ZBGSgskfkJGaxuWHjjdmefmrCPdYjo11t9imKoZJy7vqzQYLzuQhmvhry8iEb6RRVy5pv42v",
  "key13": "4PLaBSVzHXQPHzFAibsUYuNsGg1q66KZEhxS2RL7Nfu3221GAbdWVwUHWYtxAW18ZqRddgPuAzfNZ9M5dq88WjSg",
  "key14": "3vVvEsY5RzpUWdN4T2k7hss9R8kKJx9BiFY3pHi1wqG2uC1LpLjouG9KG4whfXj5jrQhoiQPguB5TRqv6nRwUzSy",
  "key15": "25guy7jEbBK7Kkkyp7er6PVrCnXp19ybiMMiRHvRTijtgMa9qWo7ZYN9UiS4MccEjcCSTBXGS94YA5NGFGfH7XFY",
  "key16": "2ZV3f2ZiAEHo8bSEJ6WYtFmvMzeyvTfHkuymJU9WEznMq2ew11wcf9DzbbqdmSMLjcffvWJB6XZD6kvqUQRaybR1",
  "key17": "4VkCfSBxYfi3RBXW3EPSHQhE53M9LL6XBY3QdZVmogfh5Aoz2S61C6r94t9V5D7zhaa2ovMKbWN9f2buuwd9dEQ9",
  "key18": "4mGgr3PVartJcB8sBb8xGFHjTU5E6AZuKhMC3bVPs1tK3wFYqjepjmsJ7R3wbDhoTxb31ro61ooyxNDqQXUYReGK",
  "key19": "2WnXdWoh91gGAWsyQeCyfT9vuvdekPERNCgkgBA7TVMVgcKtxPwHqSJxsHJHAB2typh7qynahaYbtN1jxsHi7uGw",
  "key20": "5LXhVVV4gyEYdDDKX4QUJ4CPxPvycdKLXknaspjZFi7SWsggXDUfERyPhkMUnkhTyuXhnJUw8sQj1zjh23y2FFPa",
  "key21": "4Sy2CVGtQ3toKbsgu1znXA8y9CvFBUPWdgoE62i95nf1ZmaEdGZ8kXNN3eEQN2dkPK3QXKckkV45JFJSRvcxVDL",
  "key22": "5Dh4RTncxakjKJ4C1NA2YHfWMF5hkASjashEzaqrt7fitUpY2pZwYnEczv2jJcyxweqjqEEFv6BfbDcDnoCeTfRa",
  "key23": "3gSCF8bySnV213U16aRdKPez9fWeqhd3dRH7Cum8c1nEaBsXPxtDbRbZ53Cy2pTmjjijACcGfQ1F75N9V3LnBA8C",
  "key24": "ZTfjsaFbzNiYFS3VUdA4b6Chw6WTj2LGQHYoicJiiZ5ZL25kJS2xHMBthzeEJb1n34LaMDxryRXfbVrSgX8Fym3",
  "key25": "4TpRgQN7rmRdoEAJSd7hcLzpHNRauCeaghqmvNfCm9yzydTDwji7oVwdkn2jvp8LPDh3P2v6oHrVUaqQGeSM4Ynv",
  "key26": "5GfzCYXyvZrztrmChzEiAo4LZBNEqs4FeeXjBrWiGAnHxnntnUZ2Kb26PxsMdqanM6RFT1EN51isugxck2h2CXbu"
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
