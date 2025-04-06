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
    "5GfAzaEuU2AhUNdPGU7NaJQyynJfioU4rF7sK7NXqw7epeyXD6Gm62TsxpjPHqD7MtZ9GkSsM2313ZqVZuTnL5iE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WTuE77gGejLqwCfs2EcRFgwcf5EGGeshSycwEQPY3wLCwCupnobWbJmPucPagJLUHxVFSNdVJc5uWdF93ttgnJi",
  "key1": "3Ci95YA2tBZjAHJTh9t9hKsZqm3FxxgztgPF65oHqp7xb7nXTkJ9xZDnBoocSjV2nTZ11aDQ8ESnUDU3KX5WE3wN",
  "key2": "26XXKoCgAoSMAv6MvM3TDFfJ7LSdSCBa9dJKDFVN77upZ9sp6Axc31R8bBAm5csmeDjYvF1UpxEgLGfQyWRTkYWu",
  "key3": "3rVfpEJ8QAss4SgSkxcKoteyTddirEBeJpfeX81Dx3EySAJL6TrU6dHhpzxPtABfNQszFEK3w4aJnXuawwXXZZV2",
  "key4": "Y4s9K7WwZjF9wWrBTNwQDu9Rpj6q2yBKNhYqQATBjQzFh1NmK2gWb4PNkMoV1E99FSHPscSB5zGrzGqFiYQJBzL",
  "key5": "3sVZYgadHEKAmp6i5er51Ha3si9Dz6BTokktjj3ZfbtKeXLJcsSNdsmohxvTRennhYKjbCTR1ZPN4nWy2w3FSHez",
  "key6": "4QM8VLjeVbUG9Rg3RDH8ZPaL8B52nUkEsFDxvrBdkMi2oktBmwncQUrgdhADzeKNkxXpor4dWJPEnh1CmpJLTr2V",
  "key7": "45bztvNSGSSMJUdCHTvxVFcqCPuqKuUdkBYWq6k3nqGTqXXVuBrtZH9pBUFFbpPncHSJsrRHPwxZ6pegLRADiHPm",
  "key8": "HNbJNbG1ZT8pFySeWYxszGv7fkWF2kd58ssMq5zN18dsiQaxXd7XFhNJrM6gP2Y9ug6wxZ5J7UiDLTmZYrGiDmw",
  "key9": "2Qi1M4NEue7TznyauhcJS24jve3mCZsbgyjGxDXXZzH6C4WQFK1PrU7vDUMmM62Sx8NoxEfPLX19VUiW9ySHVoSc",
  "key10": "4nZwa8jCBqtVAdLrC2cTpquEhDQhEJsiKc1MH8ujQHHcWQ6DX5XiyjB8AFMDwLKqJC5u4KkD53tLYNAqLkRbEsfJ",
  "key11": "3cfhezNnEBF9xkMeVXSBNRqVQYhnnSDX9TyKfyuHv2QkoK2SGXNp9MFhUcLJNCyzGsPsipVvAWq1dPtNkd2bradU",
  "key12": "QmG2N4JAk7bqSkJFYBUDQFreVYWV258f7o4RGUVepF6RRRseWLax43ueiBQjLV5yjb139jCQt6Put8EGANyshwq",
  "key13": "6554g3C6zmoSGYWU75N6fAmCHg44z74yii4dRndpJkjEHqZkhGVR13GEajiL73XbsjCnkkZJA98ukrEk6jwVVVmN",
  "key14": "4j2J1XDkJMmp5cciayaqm7o6mXP5qjzhmvwQcmzGGoiDz6JjtCepBT8Q35UzcFTcf5b2W8t2MaNkDYJn1nZ2CqDj",
  "key15": "37DhyxpMAcqQXBjQxdih1UE5uEVLKUwbJF8fiEh4RfB9X1jvAsx4YdfgbeoeMCweB3HfDrtt63noWcVHLbFEadG8",
  "key16": "4wt56nu7iFdH7heSnBBtLYLobjPjanEkGJeerucBSNfVMYb3AbHcfgLxJ1rGa2Anbbsx5p5CdRZcs3eiQqi3AvqQ",
  "key17": "2JYm1D6oLNFL9Cvv9bnYT3JAX7WZ3TV2wJnJNQBUX4kwrJZehRyR2QVMGnAqPHRWurBrDzcijfaG1mp57nGePetr",
  "key18": "cAffXaftbpfM9ewGmUAaks1ycjsvPqTpUMcydgjigNmw7VfTMSiZn3sQy5K21jyk5184dFvWwuRE8LeRe2nJuf2",
  "key19": "3fH585wj6vP5JjS8QDcjyDt2Bab9AwqYituVaUiYc8ZwrppgGvXfduP2kQp5PgmV7RtVje43oLYwameHyz2tFQ5x",
  "key20": "3R7RN5PuxTq2HEr536otySFPuWvQC17buAWXZZ1LHYQN4u9Z7JUnGtwNdURS4bQE5EopQDLETV64cCaWCV9w16wC",
  "key21": "3tVyxkiAwiRasmHHvozRhZayuMqL73CTPLCRsweN37TYc1rYLNagXhSfLszj9aoZhYkRswfWzaZh9hHaG4PrkmJk",
  "key22": "TjLbXiSJ4PzfFQfjWCFVLDbeSoEKpA2VZmLeeR7nE3krH4VheKCtJhs22JyQ4xGSF9WBiw2KQn44RozepB1nPTd",
  "key23": "512oTBkrGZHTsq8eexshj47ABwhSryaKA6kJ3z5XiciG9YP4JgS5R5eAwhwYoiKB99aL2h7TivRFu9kyc4egzs5",
  "key24": "3uoeuthnDrEeFBiDLpNeHSYJ1MkGBHnfTLLqCv3xamMP87Z5cDKe1xkr4YSogZ3ZW8J5f4dzWFAoWXFitudfhhfH",
  "key25": "469iEya4pzX5wzi4FEjqhsBxZAFMXobLFzgtjDQbaXtH9UWhGhB1qhZgqNKGW21Ed3h2d7Juw5sX63t9kXdhmsv2",
  "key26": "3oxRMx4kM1zx4SrqTeRPL9u8VEhEoJU81hspBj9ZdCovK83sve3ArBhb4FV7D2gGVmL8ngj2QjeP1J7jRQQpww5z",
  "key27": "2Lgx7mVkLD9kozq2D2voSG4u6tMR6QcyLziDLaixuGnn6AmadQTN48oaJtrsjAxMRBVi9dMFMfuuJAieVimN1jAL",
  "key28": "2yk6VkUvPZYNjWHQUJZseJHTNuMcT4Ar3HkyP5avjwkrPjLB4hfgK1PHxx5Q7qxx5jmHC82CsPoEgsfR6nVq1Xqn",
  "key29": "4SjdfQoVFw1fTuPhHR978f9Zu6HcPo9QdrSseLpDWHSNw7KQsVrWiudQbedbty7gNDquWHAZQzdjTvrYGVNNJKCR",
  "key30": "3XMBXugWzPdfR642bUZ5M2ZZMsa84varGNuD3GF3BzP5wnxiJ8A1GWJiZ1pSfUhVEx2jLW5QNS7BHQb8qFhP4gW4",
  "key31": "aCugFKyY7rKnmdAvxqWKVHKFRg6YHjUiRSfR7GZ2CpKEqxqwQSkWcY7UbAzKTaHj7SawqdzsDt7Qi5LrUyyejLg"
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
