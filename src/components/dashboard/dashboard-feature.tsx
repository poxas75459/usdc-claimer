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
    "3AFUrCrQrGAQdtR73AZxVCKHuXVqGUeZS5AYA6NNx6tMP3nuQvbmFch62muZmUuQY28psgFY9CLkAjLqGP7FfMXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jXcVuDXnKKzbeXhcbgEHYrqAadiBmTujK6ewscTo8Dy9muwZdJWCmZxfru8vLSRnhiuCCZDJxwTzBDun3A5NaPB",
  "key1": "2o8Sj1CWyERnH1Jrp6twb8tLsKdsbHqLdCnTSUwdUSzUgjjqGakQqS69XpFtPNnwLqzp8ezkuMcMyPfYAvTwk7aU",
  "key2": "3pLP2UZYYNabYPVv6bcbPxUoZvq91uchj93UcDEEgX2JG1ibWTLigw6EbivZpyL5ZEU6jc7xr7B9fJUDorxTcWGE",
  "key3": "5u2T2rcAie9vVFXs9mvvADSP9hiLyUm9v1STqskPppqGMM55fZETLrk62Nsv9sNymEUrVhhKsQKBik1EnuJ3Km6L",
  "key4": "4yQoWidh92FRwMdg3ndTgd8nkvhJmWCFpKNYSgFdvohkQGs31bfim7nhoUuCpnYucSUTd2GDkqDNu3mpMAa3jqEB",
  "key5": "2f9CxxQADA7z9TAxXK1QK6vufRXQccB68EgHmvHendWuhBJyRiuB6ZWyAmVX94g5njMDJVmTmMY2N5cx2nFJGGER",
  "key6": "4PCCZVBUfLL2qZiUTpLfFGUM6oQxN614cK6MNBuCn3mqt614mVzucuyNsXA72YUpSJtQ5TvJ1xDTeKMBcegeJTkp",
  "key7": "4a9drZeDHjkZzgKJcX5DRrmNqqHuFsoagkYcg6mxdYR2TgURA7e4skhufDhPk9KGT1TFuBivQqdmssrgo7txL2w1",
  "key8": "4NbpdLpg6ezc5DUJajKoY92KWL2uBoZ1P1vvHtGtEcXdRTZ7rzHwPodjSmo6AxvtCbf6QXeYBdkTewpwVaHrwN5W",
  "key9": "327c5j1WSi2DoSMgJ8QfmcGnxQTuvDc8KkBJm8eiks949fZxFkoTfDw66r4EefbR8d29URLj19pk1LEj5wGzg3Mk",
  "key10": "5qriYYdqRGfv3WcqhiwUqZwwbeQranLVXbyWpFkPmyyVm57J3hPeLuX1LL6n9nPEbn6HoKruAA1wDGfXBdYX1vZy",
  "key11": "4CWnfx6Gxv1cACfCYjYPXRisHFcCoPE3QCmsAmfJh2iiafivRNSrJB6yHzQ8E4DhWdBF3yvzdkUFpx3TA9eKCcjH",
  "key12": "hgC7mZgdekun3yiMKECrjYPqkb3gmo1rzRRgqWaDMpegstd1cuyMoSS6LcVi3hn7KqCaSMXpJ2S9vqtPqvVxGas",
  "key13": "5j3TgmaCt42aWzKKAp1MJScjkNMnPDkt8ePUHiyV3ychJDK2VKVPRQhg8D347fJ756chqynp4m2qUUE7iUSvtSVa",
  "key14": "35H6yVnUuxVu2Ymwr5RWVoZiywqNVLTtaQyBBMHnyDVevguE4mU7a72EpPeUPTewB9KpF8szatEtiSBtkVCvoyfT",
  "key15": "4KAsU8desNAbDpoJmmpegEGxJPibuP8f2tvy1ZZYeCFPQn8QzSxSZjVEcWa4zAKKfAabwBCDWocQamGqZcMVDpsX",
  "key16": "2YvEhReyxvdnfZX8moxq9ugnQCBhMfnXUwCSNYn8cADpttUdi8DPW2uEcLEuswffu8XEXGg4NrqevRcD1uYBLfN6",
  "key17": "NWVJwjUhxsYwSH1sJ22jPCWEwoH6wbnDVKBTKYZqW3rghF1MVfNyjGMi3XYTJEFAbmrtqUFHnFL9qasX7gEXm3A",
  "key18": "33gtgM5yHEodYe4sKvhbWvtHvjpMtbd4LS5BoNWw51E3N1ePqKdtc2jFyte5pNPpUP8U5egSyx9ox2TEERmvStxX",
  "key19": "26JGuQBeZYjTe8EZTTGuPyogXcyrbzk9ETSwJeCALP3RMZAswz33rc2gfF2ue4napdbQSVE2SgwsCSEAn9k58nDP",
  "key20": "3QYDUoaBcF8QMgfHZBmTmPtrZE6zLfQiJYJECqvPZRExtDwgsZmdZkhsTFEj9vH2CucZ7gmrWdjERq83TicutK5",
  "key21": "4V3yjoThcwpUyoSmEjc4RmybjSFed3k7ugkamWnQ6xuainHdiWSuK9Wje4beP16yjCkwEgXm34kvi2jcMk8JPWkQ",
  "key22": "39QQrdqbhgk4yDZ9xs7PFTyiiHLjCXQHTavdFq4Yn9Cx3raX8SiSFm3VXoGW2xYEDK7qXXs3GYQpwDHZ5xQ1CjkZ",
  "key23": "2spedVCjHhXeL2nzWtiVSN5rcuEKmMzDK2RKVXoA8i2a2Zk2a4HgpUZ6SKXZKLgcZoXTy4ZR1chkWbMEb77TiDEC",
  "key24": "1B6Ei3BmLCwti3C5g2Swja4zLmBbVU3KQyXjXpDToG47UAnAej7Wtw4WkafbyzRAnJ54WR5w3CcqZ99xPRWszF8",
  "key25": "25m6tZk8vTAu4ACKPhY7LBkvC4jpySFPG1TgoFkKoFxagDyFbYfoES2xgSo9QetB21z2ZTVRnALLu44Ur8mt5Nsr",
  "key26": "tzcd6sEiNjZ3pcK5HQjXhsiLrXQCiM72tZZ826PzCzT6yUYEr7SvM6oCsURPxavShT399K8AjkeGkqHXBZcAEHh",
  "key27": "5fRYevKzXyrSnkh8rWJCJFFnMGpjgQC52xVcGchw7BgHT7ND936GWw3nfzHLQkpLqpD4UNcsnzGVcARSE8LkXok3",
  "key28": "4E7iidj2Br661Snksozh7ngatPPrDVSNiEtevu7VkuuvuTmNGWj1RjYf7tJrcoT6Yr84ku72LBhiqA44QcvgT5cS"
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
