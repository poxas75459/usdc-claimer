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
    "2TnV4AKaRmu6y81e1FgMsJx6F95zXcFzzAYWPnaFRXWHf2y3rf1NikFiFEzMWjHWSAVtXRwHKq9Mw59bpe4BrerB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RQQSHYTTYQt7F3YfMD4K59hp6YRAUZXKzEsvAe4VC8yA8XNNTPZxZnMNKiD4xto9CLKEh53Ea7gmPAHVTeejX2q",
  "key1": "2CPjBKhWjVsUZL4o6FiYdGrT1voMCzDZSg4gSSMe35HNaADniWJWdMaXqF9Ek3vy6PHRxkYxtzPo6SbeyBsRb6UL",
  "key2": "61VGxdMU5mttrwQWuxLGv7w4wNeCWFYDRxK7rCSvZNpBErkHXzCpj6eS9tVD85PhJY1ehd8urLmjvhocWDdUAPLp",
  "key3": "4Z19owHXSPC25GQxek3vZXCVenGpxYG4PWMeoeEoMFBhbQ66P9991cWdEVEPDsT64HZRaLEJkZSSMAVCdhyoQh2U",
  "key4": "2kdxgzkStLHY19Cv7SQRSW12pTpdXVR7StwJihvWpvrRGD5AcSoiSXHkgRb2SLzYnwydBWZqaAZUsfGAJQanwrqa",
  "key5": "4wDQvGAUaSPAXuWAwEaBn1b4gVNU9J2REezbHYaXPZLnvP5gbBssrcGWqaMH8x63dFGhFmRG6DtXdPdxYA4CqAR",
  "key6": "kz58JTH2ESGYkbiQPyG9Y3KGQCjieqCd3J1DgqFEe7UTpmm46svyhWAA14UoJJQQnrbguZ7Vnigk3dAQVV7EAQh",
  "key7": "3CTsXvG8DvpMHYEZysQ9bCSLP4JGpCYYvj54eoFLvy3rSxGtmudBjEDQWKZFERz3ptRLmoALtpzEB5Wy9ULHNjGo",
  "key8": "2tvLfyquq88ArvYzGTWTHXeMMzxnkaPvncGfUDhF9eztctA7Bnup8ZcJ55FLTUX85e2FG4B3hdj8Xw1AjLrg3vKh",
  "key9": "65PGEdG4aJ6uPFneM9EwkVT8P44Vqw3qi6JgRTTZYRH3FZSPBTAcM93GCukAL6UwtbsGxQh2d1KajZA5FUmzz7mR",
  "key10": "4waYEPiKJz5oknnwAwJ96tVR39F9h22ypi6Wx58B7GxzyPjgBrTvLQEQnbqpuzhGqNubPVpXyvBVVFQssQPNPL5X",
  "key11": "3wdLWT2JyZLH7K3y1zt34AyZtpDJaX4d8FtMEdUZ8ruvLwDZ5Ftn5xw12nCwik7BhtQnHCfbka5DqWFg9bovQgJs",
  "key12": "3VDU1PeHftT1VJnUp5JhtbFuqevnZeqVY5RW31f1KiQPG4GhdU5wSfTWNXEqr74MdXwjLycxoTE73H3As5ughJJ",
  "key13": "4agF6rzSzDEg7k9fLkDM8nDu9XG8xdsoE83iRMp5wKQdMtBufQ8gJ8E92gcm1QuQuQLwqSATEVVhhz1gP1AnsraH",
  "key14": "VLQeaJKLKGWYyN9bpqhu3dqWAM339ZPSbphpZ5KgSgTAkN3qMWJu8dSnPpyUjvxhZLFxfbLLNymDdtWn2a8oi2F",
  "key15": "vn2mxynfzw46uQVrvovds3ENtini8hDLHfh3QhrKx8d681vVNuxWCZRf3WBuJP8xUbhqjdkCBoLn3hFow8puGP5",
  "key16": "3hdm6js9J73YSWsHBTco858r1TbtPK4dfJJWmr2qnDrDRv84kSQ6hu3kGQZBuAzDLk47P11cEmvf3KpyMVdHLmcK",
  "key17": "4RkdARuQC7QYyMRw9d7j6x7pE6w6qMmKw3NsLjZy35UtYeVtAnjD9Tc8e771DqYrCTXwxK8r1Lqvim1zqCSqNs82",
  "key18": "3P7tK8fpdft6beMZwb2aigusgKLbTJUXYM9hFGwBhfBickqMwgeaWE36kCuoFVs5TmCyCe1k8uA6yy1iVgKcHLoY",
  "key19": "3jx8NT4S3hXsKi4hqSjE92UTsnPQtSmhXjUG91kvHQtPhiDGYsjNCP8vav8hTsLK2S3PLsacRCA3t7LRhQUn9KS8",
  "key20": "MUgCRtecvTDjBoAXiHEMHA61ov2CmhTvu2TowpA2pcdphzmXFFPXriC1oBhrz4E9ndU9CuSiSNyifS9c7Y4cd4j",
  "key21": "2oZHectCGfmXM3MXMfx5CiqLmVbvaYHhwSuGH1ypfgLAhYRjsP2b21YDpB1m4ZPWDXAmhhFv9NRr6EPVcksVZMkk",
  "key22": "2veuCw2LmmuBtcq8xdWXzKwL9aJ9FHD7UgnhpE9iYMTLkrPYWWimeE6kmgW4XpikjCccid14WxUqQF1qBs9Q5ow3",
  "key23": "2183Foe7Q4bJEjAuPVnq4vtUv5s7C1YxSimisjQnj4jJVzsYGHR5WsQaCsP4e41uh3kvT8BaCe65Mib4HmMyjCUh",
  "key24": "2GmcbD6ftrZkgfhY3Mo1WDHbC7U3kUShgaq1kxRG1SHnSPfSHpaxK89qqYbodh5qPWZNbMbRWy8CL2K63agDt4ao",
  "key25": "2F9MSbff786v3D5pVpoLFkuBr8Qa2hfnWEHZu3WBbpBdbhwBTbnfuJwQ3QYAiA4icJtc9GNBm2No2NWH8ULmVRa9",
  "key26": "2FpoEiFzdo14wWuM9B1vQdCLpS6PLNAEVZrVSDPQKzmbvqxtgSUDkKJYSRB2SUEf1XqYRQG5jLszfo3BtTzo5EAP",
  "key27": "3R6d3r1aQH3s6Auj12YHFykHic3rVQG9Ch5Y3u2VCEYX3c7GCnjwmwGBe7HTEAHsGMu166oADcmJT3k4ynfHjySR",
  "key28": "NTrj3b87CCbEPEqsmVZoZdKGAu7wAgPEtXxZWBQkfaq1pE6bmx1VgNAEsBdiVLwcjkJ8Fhzcxi2uMTR8NcD2otE",
  "key29": "2phnnWtodUfFSLyEZfWEgm57XjUNSZ6TdDyX9K3yB1NAWv8CYBVoZV1RmjJEEr69sm5bWtFGpouVNFzBm5nDVbm7",
  "key30": "47mNv9kF5hwZLD9XeiEg2f7qSgj5aeRpdGtTuwgEjy8b6mEvabuADKUYHL3MLoXVhjsRNorPYw8EBLqj4NnoY6DZ",
  "key31": "LLdUGn7JzwxeNhQeWLUkbxS34fskXTpSzzgtbG6PjYEWsJUwteyvrkEmj8cSMeSaPTLQsGmeX7AUwkrAJhqEdYP",
  "key32": "AmQntqPVd4KmQ3GXhGoZjbvaBJkWeiMdXHyqxD2kpPqYYTmArKhZ4Qtk9E9yaXwngtdeiVSNm9maEvHrHxjgwLG",
  "key33": "5uHS7ZncWfnSMSZ9b1dS5xCs5ehfjzAk9C9nD6QgwtZktzfKGNqvrC3dAHhfbohPnz9Hyyc8YizrFCwnGPonuuYv"
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
