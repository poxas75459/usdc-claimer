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
    "3cEMpkYCaEeaJdXkKu1HHDuj5bbNWGLJXc9qyccn4fxyjUHYEixKxqqdZXyeJqSXQcM8555rLtdyaPPZeDJvR7Du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DDDt9WaqYApD5e6X1bc7JGktR2MhQZBehzczXg8mXTkVRBpj5MQHEFkGpozo4Yvh9qARevbCg8cG1V2t2qd5GuB",
  "key1": "5sMC3yjeMZFiGqAjPg7E8xbfVGc6dqNyqhmKdcuzqEcJMxmHQn5q1wyQbBxpu9E1diip6tTuJv9EiL35Zgu9wdUg",
  "key2": "2FNDUN4yiNVq52ihcR8GZh6nz5W5HCWHNHKWw54trT4jcEQ9S44mgXS1GgExNF4tE33dioVWKQX6W8xM3JM1fpGt",
  "key3": "5uzDxK1m5qiPAoyj8piUWLd9idqfm8gEd6YSCFRQzXxZ588xvVPmYWPdFMJQ1nimPMA6ycM6jym6UDmFps7VfebQ",
  "key4": "3gjDwKQ89hK7evxssi6jQMGBZbXeaMJCUuxiBTgeW6MM2Z5EHjCtPEyDSToJNbP9JhR6bu2fWKGX8VzJWv1G9b3s",
  "key5": "2yEokc9vydh5AcX5nFBNc55RUdkkwqeJwCsjKcbjLbMbxcT6ZpX68peyr65MCSzazkVNhdPdSidQRTr9j4SX7GAP",
  "key6": "4R88XhxKr3ZbxAhZSzz5YAzSmXQkGAXb4zMYw7QnQGq5yZHQJHVhk95qAon6VN9NKcXpfGybotdqDLSLJBSfa4p3",
  "key7": "4BSjP7MRrfRQMWSaNQUF2V4ns4y7NS6irHuZSnGi2BUKBrroWnbaoyYjW4Rw4cXo4FiYR4NzJRXYWZpx6RQjGmXW",
  "key8": "3VtVEb81BjPo6h6M4Zowpak1ZQcpmiMBnEhxCXs3BoKeTiX32DKUG7y8vvctFgwsmdW2dXrJH5EPN8XnBC6C6Uzt",
  "key9": "3wmRtqiitTzvQK1ZHzbBXz5VXCk7y5GLx7hupNhJhXQTMTR7RvA83eo7CfmnJ33JA36CQLAaRm4J1R7khAR2TTyT",
  "key10": "33Tn37mgVRTfs1muB2jT1pww5te8C8iAJ8uMoKYkCmR8TkNVNis1iW8422bPSiBVv8iQBw1NfQeQEAzsPrSVr6PT",
  "key11": "3EPztpUnqeaC6fyZezQTbxgvv5XA3AZuby314FKN4dZVSjLVDZTaGN1rgn5u77xPQhDrQoz16ZPCr9oi7bKoeBNK",
  "key12": "2ejD1o2z6xaexSUrZZqYgnneipeLRTUeJ3XYttArYgSnQVBJqDYop2k57rs5J5vx4X8jPrcpDCzhSYTyKbdNFisF",
  "key13": "52QAMaZNnBU88kS3RgBgioaNsP9eBzEbsWBjZLSJAZf7YdQ516GnQDp5kKimK1JUeUbjtJqwdb95kaqnkSAgvwRb",
  "key14": "HWYxiJbTKxwTUM3LCVtBTVkVRK5Eb19anxZyAbFBHzBRhp4yVm3kiDprsDDyQBjo1Us69aHX6De1CLppTRfzsDq",
  "key15": "3qV2Aqyay2ri9uiq2PFxRZMyAafCvxdJLJYePasaiZ2cpYbRdjCbJDVYaJZRPdi17DR5PbGEdmAvdYMjcnkVyyWb",
  "key16": "4yF6c8ucPaGNhBV4CH6XwKU3zinCeB6kZhnNwjJjYhtbFGFJyGvz6ThxpZCy3G9cRh8q2pUGL9TATUdewhxe3iR7",
  "key17": "3QkUTtPbok66fESydDrzderAJrDRNy99jcToDY3UJVkYxff9FMD1X8t13dfKco7RJxVYJb6zwi5nVXfN3TPfaZpt",
  "key18": "3kpH5hhqweUvTDScTsEj7iKWWBJZk2DoargFVB4kp1BSfRZwUWKavkQ6S5KgUeX9axgiruCTcz1anY2qJs3Zas1u",
  "key19": "34DA3So6YPcGwdW4NUo39cW12ghPYVYHvcWo8aZvEhsZg6nKvGJdWZG1UpF48MV2ivXW3cfE6Nz19NzMtdK6FJSD",
  "key20": "2N4E39pLSee9jk5tDWtBzPn46dLwqXdYF1UYhU5Zu97umqojTiqM8sY625xGem4MXPxVBqnucdV9D39AXVEZQkkd",
  "key21": "5AKSHGfLVfD38KG8bnMQ2EKMuve2qY67QfVswVSQweeFbfWispDtQc8uo4X1vecLepvCVfvqjtpwXbkKbDJY3WEk",
  "key22": "4fCi1DirUEZosa2eB6W2zq9jrbFXE6oUFxjpeSHX6ku29MKddnzUy7zwHd4GKAT4EmN43Xx2ZK1TPD8FCkf6pyWk",
  "key23": "7mCHpBZEgdv9e18HzHPfGZJeC68dNdr5nYrdJ55wUPSPSPfQak8BjB6YFUKrKseyx3Ztke5rHdxRuiyi6JEbs7W",
  "key24": "3g96KVHaX1WEKe3Px9pCUWt7kYf6WmbwFxE7yB2YFHZLxDG5wmk9SgFon5SBaMaa5SbjbfvKVBTw6gCTEBNjGNiZ",
  "key25": "438XB856nC9LDTzT77y1pGL6oearjRhzXDwchaVjmer5ghgHmZ8oNim4HvHcqv9k5ofHzmopWoPaNKhbPnB2Qr1G",
  "key26": "5abD8wznPETYp7bAthv2GsC2xiEkPf6kTZyS1qPjwL279oE9tfpVs26TZDgo5Ajox4L7BXupzKABcGtFxKG28uXa",
  "key27": "5A4NKgrjREsmGuQZnuhhKHiJUv6P4EN9DVWfMrzG6bJMjMtuefuudXk22UqTBZgU9xQbFdpax3ZoYkAh9K6xdR4d",
  "key28": "2qWJSKjTshMMd8QKNEFYr24aSSHW9anwBqQmjxcwZb5Cx8dQCMf4TmTC5CwhcEcceWHp9VzY5VKrs7riRWv6VnYb",
  "key29": "92uExZLhMMiZ1qyers54yqszKZycsQyiYQRuZL3xYH924PLvf5dBj7hwsDKSKvD8u1Tdc683sjxGJRM9R7rg91P",
  "key30": "4Uk47d6aG3pDrE6RXgV9k9S4v5oibZvV1hHST1CigbFUaK4C4DbWXd4zjywnXsTCVC9XrHeXSyUGA3WwmhTVS4gZ",
  "key31": "r6k3vficm45hKCa1hyyVkVAE48ydtbgp6u2iDxTRu6jiGAtA6RgspSVXbd6gAGA6kvrhe4R5KgpC6S3FFy5K6RM",
  "key32": "4CmgYj6dZmMh6Qhh3svNwZ93CtXZPdJSENLbdzSs6MQ5CUZBPXyvgDHbTe1PieYGKpyLL7Y2Ww5AFvxtoQY2YBMo",
  "key33": "59dKw95t6pDz1A8JTMSrSD1ykyceQo78G3ZrCNP8YFT2vk1CRXHVaf7j4Pwnt6uf1G5nMGjCkLZUUCZCLMqx8CKR",
  "key34": "Hyq7kgpiy3iADBzKnCjoNNdbn4rD9T5NCTAeDADir1p1zenog4r7McaxbkjVoebFuBu9D8yb8c66DdVg2bBBVnK",
  "key35": "5LQPkPi1Mrae7rMvxZikMPVQuB2KER31xNkkjc22RbUdBRFxHnNQ1riykwbAWy62Mnm5hLcrZNXvT4DG5wUA9d5a",
  "key36": "cnd8xXmmsaM9D4yfM9okT7vioFxbWBnxAtbVXL8t5Bb7ySLvLFB6d5ot5CE7BUaKQPF58tPYnHbw5uYpyvwyovd",
  "key37": "3eMHSUUmh4y1FEu5TvdmyD2pwgTi32dRVyM6Fr4bdhuwPBXL62tDiuGTuza8hougqGdC3c9qJgeNCariZJXjK66f",
  "key38": "4z49BXoNiZUkb67oj1Erdp3782oRam9gXQkyn4QzzxZQpwSpdtAxZgTe69CZ1siX6DFRSkXMPjxk6AtKju6Fsa15",
  "key39": "3SS36SF41TkMvQDDFzqXXeobJURvrxUawsVxt7dL14vja2qUcbCmU7DNUpTwEK7fcoEDNcT5h89Z3zhKYKSKck6W"
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
