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
    "HJVm3TDFDz3iUJAoam54MwvLX6bqizj7cz7fgX8EQZJEj9ha5X4h6cfK3XfRrVKXghk7H94pYhJeVn8MVxALaTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CkQZTXdmhQJ7ThnyAkvVfVaijqRV62PSuveA8WTfTiQemvyVnkgE1gy1ZYsM1wWzoz7Nu6xYbFB6xwGrAXBrCv1",
  "key1": "2h8fFSNEUUiVT1aeUyYecHH3iNskWds1p5TSrsoc86n4nWaniiUqsShwtYHi1baAut69gfkfMghg9h2tjBMxkoAk",
  "key2": "4chpaGXP81DRysXkt9M4pjgHHypFiHEaHyNXfY2AURaVtw5bNQB1qNL6Stp8kSAE7iAM3xS6q1zZqjQjdJtTrXRY",
  "key3": "28DsNM9fQHfgX2qtgYZgjFts9kD91AvjZ1TMq5xM4tX6kJABu3fVt3VSzPXmAewQsJbqC9onD5x9a3z5bEy44rab",
  "key4": "4QPV29hxoNH1axHxATeRYwcYwQPB1yW49fZwa3qsLs54rz42MfHqy3PuWFk4c7wnB5mo1QuxAn1uGhsg3om5Ycga",
  "key5": "2QeRRjrLo29cCgz6bX2h1h2DrG7WPgeUo7nrYHdvRG6ZBiLUCaVowqk1n9mQZoKfQJ2EK2hvSWEz1wkQ59hpvGT6",
  "key6": "4fMQAVfkACiuyVJv8ajvhQspaTxXqnnKTsKn1oPWxfzVhoVY8SH7zN3STjA7VCF3h1yZJixnpTzhB4v1PE96V3pE",
  "key7": "2w8JGcHZ14iz5CoPVTea7vzMhG5PsNpoUcKVYQUb6C2JLMS8MLYy1ww6PV3VACETfkGVZq9ykzVVq9L74aFdgZP6",
  "key8": "4MGBqLurMdSbdKw7WHAr493QU1y2WLByzuiKzcmoSFnJeEpSotTQXCQb4YSFqFj94s7hKPdc94n7628CepxJ8vuf",
  "key9": "5bgFfpZPgyn2XGw9n3oh2UKC6nxcGxAVQGSd4S1JpersWU3Z3bB1FFXXpxrH8Bd6HvnPWstovnAznAiat7Yr6ixg",
  "key10": "5RPURHuGhW9kKDygsCYphUN4XfF8e1Q1JchHUtR7MdCfQ8kcBHx7EjWpbP3ExDEJQdYLPoWYi7LbzpNtSPW62BQk",
  "key11": "cceUCqw9WAym8zr24DH41RnokZHjB74P7aPVWvH5QG9b71G122BbCU6CyjXME5Xte3tsYfgFs7yN8o8ArQfL612",
  "key12": "4tRxQSMfTUrXv8YHTQwab6Ue7fLwGYmrq9PkFfSJU1PBxZzKn1QgLmiQvvkmW85mb9pbYjZWuFBbrtXVHfYtxheU",
  "key13": "4o5hRYcJKbswP12GhQD3fPU5yF8dC6StDc8fkqKjoFL5FTMsR1AJ3nCysWnhmgP2AQf98spvfZZCZ2gUraJjRSj5",
  "key14": "259gkCaDdKEHevBHbrC4m7YK2ywY7BjTs5g9iJk3H7zreCSuoziMYiXvFhf2LHJtkgGewEZeCXA4D41bqm1TeTmZ",
  "key15": "44Ty94Nzv8YzaEjcqFfrAp3svpULEJwZULB9TBHr66md4K9k9c78bCiQma86mX5hQTS96crnxWdS7VWFJkZTA2vD",
  "key16": "67jZLKXqLCK4TMNU8fAMRj9VQr2SzbVi9TrsFEkqxthNnkzNStTtchGf4VCnpfbJZTjfBth5tTArsPwJH2oAKVcQ",
  "key17": "2kbaZh8P6B4nwVuoGo26ivKK3MPg7QiZBthuKuMSDNuARLkrwSaiLQn5k82925LGRbnP88PEVZiA2VBW8VG6zqGj",
  "key18": "2Ax17sBUBBPQQhre4wQGr5C8xTtyc9LY2PNwf6c2fKdTzf6fpk96zaokVZrfj8gHBQvk8DNTtE81My8NpQLWnJZT",
  "key19": "4xDERKiaL4P4XYZwBUH8BUSs3Em5FKGbLR3DYZpkZECETDRWcx7zvjGrhcr9TQ4z99xQY6d1aEMFoWPB4ZRkNaiG",
  "key20": "3JnUxB7LSP2meapURKwMDyEYx7cukRpQgssTUnzDBjvEeosPd7fzFBALSRMWNF75SEhPswzdweBimk6quNc3w68g",
  "key21": "2kkxADaAq9YnLWvdwsUnxSj1uUpHVf4siAwHrGWcpHxdHaZZYdg8DzevUPAMZRndFWMzkcnyGQPubtpG9fKhuzTA",
  "key22": "5WWuAZnwTR8AoGdWP7pLG7XpGzbeoQrWddNQWSBm1WNaMnRzHukiMdLhSbRdy3eiUz3Y1HLaYA5HQ923gB25E32a",
  "key23": "4mQzzUaAnzRfxrmBtrfe4RxYFSiKT3WJBhBB5eC1F5pgfLFuuHmpEgPAq5P4TriaapDNXxLmZ6nu3cmRyXGeXJob",
  "key24": "Bo2fgzahciYpDhPVw6yrCJXprndk1LU9iwgP3P2r5oUccJh9RpWkQJLbnsrSMhuUemQB6p8U1YDHjVSt5p6FPDb"
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
