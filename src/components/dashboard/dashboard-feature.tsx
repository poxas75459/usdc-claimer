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
    "5yHFhpMeidWDGrnrCwNtfsvf2gm6Cn1BXTkb7WZN7PiUpVoKJUL6tjPNMfX9SRG76Nt96Z52B7tSXjaYy6HAuhNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mpvQtDPsSyhSrKgpAace4Gm7mJxi7TMWu13sHW9vVqW6nKkrQF6JdkQYbjDdRSywPasmhPrU42vDryd7XtGuBk7",
  "key1": "3a78k5qK9YpZ57JooHZz3RcctvGRQHgDdpQEGh1GYXrmA1MCmh7A6yUZbYiNSoTGMwjaKcGXTAmgXXh7D23oRVeJ",
  "key2": "CJLeUZosiJ2cNow4GK9Mbk2HQJFmZEC3uuabHCNE7foFHQjrVK6Q2Z3Byvi822RGb487gsiXwMfNBo4n6Y7PXqt",
  "key3": "551FDDFjikUHWV615q5cbhAi37ixzEiWKMAVkFfdQps419XCMXg3W4ayUaPXksS5uYZZFD8DniLGiyrWvodQ2MP2",
  "key4": "5Wgn8Zjt9aYC4mo4rftLvFQbLLW9jDpb4kPqsWgyTvKngk8jDHqxd8EnFWBUQK5ib2DsoE2AGNZAq2vj1iVNvTUM",
  "key5": "2GBsChs2EZPS1pnq16y1rw5uo7wBraBVNaoGHvmG8QwLfJdpseGBdW3qVAFapQcudrp5nbbftkko56SwzW3reMJC",
  "key6": "46sAH7msrtRxUbTChPiLiCMY3R11wPMsq6RYKuZsUkC9vx599FxsCfNVraQtytMG5KpWvctvm7rKVpbYBDNNw8gw",
  "key7": "35tNBxN6fq3e6JKCXDMCVnVdX9eoG7DhcD9cxi1dJiHsmox1YSZUJuWmgdDdUepe314nLuyknduS1i16hVZ2UUt1",
  "key8": "5ySMuioE9KuBD7ajN3xLs5mnS7MrFeEMh7HNZZD1rrEQiPRagFnwp7qS6PfTsRAKLR3PF3MjqnNKmGv8uwmWaFVx",
  "key9": "448bMYjHS6aXfRm4hGG4zQ68ubfAdNvcEgZpABkwc29zpdV7RLkDWx8EZfphQh6MXLfbcETsmwQmpd6fgzYDLnvU",
  "key10": "5omGSJv33McMzmq3NgEVQHEChkezYWz52RRCrgqGxJ7Fqp5iQhTSDxwgu7iTQB7EKLSfVGvZHpWyYmEJyiJVmhJn",
  "key11": "cr4gweeszgFVaPep8PAqJfViHrvyxSbuemCPEg4ZcNaDiAPtq4KLA9EdbYF85ecQYNox3WJSqtTTdqDifzsuWrm",
  "key12": "5N1j1txowfwmu5bXsb4hQf54rgHLFDXGtGmMa1w8jtCrrXgDDcXAEMVTdZ1hLBNcaqQFv66pSWgAkHbDTYdSWSjU",
  "key13": "Rcy7cj1FdTQ6uo5VpyXPWjpbbvbFXHZs2JtRnvyB7RiDBRZRnubBdJbKLQtHRkCvMhHKBTKqwtR2A8mNm4yos1y",
  "key14": "2xw7qdsZisJzn39f35euVd8xQeUTN9b39XV45jHAzK6v83YTormtD8yL4qjUWY5AiNHUFFPXwToUfhz5xEzS9SUE",
  "key15": "wdqGycn4rWL4Kv3wnLLoUtKnEr378YfVRDs8zhkcde9ixG5uBvA7pEpNUXcgUgTmDu99UnYUBLXfu9u3qGwWcqz",
  "key16": "4k9qj9UwQxhHxAnTCqc9FYA4y483LxS6mLA3R2hNeQB1eucKWa4qTRc9HhReaKYisdZBJsTiEdzwC4vLVzpCxCuh",
  "key17": "EZ6RoWoF7ckKH6eguyXbH6Y8He4GZJLTxaZyPAcpaSodSPh4ELbbr1JenoUgcXSS1XQrapKPWybsdacfkjHh8n5",
  "key18": "4P73VpYtVubjdAW6BKSuzXSCxwQxFmMpfSBEEreCqtPLP4HEBhviHXhneHgEFPe95A1NDNLwL9xBboypPViXvupL",
  "key19": "2cCTFfwUCLGdPFLM7vy7oEg7Qk6NuEbT9s7LLNeTtUiEdpKWu7V6JSgybzRQipfffjc5jZVJdoYgVBJ46qJqnrxq",
  "key20": "v6WrJRSa6Z2XPS7VDmfqENNJu8qvCyA96CpQX8phvTQpz1fRHGQ9Xn6Tw6dPmxWZT4fneoozCnBLjTeWBu3gVXA",
  "key21": "3tqZqo5aKiAFdPDxcq8XJBcuzJ6ZfSAxJccZLB9fB7YSbaxJBsevTNZVRwLV4i4JmoMJXvWMRJFr2QPnNxVymyAi",
  "key22": "2KD491foo8eKZoVeysURkiL8umrwfbfiRnB81SE7W2q6haWq2mJpwuHS5p5s3CHdvX63udb6Nq3oivXT7cRptWc3",
  "key23": "5aLrRRiZAWhSXG36txyca1KXTGL4SqMKMa6pvpXuaEGQqgf4Y9i3dhB4ZURD1BUNrkiVkzP6USuewDGAnBN7PUcn",
  "key24": "24DRWcqHMAwgoqXPgshcyJRktTQ5u5tCzq4nTn12ZUY7aX2CfNpMsXXhf98mrwE3kLwxFPePzanPtgDMKdEDf6JK",
  "key25": "2aRQJirXph9yHGx94edzgrnx2f7zz5aMh9wJtcLPxpEFRFDfJ86UwU42wF2e6yH9EdCCz3nU5rMS4gC5DuG1zgVb",
  "key26": "3QV6kmwrL3Coyk4FARSDef19nRMW4xhQAqPvrUwg4tQEmeA7y2Fu9DkTCsi71UP9JteHDk22EzuLEBdzTgh4DzMR"
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
