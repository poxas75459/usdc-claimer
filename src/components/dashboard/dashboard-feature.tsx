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
    "53Ai5db4dRVHmomYfJaPSuZUhRHR6jFoAXUQfC7jPH8tCwvckvxuDZ113vGhPK89LT9wgbvRmgvmYZXY53auB7LJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sDopuRrpdzeDxsEEoD8agrZWu1Mew9iBJ2FphFMYaXdsCeQWbMnirWCuyUZuTRDu52hs8Yr89r9Wmw5AoBg5neL",
  "key1": "4ER6wwk5iJtTuD8w3YyuxdeLf8412nATPXysaXWET8odwTrHC8HPwcCNXrh675iT69T5F3NMabyfbg1RbSyUo3bk",
  "key2": "5mXmYJgMppC1y5pt7y2meUnxstGdcq6rmekkaakYWWRMCHwMp227FxNcHfQAiK9vmbpAtNjWM9GX5E54MM8zfS9v",
  "key3": "4e3jcCS4Cz33mPe3nj11uLyL8z5DCNCitTkUkJMmUUBFDqYqpevevu6dG182MirwFUoniWFukNXwSii3ZoxoN7Nn",
  "key4": "4tdFQtNieDagpWY4KWbNE8rq6UDSpvXUk9ndeqWkmDeuD19yomUAzMR8mxoCF5xZSQnfJ8qxtu1VsDk1yW7aCZ3G",
  "key5": "u5Wd8PvTnAmS4FEFxH74sRxp7nAPB82hHahzxPRjibDnNzkN4D3kbkm6VSsc6vRcQa8yRRyoG9gQeYWDoUK6BUn",
  "key6": "2mC3vb5nhfu5B91TCRnixqnzDwkZKLf2wqpvZJwhzaQcsni1XmHSRMBPdJZeQG8UnxHr2nkzNjwhQ8jPsX82yGM4",
  "key7": "3KckkFSvHYLWqnt8kNUzxSLMTW6ua9R2irtgwEHhNtT8aW3me5RRskfcxQJfeTHyiuEDqpeSvR79aq1LVJLZnw1T",
  "key8": "5nwPp2PEj1EKuwNhMeB7yxgMfvWbFrMaa1tXqXR7A8Hu8Qtum4pHFKTBZcuM7dBbtw25P77waCeekbDv4aSK8Hsw",
  "key9": "2mye4voXGJ68eNNb1Mh76KYpZHGXqh35tSkt9CtDZvne7iareokqQmkLUgQTadvNy86W8th3rnh1jp9zyHDoEiWW",
  "key10": "4qLrBnGy2HTwzhEj3FGJS4J78BthcaGKgsdv7VWHJwTKgbEeFmEZij8fdTXEnEYGCNou2LviJWAesHAzdp4PReBx",
  "key11": "Hb3ZVCeHNCeA5nqvDDqwpd1Gt4pfFSLeD4nwcGjgfer9rQkhJ41RYGwDSTkpm1yJsbuZbcMSWpD7Ta2dn8P5YJU",
  "key12": "BKpeAwXG7syyiukY26g8jkXqTpANmCCSAnsu9bmEDVCagYCsAWRC2yngP66mzfBw3rwD9UgKFYbxUsy8pKmWNkH",
  "key13": "5Q9VrBxpfK69SW63Va9EPrpawThPyUQZ6UwMw7Jd2tBh8wXHE8hB5BJ77CDV3qgSxJJtRKnZTrfifg4WePE8XFbb",
  "key14": "fD35sTbB6fZ2FRY9mqKLT495ZMHpVYo8JLjMJ9jsYMJkc8bwBg1PYhwPeLZVYBAch9i3D8MH74UwPSX8gqzUwAj",
  "key15": "5845iwcRhS9iUR4NWU6NjARGrYJhEbFPv9FPq76JhqqpHop3gb6gztNRDiu5GYRpZFyKNGWazp2oYFRzSDPWwHj2",
  "key16": "1PWQLmPQQ8d9ngqFf3RM9zQMRyf4LnHusi3PFsifKbvjStxKRsKbPLA9axWAVwPGVnXdJTHze3tkeyfS1iyDmeW",
  "key17": "31HyzYb7jNnfhBMpU37AmqoCvkVdvUgzxdUzZdk2kCJjGizx6Xr5NauidEve2di2DR5HM1kDCct5YYyE4MVEn4jM",
  "key18": "5P72KmJKEidQ9odPYzxxYT2vq6q4kNyFxrNdCcreRjcmPGmBsgtaJKiDT6aCHTm28z4vVANcJJXwjci1399bkjmN",
  "key19": "gCpWLbsUNum3atonbub8jwJGc43bny4QhKZfpgZExFy6gh8maUVbqGdDCFnDEsJMq9qDCU9JzkurPcTPq1hxTBf",
  "key20": "2cxN7QUy5p2Y1NC9sTCi4tasx3cS8XHCnLxEvAk6b3ZatckB18vaTajwiHX9dwwRxxVZyJ2CVZRBtL68e9yHPTvT",
  "key21": "YjF8UAtyZgCVFER9KHjz57poYDYsR78rtRhFqhxB8mht4CHr7esBRC8VDGLRK6RvMdRy2eWyTpzj5uJHPfi1np6",
  "key22": "3hRKbv9E49sJTmWGSoiQ31e7uGRZDtVVqH7XhhccjhPUMTzHcWSqpGGymWa7FSKorwhb3M49FkDGgrWCDBT5BUZA",
  "key23": "4zwDJiGuBzeSzJcw2qc1wBiAezU9s71ksbdyTyJowiF54tp3Brvj1N8vfbgBB7ctMVXnt6dmQtQC2QH5HBDbg17E",
  "key24": "9ubi6E5Ue8JFAUDrCMMhGnmS8DNYBqfPqC7og53H1tmWuhRWDuEhxcfnTSGv3u69SE8zoDoXSkWBvDxwGaP6wq5",
  "key25": "2MQb3wU8v2TRL8iGWwYdwBW882NfztzZfV4Z9bjJyNB9jtuAg5B13JygA37wYnWikDBoknVzHAgN7wQ1hH7iKaLA",
  "key26": "5jr4HvPkbVdLCNdPedmiryf2v7ATbsLVDXeJ3rBwSkgzXvoKNyi3nxqdTaDKjUNjLnsULnTrLT9k29MNc7vdtxLN",
  "key27": "5Fxrk8JMWANzf47mr6NyJD5KGRyazGX6u58iKuKidm7EQAAcyMjE24AoZsoCfqRBM7Fhjzd2uRmP2LLwrWZc8gxk",
  "key28": "5N55vexyyUP8mSrxiE4dwTv16saAAgqWrGdZNtE5ueQzgGaLTSGHHWjERUravnVtSto2cA9Kk8sT52fb1o9NxuFq",
  "key29": "5piT6EtnhJZvE3vENYxcUVgMyEhKrRpLXeTv5zaGMstZPSQm9vKgmQoHTMKabKxf2VQzDmeetxziDpPTVCJnxWcz",
  "key30": "NNn7ub5DFPnD8kiKZEQzu9sjRaeE7gPpGFYt9w4q8Qj3mq3JG1LPSaAuBLDaTuAexCecHD2gZCmWRodMGatDNcf",
  "key31": "3NVLCWQ5ejzNeWns94CCZoho6aL6zbZNXyHYbuaRtnFL5tsEQqtrCUqH7HbGwhDNTG9ckQuEe3pyDUZX5bVzB52C",
  "key32": "25vMxtFGoN3Bsq742aFDRgDUHXseyUsrg5NXybwbWsrnRvYCuN4h4BTwzRXmuAoQVCsmD7Ah1fDtigXKceLiB6DN",
  "key33": "3kDU1ERTe5ykqZMcBx7DKywcumHLWpNfB12DuSrJ9HJHYgPuFt8srfeLeqivPRiBwYYXWhPCt5WsWRSTywuznyB7",
  "key34": "28WLhseCYkZaC7QZeiiNEDkAK5yfQb2pa94pVYyz7TDvWwRViXmmGcZKHofbg6q7mNBajuA1dY9XRfYpVLUAcBBQ",
  "key35": "3tzzEyqNMawcNVrUhC1Cv9cmc2C9NnJKUj8pNJj59LNLR5XWw4KSf4U8Vei8XjVjnt8no4DKfKgYcahMi8EnzZDn",
  "key36": "4Q93t2Rb6H8SVh8pWRA9tj13gFSdx1wg42bcFKuMykdP9c9Tx4UMx7wJ1KxTv6yvocjNoLW5bZhJ4cxUDemz5C6J",
  "key37": "EQj15cV3Gnb2zJhwhU3p12E5gVxrczB8JuTW5SyVBRnov1dvregVNWgZXeJMurvz17CLkv5bpFSCTcaPPn2LTt6",
  "key38": "5ENKHs2A546UFnk9XvdWATMMB2tP3VvAL9ATZ9oYHcjEWVybSnkoXXgcZAB9MTN5grW8EZbVcPEYL9dC5WmCALnn",
  "key39": "48dVCdQpFuyohR6vFzXGGS726ZokWRLEotVZHhhn11NZmNFH9TyEFjMi74Hx65YDHES5xNrXNXQtmCaqs2nzRHax",
  "key40": "4y65644ygCVHKtreZAyWugmJxdwa9VJfGx6n8V4jsrM4tuW7m8JsXX8sS7wxP4y3GmFkLdMGtDu3aAWmzE3FEfhD",
  "key41": "3CixsR67BepqGFtBbbojSoD644SXm7KdxpXLpeCFTM37ZqWk2hKkkuzA3kYb9oByHXB8UEJLTVkqkHS7Ue4ji44p",
  "key42": "3YLMFYECPKUCHViBGdiWtUH7Z7idQDWvyKzeRo1XUFs6NFVUvhDLGumW6EztUDv6Wh2CAUujBknsjBZwect5PEZu",
  "key43": "3kQCpVoc5HkeqytmiG3bKuH7DWAWP859w2bAXVYgBmQhSzGuSqZ1CPDHGopUTzhwEarPnxvwMZ7G8rPfReRXFoTL",
  "key44": "iXTpA4z8fmjsa9DeUytHVvZczdFnb3jxZaAF7LdHa6dbTHt8MrPg3KwZcHfJ47B21u7BhQ4bbZGiBNQCAR32yf2",
  "key45": "4tTXNVuC1eppyEWvVjA4uh2RyVvqGxmXHf6LRzFCg57naGpdyAgPsHV8tmuKVXnReisdVWM2dtouXA7DJ7vushJw",
  "key46": "5BKvR7NKUdwGHetnsVi8RqDJknmgFmNFMBpBgggkCb3rjJWcwx5QxKwNmgTAo56EHL2JiKxdvne3qggTerP344Ba",
  "key47": "5V9x6qXHEoyi6ScxbsTpZbwpDaYu3ivrZUXr5EuQ2nCW3CZ9SoUFFHDa1kqdFuz85ZGJ3b73X92e3LDypAFshpm8",
  "key48": "3rLGmrYqo9VWbqYejtcFCsshqPWKQU9CEVua94QRv84JXPVkppLk35SFuubTKzgEvdjEdJYnYhq9AEAbHNr2E4sQ",
  "key49": "4N4ssjMsS7KK5FxcxMwYiRDBWW3RS8i2iMrHB3dJQQF3T9GBsLTDkwXi9mLV8oXdHiqmZTp61oFGA1XjVLnGtgzy"
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
