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
    "dedwbe8E84Cv68WGiTXFnBG2eMpLx3iTA7Ltfs2HucWf8RNWK6F4zkxU79ajsFp7Me2fJfwADHUTXrgtazaU9vL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z5bn4WmJbuPhEUdFbxehZSdhHphRv2Jm3x6NwScecL1hwZsRNqRGR6aWrLHCC2cBdJaZ4a7vhj3zKB7ADE8dG7p",
  "key1": "oUsqko6k1zCuADHRrKdMBHVDXGdRJTg3zbfimpRJSpYDRexp6fwSWkZGKrsBncbE2kK6jccpBV5mnJ5StvfHTfR",
  "key2": "59hPNapxMRDfTATxi8oScBRCVUsvHbaBraYBfnKsxAx6XqG1ny9dM61VStvLWCr6MTuXiFV1i5BzXdwi1siSpVS4",
  "key3": "2z26z6xu98bYtnsztQx7TTBDngYrnAcBAv1aEKxapmbsuShdud2KDCiQN1i4Xw3BTBrd4ufPhvvJXxKyoTchhJke",
  "key4": "21YqtBGrsyNr6bni2XJhrnkTDL9o78LJ8YAw7dzvw6YGa39fWCFxdbyD2wpBm8HCvbCa5w2ztagD8ypudcL757rj",
  "key5": "5HQNwPiZdiNzrbm5Cpiu1akUF9tHEfqbeaCxvs6aLN6d3pFxdcmT2eXjcRCKGGRiUiSJ9tGFL8RyNVEEB9uXnLkw",
  "key6": "2KiKJibh8T49mXtgZVhNaB3YvHyoa4Nz5mvZhktBiunoRFGHHrfEsg8ixJcbyp58jjKeSXXHjRYRZE2uhWdzzMb4",
  "key7": "2faXaFuF3wUbqK4ggVKdCifEoBWSeUEmbUuq3hTMobMFcSdFqrxGaQytUAChVh7viq7SbgF5C5tuwA577ffLBNQz",
  "key8": "2rhPBVdet5stHnzd7KvwEnT9RiPupmWqC5VJyBTKVDHCrEsbVgvokaCTAJzHyb7jkDQ7Ge5yjG5KT2MqXPLxRRLR",
  "key9": "2MioLmcFqKfhWSQpaxzwERQwXL3uupvfeshaaRyTAv6TrAs2RF8JN5sU2ggNCA19HN1ETUUP3LqAvgGdjrnPCZ6Y",
  "key10": "5axVaK7n6cHfFi3DJMYYdmrTeXcLiJw24gFAaeiYRRN7EYACWvUzzqULSMQkxkxFV4SoYxBe8L9JfCxyybzEfwkx",
  "key11": "2SMpqgi9wif3Sv6Y1GCF5MM6hW9G25kHaP3vuEgvNYtw1cxdU3Zt8Qy6WhRfXUwNvavoF5fo9zNL8ngcWN3bVUzq",
  "key12": "2ZSaj3iun3C2Hoq7xu73gxjhXbby5N5UydrQ9eSFyuXYwPyzvfomXFNizQzaUYwJAv9fYXMfxEVuBD4neav6Y3np",
  "key13": "2xHXoV5mmA8BcSKQZDGerF5Lf5sfxLpTozHHVM2thfyFMfjgdrKyvwXdMhW4844aSnXdyoar9LnYDCR1s6ba4LxD",
  "key14": "5sHFsYL6kEEVHLqUBr5Z1nQUV2KuhCH7xRod9tMYNqgK2iE2c9kSch6ZhFCZX2o6gN7KZAiLPrDpTWQMeerPYzpo",
  "key15": "56hN3Tr8JqwcabBUmmDouF1quVCSzjBeQ29yCaRaRpN6PuRgzmCcqQmHFpxd5ZvWb8rnjXcrCufGZyJp5dgwM8a",
  "key16": "5ZQArZFhYrKv2FhqE1juCrsxPm2qPeuC9KVMZifmmZpdAiX5xnx7ZfQpL7dyB1DJbkpGfUbXTG2M3xychp3ivwvN",
  "key17": "3q8YKGzdoEufjmRdaPupnaY5xAaUuHr82mtFn1WViR2x8mduU8pmb84rTQiSwGtBurF52EvSaxa59i6pWb7vkFsq",
  "key18": "3hQ5UGZPnScJXnwnZ7DPohLYu64saBZ6Ymnd9XgG5GikUVYjcNfGRSXzD1SCVUiKBSxh6wPXmmbdtG9etrMY6igT",
  "key19": "AQGLMtVvG9drUXDtgLvqHHyLQk7PUq6TxtSBx3a2QUyUFNjcyDjehJhsGm1D2xVUhw1ugtYAziuWdxqvJEZ2ma9",
  "key20": "49FvmM7yzS4mtbWVPqShBie9g2n97NZRnR3SPgN7TwoUuFgrhBYhCjCjE2DG7Td96QnjQiCBqgNN4cry11Qf5hg7",
  "key21": "2NJvEHQPbJYetf9yRXgTy5TRmFhCe2FCoxT7et5sF6LDTn9kp8wjJ3QKbeA1sojf3gH9nQFtRhSJuKzpkLhQn6m2",
  "key22": "22PicBhc8VS3dJxtcjxJALLQGQxaZSCJ9d43r36W1kfxCZcogCKVsMnd9rhxdsEeE89EtjBuVMsedqmfQwRfvpFC",
  "key23": "2jTpLgT2YcKvUtJr325uPpfNJ66M2c8nEh8MHDgk9LQCAvYGFd7YWLUxt3Qaj7dX61XRVHhgUNLawDhUhjBmHdDM",
  "key24": "3mwRCN2wQMPXGstdy1j8kRz1tFw8ZEhh5BkC1Xpyi57bbBsFEUZ1VQdzEmM3Am7Y74mgcyPDkGtJi5tfF62n6Paj",
  "key25": "3edBr4T1jigD5nzHi2d2hhFiktGrfYXZD6UMzkS9DrZeRPyjFRcno3vuUiFTqXDU3efBuXG4gAE7G7YRMHutW6U8",
  "key26": "3kN1Gk5RHUfzE3nVQDZj1ebjjC2LWWs5iGnuV6NM78ydXm4hZt7LRp2bp6zinBdnj4e85v33N2DQ6RLrfkjajMAD",
  "key27": "28LSC764EYL9mxqq5gmheZhiwhseT8V2nQ5fUuuzYWThQ8eMWoxTp2BAJ6FNG2NhFMVDaoJ9MGna9XU4vUsktf7W",
  "key28": "edE2tvLoGZoEFWYFg9AYekoCtyN5Ps8mEVpWvGTMobjseP1V3Hcm6snRRdiNqMGqwsLc6jFEZadV7fCYPowfo7f",
  "key29": "3HBfobjQT9crVVR3BFVLdjsU7ErRVeg5sRit4qEBfMfaXibPChLb6okRMARK4aCM997g4hqM12g6ccgXFjAGrBor",
  "key30": "51y9dFitSFMUdabWqBxwA7fS2LSqr7M9AW6wPLERKsY8TypRUZyDtK3YbNxjSJyQYwvL6syZZU4Zsi4cSBHL6gjC",
  "key31": "58aqZZDa7JmrX39zm1NSGrdnECLMy3SPnAup8PtueDQkszBrBAQGDSv1JD2qaHQrnHiSu3h17qZZP5DeqmGcbT6a",
  "key32": "3wPausmus8J1W98Bi3wiHimHZE9ht5PxPD1pwRBoGfmfsbyFuFetsLsrZZT7U691cneyzDxzrCsshZXbyZ3qLYrb",
  "key33": "5exWAyeSiXjzZsfmvQraCa4r2k3xLC716EVZ6NSehUfSsz85TXDBr3eWFyZDEWhAxU2ArxkcTPys7SiywtxhPjvJ",
  "key34": "4sN6WNqH1RZYrxiUnEJgza9vB8tYHJstgMADcpXBkACuL3DTE6LwkDEuEgzEstXYuPh5vmEawrongW89ZH75229k",
  "key35": "2cJKXFbLXrgQDwWDV95hGQvJtPVtDgrUB3GrG7AJQRVHunUdFBwCqRqgSx4WCWCMwsSWhag2a1C3pELiwuG9SYg5",
  "key36": "2UmWjfJ121cZhmpd4NhLc3Y4ABAtdSq8vL7ZxuFbX8h2RpNXR8BcaiBDbb1KDhpH5xv7pCP8FhhTFz6SkYmJ5HJj"
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
