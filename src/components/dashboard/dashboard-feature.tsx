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
    "4xACBG4H2gDHV2nvwqekgin7inZaEiZ5eibFMv3pfPQUP67mEuTcqkbB6qEFMUzaigMDcswitZ4bYeDRKXSxEupE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eK3KFbVJqTE7JskkHU64F5rBzZ3hviM4Uthi8uuj6gvbJb9Ew9FBzhbgbZfWyiRbW9fNwXDRmNv13NzgEf3aLBz",
  "key1": "5a3dVFsYJSQBuh9APppmgt3yNjU8LFFUzTN1H1zSgWoyT5Av3muGdf7CcLznW8U5fQnkT9p174xUKeaBNiN4hPb7",
  "key2": "8fSLRgQdxWdzgGpdxjB3KkM4ubfPkBrGSDw4yxpB84v65W594HqMTKyuf1u3XgY1tULqubUpcChqWKYSxU7PjFe",
  "key3": "2QVrnqeDsGGfzXNit6Tw2YGLsAJSLsMjNt2NQxfPM2uE18eHpvGGPQCQX6oSnjwz55Rad8ZiNaEU1GfN2ifVMZA1",
  "key4": "SmENJBRtauq2Jw6fdAVKvvTrEumCM5LBxUNSTeziCQEnP3FqtxVzjbwsUYDEt4QEGjJqb1XrDuDmDTcrqjpiLhY",
  "key5": "5z3NsNpjdrJkrU6uD2uH2e6PLQqdeMCxguHxfqAeoaJZdSDYEndPSTkbM8MqZ81PpaosLrWUa9e2tJ88PFxidPun",
  "key6": "2jU4hZuahtFPCKU1dB1rqW7qNtyEGsVc8TAS3zLsJZctfsEbmzDTB1yqbswMmNjuA2Wx7KfmVWfY71jGmUNGxMnV",
  "key7": "2gaZd4KmNfM6YFTGsgjZ72sYZpCAb5XwPHBnCQ3caH9AGoyurbBPnXSHdKGFYBFDWEMrCEk1do5bk3t7jhZpSrEp",
  "key8": "rUXVBE3xUAJh7hFSCwKXpi5BZ5Qn9U5nNZDTwxRvx9xDVJEVJUN7X1BprSYVwtKbXDMnUDKe45fEer3goS4NNMq",
  "key9": "36LKhQTNsvQoHgMscMF3TjuZyPK1uZbD6CvqWNxp3W1UhqyRoJqdeGayVm9BNXMCSZ3bgLXi7JvHRdou4gowAR6H",
  "key10": "5jd5dkHDL4TeHi5uoRoqFVmCZ2xiq8SvWYNPcmXCT7y6M2DXAnoXhDVc8HsYjn8m9hNTguLRKQSUuknqDNY9oXZ5",
  "key11": "38voUuFthBouyqiE1Pz7nCTc5tvMoNntwy53yjyb1nCVwUut7kXAubAVxEKvmjj6p3tCyjJcoVkSyWeeGhjPMiZX",
  "key12": "2XYrzPkMF69uGTHxmcLA3ZZaDvuSnLwVnSgKjoYyx9WKJg12wSTSV2ThYjDsQiHgbJr18TAdwFKsB9ERYyoeKp3t",
  "key13": "4fAfSCHCXRduHqLhx3yeLKKG33oE9wGxJZ4sR2UbzvZJe2cHQEgrgetjiYakJ2P6EsjKj2ZfoED2skn4NmrwqHv4",
  "key14": "3riYskbE5K132VkhJp748VxgfJhdRy9mjW4NjpbchPTv7LuFV3cu6rAaS5qdd24kdvLDQ4sHSHK6m11nwzmhDsDy",
  "key15": "3qLQfP6zcwFNX1bEShucyVhBQahj3Ui1AUqASCUfSddQ1hgM2iV8N7qfd9SA2EUhWib48fKsdUFtngc3YwJZ4XDH",
  "key16": "51tJkzMsxUoFKXnvByfwSoUzrip9dGcXZ89uZAhqbSm5V5SuhLdQPSEcQcyXxcg3Sgzqff1piEVXz5yazrVFi3Sd",
  "key17": "41T53nT2RCU8zCYvaLiv6TbAC2Cf8148oED3VisroK2Js1kd3obUaZHBdWNZRWCGrgwBaAxwTF4b2YF42UsNkFgP",
  "key18": "aETcub5QNfkh3M1QKEMsA32Qdi62bXV2d3inSLp7nWF8Z6nLfcrWu1rGKmaCDABFMzpVVFhqLbqPJoNuiU55CNx",
  "key19": "2b3hrDmE4ivWmce7yrxrqK2J2qGisyinkL5P6uv4XZ66fkiarqGdB41cLMD18SDiCxuTJHpbxaMyoH4fHaNSHKuw",
  "key20": "2BPcXxooWMKM5DJtdz9jrP6YNjvequkkhJNsqZf2xF27JD59yjPWWianU66myVf1WAqK2FPzjEyr6gkdUkRjsuUD",
  "key21": "ovSTrvpg7DiZ1r5wbBPBMeMB1JbP4CxnT8xp5HkTfQWSUPJvRkLtTWFvV4msXdtw8DXpJmnqZ8N8FN75FFprqaf",
  "key22": "4imSg2n8txQPHv6sz3x18er3YY7J3weJmdwR7cKxLG4YMVQyjEaqFCUzdJ3S2U5dC3wBptJwrR7HgyiAbjAABt65",
  "key23": "3Z2ZjRHyF4mxVMU5PZJ7uLZ9rDEwhS12n6yXdDeb2odRm7bMqoXeWhmANWNK9EPpm1GgiG42sCwe6ee28dz6SHFk",
  "key24": "3s26kYHPNWBJoPMpA4LNDpH6tWPYiEFa1F31TZbV3shPvf2QV9E75fDszf9Cssb6CaFZoiUgwJmrYsYTnTXt9n7e",
  "key25": "5TvwLHzx8JnR8VenG2YVf4Qd3MaURw9TqrZpRkj6puAKXthViECcZ2t9rTqZfQoQ9oaPm5SKoH4QM1WKkL4V8E17",
  "key26": "5FssxsH2PwBYYvVDX9mkav8gNVMCenyuYvVEXCdWeLByJHo9V8c9zySii6qsj5kciwAGcSvJ2brpkQPCTPrhKNrQ",
  "key27": "42qnmggVpKv4c4MhaiYPLZYhQedsphUS9igjv974NpjNGwdDFrXjL7yd2BxDA2TzdhreMyAbH61eqNTU44Hy2tSv",
  "key28": "3wMQCUCQTCshPcgr5Aypp4Lbo8U7XFFbJxVge2BRURafrwj54mTnm4DpfY5zLQxoEK9Hcehgom2rhQEffGNKbXcc",
  "key29": "3TV8N9ySqChBvrSaTrEs5vhFCHRa8kjP1hgyyANjJQhed5yuB7NaDr7CcGozehx9dP7htPC44uHpb6vwV82P1ETn"
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
