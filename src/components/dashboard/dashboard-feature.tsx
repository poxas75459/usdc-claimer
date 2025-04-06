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
    "4danhVoJaKbevMGgWsBmnZJiQsGzZR8hqXUDXWWeR1qUVvqnSzbGsoyHMqioD8XePSmrb1BUgTbm89VxBjbuaC9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pcY3zKf8ZBChwQsVq8xfa1peihfvfNv4wyo5ABKsjNDDWNoZZQtgygynjf278WTa5nhnEzX9QHtb1PU75ftTPp",
  "key1": "UggsrqBecVBxd7hW9MHfkNun5KQi5uchNu32efBTDcwiUp1dq4FGRhNf6EJhXjazqRYrAsjN5kmJynNgBfjKKbo",
  "key2": "2xpNTSGtMdK2otGebVHy2aQUWAWMCtrMsxCpqQ13KPmfJiU9D2Tw9JC22pneVBQ8mWaxipitbEyzb47E3Dx3nhzB",
  "key3": "4NMmDJrSwBB7u3nzpr9uv7XQ56jbEHhK5mVGvRjuTkRQD2DjCFV7XkJCXXRmWz9Yy6gmPqCcMMsEVrp7EuUNkrez",
  "key4": "2MDWcRz79uTxcnH2TckB3dVsWP6WNG6EXuwpsANDC1JLqRSpYRMpyA2cu1hKvsNn7yXbakKPpf7xrHcS16FM4bX8",
  "key5": "3wtvmUE8DV1VQjTeHaMsoVPWVjqQkfaUk232LqgGTgEPF9WtNbGLJP5HJS2SfvNMjqjZG763jRJNacNJ4Uc1GDg8",
  "key6": "qPzv5xScpuoTzLFCCNZozvXXrrB5Kwe9MN6zzmv5oe5iWfdJzDfdgnpABva5rRPMLfX5rnHT619yWnSTi1rNPRs",
  "key7": "5MgeXQJUmnG6XoFdnoE28bgrJfW4BB1JWW5FMShvnfPK7iXhSpqrGgBPbfgNkCjuMNojWgoC9HUmQNpen62mKjKw",
  "key8": "aiyqMCiSLMPwSEkmzsgR2nCg1DP8Pzvgoq35MZSxnmBwq9iv33SkZZ4z5D8pQkWAjEcjnGjKqSQRHvfbBYQC1Ao",
  "key9": "orznXAS9GXezQwzrM1L7EjcPyG8xfAuRecVErg6k28XFHKMFxcH2SWYJMkyTMsCcjUEyCSxqaEo9ihoy8Lu6rmt",
  "key10": "sanurijaYtYpggFJCa3L91j1CFP9wPik45xmiweg64bsfG7zRamxF16PueCB6Qg4n16LAyfFEfnC6BHspUvVmVG",
  "key11": "VfvjAdfACeEoWzTXqys63cRFzjNchXNkmzhfzBqz9xHazDfd7f5E2aX4KNomzVvGrnCB4vtd1WxMSJom6v6TgQ3",
  "key12": "2psqZN48BJcbbUr59qkjEGfx4Kcy3soRePMefAygfKVx2ocx4WCkey8dBBgdyfNzYNru2hXvBBvPnFKx2iGSF74w",
  "key13": "3sD4MSZ3LmdF3RycUK64Bo8QGoAycyDpaunw1t2KSzM2v3iko5bYAbBGQUarJCv4xNBgn6DowLrN2YsxKTZsYELk",
  "key14": "3E6juV9KTFRYdUD8CgzE5hrVZf1bK3mS8Q2NYt8YLPVUts1Q3zz2M72hnczEpK3fsxeVmSLscT5WGRFjK5RM6b68",
  "key15": "5kgmZ7k6nKWfAXWQtz1HP39rYxE3a25jBMRjpLswAZHxTnnR8Xce4J8DdUSns4DkSpvotXuceZhHcK7A4iNLEFPK",
  "key16": "4mRm7cgnxMqmRNBJE6CLsRBoJe6aVZ488G1ymfMe3uNYfAWYrLXtBuHKGatmFF5umqfNR3PKG6xPKgkAJQa98keA",
  "key17": "2TKeJ9duR6LA6Eq92ZddS5Vf9E9U6iDf8RNrbcwga3v6bm37GAnjiXmMfSUeGnRHLDGmqC3XHf5V5SRsUZrWjJPb",
  "key18": "pN1YCidGKWsis2WYU8N7ZfQkRFY2n8kugtyKRyvdB2q8kcg3jJ61gY3tNPU5VBqfPC3tPpeyHzrc7Zk8Rj8pVc2",
  "key19": "oLw9oECuxZGcKLYdYTsTmzEm8dgB118AH9aGAjuuPHNsFV8qd7XCPpn3D9EFLCDA7a8oGHnYxmG2RfSNM59tLs9",
  "key20": "4Kb3d8yWN3UNYQnFjt7MsBp42e3smUXyLbZnYUC5weT73vwA19Smk6hMnijuKiK3mVWkVmUGWCamWcayy9AFCLSK",
  "key21": "44oUUcSp3E1uUocL5M9uQLDrBJWansCRgaes84P6ct8rBCQB1VbGdty2PNhp8aoTnt9KhgeyN6HoHPKVwBH9d9Sp",
  "key22": "4SoAXYxR6aHCtFbpXe1tcYTzoh1XP8KDJrAXBEXiXdoG8E4JEKeJ8UrqHWaHMM2GLiabH7auZFWJDhM7t7PVDMUx",
  "key23": "2EPgTRAZnLgjycRDCJHfvuJtkmsszD8bCGcSiaoYQpALq6Cah8E5oD9Fd5Gx5pmvwuqrj16rohuUexsNAJoUz5ur",
  "key24": "4Hvof7xDRN2CNHUJCw8auD5Mu3BLD6Dtwv7wCmLgjL8mh7zYRZB89xdGm39Ck4yphW5UjbWRz7hGVt1P7aBYMjrZ",
  "key25": "3TSyEU2mZuAekNS4Me7PUZR13T6HdUA1PF7H7s3CQ22JXewXdugAfZWCqYPr66NkS9vADTxQjvVohMTUMvWhvqQK",
  "key26": "2DHwTa91SNJSiN9AGKQUhhnFNCGqs3aJk22xzcjWm2DSB4WpTP5mcEhG1prXSJzA4EymjZrQfJtVQT6YKtfxofw1",
  "key27": "2dqze5hrMGxFLByNgSVEKMk4Wke8UKGU9baFjCsRTHs7rS9NME9JtX1cH3BWo9hpzkrEzXE3dJXeo4t3jP2FfuE6",
  "key28": "3BqWaPXtbFJ2CWzqKtrw27EiM1FDurbXWp5iVXCvj9oUsR1vHY5KSsEuQzv7UJEDPLkdgkZwg1Wgs8zAu5k1kChb",
  "key29": "2EACVLESpt2LV3n1TLQqgKtZ1VcncT3Bu2DhQn2iDxsU2AJPC9aQX2WQiQwScS8g1k2VWSu764Ym96m1LFmtW9SD",
  "key30": "5agJnHp733vTkniEqVFgvrFwNrraMfXY56Dvvv5tSaQuFWQxj2Pi8yeqCCptJaTBGbVALojo2JzfJaFrjp9EbMpD",
  "key31": "2voAAywGbk1FRP4cbz755udt6Yy3bCHxzUL5gwr7T5szKrMN5xFrCf3fxti9rePqCaGqiUtMd23zCrDNr83PJmFG",
  "key32": "4mrnazL6iyKnj12apGkya4CzRVso2HZvcGa3AJGdNCXkuCf1ZFcA7zv32VeCCjrxmb7sjWrcABi139iHyMueVTu5",
  "key33": "Nb6Ry4bnPsz9USkiY46y5dQM2j1iLd3kBAysDz4gpNdv9M6Lr4ogz6ccP3LjTJUvgb92mkhttz9y1JKTyRpLRbG",
  "key34": "45pPkV63wrGsRD3h1Nane6qRiEe8aAx1HTT62dEE8CmqymXNfqGJpXz7E8dXdssG4dwr8eW5bmdBAFukqRkRjxzz",
  "key35": "5yANqfcHSRZHVFdrdUndeQYXNtYzbpidTpCgwopF6m1pq14e7p4qnkry3QPZfk6TYEznFbswk7szwq7oRDouRbrR",
  "key36": "3UiFBYKyenc5pxoiQZ5JiVbqTvqLvHKuA82UhprtbAQ9HeA8Q4rG21tRvFm2rKVXivXDgwE65rvuKhyV7AwVSc45",
  "key37": "2EWZt8z46rtixZmkqhaVvfMGJSjB3q4wYL93YXSP8H2szEV4qQh9TC6urCJPs1H7KY5g7P7XqsfM7AzL8CxNP3Mb",
  "key38": "2yx3Y2WdsoxPJJHWqkUbo4EBbVFixAJFdzZ12hE2CJLq7F3GUX1pPMXWZyggF6aqm5MdYyK1pTEhVZwsMgxG8Vk2",
  "key39": "4KSXgbr8dic4qKGyKygincFfnXh4dXSfo4PXQYUKbpVd86wjHkxSRNfLRugVRFNXA9RVoQvhsK5aeciTWD2HA6vv",
  "key40": "38XuWPdWuWRfUDGQFUQpw66gRUA9Q7HnK1jQodzGSa3agYUHxayRsnVnzXnKH2Zb85M92G9yLyUrECnMCCaei1vY",
  "key41": "2voo6UaJSetyZEvN44U7F46xuf1iMQpEh4NpJGtz9bf1fT4izNdbyPKzjhPrrWqSzU9AjQcJ2f7pvBsCSXnV335w",
  "key42": "3RFRKrrxZKvrBrUvVt1mRpdyTJJ1N5onDTy3CTGCEYspQ7aY9Xg2AcmdX5GfUp1wP6vU4sFDJ57PeURbkhAdt4Mp",
  "key43": "Kgwg73kc9edWept4x3rjB1BHMtCjtJRtEgQYreE5P4c8kViKAykKTfQX2UJQVXgSsw82wSkyGYHE9u6bG6XYv7M",
  "key44": "DreffquEwWouor6VVksBqdfYXNH9jw2HR4Zi3NfegcsrzV3MUmBuj38EhjgBkEdKun5nKXuPkP9z2iTWrq3q7mF",
  "key45": "5LjahCDj63ABbSxaZ1AdjA9ZmrfPQALCAfxSENSi2kKhQ2EUhXM6Uut175iGjwWVbZdPPCyiJgrmVWKeXdSdmh2f",
  "key46": "2LDXPEyDfAsjqm2o3aWTQoF29XRiQwKD817B7Y4KFhP2Ppr3iqsm41AvFaDWW5mMMdtYF7UxT4X5AkbLEZz3BGmV",
  "key47": "np8G8T8HodzL1UyUx3o6skD5SB43zZpRB92gbkuMjmKNTgKDrTznFwW6t4QBi2dPhEBQg1bFmghg3hUzEP5YRUn"
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
