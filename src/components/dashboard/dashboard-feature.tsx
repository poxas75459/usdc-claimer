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
    "4kmuzPUvSJ4r4v5cQcScFyJERDoxuZu3qT7BPvofPXs3gzXm29poCauAZMxKM1B1Bwrg8UcSRWxpP8Fiyk5g4NqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "243vTRAoprLA62z2uUGBLKvXHotkjd2Mgq4uSgf3VhFwwVF52zz2VEFNAFNHSxzvuQTurK974AJMfXwcYxVwxBcP",
  "key1": "5TSwUofFkGVhM1FKcdEGTjyTvGp1mqt8BRGpkCswH1PiCCG2CSP8b7KghVTPRNxWB9JSd98DFVfa4RHUDUffTjA",
  "key2": "2P6RjFPXV2KaMXuyzTWHveJypMxvLUq9uZEGtPkhD5zs8a6YJGJXxhU4sx7pUgrjHk3owDjnjPzzKzbZdYvs9LRB",
  "key3": "4mXpVQPhdYFoGNkKAKFqW4JqZnCHM4YAnpGEW3Bvs6KhewFjTUaLz1SV4XfUvyFvU8MY7YaUpmss3iPnRAnuDn3j",
  "key4": "3tZH7s8rWRwU1G5twfpKKMim7fKTR1KFRdQexVHy74rhTnTvTrrgLTZJHGU188dnXiKBYPrKqZ5a66hgpDQhYXYt",
  "key5": "33xRxiUUcrAZD5xvLxzZcgogAvF5CqS1QKQgjwgUE7SZFg88zfan8Bvjc7ink3apZ9MTrTAocm4WLTxhR3C6wrk",
  "key6": "5x4Ywk3Q5oepsG8ELQv1CUg2uXWvrMX19gxrrcuLCUrmxqR88bBYJZGisVub9L27vGLFw3suwJP8PaaF8PQbosJk",
  "key7": "YwY8Hgst6WJCoqjbcuZx2hRLykK7wcoD4pyq2qR1EpX179mGXbk9LBPEKE9ZU4jZ4pv3LC6W8e2pWDBGA3EAA87",
  "key8": "2tXGnkhWkhpCB5RZNeXNoVUzb1azyp6KzRjJBQZrjNnQz39Q3kThAG7Wn72xrQ2U3QbrKTMbcehRqVmR34GeNTwa",
  "key9": "4gkqfftabGqsLnAqxaRTtT1vTmHbCvdvrrrdf9Yo2eXdgXzWAvnXrypSvbsmXk3MRT9v7M76XxuckDCUWfnJkfjr",
  "key10": "5raBRC7XfxPsSTe7xULFtszd4sLGGBLCzUPi8pymuC7kdGdbmgcB82vU5uagx2RoowiuhFvFUHNrLSFvH4tKjyGD",
  "key11": "5zZ167RmY8rzyqfYgJor5ADdwwgjDzT86DfX3uQJwHhvfk26iDU8jhUX73oV1gM7VUPLK2EFobWj8ZCYDFsFjKJ7",
  "key12": "mXMZddyLgW4qKBaXUkX3scLGZU5qA5kUpuQ7BoZUELxcmbCHGoTkRujGGM7jvkgatbHdCwVwtFE3NrQyZhLNqZJ",
  "key13": "2KK2UBKStnEDW3dsMDuffvXz5bmcCRZ6CphqWFeSw1qnqLF5VR5nrLp8NuuuZTZ9heqQBBJ18fBBpmTWMAPJ9ixw",
  "key14": "4LiZXecYYZvu5Xz5TpFAMuR5o4SbNKB3YsYDLcXunXzf2rRWyLN7wM1p9ZGgdjjX6gM9fEFmf8DfkKfBEp32Uf52",
  "key15": "22F9HkK5v3wJSGZ7DWW3J4FByVJoxxoFobTYV6uYjb6x6xeJJAWpfXwoACSZPYEBXf2zittUpEAiVYFdQShccBUP",
  "key16": "214DmTzTFVYgWM9RKydLfmohD4ERCmwdciDxwpMixGSF9zQk4nMMwxCNchRBRMGZef24qNfrHuEVqurQ48V8ZWhT",
  "key17": "3qJ5XnriEdCt8xnJiSMFroLG3DzQNkXaFnMFmCmc2FwUJTeEYvi216qPZ8h6U8WE95hR9FXDtKLtzXcfX7vfQ6VU",
  "key18": "4kEMeQaG75Hn6YtwaqgLrWbDKe3SzXKAHhHtS4LPbezvwqstc8Lb5kZyhnaNRtbyRxoE6o3uUa8sFb3unwMWiMZv",
  "key19": "4DQQkK4nmeKaL7qHzqybVyi1BdMi4vbbmAmr6vdiLPE8MdUZicYaXyVeFQbngwveEQLJk5Ff2oW42PbLE1JDmSwf",
  "key20": "5oU2xRz6U7EWJBpiG8ZxzE27qabYJoJLSPjmUYxjN69dAG9vtmxZTRmdYzGs21JswSNYCHKkiucyxCFTgFWwjPD1",
  "key21": "4FeFMGL9bbEr13MUQnVfMN6q2rvF7tBuux925ePrYyDHpmRGCPpPTGCuLjFUV6eVeH8nqds2SvELv5PeLiYE89QW",
  "key22": "25FR6SN6gUsW9JG3E8b6MuYFQqTnfTpnS8UHFfF2TpdBCufiJgH9wkJFZ3E5zapof7oMn9e6PvG9xx6yfqCYzbrR",
  "key23": "63vrM1QFfW8mzheE29pc7r9JBerUZvUeP9NXJKESotUuHUnPAJ3Ern2UT1HFCs11urW5rEU53BTi5LemTKAP9mtP",
  "key24": "5dZShNH2bv6wvwDYK7vjZUF5TddxGp9s27RiL1qvLa6saKscEYs5v4Xo4n6wS1SLmEJJJJ5HMhWE1r9XyBPicFXW",
  "key25": "4qsTDtcksn1cu1DXeVxnNCqHJEXVLcwRD9YT4Mw7uJPiA3N1hCoDhPJAZZXB4xf2vD4CwnDvei37m8AUHDdqCAy3",
  "key26": "27vHwhtXTE4ckt5fGnHrqKhKZxGdTeuCMDyk9vP38aq2LbbCDHxLV2VAN68UTJQgp4bn4uW7MnvdSipxBj5paUCH",
  "key27": "47TcgR6FHMZ87nocDPao7QsZsffsm6sxMWQnniUYSfDxGRaszRCD3sErAqNndEEHoLAzGcAPTzm17zMCuYDR6364",
  "key28": "5RMEhKzLx5BwPFe6B8W78oqZcrGoM4M4pZNez6jiz5JwHJFaAEsk7ReHdtFTCQSBmibb98WdL9EjFuCdURMfwBBQ",
  "key29": "2ihVwYS5R23YudtyxLanPX95XNuE1B9xsWeP6VLRFiKkzbMTRWQdxPHG4CDH2t8aMSxSVYEojbdreh9nN9JQVEKA",
  "key30": "5FBGqXUppe3NrG6m5xYaC3gY9Zu1mFHuykQZv4qisrRbZgx4bGiBM9kuDcH61kaEaV6DpBZuVwqVDNXU6WASwNMZ",
  "key31": "3NHM3cV6PxFDd5rBU7p8ibvrWU4bUM2ERLzYbdmTUiPaS6qCVS1DABcS4E82LuLpFe1WKZhBpSHwL8JweQqjqnaz",
  "key32": "4sXnoMYHrondqDMFcyzTApbQy4RrcC7XdcJQqqeLpEGqcZ8b2LCyE31qmQ19LAe8VbvgxnbR89NTHZJEsmCuXHAz",
  "key33": "5Z6dD4uNhCBPzrhwnk3ZWntYfBmYv7mDqFvgHHWM5946s61hVfdFsKipf6DsPaycoVu4kLGLBVb4BfXaXd1caTGL",
  "key34": "3SBxfmDKMXP5ppBt5RTTqQAVjvcqsxCVrKJZ3dCMevXoBKEWA28ypZARd9LYg5TTPyRKdSfZtwJXqB5WHopqYne3",
  "key35": "4RA9R4sjMKgmCYDdcyDN7KCjDWDr5bf8izYEryUjhsVzLnaY4D9iTXHu3kVa8sLkQCmqFwM3zPQykmWYcquWJrMn",
  "key36": "388uLpjU789d1u1c5JUAAwsH9dE33ggptrQj1PKpVwQffevbbeRv9DovZXuyqWKgQpZtKzPWiCbaZpqt2uhwNYb",
  "key37": "pFbKhZQkkVGFnrpEMjJkYFPk8Q2sgbMYmQZ1sgdixHbvN9Ut4GtJjBWiSSq658roEpoUiADdXgJAZSHkQ3hA28n"
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
