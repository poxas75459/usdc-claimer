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
    "GS9hmutcUJWc1FZ6RykK1umA68uPYLBPkmiHqL2gZmGG6awEHfNheic1kCVNszQPczbT97NUVKyZRMWv35BAeDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fnMxaCguYC9YXQifa6L6UdUviLbgQ7xF2ipFJELEHctvT1y9nU4cCrJ1s7dEirTCTeMoqvCto5NZhV3oiGeay6w",
  "key1": "4g7zNCU1GZVM1enAnzZcnVyS9G7v1L1LFkNdZfLAaVWa912QZkrFFtmfcNGJg2RSErDxSpt7tmTH4nrmtPxJmPvJ",
  "key2": "4KoeyonAWyXi8ZZCfj5b8uQoPMKxSBHZdUfswxtrxoPqfEhy4X4nNDsen3AHbYMiodjYyU8N1yXTApZP29z6asKW",
  "key3": "2ayQvQkvXedF133BhYNKhS84dVHBBpVHd6yqupy75WiZxiCbGRL96vo5dyFB1ATAtEpRELNN1uXbYQg5aAdDh8BL",
  "key4": "322hn9yRc5d1YfMUnXyXzoWaXq7iomUwRFXtwwWwtWegn1uANHGQvVP4wvk3xfSMMWvCgnBqioLZByPDVz5V73fB",
  "key5": "3AfQxVuvejtqGewzQUaS61QnMTciCu2JLtGRFSmy19L6evj3MzD5H4j2BMVWU1tFD9SSHRezRm18UjCd72Jk2keE",
  "key6": "2bzTDPcG1dLUBtfXALzyZzEhNHUzTEpdPCLR1AHy3VtEaFNwzW6DTFT44gRTcR2UAtTsuyZjjkki4PfAc2fgpXEC",
  "key7": "Vak2Pz8ahdRVY3tZJuYpGStU1kqPg5L5xrKoux3DZpZZtKC7Z7JZ1JwEhz3a2iQE1Z3emJpCGmnEr8Y8CTH569T",
  "key8": "5y6n1D5ZneJjzAaToXQZUoeecq8dinNzCp9HLMzepKDdhBhprkB1m8zGhyBye6d6GroGSfxJJSiexBmZj9GneJt",
  "key9": "Fbw1EaUQGKK7Ag59irWdT9iEmHW7wzcHPXM2nUG3zSpmpVtLAzH7fxbBmBVQwnwEWz3Cu3RzZzt9mCjnLp1KHfL",
  "key10": "5PUS62j8ECpQZYdTou8E8QKJhC9BoCivxnMN25t5iSmnKtY7q836FqJoAWKEJrWrsQTBrSvUqyBuAk8stmRTn57x",
  "key11": "35cY5yyaxe3LfRH9qzsP9FLXBoFobJczcCuZD7s8LX2HMeTmwvMZY8q3MP2QmnfUW2TqfznjvGdEBcSPQx3TM4f4",
  "key12": "5LTksBaQWTVjFpm5ajGCaSDviNPqDKFeFenA4ctzmj96nZT4UU74w1CJ4wkPoGBVbAgTSHV99AhV5rPdtgZBHyT9",
  "key13": "3om6Wt4M6fGtCZd4SLuE3UmFUzX2MJNYj9boG3BaZDazXSbPyBrFp5CGqBrQtxvnPdKQhBsddhrRXaQTWbjwWYhd",
  "key14": "3qkRcsYivVY8PTfQ88HNW4CcxYmU4xPpbiy76F1SE23qcqnwyhRmbW5i72AgnscCHmaS5LqpjPxcRP9fwvMHV2jM",
  "key15": "2UBMJh3rwPC4PLHSpfYSZsPw5vLtgDDoRdpkxTaagcmRoJ7BUznSQt3dUh3gPa6ozftdG5Y521DASPupUpkYihuG",
  "key16": "2HTeLCw62EZSnVehbKeaNjfAQRN1JDdS32kKYmcDBwauuyhkHL58vfmUsuD7fJnmYnuX1FGX9eH96tKhF2CcukCh",
  "key17": "3f9J2r2B2eNPT35hiidZ9v4da35PtN8VUndRdaJZbs9BmP7mECHj8tYFKBW8VNPKwFYKRM6YxZ8LecN7ozDca6CW",
  "key18": "2nkddk7QHygWEtxWb8waRNcxRteHt1m2uVVn5K5Ly7VTABQqQV5aqrjZ5s5QkhRN9wjniFZrjb9dH2or5nciEhQQ",
  "key19": "42FNurYRGPMVeSknuQpesuPvi39z8rK2BLw2wEBdGFsERZBbxDhnwVkz54DywoJdpP5TpZcumXkaRHjokVe7Jf9m",
  "key20": "56YFJMmN7Y3WcpU2C62pgtHoHEt17ooFuppFWpa4BuWDPpqVEJdVoSCCt9VCRT5hSujvs8Wmt6D53vA5Su7evCUB",
  "key21": "gRtciwv72z1KW8yaXPEbM9F1QWRE2RuW3sqybdgnZbT5hbrXbuWCrUXAvsEz5seVL9mvDaQ4hjiUzNin39F8DKT",
  "key22": "E4z7k6fccBhU5pi6XoeFmqqc2ntUVL4oFdTHdpPvk5saTgJ9FzPXWp8Vk9F4a1tDzy7pA1q2PMQJ61BSG818BPp",
  "key23": "dfqyt6BXjos3BQVqt3F1evLq2EkZvu91kqPUJmNdEdfEhVY4bh9ChQWujhSh2fFewS87UAGV7XZjVrMBCQc2dkZ",
  "key24": "5p7c85Fvx1oaMdCoCmQsHkNf3kdUmo5rmBNosS6VFpH7bnRhMbCWiEiF8ZaQbteKGAsK5zMXAi1Jf9FEByEgsYhu",
  "key25": "2mxDYQkWdEymjUBYAX2Ccu26qLxdUXq6MfsdCvkxnXoaZmEHM6dffVAgsTvu8zm5upcM6AVjLUXcDUGANcmWHCv3",
  "key26": "3e6E9kAAcg9ZzqpgLQPEZ3AtMeYCiNwhirzA4KTikJqw1DmhwcNeXvPkaT9StG3ffLUNzg7yXShLC35HWgrTnqDN",
  "key27": "3QnjwW5Q3ZV6PkN6ZxAQEW4SifajsJ8CZjjjbaXj8HJZdajDreL7442sVooKS4FyTtTE2eQsuBmoEHWSnsMAoFny",
  "key28": "ZZ5hrn878S9AUGkPvw4nWgfBLzvEEjGC7ir7KPM2Gz2p7zw756xvnT5HvvZwHysmJaK9scctoGrE5T7ixHkYV8u",
  "key29": "2VVpEZrFi7Jx4ZrTQ9rsnG5G8nyR3HC179HTamR2T3MVcdWLqFPCq33CWSYVsZBVHMPxpByq3Kk7TZASidyXrpNQ",
  "key30": "4nARLnwcPvRCjtdu6doPhLJEYHrs11WzifpQ654JYgcY4HucJgW4g1qC25Ff8JqM6qbSkSognuTdzTN2uDBFaWSQ",
  "key31": "4HK7Xd2VzEmuL3E3d3GFF9pSFkyL6rLh2isr95HmnqTSCs2UGKjZG2XsGuFnn4MpT5fCGPdZRXTqc7gNi6D7saCz",
  "key32": "5B3gCRbYzHBsDprv42ixJmMbJhyavTWymLt158T2YHM1dnZP88GDZJ6gva1eQgM8fc9ZgtGdkaspcihUaoXcBV6B",
  "key33": "627b9BiBTRTfgn2UYMxzzUkiRCaMCMf1uDhcTuedBLvtQ2qEBLjoXzf1nqHTtgaiAFrXXqgYAusJaGKYwFE83Hjp",
  "key34": "2nWmYB6hwpWfNerQ5DHc3k4i7R3Qkie7e1Zthj2MEBc9eExGtaSRqs8fpGEG4TCzhbihQFdzYGeaWbACmMyeBCeS",
  "key35": "2CFDXM6jjLWGXoy314oQTk5sU5CRJdXzhkmrxkZFgPcBpKjibgD3WzC9XtrExe3z4tGZKMK3UYaypeYGx5gXBA6M",
  "key36": "35xyYh1xq5j46Tn7iFE2AguYZSX5KkUCTKAE9LBxxMyvB8otrskwBnwL7H98aBd2wakAvyiASPqfByAYxYDJRRy8",
  "key37": "31QqykNHqHde7ZmVPm3fi4mgJ4gx4MNiRNQaD6suxdu1nGZZ9QXfTW2eBXXeeuXomAZpwG3Qv9xi5XN5nTdMy5Qj",
  "key38": "5jjWxboAoUWe8cQiHBW6cQTQDpvMbHbMhAJ6GYNHSD9FpaWrqpE3HhB3kDaYGmS61gBhGwJy61TcQEi7peN44KdH"
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
