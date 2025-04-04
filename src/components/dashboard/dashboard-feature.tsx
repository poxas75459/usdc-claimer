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
    "3dqgeCuMyewCexUqFdTq7wWeNMzzrV1HujnQMwfvoHVz1bjqM6tjNTazBzQELcMprQkHxRn5EzVfE3kVhSzXVGBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EtDhEhYqr6KVmt6WXVEgKDwnv4LRTG6ZEtS75gD5zEKrCBVZk8pcG7xaL3gZ3dGn1xhrDmkbk19Fypd23nar3ui",
  "key1": "2dYoodJdgaeHwGwEVAB1n89bEvu9GNcVp4AA2pgiEbFeBa9TZGfgZiVS9XjT4PngZGapvrRg7eDwLmm6Rutars1g",
  "key2": "4cqqdfCTgW5wLJiGg4he97PY4dJgJAEaaV5gXByzffbBGhqHMoMqsrY5FnKDFtGQtwDhryw8seSv3u2fFUu6pWtc",
  "key3": "45LSmGKZ4cpKm5By9XiLud4mcpHHJH6Yyx7EMoDRVoH9W3Dj85Vw6pqrNLRvqeTTDrfB6qtotR669NP5hQMRYX2T",
  "key4": "ubJZKsh1Dpr2ZAbCtZDR3CU9tPu9KbBZ2T3nTZRQzCE5zZBeXB5WfLU7biXsq6AXnjWhjBxpYNjF1k49sWF466b",
  "key5": "3cgFN6QPBZAdqA8VxdmVtFhq2AtidVFtcZ55JSUEEidjatL9x49To8CumK8uxvkipH2VavZyV11DLAS5VzgRuXSZ",
  "key6": "4P1cr52d9A3fFCsqQRaFXXanjhUpb9Tu9dz2sqCdbiQte9LFKT2AGGxQSXQatVoZhKMDnshXyzMByi54gK38nYEY",
  "key7": "3WqkWTiMTKVr7vYYLW1KtRcnYLRVYj7iAJSUWjbpfYFy1ex1qs86kPTD5mLunr9ScuDWrBftmPnWf1Y5Lisqq7KS",
  "key8": "2uaom92qnk4qcQyYDPGonGXFAkkiiPkiWXuht8VFG2c9KCLyaT5Rg71eWiufN28w2vVNLH3AejfVvS5sKy1Nw4Xb",
  "key9": "4msb9urxbJSgYA28ws3qLsE1LGfQJe4wq4hi7UGEBzuyKbFN1mjJYspExu3hwRtwd8JDDpccoQKeTRLyNvpagZTg",
  "key10": "32enpsaG1pA5q7kp8tddQih7zeHwjTF9nFt5GFx8LPTn1cust2jxVB4GbjZytnDcmGecwGaPu51VY3qhMwcgLQuV",
  "key11": "61ZjRaqKdDDtCNhhtbdDU3pmdRGcvBMKQwRDc7EWx8mF8N83K23qwdy9jxb92ML8jihuNFyxuVnWXWEDtJEdVmmM",
  "key12": "3rZLBgeijkai8s6P32dGyeHNeb9zxVmVs6EzT4FQf4bdycpC6qvgESVz5JmzxZw3ov5pshYToM6xbmTjqWWJbB46",
  "key13": "58LLVZBTterjj1Qo7SL161KNtPPDTvSY2yrc3FUAissBWwXLt57ovk2i1BvoRmNPBxNHvUJcRqhfLGCeL7pkTTDG",
  "key14": "3opczjdgWu46oa4rWWj1xeZftkyTVvPVH4G7zdrep6cRpVWPKsgBrC7vqJCpturaxC4UeMgxMLqP3sqFevUgJgkG",
  "key15": "2spS6jxXKeN5MTQy6RWSsNUhwZnsyPKu7ZkxL52WYRZ4jubgCwPqVeVcuGJJeBRPtM7jQ3zKVogQjRBRaPY5ZJtd",
  "key16": "26hsRgWkaqhfvGEgjcYmgiTDegyAFLKqxwcSX7pxfQdqukzb43J862dMZ3ZwEgq3V7g5HwasxxP5xgKrpo3uRjpw",
  "key17": "2cH54vuksPqK4m8PKAWfgtnF63Kb7pafTdJseL6FG5ERK8RFhCA7rweAtGGSXgMdVTPFQtfem2RFGHVyTcNZDF4d",
  "key18": "HzfhzpP2eefT6fxZzWfip7pfMiFhtHPhYJuNDviQVniRDThsLeJNAkJVEiXzFPuis1eY1iVmKJYp456WS4qXSen",
  "key19": "5ftjGCHXupuUDbidzqcyRbKMxFcfgcKEC5bamdFiYg3F64ejmVJ4xvJ3cGLdaB5EHeHGfeaioK8mmX4zxAw9kDwS",
  "key20": "pofGL6xTUJEBGEEtyHrdEzWbdnbUewQzc8gcoxwranfUTeateMk7WAnPM1Gt8LCSt6Lk3fFEi5e8rPv6T2a89Ln",
  "key21": "4wi35rUsy2hWgR5Afqk82HEHR2BYhckFpLhVyQKvAAYfNYoQEJGcteoDTpViJmm8zoPG1487PinnTgxc8Zje6bJc",
  "key22": "61QGzHhvGSH9jCKYqKmmMmmrAoNXP7Kka5axZGzmErrt9VZxZH4XtPyCnNYZvFv5onu2YuZmmauGUCPVhyZiKLMA",
  "key23": "2hRktRJC2EdB43FqTbud6CqY5YsgQcsSMfU95iAbZbjYT3LWByByaifoHVwKogtkLH8Wea8HAL85tNYFk1v8WtKj",
  "key24": "4wKo1CYmbdJjjkGrvm9fxcxadpf6jmGKXRNMpscojN1QG22kuCjs3Epj2gRg2KBTuwPpd9Ka8C7RsBGy2ymyYSMA",
  "key25": "3on46DCcADXq899r5jcjTkhjML3uQKnkL8GwBLJCJgDYe65rcJ6tsVnLVe4KSsAfUWpVq4U74XZWCxoh9QESv6RJ",
  "key26": "2acvg9WTtc8ZokfmGhV3G4ut8eLpEtx9phLwzaQnhyTDdx31rzUomkoUHWc7dXCSj6Mr4DQDs7LyGnNunTkY8znA",
  "key27": "5w8x4UB1WH11AKkvoEDvpCsLfWK4sDHsaLGXLrfnrMxa7bTZgVvVfuBDBCkZ3L4j4DLUcuY5NLizuQocDugJ1tzj",
  "key28": "3ADi6GfrhjqPgGQbs5dXiaPPKeQPoj8FiTqDUaRZttGXNxauZuM1SK97iiWjRd26XHNDKvcrpgUMuzpm6NhKiLF1",
  "key29": "5h28kQtbfxsn92eKYQv9mYkrLuc3orQCd3CBy9ULnRQntXLBWVpBy57VoJLcFRbfu8ieia24ALPBPwprxouED8Tw",
  "key30": "3qR6sd9rLU3fC7gLsQZMmRCp3Whh6qvzDDE21cc6BK64fhkagHb1kY8xbbHwNNL1sJB3s8Tbed1UrWtakQrZfqgo",
  "key31": "3EJcHJGKt6jQ4fB6LUV8yKr3ssWXyGvLfKfyALp2DyMGjpR5D43q4Y4hAzvMkynDVfri2d8iFoqpSBmomZULu4aZ",
  "key32": "4yBsj2FdFaskVQXA7kcBuY9SuCBjcoMmpYt6htb4PXQwQQEVRY22yZy4LsB5XUGuj27Kh9wCP9Exz8puLVaAzSb",
  "key33": "3tyLkUwN8S9AeEccDPydRFZ8bjdTfmvEs2zpBahhnGDyHAqqTn6atoC9u8eC8crzqta4SoUoSeAun4bjyZFnzFid",
  "key34": "4gxbYQfaR1cBKeHjmWt1NKHVZ5sXFZTnMzvekJvcCCat4YJHBMK7o6q7FMYV6HH2BEvABsNwbukNgTSCep8E6dKi",
  "key35": "5cw55Mz3FZGpwcB9CyzMKYXQnsQs4usemDe9dXUmBPugnNeJdERsY7UC8qGyraZXwGobWxJ8hUzHVhCJ7Y7gDK4c",
  "key36": "32LmVdRBMJVdvtFrFpVmtULT2faVkYMnc3gW5E9JnNbeLahz8U16sJeESZFcoDgMbNMeyLdDR3XY2SQ2X2dUysky",
  "key37": "2b4Dw3Th41FrftdUcgnb1dAp9oYPi97jF99cWFH2tRDX8cUzCNVRg7puTHqY7rAnow8Kbpe5cBujddF4okuT3De",
  "key38": "tJswtGzTEuyiLQNNRyxcedxMj28C6XAPf6NmHmw5UuKDnWMqhaFwdUBu9Zd63bEH2cG9sYL2hRDBZ19b32LvdxS",
  "key39": "3Vp1JNXvFpHKm7y3BcByzj1JpHrLz3igYzWw59kkFoQ1sC6JX6UkxUveoCpEMdf9fxv94atKh9j3NvhjawhSjQ34"
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
