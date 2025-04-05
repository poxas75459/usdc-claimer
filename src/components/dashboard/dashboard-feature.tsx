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
    "2zJB1V6v8icjeirBoonYhzusCBXFFzz5QwiVJNLBTYw7Gs1P2bEe8cjGjm2jRFY1z7CEbVf652Gu5R4WfaLtW7rG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYt8gLAdSob6e9DufoYELYVcm3tCcbhPazeFA3ByBwg9nKjdSwUWgipkovNQ1PCX1BZXoJo1o66Dm4YxsMWyQsN",
  "key1": "FiKEsEWdZf2FzCGqtzZUUEguLwxwukPg76oqgr2PZzPU45GX7hk6EFd4uENgRvCEhvAnkUHA58QKEcMSVEQoKgN",
  "key2": "3xoE1N7EcSaEbsHTyG3b1wX4kDGAHCwLVgg1deapYo3xNKgwxC7Z6axY84n8KBhYqTG5mzbkRwmAMCMTz8xY1gj6",
  "key3": "zpZ8hxcnbroKb7Lc7vJuSDuS6MyGEkiWX62PwAvwPHs68sqjLpkJQz8FBFhLZuA1Yfep491SybTR1s4Cfryd5L6",
  "key4": "5JxVSg9hgG1rJCeTgAyFemmENV1gR9sruY8UzKdtAHyXiEtDfoQp6zsRVUGLxozjeXTFnDSWWGVhNf17mRH2vQcQ",
  "key5": "34TsN6KCMt9MpkhAXaYaYWjH2wtxiubS6MDjGb5i2grbYE8Q156jopsgaJxzKdsedYULZyvuRUDLmwixSVxDwQyz",
  "key6": "5f3cRdyKQ97F7Mz9AGgavDb6PnRH33ybZc3W9Wq3XCCvc4g292zrsuGDQH9iUpHCxeNC8Tm8m1E5QMvbbD8TbPf6",
  "key7": "3pTxDDUuEmkdCm1XS7E3wr4n9qsBuHS79uLKDvfTa6dbBMvzFWK3Lhy5tdGRPELJLqCCF1uS3YCEM8GadA8XPRBZ",
  "key8": "3SJNrcVPmeY76uk9E8FJP9uwWb8imj3ZnaGXm7H7hs2RTrkzEHAUiLDxxn4wa1RPobNxUFWTQKzRYSqDs6Kq1cf2",
  "key9": "3cxHiPv6p49U66o6q5STeg6PucFwtuftXRrPsXXVq9LVKny6r9idSWrJDNGKhkK38JPTzVQjS8KfjRSJwf5RcjZ5",
  "key10": "4STJDaExnceUDPqbiCY2SF3Kt4HRyMLfwensk4g5E1qBsGtkab9DCMSNxGw1ZyhwzoVi1yF4FG2DomzuuBxFyYpd",
  "key11": "5uRNKy2FVnPP9S3xifwqczgaPC7cEMifYMSH63TNnfF7DocbzUREJYhKLiAjoF97vQx4qEsaaBGzvsTEZ9iRkBhQ",
  "key12": "2HaYNixaGD2ZKygTHegmZP2WGDAZrrjL6LRoD33sfQXpEf8pfZ6vkNPu1ERAzwQpzWNNF7wU6mzbp3bAR94M9NUg",
  "key13": "3mYwvXT79ewbQxgFjGSB5Sj871qH9zuSoXn2T5L9QvR7A29QWQQDo2boLjwVWVQn7Fq4tYqWdGPRqgi48Bcqoeze",
  "key14": "4YCzyHMKasNkHbbwxSF5KrSBwpZ4bcW7SEP3iqJAXRBnzNLsZqhJa9ZiBnbJ429DxavoPbQEZToXYWbPzJtoLAhW",
  "key15": "4niQzoMJmkyMg4PmFhuqG3AjtFiVrDSMKL3UjEDGDBCtvsbL4aF6q77qGysWh2LFmqsqw6Yb75PDUSH9NnKbzXyu",
  "key16": "3NzGGmzegsicMKXLzm7dC9L7YkmW2LAgmxz9gs9FZ8gK5ipMmFgutSgybtPN8m11eTYWZmx4bNaxrHoPbnRPmFPE",
  "key17": "67hcaknHtQ5Bxz5gm6n43hcfoKGb4dw7QmCdEn5tnS8KhGHiFZNxRGrLUcSCVypFDNk8EvgkPuCNaTPDdToHYTBw",
  "key18": "3GR5gCRXPjT8eemy2s82FrtcuzEYyuS5m8qc3mjwjyDG1kN3FzpbcbTTAkbZwGNegSWpHo6dQTwB9gdJoHdH1Qnh",
  "key19": "3DQapLJzVQkPa41ytwQwgRq7FhQoEosDWGvor49VEkmxYhoCBJQ82o9Q95sCEWpDao5ssX5Eqv9srh7QWo7T7nw3",
  "key20": "46YxsMdVuNDsjK9AVgRT2bJUxdqhxWu1eS8ng4NJvbxE9hVpm4j7TEkhdXJjkT7ipcq62exwUQzjehXT6pYA9Nd9",
  "key21": "5ZrFFHU96L1FQnV4WjmAykib7gpEWBaxAfGL2e1hH7avc9kWh7KQwqckZeUDoJUdkX3ZNnWEKYtYdQe5EksCGSio",
  "key22": "5YFay8C14FsFDbteAmvExp4Wi3ugoKMtRStKQP1mai3dL5jgNUQDTK7Noob1Jb5vsCJyxAypJf4Fo8jv1zoj2Fum",
  "key23": "5nBW4PBTgAkPQhC5crQkVqgrSyWeiFJ6PGo7dF1whb9tU2LK9ctcj5xj65xUgS5L3j2Ni1d22bmXYpVL5kFGcjNy",
  "key24": "Dw52uQEbVPTLxjqvhGbufiwtrUDNeRgGuPfkYAvkhxqMSKQjm72RWziTdj49BLw6Na6WUuwwvuD28nXVwbcrCq3"
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
