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
    "4ZsNav1w3oJifRh2LwPYk28SdzeVHBNxrb6EfrmVSFTU71wpPS4Trkv4N7bTZPJjNA2BrDoc8F6PQmEpKv7R6BFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQSBdhjzfQx2xBtafHbGZD6sAQmRTuhhg1raNjABEnumLfEkoQjdkxqZR3DyMBHbUQcy7oGQr5mRBfcuUaRrU2A",
  "key1": "5ogNedfnjrKdj4SJ5C6EucWbtSW9w74Zt8tx5fw1Fya2Qv4m7xVf2RPZLnQi6etMMmonNkZz1hXT19WxxyjUH4m2",
  "key2": "yVbfz7wRamJwQq2qHWrQMFeLuUXUctwvWmL9fTea4rr21KwmvcCBVAkT8qjJvUFyPm6ssDqfzGNPm4FT225KVTo",
  "key3": "3Jgm3YaKtjkRNCEv3Hj21XGKr8BXV5b2ocjwzwToyXgc7YhiAeAFa2w9jGqdHoNngcDGUi4c1WjgaiQ5zC4nVAZ",
  "key4": "5N2sFmHsZkMgnU8i5va2XZ4o8HcUw8YnRQzWV2HiBJCiakKrnHLoBH4aMbHXpzFpmzbLrANh6HWaxMG5Xu1NKJs5",
  "key5": "3hTfGtLYkVB86m1phXQbinqYGDL278uDKQUxzvsbzNdN3YtBkr7WvS1wGhemmrbFqQGtYjKYuQUAyPpcdyjtGTjm",
  "key6": "AMPVH3RdEYSRRL9VMhT5QsWNd3sfAfpGE8qvZttReHu7HfMqqjXL92r8Wh5cFDHr9PMdDWLmXM1Nqo5xTUpc3vy",
  "key7": "23BKSCZBP6KCzEKXEqo464baFHRLubaLz4vQf3HpBjsSXkxp5uux51ZgqVEstaMuycpsdU9RrTnGXu3QcsJdd4vA",
  "key8": "5wHXUVA6aTcdywM4pbcLxzM6aN5hu1fCJVJ387S4qpG9s4rVANbNVz6FogX8TEWLpRkem2wXNfmizsLLPzFgxY8D",
  "key9": "5SfZCJj39PsBhZFzwHBhZcwepKm5c5U42CfpKCf1vAaQoBSyh6LQE4J6d4Vt4qHSLmc39pVpqCDUHhawMUDCBfKc",
  "key10": "35RYWYHqZtqNLrBvqDhxqrMMdL5bokCoTy6ydnmMTXVkqmbCoyNJaAVo2TG6XAAa2Qsx9teJrVQghY2fLGxdhKQg",
  "key11": "2BU2cMRrS7qTkKa8B21d4wAJVovP2K4NoYXgjWo1NaUN6i74inXAKPPJ7oJz5KtgGauKcBYh2k4fctCwsW2XAKgD",
  "key12": "4kt3nm1kw5tNJd6rKtVovcXkSZHBnT14xAJG6Ze2mHzYoVyT3FkT4nD1xKKnnSmySytfXV8QLnoQRKU7979dDDNw",
  "key13": "4kF2ihPnUVYo2Bg9DynqNyJeyCihaemAZDmaCr29NsmS982pc7VcwSswEXytjhEgduu4gDYraWVT27R7GStjszbu",
  "key14": "5ZSd4M3fmStipofPRRUXD4ujgQdMExSxuxiv4JLPrCiG5C5Ny1JQxM3hU9eBFmpUbphYWhfGVVPdewQcC3DjEqe4",
  "key15": "1AetwTSnhoX6HNEH42ymTkxZDRDhGcD8rGA2Xg9EwoX1shYWsfZTHpcaYrHExpWR9GFGk2NAJGy3HK8iPwQDgAk",
  "key16": "MGUztCzdMcxXTozSzPJfXHgRYmUgq7ZzPrqn7n18GqkUHKxKyBPkheXrYAG3uUhaMQyGX5h2KM8sQSSnRKhB4Ta",
  "key17": "45Myt5kwjfbwAyJjbh7KbT132zMX9qTM14AF8P6T9PTcQpDPcdSFgtCxKXjBt8ecMwtAHVaVDQT12iB7EQdx3LEV",
  "key18": "259vph7QK3CS6cRAkTosMCer84NmyWhFcFshksmqbH3JGANYD4n2mCx1xVYUjT2jpiR9MQws8Lr9Jo8bP8LRCuJL",
  "key19": "3Cx5Bb1twVJ1DQmWKvoWbpdPNGzWNDonMvABMnevJ56hf1b5NBVAuT8ai7NfWMb64swXA7pm9cKEFj5bSu4VH5Nt",
  "key20": "o6fGt8BxnqEFDiM7fmpSVKVTGYc1YuoLkyR1CQr9dAfXVJnWp4YM3LueA4j46g54Cvt2vyhJYTJEpnDqmvRmG9b",
  "key21": "SttQ8mueT7KrZnYksFMPQsG6g19iLMV1117AACm9xvz9hSd1GffM7DsG8mLAzLFLo3ipy1oa2SdE2HYxcFZ12JP",
  "key22": "66s5PhDtAc1qQ9UVxecKfRSxsKpSKWpieLGpDfN93DUXGqZC43yZnxQ6rZbkoqu6vQgHNCt2kbHNrxzm7UjwxB56",
  "key23": "9cNvBKaxDXDHFjSUB8goeYsx4Dy2K1W5JXyWipnPYoMamoY2ZzNABK83BHGPWgbY1MbLCWqhvBipP6Z6g6oHXQU",
  "key24": "4deSFjqbcC9cg3HEbDwGoKgjEz8H6JcF6rUvp4rTfJcrR1y6fWpDWJbeVNM3PqjmXcS5WxYADMhH1YAQjjrCTLKr",
  "key25": "2sodwD6V8tgq8jTGsecueW1XHZNn4hUV2oXUtYwMbcAfHrVxZmserqo5F1GJrgVvPD21vzuZt9Q2keKM9pKRBBtA"
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
