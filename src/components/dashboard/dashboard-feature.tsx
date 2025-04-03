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
    "4qw5WyPxgoCqgaB4PjiWsVy9QRCXsMGVXbdf2voeMM94Hny361Xgqq3GvPXNwtdLsnJhqW2YDPX82jwB8Ax11h9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qZPCx5HVTTcvxfKhFYdRMBD8SHHLn2xfzhz9DqbLQ5ixK6YHiBVCkqSDoYDubAvX82hXgxRfTKuWKpfU76g7nGi",
  "key1": "35NZJ9WY9tHZW5uASHpsnhQXAvA4Us65BmjsJST1iXWdvVCHqaC4YGpZyBc4Lvofm9AUNy3RsPHSMmzJTjw33Xxg",
  "key2": "43xqpvyAqtQ3aoa1o9vFgHJrbYu8pqmqiNkHhqPD7R8q5uMMcqVSPkHXkrUa8JbzAnLAweHw4WZVTfko2soLv6xa",
  "key3": "2LedpTGMDHvXwWZiCKxLPwa5xgPmLARd2cg7Q4MpFuUGsmQy31ALbybs5QjLDkJGp5EYxouXk2TuiReFbEY9MHQ",
  "key4": "4q7imRrpuSH2Pf4kMHQXDXuVw6Bud8VBfnRjg99GpuSc79ahELWvRa7YCLVjd8TsDLgDxEZaP9zV9QW2iTUjh4e2",
  "key5": "3bWEPu2752RAwU1Ex9cVZGe5dbCLYSo3YKon8XuYDKRomkgScj2QwSaCUqXkm4yoXxbfMdmwNYMMW2Q8mnMt33mV",
  "key6": "32DeL39TdY1WKDdMyGcdvsFdLZsVwuHDKszGsqcHQvQnAWBWqzaWWBcXLGmQ6hsGWEHTW3rgoaGBYpEep6eGj7rw",
  "key7": "5sua2ZLeXkPuRNDEUgRN19DJ9C2URfMvWJh2dPZETxzWxmCq6C37XnqE9L7aMo8jYAfhuqVmRqKw1CjYJu92MHuQ",
  "key8": "2qKe4mFvsSYEUmHbC9UW6RA2JQPTcZMjSqwxTtTbHH7YpGjAzti4urB9g3PGdaj5aN6zRz6Dv391aLPAsW1cFVGG",
  "key9": "UHH7av7pP37HxDw9ceA3qq9UTcvH5cbTrWkLBc4wyfpgvbBJsqZDhxFjniqyzG5w9jNfhcrFNLXPovptmzumPJa",
  "key10": "5FSX2fzXnGQjz59jR1qrF3JrPipX86t1aNR9snC6DiZ6ssERin5j3w1q9Xt7VEbBq8tM6K1QvNbi4A6TcT1YivzJ",
  "key11": "2zKR5Zr3FSAeriYYaPqUp2tULWR2vM4YD7rQPD9fqdURQFPNA5c3cGDAuMQtoeeayGMYmSkufPsiaiPnG1sVEpY9",
  "key12": "4UMEc7RyYGBShfavabJVy8BtQduzU3wSBVxQJkdj1hechhySCkC5BPKYbjYgm2CnM97Hv1HKJMJJF89ftM41pCYN",
  "key13": "4hJ5czdV21LMR5AAyChxgF79zvzP7wP8XBtpTY64wA1cTKGxbEgTMUudduDDbBpJi1GUyrNhxBXmnNPCn1SiUrZL",
  "key14": "5awquAZB2g8K1nbQ1SGBN3neQkkLV6fhTizezsHHpaa984ZGFQHywtHFf5EWMKJjND7rjgDzAd9myrPSHP4S5pAM",
  "key15": "44BoFsAUGtmoC4V8FYQmweWa1K83C1zFDEvQHDSBe7W8HPnyo9qy76hGyBQCqjygxFnK3jEfTr8ktiVc4Rj2RDRR",
  "key16": "5AM5de9iPzjns39E7pXrcKDGsNbvu92YZGhpUTABNFqAAuKu8HqSUXJHNtSuFj4E7kAbQvjkkBTMD6mEtpJzyFVs",
  "key17": "67e8RxQLU1cUmra6p6RH5nepiy5J8bc5LyTjGhQfa1PvBRVDhudubLemW4JdD476ZXT6YTGkmyd2RdQS7HS8D542",
  "key18": "3oUHcFNcDiurQdkCpgwkdkTh6LHNx9BeChNH1wtn2kjhVtR2LCkcjh4sAi51hC1ePtAF6vJyR5t1HKoyrXm2SiRB",
  "key19": "4h8X1GmTtEVXsbQDMJyysi8aXz7sU5J95xsRhrTxYN78XQ6rH8TsWBynBSzvYSkCovN59h4VWqtftoCZEBHqk6ba",
  "key20": "5uc26GPs8TF7PGXGfoKWD5fz6Jte3CStRQ2iCBQZyhQUMsYMP22v5HMQjvM5QyH1Mf2FVZ3bxZr795HGZ5TqrLik",
  "key21": "3ZCWL685pizj1fquaGTBLpGT2K9B3b4knNpXe4bHGfq1nb9BSLDSCHs9qiz8AXrne1Frgx8VbU345HE344Nyxf2c",
  "key22": "4txdZ6CoWFgmTPJ6k9Mtwi9MoGFbKmwW4C6tBDpe6BMtja6UuuQy8fon8UexhYvMRoMMU9AeU4ap3d9JdxLWKde7",
  "key23": "4ZAdKEMZKKkohaNsu58cZCmcZk2Vmod9zZQUpQ2j25XMAMFamB7b5csPNa82L48qabP2GZhnjz8Zi7osbeYEgY3N",
  "key24": "2ASVieBv66W5DgXMVr8ryw1D6pzQqxGKv3zGeB8adrREYaiu8zkwx8BsoiNLUpzRQLQJVCsi3D8XGd2pFuWqoqhn",
  "key25": "2CrMonC6nUCnpzvzTr5d4FL21sBGxZ45zLPhoh4kJhQMo3vnoGnE3TPRK7bjeMJhfpQZwjuvxqtbhvpgq85Qd2RK",
  "key26": "tkctNCREz8TwbQzHWspBd5FE4RPuoj4PobDKUG9dpLgHDJkXnk75J3sBtjF2QwpFUSuAdVPtzxE4vbM326RhXdU",
  "key27": "HVkY7jBoZCNHEXjEV5mfFugJfZCvrb5XjWsdGTyaMu1kPDJQUywmQvhgvZPki5iGX9C1dQGRRe18rTMoWqUao8u",
  "key28": "9rLvoTvuxRUzoD9mfLkzxNXrDVHy2MmNHqFR59aHJd619TduatK87FA7bisz9puzL9KL3hRwmJLorwW5ifEaYXc",
  "key29": "3TFT6grkm5TPvyF7u1rhPT9JWidZUnpyfVXM3rP7kp5WxkR3r9rvnUs8K3fCuG1ZsL8PbCcgTfxGAJvhSmD9zU9R",
  "key30": "4tsodYSxRFJVPQnZKMqV2khGXHJzPtXmvR8axhGzuNXtSEwPAHuQvfg5qcAPbdbAmzFqkfvtgsYNMT4YSf9UQu4i",
  "key31": "tJM7QV3GG4itytAxa9Dfm6UixoYrUDLeqYpJ9Vxz1SxqbA6f8juJCmJ45nopc4epMm8BnYuBn7P1PmnzizQXQye"
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
