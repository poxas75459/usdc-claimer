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
    "4b6VaX6A3jULDTVwrBumspgpMVxWWS596uV3JJyDBmYA8nDxAJFUJFWG64nyUWFgyCU2SUyh5owHRhvvFfkiTDbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yymaa7tH6vM38fS5cpni8VBsoHnDetmKd4bDGRBAgh7tKJ9jmq92WUvCP5pbUyGNqhHEdHxAn82bGQVvVEPgu6W",
  "key1": "2DoPjNmLsyuKCZCr3CQfAxqSeX96TGPa4YJoUsqCi57uYKtPKQSTawur2LQ841TyWmP7bk1jNAis3kkzXW8Q2YKt",
  "key2": "4M6pAaVKYvk95tRBdtiNnYQi1RADUt2NkJevBHFToaJE8oX8wYQfL15KPjDVfxMfaKGJ1gb8KjkXSGwz1jeVXTJM",
  "key3": "4uF9gEdScPydkVJ8B5yAbhF5MNLdKRbYtG3gv4hCJxtSKottcHfo1REL75RjyBoHJbbDYWAQCyPeUPxgCgq169M3",
  "key4": "5BhmjpAqpqoWWQ9TG7K1S7UsbSqoucSeYiSLAGH2bBzrk7kWXPPhZ35WChDtohyUj2h8k42uH4McuHbdAxWQBce1",
  "key5": "5mbaEi576SCzBHXkuKaa1WkZadLojsrM53Eu4Wqai2NZ5oY13VNze3QGExUqjM5Q9UZdYtMqfkS3EwnDe22pUoKi",
  "key6": "2KHg3gGQ61sd2o4wJc8EwoPyePjS9WmB9Dc2zQijYR8vR9xZGCewFM7WnQyg4SAodRV9wfL2jq4seW78CsB4yWnz",
  "key7": "nATiZVM4re8rg1a3aCZdNAVbDd3NnsdECceLiSKoRNvYohP5AgfnuJyCXSFHy33ELK7r2aUNsMGNiB97ec759j2",
  "key8": "4Zx9vTpjYxRfL9hGNWdRjuWwvBtykxTpVq3bDRYbuexBgNuviCBe6CtUmNe654q35aECkyGZ5uc15WJaw6w5jnQt",
  "key9": "2ApSy66R797RiJTu9WhCm9RkLdQ4yswBMvbguC4yDiVhfkSfboUqvUvBrG8S1KPS345LBzLeYkVRWdinPPhmKwto",
  "key10": "42xjyBx8WT6ZzenSdjLzkkMJxx753DYeNaoi5MahTZBF5A6oJ1gW19tJNUuFcQSjyJFVq9keUeAk4afWGpWE87fy",
  "key11": "2mLTdaVhfGgbhHX9LkihMKJp2hbMzfkVhX8mYzUBBjFbgmLtcU8ppxAnFrEk6PpYi1sSfQa4639CSbUxyZEShWJV",
  "key12": "5KHUCvEYHrFijWGUm7ujcsQdUdDV9hJ33uJiviFBc8gTXHTRwpFnikuRi7CVaRjg5RAgQvPvv7N2ENbngHMpSrka",
  "key13": "4Gje9R8Hxj9KnooouXvDCJv6yznWQp7uQWKDFUJkvQ13CnEf4s87cywTPqSNy6jSKXCGc9pCHBVNbSNj4k1pHn4Q",
  "key14": "43ryrcUtdPJ4CtkU71VLqKcjBhyUiiMBrGXuxVPTznjKX6du6aZtDiLPN7VNQYeeJRno52Hm9ShLZCxvtcJYbdwZ",
  "key15": "Gdn1hQBUXjQDS27dUnkUHrqjmpsDMvnq9xYfPK89LSrvDwKAxoq9cFi3k7AA1vDZgjLmmUrvnKjRzWAXYsGgBij",
  "key16": "4jt8aFY92Nk5TGoNuesmRiBtGXKHhyMSJVefa4dSvukSiSDwySAvBNfzBkNEa6S1u38LfZ67DmKu8G1TpiNZoic7",
  "key17": "2HYni2u4rMZ3rYY1ihpecF4G5XSNhoVCvhtXGmv87H8vKWsq4LT5vaEhYTdf3VF6rQcYJfxe8XFw6GpcyNvpXS27",
  "key18": "4zChvw6o23JtjsCxJ67uFAfNr2NSEXaNE5wpiqo8AfuiXejFJyd851LEVi5KULDuMXriN54PedYAs92GajR1tREY",
  "key19": "2SGwAUn7LWAvPc5adUGND2hEYPawBArrueCVyzZzpuV6fKWiZa9zFczUtJRmM1GRMK3GxB1PnYCV9doFdfwbSE18",
  "key20": "krLxWBzVch1N61itTV5cCGixZxaz4csMzMGWE4JDcTPY8wjwrZaKCDHbykRt49uNT3NMVgBbzHhYPkk8y2d3TT5",
  "key21": "PzaALggwDR14H4iVy2MjZJdsFrVVq9YpzuRAzurjr6C9fdWWp78EYCbHzYifZUGsKKarqpCdaS36hWABTqa2VHv",
  "key22": "3tH8GLWrsiRqhRuahKV1k3XisYJWMT9hgX7UGL4JPDQcYpQprKoWbr9ETVvajjWC3NKEnB5W9edtE8ojXnNWd5PU",
  "key23": "Xox137HvJZi2b9GhNFomX7aKLvbsjCVf4t6DyMXhhjEjQLRGKGTXFqwk76vriUVpsoiCALvz2zdPwTsELnbxnBT",
  "key24": "d3tNruHPX4HFpATMpZpzm86RFwVLTSEQAPQwNZUWMLdWDuHoVX6ULawtrW5JyYYyLSyEWMkbCwJ8uzAwKR1j6jX",
  "key25": "5DNhkDqyAyAasz7eHz7reQC57FfU4BdizfGwJaqmuEN4ZaujMoMukiAKunGRjp4QqkFUJrHZJzdqht8ViWWxabvb",
  "key26": "ft9Nn2nnW1sCyxZs3S5MNSjStmkJd4uiSQux92jcopB6UPZ4JSXVfNG6bUTtaagwYK8MZKRMjjQRB3J5q2Z4bWr",
  "key27": "5T7fECdX5NS5SWz34RFaJfdahgtvabyDkXT1gETx3FVjRtgNKNyGeaGxp7wgNVyiJcBTrtFGXb6DR4E9yqrxCprU",
  "key28": "25yXG17Xeeg3tujkLc8FYAPoswZozw3uQF3HGzhgAmHqk6qS4iqkJpXR62hGEZeSPM5rogHN7jf51fMe8PD27nk2",
  "key29": "36qjKdgL7nSabzna9Dq6HpajJiuM6ma32UQdYSm6fV3PxUqqnZm8ArsoLyMRKHcmC5ZSJy2QH2iVh3ch6siq1kiF",
  "key30": "3GKL3xSNdxb8TbRfZvuvVgLKFDFdYW45UJJinJNn1CQPMkjsdz5gJjCMwpjVrdZ1AVdcFuHLebhejyALxtx4HshN",
  "key31": "2hFZViRkJTMymJC6FZaCcLzY6UHZD5mP4ghQeaUMwpvuorHrErCRXMKsaETKHdBYjtW9t22bpVxMq8F1XUxoFLXx",
  "key32": "4hn4CYmG76SkMn1g1T8J6xWgsGKxPops8TaAyrZ1Ys4w5xHF4eLiyDHSBaVR5sHfci9SSgtuVnwaqZHsCbmo2wz4",
  "key33": "vmE5tqD5zrDvfvNzPHMXJm2f7P6W9Vm1VBwRNDnNen638Ya9WQxebMM18ipFXWMXVsey5wcHBjKHgS4UZv7uyVv",
  "key34": "529bBG8P336EE6g9e8wNKjVEX3htXL7m5XRrWmTUViyPiY9UfXVC4hA1Ld1d2U2LPVe5VEN5yhhjf5MoM4pKgdu6",
  "key35": "48opJmZcyRVToevWELe9UhgVFvod1zq6jdDCDF1SV8vyzEBQPiCdx47kXU3DvnFTcJBzdFvDas2ambAcSiuUUmc6",
  "key36": "3xz2xhcJgUH8cBkzUZzxoZaXnw7D5t4PGdV9Ukr5wEtxsM1WWzuTV3o5aH1iMh9gMovz3X2rxM9dsLbqHaEWwyDA",
  "key37": "4BCJTDn6GKHCcYydkY3BpnKUonR3vRtgBqrPMCq5KKa5tH28of7gYn4ST5pMVaDur36Wej7DMmsACbs4wPVXevrF",
  "key38": "2ABRP4DiGR18KwSwFH7Gh5VxNxXmQdnhSnmHHByob8kxWgVTf6hobNi9LZXPscJUgMK4TNWuqC9CSp2mEaZwRz42",
  "key39": "Ka4HNbpjZDR6vrRNeRGhYyYpP5tfaqrvtP3JvjCTKw6NSyjzjyvc2Z3JaJm9Jmn4HcpsfBVYYkSj2snVwy7eHq8",
  "key40": "4B1XDMUX9PgDbbYRJpPqeMNUqqvgWJ5jrW7ASPpSEnpLnDoBMgPp9DzRt3uv7R8FdThXsF4wCsipq4higD7JjEFp",
  "key41": "3mywhVqW7Ds5AwboV9t3vqNtByySPwQbVKpUXdzmmJPTu5LNMCfNuNrQhveyf6Wqt7qgxXbXgWgn1pZTrmcaBLhw",
  "key42": "2Vyv3SKxknWG6koaPtvmi3YUUFw8i94k5kFxWy43rs826uoCmKrs4jgSXxxoWjiRm4fgK3xBDw92g65bPpSZNtGe",
  "key43": "5ro7rbj9iQegTzf5cVVsAhysoc9AKYZ2zerzbQTn7MfQ41s8KZF2z5XtF1s9MPYXNP5V2iLDjoiRzHVH4pa6Lvvt",
  "key44": "5v6ATZ86kRdCDuDkFkriNennoXPaRVzVhVsCZEij1bcRjQ6E1bBU7GA25888BJsEvU3ehYXchcRh1apxj9zKUwQY",
  "key45": "3tRKhBUiEKuEBuPbzPnYAi38XLh3Fxdw2K9SkikxL3JBsn5QGteifasVR7Xbbjwbo1McvkhES5Lw9hz5VUnBAENg",
  "key46": "5C3A4Q69Y3xCrLogwxJjgNfXnHSeZWb3VrL939AHCZWDSfFTJGduEitXqBnmKrSCEULaVPykFJHd4nyxLGUwqeQG",
  "key47": "3P6KcPKwyxHhS2sqoH5oCp4fao3wZ7oRhKgYG8zXLhwozLpCanJq1ZqcojzUDaV7m8piD7gV5rnEkMXidxCR3rog",
  "key48": "2jgcvNbsb3wG775mV6vHwqrq5tR2M2acon4XEq75tXGNZ8yJC4nRy8vxE4Sna2VSyNoPSyLPYA7PCNG3rtDR1PwK"
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
