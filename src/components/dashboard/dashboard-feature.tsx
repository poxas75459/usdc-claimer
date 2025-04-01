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
    "XpPq5AzmBDjjbLjFsQF11wuWkq7xwyhJNaaGnDvt51YswS72AQpfCiyzwn8URi8V5oWudWmWQJVmSJnFEfB4mBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqracZbNycztaTrEt2hrxd51u2upwTqenDsimGzTREt65w6b4JHhKS9yTrrfSVWNXMUBz8VgzZYMQUxkJuHuMFf",
  "key1": "5qVRUQfYJiopJfniSoZu5JZLPqjtMvr6vMDrjAVXZkgQkDp3EHmdFdGGmxUWjbw8hEzo8Ym8E85Q568SRchXP18i",
  "key2": "64VwG8j8TSoeUGVJxe9PvUE6eyup1NfJg32EhNbfivZPgS8woMST9YHCjYrAVpiDLv56ZQvsZD4KL8XcaksLDJ2o",
  "key3": "5AijkAfXDw6JR8MsUrZuNL3QDquBgGXkrhifN16wucX47wU5QD8p8j1YNZSbZFoBRGt9nm3NmFHEfDGX1onnBAVf",
  "key4": "64rN7mP4dkTDdAW6FydN5hftYwSo54cikvKaX9km8rWHeNshkjiFSwmD6DsTo29iQa1mg3owMSFvd7UHMswVSssQ",
  "key5": "MD1Zac6HRWAbZEUjRQn6RRJvxPcJFWLG1QceCTDyB5WtEnFZZXoZstE85ciM9ZeGT9HCY29pH8FpP1tAB6J4R5h",
  "key6": "kKFV64cbKrYp6z9mv7MWihqTSARC7EFrDre71V5vpTAhB2L1GdqqKbviZ5dWStbyywtgjxm7YWEHYv47oz2xYr6",
  "key7": "4Qcea7ztLyk3Xw7bmpoU74kzkgeSRbEZSUgBFL7UBAWR1DHu3Az9B7w5jba9jAbyjijyySkTozVMv3cD1AifMJmo",
  "key8": "JUyeeDuvCBK2hmnRUGpV4KNPYLn38iXZZshc3YJod5bWWTVPHf6amEqyfr44yL2GwBchAadqZjy1UBkJqm7phWN",
  "key9": "25KyBTH5pdQBsWcxQC9tRu9tRDMuQQabvPzhDMd26JaPeZw7trrDPPM45dXNcjVnTAccupjsVmjtANWh28a3kp88",
  "key10": "44qMFohxD8Ef3pD3qwpjiGpjJLCV1RqSKjSom9NyuA1ZPqCofw8595obzznmEvsrhgDxZZWYZ6NQRZ6exHc3NrjL",
  "key11": "3MYBPKq6bSvjNuqMXkyuHccWwUvhqQyqkKN5RwUEncbkycqfLatyy8VSd97DsVGeL87fscgyeWana5CdBfQuwFTM",
  "key12": "tsq2jZ91QLHkgecaRcLQVtEcqNdD417on76KqLVMCaeGnXbSQ51xqnAXdBV9YvMqJrKV16RuKCo7dNUJowAWZVp",
  "key13": "4VWjxzuw1KjPG65uSLm8PGShB5WCRn9E12ZqR4xo42Y6x2yCi2wa92jG82S533XWp4aVHSLnwAf67Hf8cGibN5yx",
  "key14": "Kws2uHCZFp6rdiTK1q4ok1kwf2XBYRqKt9ec2z3V2KfA2uAntATKUPpeRPRDvu8iDrvEqoPXrxe3JffJ7tJ1Di8",
  "key15": "3cLP3vZYbok9zy4rGuBMpdjX9Jko4waAjfWWDS8eyQrWAw6JhcoCZ9mr36GnPmV9VqNzx3mywg9N1PZ3Un8GXEbz",
  "key16": "3jCtVGir5nYtiP6LyR5BRxUu4Pndag68CbkmnSJvYaRLx7q9vJeHw7zTjhZaZWRoVyGQ6Qtq2MM58xATdAaK8ruX",
  "key17": "49wZgcFP4ktBEm55FzMfxYn8J1XyZfnfSsXhEARGiL4hTF7q8rfdvtNDhUm283BNNxs4UgtsiLkghQhcJn2Hatiq",
  "key18": "4SghrUJNm8naigUPtveQjeQSA9mDRdubMMnbq9KTZtmiKEBMh6pvNWqtGpdDSEqxsdcE217jdLzUAEqmzKoN7Qbu",
  "key19": "4v9M9LMKhv1pqGKUngnxmPQZGMH5XD9QenRFvB5XiQ3j9YiE9hN3SVdq6eLncrM4vrm4wy9uJwtsfTPQZtJZ29s2",
  "key20": "oBB2RareGC2ALnZf68e3HEPLV3WSYXcXp5knFEgiataaUFghmqGghe7SaBE4gxFEGGM76PsdyQXUzYadkkYcNjt",
  "key21": "2jX2f7T45zDLQSJVgwLaoczYYE3BCGg35V2xzeqqppRDreT7SpdbVp5iaNR8vp29fosFR4kMsw61hYNTiVTU8f9S",
  "key22": "5caqJVeTbh9j3KfsmbPFNx1pw5NdLuLMyMCkKGn1MvdCTMwFy7z8d6ghcejW5KtgmH9QzAtjyC452gLnZxFEbh3P",
  "key23": "5WH1c6iauxCR3smTEJ5Hxtjrbmyeay4sDnj6Lk4qJVXf685K2VdWJALLbSo7UEcqh91JKtqqXkGxoUZKNfCaHz9k",
  "key24": "f6suwLgFyUfNFY2R44G5rvh9q3chmDQyfwioAM8j8B5vW3q4W1L7akR9nPvY7mibwFaoPE7BaM2dGapEzRAjuXP",
  "key25": "XifSBqtTyrEhGti2Kbq9fiq1Cbd41mSF6kEjUYQxMvX84rzZjN9UkzHSgxq1xsxVutjAuLab4n3aqpwjUedwGKx",
  "key26": "Xh5skm3Njn52RMAjbLQotczkTxsKYwH2cZjR1t5pS1XkEvA3XnF7UuEz1286tetRTKGaXGpc9SyHbpPxdKhmAcD",
  "key27": "4akAZuLhcXpvGjf5n78hhrywNBK447s3zxDdmSSSbFatTFcpxyXCMLQ34wRYhUzWjAAngaDzEYA8mGTJTPSTgdgi",
  "key28": "4B7uGdfwqqNrvRQ3sTwApxm4xjMn1tidevV2Bo3WHCHkRa3j9K8B1AwV6vzrpyviefGAikKVkmE8N9R3fPm6o1vt",
  "key29": "3vEfxB3CmcAMLFf2HC56tLN9koNAeUc1W34k1eEANbMhsdk4wqsSrRwv5SoEShopHsguZuVAGmRC6aRaxQxqjkd9",
  "key30": "2qdsf9vaFkgLrZdvPzPy83KQ3f5XAhQsf44g6PUhv8kzK9juMYFeViAwNvR8mJfGzbdWb1QihmTv7G5xowW2nqCC",
  "key31": "31WVJ3G1fVo9NYxRqVeCXT8Xruoo9V1ifn4VchGZDHpBYp9fCStaoUwuuZ2c7eRGE5vyibJEXXnd3dXmn7rfoNmx"
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
