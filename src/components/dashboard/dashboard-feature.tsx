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
    "5q3SVA12E5FCt49WuCm5FKGiBgeEVsRL2thfSZU6D6Gyn1GdrT5KqPmhY5GzUuAVCJvu7dQWzZNrZD1qGwzBjJoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pi1Z8NqHF9Fv7WJNk5NQBFnUpQvbZPUZshw3QRpS1CDqHeGtzEYmWqraiDhcSEyg9p7KSp3PaNFncsQtvB5vYE8",
  "key1": "5ofjoj8heYRprySiy6uU6gPo3oWjo4j9zKJAnAhVHYZdxiexx8TDyhcFaA4qoXk9RtpFY1gAF7rFuYmMBgW9VWiJ",
  "key2": "2n8PFnJC8pAHy6LMcMZquoJBdjz6ALiEFXEmRYNL3ik29vUqXkh5VRtzSbsyZAw9BTcNX2WQ51eJYQbsZ8AQfqFY",
  "key3": "2qAQsemknmkpCSggspVsSiyMaCv6jEWdHAiv8Z3pFmNxg7eLVQ9AEXcgdXLAa9hDTKetAUQuvHXxCvkoHE6ZLuD5",
  "key4": "3HyUYfdUH8yibJnBGHN3KXqD7Jh9UzV8oWqSoPH5vjb1B5SkczDi7Lhv3zKbCPJLxuP9GPP3ENjPvESFFG44p1Rs",
  "key5": "33TaWCahkdmatDGDGSVrrGJhFvv8PwpYihiRorZLW4stT49pA6ufPjiMqqCU4yRAmYkqnyBy1VH72RJXNXdQuEPd",
  "key6": "3pftQ56uq13pwL6x6ZDZdYvoiusr6KwUoNF2MUQutboVpVhxvE6ZbifDAuYdRJon5sA45jsC7mb3V8hg1nUawv5w",
  "key7": "5z9sndAMrZjigs3MQJMGkNUpWznh5CZaW4YCV3No5GawpSVqBsVuNzvnDosDMc1u6TWC4rUzpjggzutGHRceBosT",
  "key8": "61yCSxBLjzGGSg8pbqJdbRk6miLgy3S5KXDe92XCfVLVFhcHqsBG9aH4c6TNSw7nai6reTHoeDejDSBfbKzyJ7sZ",
  "key9": "3YDzr1Ca3ZYuaqMuJ5KWzr89fjLGha8e31i9NvYKMenPpmkF3dj57QMX3RC1fa1eLyLxNXQAE91vEjmyj5YqfVYS",
  "key10": "2j86sgVpBGeMGmy7w4FKFXzCb2YHnCuB8CxtjaQV33NyJCUnDS9BNV3mwYdEi4YiyvPdzQkEptQnvM7fvu4vL8ua",
  "key11": "58PeRnBH65QTCyLnTFNqVxbAV3tDrQmBdDsFvfCKCM9gJEon3nerxkudE6iSGtsJ7r2PpaCugJ5AzsBmndQ1dXmS",
  "key12": "3yxXLU3SNYWjerv5Bjy7vaYk48WRY4vWM5nR4k3fCcqTfy6bCg59ogPifo693MPk9HdiwNP7REsDkuh9GFskEqC4",
  "key13": "27xGDTgVBdaw31zZXCTgMPkEahu32FDtJJpqTCvjRyVJYjtMdQEwBzzexiTEZJATcftBMEjQDJneS1DgbbGWdzyc",
  "key14": "2Ym5YZ7851xF79qVCDCESwB5So2KyCR8ijjuwXbYqtaNV7cHMjzxmQqNNZBf2yLHyXLBkTAnJDZixL9uyrqAQ71d",
  "key15": "592ZYbeR33E4CTrggeXzxEXah4tYdVp7EV7qYrFjLPqweZJcLPxJw3uJBUjM44hgwaLM8B3Bsiu52agfSoLEwHth",
  "key16": "2FNoVT59hCwz1KKsNYQiTHi3qiYLRJvpjjAkXQzjzr2TgSMt3VokR1ruD76jEnoQygyzwWFbT7D3HuqWDPoDQWZU",
  "key17": "3qvRkUyDzCisxmt9VKaPwxKRvH7ntjVWEznLWiL9xW7HregsiHRZs9djvoXfstFD7kkUAMxRwcoDtjjLsVTLNAx9",
  "key18": "2g6HterEyyDMxt1VYd8q26b9XwrNhi2o59i2g6tSN7VXaKGhKgM3Dw1rVMTudDN97oaKmTUQWe2EUhadb4jHHnMj",
  "key19": "niWMcRRdVYdcnjn7tavYU59cwT3pRJBDFPpvfe6KmxM8RvjYpf3Robak8AtwoxFboc7MyVmb3WH8Yyn1FiSki9C",
  "key20": "TDucum2ot2P5V5xLBefAAA7uf2bNsJ1WAvUjQyEnKx1bBWhbgko449uJnTV939NPNqMV7EiQ4w4eYsv7CJDTNa7",
  "key21": "2xhC8ko2Sw1bxTQu55tZqEtRC3DXqNriGaC9Ry3G7MMexSwuWhnh1FDRu8SWkhpBQ93ehRsHsgdqGsExoVQ3xBE",
  "key22": "e9ASPtz5oBLktfp5QtrGpgAx9g9nBKH7S9vJ8tgaJSGk5r5PJh8gjCvwoCpJC2QCFFF3iNJRmKhLQxb2mVWYo5x",
  "key23": "j4xNokdeiMwrkSfozhgxFJnPboThyxGYnkqhubynbVwvmZ11FfZeQGFPCQ1DMFxwC8GZWZLLVQbSs9sdwtBfSmG",
  "key24": "4x3YhaKmfnALp5gXQJame3V1ouQkBSVPVr8N76YLqzDmoXYc9EfsFu66c2ebwvG61TYLcfFozVN4TPJB6btJMcGW"
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
