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
    "5yJmz9mvhiocorSVq6PD1hZF4JzC9e52Gm2WZhXnkJeQjNqEbCKqfSNA6WWJGPxWiY4e4NyHGkqcke6yrjXQNdjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33bZc6MMSqGGRjZ9dB9xRqxS6ghgUv77HodSAwX8GbRf2sUMtfERTzx1TSXCFEGXEpFjvRweijepRB5uRziEDi22",
  "key1": "4fboAUQ4ZuMWyCo7qguG6sxYpkT4x8weRzYh9NwLn1aQrohKKKtxrhim4A81cU2PwS4RZnz3JFXLyUP8UzoCHVzR",
  "key2": "2wRCsgjxVA4JPkz34BfcZuESNGUfr6eEiHYTjjVTRrT1BzhjEPSjL7csPXbDDiMJBUpR3mi6Xvsh5FgEe2dFfUpn",
  "key3": "4bvadyVAphuPNNgmG6vpYY5LJAsCAgmPYhsi5RrJVgkQ4AdmPw4rjqX5U1FwQ6bCwDvNVoPhyb6V8wU5GDHQToQd",
  "key4": "25VhqZ5deUs7pvxBzVyBzRWDq6NLxwTBTDNsiUk6EZw5fc5xUypYEpsphB7Cs8eKpek1LBBdSzqLKMnAE6cuJwuJ",
  "key5": "5Ar1ZjTc6bgVtjF49rJYxCPdWpDuJccecnRbGrXcUay35kUjvAzrRwUNE9o8H2wRcfTckJc6L5Qk7McgaFSuF8pV",
  "key6": "2c3HGe26UthHot4S4Ytk4p1T6N1SbvSdkRFQ9TzYkkBqyPgJqy5TA3Nha9TXKiaP69GAMpkiGbE67i47tYLNZ179",
  "key7": "5dveedrWKSemA5b5R8pWfY5fcmKC3YJoEYcDCycy5yqrr7T5TJMMka7ER4nn8X9n9mDs6QGtzrqkMGdaxS97Gxga",
  "key8": "4EfsGbNyppMJVEQwAZE3yFHu7LTcBftjfQEhDDxkygBoPPUDTDKfkhZERa2quLMcrpkHBjkA6nGNMNwXNbdm6Rmw",
  "key9": "61uFadF7bNB8wTGkS3qCDQgV3ZW7M1A4zakukVMVc7HMGVrpmQrz5Aru6YgFJy9sNrtxuH8baZPacgwwwz65Fh8S",
  "key10": "4QwxXtecvVJvhYiBkzjzYHY2LUYrr7t6JY2jr5yCUsVazrP2AZGqTP5kEirA57RZo2jwPdRaTuHPgc2Zp9WhCK1Q",
  "key11": "2MdeJ3xf6i9cxhyvmaWBBV6vEt3desTgiQujCQWsih6XHMRP5qpprCuMY78dVLd9Bj3HbZAaVX8iAMDb5GKM1AwK",
  "key12": "2ywEWFKmJxEtLFMC6RmruioMh4gLwfaDyb6wWmJegGJbAbitWRYS5DXdyspirLq8QNQqMW7PbtgFnAmAaQgzQn2n",
  "key13": "4nyQyQKdFntrfM93nmRdBaSeYyJQaj1kUYz1T4uFgmVWLFkijU8sAaHPagT8zb2atfzQDicUu4NmigrsNAoGeBJ6",
  "key14": "5chnJags5yU7zfYwVjfj3YBouvX3A9dRvMxxjPW3xxQ8FxvP2uiBavV6CJ9dzX3V2bx44jq9ugTmKnLujM8jxhgP",
  "key15": "4Mn7FRmXtdfyBJ8YY2myyTQwRmxAamatkoJKbKUHCr33rVE1A8bkNuCthM1Xmnwt5VdaDz6z8Anp59ufgRahoen5",
  "key16": "63t3BYt5ZxpFmwahK1Cp4fDzFcVYxmHhdjgpQkvUxCVp4Krf9NHXHw7EDZb8ZdDF7XevwQD1MPiwb9FSimWUPUB7",
  "key17": "2u95aBN71MM7xswRQSzzaApkQiKEfW5znB5NeFTJt8p1byvLtnFozjzdQujwyANuQBHLMKCLP5KvLY27zk138RmR",
  "key18": "q4Pqvq4F4tFh9iEGg4JDnr6uhyXu4mJx73MpKwnNiUePpRaBrvYmJSN5w3McuLJVEoXmdwjAcKdkzhx5wmX1EQa",
  "key19": "spYLz1wT4Jr37Z5kvXgGmNCDNcLwxu4W2wWBAwoR1aizWvR43UiAbCu3e7bovkMia7h8SkAZNHtibcCj2cmp5hQ",
  "key20": "5t62VcCFZzTTkeHPBeWMmeQd8Zk9nEaE6DzYZ6uMRLk7Eks3PmiRPAeTXL8ZCX1KLUwUVeaWnibhiWXFSfNbGcGo",
  "key21": "3bmiSsiTA8cw8qqEvMpjtBxe7SD3gVy9AgErWr5Fykx4aP8b13wjwbh725NEo4Q3rZG4pwUfZpyr4V6uQZBpPjQN",
  "key22": "5t66yrgQgLhtpEwFmCyUB4DxuKif2phaCVbdg9i2APtand7cuxpvDzyev3RodCrK8S2p7Qi5AmYBtz6nvEAjvy4f",
  "key23": "2n3DDrqBeHAaVKekJmH7MkkAE1e9p65YJ9aNnKpkF6Xf6m5uNB8xsy5p1sBEJPCAg5dFyzAwQZ6yuNpbpTGiSPW8",
  "key24": "5kmshv2K3kzfx8wE8dCzZmpgm82QZaAAvgcgQkQu4HNQ9aEf2Ex1trUbYucPguzxb3GYegupYNYy4nrhDoGC7fw9",
  "key25": "5751UJr33tXdjY64EACM9qRios25fzsBDpVkEGk6mtfFDZiucWya99PktXHtPqwiRXWEE1sFryHkuAgNbiLwKRja",
  "key26": "5WAK9ah97AgZvhX2LGPRHT4xxwDBRKYpV7QCYXzcUQMJYU6xUrNUuoKWTvkqz5YsuxLWnAmcu6nti5zkZC7gxDtS",
  "key27": "rjbykJw4FbN5igwN1Mkgbpw44ZEm4NTx3q1sNecj68ZwLpdvpCAnjEr8fttrYXmJtTGKe56vxAYvPJEND6spjdY",
  "key28": "2BgJ566P89vgjLFX3FWxS1wJyD26aES4yEKJDnpX4fuQTETrutnW4jQ6RXQiDJVnuqJ7r6zHg2JkqVtnRs4vDPZg",
  "key29": "4rDHTQuc3eozvWm5zS3RgY9rkH9kVpecF3JVqsAREd4GsjKf9PE2M24tbiEgVRhDtLd582S8QDcTVLd1rM5yJPwx",
  "key30": "4JXLu82cgixm57yapZefLELYUG2kfBvZUpYB47kiRrzxGXuZSoMmAKgKezqc2FTdK7gywjEnFM1iuezf3RMvGKfK",
  "key31": "45X2W8HgbcMyBeQrtCyg7WEuhH6tjsDkTwofDAiMqsF3LpWTtGACxRRGwePQF91DyDVcUSzUJAauxLTauF6Q5Jma",
  "key32": "4zPXiBVehsTvwCVw1dBZq1jCQAkF9ZuRGKLeUPKEofjs38QTXvCc5GxG3S6eGeCWwUnNcpbptHNWhoNguYXC8zRm",
  "key33": "4DsWoG5NkfawGhQSc8LdyY1mfNnKiEZyHuvRhuybez6ZtLnwTQfjzoB7QFEEqREkXzePbCYDGiZUYzndmaohhza3",
  "key34": "4GL6G9HawsYYacDNf8SeDYaxkiMvQCqk6d4RK72V4MXuQNZo4dSSnK9RTKP1Dtho3hJLRbqn7dukjkQ74NjG4o15",
  "key35": "2Nqnghtm8KrCorpJAdBaBm7oLa6wzNmFNuLbqSzLskBeFoLrMckCshA64mSw8EdS5BJSBcSjGum2ugQpgJZUAKJF",
  "key36": "3sjE5PUrX1JgmWc94E5DYSdcDbYxJh36Bo7sZazx4F315cPPqpVhiw3NPpURtJsgEPtDQvzL1pYxUGDRcASTLWhP"
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
