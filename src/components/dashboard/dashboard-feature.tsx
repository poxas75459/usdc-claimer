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
    "YA1PuWvX3ekcRKqYSC4o62PHJvBsq1oPmMnKBUKyUYTXzdU4sSYGkoNWqdffCvf2QXxqBXeL2WXYb9CRXHY3nZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sbcJXxjjrL98Una4zmCvoBidTsjMddYEDndQd7t1L6nerXmo3LJC69V623xaBpfqgtVGKi5hRmj5BUW9xz8jHrb",
  "key1": "4o3gdjZ8Tn9k37hT9nk9Q2Y9d2t4n5MFWbqZ5GtXQbKXaz2dg8o9uWWha69WX939bh12ErixuHiAaVrC2e437oEB",
  "key2": "554qY9PByM3uy7K422PYoouXVqtKMc7oPxHX7Ddh1A2Fs9eCKFQSgPDDN561KBtpZuAipEvtfU6JvenH4N4GSzAi",
  "key3": "QkJZuP6to1tz56Dc9R5tgweXRdfeXPR2u9KFiLCzjP7Yj3cJasnDnQF8Ez3EJ2QFzdEvBLSRbFmw2UXfNJCqf7q",
  "key4": "3HkHzhnvSjBnETn7Qgktx6yh2h2JVWRYoqW7tGNwxrtt6v2CV99LF6rhxBCZxLkbdtZd7nQszk6MQZqGEkKm8xzh",
  "key5": "47ozaJdxrZ9rtnNN1GguxqKfsqRVJJiD6WYcuwK5fnAfKzxw5ZQQ8ADcsEDnN3enuAXUNb9EztGir7C9CmcpcBZN",
  "key6": "irTe3GPiFeZtA61SfefYAc9kLQTEXPSaAzFJJ6xw5p2fqMKGd58XgMGM1VaQBfNyY2CcTtwU4vvVJSoC76Ayjp4",
  "key7": "45WBueEYQK56PEVMjvde5q4ds7K2yv2NfYwRwfJujPsB6X3oAiN6MEXbgj5TUjJifxhndwGin2qGh5QChrpUhUZU",
  "key8": "4eC5TVTyWvFie3fbXrX2n7K1NYcbGn4FY89Wn2Pm1hZQ7M9G1JUAzyLZXAYFiof1r6LZVSk63jX3gyASi6L6atop",
  "key9": "G6XZei4m3akm33LnFN1E1ap7ogevnw2sEvJ41JM9CwgL9HRqixqeoLNtEqCZyrHnGQYNaRUw3fJbpkp6UJK9yGj",
  "key10": "2LS7H3ugDZ85E9j1emQzothRWgUPPXCQr8ebZ3GRKB7wMvJHpVmMcYCjik6Qwke3whNX9kr79v43GG6AULqQQHFw",
  "key11": "2VpFo1U9puT1caZUV5X8FZ6r1QoXJz5Ga35aQBwUVGSNPdg8G8cr4dowGyXhaVh1afeGGtphZFnBmm8uj9Z6fqeW",
  "key12": "M4XhLvnqDBQTAHCb4twDNpvXE7VKQEVnTs8VCmMjeTchcv33jDf9bj4DtcPAaKFbdzjExr4cwufQESgPN3Mtzmp",
  "key13": "3jeZme5aPu27hUiRFdnJbXk4naBourDNyfXYahGDDFwRFoadkyaY5N8bW8h3ECob1ECssr4iBpxYq9VfSE44FZaU",
  "key14": "52JvC8gREq3M3sDtY3EVkptx46YBgdhEcMUVwautR1tyQNLTCq3qLQ9gphC8zqexrxa1ErxkqVmD4dr2AK8v5w4B",
  "key15": "5rPUZoSF5kxJT1W6U1aPWvrJF46mvSFnaVZAWygaJnaxQ3QKqvaeYHEncpHSUrtqzyvJiob4SKYpxvRCkmd8XJEe",
  "key16": "2xTso1TLRJbJTn2YaThQ7FG4DTK75r9NGgE4sxyMBzhZynHj6MHkaUAioahikqRwKStkwQ6RaixiAPXw35eXMGzp",
  "key17": "3FNziHcY8ZKRwjsYjERFTBTaQ973zU1S6VriDjb54n5yJkxbPiVGp57REEtQRDv14W8tQCcoW7UZ9TfFQvnE5Pe4",
  "key18": "2fRujma1kMTc5MKKLsxz7RdMziSYzfj8DQaCirm6YWBQogQeB1jrunmeFBEYYJvbNtb96d3oaQ2rg4yjxJFLDdHR",
  "key19": "5urRUTMNGJ9ERBpy6rHqvN2HBbZyTQ5oEE2zwyJGPsbK4ajnnYvPt8gWkyMq3kbszThVvdttnj7V57n7QzZEgZsn",
  "key20": "3hUTnedj7QowoMnfqdhG19carFq8v1bhstRtyTW4rRKBtfZwrYQwb2zYbZUzc5hNgfVcY9CdFzFnk4y3EwgmWcbt",
  "key21": "2RzzUogyQGckp753TJN5tYMo8gb2wFboaKwiu1pQ3toTRDHEtqRwrJpQc9dm3iu6thcArPu7g7QrcsempNyKGqGr",
  "key22": "2qyS3fuqna9JVA7X3tE1fUpVkkKoop589po3ZrNy98ESijxDEjEK3avQTsmKz7WWUbj7kRMHbff8FMkc3gVnEyYD",
  "key23": "4aVeHHpue2YTat3zcP5ptvT8qtKRDNn45v3N1tkkUXijJxnq6DFy2XQQM8MLPbpJeaEBRb9sVQGgWUrKsCrwqnHz",
  "key24": "4Sp3zuAEEdB7TjW8Ja7ZmFQCKNn91RM7Rz15adQk2UFfxfMVE2rq9ZYD5nynvnKsvtrT8JL8povy1e4cqw3xZ2nB",
  "key25": "5st3P1hpeEo16hZcK2ZCNxRNPdsbLJnHdf5LDSR2reSfBMh8xhEDmgsZV11VStgUwDDmi5XwhaGw7PHBvQLH3goM",
  "key26": "47i6bG5p3FuGHvqb8aUBbk1po9cuyD4BW4uDGAGLL8JkEtsBXXeZMKWSmGtSLVfxVtYUmgoZD1zxAwxfnfSfaBYN",
  "key27": "4bCKvAYpNXEx7WMuaEjscbNdvUqknXZkBLM2LAMExfkmcjcNgFFZvqtqzbUvetAtYZFvUNncnXVemxGEtaS12zzq",
  "key28": "66WJmSoTmNNthuhq6T4biJaYdsvWEV8Y2PftTQCPdbP581npxqX8rxfY18Q33FCunRDKoMbSb9ubHAopxMdphs26",
  "key29": "4M1ezWYMcHNGG6YFQoBFCB6EBgt17P63xXBvedfBWktJAiSSAHWbnrHRu74frShKgpvbciec52ayaXUhZsb1DLRX",
  "key30": "5dwm7gRM5KncuZgLnAHfSuSnTHcQzUzsysTLAi2DqAi2KibZZXyGQsseqRMnHWgnzdhZuwPDyvgaYn7RAq824TUC",
  "key31": "5CiSvDKfetMKyVAAxTf8x1V2FYb2Lmnun6YXSmUmzZsdK1cbyYnbhWnfZgjfLxrB78TMH8Mac8bgfY4T8wYabuRr",
  "key32": "4W3DeimzojDBdRNyE3XQSC6SrpHPsMFqYRPr1jmu7R5tV9s5gNGvcRfWLDDuVAmhFoSPqNaoYcc8C2PrcHN5V3c6",
  "key33": "45QryBuxKDCfzPWnLMgs2YmmVVQoZJhYP8ZW9KjSdB7oppXchfrE1UMX3ceLywCFVRei3bewNJNYPcd8Eqj819ds",
  "key34": "nsywtmdvHEbzyy1pRoyfqeDDWgRxjdHRRj7Wk8RY29QgXzPc8TT9UZKaCQNQp4hs2QycmkDwnUL5uSX4HTiTbyS"
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
