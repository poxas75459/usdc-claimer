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
    "2KZm1qvp4YAubv1HxPAMSv3ptNDK7PDQ7Uhc3EkqzUCsczFwWeeowYdvgzjU2R9AUQASBXmN3R87kbLmLCrWwqcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fE1pfVKWbMxEKGZssK3zKHpxHsmbJq2GB5GbiKtadhgVK8NmLHhNvtqnB6jowksVDzLyz1oJgwcFvJQZGzjWpW7",
  "key1": "4Fzj273Y9GdKrc3FtRqEmLEQ7pmZmXHcJPwdWbhE5vLxMDpALuviJ6VPZmKQKXsHfpRZ4jH8D54MRryJDNcBtnSZ",
  "key2": "3TcZiPSdX9VegQosC1diPTYeE4xXfaQYY6MBvNAGxCPpZiGqoksTn1pYAWczrSvniKwH4WR2cDEnWK6tJj2irLad",
  "key3": "2K7BA5DE7VxyDJNmTx7Vi5VfAqk5TkT2SYuPDaMqECgW45Beuyyt3C5aoK9dLJuRwunZXW71xj49MetZAch5x2vX",
  "key4": "5ZkAz83zo5nYoQL2Te91gCpowZZ89mhZR84C4BLZ35wWVgcHpovjvgveETQ93mhNWa4BXbVepZ6Bisss43s5EnXp",
  "key5": "4kGWeJ2M4kP29EMScwXHqVojgeULJQiYVBD4oQJh5S9CSAoJ2d5gggfkprUBdXrQ42hYbqi5NUZhSJXnG75Ewuzk",
  "key6": "aRGTo8sX43zUZgT4twNqNgoHfXPTnrMgJAbU5kscpLxCG4F69q5dnpsFqgbMTppWRJi5ZHxmZyesQMN8KtWzcRw",
  "key7": "56Tmy6xtzhtz7SjenNfN69X64B4Y6EK9rp99RFjPTS3aNEoAXKcEjPHgyLeo3XAN74PZ9bAmRRAdTTP6pAVNCiM9",
  "key8": "2WPfuDCdk3f2xxttKTKCgfBqDsVCPjhj3UpfbzrQ8sYmyK36hx9xGCginmoH9HUtQoCkk4zKcUxUxRsYVgrkNn9i",
  "key9": "5b1LV2zp7jvQArnhhPVWGCbUG9RBAh6xgJf7BFWsAY5vuBQEqJbzDzQJwj1sNQtrBHWjmeqRBNh5aeQ79CfK8i2j",
  "key10": "5bTHo1GtDGB8qspBhNEN5uV28B6qcT5yLpyfKW8Rf3jRSUoeoUeoRN3gJEPUacjiVBvWiTt8fkJ27dqcCkn7CUhn",
  "key11": "2K4dbZ6h4tRJoG7YXMdTUsTpbRb1ttA86J6dGhb5JQpQi6FSNW4rj4MnDgwvTQm3yv3A44qva4yt2K6ZZzNCeLxv",
  "key12": "LA2XaiHC7AhZCtdX3iSBvfcgE7jBLRynF13bQ89YMd2dpAfbenBLAo6QChzdey1yr6FnGhrvscDMgmLk8imFVzP",
  "key13": "5fSppUV3ErtZ7faPx63vskj1e1qPJ7KckivBsnqDithoKenpxFHFN24cjTXV97T6rSNsY2bPAUAuumjkrCjy3SJq",
  "key14": "5uBWEh7T1ZYQTmyZXChTbEyLcYo85n83zZLLqBRy6VKxRbcDKv8NJJbr38nfBf5BhJN2uihGnVTy74X73XXo3vyk",
  "key15": "4SLshjgMrA45d3DZTMc64tFbVWD9u2A7nfwmp5S5jL6ZKWte8JDEYHbAyH11RF6gcr5fTrkx2WESPNi4nzBdMdYj",
  "key16": "3aSpUD2tTLzJScRVSrasEJ35BNFzHVPjRfJYSEeQh1QQ1U2rVdt9Fy53CTHvBNbV4HKtpk3WsAKu28qMTAEQiMov",
  "key17": "5FzcYHd7R2kvXFvxzJ7oxEKw1yh3dezsd2eYfmSh74EDjxqkQmaHoc7WBPLwheh8f8p61VJjSchtEcLXc1ekxjPM",
  "key18": "mQT2Zn5TEYiAj77Nx6p1Z2YFtSRtcyMeWbwKWa159axbCc9g2oeBFkAZZoPN6jyUfd2YWwPmXPai4GGhqFyRm7u",
  "key19": "hKdD4ZcTGwoQDH2sdDffPuscoURZMsfkxBN3hFS6uS6YZYGECSFtCD3ZYZgC4kWPCd8qm9GdZ2CugabdAvxK1za",
  "key20": "57zgR7pkiPEXaMk3bnmeEgaFyQSQodiMieEdjuhPyc6rf2CmFF9bJystmgEapyzaQKscyFtceWhnpY8p9bwiLVxx",
  "key21": "2aHzbrXPdudemZZYNdJ9tKrjxKQsw6cGTCp3kpQsNVzK9WEEuD82ReytFL7QDf7TKLDvAfvimiGK86vLu28pDCzc",
  "key22": "3YcExyyv8mrvoCQdstoNe12FmjAhTTYZXmkeMieZ6xHaQXDgLHNuwW9eC4Gyht98rYXXr1Pss2VY9CSkrxF9zjQ4",
  "key23": "4bqAkNhx22msPhDiV7HpKe7BvoLkHTr72wYAa9DpRBq3NVv3eKhbtotpoSqgbpNjewHHBrpEEs3AMdhmYxR2xphV",
  "key24": "5bHkGu2PVcgcvqwPvdWCaE3P3QCA29KF32qYJtARyq6yg5RWqvyUEWHv2LDU4hKDudha2n81pGw3xBtrd1nDTAom",
  "key25": "GXzdAnsKD4RJjdGM2xkvrGeQfs43uBKCUJomJHR7mJis4BRyJTdLGEfUTbcLEgcc966PDyZP2dY2v5mNPDVLbVR",
  "key26": "2FtuMKg9qQCWpomJPJmN9C1KZqyqwvewHHnLZFubT2nyyLaiFm2Ai6p7d222Esy45vSoVqYF4DzjZBgP9EAKbH7X",
  "key27": "3hbKEwSbSS56TYwuxPi3ka8fTj1St7XdowsARGYkZup5ec87F42HkZ5ZwYDV9q8bdxzq2k3ZYVp7fLhhoz8JvFPx",
  "key28": "37h7mQyyobcaCGUNzupVziCmtBuoBr84VrJRS7CuNK9Mvp7wqYaBCx4N5WQ1h7xDbf1hCSWptMQjhUiwPGNCNNDJ",
  "key29": "3an5Gh6z3UjNiQVjb79WtErKehWU6zn2x5RNJ4toHs6X2zdDpHnDqwpddWv2pgBoiUGTyRbnuPon1CpBcWJyz9Jd",
  "key30": "2tHbLDPsYBwo9Jyjde3G9RKobznGbxRqbNpRekpw9qFY9MU1SPoLqLdSnmgr3WsiTvhPBCc5gk1EtwnyR4gUUgEY",
  "key31": "4xhxeEyL7PH1e8B7bHejQ4fz5UAez1ErKk5pqhZqzvyXi3PNZFgDrdL2T4Mf9QNpYThRLkMNGGThQ8LyCBbVFLYM",
  "key32": "rgAvYTdpMsj9nnhELmAYWzURSP1dr6bV6JDFyGjUct7ufVhsMF7xN659QN3ka3b7oYHtcN6QHtCYBVMRbbFZhoB",
  "key33": "61kdgvwyi138WNgcjQEMboTB4BHMZFTHanNx1LimJuPskapTYMSUgQrhAfFx97XDa7SP7x6P4h3swtcwdzMg5JSL",
  "key34": "tYdyjY7X94uzTKL72RWNEHRgjao4RPrf2Wf7ShGrf4J3AMEkQfRzxXRXw2SesYKcDgM3TcTJWsp7gNRyGwvtknZ",
  "key35": "5MSCu9rkGVyRvAhSRMBxmGEVPWPtiwH7jHAYxaps7T3htxHJSWySz4mx5bWg7GuwFWCsrFL2mYJ7fhHpZxAkbjr8",
  "key36": "4qdKGrpwyGEvG8ze7cua28RJ5w1hePbK3sRfs9anUMYt99jkJgQ8r5W59QiSccYsgFdAZGCD5pBDr6XE7vc3znkP",
  "key37": "3a1TnmehXkf8B2G71t8p3xy1wCCNN4ned5wzsjAuhhTeMbrt6vKrcwpNiQkT9YTkGAcfqphEYX6vGp3bkhWSZ6RH",
  "key38": "3ayJ5vgzTf6TfwPgywfDMh3Wj2Gim2EMrpYbUoq1ZM3be1Cwhu6xYDGGcG1aPgeimxyDkx6jtPj8Cvjn9cG6Zq92",
  "key39": "YXRYxvsU4AfLFN2VXjj1jWSGthmN4EA6Wn967y7fN4emtX4M9zp3vTbnz4TNqVxWFssxwwrH3gWhQ64hp9uyYG9",
  "key40": "4pHsDtfTQAKFjCfqNWzee95MmKf63CxeaZNyTYBihkkpcbDiBt1YfsP9QSkURVjS55JGJxMqNGmHQhR8xTKbHC1y",
  "key41": "39ZisceguPwwSNGhwfSgbrLuVaVeqCAN4w8JTssFXnD6djF24ByZQHPqSwgRWJF2ZHRdWtyeczu2XskvXHcjCtPa"
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
