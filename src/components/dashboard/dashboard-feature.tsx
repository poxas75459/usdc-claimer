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
    "45JuNdHqQFkFvdbMYTZNPjyHZBtn6XbSNYnKTgowYEhd69eANkJhGeAAEweSh3F34pS7C7tuDLfQWLYZn26BXmtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CebpEEdn1gcNzU2vUvtS3LEQFQMbbMRVQmhKeusgJeSpTjnP7hebgGjqpjzaNw4qgS4BRRrLzhaq56oPRmBrT4t",
  "key1": "5PMHtNGhV2mDW1ZpfoYAGm1LUu5sEYtn3vxLx1ZVzFJpJsZMjKqafKh9KxLyXk9Xaw3mPcv9T2AacJB6aRruciPG",
  "key2": "5axp5Jf7SVGmMopMAq3tmzqvs2WPiccTp84xPK5ycedeH7Bmk7SLnV2NwZQhdxdPh9yK9Ji8eHUxxKYJ4Npgh8tS",
  "key3": "21Y6BCcU2Stzk29Wudbm3H19sAAJrjqan2tEdvXMh2EiE5Hpmhp5KX3Pj6aNwHWf9KUnfGZFMQDZgH31RgG5kdLr",
  "key4": "4rx2exumcBgnCuAmmzQMBw69R1Ha2cXW6Nu4XzhcwTNXVSt9VDZWVZ1c3wfsfvTHxmBNjhiW8uZnwqfTn5hH1sFE",
  "key5": "45pbJG2LAGhg2EaJRvNRBFpS1rZga2PaA2DiDYi8T6ztoAkvpMEtAg2qDo4qf9A6Fi1mMRSSB6NfNWBnrGwBWiy7",
  "key6": "3xgA263v1HTHKGDjcg28eKjGpnSKSSEoiWoGmPmcRutHB4rW1kk39exkBp2oJ5T5K6Ee6g13jK7amHdhdjfEG5Ar",
  "key7": "4kAvmbsXf7DFmUKQ4tRrRCKm99bUEeGAAy7YcHMrxfWzrAfGYUM3dMJ6i2FNdEGW5255gwTmRS29Zw7tm1EbTjce",
  "key8": "5G6S9YtDe5JVLy1cMi2nebGjeU63LbTcCJxauQCh2fbUz7myRgspatGdYJVUxQBmkD6NJpr3SFpXMYxfvDUiy8TT",
  "key9": "5kUmev7LoJGLnu4TU36bzYV1SewqXC2JGmsd1HipPc6oZSQKhZneUTLZUwim7ZbZ7itMdjK7EGBACg8SCCsYbDuN",
  "key10": "3AYEQPh2tF3qKYq5UmoJzzAYosJWpiAW1dnr7goHZLcjBSTrJ8s4u7FZxgGhKENvWdbT27mfCg5hgdHkCvUA8FfK",
  "key11": "4f7dU5Mj8pvzLephUcscJt8o8t2zKUZktUf4gjt4F2BQoVFjHV6SrLgNnd3KecVAyWDA25DbHBsGa184YnxR9Pyz",
  "key12": "3L8CBUN9DguGqnRDdkYg2Q5qexif7DGRvXR7EhSdS8SFzbViDnwAMMBKMgWxdVHc84NqVdkGbEVpqvK9jsbMnrke",
  "key13": "5UDey4AeBEqNo9AWFL7TSNnrjPhtVSvvMTc1rFU9XM1EF74VtwjcKiuZ7FqVchk3V4LvcznmutQWg9vQETzMwtUX",
  "key14": "eYJN93hhhaftRKCxerfyKxa59xyzjfMvxYGwU179LYi3SSaCnYLLiti8rucaQzxbvh4YjHwJFgjzt8V6NQvMzjJ",
  "key15": "2rNAEupCbqzpbR6wADrCu6tbFyySczFziPby7g7CxLBMU3gQpQ3WGsN3K1GMPcPsXAPR8SWKG9Do2rjky2LB3AEa",
  "key16": "YgtAB82w32dL5FVUS7SaTU3MR95BYAouUJCduvQVrpo8Cmt9y43nEpN78zRGUrWS8p16EfE4Ta9AFtQwYqsjrdy",
  "key17": "YkxdCA1XesaH8Ps53wdnWBQwUZ4Lu4KeGY8P1Pc5GASe3V3MSeMV5VfQsTGjUk2vdyemHQG66VhvwqJ1uFqqaBy",
  "key18": "2fg5rp792dAUiBR2oqaRUVaBfMr7ptfdwm85P67jnqLEgfvjBD1n7y334ecKj79B31Er7hYMoxNB8oftzEyy2FHN",
  "key19": "2e2ufA4e5n3xeR5xwm6jwCJrx3C8XCPVqPiuwRc1EiV8eSrJrSyKzwNtqSMUNRRwunsopC8CGiqJE5rjkZ5jW8Wn",
  "key20": "4fq49h6rJ1aXCHMQnfdMcgu2s8NwJQA6D7L8ANV8qS5J1VCtdxHpmLLHL3drmgbVKGFE5bT6wHToK36XwFF61yP5",
  "key21": "5aTU7wqBi6Dx2uPFQYj5wai44ZMsQJPnoa4WL4Z4xsyUrfw4gwAkRUgBokL3fq3bnVppNDSiSgepPiQ6Ewn6KNwN",
  "key22": "4SasnbsNjx7NwuX5YfHUWiRtwjq6y5DGsh8HUE7wssC8pykaw1CdDwmPCmFnTvvfy1qvF4cqydGkYwsdH8oCMz9x",
  "key23": "5ycCvWgs5rNJRQuak57rghMztUg6S3aJGwuhNqzbHJWciVCH8wtyNu6NPDRsTPhYxM91KbW88tiaje5t8CSq4k8",
  "key24": "531Dh7DQqZbFcNp9jbrjU5ZcrQnis3yvRHnuZ3WNtgCTQrXAv85wEL9QAAgNWXeb8McsUJG9iwJaKEeo1kJYbGRs",
  "key25": "3Tjc6nZM6GPdhCHxXg47c5dx4dCDURHhVLbdDDTU889RgifGkKAYN6HCpuCvVLybM7H1PGEoGkZ79yUTtun7jTSc",
  "key26": "2gWaQWHZ9o2z8bpaGaQyFPeBK4tyb7oYrViWbaCHJ5ZAaeB1P6SNQ1rb5VQZYCpbGrD8hZt3NvkbQPudYQrG1ZKt"
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
