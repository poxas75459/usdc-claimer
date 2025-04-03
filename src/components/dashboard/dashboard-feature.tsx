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
    "425CGWvByiGQmSZpjVBE8xadeNzm9sx1N1xaQnTNQWgzm2BXpDSRQpQM9ToLBoSFQEUVYjLrLppYxbBAKKHWWzic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63tbsbNFYeUJasZ9vNvYVF8kZDArmaJrPrJ4ZZgymTqUE1Mw8Gj9iXXiqmvpwNsayu5A8emx1mWbhbz31X6V8DAE",
  "key1": "5CgdFguqoCQhuxuNxBJg1L9Phbq7eYzALc9yk4UBX3H6hvXfcvdD7tfXn6mtKjNRR1FpCKUgy9DarQyguR2dj9A4",
  "key2": "22CX5PSXLg4JWJNksctyY6dCf3cnxmZgu2UBKnbaKvdUbtVTfkgkxryVY7pzjjAE8eCM4YBaAQerFLmh1kgSVJbe",
  "key3": "5seQsC8JrVENShCXDH2nxQFTRegArhbTnyxX6v5xQcn43XmUZ9919fsWt2vSe8fF3W2xSSnVz11YCZS8QiqXxDY4",
  "key4": "2V93FWaSpBdgPyjqtKFhrjymML8UFpckAMTnWoVW7WRYpNPAw6YHx78iRZzuwA4cgak62kjCexNjLMoT5uYrGgZM",
  "key5": "2doLiSLTt2qXtDvpq87BtjgdnsTDJzUQrPJB53JMFZr9DYGsGiSLdpyGRDWvxFe8k6PsrmhrVkpB2c3ny1yfjFj7",
  "key6": "4hk8SBFd2fBwGh5XQ2BgtWsV6iCwJRZjNnqyypMeTUqczaLZpdCQtxmyXjqQQxXm7CGLGZ5PkDsjaoY4zuK5K5rS",
  "key7": "44uGTDpLSm6xeAY2fYv9dTkoXn7BdbDJHGgvVrE8UNKgw3VHYqcVxE4MqM3Pbdp1CS7mc23bGrqsPnyvDKbszhT3",
  "key8": "zy5ppLGk2FoHMHgw3iHinzWEa44B2Qvn2F7kq3mnVEBQtEvh6CzeLfmucwKryfH68a5roEB2jmuLpSJbWMmzwz1",
  "key9": "2rCjNN2QS83BzXTgNsWgVBk24dEcLeqG9Aa3aGU6jCvgSp9SUQqWwJdxofbyyvFbJ6GRxmHuFKJ28n9qKTSbqcHQ",
  "key10": "Kgu9c7BeVzYnMfZdKrbmW7rosNE4KDgYx2uk4gUFovgD5HKZJaW4CtaM4BjTp2J58AyTwqN4c3yHY88CBpnbEPP",
  "key11": "4LV6ZkjaMERjeVjBRvxs9UnN7gX4um2equPbawWG1WUFxXTu9tmAXsh99HeNhcbWWaRar1iZ5qjK9y6Nhf8Fc27j",
  "key12": "AYsKJL2oFAjPkZSj4YCifJ7CM825vDWwwhbtEFYwE2rpDyRAdW1RJE8SvgTLDMKR5VtXdSfDyjWMkozvbA5hcCC",
  "key13": "53qkeC9Mm5ziSCrws3Xbpzq82Bwubc2UhEZ6hmSq76qfcaWuSSNyR8B4hswtR5yhqNtEFfTwYP3tEMwwvyKuZ5Y9",
  "key14": "ekLj7djh2es9MhgGZZHBp7hqM66d89Kazq7wThpY5jfA5L6NJbptggejUW6kejje59x9MfZmyLWrWyNSEt6ayEd",
  "key15": "GNhW2FyZt4xHip35ZiGXkq2x1AS1z1Ge6C2721Eb29sWmRz5xyKPJAZs2TxY6KD3RAf64mvXocVdBYXV4CY24gs",
  "key16": "vNzwTgcU4aVBSjiHf4kFUooqpNnphecxEWMbvFLd7hcXgotmibbLw85qkHft1hzGyjTPzRE9Zj2T9Ww3GVsSsGw",
  "key17": "2hfwqqjoXQM5PuSQRgcRdWUoNP5PBaithQ3MzSVkr7Q6jvmsDxZ3uHdczbE3dHhTM3m8AFvFxrmGRRN9128rgde6",
  "key18": "4irK1x8hbDmfLRwiZFjfk22xGsK12eWGZmyF4oAFyjL4sEU7GGXLPd8RY4c4Zsp4eYD1wPvK2nJmwWJzQr3QPver",
  "key19": "2E6r2y8P6zKhJFehiqogKKdMXBKBqqXuVB1PMookfZStAtkXG5sT4sfat8tkx6FF3RAwMkMuPgktfWR8rBRGN8Yb",
  "key20": "2tenhG4xgpMheXmWVSK28BquuX3EUBnEUgxzx1vh5XFzBdEahxkd5LwwdzmcF5ctnBw7Zwp6wY5po47Lp97wuC1Y",
  "key21": "2oCtakaw6eNqrJt1jXzNA5iMc33EnJPTEiaCWjYGKr82ukG9KXfUq6ysKYrydjC5kMUqzxKoS4KLAFhfuAqy8ViJ",
  "key22": "3ffQpSv85mVuZvLGXXFQzsRtRkphJqGdH8D6eyc1xD1BFfMtoo5hBAnXnjSRfNFKPqAX436VVTMFhXEriQsRqa8Z",
  "key23": "nHHGA11wVkdVCK23MGmKMdU2ceqy4gghjZ6dyCcTVQfaCMgrxJXLcqzweWjRjxxomZ9ciR9hF6oiWVwk8XJWhzP",
  "key24": "2r4NkPCeoje5pZcLbj58U79So6L7tsF2zZLdSnDXoML7FHxb17vV5kT2qPMRxLtspt3K1EHAADErN7TosERVM2Dy",
  "key25": "4x4QuPeMfNx52FgUGHTnBCov3867zGcc8iLb57BRDEZ6H8rd1kTNewFrPcm7MGWH84bvmo5fSK2i3mQHjVh4vETh",
  "key26": "34emPx4tDYupzY5JXsbuHWW5qbQ4BJPefYqS5sQ3Wdg4b1qeKJLkLUfVgmS9r1UnZzoAE8pjtFnLBpp2Yo5bcTzj",
  "key27": "2mALsuSDtdY5WoVj9f31zp7vzoZRPZ9JKVoLsHaRdWrshr9X4xAr8t8PvF8wbMxvswdEbWBqMtp4KUSYLS68gmNm",
  "key28": "5zY4uXWsrWpC9VibPkJSJY9y91U2tU1UYbJrQBmFD1V3EaHPFV6C7gCbdcngSmgQUQ9gYApm5ftgUZc3jMfZ2Cnw",
  "key29": "5LnxZk9KMZgPsU5moDNAeP8kYPCmpGxnToydXmPK5oW9ir273GfKvrU8nzQ8WHWKEikq8Mn5RGzgH1YskDNrD8wL",
  "key30": "3jNqUfiS57aNQoJzYsPqrgEmdMnVkRhiadJp43D3yDsBsj28Aw3VX3h8H2TUKjJUN2Q7V4VPigLRp9o43QxFtrgt",
  "key31": "24dGQaqm4R8sazB74n8WmTLn3LLDKDk3QXNLvMni3ijwh4c5rG7CehDQCYsTMwvfPFRL7MPB1cHw681gVBEsMgrR",
  "key32": "3obr62Ee9FomvhCgrQruc3uZECEvAnwVJ3KwLH56wCJ9gN1Aofaa9k88Mhrmm5o4RHPyuxoCNJRAEN6Bq2mNXHg7",
  "key33": "5EoxwBu5dEk7fUvv3boK7g57Nd1pRx6TPDWKdjp7ydfBKPj9bgakzZLg1UxvMT71fsfX86PiRtqXTV51vcVYwXHr",
  "key34": "4jtBcjqiqXQptp8uTucHdSQhit8GVjVCPMdRgXuQEWKdzSXq8osWrp993eG5yNXnyTQ1vXFP6CK7UvZUp1gLSJR4",
  "key35": "5NzLfWRMSDKGxq7nN8jN4ATcmwwMz7jJRJmtNgaMhKDWzJ8Dqp8SdPSuTujpoUnkELSJZ7ZPvr1yDezaY1DNAkRX",
  "key36": "4WKStFrZPCcwFod34Y22vWxeGp5SddkaAVPD6d2Gj1vkmzSgCCL4tVDFZcyNc4FoRCxhmemp8Ui19gukez1CjhEh",
  "key37": "3rtqY9apWcg6jeeXkkAJr8dnfUwVNqG52FDRgRWdwXLADc8SS5RkfqNEomCwWzbdo3TVhBPfXefK9P3khthZt8uS",
  "key38": "2hEAe76mYnrTED9G87Ph4avAdw6eat4cU4WuEQidstfaXdsLFkjwef1hyeC6vG4jtPXzMhyj9adm1xXUr4c4hzMP",
  "key39": "25HMyDgCruvvGmpmTTkCDXgTzFiUsfHz7Y95QBhaMCrBTBgH4Wgd1y9iFYAsXS3LUD6xcmHEc4c7CnHYyLKKcFw7",
  "key40": "3srvanptotGEWuWz2A34yjK4iGmrUJA2eJgPWW4b85vtRsrEprUnHnZ7HE2Sj7dc7aPndtpc1V3CZT2ShdsUpBue",
  "key41": "MyGf4y9XLsET5DeQU26dmWSEWo4fjXA933vC6EbJXFmYDCfz92FytL5DMeDgFvu6LkZPbbmMNXxuBFXxBnoPx3L",
  "key42": "4oMDsdVwBhQJUqCqvPgQWgTDR1kteX6NkvRS9CrgmFNicKHndJyw6SeVck5Ac1niTtuqKMtBG1mGzC63eojriNRm",
  "key43": "3rRf7DPYFgeevFUduEnsRDqzBoXr8zncz2jnEkivrsFEEdSKofBDiJDPfRPifKEacVfDTM4265eFwmRqt2tfV7hR",
  "key44": "46ERvkNJiJDAEyxrsiKkyeZvDRrYJJw3KqASHvydcYTXc8KVtzvWpCYvuPB5wNt4Rib3fcAwsiz7KDJniC7qi1cS",
  "key45": "5cPWncDJvUhshRCL1ZLU8zRuJsC9iiYfZpAiiK5kABoL4Rark5Bih4T8SR2gQ6ndYE1YmoUvVdrwf4D3c8GLUruT",
  "key46": "23BEj8FxcpLN7Z5tMFQ8bSuCb6gxCqqGiAt6SVKiwS14X81uz9kHUfCawimWRLaM299wyE6fAYUWRTv8AoPctbre",
  "key47": "4Gu7DxnUH5ggCC11TFxrw2pto8nQhJ1UFxTtRz7uLvej2hoQcjgmAEUJU9d1jV8WJYZiGPKEk2mC349JUkVDEcmb",
  "key48": "4wx58mzjfX9vg7myDLdRUaaJFL6jx6U89nbJhHZBgR2GdPng4JX1tGYnbQaQ9gLFPJXn7HtXjNHJgf6U4Zt5Bzct"
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
