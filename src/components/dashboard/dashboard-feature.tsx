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
    "5FHXfsAYhLwUaWc9hV2tKPhS2tSzzXP9r954v49cB25oGbzNZaFkEH4FJGeVmb8gPL4oTvCJ27HD4fqZZjiXLgRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jn3JYDJ2hzJXPaFBezRFa1pvpG6psCbnZnW18j1C5Dt2XQSN3ejVkFbibCEFn4LbTPG7sTPmneA9Yw9gtmQs9G6",
  "key1": "4jon1kER9jFpXvoUEbiopTV6QbAp7cux2xnpas9EmjYC1ZTKea188RUtqUfYX9WXYoq6YmjeB7aWYeu2joF5kG6D",
  "key2": "3UJFzfLzVDLh7xqkPtSiq5pd78ECPzBdLdfsAC8NqRt4eN8TR6mERBMmRxYqt24FtGUL996EXAnX9PT8crBEtdHm",
  "key3": "fxxsHWMyYmXHBeTdP7NGukoXPH96q3xjbWPyaBp7krmKKMcYTUZu7FsZWMHUc5z6CJFhgsYfEbUfJdtrauaUToH",
  "key4": "5rAsFkBu8LQinscGJaNrMLRDqTKTwYGQzgaeUwGd1KNUsNMU7JfxNadxoqkJDE2NyBjNjGXHAo5QSmEaxAnoDafZ",
  "key5": "3AtcTGucLj3kTwwMfTXrNxoMUQHCBzmmAQ5XjAgUavyp54aqUSsftFWWf8tbyYPXLmhn4iq3EdsWjgyMAseJ5wW2",
  "key6": "W1RQzQYGND3MkMRvWy89RZ7b9nbc2K7x5TSs6VUJnjJNWwrYd7sLCRzXLNh8BZQKsqhXQkABjVk52JJkxGfV6fq",
  "key7": "37g3Sc7QACpopnT9CS5dSXEysw22Ne73ZFN1Pje4KiNoZRC5ixnU2UD1PizrGT4fQsjHM1wJPdsVvop5CXHVZbKk",
  "key8": "AKNhtmrxva6L4bpJ1pNVmjjyTovSXRHerGSf7CXEjLDcxxeX381bzVtbT8mJxskuFUQ2491rqdYxmyWhzGaGWW4",
  "key9": "YCv4raT8g8FPMyJhRqnbFTrjv611qsLRCfpohQokca3zRBtiaVxojbfAkdAMRq1TpAHmUN4Bb9GBJHX15hqSE9C",
  "key10": "2EQz4wyrGMgRyrz1KwhbnpjkU1mGYqzVAyeyVVSruV54SixFYBiGBwHCp8ehMay1MiQCZ9xj1UzG57eatw1inbFp",
  "key11": "67Wujeg7daAZ5nAN6q71SyeYKttwNUXbkbzUsr22xmNx2S2yHx57oexnTxqomCUnnmRDoeMcVgMKffVCYzWi9h8N",
  "key12": "2SpD8ydMyFVnHLNTe6evgrGBdyFFG6AwBTYQENAFZxLApmQeUHdvyMbGHnN7aFzAidzxx28sTdKDNaTBGi6TdwcS",
  "key13": "5YLk88xGr1wTSMs1EAx8Zj2BjZUZCV1pibS8FuzAAPcfh4k7Cu6qg3uN8ZAAotRyAtQsLXTDGX57uLAA2osqs5TT",
  "key14": "5ng9PBzTqMfwJ719GsvbyquY9s5Yb6SVskkRhdi5qzFCF8kuqeUyHwygEd1ggirybDX6zdQvo5U9n8VE8N6kR6EA",
  "key15": "2dVtPQm2sLn1wbqQ5wjxqFrs62i2Ytbo4UomZhPeY7JMsCebTjjAGzN8sywvZTykx1aAkrq3MxPsPbUsDVbZvYeL",
  "key16": "5bgj5KKTWy3rBt1hc4T1pAocFCaJRtuXqhYp3u2STqj6k1bmYjmjQFAccRy2oC7aWMd33hpUvNZHePjdM8muFwpJ",
  "key17": "3gtXaH3cWzgt5165WYJnv8xE4JbC4FXWU3qAta8NBsjEU1cRaNgRB2fpHvMUeF7b2APf8m68MgYKQCg9LGRHro9T",
  "key18": "4Sa27J2imukphDtQo73b7hgP6w272aT43pMqZGCvQB23igG3bmDxVAChkBMXiFoL3AmbS1p4ApfPRsNbBaVUxb1i",
  "key19": "psKDiJfAdYZErfETYjLLUnmYotvjRuGaxivLR8cQe6ii2g2qJ18R2udg4RiLwfrF4nbrtL5cyXyw7uennRd6VGg",
  "key20": "3HiidaTvUFfseKQ4m1EkZhDiS7FGCwspLpB8XLUj8kiKXCvibBCmjgxAZT85SSsNfREyiL8Zn2h2fSQdFhpSoh32",
  "key21": "431VeVD67XxLHGGdUv3iXuMvc3MjBFyzQ8Gb7c34M13xSkcKE8NYDkSdaBcFSJTCPAtKtQJeMgqSawwWocQEKG1h",
  "key22": "4x13hmYsbMkNvSjQz6KkjTLerr6NcVowcesDQA4G4nYmikXwajdm1EA1MC2WVPGaLSyQhHdTf6tbXUC97Ccp5WjR",
  "key23": "45ZyxZzqr5aYnyorKdgmttBUPFkgrKzBGpLubnpaXCWPkAnXyhYx4VFhVpsZEAMnxxSruGkGCfXXhrjYo1UV3qLn",
  "key24": "3vMDkp4Xaf8SXsot2YExuX9sqZGswaqwjj2TMrnrTdGpX4eectM4WuSw9USeXV8Xepo4ZST4ae7tLT7oTRK8eZgY",
  "key25": "4XxENt2mjNW77ZkX9rhx79S2wH8yJJvSZFBAipArtNMBgfLmjBjwrjTRGZYjMNNxNghH2pnNfo8Xdyiwp8zQzodp",
  "key26": "4ChAjRmGJ1qKNoHrW8yNv5zSuwuVukLAYzYaahsBtyZPCxragPYKydy7vyYa5HeCyS4u1kPNMCELVWQx2ai45iRh",
  "key27": "5ohZiZ22PHsfeDSMuH66jAdcrbiBpyb215kPeYBLPjJPw4epdJQdfmxdSaeT59xogwv3rtfxfo6d6UX6QgXuGZQv",
  "key28": "4iBGrhHRSKXYWG1gzBeRoFFg1RyAa4J96M3UCK11G2sb9Ww5A4HSkk8uxsAZVHJ1SksUhnysyVPin9mULRKrjZB3",
  "key29": "xSe13wbJSeM2KGxya6o16stu1Wa6U9UDuWDSkvBd5SuL3xtxPufvECHakLWD3xnaJK4Qvr4nz38M2AcQPoHRVJU",
  "key30": "2F9uW5n4RLtk8k4UzUf6EFk7tv7msS4cU1BWnZ8LrXeJr31pDRQUoLTYXZshz3aMaCmEzBGqCbQiZzaQgNz9sJVp",
  "key31": "3VZQjKDVa3J5aKq4XMhSiswEAqvMdh6HX1tTk55VzNcmV4F6ZwP6RKPBpu7ZwZbwRS6Sy1JG5UrcdGc4cxQWaiKV",
  "key32": "2uBGztTDAVXJSsHcqNhvEDS89QVy9EsVNGQccodick7SwKQmLjkrdVAJtBc5pqCSPD9nwhPqim2DHeP9dCBJVgvB",
  "key33": "4wvEsET75eBUBYqockC7pSBxiLGJZeNBC3j11mCZPxiPvvyRFjbKTSNUTExvHur93Frb64HVjXWDgJ8mNJ4kyb53",
  "key34": "2FYTkMVfQ55PBFcT3ZTiF6SbBqhJ4S4C5Uv761D2RsKEAXfsJtou48CtCh2arsR3iKhB7YvTETMevD9Ugyiz4Ubt",
  "key35": "5DJghkRv42uFcVmQsiBqpc7mQN5smnowcQDg2KXVPvgF8Hygft3sJ6n6zV5TZbWbPvae999E8iNwYURagEdwi9ND",
  "key36": "42JAUVncFmJmLYCv2qfwAoSVF4niDmmuxRSN3GKzptRwTaSqBXCBtUepWiv5HiisZJn9j8AEA4bhHjPwXVxhRxc5",
  "key37": "39Tnip6Yj1NrJfUfB52Coh8gvfBnVaLR524qrMvKshHkqPNFUb1mLLPsGHfFeaPo3Lg2sxk8ZyAAPXcddUTQrT5w",
  "key38": "4zevZKixa7BoSjHieCcRbKin9HWQWPRy3VxEXUuZdNcNNbwpAfm9sNf1QvmqqmMYz2aJJgA5A1cPKMiTggeZtHwX",
  "key39": "37ptoFBE5dzpo6QyJA3iK1U6BVe4aLBTvrgMNyJvRCwzAQoVSRVe6gNkkzJ4vwBEHf3eQX3jixMBBXHtRMT4zNfp",
  "key40": "FndmsNZqiCbWbLnaxfKqUQb9ESgJuN6RX54x1q4CAM64nVSocjdTxFye7cCsRm172jN6z6QDh1MxHbcCyiGpBhE",
  "key41": "48QbkuAzt7Bq4ia1YxkvpDsY68Z3drYKzGGPqGN6mCQimui1AJCcPQfyo183PyXeEFQJW13k1X8kysaWkbFbeb53",
  "key42": "4fVtgmgReWHjRJ5Wv1KmHp3fm3ozrFCqLKASSE68AYypjn3kKHagcXtQscNStkzVKr2uuKJWGVo1H8XUjRDF8oVp",
  "key43": "4vjy6XhbjJppSwgZEJ9ZibKBRV1ZySCzZm8Xvct8sx5ZMoaC4jyefyucMqFTq9bWKksWz9B4VaSYjzcE8HSFbKAi",
  "key44": "3PvPhTbomy1WtvHKpZEkfpczNVugEqo44HhGGnFSshrgEWCg6MNfkffFSMXPDRX6FW8Za5aJxGvf4LVh7ng4GVGZ",
  "key45": "3862GDUgbzZ1P7hDeM41LDtab67EE4kGDa392NiJEhDXanM5wAPwzvvdkx3muq6FXFsf2WrZwpfxZYsoyf3ceEB8"
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
