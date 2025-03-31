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
    "d4MJULK55A2Hmu9W4JCtRZDBKSTe2BU5YNvJN8NYQfwbR8yZAxcENDTVobDoXG1x8Vwdt4dEr8PZHibLKbEgCbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KEt3GumpVzyfyUPXZLbZZXLVWRUjTxVZPLRrdF4hyBx2aFtmDTAtjJuqDswNhBteBLpQPt8uCgytKA1zhgfZciN",
  "key1": "QAsaY3mvZUieXdVwcKy3NC45eiRmheYjGySS9hQAp7Sij2X7rJd1vmfFY2wNeMvg4SmSFkfK3KFHtPj6Em5Vn8E",
  "key2": "25c9WsLgjkEbFmfEumefKFX5w27W2T3CXPh6NtgbZGYnSM71DaHHYuvsRJ43Z5bVGFPoJNBvXaQ4C7rtfGXB1BcM",
  "key3": "b1RdkfAjpEDQLyzaABiy8Nxecu6C4xtzzDDgdxgC5oJGpRCVbzccirTNn16NGGbNcsrcj81W1LS76CSieT7sY78",
  "key4": "2GPuXqNXgmmBoGEREjdtm92wC7L9n26yWRwv3YSanYtqvbKQA5PdS1wCZH3hepe4qMpq6uPosABXKfh855yQk3gY",
  "key5": "27vv2Zyq4ZPekSG7D48DeLcZqBweBeRvZqRL2vbnE5CwoaTM19dmRGSh3cAM7wfp8AdXSTdUVDmJ5bx6y6hGw5yN",
  "key6": "3GURc69PBMeUt1fLMvEShqDAwUhp6AazVpM2Gx2Wju8ZUVRX5bVdktTswrfhaS3tNwKAZB2xvxs4kitminhBWbJ6",
  "key7": "WFPj9xjniJs6op15MakW31f2GEGsRAkMkWXutiMXnENEfytEd8P7eM4vkkgdXnXrtCeyB5DKf1pbZouLJnaCYPV",
  "key8": "5r1TvSGT6JEk6shN5Eo4dpGUHEZDpMNv9BEdKyNqSo9qqwyUtYJZoh4XXAVwNPy5Hj7p2M2vVZN8BkC7B2Fxv5Qb",
  "key9": "4T2qbL6wYhUCZr5XkFf1bQGi7EcTBUeHzuEGRvsREwHc7y1x4bdsuRHy7VqniSrdEPSyc41Zts7AT2gGxCE2s5yr",
  "key10": "4aTL5Qs1NX58kM6EcfJq1FFjSs8ArB63fi194KGHWr6hFKUFqvP7KELKBKEMge3TFiZN8m56R9AkecejpGm2uDHT",
  "key11": "9R77R9PdK6P9TUEy51gGrPaRqTcXAMTjgytuh7jPy4PmGMDqCjRZwXCxfoQW2SdQved9dG8otFPaxL6xdfZ6TtL",
  "key12": "2o79rosBGc5JSqRTHRi1iALoognX5jrBVZsjg2HDwD73Kb1sgx826D3zWWGaJGjGuzHsMkQnG9fZScbWEoMoYS6C",
  "key13": "2jyCcqa6uqEqY1MCb3UPvtUxavn3baUHH3h9PAjXTwM8TKDjXFKxK379jhu1fpgt7zRv9wDyWcjjKdR24LFGo7MV",
  "key14": "4UajA39mzs8zZRJ3yac1NqyVWgCD4xevNdCqvDV3vzGed5UFu43tFyGS5xtY5oX8TTCRgbn5gRxqVUDmzZMdm5ig",
  "key15": "DB17Np3Y4imNwuKJG5V6sj3wL9s4vqAtzbt6ohLjNRMcEJuJAzgsPycSg2nKEQjaqC7umAx7MqViUZLf2m3YXoV",
  "key16": "5Byrf3kM8b1xPi2MFHmTdC8oXfccU5TL6navLY31ozFAFYjncHeiawMRCiNgUq9aDXtLDuoMHxeF4fQ8cYMMw5yL",
  "key17": "64v8FoT6iVG3iirvqqnumAbkK1qgDtxbmspbiwZXvB55aNhcKpqx2YHDqqPkaSqgv2WeYsQzbjtzhoku389y7dMw",
  "key18": "4SjW1Qm5oBao33YB5RhdJLWDQhEY26ex9K1oDJy7EGYP9J1kMJUcgBDBPr7XZqg5A3gUipPmpYMk4P75jqEgELf5",
  "key19": "fPPMJqcDaZXxWK5PAeu1PgMP9sLXPH6pPMf3YJq7RaGfeyeHHBZCP3z2v5H82irRcSBUt57shYpSv2s4QSMKYP8",
  "key20": "81SDKfbbSCmt23vaMJm4g5ASgsAunUKqEe356GBrPenStqPwDh48L65MQ5TPcSS8w9StUJXgpptTK9ZU4s7Jvaa",
  "key21": "2XhdDoraqW6jz3obQLBqBxGynQWnn2jmXoi8foxC7Bp8jvu6ik9LodZwGcY7aSabmyPNNadXpPb63tgrqb1oKb7k",
  "key22": "5Hh29cx8UEDgtjJnqV2dQ3NCrxfYD6m3LZBhcpdFRgn1bvtrUQpsWNiwpbe9i9ouHH7Jh2C7VYRKLTKDQSi8BAie",
  "key23": "5p6vCBiVWV1jyQH3VeNR6DZMrLWCbsSPMSRYT3n4r1FiH96MqPDae1YMbj2orKcf59NEkhcfLxoAJQfKNG4y7UjN",
  "key24": "4pK8a16oLZ3A4JV8ZzjZ6VQ1vzNoPjjnXAeieKyuA5Sm1VbBUtDBgCmzDNzaxfZkRQw5aXdvJCr6dTi6cGGXQbBA",
  "key25": "4LwNPw9XnxzUg5XLUjDt2sjHPcjYwk5cfkEMWYubBdS3zgKBxFpNdXr5fFq4iEEWYn1f8QcSLp4hfVW2UTuZVCaD",
  "key26": "cqVp81DT3rBXCRjVHjULMD5vRH9PxvSNP3bDL6d8nbDB2Eo7PKujwyVdg4fT33wdN2Pg36ZGoXV6rdJJ4aKSMUG",
  "key27": "4pnodSCUMwHhQLhWfAaKbQkgpjgwd8YpRwWHP4vsYiG4DdsgJTGNSg5G6wmxZyhuSaxmDgCdKf8t8a8f4njzpoxZ",
  "key28": "5DS4RUDFLjHcSnYRXqMnPhtbt1ikWNhGCUjaue89XQ1sVxVcZH49hvNT141uaHqF9UfBTGJ1Mz8SFzkRoF57Hbtn",
  "key29": "4haeiLWeQWBZcfrubCoTxAqaA5Bw4Q7XBG3QD4zGpkaW5EomSkNfeQhdTj5kuNFVNcrYsK9XWEL8nmyJRdVuiL3w",
  "key30": "3fphe5Am3xBCQ6iBtNmYHX5bGy4nG1UP1DApmH2XoPyBUd7JLKVbdbX2HTSE3bzVMfGUEb3M5ZwZrkTMZmj2kzTV",
  "key31": "2CEJ8w6tJCTpWyuUEXVNC2knT28mbpHw1wxjcxjwEr4Ek1bbKgmr8VNB5Bu4y3LmR2Qax7KfrJDAWiU1YHpHbUNw",
  "key32": "2mt88wJ5rz6PHkWF7NGLgJdjZkohHyeBp8sqDGSVFmHn14Uq3QwNFj78PjBgeztmdT8oWayhTGSuQomRXbmN5UpP",
  "key33": "2mhfWZr3d4TEj63W66qY5N7PvXVk7ADpGsSmYu7tkTdTyoMStctk2Hfi8dQuyqgMtzFt2UeLNraoTrp3hAfT7kRc",
  "key34": "4GamjvqHQXAC2YSbfbWVAuLQc96h5JeeAKKGa5jANv8iiTiyRqGJZsYifF1JndbBjjZu44N1DREAfWFmMMD91u1",
  "key35": "5yCATti8m9GRiMpLYqScLDw2B25xdmwkunzTYhqmnKiZUmLPpsckixRSM6bKKdEV4gtvhQmUUrFBNrRmZ6i3y2ZK"
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
