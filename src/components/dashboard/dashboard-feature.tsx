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
    "3WDGYJpacMuh9f3x6rUCEy6nJrrTn9ouf5WVusVmXPWsymD7FbPxLmsMknoxWzsZRfxCL5iJa1sMuQXwbgKumVrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Gz1P48eb488NGegepdZkQmrAif4Y7cc6qfctBgh6pQFGYqfweqs7MnjPbzSfXdD2hmNHyDxtk8QGSYMoh359JA",
  "key1": "47nvXmbaomCU9No25Cd1sfkEk6VaDUuVmvisVy8s7kEVYtocAm7L1wi7MzctwNp3wtCwzxCP4zcH3nuPCSSGAxJh",
  "key2": "3fkwrZDRyHexALsZ17kXSWQtvUDd52FqjafX7C7Zd1mVEKTVFpipMMmyeUSMesKaHosbtsMSqX1SRh5VLAVg6sqa",
  "key3": "4yZDMA8mybM49ADh52dhhFrm3apoyuEp8318YhCi5uNZZ1cx22x2PHcp7wF7YgU52SVmo1eCBcqh1eeo2hXhEVmJ",
  "key4": "5PpquDSbmu33fcxCy8NpLAakamzGdVRpj3uTQVZ6rLfURTDbL18B9hg87MwT5kYrQpRvhVrqJ4n4QhavnQvUBYsp",
  "key5": "6MHtRkKjSKfssjWnJNocKifizubCPG9U4F5QLM7286GXgPnstZ28dBStCrb73tajLkZBBxQCnBiU7NzLSuTiSnf",
  "key6": "5uPW6FvSTzW1eiZTLidHzJq6ud9snhyFZh12Fjc66LTeJnviMSaq6WBo3SiTGQqLYBBudBwzHewdhSqt49cZkn1n",
  "key7": "xwUx2HFH31NVa14ENisqevmX5GpYFv8i9QcsZjzAiP47nAQ1HxVn7bhsCECaPveGyNCMTzKUd61vr1xXZfmvwnB",
  "key8": "2X9yF8QTZk8uegH12Rsddze8fcmWV2cfwA9FESpqqvM9YcqRVfxfeg5MyQH5rH4hY3pyKTZ84tL8JSiLytiWwwcD",
  "key9": "5QcJAsp3CLaeweLFRskibrKKC7BXToDrTxTQLpeHMnodRb6DJSD8ZdrjFfRyDqaGYLtBC135JyVEP2QhW4bhCzEr",
  "key10": "5bngMe5uQu8m8qxMppKZJG9LbmHF81eqtBLovh88uReNhYPh2JzhFbxpQ4XPXi8cmdto1suDmR6p7XLQ1im3J4X",
  "key11": "22GofWcw9ddn7qEg371ivqcciencc7cT7oSuis7n8zGAB5fGc7jnbPBUcEJXq1cgfgH4anbQqBtCg1knaWqttfPk",
  "key12": "2Yybpv8NvaDqn9AhVb69tnLnxq13awTjH2CQfkou5JR4fYN9NE5R6nRR6cdfD6fz4yWxBn6xQzLmw5JEKosz8tdy",
  "key13": "296BLwGGTZ9kKTGbLx1ksztuZ6QCrykoYh5djb6aK4jgayM9gDS2f58U6aWNQKtyTvAejmUXRMcNq3MK5EGtQAmq",
  "key14": "4qQz6qauNSicfZ6QwbLx79gL8HoMg6xdVg1ecXfCjXxBHSZjQmkhxPZe1TNQtoChQyQcJLgMfAoGuVSGkuNRSdKf",
  "key15": "2D5ZW9ynCRj72R7HdbFVSc8TpZLqT6qVf7FCf9mheqRaUVcPesfQi64zhRmi1fZyoemTaj6sBhCegenbnazucA5f",
  "key16": "4TwfEpnk4Z4vKS3GeFGvp3BPNivDaA1BsWeaRewrwueQ3XGDNmNShKazMRL7it48XpSw73ZqTNwqDZhNYJaLj4AC",
  "key17": "5pqSibCf5uYE2cR8bRQstToevG1bnGy5qtWHdQAdcrPDkKXkq8aucgWxJ1doSSkGBERW78mEYmuaZ7BnhGxKXxKG",
  "key18": "3jqxGuKRo3dEg7bN6tVqb1GpXPq8ayZhehPVPch1NNwNcnL3ytjmZSv4qHMYwY8obqddu9XoXZcBvYz5edy9n8XD",
  "key19": "4TwBXJbCLSdUGr1xYK7y8xsKkvPN1EzYh8GwZtRHm1yYfk2x5GeSJYDb7rMZFw6KyGnqz3v4HVxbY47Dy9wRtMq8",
  "key20": "422p6DCUc2py6QLh7aa3g9XRGdBt7dwNQ1EAJKJMTQkGxTChPm6SJhXCFRi5tJsB77erHTNwqiwwg1PkPU1aAP6o",
  "key21": "4g8BusmmyYUf5KSYHtjnAxyGQAuuyR1KniPrAe2VdoQYueKk2gkd1J7S9VrJ1VjEyG5HeruGTAVoXydbyfn6nvpR",
  "key22": "4r245Nx9Kv3aeFca4F7zEm548is57XqomkgNYmA2nCv9rfBBCqZAmPyQH8rDmWSPQx6xAosLw29ZsHJCSnhntcPr",
  "key23": "344yqMgjPSuCnK7VfK5gbu6ZpL3WXvTyhZ2ozmNiLvRwr29GyJwcBZy3G6BvqgKhVK9MmQXzSiZzixyyEkNncaxd",
  "key24": "4mvSRDoiuTSd3jduwXmj3GayiHGFQFVYT4a4WwyzZqD2dJu5s1f9wE79NrLz1psxFxjTZCCU1bUnBkjk3GRj74zw",
  "key25": "2zrQg2MVYR2BRf6vsBi2YsQarR61FwCm9qPHXciEqTWhsd6XXicKo5SBeYqK63SLa8diaVv6xJUzjc9aMSFSf1RS",
  "key26": "QQ54rLaemwxbe694TfuH45mHRgHqLHsPvi3gtQKHwcVx9UaBrLUWTdTiL4dJwwafFjjpxYzWRhS8BVFQXTTkNzo",
  "key27": "4Wu4q8XtwHoPTkpnZo3mdQjK74thRMpzrkFcZ5JtksgHchqVZaoLBRtgTXVvx1PLUQuYbbkPAiAtjoQ5f9eo7VBD",
  "key28": "ZYdibViJSDazzWwYpg6PvvUwkKSFspLMxpz2PVwkyK2NvuQmVBADGPDhUJ1fUKXgGpFKJQHif37osSaGxxcM4XJ",
  "key29": "W6JS2vdn5vncBW9sQRNsFn4hjB6TEQxw7bTbGxWLsGGD1MMX1nQE4CwSuzh5RTPMAETqU6fZQhuJx7YTocV4u7p",
  "key30": "4arDZTQxjDRVxTh6q1W5QGkU6ekvk3KusQC2caMqwPs9jqrug2827zebA1ZxoACh6SYx7PrjUMpwAYgaWqVkyCjx",
  "key31": "3nswoHyqN4A1vM4tbZYUReF1xcKyzZcyEyAyGWuoQUPaaDJsQWdNi1ebHpPbxTYLxwZHY3oDzagRaVCzWbMRSa4d",
  "key32": "55BF3K4CNVaJo7jR7HfyJPZt2MAjqGhk5DkPFkwHKfHSZ8tyPT1sRPUWYoLDKBe36M31rJarWyLXJ54iRXTTUTtn",
  "key33": "3Va6x1DmUQhcXow6fAfmemxfoDUgZycsJGRZ1TzEANpc9Bqq21qC1SYoeb7mTH3zd3BTPj1AHeeaa7xQb2CaE4T2",
  "key34": "j8hAmxyEwdtQF3cex2FyVyUggnymkTMegerXmtM4BA1K2n5zoQQ3LkvSTLskVfx59KgpSaq1bz6CyKtEhuZcxoT",
  "key35": "418WJT7k2g84kZJV2VtxKfGyMNLg6ZuU6WegzxJE1aG7XpuEPFTB6AaaKyFQq4uo8qBaAwmV5kMYChXj6zvgo9bL",
  "key36": "4T7THN6SNtFPRj2bdadWSdUNSxVCDiobWvra1S3RY7uZPmGWYXxt1N8Y3n1APcHXtrvigKVjKoTqshaZYk45iub6",
  "key37": "5uHRVuuK1ZJYq4DeTxCMJ9SPFp7uHmcfj5ukFjtt8Hymn9c2Hj8JwvECEA3UiH87Ln88dGBJzTU7vQvZFRhTUxsf",
  "key38": "33DdzKCkezLhGwMrVfqfSFb829KTu1NTEe2m3aNMHBvUuAkoHmLWtv7jVpZLxAAcCF984uc98n4pubg6VamNFWUH",
  "key39": "4BdZsb8ZSL3WhDH2Qh467ZBZFSu9MMMAamZfLLBqTdaXD2SvExrzrhNZMsdL6HxUwgZKt2Eo6DUpRUXKUu9vQpki",
  "key40": "FeP66NwjeC24LcGBsP21K57GJCBZ1yYWJH9VBsfUwuGrNJjvqZtqmt1d26JENh6JJ2j7rpK2nik8bUik5rHqQQc",
  "key41": "25eTkaRqQGZRDcTkP2nzgJJdAmwmg4Ux34gc88NpxN5dARLk567nPTN5oywR7PmjmXKLqKY6JJXCnReNba9GsQ3n",
  "key42": "2xKKU1fEzHEoiq75h3XgnRC5VG5BfepWharXsuo3cKQ2j6c4mum93wmTtZmK5xrsh5VrwSciL6b3YytYY6iJTfV2",
  "key43": "23S6uKCWHA6HGM6E9nG2YGrtDeaxzP7AGEZWks7PMFDDqPXsr5DZNuaTY5ZmtE1Tb1mx7Proq4L9DQhPAu2nrkox",
  "key44": "5fMvg9tNHsMDioCyS7hXxL7rxKLMBYgpDSj8xVa1TvdRvCcTJMZVANRctNbwCfoAV8PFvXe5iuBAzD9JovKzLiYM",
  "key45": "2kW1a7UQDcKcKcsQiz1WqWAiyiyWBgtWAGb2CLLaDvSfwA39e2aeZzE1Xij6FYuu98Q9uunpDJE1LVEB1TNUKcGw",
  "key46": "2MLJHjb3QYrc85oKyjMNaGrYvsd7CTRbKHVM6G8JkAuCpk9V3T4edsY4fMyFJcDSyjezm3bBQ338qnPTvDZekmbz"
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
