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
    "4R3oMgEoYEogSPYDjgi94aYDr4Zg6FWE8a4NZdMFNZNLepc4maCVjHxXZUuhMk2tyMhJZ3X4DGwPDTTouiLsSC53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AD6wd3CP6EJseEoGzXji92QmaikEnpQaT9uFLYwSFfHa1rfhYANCcAFwfMPBTtmBqtZi8ciQUkHtmyLYYvesCPN",
  "key1": "4S5Uko63Z6H1nwec1prppHxeos3W9cfKud5wnNahpnyJCh5Vx9L361RZ8WBrd683rytfHqN3GXjS5YgQ7yRztC2P",
  "key2": "5LMV2xLTdVwmFLvPJqFmrBWxqbwz8BhsaG5ysttimvNi2rgYN9BJ94MSy7YXrbCMC2hcQJUvxcB19XvxzVhhJASF",
  "key3": "2ZwbZCrxVGMxDehcJSvNZ2a25YCmsnpRQf1YCvUZfHwVoZkpkYkwCYZ4exPyTevSouEyaLfYThfkDC6BRGdDDmpv",
  "key4": "3PfzhnWSMD3HHsis6CjoxAFCfy8fAuHtshoiuPTURrM9kauZVhAz6h9cjNA7AVpDecnBHTG12Q5zn2D1HEhzkaQM",
  "key5": "65srUv6HcgXkqMayX7ULZ2VbMzKtLcw1cvy23pf57HdEXUJQqP1tHbrtGSR7hHzDrsfkMrh1ghLa8kErgA4oDitY",
  "key6": "5ELMC3dmdzEZa6B5ZDKXb68ryJicv6Lc6PmVJqixgVmPkDPGcpX8q9DW2mKircFsnAy6MkmNujBRQupX8efr3sJk",
  "key7": "3jECxZpxFKwpPB2Ba8gtsjWqiihrfgeTx4fj5ghFMXkFB5DNXch1kUTfY37qhHekugtieBqCbNZH9CGiqf6p1D2G",
  "key8": "4gKbRVCku3ef19s5bfSkZWruxSy4E2FkJkCCJHPFCjiCvjxeAGyqUxr4u7aCYKkFbNDx3gwa4mTT3tQFLzwTEHTA",
  "key9": "njdGPRYcDe5doQMjdwN94VP9p9JGN8oR7keGT9xiTZeysfvFQoui9ca27QfsVLnQzZP2P1vWVcj86hcP7VSYTdX",
  "key10": "5pj3FJeWhfDcgsioWUTuWfUkr89weSM24k7cAUKKz8JN51YXjNv2Wzhc9ATcepCRnKGMZjZxLx2fVKz5jUTBskCx",
  "key11": "NCUQj836tfjMqRrJ1Ub43WVYsw6m8LzLA4u2Rf71VSd2AirkUSSRJHUohjUH1Hs2vmjnDL5zJcLAxcCzLxefeoX",
  "key12": "2TG4aXu6jvmbVGT2KGbhdsQaLNApPDwHD2aKvGnGD9EvKU3t2TdUvV6C3FCR9E8CFVrmR3ZzVgYVHeD8arqk3k8v",
  "key13": "5N4koMcJwZML5gatWRsRPcGUMdYZMhiQwhRAKwwmdR9B42W8tz6W9zqktVpfaFkEq9rZ6nCTyEAUBoo6FfEevXc2",
  "key14": "mk7XwwMr9pYCgmRuDEogb1LNdk5kAkLhgwYeLRDeNFSisaw711ZduBYBfRnNHxWs4RgTMn2NJ28GbTB1WMt5u9o",
  "key15": "aC1BUZUkzsV3w58vqEqb7Yh2pnRroS5Rweuijq533xuC3epsCiEXRHUJTMrDYnuwnNTGEWQuDKKUDZJhv9gVd8R",
  "key16": "4f8u3VpUyuKkuGgbd3QSYdNRSU9JY98yZ4iKMDVg83BcrTQN6gRKJgWG33Sk4LFhdS8xM48kZAFNH2RCVt141c7f",
  "key17": "vfzESKk8KiTfnaBgmavGaCwguRNntpuhfXhyxJfzDcQzZwzyoD6m9fvikqyrDJrFTX62d6Esv8ZGYCtgak1BNvy",
  "key18": "326bPqNfqnRd7yJhpv2L4ZqDNYzp7gDC3ETq3nZgzebAi3icDB9Ej97Tgk97srCt3TVhsR77gPuUzkBGx8rfMU7m",
  "key19": "38YEGGGPASip4YrzdYyU5v5vAiD8bzHhLu6kEMQV2aNT9YqixmEWxNqMTEmy3ZkvfykGPuAbsUhvPEs2HyCxf5Ro",
  "key20": "3tDkqqJT1toienB7RK4CYH6MhVeyi6iPEPhAQEUZn9HNQHgpSEyg5QaqwjeKPrk3zJzvuT6xZ9fhaVLiL5B56KSP",
  "key21": "45ybecq3GPPb16fTpVbp3bFtJ1zDE54XCrg1rHqR1qS8YuN1hn8uGq9YCX5NVPPrWc15LRFttih8TCk9odjjgCU",
  "key22": "4VwgYXVwSQrooXNkVdcPSxxj8rPEDEuhfqxZcdryV7k4YuofBfvzD2d4dWSa6a8qSgpAsuiGgSjMN4UNFmMJKt7",
  "key23": "3tr81JMBQaXv5XScirW3chsfGXzhdRrxgxT3oAMeatvNAC7s9DJPgs3NbU57Sab89zDPj24WmifaRhhwD6Cik88z",
  "key24": "4A4R2AqpNEivNTdqcLcUvkWpjKLCpq3mbAz7T6K7pExhRN2xe2HK4YcrrCktYQCtMV4AbNZHDa76TQuFem4w3taN",
  "key25": "5e8omzn1uhV4LzoYWHoriLBwvNqMVCqKy293kSYKPS2dnyVzXv9MTtqUnW4mCLHPQoNfNTiTKVSyG13UMvRf4ZYB",
  "key26": "5SVvPCyiYCBz7c5uXf5myk6DHdHBvkS6MU2rb8HPg4S9NGvxKYXhDNtEzkPZgV8XugWHUWFFwrxP4NvX3sb75Wwg",
  "key27": "3rRXeJM4ddJKMMZQAcq1CfBTLVpZfFvE7tpfUY9mv58Mqi9hbHSdVdiPtrzbaiJr6uDfDCmHL1ksiTrCoKBrKzze",
  "key28": "67GKqaqNM8HZAny8v4XwCjqu3opx2DbruJqqHm6cZ34JR8o6ypQqEF7yGM69vEm6yNSLoYRTK8R9ZEfrYgQNZqgW",
  "key29": "4izx6z3a7guXjKzVPTjgNk5H4xZ3VjDkK7Syu7Y24o6kgg2BGdpQcj3GDW2bKugWN799NSXbjQS7kRZ1yEGNYyQz",
  "key30": "3r6AxDajxaij8MPXGWeRkuEGiQxEDob6Sbi9sgQ32DujEfYKcrNrvwxpYMvXnZJsJLtvLWoRjTQ3DnRobZXKyGef",
  "key31": "3eHmSzbXBEHY5BvHhoXid48JRAxswminCHvYeKik2E279zichPcCL3WWnRCdt1B1V248eYw5XuVndcztzYBsKToq",
  "key32": "4hndAqhbgphpRHWq9xZpQc3ihdta1MEkwg1eAKwGpfix5rk4ALjxcit2RKXd7yaEbnkVqbvEhviPgiyo5rJEokH3",
  "key33": "5AkAq6G4uynFtopHx8NZghg6xfjP45Faax5w5TJ8uUkUdrZcZojaqg7GNcDdFwmE4xTjTW1Y7CrgpFA8rQBz33gZ",
  "key34": "5bXubuNSDUidJZJzcBU6Hzku4JJhgE7ao6BzPXDo3b2qZwhkfAXGRcQzMsEHA4jLZ3wWmD8T7bQ5MnrVwZxdADFC"
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
