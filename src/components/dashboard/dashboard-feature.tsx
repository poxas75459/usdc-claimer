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
    "5xKmrcosDSD9jn83MpTYh37vgRmoFkksVKHM25rddnXTRqeLu65e4LXUY7Rsze81uRtxRVXGQcmtTfzcVt9qZAj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YHArWUe49C5tqV8jKLnQudAUqwa8CxFVkx99yWhoU6ivX7XjDYEMiNSWAs6p28HVWczx1TFqEC3aupQjKKwxDWX",
  "key1": "24QQgbNGwJ22HjQeBSHMVpw5wanp7ibKHuXtAYTpkXvfUec3wAWufoAH8ex7u7PH6coYZDRVnpi6CmBNHe45dfXw",
  "key2": "4znP629Grh8xAuX4adrASwfQGNoGG1i6cTic9ezT7zxwipxyP4re1yJdomXv5WFXyT18W8ZdZ9rNNgrQ8Xyxnegb",
  "key3": "5AMpQ5AC8qNaDvXrUcvtzq35efnzCpQp5qfK1FDTk2PoWqEHG5QQqJTqbtWdZ4oJUC8G1Fs6cx1Fj3ri3xMKig8",
  "key4": "2fxv1nV1szLwJyUEUhL5dQVevvptRzSoiEaeGaUnXpUFt32F74GViM7EgPw4weiygXGzatdZ7Gv5cFw1RDqwM2ct",
  "key5": "2Ad4WkQ4NrQUgQWf6AwwUTT11JDk75dAQMcBtxBc8ne9fi6JPqbs1nYX7mHgDpbghbBA19NfVTTJvvP1dyCyREeE",
  "key6": "fPpFu7ZrjnpQ17CuqakH9HgjXpBxofWKbLfQyZhChwy8pNKqjdggAzLrtua8MVqRtfjeHjxFxYQzc9sZxePMEib",
  "key7": "51UVd7o5Va22Nneesft17u4kF5CVJvsBeSSXGpRy5f7wmQSy4TgTBsxzzhqWpM5QyS79cU22eEuuPZot8ZV6Aatu",
  "key8": "5UWUYG2UgtHQgysRLnZH7yhoMbrDwHRYZGcGCNhto866W4Mk1VxX6K43Sj9z2wtwszNehUWAj9fVwVtqcNpFU4Bs",
  "key9": "37MXnjiSr6uaS48Uw2PqqSjUpKFuQSzreJmXqR1mCcyk63he5u6GYMJFswvx13Xo5fkGUXHJ6ku51vqPrnKvgAZH",
  "key10": "3WbDxvmjb3CDSuZADs25vctHM4ahUpGQK3tgA7C4DWrPzYLLrXQTArCXEYc8z7VYjMyKuGdQT7ScwxRypbzNEjPs",
  "key11": "2j41h585GXoy1so4VdznGB1ACfEM2YbZheMEYptSCgCQiTyuSPxCr83xdC9Z6SCKTrShBmxGsxWgrVnD3bGrdKu5",
  "key12": "36XF5CzLTisDjGEEXzLLGishBRqTKcjDXA8jQDxrxkT3fTusFzWFgR2sJNuyvHZzD4tp1b5ipcEQuiV535eJun7A",
  "key13": "4URsZSg6SXKNz57LoXk8Bi5rrv2gD8Np3MpG8Ubz73a876cgzBqWFSFZw7ctDFbH1h2qo3yqnS5r1vbixWae8jzm",
  "key14": "5UjMCBXk1erQjPt2bmY2oy5AE9KNW8TLAX12FeRAMo7jopsKQmSTgVMU2VtWDDeyd4FdAYJGZ9S9pmmUedfZai6u",
  "key15": "5jvNcUBDmXRaVHFCt5PgNejtKvHehBWARFzNCi1ivbbDUXRXwdFyL3JUFB9DUf74Chkxy5oyc5U7PpVZu1pJqY5G",
  "key16": "5XsQbMLtorCHW1AKD757HGLxRy1x2Y2sLPWD4Zugynwqx9qMA6Y4EVGxf4yRqbsj91sW2AAhE4RTuChL3WQ3Xb18",
  "key17": "4v6Ca2WByMDT9p4gWDEreGj6A15MgYHnDxPeS4eYSfinZ75poyGWZrYoTrVs2GtM8wew4H3QhhtxFMMdGaM8fqv",
  "key18": "2ftMLdmmn4KJ9umLpSVsHFi5mcknzfStngAdvfoTjft2aFTenseDJ9by7RCsdgibnH63Jv1GMz5ZYWfDEDryKq73",
  "key19": "3x4z6BVjUXG6ghsmwTmtN1e2mkmCAULC8i63f8dDmin9AnYwD2gW9HrAi9qS5RXvifjyskDGDkjiSM9PPccacxMi",
  "key20": "4SAMnBZN2xmxUWQQRV8uh9pchyv3TpCpikUt6inAbTmPLBsTmr7EHXpjMF4yJPLPJMfjkh5TAd1BK9j1zQFQiqWA",
  "key21": "4whr5VkuU4UvMeqia2WTCCfcnAFV6WhV1kHBvaZn1c1mv4dsnMpgTM841aANxRxQQKHuyXib8ceDMXX9M6Dvfs9w",
  "key22": "aaPTAquG3KzKskuA8xm9x3zAxBbfjdNYu6fJ9M9xpVgQTyBNS34xUc6HEukPUxYGySZoJeugMqN11Wru96dVGEZ",
  "key23": "8oT7TtxT5FEBFUTpBS8kW44HahzAuaBwGQ8a1uorczrybcSGvoeZtfj3Vug5KVtBTycG5AXRfFNTM43fpeeG1Yt",
  "key24": "2BPCRGh1gujpyq36pQf8dusqamzTjeSqtwZWUQnPQWyt32aXxXdkC4jV7UqWjia7Yiqqq6pVdV6w7whL8T5oQ5Sx",
  "key25": "4pkeHkDyjRyioH7sRyVXvPRm6zcUyPYgAgknqXQPfAwAWtPhRy5Ljx4nVq8qigoMPvaBjY4i7WcMaiRPK1PpPNEi",
  "key26": "5g2nB2WEkeDWQYMq4Lm7yzDyxzNMKrKdB8KograWwQq8y9Z4b7hcYG7EcMHHdMiwxnsZsiDeuPCSuRQdkgrvGeiu",
  "key27": "4LzZybnCxapTX1u1nrRuU1RgRCcnKA5SQHgDhABry1pZLCxLSFa4gyZYWowyCogSQRzjBdsLcr2yoGNPxQBpm38x",
  "key28": "3Q7sidKeHu4AQg8XMUVfCyhjUMSu4HtapfBpwBAprBaU1QPKypP5u54Kp12h4yZzz1acF7ngaTq3HDTMgr8oZysV",
  "key29": "5UMQSPFz1S8wNEXdAzcn4f9gMFgSTfNhJ2QMYMwGrJVYctUiSW7hp5DJcmSrA8n2t1Ynhwumst29pZ927prBpJUk",
  "key30": "4f7NFWcV8DMKQ1ytRmtC5VqewQWPhMgfu6Q2jVaWemCaxFEvyfhUtakCmbedXFjg7kj8nJC4tXAJzCFjxKHmkKKt",
  "key31": "3A4kM5uQate1zYdtLPd1vuhJ7UE3HXp4J1hH7SjhAdh1CuiSiNJfkVMd2CZ44sprt6tENjvXqbKuvE6Sun9DCFrT",
  "key32": "2htjbyA9NDS3eXGiyYqNabUrjeMMppk1FQ2JEnbeShkq59kMuTenhmSYGxgsVXuqvRo2wwptGMbXRgajPkYu4dZo",
  "key33": "AJdV2G6FUV2cqyTNUQpqWvCQtVXMRv26E5nSNFfjZ4Wag8ZJ3rSyY64kMhKPpJGAhx9bAiEdu8cQ4qZG6YmbqsU",
  "key34": "5NpGR2uAXJzsNxMkYyEsYtfXo9xCSCu3j4JJwE23azGkaXFaz3bwsUYZoE1qiUoPtDEPcYb9NcMQ9LueY9vNdTWX",
  "key35": "JPGzqBU3jqfMYNEk4xtbsZvjMLewbpf2eGq9QT7737Hmf5uK1avxn2Wg2gSUcTtg3sUzY52URSeegmcMoXQdWEX",
  "key36": "4rTaQ1WCqpoLBEZ3svK2EoqvVHh7UHZwiytqV5r2wCyLfXxVWQ63owyXUDJb1g835WunWKjNsUFaf4XPiwJQnypG",
  "key37": "5sF3RkyijDmnLrAjS5rrqJspVTjdmdSmk9dFEcvtUYAzMkyVDTd7zrrgoPEe7z81GCaWvWUqD6DoicGovx4tzZKL",
  "key38": "4HEeMLpVMkyV8mmSAqQMeKS9U3VxWCfZ9MJNcf7krmC7K1d1V2kpmERCj6ovCEuCUQaBQ5Pp4e7Ar17RjgUsuLHw",
  "key39": "bK4jxZ2qamDkVugQQcsDyxsZ3v6gDZgPA4Qq3rkmHmeKztWxuewnV44L3QxtUwzEeiuzeVFJYSqfB8E9GpdEdzg",
  "key40": "21KVQT3tHETsqt8EsC1Wahwdyby5iDX3jYmmDsXkf7MyFXNgXhYepuFi8ZKZtMZJ5xSKdaTRyhXwPBt85uroX4m7",
  "key41": "HzWXc8vFkNYZsEeRefU4tn3T71rbHEBKXkX8y2D2xTprbu6jV2YQN4gMTkyGFQMiDgDMiiEBPXpEzSEyYAV43dw",
  "key42": "hFkTMZujjEg4eGhRnU5pjqr7y1ghY8myvF8bAo3ogn1dvBTHVbjVrNRrSrr3nPqjPkenxX444BkEbiMKtwpAi5N",
  "key43": "3KWLZa1YFqXR6S4mYMEsuSaR65acEmQDoXRJsZG4LMeR2B2heyGwDMuwzLteJxrZSsHtxyPKshFhJiyTmdhBsfts",
  "key44": "zMUGKZTfikaZcSL6oSkqBhdBMEKttKZ6RWxNreB6sELKCKKo8xZAohK1ejy6KbcNLWAsW1waN7FB5MAjhwCWT1t",
  "key45": "5b14Jx8T6kes6Ukjsm8FqfjsTrBxGkKsFPWzynkze9oCEEk8RaU1SDjFM5sRVafcwyM6w8LntZnD9z96CqWRRPmj",
  "key46": "2vh66W1eq9ms8SHBN12rxLHWzXZzPvYDPhRzYHw67GmSo4BNpJ9b9YggqZJrZzLeN3gCZz2wfUt3rCaLMwcUPwdC",
  "key47": "gK7G3RwCJorzap8kTtH1YkxuNXcVZpPa52HpSGxowXU4FRBWkd6bvExYCojFUxyMXrDwHvJWSwd5X8tHPBvzrmS",
  "key48": "Sa45WHpNuS4Tam7ZXaYRq7DeYCf4RS51MrH6LS9GSXE14UPN4HpUw1AUdbVkxQvpsutzpBiisXvaew3rt1j8ti8",
  "key49": "36c5owpd8Gu8ixbx58eC1CEGRaKc2jmRAneTi1TLeAzz7xt8WsbgkpY1QmTiJSq8iVPaCodozDoxTi9weLRsKZMM"
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
