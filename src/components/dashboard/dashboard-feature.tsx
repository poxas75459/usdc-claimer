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
    "32D7PJigJ6BN1XBMLZfJz15NVrbGivre5FwVAYo7ykBe6MzvfvVBoH9S1mtfHdJ9USApYHWFuDe5oifbsNiynt4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57XmXKJihurUsUQtSx3MPAsDXx5Boz4BHTT2PW8i1bkw76mZiiivE7zu9esBFmS7rZmLtnpsUyuGjGQTnfHzzeH6",
  "key1": "2h13hJUyxgUesEugiRZFDVBYHX3mQVwFyKAC79nqBWyCNZUB6i8v5qZpxWZX2wBdtrepndtaDoCpsSrBK3Ev8FaF",
  "key2": "4ikdkq7zVh1z89UzYXV2ZDHqHmkbR2XWHwLPGSnMLknwPLsuNTugbMQUBaNkY2FDDzmcowizpy1FmBeZrJRE7R1G",
  "key3": "5uzPVa7nHLrtxmsFzoywXUTJF3p7yXTa7g4Zu8o4mhoReonfVH29cNPFfu3CXXRUwDyxrMu4h5ZwYiFr1ATcTSdb",
  "key4": "32pc3tkSUozLFKKazCfzZvbMRLhy2dpnzofKQzj7VxpLcGwKrfAam7eV3yd34AvakCYYbTAqa5oCy4Fanfm9T9nX",
  "key5": "25mLwV9UHvz8ujwnvArQi1hgxmm5udGReZT5cuw6YU89PBY1NVW7C8wLFk76qMg6SZpWk7mp3fTg7sDWpEzN6PeQ",
  "key6": "4sC9Au7yVrDHZH9Cd7rZoksBUjhKaaF73h1SD6uaaxETGpmW9FAMirL3ciFG3ngvjesJvGH9gfJAaS25ntwi4MTt",
  "key7": "X4LXsAKSznV9pqmUhAAqyAARnnUGh31QKMJAiStWVauduhNuhoWpPbYyXb3dMjxQtqvNNa41NdTtate7SqiDZP2",
  "key8": "Ze1pn6vQJxJeF4BXKTcxoeY2ys7srnkiiFMJ8aCvc9GQ8akBASVNL4PXcLRTsScBTtMGcz5LEB3KKeyvbhF5GvL",
  "key9": "5y5Z7ATWB1PRdFR6LstDjRZ2Ccy3ve6NTtMdVdUvHWvE6cM2Le9FAxM7WSXUaeNMc9PHofgFJoJ7u6zz1aJp9xGp",
  "key10": "35jafHaAeB7EsMbcpCK1Sygv9dQonYWnLXZrGUErxZqv9YHLKzXS7cQ89VL8nMzVNGW58P7R3jP9mei3vG7XkjWJ",
  "key11": "4Es2HCzsRVV8YY9rPabHMGgVYLE5mTX92nyZHVSyD4ropJSgxZLNVU9dJkWVWE5N7vEZfCK5whXiqh8NFvrFpFPE",
  "key12": "532Y3e5v3QRTpjZyCseCVj1VLYNRL2Eh3PA7jdebBg7MBVSwCnyDznE1hdgM5Zka4NLf7gwwehS57JzwnBRcac73",
  "key13": "5R52vpMQm1Kex4tZDufr2j4dpYQcufvQpXNMgMRxkhBQvt2KhA5X9UXEQzr2w9a9KB8BGMzEJ39nH76dNjp7FL8M",
  "key14": "3dsSUH7e5Mm6irNfdAMCAMAhD6iaAZZmues8ckp3cUF9Unzft3f1q2JbAqJwUu2pJMHhZmkfHga9oHaQKdh1eWRp",
  "key15": "2AC7r3no4QQRJJ9hkHJN9q8NBLqJ1NQ7tcxqLvAxwDxnvqbSsgGmPVmNFH9yMZKfXG2om6QDmJx8YEDnHZZ3BDWK",
  "key16": "2vHM78zoZWE6nVc9QvBgC8kkPoziHouACwpBs5PC4pbgPonNhDzGsPx1EPmcMUuGuGw9AEtrcDvSiuMsgDB3pG1K",
  "key17": "2xvAfZzEH35rT4Lm1rSG183d2aXqNQ1JYgcfWLy862v8zkJBJSm9FCzAJkAfvchjjDNMQJ2BCxnTBwHuNV3rD7vv",
  "key18": "2kaqpAKmCurAmPVCAbUrY3DkvYzVhz7gq3miDAPQvParDkfTisoZwUrZfUPe34FDByESy5rBiow3GWVXb47MvATw",
  "key19": "3MQ6t15PsSjkEamEUDzSGXNsoARZtLXdssvf69RCDi5p4FBLfUZC2ThjCftds2DT37PfZBFxUQAy18om1WucxScY",
  "key20": "3TF8gEyrvH6bd1GVhe9KcX3DHhnmGnPohYVqa3ErsMDcGdUbLbHVmZaQ1STaFBfEQp6P1adSEHhhsqbwgMr39J8Z",
  "key21": "4oSxKyG6Qw943msfUAMHe27HjSUabU64ZFMpt1pxkbGfq7jz9xJj7GjQHhQpCBVB2SZzHUUu9AZFRhEdqT6Psfvr",
  "key22": "5J5ptDWCdck9QNXNmdSeJpf9kh5HYouAFhWiPov9hEiMU8jXAkUPcaDuE7VabcDMYdXR91E6L4wMQsoL2vebQ7rn",
  "key23": "5hGZ9eyHc33AkDZocDXF21rdeWV5R87MtHkFAC9w1LsaCBpL1d5ESn6xMQtJkZmXG8pkwMACGpb379DUHUpdwE4G",
  "key24": "2P88BHLrkNeC9V9j8tBphXHvRrkLt4g4utURMKaySaum9fbrWhfHuwDJRE2UarcmyNiZnreoLB6BWNUcKBgb8swr",
  "key25": "5c4cFnToPpjnUuq92j9SkmbSgxjrNL3vonSr2fJtE5YtjamKsDyEjoaoYqS1cu1fDeJ19ZkAjGkqPMwRpXMjSrkE",
  "key26": "56dTCfPMYdLYgNAMFN13bihy1cgcvUD94SLXGbfaStuoBK2S2JZ81Khdh9bQJqcFSMJBfFr3zt7eKeMSnTVPMgRR",
  "key27": "4xYHqcmhPnsxfvSr4aJcZ1EJKwM6VeWK3hro3CAKXvN7ya399BuALUNfoWerUbgMdP5KdypnTfePLFdqdk2CtTfN",
  "key28": "pegKZySY9TJrq8keMCry3VDrdnRggobNLXhcRScR5zmpQV714U8BmNxgEvtTvPYSXD5x2bXequiR1Ws3fRo7KVU",
  "key29": "4wZWLizqythhtmrZXxdJN4LaaVRLTRFKc29hu1x4iHh3pDddUwcnqWDw2b4Q5UsYVEjGjWQ3YEZ3GGnkewf1jX5M",
  "key30": "2vbKiRjMHp3ZH9dCDfMbZFV7AosmzNtxZ3mCKqpyqnbBTbEzDh41hw9dMKKbVARLZxQL4zV7m7uMF4oauuENqm82",
  "key31": "gLVHEKWGKbNsmJWhbowRQp2Cm1pG3x8yx2euoEoGjQbeY9fP162e5fHqm9XYdmP8cjznHttivmF56chERZzNCLQ",
  "key32": "5NLXLLrKwCn4c6ALAYSScL8DTzbd8AzSuJXexpRyqvdqVLHFetdbjeu77h7MB4zHgLBa86pSCZByGzMsuCCgCsnq",
  "key33": "2rDXAUXub3zx6kznnEKxgEZDan1qE1XR7tY9pWewnJ5Mfapu4qwh5oXVoaRtzMj52xaUr2sHo1c7w287WtdoJzmD",
  "key34": "644YLNoSGn2kpQ5MWNBq9s7SaB76Wno3Jyj2p8R54LMyPnQaEW4kkV1pbUs4d7Kog6SmcaEQW6aeT4sqKgpV3BEQ",
  "key35": "4LXsE4Mu6YQsVRuWDMEQXbeDn62TnFGjnUQMQut4xeiQWkvVxSUz1YAvLtAY19xuou5WKiHVnLzemyCUTRrGWhg1",
  "key36": "36g1cCSLLwYSsJkXKtj5rhRywXPdi151yqbqJ8mkGEBchL5mDZ5eK1N6srYWoN2fYE36v1zBNsVosPk9Nynhbeak"
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
