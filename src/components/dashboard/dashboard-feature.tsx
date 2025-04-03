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
    "3AieBKALVmKFtjCfoDLr4eyz9nacL5gVbQLXV9v3JaxD4BobEZAxTVDzNyyHrPGHooYM9TnojRGtFqxiCUVqc2AD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HmQXQpAYVVoVZ3VFr1pTdEiwe4qPKPRMNpQDPTGF5Fm5tRTDQVXnyqwwTXMKUBBvy1hukyQbmXm5G9PnYVsgJeU",
  "key1": "5jwdHQvGt3UL4j5wDXsjW87DxccLUbrLDXUpuK5c2Q29wPrZb788sSM6FEa2JwV6ERFVNmZgdr6pQ19fPzfs4EXv",
  "key2": "39jBfUjZKkoWVnFXxxWE6z3mG8AHX6iHnyU7sSmXQngXCQoUNx2n3jvJbkTWzrZhTyvsqn6cT8wUYiS4douxBCMN",
  "key3": "2XwZDcZLPxXMbjZGRXdxeHkyKX23ZaBsrJyheucNxFbNj5L1w14Jyoe5x5EkHMGSdduG6g63ZPwNt5nwyR1hYmF7",
  "key4": "3egi9qqxziQ5j5sc6N3UwomRWtSZUpxGyoNB2zUAB4APMnnNKuTgrXD9hVgJyN4jL1r7dS5BYNGSAo2ZsbUvBqh3",
  "key5": "4uoMrX8RFCVacTDqGriXcLVV2cur8vYixpNdHfBaL4wKJpTHdCzDoNz3spKXGbFygaYjjD2TSs5FWVmTqsbLQcK2",
  "key6": "2A2ECDFwe24QwnynNR1iBdGTrYPcZpyVGUYVieCVYNg8mRhNuUMgCcLnvvmGmWkiMywdvUA4eDjfiVHHVUr38MvM",
  "key7": "6TPKTYMyNtMM6N8h6wG1jYzVEeAZRWP2NT1GuZbACABpERpd34ZCUJ3Eh3w8TWZWoAJnmDbi51p1VLjPsCGpZSD",
  "key8": "3mCXwhDj3FEGrU2CHyVRdNJRdxTB2fwfLKFnJt5sFu7HJhE5MJoK9SNUJmEE7Vk23JMrBTeW1mwFJ9p72i7wHVMD",
  "key9": "ihgz89JEANpATcfA2Ru5H76iq2qnaQ9vfjtXjFeGhnC4i5dR84uAFxe8CraHdsbtnxC4o8yUt9CBQdJmCqSZvW4",
  "key10": "28MQJQmkcK4Z31ZupHLdEJyDdU2HFm7agVgFBB1LrdNbZ7K6ovEKJFP58HuFJif8Fzd9r6u29qDSEm36shhXz1Fx",
  "key11": "2FTJeHJaSDc8QzSHDP3pdzE9rCZTHcKDmyJJiiTKTMKqYqAJUm5su8CxVMNibaHzTvXZdQ34gbzNMom9wi2bwLGJ",
  "key12": "59ymVV4BQ8mvogAZet8gaJ5q3ud82Z5jymMMYHME5erPp21aUmRcDwsA9aNGB67Jtz7G7iHwtkmK3uSavLTBt1Dr",
  "key13": "ExSUKqmsJSedthmF82TkGb5YwpYdpaHn6ca7qT5K7GC48TJEgLCmp61hNQrPH3epxUoQUMvLgLQsgiLuFJCqX4c",
  "key14": "2KToEgdcWWZuwL4AdftRfiQzZ8fgSPkgxAH18EhGYnvp7MZZgcX5184JQtpwm4BuqMRi4PKJvpfaj5JqSYz8cXcB",
  "key15": "5uuPxrR5Qxh8R5ncsRUxgJkE667pAeesR38kVyKvQVe3aAxstjB4Yg72UPW1LxRkm71jFaz8dHPYyzBx3gxNSZ8C",
  "key16": "3TBEzpsQnRU31k86DqE9Rs3cCoa1fBk8pUyaeTBt78CTYewpQzLKcPW8StHcVjFScX1Qxm4mBCZgWENJ11MLsr5D",
  "key17": "FBe8menAnJAJhMEefAWMfi3na2MHPbHHDHUUdYmKHXro3qUkPFG4QkEoChsadqaeKiFLmRPECMKNDGx2u9DzatN",
  "key18": "5FgrDMhiauNfRvcpVcxK8tE6FyNvJpMWYeumxZUnzDFYZqVhC3VWrCaFpBxAJr61r4ChcEQCVVxJBywCB2Mo48sL",
  "key19": "28pitfacLtzX1jJHDG1fAbYafyXGnQdC3Ah1M4V5Y6u7XpfSg8L8aFKWQD9kbUZt1wwHotZnYYr4NS9rjG8QrCqq",
  "key20": "z7nw5iD6p9RF3Md9cp9qUJdeyu529HqydWJkxFqDXhBZUCxTS3tGWMSzRmtibLAf8AeJBKRcEb26nf21kkDEGRV",
  "key21": "2op7WWjrECZBNZvHZdMDzJ4R8R95Ky6bdRL8CBT5BeUFL72vjpFq942MunET9Z8LuBix9VTZw1tsTMFS9QBdQjP7",
  "key22": "osJEN6nEen5WnZqmpJamFgjsb9Ebj8hrz9nCJ6cvj2g9PZcEWarirniXMckbTJUZuLVLxbyqiSXNcRXpDnoCU2E",
  "key23": "4W6CKrMAfvR89JfTtGFWkLoAAbuUjhCRTigSHqbDiDwPfAk8dstsWV8tTrg3pX7LNZ3rKFc7MjfqMeydoX18cK4y",
  "key24": "cNkCWZ9gHTxP5SJrA9WgAwgPmft5hWGJKXRB2VfxT3UQLeYZUJ7Nt2pQPSsTaqiXFB7zRmuqvwgYwSio2a1D7my",
  "key25": "5juHAW9AjrPBPs5QBoHiep6NznjSzqyKvaVLjGguDSgsLpXb6YHGzk6xFEssW9dkgwMJUecuvMvKRSa4SfVCXDyU",
  "key26": "59gXFyBh3ep4B2BMLFtHqihae1ko66kaFafYKWijiUPXba9dA31vSd88AomuprDPyahYdjcrkTpTZ1KsyELfjW3f",
  "key27": "sWex3kPGrpZDxjaKcYQyHiu4Edfo8J9GnoAXj9pTUNhHEPDr2xNX9vBhD18474uqUwvk6TBRVCp56hmzTf63asd"
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
