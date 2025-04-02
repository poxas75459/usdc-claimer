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
    "2zZ3zBoHhcsrUdPG1767CqcahsKXic2vkcui2A1dxm3z5GsudejuM7HiVhkVxHRFmqyRsDgtRqyzQLF3ntJJnW18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54vSGvYLZSkBNT9s1vPJEZJP9JDERazmDdeCbsYAsxTz2JKwPZ4fbyBD4o3CFEs6C6kQFcT7YrTK1Kniv5Uy25do",
  "key1": "4QXYomn6jALJHnkTgfK4Foz7f99va7SzxQAWHJLjS84MbQJtNfKxgoJCCdsonyfiLCR5YxDDnCaTk1Z7d18fjhnh",
  "key2": "2QjRtfTDSxcm9awKHUKAmPHh3qmrSGwd7tZyd5eXR1P6mJmVG3c5N2VSc56MjVhLqWjiuJhX7tph57e9cBrdRuU7",
  "key3": "44qwYTHxiaByohXZ3teU5rBzkYzyL4LEwzMqzZdZ6UmpmFW5XBJfRRWFmdYTNqeRs3tHTjnhLMLC8YWsdUteBMD3",
  "key4": "46sVWDqWBqhCRh2p3KoXd4eLHVXiE8ary5ibRT3CKh5WEm7tNBS7AFwrvZZCXRL62b7eDHrSPyPQ9fhEzJsrkc2h",
  "key5": "4ndCKcxF8ZiBzK7ChjcQX8xkjWq19YG6CXJnn6Qm9iRUwMMV7b2XF4F7LpTUMS9Eqny3Ntp3JQ2PbVWZQaU8G46E",
  "key6": "57ei2yHC42cMucy7XZSYSmtiPUamHU2cGwtFEj9MPFHkStuLuRtpdKi6GiiuxS19rLS8gDSUQkYggXGqBnpBMwYo",
  "key7": "2PygUzfpzWvzzn2pqcyfqrsrkXEia3V3sxBD1C3UdE6fSTzTTnxfiHKYcpQoAb2uSD67cc9prB7UKqWta18adpew",
  "key8": "opTxoRN8D79tczp1JoV12eGTrUoStnK118jFgtHszXagF1gHVbzmVPcWtko9RYtxGLXWJD5TGuWcRnZJ2Z1Hmk1",
  "key9": "2EUKLjpgepDs5d4o4hwnRqfoTqWScurqECuihrMQhVkho1fcs2UdfmYakZdtkjDmUNQJ1sFdWDt9hg5AJNkadL1a",
  "key10": "3aXcjfqMi7xyPrT25V9CjPUw7ijxp6RjUX7uVyonadHRKv3YH4QACgNeyuuivhNAkSqQ8C48ND53zzjAjAEkKBEf",
  "key11": "3XW2BBVSefa24SHBtmWNH3dvRT7yfSq9K8w328GaVfYpLEj7d9KnLrHFisfAMoyz7veBN38QwbU8uDh1yuuBfcHg",
  "key12": "5tUzafZh1ZhRCknBEcLFkmkeaV7ofUYfHT6mu6goE3T5une1q7DNux751zCfWtwCqMpeYhmVP16zFM2VsHhNpiJg",
  "key13": "5ukmivW9J4yD6s8enx11kg14RFDpJxuJTotWeGYio5Wk6kegkRuQFttsi3921stCxMfiTSTiTzTLwLVZDCnD32YX",
  "key14": "4rZmNx2cQpGg69U19mN8v8Zp2cYcnGQ9k3M7MP6ociYr7hdcuRA2WYPSy5JK9jtM5zrwkgN9n4RUaj8MijpCR7Sw",
  "key15": "5xZiHcTKPQfFASEF3DF1Loo5f2JLPjrwLCp1ZZP4XFL3WHivbrTGobtfegcgKfj7y86wMNzBzoFnWu1vf2ddxyap",
  "key16": "2DpeU5i7uygMQPbuy7j4DPt7wUF8y2M7GgGh9cN99u9K2nxJdwWGFwZnit6U3fgoZWca8rtn8nTaynR6y4ZaK5kE",
  "key17": "4FUmm1XqsjminjzHwEpdbX8XK88mZ3Deoufycxe8zPKXK159STZyw5Fnnmx6RuwJSEeqC7hQDUskvGWravA4F7f8",
  "key18": "5xz2i3ntcxFFDZAAXtneoaXjAuWPxUx99Ew9cS151yBZFFSmY7wrDYAepTrPgba8B3MDwZhXZvZSQJNbqKXLjxsq",
  "key19": "2AGgijLBrHq9WkiHTLUbk54uX8i18fNkHMDAG9juUQ6pejuueAvszPjSMrrsCkmyH8Q9thG6ypibeg2ccqXX6okH",
  "key20": "2uwsTzaquhw8Tk5ZYSBTaLjumWECYMSaB8Q362sStiGEArdDXdTMHi4ABxVY97X8YjQ3vHc1ozuxEY2kZSYsp51M",
  "key21": "TqP8JJqAktZUcAiRbmsDHaoeFPz4AnunrCJSYuD9ZBi7UJe8KqbaPySNNkJAsss41YoUSyVYL37S8mbgefWL2Si",
  "key22": "3d2o3oFwpmhBY4RqhNhf63Sb65TP36iHKRAcX211XRWoJNExspgduC6TDLbBfQPmeeWsXGrXnBeWrt1Covt5voAX",
  "key23": "4ic6aW1wERe4rJ3d7dkMrXCodRFSJr23rvVvc3btqwWwHoEKBG98QShUhcStbTohSEFqJwboDGff9W4xZ3VMN11h",
  "key24": "2zDc5fyp4kWhgcnUxcoPSNweiAwdT8hrhrvJH4kcfQrUWhNFUKYtYfcnRcCqQAJznwCRjTHZpQtnUD9o3Kb9JUTN"
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
