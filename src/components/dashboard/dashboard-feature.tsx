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
    "2ZnQKDskQ9aQPxu8yjd6BNGcK9po4VNji1LJvtHiRhpsHEbgqZqggvDwxo5Hpybo4Qwnj4pwVwfpUEgXNDY2UqAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ve327Eyt3SMmBZNZzouqfbHhGWwUhAQNRvrgGwbhwmrtzNwXJ5CXiyRntQEsMLMP9MdU8QkwZ6bX69S6s2PZeCb",
  "key1": "5tsnn3ZpjTcigZU2qgzNmmygdGaPbcn8ENd2Z3uL1JC2zqrK5ktUKGmXY45KEYMss2TGH21KNtJ3x4kP7rTEfCip",
  "key2": "5GTwnNwtqZbRcAg3etR2NWzfHh8D8dYij2UFxoUhjBZy4HWVpDna1JJYxiuhkXxfCiFbNGVK5SmkMNLhS3nLXd2B",
  "key3": "uo9Ra6nccHrrnBdgZaJ43LgZGzMnC3scpCHc1rr1LsQWA3EcUt2rg2VAEg7DnbpSUu8PPw8LbGJQGXy6edxnWok",
  "key4": "44FAtNRr4AsAhBgtP253Q6RKd1Zji5fy8DzNeMytm1oyzkAhYwDf37EHNTTQSnEG76pnZR2B2xSnAmET3EJQrfh9",
  "key5": "4NYKmzSGHxL9N37b4GPz5rLotEHFep2fPRyaVK4NLshtq8krPyCTV1ZHdWQaBT9qyte3sjtmp4J3NjpoMYC3L11v",
  "key6": "3s8bn5nZWqwvVKusfBMEjAvAzh14V3buhUxSrkAPs5ccDDJ7VmxLEe8DgTGa7bykNxUyWhdRCEpy69xsSzTwMVqA",
  "key7": "3fMsXfYgdbZ7vxcrMcNSy5jdKDcnLuEin67vNVgPwQvVALVCPoHGj8CtFT7F9anvQ7kA1DJibQ8X4bKXQeAkZbd3",
  "key8": "kR5aKxjp8qUZBvr4zPBvL2k4xDaAjeruMjVNsNiitQWoKPG5ygi7kyCkmxHgJ9oaMrRfwdnYYT41yk3MFW3CNZR",
  "key9": "2w1ZL5ZGZfcVDcoJ9J2eXBEKVtVaSKUuJW5GL15AYFmGGUDjzJTPMDPtRBJ2UqMFyrkXjNpuXLDngv7YoAhtJDdc",
  "key10": "5dZMBGFRVYvugcaCpem8UmRUpyVrsrGMMVBiYT1npSzY1eBUQkyzNXe3VuipNX5w9F2LH2DjGEax3KorxeEaaUNp",
  "key11": "2ZPdsG2716Dc1rRk2rbzN3iHKFgH9vFkQgw3UaoB1GpQdYJnGvgw7FQD3kstLg9j8vmRXWCQn4SHn1oUru3K1UZt",
  "key12": "4z2Wvjtycdnz1Bgrycu1CTdr8AoAGXXWrQJYoCFfZKFA6KW5rZ7Ehf232D4dh1aDpwx5HxuzbxkH7dwbFQKAVGMT",
  "key13": "3fbigrLB3nwmfDexZuvVPC6B8EURXZEaXPV8L1DfD7EwBBDa6X5Mj6S2UsGqtjX28pqnb5SoH6Ut7NxNhsfp4CWj",
  "key14": "kxLkhu3r2EZ4hYceqi9dWSeP4zQ6iZTcF2xbhLZBQgHuArZjXmYv4wQ4fBKmJpfdjvqm2QHdvFxzttfawEqRuWT",
  "key15": "5S4CmNR8uCJnBwaaGcnS3v7UGzFmur1Y7y8TBiPnZGGzMbsEQdLd1RTVtmHTDkFRwk1V1qLPFumuFHnJ14PKhiL2",
  "key16": "4DuA4qnYkjgEACiY8hygrQHhFh18gEXW9CZyzi2Fa3yeZiGSXeXq6mLwULZwQspRrDSrVRrAHAbKXhY6ZdsKpcb8",
  "key17": "5Xmz1UvnQo3hFWZ8DxFatUeos2pMEt7gkN1xZTocnX1E2sDzdNzhfMabUSCNS86J4hSrtqKJuSUYtXVZPNY9ZiuA",
  "key18": "4LCFmN8Ln5WxsmTZRe5BpzXadhVtYgteXCbpfq5GhfqgrfsEEBjLpRox8NDMe3T6kbBj1Dd82YsfpdbnFps1QoTN",
  "key19": "UPdA7RSJzCHStpBh9nEjGac4aTpGs2Hab5ipF8AJBWoYVrJ1EL1n1pwRgZxpCbPEZNEoEQPAPPpsMDvrDeVXTru",
  "key20": "2nmmv5h51BiNU1QaSsB1bzrZrxCUz8P7FbGcuGyH8D6p1yzsszBK6EajNjqdgLVgaDof5XREqZ7drCg4XmpHUYuo",
  "key21": "2iP9nzaB9HQqh6HaRmKAhrMRiFPsXy5xKPG932QaoWS9RvpDdr2Eru3NQN7xB2UjwEi29GvW5hghLwqtcuWD137d",
  "key22": "5etJACRGZMLpMjWquQq9TLbKfiMj8ivtNJkCtemsS4wdgqdZzNp57Fs3c87cw8CbenqGNdnwjNhJ7XNY78zDn5Ff",
  "key23": "4wTEde8wtc6rzY6zrJuSiUVqH4VBCP6gFpkmkBESjDDmRwE388aH3EgFkBXHWQBpEDftkNrNaNKGy8kyuL6TwU1q",
  "key24": "wHYDTwbAnounrRun5VnzidTNLSH9UnTKVfPT3J7QqQAeBezkLPYu6TrtSpkUUdhPHgooL6ZGUZPfW4kahS9AHDZ",
  "key25": "27thzhkHnj5GUPWATR4T4RcfesQBug1cr3fJ5DfFLQaSgoti5BZAsxSXVnEGvc734zwKinzU7WJTrdm1LpKjgh3z",
  "key26": "3vvNzkACF8cfo1Ku1CMtHXQHyU44NnRMw9fthEci1Dq9L8ZdmQE5KmqXAky3SXh1EfQcdESYEk2WZqpGMowUgmAw",
  "key27": "9a3FE1pCsJAnUn5q3BLmxCVwn35UCAjkYUQczGnaX7fCp6cyzMHyS1MERceCoom2pNoEaeBmhCRfPLcAQeGMAza",
  "key28": "gZvnvXqSLxPAAxkQ5HVQtmQHFD8LfAXpnRcQQJVcbnfFD62yE1hV2Sx2pYGML7HuApcnod34tZSyWQwL36L3gHZ",
  "key29": "32d7oshK8PAsGfBvxhRQ3XJu8qmSUzRZ1R7xRcJyPRA44cNSsVhD7ETRscmB4pqJFyh2k8sG9qVVVhMxqBJmGhkj",
  "key30": "56JigDETFWLUr5rsyCcwH3GbDYYFqRLx8TAb6hFjm3bU7L8sJugEPosFk7YJAvRezeC3LtyBam8CYndbUJHjomt7",
  "key31": "22vmBJ4yhZ39JEFtQfCH5s4UvZgiNAtCFLztc6SRCVtZ8t2S36BAEP8HqJ4EQg7F5sLuFNuAZHbk2KidsRXRWinM",
  "key32": "4r12uoispppcFdRB8SyAxojvf8VVuGDS8TotkgZikYUCRCKeukvqyZ8ghsRR5W8EgYSLvifaVoE6sHycHB95ypMq",
  "key33": "3qMWWxTmU1LUbY2eX3q7KdtNXPoZ3nS1ezSMCANnwkc8QoZkQmLpSiT2gddYn26bW8qccKeD8y3XLZo1Scsf1e3",
  "key34": "4twX25yn45242MeiXvF8ZuQ8EPxxrCo5FSRpm7gUH1LNMx8umSpXMfH15ARKgfAdqxzjqP4HVEVGW1svheZFcnVj",
  "key35": "2PsZqADxLvN1qwvbXPo4b7iF5svTZpfZfsC8VqZd9PP4tz41PxB6cvrP8y98K4GoFYCQvCrM4xMyLtThWe2ju1xy",
  "key36": "WrFT7bgj4GxkrCtjBzrJWkTPnztpsTZdweY2kE5ESFPE18mhSDN9pTfpYbrp1u2CfWPAgVL7Pts3FAdd4ot4R5z",
  "key37": "3dNjXaKq9BHmoMwSGqWRrAUrNzjHnMXqLKYd7HEntxF7HbmnYeq7wUqMxkNUtfC3r4ytwzeZ3xQPhFdxHWx6u6ss",
  "key38": "3t6NQjqnngC4zkhirfYCdXy3qpbBJ3HCcDWJtneKfTYE45HmZzDh5hJRWhs2iz5ZsCJoWQ6skwTSoCCJheQ45efE",
  "key39": "5v4qnMzMVWgxirYzN54Bux5tB6siQyxNzn7mSNtBVZvMuLb7yG9syYbWKJep43P8XdmLbtsrWamxCUVrtW9RK1Bb",
  "key40": "4WTipywL9Cj8Mi7W5Vm9mLjYip8WwLXNrAKhDZ8HaZFqXc2AmVrmJf5oRYo2AbtpPodCEuUNAypY6yJXnLzToPBN",
  "key41": "4EwPyx6oGHd5oJQedGM7jduELHMRa8Hq1vfVJBxVvcLM3RryGWqq6iGr1xhjoG1W5pYT68Qi8aZEDmi9qshe29oA",
  "key42": "PBNS39USsogTPXo5pqNjRnNzcxrwUCbj1uuhiLcgs6ezPzk492QmscRyJtTNsW2MgbtBeCkCAU79Knq5u6skmFh",
  "key43": "SLzaqqXSsydTsuwqApz5qB42BvuWqH1wYpDDhESyZKYLSYNtfLUZjKbKmuVuAJbBD7eC6YKFhbkMgR3e8sywht3"
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
