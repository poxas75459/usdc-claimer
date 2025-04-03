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
    "3Lj1W1f2ZN52p5BLX2o12SsBTUfrjfwAchCvqDY1XshHypW6L8nKhsGQozL4zBr4yz1614rq5KvVyiNYTpTWgLBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g9F2f18xTQFK13mmDFaouFoNFp6guTqu2hRshMV8oD82E5bTUW5QcWy1UvrY7v1Rsj42QsCLHrqB2hYiiuEpddb",
  "key1": "64Sx9zANtQNzhyERqHxMwsFkxpJFPqwfQnbQegChL2BBoLkvcT3iTjtx8bvKUEbDmAQ2U1PXbhb9NmEgLwCPaQWG",
  "key2": "QdpRsutfgS28BM72gKtWaoapVrjt5sQ4VRQZJmHSntyNAXjp2kSMKDMuD8XrxRZuZPSuVE9mh6vPY3BZLd1u9Zq",
  "key3": "2s38jSHKeJaLoi3WgQQMMko3i4KkpNx9q8MhMbxJbNq8cEih17QkCnjXLGwQXhxYmi9usC92h3G2CHcH3qDHXZue",
  "key4": "9urRnvMicq9xpL4WnUGAg4cznTxxbyPrMWVUFq7LDzKSyscRzgFbC6owFMNFE1MA8U2Zxs9TPkJxACHNp4qHYaZ",
  "key5": "4RMNWzzhtCLCxA8eb8U1GEVY8PepjdHTYYMsSqoa3HoYKRHwEw2fJUp8Lp77z1zSFZGhEiM7htSbkK8YV5Ssj3kE",
  "key6": "3ucCC6G3xZgWquqci2FPw3dFEAqDuHrEf7Ct7abYTK2JvR8efLS3XApfT1P4wKtHF6FQSgBnsZ6g3yZS1WBcJpKR",
  "key7": "q1LF9zWPEappgUKBpYu2yf3nDUzvYh4sqfqjtbVGbmDB7n6iN1TdXtbZCbx5m28oNSd1xqVrcxVa4Ba88Eo1M1E",
  "key8": "eSUgcq7xzTm9zJATDqsxZQnDvoGHQ8thAibdVnXyu9oxAp2o1mGy1MXL7DMic1xmDxAq9ysALA6iGX6aCbRA7Q7",
  "key9": "57Bv8We4dgw6B5R9bTHnRChD9HNg7AV3dhjgMosK1qG8ogKpAt7Pd8KiUBLXsWJcaWTpeaLmEpSR273FhYCsi2Qc",
  "key10": "2MYThCVkfbkKYSZxixEa6sZxqXV86ie3FYDP43PVgj5ukkPNYYu8dtWeSRWLUan1J2v7CXLCzgJf4Mna99dLKU8b",
  "key11": "Un36ez61nDGwUfPfU8XKWLaJ6M3MFYgSpCu75sDc5yiAb3PLZHbkKAKEkuZjx7q8e72NRZSDPQDW5qku3kqyc6u",
  "key12": "3rSFosQ5cVvZqa9FPXiWNkiXPHd1y6EJVxN9R5CKHB3c1oVF2DXa3cgoz2EdsemKdTQFpJhSprtFKd1qeEYsXqJn",
  "key13": "23U7MNUfvzdbUDocefw2jKdA3N6My58KULmuQy981dY1pManJi1Rzm3uAN5kRFfcR6xBqWKcAPNpWAMqAro1Vzqr",
  "key14": "51LSWBFQc6nJEggLW6ZbphFRqqKBNjoPKNnTMEATE1gNh5SwhgSJNv2RAQQha96X9ZYKu6j9U4N7X2SJD1Dnaq22",
  "key15": "1Qxw6m4ApZAMJSKM8Hm5od3vkA1i1yNBWjg2QGtgfpoLX1guvHbqfD3TenJfmHrZJtuSW63eLSYtFm2FjPsWSfx",
  "key16": "2AvQ5g3qbMap8dBfGkf8SmPA2q31n27tQRvp1KLao5AhA3x4vaQYxsHtc9EQPnsAzTyyVPgE7RSupvZMiHL5v5jk",
  "key17": "4zFWdQYG38AXB77zBzHc77F1eqXJx7LBWaQQHPaF6tdQY1VoiWVFbKMDTRoC17XnuKYZPxPPcLA9tAUBvWVVQ1Jv",
  "key18": "6fekfbSqz2yLgPsixTWXoSUedudJJ8r2YTtTqKgmFqjGXfFN9a9QUFFCtPm4tCjHeYH1pWeY85WJ98oh6p5dQZv",
  "key19": "4ytYdsS6TMACD1qf2pubxBQWrDFQ9qhjpgFqpXSfDkcezxoWCofetW62jSf2w9ms8Bn7gwydU5uNfH1baE4sHgfU",
  "key20": "43qMHpbkjCD6DTJUDjrTSgHK8h4peLGoRz9VP9rbWGFmLoANqbXD6FaLSkDhsL878p3DSiLnKv24U2ZpeKFet9tn",
  "key21": "2JZxiVT6cMuRnVmfmYohXboeDb9S5XxQ1sctt6zhWjL5hE8C3MV7DHCt5MkrmigTpTiV5jvjq6kFqe2gTb6GnSsx",
  "key22": "3PiKFyAn3DqWkVsjzqUtJJpZnHkCG3eGDKTX6an1VoJQMS6VzLK24Y6JHiYtFn2fqTukHzfCPrssGhmHeBtZQgjU",
  "key23": "23yYmM5FSuJL9uf39Grhxi4AjrUk2Ko5PP477BvP2B4BnUoWkCYgn8t71Vv177cZwyRqtkjhthYpjTsCseEaYnbg",
  "key24": "3JMYnjfPW7jLqHHQeoZKT6LudkpSxWyWEVwSTpNMGn9fGVNj8rJLj18YJgMKHtVsxmYPhamqx5z2J7AjQvqhEXCx",
  "key25": "4Gk4bjaFNXgu2rQNYfyP6z41e7ca749DghrnhFdiXX1GyubmxiQBSdbvXJaHgjja7MLSVzTMSutJLTTHRbqPQhf",
  "key26": "wrJFxidAek23UnZ1bGq8WnkpM6c6s3JnkMT3ngnPir7zo7grwQdqhd3RwXq9YA34we9MAaweUpLMypCbeWj6aGD",
  "key27": "4MABahhLUFaBpFXVDvUXXs1vbgitvQnLaBZiYcsYBfNo96nF3VqVGEmrUUXB6RHKhuxx6crcQkrnVecwX7JhA9VV",
  "key28": "2pwfD75ozcc6kxvKQ1eQvz7XyxFWd4WFi8kkMZ77Vw5oCJYFaAc6HuJq3US8g9nfxZMsNsuXmsPwtAwy5trAJDra"
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
