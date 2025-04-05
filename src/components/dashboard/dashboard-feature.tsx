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
    "2RMffzcSXpQBeJr9Qa7AuuDRhBugKn9jQCyHMkdUmrPncXtBQP77dYsFiVtTZCzx4T1fiQoz4p7AvbJHVmkRS9eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rdaYgMr37jHXEefDNyZEcVrf9qpTnaMvG6ZzzpuNEUNu83V34ynPW71qcCDmUakp14TfAHScVa3dB9Qb4CwPT2Z",
  "key1": "3UyAFmCsutZeeMbXB2RaEWPJkyNVGdUKLLo32nrMMSVymgzW8gmjWk5Zr9ypvwN6Sa4JycSAk6jhiqNgEE5mJjAn",
  "key2": "4zQb9TEDedvRubayWP3qPJ6oYZiaEfPhCvxMqSWkG9jRbzzEaJ35WVGWsxCY2muFxhVuVvgPz8mpeL2t7KRZvR6N",
  "key3": "3MLQ9sdj184HJjPBRwVqdiag5nUcAPikKGjyDPUaZCHDDKYEVQRa1SaimiChZp32oE6xpnxgCJHfTuwVuxspk4ye",
  "key4": "3BPPKC1ya2SRjczpSfukZz6a4S1bY6jdVBJZ2x6NuBthNNGUaKbu2GHce6SBCoF4kx6v3fCcFqUcuTJdK9MhZM2G",
  "key5": "46sNmuAEvVZ6pgNYuUf8yEkAU7hWq64cLczPYS2yoYaGNXKwN5YY1Jm73ar4e5HfvU6yMKqRXLpjYVJecueD6WYB",
  "key6": "3iyoYAGg6DQWeqKpRMa1jm4BVXx8NAbcBKWv2gkG79oijpgdRDdT3MPfEv1Lz3trvdkgS4MV1UavHm9XxzQCUDw6",
  "key7": "3fCZSx3DjB9SFD1HsueGW9fRRu5CkddKsCq8MB3eJTFFHTuCBY6xwcfHf1i7NZdVpmkDZAnHd1GqR24VgpBw6zjc",
  "key8": "2F43qM1oj95fSZehj7mEAh8jtzmaqBfJuPUYekU2gPnVXY5R1XBFqzzQFUC54odRfXBGRaJ3udTtjofmNpfqBTfA",
  "key9": "e5FwyeE8PcXRtH4SnMgU59DYGM8HoFbyvYxMtKexr3o2NM3ppmfLYmnFARYXRwsDsKUXJkcjoUrk3c942TgVELA",
  "key10": "uFSHxrTYtU8N4yMyMkVV5Tr62xA7ChSoMKfqw5wFvq7cBNWxuyiUXiLoxvC9sKQaAEDGo1VKkEpevkzcPH6JX2G",
  "key11": "343321sq1ciMX86dWG14JJzGzkABx9vs9MViPEyJqwoLnsQsoR9jhcCa7FUEby6jhAVmZkFNvKjhMGLqEuY9DdTu",
  "key12": "4TTdz6pnP2SEDBwNHRsHAD9b6M3DpNjKXTP4iomaNm3PFNeXKA5kcHQ2cQvXHqBYzT4wKYV4yhARHueCS8ko7QQm",
  "key13": "5z9yHYK1CaKZtSiwkvoZm9A3Qbr9aUbuvfjLry4kt1WKEQWQkwJkfgM92a1A61JoHhGnYPxyqA8A2stsTc7v7f6v",
  "key14": "5ZNPCoX5ragPWtHi3Z5TVQoGeeLRjg7uqKkcKvPir9dR2FfRmh8JHAKc8o18VLmkSWzbssdrFABoigBHtebSePF1",
  "key15": "LkssWqhWxXxjxEvDQrEA3zuGK3tNbzVN3QX4ZW9jT8k9rf7kiakwShZRpy4oU8rbZSgmYbF2zVC5n1T5yJKWPDJ",
  "key16": "2rEfGC6Aom2wc8ETPhkrQeSXixDUCygbTqDuBpic3kcSYw3yuu4kaDm18wnSb3vVGzAfQLRxEMmCAiqgJRnBgAQH",
  "key17": "56S7G1dzEU5EYgqkgwKtg91we6mHHenQBQxWdeyQwmpMmUTwuC88KqHwXHvpvNV26p1GGDrD88sKY3ZAZvQdACcn",
  "key18": "3rFHiK41tG9R6EGBnvw7bWh7rHeDAusM162yC2FSAugRsXyhTiznhoD4L4cyfdM9aNScoyW8FaRiUnAnypxvBRfc",
  "key19": "24ECX3E4mvGWpjA6XUqGhPJiTf7KKoFBCNCwnEWrj2AYStrohejAEcQEnuU4u5sx2dU7eiGp4zrZ99VTFqYQxVtf",
  "key20": "jHFQxXCsvwm8FxJM7CLuSTUq6WZaakyb8Jf2UXMyTt6UKvUNMsxTx9BQWe1UbCSBdwcYZGWUyZj5UNt3mfVSq9s",
  "key21": "3qpfQCKjcdJEiLpjf82n4BVHsfYvqr75YzhNHV2CbiZSopTUcPYY6bjuY93VxJP2KztpcPFxKoefXB6eryiqRbww",
  "key22": "5kzPqp38yTqPNsCx9JSyDr24a3nbpGFu2ZaxtarbozqkEyMVWc6k1gcxSieGLjD4e3NNzuLVFKwuPzVnnQETEbvh",
  "key23": "44VmPP5FiSBgSH9SWFPPJgE4MCE7sYStsqzT4kgFP6SdyDANyaCTcLpSTjnTtYeq9nCBcJyHvGsyndTXc6wpu7jC",
  "key24": "3RrR5VXhM1GGKa5uve1xYus81wBAnaMcpGuM1DXgqsq6qAdUq9cfDL3kJFWfgySV2wLpStT7enBArLf9HtaGBd42",
  "key25": "2TH9gX3BjRxsu44G1mp5o3B5LjGrJVZsU5gAz4PvRitipxKVSGA6Mf1mMk9NMbi6szzBkMzPao7Ha8TdpXcWN8bL",
  "key26": "66E6ccCV74uemJMaHtresW8BTaJ15VTTvvZ28L7AmLSK8J85GAJ11ZUtrYkVAc14PKGf1s3USLig9Y9CpJ9dF91E",
  "key27": "5DijCbdP9GfCukSic7yZWveE1H7E7dCnmKmsp8gussLmzwPT5SyjqpED2nCLA9HF2j9jYNAmEgp6MVxRyZ21XoLZ",
  "key28": "55h4JrNgi49i96kfZFVeUrQ55TEbbRhssF5Wx7YHHx1upZdkhsKgoWMyQXxW4P4feXdBfARFn36vaMRncUwiAG2B",
  "key29": "oqYFkVZ8Axm7BWCghUupLTA2SYZtgjCQ7bvDeqAFR1xGwiNjrJx4TkT81d9VuxieTEzrz7XKKFfovNYbvyiAm7x",
  "key30": "542iqsUXuTzvAbRA3S8qPMY8nM8tF7dPGVdCMmzGgzhiArYmCDGrCCWt3MthTisbq4e5kNDcm46VtQMeFGPWh935",
  "key31": "3d2x1TzFzVZUnoZFT45U5Rir1gTE5VUvDB9v7aWSNEnaxfdtdBUDQ8ZhWH4J22oLH32KkfHkCmCgBAFAg5jhfBLw",
  "key32": "5MEJWE5931ALnKwAhv1XiYt2frNzTEcB4ujCwLW2VueuJjpwViJD3X9chqH6SD27PE2cMHJfSoZSKPBcMCiFUXLG",
  "key33": "4eYFfeiTyKZZyD65JdAZ7sX2iD1we6ExWfrxZHE6yPA9v5y8NERF69LYh7h9SFamEWGUHuCeTypT5LvaKnV12sMD",
  "key34": "5WJ3QDxABM9mmVui8E2cEfiX1rj8agLvHHYs23Mj6exvR761JzRV9VPWi4wh66k9Ftx9rKV2ZLc1gac7Yyp7rDDb",
  "key35": "3Uoz2vnqNYDFFjb78j7i1DREUkSWfhuEnx9icmgmxjp416e1mHByFwN2siP9Nnp4C5hNDG3Nf3QVaQRpoXnZ5Lyg",
  "key36": "5xeuiKWx1dvrx6PbNYKvdB3gRfwtJhtZUbNsg3hSmKgRiaRd91o7Ej99tsZm624rKqrjrUkXTno9j6k8pyD2EQqV",
  "key37": "8y7zpCRNe97BgtyPu6hXgB5FR95gD3YGfiijH87w1TMBUEvUBdLxnSZJumnZQdhutvAwR15m38gxeCtYPwL3oCY",
  "key38": "4CSumSiURG7f4ZQbSDgHn4sNFvADYZx1SdZGuHZbwmdZLUn3MFo23gKsvyCN8EY4TBy5nx7Adm7zQFQX3BSrrzwG"
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
