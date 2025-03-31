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
    "FUGAXbuJM2145kUGhaezRqfxxg1Bvs1bKPqgCNVBG5R5ueRbEEuEAQg5EpQvi4hkPVd69wpDqGgdAGZrZLYL2rN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cKDXFXUMid2ihutY5er7cLAPptBVAoeqXXMd8Y5dgKNXduW8VbTNvopAWR9CWqPTyVvxsxkp5uUxNqqdtP1aTW",
  "key1": "m9CkCf8FSvAv7EQ5RPFwGpdkA42JjJA2UDVerukS34EmAodoLXpAxNe8Rxphkw8cUqNr1ZCxzniCQEkjGA3XYGP",
  "key2": "4mYbHxxX32cAMfHukHdtq925EiiUCdVQ2mV7mzRGGokXnzbzFuBqbZe3SYvgEvF2Ges4KYhTf2xEX8rxwCjtW4LX",
  "key3": "3GNHqQoD3qjdevMrcDCu48TtSEuZsnJ88UWk1seKkRjo4dCPyRd4EnugH9Jj7LmYkCBvXwGp6YBC1awCMYKkwttz",
  "key4": "5HSkd65izZ747gL2QyJaeAkPDuUU1aAjPdqg51mAz6KfLWjV1s4QA9KAZqrjZmfXdbHYLhrGSVxyL1iBgjSsw6RK",
  "key5": "5aWe3DfFSkCjWiqdeRo6HsGdKymj6SMi5fYzCv2Bi7UPSyCGpFbnNSmN1eYfnwNN2VsC9XRT2QcxXH2du8np23ds",
  "key6": "41g3pMNxNzaswyRwCNgrWedakiHXfniigewYr9E6ydGRBvUV6NEbeNpdkwh2h5jpYg73qceoGCk63Juwb7Ti29qv",
  "key7": "3BAoRioo7PMEBk83kcjbo2i5Hs2iGabEtJ8x4RvRFQNW4zJudfTaDus11Qp9vBcd31TMr7K8FV3JMXEnZJkMnFEa",
  "key8": "4yKXFS9uJnQDuA5AvzxCAmnDzy8o7pWKCFXEZjhfjcP4Eks82Mwxc7sbLdFUCohAkwad6HMLU5g3SoMKHi6oA7Mb",
  "key9": "57A8FUZ1JvZg8sdpDbG8eXGV1JejQ45jCQBPqEQPQvP2uCSkQ9SAt77mxNk1i4TwMh2CaJwHc4Bz7BnS9ueVaXMS",
  "key10": "2FownuJM91fphyFSCDmmJH1D2ouNL6skRAkx71g7PzcyfZHdEvi2EC2RpHayjKSf2o6g5K1wu1wvqPMAKEtNqKKy",
  "key11": "5kXMBj9mAGWKpyjrg2yyRkCp3mX5sE5xizxBKV89n7J4ojL8y2S3cGxXWux5RnETveB9iMz6xELB2m5FU2N89n1e",
  "key12": "22MzzvGbdmApG4H7AHR61N3rANFPeTL3Rnpi3ioPZKwtAfxz3EiwfeRRBwemp4imKjyLBxmYYho3tC7jcv11meZo",
  "key13": "5e3rBMZvgSY7yKVz6ZR2jhhMcnWt3fGL6ACFNFeZejWyZnTGHY7TX8TVvExD9HjV2s2UbYcPvtxi39UrUvJggSfu",
  "key14": "5wA9zNuUsb8h5WZjVukSmAQDqJYiRUs146NogqT2g2Jw5euoKpkXpjtNNPZCDBCDFsju4AipJ8eBioLwvD4kzdjQ",
  "key15": "49TKSxza9TwJjgA681sX7J9GdvDJhZHbsL2567N6ww7aX1qY5sxfxkMbRVcA4VGw9zk3PWRo4ZdvMEAJbA9fkybJ",
  "key16": "3MTHdbDjM5yfQ3vJDGAGGebtHaQXEkJQdghf2LbuR3pkAq8xDmnbHTRrvpaFnUyUfy4AZ7AS9ercNXFmAXqAU2EK",
  "key17": "2MJ1kocaWk9nd5GrnG8pYch2Eo2ujib5Nk2KTYhxuUbFWFyqRgrEpH16L2mBmdfe5J4AEzMKw6ZFT69PMEP5T713",
  "key18": "zaTjycD32cWaCJWAexK5xbCGVeMr7GtXpsxp1wsajnG8dKL8J2NGMaiwca9AmYxUgnbVY1dM6VdvXPL5MwhjhM1",
  "key19": "4Hpy6P4QQifz1JQxScmGYe755t9Bm8BFAfLe7sgNUJ7Xacoq63w6SLgXmgwCVVGcvnm5CkYHvUuXQNU5EnFcWRnM",
  "key20": "4yveQacv3ihb8jA3eDDGTT4XvDxcVYXSK5KHeEQzdWeoFnncQ1bR5EQU8j9ttxCSjpfdujgBs1Xs46dt4VgAmNzR",
  "key21": "5HHGPCoAyuL2vqvXKpKjXYu8w1P7LP1Vvnf9fqB9ArDNLZk4cKDShUGMfLMj6tWijja1WRrWV8bfzd8TH44Y7HRo",
  "key22": "9h9uKiY6P8QK3yvfBfrBEZzfnSuKBum5GDBnSWmgXKddYarfDdR1mhqHCkoFMdjiEa9C2XydAppM464rq9SQi6n",
  "key23": "4m1yyxrPRVcsiwHzdcgs3HRWdzUFrkLWRc3uYSSfc3pM8BNtcwPTUQ2ZSvf2jTr88izzXqrRtxfcnnPKxUdXnvte",
  "key24": "2Fax5rDDpvcQWX18nt3RTXE83DZuy9GSELvdWMVSHKU6Ra4jNHJnWAzDG2TYvoHkmr95f2a6MZ4dXfzxRZpKxviy",
  "key25": "2qrKVGhNVbKiqJv2933NccQb6o2mWSv9f3AzLnSSfMaZZveeo6GkqnYpHgh3xh2F8FjmCqHimn8XmEpWVmg79NYQ",
  "key26": "iCjjxzihg4cFwqiLjViB9e55UKRXJT8V5fzXo28A2Z9whWXAYQL6h8kWVsMhTp6aAzCAUgrZTGgYTd8hb1S8hpD",
  "key27": "2BTQAk1dbJoAK6ummmaLYBCBji9DHUPJwZzbzZm6sjWzw28GRWaJgBNdJ5drJi4NkN41yDB1QacSzGpDEKoy4BZN",
  "key28": "5aryWjLJB8NPFqQiHN34fXMRKcacoeDiV71YVPh1znADL5xynuVpgJJ23Nx1g6AvTT5uEvRsBxabsfTWdVHRbuUT",
  "key29": "5APJbtNgALnHvdgDvCQxM9P2iGddADbL12sDYpGECu2HewujpJ3WsHhYdfX3P71zrSBENf5jqNSnvRFf4dD3Eank"
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
