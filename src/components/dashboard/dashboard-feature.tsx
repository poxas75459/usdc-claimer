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
    "5FzdPy44j9u7E7C7uc2WVHzu1bpCYx2wQo4C4PtF5u4cJCBBTzi1DJnWzMWXHAG2aEen1vCVBVLNCGWH9zFPpXrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A54nJCYqyjRtLRpQAkBWa97h8awr7WjGLbCDdhWXJjyQY4BXAZoSFPydgU1AsKa22PB9LEed9br75Nai2xux7gy",
  "key1": "5X6TtY81Jh1Aodb1rm4fkHQaHFTZiXrfCSY7JP1xCQ76aXmRb14eUnKuyoSEg8Ad8bWfdAYfiBjk3Eu8nh1Rnrqm",
  "key2": "5qK6kTSASf6v4AMFQPeYKEZTPjkCjnjRbe9yMwsehPYvpWGa2uUL3kG6cjTj3zU2EhmxYjmXpxXUmyTfcGkx3bxj",
  "key3": "62F8LwCstsR2PYGiMZ27MUXGgrYxkJ1MKFF8Vny1bHpW7yAJAg2hCKrdAdm6nQEifSP2wVktXX46vdB9fHLxMf1k",
  "key4": "5R71FWEWZRd1exsjZw6EtCe9zMZ6xAsGaMdjzXLmum1o9fR12fz9VZgmunzUDhcrhkdUDz7eJKwxHH4REFGg9BUc",
  "key5": "4bin2fTMCUA7B86XPCtFmC64upJ3qWD5Q5pP5YE2ZmU5QUFKKpnRCA7zoiTeF9jbSKF3A5KiUWDDn5cJEFQWKWzm",
  "key6": "4DKZuMHi5DmmPxKGNtrvgpmLfEH5nmdXtrEwtLeAyNv4AFmMLE8ddWMXxxH4DPR5NCbEAn57GmCdEEAXGzzGEt1q",
  "key7": "5zXJEWVXhDh8ftehE4TJ2H24Z6pRtuiUzsBPU9WJzRhpD3KthY9nru873Akcv24AuioMaxmUbHyWsqLYKQbUV2Wv",
  "key8": "2Tmm3KXPrXpfXrS4BPxmGSqdYx7R9mCSnkFFBxxRi1DsCVPJ9M7iYaGX714Jd41FDrV3C88tes3gDjPhp36F8dfs",
  "key9": "36LX1WoK1krEbAGVzFd3EMaGYr4Du1q1GN9bmMKkX79GLZodTA1JgHXqtPMabGbgpWfmEBbdugGP4DFWGAJgveWW",
  "key10": "DU7QmBTJAM5LuyQEe1KQLUmkMw9CB9koFy1mD3iZx41VAMVgvMg5SywWtN7nEJGwdcn3WpuqJ2wEYHb3Wama4LP",
  "key11": "53bsnuJqUkMS3JvbiHEuK4G3YXyZP7MnGBSsNAjX8cs2YVhxZaukZwqCJKtRNzJBRUDNi1SycDxH9rxkfAtoRqE7",
  "key12": "3ev2z81ngGdQex1en6LDv1tueq5smtxb3ZW7yrP3wBFXt6en4RVwhnVu8ZUk4fGCsza1bFrCebFEsRSPKw568PfU",
  "key13": "32yEDDjCe1tC8Y1zbRnn8Nf4Yemr8v8x26ciM4LficXkZVHTUw9kwt9c5iMTJNZsV5q4q3yHnQgm5MafQ58vqXqb",
  "key14": "5Ch6Eo2WtTyRnKmjm2DkhZHeFSxQvXBAMTa3XaCk7mFY5sxAkxpgx8dckbTTwQGtjN3taUNAht9sKjTGkPxExSLe",
  "key15": "675jyRkfoKAjVsJnEWmpfB5Dy2TZRJANS3eDiM3xg77AVFgVud2j2t4sT4Ju7pZbVEX2L6Ku9pezBpGutHF6Fkdz",
  "key16": "3mTp3kkRJFAEffkMJdbcuuPVBGWYmkVfYBUBALoY5sauCoANo7DadAVm2u31663eDn6NGzQxLxz4gvco81vmUgm5",
  "key17": "vHhYnen7MipdQjsgQnZqKC2LbLbj7xVraGSrnvCsteVLeMwy8eWKWCfJKAjFpuGnZ3Bkaxp2CaBNpG6wAXUyvYF",
  "key18": "3tB9GJ1JNYmMeQUPBSZZTqtWe6GUmWRiPgYHeEpE1TpmAM4B1MMgDj93FcUGapWUG63x2ycFeLKyveM4FhanuHED",
  "key19": "21uByWpLKMU3sUNdkrpEf5fhYgoMdxTjXGKjghkTs4PKk6paBEW53bxD4enNTQ6Xf9LTr23qRrxkK2bpFTAVrrZP",
  "key20": "4JLZtkTQzxcKfuPzRuW2P1buBCXVWZqyyfzNaQ1fsFKerRXvDVewmPKcLFFRjxsXocg84r4KDhk2D9o6Mu6PfL29",
  "key21": "4PpbtPLi8sy7sWTJN3sWj8Zth2xk3xCpP5MD5iumu7U7oSEF963dzijW6diVEkxbj75Cn4kokWt1eSajKTR8QgdR",
  "key22": "4Xha11CCrUcPPKH7EHMBu2gC2cJcXTWU7Jpcnkak4D5PkEDbENP1N3BvtXZgQuPZGs3XM7wzdjazuJeoLUTxhn5i",
  "key23": "5YXgG73G8b4zb6vF9geNpyvqxKcQGPHN4m8dtTCPYywK5iTFXzee4gpo8UcPQibuSCB36ahnpH1CSJ6tT8AF8ZSz",
  "key24": "2BhBmJWBEFRrYUrMa2XBbRciqKqLAwnafxv3wJ8ygVQvyATf8Uj9G1y49BHFo4NPRJeoPKSr9eML4SfeEgR4n4EC",
  "key25": "4jbmVne7DNiDJp97RZYuyEyM65ixTF6Kw6y4qCQQwPVwk25KVVi7hjc5BikRmE91WYfSuRsEmcSqTgNYts66WfC9",
  "key26": "634TwWh3q6Ne9NTidRXaGGNWyEjz87xCXYeSUnZoZxvS3jaofyT6unR1w4FujTie1kYDoPLhCwwMEY7ENdXExq17",
  "key27": "SRkYStmZhNPFNpwfjD4qhdkcRNfeX69vpfhgsvMrrwxFfgUmSiZh4te7sDnrkACr4V4XmLZWqmtJbsbGcw3tbNv",
  "key28": "2Uk9RJrFtrNGTR29LfLgjTCioK8vMxmjLFiqvPg7MLyyN7NPg7Pjn9UJaKsa2bx6NxbFDoXxSVj7b7mpVNhe5Zp3",
  "key29": "3SHDy9vTxyjpvP86ZnTJuenNZi1bTZsQ8YbayLEVXghGnyihzz2x1Zp9aRWEgHQUg4WRM64wi6FAZr75gaNxW6b5",
  "key30": "2Ky6tuHdT4K4sntYQx5XFzJ7PB9MP7yd8wvVP8EBCcb56uagDksWAXPnXq3ELr4rxKg6F7BzQSh8g29EfDN2pAfA",
  "key31": "5bKfGPHiUEz1g5mPN67TrjeumhHGTFcTeqHT8TcVR73kkxpuiSXibv7oZLBbskbSxXhVfnxe93RbiCSLVAVs5nvn",
  "key32": "4mhFXVuYMuxB6nkT9UGTbZYrUNkACPdVeMeW88R6GFNqjwRRJMWEcqhAjgnP31Wt1TmjDLhc8HxeEtNrNMSbfP4Z",
  "key33": "2o5AS8UGXA1wrgm6y5yquH5887iSkySJg9kqLS99T6jRrsc7Zu2BZn2vmKmYVHF4A8JcYF1bSjJYXq4jhAJMiji5",
  "key34": "3voHBNkfhpvsVNuguzsQxtQ1FqZHdhyrepwjCQzKMu8FVftFKy9btJ7eeC9YwrFPUk14RdU5E4f29NhWwzmWbtUc",
  "key35": "27YK7syrR2kFZvFSncewEP3C47SZnEGxWiuLQCiTfDW576igRByByFJNkZBEFzsCrUyEy22beZGWUv4TrrNAAsSn",
  "key36": "3Y5fbfsPivZNoP3vSzRoA82tyWM5PDBxfMktRaxm8CmDTYg5RUQhrj9nMKdgS1mP4w95qdHw21ubAzJJXBrozxPC",
  "key37": "4VCpKSoVeeYchUmgqWSSipN87Q4RvJkXpy5dpUm9wGx6LRcwAfx7Szsu28D8AjCQQSbLQcMYuxaoGLUt5H1Unn8n",
  "key38": "3qjSXLH47ybYQQnfriNVmhRhfym1GSAyhvisHXtauWZDshzeFUhRQVPAkvxuUsw2xCs2CoapK4MGTwgZbimicdBs",
  "key39": "3hjo3Cyhzygr6XYTbiAn7H1jHSruC8YBU2rit39fFfjC4qtGyZHLzSWuAwrinhANzLmo7o2DuQ148fftJ6e3cYk8",
  "key40": "31WRjmJqovPodYVq9mwWb3U7FdWUDdfmkSKFB1z8EP4gzAM8zdUAXBVjWYMr9zj1F9UJioQyyNxnLHQKrop2Nw9F",
  "key41": "3BS1ZVLwPuSUByBC2cCQrLz1dXu2TrYuD4n9cC3FBXgtrNhv1PJhvakxgx9S7A8tt7MVUM2aXN1KxUpiKxEh8w27",
  "key42": "CM9QutqgybJScLH9AQ9yWz9yZWpaeoL1uX7wafnUAdtNcnMyA6z4x2ymfyaEjqHcPVzkb8ohFazgtjhCRwVemzy",
  "key43": "5DUqdAcgKz2GFsexco4eq3T7gd5ZgVXA43DLCdmtVPUxnWiJdoNc21XBrAhrUfzx9BWxUrqC92Xr3BRyrvo7whCR",
  "key44": "4fjBaJJGPzNFJvQHnx4LzQtoQos6JyLH8XDdpz3zDahYCisfpdqToQ1byiSchkFi8Q5DjtPovVwJXT24WcV8PJzz",
  "key45": "8W55hgtvdbcabVW9jstaZtggJp4FBgnrsXKaZY2MSX1E5ZhEP5jKSrhj6hAeAm1VhUFAYnzKVNdUqYvQKpKZG38"
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
