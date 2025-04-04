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
    "2aBroNsyXcYe4zQBvbjq355dL1d2xgsHLwee3bm7s5ytYdYeJabLGSaCdjQLLfb4DLgqgVHYcbPhEk7bPJ82cR7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nRd9xgCYHMqU4YKEpvaELKT1gncYhhgPJeJuxSYPPfQbUEEgxvGxYx2WvEmdBGBxqffXGAprrJmKJDLjxSf1pNQ",
  "key1": "3FftGjL82fjJDvx66TSsLHywLUyve1hypeRFE722UM4GUNRnNQE58Wf33Lhme6UpWhyeLerPhoh9ximWzznLJaTW",
  "key2": "2m4XQe2nvsH2ertBew6pc7hEYBK9DuNikeiHnvJYZDDX2A5g31FbRni8Bs1d5jrrM5HqLJ5b326B1TnSjaC1xEBN",
  "key3": "H4HJEjWYvTvcK4mGDHMSr62oV1zNVbzeTtGesJ7wtvioVvJnTpjMrJB5sMeady1WzpvVSL1risUAeLjeXDkqR53",
  "key4": "24HGJGc8ZwZPn6z7UmoHjVGRiBFGfqpjhjx3r6t12aE48DeVfH6KBxMPq7jdoebyY1RhH6dbPjTLk3iT8KmzYs3o",
  "key5": "46Cr9VfbMTHwLTcU7zQpuCnjvg9rPHXyPmeyNU7bMcPTwzWRS4GxSU6T7vWP4EwasDUZdcXh1eUKMbgkt4YXjqUT",
  "key6": "4YpAPmkurziLnxEbCfK4ma1gVcf9coMTiDfqjobjXjHFjXL48WrBMbd3BH6E1NbT5QTFrdy3CcxHSHqaQZ4GJLqi",
  "key7": "5SYgw8rYuvdFLmjNMaGTmw3kttYPctySY4NfW5DvVNcBgWrTsHo8DZ4MSpErM3Ak4tZz4aQNkhCKkBhtvFZJiTUn",
  "key8": "293u77bb1bNWLZrt4qVKhczdcGLzWnbLWLKBdok9Qjicfet7Ahy4Ga7uC5iZx2T5gtrB48ezyeotWb2FKESCZg19",
  "key9": "2qHVpZtfKevTcwrg79fr2UZ3PwE42ifY7Gs29Goqiv37M6LHg9ZvUoEsAbhSsrUARdjU823UXC52Mzs4Yqvt5jFG",
  "key10": "56FqCfpjrf5F3UEuHBGprn5Tht1pM7zt2cQaKZPCshbvCcR9MBNkvKknZio2YMibSLP1oUvF9XmnuZJpmMJ4QjDa",
  "key11": "2L4wk7nQE9tux8gCTwWtAstfS26Hm2avdhvALp5YHYAUrcFusSh5Q4LzsPVgyf99yT5w7cQE3saphJoDCX7wgzGS",
  "key12": "4kmS2wW4En7Mpfp1g3DrBXaKmE9sGBbyuPxt6Qzd4cu4CGGVVHG6rC1ZSPGWTc2sZ3XuY75X1dYb6ZiCJMS8h42p",
  "key13": "2meS5tPL3RV87tn4JHXE9pvgiz4a5NVgmkJBZASKaQ9rsUGix1suotm5is4hyzDYuyNjaaJwcDz2B3vGXFZi38K1",
  "key14": "52QGM2U8giM3KSu2w3VsdooPyNhHFbGpXoeabN1zY2HjLz29wd61L6ughSaLLjVFTAa5Sidkiqxp4v1fBvi9zNxL",
  "key15": "2zckGsa7Cju4PX5QN4NP8siCM9Aq4hDYa8epFpvUtjiPM9nCaZhQXzkZAetDcPnzZPj7MBEgqwtMDBK2PyJNeTzh",
  "key16": "3Ycy9V1DhwviBEvrP4LiUFuqK3zoe9SMftRvijpJETkGTN6k5Cx2m7NHuSXDXtiXw6kPPCivLwifZAsGgcgtrFuX",
  "key17": "2AeEQAdTNPrtmRzoi1eqPuWYnJTLii2Vp2LqaUdUnotxm4bPmcgQG1AviTMYPVfNJEW2qvaonbL7rEdHEJXJfP8S",
  "key18": "bSMmu8ZjguptLiWVV5aux9U8xc3rSwcgMuJQfyHwhid2G5BVVWb4jTqvHmsxG1MHPxn6nYDhthkkUr7opxNKxAh",
  "key19": "4R3E8SqnQJqZhPPNEDjuGsYDHNvXT8erzmpigJnqsrjdRi9gatg8ytuKgF7KKXVbBXAU94zpUcAhwcA2UsMR6jvX",
  "key20": "2knmksQY6wwapvMbuzSri7QATv5pXAGkSckqmSACbh4AU2QkA9Crc7UUn8nLTByrRp6bLt3NFdHGhUbfxMVj1Sfb",
  "key21": "3jdtxj4Sz8osMZpUvhkqwA92DVCAtPMAUEFRuoTejHbNS8g1MuxnRm5PtPARK1ir8o2Qgu25xgT34LNDteyp565W",
  "key22": "3k7JxVmjuMRECmiyF7zDaF9tcHXXjmUvDxi68RgP1962BnxWhfyxnbwznF7mczHwBptpqEmhfYkuYhwszP16mB9k",
  "key23": "2YpZ2Huo1FoxJoZGXVS15AcMSR63UkLn1TsVyvYRpSQh7egexewCFnj551VcZnUd5aia1EurVQmyxVUeUouxN3nn",
  "key24": "2PdFna91rpqS8XoqTE7r7ABWvxpguvDUVo7JUKuwq6f81AG73znxLHFgwYfFRWiypTAEL8a4j4vYkKKdFSsvrV5d",
  "key25": "3S37vaVwbP7PdcBPVE6iKmWaYz1p1ExrTCHEcnAqyZSDMvcAsyvj6cb2xiBVGt41ZBRmjbh5ZBiESBZPAtRZBExg",
  "key26": "WuxjuokSU31NbJjYzPTVQghYwDo2tAC3ELTWArSdo5UoZyEPjivd5M4rtmA6sptQxngyjsMzVoHW8gSwLQqVL5J",
  "key27": "52CERN5kRUbVEKiyRrf6zUk9a1f9oMBuKFWLhGETo43hJbjFMoE6vzgcrP9n7ycwnrJBMS1HpaFAPGQQsfLTnEZA",
  "key28": "2r9HsvcJ75Z5oVaBzh712Bf5jMRaZx9zgJ6v4bPQykJ6p6qoRYVdHDr5uDNckiRRkvdwRTTA7h7cKgkrkPho63nr",
  "key29": "fp3sA9gTW73AgwHrU1fNAqX1iDLt7ha5xSkG1HPSdUKXeKsxPGaqkXL3UkcEXrKQhK6QWUU8u8y53yjGJSJAXRg",
  "key30": "2iYz6AtoSGSichwiCrpbgG2LGDS3RsjQMSpcCPJ9pVPTJ6zMb1xjFrDY9SmMWZqhuU5ZGjF1BesAcyrdr88mKNAP"
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
