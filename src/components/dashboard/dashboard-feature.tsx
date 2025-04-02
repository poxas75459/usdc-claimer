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
    "3rT5foVYoLVPuvwLun1tWorzs8tgFuenYo4E63iYAiFVSxDirDYAbWWRzHBmvq9hhHvnkJUR4sM77Mb1aQ2E1Nt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFC1cnTHRhRKUBtzjH5jbMMQP1zMG4WwUdJCZuiXCYW1KmyBeQ5w3AMinnCEHBvvbESXDi82Loapw1mw1AvFRyR",
  "key1": "3g6qCoQwwoFTqpQSDAcD6R8reFRqkeAN65nDt5QNuBGZfWbrWEE2oDjKY2yLpjLDPvuZibTEaJhm565wf1sEDoB9",
  "key2": "wQDqTjzwrZzLMdddm4L7z3gpqNcLb9HKgHCMcFMi3LTDcdz9FamyJtys6w5qLL8Gu1c6qs8nksLrH9yB3WpAQKt",
  "key3": "29XNvbybAQFnBqoRBaA7nW5CKBHJdtSZjxm3oDVqfqg97jYoAZGr643F2PMhyWNZ3sFBCY3FVCezj2BhCRJwSMbx",
  "key4": "5ceGLdDdjXVeDUCBmzRnKNaoLu9cAMDtymc8kCNy8eBV2vXxNxHSe7AVGbHrf7YbQynAo8Jo1S4Lr1DRRw2XNyve",
  "key5": "28xdrK9zhN2AgP8Nrfr8a7cKnpeFuzbfQ2YsM8Fh2DeLs6hGzXpKttstKxWm58koes6YsdaDbk2fDEXdbPdH3oZh",
  "key6": "4BSS2nAJyqjzizHGGJVFbPhJsVQ9bdCFYoW5L7u6AZxwsQEMgY6rJVsmucSZZ8Wt7U55PRciW2xAKrq24XQ5AD3i",
  "key7": "3cDSRq3j9SS1zDgFefS3CEAzSRfCi9WgRJqyM8hJeXPeDdHsgegenJhLv3HkD7poGeyFxDh2cREKZxYwisbVsej7",
  "key8": "2GeC4b9qGnu9b71MoXrQ7bVNfkYTXk5oGpirLBkaZ8fTQBo9rF6Q63xmzL6sib6ZkSuShiyAzHkQNitQWTBx6V7c",
  "key9": "2DbjfKmoJhfojvwaqDpAyVeP3XfRzwHe7B34cccHLtPYXxUAqHzb2oPYdVYVGTmjdByQrmNbkEJcbNFks3pBhbGz",
  "key10": "6EEvSWFcHPQycTJ65MVeRXkqedZvcKRJWkRZNhXGuTz4ChmkthPfFcYktGaPm9q2pNp2D5XD6qqTiPDGeTZmn7w",
  "key11": "bes2JYBc3FGeJwAuWNTf2xUQHRjbFnW4nF9Rmx2vFRMpv4TFxMVt4Gs65Nw92DAaWYMMY1gnzWYG3bnvMERzFXP",
  "key12": "2tzZB9Azk5qjrWHsnh9yxVkk3dhq8QgyvogfWTQCjVnqi5hgkkFfDiDNg91FA65BbJFQi2FZUS1gUBdtBBa7bTxr",
  "key13": "4vCxsewvE5NWy1wyVqsrXh8wPhAjPbLS3nZy3Q8c1vmm8LGQ7ua9uc4fYSFwmyTgTNwtZnE1tpnHzfwQXyGzqNYc",
  "key14": "5MuNaiK2hweQkv6RmnruT11SG5JGUbC3R2bL45on8EHUhdKT4CfrpzHNniERYPpwnseNkbffrswX62Yc7NNusoxn",
  "key15": "5abxr4Zp2S7VYy4uD1R8EFw1FJFem7dF6KvMZdt8BDCvEdyF56PmeRXm1JXD7UqfVUjQ9kDjsjuG2Yo8sf6b7JgF",
  "key16": "41BBTixjYrsLWDS7HDgUsKa4oQ5Fm1qFSNEBxMrfnN8iVTYumEskibaxn8vyGgkFzt4FfsesqemtCsrWVpMmy5k3",
  "key17": "Rd5tyPzGV8wMJZNdrpdjYmQRVCvzfG1gxgH2C834bUc9RdHaXtknMj9wSr6avYBx4SVTVogrRtbdex9p4o7iqaJ",
  "key18": "4aKfivekNLJyTFTB1VNeZcq8YCRC2M9srPyPCb2XMocRD2f6wavVC5tENugCCMk2U1jknakBDVo4chd56LPDaxTQ",
  "key19": "7NBNBqonf8yAqdnjbt2BNRmLX9wLzqkYeGaqpJWGffaob6exgsmhUh9jMESJKz73cHiBpVSwxPXYthsg7rwmGuM",
  "key20": "4X3VAhVczAgqyMKVGiwvmTcjQFGJjK65Fnun5MVgMkRijxVU1FxpGvtwNE6hsGh1QHTAUFkrSdky6yfZz8KEnWCC",
  "key21": "3x4i4b5mJVayf4GmeWVYreH9KdcEbUNLppQ1ztXnfPkAbUoZJ4EphmxTh4YNktfSxi8UqDDtJaZ8FZsaA1pbfMtY",
  "key22": "aKng5G8wFCWNntFAZqnkXJg6K42aHFes8BuDbBQVT7XaR2VrcSH82kjDWFwh34CobMzkz61XThZva38tMewwRQq",
  "key23": "5yDJZzikvj8v2Rq1wTZZN5fHmBif6D6wrtDJvqWHnYtTZayJvcEzae1e43J6etKmF79B2ujN1gYoTrkLTFHL3Vcj",
  "key24": "4JYzAu5FHp7ungb7yr8yZyFWkDh4zkugtnt9Y3xdeeQrg5vxE2iXxHq5BxeuEz954e7dyKmcwPqcZKRR9VzFSeJu",
  "key25": "XoTyu46CNTXDydEtwgXM35gzTrxZGsjFiSXHZ1xuSMFJUPfHu87WVbha2V9D9ejtiLjupvDUb2Qmv2TTmDFxkda",
  "key26": "14Cb5Ehrxcc3C9EF2wjmk2B9TEy5FUocygKnFydxH58oBULrM1tk4RYcCdJYHBynnhfEmv4qkuPuTkcSkgN1oqA",
  "key27": "2WGet2uYSxDj7wy7MPj2VYAohxZGvgfo3KzdV4xjFFwy86xg52cRY736M8qTcJh7DGPQSqX7WvddgFuoy4zDom6H",
  "key28": "1xEqqaEVxTjiQmu2coaLYeigpDf38gXDoT2WHdwYme1Dznb6CPgZtFWog5ndEYRbGVdHYR9W1jHotZrNSHQgvvS",
  "key29": "5jGSz13G5U3KNw4DzQTCCj1TH6tjmymDba5wvgnffme5YedbZcZcVFf71h5ybUCubNzmD9uaFwLSiyzn83UvvkE5",
  "key30": "2RQTzxBTmbWuydGscGck5ZEZKLaZPn48Qk6YEqBuwBrdGRzS95fanoUskWZpEfuG4tbZxDWRb1j6f7QSGs59JpeB",
  "key31": "46ud28yBU8S1gLuQmCJyu41HLpXD5awXVyuUhs3fv81gDdocZWb4J5Rancti6yP7u4tSALkMPwBxqSkWFs8ww7X7",
  "key32": "2rC8aeeZCzeRiT3A6xpwchb5kHuLVuDt75vYaswqz69cfQsh8oHGEd35Qv6GABPgTpnySszLkgJUFscJga5Txjp8",
  "key33": "5TrRRZ8T8eAmck1Yx3XFiQ6ofmKXE6XAXDhZ89RMVm55TePJfV4aoKCDJjZ1nGQFSX1iMg1fcDTvrqjJZkzSP2nd",
  "key34": "5rAUEcuUKPxZ1ZTuU9mjSJ2SNPwRYaXAznM5EXoyp2ru3zT3sc84ZpCa7SdbLhKtkhCTL5ovMns8Y6iCw1d7F5z4",
  "key35": "5py1gcywtcFa9BciLkmNod815V5yUVEnaBDKDc5GARxkDiRmZRZDjdawj76uXM9P72BSLerR5Vr9zFH9pSdEEBzz",
  "key36": "4WYQSs5wnm9SRc6F3yeWNAMW6GbGQ81tK6mbWUJ7qKU6ACCs9VscCxDji8QRXNfEJwSnTwzzVQvfkTmgogYKyczF",
  "key37": "2g7PVftxCMQgyEdt7f624WgPQgq747euvZ2KwLVdSSDaoqoXJU5UyPCDHaTHk9t27FotLmyNbpmuLUbuWVHQC24J",
  "key38": "LW3peqWtLBQs8EsJi8y6Qxk9WoxcbeQv9hwRxLS3NVpQ4MGyNsTGiHirieFdHmKweGSTHE27JUWBFwi7LiGSPG2",
  "key39": "5gmSiXo3SPR6nyRHeV8SuSg5eynMNsHxq4dPuWuzi7RGHVm9dhTZYAWkK9CXghP3Tfm4dpR19cpEZqGUwjLhfAXx",
  "key40": "2kKs1ehRN3FwEPiGuT29RQhxrnZ75DAh53MVpf5uAhgTfNj2pCLe2htHdEXwtcrdb8fEy96Pg1aCPaijNbfWeLZA"
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
