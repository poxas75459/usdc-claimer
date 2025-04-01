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
    "3oELxYQbmJ7P1GhtrFCiJmBaUAwgqfqkPf5gBh2kvgU76qA3fwnVMboj9ttWPTSL7Youf66yrCE56aAYcm5rA2as"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wtsoaPSmCyEzWEPjwRhHaEDXLv4LbFGHVuumeAjfgH1VHSJ1fTk3yvwFoB28EGL382SKjGZhgfoLqJqRcEuj75J",
  "key1": "2ewuCMoaok2XTpuQHqWLuBZcxgeurCxwKbYz25nzMMqTW4T6HCn1Zj6ygwetUzQAeQRgEkUK4zPpEvHk2JjN5GQz",
  "key2": "5DUGnxdHYZ1e91hi4Y3cYrhC1s4hdwcJmZx3USdDGXTGEherL7Ni4auG8XJHb1bTNK228fwzN1veNK1YWEjAvLqR",
  "key3": "4YskHUuhy5fdQ6QbAQtCZ1HmfB6U9PC5hipN6DqLAws439RdKJjCdWPVdkUkGCHJviiV5qdnRQKD2rtTVYu8BBfZ",
  "key4": "2EaBxeL2xH4ic6ffbCu3LBabt5ft45mTVtrX94StRVLKYQzwTvCbgkSjqkcVUecGP3DFDST4FvQaEdvaSy26fWWS",
  "key5": "3j7rECzwekZ4Kcc3k5zbeeGovSttLKdAJmQnB4xBhN1EujUEpmDFhzhJv6HMaNNTxj2WLEfjnaruLzNXUFan1kP3",
  "key6": "5vuyaUuNV91MJmwDRogfqNzK1cWd4MMMsZ1Ze2WkQqMfzBGeNno9rpNv4AWNms52dDejdfF2GVUtJiLnMbedyY98",
  "key7": "5JEAzAYH2FdkqM9Vp1V6LXSqrdhViJM9KPDZoeozGTxfxPxMxsLMvfFdtpAYAx3Y3LGuNNM4YcdDbbXkEPEC5NZh",
  "key8": "59bCjWygJ6AdyUXgHGmonQV3ux638fqDq153jgZeJbZiEFEta5xLHeEvvHS6BzeRwCbGjfvpnYYKjT7CdPSm4CEG",
  "key9": "4iLq7mbhsq4SZrMXrmfqMwLudMjf1sp6nZyMZEZAYCieSPSatrfW7RAL6ibW9LZpKzz3dJmGf48UpgR9uHkUXxzx",
  "key10": "4JskRfE3QmoNjqHgpkdNgdijjJPMeKxeZGKzGiaoH5Z9bCzichvgbX6cehtgK6L42VhUBErr1gTCd2PZJFMfdcmh",
  "key11": "15RtMQSqChsjaujUWmu24ZHWYSbetNhHdoa65V9HsEkcDJj4DAGsC44RibGjuwsz16f8v41QKvjTdqJWwkEsBG4",
  "key12": "3tMVEzA3M8n21PEr2bWxibXZH2K95oAhTezsaGsr7TsGRkRcvMuApbGAQqBpL45haeYvpAn4tzXid7SLrd3M38Rs",
  "key13": "5uHb65EvnqwTXiuUE34AQJ5J37PomB9hkZp8wMuvDv8qoRCiuuc43RfhVCy5PEpyY9zcprRMYTWbtdvgPfrthb1C",
  "key14": "zV6VtYQ6Ha29GpoaRWYKkNgj8UR4Gv3b65uX5UeSizAiiotRB1tgdcMsZVezAkHi9MxJxSWvKr7szutrkNUmNmf",
  "key15": "LQKFLuhYeZe3cWxV3AKo1N6vn4RvhXKeuLcAY4CNXGHJCUhT7wRgSMApa3F8AZrMKETkGQ2wHgS72VuNtJ9Arvb",
  "key16": "5EDQ1KAXTHdCF2ndsyvVr86jNrwAndLt8sde9FANS9n9Y8uAJHucxAmGqfokCAicH2tPnrn1ivqghtZaoBjsiBxw",
  "key17": "MECKr2nMSpvrgqvYWD7yk2AuSn1xzi8wyTWcnyM9rmq3KYM48LEH6PbgdpLcHZesUVjE8wi8eQ8f3TNZxecd6L7",
  "key18": "3D2HJg33CLHJeKJ9BkW9ZbFGpQUnxgxwmu1EpJ7KgDooixCNWb8Ytx91dS1EHqiAB1hjCJG2mRoBpey5e6QXT3Vm",
  "key19": "2ebzsmqs88JcUuCimVNfwNqXVfojs2rcaD913Vfs1AMqqR12cz81tXsyqge4E6y5rthjWvJozW4rW6GFaCa1QRxu",
  "key20": "2rSrNfLCwUpcFkHCkUPQwTScPC77RWEb8zbMPZ3y9g5hJVYjj31WHkbPeBS45YnidB2urtmJNgjjbwantx6KhvA8",
  "key21": "5r5oPCYPcTbSnC96AQzw5MkjAQq1hLWUiAMGgzLh1MUdxrETTW4QZCTfKmaHnDqQ5AvWPdqDdcDQHemEi49zByst",
  "key22": "5kssitE8M3HRxMddNYZvMUCE3FSSS7GrVejGqwFFZCRBMLTEr9WbkL6B5ztaAvwyrZ3zNHqbswAPWeggarUxaVfH",
  "key23": "3DATKR8Ujvne6tBRNs9jjXsAgSHNAiNLtuGC9rJfiPZr6aNVW8HeZ3L55Bs2iUR9vv8fHuzBHpG2CmVVbjKdZJW",
  "key24": "4pPxVLZwZo6aeiGLVUjJKwyztWzFTGskzEpjzmHF7hpMQxUCs7bBeVxhQicMoJzqrSBoxSdDRQqJQL9kd4reG5La",
  "key25": "K8TvoRmBbXmmCnqo81HfKRhH3BgZQk5LVjwDtquXXzq8MwnC5cc1Zo2ocHUsopihrgwi4R8iBZWa8TZN763bSVQ",
  "key26": "67Cyo5cwrBUqjK89CbCAfGKvccW1PCUPBVPLPJqDqj1ztozYNe5Yh39CXbmq2VDr5vuyWdRG1QvZLuBCxteghTLD"
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
