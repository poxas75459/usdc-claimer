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
    "Lonw9KTzRJ4LeNWHZNQV5gtAa8Pb2Say4hzLn7FPwZALTtTejedF7s6fWbKoWE88CeLoh7Hef3P27SF8PnuYBx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q4hutC15D3eLXaJ2kmVgNF5ChyvcLfmCNuYojNisb1WbrPgt1sULtVMTsT7uJyrngppcssVy2P8jovPWBW3JGcf",
  "key1": "4xJKeLxa3sk12uNSf2XTeCMErWntnTt64ssZmjt1QfkusDgXeJm21FNFgKMcfoFYGdb46NTADcLcbHGyuawAdmNs",
  "key2": "3m5u4TGY29vnWMfMWbC7AYKtUbj2oiqi9Psh9EBeQyZ8i7ix2fAve5iRZHHviAP9KS3F4ukQyM6xxCE1JJvRZ9F3",
  "key3": "3DTkAt3iyCW61MoTEJ99eH1TuQJ1QTyTLVUBf7Qqkwbfm8bJn7KTdfk78Le81RD3kcKgZPPQwgWQvvsCifzjHZSV",
  "key4": "58ugLkZfrgAokvW96fT6Nt2a1WcEkJMdrjLyfw6s8krFziwiSCGjEyFgDp1DpSBwJtxa6nAyFEZvNDCGLqcJBowo",
  "key5": "2ajigVaPWs8rtHmFfcMt6E12CtR3UbGRKmSgHxjZVax4g9XandsZCN458tbwaxqs1pjy2ruJ4W9Eny2nXvDXtJV4",
  "key6": "qfcJUQVnFGXyT2Bw8VbB26Sqd8vinAD6b7W4finJoWPRxeeT51bzyuwUZQdzv4bqZCiQ1V81czNhi9SD3AytiDp",
  "key7": "5XJC94dxdiANcxjh5JQbPBZQMASfoxjiQ5bn3UWmzHZWQyHXydGkn75PJrgkkudaVrNbd7mjpZCqz4jT8QyooWgd",
  "key8": "3LxPDfo4Fq9pZViE1uoLXgoYWfvUhJLzCxH485wyaRP3JF93trAvSzZB47wjih8NjnnWr2AiLmFQxKHoa2XKSAoq",
  "key9": "34zH3psFwBEmNRK6azhvf9viLgPiiweJVTkKx4t99421kzxDhNMNM2ySXznGM8u4yJxdnKUizLNM63aGh6MxR9yo",
  "key10": "53HMqSquYAriig3DymZHBD1cbvWevQbz5jqar9nUQrfBs6AxfGauee6yWkx1iVYmCu5Xp4Ufxm7UqMhW78p1QTea",
  "key11": "5DoSFJB765ytj8ogyKHkmLdtDWnuDL8QiUXT73AaUu9p7uWjhGkd13gaZa2kJiJtVsFL1vaFLYab9jwKAiaTEuee",
  "key12": "2ib8agtoiGbBGpaNuLnb81Fxtj4oCvXY8cWKCKB5sVdihbuGnir4GYN5exndnAgzNjDkdzF7nvLVi6xzZPSkdibA",
  "key13": "4a7FQvtXNGsMvy7s7XTy2Xnq7VAjmwpXmo7Sbdr3L3RiRuDj8MLsBVHTgJeq9L9w5rLbH8NmYehu56xHnjd7PmVs",
  "key14": "3jghwjyMtxcAdBzFyYACR34bXomP4uVXESrMsboqXt1jTbwYJjy4yYzmdZZrWE958MTxDpeXhuwrF4hMdPwwfUtw",
  "key15": "63NaomvFupv7Byqmge4VJStuS2XEbbtQMMw1Jjqr34Hhwev2TwWJuCR4LdyghbYH2ctaTDVuxgpNNRrRLtzGuGPS",
  "key16": "EbAH6xXPayi7kZM6bjTrUz3X7iDzHGV4b8zAdBbVsHRLeBN1xhubWcZL1VnapJWTJDssMNH7h68KPgZzppghayD",
  "key17": "312XvcqfgBKexsbv4Rj5s6hLko4jnvsBcYLK3baLU2KL1WMpNDAn7mkuabNTjX7VFMw7YWkZs4NDT5pQAHvGq7P",
  "key18": "3t47XYP6Za5yP8UrzqpxZg6JqA2nif762JkTaRkwq49L9mNz6zbaXtoFfycN1CaRPnsDZg6VAAL62temFT6RT2Ru",
  "key19": "62Eqq9dYZBiZijqU7LNbB7eCx2k87soAGbEgopEZMsu4xxPqMs9HuLhCAMxSME3tyYgoAcuL9MsiLDew5AawQumV",
  "key20": "23vVcCtYJ9oiqBqesRrVRkNqB131ZCFeZJbBFpJCB9LDKyREX9ct1P1a9E9qhRLj2FquU3nXr49XR7jWh84yRkQD",
  "key21": "4uTsfcKN9A3fpskrt4R7pJVheT26Y6rQZZ3FCVVZZaUPqW3pHP88wkuvixiQNmnK8CZzJ1G8RxQfzxbpyMAv4xEC",
  "key22": "9HXqLUs4a1RNuBRfABTFQybLHWskwZ25X15fPyJDCXhkMuz1Yira2vjgAy3sFBQoh72QPTD9AVLQZYrtFmkwzHS",
  "key23": "5uG45mkHYpaPVxi9Zj2HLwWfqsitpKYBF4L6cM3fEmYFC29beQSo1fXnWJeiX7WWG7WR4rZiBEwwoTstDQ86MMUe",
  "key24": "VR1CV4fXRMAgLfGD7FTiPrMv8qw267oH3oU9cpTK8qnhpf5BKXnQCPkuxr7A3FyZvKgJnSFCJEwPkzmcbFA27XR",
  "key25": "3HcnedU26yrjRg4pAnjsGeTnUrPaTHwr29Sjrvft95xiSsLW4aVx3uYuFUDyQ1hEoJoZNkznRLCjxcrrXVoD6mPq",
  "key26": "3xn5u6zqV8AA3RFyiYXCVXPKmQdTCvH9dURCoodvKwGW7ogmtSLjQSEUQkCLsiggrnpFjtfoyBgVhGbDWCzdHRZY"
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
