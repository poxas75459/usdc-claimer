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
    "5czJYLHd6GUgsRzZzi18dRVCEmU1XdmyquSBYUcxxQX5E4kbNnjw7WG5fWgvsZtGJMDMZU7p2VTbMJXzXMfPWca8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R1UyVb1miGnawefStg3aGp9Q8Acj6JqPVwC2N1GVwb8ri6ZEe9qWSs3ceMcWxuL1Z52aUCT2KppJ4zYskMcErrd",
  "key1": "4n7vjF6GVFXAN8h4rAYxNmEpGfLQ3MB5HZBcaxyzqqWRCGsS3pngp7HSj57SBETKEoWJ8aCroDeiuXoLwVSWuSEF",
  "key2": "54uyHpZkRFjkJD9LjMLjBMbqQZyXVYruBB67Ah1eS3K9QKjNNGWGjTafvrnwgqfPdKTiVC8fzeKguLt1aVczPunG",
  "key3": "uDmyKfuwJaBTf5hPFS1neGqukJzzoAbwzKGudpDXQ99kmzwaknaFcnfoWiSFmxczHmaiBPCnukvvZS9ADyA6zhk",
  "key4": "4QcUZeXKS1pJhSSGXrhTyMLyJ9me2gBYYgdmm4FAgfbYxKRnLAMxxkWYGztBmYQoPmJxCdSgmcfmu149h7g98Zse",
  "key5": "2UDNf2pAJ9NLVstcdw4tbMiuEGRw8H37BAzHvwewzGG2MjDxkVdkn9LLhVjjmsb2CdiBFuAXwNCw9f78UjH5uuFH",
  "key6": "2eD8fMcrojMS8fCGndCbiaWY9KVZTbRCZxEMcfEWo3ivtPmRG9MKp12KugbYTkhgyfMALNZtcVCo5e3XqqwAUcKd",
  "key7": "4nWmazpv1qZJiEpsoLaZN5fe3s3EwT6STYrwCziHRyyFqfTyWSL8729KTRX6XJBSxAS84k7bQAV7mTR2ecrzQXU3",
  "key8": "4g8z721oWw3aSHs4omfbRJtR5jdWqK1VnXFxBLzSvV1Eu7Ymn44KjdxraaDtTox3kGJNPQUSDZi4tUaB21BY4j6y",
  "key9": "31d4GUttQ2oa4otz2tbpgjpKmktoUWUBFdG6RBTCp2EYAKtLN7xRMRfRX8Jezskv5evGsHRtC5NfwWj2tsehygZX",
  "key10": "2kUfcmWom9vLpD71YCB2BqBJyizakVMSCj67Krg55cEvr2tv5KoqWCy1ayevkhy375HsuiPCkwNRo2rQ2VxVXAJB",
  "key11": "E9ChT4zBQFPSCG5RAsJtrqDwPKCJDgLTgUn63rmoKGySPBKGPcMYxGsoKKSeyPE9ExBau2BUsJqChymcP71BiCy",
  "key12": "6cLvWpm34urh8hDqnmq1NHQjEj4tHYgcpwqgdjKrBnkYsLnCiKr91GL3rsv8zMUL9r8jndnHDV8KHJay91hJpNd",
  "key13": "rifN4qFbz7dbyE1Qqd4bSfPfRxGCD6254c51mMpzUHgCKa9TVfHexrGX3xGyX4VBjw5CCqrcVZh4LCSmaCMmQL6",
  "key14": "4ApR88zcoeMhhDtm5A3vLawsYEFP61Git1zJ7szUVr4FskUZ5deYYgZCoimTk2iWy3gX6krnAnVZWuhrJ4cNHuKe",
  "key15": "u7yrb3r9ager9rVnscf6pGLQKWcQeaJSs4DZbKzFWeR8Y3wi3rfjMH8rSudGiVK81GNBCAJWP9Ut6jcgEG1DTRf",
  "key16": "2KUpxioDLSpUp1bBje6jTQ5nR1h3K7GcELiqd1jdNeauaG9P3xVSxUBQxBReBzq4BJvZZTw7WknZ95pYSfqJ6APR",
  "key17": "Truh1ocZDkCnHcY1RhTNZxxJ8rKpUQmhYLRisbwtuETKpX8KZFoAJGJQVRSfRUWsASAHmKTWxHx63vtfqSg7bhh",
  "key18": "tyV92SXyLHNgmwXHBFDvdGGh7qvxJW9xwUShbyv2SebEGfsXmk84AW1F91JXXK5yLsavYa2WCdNkKpKGDsCPdzz",
  "key19": "5ZBzGxBbkg4ATV4eVixfn9tLJ3Sr3GnSZhYHM3t5wjtJMZ5VQzXchuirXtdLUWY2ZCqbwzqiFnQaJczWGUKTtL9v",
  "key20": "4PxW1URujcJ9kqNoA8gRA3g8qpiAZvS1rp7uwGx61zMGdjEFxURKUVZD2BaHxdgDGz6ECHoGPAB9AyDm5hpDPw6H",
  "key21": "35B9mKAb3MgS5fYv8KTFQTQFz6iSuMTPRZxo1TytqaVhkZD7xH9e8oRYUrQy71V4MaTrA9jsgJsX8hCKEPjmtD2B",
  "key22": "4kurWKLAPtRP5apSGSEhNXhWqCvxbQ7VvtT8qFUTrKWHNc4X12QNFBmbtmHGpGK23Yg68d1PBu9gcpK5AG6PS3Mi",
  "key23": "3uukVixrwcMsdZ2mZ77qWSu9MRbRGCxMuaXj7SSz3j7xbcbSQSJM4gPUpgV2AZXf9K4c6GLuapKC7FoMofEmQ5xz",
  "key24": "3LPBiM3rAw47gq6mnrrczRRB17UX56DMS93rzYgJj6tpUwfzx46h6UWhiKd6gaDjNagSq8y93PhzppJJ4R5quiDz",
  "key25": "2yt5Uy43wmYnaetxF9unbaTStjc1mt25LG8QML8cHw996RnohPweNsyUZDhVD1mn2ewcHwNJ4y7bj7u8LV6rmRUq",
  "key26": "3ghJyr762QabsR5NBsXfoKwxyDbGrbDy4GR4NRpydKaMfTrznwHrDaHrppat6pPGNLgfFW4zA2iPTFTZg1LYDmH1",
  "key27": "2ksbXPGCCStZss2RW37Psh8ifAYFFrsXPrqCJtFMFMuRDx5ehE3ZKqAu6sM6pnwsCVTD93xgjqJVFL7z1KLNRmpX",
  "key28": "7oTLqzqLFnseMDoN7CHqEM6pPrKfv6Xo62GYPRNL2xY9GCEUPG9Tsr1Z2vqSsaJ3xU7imnv2DQ212GtL3Sx1trE",
  "key29": "4ED84P4S4K7uiBCLMJdaEQprkLLa7hJqo3js2G7MukSJUpCSVDPpRbPKPUAhnyCFFmMB5qirjyaXRjXKEjNSeeXL",
  "key30": "3wYwmNWW8FTnvYKvh5cwZgnoo8UaFpvxnzC24AurvCyWkg9viDsx6NmqEnYUwUdDoCiB9CZ4HBM9zwXKkU44UB8b",
  "key31": "UoH351sHzJutjDNJyQgAk8vf67bDDzsvxNBmnsp3GYYAdnJTNk8toiLCPbCoTPLcVg53HUDUXF414bkrLsUm5Th",
  "key32": "2hdpJJJfkZhFUgeUrDAynV6iuZENjEcHkxt7uKCaByuxL2Ar134EdjFxm5YTFynDu9kmRQxTVUR5aoFRXpayQBL6",
  "key33": "2Cv1yLCQhCU1tkg96nzAKKptqnmhM46i4xEKLzZBMmtfayQJXsDLNgMdMt4cBMoXc4kRzah5BKcS94C8ySpKXvvW",
  "key34": "5UC52i3UsVFHTSQwQ4iSdPJmjQm4tF2qMXKimxRUzEKe7iqd5dTFC33ZpF28NoQS549oQsfKwLrjS7ibE9Q3hYbB",
  "key35": "4KLzUxqu7JuW7sJiZP2DikSYrh5CTKwtoGbsoaTdPf8JMf2R3uqoHT7VEKGG8sYRNxDyN1fTBj47utUFhx3LkRbH",
  "key36": "335EF3VzK3XGhjYy2ZqkPv7LpbvoUgoDfEdMKggzRmaxFpjQUGVzuYTPbyAi4vCRcJ7sFDQY5jovibRfz8mJy65z",
  "key37": "4Rbx8wW5vKfMgr2LRfj74Zo2UoJrLFRLoyvsRzSeq2mGbz1y46nszUetCLf55jPwbtQixqG764RA2ZX4FEaBJvSQ",
  "key38": "ZrfKDx9pxyG7rguS7UB76HZwmrw1qbJcUNrsHJSgSQ6WteHtCaGvtun3jMgcoz4sike5P4QqSZ8BVzpgnjfHCS6",
  "key39": "5np9XD23zxNYT9638bdbiJV7KeQ28qn76vZN3kNRuypFAqU3jrtUBoe5uaggkeFmhubvbgPWxK1nh8S8XUV53zcJ",
  "key40": "4NKW7H5mhNLTemb9EDHbACeiWD6dmizynsoRFRgpHYQz7y9Z6n2tgnhjAPf2iVSUybHFnrPKcpc1gUP5VAZsmYQW",
  "key41": "V4PTYQeBjzxSduoCXjPcScmwNwhY4VPtijutzPkU9U9GxFTXBc9i6gxySmJs48EKkhXnrs94LC1SechBaX3hny9"
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
