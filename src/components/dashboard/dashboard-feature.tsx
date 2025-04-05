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
    "3U8FxtoUy9LHq3r1G4hmD6MueiCQCprvib1zxzHhAHGKB1GBCHtgPo7pFLgLLiJy8xPKR8ZwngYwLaPysAmPLyek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44fEe5GRXMV1SQgvZyoq9Aby2XZM8a8CfZh9mLreyMQM1uuC9znp9MGgxL6GfrRuYtiUn5L85HYVMM9bkUsQaEMD",
  "key1": "YqPddsa4twUbYytT85RrepjtJZKTvncRmhr85st4GLgrwtw14wKLFkRUYS6JztDxY8XzK3F9uLjjawa3dNvqw2u",
  "key2": "QoQVCyfs6ii4isiNZrfiWZuEy9eq59N2F5mHEj4zomSNHuBtSRtvfMokahQQEppfxuxQRgiYoEmkhnMkkwwgq6L",
  "key3": "5vPstHMCmn2n6fbSiNhkd2ikPChw49FJv6RVhE46Yt6yTaMLsaprZDqyBe61PLgQeyTyHX9bNN5n7KY6dMDPNn4n",
  "key4": "2QNvnfVoAk2e9iC7HWynQ8JidoAbj5LT2LrzwQ3gu3n1XwnFhwbvawW6p9NEidu3twSoVyBDMDyY2Nr7ib9tQTHa",
  "key5": "xxHxVxYqVL6LhMRRd4yqjNY83edMoYKC59FLm3etBYajFYfoZnZL4FirCGJ5nRzJMht611q294zU9YzjbRFeeBH",
  "key6": "2H5R27Qudsc2S3WznpMNZjbKPZ6gw79shyEgxTEX8yt1k1X6LrpzUjtRRAkpm65vRhpPrcm2wiSXSPUrZa1KUku",
  "key7": "2f99NF7ZhSbfh6f2HaUfKTAt5fmrcPkq1egNqR73JVtDhBQkDxv26wY3KDxy6EBiismEvUzR42FVmvWPF8J7HZHv",
  "key8": "4Gw5pvRsXwRRPNGFfoX94v6TfGeKyaMrZJSAzDAc4SDrrDNsGGhriy35UajAbFAknUD5uxoGzjPJcUdeFC5x9igP",
  "key9": "2qYf64uj1vkrqaZn37HBhvApY9whHAi3h9AGS8nPFCCtcuiHAJQSzfUTZGyPHuVqDQ4tzuweBVpztKkM6iuDZ7Rq",
  "key10": "xUnQpbx244qkTdtWAuxqdYWeH227kmmJm79xcSTyrevUpZtAwz2xhRYnFnSsq89vCawbkh7d2wojKbkXPVMi1fm",
  "key11": "5dyqHxQcqGmLMuytSXRjGW26wSfDCPmrfgFz3we8vcvPjmZ6d3rYhLesRLMJQeRRSJDY4Dt3k2jKZiaw4YU1VHV6",
  "key12": "3bJXhBRgc3WCc8XjeS2FpjtFtCPtp5M1W85yD1UQTUnPdbxrSqVaCVxQJNagSXDbxZrME8bZffkFDUQKwdxi4QWc",
  "key13": "3Nz6yY4XVS5YnKoodyanC1ydkurtT7xMGeNsWLXCVo2t1uHEdDjU6B7isiX1ioovofiWQWjLUkag5qmus2ALTSz1",
  "key14": "66hqLGDH1UwTFg2vwXjPXaFvqSDxMTs79Ar926TiGitzXvzn21vTmyY18th6bxuoWrJrCkeQtwqBPshXznNrR8eD",
  "key15": "N9hZbk1UmbMH4zVCzFnKqZBbJQVjnJJFBj6MW1ctEJtvfxbqvTr9pm6Lk7KLjNvGXNmmvDry3msw2MdGDSK8eto",
  "key16": "YDEATSNDa6qUUMXoe6YK1ak33HV5umPVLfwYVtNBY5Djn5ubAJPCZWEKfTv4rBpZfmBzUTg4shLdwt2LPHMJo4q",
  "key17": "3Shei2HAABmLuH6CnPc4uwXyzi2kQgcaV5gUHUcBmfrJ2RXSeZdRiTdph3rU5p1qx4i5mN62TsXpkuBzzGfnHRp9",
  "key18": "41EtAQpQBxL8YcTkt4oxqd6mJQ5BJy7MvexL4AtWEnw7WUSoFmMNxEDrWtfjk4YHj7rHqQ76M9o4JT9AGHdwQZyV",
  "key19": "62bsb8DjQPUAa92L5NjRooekjwJE7AxBJjK7g72R338GPTdb2Tas2NhGrELTnz3JbHc22nDunG4tEFuPLoi1S7Hh",
  "key20": "4TXYPiCvcMikQjGVMQc1Nckmoi2TZD9u1LKhoLY8JiaotbH44pLA2cVHwTu72sqEstfDtKAZk3FUDHGRZMexSxxF",
  "key21": "3zY8TYiqKgpGxmNd6s7WEDsxrjRCmQb4ZFPMY5bUy3VSBZavpfqpAcrkrobnmfFudHyTy6ou3jhcuAigePQeYedG",
  "key22": "3aeXWVhyTeqHjSADevWwGRjuEqZJ7z1TjzAufWHNZtc1D8M82zdYiX87jNhG2ZhG2JUN3LkLyuuFigWTBSVfPZrq",
  "key23": "4WgRwiV2Abc24s7sD8BPAwsQcK8k9e6KEGdM9KhnJN7hLbF7deripN4ryyJpSRjZKLRXa8x6MSKnfSGSQ5UDbutn",
  "key24": "5SWJuALwQPcA1bQ3iJXgW9V1wWW7L4UjcxJzrM15LGpr4xsUgudQRi5oYYGp3Y4bfEQ7MFHKtwv4ngLBWaH1H8y3",
  "key25": "3k253scrzhXLc5NzAMKBz3NyoMHrFSa7Wtiode36Sq1X3PFyj2d2sk7kDAV863vKF4HiibXRDB7dQrJLjG59WrZ2",
  "key26": "5f99ih3m9829u8MCGRD4PA65av7UsSH1kFckSxASA8tPfHhBXKpzGNWvZFdwHct9easXYCAgtcbofrfjWqWoPFvZ",
  "key27": "uU4xfkmDWxMBGemCqBBhC6hTx97hTiYKMmuduBhfB9u3k6LZ6fovdwDz5mwMmVSnmh2hxPNfS3JKRETCZmy58Ae",
  "key28": "3LhhDjwugeKGjXxQfuvjMF292qycKRhjiqoW8geUv4aAuGBAE7e8CNF7RZWPF4JNEFLD8EH3ZTnQG4x7WLmzpJLD"
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
