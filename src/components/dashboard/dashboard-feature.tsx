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
    "5ibJ58y3qaGY6dc6UWrV1rxZNEVmVjbj3GrzbkgxkYwycAZybGzG3GAHXagkpCy4X9hNFDRrUdgpv5eikewT1Lxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fc8dVT9X1tXhQ3JVFgYKBuPuqUeeTNdQe8KT3BVf8LSb2HGhmvrayfDmCxoDFAk6a4aR1U5V1qMohEDpPCLAAUE",
  "key1": "3xMAoTLzziK7zSjcod3KJzVaT7deMzN3NmBW9qBvoozuYEu7yYvngJdTTjMFUxGcs57LWKBHP59wMqBJZEMAPb6q",
  "key2": "5c5e3TAuHSQscjhC42CBHrL4b7dWWFxVNPosSLzVBqq6qvaBhuKxfLMUNojUVzeAg8J3LE1Qnnha5vrbSvFMgPWs",
  "key3": "riZF4BpMMdhQWLd9ccKUinxi7t9XwtsLeDHr5jU91p3FJmb1xC1nEuiw5PYTP6uxJnY5o5n1AYHzJCsZR8fZfSG",
  "key4": "67HMAbbGX1SwswfZndtbhongthx6nyjdFWCpxx74LcT1WSTUwSR9Grw4MFB4HDLptRcXYFLr9jUj9FD1fM9NB1hM",
  "key5": "4ERd6ofFCh7ggx7hLfNkpiheZJ8QZTewDtUCqyhiMAeYLpaRsRk5zXnsg4CNK3XANYkHjfH44wyBWy6AnmSp6xfX",
  "key6": "5fLXsppgNho2N9Di8ggnTRoGiShyjt3kfxmpaXJWc1FG33NpHsxnnFx89MDT7Mpcvntq6J4au6YfQvPNR43zzkMK",
  "key7": "64PK4DwsxAS3hwnJ4Jp2ub2gr5M7bM2ZDkGhuc788XaWug92ZxnfVECW38fvN9Z4zjQfKBPLBp4Pek88jFVkhxDo",
  "key8": "3AKxCPjBXHgke9HkyZ8BQHY3i3y17yQJpVxP3xtBCCPQqpS1o4hTTBD2JYjt7GXKErrn2kyoYHMcMiHB598jdaQQ",
  "key9": "1n5qGSfUoRWpiJisQK7aw32BzC5a2cPg25xhvtKEb4z7GYwYqtjBT497sH7jdpJKvjFoEy96Cd6WTQRhkCSjdHa",
  "key10": "2sVYw5HszicvBarbLaCpeAtAbk8J7M5mGpE4K82uPPEMCSgLJ4a4r3qGcsiVgrWPUdjtHNCjwpAr8cXAo8Vqnb7V",
  "key11": "UrZKJ2m9QCmhh1a3ZxFFPSW1dyT6aEQ6HEuNuvZXsZS7MgGAkK3utgPJXzzwGYAF3o9wyGyLvskepYuaTsGSHaL",
  "key12": "4gjZUyDHsXXXyDp76XsEzSZcmpjFYMMqjsPrNyWicWC2PjFTK1z7zp3JMxEF417w4ZsT4ebEyQMy8YJ8AZPW7Kj9",
  "key13": "6pbvbmK26TxgHFusiRJ9F2eE2cMTfKpAvJ9DuNkDCdkE2fmRWRy6YDnR65ujaUG4rerQZhaLYXFBN8ttsFTN33c",
  "key14": "2iiAZ6JsBsttsARSL57wJ9BFk23ixmTFCGeQPfQ1HHLJZRxRyuQL9wBdcNZtmL9V3A3cpFDtBXY92w8ECd5wzE9R",
  "key15": "4j81XH6fB717pzVhxkQxmmStmjoa134drJAx8mS2hFn2zcMwpp7r9ax9NvQ1zhw5oXg2hxkd3DR58nC9SPoeFie1",
  "key16": "4Rx7S9jRx58grW38asQPGtvaqSBufJ5r1VffBGmgJz69gKqhcoyi4LcwF19dbUYxgM4XCbg3HYHnqVoWcoh2hKkh",
  "key17": "3e82c64e2oG5kSV6zwZ9CvszZPzEsN14Ej12HMZS5Lm3HaoPPr1NRZbY5XfeHjmfKgMXmYfUiEhhz5N1x77YJTGb",
  "key18": "3PYmfCaTogadUtZZ8UdSPeN3Z6YNPRmVpsnx6hWYeY2bVquDFiKTonMczC3UV6wsaHQhYVqqqz42DuZdYFSSMrfy",
  "key19": "2ucNEFjvVqisN7m8H8vELq3fXuTe4rJR6ZeDrV7AQynsLrt4icct6iijZZfFHW2mkZeemF797mwWzDUTQkspxec5",
  "key20": "4SRttW2NJSSQtqPDd17dMRuacGEbroc2jCMRruNQn8zaRjiVdUFx3teQUyBj3noxrJLj9fZCX3H6HSHFbbNbKUAg",
  "key21": "4mnB2bDJwzUnqL29toEiTEvALHSNCdCx7n6Z6q5XyFfquQafztVAMG5a9UFt7kvgRE6vhHu5QhczuBXH5bqkESnb",
  "key22": "2TCM1m3tGEPhXJd93vbaBZSrU8rzd7bUSp8j9Q977TPpteMQoCSRSUc3HE7hDdrsaAQsPw69dF46WGr8bamhuTGB",
  "key23": "3a3U6iQDVYA4tcoikeE21EeL8H1poV36mMhctvHtMV94ZSmaYcQKWzdb7T2kX1UBdpPcDqiphSDUrApek7hP6Pgi",
  "key24": "K8EonHXrevz9toqut8kJqPyXsqbxDMkePoDda9CboUhQUqg8bg3n6gBixrHWhLqHxHD7irqjybpZjhuFqugumiC",
  "key25": "sdYRfDQmcEXEtVrDs7Rp3DfYVkBKAPWWP4rp1xChBJwaTLNvn3tGbNG8hKgwi5ZFF6M5c2dkQvU4z3b3Qi3ZDot",
  "key26": "ZeFLVsMqMsE2i3pbkrV6SLaak2AgUzmCWUnWXYaKKkR6UDT8oiLeA7hUz36C9UueCYZQJAf1u3ZUJMFh64tX4da",
  "key27": "3nErACjeCyL9Wei6eeXmt9iXH7DgtMvy7T5V1MqNVACgUd9sJcM9Po5KgbcNM1VWS9dF2zdY1TpCkn2CxqTUfUXv",
  "key28": "2SzYWjedbhp41zb5yZMKeyMFU4TTVWnssLBuZiZyBgX9tHL5bFAkNHFPfG4m653gY6ZHApqrv4sqhbG8dyoN1pqq",
  "key29": "nJtwbKAo35XbkJefnUzUv1fRSiyzdRxWxZum3GAT1kY6XLEyhUn4Q1kWZChMM6Lz2RyzA7HQHLVneYkLeX53Crg",
  "key30": "43SCMFb5UeocVMYo2HfiJgFonBM37qnWevPy2LvRr3A4YMgtBMQRJcNSBhuL6bdQX6GGW3PSppHv1zETuBjbdBHT",
  "key31": "27PehVA9QjnbE4FcXxMWx2tcMAxsmSdNvvvYJJcyjYjeqCoDxEXEvRzBokdZQpdRvkQTA3kGvqtarQYgw1F2knWh",
  "key32": "5PceD6UyuaBWDpsL2d6Y97gaDmAUbJc8iVsB9RcymYzMKR78m7MJgbZjUXCHAGpWwnJtmfimuVML8aApTeydvGmD"
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
