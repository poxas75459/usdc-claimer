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
    "3L7dmY918Mw52ePkW9g2S1vCwsMuoZWhSFnJBUxuoEjBk9LEo6ViTWm6XHfyRGxjieR9cBH1kowqrzpQbJxhCzff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NBpaiFSmfEcJzJyCeP3QSrYSh5aQ9iahEYF7Fy5mnb4RGv4FeDmrjsZVA7uF9JLsNxjRZi6i6soXdP4dhiXosjg",
  "key1": "zqnX8K16UtmUGMYfDpoy85zaXSrVAWJDKbDuareR4gon7PLVTqHyuJ4Q1FVhHRh7T2zkZMjdEau5FWZjSgGzYxs",
  "key2": "4Jacbh9Ki1aTsrB4aQgev3qsgVrEViD5kxKj92KyMTm7Np8yTmQM9fxUEtKgvmHhPpdeh2ZFCmZBJ7hP5YG1L2QK",
  "key3": "2xrQ6nvAQvuVRA7PuGHj2gvjbv43z2QwWPqNm6JwaVNVDz3no71jaJ1rAgUfzcUCGTtasUQydaSwjM2nQRWhX19A",
  "key4": "2h6rsTAJpco3fNfduF8uq7XMxVcWMS5Qpu8AfPtx3RNvqewFDBrqoyGXHoVGn6CECBBHDdEqxW2piLfnBKoJ8h72",
  "key5": "t4s2vjYe6dphec2R9aB2tLCUBnAue4ApjqPWS6Sptvi2x2c8HTRAJEWMLC1fyj5atf7aesWiVh2M8Nf2bZNBC7y",
  "key6": "33AL6Mggte277RGarrxaqs6RCTEet8Hr2Ga8xPV8tyhZvYvDs9tLmhtH1eVakkAjxBMJZbDo8MzSSPdPzP9x2z4s",
  "key7": "4J4bV3JmRACQSrgUT3ppmM1HCsqrhNzxrWCqdv2LmXWFEDTKhBbEvg59YZiGfNdoddHxncCDiKhEP72pyToTP2em",
  "key8": "5XYPkyFCnmLPLTN5TfAANYBsVYtLifpRAethQr5LfNaBJxAq3N3RyM2yz8oj14eDcRkhqDCQUpuCPyUtudQUcHoY",
  "key9": "ZQJJNpGpLLXvWGbx3kHeamQ5JmjNG5k321eMQAVRH38iAQZRsqBumxsL5fXTfGqYoYejtFKQ4o8P7EvsbCmMMXU",
  "key10": "SUxYVQWx3NvrgJnCNBgDEAA3fLQWBT3famZQxPtxmemrudfLMZL5SDPjrjyYp5BUtS1uhLT56oQEWDmvB6SnGHn",
  "key11": "2M93nazCEmyj8su5m4BZJnTZTcqbtpadTC6YkypoDNH7x8S8sSyd7oskFj77FDStPMNUjLYhm3HfJZUM73dtpE5V",
  "key12": "5ZhaLJimtFmARemNx4pQS29r4HZWnwVAYqM9qBAd5qWf9GVb2NPMouSNzMdmHP9FZMtq4sUiQ9ySJUN2iTiwAV3r",
  "key13": "4Jr7cfxjeSYNKYDqcrY5cNRf2yeeMChWzxyH5cETwi1FtzVRXHBnx1iPSpLk4vwZRdLKtHtMRLYs4aBfTJL3fuxh",
  "key14": "5yXfsnKTLaQr3JV9Eke9UTKjTdgwka54qeLHRuoasaPLsDj665WiuwFTJ2bvFjm8aEbhpJp3bFCuBst9UiCSr4iu",
  "key15": "3qzXnZS6hudGtduQLxFwyNc2PtLQKzEFky72M6UJhXNi3cUZzHMJLkabuiB6ESs3cihTRod6BiN9nYcywH3NMS5V",
  "key16": "4ZEnpeThJdJNc6rFAcqgDttoQeb2aE4XmfeFLAqiTivaLV3fGmrbXd8Ppqgxd25jikaBM1KjrViDzPBX7fR9sZou",
  "key17": "EG6UnxPGUVXDmQF5KhvmDMwgSLY3nB9kc7bkhkucLJfjqu8qE5FoiTCSXqyhNnKjM4QQPbfdmYogaMNNaHcFauR",
  "key18": "4y23giHzquRssmCAwUicrKcQvbWqHLUpxeWCixYBzzGxg43fbr4JGyC4N5APrPt66etn6n1MK9JP1R9cWPGw53TM",
  "key19": "vB7wGQQJnWWLksiAodFKRPiY1jQiSo4AnjXuNUWdjvtmqL5thoF8Er1f1EAvcCyyoQ3zToz6tZUdCwY79ozr6mG",
  "key20": "TwVuGEfpJa7wGLE8ReCnteoZjcsuPeM5ipQ9zxDTqHBQ67zTxkpDueZEEFJkBkErKnDdA5vy4iZ7XNKXqPmAoBz",
  "key21": "45TFQc7XVEDTy5hKqBEUGVhPPuXacForrVrserxRA5Yq4dmVK1mdBnjDnnK9D5JvF9V71giu6H2PgHqtcWXXViph",
  "key22": "kC4k9xUiqTda9CHnsqzcb2nKFQ2tiRJFVrqZDnPSqswBFdMUTKUhSseH5991Sxprnn4sd9qwvGyB8mQ7ajnb9XD",
  "key23": "2FEm7E7afY7FNRbERVnn46p1sKAbmgAcYUt1r36Nzdj5tCLkfGJpkgCknCPiLZ8iAehTNBjDDqCvHaU3bA5hC9bM",
  "key24": "sBGQ7FgthXwu8L1mEMwPu2yA5ekektzf5Wcsf45zxjMqyobDzq4bzpmC3VLXNrabFbKwtdb5QRAjUaZDtZsNMQM",
  "key25": "2WSyocTm5Qo1Sj5Dx49jLHi1FhGvKTJoZEy6wnqa9KNsTio3xeCoEMvURtCBHC8XvanFZKvS23e28NTXGMY35HbH",
  "key26": "cv9uXfZ91EeRWF3WngMDLxMpzfSxY1ZaskYePnT9ARg4k4bfGZvE9RRFqCqhnS3RNpgskVt8LXxVASumdiBCKjR",
  "key27": "3nC6LogqZZMGtsiatnJKyJLzdDMG3rRkZnw1rPL9AiJSGCAyqz9bgXpaw9kgXb5CNbNZQ3o6MQMbnyWDaJZxBhoj",
  "key28": "36WZrXUm3M2haS1PX8J5diJGvwcvkBRTfzv5zJVeuiAwVNXFe4M9giV8AjcUu5zqZTQN4JFSNKY3CfktGxQGPNxB",
  "key29": "4uUV94ADt7EDdQTdUUabpy6aoWJRVi2gWnoS7JqdF9m2pXrs7MMMwLAh3ahLEi5Eh9N4xzcZgczm9yk2fPnSo2wm",
  "key30": "5Q5cc6w2akeD2sUhjevLeevT4An6TipPuFUALn5jL4eFH2GpkWcbNzmJzzM2Bar7h8CW2U8hvNnAjVfugvYZED3e",
  "key31": "4o5jSBXiG2J4V4Pz6RJWgSwNjBKWLYHVevuWVRjoUEV9ntamZUvxCPanEM4JU9mDZKUHyAEjRRdcdJPTfat4VsVL",
  "key32": "32z85nyP9CfYwH2BinQzfSBryyPXdAZu91uN2dL48BRdMarEEzYmNLLZTiLpowjscnWNQCVPLSm49NSn3wV13zuf",
  "key33": "3ya5LLmKq9hVRFa98S5zyskbgiZV6Tog5qeS9oE7YUv3W6apLmAfnpu5JJkZcj4dwARC3J94G47oRCPF21AjS4kd",
  "key34": "3aGWZgsCAHBN2QrcUxA9A4RgYpPgMatyrHXvv4HKCeKmRfy447KBMDD5MxMkjXHZoZof2FhGUjG4m8HB33wvKoR1",
  "key35": "JDfgiQPxi2E9wizhYz5Y6AhsPhXjDxdTUj6Z29sHi2JCHtDNjGZKLfz6gKE1dKJ48cezFjEkPEQV5uuCXfV2cBm",
  "key36": "2xc6YcWoy5GMGLvY9DNC2Ux5W1hu1JqWUDAV7rDvUanrkBtavRFZ4xqGZbFZw5Vt8EobQXPbZYpP2tHnvqTzgVYv"
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
