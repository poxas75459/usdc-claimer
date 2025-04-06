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
    "2Nus9pqr2HX77Ca2t3bacixLPxNZ21yEYcoWwTTKBxwzhGB6oJsThfTiuXEkWmYZhCsGaqrTDN9W41jkVDV4N79q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y1YYivHtK22R9FJPmbbfvvbK1KEV7FCTxPioTpxPN2u2JnS3WqT6U9os1VQFawkprzuWpeaKARsZkrRzDn7BZgs",
  "key1": "5vXQpnQ8LcXDGtPfRu59qcuNQ6MG8KH6jmPKDKaLQwPpX99Lmic7n4gpW7LJ8hoHx2P8s3UmmGF9Rkavu3WUsbwr",
  "key2": "3WCqg3fFnqQbsoCqzRsdqMWoryVG1RmyJRK3hwHMajUCVhAnG2wyNsvQXWZrKfDo3ueUaB2WVqwYFV5hfYc73Qst",
  "key3": "4CMvY8c47qFt1M1dbNe27C5LA9qs8cnAz8APxG89QscbMavqSW5RA6Vvyw4ixaWLnSsXeKDD2ZCe41uw5Nvnqvc4",
  "key4": "5qt7emPs5ypfckvK8NNZ5VZRuvi3RFhBP87iF6o5TipP2FwZx9WPU9SL9NMjC9MSTQ21xWPn88EkuoQ1U9ABiDu9",
  "key5": "fnA5TqwDYgfUSxGoDC4GKbnrp19RfqrTskhmjURCG4MWnQCyrYNTvGWwpfZjAq3DkQCzBAWCPr16WfJnosKZfQ2",
  "key6": "vBhQXnMYYXqocwvmBo6ruk8e7t4cx98YwLjcRpsxxwVVuPgESsEBeebCJ5dWVWa4mrNEWT6UKi1a7eLC7auwpqo",
  "key7": "43Lr5F5FoSmzPvG6dtwkPxmTksDZ81qaMuGWwGv5y3jjwS98FzCXwtpK594VrXVXNcfwRZH9ETLTtQBjkohsg6Fc",
  "key8": "4KHMhBwk9YLfyXEEAdXXbvdGrNEp5buJPB9wJtyJbyEEu4gR212CuQvDkkUaPy13wpe7zcGyQDpq6w6GDmCXfYac",
  "key9": "4G5sRqpyadCVVcGFPMtdFzN7mWso3pQqLqQcucHz7tQmJ1p4L6Xvd36gqPoFkAxqANPFHjBDM9JAFVH6qYdLUjc7",
  "key10": "3XKy3oMB68jWmCetW9RFT7qJaaK979MC9fki9gka6trrV52fFi4Ykn98wztwPxHx8nZUZJ6BXuQDpZknniuSDsj8",
  "key11": "4GVnkZ3BjndiaKUGtRKzGQzRxARKeuSwG8aQdFHKxpNxdEc6KPyMZ72KEu4UKjfx9vz2XojE3RDpYCnmx5z8E9ju",
  "key12": "2iHUAj2wu5w5NektA5BrQQUgSvPUy1RgEg4pCD3gMXHkDJ2UDqZfFt7SN2pRckNJdNGYESZw3Gc1LdGpHpg3aSbP",
  "key13": "5UyBqJUEcjEK34iTtLPRkUTjqVQc2NNajh856RVjAxxYRFPvsMq5qnccUMGhiVrKVfyFRMe2LWbGcT41MyoUYKHZ",
  "key14": "3ctdrKSYfcmvDH5KQhetbx3dB91mSc6J831DasF79LAD3tmRMfQ5R8hNYU3BYX9CAfxFqK5dFALiKwkiAJ7dU4gQ",
  "key15": "3V121xQqx6WefMaYsSRbC4UyYihqV48eHUHMVHHmprfaoEHQLBbRPqsBJfsb6Dz7xWU4Geuu6Nf6wsn9M7M2JMcK",
  "key16": "mLphhyriSs8GKSFUQoUDi1devGM6rf2R2ng3pScGVTgh394CyBT5UEtXnwSNaeux3MLkqMK2SaJg4BcCp6Ar5HG",
  "key17": "3KqjeBoTi1K6DC4vevdfsJgAhrz554CszxCK7K4HA4fcs6Z6V3YPRLxdxV1Tvquu1kEnggYJVMeJh8tXaYbktN1B",
  "key18": "4kCLPTQaqfX7dTxUVkigAvY99kPnsSmDjDprokAE6AvbKQAsvaM86SBF4GGUqgps4gnsx5rwua6fyD3YdXWmCwq1",
  "key19": "5QhKHYYDe2v2ouNxEg8CgrSzPsPVpsEfWU5Tg5TdkuYcopBxwj3d7j5TQEy7rfNcFazqh9G2SkMW1LBWffxsfQvS",
  "key20": "2YXBBaaEBdXhfSjZZRSmnSocxsQaeVDaVatHyzgMJsvByNfjuxJMeV2rYjqmb8FeMt8qFh3dvd84dKQVHH2kSM2V",
  "key21": "4ehhm88xkQxdxH9nztSBWMTgD96QeP2QK9dfEutEiPLeqXLsb1yorWVhnzMtXU8P2xkwukKqE1EivkzfpP1ARjPu",
  "key22": "fXco2KotyEm5Lo8qHceGeWJUJCP4cL3wCTXU7Se6D52WEWcQDeQFcyDzanHxMcXD2Mfj6o7GbLs2ibv8AEzenWS",
  "key23": "CSg7y9FCv9xdfkVYHSV2mNNrsyTLx7X274GVNEQqzuF6ZZLhc5p8jvG4kAFXALqZi6U1XNLe6imxgctyu7BwBVd",
  "key24": "5Y2EVRoL74S2p6mWWvL8YFxBicopJTHeQKveJh6PE5tVUtexG8uG24FKmz1ZxSe4Ug6XFhjbzojNTpqMjVqeurw2",
  "key25": "2S4NSko7ssKDeEAPLbZWP3FAj7AtRXDmJqvVHpURuUa9STyGtCym9MVCbriL9Vv73TDmDFt9qST5UdofSZEmpTg7",
  "key26": "5Q4yqN2zkeVM5RHdw4G3fetsGEYoUJt3GqDHsGroQJFDJoUBPwnQghdqhn8e9vdQ3vf8oKA51N5QE5tTstpPHT8L",
  "key27": "5xWD8RWGTGwB62zXMBznhdsDRbqjRXbAxo4DhYNJBGzp3fpSiUUwonZFPm2kMJkbzTC3TojFHTRprmmcTmWQokRr",
  "key28": "5d9BcgWGm6y7UWkd36jV34EjZ14PvepXJEmSFdPw5P22KX3td94PcjSLTgoKeL11578LJLFNGxgewj9hSYdS18Cj",
  "key29": "cVp3vRYi5TiqmGzeBdnxAwPnWY4edTUdbmo6A8GdydbKunSayW4ss1ydAHuykpoCDHnzHvduhukeZNUjSWSCRCc",
  "key30": "3UbjrkBU5GgqvJpMQ26LfaKNxG73EBWGjQNFNpKbbNtBKsqBnngnmZLZbDdxXhvoT9kArjVN4oeZvnzeP17kfVCR",
  "key31": "52JHoEpMfE8okLzwBd6qsgjhVXEosD4eWeZCA4tnTJ1NXxuhbFkyyqm2DSdCGt2VCGcGAek7Y7EGWwmBMxxeppNj",
  "key32": "4hXLoc85v4a8c8zavVkhaNA3UB43jesM4Wx9ETh62tsGZfLHSxiEQ5L58rawWrLzBdsqhfkwznJAtj3CPnxAuDjw"
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
