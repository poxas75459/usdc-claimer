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
    "RuwgR865gPWvoFtDw1uPBuFjUHvMZH4Lm4QNhrqR3YLb2L6KV83GCAc6eRHb1G1XgjML4TtUzWPNz18ooct6HZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tDYFp4T61ZdfYxUCuX9Vv4EKED3BgQXosXpwdCQodDKMUCQiuACYAv5a9mq2tbEMmRaxLeoxZDKJ1NPsLyUwbEp",
  "key1": "388z2QiK5jpakeG2eS2cipCFX5YsLoQsMfwD11rQkUgoMEtdWa14iushLVYXY6XmmU1E2hVZiZ5sCSV6fSrGuqwV",
  "key2": "tegFLGBdwdyHFMSC9ES5kyEpBEX9djV2zgaab1A8RZFiQks8a5ZvEZsyQmVYt4uv3EHqtcECZghdWGVhLnNJADi",
  "key3": "2J8MCiZ3Gvw4ZbHRNkTHYCK3BZuaFNtWzxLqkJCj8YRw5ee7vNkehSHUVB8BZ4pb9Bn9vbsKCNoB3qqbBSBtXzKt",
  "key4": "5wxU3XBFted3vaoFRkiy6DRFuVkoTKEE5H4tkPsNmdMRNJ8ZKD4iRjm3fAiJrusbU47i8SbBQknTCdr9Z7dDskqD",
  "key5": "5n8Lk6UBrz23JhJTrjtmwX8FARGd9MrkEPGpZqrrRdFjJXRC7sb6PvdA69UVUNdtrog1aUS2Q9iKpJSwsAmyVPxo",
  "key6": "3EsEffyDquZDGeoGzvDgx9TcYh5p2ynA4KfDjPdm21GTWDrgxbZ7TbAZKXg4hXmQyyPHqK7a9ZuuHTvkzMQpUTzR",
  "key7": "65sMaAQJ433P7qMqNGKK3jqCEQ43rcazycjvNwcqyYvKrLPuDTu1dGv5T3SEj9rtayPfbM82MbHQY8fBqDtZjgEG",
  "key8": "3sQPb4dTRDtmve3rP88SYi9oPdqRnNqw3u3H1fZsbLfR5bSNWACrG37QPZtyXL49wWtwqXxgZqRVKc1UsH8aFnoj",
  "key9": "4MfX6geP6fMJi99VKjRMPix3PrukVaj7g8741VZzkrM8nV4bEbsqbYz3Cx6Dnc1fHT6z7xS6Vk8WVHDYH98qNVS9",
  "key10": "23XWFhp86vBM8xKoozLqPjWnrpo85u6hE66AVwUtJmffn6Gub73XYrQmBWXGS7mU2RBpcR2FQqFGiWzAWWAMiXaW",
  "key11": "33kJVjWN5EcMAPeXCRdayKQjVox9hPv7rbJHzQMsLdy7QY7Ksbcp9WLUEbY7gLJQpMyU6MtKek9QcqFg7iZYsCfb",
  "key12": "3djfh7hpWMFMPW3kWCik8AbeWZHTUPN9fTh27oeF3eX2FegzxkP7fDhyYYLNyUfVYvvh2jeaX8iuymtsaDRqVnhJ",
  "key13": "31WZmo1a6fGDHBYp9AZ47saUrbCiMDFukWb9i8dF9xb2SByi33GDGwa8jieNShRpTft97J9XcTdF1giEFRj1cJT6",
  "key14": "2cRGjurBcUcdaT66n1VRYaAJPRrZm7MB1UQ7hwFL2FdiAcwJH22HFiCBkwzwsDtHD3irELJB6csFgniSgd2nUH64",
  "key15": "3jDKxNF1TsQ99h8sAKv5N867E51x1m519AvS1dZTM7oPQ3gBhtpjRH53RBx5evQcMRNPsdkCmbLEgs3iqDCJsGWv",
  "key16": "RpzT8t9eZkX19FHgMFdRQK569XfBbKZHT759Aw4chRTcPTtMTZEVY3ioN2TM18PFL2bM1p83tYBNqYinUpLUg2b",
  "key17": "3GdTVuXpB1ZfqxVqYmtwGebC5oRXrXz24hZ3yFGqexPyd6So8PpKwdVRTWpGaDWrAAVKZo1SMrmgdEEQeUczCUXk",
  "key18": "VvyZ2Gr14ZrULfvdCieAFSrCfQXPGZrs35uz644V9M9CLBH3EZ8Tskm1N3PWvjkDuSDrrjbX4dUTTRb2AEWMSwZ",
  "key19": "2JWhmt8J8tWBQCUv6C5fTYVX1UqzG29QgvgT2wFezDadqdkRUfgUzJjsPq8Z9TFuhKTBXHuF1QJZ5zHtu6uNszn1",
  "key20": "21u5Qj7YejdtixEy1ivzrfKCNEoBAMcqTBHQLSW8p49bQTg45teK4J6scY3km2xVu6Pu53wvJpiXjszbwcQxNLeq",
  "key21": "3hwRsi7QR7Uqag4d2ZbuY4JNarSBYaoxYXM74wjQN6Fn7HRdzJJA42aUY15FDh3Ers12hJReA2FWL5vX5JbxpDwS",
  "key22": "1rMcdmtyJeGLHNdN8TbmPgmVpsAyXporcfnswBawUXxM5WKFxaTfEjhLsCW4cAusp3uKtyFZd5fv2a2UFz2YVac",
  "key23": "64mhJZ8wd7dmChgGEdXVVHgXM7JYujysjfRUV1jA6AJ7KRkzz5n8ED37LwrqWWukD9srHdkC9WWEbjyq45EsG9Nr",
  "key24": "5iMdm1RAunBC54VYKAFh1J9hJZFsXUPd1eCxeq9pBwt4TEkJqk5teMFAYKsuP95YtzAePeeLYGR9XkyrYT2k2pnh",
  "key25": "2JfZtC4VNAmbMBxPMkDS6L39EXUvD4njDPizb1i47wgt8uudbq4wEg1Dhjs7wPaDVxsgRzNBErdojpdxu4KFiVdX",
  "key26": "32vwqAdJxhfqXHZWK4xRKsamTd3ASGnH2nAphasZFQqdUJcf7LZXGheVkm3GJxJXk4amrk15mqNq79XuaPfCPu7n",
  "key27": "ahf5GKzqFrsWAgQGqZwjr83hghoR4MdabZ1B2M2vxeNFnirjR4xEywKAwgGUxg7XeLBLuxTeua4LWSTSb8uomLn",
  "key28": "65FrtiMySWrPyzWraAjB4yrefDrBQLDWFktCXDvfc1BWJbfj42y9U8fjoyaqF1xtgxMvH8L5mTA8heSbsSkuNTtW",
  "key29": "JtEBr25Sj3EqrWn9h27VTTCY1LTzFyp4tmiABPvQQnZmjWB39AfLnvoCJyZhpQDH8BsLXUgM3zfRzeDUaw1CDM3",
  "key30": "4s7W4GXTJf3Bxy1Tph85Sz1TgAL4yBuf1PTYqJ169LHMaq2CpDyGHwNw2Vn3evrxvnssAeRA3ajtMm9vrH9B2JQF",
  "key31": "Cj6evm93sL6RkAKwTbKCXbbU6kXsknMmqmk4kuNeVCahnnCh49eWynKtUFcmo3vULYzcszfgFamtJi8aie2Z5dU",
  "key32": "3PoV7TEy12s9SMshu52RQfSSfGBkqz3NAGK78LhLpVpApwCN6vZkWhUCMef8vBjx2DLAvyiMAFA8J8tL78uxEz9o",
  "key33": "3YVDz5cwuGCoTypXf6UsV9ks4i6yx8Y2mw4szWJ1ztvD8QF3zzLtsgi39Zzb9hEKwoGwAwM9Tc7JK4Rx8jXru5tq",
  "key34": "5w9ezY7Nyki9FMNwM6VXBsBjsBGi7CPhCDZ3cR7gqEFrsQBXd1ZTrvpgqfvg75pZX8ySXf7oeQMGA35yeY6Vhp8G",
  "key35": "33EEFZTwB4ZfhugXd2wN2PrwNwtpHEWXabbgCe1SKgYyv3eDpBADXTyCZ3gpWuLvSUssFmfXnomEQ2NM2r5G8mpn",
  "key36": "4vwirvp2LDjL74ESxXxavhwABj9c1toDuPp4DW5qfpUm9eNN5qex3cCYZ8BTZED9G1382okLMHvNdzeJVUiGw8e4",
  "key37": "5A7GRdsk3o1WVtKY91BwfRH916fYTvg8RCrb2MCu61u2nJf1kN6mpPT5u6UwX4YGRsPxAZhbe4Drbw4MDqPPRN8r",
  "key38": "ATWL7fqG3YF2w5J3GXmp2KPx7a8BFW28ieHvK8YUXvB6e5ZA82GtysN4hCfxKw3H3XCz1d71bKS9e7LQQp5C6kh"
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
