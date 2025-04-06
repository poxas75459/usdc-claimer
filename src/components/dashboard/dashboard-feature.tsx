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
    "5pEKzEw4MZS2GqVMsbtMj9NDePD3LAApaiCJYesL3gxDn64onpVNgkxrcU5y3theq3gyZBoUGybeZzYQ3ahu1c2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jeqTwcS3T5JZDgiX3x8u61LsmBk7qoLdocrv1WDmiuZNPpUuprFUcaZ1FHCrcvgSEkzkuUVCJ5pED5TyPJm9AL6",
  "key1": "4t2KmbxDjq2cMqhHwF2ezRmjqpkhvkUpT4YYLPia663DtxcEsedKKNqvK1oB2ypLZcCTkJQmhXiSUiZ33TeE1oUi",
  "key2": "44YszhTrvktiahcQGLKWLMwnc8LhAh1FuJfQ61XNx1TyTBXXwaSPqApYxZf2xhbBT9aBztKg9tBvisESEN2BjjgR",
  "key3": "4WmXVERA2mi81MNu1bDFUzGQYLiEyw4dqrPrAgBeW1TEvFAYahpNzA5Au5bRu4VNLvz8kbv4DVPUTb2xmKMVWFut",
  "key4": "stmW8Hx23yfYc4bgjmvwYwcK92uBzdGdHbt3csJZV6TKM8jTiy6kfhAMj8BWrssi5EkETMYynzu6suaojJ6VgUG",
  "key5": "4znNhuuep5wuN6YPyU8aPMQnaip7ZgwAkeUZNHwVZzW5AjQzzq3V85SSE2xD4V4xubLzgTAuTK2FsbXmJuHS6YTF",
  "key6": "2ewDXDYbwNVHpsgLEcf49bskoKrXd5rwMEyAus9ENTM9iWkUxj6U4vmnJpS95UQP2UZpn86qP2VYMTbtuQtSH4Tb",
  "key7": "35NxM1j1ts1zzJv2d42MSyAUDmxUvgBhoUyT3ShAuPxNAt7SDXWgXzSY7YeLpJ6pFBWrMcss1stXYXLftVSS3wEi",
  "key8": "4atiVYpabuRk1x4Bo7x6RSE3SvwqqawLnKr4SJhwesuUkib9EePKgcbNcEQr71bTTwRJzE2DatjcDN1nUhMjAGSs",
  "key9": "2a6TerJkGtNEt3cT9zCaB2MbG8to6sNj4JofLDTYG4wwe52Q31hNSDKN2CLYBb3VUGmf71zn9FFes1pKPhXQNK4M",
  "key10": "44FgtC8iLcA7hJGREp4QwcVnFdYUjFZyorZQ8UCEZ7f7v3J8YUVSVwm36FfFeauf1v3CMApV84vRLUG2ohp1pEVJ",
  "key11": "4YkzatctDRC4d4CrqLXug3NigYYSd8cyj15mLr5pxmAbZZMrGVCWGkBGdtBGGoeSscq5t2JhD9n6WDQFqhhXUqt5",
  "key12": "3JH7d7FY45BVJz3DjGwNZZCX5AamVaVUJYUwwGvqsbvY5FqzbyK4BD61UsroFKizgzZGH7rmnD8QsDoKV2eTPvME",
  "key13": "258tQAeAxrZwm3mVim9N5Qep1cdMbtzQKD57uL5B5NKx94kdD9yTF53ZfXqQomcLYJUwzoYkjiJq4RmcZNDD81tH",
  "key14": "36WNDBjUgosPDxqyuW2QynBhNupV9tYiWTG4D6dNTzFgk5goxCLcNrM3zAivEW5GXdnHy1KaLVTgQDXFkLuemaJb",
  "key15": "2Y32bDSFZCniDNrgZd4snCSLZQL5TPUK1dUnce2HCGJDrcg3etdTU2ThQKCWLUTqSwJ5JLKNr1GuVuccE1weYRZv",
  "key16": "59ULFFgFA8R95tNG1P63FS24RSSrZHL7FdextvFqeXuYgKFviDr3exuMRdu6YqbSe3uPqoD9Y5YNxcqq6m2mjZbP",
  "key17": "46Az724b4fu3qmQntHuSbj3PCr7hwZbrzA7covE4RppYSY1yRJACt82UJdYQTT8pvxBxBMr2LJDoiuxN5qeHuFzP",
  "key18": "2RYBs1pWG3xqMVFXiU4qwbVrM4vTR4JXfFjPbvJ4HfaHSKX5TBPKQ2QAsUJPryxp8b3ogXtTSRVfpTuTJweZk7vr",
  "key19": "3waaqcpwXFDd2aqdkiVEWQGLCAVVehC9Se1o1x48wHAcRNU18oBnGcaCUPnwQNQsjW5RpaMsni6cinVJAY2Lp2x5",
  "key20": "5bWSG1tAW6yshck1VpDiYqWPQurw4eSSkc8dvvYYJVe1R9RJb7it7yfuFozCWtTx541EQL53QezyhSZUzJo1cLdZ",
  "key21": "32F6Ga9zGdtcRJYNWGxQ7dqRikzpJR5XPST3iLjz2LmroXRUZ1E4npFSVtJXUU1uhYjdGzbd5SoBLCvRCVjPYELy",
  "key22": "3zKHNHGoCKZq4jdH1xyJxwxU6ouZzxFHTFgjvtDVs7vSgitJavfwKLPLP7ikoinHuKXMwN44wAkn85MG3NtSXxii",
  "key23": "4EboaRgeffKNzLRA8Xstg9aj86wQiThNBGEjzWUgaqT7x1MhJZzS38WrxMQPvSzJBBqqCyj1xmTkrBm3MS1pUZzf",
  "key24": "apEzJXWszbiCPvgfPYNrXEwqzP7xefbzFSAJvEPRkJoxvbxmFqvtHifcwV18Kgwy88UBy8UsNqTngMEzYkTX9kt",
  "key25": "2dEka6JKJWETYKYpYRp1BEYzWAXEyEr8yzwNn2uGfWNgMU7FVsowWoyo52RMPGsZtSxZBs1TMFwN2oRFVfZAs9o8",
  "key26": "43gjA3rsA9yfDWf1opbmTBz9oWSSDhckzrNkVSCAejCG186MAbrCFjiDjDeY9x6e4WZrZ541bPRcJ7e1J6V776Kx",
  "key27": "2RvLMzwimerPhDnUZrVLDjMki23i5AEP8H8ad5SUrdzvSmkH7H3BBxdkSthQXjEVb4W84UHNTAyKkvCJQHoXdbuv",
  "key28": "5ReJLPakNxWMsSEe5rJZGtum5QYyHK12nMje3tDE8qu4aLnh6JqkJGRT2krRF9zCmUuxGTHnpRVfeJr8anYqBZS4",
  "key29": "5xzjiMEpsQ5oQusB3HVaskVMFW3LbRYsnjRwfQpjXPkM7tDn981D2V9nNWY5zXJ5xTrAYyKEy9pgAsJcPqBkE9xV",
  "key30": "3VZ8N7BhvsdPg2TdMb2JzNXZB5oWfU9oGJnhnNdyCtdg4YLHdbid2Zi3fJ96cWAEzscZafJ9Frkh83uPyg5GwibG",
  "key31": "2YJ8dJpgGMJ2Mdv1makTRUDQwiXK7fKMT4fhviPeWMuKJ15xc4LUUnQXWWhY1mj8DbbxoNJDWcwhT8eKequXFtot",
  "key32": "XkvgZbkGxTv2VnSc9B5uzkXZd3xr9Jo27vKg9dMMzaqK1uArwNtYGmzxSnhhfwLheekiCTLxmEG7Hbq39V2pJoV"
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
