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
    "38MNNPfraHY8bCr5b288BKmonBRK9gchaQEGWskVKDJspCUf1K4Xz45C4DgpJTkdpPWMjDpVZ86GTEhruwQnFDLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zSpvspMtg5zTfMiEnjvbURi2wkwtdGhujSNQfjpUCBz3atbkV7rxugrhirpSfZfNZsaSCPi7UEwNuVq3QLxfqym",
  "key1": "5cp8mkGL6XMTmXBrFyB82Lu2P5t9oWS4Dq3vQEVG15PoJPpbHUcy8hLjTTzsNTepUcZ3Z6c2q9SxqNVPtQB6zzXf",
  "key2": "4yq9e8yxASD8yyhygUXyazLm1aLw5ApUBqup4DZByfZbzyQ7mseagt8xhiX8VAhdSTNF52QntU68PgLKCP9QRxx2",
  "key3": "3ARQiMSZCRQ9AtHdUwj4xrjHCrhRbAt7PXUHJzZnZKgPCCpfmWK8Cn7h81AA2UjRQLAkHkoFuE4HJ6sgcMbq2mn2",
  "key4": "2Jdn4LpGZABmBF4ZCJwighJnBraNhtEj9WdJkpAiFpg7BQ9JWkJQivCRxDrHVEFftXGn8wNH9diabfN3TRwgAZi3",
  "key5": "3ZKuyL44o74eACvp77sFWsarHwoZ71JgxcHWnQxd6qwB9RWhaqe4KfDyZwSP9C6kaw96NKNgrWmdyY8GnKHPQKED",
  "key6": "534399BQYj4oPt6HA35Bg1qFEme7YmdDfXFV1wSWvaM3Ahq1ZDpEJ3d9kj49iTTNHjN74Bn81o6jceAqufn19pyM",
  "key7": "5wkoa6SJfFPd6NsPB5an8LWp6JbZtinSbWBQk9JvXcsSbqVHz7TPjEVbKsjwhfvTCtZnQmLcECktTcvdgYJdwUzz",
  "key8": "56gpV3uNyrqwRt7MGhAGSiqVqoz6CrVWzBegWQvcfHtyov1CfX2BX5QHD9jUAoAWNN4FuyePEH6KMKNEqVPWCZJ2",
  "key9": "3EBMZELw7uq2NQXD5Y1YX9xxVGArpzJyWDM8swug2Fj4hEd2wNJm5WVj43y5K4qsKmjBV3PJcUhUXmv16gutBC2c",
  "key10": "5UCopj7BbxgxhCNvziV9a5TPjkwtNCp9MJkC4n3ptuygBHZvGy5e27eevt8voYhSL3YKejz7dbFueDDHRUBVTQYQ",
  "key11": "5PBqeSi5uJSzzwb1vJYUWf1F2dRrqUMpLDTATT6ZX4Fn3c21gsKrtz2qh2dEetupbozJbMLGrYnJRAEgXb1kCCZh",
  "key12": "AJNWgVG26Si9Ne2MDAhuT9LRukZDm4Z9b3biPwxJsRswMVPrGUDLDme9YvQv2s19QfweYqcVUzSsU3aehieiwiU",
  "key13": "5Vxih3hbZpyDX6ewTabVg9F4rzccvTr8Qn7AVUmBbNepTMZiSFdMhqLuyjER3ksxt5gMcS2anrmUikSeux8A4ewZ",
  "key14": "55xAdxZasDvH41puh9XwpGPBLzAeonBtaB64gC1G1kKUMBAYi1pQCnbbW2TfGeLLBHkvRHmMe9Ej8yiRrpLKfzDQ",
  "key15": "2ZssSVsQ4fp46SJimkEuw2vpwFaeLsfMGuPd8ZfwqUcw8nUagkijJvWSkfkT3iKsovXHAKV4QeGAv5fuUTe9zSCF",
  "key16": "3ArqTAZfkB91EtV2QcGrxeHCAj1jzEnd9UG2tm7v8uayvRVf5fMaLo77BMCrMiMUCj1bMPMA2QSGGuQwb5hiGNv7",
  "key17": "4UXzThaEXdg9xi9CwKRg1V5UTZpE1da9Yt6c4hLmmYKacdZNxpn9PpPXGiyBDTkkT5HsYG6nqrtar8ruyeQvWRfW",
  "key18": "5F1yFytgYmXtLmKvhUwtNtB6kk8DdPXU3XQbEMfqeiZUJLcUF15cNuLtSqZx3VViB8fKH34HzEJAjF35M7rmQZhy",
  "key19": "5bHLKnQ5yWA4tBXwaYcnw6F3Tzso1XsnMp7ABVrvxEA1W6UzM9ocpdCP7d83YLAzAEHmxKGKUTx63jKS31bn7A46",
  "key20": "2xmNVu9qBqRERnasiuxUUyfiyHktM8jHn5GcYa5edqwTLofpPCn8VvQs8WBSFfyrY8svsJakWReQQjV9uM4DJNgr",
  "key21": "5duymLYhGGt1Ng1hYwxB55AHBGXaeFq3FQPBzcRAVzm1rrspdpu3U1Yj9vxFvCEaSf53j486Q3SeKg5bwiDmK7VP",
  "key22": "3eJau2zBbhPJD5GvsibMpKYrFUthG42pMEfbM6BNqcYx7QE4pQnxPbniqy6W7Dyfq6rm1gUTw9F3wi4Sf28WasMU",
  "key23": "2WuQJDz32dU2f3feSG3xAL2JxmTXoDevz2fCqYQ1zrQdz9o2VvAYNnSAfqZgg8wHrj4pfa8kcQKne8EJsaJvnyNR",
  "key24": "4Ku13PYjyDLwqbYLyVeish8ziCcrmV9Ry83F7aVPVYqxdXKkgCTwvPWuRCqY6WYE5hiXpKcK91gz3b7uCR5PG3CE",
  "key25": "4CLoJ5RMnzA7kF4prKtx5GkLuVrkCSWPy75jEgPRmRiQ1iwnqUww9tDhGy4Gkf9x6BZnPhFbsANNPcJzdcbHt4fw",
  "key26": "4XdwRDNVLj3NdM7QDTiG2QonemKF7mmn82FKpoX1PdXNWipnCzvsXPspJSw8kNKdcuaj1iVaJfACcPfrQcMFbmG6",
  "key27": "67LRyAoEcTvYPQSTAbBcxtaLBA6L8bvKSFNPWJTqrRHtPyVCexpdKU9aJQ77eUd22qrid4asVQkhSUsH3z3aj6jS",
  "key28": "2QwtQY6unWTZxjLwpqsRoGkDvdgD49wjDSqEKxDtvUaPzcLMuyS5JLiyFe38S7aYJRF3fmHa8UPeiTU1eWEAVAAX",
  "key29": "3kVrT9hfGfM3aH7Rs9uL4SE74EJXFVANyQWNGQvm2jwW9LAjxcLAQokDy6jqoPARi6zUV9YdCQaV5LLWSw3vjiCJ",
  "key30": "5fYmZ1D3KSDrrWHvSBfyiuPW2GvgnABuTnBoLnPQhaHiLaqQR4ZW46AfE2bBeNjSDfwSRRVA9YXwfm5pjnWbSGVm",
  "key31": "g462krkthnfru3LBvGczXytpPhJ5cVVDXJcEwyN3iqxiBMhBad7YLNYfmPmTRUzGEpLw8PuZEVE9sYGHspetjoo",
  "key32": "3BViJia4kTwjYMsxwRELyqVrwaiUNYZrqUCBf5US5swPDs1tDNemd44R1vaz3weqVcSeHtLSExJu7HbWMMXJFc98",
  "key33": "X7PVztsdxbvE7iDoBYZWed5LcvPqo8H1MBbwunXyUg8MDcXUP3RpfUnNXfEJ4zqbRvwWVLe1DmZGP86SfL2wyer",
  "key34": "5dcQhJcF9beHbey2i4rRrrukb5i7ydr9QMJjMwH2zxEpUdkabhnuSLNxu3Au6vxaizMrM9Lp7ErjVmq5maA7J1vP",
  "key35": "3ysJuTG2JqC2ePbKdzRrnvRvFcYSyB2K1x7bjTnzcaA8e1QRJDugWtURh8m2STMqo9xZZySrcvT8QrLkfpLqqpHJ",
  "key36": "3pVvyfKuXjwFKorHuYT58tSAM7voQws4XH6aCWc3cj4pNVGcjruFtnF1uMu7pobuQvAvTbvCiZVXmeuoMNtzYy9V",
  "key37": "a61SjgihxeZ2qeCnxJnc2wziS9sAop5KGvQsm1wwYRAJfVxTQq2KbbB8TVo7jeQeM19J4ZfbW9PzJ8D38XLYvd8"
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
