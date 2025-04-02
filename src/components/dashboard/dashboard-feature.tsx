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
    "4vZRgmgRDrgo7qeopYCJ7esoQu2pdFsr3Bgkn3LmEX1DA5xf3Q1199AhRgSazBWJiS4b3pNqYH2Tf3qJ6hvdXnqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Awhy84cmPXHnSSYKQ6XNjnBhH5udnVS7N2C8LWskFb34mHeiKWE9mGEHCGuqwrZ5mo2RK8LLVDe4bZuw1goR2h4",
  "key1": "4aReTSvpY6SrQ4jevb1RD68g3buyEm9fyLJKL31FEWsJHabFF8TRp6FEobDQAXo6CNrWqcaWb8JuRjgzGju2WqwC",
  "key2": "5JSM9EUVVVT3A1gifTP5Jy9VDwhQjucxogCFG7CkU276nnNm3LTmx2MkomgtrQCrpPXJWThCvMfn5GHsGiZWVbWX",
  "key3": "3LphcCZAVBGss5eNn3mgQcEvkT6SFPyJqBk7CXAVaudBpEgsQR5kYSBHoiXeRDZsevf9wK2peyUDykAMJ7T7tf6y",
  "key4": "4LpATcfVckxNiry9Wa8yR6XvtPpBifvvRrzfuL4MtR3GShCMqhZqoQKXV4wtQe4ePYM8gyzeGQPL9pgjHCrw2byg",
  "key5": "xrNV4fGwDTPzsXEWi6pLA7rNdGAFPQSpEi3KKqRaPdcPwe69GWxonF9p29WYhF27Dr8QCMuUxKi3VJ8AUWZvaZa",
  "key6": "4ZMJ3vFM67YyHx4SedNRERu8szpv6SmN8WoSphXNBTSf5vKHWMGy8rueNAHqEbi9oCQuNd2eEfvDhHZyWgYgtHsZ",
  "key7": "2Xf2hT4w2GjfvXHbgVdHPS3CVRYwhsoudutdN7QyTdF4rLVve4Ko75kNy53CbyHW8n6Rzd4W4iv874xA57UFz5BL",
  "key8": "Je1udkJ8c6yFNvxvZRYdar9Fn1cCN23kkdPKLPVvtvRMn6Uzvn4vPf22TTF31fSqLVjTzEMT4ep8MRQaRLrkU2k",
  "key9": "USXF8bNaxAP2EzW6ZxZEKEn8H8x2z19r1hesMMfM49o1aTqkQ2NiAPgSyJJS6Xcsv1vVqo35C5SUjaZRCrDNwtA",
  "key10": "65FUKBGC3XFQyVBcd7SNELLijph37otkGXwBVKLDy12erQsLHN3nm9w7xWbArxESmi2tr2Yk2kyn5jNKzcLpeifM",
  "key11": "2VxAWuZ9H8sm1E4sEC4gx51aJG79YBaHKNdWtC92ghPdQ3AqEFNmwmZtvSFFyebbKBgpwhqUyvCUngNLo7JAsTdT",
  "key12": "122pq2XA1W6nzhLu3BJp6eoK2HDDfHm2ZQtnkBSnagcxzB953KVvFm6upcy9cQ4GF3612NVQVvQueu7HzuBgS33U",
  "key13": "643mDje1rv1Ngq44PdVmosxsQ2hsmP92hcUa7T46R3MosNWWo8ijc6nCnMqjMc99D8GXxnVk31rTx4QuaD5PqT3z",
  "key14": "3312edKacu3xwSG4WJbGNdewLWmAzHXy9sp7iHE6DGiCviC4FTB6PF5N4En2XvgzrHVPXAVVgqYP5iQQ4UfPjCun",
  "key15": "5fymPJWvUagCRfweb4Q3it5b6UBostGsckZnZb1KeKJe12oEM7PxWn1M3ZzVs6RCsSZB6cyouNtJBJHyMwySSjp3",
  "key16": "5PYH1qL69z4B25dnKvRkSLRUnPMhCFQBqm5VQ4byi8dx3j8gmXrJ1GoTei6n6SoX3UiMpYH7eJpGCaXTvhURDzDP",
  "key17": "5yhgyRJv1uHKdghxuagTAKt5BEnwPXu7bNGT7kE7rzPTQbfcSTspW1B3whiLyZ2ibz4rHc8mD8baGCNYfzvuZrb5",
  "key18": "5AqMYiXzMjyGUxYGNig3ZBUxhgiNjtiHE7sZzyTAjcBzjApYGVDQTSifup9xuBcvopQwgLYHWNj2pAcNUpZzLK4v",
  "key19": "vfMjWUHBBNX7n8MHoUYQibVXCy1jVg2L9xh3Zo769h2JkzwHE6pr85yAAicqZSmPUReX7qBek6nbwPjHfFhKh1h",
  "key20": "3ZLkaBYWpcVEiABLzaRTqJbuRfzdmr9QCaE8PuzTgVuVdEuodKuugbFR5rKMxDtFbm1GUctYCLP1MxqbdAY1SFrC",
  "key21": "4pdfDqxQZ59MJ7GgNeBPhhws6Qd2PKH3KKTgYrShaC3w3MYb7jBwe9ZAWcjQE4kZQNZVvhF4kXtsyW3RAttpUS9U",
  "key22": "4XTXaZR2AXqaeq2SSm1Gt8vZbjwEgeqfBfTkSs424gQCzSUESFkDdwBnvP26aX9uWnPJ7iVGVMwCZa4Wm7BfENHC",
  "key23": "4Ds7gifro9rU4H8oWKvqbDnovTYh2otFNEbNrTiB4Vhz4Ju4gBAwt6gUsyimKW9p1p89ryaYfUaFR3nizB4iA8Gi",
  "key24": "eMMWKsHx2vyUi2NEz1Kit2kMuLzhBn1qiU28PB45U5mihGZLvPaCm8NDSPEak4ceAQRu8SVKSHU6kj8hY8YtGg7",
  "key25": "5TfUoAzMZh3YsQuJRxLAXGbTWccfqxEjjnSjduBovdX8PJKKS8K5MbskZeKoqtbyQ6zvSZutJgEEzQdif6kH1CDe",
  "key26": "3teqrUvNAW3Mj7UMYV4Xza5j3S5LLVResGYFbZTvEG6LC6pX1syBb52QjRBxRQY7VNyExYHYV3GTaBvJyo5BkpnB",
  "key27": "5TsNYr32AKpigZhc5zPnNDhj3Lc8eHpCc35LqnNmPmV11aVtkRFjpNY1rPnCficDqmwUyirfgwcZgQL4gQEjVSVa"
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
