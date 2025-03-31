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
    "DUtAxoyJbue4AcQr3bqQo9PFg1bJ4XUY5g6nRVKoeep1ybJ9ZN4pWL2QLHVvmGw7a3Z3doYoiiU6PkB1FEBWkLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GxPpPUBQVo4fEVfvcrRbG6ib4F2Sewwd9d8xNfAdQ9bR174EEGDspsAFpXgcQTcQWURdaTUs7qwbWk2PaVTVA86",
  "key1": "4uKR9uRTN9GFBiUR7YJWUzQW57Q15ewz1SMHRcioAYJ2nRDP95msVT56mGzK75Kupcx2AYUNCZJz3rEipVpcECgi",
  "key2": "3ducozEnVhpQCBBwdv6pExDJd5zFKMkWwyWxHBEfCVoW7LC6QhL97qjDcyDdTLwBTzdA3MGWdrNZQoKpcxqSbjFf",
  "key3": "2h1EcuTrfvYfhHSVJEaXbPiv9yZSBBhMNDHERpYp2WhWZyM7G8reMmT16xB7mUiyio86atX6jvGgueLmEVGAuJrn",
  "key4": "7KfbbDHJpa2pYjrVZcN4AfDBBEHtwtQYtyqo7Za52Q54q2cxtKq5gHiUcindQgFMkUtq8hKgU2HiN85mP39gJvg",
  "key5": "5hyBerZMPDHrNkp9URh3kb8xg2kG4KvxuP4BPwPwuAZtVSCgGvhaVvhpF5Bf41iyhsTMiJWFuFiTRQbDmhPjQMSi",
  "key6": "3gZzshtZJFXTtrWgb26VM3dbeaTSJvnN6ZrJmet2XXHkBAFX5hh4r8zY1XmXJRLegzCGmXZWsBMt8aGAxnsxPjmN",
  "key7": "5WK6RurKhzvXeqP9KSRjzTTm6jjmYX4grA6dRW7PP1PnZwNR6pKAxLsPpGEoZZLQ6z8eKXbspgjPxuzZ4iN24Szs",
  "key8": "2EJfpTz6ffS7X38FmnXsn9vFtVkWAKz4vW991UCyLo1kPUmGFmXDQGvVcUYnLBcgqQjaLjzRMRZyikZxzmHmFDW9",
  "key9": "5se3V3QuC9ZqT6abnGqRNTBFP9NCFasFsvG5B4SKmuxhex1tt96we2EkEjrCs7gD97uMVx9idANGuDyqogHT4n9",
  "key10": "2XNCYbmaBwntyVJtod8xmAMXmpLAqdwnawkJmbmCEvzXNsthBg7BuwCd5xRPmJmugop9DQgXmPHG2avBNydLqUAn",
  "key11": "2UdogBbzVcRasZQLrZqQ8HJYojgHRsSMYZXdkP78khQ7X61MBfEkb4JBRXbK2MyDAvoDxJ8MDCKbxzoER5pwgTnY",
  "key12": "3ksMcq91KD6RfJXvZLxBC5L4vUtHPEebCgXV1rmKpHbR6qiLM8m9xRF2FXPh5CzBb3f8kawYvmCZ8kmQCiGE1yuo",
  "key13": "3yfoFbTAQvvki7MoMo31UjAPHsQaooLcsuYG8e77j4Lm1DFgEsepGAisqbSYqrD7scnWaEC827LAha6bCHknYKoo",
  "key14": "4k7VkYtWCK4SMuj1aitVrsUs9sSjD9TCU5wjVjY92zazKDbrGNcneU1SvMXiGqEqeSCsKMVicSPftfJo1gahszM2",
  "key15": "2q7N7jRL4nr3u2drGvMakima78wQB7GMqyRbLrYNA8xWhbw5LDLFFzYYv8w2Uq6AizkyqT1aKSTmYmXWTbamZaWL",
  "key16": "25iPRXF9Jcju2t9DZ7XeS5bGkU94Yxhwzt31qTBaJqB8F9wwm2HoRtUMZporwgY86br8vcGdRXB7dyZNbKN7CjtX",
  "key17": "PLqTnhJSAaF83TkHLAhyLitSgEVmmuzVbJ4sfgJkp7ZpHSp2tdTr49FiebJNx1WQKSG2WrUfYfgkiAj4Nn2cJsJ",
  "key18": "52cLiSAsGiXQySsuMCn9nmQ5GpqEFLVcy8STMVeFayDwUN4PjBbJ9UnQ2R616WsZemeqq1KiVy9PRbUPnQdqD6Sn",
  "key19": "2NAGUgG1yQw6uPDkMwBM977ydcMQP6DT9ujpobmtzm7ainnRMe13m4swCR67UZr6xNq5TTj2zv9rZru9D2Z5tTAG",
  "key20": "3DNFMRaC8s2m5Pphvbdp2deHMoBZaMLqw9Zg5zBFpFEhq9dYuxyDqj7FXhoTVHf3gTdYRtmCktSUx7ozaptWb7dB",
  "key21": "Bkq5tW15ZTZMi8Em6W1bt16dzs6qQrYM8EGAggeuuSSMnBvUiEvrfeqijotMuCofQ9XSfVxYS4WBPHDdMwybM3a",
  "key22": "3pUzxyRDkcsgHBBgkQNuhBJoU24YNqsXnSjdoFg1XibJVdYxPrgxbuCQc9u9ASERjojqVZ61WtCRKj13yNpu1x7A",
  "key23": "5g3WpP6cFNfwUTxzXX95VYGLmqnA5ipC5dVdy92BzEDL7zmqQeBoWZFXKmVPXv8Qh7E1jUq8qNHetEkkj79j9Ut6",
  "key24": "2cjxQ8QE3wG7WYCp3WYerzHK1JMPFr1dg7GCUYQu3mrZtsjgmMSoZDYBg9S7ZagaTcBRWLmS1bsDuSuzm9gEVdbN",
  "key25": "59pwHYbzRRHGqCYj9ikvsUKANuepqNFSYRBpGQJVUmfuUageaQwxY9jQRtKGMKiChBPjiJmgjEmM4mAfBhwgBmGQ",
  "key26": "5XxDQ3Gvhaf2TZ3RXSN5ZAHWXPG4Bhcu1Cu1y5fiNWHkf67A8pXexcM4dGUnsobioX12ybkjTM9ubkm4Vi4YqUBm",
  "key27": "BY3cMngLvmVGZLAd7ZsKd8B6dspGyCi1CVS8isLAXtK2GxSKGoJyYQq7YKnGE42WNKM4pBUPLuKQXYe5DnnjhkH",
  "key28": "3QAYyWCMQXth4rW5DUfJoh73YwdpcdZ6P72zmfBiCASThgDomUYRBxMjiwMPPmT5CiEs8WwFxCs4nKuiCwEeFRnQ",
  "key29": "27A9PS3E3XaoD9XJkVvwWdnucU1VLkQYkJ7Dug3i4yy8JA4K67QUav5LEMNRbVNfwPCz3k2T5cphHHFz9XJrZxKq",
  "key30": "3vjKtwXYYqTCEnTaGRCM52xmywkrNmbcnAKcMVHdraPDW7BgVrtrSs9ahSBEREGrpUnxbQG3jDM9wP5s5f4w35Rg",
  "key31": "2vPYu6dnLnr819aB5fyfjzbMsFABQrR5BQbBVKMb5ox9vCV74DurDErPRGQxsgKsxL1saMdVX7rcEfnrRinf9WYj",
  "key32": "5LLzHi4BpwhCQNUSd8ZgtYmM2PxK39nHrnPodEhauZCZgRDh3SGRM2MdAYwFzKp7zB7GS1jhW1thA61zoWrqau1v",
  "key33": "cVAKykt7w8ZGLBSeznS78Zd1nFdPBYQWHBFdnJDEyCB3Nfe2qUV51Lvd6z3q29pfDWBtPVixFZfDKuNZReW6mhv",
  "key34": "KYjo2oPKjpvkbZHtKcBKDeQ9SRuirW6eqbuUwgSMUU1BxeUnaki9uEsShRe9795ZbxsdCEjfrcsD5D1D6xizuJL",
  "key35": "BJiuBf4CeQaFeyhj4c3yRMBoXhwEymxmpxHXavpXFVSQSr7bwd9MxrimWaLPkaD8jmoEQSJkn5v4aV3sX2v6jKE",
  "key36": "m8djwywcZnuP2NbL4Ax4wg1z8WbDXbKr9o3Tem8AeRXC7R17cjM1WVSLPUX7ZK8fttQ12pDR6BP89vHVr6ESBcW",
  "key37": "5Vfw5uTJ4Q4B7S1ez4bdysgjAJx62R7XNUs4xxb8Eqfu7k9yeCi6jvAv3xLQebwz8kNycrDsvKMiymTMmKFcgWMP",
  "key38": "2gZ5rn1NzRddSTaDxrahoReCuaJBwQe6jbd4xtvxpvsF8hsdgXZ4vWbxsVg81Jx4kJ4CTs4L4Z94uVuC5Xxk5pm7"
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
