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
    "5brdLmU5uK6Mf5fJYHTWTyn4ghYacfs9LQs7GSZRAhUXJWUkbt2iBS6ddDFVxkEnu2sVsA2QxjPn6Xr7WTb4B2Kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ctbNwuGcdeDJ5hD7RiFKAYRDL9YquHXXZLtdpfK3sYPCuGqqDPNeELvqrc7QoysuVCost47WqewRZEN93wJ6mKF",
  "key1": "3iSk1MApAGMN6xVzpdM17JEjBBMPHAZ3aCfVE3GSK2aAEDrBTZYLeDA2ARwFXfx9YxaxvBE99RFZQGdXT8ME9VfR",
  "key2": "opdkKopVqY8H45pq6ki2CQY8HKvRuUo8gTRm8DJo1Pd1FM5VrsW7NLRB4siLvT8VWuL5P9LJAjRemQVvBjiWTCZ",
  "key3": "292GsXg8XkDVTbf7fnnonUqJmBP5nXkfRRTULbWFSTgTSGMeeo7GPdkDb1L9NswPa6XLNE77mHx6DDWJXKGDQmwy",
  "key4": "Ug4S5qjRCKafb3XrJ9gzZH85iUVRB5ZroiPDDmdYD91aoAEt3knswBQRKigyMrQ8TGfBoNHRGkKsc5fTpHebgfA",
  "key5": "2MMKnwfcbYzfzdrB5zdbWVUHyWJMg2Fyycan4CPNdHTBTD3pZDQcJRzzJfwfBjS4Prui93ULDxtAiz3ED2vN9Kkx",
  "key6": "4aJBDxMsc2ny56CjbLTk4sHu9a4KPqY1ur23Nbh3dYpaE8CbBSx6EgFFcdRu4FFkw7MVaeB4wafNZSPDGJ6Ad9k9",
  "key7": "2kCSU2XobnqNkmXVQtTYUrk9aNmKYUcmMdcjFoQ9yhmXei4Z437sM89Uohdt9qv9XYEkfHPoSzRm4QaUrXcqFGe8",
  "key8": "2owFAshzRWTyYErNyz3BmLX2xpP4SauTHgNpbViG4wqj24ekFmG1TjeavFooQYkAU2wAMrUDSs9Fm2ycQheR2hk9",
  "key9": "3pU6dFu46cczbSDW6K2vjWzLHKWo5pFamNbHfynv4DisRXP3zjkaPLBzHQsD5Dgd3o5ZV8qRJw1KAVzxTDFqxRVC",
  "key10": "3HXAu64nciqBZtUgy7u49ikh1FdcrzEHJiJ9DCNmHcj9Pdx6PTCbXsvHQsVYrjkMxXGFa2DifEnmJsadQRzjvAj3",
  "key11": "65XiYqvCV4omoAKYoTVYnfvauchLju6DqvVxtLTHzr75G1zBPGCiru2hRQTCFGTsjS9XkDAGHMQLzjSNzLG7Svjq",
  "key12": "jxzfEJpkRuJE3qrno49cZgm2sYTyWP4Vm2Sz8UAvuWncoh9fnepEe6rioV891ioK285GKgkVV9WVc4MRnpZTpca",
  "key13": "2Ubo1SRkhSVJdnMVuY1zLoKbsTL849K6877mT1kMKs76mi6yim5EqjHD53veuGGoZh3QezVmEvAjmUe6aCWwciNH",
  "key14": "5AKiHrsYzP7YDaf2WQsCQ4289kYPmP2PJpxfhknYKWvgM4Evf1ieSLmumay3BM8cq1qEKZ7B3mBc6KWEKrnhsp2J",
  "key15": "5ooZBEZ1YTfMFU4GHWbCv4QaKBMoiUprS2XKDLrH82XnUw97yRTtyxSQfiT2RoMeP7GDRVhiHoskN8vewTpurEZq",
  "key16": "32MwRKLxWvNVgsDNUwgJvmaHaMSDSGkdF5bYfQFX6Zzg6VXTz1ShA4gapPTYcRUomyW94En4x24HDDrPhHqzMDVz",
  "key17": "3qMyYzq7aYR6JhFrrGU2dsmT4MAHcNxEYWhsqtEpBuTJjHmbVgEXAeD2j4tMutPRLQSzdrZxwrBsQrNBEb5g9pxN",
  "key18": "33UWXV5rhSwqEdvs9UUSbH7E3mhSKQLjoEnd4MeThaVSyvFuDFgA69TWmMuH1h7Q5Zbt7zArjfXD9zHzZQ2ZzChh",
  "key19": "3obof9ZBkuF8LpdSt84xeST9xCuM2pm2erbiYoKoa9mYwkm5iPjHDPdcqsN18vmFMsHRAd41fcnufCdM9Qtu9owD",
  "key20": "sQDw5Pkmrcg3rEf44RF7unhoTTPXbX5cJesYcNwMRgtRbwsfe39ioDv8YH4PmJC3sc1xM3f2XTqQdMdvkLfxzQs",
  "key21": "Sw8uZR9xsQQoVjceKrK63XM7P32adLdfGPgQRJZkoay6uPZBqwoXznc7fDNuEiBzPodUctQpn9rRCzLU3Pm8TPe",
  "key22": "rKyZsy1ULycSAFEcN5LNNdv3bhH6zpJqrPCM3eQqxP7fC17k39wGu5NsE7wP3mvY9q3E3H35spANEXpKvdpPZB5",
  "key23": "5oNsEG2GLNZBQWGSnjpCGHMjoijLKxqrfnbm1mfWSkx8FFHnjuHrm36vR5TMSj1EdiCg2Go4CrHzYsDDSs4X6sK7",
  "key24": "5rj36PLbwisTm8EPGFzFHg6hsGhZGiKF4DzSdQ9FpBabMJniifhyyooHaZWD6bdeRrgpDfsb7X5VREy2uLoLXnmA",
  "key25": "4ysi3g94xarvSgJAN97A7L4xDALfYzKmzaZPKWQnniHrHPSFg1tUhLMt4RbnTmAduYUk9CHVWH982Bwazj4GNra4",
  "key26": "63FwXbeU9p9qvSUfV2aCEzT1EDiSnrSULdRcaA9zZdaiDtMaUbQTj7vMaonna8QKDLYmSVqDkFF8dhumcQJVYQqM",
  "key27": "4d8Kj2AtLLjBFP3AnkVgp1YEqG1DkfeqRS1gXn6mPAJ9LKKk352ZBvLUn1demPPtfHWy1EizNP2XC4AwswjuiDx6",
  "key28": "21D8nNqSZTW97KWqQkLqDoytxWUbdQ2vc5fmf2E74aFbnsZ2Pz4shJJsguu45queTMzap8yY1LfPKNryxtsiNoTz",
  "key29": "5Nxgtjv7K3SXz2zyjSY8zM77cucVkP5ugsWewE7zgtYqcqqvV8BP8d24gp6pkeiFKoRiAP772z3jb7ES4iYHEPbM",
  "key30": "3jxdbRN8SByAiQv3weDqTMQSC3XsFdLWFj7HQmmMkn9LtdjZUEVfVNV9xTo5kEtAu9rchaGjzQXrksgSE6QNu8tA",
  "key31": "2mv9aGni3zSP44FDNU8oFPftzPyS9wtB9Xp5tiDWuQP3FeUpHzKAHdXiUpbg15bbJ816CqdCq2KizFj54kxcJr97",
  "key32": "449ATiCwEw6HDiioH4HG57UQMwpDVJp35BFVqK36AScS2955JKBJ4FGDVy31FHLAisrd5yCguKhE7X3U5rcemwzF",
  "key33": "cJChKVKJPWRXC6kgJ7XWSv77y6Rhhmc7Wcrbx7vmBzG43RvPtuVkjy6asJ5dNMM5YLqiFmLnvc9bZPh8gUKMZom",
  "key34": "2NkkQ6aZEjppDkKXBdH9Tzj9CGYPpWa6eHEYzejzhzyJBFY2waJCwJ96twr8nue3Kz6ZDRsBjznWFGuR4Hc34Bvf",
  "key35": "3QaUSVtVqi6dsk2gDydsoJ8soFtS4RcdDL8rWegLtNKYgCt62VnRwNR35UPfC1ZE4JBkP7XiAgVdBXrm1Ei17fkj",
  "key36": "4nmhkW8yzB5ehPMirB8JSkXmYAfYPnyUzXQEKhpHdoQfcNsmi345jwqrx14tqV9uajUP9Ye9cJzQL528qwTtfeRv",
  "key37": "2r7ueTfXZmAQadQJFnuFd36mFpqNd5TMF2mCS7FnduKq4ntyMQnHyLLEpGTpxLoKzpkLgxGUHB5DnLkxF9SauAMG"
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
