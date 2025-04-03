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
    "5ays1hAfe4MVmrd2arZ96iDudW7NXKq34Bkru1YeHzUJssnJCfXToFKvLRnyeKhQE3amTknQMyKGLxfJNB4a4WHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CCoMEN3c1RG7eEJdGRbmTeu3kZr5afgdoXAPtX4XpvdoyypBx3fybYxfCYqJePToEMCVSodUpTdmTECHSpCR6Nv",
  "key1": "3Y5qTJaivSyaGjv7DoBC3ShXWv8gpQE12oKKwzvWhBiwMLLotg4uhXLW5ur5TLGA2yrzsZaVNWD3ZdtHw25SYmfH",
  "key2": "5dLBBKYAUeQjzNvT9duXJ2JKENFvzfpEEvniu1zemPkz2HDpVSk8e6v8KvchDsva7C6STuirb1gz331RJ6hYf6PZ",
  "key3": "aRQYyVvEp1xnqZnN2wPzad4LqqQs3NB3KSEj8UzcEWrLM8NHobAiJkFUxYVNGQh5FXTnTU9tFiRvCxuzzMHZWxZ",
  "key4": "5oXD81aom3WjG2kKaThWkFBynBm3kknJKpzUg1bLmH5j54di7LKLdwmTsxnyyaGNef3aVshGpP2FE4HT7FmvguTE",
  "key5": "4VR8fv7KhvdNRCUrrbpbBuuSHL7ZFwvMexyFnewoC3snzs8RvTDsJ38HhzNrRLP3G84CJKQSwEoJ5x1FLXrhxrTa",
  "key6": "43VXkraEUH59HEGDUhU9qdgobMEiT4wkuGEtPM9ZCber8unSLFGQBx2Ew2ohoJ1RJyUaF14JxSshm9pGAGUBKG7E",
  "key7": "3AkCpTL7QYX5pa7uimxLz2SziAFsWh8tbNvHg3TxSZgJgMyQowv2fcmiz3zqtgB9H1Br17sh1bNkCuYEAysKiHtV",
  "key8": "iW8FMcYakQYPjZeSnyoSD3zhMUAjNe5FA1GQ1cB5WcbasEVVzV2TUs3NSEFdfqfQQp4q4HJmTFYihBkzkWmb8wL",
  "key9": "29j2A7GwWVLg8Wta3HaAYMumiBAw1TfzqQrRkB9UpQuMiU95raUfGxrGp22Pd91kvSjZq8ZNhLhqafBgmqgeRjpn",
  "key10": "2AbGLKvDAhM4PR4ahvBuvrvzWy3mwcooUSB15xgibixPW61xmJrHZunyTMVuoPgz7RpAkqExjf52WV54kZRntgxY",
  "key11": "56fvggbod86wsKvTDtp4DyhVu5GFXAHrM1VvfLZzcA2HKrB2WHMugMVbS1KtBoXDmYwDcadBcJniNTrFkQgHvVGF",
  "key12": "31EwCrMRRq1xCLS92D26qKrYMZP7xvgTyCcG8op4Fj2ZBUt3YyUfsurkrnamjGsqJfwHFbJbdUwstStE1cyo1LBy",
  "key13": "2aYqijQ4bStGtHSieqfK8ftiSUGrZb596soUAEHtFMp2uGmLRsqAEH4sNU13z2uCAjeAaWR2xtbDPwXFYYgDobJc",
  "key14": "28SEAJbSZR2TMssUJUk3mcPt9H8HjE4p3zR23P7QZADSjrC55zwd5B3MNVwSugBUE1nPcF2BatcFEj4JaTpM3Xn3",
  "key15": "5uoVbyZP4amkCDDVPukehWAprKxvxbT1Y6rDdAjackXgGzmcjERJQBpHhXYR7TDkavxa9kBuG4NB5Tv2PEUeemca",
  "key16": "4pzF1BKNKY76SNciZhgtE5tt6shzwDJ2raHcac3TxQ1dNAkZVWFLiwveRKteAVEEyEQG8HBPkCBE6C9YwaLjUc5u",
  "key17": "67groudmVh7zemL55EgXxTsoUStqe8QSnQ81fC1ZBALDNHWe1ZA9G3ZAV8hDqwGYYUs7niVjnyTdxPFBTJBhaeBi",
  "key18": "C9FM5JAfChaDEuDQ5z76BKwBXj9f5T7hneZt3qATaTptVKEkTtVdNyfNxseCzXmMGLkWznMX8oHYNRkse1oZMbV",
  "key19": "4KmEiYgi7iLXT7g6v1JxVMjVpKph8EiEEYAtP21gm5nZQ5YTWs8PMjc16PdnTFn6dAoZJAvM3q89v9RYC7A5LsRP",
  "key20": "3e2MTbpCkCnUezzxm5eShGSidBCXAv4HfX43FjFTdatgsQDQChu6zvawazUEH7VmDnCXNdPkkbfmji3YSDWhWJQd",
  "key21": "4JNcS1LQLLVBoP1iRc6TDJ2vtzQvLgbWcK45WJ2R8xjQgr9iaNV59Ftb9R5HN5MTKJ6tVXr6Z7wpp9FUVo2AuUrp",
  "key22": "VdFnz98U7hxtW4ZXfkbaG7G7QPnDXKUvAuVYdwoNx641WkwZZRqF79CWw1ZdiyoTm7iYqokJHdQpDA9866tG7wK",
  "key23": "2jKFxrNUekTFVhjk9pJB4rqQjcWk6qpKEW2dcfE3SHwM6vve3t4FVKUM6BzwG28erFokUEu7GQ6eWg4x9xtZM6fG",
  "key24": "4wmdxp2j8ht4LHrkpwbF6ZAHxf4Q2aAhnNANj385YbhuTF4sMkpXWWU254q4hxN5anCFUJtL25y442SxwrRBkUPQ",
  "key25": "TX2y74kPmET1hrwBsvLkjKxiXgt8PYoEbyWtpTU8MiMPvRGajcsdDyRWwLAMYM5TyMxmNFnD4Xy4gowdPDoFj7G",
  "key26": "Nx36qAY56gbYmiRRcxRJ1KVRg5Vq6Bhq3uCCjEYmffwriEjpit5t5whLRLDnNeDuxZWgpgAczqr7BECxXdEXJSU",
  "key27": "54j7dSKBfSq3ZDu2RtHLZnNyajZQ5ipRFzSip9WF9apZLQNXKhTLDHd1Ykuzay7wQRYFqEjB5fb9yZ1rKuxPsNqH",
  "key28": "2J2bzktHSkPCugSKJzBZjLtjqEup4ffekSmkJAfBBM7Utg5BsFC2gJEsDRPFDCDYJFjmN6ysc71eF11P7BHFTYrM",
  "key29": "21NtDHcFymXudXwS5AAehQbazEE7jAsg97Hf5Yk3yEuWi87BJW4FwNkPfXfTKJhHRNARXvK6NckpHwf76Aq21UX2",
  "key30": "2H4NRpfxqq48P3M8tq6Ga7QFvjrPYge717fPw7HhmqhPgo3wN8n4kHoLmiN1gCHQh5MLNtKmjtkMFEaugfoqbiKG",
  "key31": "2fAR6ktEGBmfGu8rgTBh2ygZnJLcngWo79JXuD41p59CpzL4W1EPXXKRyfCFReiwvEfkBQm7EVrmrgLVc4KmEzhA"
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
