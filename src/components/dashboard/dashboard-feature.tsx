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
    "27QwuMC1zVyRhvqoFeBMswhyqEAqdVGSumYsZhEB1tdhrsxc2VGZsitpuUDvCMgdFQ1yt7bTAPSFfJUK7Eui4y3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x48RmpjkT48Yio8QDLvciR7CeuUhtJQ97yt1BMJTaXbgfbFFxn9XHmxRz4ybZQ4xKJMiyCZmWzH2vL7VEyyAMXP",
  "key1": "3kMrebVJcrrkX2ALD4ExN6GCpXtmC59pcXv14Ffk9nP7F3hat1M2d1n6FoUCKjr5VLordKDgMVTccP1UznSMPTVy",
  "key2": "21bpfBdLYncEFg6LXx1nFDNp2Hmgu3NHgk2hTSoVKwdtjka53PY8aZcpfdryUfQHiUoNkKokrhcSgHnvBoGC2z82",
  "key3": "5fiawb7PmYChxfeRqmfmY2DLpi78Ahk5pAVEajbsD5KT9dkPCNu3ab7ydy41BDxHhWmd7QU4yPvCZFXHbgMi48Qh",
  "key4": "62k6wAgsj2RmaxoMJ9amFMMLNg1tLMJMGcghXMZs53yqShNfXstPhvM14j1UcDTYTVQ2QnR4nKjFPv9bJ63VoKNC",
  "key5": "322etQUQGTdwVWncxrYW1Gj7xtcTKUE1h3PTxTDsKcTR4FvTfFA4P2gy71PZupx46LT8XiQcP2xvC9e2WW5SV15V",
  "key6": "3YtKmw44QxvrEkqBNaUHue4DyS6JChZoH46YkVig9SWYRY7TCcHbMmbpyMY4SoqWvHWdf561UyeEqCCdx4Kpx9V1",
  "key7": "25ANnUjxax15vjwyrKENBmu1NE51NQtLPPYvWFkjmBSEKKXMD1nmnbVRZ7dZ3F5gKpwB9NDGUhbMGGyPaFC1Qvv1",
  "key8": "3gUGcACLiBnMCpcXxrg6n1AoEn12BHTr9jpzoX78KiVCytwEh1JRTbrpPSWdMCosrpECXBMciA1bEmBX33eWyRqN",
  "key9": "5ysGXoY65B6Cs3X9VhaeErJR2qohXKmoPctkXrNAB7oPnjESkVSsEcaLEWQkTCQz7Fpb6LKPPvEoCoyfjufk4Wrm",
  "key10": "2rp5b1ezQwdAWw3JCuwWr4cihYw5FFwdBygdRpwmtnBAHAuNCjZ4yMxXcSqsV9qdwmX7deSiVQWJ8LbmNFed8mf4",
  "key11": "5KrEXvGrdsTXX1iuGpbQHaENFZJo7zmpkAopBHBiMLSN4V7SyLZz5JiYykmwRvUinqukFGCKiJQvkWPQPC19b3zj",
  "key12": "2vMsmQ1AkjvBNQT2xBT5GTikKt2J6T7Csnbc9EBznzifs5H2qtcdRNi8YfRu1rM24oD6oRCqSkXqBp1HYvZXUV6n",
  "key13": "3HJXLfhrQrP3wbio3F5T2CLvHLa4absNpeiKRCdk1X2gGcSv2VWmJVyYaoduAm5BtwzCgdnzhbbjyuVQv16KMJQ2",
  "key14": "knqFpnDXLzLiGqpKXH6twEMbhBehMqmwXUeBQT8z7psYF6UdWFdQP4RBwUAkMC9hEDGg9qiAQL9aKGwFRXbUoSz",
  "key15": "4mLwt4K9c4yaigCSb9Z5ayjMiLDDHmTeqHKaWNdypEFVbmPGakPNDCviKpaNyoFyxykppgj6gncymfVQHs47geHY",
  "key16": "3NG6qbK3HkdunySerKmaBSSQApsAZMscNtqQDW7LhjsH6SmcTP6JYWbTD6KYdqf5tyCKaijFyk6HsaHpYY3HiZMb",
  "key17": "rBZXWBpKUqEKkpoezQd6z9aAnkmzUehZqBCCHSke42GPmP3B7HCdarJjHkE76e5w4f37V8UEkUxLuPdpn9RVaJR",
  "key18": "56R1wi9nwbcf8c3Fk9jLivuSGanNzy9P2tfVLFuL4XcpPGAFU8AdMw4j9Kdni3EBkv6zmD7KQMcFUPQzvMFqLuqo",
  "key19": "4hSQYVyTwGem8s155kvcXwzLYK21Fcv2EJ6y22U1nbbX4YenaynH9PQozburR2eDA7DePg8qkPAeAqHebFb2nERe",
  "key20": "38Scfo9Ezui6VQbn399g9a3uvqoAuNyAjwrCfQbE2iKn2hdb84hGNWt1c6exZupx9dSxuxpP8RbVjmZCbyouvjWZ",
  "key21": "3jNq7VTne4oLqUdASLrRzkXgRrxvPDPuUmMarYAdyJudDEKa9bwUkVgwih6gQ8vXHPospBQKM4Lz2WxGJnzgaSMn",
  "key22": "4G5jvuWJn1brGG28cJ2A7UGfgFpeJVt99ahZMsmCZyDzfKeUuEqQvvqgaT6iwc3vWZGukHKj4w7gYa1HkuHR6kUf",
  "key23": "5azREBD61eiugsz7VLNyocSUzXaEQnrbqzdY31JnEzAZcFGsPTPYy3gg5c4t2w4mhMWEd7yuxSEtfEXfqCUi1Qmr",
  "key24": "2izcTJUPRFTFJqCfhrT9bb8DvCpH4xykjVsUMsweghKKVhrccGbw8Fooc56KPQB41zbs6bo6Uo5nUEeeXDVWu6h5",
  "key25": "4WvPgjiQqqyvdohjv8bko8eybwfeMF5xGNE52JD9DjgXgKBenf8gYXvfpC4tscAnusikSCtfb5Uzri9T4spYscRZ",
  "key26": "5vSFRTJ4mw88wdXt2hAvX5cf1ULHcK3MohfKe7jj4x1j7Dk9aPXihiS8FRtnmRVjFMYLdEUGQJ1QXjJrLNkp89xF",
  "key27": "5jDZcsR2DrrCM6ByaRqNPsqV1Uh1eDj1AWJkabPtzGpaphfDYWbZpYA2UQM3kYrBMdH5pQZpw8btTQiQZQmderNg",
  "key28": "3QsodwHYFuEg5CvbfYSvD4DnnrWu8YGDLjScmt8eu7wsGET3E99XTLyvox5qTZWaDfTZkxjGyTR6GWjyqMnZGjQh",
  "key29": "5Yh11nirZjr69nUHcYNH2q6y6BDALsKZvFYA3BUvKpnVaqpeTQUrYg9SmhNXKdsHfMDroWZCiBKMgtJJoRpQtzSC",
  "key30": "2WDUQfFtTuBfFKG5N6KpnEX8yEkEJdu1dpVy5RyV1Z1x5chrRBcTX3HQcEDanLMprsBLfKo7d6dQYCxkZkXw3PBw",
  "key31": "4UNCLNLXQaRgUBCNzprfJEc737w92VopGYKZKD6ciZAV6idCKrZVpFNMvsyNk76KYGYhia8HL8qzc4jdqqskEf5Z",
  "key32": "5Qr9EL9BhRQZ2HuJEQaJRyQga1tdEC1FJejDJoqTGTpS6LP67LgW2CgKiNHFUBWnEDioaKtCSn5bMjFYH2rivqqJ",
  "key33": "5M3YvvPNf84e4wc6Zfne8SWmqHyoirENpqjSwkTCcVkGNLbTa73DgWLh9UuKsPm8rKgfY83eG84QqXSbtK3khPfV",
  "key34": "5sBE8ajDjw12p2e1EjpZQBjkVHGyk2kVAFsiscnZgzG8vasGCUSnxxsTQ2eKiwT5nDPrCJUfUzWEvR8shqFGdxch",
  "key35": "4xe2fqJPKfk3WkNPcziHobafJo3fov7Csw1jPXmB4FTG5V6i8DkQMJEy3LpBNeusEmLR1bc1DKZtfcsw4w3iBrvu",
  "key36": "5GiY2sGHoCKtBhdisRw3v6HgutBtnpY9uHiZ2L3mj7ew5PZexGiCRg4WDgCuMGF86v4ZoAPMDtDNPKtHJha4xkAS",
  "key37": "5W8Xom9xgS2fGLAwGmymWBuAgAfoe4gb3C2ttFvR7oYXXXSACcdkjNHzsFhTxBtoMkK7M6VDZqUbdDF8Vv2EXiM8",
  "key38": "4VSdtieJN8uzCgdmtbwPgixkvF4yd98g5WGZuBvCACAYxbo4XFdQf1PY74ux73QakmWceXzRuej57pEZgZAAmmSV",
  "key39": "5dAwZ6eUXBKNzJzQa8to5ZZNffdKeAmyzfT1kQb6zdshZmRVJwL22EriWoubXVh8vaSbfGW1DXPnwBRqnZmV89Ju",
  "key40": "kH2sjSVw3LZ6BeXxpRqBUWNNNdsboEtmaBoARGbWyGeM376qA8dnwVvLxqt3EyFh8cUwpmACpy39TLPPfxSgje6",
  "key41": "RyE5zAb1433uPfUTYnpybe72fdwBatCDtyoEvSxzMho3EMqmXGNw7PGb7KAG55GUMSFYrD1hachZJrEqLqrbhLC",
  "key42": "3TpQte1QJYgNaJqSP2vmkwBPifQkv7eQNZvLdvueMjodwee1PFtB25WxiTVNqdRhS2UrFgVGWrBDEhC5FLS9Dwnj"
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
