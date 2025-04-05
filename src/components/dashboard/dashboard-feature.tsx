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
    "5Pn66zSK6ntFFzkAqDq9KGMS6KveaBuvCf2c2bSSbvRZhphiHNx6yyZSws2qSS3MFWyx8fk8ycURFEXQiMPLP2K6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JyEUnqbuuWgzvQskRe6nE9buPtvCMRMMxVq781q3u1KVsKKUYucPw3dtDN7uAC5yQaC9o71gE3X14r6pdduQxoo",
  "key1": "5PhC7ZzxDh629RoUrW2DDcFV9nekTHBmaTqSwLbxhBKPrLKgHpxZ56brCi8bzxSA87iDMPEHNYvmbJ8Uzs6R1K4U",
  "key2": "4JDZTRLmNnHsM29tnyQLBHMna5UxSLr8EJqB4zJrQFfW7p6FjsUKhYthUf3tCeTq4dUJTD5MhsXhLMrThtCdzeAd",
  "key3": "m9JLZ9P6cidxMQUK5tWr8tWHXhDvyYcPThEjb9ykhUzJfVRLrn61W82vucQxJYaw6zzs1ENKhSTqvZcYZHHusDe",
  "key4": "MrjhsGsy9xRMpx1a99AajFBgAUSngZfCkaaGfjLJ9uEzyFrjdGfmoXNybKzYeuXTC9KWu2pYxfatYwSKgvDDGv3",
  "key5": "5Gicuoyu37msCt3Nk5vj48mKEVPvy1AYqV59GLKfGokGX3g21yxd3Rn8uBtedvjhDuRszV34MxPSmJJGPLQ3Bxh8",
  "key6": "2rQkzVBgG6xxrR69fZHefrRfVcPxicdnuYoUsep3xZaSB4q8nEtJHT3PLy71kBZJBLgevrpESjgv9Y62izU5Hi67",
  "key7": "1cPynKVmpHmAx7gUtwaR3SBFQY59SEs3CoBqhKTg7zdiM2ssYfzjeB7zYhB46pV3R6aLQot9x2ceiAffpHdzSBR",
  "key8": "4UgwyoippJXXAUsDj6di3w7UwiWGSktNDdS5hQJxe8dyLR6YpwVaE7UTTPNCoMu69to6ZVCLUy87wteenhqwG4eb",
  "key9": "29xbVqx7oyvJTLdnzBNANGugo182Hy5dpBS6H56fp2ha9LadrYZsUMGMofv6CmZaLS5NCb4dZmUoBP7jrH9hQ1Cf",
  "key10": "sVurcqARujwiUXPqsbxNv2Ddgc7JZajYXCs6autjYgA2U1FU4mJxJNbsznxQ9cR2zRnpYYMF2YF1z3zjqRdenAA",
  "key11": "Bme7jUqou7LxnT8VfTjkEtfbvMTMAg2Hzp3BU7ahXufkhpULM7wxugZf2kdmS5yVz794j3ycG89LKq4H2npBDps",
  "key12": "3U44QqMDgQhLjcrhCpLA6j2H9gzbrVzHTRbVSF2afVp2fAak7bKXW5Du78HdKxF52AdaCBqqLpfQs9vpxjoqx9pA",
  "key13": "5jcDsMVspgmsSmjw98tspQnuxYJFdV8F7inuDGhP6FCtFDd6X7af5NpfAb7Q1wyr4RSkoDD9tbTDiHRFg5CMD1LJ",
  "key14": "5WZUBoHJZmP6A9xs7VLnG3Ckht9dYcTAL7SDnqNq3Kw4tsKcBig21JZmo8a4MjoRxgzKroLFWfc8tWsEQ1Y59Km7",
  "key15": "S7pqYooNbobVHFUv9sggKkEmBEEJnoqqLPN4W7ZQtMBB1TnQKV4zLgjGsUPrcD6FYQpkLcNMR5Aag6G7uY1mfyF",
  "key16": "4o2P8QNudvHwAdv9EYWHjcgyVYKkJMR1Mk6ti8oBL76XY9TxTno1tWgTLQ8tcbPcAweux5jWCYoQS7RRckk45koq",
  "key17": "21MupuXVAyKhxznkJR82rFqFNguega3K9T62psXc5KUBfR1z69GAbhKwrrHsF5x2dHB4jc4GRksTNf2JzGEuJ9XU",
  "key18": "4goCv9govapsPYTsDYndd8mskRVwQZbaFjsMD7NzE86z5Kzk959d4bMXRVQph2j8XdFXPqs2bB8BA62ZUPc84TYf",
  "key19": "23xbDYvyWKacGnrXQBHHDjcqwTA8ZXc9ttBGuVFSN5Wt1uKTdMAnYGJNE8kmUhkCaqzF3NsRvKZMUMd1W99THSgT",
  "key20": "N2i8GfHBhwk3jp77bFxz5S3JRMsnFhStVeG1aGDMwAw1AdzCruDUSpgsCXnWQ5dCiYBZP2KHFzR4a2cWzDuSV9H",
  "key21": "3SZ72GYvjGDbCzYtH2u89Sb96H2Zw53NmfzGf9nZ9U4tKgG35sHFeATrDKqmQ8LZgDM4aUV352rMbwNCWdr8dY79",
  "key22": "65xJpJyNi6Eon7w28zjXYR2HQAQVZpyNpHztaobzbT9Ahgbky5L1YbE1a8uQCeGNxKif4dB8eGKef1QFbHagBafG",
  "key23": "4bDHKH655kSBXUtSFsVWkdg85KMkfm4sy1z87S9K5VTwxXyEDHRa8yKmPP5PCCK1UyBMiDhfAGjZ7GCbeyH6ths4",
  "key24": "2CXaA5fUL8PgedJPSC9PAxhT36w7roohqQnsV4WdEkLEWWgFaZeuHZW6GbDFjLki4j3gJFbWtKxEUHK59pedMhnz",
  "key25": "3TXKd34t69zrLNRDikVDuPPS9aH5jUwY7MqbKLsvjZ9NnmaqDEgUxM6Kvox8o7PLUn46XuZNMx51WJsow5u4Wq31",
  "key26": "5s6HBR44cikSt5YFEJSfg6aXhnDq7EyCqbGnj8rjQQxoet8BuYpLDyjgkzNdzUrG7zvkLGVUTe1md1Zw5jSaMw9z",
  "key27": "4yFZCnmTrjg9ebujq3BMAepiPmjRoxKCzSAk8oek1roJSazDMWumsneJ2r9qjuAzMhvNBHrkfpSGyrAMomreHm1Q",
  "key28": "2KUrhj7VXR9NA9sXtD14TXjhNwjoZn8RjEMMcao1eXCC3QyGRUfTuUDPvTzv4FUEdhL8zq298ASujsoeDxdZ3obh"
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
