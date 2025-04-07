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
    "4aA5m822C4c3fBTmY18FYJXzgzYBpk2ZW4EQmZHYL3Vbs83YGJYy2drCKMYLFb8PXGfLQqYVVJdyDkXhBjPPooAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cDn3NugkGUeSfWEqUFnnyN8aA4etCf6GbpnJZMP6gtS94GABRNsUwzBNHQPnpwBHvRgxTXNrqyaTrY3YVMUMyjg",
  "key1": "2yUHtoHqrzrX7WNPVd3cbWHw3FCj8vygDEHjFJFinx123nD2u5knUYLSohxCdBvZyvi7W2E2jXPocXfeNTFQkTc9",
  "key2": "4mt8fzxzSkbRVB1BPzAxgNw7jULbJha7jpab14xgU3wBDa6pP5LsDVLmUWsNCmRysj9i8dW2jTNyJx7vw2i3QABe",
  "key3": "4tXEXRFFqKWx839pQmEHT8QaQevPhuFsZAMGnxzFgNrNcpEG79ZydpQWqRuaPcntMDxhnijxKdyeXJEfw16AqAjY",
  "key4": "tGDE4UqvKpwi5HtMAY1yGPrbqzhgMe6Tz8puB9wo8eMi2tkcbR49wAxoEZQnSXb5HLfeqcUVTpJz31q14KJbN92",
  "key5": "3nkvDVjW2ndKSsP9z6jZXMXPqM61nZcZw1D5w2XseHsVaBF2hVJSGh87yRF4JiyPM9GSuHx42Z18fK346eUSttUi",
  "key6": "4pb3VcvhFLerSK2pZsCj8jwLoFGXNJaNSdnLZc5tdRaxMR1But919kDi3V8o2erebZiFBcQpGCoMfdD65Ewr8p66",
  "key7": "5KZJqNUtjAcTVwnoAJ31AKhkR7GdKKSYUQVUQEXZncCXhX3zBnRHSdSied8EEANdL9MCYts3kxL6kC2RALq28rdn",
  "key8": "63ewvWkJKbL8jo1eDr2Vqs8B8XMTRNurysPRth7q6fbjqyF9rqGdvzezPtdhpdf4hk1P1YrZkCByLhHupeE43ziK",
  "key9": "5KosCUGKAFhSozmYwFwJB9puvWMNVZ2F1r8MomoyHCf73BRNhJZi2LFUHqAuiBaMRudF3ukUjSK3uWwKYsyfpyVV",
  "key10": "4Ed4NG9MowDpGXsnKbsnGUrTqjZFNCmgG9HYWnDgrPmRZMi9iktXSFchWpFRY7CJ3w5nd5VqhpR8oBK8fVdAZyjs",
  "key11": "5XQzC9QmeH1UB3VqyKTdWXAYQvQi3my3T4uPUcCemPjDhhZ5bUKx9hhX2DsSqnbCQx68TCqdN96eYdEUxvgxgs68",
  "key12": "47CjEqDqWz4FSS7EfZRtnDtzZSHQXZ28oJ63ig8xqzi4h7iimDpymzmL8xnxVEtXF3Gj1LLBb3hEcoxwnvfuyLdw",
  "key13": "4KXtfBdgUbnYCxBLPLLWL5mfNuYdpBeXfKoGZ4S9L3wBg8aYvhGV4mGqDWMRjNrby185MsXeJeKdjBEFwp79xsw2",
  "key14": "hUM2GMUHbqJT6zRaF87qx195RS8MqJMfgkzczC8gJK5MbVSzwVgpx3LTamehLvL2vDeLpQfJdk43xxXhVUGdZ9R",
  "key15": "3LNJui99jV81xvpcdFdbWcn6rHfDsTfaNDqnrnBy25UdvqkjcFUMHSF23jeYj3fiEUEXZboWpsJNTAwVHFuLyxjV",
  "key16": "3KPDaZQk8pAoVHCXCFCJznpPqdN9TcMQShgNuFeDBgXH8FKsuHqJEJxJZRiFi8CH5pttoGhJRd4VcakxthnFmQnr",
  "key17": "2ed4KBvQLCSCrMNxC66aHGcqE3xy3YUK7xv2fCUTK3Q3YUxTPn9MSwyenmi9b9oSCFPY1XmgMiQDyWGLVVY3eLu3",
  "key18": "4T6cpbX9QFocRgQx7ALPwr6mzFeepnou1s2FQw23PStpewZypZ5WMT55ZMokwehe97ZpKEkrv6P4gc3JHEiqAffN",
  "key19": "2EoctafbiEWdLrqpYoyWD7t4fsyvsYRhygtP1dzgRgBsgsgoYGN3hVbq5htTXiReWRALcBv2EVh8W1GwZtVTrpzd",
  "key20": "4DkYaDTacJQjJthtDR1gUzSmVVFowmn8bUfLJKNf6Mihnm1CVwTH7stsQf5pggBdmVprhsH1eifRpjPu72SxVBMD",
  "key21": "3HfnqzRmvQRjvgnRhEDGM2wtzPWG7k7W372mohKfzjqEeUL9NLQKxM4SoYWn4jhKDg5fCfUwvjHhagvTijWjAu3o",
  "key22": "fZwWQgaKUkBZMQNfwyGdBNKUGRj1dyco9F3hE8LDCKBrHS9E9E49JdnfKsYvFp1UEwdUiD91aqS4QBnnwnhiXAU",
  "key23": "43Rn97ToiL9gzodaL91p2KkqZd9HeoCWw7gvHRPJbWs176gUKd1kgU6ycXCaQugnipc9FiF1wTPBb5a36Y5rWCbq",
  "key24": "3GVFDEyLGCZ8m47F6HR3XC9YAH6kW8KqN1LzKDvK2hcVvWguC8YShUYw48AoA2zd2WTio6CTKdhvYPpxNw8SC9XY",
  "key25": "jci9QQunTZttbLs5BdFtHiYCWp4s7Q8kmwqfSKpMTv75nEmAYJhS5wKHWZidMCCPKQebGwUZ1dQjcum4THxdLZf",
  "key26": "4xukhvihu9VLgtzveprL72VSrmgXSK7fGZtEAEpYTd8E6C8EmfhXsfvjNJyuHCFHiwsgEXby8rDqiTucKiedyPfc"
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
