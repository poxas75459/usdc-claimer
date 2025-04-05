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
    "474B6pcXLBSupMar7nLTDpiUY4765RDw7TwQvedRLTeTS45RGzcRwfRSKMKwuHELRevkJ8jqitZftHDn93ayAPPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DbQQ4NxEtFL9VeS9U8QE2JByjSQZNPcRbdrq69iFqLuiUSp7rXYdqFpsJs5mDyEwoRSk572F9xAxa55eBpffzje",
  "key1": "37kMWpc88j7rVkN9QuuR4gTcuDunhti1KiXVNTZNJMmsxV1X4F9Cqv7RnHutfD9tyCuVfFgM9ZktuybokbGavUUx",
  "key2": "58FQQ1MnP5Gsi77Vv6z1oRGvtUkQaFwZkRNRacytzJaoX88JDschqXa28xPeC1DnwuGwMm3wFV4f8orjTMjcBnju",
  "key3": "2kkjNRZiAQTHbB2mp5915uDjZp1Wz3RzVGPYSTLagpiRKEkCTudsd5FTRnr5Wdsw6hQAPgUwbYyXu4j9dh7z3E9e",
  "key4": "4w5en1LbxGz5YFjS3WXKFcasNczFHGfWwDQea5uhRXVm5tEwADpygr3TN7kuyfzs8thq8YfrBajyDzcSLLYZaZmx",
  "key5": "49YMapVWXYFM1z1Pj1Lip6KXGqAqR7zBKh8WEMDuxKRmYup6fE7q3v7QZtJsQM7Ep8jptHHodgJDsB6BuZWZuTQ",
  "key6": "w4x8CRDM8YcVuRRi7rpDopffmNUueaBkqELLNLXBLKUQHHV7SrC4zz5ZA7XW33iRVB5zSa8DSsxhkhoR1LoDpbT",
  "key7": "7W2FbpP67LDW8PuSmFhU1YjLfqXNkJJ2853AFJFteZzYtcKXyBrLfEdJDjZpVzj823TAgCbZBRXzFKMctph2jb7",
  "key8": "y8acCMAd4ErFv6Wo4E6du24xPUsekSBJLJQeZCQNaHBLAiaMBM61P7NKVepieW6CyBdaJ16hWq4VTQ2WzwYKtEF",
  "key9": "3vLatgG9diXVuge1hWwCWPG11Dih3Ru1PfupHgTLVofQmQUDUCABoTbn5MYxQHu4ViryyWw9V7CDZPtrbFiG6uLK",
  "key10": "2U5Q7DPR3FHZhCJnJGcEFQiG9UZe1xvptg3b41DJpifyDCvrucatGYQJY1Zxd4EYyw5DsQNLji9ou4tmoS5JMn96",
  "key11": "22QLWjvXp6VhZktKRb4tuyUaxK6hD5VfPAy36UuodJSSM8crFAURynYWVABtYPjE4pPFDftava2NZff9J42js9FX",
  "key12": "2kdTjjU7LHarH2VSDDN1VRmBie8jXZUkf1RaZFU5ggVRaKmDTVCPQpenH9wuwzfrCQDCVHJWc8UKhDWZmBqaphLN",
  "key13": "5bRBTFptHjSrojx5kRTjB5L7fAK9DUP11FtEQMWuFj9kvnjcmsK3hUoGnNPGTrGUjaQXApZ9Y4qkw1xKUEvNMPEc",
  "key14": "2j58icjbzCxwSp6FZHHyfPEConosUttJ3usbX12mgnn9kDJG7BxRvL99MNsQdyRpkyiZ9dd7pbr757bVkhMN8KUT",
  "key15": "3yPsbTAe88EA7EuZzF8tebZUPpq3pdkuydC7VgjFHXbrLVq2szRrdBZSegk2TgDv6jCgwmtUUZJHp3LikX4Es9d5",
  "key16": "3tBBKEEo1n6QkrsjqvRxG3PMaGemMcGD2WdLEnNtGB8GDBfMxXJ2YTko1L4snxvj9qUKWrGLPT6Ut9CrochKZvf5",
  "key17": "4DXTg6vK1GzoRXqHaFmpop8EcfSkTs5Sptq4zENXnGU8paR4k14r86E6LMEKrNL5uypMzizaFVz7Kj2HszKCACpF",
  "key18": "5kBkHoqpXta5aWHBy9KubvvBifFsUDBtGF7CMQLxk3pTmJfZSMCWim7FYZw5nMn2Pn3Yd2ExgCgDzqKzMpSk9UhG",
  "key19": "4bBU4hj8CzDpxk46GGAHiq4J9meTLSLMPyqZ9yJVVQb12TRLrVjE1vUAq7MhcTMcJ8SzB4Tbp6Hv3JGG2esVX9mt",
  "key20": "58ZuBZZbjcAuhiGkha5hEAvYm3Jv1tMuDmRXVytJGcx6qhCwVMJgQQyxVrpqNJHw8oKb422HcYEfpZ4HzVe5x98C",
  "key21": "2USK3AorycBuVAtNDh8mQJr12Pd2ExuHzF6yFECsFx5rYJkFN1iFZBtqFyZAc8hYDK2q3rNexUNPqCL9SznpZjSz",
  "key22": "7DVavpX5PW1TcbwwJwfSpuWQs2F52LZa2AHMACnckN1CimtZxS8Bv66ZQcQ8WqmcL1fgJ8pnNpH2GSQdGXwo874",
  "key23": "8e9mUZR249LUYfZQuF73g5vWZMLHhNK7bqXLZfPd9k6pKmZD8NyJkbqrxphVQNwz5REiyicp5G27bVUBFJuvc7B",
  "key24": "394JUsZa9mXijfhftH45eeK8xFuoo8iieb8FtoxicDHtE7LkTDHYLeQmEgvWfKdjNUvwwJWyiuW2vj73DhCyCe8D",
  "key25": "2acErTEZJiK8reuWcrZm2LFv3wdiNak68e57jiSDgTZQ6TtpT37KVD5G2ZkNcUSAf3Q3pW8yqhbBADruQwd8p8Xa",
  "key26": "3iUVbYHp3sehPATWkDZ29d6PY1fKjCPo5T8z2gUEMBL5SSqktHQXkeKro9UeW79whR5CUrtq1sY97rH7zBtVWSCC",
  "key27": "3QeMEbYCZPFDtXrfR3n8x4gcdmgMo3Z3kTSCayKqz1aS8MZ37mVehFMmriXN3RL1sdEpFp9PqWENPUK4pPQZ7vxA",
  "key28": "4uUWytiow26JTTMXfP2D1j9w8u23fcAJRfTN1yagiKBK47fmVZWHN23UjyXH9vxUaWJDNHhLWzfCg5WteqGtKdVp",
  "key29": "4xCpJ2ZaBtwjFv96EJH4TV28JKg6KxR5RAKc3NpFyobw7rbL7BViBzbGbGERSH4TvtYMJcVL9NX28dWYQpkCvdHf",
  "key30": "5x8e2yDNRoMRzVDSwR7aYmDdrWNERLhkL9afVQ94omZfShvvTMJg7zmxdpzqPLwdmLsY43WtyLXcjYYsyb8Pb4XE",
  "key31": "4GdFqhbNTUn7QnaotkD1AahNyMuTrczeuvGjrQz7yEi8fo7WPq7sHywKBKGWpJJQbt7ERcZWDYvxLDrgQEgTPiSe",
  "key32": "4sqtNXcqg6de28Y41yroMZ5CjpBLirZwVEoX5XUSdKtTnVPrrR3gCF42LC7MEoe7J7hfjL3W79cgjkwD2ug7P9u3",
  "key33": "3Fh1Eo64NguXeySHAq2BVAFZdBxQSGJWEC5TsibU97btPBcvTzwzcL2STHMEyjpj3whf7MLixGMYv1r2Cuzohs25",
  "key34": "5z2GoY55VHX64J3SD3ArZz7ebwwuvyBDZ6kVT9nfSMurm3oeea1RVaaUDxgT4fSnK77RfNYZ2WkrAhfmSmgaRF8q",
  "key35": "4DekhVCQzzQiXfXNuUmkJ3MuyrtxdsgRPSF4ADuzbD8sEwxA99RMMQMdv8dpZ1WFaipLQdoo4h3pbC3zo5LSUhTj",
  "key36": "5bVgennuMYA8vokGsAigrBMwFfXS3vjjoCWvQxKa9U5TMS3URxVhmiPGjW6qrzxiBrjvwzhPBh3sd3EyobTerWJF",
  "key37": "2KAq8ydQ27vH8HivKqEJzWz3M6pj5KG4oAsfU5oP8SNELLNSuVbMEVupG2E3cSj9rGskwd3g2qmd5xkzqZeAzVoa",
  "key38": "4Aw1aeo3CWu97BumfUWhySRgEpybBrqWrP7uZj9VKvhLmvBjGEKeXSYQP39TebgEco1sFrSqUPXyQ1x6YdMjVvxV",
  "key39": "3PvSRzYntxQU9zX13KEifDgEPe6GQCpm4B33AuS3XVYfuHxw8sY13TMZRneNBxkiHpL52bYzU9Ez5woyfATvXkdQ",
  "key40": "4XgkPWDSrTjQPxX2pxxFVu6tU4J5jvoPH9Mwp69mvnFhrQDXNNfkFzMrbMeJSgu1sN3jU9AaYcgiS44asYVhi5mU",
  "key41": "2qwyMiLfrCmexnFFVaJWRimxBCf3nT61UGiBmft1AxPsF4ks7hambVGNyxvNdkTxYdkq1do5QXHNQCneVs43UGB5",
  "key42": "3fpoXJtLWUsABCE9WBq4dLFbd3rGkRJiARSvGpAgDZegN8oG3mX7sMooRbVkJfc2U1dPpw2ya62gaD3SyeQ8tc3c",
  "key43": "3ksgvSueeA8GnR6hBQ14AjLPqcyeLp4ARRKhTooK8cGAGwgV1zDZ53UWshafugc1BAFBeq6u9TdEv475zwFSKx48",
  "key44": "4iUPmLKUmd7JF1iqmThdqXGKi3aKQ7CwiuzxRDdPVd5McbaqDaQKvVnz9qEVfRMxPHH9jak6vie38TAZQA1Tc2tK",
  "key45": "D7bZWGDBVSK175VHF1DdyfzMt3VKETx3TFAaqZr7uKEWsKGkZE1i9vVai957DPj7HvNeQdbrNmj17ggreWYPNJL",
  "key46": "4qQsHSE4eGuYKe7MoKugnZ967v3aNHNePyzfi3FEK4HVE99wadUip5yNXsVypbByzxb3PX6ujxT718dsGhB848Mf"
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
