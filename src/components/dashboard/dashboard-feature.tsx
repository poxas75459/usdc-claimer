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
    "4oqbZNqonXnQAaEpwvwnFBvRJCNBUZy7MQm3ap1CM7TbMREw1X6au7wZp99PzstGLLEFz2mVFkaMCiAJRNEdudmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VKVgkzcAUiQBXnsbpVztiogZSm8MaoRzuG8JvoyZ2kx531QsoLc4GxYENRuTVrTPwsNAKEdZLPF2ggSxeU2X4Um",
  "key1": "4E2aFKBinDoKE954begGods97BFEPgXvQQgZf3kLBQGSovDL3E2XLoMBZGZH67TVNpf8PTpnDuZTRSyCN3oNgqj7",
  "key2": "3z7cixpQTRqr4wrAN58nUB4edFW7s5pZZ88SujgQGJ5hKRvGgzsq5bdivbNYtupAaeSb2y5JW38Dv46gHfymmz2Z",
  "key3": "37ASVn51EBmJPmWhastAoXUo7KXjK6ywaG4eeSMwV4QRZTQ2bYqLY7bBiaEDjsJCX9qTTdTZiwX983gv17en2C7f",
  "key4": "4NiwwQiaur2YdRKztzMLkNscF7BSc13Zioti5EYYDnHNF5rxZY2CzoNtct3DMRH3xbjMW3HMUjjThWeQUEJuwUD2",
  "key5": "pyjqj85FM2xwzTQXmVoxCrQqmU4Eqi9VbMftfWbePTipfjvq9A3aBeJN1jaZQ4Q9W695ZxQRGccJquVCa9j6Q4Z",
  "key6": "V8fyCm7rfwqni6PYwzprorQXVa8pc68zACn7MVfYE46axGu4kPuuHRVk5oBh1yMJPZ8LkUaH5RK16HeduUTSowd",
  "key7": "aVSV43fPEvVR13oAEBxXXt8H9e7sK7jfQrF45iGZLLNT64e7TekgKwtQVbppyctqaZM4tmUViie3MGCnm87Hsgz",
  "key8": "412x2P5jSLHckiR1ZBqWmFBpS7LC1sg3Fga5YbYDXDHRJrSnhUChRhmcoDM95GXwPHCLkkLYtbbiZKUVKdiovhZS",
  "key9": "4spzBkQW1Wr9JQjguRKMHn9gG7xAz36qQmhVSygCMwky1CxgN9xgmorASKaH6KDmAAWPvdWDY9focziMo34kovsg",
  "key10": "3uBwYVFDULLYG6Rq4AHwUz27JYH85vkD1U1Y13a1znq37GjqAFwSaLQmZeMyhFTnFt9EzC8vNYei3Qsuqzi2nDWo",
  "key11": "3hEbUJrEdjVK3BNKuSnqWYAUnGW1pzysnEamzThMbdCjzs65MwKbm7NAXd5pGPX4kwYfPrsoppJByMvTCaNhdsK4",
  "key12": "62edVk2mdRM2C8N2PT3tEYeBt29oLsacfv8KDHyB1bwynAkxpTkdcNYFJr4oBTxT1gBRdjcWcyVcZCxkJuQfu8jP",
  "key13": "tiFqSc5nCroa3JnA7eiNgKPKFwLY54dqauxq4xfEJ1P46jR6Q4wrgNRfFVzkS1omEGtwMHGCh49SzW93Zai4Ctp",
  "key14": "28rDJtCw7Lk7tq8EU2zxCxPdsKA7ZB4EYAUnf34apK7V5awFevYGBK5fKUoWgvu74JmwUJdBCr4HTh3sHNNogfQN",
  "key15": "2i7rERnVtcMLRhBPBTc7k6HMUW6MbuSanTUoiCPm5RXc6iuz5VNb4K2hCCa3bzUeKhN6YcuhaMghhfGnRMJ6KCme",
  "key16": "2ZMViXMKF81zqvhsq1ZHapaPdtK3WP13ef1iiC187rXpVBJaR4qeYvb7UtzCsuTYh8qhRhhYTBAoipzoCuGf4WKt",
  "key17": "2XCTRrLAJCx2nvHRE7coRqz4eXh6gjKtr4PiAdvFVGbfLLE4jVyiw8gXRoRGVcgEou9ycwTpA4iuWb3gESqW7ZTJ",
  "key18": "252k4gznzjSgYW2jyXyQz6FUWRsjdY9jbRkVA3sL9EuBwVEQ4NKrtLjXwkgHNy5oSDEFajuHGChXKN5CLRREFnhQ",
  "key19": "Yg9QFvUCvG1xanShMSE4UXismMPZsZcMipGH7opafjfLw2ht7tdGTAxxg7KgLosFQZaghWbP3ija81pj4uQQb6B",
  "key20": "4C9wQqJRKoXVaW8VAB7yvukF3QBjtT5smDvZi2oZETxfyfAWZ77kB91t8PnRdoqWMDLvyYj1cwnPcRbSaqpqeDaV",
  "key21": "2ZXLsTRjGZx4DrauJDFPoTc6o34mBgZBQPd9xzHYerb5jwpX1drf89UDsocvXj2uECsesMSX6hmush3FKrS6YmUc",
  "key22": "2Gd4cBdYpDt3dRFT8eMxU8PNTSm45utgKwJj7bwdgBBU6tncYhDgXTig67oandEpfLkwuRv62iE4VdXFXbkXEJ3R",
  "key23": "2FHy69UY1bvsuHPWAbg6cccGLsBmMEwVzktpXPxsfeX8tpJiY9ZJCfv31RtbmXgSwTcDh8wcnWpCGTAMRmHsfdhK",
  "key24": "5XWTJWpQYvj2ruCvjAJiTmdTfjUPL3Uujmq8qRY626ZBHRUGSYS6e6WV5rw64X3o83R5Xb9NkJSva9YNfWtVfpo2",
  "key25": "2k6Ge5NK66VXhk9s41U9WxFiv9tMPe7JQvjiQQ3SUyaooPqw9nmWaj6xrcgbamAQ9zqcjMzvSx6yHYP1w2mRvtR4",
  "key26": "4zsFM2qfqXwh6TDes53WBXn4ngpUJpdRW2Rey1F6Uc3SNHTWqdBdWoEKddASQZ5ooKgGj2ETGjPZCvgGsxtEAqLb",
  "key27": "3BsBS3jxhDjW4Nqndvr8WUTS6gJ3HKYdmxK7d8K6quhhoqYxkqwAkqmZBodCrAe2uEp683i7X8i8rjaUyRXFMUeA",
  "key28": "4mM6UgmfBZPEZaHhsaooH1KYwasLSL1eapMnm5AoP9u65Hqt4KFpcmVdACz8NxtaAcKNjmUgBJxgbV98EMUuZFTN",
  "key29": "4DVErcdQ2RrFvNF8wrAtsvSGhCvyr5uTMtcnsFDCHwPW5fzxnKNvfhfxxxgnfcPMXB5NkaavYzsYXfuPfi7QH4jF",
  "key30": "59hAViQeCivEKRoyW8YEECAG2YDy88rUuviRjbwPjjuxy5ykqi8epkcNATUdGX89rgEX7VcEkAZpuSNQGYZR8qEY",
  "key31": "5MGFX315VCKBeDE7Uwcbz4hVg2ypYcPbJXzXYNToSXEof9fXi5kQh9bYrR6YMnVYpoGa5yke4vk8u5HiXJjj9R3",
  "key32": "4NT2tf4VbHYAqSJ2H3tYMdzxnj3NMHSekVanCZ3pWGU9dWc22CDMkt7Ae75fmiyVtvLs1P66nUxF2Z61YF3StMTB",
  "key33": "2NmPA3vRFkhLsc7hw5LiYY7nPNvNmhx3my74HVN1YKDmN4kn4VK6uBjqQRYW8zQPNdEVqiUiUu8h2KGUvoXDtbbE",
  "key34": "5A6eLr72ayZrt4PiescQEcqFKuPHsjESAgqjnjehG2TXrYw7YzqWwB3dCbhkMUU86PEkkJwroZXmcMttmES4YWqP",
  "key35": "2MomA7E4ExywYmcemEWFSPTuSuhVYnkSyz15W8k5cpcAvBxbFFSQ1DuMQJZLeev5pUjMgQ9XUyoVE3mqev4ovgTe",
  "key36": "hQT2toKf7Zwi7e1gW7o1D5riG5pjtT5qbTrjsKHMz5GJJ3SfKWn2rr5MLCjZFBSmK27pCvsiuqLHtkk8ksJzMHV",
  "key37": "2LP9Yh5QL3YSZrgVhVySBkkm72GUdxL7iKMx7beAoDvE7guixAKEiF8cWP9MMupnn1fVMAhhURA7ZsYvBVyag6tj",
  "key38": "3Gjt9pA6zD3KKKHaWHq3TBQKP2bHAmVofbRMJUWHArcZ2QfYeit9SPZSivK8WR1e48a5hu1KsStcP8twDaymj7T9",
  "key39": "4HsAJ5zYzT6UkbCjH5Usaiiy7utbsBy23RFZnRUbCMx9iqHpGpUoZvEvyHx6GnbphA46k2krFBx9gqb3XazkJogU",
  "key40": "59bpQ51ff181vwbVVE2JYb6sYtYGZo1v65HstYZwDoRe2HmCTNZGFUyAbaJewPQHfoYPY5eWXcpXBKopEf8gMX3C",
  "key41": "2dEfhtwMGEgbabFyfdtjNpE4mYoWnHJG6NTcUg1k9hnCrmJRcbnsLRGV5Hmo8SDbTWYvXDyyz7CJUxNWYg4UKhDS",
  "key42": "4w8BmsWK37E7BH4cMaaWbBAqcisiknXd53mYEU6HJqXBQxPAvQe5tQNjks4uD95XEaN8SrXa6mShbpCsrcKJ889F",
  "key43": "3ChCFBK54yubYFb4stPRsaSXymJPs5fLaJG5Zehqh9DfouZ1tmkMiasJdbY86qjtZBBDuU3VBVtFaqx1QcXUikQg",
  "key44": "3453xyvNJMLM4uCRAnWdAoR4hTKZMEEvEoYi2qFjK1N99hcYufC8tj3vhYa7kutb72EA74zP54q4t3gqMQuf3hmN",
  "key45": "q2w3fWuGY2zefrv91SL24nGikJSC7YCnj7mvMzw2L2UrSCsAiEMZA9ahnf6YmqTaaumrZ9mZMU1FGisBLpQV22j",
  "key46": "4BcC8XJbk74y69LcDgLwsmw3LXnjJNRzkoj4PzgDzqR6iztZc5L3mZmJAAtsLC6CNxwYgvFk85uzd8hG1c9GHMHZ",
  "key47": "Swi5SH5AXrE8gDh5sqUAzrMaaNA4F6Qa4V84TXAnsKo1zPdhFyd3V2JTDsVF7sWYxp4w6zYEVgUc455JaJtp9Zy",
  "key48": "5o3re5yP8k5vgaBBgwWxkcAaQcTDR1AAXiRVGfwvvBD5fJGzzgUeLjqwShTjzHCTxT5D97MEFQvqZjQgPFAkrG8E"
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
