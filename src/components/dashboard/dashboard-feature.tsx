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
    "2Xjjjft4C6vtYQUXQmjN128E1xxPHkdtCvnHJgdYVNHXkqxCFY8eszpKriJEPzmTjmWUm7k3Lbp1NnFHfXW2kX6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21SK7ZzbnJBEnxUCpiEevSkHHWKG2AgdKszviVgQntEhja3do5a62T9WFHQHFUF31xfb7qqBBxmdcMaWWED5mW5U",
  "key1": "394ZSfkXiYxALWiqZzQNJztnUf3WprHx8gfbJEtyMtwEnUNPYjZPNpZwgXB9seCRh8u5EWcLYdMGvp1n4N66gdwc",
  "key2": "4uc2uPuHrAHe89juxF53vLdSfQeik4kxbjuCdUCF2UmzdmvZPdvN6YjJe2Wz1Mgr1KjPd7pVtvzfJGopDYqsjJ2t",
  "key3": "MKnJX3qAMXZVLqYe5gHbZmoDKk1MpxN585SYjufPPFNHLz2SG1FNVuCtYuCp9kJcdK6JZZmfUaduUDRNDKHhmmM",
  "key4": "29B8sD7Jnpo7PqYKoNxkmyZ86PJgCuobZJZSpfdDqgepYfVgjeUwoCKQcaKTPaFYhUty9vJoSfEMo6PrTpFotzvy",
  "key5": "64t7gZyYzmkNL7wFdD4opZgPtyaMtK68ku76vpUmdoWuLNwtBFgB3KPRPQESjnSFUBGFnNdpqxVS9w4xgVsyxvCb",
  "key6": "rPVYe7Ei2phVMa6gykBuT6G67CGFjLJwy1PBV99TCf2Jy89d4Pd83xQTirC1K9uxzy4mKy8qNMYHBKkDc9MTMg2",
  "key7": "2DQQAV2s1QbvCV1ZYQqKESeW9e8iZAF51S7wrCssuKHCp9sUhMrYaLeHCha8ixNFGZPGUkLS4FTPUeGSsHDtSZx5",
  "key8": "DQBCY8vSJgXk63BfaotkfEft48Cq1rt2mbSKPhmrg2x7wcFhwUS1YaE6cEesr4F7b9gHiTMsqT2HVzRSMd4d44y",
  "key9": "HY36ZaRBYd6QGN4Fqx1GG2zLsWfMuu6WvMGncdUJPWjKkxao3dmjvtHpqXAM34YaKsvdLSnxkb3oSpYy8iaNmzJ",
  "key10": "2nqQdhkWA88RxxbaodZ6oqqL9EymL5k4pxyw6CYEqPy9rzfCnMyukyfUTXQq1Tiq6HR2uJbuWfW2ceMHUvCCvWNc",
  "key11": "3qmBz4zSMLoJSt2Xw5ra4i2EZRrr6tbx1BhkaJsZpqtpgVWiZGmUtstkRD2gzz9pWTrcXNJboRcjRM6oacr8wF5Z",
  "key12": "55EVMZ2vS4rYWBFtMiC7zsBKhfsNrJmQD6jHgoBAGrouBb8NgXdvoVoMXkh1UwBsGB34PcWJKEZ9RNhzosGaxveC",
  "key13": "63kozCiMCP9fbqvTNETPbj1cZz1iFJ8GHxJh9FsS5ntsbvpsM9Dieae7hiBEjKCNnxarU6vXFcKP3RRK3Vc7VzRt",
  "key14": "2UWBGfKs8vGxhZMijDPTRRm6AFwSbYMcbB3BdzxoM3MVDJhW1BDKqRVGgHSwqCKojDCJ1phPSMSzBrqi6M4FbazF",
  "key15": "3Eitg2BwHw1vETRJ37c1mzC2snHwegaZJjPGsMNHQ8rYM3ca6iPRx1BfqKBwXUFMi7316A9vHaramLEcJxZN5B8d",
  "key16": "5rNFoQX84puLXEQEExvA9PeNWSvgTXSTbstnbNh5DSFoLDxxkSA9Bad2sMHSWiWqADovj9GdEMiJv489u3hctAS2",
  "key17": "3b7EDmx1brvVrvBjtHverPb7zyfgWehoVCSG7P2DtPF1z5CLd6yfJDCkHf3oYkdvupmWyC6RSVU6ftY93sxarLbX",
  "key18": "5DRwztWUz8ATPCVSHb2dHimm9G7SVFVe2YXxcK5tBbMZTLo4ejUUvr7rjtHrtwHLs2xCymbchLfm49ugRzHDK4k1",
  "key19": "1EGPhanWcpqiewj7q9pbERvqWMq5nm7gWVF4Tnp8oBMnjKNnGfDqJ6Mnjg9RxkeXErGmx8QFH8ayohFEUYMURRs",
  "key20": "2vcFx3Tqam7hFLX2Jf7RtEYiP19qx2K59hdDb4z81C3uYp8TZP438UJBLgzNaJpH7mKkGPWhkrkkhm4wXB9Suurq",
  "key21": "4URNzgQgwCZPjUDjcVEkfqhWScgEwM495Lzo24iwmE9Z6U1AXo2vScTC9yd1CsUqMbwjmX1bCpRRbXou7UVrK5MS",
  "key22": "5EEdD9W4A1cbCxgRPZxs4GVj9PjA1R3HkJ5vtns361L4KQME72VTPujJ3ayr9Gj74bE3ctejY8CUnuy1ZE8inuVJ",
  "key23": "3JNHLkL7Mv897jyMkidxxELV7FfwmgwgccrAMhFXEPnzn5VCNnp9qhdkBmmKEaiWMWj5YfaeKMVErxiNos9YJGyi",
  "key24": "cUpS8rc46EdbrmdXpQa3HTuV1BbpGMRbYVYcXK2FisTMq4RztYaW6qr4L1xmZvmXd67potd9XHuukpipQw49VNA",
  "key25": "4qy3aBSzvKHJtCebpc24Hc53UXXGjehPPtbZkFSuu1RhjvCt9PU5MQBegtwhJNL2xCTXdtqSRr1FMovNpqbwpoj1",
  "key26": "5Vz4fXu4BkTvFHx4LLFaTmbu58au1sdPd8mqBNBrK21h5XR8L4UwvRFwywtbv32RwooZHkxmWk5N1KpccjA7ZtoZ",
  "key27": "3uZzAVTVDfPHDNWcLs7ChLuApt2HAMkHxpTbK4Pfn8GSytF4ryKKTaJUtN6a8xZ6mr94oHVBfhuLDZ7vtaiMBefs",
  "key28": "cyyqUCuYEYdkneBbvL6inG7tCXP9SQpcCvVQGi12digNfH6F7Be2Nv4jLzzyZKazbqSMVt9rjWjsaD2cd1v65Bu",
  "key29": "LCWNkYd4sYHTGsigwNvdLQTazhCiHrhZjeB8t1snKd1rJPH9qs3WYo8QzjDeqCZ1enndWUnDwEz5WTj8XCXdTm7",
  "key30": "41cEZdWX2XebqSAq7yHcQuNUFYgym7wwRC1C4ZX1KvC5qWjZzYSM9c2mvCmnLpEYQv3UPmzW7pEmgPJ74ZKhANTt",
  "key31": "Nphk3g5kwiWigqRfbRm6FDwbpQLUaa7Z8KJA83uq73LE6xQ2w4biyLwDhhY1iyLSZ72z2mJogJAb8BiLTtakpK1",
  "key32": "28aB5n6bWBF18opNz1cwWRMjY7rJ7Ut3k7ofo3YDw4VfX6i7X7ixEYFdtiirTckvz6xstVqBgW2Jy9yJkENTR5pB",
  "key33": "PmxjKVi5y8vgAAUebsk8QY5f4zZqP5uAVD6V14YBhBnm6PhMpym6MRWE1TCJoL29uqwL5NR6pbefhjVwaXuSzi1",
  "key34": "3hvTNmq5LEt8xJKGTFo3eUYG2LvzatHwLfqe4FkNbZD6nG2xQCSaz6FpYZCHn7giR8cRGh6TGhGEm6wZiL55BpkR",
  "key35": "5hWnqjaR2WecRmke26bBqJBxSojQDPaP9uB9Ti1ALqeRC8b4nTKFjmcuSN5GbLfvURPrHUc65epSLgy5U5PK7kY",
  "key36": "63vViLD8t5pjKbdqFRQuhpvnaYteCrkxZE1wBnp2ebZ5zdPUqyrEtR99KumLQdLzW2RXqJdxKzdHMX7r4WaZCsem",
  "key37": "2nHthECnmbKbhADu6j2dRVfZf1PmBP8ioyYfXCBsPnzmN4RDSZ7nyd9876sb9odmM2aEMDE4FSnYyVy1kMBHoQiz",
  "key38": "FdUwVtQArm5G74Yvq4v3WpM9eYHhSEDX1FURUoAsiU8FUeVJwWFfZVcKFY9HRvHFR1fbiiwgAH2SuBw57mgU1Aa",
  "key39": "5WdHT1hq8XvpnkmmVw7Nwh8ghKjaJhv3xD4rsdhCzC51ecSYzUyqygTxMatQ4wknRwaJdaujM1qYWH5zheRFbe2c",
  "key40": "5jhueSkEu1iGVF5XNJMorvvgpALsPLVFLLyEQdBmgPdDd4Z5wwSfU3DR1c75fvZecTE6Tp5js7ZFprWFRwqAXeGW",
  "key41": "3CRbtErrrtJk6xx5oE5YFvWqCMHSvT3C8Zf5WR6Pcnxj5EWkJfKyg1FeEFau11HvnUMkhgK9ggcZwUFAftW5ipUq",
  "key42": "55EWoCEMQ5M9g5pnoYtkAMFh65ztZfdRWqufMEUjcgwrC4kKkQpbnkwpcrJCssyroyYW1A81WxfFSiE5e24LzB6R",
  "key43": "5je1Lui5sXAUat5ssJxEiBjXinR1Hs69jizMXWXMqzei8bow18iNuaL7kbTU1XTc9nhXgaHxzD4MZLcCGrmwpxfo",
  "key44": "21ue7Gg33mo2FUtFeTG4RBLR1G1wxDKjySPjDbCQp45YEfP2iHHuYtVnCPpCAH4jcqAjUDqnQREsqHGC8LGF5xdL",
  "key45": "61EUSG82br7R47NVutqtHLzeYxFpcPCutCH1pLNtTdeAKgvLdtACRLkdXGbWAsZm7U35kTcysgzbfExSDmV9jCKH",
  "key46": "3RWNz1LKGpdAXSqdNCFKPcNkPFzkJvq4qzqwV4cmQYTHev9Siw9uxvc8MXL7LjdYMdTwqNbkFhs3QWfvGNgHYh3p"
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
