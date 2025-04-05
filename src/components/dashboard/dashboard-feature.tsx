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
    "4sYjKcCqtSMD7c13eTHABPsrJfNv7yN49DaogtEtrQekausYuMVHHRGDHP2ayNUTkRfYn3fPfKCvtUp2pz3WUTVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HvMaHHeuS3eKkwh4AdK1mZKUGj9ncAQRkTaPKWb8dz7hivbaiDgA6FL8GDZWJxeZHeMRG4yu38RwD9PJYFNcZaD",
  "key1": "4LqBWu9BrqNzti9LddTDQa5okRpbS3c3uWoQVexeb9kaexV8rDHK2DEP9kxGzwc3rdE21QciZunBYvxXgPnHXV2k",
  "key2": "3Rw5vfbTRVjZj4nWDG8SHaTx3zn1Tif1dwRJih92fiBm2NhWUHkWyD9EovCnhuLpPaxFeqPbEFhP17DPPhGZsWss",
  "key3": "2aaVcaCcBT9qTnrpo4HTqSB5BPvgwKqcT3gvBL4YaL9LyerLYD7N5MMGvzR4Ff1ofmEw4VhkvXEcs8NTEVasaCy9",
  "key4": "XSRHSn7apXCq7KJd5PjcLUuoEWmH1KqPW4fxPGSMfEkB8chw5dxHoaLF5vRSg8iQkLjgmtME2KRDw5PWp8UnSNE",
  "key5": "25K4Tqfn9Vs2yX9JhYjBbi2A9Zktv2UJZQadd6TkjvpR35rsoxJ5CtJMp88yv9qDWNuXMruH3SrXXztfu1TUSLZs",
  "key6": "3T7Duqmh3ZcTM5fFsHwxwnR4DbBVtWf41KHbnFmviR8z6gvfDbWnwuunwtkQQnernkFbBZw2kpe2U18bwri2n1U3",
  "key7": "4GqTYa8TGmHYscBpRqCuwEAi1o6vxNSvcxKpj4kCJwLoga8nHrtYySLVr6UMTvfAU5EetaWuNAsoZqgVYAKM87Da",
  "key8": "PRj5dPc6vTSC3D8EaQ61fN2W5dJZPN2By4ctS5WdNw5E1EM3zhELgf5RkV5vNHNy1ufXZov5DnSWtS3pAjo2yyi",
  "key9": "42U2TDe2sucWqEfrmdkCoGwuS3EP3CHtgocABPhaawQ6gGcKmAsWujFwreuhe6KCbmYui661NVY2VuKY564CGkzm",
  "key10": "3wWiPnGw5z8rD5hZWVgwJu3WiyjWYYccZWesxK4GwGPccm6xEMPVMXU66rjUYTRWbAV3Z3Kb47LMPdN3zV5ubxF1",
  "key11": "foJxgEtS5W7odzAJErW2y9bAkm2FKDQReY3Fm7CAR1fLczjttG8cWNTVQsynxLpjaZay91eW9sW8xTMTBNn9Cq1",
  "key12": "c7LBLQ6DoZ1acXWnHFrq8Yzo5acbnuqVfZTjL5AtmR6bQKUsMmmBuxFSxF9tpbBTDnbXiTWT8C1cnfSVCr1ugCx",
  "key13": "3Bo8w8YiAMhmuxmx3nkYyUAcUfbC6YDKQ7P1ukMecEFwNt3ayQ71NcRDJ1kLy6ytKvUvaL5CAwUEnZQSaV29Ho77",
  "key14": "5JJShDkm7m2dMNdmtdcJV4sqNxAXmGhF9sqbzoznaTYZgy4ptRThqmGmLMWYMRw4qaj9dvspy7oQ2yENr7ZJydYt",
  "key15": "4LuEKFZZgP77bdbt5tkVkpcn72YQZaF3mmPeBSfSQgQothHinV6BUAGfQhZseUYubHXBkth6yqJURcs7diFjzuUP",
  "key16": "2tQe3GB6jrBYjagQbG71qiP3nZUcDAEEgQZkFZnodPyQ2M4n8RtQkjG8kxBKvv5pa7KKo9ZXpWRiT8RejvUGYibk",
  "key17": "38uHTsyG5q12BArk4ViCHnFCWaZqLNrndmm5QdSbcWd9anCopVpQbxaKUbSK4vcyqzdLN9ed7xrN1gaGQ3BmYnu8",
  "key18": "3jvuRrB5Tr6vrk1TD7nf4diHQdtxjvchYj2dQqvRPnVc5ZwmsMcaKsERWKBLQm5TBHdutQ2DCmks5o7Rrc7wWfQA",
  "key19": "3zAS89TK6kSCiaLBcJ2USnSeSvmWKWP6cjJjpHTzsg39vYUNLFpUWKWmyvQxwv5WWjhZUrcKzgbc8bZsz9Wa6jeX",
  "key20": "34xX2f7KJc9hrXrVZrGiReq75UdYyfPaYbax7XqzMBLTGWKxAJhoJ1hyoig59GzRnAtL2oWc46djzT8u6UaZDZCz",
  "key21": "BdTWYPXwtu2aopMTsW3xhb6L8M2hHV85qAGbyYEh8NvgdhgiqwT517SNbj1MGbR2o62bn9XrvALrrLhhThEXPvN",
  "key22": "4xJzNox2NrRBFyAnF5Yv5vmbmtGESQmnCqaUb5enKU1Kgy46vqF8cLmaG7kcZvsLidS9jgyM7YrYuasmDHzJxrsK",
  "key23": "4LLiXzhwjSkFSZenWiWqjdzf2yunUfqwAqfgzBA2UWmChpP31qTYtWscD8eqYJxFvgYgnZcKJ2KsVkoNUWFmvvFN",
  "key24": "3EDb2zUPKdYJMVsTCvrKb3g4C4uyUt3MgqjCUVrnbepF13jj3XTjTmaPipzd2KTsvSx4RqG7s83hvgniFWew3Bqd",
  "key25": "5MihV9V63oPoNp2ta2yqdc5jfDeirYUTJeeuWPGUupj6aH2t1NDsCDqhQU8QWBttH7btwhivL8AjnajpDHJJ8XA2",
  "key26": "2ZbY1dKxCmmMQs8bxirmvdb7XoqpASJh1ZNMXmosWJwHzjefSbqmWSqEdbu9tt4BEFdXBuQR2uhiu1uvZ4M3XVR8",
  "key27": "299ZEGSKvN3ff95hWw97T5qR3cjAEzHNFkpMySxQ4XQzQzoSd36B55Hy6i8ijPvtUMGePipDcT3Hw5LhcagGAiFj",
  "key28": "23vSaePgprfyibgFQjsbpdM6AKerY2L1iMaGng6jyFRZMmW6o69z4DBk27Wc6jk92cSyZngakvbHxm5bYoKNX5Gf",
  "key29": "3E8DM2kSJg1XLdNpZUavAPvipfExP4yLfFBvTxX7jkUYxcbmBpAFif6C6i8p5b1MLSdYQQzApm4A53dmNHMXjdQJ",
  "key30": "4HzQBF9cXRnN1q5vyKKFGMhG36t418PeM3QdHutHsFZ3Jipat9nwBpSHy1XMW1LU65hyTfVD7ZEwBiH4cmW7PAYi",
  "key31": "QdbkMyNjN9tiK1nxcF527wJJzhKgNLAxoCG1RvS2EqisD744yMiceyvFUtXgP5NdX44Vnbocg9SAoiVJHZ6cCA2",
  "key32": "3gqaQnCYYVGYyHNmy7kMdFoeKoSPQPoLTRZQrbGWapCSnYZA1jKBqyPu3GyduowG3FgVdQoTdmvTqTXnuBaGz4mX",
  "key33": "4sKUZtdHCdmAD8KG7JjfDgp6Ci1j8EnZcGx6kXtUjYWYT9ih3EzDSmygCn2B7UieZbHn9Prcc6Mctc3Q8XXqjyHh",
  "key34": "2dm4HLv1gLKg8d6ZPSBky4n3CBrjEQZFJdnumJFt5XTdLQzikyv6VffAeexsaZTZhZUc796oTd3Hz2nsbVpq3EDb",
  "key35": "3CYaJcmgix1Rt8pg4bKuNfThBbSc7zUaRxHcZqyYUrXfxPFJeF4Eme5CQUUWdM8HjQ5ZXDgzy99uV35ivpPEvutk",
  "key36": "F7aCHdWi1bHCyUW4NqPHiLZiH9TSLp4vhZAEXaVnQhQ88GRJund5cgTUNQL9Nhd2M48uABAEJKaw9TQuLXPJgqg",
  "key37": "4ffXGBYssQ9aJzMZQp2u2oYJcr5gcyFu3kMJFF31eteYzFTm6rc9ubamwdHBrTpqsbgvQQsTUR9tAasRXruFZQ1K",
  "key38": "5FdBLHwcRfuLzWkcVqEk8imzoVvbcKozRyx9YHrNrPbRMwbcep8KqE99aUxLkGueuWpJLNwsGQ94nSLZ6BRdtfXp",
  "key39": "zb6qqCp3okkQBhwfEodYUnKo9AtReZ9Q9GoVnBczeeMSoqEbBi3TCRykb3eSw9giESU9DLAvEXih7S4sTwhx5th",
  "key40": "3B3N5YCdYLeCeUDKFSxQHEH4N7uuwiwUzauJGfLzPY5YfJQWYCbimpaD1aCJVpwyMHyLe88KsxjLWojqyefbNdMq",
  "key41": "3hGwbtkDbwVPTDKay7u38eYyUaDJmUDZbuzxF6E9QTyR333oSKJKEQz4dWvgXDXzazpV1Ljvq1TQEiVhzNua8LA",
  "key42": "47bCh1tn5GCZkNvJjYPR2FVtSqXuMa4PKEhZvun7b3qKkR5wNCLQmRGNyNBagnic3NfymRC5YNT9GvV96pk2det7",
  "key43": "2AuftZeLZnvgJKeaEpoBaTXw1WMzdw4SQWQx7qjKWityjByrN6JJXmk6zc6J1QKJwvQaFw1mfMV5PmDUX4V2dPA",
  "key44": "57fDms4gKdokorYip7qc9LoucCmn17JjTZkoSkwrP4At1McD9hpGLxLibiAZN8tjvYYBnbSR1xiHu7U5vEmat6JX",
  "key45": "5LtMmnTbNb3CvSwEQ3fV5mZ5WUaamH8fnmK9zFuVR8nrt89yBjgFYsoyxMS5DfWmF1hV9Mct1wcnfXeXStCwyzDg",
  "key46": "2tWZng33v7d5jQ4mHRSRuG1XY55nQbk5wdtZ2KMLtgJB4As9VDnPntyUTwoE5ssRxT27HzR66WVNVdFLTizhabmb",
  "key47": "2255zoG79QEsJktNZr6PETbjrkZwj35GHqPuLkyM7u83MngUdU76g8n8fmDVcqx2KfQXNurjP2YfVLJ7Q9itmgTw",
  "key48": "5kqHBptrqStaLswkW2pgtBhyjFjVbJWK4jRtdTYyAgvJeYzufcS8LiZMdqeRb6G5sNcBeyDbGMwpMkXwYjMmS8Wx"
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
