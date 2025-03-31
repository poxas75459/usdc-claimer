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
    "3i1JYEXLpc5SUZgk8paGfWxF1STidzpNsGrEyfepH5hH6tHDnHYCtV9QDzSubKhvfGzcUNgDvfivem7vraNzJ28t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dCBSAbayQNXBhXhbxWz3mFYvNqAZ8MLZaFXmuzyB9n1VRbseE9Z9vSdPdqskZjt5UiU1soqXxPWKtvkvnzGnZuP",
  "key1": "3HXFR1Y9DoLdJzMbFDNXh4eoMG3W95LAP29x9XYNjQ5Q4SNJF7HEs8Ef5oof49bG99Wa8WwNuGL4ycpE42HPFvKr",
  "key2": "4J71AaHvEw7KUDiAEmH1JM7d21Vw7fq9JvZnFWRL37K1Kv2NdpfbxAKtXjVdxhxGvyTjkf9rxK4FX4k3PvEptx9o",
  "key3": "5XuACBGme3ZEcp9ZYdF9fckcXZ8KjRjjcKi7e9LkJctDeaG5g3VJD37CaVdRMw3RQo1xXXX1HrxCQGuNFA4YEd8Y",
  "key4": "3kxRXwrm7HEnL19YCXA8e6H9nrEYya2JPBCTb4cJBcjVcYLNTdcVyrTHVKmVHjudcW6GbsVaHkygZsoQmaEWfvYS",
  "key5": "3bNb7TE99mQBpCzLAdwiHVMNNMiCdTwtqjbppbZe8tM8iEDBNxmXLG3mL93By3o2xQDWAJp23w38FJfqfhRDjgE9",
  "key6": "242TcSUn81nP6X3M4RC3Me6ySHwKrsB24X1GRTA976NMTTsuz4eMsL18CKBC43TZNW8WNUrthRj82Doht6kZs5a4",
  "key7": "37nf8ku6Dx87YQCSwLArNhv9mdkxxTnVxb24VuzP6sEqNwDwTdswFfWrYtbDmFefTBvkoQ5iY9Cx1n3vS8f4oZyy",
  "key8": "5LYFneFJUHM1vhzC4GTT1PEGgMvXecWmRxZEa8iRxDHxihBfsPtcNJbYxMm7Rdyqso2VG26CFZWBBDkGdXmJpJDx",
  "key9": "65h634sHecK5mgKKv5qEGNSEgHQW6s2wLt7iEhTTChTDFUtCGCgMw26emGb3ssHj1FtksK4pguv54FR2XsEaKPeW",
  "key10": "RbNSfjhsHbm69SCEG1sfpuu7PmRhy7qug8rmZJcLRwm6qGnz1Dk1QBZWy2qoYusDx4jyEX4Kn6ZsMFE6mVFqNhS",
  "key11": "4NwKszwiA6JFsqwZM4fVBNsVgs1md3wjkvY7kS4kwrVVkf7PqCQk1KrG3F2h8nm8X5fiq78YCdLGpyoUeA5oCcgV",
  "key12": "4LdSAoGnFR4AhPbwXSNRweCdYB8x9rkQfmZCmLsudfxAxPZtZs88syGaq121itxnZA91hYAoZ9A45rjuCeQxx4Ms",
  "key13": "2edYMKnhZ1rZdy5uVuMDM1ugwGMDhVpEi34SA5yzQcqnPPSZQ16oY1qZDNAWqeswfEqFDfSBVhK1MVBxv57ta4Rq",
  "key14": "4MijyHFKmyVgGcRCuhyNzzFXuA5MW3Jzf5s9ijABcejN71RBdYwwbEYru6edNRxp9CXbVPCAzbmc1DQb1Z25DvEq",
  "key15": "5fqzFGoMx4hyYPrNRUXuPUMN3WSp2pu18udzrmskFKWq28sd3GZ6PAuTZtEJvwEx6m6PNYov1A4scaTqPg2Smncn",
  "key16": "5LfGMAiFJcEDB47VaZumrC9KsCqLHwy2cwFiNv66cqCNRNxa1K4cePgnm8SbmHbm3Jinbrpcno6pogpgH6qnR2pN",
  "key17": "3MsgK1ezgA5FYhrntiwCAV3vK2eTau9BpUUQ23XSGmZH8XWADZ8PUcgoq2kXNnHqDjcg4BsmNz2q3WSmYwP6Q4rQ",
  "key18": "gC3XR9xH1n47RXfoxHKJKDbW3tNGNjra875jBqeo8ut2LUj22CZKBwKHKWyZMSMGs6bhodwokRPUu7R2TBkbNaG",
  "key19": "4g2nUHs9ywc4oTstxD2X5bdGBmKinBiwPUT3qyzSYmw2aUDQjiZnSGYogzHv65mMcBSXkAntrVKipd7yCASLDZ9z",
  "key20": "44oEBPiWi336uTkE7DYQPzViBpgaehQuaD3AP7zhUrRvbvuZ7ji2hdYRC1sX4MiVTGKfw6jz7GSZ9gFwnBa63jUp",
  "key21": "4kSQV7sdwRZyj5UiwKJ1HRg2iEjM4yb5RqTmFzDQaHbkqwCFGPRAtFBqbyN2tCCWZXYnCS5b43hapYFzwNrKURH7",
  "key22": "3yWxgGY43igyPFHgrtRyxpgSdsKGvNFSry7QJ3nGAu8hVfAENnUrarPspn1v6f3SzdJtKQ9urbCKHavBBLdBAwaQ",
  "key23": "2GJru3gS8sFMSoVt1qgzdLWm2C1X6fpn86KRHBCYd8R4By18WV1HLDJR9muRMVth8ZPjMRzY3pwB4oKtzSdewk4m",
  "key24": "3XPAMvHvLwdTsrWE4tezwRqsvX25RzdTiSPSByudXhoHDWq2JGcgfQjGiVNwafqNAuLwxcEzYY9CA4eRT83FvNMN",
  "key25": "5T2zRzCJDGn3LS3Gy7qjHCaNRFkcE5eq6Uxu4CCnQ4StZUTMwhELZTfUoVMrjXXC3PKr7yeeCk3pyok28CCn6SE2",
  "key26": "4Dqs9mBJ1t7nEUPeDKogs4tz52HuSHZdGzMDXUJa6L3fRwB2iv2qM3h8eKnCxgDPrcyJdtXTUSC2VjbjQ6yxAzor",
  "key27": "KbaKedwNrjjp2rEvT7YcQ1tVWTWuG8FcppwN22pDuzSQfq5JGkuE9U7f8GrpFdnDCY5r1PC5wbzyyaWtKWEUi8s",
  "key28": "5tpGRo5DKEQSSE9XWR6Hve6UBKQRQWuWzMvin6nuEzZWskGZHLqSDCxtytKeAUNw1W4V8pd9LLPayhXn2i7Y1o6q",
  "key29": "fWeSRdKNx7WF8LPdfSKZkDHLArTyf9repCF3fDzdBia1oWbWchb1AMgJj8qxL6d6wLzHwYGQiFx14rwxxRkdg4C",
  "key30": "4nLkZCsPBUCRQXCikU73r13tjxcAUemKTupw3rdTNpfacFkPeLz7kUVbiyyiTZWfDXUmRqiJU9KxdPSMPdt5fFcu",
  "key31": "5LhNXg6tQ8KpBwLwV7BL8oPTczmFJxr1HcdEbd7rysGybCRi8CXAuymohX6xSVAJWwF59UEtnLXATYbBZZpnedck",
  "key32": "5g8Tn6DLjq4FfKno8XRtdnPz8vbE436W541HqwMqQYPUzNfzBtxFBKqsuhSLqnMhGq4ccuTeiv8sLFpgfEbfHVrk",
  "key33": "3ZfxrrgpquYEkhyuirWesXc2AANZcA5HNmtnmS2eQqY21SJCKbYqYqk2ShsSZWjW5TNXSGTD8xVsvNffbf4XAcM9",
  "key34": "3MVqERwtC32cJF62tiT2RgLVT1uost4XzSB5QdmcWLGU1TqgpsaQEysNUtShpTN3Tfq5Yib1RxEVh1t7GvXwq4za",
  "key35": "3Dmrjze5FrVSDiVjQsa5goVJshjvPZxmAQHCCh2VD3kH2z4N9HjmRgUs8xb8ARUugKcjBbGJyDnVe7Zfw16o3PBb",
  "key36": "4oVh9eZDcHhJMJCn5vPbaUhts1SRB2XWs9YnfKDrBMM4w7JWesuHxWZE3M4xtyj1YaQPEqB4cQJnfu7vjeF47suw",
  "key37": "4yG3GbWEqD654gDoSJrooEU4VwNwbaLXnePk3xJnXGAtU26MNabzbhSifhBq3sNEa1KHXGLsSzKTgnGRfyDi5azi",
  "key38": "21RCZvYKeM6T9Vv7yKnTk5iU11Wmw2txkfgNPdH3Jgiyqm9sUtzMYLegP5wKqm9wScntcJF6FLL6qvGzkL3FShzq",
  "key39": "jghRMtZyGztFhw166YQQPgsGVsEL51etU6keLKuE4DVFBEo5asG9CkCCCaS485gd6tbhxYXiSRN3YJ97LQFFzek",
  "key40": "2U8Bhh8ywc1yedP4xbWfcUvr9AVr6C3Z5MzFeke1RppxkcTqyPigwBtvGBxmhHjZW2ohiteoqJPk2qxeeG4YQkKM",
  "key41": "4ajzBtNdxPUQrGpjr34wEEC3kttdw6JF8ag7gtpuycPLKaLZftNYPmHoRcry5kuXnFv9HQWQXzes1kz7kEJAhvgm",
  "key42": "2rQtD2PqbwTqBJv7TqDafaaR1uSUDta8nha2GD12crpmCbysrEii6V2tcv7b2eSxrqgXd4GCM7AivNBv4kh2cVtW"
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
