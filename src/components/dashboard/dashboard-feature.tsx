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
    "5vQ3J1ccbASsZRrmYtAGXYv149jBKMLM3MBqfcPFb9PZDV9KxK7CjzCRRZo5SVwWKxsnsxAJ4MV1rkC5P5WB5PSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "isAJ3KndqgcEZ9Za96Ws5DUdb524QzUyYcxP1zhc8hBCfGhfLhky3retCTFJTdevDK5rQYainwR6Y4kxRkoV5QZ",
  "key1": "4697vBfvGcYWfhDi2pADxdGz55FNFF3YQH2ePLuXz6v5QTGDAbEP4UGBqG2zbvrgXCPd6qjf3DBb5DntuvyvaqLK",
  "key2": "4kJSrJzx3oHfkjxw14TpQYuNdEksKcBxyYVsirgE4UTnJF6s5oVKsicz3aor27tPF9dTpc8QQc9KPqaJJg1ZbCFK",
  "key3": "54Snv1a3jTVaVFCtwgCMS957EXPeFvq9fMAb22jMQdSYWXjSVu6A21hgfKQQy3hJHBTLwPGZH9v2AyKMShPUMDVt",
  "key4": "3A3pjsmhpyeYWsZDmGu7cshxy5BooDaYLWK9sbnfCtrqSMTccFRGSfFzJqJNSJZd1vtXvwtQE3iUCJ8QCMY5rg2t",
  "key5": "3EpYjTmCBZqB8eppEa7wR3QgD44as9AYhAcDHGSCkuGXusdTRaQyT8WetBww5VRcLSV3dgdQhMT6ThR3DPEccEnh",
  "key6": "4Qoeav6hPszzGLFFFCggU6nyak4rHL39ibbJzS19ird8QHCHnvaHnzobYA53FpmoBY8hpGPEY9K7GCZXo9hqjpfT",
  "key7": "XQbFihryKaJsipTCPxMHvtbLCrpPBHFYjKgijaMKHGWF4r3YkRyu41B5iw8SCr2hjCR7XrD2rHamd3gfPRRUhoK",
  "key8": "3f8ruEY7idpRNbLbdhuN3gTqmTAUeF6ehkRr44WDHRLXN6mMnNWQCgJdiFLjzzUNZEB3UmZGq3q2EvvjeHpXaNCi",
  "key9": "2hmPjpAX7ZJo9nLf45QUGGwcATkJVxaxVpQCDRPDFqSESGhvZYh5s7oQE1n9x187GurUcHN8mCZcZuRoFWchaWFm",
  "key10": "35vXkBkpZYRuLSuTbNTkceT2GrabTHmCJNAZEjnvH58UjDJMDXAph3JZXWXXaeL8MtT9vTFGGxRiedTYPdEoP99f",
  "key11": "jNimWrFZ97CAQSaCKujop3st9ecxHX6hHrTgxXYiyBiVZ44WpyT5jViKsJAmciBkTq3s2aYfvRrF2VUyCvLDWuZ",
  "key12": "3o2dEfVJuPzBiyH2JNBQrj8LaDSjDoxJosRuAAFZEdrD3kAHuhuDBfZWsrA3obKdHdjxrmquPPt3fFWNRLt2zcVh",
  "key13": "3wEK7EzfPv61p9J9qKBcnfvgrydD27ZcLmoPTz6GMoMkebx4So9DZs5bpXhpa4TCe7GchnMYHHenqpH8EMCmr5xM",
  "key14": "XsVs3XZM8caxsgVA3aKtuBYbBK12Rg7j5uzF8MzaYRze789JeDceLqLZgDVfwScMgBG9dSUFM8KbBNELpGxustX",
  "key15": "3LUSXQ41iY5JpbLHmixenjFax31ghsv4rYpdkzReRuUUgs5NfTr8cEuzdg9P1WCjPmTfgTXus8BbkjCwCGg5qwzB",
  "key16": "mHbUdTuVYqLk8hCok4ud9ivxhUHTyH6S96k3yMkFsNmHNzcHhRdepoRaJdVGDPVXXETK8P7L41XCxRdtcopvrLV",
  "key17": "iz4wLV2vFbMbXSwJ67zqPmXy1jVqtW4mJBZWAaRNcEy6Lkd1n159hMbpFPyGqwbiuWH3zMaBBo2p4FvuvXnb75A",
  "key18": "4dUAFtd4cJVFa6Qvm4n6XAkRcLtRGirPFsYaLfTLwtbcWG971D7fsdQ1MX41rWnBCvk52LqpTNCBG2knKyEgL5Kj",
  "key19": "2uvbLoT8ttPrtrAzY2diBtm6SvzyWwQYDeL2BA9yyZk42gucHfeyG3wxhXHD3Kx6pubbDyxqnSBqxfPmazwCNALF",
  "key20": "Vhw8Vm487gia2aS9vkDqzwNcqLZ5937KLoLZWjnZxzDbiJiurdMtuQs63gbPv4XyqH7LAdBpnCmoyP9UXF2tb3Z",
  "key21": "3beWQeNRgPJLv3e5HH3rfnGMiv3G15YtGSWyZ27Pqsp5mNSFM4DU8NMU8d5weS8SGo9bSdqmTwgSpkTBE5F6Ya3T",
  "key22": "4upRnapP4wLSg5y1WeX1aXuwCB37gLxJRczkSbzTZzskVDErXRGW7VyTz2fpNw5FbHmoLKVxqbvM7NeD8nwupkeC",
  "key23": "4ZZpDUMiLfwJ58XmfyoMBtSGkSwWzS8XaFAyuvFQQWaJh4sd44HZzuASjDnbNfC6HYaDxkQHwd7zXyKh4kVxn9Gq",
  "key24": "5XrJEjC6TEv9tFRdTtTk7xsSpBzZxqXNeNLV1YV1LxEC6GV3DtbJnFBo33zVm2ENoVuzpLYyXTE3zz3PBKdYi89r",
  "key25": "5Xu9Af1i7LsuPqiD3Li5fzXMKSVRQwJRfi19VMKUaXJoxh4BDMfn5zdiLVyRif8Ef6Qi96ebzjrpTasVjUmtqpKk",
  "key26": "3jvzdytdVhJfwTdUT8jsv3xZtQ8KXCsGiWua2M4DkpTNVDx2FgEsAJzHkX6GhcWVV3RRm4ZChNrugeKnmKrG87JZ",
  "key27": "pi4pBd6ywAEbny9hGRaB429Wg1N3F5s32ptGheiYM7fAQASdYiwGkyzopUxfC2PvZhCVXM8SbT4gTcfewUkceCs",
  "key28": "4V4R76AvBzTxjvWcTZn2KbpeTTk3TN6T5R6Jp2kH3UF5M78DyiXASx3zyzco3xGwXVDWvsxxRrmp47FJubjueiHh",
  "key29": "4LxPB4RJRWEAM9c6mGjxcDGtmmMTEZDhz77RHnwzVLPXbC9EwwgwHkniZ6GGLLYhKDQZcFU2LdCcXGZ6RsVpM2dq"
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
