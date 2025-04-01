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
    "5ahk6neU6koBTtKxNWA8DNRSiyDeANy8AiwCHeW8kbPF87tXE48j9ukSQztVZeFfK2iRE8QoATpiKrtYkHyBUqMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D3TZmWdbdxq3P5LLTSpSSkxhqEs8YLucRbriaJ2vDanAqHPFAP2uUyqRNTwWjmfVEJiWvedisiXJVuAT9cJgWAi",
  "key1": "2eBMC5xow3Au2qUes41hjyY9x5hQgPgmpZer3MbYANexh6Ffw1yDCxxGrwbHWJYXdVhDhoQFTctfW4nZfjk5Ayj6",
  "key2": "2uDXW6aqdFbdrZMBmuYpNPAP2Bex4o8eWU1ctruNqMAx68c52vBdwVAerQ9zoArL1uu9zxTPWtvBjubQT5kC7wwH",
  "key3": "2Yn2uVZrVySnMVLB5QsggXWxsTqM9S9s5bf5x5tFV58LULM4gPqGuvi2mx15954MgjGwvqi7wfzS6oFB5vfd5apy",
  "key4": "5GRNe6LEJekytsqYEtxehy3xUpp6fzt4PPiB7UceC7acJh7qYUTAiKvjU2VBNunZVQyfyXgE3SUK1b8KBKcYXKpB",
  "key5": "2z7XsGzGqjCVo3bV41qRhZN738NTwRtTJD7dkCjMW75LyJUXSmdyh18iBAmyx94vHH3173Z2JoGTNUEKa26p5URY",
  "key6": "gkSouZ8xHaFSjojG1Cg96d4S9S3uWgSV61AkgDMsnA5qF8Vd5srzmmX6263RHEdEdtysPLHMdbn18t3GLoqaKKn",
  "key7": "5W747HP9Atq4brqwyp57cDYPkq4vdTFcp8ZP3LnfmcL5FZ2bWFKU5K3WBc6cqwmM8XSbLDZdqcUBupzagMRGKLmD",
  "key8": "4mniTdna8TiMwTGBwmDQCCiCtTnvfW7ExaC39c2NcbfQMkf3HQkAxKX5eh5UQKPBLx8UN6wS2z48aaNB4c6hJ1sL",
  "key9": "fUteGXPw22pyNEmJq4FizubsB5cfHr6FQck73qY9A7G74TZ8EhFnw6GYPzjVTPWqMHGSNeXXi7gvKXVKV713EZd",
  "key10": "WyB4NDEedHLwWpvnGUUKH9JxiBfyBPj5PjicUkqan3VkqcTTKxWvdhaknWZRsSMRpYMvRwon1sDyYfu7FFwhPh2",
  "key11": "5kWac6WnUny3GcLtYa22vhw2hdV7QpMQhTyy1MFWRVUBHdtWaa5sgaNQZMyCBKVt5JkbyLo97cirnU7q175yDzUt",
  "key12": "552kz8Xg8m9ubUjfYetfQtCQnShP22smHGs6qNstyZmLNJnCPpgCH9qS4b6pdiUipadbrVCXmhMU1hx3pHULJfGW",
  "key13": "2Bpd7foMNrCp8tXp9c35q5quXhYrrxXoksTaApCBMAxNSsBP8hS5HPLiFCXref17zGwBtmJ8bqgGnGcHg5eyg2a7",
  "key14": "3cHVCFyrykRdvPo5zoxMyXYq5x8dnHn2eZZa3beRbfz5wbu85Wk8gh3u3enVyscyKozSCiEE1XwsiLpUFsExybsG",
  "key15": "568WrV1kthLPNuuoqRzitvCv9w1gd56pHTUoTyrrXSM257Bp3ogyiXhn7mD3EGxXBybgba9LUHh8t4FexxKs6Tvi",
  "key16": "4KiEF8zpphvKVz4WCLUW93M7aVX5i6ybiEawQmYWYFgKsfFyHbpCfkQxPjdBWPkbQUKT8JMpVHDaoCNGw8bjGua6",
  "key17": "4sJSoLqfogogsuiKb1yEAkNMWng9UkDgJDkrdM6P67Nv3Ui37kQFjxQiZxsJoQw2gyGaAoJERBXvzFvCmEZyE3iE",
  "key18": "5RHH3ZmcSWby4Zteoyz9qdxg8ztDdLYtMJbVPUASc15rJ8iEg7AVvM8V8TmYYNDYLGyrfTVWxqQk9sBUuMPyovD6",
  "key19": "3q1NZQjW791NnArJHKCFwfVa66Lwvyi8riYrNki5XH5Jye4L2XGxvpFQDoq366RJ59qzKp1tCxzNShzxYbKWBx21",
  "key20": "yz784od9ZGJ2SFfJWodrfNP5ESfP2DFacAeqkav5sy6Uvo5suLMwEkKKE97gu3Gbdd3wdLuY5yCAmv6tY1bdtK2",
  "key21": "5C2YkA2hUjoKB6V14ixWFx6AcStVmsX3zENgvsqa1mBPSNdDRXTBA9ngNZ2XHUUokE1NqLLgavD8KRNSvuGdRxA8",
  "key22": "2CnxqrqBus3qq8WcUDohjMU2J1JWP9XKPmM34g4bSGvs645BadKyA1EnYQMMQP5E2vAbKmw4fsNyQaHCd167TV4Q",
  "key23": "5bxDmCYYG1ft8wV1VRgHNcJsQrhM55B8W5Nv3YUbCfbVZvs8dwNChiGFP4VZaXZUYdhqSGWDiSWuLNaW21LhYAhs",
  "key24": "2x5Ja1S1EN22bE6FXp1eibHvtMmCqdz1PUWjBGxpvhwP6eb2ntQAFttBbBznLjUmJK11K7gggLV4smN4uvAH12XW",
  "key25": "4fgbRcWCUT97mPjRgXfqM3YVCG87CLZWMu4qjnWZywb7mtsoJHjvmtfssr17FJ3d58QeyhRcJmfGyCjNc5itdKZU",
  "key26": "SxFwtLVe93WgYp4bQCPKoRcNLcXLx8j5SiccETZ94JbtqWSzwaBjhxHtcqByR7GZogntEDkF9oXSzVG5xjEYg6V",
  "key27": "4AvUbf7F6SoptTgDXNKvQwkRMKjZWJYLf2tkeJXeC88EagJCgx7eWCxBu2ivdkBDpKi7a7Ndm4N2mrvqz5g1oZEC",
  "key28": "5rMxYEXc6AFgNAGbk3Zbg1pPue3GQtJBssosabpQXqsjHwDyNMoZMgPZ5rocTLaVVn2sffYwdTdDs83Xf5oWiMBs",
  "key29": "5wSbrowe2C5NBWQ9dfTM57nBZxszzcUDUMp3UxLU6dgYR51iVthYknTssjkqfRiR7yAyGewWmemi44fW83DNQSCD",
  "key30": "4cNx7gfWBi4gR214NvLVL2sQacQVA4D8wtnE3wBnhY4bKkAWjZB7PbzBKM9PNwJzHBj8YSuMgjrhZ2GpazTg6ZjC",
  "key31": "uFBZhWKbGiVztvtyeA1yjfoJf7jnpi9CRP3oyDhqjBya5pk6wyZbVk5vVxosrN6Ae5di1kvfeAqtoXjpsTWRLVC",
  "key32": "5THdSpQ16vRagcQwvy4LRfunMJzJaxXg642vdobQKBD3y4e4XmcPoB5U7hgM2iVaXZZChx6BkHNc6BEQNaJFH13u",
  "key33": "3MijfVQNUAwou5NuGzgCbUcv5trRbPM3H7XTkZRLDkSViPFAbjS1qR5CwG1eCPsaDQ4fGQPqy1JUdSzmB5kCu9xM",
  "key34": "3dU2jckPnTaxKSx28uuTsfBMtYx4v41WevqpKBUyyyExVRzWaXvGxWvT2WJKDiMnJGsZ6i8sv77wS91XhQFk3Gy2",
  "key35": "62L9BTuNcZWcShiDsEwPBMmMVCk1HAKreEZpvc6LCuvnGfKeCxL8CmcMcUAfXt9fUTrVZaw7JZRqxj3efKhvJc5D",
  "key36": "2MDLt22ptUAvp15G4foaiaPvDM5oQtGFq5Am5xbsUCNaePxGPHUMzUypB5YvHD3RQqtidoQpJTfCHn3RY9hfpFUB"
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
