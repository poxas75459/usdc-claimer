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
    "mNbTdb8WGMgTAJ9dXdm9R3Bwfs8Ar3Q5fwquMGXbnGpzx1ThPopzQYdWedaM4vVQy8vfsTsMGCDMWPnSsiWmcoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YVPUYBDDaD2EpmJqJF1YprKfJU6pnAcRieAkuDGXy5oQhNKQftHdz8sTaM6mwQD2nvW8A4K237dzWs7GwJeZyE4",
  "key1": "2sNkfQZaMGYT6vBm4jjuuUXoUfDEBXFKfZzRfhW3A8gGcrpEeaFhfZidq7pgcXi2mPXdjGWiYq1rAN9h7Bjr1EVC",
  "key2": "3fSNp4sx1LBZe8XksjaLUKoHts6vo9UVximwULA354NmgiHPkQsMtmEPSc4Ne4GkQkk96txZtuPZhAr2eAdoWb4y",
  "key3": "3tucZhe8kJtrAVaofUGyQL5oBnM4r71diwKmt7Xxqv1QQfR5hWEJzaTNU7yvinoqjjQP6TDuBzGKVu3PhbWmatdL",
  "key4": "4qxRgk5TCKX1WFS8hELwz6zc4nAcXoNbxD6Y2NMK8GUSnoo9EzB2qvGwiLV5iNReNHZ289dTPNXbdKrBzuDV88mE",
  "key5": "4z4RL9FLoFJViZPLP7d3beR9K7KXX8MNsC7qMckLRim9woiSYkyVe7RdHimH3dsDEteq1suj4waQtkME2ZDWctuJ",
  "key6": "5TNJXx3XoUWMZE1Woho4uSwKXufo8xapWubpzmpdicApnP12bBTM9qJCTA43FJoYg2dBAojTGfsyrYX5yFi9NBvQ",
  "key7": "2fyjoBq9E6iaLvyhZcwhEZxnyaKGokKPL4yCNQk5KSnzjFJ5Fm4c8BX9pVgg63i6cGkkEKEm4PRdvN565mddQEjt",
  "key8": "31EdAEmHQWdN8XMT3zWsShBFD81Ltzz3YKpHBjNScFS7WquyCpiNw1CNkhKVtGWngUVidLicJ125HhJt2d1v43tG",
  "key9": "22gnMTfiCTqRKESomPmFVrLsc2gXy4iuuqZw3mB74mfxXc3PyNRfH8mu6gzU6B8idHrRZLA6mGRVehBZW8CMBkFh",
  "key10": "34v5VkeoKZg4zDzr3sZAXgLJ6LABhBYg75BvZCxT96YuxQAdCDjLv7MVQfM8bpCivLCAESe5XyKGNSTP5pcrS3Vd",
  "key11": "48ru2rqx6QhwiZNoJ2yoXenGY33apRguFXgPbYYWPSe4s6XGnJN7FLkisS3J2vwXy2vzo7tkt7xtxmTgMUBcELHT",
  "key12": "zAGJDdYYJva7wNFkuwkrk6DjMZaEPPY1KjEMHdUuxSgQw8quzVdH3oV9n3Ze9CG5o6DxdPs7e4fMMTDrqLmx534",
  "key13": "2YFTwFXGK8oeDcecYphmPb3t42Ko1rpphm5xdu93hsicnxC8bS9zph2GyCeNNpfP3qA7vKFvdfGoa2FyCcCH7shY",
  "key14": "26ueaBK8q5mTCPu3y6zezUaw3SLwdDzPDZMMYgb6nH7ovJn6nHQw6fvEKfCLfnJzZcEQbJ7ZE2KNDebgf9VXTQR3",
  "key15": "4NuiDhUCcGoAvk61rS8YYxnpoJNauzva3tWroBR8xzNWAYa9MEaqbZTrctYxFHJ8YqWDzU3US1UemdM6m5VoYBRD",
  "key16": "66SRQAGcKNaZBxvW5xtjKdVvnAu9oPmnTozmSmc8joFk56HYUtFGFSrWCPkbTt68X8XUFsZ6vnzSedV87uhkuExU",
  "key17": "4kBXuvKNpsZ3r93GThfPhZzL1kiLT57SA7Dtd2LJ7xdLVhjvqZ67PTnQgYqEGNLnyMAr11kHfJkRGY59aH9rMhYi",
  "key18": "5dXxYHq4D9JZ8dUvAi4jX9WsAJ9PQdMsGPni6FsjGCvKcPruXf2qvJQ5Euj5aKv4pVWeG6xTQigA87ZwFRrnDocJ",
  "key19": "2qN7UU2CyZx3YSjPaoRYQcQU3YKx5GuE7uiW2Z1tZLuGY8xFpVMAtnpcJU6mRP8KKzBfiJPVYhYp9599SaUBcBJt",
  "key20": "5141d4JhSqFfYQFx1tETGLjoFHKa961KpGNnuNvrLkrvuakpjpAdFQcKN9GQhYACpWNBAAVGbiNZZpChpNWCdf7v",
  "key21": "2hrSot8rE49ke8Pdvtxg1oAvpTophoyc3YDmVvpzCP1SQtS8GFbSyk1rHp89xMbLN5TVeteGwZrB75ttUN3sEXRk",
  "key22": "4kqUsWBuhxHhxxNgdvPC98KZCk3cMQByxMUd5do3GS2tECwwfbwHtqCoRzRyP2NgZpNVoMLtnoeCKns1wc9VwDDJ",
  "key23": "5DJKsZzVWSfhmtQaivyU5BFwoFgfkfgQUQLR11hmpJ7AGnFThjS8m19LhuqMA3feZtZJNMxeTwDvDXTFGDeTagtT",
  "key24": "d2toafLTBTYN4mtKzy4QoWEAkF93UhJSYcRybQcLEJRYKfrY8G7qh97qxT4YUcxUDnX2GgU9SmRerASEgLXhGt6",
  "key25": "49mvDbMWm3posKYQCNLnLHPrLh3486zMkyeywB7HyJmyzQa8PGk77nhu5hYGmFt3rbHSW6ZMzSVGzi3TRpTaQCF6",
  "key26": "9VacNeh6BA8nK34ZpWKrxtjjnq9ydgSEqt52vm4AsYewz23gyUbmMBotBQ45pSrzCV2GfcTpwNihxg5fSzrj9Ut",
  "key27": "47GrFf1g8eZRfd134uvGNwq3Mfpuf3xGXeXr1AtdFf934B6uRoKyBq9xc8UPtT74GGVaMt9R1waLAyBLMkYT2bXL",
  "key28": "4M8UoFeQyyCvzAtctwDyceH46tUVaDYYaw1ui241MiBiFWPr3d4eb1gGjuvwogfeSY3gVgRMFxqqMbFhrAXKJtfk",
  "key29": "55bQtT5qdCKSJX6mbXbd73ZTgfwdrMJaQpDjEB2PLQaFgN5CBaSBfSD55tA7FFyrE5Zjvg8pao1HHLwaBFHSBVud",
  "key30": "grW76eWqxB8oxk75kqaic8GN6JTHbhPfbxuhU81QwpvzF8KFh8edhuHi3hFep9YQZioRhXNnh2AwAy6aq8nAx8Y",
  "key31": "2idhZHLGYBJdzdzzfXYQuvLgBGZkgnigeW6bsdLVswFd3MxHzsMVwFPu5g3be1ffj1bFcUvN4Euh1wygT2Dox79s",
  "key32": "7LVWkuV3kz3bA4v4mJPtG1zAcdvmuaSrcRGiySEGwQqnrQP1e89NWkXmvH59NWgMPv6L7tpiJFHNLBzCbV9EL7b",
  "key33": "8zWTvTeLFoo7aCRBhMkvSvRT7YwBsKwf8FgK64gHKMwUuUGodcDT5a9pzo4BJk3sXz23r9LNQkTbCWqy1XmBSXM",
  "key34": "2qdZqsd2LM5fpKcm1i1w997Vk3R18KUNEXVaHx7ULbf7CEw54cKYv6D7GkADt4vH5DMSYhBzYsvvaUjDGXbX7PcT",
  "key35": "4ezri9VqRTy4PeSqHs12WrQhp9LjmCbuPgsWabc5QGdQiS868kkaF1AgNdzbca6cgJxq35FuW8GMR6wXtBZaH9N"
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
