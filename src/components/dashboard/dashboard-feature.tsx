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
    "4fN9PYZZzah73m9yxVWya9DakAAVVg3Ar9Q6KhTxxHHXP2Au5BJWCdpEfNh33Mt9F5dGcRmMS5wghD2WWF1QeB79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ugnhCCHkftij9pxjHicS2gNf862gyjJgBWwRhUCskGV1x7tC9xbPxfmjBzHcR4xztGtTWKjK7utTX3gLAmXvyY9",
  "key1": "2KnEtKc4rB9qgrjQPjDVExqfgeM5h6dBSJwzEH8aDWV4qzDGqkvdk263AiA2G2LTqpRkd9GUPLzZNuySP9LecsD1",
  "key2": "4vBtnPg2KzyE4i5nrhqpBeiVpdLbsKN6D8wFhzPe5519593NAUy9t3cLeRuyyRgvDLLJqR6kjYjSu9Bu7Y1EhTDy",
  "key3": "5KTQjTMWAu3vVk18aibQYnCRFSLowhmGf6iu3LJKadZnxLAzEeA617CnhtDCZxFCdkFyqSYMME2AJby1ks97UutD",
  "key4": "3ePKs1LRtXT4djLN3Qunx4CqZKxpiV6s2VjM8sChu4UMEkQp7NqLtjPYZpoP372TawAjVeiHiJX3UxrygEDpGhW2",
  "key5": "4S98Kc475QMixmFe7RMvxc9Qxgu5MuQF89yAVHRiL1mkbCQv1kaTCBhKeBSxcCSfWgCDNaE7hYdtRPE6t4Rj1dnL",
  "key6": "3VX8f9xpq3WCUnnVRW2zQhKSshmmzf7PKomm72M66xNR2rmMBVVDvN4YyCSebd6znvozWrkSq9Cu9SViBFMZNhPP",
  "key7": "3cFYj95RuPtaY9h4mejp7uSWianovwe4SU1ug9yxHP1fNaGw7yhyHQ52sRn3sYxvv3uDVKfCRz5Y1cVV6VkNMWCa",
  "key8": "4fEhgdzT5sr53h5XCYWw77QTjmsZjf74zPDqMCWrgY3pChoejLd8UbFv6ABkEfq21W2ZQBQvdAV3CVy4HvdonS8P",
  "key9": "2TUXE138YQXw7dqCta6TbAH5ukjUiBZv5sbFctJCQ4KRrjMtvtURGeHskbWX99oV2AYs1h51onQMAVpyYPArL5FY",
  "key10": "e8iJvCCTfQYySvmJP7zqaZ3rwAa7NKu1Ycw8oJZqXRoqmNdvHYnwarz6YRwwPt3a4bg3rTxHbVBkWs4jtAQ4ZwV",
  "key11": "hgm5J7u5E8wSCJw1H268ZaJvm2X4AzPyNEmc6Ap5tEqZXco6tfVfDKzDhgSVWfsZMF45Sf5LPDWvaQoUbQQyWV3",
  "key12": "5nGcEediAvtvWnVJyToYxnFTZSgoxtLtp5QLVAhemHXgzBJiUxU9eVc7YannwuiCfnMSpN8BCB4USc8Y2L8WhyHT",
  "key13": "66DZ1ejMdD45hgZBkca3xRpy8W4G1ao4W8WuSJscJBFMzxTtTQqSsQpvwnDWAY8rkZJkXTPEcHf4JbjDWa9pZM7k",
  "key14": "RCgnPiU3Y7sj5WuStDWoDh1xJ9fiEEa63hxyJWUbkMSbwVLfAs244fdPzjPByagv6rZtPJkAtu7C7Yenz3EiM3q",
  "key15": "onXTnphkqhrwVP9JmyKUPPCw2rXHrmDF9t6rVzVWn6Gkfn3P6ZzFQm22excuEGbuWw9eq5bXNNRfDqeknFkL35h",
  "key16": "29UbrCEa6W7hBJ6NkyjVv4NAWn5xZJVWxRm9hr3By3CBb3gZ96oUjwD1x2afSSovdC6oKF18uTdocr36Z1qMBHB9",
  "key17": "5znV59UVgUUFwJX17gdQCSsMRPLUZ9fpnNgqad8h1GUh9rxUnNPSgiZQaoKkpSSCq34NrufUuJW2gbUyr8Le6bLV",
  "key18": "5YTfbNkorYKBwmpP2iaaSgn6fedkX471MxwaGx5tcfxinpp1UjY3uDbqie2YZ4oGSUsesdmCnoeXLivWoPMTQCYX",
  "key19": "5kfrdyVvLtMaUPoSPgo694VKMdQKdge2Df8BDtWPRQxcCTFkLE2Q5SCnzPnkhDE2SPPbHYbTYa3rDArqPmyNdBF8",
  "key20": "2y7HoKKdNswe1nqtXrYPqjhJBao5GtTv1273HmrFfnvxm7RVoYNp19H1Nv4rWHAVaM5ei9mHZV4RRVKb79DvXAq3",
  "key21": "5hR2ZPTA6MJGq1TAx5N2aJ5RKG4Fq7auChSX5ms43EndN2q4szuVUGZ2dp7bTGejveeJrWTt99ncfUSnPoT2fj2j",
  "key22": "2MhNr1qAQgoK8Ev3bcVfjq6PCKANujTYkZTP8qP9Moqukmz9J7fZjYDpZK3PTPRrc5RzACFXKWTNaeTKsAV846nV",
  "key23": "5prHfjCW4QCjkBbcuG8PbhMKneixfwkDMp84etDNh2vHpUDyWHtaVC5hqVy6iyeaLeKLu92mhBbcyoaGjh26hEV",
  "key24": "JKRugFQmzwzh3Vx28DsCCkU6yx4T1GMv6FZ6jxphaogg1dBnnmqFCnEZ2As28y8ejMD5NhskYDjmXBFoHP2nS6x",
  "key25": "5oAoSB7oxLD2YpNCJEapSK39dknt85ij5Km6pfZa11AqPNzQvhaecyaWY2Bn4ApvXphgUz4izNCkrepQPLyJCfMo",
  "key26": "4wymUHSDafHigBwWXU63bjz2561oG1H1j8SzgANze4bGgCzDyn4oC9MqcgvhTAZTwrev3CEvDfaxEGVQNhxUhici",
  "key27": "3mWZWpSy681UowQdiTPeyrrC2NDbE38DmE8SeUroPdJacNLmwkbfWSxUfby9tLBeF8ZGUFJP1RQsvbro6MqEHEyK",
  "key28": "5ces6ofLtMdYCZmpXgG3VPd1vk2Fs7bFJ7TSd13WbFLVMXkHibxCTPZGNgJqHAbaR3gVNTydnW7QbgqsZ8ZZbjmC",
  "key29": "4S1rTppXdWu5VZUC9Pv7NnpJTxZc1SF3G2YtprMXW6Y9K9VipQhTQEYYkGHe1EPfVY5f5NeQXAZCLJ2hwZ4QTPJe",
  "key30": "2Ucf6HBxQFMBUrcJndazhpZmxapAst5JTEKpmrkBQqZjbzeoFDKWkv42ACbP3C7x7Tdr2qURG8KgdMx5CMYauwvr",
  "key31": "6736t5iaomSfBjMaTJtJoivNvHLL1SckeFomDyR1PuoiEq9UJou89LTHbF4KjpqA4rg4vbuMjub3Rg9pxYvHNJWz",
  "key32": "cmeJzgWmpZuQwAmq4sHKQka82a4vo4onthdze6wwZHSkuiiSBTKkQhkGWXdZeaJfXXmUMPLSHRwiYh2swCuTmjo",
  "key33": "29x5HehShHWTaUgoaj3VsW17WeeWWnF8HCUCVRmShTzMQhyDMQGPEo5uQmXRnv6g9CTR2VgjboBrW1J4S41YETLd",
  "key34": "5KiwrDdodRyBfgeq3nZtR5LgYFcaXn6WeV7hovPZsByB8ewisCCy1UtyhGzpN4NjbV6TqYaNUXZr5QPppaRcx5hu",
  "key35": "2P4axx4dNQoQ59r3N8eSe1rBhE4xXrvb8tUEch5qsUjG2C4WpVeCr9mh6gESMDiXuSWbxjSyqPq6rcbniLzuJZ5Y"
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
