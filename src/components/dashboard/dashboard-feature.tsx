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
    "5gNF8gcCzgTFBj5zw2HB1q2cQitTLCKyvK5EwipngvWfWi2SctdYV6YXS8wmHA3HFAC51giz8nUGdPwohVtDo81e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kbotmoGohbS79ZAunW3sXJu6o7R7FEdrkNW9t1caqSDjeavEadVcaDGcR9CA9difKhyaGRKF6AEgCz3g3Xk85uw",
  "key1": "L9kKd14VnZkNYbPu2629xc8LpRbsYTy1xADVGYCxZbsXEGCSCPgy4kDMU94xXYJ8QozZrmDfZVyCkcHnGFzy3tj",
  "key2": "3UBS9PjkcEE1WFQ3cQqoz2qLQXhhZrmnVFMcE6r5zR4vngw1PqW23qfdGfNo4Qj2zs8ZW6V3CyouRRmJww4PCcn",
  "key3": "5Cv7HvtM8xWnn9TtefEqdugW21MpjhE9agGZDdfpsKwuRehMgReekYvmjp445qdKzUBBMmP7aZWM3VCVAL29Qzre",
  "key4": "4kSM5DPsKHJJs4WihQPDMF2isLeaqv4sqg7B3LFjpD5AxwwG2zv2pkVhaCULyuQg5nggGAfPTvnVv6zEDHmEu8WL",
  "key5": "8HkvQqd5wUxEWB2acRzD1vKuX8aDYR6Qkd22nhb7yY9kDgFGMvMcyyChxM19E2cFCumAPdQSPv7dYkUdkWXcUPW",
  "key6": "2tNBwKf2A1tHRETucAmo6nuPCDDNMbcZrCu16FMHer4cuQdDU2MVaqcjyJGJspK2ibKqy6dQDHCPz5EdjYXD4cof",
  "key7": "2bwBYbcKCfXWgED6tLpshzSypwCvtUz21CHNbLe18YqjTgnHvriHsdCyqWsbYGbmVMf6Mo3bZ7coK3ZZKymzxzCc",
  "key8": "VtEnb3CQTUietcbtTCFvBNnPqkarUxYaNJd6Drd3BW8YcfTWZERtFpxkbLvTPE4e2WGNvTVatEkzWHCmTdzMxcM",
  "key9": "57CgscdccTeE9pAAsiA2eSmZ3ckmrH2kq3LJ8VoQesXAtes3SnkX2LmPE1vZbejUuApfKP7mu9ezCDNnxzej3wXd",
  "key10": "4bP75UQkmMyFWaHB8uPtg8XoDAhowN1AmSPQ1YcLn24nEAVM63zsWtCr52v5r7RrWz4SyTDDNid18JFRS6tw1cEE",
  "key11": "2oFT4cgoDVDoePGchjg4m1EESMMYDbtp9dZPLTwxYwTsP19S6Bh2aaYBS1S9ffB2KMBtAUZquNjwe7MPQYHwXzwq",
  "key12": "5gZ4H1kRbiYF4cHhZrdjQKRLSh64dF9Jys2kncLu1yjPVbcBXuT7diNxjfW7coKrwDEin6bFeTzZS7uVcsPEYJw4",
  "key13": "3WeFSbC4yCAS3L3FnbAokKtTgHU5AD1k3yzzAXia2mvu8QgWYa62DXNGZh81GVaRFQvgow1egFC4ie2JgNMNu5BM",
  "key14": "2TMRSezi1Mfdua7LLse2HjN4YbqWRXBQZCBWiZU8ftavUiXvp4sApjoZvrsZz4FZYSpzZMSy5Yqknp3naeSCxG6t",
  "key15": "wpHpdq99UKjy7TCA5pv71N3kc4BtT2Eu5ZL3s5tgRGDLf7tyg3B1Gz5k8ih7KZtzXyBqK2hEfJgdPx1JMFA53kP",
  "key16": "43LehXF6irKjA1ia7QtvHpyKMj3ULsxcM6uoU38eKeM8RfSa8PNvFwVdqFAWbLbaWFoBauQrnbSE5KnyzviwQeco",
  "key17": "4JC4thnqBxyC5u3W3N4mqnD1Cr5oEnzT3G2noCV9BHysECsocZQkGd6Mb54xADqQQJj8sAhBkshDJ5M2SvUbcACz",
  "key18": "4pkaVprmviBbbAaZZQrAucH6mZn8hRqxbPMPEPte1q51jB68BtbEaYhPjzv5up9MidVRAGy36VTUypz4hBYJMJk9",
  "key19": "3CU2j48hYWSpDNTRnCVje3gffpERvfLHGjAAp5NUYcsNGf76tLgPaiJrF9bLXLMvxLYrhrcR7hfNoZpyxTwfZTiW",
  "key20": "wrM7B52GzJdBkucp6eBX2wEpqRAafteMirrBUKJRLo5G6yEVYg6e9AGAPK36ufM6DvyT78VMLtx4r2TmXboEznE",
  "key21": "LrBA7WyVoswmP4ExwqnUYVbvWK1ZQcP6PWXwN1hNHHzEmgvEmajsjyMx2SJfoGCnghLYQiJhGosbKHfgYL8Gs3g",
  "key22": "3BMXH4U1DCRhZDioK5LhPUR4DheL1ZcDtrqp1rSo461ruvt1qDuDLkV469ZcTLEV528z5QUNc9CPMuYgG3a2HuQ3",
  "key23": "4iN7ZzTD4ufAckcLB9kFfHAdg9dMR6JkvZopoDCJ3S2F6bRjKzY74xWQAhFqxT7LP1TrjQ53RveZbJ4C9EpztNWA",
  "key24": "31iCg39B6cP4UYQzSkDRvaWkxmDLMxnK1UbXqE68eNFRTSS7Wann4aAu6Jr6UQH542Kywq8BVCT4xuPG5ab2fwcu",
  "key25": "5AiqhwLWjhnaCgYFbKtwqpsPsKkRFTcBbig5JRfhc9TzfyUGprUANrWdHwpKfbddWB8J5sxwRSXx9CWhUPZ5ReEG",
  "key26": "2popjZ9ZVjKjQVUCuR5LUDvK3s5Nv9cbmtbCMwVBsnEui1XgGS39zhkUyJrKJEWCaku6nrexzRCXtpQdpZhv9nBo",
  "key27": "53wS2JSAc81ftzMgLKmnuTRUuAugq4u4E5QAzTctptDWm4sEu4sDvxiAFrB6SothrRQjcsdZHaMUFbTsW7Qdads5",
  "key28": "4G2uSH8XBuNbTuW6nqLzYsm7KQbRLSx6FmyneboUZKmg3uyWkv7t1k9gd8E2c2Dy32kDUrst8p4VP9946Kj8n9tH",
  "key29": "396TNdutFCAHUAz5KzSmt8e37srcCLK38sE8cJgPaGq1dJA43XvT6gg6W3JEagDqCr4nZ8xXKoxHxBVYfAvUvVci",
  "key30": "5f9QaJuwhcNSdv4RGEkYHwNbX4W2o5pZ2v7RUSYSiaRy2f4RyYEBvWogdHqvFe2arPsZVSpAbLAGPWYJQFqdPrKk",
  "key31": "2JmaPXcxQrBLBRhHMQCRdhK49iRKTyGNAhzdKTnqccDKKD5wUPi3ukBtSdgT3L1uwXRzo9tnmxYeM4YUMXrdbozj",
  "key32": "izdQ5Sj4DNiboWadSPx6Udk2UL8knUfRSKonkx42Vm4epJmMHB3gWsvFsaXU5pyXT3HaHrhBzZ7842pfJGE5CcG",
  "key33": "3sBpXgQDWTpPDE4PJfxp6u6Jfx1vrRfJK89Qv97TuzUXhQJy1MPTV1CCxx2R4qkcndx5MLqj6vp7SLgkdko9kAg5",
  "key34": "4SQwarq14ZYtyeVAV1jvEG9aYdWBNyiCHY4DMTJZhJQgjNHHqpTxREqZFFzUXqdFdo9vN6Sa6dSePSt6MLdnSLCv",
  "key35": "nLVB9rvoVab4n19sJwAXZdSVTfwidTWaDz4E5w1F68DX38g87N45u6QhCJxwUhai56HXmxURDVwDazdTfxQDJJm",
  "key36": "b9p9wJ73Y1wmttUtpAvkzkiQEkgFkSzCFTttnL29nLFPUDc2WGHcf4Hqcs6J6ympcGkA5SXE6scgi1XSkiScPfh"
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
