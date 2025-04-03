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
    "31Dtt9cNsCXGbyqFgr6xVkM3drcBQjraoAuPngmL2wCUVAghno7adjFRaXMYPJtYSwYwrdiuFYtMsfMqmBp1H6hM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uyoSQd7nZjcB2m4A69oGg6eb9d2hTzDQaieQg5ubj5CM53spoybE1SBUWJEUWdSaqn3ef5LG2GsBGoemyeWg6W",
  "key1": "5ZankEaUiKGiK9nsSHTsMaz8gXxVmxU2XHNyJJ5acRkdXRpfL9h5MvV9me1zqvD5tSZwERvaPL6bYWKhA6MGHmtA",
  "key2": "3Jq4hj65iPywvSofDN5gr9c224aj5WsFx5ApXWM4dRGZ1s8MdrG7T9LaTio2PtHfVbM8gpGkcKkcTLv8Bic8M8cP",
  "key3": "53NBanej5DkJSNDYhfxiJKeD7Sq226sMrMfoe3Cuyheon9a4ovZcTzk3tNjsy16ACxW1RZgixw2Au8dWLdo3B6se",
  "key4": "4VnwXVYnx6QVvankHuUVcnJCgN1TWLjg82fniFaEtLh1hCFCiWWEVH5AstRQpvfgzrGXiU1n4VTgruUD3hvbjHDu",
  "key5": "4DmjvohVZ35e3savJK75ZrkQ4ZQTQY5Daa1svZPpn415mQ2ngT9G2RwpbzU1aZtb3HhBiSJb8KmNcuppAoFEYud4",
  "key6": "mXxR8roo7dc9TfhYuuRTRMQwCsqnz4KyUnqSwKDrkAmtQjWitJQqtyZMakxqMbtcvSCUfQJr22sbxxj3rYXEPFt",
  "key7": "5kwr5FVRTTBu1vX6qXvs4VtiqgHcUSeL5Rj6kFefUuE88cQiqpV1inoAxzijeoMtjQKxXrqAkHJmFh64jspNTL5D",
  "key8": "7T4fBqRxW8e6bxuqbKRw2EFWnTufoXA2vXzQ97JfXxgUbBtmWGmVUBpbDV4rL1i4wck2A6ZiLP5yBiqSnbQ6Lau",
  "key9": "4XUfh3FypCkJimnazP5ikvonQdNxU5dp5J7hgADStBWbUjMKSJGwNWrJ9FGq5WfK1SBbhzWaTSXE3JmemSuqybtd",
  "key10": "X7JxUqD57ssmzmJravRPGYzCjzaQxbcVYLPMJDZsmLMB5dec9yZEMD2JUci5vpYgxYeXxNRyFR5SdvNXExsKA8Q",
  "key11": "9cYJAWBgWY6Q5qiC5GAitnSHgCUnq2fq7DBe1twgKjvMMm3jMhg7Doi4YnTgeJVhDa7sEkmM83G8yZgVbcxMYTG",
  "key12": "3wBxwRTJ66gaEdxDymAnuEc56sksyGM9LXCAC4fbdKubkGhtSegaBoVRVV54eBEFfxsuXr8gEfST7zdEXwTZ9516",
  "key13": "4vrpLx7sJ3vXne4ZFvxASp9r84nGygUUKfvEXLSccGAyam2esmwJkQYZMQiDHdoPn1C7NH2p1BvepwPBPCZKru72",
  "key14": "2z1FK4AHM1z1XHMhKqnQm2YzmrX6TpNZTjWfisx7BMk7jX1Yv9KoSKRdZaBqWbnxRWqg3An1fRDAk8nLNU5FPkqB",
  "key15": "2J1WQwweAVDrVcv9JTKNPoYXkMVUvBx5YEiYk9VMAjZRgM1SqhpMkmNYkgGfus8y3SoYPAtx4BYaTZGpFszKux58",
  "key16": "ushA2bCLtS8hxZYwzkMkTnaAxNVmfaQi82nEhEx5vYnGtVQS43infyXVhYM6ivKJSSihzpucH5xySUTcrGZ8Dng",
  "key17": "4kjj8rtXkBCTWjF687wwm6A1ud3GBqKiJtosgqaim8KFoeM6mrEDF5QKQgabZiizjsfAbLrSWTH2mVmaL1W7G2gA",
  "key18": "5G8gRZBy46K1qfEusaMEFprZHMHR797hkQ3ggBXH5a6NCpgjtSRsCu4Wnpec34GHqq2BFLsrDpeVMCxyVUBmbtXa",
  "key19": "23GxHJWABDm5afCbVBwtLSpbQrLBSdkp4Dgv5FsuRUEv5P2dqduAsrsFpmdfnPxCCL7dV4qKR4mbyd68q9aWmy3W",
  "key20": "5ie4gUBhjrU1TXgsLwnSBFLfGRYUMdcTnKQsT6gVhJemufmbTXrWxvot7snGDbixGSzASGQ1f4uzmvLGUPhxm4ps",
  "key21": "4RjE2DxAD13T5Y48FHiEq2mVhM1bRLxpsTfufRjj8SHJ4gZnEhnmh9wivudaaiEF7ZMibEL2rhzHHn9eVeSGesxK",
  "key22": "2DmR3ihBHwAjkYogrBB1vyVbD5gP5PozFgcVEBfzfToREzpJiUJvc2CgJu31ASe5JFuSHdUHUrYb9XRRr8R5uogb",
  "key23": "5qeUv3pK4Q7oLytNDQCg5M9KKo8NPKXXBp7zkq8R8P6zdVZwNKJKrpbwmZDByBWZgPssrKGkvFQyvs4sRRtWbhZp",
  "key24": "5iuVET4vdMW9TGmFTHc2fJiFgkDjpNNqmX3YhstvHgjVSGEowNzZ85c2N3PcqrCTsV6U3hK7SdzQmjY5X5mEx8Aa",
  "key25": "bn4C6zrywrP8p51w85n3nwfovTUhaiEd7nWbvJEoozT9mZpSMVBHVqkYBo7UK6aRNwFR9x4XcMJ8Wz4x1fufacM",
  "key26": "2t8h5DySYP5TXDnFBN9heCr2vnB7ywoZVeoaSMbA6ivJqJk8gx4WK2otqMjtd5nPrxeKKeRDpxNp2swp8t4UdbQY",
  "key27": "5FrnCQQGZSgnCnay4hNgvfZcFsrjvf2vuSnGMdLgSnDRz77D9TcpaGwW3JQwzEeWtUaq2exaN2qkqAaMc2LTVXkj",
  "key28": "2s5kFYmCcixjx83BTEzAzbLqoAgxYmQ1XWjznUxeLyMDMLDN6f9dNz36MHfM2oVaLmng3KeH6TuCQxGH3XoN8R7r",
  "key29": "4RuMmw8pmUMfmfzHZmKrezmBtK6mzzeZBLHJz6bQYiiKe9jsZaswAT6U1DYHeRx5mG8ydyGKDj9yxxesY17rJtW5",
  "key30": "5eXQZvZG9y5gr7xgdceZkEpoqJPTk1wQM1jfrsUNibZRguMxSth7j71JgXsbLTYppr7TUNcfYqfSFcvcTnbxCJ3i",
  "key31": "gPFUQQdx3tZchu4eAsrRaQ6ufxU6dtKXW2riQbtydks2cToPGzc6MLkVE6FsQMdbQkemPtSukd19Ap9nN6AmrdF",
  "key32": "3f1qFMRiwALrp6MJQU9TAH6XjA1B1WWQUYU9ZXMg1rHByTqDed6qxnJ8FovTqnSRfm6xYL99UxyadryeE9CA4goZ",
  "key33": "2nB4N1nc2pZ4KbqbdnGsugZGP42D6UUfU1yxiUGHod7dtyKqtBEP6Dn1i4nJGTdjci5QEAdwPTpSKMyqXuKkgAKr",
  "key34": "5QmybXetL2QVoEsKDeQHzU8VMaE7sgwBPKMbUAHMmWKA2sjUgu1gR5C8p1JZq8FQUgL9DJpyhdhA3wLNjktQZMk3",
  "key35": "hKVV6xcY8Uft9QNbnZubyKHZnyVbEbcMVUpicmobeo94pYQjziyo2yrhQADL3tn39WqLVnfwab1jqUywhv45vub",
  "key36": "qhi1XapdJJaCoWgtkugESWjqT2vafAvfrbkzGqeUviiGFVkEcwZAKS9kY4Y8N4r5JrT4hhprxdvRwSBqrZJbHeb",
  "key37": "3KDrS4bohAn29LyUir9PHNPZrGmTRoB5C41iggDVHBkPzjugeyztjgefFe11HwdbiUQnvoVmdiax3ia9SKDFsEXj",
  "key38": "3s76WBFc3t7JBeSaBwsTegfwJbTaPbMEuaqZ1th3hfnVNy1ja94R89Df3sp1sngAEcbSeyRKJpJ5bxodCgfZvTfP",
  "key39": "4fWjqb66JpErDijV6pxxT44WPdnKjVvTbC5UWs9LtFJKSTJW6WYHkBTkyjjFxKuT6pjemjZ4no2wwDGWJ9M914u8",
  "key40": "47wpozcguT2qgep6SNiVB12WJ1WbNhWH6FGQunk6sycSDMB8XMdPTyH5oAroHcdhLfRPJNJZ5ZjWmGtBxyrGZQiV",
  "key41": "33uN1RE25KvPXNJB6ueKkymjU6eZ3r7kwdeesN1Eco8rgpeF1D6d8CGU23psWCh6J372tsZcXnA2XW7Py2aQbxbq"
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
