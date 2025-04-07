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
    "4z2bdm6nfdE7WNR8ex6VtFyFBci8Zb9gzZdjWCBveBDQmSqtghQpPzCRAxJwxziHvHm6Cw3Ag9Kb67LhLQyDujJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JYo2degfLUa5WmpwH5RaBukKEmDnnMNHtSpVjEeKvawQXoHdesriLA29Zpk8pmiTdCAJPUyqi3NpP4A4EZ9h3gq",
  "key1": "3BCtHoTxkQfRaL3sVVmfnLGDVgATQn1sY9WHDJWz2DBRBLkPfoELz9qtUQFc7qECUMyQ7Qc6u7A2p43pa8kFbVgA",
  "key2": "4QHw8hG2Y8R3RNaEk6idYTKNQamVkDzBh4Q77k41QB5dbcq5afxcQ7ba9Z6sAVQG4EJ4gM6c6uqsDTG1kYYvyi6r",
  "key3": "54KK7jZsCsexzbpcbR8pSAGuUD1nDiqn3S1k4WqH99zXMz8U4FSMLHMvGyJjBe5KGDUNzP2BPNzRJEE77DsR1Q2t",
  "key4": "9QqKf5BhN1GVbguA3AwTT43C39TNaMNxQjRMcazDuWTQogbdWz5j49ykv8DAJuQe2kZKn3LBDU1dYte2FJDVBAS",
  "key5": "uDsQ62esTsMhNfe31VFqgB2yV3WYvcyB5gZRH1D5gHh6yM5favWmpTtiRxfHwoveg5yyK5qpzFLnL2rynE7LvbQ",
  "key6": "vLPiYFQhsnwpE53JK3n4Ypb2hgyNbBkBajnZZxndppm4DybBBZgA1u2Vf3pRgG8hX8d56m3jYKwMnsBwBZcffP9",
  "key7": "4eRzgfEBYP8rc7EADxrrvv5yobvGqAGCNuTtqAHwU6acWvHujmngAsdEqG6aReUKBfJft8agbUFmcGqUiozeE1hU",
  "key8": "TotbN3s974HFZZggyxgX12i5fTXMvMEU5i7SGCE2dYArf5kKiLhTA3u8niKud5UZ5VHNsXsRuKSwtDva3NWpVbW",
  "key9": "g2xcifnZ9KupsfbKnsawn1NmN4JasGoBd7WpU8dNaD1qhpdypYNFiqvhk7QWzVnFSN7Xu9P22ydKb6c7c8AtYEj",
  "key10": "2DGZDPk74PyRjgX9EDjMEShszw9u6fPxPP3M7tt77ZVybNAcuAPs49dN44UnNFMx6it3bh9WLRErE9P525Vxmypb",
  "key11": "49NEpkNXgCVSGFerR7D1mnnzqdVk7CLSRteXsLPRG6nfuyk8xSk8iezztAZJ1TkScgFpFVrZwBecyp4jX2mRJ55G",
  "key12": "3FJcbYmKQYuSgGV7ZgnYJfhCdjEQCei2Zc4C1z5wpog9P4hE4p2Rz9pgk62wATe7s1iX4Hpaut4q2JjpMBRbkekd",
  "key13": "5LA2F5KQigEE8dEuNSjMMWsC7CbZk9LPcnxWS7P46GMVfRvpyvHshmCfH3FDRh49daJaHp8ZP5yxFU4gdwHTbJT",
  "key14": "4ZHCPNkghbZDTHyDWFCdFr1ppxGubvTwdyVbonAfC8MjcwRsFjdRpTpvH7trGFimXENjejmRauVLAqdBcpXfiRa5",
  "key15": "4pbgascRQiH9j3RYG4MhixEHXkYRDAgH6y7zLgbWb4pJCqQGY283ZH4uA9kHm3Th9VNFtBMMkwMBZB51ndCM9Jy3",
  "key16": "5EUEnkQqhK3XEVCGsH8nZAksT8vqG2oEjD1RunZa4XCagrJHfucNYFWzjmT9wngeXmHvFbnz3zG4KUR1i8Peqkoy",
  "key17": "2payWJuJUFNE9dcSC2iNYLXKgCQUhQnummER8BZJkk6EHQU2vZb9Ks4p1boTzRKvasZJZ7YX6KJi1tNGiyRQ3Qhk",
  "key18": "2ZcX29j1FvNKgxzJjBVKV4Hdr8cWZSNVGMswZ6xrQZMrHb7T6toL6xNCBVBfd1G4v4Eay4NMnL5qvTozSy8y9dcJ",
  "key19": "2bwnVqABy7EhN1PAojScS2JN6yBzvJwb3fqYxkicgVhUj15tk9witvAR2zbKx8TuZuraU9FVgKaRZjEEztujMX4y",
  "key20": "37zSmWSSiAHThveNHVH4tsBTHtKzjoSyrnFTxBwJqXpR61hgm1Fr9uLThpJg2bfTSSEJft9mBjxJGGLuoP3kRcDJ",
  "key21": "5qNL2eGJYqB8eE3FKkFMo2fKQMEtZtaCCpvP5wdyE4mqPyVrChYAvAXrRFcP2vEREH5SAU48k4mQgCue5h8L6HSG",
  "key22": "2ihz1vJ9L6Q9go3KuRxhRzPbhK9Bc1eXbzpmb3KGfTq1RvcMkrf5pafVWCTvmUUwWh7BesZYzJryqDcmjWimSZ2t",
  "key23": "ZqFE97EwaBh4Ui5odyQuhMcqqZxbWRkFzPWyk2AQrhryFAjSp9eTYHim6wjsVCE4Y8iofKUsATZSkEfsSmNXBC4",
  "key24": "LTcRfgTbgzZavTAxQb6bdappc8HVeBN1iyq9eapxdfZwVJ3pQZaTbya5QfCaicXJGLsxa9BV7tdDUUM5iim8wV5",
  "key25": "4TQPyyJUMrbkRWJqSCPWaxB9SsYczysjWFunz31qmdCXe61B8MsegRJfHW5Y84jCkpZ5UcXr6uon4wCmpoTW9mas",
  "key26": "4f2TZDETRKgreekTF7ZzX3vjnx67Nf87aXwkFPXfNjnPtHvS9ZpKLWVQ4EBEFf8RA22uSoTdhLxr6oSDsrgJNhFr",
  "key27": "HjUpxgm5BU7Eop14KasJeo8DmchaN9C4V5cwG96X1KKAU3hqmL9EFkvsks6uJjtyGNqoW8uLi4zf49swSiGmiQg",
  "key28": "4QmXHs55p74VadZLoDZW6fHoJpDdH46yH66NyFi1Z3vFXH8iuYAAW6vgYjanJHMJDebi1ctj8MeJpQqBLWLHqXe4",
  "key29": "4UPgCMBaVTukDFWkr3Y2Q9Kxxuz7CddNh1RSYEodT2FGA9NmV7jKnwvnfXjvMJ4AA78ZnYPGTMbPtLWMcAC7UFua"
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
