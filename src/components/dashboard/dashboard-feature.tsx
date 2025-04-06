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
    "5pGhL9UhGpvzyHZc1ih1reU7gD7wPsyCFAgsbuhq5XR8TYtFEFT6aJuLetircCsXS6xfBsd6rSE8CQFnZVs8R6oZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "usN92FMsMXnnSkWqNVKjfB6A8T5fnB2u5wk6FnjRyZUm8vZdtJGqbDSRU57hQ1UwLFKnhsVdEj6SxHqoR68wa67",
  "key1": "8q15zs1KaUzngxcLx1b9BHPQvCAY5TxnPdaMKGDLw92CWaxneRNnpPzSbN7YjXxTCSTc86o12Gq7ohytcWasUra",
  "key2": "2w8j4jfjvyjzYM67cus5TpWUFjCsN3LvSxr6Q1fxMjDm8A1gj9Aa8qnaCHsP16ibGhbBFkZYkhUkqM8gx8CZzrbL",
  "key3": "2GgTK61VWidm1G4tedyTZoX3ZRzSFcQXudyGFpp2npWpfvrCPCToH4pfPcosc18rsLZzpJ6DRJZFbL5UacJJuMU7",
  "key4": "4szp3PXLPsE3jn7Car4CQ8EbzwJKZxEYocEzJbYCsBPei5sbpoigYG28fS7gL7vFqw2TYVLRPVp78bNgPgkrVXTs",
  "key5": "47z9ZoF6hqNGe7To3wJBbFjPVnuqJtHbaBv2NcYLSRtKvZyim2xaNHgqVyZ1haouuyvmYRCZonpHcpJZvkEd8MJP",
  "key6": "4ahLpQpL6csxN3kx9WM6L9QBaKjSr3Ft7XZGXkFA4heibUN6ufmda1UFfBEjZ7sZUmPwXWTaYgwZr4ZkPppArmgV",
  "key7": "5nkSK1zePu4sqhh3G2zVWN594mXZGLthDtXdzkwTyV5cgbcZS3M1uLjfdBtLHq1CgHrtYQaKUmwHWi8SmiP1dVz5",
  "key8": "y6pkXqjGcSBXaC7YkX4mdKr2ZJjJqZ3mxsNNZawNJCTPWd4SgZ4kFUgfgGLCrogtsMynCC1ykG4Q43nqppVUnyP",
  "key9": "5u3psyfxK2nrp1FEkkKxKe7eQtAujaB9U72wdKPJg9Yan2UD5rpH7kUarxpwjbwJeRYNX6qmE8Q8yPt8aHAEJRzJ",
  "key10": "3uH5kwoYqk1ENpmGvNjd13vzowPJAco8rfkqB8AqB7H63hJnHmUc37yGbpvERq9PGvWre7YYyJGbhE5YwYv2xHVR",
  "key11": "5gbqcm8e7VmrV85sK9aYt3QYHPXx7mY2Jt3rsiTaRJYKnNvtrsy4TnrsDSrqWnAy7CmyYXW3YWugs2Ro1jBMnsnd",
  "key12": "2bxsKEuowo97vZXzwekjpCk6YxviHYhHGHruE8FB7NoV22qbunZDHbFsUmMvmicvSQbyNc7D7euRiHR5SpTYuyC8",
  "key13": "2HCtnRbV7PJfpy2BRq1YAbRsfr8wHXNaLaZgPL3LxQkGtioicdSR5JfJx25vxfkzUqrsicyv8Pqa6w8U8sc4vnfL",
  "key14": "3xJXbQZ1RFnrSWC4sfCzNhwnptLFdUHJSNct3JJseq6ZAPA8Kf8mde5nB1KFjz3mLW9S7zeU6WpdSZtzWwdweEgF",
  "key15": "EduJH938C8qcm4pwxzcF5qws3t6bafCALnN8wjNif4juyEx4onbwUqyqEmMkYrPoZoN4KPmpRqDRipJc2os4pBG",
  "key16": "5RB8XHQpu5b2kBRwQS2GMwnu2hjhYhZ3M9KQNbxXTSspaLQT6m5qacqwb9zrMfDzaRfLsrSjGQxtan3bJTfiGbWH",
  "key17": "3rZWTsrJEFVraWbEFiQXG1Myry6EhBa4uDyqRb76UThwnauq52QeceNKwRtFAegbAg2KpZaoaMkDtoztFswrpnex",
  "key18": "3PTvGgiKNckXD3eGARH6PpQxaW24XuGuLeXmwwMwbTgGezpuMZUGD6cnqD25xdrEf34UhCCjRx74Qt55ynvQCQEg",
  "key19": "25JfLn58p4ys2a2tHPxMrAfaLU4k2gwfKFUk6zMrFmHuAB4aAW63N6DxVsMi52XGuvAJsdcFM64xYNywkayPhjWM",
  "key20": "WZQRMNafPBYeP3VGGyvwMy5T3xTfsSnYd8UEwGT6grFT32nSQUii1p3dDC6TXPs5UtYoh28QuCpCm1Y8R1Uhnrq",
  "key21": "3H4EB9iQbiXN1DNR68tEZiL4GiY4LZ49bJyCQ5CLc9G6ZtJyxt5MRXGDEkMR9VdPgo3iJsRZbyHuJ895VnY4kLFt",
  "key22": "3CFYurKBFP57rtC8mTrqBM1eVyg9QgzzzTV3cdK7PFwSKymnxqHdRw6Hi2KX8weBL9yhBcMHS8mh9gpjSGTF9WC7",
  "key23": "4AQCN75hArWt2DUZ3FB6qXLAUjhUZB2UZ1zNJrXfVuhTVsrqkGw64K9x3wJxEiEoS8ds8NK3XBd6vddwS9SLsq2W",
  "key24": "3fdYMfxcD1VDVgSrbL1hisVPFaLUHWNjGd4ubKKGPKQ5WZEmh7GrLGErS4RRY3hboWAkVAG5teTPpCEyN4LkmNcw",
  "key25": "29fuAjESvT446KwF6PtBCsVa5v9oF5mDf6DaZHmwjRRhFZApCQnFsbvSBVMK4rV3iobaTShyc5pD1J7yNsX54Pih",
  "key26": "5Q13qwV3YsJLfJ7n9DmBzb4mSA9YgLQCrX15b2XvoN7Gq5kUpmQsfU29Y2gBryAuu2X2uawwJVXXHZaQ43sq4t4U",
  "key27": "4byPxvLWiwi9zwowuQEWz4hreLxrGgbf2s8mbKFRb1NTtuHoxrm4X28peZXzegwhGQiv66VeUdFmqkPRabqLgq5i",
  "key28": "4VYKgByNCPqwaTHgSYho2Y9fDFnKxsvUGHp6RdBbbKMuJjZG2of7tyb8DTmtoFGNYH6daugmwCUva5w91Y6RKtaS",
  "key29": "2bZUe3sjRaArw4KP1UqY8SVTJKC6w2UXYnR8zxYPGDqLqXpRAKwfK3RNTBVo2wjnzgLj7QAYLK2G56DLRv5sDc6A",
  "key30": "5XqUyDHJSMLodqjBN4YwiuhSfqqxDB2BX5C3TkV589AZGUA2vUYYFD8vMAH4VUyFqpbdGDUSF2Rrm4rNTQcdbQmx",
  "key31": "3Fa4ZTJE1MZN6W4cY4Zrt7s6m5NZqQo8Hs3q6Y2UcM8RZcVp3uPaHrgpMeJGJGQp8BYPtYd48X2TpiPRUf2yphaj",
  "key32": "xrgWPNKsfXvbmBLH5FGir2B4EZWFLRiFfzTF4zFxHA2tHR4pAC2jH19vzbRVCJmRhPvVd81BscqnnH9xdzC54RZ",
  "key33": "3nXuUBrwpekS4JrWZyJF5wDBk4Z36krhDs2ewak3PbRpCKrf6ZY9SNszcw8CH8HsmeDvoNj5Zb3tikKZSu77z4VV",
  "key34": "vCTPQwHP93S9AfoZj4YL9Z3yTYzKzqjhg2XR3TYYm7n7QhnwQNT6WazeTnNL1kq9VVByLGeQQJqkb4mc6Xvuydk",
  "key35": "3PdgDgxmgXiM69Qm8MWt5PGojV6LxXanVVEiJ2xy7hDy2qQNUXFDfH2ZjM5iGvLVwXr7dGTYZTgJsyrxkpv8o46C",
  "key36": "2pNu3Fy5GvsLqhFAhnyzq26aeuinJ7TEXr183aq9YvRJSdtceBqAN6ahyaEt9URrc2Kdneao2CyKU6NqUMJbzcXP",
  "key37": "4TWQVnapFfZQ6sTJnV6YWy17sPTMB3gmBCPqAfwjZ95WR2WH1nd4G1Efyao4A6AwFwaE2jKrZ6ED7DmT5TFXCDV5",
  "key38": "2A67r5jaCjUMZLPupMKA3AcbnHbM1EwunbUwFoJ9tTd7BNftsyRzPmR9a91xoqPFNtWqmv5p9YhTbJw6wpEK78b4"
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
