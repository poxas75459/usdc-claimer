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
    "4xK6QpEgtKvrdnpR3y1T4f6RtbFWbM7xQGgVekRtB7RhFREzgFqDUqouuhXRrZsrQWbfdwHnpUsJitQQFF6HxomF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JEQbuuqLqh4sDxXvbniTPiddzyBrbe53HCwdEeX2fsy3aWRAooUvX8GaQHKfhVcnecAPz17snuYRe93e9qAWZWh",
  "key1": "5jB9HGjoU7sp32gpq47BXb6dyKFAJg4vdWEbj8hefiWgzyr61z27ahEKjh1F1cEQReS1nHRNqdBp9vt7kbpH2NgP",
  "key2": "5sqp3DvQYAGDA3946jW8ZrhyAcpuHwydUSRTMJgNzBMjXuZqQdguktxr3vv831QERhHYC6iVkTKRFuwCQyafmEaE",
  "key3": "2LaiNpU9QPS8ptxabNv5Ug85KcqrC8AkRvS5rpacobA6SHNwPxPH2AYwiSEPWD2raTNXqZdBxkMyZZk4D2ZsEtZq",
  "key4": "5gH14NRVbU5VfDAFXBm7hCZRMdt6Jtew6KSUK5pDfy4MEhjhvH7cFuGr25cXLrqdenpZMrLEjU36qRMTY6nWLFTT",
  "key5": "nLbgmk3A3mLBc9xNgmevfdj6rNJAzvUQit3iyT2WZLFLNMrtDsGzH8wp9zFpV8H86SiUAUNfgv35dzvRKWWurK7",
  "key6": "nKvwB8vzP4dqYCy7KPjQAmLP3KyjYrthVCLb38ArpQGBf49KQzyS8Be7xRpnsW3EHMKAhvrbmrnmtDPmRX278mB",
  "key7": "2kb9DPUGCfZmVZwWgwPaKLdm8yc8NzEEwiu2CNhNoMtmRga1NpwZkpajkCYA6KRt4Mi6btzKXdtLE6okB6x9fNiX",
  "key8": "2x6ZeAZM9UQXM1fcR2GqQVwTp7UYEcGXNeTK79hzu9cDaorwjJeYxUVkoGVbSq8QhTXCnwMeFcfiiEsmRkYxK9sB",
  "key9": "nirTuHLv42jXCKZaaN9sJDBK8vjuAAF6fFrQ72uJ1WtTJQc8Zr6uGDUnr5n98vkzuQQNfJGnsTysurRYtuMBBym",
  "key10": "8czdznqYteH8eEtsczmAMLLL12awfJMqDgY3wTuPgKdv4acVGqd6zRM1CZM8dQmBWbLdizxfCEoh4wPMm1a2UNE",
  "key11": "4Bs2HDPygn72Fc73dP7G4i5nKEXKHGviHEtKsmm6JMatz3C995zWWasA6Zf9wWhcFntPAahetqHocxFrjx6oGNW7",
  "key12": "3KAAqaXPEzX1izNXsr7ESMWtbjcTBPDqXFdkQmrYMeVC26gopQ8EoxzVm75MheNKYXzNfwFjEUe2u9GSL4gdhDzK",
  "key13": "4co1Q799nqvqdK8bifujM6VVC3MsBZrNefaJPwmgZe8JGpmEZ2Aw1MHAkhwSyuVVd9MXXPFwVmxsFi17rzU5hJTJ",
  "key14": "63UXCXw2pQ7dhXjG7YwZVyXK2bC4EHo4vF8XFaUocZx6c1VQPHDKfsH5kdvhweody8CKmEzJWSFy18kvX61nDJFe",
  "key15": "b21FgekxpMvqAPLc24ghQqqMWezZ99nwUPdXSQqXUDAQmTrAAMDHMmfkxkt3nS2wJ8JHwnvUJGTb5xY5RUdjA8T",
  "key16": "3uWfKKbbTavSKob9trWRxzCNk6khwutMy4BB5fyNUPJ6b3rqgCj7pxxofmeYiRA6uLG1YnivyzYgiBbYab75f778",
  "key17": "hQWeMBSMZEJLMZVjzNa7yxsFN98RcJEqDADBeqwrnL8L1A3Erta1AeQoVqMon2SpPqn1isADCkkEYKpk9oSxStS",
  "key18": "2iRdoeeSEEhd4QiTdB7Z6xCGYeVCRG8AjttG6FmNahqn8vYfz3ha13ByXM3SjLfp67mxjdvSi62hc8RY2pzU5hGg",
  "key19": "Xcfp5bMhP66FA8D3GdL2WLZGMgR5z6ETvyTSqwQsaNZVceNSDQHh6CN199Xf1cu9oo4V2apht7ymKbXRQsUQVz2",
  "key20": "5tcm4Fc341qU7iPT4WDubZc5hqzdTZGcxowEqYyzZmK1bgrni41mcVcS2NZ2s4kLkms1U99mQ9bR1ekNqhCzSXM3",
  "key21": "yj6337Hw9C6AmJDkgM3ff48shZ56GJs1UwhogHCLKq47rDoDW4oadCKQhhW3sH65ZRun41s1L3hSxTe1kaUAZEi",
  "key22": "2BEjMRLLq9RxLSgZALcJ8y5ALv35df8naz41QhZiiwk3e4rvyhZ9fdyT2qshdmGBjBHrjD4iKMZr6k2HqGvNZnwP",
  "key23": "5nvRJkwJrKbY7UPe4DxVLWCTUUSxMN9mA4335Q7y3eMxyiZt5otAfnhKKJvXzdPRdMkewRBygb5jqmbBEmuCJkTS",
  "key24": "E3ch7cP3RmqyWsDGMZxhqh6toP8eN8pcFZhq7fao9Fo2PhHaCZkcR2gi5ARC8tNamzUUs19RNjweo7ainPjMyES",
  "key25": "4PjaqrrhmeA9wk8gD4VfAGSkgx1RXuNQwnDdSJ69cZGf5nmRXTU3WBpsxPZx6KV3aPJDLkogd4s2JiQr1H9SmEwS",
  "key26": "4P28N4tZo3dEuEMtSVh7rJceu49Kjb7RFcmB6R3uekwTvfmMUkX4PEoxEWUXNTUt6rxKDgvvYTEpQNYjbXiozwgP",
  "key27": "3EqUfwT9henUf9WNqNrzhn4Kpijy6trsJFionrmF44wh5SuFntCM254Wa47EFkm3XZy9imsjb2UfgXB5hLGbFzQG",
  "key28": "2XYkVsP8VjRsCUsnRdHoHgvkZZqGNsWYg6tvnACcSt1iC8jDwVuEr4Af5JEwG6zkmbWbsTSMEYSg6m5zg69aLECs",
  "key29": "XWMyroopyjUiRqbZvg2CLvTxbhWAPWXW657BJamKzNh89roXyeg2tpSiqUUAjJ5nE6pmgsGwwLp88fQWGcCFdEz"
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
