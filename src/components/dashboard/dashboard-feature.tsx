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
    "5oBhy5fvwvSE1LjcVcaGUAjBDb5Z55mNTCDkzreer8wLz72FgmPpC2JNEE5bYmzNbfG7xCkm37SF51pBydpdNiWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zvf7iXS7nps1JBXB85EwP2Sg7UJVuEVL9Fx73jGyNgX65n64URT5RpBG4mPL99D9JyWweAXTYGPFzLTWR9Qsi2m",
  "key1": "BJ3XdjgvkPJvALzKoAuLz8UrCkcUS6E4UQuBpPvUSDHxdrbXQ2pPMPZf51mpi9xAxztFU74EVYFECtQZDTi7tLy",
  "key2": "3C1VT2AaNL9nQ3UagM7qk4Q4vSQ7SgGc3jt3udSqWDCT4NkRyLsFyZ5Wosuf2KVwEANs6upooo22VyS55QNLHR1R",
  "key3": "4oGwHcAXZt3Z3ShpyN2x4AMSCyB8uggu1jMmJqsZVsfBQfDCjm2jVCFE5L5Z55zaGwBDrgLppBh45u646UsGvcf2",
  "key4": "62my7fD6ijMD9GpAKWZV5gSorrbvf68Pq9UoWJc4VU3wmw8q6fMBU4NbLfMqq4LVUxmmCbrRwJznoAjwKn4S878B",
  "key5": "3LZr46yTf4UDbxfFKTd1Nxr6aTgCHqXssV6NAd9uPaTGLZtMidYyhGZXaDvKdDJMZjQ5agtXVNLqPRHTEsDTmtoF",
  "key6": "3bics165PHgH7GgEFjuM3TJHmT6D8nCeAwMTXqoXKsf4U1Jt46kARphr6oC3H5eUVd1WcXXwCcpnBFLS3iQXjEK4",
  "key7": "5xKeYnsPnJxBiR9CMzT51BQSCVWHi7xY7f9kdu8knJ1eycWbyfz2nVUvagpRbmP9GfKe6KT1VQKQb1XLAau9EEnB",
  "key8": "3GTMXkY5pi8CYGTndy1JSUUpcELY5KxpJsSazY58WCpME1ro6oYbYSeNZ144Poo3JFm1ZEqrsuDdk4J78oRTcDNo",
  "key9": "tg3fDyrcyFC5bTZ3GUrD659MErZh7QCAdhGAo8Sk3VS6ZetRG1sgJgGoNQWGXPhKc8VMrTLtQRAMYBcHBsM7V1a",
  "key10": "25SpWCPT6keJyphygTTsXfYfAECie741mQASEWFv7kPFJox5N3Hmt1mt8ZJvcAo38w8R79yoi4rhxg3bXFX1Rnww",
  "key11": "4VA8WQP5RurXN3KRNQKEcK6RLkPF31nfHji7CnbCKWzuLcJia6hpLVbGMpowQPjeYFqcjSErY5DGq9qfoAgZtD3u",
  "key12": "3eo4ruKj6dregHgto59K7uDgrNiZ9cPXB97EFCxvikbwZvFWD3BUTaw7QwRajof8WSowdoHScNJn961fsHVBpRKn",
  "key13": "4gQ61ryucr7v5v11ig4TYG4UU8Hytn8K1ESZLhRgFZkvdagjrBqSjnzuTvFc6GEE6jPtNwB86jqZh1yzJEFxJrjM",
  "key14": "3McLLxUH4m45heQXo6oMDXyi5cbPT7nDJ3KMAA4rWujwHFvYqraNHd3fWAGTG3QWR3yxngSJvZaShBWcYif3Pik2",
  "key15": "5w7A21GVSV64YQU8SVAo6czR65MepwFiBG8JX29CBFieiqcadnmkjhCX6JHaStsYh2b1L9UErdYS8GAmTd5kMCdK",
  "key16": "4oZZXnkyyDSheM3f7i58c8z1yX7Q8pfgKh4VgDT6B4xS5r2oxSqv7ixLRnDHN3xCykeNFEH5hRxkwGxFPgpC1sBQ",
  "key17": "3jLMDxKhgUx12hY7afjsf9Whc5nWTgG7MRBN4uxaFMzPRgkpH75oni2Dpux8YdPDJnxe4uzUNLVzwZCZN7FsKosK",
  "key18": "hEqW4Hcm7C7u7X4uhxPLqGSW7aGuCX76KEYSoqYFcnC3eKfk8StRQvRaTDf3fsWBXy7WeKJbJvgAxhMUf1sqDGn",
  "key19": "KKerxNHT9X5uQiYh4qeDk2XMehCasRBzvzfSQnuJw5BiSFgBMxPBK1GKuCn5etxdQKBh6Z7zXPY2xxMNTbZfEJX",
  "key20": "GYZQa2kCnDqKNAUWd6vRTHXXYL3s4cw2QteHkPcbBmRFEroDUFum4CLBrPaJY1VWtSCeeh4D4DbrQaeo12MnsZ5",
  "key21": "3YMgaDAfZYvuBGbUccBnBg8h8qazvYzGnEHoce2xQaCJ8p49qMDf7CACkgU4hBbEmW12PfCdYdwNMsJZsExGs56V",
  "key22": "5YSBLNPenuBoqzmHEa14VSWsmH9Ygyuch3moAnk3xbaqrWUPPia8M8KPdWkCzPyq5ZZYCXGFYJ2s31GXnm5HZX5W",
  "key23": "5t1FqzPG9oZcsjK7ignSLvakZfMiED15A2TF6hb1C9dgRrhQM77htsz3Es9khrDRwtKsy82vP5tPMRveJkoCnM2A",
  "key24": "j18e2NgKrz2Fw8pF1ZweaRPxJW76GqTwL2QehzTvKVNzxw95rP64bpbysN296sJM3GJmmCdHx8yRaN7HLh6mcYy",
  "key25": "3hjSYtxSg8WkPLsjY5nVmzpktAebF68GpAQPZLwaJuJK9cwce8pTuyt1gCiFDucea6jB6NwKtaa5idj5yd1WaX7D",
  "key26": "28NmUnFSqoGK9Eyfsc6ARw8fwXzHkoAr5vB5CXc3Tf6qe6KkFYRSJ3hedHZRH8RRbpK3aDvtGUmAUhiFzSp8tEih",
  "key27": "4vdszUaCPPBkFN2QT25Z36k5wemdxdBJsZc1ba6PmnDoMZnktfwFQHD8KrYPgknxg9wSdCistDXqXcBua9ReZm7V",
  "key28": "5PKy8frffX2JZMah7avb5zb8eD39SVxuf5n7NGZqLqTiefvS5ugKTwphFoLqX9uaxJ2YUUpFePeQD1AihFSj9ad8",
  "key29": "6emoZjYBsddKy85UtYRAEi9h8MZu3ZuH82nqanA61vmPpxsx2qKUZexb6mxjQtzuEEDw8AXqNmjC6mcof5yz6e9",
  "key30": "4bQuoindXt1gfjUR1vJTobysP7W4Ys1wJDWYhh3UPAN55ksG2JcvyHTb4VnKBfhXP8ER7QtYawhiedcjpUHmgSxC",
  "key31": "5ixjhi356ovnR7wymDW7KW2jBksXtXtoyhhjtWFU8tSPT7eS74axcHRraD4ii5jhL6J5f2SPDNnPAhc72C5eGuve",
  "key32": "5eG7D2wNZ1bm21d1NEgEn9h7kYxyRxfvuT1pZAfXLvbeoQVPkSy6vi1ofat71DuPH4ZzBz5JS6ZWJtYuP9sDuxL9",
  "key33": "4B7TPBKAAaqseXjbXUnXjChGD13USCRzSnnDMY1gT4L3CY7kGG7obKz7tQEUMWyKrT3zZ3nYhwNQ87Vnr6Zd5GD3",
  "key34": "VLgFDqLKbiQ7oGYbygNNxdmfqG5wJ5oqmpFr1wTZVLUcP4Vu9caQ6DpgH3imyb3dpEdFxUGWVCFtercBXhdHSxJ",
  "key35": "2ptEjh55R9rd7Jj8GBMRbiAnrJwziQV4b7pzVKi28h7homfYPPUfFdygGwuhHEKtHuXrd4e71v78Tj8nW6FJtfvN",
  "key36": "3V9KF1q9cYjTZTxayGL3Wko1Gv1HmA8nfzkSzotaQZ4BbdZzvZaTHRfYe9kY9ncHjEivdv7ipSWhJkHwpQkspZnn",
  "key37": "2JmC4oJosHTZtRa2ipBURTA8D95BxjP8kZvq8AmEkgJE9hKnQFTH1tcFwbfYQzTqXEeXWb7FrRf8h9iDmcQfaCXn",
  "key38": "zB65CoXgJiurFUeBncssxHLj1RpkuHPV3GVTL9zDozhn4kwt2gMtwbmxBzMfis1aG5LBK258KP394CrMGzT66Cn",
  "key39": "4ck9skmwcRgAhQH3B968Koownj5WfXoVwqp94yJjc2rSb125KvcV3N2QrbUK2hQ4G2vRmV3SUK2gBFpDVV4Zjfsa",
  "key40": "3mXPSECAtSb3PCLXjqwBeQwguGabbkV51tSGyAA4J3wznt4op6s6x2ZM7DfPkcYyXaoYztAMKsBGVyp2ay1LEAtL",
  "key41": "4vvMyev5KsZvxjfkC91xceB7nXjms6FydY21XUpoYybSqjbNMBcbSnBxkSngewSCzbhvr4MTW7f8Mr44byFi6nxV"
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
