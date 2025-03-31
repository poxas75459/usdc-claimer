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
    "3biR3weEaMcdqE8w5nSP9AtTaxBB72UmqK63BdhcEp8d9cXi3DYsrsq1kMeqLpQBsz8xCjdgHcuL3hzLFxYrDCgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YWnVa8gw93GLVuWcqM27f9qpkJZqi5zj9M13hgqG3DZrQeMDH4BGRRs1a8TUxNTPKiRE2JxG8uqJLRViffmjxJv",
  "key1": "4JtYRNXyVELAu8puwrzKDG9XoDuRU1u3z8R38Qm3QK1U1k4PdpYhCWRoBx9fYNZEwsX1KyzMHggGvsyQmTc163Lh",
  "key2": "47d1EMj9r9zWUCiXbvqEpoHRN5B1R5vA5ZSL9qU49A9Jjuof8qCWQoJFe8gYrfeKo7AwNPHokSKsJhGP67Re76aG",
  "key3": "58FgXNc1cmU3ZErKZUmDLzHHVhrWQSabD3U16eQzDdrEnDYAsn7HV4TTXqxsZRxUwyu5y352sy7yGwY8gpaHTWiK",
  "key4": "3k973yqLjn7kzcfrGkFPJXVvDM5fCXY8CEEpjfyiEdKqDeXgyhdtdW59DNQHJ25TtLQdw9aN83MERDKBj7C1DE5m",
  "key5": "5LHELERfKMjNsssHdFrBsJWQLjgUgGRoESXjusAkzmFpwYUnA4xrKrvN182DW9SVMCu5kvbySPjwT6ig77HeApyc",
  "key6": "3B6j34oLaqVshhqTifK7Cdbz1c67gkHQfErRc4XHGeBr66YC7GPHrGo98DB42yCbGECH4UTWvT76pxgCPx3YaMzc",
  "key7": "4uk4G6cZCyzkKYgwRw2y2jybQZfrVHK1mw3ZQZa1Aqb5vAVCwRZxTNw1gneYUGqGDuWFHjQeSUWydzp89HL1NKh9",
  "key8": "5w1BWNjQRwnFGeutNg3zG1gp8Lq2z3DFW6hdxujAyHCE6rQZoRwwnt1VYHaCkzTavnydXJAXkoLCqJuwFpbF7bqf",
  "key9": "t8Mhbi6esSU4nwyabEHpYMF5y4mmFmQGXFP4jGGVuZhxoPWupB6H3TwY2wkr2idkuoPXqrLeVzC33XeorhcEyoV",
  "key10": "3QVes4QeqXYxomsvSPvw1pbVCGSVxTAwpD77qvkxiYeMy7HwaTKvo8NYbEWu23fFAKz6VBLi9zpVYfCiz2HBUwYe",
  "key11": "5QWbUywdC3CvCxzopycZmanLgEqGbZtMR2AVoG5mpp3t7s7AfTZh8cdz2V15tWRp27YLaD9iaEzG4WitqaoCdhtA",
  "key12": "467wSDqSb4uhtCW39BqNAP8zy8iRNrpevcWd85UyhchmjypUhG8VF1gxUr2EX4iYDusvezy8m3xJeGDgiRUPHQG2",
  "key13": "3Qs76nENWwEftCECKtFdFxenEA6NUXk1DaoXoP2eMivLavvB91YTgkDCmDYHMNfW9cRWJHUPPa5u2abnrEGrCAUf",
  "key14": "5jNWRsMRkBWCduy6jHvEASLpwstYsREeeiC3W1TvTDix8jfisAtvUbDPNGUeBB7E5ExdQ4qMVgbUkxrRZY9cB8t2",
  "key15": "rGcJknsCoSJ8zcFkk9zdi17VSM6t6a1CuCXA4WbrUbMaqejsjTTnbJAhJqKzqVQgQyW9E3vaKjzWJkqZ1mEZbHG",
  "key16": "2ejUTshjTuuvA5cBdkzPG7sdSYp21DXG6SNgHQtwWETErmMvwkSC7MkrNgADeexWpb2oG7H7gE4mdEGTFdAbQKCj",
  "key17": "264uoj2mUxeEXnczw8NAtQg57jrm79gvg6mxYu8sz9rGgUn1V2CkS3fcW8FGWDyTFFgT5q22cQc6bp2jUfLZWXqS",
  "key18": "1UBH1MrKfYBbNwbruMAwvUy1SBd57WYrX6kkcDKoYxYnj6NPt6DDEn1yTyerBzNUGq6oW4cusQCaeUHWK1iEoFR",
  "key19": "2nA8CRoExfeXz8nM9Rk3bYNg6gaTTE3Ejxs5JZNG9YLviVTCT9xCr7kH55VbbjpH8EWqgmo1KQCwCYgSxNAcnaGs",
  "key20": "5L2RRvbBry8eQfCmRHULK25ZESKCoMc7eXbxZF2QFgixYrV9FWuSoSm7pQvwnWRH5wQVyqWUYFT4ZKLAowg19EHd",
  "key21": "xLMc1PJSZmtjubXVrPDLQ9NoT8rsZijg6MykyyUszNUeVX6wGq27Ro3pyFUYYsXqr8GAuA7XjURmNvMJmnZpffE",
  "key22": "5BS6WycepQFPJgpijYRv4vVwYFJhjeEiqXDqVzmHCs58x1uazzpfGWAK4D3Ss3eoLNPghnquF2qrdbnPuPfYDXxe",
  "key23": "3RyfzgLcKycuzvmMDgtfcQmDWSnMzn7UzhxKnvvouYnWg2wnDApsqffgrqjNQ54axnuEKHkdPHgyxPW8WakhZcdJ",
  "key24": "3wFQqTGLBsBjznBN6E6JR3Sw1dLG6NfeXu8pKer92pPdJCG35JjwNuqWrALkA8wLZbEPPLn8HfcTfNE8i5isFfo2",
  "key25": "2UoL5jajzA4hhnBvwV4s8WRagNjBwV2ugJrsWBrNWE5tZzztApCwjJYiMAfQPGCzV6Vp2FywMJMryeMKUeivSh7v",
  "key26": "UA9QgSB5uXsvJKjjj7fpxE7m1VGx7PJdnXn41szv534NXVBCWVnJd6mBDQLcGf76VxRmKMRvSprVoVdeuxk8Eky",
  "key27": "zHT2LYiX8bUvwdcXw3ntxFCjct219vCdJQTcitSMcxzpcS5UEBqhhSv4Xnx71U8Ttr8KCLQW9e5VAJCWCyiEZGc",
  "key28": "3hAkTqHZaD8jCjx9DLnP2geyZrJLuRKr7kg8EtKbXSmb4mcVVzVg8QMiufDkLF9cGeNLcfhaoLwfawFcyy9SpHWN",
  "key29": "be1LLwYH67kDH7MJKeDuzAEHBosq8RkkskriuDNCizXJVYkYChBYYr12Cn3JzMu96JRxNga1iDnVoQh47QV1buU",
  "key30": "3xyJqr2ydUc5gNKvqhEBKQoTnJTgikSAWCN6u3gDKnnKTXYN9SkvQeSuWefUDePMxxVrQM83SohRudXMonLUDQhM",
  "key31": "21WPi3jhaouR1hTh2Wnueck7poDRUteZpNSKq5CCGJ7kREejWAmivcKnhsmrbaqz6TfgkGiZ445Xzzbw88sQ27nY",
  "key32": "2JbduXxKYxY9qyzke5NxvGa8r7v7M36sGYupNfwfMYdR72JWUerKSRfyYr8uPnN9uyQZK6kWK7NWhxaKR3XEQ8hh",
  "key33": "2CNyYNkVs3fswU3yXuc5RCTmidebe2T4ZF6n4wNMa8JhRQZsb34bCXhE5RWTmUWJMGAQxEx9PwRi1popLDFuxDKM",
  "key34": "3BbUtiKn8F6vcg57UBKX1opQ9QUFo3e1WicgQqQuy8zG3iMpRSGup5oZLC61taEBgJivkweGxVyatHr94eWaM2XS",
  "key35": "5qFAvfiPX9BGpP6fp5b95wdPYTbGmCzV3mfqJovXNoZCeY3a9di6qmqDm2igue2hQwKZSuLLxhuGgaD8vM8Qv1vd",
  "key36": "47Mu3m2nEgHeFn5Nz53FDLCg884pcAPSTCwZbCLRfnZsP6CeZwEHBogzZy4ik3mFgAJmUJTfsWEAmmeBpRePDt44",
  "key37": "36exVDuQx1ogzfZDnuQMHf5DtKASEFWYKWveCnrNHpEuTLEKvg7drupTAUWkLQ2uWo7Htf6ydjWQfDF64A9YG6tT",
  "key38": "4yLmmCTLHV2mtVbWrqGcFZ9N27UzW1NWR4kgfFm3UbYTV4TaqvjcEFVfPsPs9ixNMR886fxTkPFuBaYBw7P74VXS",
  "key39": "42K5AUUrJskTu4CanooKv1XxSkgoz3Jp6kPrHHc2Spt7MBkfqb8eMNsVuZwCPvWdE914ibK4M475x9grsjUScyE5",
  "key40": "4zNfvyp4uHwtL8iyiEq38hyGTFkPgTGqkfFXJxWmTdt5fVL93fToGn5SeF5v4mLbvRsTczbSdkBSfjvLdWK5eK1m",
  "key41": "5MvpdJ4Tdeeg3W3Rhce26cLM9gXM86Hr7PDL8ij6gbqc8iiKC1CiTvvn5JATTPG4ngRuRZrtmnumpL7WNtnfHgei",
  "key42": "2XgW5QT1Ft6hwi7fJyzYwNK3st1VfyFrQtrXZXMa4sCVFRpcMgrMjt1u2kEofXH53i2W72QSm7frR21WVETBgQLM",
  "key43": "59wSNoQZEnLNJYYAbrFeqcePnQU1gjfqTi9oUfdWKZMi7LzrPaCX3wYngmYeBzr1mFQdWKKje6iHe2JepfNwKB4M",
  "key44": "3JfDGCc3pvc2LeWwmwNq36musL78iwSS8MfTtrhdNrJi8SyGyaPAiCzCkThAFJ4yGkzWZVjKYHrnybwkDpLVWQ7",
  "key45": "41ztVmfH7PKYazCQmo1zLzpuXBG2ocWJcsWrnMLZviq5i1wCU6Zuq7mZ7Jxw3ncGmVnC8QMSKsMp5qFThVnkTLZ8",
  "key46": "2yd21TRjySzHyPdjxTjPYwbjpUXUKh87cCtn7ZPuhLKcp5itLnD6iZHDnkzmCgZb9qCajcus1RVsbvoBxgzYyrkJ",
  "key47": "rrb4gfSAvUcsC1EaGeYqe7XGg5GMgcnY7G2iMvhESU3Ki1HatANKewoKsfzWb74JntECvfGBS3A5mJsNToPYaTn",
  "key48": "Qh2429M9WpAdCNYQrkysUFcCWdvj8naiwqGDReSb3BzHtYfeTn3kbrWXCgA7fdwDurGQdGeLxXs83hQgo7YpuSP"
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
