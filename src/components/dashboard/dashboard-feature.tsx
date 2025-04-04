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
    "4JN6TvqBNLDcWvEewV9Yu8mbFn7uR18P1hE25QH3L2wS8XmibHF7WhXW1GRxafVmF7hNQwFXTCUnpD6bt3UZrYcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LhDRWpYUZXZGeTq5DfueMffVDiYKmKTpDeuE67TG9MgVQJ3nKbNAZ77DEg4hMy3gakFjUWTCtidLxtTCvwdckat",
  "key1": "5tSNbcuvcqFdm7N9VQtbWBzcy9KXFK32Q6YGBu7gjfk6Ah8tQQeSZnXkBXT6HksgJ6awifCqTWHsMscKKbzkXCC9",
  "key2": "4YMG9Cmsn5bpJhQGYvHb3wNRpK8nCYwoReqD9sUGqkeG8VyZpk5mPmHiMx8bFomXvGSF4VLnNhNA3Gxxn3mhhgae",
  "key3": "47fCA2kU3zXbCdtqV7dFi8s7bPmyFPDVxp3a9n12BwMGKYgEEYv4phHYpvRcw8Nw58QR2TCwwZu2KjwiBebV9gAR",
  "key4": "4SYmUQFAHrP5mBCyXT2CLVqzfb8sqNsWczLWoVQZXxMhmrGtj1E9AnYPeWCkcv5vkKJ5DzksyByntBScZXJj9eZY",
  "key5": "JW3ueUwzGJYVJ3Wt8PvbakkddsUA8BrUarVejaf7f7G9bGhRpMZujGBNqUPGY6Tv3sF2qCgtv9bSwbpHqTwhBA8",
  "key6": "3cJqSN9TbY2DRku9NRJ4MUDYh2Az4G4Wb1aJEAjAHfsRBDCEXuJzcu18gCZFATTjqYKq35nGLAG25Q3KvfC2FztL",
  "key7": "sebBQq46nQb9yRjPrwYeSCcF5suqvrccqFqpAxmyojbfRqVqFHtqBkgyH5zASrMWcaUPYZbSzpftY9m5zpXnkcd",
  "key8": "2eZxy2bJ135p3JHFNQPHQZ5pmjUDfr9KjLVnYfjm3kLtvNAnwjChMCVLbsQJtHku73uXYUMudtfisZVxgDHp6hWK",
  "key9": "3S6ijKShQ4Beaf3G1dGPSbAcBYoVamsY5Y6bhL6EnBhTLH2ErM2byAvS44MxAnEw1qm4nYCnBHXKnPuqeGPDzdkc",
  "key10": "HvtyTPypqPePzKZRYU4kQy5aq3NPngMuAdFgNLE2nuj5KVXjnjJFwVetWbYhCh67yn9B1zusEnooBA5J1NTRmf1",
  "key11": "4HiuTarEJQi12AbpT3QCEHNPjQiqQrVcJYu9p9oB5uMMV4foFqwZrN7qFeKoQA9q193CwrQ4r7ZvFLDNRDpUAwwc",
  "key12": "5W5kRNjmpH6LaLc7iVhiCoWz62fryGwxup6eL8MJ8hrFbpGYgoAjdW2arXPdaAMfB2CUdTSopVVhti3eTHYdnjNA",
  "key13": "2Fj9FkSUduJwTzbiPU4mmjmYSt4xtScjNomPCTgyjS679nMW1e4fECgHwEiGkXAGs3T5mTzUJj1MGx8KcTUof1Zt",
  "key14": "4hvnW6Uqzbghr9xTnbHXuuJwUBGAmuGK2bAgmn1g8rpftVULGxkfiB23YVtXScPP15kj4Xm6dHAZa21x5gbsakdo",
  "key15": "3yp86kNYLeS4GDtpAzLhk4VE3G65YCou2bGg6Nsjweq65X7dx84PKXPyQVsVAfSSWH1crXoARKKwoo9or4gmQVsS",
  "key16": "3VSFa7qQ3qLrLuqyrM69f5VmGLLbWDoxAK2XYH2LmeMbn1ca9JuvxUiYSids7VcnKnEfKW9VRBq5oHkZQaD473Ue",
  "key17": "5sAbMof31EFL1FpouQoEGFvCqX8a68CBdBA2xqWJbSoZHKdnkjUPrFrya66hP9bdU8j5Ab5FmzR6yFWCYzysxfCa",
  "key18": "4m7XevvwsQ6ru7rrhwEYu8RvgTSnw1oKrmKU6uA8UJ6bD3wFKpwZJfHNNJfpQC1by9m6upPyosfV8Wej77izSJLM",
  "key19": "5aUgHprhXEMh2TMeSt7m3GqqZbGEbLAxYhgy3atr39A4rFFeQaQKyjScTWDPZPfkL3t2y6JDk85RtqyEdAB7Fq2K",
  "key20": "JG3ScoJPDM14dJSrvFi6fW4zD4pMTQc7eU677oSZ3dc29Sb3uxeoGwGqFkYMgDjsMxSGFuG6yDngcXqC7VdwrPY",
  "key21": "3pm4iT1fgDbTkQbwjyjMTNFFXrvcQH5zp79pyzJvgmCDPs5QaStDfa69tiAUVTTTzgN2zRVQ1ZTGAMzXJQborcsq",
  "key22": "3AVZbbhLzAvpiw5gJC4NmHLnEjcNbzqvT98V1tG78qtY4ammiVgekgu3fdfJ43Yu3oUJMfe1GFzLirmrBfaV9wp1",
  "key23": "2Yxp5WzcGvWoNncWyMxYbRKQQnLiNKnCxWUcc1hSsJ5pcrg3XXAwHpRmmeRcJL5XsGmiJkaiX155PfkBoueCV4op",
  "key24": "22cvnHXszPZ6BRA1LyP49korThf7wvwBtuVyXkV2WyFnrGBuc5QTAoC6SQZj3JzA15eRkXKoRGoKRFavAv6Yfoby",
  "key25": "sj81eYQ5GNJNRTQoCSXgQcNDLGiesHNLCCnG1Sj4fhSwT7MWqPyUHKpxn1F2xDKbveZQRiE5FET3zMnCU7ufZ9a",
  "key26": "3LUr8cVwFWnqwvQsNRGCZdYf1HU7nyxWCkDnmmvQyJY5WM6opRjntUEzCwo4QcNXXRxaRh2LvcUBLQ6uts8RFBdd",
  "key27": "RASoMzCAPwJQr4W6oVakZgkKTkBGsXNEgzXe9g5NRn9W6aVWVWzDvSbjDStKsECUUC3yZhiXUgKXBiquoQWQccF",
  "key28": "6JXefekJ1wzRmWPESsJ7dANxTgFg9aRSGKimftXVkwSHY5TrgLudMHgFYLh38zsJmGtw5vg5NY9KByJJRMXsqzj",
  "key29": "2xFEYYqQQ722ur237rYahAhaPRo8om784p81fcnf5BRLc1AK8EMGDqv9hBWEUbyYQ9dpevY4ZsEevxaAZpcLVcG5",
  "key30": "wdqABysJFYoEnhQ1CcAmunypR5UzUyVZ9cpT8S533mhWg3T4V16rdAD9Nr636CUirnrnC6Hr5EfojpT8884pmZH",
  "key31": "3mwrUTgaLseK3Vyu26i8SzYbTbSfUX1yiUUmFpQ4bbPewuhwnURVkvsHtXVe4cv6QU6LRc8tGW62R9VZLr3RP7ky"
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
