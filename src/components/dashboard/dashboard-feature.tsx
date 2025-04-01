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
    "5okxsF2RH8EnTNh1h4c43yERBqoF9bYwJii8mn5q5tHsCXFRdtfbJg5k2TDdB3ne1mPctKR3KfF2gyyQnT5fikLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XyLgc2aizeixf7o65Ab72GBpRJnrNJwd2waTE2iZc6dA3MxCTyjVYHdUpPA2DmU7ndmFsj4Tp4YDXSTCM6hoCwr",
  "key1": "2EiHR1Pyfzgzrud1GP319G8MNXo4AamqSbFhZPWABR2xcd2f1pXrfDDsU21fAvcRmM94Rbf3CTGPZzg9SCddF2Tw",
  "key2": "51hAgfzLWZ7nYAMyFrE5VmWoj5ckdkbfH8MSpGwuT8W87eVtjEcsC3VXSJLLT5WiMXBTguemAPMqn2yKD4eFpALN",
  "key3": "4LCAmPKUC6ZEDPunNwxRbNaU4A5b79CTFhun7NSPZP42XEovW8qFsHxu3iirhEcDvZWsV6wnAZnfuDTyPaMkqGJf",
  "key4": "4JX5D5ijmf3ukn2cYtGL49bWNz1FxvFNXXrsV3hVrQNKy1n85dgNxAJaQ7RXAUi769kc8vt3GEMyVhvSnzrHF7Si",
  "key5": "4of4uLB1azSuQXjgjiob7LYdEo6Y2DMNjakXhYspu8Q8pdocDZKHrabsegfTpPSUnYyMJfvSAN3rPdFtQDuxLtGg",
  "key6": "dwLNXfrt5ExboJ9pWddXwnnMi9AC6aZaCi9nwkv9YZDs8SeFiPwHspqF7Jij21KoFzVkgUDi16MVDwq8vCeRaqt",
  "key7": "31zxehf3tLnximV3johviH6uMBUTziAJjfsw2d13nJwbj1wwqifjz6f1oasqrBS5PrmSE8D3n2ErViULSSkb8RgM",
  "key8": "4SmSC5mTPkK9cYQbUBbLCc99C6snGzhfdDfniyN3BUMvSS8TJZ8WmtLqHE3XeQnq1kydxb4vi4Xq7HsTLzKDoozK",
  "key9": "31NCyNuifwpy4KLuBxVvUzg18H5B8EdYNmjVa8wE7GvSrrHJEYd2PR7dTWUJNjtQv3VQzJUBZmyG4fueXxRP1cJq",
  "key10": "5P59CB84NRpheNLVrTb5kwNZPLs6KBK3uJJXv77pBQDcwsFDk7SGpbSPgCUn76FYwEWfHqDTcxYGcrmzFUnPs7vu",
  "key11": "42nwuWp2NAdu6H8eHmxfBvvr119JncYeKW4XjWJAT7B8VGcts4PRz9A9e74k3daFDHAHkM4UHtxBbp4gNwcnDukW",
  "key12": "5rGJ9jLqR5gTa9EfTW9c8Fm1kTqCLTHbve5UcRAoYxcPjKB55M3tf8XHQ7VsoETk6sE99JWWx4bQWpz8VjLkZ8wG",
  "key13": "4hwt9EyK2jB8yUdXVHse4eeUTAqGzR5woz5rDd8rQkh2No1BBx78EBmV3ZW9TTgoZnf4knkY79FbjkupfYBYE1uD",
  "key14": "4EjMMrWSTQikeSb77EuYxSUo6w23WtShcTUQfsrMk8zNKrg2EM2joxCcPy73HFjMZvihwJKKQg37JC1TgMNjyuw7",
  "key15": "2J7TdAimToewWdcwTFrEJPjKQwhBsTFUojHoWEdiorNUkZFGFg6gSRYz9oKy2G731zPMcu7MWxgdwryEp9736pwa",
  "key16": "fiAkjNtfc2bM42dNCTEjAqv3xhtSEV89pYErrHuGPBJrxYttVbinEjMtovjAXmm2wy45AjEsEV5wy1hHF6MHFNM",
  "key17": "kcadJfKnKkEjj1zxFKiWXwjygLx5qVTE2RzKSnigzSz5dxerQCZUE9YgJscufr9GL55qE4VRHUBhpY5K8dZgLoJ",
  "key18": "3iDRXRCCX6PWvqP1bddLxdcg8hYPqZC8dgWC1y1UXbXeN6j9s5nC9PzXdqdacyDUwiYvKD8pNgUSjHVcwEfWYJM9",
  "key19": "4AYY9YKNjQ2uSd44w83TGjqhT2Gox8DyNP9JmbyS7bRP6TZiEGgufHxLJUMw6nGWd62uUWHmpGV2sRC9MY8Qfdoc",
  "key20": "ZjjtJofEyzwyrKzhpRFk6wyGxfHkawUrUF5xj3gtJXvffzFe64BdzedkvBqj1MnsHLRh1EALb3qMe7g15yhLZgZ",
  "key21": "26ksAaLnBj5RnTZaRogwZEXLsHxARHnvCJ6qdRUKSfiah8vXbHq1CmEJxH1RPUWjiaRsw3jcGw84VKNWq9PCfAMe",
  "key22": "3CGUvjCB9QHy8KztH9JzC4mcrA5H4iKNu38tA214aWddoMuMKnAjSzdRtm3sW5Uvaka3s2XfbCgGW4R16y7Qi69T",
  "key23": "33zz4gAA52RZoQmt4QNAsMa2tdP4qaMZ9Tm3HRg9VfpFfQjX7ULfyr9UTqTU4v3AmJjg1uQu9gkx6kNXrFFvXmqT",
  "key24": "EmWvVTqi49d4CtwBjKRtFL8bYmFUqd43SEYmijr4J4Gc3Jq527wvJQW6vrbNiW9WBdq6ZBuLovhbHUQ2sbL1Pbf",
  "key25": "s2V11tWgMsPtLKGrcVQ2ghCiaoJTFNDjuvYNny7QaT1HCDeBWv6rSsNj4apYnRsYoXwysP36z953FyXwGfe6pLu",
  "key26": "4NndLsSBoXoiwKPygSNfJQxVBnsCVjYDTGUXHJMKVrvB6m2QXgKBFjWaKXvjF3ivxKmVS5a2QyydAcoTzh4GDX4D",
  "key27": "3r124HfE7WAAfdSHDx4uLJT9BQ65etKU6dfUfC7d29Cd3Tn8ehn84YsT1CFRxuWpxzzowM5UEbUADW2FoWetLG2Z",
  "key28": "2gceeaE1bsMWAtGJ23pkaT9BHPFx5BirvBFtGRwsu4T2KkoK9Aznf75xDmEbr19K74uHHs5M3Yc94A5gk6NXx4xz",
  "key29": "4HyEPXjKhWNiH5SCVhNdMH2gMT1QADKtWisjWUXKKLCzWvMcWWbxbur3Se6uec78Ase4Px7Y4bMv9YqgSTGJCUKX",
  "key30": "3gXYTDiTZpXvgekz5q6xoW1TQPLL85XYG2TpLtK8924aBcgv3bszwZ6TfoFzkAxBHMHmUs9pcf1ut5Y5kmt2KSPt",
  "key31": "2eTc22L8kGR85AghWhuhVH6bycLBjZ1bUdaRUHSkHeQ8RNH33iMLZQpWNUX3PSpKofXyLsT8fxyDtsqnsfZE6Anv",
  "key32": "4mGFYdJntjpr5JZJssM7KHgjU8PdeEevjwQ9VraH2aqrmkBoiG6AhwaAgQj3xNSyVVNZpJTMuuj4sKUECSmgcgqW",
  "key33": "C89vVLKMRpo1m5QTr3o9AAWnhSEUfK5CykoKNASAZgbJXyJczbMLVtpUKJWdootHUzP4sv6Tu5GxVmSsEE6w7m5",
  "key34": "4GK5P8v3GTSt9FWtJvxsedt2Bz5aRp1iDeHF72osDCTzGRmqwo2XgdK47Wb5VjSDvz3z4aTawCdyGsnB5S98D6dd",
  "key35": "2QQA43FREsf36J3WacJkFfT6dbG1vpMoYwccCEHCUvPYHKQMDadcg1NDoc3arDUxhXMooHUt3CedZW6fbwgYiGk5",
  "key36": "4G5M5MpkUDUz6BBXffUxQcYefjkiJEfG2ygB3sxAS2f85pVJJCNZfnjAYvSqWB9njZHmELLBACkxiPMKNKvAKa3C",
  "key37": "2NKtDC7bPb5hSK7iTNxVDThsqpCTdgVsxJPVUsZMmUkR4F9CMEk2thDgKgGnipSb1cHtn4XS5USnwmmh2cfPw3vE",
  "key38": "2qpqhh6pPqmWwV3dsdDGepZJEjoJy5qpsK9rGaLafbCBJyQ9iV53Tj2HBjrUGGwZ1ayAozjehf6jVgP3vgVdp7SG",
  "key39": "3kfFtZFpp1iMWqSpjEF1HzBv5uaXTswX4MDGmrnvK8bhrPqyJ34xiXJWwwjZQTpZePnRmu7YpVJ4BVtsrD4EvaJD",
  "key40": "25brNac5WpgabBZrrv9VaRsEXFGfQW3uP17mKR5m9Jo7MVHSeAA7JYrvv4gwHZkkQpnRgTik55Yh1JSADgLHVwN6",
  "key41": "VYyvNSMeV5g36V1Sie5Lz66pUxpMaGFeNq4nfWeaH4XGSepbHXqHjvrVWURpfC2kUzPhCGruFSVyJDdm6vzD4Ef",
  "key42": "4u1EqxwbXoDV4DVPujbF68WUBJb7P9zV5idZW8mvZuXDWThFV9V1ukDq1tZfKkVv9uCi9V2jMEi9cypjh5XMtujP",
  "key43": "54fi3SUjzeCf2gpf13zz4qhyzSoYpqVavxTGu4YWwvBJF235ZTSevCndgEUKYfns7E2p28yDpZ6VF5HrvkkN3KSK"
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
