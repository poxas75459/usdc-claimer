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
    "Qe4t5vdDT5K7WCKHSkRwgbDLxgtuzasADuAyYfjHJTL7WxBrtT1ogNgHmvHX7JKSmAqeKTYMSSBXuYw1mgaw4EH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "krC7zP32ASWRhqBAEmkSwPimnSZUJgYbYm8yvygizjCjia7pzkrJyNFMmm8qw1EWBjuKYo44F6jME8ZoQkE3Aju",
  "key1": "3KLSJZ4Mj34g9ynW4TbWUbwU3pqYUvEF3L5Abtiu37GwV7nN9UnX7dqZg9KxBWFkBHWYovmLj7GXmGGX3pok8hq5",
  "key2": "2ALbFoyA6vD9B9QdPVDrfzNxXkYB2RQTgngoZ4xSXPDk9okJNdCsuTQopLv4yZzf4K1L6bnATGEU2df6d4BgKSGA",
  "key3": "4U29FemdaLyT4ToBmpTKeRXUna4QaByJnkuARATSjHQpvxEFvfA1jHrvTRQuAQ5u1w1SAmMmGGn7dX2coywd9hbU",
  "key4": "nrGRFEHxoVRBqPphX4AsKsDDyZZCWNPQGxmW2kdT6Aq8spNEzoZs5P1DpZAYvtKK9gmCX5scERXeydfqLmSmCZd",
  "key5": "62TvX7scKXDZKa6WgnUxuiaTCrhNLZA8Ma8dtMVQZiVyHPMduYC7ts6o9eXAXJBUFRGggDn12PagdPoHUALBD9hq",
  "key6": "49yJyEAEgsPiDjeGwb14LdyviL4yYLx3rDG1XspHgZkjotuQhbfUwDRJysKuHHKbAHRaaZMGjvjNN25RgHqxQREx",
  "key7": "3PPZKPR6hXvWu8tWbMh5S3d1e97k8gevHYn7qBFaqnVpSC7wwBYgj5WHwStFNzB7SBJWAnxc5M37XKZNrGUEZANR",
  "key8": "4N3CbNz2yKkfQc6jbLaJbTz1hV5t8ibqHtvqLt391LhSybLLjd5v1BfG8K5EAGhRunUkEgZ13FSTFcY2275cmoKq",
  "key9": "4MyabwW7rWmbMWs9D3VTuxzivz35UN1mn3KocSfnTzNF5qgDHde9MUj6bm74JYzU5fyNFsnkBZUXaJkCA1T7xG1u",
  "key10": "3fwpWg9qwz3iMFx891roQT3fhLNNTW8oCWTeoWrn6csPFFnBUi9d1gX8SsKckjRxUz75kmtZDga6Wr6JvTD9Xr1X",
  "key11": "2JgfiyNdFHhFwuabD3TrjFPDNxMSFyLX8qrmrpB7hWpzdFRhofgTCaHfiaqN6hjUF7jKh7JBBenPTbR7RNVasgmo",
  "key12": "fiHE5fW9f5XxfUw5dCPxbSbrXNvHbXJPzK2qizXmQQiSSbo262utpTHMquimwM71r9BJvGCgfZ5KhvTZXnTxQvw",
  "key13": "7TU52F94nGdc77616GfbmCr7GsjdcvS8P2eiyqpaXHGdoxeCTNzvyz3PSkdvncTw82xKknwatY1ZKCC33GopHgt",
  "key14": "5PVAh6vFkqw3xz3ezre142WQoJB57H7hMFM11XKaDh14ZQbQvQFmiLxnCuTiTtCNWiH6VBarRMQmJuXSRPDY5v4r",
  "key15": "4Zdre8BWfzwQGSfcDAhHgT9kMrRureF9k3ojsvEme4iMjhCy1zRwMRWndYvwrJik7Hst4mt5YmhevGPPkWjMwhaz",
  "key16": "43665voGt79qNHFu8mL1nWfnpdvkzrAKC51jMYrhkFhFSgyAeFrNDExmn9cJMNUYTjkm58BcdZB1R89qbmGyy8QM",
  "key17": "529cTFW55saDNLdooNhE6jYoXnS99wXez8W95WCDGzpD2EEko5ZfEKPsEWb1eDyNpEZjCYvzjBDeyRNvRxAHCnMm",
  "key18": "iNQB2vBp6TSdhZXK5aUgA2MupF27BhonabNgpWReQyfisaPJBc4ZLiwMD7BqcKHva44uMGvVFzBv1UXC2Jkxzzs",
  "key19": "4qXELvZpcJpYqGD7YeeysS6ABPLXLPTYutdtpgdU4W6eixMryAA3w4F3pkV3MMyUhDzhpzS92Aj5GxFL5JTdGrJz",
  "key20": "gqvdGSxfEWgkadPLV4aVUeSyiKqtNHrgKP5YczHrTdRJC5FRS9U5ddr8Q9ex3hyMEGbujtQUJy54uEhmyRFLQbL",
  "key21": "Q2BK54tCvXkD4Hn4iBSdhG6qZD97eLU1LWC6ikiDRjGKPAmE8uGtUGNNZWffVPL5CEvcUTKPfYzmZLTpyDBSbVv",
  "key22": "fHcmUZCk2hz1KyFeqbuyFh5F56jNtoVjBJ9XZAVQbmuhiB8pk1DgqmucSNGJAbTceu85WnL6y89BmU4J7DhaoGB",
  "key23": "51D3iV8ka7T84bAwGyyTMURkfeoiincgkKFP1LbHUcYq6xy6Dt4V5Ry3CusXHLNe28NM46gJKzE2HkUQUZYpuwuS",
  "key24": "3VehsdATLYmZCMysm7ifa4daD8Ne7Jxgk3vWnLghwqSfhFhSBSfqy2SMVau2Uc1yidx8mUwBKJ81RZyfMMcjgU6s",
  "key25": "4cW2Dh2nBsBh4eRZgbjrZUxWwnP6PY7w4TupkaFfGc8Rz8aeS8NoKm4euWYjNJ6R5aSpHoGkzsaP6MnzmAz1UXXw",
  "key26": "22r1rkWD8MK4eSNbqCKJovG22ftMMMBMmyMpF36tsx9CX4Xvzw1EJGxjQcBkrP2hcL1EbuVm3DRX4h1dxgdPwGdJ",
  "key27": "4fdmS7VkgemJkP82wSQR2M1gihYKBToRa7qg8GFjPCmjtA1boGTG4hEXWTJDjQcoRzhfuo1DXyce3ShZWxaZrQEQ",
  "key28": "42n7JTG9HVaVmTja9TuEt447Nt4DjgbgcfwmazRxrrBVZfpXcHJKuTGjbrLQKHSSyVRf9fpkQmjy12vMExTziDK7",
  "key29": "wkFKFxrSHGzTmaxAmYjMCXo8FVLSu6MeZES3j94ELGkk8qebgUoJBKXd1KJ2a7iJUWSYU7oqpdCJqrZfKQsJ6uv",
  "key30": "VWgW21cGcZBiQxYpAJGFcy3C6nEuzLVSsEQivPoh7zJnSKyxma8VafsJEHPT654vaED1PYHsm8XTikbCjZu1sFa",
  "key31": "3nXHM2qj6cu7CS83Wq4vSrUiPgqSMrtA63voeVu79n2smheajPaCfqySx2osWrMmZNzHXGPA4pHQ1dXBV7L6QmeP",
  "key32": "3Gu79pxE63NJiUDsZAkYMZnidAUKpuijQ7V2q5qx76xMcSLkuFrx5YNM1SRxCFhhCkMaSW71yEoaMEdk9mjRkPRZ",
  "key33": "2f7ekQ74Nvc6yRHSMYzRFAzET2RkkWrapEkdm3YDJ4yU1X8m9kU2DGYYZpiUa4S5YhSJjY1rX3TLP7Rb4akovFae",
  "key34": "5HTvNPpKCNGoDCVvELG81BRf8A5waZ5rWtL2QZuFYingfWjiMTz4PjSQfxCXGny7YpDTHBLGLyTpEcSZ4TVJGHQS",
  "key35": "2sK4omS4yJ8uttPpMwzuRTyQjmhLSUwNJSshcGkHbGX4cxaGNSnGVAMWH8wA6S7kUwzDSpgM6JQ2yFxb7NeKXWEw",
  "key36": "goJA4rxPx5BbHp9EUSZGr2xfD2zQq9BVkheM57HJpfGLURZ45gfaU9X2BZYQneGprKzes3Xb4VfK9LkpFBi4aP7",
  "key37": "2PBQHncZLkDjFfWGr1r3doZi7sH7gZctwLvoCCtUSjE4mZhn7HwzJcwi74DEH6XCrGMAu1A1KLQSv7jKfvAqpeYz",
  "key38": "2sq6aYBbyByqMU5DRD3cLqaZjv8HpBqVPdfatHeSBbyyCoD87MMkMyiDmiqEmD15EVK4zEniRfJmA6txGoH8xWpH",
  "key39": "3zZ2T6FGjpyn5tUZQGT7DCR2hinRrusJ5Yn9VGAaRVok9UBzBmiDp71iLJiTni6LwqFV3pyRjQoiVuFjnQFD6R2m",
  "key40": "5KAFzuWBBn1qrMws18HDW4yxfzwyox1UFfHVGodWK1oe3rEJkFrueAjvmELFhzAdZDLb5u1JfxMoZSjzH6q6gzxC",
  "key41": "5wh2TsDuePphw41Doprj86JCZJQvewdvp5J7qUe662iKMrReEpJx3oP6xeXJySnYQSkWVrMHPK8kyZ4Rw6KJyU5Z",
  "key42": "mnWhUrerKggZWemp7DGspYsPv1iPpcMgqBsMUKUHiJBHMswBBCbxkAzTrwf5PD7DW5ymEHXxYx5gWL4X6k1MTXo",
  "key43": "3essp8BGXtHDw4XkgLYkivmn4poracm81aJ76bshUuGfKjvoDnPF5h8SyFapy3qdGD4PzYaDV5rVFM9FmRdieqk3",
  "key44": "2biUvR7n1DevgLw8pQa8PNiDEnpYw71BdJyxoteHGuBxce6QKjNJrz1XeKLcjfruRte258Xe936xnE3j6EaQpC8e",
  "key45": "46qFWAjhzp9TaFtfCvAm6Mu3n4xHPQ7o7EmGfPFx35yuxkELK5hFi4kuMw8ShXwStgSwDQEnKjVnyQc88QaiFHjj",
  "key46": "5DnZ3Y8sLQxxNRUozFpGAcpteShSqog6BaHheysza4CENCGR2qosNG3AWk79hgzr2PTycy6nPcLUGwQ3GxSFM3kM"
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
