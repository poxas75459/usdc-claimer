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
    "5RRo3tpKCd6oaVqWYGvwSWzzzDfbEmC7FBFmctLuUViDsk4HrLNDSmGfcQx3VEDdhw7drpLZNcxjnH5yWDADYoNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66PQASAGEHbThXGTiRqZ78PW8R3BQcry6T6yoQXMX1GZYtdcqKJSqdNAmh5Zp4GPUQpyaNViYaYWFh3VWJ4iNe2",
  "key1": "jEBAH1KaAsM1ixYzUC4z21DgprccDP3RrSxGCyG2c6QQQVQSYi1bxphHGgXmGwHNtyb11yyzX4bS2Vi5J3BrEPT",
  "key2": "5RDkwAxd8v5zDpvNt24cbubn89AYtmM7k7p98vFDc72dqqRQRsSHpRZGAcKQdijdvg1hfJtXwJg3AFtciRmvKpmA",
  "key3": "pTUKcHWEVgti5GwV85YFSfq1f4tcZULDSrsG6s1si2QJc3HhqpqawNHDYSqZGE75JkyRaEJNPUo5TwsBAiK2xkh",
  "key4": "tP8TDiqHAnGQoaNBkKN3wUhT6BbASch2vz4nERyiBiDTvzoTcRcpamDwM2Yw9krupqkkYpe8iyudSjavSZ8yaMq",
  "key5": "5vXv998v6acPAjU3C7wrKbj9K7grobx4yivcG1B3i5DHjsMg3vR7UYoAeiDbGN1nqWH1VVAiWuLAvT3g9Fdaf6GC",
  "key6": "4q6CpJMDZggSnFmxhnbquhu8dHp57FYSZKsBzUY1zXyKe8Urr2uajJrfdawcv4n9t2B6nnAAPsLSQVUpRNeaCFro",
  "key7": "p64UAL3r8rXiKbZ17SpBztnyd6ntpVdiDC7NtcPfqD4PDipUBkh5mNJo2YqzGw4MNcP7gSfqPPkavCuZWeho1CT",
  "key8": "5X4ADxBbwZ7Ja1SxZDzamcAyR4qeajPqHmAW1irrkUrjfgFdU9xJNwxLb6CaKt39esPuCmu8t48jfKAL4wLmA9pn",
  "key9": "5SnKAck5a9HKsLAJw2zUkmCcoWeA6gUTXTjUxEm2ayoBnjdFddThAUKJFE5RqfxxZDZk8ghRnrvRqJA72eXvjk9M",
  "key10": "2edrQJWc8dmqxuZhL1CeP6t3c5XnbLgnsmFUcpvsv1n3o2G9EkZuAx2jHvs6b9UVtE19uFG5mE9L6CVq98VyoNwp",
  "key11": "5sGAQc7u4K5wP4hLskD1YSYhksjQ6cAAo5PktNSTzxg26cELskAKVbzWR75nARTMHuFUVoMJU8TasqdJ2DSUdowX",
  "key12": "2vU17zjD4YXgDRip4S843QzoGnKRd4PnAcjV8gMVp42SNmQ7e1KYmLiuFg9YAqAsKVfkN4yVLztoUSv9u33WhSfm",
  "key13": "5QGauMeVXv1sNpUK9HqRirPnBDKkpmEgLKpUHTT3cfL9BNH3WfNMk3cBA3QnVJP9XXujXKJuRRA6y1CdNNgdiDRq",
  "key14": "3LU7vveyt62W222vhAQpJCzZ597KcRioZoxUwURY6NCevGdxuevUfbxkneMaKxxENhj67Kpvc5AybFktfXgv4ewg",
  "key15": "5WNMFiVbBW3pCVjJFKV74JYGACsw3dZdiGRTRjRph8Qs6BS3TAvEQXwKv2VYuYaKH1pW2ohz7bMfK6xhGLoXgvxw",
  "key16": "43LwVadaa4mM2kghMpKbGD6ViezsDmVP5KGF9ccpvbxbnX6d32NbCj7XPS1aVyALrXYzKLVKjaKqeCWBx5C1SyJQ",
  "key17": "5FHoG8zRRDLcNayDgs65nmaUa8kJ4uSwE33gvqYVxybvrPzbwiEMMkFKNkDRHWEso2shJM1jHDeLHwMK5HwijFNA",
  "key18": "2L6JVY8jjHwFnaWNmxtNfqRh3vrbbzWcZ7NBrvzE5BWFJHpNG5zYBcdx2LQHq6HnYGDq39R4LoyoCveqzwihkCje",
  "key19": "XzKjMBHXsuh7AP2d3hu5GsrMAMvNiiKumPfdiuX59r78Fz3mVeWZAj33ueA8fW36iHvpfYXBpFTF4imkt3aMjkE",
  "key20": "5duX2hp68vT6VWHjnjuwXPpNjhKSdF3FPWPs1WLmegZAQZBNWgKHrr1XeH7qRUqRKQEkp2fQcronsnnGNXYkNYmx",
  "key21": "3ZzEVineyPaCvLAhwMZLi1nHNBybmA6KhwomWsfEesrAdZJmuL8SbdZLWWbNbGrfQkToHbWQ9ZJ6BACUNF372HT1",
  "key22": "32SSDZZasKJ9QZK79eb9BbWwgqTt97THTfgpmyL2PuKuWTkttgJESg4GVESghhkeYtr3U1XdQ3x6Uk3pZb3RcPgg",
  "key23": "2u4MwfjubAPk18XRoR3n79djz6bRUG4kwhEDRWt63msoooJQP5NzonLTD6bi3EMQmgoDV6X4KL2yAmqrXX9uZL71",
  "key24": "5DCDMjbGinCSVgqbz7Prp9dW2t8UW8iNCSNWW3dS9F5aeV92KyzjpNHYFwJcH5wUuQFz1wNBFye7TWSd7g6tUH4S",
  "key25": "3Laic1STmY723YwdK9iEPFDNyBXHNiWieCyKUarmJkcMdDNzYU58Fze35MWwNTDt1CgvxzY1dJZqEDCvWDrHfw4F",
  "key26": "3Y8FBYkmZHm72cU6bCrQzqLy2obCJQz9MWngLk8n6iy3DxrBLpGUQZWdp2Uee5Lu2awpJSaQp9jRZF7P8kY4LA61",
  "key27": "2znEYeZPrMuQCZm6M5ZE4wAgjA5hDgeXo8PCnHKa7jM1PVWupBAeuftMuKUQ7ZSXtyUQrrpg2TkA9L2exb1KqSZQ"
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
