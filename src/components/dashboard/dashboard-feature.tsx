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
    "2d6DiiKzcEyNYu2fHBtQeif1tgNpsRn3QZU9DBweZ1repq7N5qtsoYsUW2u4AtCd32WyNQZtUwkqToi8i2jMhsG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GjYftF3xQT9dsBfGTUCe5dLs5J9obFC19ZLEC8xHqt3ikYZJfV52gkiyGyRxZQP2habTtGUynqAXJ374mqSGVzy",
  "key1": "Btpwy2kCTiTsHqAkyUhP1Q3s6qsEQtMY9p2A3UTJfJGiz2rqzWDiouPX97PzW2UpzdanbJdH4CEVS18MiNtXwHU",
  "key2": "3BXm8SDo4Zgvg1dRSs28d7YtA3XxgRPK5rVW41veqp1EqpsiskuAtZcCUFfWSj8pazRReQ9vxi46ZfcS1i4ChpMg",
  "key3": "D2dhDxptVGv5yB2F78dEzRAsB8whPWnCPMFg4hKhxkNeB6rStHQJxFhZKyKvs26XWNjNk9TxVDKtFiM8UiWYfvz",
  "key4": "5WZqz89vDQo7ZJNHKTZLjXJo3cn6ktyUgjSJowPgm22HPdVo9hTdGWHXZnpWceoweYEi6ypYjP9v6A1nwR899mLA",
  "key5": "ZA3ScXy911rnujKqq6DXH9tSDZqNP2xXDJQxDDxspW5YhHbzWRtHUwxAMBhqckNqix1AdFVVE8RrkYoFiSCXB6q",
  "key6": "64xQtGFmqhWTazBY4UGsYZDjw17zCfXCMNzmbgQLj6Jq39MvvVnfahquUPqPtFkoqVDmENRSo3YpsjL3UytPxvCK",
  "key7": "5NjEA84TPjx7q8bybUgMpjAEJ1jgxd8U5bkA9PhuMqu2ryLcbcW7xhfpT4BwLeAkra9RBTZCbrynaCjY5pQS2kgp",
  "key8": "5RCjxcNbXh8FsNpzHbkuk4Wor26FWYscc5c6jgjnqnUcyuQsW876wsjDxJAtSYGfvzy7RbNyoTtQQZYZhLJ6x5y3",
  "key9": "ZSkQvpAr5VaVUV26YzVB229xJ11sE2w4ciHD9QGZhX31SNxAW2wRpfm1v8JqUCfCya4zirsPgaoAhpqKqtjjroz",
  "key10": "5ESuUx6EzyxVmoynyoPVuCbZaQcXGALJwuKhGM8upXynXLP2GM1V6ffcas7PqpauRZJYrZXTLKYperDMWfz2CeFC",
  "key11": "5PKYFuvcgpjDAmMZ6A8zuGyhxYKNsQfcmqrWHFxs6e4higVqG4SiMc18xNGij2i3VD95h5CNz3j9qC5jVdFG9Wx9",
  "key12": "2TK9YXWn9KP3oy6bLeccCdSRRJVpurLVxihE3APJ3dCgJ75YKxErfUoNq1qKTottxsC5ASnf4cUh8M8AhcDXzKhg",
  "key13": "nshkmqnu77biMCKey11y3tPw1EqNsA6iGu7ggcpTC2py8SnKbpa9Fs5zdi85CRAkJVgXojxJiACnqXYhUxdQphP",
  "key14": "2f9kBZroqLyFrs7FL6mDZoVve2akYjt632WXS6SucV41sojGL8RtZMbERcFF8YSxPZ7HpL8wPF1aeCDEHNRLKSEa",
  "key15": "4JMPMbXVW618zaxNLkW98rgJLZCLPaPMd8CMVGw6YRsxhoQfJc3HatwAw9Py1tAoMdPbUv681TgqmU8fXemYVDcW",
  "key16": "3BLDiz3kzQHcNBFf3c6uYMoYtBEfGF8ACQJDA3aqWRqoCjqxs3CxhrzCaPuiWQAjZJ22VMYRYGzhNTUffja9aDfP",
  "key17": "LT8pEZxA7fqziB4ntXhvSLKjuDceT8GbXFJrpXSbJdSPrVwzZ1CRi4wCd3u3T77F8YP96woqcpNJgNYsNxVw3tH",
  "key18": "652CjkdNYZwuiS6y9m9LJqPxCa5YJHvVRhMcD164Xnu3ei4AumxZ6i6ThQ4ZXqskL5g2h2SQQYq26Mez1owK7gnF",
  "key19": "3ozFiRaNVUXjwCqKxAK8PwkoQYDX23A1apZLHHir42SBjRULGxGfJ2QpoCgTLjPjZMsnWkV1F1SztwGGGL2crRDQ",
  "key20": "2pXCJcjksEBHRRe1hE6zBETw6iZsMNXxke9Q7aLDJm1Td8yjarJf55KfdhUoV6eCF1PXjmEZ78XoKsKixNcUBqJf",
  "key21": "sUCycimJmV9pqM7ni4wWYYvocxgnAXRduBcqFkJBnxfguE2RdTA8ZZirD2w6wodZxkUQ5buG3CMxafMU46tMcvZ",
  "key22": "3aLWQhbk3ruhcQMEHDA288WxYX2C3Zvt9YvpkQ3fZzj9KGcJtDPbC4Rt2AnwnGHNv3XXoCN1axnX4GQnQPrYN2Xp",
  "key23": "2XULuitgbhN4ycqFBwueqDe5ajKTtv4o4kyLxDsca2VSnSDMehdfqVxUDsBrrxPFHsL3VHeNhmeAt8iVmRwqMdko",
  "key24": "EpZ3QG88XH74cdutgMgHuZ7XcDVLkDh494k1LwnKteeqPR45MrLmPucHeVoRSRrA879cn3AP3bLuDJ4hkqUryDP",
  "key25": "36boatQu4YiMjuRju8McAxpfyq36vsbXt5gNNNttXGfzZHgVCGeUEZS6aDXNtXEdwRnpGZff2T2AVugDbrEeiyWr",
  "key26": "2S7AZT6yUdCfPqBHwJG21puvGGRXnopKmepLJ5WuSpWYeSAvYZohLTcpYz65jNw5LNsoUysucFSLcaMeKDCTEQ1c",
  "key27": "5XF4vm8GUpU2RRxPykr6x7majLmkK191R1ym3DRz7iaySn4LoC5RpguDJDBaiKrZsk9ktHXz948FPEQsiw5fPanH",
  "key28": "4vi4UR6YHCenWxAtuUN6miUzoqPxnkSnoPpzi2qckbU2NrRHSyKtkutVVK2LaCgstNzQ4eCAPgZ7W1PGSMkW5Geh",
  "key29": "3xKPgQAKKmnGXPDoYXfs8EgNPH9Uh2m5wNtidijPXY384W1WnCiXwNLTGXUAUXw4kt2jXVcBgHR8PyjMC1nvfNgn",
  "key30": "ToKUsaUYZCfV6wE7cTMHDKgSErouhVsxmhdyP6cCtkBkYeJSGPUHgnuDskgFNXTA5MSQ9TQhJ4kE3FwGNB9ynfH",
  "key31": "5LxdSNrSv9nNjrefKMeWj1emt3ggsm7HeMhCH7BJog23mUUSgsfHbDH75WUE3PF2SLSuZNYf2wuZ5tjPKDxSvE22",
  "key32": "YgQVar8eV9TFeUTstCaemoQPMxzzxC5hYVkDfHxr4zmBpKfMPdQXCLgENDJcpzJCU2xSENG9RJJMTthvV1Bqv6p",
  "key33": "5QyTYkYzngymaghekb1VVafYS8RA7HAqFiugJL6gvrtkNLx7taaaxGoi7vmEtbBoVE9Me1wSULr8LZVtunKKTong",
  "key34": "wh4Zb8Pb855BAFZz1LZQXhnPTRoYzqBb3BMKSmYQvAECGhnZJXpsPxcsjFGnMXJ29cSMAehhaNaKY5Euget7oBb",
  "key35": "2RHDDHuaKeBws7no5ik8wiTrfBUkBTtuEWDcTjaRwbnopUCffw3zFgKA6ibK9yThNrRm4zJ2XVD9LSg5jdjbsm9v",
  "key36": "5umYD57he96KojnzDXPpeHWS4ykhY3fZ6k5jvnq73vpMyXqqiQYTjpEiC4hHZGPRBdtdV7fyrvmQpktrQLUuZ1a4",
  "key37": "2v8h2gAqDwu96EMAF4BST2uQRZ5RXg4GYbC6hLeWqADs3HcjksrL6JPrpcsLrRKqUmxeyHmp1c6hw6tJmJktAV4F",
  "key38": "2M2HBesEguPwy1YkXq9Qi9VQA7HHcAPwMnrZjAkUxPxDa7KNt2jXPVY4J3K3W3wrVfSjQ4cEDJteCai1sc1SmgKs",
  "key39": "3RQ5VkSj2XsnnHHtYHxhByb8TdfcHnNbaDuN7qxZVbxhXrDuczagfJF8aT4zEmQmWDqU8ZJ8AVZknmEpGbMtn9qG",
  "key40": "361qukwTEBPXQQYuhGJ3vNd2DKFLQ49JpiwZbgChSHK9RSWdUjajrsLxWzARB6R6nMwBqPUZ27QoJitvDuaHcVRi"
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
