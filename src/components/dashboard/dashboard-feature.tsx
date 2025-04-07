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
    "5UzKL1iBfs5WhwSe6xhbrkFBcVJkwLVGtQEyFbktjext9WG6gUFdiwCgLJuP3QL83iadZbUCxkCPUD89Zigs8XkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46viBW89U6PefSNQQ58xtajrPndGxcJyNDkdAt12we7DNwZrK1fpjibGzANVjjQZ82Rnhp86vh2E3DAk7nfsvXwk",
  "key1": "4Do9AGb4Yz4QQtCSTmgaEMVn3w4TYxsq8aTkHrA9rAAADoQhK1PvzB947bVnVd9QFw1LBxUDu3BJnEuZMnh3Wm5e",
  "key2": "A8gdgkfMVwKHVDjv322q4654zCnAs8hnp2QAnyDB7wpdcbM6upECthbJxBWxp6KPXB3jeWXZBb2iqkoTsEB9sys",
  "key3": "2fytpnrhkgTUG9PQN5d7QiD9tYbKf38Mm4QxiHKJ8R4XbJco6d2AAimHFWuuTNetZUvSmzedTZ1mgHHDDVPwaPVM",
  "key4": "J8AuNiBtzzJM7pzWCJs11oLM4LNg9yEQvVTbpUH8XHBMT5Q6YoAidTizUfrjBiDKsdnrRjPn3Pa3pFnmPHDpsCA",
  "key5": "TkS4ozSGds44cLPDuKyQzhrBBDHpYMYKohr87KCZAMGqQhJN3taKaUV4avjJgcmMzRas5CLZYP9LN3JwarPvk9v",
  "key6": "5VFDUrFVkoBiCg85KBco64v4fo3eUCUFRPNAUvXZbTpqbNQ4fQM5kZmL5QccPUP5BujTZZT1xAaHH6jjQvo1oM2Z",
  "key7": "3YtQcoBuS1uwdgBB9dDusEF8Sb3AkkRWXGu74ZqXfrVmSSqY7Pdvdm91raF9o4paVh3Bq4J4EwtyaNmMMh2t9Wpo",
  "key8": "45qbHXMQ6eeaeuNm5K4xa5HrmHEgm622RsRoQ3L2kJuT9vYwkmjij8u1HgDPRncG73Wyu3MFfhsikCkwEb9eLA3J",
  "key9": "57tzHjsZPCtWgLjNGnVfeJ6okvk2c98W8axhkCdnCmyzXvBGj2YTFnh6FLPUkjgyzZeLMsmFmfHXWiVm66v2TaaD",
  "key10": "rmLmHKdxkyRf864ubGCvrgHA2KxFFPmMbCLvWyCcoMRE8wtYSH5wtdgfsry7b68gsfeNH6NkT67hBvuSuHvY5Eu",
  "key11": "4sLJZbbDCt3Es2JmMdbfFsEnpu33c4cT933gNtdMM15v325aVWowCcWBA25e4X26nTKEbRzEHhNnZeYL1q8TmsBL",
  "key12": "5KsqHruML4tFZ6nnMSHJR3oLxX5kxPqVty6i6Rz6btADRSrXEUup4YP7D7aXrs6VDshvEGbaJ6bkCtMtPLJ3mBws",
  "key13": "5TAJnRAUgg3P8BAgoZB7nqkqZvndxzhPr7BxMm4wm6ZXfdzKU5jiLqWYk39hcU1jAFbSMJkvefARSeEfH9hpvcBc",
  "key14": "2RTKT3rfMiDvv1F8zy7CNTwt3NfJkoamZBS7CkpE4t7xaWBB97r4yQUsp4KEXnbHY5vBLW8KwLkEzxCRgvdPGUjj",
  "key15": "655jTwbHxdEdvGZDnobDst2u4UCHVm6BGzwdGEfmUxojGLkcg453TVTdgsJH72Hft4i3rKrAmtweArHa4vprzE4t",
  "key16": "3k9DeXDv5MHiJmBRKSgzvVtEvcSnnCeyzvKDGcLx6MyqyqqrgdfCxtzuTVrcqcvzaPaiPBAFHwbLzjn73itXTXqL",
  "key17": "AfbcAaCLpKKNzw4ZYG643zWQ4WJDM1qBvCDSLRAjgVyrtQGaaDLSgmJa6FqZ27tHEYyhPeeRFMkMQDAfySofjuj",
  "key18": "5YLjTpHF6W92PLE3JhyB9mJsMWwQRYiCayc6FxAqnxiUvWpVgSM86aZFr1yfY8N8qCFexxRnU9yoGRxdqosvhXRQ",
  "key19": "5iN4tzfvU4v9LjteTWmfZWVnVXfzP1EkvtNBzQaaiiVGjmdjJek9ZEwTiEQcSneQLZ1i6gfEfha4ZHurLfzJdkpi",
  "key20": "3nBkT2w4Afg8L8239LoGn4zNNVt5pdA1ntfYYZUo4meNpfJCMUpYvEtaqHFHQ3Gv1KX2Uz7jMhNcf5nZtUpEduPq",
  "key21": "4ZDb8fERf4BcmacgaDAkSa5ThsoyNaB5jPMnW39pHFomuAT4pEWAHQJZgFLRiyKVHKBtt6xXS2xodRAjDxb8KMUT",
  "key22": "uTCrNLbmrTCHFAY7JKxZE4G9wyXQCC2RzEo94h9RH6suVa1cGCuUmxgyZmTksfSYEkrHGmu7pkxCnSoTDh5Z72u",
  "key23": "2NWqbQPAhBBPkKyn2TBH3EXCsmJZJdvq3Mb3fUzvPNL4SjmB6h4LjygDcCi3STgQnTPAr4DG7S9PgC4bT2qDfaNP",
  "key24": "5SeG8apFgGq6rgVkjUJk5gGFQ53LAqqbLcjeZHMKmTNUu4JYbShtiCuuL6m6ZUUGhjg5RsFka7WWk31KENHZ2Mut",
  "key25": "b53PMPZrQ8qGpAKLcusv5JavzM4aNpnPNijNYwZhBz6B6ygbZmpkLAKWXK15J71kzn9uHjhL63zfqPvvG9CrHPk",
  "key26": "S7keRk69rXv7bqGuCL1yp8NoMS8NDGfYh9SxUCoiASe6QFpHyBjdKMAWvrKqpgu8toNMZRs4aW2sZ28uRnmqxqL",
  "key27": "3SPapQpNt9UV37bcCJuZCN2zfdDQBPtdxnzkovG7CBcXt2j7565d9hcqMKHw71hpKhbxiZAw9iHh3qL1RfBajvqH",
  "key28": "249rxtrWsCgQHN7LFEusXrKkb4jnij1fR5WHhXX8Wa3SFvN5UkgYzbqLzDNmxXszWhuviajYyjAWXrEQBcPytokQ",
  "key29": "rLmYbR8bXKicpa2Z1J3m8gXuTBa221ktP8n3jAzbwni6U8S9GUdLVvFVMRZkyGtx7QWCNq7jxQZpYBsrMGrmuTN",
  "key30": "X19fohj6LQCEydNeS8jRhpiQ5iNGUYNxExiTJi5861RGsPnFkQVmyTmmHVwKGwaFj69mvYEd2GsWgtG6swDLWtL",
  "key31": "3SoeWbK89oBb3kM2W1GWyAMjFU1csvzz3tkQU4ypPJkkzoA7oRhT7ZDuJFpTS6PsKdDn1Zc8MpgdKsaE8Hx8onbp",
  "key32": "2bEr2KGMdsgS5wcckaixRDoJauMCSg5d9j4T68KiGEa3bmwiWC8DhED9Eo82zizFgKUrqid1aabfXNMpHuUbCJud",
  "key33": "3FsAVuLzvY8eGrSMMB8BLUC5kZueCwPFBLsMvkk9wTACba8H7RzK6TXshhgTdfaSknnozy1ZacbBidwf7Xzt1Loo",
  "key34": "5jPpcKYnDCHhVQrzTAxwNh7hdEgPLYxgLgbPdSkyC7as7jeHwGvtSNDiqcYJ8ZzhUN7sczgY53JJDiDtWTnJ6cH7",
  "key35": "5YfU2tidgJtGiQtykHaiM1GPLdfvKXMBANmpj6iwp84UGgGzASRZDCWaN1GVHhfb9GcLvie2AntzxA7q4384toC",
  "key36": "4WMgmcqENCeBtwhzNWLnQ1ZKvqKwxSJZu4aj1eRbqi8AKJpGGpf7ytRak97cmttSebnV7HxTXoNsjCCuYpkDjyBC",
  "key37": "52Qqbu6chAEJwA1P1kUtWsxrwdJZksvzJKCXauxaZKq2vRQqtTx2MeZnBca3BDvqRUU1FuvrJBHyBjDZuD1XdBTk",
  "key38": "o9VF8kwEnasSLi1pnhRV1WqKeJ6iYwd6MkTikaRBRL6DAFx4pN1WRWrGmgQ7mrkH6t48CQWtkJH6bj19M7kG4qj",
  "key39": "YvHQ6JQd1vFgza96LJpQLvoj9x8q5ShbzR7ThciH9nXyhHYTcB2avKri48hmKLQuDFmWY7BSEgfqDrJF89qEezL",
  "key40": "4BSe4pPJdS6P4YibCcjcmLYhMUyjqr1CaCgHt4ZUPuQupn43QbXdiqfZPcxNs4ZqFXycUhoFdPacUCxgX8bdnRvP",
  "key41": "4RXNrG9bV4JDSwLopjHW7J1XcHFwprwxzu5rEGbFz9NgQ6JwfviSaUhtUjouD58efhtcZsNGCp7nyoRhtTEtGMt9",
  "key42": "42zea4PU51fWGk4zM8H3qVc3akv31mJu61nCBWLSY4FFXHEicPBbhM7DK8RevoWtHACBNKfPiSjHQcsvMyxta161",
  "key43": "27ZxfYBGJbKg44KDGGRKLsYsBKixuXtYg3LexYziee12uZswYeZeo9kBtFBN4LiJjHCkcDp3RdsHBaKcSTf8a91d",
  "key44": "679i1p5CHPbMLReYsM44i1L2Zs15Tz1EKKEg4ZfcXoeugP1cwNAS8nBK3E1156HnAjfm4tu8AaqMvUZ89NMgrhEF",
  "key45": "4wDN7qS4HywcP2DxDEkpkwMn2g1QHMC9qgyd16h8FBf8X5V63KRuNttVk3E1NgixGHp2F94jYLeGJ8XbPnbzPS2T",
  "key46": "4tUoT81Ry2vbbzdXntFq8Dz9ftq2LADkjTsMQtxBcrdJSRNEKHFdYp73KM2SsxsFUjQLTLQK6KcdcQGb1o7eEbNE",
  "key47": "3KgKzG1Hn9P8ohYZZeZeFTdQSippbhBL3uF3rSKZtu32eGWwkSNEBCfPUbb9Qq1WSXZFi62hUfDxivKfzzoNpqs5"
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
