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
    "9Btunfd5h1KbjpPwCxbPfxQphHDW2hjL3GdAgDemUNuEkNKcqyPGdjpMjDGGC3u7F5saSxw4pCbyMK18sN6k7xP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oZkKfAgtLExLzHHdRiSuwaTyoHCSFkgnzQKqpn2K4tAm14DNKqmBtSjxRnfRcQUd6BPNfY7R3JxS6LFZD9E9qrV",
  "key1": "3PQYbTQYZjVAKMWMNL9haGC2d8s2pLsphuMRnTkFkm2MYKWqGfYgKddu97njHMnedRD2wxuJaBWHnY3AiEWFude",
  "key2": "3zLLRZMVRE8WtnnUAuuGZ5GC3PLEaLfKratPKgmzRVEBvLYiv9M8JHcFv6pCh6TDA6gQoGgMhfodPHPak6ocqaMR",
  "key3": "63f6Ub6nvsYT6GzxHgoFrhPN2xaBpbKm9UngjrD3vH3jH2RegFWvffWJspcQS9NhyCMSQ2kbDYxzN5fGdJWtTAYF",
  "key4": "5sX4AWLeWatSZzwhk7wx3o3PMZqRbDm4gifejCqk7JmpHw1M6ZzMng7mfpWpErbAazj1jDLRt9oYXxSwjFvGVM86",
  "key5": "5vzuRzW6SvsQ8kooz8Nz9RgpTyjeTMPLmYPviQ4Apc9qfCJU67h1VEdRNgUPzw9hW8P1ioEXCe8gJL83g7pZp45K",
  "key6": "4N1WPtVWbSqFuSEVJGQkQLbxnAKNLjJAid6LUvdzkoEoci6Cr3vNmRpJMozbQxSa3JLWQ4wUdKAn8rLVtLTBy3Ma",
  "key7": "5bjhqPALZYcYSsgp58KmEz6w11rWTHVXtVmp85nD62LDiuEP7qCHnYMHmUvDJs9eEKFqz4CkP2iSatuEakhM2vVz",
  "key8": "2zDtAQuSAn14ZAivstMmKjpjtDqHEY7hyLMDCfkteUYvtGqXAn8c63nFTx9tpCzUFnmPYTGFQ4LEJcUqNqwqqTEu",
  "key9": "2jnxzQeqnxR4hkVGVhWHEci8LQib3zeqckmvNWuBMvrrfaR46v68MyU3rqKXUGafBJJsW41NRSYZqvV4m3jffbsL",
  "key10": "4wPtC9r62kn9yv7nLaPzLMei85cSMZQMv6ZWAhRAeZL7brLmbvsUNUZfiVfq78u67pS749TdKrfput5rKGrCMp6U",
  "key11": "4DJoqDLaoqsd3kiENMWc7D5KLyxsMcfCJbHcArzpsp2roBTeTSoZ1pArpRxxU6YT6J3rbAdogNkqxYWHXKLq33Ug",
  "key12": "3SGZXA8NWffKcqDGmFT2TfRo9rebNRrjehZQkqhBi2gK5XRhusnenauvt2z9fgwftnVmiyyighyaFF4PGuoYHXD1",
  "key13": "247GGiJJrnfh8ustSfbLDo63khKx8Z7rWo1wgk6iRVDzck3iywuthchz7CdC6fVDNMkFksK5KCm4wQQZDRHdwr4G",
  "key14": "2ZQpJrhu3mAPenqqwFgtD7fWAnK1ZWBpaY7QyAZcHSyNwZ6kzKczGzeKuuN5QKYVtE1xGmgHDtUgNUz92ciaG71D",
  "key15": "2MdXtzc49XHzgDDpqUXVdw9nPVRXRTSiX3HvidZgCREkY8wWDWBMrujgHH1kU2tMMGtKxKRaCRfKAAD424yWSBKZ",
  "key16": "3bYyKfC3bsqt2HSh4etbKoD87Dtaw2LtTU16THFYBvTthtUKQiivodi8DgAHowfESawdY55J1a9QbQLrT915syBW",
  "key17": "37L72C5FcRUDzUHJarQnNFDZabkbHjaTDL8YZu9ow9vnXsiGSJbUrnXEFZBVYMoeKBfFZZdcY4tLci3r6Q1MgGTg",
  "key18": "2L8MrDCmHfNmvwJ1DHiEdKRtGvitkZNHjpXKEP6p43en8Fze2EFT1DJYUJLiorcCPKZdhHZ3A6Zkn6XUqreDRBb8",
  "key19": "2g1ioaa32k22PGWLygpFJtusrPkuG8HLyAHyzWJKsiKGBCDcoiTehsSpMinsWnBRGH8U6mkmQhZy2R2xhY6frMWe",
  "key20": "VUk9C5DzZskTuPaW8ZacFF8SNWbUPs4a1moYJy53D9wh9ymgLp17HwjvF267T1bVbckAjGtc9hHmMhH2uDRvVFd",
  "key21": "43NU9Ccv6rujNHzV6v3EpaWNufv9oAAncvjX2JaXYqCkKWGNdXNohHptiXTTsQ6qRjn3Vk7hVNj3Um7HPgrJBhKS",
  "key22": "tp33hF6UCnNLMN1uQfVnzQG6ZucgjAJLP3pkbntNJVorBAPgyAvkzgZBEtuksFg1J8p2fSSCbDFcY5bKaSrPFhG",
  "key23": "2FohHq5ebL7f4xk1yp99Zp98ur6c8egUso5SbYBeRWSLkubF5H7GRkeHkYvfvJjmdpuyZYhDDNV8rHKyZzSTMwMb",
  "key24": "5hDc9hEsSue7LkQiNK8krfAVseS8S6Sg5BD6yKQANY9r8jncsa8Pj4tAMsRuFFHLZqGTdPNofh4w1cjdrd6V1AMr",
  "key25": "4Uc4SSHnBewktjQ3UM7f8uByCYrw4DAPp1fi6Pt1PvwNunt4aq3rfsk39pW8PFg2iE3F1WRb92m7mmA6KwRh7XsV",
  "key26": "5YuzQgLDZNxQsurm5vm94Q61VgU1mRBngWeA7nGJHfsnmjtm5qYxo3sYGSBggrcUQfsLZufnfaZfQh27M1ohHsJe",
  "key27": "5HSTtnUc37psBr2iD2P7iWaNZXtEsaEWgzYGqiWgPov2vKWtU9VpSEWtnFJU3mKxyaQAKwBzvSygVGvoaAyA2Re1",
  "key28": "2bcFxkWxMpv87qiasQbAqaMTW8DPSY2i16fB4exi6BDXH4X3pcvLbHXHDwhFHF2mHxt3CoCLFLZsFXUCv9oFfEL1",
  "key29": "3qaH5cPXzFkTWk9gcU8WyCa4rLRP2yv9q5DNMgGYfpwPpKDibBKkTUTGQCG1CAuaQNo8WB9mdfuwxgeeyKQjdwCL",
  "key30": "3Ce96HeFYsLoJktzgbeXoA7Gki5wrf2ufw4bwaGhCAQk5hbG7DrPtFwo599iey1YHsU2ahmDHHU1rEfbWPRHsuR8",
  "key31": "28HKM9Ue843YnUr8xmzTWqvwoZyo8NbwZC2Hrk8fiAGe494tAbvGxshNJi9HsnwFU7cJ4VoZgYBuRPqaVkNyTQpS",
  "key32": "2aME7wHAztK43r61a6nRpoW6BQpSwWa9W7rT532RGik5Dkfgp9nHk73vtx356N3fvh7JG9mhKSiGRp6CvppMJ6bD",
  "key33": "5MtprUx2dbgbYRa51AgKRJMFmrnfKGbYXDPAFWtm4zRZKcEYxhbkqEpG9s4FYmzmLGcjLcvLtxuC16e5P9xZNNah"
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
