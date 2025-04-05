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
    "67Efdtoesbk3NVeSPMKK9jpsq63wFZDL7JN3wipdgvT1BQad8aVp5McA1NCLCE8H5DHDyZ7qErgmbspRrFqsLNDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48gEmr2v8pJwhEBoPwu6RkqNGs7pPGZz4pAv3uRn68v2cBNS9fpMSV2L1ujq4pW3wC8ZqKSUKKtq2GHaaHnrG54C",
  "key1": "5MqBRt99LTU6eoiheMG9NxGLEbURHS4SVVpbFbyUE2e2WScZM2VwViCQU9QcjVR3h8pgTWtNN9U5cvtT487jhVzH",
  "key2": "Pituh2zQy25BXAspfZKEd7v1WSFAoc2JR5R6h5rVtS9wYv1ULfhaNCodqsanujZMURfBaEGJzcjYomJPnyZUwKx",
  "key3": "2Nz2jRgfVFoxCVz8E9dvrXgJ1J87AQ7dNpmEndB31LCUTWpzdcDHk4FBGP3DcgsjVty5Qc2krxXxLRfZMArXY5ww",
  "key4": "2SJxEhc2YGaerPTPj333eDRcT4JSr3DUkg4JEwN2Xd3BTtdbB7gAXgzVaYdLbEMYoZMMcUG8jgC57juaBCzaogqM",
  "key5": "LnNjfk4y5Gnostu4c9zVzvVcD2UyZCchAg5ASoWB3PEbrF1KdBooBGjWofSm3BmNutXE5L514rEKkT4ppxoxWVD",
  "key6": "2TJgnSiWHrt6BE3aWxY4dBcvhRJUE6xMNUgTq4gdR7uweBpkbqwahGiau4tLUBjPjiVUtJCUHDar3cswcicgr7YS",
  "key7": "AsE9k7vsyUod6cKdwoVb6cML9adGvLZe8yvE7SjNvsJ8rmocYD4xQVtPQyTXjKLCGYGzHLRgBGi5bATsdiNopbZ",
  "key8": "5Q9y8AVKNouZuZH6EZVXerc4bbYDeoHNCZTREfy9mZpkbdjVAYtdSPA9X4rKPDN7952Kfmkm8JfYjt5vyLbhbkvb",
  "key9": "3PLbEa6ZXttsQMJSaMWFT77KgC8P5WKat5HUuVnhQuJujPh7gTpKtBRk9UXga7JPRves5ARqP6YdEGyt6YkFTYuG",
  "key10": "4V9stTudRadeYanpnQXF54SCkbt3NZbb98vcWgKb5tw3Ht6msc2aCFez2UnHtnRQxENHK1yV9TdM4wa9QavhGhsi",
  "key11": "4eorpRZ2KHZxfS2ZRwdu8hrHdQ4bi1kvks2g8prbVgEx69Hx8MTygFLRamz6S9cVQ1BD7fEGrBVyTJPicwADTifn",
  "key12": "4guEKZAXWj34GhP1KXa3fGkfXsLFKHT8nKgZZaXY2VwEi8hgujhXRCkxft2GtJT7gnuY921WRi6PmEbHWf7CPxub",
  "key13": "dk2w6ww97GMMhVzu3zjzcdg4JD2Li9NFrfAvP6PaGf5NhZZ5x88UyxMVz9JKvZVa3Ei8r9XunyjNUzTTtLEK1as",
  "key14": "66SFfvqLFKkgwc5V6mbeAnXkz4bujy9gQcCmtVKZGkxP7H6ZRaLduHGL6ZTmhyyxq9tqzotgaVWmpX9RCTUKPshd",
  "key15": "4Bo1SiwwefPq6P7ehhDhtTKDGpdtg3RZYby2pjHFDTkD2Fyveox13XvvWmoPEu5z2GN55jtizZMukTYwTgV33b9B",
  "key16": "QwGNpNtH3Fx3GbNCBhULfKcLe4duvubF3BFXPNFdPqTjmV7MZUTx8gyoEUU1yhVAJKFLXhY2hxKCmiaDTznQEJd",
  "key17": "3zmaSHuNemfU53wusCzMsWt6o4oFAcPqVGNxPYi3vdfnto79JGvwx8H2eZHw2XDVQ2T26c5adrGvRLdiiiS29bgZ",
  "key18": "2wwdAVSwmTSSZUqa1ZjZsrmLdPAF65GVnj6TR1uq5MyM5xKvbvxKJ1jP9bTgQQBXAjtoPvkXyyxSahnWyEy3CCSE",
  "key19": "412RMgd6QHCBRk9zvoh4kx1n6EM4WJo6RC1PXosCbLaXPhS4xWNny9mdzMJEGE3kX7aHyuZrrcADYEqXmeMbQ7v2",
  "key20": "2HzayU3SwnwRWGWAxkq1dYzYKHuXNPrBS75pkh4fxrcLbEVjotxhNYZitykyFq838JRUYXA9dJmhn7ihKwo6astj",
  "key21": "21MT5QNukNmMxnhUhb9j2Jhb1DUhtxMiUdVyyCymu9oWn4cAdsBr2QT7tGu3m6EFkine3AEGNk8agXMgw5tbyF81",
  "key22": "5pnthxUkSAW4uEAz3CQSjFEc48cNCic5Cyu8qxqAtfAxQA2dkasx2dnHvHzPqKtjYfj5iia7zcQCnyEeVRVgkLee",
  "key23": "4mvKdmb3ALvzpLFjJ2vEZu8KqRufFbPtomVpN75Ah8yTwXvUfJWgWMjzZq8dzGugEVEMGe4jWZhyhD3SKNHhNdNG",
  "key24": "5kgAU9ogc3Lr69v2x1XSW9jcFgbCUzjWEkRBjoEALAcUiYkrX4CMtrzjk9k5PZDsFbcHM51LhjbXxiggr1sM1LxJ",
  "key25": "5WEqvXtHyhkt1oxXcwNdjKt7uUEE5zdXFoToeJXX7zsx9ybQCKGeyDdAHzP2acGrcWbYxfUawKioGLDx2uMuH6zH",
  "key26": "2TZBdBgxEKZm8155Sve7QnuiZZpuvyEYx5NJ3FdqyCwkuaSjWGDHPRAnQDjbPAvHUYzaHdCLkoYxDsVv4JY1BMjk",
  "key27": "5FmwbTX8Coz2xZxQLT2WhxBPJvwWTMLJr1MKX33rBWQYYMgCagspNiwQ4YdBpsFEPXH9XCoa5wTJXzMJE9K5u77i",
  "key28": "46LZZGDEyn3W7CNigK8AqBLNWgKWstFN7wC2n1LBhjSjxyqZiwwrkgH1RpuwG4GFLjTWa6Nfi1k2vGwnqadcXWoW",
  "key29": "W7HKdi4PTF7YJJJd1d98EpDmqPqXsrdcJ9Bj7jQU3q82GMg1SwAcENXts1QPVHbBpnUWf1uVo6qDcanykCt6GTh",
  "key30": "2eLFqJsrDj6DWrW31W23QTZayr6v2b83vC9PvHq2Kc7V9o2fTuPY2F8yWQx4yxy95vkZ3hciTV9c3srdt2Uicyuf",
  "key31": "3XXY5bduKRKnvgNsv7qTmNA7RqzVYpNXU1udfnPCURWKvT5MkE7RvaRBYku4z5yBvnK35zkwN23ppW4WgDeGufn5",
  "key32": "2CN9tyMqzgXvtMoZfzF9ZiXZj8Sjhhf3u386gzrJg783Svy1NGjkpA8TZ1fEJgUQQrqRyy6XxetMyfSh6SenWucD",
  "key33": "3kKvoHpJ2SApwmraD419moaVVRKFd6b5FWP1S65pgzYChDp4e4AbELYoppFrtu9c8XYggnnuEmW3RS2kumQQpwuz",
  "key34": "TPPojMc7D3qEecinc23i1guLsmTVcQ1CxDZBZFuewhZjRMHZrURiMWx3VZjFK6ApkcEqoJDmKJuJsaDxeGMDuYb",
  "key35": "3NwgZzmFCbSmyPwYjZ7J2VXsVaLmcR8BN1kUpq2mkSh7k4ETq17f9uLJByAfwbGW7tyyh2iBSGXvYWhsqaD8nLcb",
  "key36": "213zKf4uPbeHQ6qPajJYW3HxeJSRVszioJM6brd9bsVa3KEqdQVwvLK8pT8D8gxD9MJbsb5gD8FiGYDhkC4kcRNv",
  "key37": "5fJGo7fahAC2uB24uGpunKbRSXwMJzEKQRyk3TM86bGdFixGaqwo5c3BeWXn7oMRnAmarhdUsTasD52FGDhtuoaS",
  "key38": "MficC5WXJet6nXsVbTn93Arfs3M2D64czduJhuvXxrJSRZW5NFEtsZy9nDWP3WDdPpTNDn8DggNoMUk1G2ux9D3"
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
