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
    "4vDSRERA76z6foR6ft7vwCadjnsUfQFZG4iuzQP5jsBjo8H2o5v9eHLv1k9DhY8uPvDzJ5STApx5z7TBdnvLxXst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DiHuNmfUhrvoKf2UD7gAS7LBabprNS3TuUTVqhYxh1ULqa8DospJGdB3UC92vHDAAZ6CRN9QNaqKVT1VKxDHWZ3",
  "key1": "3EQ9yDEisD7RWQorsDb4ynTppqDg728eh35xbX5s17gtEDV8XHSZeRkGQv7jY7eVoxzEHeefNvAuJjdjS6ZuJQcT",
  "key2": "Wv7HdypFuferJ4TCy5qoAByvYmg5Tk4u91iwrBb3veTmRFepNbGG9WhdWvTS6vR47o9A29uR3gbYVFJd4darfps",
  "key3": "42fceXKre9sNVzaLV4zGHcAMbQM4kmDa6aMyJmZtUb4tAeE5kUJvik825ni4dgPkVHEBsLCxk5yQS9GWABxQzZeK",
  "key4": "4gD6MeeJiTQ9wyU5Nczq3EuXYf9n2reFjPn9EhqiFHGGjvrTcrg3KDAKsBdQGdqgdGgnKvdVuPqWppFCYajErF2C",
  "key5": "3RjN4xopULUY2XbCPx1krnjPha3QmjoV18WAJ9M2bTtALkiYWnyn1yTcy3ePUPB9HKZTV454F5n7k4zxwiNNDBkF",
  "key6": "4pQjVoRUGUqPNR1fxz2AjcYt91PTadq9b6y1TQYSrA8MuwdQkLK476ZfJs1bZoxQh8UZ9eJejQ25w1WW6eqCFtRb",
  "key7": "5HSCDvStqzhCMJ6CMdqs6DTfyAnwMix8kPLkqk7fqZbbWaNHExCGM8ozJ8w4iBHkSDgvjoXSho6FvxmLpP4qcWfK",
  "key8": "3UHwr3zn3sPDCCfdVLpD62ocDRvxpA9mQ4hSQ8K8RqZNGYFeGWUbyRHdEaxNwYyuc581ftzZWWQofFujVUnU3iep",
  "key9": "2TUjEvyS7sm8kXusPGRggaruWrhiXim9LYNMqtpNXBV4MQD6q33zaBWZ7A9bPbKZmwXE4xseCC76fQ1fMxZEpBeS",
  "key10": "2XTyoWbSjHocPPneKA6DssmfGQyvQUVYBsGrWSC4kLkD14u2njFPcRYmix9ik5i93hZ4rmFsbnNnzTWUu5sFeUVP",
  "key11": "hnr59jXs2UADe1nTNMWz2vCjXH4MdcBw62U2TSGLkWREMQFUUYfhSU69MzeCCtUKZVvF87DJ1q4RV2nJpvfkrzx",
  "key12": "5R66WNsDyjNd2hCjcjAR5noSeaQnQHkfDN6ZjpJGgDJCHfezrxPoxp1NjcJ9sNHaiDYebLktPbv2wXujpi43ngeB",
  "key13": "21773GsEFeBppfvuKQUD7dSF5XQR5tUz1ZPhDEe8FvUhW6rTQmc9gaLxwQF7Df2ZMSAgTCs6M1ukNHvMAAjTzKVX",
  "key14": "3fs4xgrW3aSyk8tAxf9vU5tQkhyv9VYm6F3qGJn2cUPfArR4Zp8MVCujazjnarghQBQpvK56KCikQFJ5zq4iSfxB",
  "key15": "ap6yWzUmvfLfTinUdQj7JDZyTHf6V4LXsLyESUuQLb2ESpZUz4vtTw1nryA5uP2tnWhtoR1i2YK9mvCWxU12F92",
  "key16": "nqmz2rb2jzyeJQ6ADGvcoWPgUZNKGQAt6tRorVdeSRLDHFyxDM4pCqciyBtFNvcYTqgUs843n8ZFr9eibWgduAL",
  "key17": "2zN5VxFkMJ1bZk25QJPtGtW3aDa8vaMJkNcHm2QAzhF4U72Z2opTWT8mRFHcyNZvh2bD1BmU9bBMBuLXDFN7WuJe",
  "key18": "2ySkBbvTnVM3BvjVDgaJujykJa26Rg62gMAB59tXyBHhTJ5tvWn8KjVnsXD2r9hKdy5pAqJqFrz1x2wUPn6Sw23t",
  "key19": "4rtFDFzLABGUV3wSuBE1wPaEvAQwGXmy3dJiYXjicfmeRHYrErw8U7YRcaYbtqV4SEyjorNKLwuz4D2nixVFfQBW",
  "key20": "25D3yvWw9Jmy8PdjRWyVa2W7SgmoNS2ZMK4cE1ZEorPUZvbYaAw29rF9RG7Em2rLsSTRMQLPaYGfMonFfW2DJBCM",
  "key21": "44neMLmf6g63e6aCfjNK6pkNrRgsoJ47e6ifhX3TpBvUvaYZfzn59msmyN5zGaxJqHjvVxLgtYBzLJdzknxQYCRU",
  "key22": "4r9F2VMRUyGJe3Y54qwsEUEAcp4diFh7vhpGPwfZ5HFPchHXuAzGtYC1HspSVwhLrfYFvCpfBsjjgGQNyVb28Dm6",
  "key23": "2Rqf9TdheJz5dPhQZL4Kj4ZQKizo1CM2BB2uM8ghR5V2L2LwCLEXvBdbEye62MuGkA1s75W2S9k9PtnEXLtPHhAa",
  "key24": "4MfGcdu1ryLL9L5HPDLnog3W6Vw8eXfYpPZSRWKYu5GFWBfQs3twLJGEDJgvYSm1LPTXtGsSTnCyxtXNBtu9mUpH",
  "key25": "26pKA42KYghYtQmQXduf7CH1EUQt2UskvND93jDFxSM4pYm1P7TbaPJvgu5jU7CAvzuzktL9ijmNWhYPZEvNBgRD",
  "key26": "2jAukAenNTeJTZCyDnzdGZ5VeS72izq5KNEiHSrzYMsRW3CdYVPsSZ6eKLCnFyejF8dgnb6ZBzvTsoXHuttCWQfg",
  "key27": "5qxLbaEmjR2GGMwVD8BpAwZkhSyz3ZsxHEba47b1pVpYvJtd3SgH3k86pgU9GDNuY7iSc2nsTEx2EkvdnJfGAPDN",
  "key28": "4b6FdMS8W9i8nyzYjbg78tCpiPUPwUi4pHQDuts9baepaKekynkBhsZTtvQ81oQtWTnPmfy4n7xV7J8R2wMMvWDL",
  "key29": "2uF54ix4MVMtG1Csrwvc3uEYMHWYxRxgtvkzwpNiJzJFhRuUZYQFgiQ1VGs5dmrzbNMq5jCNJQ4ozMVeWia4AWbD",
  "key30": "5EjoxoSHp2UUQrHyfjQrQWH8STBXj4atCqfHGymqjvLhNAbywKcddrza2jaaenWLg8YFUanMz6nRezPd3NELCyxf",
  "key31": "4VNV6KLxRFqg6pMLyvzkbAhvuM2LX8KYWLnRijPr436okNFDUcFKSfuUKqifma1a3LyYYH1FPZmGNykisEuB2UtT",
  "key32": "4XiQgz6tjiA2bB6ZA3ho4dRNaSUZGTL4DqtiZqTCLaNGqdfubL8ZQPyfREbSCzHcmjL1pQJefp2ychknedqSZmFo"
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
