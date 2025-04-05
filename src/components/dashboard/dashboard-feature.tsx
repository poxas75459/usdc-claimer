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
    "2XAqu9MkYJ61Tb51UKE6DT8E1wrNAA7sA1a2nx2cb7h9xhHV1FpzLe6JTSDbMPTydKnQTUEJzo2A8FshJv5joXoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bHeXMk8b3mSAr1LMgjoEtGLSFY6B63vPePBCsV4DRMSRZDyCBY6P2pkTsSJi6oFjRTCYxTSu2LCV3dzAeEAeTq8",
  "key1": "fkwdRRg9vEQEgLunYswE12XYLSSBcvVFyd5VsTRBqS8WZ19XK1VixFY3wqSe9hBFkVYVasyGeP5bX9ovvKdHs1G",
  "key2": "3jP41HLHEwB3sFtAk89ingxJHQJrWC8XmmYXjC9PzMUdFM199Yjo2L7HHT1TqADzi8on8WSPBn7REZvXwr3wNqUM",
  "key3": "31KytwCJns9UNzk8NCVoqW9fW13SNgDgN3NbfTrkivAXDgxqQLsQzWMdqe9paUQCyWWmh2z88btWxka6Nyy98z4Y",
  "key4": "2ccmEvAh1R8wrn36AVriyFxJPk6L2svCHDPTGcxZiAvwLWYjUSogJaQXe4rpUJrvUs4ZhvRtRakbQ2CDid597LQf",
  "key5": "T1F8d5r2MBQh6XNh2hyXMdU9FSEpYKRjP6FqVqc74VUbXPGg9nz9HvAbYPsys6Mty8M5rWppme4b1H1crUAjkfv",
  "key6": "4b6jASzaDWNzGV9nUxn6bbLUJxc7GoVdBR94D2ekWRbR6c6U4HdmjsFEo4X7f6ajAnNCqUWtXatKzztLNPBBBDSr",
  "key7": "2ncA8aDr4rk5XaSacS6TVfMKficG72AQj7WiLn7meCkrLqx3or8BioaLFh3N3YHEZs3M8WbavPJVAz53AMe3iz9h",
  "key8": "BQjuXCoPGpfzKWbmP4ee2W5u6oBrgiciMAQMgb9rXaxWfGGDRiBHZ7WV7sTPTMSykywvoC7ekiRX8xPx2h1TNPU",
  "key9": "4v9kcxH214fy3jnMi5Y66Y5Emi1RK9J9hYBsAayfwzKS7FsRjU9cHCXkTW9KwPdVspzsVPXH3KEt88Hvraja54Rp",
  "key10": "k6mwbvAEtwWtjT2XH8TBAwYrezB7rFAMXVHLeypVBesPuEvx3rJJ6ByKyQQpYJwsPoYczGn6y18PaKFF1p8G9Xj",
  "key11": "2EfMkjeKNyirPjnLt8k17ZKhY1mFUivZUQdM5oyuDjpZ1vpZbHcPquyC1ZzyRncmu1Ty1Q4686gwV6McTnQ4zQ8d",
  "key12": "ggGeXyVxjgbrxoydGKcG6C8VH79wejF6ePBanvjMizvFp2UE3UVN29KhW4iwWS98UejiYdDKShHV1UiVNxESgUb",
  "key13": "k9q3uGdtxcmZENGt9Ukrf6y6NxnrjrHNDnFVKWdo1q4M2Qa9KrFyDJn7RBxa5XQSSqNu9Vob2wX2qQLRZZBQe6M",
  "key14": "9tbcRiQ8aGYC8C4kAjqmjF2FzS81YNnAYSz5RaDoiRR3FDEHEQzakpZZ2pbiqsEzagq7VrVpbAyQFdq26A4Qqqo",
  "key15": "2L45PJpZhgaboSotWNMqvc4X9YgXpugWdKMMbBTGkyiVDxYECrjkDR8yENqJUEHFuME2zhtXrP7yLb2iDs9W4uNi",
  "key16": "3fadVrXLrkF4FiFgz9c9ruZuzPhXei91UnjsnpEkCcm4Za4RTqWtC3kesTQu4Pg5AzAsPZyi8vNYfZYgDLr1EbFb",
  "key17": "9JZ4qFqttMhFVh1JqdzuSjU2MXgzTs5r2MHfGpnH7YG2HQNBaMQ9VoGyA86xz7t3jiEx7TUNLgvi5WTknBvXAPS",
  "key18": "4yegfBfMoqsbaCjqv29c7vRvLeXzf3L2XsQ5EfqdUWYXGUd4yBCYLJE4SC9Cur9ePvTNQUih48TMh9nTk5rJpjNX",
  "key19": "2JPJ9Qw5BFxtaDQqkSSjPEjuQZyWuy4Yp62RDCrkSYZBKFp5HjVzNqiWj9TXucAeNpCXkpSutbjVXvJFUrcFB81G",
  "key20": "7Bkevf2gdzd2VQczRvWavfxmvsV8hD2vJr44WBhz7yxnYRVvfxizykGc1nqiw9iPfySsKa8YEsmnsMc7czBrVqU",
  "key21": "3jPdUtsb1BUsR6GPaZaXZvWRaBSRQYNMEc1ttnA398ZK9biKLMyi6KfCiZzyvEGWNgpcyBNSb7mUWAainx9d9bK9",
  "key22": "2TcoUnJ3jdetCPSm6SKyvRHkNM8N18DjMJXgXSCTTrisRy3S2ee7J9frmPrmiX8pNT3VSn79TtHQFhrkFxvCKguP",
  "key23": "5X2mVnVeVDxKksoKrmYpoz2mdTsxfPVEsuBQssmUMUai6RVEFuo5C1vhrqn3KHs4UhRQp73M9tx1tTCERFNCpkk3",
  "key24": "584uSrQzNMXzNVg6cTCvv51HPk5h1camMTbvn2rbxe2MdALPeGydXcptGpXM9WGagmDCDRNyDcwfkEiHGKaStuLJ",
  "key25": "31UrFWkVBQ3LuPpcWkv5jW42poTUjYqLmB5BxhJb9pA9dXJ5GjEx8QoWXK415pXxXjKwv1YRSeUAVMvCSSCJmx3W",
  "key26": "GHdnDpntFbiqc4PP5JMVddtWTe8dio3dRFfNWdmUWExxrRQjoMYDsH9jsTDRS4fEvXrVgR8NBbWdP5e2kUAUTkF",
  "key27": "4Hwzux7ApK4tPWEoEKR42gyci8bgujKehhGtuq9htkbFEfM4G1KYfqH7Gx6NPwgqtshT1h3aiEfAp8SrKihqfzUK",
  "key28": "6Lc2eyBm3U9ym92QUB2q2UpAupz3MDAPtHCKFy1TrjExmyvpbPHhdEGCb273EbuRgx3TcP3ddrvNabXsfPJg2o3",
  "key29": "pbFMDogCYD3MFd7ayKa6uRDqr2bmCjkXWNvDboKAK99TeqsVchzQbe1wUXwb76JGya9L95myPvJShcGzE6X6hLj",
  "key30": "2Es6WEMZ4xZUjuh19hdAj7M4EFT2BXpDYNfsCdJJ1PEw2CGnorW3tfQopNciGBcHQDkUrhZ8owmkamzoDzdTHGQS",
  "key31": "5JfZDQPmt6JjWDtd5XwbmHkyfA11RSbFCk8ncYtKRdRXQ7qzDxi7dUnzEDJrJ5Qfbzp1TfgtmbNRxVLqNxrtwyyH",
  "key32": "5vGpFQAWh6cLDhSGXCXVLkLEZ952KBSnqc9nc3ZPJCxb1yvL39DHTWKGeE5ea8iCBqceAjomfHigmhEb4NhcRrAf",
  "key33": "4NoSbHhhTL26X6R53WSiefJQ6ECim3wBzSPrdyryZpa5N9mSsbRXzWv5E3gBe4Mht3W9ZNxnHcLBxmV8QHkuHEs9",
  "key34": "59Q8cBBf4Hn4HWbXU7z5sVnHwtoLkP9KnFTypijGpgmih58rGQ5GEC141TB8Sb8AUYjYrngQdQnmbXQVZscAuANy",
  "key35": "4r28cSEb56LgSF8DFvNUwn1JNnt287JXQjP18dj6C8yVCH7qQTh8y4RtGGYpodpWyy7k8KK9piUdwLhqf8xkyp4z",
  "key36": "9ubdpkYpUM7LSLG7KLw3Zu4fcxbLeENqy9XzUoSdUcLtBDkA6PexqGVVreSHD15WqAoMjSP7ydRexvTSoxSpZT5"
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
