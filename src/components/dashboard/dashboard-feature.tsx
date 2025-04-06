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
    "4w54uHD5MtpoTp9u7yKJSY5X9r2TAh7ymEvYPnpVKgJvewairuxeEJQL6YrHBZbVKHgTRmUjcNL6zDG4MC8MAN4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53SYJ3P5pE3C5SHhyTUhu6DJ3kLXBVDjWGqLPau5mub3xCShg9duH7AiCMdwLmv7Fivu1QmGRnBY8gmWm3xCSDpt",
  "key1": "5rNbZ81TydbRsEmQNFELiXsYLGpwY91zeKDSLuYrwn9vBzYB8GYK783ADrQPpM6NUu35bCJ9i4CPy8puiecAvTHN",
  "key2": "2Fkhi3CorXafqZ37hx13hdP1dcfCm73YSy8u2Vh3b62TN7QhNZDgTKCAXJRRhif4gQ19EJyx88R35d7Zav6n9Ti8",
  "key3": "5J3Tan2qFSRw156De5cpCsBPAqMYLk3RZD7u1uGPKkzebwwLuT5eRNFR1aYxVcE8MDdirvWvL3nPedPQUceRBSeF",
  "key4": "5Y67YPGXMRamDZBMZBGbB9bUi9WahnyzehJr27rjBDaoxYfBqam4AwGt7WVLzyGqKoxe5ATRTLeRSdzpeuDbw3uV",
  "key5": "2xR6wa5ZKf9uRGbgwo6g1Q4h6wPHKD9DzwM6HkErNSaF1eGCsE7gM87CeC2ubc5cqTHjFcqDjLCG1MXsvpdAss2X",
  "key6": "4TLYoT35ziV1SxuXPXMkAcX1sGDV4uJTvmii6nfAjtp82tYq61DVo2J7CEXgiH2241kYSZUtpYMPCw2ZBNZN3LjZ",
  "key7": "57t3hsfZ5cR82FKqPkqjD1wmeiJZPbfGp4koSEhujaRjAaabSuA4bBgtKupxCkp2hp7wGKrwAJAuAc1q4tvffvnr",
  "key8": "4SKYx7gLKRaKwuRzF9yxyxgHTYciUsuBtCRiadayiJVLmJ3AK1MMuTUYh5P6WGBHNGyb1MkTh2gUqLjmEJvGw7id",
  "key9": "41k8yxL54kMsVsXLpgE5hjKsu1oPyH5DexGBde7gN53SmGubWJXBHqAbHJHwdXavjdAirrnxX4ECwY9hXt9wVpvV",
  "key10": "2JamRcbaihGWYDiFiXKCFYT7zavbS6AQKsqYxyQK1zve6oaHoBrZJJkugC6ZFPeuvNNoGU2sTJ3ygtF7S15v3gdo",
  "key11": "31kNMTG6VrLMmrNm4VrwZczhYCEHiarcbgAJ7XrWSg793wtF5j8rdyrAzoVXoMkZGKVDJ973VKr5GZ8HPaoFAup2",
  "key12": "2w9gmmRxhQG7jCGx4nvov7pVkXyTuijePAFSpVgUceFyZrxgb5iWbMSxHz6eywN3WXmN2tx2mR1MB6znsGErbZU1",
  "key13": "f8HkESD1QeKFXWCWGwmunTEThMBpHHBmkmpmAMKup76DroKYTYLz5J3NrXF6fWcdkBVwDo3Y83ei4LL5e9tgu1g",
  "key14": "2xKS9m1AtGqMuMTSv5C3CAZRy7A4io4TKLUr7Gi8K3qQiwoUkwXr1dg9tagUgCPk67L2GLFXuYnM8C2Nbk6xsLHV",
  "key15": "4o4YWQCpT5wtfTqmrFjM5agNtUgg9ZCTjFy9eBn1aeUwComWtcRQSwEjwr3BxMdqRKaxs6g1tXq5XwQE2UeCCVEM",
  "key16": "3bKLvc2y9r54ax9GvmioJ7CMS5aF9yL1fjKpmJaEaT8sMkP6tbiJ5pod6spXYeXs6xbqUWysjN1pCMqUNzP2rRY2",
  "key17": "4C5BvhCZRzJf7dnRtcNmxqhPW85o4vH6BjavL1muaSJJzn6WjQoGcBynJ1nFyyMgERgEmXxdAUJ6tUtSAQ9THXbg",
  "key18": "5aPep6GXRAB7JUuw2LraqcA5fw2kLBQSgmBCVzW7NYdaV5uUWwLV5uSKRtacpWYygce9BS633hF7ZbpxfEkfw1PJ",
  "key19": "54uo7metmfEYEsJzi2PvNbo6gYV9skzbmaUQwu1Z3EomZvD9s2NUncSwdzzZhMu3APTYwNATSUeze51zFV7Gb39S",
  "key20": "5HAMYH8KVvo7PHzWhZtVmwNZ3kYH9XvVKpE5hp2thW7yeypSw2pUW4UvMhddcTq2g33W1QzTzo1YY5dgsU9E8cFh",
  "key21": "4NqcFwmbPdNkTH5Kc3XExHmLTd23wKz4Udcdzj2TQKTPfb7bphwXoVCUM95ezHJi5uKJ7tTeoyRE1jEnjh3dD6v9",
  "key22": "5AvZoeMLKtp2RMF5Xpy2tquK8AL1q3xVY3ixMUrCwZ4pSR7ujEYjFwZsW6X9bZ6pa77kcEDRKuaycZeBCFNC8QgW",
  "key23": "WpUKVbFYpRcA3a2mQhKe6thvnfmjxRay68TTySpry5ytvPH9rXqSWuG7vTusihxuRqgsVpPBnLdRmMKJJB5Jcu4",
  "key24": "KQQY9Z6j5ourgaTMy49QUeMw8245hSqgcmgjvczo4FtZA1h6p5nJAun33zLoCFf2tGRijDLH2t5KnxQS4MXtvUh",
  "key25": "goet9ZwmLPxCfiiJqgC3LL12M1rY87eYuWXQZ3hrh1Xmn2Q3ZsgtmrZikxnSyGgYFVqWQjJ6b7UDKBB99U77gca",
  "key26": "PD6tQMJoV8SugxJYFW4ZMzQwa79zT5iyBWXnR7iHFUsEKuL4K8NBpPhrQHX2rwSN9tsksTrLSsTuiFXswbbsKZY",
  "key27": "2zgsneffNN6BnDaokE2LgyyJqY8S9hZXMiLGpFBxY8MsmcPSY6ZZzmqqEwLXapFgv4Bgif9uAMMBqNk4guKTRAvf",
  "key28": "3g2CNCHqDGoYJukwLwtiozxZnRtoYs219n3GivkWMxgJDJSkQcJD6BECKDrXKwRQ5vLYSSZcYWTQYJcH9PnyVqNP",
  "key29": "4beeXCwTRxHwTCu6RRuixWXrxrU1H29eLZ6sxjbpsMQykNVRnh3xFpmbSLQ63ixngHFDfQaXzb6cQN9SCZKuGfyC",
  "key30": "53vK22Y8i859zwVWmZgHdjBietPhcGpEcT5RWNT7Z5drxNQGquMqV62oEqkMhXvskk92g2iva7FG9X2KytJsFSfs",
  "key31": "4cHmGdCDTKrcwLfTrkWFsVq8Lff3PRyk9Nx6VPMG2Qu4ZLXXmt9Y8e5vwweRUKvoRL4j8QSnVhb8qxZANjmBZmsP"
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
