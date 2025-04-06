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
    "4rPexJmvBWKKmc1gGs1PdUQH7YTk3muCfo6xqB9X6CHhm3CUzm2eza7pMVKhiPQuMJTJY94GacYAJrsgovXBgaQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LqJwTPGEBosHMZnAsHPKxdxPxNjrZ2JmnQLRdbNGBhpwdWnUTi7mz6aYSg44vb4f7vni1cjyWnCCkjg5WhtjP6A",
  "key1": "38AfnMW5CaAfSVD882fMNXkqXqNgWTZZ1anA5uQ28oJCr4618CL22yyFtKAxvkSdtWJiUG3xmYMYbhuLebvEmG5C",
  "key2": "4XRUKdcaHrsPZMkb4na8vNWrCRSPy37D4kLAE4vrz24f6mnS9Y5oMiNi2wCTxKzTktUj6pVfFheYjtHrCm6xuw8A",
  "key3": "2PpvRJVZ5ad23j2EK9KcZWN5Grz2GXmz7Wkjgs4TBHiCopTPaBPcGSqU93UTqKRvtb83CwaedhREtANHysoea7Yu",
  "key4": "4matZ5Zgd7ZMkEfprLsxuAVXPrFixvs23anADGR6XbCNDGeAGAaeAgqFdAEJZK36xJDCRkMD3aTkeDzht2qY7RaY",
  "key5": "59FCrefsfzHPTRJK4hXLNMDHWSGogAjPrk2VZjY5qDATRY22PXZXK2iNkU13Ajyss3J8W8fNYaYz4t6613X73s9S",
  "key6": "5JKRXQ37cra3jGHun418dhzNzK3aRkW7cH3h5nmktnEvTZPmDknaVnPBYccN5PUKKYrbc77CetEUkBg4qyyU4TgX",
  "key7": "V45BdAzCFK4QkxZbfKuwedp9zxz4aTjgkJ1Gf8F6iX1UALdnCSA5Pe4U9sfk3RN53MYPxS5DXPCDaBLJ42C9vpL",
  "key8": "dnxMgvdSXnAr5AJJnE1srYHoYc3J3Q9jo3KfPbVVpTBptVQWLYqdqe8xsR1phexEjh7nVnTpGAQvLFCfvWoi9RV",
  "key9": "3SY3PbLkaNMGkshZP3u1n518kfAXUwmCnbbSTvZxbdkgFDnFRYWiJaBvTLf9e6MTV9xcrpj4h555Q4CsMUjatsDa",
  "key10": "BRdLruRjMVa95asMMjJFJUACg4hPVk2aaHDPHyVnSCv1QKZrCArsMrenVVcHo2yCXdSdtTMg5yKr9zmmu5AbQRY",
  "key11": "47RrRHycGyDGqAMn1o67TYVKcDRkPqhQEi9mfVmWJaLXVXYwQ2kZ7gME5MksTuDe3M3nV6a1iwm6VYy6tKkpHKRR",
  "key12": "2M1DqPB3oAD9PMJrAU6FFNexhSD1jDSbR9E9uGoaTsxQYRWmBnC9XrpKryT8J4eGiZodgqgkEpxbhe4Uh8rqq1E2",
  "key13": "2E2VTsoVZGjYtsL8HTMDcGD62PKv9zq9ECgrzGsxhbY8tFyCCQKSZ63qMLuT8E7q9VU3x1QyKBzsmF5huWidPJUC",
  "key14": "2wvcCg79REiurwfSXxmNBXhRZ3CFgfMGHoHjbGi6G77M8dfzwb2QjQdMppu91ndKjFLDXD4151xMbM6xkJJse1QH",
  "key15": "3b1JPdoAgC9qkSa9guZZiGifsHvTgy87SFR5epxhJz37hPZthq5gNxKhZUTNZwrkCm1pHbdhhozR65SZWaDtM8uu",
  "key16": "N9qTiBZtJFvuj1rGFkK5R88rZUTTV2tHn6nWxdbDthuRyAdxBMQ2FdZ9wpzWUm8myRCeZ7TDKdubPdpgY9bUNVy",
  "key17": "3vrcNCDNMfGwfBj5vHp5eitL8GzYgsAjDgB3sefUBrqo5M7tfrtVc3XnxrNnHTBvsSRhmW3BZnscJAvhK9RxvB1M",
  "key18": "2yUs5F6EU6gWuXWLem4zxvZBcCppXukWrb2eYDwxQpppQHojau8tHJT2q3DQtudEQgFDmpEXMyvCnZWkFypU8rPN",
  "key19": "3LPAoAgmE8234SR22m3wKFBnsQMUi96VukXupyezF6E7LAZwHKGAUYGDgYP4opkWTgD6vKcvvoJigsDZu5DU8W2T",
  "key20": "39Q5ogQP9MVUaA5W21LPrTYytmE9kqaFA9R7hCcSndNDir6vrLS4TpdPD1aFbvQhjoXDfv5XsN6mJ7Wr3LN3a24e",
  "key21": "3WcE7jkE58mGFbYMPWuLbq3bZWqPsLFYePhKoHCdWkB3W19wXLqzmQtmqtwB5ocQxv4qCGBretCMtSgjWjn3C2Sn",
  "key22": "pK1gC7mbfwLKLmygUopgMVZ6mcqobVetZgGRgELPaXviCyrttMLasEeaVUWtNGrpDsCS2uuadZh6Wu4LQuvfYhE",
  "key23": "Cc2Qj6bJ8gmYgeU3mGqgix5cU9mJugZvKcDMkSiLCc5cSRd6bi8FdKUZc9UsdvfeQAQ8gckUVpPAGr6rNoMQfWw",
  "key24": "ptCbnHGagiZCHVaiTgNeFTxLvx14JVje859FHraprY37XHSr9TchRjn8AxYUToXjZi1q5G5cBAdazXzvU3octyj",
  "key25": "aMotc2yNJNdLGpLQ8qkyzB1vWPV5QN6LHKuwr8r8CLNrhYrbGkfUhhgbqpfEPeHsKrZ611F9AKsWa5zLx8C62MQ",
  "key26": "4CPGULdhCWeuiwojHmd4ZjkL1zKF54Kc8HXkvhRJkB8tRtDwwCTSLKVJn8vSkj94d2P2eomNYWqpB1bJ8DejtH37",
  "key27": "4ALurGhCtkiZuujkjeT5nAQ7AKanLK49XEBeFQ5foLuTRunNA2eVevMKYjScD5ARQy4k7bfSf2REhSh7iZo974bA",
  "key28": "4buGra5xk1dF2CnAXBzqDMSxryrsv1tnqsUZPF7Dru8BK2zng3hN9RKn85oVwWx7P6cbce8dThovPZQ2NdPASYAf",
  "key29": "49fvHNkkPrcjnC51fud5Moicgake4m1QWgCnq8RxE6miUAvjgHqoQxgysfyknJ8H3fTgZXBPjYXF2VLcJfV2sbjX",
  "key30": "51APy6TaP6V1eVuNhbfwhnXi8yumeaZn5FHsmV1dc8mLbb7RoQxjYdM2DR4PL9Ydhem8NQk5QrkarPpvSecR56xN",
  "key31": "3HC1X5mYNYGwhxn6dPpoCRrxoRckV5qk9GvHXKH5NRCC8AhqSqfMt6dnq1vcoG2pVeEmZ9EDkAVVVraCDakxhVBW",
  "key32": "C1bf72jbY2MBo14YdgxAscepqq2vTR5xTvYfrS7JBc9QQHidMU5fHsVV67uPFYkUXYTu9P7LSt5QiVTwoE2d76j",
  "key33": "5CoELZNqafFh4Y5H9DyEGLgdKZZ8fer4ja9MqT9Gcr29E7tDtU2nEZSwx4M5ER5JuZy5MdPfhqohEr4eRvFyJpHo",
  "key34": "37Ze6yGEWqJgdnNCVApPKKqn6QFPgbqbxT5yi3vF3HJb4p92HLBusFMmLX2ujfHd336ssfwGA9Xm6CdeP8WRdRTh",
  "key35": "3FxEWR4xLYS3xmVM9TyLgsLePVz3VtYFrMtYhr2YeBNFnXLsdQcv8XN9qDxn8vBKp18TtVdHs4dZnN6jh7Xefte2",
  "key36": "VKyLj7d2gwSeLGZm42gy8VnTa4AstwdkPB6N9LaYn133BAoMHFaevaDLoLC1s9RiKHBDfPhULkmDLenX7SvuXCK",
  "key37": "2ftp1JJGZMDEBFqwwiHD9L9nHZnTftV3cpAFmcPxFhCYsDdzZvBRp7Lc5X76oxr11ZoBozCwGNjbSmRn8M31Rjvf",
  "key38": "64eyWFqPYMAFc1G9YdBDnRKD8Fk7zWH3Zc4DPpNnegtXRgqhCZJc6TaRSS7wKyTv6ZHsC6Ddvvi8CSwGk7SpuBSz",
  "key39": "3zyseLRJBfaKMcynvf3xkHYnPyA77fVPtxWHtM4xzrppjtvHxVqCw8sTmEWiAsHqH7jvXkzBJHeMnrmcBRkjELEq",
  "key40": "3nD9FAiERimrpMbX7rR7WCyws1miD1rnnrYmGqKf9U1vJZLnKdwBmSXdc6kGjaVVgMfzsdcdQMx4geZVL75Dinnb",
  "key41": "2Q2zmDFaFupW2oNVUprP2a7zAoxphnV7ZHjCNFYfEtnWdfwVCcxFakjr3cPTKpiCAzFarGgCjBkvp5iVURxtbp9H",
  "key42": "3MksFMerggR4PDTsewU3jf4nK5r59KNq44WrHqRBo5EV2Maod6Q5kanzmzAodFdc7W7dNaXAsKrJW74C3nZeJ6Tn",
  "key43": "3hgqwQQfv9rNKwzD4qczemKDD5dXpd162bDvK7FY3SJ27XB9V1J8SazP7u7JvhKK7oaVjTZMnzZEjaLZeoDri2Dj",
  "key44": "3LxNLNwWqYUbUPa2bsqFDWisoLeAKZodLW9wx5r3YoE6v5wzxKSnQ7CpY6eN4RYx1tvsre5uV3fk1nB6YvahHiEv"
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
