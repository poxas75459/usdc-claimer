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
    "2zgenaNAkkpq6g7hfySKBNkYihEM6ZGi1JmsGvDrp2RNKtFhBdcip8Eau6EC69NS1dZeQuFpcDoyyFma6DfgqveR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3xfHuWBMvyZJ3hYhp21774U82TjvtK5LMLabtoXW55sZ597EBjE9QERhLU6DB9XdmX9YdDvHYwMFjAPbH4mC43",
  "key1": "2EG8RrKDP9N8GWL5HDiD99DmEPSVcGwoUJrrG1EzU1E1gzgCg6oyJyihjZAecLk85pm7RNN5eR21hHYDqCM3mezT",
  "key2": "2528Wg5HT9NYrbeuRfS9oKMqWjBtSzx2FvLJ23zr1QBdzCdFrTL66Yz8cKKCdjQRWMyjwQCN2NpucvPaQRbsBf6j",
  "key3": "5AbUkYAgiyBmKzBUee7uxB6uTjzkfxJJL5HpUuCEjMomo7yTbmxK6kQwbBHF3LRneSUhKaQjMdwwWk8WzpjXHBJK",
  "key4": "qvcmHXgPb8KEKSuaTjvBfnXyxUwB7fLNkP4LdBLumzpFHVTYXCmfApydKfmoowPNxNr1C4FJ4bLAkL3GTPCSmJJ",
  "key5": "jfHFhBXYYY2pjGXL2ZGTeZ24pBqjU6ggUU8HV58tDHxjCmUjj53Gv6FcuTog2VZ4cpX93pQZ3FqU5iHmtnd2nvn",
  "key6": "4awBXNz3nXBVruBYEs5jgw553L1Z8dGPeJwa1Q6CtdE3CaFRLKucn8GpApFQvzUKWnyCsWy2ZzxMpJR6etcPGvvG",
  "key7": "5xt1k8DnMNRZVpsc7Mx2EGmDLmZgBzWm1upwL3E3azdjd9qqG1fuRkEEU6n8z2A5uVfY9QoB5YhfbGkDMn8ZWP7C",
  "key8": "5u72xxBxL3dTYdy9CHZSLMLxhg4vGuzk61pXbrzDMsyWUcaAaGuqCoxxNPRAMhpVATWFYkTfWem6PTSYChRSdxwE",
  "key9": "2HDHTiPyguvxWq6NLuDK876VMi4tqcG5XG2XHf5zfbZit8gGwpPaj5rTaqhWv8h6FZJU4L1ovUg9QjTSafHmmu5d",
  "key10": "46niA4T82wC9UWtPTBMbYCvwBr6uzS36SKzLtanYUUcLBYQsUfgMerY9wQ9mCYd36gaDWcvzgVG63idpPXSxe3mG",
  "key11": "2YvjH4mVYva2h8vkHZ8R7aMLF5tgDi7Ka9hg62dEK9SvPLgd2GyR7tfDUp8dSdJNGKD6c9fJV1AW8Qtcogfb59i5",
  "key12": "T6rLAeyEjLkqiSYiJPyUw5XsmMfSprik2RFJ7PtUQ9RSToAuwWDWZorjZXpojbHxZgrVpvKyuC1ThTY4bGRVgvb",
  "key13": "3mpcjEB7u1fPAMHrkSCduFA1TLDNPzTkaQq6Btd3h3zGLGP7QDLc2uTHcqEgNq5Z68GcnNS9gYK5gh3rxyhQH8yv",
  "key14": "YRVBM8fqg5wHWmFAZw85BaimpL7fbWbPiR4vKhHhHLRt72HY7deXqU8EjXv66CGUvHK9YUYJVQFZdbUo3STZsGk",
  "key15": "2MC7mBzaSa1dJZNMmArBD4XEkcszFTsEDPe2z3uV32bBm1hchYsoRrMUkpGD6khz9caM7sf6MBW21TJTCD4UhUCa",
  "key16": "rj2e63gqTCcBV6PTotAG7b8ngHg8UqJBrqxCn34m4SNb8SaBQPVNjzVeNDkrGDRsPFAWea1DbzXRTqwPxhGp83c",
  "key17": "631JGjM6w1uK3wDVR9Zzztujs35g2szY8KiDeTZrr72BVDTGmvnvLo5RUvJ931ps3kLmBGrheQjMoKkBpYsgxvsc",
  "key18": "2tyQEkdvmK3Q2kfTkVB2ytThBq7FqENXgpNRHyEaA2vab7U2V9YTx6iaaKvwrFU9ypy8QBjcenDeR4ua4R9CLmnc",
  "key19": "Gw7d3ENpq4u5Ts33grHP8oBVj9Z864LDSdHk2dtB26MurVuKTXoQukXB4ZrHuqE259vz9YWA1adGgH8ACbBVLWE",
  "key20": "geahbYPYq9Jq7UnLmLM5b4d7xvFsHVc54f3isTKF69MZZgMVcsPeStnKRhXQYQVyc1XkDSdxFH9CXe2EMmktvMQ",
  "key21": "5TXwzUvvwvt4a2MHPXnshurCDEVFHJh1RFj1R5eTmJK8R2MXQQehZV2eFoQDGuBntqSzL6SR2ZSoqnqEpUj8PQY1",
  "key22": "36EdFHdHQqDpYVZvFByRudc8zsZzDkeaoVLUHjGdFkGgSgtas6VSyfcrgXKniNSNdXvX4oVf1zYLknWasepuVCUF",
  "key23": "5F6j6ZRYAPmfBwiWbBQuk1GJZBLSeD8wEFm6pBEAn9VeekFf8snHckCfUqsHEVKhp6JZyCw7sSSVZ7nDfyz7ERTK",
  "key24": "26HKjxPT72THySfcv4wKRKXdmifLTjRmSuuCwcz4hwxghABBgCfXM6anfR4zXfgqmJUJonwjtXrCLq1xsUQptgpc",
  "key25": "3H6o5eyUTR6QqBvUqnZD375qxG3Wq9gFGszdGef5UGiiY8PERCr3vuFZSAFHNpqGv88K8g5kzUaSVzsaSwhTaRUn",
  "key26": "FJurdcvTnmx2xBArd2Jx2m5NXANgTMro4Wzoxe2TYJhsuBXQExvaziYhP8bf8ny4nXtgd6VLznfB3cSTH9rwYte",
  "key27": "5p1eJ1vvBG6wt2135Pb2KEPL9Qc51YJHyGokVUF3oDmixQphS5LQ7t38h79DF7qzkBdLmBr4w7a8bScqVBXi4CHK",
  "key28": "2CpDxB9uZbp2L2d3F4aXZLZ1Fr7UNwZ9zAokQJYybosNB47cDhFWmGFqnCVhSCXYEyTEZYw4DgvcXrBcYXySpDN",
  "key29": "BNkcVoeaQrUqpo1EqkmmARyCZNBDrGS9cssfsBZfjgHPyt5dEWJmdCRnLGzFAxvUohQ9DBeYyqY3HCMUoy7dyZF",
  "key30": "4kRAXj5WHZACP4bKA8GvTZKu9bV8qwegbtsRX2x5Mnb6dGeeBokBtHMRwG1Ywjk57PgU4HYGLHv5YShRWGjVcoiP",
  "key31": "5YMLn8ba2jM9KH8hyAzcMRg4SzbAqXL8BnqYsy55b3BP8aTjpMpkRo6DkosbKWTqWQ4zfrpPazSAo5H8nitjj8er",
  "key32": "5m5m4UCJBTFkfUcxVgqTnwWXf22Apc1Q2DjHJuw7du3uiG6QurzvPHURr71MkqgECE79BBpMJwLuyK5MxjSsscNW",
  "key33": "53SAJrQ8Y8x7vW9UAotLj2c8Km7N3sMKcmsdqGDoL3hNEGLsvmHS3yd53EqupmV555qMT168FML6BgDFYQ5d6RDE",
  "key34": "26LN1gZX1wCHoF3PCVxQQJAde5rPQqQ1zuukhzfWn1zhNx7vXviZfMASB5LPZSGXxMX2wPH12GZ18xFBRsUH3cWv",
  "key35": "4Ad1mWhyrLMhtdEhqnEgxdwx2YLpUTDA3mfD5ey2BxD8QjCyktf43AXz5ReCoJqjy651KD715opuMrcLkM74hrzn",
  "key36": "2U2RPsex78CExDn4vywWLpDqkcNis5AH7UeNSwfcauELLQnjFWxBXBELNuYDDHpc1C9b3ZSCag8ZRyzXoeJF4Szx"
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
