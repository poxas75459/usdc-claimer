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
    "3BiVRuWoWC9LqfPDLuSqpEWwKQxaz6NxUBoprk3xH9jxZ8WsxK5eXYDugBKKALJNKDeAev35HLcCxKMonaMscqqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eu1yYUD7Qx9FkKxNmXSNoYCoo1ZS7wfrMTndB3adk7YMMkhSg3KRFgPJmhEymPCQNYXMcwadgYTzt7U8moFQ77H",
  "key1": "4sWYgqZznTza9uABAYRtFGGSdshtvuJhEN5ogSC8isq9YdZjsyG6ZdP1sg5Shvgae8t7BY6zbJXyuGssiicZq6eF",
  "key2": "4DKiyMHiPYQXkbDyEvSR5VBanbadUSDn8AFKvxVdJXjV4sP8cdQtxx41otDLoAUHdm8K8JkZapB2DvvFBooDREXH",
  "key3": "5o9UorXWNsYbwNBEVhUVB4abAp3ANUw5FVsSxMATvpJjqn8XrjpDCh5NZPpLPinmC5KZ5SvPQxiC93ouSWSnAwvs",
  "key4": "3mVwUEjqBXfUepRJZgYf2DPvRnUw5ZHEcArk9kD9sbvhAxphL59mN1TnrCSrrzjkHpoPrnTEV4uriU5qXE4SPWQM",
  "key5": "5Kghobc2PTDLoqV5WTy79hYp8x8QpyaFgLxgjgoCQZSzNwMtC5585mDfGgL6n3QjCpVTznVyV7WzuDNcQdxoi9Zj",
  "key6": "4ygGPQsbRx1BbQvNtSvfcxtNUp896HzLfbZAa4dVoBF1KbcdEagTayprymc63rfd5yD88wK1fV5mScP6vwLnCVn8",
  "key7": "3ZeiHAFKdnEuiqGVWyqeztJzcoJ7Uu4ZYhzD6rxRGutCJcPkLXCDMPyyZmqxZRyXMnZmhb8Y79mJXf239m9byXA2",
  "key8": "58f8o3Pk3CKAsyBU9QdhUudy2zshBopcFTAWbxzoH9uax6ii9WCPLLwoyQRR3DkcZPVCRN7yEK5aDDmYYamTxtis",
  "key9": "4D3kUxGurifAtvUkaxVshftxHBUchu44WWzCwfaM7RnDc8a91TzKNU63ph9Q5XqhYaT8P41tgbd8kBrUZ4jsJFWZ",
  "key10": "FnExERQXqu4XCVXcXZ9cYbgHmLREUpNdfgDC7PRPKqGgDuZqe9bNDtxdc1CvJGehKARZsRcXcd5eSutaZceFGVo",
  "key11": "2JMPmX5ufHeDXWd5ATwMDfGAnvGhWttJP2Tq71AVmqL75ThjTaZ6LtfvLSQvXejCYLQrttxts2ToNVYTmoqdo68W",
  "key12": "4x8h5Wv27nF9CubTzzWiCZhfcaGYACa7kUKoTBsaHdfuwdQC9wsBC1ebFVGikzn1qnZY9N6JqFoX62GCEjdKzMN8",
  "key13": "65tKPLoAN2xhja2RNzuwGFBNXbX3AoGrEQja6yeGc9mEgShbWQiuERGrBexFyPd7yCD9ty4mGt1F5AxVRq6SyyHR",
  "key14": "5u4hQk1Rt3fGhRvWE2VZym3NVRpWeiNeQCUPjY3uy1SiczgHeafmG7o7r4WZUb1JVMLGjnU288UW9RY4osUP9Ghk",
  "key15": "532GjMEgmzm6BQrK5b52pcsGLFbAyb6TuywqAVVvhGuUJ5ev6qx3MtMvSM9B3mhPrUfJXzVyWtkfH9oDtSayGTAK",
  "key16": "5r4RkDWFoFvxZqHRR7vyToBTr48TpnbxywZ3KkWFFh3zbMjm2EzXfBHU4weZhNzkqZK6JkpRsq1comvC35nukHyM",
  "key17": "Amvnbr8nqkWJ71iLELrcLxJpYPqS8xS8qgCtf1kQr3aNHJDJZaRfEFTeJ7ozNav9Bzbia6pmroSVdNKGJMYfRaF",
  "key18": "PgFeLafvAMEBTZQ1M8MrgvdXwVACfNbj4ZB1wyChvtcmESN4v7k5ybvJm5z1EiGtg9kqcK1a7h5AN9t5KQi1ijv",
  "key19": "629CxDvyuHbusfuPxRdeQgQKC5J9bDyuRCYHP8pWGL6xgVWcsQGtYwjmscpnLQExvgy3JHKBpeYc5vGovUGun56u",
  "key20": "67TR3vbiEcteEb4WXbTt4Ke9YJrkbUmZHvrPKkKGpVUue7sLkfSNpvnEgAfZBbm9Wm1Ue5rxmS9h67FEKLX218kn",
  "key21": "41tKbtwSJpWzoq4GkCZV5ckErivKxzaCXy97Jrzi7aAPdmyFgSZkKmFLPFdW1mFxDdzowwRawLBqixsC23GkXcCd",
  "key22": "5yWAptGvV1Cx1zvmrvcvV9bQZwMDQK7sK82YQsJRjTGpBRCtW2kx71CpvGwb2mj5GyUaLTSvgz6pnz5ox1ABawzt",
  "key23": "3RXEivcJ9aV7wgVf84SFad9H3yD4Tb4tSJR2xY2jfHdu3hyVwghuSHj6JiwQqtanFEFVyZpj2hRwiTvceLMnmH9Y",
  "key24": "3PDkaQwrfBPZWognE5E9FVzmzJofKv9hCkUphPK3T5hM76XVKf6v3WCA3DvsJd7gWGnphtvxQBAadjZVP4ERhhC5"
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
