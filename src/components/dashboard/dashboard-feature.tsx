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
    "3JkRH2Q8fjEkfHrrNmEwvmsbeKhbPHvnSp5EB8J7Nx6MtrL7rdPYJPDV7HvecL612keHLnZUkq5oGy3TbE4XxEdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MAtvvAdkvRqJ7pNy74VasrLhzhwDTR1yKYTYFgbFQH7FEbCJGFD8egtPeRAhpFL7XwbJP9No6norPRQHrUmUfae",
  "key1": "25kqV49zPZ8bskUAmUdVCcJxvEZVS9ys7AdopqhNXYSpzAdNSNC2sew6MjaNkjSMcJLakK2mpqYAKaqnf4jNzYHY",
  "key2": "5q2BrLkjw97bcx4zocLSx2wcAzpx3xpJnz46793LZPzd876q4vjx1WS2Xn2HCjSgk8DTW5Ps9CgozpBT9M2TRY8",
  "key3": "Zb5A4AV4KMf7DDUrvdnPsbEiMjtacFySZcWT52FPp1JZH2WnD1bAXP5U31KoMpfuoEHhtTcAqQn2vFGNeTpYDXx",
  "key4": "3Ndz98zEqkkwe6ecRqGbEaUUPJ3LkYHEimjDD6wLDokUPxBcQtjnSBhvcSyDKDa4Sads169k8ynkVyCZ34dizzFr",
  "key5": "62r5pFVw4TxFcCDtgSSKSGFDw7t2yVYXfGxNja7w5KaXRpED3vaHwA89XhFZRgVDy9Nbt16j2BUut5dZ5eREgcgC",
  "key6": "3DkK9f7uvCRrkWRjrzjTXYF1odEieEbLYpJyn6AMUEXZisnHPpuqsEVWfNox8uM2pLuEqjRziXd1FddXSjdTnYGQ",
  "key7": "5Q3S7D65LABJziwAL88TW4NrFwchSAWLuFfE5Uuonm4EjL7YMmVUFo1qeAbRV7dUt9VhoLzA5a1vMYnesaxPtuuK",
  "key8": "2QwF46ru4NDfFUXbVfK2hxocRuMJUnd8XHw9BAg341P64zqxwQTPeiiL8SL5JwcdHKSCEmhLsz5mAiU1keNGNyYC",
  "key9": "58DpdvWB44ELKhn2xRPEgr1amN2NLyRtY2F9wb8oa324ur3EoKdFnZtrTAQ5e6QrHVdJWp4jdWhnzMsnasMHfjRN",
  "key10": "3pHzx6NvJNcSxUQ92SvwHTuBqXHFYwLY6Vc6GVCvUrQ4Un6ExhchngEd6gpZnqpkb9kUvGUJCgJoMapy2Nie8hCZ",
  "key11": "5Nhdwf6QszeKAw6RCb62t75hCAZ5rtLNSFrhzoMAfURULT9yJGLFV1CLNvApvFKWxxoa3xa2WTeQXLJyiaoHFTk1",
  "key12": "2NsNtyMvL9NQ6Qcn4ywKNBRPNb2rfFwQ1LETmEXtV9tqbtNtZEQB9PWitEm4kg5Ds4sEVpUU9c1fnAUa15Fy163i",
  "key13": "y7H3d6S2XuianULh5ATeUcHtfzWmjRvJNf8xd71u7Ej9aeVtbJTgB6bu9Hs9ZgWAej2PiNEpC1zVdrGZ24qRWAM",
  "key14": "4EiN5D4XQKUcTeJicxatUCSBF9bqNGcuqRptJgzzKru2SwLBX4LSAcLdvnQ9TVjrySTG15eaNo5tVN73C2newbLN",
  "key15": "5roResxErapd1R3LVttZyYaUYTZ49hMdvh3AAapfMHRrYmbK83siu59KbHD2Qa5psrCSUx1YCYvtLoG9QSyQ1WbX",
  "key16": "4Gw7w7xst1GraGR3YemPfW4Hv9n5BrGyqd15af8VB238ggg2Dcd61Tr1JeoHB5pkmsrBNChVdxyEFLwCceZH5oho",
  "key17": "3h7kByD6zu7YcDRJVm4HCfdgVKkydg5dRVzP4MUpfF9z2aSWCHYk6MK7io6n3RnLAk7wfwPNGQmUyhfWKXNd7ggx",
  "key18": "2N2LAmDmFiDkN3DMutGt7uRt2Aj7PdCPdm3esfQxhfoBHW3jZMtYsZhHAqoL8mZ42V1y18gEfTdyfDjjFCUMURNp",
  "key19": "2NoAwWYt7yxfLbXWfwUHYFMC9EWWiCG2rUVN4c6wt1XubHCqsk3JsKpmv8byXk92v6fsU8NmUtwrp3brMeqf8fFy",
  "key20": "3GdcPSPmwFYRhMAiftwuLQVeSf2FGAEu8168xezFy6xNxr4kAKXqD9ewDT74kSGFVbfnyBq1hVMudEiVQYYjHhHw",
  "key21": "3toPgQgZ4yGod17Y44j7nbsGrqrtiaATUkeeWTvw31ByaAhBZL3sYPHtZCSorW2fJ6FbmJb1SAiwygP5jrUDtMF1",
  "key22": "3vTHzj8w6G3iMHwPm14Wj2rw8QNjw7c2WRhRRPyEpc6ebuWAkzT8p99V8dSu9hdWe7qwn8RJN92RHjmbVPbXeZrj",
  "key23": "4FKM8VA7jGVyAHQ5TwmGut7oWRiy8nKMjV1CnuoKLjPFNEm1iis74RCFfjdmVeY9mZG1NUr9nT1V1ExD82bUCk1K",
  "key24": "hgDh2JNM343o9j5MsF98hgXJt7t813bJcfqEybP4b4NemVP8JwcBLvFyisYkty3d1QcFiugG5KaUZPgnEghthAQ",
  "key25": "adqH92Gj9JYycdTB9eayWmpduz7Y1CTSxcUL3UGj75H95oHZMWZH3ognSURxKjQyrnuTDZ6WxgaptmvjYNccRR1",
  "key26": "2TL1fQ9EUhScmNsBZsZyh2a5PzRs5sgHkSg3NzXCmFk2v7PvuGGeAJxhMmKenbNTAsS4NwjgU8iGNq5ZMAoiXnJz",
  "key27": "3FxCmKsvg1Rh4kbcHd9mvFYnwXKioTaNkAgwtSbhFTZ5vwUrvbRuQgkHwTLGUqAsQwBkQ8RwiHj99HgvwaDyEvnT",
  "key28": "3oe9YsuP3aZWwhD5XZwxgohzca9XCaZZvp2KXeRfPg7rTH85PmNdoYoxJeTJxCXbqPs9eVUN9Ex51eJtDjV9uX1m",
  "key29": "3LDZNPFT473zLqid8dg2Xqju3CSM9517AbYrgVGq1SsNosh8gvH88kFJawbXbf8qH1A7qab228cd7CzSpjYSmrgx",
  "key30": "2RGs5pvAV6x4WFdqGaHdhydUGVPUXxddm6NQ1WQjGp7xASLu2YEutyMwYcyLjs213xjEGnFRaQ4g6kYAznTdRDXk",
  "key31": "4FZDZ8FmgpvySvej3sRz71cprmAdqyxmo2BMdyz5ENxJoEXebSabiD2uvRLM1dwDYu2QqoG7pL1ZagQQiigk1vtY"
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
