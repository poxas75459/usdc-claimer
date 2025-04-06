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
    "5iXxRvZ9ASbS3jaGwbbEVMyhqjke4vPcWUQeQXadn1dcWv7z4EWzytnntv3b5q5DYSn9xpKS3zd1okDiXwNwJgsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CnhcW57gyR1n8noFhay4wV8oUuK92WRYxWqSXSQjzhvDAqvweuee2T3dU13m6BGdMeZdKP1GCV1dsSKrNYo3RPH",
  "key1": "2AMfqqsqkFho1nQBpXLcQRgu7byydPVsTKEGK3Ft1iikQE3QXSNsXUyGEuwg72oG65uhX3F1ENofTDw8mjDENATQ",
  "key2": "4gKS6dzMeiJ9V8QXxjS25a48Xhv8cxiJkbYwNPcye84JxPySQ55JE8pbpJxjq7fLW4EPD9Kcm9CZGfteRsnZgvuv",
  "key3": "3GQa9gidj5gaWpBsFu2rHyxGKTsGXYgr5GQEFKSgn4Tr8Nwf3Cj4dNi7vKWvXNH7UbhuPPAdvZFPgn1UPc9wXi9w",
  "key4": "tgkJjr8q8xB57vZkNYAacehwQfQpbhr3XPBkzxAoga9sZTmVZHn2qD3rcTMky7DfnQxzfZ9hnmYcRv8mFg8YWNF",
  "key5": "XNSB8YLTGnrDcXZvYfPJ7Puvajg5wAU3a6GBBgXMAPXTnig4dHUih3G5dphYgAruwu4UKWpbDm5cpqy4ojx7xbM",
  "key6": "4byQAQ3KUNK6FMnnRvW8rL4XjkAbugjYqhfjL6MfZPW7KHdR3dmEEsUw5fHms2EWE6uNJp1tTy7yxMES1PPo7VFi",
  "key7": "5Kz1wwKZA9gZqR4tY7tWo2ETNFAUgZzfxrfyEkinGUYVAYPWuzvehZpzWysgQgMQvr253AzdLCXT9swyE5h4nCyZ",
  "key8": "5bc2obDVEXQ3p3hnfpZD8wo6vS2jWwoNW2jZ85cCKBzajfGkNcX5iprhU5gRHPuYVwiqwHLnKGSPhwy34QroLvMw",
  "key9": "EY15p53HDJ7Jw15g3J9bkNnfKG8r8Jq3uN3oexS9bQ8PAoCTRMNMdcf3MxXodfPxfyefibDnVZj7oDjnSzLEvq9",
  "key10": "27DyV7eWyvhJdXbQymCPK1D7V4TRy2yZQChJp8BAPdQkzmhoZvGW2j9iARu5foBw2g7g3igLKV7qvzsqQH73ZHZn",
  "key11": "53kJ5PnPvmgZQbCGsVwp8u8bNLVfFUx6qxgEQkiZu6JNRztfGcW6sR4TcpjbKC7uyp91HcHroKVNmiQfmE9T3gdY",
  "key12": "YZPcciR5iAk1SdgBUS3rVcwX9WKZrrwmgYhePUKsptazPpCvEo6pHNgh64fYJY3FJ8TTJukhwx5hCvPZPExQ85o",
  "key13": "5qEH8cfCmuE62RxLgTphvhvCKDas43VdgD1L4uNsUa5UA4shQeETBWJrfSLrbDUDy29KEtuWYAfgiWvqbEj115MX",
  "key14": "2RhWMPo1a7zYF2zCFjevGsg1XyxQW8ZxYBGpayVeNe1BQC6QbpXx4dcj9idETeP8mX5zBg2vUaz1L7vP5uf2f4Dk",
  "key15": "cQ9qNs4tQFL8rJbkQdrLDwWJAcJTKx7Rx86pefF55zDdmDXNxdmH8HwG92Kc9oeywS9Gj99CHRMQVMGdskN2K8K",
  "key16": "2NeFbc5zYCHVWw6WEGKQGxfRXCnE597g5xtmbjmVUZYv5Xx3QK5pcofgqRXZXJXgAxcTKDjd5v9fpNL3KdC56dqb",
  "key17": "3n1nCe34LEC1neMnj3q2tDYRDYwKxdpjdVFPp9u4unL2wRTE3rmCmUSwVt94MQ66zwbQMHrauTCGfCYq9vXaMZod",
  "key18": "2NYzmXTMRqvnCHFNATwyE9TpjyE4hYwcxyeqTojZUMfTuS6GnU4cqUqyjtgtThxXDvDTNDoJdktDh49PUfpKRenv",
  "key19": "29vJnCxg6At7WznizuvMjprirnwvNv2tWA51g35p6JFXtMRuaY8TrKu39eyk5JcTe1P7NGFTrLsDPMESWfeJsEU4",
  "key20": "4Z1juwAKfbJb1BsjMc3MqhYTcRUQwUD5Aa3YRXRvAkgnFuzZSh22JRKPTb5FpBKCJViQcsj39BnBuNDciMSsYi2j",
  "key21": "5WYUCAmZPxQJmQp9FkT1185Fjc5PpM2VpkoXfpGsCyiwefys6cUQucet31GzXfwnhwXPRtS7qd3Yxo2iSEat5Lmr",
  "key22": "2Tuh5PV8CNeMpkZkvSqznyHJ9UzXYW5imgo4xkaUmphLYhCWqAdQ5DQhJvTjGPz4z1v9WADXZxxfvMUjALx8JAom",
  "key23": "2HbDWe9ZR4h7PQcmUBXCnzSu2TP6nmGVXEkvh3jNuNStrZjVQSJFwMuAJFeBXBopyF8GazypErwy5Sqd8x1MqrHQ",
  "key24": "3rxJyA9giR4ZChAuKzUY4BYz3aK9jienNaSJDzNgkXwNjC45PcqZkHZYoAvBQJECFyHweYTYGfcK49VHXbaoiE4T",
  "key25": "3uRduZDc53gRNDf2MSQPUzPta5QgdS5fqTd68tctijPFo69GHi5hPHSPBfAg74ak3CBp8L6EQKa21gnEqk69htWC",
  "key26": "3E2e5GjR9f5pJrHZaGLGyEo8hLREM4ngGyy9yRT98ebcNpLEoAVPJQxHFBaiMuF58LWfTYmy2XYaTvEcrZX3qqN",
  "key27": "4JdGbiKspR9iqwUNwNQWsGmfpJHX6mDVD21kYX2JBnfTv4XdN53DuivVAAfoRK9NQYkPUJzahyfA6E3TXwakf3aE",
  "key28": "3M7PVGwhiNYjDS56Q5JMWXH93oythH3ZGc3y6Tp3iwLr6CCQLf9y4JHB53HP82xZ6HatWQiD67zNgMyWM3Pn8SPJ",
  "key29": "Nkkx8bYzGGUg2ttK5eJiARt1Vtk9r4Z8x9LrR45XdEeQBKbqyb8Pa4dtVBeKDhk3xc4Yow99NLjH4K61R7Qg2Ts",
  "key30": "2DFFupP2rCtNefi2oZ9Z7dDtfY2sFftHKYmfkotxDXCZ5EG6a9iS2Zeo1EyvxyWWWjmBSvcpjBDVaJdtD5Quopcz",
  "key31": "4CSgzk3p8LBE5aKJjTMuVfWj8dATShxUf9jVCYWYdd7GBbdAccVqC6kNLdUKMbdZcwUmemSAuaLm6B35TYL5DUAE",
  "key32": "4qKopsQNaNkNPpCgHn7Ucj3jMre2rsSrATmyfvJCCBNZLdczMvb9Lbft3T18Yxdo9iHDpTyBREdAKQ19a54bsR2f",
  "key33": "5EwyQ9JSNXkVpVF7TFymxvzWro6z1VCXjVYnAC3dM93PR7B95ZQwb57DG387BFPbaexHyLMAz9TuUSZPUUSFcp5h"
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
