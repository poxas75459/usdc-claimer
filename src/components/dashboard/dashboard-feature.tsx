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
    "7HLh41MuwJYt9NmBnqbNT8BwiozKF2uk9W6umkEyLaMtjkpGWDVogjmTjdjGGJ3LGE2AhQ5uDziKdUPoUxZbGks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mqdrXvvuMvAPXPLFfSno6t4TTLgVDRHRqZcbNZv7Zey2SoJnH9rTkGJKLQU1hivYbnnaQbZZ7mU1bgUrFyixkxQ",
  "key1": "35ew7vi4GqYAnm2szaD9uTc2YrgJQaa3HXH9W79d1hYiwPpm2jKRCZWGXshYrgpkga7YuW1quzkrQGgpFXFKiT1c",
  "key2": "4YV4A4zxsCFd3qMbx9NzV4wsWuHXQSEs3HWbZw1vBEGKx5Ahb9QxKSVgc8AMseZqd7SuLUZpPRSSPjnXrTVbT9uv",
  "key3": "4BWHVNs2Srzh1xVkHd4vBE6LdGcsg1t1DjJH4Mva9Dgz3TaX78Krts875s1LqnPpH4VsP8BPn351KboSAGSmD8Rf",
  "key4": "616vQuRFRNANUQkcZhWZwATyx2J9gfVe6xDjghweoHGUG8UJAQ7TEtuDDq1qUAEY74qgQEYVGbD8ycK19zWDUv2y",
  "key5": "GqWnet77Wjc1N9LXwGmwWAhHHiY1qHiFY5ZYXsJjQgEMeZeeMsyrRNwY5dFu21xPoFe92VS8s3LaPFWW2YCy3vf",
  "key6": "hs7NXCLcfBoGvdpAZvX6PAMF89ZJTT7wwcswdNRyQAwkkXQdnzKN4xLoVD1UUgLuE6kZNaa8VYKFVaUkG7omTUz",
  "key7": "RBFxTFcsqNoq1CJ4b8hKTGBU5K6kPAudZtVZd5LXkfzQrASEYJAL5S1gdSPtJVDRyyf38nhqkS2BVaRv18Rw2Ht",
  "key8": "2ti6ZmGKQda2kWsphKzhcLDT1fZ58nRpa53acKehHKiPXW7dLwj9AMRP5XQQwMDKgiuzCre7VBWKHC6iU4khKFs1",
  "key9": "5SfftdER9bBsiSNuEEGRGaGtfFtLe5Yt4rFjU6Zju25nHiq3Z3BX5U1tU3gyWFUNFs6bEHDTrJQgr87V39fJKmzJ",
  "key10": "2Y2pp2tsi2duhPof3sNwJEkiVVeh6goiZjQX3f63fqRMws6vFXdT8LYri65S8D7N5QUZkVWrVr6oknkMeNpinc7M",
  "key11": "ZinwB7KA6uyPPftwGcqbuVXz6yWTx7qAVFXHLrKxfL7bKqXeaGfJ9ve5Z5jSSiUkqBab8qaTZuio3U3UAnnnr4Z",
  "key12": "4t4CZPe3tsvynM3kQTKpJCLRBfy7D3Ut8ZKsMb1nyumcCKgDvXivuk2NFZMJaqCfTp6mmYmm9ppYhon8QaAscVEx",
  "key13": "5QPAgKFfmwX4obcpEefCkQzZzWXwaGDWY9BcKKwDNiGUYZL53gbf6YnzWrpG1Qp6DYLMcwa44WMyoBp3XdMpzFW3",
  "key14": "RG2t5xZRWVx483HxmQRM5jecxt24Nz2zyDsEAUH4kF7oT7payD7NGHdkNx3KDTGdLRG36sbCuEeNMTyTu8FbEVE",
  "key15": "5pXdDptEomvN4y3rD3UDvYeefJXFangXGw7VLuxF98nQuobZABpmGH8NyqzekUmuPjz7JLNQZqAuax7uFxEa9kwZ",
  "key16": "37GXuYg84v3QWosbFHtW5Q6RpYJxsrgqWgQfiFSi1dZwFzMeFqAvqXLVaCDHH572CfkbWDg6DYMG9FvRK3jK2ivp",
  "key17": "4FC5HwSXFPbaUYQ6AKkKfvdzhjwMv9RXz7bF9NKHNtn7n8QSdcoWd8t3dqhtBYdhWs2jaSJ8Jp6Ru1M2cPp4TKxQ",
  "key18": "4gTo4EBUzHp3bwtRCf5BdeTVxrwDnCwWgp1nSkjzye6iW4ynshaeCPx8xU4CeAy18eUaqCa8QixfSkY11UWhZ9tx",
  "key19": "5x2ukq5VjGaegNBDf3MvmhVto9a9V7asPbHpx3j8m8vkLXDZ53MsPDTDoXnGpge8QDdn5X7yeftuZ1Lq5TyDhhJt",
  "key20": "4eKcbxjAZZqidXUnMnwtUFDxSquKRt2MJN9ZkGKYQqbAU5JjcypkYzvfgu1wxb6Z3zGrmHtXagwttbmXnJ5UyPxd",
  "key21": "3bHFg7P61wv7VzuHX3fK4JzCxYcBkgEXWPPohGdwNY1gVw26vAZDmnc8mr1odBMvGZLjMpuYnRZ5sACFq3CQzCr8",
  "key22": "5J8Un1QfCtaVn4EEaZU2eiNVVqWtzCeUxkf5QFaQ3Nv4GP2iBwbAdSDC87TLq6AMWsK64goZ2nBbTMboRwPHgXiB",
  "key23": "5hD7qF92SHBbQGBwGhbcnoJb5KqoyHN61ZJEefGEXo8DbLVxcU4PEcCsfPttTLGnH1djo2ESyBRsAghJjnoHT1Rs",
  "key24": "5F77vETPny6Wz4g7m6y7YzdjgTqMBxCXGH2tKncprMjdj6B24fgE4QiZKYECrRdSZKeCzJgTeJrRsdz5t84KstNk",
  "key25": "3BJUrKSBG94Gtj2qW3XnKnJhPGRhBwyifb9WTY6yXDfjRmc4BZTmkzuKAqhZE2VC32W7NgwGe4W93p7PqAPbSrMV",
  "key26": "3PLpj7u23Gz7qBsujM8wbnHEGvmFmv112vUZBTeESWbACKuBQJGL8WyiFJADUAMfez85CUGeDK48Qv3n9ci6mcJX",
  "key27": "XXu45M5kMevy4tpoctLoTgW3cUeMHq2ShdQwZfMEAQKc3MiXP22Vzgka4NxfAJ7fNShAxxi9852pzugLP41hoJn",
  "key28": "2SGNqkTP8akQUZYCqDdGKksveQheGYq7M8DQYaZtgvzdB1RGNc5Ewp5gAdtcECBgBpr3Jp4DoGpxfeRDo2U9xvrP",
  "key29": "2fGrXtA8tpfKxD8Ek6BYfrtNSBLPRrjkZBv4GnrpNju552LkUS3P3xh5aQpF56bvrHHkMT2E6Jopa1xWpbWSzcsA",
  "key30": "5uUKt4kebrqFbVE5o6cfPLRzHJeMphXLuZrtCF83zbjN3WptbBEmrsaRnJasZpeayk8KWa6NLmwjc8E4534od5aE",
  "key31": "37AQRYqaCChpWhxGfijKGYjHzh5VmAjSrHAPR34M4Hay4XRMEbeAqUQDc4wXqz18ieDm2naLFukPM45RcbhviV5S",
  "key32": "2Xzae6J89ryxuC8Uce9U7g8MmMjzrChu42hyuaVhY3S95A61aT2H3JG3uLpbpJDvJmK9EDWqFDRFmKomnFuSTAdg",
  "key33": "4N1vzEQRp59iwNH3PESeK3bB4jbwzDNX5ir6L482EJvfTvLvyyV9HGRGTZLFjnyjAcXqaWsxkNXHbbngGrNvrnSz",
  "key34": "5FuvzZyJ3MAQo6EZC191ayQEhsNMjdodn41mEQiDisrmhsJJmtHwpE9RTfT17mpDEYoDDetsY1LWfD7qNAjtCz5x",
  "key35": "5m58BsctPGLw2WvLmR7J4yxbSq8AjyKhRyfwjvopA34eR7bVZP2GsVruoHKFgkWpXwna8SYPz6yvvU4oCyF1gT37",
  "key36": "65mfd4Mp13Sizy35aTvX6fATygwPu4XuoVWZnDMeSkY7DtfFXPn4rpdQnPhDXdQDDP5EWiiv16mCDCbB3UqCSZid",
  "key37": "2x64rZqesVqPGcgquZJ1eqbs6GfdZp92uRbeTfmmcBnSuVWCWaMFqKt4uFhUtkopSeWqksavV9JE3mZYVFmT5KU7",
  "key38": "2TNSta1MT8sNFGfEh4eYuAREkX8DgXyPjHN4ZfU8ES4jtR2JSxgyQ3kcJBAcRmnjn1YvTbs8ixALp5mZXJsS5oJH",
  "key39": "fUJWFa5vYsWM5D8zjZnFDXGSzhpQVDrUN22qb82QeZUR4LxbLHAoi4K5DcFaTFSK4wQGCdoLB7bFr5uVBp14UT2",
  "key40": "3MttaNAzkE6fLNofN1V91kU12MGBKU7vwWDnxFX8qoEmDaw3gsZD3pqJRiGzaLMjSDvFXY7y91AQ8y42JfNjE7a1",
  "key41": "5Co6obU2jR2Uj1Kp4UxrwfvTVK9pQmNvjA4SkMbwnCZQCjqd15NQ5XanrgJ54tcdHUXq7z2UT22LEzcnfFYJkE6Y",
  "key42": "66WKhZiXt73R1SDfHZpJAPJUCTd7Zz8v9sLLRcLLg9kR9MSyWkuSQ1obCy7nMVu2vqDeGTLY4H3EcJPngGkFLdNg",
  "key43": "3mW5mqLg7wrtm2wZUmQwyN9iJYLQBMWdGm8pSLwXyDwEZJeS7aNLFMvMkVTmduoPmpu2hEeX6RRtiaUA9et8X2A2",
  "key44": "QD1caEm3iCBryWWPD6YodcSoA1RdkdAtC1XfRryCFELZeT23zSAH1k4qz5wkHV6xbiEbA3ZSd934XAroTzyhmX3",
  "key45": "3Z9utEBgCmsMR3svB2H5u7NUe6XXuXsbPDXa79xh77YQ9YTm5J4ywp4hAENwwQAyGcbA9QAzLMa7dReMQzGbbZS6",
  "key46": "515FqhDBmoZD3e6dJxMVkoPdEezr4kSLGraqFcj27KQaGbNXykAx8PkHpkcFLp2RNqbV6KN4oznfk8xpYiEkJb4Q",
  "key47": "4fEP4i41tKws68NhFp2URpvUPZjfLdvFx1scLfFgj6jvSZmMFwntLFVSHcbLcv8Bi575bYapf8oE2yUL9jR3FC8B",
  "key48": "5NaYpw5vGyjo3ovasPcHrh7nf2bWhPUfeMJPpc9moanYJSibUsjPf8ECwG7eF87KnAXzitkfbhyGFTgQTqQ4ifa2",
  "key49": "4viFqhSDaVYxgrkKvz1dnb6M3MbTX8s2E6MsXhtmuSgNxYLaEicwULArWEPg4AwDjfAW9pjNYspYv6Rt6XAWhJBk"
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
