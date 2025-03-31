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
    "2ToGLkDWSqYqbPi4UQLGbbAL2vqnaSAsrhCyJbpt9ShzAaAoPf4yRoDN9LNfopWxayY1DfYupFV2Hh8crjvwvaoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ovNXFHLPKGCRsZZFPbibGkXG2ZZPbXe56ZyoMpa2z7ednngWvNE1ajDEykhN7SN6vsWeZK383nRjdBZJK2rFPsw",
  "key1": "3po8fijPaRUwwctSpZENgJTVnb1pouVx3Yv5Zp2Y6DQUZtwkbro6JFFSaFh6e9hdK5W2rS5aRbQSjb45e7rpozwz",
  "key2": "NkwoGvGffMZvk7kU8PEvJh9q32x6e27NTzpKqRSddETRUXrrvtaNxh6sS9hGuPpFDVYzndqhAKaiNBj4JanMJ15",
  "key3": "2sk3NL8f1HvA8DhiWCXVS2jfSxkF3dUrjB66v76pBeBEwQMeTznna3x294pxFANjo2N3KZPeB5dd9uXM4AoUqfaJ",
  "key4": "4oRNLsZBcPtcV8cT12MJ9FvRF7xWahqeWihi5W8L3rV4NPs2PiJh524DsiGdUDkZUxjTFURhUbqyiPpcrmxuq3zp",
  "key5": "Qiw7RG9C8Fu7EGEwG4Dvvqd3SeBu9n7nxZvgNa1GiutTqHaJPZjMHUGFUGPtANqHcFVZ3BqPogJHkDKY69VRnE8",
  "key6": "2EJjdLBoUdsXwMRwieYBLW4XD8rijAYMjv1HCQDXgbmsK9UzmPERFhwrs7L22Quo3uuPxp1W5md422aZLohCv7m",
  "key7": "4z8zHpwVycToU6NjPMCbNsBEE7X6fuLdgi9GE4fNFkf48gUJht6aZ2HfVgK8YzVrzVvbFMPYfR8eh14vA3rVQhve",
  "key8": "4pCP4Rt6DFCiFov1vz1ZGdzDKrSZTxpYRgbfPNmaXQYxKUKWoj7rLyuK4bshZ8gYuqc3MoDxKg3NS71bGDjygqE5",
  "key9": "4EAHBeUz5FvV1FunkyAc8JSvekAZfLMtt4iZhfxs6tgL63qddYkddZJADaVaXNNvd53MeBLpDKLimt2HaJpr6i1o",
  "key10": "56t8rDKjcpfqRW9GipnqXwxmXacv5NVQNzDaT11YNuPcRiGPbupqVpjd9dtWAgD3aizCe6ezx2AQUir7yBg9QsEP",
  "key11": "2rnxVqiaSZ425YJs4SQcgoKxgLUA8vdqaUo1vUHD5ECjqcZHsrqAAQaYvyw1owmG6iZAQ2m9hMepNnpbtDyEkpDE",
  "key12": "2LGa7D51Sp832rpA9EA1x8tNQ6ZMVWshz4xuwDVp6XJwbiKD8VDiTNZ9fJHYxnjg2M6tsAD87f6Dsjg8WepuZBp5",
  "key13": "3ZWEde6DrCs3XHQHZ33zk5ieHepcx9kdmftKoP7LVKbC26GhyggUqHX74bESr84Vz6r4EtnwnPRYM56Xkz5wrxPr",
  "key14": "65KbhaaztDRZD8jij9z5akfFMhkux2fJccCk1mWJVACLrrMb3yGCgAMEEV71TVi8hn8tfQmL3JEadUKJFN7vso9v",
  "key15": "smCZ1q8c1J3dw3JDc1VhoaywBynsDubFr4HxhJh1WCWrzh2RRUcUzdAdmLoRDFYfBH5ZegQpkVp3BdNcXHz6QkR",
  "key16": "3uQs5ggiGPfoPKYfBmrtFfGBV4aykF6Z3c2FCbvuXkazbWYY9vckxzjWmbHsEbZivxbujrdYUqTVoW1CzWL3yHJR",
  "key17": "3oAcdFsvg5PkXLAFyjtzJTjDhmNvyq7d2TPKTmHgerdzsHWxNhw7anJGnTLCAiJje4oTAqMByfB7tDzWBDwaTLzS",
  "key18": "5BWKnxf1hE42VAezmbpvrNHVtdXBeMRJGGvB9vcRvGQTGNB8HGYSAonqSR1GZGubpYdRbyNsRNcXXCF11jhHC7MJ",
  "key19": "3URfZECuj5ryPjobjnM1VDZ1aWAW9rt7UoVLVoRRWpf76xxoBmg4WLZGFumAEUWcRJ3KH7UUfD1kq6CAmTZmcFnd",
  "key20": "2tA25DBMVu77hmnRskdy4pdwSkQncnjL6o8JX5KoiZLNLs6hG1PczJ4KHC5yVsMVdNe6egBLu9RfFwGFjTecsowx",
  "key21": "2qcVxnEFdse2WejeRoEsnVfxS9XiAne39KyxKic4DTdLw3nAJEkccwLGz1dgELgcs3FCLF8haf2YnCypYPJvwKFC",
  "key22": "4GaX1ry31Fu5fmykWJt6ywrTUrEUd4Q12QafVng4HPdc5aSy7ra4ZnUxvwSkEpVNvUbZ6WcohEp1hiCd6jKGnvHt",
  "key23": "5h2nLH3nKyxAiveDtuFjJgwLVop5nkokDgwJedeqieNa4dzNafwUzHV5rEXbDBHjEqeUp2Bu9gmT61rNGZmw9wiU",
  "key24": "4nUvPtkDwANF5a1Y1bkNTUHPA15wdYSvGCWgLpWSkw7L3NX6qYCFDG2reVvcHWQcJfLxLhs3NG5JW1y5CKyyKMoc",
  "key25": "4kc9xjeJCDwppCmGbXApR8F1nupLmsQGQP2j85yE3QBZvM5dETB9z9AiyYxsNMXcPqkddQVHcV35Yp9EU7nrWVgd",
  "key26": "5dp2HP2XnCNbfeeeAD6cFYBLvWVDbAMdoVLBxDtU7TPbB4b6eT3hxxjWPYq3rB35t7SXtXTazhqdzEmNwJbEy9nS",
  "key27": "y5Co3fsQMEpJjSiYveXZpjXK5rQTHXCRk7XzrwpSyjPG1toskZGvXbfc8vE45usTVa5g6Z5HVZv1wTmoEcKoRUq",
  "key28": "5qzJQVyZjJp9JDiNgUynoKua7XPTaCdB6pvsETohBo19jUniuzyJLmvHnGVa4LSsRkadnRxjRTHL6bVARvJGMbcj",
  "key29": "2ewnT7Y2jTRDzSFS6omyVSxWwYGPzDUSmswyKSMNfTDL7hBdHCcFckCz8vTEvG7TZLLUSxbgpCLf5Jg4ndenrFry",
  "key30": "3yDXhuGUZcdj1E2buKew8MxHHsEHPcL5kEA2JnsuFxgdmwNhEz6HmTSwJQk7AaqvySoZoUVDTQmsK67GCQbT8YqJ",
  "key31": "2eBXJ5VxATx3YfCej2sVN4TLpHBmu4XDdX5fU3XpdziRvaQ927ARnTuinEVHfFVAz9ziP8somejNp6UWiw4aQa9b",
  "key32": "eAnDKzoqu1wqx1qwFvZ5PZnk8hUJ1Qp68jGLi6VghFfVFCGdKwFp72DrnrwCbY8EDRWvYjqi58NCXUUfFWhAReg",
  "key33": "9pxVXNU46xEBPh1zjdiC5FBH2vKN7zepGANVbdQeLBhXTwQsd9UED6ggPB2n33JaYew2SwQxSGSGQhbFkUmfLJg",
  "key34": "62cYGptc1gPeZ3WHKHkVXhRqQrAT4CpiYXmWwWzh95RM1N5t7kPwpydc2gMEKs28xjNjmrnhqRUZCzQFiusrxLc3",
  "key35": "z7L6sMohDHAoTvYPiui5tPVNwyU4xh94dSCc5KJyz1eGUW8L4gzbqDMoaJPgWcqDkgbKKHCqwnGxbpKvsmjNzSQ",
  "key36": "57tc467Brm989jEovCnBCWfrx5h24PtUoiagxCE4foa3BR4t5NHvSQmdGKmBEPVVThtDZLtVqKQ1zquACyM15TNM",
  "key37": "56dyFSxuNV5JKfJETjNFbFpkMo8G7enbfPmQfRAZPL4Xa6A31j7zqMeeAdabRSEUrGPaEnPnd2ctceRF55nTodzY",
  "key38": "5Cp13otFnWN86kWTu43NU6ZZ1T6zvUAerXJYrFSPp9Aoo4gZojuRJtxDuwMyaT2kacqVqfEjXUFdadNSMs1MFo4J",
  "key39": "AMqWdgz5qmcXQ7bBU1SVTtMtHGrgLKczRciHL6syMosN3WbomyJLkZ3wRDPQ2tYGhbHBaqXBLytj7JpKvC3dzhM",
  "key40": "5vJxEw5PUPASRQtmjeiXFs4K6g7Dq23kYrVkU4nRA3tsA97RNdf9zjETRM6HwFpcKXvuejocUGfkeyjmyxHFDb7L",
  "key41": "Z7xo3i7pLyHY1pwebFmy8GwK4rjdxwF3M6ha1ctkTEMXidaa4BtdcN7hKwiqFwu4z9AzffJrFE8QHg8nFFZfzDE",
  "key42": "4mrgGsRWvhWvCZDNWtSi85fXcWGB4KWXviLyS1uFLxnrjDkL4XfrmtHKzEr7YsgX7U377n9v9iuRfxp8qs6xiaV6",
  "key43": "3fCQxvJQHB5LuRexGQUJCJk9inwgS6Sf9GfCiMPVuMfvmX11aHS4EYsp1eVjE7JGxYevWKc9Vd6cvgF8vTxeAaZ4",
  "key44": "4ePGu2a41qjqUBgdWEqFzSi6UPR14thfBs4xaSPd63BUbQvbEmmbQcKhJGsDAuREhGjrLq9dzL9cX4Z8x3ghf6Vt",
  "key45": "4fND6N2NVj21vip9NDrWwrRsweGxGtCzEp2eV1SSn7LqSfgycVT9YJzUGLuvxgC51qMBXq6JSFckaJGEhmgXQfN9"
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
