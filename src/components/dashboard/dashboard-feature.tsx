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
    "S4vU4EDJSPdmYX7gc5BBv8iBhCn4cXMLK3wshgVpRSifL9HqAueJNmEMRKqb5d5MYrDM45AVjokTZ6iHsig44mA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EbGaLkoSLLjw1KTeP5YbLZageoScmprSknXDpDUXS3ytaHakfYX8VMBmDYv3KF6uDEbX7fzaaKkVaKdTCyM721e",
  "key1": "53VuKvpQxZnY9PuUFzViPyGEKRSKRqCqha4zvXLWUGwFaprwrAQcudwA8ab8NhppWhRt32xkqM21wdNACVdZ3i19",
  "key2": "4PjC3m7V4HcbdQvJ42o4WiEEyQrbcQANeKjDSe3NWoTe4Mh949PGVmebhDwxvTV9rnns9jsQVwThNVfYZQMxvCq",
  "key3": "5u2H7tcovDMLRyyCv5bDBLc5tczZdpL7463ab7fDjw7v9UDDpVdMmuL4fDs4Vgz5JKhAwMaHpbJS7C133cnqwc1z",
  "key4": "3yQz3Q43tjzbuwy8YNKWmBC8dASJvkocwh147HxyJeLSPajKPWQuMK7SkmPRTXEu6bYACJ39QEfYxwkt3Umehhxq",
  "key5": "zrLzUTPaSwx33CukkBJAFQ4m6zjpt1h8YBCgAgNmZj7gLExJudetVavGTe3TohA1FvF6ho4g2STPN1ioLuAa85o",
  "key6": "45eFDuwHF1akCVvMXryyp6JuZZKr8sfHmQxVH7NvmCL7B1kT1qq1UUdrhTcd6bdv4dsSSXHcgAarGcKFTJe2TooT",
  "key7": "thpCQgZ7AbgkSvXdVenbNRCzL23QUbaag3r8DEqDxqeoW44iayKedBpaSrmh5TsDbgHtFR6NP7xNZvpinQ56Xef",
  "key8": "5BibogmJFnDVyTdRbUtMLLp6vrGNFUBX7h4QBZLUhjwwPSis1dLZb7Zy1ehJxzRDmPmoVkjgSMrPXjcJrSmCikK",
  "key9": "4y9DKtcsFidmSfrQmvmbvY8AXAiXEx764zPXFKWq3yYahpNdU4ZDrXjueFQJk4EFYvJEX52FsmPzGkfjUgsnkCkw",
  "key10": "2bafoxTbtoeLZn4hEh4shbJFZNDZ4s9sp4Wdzq1C15G9VpfAEjqPe7ad2e8hZypHrSJr61SAFj1FQzFGmxmsRApZ",
  "key11": "3UFobbXBYv5mLKkJ9264fDrUrYNKpmrd2f16tQMngNTN5g9SQzhpX47b1XXcjSbiJ3DNxmHmgABhjBHakFqjrEQ6",
  "key12": "5xv6XsmSAzyPytAysdcy5vqo7xBn4nHjavuUQSFg2TQhbeTxgssizsPmWd7EwPBurrYa4jZRXvqeV7L5TePixMzk",
  "key13": "4JMALNYL9btVSxX4UPXdYEgDLDUUxZ15zLLhgJV3qpMpTEFnN9dKGjy4Z6Sk8Dt3zFAgTLjMbS89ShZxf1is18yc",
  "key14": "2LHL3HMRkV86bCFqi6DxMkypKefo7TJsN5BLh8PvMLnYgPciwM86rtWPUvY8ubEkhRFEfzzMiabJan5buhJNXdij",
  "key15": "4VPwDDmFXYgySVWg5pG1vzR6n6D8vFZQZpsQ5CTd4y3nSWmt5geNd7vr9BqcRwhdSD6eWr1rEeY6e4HD4wtxPgwr",
  "key16": "2Ct98VDR2vzH5LHg7DNx3LuVAURA6aRqNFy2e8wrGAaZQETDRQ7MQ4hciQ6XJcY3k6bzt6d95mtqX9Yk3T8Mch5F",
  "key17": "4vRKPBgMaTYHuZZz3AwxSWyqKvNSkK7kSuyUyZ1dUyp83Tv9EsNZQ2ckcU1KM2LXWXDCcabs3m2i3uUFsMFnBnnG",
  "key18": "2T2QvonMmFixbmjZ7hpfmz8f2nSGb3S7Q6t6X9am12tqtXnrtLz8H21qAxk4WJhBQ9RVvwDshKqV4sDEMwfufp9n",
  "key19": "2kQnDAvfc3dc39ZLUGkbCkxhvU5QNkEkzANP6tgD9GoLzB37RgZiQyCnBTENyFUBLXbd7HZyL3kUyfYsmVmgwxAE",
  "key20": "5rCZhnaMp97CbysGkNrt7q71EyzzeKsaT4b4BbNAkU98tietKcnr4wbZwZoRiZxPMn8dA9rvQgkPSZzs7s3asNF7",
  "key21": "3f67MjTwbUdcp15aKkp3fVgRBRjhpf7bZZJLLLTpygNGTazoWP4vCiS1ek9VsdyqGdZEDGPDritQjTAN3CvvF7NB",
  "key22": "5BA1otCkNBk1f3XLxqVxzLhmtTHHEQNEnpn3krCmpAEuqA7GXRXYLLnRADvjwv9uYQ9GcuukLGSe9Vrc4n5Zvajv",
  "key23": "27ZHJp9wwqaCaR43kwR35vVUMvCxtoTemJbM11s3BBhrahm4rNc3GpBn519bKmzXmJdFadEecVvUWtAUHkcV7vvf",
  "key24": "2xSppipZB2yntjmJF6SBN9rrFgZuqpmfXdmHKxaU6EFSzmMBT24goJgKCQh1Nnvwoh7kmPTWotS5idzhyXcZsf9U",
  "key25": "4zFrCmya9ESmuqQwvDabm4KxvWVWkDjRRDcAgZ1ySGAwoZmSyoRyGtC7DtvtL7Pno4G6vHoYn3qzk7ekNsLxAnvN",
  "key26": "3Sc1u3UcSfRHyLCa56Kq6t8uMbGsedSCcpaj83uduzEapti5gBsn5GSAG5qNJB4dkZnovi3neB76BjoQgszGpkFF",
  "key27": "3qzyXYEHGfLfVkyCVsgESZwvPcXXCtLbE2DnQd71H4XXP46Fk6erR4keVsF3GtUKQWA6J44z3vAubVZ7YXkmPUbi",
  "key28": "4T7YAUhYkJoCfMFNBTeAGjcjGnsXsXn7YrHW1hRwfdLCRvEyFHiCzjjtkeXL8CooKxdQ179m6iKUNj3zcfdPd92p",
  "key29": "5JNDdXrHFzHZVCeY4dzKWwz9dAsTLzHmj76KMhnePQw8kjpYXSFJ2Y8x2jpVjFxn8vAGZzDqBgxpYbzQzUPG7L8L",
  "key30": "65hroC2UVCc1yX3cUgAgRatEneshK3dPgSPw6Fbpt5p3uxXh3usAZnLuEVQasnoG5X5ztCjpmqoNep65qJouDxon",
  "key31": "4ErPuwemK2ZFruMAaDqgWYQ43vfkE9ZS9x4m7WUtqvKGsPpKXnKFtGMAfRPiZRe8VPSPLduXs626CeLTtJWmGpW6",
  "key32": "4dNWoKk4g6m62iH6dAS3DS1pdvHmeRbpe4P8kHhrQN4HcvqTJvHTm47pL5Y5CKpn88joNZcfuL9vvvyWn4E9gzLA",
  "key33": "82QJxun4voqWGN34YeHcq3e2GeuiBdi1qYzQyXigghPMKb7L4XjfK8uE5D1aveqGo33TFjpvYFd7BKoLbTEaU2Q",
  "key34": "5nH4eCbU7sMvm7pVqLMvAGXV7QE2hDSuJ7WouRTM5MFe2kPUQhg19QsUnbwgZpC3QnXWNH4aNTbgGVxHw8ApDutJ",
  "key35": "5iN1B4A8KMFVwFfkHR75YbYxfDbp144XNL8ZgAoddN7PPFQNX9UUM6aimgp3N6prWQyX6iVPbftVjqA2DhTLGivg",
  "key36": "3zyZc6R55cAUbZiQoaY6TRDbmKJ3nPyouVFuPsNAHeh1ogUabthA3smkWykeg21h8fBiGp2DQdfgtTdhZF2V6jLg",
  "key37": "5ywS7ksyvujNRmWcRSQaWYgym5S1AZSHQcAVrS2PpbGJdMfSqiF2SNPNJALMwX86Udi8P8XtTVZbj8tP6bPTu1sG",
  "key38": "4Kha6d8CSFWL7Y3CKtZUMBF6ayyxyrWc5w1CBVkA89t22ksGNT7CmSfGcxPP7VpLMaz6ozSg6yPQqoSMSVVNbrz8",
  "key39": "58AfAT1utUpbkgPmJtxArhuXeDqALmH9j1VwNKApqFzueaFxCi3rpZD3N6b5zEADmVwfY2P1i3i8Xg7rv66vLggM",
  "key40": "wZXJ962wyPsrxTUYhB3cmsEHbzXkxthfChoz29M9FSCcJsxKoqatHayqxuzr9TLZ7fjDGWE3gBRBFBRQTqDPyLU",
  "key41": "QpJThfqNDkS79Ez786z56e9X8737vcunJv1aVvvYMibG7mgHFQ6evnXCrcUFMByxmthuiTsTzNKy9Mgs6Q9GTjz"
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
