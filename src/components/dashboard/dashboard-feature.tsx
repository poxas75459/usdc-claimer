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
    "46pmbhuPCE8o7HMAEBT7xdwm3JmuzXWFZ8cSvwEgrzo7j4e7nihNWzJ5VwZzu8qJE6qEJ4GGogzVtZLD9vDGELvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f7CD89d6QgKhmx4fmyKAVYRMmtv68HpU6GyHfiHnXtaX3Z9ivVFNwEFTnQuovN7xsYoxQWASjfF1d5qQGTN39JE",
  "key1": "285WZ4ELtrNiHSktRnvSvBkzdfRJsjMiGoM9zf4ddpUeSDKeWXzz7ixmdQaQkUpDcGPF8tRzKNaTFhpTizxrSaRL",
  "key2": "HKnzf55V618BH6StiUXbNV4whuHC2Fak8LTaCwvGRRkJJtHtGJbxRVgmtyi4t1P9f9oHTw6wfYpD8jJBLuv6rQW",
  "key3": "yLQF6eV9rv46kmdf1dRQNFEjDqggF91MDMKc2p7pRkvAxu4c1HJiG9hPcVMuWamVMutJZo2WZ4ZcV16jhLx3hV2",
  "key4": "5RdLaB3QxkAeBox9XudNGGw7QHhyLzKQtZbqMdHeEcySzYu4qCgCtuS25SiEi3Eo1hPhnvZR6Ae9wqw8qAvAzeiW",
  "key5": "4v8uKSCrafA8AxdYDPYSGj3DBkntnDawvkDcrQm3mochsqLj2XCNEsYhM5ayiDtzTKTKQRDiSzVmun4oGFg5MGZK",
  "key6": "5YeNX5DtVrjmmwvLnZxAvKbTNjHsJGnknN2W5jbx46v1x7WfB1f9zh4enhUehZTrGhGdYBv42jvXEajyy2imcnSh",
  "key7": "35ZTzjA3Yw35vPUpGWxB4S2J1MotWK3ChHiVrPNjceR2AeVDo6akVhifN64THkGtqXvCNPpeFD7AtnUzfmsPUXa8",
  "key8": "4rs9bv5X8EoSmTg43TZ4u6QkzgEjEcfSNdY9Br7zTu4hM466QL8WWiJDQLcMktqhfTM2sHEtUDqPiZphT8rhTznM",
  "key9": "21KWwGvWk63R7m1ov4KHQXQxDMnoBHNhLXiXLeG4XFAcFrGYA9Ssym4A2cy4odgfJw6Dk4rDHsyiPsRZt2QXt7Ti",
  "key10": "5Djpy33SexVwRST5CZmR3mwyGWwtETaYHUfAmZvEXecqbFCB33YuqVBN6A4pZVxjLRCaNoJQiVoPVCeLuXv4W8yL",
  "key11": "2EdMTBpfQk2QAS9tWS42nwhLae6PxfPQG4f1UGBV29JT13a4fVq6qEByRkwxMxc4QagNBk6ktcWngDJpJ1sUpJt9",
  "key12": "HiwBDBst8oCr77vitKc5Qa9ZjXTqa5TsfjeawaZCeqNnamrU58hN4e5PECFdmm2DJXMjme31uhGViodVFSBjKBz",
  "key13": "4WgUSkG3rB4PvGEUrxvQ1SCWLi3QV6pxdiLS1dJCzSMBr8Zxjc88mHFMGYYcHspgicPP2h1yNs47rWC45DNP2HR7",
  "key14": "3b5jwKM87UFKSG6nZSe7366t5oWvS3Jnpv9EGb7VRT8rKUiXBTSNnDvCfVczNm44jVW2i35GAEbADqwzZHDDK4oB",
  "key15": "5khpjyqc79WcazbhYXWG9rGSoVCiwirGb9msDk8Eb1hYB7srnvNFjDzy2V6gaZErBduFcoW7mFLvGWj69maoH1gb",
  "key16": "rgVRUtBqUy3cHjFrJHtDgy2CqNGq2FWSQpnMy23UQtVau6Q3gpnNs6e3PMEPkwRTa1yFFWeeRP3gAQnJnuWReEy",
  "key17": "4tzxAxQTueSATV2wprquWMvn1fh7RzRZkn3vGTVLb1ApCLi45hea4Az27sYkSHHwidg49rwnDwY5mcE6pwh78wtg",
  "key18": "hQgMbDAgB9rFmNbzYTGuE8aP584cUsZnKGXiL8a2yuUU1jz4HPuciSaDvJRtWzf1LqdCGympb7BbRtEaUW5AvXE",
  "key19": "xYCgUPSvhdtaNfmqGHSzxY1kuBp92DiEputuVJs6NSwoormNwNWRCudA125wnwxnXB3tZAymGwqwszQkjKJmt62",
  "key20": "Wy2fgn2QDqReT6K34eUK3bRvGMjuJ1w8Qw2nveAvucnUQkgaiPA1ggVSQm6TRRXXm1H4p4NVRBPLsfVN8Kwvoam",
  "key21": "nuhDbwTiTU1RQ6jMYF9i5W5ZxBUh5iwrLcnnxRtheMb3ZcZ1JZaNYEMsPPF9984Um9oJVg5snGNaCL2tfDPZFNH",
  "key22": "4y3HE2BUzV2kVczRs3zWyhLVLbh6uascQEMgt4ewp6ndLeegA6cRZB8rmNuTFt5WC3gT6V7Yh13QMWUAFTJbdtfm",
  "key23": "3CohjGBYXWmWUW4DKebz2Vkoam9TfERiRjuyrYCw5Tvw2dELzBFhfpUEB8cyoddXWvekTNbu6tFjMhYFcK9XAxr",
  "key24": "27bD6qjjR9wMBWHj6UBujXqHd7o2iauWXvwiNB3ihmYHmPCwGNufK4VL9xNym6Vpkhb1XwuyFfAV71KbGrXtGjAL",
  "key25": "4varERfmeTGBxg8V5n7r94TPURfhZutx3S3Kt6D2zdeeA7N4ZT7rUzGQ9GwRcXuTtbLxNXBLocWtLSPuhiBuVQ1j",
  "key26": "3HyZ4QVMuKnJMo46WaZ54ZxZnSG9bk6ytrwR8K2enm3Q1XomdeP414BfZpcfq2918K8r8iZ3X3fmT76Nx2K2zVZv",
  "key27": "2yZhGm2N5uqQBhi8yPTND5puGK3Q1ascGw8z1svy44ui2KMcgnbxDej2hLZHBcT3wPt3hv9aL8vXF74pRTzTroXr",
  "key28": "2yEcaXFMnQx1mkNj2dmBKKdktP4W32VChwhmooGV7sK9NML6ctGJyQtrSaqRh5iKM4Er8WSXZySbtrTRcZ34Joec",
  "key29": "275PE5Q5QRBvu3VsY7SfDANnEu4HTynMRqfoEVpGLf6BMZRdVxGh6xw7kGctVTCi1Yc97yXHfibv6xxLTPuNsBPA",
  "key30": "3WXzumNHqk9XqUGnn2w1PqKWqsaqPBfe5cffeeB8muaQbx6Z5889GQThBeFg2Gd6aTb1Xm3puobvnUDvGXdGGv8B",
  "key31": "DSPwrzZ5SkjmkpbGmF1sxZAHt1LFPiRmLeDNigD6qfMnx8ZrL8PZMkMN8rLjiwQivVu4UPUGQwns7DKKausPof4",
  "key32": "672hM97L71H1UHwoMfPjDHBpXxsGybyz4r83jSUHzwCS7DcG5PQJ9okCDPScuP7mQaBjFcToFzJjzagB4ceGFauY",
  "key33": "5Z9c2VAEfSKwTpFouig3Fk9wCwSGWnYfqdoBKwFXvwPtRjbp3yLWZud42Dg9vGeDxyixcQEMZQ5BUahjjCUJAsbs",
  "key34": "2jMFtrymdD8G3RgfWdKvEYgZ5muxrYadqErWNmzMRXbuu6cKQA3F4n8hbdo5LiczkgJ4uQXBiFppAUDwGFfDEPyv",
  "key35": "49cGh2e4zMWwDQudUenFUiWhezNJDbP3Fm14xAf53c5ELEJ96fnAdNguCF2xYRNW92K2C3mBmQYUFsotr8m2GoUh",
  "key36": "3vtE7UzjY4reDGv3j7B61PmWZbzDTnMKrkCcpXRLaaKzGsABBp5DGbbTRdt6hrs9nFgm8yt1S9eCBcEkocZSbEkF",
  "key37": "mb6dtVKqgW6ArCSExfUDdwci1NrWdbH2HRdxAWy48C6Qu4FkMeDH52SP1FzwQfqZskfJhRUsBUHyrtCazkZAvXa",
  "key38": "LAeTVKxXhBu4PuYhC4CxhdEGxdcT6cLYPnzUtbCeYrAotzrCF7iQXGMnQPtciJkFRuwUFVtMJbomGWtZ1Hktkjq",
  "key39": "4vX7FUnhQekyG4intxNDVvVtLvXqe5psuzLc54ZM553AG4iyQpqTEVnkLNTyQ4yCb3iQa3hGLkvvJF8nZSqz1tFs",
  "key40": "5kdxviF4PyCL9hvcMPNcrefB6AZBTva4Q8EVaKEnJbUZgsTdkHfz2WZkvfmEhi5vvTNstazcNwjoGejxgUofdAn1",
  "key41": "3LHcS85yUkS9hLzinSpzKsmv8PAk8JrTRus26QekKZJtUD94U9NwcrGeyvLVLX4SUkR2vFEBcsgeMHXuY3C7y51i",
  "key42": "2z6v1FArPtEWjoAu566RhAcC6VexYgM439v2jWKrEAfNtU4qp4dSsdx9PkFiSQFHuvwrbjHE2hK7G2GoSkBc25rL",
  "key43": "5n8a8C5vNEV8W3cyKPZZkB7tvXccVV9brAay3n8GkkXcW5nrPbXGY8GBWUb8tzMqTqze1eP7NXRvriMKmG9iEonr"
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
