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
    "yj9TvDNCN7jFLvYNQzgb5rcK2VJChJaLCJ4rMH6a3gNuVKoZSZSjgxDLTYMcxUxqyMXNp5GhiC9nTHvpieRFQue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wkKivxCDcX2gKGRiVviWrH1LjJPN5E58xpYjGcuPCHpNTCmcF4oX7J5JNxUrDpe9wzwTFNEETCBX1ko5rQjenrC",
  "key1": "2aSUkiMuUE5JesUN9JbCa7Nwjxbo74rCjmkr53XDkpEC1yD7ytNFSqtrs3KDcJR1qmSbsn6bknZTnkEij477Cstu",
  "key2": "ywaVTeY4NwheFwCPzEEjbxjdhdUg7TE5bhFtuHfK6bhrVuALYDhcvmJCKPedgKToM8N7E8F3ECLPsiGHkKct76s",
  "key3": "2bktv2EyngjodBqXkjtL8ZwLpMjTzpfXsi5iKw41DiiS6BhmXva7TLo4bUWHb475826JTtcWCpTvXjAHRkyS3657",
  "key4": "5jKAETtTNk5y3dThCWsZJiWyXGyFDcRZtECJ8tPWQiX3SBMAMfb1z4qgiAAQWwzeuuZi59BUVj1gz3iXh4bynpGD",
  "key5": "7oWWdL8Up4vKcCXh6nPXvbQLj3bRLUkLrNBAqTnXCBCfKnHhsYtGsZPbtHqtJriL1zmzuMnkp1Hpdez9rFJJJi2",
  "key6": "36xhPj3XLMUJGEzEp8krGPapx1WjGKfnnHHqDZEbZoxftzBMRzXdvKbZZctvPd852uxDcac2k9GMX9AjaNKzMnyZ",
  "key7": "5Pi3MofS6XBDJmeu9WTMM1Jc4UnoZ64m1seipfB3L8rDNjhYm5RRyuaihGWMsxDXdCSGGdSbFVjNbaTUum3gJVLe",
  "key8": "4z5YXJhrFBwtW1YWZ5DLSc1Ln65NvwjJW6NqtAuP5Ek64qNzKcUGrNkUbydfy1t4ASkos1XNHVidguy1Yb9nsJQg",
  "key9": "5kJNcvXnxoq1Ao99KyWiday2gnPHkweCp1LjJ3cAzkg9WkZ4ry7p6Z3GE15fiqKJTAPBKWNEZL2ASCNSDGdyoGU4",
  "key10": "4FdqukGKH4gWRM4EApq6B24SfcRhVaWBSzLQpSYtCAPYEhNNDuArPwKguW6TKZoqZfbr7rL8zKSiGV2zq3n9aUD9",
  "key11": "64UBgEnDmjBQmuJPvyYfFmxb18wUQEw6C84Y8SSb3dWU6cdKWiKwtoUjMyXQwiiUh6puSJ7RT8AeNRutLfpKvGF8",
  "key12": "cBBLVbMGQQFQ9jfECKBXf6YaobAnNEpriyeNHP3XbRbNrVXHNYdBDqQsmebqLyvAqvZinhs6T7RXS45PSJVpGEK",
  "key13": "25e6BtgxmrwJY2aZ8bMDQ52UcHhayepHBZfK6YsdteDRxEz5hCyYi5pEfxwu9fPf7BDs6i6Sbw5Cr9DrtgmQFbX5",
  "key14": "3RrvBCdviwmVnGPu6dKVxF9CKMX3JswPJgrwxkLLj3w1hQ6DM817HWvxtKmmNi4rXG9s7ZvYLNH5idGPz8HLqDnK",
  "key15": "6ctxCBHiuMDbwKVkpFMxLFXtWYwETMcHZd59yisDqFACSqQbgyuiZVb11bNHoB2GtJdzYVmJ8CGtWtJHoaLDVhD",
  "key16": "5MqjrRWmRWSBuDFLPMXsX4dYZuhTFG8tnvRwJaXPPA25J8iMwaNDwp5H6XPMcMFYPdUdThBdLH8HuLed8oFSQFbw",
  "key17": "49yL2Z461tvqxrs9CaCyGTpJLCyq3xTsSbLefit8xrFbjFZp7XcqWzPV1SMH2K757NMxzMbbfinhLga171sXrzqD",
  "key18": "4urhHWshKFdjHoRpr3amxbGPGTbQkB9X6AfVycZaoEAaRZzxd5g7gqebknqdDZDZB4a6KjNy4KXU7DFJs2qLHmnN",
  "key19": "NmrNehJtXfF2RujXR5jf8rii7vKnKSLus79U7pzftYNFJKzTxjQNbCUmXc7jpxyUSnpnS4wwtSSzUsEKGxS7nqE",
  "key20": "9S9DkYoQtuFpyTvME9dR6Mr4A68c1BpMxDpzxzrDJY4aGQ4xR7edYkn3AzDsJLYsxiKNS9dqc1ag6fayp3j3jK2",
  "key21": "62nGfgwwpCAQSmrp5w1vPfKKTSr5vcU6immi7CKobJVkAHUBzFHwRrR6dhUG2rH6JNCP96Td86me9pmYR4kdk3Qa",
  "key22": "3e9DARWQUT7Wpxpubbk9EMQg2vzGc2RAmdknNnKiPBBRbN2Kjj8Y7KqoNkwJ7AJNSzg9ZsN8LdPS957c9ECTPYUs",
  "key23": "TpUbDWmh93x8ghm8jPd93y1yhPv4vRm3XdnyhRuab1GLAYyjMx5TQcVsYfFnr4cd298yWaStzrXnnm3u7kGCDUV",
  "key24": "2HNUBFYEdRMqhXsoGof2XnQMSjKvtSZCZuu3mgeT7YBSmWAj2yrpxiB1zsZ9wLddbF9sFH27fdWNzGtDy9HP5TFk",
  "key25": "2kV3DG4DWWDetar7C7eSj75E9qJYYHVvAo26r2raX9QAQqAf1FsZgk2EajkpLp1EAdBZpv5v4sRynCsCkmfMkbNr",
  "key26": "2uBaicw8dmA33gGH2J2kf94az6L5pMyM9yCoV2jaJQRP1G4prwwL6RS4vTpt22vvMiVJLVKEBmVxhHvg6imu1BfL",
  "key27": "3Kf7mcE7NzfoB2ewB5aHENVQ3QzH4EUh1EGuJV9PRLDFToJSmLHo5zjTGspEMA3PCREGywfe6f8FgKqZKS2raQmT",
  "key28": "5BNvPoxFAnK1YPXT8epD3Ps2osQcdqzjHerAEvah5d8pEovdLhtSUU4ZTY9BYF8FVUaD2BPRsEk5h6yiCLTiCgSi",
  "key29": "awTAJXk6UVDqyGvGztdWLs4DFoNkLjPoJp4MbtqBnkLxsaXyXEYoFKgALM8x6QzpBbrE5jp4Dxd7sCm7naJxqp4",
  "key30": "oYfEGCJt1QUYvDhFBGJB9fQqTXnxvNztZTn2NRkUFx5rTAu9HFhHqkzqTuik1fxNYYHojTBgsB5x2h5gYPeqqPS",
  "key31": "28DX4nZptxHkPDaDJvHVjwovt7fshE9EXwp7rUDKdwYYw8ek6QdsBZ7bPMUJ9bfruR5bbWmgf4WpXWyp7Emokeqx"
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
