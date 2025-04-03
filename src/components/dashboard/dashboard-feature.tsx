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
    "2QGcEmkMjqbceqrTdgbNUTW1m3udzHANSU4fGEQgi22avFfmFVPgKzFEvH23Vhw8j3dDSVe4p6vUD7DZkHqtHofG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TGvmRX3iyPpgMGSLY1gsYdRGSTGAgtpY4tBZTzeDeVbz1pEUEqjGPkVLVdpypZC9ZoXAcsgYe9EbMGpmo5wFtfG",
  "key1": "Tmh6aEWc78F68p3ZpWtipFnfushkEBtVg9ZXQB4PJYBjzEfvRvJczN9tPH69ryDxSttSzCzowHjMTAk5ByJtamE",
  "key2": "2jypXvd3hiUekny5gnWhAh6kHFBmh8epdJ1c6AtzuZeVz47WUSiTrzYfCQfoUME8yNzA9Qh7STyvTaonZiFvmpv4",
  "key3": "3fuiwcuXt8cFWTLe2ygDJDRg26xEBCKk3zDVwo8k8MrsRLzNtgruTQj2KvrRySEmv3NECKLxafh6i3wtWrUrJDT2",
  "key4": "5TxgioehqasJfkoeFHNf4TfjGiRf8A4CAtz2DRzrsqPyEe9nrcJBiK1qBVKxxSLvLdgGwybqdMusGwr6CGkzre6y",
  "key5": "62YZ77yioMShSeTx5WWkbq1HNC6ccGWkuf68jM7qpGzVzHqYKye2YRq8yeonqNMGWQ74qN725Kan7ts53yFS6XVT",
  "key6": "5nri1qAaa8q41nBYafRqpFifw1vxPbzMW7BF2K9hGE2QdGiaQTZVauFpvB1FaAjUN5tecTNiifPerEvCivjTiRED",
  "key7": "5T1uBnb6tS4xodigGED9wr3dqJgipqfNHqwqwzoUBZQ3Qg2G4a1gGAijbemPTubMLc9CpWbtYU9keZTVdCJCxhsw",
  "key8": "39AaZa7SdTZDgBzhJhJhjui8c8K2g7L7SDpJjdp4EeTaN6YkFSfZG1S9MPWajLVanH73nwyVj452tcbxSEfJTvN6",
  "key9": "2DhKGkixixqdX8kegsc4hwnhpe6CTy6wkmfci6TKrTKxkGtQzx9ZU42SfwVC9DcgcHXtetPrDs4ttUePz3mwwDS9",
  "key10": "5SFw2pK1Cie3rcRrRi5ug3zsxwwaStTBEeWhRtsYR3QxK4iGasfEiXjHR6QGp9Tw74mmTYB9jZFobunbtRG3FVkS",
  "key11": "2Avr8w7jjm94ZsNRfB9njfped953B2dVrKswoZa5sLNbwSbua8sR1NU7edrLDfEKJPJAJpJyhx5tqtZ7PbHgBgXw",
  "key12": "3RJji5qgdG2MFEVcYmQbYxFjbFqaQDKBJXRdZmhDtKX1S5igUVzTFtX4MzWaB7JggtJxAtkYpSiqhYti9rLp2EYz",
  "key13": "42b1mUCkBxPLUX2dn5GQdhZjWchQGGxvHwypMM9XzT1reVnCC7fQB27zPGhQbETs2KqCmbJT8pwvC6NZKRqnwBM7",
  "key14": "53tTcsD4SdatqMLWfEdHJN2gmpxrxsXbPJfWgybikSfcdAXzJDz9kTgXiZiLB8VoF6bVrWgMKXUvmL8qzfPYzKNi",
  "key15": "34GhrtgvrFJfhMMT45v9iBZZaAt5uMLZg4fTyVCGwWuYfWEeDuUy7eEdNKcxXR82WNDiLtwKzpeAQ3Rjakdz5WTx",
  "key16": "22Kidv51PyAHLBDzi2R1bshqtA3wS2ZeF66fWSCGJbUJcGJDMC1GL93Ekm8u8RZmBJhbx1EwehfsDDfXKiACKqxy",
  "key17": "3f7d8FZpVG2XKMrc6ayeYugYGq9prMFgj4y6rZZpTgDMTL6coRqoUmbw7AQmHrFKDYJ2p7nQn16gwJLqm7FC1cBu",
  "key18": "3NuZVxwDFBUyyHQUMV2wuXCFbAGgxZsmeeourW1aVszV62WfxQC8cygRrriikHEyLjMFktcxmEeEERK7raCyR52d",
  "key19": "4xoapYCEyUivQdeMTPsu5HiYnxPwvpZVUTZdRhA2M4WhWH8Di5RBsjRDvttZTC535qqBLTcNCEsspmieGpuBYWC6",
  "key20": "4a5xRK5qRcPbWXNXsN77h6HGtjJEHxEFCrWMZNUeWAKuCX1eDRPfyn29HAyi6xiK1DtKtUCMn6LDSgLMddwRoD6T",
  "key21": "5WFaMCrysmmqnu5rwmd8VbMjjzLViq9nGnmsLst6z3SKvssigJVY8C37XNuWas9CjJZkXRfdqdBBMx6bjUtBSynw",
  "key22": "3Y1HZ1qYSAYsg9ZdVUf8K4xDHnWMzpygqxRsDaqNN6BBM919FSCsougRjhsCS6BWpxSBUrFrcNPbDpL7Rq4zo1d",
  "key23": "4pxaFb97s9amn45Hfr6wp4zDZcWMF7WpLURDZeUzQAu1bLBECroZTNjkGznBQNJ2DoyFYekoaoGJL8FoQyfQbzRg",
  "key24": "2fQjqfVuVHrZTd8Dq5kwAFA1FwDJucjSWMjMKEJyqCtirgrHNPeGQzSLGK7zKBcCH2dN6MqJ7KjRkNTqGuHMjrUU",
  "key25": "65h6FfYraG71UfERKcvF4PoBtiMtVdxKJ1zU3gyjdMhUaU3QWJw83ybuQMmLGEpZAk13JWRpxwZbmrn1rmkSk7JE",
  "key26": "a7Hkyu7uGdH84k6xtCX8KCSzQpCZJ7Xq6odf4XvmuzShmykYxgNkmwrJauDFRkZwAncdqvQTTMJhC1z9Tsv8xeY",
  "key27": "Z7wGPN8Y1iMsTqV1dz5Zpy575DtqQ7h2o5g3dHSDGfAWWJHCmnnbKPotk41g8AvkWGBrXx3EC5rXyFxuUfjXbp7"
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
