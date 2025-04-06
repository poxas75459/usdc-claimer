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
    "stehbsKAYriMhhw1VAueDUPpKhzTvMBX46UzGUPnoeoBTKzAtD71LWteowSLNvNGQopEK5YbJQvQJqeCeQLHVBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x5mRmo9p6yPbCTRQogaNBg3xemeMLHRzaEQ898o9WABCqGmxt3tHY1ZmYJaG69MhbZExFZi8ag1MGLfp4rGoCkp",
  "key1": "2RsrVEWqSv8douSdybPsWRL62gfJQNiY8CiRRArNs1khewSdWiowoWaz5vRZT4SEdyHqrrR3gP3HDqfUJN2CQrKp",
  "key2": "4vNwwzgJxScmifQqYQWfJdXK8kvS7VZhvNGkjrVgKocGx6p6vNmFUYmJdafuRNCg9DxyEQLdcggM1anBujHPFdtq",
  "key3": "3L29bi1xVdnUCY4r9Yb3NPWDXDqshadXdqPL5nE9ufkfmv2RAjt5csMeqFUCYQ3mbNPHf5FWFDznbUg9m8XK5fnr",
  "key4": "41gZBLVcVUjDZX8kvrAxmM7f6rUZYZwNmnB5h3KzRG3RgdTkWeQ8Vhvtom6h2wR2SaH6S3SgUa7VMoHnmvcVm6uj",
  "key5": "5fc8Eq9NGJzkfMHvh1nEENEnrQktgghMh4Cd5mVdNod4SUL1DRs2g3t8fkwHcSpVSkBDEfc54XTq7VdWiUAPDNwG",
  "key6": "3HwVz6S9LivXN57nMoSdzeY4HNaTQpFs5wQ6qemA2YuVpkgtbc3jVV1bNBGg3RuLvospBccYeh894kNvKhaF7kgm",
  "key7": "4EoGjDZU3ErhuWBrJDogP58n2WKMswMjQ2kTY2BXpxPAtvMPb6nZiVhZNehHRrP8ztY6naLyw85yJu3wQwoUCKug",
  "key8": "4R4rnbPdoZG5SWdFsFnwjav5brzVT4F1xf3cWzFqPfiz9C58KcnzyCTmjJtvAWoyG5XDswkhnRffh8e9FKxfzxiq",
  "key9": "5M5BfMDTB5RLd45FtuZUamxALyzU54Y2bbAMTaDuEgPFs5ViZZQxYp4Rk2oP8Bpk23FGd9RnLoxNLLSQnW3NqkrZ",
  "key10": "5kDKcA458iQ52SfD2VsweY8hUbpNHZ4B7bdmiKD9L4zxDGRxKU4PbThCktT9Wdckj7JqUm3VP9aub9SXdPN9PivT",
  "key11": "W3K1XgosEXVqix6ZCCcW3dfLRAfWnZeeK6KeHXrQmZ2irZWTvvzv2WrhRSLUde65zHeL6R8BJsnSfEaQgaLmqaS",
  "key12": "GrxY9RoXMAQnSF1SWQTPyPX6Ujw1E38qr21KnZ5GavVoXTNha2xe9EqKohawwn2PppS2yUfZUTRyp3rHRZ1yhph",
  "key13": "36gqkG17o9wa1AgT6cqC38t1Qx7XUmBuT5cAHiFiuY2nsgMkCifktC2NNzVd5hDoZLJAYQEXq4kjuf66oMWgmfCE",
  "key14": "2cnmqwF4jX5ZGzrqpuMcCNNvuuFAc3Wfe7kKWnVRfXStBHLdfrdw2JG9txU1uUokKHmR8JFyKKUwBR1MfR1NmgEq",
  "key15": "5z98i8NUbrVYTR6pVhNdaG9Jbfb7UH5AWhjZjQA61KJMzP72C1nSV23RKUwSHjECidxcq1dyfiSWKb69bnAr1tPU",
  "key16": "3bwNj7TxGG1Tfms88zzzMCrRWEjEvQEmF7xLQ7do1fjGhimg6GqKpxeyso2u7zSK5zbb5khTGkfCLmQtazCBw727",
  "key17": "ZuQRC2ACuBEvcveSbkFvp6eFqw8xLanUrtTMJMVNm957WjSMpjhdqT6FwGeSZjgf3mGiUuv1eALd1zLXWwg95mS",
  "key18": "4RkvLhduxfonWphf686F9FXzAFoa9ss2StddgAJCLhYJ3bMWcSJT4zSi6Yqapk7LqZ4p6WrRFa58uWN1MbBVjXMd",
  "key19": "41stY76dyvm86KS8qWVqp9sso2QSyxPTGJpPJaALykSzTj3VVMaw22Pg9gmxx1rRS5mE4GYJ7ZePEC2oea1D8RDN",
  "key20": "2D4YKpD3VGsgBmmMyenKr95VVDTq3M17GMNSb2PQpjPQHaXVF4xZfYy3Q7XftYQnKCJPEzZpFHV4r9C3RkDmho6d",
  "key21": "2QqY8AErPAv6NBj9c9ocJZ3yThG7YzsbZa5wv3MAjYddJBHERb9r6UWkDuWdYz5fiNBQ2Yynep4CsHkmDZr2V3oB",
  "key22": "2AWvQhjksmaViYHagrg6gBvW13fdWYsmrx6cbrvqDGMRcAvk5xFg5kvDTJHRH13kkEeWDoHkomvymHuQLmaomiaZ",
  "key23": "2qy998LUWVNFEsZGkbFRy5qTMVm15y6CVPAPUttuK3EQkUda8La8pfaaMmc58FJwgjqUzLJMKtr9PUGAwa7yXNVS",
  "key24": "2JcCS1gFKSPw1e4CPVpKwPy3Y8RumcEaaRzQPW5R7f4gAfrsUrm9T6xnk2PEJFd742rpYtWPRm77UYYQhujaUiTK",
  "key25": "37DVcDPtw9CtQHUjFGi4fENCJzwk2nZYxirVq6uf4TfeEn2rA5LEGTJnKHC5h1WsgwSjJXuADwdbNRXEYT4SyhWH",
  "key26": "d2kgoq5WDHadD4fKFiuRA3nh9rML7wcc91VYyQS67ZUP74CzHbbdiEcmWuihBVFAZopmkWtT3s1ThZY4AXNWgJA",
  "key27": "5h7yPmbHj6Pu7mGr7WcNmgPKCfdRZKqJEK16KEiN2kzbZCBgj5MZUs3MpDYERdmJiBooQjTg2gz5oNrZphzASdZu",
  "key28": "5R9xHX5wXFDTuqhWwwNqqmB3eAbxSDW1zLuwT3rjCVn9so6qM1cYnwxccKgfzkkFEG8tD5y5fp2mXFvhKxHKiChV",
  "key29": "2fJUuvJH1snamtne7dpvPVmXZRAckAFvF1aiegerNtuvaEEyY8dQUKCewCxdufhNccGfiqcNnPQBkput7n5zYP9E",
  "key30": "5Yqm6A35GA1nwCBEynbEj9fqSBr9puvx3a6br2TRr3eBtHpHyLhQiciBJh6bcNCCgXLCYKbe6dPWUJYYsnDk8BwJ",
  "key31": "wEBxHTQyp2pYbGth9qaT6SbJ1dvmg4wrzJzjUwCJRzcwhARcy7kMTtXSBDHLRk8SCBJLtWLXh1YGYgZmWkYwShR",
  "key32": "5wgDSNKH3dGo4rXZe8uLPW94p4hhwJtGVSkVe6B4cLCiQm33PnHSygkLgW8Bsjc8XLmVGDM7pAcnWfnDvbKrjUxF",
  "key33": "3vH6sDPs9eQFtQHxZ14X3Gkv4hkDGdkvzEzoa8k2dNbJrTvVUFPicvWpqgKUFPVULguY2mAfDVJUeoCQwvUtpqhg",
  "key34": "2WfjRx8LUrp8yseATz1KKuagezQLMvrSWS5TEe9Xm8tWPs1ygzNi8mSshWXWMes5rzN6uvff85Gzr1SoNt4Z2JaV",
  "key35": "4kjB58FMJ3LyNTDTskt79SurkuVBWeM21VM8ekbowuaPUNrBkHnWwZ54Y7wSRpoeUiNnbmszUo6w2yErLAYEsGXY",
  "key36": "3mgtbPapUEG7nhsDV5YGi8uxzbLjch4d2MbARujvhTAxHzYQjVmDgXMtgshK6tUwxZKXu7kqhPk4U412swfdNGMR"
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
