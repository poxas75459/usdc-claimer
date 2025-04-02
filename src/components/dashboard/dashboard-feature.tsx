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
    "3t4s5juBxx1vRgxhWCCEYWKq3yyEn2WPyAQjYTY4CKQVZwUEHMifwPybY7pUFWq5pm6bTL5Vpz97h9cCkQJ3N8BQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WrJiw3hBZT5T5eMGkvQjDmzBR9KaZN6Gmx5DLkbx8FRR6wcvfNBV2FbpuPBdt1mV7Xv3gKBdfs95Ctam7pK3Meh",
  "key1": "hemUctrJefu5GJoNA7jfQTNnJSBWoBwwi4cvbmubbEBfYCi6c3zMveBmBtNEy6XsRMGPwPKjBpbxdwCPwsKWsDw",
  "key2": "4h9k3USBcKAa7EqdEM6oeVXTHaie4giRq1P1yvL5dtDdKvVuAexQP1aWCzzmVcx8MR58cK5wNXi8Y3KNsa1uA23B",
  "key3": "5RqMDyrpSKAeDDFJuU7C7mfs4hNkV7m5ycFvodrddPEVXzYyiYpM8i4EE6W715wHFM3vgdtQTiqAt2CT65XK6GMJ",
  "key4": "2CkJzuWsYoyVwCYJGH4GmF2EDnRmgGcfjB6hPxMdvgaBCH1XEDSo83HU4JfhTYgmvkF6rd3yux9ca35eDed93yKf",
  "key5": "M7QFJTW59r62ARnHtiJnJAPfsw1CpNb2TmeB4fHNqfxb9qpXVek3krunWMBPqfcGi8zBXy7v1hfvShkXikgYZkQ",
  "key6": "2kBVjG8Y6CYba7NK591VAW3SNv6ccWad1LzjwXW2dJPTMbUeg2ZCvDJPaJJAuahiPD1Q8LiHXbLqphHfWC8YDdvS",
  "key7": "UB7ZTm7qZktnNzQa8EpgSh92SKwZ6rJCytadPEL7YDhdgogYquuTbsjvbQnMrQR3NcsenM6srQw8mqMpwvv1eVN",
  "key8": "4f6iDxdmTUGGGPdnhgjqUeJZJxkXWMWHf7cKZaD12PBj8QuMU9cZCuUDUiKPJHsYcmAN9Aap15UWWhECWo1afiMg",
  "key9": "542tHNRFed7LK8hDoiPAcgjDWRGwLX9nV1hd5mwLtcPvXGxFQxoADpXY5g9rztKRy4i91qYfeCki6DLGs6JzPCN",
  "key10": "3t9tcUZvWSedTmSUGD531TBR7ibvpc9qdDGZEYKFXf3TWzGH8x7ZLg9Fd4gCY3kUDiVTQQbFXtCzQx43irAMUh5D",
  "key11": "3xreDdLCwsCck45PEsbAJXz6B5CfoobKVwY4RU6E24sxwD87CSKsa6UP9aAFAw3ZrVBvUznvUvbyp25Ujocxo1r3",
  "key12": "2eZzmxVkbDPNzjtSpdFvHRjdmfkGy1ab97ALmKJ3yG88PHou2GyVh5SSZqLiPLdJBayS4AWtDtct7YemaQa9ykC9",
  "key13": "2JJcxR2LrifMWPKdsUA6NKtn2tn3gpLmhFhrmDhqpmMyRqBewJxTSMKvp7ge1yG2rzWvcHzfn4c3SQ2tTRSM3Kf5",
  "key14": "2K2gugKMfjVxamQ3irzEH89ReMbfdTiB4aj77xeXTwC69FUYhi47cCRm2pvuQMv49WVQFRUwMNbxEML8vLUvUuaM",
  "key15": "cbJqJAHDkfddhFPq7v91Zkgxx2ERx5KvTSvxrNy6YnVpNnjy6xppYUYxuLB66HW8KJx4LdKLV7XzC7LsHyawN7X",
  "key16": "3Lu9L6t14ZPJFJCJm8Qf68ZbjUn2gFsymzAa65NMkkC7LaeK4Z3Gerno8JvFS5EPswY4qrSfuhzbPA7MoASLRu8c",
  "key17": "5Qb3JC6cXBACVqXBHkRRdohTQSejh1pj6ZqyohDkMgxE9qzbKpMrQGesVQqrVVK6PcFRaagva6DhpkC9iBZaVMgR",
  "key18": "3DZDaWgvFBFvTR1QFtf87hUNxD9qfb3twntJHRwohzazYCDV4UyEQRBAZQ4fh9bcnNSw67ks7Yxfx31Vf7iZoh12",
  "key19": "4dH4ESxnCpwPFdDZF1dKrDrM2BQhxC7jCx8PCthdZyeav4KQZkUi6ciM1fGdfqzhhj8PyG4b1d16dN2hSfJWkAXB",
  "key20": "3DPTMtEAaWfktVzvxYLE7zJq76Ag1zZ5zmajeBRH2Rwgmb5k1ZhneGS6MBQ9Y1i8M8gHNqRvYBeEF8k1aKbBPzG7",
  "key21": "4AEdsM9WwgPaKFjYfwC6HNDT3DhDuMTt8xzjfxC4n74nxHehQHfGBHAaZAodLQVGgJn2DKpCNTxCVGJNX9WTxaoV",
  "key22": "3FjsXQEgJmg3xFjqJT3L1Xggfb4yrcrnKvCuoZ7wBK5MwprE2Fr733rdVfP2ucFVQX98KX2XRK1oPkRexHp2h5cs",
  "key23": "cKWueoo9RD4r19CGb3U1RhyiFBb2ay3b8yszfUmdxsMFMmRM79HNGZhD8M7h3byKoKkrAnzoHB5jRpMw5Zc3m85",
  "key24": "2XTEUcK3mKVaRrNGmpFbK9pguwAWjYjKfFa6bCptxL3pRHRa3huxHynxDruNuSGpXDSg4DiwETyCP21i6CzPtVta",
  "key25": "uznLmVrRF5TmPt2f3b9RPFX6SF4nsZCfkPoxk2UfWHQBGgvJr9YwN6eoYeCqMhse9ReABPJMiWeqHZbkkJbPWxZ",
  "key26": "4SsSnzoWDkzSgCbqmo8yXuk7UrUtEJyLUrT1FuLAyi6jFBQR752nASiYsEbFyaSRbqQPjue1wX1cAwjCJugyAnYF",
  "key27": "3SnEkH13Tw5ttAhCkE917dAqGF8jzvukiSxStUU41bPcLCzwbvKoCswh734oA8R6d6aLfKP3YByWFFw29cxX64fo",
  "key28": "Zi8mi634r6oYR7oAPwcx3y7sJw8a973xCbx3yxawvefJh61qEXhjeHW7YPheS4obRM5ggwGn76rQgDr3PMwXXyG",
  "key29": "29oqjAFna5x6N8euR1gBCEYnm9ZhFSQq4dD6jZ9xsrvzhyLCV2hwQoTevLTDjs5p7zEHKJtegaLZSrCdikgmnLBN",
  "key30": "2ud1XffyiUQmeqwHfSuXEurcseFH4X5SgJ3JvsW1MuJQAoWziaSaUuxki5UutU5qFCiK2K74tGz1wFkuMhCPCCFA",
  "key31": "4CBs4PvgQ1L4NVkgA1cJdvoLhncdH5JfPryqGEFrndxmLZRUtgcD9D9SEA1u1U39iUG9hDHfhA8mJTFQ473hG8Do",
  "key32": "3NrTFZk7sbzbFTa6aK1VzYV7cYPaF4dncQ5bo5YpzdNTN3UwsMPUvdQ4AQmofMpB1yNKwwYxm7svmia873SLCsky",
  "key33": "5io5tSiXpLDABEE5aPx8oF7LALhPNTMPiET9k73DCX8xQztY8qqU7Yv3pH339sjWLqzWVQucn1SmFYGNAXb9kcpQ",
  "key34": "2KAv6Fs9NBCWUW2Tnk4ncwoU7hKpYoS8akJ12DKDYQd4WzHXpRYy9qhJCyniKZV9JtRsf2Jbzo8vUWNJDGUkwQLA",
  "key35": "BaaibwtXyBTzfNH8W1nhVzK5YbnEBvHhzkKg9YNsXBZrCPKbYgSYEPD6kbsF1J4H7zEZaapgWBF7f37PEXLPyq9",
  "key36": "3Bnrq23WoWnUMqP1wXtvfw3JT3Vgx1rnhAJdrMtoG4caRmHEM29b2RSiPWEZ5pf6CjnWD2Nziq6j3z3N6w31e7ya",
  "key37": "3sytqYiCuL7HRuxqAu1tLZe2FtmZKhRAKqNfMFhJbV1G955X7Tpw9nThoefX39rKkyxd2WT6xELkxNivxET9Y7SH",
  "key38": "44sBimunmxugEPRizBksJkoYwKfP15iJtcVVEbVDzv15XvoshCiaodskuDTzSdtsJsPtZyNvSJZdU9UDL5Hzjxax"
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
