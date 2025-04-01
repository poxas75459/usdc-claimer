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
    "45Modt3QxGpB8hHBW2yHMERXiP3WUGCaDXwDhZvTcDB9DGfZS6HrUjWvi8GZ5VBMt7diVqCthaqq6wcZurhjbD7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QqdDc8AUH63MkvaYcDTRCbkJuFF2eDPg8ZJi51DHFQ9sV9w2kxTQikkh66X3ecHCGGBSr2P2NPe7j4hR1FnghiD",
  "key1": "32JcMbU4tw5PsVLuUys3DXks2hkSjavsUtQ4EPYcc4JwbWkLVJ4e4sMBirFtc679LYo8oQGH59aQgGkczeqhHQhH",
  "key2": "65cicn1ZutWGuQemy6oHajBQBj2w9BSrPcFc2BWSqgQ88DN6245qC4ALA4mL3bFvEhdiqv7zfYAYUGpukfCEJkNK",
  "key3": "5dHwTwcda3t5PryZv3nk4eqxAxco5KiAoQs7xdcJhgCDVQ6b3x6x5H2zgTJXvXKKzTpSndZPUMo9Fb3gBWKNPyv2",
  "key4": "4owj34YgNNz8z5krkzqqkdDoP2jkLHfy66MiWhr2Lq4XRTUHBc8yfTdBPGE9uJGDPYBYHCGgTX51LaTm2e3zCVMq",
  "key5": "2isFUrj5yDAGWmo1n9RqdfRDX21LbbR19KMU6JitcuqLQJYtGeUR6sLpt9JRU86jprdDjDGgVyV7EnbZN41Ye3ce",
  "key6": "3WAC8jwWFuC1QDEEuoQgq8Mt2zQmd9B7dx9pMokLyrvJUxA6h8kPCz9wMQzHvy7KuUWhP7ytpKZdemJQPu1yJXe2",
  "key7": "4NwrueX19m5jxgKKT8iYqn9sQkP4F3xq8tVsE4SsiSojHZZ6EQrfwoq1XJVBwmdHouYKyhb6nn55pVdb9yVU4bDd",
  "key8": "ubSFNBF61pN1vEe511kTRoEkZuXETUnztPPGvEV88CmmFSV4JfSkFqrJbMPz7J7wWd6yiNdXPyRRveUArS5oJcP",
  "key9": "5bUf12tYbFeYDvGTe6HWTRQCk2ZmzhttaWfe9SWZNupL6xoYSiM2AtNPXBhgHtfthWqqDnKepAYYQRPgqJcnNyk9",
  "key10": "4Z7c4e8PBtVJA5CM7HYnryWMBLe4ZLomtNUjiZVLR6agiKYKxNEdGTFJi8dbFxF3WCqqwhNdwMP2FfWYjtdaru29",
  "key11": "3QB4DcDZycbKpUCNgNETnoRnFdV4zVEZfaM83cc5yLzYFcHfLhqErZfJGRQuMShwEJyPCJiAszK31zGw8QAEw8Tu",
  "key12": "4zAR8waLQUhwWaadn9Vc6qzPyVKoWrL7XaWHfVGvbDzdRVEq5z3swMiQRCRmCDYYdL9A1YV3dvmvb7YedXX8nM6F",
  "key13": "55XSoXcEEBo8qyhYfdymXMFbCZ4T2g5mWofrZgpwXWXsB4KawLfCFzpfXPXddcN9jK8cvDpgABG9Y2A7ePR6B4Za",
  "key14": "3XdQ9TpBxcVEAxbGrTwD65F7ykRpH87Ahq1cwY5wh6JZmtQ9aFLb4yrY4HG4dPVJJsGRav4ibnncbFzasZ5rtv8N",
  "key15": "62ubuCCLAKLwS66BHvs7o3seUG8SZeL385Z7K94uXGSZWUkDKVLAnhwurkND8zH8SMYoENDaRFdUZ7dgVTRFSMZn",
  "key16": "4tQb1B71YyMTdCrknwWcmkfA5WLLoS7ZfpobhyPxAL46CNVVYQM7g477YmR4wB18ujebd5fGvyqcASJpxUVFU8i3",
  "key17": "67bvfkMRBQS97zUSCFP7fSCnwgaerv52dwsG6w9efaWLMrgkQd81EG6g8c3ZbPXAPG3rQFS2TXRNkDyPaTKtCgUe",
  "key18": "3XhG3fEKpdnTah7AZddTHtUaACaWerXNheZmBNEoafyR3N992GQBrX5scGaV1k58Hi743GekZZAHgaGGBT2p3Csv",
  "key19": "2htGkPeSWrs8BZhSMHmoaNS5tzGGVL5uXfdG4eMyJXgAhNjcmRYsoGVoxvTzYZCeRG2Wd62EgFTPzFuCj8LkhuSF",
  "key20": "KSfFWMJZ4e3nkTBiuR2CXDiwyaJ2khbooRk5ShgkqRqz5T4414KWDJvscTgiBSz21AHJg3PKsFGaVtRv2QHTfCA",
  "key21": "2Y5eN4XNm2eEqKfR6Ub1Rd6WhTPNcP7m92TgNvGSkrJ8i49VqZeTcyADHJyqvzyuuJnoaw5h6dAgTtAxfcwWavmP",
  "key22": "5wDyfdo2DBM97HNPVDhV3Mf26JtVV78GxJL6QB6QTr4mRSuAf9iTaiKW9htiWr8ZGbPMv9cZfi9tcPxCL7RTcZSo",
  "key23": "3Vb8Nb1dGLnfmCRr8LHxJYR4RxLL9XF1opqGXG1prWKhDc7ZGAq2siBsPuudYa9kR1ddkMQLJ6WLpggn66UThZ1U",
  "key24": "58ff6XgY94Q9fTfPy6QsEbAjNUby6u56Au4CGhN6XztDCNoGVXzTN4jDPbyKEBybU5nRaS7jWWtRYfjP7FCKyNhg",
  "key25": "5z96wPRWYC186XDrnRZ2Q2uV4ZeVMpfydyx2n8MFxquyUerCxvnt8TEnDYmZdhfnLcN1YSqRBW8riCYrTPtXtawi",
  "key26": "3ZK46xhNuuyHBKbwpREzcHGL7h4GahrU88sJtSyahvGZRE8Z1DWiJJzVpDpUUH7oisZ7EQY7EjhBFTEwZ2KUFKUm",
  "key27": "3N6o1kS3bt6XgbpnTyH7ykBmM2JmGy4VJ3A3PGJs7Q885x6KZXSHQZg7AeWhzSfP14DwXYSar1fprNAJSQopB5Pu",
  "key28": "2f4gEt3UsY4wqkMrNpyq7VRk33uSjzXAY4KUdKygj5hmmS1d5WDLHRKgKscPipnrFwQjP4yEvYd2xgdUzTsMXWQe"
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
