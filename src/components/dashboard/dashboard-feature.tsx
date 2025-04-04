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
    "37ZV4ffQDXEJqSswszMJjmELhFmP2WNnAVU5qkAdtvXGnMTYhzVByH98HjC6PozC8VXKDiy43jMdo5G7XnU69r7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VjpE9V4Yjpp5yFRj47UF3M9LUGLLjBZ7LkrSCHVojM4qcEcJvvoHZPQaG9dUvk89cKbEYYsTNoCqXLErYXQbPU6",
  "key1": "3xdNWqsyRWLJjBbh5zyf7ZjeaudF1R6zQWSezugDX1642gnLAEAMeMGnpDVHGj3G7JxXBCBFXTYKewLaqd2Vb2QS",
  "key2": "4zkUCmLJw8kiL5qPERTy53Y39pu1fhDedmD6xyfezVXDnP5Stdn9wN515mov6d6GzjntXqUv22N4FKEHEorDGfdB",
  "key3": "21YK6EWVzwopVyrvdwwLgTFNTQr3g9sjqJpoxU17VuS8GrH3t2i95WhFwgKvDBGbqzVxVEy8nXU6YsmvrfyvRtvb",
  "key4": "2SaMtGNBu42nhNcSmAjdnA6RXtQEaJi7spYbqdiD9ZWWcczvk7fs8xvK2Xq76uJPK9BBPqTGPkAVJEYU9YoHzxFq",
  "key5": "Zmj6pvGtGV2G9GtmquF7FaMVdnNzo4XyjTPZTRFGQhsYu2xJXGXititp8Nb39owPC5NJR3zsG5jAVQhNxPN5Jtb",
  "key6": "9zdf6ctWpAPF9sFBQ9MLGR611LUP5fYejf1e8khSx3WNRB6hmwp11T2gBWrFzFSzJdV98n4rfG8e1Ftu6tRRyDu",
  "key7": "2boLetr9hgM3dc7zLHadvEZvQ9VtvZTCu84SE3j2RZXMnpAV7Pj2BoVx3Yzs3u2p5ianwsWGZy5e64ZGLP3x9RXH",
  "key8": "3A69t32w6D8fLNrKXdTVMCxossS9FPyVQzVVvwaWUi1Tu7QdERjB7HVMx8dbU2KoQ77mZoBvfvMsK5RUHjSzcSHT",
  "key9": "3UsCcpTREiBaE3iNuTHCqYhJkNeggmH32uJUUKam7u9bSZo2rfvNGrhKAiektMY1wA6TEuZSa4nrotYY6ZCJ4cUq",
  "key10": "4ioEhaZ86CW7X54kyDrVAyx2QbzaxXJQCtRm2GbkkP79SjRj9R5BGaX3DmsydcvdycYtKviVwhShJMWQ67WPuEk5",
  "key11": "4hs1evsnQ19RoniKr7ye3WfaY5fTb22NoP2ndzaSt5PnJTJbE6Muw9SHThawnNW3bhVmrKxuW9UgqcYzkK3sejcd",
  "key12": "232yTEeWukXQXMJuesos3DQe9X33dNndjRnXHuGddnKixekTbgBnar4UMYYQYqNEpwRJaybXfH3qwEvpebzJgJ2P",
  "key13": "5eUTJsBnHLu5tqrJd6i5VNx79BgNiEjWptrB9E5rbWxtqBesqWzq6FyKTU7hYzLcDkUZed7Gn8ZDUyCkTiBjMQdo",
  "key14": "5MWzityhCzDGtrnbYWa3jzAyE58v65DtNF4ABsB2VUhmRNNJEY6XHp93rMY45ynREHKc7UTWpmnJPQ2CaPFoHvKe",
  "key15": "wufBht9r9Lh78c3fAvQ1VXr2s5vygRtf1GnmhhgB7ZWMrGXqdXjfKVQSYRB3fUUcenepE71j9nHpqi44EG7bgmE",
  "key16": "5oDxfXEvfwsZxhfTffp7fwtt23cTHx2yKnwoqktwmJgAtkbgZ6zkFcH6yLv51kryMubLDZxvrR8MzaDjbzkiAcQF",
  "key17": "2H1ZyBHKTkcsxVo7zsBD5SdiXysdcGivAfSj4VAbWTTvZCuw19AMqVPjQBgWMPRDTgt4DhjDVryZpcuffmYvuL3h",
  "key18": "wwHE5cRp1Ux864grdZsuiReNEexky7xvkcRr6JBTkD4yArBxXJ4xkoYQQQYcDwJuQqpC1tP9Ltx1UppWkae519T",
  "key19": "RQ9AsFDqbEPcDqy9T7BVoAZ7Yi3RJWeDj5WedrmSxTSqhz7cjLHFjXvXRL8Fv17y74AvBe1dj8z7PcQk34LRizZ",
  "key20": "35uKyLB1C3JgrGHxujSkMXUkjx3JkeFJW9jRnT5KP7N6p4cWJ7vmxwpRMiCpnm71WreK3LGteuskzw6pn7MgxkND",
  "key21": "2Jkec9H7PEzQLaKiL1b9qfYb7AQPwEwa8V8DcHKU32qhQ5NUT1roQQwteQvPQkXZoyLAbdRYLEayotdPp2V1T5PW",
  "key22": "4svtqPRvbgaraZ9VCvR7km12iSyH16ABTS5NG5FHyz4xyJC1AT4HccGJqxu4JRCEdQkgCCgamZDaz1LgoyMts64A",
  "key23": "3JAqQgsEcEW2bDMCK29fk8joiipRosqgd6MsudHMuvah2TyDj23NJJW4Gg4BuwVnhvhtCtmDmXKSG33x4barv1bZ",
  "key24": "4o8PtHYmysNTtToUn7H7H2z1VmRVnzFngQFrZFFNvQePPBFLinZH1LzTeZ5sKEcPjWxxMJP2J9eXTRHswxoaJGeM",
  "key25": "65Vco4b2UheoZX76StUL35Z6V25zQ9aw8XLaEW4UCqW1R46sw8njBFZkezJ9VKNFLoTCYvrySBEMTCAUozwSoze8",
  "key26": "F1FYrrkoFmcyW3VioadeYCf9awYzjSnf2o1SzvcKE6VX5hfxYmWunHM4i5K8fgRHxCxTUnrzuM39c8RQEe2AQaZ",
  "key27": "52h4EcnsUxuPTBmtANSus496RLfCiNRmm6oxduP66tkmPb8Af22Bn3g5Hqn9odVMi2Qbx3p9MxuC63TnJYMx1Ren"
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
