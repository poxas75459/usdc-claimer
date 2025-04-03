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
    "5PYbMXY4m1Fwrvw3XPfmPK3YDCZEDt41PAotr9xmbYnrWiBaCPu4aDhCU2bDm31ATL6mBV3fNFgaYiuinRWKCddo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wriuKo8KfyY2VytnkB817yR5F1HepMNRVqwLdYC8PuGCbAKjTw1Uxt9dUKCfqgajWMfJQj5y4Wnp8zqMyTKfad2",
  "key1": "2sdov8ps7ooq6hvA7XpLD2YEz9qEM78H8sgyPtygcdRQdhq6swtjohyn3Vmnnkq3aaEqeiNKWKKnx9RE4Kv4954m",
  "key2": "4EdzbPcMKadGvZDNfHmVur58AQrvuPBNFjUz3DpzDuv3joN9tkMqWjgrRWxcQ1CdUGW1CbG41gPKnh8iHB6k9teS",
  "key3": "2GEDz9uczrrnE99pfpBGzCJZZWv9TA5cMG47JdYqwe8TKWWbHAgffMTg23JGDun9KyaAX3B8bKy89siPqBhVpi5c",
  "key4": "3uydEUVAeEVEgEfvjiakX1cchCHi37Ka8ZDPkBoe6n4GPdj3xBMpSKuFWmMwoSRv1CPwF6XPRCCZnftKpXxnf88d",
  "key5": "DMRNqfbtRwnuiqXonnpGrXyPayaPRf255cqWa7gcxDsMuezYJPG5CogzgJ5GY42xXs2Z57NsrTWCqFuopkeBv2e",
  "key6": "2gLhKMpoCQ1KrVvQXybRCvWfQr66JPMv4BYiSysNGTmWnfZ5W3iYrX8RLLRjzqxCFzm4xn1D6kj1KcmK3dU4MjJu",
  "key7": "2tE8oy8tgkewotSxNpYsTSr5AyPBNaHqHwaoXw21vvuDSPHn4qtiB2uLDt4WmiGf5X3NvgPDtxNo3tNNTpBh6ckP",
  "key8": "4M3f9Qn2TUiSeNgcBXXxM11KKoLKGYUhWh61wiUbaeQdZCXgv6zqnRUhejfZG4RcfmkKaQDFAAs1HhuihePNKSa2",
  "key9": "4qBj8SroTkf9j4asXmZAsHrxSHYN1uWDm8mLBUTSJaRayckK5U44iVKKqcyBSZmEn8EfNp6t1fCwxRMV7fSKmDXw",
  "key10": "4wcPqvKoNaubX3tGQBYk3JacYYCPN2qci2gRp2TsHh5PYgLLaoVkbzrCdTbbtNfZSmF5aT4UCeMYsWz8JsiT6SvD",
  "key11": "2Uc6JyaiDSq93NXrqCkXt9JbYTYM8nrhzq5wwY1c3ZEeZiCRfYjcWw38KBnWoZUxpnZQqttCugjL4dYU7PHkNfox",
  "key12": "P1UbL6N9oQUx1h8sR79U1LoTuYujwJDXeUVAxaweAb7aPQxS3YJaQNUDa5Pzj4WaUnSrFxTkFaTfLcqn2pGhHV6",
  "key13": "2WhHQhTbTVYLxiqjLB6yVceiLR5MRX5P8SMmvfrdLuGE8MDd8BYvWrZhVDUwzbc2quNAqNTD8ro5wmkpFV4vpbP1",
  "key14": "5B3adKCcyy6L29UpEeKnhzw9KRAwjDWivBuHqHgWHb2NMyUNj9jjGx8Ah2chAYzmMZ6QkhfrRqfc7iKjbgng1sEE",
  "key15": "3iEdCfMHoeC4vfFsx9CLU6xb5YTDYQhcWuCx5QFMnY2yDwpySb8d94qxD2YfjLHGFx6uH3wPKNKQQ7qSyprXZsrE",
  "key16": "3Yi1EWXbPckvvHuaofyFgW1CABVsnvKqChh3nYXnhB3u76PKUNp4kjrzgye511corHZ8EMETDPQt4rdJCjDPGHmh",
  "key17": "4Hq5K6jxsREDEXFz9hf2Hzoy5AZmDXdUYQX6kHDXfPnKqEQELCeXoNQuKjxHLQ6Hz5BPXXek9KYni4FbYH4wo6zh",
  "key18": "2drzMBFEGmCNDbufqwE4E5St7zxfeBkddcbGhzCgNXC7PTkob1gQo7fpUGbyvoTpV9NUm9HLVhTLWBqempigzvSc",
  "key19": "5a9RuMduyg1Mbw6jm7Ks696UUpLw44AersC2aMurG79UTk7oTcYtX6VxmWishFeDMZSAV35MFWBeu5pLtLAaqKYb",
  "key20": "3nTkxqkQSbEs7pSuoYvbZdCUfe39tmhpZnyRpsx8fJLxxZxnHnCuxYLjBZbb8ivXrPyBDX4TzmEZCctQ4UfdQT3z",
  "key21": "3HNRinR7EpgGZDgobJiwGHqqzen8gJAxCXPkKKWDtuBiRebEcgDubcCsyLERw4aUJd42kBahtfmXZVnwap7VEDGp",
  "key22": "521JqZLV4Z1LK31RXdRNXr5vXKnszkQaF7HsSsyg54XCvYsnVomZf5JGqDtstgmsMMUYnzxH57iFtEF15mPLrQtU",
  "key23": "2HK7UP2s4XQZyM1vSf5y4AH2AbjzhHSoAJ9x32ca2Xjy6eniw5BbHQGsRpyQZzoStfivTNDMBPi6i9i5BWWH3eHo",
  "key24": "qpnUZnxKpFmkdhzPkowvcPxzppZ5mBMhbngJbBisZSFcveeUtFKoJJCizx5prvjiMbWrQ5iW76bqnLkH3P3AqL5",
  "key25": "4EkPVtTuuAyinMh96QGAvbjE2YZ8Weqpvro7LiYcuxwZoFA5djsP4RoeCnpxV5ePCKSLLgYS6TJaWDbizpFYFdFQ",
  "key26": "4mg6zU3SZnPTuwWRoMXXnmK5wz3RCcf39C8WZSSVyKMmqocmdJuNgbXEXrtyQJccMPKYMiaWijoS8pwA1H5s3fZ4",
  "key27": "Zze37YRZyoGw5vAtZLwo6vxhkJWs4YDcoBq2GBMzLnVr2LfnXt9wkEAZATRx1kyQKaZv64dCXqVRefHPav3X4mf",
  "key28": "5QK9Sv985BFjx8UpwHXMDLXThK3tiZFRVaG5dvSNGMENFQk4nefo8t9bNLAAaSbTGb9RvS2jDDvGBw8XSoENC4vf",
  "key29": "3aisVupTNFjCK32uKQA7SNS2S117BtrmF8ick8egExNo65RMS1rvnTiPQ1d1EKVvL5h766bFZXTWvPwZokT1nxqW",
  "key30": "36uXAX6nsZELgeQwMo9eCFRsZSUgbiCMkTw8ZAwvCu8LTuye5xyoxNQfDQcFtRd2vJJTKbjMESCcFQ82o8PW43TY",
  "key31": "RL5Ryq6bRPDXAtHMpX9KibRKuTSf9XZgfxwdgjA9mMo48474j7iit8ombCVgn611kJgta3x71b8GQ2Gy2e39nSA",
  "key32": "4Qv57wehygW7vHE46fFbLD6UQCxD3psArNAPe5MULPHiWE4GYa19fqFtrvweY4yv9LkkM2ucX4kawLnmZtFqTDBm",
  "key33": "3fcFYg1E1jiZ32QFa4VaRa42ZBMhhALzZ9CpXM3Epo4DXD4bs5W2gTJge9hypyCeFoNVfCxkLgbsjfta4yeFk1Sz",
  "key34": "4LS5wN1GzPuktvWHgokoxwfbMRdL9EmLbXcSnJ8ejZYZpn7rLoqGJ2Gsq7HELUAnugta6UexW2wbHqvvwTp2dxgu",
  "key35": "SV63hHjqCSBoFGdCDktMzz2fVuaTJKBDVpsMX6MGB1YwreQf3F1KYh5EhHcHBNWX9cXASwqvDLFez8ytWfgKdcG",
  "key36": "3yhZGXTzjg2XJ4Bve95nY89pLSKGP2idpc9R3bRfueqjPmkgD5f9qinw9oMWVv8ioAVeDFtkNa2QDCXvMPjyX2RC",
  "key37": "4Rubie86BXrauEAHHACMPncHgnP5fiPpeYB8qhs9vsNrf7SVkoRH5Ymu8SQFM9FoRXBcY5M3no6izpZ8ZVwSfoGi",
  "key38": "3McEdsYeu9upRHnih1UUgXK8y4efBAiiC7qCh8tKvrUkYD5KL9mwGD5G67wndvE2frESiiXDmqTRFRYQfmu4eCqW",
  "key39": "36DgapS3ZiScxWfNSZ1CaTVKj7xi7QNmBbDvSuVfXtAFp1BXAJ7BtsEtSYSM5j8dL95odFE5FXuZXLDEESejsggT",
  "key40": "4rHHLzbQNvavMxRr3xJrwy1edpDhQVTz4fUChNoQeGUZ3771DAMFtmkRuuRk9DbricpYvyJj6kDBoHhXpoZqqyM9",
  "key41": "33spePRmoJMi6c8nYu1MaWrzMN8YN2tEnLnBtSGxzFKXUZBD1wULf1K8zoZK6n5aKNQyfyJVhAT5DdTKs7RdewZY",
  "key42": "2qoe1H8NASyqAouenT7d3BCxx6tbB98a7H2vqC3A8j7xxsjaNymNX5qaG7f4MZnFTiMNmuNx4KArmFBcv9KB4rwq",
  "key43": "zBbKiFMBNqoR3j6hzVot1mseJu14q1eE7DyykhppjtSmDRLiNYWfuvhX8RH52D4xRew5TsDTj3vQmF5GhFgTkrk",
  "key44": "5rwW9LdrfrfmZLLigc1tfTdeBvNRqB9EDWoY9hsh6SLEfRhQDpr2Wmrbk83sEaf9mDiWzfy2HhvU5rijxZSN686",
  "key45": "2qNkJdxLvytCKcC4HTsMvqzXhxC88WZ7ewydNZnTwpCHyhd4VEafBn4cGnRBvFYZymiMh6j7dhhFbdBVsDCP2wAm",
  "key46": "3zKx6yNfxdAkGpQ9Y3teK58vSCEqwSmXpZndv8pGP7upEcwheaLBGGx5dhx61xYuF2tf8nhCkVWg5J4ZQ3364W7F",
  "key47": "daYX7UgW8STQ6PjoGCKFRx68jK2n9oR6moc3dqXMcva2sGGfQTi7BXZsYQ1NMtPDqSDbSX6M3Tbzi35VxuSB7h7",
  "key48": "5K6NWqfg1a6C429e3XyWh7ZgdKTChBtMkbXZLofacAvSLtYL4x6fBq28eB2CNpPH1gmnSx8GKDakKXXZjv9aiowu"
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
