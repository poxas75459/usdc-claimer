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
    "41bmKxuvNEfy8xx99b2RPnvy5itGVxQwNourpEep3U8CiyYwfNMcTs1tREXyhTy2sWWRK23VY9b3soQTC5uSWAzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vDsj63fWvYNxtdFeVZTZ5ZajiSrWBzoneMCtLwV4nFwRoYQgba4PNtZtpDHvYV3GC4QrGaT1p4TjojmhvXC81yP",
  "key1": "YkGtLWg3NQiEGQ8zfnoTUxaoTvTzwSgBNWXTjv8LsaSzagQX7nofaR2m2QsSvJXLr5td6QrNmnx7MmyGh4kK8Ln",
  "key2": "3DvmLE4eHck6hALN1TMD43V6RwPozWqxzW8tC3r9JxeHjNYXF87eyrYQkvtBveJ3wynNFgNgTsfP3wMvDeobwbmf",
  "key3": "5Uo6xwdy8dTViugfyFyEpyVryWzBZdbJXYxcL32S1jM3CfWRoBcSu2zg3mbswiKTivqu3rxt6qHco6ABgBF8TN6P",
  "key4": "ewHoxVNs1KaEWkJ2GnjZiV4NgWYW7vUGxxbYw7RYaQYmp9xNybAV57oEJr74VaTMhJBn5TRt5vQfKgDM5tDzSxL",
  "key5": "4MdYq8GkgAcWafvByD26EaN5cyH65EiGcJ1r6odZmw6siaoknC7kvF4dGNQnu6kX6FPgjsLWLKAAEjwxKZzWc2Gn",
  "key6": "2sLoK1W68RXUabQCNYK4fCLxCoGSrc85MbqfNfBv9CGCFth1Mr8fqCA1Kdxcwfs8Lim8LU5Ft8LkcnfGof5TmHJd",
  "key7": "4mAwacfCBh2HYTmBhHCMiy6mncTByWDyRVGZvwbjH3yAnogQyURrncPX7XffBczgUqayjvaRMKM5j6cDHVRkHnU6",
  "key8": "aU1sPdkqKZWohWJ9ViMTNns2mXDvs4sTTkoPXABGekDawdhJEAPoTuWRdQmtteoQHPFqhJKHLi3uU6emA65T5PF",
  "key9": "cZ4ayqtHwHY93KQyi1wTH9H3sKpfsiJrZsMwW2hiTxDbdDVEt1n16cFF4KoQQR6wmtr62Jc1gGXKrraAX49V9WW",
  "key10": "49ZWJfrZVK8ni4bnH16zpQpjnjcrBNJpNu3aveGPPZRDjNzZmC824uPQG3G2EqjnFkmJ3Kpo3dRv16otVDRLcBNX",
  "key11": "55214tX6hNfpQSz3n5kBsuzbwZv3kBKHMT8SNwbWNwccKsZyjVgR2spceDvBMRB8qkwcfy5gUVwj9Xwm46fcyH3D",
  "key12": "3hwz5kSmm5CopJ6mJhpzEGvwMp3rKDsWP2vib3oeB48aJDWxmiYAURmERVmiqyMtrVDNpGCrpNNaiSZ3Vu8hFKNb",
  "key13": "4VB5W38v5ThxdQVAkofmZbk1Lpfz1kP8VEn6CFQoMbLfFPqHdEB11bkUmoGgoZstqMNFxzHm4EmxYt9hfkR2b9VP",
  "key14": "4EziAQoRZ9hMvEEMiMY3Yk6Nz2wUig6jpVanD7KRUWM3eAsJ5Fxy7Bp2sApH3MQ6QCzAS75DoRfhQW8ctshvbALR",
  "key15": "5QSPFRNp4sY5KPN1Yxqn3gfhvgFAxkHRacxFQMrgnJWMWPBCbFvmAKQrvy33e6mpv36GDD8DyZ2RzVSKDHXZvp2J",
  "key16": "Ubbi4paVXWgmxgT8pmBYTs2pHoYHkKBirUhRVHHrfjBo5aduEXU23EKranwbwUi7FpYBRVV8StNNeLN6VKKuUoc",
  "key17": "4cjGkqA5SWPqFq5EytBWE5PS6G4GZrf4Sy8rsJtWR3jgs8qoR6wCxxrqpxe9sCMPzNf45R2cy9cVmZfbqYzHjoeC",
  "key18": "5vb42gzdPoVkij5vC72PT64Jn6sf4FeY5a9T8VrUcfUwFiNkFn5GG1t5pn1BpgRhfDtLVpCCKcefLhiXP4cA45sW",
  "key19": "3ueD7hh3NR3HefYywSnwRiPsK4ea67kYFPCHdRgs1XL3rc73guPNpVRmyT3m3jBTahyYBgGNc23ULq7rNWp1CsbM",
  "key20": "rLV9nLzu7dkGsWz9MZTYeZ5ea9NQcrRwr8WW8Wxur1FJsZBWysFdrBREX98Vgn5QtwQxSSu7X16DV1UEnt1e34Y",
  "key21": "DQUs2Bar4La73yb1bGfCWV5SbJEtfbSFSVrBXkjCHA2j4wuTqunq5ZukKztHSBb9DSi2pmHJsTscUxsFrLPvssb",
  "key22": "4UwRFvmohWFqkbXcdtMoZmHhRVEGaAUsey3BZYpjDnaE5C8mGE3FjFMRPFNdRL3NgEB3pT8SMjLRAtptcPupdbGs",
  "key23": "29Qt8NDNA3HPYbnnWGb8nJ23pLd1Jit137nRNnqXDa2T7jM3rFHsEYaXGb5tUrgrvMEvNkh63ry8c9DBseRRYwEG",
  "key24": "5iqyq9qfQzYNUGdUUxBvMFUNJ2J79wup9bxhVk5DAXBsPkWZrqurEhi7VHdPYFnngaA8EQPFkP6TBSBdyEvyCBK3",
  "key25": "51fStH3oE4ZrPULrwu2uXgbYNkAJfUnAJ67eW9XS4vVjhboCBL8CzF2f8TbELsLtytNcCbTKYJ3TE5Sx1pycBFA5",
  "key26": "ixFxUbjTNn3xPEqVGqiJ48xBWAwCGRnoH97PrgM9HetSPWaezTF9GmbK264u3K5rq5RsKuHh9q2tKGGo2DTKojZ",
  "key27": "3JmNLriHFKJ9NCdTNekFyueDa5JJVNVFh27UP26gHfrFbMGzH9Q3CY71RgvKJsinJDbBPZyF2FuqfNJkA8FMcHs1",
  "key28": "4ipoXvsqa7wX7qasLBv29S4skuPrSh3169VWNwBDtJzzRx6D9wyr3C48mNDzPqJ5AuRLC1hE8xpti6eyZV9h8797",
  "key29": "24G4dgJhuAci2SVRY2JyFs1ymdrwUj6HxZHybEdWJtC4WRnCCmWJFvgDkhuwP2XTyKmreqS9eUmNyjGLsVFLSTmH"
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
