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
    "SE6Hc4PA9UfwybTeuwHa5wnXSeVmwX7kNDmG5HUy9qUE42JWdSwH8XZP9JCUPMgLVxMrX2j19Sp7zLXLJ9jVJcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fkvmMpLStCg94Sp7VQDdc2UpxFQZYndVfxBJtrvukB4cAggvomy2czyhYSX96Y87GQqnXPu6xv2aP5t4up7HXpV",
  "key1": "2bx2aroDaX1VmA6by6MSCUaz9TErPa86qbPsvKaxH65sDkppeiJRdJp21waZ7fiuKYiXE85TuToDkSVk7etRnGy1",
  "key2": "53d316bZRCXzYoBXrBwH4UThr5hu5PFrwZ5AmhX8rvSQgQRRFe626pbuipMatjEVZDAk5RXf7vwgbkGeiQKmm4PF",
  "key3": "5WK7gPGNrSWYRnaKmHVUxtXsLnf96x2JCADMM3KMsiEFwQqQoRzDaVunT6CMwaJrtQAeuncfW4ydZTBKbtTW3veh",
  "key4": "4SqeBP39wUMPNuDCxvMCGaqFQwvsHkTsXgpwkGp4vcUSVd3bCcuYuvAsu6eAffL73XQBvpNpboRainKU3WFHNcnH",
  "key5": "3Y8ivFHVhdQikMMfDw88FW1wpg82hNYJ1fEHL1EpHghzHGygKniqak8F6mW3pDXeMUhxkyH6Lm7vsedZnzrJPsJ7",
  "key6": "2XUaAoQmCpxcFqqtfKDJBG34p86rJisAe5LuF5dzUPywNzR1ozsNgDPa2budYNtB6Dk5Jcef2Lz7gz2FMwJCtgEm",
  "key7": "4gbtButm3db8H7nectqfCai3hMtkKN9obm24S6Jdz8pVSiGTjFDynwf5Dt9pw5RzmiscrWsjKLoT7iRF9Jfe5Kzh",
  "key8": "45pHFBYw9Q53iJFE2kCHfzpFF9YfYKhNvZG8x8NquFd33X666zi5hCnMx7z9QAdoT8RXspjYmRhPvoQ3HPDkM8pV",
  "key9": "3nbCAX8NcMZXwehQLJBF4dKKqbN3uyoXwuasAxbC2gWnYd2GBn2pAzUCh8xa1LpbGZUFZDPKWhd9r2qpgjEcVPFq",
  "key10": "fPgUMi4a97B3TrMhNNvrcRNZURgeYqhUxgJ2u3pibasHtUcn8sAeeay7RxjusrSxja7MiUTaocYQJPCyFZvD1e6",
  "key11": "2tTnQKVDi1bKeT9g6yKBeqspfUWa1cNvtyLEHsBN1aWHFWSB11qzLjNZc7PWRD1kEWyoBuk3j27jPfGMnUEQL6CB",
  "key12": "5CVc8BPMBSjuTxQHtKibz9MeDPZC3PUaAPH1mTsmudEL26CCijzfDZ9QosHdgX7Y1qNgqup1mkLbA3PY27vEeffD",
  "key13": "s6RkRcmDYQjJKsN7CCPWB5AK7X3N9MyrnT3JL7X7FeTJbWQKu4yxCZB52HUSMdXvRtNoENjZ5qLYnYTptSLATU6",
  "key14": "4bRTs1aoFXbbEYpauMeEorLMdowjcvbcLYR5e8aWQkHKNqt9ueG44AD1EAHhFWcrGvQEUCzNJ7Bk6TvRVHqy8vPf",
  "key15": "4z4NDGu6TWMvB1txjm9GQefpch7ZwP9wAxNcmhGoujCgu5uaRgipPA9ntAeup9e2kGK1qPiWfGqMYJLLZmLBWFmc",
  "key16": "3Qzy9WEeaVPzdGiDe1vaQY4ZCBxgxQ29NPRwjXu9dadjXcMFknTfGvgU35zbSsQmJwFRhZKWyPQoZKXiJbZK9Pno",
  "key17": "2MuDFBzCwoxhhveT335qG2XHWsggnRkLXjbVfZ5nV77Vy6fgEPu32mftaJz8oUVF2bYdx6F3Z5G7KAZGBfJUffhp",
  "key18": "3KUTzwFdsogZ2noCarMqiXtTNc1rfmAGQ2xpPfdPy42E2VDCEKgd6nuJvCeqsFJgyb4SBtBANSMPe7od9Gdboor",
  "key19": "455xSwQqqUZsb3HjvZyuJqRiLbzWTLraMYTo6CsupFFY3UVdjBENg1VvG6H2JYg7dw2eH5tJaE7XWfpCXfchWoQf",
  "key20": "2v8Wwgd5nNZDLqKJcyUtEZSjz69LopjtnLt1PW3fZQmQTYjU2yjBfSnjBsFd4Z1mkZYZBeRSw9HnZsTZYTkSA8X4",
  "key21": "46YSqxs5dYtW1uuNpndLHHwrsk1GV3fxbX2LML4mW5rhDP9xrJFX9gcodxiM3d9XQ59ibqwJJzgW19d6J6pWKxs5",
  "key22": "5CPcXqnh9cHcTeusrypFjhHRfQLhyoWfGjZvnHFXXHkQ6NXJJdnYv2KV4aj5QWCAjydyPosGrwxgPcoYsqAkGQ9P",
  "key23": "UJnCowhSScL8u3WD6TFyKDvh26HHuDA478s1FpcGgairnzxFhAN62Np2VvKY9tgb1SsDm95jaVMn3MJP1JLkggs",
  "key24": "2JqU4s8hShS9tBy63kQD9nmLsRXZQQxWAi7UeFiGUP34DxwWJ3P7BZmrkVRpNvFQWii8zPuQgFiMro2sKWNkxPXC",
  "key25": "5H29axs7JPdVUBH6GHFymHoQkPUajh6wgfNfRurNTGejPKLTjqNKYdaNJ886Z3kKV1CnsFHorNmxfCcDZzKoXLc9"
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
