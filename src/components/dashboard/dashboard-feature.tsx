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
    "V1fcHCu3H8cf8ctsocm5ETUCDVxNTaapAQD48fs8gcrX776VM7VphViYCeUAoMEncX9mGWq3nLRd9VYRgR3rLLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DCUgnEjQitbzhLTVU1621sBaLhoTQYigym3HyFMuxTJQfXzBhTwtZpPjhVUoHFMfEbfX2Y3zv2aSoS4GCQvfgfF",
  "key1": "5JqqjZTFQipPLEkAMq9grQGtu2q8qpStH2G3LTTwDvW4nQmGUAri8XyUXP9VX6G8VNzXYj93AdPZoLHZCeGMrwn6",
  "key2": "5LSk7vM6UQDiCA26nypyCNd5oUtgZcp17Kg8jz9bNLAwmCHN3UdC2Lw1xyRjttQ3i1TGzLZSYRTDdg8qxxu3upmk",
  "key3": "3muUJKeZzsRqX7RTgjfzfnkcrDDa2jeMNScK3vS61DvbvyvRhELcH9DpbFvijWd4bAM7Z4XsZJhJyzaq1BU9RUoP",
  "key4": "32CtyvJBdQD56dxBRBQQ1GUbSQZyGxugM4byJNg9RbtykTXKwuKTx3aDm9fZcWhnJzGqGRVN6uVwqQfdWvT5ezUR",
  "key5": "i5pF39RzMtRugUJ6u8mc2p2Tu8uc7j6SWGdeSgSxQZ5Aw8DjJNbb5y6eoJ9EEe7Rho4kiup6X3MFchZARdKwywm",
  "key6": "4Ptuqr7PwugSVURKveKBaM44RW5HVYkX6U4ha9yQ7K24ugBcp1SxU89D2hPDWx7ewtMSyKHuTQKjvetP77Fp2rd5",
  "key7": "41VBD2XnXZyYS3RBRVtcdBQBoTix5wm9xpiCPTG2UEZqpsqcrhaqaayLX6kSaDWY8fS8h7ruP6EEUuQ17d22obw5",
  "key8": "2JxoKqiRkrFKHc176cGktubnmnsxWtfZJxCBGgr6bLSKcAmzpwG5j8pSUW7Fuwso6SdLhp5bqd2QpFRiRAszXLeg",
  "key9": "2FtjGWknQy5aiQshMPqXMpjdHzC6Ktfx4UcV3EVqLNC6NzGfQSbbqE6kcHdS7Gaa3MZjxmpeJ3SCti2wSTaG8EzS",
  "key10": "2Wi11bL1ue4Ud7AePn576B2ahJ9NKdeuB8fRwaLz9ZNaq2BbWmpk2wNrg1HH3BANY3x2UhYq42CoJrmGg6bdhcbc",
  "key11": "37mj47g3zsWEtibKWfJQEfvHtyyDdH6SWfT2TFThtgwV4HrEQ7rQfT8pi2tTtXK9UZ4y2yK1nxCPTofbxKfxa1ES",
  "key12": "2VWUKudXTpmw4azSWT73xoWz5AUH12k4E15qog2GopofeWST85fSBF7ko5RMwTDhwZct6ZzkMQM51mJPp8AVkedU",
  "key13": "2yT9wmcW5bqd6BwUHFwuHJwxLPBB5yb7rrSeXGvEg8NmjvETzByasGUJRKbxV8eQLa6uR17EVkisTVpDUp3wnAmq",
  "key14": "5wpij458n5TEazhrixhcC4D4Lm5VEEzQg24DhYasGgnD5yqcMMYHzSh3G8ytpgytfXF7eVFbvnEfgJXRpGvi2Dab",
  "key15": "4hNCKt9scEZirZoqrZQqcZCuCwG2S8sMGXk9XNA5tMdZDX1pYDZCL85diRfcTTsC6M5GJ438JHbBPUmk2vHV3pKq",
  "key16": "5BZ3mdexuWpWSNQSpYuA9LafGF5KS4EZGBCQqXxeEPxj9B85TEeYUfZ98sLvjMStHdgH8XHAVpauVqQVuMt2MuNS",
  "key17": "2gc5jrV9hZ1KhXBj8PqwXPek7N7QcNrpP5iQ6GNX2zqe3UTKWq18Ns18dboJKMwcvpdUSiyZXkNv3aCcNK7iDau2",
  "key18": "4rNhXc3xNxq6hZKfoMbBu8Jy8ktdZVoiVtPs5ssAGWonmJJdcYzyYZUwZPg4dGsrppN5KCLCyt5p9GrMcTvy2C8i",
  "key19": "32zdEcccy7uoLxS9QSEyXyuKFAcMLnkPz4T2RjPi9j7Jm7ByYBSmFjMc4rTf9jfxW6VGzSpH6C5MZkL4xCrfyuAj",
  "key20": "2gSE5NQe1Cdw4UFvRbY9WTAYiE9hKjcNeYHKTaSpcoPfj463D8muUR56ygviptnGQGjUu6rXvQyafX477Eow37Nm",
  "key21": "4aaejegNrNGAFpdCRQWqPM5vQkgHmC981PZx6mj4kdKFnmL28djaeyh8ms1oU1zhkdressqeNuMqL27V84FmKYX4",
  "key22": "4CaBvvPUSX4BAbkoSHFe7rQYWVGKypDjp6gqvXsrdEMnNMDjUupthTWSnfvqU8xeijRtccbTqchGWq3AXF5AECXH",
  "key23": "4iWfXY115urUp7pKy3o8pxLQ7p3FPEUJH8XuDPth3ezDrtBkbLXPDU3vwhee4hRjvws5Ji1dhbiHjee1EdvmmxqA",
  "key24": "3pV7heihuz8GyemLk1CJiXi6CqUAPzvqS6m3u19SSFsMm7gq7sfqjyCYKJg8yeKbhcC2pP9ExKWZzQCNn1jSS6mH",
  "key25": "37CuqheyaXczoVAZLhdsR6qnKRNehf7FEXgKeVBc5yKSrSGZHMMQBkRhmkZBTRpg2cLaar3PTwFwgjanB5EdYHJ3",
  "key26": "5K7iCBrE3mHVktCs4KbTPwbMhC5FuM5QfE9Pcz2t2JRXBYDnQbfSUCniVB2xoJ7es6Zm7YsUSJbnkHF69dvVoDtf",
  "key27": "2Nn42n1FojK7BwxzyFUVRdpBUJ5mwdWwc4H6j2rGVTyAoNk7s2MG721H29W1yFq9f9WZ1QPuXAqcWTtMj4g6XqPA",
  "key28": "3xdCseD5pPpSTPjZCwUsDJLZiQdAViQnabV6iAjK48KFZtGET9PTg16rmqRKLMkUc6btU4bNzX81qTeXbnkMN1C6",
  "key29": "5DuX9gnTo5rwivtGrF33cLxhQkKWd5TgN6u2KKEB6Ny74v19W8eLqTf6E7Yn7v4nFKzUX4ZifEMgopVViLQxUeKo",
  "key30": "5CuN9P2bEFWELfxEa4E719NRMc4wZttxLZkfFWGAxhEe7HXQzheWNL7K8tmBpnH2DfSavnJSYdCJcTcJGLPPA4hJ",
  "key31": "uivicjwKoGNky34VnDvQni15XWwa1Pc2eYRVPVmy2mvCejvvfCsk6Qsu7LEt7Ee9kfvZdKFGBBCuc98MrNPagR7",
  "key32": "4JBiVCApNTqQz85dkU9Z5mmmdUPwdYJaCqstQY5EpERwguwWbNDtn42KqfpbWdb3YzUE8E678dYQPD6dLkKLxp7A"
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
