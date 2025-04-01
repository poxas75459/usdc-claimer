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
    "5gyKw3gZs2U7BAxpqnextNC5snu5bndQwYGYkWKg6Y2xGdrRCRG3q7gY9CcyrCYFWb3jUXbanQNmfoCqb6TMu1GG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbfLEx7Sz3erNjnABr45ee96qRfu8af9y4ydK2Fd8LNFTXGUW8SuaBwQRV6qVnJ4Dtg9HzsQpwbUvdmpM55MRAH",
  "key1": "3eZNVyhvWRULyLuTrgK2HQM6dPBNTEzxsBZ23nwH7Ku79VRdgyX5BErSPsq65bBf4a69XbDt6gbAYy8hvswQ5j3F",
  "key2": "2mqS5H5e3xDZSXY3o3bNk86wdKv4xj6JkNcbBzthRs6zPgdzLxxe3iqwuNNSJyXvM6e8zVXTMFr9t43tMm67xUvw",
  "key3": "zMDhemAScuv2mAHAKz3GoPcEY6hKgzd2T92FtKGWwGMYFtRVDp67KY9EVToCvtSFF3eCLPbqr7WFA8cgYgm8xEN",
  "key4": "4QJJgbPr16HYWMg5aCdcDajSKvLPwJfv1vAKNNVxAjA3C2c4rbPL9uiVPhWbnTk1wE2ocUszEfmKhujWPCvo7N4b",
  "key5": "5VpiaZRmG1VFNoFR749WvWAFXveWD22U2wTF8B18an7haDerhKAgjy3wzi2GypfzZUq6cqzLRKXQMpcWDUamHbg",
  "key6": "4DVABnaQH2CuQ743aMD41iRtQASrTuhDfkEn3jrZ3176ZewQJB53WE7RsnLEFeUjxiiYgSRJQyAD2k2s5vJK9k9E",
  "key7": "3HCTDvewosqBSrngMrzAipiewjsfZf646ERNhDCHFdcmCxjoUQ3U4c2YJjovyDDVisvFKBGNNeks8kcbm8pxAzqd",
  "key8": "334xas5NHZeDqMm2mTmv4simskwGvCVkhjyPzMhQBoT6na1rdXoLhYHVajgEXAR99XwozPiU8JayTEJTfzrW2kVk",
  "key9": "4HFYwzcysMp8DrLR8fLvLB1n4fpazX9rayiP77MxzN1QvtzMKJQwDbNYtvjqMhi27fP4MrfdCDUUUDRxYgeyBpTK",
  "key10": "4Rnk4QPecw76sTKcFKZtRMad4yv9cfTz558HLoKbUNWAqjoQZZf9kHH6S6gWbsbnfUnKw7qssbT8rHy6qX94wfVR",
  "key11": "U6hxxzUYMsHvMoSvnuNwowp9MayADGYCfANH8EoxodP96rgvwGBnRiVLAL8VGoJJGknsiSH8ScauGw2ZwikAM4J",
  "key12": "31hRA3TPVhaRpJ2zXQ1y3z4XxEVU5wRZFLwo9gakpL2fyi2UMpfeoGFPYHQ96KHk8tb9ydchf333kL8U9gC66wnE",
  "key13": "SFgM9WdVHJbTqLjaer1993ZixEmSnZXygBgPoBTQgjLDetrtZ5FAc1k1yfMTeYm3o4YvpPJQM8vaHLXBZGWYRsX",
  "key14": "4QDPLy5gqaCeaxUXwyyDM3LR3C1hGz9xxQPQ5iBNt1ix13R9fnFyqCeLbEMjFFGti6bzmCEYkjsNYsvSd22EPZTb",
  "key15": "598LGQ6XUJ8gaHvc83aAcmkSr26UkkFZe9YcmAQwVebHDiQFDAmfUJDeDYhsnmSDvVZex13uAfWGN9Jf5tVagfLv",
  "key16": "3abT5Bo6LZbCZwHn1aag3QafovHaHss267sBVuegFwAijDEbBEZGKPmazgLumi91fMUCGe1EfvURkXQdms3RPugt",
  "key17": "3SRrCBL6oK8t4omjg45VktQ5zyFeuv7h2AVQhncq1TZ6FDXHRx8zx9RY4EMeFa4Yd6fuf639JXtuFBXJjok2BJB",
  "key18": "5qrZkc8XqHxgkcmfJFJVJBKhKRffk52bt2fkUq5Fkwrfh6E54jpZofboFhGYcCFGKaZ9fiydL8VAS56R5rtDtAJZ",
  "key19": "29ibX37mx5QmaAQ1jLQVzMCa3tMYsLtP2TzkZqtYSPB57G9JGLchg5j9LD4XEy4SmH3oD82GbfHJntmu5BrUwPNk",
  "key20": "2c99qixoAR36JSrVB3AWgt9tVaxN4aLTjD7choBnNCwzSTJRkZT2P1Ebk9ke5dMFjZeZN3MHxECPWnyaQaQG7A6z",
  "key21": "2snFji9B99D7BpFSSFeBohbSHeFa8C1GQorHYMLTit2PN3A6wDRv3ETWsRgFs4mxa9k6u7P6yfdJBbu5Rd62Acby",
  "key22": "356irsYcR4PuDP55WzeKsuCHEECnRShPfG9VRGPPRz1EJeMxGav4MN6wuYJd5SotHWKQrqxYAgXgHvJVmDmb54h3",
  "key23": "5iZF2mgDJ1CJj66YUTbRPyhsc9NHrf6PYM1QgvnZ1R269gqt8bYVmYzfGtvvrEpq5SKTjQei52pBvrC8GdgpSqDQ",
  "key24": "5iRbuCtJJJFB6SDQsvB2LsijKLMYCkD7JXxiAfq2FHS4fPMPscCxJWNNyTJb6gvsxYARGy4cVewk3i6EGHbyBfJR",
  "key25": "3foVgi1f5r3eXFmBbLSzg2LyPdoztFJmZVvXLMiVo7AZoWZM7JwmoPVrDx5KMFbmrSva79wbu6M6oHnM4Nv5AZ5",
  "key26": "2cLjfZ7jQhjYGNMrs3jzQHyBmgZFh57UhXrv7G4MLsU42i3wbHL4TnrAYoA4uLXMVA3npaBU5T9MBDxe92QdAWNJ",
  "key27": "6ujHM6uPHKDvAL1UtFYL6YnqmQu5EqwYopnHYwNBiEgF53fretVeixZ8JNodHo5cqg4E6wdCBuLHSEKRQGyAmVk",
  "key28": "514Wcidxv7aEWRHQ6FgYX8JAGXKjPbeRAbxciqkJs8pXi1FWqbn9jtTKjPL66TTpvc3o1ZgTdS95yevcNPiS7sSY",
  "key29": "4XeXnkecTQozmHUZpondtqHd5DxAxjkmgrDYa8PP5nDr3xE3UHYvvLMD1eVWkBxh8C64tDWY4mf82gPjzmAkQZwN",
  "key30": "Y8CGEtg5kBgQtzMH8D8W6DfMTpJtyEX6amFZAbC7NdZ8xaA67pFhCo9o6yAqx4JYpmH7uh7Yxry1vWPyEq6Dho6",
  "key31": "5ZrSFghtL7cD1F49QD1cShRbaDei4TX59rcqbpHeQtbb9ECbucunmEo6vAawocEqF7gunVXgt3j3tQsJwaY5BADj",
  "key32": "5XmasqYfLENXH3tPLuR9j5qjrAKaex3vM2wCZ5CJ6KZEVH7KCMyxLW24U72J9xXb6abvaoM4M19h1WVzFfCdCmWT",
  "key33": "WDjYqSZCNFduhF2GvcMHvEgbnqf1bWK7arXVQNuSRTeHs7hwiUxSz7fgZNvFUHGMpsbWnKjpVU7ug6tr36Cfz9p",
  "key34": "6SG19hu2UzqsGo1BVXDDta3tjwdw1xfm5wHAUPGDjqQNKvd8bvFB6fpByjwAhBc7n3YVbGo3QxdqCvAMoMHLvq4",
  "key35": "3H2JsgwQHATWyTLshQEEotMJFc7ThQt41b6nKrcjKm4tVmzjUUCXGy82XbpY4PV1V89UXMzfNLHLdwy8mbbWmnvs",
  "key36": "3zvNz3daPQjDU7rF3WTuXykeUPkwdeUxjaNZkiySFnodfKiyuvmZvZuCGcFw3yzvbdYGZPPDokfKNHXk4FFPFuku",
  "key37": "5UTpA7nH7imbvqgJu1Mprb5CxWJ6a3s4muqgGh5PYaXarV6YK3kbPmhjjR6bcRP8sUVDRfe8YVTERJhzpdX6JTmd",
  "key38": "2ZcTC6ooNf2h4uSVmb2XkhXuciEmrhwQf57famDFcF9G4vG6fCR1kpExBZfjYw1HrBifSJDP2Dja954UX58qWBpK",
  "key39": "4sqcYT5Pc7pcTC4WKS7KS5ErvjnRzrbZeY7uQUFT4rfspcPNQHADs1BTgAd9PB3jGBv7fayBxLiDW4oR7Tk5Wp3p",
  "key40": "42sq3EY2BcCfR7tYV28Z9NkRy6ubq8wDDgnHXsyNrjzVevTU6stXyF7Cec66rx1BSX1JgnF5MGKfHsEscFP2FTx4",
  "key41": "sA1HR3FWnQ3PDjqxNvWntU5EKbh2SSfP2g99pwKRcRCDa5zZrcJua4aHBocgxgokSt4xAU2Z5GqYe5FgQKfL36z",
  "key42": "HsBdNPwgzaqzxb4QbkJoVnk7hCdobwsJZq7wFx9ZTgS5TKbSLhhxb6sjsvgHQGsxKKN8H4s3HkaxTR9ZMazREw2",
  "key43": "4MeV8q2jJ1uFB8BBazAGL4nGW5Aj42RFwLxzQHpkU3AcqqWNPDJhoLoGoSu76HtPkWgC37pHMr6cPFZALVS2TKsh",
  "key44": "5bGQSZhET3UVswwgkwHoJRMjZoUePWPek9JFpXBstR7eQNodZa8Gv41MkM9B5XYd6GWyZEsMmeGGA7huJShW8Ypw"
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
