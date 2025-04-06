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
    "apb2N6AV5pxn8vKB4FioSYaGp5bHtbFR3NGpLKAcnQYdTCCHa7zTPgp8HDxEkmn82X5qhnc5ioug4ZwrBh1brpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UbtD3FHNPdykDL4n48h6qsCtqPK8Eh1FCVDV21MzZKQhr6Ve8SemfEMVQFGiMjizqZfJeNQ7i8sZFTR6wGAWoF4",
  "key1": "22TbV6o6RUcYpuREj6DQuXaXpgXA8soXjtBXh5WbscVjBEwmh86Qn2PxVPk9q5tHnwf6xkut8n5M7NCjZGK5nMDG",
  "key2": "L9KiJt59B3xDDwhN6MXsZUxMrpMWjY2iSusxTD565UmLHdqgrLUm23f853mjZTW9P6tKMmE4qXnPtdEwk9jz819",
  "key3": "kYTTe3dF3CdRwbKs21m412jLK4DcwviotMNrZiGGrgddJLjCYEFJiGixj8WguRsgJ2KgfeAsgrjSfKwAx5qUwMw",
  "key4": "4r7UwhhpDki1jVRPygMcGMXD2GMrdMTZVJpZZxVBBKapy3Xb5RM1mYLG1bE4S4yNnQAVPkQxLPbyBEnFVgms6hXH",
  "key5": "5biHuES7J2FZFzBii4fz8Sxr8dKZ7PivWike6ELwn6fHZcLqhAu9ACxpBxdbvzL3udkRKpgaFSY1ArZWpt8mvZDe",
  "key6": "2UXT2vGaK2ybKsYsLox1PzptDYQkMw4QWLWAuG6Vu1v3frHqMjN2JPwaNDEkRqskZbvLVm8LZ3dQTT1xWafYMAhK",
  "key7": "4AMerZ2fjmL5iJtTcAfzgrftoUhJJEowC5L5N7d9MxDfFYmUDCq1911gEixvVMbwyvVU6WBfsmakBzhy4A2HvgHo",
  "key8": "4mgJXynqXYGiLhJ7XnT995ynhvMJSUKkfAnQvrjsQD2ENnS3BRxVVESYy1zpwYwZs5LUeTzVLAp5xaXzSk8hP2Ku",
  "key9": "5ePpterSqCgQP5fqQme7YN1D8RomtCEF6dC4ZmRc9i2ELPqscp6LJfrV5TSatYa46Gg2itGVhyFb9aW9sTDzDsYR",
  "key10": "3T8gciLMLo9mNfy78aZXsCT9uh5L8d6M2YaTXC1bbjSRtPVhULwzStntswubUnAH6tPJook6ro6YVKjsfKq36Mkk",
  "key11": "4Y6V5LZfucC9WJnsAhjcMxWuUyzf7eYNx5sc1HEJNx5WRFs2Qsvs5zoKBmU9zLSnhkNprGbzyoBShraEAe7BuK3H",
  "key12": "3RFYpjdK973Ks6txqD77zviqzCdnDBNxDydhLGnaFoQZtCaqPGaAfLaHVUrdrbasEppmZmvPjssXhTqJxkwhmyd9",
  "key13": "5wi8i7T8HmdMDAiKXsoBu6MuD8Ps13YuEEeggRRWgy7QZnyDkWEvcWLTXgk6mpBSwnrZXSiLDUPACLzwrUbjkLDg",
  "key14": "4FcaJK3c3hkSVz2FrrVCzgokX9ozdgwpgsQYyfnX4sLrwpGauJrHceBQK5NR9ta7eWLK4X4ikvAMrjiZcp9mTEyy",
  "key15": "4ftp3A91ng84JDb325h76gC1ng71M41fqet7SnF1SAtovUHvNuvukVK1JJFga3YbHReN3BJGerPNdDyATjgna8G1",
  "key16": "2tZCeiCQAg34Y6KwDkSb3RPqDvUUMLQ6rtFsKzmURW2pA21au8oU261afLWboJSNjuhrET7tU63dsfzg1xnG9rdR",
  "key17": "eR6p4zcMcBimMjv7Sgp9trbPpj9MAus2TXjfqu8ho4yKZ2ip4wHpDT6QdV489i9rGeXWYXvQHmaMNy9Wjbi38PE",
  "key18": "37f6cidreAcVoJoTNcECyMNmZ8c3dz2i9pdegCFB7xBEztUtgeYFcX67BzMrS3TQwikBDiwz4nxiAWeuu8kq3xXj",
  "key19": "2bvcvqWkDMur1aa3dgK4ZLtX7dsUATVLX1yQpR3eAjFqy5g1uHQjX2vTDC8zW4ND8Te4mPsUCxPcfQ7Pr6B316R1",
  "key20": "4qmzxvXq2GcAXY7WvyjQsfoQY4WaCKiJFL37k9K47WNqKk1Y5ooAw7YzWpxH122zjsKVVBoR9XzV37zAUJW5v2m8",
  "key21": "4Az1SXcHGyTgRRB4po3KNLgp1fcJp3zsuZGYR45k6FEcT26f5MeeJMtveGAFeKTMheftosyofoJ3EVmNWRaFAB1N",
  "key22": "27t3kvYy4f9WfwPeENJBvQvzmuwdPw4vmcgxLHRKxiat9XQmoLMePfKHrmD7qLVgLWLoRLDNdAhj9DEznYaz8CSx",
  "key23": "29sNEWTnFYQcE3QmKyqKFuDdADmvR3XesDBBBSxyQz593R36HWxQ7KCY3ttt4iuBwmu69cD4XY3RGWMsJ6XP6mPg",
  "key24": "3tazpsAxq6LTuMY8aLEYs443fispxgsMSCCNjzwUq5PV3mTCYGyQgAYBNETNW56xrwb69sQVhaLm4sxxY3gZo3n1",
  "key25": "4dW2s7f8xhFwLUmJ59P6JAP6wcRLbcAB5z4MoTofFxAnSVDA3GWyr1TritqrGzG9tdhAbopXhq98JqCpxfuMiPUf",
  "key26": "2ZxjdkgJq5iRPe1qxJwVBme7XAoJrEqp7dX68GqBkeDahRvHje38fjpGYmMwJZDk857kTPMTfp3Tk7f8xHdeqEJc",
  "key27": "5nQqqg8kJgGNJgdJHerREE8YBR8dJLJEXEDqXsGnGNjVmuvBwXjtk7fNHBb8xYvcetQDEtQEHdsJkkagL8RJ4fzE"
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
