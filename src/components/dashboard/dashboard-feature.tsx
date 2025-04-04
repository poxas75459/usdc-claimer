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
    "2m9XBDxVeJtRkHzjdxYhBHzG6rhHYfomtyWsw3eC1bsfyENM3MJd2hyJAha5RUejsFpkXxzNTn62B3JFyqRh2GF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2obj6NR7ep72cwash4nH4QE46JTcdXwzRYTTHS4pgVqzypYBBSbJzdfeKuRjdJKr9FADjsQn4sHdk7fYPenxCPC1",
  "key1": "4jL1k4Xj3RRmgXDnVmCobSkYqGK5mMKyfDoGxSuvYRL6krUbp44DDNCJrxL5ezRWAtxi4QxnsiMo2FAHC1TAmiU8",
  "key2": "stwxx3qcivjd9ChcUCP6SLCsvL3x4XDuuj89cWeFQTxYmiCiQjgpepErs8psDY8jnC3qzHrnLZcsKZycNUNzeeG",
  "key3": "rvbQA9GnywgvC1cAVsSuRHsHN2Swob3Wn7muFzDN3onZpwLECxTkNCt3z5zBbSiQhs5AHDwww289NHRRtVqJ2UH",
  "key4": "3TxkEJzkPX7cKZrQPbDCh6CmJ7pPFiHBCxL1H3KLQDyVMcXDyUf7aMw85HrPp28RBqBxUcbs696fiur2tedWa2AD",
  "key5": "5PKBh4DkrbEjKAjTnzrY9LSKT32r2tTF7CtPLa7SjSrXhAUet97oZYDQUNviPnivY3RYLYHCJgSHo5K4jDCTNhvr",
  "key6": "3ZyxN14JSCxhb35u8HQDqbfqhJFNHNAFdXgbhfA8nLTsuPCxw2FigtrgrqNJWv2bJqyccVWh39wsyGmH3NNeaY4L",
  "key7": "3rtpDQa2GdYt2Mx8d3vkT8QPKsuMCqxWgfXZSykHbPh9kPkxD4UrKoHzr4W75tdCUzEBCRNpdxyFQWdmQDMFqDoZ",
  "key8": "2fXb8CSknD3SFCJn5uYp3aN3RvHMEnVaNV8nDmURTCF6ohobMvFnb15Vk6wwWFnvoV68sfex5NiFfAcPx8TF5t5d",
  "key9": "3MhUcqZNiHe6JAd4AyipDChssofXTYytAc1rYMo47Bu4Q57g97VcxXTWvBfybqwLJAuzR1WmsMJuciAY2jhgNJSf",
  "key10": "4tHCybAqhmK5HhPppQBwGreewvYqLj7c87JA6xsDX1HvFzAki8yusjeTZ2TuEDgw24NYCSihqi5QnmZVyTAjZEdz",
  "key11": "21oD1mVvTCDvUMJQZvgNz6CEKu3t6So74JurmHXuvfYLbwdrvxsdf2vbw73XHt3r6Z1N7SQh766gPxXeaoM3Fw4M",
  "key12": "4K3QWwLtYCr8SephQGebTVCzd6VtjwBrg6Yio2VG7AgijHBUMgZh7nauZ7doi7MUDKJHCuvFjwiVW3TtdfknpugG",
  "key13": "3upvLt4rKWzz4uoZSEJQvzsBLZAQ6bkSZAgG6BfF49UidtuNH7wUGSz9GqgDvSM5fu6iFmNQo3sAmiXdrVZJVZtL",
  "key14": "4eHTALwcgi2j3yjG19wNAcxNt97ZCaxvvLNmwZFw9E26so3dR6zANaFqYyqyJs1wFGQX75j6tuYr6jWxbMDyADFX",
  "key15": "V9ZZ6uqojhXmz7mWz8zCitpCBBQytpt5djR979oAZ54kLFNavUgZTnrESTFEPE4S67DzBfTFJ4hwtCrpF1kw6Sy",
  "key16": "4RZgtMi3EfVgRRL1YroqPbQpUgBwUF32iBoh2b9zTAytSuadSkk57Em4Dc4bgpdEpRZ73ZQ4wqsm8T9ReXryZE93",
  "key17": "5EssiFJT7VQo23X4oGBKhsimWS22CjWTjSP7d4aHpDaHA1BeoNe2jS4XCdnHNTEXwHrxkAsr8SkJBLo2M1KyRUjN",
  "key18": "5bJYzxgM1eTE4XdqT5zATrXXGapYkw7wCbT16kqF1jQNYiq6e2AmQPvT6xqrwxa8nRExXcQ28fVLaHUp1dAzCyoU",
  "key19": "5J3RgUbwgHyLeuKDt2gQJUqun4756za48efgKFWYmTbE6kBPhdshPp5B9fJgW2UzXYuVunDzxTAqSiZEZtZB68xt",
  "key20": "K7qk5EJzVquk8vXQZfg7ae9Na3G5Ug1BsTeed7TXA69m6eQQSPk7NUswYzyykGGfRyv6sHc4L2Hn9VrY3ZgTP8j",
  "key21": "cnXHVS1xhxyuWWdU6B1e7VsWKkTUDZugTbDBvdGMynMSMrFrzKMdXAXB6ESEqJzw68bWxZtA3ubUbs3pxFhWm3t",
  "key22": "5MnAwG5RBHVjJ5x8K8ZPzyRnrz7yPLUpx9GThUPquwNXpEGa6sA41Sp1SEDMD6XfKQmFRky9J3b4mD9pUbM9u5tD",
  "key23": "yppbPkKxywbR5FStAAWzZEJDrYwr7LcfjfSkZULVh1koGWQJLZ1EbUDgam7NXU2sfcHjUDdDioj9kqGVoC1v613",
  "key24": "2GQsWs7qLFPm5jdkYY9bxSpVyp9mqMHDGawqp8L81RYhA6KSXVdKF6EHCZ1Mr8JYfnBjuEi5YdehZQEEnZR9AukC",
  "key25": "2uXpPgUNDbSUpssHEE8Ki5Bmp8hn1GuvWaSR494oiaWjFVg5jGCwECoWfLVReLnUVh9TMTTv828vcF1PFphmTpV5",
  "key26": "vzoCpNgQXURy1JE4wACxK8UCfTvzkpnMwsA33PFjky1AToEfBf1ccdTuU23xY3MwYFVHTAVx9F9DAzxZie2naGY",
  "key27": "27XBArz715sKNzuy9p17ckP6WhBtLWMk1YtFcLpUM6xAzTo7qLku5zbKknv5uT6d6eH7uLJSKypFPx8kFEAmznro",
  "key28": "2in5ToosYyvAMSTvEfKKyCv8TAEwcSD69kJ55sSHfKGJYnWTvaF5QGWcpB33MQLbP1srkZrUg2AyUhyEAE3vPyDv",
  "key29": "4KCNnRjSRYSiN1LxBquY1nCWy5xcQwBA71t3SEThzTLgj1XsXme8yF8KiSLNWW692aagZ4DtzuXmmeZd23tJCUbT",
  "key30": "3Vm7GnBNPzcuPxdSsBejoLbwESLAKugNv6CD2FQ6xBdWm6XiVPzPwq1aHd1Keuhw8BaEGR15B6Bk1mp7Q3dCEVSn",
  "key31": "5pwXR5KfvD1AzAoqqApexTGanURagUvZVmeCV6y4Lp3wLPeXXPjfVpvq9LbBPAxaY6fMTA3c7B4yUXKqogyoPBnp",
  "key32": "baSrFbf7VFcBjXwRwzLnmw82UwuoconaD6Vbvasqszcpv4fXgeqJu7jD5SNqc85EzfYHLi5VCzAzjzLTuhRXJSi",
  "key33": "621vDA4TWj9owYWzS1Rax8hnTJd7Bge4WCEeFJDQ9r97ijC6bBdjzVVyqtthj1M7x1ddSnBmW9qYskFaMe42wgjz"
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
