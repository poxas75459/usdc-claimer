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
    "dQiY6pmG9wonTQXqWN1eVQrt27MtojLWUqdR6gNEeV5rajBVckJ2ZcgxorvCYhVPrEBP21EthMyUyRC4jWiEsmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cvCGkgpN7Es7wCbJjHz9DXQs5MXPeRdDNW5ifkmMDHhKBEgKmPKdqVHFrZxorkM5nJf1Bui9BKrfLHWYR1V7pSf",
  "key1": "3hLEfRhFg96pMwNjqk1MbPW64s9pVVsh6Ut67MF6CPVCCaTnHGDSrrAFNRfkjwyfjTebWhGPspappnKpPZ2k41qy",
  "key2": "5DG2ayg1XWDsuPi2r7BDgsc8pRbXVKhxGRqdQw7QoEfpnEq4SdVL4LwvkLydhv5sJRaPbpsCp4MTh4vfpMP7mCqD",
  "key3": "B1fQ2T4FjZqWtXSa2uKKYTfxRjqPg6XkHVpqZcPNB2hHg2EUJZAb2EGoeYvBQ6YWJxWnEWP1A2WzgT77shyQwMc",
  "key4": "2i3TMX3Hi5XN7bgPLK2auuz1fQLX7memXBLc6gU7wsWPJyWbwLTbJcKr3nRnggwVtCfQTKnsuqUuyw9Y3ksbC9FG",
  "key5": "2vvkSNUt3LrKHDbZgXnxotKPF1Xhp4WebfLNapPDY31bLnw778xmGzx9SYuiSyKiomNUVFxHWouMSngJtVXiwYUD",
  "key6": "5mXW5B3fo6C8gwQGRgodavfxhX3bhrwLrLVKMZczbUA3Kmo4wvWZeti3KQURmLF8rtCQMUUzHPHbwekUzhtXJhgu",
  "key7": "3TJuhF1Dz7dP2FuPb86fD9Fjc7DDxdeQ9DHWjyPuoE7AHDk2kh3gL7bw5upQZKfzugr2imq876ZkckwtmLsM9M2M",
  "key8": "5L8uBYMo71rARogWgvHyCHcy63R9MmheLUjoavVjZgxyAgoRsK2arwVbsZpKHM1xHnq5BihHxMn34tnzqBZtVecN",
  "key9": "Afbco8uzW3RQZTjBa77bLQsCc1C8TjJdmfSJakktegoxDGMZeBNuH5QMY59WrdZ6i4k5FKhemfNvfBvGDwS4zhW",
  "key10": "34XfiTZ4oqfqZaQNAYQ7wkT44soTiDq4Bfp27QsNrux62k53J1BzrWE3XFXpDc6cGuJNUNvHb4jzuKuXzVpJJiuv",
  "key11": "5CQcvqC96NNEWyzVEENYQkgtiRCUq4cE8FUBbom8tWxJjeJ2nNg64a7Us1RBKWc1WLXa595fqpGqBV6pdzvtDM4s",
  "key12": "5Qg2qrw2ucNJfCncxsi77ia9F2myziqhQ7RhsHfABHm6kLHw8CVpsR57MiPcdeiQAMM1R1baCCvPqE6QGierCGVH",
  "key13": "2A73Lwsz4TrfdyL7eHS7tP8XRete2ruLxTnjRfNQ4ezuvSuz4rjo82EebekpVU5KGBtUDCtJj9KmhpFM7wtD4LM9",
  "key14": "22UohAcxMT8G1cs4CDvabJRPyCAxMFh75GzrpSVtxi3Z6fSbWfDRSe4ZFffU8UsFQ2juDDW6KbhWwSRMY6hGwpAz",
  "key15": "2Mm8QyfqTX6CudMYTaw1uxAeLUCRF5sKwFrERHitEg72TZp7H3hqrP21JPd3poRagyepQDDjVJ6moyywjPxgjWN8",
  "key16": "5DCshFwpNXtdhqeDA1QbUviLw4Wdhv3Fd9UShDnaqzwEUkaTpp5dZ3upK24f1rwSdH72ipyRewcWD2tNRKXFy5p8",
  "key17": "7CX1fstvLo6QwTN3yDkUAWDmpzsUn61VV7jjKgWjj1xA7gecyW5WbpvUWUSqqELjPhxwFj3MfRLzYpe2tc1Af3J",
  "key18": "3Cv5zhHzn2Ak7Sxiib8Azf17dJMv6zsafcfX1PUBvrPdaDd23wZ3tvq9A95RPYPDNeBmUJ7RkQV2abSKvrPFimoB",
  "key19": "3n4RbwXCgMzMn7bA7p2JGwwEfYKkGTpj4d1JzmcAW6d7EeUR5CSYJmcBMSAkxKR5gCnGhqAmQb8JhPwJ4MRvPcv2",
  "key20": "RPUY3omJrVR8znqoTe8ix4bC5nzrqNwTXEYG28wjRQs57FcYNgigz5Boqe4nxkrc9acb5gTZez6cBmEdx7RdSCr",
  "key21": "58QAggs6qAKJRpKcgaabGt8t6GsyEPs6rw7e24GhGFvbHSA5omBehSEiyJ2FYP5g3Sp8qSjZ5wY4KZfaQ8XBTmJg",
  "key22": "3MmXcQ2QGtLej2apYxFn2SWVhke9UhUMmaptZD5eAMnLVyJ922d4wXAVntu3zaaTrD7pguq76UNDAgd4x3fJ9yiY",
  "key23": "2PtzgBiWBcCwRzgJ2J8jaNBRBwkbu44okqFWxzHNx3uBQKTctTmwXqT9xPuezsj21mALcSvgwUWZk9AZRb25Krnd",
  "key24": "3dD7VvwnLaDgmckiv6naVhpRN77LuMYUzWPP16Y1ZVa8nAWBgTT2LDPDA8hGLfJZrKdyroHE1zvBv2wpyj19iQWz",
  "key25": "4ZUDnAuUDRVM6Gx6ywbbxFXqQeeUkWt6oFZfrZ6cpndKfMLDK1L1yFma352yYCe97LkR5EnEa6JJq3VRNX3dZBeD",
  "key26": "Q29Rax6pYBpduRGB5Yfw5PfbFV366smQ3UsmSSi45Zvqn3x1H5vYVzc1Rv54R9A7ceqGmcfT1nEWR88bRQVMC4E",
  "key27": "PYaY9syEo3uUtSUDej2tUV4jrXScTFTtQcvs3kCeZnaJN8o3eEb96b9nAFSy98jux5wjZR6Ex47Pu2XsvvaZqYa",
  "key28": "2iGHrt1KupGcHZMF5NWVY1fzbSzoBNXi36bW9NXQ7CDWZwXSRhn4jZ3btQq1aNQriqWa24nuLdWksmP6ZSjGYEA6",
  "key29": "36LTxkByGXWdsVD3Y3hvF8RrBn8VaCgpTbQ8xTMsNKvfrVASBtUoYpgeEbKH5xiUBUKT15Ff29WFXXj8qRfi1FXT",
  "key30": "tc2GK42PcWGmrYzpSintqnX7yAvayi16L3v8KmUauTWtY9bMbZyKf3QWPpxogPyTvoMJZA1GvsC1yDcs8pfKaMG",
  "key31": "xmEzhASSehBx3shxcbM7cnJbxZ89ztyWXuy8B7ZpBBZKm7wVqPCFXhF13aGpat7j3LM43HBg5fhJJSyJhuUFg2S",
  "key32": "5QNVkH4dQrghbyctMtmJdCL9N5xykMURFKcFWJzXNpF818pujjRiPTMuNBum5pEpPihJQQRYg6cbbFxXqErPNp3X",
  "key33": "4B2h1i31aDNjYZ1L716ZFpFtk3gXsjfRHu6oTARmttFGx3q9By4fPfyz8dWLXXm5yaZMiJfNjZ2zfB2BQhWAdhar",
  "key34": "yuWnGBUx4CQy5vVpyUdaAcjngGjSSzxF1joDGhMiJnKchuriL974UKrRbmF4YHFHyratKV9dvWAYVd27XiSBKbV",
  "key35": "4yhGHfE5ofjJxKYjpzbRwx1s4Nm2NzxnE2HdKCdK5HuCVbwjr8YVbGCTFvKRMCDGj2NQkm29qwboH7yrgCe6oeRF",
  "key36": "2kDFUaMoguyLA1Mjc1Wj4Gbc2rWAMEzp3fedVcspPKrf1b5q9QH379m4fXJUwwkZo31WYf3LAzZTDjy7tUUbRyfZ",
  "key37": "42cMXkW3AsK2vUyCVrqARjmDmXFuZFqKhWMjDXyyYaE9Jg7iHxz21Mb9sUrg9PZVaosMVXU14JRHDT1w15SuvdSN",
  "key38": "4FzybZMPZSwiA8AoRxwg5VMCFEydg9KC57k1rmMeQ8YgbEtB7hQn8QZ7HEe75hpV6z5mv3KiM2bA4Rjvs6v8sLh2",
  "key39": "Y5sDuh6EfCQ9hX3voLosY7SWAwP5gAgRXqF3utav49DLmhwQtyfhgUFcz82M9gC2TdMcrpwXoM347yzq1DSVn3Q",
  "key40": "4SvZ92jP4smqQYgm47g1ZUEVQ95Gs5F7BqzYkjz4BnqRgZK7eBmTUcV9wAjLfUQMAsdrHyxh6JbeWUpfMepovH3E",
  "key41": "5Jho663Pbvor2Vbgvbnfk4RCd3y7pVUfJVmj1jyLz8i6z3q7wjC9GDdfgME2sWKoi5DdKqUUhBkDNNHoK9gXygBZ"
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
