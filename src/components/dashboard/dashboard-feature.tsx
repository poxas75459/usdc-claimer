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
    "4bwmqhhi9pbRa5TNncXgHLXxtPbpJKcp596fyLAbpvSpMR9LPV2dbNiV52ZiXXxXG6prk9EXnxtKZr7Fvzy5bJer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XxrJnBfjgXACyJzV5kpWkMSYhnPMtDu3Em4fTcrKHRVqK1yyAb6YJjMbmQYNEsvLp49923jkMeVaPjGboRQcZqT",
  "key1": "45jJwNjxWPcim8X8L3pAR2nGXU5Y5QynzdfvGT4XMYm3Lbg69PkPK3fXv5iCEF4YGW9ouQFC7FAngDho6ghJUBQD",
  "key2": "2dQ1FPniT4KKqu5yQzQX9uKtrPEML122Zk5WXMhLkqR1eJTys5f99hSCh8yXk8C1fE5qH4BWPE1Qwhxb2fiV78Av",
  "key3": "mVwPz3yvoXMDVtaWtzHjfLhJiKQZ5fgyhMf6QAk6VENP7mfiDrVHN1rCG15vZdDfVybLS5LutMJuFvt6xoiw2w3",
  "key4": "3Ev3D62YfNDRCL3LcRjFXSMJU1zDQmkV8juh4BeZxon4j1P2Qd2fdosRkzdnRq3bxZjkvmFKMBc7Q5HjkV9vzVmD",
  "key5": "5gnThWb8LEAfd7Ds98sd6QJp6CrKcqh8nuKeHcuDWBEw3uVZfH3LW5Uk15RRCHnP7vLtsHp7VVkyRKfPf53ng8Ci",
  "key6": "4Hqker69ydSGHvStV5MsibazFN38r12fMQmZbKqqV4TCMb1Ei1kVq36stJitJiBChXWDEefeLDP8bqhwJb4nGEQ8",
  "key7": "3Nc2JrXAzSuXv7nhsUS5CZkxabLe1LNjiBJ91ZFM71TG8yEDr9GQXe1UsD8GeiZsPyZLN1z6GheSMbmP1yeyu9Jc",
  "key8": "451i7NSkZ6nbCVm3iVBXsmjVNRJVuBZcmTnVGveBXmaJkCzZFHex8h1xwYaNez7wkiEvqULfCPHbbYKQuoanfLR7",
  "key9": "4o6c25QmYeta3R9T2UMqaAonKKzNGjKLBQuNaBCwkchp9Wr7MoZkKDAcvoc9SS1WxspnZfGREnVDYeuPBPFz2doP",
  "key10": "bjesCpCKKi2fEWquk6tpCRZGpCYzd92T1Kcq5d4AbPLxUFdFd52SsgDEVRQiTvnHbhQtpuDYcNY5p4Hsh8d3tR8",
  "key11": "3HqLH6ogiQzSKRDPqQXFSE4RaxgTJhrfAZrV538BJwaVREmVBoF3FEGzUreG326GAKduVpbqswmSHLirdrrNxwpT",
  "key12": "3LQ85tvQA5wWg9vsaWoKbN5FfZD87q2gfrtZLKF5reYzaJRwSbPTPeuRS4KnQ6DLXJnJQvrcAyL6ueMSDzQM14QC",
  "key13": "2Yv4swK1CHVjA9Rmr1L4XoG7sEgnNjqqh1vm37x5Ndgm3eVt8tF6sCYoHMRYs6i1i7h1ER8vmgi2F2XoU8JWcQba",
  "key14": "2yq85AfxK351rMGjVThLGVUqepcuQRk4zw4GyjSRqXgzZrRhcBfUSBZHa5KsbwMS3MzYP41vnK2p8hvjXXEq9Wtd",
  "key15": "4x9jdWQRgdTG3uaRk8vcSWxo7g6TLZaXyUers3RCk9kHwTSH8awWAwhKWebSs5RHz3YYu773E1xznb4bfVo6z9EZ",
  "key16": "ZoEch2GiZyuaE9keo56Sb38KrjmM8n995YcpZLhsPv3Y3R7T8TZRFsRxKAU4tWPKUCwSLSuT5ogGGVx3jLDD7AX",
  "key17": "JGnREeWss5X17BjSpPGKALKw62cDLz5MeQXpXTMTZUqN3SVa1LRnD68GqtaKqhcpNJPpHUyYqG6QPQmdsiwtfM5",
  "key18": "5mLm91mUErHe9r9VNoVi696VeDv15W4S7d1iMhfS84PTuktcM5u2AkNSwbXuTfVknKp5JcLpU1z5Wq3c8ron6VUt",
  "key19": "3fRuQ1fewTwdRZ3L5keAPRVZTAQ1oj3mKJgiXUbyKaAVGuCvtRSVwsKWLTBUAHZigChPsg19jrfX61KwFi5uLba8",
  "key20": "MEs3mjqcXP8DK5UtBu9ymxgSXpqCxRhQGT79RoPkWvmMNFiVQRTDRo6FUmWo7cpvpQkyaVQkoB7Cyu23M22CUKU",
  "key21": "23kjPpbVxy5k9G7nJzFW7LGKmEFAJTkhnDtSZMTjKgxP58F2dn3YrU3cLaMkewv4GPpL2N5Bivz5cS3rRQb1u1aB",
  "key22": "578zFPu5q4EfJCRJ5zKWefp1ZpTojp3tivWKVuqH5hczX3fNm4YpAEhynibfaJ7mut4vnNep21k1DSyBgBcW3jyJ",
  "key23": "Ujb5Urm5xs6ThGJiDcSJRuiLC6fhnLbgSou5u2PeJK2fVpoBjHZJbyvF5uH4UnU8vM5ZfaQHjSDGax5cE5jrbvJ",
  "key24": "2s1mQYx9PcsNCdmm4S9eMnxt2k8HNk4NjxDuEGEMfUtphsoXZkCDEmHKdtAcgvYxLNE6ZsBPAHvXyZwnyr2gbkQ2",
  "key25": "ropcyJTBggnGCtPC2G4cgLSHeYfVzXbiLa8DqpPhB37qyrjQMrok1LeWuPamJ819ksA5qxhAB9U7eP9bDh4zSeU",
  "key26": "2q4iSg3MaKfiRXUAxqF65uoFxRKMNWFfEWWKdby3HykqcGtp8sp4BkKLJcHHi3ddzn7fBupUjb5kKFQTazcomQFy",
  "key27": "ryNHNHyQBfdDDVzt2S3qN4imTxcnykM3NB3RuWWPspkFd65E2ynnJuV1XnCy5AzNJJVgyLNRANEN1XoJvzpbEGr",
  "key28": "4jmP8xKL9MuoMk9NpqY8bFuDUHS762E7yVj2M8uM4KvSJVjrd2xNjsrNwKCj1xPF5G2bKNGxNZQ4tGFG3U7gr2qr",
  "key29": "51AgcKZzf3rWa9JFC4nfLNwJ3UWCquFqR7kK2neSuvCs4Muny3d8DS8bNY2HeaotcLc8kTM19i3vKLdi7tS7NWFw",
  "key30": "iJxLGcnt7epi8uZ5QWuDRY9qewx3nUxaJkNxFYRoAkeM8zmvc11zhiPgx1zbrzPwbgSRp1EqUgZ3GKY5ygj7rem",
  "key31": "4otpA9A2momVvHXyMsgwRCGraa5w797Q19fMLkiH4jbGwrY9EPSvuCYqXV24Rsuhu89xhfFED6viJpvSRjaR1LH8",
  "key32": "2YLp8itVPKoxDSff9mKjTWiTszc5o2AGoQ27kduxN9rHceT1f1Mq7TjQ7qriKbgcRLgJi4CRi56BdhHZemHGuutn",
  "key33": "4oB1KcJis4SrFWZHiu5eE4XES79UPFVg7eohS3JtXP6mMj8EC9AjV69ktNFw6Y5phA8JJcgjV54kYNpuZFFoDd68",
  "key34": "5iAYYjv8fb4osZPmBwHmYphYaLWjNAUJvbWSX1nZjTYwBrfq2tefap9pyphnWjg916ZbEefVDFKdBXFx1Ppcd2B",
  "key35": "4GM8X2M4zJEeaFTwygVcmhb95nChJpELkvPpCdTLNoub3Zcd63BV52hPNGKVM14y54nLMNnfinpVeZ7rHnoGsEnJ",
  "key36": "3LzBpHbuztn8ySR9uh9bnoDJqJzpV5ibYVtFekLjwbCQis3RN7E4rH83jYbD11TbD5RBRxBpfta8pYQ8U8oka1kc",
  "key37": "3P3FDxKACS9yscuBF19ZrQNJMHbtFGVsnCShPgndppdAvVj8dyUU6YZrswcMwC1pYLM1tJfA6QBVyv1G9RJzbfh",
  "key38": "s3hAkxjtgDEo7cbZqfb8nttnrpT3gNJB7utvvPLFmi45R3SyqqdruDXb56kgakTPis93m5HdV82nPqcu27fGLn9"
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
