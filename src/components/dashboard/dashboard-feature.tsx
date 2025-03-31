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
    "2ByTpM1HheeFPhtdzhERSth3n4KQbZGVnH8V4ngvVnirpvnZ1po2zPxNUnqTXyZNHGgEEnVWi1kWpKzTqe5VeJgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hWeZd21PvA4ySeBRujoSgL88eRXFMHH8g7nHjMJnXm7j7U7CPhQTWjETfk9jPk81wAQX5Xc2LcSxbNyt6aQNgWU",
  "key1": "4b8nxri7VTuZwCkhLKVobMAUguVNcQA1D1aByZPgHFiSYbcZXFYbe7twTD7ga9wU8UoT5gpZL8LEv1F3P4vJzrqc",
  "key2": "2SHWw91t7akyNUSjejUdHgcZtpKkYHdFRf6zKijEcptuhwWER7zkp1JQpdn6sKugdp9XzmLicxBC5rZLYVXBmSGm",
  "key3": "2os14GmufxDjzeYinbkxHeF3eHsvSEq8LivgBu9WyKyskcZVHeiNDLsNhLGonGdwM6rwX8njHk2pEkDZrRbN7Lp8",
  "key4": "WWMgcC1siLSe98rKoMqHBXSyn7WV2Xcp5sG5h24SaH5mJpkSeRjMTvXwF7hGSLarjVAWxHDXLrQMrpWYXyFaQbv",
  "key5": "4jveVh8zu5ES72hA1BErAwmbUi1JH7EzfZJkHqzXBLdptso75eB3pNPyXhwQuquYVXzt5DA9qSu3YvkXsuSoWA8i",
  "key6": "5pQwv81d9Gde6XZsSJsE2f1Fim75ugwDMyFMdgAic4bxrnoSoPC1FBb16Fk3mSHhDP2wsQuMYAu1Jxuiza8uuuDu",
  "key7": "4fRWGRVydehLozBm9V2KjYdwPnkekE2YiqumkNaXiJvnGKepdJChmB6Lg5Hv89kqvvRHhgxqz29gwsL1AA5W1jo",
  "key8": "3KcoqRdrxdzPKjg4yLbunmwSG911aMoAqGnnYHoaBF6zvQYCaEzMYLEzK8u4XzpZZ2uTm5hTghyauEPfSeDmg3o5",
  "key9": "4SXVcGYz1UXcf7sbj4YoWCKrsbqw6hVgKocqpDHjPyv7aaThM1ZnUBHA1NFJewZtHYL9dc3xANiojTQxEPb8yGrZ",
  "key10": "3drstf4J3mD1f1QxBJg71fsiAN3JTV68rqRTcBaJryMGgo5AimRwpoAnD1cskPpMU8xMA75Puz94ReirPnf1J3nq",
  "key11": "2sumJ9rT65fpWu4ADbQ1osf1Er9xpXniq5DYxzaYzeeeS7gDAEtqo2mTVMgcA4UvduwzcLTXHJnaWQTNo7uNFNU7",
  "key12": "2TnkAKma7ffycLSGKEeRxVWyMXBUWsCrNTeKARnYTzGSpoqZ3N13W45YRjrHV2jwoLAAT5VTgdEcEw65Mfe4sDJU",
  "key13": "4f1DM6nNvzA3yEW174Fth45PkpxThwipnCGxqoELHeZKmVZMAznYSrsSeJcbQqgbSitcQX1hMszLDUZreet26Afy",
  "key14": "K6MKuYsjBoWeDnTbC7jscPFbxoPB7TJfaHwSsQ1fUCd1MQ15mirexeLnivAvUTwd9fH6EGqVp8rmbkBV4vNW165",
  "key15": "m6AsYwhrwbmzTHcJGV1csaLu5E9QK9ADhFHfHTfRMFxemYjizeuXdVwgXyyuhhQCcfp97uqQATi3GoXY2ry9DHZ",
  "key16": "TNcktwATyhxneQm4MTY1bMiixANe6L5TpPSNrmF5k5KkwoArykAxjFwD5aFy9UQbPJnXjnQNkjvUyVr3YhskNK8",
  "key17": "53AtirUySyQk5N9NkmWutNhHxdSj6Vmqmh5LyF8VTDXQ19thmzG4kbapR9BcfmoUHz6Eq18XYkSswP3yw4NaMpxw",
  "key18": "DL85HYPXhTPaKFqrN5V2boWzeYQBeCXPptZHs3z3NtVi9vSXdFmx6JqWYVVMwLY16q9H9Cpi9tB84GGawNrRwfu",
  "key19": "4gCZP4nMiE2xxFuUpCJwrGaHo7QZD1FfeYV22en9ZymmiYDuQU5Eqm1MdtpyRyxShYH7ayLTdy9wnzqCaQ4CWPuH",
  "key20": "2AsdSLXRikeRxrxMsrdoGbN6FtYdedMsLr8TdQh5VcEjqXRtXQksYCQ3dr2VetDx5NVu1SJzmbkneZcPjWXfnTar",
  "key21": "4KK5FscQwPhf1NEmRtX2B3qTkSQUeppRKRWn1NwYhat1BzyB2EHoddMCrMASJVqdQun1D2fjuEXiskmhVNbrC2ua",
  "key22": "2BEhKUWwdYEeKN8djQ3Nm1aNKnYLCYQc4gv4LPdkCQpFtk5PBXZ6oRiFxbx2BxpAGJRe5pvzeGy3SubrsPY7QtUi",
  "key23": "2KXQM9PqWMsq9QWeG75h8nC7yGKjY82LuMUUSxKqmspz6bZ6ijmYWyujTomYExt3RqrDQxFpwmJxpjWGH9Fypy5N",
  "key24": "67VPzMYgscxL6rHkpeyi4YdRt9nWRayUYQHC4FiUX46YZaWPgAooJXPxghAqbwaJKx2Q6uoM5xFdL2CKcQKyeaMp",
  "key25": "4c5ZGacjy8A1BMqQ13gR1NPZXWVrQu9BRBNz1eaho1FEaSDXdD2VdWG38AxiCbhzAYkuEKCF9YfJydpksrzY9ZPB",
  "key26": "3Azmb5UbYPz5Tst5Jmx4KwGgGCGgkd6WsVLtjEKZJcoBxQopSKriSDyPTf14AUXKPP2fP7gQF8DgPxGh7xm4msqe",
  "key27": "454TZjg7tkszyo5DzeeE5rVYLAn8xAeytMW2hFvRYtikVM8AdiRxWaNivaFH9kHC88woXVyphvSMsqoSbjCXNdSV",
  "key28": "484q7w1Fpgi5RHpmycyMM5NFZfx5niaRZUJENwaAtdjBq2iP5RcCETLkMfx6KGmm4CTg9RyRi3cpyyhN5usfMVVE",
  "key29": "zcKYwjnH3fK75XmpxnLHWXVriNMx8dzFiCF8rGqc2YfTcTMneo1aV7JPxJHsTc6vWb21hU4rFtZNzKbjn4g2FoE",
  "key30": "X3UyWJtrbpi3AbDMHY2DW5xX9DZGwSjB2R3p7CrLubmMtCoHEgRqUWdmGqXvVo45kjBq72r8vwaiCgtQkvZfiBt",
  "key31": "3mGGmRPAHr88oeRkoQuJf7KctQNrSkhxdapoA5CCrgECSgAeSFtNaTwTdtBy6ToKLttAWhg6AQXyQKYTKDB9jnm5",
  "key32": "4jDoorw9J23Pnn69DcoBX2RKsMDM8tHDQFRwbKgEFFB2sNoLXFfG9gnfLNt1kvRJAxopKbqc8smp4U71nZKHnW2q",
  "key33": "FCDWuBhdrxXLiVjWEWshTmvqB9pQEcbneMVRdvCctx7RffUAv32gFYf4Wea1xHxdWyF4oKVsh9qTAK5MYNMrXQH",
  "key34": "4hWHtFDbnsAJmwPVMV2XX9z25uuQLg7x6q3DRq2ZvjXZHV5mK6Qs2EaG6QzWqZ6u56KwgcUdRwT713FURiFYihbV",
  "key35": "pEDxpnFMJRoH5yfEMjLrhwLit4cbGy1pWha3vsj6eD11QFSs4CuQzndCTkFp4SrNPvcabkrPeGy9qFMLzhk7hAo",
  "key36": "65StXrZbrTAVer14stvgeYnMAJifqytBm8jV4TddNJrPGc6nvELk5LpV3pN7s9FGpiExapyvLj2Row43p41TYKNo",
  "key37": "4mw4H25YPCoK3xy1fVYRmnEPqZNKMq7o3iHF1MjCDf8UGCFSwcwZytfZS2Tr4e7z26ZAh6u8HXspiCvwCX977rux",
  "key38": "3F77ZHncpFnvQxP6CVJvy6KS7BMhDRR7tMe2xfeGfcV157VJapGjgV88KJv7iL5xhWUor9YnzBqvHdn994ncMv2o",
  "key39": "agR6YCJxfkFWMNY6KrR77vXbb64JkCyjxGKYGCo3C12BFqYuhSnVmcfK9TDJibQTdppzx33JWGLy4STAdUYF9bz",
  "key40": "29JRfkzWC6nHzV9NEyZdBi26WbmW9ixyP73zQiCX3aNiThiA8qesDV3GuJNZqZG9w7QvqfzjSH1Bbs3ryJnbkyEk",
  "key41": "3USDHY5WLpwYxGLpjKYFMuQm7kNHQSm6d4srRnCY8nGDrdjqTQ9PnVEQFM5umSETP54a4dQo9DDyJfSfpmzQYj7Z",
  "key42": "5bUpBFv7Nd5TLekKrGYighSYXrRyoVVo5CuX9timSuNNbjUozN3N4tKtMjiiKDqXZtzCQyGGUA7Q5jgAWqssRNo7",
  "key43": "3eNTTncE1sHUPJt14caszFNSWXaBUEvwTWx6bgnxFb9YeYb4PewLrSRYCxLzPQw1SB4xNQ5Grb6QjyPEhNyLADTd",
  "key44": "46B8pdaYfRRuVv1mYWcak6ZwryGRMAZ3qjiVvR61c6SCmVh1NJDMiRdQcigZU7qgz4qTWRQHRbUMMg8cPA4GPkVj",
  "key45": "48jYWf432qb34UmhERQwcedpisKh7R4iNXJCS7AakkFfLWgBDKcSNQ9wAP1JhauPrsqHQkuzW7QaRq9Xh3Le9BRk",
  "key46": "2zfLcVsLjjcmLxvSMAkrDkFZE1acisSv7r474RAwfr4R18ntp1Dimpw18AyYSL8GQm7m6UgpR1kBTs3G5exwPHQT",
  "key47": "4XqJ1SA2zVfeZxcr3ezZQ2cnSXmakYLa6DuUAmW7jiE8gLmBrftu9XcX7wk3xRHw5n1K7gLpWYw3bEHJMjxXhixs",
  "key48": "5rgYxYaDxjdSfXscv4Ff8KubwKG8Qp452RLDKHPYSRZ6Lez1sFmKE49RnvqBxFbNzz941cxfwYZtijsfxANhgmgp"
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
