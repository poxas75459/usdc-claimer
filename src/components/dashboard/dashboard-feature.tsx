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
    "548efdPaQG9vSt21ZyqMpu8vydXKupiX8h18rVL8y4DfrjwyveKMLUvU5MfzBiE37nU7nMWcxoTmrGQHDZcbuitP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "127X3Q1EJHSR9iC8T5mNZ3zBfsgqJ1mb91cgurQnEwGiLm1UoCxxa93MKi1BuT6AUump536KeV8Aihp45WypP3WS",
  "key1": "4HMXiSqdurMnkTEDFUHPP8pznf5Gx6ZiGg4D46H2TuFmvx9HQEhmP1CPnKfctZ9gL2KemuiBtLzuMDE3tK6RDPnB",
  "key2": "2t13rPS4QydtSBmZ2Q9oPz55ob79EoU42bap6GKw6PBHcyvSVuEENyBxjSMtGbyKoUneF9V2WrYbXoXMpFowr12M",
  "key3": "538iNhyM2YSanLn6R4gWc9jt1BqWahXS2dNVyA2yTesyFyciRn7mYvg22AAFc82iNKqNTSsbUDVLis9KQr182jt",
  "key4": "2qRi5iMWjCRoykBYBxWiutRutW5PZdyArWHkS4hEyZqD4TffMV5Laq6KYbPfWu7e6VQXQbRbqBpG9md1Y8RisVSW",
  "key5": "2qcrNtpM5DDuadyHb2HrEKxugsxxuidABqEMrg8pTy8VNLjuMKVQsaYosj1QyxfzfsevDpuYzYA8B1Q99c9zJtEG",
  "key6": "4nqodYUW6SDQWQBXu1QThzuPpNqbd46AqUyBxg9dW9v3cG2uBSsAKPbXdn139FGsKEeLZwNWLEgiLxohQB68RZ4N",
  "key7": "JyoXgMmiTasaiFrC9SyWqw6rzaKNcMrUwxyccjWE7JRigospgCT9cAKZ6kqGuYhwj1emntGQeL9EnDoybDenUgy",
  "key8": "5PFNj8DrucAE1P4y9ziX9n2V5YFeYNpxSgUWgXQAWsEUUoPfQdtDXNafWUEgjdDkhpCucrU7qV73DJrNS6V8f5k",
  "key9": "3EvoT92zZEtTCbcCEsSY8cZuZU3Rux7WFxazHvVDPUdNQeamNMpY12GhmB9j8v45n46HAXeg2VAXrrcKQRrXRFw6",
  "key10": "aMyzqEU7hwnZMCjV9J4bc97hUKk8hWKowb1eoSoUwG8tbCZgEU4JchQdxWB6nnvzkebVdGMAQJws6QbpDvo2vZh",
  "key11": "54kX39NzJesJ4aQxWa8AngpwwkLF2kcXbSD9ymhQCijn7RL4rA4qVXe41TThZmLbjU33xwVvE6sq3APbJ31svCr9",
  "key12": "642VgSSUPZyPetWdgUVTTNV1XjxEk3qN9SxEFAGFKkkePC7X624uyiXwGU3mxQNsobyDjssY3zr1Dot6UdndkHgu",
  "key13": "3qzS8uPf9kEvCKXRDJxgd4aViMXX7DosY3seeW4526XmPQbzETnj2NuCfVHBcD59RZ7mKyFubcfmaN2PjhXAbYG5",
  "key14": "2DYZgdycapKQYYgHYSwWWLnNVHUSSmw96oQmYGDoYBdAzkaY1GN9rZmQgcJFMsz6bqZdhfmJpadW6BWvuJueUzCZ",
  "key15": "2qV3GgRsMyCg4gMNHqWMnLruCsjYYzGrUSMcakgAw3LwpPnACVrt2WTPVPPqN1eFqMN2eUahyCVyS7ELYDMNxW4h",
  "key16": "4ZAZh9nfzECtQeoju8R3Rv1yLW2a73Do7V9AY7bnS4AnX8n1CsawjbSef8S6R4EEsm7re8SUNXueG1vVH8VBYa5Q",
  "key17": "K2a3hx9gmRbRs79y3zV25YrbxTWqGBTon5jLebDi4MzBuQNpowxWBi3cS6j9VfxSzc892WZ5KGo8G5nug7VjU3Z",
  "key18": "2dPSwVjx7tJd5TSS2PHYcTZhu5w1UVyHM7b9SvWwtbj7GNHUGjVbAMxUZpTjc5U96acBXB8WayYjvwEAgmv15RzJ",
  "key19": "2ZA3PMzun85x1Zs7Wfwtd55Y5zQyvdUTpRW8TZbbHbUwDVnutTRDHsZrnH8nBtrGUy4r9eFDBJvrRkMV2MpBZTaD",
  "key20": "5J4ovGbRq8LpEedNb4Pt7JfuUec8o6JhvCJKgsC9562FmuF9KaS1LAQrA2mYQGiwaM8w9TpKXQatX4bjvXjQSi6m",
  "key21": "5gwpVcXNkJFZEBZDpfXFiKZgEq52eKZADvuRbtpP1gvazJJLrFUuLyhJtR1zJKaHE81Y1NZsV5VuNKFK4QXRxe4M",
  "key22": "2dp7NShX9jaHQ1aBCZWmFVqqPN7YR2kC9btkJ28wGXNrxDq71zWqYEVuhaBmBTKsd3F4MgBuQve2CeZjNZqCrqFm",
  "key23": "3KVjy42FtbfxZLKjU2o4ZQ3i9u8hu7V18XzkktDB2BqjYuR9vBVugHLbrekUgpAGQLzk1BM7rgrN6WAQ678w8Fc1",
  "key24": "4UaYrRUjnR5opnGqJgVps3TUH6bzuyNRNfba5JM9BQ3nfrLWRcPeBT9V4bhVQhNmRfQtxpoSbKZunfSzrfUGtKvm",
  "key25": "2GDNLCzhxJ4ewm1xJNnNNCExv9xjnWPQrg3XDkDtpgqNGmR8ozWM4sd7JckRXPNrGT9swPUFGcvp4umHq3RaM1ws",
  "key26": "vfZqopvoqGGaeucaZRAKrVpB6HyNVeT4d2Pj38eJ7yN4BepnnRZGdqGN3NrQqoqCMoFSQd1J2zQJE9u4vXMn9Vs",
  "key27": "3HJvxvbDym515efNqL6syEu5CcdovqXyN6PF2DWLHCmoDUFQC3FVae6ajx8EqTwPJ89q7mFUArTX3b3Xky4VzC1w"
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
