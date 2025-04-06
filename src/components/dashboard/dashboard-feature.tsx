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
    "5gxBNzWp3H2r9HvkawPMGQuWXHZT1Q9tw5e4CYsi6g9cpwYFSeNamPzxWdMRSBRQfV7cBKYerKAQGKmRRQhtsFRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PjgDkJj7Ti9QEpvmQvmV2XRzWkaVgt5M6cPdCsBjy7tSt7Z6XgDqUcMoWryKqkzYqdGYFLq1qPohAMBtq5EFYnd",
  "key1": "3VWUoo9jWAxSHFFgHt97dQNH4cUVtrMjqyDvmazpr6XkQcuo4xcpuwwic6HL5gmTGeaPJdhMQoDDkKnuPD2aKNYm",
  "key2": "hztD2YGbYZVcbunki3BGhPGpLiJPq3ZaJDvat5TorwtMaacbgbiYAnFU3LsK2Nb9MhqziEqNwcfPh3FkZ9VLyfZ",
  "key3": "64jivEPyxFXpywDGjBPHjYoqbFwNcx23YEswWeYdebn3j2VmfMvj96t1FYgTWAs8dFtrRNE7dX5PLzzWCE61ZXvv",
  "key4": "5zVF67V584yF2mjqTzkVCuLVMVgxvmoaTrNTSZDdoiurDAW9wohXhJjb9B2ZAxoDcvYXg2CmnrZuPGMFSbUoGpqj",
  "key5": "2ZrVgpF8utRF1o7LZTURSxTXGv8YDPadrqeRanpzLNJDkbK8q6TWVbvrkfTtV1KjCy3eKbmwF76LUKJmXX3Px4uy",
  "key6": "BvKHZoG8SYEKR6X7QapayQz8r28VosSKtn9jdfrj1CGvzqP5szjY9CazrjxPbdbzbAW8ohLGeqbEEx6R7STtj5Z",
  "key7": "2vRQSCtJyen2B5pgkaGQMctnR1diX8zx7Hw3txgvK21vGoDRZZ9uFj5arWC6v8BaEwdabCfSq1jHrzXhVjovk1hi",
  "key8": "3XG1CFsFKYCumxc1RvGHZuagiNQASDpCXeRTWMCLskgRDXuvoL16wqzFKbmiFRe7ha83VfEGwRADUbeiGHfScZtj",
  "key9": "3fdR597ony3QMgzW5w6UXU83q43QureVTSAXR8yaCxvXFTNdaWuKk3nqzzJcqy43yM1uJsqzmYemvsPn26iShVkC",
  "key10": "rwRejFozNBwjCtZ71C7NgcxohWVHuyGzrQNTogvFBXEQdtpZpne8HLKe6oRLinjJYt7oaG61xrJpHG2jKYM6UBS",
  "key11": "dnqThqcMP1UGSuxoSkD6fg91622nMCfthQav1eHt6RstnLhqr1jvY5HzKbUrRMbLaaJLyLCeBRYaUip7UyDT5LG",
  "key12": "2CwNR3g6pXEWByZSjvhETB6LfAqaZVucY3FFNsBqeWpdcQU3p3bMjp2YURVrtoS45uehRMTbHJacVZfuVNeKezd8",
  "key13": "5EPkbfWvEF7pkpnquncAXinKafkSsg5TfWAoN126w6QaSDQYS2s6fceZMdbUvuMkryfKyRU1422YnsVjmJNwShnm",
  "key14": "3yKgccpQrzCQQFCVjEYtEcXyx6HeXvN76KV2LUSuaLfh16u1rMmphPdRxFjKqgxK3BUFur26zsf8veJ9VPrUfNFU",
  "key15": "WRsi3vj4mwgkfA8pN5kKAQwgPBUg8XZ9AVbCVmP98oo6QfktfPoNonofv63snyntNmyXwg9maFFai7i6TAcTNkr",
  "key16": "5B3CjCWMQUDr285W84NgjLX6h4Ty3KcvzgpzXSgLuEoGvhseKCyrSXcCFXCoQXiAtKTjmEWusd4pkETPNaNCf9kH",
  "key17": "3WAyH4q8aYQqgnwdd9X2SSZQXTYQW3JnyxpMAXPix9213FZxiJ4o5aN3iJFTuzxZ9dcDYzigpAabzXHEkMoqHkQ6",
  "key18": "GdgZBPJLRKzTaseKtESoDzoMCkYyLKnUtRF1ZXhpLLDg45qwkkdxCBogy5BRiKtHkiMZncFxv9SF1iTrA55k9Uk",
  "key19": "ena8rs9CYbKujQptHWLDFXYWdC7LB9P3vS5CVsM6BEqX8mhMneFkCG8pCwdPXE113YV36CW5KS5aRZx3eMjDdMd",
  "key20": "3ufET6AWbcaiS2Efa7EakhonNAYTuzk3eqJ8rCnMNqzVD4DmkWvvCenjW6BXAwv4zZYeqBxwyzjEaYkiwyzsZqmW",
  "key21": "5mqU2aPvwnb1L31PK99xUnyqdaxCAxTdDSDbhynbBcqGK6Sc2Vr8fViPYPPN5qPjvMsDDU1vgnkLR4va41oVDpSi",
  "key22": "5PMEbWuj8v3tZjGEQnKjRJh8JZ2ipM4YJBGTzzMuGmzovQDSzNUtjne6ynh6jbWrwK58JHoQ6mZ31VBPN2RsDJq5",
  "key23": "2zQsqqwxSyjJAPHuAytP6QVTbaHkiS2se3bM1hKaXRY8duHKcSbexfDgyg29KpTbE3WXV3TWkjk4gJn3xiDn4mdq",
  "key24": "4TrQhTnZLrDPtZ67DuJ8JgYj6GHR6C7NCw33ksJm9jyNNizGEGT8gcn8jR6j6r3kScBJemvwJwHLvDs8UvupCx5",
  "key25": "5Z7Nz4d3s1WtptoGDH9ugqyFmJXum4dvEt1qzt9MpzjFH5yk7pkBijzKYpsN5YX6wo7g4Djtiysg22XGBshSGrjX",
  "key26": "5aqpipEg24c6FWnZyS288ZfHpJjmL8rAgwEBuS6KK3EGh42zLCpNBGVs5WVduVtCAdd7hXyT36x1yUUG5VNyMnwN",
  "key27": "3D4BYw1us8VqCfv9yqx1SuPSPqHvhupB6YWVxzoWSLEgTdfRsJzfFMMGcfXHzXEPVH6LYSAWehV7aS1pxJuyGNnT",
  "key28": "e9z2NNHUX74mu1u5EhakDq1RAmDwbc5aMCKKPRvtWAFEN3yWAF9aNhv76T5hUsqWbwA2Y2jvUv4qEFPfCaCxqUD",
  "key29": "5Eax8uNz6UQ66EYe4o8vnPR5XWTF15b7NYdoVbzQLvAG69WpjRVKuPgDTxShfyvnGYa55tcjVwX9BenfdNTNH81K",
  "key30": "67iUTDZXeR6VamqHhhjUhu9uq7GeASpHB6GfGiQDkUcWnhoPeH6qpGeSgrbEvExx7Y6s4swkSDqRrgfHFuuwDCpm",
  "key31": "41a6XRBMhJuY1XPGDrk9RpTduVx1zfdpCA2mWAQhShbBaVpE8HAA6w1ioTEZuYpA4dnpZUv3YB8vM3Xo9aiBZn96",
  "key32": "56x2DGQdiWNfb2i9UxA4Z4bk9Y7K2pZf1Vo5DNfk88nC8LpJt2F388hVRDWLYr9xNDmi6GahRriLdm9gGvuRqh3c",
  "key33": "2WBP8ud1YG9HQSjWLUvab3nPJQQmkTK8PjyDkn2tTGjguGDF97gb6h9H57JSHX3ma6GTgUsXfChXPyepD9EEHUH2",
  "key34": "5dH3z3vu8baKEW11XZosQwy56ac2QKFxpdcziSLTLDwgPfvMYSzgaMuLjXqKrGprs951AHaPqGD38gUk2mPtYcnr",
  "key35": "4WSb9p8UJ9TGohHa4u1Pxz78QcKbJ55cRkzFvPmydPgRwoV7TeH9KRKLwX6dDjYDNegesYsJXSdDHh3DGwuLFa39"
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
