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
    "5Mpw995r54BwqvdLAPRZHXviobVr7VCYVYqvKmcRUqY9EeRWCuX42poRb1hPtCyyWmLQsFJ1WjJsrDe7o951MvaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wDnpAgja7TvVnFpm4FBKx5XhmMNbZtaneSp2Cgpd5LbQ96kJQmbfKygvt5VMKkhwwxJLYEjzS8h1waMnmJERYzk",
  "key1": "33AeqabNiZtWrQKc3mdK1eyDGeWfVRwk3w3o1KRxUZzP3xGSdMP1KtFXh1guWuiB4FGMBpgBt69LYtNHJLVEj3Nx",
  "key2": "3UFTFEGXhJ4SNcupm77wvezPbkewLtKqFwXFL38t28pjpgDNSm16SQkXRHRvFgXrVuJxCX5bvzp4m94hbKztmUYk",
  "key3": "3eKzWpJHshTZ4mkpP6vLJFDGVdCc5k3WCLVwsYMumrXuJjzMkiZWG2j7rNFrpHZ7tWXfxhshGAMVyB3XPVA7jYhu",
  "key4": "kooKwG23mKujP9SeUNx1Bf3H6zYvEKJZaf5XuKVEcTkZxmpcRxaxSeNexrVr2VCZ6ZX8SJDyy4i7QZRgirYHkrn",
  "key5": "5jHEado2v95XpEZQXhLoot2iovHVaCC7W2QfzoY3WyGTxC5WZap7nWtTCy7hesGYQ4oNazagNxvaxxUgXg56qYsU",
  "key6": "44JSYvhL71Z1sFq3diau2USx2cboEX9WfpxrmBnrhrnjNwJDakxdKKkfEm4DDCP9UWtnuxaYvQkkeD6V6WboVgQn",
  "key7": "sHueYRSTgRbF6eGgeqH37GPbJXUtaNXcmqsDZFHEYHJ4KvbkSZiFv9E3iQfzGd7cyWEJekp3aN8H9atXpi2QLRQ",
  "key8": "3qkKEM5DJEG9fB96L7MPDffLXr5poprJ8ay7ekoWL1v3cswGDkz2U7YgvUPFxvCuNmZsYjm4LA76yiAVD9sMurzN",
  "key9": "52pstY9u4GzGRjUK4CnC7wvL3QWMmadxgAuT7kzFmYyQCt4dC7ThEy9ajj31hpw41cW82ZvBFkCrGa87wGekS6Mo",
  "key10": "2FbbPg3563vVUca81AGG3Vbp9ioma7EbqHArn1JLAh9n4pUUnrtjP71iDjK7qiPJfQPurn75bFdqqFqRVYPp2UbD",
  "key11": "FnFQGoFK2qj24NzEEBy7vb1TakjHYCaJUghP5tv56pcKFaib5fstkgZsQtcxJdUm348qxDEjH6z8mGh4g4tebFT",
  "key12": "2CEyumsRuyqhBWvUfucYU6vroyizTXz7rU4MTFq6aRHZR1v7XQrWsmLy2ybrT9mnJnLFtfKgLQQNui2Pfry6tDE4",
  "key13": "2iWWy66fEEP386f977cNQrJMJW5jpE5raoLDaRSV2SU2Lt2c5MjQsBaEAocXUCNPpSw1f7fADHPX6ZSHZF17iyhK",
  "key14": "4CqVjr1BjGHaguGwo46a9iwCQibBrj3EhQ9HEqg4XxhfCrg3BPUbrRdBottyawsifRWjmQPho73szS9XzFdvqVLf",
  "key15": "4ZYCWX9vRjxsLwTys9RCyCAr4SKM7rMWzYht6fLoB66QNDdkm8VMNmkeRxHpdhjyc1qj6NrEe2f5iKh2nKCa2aDn",
  "key16": "4Ne3NEjYngzCpK7uk4gEhKgN7Yj8iDtDcn5ZvF89UZS9myctthT7XhQMayrRGHpZytT7csoMvLRMRcVFva3Ssd3N",
  "key17": "278dasQjNW6x4QyPa71GTA6Aqg6RRL9u6xsvS4Ly72niWUPxqRgYGmCb5tcworv3657VvhVxDusH5RHWs6iGaWb8",
  "key18": "5hfLQWQpzm8Khexenysadp5EXEQTLWECcZfN3AfndKWSy1ScukLye3qjn147ACEVrUBCq4V74Y8pWyxX9QP673gB",
  "key19": "4anZZvqfst3wC7vgNKFXiTyzQ3SsdsbnkEG72SAkZBNrsWdxdBQRoWouYKd84GCqkniRvcrPydcFuffxwdjoeYz9",
  "key20": "61Bh4HnCN14Rc249akdEBTUTEEShH9toUhKFzH9DQzp9kjkczC4FudY5tEoxKmfUfDPrbZHxHEFgYxS1akFzAY9E",
  "key21": "4PAUnLwmiCiUFTtE1Y1TnYfY3oRmofZB7KuFfUcXnokf6vvaqnNU5wkg7pbADhDeUGzjp4z9mr5VanZ2Z5mRpuL5",
  "key22": "5Ax8VqsmcDsxHMGzdjNFYS9ekCbHJ3MCymyR6SANUL3NdkUMt4NzxdwvmYBwt4chCk1zPtL8Ev1Wn4Smqc7cmagT",
  "key23": "tyiTap8MJRasa7gCgdyiuZFyaupcDRQkKgJw8miHNJbrSGP9xNeUzevQVefb2CMsamwvE5iu8NDKTaj4fPRzmsG",
  "key24": "5fkVKNsJUNddb3FcNXTtjJT771NjRyNR1b4biE47vTub6aNTRG8HDfPkFYGhndm8YLcwQ9a5FSRVcXXAiiJoFjQD",
  "key25": "wYKdYi38KL8A9YVWawakVzRKuu6Wcy2gKgBbnHPSCopCrjtunEmQuyrLktsAJ6UsVPhgdVeBv4yPsAqjwpitnve",
  "key26": "JpDdfsAWMHgdHBCdHRcShwBw71wXJJ7SfYBDe5MWsvbChuPvApy4aCpMTtNF4QBzvC96q5Yc6MgzwqLndbS1fou",
  "key27": "7sAmRuNu4c322eCsjBfHvPXRxEnaMbJ4FZ4WatweN3rAvKqh8RrcULrb67C96SHXer25DxUEVi4uFmvP7ibgVK2",
  "key28": "4NkWT5sWJM8J9zJ2z3JxAaWxF28iKAmFB6KJCmmCXkjLFq8T7iRECHv8a2eW3rBX41Hgi5Th3oHsJJYM5RDaGAea",
  "key29": "5iY51tJVEbDgV7996MPEuiCXgtxYL2JMpSbWGggKDbgzapAwuLpcoVUDka292kG2Rebu7tbccL4ZhhkNUxMfRQoF",
  "key30": "2WEE5H7ZxsptWAtuB5YKjP9BVrukJN21zgjq9SRSxV614j5bWdpaTgXyWJgpoK8YtTu4bdDLhzdAVZp21CFJYpm3",
  "key31": "41PW4LkS27phcm9kMDoZnvyZnKCS6MtsHC2q5P1kLf63kWQsusDJfyrhnYhsJLW7ErMqQB3wcGAAskxvH49k4TRC",
  "key32": "3uvVHFpivjC898MxcPdU97PXRrwZjFXQffRgTy3wmCMTRCrvo7j4nBZ7DmP2febrtZhH4zwEohhVBpKve2fWzH4N",
  "key33": "572KzQbKT3D7HWmwu6zmdWTjo1cvBdRSwBoP3YCDFcqAHHRK6LvnY1xNubVzYVohTEE3jPw8WfLwb1uBzoS6bebh",
  "key34": "3cVJHuCtvqECgQRAGb4RRBzk8KZ7maTLMAg6KXThJ9ccfMniMYvXNS2QYSgPEkVZU2xFdiW8V3ZE4GBoBCKZ2XrR",
  "key35": "23oLvk6MAEHYZq7EzzuaC6yYUAwVrDGxwv7HYHbHTeZASVHJTbMBRKhSaqyE4Aa3fFEnbRmWLq9mspDPPpbfULQN",
  "key36": "5FVoLHW1326brf6MBg6MPNK3jussGgjRtzfDKSo6GHxTTL9A6BKqVrYuRYf1UrfdEg9tcJ4Ks4PdjNJbbNrHzEsM",
  "key37": "4BmyFrFbdhDPzCGKjn6RPPBE7xojRUKs3vEGcseKZ8UdhhayXFCXUbTTFpxumrJbuyTpG73n9daNqAHoF5AprKZ",
  "key38": "564Dg8pkJPcg1Us1qErmGrNv5oYLWbsyje72p9zV3WRx5Cy67gSWsSgH27EWgXVWjhg8mg9kwxAWZ2MdQTw8iiEv",
  "key39": "34zoBwV6NyS1XXDedx9iXhfzZFWj1zKwGwZf5tZALMo2c9KP33tFNEcHFHoEFzusLxPatMo6QrjvxTXhhVAADWuB",
  "key40": "2mPPKZrenymjoTBdoMcBDPLcaHRXSMXT6jxu2SoqyLLM9DJKNUm2LLChvGPxtgovGefMwrAghMe7dtotu5ny2pHT",
  "key41": "7QY8cEGxK5NudVKsbs4wyC1QokfPKwjnPBFM2JNtuNAJQ7UTehFAEAinCb5jp8Fm2A9m77rRsx9pizM2zcwX7Mk",
  "key42": "4rusViFbsvJFeKiSZd472urqr1ou9fRSaqMRdePF7H7D5QBFAfiuZCbRBuU5LxNVi2FQanfb6NfbWF2XDizJ55fK"
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
