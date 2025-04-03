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
    "2fs9SUxTcunNbsD2GCmMvUYyvk16zrha6uUNawPDhVTVkW4JiJcmE9HXbJss23shM1YByLyaVfAM28Ak48jRtB3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jKKfTJHBAcn3H36TBtthgxZyUmuYE57tiqnr1BxTmTkKPjnnj8gEtAxtk29qW1UnszqkAk7q6a6Zq5NMxFL8Ef2",
  "key1": "L33sKHQi7ugnwWaMc1VjemMq9n7ssZdEBNvqte2SnGmttJcZyrVoX7XuumgTvB4z42Beo3yTKsemK7pziTiPa8k",
  "key2": "9LTRyZ3gPNxgYdKdySV3q1DzhqE7P4Eyj7Lbywpz7X5oXDKgTZAgQ3seX1fsCT3FvwyeDdSyAZaDzwuTdbjW6Zy",
  "key3": "qp5tjcysXt2bFENTjEy2rPmtasqoaU2DPUh2KYXyMvxRwxdPxDJd1vVRiKVNEkmn69TgGJsPS5JyVzXY1unh246",
  "key4": "531NFsV2hVAyJCJHWyiKZbXECAtMavjgedcDosxZ5CaAGozTWgrLwipkC3BXUUxs1kSrsP4nHdfL7zToVWyczT7j",
  "key5": "3FKNPhGouRgDJEFSQS4sBbkerNEJDV6L7Q4fi3vYV8R5Mu7NJ3WWgKqmuBKHdLUi5m8KKtbRfp1piyUNjkRSk6VK",
  "key6": "2xLAyYVWVDjXa8oQB3kFokXC1PXSdxEjAkpexfS7CTTVDhfCW4Top1yba9Efr2vXQQcarEEu1Uy2xgQFFDH7occU",
  "key7": "2Q2rqXvN4qZy8jTNY1C7bDVdnrD2S6LLmXoAAni8WWDwHhyhSdDUoKssk4eCfqWh3EvptEahWLseEgfPSaCYBnvd",
  "key8": "4j641BLdbYTZH61aEhtjrm8fRB7WLqi57TYJWGqNDWG6VwnDRZJ3T5ctRLnn4p4Rb2Zmdo89N11W4q3DY2ifeUm2",
  "key9": "4bQM4KP3NmFcjbKNkY5jya3qyDNLqBcgA2thdAnDCXwy2gVi2fsrhVpY1xapidndBmujHW7Du6R55fRtd8vQoLfZ",
  "key10": "3bX2YLz6nfV166fdnMyE3NsGVwxQHs4rocm4KcJYuq65vwBVeHbxqrfiuGTef7Qon4NfdWzVamenaRaqzARyHLXa",
  "key11": "SmxVvjiBUNeWz5iQYccfQb2DjvaZh7v29MxCoxweiQkNzMYpsnJYKirHoQrTyzjijSzsPHe2pdzRL4hPveozmyk",
  "key12": "4uzUjqcT7kNa5b1YVcb9rgVvhXx7fmDocaEhd48i45jetjiMkpMCN5heG6Z2wxwWHPV5XF857UgdppzzXHbPAGiX",
  "key13": "3NwCdegb384SBkMkgGiohpTmCL4Z7uoy9EiPFdcAsdbgD1ett6SejVsy6jDaqFGVNBxVkrB4vBF4wDh5fV4SKYve",
  "key14": "4WVuPTh5K1ScKZBSFaiu3au6JSsCYW573U6hwNyVdF6hskv9guA4WTUTA8znqD2Sktb5czB3EPWujAFmRt4NfejF",
  "key15": "5NUD71MFysdZcUijWdietYqHvaf11nm6d7A4XhnBjW7nHJD7N8DZvuRRtti9VeYvTkyNfJQUqgnKkvrgPoTZpKH6",
  "key16": "5hgMpFNA5N9VaZWKdd7rVidjYKc7amrgGCEkK5ss1WcYXbnUn51WaumPqcm1BPrY1Rygj6nxMxqFqpT8pySsuR7d",
  "key17": "4auRCQwh5Yjy4ya9TD2SdKi8CASiPn17L6AW1i2BS4DrTLcHqEBbQ1JwHsgp6QTQDYcfiQaQKWLak6f2974YsjwM",
  "key18": "45z2VAobBHpeHeJqobBgxVJVR2MbqtuXSjaLpFpVHNXh4QFWUJjbrSL662Ayv7k1aZCdqiJqsnAczEjC7Z9TQFnq",
  "key19": "3hu39izYCDd1idZnJe8KCckJWy8cRFSoZnRd5N8f9d15K2qhYmi3G4cdnfHQhFjWrd3zzhfui8PH9C2MRE5WKj1y",
  "key20": "2gjdbZkpySFApdDzYBZ9w9Q9MgjRVYRXqabz5FnSamu2zEer8E4mtnStezFrQWnbZUt2RBmwFBkWFimiEiFT1Ui1",
  "key21": "5JUNnAfZeNfvbCu2te9XF9tswEfCcrYsyTyLcRpUFLTXfPA3HS6gtrL7bEM5pbxiQnVsoC4UcJAbB6PzeWqSMzDY",
  "key22": "3eHLfTKK9pS9w8g8YoN5BpikLR87aJUUrTCWCrazdL8Tv3xQNrhp1TkBhFLKnCvhXjhmBLKUAjirCfVPZGo2XX8d",
  "key23": "2zAka49V7NvJgQLDUk51jXeQJHJHwuviFy5YxPiH8Myqu5qZXp2PJ8CoDqV3QUxRnH3iRqqz7jN6GNRsKDNeC4yN",
  "key24": "3TJRH1SYEVt71kKtxN8yVqCTY6YpbAgkcSL9PWSdtv75NeRc9NtGHiqVifppAgeDpkbWyKFjFuYZUmJ5TxiAnA8t",
  "key25": "43DUHDmRrdQLTnPhARHjfya2UX5UXe2jx66LsxdCBqPaxrLrmi3s1QAP27xq54vRjS9xq1tebE88GqtKCtC2H7Rr",
  "key26": "3tRmi65294W4EXk7Y8MYMoRj9n8Z56hdsYxiQEm8YkSb4MRTb6MVQn3tNuCudB8xPoNYQWuotcocbha13r8czucF",
  "key27": "631WhB64GPbDDHo5HDk3kzmGqJ8ZNXkdNDbczhce1hTckM1LgkBm7suH5DbefComVpzP9je5KxT2qd2XQLRwdBx4",
  "key28": "286MbUBF6UYB1wbykJwg9RTPW9zHUyFiD2tZUppwXgzL2gkQ144SYFpcvjiFLZzLQqRwVE2PpSkUJriJrfYdFpSw",
  "key29": "4q19xGiDuhNeCjer51mMLG2EiqrULyJMXPvsqgu1kGLqMqrEdfQV93pRarRiou44zihuQFeh9JXmyEBRWBpBJchX",
  "key30": "3DUh7hLBJCsa8mhVPK3f3gKKkb1kX7iQDPg2Ku4F78ytQowWRHK89VCgBy8VEVoMjJoLFZfLA9puMJahuL7oTNGG",
  "key31": "4ztcrEWHT5rEPXobicQMgBMkzMCRx6krWMr7CBHo2XTauwNhjaqoh5Hbtpoq3yMKcWR7XbQ1yxMgV2Ba3zqG5rUv",
  "key32": "3bnR4iDBjiJPVwZ5Q9P1H8CNYsoU13tWfpu7GHVCPnPucYdEGBAuWsmmfMzbzwGYT8Yb8kXtjLHWvH6RYuafRsK1",
  "key33": "56kWQgmJRSCHSL3uQPRgUH6k1be5FX1eSRiAknNY9SKQu8EmLEjHuTQaWVK1K75ps1Ke8qBt44os2C6VVi694MLd",
  "key34": "3pPZEwKEqGwk1mHSXaJb2kbwtY9pGigT3rL2xxrzDjEdr7AwzZFZZZpWQ2D9LJEHjQwsGEnXj4p1FsuVw7oNg1ep",
  "key35": "4vhoKNmB1aRm3tTsPcEpdDioBk8NHWUoWFVRjVGQoySwmbvcQ28U7EJLfdEP5R7ZGCCqzBcMjpmQDNPF2rZs4mk5",
  "key36": "38PFqaDdixzoFubkz8tUmfYeztpLJnJ9SsJdXzsiZtsto97UtTy945MmUcyCfZmtzKsxLhfvFwYpm3zPq1uGZcz",
  "key37": "5ZJayXvpvQCc6FVLaiWrNpbBCdXf8tmaCy2TbNHtXanTX4nQzMYUDfDsWf2ixjXDFkeAx5DWUXKGQVpp96CzhqiJ",
  "key38": "43bv7DqxCQk9jWVxZdkxZSou5cgS7q64z86zhmBjrZry3exFLanYxVoS2x7Dy5pRtQTv5vzY1QScAmpFbkeP145c",
  "key39": "5CyY253C2SXmkqPJ68U3GyZ3batVcfN7mLsSKrhFWshYZhzaM3reDTaoHSggD63zsNFjC8jqxqetrPLazGrQGZt7",
  "key40": "3WGGUSQKED838mf7UPWZQr3N8yJPGjZnxyMxWjMHFT6Uo6wyjQRYHQgUUfiqyr8cs9RTULedrBThH6Qnw3NXwEof",
  "key41": "3mZso9DpAsdp8P1e19KUYaGMp7p6Hms6DyZ1KxRDWcXwHZVdcBw7aV8yyChhTMcEL6WtBLBosZi7Mpoer161Ng5J",
  "key42": "3N6mBVN62SXUQ3BE4pBkRVWiEyFXFRnKc75ALRTXvjbV766yy6F29rE9zFcgj3MshnSUK3DkpPmGuGaBeyuqg9jd",
  "key43": "4mfdwu7rKv5RZZMn5T4knp5J9notQquA9qQ8sPSPpHfyP4wYTW5v4zVAnrbW3xXaj3EYJeFAm46pEbFsUYW1vgsB",
  "key44": "5snPbe2niGi9iww5NGqhxYcPe9YAh5eGSFunL5PvAf1bmivUcKLUMjsibwAidSrqBe1Aua34upr9jjRTJn3tpoQP",
  "key45": "3BDTpgR25JS6UEyCo2iMqZBTjkHEiYpVTxCwe5DqHLcFnD2oBvCLWqoX3fQuTwuTmnDFkxgGmgKsCcJvSZx2Qyup",
  "key46": "2bLJZyj2dWuuJfU5dxhMavbGTs738J9or9zkmYPkRxEfi1H9uX7iodGFPDSrzkzZEPeQvokxNg6xVEnZjN1o3PgC",
  "key47": "8aU2tMbXTwu6QygHMYnR4eUL3i17awDib58LJ1yruy3Nr1uCBxBLtXH631CEA4VgabfuwyVFkajQL4x6X2JHQRi",
  "key48": "2oc5avqphLZFa83TqGq3vo8mf6WDh78bu9hT4VGvzAmTK1fS3KqanVcgxHHuuoeXWBZnCx5MfpahSmRJQh6axhNK"
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
