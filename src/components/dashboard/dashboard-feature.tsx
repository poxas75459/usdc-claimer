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
    "X9vg7bozHxbegCFjvKMLsgJvnj3i168grjcbkqUGff6sFRgdjuNYYew35xQVrcbFn7aHLo6q3wnnTN8MHi1qpgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bmCnBqEYFmTYbyUnWQmUurYpGVe6QZ9uvjeM6MCkYqMYoV6em561RfhFz1wztGsJ1GN6g9BJni2iMWmkU219NUJ",
  "key1": "46UjoXqpvtLhjPpvPhnFh9MV5HGQHhT8bXo4qJ9EjrQuDJz1vuA8w9BNDtYftC49kzrZ2V5XXzgovcBxMof1zF3N",
  "key2": "5VrJ7o9iVwnt6fmSAm8E4mUYFAYdM2V2ci73uiSMPCjNvo9wrAm85No3FfjuGt6PnsN4xSwYHPqka1gaY8KWSsJ1",
  "key3": "kgmU1fqo9rA5szd4EogL1iMUX2sHxmG2dBNaNRa9mhnz2xBbEziFjx8QvqpP9iZjnANDnhrkvrzSopMW8XTfA8w",
  "key4": "4iPmVfdnf4DoZFaAyrwF17FKtNQeoGHf9FwG8VngsMPuYcWQZgiaJyeJooeCnvdRZwXPK8W8ebmKNfEi9XLwExyn",
  "key5": "4efS6vZN1asyyqRydQmVpgUHnvinVFbEF99KgaCjnuBGgTHqNZHAJ22qJ7hdExxZTxGmcUjjncboAirASdZhWDG2",
  "key6": "4D3HrkUpsvemXtNCp6gQB734b78xByHHkADhb3t1FXKsX7kw89vRjZpjgYjyGRjBBUwXLR7mVZZTW1vLyJdgND6g",
  "key7": "2ft69AjsGLQ9c6cjsKwncD1FsQ49Q53HEfWMFy2KYA4yZTaEESed5nAeXeySW9ejEJTiJkEpCyB3z9PPBpbup8V2",
  "key8": "5pcH31ppWXkcHN4G1454NAvF3Xp7FKTCmsCQ9xPkPthMYwKpamNt1PAp1PTAkf1gAhj19sfPNKUrEvWYyrqDPpqC",
  "key9": "EsdaST7VxGpgYrbwCR5q3zt9eC4JFWjzYivS4pMbzSEjpp325SiF2rYPzgNMZHD9sHuFotgyFP6WLYbA8o3jPNc",
  "key10": "4JDrdRAPg2uYqGW2epV7j3uNGKTVfAba2BJhjLgwZt7iqw1Tbbw3RAibqzFShmGchkYoAAk8v944q8A6yxrLtxP6",
  "key11": "4xmQ6i8VN2gBU766bBJhg44BpkSG4n21C6ZrMeRTF2pTx51k25V2xQwvT7dWkSmqb4ZdpGwcAuhUnETJ2TL1XmbS",
  "key12": "2QehrYHMgZq81rLiSUQBJwGStUeBSAb1Gsj7D381q3HoHUpf7ZfTRSRSbG71y9nqcFDcwmTDxrZJUEmvrLGzh31U",
  "key13": "djYomiLCao1WRpbFy7JuLym9EchaHq2e2J9oYymCuqYc4vJhLWwNwEuogLwwPhwgxTKEEXBBGDFknAEDU6czEhU",
  "key14": "2hWPFWePXp4S2RUiqsCGrdkRp6M1qdBhBtpSNDxEhyWybzZieV6NoteyCqY5XURWoGZ86PbaShhBmwevxLwByE8q",
  "key15": "5mjbyVtvL7jTQ3mTrTbQuKVRqb5box4y4AfY1xUQXvhEZ5Pyc57VrVyVrChoRsdGMdoR181B7jn7o5fsPLe6LUMS",
  "key16": "2d31iChcUcq7SKcL2G7tSZLbybrgeWcmEHMELHwXQFhZ1ZcPp7zC4gMCzbv6joH9gpLDUVeJSfjtn95JkSpHDJEe",
  "key17": "276X9vBtRFkFJuqk6eB3Jda8FhNs9nihuQJ5BVrC6Vn3EuVEj29nDHZ27upqCABtUjUm6ynoDty9orhR2YKECG3C",
  "key18": "4qyuinVEYJSqaYeLD7Xb2bf8t6WTbPvSwDxxmEiazWWXqcMGgn5qgH3b8j7jbhZrsDDm53KkoG7sPyMjaHCfDkYV",
  "key19": "SSnvtQ5dycRBRGfPUiRrnkfpCA3TWpE9p3vsqmdVJWbmJ3LjoUfhjaUsXZLc6hsKXEAbzd8XQM7PumgsCn19wwg",
  "key20": "5tPjRdfxL1pG6W5L8kUtn4s7D9TCCUFUNa4jGVn5ZCX4NedTKM79Vx21XcTaWUc1VbRatDUS7hpZzrKTBZAjuT7x",
  "key21": "4jEDfBVMFbR5qvXhEGcdRrdqrsdi5Rb582JCpgaF7LWmARgZngaYN5EwjYof9Pt84CHM8yAvYRW2pXnehKN8R5he",
  "key22": "2r5u5TEeMmMvjfJ4SKCkSSwRY3YsCvzcr9BEa1gxFjjbVFKEgotoRoUrQKNzvBVnbE2hokU5WWAozC1PbzNRrfBJ",
  "key23": "JktY2dgjwsDYL5gFnBcqj3nqKH8jXSq3FbZ6GFQJcAr1WtFGoT2Uuzf6vA8wM2dF3mAGwTyJL8hTgfXFgvmdDrB",
  "key24": "39mAeD48oGGqUfxxrFJKNhRMJuxYeeoXvPb6y1WoyEsJhMaNpPTb7zuHU3sNKCte8F9Hvu5y3FvN7LYq4mih9x25"
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
