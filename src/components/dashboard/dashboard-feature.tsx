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
    "5MKJ6VXakHdXUpsFmMJsp1139DnzU1nEmn6KMRQ2PfdmpkKKZXwCv1Bdj1YhY1eHDDURTZqLFCeD5vQbXxADsgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ehhabnxh2c2gQnENkMZzp6utm4XF37xjGYbHw2ob8m3EQSAm2H3NeHe3Z5LPak5cd2vP222KbmtrRLi2if5gRSP",
  "key1": "54u5fveDLzchGEWgEsfnuwkSZJqsTG5TrtSuPRPzjWUaoPxPcPtocyeAEnt4RseVAUiST6xetdVPwCuCFgg3inXR",
  "key2": "BwhDFA8r7JoAk7JuKyun8HHi1uqdAndzEp7vw3atdamwdPk5z2Q3iw4D7pXHFbdxni4aSLoW7Yo63ZQoKtxqYzB",
  "key3": "52uoRjNBAM7BwjKf2A7p74niGPkvk7ebWJMWUiL8VKcPtLv4MAPEKf6U7LfBLc22Ev2TmbvPhTH7HVU4yzy6uEhP",
  "key4": "4qtGqkykWuMm4UhRffsNe5aSJNpYNM7kACXsTBmaw5tJyixsVFbdUyKXDJZrdj1URD7KAY73beF1AWTJgyioVsqz",
  "key5": "69jZCPkRZjrsrVqCvxd683mb8DUccyzL5GfytetvZcJnDmwh5G3XRGv4P74rT1tphQidYGCDr5Z7k8ux5Nox9hi",
  "key6": "3TbsZ5kws5MGji6E3S7XocE4YaNHdLV7NPALCHV91aN1kCU5zU1DGqzYrkCNzJZ2qA858fVDpFNK2pNsSTpaRAXQ",
  "key7": "4BhCNw3cBJgG7VuTB3JH7hn9RRSHxThvK9YyVidZzc5uRGgw6cGH6LFSfkGTGgaiAnsX4VLBMRivsSyhZ5wTZwSY",
  "key8": "HRUyhJGR2KNivKjcbfatTyjSiS1P34be1ePEg1j3SUed583P7a99JxnEG6eK975QuRjB6Vz2Ttz8eWnbDSNDFUx",
  "key9": "3nUoHnqEhToZzRNM88WKMbZhhYWvkDaNXCDapnaBuZv3btQgpkQMXwmS4YF8WAv8itjP6c8DtpLQzoNLVrsyRZnD",
  "key10": "263A2gXCBHauquVVEyiLZsZ9LK6Ng2c1D1A9qyW7NhV536LDJtwKyuHW9vuVDjChQXEbrKHzx52VaneehsLHuFri",
  "key11": "2oTswBXZCQiHZqVtKcKEMerG4Vvwspk2petHxetVVUYgQQEDzh8pLqiFKeyagxxAuk9TWiHU1KHEBitKeXYExHe7",
  "key12": "4Jc4RX79tnvybWGoEBtuXQqVftgaSj32dwwR3JpQfL3YPwhuCPvTDWa3e7pAceweFDhrF8rNwd8FPGS8HoTWKkoN",
  "key13": "2vzsjjYKu6D6o7gpYW97BtCXEBHU4YeLBbmfYaBLXaheMFVb91d5y3AdyAMwqhNt3nb3iFtBeL9XwWXKj7ToCfCc",
  "key14": "3crFnSs8h6n8YESq6UpfiSnvDJgKiCmeHYtxnhCAxbXvP1hGMXypW6U4pwbcDDm2qCrjKJgHizuDShV1WnmFj8Fm",
  "key15": "3EaY3cXHm3zUESZQkENBd2w6SrYTm8hs56QnVQCCYbq2BQrPWoiSohPSZRNWreKMFswe3VpZ8rKCTnPdnRa5vZeo",
  "key16": "2eYRwUaVXZZ369CJwi7vRrCHu3dXCzPZaac9XmiznZvd7LBJE6tLLNhwakQL4nAtigsNZzgpSTpHXhJ8QHX9iz8b",
  "key17": "4xCseNAMNsYaFhfreoiKejfodUasYVxGDV5C9ZDydee7Feyhg9yQifnpvpEn5byjT4zUeLeNMfMx6GD96WixbaL3",
  "key18": "3SNytGifxGuxY1ZsezJdDWU7MBb6gnaQnnc6L4nc1FsV6gaQ5d885Y8JTVzfvGZdcibK2AekMHoowWpjrvjwouo",
  "key19": "43UJwX4i9SNixCmQJaBYJRoHjZyUb3u56vfU4cbxKdEjnqqbLSHkG6sTpPzUfVubdLd6Vp7vGvY48c3ubdMTznU7",
  "key20": "3ew93TSY3rTd3u3iPnbRP3DJpD8m5jod2NBMhvJWAAsUhjnSE8ighwqyzDDFHr1XAKWGYkJurDEcGE2BiWYDmkAg",
  "key21": "2GxSe3q5ifTzAGq2uDVtHubJ4iFt7piEjSnPZvXE8xRssT2r8N8CBKm3wZFzrbaJYJXbAv5v99PtyXSkXoJxLagz",
  "key22": "237WXRLUYafjWqWLsx2Mug9DrhP5Nrhyu1ddx2Tgx1wRYEoW4a4nc6vKASNQrKcokKcxZpwSqGyoCLf1S94hw5rM",
  "key23": "5ikyqVQ6hnQoeSCvxvdLeShUu6vQD4aztnA3WBMNNzTPVVNEessvz4BAg195aGDcvK1XCB8oz8jUZnb3zYxPDgKU",
  "key24": "5gFdZLrmqYK61EVwJnJvzeaQqb4uxMaAkzpSarDRaqGxgszHRPqgdj29MxG4Pd23r44xQp83jBfWTVy2SqiN4xnM",
  "key25": "kp9eRYYn64T77ti4qvMesPBmotr6JPRD7t8mk3c57d3sVfuJKiJRPD9xF1nztq7YkdwN9fJchE4KwvyaDDHKyTi",
  "key26": "5guQgbnmpY7J54iANKTqNWTCPYa6YGJWUrAPEkDkZ2U3DENUpnZRsEtrUMnoZGv8cLwyJ8Ci8RF3QdEmwKj1aXEA",
  "key27": "5Zhb11BR4TaE95DyFRqodirYWVmTzN7BnxnT8x2YoyasnzeBMEvJQm78Tz295GeftR4e8wX3tYr2FGxpVeZNLrsL",
  "key28": "44MHqhMQp1CJn41D74pK2Fx2RtJTuGkztV5myB7toD8FgzrkH6a51YM6oNJVNR33HZY8D6uHMxjJjDhPTDnTa5ic",
  "key29": "5y4WtbNS7rp9fqncDaxxM8TiQykstyExaChf699rjoQefFMhaTFLGKFnrhQmBKoT4KygZsU9Lfkc8uwdyD9jR6Aq",
  "key30": "4Rr2265VV8FonXMk2pfBm3DtbMGvzigbiQnm9v4pkobvDXnYJmubHvjyUfD2Nx7GNtK48SBrY7AyM8UWWteuZMsM",
  "key31": "54pYS5dFjQBmKMkyLg2baDXqtqnsMcmk9up4A5sVhSbGjzTkzD3mW27nPHojwAjET26275E9icwDrJ8kgUsVBkMq",
  "key32": "5t5UtMrcXLtWyuieYjC5JZQe4MKE6zN11YDTApFmNjFurhRdo2emECuwzH8bzB19UyV4jpnQUM1RjGKmHNJz22Gn",
  "key33": "4y7WcCYxyeYFiKrEyeTd8uwnqGfN79hZPQhA23fqiFrf5u8xaTjg6EqGaQZrBe99fbD94JjeuyiHzgQvWKQ8xEse",
  "key34": "3oRb7vMg1ffJbYU9qi3t4vGhZaumYKuZk7XxgfA928hXV8nuVP3vSGist5pwDrHNCL2yL5azwPL6iXM2XJTA59d9",
  "key35": "3N8jE4VBbj3tCRAyq1TXkAYvbnsHSaD87riH2859xQHGC7gs2GrDSieVXKTDub19EipQGBYKYk35bD2dqCmmfgM7"
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
