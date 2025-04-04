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
    "5uJK47uLdsmzntk5apf2QMg76EYaXw4poHhPXrhRWBwZmMqz4EEmAaqJLi3TVqUKDBNbS6yH4EpXoEtFr5jcXxsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GEYbocZELgCpoiKbVDWDr1ND9Wxd1V64Z8TrjbjF5imJirNwPGCRPvAK5Zxiiqz6evhDFAyNbSgTC9kj7ckVwJL",
  "key1": "62F4e381ZmHnFaLzAjd8y9vTxcWaTtX92pxaaeDVbs3Q9px8ktqCX8tFr2z6AFZBVYj7Py68YsCnAYtzvPvpwB96",
  "key2": "4jsyqctjXr9oEePuJ2uZAPRQjgW2LqJ1mFSP6NXY6K8ycpNfN4fxJ21a91v6LqkoSiuwCxCScGbN2wqXrd1GVd1j",
  "key3": "2Bwg2RsJQrJNNdKnmB9p3Q6jJbK5SQgBZB45dSJuKsZ6egNdRSKShx5xgKPJ4BtCjX6G51aZKtJVkAu4ZSCMdj1W",
  "key4": "3CTpKpWoq2yfTyXuYVKVEcySMDVc48ULr8WeQvNEqCpSC71UXSGfQuvdhqQyho1DSiNmVbvevWGU6htAGCNMNiqH",
  "key5": "2X3YsWKwLAQA6bsoKV5qvmeDioBJx3NU38XZyHYHFxZe5kCpKVcy4eSHMHeBTPVaK91CkXUVhXVzasLQHSTKTQ7j",
  "key6": "3venEWFACMSv5VTK39xy55Dh56BeaBf2urV5JmVNshgm6gfhtL6bUyL5kJ6W6bPhqjb2LnvZC8kvDNPPsmuxQ92f",
  "key7": "2Zfu5FCCWrJTGZThhfRE9ZXg1bEkLcrTZrGjABRJaMD4DzfHu9Vgqe4dsa7QCSdRq3TKnhASvJhWWSd9ABfw1D3g",
  "key8": "WJ6jGrkipBkt5Pc9o8XCxNUYHPS7uWCen96MrLyk4VNPHUChdpcNhtJeygs1bv3JdCe2JenUdJSmGnNQ37fnM5p",
  "key9": "3NUf4UnhFhxh7NPP69dtEBQTvSxNjqyP78wM1KyJpbnBEvtH7c2hcDPm2xXeGCzmbE4T324bvUM79KHKNJTR8Mp9",
  "key10": "2LPjgAKnoYhZ88e1q4R3SJfvpSiXAwPh2WeXKmvcCSbZsfSGdZnxB1SU8xehkQ1MBeHVDSETwgxQXU4wkkMSNe3B",
  "key11": "619sFaAWr6cuYfWHBHUo33iKUHTRV42xBa5i67jFpq444HrBWejV85Ai1sYYVwWbs4HyMuu1ppqak8mQW1LxMxER",
  "key12": "5MVcBXn7NTdNZi4duonvRsmVVSd2FkcDPHbeK9ZrAxqLrJ7ZpkM4pWRd1bdhHB53kACqRC7yhxTqkyUiRMPaDfAj",
  "key13": "5rnAbjziU79UD4y5GwUPJW38ei6Bc3f52VFjhXtQ8WxKmmASDCoDtESGPPR7jzuR1x5RhdwxXNUE7ieEzmiS259V",
  "key14": "48kkjyfLv2yy6VCAvr6c4saq6FtV74e3NT1dr4vZCjsN7yqYSwC1NqH2UQYQ4q4L4FKoWn7m1kandEVVot6sYtes",
  "key15": "2ok6tKdXamF7EAMxQ15kvuUcAqnkL47xiLKxgvH9N939oJ7iXcG6c1H8bhPucY2AMqjKHo2PML4HFEA1buzRRwvW",
  "key16": "4iA91TG6rtMkanzWVxre6kx5XGCHrHvjNBSPGpHRP5Hu9HdDfXwhgxMTCXmdbDpGFYeGsiA6aqPPCpaHNWp27y4S",
  "key17": "2iX7DHo136yifKuxxmfNsoAHqzyd2gkqtcMWC9Kere1VKvmpwxa2xTw6B8Q3mATfwg3WkyM7e7YUQpSnqY9oPh6B",
  "key18": "5mXwWi7tdJTBnGZcjhCE4ENL8DqpCZyPZ2XzdgowLxgc3jswytpoRVTewKxXk4cKzyEak2gFtsbLd7ALqJceBS2H",
  "key19": "5Nbur85pdZu2HkRWWhCELrzTG7YVhcqoDCqfR7RWsNEnnBNVPAoN916VFCNxGeANKTus4M6wmT6wm3ZQ9EYB9Mp4",
  "key20": "3e1fjTMcoxWYCyCgrnhqDnNedkGTiL79geEYDVGVe2pL6hfKJkrvcum6xjfDeF88JfMEH1aUE6Xmj7Fxeu5BPwDH",
  "key21": "4FVFXNp2JupwEd7hMfPMYoDNCLtfqbd1jHNecoZiNCnfkan2imTktLaecuXMc6KWyPgW2s8MDrLrCwHKUoQQbZYm",
  "key22": "3Kq1Ytkn1ev4aqqQW7kS2xYhZFY4dMfogog6tzYwRSwSsdfZdfxTWH1rUutF4RndY1whN4gcxFmJ1mqNMdUigwYB",
  "key23": "2nPP9JJsUGcir35KUjFSRJb9npbjkNESjauTV712yeWRJhWYMK4kduGPtKzkso7TUcQ9xeutuyjxpypwk9p19jKR",
  "key24": "qiNQhJXcCMyqbG6H1VhqqCQZSMc2axihRHp8DGCCeBtYhWaLLFbjFmGq8dnjZ8nzHgtCagoDM659YBbCgZzFt2j",
  "key25": "5VWmhiCV8KTDtVJ4tCHeEBMqegbxZDdBSX4hD1puaH1MZJM4Tn5mg7hHwSA5idYu1fJ5HH2kMmu1U3sC4pchUiMA",
  "key26": "2hraJH4kAbZqB9GiJsY8UBWrKHXxt2f8XXhhv6wqxaLBzvhN8YXEAMFq6bkBiVxgH9ZSxTKFHnofetUtTQaczSbB",
  "key27": "7f3mzTwQQdKKjSMwPYKToGfWNzdCKKQHWMiR6nhNQkwAk8DPyXLxXM7YAR3jW8oRc8DRfSWkZe5PkFiEcvFdNWC",
  "key28": "5LPsEHRMJJsq3knsWsPrbfs3YbCtMF36Md9Hr7pEjedViV7kDwNFk1Zf8F9N6WxqqMkqCxnF7Pmza6ZmSotpmCjc",
  "key29": "5cWbsy4wgKpBU5PeNxA9huS3uSArsSk7wTa24T5Trh1KDWwR63aGBWaj2CNsH31ELEcsdUmsvdSSYsASujd6dyFm",
  "key30": "2VvBAnL9j3aYxZTLFoaJnjVTbyR5PYMFXwnuieBMxL7qbBXaStCg1uQRhAK6fQcPW9Hsvqm71KanYkpSQLxMTYz7",
  "key31": "3EuJVggAejb4vTEBY7P7s4nHJML1yXnnao91gKAJdZT4ttbUe6CBjXD19MCejAjLMt2ompdkjuAin74uzGYoAbhW",
  "key32": "2YGz1sYnGDnBjZiZ7TMePT5c6vv1hyoeWaymwCA3fSmD7277kRNVvcHoRiKQBEiy4mddQgZtj72ZJf2WsMvctPHK"
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
