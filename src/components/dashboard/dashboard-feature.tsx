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
    "3S15xNwUhrJ2LKZLnGxzwKs8x5MFBagnn1kYZvBhsqXQukKCNYixVdpypnfwPSYdS6YBzigTzpvTzteL2me4HNSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2firobYu3x5C7DVTu1iSfJMrTEpM15kKSQfGhyd2jHkPSHvqSBLhDyBgb9kW7xnwkAW9a4at2D7Mh2uUCk6NE9u2",
  "key1": "4xxZjtzLiQ15oeqiBjUisMvcSzhDYwCXAnjUcW9FWhL6YWNhTQbXARvDwzZ548MUHLz1yQc1jnzjBAyhxdN3GbqX",
  "key2": "3Wzu8pa7H8gr4B2bArWQuc44HnXbWPqMsRtLzgPcFwfvGR91WbjsgCDMTAQEdHs6LQG2a4ezxbVJfZ1DtBnkRkSC",
  "key3": "2kHp56AL92eqAMNW7AcFQtXUTtvGMP47PDbjFtj24RGXNVmJxqvS5USBwNiCLLEJvAidxro9x2bUsuxq4jPSPdMj",
  "key4": "oc2PapQV7rrEfcpvZUUo4uwz4LaZvy6d5jHrQuSk1fZPgu9JNmfsDxuDStJtLeTE5KwzxqVrH2X3JmeVuyWSiqk",
  "key5": "2BNEUd4j1Rv8YiVpYXS4SKf7RoCoNZpEA5vynumUnkmJR3mfZQDg8ZKRD7npzi8GdWX4YyVBDjz8vGyDxCC6d77N",
  "key6": "42C1atB6jKVLFxVCtfMeBgjFFTtxYjczS9nyswD32nM9qf4fwYu2CHr4uo7NBJRnLRVgkLoW9EpkkjR3g23gnLQx",
  "key7": "2h22cAsG5pj3DTrG85J9c3D8M6tMGybaYCcyX5Hsuk9dr3eEDcwW4uFCJAr9hVH4TfYR3F3swM7WgjhpTinqqs6X",
  "key8": "NPWU5Nn5xTYaxeZhkZMJ79WUYLAmoSyUJ3DBYzmJQ9q2QXRXNapk56RDxQT99MLM18gqnUkQTAjNtkqPatMEZRE",
  "key9": "S3gULy4FdevLBA4myE4Y3GsKMU3apsijZD5Qm9LTWVAoqadzFpdfmttmvvdtJw4VtN2yy99TVp6bXk2n8TtFsEy",
  "key10": "2pygzQNLUfoQn2EJEro4Zw2HfQN8gtLvXhKBDSQEvwJARJv8Dq2FXhUstSntmSpARBnUkTTkZVDpyZFtfpQyuoE9",
  "key11": "3gqKXBWS8s1n7uMV2bm9kegC3nSriJyHW9NKf9B91KVXh6WVgnXTMPzQg4Gd8wp173bP97iPFemXVAtTTLqXFXhh",
  "key12": "6azXSLSdwNTERzvoxqJsgZwrxYfE1MTukwjQKZ9taW1z3odQp3tomvqtYKdufSzzM9AWyrprRnoT75vhyHTntnX",
  "key13": "nfvxdZ3kCLmCJzqtwmKFAGjhggTL4e42kUX7ahawj3rrKcGSXCbeTLtifBsvxts8oAcjca6GtJh1hUhMo9jEWwx",
  "key14": "5FuonhT8ekWYTbyEe3xCtX8UaRnwA8HpW6kFAxinTvec4Ap2GWDdAWnsFMimRoS2SxDFTVdsCeURYJGV9SHaVMBz",
  "key15": "5JKaKCfVpn6mTUGxhEL3fbzVpcu4fn9UDopBgGMRpiGwFeqaQYtcjRTUgd2p85vhfuCiZ4xJYBD3G66AkfvVXnmc",
  "key16": "SwXwHfdQCzUTKnZdv7NptDrCPFyzq2mnz4wpcEfFWF8Xm1THn83RaS1naBNMBo5dJap2Dzz5iJA6swUUNa1sy5n",
  "key17": "3dY2rQDpTW83NnAt6uEofaoWX4LEMUnUq5HLhkiWYSPjnGbjHrL8bS2Uitnq2CsiDhGFEPw1dLHExaHcNuvbRMEe",
  "key18": "XvmUEjVurrrDnPBFWSsnACzXqdJQRy9FdhZEM7zs3PXY2ZpJcoFTCi4HPC39H3dcBJCqrhGmcapWh81yedqPHFL",
  "key19": "3wi5ZM8yFCgh9tqGpdW6gA22r1mm7X1vddVHU6JqsdDLi8sV2FXjCXsQFHeFLaDW6MPkYQiF3mgu8wcYw2Y6wi5z",
  "key20": "5d5tYczxipCFEyyTTopoE8HTfoGkbwkM4WwssHqoSKhZmh36u1QMjnqV46cbXnjfkSYu1NhrQenD6XvucMby9fnS",
  "key21": "2o9YSQKcfvJsWnXQaLbdYCkPbFTdcu2hmJnT6TfATvuXHE5qvBe7a1gksmuiLuvRwiTRHib3v23j7LHEWk36ii59",
  "key22": "4BbwT8ghxR8gRcoHXCPLmYt8FTDQXetfVMs8KMRuL468VkhJiHY61Wr5oFTZVWCmkPubQbxQtxLXEzL4j6cpn5XU",
  "key23": "4K4LQjNcRLrBGaQbLBUG2dxdMCfruKxfKH29iBPVKKKhH7ZZY4EQaDCfAxYdbaVPg2uXPa31B5QuyoqUeQsgMNbF",
  "key24": "4T8jrxGTuxL115AkWG4Fk9WiBYMvfD3Ss5DznA2RmmTRzHQLw3P3t8YyLsULFW9S4DbmqBX24gEKfdRXS1samLRB",
  "key25": "3GQSBd39xk2G9bYcAjqi9FuDxsrJnPtucCpuVin6o1H4K2KEmCF9pTfqpDJgUUKtpLL6fKcozngwLnnp373k7KhG",
  "key26": "22WDbQCQSS3teLfGxU1VSP4giF33VLP5m2V1a2VcCrWyWGMB5sYDJDDbrJp1cBXWpX51Yt34CQ9HfK6wTHq3k6mn",
  "key27": "27ZzpADXrFTiqvoXjrxmqoa8bx7UXCtyrfhBkb1vkdewTFiDsW9QUJmtHn5PukMX4UxwAhEFnk9p7GKouMsJVQDo",
  "key28": "35dmVfLdQeu4yas4rbY3is59bWnaTzHqCiTZG8aDp35SZ33SWAyF4Hh85YFsUBvYtZTkTmuRunctzodU3vjMYVH3",
  "key29": "2CMLAxKtvDmT1q6HUQBY98ZYdTAfrYucb2o6R9LffouqCtzGCkFHNAtf8x6YYwxLhLnemA6yGprF6XQ7bh9EAPhU",
  "key30": "3BPjw5QYkXGjysE6T2uNLa4Pxdxx2c4hFtry59GfREcxHsUtRk6oyfU1rdHBv4dAEV7FpH7RstkCHtZY5eKZYhLw",
  "key31": "aqgBNtzpwLnUooKwAvR7omMsEEXo7vtPto4yN2tNTsceLADecNkpszFHCmYRftQ9cFqZvHQHYhK8oyae4HJz2zC",
  "key32": "TU8gCtCqLS9DsaU21H8b9aiEPB5aCNrRqKqsTx6Z3gq8WBKsPD8H7kCnsBDtqwqrGLuosbXGKS5c7CEao7TQvKX",
  "key33": "2BVUCPyVLBEQTrzZ8Npxhk5x2NKT8t3YvTEn9oPE7aLWZDxsCuuK4DKjeBGm3epYsUcfJz5LawgaMu3Yjc4Ppztd",
  "key34": "5DAk5GazpBY86JXFiHqXLduJWH5bQqynMXWfyge9SRc57NHBPEVo7GuGWWqpmdP3QSRrEtnpptwPHLqaBPJafBE6",
  "key35": "wrNBWKJc2dhNNtJw5oTdJxrxdmzqjT5VZu4SCb18mm8mUqe4AXCffuFEGowtJHgujT5uDg9DF33jyQacZbYbUZ1",
  "key36": "2sNVoQ7cuA8jCyfpXJUCqUbTAdx1BBNDQpukg37QborVgu29tPdK4vViDk7P4zqsTtzMa1d41RPk8dJpwNDvpoac",
  "key37": "5gcvtScNMbxFXy23EPUkx467cUuccFzaSt3d6pRWTEhdbKu3NSefXH3MvtcqDH1tYK45KJYFqtg1ooNMmQnxTv6m",
  "key38": "2fZSG1iJxACkquibPCRVJYvz8k399NF1QZCs6Uzugc9VX3Rey55YjH12nXTFRnq1J7hoJeLCjuEPdf32xsF9Kbov",
  "key39": "2uw8kuUoScgfLAiQuhW1zJohYXEw1S6uSda2BMLYY1p7fUFZg1K46uaGfG6LbmuyptC9nnGtEeZzPGgzv2nzstAD"
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
