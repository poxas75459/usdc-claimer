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
    "2RpiFiazaUBZUB6yhGLVoYThmy46vXAS8xFLEABMhEqC17DHnqMRtGK5EhNRDyKd2KycrPLTP2EZKEVkLYcuPPcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dG835kW5TT6oR5mqqUwK892N9x53wBKgjkzmYDA81VVF5jLARs3rjksiKu3wFrbzyk4kP7siraBNc52xFLTXdit",
  "key1": "496oss1hjq2QT92WHWD7Hbo9zRkjPYdyTELAA7ycfMuVZ9waEF3yHkVri4HqCagNKxR8uQira2mcoy6avxHbC2Fz",
  "key2": "4euhKrys4PQSJyaGwRarEuXNQPpKjwyaMJEEHXSRsEyQTD9NJVJtqgy92REfDaR9ZiSJsF86ybYDMB9zVqv5xPbp",
  "key3": "BjiAoyj5AtVcPBtYbuQD95teuThGGBboW5vheNVCfWYyHJC9mqhmcJ4jYmitU7EASBWxnsS1o2oUc6W1Xgu4WQi",
  "key4": "gV2a66VQEe5N2GdXAbEdpcXgfb94Eut8DbucxpbKhMxJCoTkTgbbjDiufyaCaHBCkafC2fRBn1vDsiVKLNWkGED",
  "key5": "4B2JGKLZhP5s4cZU85y6tyDWMTiVdy9STwM5Np54gPMpbg9VBQWUUQcBy9tFeMpcw7zmK3Rha2PB85Yuh6LHnUqs",
  "key6": "2r6V9ewdLyuUKRUGjKCQmxZarms53uukjy9jh94JEN7YYK1UgAEFMuMuuavyupZmyufhjjenSpgRfQxkLZ13faHJ",
  "key7": "2JeAghFdf92yCnCDv6v6ePdCvDzP7eop425N1b8uyKfdKoazA9r3PMjPvzyxf76dZs8o2KCMNt2RHH5zKB3E9Mak",
  "key8": "5MpDRcgJ6Rr77DYUogVaKLhJpRrWqYV9utxXKk29Ugbzh5pxHYNaaLGB9vBNFbfE2wKCCzHThFbNaj3aFfUG5HaS",
  "key9": "4ycKNEAfBUVoCRLhSziuYC6DNcYVirXTDri9n5c73Ma9uJejMYwhifa6ppag4Unbh27mruHRRUh6Ng4iEmVJdmTy",
  "key10": "5teTgbmigXK2hxHmNLgjp7dZwC2qc3Xx9RJTSoAXJwrASbQegqLSGZr1d2pFTKviNWqJjURNYq9UqR4gFABdt4zi",
  "key11": "4Mwmw21apgU6bCShzqup7TFZbbufQRPXe7QfUiGG2YSKtqzqZdhrBrEP6Eijz5Rr5JdSGrtXNKkGg3bhzouEXpgc",
  "key12": "5T8anSn75unBfPkojxoRoAdtWtLRr1LY8bawZkRzsqwhU9QABtxPdHiSbu7VRT85MWLEXe3pfmeEYWYuiNRZ1AMp",
  "key13": "22BQ1ENxYoMCEBDyjNxADw1kQpK3YTeAN6npBBD5KDueR4NWrrwN6yoa5tR7CwkZBBiaRkotSrFvkpm8fDeECCbg",
  "key14": "5xELTKLj5pcvRrk4VCfFbTeieueDi5HLSVEefWnZmwXp6sonXa3BqW3U6uqsE4pJMj7GugP6MeUX2SCwHD6vZpG9",
  "key15": "3LAFNWkWEzmsabG4iPxVjP4iiuYD3XMEaBciZF6LSEGk372UnMXBmoEn4ayTNZUZt1AoHfV5uMV418wwUmH7fyJh",
  "key16": "5Ap8TZKuyQK8dQy7U4WFu7EnY6cJk1RdC1cG7QjgCnZjygt5jZbV1nFuVfXuCPTYK2QGoH5mAJZJaSSTEydXcXcf",
  "key17": "61zDgRUZ7dZ4sY1BJJXBDzsg71BK7FYPK92PpuuSKWEd9VixqUS1Y6Quo4YfUnDoAP45uTbrSfoNc7WuW1ebXkMG",
  "key18": "dHQ6qQMgpzef92fdruwKasvoUVSA7HFK7b74183NLP9RN3uQ5x5xEtgFmSqDuEvKvNXAgLjZtw3pkdw5Wp4mwLs",
  "key19": "448aLUkMKGatsCpknsAwzoYVLn6e5poHdUFMM1pqTCteo8bMCTT4rKvACyeXDner2senKBWo3xnDpDafHTuoEFB",
  "key20": "5NTT6UqinZm9n1zBxfrLTtfeRoyCsHuuus5VD32t7QToHHhQki6ZxYcnPTAKUZYMheH5iVhWWRmdVewde7wcXvbH",
  "key21": "5b6e8HUbqCe4JCLWrL3y7uKKAufkUBxS49J18CtuRGRV3FndozuNHt7P8UUU9HYeS6FywCJ9RMhywB3VDxAEMwJd",
  "key22": "MCM7X27rvReyR66itoumUWsev1jUR1c8vLh1bXP7vWE96FJ6MGD8PrPEnLu3FUj31rBsBR2p8LHHSoCn96munzS",
  "key23": "L9CFro2wEYvEzo81EkrtLyuvCkSZ6xejr3pmgPY1YFv6cx8aDyehCbeaCwuwWWr3525t9AyZYXk9m9GXHQ1Q5KN",
  "key24": "5KDm6BnKQgzHDSfkHov16esALnvKdsZy4fY8SCTRovAszbakpz49tYL85a4tVDzXomonPmQvmsnviHY4R3WittPq",
  "key25": "28geWbPTbUa3ucJ9hm82FuzmkubRbRvuBhKpWgaq8KMWkqc3SGnJiR3Y7RQX2W2v8bt9cLbHsfUVZkqamufLR4kr",
  "key26": "5VYTm92VxRyrUSfsTCkSoJDfusEvMk3GhpT3uhRtgbpsV86iafsNapMyxPDHo4vEbLYFvGoVLXvU6hZUrdvwDbNb",
  "key27": "e5PpEzJSopLuiE5SXCuUe8HFh76cLF7gcoKHPvrMDoBBaVawKSWSjyHWKU7c9sBN33iBHCw9AkDsYqM7CNap5Mc",
  "key28": "4HMPZhJh8XwKB3G1dyECz36Nujgw9RCvVaSC9h4zN59RVWz9JtZpzCoEZmWTrK4ooiH2xFCFafAanCJVadByEuQG",
  "key29": "4gdtYzgk2jSVGU18V811cqK8VL7WskxmuoUDn2ruodGYN4SacDuV5cVKGo3FXKERPL9gXRhbntCMUgtWPne4bcbm",
  "key30": "2woE1AdXjvHDn6QjdJMySyXzSdi2zSRF9ab6R5zc37mRUY9rm8vMWsCSajVkK8Gtwove9yD67uekhRLDaj4PS5ur",
  "key31": "TWnaqs4uL1M2X8SGH4qVcpSBubFUeaj8UZdmJztBTUeBDY9YnCU7z9uKY5qQh1RfNDPFFVWfZVcLzVLWScvKP1U",
  "key32": "q4xn8tdEAkYJYbMdeEDNZoyuUZyTTWiVjkDrDFpR6JhdWPw4EBhmHAFjPJYSqi8UhfufhfRYkUFTchEoXHPi1pU",
  "key33": "KYJGgtnYiqX9SWvR3QA3vQSbTPbrFUt4ym9WnEJVVeT31Z9MMqBbC4fD8wD1AhjhLc825nT1JqSUVdPpsktdnA7",
  "key34": "51iQsZLLW7w6JjyAZRG56qffrj7qDidsmHzcm3SiYQ5txFBcSnPVE2aPADpg1UwfXDghAuLiRP8RfTxtmYnE6oRh",
  "key35": "3eKqDD32BrL2CJFP1zkfgHmaYf9Sba8UzaUpBM2aX9eUinExnLEK1WF115aHEDkRz7pN8E6Tfgg2dNgqGS8TvzR7",
  "key36": "5qErsHVWRaeisKvbGYHvEqDUCJRTi6aDzLJCDnYDcA8gDxnaTcsuy5wocC7P8FmZa7Dxg3HScjFYvXFW4MmxJnzL",
  "key37": "2hDJDx1UpFRWVbXne93EUKHF1F9u3LWtFSNiBSF9a3h97vkS8CWVJqjy4MsDfM9PEhchmSE74XsEaMu3nnQJpPnz",
  "key38": "WhcLk9BeEDxxC48A7amzQyRGQwZQxc7rV9EsVmtxo726CgSVPyCvd3rEyiYX1smV3GXLLdmKtTYKc5vekxxbhRs",
  "key39": "3XhCiGRxcQx7rJ3SPe1N6PJAo6MNjRG8Hu95fzP8nQGiKm1ris4naGjS9PPp28kT7zjYMtzX8a1E39ZUxUBXyD6u",
  "key40": "2WQ6RKrUW4Z4ADTPkUMBJHn94uM4mxn4xwubCuvk1hdwZcKBGGXPuEkaDrYZgBT2N9ARyrs3aE8XT8b4faU9uc7X",
  "key41": "3KJqormdYiDFtXFM1kDVHdZFaTy5NtegT8bv3BK8UBbEdEsc6EYz9WUgNa2rfMXjDJqLYWc6s2cCD2oCLT2btui6",
  "key42": "66WAqesgX6uQ5v11e5KvjS7iGopbtoAVMrneUrWysMqCfUddiofQM7p6TBPNzpaNP9uyFN566EhJ9ikzVsw3GpTd",
  "key43": "C1FCqJFrs56eC59cqvVknQaCbYEJirDn1DPR23XLKz3B2aXF5qPxmCr7PhaTE5aJ9KHUer74SMe4e5WRPivPY5P",
  "key44": "sXyra3KJzHDkoNFDf3G18zgqNhcwAvzNd6Ays9EarT5sc6aZWfzyf3wFwrw7vQ1mZ35gUV2mGj8fEmZRrJvbGCe",
  "key45": "5nQqC8qa8hnus9LFdFaCGk52JRYN9FnbjJY9brusHVi1jr2RKuAYs5BU3EzZJz5p3xqokt1KUkXaLWeEKPtv58V6",
  "key46": "3zAyZeUYJKobGf4G9RsdbhBHTBYVGjvWG25KvhV4zmYZcKpw5ZQfDYHkmZFoqWTDRESSyCLkTNcK2ekgVjWL5ubM",
  "key47": "2v1dBgHQcTFgfUngm2PH2myuWkf98zkpfXN6kzpjPEE1Rb1WgCrWK8j8bnisVQgymqyJpJgyBRgvNLb6ZwuXv4TM"
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
