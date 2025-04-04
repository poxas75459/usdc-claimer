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
    "3UQH9FSuctCZn4toKw8ue1ibGRPYrXPCJg9w2vPeHtimggEFhJrrnFYBNFEk5Qi91YKfNykp4x3GjCp8f73Ey6Pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NhxtnYsSp9gD6A9DNwJ4vVwtzpz76LTBWve1bK7Eindnfq1pfFDCBcSsBXYu57Kd5uvoBgNsDLz4xYC7mZropti",
  "key1": "27sszzFhWq2F7q5obxgu9KNucNYApLy8P1tp4oFdfpAvNCux6e61dZn8Q49JPpeoA3TzAuCxX6h7SnRPaomawneQ",
  "key2": "5fFrDAQ1HspVH31aEqTBHzh9AAwJwjKmjdCNusF6YnxAk9HPRdK8PMpwDW9hMjRpJyKa7aBoVXfj4RTxFCyT1n6H",
  "key3": "3URaKKxLoMCTpeDrqxxSQScJ8CV7pnnuPeB8c9KywJ9mC7TPS6WgrkDCrpfhKhkffKK743TBeYEa2CzNESkkYahf",
  "key4": "2h4JqxaeW13NgsgN13XqWudGQcxGTJvsk1XQqs3cTw4dhogQzCnB7GTQzzPnh6g7zsq6HQzuhCedqwTfucu4geWa",
  "key5": "21j2Sbvz8yLG1KjakXgoNNTjLwnNYN2xkzS6Q21VNK6o768tSkgrVv3DtrkwDWFPWwnixcz46kPcm187qd1RDejZ",
  "key6": "3vpFcGsDfjQ1JSHcSL94ooibRvHjFfNTepFMCfKwYwasThLqJU4CSAKMxN4KF5MmveSQMCCtasivaLZpe5F61WB",
  "key7": "82ofxLYyzHBZDpEu4reHBN8fDLmbZ5PGPqNZT9PoR26e2WdPDwzbcW3fd6TduoLkC9xDqr559bP2ZjYkTETrxuw",
  "key8": "2RiBxVSGy3ZyPDcn48d14moxcZSvSRU6bAHq4Ba7LHyUmwmRricfcnL9nsRUgGimWATYyvfYoYScTzSBUDwJJ3A6",
  "key9": "4RKHMVNrXri93CwL5J9g9C8yE5m7WNYMEHq28o3gaRp4kc3Nvi3cLmkzW5Sr8EuSRFgY27UcW7MJh5Xs4n87K4G9",
  "key10": "2dKXhK8e6ax6w4gUkRsT2njYNbCicPBEAtyP2N14NwKkJJgyd7mvXJEqVknNpGpYhEkGf3KNtZAngqqSUTWCHUry",
  "key11": "5JDftbnA4eP8THWYRNuUBfNdFv7HLsjW396ygdNdaA4GafT65CPkfhSFPkiVcLkgBmwsxSA2jzP2Nt1LEerYdzxy",
  "key12": "3X8mYRdo7hvBsNXqk98dfDtFrg5AbWjACRVgAUUSUW2niRQyhEgvzibZD3EZW1ESG44sxiEb1JkCsEDsz9eLXEhw",
  "key13": "3C4KUEj5tUojATSvhS698feuXwFhGFdzn5iNmVSt98kXWmyntTtAEseqonzXeb45At4sw45Pc1hi7jEVZNVMVRJP",
  "key14": "3fE8N5yRf7cEkSLF8iowMA2dnWZwKzHoL6L6QPVHh876KkK6iMwp22AEYESas9DMsJcPqVC79ze9XmsrvirvDVSs",
  "key15": "5k6AN5wUkz6an2UXs83niv2Q1vAJnAQwHY2ByXZSGwpyvR9CV2vddDScg9v8VQmmWLdsFoqntbhx79pE1w2jn4od",
  "key16": "3eG2ubcYjGfLrHyHsEAtfeuKBzVsmwEuFwauEanYTmCFngCXMCGVtYUpTzURQEK7D2qDZsmbW9CzpKaseifMFfxZ",
  "key17": "52VYxGL7L3oTAnSvTRKHH4LS6GETiWrvriUJ4Uts2MNfyshDeb6ExjctgZCm65qDx7sPERfxUhZ7zFVHzCerUJrj",
  "key18": "3TQYz1yKNCYmBJ9zz3dxpS4ePGYwn98Fj67W6sFJCLKPWcrTgLFjAPNfBdQnzHjzqgDipGfebmLQDusPDD9Fwtaf",
  "key19": "rgKXfZknV4DrGkgob2YhhuG7pdsSpfg2v6neCqmqhs3VrWbz98uvf6Xnd7A6owgoWQpiHHv249HhTT3yv4L24hq",
  "key20": "23CZ3ZTUH3TeUjRNctWtzk3iM21wgQhKoGCZVPWyjB2NwtCreN47sUySdmVYmKG5PMj9eqYEJy45iyUHoQeZYyBP",
  "key21": "2qmeEpY4unfdw3ghNtgbocQn9ppf4SxUAPqVMYgy5fAMuW55PhTts4iVTBPropGHaBW9Wu8ZNAJYKdWZTW5KCFgc",
  "key22": "5QTxGoTxN9h1AD2KFr5DCkUJg52qaFDsNV1xumW8j4znisRok85NBC3MjM6NMmFJDEZhNs4MYfPLuy2SwFCkevvT",
  "key23": "LJ1Li4ZaX7kSWQLTSEt5QhseyoUJe9yWtKamNDGHAFn8T4yyWAcdVN9xauwgxnvTCAtKp3itfLK5jdHDAa1EYTX",
  "key24": "4uoWWokbvuxuiX75DrZcSuHNHkZdoVw5YdunXswvSxYsrAs9h4TEQ5vj7DX7QaPA8jj2HKscY3QkwekYpPmdV8PZ",
  "key25": "3aFf1iWcReR2ZTfwtqDpZ8oz4XyB32yYxGkeKNhrq33FxLGFBQBtaaveFtCnmfVE3AYzdpgKe2U8MP1pmP9KPCBb",
  "key26": "5EEDKanWSRs6vn2E9N5YsUeKGMiVqcVVBfb4BSeeE4xkwjKK4ia9givjKUz9RYAap9s4rWBuhW6zwLRVUpcRyTZT",
  "key27": "5MVDyCgvpBK1tQrLk1yCNrzvBy7bSiH5Fbi3CoPt17WLdyEEkhHNvPMduiixeZibpyrpikhYXWAV3TUuPMoLGaZu",
  "key28": "4zpBVE8CiHa8PoAxeLXUzrrydC5woMgr56uenHRJUiQsdpxWJTesQuyEdNTVNbgpjMaEoYKBoxChqy4V5T8hy2KE",
  "key29": "265rksXVwRQe9pzgt8bXSJe1ikGykhUyJefqMpTqrxUJbck7PkUFLtdzV8W3LUnScNAY7H4jw3MBpqFGmZTFK4h4",
  "key30": "vE7d4Bz5Ctw6XriCmvVqSZhBn4mjJxb6PVgMwFo8sv2Cq97fGx13z7np5RzZeX3Lv8zVSsnFPzVkB11Hud4oo6y",
  "key31": "4Q2YpGTKFCQ2MEVdia5tLLJPWkPKdQgNpMYAAbWrQ2xPeN32CQCwf7X6JK8qGRHAbdUN2WW1a6zAun89KRHiKnh3",
  "key32": "5MiHToheJR4bgC66nr86V3MK6LN5PYdzbY3BCkisi8LpdcMbHVcbvD19co7woJtmKYdoXQtN1Tn2do6MqVe2Rfp6",
  "key33": "4VUNKoS1pH8Fa8Q7ahXwiyctwqqTkG4L36dX18sjsYkTcbuVcQ1Cg34BZHrzcAgGfeoawkXF4Gifed3U2PEsKoYV",
  "key34": "48h66ZUFg8n4dGPN2vFDZqJjA2xrSAkDaV8dFKZuwrJsZn4f6kfEPsWC5sEnXDkVgHwogpamyTHMUiuig5nyZ5ac",
  "key35": "4BjmLV4tQPhdrSoHTXFSziiN6Vi93oMsdS89LzsXNkfNskqKtdTe88ny8qYnsd3G135DgQpHfZKXZ7PzSu9mChCv",
  "key36": "2CsQLbFfjgdkN3NNPqK11D5PMzfxsoARUspUXPEpePdeAwaDMia3xwhG9vSfSmvchpafXr6EJSwpPTbJDgRVGEDC",
  "key37": "2aLKfvDUSkENkyck1J4DwcpwwGdgVKVZ52YfK2vgQB7kDFLBue1qcsmxbPzJzjiy4JYKZi2DP8AvthVqenWq7iM8",
  "key38": "3cJBGQXnZYTsK6VaWdWq8yvqZZMsPpE3qCx4aiZXsbDfznQE3tQa4wLfXENtHtbCSK3C8WqoWQxtNkiYk7UGP6Ax",
  "key39": "46JepjBg4Z5V14JtA5NXmviiag7iuYfkaM2uhrSZJqgKxocQgThFyPccZuj2hwexxhgGfu4oXym4s6C7CusMkuhC",
  "key40": "3tt5zgZn3VU3c9kNrxBHngbt99Asyic3ZbLa254wnooZ7m8tX1r6B92ckPNWfWUiqtv3e8mmbrmHLDXiDPhcvaQG",
  "key41": "3hCRSiix51tV8byYks2muxy6NGAfKtenUfWnvPwTAcv44NNs5shyJ3pzQV8UzTcrvfQACtotCGRNoRRExGyFumLe"
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
