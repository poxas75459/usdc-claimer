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
    "57wDkdQZWcGwNWMdSFiwnmq2PiUtLzzXp1FvzWArY1PW748MXHyCWen2CRCdaQAEtXXg88Gfi5uqnLiTHPc9Reci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUGMZREcKu9hEeqvEG3uPzhNXJurfS79jm7J6VX3HFhCePW8djkRBNmSqPGX1Aissnp5DfVasXqNDMBc7U3M4S7",
  "key1": "2GmJRtoxPAL4Rs4KDP13fpJo9mbZab2vRkCc5vL5RzsyazkUPzHuzVyzjfumVgdEFQccB8kJDiq2bz3eAqdiRe5j",
  "key2": "4UewotYEvzBBxx4zMfyUtQW9MpRCSaUTzgwvPwofFrG6J5NTYbTwgnx8LgTZtQeuWBHuG62bwMQh8gTGFtyubE6z",
  "key3": "Q1AQVEN8ZztfQqMaR1KffgayNutuA35CuvpfHCuKLNtG8VN2t557fWY7zXDyhcym523njy5aiX26MSoZSU5VRkt",
  "key4": "55EBAkhAmCVhmgay91TGdj4a97u4scmdsbNvEECgD1ZPf9rz1JSFkz8D22Hhk95ATZYYUCAaezf9GyzJTL5LHzT9",
  "key5": "5Mj5oifempaFomrXP6v6SNJJgFhhFUTRhvVQ7u2Zi69WErSfycDMT1m9C1M21kNCFcXggAsn5fsL5rKmMGrv5uZW",
  "key6": "mkFVoB4LMQcs3mg4MNJeb4DpNruQkH5Qf8JG4tzvR5bRQKtT3rgsJ9MbtFu5urFCTnEmgid1Bqp1tV9tjiNtyxQ",
  "key7": "4Wcb1NoQsTfaDypWyKbyvRpQGSmQUeCznJgzGEYsFw1bw8R3VcnPJqu7D9z9PqVGAs9pgqwKCYnhxAWcvWNiYvUW",
  "key8": "2qiHaVdermbLYYnbPE2wQ1w2PCdKBytoNksM5rMXtVZHEaXL3QeHk2ZnLdd9nidPaRPxn6D6T5Pw7eoRAbk7NX8H",
  "key9": "4U8h3Y9GtTkavX6fSYaXbvj6wXpgwmqKugQfF2zvFQKLghS73vhVjHxKbj9AidYWTXXF9cUK3Q2JLiHQSigVTHP8",
  "key10": "4geAWTYtWxnbxEKDKQG2ZdMkNegKSTep4H29mKQnfRMfA4K4t12dbWjxaXU3yuyG8tbyvAgDF5PRJPMzBceW4KHG",
  "key11": "5uaZppEYk14GLtoomWv39yEfT6F41xmuRbyV7cQqVKXe1ep7XtEWKJ2bVeJvZ1p6riHZt7ZmzmtdwoGg57RTpwst",
  "key12": "5yHHNco9Uu5v9VdXPLaYJjfroe7v5UTeZr3ZEpCfU2shQk4ceZroXAqak1XfMGwmkrkaBaZNiFXhEEwBbRD96s9z",
  "key13": "4r7cgvJ1h3gidAPGkxzQKLdVBK8VaUyWFjvcEdtqqhDhwnmkwzK6CXi4EgdzgYprSwLF31iX5mmaN65sUrtMj6kk",
  "key14": "2SnwV7mavDpg4y65RoLnZt8gYPJUVv4jACxp5o1broKbmLTuAjR9iZ8saESEHt6hGvDzmepVEYrZvqoPRkDXMte9",
  "key15": "5EtdgEFqGqZBtSBxqHGSb5c1kWbUfFqJrjQbD4zQUEPA32zhoqieYaYG5XjdGG9r1dGmaUrJmWC948ccPFZhfyCy",
  "key16": "2UzvHUuy6jhfGywAygtEc1rtf5NCJNJqoZ2mAx3DNPgEvwfGdqcZm7eVYr3BxeTGzkqJzA1oERvh84aG7MYJLF53",
  "key17": "2QTssC52oeZ3fzrqofvYySmWFpH9sWvrW4gYuCwKZRGHAp6HR17dkqTYRSKzwbBLwVUDiKNri9mjCcg1RWmMcVRA",
  "key18": "3EFRWH8pnjr2i4MttbXKP56misSZ9aQSCPfoX3VpZ4YcGavJKxZXCt1NLzPHNsytAZrHSdWe3uS3rUqiq7o5CN2w",
  "key19": "3NaWV2Z5NHvfgsShZB4V3FfSBKTj6UWtdF4MmTBoyMNt7t4QcPvxRGHQkHxBUwtEeCcH3sE3VL9Y6Dd6SmtLivgw",
  "key20": "82zFYCfbwYGgAnwwfzdAgc7wTDfftgArNeB4KHZGxPuq7bWeEkyCBMfn3kmjWEpjXUvcxAkGxzS78JLWWJXSFbD",
  "key21": "46fDwvp2bx8DWJkb5N8SjEUhfhH3QfBJ3d4QadQkNkqkT6mLX5SNU38sajJuYrzXPxDxbT1rqLKQaegMd1jMDr5t",
  "key22": "xoUbCnEe5Xa6Kw8ERR6DiibvfkPyqjT4baS9mb8Ln2whCGhfzYkoVKr6acWAxbfK6dSoLvKdwVQdrhpExbgHqz2",
  "key23": "m6cHnHXtKPCf9oMKCiezErZTFLuVafmmDEWfNB6YS4DScPBjdZMpytz3v6PGXXpYtfz3k44f1txu6rkPHzzC7Kp",
  "key24": "bxMk54ehCa3yBTBmTccSptxsY1x2eqVnzAP6YYRDTMwNuncVnV3hjv9UpDTUMDrFviFCLXCfxkJML2F8un9Yk4n",
  "key25": "14oqUEYx7ZHqVMq8bigvWQgDNrgp2DUazBdzxpsBadjtpRXdzjwvLToav78R1rT88m1qNVc3aSGYFhYitPQ9iH1",
  "key26": "3RCXGsvn2KbrxAvzAgzmKZpCNxZgmCN82o2UFpTPWi2bLVRAx3kgV1dviWghgGr6USeQ7qXyLfFWNJMjjvh3U5m",
  "key27": "2QCXn6P5xQE3hG9nWV7PW3dGrv7EAMAPaaXF3bm7uDFJFFo1poJPmCqzNYCPqdgbF2yMNzMGWQoZ89iFjpJi7Hcz",
  "key28": "4mXH6RUBcVYoAj249W4YgGspQfRs6AQtMfNHmgon6kfSPD5HK8wFw1Xjr3gFnKbeyVX3swXQxL6C866AxBhd9Qdo",
  "key29": "3LniMALbkehwaxa4quK4h2UcVwLri5vYhCbGETQrqoT387A73r8m68VRuceS8rVFPpEoSzYEAWyeEgbDhTWoxYQm",
  "key30": "34hRMsdWBBW2hGpX4b73FYnSsCVvhqX2mVA9uWS5z23WmY53LiwyRnFj4ZWLBhhTEQidpgYtVgowaZCHv5rSn5ke",
  "key31": "3sEXMkx87pTbJ6TLB9suRQyMuzMcUJwbsVw3WfUHdKVAHbfEbVFVQHBQqzeppZRGk8x1HSP1fcmRt1DwJ2Z3bGbw",
  "key32": "3BRDrYNijYgY2zZPXapCRfTYtEZ4rU4NvaLdoThHXss85qUcz6pmjNtrwqZuxLTDd6CD49zy75LvnxuXnTzMarvf",
  "key33": "31gwiA5SfgRXvNcT67GCf3JJ8QzgoQrcjRBTxxxMrRJssQmcwavdq4zG2dVDHy6Ds35Pik1ZmkDxU6DHFFpoBatA",
  "key34": "5Snb9eZECRYBaovAHapf72fdDfvtFAgd2x89SiVV4dTELd3LdUQ7hUNm8AHMPAgXCpULUHfXNP9Sp1oh2QVf3XUH",
  "key35": "3xW4QeMPP8wmZASDLMc7J8QzXvUfYXYrzwQZxn1FFC8ogeZuMC4m4fivUsLjr5Vgq8QXdv3G9GpM95VprhjxKFuN",
  "key36": "4GdmAfdyXjnekEs9XMzFfpaWi2sNW88KbzDAVNhpryD3WCKb8cCsBzBj8PDGp4VnfLvWrMzqHkR5yFNA2GrPktAh",
  "key37": "3Xjdqf5GYWXgQwX5x6FiVHBkR77HL3HJ8rBsC7KCbGWViZzfKQbL9six1yBER6Ez2oFEKKcuYf5TaVpwpFA2fNeV",
  "key38": "2cctdR6V525dXZrKaz6aNfUuGsGz8rr5LSSBHbiTfx92zp8ZxsobA9vyPbSqW8TbdoRf1J3UTYigeL1ZVHTnKQm1",
  "key39": "3RDXY8YXci1SHExTcr2woYPp78fxKus4n55wvm54XVXB8bTGbQoTtpg5vrsg5jAu9X7oH4KSfr2U8BMeEbdH9Us5",
  "key40": "5D5e2LV3Tmb7atfEx4CfFksnQsJHvjkuikzywkcXLhDy2TLLBp7aDeHGyTerLLXJ2ceLY9y8QbzqFkUNt3eXLR1o",
  "key41": "589Epes11sWHYdVtcPgbhmngi2UjiQCt75bDwHWWBZVasJTSXWYfwajpNbcRQfEVMMR6gd1EKbwv74x5u2S5JLoz"
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
