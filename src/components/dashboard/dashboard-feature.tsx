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
    "348iSLVQabMNB8ixKAR2ELCzQCEHBXhQCiv2AJ6egrf7pvpLRBUWdfMXRw3nyd79tMr3c75b764ZGuJDLGGUThhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KXkd4iqM6AC7pBKmUEfGxrQvi4xQahEhXBSFFx2uhd5hgVux6gapc88T1ztU1CaHY3Hk4TCdqg7bEwWvaUkY6N6",
  "key1": "CiB8YxVmYeE8dBEEiYPtvU58wvRjUXPi1HnLFRkvuw5Cnj9jG3mbB1o8HfM9awp47tXu5NoPUPgkUSNu5cfGRNU",
  "key2": "2Mo1FDZR4GcsLNg5yyBAo93caBf6F2X8nV5H4DG2eJS7ryiJFSMnAd3HyTo6mC2H34tNGRUTgmJFyh3FByt5Eurf",
  "key3": "4B3e9hMYQFRzfUc8GQcNyghrscHEhEJKXwfcNQDVwUfbR2MG7mysjcAC5aNH3nCWrTesbbK5LK27qJzFZsvNoj7s",
  "key4": "34tdqg6zDVkjBL2d9iPMqde4ciMq7MVoMqart6Qw1QMJCWZgqF4d9UXcD4yjNZ971Gqamfv1Rcia79Fg2yjJuTcN",
  "key5": "krG723u11pY6QNyBD9L24e4pW8LuJNYS4bajRRfJkFoCRqXyhD39noDfttw9y88f2Hq8dLohSmLq96x75zubDM5",
  "key6": "K9QYxaDWPAeJWf15N9xZEYS2LB8dcoKsVLwMTCiySUGBkNhTDLS75HTCHtaJS5STXJVV5xZm2AgRH1LF3Xc1LGc",
  "key7": "29UFaEVDTSHMgKnVaH8CiD2RS8Xd4fEcW2ehWHo74YLVSBJQT9AS7wduukDvfFf5M5Yr776STy9dChxcvjDnRwzp",
  "key8": "35JbqoyMJxeRRtpwyZX4isz6ovrcThPrVpiu8Xh1h3By2EhXVtwN1eXJAUgQLD6Tt7wDRdcFNmTVcvpbpRZ5hSHw",
  "key9": "3ShKzyvuwaz3dQraAVtXSxsqfmgqo9gvnoUQGW4B64QfJN8wp1gzpFUo9x9bMXsVknkpZpRf196XLw1xCGkWRFvK",
  "key10": "4nnsYJtgKtuUnbivp9GK736xjJzKaQhFjmtQEpjerq26NqtCGycDTsyPhRaBjmChYkD6kBxe1zosUbb7ww1DnZBA",
  "key11": "4WTXbrcKS51RYwFdg6zZLirxbkfonLAMXtXvVc7N1J2t3TaQtK15LR68WcWanxknUyAir2j9eb28WHeesPuptZYk",
  "key12": "2cKSmnk3mRuTtKYk545J43U9uoV78dm8Hh84YLtNUGYuNpEyugq1sthjYmAt9q3sPVZJQH5hKhqcsWjmzmjvuBhJ",
  "key13": "4ty9uyuwR5obzJ7z8jnpuwg5iLjtnZ3xsedRfii9pyQ8gVFJS9oe8QvWP4fjPP9B7Cug1igdP1C7ueBeTcxc2NJx",
  "key14": "4YwsFB6arFJ8wL93xDHMNDLKNkNxAL53oF1SYirrK5shXw2kXCsprqCSnAheMhsGgskntLvjd16hd1dy8GddgwTp",
  "key15": "57YrGPRaEaiNxNYAgZ1Qjf3aNwCsczR7Wg6eWYW3MULnMZDKt7pn6kYPRGETnS6umEivWawGYv6VYqSnc72DGdsL",
  "key16": "3LN4FEHeVq87GnbcdM7hVCqS3vB4tW6DPveM2N1yM8FSoHwq69yL2KXug3pHGc43JfhZo58d1s9WYEMfUDNSJYDb",
  "key17": "3apFjtwGRqESooEb5vqJ3bxronFNSv4GLo5GMSsuDUvVXPiE6U1EmBT8FJqJZqiTqi9FxqtcfDVZNFPJCyqnkXeP",
  "key18": "5rpK3fT1uoJTw4KcJAdiZbisRDDPWgL6yQby7XiBwVViLNKwk4ANZEDNC4xn2XmpaA12dhgtpjrRKAcz4CNpfvVr",
  "key19": "3ZMRQtohvfB3FJSgXTnLMeokR27cNG5s3cXXxHHbQmEaN59cqBfLnm2r7wSCnLQTjnEmgULuyeNyi2F5ngWakXrb",
  "key20": "5t8334KBDi9wxJGo2xdVLcMqRCmYTqzN8jWthTis3jQXcjR7dqZNPfsTDZYNqKsuAK6J7c3JUNTDqRSr6rmb7VZh",
  "key21": "44F9jYtAUjXFaQHoPQr9HBn9ia51VEQs5StQ7fmWo9DtBRWqWDcUYwtR2nuT1mAVQLXewjUV3V1q6KTSfTDqtjir",
  "key22": "5R93DrXitGirb4LpxSLY2TGnZ4XW25bTpGmvsHE3fG551ZfM4AjAUsqiw1YS5nwVqY6ihvFMNPyhWedcV4BzG1av",
  "key23": "5QjvUEHEJVaSk5oyEb2nmWsF5ADaWxBSmqRF76yrHPFWnnQY2LTFQk6oU9PbKokkezxySHrFNRWPybH5vD6LNzJH",
  "key24": "3rFQe4BrvXpZVKEDCQcNeCaE6LZzuo1ULiiUcJGB1gRyaAPDDjnfz6YRyEFuNBpCbwoj6QkbqckWmomnXg9LDRzR",
  "key25": "34pMzej5EghK7DDXpirwCoGJP1bZqEVywbDD2waQxKssmYGRZ2spzuXW7K3wkAPwbdDBzGJPu5xEaTaj1hdxZnhq"
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
