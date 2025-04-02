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
    "36MWP4SaxY9LyS5JWc5iGvkQ82FZovckJJyEM9rysxoCX7XeH4MeZ1qL54pD4chJ9BKoYmDVP9nHEbe5dRfDDiqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jxi73qdGESERZyoeejQ7hCu53QJtEhyLpgTf9K61j2LiqUrYAkn8VFCTKuFARxoDYiNfN21kTmRNDx3SjvyFqoV",
  "key1": "53Uk5cEbJP5bsRHJauMxGR7BKUfXerCodyL91JbnZvsDmzGPVofLB3U6X33WHaD8nkLPEqPnv2g14UqgT4DXsB91",
  "key2": "5crJ2R5MQYRm4zLTfLqjWppJsy9j9BYLjYTNPaSy3iEKZDZgGbYiR8nfnPmY5ppnjhjkC3ffnshwZXMdkw84EsCk",
  "key3": "2pFaRC9DG6bGpzuVpM3tcrpq6NcYU7GWwa85yttywmj7dKNrk1Pz3VnspSkzrS5gRuG6NgWWTu9QNWdT9iosa441",
  "key4": "4LkqPBaW5MT1t8xmpMjMZwncS1YXVjoJvaqpZdfuHy37EbsSVSbYxjuJyqdEgPkobNJYTD9Bfdj5c6Swgpf9MxRz",
  "key5": "ANoL6zFDc5HFa9UJnm1Dcfi9xFV9a9NMBCZvTS7NxSYrZScFgq7CQcaqUjPifo2VN7Ez92gVUodtfRQVAaxiZPL",
  "key6": "2Y1vG758gX61AhQTvW2DDAGP4wywVDE4xFhEjvfRhutUphaEGj5edJX9XrabLajGRNX2vbWvnQeZA537psfXXGKY",
  "key7": "4kbEXiNc7drKf7n8LZpTh2k4BxKFUZ4dxM2YwZMiEYicSPgTMH3Fv498btgGU4JGBzUF4gn2cgXuqPdvZNaxxou4",
  "key8": "3zVh2WR3QNkjGDjr7Z3ydpM8z8KR3t2g5p6kLbgagodP2MULuAajKMJAvBoMQUxhqhywd3hs1Kk2EiPL9A4j5ab1",
  "key9": "2JJnWC3Pah4Ztd6V7pGpingud2BhuAhprbfzSFDQf63Gq5s3uZBxotFKbnySE16m2avMLd3qPXr4KzbsN9L5tHZg",
  "key10": "4H3BW8J688oBmBCEVMJKREGwrCGoXH4Zq6t2nhF2Rzd2hiaJD2cmNje9oLHtqg5Z82DHQkkosyrYh9cYDFt8iXzr",
  "key11": "5YypDbghM8YHLXryPxrr3SwDZTiRts81rTVMNr5KtRGXvGHHtTZ2793xwryajPuFrFiQBCJh3DFTX5RnDefVjBAx",
  "key12": "4f3RTEMiiCYTeHzKeK4e2FcmU2jDNC1ZtTRcnr2MxAXJntQHoWJbBWtuFRdpYq44BqvF5rXUeYUxKAe3gAqFpmHt",
  "key13": "55KSYTE8eKt7PFecSTQfeLET2DM2DePuXfLeSy6nAVcxExZfyDSFDnmfoZmypTkcttbRJu1pqJqrFkCfzodLQuo8",
  "key14": "5zhMNDUQZSSBCuGgWNKFG6DeMmpYwZShDs3XWQxq6kvmXrCxGe6jDMvXQJVmL8upkTCNFGvxsKghKJZ5H2o2w1Cr",
  "key15": "2RWGRu7n39SPhPfpMdRcVUzDasnwz5q21Qv6JBDqKGmnZsZz5JsnJbisgU5ETN6m4RQgmzH3UatLVetLtNBvZybD",
  "key16": "3Q1cp1ASwGeDU5v2KggsWwjuC5gtGPBeYn3hhkbVv3mUBQzktTHoG7KNPLxBRuXZz1H6S3cc9zbgUkh5JKiRA7Wq",
  "key17": "5UfTkRDLUagb2RTwvp64NMCLMeM6EPQUgi2HQLuTn5fKwbPHc6VUSCaoPD3SgaGZZ84vtb7VBCUaCzdu6eQ6XGDh",
  "key18": "67d5VLa6Qv61gw4h8bjMv5heYTbUAMAhRXe6xqr8y26RVnAsZVbFMgD1upsKKyyiyLXUJY4SgibwgJKFDHqCMXGK",
  "key19": "5qXRKt6SgcEDuzz1QFtC8F1T57sK87RUP59yzRKz3yr5PorPaNJTQyT6siC1UQhhMx6xXPT2kM4ZfoXqEUWRbQvp",
  "key20": "33iXfskKxeBSfFRLsmpZusauqKTNwrr9awW35Fo5dW1psYUYZxjuo5vVvmEkHJJDrkxMzTXgSdK52KkscY6beUtq",
  "key21": "4p1gnBsaDop4FEXnNmGKSwzA6cxtPRPnFk6PRRXBj2TahTrcb99stBMa5amLZikXWXwNFTaZ6WPFdFHS54Gusqtg",
  "key22": "3sqwm3TAZ812F28vGEv9B1wwCFrtnCpTAh1Wiy5FppM6SjGPPf3cdTVNx7uUhNyttZCrFMCsiWKrNcUtSLTUYPGS",
  "key23": "5aJPFgfF8JP2zRcE1zPZ1b6ZukiPcbqxyJDtbAUqDnGVw4JAuwDTZz79FpKpZjVzg8vMuhEFSVH9TVno16sSupUq",
  "key24": "5tLyPH9r6soh2TpbjAbjvixgW4NJih2v74b4ynwvWRrnQaWrnoJCsY5ujLGgbkooBn4cHqg7MWJgUJkEGnMnH8gF",
  "key25": "38d8svLihpHTfYoHTb9uJ6Tb9zdn2CNg2t6cRYunoitxmczVtaJ7LJnCewoSSHDCaYgmkWMba7bSm4gHHWbusNx4",
  "key26": "2GG1yHxHR26dh4aJ1sJwuTYLeJN5SfHHwHXV9mZFZWV4mgvAKohdH6szmwYvnpHyeGd9AsgJSyJX2Liy6RxB92LX",
  "key27": "3h9FsAX1m52esPMV1bDDmqyEg9jwDanfKVTYJ8a1icfcJzdaQCaNYB1Cs2Cxk6mMUAxAecAad1FMRwRTAuZtKt9j",
  "key28": "3soJEkPowDyE6MUCWmxW463EQT38qHiEC1PYMnTNMV4mqJE41qtvjcFAcopsQXsZRwAGEmjeXK7UU5EoSPpra7Ge"
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
