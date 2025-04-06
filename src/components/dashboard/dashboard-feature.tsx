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
    "3i9imatEeHBGYyv1EsXZsxE2qBy1wLu6M6nv2kzTZgePw62LiA4TC3a3rs7C9kSey2i5Bk7MerAMmDJof1MueiDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1t1JPDN9seMPh3Yv8ikKjhA4huZfSnE3uUPU8uXNkk9MDnFpee9VG8gNHir5NQ9NbBmaK2DXH16wjZxevVJEc8q",
  "key1": "4Nid75UfGfbndEVE6yaQzbERvDJoWjJNS7JC1LezxcbTAwguvbVSSxcdTZ8uH6Edqsh26mHSsQSbrfqRHjeAYxiM",
  "key2": "nNTBA4rbTmQ5N3HkUULN1TwqfH2k1PZTPtbW81M9berAo6ct4GNTE2u4iHdWD3UZq2NrMum4NfKciRjHELwpcyv",
  "key3": "3WhBjR4U7J8MRPh1x9K5TfRFg8G8awSgfjdg8dL31LtZQUfTj9vUUaaWrE8iQAxnDBDRwjzFAW4tqeZXdSSPXsxm",
  "key4": "4c4ATv5VSg89XfwmPdvrJgTKA6fzgPNDt9AUKEsxnWKDUUwCCanjJJKEuGt4o6scxxHYgDMvTrgTA8P9jrmFN9tj",
  "key5": "2H1XCMUPK3JqPsGeEqGrkSFEYRFcBsUQ54QJrrFAn9mxxt2mcUyKz4gtyWsxEUPJn1ZwbQsoG7TBW27zfLUZWCJb",
  "key6": "65Fk7BmJHoeZnWECGQpFsemxSkaVrjeYY9ESVqMCAZ3UqS3eEXbtnNLpaYUo9nwyCQgHYCgjV9d5BzqKqirEZExw",
  "key7": "3ZogTgxqt5J6fR2CpkbWHnuPRWyasHhKeDG6ABy2BNEBMS1vqLwDrKxMAjKNg3JvYMZjNfkM9MB5rvS7nP8BcYwk",
  "key8": "YAx3fDvvRtQjSfC1KzCndn46Ajz8GwcjEXhd5z3FxVGarb21VRL8TwzRLSrBqRs79xyQ58Gg99A4nZ9GBwGUdyL",
  "key9": "DMaznz9saqH5XqoFFizDtLkCoWbFVA9yiuaZs8NDkAYUorL5X4GxQjgLR24QBDpVZFGEuaTkg9LyG7rTaHsTf8G",
  "key10": "5PaqTmtESYFdnbTRQec6ZLjkXWvQagtRatLaTU9QBbsnBVyMRmpgeXQzGYU3W7M1XLiSwb6eT9iEQ86zCvoAZYKv",
  "key11": "4Mz4Y88BYUerzusdNA3HPWnXmtkUmB1HeYjQAmTbwrfckPnBfgTTsQZZmDztJ5jEiQw4FpiCnQLb6jMd5LCvVM5D",
  "key12": "5wSFw9Va5L4dH8TaH9id3K7LgBaFTJuAUcfdGzyNmCWqD4nroJan8ujGMheSejpy5pTEaGCQ7dUdjBSiXqDMsHEJ",
  "key13": "44znrxRdLHJiQsPAQXziFX8AsZqZ7HyRHS4a9uAkPBkcS6zkHoebQXNwxzesBBm2Bhhdxqgzq26LcNzKgonFuZ7W",
  "key14": "3Jxp4k7GNri9joUTZDfHDKqPCSno553Rzu9cKCiu2WWdto6YrPpr3aSShRBUA8p2wVhahUBmtEDkwt4SgnbKMnfF",
  "key15": "qvUaRpQKJxJQ6RFvmgNyQiRvkkPXaumx3T71WdeNdGAct8b5EBhGEdJSubUJshCyaHDoV7bVuQBYFHXtEaF61Rv",
  "key16": "2CxVRJgrgB9kzzMAHha1J7bJYDWfYahut5pXUW4QKLRp2zYb2YqDBsQKUKcfbmqtKUqhrMM3RAZCqtNuzuVLrFa5",
  "key17": "VyChmxGPzLCsD8zVA68ScL1iqKHnfF2vWHYFmxcopZtbKYME5f1jsPVKMNdmSVQJaT4Fdvu9CXMafiC8AC9VAh7",
  "key18": "5kotsRTxnHwN6K7V3H9UHm8nqU3tP4PEu3aBYwXG8G3sffXRGaJMFQT7xiS34vzvJELnJqeQecq5o5PKY6ENqHJv",
  "key19": "3Nfcux3PTav7aLN4WBBo4FhgMrmCkmYVet1z39kap7QcMGgw2qwp8952RYyS3SSY4fETf8hAzbNMrw4SzzEm5KYc",
  "key20": "3qNRruQhfN1LZKLMo9Hm6KtvgLkFKhWRxrCUjjsy2kFXSNWCgLAm9oFs7ZC9xqu9HgCW4mMLGzCsW37nTC7phbps",
  "key21": "3EnNQ3vEhdmi26TThhvHXhMr1srP3Ye8yVcefUSxLi3QPGRrbf1aGwaPYNQUMcMa6873TebzTdRZ1fTuTLFjK25s",
  "key22": "wnPG4U34VBrqJQzsvNtvjotmUkbTp83kKQaHRgp1QrqN3tS5SHr6QhopNnRVcBxEYFKCKnBDzjZiE4bZ9Qy2Fzx",
  "key23": "27U5nCtgjCfrc7c1r7F5vMmerHX2cBifJshxEBfxPLPNseicQ8EZKhmQW65zKYLwpPp5ndWJBJLDWfZbaTrdRFDu",
  "key24": "4MuGpD2owt4Xm5T6iKFTWNgYpj1X1kVjmiGgEQSRrHwrxjtXNpLGmbXVZQbGkFim8BxYxdkfg7JVVbcGYM6gU6qE"
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
