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
    "2uL9osSzgQKh15zPhyQWCJVLvwVN9EpbvwzfSR81ddMkU7GEfS8y21iiCu176MbsXVucux1BCFxgqHyohcr56Vb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26fcRUyN8aB1N8dBTLnesYKD4AwNSKmVjFKiD1f9U394sFg3qx5nbgzJ1dTfZ7grD8xmVJ391FLaBTMJ6962jx54",
  "key1": "uK5f89CuCNkKKSfneP6DVXnesLWYJmsQGrLHek8XFGBgfeS6fYVnkGJVCjaj8Wph2XpBmYYt3WtXTojiwC1wqyr",
  "key2": "2Anp3DuuKCP6jcnL33bw9A7KSADR6tj32HmPKCWYWC7Jx5odbzpMvH9gc9PCqn7JpnrcrD2hgnJLBtdbjvY8H2wd",
  "key3": "3D4Btwe22iBpTQmH8ZpVg3kpJ4mha9cgeD954vk6cKhZiMpgs5V8GHD2UbNDF7RKdqdxSDWz2qMygE4vRfRBFKYA",
  "key4": "3n1vCwrHED8HcLgXv1EYZ85vHGxFNvqPhkS54Eg3y6quWctc69jJpdE9PqjLnCFK6DQPTdmSQfL83ij3CVs9C8sN",
  "key5": "43kyzgKsTKdPH4ew6Un2EbXMo8ywraCzFbGiahWmz411y4VnM9ScpMFU74qcftiGaxdLZV7SpB3C8zZfcE919SoM",
  "key6": "7azxbB3T3VJPzsQGE7izt4SRJxrbVypbB3tQte3EUe4xkVCprmdyut5E8CFonb6wBBKVhcVnTbqGFHTUf1FAfSg",
  "key7": "5CZyQdzrqPredoWU5fTHPfLvBMGZgDk3GqEUyH7qi9zYrDrjXdbBiTEC9khaRv1MZP5Qv7tn4u73TDpzVhjWbe8m",
  "key8": "zcdHF3GS7cqQbSBz2yCBUW6Et8qQLcuoXcQReFmYABS48UD2HNm7KU4kv3L2nq7AevoiU62Z8vLCGFLPygn4TgT",
  "key9": "kwhjGN3SEBAVuKyzvuhrdWJYFBw4f7hcboZi2DiXBpEFLfhrDxsz67zUwpTst6rC6QB2wtjLRY3FDyChLAhjY8E",
  "key10": "2AToaqnBJC6jYLvwesJRD1ibx3QsZvpL59poFzfF3hFvxzxkZWuLEPPsesubTNroQKBs11sFvwSSBtnrpctfT3py",
  "key11": "fJSQFUQgq81AWNgkynzfdEfXTQ6d8Gt8ZZeY7hYov8d3iaFQjVtSZKnpuJ2wNLHX5hEsbNgoTpNgH2J5dzvhkVx",
  "key12": "2yhozLWTYXD1oRuECdvNU4NVrGXAwDASfZ3EG7Q2USKr4QAP1oNmuxStA9oCDWASBqK9NryBcCw73YWmakLcmvmk",
  "key13": "49QUyyoEukWnZNj7hhy3Uv5rxwJCeisit1FCZ3r1yNhQCUuk4awjqShyXEqWnDLw6j8iQ4JA751iCbeMh4MmBRFi",
  "key14": "5pb5xcR6ZyhpeBBM663yKsVUB96zi7ryRyFBdsyPQRzbFzHcJsy4H8ZMVCniqdrHAxaLYbU8SccpWM8GsvZdxkFy",
  "key15": "5S4qtpq9bhTebNfRgBW2dU76uGxfPEet9jKPPs9a6LTjTfp6YVqLV4wYkc3iBB6DF642vpD6Bemx7xus3Ru2eRTr",
  "key16": "5FM8sN3948sMgxMok48gubXi7xFfwm6nNqXQdXfnHvRf7yZECTQvbkVuE6EwT3yRDSuzFrPcTFtJ54B65NpprURs",
  "key17": "icJkJHezTUM4SPzhxH6Yj4S5SmjoKmbKz3GrmcaYBoioUh2YTWx1K7xGihu9qbSZhf8ZpTsgJF4kuActiR5ghvv",
  "key18": "Jyf4DoBzzfRk8WGmMmcGMH4Z4QBMyNZhvs7qryZCjPdjaYq6YQyhPXrmg6muuo5uenm8d4U1bWsKn9MXacNUFeE",
  "key19": "65dQc6S9Uy1rNsX8AJLJhmwrLY4Xqvexi1aLVj7TmqDFVvX8zLGqkiGP5wQyZpX9errKReLyhAHBnTVKQ2z3spC2",
  "key20": "3XcuBu3rVPJGWfjwz7JxNdt7bs1BMype7q1jm3mtEUrnyT66xpV6zbaq481tc46Hyhm36zA2SxyXxZKWho3kjs8B",
  "key21": "3J1ndNFJKxTgD5MuSRAy1EneECijv9Y7ncrbMmwRM84UeBkqQh2kwz5CFb92KjjJErcPyX21xr4HnsZqN19h22WR",
  "key22": "5of6QAxaHsw4TiMT2UG7MWhSz2CwgR1miqhf9VxSjjFSe4neqeuvdqtpRDQvTf2DxkspUmYtDTL15dBCSdb1aKXk",
  "key23": "3HVdLNDB3X8NPmUkR5BZ257a5hnAYhkMYLLxLvGjMkvH9mMiLhWmxjfJffLCrzUs2qQjbicsCQqojfz9nyCtJAkN",
  "key24": "5R9W1xiUcFXtv2rXj1dLykZcgUiuLQzn3sGuWWrs4AGDZeWTSxGiLiw1iimekVJedRVG5SovD4SE6Ww2KHBD84uQ"
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
