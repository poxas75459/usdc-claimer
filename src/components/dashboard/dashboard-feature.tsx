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
    "3uY138G9JCMmBfrbFf4Mk6KXnqrgaZZoT3Bdcwvq4aEpCTmcE5PdTbbzwAeLeZXDW24eYpy8WXTLi1nvH6BNzzSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xQ8KCTBueNqQpbMviBjb1UdMBxrxbUJPaMcpBZcaSNKeQkFDtiQxK6ma1NJhfJVWNJf1kKLL1Af8k3dVetPzwFT",
  "key1": "2AkNa9Smt3Wqt4N4fz6Hk2y2am7n4RUCZGpK3US3A8JuR3NVcQ5RtEeYGws5HZ43TN6YFKu3tRXm5xuP1QLGsrKD",
  "key2": "oj4BQb3N4HdxFDAD4L9Pp35X4BNZrH7aDj7jb1niH6xtn4JiFMotxiCKTjfBCzkCNNjHzcvWbZmwotBHP61e3K3",
  "key3": "28BNNiYpT2gq23KgxZ6QrTaWhbESV5V4xJv2NSw9xKoQuNiiR8wkMWJk7TWrBQBwKraKyr8zD4HFBGhtzum6SGX9",
  "key4": "4n2RDYTREdZwXbbsChtz9eoKEq9ddXi9QR4ouUi9AiWVtxkm1KNWSmuMcHz2SirUJp4HURhWucWTWCRohUiHnmAV",
  "key5": "5214PCRKgmKMaomFW925KH9uag5ne7jmbY4V7iuAnCoTHD3uXybeCbEd71KotUrdaNBgTmPWaQgVPoRTyybXdGv4",
  "key6": "5dJDYF9Xe8XUX4ZeqSeTwaiwrHVVtjhaaHFUY2adRTY2TFesmswtVyktx1wcMitHXc46TzCnipFLGQJmWKVao3UJ",
  "key7": "5JrcgPzyL1sQMXFNvc3xcVPDfKgJMpV5mzoYqSLtJdgQ7HdknNj5nUXGqTUjKAmifJc7fAB196YhanN1Hfn6MQSe",
  "key8": "2SjVhjA76u7mywCUfUYXyY2WcZt7wQVDwpEw6JKj8LndXDY5QkrbDasEygvgo1RPpnMLHy898VMQNT3g2zWyXmD8",
  "key9": "4HoCQSZRTdw153AVb6rd7hP3FSocqCbTvaLTe7vJP2322bx32o3C153u28gSRqXKGkmT7mPiFp2WiK8Ctfv7J2LL",
  "key10": "2bUKSrSECQDqpTTZgUGF5DXaBNd8kvoWLECTjwxUS1jbT1fqWRp8BZyC5W6T31XxArZbZFQFsTufaiLEnZCwSEfN",
  "key11": "4nfFK5kPGnYX418TZ9D38CWF2GfMuM5Fuy1pP24hudEBPkXPwGrSqvEsfXLH3Td9LS8phGixpnx9SQxyJjqJrdz7",
  "key12": "5GJA76QxH7a9tKSrVFXv4LLtaZ4PoXViisbpiBa29Qba3csrxDe69uMAdFompwaU3cBQum9SzYyGQPEQy1218C5Q",
  "key13": "2fAWA7Qepcyc7dGPxQmhU5qfRBYyV7PZYcFSRHJJSBdBGtTE6u83HHiKGavnHCWZ2AKg69EaGV28sUSsdAuSs3hs",
  "key14": "5161qoyvXFmi85DCbza5zUBbcb9JbZMPdP61Akjf4tkj1CcBQ2Yc3LbX1Z1YVacWJjyGtHBjArvTZJ9NS49qaiSj",
  "key15": "645JxvzserWvL5zbgxJaNdAJSnu6h3tqjrRXCGpekpdWSpgAvPo6aHbnAS4WCCgQvmsg4xuWFDEEGpDyvsFiiHu8",
  "key16": "26YUSPLEg2HceJDH7cuz1z7mVEt42SxvbVfKEkymNzNJmZbKzYmbbYKBvMrJXisRNc8uFtcRfCUeDJoQ59r2ncp9",
  "key17": "3E275bvgN2vVPWMV9pgEnaikefz5MF6yN3BRUnrhgaYXUaA8wDXQJUaUMn6yFe8buqesp9m1DKetFLCcgMFpATAd",
  "key18": "2YcHxNxQtMGmPYAyQxe8DMFxeod9xtTcMQQpsTdR4MZVvqVe2waj6tNYfq7CcJQMoBakUCi85n6kM7R8nuR8Lpgc",
  "key19": "3Z7VorPMMEueM4yt3FwMFmKtagptcbkXmm5UpNPt5u151ZFitkLHnert4B4C5udaSjTqT9V7mGKsrwQzHcbSKZfG",
  "key20": "56WKVUvoiZ3JgAdzPs1QWSgLAUCgCoHcjNDnX4zH7c7aKr62oQJRnJPTo964E4m9tY4GesAmtDxg3NSMs8BoNQZX",
  "key21": "3FPgQdsvJUE6fPFE8qayd6BsjGc7yUYtekZxmQR45gML48s2SV2nPNMn5DaPug68XxK5yUxwuHJBpX8usVcKp1qo",
  "key22": "2dufMDTYjouCVggMznEGDaZnjdVKYMCJwx6SgkRbAYzoSACQmWqjZgwS7FPd6UyW5F2ZGTeuUYjxG17QhbUHaMjR",
  "key23": "47UF7hZcBuWVcKP6gYZPrAfkpgdNKbjDEs2XiaJUnNARK3bFTwPt8Sp1LR4qJokHw5pu9A3zrMVPXhMntG7tJLP1",
  "key24": "5FnEi1SCt6z1ytufcsvPu9bEdY3fzp2LWWc9EbEe2S76ZHfvHb3WzjYcQC5mJQNUvoHZnhNqDHLGWgcwPb42yLG5",
  "key25": "5asxY8F9QMuDk43JAxD4AE3zWqM9Rs2a2NEzwjRKYoZQpnMCt7SfQnkQdjDccwmhvF49GF8hRfRH7BEjDueWyFoS",
  "key26": "41CuQqyPbZFWpoEcJNCoyNDQAtw91FMHENgAQsXk9Xbak8zcbMvLkhN6aZ9mK8XYMGb1yjaKA223mVftcjZWyGp5",
  "key27": "3oY3yQkb4tobbH2ykULQpjQhy3zbU4QNFKxn4mv5uWYLgj3c1Vog1MeCuoV7AXig5e7DzDigdd3FiwujeVCcfuiu",
  "key28": "3o8e11x2ZmhCvVNMGUTGrH2BoP9ahL7Rni5LX34UfaPP1SwccFacWoSWAX56r9w5VTYuvhrs4XkQH21Ac4EfWFp9",
  "key29": "2aUpgqyAhtUHuGE47JgdoLhVhtfsQN4u7mVsyUbi92GDCG9BBeNsBpYfDxsjB4gRuVWUEJjEst7uE7k5B6BTnqxU",
  "key30": "218pniKUEoNLZiC1HmPUR1kgiKWQAnZsdoZnyLn6gFkRsi9c96wKh1D4iY9PyaEfpVJoPs7itvomn9S4ghwyxeUx",
  "key31": "dwnpXfk6x3BLzxv6y63zMjByZFmWM1WhMYZp2s4PUVvVxnmYAz65WdhSK2Dy5VTPQoi2wArhBkuy6b3q2y2HMhR",
  "key32": "4FyHo3z6SVaiEfwWa5QY1aGKyHA41ZvmmMBUZ3irZVPoZPBCbTiWezf2muc5Hcqig74upV5WuxSe3Tkcqf6HnpfH",
  "key33": "3iuanXpH2ZrUG6uiu3YNojHAEd1qXFkHVr79XzUuFmWbX45PbBYaakEiTzrnCNHmNxe9dNF1o9iKGG7d7NSqi5LJ",
  "key34": "5etq9j8npgHP5D8qurNWNmp5soVbjiYHZmVVqX6qsmBQt6EnKqtBGgUGMCHhcUK1e5pvpstSxGtLua2PFCZNLdVL",
  "key35": "3wy2e7BZEtb5wkHGqTHxV3YPt5oFwtn5a8fB24trLfsydF6YoaT6t2D1qpVQ8fS9cnunfrPyeiCEqAbuZRZ2zA7B",
  "key36": "2jRDNrWijeggtiiB5FvpCndwZQbeaVwhp2gi1SAAGea6CjYqg3C6kR1DxDkp2ji1np1A5hkuDrLpCDQwmFLLk64d",
  "key37": "3QMCWU4TRr1bawpAgJ3exz4a7nDqQMGXYP6Rjx9gAnu2fjqrS9vGfQTmXLu6Sz4ayYSxC5KSDngjcNSHk1SKXGjr",
  "key38": "1GgBm2zYGsYQeA1Du6g4JNxYorKdNX3N1fD6AZ85tP3fPBD9eeMHciaAuUMSCyCXpXbrGhJsxJndDfscBfeQ2zY",
  "key39": "NxSr57katz1Ay5sy1LcQjapGF5WWEvigd6m7m7BGwrtDT27z2rWcVMgQaiBrSQ8FJJBsYbFCJy4WB8F46WE1SZE",
  "key40": "5GyZSos3WhxeaC7e9fAqbuwvK53QNgMgPJNdWgzET1xep7edj5rV7mhJS25r7t1Sy3opNZ9E4BYZn75Fdv9KUd7e",
  "key41": "Hhs5QcgkWuyq886hcjYM5YX98ieuLDD4ujJjLYFSriD777jUGUmAFqnL6btthrbhQgHY4ZAfArkDyjB6f6Trr2n",
  "key42": "2r2cJQVA3fFMS6WNVKwGzu1tUqsNGY8Fd5nAqKhdXVhNSxET6qqFAYLPrGDeNqLH1NKBaWxdPAZ6pWzXRuPP1W9V",
  "key43": "PBv7MhFMeXSY1CE4169jGuioUiSscu1AecsHXHaoCoZ6ENrELtSckNVENZPNySdXiKYvVRgow2jk877jzWQbRmh",
  "key44": "4BSTR69fG5dHF5CPKBgGJoMgPcTQ8K1LXSKiN58yuCSw39t8yqLkhi7CtwGDjfZNqskJARUB6xr1yfYWvuDhaiur",
  "key45": "2TVVx7eQAPCKoaLSHBwp8qNus65mSTWj4TsHzrP9yS8gKmdeh8ycTSbu8LVRRG1zKE1PZSxJ1cHqnrUHkXttj3M5",
  "key46": "2XD6hi44eWnGpK8KLiwr52TbdyWxRxf5hMt5we5CswNjiJ7rmnGhVp4Cy8ErEGV6CCqrQaBNQUG2t9QhLvf5wLLd",
  "key47": "33Mdr33uJm9UxyWpGhRT2bL6NApUJV4WaxnGcSymSJQFjqt3FABrqEyL2Dv9UoZNW6u68FPHoyCE23fiZMfNkQfx",
  "key48": "3pYEbDnt3Wz2WFgSK61S1etnb6CGYvv1TfajEXmZ3XnQBMrvFefkFoTRhYjVHxqkxKp2dLYNDzJJ5rnyRurqph25"
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
