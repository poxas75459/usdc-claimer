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
    "2YNd7kqRCikZ517L4byR41WfG56opNpMxHm5sn4X8GKhABgTEJpRwfT8CXEX3eKaxU3wrF1x5JvkB6vBSPeBSgE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GTtMzW4snHdMp3qHkyNUw7qRzvFqMPhto3GdcpV5siSGKuVAhAythGkdSynP1cknHviuv3Nyb8QQ6Y9JTZAGJkM",
  "key1": "2U4cFTee3kmFnCoYMinJPaPLGSx2EFyAqL1e2hKBjHJmiwf8kspU6Go2omqLFqPs2ZLnSttXQtGvLmmYYorhLG9H",
  "key2": "2mMmcWUaWysDFdeWwWqErz5JZ2qbgsiVawg9rEKZykZb7C3T2d91h3JqWHGkN9SWQ6nQDdzmuVs6h4oxhvyy8Bwk",
  "key3": "4mVyewHRNpRcgKcLMu9Pg3NjZYP36UeBxbZukAcmMCvZ4hKAmn3mXawAfyexyu4x4eLCyJVwFPgEJhvcNo72cSoZ",
  "key4": "5RGfvH11JGvpNiyGaB8To5vuS9dZxGqzy5XGEso2qpWfvTJjssrBy9qEKbk354v62LUUAgnKMKF1t5Jq3TK93v6B",
  "key5": "4bcd6bCN91xTHr517B3VsZdK5B6qQ93yKDvwaNYPZxmehdmeGP2gfrZghXCgdDifpkLRErP8VGtwPnfgwrpszoH",
  "key6": "ZVmXjUAL6zeetEAeCehGBo56B9rReq9nzhvea6sWvDb6KvsXyJ2jSqhhQLQhDKDTtJssdHiagEk1ctJU2YuE6Aj",
  "key7": "2SRbXnauhoMQsYLcRRSEjY4xnybfVQWyVuxoFApT3wRba1VJnNqoXewdq3p5VQ5naGPTdFZA6G32krAgnTe9P25q",
  "key8": "5cAvaznwneN26TEzPyxwtr9wjTjpeC5ZFoXPzdgKyyb76qJVXAtuykpLsPgfwhpxFtiQnBvatmHvuNJwVKg9KCoD",
  "key9": "2N2AmDA2ZAD8MSoGDR2hRmri6nabZQrpiHW5iYcueQmrEcSfjYvSJh6JNpW54aNs2mhWF83s2iC3yw8smedopH9J",
  "key10": "fRmuRzdcyBSV6RtyBF8BRzkHQibqWSkYKUBKhoTRxkiB69pULsCwiiR1yRAar7uZyA7wS34LwVMjevwoxwaQU9o",
  "key11": "Z2TEingBH6zRLSrMTCFwHZwVFMJffGMdndcYbVvaFYHhUH3bybrtGRdj6QWMpa7fUnWnABEKrG49i46sThmsFDu",
  "key12": "2ZT47Cpz8N8YKLx3WKDLoWVgMZWsaMcdiryFKRd2ZMtiWCiLbN8pHafUVkyg8SLGbKDr6cT8uzxcEXGR2tpkBrVE",
  "key13": "2s6djMim1m6VXd4yLczJ2HGA4GFfSMYjMGyfPnVTNMxJw519knMzE7734FQ2zJWrzfRDw9Uuthymzc8Hc7XqaWPq",
  "key14": "2YGaKRSqv7qvcHxmBQuo4ShbtdEiPmXgZCcGqEeo51p83iG14TpR5Wcf6VGTh4Qax19ofeYhjXRxE85hqieUoJdG",
  "key15": "2vWZRJJREW3bU8Fs4nyy2knfXWaYWKViPy6bBNV7ruJ1q2dG3Y5YC6WjCgN6TriZr4zmts4jsqwaLfBBVPwJ6d2L",
  "key16": "uwpd4LBF6iMJiCVfgFCJzXorcz6wNiTZ2vQesnrhBP6G697VVYPdqcKeuC8DqZokA1HMMX3NSc45ijUeFbEqHdK",
  "key17": "4TVC6rLKQ55QXaLnPbcPLSP4wC43NMBi6gVEyX3HJNCYYUZssxTYbxgcxfP66LMUuwrKyQ8YR9k3U8pEE3icTVbQ",
  "key18": "2Lx2JDoRs2wrzmpSNU194371kd5fXWShtzZBesWqpxUdPjjWHoD2K1HFEwXfj2CGx2RhHNyNhED8wuYMikxVXfrV",
  "key19": "m2NXkZw25Tfy3Z1MbqXMax4T6z95sM3KyAXWbkyDpHgum9WyQ1Kk8CMsQTkMebK13vmpMxrkfaSe88G8LQY7rTU",
  "key20": "3N8k69A1oLBgrfDjmv3uPjnNVrvKYRY8CyBEuwmgxTyp9SXrgyKBEQL28L57TSu5jTGFbuZgRYFrMB44KYJCBDLQ",
  "key21": "4SngXUzkVuiuF4GbTvDNJJ91ntwqsMK2zNpSd2qor9otLCN2dw17VtJjxonj2mY8S4bHZ1Sc1Pk162s4VKfu6yzH",
  "key22": "2PNwiMbz1mYotskP2zXsThtsMUXLy3HMqm8MSSZg5qvSPc5u6NYeYt8XPprEiR2Ff4bHLNmdNHP6rfhMiLKvtzmo",
  "key23": "574hCZabTxwoqfZtV4FjwueHCUdaynDFeatXXaMcXcABRSmc8R22kDzBmymbwReysLpHJGqLTq1YfrwYSAkDqm1F",
  "key24": "emDu5Z8etdL1kSEXx8vXrUnSWrAkQpNRTCecQjrhAFxH3uU8JdbfRY4TTU797aTBGAGjNGCbBxWBnCcFonkBMaw",
  "key25": "DSvrZWzKH3FnsQFxHHwGnuDGyF2mDtjMCCrBCLZQnfHhqy9YCtrpkgCk2Nt7Vc1nYqjKpW5vYF3AG13tcnufroP",
  "key26": "2PgYxWeFCurHvzVRTW5Ydc4yoFi91PUoY4pzVQVnjRcgHGLJFkiM9dx54rU4PzD7KK31JNxFFRLy4trd3QbNJC8X",
  "key27": "zmPzcqWwkB5KTwJcHEc4M9hYhhsdoSZAkYqk4R7MUyxSNJdDMa89tJNL5VLUiitDASiLZDtT9CtCcvFcTTXw4xN",
  "key28": "4HNVfbGFpHmf25oTSeMny7iqGemA8oXUYtys8boU7W4eiMS56DZrVjBS1P3rPczC7dPzscKdH7VxLj8JYEvcAnzr",
  "key29": "3sRQSgLMzzACyskZFXrnbn1jNL6q9zhQqtGY7BfZVCeEZnfg2FN6Q8K3rTJq1DUvLA5hqeVQjJd6G6kwwvTjsLi7",
  "key30": "2Ci1poF8Aj5Z4wJM3kqNxe2yj5EHJQoZSScyZzdzsTBFCqGxj9wxbvoraW1bHzf8knm9xh7W4atw5fDCxHCLf6X1",
  "key31": "1qRLMeDegcrkd7FiQw1z2epwBPWVUeKMD8eeXnWNyphqpN58DxMLV4Lqb79utPPhDZn58yV3ryhMMb1UTQbqoZV",
  "key32": "4HGfhv4X7MfnuhcqDLZzvXCkLQ2or1VDdycqgnCso4387ojCd1EiQPeoccCQfEF3vb5zr7vHfrFBTtYstyVowYS9",
  "key33": "4QgraoyPx4tP7NsDtVfJV8utggupwQ9byusUCVFFYCnvGGo91xadFYQDQprybAfbErewbhMCRACYVndKtYQSrADt",
  "key34": "G7RBYF3PxHkdngcEpLGNJKAMpV5MyvtJQtv3pkk7c2HtYtK4a4uGDz6RLGe1auxsxiMMgG2A2dGutqV3M2Coe6g",
  "key35": "23kikJFEmjUs2mo5xqKXtzHh3R9uAnVR9orPFF1L6vDGPrdWDyVi7M3vZB6FNowbJbjb97UkqJBS1Q7v9YJu7YXL",
  "key36": "5Kuoo1NUECJrq9RGZJV4YnM6BVRUnSdV11LirqvNcXY9REAH5F6Aco76NetnpEL8HNSS8G3czGmBLaGUW5ccQqV"
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
