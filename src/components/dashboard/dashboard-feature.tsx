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
    "ifX88VQ7S4WHeYGSXYQhMmTDMkb9KE3vHu1idCwkYPZGQgop1Ab3YYsPWzupD9ssfdSCT7he4oMdHvka4993snM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7PEPsDQaJ2hYWiLuiEtfM8QPCq5F4Bhj9EfkWum3ifWNyFxHinM8tUJdg82gH7jQFAth2vgpxUM4T5r14bLS6Ed",
  "key1": "5BWgVzH4g5cXEk7UchG74LXVaUZmexB2iFYzKfLLd7viodMtni4sdrXj36jssNTVHZunLVGvzyHdtGLFqvVkaPmV",
  "key2": "3Xbh7i54Nc7NN9e7pn68ozr9kNYLjnHSJpB7qxznAPcgWg4dMPsw5P89oBBLXQsDM8dN3Xon7wUNXumbPwkr3CWo",
  "key3": "41kyzD7Dxm46VYehVxtiet4VvttBwNHazg9iH2nrLUn5wYWT6evprcKj7nfG6L1kBqoddiMk6yS5zQPsjERHhgVj",
  "key4": "2FRe1FKVBJhuQ7eQS5t5e9mYKog21bkdfMmFmX7Kp7xWSZ7efCmmeUmX6mBhKKKqWc8zEP7LGPiYm5qqxxPgFS4t",
  "key5": "241azpWK82zeBPcF3uuP9YdZciURUqht9kwLwnF1V3vt5CMB6R6J2dNhHgdxZn6vsAGhJFT4B5j2wtRosBAEXRKE",
  "key6": "4QzuYWtLPRntoV4QKtHggqzn5zh36NCSihvzWJtV2c6Nn5WjBC2odANjkuvLNdmdE7aKy4BK5yv5HBVeRUCJpcBi",
  "key7": "5MRLq7o8BTWWsRTv9dnnpDCfMWBVXpEqRosxjc5Kz25XKnikq44YcDrTBrP5AFR9LSXCEVgdCrrrog5R9yjdyUbD",
  "key8": "W9JXEZ4qBV9Fcdt2kWvfn8yW1tMt3k1Cra8xGoAfM1HNzvDypZWXbTXnAjBqCHnJWf9YZacgZhnuMXtmNr2ihjs",
  "key9": "E4pL1r6A3B5KJmvRimjWBCgv9mhiH6G9WRYe4mS4c8tnrqvx3KDjV5gdndUjK7pkHvCjkh6jKWJ36GCNPHXUQSp",
  "key10": "2HMserC8zYw2mcJE6RfUuXZ7m8tzrqvaAj1hkf6FMZzuU7Mc9tVxKGGNqwQ2yiBLtwyXEp28LwgEKCJNHSrygyLT",
  "key11": "3Mk12Q7JbTK3cjU72o6G5TH1s7beVAUHnJtsrDkgjafKM64GcKZeYMWEkyVbTNA9KnEuWzPgrVe6K36ad3axJTZ6",
  "key12": "224RJdza74egXzxvGT6ZphtQFTuVdiUhva2nUDfa8tCitnxi7hELJZdPP6F6VseKx7oN5sxquCPTBRoaaSbyUgsP",
  "key13": "4tFMRMxz24Ckv9AwnbnEjveZLM279rvbEqgDADSDoNgkwTRwdTNur4Ghxz8yf4n1v8suczzyYverAeVgTFhuSExn",
  "key14": "4wAqhsv346fwWuVQMFGrEcmUyE94cRo51YrkWczzxqQJjpQcZ8N3zz2byRh8RTyCmnxjLDPTpZVkCe7yN7bRMrKL",
  "key15": "4MC6cK5L1q2MCFfdkqfu3LgsS9RuJYdec4QvpcvnvMCQMeXeDXU73yMakd1ejeZPRoKkB4JgRj3dgPNkExiqwv22",
  "key16": "43UVh9MQ3SRkXJHkwtehcU9N9EN3JuS8sroZJzhyrePnd3Pzx4tRohGAAeyaHnhodx1qJ6hWT59Ch1qj1JuR2n7n",
  "key17": "3ATcM6q125zRPAXZpWMo44UtqqPYCD8RiqN4qEEzCGRCjRJXZWosAEwLTp8TdhQzveSf5QSk3xSx5ARij4czAoS2",
  "key18": "3FcqXxEmvqgwSkMd2t8StBT5Az4DnZq7nrTJ34wzvc1fSZXQSRWhxAGg1xBaLQth5M4rMKExrs8iwY2o46UCKBBR",
  "key19": "XyU8Y6yKW9LMbtZpjzi8KyFw4XwHgkP9DQYRJ7NAdpWfFgpsv7gXihBAhVBjA6bBfr81CUvCn8EuwL3gF1UAMac",
  "key20": "4Tf7gvdGQND4YFsRdgfZNcUL4RUFRHEYqwgWSDrytD5Fohe6dMyPu2RFZm1ngEreP57ERCTx2G5kd3huF8Y8SBEq",
  "key21": "3JoKZyEAQwBWQMPgsjJEKHTw7JcPmvfFwYvDSHM8SMGfCvzjNiSMQMjLves1JGKPfCNM7EzaXp6YQSaodFHw8Ugk",
  "key22": "5jQJVNi9VX4sPwAGLgg7fjXfJGyyVm2HCZnisWWEewdRPWdDhxrTHEtfganhKjTgCADEp7C3Na2LHQmtPQMxPC3r",
  "key23": "2c1F1oJi9Na5rq4m6fkYKZ7KKvebybL6bMqJP3rtsqvuRkNLR1NPN38GpSMdk3SW9N7Tchiq5shSRpJXR3K1U5SK",
  "key24": "4W8nztCYohXjri4VF5mLvL1ZEKfLGSHF57fXPQkBssTQXPoTbpXME4cxEo3MjSujNSSD9RZQVh4a1PBRchgYEJEG",
  "key25": "44t9t32q4zEFG9Mi3DnBZ1vr3V3ZYE7SeDonEJwkJV2Ygu56KbtzFxB3n21f3ikMF5To7q84wBfffj9fg1hGHads",
  "key26": "5PaUZ921HZxEt6Bk2582tsc83wwRWeRnv7EhA3kG98d4jc7Ga4itpnqC841jwDGiRuj4Gf71Zzn9GxCjouA5JRRU",
  "key27": "5PgeYGnsnb87ddzqk9oRjCz4S2oCV6vQKiyFYZN9e3EcZFce54hemB1fJXTM2bVrjrXp3H9aGKSLW2bocc4d8KqY",
  "key28": "5PNaf1mUjuS51WmRS9N82Y7mTtYUMbWAP6oAcp1mvz26NvAYhNTLt3ukPwTexxM67q3JcQzZopBwNPn8ETDrUijq",
  "key29": "3ZLfREfDxLWJQBLiJgXEbns3ghHdqx9bvwL87S2619Lb6LdL65V4eT8r3TY7CAwiGzfoesfdoWRkV1NABhMfGMe8",
  "key30": "36pWMAgf2DY5qpUWnxdyV8ntL72CmU2cdhzB182QM1XFZDboHBPegQ3Zr4xHRC59Ba795cDaRVZ5pyYqw8uCBBBD",
  "key31": "A689tdJfpopXhTCqB5yAHmMb6j78nZCrZ5TEfnXexCub11YBnthQkLC9Rz3MeLcpaBR8qfGMnXDZJdhjN7jCb2U",
  "key32": "3Z7xwgiCXyoZVAUZRKFqWv3WRhN1rYPpSvrPk332xpfeWLPhNyKmvjwsKWwMZbstRhBR16bgyUpHWpJoF6PU2dSc",
  "key33": "281HEAVHVPTveboU93yNM7eTF8mKgRiZ2FJVoGfNMbNC6T5VqLrEyLReVRE5Czozp3Y1KepCM7RnepaDddWJq1PA",
  "key34": "5rs3Nh1mbfc4yGvGaBNWnBcFbjWKLPotxNVqZbVxdWPAt15XU7ZyKRDqmHqJPJN2ukFUGvp2i8XLPGFCYWVCpfbY",
  "key35": "TJupLp53LqRHLRzkGouduggGHnoB47vQkb6zHoghiJ4A572BA2Dww23E9CspeUc5XmBGyBuivuFqxaES4CPDd8c"
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
