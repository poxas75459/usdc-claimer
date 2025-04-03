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
    "3tYmRundKx53i4eCHM83VWYazQoKitdq9rTiwUGHrtvVzLW8GAquosLCDBskgG8onwEhhA7U6EGpu46kx7RHo24q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M1kz73jv6vpTbtVrAcaEeECqiGViRRtUQr8qtJmgHu3UQoCfSLktACMZu1ifyPvoRHBMG6NkXZT6BHbJbs4WcfS",
  "key1": "2a3LVmMzzceKa2Gsv8pBkzQKDQAZUTxV5a1rnTgiYykaDjhZ49ypgBwC2cw2y9JEbPBXMnfWm827zxrBG6fyLvkZ",
  "key2": "4RGiEojJwgEFHsG4JrJZwh55LHQMbpqd1nLCd2tQfJvyC73se5nb6jnHAv1TZQi9JExBRDDPmUxQmBf9QFnCcY9j",
  "key3": "2qjhipLvYB8FaMzJ3PQj9J9FNKXTjGkyuQqT9khZWhVmistd9x6Uz1qzXSDYQ36WrmacSPivxrvMW3npofQ1pN4a",
  "key4": "2mwFd2N739oSVtWe5yWfTuicmve7J9r3rWduifWTd8CZdLskXnuNe1Y8yjMeYmuprbgFYRciMkALfegFo4pGMets",
  "key5": "3UtPfcNiKpjuJWiAWFSfmAJMpMSLyzkYiZk7LuKbwPgbC24uGhA6gmdx6zA4pfAgd8cgTJKvg1iHYSYRgcpRbGm6",
  "key6": "5FNRpQkG2XdUi2qvfEwefwGy1wZChK52WqKRc3PETE4FbuuWmHdWE8Rhns4gP1uYcTmVLPg98AiHHndCjqhVasFL",
  "key7": "3dJaQtkqdcxPuU38JWwCDzPXpqT8VazKGtFvs8DX2keoqYi2U1ApYVvAnUsraBmaGWwCNXfxwGZuRt6EC2TtyM89",
  "key8": "4R4Wqirey2hR6j4Y4FmvkBz5ntytY34fTzf3FXyeCMFv6KpUT3kV647ifUvWBbUdXBNVtMWEDjfrVrXsMyhBvH6Q",
  "key9": "398TjqqfYAMouhY9wdnwAn59owKLon6NPm31n6LQwuCVwd4wxwxFDK4psJY7puEMtx8fZvPXyFeMbHYxq3ZU5o9q",
  "key10": "3fBep1x4TFkTKukqER2iLCDvLDo38f91U4ek4mvrjVutKMacfPyEVXGkS3HiBpANgQQ6ksrQX6MMiZsBRWYNLZy5",
  "key11": "5oZ7LX83X9E9rDDxhYZ9BKsG5nws1pmckLDme4QhuBuckBdVwmHmY9RWWSzkGyMfJEGfsGLHE51XCehrekQJMXr",
  "key12": "24ws4DB2Myxi42obs83SCt1sj8RJSknvoS7BH4yFcEcn1834zZhQcftbwYg2CEaDyHixmmyvAhq9oyhuChS8hZmi",
  "key13": "3eftdAknmRA5Qof3Kqw9ds2UVtWL3CuSowv1z8SgkpF2BX5ZiCV7Nj5HNNY4vNZrUT7kkEU83SZmqSDzX7k7f7Hz",
  "key14": "3racm9cHJVMZGFPydadnwfrkCgXDLGiPdLkccM1QPyHCM2Cdi2i1vVmVmMKLBPpRiV5EnoZ3hpa817HSQdxmWaxf",
  "key15": "5Z9jjXE74rALH6oXSX9q1e3u8K9JSocU46DV6XnixvCEcXSknfeDHE6uTvrYF8Vp45PZsXbdkFpqSdc3GW95DdCR",
  "key16": "2s4zE7TgQf6kcpDEwkmsYQE6tMHzN61ZgNV7V3JAAKighZu6c7aTnyvnP9LbaGBeUhaAr1anTt8evoJpJ3pafWqp",
  "key17": "3DidFuPPJiCFYamfDfekcghe2PT3NwyvMg2g1QpW1MyXhj5mLCF1LZgoSKq4pYjvRwF7D7vWXdD98rYneKDHo1Xh",
  "key18": "3x542HxMsGSLFTq7uQzfHmGR75SjdkXzWTr3mSNn1AKQaJEGK8rbqNnSvZkkGo5u7HP7bGfSwuysiqBkH8PRzZin",
  "key19": "3TujeyhYJAGxixXi2phw3Jocfq691h7uj2hWfPQ6Q5GHrEMDRZWur6A4ae3JYNiLXei4E4o6DZrzUF51fPhYYpyj",
  "key20": "63n7idbEkbnkP3eDXJRHVRdmBg6fYnsThWqo19oXrVcZJDK8aWsQfw24pwPvnUxhxYH5VAB5JFuG1fvisypwMvPk",
  "key21": "2NNUcBbkzXPwAYxWpPSLMVMm8mFxSewXMNxsb85c66u8yp3g9MeE6s5aXj3xHrj2pndDnCAjHm2Pb65xttQkg4iD",
  "key22": "2GNr2oRr2g8dgJimb6hjMxj6eSYtSUkW37TNWZC7MgGAiUrbbdavhyngaG9tvU3NEv5BpVUrqoUphSrg1opnndFR",
  "key23": "3DBMjWc8MwH5dqfu1AKy3qnJeRfEHwixwfhSc9Hccv7PUJEB25AVBoCStLk6nBgE6Eh2b5eVozaxCDFvJPVG22KM",
  "key24": "238McyiDSwoF3FbJ6W6atxC9TU3pi5sx5gJ2fvgqQbkFYZD5fe48D6mx517Bdmz4ezE4wGpzi9Uz9AuuUnTD8xGz",
  "key25": "4UxtPJ3R9zrbUcPqxN8P7jmE2JZMwFP45euxkxC1BZnP3Yy5SpT3X7nQ8GXTCMHejmGwVN1GMXfnw6ZissvN57TK",
  "key26": "6sPHT85Y87xL6DQf1yWKw2YxQgT6XDQbcPAaN86PtN3tvD4o4EQtB2yocspsarN267sGo4dDM9T71mmEpPw762k",
  "key27": "Cok73QUoJFFfEqtkVYvqCuj3uhn8DheeEqaLAPwuFkKmBktw9LFsnsXTkkuQi7jqUsSRSNUNJCDX4GuFtyXQg7w",
  "key28": "4eUDSyNQp7pMdc68jLy7eHPEdNXg3LTwH5ZSzQaDnDoLZvtFiJaKvh7rnLjkfdrQ58i4EfeqZk2T1N8Dh9EKVLk9",
  "key29": "4ovx747J5xJi23RZSCUjRFcDmRL7uBnNwbLjeNPRbrS7auXswgitJXXzWpk792kL4PTs4HM2RAm8QAbVkfa8MNzR",
  "key30": "2ppGbYvaVVazVEymFKGRiEYBMSb87vhZTkrjGuFf52BR1NxggWjK9TcMSzzdu1iKFuhf8gQsa95eqGeM2w4cA7Un",
  "key31": "3JGSMLFd5xAVX4bctB5tt5MP7K7ynHQs8NGq12joqP56wrFnUGPpndZHRKQp8x4Pxk4jXyVQhsczEYJEjfVA3Yjn",
  "key32": "3GBXck5pWfZPd8diqfWXKnqdjWuF8xUKAFsCYys8ERu1s7tQuq6QQ1rxf7oQZJCTjfRXa9EdmZsvMPXJsoy5igeU",
  "key33": "H43XURDUmAecTengCyGnBS6ZqT9GT3Xz3uqdiwTHHWLdaarPGtcB8hzM6bwj4rJN6gPtnBrjq2175g5zpBXkbTQ",
  "key34": "2AmhZXwuZjx47DUg2163s5GxX7kiUd9gqNrfrf2cQ8xaBay5jNV8UQjeSeWnqtt42KB5b3ZzgLRqzDHQuyt6omoT"
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
