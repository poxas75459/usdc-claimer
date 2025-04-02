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
    "56KoQiQaUEa6LQkPubTKVkxm5rKRzL3Yq6jm8RBLbFayu2C79cV9b6MRYaFLwwi57uZnLTmnfS7s7kYE4nhsfZQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ZsmJrFTg3ZjyVT1tkeG49VtBuLPZeaKrzXZuAwuWvjeThEC14dzgkKrurKBGixWqJ8n19AhQFTTs1d3LfyeGyZ",
  "key1": "ncnShnfUZwzM8sk6EGrEjxpSdvhCccUaCSC1fsg32cJ78B1hJeuFgyCjx5a88G8rZu5KBosTjFnieSULEizdPfw",
  "key2": "4fKSCMQUxKaFiZq5qV9KpHCi7W3KviUGoVPfTxbhJJnCEzEjHYJYQAKfFQDGok7KWYtci7iMmQvvEBA32Ev5mWyY",
  "key3": "3qZMvRzi9EBD3rFKPzFoXTkok1Eq72gL8JV5Ai4tV3DqqkCXDvocwzEs7bayjoQiyuUTazgrEb6behQEH77WyewS",
  "key4": "3meYMPCHvjLQS1cpiJ3kxqk2PY9qsFmMP17SBdMAezpSbnTk9vN6JAmZxQjMCmCH4bLuuqRQgVe6RJ7smtgZEoVf",
  "key5": "4AvXNW6PErg5pV4sYJNGyt5Uk3BGtdZDnuivLrqEbrY7SF57p4RgwJLjaC8fqEZadMikVLJ5SP9Qo9hqtG2GBqXx",
  "key6": "2uojDt76UGU5wukNPeJ8HMsJdRevsAKw3B397CoavPZZwHpgZzpBZ9zDfWAbywCaRVTaQATmLeH25nWMAagM5uNF",
  "key7": "4vU2J5tWzvV8uPuXheVtihVtiz4A3DuDKRyXzaoFvdGSUeGh3psZGzj8k7fqBvCWJ5L41NmZB8YYTEXFFFc83hJm",
  "key8": "4xB8NvB2zfd38W11uEzgdr6sBdjpk9nLm8jdm8RVFwEunjVaeZuYmVAuA5YJv7cM4S4xciegHqqWr1113k6Qa93j",
  "key9": "43NHS3uzD46pjSkZDxzdH4RQWvxsKjwkCytooXessZN7upEibb1w9r2wixWsg7UCC6XMrMVZLUV88NBquew3fp3N",
  "key10": "42QSHoM5pgDLGWAjXse4ogoNqfaGNMAEHLtwBgmEZ8VtG35CinEMHPJTVeLR86Zr2qvihA7RxqZWY336N7GbUHCS",
  "key11": "4hJ46G6dKuTDWmMNf9zZpBtVWbmrb8MmrKBVU8TGBVctLbR15NXCemq64EbspbijanRsqQV7PD7nuFBUc1HRujgN",
  "key12": "4mmEbGpE8cr67tfP9BHRveWNN716eqjWCj1F5vVDGCNNhYm4qkqTwX6W2LWWwFPq8YQbxLzSu9kpAa3a6vvDbAkz",
  "key13": "3SoMoyyKDXEq6pwVcLCNnrgnEzNQqUtMhudAkNhTPD8CUJdB1NAZJrWYsGBqPwoLfXWEjYMJZfyRvVEDCwcLBeAo",
  "key14": "4KrNbqsAs1E2Je6Jd4odHWXWA6eMgLdfiHnh7dYT3VeDzEEFD9zcmY6iK3bPNaSobA6nuEcZbUzVqQjwPRF38A6p",
  "key15": "352SPswzh5thJETbN68vz56nzCbtoAVditYPJkJLQmUHGmtQofL9JuR9RoWabEkwGLd8pyVeaZaVmbXZSWPYD2Zz",
  "key16": "2ENxKu3GnDg5ZQrxoBX1qCTtVhkseHWNQegBXHggxNfUy7qK3Hgxb7oaP65JFFChzmaq5WxFutBmQEykCPRVGKYh",
  "key17": "4hhSEqkT94XRXaL3QNqCSnPHj9MDn1CN5d3gD7Tr5c8CHNQ5rEbMXdmAGeyc8AxWG34KgqkBu72TbFKTf13SLkQf",
  "key18": "2oYhxXKDhYdhndAipYd2Qgdqh1Q9qkdn3dFzfgmVdeFpxKLGb5yMjqt28cY87tuksT1vz5pxksn4MJU2pbdQL3vr",
  "key19": "3TEY6yaL3Z6vbbTCf5eoKxTZCAu2BHmEdCgezLgfsj2Hfs3Whj5ugYeRWyoKu36ZivsvTzqdFAFZXJpKCNURJsQX",
  "key20": "5voPmTRch8xovTGRFZCkLZYi96gRBWUS2LDPBREg13LR2e5JEkUmjCNeQqWc6K19vLAchErsK46XWjmFXHQ99S7S",
  "key21": "5BJXQ2LXwDUR8mawdLc5bAvoJwQUFsXraHwV5ot3LmK2Dy8jjKTnKafFZDfzDfoqi1HGk32h4W61JvdDxkyYzggU",
  "key22": "4fageqFjVBctzrSj3nsJz73nfjohAMC9J95jCePDPMesArkusYRfMvp1whEuWbgAVM7jA7tUyxE4ChBntM3SpdqD",
  "key23": "4v7soxqGnD1EgqFVXs3tZrbZhjGviB7jnPCZ5XVS4A3SxbHibtMEDJ8YYAt9yRxRtHjJy1E8XRe8H8WNAfxCz9ij",
  "key24": "5jrUZCaqhy4E5sECqYK5zPwsWm31bztfTSkXQ5mV496DbK6UyqYeuiti2RfHhnrWutt33mHGR7sq8sgkCe3WBy45",
  "key25": "5wB79MUz9gmZ6jtieL2LQ6vr3A2DY6WP4SRuinxvMs3mAkZB9wkuiyjc35qs9WoBmC7W2BL4ca6dshmiTcNDXZ6H",
  "key26": "5CAUvjEZ2yEaXo4nQaL7hAJvLmQNPTZMsgFD2JpDtpS4rvvGA41K9x9G9FiKTCAEff8daQNXNMd43KpQn9C5Tvu6",
  "key27": "5YUQLVEuvk9f3gA7aKsKM2ejGf31RfYnyu6SHVneyYdgDsAfJJLWbgKateekueiq9dJmC4JwMpPdw8Ro2NG2AdFU",
  "key28": "4eniaS1XLZ1GzzqF2GQahFYXBEgUd2qJNbVGSxXFBVQYGh8ALjhLSKTBsxWe9aYEzkTzNHQN659uaFQ1M6MsjMa1",
  "key29": "dZwhuGwFKLjxsCB1xKF7rus46oZKqBtEAqKmDTdWfxtAK3rhUbNG8osuzGHFmC3Ry8uFYMULEKKgD2JYoY7eTqd",
  "key30": "5BXdTD2hDmCvU6RGXd5BvBzDgiyxAHyGN8SPn9oKeSTH4FuwS3Fq4nEMjXNPW9ZYeoW1ZemWpcjtDbDoRAmzuvej",
  "key31": "1AbLv13C1AcNHQ2gC5QVosrPmQ2gVNqPBzoWBw2yVkETjgC8ugWcU86HQJq65LDfSz5eneyKnnhdCrSHqYYqzpS",
  "key32": "26r5o1w7Xc6N9advQuHVvduQpFkYQMFrpotKpeg3MtNRNtu5kqpFZV4nZXSWMqe6eJ3nEpbLRx4dCCA7d813zGgM"
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
