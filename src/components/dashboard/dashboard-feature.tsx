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
    "5jN4Xz3RLwEbiN62NwmHNBEukUhxkRBX3YRgTSyCvtPNhEuCWQJTBkqTx89bLoT1SsRNyaktGpCh9nviZthzNywB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jett8bGtmuiEytMS9YfU7zY2vTyC9YU5FjEeaU4LgGKwgXr9shQEjQdBgUMAdNckdRGMthGtqYhBcP9ETtjt7Z8",
  "key1": "fG1PBjyypTpKgXqnbQRsfpyLGRb741VmVvH1hyBnfP6TsEpAF3maifxPbchbzhaZHXq5zw1YDvdmrsMBkWW369G",
  "key2": "3mk7D7jErWwJJGqAn6tKPaEmo35hznDAPYPw1uoSUrjx8Ab4sjWHoVjXLxQsJAhWeQJEzBbpTBssQZkyGbwgGUHn",
  "key3": "3BD4cRFnrgeJFupR65UJYEjvVzhPRYQM2W2AYNib7iThyRtozqEG426udTFUQHzWAiwgRkd3kHscAy7HZdrFKGcH",
  "key4": "54WwtshMYjAV38vnP3aBomGye2yD44E3aN9GmZMHnes2VTWb5esMq9xWfKnPuB4oKXiR6cE5CYfNncSXnAvB8RyC",
  "key5": "3Hmy1ocyWEHXynd7n5j3b1dqPa7jsnvBrwcfxqphLHdcXRQir9kPxh2KE2ttPbthAyMzJvDtQAmFqqVoUD55F4iS",
  "key6": "3wsTmuR3kcVxQZxiuYNmozEy5GkH4drvUiAd1z72vCThk2n8ekNJHPbx5JoG52pXbcFnKyqwB7DTp6hZi67BNKM2",
  "key7": "518sRe74DAvbtsvvwU2XLanQQNd8LSSUhjaYensBna2jHKtZgV2oyQfmEfJwUFUEoJD3f7SC5hJBsRwPnrKDdgdU",
  "key8": "4BKsqgnznJiMNjofFygW9RqW1nL7whHjxef5agfvji7c1PDT1EjKhkx6p3bNfd1NKA7N1meo9hmugWTfMdiVmAxS",
  "key9": "yT6qV4BcRRcFDBfVvNh6GuJZo7Yv6BCwrC9w92KDG9SBUCrQBQq3NkvFNbCBQmsJboNkCg8vthg2v8tb5Cn4xVg",
  "key10": "HWsCPGjCXXafrMHLPGDPdcfsgVugnc4FXm6B6gr8WVFHFcPSaadbhHPQjG8XVmudmvzWzKP4EyPFMU5zSzaXo8L",
  "key11": "eMEMACEZsyCWq9ZnMzHKpZTMd2fHg1GZba33WmDnsiLEU7EZsWbahm3CfKcrQSL8g5uc6JWMZLcSduSvb7SV5A3",
  "key12": "2ESfhNuPiFgZ3qtsck7549U4oCWGKJWiQTcgZHZQ9dAE6j7f9s4B2fexn4cdeKMReTWfVpxSnTDbMKuzwa65ELhc",
  "key13": "2AYC2A2uw21h8r8pzWzQQQccDo1Uzw4d9mZyanSPnHqgQsi5jU2HsCkFHkmX82jnugqfXawtWyV92Qzf7MxeRusS",
  "key14": "2YRJHQUGwJnmKTVe4Wk4mXEcvKUqjTQjWR8wyFCeJA6VaScMpesYGCqnYMXnq6DQyPSSbGhjZk5ivGV4hbtiZpzT",
  "key15": "5s4XfhZy8WKBS7RccfnpPAoMWWVDoM77fRgVHvKLoqHVsSkKCKgDFSJASsAvevyvEM6pzfGut6gnJdXrvZ8LRr6R",
  "key16": "5GFYwcejZiD7ppx4JM1QAXxXW7sLG3ftLXneUKFbUCSqUMa2AKXshf6Z8xpX9xdf5Wu1tBkaUKduQUniPZcf2t4D",
  "key17": "2uVKJbsgTprr3wVdiBcMjy5bwSUZsDP2z1NVod4dNXNGNtyunv1zMGuPtNVjRzfrJPfZ2JUbHpotubnQQPTMrZd8",
  "key18": "4w7PMKyj3dQUnKyXdTYq4JyQfaKjRv4dyorEAQ3FTKm2XAvX1VTm1fAt3k1uP3vU45SqFrbm3UczGxSf1YWKpdWY",
  "key19": "4havcZxkdL8fDs2z6eZWG9nMh2DEVPHC1RszzgF97YJqUpdtARcuvebFHU5yRSBkKq9a14c8W3CABLnUDnfzwvXi",
  "key20": "2F6g71Yx1MqoUFjLEbHhNrofFkWjgyTmVoFr9p4Q8b2rpJkmb5VjqHkRx3ETP8nDmxMcgMn9qqG3uhBdAQAi2nKz",
  "key21": "2X44dm9fchjwyXUsn7MezfXvjoWK73dxZsTLEzE25MUiUN4eqKW6aFHzdmUmQtGtcT8mW5Gi8rp9JjJikhtfJ5S3",
  "key22": "4h8tzGr5MZujK1ri6NHS5dvUv4ejtFBNyCguc9vXMzaFwNkkkzLvq5iS7Ngsrwoj58L1zx4aeF5CncDd996N8573",
  "key23": "39GzvZJDkkeVCTPYL3CGEqDJ2xRx5hUD9Cz5USirMSUGhqo1manG8JErtnt7LvvW7Gq8QcfoP8DZ4uuRtPnmNXfb",
  "key24": "mN6MzoPZwoxHonZZbSoQqjcQuXvkUnCeJTqx3TPc1bA8SXqppTu3mapAy7UZQH86jM4DLdS4UXNGjhgosmbs7vn",
  "key25": "4tzdTLkXJnG1oLNUxgLAZJeRKig8Lm5fKH8pVTRdfjHXZdFjxzQS6gQFttuJ56yoPk7wKxcangn9uTa9JC9LkT5d"
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
