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
    "DQQfr4uqTUyNQC7SmSiiQGfdAqAErPEwVoq7hY73aVAJ3tcdechASUDjnZpLkDdfpKeq3VHD3tZtGMXYoi7kEKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9MVLwfbzDW9owFDFbY4nu4QEvAWLhVLYUksLVo9C11iKvjehdy1B4yvr9GGPxYNa7b11TZJhPBGkKKk7fWNjzW",
  "key1": "3TgvPmHB9dhxYqX9NpcoABKp7hekX1Lkm3GwtPtnhYGMnfQE9bLSegRWa3yWDAEjpqJNoP4yCjzENahMTx8CRrXN",
  "key2": "4LCUpB6NUDMaJPpSX4bPxy4M9BJpJUeXd8ZSwUmtW3w9cxD4cyMdzUSVMiT8rtotHL7LtigWwNmQqjotbNq791gk",
  "key3": "4Tw7ecFfjzkChYnG6zzCQFf8PxQDB7r3AdwinkyGYwUR9vXxRTycwHwhgsiu5iYxC1kBBPQjPqEarNfi5gf17iRR",
  "key4": "39ZWApVnEEwzr2teBxSuUuJ3kcLNS9C9aCDZ4VAhmzTxfviVgPor1VVQgugTwyGKex6toyssSKVgw4A6PfAjptUE",
  "key5": "5vFsDUfsbLxPYCyL92LKDhAS3Ppc9668ygnpUuGVVLFtwjtRJePs6LoebQLgBM2p33uiRGtQ4mCfWvUYxBZsxH5v",
  "key6": "437Cr6D44qXaJKJe4Rfr3iXb6ZpUJnRgmsCYCALXq5NhXpxwWAmat3dxCESWx1bJdgKEW5HmoPyaUnQndD19fCZ9",
  "key7": "2r7e36WPrNH7Vq8a8BCo5nKcLb5iXu4PRpLMaxYHoZsA3YSCXAFoXPftGmMBhxaHHdczbsMZhrNyCCzsYVx98xYz",
  "key8": "5pXBCf1QyU9j8yknfQnrKkh4Ss34FgAeJ2KTcqLn9yM2exc7gNjF6AXCmDPgT99chSGbjmXduQihFjvsJhUgpcPp",
  "key9": "3fTQh6Pty6N5jC2iKwnSYGXEm4zzugh4MnNo3XKUJ6ngerc4kffJmwvugSPn9RteiTzZdLwH56Lr5cX7W2tDEh9J",
  "key10": "4rcSgR3SkiTaTnSa1dKMuC4MXXuVJfEYv3kNs78F8umQFBWABGLS5jVURe454HKst1SsivceVRppuR3Qc62FyQ79",
  "key11": "SJWukWNJiHQAtZWybns8zAYGm94LHkVjiv3cqmiACaSm51x2h8DvuAo8PYgvtHtaw1hbb5ZVPwXfYv6fJCoRn6i",
  "key12": "422PgC5MXoz6HJCfe8MGm9dAeF6DG9NSBWCgMYwSEkoa5iQC7kzsCdR3ww4jZ17HmZyMSDqTWfZGjm4XYdRqLxL8",
  "key13": "62EqYHSzWkEeoWS9NjaP3E5X91y1TA8ttC3DyArZrCGMLQaA5HoWUSrcNi9WqP7QJPsJQ2qSJUP6cpFiwQT4ux6P",
  "key14": "YB3x48ooZWLHTyRoEy9ASmsvbSbwUkrXVqEc1qU597U1Ko1oaq1ftYd7HVrYwVrbfFyHNzhoVWUkv2VYuriUioM",
  "key15": "3i7LYyQucfyFYBSWkqFKtFZNPwW8ZSW2qq4Y6F4BCtkTwMKkiLXjejFVV25ytZEVa1bu6d6gU2sugoDjN769wank",
  "key16": "4ghRu1LjPWoXCtybyygwNDjw6Yt37WbxoD6Cdo2Laj54K64NaiAUVVfpkssGgdr92ucwxLhQpCsG7HBJAWFDUJTc",
  "key17": "4fCiFAwUSyy8hZtrrSCCTgnhXpdZ8NjgEYdTU4AsEpLAqaFzrTvYYtPghYKaKjGFcNaPnjxXqaoXdA5xQpwedbPH",
  "key18": "4RvszMe2pAJwhSfAbWX8gWFv82AfHyPt1w9Jb8J5Uhmi92QySfMDGLCwhQyhe3nkeAU1MTCU8KwvibNwQXg4WEHR",
  "key19": "5atqPvJxn8Q171gt5RgXN2ZsDoUNkSdAAEwJbzvsNfV6fNGCmYLD9BUrD4fivX5p2RmqF9MVHhq7oXbyUXGoe9yq",
  "key20": "4zJowuSxDxUhsxidquHBvRzmWWg4a4nwmLniP5zfsXy1ysDyQj7DE8PcTmVpz6sv7Qfrx3BpTDAKSL8KRQMnvS2n",
  "key21": "4wjTnpxUQ7wT8J9JXpSHpidhkh5Q1DPmzaZd6o1jqasnV6iV1yt7pmkJX2G8Qneesc9ipyUXb7CPdKHBTymKGMum",
  "key22": "4VHRB6RLt6hSQM97qjsBqLNQ2Ec5EWfUsJWqBEtu5TxVywfwKiiTqrrLQLEinCTkNrvVf8SupVjXWkqeWTvarU5B",
  "key23": "2GQ5enmWVjavkN5De5h11eQP5iGSJYwJgJ46mmG1o2kdsD3qsMsGfZFhVQokyRKYWNn6QxPRoJbEyuKm193bQhhE",
  "key24": "5tSUgQHvznhVAKqZtgGJLFH7BTmhurG4VN1yBVuNH565HgJ8GfzSnBdpctyVi31ZiAp4RtEBHZYRLsqymqN4Jfu2",
  "key25": "39sthxi61YzL3ebP2aCXsycgdoYLTBwkjpwZ68cNFRnfciaCMvufW4e1epPL4pvFWH7M4dwfs8Gtxw9p7V4Bd8Uq",
  "key26": "32o4icCsR4aLTREZ56tuqdCe2uDTtF6XzouUTpnUhxbn4ReTYkoVXiqo1bS92PE4wq4VwMBxoBvoNsGZb1tfEbtY",
  "key27": "5Hqm1rjKMryd9YNZx4YMHMtH7oZ4foERe4rbPZAyzHdPfdhWwBtKead24NhEMWD3vUx7QZ3d5rTBixuwpdnKBX3C",
  "key28": "3oSfCtMq4TN4PktGVCjnfMfhznLgEPnZx7ccvZBv3oC4A8XMBgMHYjpF2DLGxX86y8sR6A82HByvz5GEY6szPHTT",
  "key29": "2Dgdf9Xf1Km3itKKbGQ9MvmPFTeCWEVVmunhK6KBbgDBnEjcmKMukhy35WQBco53URMyYj2paa98AmvDJjk2opZu",
  "key30": "MrsvLNHtNvH9RPw9NG6yf1DFTfcYG1wrqfTD5H33T52VV931zW9M2s7Sr2bzycQ6whnVbRHp3hwzbgvrYMfLcKx",
  "key31": "4KobVN3CkRVo3aXYjc1vDQjQZvWQob3RBL2P7FprpyMsD4CNRjVUZSqjr7itzxhsbmLsFqVCVUeFBVgH6znR4m3c",
  "key32": "25fgrrY118KvTCymMyndTB2cqZeusgJo8Y3fBdw9hSJbLBWz3VgQjVqRPpA8NtNxLQvkhobFzjjKfLbaumEoGa1X",
  "key33": "2afmJPsvhkwtVM5phir3AQEn9Kt3uiCuAGqhC1vCxvwqXjqwdnuCqVtdWdEducVZy4tzJJRma7gmZjtzC3MC31AQ",
  "key34": "3WcndWGyUfzRfFnZnwRWnNEQHskJbpkPrCmyFmAybmMF1v5vDJLD12vPJS45ZeobddnGEAUzybBumPWau77EJwB7",
  "key35": "4EqcyBj8Me922h2hmPspdBKFgNiDnpD8qzGqoGXLcsmgerngMFy2YYtjKNH9Ah9UV7QFpztDNRsMoHwthUKF6qym",
  "key36": "5PY68uVdT5MDFd1TNsa8nLDYdHoimMEXLzhqH7bc3Fhn26Va2bw2YHQ9M83LAZz3o587Yz8Zk2kb6FcQb7k2b8C",
  "key37": "F9kkEtA9FbuQGYxGL85X33aZNBEVyuU4zUXr6AULouTbKqP2u5mgyQkoETBxpggNgL7E1LXeiXK5jhGgGqaZkSg",
  "key38": "61Dr2RcAJGBTL9feMbgLrdfQ3GNPWWcZFS57gadjCUi7e5A4TPeLx1BbND7gx45deSVj6vpeyrtghPdFyKQsp1SE",
  "key39": "2wzqQdCV6xVtrTFVxMKTQAYFR1rqgDhqR4NfE58a646mg6HaKxKcPFUioHLDR8MCRQ1StV6ncSErBt1DnkuHUBtC",
  "key40": "4kuqk4Tyo8xEmxPQ4XEmPmR8W9FdtkNg5g2UC94tZNEB314QjJFLtrsTbbZ2bsT6UvrDXPQimv3Hfb81MTYcZXw9",
  "key41": "4APL2gS7D5j82FZCXHJn8Pj3pvHasSmfkQ5oH9KMLJeq5Mji4VZNJzKRfMpAQR5LGHoGF8vYk1GrXk2EHt53BFng",
  "key42": "55gNFkmY68M3RXMUTvZHGa2BjX95CMGhFKB6WeeMdZy2yNDWCMdcKgbzNzpEk918XSGxAbw3fuNBMd4PuadhppCy",
  "key43": "546ZWLZ3H4dp2dULSYy3KBhqhhmDUggjhUYi5JfSbrmn1nC7NTSHF81hLU3BmJ86gM9effsjy4rDbb5QdPJ8jWzk",
  "key44": "2NtN5mqsvDRqsj1tC3wT2kYkDC7rD5SchybyZkxyxNxQmf4MmccF3VdthQBXwFzjb3cUdZrWewtQ1oytGrAjZpab",
  "key45": "4dFpQoBgQynty3HBVsfCh2rLQcLe9tvUfFA5uP2sgYD5KFTJ3X2YiwDdZUAQfm9JTJ36yqgWhem2GYpYhR1d7CCo",
  "key46": "2eeAYpR3sG1jo4mUkUSJQAvyct36SJjqbbc2JQCiVFn178TZ2nNETYs8yGoTBdfAAPiebeVHNW3EFuULQfHWECgn",
  "key47": "VSzF756WcE7QBRUhfeh2xGDPZCouAsWU962HYvZ4QPMHdiMXQdMVc3MVUt9v9uuPtjuUqj1cpJtH8xUfmWTXdfn"
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
