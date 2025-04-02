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
    "4ZA4XSiuPDYuXf5cUAXAfgnWU2wSqKJwtWxtdN3Zhmixmk3m2FDCoRAoXtgxHheizbZFn1gfRxZqQCvXzMezepbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52TrytxoZ2q5wRzA8X5PUsfd6vfxzS2oCsxjpu2bgFgiYP3hcaGZZStuXjYmjWCxjNWo1mweMyHzZKoDZid3hnn1",
  "key1": "4WxP2mu9DHzW45rAWqg6WH96G3KxPkLsbbmowKfYqiTv3cgNneuGkzB9tvFhNNFD77T2uERaAeFmSc3i7BYPacQE",
  "key2": "3qqXRsmeJXchqGouL1eJfJ1oEt7QAkqouAWo9z8Rgrkrq2uPQN76HuDoht1DhsxRMKRiGUKkzw8g8tPurW3SDpbG",
  "key3": "5q9AhJTxwQdGceFiRqr2RQ8z4fMx1hzEXuEkRuYuy9BhVATFf2eChziDoK6WqDuMrPShcehfJRPy3urpLYL4hs5m",
  "key4": "3hvR69peHWDXmwywtubn8dAubfM3BzQduVJYUBj1UbwRAZf9KL5NzuHdPb6No1oH5RQbPaoYAx6M6dudrEg8f9KA",
  "key5": "4f3Q3De8NCb3mXMzM4GPhnxx8MRSNdNqchH3MFdadSXm99HfzFyRpAznmWFzL1s4mzgynSv4MNCEygURv7JTiX5F",
  "key6": "4YZzvyuUB3551ycJzRcbxVJ6QdQYwGpqWFPhAbrajnX1AEYeyYeohEiz9vdjtT5XDWgnxha3k1H1QTRqFXRnw8AX",
  "key7": "5DonTuJh8EBLZQKbQHyEr4p4FgGxdzdvq2TDYizYkVSeT9SdHUBqf9avwiGn9wmqtjfbZtdMtwFrELGQvLhZadXW",
  "key8": "3H73XJpxZgALdNaQmr3L8vAWmrh5SNCaidNMYm5jqh3p1hrAT85nRBdK5z4vydrKcgZsaPVyCHStbnG99vg2CsJf",
  "key9": "2Z2xF8Yd2AoTrVnGAjryeHF2jc3CVjt7fh1VWmUaXfe6ceVo7obEiQmavg3gqhVYAiiDiN4HFik6aMFovETEExfr",
  "key10": "2WZqKYCZfMN9F8LpEEff4cY8S7Utcy3hmD3431CdDMHRZR3KoHyCShSwpT4yNUGWJ5RP7JffEqGYxnEQe6vBMtHZ",
  "key11": "65UZX6WLNBHapG6FH5vXkySPYDnht8Q1aSYMipJ7DvcqG6L1jAYg262ESYS29bMHn87bqVKiq2VeEyjpvVwEx2bL",
  "key12": "4FDX1nKrmTTqicupDF46EAvnxrVv7NcevLY9ccYh8aj8o1SDJrKcZEJdGC5YKiWuAYznYsvKsigQiGsfEmi8x5rM",
  "key13": "5pepdZyKdoHkTvtMX8Sk5urN6RvS7q6WVcnrqZspU5HRfe8UVWJ8ERxDYNVrq6mKiz13UKMPVqfKWQv9ZniNixSx",
  "key14": "4927CTnPJZzp8NZiyPPmwxyD6tife1CqqSLA8FAQVQh4jpvUU6iDAGUTVYNnTx8fa24MgdjBBC3x1QzJmXbzeCfd",
  "key15": "22znmAi6XbXRSdifgmYunytSAERP5bUM4VwjwPAQSHMUSJqftg25rzLkicQsuHPA9ePSS45UfitSEPJhEWWPX2eK",
  "key16": "2py2yTXL3MAmmbdWoCN3wa4JjT1ig3pYtjkkpuyp4zg1Ec6tUfevrTmxWxFyEbhHrFtTho2L6TdXpcuTeBwEMJ4T",
  "key17": "vHUDupvdT7j7nLatcjbvb2eE97YsK5mBJ43WQVJQv9JL1mvwJdDuVLvckPt1SYRKtx7oCB51gm8nNdK5miPEHVR",
  "key18": "EB4wtrdLWJsEJBHJ5CUpdNRjhx1ZaojSZ9FogHWUC3JXg69YLChRR2pYmZyXUTvkYgj9vrrVzBF4T56ni7Cac3E",
  "key19": "4oLGd8fo3F51aCmcokBK4iFXomAAxi7kJoyABMLJUtCLruRjf7EJmthQ4ZmxxeFBfkvnPfybjWpXwMxPfrHqv6gs",
  "key20": "4iWUxoRQEpW7ddAyVRwjBc3mEQYQaGbSXTeMkJKmyMpMJrf6bxkzHbFYhcKpahm6U2s7g5svkmPVeyPPCty2JJZn",
  "key21": "22StWmHfnAJBPsrqnfqmMPbhMJK6VdJ1S36YNCTYYD6m6JoFuCaRBM9H2qiN34qP6iwPYPzWjU5wcpQZnF8yGJPP",
  "key22": "5PPgqH1xjnGSbkG6rVq7YAc7FVQYoTPzg3EtN49H8C6gmQwPBEPRzh9R2vD7R1icYVJS8xMHaj4pW49qBLWLnypC",
  "key23": "43FybPb5f3NUZSjBAdhhskcq8BZ1cN3WDL7Wmo2Nm52jCnD9Dd7tdHWheVa5ztmBudNe4ydB1FKix9dhNskeTTnj",
  "key24": "3Q77M28NydCAMhNz6EzJAJf58C28KwA6FRuuV59dv1JGc2UQ25E1h64Mp5rp3zVAjPjd5mqWoeDyn1AJSX1iVowA",
  "key25": "51N3Tw8r7Ux9D2w2xUid1wzKkv3k5KWRMG3rEH96VGBrmo6u2H9eJAJe7fdK2LTxgscZ5cp3qSK7366zyZXiJWMU",
  "key26": "5RHAWq5GZpuVCAsLuU8duJTR5dqfvxUEc7XNBuVYhf2pRebVg8cvVpTEqPVzhGnfHK8vRNhzByMp8QnLWVyGmCFu",
  "key27": "4ubhgWyZp5HbxG2USVUP7Zz9KR9FrXpjX6YH7c5gUMBfhqcSL3nJgSjiFrFvTV4ULCbyBBaT26YPCghHTAukoDbH",
  "key28": "2dpy6Xpp1FLkyPMQcUwAvcEgLVbNiXDE2L6gkQxiQvp6P3VMJCuFJrkvFzo9kgXHw5ACmodJiXbBM6k4hvFCAtzG",
  "key29": "4J9qz1fPvm2yQBFGZp49o9qznFyENDhwN5uLQHSNrLAv93kXXj3WGPStBPyr1fs5oTK54C4PUMpdJfhpKN1Kda2k",
  "key30": "2AwtugCunJzrxdMM7CBzWZoHdmBHUJEUUe5p2CAjymCC8RnhKFLyFFKTKVb2c2UwZghgrKECVYcdR2ALEuXyKCDC",
  "key31": "41E2FmzjJwLgRAZ9gXjqNsnPetp2TVNAQZF36jauz9NJiSbrAhd259r4sdSD1FhmJb8tU2jPNLA93eKRDrGb1s7n",
  "key32": "3a5VthmyLTXBYUxr87v1HQiCPwqvirirmpdSFW7pGvqKjrAWcXVJdt3NcpLEZVAB3BKuDcxux3YQRXjKAqypgGje",
  "key33": "3d4Y9RMVFHXsyiurZHvi6chNNc4VELCpa1suJtgBHcHc5DV87QreJ3XUtFFugFnVkkwTed91523R6MhytUMYjroq",
  "key34": "25EsxzFwyN3ZRi1TsZAsnvQHthih3ypVH5gXNKbwwLP2R9rEUGSskUaPWpNxEns2WqFTGMqa4DzswSqVBKWar4rs",
  "key35": "eFjLRTuqgsfmn9pQx9aRfLbhHAyTRm3qEaBhzAEByjbxFreE1vEjeWmmu8UmDWTBBQvX35SxhdYR4ASpdjXjB4o",
  "key36": "3VCMWrAYzpAiPQmVJX3iB8QKbbFLfoUsdZo7bwo67XvwgDXz6kGnhES7T8fabXawezTKenWAxoS4SSjJ66Xwv1Mn",
  "key37": "4fXmL38WvJbRAaRGtWFgyr1Ydemi1ifKMzwUHKm56TLdGTFUZhDuDCTLhJAVrccgvgYqTQZ7oNDm6YQgs5J11BVx",
  "key38": "3WHMiEYgkgP5m69XMTeL94xbnR7kzaUJcaZMSCMqFFuzrej33oLErbXYe2RF8ssQBVnZyvw8UmAPEyqDeBa6A2Q2",
  "key39": "2C6frxrrND6bZZzYr1TCqB1EeJqnwqqLVTJZcNoVpcrE1prKiEWzu3DjNHwyumTxgUFaBMMvbKwpijCXPgHg6TMX",
  "key40": "5TAPucZKq9kBpHzBmYCpaJX2PHMuX5YRnE1pvtsMZ9cbcgp46HvzfmTmohKd5ifT68Z5D8QiKpaTz8fJSD5LdKM2",
  "key41": "2oZyy3DMbJSE1EHPoL8T7iUPBZCHE1nbzVJ63JoZC4AjfBATuwve6x43Xw6Y9aVyBT94b5bqXufNfsSVaEwBCSN1",
  "key42": "EXb58ssGKEGX5wdPNAQg3ogqgfLpEGtmoWKEQWcB5mVTNY9WGHGD6YhhiG1KVzf6wXp5dMJp4fRoGayKmhHsYVm",
  "key43": "3EZj4sFWditGLqMjc251YwBeHhgrHwS538nDeHM29JQzBVStVEtSf1eit8Pf3XhjJvnJQdMrFw6m52tfHhjbkPqp",
  "key44": "4RkWYoNMyMb8Paa4HTnZqP5i3sW2GwqLVdpRE26rex4v6zvpFUgiBXVH9mRMoDZbJBHhHPHS8t5wuQ7mKCHaubLc",
  "key45": "3dMABrm1DWXmTchJ4N2tagEq487t82VBc7fvZsazDpn6f6XWN1RMN35jopGdo2irwfFuy681cnJ9fhx7pWEeV25y",
  "key46": "5H4ZYQddq9hA9YFyCW28eqWEQ1RuXp3sPxqUM3SEAZNyBfbBxbLA2AVMBeb1R4SjPSjAJuo2EfiTV6VgEVHTi7yo",
  "key47": "3KJN6rtGTXQTnpoVMhwWbCGicoDxxCz2rdyesaK3YNF97p5hZCgpJraanvtfbY57MNDbA2AXdcNWU7SimXNFn1ug",
  "key48": "54pvsFt8L3Pz3KdXjDiDcckw2nKfLQXdb45UU1aLtepsHcPpywG9tmsqg9B9fwA1XfjVhG98jx8LaTQnyyniYZUn"
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
