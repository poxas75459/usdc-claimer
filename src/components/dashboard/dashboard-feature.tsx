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
    "L2d4erNS2vThQ7pJ2aM6CgeGf7UpcK8JAJSN5W9EieJBRC5hs9mypM72KbHYSjK4qyEFDFNFtBzpMcSU8gxX6RH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23GPs6y3Uk7sNypHKojXoK4yKBMEF1qGvGy3p8HP5YwjGmJNRBuetffZduWKVPSdCfnCZ8DbofahhnWgS5ryPZoF",
  "key1": "3YQJzmJKx9L1PAueVTVF3v6iKjUD4oU56ZWRjibePnEXm19o7tWej2R4Rty1mcSVJ3pdbj1RJqDjorfywex1md3R",
  "key2": "5TV4kGGGgRM1FK2P1TQg1hc3DRwsTZAnezQNYiSqn1WM99CzoHp8GWJzkdsN2LFRAPKcxRvLZ7zgBMjkxF8VqmRe",
  "key3": "2oJndhXD7gBJTPVZZg4UTWHgaDqw1rtGLSa2ijjF8or49s3gpZX2QsSmXdqG5ohvkkGDjcn2w3tc87GU2HwvYqB9",
  "key4": "h4WBRTfEYKV8cf8VjQc5faFfj6PxxwV1ZKeUSYBBuf6vCdi816DREib2FKtyZutQxrk2eZoc94FGyKLrMFPTmTE",
  "key5": "66EAExNDzVt6C3zTqNs7Lr2TEPVkw7mF9iuB2DDqRQcuw85T3wVYta9ZNhLLZzKGRVNzkvKqwZvnQ4zvniNLCz7N",
  "key6": "4yKDzJsAsSFjULdMNiyCSSsBYTyhmsFoDHNMsHGfyJKSX9oSdNuAfTPuzTKx2iz132sjaP7feDTjbaQqFUJAYRqR",
  "key7": "56dMFoDBrbtNVKsCssAy9G5FUZvDjSeWfhn6LD3pSsB16P6xVHSAWCfu8EWBugeeHXJUKTM7V52F6gfSLfFWx1wX",
  "key8": "L9gaA2LM4D5e2Davqw3cZJrMB4ewYE27W7j8WSUyTbnKUx2J1La5w3Q673Yh9Eqoc7Jnd258GzgLs96tTqmJZgv",
  "key9": "3syCaden5izeafnfSkwwjyVFXL3uoKFnTWMhpSwjry5j3W838HqYjHbKoedhc1ducCVM9oUBN1usfkws5iqJ1MxF",
  "key10": "5SPBbcvq1yJzw4sHonvipqrVCtimD7ufSbeywoxBwctBoGiKsbFaReEq72Bn2Z3xyB5pdwFaaif1Zr21q7pcuq6c",
  "key11": "m1frke3PoVRBR9da2X1YZKeQnLyKHMfzbgBAwdyEXe6Kj1E2bvtXDarRNNJ2zSx8xcnTvpUcahbEuatrrkoFXnA",
  "key12": "3xACknxNqy3eVTeNTTMrkcUPb5koiRaqM5c7h6NJrESNKXrH43vksKezWKrSCrrpevuaeq4ipp5mPVUSfKSWnXkU",
  "key13": "5BRGsDQo4wUh4pDsrCmjDUs8Rw5xWXa72TZBpeXxSXhzG4TdU9EXshrNrWu1aDtBBSXu6Q9G2zW6P6Bwa3oQD2ZL",
  "key14": "2nSGkkTQAp7gZDxUpJASvQqJ6TCTeKps8GHL5HNRk6ecwLekxeYvgGU2Sa7xMFotSHYK9e89NBQ8ba9hvE1bhWYn",
  "key15": "StAZeKKDVH6xkr5bBoqYJ9esMQk3WUWTJFWXYQuo2VmHvReSReqZA4ihtL8BoW1V37irMBzXe43V5izEYJuT2q9",
  "key16": "5bxrKbRU7MaU3nFHTEaJXdfp7gTQMP1bdRjYy7tWQ12tYmiinHzCsLLPzVnpcak2Wo55FSj9zXV2vMZtduLKwBzi",
  "key17": "3wKRkiZwB1EznpMqJ6qCHDtK4bMDZ88gSEv1VeZexyDZJj1REts2GVQ8P6989tP5QMkG7pUDywMZ4PrWoFT7NEBo",
  "key18": "4qncoDMCMJbaCi6wJ4cHWq6nJEqTVzxADyxHs87PsEFk3RN2hBP6ZeHCKq4BwB7ErWvhKQYBfC9dzsYttSFSYAah",
  "key19": "5SLBv5JMPNUGD9VhLuGERMxPNLWxzNS9EPV44btQFWHSAqhrMVm2JFWkPZWRtr7T9ZbMwZruNpkYaixGnfcEU4ku",
  "key20": "4mXfqdda8iBYATkMyAqzwzKgfJZhVz9nnquHRbcan1am61hrcrcDoZ8AW9somNrBQGaQCJA6mTS2BNM5iMB2ofHC",
  "key21": "4DXPsBgTCnykhBG6m32RUpK8V7nhkn14DgSeMVhgvT8urBnVAsXCcs2LKNQx4awe4KPcQBoKbF7AmETPKLgMPc5",
  "key22": "Sb66nV7zk352JDxyGYyuFvw2mVFdMNDNxBSKZ1E7My6qvZqjSmxVFe3vYPn8giGbB6eQxFhLWfZ54ZFrYmS54mF",
  "key23": "5MZFDyJnHj8V62QPeDVridABFUnbhjbTnqjvq7YpB8QacS2SZBF7KJUtqFr6ymsWjBrHDiLStRCqLoMr7D5L1F4i",
  "key24": "2xU5mgErLVJ7fM127Xu3Kg2tEaviTQ7Fcj11tCRDeGGZu4s9vWdnGULdyyZBynFT7Dp779NovdFZ7cbKTQEKdsG9",
  "key25": "5za5t8dFQQkXy8TLH82PUHKYUxC5RYNfVWiJqzqAjZwuXH68nwqbahoEHY9CJYSqWcgfe1whJboERGupNyNtWYt2",
  "key26": "tsj6wL3RGkdPg37cBuXGPsU6p681Q17JBEQMp2f1hyiABJaAjpqwX1NsxCm7MUASziycBfiKFKs8xiJvJfbt2kA",
  "key27": "GTE5JQXYAezEB25BFPYkayE3V6oukzV85yGcnk2XTcNwetHkXHZr1ucxpgvJxyNwhaJJ3aEaACGoEByi6LAGPi9",
  "key28": "MCUuzjw34Y9GWfNtANcv2dwj8VHhpwjiT3TsgMgtsgyn3ecVtznqJcMGHCbeQNHK5JhBYgA76cNU5YEbmZQxGmY"
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
