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
    "b4iQPTjDiWaRtM9BPzKjLRCFtK4Ejf2JRi8p3CTFrFk3UvGJQA35NLDuzBFXNPiS51oi118fBcFLCRopQ2DtdEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RZnuJGSPgFEf9WX29hfijR8dvUQVfnuhUnnqe1Yh4ZcMxm5WXqThcoKHBhL1VbiPYaNqnxTPFLzWUKBNSLAsqiz",
  "key1": "MPq9aPS2SXszXT8XveatZ2MonhmKm1d5G4m3Nh9fMTyK7v4QMVBHTetBpzyKG5vGcco38DeBNKMiHtG3VHdEtTC",
  "key2": "4ZqSJY59SZBibRb1Cw17UTbmtnMSHf2g7iYgsbSjbGytiGMyh12ikuJoaEgmSYWiy6rgPVCxuPCXbGioQMNaD2Qt",
  "key3": "57Znpw6km6DyCH3htj8SmNMQamKTmd1LVTMuRRdypeGPxYFmEFP5frqfvfLupcVMTMF9uZU42sjtn7PKctraWPjc",
  "key4": "2qnhTYX9htKFVfvDwhHSE76W4iQBBMhJWAYpoVc1EP6vvhthmu4L8hbx5f6RykyQ4DL2F7yxhxRrjeDJPS2JNvAU",
  "key5": "5FjCi5emf11WUSWZ45QZF2htTRW8CbKyQFBb6AN1ZRXJzVoGrU2H3jzXi6XkDRXjbWa8N8Rp5CcmQ7ZKKLviMU9x",
  "key6": "YcqTm5FSToHWg37hjUS9TSNfoQiHu28dH5tfAdfxxqqvnJbL2B9PaLJAbZ9BxwG467R1qo42xpk1NBPjfrCyT8f",
  "key7": "2JqFeff6JA5tLpCMSaBouYk2odqWiTyYhFYXiufGnDVshCoZEqwuyMgpDZuyfJemTqiJnN8mTBgpw7WWmKTpUGDG",
  "key8": "5mUAobpNznRUPrXbZgWDauwnWyTYHgssMnMnGEY5RzFmzYy24d5XZiLv6DnPvASjwJJ4zaXSRwapmwZYqiZqRVHe",
  "key9": "3viuAcd8MMKabwVWmaCgebdjzfzzQUn67oooXA6sur1Tp4buz6cDRHFxd8NkoTobUTc16vRUac4vdaEAKUFj17PU",
  "key10": "28T2WqNENphBBYJZgGQsWAhy8dRatP1RagH1NfywwkYwM7Lv5YpP8tgVTQsBYmX1wxQMipw9C3MrwLNRncJohGkv",
  "key11": "4gYGam3CcPFRWeVAvWVWBN47dpt9JZ7BUd2FLFU9p6hMSkMmnDbtD2tobW5gm29HcvJgXTGRvHuQkyggzhLHYLNP",
  "key12": "29qEFokpYRdV4uA8xeNAjx6NVVMALG28F957N9n9vyMrUNucaYmLWQwkrN7MxNXwDrN9T62borsWbwziFjMySRDh",
  "key13": "2BhUW5jwGz35oWuiBeySnmp5xaaEW437nqL4Kef2a8aJdDeHrjaqJ3QaKyzyxjNf8PKnUXy1tbumVweffomtkafS",
  "key14": "5P4tLtGjL63Lq4kzmkLJZ7VQMGNeDcU9xZpj55C83CZFKyePv2C9HGxdYfuJykkLVYiZ1YB3ttAoguMSysdFxH7J",
  "key15": "2iiNyeRN1JCWEif3DZkbY2mjS9EZhP4QaxCQgRJuwbzM8smvjPHysN2r61yG476uYZicyhpK7ULHHDSXYBrTqy49",
  "key16": "4ky7TRXnDxeYKRn6wz2D4ahZJTP7KLYeXEsdxziM4YwaTeA9185foPaYUSTLNyLnAsbuGL8x68RmxA52EqDM4uCo",
  "key17": "22DCYbrGhZ8atTtWZi5PEQwPD95sMQwDijL1zB1kynswrEa3cissMAYGhgsRvuCADqyuLkcKnLunB4ZD6BQzFZxV",
  "key18": "4RZRbGfob9EvK7CMdUfWnTTv4VzDeZRuiSjXDjKUbaa1utW9k3A8qzXAP1LpQXqimig3RvCiRTfgH1vLrU9xz4Mh",
  "key19": "4awmbDFHBHcmtyvoe7P6UrsHMcEP2MPUTGCiSCX8oyVq4o2RWYGedf9LaNqWkyVhRcwMnN1kyErWbuCtLPFmwAfL",
  "key20": "pktAhamfcHzN8coRGEf4XEekgcenukB4wsJoFygYfomy4YTvrKfQqQdy8WFUTGuabtKvoajhnJwt7ceTtaPQyxZ",
  "key21": "4RfxqqxhtDXCrkSWuXVsxqXwhfgfZdjoUZ2NcKj2CG2j5f8dX47mMdoZPhsrXuwaA1WMBGZhSRUA15sjpZJT16PW",
  "key22": "3CkCvjHcP4vMk5HNvdCc1cth5FpMvTpcvKRYRD4LhPCohDLUJ5gkqxhGz22TEEXBcLw2Cb3vPTJk9E1Rk5FroeLc",
  "key23": "5NMFEhWMK4ndAPLdG4MdPKAQtbLquU6wJ7gjYoFZWSx2JC5QdJFUUhh7NwFyicX3UQUqWD9Jm5xnhwCfQ8Fpcc5x",
  "key24": "7AyeLpbJLqpt5nZ2RvhGzHCHmjxzTNRzPEPEbcUeJLfMfY2uQ35RQ6dpThwiGA6FT77ZcbCegC68bjSk3DXVP6K",
  "key25": "3JH8g8MMnoq2RWffY2yx3PfCmQioXcHR7K54w9x4VNyNmmPyPWmqJvFuwX3tLrQxsJVXF7QtkfDUefiJENdM62qN",
  "key26": "2Wt7ui6KsQ85mftNQ9sPtaUpeKYpF5dQth2aB8twwtXMJvM5XSvcttWFhUeg7SaqAbX5dw6TFCbcU8K1zu2f6xmg",
  "key27": "2Xe8C8yqYB1BwsovcDS9Akf6K87TMgRmfkrnELBWZyxJ4EjQZ7Ksfrw8kbu2EegsNe8Fa76bNrp9BwERRh7wYfam",
  "key28": "5L5KU1V22g8KzPUphQhP5wn3U7xxqByFvtv3Me6eEMmdjEJDp4Fx9bsRJAJesY3bxPGfgyVcHs5zSkhx5YnhqHJZ",
  "key29": "42gXt8hX3ieH48oU7siHQ6pnU9nQcUdrsiwFDkFQ4TeFSVdimEmsU1GSjtb1TrBZiYbLhGwCr7xVgKYFHShJy4HV",
  "key30": "3wXEgyNWYahSXq8fJhfRsREoaUd1hW1ziNUCfph2eB2Jy5CfaRh8AyB3Yoq8CSf1DxcRYQvr54eA7osp5i7EjGAY",
  "key31": "kKT1tzFqCtBaeoD3f9BNUVViZz27cZoEpAXpnmE1tJZJJSAz2YAMjpGPY6nZZgEJraFvYE7WXNS2FwCjXqE5TXM",
  "key32": "4DDeFo7sMXNWSigQNModiAHmd38ev2sqMgTzFo6MW67MRk7Famf9S3xt7m2tKtNd5RYBZXnmYJG2t4EfigjsxuM3",
  "key33": "5REFfKojqdfftUr5r5XyN8LSe1WFRAzMc7rPLfcf3crsT3K7cbeD1YniQ5A1Np2A3h4NJEaa4dU2XgMWHRe6Mkvb",
  "key34": "baSXCSgJhHMKe267qY6FDNpa7Ugoshun1rC61QwpLiTff2ao4tCcYRr2Qpdw5v8pWkQeTkK2wvCqUd7RrxUtZ7G",
  "key35": "3CfUW2Rqs7ciTgSYvVxF1edjkBnDXniJTaP3MMp1jwPqyF9J4yrtJoT8KR7kLrn6ZH4AAecANdfBYu9CekGtCH9b",
  "key36": "5aA69MivQy71yde2NGzJr8e46EDU5d7nbAJbAcuRzPwsSr5yMxR2doK8oe9BcipGBdTvZcpW25pG5RaEW8sxMdxi",
  "key37": "3uAkkVQ3pLa1fsLgz6GiWAH96WFr4f94jQRcnDBTD34cVsF8jnQ3MqhY4AZkLwXd6vcNPBfZoY5xUciTNbCHNvCf",
  "key38": "4JqR1iurF83Sxvd4gg3K9NSRYGQAAtsWhqadxThyxd9Nkqo5vHUxLfxsHa3pc4R1WwD4hHTL9mMQffW7BnmfTPxr",
  "key39": "5oJwsmsmNQdB5un7gJd9AMQ9kbMF6sQW6h5wiBgof7eRpL4AfhrkrCdYJyere7DRSHcfqxSsoCnqKavvZsyLEcUE",
  "key40": "4v6hy6qJLCbakFFdoY9PDVtEy2PTHQK1VmDZ1EGPizRUuY7mUmCpU7V8zGmESfckqwmjog7T7RT9NzKqPVg3msZc",
  "key41": "54R1ccQLe8PaLdgvugyV1uaBCkcSUAumqS1QVTxBCutwwMRjKxDVNPeU4uyoG5YEab2WJhtWi6bLoeC3pNKXU7mh",
  "key42": "2uSKr5swY9JcH9rD8P5WYyv2Rd8TfVcwVBSfFBaF592XXr5Vik4pAAsF1TXeDFZDUEnSrVhWc19vCi3XnJY5CWRT",
  "key43": "63968HEb5SRL1e5ZbpH44pvMBHkvZpyEqLpLCERGJ9CENnTDoBKouT3ea8s6K5XrpWgS5bZ45Rm8AhvRLrjMHW7S",
  "key44": "55T6HiRWE5751Jogn66kGhbjQ8tMDcsaZegxLbR8FszYxrBX1ZBnp9yPnWHThM9jeJuYkvsZFPyGpKpQyXnrrDED",
  "key45": "3GkTFeLZh8RcZae6hKRWQr3RA8dsZn3ts7iiuWH2SQCEoo4cmH4VqEz29tQVQdnSkrvx8UANg5jSHF3NsEi58xSS",
  "key46": "32Bk16uJbQSfEgMiAM9uEA4tiJ3naH3QoaXHeJU4KtqmpVM8EaDbQbpji7Q6STr4xPXKTCYuhPSDWhHoVuHj5fH4",
  "key47": "4xzMEavGD3WTKJLi6BXZtWmPfmbQocaxJHqL8ouJXkiGUqMVnBDBdofiUJxuStQXuhWLCiLtnLkmTMu48Mi3Upeu"
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
