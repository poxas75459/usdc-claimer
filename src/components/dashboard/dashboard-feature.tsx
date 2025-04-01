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
    "2NGEDxroLhZuXKwNtAH6fVbdeyEWqaAm1nzt3nHg3mK9pohHvKtYyM6DZXMrM3WE55sBbw5CGvbqpDazAofa8hgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vYe21szJXJpU9R21P3gft7pGXMNiEGS3Dd1U2Cpwu5CZBH3UNucBbE694Pq3Lqt4ac7sYsBMV6WLMYTcWujK2z9",
  "key1": "33ZupxGoiBnKA6nfGDW6Wp9sJYgeQE3QPfsiSBd23jqNuDzrzSJ84ApZDm7bsuYfHdsf1PLPnGobcyvZAor3g4aS",
  "key2": "62pagYCo1nKWRG5RY2m1hEwMaBuLJDS7R7PwhwfF5PnXB2YZxkmUPj2yLc1P3siZqX5j4FtbrSyRgikqvRGxSiCx",
  "key3": "357c8XH186vBAeFGy96JbQhK5BF8j6zGVhRmntCAmB5NehS8nMHJURoDzwdRrjf1XGwVS4qZePJGuwTWrqdn2oxF",
  "key4": "61Yys9AJMy4Vrw4rxf6T2x84ZHURPwpsa5KTJVXHR25acgEptV7HnygNVPPbpJsFPSGLJ8LZHEpovUfFMpb84Xz6",
  "key5": "5BUHWXhb5Ej3twjoTvhnSqxxAdsNtTazobn9rjK6cFN9KMhiTtE8S5vasxz4itRS1t3xEiFkM15gue5L96wUSbdy",
  "key6": "5NcBVWXQc8C8xrTGS4JL4H2X9Un8Ed4SiCwG1RuSDvcXrRXyqRBVgkSQ72KR8sgysNQ9i7V2cPq2qgNUVakFsUiF",
  "key7": "3HZ4Xd4rttrSFXPMta1WCXpeznoeYkZ2dnxH4ESZdnTXT4JvFwK4VzNbdRVJwuDDDiHB4uHQ1trrzoxo2YwJdA4j",
  "key8": "A8wfu8aEU5QmDpDJxuZsDDLWTK6XALEfEqa5R3FbrmbMBbYXmm69C5GuM4evsfzZurNA6NQiCsnuqycSurjLSMf",
  "key9": "Wut4wQv3iXyTdbh9Yecou9tLRkw9Qdtykfa5WBgoMvZMgUvYsFHUWLctQFApKvBSTXy5u4EQR6RmxskxmEdfk2Z",
  "key10": "3sU1qRThwA8WksKBvxxGL95xB7TVYXjHNMRu42GBhw6uEdQaxC5K4KDztXHTVbi9Y8P8de4S7zXWG1xNqT6Mp6JQ",
  "key11": "3pqDNsg1nKfvU61bzvoLaoh9TqAZAAYTXSHmf4jxCCuueUhQeh3VMnJypBJpJkNEVCon3ne6iDeeXyKbsD37C9KU",
  "key12": "454wt7Dbu7QD4wj2GubNNfyC8kfsWg6Rm48yobXfMPB7dZw673N1zHZdsJBLFNcs9uXud6qZnCx8FVoxazoiKnwX",
  "key13": "54QPupiwp7wYJNZsJ2RY9CNdXmXG9prhFtAfUrQ6NHHTyBDek9vw65t9QN3oWke1qW1iYWZ9fV61iNPsRZ4zjw11",
  "key14": "4FEtKMCcRCcXRiTZAYj8NmiBcCQ9qfaPEwqM3KcRwPRbAZRFJh9TyasjzjdKBMC9CrZD8Pmr71AAjUzK5rKFXwkN",
  "key15": "2kXhbRXf8PR7ixqeK77ukJ7AYXpFt8G8UjxspRag1rFgbuN5hqxT8zNhuEFCHPSB9onKjktkkvgqhLA8HJUtKd85",
  "key16": "4y81Db5z6E7iWmQmZaJ5NSvLFiKCcH6nwTU2dXtErkDV9kq8GCRyFKVkBnkaGvkektzJhh3fVYndKcXXKghrJmit",
  "key17": "2j97fjSaXEXYbcxEotoN87EMGmr6wqnbjsWRHY8Q6KHifmAbzFFKBtaYQVGHRgE71S54Acui4if5RauWDgPVJ3uw",
  "key18": "5xunhfK3i8ytn1tpV7kerqHHEk6zAkKWmnjduDVZK5Fsmr4Q7VVrTTbyCCyyr5btu4GH5PcxLtpt4gSW76wG95Uc",
  "key19": "2g7uTRPh8EwriHXjYbQEQ8n1tp3antQRW8G4oL7zEr3epiNrZqYqV1by18quuqCPWkqXdYgWju4QS3VbFmVKKRyd",
  "key20": "64TBYYoDph1dd3deLoKLyAFcgmiKMCoTcLHgfASKPGhFMz3QL2iJXEaN1Bb5XwsGChRcZXG2ngwPR6RwY3e8CHcr",
  "key21": "4jPj3SNrsh4nn9P79BSjciuPcL87BRRaYxHKPsRxzEjr4PZwn4xJKqkLS1ciutBmYuM6srfQjs4Lo6DNqN8XSTuG",
  "key22": "3CNS4PNTmgjc7rtG6S2w2wCZijzo2JVbNNKRHQ1635BBXDGqaogV7ANRRXqdBWcEY3FzD25t9eCKCe28LE3sDqcc",
  "key23": "5bNVPk2ykq4wL2swWyZtA6GbBcahuHd7Tr59yifJHC8oUZ1AmjLUCY2GQGb6kZNtPisUSGNVMCUDgDRD7Uwhc9d1",
  "key24": "Gd86NpybqNbhEQcA6ELykMZ2BPDoNTU964yuZ3xZbaPPPjNDLvtmps6XYp9ZREN4r36SAAhrqtVAWaTrcoVAXhu",
  "key25": "3hjgd7dNdC763U3ezwUE1yevuRfrTjt7fe6Dsuor5AhCDNrnhGt6cM2fYrPf8fyno5TMSrGRVZz3889KoZDwDPmV",
  "key26": "2A4wLP8fa6W5tXc5zx5WDofLoQKZnq2YqZp8smgmZLD4punBiEduR1AAyqC5u7TdxZJwUZf2krgNSE2UuW6DwxMX",
  "key27": "2Ec1Kvwe7byEShW9MhtF9bARV3LHUVYsVj1op4zqRzuFSFqrELkH623d8xCXTenTQc8eBYAtZPFkqtvFXrURBXoF",
  "key28": "CJz5svxm3J27E6hXMbwncC8E8fbVWsZJoWhwkmphHkKfhDidYFg5qAcsR87S9yVrL8NaWiiY1G9w2fDRMLiP4xp",
  "key29": "pUto17BQii3ByFcWUf9u8yqsi8gJEB3zMFtAvEf1ncCJsZskUtfDbAUDo6QSBEgnPk39dJKmh1REMDvBHHv6aGY",
  "key30": "5X2wsgGnaHAMWgHHza3oG5Ggv7d4c1mkraA194H5tLu5WVedbAaiRXMfPVKYMqJWrEPBjeUCCWSykwvwAHyMoLGY",
  "key31": "24ac5UdsJkNVxN3ESwX23XUMctwwed35GnzVZVMRfQUjXuTSzV75vUFqiYtuYVNSPxpRjaXjgMJ9xBuiutcEQgss",
  "key32": "34nNUtC3aR9zu1Z6JnLrJUh14akYXiPcCzMGKfR24CFoonoCYDn56ex1oWmTxUfcYGMcHZyPMuTVuGcdXz8xcACy",
  "key33": "39L4HmBjYD8VUCMsKQRo4b9y1ZmdQMBgJjsci7QuXd5fk2zBLLYz5J7RJ5xAVPuWSHNPkNVzHWy9A6QRp88Bjhj1",
  "key34": "57u2dFzgzwcUEzUSzf42nAZMBYv3SP662nMpRZZxgaH9qcjbYekV6gKZiCMU7EetKNS5Ai3HGPMq2Xn8rMFSebpN"
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
