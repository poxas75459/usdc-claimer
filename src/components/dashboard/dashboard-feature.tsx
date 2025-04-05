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
    "5Qj2Ub6eg216pe716j6mdemv7kEcRzAGxCA5qAcMXPyjgaT2hdFV9aUYZ6kV16nyHSrQyu5gvWpdKgQocd5qpcsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SXjkDJ9GBekUnxX4sRQkk8RNVcASP755EKfz9kTodfgxz3niNj8BBRKGB31Bq7CVzKG9dMpzHcQbcgsjxAN44Di",
  "key1": "3TzpCMZy3xJrMj5RUxo1XcjwnXeYq8iXrvi89fHia2uBkXjJYyw9BhFWEvdjC4DygJQUKz2wR3RFdRv15yfHKdUN",
  "key2": "92JaebUzbwFkCAbTNdZwqLEqfWKDtTRcD5MRvD276cizcqBcgEN6F1kverA7sWUEME2Yms9YvsRXG73FBnrdsc8",
  "key3": "HkbGC1uVYCYS74Nbrb8vdq5K1KKztB6VWHkbDDVN6uPYCn45oHRARKqbySyGDtZZscnvPT1pAmG1LQDcTDodszP",
  "key4": "4GVGqALfDBaBd2hgW7ABotTmW5aVaZWV46pBU1KhfwpvcZGBHdKr3okHaUPef66ReARrJgcc4Qt6NgsXTpJMigjm",
  "key5": "265LNepjErYmFFz29zxYzb2SntbhQqDbzZcSC4wZ8Q7Ndg1PVp6ssaHSr8ad3wbm2i4Sb7fDb5f8szyG5GjQ2fva",
  "key6": "yEn7qpvXmr6L6D8MzGNPr47Y4tykerWUYLTrQHSsqkSc7w9sTM68AdpVA9So2REwasCBCeWch88Yk4HMXRJoP2n",
  "key7": "5sbx8B7rGmUGWe3cutME1bmA1ChLgLGHQA78ibzgR4C4KW9SRWEtHLvQX7tTveKMSZV71xD9JtHXwf8pNGYXe46J",
  "key8": "2AXn16SgMgwJASWtRqrm2pctTgGPT9dVo9UmUG5vR4VmhejC3cSyjsUav5fFpK4eNigj4euctHGQ6c3wDJfeozj4",
  "key9": "4AKJBMTNBurxFuQXeRS3LDN6G2FaRXkTG68XbqTHDX47xZTwpZen1GGFuRGCPFdx6b4NHXRM1aKE2p1rAB4z1YS",
  "key10": "5NMXaudCtujWLD6noatLhjShHXfHKtTvqajbGN6rXNTG5GYNV8ZR75n7hvQNk5TWpUX6adtJqi2GEdZjRVyxb2US",
  "key11": "3UuwA7SjF9vLMyyu8SBPFSzrtwyPEX4VYTuBLaZBCMzrG8Zh8UeTauAZtETHdqskneZPfHX259nTPYMyG6zKfzmp",
  "key12": "2F9MdhtRSQdfdcG4Yn8wGKJ9SatbFdpgULPzmo2RT9gKMeZ9gMyqcxpYWHrHUqKJmGjMREo2dRake9HtHdx3gBNd",
  "key13": "2vYEXmuvHtddDyBPN6HUN7VitJVWyV4CVHZiZH65Mn9uosnfjzqL9yEbqdpSsiG5SWEDrs53r3btLg2M1Vk68WAx",
  "key14": "4nTh3j77DV7MjsNLBGRhW5KPhhCiUn6ayWS4QfpakPEvmGdiwUG6kvdgFi8KcZ7xeKFANLTRbN5xgnsDbYJKEy1v",
  "key15": "4uVm17d4PCcjqeZrEH2UQepSJq6hFbKePwUvqdt1qKqz1BjgCaYHG7CvZhN8T6TqBq7qRq6tTbwtKejRXrTygWq7",
  "key16": "2P6DnNfRnUFtxz5s8x2mceqiRkxbateUUyf7ECBFTPt5MV18TMJJLtMQfkRCjEMGT7yytroMYWQ2cYJeXDDYqYaA",
  "key17": "3stKEpJuNFRjdzCW74wznUWCdaZPCb7jSXnx3XrnWwHtB2msCjexyX4s2gRL9esyzEQSC4S3qf7QA2RTpa66uqpU",
  "key18": "5758hu6tvbcTbSQW6YmzugR82kuLibMg4rhyKA4XoA475Zir48HJYCBmxsgJCywt9Z3wgrqqBqhehThe1jedUQUX",
  "key19": "2ZotqVTQ5b4F48kdHf4aALm6GnzAchLXKFCdh6CCMUn73vbFYibHCiTskYLwELc5WB4Nhf7ZeEwf4wgRpeVecwjz",
  "key20": "5bwdU4EV4yJU8QEShPKp8hTcCSzKdwsuDHfAFrDb2jZYLyZV6ejsRhis2j94Zj3bft3jwBb7cWVeFzWqGLfHj5b3",
  "key21": "SK9NPB4KXnFxR4XZH8wo8Wti4m4UenCCaqSjbLED5pTviwcrAZS4xDsFjQ88j1B5v4dXBY5NjeB4wSmmwiU6sLd",
  "key22": "3Jw4m1zrCixtwUALjsbBJSj15wgt6ezprtFZXuTwQMKBgxB1bZVi6roghEM8gumTczs65w5JEsZ8tjgqQia47eko",
  "key23": "5x3Vahwz2w78sgvRSJZkYJ3qWrjBKQ1AxqkR7CsZVNnFM2TKRyyR6YLt5ioUoGMLJLLC4QpjEb53B5HjphexyGYq",
  "key24": "z8G8dyezws6M4EPRnwtjAJejtSQD7sc5yW1Yup4xqKZdsCvSPH31bN3ugqhJtSfTkC6d6Tj3hJVhD3MvFATrpfu",
  "key25": "2CVAXbqwdLgsGb4pdSiEve9G589DZcEL8ByeK4vpEL1nCAMfw7851zr4dAKuYvteLgAjmW6qdyxKJckDAQMshKmw",
  "key26": "2D6Y5hgrPmNo8DgfCqQn6mW433jVz1Dr9XRaP13xGCFmcNnB8mvJYe7z2aGBNNneYUwgvhitfEdhRSXA3LWNGfE8",
  "key27": "4cgFRRitnUx4MyX5Ftnmg83M48fuhgaVa1xKn7sm8wUPCvUWHVaUJYRMRcCg88JUskViPb52SfW3PYBX4Ze4SKgJ",
  "key28": "5PkZgW3WBDLkKirZUWHxCnfNsiuQgWdpVf4dJEHxX7rphLNpYtUMhHrQM119mC8JiTNwutcN56GdCC1W3dbbf4Nd",
  "key29": "3Q81Gt7ZHHbzekpkF91Twtwm38gcUmCJhh86FiXWH67zy57YvVXvFmr18vavRMS9cLDR8h4egMBryrCXewvg7V2x",
  "key30": "3YtRs74U1JFS9w8gFFNkW1fwP5tvgqys3U8ECY4pVk4P6Mi1D5GHjh4MCmGevgs5yyZmmifGQ6CGwRP7W7hcmBqM",
  "key31": "4Po5a2ze54Eqt3qQv8dF1AEPYbu7hQTkHxYG3YEVtYpbESBbyPo2kg5ceFjAft3NTe5VpuxPKwZf6sKAbum1JFm1",
  "key32": "67BUaRhYyuDf7FLPcHWakR3EKar7HkyrgPQMnthHmTbcsHKrxarrfNrvji8wqHmvzkQNbQdefxxBvFmRBQoShrGw",
  "key33": "29qoWLW3AfsVgvfvV3ZjPwoJfbW3gf4bcaVdynr7FNNpoE5R6fvdnwbWbP6z8HrKhU1qQVACeXNRKVdRKDjr2Dwx",
  "key34": "56dbiMk6HM9P7C2BEgd78Y4LScCsgFCBZVVgzMW6VYX9e1wZvKGaFDUZfP5RqLSMx7EtL9Bcw9juCajFMxHWSUww",
  "key35": "5wnhgjEf4DSfB8d8bRZWX6Nyi8LoaYtK9pXvPLD1yzJZF1shCYBH3HLL5CApamwYG7Qopp2xz3ZSFYnh5Apx5Uar",
  "key36": "36oXpNpx2u62fcDJ9WdQj5VSX6baWG9ZyqHZQnKJF9ZymnQLEHPApSF7nAVvdcZSmbFUJ9eAByhRLhysx4cq2KZB",
  "key37": "2iMY468tLQSLD9sbBuvRDf8Atda6LiQmaFdFHhbecqDwRWKDEYLNaQNRUNhSBv73Qzj9cFRdgWKesUCR3BYpPKpj",
  "key38": "5mpw85HFRkU2BuzGi77oxSoWdm7BjWPh46MMWf7PCBywWy9WxtMq6oCSJhDzV8mphPioUi8UaZmjMMm2xBmi3pkt",
  "key39": "4aZ6WjBRS6GtUUgY5Gm8ZC2My3C1WkNTug17cdV4yqBs1XkFEDWby4aFtHZ5DN9BCZhiLZyKydHTinQK9zUQMHgk",
  "key40": "3YWZGAZDREMhUMvY6Qt1b4G8Ks33cUuH2yQUGuKx7VUp4wZfTJzvKqMEDiecArW3FFjfTXrUDSqGKgjMbJ3GrrQ",
  "key41": "3iEi5YPoZWtuK6EJh2v7c8SjzaTVghbhWPKoLMZ8GuTBEfSDPEpyC4B6nBMtXwmi4JYoQd8aHSKCoz6iS7HX5Cem",
  "key42": "4kjvgfaxxBgYD8RNfXVdGGihhrkPHoiatBSAmsAjMHGnABa1127hFiubfRYMWGKM6fSWJGHErR3W86d5WiPGWHXC"
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
