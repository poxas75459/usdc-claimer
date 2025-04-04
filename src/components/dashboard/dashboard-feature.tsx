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
    "4BBUcrMfo69Deg88CFgAsCQQwGu9Qn2GQRUp8SKGwFnPffhz6F6HJxWnd9HZCE99cegwUuWEd6XViotfAoRHbaiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b2Wp3ckLrGqB3FWFKZjgQ4fC4u8i5yDq6VC3N6zfcb1Dc45LxvmTF1evD5ezBFwwnPEZeGdeydke6t9vbesAhXt",
  "key1": "jw8ro9wAB9kpBDGoKTceJm8n6tEW8dJNLNhHuUxVLofo9d2K2wjn4Ek4SQKN9Rz9xrjR4qnxKBgxR9MmJFBSWhw",
  "key2": "2uAybKWa8j75z3eYLG2Fe5m6g7NTYMt5yQLZ3CQQtgrAi6nBHxTFMBGfutKtWF2vZ7BZwb8bmKPQJRq2eygm449L",
  "key3": "4gg9xygtdgfbXxaeyBsB6devgLj8zZLsmXuGCLs5NMmatnD9yaDN2XPHGYCzvCWdwagygSBzmfmpdA9TG5CZdns9",
  "key4": "4ibXYW4XbRu1cvdq29ZEN5b5YTDNMp1ZS1j5RBWxFjWg1RGiDELdE58X3SUBoT2d8uPL4ZB5b5WycjUs316iGoMW",
  "key5": "2SoBMsByPnJVa2MhGFiYjs2qKBogXgSp9s7THTxwF1QduEz32c47jeAn7m47MNhaTAdbQx54hJKkH1rtDYp64KVT",
  "key6": "4upwotH9GGJxNwbMqiNNraF3dfdUJskSPhpvppZvWVt1Mdo46RGNFrUkWZuThzPxF14Do2EYgLoQAaVeFNun8ZXE",
  "key7": "5ihktS1PLDwigr7xhsYaS5oRw5n8uvHZgWCijFmbhUfLEPvKzjrYRn3q296UPuiWLw2pZ2LnqhAsCWgxs2VoXvuS",
  "key8": "5ve3SiFFAJwTPVrtTkcCcNyLzjPMGgXRAC4tetNjUa5bEnxwsHs3z7QbD6chKNAmMYK5JBxp3EKwssnoNZFb6wtJ",
  "key9": "4sUa592WaFtaycdnke7H7awhbiemkCf4pTPKiwLSAgRA4qaPB1gr1GfLQ1rMjQTED6TpDjqeDxbLbLwwWoMZhXfy",
  "key10": "3boFaR7Vs7MFa3Cnm5deudgm6MeMuoww5EiHqPkcuTitnMuBcVRCVRQMQv4GNAq6yBQoLDH79ziTRhtEs5Xoq1Va",
  "key11": "3TcjTQ3j5fuKLvvk4xLWCikKFuMTzpunMqvVpSZivniHeztpUXHgyKbxdryxYXkU4kyK4SjUnfBpzMSmbgPMBNKs",
  "key12": "3iqaYZHzUosssHhyXKwRe1h3rtUznqrpnwqX7V3fH61ZKxrAxHRadDRbuxruRcs9cXR6sRG3fv21cu4JRcnivf1S",
  "key13": "2fZYUhYa1x1v2VWCavv74UsDUAf5bSr5HJgWdtTuAbKJx6SUdYR4gsogrNvhcdrEMmR4QdNmoN6kHm7keJERuZSf",
  "key14": "5dJ7q5LM7ohaGFYYkLUgcGNdc2mh98SuvcqvoGikEmH76ontyx8rsGSk7NXZFr4ZckdrmjJm4PUUydVKDwS7TZ49",
  "key15": "3F8FwER6CodLWA6966vgDK3NqXXNYUE2TyYVstrqyCy3if47rtRwjGt8oWVQh8Uj8pULNAfe7pVasJ9ESQ27D7sa",
  "key16": "YPm9oKi3ERhuEFbZ5B3MoSUk2kfQDCoZRuWhtGkUiFtPTr4YaU9zAQdtQW8fMxFAnvzXfrFr7wJuQTVTUSjibKf",
  "key17": "5ySY2i5e1w2zhtiZdZAtxn4mUSoAcbQfdihvLaRzsqG79gRctByfNeLUy5BVz2znifxsHsXZNU2RpZkTzWkzpoKW",
  "key18": "5JNv2y821pkeyb3ixULx68FQq8E6bWiU3kdgyikq798qbJfHoFsgpSvbBggSvRpNiiioqzght2wNPmfvtRsexDFN",
  "key19": "5Ym6YteX9uy9nLvu7udizTa35t8Uf4yAdShVUJUHzjzcWeGQkTJgRsVkGts5zSoppGvoHyUV77i13dAWEV1w9AHW",
  "key20": "kMa1b3i4aKPVzvLvfqd7eLSsCe8GcxGTFKxyVQdjHZhxDA85R5brSqrCGxEC2REuN6eRSsmprjGMzg9cxvcRqcv",
  "key21": "5VKusvtphQw7xpwSRnx2spntgDCpPjW9in3rG2Nayr7jMhWSXoWfmBsZR73adHELR19FZpTH9PT3wW89VNeww16U",
  "key22": "2KmuELs9eQNC755f2EV2GQdoU7wuSdCMhGZ35tKAWbdaPNp2YEZu3fLKVVk67JSUuc9JeP94dSx5aEHHGab4f96A",
  "key23": "4yi3uLMu7RjakndhRHRbpZjY2pqsjcHiggDWUJgUD7YJmThSdJWaRj8X5QLdHNjcDQpiNC433DhU3iRSw2GB4dnM",
  "key24": "4eoC7Ns7MFToWSoczugbZrVccgWGoptCvfcm9fp5LfhrnRyFTqii9yPLQSPS1Ep6G8QBCFNGnz8HtehBLT3yFWWs",
  "key25": "2JhL6bBtdYvEMg9u1cSwm9Ge2b8AmAqGrRy5k5oC9EdnFCsY2iAiYnmvtZWtwcaVFNXHFuhuTb6ALwdpjGiWBbXW"
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
