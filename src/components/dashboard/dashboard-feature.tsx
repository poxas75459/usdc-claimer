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
    "3ZLqHP3hWXT1xUVpfx1VrNr4VKx8kdu1uD1rpBvBXE9KycjdSL4y2vnbyRiTUG7syTTsFoo1YXoArXUNAarD4Lji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NCjj8EGTCeBrsRLtLddQarH9w2mUYcmfgRMfiSentBb6zPfCVpKzssinAKYPWYzpP3NCEZF77ncARjx9zuB35Vn",
  "key1": "3YYa8pPqfyCYUyd237vtB1SEm8D2MpramwsCKiLgYBF2Jc9xkrkSjfsuggc58WpMVYsJLn8ZBwCQCnLD4f8Gpk7g",
  "key2": "3bAMnoiSJX9eJW7vNT3ZXncibiW3AXECYKU6T193wxJa89BhMg4y1JmojPogF99CsntUNW7YKskuASMcXCjA6Nw6",
  "key3": "4gywSYhtH9JEXpnLKzy2cLn2ysydAc6gUCUvkp9VKuocCyNKeSCHkkWBoD5KdkYYziqg74P55Nm5gXBiLbRE3ix2",
  "key4": "5boM5QWEKjRHeB6bTpDBPBcXFCwT3x2g7prx924kVajV4z5mzLwJZ7vKxADVT4w61w51N74kMp6SCZU2BM88AHwZ",
  "key5": "5J8bspj8E5yEfuYPQaAxmty4D2gK9VzgwkLBArqtmeTXtwsdScP19Zr6gXHZ7ZDwZiUz7TXuvS5TH6YM2h2qywrC",
  "key6": "4oHqDvebzurvzbAsjTktATBcwuMeSdrqbLU3iwG45M1gk7HLmYQWKiWLr7MYeGZNJim8aftqiyFeGg3a5gZNq9R8",
  "key7": "2c5gzEDRsR72yX6YH2Tu6qB5vTEeFKTMk7uMAQPzSk3vN1sMp8sKbDjpPNDtA4Ag88nc52wRLcWcDWjrpvRoabyu",
  "key8": "3J1niS1AxtY4Mm3VpWhCq4CGNZDesoiL1UCQR8a1zeHqs1XmGkoVu52RuEkrSirid9WQgnn7D8Wy3eua3HNChkHu",
  "key9": "2t13Ao3kbmwXKNPjzRGfkftsnza5HtcAazu4dyEErqvWi8KEkxSqxhJkgxYttGr6TaKyJBdj6muSEzFz7Hwzuf5i",
  "key10": "3bQTm46v8DdS1kh13bqAwkF7CQij6Y95zAY1dZ8pr1tFg6XsusHRHSRrf8tcFpZXDZLTNBnVuQA2iVU64z3P7jX2",
  "key11": "3CKiUT4eCwNMcfVArWQaK2sQkNsXiKH69UGuyawBcYUUWLxp6MzMyysTju7vnHcv92p1YEncQJ5WHjhkFRdek1Vi",
  "key12": "5Hbuy1nR4A4KbKoD8DR41skE21qbjtFuMYniqJagYwAHevjWtoBQjBzeTatoEx92e4enco87B8uvk9WMtKoiMnv",
  "key13": "f72v9agSWR653NdqfKDfsDbTstTbYvhpWguh1rDs9RXawvG4Cm7rVeNtJvFqqHeT338YDKHVS6KcakPfAch1uM4",
  "key14": "2LuTnqbHR5df4ELeaYVpa52jXRXE9PK6Rti5VgYbzK2d5fZWmvUJ1Mgv2MLpYXbXsfLswthVZqq8RvzLaZdo18Em",
  "key15": "3K8sKH7L6zWu9dgTiMyGkGqGyCuvrDi2RJkoFZmjVyTNKvMakNrdonVzVzmeTN3CrCMV4vaqVReoCPuUoUXKWzpE",
  "key16": "CmztpscFD7ve8YhTXSgena1x6ggHqh579Xyt97o5W5EWaspYnnrSQsTFif4ntEaDAnCyk4dsLHXyzjtpmuFZR2m",
  "key17": "gD2SfP4uRqjg8YH8Uf715EogeQ4A7Tuq1TUaFrMHzbmotMv8CmkFD7F58DXtfbrnhpZWKjQUj884vYAbDbLLYn4",
  "key18": "4HXBkHJkFUSWhh2dokXjvfNNymwjiD3TDxHSLg7sRFZ2euEEzTUqDRam9QUae2XUo1Qh5FAK4HDWwuHqFeGymWyJ",
  "key19": "3LFwTDLUYszYDALMLrLyKJg3jB2oNsRH2s61NpHPwSfW6Rp1gjPwVndf7SMejCZxNWjxDBb7sg5teA8dBiVjaZCa",
  "key20": "f88RwVhJaTXH97FDSxbJcQH3PL7hiepLhrruSQzvZNxBz6ooVto9bKHYzQjcy6Si7i6K2Jsas1mhGpK838dUM5J",
  "key21": "2QKcfUDg6Yi5RE4bdUxMu2iXzJJ1xu3FsZ2P5N1vxtmunp895UQqKo7CxnE8fnRGpyvrLGi7SDfiKpWjJHzPqcAt",
  "key22": "5L45XQBnJPg9yYC6m8kaohX5XnLyapfdkzMYAq3WkdEdswRD2EJ3NrfkzdKMLjmTqvTJSgb6cfAye4jWiJYRNgsc",
  "key23": "fkWqGBApYdhXdUy1SN6LhU6kz7ThC8FjN3RuvyLMrignuB58caC9SZDShxc3vs9qzbGRMfNepok6EwkQEVjmUJz",
  "key24": "cs1Hfsu7tZANQ5jCRuUHFJPwAn7B5cJquGbdZzY4dBi8spEvR7xDCWHjYC2PDCqAQxQUfitoce7csfjXbDiSD5z",
  "key25": "4dJoSZJAEtcQEDSJbjhxGDqc5fY6B1qD3GN9BKCg8xN4DcaAxmeoG2X4y6up8Q7e5p33e7PfjKfUPGb8s5Ndrjn3",
  "key26": "r7gFsDGWz5a1Ns3tNgfiyrTwCzA6G3c58bwKNngCQsYUAsV2dNQyNYuAfP9JKvKPAYK5pg4NyXL5HixPyhxZ2Tt",
  "key27": "sbq2FvBDEN3PdeWLMSnxt1JGAnhauGeDXoMFjB78kvv2XJ2oxnvepqcQEShkWzab2HjszNPQzzynkEZzGjcGWPR",
  "key28": "4By7ErRBYJgGcBy1DQJVurChzkp6fqgtAV3Gz813NQ1pdbDdCyjPsQQwtQjk4eMJbffzduzcy4oZDHX1jCmwXYuq",
  "key29": "2Rmg28SR4ny3MwWPJD7n3ZTzGjMbDCHTpeS7N1F2cSZqfsvEBHxFCqD44mtFSt7yRikqaTwY8fjcnR8FVeqCo4Yy"
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
