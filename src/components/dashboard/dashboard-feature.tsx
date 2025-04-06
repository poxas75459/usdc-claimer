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
    "4RUydDu26m6w8RQzY8be9hgF1GkgVGZPp9ofDxRFJg6br2GRMXYQmUadYRn3LuiGo1LjmjwP5WZKNf2zzXeZXeqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BRvM4vbdLfafzjkXeEhW5Cuxo5xPCUuqEnzcax7JhL4E6kD62rzMsRyGkYgRafeVPHfezzgF8vX4VTuDwGZbnzo",
  "key1": "3b5Yo1QZ1SHN55KSixVsUnRxDwgug1gGnWNomZk1QyrgZ1vYGZSEZWMo4CTqiEaEqSoikuFjBqhGLh989W9fVBfP",
  "key2": "5Uo453LHp627QGKh751Zo6JFpRdaKo174vsYhfZgZv5VJizmaSZJifwtLpu8HfmTgdZN8Be6oVhLgDqye6aQUX2k",
  "key3": "4MJJBUpnhwfGozzdhHkxDY8Afc8SXdxSXTxciXWNPYrQTf8uhtyTXFaLYVGpHNsZsNbTCx1rKDV4ns59CFUkJ8uV",
  "key4": "tUpy4u6AuvpvWKwgEK2q8NdmSBJKdZZ2KCDUDvx8oazJFb6WBAnpFAJP9hbNGAYVrTuBPdTW26BoQMnD8ZQh5pe",
  "key5": "5BV98t8iuegoREfKVjU6CjbtmQ3Dz3LydHfGVoWzo6xNMYy9vurXMs1vVgLZ4S3zVX6Z47ydopGK1QN5P5D9uKhx",
  "key6": "4STtVN2q3H3XVbBHt3B1G4duaLfrX3EL817oybHJ485V4hTCZE3ReDXAsyn96EYAEvthVchTR4sUCQiZZH2Z6bD4",
  "key7": "64gW89MMFtAADTymQtZwTBzMgmYuZ8N8sMWbYyWnZi77unM5yBpuwL3egE8us4fjWNPSrm3LCRTWcPABJRaTPddL",
  "key8": "4RQi1BWLSChad6DiVrKwVrvauDUKPpCW8oUTg1JUThvXwqTxLR6D8mFFiH8Y31HtyGKMZAHec6kvfdcGRhaksJf7",
  "key9": "MW4G36fXU2RbvK45dipoqT6VaLMNpapo3JDt3rzHitGnN7FUinbBQKrR7Jmd3hXWZAjneUSFxQZEW6ZHNrVdHJh",
  "key10": "2DkWUvxviF1ugX4bYhhtnv2wP8c1Z1ZZMfT1LcNNBQmzwxBFM2Jn8FbzZjLiMJaBNwZwWLeeHhtEmJYK4UqqnsRN",
  "key11": "3i7kcn1cUpWQUwp1r6tm2actRFftbxChCNcWvrRZGDdb8iDuxLujy7oTzNKhQuqGXzrspdfze8CboQxeYPe8dwQJ",
  "key12": "J8AqhSvh6mgqsSukM2GQq8hQQRqboc2vuw494K6UNgseVzFRE8iaTv68LTPtbtBSQqLqGD63o5Kixuoe9pSi9bJ",
  "key13": "4V7wMnQktVDq2CgxFZv4x643GVFi9CwVYyb6oP2gDSi2rvFqPFa6JHtmkRnAtdJ37kKgP5RFqhs2TaG1GrnVsuJz",
  "key14": "5g41BTcwHGCzBsNT2kuMU29HopAVTE4uw8Q3LsqmHZy1jKTRbw2Tcn7KftvkdipybLEsp7VEzYCw995x3WDZpYSN",
  "key15": "5LLNpQ3eiQAvgTXctEQ63bhafH2eBgwqdo67zq5hqRATciAcJr5dLqBh9G4rVeCKi5EPWh2VDE8vuNcnMCDAuUQD",
  "key16": "3fab9KF4deaBj86kRQntAjHeGiJMwaJTCdXNs3uKcTvVReoYVhdTaKrJNowqh3UVzxUq7DWDg2aikLVYbDKALJxY",
  "key17": "AQRrzCbs7GGT1cZEp3bSVBec2RoLtCE6CZJKg3sNfnvWQHGWbcCQGde3FuWpHYw4enKQ3pxDemxGbK7QHYVGEwW",
  "key18": "3PV9ToiczrRrVf4WrD1w1kyAVRqCnbHd717mVx3Kw7faatCn2bYZNGmAreG7bGPVMESTEGTJMddXakhZs1G3f3fX",
  "key19": "4qtZqP7j81fmjuLnKr66CCtkKt1Yp58zsgaiKLHpQ2wT3UvuwLkGZRqV4CGgvkoSncYoqR3K68mkBWUVXYQpgM5G",
  "key20": "5vvoRLWb1eUsmF5YFLoP8AEYbBCPNvWuFFLZuntj5RvBo6j1sTnjH7tK9VFpuhGeuJNanQMEf8sk82QWzLdAiynL",
  "key21": "3vxtyNQkenYDzP47V5SHWR1rAyKfbXHPpH8NgTHNWcaM8QyKpnh4YnFzvPmVDMcKpjbd8Bh4KDEFWfBXvik63ytQ",
  "key22": "3hhevhg62rRHmSr3WGtnXyRUQkegNBSSHpX1ZR6isbb7Vc17w9Dhttq612bj6uZALkhsKjRFyB5qak4VnVub2X5X",
  "key23": "gaXkCYa6aDFN1Zw62PPbUAQSsaYb8E6cEguZndowdVGR8TfXNTLBzAgMBh9hcb886pGS5ayS3KHHbx6vejQNN1Q",
  "key24": "5chvYkUfTfsak3zSS8iCv84VcXsmFcYTReEFbkttZne3i7djJjtHfZMqChiciuj8YkhAochMZJuGG1eTQ9vfPyK1",
  "key25": "aHpGG92thiFT7HYxkV3R9KGe5BnusDcSPWnRTKNftkAR7Kf3Gi3WceY3byNKdobZevHpFVfvAwzmCoYN6rdRi2h",
  "key26": "2AUaJjjhPwHLmPSPq6v2gkcFkBpNLSStmdk7sLq8R9jsfpW7PbfWvk57gmCWPK35LDokHFUkjURE8EZo6CsfnuRE",
  "key27": "4m6nDVSRJFhWEbukFkwrEv56gjtymnvY3VheEdiabtbyicTz8byTTV22AoRUoHUkcsvCF4qU54ghDEiozP11dnHK",
  "key28": "QYR4B73J2JnZQg37nT5SaauXx69Au7khkxHTyWpy2FYTetrzCjEKrRXRCjqrBak3rDVhT3NuZ5TvGGtKmHGs3eg",
  "key29": "2LJXra75Fgnpzd5qhAk6PmDPdm3V9sFNNkdKgkdVAUG2H1FMSPBryaWrftSPNxLmHJN5qGeHmW2Mm91Hk9ukFnFb",
  "key30": "2VMyh7q7yzjaRA8wYHhY18krU8sTBJgbrPdZwqPiPbfc1BPYbDQhVMg6Wqs4McDhPNUSmKXKfNAnSzvDsQEbYTKX",
  "key31": "4bzcoGXK6AaqfECgboZF8xMGq4HrWLdTMYCCATWQm7HEccTtBjSdkN6Q1PiPVPn55QmMa1o4osVqvCunWkXdWpEa",
  "key32": "2KpwMsX7wHR7DJQD1rTU8hSU6i8WZady48U9K2Ju4f9y9QwrQ3qfZyRZcvBUJrTfrAuhEqVKyTwd9i2FAByhu8AC",
  "key33": "51wgD5NLqPeH5MQ1qWR5zX6TXkbEf7FBiX1mS6tUVzYtvtJtj5H5du4JC2kptRpMdeP7QahrGbA93pFgD9NMCNro",
  "key34": "3sTbURuZYshxQbE4qNLChQfY7818y7E7wVpgqj9V3KW6pVcZwHGPnNkuHD66T7HfsMiZFrTVUFSiJhj33beAWi9u",
  "key35": "4yHAroCPpub8xqseimTj2cyokxPxgCzLvkdiyKRp3APJnLNPYWFND6ojQ8f6KhAK5A629X9tT5QJpC2JLhnH6891",
  "key36": "4A9zih5TH1Wvq4j11iWbe6zbWDBC5XXaMco191aYHoF7AiX3L1hQjBfTJMyAesHpqwTLie8y9LFyrR75kka1mrrX",
  "key37": "2hABLVkjaUQDCotQ1kjACJJnaXRCyp1HduhJPYtaG52kpgjY7rsa37vrNs6T7gE56WYG8ooZjdLdHZbToDwvopyS",
  "key38": "2zMGJcFuS4cftMTNnte7Yv9dV4Hf3qYXM1PHaEpCjNzww7sn15LohNBk5HTmTnPUHCz3JkY5k8sAiKVjh36KMiSG",
  "key39": "e4o3x7jXAo9ztDZR3u65EwSpvouF8hHZChjBcxVwnw8oWAso49yXgRyoxyuQmKaHWSrGAme4VMMbpjvodTjiJ6q",
  "key40": "5CuyWSZRCdpYEKLRxy6v9g8dd9ZJfRKzkxxCsLCWkRuJYd67hnqo9dj3imzRCd13Z5rQ5gT2HPh3FUxcUZg8D5aW"
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
