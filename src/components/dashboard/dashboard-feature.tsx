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
    "27sYdaP7kKMP6eLfC8JA3PfxKjDf8PppSyqoo52dxLqyZfLU1Si5hCn62DqgHgAoTZwhQWSQZrESnwqoWWEsLBtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EsLRkoGziwUewfYcQ1cTo3snxLW9NVwsc4BDD7vu1KkdqvhCbhV8aiArJcAq15uhYt2BRswYPziJG7bG3ScDLQJ",
  "key1": "xZm6h3GivaMURrubweZnQ1CdgLuT9Wi2pFq4LHv7J3p52oXhY9qtKNubXmsaXGsys1mtxRMJAj3mJeGKnRSeutE",
  "key2": "3K22jXRUn4p4TVaDU9XZc1V45dHAjKL4wDj1y76xaM2dcUZdsNzKh125JZacoyMgXCxxgrVL46ac7nUE5MKp7Pqw",
  "key3": "RdSmYKCTotCA2eTHTDqmCYSs1Jf1svbvVMrweNDupM7KFfUfWW6oTV994wUFZzUe4HpNkgkycR25bShaeyw2byH",
  "key4": "5CLzCn8sbvkrQj6TnQ8TwR9qXJSMNBBiFzbiVwHjPbfrHXFDm6WAuUiykFHjwCeEid2HVp9WpKGk4Pj3jDRTQkwn",
  "key5": "4gGVEbMGyUEMHiKiSynRMuFJe1B4nayD7mU2JXmaiBPwAZghoTgAmjDkJRNt3hsB7WFwDJBAiPf3TEnyLUsEedpL",
  "key6": "ZsMKWFwxeMkixqtYr4uoqWB9Xfd6ZsdtzEu9CffGzbQgYb1HEmyNtVHbWsgbpkHWMFcFabcvuJXVbZa31ndggaF",
  "key7": "2fC3RrbdPERUxTKNjn7XPrbZbdJdaD3zTcm2oa3oBqi6rU1cupshUxrpfcu5wXf76vkA5kjMpwwSfHXWsHngvFUC",
  "key8": "3dWNW44k872cSNYwJ67SXsUBL1c9WJUZ6zFfW64xa6DrdN3LF45z29g2v1YFRTbe2FfiTzvPwt17or75wrZkw9L2",
  "key9": "3D25NRUWF7vvdw2kwr6wZR8k8oDueb5DFeYY61rDgU5ju5chxHsXSoVPabjNuDgEJhND76QUcefFn6YQWTi1watr",
  "key10": "2AHqWiUDigJsgh17dToyqEsi1v2gXcJER3TPg6B5CSAkUHUcA1bJEgEEea4TjoX8y8MSr3zCVZi4WLh3AjmLf5Bb",
  "key11": "394iz7LEPrumnCTP66cXTeRmZmpLrfnFq3JBCQqDM4DC6QNiAJ3Ypmgz6fzJxbAL4JMT2DCowdhvmjWsBLgEERAG",
  "key12": "3UshxFQqGiZfuyKd74oJQY7LF3fK1xpJJnz5HMMwyJ9WTcuWoDo8TXbEoTXfftvFNWkh5S7KRMiAsqKH7zer73GX",
  "key13": "3KL2pkdGzCcdq6YD1tnzExh8n5AnBVgNfQUpFNwmiwWpah2UGzLT7PZQMKc3k3x3ooyiWk7xT7sd7JL6CzeDE6Ht",
  "key14": "2zSLcjonn7pFvjEG4EBCLLNbaP1mG1kJHS91inWGF6bEgu9WN2UjGMgjmbmvb3jyrCE6Zt2Y3sN1fgR4pQCrfG7b",
  "key15": "4E6iUPVT9swArMVRuiwtktq1CTDiDm39qngGYbXynVWVyKnSTv5F5CM5BTHPaZmBuh6Hdi6LWQkY5dT4xxZBaQ5P",
  "key16": "2o22gPZsNmCQwBpCEG5W15ujUuUH4tFmQVEjSttpCS6Q3AtSWhqhwkYAetCrqrGcyLaqaSbAPzyHms8NPeE9fsyG",
  "key17": "3UjEqrX8kiqvK8wa6WH7762JorztgGsUfL7w2hy8or9fnfk24imEipG1vQF16sHirwkJQZcePbeFfQeLEdzfA813",
  "key18": "2FYBoJgJy4pjT3CBYk25Hax77VKRqNupXgsGaX4MHL2bc8eSBYqCM4AYFsgSofNUxFdpowKJM6WTvb69mgViSRcH",
  "key19": "ziGJRWMtCekbHHGeg4Mx1G5RiccoRq5Etdm7NQ7ZMumZyMjRg8SQ4VVU5qBJAeutXKs1AU2vxsvXB9wovbfScMA",
  "key20": "3RLuqbcgsL57xL9D7pHFHX87FuWpV1pwpSF2Rk38oubSSscNr2wJGQBk2V3UqcoMB3bcSzfPf6q4nvCT3bochmNj",
  "key21": "2cLjyYETic3fiYreDvaRyiP2BpnUYCzgcC2oDXkrEncvic93r4AJvzhVgA3AsHG6fkF71ACjr1YZsqJha7B2QG33",
  "key22": "5K1yF2dARXPXbLruv2Ni72sBNQrmbeawxJbGbMR7uXs6yyhE4Xgtz1fJGFoeHAMu56zdiWHayMdnSp32zHS7oHMR",
  "key23": "39ucYzmhmft8AdEkMovsGz66mvsGHgqWF2qaxsf1rVATbM8tydRyhEAWnEjq2ukV57gji8p8ErW2PuM7YFYsQHYP",
  "key24": "2BvXJikbPqKrnbwyQYhfea2ZHDxacMSXD1YucvACxcC9HP7njB2jvixYhfEzFriJtUpxeLn8BK9NEzDQwTVAqdQo",
  "key25": "5HN3iFyUfj2YxUGH81eb9ctnbWQteiSXAbjfDGH8iMX3mmf7M4by4hJXbDvaMx7EDM2ATZX3zJ5V43i6guXnX796",
  "key26": "5Qwg6sKDB6YkX2wnb38emRFn5B1H3GDLSpHjUWym1YAn9RXhxGTnZGZi2LrhhiQNbgji8yJ1HxPPMxJzAoBdpUWB",
  "key27": "3M81TBjQVzuQ9tMoadUtDjJxpCBTUdL89EwUjhubupgqkcvZurLvwFMLtJ1K7ZNhZqjH2GHJ7rxNomJAzhuZEPQd",
  "key28": "5zWXeRhSHPwFPqhuV1pjZ4mbHqszVfSwpdQ2ByYnHxCMDtWhtapYvJ9sroTSdWnpYjFtGUeRnfetquKiPBbQqu16",
  "key29": "3NCsUBPxQchFQzn6JANyDE7Wc2V2hFso83V9kvw7k5AEJxFchHi4AvVbfkDyUR58sk8AGwuE9tKzavsqVJSJ26he",
  "key30": "2p4nSW2Aej4eVHuzuBG8S6sf6LnNtkNBHayaX7wkvZRM3mUayjctT99ufQEmk86spvdEcUXaQRtVmogrYrmKKQgX",
  "key31": "3yxW7MR25ssz2MNWzhMpDDNCCckQci4ouYWQ35Ct4om2cuqeDeBg3sAyX5pncQwTGNZ1Db8HaAJgqVvoVXD7Gcua",
  "key32": "2jbFfXzYJRnfLYTkmGX6fFSp58niwG5LUu7gW36Tb7p8e5DdGNryoVy9f4AwrLoNQAdUcPBa9qZgbACzfu7H22bX",
  "key33": "4VDMaMZVijAVwAkY2VNHsoMw2desyrntniJNNo4CQ7MnDmfAaNXxTFHb5dHEDxg4mgffKASHQsNpmiMVYxozVUc1",
  "key34": "awAS8jG3w7QEYTPnYnth97qhQXGAajHqpBHrQtyDjDUjGtRgcFpntuMvJuUqNtSFPz8VNrNeby5mtKKYb3QcVge",
  "key35": "3RsE8rjrB1mCkGcs2qLevsqZoiPeaZ3ytbbmwpBBN1CVy6xbvdtSy7xbdK1Wywbq5Ab3WLFD1vVcjccWscnpLZL"
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
