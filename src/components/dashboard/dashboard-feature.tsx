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
    "j6ghF9ocz7TeNKAM21gNkaHijEyUjPpDrb1bbzEPfLgiMdmsCkRTUN1qfGBMUjJuhgTGihhJ9DHH1SunKGatwqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rbAg3wsCH45Xchfsoz56gpN9V6Zy5iEm57J1RMQ6HJmZZtHTqc1wnDUH1XhPn3MhqjEsm2VLQv291Fu8pjLNVwT",
  "key1": "3iZGu9gv9dQBZim6LCSFqS9zxbYNJf2RAEX3SqUk4zsVnY4PxMVf2kLEXPJGLBtLBY2CmsnXvuhRbTMhpoDEXwfT",
  "key2": "5RPkacucf1KJZF6LLzPuGguTm31yXTnupA2fKviQXC18XWPQSnrms7atP56rPv2MzyXUw3sMgAL4fBYjPobK1UBT",
  "key3": "2hUtUtfu3R8f4zp9K86sRm1hpffBAjZsDTPd5GbRuTttR3ZBUNgHSw7PUuKAJtkaCJp8sZfBL3ebpPTku4CsYzXV",
  "key4": "5mhFASfAuJRehAUxZjvKg1DBNz3dFRStz6cr2vbY7QSLj7ETduRwkuqNnR7UyYhiAHRFuCLVUfCXrffQnwWPZFLz",
  "key5": "5Gz53dD6pTLWoLjvqVPqtd3uGFmaXLstK6FftuL98y4oR9sCsZaVR1A81LdbfB3aXSsdoqfGdCdYQv4iUexWvRtr",
  "key6": "25DR6Tb5aUSmcibnF5NVSbFhB8b6FirFinMJLBkcSVywHr8BouZtWmsNXzU1cZspx2isF9r49tzpiLDh89yDxFWz",
  "key7": "5gkCPvwqWXfgxUmt8H7UoxpdRb6GYb9U76MBpq5izJ7yLBw4Bn5f8EPPCNecwQwAXwSV7oPnZQ1ietmjBHVTPKVG",
  "key8": "5HcUt4261BJ6WhYgv86UuoHiDWW9QBneHxig9BtkihnwvfNYfyEsJBc8PHPpzeRPiycgQ6w8iq9YsQoz9SyNBiyJ",
  "key9": "5hWqXHExQMHhCg45243d6NsMZ3QJENHRUpr3ijd7sg4BFDx6ZAGEq8MckahxN8aQf4f3sHnNLtYkh3b8E1Rbh1Ld",
  "key10": "2XNmRLCmekjCJTvPra7czTCNr6os4hvyPKDeN2bKsuwBTa5ApxNUCSc1poUXmUy7osibtSHs9rGJemhe8dV4G1ih",
  "key11": "4AoJ2XekfyiZ1XRrxhJnetYkh9F4o1XezjaufFr2MG4kxbXteWyGWaV8XeGfBKVPj8ETtAvzeazabTtc4neA9iq5",
  "key12": "35TrfJNdFrT5aToDNGvUmacv7ABqaoRy3FLCbdAwDwGts7oJAtsQZCBjP3ppnMfmqHGdFqe1kpdJDSpU2EWiAcyA",
  "key13": "2pFD9UQujB1Z4ZV1VnqkTBf213ZDuhvQAU8A74ic4GTfdkDbDkc2M68bidAqs2bFtzHDNCArHtHmpRa1PNpegvZk",
  "key14": "5CccyW31rZxBvwt7a5ueUFtuYBqMGzm2XqguVm3oqqryWFXB9SHVRFpNBhVsaNqJHrsLoPmGxUTwZ7e1iaqmKZe",
  "key15": "BmTJXAhDFZhRcxZDnLGMXpUBSNEyjFaodLKruhc4NkocsbvRaBWqU6oUKE1RZwqDXFTXu7GyGz3UgGbMjpZnSqo",
  "key16": "4s78HZvCazR81nYW6H7HpcB55iTaMuzAVazM4RCmJYXA1N1Bst8oPkm8dR8N4q8AWm51TPExNkMZt1ryZHGRSQew",
  "key17": "2EGx1Khu75A8nvUMRcahcNb7K8WWhZUiLp6v3vesFDVZdjZGPePZxp6YE488X3KBJWsxYkju2XduGEaNWE1g9ag3",
  "key18": "44UrRnfFGrhtkqS3CduiekQcX9uLnHGD2AgkmvdVNQjibwV1emGSXPBWYx3L3y1QqofbxGCdqPuN9nogXjYvjFhP",
  "key19": "3okMgrkpBEB27H71c5YKWESt9K5bNXd8CRtNYeP4Jv29m5pppGpyM5cQTtPmDFh7xrpuxKkHuHBDRAP1yXsNEcE7",
  "key20": "ghRbJqULFcNkE3ZaMviBWwMz7ZRNb7zfq3jS89eVrpb875bbmPqraLuzgXFYgPucUykNdi8Zk3TuPgBZGQ33ktk",
  "key21": "4DrUhYdjp9Bq1R1PSWArs1jwTyffVsuZTsZQuNWGD4mcM3QrbUC76VYFAzdcNNGzX7pJraR17uskUhtCHrwgi13p",
  "key22": "66V1d6J52b4atYxDodPrpc2KfnLVbZCm4TcqABaNJAb613uH9J2MPUizdiMt6ykYXCMFvuLGKcRh8FFSmCQx16M4",
  "key23": "4bq5J86S3fDq9F6K7zmSLPWNEW7ZZBgpUr9GSTP7HPLKFvxH96DYAgFPmgKsMP7PbhbRSRN1XBrdrz4r7Upusb3s",
  "key24": "2XzH4PfSZ3zqxwSZPhuZJVGjk4UTLQ53awSH5BdYMt5jYWj5ux3QFsyrqyNvpA9Q6n7AUdUxvquYc9YUfnvbKwYE"
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
