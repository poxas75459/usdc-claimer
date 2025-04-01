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
    "2pCfWDQWHX3BEnq9XZV4FJbM6gzt6qYGffKWFCncmsTBZTfzWLZkRpc2YrnjYuCjaR8YcESFKUciFAZbncUQaj1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33KrbaBumFP7n1kigdqFqYay1RUNw9Nwxcn8AYWFxxVvwF9aN9MgbXhcX14pEPCCsduB3wg3kjr72AKRk2o5fPGj",
  "key1": "U1asD8q4nwnQbK4vs8XeiBWCqM9VCq1eFEXxG9rHqUpEJEDxiwxhBCgehmrt8omGvrGf6N6TC2f8KUfNUdHed1U",
  "key2": "uhBWiw3ZSxB4UsAxBXRq9XkFKe8GtbLEEhy3a8iFKePrjdgK3x6viTQrm1FySVgpWJJu4HEn5cqw4EGM4UxKJ2T",
  "key3": "4we8MDGTzNe2iFvB1fLBzi7kmAxnxWTZGgb83vkdfRcKbzhBxSA7cEziK7DFRhBcLQaE91VsCm6E9ZQgNv7P8xct",
  "key4": "5ZNz1PsM9HUArF9hei5FsRSbL5fDTUAoBAbg7fwqC2DorVq1RBRVTLqyHsXQjzdMuRW3XGm2kTK2iptuD4bseq3U",
  "key5": "55iMMYTj7DVTCTke31fnWtCjfkPqhjNNf5Do4UD9Vc3E1r1HFH1QVdSkR8dW3TGWyFN1XobjegLThydbpipXrEmo",
  "key6": "4F4coLSh5CLS6jQXJ6kZvdVGCsx1GgjH83yPeDpHyo8ixXBqGTVeyoCntXbUQfVAord4aE1XW6StRg49vNpTVwtQ",
  "key7": "2SjE2dNFDUhcLxNp58atfmvy28QiEbLtWJp8JAnFqzqrtTYN8qnRQRwW3eMuxvvwZT5jsaF1avZetfRppUaMSWnZ",
  "key8": "E5amL8gcKPMQ8HtRh5PXbQii9AGj987Vhbhjrau1QMr8qjqLZeDrwv45W7EoHJWUCgaTkxLjBqnCDjb6BoB3zcN",
  "key9": "gMTYpuwcWog39FnjtNUBMeMd7wmgtwqyXAW3hFBaL8LeD2LQYssf1yHYuTbWJwEX4esJLWBCkbvvQNnqxWAmu3U",
  "key10": "j6cnHJYiGghaMH7yevBrT1XiqhAooThopYXUtsy9c5LnhF8GrvfpyrNGnHGmM7e5VywmspYzWch9vP9ZyJVsmNt",
  "key11": "ARAryPPEh4tw9RM1UTt8iDLXx3AQiM24XTa9LE7HtrvwyUQi6ZDzPtDhyttsJKoraRsiVVcZMpqvf7fHBSNdLtF",
  "key12": "ZeQmNa2TjYcJsfThhAwV71pmf5oUEj33VpcQGyLr9xjeUXscsGmMBWtpkooLcUpKRRGUtmtcacLV22qVWu77x2i",
  "key13": "3wCPqhf8rqGrKraXnZQdQbGimTwNMQ2x1bsr2i6o2R9aABnTvefyi22UgDzYvhjVmvNj98tnnn6gJcATgMthzuYB",
  "key14": "9XZTs68vwBTat4Ev7jL7WmV7yqQKTTT9H3SSQNz6NKpNEcKkqrdizS8PKaPjaxEyK8jLxFGW5QZw4GL2qG3AHPM",
  "key15": "2n4zZVw9Ukiq1dqoHZEN8AoSpg9ZsrpdMxHP3ji9jNkzHBsg6qRUJFm2q7rxnx3pLPJqDqGyGu9QktZBE7MCHjPq",
  "key16": "N8Du197k292Kfsk1bxnUEC6pZVnpVBK2aXxLndtMjGhGncNp6MYM56dZPAri4Q6L3uKzPQUet89pUA2VyyVs42J",
  "key17": "4QGYip2AjwiWSJziPoDvKTf1gMAPuBsuT6CdtRt3AeZFsnBCKTDU3Z2ABUNsMYNcVmSaY8sXK87Fsbr82MW6rnti",
  "key18": "2jpfRijLZubH4KJ4Nr288mgs5Y1ehfYEwrr7xnef7Rt2S5uGv9UnXtR16TTsAqJMvaDe1H2rnsubBQz4bxowm9Dc",
  "key19": "5J9fbauHiXFBwsZtLEJ4cduuHYKesSN2g6nNAPDHidLp2a6uhaFBx2B41JHmJepypWjEJduSWCBeiivC4r87G32E",
  "key20": "2EEkr8hKAaU7foM4rqgnfKoYaLBS7z897US1bPenSnD3fsXdHwRv3v1ytSArLGCCCURvuEwUnKfpLGc5w6gVZxLy",
  "key21": "4FQwSTR8uovZ3PCTNYVTemrR2um5R94cGdmaWgoQfVuzaVeVPM6fMxTnQTGmB4eTnBdAMNNJ98yav2FkjFw3aGRq",
  "key22": "5kZRcoMc5GQsD8u6T9H9ggcAUFKNFEmRXWuhWX4bLFDsiEer9t3Uh4migXYW4Ui27QNHX19B5m4zRsXRoAQPSr7Z",
  "key23": "2A5Nmd7yfecjiuCUr9eQQa5Bh3GwPGhtfRT1s4uB55yXdWtNWSCTCfqf52VfSwu4r8HboEXbNBUABnfoygGqEWsu",
  "key24": "M3qgUKjGHqvC9Yur6nPWv2qj9CSpvPtAGphp2PsSeehg6vG6XxrypDjVzQtjWSoEGHoUvnEL8FsLT35Q3yWdpb4",
  "key25": "24a7fXATdbkj6KpXWKXKiwU8fmZ3JoajWRJ5ruJgoY86x5X3x8EWDiz4LnCz6YfR9f2vwcQEdbDT9jsQi7T51eSe",
  "key26": "3ecFD4SLEhj6GeDCB1sdRxgzbMunNaQzu4LB6Qw4sDvuzm73QYyP683pWtPCLDwwruNYqmaraSou9Lv52RHjNVcY",
  "key27": "49ycVAmuCdb9zkTz1Say91S21dTcVDpgSTK5XVUTvLCgSLY1zamvC2CENufaNn3LiiTTNpZhvqaKGwLEQWqERrVu",
  "key28": "2BkGH8HeZ8NrzSh5jcTdVCtpDGvrX94SyuXQ4YHGCdy6MhhodfVFKaNQn4aJYgSoxkQMTSQk9UrDapCoyuyeNDMz",
  "key29": "4k3VbGBpT47NUoCyaXtiJzyp6EnHavFDXLPbV1UYd4U2W3g9hrdBQe72WtoQ8LPqLspJ9zvo4oirC4mHzYtdLR1V"
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
