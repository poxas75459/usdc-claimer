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
    "3gfuVkVs3ieLGkNjt6ihLisftyerFK7CJzXJKxSK6Q54kagUR9y1th6tSj8Z27hyDkRisktxntbtkVKMhLCKAk2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xmKh2BwakTUganf1i7iwwNS4zDx54Vq3PZKMw8Rp9stn97eGc9AM6PNRo1XzH36CZBx8oQzvohgFe2YH4A8FDL4",
  "key1": "2DyefiYxT9FKK3n66RnLv8H75EhzrvXn2hM1hqfXQpsv1UtPM5t1SABF8e9YJVUqNtsTZEZH3o3hg1CsoAuyGp7f",
  "key2": "5oiY85AqYXrEMWkpsFpWiC5naWCSfmWVhXc74bj3LASpXfF1b6ZMrTeneiZaNRzrZKk5jRkQoe2anjWoaXBjMnoj",
  "key3": "4posjd7jVwPiMF48DqhdM3dcrXBYsefCbJ4ArunYWexfn3qnXmRK3Absx2nvqpT8JfyTCmfdCnUrSgefVKDy7PX5",
  "key4": "hkKXb9dYvHMMYVyguJtwdLToQPUy5bGX4Q7qAuVGjH1zQk8tnjS7VnGLyyV3JR4sDjtqwweD7hVo7FLRmaHi8Jw",
  "key5": "4vWu72bMDpq5vyPWAqDVLGoaKjjCrzquf8wFWcvKnyGimBJqsKWfXP3tm5Tk6QXg4MbZoP9SpnWeRcq9vVi2ehFH",
  "key6": "UmuGtEGpHvoSKvToPicKg65EbJD2TKNi18mELcuX8oy5TRoEqk8utYt6LuUbZYzjq74sD1JxpL9JtJDirVwg529",
  "key7": "4K8USieMgQhNjjfdXqjQPxZAuMMFAKTSeDmeudLeEyWBekbF6MXgHgf1jxyjfeJ9zqBr47UYUDSC1xrUkVqbNooV",
  "key8": "Hh7WvPjtbPee9iRKgvq9pL3Fiq8AceftkF4FcC9mQxGs5QXPk1a7BYEaHd5KmcdBHzwmyrXjysEiJvgFS8BmD2t",
  "key9": "cwKSwUzkxpM8vH96NpdCUCmwVHZiBbd7VqNWeufsfoJraeJowYow2Dup5rvKUVgpWadd1aHL9fGeumfCXE2Dd4o",
  "key10": "4tTwruXauRdE7feN98qfitka7hLqa8sdgFAm1mRuGu3MXWahxnUmLgdV4m4ZQyW16CBXRcm75zJgvDDH1p2euVXk",
  "key11": "3XadbXRdSGgFKqwpHsqUCLZb1fAJ14ffk5TtBvnGFf4uFYzVjJLBQuqdwyXxMXu5FCBMkH4AxP7fDRg96YtxosHh",
  "key12": "4h6frUgFXTW464YL5WwYKGQUhxGa9yUe3TEWvtGxE839LFW9zoRrP1A3vskJZJHwPoSu28ZDSEXyK5YFfwNSnL3P",
  "key13": "5RdVBwrsLBkgSZdX3PcjziUvmtpVDhTdQ7hqhVsgYj66AsAfDQ1ZJ6MLmHnvwziVT9wxmZfnChyjYFfVmmopgWR9",
  "key14": "4b4HwJKsi8KChbpxE16ac14uXaUJQLtt19sxubmWZ6oJd1jcSvt2we68SAKmWxVcBGsM7NiWgfLFv9iSNvtfFPkG",
  "key15": "66z3j6St4fd8HCF4VLZPzFcZzqFQaHpP2Yr83mQDfaxDjP1LhBPjuDKTtZqW48LSoNRiDRPVozhj3qB9HkUWdpLZ",
  "key16": "4tc5sxjaWkko5uD2XaSCghEwEm1FP4UCCkD7C182zFBd6F15426zaohSw88D6BU1toy8k4enaouXSWkjzs99iwr9",
  "key17": "2cMMSz8bAL4D5XJzMehU9LgrXNRnQSoZm9HuUgY8BpGvUb5oDMUGWXmVCorbbt8ykUUi9P6PGfEWMBEGzBk6VKdd",
  "key18": "5ouw2Ji3iLT1gdLCyFXUZrz8vGWFMqawauHKEVVta6i9KJqzHR9n3UqDgsGavfU6tbXhwAoUydzyaFknS9kpPs6F",
  "key19": "4641q2eXYMANejPnRkA6HNsTEnLkms87ME2XrUEWgvqWEwUN9AztcqQwuSg2XwLsiVQQ9R1go97VUxwGhGGMvKSW",
  "key20": "5XKmZjDRhwx3TWTfY9ApRSZDYQBK6539KZBKB4HbFpt4hFtaPau8TcHdFu3BW7H2655ThKpMGDc6jRYEY89aoBwM",
  "key21": "593g8NYA5WPYCQNfcTKwM9EjKZhhD5rr8aSntmJimVsgK3dtGxunG7dLKUQgXLbX2JvR4gCrMUGhS1kDgjJYVWnh",
  "key22": "5zEGH7zhe5Z5SyXMgcPxHbiwyUGRuUqtTvj4NaceDJNGsikhMwbst6UyXGbFHh8YkRfpatuaQ2xzWLrDV4be7cvu",
  "key23": "2DddxhyLB8BXUoK8ExtEQLXUZWLwR5WotVcQkhxnerwNKuCbH63PsMMF4ZaTT3J8iMJWTdTbwnK5o7wzc4GKVywi",
  "key24": "4rKNDGL8JDxfQVakWg9uyaND8dUBuqH8tf4k8qdGMLYRNxpcxZBoufYQT5CRNXsiYYYJrL4D5a9a9TbM7CxRsxwC",
  "key25": "2429Cz8KKKGwpmpYtMJwcNo3dSNKdUpgyLvJvC6tJdTQ8JrNnMJNDE9RhCoWLtJMLnwj51EzYvvjkG4GacJrDAvd",
  "key26": "4Wn8LNWQvEX9KMEeQWvEoGkVQ6MMASKjETxDPV2ZGFaB2vj82QzmFPnq5LUX4jWJEnPLpa9VjWTBJ8ZSGAGiYGHL"
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
