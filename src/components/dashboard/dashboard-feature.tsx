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
    "2SZKd4B7HLrUncmbdFtQU2ZsuUWDevxTjfNjCssP26BYKZjKRTMaSbBC24aF6hiFTfWGJVPjTCrHxd5BvKRcQ1bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31p6Sac17MGgxBuqTxZevdGWppDktzRL7ehhtX5Vcf5D6LQoENdoMYm8c1TUhm1btANrmLSmRiQYaaUuccESdsEb",
  "key1": "2nTthqk6coKBEzhk3RaGV4e9FiEDijJctUe9YoQNsqQiq2wWZ9tiB9uB9Fqb9D2ne1beqKe83DEHuEHixt8FvFNV",
  "key2": "59XEUW7uhzDsAF7hPasXaNJ9RjbBoRDk5pe4MWSdRgvUkoyy3tM8sCYoKzv2n7r9yodktdHhBokAJTUgtDJwz3mY",
  "key3": "5QDXQdauKrFHwRhjG9C39AvJ1ttmkvBiJN261rNSkUQEvdcWkypYGuJz2cz9sQHFNyPx2iDAUBbu6pmDdJXzQynw",
  "key4": "4uYoPRZJ6ewX32MLntFYgyLR86ko1JMWodF257v2SAZPdLXKAHQTFmwAq1812Vj6rdHc2Gs7W2uzUTziPg7bDZ33",
  "key5": "4n9QtpbFwBWMnJZ2wKqWH4zsDuw9ocqcpouE2ggkbYctGY6HH5KAJnp5ki9AXJvdi7z4TM1ShtRcnoCfiWxXkEST",
  "key6": "435BMgsKiWQvREC7CJwzsYz1UTe1ByFW5niHZr9PFFG5KzvwL6yhAEbtC3234mb5Rts1ZwaA7UpksypwPcr6yG7B",
  "key7": "2YpPf3MS4frHRdKVPGBxykuZdAww8oN2Key5Tn8kxdhxFhrCCE37TC5NyKUsgWXf3ffRUtTbjFfLmtvvgGvZ4L4o",
  "key8": "2pVBEfWogDzp24vZi8Ym1X54Kwb3bpUq4rqSJzBxf7tWM8Vz9ZehrHzXcKMTvaWW7gLp8uA6Z5gYK8is1ATxhKcz",
  "key9": "5JzTonUYmKecwb9jHSr3C74qhKM1ZGgZ2QWUT4BAp2vAM6a9zorwPCbVXooxS17TAJ1dSucXyVqVeCaPy846pxSH",
  "key10": "5trHWbw4uKnVsAFB7u4wAwsmjrKj2R1Zo85gUKqYumWE4QtZFQnAruznoY4WhLNNGervHRw7DcHjrsJC4xhtpHsa",
  "key11": "5oPWY9txdUduvYhVErarZhbt8Etb6TWtDxTcP8dR4HDA1xxrdr7Q4SNeBNkmU49mS1Haj97SbXMVeCUhu2BPhCUZ",
  "key12": "GAHuTB69bKoGm7wfDhXKixuzzuAvvmdbemos5zGwb5GbWT84QSBRfCtYmKPnKEqow6ydzLCPqZ7V8N1zkvTYb4L",
  "key13": "63Pvi43veUUNKWiuh5o3i6Zyk3zpVNVSTo4R4hYK6cQsPGymnSMKfHqjjYK8BmwaEEy921jdRT6XvoPKT1txQyZw",
  "key14": "5QWJC6seHHsh26dv99tY5jsTicvTHuAq662Sj1HJASwscMLjgonWUgA2tnJpn5EWA2H7tyLPnH9Er4fbY5fyYpiu",
  "key15": "bNGDj3hvu7G7egHpchH1MeHqHAUkpAvHEfhTJGmEVqfL6GNjyHG5hqDo377fKFYfUtvr2kaNMFxygoeDB6R1RVs",
  "key16": "2EDPT3yVUn6F2NZnj6tUyeF2EyQXqo2kWa7mD22XyFrwSrqDPVpvrgKJEGiciJnnKSd65W3XTex8TAbPHTrnoX5z",
  "key17": "c77LURQDnN5jQKydyXKGCkeTzL2WMvsnjKTJ5HRQ97FzTz7zgaBZv6nHENzmQHLkMzaZZ3NhnuKy7cg1y96BVWv",
  "key18": "Z3cyVrmDDnde8eW5wWqSRij8drWgudphmHQsTN8tZeagRSNhuArgqFBMwRS8wnEoVpUPjFEZcDLfcgqgfEdFGAQ",
  "key19": "3Eka2EMyWK1j85ajUVpYEcePzxLeji7EPf5uangeA3Pa7QfxxNm8biHoY2JZbSyU7QeH8U6UdPBbcpasB3xCQYgr",
  "key20": "4QFvBUw6uk7qDPsyWXRzFx39sXr6Wpox7NdLU4FR61nP4o5XjBwHnwTfDbLqJHSryQwGyGnLbN5rSqHJ5ARQRmSo",
  "key21": "5MgbkdCYwRLK9BgHBnTb1NnmMX8bgUxPg2C2HATjw8sYe6iMdHNTG31YbsqCj649BwXe3UZYhSatAHCHeVvMMCe3",
  "key22": "54naHJ78uYCazVcoBE1xGpMHbPY3Xzn7V6YnhoRQJDCr3gqTTeztBLcF59QNdSxqJ4dF5NEiEKMN3ST7hyfJ1VcJ",
  "key23": "5jRCT2V98BeGsDmujM1yj1NnBTBnH9Qcw9fXd8CT8MhVyyLYPWtXVjwSuQFVuXpkhYxr8wz4vhrbwCLKYACDY7i6",
  "key24": "UTqg1yBV6x1h1JGs9uHUDki8RJnhKP2RV5N1ojTjCGAboJsqjvb2x8r5KHpyfBrXKCXbMrFLF9FuD881fPixs4d",
  "key25": "5iVejiiuTSrySK5x2SsmScgnpQkbzyTe7hUcSaAkjy5JDFSLSmPE4zr8HDEZuKUkGGwKQnpq1Nngt7ambTpWwrHD",
  "key26": "2nRZ2BMTEKahQ2AG21qTn29BjY7QCgWzEwKxRCJ6Y32JUrYQ4NxkLVYDF1WEp9ixoPWjXe8xMXtLdd49Hrz2tC2U"
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
