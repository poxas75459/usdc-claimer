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
    "JHPMeba6NR7gpeC1FNBUGTCPHR4DYCKwgqHEDdQ5wbytVNBK3gWWEtfMmja7FpjDL92Q9hYmqYjmxpxfnUrSJ8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZPMXgrhzDKW2FHi6Y9RWDLTsMh1njJ6Ufv7KxEXsHMzJ18p3w7ws4bRZ6RhW2ssrHRdUYWB943NEkhpmVeXpsu",
  "key1": "SgY3AmCec1Xf6wfaWMxCsPy7Qngkfjp4FpkeM5a2BTqQapJADp3m6zXYfAyj6q8m6ZfHc89RjRPhyhqUU4kRFNn",
  "key2": "5EBBnuUSLwN2p8sdvxhhq7jHfMprtZxdoz6AFEGQVq4R8AMZr4d73hYTtUH1xPwm57tjAbDKVEVKbW4Mv6DocHLT",
  "key3": "5yCaEfpoJPhNPo3m3MbhbEWUAJfmeJae8tDSNStXgEAYm3VQVyxdnBodwcbmjJ4QrJhTCYcpeHHBc7cmE8LoRtkk",
  "key4": "1K6UZ8tgHnSP6XKmhA7Ak2xKcy2scdhdxwagwS7h7shDpkcfSsPkURoeEQ87madgetUiM5cerEMcK2D7eGVvsr4",
  "key5": "5kUs1BMsvxBndBuFxyyXjAgcGhjy59P14aHH1LnEVbduor7FC8dUVz5uN7W882G2Vwg7BZESSfSJzsPH7AWNTeQ7",
  "key6": "3QHdP9dPLdwHPMMui5xu9qPv9DVHXqbrf3yz5ZJS6W6Kas7iCXPLhnSqmmEKQU5grPB88BZbznWCLVvsrAgVVKck",
  "key7": "53E1vDydD4uPMjk6nkTL6oRU77PWcv3ne1rV5uhtQQEziApf9Pnj6TjpyAG4iPhUdetkRoF5uUmH8PoxFacXojgA",
  "key8": "5iRRFaJke5qiUGQntsM9EY8jjDjjgpriqz2y92sV9egk6ikRdQ9R1Vk1u4fvfFwdULb6ysM8Gb9oj72ydw6BvoDk",
  "key9": "ABQncPQ9frFHMR6gKMDHKa6TFWpTe4UbKGSUhxEuo7VsZTBXVjJ934x9azo1Yvo5weBAFeiUmvm3MexD8nsZefX",
  "key10": "42i4tJefJhDd3hUG2XqnhL3UGn6EgcMU6oJQJDzcMKXDJSPYcqwsqTE9A8tSB5QxqP3SiSkHZuT6V8rq6qbcX7FX",
  "key11": "3nvCoiMivey6u3QHuT7p69ZYCkdch4cSyCDQ4MTTbtsmvENJJ2DjyHWS4PU9QgRquYKEvyokbRChwiYnWsW3wrve",
  "key12": "3vUd3jf173L4xXqKL7KSaGMYJFuxt35JWantnZ7FfpTkUHhHUmdi48DLvcD1oJV3wu2CARPPUWB4ePu7svm1hcay",
  "key13": "4TDv5KjsFafQXUBge58c1agkhbAAZsy7Z95RoD3oKEsnkZCqUUZwwV1WuudN8Ro1hUh2rPqf8t38vqpBFJzvyfAJ",
  "key14": "5tQd8mhxrc6mB7GCQoqh8oQ85tDpRNxGioCtuVQWaqk1QcAsKtuA1yAjpFNEHj5tf3vFugmrAWs8i47FK8tyCrN",
  "key15": "5hzHt98moJS9uDLEB4G7jxJPz1SsmKF2ujD5QvrxAgojAwes7ejBnpjFRjqeF1j8WoQ6rYJEhjuFhzbuVRMci1Xx",
  "key16": "2R3ER7ueUTWefvEiCoyawgM424tvuCHPchYhkZq1d1U8tkg6ycNhanMbytfbMCEpCRxtwm45ADki2GTwB9ymvMC9",
  "key17": "4F6qk5UDnYMQXr44Nx4TQq2FLbaPcvQd5Fkxe5i5k9B4Uu1z19nvQR5e8GvwmdQFWTP5QscXGowB9Mvpcu4242KF",
  "key18": "3yxsLzZtzmwXoqqcapcMRnNFv83rwJqS34GW6woe46ZatavRrwTo56eXNe9DxDjG8q7feSGpfmrGHexMWKy78RcK",
  "key19": "2zzNeNtFL7BT8GwBBectMEtXk6951RChgXwLAps6QS8WsYK3dYUXWeb9YhbMpdF5wXzf57YmT69tNhYXUX46CUFy",
  "key20": "3FvegeT6VXnBD1gVEQmVH8Wb6ZzjBWv46kYnoMWUPet2fS8n9iNjWkytoDx1nwQtA7MPBxTX9d8bY7SDeCCbz5Tc",
  "key21": "JQNqkF5yctVjo4WSvnk6qvCtNJb7hQ4cq9bD8MXi5Cx4UzpSGTZpiEvRKckkhY3GuCtg8L1miz9y8L8M3fCDqq7",
  "key22": "2FnF2TGYY1PCtN5tD7oQap5vsU9K58c8dR4NfCtmM5wBcDS8VYkByuKGDMnnfe3PMBfTL634XDGydQvAdADbQBHm",
  "key23": "3mFxzj7t4eB5xhpu1yCqjUiYyWyYnc11SXXHCCcjQoFfdb8nLbByEencgFnN4PyhFiv7HanAb4R3tC1gLZd4umSk",
  "key24": "2kgVyqcCnoTmufQKCWpDEUS3FAi4QabVmJeufLBwq79wWm87rEpLcVCK1TnJVzJW1fgiEwaQMFvnaS6SJSec9j5H",
  "key25": "5EzKWWeSuRLzt8waUrPHNqFyvYCBkpuTRPeLCXAwanuf98eW3k5U1Ry375Co7gf18TVz6xd3SpHnuKk9p45xLymp",
  "key26": "2CshgbAZqhZAqMejezDpUYoQNT6ewjCxSDoPpdL2gR4Wt6ZyMwdhs5EBSGRbT4KH8ARH8FDVbBu9ztCfcqnMZUyb",
  "key27": "w5fEjXyAJjSEpByMD9h5ewLMmfrat7QnVZ8KJyMDm1Kvy3cenWpqBSBPKgAUZvuiCsAiUPf3KKhRBNr8LGFcq1z",
  "key28": "4kpqYiHRpc1G9k4bjBymgYEVPe3VTjuL74PAVkvixMcafEAupKJ6hPu4EF2t85KJABWUNCYgxHgTVu9KgTndyEp",
  "key29": "3kbKW6nnbu4VsVi26ubRDj875WwhKnSsCW1cFCNCvy8dxG2bfEZeJUzXaFvCro8XjytXi17QHExw7XaoqaqxzjpG",
  "key30": "2WSEwS6Ej4nvXDku9ZwAog1iR84RNS94PnJRi1kQygoM41X7LhfRPxk4HHZAqfiLFgacQc4dzULWmJFYYbWEdye1",
  "key31": "21qm2uk3jKZ8wyhhYSuBzXMJjeh6cvCwnY5WaHGvuZx8MAWr2UEzu1UAqJJnCHiVMeCmP6sqwvDvkycaAzQcfkYa",
  "key32": "5AaRxJJSoYeguZLRH2AwFE7JJDsXoQ7SkXaBiYENnE1GJ3H7SyZKrm9jNhCHh82DvWrJBn9cPkxSL4SibpmEW1wP",
  "key33": "4Zvgekyyjt6KErdNbEeamuqSxSASJP8Htic9jZ8oTyv3KtuHW5oVNi5rnDmY5pGjAZQjrxzcXHt6kqLffi9zcfmt",
  "key34": "4hfuf8QB7vbMFnwEXJevYcypaAronfFmw7hHfsLdFArwSy2AUG5hZ4zCMqye2BNqaDyADCX86k3JXx9iaxmqD2uw"
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
