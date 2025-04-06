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
    "3qC8VQfbpy5jbSNqEKTP7ANWhvXMqXNRF9az3v3uEtQWwVQrk1waAzmskjpZYJGBUEDrrr6Ddgi5BpQ7a8cHF6Ff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ntHaPbJiVeu87AdXmvHSMdNMMmc4CTYK1EHBqFB39sHEBQ8vP9AdrnsW91XVgJbdUNnaiqGuHTDxQTvKXVW6tps",
  "key1": "5Ua5hU6YvnVsgV5c7bWk2bCZBWTusiZWW7mdsHyNqp6NNcc1x4nD1tjNBKXbCsqjABdeXZQJjox2YkmQuKf73UnQ",
  "key2": "2f4EgW7jA7ThAUVQNTAvp2kTdhSpJi3hFM8fU3fGS5pJANhVfFUUssnMQJQkdyD7eahbia4VvoodbzcK8WCH1TMV",
  "key3": "2KAQFMsffTTHHFdftmr72h1n3aJJJxFomBtQQTa4v6YthdtsHuoGs8rWaRXZaHieeS5guYmvU8ripYyhwMmWwpBi",
  "key4": "496MdpnGf88ztWT7iP1qZVxZZGd3YiDojr8KwSr8X7roieiRCLTHiCp7CMvT2YjYqjexRneWHgg6Qf61pN4xHP7R",
  "key5": "2GA4KLjjbfJieSt6KBFv4gpz8TM8vH58fEZJPqVMD9RCV5hzSFM1x9Dia354CpwV8Ka1zLkuZxp6VtFDHVP7Pbw7",
  "key6": "4Ad2sNTaurYGbdvwf1NLP5yGjDr4mXCvUjwE3DoayXD1DZEYx2Bz35K3iiMWzjxMB1y4BSj9QTwntqJdZW1gE3PU",
  "key7": "2MxtzkXreZdzWSJzRwryEou7gFtA9Y1oGcaAbL9qUqazmAuRKr2JCj5EPXgsxN6NPhgSNTfD73Piq5rrAT9Y59wD",
  "key8": "32Q5XbkPhzMyYALFaKjZMeBN7vwVT97VkNTM5DS6qG7VTbP78kiGrvrtb3xDHuo7fCpFEM3D785uGaAQTDkz6ANR",
  "key9": "2gRJJdY1sTuSycYNAm34SyG4aTnM5Vc8MtZ65NqqnF77K4LUewYXQjcxW5ESXiqdptdUgrUUCKTAoBJwtYWUGhyp",
  "key10": "48zvGkNPivMAZnMPfKzQqMGGRzhxFNKem3h3K4CW9ueVT2Z6Z8C7TktnkkWCWPgNQy1GbJeEPqtHF3Xvm7z3GQtD",
  "key11": "Gi2N8iCXQqy2womw3DwsKoVeZR9EqKjVHDJgZET67mNyPJuzXhUmvor2ywnc4hqRTU3ZeCCtoEwZtwchHPL1DRp",
  "key12": "3p3TM7LTmA1y9mXo3oyhAvW3SuYxZMH6xVqek5pSvp8qZkchDqoyc2Y6K5z6ftYaXPjCWtUVyY4PSdoJzqrw6vMn",
  "key13": "4wENidSLHGpSk5t9Xfu56Np1hy2gpJjUZB2aiWzGSyy6rjj6LxXRqrUP6eQxZXWsq568znG5W16UHjpk5QWGab23",
  "key14": "dZc8NxEKM862nGaG8mXXiDiDt9frPsqYCeYodinmS48FnVdRm3guGtriBbp3TJrVdaqo3zbBE18PHb1BGkwPeji",
  "key15": "2qGgDSDrDNXnggXcLm9LbyPDtB6LW1MDthdYNjsh68PfR4NFuHQciyW8SRdG82cdZF8hZtQj3QX4frGAoWYLwfNv",
  "key16": "mHrkas7Nek7FhMoC8zxTRhMLYxzYu7NQ4E3Gumcq7VUGRqMKaVupfPAUWbW38Jby9taRiKBLXeXHZja2Fe2mqPR",
  "key17": "3Hq317hr4A61AodNsyQULfVk88LG2pH9XDYmFyUuNP1KhLC2UnDuPZU9uNRS9Nqvimx3VfW2RnbRDQzm8bMjXqRM",
  "key18": "33horxiYN63HCtEKRAGY4f7gdADTZPpJ5wyzbHQ9PBshnxbPStBJbbYfKonMFKXVtDQ42LYsJ49nA6z15WReNa1C",
  "key19": "2xxGarQtZ66JyQG74VQpjCJoTbKqEQFjasnJrke7Q6s9Uciw19juhDi8Zta7mBjef6G8r4CbCwhYpdXpWBUwYRt7",
  "key20": "5j3CZ6KUfxhzMcntrHcZiL4sVzELF5qZEXPUotmoFDaWC5c8tWL3bar2SK9dQV6XWp5f8n2ZM6reSrNVKe16BkSJ",
  "key21": "3Kosym6PDP1smZCacXKHT2DrwgRgZax4ux5hc2xLfj68xqrCaPXagBH4oVUGVLTTzFjoiMUtqbypDDePZFcS2ywo",
  "key22": "3xHRpaZXcQkhNsXWih6P12y9zVLWbJu39ENAujR7apfpFmitRKBR4Q5sMwDqHrCeughCLoC93GrWQf2Ry8YMWTGf",
  "key23": "59u9Vodyc5hfTQ8DZRyXyMJNgxAV7CVboyB2zy41NrFJVD587P5TfteUiXExJYy6cfSvGNr6pQB11fDjZrSR3toi",
  "key24": "3HYD7XJRsrxJ8fggrdMZnxh6btBr7AuyApzSAw6uVt1jfieBeSCVEQAqJhjNpNrQgkSwNKtd11MAwAwG4F9xzthN",
  "key25": "3bnQi1yxKjWbTB1uVfpa1QYEff2L5UhABm6oMFrtUdCNDhZvM2fW8ftgychheZPK96ASSNeoBnk3Gsnqvtpd1PMi",
  "key26": "391b1AJ6U5o6gcKNwP8kx2Mt45eAKMN363t2tSbXdZ2FiVWrVQHxGLDPxrSnkK61f2d8vvdfttew9BUbxCrSXZHo",
  "key27": "fwEoXMrgnvx3BcmuVUhXrNhvkEHXEj4DGrTF3go5xpuWCca7iVgqxXqFHDMXn1jiQsoDvfsBuhDLEc9oXtQK8Sb",
  "key28": "oTrzPydA8t4Pd7tAdAWaYeNSba3Y5FHFyvnrkpY7W2h4RLzFFPMASnveXuzzzGZ5PRfVbz4LrAifmB2miq3G5yN",
  "key29": "3UJJ8GxqAtpZtN7fpmzgATNrmy7s4Nx3gPd2GJWZVBn3G61FA5CGALaW8ZfdDprKSzojJTLqRQmb5yUxNXRd7oVP",
  "key30": "uX1hwcqngmf5ka6QccNaBjpTKX4xVvtzutzg8qVWJhsTUAhKTUTQRDgHygxxvGa25gFtYqXqgNQkMYFnZGkqPU6",
  "key31": "2xnAJQ5cfWwPFAYdig1a58dDmNSX5ci8UXv9uci79QwYGNpdSm1fy9cbs4LRC8s9u2NmozHUMqKnAmhUM4kxzY1s",
  "key32": "2kTTrAUziMAkHo4qnY6jgtLaDbzoAxUtVj8yzPFZbwxzpxUtgDuWMKA3eXevs73VSv2wyLsVKTjdXRgGnaNJyz7C",
  "key33": "51L9FmkbLXGb4JfgNNNem6CST4eRh7KZnc86ptVUVsV3Gfx5L8ESEkgSv4ET47dytMYVCFMJbq2tHDnmhbe4gono",
  "key34": "5zv1ELoq2A7kFQ49GX7BrzLrTjy1bmYeURuvjqLKJE59yz5ishC8yFoRi5tuKb8ReZgw2XuGQyRbfxANyUSq8HQX",
  "key35": "53njMPPk74F3Qkfn63FvBCipUcmA3A21RVdpd6oc2NEGHiBK3aF2XSVXV8AijwujD8CC5U14H6D1pFrC4Dbb37nr",
  "key36": "4sQFF3EXH5Y22xpxYfuw2MaF8Tqhrhr7GCUHhgSekmAmXFiuEUsvunsmaeGJN3CzhRCqXyAnJ4iXFd1MY5zkVebc",
  "key37": "WnqmsdfJdmGoBiq3ocu37SiHPg7CNtK3ZsyFCdKRLREub8Cg9BtaACpHz27E7vxTxwNPTRo6LB8ZorpcbQWvY3y",
  "key38": "5kzTXRVPkPB4gDYzjWY6HXE4pKSXrr6R1uxnjbAqz85ukeq2Cn2EiKuhFFgttvP2qNf91H67QPW8JLEwFVH1ghM9",
  "key39": "3DHeoqbbpmAW36W6iqkd8dakGZpvtwuZSm2w38wENcaNmzM3sWd3W89ZGAH6WWyDPwjLfXo3Hf7VPM2EhG2dBkxW",
  "key40": "41ANgqxwe3kjc94XYmaUGcq9iVELtSTXvuTEdZN4buJpmHJaSJY55bj2Z4KcCH8u3ThpPhp3CGShAV9aptpBB5KJ",
  "key41": "56auN77R1shhFAoqkuqFTAHRadEpBRvru5xqTdu4cBh3Hdwt82YdgyNRsUkHFgx2JmWhRXJ2jt9QFtPdia7Tkitu",
  "key42": "4PNqSQkZEdyZPGpViQazCUbPgLVCh5GtSyM2ofRXEtq2MjDLBih8mEUuVDW3FmSzPUXbhyYb1vy1j56Wku5137SN"
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
