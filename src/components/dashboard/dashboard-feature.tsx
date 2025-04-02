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
    "3dWVtL2ePqrYZMrgt7QKuTHjsBvj37XVjLsUKcmL6sfzVKr3inE1TrGiTPSWt6yKMrHmv914K6KVaTTQJLGvUaGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r5K1yEtHxQZEBJQYrZLDKWGXjw4FPUZMoaCMQvhzqRFBnzDvoYa87dQzPg8DgKpMXaCSHXrUCsXDKykiVnzRND",
  "key1": "pd1EK4Y62Eti49vf6YQxisHdSQ75wesQN8SLgi5DemKN33QEGUVNFmi2tdTXFRydzcYWMig3mznvC2YdefNsbXP",
  "key2": "4krjqnBqHH1ca9aSsacgAnL2cXmrAP8tC6QU7irvQQQNzEypTv2ggwf1ouUAzbvd6uVWDzNQgQ3EAny4kQyNQoeZ",
  "key3": "2xaHR22GE2qW5CJkAuucJQQENn6s93fDeuoV3WXNkT7enB1HpfNUDqZUQEpdV26QeRM1jYxyzNisnUzw9k5MzMUm",
  "key4": "5CmtZA4krf9ZYZq6toV7d9KG8sueTJq2Lu3FihATrQRg8KduDuF4exk2ig2pPd2zbbG8uLwbdmaEhwiNWoGXirtz",
  "key5": "42w47AaLuk4qDiAVHrT3tFymQRwS8xY1LK8t157Sk5Q3UdDaYCfiUwMEx4UDPLJjWdMJteXQFqeuPuavdJw3PQSB",
  "key6": "sB6jiN5o2ZcPZgFcrTqmQfAo9ehZD1PezYSriLGRVVUickEoHGy28jdbS144pKMK96CeaDGJZfdAXJophKFdLZh",
  "key7": "57v5ZJqDXz4ftuAtwdZzA9QRZ5NSieiZ8qTjqwnkG7dcUm69ccePP4wnztATQWqiKt3aBZaz6EHtMVS3TDTB1es2",
  "key8": "4sjkdnMeMXHnRtPswjA9X6UKpwMoNWvhkyyVBdKJwU54yhHR3zpD5VWVaiVbe1LUf8fD3TrGBJEktkHoaaJaMKZh",
  "key9": "2btC6YATjmkxWjYtbwRsdKb2j3E43Aae3DhtXydp5nhJh8aputbzg8GyC8grYJxy6rRhDpGyWMHRR1k691dAv7Ks",
  "key10": "35npbXLwwR15JQgNxgheHHSL7UWNxy1G3of24kUVxw3e8RXXPrUdq6zM4Uou2nno2G5ecf5q1TU33GdtZnpbvCUx",
  "key11": "2xFFsuLdBU19ucFPrzGd8tmMAN33rgVQ512hk6FpyaVuxf6Qt9guv6kPcDPUYKvJNQ3sks66RghkuPFV42NxgKf3",
  "key12": "4fdg2Q1GdN3ZvtVrwoNBkWydegyB3SCbZALHQntCtCL7jm9vs6NJrGRLvWmhsoYHTKSMNt6QRd6MkSG3TkDYnd5f",
  "key13": "3TdEBpFnx54SgqXp1u1c8wChjArDbihryAhahG9xWJ14t8ZjKjnAZeQUatFerGxcbe7bgRd8JAxFc1PcrifpHzNW",
  "key14": "2QFJN5WjJCXBQANbXQGKdtUbsyXoLgbE7End2vHGQGRLFxmFzJPq3sWMFP4vfSCGFJsETQvRKdrhFBfv95SKETqA",
  "key15": "4zx8onecxyFpcDPru31jeixeQYti8dVuL6xM6t9wMswVq47W45ppeG52aZREbNEFASAoXnpDA4rGvQHG2rMCRrHL",
  "key16": "hTzuGRMNCZdj7M1Fw24BTDsC5zbgwkgr2KcepfmMW7VvzATWcbyKW7xF51xyY83haT9ZA7diMEgVhMS8D1JDLeJ",
  "key17": "3TS1TtfF44RHkFcjEP5bBKR1tm8k1CK1pRjHX3qTQJzzxMojBaotKD37u7W2dLejNi2AaYm9JVpPhxf9253TrBFm",
  "key18": "5js2Zxd48ptRanisprrXkDvTYetC3uKQPSJTcirWSW1ngnQVwhCyPoey9Q9BpxFb6VMRqHibEVukVGiaomq31VhP",
  "key19": "51RnGmLBctbZoHgGEuy9JksyhvubEgcb8GG9bgGtbiGpQzYALvc2k9wfRtbfjvBhy2wt8wPRPwmmhrscpL5vb6L4",
  "key20": "QTBVH2mBquH5DishjKpsz8j88S8aCyxWZmCfsxeHG5ENHSd8wLs4jKVXN1sbaFpUMPyvH9d6HnTKpWrnDWSdXen",
  "key21": "PXCAteBDF5BvH5SWdRMTXf6d8kcgGT4mYUFZMBDJqqYygoygVBNcBN7fNs4XrszVY6z7iVZbTtVxc3dGL8nCkBZ",
  "key22": "3PAZFsfivgefvnr87ZVbdDkSQUwdZAH6oLT3QoR6nk3CFoJwz1SgYXYPSP4NjoyMrA95ePB6Ka9umSVjPmyPpNRj",
  "key23": "mQYmZZAoJ9Jp82gwJyUeuK3rNegx1rzG81EJoTGXsSc2Q54BpAe9vnnKu7MrZTKgxUy222cgcjoAcmiWPCZGdCx",
  "key24": "4nUxmj4q5MqC5fVbYHrPS8MwrLpU3afWqAT9rcCG47drrXBT6XfaxPa68SrJt32jBVPsE926P8oPkRtoVJV8e4Mh",
  "key25": "4u2fBKKtzhb5pimT3dkKGaS11A7kFg9FeMbzCNwGoQqSdJTTCqtsxco3LtTeHPNwuvU3zooiwkmY48mNaqfSA8G2",
  "key26": "2CEMdzideJbTWMLuYSwzpFmkWi9qMhoEkRe2X98PV1E8FbSfawbiKTabddneEE23fTdk1QoQWbKMAK4rUV5EcXMh",
  "key27": "4w4wjP7i7zxgG44uu5GPrMTxXu4WUPmoFXnQXuebGHsTCMjVQiqfrmwkqXd2H2hzkucQXJFKGuesG92CadF1uptp",
  "key28": "3fkVdFp4D1ESazB1BnuPan8R7m8998hMrmybH9hn56dc3LGAXnZNAEyxPzPKkfT26TYzziWRHaTcYKH3FAbGsBn9",
  "key29": "2cB2D92am3ff1gt3DTSipP7AiqHYhizZ6fJ8JzCUEJjKySpGE1ThKr62418fv2xZvvyUfG2JJum6HfgiFKCygugR",
  "key30": "3yquEiK2zaaML81knGJGsoSs6nLRWW1oXwHHiAKzEVZ51ns2dgb7oYo52LqFhPBwE2cerSCktQfgreffC7aMoyjs",
  "key31": "4CsnqgJ9DXdpZWvkEqYi77ji5n9nFrJuzi1wnm6KTN7MFTRj5W3EByiNz6N6QoURhpDQ5Vv9WPKevikfWHpoy2F7",
  "key32": "5DdMZGi94Sz4awUyFpCpqPDYkNrwvoZ9B8So1DRbsLPHcLs1s5c3WoR1TYG1NjJL3W3Qb6gRgwRe1torm3uMsZgS",
  "key33": "5GpqpfcP4D8sWvmgTW4fGaRBJTSsHi8V1ZZNw4CggsqZVySVMHDSa4DBC1veqKwBpAhkqSeiwmcxc9xjwQtfiHkc",
  "key34": "yKuSM8P2uqdeCwZTXdrhbvLsSY7gzQBmFszKrsivuwsXdzKtpEcgMDMrkfS6izzox9pgkE7wrUJkp84iGiWmMw8"
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
