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
    "5hUFHr8MQyj7dPmJaqgLxmnH1EHdtEQwB2zXz4m61FHyqkvV6orhRLvoTjPjyVTLqYbebq3XW2pzzH1TpobtQovM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BEKHwc1ysnHJuPg7BKfY7cXshpQHGnSnuZfVtZfqDv5721Fzr7oVvYxA5ynuFVyZ4xPDTNXQyKD2LUaSy7PQVX4",
  "key1": "5F5t4vk69m46brnoGinbGPLjBGUcanEbkgWJpSBcCaRhxqcPzZELwTNBUBBe83ZMRk7nnVZqsw6xDdSGs2JMfQRs",
  "key2": "e7tqiBnLrjr5gv3aGsJ2HgGWUsESozgUkePUmPcKBVAcXPoBX1Pam3WZwqtd6NQaZvbWxHyzbkd8BLDt7pBjxiC",
  "key3": "2uRx1dzb9mTfgErJ1sFbHDn96da9XGdUG7uEw476QrbbujvHBHaTzRnHz392sdMSTVYW5bCdQFsfV747QfKAKWCV",
  "key4": "41wbehkKW7yKfLVDqAP5whynkwCUfLrA6Rw6i3sGyQ7EbDpZJi3W5bTFBepxVbfKv9Hoxf3gjN2rGqr4ZCtf4Mmo",
  "key5": "49ga5vCnx7tpaMKCa59QiPFmncQXCvbpafYKNEbWeEBNCtzbb7oMJsvk76Ze5iqNoUj68GubyvhC6mJgSB5GFeac",
  "key6": "3fVnbzAtHLfXRfRWefDgdoJZvCpASfQRbgfsgP1K2uDKNBfVdzYEQpGeeTCzuPsfzvaUwndZUL4fV8oYQ5CwYxYu",
  "key7": "4xY4LYijAStu2RdqiF7FsH7RkX9cbmGGUTxWi6b3JhBSgeu5r3WsPwb6oxCG2EvEUjnLuR3XuUxEfTyh8Q5MTENK",
  "key8": "2zSpT7RLjoK35mCniyLAwZv65UdfoQijWJpkYyBFjvoV9DBAML4TSAv33amk8ZkneSLRbqrKXF6yCecgvvP2peLu",
  "key9": "2jchZhS5zC49NUDZSs5Q26vxRBjq7Fw9pFYssHs1Xpi1tZb5UkxGFg22thwMBfyNA877W8PLh6LrbCggvamLQ5ru",
  "key10": "43VU4dGmhZnmkx3FrH3H8qiY6MHweS4d8okZEanLHywuk9GHKH9Viqw9HSa61z6CaCjQD7KhASvTCc61irPEjv3S",
  "key11": "5UFB3bb4iw6VCFBfoYhPAzNnzywQTKK9JuNVQybCBEq8A6vGgJbbhwAK3msb4jFunxGfX8s4eRKa9VRvncFHr64d",
  "key12": "G8yBUv4ZuJ93E43V4RVC1txvrzBSjZTCUaPrnGnczrjfUGq8vcwkALeFumGfWReaZ1RqswepcJCX7qoRHDGp81q",
  "key13": "4c3VoxMPednqtFkgchcxRGi4evL8nV3Y21AaNA1ZGGFAruVQfrT6CAS6UHrK194owAF8NHL6kH9kdwKBDj5W6Fui",
  "key14": "4WN46Ct47PynYEw7JSmTMR8CSdGrRK4SdgpxVbkTwToRWbUzbZ7EBoLba8Xo9bLZg8XfcE1LXC69wM7EsjxtsvSV",
  "key15": "3pZsSDgS2C7DTmhN14mp6uWLBujgcAw8Hc5tviKp6JUj3YEJVoGmm7gD8H4R8QfkwtcSK9E2vA26FbkvKi1fL7st",
  "key16": "YJa9btP1PsLk1vZuM9wQ6B5G8Aivbh74F92s7Z68PyfkP3jxqLLToRj2aygzFiNkbgQnhbDQyWUDC84hrWRB5ha",
  "key17": "5y6LB5NZ7JgDj7rJbMWWbazRcyLejFJy7dQaDYZaxDwQvV5Y11C54nLEArG6UqKnMNwnVUJJpqBGfY8oPwYnVKve",
  "key18": "2bVVdneYrZzvfeNmTsyZHaivmh2qBstGAraMU12NNbQza5VAZrqz64TgrCwXEmcmPgg5vVYY6A9Ha576Rc3MxQ9X",
  "key19": "3btuYtvHBdARSEju3bzmqGimK3Kk7SJRZrbsxic57VDoFb1Pj6a4Ys1FB24LwgiHpRETnCjGNdi6mK9sX1eqHQJx",
  "key20": "5bY6812KeP2QXgE1iyntZRU4mkjfVebfw7v45wac9pr5huMkqiZucum5YPuBcs48bG4j4bG5zrf8gdYZjNdvB41i",
  "key21": "5ye5YzRVXyH947dBEQaemmtqeymex3jjnmfwF7kFfgT8AF7z9iHaAFL8rWavpuXcfHkuT2AtbymjeMUgXffedwaY",
  "key22": "2bDcn8iyzV7Prt3feE8KP31N47ttXZiorLCVufcj11oPPg78SNLJRcyFp3PqDmV8YPZVXR1dCrnC7erkHuZnD1iN",
  "key23": "52whhcYidoAo9DCqUW4ANPkaYMdpx7utWjqbfbKYWidnDd3Xy6CcvPxDdVSo5rgKFvLheVZi4ghRagrW717W5kWY",
  "key24": "3USWjEJMWAa2T5K9GrV2UmajNAqFtKmNkTdYzirqLgiyRBJmZ2pswzhBTTsehLy8qxop11yu2XVPbpPKQFSxvJkH",
  "key25": "3paMscSvXZHKsZWcAJXFoLCAp2n7QQ2aB8NW8GVpkqWWfTn4UptyNWYwhdizjVk1WoukadjngoWquxgpy1sokBoM",
  "key26": "3z4B21aSv96HPGQXLEwD2tS1ZLbgqGHy1DTuFNtDKX8C9mCnzqPKmYgnwnCiNtSzfEGbfZWEajYcaMH9eu1zzxnX",
  "key27": "5NpqEjwQRPapx8Wk73qu4rf2LZXSYwYSMH1qLErr8MDyLUXyZb21dzXWPBxrZQepzpL1LBhiRRZcuT3k1ELB8Qk9",
  "key28": "AUGB27PP7SA2S8PUdTsCyrPsF51uo78sZeAAVRisAo12J1CzQEYp8gDBoBDEKr4JVWNszqh7tcew5arLE9hj7GU",
  "key29": "5vjXb1216seSBApQBSH6EqS11RScEozbMcyZSyEc1HQPnrvwtUy9f9DHvMVZVnLGc3MwdaKEfXWznjmh8fGpg3ih",
  "key30": "48EgBe7PPBynxf6gQd7NTqar9L8A761dyMnbWkk87rTjEinDzPvoDrNrPfzHXNqEjvfnbJUWMamkw7dPGwjkxd79",
  "key31": "NJQ8akHHNZmRGq2pFdeRvtyKGSNakqpzYL4VdDSdWNmggKxgMCTCuoVstUsmGz3Qhv4Vs1ELxrHcZUCsQPWnh7u",
  "key32": "5YKAtwgyTXzXPaUJA6VnjeQ83GBP1sFZcyzssq4wdMcSDbKu1tWHQduzU9QrnM3KMVx7g4VwuoGEZPidZxvaSEY1",
  "key33": "4DD96wSCQGUigkwVsz5RysfAvpRnMKKrH5hn35XmUenupVEHggDSnme7inaGnCgcB92TroJPyfvjcRFHFwGFnMT7",
  "key34": "46sXuthZ9MXAYsu9bRW66ygZf6SGvmKrRUcVWeoeounYYcL9zFXKoRPMc7FgpqAK1c4tQqfLTTMPY2qD2rJXovDb"
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
