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
    "4sm6dZZvm5pKWUbQoefS8WyWBU3ZM2MsWaMv58xs361DL4NbeggPdGsv8VCcFXtRiZUsvtWfHsRsbVZeA3o9RrJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FYTb6PWce1SQd3EnwuG8oBLvnFh3piVqJs5W5VeFq46yRq9vZCgqU1QL4UxRZ2NPnY97KkhsnXGshpkdb57e8hg",
  "key1": "5FCXKiTiNWZrpr1dsgJsTL5HPERkdyEi5HAqv8hrhCnETtpXWaLUKb7dcBFnK7pU5Edey2KHvzURk7xW6snqK8SQ",
  "key2": "4Q7rfJZtnsU7Df4qrVjnvVE24NQEpD5Nts2ckSnHCtujYTusAPASNnAfmmBv73P82LwRrumc9ziibA41TCPxQ7CG",
  "key3": "2NF7zJjqGAcFvnFB8NYRxKc9pKGtqj575XXPWBoZ7YhqNAWyyk8XmedouXpvET7ftuiQqaz5CjshUNMtJmpCKopQ",
  "key4": "5yXFFkiV715P5U4iMjyhRrSGE1ifeQV7Fuw6FLKjuJwE8ZM1sqzy4ABBE4sKycWBsuzNsyc7gu7iVrpJPrWuvD5E",
  "key5": "SFpcz92s63khYHcx22E8U3adNrmiEEksDZj5VQUiaRVsTi2mpM1CNWZyeXQWrptK22deNkvKvCufzRGd21mNZMu",
  "key6": "38wzAU1TwWpydi7y41vVs4wjjb13Q1sciRkxrhrX5d6NK3b1xJnWZCscPwE7kWcpuacLgpKGibD1VXcCZMTHBRaJ",
  "key7": "4LbAaekiUPN8wzY9bgVC18qgGyddWTWLpVdZHJ3batkaFosDS3jS43ZkzKtpRA6McXy1bqUW79T45XcqmLxJQFgW",
  "key8": "36uv774oEByeQvBQ3pNR6SaW8jEzDqDcCrvGVbQt7yQnRgWGvaCFE2A6yRKUVUQFGdfh1s1RY1JP8kBEouTNFuRJ",
  "key9": "3JZ7cgZ3CTLXzr2GhU3vntoP6szrtzW27dZJs37JV1TkYjzLk547XGmnAQod4kJAVmgcp6zDdpXJToKQd3aU7hC4",
  "key10": "8tNPfMz9qYM1YGtrXosfx7tYvKem1PEKd81nRgnvrrEXHAGZjrMfD6BF4jxBHHLnhLrz5dvXAYDvi3EGJxUzEPk",
  "key11": "273GcbTLArApW3U9T9JjpTSktzHS5yUQZesfosCUs88wh2RhHymNE6kK9tUKaEhpqb7D4Wkpa6wiNFKx5FjuFYHs",
  "key12": "5BqB9JNbFuZGhv4Y6ycDDsXCFCE9Hdfbyi9Za2tQrowLxDTzbyyeE7LixBc2UATDvfbxYV69dRA7Cpzr9g6YH2Bu",
  "key13": "4uTDpCyuoHkYJY4j2L6pcTLaqbQtdFi1yQsWM4bo9NyUMCutMEB6pW2eAk1kkqFYtPJGpaeXqbLNpHkB3iUvJ4Qk",
  "key14": "5w61ftk2BSdayhDc1R6Da8NcQZZAjZir8tv27W4Ez5Q1V8grPyFvkFpqudAKBTJC1W8FGS162ryWP6mLusTUwFBd",
  "key15": "Y1AzRXJTwpUfSszAH2Vvr13yRkENG5t9bHjUD6zx94CXBL9FVtR1yaHSd96Mt4ZWnyPEvzcwkgnGbafVLKriwZD",
  "key16": "5Ye1ZNxThV6fzqw6r5hNLPKMKAoHK14WBHuEE1qNWDse6gD2bJiUHCQXYbg4Sra1W7RjYZNfdDphMCZLddjXDrBn",
  "key17": "2KB7nXMrxmY2y5bTpsyvThiuz8WmGZwNJmABbiMvTWKMcQq5jnWrzzaVPaxd4wk8GG5msKd29MpnBkmGiKv27mjF",
  "key18": "4azwDX1CcMZdWAqqcP6r6hg4jk34Y9e4itUvPkTmqDQkY63fsY9KBynzQRKRzzo2GkvB53jJ1FRf2xzcxwe9TWA2",
  "key19": "4Pd5iRzqwvg7ouWLDvZbt7ZAfe2uLPUuRSdwdJsuCQqK7hFxVFEHbHTznLzt7n6oxLMXL7apmbJTW2qjvemjJCim",
  "key20": "61rrufvVTZ4dntPJYT5zTPFbKPbCMZLGK23V5EeZbpgntGRtUcZM38uCfuGjywi6wCnEAq4n4xHW8uBtopq4XFrv",
  "key21": "5bdcEurkeiEp3RQJf5Ri3MKFhkCh5A9V9memU89RTqZoBtw3DhstoYc9qw4YftEnNxtmwByuHZQCHZF2EnAauzb9",
  "key22": "4FCvDEZ4A4B9vUoeJrwewsmUcDnus4ai4kGEusfy44E4pC3V7uqrMbJRQ3QufL8cY3BapgTU8QA7x7fbfkaZtQuo",
  "key23": "4g8xQpMXaH3eebQwWfj5pKP7qsjxDwY7bbTMDRXtjyVn864JHxSatotvPRLd4jEucrptnqEiqmfwvWvgbycfejpZ",
  "key24": "3oMcWnA6NLt2Jky5SpEYFNsPQXWPNnoLip2tnrGjXpTgtbFTamEU3gDQyDFrGBUkfQrhdCWiDWmx9vtNzHg6FTnG",
  "key25": "36Dygrmjuyycyt1fmYjWd4ULPKoztFXZ1w8cRbTkPMEkVLq9V98ZMXb8q4FzFiEaft51XmhykMqNtaQLPJE6oyUW",
  "key26": "4sBoJ3X7f6t72SLrh496BxwfKHwMXpkJCYS8LT2UPjry9sRasgTnQzetAiUjxcEJXvY6gxEKLM7s7HNLm8DGa6nv",
  "key27": "2g6nPrzg6YTZr9q4P988ALMFM5qKgdKj1JjvDLBxwERBaSxEMzU2xkBq7VF5uTZi1Spg79xKUQES5Bnzpidju5uw",
  "key28": "4AbMB918CGvg7KLL4xY4xFpLciv3ygnHDcsFp5SXBN2eRjkTcNe5psqxvoq1yuDvXDcdQ6wxtLn5h38R99dS9dnc",
  "key29": "62rio9pYsVRBZV2LpLZCDUeC2z5z3mY81sND1ycXKMjhPxWt9hUSP7tZxLP9YRFXpzAvr2p1xDWpyM3CtVQ5qaWc",
  "key30": "49P5sJdbDXL8hJP1yY7woQzdAVwiP4t9C4ZLjQH4pwnJVvp21KhgUPTSVH1Kp48BQkgNmBLnvGSoLg5cqR1KzdBC",
  "key31": "rZwWTQGaa6FtnqHEfp7McK2KHGZ1vzvbnsHn64bT7hA6GUAx67SRfpvMHp1p2qUiuifauDbc2CGnCXVPpskWVXQ",
  "key32": "43zcT7dc42foQaQfTxUAXQ3BEU7vMzZKWiCQLewJxoaq6ee538v4hdHwTmL3SQ4F4DXmJGb8tNATSvMjqcGArU57"
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
