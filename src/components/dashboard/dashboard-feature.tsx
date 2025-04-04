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
    "4m5b39RSJ3NyEErGeyrrgdT4kUrGbTCGgeoPYPkMqe5xaXJgm9ii6KBAGPaaLwWz31t4E98xBwfP7yyxB9LNEHCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SdMF6eMyDpjNxCZospzZ5HhphR4AEh1NGRBrSENL17ZYwgYt4WT4sehf2GiJa4Bc6gYQHs9ExhWTWwTAzPrgMby",
  "key1": "2HiFgBQLjkWLPgkHMosS89PeFqs6XoeivN7QM7HsPRxPcwjgp71g618yFooU5oWNg5Sa4DXMSVc2nMoFpc9sguuq",
  "key2": "ZoP8cieonYTric6s1DL638oS7PjCjVriLk5VN1yvFb1kxpoJdLiiDLT9XZmzkYVW2rtF2P1pBiL66gtoJppyAgY",
  "key3": "kMu2TYB7eCpm6gdfDveq1HT83ESWvnU1UWvvshgT5cHTeF4ADCMopXy2E2FAQBYUddEzejkk4wq9QY3ydfKeJqh",
  "key4": "5PKChvAToiLpuaFaHDzNMi9QaL6tPr8peo1tAYaEAVBpzSCcNv25WFQaLrZ6MDnjNXsqt51Cgc1hcgrbnUeek9jB",
  "key5": "2s1pySDzPWgseHeo4DyrtamdxULUaTdbNKfkae9rFXT8ABXxPbZqDHtCs7Z5ixpz6UiBuTbseUsfyUxfogq4MKay",
  "key6": "2WSbf9tfgVx9HewNrV53yaLs98Uf1sRMYzjwjEMTrKb32KBnW3yQK23FkLgjUb2rLtr6ia8EiP9TgeP2NMwct15N",
  "key7": "4xNbzKF5wG6dj8hodyYJK4igTs79t2Nofr1Emwjbwk7nc4WBC6Mmrz1ip6gHYPmi8Tag93YB8anLDBv63NgzdLxp",
  "key8": "4kb9LVNAjurBsJPHzH2NQCcrxYrCZqMJJhMPy4wKKv67TSGpJXCV4QKcpXwmY1ZgvppwvEuh2wp6niTg4reczpgh",
  "key9": "2aknyQXjjkGkfbD5tbBbky4aKAZ5QV5iV2W1nKKasJHEHQazks15aAns1BxxriwbujYqvpi3k3SGiRMNT6fktwWv",
  "key10": "3L4DZxGQMUk7efmQrPqWvU2TjYhW6xYD5iUN7FsHjtD4xfRg3Dh7beKzRbnrFUPBJfXJegyQ5onqFBubdQ65q4tk",
  "key11": "2YKwtVdhAUVUFsiewNuyi7RuQV3JCbootVXa9TyNq9wNLM1Pf6TtAwYPYJoLk3hDeVAvbZ3WpuqwPNvnXBvAHc2W",
  "key12": "5WC13w3MNaJjQ89BrsJX3MfRiN7kDzBmoDtiGHg8osxuefFT3wkodQhGKoF1dP7CXYJ4NDSrMJ5WKqht2kAHDhyi",
  "key13": "3xraREpfU7udX4f36DtJDD1R7t8MXhtPt4F4fFPTbVvGxjSRf4QwwwosNkFXJX5EYsoCVBVADJFL7da5WBnDUGXa",
  "key14": "5cvu39bP2vokrGJYvbZbpVgDhMrTmPE2tT3UMk5t2mcUsftRR3VtXHB9MGvmeNiuDZJDgEsMWLuzNBDnXs9jyFxu",
  "key15": "4WUpPpqk1pybpdhV93k1ZBBzYbaoFNX3sLQVvmnhRk4EJSSnBSeAd3caKgiQWTvZ4xsQ4cnaq3vB3HwrSvixXJoo",
  "key16": "MQ9Td5zvG8q7xBCiYRygBkrsas98bTU1RQZ3HaYTgARxx7WysRh4z2ScGb2b7ocDjL8ecyM3vtrsMVMAjXgMu3d",
  "key17": "5oY6XBiVq8YqgYz4BrEn5P6gPQBhSsBQRCVhLDSsJRWgrBtxZY5BvHvm9qNHPgca5xQUHFjWnXH4dS9V55ssA1zp",
  "key18": "5Z7p9RvkFFnjLTTUKUTNqPDSvf4D8kfkdt94FEheapH2WW4ptUxEjFzrh4NbtUakC5YkMh4oW6oDuQHgKcCrzi6s",
  "key19": "5ptGAfenPdxpEt9KBvNTYm9VSxz5awPF63mpb3582fqfmM1qn6wUqRNPFz6C1qBVaXvge4cb8zLn9fGEWcGXUUEp",
  "key20": "25MPtJVmroVVqkYvuejm62QyCq2xzk6rwsksDukgXx49W6ZDZNRbTQSeUqU7ZpBfTFVdhfdMnbcLsSFHfPTUHwHv",
  "key21": "5G37F2g69wYY24f7JAZcMmtsobLpwVgZ1ieSq53uUzJqpyW1Cnd1npLmrWqGt9hP15WcbcAJWJNV2TuFLjSrFQn3",
  "key22": "5MrV42KPZvobCruAZLt8QHGHbiqMwL2zyWtkoXjBYZKS1qfT7eB8zLwxshtLt88B36NL5kRRpgpLvZPcT64YEysN",
  "key23": "2R8QP3Upa6BrMfAehhoXPTnJAvEBFchisA2dbaPEKgNUhFCQ4zUG7twsEFh4vpb1xMzKEuiTuXJSXs6GEtDxPZkd",
  "key24": "2DTDQgPxp8xMyW3NgEnNXFSYYvU1EiFTCcG7doYYfgzmUEY8WNzfTLR2gQtNDk6hVPAosmkACR85EWH5B9aU35vM",
  "key25": "2dm5xxdAp66aagzPd8uFv5yvE1jzHLh2wGTL5mS97TTzFSzfvVF2doctJkr7MDc2gZVh2mJvWL49MWuBJUByCckT",
  "key26": "64vfcSgDLfrUCV8yF2ipuxEKZRE4uoS5FeefThe2KMRf1HrTo6yzykvEQNN39tdeVYnYPiPdeUiez6KAqLYgWQvH"
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
