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
    "rUvdAVDdy7MKJunZDu2Coek2Ju4oZkKQigTXjHZQbkGe7YLenjodGApSjmgKCrtwopS3RG7NMkh1XRWCMfcMPZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PebrU4gcL9FLRRpQCzGqtMRJCSEAWBqPgHChNxNw8dqPFnciW9VGR4nFH9dER6xLTwBLuGpT9ck3zgN7gZvareq",
  "key1": "3iAwykzPjDZU8ZxjmgWzTyKQRrCLaUV7wMFkUND8YTEBDjBSsrzwGQ73Wth3kPgVxbqMfbfqu6HxpJn4fcT6xr2q",
  "key2": "4oDbYwBycuVPsMUAnpwVDryG51HAEnmbcqaypXwcsqZNJFSnVTvpHYiAfffdUw9a7yoN3bFfWajBYcB7UvjMw2K3",
  "key3": "5B3hnrYt3VrGNg5wBpEUaqfHhrcnqctWvSawfqvkYG9v3LTaYtezf8tz3u9JtbhQpeGgeWXcifmQGFEuKqZdQ13X",
  "key4": "4wjEhek4Zpsc9TjJkMMhfMRZVDobxjpsupHiS9vxcYJEWsgGzb4GCWyvtLZCebkEsUsmdHVGKo1WJmrmD4zoZu5k",
  "key5": "5uq1dLpcEiRD8hyrrAuevhiY3neezAgZNsbVzmZ3r7vse62z218Jdg3hXVVMspLryF4c6AyzvJEmJg5477tSAiQb",
  "key6": "TocDgqWjpc5QyuKBN1uE6VbWrTyPqdvjzcJqa5zGwUVYE42PV8r6uMHtw8qVJ3AQTTT4wwT8EaDFzfXWixk9idr",
  "key7": "52Do3dUtwv1MKumrEGbHiuMVo3KPvStGsuZgA7UbguJXivQVagJkseZauG7k9mfuJUvoPoUmZAtVwUk64jSCCuPh",
  "key8": "4D3MtZZcVQr1UVwFY58bX6e9GSJHf5Wsk7yGJsfCo75WQAoZy5DqZ8HPZEWncPZwr1Zxs2h3LwpVaGV4EM9dhVnV",
  "key9": "3qo92NWEkSWEocYpvg3PSTVJte5BGBW6fLeWro2VHV2rXMBj734sBRGHmeAPGnD2ej6w5af52tpojAtv9smDeH7z",
  "key10": "4RhLc1XpM8vS3YnRU7kPi34GzH2wdUaofYMTi58RFL3bLt6RTZszFkWsg4pstpMmqQBTsHV3S3eZVdZ7gwiU2DBH",
  "key11": "42jP2Qt17Y4xeWEypajpSxAzpJkgsLZiz2PCAB93kTnXcRXsHysZptqpgUeJYVCTun8y5EWy3Tc2s4HVLPUFCcRj",
  "key12": "55mZ2XEPaTYqtiybXjHV4Qbxgy1VzFJATG5DAMTiymZWspCrtfjPN5t768cNtUUi19H76nBgSVnm7JqbWX5eXRzA",
  "key13": "3w8mueNFVbrdmBjf93dYtvkDD3qa7XdGhTwSoU2eytwbuz9yNjNm7M29DRhkZM2ercksUGGnRr4jFpfVNe1f71Xk",
  "key14": "4XuQMh3M4QRYAGh9bva3gaM7dm9yfwn5pa3b4S4fkDZwEjerWCBY68bgJADhTeTsRcb8wjWrDEAxcHnvBTxvskdm",
  "key15": "2pQoexTvDMJf71xG3CnmcfXEht4pHF4m8Gq9EhTbRFg4VhQDbcmcyDbYnegF4pPZbkzB1Uc8Fahrj6R3kyR8Qe8z",
  "key16": "4HLKehgEbPNYyzBQyqKXFLLqFVDHQop5ra9BdLyy9RCWJXY22gfzFQTX3WiD6WJpL4Fi5XxHzjpeVpPWpiLzxKS5",
  "key17": "5iXQawFxAx7QaSUTBPmMd44tZpzRKcknhvbZXB3oBpCEdYcFzKYKe3VKNmCPZVgaxRNTtR69VXEWj8cpr7cLecd3",
  "key18": "3Y2wSxgG2YuqjgDK8YGUj9wWp49RWWLps88dLqwasm2Mez4BDigHCimbirTGCKbeMpFgxZscXqg3U8a7Dned7RMt",
  "key19": "5iRcFVtBFKtJm6woXTbKTi2qsJr7rn36YRXajREari8Nnva1jczeNsjCH98UzwmuXpzub3V6TNG1Uyfhqq1gRcwL",
  "key20": "4RpyibVwkGHWYsWFF2ZE6ftFbDm2RmjpXs8abAvMZirhHGiWrKMaxmgJg8Kuzu7nT471x3SRqMVZebjRqu9gd7QC",
  "key21": "Bp7ztFLzyQ3RCw5mdKcf3U8C7LMfEWF5yZSa9iK1vQBVqt45aPz5AxZTHmJ165hKhALdSKapmymsqjGMQF91QSz",
  "key22": "3p2CGZqmjTyFjdiwbKmPiwXmtBnbWxrcz5498LsuN4RxzWXFHVQYPDPqBFoitpr4mT3UhhpdfLdcCxN1QW1LjhP8",
  "key23": "3kV41rohcXuKjT3hhon29MsSobfEBNHwMnhwYaeYsr6Honrw7mAoZiyAA3ZJPVkRY8B3vTcqLqTwLXuVfLj6XuML",
  "key24": "PuyjAGi6jRGyMY629DyWnQkaDcrtrTNmaFH1dD5r8AFN6PW1ve7g9Nzv9Qbu4BTPqeEupFa7dUJYzJkbwPxh4We",
  "key25": "5vz59brdhw7AXKgpKbiJV5uUCgjsZSy84Jww22JL32TVsxkdaDp2yFDYezDuGu8hrVoApYicdHhysgWM9MzjgyJG",
  "key26": "2A1SAGoF9Rn4LwnhLUs5FG6f7nUbpPt2ru9ma2rWiUEXL9C1ZXBdQWzdGRC5B8nyfT4Cv3vRt3mr1CNCdPaEv6tj",
  "key27": "31C4T3P3zvvSmpCBxiAyiZZQSpRggLXTzDJxu23vUTPY7yCjycCaLHKaYVFNqTYwtAfLQuyX73hvTKtNspqzLkXr"
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
