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
    "2zynY5Xhn7vaR81pcDs2vjPCVMXFNtjvVwHz5HKQSQumPcZqy6jGZvGieYkg34KW9cZnhPjrmiaCPpskwPmVxecd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r9kYN5i3jWEzAdioovmCti8ru2YReWTc6zFiLGpsActPGRvKyh7GuTkARTGjy8zw6snfzxh2TyS5pmVKcfHjGp7",
  "key1": "2dEZtK5q6pyT3X1TwzxXUtZD9y8eXgEbJMxUsRAHSN6mVppa7WMwSyA9MtpZk3sw4dNmPkDpD9Jwhv1d2zZxmPeg",
  "key2": "1CZY6x4B3BCTKYf8gj3EiggHJ2YqTrMW6C2KHxNcFXfWx6ZUZhUE89ZRExbdDgthtT3hPf4yPR1RbBJ1jvdTtWR",
  "key3": "5PB3AnfY61YmLjVero9GgF7sxPzW15748jZFMpHCc9f9oDqKcQ96hvwUFzfo8jqYTpLHdCeWGuAAZRuvNVuYRhFN",
  "key4": "2TVyByhLXHvADTMovbPfcu5PTqQo6PgmL8css4Ccxxk5WLMPnvmV4hEWB1xLKq3VPoJZUsZfUpyYAYUdhwwdAvqy",
  "key5": "4vSauseydujyNRLXKKVaZ8XtfV2xE7kEdYvHwngBWuHBAX9YMnvxnUXuLPfZQiB9hBfHDVm6Lt32Sz26fgurTcyp",
  "key6": "5BsCniCWtd97Cz1sHYV9pnedgAKeZUksYG733yVYtkcxDknmYae1Eaqp6CR5pemLDAvyZoFuAwWPX3NBy2gQAJJv",
  "key7": "4FGdUTLzVyJBKzoXUoUK559bp11SWf2HgiNa6DroLno8Q4ExT7UZAbbdQL1JWrqBSjvDCWxeGDLaWGLNEhg8Jwux",
  "key8": "4EzmnjfizYSQ4a4Gs9dGefCGDWR1Er37uUNQcs6hktPPvZsEyXSnvLkQHZDHKVC74XwfHhFx8auVdUB4xSbNayCh",
  "key9": "4WMW8Fa3jy3rDuNdyWcj4FsBn6YLFqaQnPBnQ3bvGZi9BGNAqws6EiJinnoQwpKDqCPCBTPKVpyT9a8MxdQkKZQB",
  "key10": "4oScgShRtZyjSz3o3YLBviapYRtPdVLcjqdVbEt6F8zsYGnahrMKr1CvCNxVyYfiTcdvVieXY5ZzVA6RGrDJWRwu",
  "key11": "3LLL5tMi5fqwqceyvJgCPbLwb3z3xbMi3UsqMKECzdEvVk34jexR6npLoQyS1opc6yigcB4EoxVQ5YT9giuFtPfn",
  "key12": "iVb6StB2Rpxnx9ikRerxXDXmKg3WqijexpfiYpxcYFQoJL6wLLsSjdAFc56LJd4DZ3Ax15iomc2EigUqunHV8TS",
  "key13": "4wvM17bCyUaUsDZW6U4VZS5kVrc2B9Whhao2gupZVAkoCTN3sY9k639cLtqU7UTGeGcqJCMGioBo6CaQmqVddC63",
  "key14": "B9Rfqp3KyxjbL3zpEq3A1TFXFEJgQCwmiYmTvJz62tEUFaxmaBHe8Y8pHYa99tv2vpeGBibo4iKXc1kGrpNHsKQ",
  "key15": "21p9YYs2oiRwzrSEduYNgQ1fNMGUbwkaLjr1GRVnsG89Z4fQBwqp11ncrXsASDVbanhVtuWWSPjfsSxz9KnmjnBp",
  "key16": "2pXHTLdKtNyz5FCjrQqLXNGD3FWimiVTihm65K3GV616EHQ132hx1RcppyVaqLDPStzA9GwYzdixnKsRKcDKzVVS",
  "key17": "5LJewKxVJFC1kmj5HexbirHfn8wBXZNBz6H8jBpvyqRDmM1K6bLY61ScAvhu69Lenx9Z912RqUrx92peh4Pt6gqZ",
  "key18": "3g9NT9nrswSU2cJciRJbPJjdv1wfztye2wi8kLtibvWpxVSvAohbtEeXwNSGqhwx4byYWSt6xnjHYE99JarfyqTK",
  "key19": "4DrzVUNAui1JFwQoVtkhm6f38Rqwcgw8w85k2kxmMjfmCdtX2yFknAiWm24mE5g3aSjZ8RgBhJSxjhVWpZSfd5pQ",
  "key20": "3Wwee2qzjwge8Jvu9cDdD9sMpBiA1oeWsCPw8dkxwLKiNG6baAZpDq4VPXLaKXiWrYx522Vx6Y2Se7TidfYE57Yp",
  "key21": "3e4jRcime7nKXKL4YadkNdN8z39iBkD4zPMNXLG8nCEu4Z8PJ7ofwRgLBGhSiW5F71qq1bQh3Fgc5McgAWz8Kv68",
  "key22": "4M6VTkUsHbPKXVUMKBBroS7dnL7i4jPdkLZdBj5mNFQFg49MjfzoFQLeXRECM5vky7NcYVXGezrCk2u3q8aXo3Rh",
  "key23": "4N2wLLRRg8raxGsiC58KMhXnfkNAr6Y2meQj3oHVJ2vQ8SF9BxbJnEDyRhxosgdr495SkY28unZzvTUP2xWGthGP",
  "key24": "4CtEPZWRUTfjzLkWNXfJmx4QTzPfEV4HFM1GvR9uEwdX8GxgRpMKcedWRzEKrB581bFqJiXgG3xj7iehMAfheVie",
  "key25": "2oGCmBaoZRMD2RJo3pypS3FuDdKHS2P7Mqi8a4zyCkHxPJac9GaLDSH8hhDLWrHokWwbYUg9LwWF9WKC2tButRj1",
  "key26": "2pcYuSvtf82LPsftz3akiTHBT1pR8HteftXc4ZTFsEmRM5MXJ5aTf1rE85Lyzr9wnTCbhRMYn7E6Lt6JdS2UP7fq",
  "key27": "4gFWfHRZnwuWh7WZ4DXvUdWUDAd3qqdzvxHMcWkgc9ik5UoCj5RJePvKtPEEJCFtZGA6iyAxrC22TdZB53kk28g4",
  "key28": "39EeUftLY5Erf17VuNHAVE1hooJQF9fRqAMKD3bkVS8i6xKEAw35oNxpCPiZqT6xbZMvBEiJJMd8KC9p3CUys31G",
  "key29": "48QnR6RwA5ypKqLt1Hb2JxajWvnh49mSyynyARB8C5oFkPYzWZVV3mR3dXbXpSyS71ohMbwAdo52XzdY5qe2bZDh",
  "key30": "4JUa1F7eaQqMq6ZjPbQVBETR1mSSpZDdQJvGhamQPvexzUnjiYRLbJrkhkXVN5PPyAbdhzjxYUfUE8WUA2e5mUvG",
  "key31": "31s4VvSKur7rJgapy28gwJ1gXkBybfaCbohLt6s2S5CfhfDZoYZ11goNygN6NE7QNfPRysZXk6QrSom8YsbHiGCX",
  "key32": "5QnesvYF59NsiS46AJD1YZsxj66z96rQiWGg7Z8c5qyXJqCBFV5TrCaFt2QRXzjaiqaT9toNNXsWhc62KsvS6aV1",
  "key33": "Lczhuc5rJhcXgKVrGL8QxP21Nz7mtPGt2dVpUiaNkmbMiPzGCj3niCUeFQcUG13gnygg5tocJrpbaEB3JWzuf4p",
  "key34": "3rFynDyc1Dsg7Eh15Y97crJukSdohk88LFtef2fco3rpv9ZXhaiatLBXw6FJaGR2SVdZ3CT8cPHBghWS36VaU2Nd",
  "key35": "jXvPSaZyk6j6ajF4dtspMAeU3kfo9KSyL12xMRix6NqPTUq7UFH6Lt2fJmqQ4kuPwbhYeuqaGEZ7Ec3Gi7UVAZg",
  "key36": "2XMKxL6fZHFag5RmfFoRed7PwiY2XFanzEf1sTpsZ3ncjyK9XQDHbG1W43GmrBuxqww5GnxoNKPHBCT9tbTAmkMV",
  "key37": "2AfhSosAgNYwzgTdvKbj9nSGizuERueBa38ug65YFjVTtTrTnsho6KEXxxw9YHqdUccoS7GgjeKbUxvWy98ccLgX",
  "key38": "2iYXpaD4YaVa7uCDCsApzGbidHkrVGvjJjY1VZ2KszW361eyRi4WtCtKWrAetqjSiMr2jovrLwGwCNn4VfByyAQ7",
  "key39": "3NVjLCQge1ZRs1msbyXWTAgTGRLDe92HLUPpJCRZtJS6nwSQrX67qkEeF9gS3fyQSeQC3ikGBYhyxnWLhvoEb29M",
  "key40": "47cQKFN6kvwJ21NoDtJBwnosoTVgBsg74wp6m9KAcbaGjfwY2z2iXcVHdLnWvTzrK4WoToZ4SGVgEsmUvxnTScn6",
  "key41": "wpKWbTdVp6E4mo6EvPU2CSMfcr9pSENzQhkR2J5WhQ8nquVL7qGKkF4Yuc2eeMUFzn8Z36GcgsdYhYRbfhFZ5H7",
  "key42": "5C5uaV22ArRRzZoNZzJzJ9YzQ8nkw6VtoyWbYfA39oqJzr8kPNwB5T326rkvURBE1nLw69steHtSn8gVjVRAX8Cc",
  "key43": "LuvYGBjiEMHdL9w8t4XBDui1ohjNErbRm3Q4LwEe9RVHYXfmrxBDtvi3TjpAvp3P9yJWvg6Gb27MnSFwLS4eKSa",
  "key44": "5mEWc6N8dP9bTPBFaszUURf4kuWcdxXPY2DvQ2e9EDKE3YqNjdt9RxmHdH38dVFbXkLQGaLwgcb6KhDFyAzSrWf7",
  "key45": "2K73Ae2CfLtXh8JhNrFYQBKBaCGivsw42GJtbaxGU7Cnrm8dXCNJhMU25aYHnkA5BQ8ztcRFggwUiL5i8yoMzDhu",
  "key46": "2QRps9xY7W7pu3mdRppBZDC3gBkJxxsqEjQt5gNQWBfkY6pxX5xUSSJ6Gy7B6zpzmXVmbFphBs6GwCzrb3uXm72b",
  "key47": "W3oq7ZxuMpp7opQninWcHSJVwJqgANkjzSr6w8H718UL8wLhGedMXq1R9ZZaRiS8decSVc6unop3Gu6SGRS2SKE",
  "key48": "2AktNPfcSzRKYPE5fS9QcVzgeMC8seWH2pQVLiEVBmFdVwbdEAauTcCUpLw5BcBGyivtEAYZAanP9RXtndfe3CdX",
  "key49": "5enR3Rmi6Q29qfgJ7jt5UWP8QoyJgLjUUKpN5sRinod2BPJ2ZJGBZeVH7KsjH1Wx9EFZrNxNbUp4ChyR587dexjC"
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
