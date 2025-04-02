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
    "442ecqXhhqdnGstfsxWEUjLo8GvYdLk63ijyyHDLKJzFNKqC9hVVmpn7ssNUnEKLeTnMrNyXmmkThHej7Y15KoC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ka5gYp3tv1NzGkv8WxAGWQJxS8Qym8LZTu2AgmsSENUS2M2q5ypmsdot2zCwZjQri6qiiwmgWAB6JNiDvVGJTC",
  "key1": "62uAdJbrrruvZNF73HFSALvZzQuVEaUhyswpoV1nED4GvKz7xGJD8x9SP7JGjC1FcC5GhwU5y6jnkC7M42R1bFRm",
  "key2": "3bwCtfoTnq5AAir2FfU3AyAqsJ68KodjZWY6cHivPeCXKEZBWp6QsdYjmnJgBijBDSwKSuLhdfLqZ837oMs1ToSy",
  "key3": "5HZ3qpf7BMNCVniANNvHG7UJYPpi3W4aJLe8uDX9xajVMCuqXe3Fg1CpQsa8RqywMzjRocmJGdJNUemvBqGJe9nD",
  "key4": "3h8dQthHCPhanqPYwwid8dsb26U3B1tXAedTf1hUVj7hWDPQV6oAgJFX9rikL2fGs4DG1azsmn5AmpBzaJfWGjbo",
  "key5": "5BAWkUbb3DoyjFUPKLFY9FW1jux56FQsmUS85mcWdEep81m4hyCVg8UNFmS6PktWY3fgpSsJrsUVhZRbGu68gBS",
  "key6": "2YPZ4E6cfNGLFBg8y7FD7Xg5mHYr2piZbDBGCGKWEGnfy4WA5Cc4y3y7gJjyCejqJtiUnjRQJSVYsq3Dax5vkQTC",
  "key7": "5GBzDMzemdXCeNcUW7tPJJMPKFstCfYML6xpxtENgjGUo7WAM2YVvLEhykJwYhSo4EngpxN82gdCogiachLfbR3s",
  "key8": "2Qhy4zDARSZFNTmpCCNNJFAXsJuAsp9hugTNyrDPZkN1tRzrivjH7G8ww3qgN7udftiw49YXBai1EN52MBu8QLbi",
  "key9": "5cuFzREk1BERhHoQfto45WQRrVLKC5tTWn61W1yp92VoQxytvdSbEgRroqBxrXGDKKUMyQAMqrqHLmyCs7nzyTrB",
  "key10": "38osNbVD3ge9BsC2bP3fZWSugWQcnEFFbjWb9Pm1CW5ZBcdtcwFvzoHjPR7WGKn5fCSJHdEF7yE66Rr3Q4QQdnaT",
  "key11": "4KkEguWiyyNfdsWZAhe75GVYREz5hcZK7yRb1uQwJ4iBujp6puVgLLy8mN9Ta93ERhqFtDoBaz2MWtsw469x2M5r",
  "key12": "2xy1RYg64xbzmUUJEgMjgQ3LGVALZe49w6x29QpuGf1rsJNHPuLpZ8tcDBeNSbqaowM7iWnxfPxtB3j3us7tynwj",
  "key13": "5VynuNUtWHgk1wsTpAvKtZ93TE7C3Yu86Ca4NJR9df5CByeN7Sr7GT3i4ZTZBYZ9Q1P6uteC114tQByx6VfKkdW2",
  "key14": "3Sstefn456qGDkXMhVNmkkKMoYucDLXi9R3JHKQWPe2cPjcz65JuTiCT17eaBd5xEc83xy54RJtQeuDR5oZpWmyi",
  "key15": "5bxgnM3CgoaZ58JqrEXdSfSgVAAeeNhHNxyCGTbNExn5e1255WiF28iieCTQFostfiT4gscDKJNC1yTDK3cEoijp",
  "key16": "ENk9oDr9KW57AxPYngrEZ4a7GmsfVq3VuJsJ76JGpXwxooJAdF14vnr88zVcadtsSExjrSJVSnjdqQvF3WpbadH",
  "key17": "23uNTAMPwVL6fpKdeWBgtniT4dc3qM98HM5jhAYiaLhi8U8BKeewpNE4bYyZGRz2BUmZ2Gg3pmW5xandhwjRG7Kc",
  "key18": "5L1PeXQ4ew4GS1wn9n45i3FrZVXdeQNGW7G4tNUR7g5MXNtti4vrRxwHpTKxCdYF61nqMbZfBQV2EeWu29cLecvH",
  "key19": "5nhPvkcCnFhHLGW3onJibHTNzR1Wiqc9jYPttFB68TrrBzR2XCKTbuhvDdRX39RLo7tJgQWtsszmPoHYyaLHLZ5R",
  "key20": "4Y8TURCqVu9xcEf4qGcV9vCWaQ2roD4q4zCD8My99Nd2vUC95thkMXxXCLsTGZUjRdvKYurU1LPCZ73e2xi2UATF",
  "key21": "5P616UJQgHA4zbMjn9UbnqYfdGYgS9fQXJksv3k94PFXuR3RzRAFhcemYiVqDSb3HDroApQXmSqHjQ2FkRVnRSRs",
  "key22": "3LV9C2MJiSZHfeCEstCSnG9mGNit4d3o5MuBQVAWNpKMbATnJJqJT11RSjqLahqmaCxCWjZQfTtCtMFQp8b5weYW",
  "key23": "5WfcreN9y4qD5fyYZT1vQ5gjq8SdeQRhbnBSPAQuLCUsf1PMEeGA2HFuFDzzHcRqLFAmsDJLfN8AS9ypaiM1ENX",
  "key24": "xz2rbuVcH9FAtWJuF6JmoGPD117X5HVpy3mxprxWEp4DWznt9u5nsFss8JFQfjSPdfVZjZBXnyUpk61j2XYchC4",
  "key25": "foHhnatmyKDXzFcfhfQ8NTo1W9zyP7kBMSVtuyZLaQGgGzDo8cP68XPjGYDaDN5kCxjXq8Pmne8QFQqs6o2ZA3m",
  "key26": "2fW6ouLdq2aGcEGvG2KdeyWnywunYLnuVMTmD9CQd8Yu6ByRyBVYQTBKLYMJHTsDdFUbwaroju9fTGKvu3kJ6mso",
  "key27": "3WYvnrA31uEDoY1GViJRo1jN9uVLruy3TPzwRHk7YxdnPhscPq1mLLTPKZoVMJNwQwrSNsVaJcqjmNktZuGf7vhT",
  "key28": "4TVFqtiH98AaHcJf7BQAN4JcpBpRMjWQUtqu9su44SmXjXYfXtjTtjLRbTEvDDHQ8QCHNhCLZ2GQZkzrVFBGPeRE",
  "key29": "5koJbPei8KQZJ2vuMwJzHoBGio8KrwTMkwSmkNSokPXGc4Mii6D7qcBeLbZ7WdNWRjLtFSs4sPnS4VPxmHp1hPpV",
  "key30": "23c57pSHT9odE849hHgu6dBbZKUL3uEPvjS4oMy5MWUixBN783VHhsiKYXpYznRHtumVNNijeoveRJCD83XBZbNm",
  "key31": "G3aWkHrZPKDP9tF2ubns6kMw1nN5P5N8bEwSN9gCzrvDQCnA8bwY5pq7ofkWFDmovw4vZTUgKupQhNViKFS9JcQ",
  "key32": "3fqckNB8BCMCkrkcQqJfrfgkJqThx9TpdEZnqvsLtHEihXGEHfKf4Lc4YGJ1RTGBtZ6Gku5a4zoFxVmVBShnV1Ho",
  "key33": "2QwhZGse5vm21rFXVobzEqzCqQw1zV7kErcwSWe7XjjesqVubBYc8chLnM8i9PE1zPHRnjFNeAkXA9gUcHsZEdZY",
  "key34": "3vXHxyqzDSKq9vf1AWUCmeYnghi9WgQ75BC7TkvsEEcV8yfUbY9EWMc7mUBkpgwDWethcyaCCrHSC3vUUr99P5H3",
  "key35": "49e6jspbeNP5cgPuGaDXqpMV9J2ad5usDBWy2Voe2BwjTEkzjvarNSNUTEsZe1ofhACDFPjYfsH1kwJFMvwtMHys",
  "key36": "5zUPon7dcQj8Lob4d1hnxHuG2w6c2zhGXuZtgxqVqewpSgrKTnfej9c3t8e1fRV33wQCMG6DdpfQ3eFTmaahsfTE",
  "key37": "5RbjGvV2RuYYPZSRwk5Hf4PBnS32qZNmKvDApnsq2UhUrWUPkiv9VfhcC7vBZXyc4VDFsM1ipGptpgJKt8etfba",
  "key38": "2Fzp1VpvX6Ggkd52mmP5wHs7VgjrjrAHytDuoEvmaPRYqUs1T4FTTQp9Nft4ib4KGAUVcMzNokzroh7kM8zRDAav",
  "key39": "2FxbczgW45hWX4nbKzdxrxeno8mDDwtykvixPtemU3K4G1Ty7R9VmsP4cmZiG6VgvGxCoNNBrkzS1z8KXD2f74Rw",
  "key40": "5byC6eA23U3BH7mCY85W3GwZAUMTrPNhHn9nV2aXquj43bub8ZMj65HGnsHA7YbLj23M7wni5AUUM3pgkFrf5Hcb",
  "key41": "5Zd6RYsx3mrXL2DrB3RcVXP2Bdf3MMnxTjoqsWC4D5SCEFdB6RrcgpfSZewXbTabNZjhVo7zZxzoAKqKJKM13Nwi",
  "key42": "4PBY8yrqFKr4zddVzVtj4nrkTcD8vdPspRcJyXSN5FjaSvfXrCdnNv8qEe2twxA9HGkURrpZoCqjVqYr6rYYxTzc"
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
