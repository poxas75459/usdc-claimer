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
    "5YFvXKiWYa8UFvai4ee7Wj9DuqNp6PpH6dAxnzBBf4CyHaWGauP2dtW15gRcXUd4CLk6hwDapMY8P1WWRZuAxwoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s65F3Ka7cJd3HFMVkY7nGgmqGSBwz7yUjncaaR9JVLqGWpvFjBM5uNo5o9SgsqLg71umWzWmwBqttcHBshcSiUg",
  "key1": "3qtuG5rhGFuekubtzHAjvEkBRaq41F1KWvbPXKB4uR21YLRguuozzL8eLKnUoZ7LsqRU4aiBedDa6Qsn72PtWjEo",
  "key2": "4kH1a99nnGh815t8mzpJH9KomVSNgajNfMD5E4k2ymzp3bCpANe45bWB8udQzsrE4WQP8YTT7bxVeYb5iiyUPRqb",
  "key3": "4Kgg9R5fPRkxBYMShYHFQLJdn8CLuC7Gx9ewnyDx8mKqUfJf6rngHHRk3vrCXQiJZTUg8mtMK8eZXJTMmdUWhzHQ",
  "key4": "4LKBibsqybTMBNecUhrRbfXJ6Q9MimZ8E79RD3RiMCaZjydoynd4QHxapkUP29YcykGLg1e3J8a2UrrPhk8ax6Z",
  "key5": "qUjDLcsQUY3k2thSAdtnYpXnW8M3C6d6GBZxsVyzAbqJ1fGyJbRFqupoVCCsNTFk8mP3RvThw5HNBsjFoYjHQ1g",
  "key6": "4KdmAgipaiaqEAfLRJ5TuvtRDVSaDSxudC6rYQCzAxghiMQHP4M4wuoaJK6zv2d4RKfDWtkTSVotDkTwXgdHpcP2",
  "key7": "36EujW851ZqzFCCnmEdBPfN29BQ4hWTodGqWrw4Vvr4V61JCEmXDMiVbKCNsMqkQoZHDY8wzBrh1nsuYktTZydSJ",
  "key8": "dy2jS2UFmpvNCTLvxRhVZ3SHobDSFTi3xWCRD9bUn9PLz321S7AhyGJ4QR6FaiRY2jPQuiVeuBwFyyLZH7632FC",
  "key9": "3Tcx5t2C6XpjNZbLr4c3Lq8pq2DomadzKGRSukah4pU5d1sPPThH3zFPpBHo2mHPQ298BJG5YNpDVPWF1tSwshs9",
  "key10": "5EmqgnawvRadsf8Lj3HtzyqsSr3d4L5CNyVpZWDPWetEG9oSSFKMiYSwADe75Et1p42v8ihwwjNTxBgkYZwhPyrK",
  "key11": "2N6cKQdnAymhd6Y87m2dH9T2CzRkHj7usKWooyHgJuqsKMEP7AE5kaA36tZicqmfcSbiKFsP7yYdnWVWarsCzw4Y",
  "key12": "65X6kZeiqSp8T4kC97sQaL1KXPUSwfosZY39T3cf4AWiZsd62rdxEWxUKMHcDQdA7gJAb97i5VWsrUpL5mjKCow1",
  "key13": "2V2fQRi3C544GXjxt9TYoQ4ihmiLtnxuq2MascBdKDp6Wcz687Cc2vrreKc5s7QaGe5JFs5T7zm7JKhNyHP9Anq7",
  "key14": "2ybAQ3h8xmW4bqJ7JkPQAfTdweBwPcx8TWCZ8CxfmnwJ7UCX8jQY3cYR68KHJigwxFg2Bt9Zovt3r7cvQNLEEYvT",
  "key15": "5XZca22T8KoRpWtAn8nCKikhQufTck72Tia3M78eFWcehY23MjK9wGsaZkzs343ZnWH4ATH1ziVrcve8UqYZqLEb",
  "key16": "3zoa7dm8wdfHs4Yyv45wDHSBNXSHBYoRwfa6WZco22rttJ8TxmfStPAGeimibuiyw8qHsQJmWzxcQUKk3wpWEhxH",
  "key17": "3mqiwtKyb4K7N7xkGUJc8KJZ89s2CJ6vYH3FAwo2jWnWPmdst17RmV9RaHv3FsEgeqFKuXT1AJB5wVMmsd81L4mR",
  "key18": "3pFPUj17Vxz7Lgs7V7LLirSMeGxTDK2EzK2NtUie22AbzXrZnAzbYVJbMXXCt7BgRW7BCmuwJ5q9ucnRTyrhHc4t",
  "key19": "3tjP6P2iUnecrMGJDRfuUBpHRT2gaTTXhfTBpmgxPYivqmsZe2tu6v3gsdvUEizwfmjTtFvRVtsUCFQDRfAp9Ku",
  "key20": "3QrPXH9rVSVn2ox3fz5AjjQsg3oSj51g7Bz9bkJxWeo4uwJgZNeBGFNwFTmCQiKJAhaV1RbSUpiP1j9V3ATmaQpF",
  "key21": "o4GwtGigGXAmZgtRaKEy1SXZpJQNjcGjXDTYxvo5hfEPz44L1Q9aeEvwDHAsV2BAUiLu8CkjpxdiHQ8SjrHBpqJ",
  "key22": "CWnD3mRA7P4L2rJyhcHkMw89KvV5coj7otMhprEHt8MQ4x1CvaqwHmaQwZkmQbjUpdzkKHDhsS45yRzLr8wNozu",
  "key23": "5vmj1mfVo79KbKBcbVEzLgGQ68D7ifs47zVc1sg7q36BVjM2dPTxp6TvopaK6M47cggn1vLtxMRnJXn2jbbqC2ac",
  "key24": "3gDRjYouCU3ZWvKpVRPcW75Pk6fKHWeUqukVjcPe7V79GcLgTgTjtJjwhp5nZ7gALeXMWbq8FoU4yTp1ik5SksCd",
  "key25": "4eLQ55AZxbwurng2uLD5LqDqBiVnFsaRwLCM2uaUeorRJFwLkZN12GTKEbQi85tpHyxoaQZbebh2pbHf2Xx9mthB",
  "key26": "4GEErcpBMpkCbi4Zn3Aa6jNZ5Reypw9bhyvPcm7ZYeZMAWQBaFUkSUaHo5NjywBSU1KZVup9jLAdFbVTkWB1hAvr",
  "key27": "2XJL33RKCKH34kBbdDDSJhvpMffxEKLhw6Ed86SfTxgFmbkkbu8H2kBAJg2wZPv8EGVU43koRCw1KKiUPgtPCgPG",
  "key28": "4K9gEkSXw7CMbkXqMmwGpHpRTx1M9zjvdZd4Qh83YdX6kxS5XmTsbGTKBNkZwPn4GpQYTZdz8VwvsJktAH5vZuxx",
  "key29": "3XcwpbLMTg49ERXtt1x2hB1qb5CyYaH7mwzms3y4fsLB7VriEiu1o7jKnnRkYfamqcaYGUmRvkixdcPfpSp35r7o",
  "key30": "2unNX1TUucFgYp3Laift55n3xuvQRzSZHEScYvy34e8uFKeeqxsGm4UE8w6ob4koJssgs8FXa6Xwx9QFZLAhTeBs",
  "key31": "4r1GHU61La2taJDvaDJrhrh4pwJz42RmJV9ucCtTGHi7XtegnkdcXvgWjxKPPtPf6LHfmchSwBRMfqtHdBm5FxmC",
  "key32": "4StKgf46i4nvnYvZFFBYimkTcmRJ8Msfr7NzrmTr9VBCKygVFEwjeoCbsQ5LXRRY9DenECUE5kahdddLccqWjiYJ",
  "key33": "5SeTKzdoVKoW64DYswBZq6Bs6b41Kmv43WLxMXE5g6LirJiUH9diE5z864mBkLFnjXzhDik1eoiU3UgzfgJ995nj",
  "key34": "5jG2ScJVvZBW4nf6qBE29Wux9g3253vyS5SZFqw64D6DQGeuYx871fau1WvyQzBMRwkccnzhALa9WVxui2bs47Hd",
  "key35": "LCZX435V7n8bXfoaDxZxKLQQ3fxY5DbVhPnwLN4FK4EMLqJwooEuZto3RDirzvhZyvgXnBWGmM1tXNCDfATebse",
  "key36": "5REAtojcoJnsJdBx7g8yXy2ZQjRSB3hTusPKUaWLVg3zoMgdYp6KLpNYUDJJ6Ptm8bZSwsiRKdMn7k25YJCoHhVP",
  "key37": "3nSc2D6GkeLfxxV8WPspBV3RirThy26PnyYxpPkrFv3G72i6Qer5bHXbeXnSbXN3pxGARcrcgankfUVpZi2tHKWx",
  "key38": "5uU4agPHfp6KJkKA725Ec4xA1FhahwB8YtY2BYoNVhLgBPcBkxzSySKpeeuzWdcCua7ruDandUUmc6B7s6g64vpi",
  "key39": "4CFkso2r7QpQg3TykNqD4d3AicJTQEYy51eiV4qbq8Sb5MyFFWCMgbdJKNVVBgTJPtfJeiDQJe8zotvhyviv1Gm4",
  "key40": "7AeToQgwx6XS8eMAW2bCBjUcVZ5efNPMAbksTmcHyyzAReEC4jkwECmgye8THNQttugx4WUyqnhS3bvHgx7awp5",
  "key41": "BJhsa5kWAS9b1P2t8j6thZmWwv3YjVKT5gFS5XZRwV9sRNLiqditfc4W3DCGkgXt9t4GgRRyNVF8vBmtbW6Z5y7",
  "key42": "R3boQocwv8wchnwGpfd49XNLDr7bZN3mp7ykdSZmxJKJCnWoLiitjb7Zcph1BQnfo3BEi6DeNr1uSKMjJvCpw4z",
  "key43": "5Hk3vYEcdASoNPJ4xhKCpRpGG4SEgcq4hB3oRJm4qyKrPp79Wc4CesLtpQZBbkx95d7aJjNjQNi8sbvVVcy6bo7F",
  "key44": "37csZsnkEhHo4C5EBcCcGBty83z8JnfXhfJF8iyKL1jxKpMHxEVQXYg5a1ECzKSuWmwA5opQgLFVmLwVwBWwvfPk",
  "key45": "5ehzzCdBQeHBkfF47YTALZTuWqDkF3Q45nWreSzC9W98KW5CavRA5Wg39RyDUP24tkjefC7CzZUqGqoGdM9nmzNk",
  "key46": "NqC3i7vUvtLvN6tULMnxywZjJCmHJzSueQog3as4zRM1VjxmpqQ7a7FNJMrJVJGyBD4M4P1En34kGcHWv8irW1X",
  "key47": "3Z9kMNvA79mNadb1pzKWTsWuT37a4uk8Mt9UEyNTXkG3WHSmaVDkuWbWZ63qFLGQx6AggRjojiHcmWsC2JAebnsN",
  "key48": "4YgxobcRPCEvNUMqiBo7Px56CQHM89VN2gBJngRCbTceJjnFPHKUqLGSzWDgnwGBCY77jaQ7DJ9n6kSHvLKvM64J"
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
