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
    "385MWyJa72Nqqt4j1diJRGaKvyXu8WGPneXnYKEuUDQveUUHZeuJrGyTyddfSauQ2LEUNCeVb8CJzoPRJXhMEeuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w3dDdfhavYiaCv1fnNNWPfR9Qo8hk6FQRSLfdSn5n95rhWcWNER9zQFYoZ3vPq3ZpnfnLAeCr1HNVE6kZoN8pZS",
  "key1": "66TQtUERH8Wq4qReDrGCr2ifqXS53QjrC9zXTxfwbGHquf4qf8cmF1SQ5AfGEs7uNv5og8bjKnEm3w55a5N2GbWG",
  "key2": "5JhFHApj5rcNcD9FZSLQi1TbWTkabUczT1ocHda6MQd5t8HEv6C9H33caRJwSaFozZ6tkEz1gkiAaofebqXs2s2h",
  "key3": "vXXZejiHKqPq3CPopVfKDcv3duyYsxLBTnSkpRXWvAbQdq7XQQnPzD1dJTVqJiVZHFfx6T43LHt91EZBYhbifuJ",
  "key4": "2bhqJ9buh48KjKb4XRjzu9JMpAXCNf71xb8Q4BoRvCKbVpGv57fAQkBcVs3F871orcH7S2MiCDF2wCmFBPiHnvQU",
  "key5": "2NS5gRGmU1YEpcD6EgJufqhpz1gieFr25JvjDDZWtWh5xvChZV3MTzGWcEuoBAVHHxbCpgskmxe1HXSDPGS5DE5Q",
  "key6": "2HkqFWZt8e4ZudHhm2pVUDHYjB3n34tfdfhzaFQb3cSanrnTkxeWMhDEgGvu5q5M6U77b3aqzDMw47GqRFM5X91U",
  "key7": "5NswWjyazYTubUFanFNdUEKT6AkAjdYFKSpMnPzDoYFCvssaNUanMiULYEMnohKnrPbZrT4XAxykdFuxjHpdDx8i",
  "key8": "4UdQT3Qb5f3yjbD4wHrXtAvwkCttgqacwdmCprnUuSa1MyXBLbE75dpJ2XwXF1hyRWu99tHNC7LX3kJTUEKW8nLh",
  "key9": "2v1wR5osErbnJm6Lw97tcoCHDu1Vt8Tw5etMqGUdNayHWoKbtghWL257gT2tHd2BRhgQpWazTqnSAH2jFi9GSFeD",
  "key10": "gc6LqpPa4Y3xcLyhGFCXoW9RKj6aCDVU43AZ8qDkMS3jHwsNZbkAkYnWbwY3zsob4vuFYHdimnskZfrNsHV1GhT",
  "key11": "2u6kYJZNRp1iTdTkJ9ez8WwLvt2K6yaEwM86tN4QwAdfZ3JNhaND7jjA97Miv9EoPPVnMU71pWJN88UqHo1z9jDV",
  "key12": "3KWKAbWUXmJykW1QK727AEyLRcBo89dVRtRD4P9H9ByiNnvTKu4ftDCp3XRkGzHKGLXu8f1XVctJ4eB5JnwJRcxi",
  "key13": "3wqjtPs2o2H85WtbrFhJnXM8VvLVE4bzKWsgt4wt2M3AVsHaw1r3xFR8Xcwqs4VJLvH3vrdzwNFWqb5x1QcFnH6A",
  "key14": "5NV4oPj3v1T8tZZrxxhFvtwgKt5DB9pEc4LVkDSwXJy3EM8w54jhyrqaiLk7DRsjPDvHL7EpmR7GZkbVrYKikGRJ",
  "key15": "2G53fRDY6KcRuAKtrnasLghU9wqAQ6J1SJHhSQMri3SwkrpAmnTD51CR4RDd37CPhaojA7oXgtxWHKRb8opgwCUa",
  "key16": "2iTyirTvdBLRS9xhViNmufKUB3BCEL6pz1XG6ZEQrXoAEgT1PdCF2PXKSP22gmsB8ibmMtyEfmJJfkFc6PAzuLAF",
  "key17": "3XHE4GhRkPLq6RbuianDecEWepWnMx9HuMVvBes3AyYm5k8aPUjUQKoJqhJEkneoZGJV2BDg7gvU8MNAUUiEhe9k",
  "key18": "2qC4trU4AbsxJnyWthM1UvbTJ5SNoreb18KLtSvMBJUb9UUaCFg7oeGhW42Ba3E9kn5YuEV1gny4US1D6DxDcCQF",
  "key19": "4Yf7RkF7WZLTnvpqfMpg3Au2GJyytJMLrXxoKaVy813TvCrLJbhQWKmP2NK3yd49E3JCwExpVeRNnwyScaT7xW5m",
  "key20": "3jGjYzADQgqvxP7bwvpwibKA9uh8dXtFxJuNrMys71xp5vmQZdJWKXGVj2NmnDQDoVK9ER9wXZzaiGmXG53dbxJQ",
  "key21": "34MSjZMJPN5jMpuEXCjvSBd1r8ziskZAtehQRNzDRFbS7gVK9GwNr5MY3BXebBv1Aj7hnMM1M8JkZfBkvzBJ2zyb",
  "key22": "4ysWnzBRuD9FngraQLQ29RLyK5GgB6tWAoYZdMB3c5Dfcph5qJbYJmcRf1T54JoobWqHJBhmKRp6zt7LGxebjfig",
  "key23": "4AZk7vfGCMcz2HrTpXqPo2Kx8QePmMPrUTB8pJCVxwXoQjHSFNzrzm5MazeQ3eBRfE4n9f6ifcucaxTV97n6xZUC",
  "key24": "5G9XPVGQdnCnpyEFfsawwusFp8iaSzCpKV6QP4qbBqQYNzRfZCcs99HodDFPSyrqvmGb23FFVcujFk9Csg1JucRF",
  "key25": "2LkoVAbwxHr9DX2nM1fQHTEfyRJnemUjG7jq8iHRcxEHUnGBFVpiwD2UtaVaXxCnQvui1m1bMiesMeheLPdStqM",
  "key26": "5YV2GV3LSLzZiyiESR2nx5jwnGCpNbxr3gh1SXs1VQfrP1fJKSmNwDny4q3KshcpEj2k8S4MKmi1fzfssfVfPaAM",
  "key27": "3yc2jAKjzM4DagWUMYf4YVxp1ZoWLYa3n2eALoWs9R8uSLwVat71mQFmVrA9hyDdjiykCax641acG64zsy8fHqZW"
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
