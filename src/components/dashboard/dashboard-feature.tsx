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
    "5xun2qf3ZTXpFktKidkS6rEr5iWmNTF2awi92erGK2kz2M1Zk8gMJJF7zm9Z8QBApKfHbMW5wDMBQ6q1Z498DDrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bTbE78gDe7w3yedDgcHLakci4AXDMysjdA9UygZJPTXXCArTnEDrsuuGUouwf9mHrD7mTcaiTxBSfwTcQoWzjAw",
  "key1": "44UTtex4pWtst11vUASSXPAYRmPQh95Rcrs4gFd8bHSGZXZ64wWUvn1xbZZd1Q6cTg9DXiSf2JyvqzbHSwNDDvVS",
  "key2": "5eErLaXocwX3gNndRKjV9nnBceZcFSm2D3kkmPrpyGF9kG7UtGKxnYZVod99cThbqNW4w97mcvd5FhkD4ygRUxFz",
  "key3": "3y2UoazHbB7NmGP4jJyudHZxxsjoxYPRw6SLCn22NAvrpQBxhSCULCUtyEJtDVgcKo9KXfpq6dYH8CsZZUbiGDbb",
  "key4": "es6wU6fyH5DRFxmX7fPe4DouU5Z89EirPn29WYzKATcNxSBowGqNyNroRodW522pgbWwEzoFsLcfZJx6MD6m6pw",
  "key5": "3fAmvCSgA1oHkFE6fmbPNaFhf9dJ5f4yWt97KaGTS4aftjkxHavdhK5vgk5nzRwgZvPz9zzkbXSVReBF5eLLGaQz",
  "key6": "gfnXrJg6yTfZhzFbso8a7fNLn5vt7eJ1WYjJcFnnxWKaBNMqKvWaFY1khRPNjPRkUzx7JJBZckw2LFkD43N4G7a",
  "key7": "31FN8LU3jDvUkiiFnUQGUreVC516gQPU8nH88GjJioQujJBPN6bFexBgtzQ4ritg6D1eGhCUJbQoqqyH8r6Vd9i5",
  "key8": "2nPbfcrrzyGCUnDnAmdWPLWK6UhgcBEomWKfD59RVceMdaQgRxCigYUokzLTcveDGwqiZWfno2NrMzAY3LfyEZCp",
  "key9": "ciiXzzG7Uu2kQc5LkJpuyXpw8SgKFrRRqYi9XNjcz59iK562Z4PS7V3YXHrxK2ifCNbGYWTAbHQ9xAkSg6x2UV7",
  "key10": "xJ5Tr99iiLsagptahvCoSkAP9AVXdPMhzPkhDtm4EA72gLaZt86AE9NPjb3r8QDksX4hAnnkkj3PtUjV5Qdmi5E",
  "key11": "4Eja89dC31vTZ9vzwMMFpjyWr741LZW1SGzfBBBNwEMPRpkLsiD1jsMku6aKh1UyM8onyETnaYBLL6787zmgMBKk",
  "key12": "2xe5e8SyWdyTZXaXTipmd5q2qNJPuJ3Gk1sEa724AX1jR23cKArNkEeJbofwMELoGwnpFmMaC8gt96NJwa1xdJH3",
  "key13": "5AuPUAge8ZghYtWjKt6xXTLsALLopoXBe5fVLqfaWhNyHE9hiQZRbZJVFrTdK8t86KQW3QQuCrxq4aY5JdeqiGHC",
  "key14": "2k7iVBHQxrcLX1xQyuFomJxREwxzf73sngdv9Nkxx3793wCC3GcfpGAs6rHi2rtK7y9XJ1wfGnCauqpm8EuLHMhu",
  "key15": "46jU4jYddK7RVd3pr4TgsNudNQMHf9pBnb8k25EEjbKNom7L32N4mSqug48sd6R5zMkJA7FgW1jkiEgKuud1dtTJ",
  "key16": "4EjZATvDgGm9MBHhptoVZvydme7v32KCqFY4LGrVfqUqGa6SrADvvSkrPu1DqcMRbGf6zT4o2ZzwKqGCmoVYm6MG",
  "key17": "5wBXewfEW4KxiibY74EYQFBt5fBLxAHXwshaF2zwvPibBQs1DhrvxVkzib3354TMKFyJyNvhBYuUUaK3cFfT7f9Z",
  "key18": "5P9jQn3B7fFkBUAvDzoWUeVJDu6uKKCqvyax9XJbxrTCkh9KcikmsrrM3VsErDdYVXCigu7QdinMdgph7sK4mSnT",
  "key19": "4vZWBuAkx5ZjyVRmUtCvMRDa5RvDFMNhCfpguDbZADLV9448MXoYMphdkJkBmbjqRJ4mD22BA3zNdD3N9SEZERAM",
  "key20": "a8ib7TSW3WkTm21ZBN3pRPYZT7yVuyCetgWvH5MiBkek4wEej5gVCTz5bYG3oA4WHjQLddUK9yMFbJL4FBW3Lp7",
  "key21": "VStwRWfuoWXE9T3BEojoMuhqaPtyoY8QkL5C2qZ34kXqAxg6B2S3im2zAu2hxM1wBwAMQsdLzJkWTUjwCTJXi4t",
  "key22": "iPr8fsAfJdqSiXQbh8Z7Rn3oS9pQFt1yHynUNFh2faL2Yg6zzb1TV3jvDvWewJpP6UjGqGtikZpi3uHZSGWVY1L",
  "key23": "2RaqtKWXm9bTzVwAuuMdK9bzx7DaqcvTP6TYM48zK6qcZcVa4VpWpdosWL5dGmjcnLPGPgdZkuG3pKLpY1ZwUvCv",
  "key24": "2Hg94hucndn2CJMqVkypVmVSjVs9omqQ4LhmeMJrZ8WFHTjLuurVyhHBF1sAb3ozsLTr8nXNQi9PsNG1SLeyjYsg",
  "key25": "4vMtZVTpiAsdZY8DMKsEiqfK9KRFcSTVfAhYhQTqJuRoSfypRAK7vuyayz5sojHccuVd6i2n2vw7EYJ1ttznezA4",
  "key26": "5zRNuuqNS4hjhYZpzuSGwBvRSToRYhbtdNirwcB5QnzasKLRDir6YowRGBT8kuEF2gAFAhQ6iqt8h7ZCznAbq6Si",
  "key27": "2fFJPMAUnVLPwYdzev1v5uQ5wRrYfCwiC5s8nYhK6zwE3Jg7mw3irVrxZCLYKQUmceG85uphFk3oRSaHEuaRq4o7",
  "key28": "3EEuCvXZS9CGiFyk6Eee2D8yUzp27Czdw7TksM1LMZGTt1J79x8vprz6e2TqhqK9QPm3sDTrHcFfb21AjxdaijrT",
  "key29": "3F7Dekdy3V4Hcqj3EH2GGstRkfdkMGxZzCApHByzxy7Vqe4cCWCRcgWgpkcwbBtmFUVumojb6bC4w7S2oHGNjVg8"
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
