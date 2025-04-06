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
    "4SS2mMCMvigr3GKhkWT4socczDy6o5zPm18xaF34mros6Z65yrtaZBS8Uj9LFQ7CQpcdStrs1E6vKMc1aQqPzjSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YsT46ZqRXvos7U3y6bqR9TdA6KKqmKPGiNSdzD4niJVjGwLP5HZrU47HfpKfac2EArzAe4fjXHu9einvW17Au9o",
  "key1": "PAKk37kV1Wz7nAhSVX4jgrMfWNFPw52m1uzgKme9LqMKY51ksbUpJoW84fRpjRdgm6K2Ua2qvFsPoWMgaXrGvBV",
  "key2": "P3EfETMjZgzCUNHyRrPu2FZv3ozzR91iQbuThbdLHPobkRN3rqPCo4ikEH3ozPG88G5dScpHkytVhZWaxL5rWCU",
  "key3": "5DtBJosRnLHmrQCfEDdqbSDdzqm5FD5ExFDV8c2tPmVQfDeBL3FWQqDyMgBss4K15TLKmRFQTzXW8nWYHbyA5HX5",
  "key4": "3yJXgu13nLUayJYhht9b2PBsW4vi8HFJK9oPjrwWPgwNvSBJGqfmyq6zEWEHiLgXtRaagawSAUjnkGJcFqNfMohA",
  "key5": "4HAHq1LrGuZs9MBgwEsGv22Jwpp3VBTwnHRyg9cGFTUZsqe6Sus1JE7P7HkKebqfDvY254gH2eUM6ae4JXf921yr",
  "key6": "5zK5jBtRzHCY87h5L8evm9sxCHLDMfM7PLv5W4rjXx2wYwD6grLiz7djmbcV9YyiWG5wPt15wgcRnUUXGC1sz9M2",
  "key7": "26UntLR2Fu3PPKfCEqyZ5Bn4eW5g1GRXGu7cKjFE2BN55wQ5CWefxu3PGPE9Yd9ZQ9uaPe1LQLLfmbwoUB8JWQT2",
  "key8": "3urui2Yd6FyernZvjFfC5i1dDFsQPBcwXhykw8ogvBNK7S5UcSzTdBuqwX1GMhNzYY15h2RtkVUv3c6spWJJfKtA",
  "key9": "3XTufniUh11vKecU6TcDXpiw8okgXw8Asa1MHJSF9i4UFc89K49GYWf6HSReiZC44vbgaFKdHseyRioZbb8vxWo",
  "key10": "3AkqGBmiszEmgLLyNTsAQmdLydpbzo2X4atB52TUck7AzdRheCq6zFWkBeErANAkdBHHygXbnwGJWoAF8S3kbZx7",
  "key11": "3UYSMxTqAvKYsHXFpAUrKeW3cn9dcEZqyeEiBYt3CNekur8eS3wf1mzPXMkQohWuijC4qTsyZiVo5T6qQDaXByVK",
  "key12": "4kiCGAtDBbmvK7ZPgSg4urb7ia7C3wWhh55zFShtXskoziF6CQ7cnaeHy2xwt7yRBCne6SwS3JSbXc9Pn6HAyFWD",
  "key13": "5v5mrqmARPXCTGyvBRQ3Ar7RTXitzevsivvPWCGDCCJbuRFoNKj6SmrSLDpjAy9byxzhXNrAwQdKsXxVxzutTYHK",
  "key14": "53hVDv2hima3s2q8DhHxsvJEqyPJWz9f5DSfayK16thjn4qVH859kAj5dW5oUFcDc4iaD5UuSxMqbC3Cuuxbgz88",
  "key15": "5M21LHihN5EYttxZHdsCjiFVRvSaPEbj2yDoJnWZoETsnZvpuYkXVPxiHdqbDSYA4t17hLapdTnyFBWySq34VQci",
  "key16": "4kz2vXkyDuoBfGyd8LcDrWPUcgwQtUZkDeeecemuiUDCw4Cv5gQYo1Na1FDoVA7fa2WcjvniSEz2fzGpp98jb2Xs",
  "key17": "47HcN3zZx2W5tDZBbLTHGuGLsGWv8ikDdB4z2Ns5CSWLXgdi9NjKmXae9HBewWJFwYPsnEFK2amyS87u4Mm7yv7U",
  "key18": "3RYasw65rqcS9ew6LkoYmFdVLKB4M6ZJbxp9hm2wAJgM9GXxkrwTS7y5xWxxK854pCgpG3ykEBT9ByzXgzMTH6p7",
  "key19": "fZZWHaVEc2FJk6BJr28ETtkVatPLruMtjoX44RxaVfouT5rdJCcK2axRRW1evMyPbERMFTYrV7hBQtrpesswN99",
  "key20": "3VEUECdp9UiCN4huiESvfxmCsxA5FwGrEJdt2W9hYwFmHgSPzVUQXPVZ4DhkNogBEcSsqYQ8maVAf7b25BHbZZxR",
  "key21": "4enaHXrcFVeAj9rTNKNYiA71Hoiorz5rxC6fmKjZ9Ccpb7e3dEve6Th2HEa7BXZsDHukfS14KceAo9z7VkKmj839",
  "key22": "3juoyfMyL3HH1g1cMBcAQMzUoUY8YAvGQBXGLujTSCtn4nkVRm76Rw6pBunc71aevQMFLwqvbbXLAV6wMLJyoJMv",
  "key23": "4K4XPV6eoP3hJw8KpGeJeyEcEdtmisgF6cc28jnEwK6A6H6SA4k7J91AKp5qdQYgGo6Qy4MPJnF6QbUgmi8hevvo",
  "key24": "4rFYS4c3v9h4djFRS8rG3Y7rEZbBpB75PdTnPiw5gjyRU4XGMRU7M3GKCi3Z4YUNFX7vRn7NTAPEAhdSzNMi3WfT",
  "key25": "41WA9Zy5Tv8hGkYc2bLJ2Ei2hajiKBjmGo3yLiLRgHSm82Gdtu5kbHDJr9bSb9cE5aJ9nxygosZNsvyK7DchSeKb"
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
