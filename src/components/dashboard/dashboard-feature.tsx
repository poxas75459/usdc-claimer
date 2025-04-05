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
    "2nVSbfU3MkbHo1JUkusTTYvxAwwvAeVXbf4ShCAAX2SzUMfjjtrn7xHSBP2PvEhDgH6ofWCGsU9s39fuF3tsehui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eDPuv66BRYnnqV7XJNcjRpdaE3nCmsGnt4Vuc74sgEbSmTjJSoxjPitKfXHLL6itdDzMQVyrPxqyqfzz64jkidp",
  "key1": "4gzgYXhCd7eXPE6g3cHe2YSzvvrFTvjHdzF8uPXFdro4tUsJA8Z36Pn76MUvgSoTp42vYkGHRJpPAqLogPVnVRGc",
  "key2": "2KAzTp1TdBKSTQBVsuVsm5n2S5B4Nh7yYkVkUb1SDJJMUTYZJjusjfvSiR2YHekNqy3xX1N2ahLfSTaAjw2XdSPX",
  "key3": "4Ca2EzWQ3BcyUyZf6Jg25477AYhJT9Dy5XU9MnTMMu4wPE6yRpQExdCXUrXJqox4jk5fMnvMZ5q5fMZHUWuaD62j",
  "key4": "5UYZZMNHfWkJzER3U9Lv2nH6UUU6S3Cw8BB9b1bRedtfjrPvpUTCmiQhbHCwV48QGX4nHLDAHQENgpbawKu3SLqY",
  "key5": "5fZx3FuYJzeMWgKiPhBoFuGfLr7piHrf9BUknDxvxyfZGVwBZnjsuKbvNidGRJraqjTHN61sqfxgVSpfzvVqb3jZ",
  "key6": "5YSSyxordTUZZXo4q963abXyFKF3uRxebzWPJuNidFQr3MwV2U4YkfJRzYNY5gJPmSmrkPMEGGr5ewzPTTBHDZgX",
  "key7": "2KCL2D8EURKskc42UzXwZHT3hSrNK5CDQL65c1qghAhn69pZ3gceaxEq9PbK1DE9zcUHLzDwwpTGcLc4rnjV8Ays",
  "key8": "3yixsvUc2rJAjYFXEcoiDtK3Y3fvdHCdoYbUPTEAMTukvoygnbKBkvvF8HRKmWpitoqqdRtMbueYHSZVK8bLeBYN",
  "key9": "33HnPWKZqSFZuQ1s5KN2T43reTrKgJf4Ee2e6gm7TDZjQhBBBQf6TGWavH8V4SVwLK4FLxRPu7sfpsSu35x4kjEa",
  "key10": "2Hsd9Gtdrw9t3U17V7uREkQN8hd29yACeJQvsndJVCEgnxd7U5trZ3w6N8UxqSEios8SEy1NLjWnFw8KrWSxF9mN",
  "key11": "4mazWnFWNQDpqStx4FoS6s4YCzndf9xr18fx9h7qsnW7UU2ykfnmfjkRUixfMDnMmW2iyHxU6LifRQwv6jrXG3ei",
  "key12": "5sZK32TwahTU6xXEiyL7FnFDfsMxbtuQ3WYYtZkgBs6ES7G7wFvrEsiRHSzc7TNzQ6U4x3NkotKBf2z9yi3Yhnki",
  "key13": "2Ly4MxWcdxQok32YvX3g2syx6SHdkwYAYHmc7RwZwTCKoi2YFd2B87x9wPvtSSfgoN18o6zu4geYZdrq3BjF81Ho",
  "key14": "TYmBPLxm35cjzUwiTCwWypoKsfsLbAA1aTAgECgcDbcznRTAFxxBSQxj577UbccAXJrMh8iQ5nmxiS34yVUh4yN",
  "key15": "2ksXhWZG6YbaDGfyfMj4C6gd78eSMEsAtFeXc6VYKs4fq8hMHtEsUx6GLPX1Lb99xKc7H3gXqzXiVHmGXJuymgLD",
  "key16": "3cHfXekGS28AwNA9WNVwQt3Z6XFq5kuyzgGdfAbBBhLH77WZz56YJYo8K5Te6kaQBwtBrHHksHuJJdGjAdfLyUp9",
  "key17": "2JoPD4h4ar148CbrGEtgJuTrQWTyPkK7VrRAu7Nz59NmWqaobveZyYZX81dvtW8dxHWCEbAJJDXmEeqE3Jqmuys",
  "key18": "4JAMKo2vDkmNTGfcR5ADLtPCJzhDm8UnWsRn1Xmo6ruxMMqEHX2Z4YkGQYgQPiEM7KRuaPW3ewFRffXsMuBijqHv",
  "key19": "4TSUVyQHEyzcgjtHX9Z7YyWU49ZFuSQd3oyKv8fx3N64vPD4SitHanwaJoyAqZWoTgNshQGUk3HvPJS1Er1HP5h",
  "key20": "65MrioQ46kk4cpBmhmd4TKvUM487ufficTA1S9hhNVhcPkG5DccrpfhKqiFwxn2S4vkqvom2dEqvtwrePGAuDGfR",
  "key21": "5AWTRAd2Nt1u6EqDXskGq7NRwg5Ds1qDh4jUwS1QGocnuv4LE787EiaKsENNG3525Y6mw8W5zheFsQQb9aUGdwMm",
  "key22": "571t9RFCzG4ftFFk49SVbuN4xcsoFCh8Woic1SJwsGWtHwQS6GaZZdYhLe9qaBXUtSDh5JSzjka77i2ZSpHKSdH6",
  "key23": "3G6sqV9DMczVEXAVv8UsjAgY7zkLdmqXjt751kcCjzmm3qfuECH9YrivU4mwxMhsemCCqLUxa22UdAtW7CU9J67P",
  "key24": "4wr5t15r7LXkZJEBqqpuJPbYskXGPkEP5YFc79FACzYvo7z3A35CE9HQMBQzjrs3FpEh5eaMYbBeTndwYJGKuqtc",
  "key25": "65pN5WE55rZZxpK6sMow7MFWXiXN3AwnsAb7njSwP51XyNkGrXZJFdzCF1G92yMZFTJN6winq5ttXQXsfNyJKcyf",
  "key26": "HuyPGFxMhqKkCPQeb55z9dPaxdQMCbuTY2v3q6WJQC14c4L9cHLKW9neaawCa9ekGsCRReNCETJuYrjr8PBjeUy",
  "key27": "2C2pfCfpncbmXhXSYJpAVbx9wSANEceMft4ark5HTHq9qMLvJQd9nddEDiQ5AF5v6L6K6bEsK2BNr8wVhjmP9eTq",
  "key28": "4FFmBFYmaBb1NG6JUR3PpVZfPhwjRC4rKx2zjoEaqtynBi2xYBANu3gMeXQv8ovBY2JZVg92mZ2Fyqsj4aifGfr2",
  "key29": "27YtZw6SZ5efQbVFDwi7uLqDPWqycd1p4yJ5Na6Qvf5eKryJThrsZS9BdXqjykRA7bneLxjPAUk1mriU3fwUaaQB",
  "key30": "YE7hsRtizTou8yHWPFqcxgPiWjcaMD5wi9brSYxwPiuaGLFP6H6JycjGikrJGCyCqWT9ABud72NfyML9JPzdKku",
  "key31": "2ABDpWMcsQCEUDGFWzZqTZKkL9onfqRMHVk4KPMTi8NUVjtXST6oXK8gb5iJz7zYRJxSjdGUFehAzWtRu6Q8AtCL",
  "key32": "4hdQznH3yYjZ26xpekQsvYZJt6CWarkbD6BhSg9VsE1DLn6u23KdqSCfmssC6wqU6bn4eTcRrz9tuDfvQqeaRXQj",
  "key33": "4nS1L1hZrLXy9CACPLXsBDj6qu5QhHWudMWAitPzP4RAWegnZ4MjvJ274hKeuVbe1E15qyztfSBNKvcgHPrLKwma",
  "key34": "iy3cyhd2u4AqHSguY8HmFosf4UJ7d13XF5PYUTjoLNYwbNTJxnwbcuYPLZ182C32LPMZxReeC2GquWcBTc3FCQd",
  "key35": "5ZzKHD3hiqJcNKqiePFvjHQLvMxxSxJgK4JPDccHAwTX1HSzs1vPcnZiAeupXAtZBc5o6g65G5KcBjsxnE8kzjgf"
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
