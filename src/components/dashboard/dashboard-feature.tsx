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
    "2eC72H7UcN41cH697ftza7fjn5TRWhEaQyqVdbTzwKrWdFNGk2w1rEYN6Cv3cZEpVKEyqW6NkfL2J6Qt3NF8G78k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hwmhG11EVNaXorejSNN9RS9PgG28RGSUFB3uS469d6CXQZGK5oqdGWfAbs5XKDcuMyLEEoaPWT3F37VnJquLEAR",
  "key1": "4YV2EzMz5yLJJbw8mABoAhq4hng4h37R8PyJbw5mUhPYvaFYQygnXfhyq6HSEbhXKyaVqqHE1N2pgDWLVnaUyWqk",
  "key2": "evyqzUizhNd47YZgbMzPZAG78GggQTDaUTsPoSbaXAXS6ZqRbepeqLsqecGU7CMqQh2fwNZRnc7vxuLqxNHDpQX",
  "key3": "3fkCENaCnnGK7rsWdpDMeNVi2JuwBhoigw9kXRngLZc2esq44ef35MpsAUNRazBg2zM7nWQNVPtCy7xg6G4z5r4F",
  "key4": "5BUZL6SeEAS7CtgJ3hzNCEPwnMPCNhP8Ynru22PWaD5k6GkgbEivjNLjfDwB2vGtPqM7Tc5DmBdcdx8rUxAGiw99",
  "key5": "3CX2pd4nJdopu5eVNrvqu9HLqjZuuUs6MUs4MmkG2FFMyi4nankwC5X2QjQFgZdCLECQb1xZZrTnE7GLacFDdvr5",
  "key6": "2AtcwxsfC5v8UNLBjkT62SEwTSE6uM84ypkKN4KZNrUgo3CsSrp7UgeoqtkaJJFPyG8skWguoy1v3qFQ45DTauZs",
  "key7": "Xw8svucZw7xB3Aq2HfLSiKbGz199Z4TujFX8aFmKBanrp8cGrk3migqKNshtAPE9afTQW9Jwq1oEG1hMhkpfScn",
  "key8": "tF5UpMXoLWmSZzL5k4JWmoeWHj61u2pYABv4N7BxUML4UMuDMt22qNccJrLu1vP5nFsf54xmauLVEAtBU2UcaPh",
  "key9": "XZpkbForo4o5bd5gRvfzQCj6NSMBEDXddUTsgK2FPNTSquAJ532ZKbMYE1BBydsxhJ5tKXh81STYTe8jXgZ9p1F",
  "key10": "37SgkF9fjs1sW6M5kmxiavaVmWZaSu83sPrUi7Sao6wAwA6qgQ4F3LQhpCiNH9T6thJmmRVCEWDUB5bQYbWnbenu",
  "key11": "2gJNhNQqc5VctqWbfh7UorCiXRcMb6bYRQyyLYVJKqfEEoCeZXhVGHg2eAZSjHgNdk46WxSX4vm2kwzQMnkajxNP",
  "key12": "2w6AXB63qeEqm8NQrtGPkhNzVcp7EYntF27ybNwUignmJHwi8PjwdmgSYxp7wymiwmRgAYNZP2nMfxw7Ecz6eT8h",
  "key13": "2XpEtZ56QZEBzP9ANmPSAQji6k9QBBRAZEStubKHjnXF3xFCfBsnSRbrbSdJjJaKFCdWL7QYsEmk9D4dDTHrEjWr",
  "key14": "4BcNiULHkvUrZhGKNe98q3Gzi8TyQJL7BNvbvLSFxCpxktMyJ8yorbgNEARDhEFths8FbmrXXe9k8w4pBLEMJCCh",
  "key15": "82EYC7Z8YqFpSK4sU2jQkhsDirL2P3Na8zQHXbr7azTBdxFWnuJM5xvR2x9whitJt92BMSwfHjWsSkdVN4ngwBi",
  "key16": "4VSUsacNaVhwRJ2Gasi2xRX1PSv7XnAmrmBdLDKFpWke3CprsRcBCCEstD91Pe2soK9yHGeP1URo4N3rssWjbtuc",
  "key17": "3bX61XeMM9Nox4E5BpHiT9gdtMft5MS9BHW8xa1ChfyLyXT9zdXLNE2BAgmhjAAPhnn5z3niigzz8a71xF1ykPLr",
  "key18": "Dgj3bfjTjfwas7yVCDaizf51EK5HYrDFfzgvP5R4o6hp3uMdm8sHmWQQkqH14dLn5CYuMituzfvXiC9FQDXVQJ9",
  "key19": "2FnxuhoXmXLVzKTQ7HQVr3bq1br7JnGwyaRZxgqMqm4RDqjc2MD1kXTNiJSabo1jwRWWAVGasqmMjsGpFjmBFLFn",
  "key20": "2VztjcJ4aj2TYXsJZheAcvEeibxbH7t4mBt4uahV8NQx9Byi2Fv3wJCaBSBDaST4gQeVbrx8onKQSvkQDKXjG3oP",
  "key21": "67C8Rmz74s9CFYKqsS7Yq7r35WM2vPCrRQVfe4gJztCjsF28nDNsvcJhRBgPu9M8m4i5XG1aJnfAx4RVXVemqqLU",
  "key22": "2DHFHkkRGUfbcEUceHHqX53tDDMeYYWJXnmkSfEaGf1rEdA6Z4JGb1B62ehrcYve3S8V1fRUjKoKG8xA2Lwcw4Ph",
  "key23": "5aMttftv4HRTTr63A2tp3yebaRd8RBxLCB6jesTANkuMAi6oP5kZ4Hp5wYdzaxwA831WyYUicPZuFbUQZBeRmwKM",
  "key24": "5NUba7vaso8aXG8rMGhAWi4tBMoowh73TbkNzFmnBvPkwHR1ufPthhA8PE3Z1ciHnMZRZb8ujPHLSdz3xgGHpVog",
  "key25": "66iZ8sPJsnssvFcW8cNCKoxndbgjZLXuYKqStbdvUbxVcw6xQ75Kp7j4VMLTB9nSCwa9rGxdWVKs8AP8faY8DuSs",
  "key26": "4iXH2RMSYAZW9wTP31VNx7ZZTf6P6CrXQNN8rCkiSwNMRNvZMwFXDsesvhKwQuqkNsEWtxzb3cNU7dm5gghdb4t3",
  "key27": "3qL1cu9RDxS424u1Ngo8Uvjih5DpmGu9MVdwxywhn9VMCFp6KVNNJr3Pz6cZiW8FPEDkDy4DKetHiXm1WQGxkmPe",
  "key28": "2Xc4PChNebGum6ST19PSXvBkTsXKPU5JoLkCBKrdhMZRCnAo4MCWUuwo1sn93fsNm85aUQBnWqnxrhuwQuhSckj3",
  "key29": "DeYHq89toECFWb1gXujwpy5ZGXPoKqNZUtytgzmkNM7zj6xtMSeHmFESX6jHcv3A7QFEJe76zuHVSi3aWwqXX6y",
  "key30": "53D7sRHhjno2HyhtSn2q2ShSjxxSeNEK6ddswZkgEvaaMVTVEhJostr8rkZ4JnqRSoB2bTED2rLtmywWHzfQo3rV",
  "key31": "SGwWSoANBtgPuQ32UMF7xA7XaELVkfrWqaaiTaN9b7gQRngmMY8pvpUoN8pDCGZMVjykFUg2MGnJhga57McKWtf",
  "key32": "54NVpXyY7FDoYSZXbaTzFBAW3Bkr6csPRyKN7sJh5jQFydgNcWX9jXRvfnXhWhScJX7w5RiE9mWSBdD3WjQHdvCs",
  "key33": "3FPzca1Vxw9RiDUXFQapLrjNWbtZYPuqtngZAyxDAMfe2uBkUBmogPMyFdYNZD4vnA15xT6bjwH42swWXePv3VB9",
  "key34": "5yntcsAiJsUUuVbEJ8M9g9b2gFc2TE2fZFrD9XdZis2J3hUuvKbzZmZjTSDN4J2G4p3SoDVqHyNjdt8jx1916KRp",
  "key35": "2vvZTnyr18EdCCrsKfYGYaNBVKeF5P97jpHgMDVPoahTxqHdyQtQ58rMi76CevTToDBdoPAEcphecToAi1cf1yx6",
  "key36": "gyfyQcqH1snFANWKiECfDY7zrct1sPfJKwvAMHhhQhCatbmbUdxJGpoCAoS7Fd1wGmMPvaSbhqZqoFmdRAtYS7w",
  "key37": "5uGGLELMU5hiiaNnWLLqdu7cM3hUNfn4QiAQ8veJrCNBE9P2TRWPByKmCHt6UQ6QEKpAcK9Netbtt7gaQxuyEfM",
  "key38": "3JQheJFHgEgDPyhzwJYRMZB2xGDuuX89JLxBVb2XXgixU1vRmMruqybBajxFjSCkjAQNWq31J5T7HGiLhkni9fgg",
  "key39": "2pJz2W3AnDmJZ6rCSvQ2hQmoQanSw8ggLi8WmrKD3EkniwQU3XCpouXZQ74QSQLKo1ewccmhAsUCkgigFtZMqXJC",
  "key40": "2buFwVjgWhymwQc8o4YgFYe7UqQfoSpDT432PtFqHkySXSoxcG9vceN6id5HJPYJwnGuK8FVmrNG9zbpPovcuRCR",
  "key41": "4TqhyYSS3ARwryK117h6M2aUtQs8HfvNmfkweoZn6vn2x8dbv7QPfFsGTAPthQarU3bPPiMbAabBdcLMQrc2SGDp",
  "key42": "5e33UFAEeGRbBajx6t37L2gg2qbR8NCH1bp5FkU2WkVeySd12sAaRogVKKvsCKMsjF7mJ3UT2rTF4199ckvLKBiS"
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
