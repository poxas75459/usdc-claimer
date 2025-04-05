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
    "2c8hzW8ajT2VNcGDHU4BuVJ5SvJq1bwpTKVuuw9JkAmtWPmmFpMGvRs4iWp5UzKgfVdZj1RHqwcucZ9Et5iLWGqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gftbqx5GQXUjJ9nyXvUaGjXz7J38wxqLhNsuVCwR57NkqbCdeJjf7hoEGLLCFHK1g8ZLv6c3xJifAtgffudTp2U",
  "key1": "5Sas9GDj8YxuzBSrCduqorJBTjrgy6kQ7EkC4VxVjA2hQpgqEQW7UWNPURDPyXn21FiVYJ6wbgGQFz8Lb9F8R1cH",
  "key2": "RHLJidFV4X4FBCtNMDCFJVa4hzTPaQUdvymdy7j9sq5m14DouQmg4woQnhWfgwjYYXistzK3jFBifKNVeLHdfP4",
  "key3": "3zZvTMkkgRhj1JFfyAdypN2YpnvsyeA3GLLFdMuJiiKd6dKfMBm35o4tKzG4TuTbsaDxZVz4mSeoZp6RFGfwUxfk",
  "key4": "4xUEYScxSrD3MH7acaMQNtkdoVQrjSCx3oryHHTtdrJ6WBX4mXFL33TU6xwmkTK1mEGGd1KE67yuW2MqZPMcFtF6",
  "key5": "3t8CAVgZ3sGhkmE4L64pDXvwSCH1WuUFzRw2rduU7PVbmybZ98KYuwpv1mBUZ6xi9sFjEAta1mHVmoAUuGDvjdHZ",
  "key6": "45JLy8uSTxFwqBwAPix4x7hpK1XouqRQ2xQ6VktUig5yCak8H91QphSXyShdTBHuUo15Qcd4MKHtyd9X6yuY94fE",
  "key7": "GTexidwCMrEWzTTGKbM5iNikAFmAitpEwembRo8u5X8WTtQ5CWdDB6HBJSoUdHrBHY5L47E86xprRVYP5xCpZnk",
  "key8": "3jfPnubGqHQy7ngXrHXjChtdH7wXNa9K6Rcu35vUqaDZzeM88u8n3NTbwUwazRBGLTr5C5uVpbXn2s2pgXEhAjKs",
  "key9": "3QJYFRjbFtpmh5fNhknYmmp2yyxJFBUiGUR7Fbrg3pCqMkkvN8F4BGxMrqFXuTZmKCNsUS2W7G5XYVNmwDZES8ui",
  "key10": "5jCNmkD5t5Uv9ijsU4SACU4ymiLNFytCkwvJAwPQEaaLs8N6W47bccMazTCXpnj7Y28MJngxjn34ikMr91HKPyyD",
  "key11": "5oXT67LudmDMDJsQFuYtHykrs5bMCaXd14LFrxgwTWveR44ZQW7tDUY1cPW1qyKnvtms9GniH2DrJBeFr9tt7hrL",
  "key12": "52G5vwGshJDRaKacbgCYKMPvjXiUva9wBN3mz7SzLdctE26v8Je85DW3Jc7r6duGqp5BTv3PuD3rHJvcYNGCxHJH",
  "key13": "moLD9fijn83Pr4fkCYaTuwbHEinyJJ8umhbfxLRfx8UtGG8CfCjidgQnm7qWogNK4UT8L4dwCdRVPvSNK4r2hDj",
  "key14": "4au1eRAtbqngMjryLpmcdgpsqLAcoPGQimF47QXgQtzfBAn3GP3Y97ELdyk3k7sMgsgj7ptWPhHvJVh9gC9q2cZ1",
  "key15": "XGiToYSgT5WE9Bfxr5aDyTVQJwiHxrEXYvLs5C2ZnuTjkA5c47CCsnsSR3SwYrcQb4aHztZVgfaPHUTE1pw3sY1",
  "key16": "5c4PuDPW4FqFEeb9QhriBswTuHwGctUwfjV4pcT2KFvj68EGvm1HtgpLnvpsTv21cVaVz8PL1GuiDpwFrqJYPosw",
  "key17": "5PboVKSZEhbi7jtusX31PXc7P2cNb3eFgAsT6Vue3qqryKpjxaF73BHcW6QCn7a5ksB7Z2RP92J16wdqAkNxCbVd",
  "key18": "4hmutBKYMp7BRtS1MS3obuk2A1v8kjMWNe4kFVvMsHKq2Dh7kKSAPm4caaJKp4bHXLRNBMsrNum2bvmGSuLsNn34",
  "key19": "3ymzg3XhmoZ7cZxhidaUG4NLR7sQdxgY5opypEv4QroobWgGriVR1v5mp7VNKN52kHH5asSjLUvGxa8Wg3ym6Gof",
  "key20": "4fBW4sKdGJaLYF6rWNkD76rgZVPx2q4wEMVUhsKYvi5huFMFjfLE1yZSE6MUFKRBhZ2csgwjUiAcrb8NtTfvKYS9",
  "key21": "3fRdy5XYwi41pY3XwggmBhrtQdD6kYsVd31NWrycTyZzZgQYVDsFMry4MYpXXh5cjBaChWiB4K269vaJpURfFkv6",
  "key22": "527oHn7RA8NTm64WMJPkS62sUKoGeg7k7engu7u29z4vrMy9FoezoKLyP5sNEYNn6ETRB9xzGtKnCveWsbEsAJdB",
  "key23": "5TbAPZEYMgTLVV76ufHNPffGQVeMLLvEthCSyEqh6z3UVFqSyC8SkLruHW9PDW4bwUxXmU56GgqkMr7sYK2uUgYs",
  "key24": "52wqPmg8ReQMsE37gcFXgjWYTz9LuKyjYsHD3Q8eaF1mwQcp69QfGXPssCNSd3b2mZkoxc42JaGHZ496h2a8W6ca",
  "key25": "5Gy96GgNFSHN8qnDfQH3bD8uvCtSUSQDkpoVedd7Zu7JfMkJawogptZHhEHryiNLDPH5x7TWRLL6x86yYmMdMyX2",
  "key26": "5U1U6Z6VjnHbK2FjRNyCJwuyjU6qAvxXdHc5a3APpn7bsicWeitLGoeof8CXEM9TFEHWVePA3TbxP7E9LYs1Cvg",
  "key27": "5WHKvuY73g2WYvLxDt4xfkQWVGcLWP3eFgt7NqdRwhV3fRTvhLxSdkJpGf4r5XQV3S8p6CN9x5EcK58AFvH5FGPu",
  "key28": "2JS6gFiq4VxY8nXAV1fCHXk3F3aUPcA7GpgRu5xMYGwKgsTotY1wjpSPs5JR8zKt8LWoBGXDutnyFVE7V6A2g9G7",
  "key29": "5xYc6U8Sx52eXiCZhPQisxRUrF4geBAzFcfRDkRNcKNFEyXDA17r7QDw7D9aKUvni9oT2ydVPR1kzX4Mrnt9X2Ru",
  "key30": "4WpoKaYXb7NgbTRaf46XUE6xqxBXuLvQFH81NEyJJmwi3GbCcKyxxuocpT9kDp7MypRc4Yb6gSdpoidhH4AA5o2P",
  "key31": "33UmoCtJ8rYJ9JVeY3St2iBDjspZxhNE76N9kYXqzDaRRBAaaPn8qY4efeJ6Je7EG5oevTuj4creGMxmjcMD8ScM",
  "key32": "5xQeTnFTp8tCyde4g4CofuJax7Sng1QHrfcdLYAdEqWHRVveNYPKUgRAfY18mRpW9Ys7CJGQdwFZEwSrTfHtHZRh",
  "key33": "3PbW2AoYYp1XB7PBTyh9jBs6LCYmx1gfekQcrxBFTnYbDvo267rbGdDvMeseeCZvwt87xK7FfcZQdA7y1wVQiDLd",
  "key34": "5rwJfkPGCi1Hi8oXSEjVXuoRmnt5zSFvz9Jw8sv6oW2kQSnkuGrJF5cPMyqK1QAa2QmVUVbY7jGGfQ5xXyyqFT6R",
  "key35": "3YNNvnryZKiHLkb4bK7sC3SY46BcGV5AXehJwFPR3TBfnyD7or6pALpKXpQoeRfaRVbeqTge5DidToVQTeHr9S1",
  "key36": "3M8bFKsptJ1iPPwMvmSPeV8izKYqtXKPGcRtpfWFFtzUKFi8jAcp2evybgFew7GSmuQs45qQFFNfSp3saAJfkKgx",
  "key37": "258omnKr6W1crbKGvcvTTjmoaj2pN5xYKL1zJ96tDJnDnFrMfUbdrL58EWbBZ8wr75ibjoCoSWB7j5j8fvpAKBFR",
  "key38": "2RciZApiPCGtVAf9Eh9zKokJ6w3TtKjosKvZwGPDCvkxztbrm9rPNc8HrZxmGw2TLxXE7shG19xyxsgeJFMjZkp3",
  "key39": "2wZxvTHEhdLL7rGhRXouZ8sN5JU4ZQhk2UNQDmoxf57oAYpQesb42cZEoLj4L3pSzt4avFe9td6ksXFsTwUNHZQ5",
  "key40": "2oUCa8oSPV4ebH6pXXH5CsBLUVJLUWX18ZSZhzKykhQN7dBhLa3uUd2sc6tdEoPymEsa7Cnkhk3j39nd1oZjZ6yg",
  "key41": "3DcLKML5Xk7F2hGbQqX7rh9KVWoAzGGb6gR7hpzdVMFws3EjL8GZKjLMr3J5xyjjS4adSZe1H2nLcS2R5imLpUZ7",
  "key42": "4sq6JUaX4Vto2dgJ2eXy3xC6gbR338u5MJjE2ejvBpC1uGRJYCzdwbD2waXHQGfQsWXNMAdPi9vKnRNMNAeJjr4g",
  "key43": "56GRnF3whXQcPxd5NnP5QTmTB5qvZ2ZQ5aZrzyxUi8Zt4byTFqLbvzTrNrxRXEnAPCQwT7QEUU2yuU9JvEA1XrAX"
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
