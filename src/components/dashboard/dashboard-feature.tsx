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
    "2yfCz65bVmDw6AAu1Avtq3usPj5P9RB1gX8PmWCmuQpL3ToipadUX915KNu6nNxFEj951XBGmxVgHBcWcM9KLjAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2evPhbGGqJn3Z7fRRpSxpBZkvR1T4k1V54UpVzS5FbokJnAPVYK6kAZGpWVT7XW3XsPMqPFrcnVD1ACBobUBX7Jw",
  "key1": "3nYz6e8oqfbFNvjHaRPmVNVXcLfnWuGenqqTZxPecmhtPUp5K1LaDPv8YgMhW8VTqh1PG1eNwSWdPWZZid4XKbnu",
  "key2": "xqKAZWeHLvMbqEoxRjG6zTAfJq1snaqqnqH8EPEjifiy2BDfU5vZATupezxqa8B3NGqLDYmFNKbLNdN2Ryr24gc",
  "key3": "SiWrJKEdhKGz4KZLvUXQrjgMjxcu1b1UEXuZHSwSCoLu1Eyd42VwCA22A9aU6yW7evqC6d1R2fJTE2cVfwQdZX4",
  "key4": "2BPjSroGKEUk2DjWo6hPSsrH5qdwHt5G3cDiT3MbFpz9ka1sEYSnG2ggqcx71dsFhgEKQV2HsJwgbMRVExJ3R6se",
  "key5": "oKboLUPaznw8dVSownrZTStRc9Amj22KpWyx7UiQhkLcaXXsM1LcvQY2a1Pkt8eUGFp3Fbi6CeMjeQBsPGYfNey",
  "key6": "5DaGmWatvLbQ61W4xEdi29xcYAyAP7sHU7vTDMvtMqcwHE7ChqVUZGr4Mj2RAG5WiJyyz5Dj89hrZDyzFyGmGkMq",
  "key7": "5muPmjq2EuznzPfrV2yyktvceb5ZiK8ziavGD7sWDEXaAU89jJpCRAv49CA8KNv4oTg7TAfhA6Xt5SRtcPzViWZ6",
  "key8": "37XMy9xFhaSeUxDQ4AJTk4zyPPw1Vt3VK5P8SbgQMYj9tALhKots1w9xwhosGmzxreW69ZZnmY2Dd6SKBSYwz2NY",
  "key9": "4UvyjUoCdBpxxPWGNdQLt1TLZd9rrWezwz37dkeQj3GFmAjpjcUNqZF569BQRrXr8tnTxSzhsdk6CCUYsugEBsxC",
  "key10": "3PUTXGdJFvCGgSCYBtrWQYuKtW9aVTRf6cdjvDbSfthh45fD31ELkaPeKf3U5vuKstm4CLpHdN93hBdNGELBufVf",
  "key11": "wpxwTJQL79SqCrYn18ihTgZ6fJ9VFc5cRsfXqi2J9ZWPKcYSSW4qYk17gQ3krJU69cqQGMKHjnPXhFcwbLKjR8F",
  "key12": "5mkMoz5LGnAbHNLFCHiMUVdb9pcKq66cpPurCjWY1VHXwLtUpfoSA4gRfnNv3DWCknZpUVt1nxfvyPhUuybz1sRS",
  "key13": "5XBf7s2yECLW5uPxzA5CoVm7txvcMpRSpvkWqQwNPt7guFXA4RvHxXMHWTMmPLJQJ7JqqjamPRnDs4JAbBhc7tgW",
  "key14": "5F5kfHsePSBLV9sgZkVcrpkMqnG475bXqYzaNUZ8nKtrAuXjeSQ5eQY5fKrzfKCY2Fd4bpLH4P8uJxKH4obYzdM8",
  "key15": "35j8b11JXV8wsP1a8ksBumhKdCjruaE5Wa9CtgaP2pnbTrM7zm3y4BsNpECrpYDxHapdgHGDEW6V8rDiMKDXiDnj",
  "key16": "4xsRBkH1pZtSy1YuGFEscFFjQLqEWC4LJWcveDgekvz1AttnLLBCp8brvXqc37fk4gGbPGSGySPNffi9FFfqMcHG",
  "key17": "tVHrdA5WSGyjeDcNNGF8Nx3EHpMxvTivk8uGj1hEASEoStQt9MruWaN3b1VBSfKz23w1rBXQjwYEwmHTVtwiu78",
  "key18": "34mH3XgEsCXYYpZXaQC7KHBtKQYTJpAW1TtEBcNCSnuQikkC6kotnujLfX4h7cUQhhDm98xP7WtJLxJaPUu9bGg",
  "key19": "2GQMGohNdXTY7SUd9QSfAgy7eLMW5HVXV535jUzcFVsbcAFZV9Wm8UAS2GNuvnstGiZ2Rxev3pkutP5YDH2e1TM7",
  "key20": "5X4ByHpTaUTZXC6gQ76ReYJ57KKbai4MUyJW1FyTHZQUMDmMCtTRfSPrbXF7CxgRWASP3HcFhuP54i2A4pe9e33w",
  "key21": "62WeSY9s9GDc828ubcqTJN2dR9Xdjb7YVgwUdkwrDP58G8jtU8srWxQAJ1DXGyY5Fq3gwWD3mnMAf8tNAjnofocM",
  "key22": "5w9Mi63mhLVZdnysMAco8TQ5ZckBi7936ajFCJanvTEh1wiECsB6Gh4XytdeGbECY6TB648G3zcnPKtbUs9bWYni",
  "key23": "4gakWET7FCHRNuE4GHAMjanQeXwmkVRpswikUNjPm6BbZwap1yKuNE5WGxGEdH3GX3xUyZPE4V6eHweWWHU4Fnqw",
  "key24": "PFXRqcJtG76nW6Z436HcFzq8iv6fSyFRjfTxQ2XuY7FcFddYdFTmtfjb7ZHrPNA3zJVSGZbVhnzB6b8uNTakUtg",
  "key25": "63HF6yRJ6WgqEkVaC7QcjacKxqdpSAnuzAggbkE2aaUD585JCoJyg4F6D83WyZ4mb77NSBKkj5ALaCrWJTCNNFGE",
  "key26": "46Lo65QqgiHKPBjiYkY2KVdXGVbc6Yyei2WEqmW6PFSti324HRoDxyA7mp1yyAM6VuBhQvAVhQ7DENueHNFq44ck",
  "key27": "3JfhT9t6qoZMur8yR1tDTa7qZyxQDUd2t9pzY6oy29g4ASkJ9MmAryyavFUtdENyArXzMh2HLbr2WjvFDzemCX4w",
  "key28": "SVLtvtT3zcPyrWU81CvaBZWU4dK3KreD9DFaBgz6LGmCVrjw8tTCsAjXrwR8JfH9i2QfzQk8DBbygQUsmaQAx7N",
  "key29": "5YSyEba6hYYaVLE6HpMSEraHMDGarMjs29QZbkqvpXmkiwB5ayU1aBwEynDgdewG9eLhUTTNbm7YfKP2CeKAHvB2",
  "key30": "41LY9njaL3fbe6rbNFq9ZwbxSgpC72FLRTBvoJzuzGC5F1SbRoN1izVxbCKb6k7syCSCCeii4WHJ7Pt8URLsipHf",
  "key31": "5q6wWnzwRio1wXeedFhFSowwXXY6tux8Jfd7wEnw64wbXhTEFaAE9CkBBzLo1y44mNid9bsKADDykGZ8n8wUDo2p",
  "key32": "3xZPzXEJmdhLsL4jciXUEqC9kbng45gaegS4eTbTuYsF2d68GtayEktQD4ZJhEMwyzFct9xH3XoULBCbS5dVejwV",
  "key33": "7CEuZjoKzGtrke1r4UAne6pnEj5jxTAuLUiqZ2SYHyDm7BsXFDykiwj8zJTcXQr9kGMNTxHWVsv9KTaQPABKKND",
  "key34": "v9fL35i8HHD1jjB2ZM3AjfpU2vyDNvUNqdwSzMTS5K2b1EUbeqUcnyPD9V3FB5RzbwWXu4uwr8iTMR5UBQS8w46",
  "key35": "F53CPyAy1RKymKSVdPiabN3kL1WPQx2nTXCberezrH9bc9tJUZahaqehWFobKT4gXK6BnCHDjki9viNSYMCoq65",
  "key36": "gVDniDSEci4ct2HCLJn1DPJfBKB83pUs1AZFBRJeyFmsfGXinweQUY7YVNp29Zds3gTnFbwwM3i78j3bBobtzaV",
  "key37": "2vogJFktv3PjqYvxSwLYuCG9QfJppbK23dK5978UCYaKSmnCYsKmdcFdzMdnBwfuwSihYTnCetXYTahCvoT7svbX",
  "key38": "5hbJa9YxwemunAQakUNsepmRoPcQgczYpg35MLQ7pAqdBAmDmDy6LW5gnzL6JwyJhQ2iSL531ukWiqjsu2xu5cjD",
  "key39": "4ay2kdwsbrfWirsasiunLjfipC7b1mFuwH5HgbAGg7Ld2FTd5Dd53RLV943BAxxsrMc8XpPpK2fEwDHmUZXBx7Rr",
  "key40": "rWBGk6eGqXTWmC4J5dpSQsEBXbNFsAYtmCknCVBUiwjzu9brVvXSS4DboJywHE72UKxH981gvuDduDzaf6S4WQC",
  "key41": "3q9NSAj5s5R4sDkeFMfeQwagNaV5JJJxaMVk7QwKHSbSjXEva13kyaFwVzCKPiLtBFxuTPvknWB5NjeWL4ShzWM4"
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
