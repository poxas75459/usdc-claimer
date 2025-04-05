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
    "yrMNWgP6ufib1pybm7yYpKLHHazdRAxgwwoHGdL6UbPPTBTMAyQNb7kTsx3Uy2CUWSbJoQSsq5q2UAaJeqoXspJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oNoLpQF8SzKKpEEp5q7RkZPFJVZTyNz72EcwSYEEoUadKkfxFA13HEjQum7bxns1jc4GgueaWuRh2dvd5QCLvVX",
  "key1": "5fAonekTfjTavczP7vC7gWFvSfVXPz1heX2sAKQY6NuZ4EEhUUiXsPqN2HLwr9C8JDVCMWUNxfoNWLdaazbFcWn8",
  "key2": "2mp7Hrr1Arzcgq3jfAKvPiHbx1b8Cr86BYdFWCdYVWRnzAGcBK1GSJkW9qdnMMas4ZUXMi59gRPm4CSEgLL94kSP",
  "key3": "4J18X6nageGticNiZ8aP3B8Ua31S5EGvGaMktdZEV1nT1vJMpEsXtv1YihBVEX5rYLpcDdq4yFphtEmrrMMPAk9L",
  "key4": "Hn16458ebsS8M3GxA5tCW1GbmYd7QAu3ciru2BhVWiRn5Gqt2fkY7PbNdW5RH9L5ySTJTzTTDD6aWmZCEyvqXm3",
  "key5": "4pnAUKNNgBUkAR6pGW7hVmwu5aW9PLoVQmurmSMtkPHVfVdu6u5ymrr4ceKaWGbXVysvLWRAw9QZzfSs5DQwdG6z",
  "key6": "5gJBeTgFj52ymP5fhSR63CbJyMCB2ZTPj4DX8NbTr24aWYZRJw5uSCDh7LuDFSQeYjWdVRPtZuafugLfYjfBCUa2",
  "key7": "3VX2BiViQsqH6rfRbzSbfuggHw9X24ei4ovWnvB4H8YRk47vasVL978bPwExnBfiu3WBt8Ea53DA9NrQQDMj6VEL",
  "key8": "2YfyV88Z3z25s9N7RVgndsgPoi85B31TSfoErCcUyJGyRXPtuDMZ8rNej3afqjcKDY9t5Rdd2YLaqPjCb4Pck3iV",
  "key9": "2KFA1eX3c8EGzXLBU3uxD1i8UWweha9MCHYoKXB5fPxiYSNsYy5gnkkbCXFjrhaghTciokGDFQrGm15RZdTgxZo9",
  "key10": "3i7LLqFuvHqRLx1gDRYmoEovbs5ujCe2dJwKQHMkMrMrd8FiKDVZjqd9PkFArWw2kEktSeNDCgSRCmwCtBsPgrn4",
  "key11": "2WpZzoo3JFzR83As5mq6sm1kDtbBwSn1TD8JSz6EPdzVMYXhynDutGhGsUtRjVhYGPDEx47Qq6zJCvy5wJASvpGy",
  "key12": "2mYGe38fMWyQxkhwQHWNiJ7VX1qAwUL49LGoiGSVggf8WiuQCgLu5fhoVFH62Rey9XpN1KaN4qioobcENSeCb8w",
  "key13": "GWq9Mty42uVW4HZpo1PdfpT2g7ormJ74yu8YA1a855J4XKAhwYhy3xU4joVBuLPUmHTvsuQf3GDpzGryzirMrQh",
  "key14": "gzrzNHcVrrYiHubiL6yu8NhnZeMig3cKsTcsgDvLhB4NyttU9K9AjgR25yxugRN5Bx66pJgRk96XzaTg38PqAwn",
  "key15": "2YLTiEkZxwrRtqfc1FJ767KN8wcF7oNJm8XjtHqKR68JSVGdE9ReiRooYBPXmk6vto1WFZU8WiN9s9xZEt9DoVsF",
  "key16": "oTCc3fja2GnXnBBXRyJFafGc4Qsw6SGbGro4HxSBobxXNMNoxxbrHwSgXzbdH666egNHCv7FUjLisUnF4JTABtJ",
  "key17": "6wvuT1as5LZKfEDFo8bh2eEP25SnU2KRsFcy4yAYjyNF9qcYVxp3VnqEkobLCv2BudF412RfsMqUCWBMBfbFM47",
  "key18": "3DD2q6KD1bwYx4qKVGTtAAAYkFJReTmCwyFHcPxgYwwfJvkJGQL5FSrWcehgELCnDzNH9sKUAgS72maoEMLZvnXQ",
  "key19": "EZkrLPfHzNNc8vYLWQbgTnugiq77M8gt1pUht2MEqGkhDUnJfu7EUJQpJLcrtJPHssELXrknRjMVN28RhcdLXxQ",
  "key20": "2cGwEWtThxogRHA2xbzejxfFi2ggDX8brTUe5BmhnxAegpUrhTCoNrCwegNB6WRKD13c8tTYFFf4DbUpawZ8r6kD",
  "key21": "5xrc6q93LQQSvF3nnfxnaZEBUbuH2nbp86wP7mERKiizkWJWRi2B7DEfFPCFjofhbti3Seaxc5KkX4zeJTqD3jHC",
  "key22": "2UbxFhK17c5wLzqtH7k5vkUpAJfhkhBVRxVojQkLnKghT3Xk34uD1CouXQwGGeuanvAobhf2C3nrrZNL8GUfbD7c",
  "key23": "2k8YKkVS85aTZh6fCfWHoipxrZNg4TKi76gTnPbAH9tTMt8VL9bPp4ABFtxKT1gGcnjJEvRVaH7Ee7c5ehuPR9d6",
  "key24": "23D36bucJhAgvDHS56KRi8S6qdW5sPfyHCDkE9zZVtzfiKF2Gm2QJxQFtRZBcdvxiJtQGXUxc7A8YzyvwKHfAha6",
  "key25": "66xSteMBah3QrDruBin989VKiBL5kaummbmsm4Gw9318Gi3ZSzo2EK2PW8nzuKBR2eYZC8L37npMNMCNYJ719zqK",
  "key26": "HB7pgYfYfTH3eTtrU5r1p59F75atey7WzwgKqu8fSN3w86XtAjMXDhnNZr6dqUtjFfyFDxkAeRhZy3hcdcF6hg4",
  "key27": "3aNZVvv1GfBZxvn1BnkM9RUZZxwVzGYiTmqZgoMj36fW36oPTeGRNEpRXexyaP3XZWNxWjtywdrKrwBagmixump5",
  "key28": "4ixti7CXZu2BpUbPumxK5C2MwV9ZTkN8QTYphDKyomxWFLAhaFatKCE1YjuQtbQeetbmjRu7Bvud1A2FLCxYeQus",
  "key29": "3AZBwqVHVJVh9ZZqbhDpwt7R4BPjn91gJPhMUJ13m6vR8V2R6akDAkuLa4UtaDGpt9mJcLbUzTVm3MZmXn8CubPy",
  "key30": "33Hm5jAZ59EiD5y3pZen83wk3mVq59BiUu44rTNnbsxMZdNRZdkWEzHd9ekEAQJQtZvPikvniHbR8Tr4Z1y8xQVe",
  "key31": "e3FysceueSx9UtKaKT4HUryTKPHgVVUEMkE6L2M9mEEJ88Qy5JF1ysH2SZyWZ81vafwh9VTFs6pE2CNyBJpP39r",
  "key32": "znV78BNwWWv1jCQYAzzdPtwtecE1GAPwf5GF7KvKzfkUgEJiSXSaRUYzNq85uxqFWk6d1J6hotdpf722cWkiwAc",
  "key33": "5U9hNnspJo77gSfDM1Wn3vxJRLcg17tZNUGjNA8XQajoSvXGYjDV8zUEj9ia94dcMTihmB4Tj7HZjvKzb9uPaHun",
  "key34": "4SNuWcgEutyaNkTpNbGz5RDS32DQCpacgEzFYco3SzF14SoH7ijg5uvNxTsP95hd5NPsVKJ8GNxhoCh84XruXSJh",
  "key35": "5uUXhrq6aH2fbFqfhq5MBoAuW7Pmm53ZLmuevXEsUY847PkvjK1WiAAxpbuzyf5fusbNp36YuKpoc6TRYcknFVya",
  "key36": "49dNPw9a2pXS6jnNhZkrhx1ZLPs7LZF2Mto4PHXPbjGr8UUrn5kdbQpucZ6nF5tqsfr3C24KSkEZhNpJMXjcsqNa",
  "key37": "weAik91m5ro9WgtWk6d19nYqwuvQ4w5dP53NJ6MtR8Gm9fcGTsHsibGXCpNxfNz6rai3PatgG4fedT12k47x29U",
  "key38": "33QVPxCeRADrG5ywBUTPy6W3a2dkcsAodxzDyQraXErxRyex8yD5RygD1VoGWbppBbMU2f9ZAjP8NzSV13ie3BtT"
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
