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
    "45pZbceKHYWn2QJZWnQShz2xu3jxCy6ojWoxwjffQqbkqsRp6iWGuCgj6dJbvxSgerdiiw5d5x9LUDPxzHJqw555"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F2SCgc6EjnFukaNaWKRnR9XGeHzmb8BFCWwmfktYQVJHAEvpqcSRLdHFyCocGWAbHBjuJpGcVe7K22DPAWYjbYp",
  "key1": "3SykMN9P1r69z2L5pfDUauS7BXsdqWZwY42npTrt76rbGpZbEV9Lp6hJBJ33pcKrtzVPmc8LNHkGXQbDF9avwdap",
  "key2": "67P6t7g2jJz1prfsUZx8y2eoCAcjT6Sb8qRcYoGwmFE1LqAJzkKr551fpvbdWpYRqcBgwtvo3YRjxGJzjzSGnPVZ",
  "key3": "wQFGKziomzwe3sUzbvwyn1dNwQ5yscJuwXrjVvK4TMRbRxZj5yBwPvvACS9TodR2nbeVcygJCbHHU9r6peQA6u6",
  "key4": "dqCR5pMAsYDr3rnbUQPxxK4STejnjkmkRgq3eCQwJEjytVY7bwBPqay23YW15xZq8VbfLrYXnG2WKVA1Bm8ntMa",
  "key5": "51CExNazr5ueHRMnV9LeeKzRg98k6jQ9cPH5HfqcQoUauoMqZCR9G9t7K7VkW3ykGy9JGgLTp3VzBThnSJHrvXct",
  "key6": "3R91bwcKuNYMibETbLGbS4MHvWkf3xWzXJVHtFgpbmrLzJ7ou1p5JR6yzfnNAki8BSN67YkXGHgTrDuSvPWRjp9L",
  "key7": "5HXxsSi3pTS4Y4uFXu4D4Dom764JFhsMA1p9whqwbpU7quLHaSchvpHxqUDCx1ffohrKiFp5Hz6oTSjN6Jp5CPNf",
  "key8": "5sTgWiKTq6NnDAkZkTxZofYfKV1L4P6SJfCv9ZVoii8GaF2j3GJRqLzXBVfGYgYvSNuQxxyihvddcNc44LjHwaCg",
  "key9": "Mpuay3zfxTdnVhMCwqVV5G1v17mEzMsmKJcEWPWeP5yZUxPemLSkAKvWHsJEbc6SFyqTzmAD2ui1XkCS484MwZW",
  "key10": "3TULz5D4pJFJK4pwHBij97MGWzpW86iyjJsKvbR7fsS5j3fUrxeytqf1CrzntZBsNknZGWg9QGAmMFwGbNo5XCU1",
  "key11": "3Pb4fYSfjdzHyL49bYTJDptsctwCwc9Mu9isgdGFPwWcGkrK6NTyDQMxD6y8SDFhasF28AoZwPjcPX52qu59LtJG",
  "key12": "5hb15TD3sYdn8HEbgjR5qJECvpWfoaRpEiQFV3Sc8fWL4f3rP2cj3EgAb2kSznf3sjva1dyzPLiiPTPGp43Cecp1",
  "key13": "2QN89sJMfz3QcJVHztGe843ZTHhK8YNsZ7bQAdEauuij4S6dhNGLJhGDMy7P47KmGV5zqV71nErkzZFQ3UGNMZit",
  "key14": "23xa7KiWW8BqemLjNJWPZfEhHkSnf9KM9W7tbyBo6yUMLBtdWkx6t7myFTy1gCDtEM2YMvNWAKP59ama31hjtaxY",
  "key15": "57m1evHRvmRsEbjhfxSjYL2FnkY3XVu526YuaErHt7i21T7aTieP4CG9iS8emBPNbPqV29y9WsWiW4tKhnb2aYsk",
  "key16": "5j88xE8y1v7CgyNhoWUT8nWWYrv5qBhXiz6DJBXXjqM2vaowo19woGL6EhBrc5WrNEz4aZvwwCdEfKnLPeFeYWnx",
  "key17": "2xERkdQL7MT8SmtmXCsZpoJygiiCB6SjxrdGrpYimvJMgTs3Q8d9pRv17cbi2AnXFStnp1GaQWSaheVVPW3FjsPQ",
  "key18": "2XKArqeMtWrTvHD3DMSrjYUtABEg3edLv79SspZU8VxpmRAJUyXE1Zqk3MpUvUd5LdvRFLHN14eDkNT23Eoqv5L9",
  "key19": "3eY6i6Qifbk3SmZDJfvp4jz1qRWivaY6iqdRi73dwa8Qh4wDsrAs3QaYgajQKE7EJriDr8VFTidEMffiaoXjEM11",
  "key20": "3wqD2fzsKN17F1sMb1bbspd9XtxYfaaboBqLEqE52if7G3ZSDSQ4kkVLrMKPGroywg3ZgdVDb1EAUVmFG5Yjm4EH",
  "key21": "5mrywUEE3BS7HLxwPZ9XCEbAoXmb9wCVPoz1UygB8yrSVywZ5zD12aYoDLKasZSt6CkCYijMr7v2Ls1wJgEri8Av",
  "key22": "31suGjPQxL4PmHmC5VDrCG7B1vYnDGt27c35P62h8es8YF3JvkKcZSoMBTK2DCJzN923rZRNLTbAhqLAoBWePeCk",
  "key23": "5YQ8BPzngf3G4PDm7ckwPy9Mz9w9w3U5JWQ3BjJ93BUxMvYq1mEcPszNYuk3nmHVLyyCjJBHkTA5X2pAT4ZP5PYA",
  "key24": "2tGSH1oGxpgz28Lf9x9urnDquUihReHghbdHCQRLL8ZeujY6q2XQYE7MsQcidZxHvoDJbHHVuwByE4BvYGuhdSNx",
  "key25": "4qcU46dkMwZcXphKsPTTF9ukvJKG367iWGJ61WKseZd4Jr1YFEF5H3JGA3HUMh1VonZKwicdsxSpJb9veN43soPC",
  "key26": "sJ8gXVhNZFDrWNM7d7WU4Qd4oQr1mmqTYUuu2uo5mSwf8yf7ep4jpa2W4TUk6GgsBxx5Vbt9dBjrhKwhRBTjeSr",
  "key27": "VmsKAmc5jxWADXbDgSvL3iZwXKsnTk5wycxAmuu9i2DZZUh62eMWCAHBdCDfRgVBPGwz9qS3dXErZenabkczZ73",
  "key28": "bw2q2Ne8w9Wy9sE6Mm2yEfJQ1Jv3p4B6KjfYayvhS1NrXRs4njVavLbyHN3VJM17vVZZUSfDPd8FTT8TJCAJxBd",
  "key29": "NiifiBGf45TJ4rFqGnQvqCnXkLnFPsdKgdiUzU6ooeYok8W6BD8WZ1tSFT4tZDgEcQHAa7JPiAVXaj2er2e8CWD",
  "key30": "3vfPWMz7mnzTsFAMPfrXxLSb5MdbCwdumTbGseA2hkN3Ev7rJDoXmveNdexGdm5RwFbKSLHyaq7Fthne9bbkxEvx",
  "key31": "3ZvJyNnNwhNiyvLXJv2kvYM6vX5ZpGQcSgnftcHJryW26nXxSASmv7JZRptZ57v5eEeWQAr6VT6KwzcU4pHNzuDR",
  "key32": "3xXa96rZDgk1mjpkXpzbUcUpuMwav4MhaZhMzyscPdY5kU7Gj1fu7w795opoHMAzwTfH6cVooz6YB9cZfgnXorfH",
  "key33": "4FgB7TxmKo1BATBk9GpBs1BEqBW87Fyq3sR5Y11L4S4aCMShCxRJEXYLFFwk7EvzW6taARYx1bMhs44bnYt2LqKs",
  "key34": "3B9xmkCkkTsQNAUGuaGn6cFvARtvQJxxZrk6FsV2RCYh4UQxotEdFEmzsTDNRE5cJsFR8FKcdsP2RvFq3LWcZiEY",
  "key35": "3kuv2EoCBN5JBcFpQ8XGYcpapm7KokuaJiRmdvrXustv7tecfSvYxJ9gSjEQg5bVU7EZ6xKrWpjMkMyJRR1G6TVY",
  "key36": "2KGoZuCKJf8zoBqC9gw7ZgKi2kB2MpavKuagNdoCyBab4CJuHgCxgx3Ny9xvuypordrWfFZ3Pdbg9CkiT1kEnrn1",
  "key37": "MqsNvAoubH6JtKZgdbHjwA1gqjgiMFs9zHfjoQkDFDDkVdUELWsrBknU3cQ1LCBPgGoL5sW37BD72exyJReh7Pd",
  "key38": "nesf7XDLbXQtit64GSnKVivRPSF8Dpu1PJ4YuyN9T9E2j6F9QEhJQ1txHX9WKQJ4A5AxG3fDft1QRBEtVLoDk77",
  "key39": "2HFkAbPgjsYGxVm6Uz9ZNJ7ZMC93Ce3LKDwmSd7J4cAvMoumfnS7YFeAJvRr49YpJmfiv9qpgtzC2YiZW9XQbyJE",
  "key40": "3kMoDTbArvd89fpdFk7H6LNBAqMPphL4oqYS1TFcBHPJhDbc3xCEDEQdeoq3JTxHRuEMKWeqLqeeMHiYjvwztDs4",
  "key41": "3aJRngeVR7vH4Gzh9jUR1k4fzD5u8g5mo89GrXgChPywAYoP9czH2h46EEi5Bmcya7qxfJ1RUrvtA1bVMir1QaSE",
  "key42": "423DmtBg6o5PKWpYAdxPyPrNgy2PYp63k9qdVpxHu5tKvaq16UNTTZydLSt82cWsfmnihoxvvS6mHmZk7wX5aNgW",
  "key43": "QDNbpFk64QfZPUZg8hcKtg365kSHD7s3DAkAURCMMAD3RGBe6ZQaMQpMVLDP3wHbUfkzd6oDZEpZBZX3WiX6iPi",
  "key44": "29RDewECRvaykf86JGMfRdbYEVTxnmmY2QJP14ZFCPt5ED1jL4knmBCtyXCC58frnqWsubaHLTpbQQiKshrnRHvt",
  "key45": "3kUfbTBVYrksGt7bVCubuZuirPNuzbKKDdqRZVTPP91zwbPk5XnHk6giqBRLWSMQjwCnP5GuW2Z5B736jJyYw5Up"
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
