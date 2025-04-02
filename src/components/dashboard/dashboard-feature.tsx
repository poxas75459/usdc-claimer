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
    "516WUbXbbU5L5eNa2SfPZaW3FGcTSHoQwX3FCy4KU43BFfKyAjCbyEPUJQjrPbF5hdiEHYWV4tBiZxdiFj1RiF7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KGPoRzdJBKF9UQeZsp5c2QfRCq7gQZnDT1z9qt1ey1CYBDAMSUd6k1sV63E1LqbuXaaL8hrvd47z9bazRrzg8b6",
  "key1": "9D24SntjMcNktZ57UDSxHs6zLz1gLowFnrJL5AoK3zj8EMn2hkYxcm5N6Mw6XXQphaice8jBFEkhg9P4KbzMJnf",
  "key2": "3jw1cNBpLc1FoJyFpWaSxAgt8mdnd531M8TffsLwoQ4dUzmGdCtG7L5QKtnuerF8suKBdX8R8yVUjPfxJjx5sc5N",
  "key3": "4cmZuCL877CxATHmWYMYpuoGcMWCQ4dN9X1HNSBc2hU8pntw2oxbztmdLcaSYy2kPDw1MChBxhrtr2Kbvz2yhKHh",
  "key4": "24bRxsFUD4BvHp77ZFKfEgqNsJpfseW8gERz8NsRcxPvmE3U4KmGjYvD42ZYjyPNKAWLAQY89mtqQXEY9p36pUXk",
  "key5": "4nnQjzioQrs3wGvFrXSi1FyqaotzM7NgxM2oxnVSxkrfjZyYGPidcPXBMrE1x8VrLbTrAfdmKQRDvqDJBP5EJLzw",
  "key6": "3NEkoo72JTmd3hcp36xFX5TafANt4X3WUtYp98M6oWGjhsE3rwWSK4FhbnFtHahWpB4VFwJd31CYuE3snWVr5Azv",
  "key7": "37VscuhJxwtHj5qvyY6skvqAAScCFqDbiitzdocnNqyvWwGFhRbnZ7gPRkHwkcWrvjwUX8d5gFcWbjwckBYH4ym3",
  "key8": "7ZmYMr5dMxMfTErdE7pJvd1M2hhhajLKdMUG3c84ewBjCCQtKH4HdbDhZLNuXELjSq8yn7zCRzAbzubmuJo4zkR",
  "key9": "963ysvZXeautMpwqBZksg1w9oXVRThUjjbSYVa4zMMMD2SBfs6KqKeoVcDbmG6JGw4QnTzsRu1eimY3qCjY2n7Z",
  "key10": "GQPu5J5hmzag6L5scdoEPP6EP4PP1YCSAiUNAWSYJxoD5Y825422iE4hwb81Y7EjjHmjcFYyN3CrXDYn1xKsLn6",
  "key11": "23NsqudzeXRpbiPuoeU872WPyXaEhphwz1iRZA5Z2q8hGg2QNVrCLQ5C5758ok6x72WSDwsS8dPMMCMok27xxDDq",
  "key12": "5qp3nRHmkJU5uSu7ws8aQQApPmFYbcWAkTG9AuZbb3aXyVdw2BfqtwhRhTYmxZ5rBLMgn8MJujtRXdP8y3CkxKkP",
  "key13": "2EZQc2txomg7GjsJc8XsNryYF3Bz63i5hpLXsrAdHYBc6iqAdPkcECSJwx5T6qzarZgtJdpPKGhRF5HckgsPf3Xf",
  "key14": "4o5BRVp5RAnzBkKqV15MaqVoZCExPmRBCgPejqBhqxB4YLpPf6DepJaK8SUZRA1SSNuqUuF8kzpwQLamYdk3sxGF",
  "key15": "3rEykxJKgA539dhSjqY6HPanSzBJZjwuKQLaWbFeTY5Nn6zzKC9S7vEGYobAvmzaDLzaKWnHxi3VCQVapXuv63M9",
  "key16": "iKWmQim17AT3rWUVuQzHPjdGDyYBayLs7UE1WSrKrVtXnxQ3iMT2rWD8d2i1PxMANyzfsfEfmLEpdL8R7DCVSsB",
  "key17": "NPSBUkbFAxoG48nRPAKES82riG9nmkQ24NbcfaEifcXUkFroTmy3qBLQWiTW9fj38YzuQDF9m4z4YgVs9kDq9j2",
  "key18": "5V2Rt9xvJSzg3HQVHkmkMZwej8Qgqy8QKnvHwycREJEEVR5byYxsRNV8UtZVYxGpHe6UntB1bLAcdjzz3gox9kBe",
  "key19": "4HT9BYV8SvjsDdo3eZQu7t6MyrmaLrhMqG8g36BW7AjF8gmwdcLngoWwn5TwWmHnua4Xxe5FV4N2ZPkwgYmznv36",
  "key20": "2buhbpTnacrrnjFcm9BnJ3S1B3kaoGV11pAQmU4PKBqZzqQ8nD4HWt4gwTthpFVJ1nLRJZucg8LLPDNLx1n2CinB",
  "key21": "48nC2eEE3HEt3g63ztcACKXtej8Khsvv5yy3TBZcFn3h87g66cc2efcM3mBY9XY3D9fFbW2CE348qiEvEX3JgHXx",
  "key22": "3884DZNqZNSk84DXNo8mhbyMtVurxjNLDHNwYVDRhSdX6SNhe1u9RWJoF4q4M6nSoZPE11BeCULKLQ5TmVQWutZu",
  "key23": "2SuX2zEyGafoCFuWtezGdTu5oqGfxhjDHdH3GQop3KLyVi5i6xBSRSnGUnNNKpp3bgymhna9HBWt7R5DzqtvEZSU",
  "key24": "5B88k9G2asGFZCuaGZVSxjNiytE19WvHbUgqfUHcDD8ARAe8E7pgycNZsQZr66tcgrBUbazNMLMkCTeXPo5zB27p",
  "key25": "5reEgY1esmEbLKS1FzJRmGKgXABaB5qvJSLgBJZXDdnPjaWueUXQKpf8pVPSUnhRM8rb9FbjHRNqsww8XJeTW3eF",
  "key26": "4vwCfdVcV36zGk8snXn5bAZEwJoPh883UJjvqLwYc1mowuhKikVU2ZLrWibouBy8m8HKHcTJLTLTeas3Eo6Dfzdv"
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
