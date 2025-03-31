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
    "4YWiKf3wDm6Q7KzmmnW3NuyHfnBDe87ccP5fJEbSD9QNRk5qGLKQuTgursyhomuJ1yV3iPs2vFE6Qf4PzYHBpFL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DwbJVVV5nckARz882FqKXnHUsWnHAtKxRddCyUiuh9bfZ1MHNoQTMsogVazADVVmjRkp3uPeqCPj6owkTMCXzEm",
  "key1": "3ihq9xti3Hxx5kc6A6RZckEhMDiJhnXTe6kyvk8bk7CDbUbpt3m361DUcm7U71DycA3NpZcLyUN3qSUJ8NkVwffd",
  "key2": "3ugRcENjDmXAzU9E9han79YuYkuVPpqEzXTrrgNzs7toddL1fQCCww5CDnjgro7NYJJ95XJq4i48z9W31Ua5hQjz",
  "key3": "4bqVjTwPbUQ5FMWa64HfLA7mFeRgMoZxnmp2DewoU4XGUyJndCeYv5ZTgfYTMbrdyc4BMFvfmDyKEckJ3PdSgPTA",
  "key4": "4SyJLrboiLDGecp2PjAEDFLUDSXfyAw483Lp22XxMT3HRZemRJrzeJBcGkhU8pCCDmEzpAvmLenzoiDKpzKtofWz",
  "key5": "2AoFqgG45nVSUpkdEmMQCXYqk3D2xSSvUrMEKNKwVSJCSaNiLLejeWVVdAfJ5bdViAFi1rGGbipLyEm8ErdcxBAg",
  "key6": "53C8FEh4m1KHUTCeoMriuiXBU31Ph4Crc78ozNc15eKyAWP81MG938monksYTW3BFU7SKEnPAZd7CAfdhB81xMDH",
  "key7": "BGDzukRZKr3rTc4ZEzYtuVefdPHN59zLkUrXG5suChWmghZanbdgwc6X5X7HqaXm5iXvf64C1iUBLVyRw7uvj7G",
  "key8": "3qXgE4JkYAHNSyPWmfPQkPJ3sEFy1GhcWo9TEJSFXPKbGXu1YGuDDe6VsKYQK4z3bYXMtKfwBzc2ZaQAZSPaQi4s",
  "key9": "3ah1qT8HtZV21LTpgF2xpNkDvQ8w69ZsrueFTx6hwy9LLw7CzfvebXoB2qN4bCQjMo2PNnMGia1YbuV9LZ452zhp",
  "key10": "3nhHrQupNykACShesurs8Emy8zDnMaidiYGouoSBd4db3HnkGV8ZYvue4im35mesGrCMtq3G31fvnqtReUp8DC2Z",
  "key11": "22RA1pEwMnNPPsgJwXrhvPato91WPfJNeZV8kJDDdt1uzk9wEHTnTXiHZMY7VjfpP4cdj8gmrCCo27TAsqqTxFQV",
  "key12": "RuYSjjTzMzDoP61amq3KVhbS3QXNtGJcSP2gurhqE4C7nBRi2aP4A19N7pUz6XLW7qsN3auPDsg3pmsHhhnFqAP",
  "key13": "3wHgSBk2d2Qv29s72GxnesjRWAbYChGfxZWhHJGFwzdKoYVUhXqMrBiHt1S8NFDsR3FggiSYgdk2Q8WhUnGiJfqS",
  "key14": "5n4UPaqkMuLHs9fBkwESnEFvVqEHJDupora73N6FU2DsFKAJriZCWbjcV1ibrNeAQXQqXPDzobYkt8jusHUW139n",
  "key15": "4qKcRr5XZ9gjzSGPy8Lu79ojBdXYztFfRe3BcENYCFeiPrK13eXS7bzBo6BfWJR5qTHCj2WVPvgbUx1eFGDx8kZu",
  "key16": "4h4Y6ZuwNzfz336GzX5YrqVRdZMnMcdTKCjStqakqv1A6ywNajdhVKyrYkfPWezPz5RhPqQicPjLh11KSx2TTj4i",
  "key17": "47VKzHMhK5LTnMa8AwMbu73V3Acw7Z9Sp9vrjfhdmXqid6RxoAchUfe6RZcmgGkhbj9Ph6S5X1mhgmVsBgjwfg2s",
  "key18": "2boB18MMnBcRWMVuudqCUR5tVmQ4LNDv34TYjPbCz8ufsPC3mnVSqpYtPKngyxV7mjvsa6qku1vxdthMn7Kp6gZ4",
  "key19": "4CtLyue8dYjo2sY6dCU5PC5LtAKU9qL7AXQG3J5Mqsfi8RUKsszJtKSZNR6TszJC8DknYAVvUqwuBDYfhdGESjA5",
  "key20": "55FDqKUWmh9qHgpRbTeWdd1pdkz9oQf4jwxSMDUkZzVA2vrZgbwJrqfKmpfsKA24kYPgHrA2CeRH9kxsh8dqmgWX",
  "key21": "5urC27mFYiceM63HPWZ5NxLfhKNRPefQSA6BRmhwamt3ptdhVgSwyRJYwxdi7yQe3QA6gSvB4QG9gBYopSC6dD9a",
  "key22": "41MkBLwbCU964vZDRxskyEoimWcwNzeG8XCtg1V3NdgErKa359iDUoEnzPTTWeZFuEpwmU6fT9xyRhH7A6sYwK3P",
  "key23": "3aAFr4bTcXk4iXLXWqmeetr7Xa6AdvxcsFuiVDdHqMUmjKN5g4sgeiwwmbPJAqvnr97J51tqRuct4asUGzx6GEAD",
  "key24": "4gcoEYHQGHrtuW5s4rMiDyqpqF9eaTbaUtK4oCYkHv8mhEqg3ysZFV4aE7WStU4noYycUpbePpmjeb9PAYTdYiD3",
  "key25": "76Gj24nzSvmyJNXiRaxsXJcdjNyCy77bgRW4k7tovW5p1JQn4h3yXC92MKHaS3nixtYgS2nyFdETX3ux3QdqbiY",
  "key26": "4bJ1zMjjrp7b8TXx92dv1dt3doFupUV64hEMzGGA7nDbFuT49mdBusVqncPmaS3J3jf7uQAqMPrSdmHHfDjfrEfG"
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
