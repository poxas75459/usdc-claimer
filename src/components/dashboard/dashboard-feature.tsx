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
    "4JtX5LMnf3geozFfPqAyyRnPsH9CSBT2h3vG4crSQfxeq2pNUqBTgyxmorQvKAt9JXTN9jja5fhrCEMwpkEh9x1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V7sHZuhiQR5svBpQhFHiigmaLtcyg6P7cu9JWDiVZvbyZsm1FFc1Ykq9EYoEAvZThFafhDvZXnaWpXVPo3sUU2g",
  "key1": "CfZriJLjFeAZM4dCXthdYaVDABnAbE6rry2Dh5jQ37aKL1grpPULcJr8y2efjkxFnXvLU6k3JWLdTSTGLCdKScU",
  "key2": "5UTJh3dxm1uEAmqdpCt8QgmJyH6ucqszsfbM5oSEQyNV93LqPq2xBxy6yerw1iNEMZwEfazUXfmp5hAUjm9E2UxD",
  "key3": "3A3fvkSw1e2ma6LAt9AzHHzorJpv5FK33tRMviF9WpQLtEv4nJiq8ZFEUt4achi3aG3YHiHXfz4TiAU24RExg4Pf",
  "key4": "zqFukC81R4Xe97zegMjUwK3xfw8rYz4JoHLWauKfhWUn5qtD7sTudxQrQsK9W9GrxK7NKBJDN8vZby3gqbEX8xe",
  "key5": "5vJZTZ3RSb34ow4GdfZNgFBtyPZE3P7uquhE9UwwJiKBy4463rL2VVrjuB89nZpBhAjEUzHgBdLPvcR3kunV6S7G",
  "key6": "9KGhv1V2sD6Gmm3F17bCd5jyQJGr6t6a3PJ3YpfP7o3xW7gEUq4PkNLe98XaUAKMRz7HWttez5u1Td6j1c7qBSG",
  "key7": "3YJGLggDb9UEn4sYRy1PT1v39rRtABemdTfZkPyG2bXxSaThiVzj1Bq9fvZHZvH6fmypj4VsPw8qhqhR8rLgHFFg",
  "key8": "YvwQFMLRCiS9NzHDfC9QPbMp4pMm3uLbuXLTRHTshj1p5fy2iCuAyB9F5SRwiYa5qitPUnm5XFVyDFW45drup6J",
  "key9": "TvqajHPznQviDNwbnnb8z4HLskJYcHQg49JRgrJohAQP3J22ukcJo8ikHUJT1WLMY8yM3CuDAX3XJhgYZvgD9HQ",
  "key10": "gvhiPB4DzFQGxJT7mEkxZtfzcBgpwTypcLNbV8uao7g8DPcEJ7P8C1wkHBdC9QvtB7tMD4whgMywN26MpXJMboJ",
  "key11": "4bpmHppnHBRhXvF727ekZZStVUNHt3GgWu96o9XikCmbetJRY7ks88SDz74iuDRVxXAf5yc8HjeD2TYadfidvVw3",
  "key12": "stqvWDgmDhfPQDmpnMfZ6fh9TFdNmo4gBEz4X5L5cYWjRKPLU4bNn7H6BQFEKBg98AycLW41qSrGDME25HBQyJQ",
  "key13": "9M52YtWBky64GdG59XB8P7jZ4ttBeNgSdKhmcF3jAMdjxDc1KMhQtHPv4AyHV7LY1ixKDkT7HQ5BZwn6BvwHLUG",
  "key14": "2BvSwSLvTigdgBThGn2g9PpcDCQ84egtQNbtiGnQoiVAZQQwZqHZAVm8dyvqysXuspXZ7sGQ9QQNH1yn4Q46VuK8",
  "key15": "4b6XmJTmCXtovQfYYSfaLqgiHBcou75EYjm5Q42YamEpABNdaCWikVjQ8RssZvx5vAzQXgf9d5MruQpPAHNAXxUo",
  "key16": "3412PXSCuA1orhyMAJme5jWCMz1vitbFbPr1E8pidTUw6VZCqB44CKhk2jNRKAkdMb7aR5fPHjTRvpEK7LjS4S5p",
  "key17": "55uYDA4xEPbu6H8HdDoQZCZmqvyf5C6CjkfzoSSPGKV62LDAUNHb4iFGDWasHH2WqHzSUhg4rMoURVQroVPnYjVn",
  "key18": "zbZwuA299Y9cnymP1Zy8jmt3UChgSgtJo9ogFYPNFbnc7PaddxBYcwYSbwwhVKDSzM3fMTcuZJ2wffTtnRvys2B",
  "key19": "417QnFBcAXiMP55nKDnkCrhg3TZkyqq3w2RxX56rYXnFWEbuGK4Mos8pcrLjx2wM1SPdyXjboczSaoFkgKgUFtyJ",
  "key20": "5ssyikU4qj4kG6KXFSnDV343Ad5tZLQkfw27jnH7Noj9wd1672ckE8Bih8jaCTsEZqoHsXboM9EnPV9ymjbJJ4rA",
  "key21": "w1AZSwZDiSgPFbR7tPEskjMK5oTJeC5uHqjjaR9GWCj78rgPU6Q9rJoNu3x4RBdE3SskNXeEzagYhYvpRLw57pf",
  "key22": "3bKjvBZWbvDL2rCgw9pihpRkSJMqqx3fqH9iPb48uwg2X1sNsr2k3YQ1ranMwP1AWrDZtf7EvqrAPUJ6JHTNvN2V",
  "key23": "4aCXZigBXLBaYe5KUMZ35ckxTZfjBa4kXQkwSY6rnNiGoiBzHo8SmVWMc81encBGBtUSxrQeZPS9rofwY7q7JAtk",
  "key24": "Ej2pcZyoXihqwR7cH9Uer3MVrdH6p4ymBUfrKapsRSuXxVKHVXTmemobZZiTdpMua28i6iUmXrj6ti568x9fGrV",
  "key25": "5TWhzquuXpcoXrYqiUikFXgoZzzoZNHcp7uEQQCD2vpjvqVuH3eX8sEdrSNQfCkR2gmwyoRnSAqvUs6a8iSRjLbx",
  "key26": "4fEn6SStVWunPBqD6Cv58SAn3G4inv5SCJtkAtNP6GtmiN7mbajFRtKPiUZ9VNSc4Pr2T72bmd9SGXf8tUFawfzh",
  "key27": "47XEQUeb5SonExsC9mBTBtfaVrDxydtWHE4p7nUhAjA6Y4AJ76ZFkXivyoaHYb6Ct4ovNPm7nQTvpNpR2oPvVXVu",
  "key28": "2XCSnDM5PAVG8o9EzHmKkBdcRiyXZn9ptL8igtrTkvMHpaU267dXd7aFXanLajqcP4tmSvZJyg3Hdv7972whyFKX",
  "key29": "3HjBKHmQEEw4jCV3PqChzHeJpPzAnaL33btrm9odESUeaCGdQ9gkzt7fnGvAUj38wNDtJwbLxYZpQvGaLW9ctctT",
  "key30": "4Szcn7ZMg2fCJPPJQP5EzeB4iUrnEFcCQCQo1zmSQ6AYLa8W5vADUaMaPMjiUKVTb2SEpdknd8Bpkf52BHq61CNq",
  "key31": "4yRqwL17UHP4ceSKwcTNf3wZtu1ZBKENytxvqEnz81J6zfwgQwF6jgp1ZgQx7gMUSgksp4vbfrEpAE8rzWwgYQss",
  "key32": "25RnUuVCSEnVAbR5DtjVK3AJ8ZiGuyEW8WR8XawfftPLaC622W1x7GucXSE8LnvHFBZNupKz3XjiJ4gSHjDEyCk6",
  "key33": "28Xu9taRoWxQGgfR6N5U7tGgUkSZfGmjjvYT41BKyomfq1ehWHa9zdDWcDYtFsQjqoJfoNeePgJ2D17uM6Pwq9mJ",
  "key34": "2NEk45WV9XgG7uqubQYtrWo2QHmXVTkPQKJTkvhy3hygGNZj84nxRvM2GvBtLJpCgpvfaZHkbH8i8Rito8yHzWVY",
  "key35": "38Bq9TRKNTbdCSLExPfHBe4Ykjp8jkXRzfWzKK7rFptQor3VJyP5pBEEZbszWFiCvwyfiPAzYmhTAbbsKWNC5nJY",
  "key36": "2nP6Zy4FRjNxh8gquxgUr1WpW9GAC23jHySJmCoWB2BvCS4fKAzGMacQeAA58XpjKJ3T8a87kyTKBLrvFcW5ho4i",
  "key37": "2vnrrcibn91jEkqudBmuKEQikSfQUSezRMqMZ4m6DgsGQXewWvcrNF9fXPLbe4EXPtRR9zZeKy6wa4FnqwcqfKqM",
  "key38": "4hEFWJ9w4JxGcqLWX1dtERtPnJ9JRyqiBQdqZ4jkJq3efaRcRrvmY2fLNx5DVHYSB19CQVwQkn4vBDhtYXSQun9b",
  "key39": "3o5uVHYKX88FeVp3SmPrKM8XYKvJPY1vj2hZByW7NmQtgqr1vndKfg7HE3Hx1LxtxaZQgEdhBcqrd1kjkZmaTwHE",
  "key40": "1eswYbcKW3qqerAYMW7kGKDHGv5NSiP3ac4M4A5FqdCGMEsYN8aB6af5CRegTKNJDi7gPzkDvGyrsUTM4f7vkU9",
  "key41": "234WF8AfrNinuZrJTf17HU5hP9CxAJnyaQ2XRsnQ8bXkEdBmKRSPQqrbrJRiQqBTQNEEK51bwiuKhNvEUBnTZBGr",
  "key42": "2Qd5W2Gun3FBmhPVNJpZQNbEejeF3hJMbddnPsQeLjSDesiNyMwTNVLNJnJmFQNUgHxVrxb7vX7sUucqFrvdmC8f",
  "key43": "4kbUyHc6N5jg1zLnuuyjdd25nJXnMocwXH1XcAu1HMyBRHQaMQC5Vj2MgTzFPUZeXbKraAuJ79nH7dy3jiQR2fpF",
  "key44": "51hKmMjNG3A6VqfW5VK9yPyHjzDzxxNcrf1Pdxj3kVqaY2y4pYKSAakrJUGv9zs48C4Sbeb1VnK94cCeHp8D8DGY"
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
