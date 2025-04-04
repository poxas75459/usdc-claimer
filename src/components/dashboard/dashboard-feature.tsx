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
    "3wCkuRe6Vou9WUVEiy3rEic8jdB6VDAwCXjsCqLfETQnLAUAeqBSgCtGQvQnw6UTRiLVziEAEWP7n9PGywG6FChv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47g8QmATRH7SKyfuLefArqsZKFCHkZyN4mmRLqNMnmCqafW2fvrG9JLzH84DwKsYvmLGJ1Fe9W9SFfxhCn1MjtbV",
  "key1": "3MwiwBoyWb5RqmBQxEdWoqJAA2CsvvW77hnSyJfTq3nW7Ab7RYFBwpNiU9okufifF2TaFun4Ac6y59m4Tq4XFHSL",
  "key2": "3XV8NtxYgBDqSRZU2UpmmtQmARMVT81R75aAUbLxcZUiUhjN12Y6RTvcs3maxscQ8tg1fj5U3DMwoat9dxM1QPJq",
  "key3": "2Ehof4YzbAnGraxumLXht2u3hnuS35UKBKUbwMcTNAJFKk5Fzys8aAmKDxX4tTjw8EMUYG7ndrs1f1vTNHAULs4o",
  "key4": "LBRPF4iBvM53iP4sUYVPQUgXm2ftyrexnaTeNer4DBujC3TRF361ZpAKNdxBw3sBQeUDp6TQb3ccazWhoMLNjAW",
  "key5": "5cZKN6eVLMw9YG8yNKcdRGMwdJhh73Ln5mzTcxtxAewyhqAZYKKwaT3EwdUtYRxPV24DuesxLr2pJQGLZXFJ7HyV",
  "key6": "3rdeXYmAkrcehw1TXkkdJQXDka1NLHDjtqiCJXfDydySQn4VZQSMXjc64JvqmWt8shyJDJRy2rk55N6nVmqrCPyD",
  "key7": "a8f5rfGRVPR38fh9fVtNfGBpf8vUZkNegXcSpdKbyMncLeskNxfeFAF5gEBzkw67HXpmRYzfsyWc59joc74TerP",
  "key8": "3H88HJMeoJx6ARo34m5ubu4yJb8FeVNXEGgm8idTXafHKWVwLMFTeR5yDsV6Gv2UDmXajQdRS2yqo2n34d4GsZtc",
  "key9": "2E87BZyjNt9ZJcDzcX4VpujoA6mzceaaZiMpYkoPqhfkiYD8QyeLgiYKycYBFGbiHQgKPL37abi7pdMARhB1VGYw",
  "key10": "2quBhEnqkKytX3G6SnkwT1VnHGw2GSsqfMYWrMZ9GqKAHJLQqATmXK3b6NfHVXcvUpiqayEcckCbByVHmEgCFkWD",
  "key11": "54GUSDvYFtiX5bgsDHFuUVJE6mtx8k2SHP9bV3EFdATLETnV2SBuGJaTWnNsgM3mM7XZa8VrbzELgsJtGcTkTwN9",
  "key12": "47ZHzfyfseSkZpNhgzvqC18Kn2NRbSFmfEeVkkeaXpf2mNdPmKztNy1mTkmMDt73mZATWnExhifneA6Eqmgiw2kG",
  "key13": "4EmtaqtMmXhRZjUhKFNM22ENYrdQsbDfyS9AtzeiKwCQq5wXgXG39iaZ13fxEW3ThfiMaNfeg9hueGhgndHQw24Z",
  "key14": "5epSjgB6x5tggncdGPkLfG9dSdsoZXzUpx3ZcsQ6zm6eBwX1EeXVU2KhVQrhwdsM5d3RHhkZ8mZzEDowCtdQfURQ",
  "key15": "2zJxAEQUEa1ThVgVWhePztvSbZLnrwN9WmNg57pPNGCRFVZwipn6357HW8TxceBfwxL2UgRCHcgTkE9g6Ua19ZRm",
  "key16": "43XeW1i9Xin4yPR6SBapt6GekCZD2tx92YV2j6wCtbEZxvt74zZPkVxiKGH8bfsYpFhGuFH5ESbd2SbaG6G4oMRu",
  "key17": "4BG4gesG2xdvSNt6FjnacMeXJeyNTrcBZh9fQrhqbHeFRDigksTQkh1TNZNwNgQvB7mbwpnxLEAyxrzyihRy9RAM",
  "key18": "39nkbTsFrVHwyX9oy7wK459GaUzx31NrC1nZdFBxartzFucDSZkDZHwjmfqxvU61UG3HJHsxHoiVTVjiSAQiPXAu",
  "key19": "3PzWTLXLfYXsaTLJcxSxofyKYdttSrUTzJDBuXC4Kn7UUgMTUHjmftLhgRsDQyr1TmxW8jerQy4LD97x3NyVvKJK",
  "key20": "Lx5phENdrqdpqbJ8uwqtophR6zpbjnFR99bXyG6jfMqNf5iUFMi2vSzTvVRFxpqDe5jUdpTwEDSvciqgtSdXoek",
  "key21": "4BmoWF62QsLA9onCTfsBTynYBx6jrgJKiv7vgP8KgzvLXK5g3EyzwTfrPuu7tjH6Sidxy6xiWXDNbuLePTGdj27A",
  "key22": "N5eDwdkBdPFUK9mEWEmUMwjHoxg6S7N3Z6isN4skwkpVAdi4sNVAbbJfA32Rxz1Ekp6eDMvBPMCTnjjT82J3B2u",
  "key23": "4TRxvzf9wvuXFvck3dKdhs6WSBh2khHnCGhJojCHLCXagjpyjBaDyLbaCMDB39o1HKnXaN21fGjFU89MaQVvMX8j",
  "key24": "5kyh5aYH78ocZPFTHAjXNcBtasnHZgvT7DYBfPeU1VeQ6DDEKxZtJkk42YBYDzsUVSHDDDq52YoikpFkZev6M1rU",
  "key25": "3nLBv6u5PEEyfRtzDFsHWcQKgXWtnmooc7DT3rtecwhgoxXoGtZDPJnhUFmxyDmvqTfc5CnBRu7JHSXY3P5jjVSJ",
  "key26": "21YGTsAydfzSXMFWnXbuM2Jz186SHQMMhrcSc8ErDHGRKCxvBpfUicpKW9aAuWaRrYdSb4Xe3QsWNHPhDK28bgv5",
  "key27": "2avEyf11jMpgvTPGbwQx4QQqehY7zQU9E8goSLRQ4EDxSEnfk9aqgwVvny9vGgvTemQ52w7NjpjDzCDAPUvKnL2F",
  "key28": "3so6FW3e6vUUxXPBft9rdRcHpQt1gxKPwJK9Vtgfme1vunXb48TxGAzttiGAhjUiLgawDmW1kdMuzqqLRrxoEZif",
  "key29": "4mftmzb2C1Gj5ToVZx9aTZAFHp8cKxEq6QsyfDZMxV4Q71i6xpH4Zh22mDUAKvb8oBwun9nJavRXsaNLYq6Es9VQ",
  "key30": "4KrNr7iop6YvLBR6XhNZrZNnj5m2UvZ7NLg1ppoVCjp2jCpJDn3xrNNiUfx2eJpaGAL46bpScWtMrUXNCqEMacem",
  "key31": "2uaKKjkbNVczQtoe3SgTZUAw7N8tfUDUvsbFwVxLZhm9HAVGfYDkg3wcXfQ4yd6KaQZsV4pvmWoEhbtFRgdzaHYx",
  "key32": "2Cbs4iiwRz9yoBfanzt29zBCxBuyvwHJ7tDSYmsvhXWL2AqxZVpqhi3E4kQUCuLPtTYnqitAnwRBdgLpvoAXD6q4"
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
