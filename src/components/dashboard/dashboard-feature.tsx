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
    "62rSkjvTq2W9KQuhpWjyLi7DG6gZzNtuwXZgRp9XwC6ECAT26JRdV5fG8tPRaSpSsBr5ykxBwebUqAcDX4cWXK7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M1nC3aPCcMLQFXnv1Gx3sDHxxnPUEzZ4kJTsxhAmZfhUb7dA6ddpJGhhfXXZZ5NNQBum1Lb1jUyqzYGPPYb6dcE",
  "key1": "2YnVgZLbSwfbQiPVWm1eN8wh7u1UALQuLtr1KE3nYF7UfV4XW11pykqfYScki9bz3aryuavBM6ByTZqsQ9MLv311",
  "key2": "3s3dJvCgfKs3Tm7PHP7khRHxzKiqZeJyL2hxyuWekmnsh5JDhNttjt5Tsgyg9vuaSzngD8u6ycBg8vgcq2kT7RHb",
  "key3": "5HKxLb6qenTdhLw5rQxDNGSz5gacaNYvi5EHfzjGG2xazQL4JFzW1h7jJCDk89qVw1PCeRonR4W4jDDe9GUkeSEg",
  "key4": "4XHRM9cWqsANmegVgpim9LN3hvq9N9Dh1W1Vx243WeFUj6dhYFv5vLrjzcG874tD3rdLwar4Z5dd8jrp95Kh8QYc",
  "key5": "3BnEEkXq1NS8t9NRQcaLDBVac6JcbmMfTFVpm8DLE9cr8CTNjKRS3zZvkXcbWvPCpoMxV6tDhouySq7VM6rhxRvq",
  "key6": "3U2Rshwzruc58Sd1pGaeMLARWcgAEoRemxrWyZiaMBnRtUHqcBKpY2ifWbskWQLZH7gNvZQ2BASA4DJs4DaK6WHd",
  "key7": "2mw8Wog6b7ypq3f23eZbZfcZMwdfgK31wbyCKE1BxDroPVq3NYKmVYa3DqwkFLsV51zYzor6NPQK7J6WuQNWv8Qz",
  "key8": "4UrgCYnqE5Ufp8M5eRSG2ghZhEqR5GAmoCQ14PHHRcN8yRoCfTjfJ72VXDz5Sk9vhqWVTN1SJDsUN2WRm1ejUvvJ",
  "key9": "3hDSUVwAMvFoUW8vRKvTfBjeGhpgqNcXayyKSUcjCutoBg6Z18m4iq8AdoJCxR9H2LwC64o2N5iEP3zHeNJFqwZx",
  "key10": "56ULvuk8njpB9vdLM4XEqGBv1CqbqQsWKHG5Z4WbrYq7j31aGJzcmmPi72aqGrE1Fei6CxiiCdHiQNNeV9u1aN9j",
  "key11": "4CWgedzkBPwgnX6hT9Ag8Paz9a9Zmei95UTBHtNkqge3Q8h8wjubxPzet7neWd5MAYVQRWUqw9PRc9G15QdSg6H1",
  "key12": "5zGDsXs9WsnegGzy82SUBNMk8TJf53maQwWQqDVrzsM1Xw6T6FS84wLrE1P2ywyRpGKsHo2AH3jMBERRp9vwkw7G",
  "key13": "5DDGKnjmxwfnijd5ETKfpzBaH8MqXze1nnSND1WH4TQHd7NbuzCx6BoTfdudkukVq5SoGWeX1H9m6TGHbaD6trD2",
  "key14": "99jzWrfHzEPFpMLnzVj7EKBXHzNhK5MbWo1mseFXuum249RfvBsXhJzpvcyAryf7R6aJREDpNuupMt1FmbfS2Pk",
  "key15": "5xM5ma9LEk1jwGigpYw77LL9CxDtunpZJrEgzFR3AAyCi2n89Dc3XtQ2Keuti3dxivo5fKDaCkh8EAmTw9wgg8cn",
  "key16": "23qiEMf95Xt88TnTntqYLsffM6ZeZhXgHfm34HnwZMjrLYfXaSnmF9R7WgerVjYoAjTbuEunmWPPxJU3tdhuWu7A",
  "key17": "3ER8xtU1s21KSCiJLb5y8gdFeP5irgkEbNJgx2sAW5Arc2wfpXHiqRWe8QpZxyHbtbTiqzjiYwZj4ZKtvWmRrv3N",
  "key18": "2v3tnJ8tXyQLizNAwmECUhcbHGyYRPP6uT8M7uhq7PfoZC6YjxPxV29SNYAByUgQ2QiyMmNwM3WdRQNEG1hh4UeN",
  "key19": "Egri4htq95uPszWjwPxE3MJ3goR8AzXUDtSPiog4tdXX13X86Ef1PGkQZSFqGWW8mrCoBuYNZbLSWzJMP7ywkyd",
  "key20": "5MPcfPmiHkFVHWCFvtoaGeKEHSRZfsYPcKDEg9t1sWGjJ5NMJ2a5wAwvy9Y21BhjWFBdRW7a7vXqsJbCg3Xqpsvs",
  "key21": "21ZXr1g5JMmoeYWnygKrvDqamJg4fSsgjGPq3hjc2Ccn8JrDdTmh7UgY7s92AKNWFP9nmAJCnhy1c69Fft5oDm9M",
  "key22": "4S2fL4Jfn6wjXYFmdsLxpNpozKBTcECLJ86mFW723rkWPbPcGqhsGeBFgGaKX1dumHFZ3k7DHRiuqXQRWejDN81Q",
  "key23": "7t71kXLzNiEifoxW1XQRsESW7F1gn1iAsLTxx6zaJ3VjmBgSv83YawX68AYHXN7h99bUyMs32EEG8LKtvTWr5K1",
  "key24": "2ViB1S1osJUEDzKZbGpKAdxPAqooiTY4WqNUThi5M6i2BuA5Z4K7EKtqSQqy8cvPLG81zcWoXt1AijYMWrRaViM6",
  "key25": "4yknTULLk9Cg4FRpwPTTYBKNT7kCzbGMCvHUEfGumdtb44jR6wqLSHuxBSFEPNhoKiPogekkQRuWbvcE2ERapWkW",
  "key26": "3AKRAXWaHuPH3T3Z7UqzkVdmv99sJgKmDz3Qfs2NhzZXxkR2x24jDULBBb9zaCovSxk73cFPXXDs6YwQi8TE1FD8",
  "key27": "5ndFmhuMQv1ZM1jpEgZbQi4rddhqtodmZqZTTeeC4CchSCPguLyNoWQ7SgCossSBd3QktLMBmwUCdD7DPQyedhf9",
  "key28": "5pfVbe8aNqdM5WbQiUSZJwWXswaHN3X2CVAcwR6xTKbhrT4smafvFkSLZbAQ9r7kp3m8oC5pUaHkBCSDG7P6RqRf",
  "key29": "5U1ZhGpwvrVkNuvAPHwizHzQyH1PiHYzi6Pcc1E2AqpDMdtBv1e8XmJhaGeJHvqs69ufCvofmETEUfyCgMQMykUb",
  "key30": "4r5GRcezwsL9CEoH4bPLhnSjFgnLM4LYBTgU86Kfpz6zKCuWfktCJLXvrQEgV94uh8g7iB2xTv5ZCbaosoNvvTBA",
  "key31": "5KCmvE1upPk2eDjg5JH45687YSkBW65jYyz2SouzevpYHriJpc9dP3ed33o7XxMQUXxg53qUTBnnz36MQuMn26kv",
  "key32": "56aZmYUyiaT6bYeDsTv56PWfN25z3rFjkeeLqNqcv1uxRT5FpFwdQiSjvJAU8Pi42tyP2YdkTw7ak2RW1Zk7mkh7"
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
