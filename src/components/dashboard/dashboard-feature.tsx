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
    "4kVodqQ3p7MLuspzZyqJ7ZyWM2uSUeonU5mphs9JoQno1fuV4q89Pj7Dv1JAe56g4nWsEsq7sN9PZKdeu5X8NAz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s2VPKrBRqyKYeNPeMW9sM76E1cTMc1Ldgsp1Khm7vPsLT6XWpg8oYkHC954skf8e92FYb9rt1sKLuxeeKpW7Gu7",
  "key1": "52KQE9R3rNrAhU625qbDtDho9C2vHzKDnFDTmQ7KD6Fv1WvL6kYEYDr8McwdRvq2uzazixJtGCcN6zGmdzqDZryB",
  "key2": "5cBiAwbcnsvzomqpETjruWtsufDpY6XetsANHiNYu9U2icJpqXffh42hVa2FKYBmRUaCjZsrsxXxcaY2pGCy144A",
  "key3": "3nUCQ6fdyxA36ChdbxAfF91f5icgq88CNrB7C5B6sem3R2iQ5w5o7uwArNbZjSHGjKydqioQDBSp6hXtrRMtXGqr",
  "key4": "5evEdeMPjwkTzZE1SuLEgYbP1xzt9xAZ8DvSxLUvNBHNkqxzEayyd68c3XUwyjDZ5CXQLXWPprQrEVbMaT42SvyS",
  "key5": "2GSJkuQ6WxMyYKGjRNbUtWxTMEfUTho7SoUHYtZi1jqnpDYwQigrTowLoHxKWcaUMpAJ551SDw1tmJEBNdNjC6gZ",
  "key6": "2pxQVuc7VwTRN6EzXRJZWPMZAfBa22Arw5VZBmu2mhecvQSYkse93yCMBURyCTedAKuRYD4YB7D3E4iB1WF6gMGw",
  "key7": "2Cpt7Mc863WFXkuT4Y8KK2Zwq4bsGePxGyXEq2XhUEBPFMJQnpKjnsMgjoasMQxPWPttBPSgtykDB3yBGt4kpauv",
  "key8": "4oqmojAvRgdgjCdV71w4oXnqATGPrVogKCmhiEjB5UUSgvCHJfDuRMWz6Q2YSiKZfVHLMVG17vgsMHV2rLhpM9sV",
  "key9": "nAzbvaSwisjP321HcMUwUWzWXzDwcKGf83z7ivE7LLmNpQm1DYn6UEEF52RBSj4D8W6i1E7CG1syZB5icE7rYGR",
  "key10": "3EmBTWwtWB1pAjfDCR8HW9fzsiKfiDuM7mZ7oWW8ebR1ArDQqtPpGcErxJ4gKFmgYHFqGBTpsb2G5brC1KMMdujt",
  "key11": "51YARoVVPe3VZNC6TDJQD1PJ5d6SSJQDBHwcWhaFmCxhMiH9TPHZQPPN2aXeQHGLrzzuKF2gqDmbCb7JrDxEDgQK",
  "key12": "RwdBbAdEwes3Hmc82VjjxNskUCX8NXSDWEin3HDviXVo2t989NCNxZs7H2LmGgpbyUHmwb6uqqwi4BmvdUhwdoR",
  "key13": "2os5QuFUD8yryfv6iddSibJdhzgsDzWF47dw5tYRUC4embF2DGWuCZvH8VNLYbqXQ6xjrWk38ypPGvKM9F6Lhdrs",
  "key14": "CHNXrhH1wkKBruSnD6K82SGpXEtm2yrzxhEJYhsakU6sQgYHrFnck9ckscHVwvBdByNp3KKepeKKj1hDHnz9Sha",
  "key15": "55H9BPhajD2FXRs6Uqcc4nFML3cPTc8LZchmuR8dSn5Lj7c9J9EnENm5cNgyR141efqbrW3R6VNxewtQ4ZPysYkA",
  "key16": "5zxjZFmjwpkR96DfDHJPE5zWdT66uwk8L8hHPGTtz4TcLaRWZUMoC8GeWNScAjrwEYcf4DC9T1AZh92rPbnbJ1ws",
  "key17": "2iD3A8NgGGWjozR3LHfSifMQvyMbmC2ntjwHeUrUhQ2qJGHAenPMmyEavwNwHTDTXV6Gdoh9BxCJ6qqYkcshHsMc",
  "key18": "2eCCxF69AF1yrh36HC7Qk8Wc7YcTbyRq6RjwFvTSXXTgajCq5bpz31chgoWXneMzPoiSjcZ9WM54a9b4548mDcEL",
  "key19": "66mYrzoyXT9A1y3YSf3nr1HkqtvRbVqdirBbKRykfi3CrwGQg1qp5XD4m58B2DCY4PrTU52CJcDUDKh3eKxDDNPZ",
  "key20": "53NeYSB9Bya8Va5yfq6xhQUXbB69xHeYAA9JJywQdFCEvtD6oEevqHazXcug8k7vurWr3R6rk3wnPD6czQKhLutf",
  "key21": "3S2KV7emB7qcnCKtH4tasu4ATBKKg64ycCthY8Nk4paiRZDDwyEYHH5DbgTCL2k9UQMs5yvpw3j8AmCELFGYz1PT",
  "key22": "5pYL53XCVe5sxjMDpAbnPHHgE3Hwh3znAygbkGkq2M8DXwB7em6x99ad3SnWt7deuJcjyCgQWkjW3CviVsTiKNvQ",
  "key23": "4YKw1VyV83sWECEu87Eg8LFynRmG5cCwz6iLEkRamoBzmievyNAD2bV6KeDNuddF2iqTjYLPNET9uynQt6wT1bpf",
  "key24": "TMDxxgyYmfMMkbCqaUdLf7CJZ2WSi1dmgUuecdn5kU8jBvi73BucBzWeoG3KNazaTRyFE6abv8uq57HuisTgFkk",
  "key25": "2ti7WR2ks63QjX5nXmWbbNzXE7YWP9EfsRRFFVAs7fdKJ6HeVPVjBehMMKKVJnKgLeuEHPSU8m3hrmHeFqXP39qi",
  "key26": "3ZSXjvC3mXGyKwpPpYzst3b6NQTmFTXrCp5UgRMJFzXaxXFMTuLHpeVcBGZeGm5W45S4tF7Lgn31eFwpxshEwF2X",
  "key27": "3QyomL7apFSYFmQUxtmK7CeYoHHnFYp8kSpdskRoP2osp5nW2MNED2CigVV35qQ6T9ZhxJEisPF8ZtrD8hUpLEFp",
  "key28": "3dKtHgyFGoSE8eB4VsNyBVRXx5wLnv4EckGmEHBjdWrgaebX696Ssx13Zts7q744sB6o54HiQAXuvkuZnKjYVUKZ",
  "key29": "38JJmeyMUCxfHMDa3YHTQZXJpPiqQJZeNynH9WYsSfFdbVHXnEW2gDCeN3qXHia5DzM4eJ5AUbZvMwojvekGj7Wf",
  "key30": "3ogDUSUgeAktdGxavbRqvmWRvxzVao5UZ4gc5fGaN614h2rWvR6ETAkzzWhVCqFC7MfcwtUBz7zcQfHywcEm133q",
  "key31": "4QiJXSyhJSzr3ZNdDv92yJzzxSbMc1q7L8ndBZGtw3bhsS33BBpmJZ31b7hs3Gu5TEboQFWbppQns2SpmPa4vLwo",
  "key32": "ETVupDvQvc7wLUW97u7S675DxPooYsX1oZAeh9S54VaZd3pYpfqnxWTVjZpS4Cr5REtEkt9943mbxv4xqMcp5vZ",
  "key33": "BxU7w3MxoUxRbqHhkSrK7CzcM5dpepzsoEG2RQm282BAKtkdJ2kGTAbAndhCvPBCzyPtL8u9u8WZeryjoP9Gqvc",
  "key34": "4fGmWDEDVJWCj6JfMN98TRdVyuHZSwRszyT7JuGcQGDBDabuG85vEdhwuLDFxy4tUpH4GBkeA8Ss1JkpMDyv3Pv5",
  "key35": "DLekqcmgjmuF31EF1QY66LXBbQGUf6vEB2f8kXdtVEdA3BchhU1j9XCfGBPcBdsZHhywd8b6s6jhYY43HBXRtCH",
  "key36": "5RiYYgnrw368dqLxZxjn9VmeTdRB21RG1mzQvM2pGbHZ9n9oXNTPjuTn71dKJ9BrqTBhV4ZqmPziszLyLjFV8ZYF",
  "key37": "3Euttz8uP5fxjPZorzRyTKwZEWarHo3xvf6QAUEi1wEV2wX76nDBRMW8GGXHZcPY4ceZ6KLrFm52tthQbdvYh1yG",
  "key38": "5TSLKfHFpmRwxDhbD5vyiGa883JxWzhFjqvbZmiFrFP3JJhQUUg8iLfXBbVxx2eCFzz9oVQ5Pvjh9pbT9veF5dFo",
  "key39": "uT5oYdgCYgNvDEGjgrSk8naaydV3T95HfbSNR76EQyLaoQd7ZQn6NL3L93Rc8yDK4Ydmaz9t3UnaQAJhJY15nFk",
  "key40": "5sZjtqzAQVwXLgXG216R5QTFWooVb2UVtDDU9f2ag82F1BDDENAA8wSTYEhkq2wPbB7ZpJ8SHZq4N7i8ttyvt5Ag",
  "key41": "2PGv3wv3B1wiG7DSKYcvhx2AizDyPJ8sgtiFbsSBbJkf16mZKunFY9Xmjp9ZPTJRtVCccxKdeyc2WTGrmKDHbKaz",
  "key42": "YXU86AzjoLqP9EjXYB4TMS8TdvLAeNFi1t5F8uGFnf8cwqHaGchuo5NFr5YNtspvzRNv9osjhdUVYKM4RBGRFhX",
  "key43": "4o4C4Qh7z5K81nGkjCLJLVbvnpFyk6Cq61MDAt5VZhN6iGPiar7VfZwKT5Pu5ke9XhFktDZbUuXSHh4TmbXyV2qi"
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
