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
    "66BthJzE4HYJ5qEDE99hZhQyi99h9EH2AphrS3P4JAa1G9tK6m1fwBYvYokk9g4c5k2yz3KRhwwp2SBmHuEnqSXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UZAFNcRZcgMjUXjCNRdy18mNQSKSud634o2rLna2aLFwTd4phGWHKngP8EdY4LijXbGU1CyYmvaDXEztVtVc9sa",
  "key1": "2JZpzQv5wt6HJGXBBZ9HyYsB75ixFUHurcfKyLgCofMbsPz7a2DT4EaCtJzGBUJiUyENgdcYNPuSXJ2oU3dNFjeb",
  "key2": "mJJ2Wbg7HutCJ5ANK1bzhdi34td9PwEsCg1JK2Uqe7hFDmrziVCWLSMExT9KXSehugxvyYPPWN2b1T5T7mEwZQR",
  "key3": "2kh6WnKkEfN99aZ37S6S6Lzq42wy72M4TtYhp3Ls6APjfL89NrYSfGsAhnTpnhAVjZNezRzmh8teovMsKRYnfkd9",
  "key4": "4WUsaheGa26hfBJMy2poz6PypHaMgdirxixmPzQdJUG8hHcbtodsWDNPmNGTMZ9oqegycctFUaPhEm5VveGckDKE",
  "key5": "My6VRbNP94uUZxPa9LAzWx7bounRaSeponfHcA6q7cFx3z2XFSYTbqu1Z49JSkBrJUecxCUfFZqcCQpkWmgSfti",
  "key6": "52qSmTLD4KehajSFYQuJ1qTeaqp6g3nDjSCwXzG7K1ePA9hwPZBEF9CPpvg9fDTfF5veHLCEDarMX3ZBUwwP67to",
  "key7": "3Fca8bzXvytT4axvwdF4rtfBQqf7YzmuREhPz5WkanSEoMHL4RY99MaKs3CVMRixXiHYZ6ePtPtiRinN9nWxWTLk",
  "key8": "2nZQ45YtPithbaA1vwCkz7b6vSuVBZ3s8E2wfT5U6u9fFvHPA4iQXpcnA5fEaMamCTeGBMHVJjQWV5qxpsdfyszd",
  "key9": "4v9m14ubqYBzBXUDpeYZg8PFmnyUmAgzaHFDGbjB5PPjvxjGCotQnmKBiWE19R8Y8V5XUbaTYW1MLu3TR9wZoLXV",
  "key10": "45KZYCyf9SF6usw3rRzzkCPyqJSoxaG3LcpQULVAs3BtLmiuAHt3RtZxBRMtEXsGc3HTiqZz3Kbufn1qqvLb4ijT",
  "key11": "VTz7t9ha9NzfAQxWVL7L9sp2cWBD3aueQnViH9aNVCdEAfB92jzCah1itBdbx4ZwwcdjfsUdMWA82JjBFV4qG9U",
  "key12": "5bjc4XgTyZP2tuviVY8qLLxETTHiX2exXVpm2J1GeTmNHNeo9AsQ3zhpJUJDRFjN4kD1uVH8mBaMxEYbopt4RVur",
  "key13": "3AzP6T7Ky8q6x4m6aYDKJ96FpLuR8XvgbrH6vB8d3yng4puqfxnWxNtH3gAqkNUA8MTSmF3PeCUVeva1wRmc764v",
  "key14": "LAZ5ouegcrfCFsynd8m6FwUCXkhEbh6hnCv4nqThRTPZriw6vYphqKPVwkHq3ewbbycRG4huLLQDiCRJXjQWMsR",
  "key15": "Q7t2ait8hH58pPKbNjRxma3YSgrE4ub8y1S9GWD7Xcth5tKj4DUwwBYHiqGjURwv9uQ9B5y237aoqYpHo3k9R4o",
  "key16": "5uPjrM4HxDC5iK4451PixVd5YZfW9VgJDNBS4W3rxhg2Tw7xc4x9ve6Y5EZU9reYAKcwSNqbgEVtPQ5vndeub7Dw",
  "key17": "5jzf6ZViu7Vu5RDr7BLYqyVvkFzwZsG7RY1MLHKW1J3YsMxwzX4PuZMvxHi8co3o14wLp566ofE8YgpcHs8DP6bY",
  "key18": "3GLd1ZSE1ZExcti3oH38ggSwLD5Z6hH2KURHaLMysFzHJCoCToximqH3aTQHYNTHkCEDA8bQTfCoy4hj6meNyqpg",
  "key19": "5ia6Zsm1fFCYPqskk6XhjLwdE8sQDiRtA2xaRLWW2QQY3jMCwmBySFmrgTLP6BY7SZUQos84xmSNyFRPLHW8fy78",
  "key20": "3B8cbmr659oq1bfS5XvmEERZoF6h8VqSyoxfJZ4w3dpswy1gdVCTUKXHugYoJJtYx4iYzMNGmrzZsKeTYCDdH6ae",
  "key21": "4EV3D9P14p1MqQ7coRhJsZc4bQGmGXKFuzPnZrsm31q1WpFTfR9s51t8iv9aWVXGvdCkkzhWoJ8UT2eJWrNN71rj",
  "key22": "2hS1e1WEGh1Dzod1uyBJDDCcTbBysEciTriUyvzY1CB6EhVemiMFL7xBoCZqhfZdmvraTGoSo8xJAuc5yzF2JKh7",
  "key23": "4ui5cfNqY9PxWGj5A4QQXMcPZW3vE8VsJjpN16ZTgVt9gUob39ub9rc6rRWWzeS3Qf1i7SdnNeMVawtUcWoyvcFj",
  "key24": "3MhJNP4ginLy282cykBp2oxqfjs9GjtDQrQZsVT8LpoNcpcMh1gvRYPWvwQvjkzKhvyuEfn1rTjS4TE98bE3L4k4",
  "key25": "3qqoSXWbr6jQAzvCJZfD2AXgjBYQRE9jRcJoZPGswq4CeHw4FQchdv3VrhjVfC3jp395uGqP7RPDZd6texBZZPkT",
  "key26": "2rksuoeLV1yvtXdY8pqPTBbhBmYRsfe7RAdBx8ofpF2czCFb13sqo3TvaY8cr3a5UpLnktLHUFMkkLXmYJSZJx3C",
  "key27": "2Ux7yNxxMcZsUMTEdKf5WgXthyg8aEmsRcsxYr6yrRLywHGAoyqSPbG19ebM4JRm9E5vTXAahuB31nHPpZzwdCV2",
  "key28": "4dyUDejkoFr2WqQDBxByXDLhyTzTr3eLGm464d6gLNBEw4y7425pm2eXWYzhru1T4dTb1A2SBTLf48QFfbUpUGRc",
  "key29": "3MxGe2oKenG2dSSLfHWSk7p1HgFiKDe2zEBbWarXRJPW31uXkhNtEzGCwrV435kET2KyfxgyyPw1UBtSoXxcUhVt",
  "key30": "627YjsSVeiMrN3krj1164QBQH1dt6ZLZazUbKrsvmczK4941HmmWLd5aqSNZxZ1MPbWvCdm173HZeR8Lz1VVVcmo",
  "key31": "WTxGdbx92Qkyj66M48nbsZkqHE544U1zucAHZ5iRLPdB9mAdDWbjqC1GPARJ86WF9FvD4EYtY4E9K7MWFrWyZMv",
  "key32": "2s1U5ZvVE1egipkceDdQrdNR2e38FQ1Kr2z5p55uhB4ZcBrx9SfFSKaDjXAMPmf2wcCmFsXMnHLBYdMgHpUa8oPP",
  "key33": "2G8EBSQMeB5DY7uhbZho6JCwFUUaFu2tkhw14K4idy561UchmUDdrnDspfpHTdEknna1ZpL6LP1YL9DsxhEsEbus",
  "key34": "2gy2BG8sSrP2F5GgvhTCAhbckRnRA5a4ptt9ffmZi1UmEMaQowJGfKLRHfbp2Sgch3xoe8j2hRpVbRr2qc4Sj4iQ",
  "key35": "5L2ZD6Q5VJVY9nw6cGzvGcLWkpuF3oKAutxyoPW6YuPndX7YRQsWst9sXtL7SK2riFSR7NM1FCDqNzbKgkmsa8nR",
  "key36": "3eWhtQdentYqmvuGFD2ytdzhkbbbffS71wYHDwkvf4fYCHbbQNXbAEQZHQcA2qnqHoZDXdHRLrHyeKvD32bMurpm",
  "key37": "4hyeAo8XKSC3TMUDhCYhqyzJV1Js956hqjHy2oyJqDt8ryjdZtawiV8a69TazejMjAzNGv61RLwmozZrebGHAvAb",
  "key38": "4EJbymnSFQao9EZMAsv8v3yyK6yUYRB7YjT1Nm6NDduJ7UKCqzUNKLCPBWqkXVDJdfeu5vuUgp37TyCskxm7BVpo",
  "key39": "kaPhb83quL5nb6hMNx2UPfVtcpUNr1SMkzj9zBycy9mWxgfpjX5PZZSmrsjesgQQ1AHE2W8hEcCCsZYkyppwXTt",
  "key40": "3RAtG1mLfSqvSFvdFgnAVCoDc4T4VbrEq6i6FtKLHuE7oTgvj1aRnhkjy1PyH1jBiKFDRRVpk22M4jVCy1pTmmzq",
  "key41": "eGZPs6j7PrEdKziNAJoqSDCamqN4f52fKP4cFNBijqaG4neKwMeFDthxmZVr52tNTcsrhifBHrZe4b3jyQdrGwZ",
  "key42": "4kwWz8fd7YX1fTR7UdJojKstaStaAwWFRbmLmSon12fkz1Xcr9KSTVFYEG6zvJYaPg3Wtv8bTUZezrBkL2CPTsKA",
  "key43": "4UhSGHejszqdqutmTNHaFDuKB3tgvY264gZrkQrkktSghqdADyctsMFoCm8aioJQJKcSVs1g2kVsPLJcXPagaaKa",
  "key44": "vG74dthhqebGaFeSvT64KAuJTvCqFcUSjGbJKWWnaBTQkS1PgARs7HbRFHYgxvj7QMKqwMUoj2432cFUwLyv1Pi",
  "key45": "3pdpKAoeUGvaFsqgakSigHmXXZSWSxSYjx2X7pazRknzzfvP8yG9SDcB3K6u1DT9Z18t1wmUix6sKr6jgrncgBwH",
  "key46": "GnB8tGTMmUMQAn16j7fzs31tWtpz1AyooNZ4yuXfraMCw5L2KuZNcYQQFbuC2oiwtHsLsWdFgjCfWukSCS9GGfg"
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
