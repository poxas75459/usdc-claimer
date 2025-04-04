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
    "5GAy8sPqY2UWvSQr82La2urqUNzpRB6aUTmwFE5XGkdGYhmJdGLXz6AYTUV6qrmUtxBHrBBroTignQQqDJvytyLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tSGbTbS9RwRyZnoYxdXZx9g4b7rNxczEXcjvKe3kbZnoknu5o2gXA6GbQmQLyCUZqEJisvfwfsZQkMbjoHU3tYE",
  "key1": "36zeYaNcget9NGH9q2PRJcBfgFuyDWqTgUStAEMhQV3MnFyp4Tp9FHJhn7k647B9BR364waJ2QPegb1seRnztNxK",
  "key2": "P3Cw4qbin6oxed2p8Ces5MUfAymCANkHQFWHHpSMNLYAXvjSgvn5nRk8iwFZ5nuqiezFmrTAf8tix3Gy2D7QPMo",
  "key3": "4QCCzdcJaW9YBidHzskHS6s1YCGdBmkBxsH7Rc6H1DxezAz524Er2k5XCzUSB4C944R5pVDanPhUR2azpNrMqkYD",
  "key4": "2KKVJQYbCbnhkbn5EkKTbdV2ujEn9hYy3CfVfWwej9CbWVAnb2ex7Ln8Tydek5GU6XuebdAJ3bn7gZrEGbU3GgRM",
  "key5": "5qXBT9thSvctcza4C6hTSWSzFA5KBtRkWPJc8Pw4ugpS4mDaQ6WQBcN8azW1mKYXeXTt22BPiA62CLzyrSZNx8cC",
  "key6": "2wr93yyxDkYprTBQ67aDYWzD8zJAwDwY8xuPARXUaPuUUkEqbRsNfQgxKfeG8uRmpjZHajLUyhkAYuyjGYLpfsP7",
  "key7": "4tL16cf7DT1jd8qXM9fATVJG8V9zY9SyUvMhQFtiML1sWifxLVsWHvwsgv1RTcc9Y7L6m91vskEv69p3Ttz3RY78",
  "key8": "MhwNtU92hJQmWJtb77TF7TbLCz1FWUU3JFxJK54CWq1vjR2Q3H8v9qKpU3997G4fho7V1DpzdFt6xh5tDPjpy9Y",
  "key9": "2LLvTd5tepPRvZ18L6dRD8mFhaNXqk7zCcbknTdZ3KnmB6CrhXiRWBR52LFRbz1d3kcb9HVbFQ2wL6i35YBaS9JB",
  "key10": "479d6yciBXEFP7gLsiWTQ5nckBEH6LdsZQkNJomdtEgKWT4Wkyai96sVFtNzSzofxLdoEyGByKhWtjx7Bf1ufmq7",
  "key11": "4EfjMfPaToDvMHgwrxnZKQnbHKvykDpuJ1DFxt8iKSQG29ny6ESQcUS3uxe9DDju6aeRotgVLbEKt3kpAZcvaX17",
  "key12": "3YSrLT4JrLNkxGAuzT9Cyvtatn5r8jevCTWeJrC8KUvLFXmKSDR7CoEokU4dAUPthJoi6LguGk9SrVJM8Tz4nKPo",
  "key13": "Gw1xXoL2cBxmDtwGkZH4Hj4TBbHqr9Z4aTM8X8jFA248nRyoJK4YGBy8YUC7wDqnyq1oPRqPLEd1fU7bWSGo2Ey",
  "key14": "EWuFy2uZ8Jj3SMJrNxKGeTSWN4uoi8cHrNaMsv8bZWv1QK5XAibLe3xiLKcCYpWnuvLqYHpQDcC27zCq8zj1K3E",
  "key15": "4wj1ATRHN1ajMBw3GQ5qdH5wksYaYSd6i8EuzpmJ6FvZpsy8Yer6WctxygqExzF78tVmSVYSMvDawxSq4xaozH9w",
  "key16": "Q3ZkdnsgfGGB3SCS7ZjMv2PQgEc5uwHR5yWx3kzL1sZagBWQuPzgjwnMCP6fzW7MFj1DtDVNpUSMPnRBoXQca38",
  "key17": "3GxR8kH67eHbXgt7i7848TSKyfVkPD5YSMX592Pz2YroHaY6CWEJ9fG8fsfSjhCZMA8wbGWADVCGAYz1CjF6S5jp",
  "key18": "66FLQknknNbL2XaBwjNrngGvsEkmHXs8a8RcUE8xgmbBHGpwj4oe9pmvEz25CC3R9cr5ggY1n62zj8a9Y1NVHm7k",
  "key19": "2fdyxeaT5TUm31E6vTwAqsS1LAtDDUdywL52S4PJaqgVHRnPTuo5gmqHvE9PbUb8npJZySFeBXE9x6Fj7EgchvV3",
  "key20": "3ts2YfdCFaRwouALXtogvQE9YDQhFWAGEsriCqH7cPTpxQBhVQ34c6hbVtJBf7ZxsEtLUSRrEmqj6AqMKe2eP6oH",
  "key21": "6Y8bbyLDhnFgDBGbiShxWLbpZV9khTtAvMJNddwLfKWPqS6p7JrNmRD34dWMwRBPvAcKFAYSAQBFk74mg4icUN5",
  "key22": "wkebD6bVpFuH9XT8Pd8FnLU5WKg2C1Mhd67CcHrbUMm1PT5B7wma8ujQT8JpTnMhULYWDeBYGepKLt8hJT9kvCg",
  "key23": "4RrxVvkRFBjSLhm7hrCUZ8jtwVgRrcwVDzXhAnyPRPKrGC5NHRMXdW2dYG4QTiRnZNtzKGVoxhAJKzFLGL1XfkVj",
  "key24": "3vxfbHg9bSN3kyp1YARZgX6BNM2EsncaJ4AaN5R5sxUuVL6PcTrGiJRNxU4psC8MLBaH9NFZTRQ59F7dAN3S7g9B",
  "key25": "49siMuw9TvqBTL3KUksjjXnD3BY4WX3gH5Q8SyNhtVqofN842SHeHmZXP1cACFuYdig1SdacAurcK9sS2djEGPth",
  "key26": "4WiSzfQXhvJK9giKcJvVKbH8eW8mNJJijhUvUW1isZCJzf7DM5dKwDaG6Xj5VMFpqn5Kv8ww244qGbN3kGPJNC9X",
  "key27": "5Hv2ZT4uJCvSfH7vFJGXL13CfQJwcRmGGNcAKG5B4oXMgKmYoFo9eGD4qN91RgS8GwBhncyancu4JidP7srTWXRD",
  "key28": "58znr6vHV5ugpDmNx5qbQEq4qH5N2pVBKMHbv3eL7LB226a3Nj4ECeji9KXEbajzK24GvFa4YUesufKcgMs6sEdq",
  "key29": "2bz6mRDJsoK9ij3bp6CgDgBBNZoZ9BfLxiL1uUZaz5ppagQFNRiheAK66sefiToDJuEAayoE44s6QiPEWZnxmZc2",
  "key30": "47SGZqX8EBnU6LUhwTZbDTMmr1NsCNmi7j4SxEZ31yL9aaagNLVpNNpVgAMobyJmf2NCWPT5EXU3iJedXY7bGQ3H",
  "key31": "2cTEUXXXtir8fa8qZ4FEugemCkg6aCtDqn8yywJMCAuLbCNTMm7vAf3zsjSeyUjqAkrfmgqQNMV6gYaWvBHZeVrK",
  "key32": "3gURkwS4xRox7JQKX95nKw3A4sYfczqLLRSUpxv9hf64oud4o6FrQd94weHvtmsAeLkU63ba8uroFC8cqshCz8Jr"
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
