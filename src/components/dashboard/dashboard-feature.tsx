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
    "7CQqBeaLLvk4CViYiLEUD5R1soU6i5t9RSu9rTTqyEz9S3z48CYJ18ARqmNTRbd6Qx4tjiBFsYLSxEAHsB165jG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zaz5B5QWsqvZrB73qJ2fekxtL21CbPyJXNX71NhJeK3U813LfJqXx5wc9h17imkGd4T8ew4SxwnXZYLfwhomUi7",
  "key1": "5gGSWJXnHUYfY3K22QZpP1C5bZedMVcqnCGyDDRZsegsMgzUQBrk9zUJ7hg2B8TwsBghL7QXYpqPcdBBqvUQhtRG",
  "key2": "5ETo8W6WuUB1qkEY9PYPq6CF1uLdA5Qw5x6rSn6RqBsY49pdvpVL3dBw5b8HDuvnGHoELJbAXeWLF8QyomZarhrz",
  "key3": "jJe2K9EcrqtJxWBxgXjNmCGonoKZSNdSRRjVqGD3PxmE8G5QYY3rw8mY5jfZiWQkFFLbCf7mB1XzjZhtacxWUfx",
  "key4": "LcZjoQ47S8e9N7aciXgi744hdWsZw2LVSjLF2rQYBxoU8N241z9QhvHbetB6T9f3LpRKNVAg9h3ugTS3V3KYTFf",
  "key5": "3yQPv5KuyQu3us8m5wraApYqz3r4z7oCniKKwHT8HKH6SWjeKTT6rXXJDXCdoRAT1qA9aX186rc8g6S7va5cBmDy",
  "key6": "3vSjeoybFUMmEm6t5ZGmtaX8XdVkytt28aNx1KDvxN6q4mYoikGASBJGxZ6iXQHEPZgK22smzsjvMznmMBhzQANL",
  "key7": "4Cr5BUefpwoF2ejF1JFSLvDZre4itwH6C8ZFYAUVAaDGw6CJvrEBuEu4JsqoZPsTdDjFDNF6kcfhuVYpiF3oFuHw",
  "key8": "MrufCP4Wnx2EoZcMdg8dB2rWEV3CKqD9EumczgSfHQ7wYLyrk7WqvGFDkunSFPxn3EhgwGRXHcJ2rpfx9Vt5j5w",
  "key9": "2HNaynk4vZzV4MneJg2f8btyNRjcPbzKmDaRbL3brcYY113dboBCAMP9SsRKGLLKSfuTtRykhkt8YCXhTA79bH3U",
  "key10": "4g2LBrVirSaqcRVZ6yDNNZ6Q88upByMeZcMfhGZhk6YqtU5ca4T7mAmdz2eyA6D2yvkEG1ce6xW5SkQSbH3j8CkK",
  "key11": "4JMQM2MRbuvHfrnC5YSJfdSh9Kv3T8qCgLqcSQnNfUrK4HNK6RFAMiAWAfpdd7F1ikoHWSYVN6kxJTH8HbQbNi5N",
  "key12": "3pP3FXiCvtvddnYdujn6bnURJdD61XSKcDaoAXFAytK3X7zLsehpjdjckkkmf7M8ETLQaJv3HCXRfrQGeaWVSoss",
  "key13": "4xdWKLRbDnJFbZDtaUExexoghgHgmYxc6W4seDZGpCm11xikVBbGMYdKsuSfmEegs2GGARUzLoFGpKwfRikFe39j",
  "key14": "3aJ2jGh8Wt3iCtx4dhaJHkCSVcgdZh6wN4Jnjon6kmd8J4oepLsc5qKnFHPZHnz1xhg8GimRcRGC2SQjXM781PtR",
  "key15": "441UKhAdFRCa2Jvr1it1gPFsgWu6ugYkRXVvSWMgJMoQHPQhgAhJqqM4qAntaiEQy6S3UXCEqS6TaUtr3T6nT6Bt",
  "key16": "2VNRp8WpBP6dtCvLWEeun1VUZYx3oyQDTTYD18RPKCKAuZ9oPaSZL5DFHQGNucZm4hVSbAKBSaHhr3TySS87jY8f",
  "key17": "d5B37r22wCZpJ8RorWoXWbsuL91DSJ5KuZDbAqjDXJM1yLDh9HduhRJErSFQ6K9kJcs3JY18sXQQ67L6TT6bsNV",
  "key18": "35TaDAg7X6meubim4tfVzRxMnp2UpViuhVt2BttPHUYxe5si1ck8sLtitkJGUhDSnWa2NhcsFLb8xJKVxiFvNzE9",
  "key19": "35pVkwbra5ADvJzMLoCPmUwxLpU22zMmpgLtsvk4FHhJfrqY34AQR2oomrHtmaM38QdYWMRFAPJFCf7mdz5i9UGG",
  "key20": "2akkPcoSxpnUmgH5GtwtTgf5Dvbgu7gcEgZe6uH8bCebAJYKx8pkXyvioMyjJJfJBA7kqxKvtfh8daHHtTNaWpn6",
  "key21": "4QkJJ8ZezEkcJg4k3purvNPfoCMfviqHamKqSK1W6SjuZTS3DGbu2HEqojZQY953xdBFM1RKZfo8qCNVYJkdUN5p",
  "key22": "3fMpMEhVUEZ8oezVSZami4Vh7CEwAw15QFDfsYpo5oiMAryLpZ1Bwbb1M9JrB4u9zNLMerdKK7cpBdCndftR6Qss",
  "key23": "5YuFz7pAYFdtzHPsMV7hD4hRufyAMfNX3LBRST5jYt5d7p2jNGQFUxdzTnrJpYy6qNFkSHcbXNBJpZiZVPdnCgNc",
  "key24": "3eeKUDbY7XPy6ytV6eQNZqUQvz5JZKQNQF2b63J6cUkjngwP5uDqfjBhFLG5yBHCbjUnuVnvNQSQoaXNBhFMtTxn"
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
