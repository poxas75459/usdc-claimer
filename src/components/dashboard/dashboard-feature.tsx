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
    "4wjbmh3WNaQBBj41KqVN1wrFE88GXNC6yyx5YRJBQBbGWHMNGyK14mZk1VqUJNcjZ7W4AWM2UxsWSrCujkQjWVrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dT86z9kMhpgcBWqRCfAbGCHp9vNsaEz1GyndatVossXb5qHibMzQGy9iFcEYXRMEgNokQPrWhaEBTXGwe54wceJ",
  "key1": "2tUsvctgm9FmuGLFUFgdzwPEg7o9y8YhCePzr8VqoW2SAApdoN8K3kyH5S2Y5PaqTUraJj87PRVhRUssXa9K5ozs",
  "key2": "4PxrYNbGvvDfcN1kahCeCFgCmPj4KMguW2RYVc5TzrZCyBgmb5vHU3kXFoeTN6B3amiGwwGhAimQUo9CJQvUtNq9",
  "key3": "3RbYkdB4cmNjaGez68TxPeeVUXwzzcQifjqPgnwNrNFsDYTLxudiiDa7nyuAteaUn2UUfmGBQTrxU4kkU6gx5NUY",
  "key4": "4VdtD6kTwtEEnWrwbsuLaWdVbrupYiDmwABpNVibzFYfDDQ1WZzgvjaA2esGr15XSyJ5AxV8bj6ZuKQ1wnzAq62N",
  "key5": "3K7b9FqNwPBNhiDEcu7uCBrBmEbk3jRuLJUqgGmAg1GcqTgKugkUQL1j4ic88166YMvHvaGZCdmJm99CjueNJuN5",
  "key6": "22Cc2rk5bL9V3Me7dhahdW6nyAdW1ofdqfTdVtyXF7ceWetVL2Nks2sMfEEQSD2JVZdwoUMWnPCZj6Ggf5vrXj6s",
  "key7": "3PmZLSTCmjCePSpwN5M9Hbi9vRtf2dJdkMThN1gxFe1bnw5wmgUgvW3qm7hKYX354iCqShaXuLmNqXyU1f53tuD6",
  "key8": "4G4ttYMzjbSoQoPFpqAU1zUG4qNhUu1WJmVdkQzRaDEJHQTFsQvWRKJqKdBwWHadXZYoVZRHvoyiW4wbn2MLYToU",
  "key9": "2qEgchuAqcUvFSYzf9nrQ86393t9fPEpJwLARwdeEqodVGoo1pRbc7GZrJKLxomrdhoqLzj6GLtRLJK4Y1rsTw9H",
  "key10": "3U8sLC2q6PZbbCkkvopqkEj9ysUAeZkUsZJrxGT6CoxB2zdoadSEQxYR7YRRMqmoAEc2qHvEnq1MCkZxNeqYu2WE",
  "key11": "5ad5MVCWhPzbguTL5qASNEqEoyQwwfxTwynZ3USeSGRoi4nK3pPGZS1cZH7dyXUYLR2DKX5ykPTZMJRQp58GYMXZ",
  "key12": "3o6KETXUvGmmwxrhhHz6VDmXeG3kbm1DzAMAeFSbVBYApuwGFH8vv686eTuXHXVPBcbM5MNByU4iQ4dH1w5Kj2RL",
  "key13": "41fm3MAn6WEnnLaqHwb64zJHvJV6FvZTA3YgySvvUaSe9Wz4oodHjfaE3egc74cJiby3MxFT8e3e5MuUCp1u7v65",
  "key14": "2xcgDpwXCE3mCYVajG82aGbyEJwAVbopXxuscUTq1t4893NsfxwMzoxv9jK6q99KncnYHfAdjiroKBeyYNfm48ns",
  "key15": "5R6YMCm49zi37PX5xqURDC1zJWJGxSiENi3RCQ5NSrHmYmech7EAKZRDrAus2JeUvqrPaSYyrvP5iDZNL7TDyZhY",
  "key16": "3UuYyC3jVtWCtfXWEvuEJtAnuwXeYAErSc47e1WQjQU22D4pSKH3XcWfYMbUeUKxG6NQm8oc5dbWYFj5Vqo7Lwsx",
  "key17": "3PWrQUMN7khW1tjEyErtsXRFzR3TuF5eb2sv1enbzJau2B8dFsk9GjkTFJYhmKy2uNFa33ehCv3iFUtwqvXEqVLj",
  "key18": "598Yc6ALLDoXA1EFLe6fGhXCuGnFhZwHbyD6M2LujMoyq5up8Rbtxrv9RrVLcN7oX92ubWcfbKfgVHx5EAaFHo8L",
  "key19": "s6tPLQedzKgvLyTZ71q6r1WEUQdMU6GEfRR5fwUT19bSekD7jqEC6GE4f3B98dyiWFK9zDYvQZrygoZjpQfmXCP",
  "key20": "4izPdRr1Dqesknrj1eVP8a8a2TmGtndRBPHZVDUuUD9NAHGU2N5ionrqV5WL9RcGj9XFa8qnq7VdixoGCzruyeAL",
  "key21": "2znBRexqp8vi49CuzpZn3MESC2cqTE6AApVvEcFj9Q9sdUJPQEmDySs2jCJVyGwGauFkZrntJtnqgCZTDbf5PVAp",
  "key22": "63tBj1r8U2aQ64xhDLiR52enmi6xadAzxRC1ojjwfT1Pao4gfpTaAxMM8c2CFSPYeTTM3RAGiyVG69ejmf54pETH",
  "key23": "4jZyXnHZEHo8ZJAtqGfBEttMKNhaX9csSB4tCRDYWGEY8uqp5xbzcKKhFasTVqMJ8BRJ33dzNssxPmPdNT9DVJ6U",
  "key24": "5ZGSkyPYGUHt3KkcM9TJz63zaW9oR5s8saFpFY4MpL7VQjNw9ZwWqADtgdTthQJxChehmb8emvTdRuNU5vmm6QLr",
  "key25": "2NPzoBY5p37ZUk6jcA3VJTG7dX3MsMeBiD5sowsqWAQEQdGwKAGiBHYJhDnuNwNUaqQWkSNXo1LiEgcVWc71QkZr",
  "key26": "zgMZYUAhFxH9Cqzda8EoFnkoNqnBvJHN4kU5S4gBr9rvtAoLQFZxHrwADGtKCJJoZoEspBEAgkoktQE7kdvZAn9",
  "key27": "3r1QKZqCEkwiTZU9c2pveiCZQEHQ3EihPRRm1MjG8YJxyy37AcJ31KNdeWSK3vzNA757bkDij5o9sQdwcwJyxN6k",
  "key28": "5Hbr8VBaKD9ZfpRhTqjERmL9NYBEnfWZWAowMRpXJCx6iYvRGQ6EMSezweRskL9Ki3Q972sr17iUsD2ZRHVAZN1X",
  "key29": "3X87ezgMH3JY8NvKnhZnctRookC81CkEJV6FV4LZtsrSkSr58vdKqGA4FAPpBvSEsyniokg54LrWJLaQXkmzYFix",
  "key30": "cG3LhpeHihzdFQfWMre9KFayks4Lx7L1gQcfYqQCSV1Nefn94buMs9b5nRLXYtuiH1ZUn2jWXGVqpv67CB4dKqP",
  "key31": "57XwPXm8YVV4WP9Nik4EPV29ZZaXNvQqMVNihVvSA5QZQJFhfvETTdN9yas9fBP4RSFtu5uUqTcJbo7GWCP8zaUK",
  "key32": "3SgBf9yQbwoSC9LKjPvdkJ7XCPeUYB7DM6Jonmv8HihTtkMTKjiJNzReiKV6DYzCDi3bpPWzfew8uFZrYZXUGS25",
  "key33": "3kw9E5F2p2pJPUrNCPaYbnx7JmrGmBRLzRGd8rmx525hVuHsFPJrYM75ad5JDQz4emivPPupc3HdcfTTbycjejgB",
  "key34": "4dQyzfR1ycvgm1U9p6pys3KLuaXAY35NMCUFgURhCQ26FSMi2yj4v2SZqM9gdghLReEXsDuenNiQQ2YrUrXBpqNq",
  "key35": "4Qr8WWnPRizXYffpPDvMceKnLEKEoX2xLRpd7NbVkAxdSxZy7zmrEEF9gnN14ZjEEWJV5PY7fHfLdwCVakTnh61N",
  "key36": "3g7A7WyjKD9GnX14UUyLTjZev5UFqGdThNULMG2bBy6oToTXDRGzbdZXSyu9PZrH43tZbKh3247vJK6FQuuRTjzC",
  "key37": "49QKXtAfJRUHLSMNqf5Vg1Yco9JrttCYZ61JgobxZiDVpzZAYi5WCJrAzET9iQpoUkJWgfRCVb3v2ef48HiS7mca",
  "key38": "34zk6CMbkDHqzVhwAbUpBuZG3gCe16NkckCuvaJEsFCkLjJfXpECL2BbD2uFSxKYdaZictfaU7BZhN4qhK8dApYK",
  "key39": "4E1sqpAwNKPNb95zgtC4nNQMj6sTpQ782jsFusnYFFmPPmx7KnKowEakeS3sJgFA9EegryyRPcgGpD45LVsLWyqP",
  "key40": "4JhfKqy9SCZRcifPfUYdh6if3dk6YuYyStr8uFKp1d1mVXrRjzudnpSEfrXmc9ThHuY9JurEhA7nTkyxQBbZ4XKb",
  "key41": "5zjkj4ebwxUhgVypv3SgneB9QtGrh8nNyg3rwdW3KhkR8pXiepMvEafDH4D17Hkj9EBArUcFUAcDC3WKpsqiKqLh",
  "key42": "3E2CVdKjZ3pYLRvbjDnTpHrEJCKQk4ApMXwGh4prSCLq4J1mmT1AhLxtHnyXfpsXTJBsk8sJpahGbaqXQidMniMq",
  "key43": "LeViyENNRMm28eVvC7GZoqPfAupGVPt7hk5tM3EENRbWC9ZEPsNQCudfw9DWerv1Kn6D6eZBekXV6dk65KgEYFz",
  "key44": "2cG5f2FRwZqDx6Q1TbhkYmTwtwVG1UVUyr8v2xyuCosV1UjWh7BNnRdDb2ip6TLvoCTzxYSYeoWhVAqaZziVn24p",
  "key45": "2JVaNVSZFWD4ATAfNqKYXabeeUKpWpeNC9A32Cxu6F3z1HVZXUh5ZNWjUM4ZSqqMkjdc4B3rG4c9EgJQ1ftSkKG6",
  "key46": "4casB3MALyzoMMxBhLzk3LZVWfXvci1dD33tzrACBbtJDuDM3Htjt1z6kuYrmLQPwc9fVEdbyaPE58WrwN233hLy"
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
