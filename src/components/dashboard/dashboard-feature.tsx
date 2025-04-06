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
    "5ofPCXp6fzmAidLq3ewdKQ2VsF2u4pq8pYtcirAqdLpbJ6ST9DRhtqqW8PytsKxeMTFTPyXu1xFuCCnFepR4GGzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VHAaH3492UKxWH8Qad8MzAmeDNhDSDRGgNm5kovVHJEG6hpBRWEBnQCrUKbjVaxmzMAiHSqtm9G3FohaEMsv4cv",
  "key1": "2bmFeNkj74a5ZxE8n5FB8FcyYMFMAh9MisexpDgGHEfrMyCJBSo1k3RYCfShabpaczMcUisbhR7q62Ti91EXJ2Q5",
  "key2": "4JHejT1fyfNXJcxPqe4T8xEMiEN7kG1tfvXEZNzmeG88ntYBbCXbU9ZBtcdEecxyycK1m8WVvu9PbNZYuyQXZSBq",
  "key3": "oaWV2TEuFzXcFiuzKSjKR5kX38EwTYE9T8kz8xKtTVzf1fShkP6EntmUXURtpR2FZ95oNAjzKziVGposXPQLEUA",
  "key4": "2HLZe5LLGUFTEtGw7QXxmZXFbxPTPTixCUAh6au6W8krLP3NvqExdNCKchmNCGED15g8uYc8TDDiQR5hNMjzmizP",
  "key5": "oGeLgy1N7nyxAajBagPG12mLNaffsoKNqKKA1TMZaxHYcd5dvja1ywgDrk9YWDUD8SAWgg37dqq7xRiz76Gmck2",
  "key6": "59zU98bf4xeBWbsU5a45HsVxPZzVkqfqwLsdKSms5yNjAriHczDkjPbeRoUNsjPuND8TbnbeGtL9fPMQ426U6AFR",
  "key7": "3AfAZPQaWhhd8YTfLmp4e2ni5ofqxzGgtZLFUK8qtEfACo884yKNAXv9PKJBcZ45WJMZPutJjvGvn2DQo387vctf",
  "key8": "3AHxaS5R9fES4xLR1yStRrf6UhGsR8jNaT2h8JqtGzPHnf7tqyyEB3t2dbaq1y7yRu4W91GG3B9oxuUqwaEGH52c",
  "key9": "2aqZAYY1NosvMmVLzRjGNgEkt2nXqDmrGAu4DfVspfKUzb4LXyP92dpcZJrtmakq8dH9r3FSN6HRoJMEMf3AATS3",
  "key10": "4A1vWgG58FcWMM88PdfmmUYLP9j6i6g7n1pG9HuX6nnaUEoRodt1WvMnkyzX9WWEqNJq2uAt3gdK6JugehPDpPNC",
  "key11": "2MrwhLAyECgHSeMDS7yS4JJvNRYodyd7GQ9TyHU59n1cfY4JK7sruDR624FaSknSndA4Ve1NdGNazyECoMtY8XSL",
  "key12": "47CaKzP7D4FLWwFNcaGPBGXmc9nrH72gxB7cVHAaW3JTG1EuD8zjfpZBgjGMijbfs5yoJouRSWaj995Adw4xv1Hd",
  "key13": "TqYJJbv4UjzQois6SpP7yzWhR2Lvp8qmgf3kn96rVgbhpypRU2bMETeN5pBWxiTyGPSmeYcXuBG5VKNwPpWtWHQ",
  "key14": "QSSnm3s23qNiNpkBCp7rWetsEfDw8Hk2Wy4hax3GZxiVeaMp1PupDEs8k2fqYeHofux86YMFVmNyQZ1RKhPvCuj",
  "key15": "3soorzL9nTEo6xCmJW3DZHhtF5aXRu9pabHt6QsfLzQM9HHmPhWHuFdEbQPByVCR8pZzHVNKfQtdu9XkDJrSFpXr",
  "key16": "3c6krekFiHUfuXeVze3Wz5eYvzB3ZWcpKUbbrjRcbbVGozC8akoeNTCWD5mit9eVWkmEGGhtYiQLkuS44oWE33JW",
  "key17": "5wqNMTLSk1keCjXm3SvrJ6V33DKykwFoQSh3aUj8g8PPk1XXJvad9gSXmDLAifVTfTpMnfi29UzN5i8Rqoty8JgK",
  "key18": "3ZCZVTwMjpS37f3BnoE2438q2WKpdPYLw21aECcVUd8qVhp1dcUPDND9jFjHGf2iCiP93HxJ2P7ZoaQRYARNQGN",
  "key19": "4wDe9ufX1HAdbidD3gASTHjxA4Xx5hDiKp9kNzi4b6dkmKCEYCQ2ozrXMSts1nzmp15rpfLg5SPKD2jbF6k5cXmg",
  "key20": "35dKeYWvk94Enwp2uxtdRXm7bGoebhx5EaquAPnaH9CpiY4Afo6ziD5YiWvxWEsUCPsdwJwMprTW56YR7JeHJMbV",
  "key21": "62DWti6R7pM8hxjNtWSF3XLhhhgBi6MKbFGbWK6HggSpw2s5RwTEqoDWykPv99GD19KfrGRWosJgwjrUYSob4K1m",
  "key22": "5Z1YtNFdoKsP3mpVuGKCnAJ7brQC1NRw7g56aLEAgTFTBbGjLEb7i4Nb6FHSZMPSnFTVHvKUYVFTMiA6MHRiEVN6",
  "key23": "4NJLiB8JvcEzzW4zZteFr4kLN7ZVA6AnLGitXkbvm98WYMxDDGu5Zks1Reu7mHKJkLPEaCL3C8bu4rQoBYsBwPyP",
  "key24": "5XnpcA22JCpZUMgtszZPpyN8PD4kyg6iAxBbHvMMxZAAKQtf5LAYQzsUALDnrGojQ14d84upd4gxkKQ9jLJk8LZL",
  "key25": "3TggfsHA6gfLFkoGgyxBcb5caDQ2mseGeYRryAZHLBoGaLFqBLX8RN97Fh2UWQgU1ygTswaxFey2jGsjNwyjp6Qa",
  "key26": "4aCKQjffxzrCA5hq3mDarqx5nAYwvCb6isYdXnTtZ6XhiBZhJsYUv4pe4jXPLtw2Tb1YKdv4L24Hm1AE3FM8Cmch",
  "key27": "zuVB4uSJRLj24tNyUunLuW3RPzjadbBfVcqbkFRHxsp8UQrjQpysycjUbQSvqjuytTJJudhjvwBPsmeirnXrdVY",
  "key28": "2HtErh2NVQafZR9qGZCuQQDNst7vEcCgnyRZGokrqw5f3a5cLjdkjwUrjF7MdJm7pCXdFPzdTHVGc6EKLvtmzHqb",
  "key29": "5fEW3etMGaVD2EjTRWLiw9PL7ZTeNqCxoYm5Q9pst8MQEh68NDhEuUKcjYcNXR7KhR8omr46MGadhRnr4gEsZwpY",
  "key30": "5gPAJoaCzWJWgUwH8RRt7eDLfQZ9AehJZdNn9YghJQSNvdLizHDvZnDzBWbsbQ8ZaQGbmHtXKHRs78HLLUKzzTEe",
  "key31": "2Dm8MKYwqUW166pxmXTfZGEow51F3NsX5V47uThAC7nVzetiBknyRSFNoeFhWfijsEhBBXxkShbswihZSBhqMGev",
  "key32": "2JeSA6yhgddmaUmf9ZTRURdakKxECqzAGHBsPwgJK4ENAqXHD65teAQVjob7vae1ggmsU5Py6b7vZnh7exyxgXHS",
  "key33": "3NaryJ3GDwxRCFwpSPsvGmW2hinCumYjNSCTKRwrNcMcdYt5diYKsGMiQVrAwKKLjtQjLeR8VRHoocBsqk6zonpj"
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
