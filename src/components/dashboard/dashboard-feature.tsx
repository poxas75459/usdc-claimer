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
    "tgR3ETLiJgSWmJpSTZ33QnaPKbHskE9K3ZzRj8wC73BUKmqHftWA5FeVeFwteiKFyKJYKYNtGmA17EtvNmPr86y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYs39wdJGU7Zuh1EPsrRuBVjKhykpQCm9GyFRwecLkr2VtwnRwZ7MBUecJVy7gNBTPdgLtUXATMeKv8B1ge8BtP",
  "key1": "cGtSWZXCw6ZHaH917e1geWWUkvVGxR5EFNjMqRJuAGuQ55YoLkyiwN8PyJKYRao3xweDjespiDU2MW1wxyzw5eE",
  "key2": "JnHN7HbqztewK9LT9sx2C7PNe6Eb6SC1F68UEs4n5g4PLpKFcLo7ir7wup8r8ihpMuJdoUUuqhvbs5ima5keWwV",
  "key3": "5r26bDhff2oq6oqN3aNtTGMfBajd1cN1GidjsgQVD5z2XKAuo7297oK6qjfnhfPkLJEAFi2upKk61PV2HBq9X7XZ",
  "key4": "xfbCeyQGHfbW9HUAT47CZ7uFairEEVFvXV9oGGpAawfevKgnZxt4sxkGC3zqMtp3rBytzG7pU4qPUi2KcsnBySd",
  "key5": "4Lnj3Wn28jVYRz5qUQ9obwTs69RCw8QHJ178RzuXwA83G2FxFsoWfN8UC2oFBNZCXGsu8bipBXqTdjmNfgyyWFHQ",
  "key6": "2GBUoN4xW1RYAjoSXJMjmn2geRy37rnmm5xJFgj42hZFf1XcoaYh4Z9UfqmLjXtuxKq1ku4nSP9vAXVDHLk12Wvb",
  "key7": "39EPMQGuwueeQBpm346tJM6yKF1wu1dFhj9iiDjuJeoMsc3m3uzoz3ycSaQCNieAev3aCdsHQpQe2XqVNce8evEK",
  "key8": "47hVEswWCRdChKspryBr9d8sfBJFrpkHjSpUZXT2TLtDN1XmA6hEVanG9ivVAEJTfgWwJT4ccberhCqAHcmExmzM",
  "key9": "5s9wZwn37CTjks9294uL6KXJr84twjuFTLbXkxpcMSXpPyyVgVDzV15mSckKN7tD1ZgfEDbAtduoGGCMY4PxMyFj",
  "key10": "2Cnui4AWuS6JxGVDkN6AGdouRaSmYCLQLPVSLKhuPnzvadu1fQU8VTeroqyyv41uChS4ZMK2xiYNqeNBcYwpoYVT",
  "key11": "3NHX73nhGTjxHm4pS7TyPQGguyrz6YFu4ezsD5VNJuXzLj2SG3di7Hs1ZbrYvwQUcd6W3mhhF4sTSGfyAWRwcuj",
  "key12": "4AriF569wb65ok4T1sHGn2mhtRuPEZ5tQzFtw15gyry3XtLkbTrgyh1x3TM2JyZ6AnjC5YTEuTUH8EzHHoHtavXz",
  "key13": "39yt4yQ55fSZHCKFxUoScQniy7QzQzmsH4vfuaVDPV7fMy9kwr9nwnTMri2PPWMShHgabxA3v7sFt3iqeGheBpVr",
  "key14": "2epF8wWTZFzouyYpnSfgiJ7ipiskGCfWHFHznSithsVvP3UtGdauqVLnJ5jyaAyKtWEegmcY7nLEWskqo5AUs1uk",
  "key15": "h9NEZeNvbTQcYP6LFBZjZcCK6Sfe6vgQW4KjgPjM8wAUvrmXAJGjpMfq38Lo45aS65kvi1zr73uAL6Aau4nKPYL",
  "key16": "4BxeEKYBoreN6PSSTLTgxbprJin2y3dAg76S42zrqS3WThDY9MPYVU5Y89mdB1u1F4bY2FuDWTmRhEduTmx6dQ6R",
  "key17": "3tUooKSYJtGNQuMNUYg2ECiQWCKKmKSs9XkuavKi7PYZrgSEzSbbRYz9BV3gEhq7s8z8drkYtiw2N2mS76zXjEvT",
  "key18": "5hfHjWFLXDPS76HgVRNPx7Ewkkr81qeG4eL9VB2acYHBixNq2KtsrFDQ5HDHiLisgu4nubeKNMUrsNaD79dyJ39g",
  "key19": "2RCLdZjXPr2TDjWYQCCbrxT8pNmQuoo1ABV7WgVFqLRkRef5fQNphD3DRRni67S5gLvfXNeRskKvpzWawjadPJr5",
  "key20": "3oi17j6zBy4CYfsdrLjT7WDwwLrRshRkHfrQd47Ha9ZPsma3gfXGCoVNgygMNQMT61bWxyoPBiioyx2eaov5DAP4",
  "key21": "4kkrmjdoaBY3qVBbCuFvFCN2Z9yJvLhrymErc5KdzCSgYVVFXm78sZjEVnC9DpvjT2YqhEwn2pUCoHtMJFfUNTQ8",
  "key22": "4JDixBb6NUMWdVV9hJZPAXhUjB5xeFUHUK9Gy6Vwkrt8U3B5cUmxLX55WGCv212VXVDsDgSyffWLBPuhC5Fjvdg3",
  "key23": "q9ppEnLXPcUMPbi1d6XNTKS84fLZ53xUoUdLrxW7YdWok2tMPyQThSDJAxSkn2JSUskWUjFBcxtPJ4JzCKWkY3U",
  "key24": "3e5Akc85hL1XBcVbm5sy6eHu7f56eZzduHoAfxBmfy6ASUf8vJ2fKQ4L93Gb4PSJS6C5hwZHBp9m8UvC17QQyWZY",
  "key25": "4V8m1ozcPZZVoRpJ4aunzKHKcLMmpxAFRT3oZk1Wh8fWeysrxkbV4piGQxtzYXVZj2xX35XZJ3j1od1QXLcSwvRj",
  "key26": "2rgJ9wqGoEVHAFq6JFo2Srxvun6n7cmHzubD48fek5waca97dLGKUtPMdTB39yYgbJx1gef9Dp6R1CW5ts3N8VrQ",
  "key27": "qz2HsRfoBnDpKynk2seMyBjRXukKhDLMv63LNERcwJd64HfEKPK5KhsvPixC2Gu9XpsR2q8yYkRvkjvgD75ZtoH",
  "key28": "4nsKgKrFPvAX8ZKwHAoVvMw7wCYH2c47XhpJk5fpjPAjy6c8BTU8hDSMHb8BtfPiSuJ9baYV2B1qcmEcAvP1vEBx",
  "key29": "4xxYfhrtUrRpUox7KPHi8GyCTEFcJhj5XvcvV2zTjMceJJK3f93fZzYzhPjz5HxoeNuuEH1SFiuPhFmGAHAsxbxg",
  "key30": "5B9oaeyMMJnacPNnaaZKVkVsAc6edFLhXkLpv2QTXYR8EPgQG8Appd9E7LduphcbNNWMHYBf6pvgiBvWB7a7PcRt",
  "key31": "5ni5fdpGFw6F5RTPevZBSJmMMYMwGa56jk5e57Yd91uPewjr674ZiiC228GKAgBq7AJmaxJ3eTv1K1v3xWWgxxe5",
  "key32": "3LfG71GvY9h97YLLNSz1CiCLEsKGAeJBif3CtVThkZX5fV6ijPT5pnfn3e9NKB5rgpRLARQ41WNL57TQBEtdf1SA",
  "key33": "2txGzMMea2uTLudn7P7e7E54q5JdjsYXFiHvckYE5w3ESATvTNVEUigE8rEVQRj12gxEimuJhYcVWbDzNTUZgjpx",
  "key34": "5RDeR8svtfHbUbxhPECWDKZzh4vAQYmTYhL8oirdMRswpxPK65epMNC4TjVA2E79FuBVFY7Jeis717sDaeTKpy4S",
  "key35": "5i3iL27DG5FfdBvKnNPDep2PNSMnFRmit71PqPspbZBLD3FaTFMGiBGtC8Yvefq4fCCiaWfZMXCyZpGSLYRNZQ4N"
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
