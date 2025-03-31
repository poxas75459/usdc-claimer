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
    "4eoeSXamjuf335xuBd8pVVMHbZ6j2ACFQVb9FtMBEV3kptKwj9arFsJiXYv2W9zqeoDXqcFyukLYBhFE9igJq5MR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mtWn4khag9FPSWYdwLvEYBt6NBZMQLJGGScQxQexYK4HsZDGQUDfBuyc5g1ypBC6ZAhu1fG8uNxAF6XGyL6sVkk",
  "key1": "35JBX4MantJvQX7nya6dPpx9LiMi7ZtsBbqLjiAQbCXkL9kCfJLE2QqzkcTPWAwFnpRAWQfmGY6zdh2fYsCnaNuB",
  "key2": "4o6JqzZMGY3otaf4vymivDXMFCDPzgcuYZSLtdoiLLy9KTaKcdmChXQhgzJVzLkuQNyZQX14N43zRFHbRBwg5gwA",
  "key3": "5HyvhcyWhLAkfSKxqBNXvJkPqbJ2bh5qTdoAyrEXJcqFExXX8cBYTPCbq5hsz1rvo6UghB6ZRTpjHtb7598P5zvQ",
  "key4": "2gTkssgVsFYo7pwJsZkGaR7mVKGrhn4XPMqKHE2fvChnkRSysV3auuEWiHTDKJKNg1rTko9aK3WgDU8RAit99zVd",
  "key5": "2VpK8xZUU4pcFb2TkHQe3xwYkFGtzKmXpSLkNfwzyiWaKkj2o7G6utQRwn6uc33WEzi6jgya55NC1DSvRCKPm6Rr",
  "key6": "5FgGUibTd1rdNzu5CATSRtr4vCh3v1DLiEQpRciGKyivAiinMRa6YmWyaaphPTh81jJjAndr99oMk9HvufB13Bf4",
  "key7": "3zL7gCEhV9mbchSkRWopgUB5yALp8qKngWrdkZQVfXosYmUUCe2HfHLXpE9UoYcm1LtaHzE3dFCzjjnVjFNGajdy",
  "key8": "53GFFiCxSf5Ce7FvdvxEmW8Ky3FV9s83PNb1Qvgvtr4Th4hT7yXoBNmSWAUY5j4KvqhBs2PUvqHEfeStohtVKkNN",
  "key9": "4Spt7Y8p9vbBi6kNcWD33gu2upqFd7bubtRP42SDoWn1kWgoSNKXiaRYAiN2zzgdod9DRJniHa3roxdaeD9ZKQo8",
  "key10": "5ruLMwb3Lrt3o6p4AJ1KQBB2F53LGNxVVrkzucsg98b3p6f2hppRud9JCpUfBuH2wK23BCoXuhpGLDWEJDRS2xYC",
  "key11": "4zZks7xfycNssPyWro6zAyv4QzzBFvAVA7dJzFEgY19rb4w65ZBDbkAXvZ3tTWjL72ULFr7qvzkD1E5jtkXpxwam",
  "key12": "5zQaMVxu7JyzudcPvhKeSU5pTXnZCWQknfPWVTc8sJUakYsKi2tNmzkxjvdZjdQvjh77VHHdhchK3hVmX6yaESVL",
  "key13": "4Ujn1kibrcTYPqTEoZFYhLcbYfARqnv8FwubtXd5LXKsPfKCXpyQSL4Eo4mshoFbbaxtDB3zeBmoSXvy9gmJXkt1",
  "key14": "47DYdq79u6oRb9ReGKG74gn3D1WKCeo4wN3HKLGVjEo1BLP3zJN2G8Y9ffsb1Zqrfa6qLEYZXLKxetp8nQa9WRWw",
  "key15": "5T5qtzuMNKLEaAunafnx8VnWbdRyYUkeVaVVGXcvHDTXTQaJ3YnHF9xHyf292VbzUXAHTrbsBopuiwP1ELp4Vh6W",
  "key16": "4hdbZ4tQWUin8zr5xu7gCadECYE2kx74JdQVCvjiNjTDdjFosDRBLJUwo6MDjcPdpyUgdHZgxzchXZNTKMcGirdd",
  "key17": "3a5gWEFBE1NkzxuRHgPhYBhFdj2675JCJNddoXzDWPjx9d1dW8c3zX7V4XXWVbJWk1fegkidCnWEX4qyi7VMYcGE",
  "key18": "Wm2sTUXJ46j1bBJvRGu7M5jg11BQCx4GcYqT4yfNAnjvGgmm5vkC9P4Ddd4JuhBQzL3QPMRH7RBGjx56dxcWZVt",
  "key19": "38XFc79njstp3ck61tuRJpEDiXBK9DzPrjtX3n8PtXkvn1DxKrM6tsF1etaYBj1r5cF1atmDmmazvfYNtRDxJyMY",
  "key20": "3EB4VJMwV6qnQxDwq6V2C8kxnetTshQBtUWHe9RN8MA7JBgeM1WmAJcCuHJ6yRU1PJFb4UV8wT1KzhPSxYed9uFF",
  "key21": "2tcmHUjrv9pm9RLakVocqjTfn3PXkkEXb23pTakoYcHFM8dDMK68aC5zYDv4axvmfKGBFyMgnXcYcGgee47q5gPy",
  "key22": "5X3HUTHg1NSdkjcv6SV4CS49pDG2oPnt1SoPNaQZdwcWfNbDZJUYnRuErktGwCEixyqzUNHpLzreuFYw2bN53nQb",
  "key23": "i9F9rMpLtXdp7EtLB1q7zqSKwxTVye66C6HJ3f2XJrpqeVqn24imA85ZsscgYSVA4eXWKmLbVfTX3r4HVviRp5X",
  "key24": "4nhGRbcnXku9BG16CvAj12nV3Jfx5xTtxvrK3L72TE8H4b2ufNUbSQHBvdzTQ3LCuZqtrRhhL5ki8V2dYr9mrTPF",
  "key25": "31Xjm8hJKpb7vsGCEjFEL3vVGErboYQJ9ckehk7rPmii46e5WRhgB6MEdcgavSzziXZmELA8jDQmiSsntJYXgd6p",
  "key26": "2DAkNCh3157FAyvN8azyq3J3DDF86Rz1NUXxEzfSMtpL1WoEaoA3W6im9TYyafHcvpj8bddwepuWM3oYn7UgPoqp",
  "key27": "5VLRXtoUpEsdenSDASZXSfQaF9NEqG3nRXUPrXkdYZMaFRibEBV756simgqaR5t8BxX3wdPVphbtNA8zC87RZ9cW",
  "key28": "4vGQaisrQz5eETBh53pbfXTbdX4fSdQ1SZ82dHbBo5Hem5RVjdijdGUUbxnkHaYf71Gux9ogyWpBnwjC2SRFtEyc",
  "key29": "5XcW5VEyH9Mc7SB2WtmMUrBPz6xzjWtFjvEWEoVAqFjuEq6TS5QJTrGYNqYk157sQs4gUmiyqn2Z1ugNXhmFiYcU"
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
