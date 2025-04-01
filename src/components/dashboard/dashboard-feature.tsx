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
    "2rrnJY1JJW6iKtkRu7R92yXzWBoCtqCJAJefLLEiy9t3TYnx5pGX2FWiiQDKUtCjmZKF2NLhrPyihwTnznTACbea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BRWstiGa4cVQVFpoRKVn9LkNwnnHdxMh8oFpghyBDXRXT6hpVE3tTsuMwLLEA2jFKaejubLG8Q7kGSvHS4SZM6z",
  "key1": "4aeEPauq4D9jsgwTNGfdmUs2EG5ae5HyBPDsEjmKUoihzV6svjcxjAK8djURnvxiKbCXDeo5Lz4mC4LX13C7r2sq",
  "key2": "3jcy4rk2TMhPx31STazb1uMS6mHXUhcej6bAQYPdiXPzRrmjgPR9rj4UPK6mWS9bYv56J1WhovCVQz7SR8TLHuFe",
  "key3": "5U3SpoMAV5VUqG9jh62MgX1uDASvCF3a1zc8adMTWTHh1sWrpAcgF5bKjESm4JH8pvQnRcaN7jESvfESE5wobstw",
  "key4": "SpAGGivLKLJgAoh6SYX5vSBFEkGKuCLhrLBuqqDQjaWrDmKJXoVSjqhNXZ1c4XHSDUvk4oUQ5Sp1B98ybX2moKK",
  "key5": "4TiTXeZARh3fRcYx9d8VCdaFJDo848dKqiiVMPGDesYmrZCaPuQBE7tBRbsKBpHuU5Bqk4mkd86PpyNbJVtYGeGo",
  "key6": "4qBnjqXB1wy95ZUasGYmHGrTN4NVSPG6nmYCsHBi7ciWVmRhsqf38CVxx1Jn9AAZGQycz3SGm74EpwUsjkMNiYTq",
  "key7": "c21E9NywTrPcYU8VYzqxQwefan5MkqdMLG291sv4f4gfaBth66jrumKtsHvUdhcVpZprYfozLKnVxP6WWGbPjws",
  "key8": "34BjAsKzitXXUV94rzBjwP3yuDwMG9NqA2Uk56NRKXwYjkRXE6Rq3aMJDHXv91baGQiNJjSEk88jhLUzqJ2a2dSX",
  "key9": "4tqWd29Rs6hbkBeVxQHfHDtJJGPevmDaHx2wrwg4djwcudCk3a2evUG4XJ7Cfy1depLXQ3FKiegmX6zJ1kMcE8KU",
  "key10": "5kEzvm2hnHosRUNM2rGHiUSq57ZkFLSfCzs9FesRzNXLFHCW7SCwwjHffgQNUgrCBtRLU3gqLTdXLJbU2MCqWj3a",
  "key11": "3HkspXbMBNXoGo6L4Cy6grHvYJND6ZSWSZ4oyD9qziZPt3c1UZT19rs7WmprEgKddBKr5X29UU4C5SQeAvbtCnzB",
  "key12": "5yzKxQtRYAR6NYqd4h8X16ik3cZwSqPj5sp7rnxGL47ZVoA3ETFiHgsVGZPiC1QKZBxYJntscWaHodkhut4VPnHq",
  "key13": "2Jf8C6P9i2xvBg7xT1w5WMmPkMD3L27ntucm4t9p7LqeTSBdVBpgkYfYsFKbKZGPSTq5D2qVVv1gsEuhi8iFKoBh",
  "key14": "2AAMGMXk9mt1dbPPZrb3kNTYDxYaHSmoAkJwG7DFSXQYuy8QMfbAhydfEDi1Zrxn7sKSr5pQ9475siTbmEQmGg9L",
  "key15": "3Fm6wom6Ygkf9u2fsijBcRtRhF8tPf4VR2evqsJQaNRWNEkmrsrdD9RT1HVQvQK1EP9kK9BiZ71kQVM1xn4fXsf1",
  "key16": "4BAMtn3VdSjEjxJQXvZsNwjBt4w8FRh9jtHf5ZUQaEZvEwh24fcZgBiJEFFkGV9MRz37AMXF8h6RGHtaC6CxNdvi",
  "key17": "5mtyCcEND8sgiEVS8ne9sFY2uNvUKELFxaqwCzTKWv9m5N74Sw8kd1RzV6GFyuxz2hKqYmF2P57p5Y2YttbGxRWZ",
  "key18": "4dRRMAkznnafeNN2V6HXamZTELua2mkPosCzSPCkpw9T4D1UJN5CPcoJpFz955GSWkZmrxkAk67BWQJnEPafy53u",
  "key19": "21XdBp2i9gUghNfaK8AN5mpMc9zCcZGd7aWRDWJNTEjbSP2evVcyE1QAdLBSMyNuDyBAcsGUsrj3oxFhzBfwzh7y",
  "key20": "2r27BfWxRyo4YHg3LD2aSHY456HB5rBAC1Ub5MmmiHT9qfxf9psBKE2sxCLuupyGuzykWHtHNQhkbqGEzDcQUMwE",
  "key21": "3gnUv56Tfj5u33NDfV3oBKX7MAsfuiAPLPey7xmAkr7CQzPdCXDqdmDRxiZ2gfKa6cjpXwYTG79TGQ8xgwvcoVWg",
  "key22": "64oLmQg3UJySFTaQwKnNeFcA1i1fyk9jK5mJHL1E1TpwTgKjQwSg7GLgshWwEQrjH1gYmZiNBtSAZyRQkNgwmnCZ",
  "key23": "5BHQ2ef7bSMQwtMNZLRWrsqawEUW8M78hQ6eEejMKhMqxeJerJhQUJ6bsVkoZaU1yYd6eqwmWwhe7eCworaBavNQ",
  "key24": "GBbfPaYGUaVNPzNcWADS5eYnmaZ4ojoyQGRQ3rjSfqqsasmuWNfnzi1w9JvX7zHSFKbz35EHNW3RrR3JtMG3HQP",
  "key25": "3oR1dkT4UWUq7AH1yfqpKx5YNqPQ8gZQZ5bQEjPLydyAmcrJpSRThpdJnqXEtVFM86W8wgviQKAgvx5LA2XGMwaZ",
  "key26": "hwiL84MN8S6FcU5QFpTpkkVLfPkWm6xqHRkkSwjqQPe2Kr3Em8xY2qVoPbFudtaviprX8d4Jt8CARDpt572bJXT",
  "key27": "3xyndnfwBQhUS8if3LZsyJLfamjzVJMNfMZgAh8is5Chvx7h39znfU1imyLkg3NG3Sf9cFR8TPMQ3uNPPpepYA1Q"
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
