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
    "3sc4xM2n5dbDo3kftEAcrhUHQAvpbJZYMsGi9yWbWFVevUYZmtgZxRbJJZVG5PVUPBFCLH9CagcMudsXDhkNF2uS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uupvi84wdjZzxFwLzg4n1zdSpbn5aev8mHqdKGUTkMnSXtR2dayW4CU9oTzLAp5H2q67QCCEPuwDff1SSwiMfLa",
  "key1": "3FFgGRqug1EPiGQkHTGtw5zbApRwnEjwTgwzuJhyzYD3vNmxXkeKXgCsi88qRLrMqkKxGuSC31jGj9P9381rfYra",
  "key2": "31YkCnZGFuMY2Qgbh698rGZwAvUKsP7hca2tknF5H28WE41vKbqFF8QDeGySD4ptQump2Fa5ZPinRhzAWLLpvZM2",
  "key3": "3t5Jzt8Y6L2KZ65QrMUE26RTzYJnxvA9MvXZtHxMj51hWR7Ri7xTn4tWMj3YTBqkemnYyFE435vcdrLoQxXgDNRR",
  "key4": "4HSMTfE6hJZrDMc23nMGz8ARwJYtEbVNosoxRCFr6MUneLSxmKXeZU7pmzDCA7bN4Dn7pUwx8JSE3meugkkx96Xc",
  "key5": "5rdi4pywt2GwP1mS1kzdPhaiHWKJzPsvctVbgskTLx3RsK6P3bbKMsgCdMXgPA2xtffAPzLqYuytEjN8UJ37xsJv",
  "key6": "4HWjNidc7BeTTRybMXrwVfhsZAKHcSUUnTRqGb4eAVj1gzdKozGdH1hyzDNihat7P2zgLirtShvzk7qhG3VifiXa",
  "key7": "5QrmkDAHseaAFwMrZYKd2ct87XyGn8RiNU6kxVn2yELcXXa2cUb5SWqk9MSKhndSuc21RjASUAwawhBwqp645TFs",
  "key8": "4VUMQvU1TsvnqNtVeA1szoa9QKJ6MWpiQmTcHYBEgDxQUMZW24dc3EuQBLYxAwUhgCWbno6eq6mkE95ThaYCubyP",
  "key9": "2M1FSDpY8B6bo2UswcTR7z3Sm1yCpwodFftfod5T2iyTuhtxPVmpbXy8v8mQwwbGpjGVEGxJHM7aEZ3BT51tkpuL",
  "key10": "4SSED6HqHGBNCYGcrCNexrNGpgXtEMjMnZVVgCK7GLpaywuNGomhwsniPNzRFFahj4V1mFCqFR7nqmsFxRTE33QK",
  "key11": "3Vpy5uVnyA3YCkeCb56TaEdR8CLGtUtNUFtNce82eusbmbrLCEmtKH8fDyqMtvBoZgTQS5uWGisEnqN8NWV2jUDy",
  "key12": "4F2oNy4B5MYcpwV3EHf4iPcEgd6ECnKEiPdtnotURe1EmzatzMpa6GKZQfXtR43VU9mVLQFeQEs9kS2mm5wUA5ny",
  "key13": "4DZFdopzRkhJAX4S5yTZBrtLRNMAwjidqWCux2Nq8EpjgUUSs466T8yFsaTLvfp4gzdBrq8ytRHpyrgV5iDrzSXs",
  "key14": "2hHwhSDPekeVMS56ddPubXxKgk3viLkEHVZDproPGdUfMd55c7xCZoJKPkNNL2DxMnmm2RnfhBfz6jpdwzeAqg7F",
  "key15": "3cyVm3G4K8f5RM3vFSaLj9cK5cWA3LdK3s3TxxdpsMkeX6Kn3UgQPkY4kofGFUrHcpee9a8ZZMNyopTorH8XcjaB",
  "key16": "5qF9sKgwB4fm8bRdvDL7tPoFAcjfzBmRgZKZQe8KcZGcbfwUo2c3Mt7BCfXPgb1NFgeF1vH38r2uxBkYWgvXBEVE",
  "key17": "2dNs5vB1dWFZax3sUPeLZNYgY9C9rCp6zGk9BxXiZTRTBedMEYDbtBCCJLRWyzXTngz8TV3MVU2jS8DRaYLr9cja",
  "key18": "5jb8uPw1aB4nHpTvGGu5u6acMRLcHWi5KvhUxgsnNJCU7BMYBtesTdhsRK1DraTGxbEfF5KbC9M8A8fCH1cyCH8i",
  "key19": "Uhd5fq1NNtyUKcrn6v9czpT2H8ziYMVhLj1YXtZpMvVrQ6XheYALaRs9zSQLQK5h9rH6dGu6iYH9b3ZMQuWaUw6",
  "key20": "3Nvr5dKe8hzsF4MwhQefXphunSzQaRSnQ2TDrheohdtZ6vmbYmzYUoBs8cybgcuNH1Hs41hT6EHK1MS7PUc7FG3p",
  "key21": "45Y2HeZYj2biuZB1L6qkBrgeCU575sckjn3e4yqwtfqyssfZ4L9F49YmZQMHSMhth3iCTwRaf91cpeYrtvPuqR2k",
  "key22": "PEbs96V3R6VAGbMdRsEFhDEj7BWFScniVsvsqpoBEtQwi3zeNxWoPkyJsHu1XbFe7Jb3VbuNu4W3TgBsJKmu26H",
  "key23": "4T4gHGep13BzC7ifsvLKnT25eXdU6DoLU3jxYoSrhJma8jns5XSJwcQUPPgLQyf7evP66hGiFx5cSsL1ccGsYzyp",
  "key24": "5YB1DJ5vnmENe5wpmmMBMZtDxSeYacyEJBNXJT5Z6q6ouF5zAYESyMu7GZqByxJqZBLLd372FV1KBuaEKgDviqo2",
  "key25": "4nzFSPNESNcbExuanpw4CrKgHkj6KNS5ZARhP6LvaPar6MxFbrCAaf457ghPt2Cxfg6R3PSPb6pPaUbzXRheK3ar",
  "key26": "23LJABwoEeFCppdWNSmwGip2UVi5ZESyRP5o5GCpXpfVhtgGFfTknCPtNY22a7s59kTJ7FGiSXVPsD9F1gSXTp3Y",
  "key27": "3TBmTbEfTZDh98mKsT3rd4WvBKjU5H7Y9rVazxR7oKNkD7t4LrVhpkPshTPCk4CZtMQdMRF7cUZ4u2c87KHzvYkB",
  "key28": "2ZiDeo77yzuZVhUtuaGoLpWwiG4kMbMg1phCFLcFGyhAaXT3cxXWsb1fKC93heWPdPUhYfVXLTQb4g5FeWD9dWGr"
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
