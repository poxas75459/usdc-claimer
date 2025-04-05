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
    "2JyiPNf49tRVPtJx6kHfCnx5JeP2t2qKQfdThDoisbG2CTAbzjj1qnpUVLUPqWPBiNi2Q6SmwC635tYVhZp3GRuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LNwKnaakHZPv72qGdaJPom1xNAyUAQreUgZMYkSNt4YeuqtKnWRBdWzUWWQXHUAikgTvZUXNpjZSifF8o9D9S9x",
  "key1": "4tAfhbpWuRVHEHyTKRBukR8viXvvJSDQCxcaxho3oX5s7hZBmwJ5GU2Mj5iBDzqrLZXNxr2BT3tUpbVGCBkE4D9q",
  "key2": "4h8zU1MRoRSSMVSStabNVTZANaABrgwrtKFtgYVdsi4Uic8rnwkRSyptdT2YQr85zTUGUbDhmb83rM6zXUU1cwKz",
  "key3": "3eBDaWmtbJ6TB8WCSSXZDfTN27NFwm7dY88zYfoeKfWKsTE3eN8TFzgwCzu6Cgbh8oRgv3cmmtBp4jydPWY64zbE",
  "key4": "5epyXAxH5AaPRu7ZEZbhuBeedC5HEVZd6nGszJgZUKM63eQVpVAHGfY25wDbCgLzeaDLYEqrwqtrdL2pJKzrmjmR",
  "key5": "22tE4eNc5CeaFST9W371VYJFx6f3QG2j8LZQRL23zdt17wio2oSiDqUdR24ZWL7mVAdYhGCJWNuyBpNewp3TE8mc",
  "key6": "mJnu2V7ijw5StABFzwsndLqG7mJsvVfwwcywwYLApZJW3yJuEmzB6oobASzdn7a4ZRQboPhP3z8UBaDMpHhyfb5",
  "key7": "2gNsVtbaGkoTyA3NeEFLXCqGxH6vbGEyd2gVMCxfKgjPfiRYuijamU61NeFR4cicNN3UVBr4r8C3Rz46nnxpTDTy",
  "key8": "2Azk4wMpGKQbeie773yncUsRsCroaQwaBXVdH7kbTyLr9uMg2YgGUjFdQwBwwc77kJSwkEkwRp6xnbdwhKYQiEUz",
  "key9": "3wJ9ye6Kh7q27JjpEWukeLd9XVJqUTriF2RsPtMJNKtVEFaYcTSmLhj65FRv6f9hNi6TmMBDL7SRjVNamV4fQkHr",
  "key10": "3VwKfZJx8YVv5iPLCFh48JgNewmw11jAg9m6r9phvf71bkBAJxkaicNDLmWXAMvmVgpmk8zM1FLYpdKq2zuuGGV4",
  "key11": "qWe77f9c4qVCHrhwbn2dhpJd47hiD8mTcBnuWmjk94adEmgZRafLS36mcyNjxLz6y6bb5nfc4djF28bRgUdeZKt",
  "key12": "haywpskyPk1Mmndk2hdw1tribAuH83VUgLCdtaPhim6uyJR4DFPUb6s2GwbPU8JHUyr2ryivKbf7St7L5aHaLbe",
  "key13": "4RKt4uuggfVwnASCNjZCJsYBedrfUw4Eks4hq8ZJct3nFaAED7uCDs8HKSyoTZhEjHo8E1aEYTMxhU55pUPVU181",
  "key14": "NHVbNZMgoM7wWGTWfo8xvWCZPfrgSfUn8X8b9D3vaP5wTeJp6KXgXoriT53RSjThRgDciUMzcoX1MALH2gpkXx3",
  "key15": "5s9QF49GyhtYsLgQJQPnoVhj7h77bZoAsCwz4p7aDH4yxW23Q3WnAWqTbLLPjPLZRhEh9vKN6rcikpz82CjqZ6pC",
  "key16": "4wAEdnCrhjvAaxTx2k8umfZFEWoL8FNtkmouewhH8SQJ2TkEmF1K6d3jHqxMpsr95CDfJBLzYKN5g4E9k3vxZ2Wo",
  "key17": "23iL8ET3kwHUVv77w4bgpVD82qcmFfEPSkgJUpNnnzRmwRW4tnwkrCPkJb1SFJVPvo64on39DcyPhCLKjMh9s2K1",
  "key18": "5Spc1rufiaUwNBZ9rveCkpULM1Pru35ey3ZCbDgaqsHeRsu3tuDwFagsv3vvsz1qappVahAkETXFPXpYRWiH6vNX",
  "key19": "4Xu6o6eTrKnw8TuJLxCtgDmmn4rfsi4QzHhkVVcjPy9fNwWkMU9L5G8XsT5HxieAMEXW3F9343nDGCJ2p25EtSxT",
  "key20": "sjoD9qiVdLLKrgenbzaPG97au9MewWBn16hUFL9gKpRjZjV6TqjSKuNeUSDnWQXJgxkR49mgHP48x5xPR9rqoGm",
  "key21": "53MFENzhJTcEqfXcGdLTS35nyboXX4t92FgNqWh4cJ1WBSWmoyEBetvTVrxe5SEjGjkXJyn6hLAznJk1Zt64w4zz",
  "key22": "2CofYxrX8Kj44mjdGahRDD7DX5ZAwDnir5VazPXQJ24CMZGZtZhLb4e72Sw4rgdtnvgB2k9kXTBkohQr4CUwFFpF",
  "key23": "3Q52rxdBJeBUvzPfnDeCbzoo9kZjpuZCRUrogBkTBT2o9Ky5zdPqWSakuZQTRroN7EZ92HiEATPU6RDkCBFtDKSk",
  "key24": "2hZQExw8AciFYe91Xds4pXcRRT5sp36qT8nd4wjpVvDgHxXU8Ykn239QVZyGXbaij2K3sRkF86b52wSHiEdGJed7",
  "key25": "5RDrrPb963rzY1GWdMhmcU2tvcKJ6tt7xYQZUgCMvSRPcdHzDNMuaqqTR9daMRe6ZpKLbNRTixDHA3nfuAsVa9X3",
  "key26": "H5xFP4EJjPqbu7bcfkp8sLzUfudvfCrH6bRxEThX3HGz2TwsHZbXjHVz6L6cVnJGoubhvWErZG9ZrBJMy9AtxdW",
  "key27": "3yYNXxwv3QJk1ZcLHKdWf6HNdhSo41RgmAqm3BRpJmvLZwdJH9qRqES3t3T141tCsHWSGaj8yti79xzSpNBqCvh6",
  "key28": "4yEejqK5nZPFbzBT3JsLM8gmEe6PJMzPipRsaXN1PcEx2VBBRoU233YiQ9d2L2AUKaGF18cB1vP6uRtTUN74nDpj",
  "key29": "5cjfqRcst6TrBNcH7hfijwX6VCj4dNAqDXGYVsg3qkXAmRaP3oiytLUWYrTXat4hJNUWkMqS7VdzxVr7rb37Kb9b",
  "key30": "3Wm94LZ3tsvg3GosK9ckjdF7zzCP35GQ1kQAhYhnfDQFH5TEsFPUMeqGTnuaULwymu9CdwKTBoiUZo2mn2KE25gk",
  "key31": "4Wz1UJKJ16DzAm581PejRTiwWL9izMdUs3iyrxpYeECAEQSyvm6fq3N8sf7KpEx4owtL3a8fuq8VvjKavALvULUU",
  "key32": "aqeCt5j5SorrTkMHxGDYCUU9NqqqzvxohaNWFmExcRyAjLaUEd9HPMwCZ7QTo6RBFmeFagqXsi6hCfehZnVpEAC",
  "key33": "31Pkdb5M2EQ7CGEtHVpd25gN3UAy9qjuQ4v7AywjHXHLpQc3a8VoRMcM5AWhuonkfviAc9n8WXrvWXCYqpcF2Fs4",
  "key34": "2ibFZeeQ31secECWkL7797cJ8onVhufD2VpGgnpwB3rQfbonejNjKFVF1RJ7BeYqkU5XEeEXFjWHw48VkjmSp1eL",
  "key35": "4ghLTcAAiEnCrUnk8jxcbbvYzNpinJrMHzNYyQiQJb8ER7cpKmoRhXV7LJtnJveKHZ4r2MhqkU28gvTDdu15nhm4",
  "key36": "3StMdrUuT6ErpSWK3NaGXYrQMpiRZtQyLSV4ZdT74EhE6Tsxo3FpxgEdoRY1h4LvSEww77Br9rU1P7ThBged62fb",
  "key37": "2EXFYQQ1tuBLiGyHoa4bsjAxdJVUgigE1TQ5QGaDjErgaHezDwqmYt3qt9e1GJ5G6MhHvzn6XPvPQzTurXwVm8g6",
  "key38": "2AAqPmZaXEqAdFTVtFosRcKpQUoNFaCFHCE9FFRBLFNkrLdkiCf1Jd7Pu567opLL35nDMMkBEKux2CrAzM8y1Nhz",
  "key39": "2yobeRP9d436zL6eW7HYrpkUz7s3mXnXFUzdKKDv4RhKEYtxUMzzCgNH7TFpcNh27j9w7r4PsqAwBkFQh42Mx8CY",
  "key40": "fbMptiHecqziQCsnvbdyHa1bSAjZb7Gr16N5hst8CtR2xKo3nVGqvV932c2EsdeCdVBhbKCFgisxPy1W8HRWCUQ",
  "key41": "2XJsF5CDupLV2XTWQ1PnosFQNZpgMLc7WDQbLPS1Gthk39RimbUsWHQqnFZFvzJpFTCasfA3W3K7MFx7stXdXAgQ"
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
