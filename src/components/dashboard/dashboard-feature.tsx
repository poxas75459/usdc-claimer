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
    "2tmCVHST2sLB4QncsHsRxmpPufSUU23EmmtR2HPDZL3uZe52TA7M6H3FNxMmaUAebecCkjpn3iDtKvfBPoVNTApH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "251eDWKCtits1TfoAh4o2jSbWdu3QC7kx6uEF2jWCGCnZNxRGqqoTzzzd8PY8Y6YF4HDTj3y5rQWjws8cmPt1FXC",
  "key1": "wmqHjQzdmGTRFh3rb2mU8xqokWbSsLERQd71mtwKRoQP1NNpfjcKJfTQBw7DSXJ3N4cXDLeeisKkytsgwQMT3PT",
  "key2": "F4VKAp9Gp7ZSs7neHpc7xvkdocRVUixakwov8AwwnKriBRF942E5Bup8tkG265LEw6rsh5CLCD2XrrUF71biQby",
  "key3": "5gZxrEBo85VbjAvom43yJut8Bus1Jha9HDgjvSHUSbzEusPMB4nipmgpjdWa6eYK3CeRpPHNbj5uNjReesUuoDQ4",
  "key4": "3uWewBH3BGW623hwKKVpE14jx5QdGyLW2jqScuhDeW7hG9wAbZNsU2Q3vWtH1zybVwpxRx4Fz2sLaqv3CVw8yLih",
  "key5": "4YLRajkwiAdqE2CfVPejPzWZKZ4rbjkd5W3mdfvCPV2ejqEhknyw8HppfGQyv8NVHD2DePqU6kBW1haBqGeApPAS",
  "key6": "2XghA8AZHixCozXFtQef3c1ye3eSJ8JyDC7ANbsCJaz5cMRwXHrhhQbSVz2AABzojV1tQyihvhvAoX9tsi8qQo2P",
  "key7": "825Vj6jKyYDa8nYt3dPChG48rprsexbFncRqH4RzV3S74u4Rqj2MwcYswyJebANt14ZEVKpAWpm6JfZrUccE4nx",
  "key8": "dKaTrdqGTEnqLHLQ6M9mdFPrGftUBoccVaRg77J7bDWoiX78GNghnwWAv3wtt1CNbNzPAtakQxQ1LKsW23sJSr4",
  "key9": "3G5zemnPYqmZmxPvfa7cRLrZDTBZrRUSScHYWZJavBMHBj4wz6wdKs7dZofVDV1Mcbow1E95pWNsHSgG72BKmXUd",
  "key10": "kt6zcoRNeDBZ7GoRsYRbftPG5m3JUr99FcSXTxNihsUqtwKHBu5VC6zuTHmkWFZVQJvvzZ7QKY51X1xXveogqQ2",
  "key11": "3icmCqfUTpAmRNUGevXD1t9wKrZJvxbbTSStxfpXuy8kmHetE2JXt4Vht5TneXzBvVFGsqhbZKGLVbfwVFSPGMEE",
  "key12": "QfSer6ekwE9MvLFp1f7RA5LgjFnb4ykAYKAzbpw5GhCmdFNRQPDSd7eXPAwANfiQbUfc8UfAng5fZV4r1wUA7q2",
  "key13": "2jhdJeTUnnNF9cNXRdMw5NhkHSkrJFTqd1SFWqhFnJSCBGs9AbNWsQXxhcwWyJ37GHtHVvuEE82xcUSwSAF52ndi",
  "key14": "2u8K6U746Sr7qKBqnMvxZiySRg9uVNifRVTXhvHLfyazKm5ZJH8Tt8NfojEsLpUfg3rtmksUzuiTXue8zHgGDbzh",
  "key15": "2qg3eoT2fC9P3oSiUaDkTeEhi5ZotpJCD324SzGSgxMshkxwiQDyrUsMUBYytRdmEHjyeFU9jw1iTQ5fGuf3byYm",
  "key16": "EBNN745aEqbSvSQFFtrskoxqJm7KdzrKH3zWQsRYsWEdqsDGGW8HVMvXiBoJTSFCudfzz77TEoNNEmwu5AcUmxt",
  "key17": "3odDpSqQwu8E5koHj1Par8aMniGuEh4RsAsuM3FJVhiitumvw3wyoq3NLWQMmjU42Cm6MFxuH7564Qi8ziJZkrMa",
  "key18": "5dLKBfWSdXr36jjEcihq2fC6Tyio4odW5JeCNDSZ5QTuQpc9Aurw1mQB5dqSbRVF4ptHGgqogpfLMKQ8Dkx1uLuF",
  "key19": "8ocXDadZpsRZcAktt2yzmfKFnH7kGkEsGL9yqSPjCx7XbSeztPcoUdszZ4oyLxKHwkECSzmR6zBdL9DpoQjB13e",
  "key20": "2PHv4RLcgqtzHtFaEvT6iYd2PCQaiXtFQVrqYuKp852vgdcteirPh1vNpji3aWPqXWduWx4DFMyL3x29WAyunvFj",
  "key21": "R2h8T1C4borSdHCXmN5EsbBqxSEvQuyobwmowLLKu7rF6AVjvsZnXentQyxrZgJ6nKigQuGvy7TfZHr4y8bHTik",
  "key22": "65TRXayKMmFFqumygJZmuSMgQ3LFWKr6AZxCDqxKBHWUSoBLpbes1fp4SxnzuZok1NZ51WAYCBZHtsWngUd5vy7R",
  "key23": "3G9WX16RYUo21YVW7oLi7KNB4GZHKFSTyKi13nq9emaTcMXF4YjE9smWCHsNuH9CAPMx8Dj79j8U9Sp8kiE5AjGG",
  "key24": "4s8BqRuZJU3Ao4qM45xYxQBvLMfAfuHNJAfvVinQtG8xbzESixxaWS1AoPfY8L8U9p5VZ68jNbVAsyodWW1af1Kh"
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
