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
    "45mMQZujMhGwhJkCuweGJUm8QpncSi7QN5Nm2jcVGuvLBi9T4mYLDtnkgCqQKyXxPgMHuibHi7fNU1XhpNnaN4DK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emsB2KSxMkmtvdnAjwvSgGTrq5ii4Hwdb8JJnawh8zPXiEusK1ViKVx6d9k6Q76GsXuXAGKdGZmpRoPzj4xruRX",
  "key1": "23uAzzqooVAGbSthgg5c1LDL3dWp65oKZ24CqHBbfhQRB5JJqAFPFgMyEVYXf4XaDLD9LzCr4wE9fs3wd82ySGSW",
  "key2": "4EUNwks5YrmyDwoDSgPxUjsJUHU24K8tVGXmbnQmzQiKqqP21NCn2LwSn3od2H7tJHutoSR6QQywkZvaLgY5mnxG",
  "key3": "4uoeBmE8VGqC97Xtt256zM1RxBwgqq4qpLbbiyzVPQSYfvoQzCsJN4JFuZtsAyN5b9eJtp1Y7EL6BSNfe459Y7hF",
  "key4": "3xENWJ6FDXZdAjToY3ukMMqJ2SHNXJUcyNKPKP9ry4PmTKgqonZg6sHtHaTTEpXAzVogwMatikUUSiF7wjTfSC5a",
  "key5": "5weaXw1QpDXPCdH3vrFDrU8uq64axsSJkJCRaCTevvPi2jtV89apVYqsgnKcJz5yWKNciaXED5Pc1cdHda77vDAv",
  "key6": "263b9k6Xhj1wUfARef76HKjdWBG2u7Tqpzs2rhFeYsbCqz2PQhrV71NPctcG6fRDB4VkuC5dRYYzNNw45w3fpys2",
  "key7": "3ayRXMNPGaFy3BL13a4pfWcdCRxEpEL5Ct5stn4A1jTMtZdZhomftEN7nKn782JwDM6rjsSBxkzi5mwVTeLZsJHx",
  "key8": "2XrHWggHd25WiVWHPFpbKxggKjqBPiciHytZcAQjT5CRLRDdyGQLRP6SAaM6NV2LjZytcQz42YtuN1nqcNaoBhd4",
  "key9": "3iSR7PwtVr9JGEAh91edQfB83K1rXPQ81TV3jLh1H6hGLxk7s3dc3UryTQoR8erf3ER3CK6zpa2w8yEHoTT3RJat",
  "key10": "2pXM4n76UdtXRoRUrQs5m9mz1Fwi2q7RTm3VroLNP6mPhZCdq6e8qi8kgPaktcF84LbzncEBBUKpFBpkhydwytHm",
  "key11": "4fXYXdvykSVFTLepWirpUdrAtVWE9KkQicgdp3hJ7VLt1DyS6Fu79SHj4TopngTZRCoG7i23zUbiBX76r45xj56J",
  "key12": "36iuvFJzW3HGX9DNrmo2zgcspcxQJevwDoqEUvND37CjPWH2RacxbCQF7j6jdUyDDnpHSJPumXydobJxnVpKGoRq",
  "key13": "2Wa9KjjVUWrYF5DubRrSRHMx8RF4cf1nwiPZtpmZvsCjUMus3J39BX5sFqgLkPhkZCGSzrjVkoUAN1rW2YXVSWp2",
  "key14": "2wBrsHBfMhehCenzMB1XQUcaHfbBCWcrZN7vMKTygcKXZvGMkvKWJHMtXHpXU5x5vt1FZQF1YFaq8XPAz2iUELMs",
  "key15": "5QUPKgnAnb9N846QsDoJTiFJLdaDFYNUNWEPR9d1n5bJiHUQ8gd1oe9yWDxAZxVu7uBKzS1hkv3Tpo8PMN9os5rn",
  "key16": "34GzbcPuhGLuCJxk9DqmzMffSt7iwkCszmSqY9gdCJGom72pKLtxzbPcCFf9kFKFNTD1jvj77rk53kkRGZBia26S",
  "key17": "5BAy7gpioUq8VgwwJ9HT4sWs7S9LhCjKqbhewL96iVuvwNDXnfv8d5wvZqW3Bs7P8oDxw3CBjJyVLkGXGVfyocNz",
  "key18": "3ZrZ1C3JyXmdVMbAaK9dmnAmy35GF8ZvJew2kxZUErRU5wuDUfcPhYqU31FgsQHuyrL8Lp3eb6Ed4curr5LLfUDv",
  "key19": "w9mpzARNMTswzTdfuXuoJAzDEarWSM7nUMjRGDsQDSRspNXGqHqQjrJtpwk32tiANo1Bc8VgK5Rsbd5Wph7XHKr",
  "key20": "2UUoKAwdwc5W3VXkXeuBVvei6EumBFKDU5hprpeXbyphtCjHE6h3wuyaDG51VBs6GZBdEq9ZmCMAHJLq8MKVYdir",
  "key21": "FAZqgK7ph8C7YsWyhRXCipT3Nz99pCaJykPFfQHACZ7D3r2itUgdV7aQzLBzvEnRR9ZfZ5eXMBH8d75rCPiPCHL",
  "key22": "5U36mH3JgWieFeKhRFbAfMLw1rgWVrAKSdPSKzhaabpw62XZM8FGQWvMgo8cxFJ8ZryYxGvuwsA6HqHuTmFVg2ih",
  "key23": "5YwVn8dXT69VA6ETgJSrR1W2WmEmAMESCVokXWKScwVyCKQkuGtgqqRBKbRs3zFhsrdgVL4RhyQzARqLi4yQSkFL",
  "key24": "5szpjBjWhnQNq6Do62JhJ4TbsxJFuuss3qpbBoK81YMkkk94FytmSWPyVfhNsFUVZJdWQheEioAr5QpnPv4ML3Yx",
  "key25": "4BN3uoz6orH93yKBECxFqd4L8gh4Jog5uwzogfezfT2egGx8CgjWDhSkP8rWpyu4HPTSowuWweAgB5XWSg6G8527",
  "key26": "4xcptVpZyiYTgTcRMY6bHMwrrgF5mpcGCWqJBLNCjtNdLnRbCjSju4kzp2M8K9sSfVWQwS9fQ8LXwTALtkaN6kaH",
  "key27": "4dmRVvYHXKFRisVvcidGx4trexxDX4ELVEuBwmAEBfT1kdJaVESWMRCFK71QCGa8q9YMhoHjfVvBUsphEGt7AAoi",
  "key28": "5Mmioz6QjFyenxYfymC8hiueRk7XEM2tANxV35m4fAtpUqqBGYTo3WKjZkLftU9enShM2Nvju2r8LbV4i8jwPHXr",
  "key29": "4TbzNSzqotgYAvWRBpbryMEzY6uAMZBs6zS8pT473xuZgY71K7y3xaS39ru5Ms9mXk7U1xQuVRhHCtb44aek8vCB",
  "key30": "astfWvfpAdtTpPmyLF3rXkJLmE93u98WMUF5Y2muV4WNKpLgQvf8HboiyRHcGkxwpjgRLmyRfDpMeCFnGLxNAvc",
  "key31": "4P3KFteQs8LcxtZdBsZz8gyurj6ThBHpWyHRqe2HpCtBnf3raWwdJgqnzarUK68VZEWj3XmU1EgfNLN33UeeqqNp",
  "key32": "2GVs7sZTcwHPAzuc9hegt4y37spc9teNL8pCD2ZE4G5c6yDA88N8JEpqAaasePM4Z36KLQsBAchobiqNmPbNxZWe",
  "key33": "5nh68NsoXwh4GBvuhuhbKG9e97rNcmBuhMufTfdL68hUvdYcCvRLTT74tsLaaUaNJbpTp5vBykA33QVjtKoTiRp6",
  "key34": "4SGorkoS34RRWcpyanFDmQFb98HNPQ3DwAG7sFshVvkPgMEwkFAGEvfU5TxGq6CrcfzM22fViGx9xZHFGenuTjx8",
  "key35": "nFYsKR5onbKnA6ZKEW2Zs2SxEbWT9FtDRfh1r6Zcem5FFrPpUSRhWz6QDp9GuKXnKLnpDtYtjo1vc7sKCEpH4Np",
  "key36": "4KzQtrV5Z2aEgd8LjQb9oQnWiW5Cjx6XCb8DVENisg1eskAjDT6Ug8zgWzn1BLudbJqVUSAz6UBtV917fJjD21fJ",
  "key37": "3z3jaRqtFb1eHDPVtcFK5h6PBnSz3qJx6dcfLxVwVpNLT56agKtmhSGht7mBexPhYnKzrRFfmfsw9XXxhbao5wcL",
  "key38": "38P3WhUNYM9cGordfQdcgfLFoj6cqrrVQyTYBC2TpdRY5rGUojfMyrL4tC22ibxfqV84anzwD3Ba1FHLQCjkBRfC",
  "key39": "2zH5X7PSNaEhjgCn3ZcwxkLEpsy1j41fj46kXLXk8VWFUGLCsqceSgmuPFE8WjhMJqPR2aVkjhPsxi7udHm26XW5",
  "key40": "2NzpQGoV1dFiViHWcPSAEWE6tXwSsMwLxBvahADYE44dKQH8rULVzJ83ErF4KeE3oDQzfXJAKFEp7XjXjnaV1XgQ",
  "key41": "4GfckHchT5BpqyMsHRfKrbaitwt4Y5z35uNPZtdnu3SrMYZwbjEkSBXnrmp1mNvvZu7CZuah47b5ut8snw8DsEen",
  "key42": "5nsyW3rpV6ED6kxyr7zuj5fL9mreXpTnVunwoGJrKjzqbRK9dSTHwBRKC2APk9G1VfPvD2tewjam4ZXxCW3b9Ain",
  "key43": "34bbZAimfFB7FsUS1uz24c2jSyxQBK93rgh8XLr3zKRKSBWPNFM9AvW6iVnwdJjq8c2TYhtCQtS2XFSFsH3Pn4QP",
  "key44": "5e7EmXhMJcYSkkisgEbyhK9BUeRumi53f6KYPSdvKDwgQ6KVb6ExjrhujiGyEsxDPEb8axH53xYa2td66CBjVciK",
  "key45": "5ZqakHSWPZKSEEepxoYwXuPgdQmBFF75xEbdYhoDSEDmZhjCZnjBjdMupzhdWxv168sCGyJx2YYimDLqaoBYFxdc",
  "key46": "gLmV3kSMG7ZETudGQ6XqLN9MjYrEQpkct5UAxap943f6Z4R8bdbVFTxCEGeuKuoVV5xmPy4nyp7JVciZUYpcKyg"
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
