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
    "kaCytktvc97pgMf3SbAshj9iLQorghmBn93RLddPxCQ4ab87yb3FUBe8vq6eumqZNcekepybaNYtEnofoTicNJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PX5RzBo11Pcg1v9S8KTyuWV6cRKwcnPF2M1d6TBkSRgH64tkpvxPkTfrZ5xp6kuvvaJDTbWYRvDoayKrjrirD6B",
  "key1": "Dx2179eN6e2kmHyLr1qshnzfn678SAa7WDXj3zZyhu5UwJRCHD5NwYMU5Wtixt8argbS3tstNuoZj5wZv1VLjJM",
  "key2": "3RhSe3X9kWGWegL7o2VDvwsiCGQL7gpKdYW8KrQE1sgqjUaD8F754H8bG2ULvdxg6YbKEKdfLEM4S7uaiWDZwcMK",
  "key3": "2pGA3hXJNppB8tGncDoVe9owjpqb2mPMnhpP7P2Vrn9wxVftZy1g3FzSMAutZACTsG4kXcoTBGkfmZ6SnFUimdsY",
  "key4": "5mLZppfwSEwYQV1AiiTMrAph4GgDg1bNvcP4xFcwUZD8NrVdsyxF6wXBULN64xVDxjbqjUigHSMMKvuo5LxerUrH",
  "key5": "62XALc5XTJpMAEuKFcXFjHSfddLr2WhCZkaUyBfdg3p2ywqtX4XaC8sidovJZdia5eJyyeVBZAGMZk1dcxK5VrdW",
  "key6": "67YASmxJoKaqhwC8uiAAKjLhHAiLhkBt2uZvJVDqLfJUhe1x6RWgQt3h5APf61P7B7XJkcx2b6DAePppTVXcBzSA",
  "key7": "2DbyWVadQyv3vwZF3qqokmtNnrGiZcLG9qxbMNpfDm695ogHZBoTmjPVjJBAYw9jbsWshFw7hVeCea2VvztzcZkA",
  "key8": "337z6tAUmV2BC9XR7yR3K29CYeTiDyR5XDapv51i55sYZuzrZS6zT1qVVHoEBY1LnUtd9GfeUZbSA62ndmnjwP4K",
  "key9": "4aV3FvxqmgbmXTdf3HSJxNf3GwbQ8z4WQfCVEarGHt45bdsPHFhzF5NVdQ8jZeKAwGAyVLVzQQKfXx5UUeGvonbA",
  "key10": "4duN6foNLqpG54BUSj29ao4tsRtZf2mGnq87XvFZQbTSBCV6DR9Y1soMdNcuv4otp3389gC9QbTqpw11zMCka48o",
  "key11": "5PXdQtcNHfNUg4gqFho5YHHaNoU9jXo2XosET5u4UJXUpKvmCZ1mjQuFxFPeq1voqjw6UEp3AXaa7f1sTrvts2Ny",
  "key12": "5aCSZyBCFS7mgitVdbdbJ2RrX9AWc85PWX1EwJ7fJtu2fLMZwKxhNHokJH98fQ1ZW1eJF7djWrUVXF7h1n4HC1Yj",
  "key13": "5X5fC8LmAh4bFZo7PQhAkp8gCU4Jk8ZdXScZm26Z6WQzESL6S9g7fNJjKgh9fFpsSraMG1hfXKdJ5hcDUR7QDnDg",
  "key14": "3qbL7nbUhDWxFn57yPxYD3rTAPE8EpFQpLnMo1UpKokNuCM3hMtS7c7WR2Nakq9wG4JZXi3mRkejkgbrv4y3nU89",
  "key15": "2cjaqj9gPkYZ59VR1JoATtQcDXKuqdVwaTimXudf4T8VkSTM5F1SFfLJCbDuhQMZkJkLGPHsagn5aMNDPg9XBPS4",
  "key16": "ZwAkj7wdg7nV9W52LAGMsVgaPYmz6poQusfuihAg9Y8oUGpofpnneqdWujouZ2m7dQQZqYRZ9xTKtoZmJLq7yAo",
  "key17": "4o5NAA52CoHiryEQpqg7piJ6ayckB5fWMQBnrRTQb9UVwWLYbkCTPchbMYeRpgJWYp9f29McB4NMWnQ9YpN28dqX",
  "key18": "55B8u7cMRHNd7JCAkt3Sb13GqS18da3tAbXKXCNfWLJLxqaCNCwmErVi8jurQW3jbuyJFniTbHkcvab8o2QSxCi4",
  "key19": "2yWEduTW1tChmWLMzy1FivsuSR9r7DNFmsq8hbQTwPJj3UZXjfUarYZiBSm2mZQYcNVmX9H6XXMdHcu9H7od3Wr9",
  "key20": "23hs4UsHV9LrXqCaRcMnnkvsPc8uYaUNsL52KPSJAXHPbpjRfkvBBSTRakDKubfwxRkvvRMZaUZ1khZubX2xpDTm",
  "key21": "2ZxvvEeoCdsrdwB5eYjG8Hg5rGUrhq6b2b39W6jjse7swkvVj3SUTtEBUKpeM2KnLJNHCjKu5oSFqBKxjSBj6zZK",
  "key22": "22gKFUXoKn1jsgqwWVN8YeTBLK66P46ksQ2DKg5WdS1aXUpbZ3eV3Sq9QMumCzbioTNW723j44sWG54QsNyAai5N",
  "key23": "5DWLK7cBsqHuFEaF9m3RCHuddTy3rCPP7yhXkXRQCQ8vRknJgsBFEJ1GU4KvTSyC6z62cpF3yKrzAsLiGcuNLq6q",
  "key24": "5Q5JGKJ2oNbpa4KaF6rPLhtFbR6CeUELCh5xCFBUV1j88PuCZ97e79pi9ytStnNEHrYALoy14KMrm4dmykS9qYVZ",
  "key25": "4dNJgfyDzke84psfjRz4cdjKZukopfq7PcC5KKAFLjT9Xdnydmq5PwVjm3sjgg1TZtKt9C9qLxcaHMYPMqyWfJ5R",
  "key26": "3WWjyoRCnQc5PSWgeYpT5GTMPiekCrbPaoxTU3QDUHSSyLWVyAHf2CCkgTAxp9MZGcAJDhCp5AeFRh2Rz6ZBgcSN",
  "key27": "4zpxwj536cTPxL31FndysTrJ7DCj1zppx3byD9aNw2qo7bqjjE8g45aSa8bJTG4iYkS7Zs2WZmr4TcbGMnc1VL9G",
  "key28": "2FW8xBYeimJgFzsS11G8F6YjCdrFqNEtDsonvnstw243nPbcEfvxwLetMpT7FzbP7rBZYh5oSFLoXg5HjtGgVamR",
  "key29": "2H5veVB8kPpzvwzk3c8bvtZ7HzZ6MUG2ESMJR7XfAyoSUtsfrVHKfSuYFWuqzdq8jrmKowoQLrEMGkAS3gky97k2",
  "key30": "4W8qftF6YE6JAqK7oanRPnJLzKnjJwWZYH7macWQnhU66nQV5R3JydygX7pTv84VRKZvEvVMMZTXBVPuvdtXLhpd",
  "key31": "3koy9VEgHdVdM6L2SMHPkBSv75jU3676RP5HrXjoDWRPmyPAqetkS2AUVVAYDxyWPrpkSVDTpgovTVpbb3R7trHJ",
  "key32": "3UWWPHrMjnucRjmUHmGcynqvExiKWWkYXfYUK83ezgvJ1eK5NWmJ6xkDZEJaXeMo4qiQy7zzMX7nwYEm4fQ5KdRE",
  "key33": "446qqBZPLLHxZkwsgZRDtGX6VMTYDgvHz53a8r17MrJ8U5MaSAU4zc9cBrUVypiPT8utFZUifodmH6eZXDKRjs3t",
  "key34": "2RXEPUHxEcXTRvJBnSykccdBEUaLxjBXGje9YK191UcDDX9zJ1VruFK3QGnMgh7CzevBm2Br9WCowTXRciYPHuA8",
  "key35": "5DhhB2qMJEsNef3xMmVhfF4bkuUUrQwjxoDYshehsdk7ud3Ng9uBSbpHa3Jxgpi6q8bfvb2VzpKoLBRjHYBrSsEc",
  "key36": "5Jv6XqDGUtmjnZv9JVpaGjW2w4ETsmeGG8xEWLF6hyQfs6Z9aVsNdZ5AuePd3RoGNLeT7c4nMJ5RfCBFjDB4BSL5",
  "key37": "64wJHsR5SE9vXD4ugNXXu5yFMBA7B377dErPZaU1yvi7AHUio83k5TtaSAZk7vwK7erHADvNL61hR6VfhtQ4jTNo",
  "key38": "emv73y7REVrisBE7jgjBVGrtQUMoo1NQb88wszQA52dEpwE8xv3jhLVDvdEfaSitkgRvogFqPdEoPYHfZ6iqiw5",
  "key39": "5BseWFbbx8EX67N5iqRMA4FrX8KySRaVUduKpMhxbcfStXvz1NZFyBxcwHxrXk27Nbthbrdzb8zoQ1JC8MAGJmeA",
  "key40": "4MR8vjotQ19um15yb3q2ZrV5CVc5vUKRFkLsxZwH4hTSEN7pCZSPm7ibwVLrKDBXF89odi1hcJ7MAWDeQq5QjNre",
  "key41": "5EAc15KrCHfJoQD7FfCtF1Rnzr2Khktu293S16y3LKW4PxwzMeCKkL7toNUMbEMTf9Khzg1AjStYsnafQGj2BibT",
  "key42": "2gZwFEBxjY8R32UiBHnDCku2gpJVbPbbPTrKn9wkRoUQgXytz8c7QBccvggGKBQFrtmes7bbSx3Aiy9g8QqpSz3F"
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
