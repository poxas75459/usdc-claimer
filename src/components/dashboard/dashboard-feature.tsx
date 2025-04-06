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
    "Cu1Np6gDckSR9X6orueFR6dhFt5ZmwUSmPRrCumuHUkGGUMYHgSAxjCE4vVZML9Pb1M9nLRAA6aHxusrDeeifpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RTt7F3BtXNBDVko5obPAVu9Kn9onze5tD4FCYAMufNnbs9p7D2LUdh4bFt8JRcgL2FFgNXBtseMK21BY3tYgd5B",
  "key1": "4aPVXVUagsTPFotJTAbocEKwyrYmPLwHEBoVAHtAPcPvD4VZ61V8xRYzvFhkKr2duW3vhSQYfuZjuejcfNvHJiaz",
  "key2": "2efLLsqYQzxFiUtDe6K6MHvLFDiK1Jyxe99RPJyY3xwnPrUSri7rgmQHUfSmooB8boMYDqXJrUuHjAX5WGNF7J9u",
  "key3": "3GXbnKz17KHNLMoCUazqbxk2nvWvKK9jEVnwX43mdnBYikGYcS18c81sRz9emcpfBq6iLNbrWDcXoJquGEsoV3Mg",
  "key4": "2vT3gVjcm65VHebueZSPwp8VNYXPBnWuTKvhwC8UJ7hTos93cGVCwUMA6cfNNr5gCEX7jfbwquQ1HH1dRiknEWrW",
  "key5": "3n6agWs5JSqf6n1fjtjEF4FRE1V9dnGP3eqvFejASa5DtSPD6NsXgVJaYampZcEhYg58WKqcVtndqrq2uWo8nfBZ",
  "key6": "4UdUBfnJ3LwZ4i7CKh74niZQryLFQaeEjZ6fProJxnffPvp1NCs3rhgDhz7cpiQ6d3M3Tu3iWbBgGtDzTiJ2Y4TS",
  "key7": "htzo2MLX2ULFPpankF4jrVd7LPShsvvsnCmoKjHJC5fNkzMftjs3gQCH2xpdgZsGKBk2XrJyjD32MVyWjaNBJub",
  "key8": "41PTgX4UBwR2f78pdd2p7f7Zfr8yUgs6my4qtD6v8artr2aJnnNMDDaQ7aNRSaduk2uiGkNTbBg7LdAoFHh67HLp",
  "key9": "5vvUzhJUwzW4hvHfrSJrSJJ1mWDiqHn7HSeALQxrwQPVi5WnanRzRqypS87dEab9jB6p6NWj9nPhopp5J9DefeyM",
  "key10": "3uNoNFhGMgqwnP36Zi9JwJeF1utBmSsyRc6wuaXpgD6ENjbCmRanVgQ9oQsqzZSj56grHpX6nx38Pgdp421kX6eL",
  "key11": "5KBzMtTh5CnxatTeYf5kuiUie7qZ96NG6RMMACNRPyNNyGt8HwbydNmUPKWaeULEaKmbLGFRdrxukQQbwovHntvx",
  "key12": "3cSGqzwpoqnKhuj9yousc4su4vBqLZ4bk4M8m4K2KS5MdVCQYVtufhv44nCCV8SdWBntXPqCh85cMWhDPx28sFwf",
  "key13": "5NKuEW65wycCtSVdpdfQMs8781UyuP828nSGUDAn5akFTpHhSQrAzT3t3b26BDMfcyP4ndpCQahSydRGRXuJha45",
  "key14": "4AcSVNrsF5icEbpfS6zghiFMjv92Ct4XkYzL1ZejXGZZQt4FH8CW5MccS4deNwVHQ7cGEtU7RJQNEdxr8Gc9fE96",
  "key15": "Euk46dVq4mUk5UwuHvfZ6DMCxHRr9L8vVcPEaDLBH6UfXTDfGk6tPa3vBPJAtnUvTntqAHL9U2CNN1RAjim4hbd",
  "key16": "2cg8Gu3SvqHTARLj3DqYjJ1My8qm1AWRnvdYHKB64UhvnPSAWoaz1hMvwFsLMGQswFtGULBUf4we233ynFSFyxPr",
  "key17": "AXSd97eWVPauUtsxdJbLvvsC6yDSoFQzUCF64XmK7QsCrWEFthiJ25g6pnMA6ygNY7GAU8oagpp5gCvDXJSsBVY",
  "key18": "3JQZLxBHo2tHR9MujKiwytVHuGPiVjth9rZBaacrMvsixyqaePKaXjUsyaBSQC4EUKinp5kBxLnvyCa629fBMN7i",
  "key19": "5QWsGUXM4fYrz1vNEDF6oyLTxYs8UsY9sFLiNk65vcdQ9ySmroyzjtDgqkwNUcuUcRHsPLrPK8B2UkVijfucvvUE",
  "key20": "3GWPtM7TTjRTTak65VMRbpsg5ZyR229jBDCw8i6KsdosQcfPnwpwJszDAXYDFQe4z6mPLAJWQLZ7y5m7R99g9pVs",
  "key21": "2vuDYEe3dHeK45EoQfWLR11CkMQubtQEo4Xs3aFGK6cXaG2iokxqikXgGiDC56UiMTGzwd36QPHFtTfgQHXVKcVb",
  "key22": "MfPjsrK5RaNuuXu9ia48QXyDUbi1uvBpuFys3pU4QNjVmv17vSC9uBWMskAMZE11vT9eAjzAZMVacc2Qmc1kAn8",
  "key23": "kVRM1nrQ6FxmEN16wTD2F17gjPu2Z42po46ZRnNRBKHUmRbhnxjvcLg6ekPWQ8NPmJ853MmkPuSJP4xHqQGdn7h",
  "key24": "3MpTJ71wuWE7LYr67ph4sfLNoY8Rs7EBKhoPcbWwBaY2Qdhyc4tKAJDXeZ5XbaMepqrJq16Tm9jrUh5JZfkHQVmf",
  "key25": "2zuZXcExPxBb3xxi7yxLbXvP9f8xrykQiB35wEeKMJLk19AfWU9jqiFkzJeGSpPJ4ra5gVpZJXfaitADPdW6Swtw",
  "key26": "2z4ritVEi3RZ2Qt8nbdi2h9qoEB5Vcz8ycEj5kgtmewufDPL6NkL98xGE6sXnSWwHZeeVyMxsWLaHyiLgumZ5xdF",
  "key27": "2rbzA45xcKRwKBm6bApG77DcyDCQJwgrHdbZkTP7CWzCrHnJxGiqDPKMKL28xBd4Ag2Gx82BXLwoF46Bun8Ze1Ju",
  "key28": "5xtWRxBDe8FJe2GpZwmcmB76JUqpfb9RVV3QpshzkumVefkUsT9S96sUFzfcnurdGEiK6Gye9Jws9j5qcuHF6qws",
  "key29": "2PxA8jXZHnfPZytMwVjrgmy1Fj36VP764o95JG7CK4UmX3Nq7RMHSYysLomv5jKzVNzY7z5nUdP9Fqfe8pPbEbQd",
  "key30": "3ZtDbPF9kSa78UVtJp8jTKYukTnPF7RByhA67ZpjxPb79tkVS2wVxscGPVVp1KCKky8Lq8yyFtvm9P3GJG62w9Vv",
  "key31": "32PEyrmcZx3MqRyJunr8tkzjmL43N7EHiNP1jexrA9PQTT6wm3HSFtZQoptqULsTCucBczgJvWWx73X5CkARArBF",
  "key32": "3rhBYfEEPBSgJKwWesuDN3UqS3GJYd6qCRs9qzsykPZ8hKpEJwrGwiyMPnFmscU5Ystn3cpyuggZkyG6heXV9pA1",
  "key33": "3JNRkyfXewcbB6ifLSMuXYXRRYZZr7jzjJcD5YmhXAnyHQDweu3gfcS3BNnFB19egAxbNmks9vdeBt8tBsQG1sxA",
  "key34": "5uZGNyF8vHSbV7n2T258b5mj1ehFappp97moMS3bzysVYBPJQqdP1sTcudSHs7oS26vtAzxzY9jXYVteeqXAdtiE",
  "key35": "67gFvtJV75kQeVEx2Pksd5js8opHVKz39dEWjqMtHa8eagfXAyLXZsSW9a2b2qNzsZq5ye6f4XVaxopF7uBfPWZ2",
  "key36": "3YjWSJTJxJrkT6if3GtaKmokybGTUJKVpy9WZWv9VFcN2qTHfV6ChnK4J3UAXfK8mJzdBVouCVjps7c63mAdVviv",
  "key37": "572WFcbNPE8U3DV9hgWfzGPB3TvJTj85tVjJnxD3hyqWFRHk59rS6oF86Y5JrFFD7a3BoAMNFa7SQzChvKFx7Yfx",
  "key38": "35XJNUv8b3ZDALtMMHPJFqe58sCukbq2QEEUTyowU8LqCayusDQ9ek9j9PGKmBvvT5GYYtFb7zoVcXekyskeeGi6",
  "key39": "HhzSFkqzdGXVP7WvQ6RhMZsBohyin2T7HecJii4xrXcJ5BmwRoF8USrSyRUh2t1zHmxPn4zuAYuFnWUTd3MKmWZ",
  "key40": "5nRZLQkHkkskPvkd5eqCGQeYbwVrm4uZn9mg9Nu7Af4rAzFjCawjzBC1eE57yCdRWYAgtzBY6PUYbUKo85TxutL2",
  "key41": "2rm7StaUzEaj7UF2K4KN8EHkifZip2mutDWnbUhvsWnStJVEBLLt32GNfH1ttwLZ2dyYi1z47PHQcM3QFTY1RVrc"
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
