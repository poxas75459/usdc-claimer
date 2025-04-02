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
    "3mxjDdLkaQmV8r4asyq26xL3Fy6TECsEhyYKpZ6HSSPEhnPLPZ1UNwKqWBKZarmZJ2whLKsf2cSkojPdBsw1MCWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CaFnythAYMLM1RAnMu6s32fWQsDQ5AvV6VjG2qZohemWYVjcW5VFtmVPmzw1VtUo1Df6y5VixqNeaTAGHgqFzTp",
  "key1": "3zQzrDhAde5nMTTXLVuZSfrL4Q8cPimASp1R1Ek5cq9A4zzHQLqj2us3AmdVcsHHC6gnBvAtu9dvBDa6AGQJ15Um",
  "key2": "2J7eY9b6nb1d4vBoVhXsNvSH3VHPwSQYcPvdGC8HTUf76HkywZkTMBLMwY5PwL7Z6btYoAvg69yx9HN5YGWtUSVW",
  "key3": "5ToQMq8vLdhfVtXArBggeuFrnhso32yz31kdbEpindK3is7mLjMcF8C48zL39hemVSEd1DeStFUh5fDbdRiyk6Vv",
  "key4": "3PMBZx8QMrR3FcBjxY3b71BJow4SakWY5bk1KMwTimM4cuj3dhkWkWV6mdmiz87KbHwSCDKoFkCPxNydUrNGWgwY",
  "key5": "3L894y5isarVhsfMYB2nDSUSe21PfL3Gr9CwvPNR5xmgciU7ENWF2MB85N9dKH7XjavPu8omGwKHt4CgTJWVXSgr",
  "key6": "5w8aKdcegjGnWsN9TQdvkbnpCksTWNGQYvwAAXaTPqfQ4rsBNvGRgCpBMXsxLqWnQts2HrvYWDjJPvxCuZwr86Ax",
  "key7": "5g3NLiNYEjqZoonDagwbFphJ5SYEsuo8Dhkt3EkPdzWeZHEVaXHkyQ117zR2PkMLe5NTv8ejjduV8MGFw5DttY3G",
  "key8": "5rAFLre1ot7p1mPN7DDZSMTxDUUhBQ7DqyFx4JsCM2HRnWYRZVt1BVn4VqDKzkkU22v25mKtiJ5E51v8oXuusMiP",
  "key9": "3M1691T9PDGAVzkdQYcZo2H8ub6p5mkSMSVTJgfkFpZ4UZShZLsW4bWSgAj4NGBTPJSYuMtQaXwydgCPkRSVzQbc",
  "key10": "5ZRC84RvPKqMsRj3gbpn7TzGt9sGrQiRXHdVomC8s3hxpanR5cLdhMxCPuw29rpArLLQn2vYaU5Aht1zkhdbfucN",
  "key11": "AJKTYiNY5hsyuCnzWttUzVWy2CAfH6CFh5gQwtWBhukCYF5pSsRfQVRgem3kBeZWNS5sGmhYSoxe9tQiojYau6c",
  "key12": "2F9qhxbpRtM4cgJf19tyNTaDP7DeBHTh18zMhv6D3huorUyC6jwrCMsG34GgxtTyoBBKmFqAeM9eocyAmC4DbCj7",
  "key13": "bb2mATCWoKEQ8yjJeux36LnpPBTmTMtRuEyDjn9XFfWs7cfqhZCmFhTqqSyR6uwAmDhx696QowK9CH6iLsYrEff",
  "key14": "4tHJHXXtt5ov1bKUyxh7Mgn5XL33YLhVS8uyLYunimTJd2karNeYyzQXE5zgDzR1Y7SqhfuNaT8ZopPnihKntHgN",
  "key15": "5vZfeBf6H7yP2dZXNSBtLDTeMPbyUmcyVZp3yDTJdHuLG8uu9raiBN66uASG88vjxnWdXbHcAUjQHCgwk2TAvDi6",
  "key16": "Z5w6FChuUnLFQ3t5K4eTamHvBws3uY4jobBcjVoHxB3Uuu2dw7fcVVJmMv2mVTJiCNoMcRULoHvuVJYsWcxVN8P",
  "key17": "S2FchRmPVtyEZ79RN1bfrccWSf6NCAZtcsQ5q1hSPGgH2XGwDW6RHyzJXXkQyS63M5J24yydnkM8n6e463r9Ki5",
  "key18": "5ugRou7cQyF4RV1YzFyymMKyKSu6djzguWEJQJMZvS8pGcWfW6mCMwJ2gvzchR8tRpNvcVwaMFi9Aj7yJDVbx49F",
  "key19": "3NcysYCb6hxe9Knt8hnq3pGEiRFPvsEPYqvpPS6WM5GqbhLQQ4SMWrnucuX1G7pVEcUYGSHoPBJExNXPDK2bYQ2K",
  "key20": "3AogLKyVRWYmm7BbDv5bDWyKQmvABHDBEFStotroo2ZJkLEUyY8TMX3ZTYoAHZLbeq5kdJ6d7341agHwjaCYFmJx",
  "key21": "2shnq1BZJa3cgWVhvJfo4eJCkPiqZvk8ojEVu6HDwEk4CYqBspxCXSM3gA1i4rb1F7Qp9t1d7DY5vHfzzV3dBU7Z",
  "key22": "4Jg56SfRHvsyCpgntbhxqrXGFpPHSNW7oKfUSbbYwqamibAASJHzVfrSXfojoSuGPVCVssf7JAgySUvrtiDB2q4r",
  "key23": "4LrfkCfRSfiQ3T21RgXeRyZDr6CjNnX3C4KoLMHzuLE8H5MdLyteAiv8eLV6hQG1qHU41Xb53nBqmpHhcTiGgDe9",
  "key24": "5GzzYuJ2iHNaysF3SkdZJUhHo3AvcdEeBrNB76rdEH1HQZi5K4UCJkiTL24gnVPj9NmWLcUDehRVVSuaCuTbtL4n",
  "key25": "33i8Pq2Sd4C1ZdvCcRNo4bSMa8QrEpia2dTxB3JhZZeJHVouD2kasJfjG9bHTJZqoo6Zbiaz2GdGXL49iUxQ6us5",
  "key26": "42JXYQSyEgfkgu69cRc1cNZpVKRyLnzG3RqZLbhfM44jqxyL7TtLkUd722vTo3Hahf5nQeDaAk5UrUTwAUNWRog6",
  "key27": "2nj9H81S4W2Z8y6FuxBep9hDRU4tFdJ6nUMnUExZWmqYCFDbZ7JguURPrZw93xgtPWKbMNaNDEE5g1VH8xX7xBH8",
  "key28": "61enSxwFNDULBW9ChNN91jaBkfNUpG3Yb1p69vhH1CkK8UXLGvdEiD4AAyB9CJJAPQcxr7gNUyBibY3WkM6gUwqh",
  "key29": "SsLpK4Wdsr98AYtd3BfsTnzkcwcrbwR4AjxVPjNFZB9braE64u3fkLLE5kEaHW1zZKUQPzRPi8cjQNkhfAfeTf6",
  "key30": "41ST4hy8Bm1ruCy3tadQbFYXnSDMRxt6eh7Esh53pJiAq6fe6SB81kABKmphEgBodEEhxGcN5nRfW7xJwURY4W8U",
  "key31": "3TL83uPrDSZocdNK7DsY5v1MFP5WB5wsPsefVstJmMfMxUvr5gWS4tJiw2vHa3mMkY4mHqMA6UJxHbAw1zdD3fN4",
  "key32": "5Gqiibd3DXZkYApS4UoFYceWfvCxaELZ1v93kz63BNakRQ8nAXhdjPnWdmhQm5Jp9Tknm2GgDwwavs68Nc5YEk83",
  "key33": "3bxRUQATCCwMMFkgX72KvxpnFRTFMYK5mMSXCJk4akxL7WBRTo1Nt1UkKBBzS7KnfAfyP5t7mQ2neXh89G9aG6FL"
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
