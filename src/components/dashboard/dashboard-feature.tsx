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
    "5uoMczzZfwqPAx5WUK6ptZmNttWKSfFoegKcsLtW9rLLXds2q8LfxvTPRuzKhKs6xA5m9yCEmkthmYY1H5b7LtbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "646faMzM84yqkEYtxxxH2GMW1bDkuCp3JtXEbSPWjLkpW6j79YWeUs5v58ZXeWs5bnwQ9fqSGrAdSusNc4tdqpnf",
  "key1": "2soAmh6PqW7ZLoXy5Uv8XTeJpufiWkW3SZPcHZZd5ZXhiuDAVAm3HqFet6cntvyMe5XbbnbWzsWyNuKGEswxBbwS",
  "key2": "2qa7bw2gFFXupdtMksjqLswktbsqJeHvdVSdWRqpPijgzVgcWtCUy7yHQ3sozzmSoXfTxrfDDiZmeFaEkCGPe9wv",
  "key3": "2nuejNwvnckoUKDyJo4oxwsVJVeg6wx1cXzeL1HNtUjYuGMPAppj3jFc7kpdbTUzfLPxnbeaqmjZUCqUuRGFZh5B",
  "key4": "3NceufYBr6abUC1vKhjRrQCiLcJai6AUnJakJCyDUbcAPDdSL2Qs3b6cnbDd34NNoHrJWA3Zqhyp2AygrngJtD8L",
  "key5": "2KtyZnfGDpUqmMK3BogPG7N3jZ3Yn9crVgdTkZ5yUkwctQEivfgkMW9fRbXyoNN6Kn2neafuAmVYxCjVVthotoVq",
  "key6": "uwmS7xsXPgGRK16oSD1FpN7Apwxtn6zEXqCQicwpu99t3bxuXP57GW44bc2o9BaM7NdGnL4sjQT3Cxv2cwQS4vJ",
  "key7": "4Wsn6yBgZst4r7g2VJRFKciUGctigV1PVjumptqHGndudY42HusrhhsVbmPHWVoDxvKeVkRtsUwXJHCDooBhpLP6",
  "key8": "3sCstaoXKSpCpRfbD3HCpxLeJo8xLyZDYsZ3PEhkipYWSqrDp1ZrEfAiMotNyJynGokcwCzvT1PvDpvqjbPhSPLu",
  "key9": "54A48iQEb8mLu9U8DMmPsVtcY3rYe5H4ZHXsB4e4SatnVbCm5kCWC35VGNuEmBJvwwgEnU1319yodXPVsPgbWF7h",
  "key10": "2fsWeLa7jbbBzJjLqvVWi8wnpTQuWX58bsxyHf77oPgHRdV1TNrKYQ25UUUKFkmmxZuPF8t2f9T75dyuFydzBKfi",
  "key11": "4a7tY6vUJ1X6R8bQhyN3fS9VWM38KBHu4KYJoQCBY2G7EJ3ky81mEYa3CETMhevfFgAUVs5XMzSnVb4UQygnPvTu",
  "key12": "4L37HyVTrBboMH9EfySHsusSuhFtFM1fQzdDFWgqktJqzPfyb6yZto16n8pAhUnT3gSvt9eD6BvZMj5vqypwuNEB",
  "key13": "3uDc4cbVnKC8iQdfZvJ89uBj5fnHao4EYLVXJXZfUVnQ4Sart2RHu4XN1gj8QVhH1PE8jBv5fVJC4T47X2ZhW5R3",
  "key14": "22vizCjTCyvYBFj8kN9W3xH6DUVeBcszzwfKHWWPDCCjPaARhcQXnaxkK3BaCuGX2Gduu3z6tfiuiTB5jCKmC5FJ",
  "key15": "2RTUDiQHkVcVLpw3i1hxgw9m8PHa4JkUsESVnw1XxPZBRnG73ZigtW7yCaMsta1TL2o8S94LyAauSK65qHBWGnK9",
  "key16": "49eRf1AMKGA6fGM2vuospJVTWKP67aVPE7oQnviHaVHEdqbFSsmTmRdYsuDpdRHM4UNwXzt6TBcpY5yzKGUbXM8",
  "key17": "5aTJnpPVyCjzUa1t9Fqx1kZpG3ZpA4TYZekidKv8FC3J2iCNSpxZ4488XhfMkhgGiwvzVCJuxcTVehxbnFjU1hKp",
  "key18": "3fkkswWiH4fQjx3bNM9SRiRVJrvhYEj1qKNL8S6gQLaNid9c8FkGLgWShGzh44dCo9YHM6HdptqB8c8KmoDsCLGF",
  "key19": "m7n1hGdXQ25KVq8dYTMGewikxdE5rKrQJC4aLnfesNhwgkZmx3fD6W63bAAHsgLFHHHdimcDRgTJqeZi3WEHNjd",
  "key20": "4HRNxjEwgu6aPsaiuGBma1FsqgpQ4anpZ6nGNZiVvCNdohimoYY3N2tReJQ1C6HXRkEZSUdaGUn5X1QZsE4sEHor",
  "key21": "3fLq5yXueeZhBv9dAS92TeUakzCrxr9XnoEgtwPGrMznYiCMowtBy1M7APteaj9ndXXUBHhHYgf8ikxqSfhcQeUG",
  "key22": "3KEhUeahYpY7i9jc3rhXUopU28yXR5NsZHQasRPiYjuk7nAycUrnk29jb5RdSPkz6Ypf6ZMiRehBECaQSUevzpaZ",
  "key23": "5WmoeUsHyZVWZtjAQzoj5nScChuPMCZWpHgSETQVTHDbHgtrLSMooVh7aVNNS9pfm9S3ZWErEDBxVdhKkYpvTFK7",
  "key24": "9jFSXAhbMTQcfFv8MjGXaJrF16YJxwwVz44ucDnieBdnr4aaD88TbUmeM6EcK9gsW1r5JxQP89NFy8ZjYENbyZn",
  "key25": "2xa5VZ4YzLh18YM9YUKN63BnUvdRxVCZouSV4CkV4YthFFkXVt3WqbSDmp9Achbd2pwqNBCRaa4eCex31hTMX2w3",
  "key26": "Ls24gZDKgNRzAGQoxX5UAD9AuLoCaHxvsuUPS1uvEWagnpjAJjZZyTj98f8awgyDpJN2E5gQNvNZcHivRCKtwzR",
  "key27": "5Y85AU2hWRGUnfeCJwYEjukHcM8XEFprnZgCAVbFR2SMfoE6rHhvkhDemH2LYYZ52a8Ud6m2TrAzpdrMGjewfDcm",
  "key28": "3fesKhpzM4pUTN1UzB6t67pe76VBjcxHmVjkSxQj87oeSHECRBivSevbbhZDeJDqhnfLm2rxotN5mHNkMcWLuLEN",
  "key29": "5KfbgQH96J4o4LXufctBFUAsLekEbfDmzkpPuFTE1xujHNirJ6UG45sjNNYX1SW5JwS6SnCyjEFZSExNm6vAbJyg",
  "key30": "3UeVAuLuTbqZJ7Xwxn7ZWD3L8E8bhnRKbmByyV9GCuitA8U6MVkM2ke4H5tsAxdiZ14Tz3CLrnK9R5ajse35jkAM",
  "key31": "H4GQ9FUE5XzwmRPSWsB9iAUiCsEYggiP2RmiJZJR3UK4FtUFv8mQu9oFatRBsPkbB65q58CN7r3WEWnHkCf9MBV",
  "key32": "5WypwqSRtV1wpnHALHgBCeNvBU5gq1FZ7Gz9AXT9iL4EX5DrEu3MLvnRrSDbzvutqS8PoxarHuCAe6KtK9KGmofr",
  "key33": "4Ri417wSYsH9PxHbgAFXGCivMf3F4CZzEZT1roKHATKP9wRd2ebRZxtvwQ51g3uf5zN3M89rcgNrDKPYfZsccHDj",
  "key34": "bnteARAmj7rpkVCY1V2vVtMZSHibFou1fqveRJhnq796ccDtofWZsrLcJFhBqMqWAksboXyiaKSTftrqrS151kw",
  "key35": "LvMKzsYCuBMN9fUVV1KxwNyx6TmM4u6B7orvQdAsYRNPtEKDEWwBLRMNBRhRRjsBoho9Ars8FDMc9a8QW2a1fgs"
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
