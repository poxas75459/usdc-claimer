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
    "4qG8zmoDWfa46Fzv7A8pFCksUUnWYxdHsb3yCZnuBY8UNjuvBP9i8FNFgs715F1fCTN2Pa3uASDKoQRDVwjqt5zL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rBFFcjmF4VdcecyhZiuPP3z9JU9qb48G7TA8dhbMQFMbEUSwjnkk4NVYyyGH2bN5aXhboiJsTMU4TUaBEkk3MEZ",
  "key1": "5pFg8F7k2QLHQUD5iD9JPkSezEFjNzCdrM2eDRiCZqF37qHbJgJUSiVa7fwmNqib8PSvbC2Vy1k5i2bk1SYtxWEG",
  "key2": "xxTrBU3pFpNVMfUzwDm6YfjjGvL7hZjaxmUWCVzA5E8SPqev9AxARJU1NFZZvakkCezHCcXK2uTuc9cjRUdrCbJ",
  "key3": "3GL4m7H9htP975X8nFsNMMKHGbouNKsv343yMA2FjGZWox3EsveVUiLbHUYFzHLXHibZbpfZEmMBL2crz6KfeKtY",
  "key4": "4nbyTzTMgEZhKPtXX1iY6RqTJkkdnLMhmtcbSJhpZhU3qm43reNTy6Cb5u24tGCyJ7Z8tSLf88X6PhbWvK4tYZBf",
  "key5": "26dsu1zuoFed9PrmomFyDs5SYiPR5PrEN3WixHA418c1vcbCNWmcg69XhnCRoRFDYUZJtocJtoGYwjKGvr3nAbPR",
  "key6": "53jqWXKwGWWhnxJYvndjxKYuydcMmLHhS3YqcDRui7UAnpwcEc4kLbfGMNvqR9DNwiNGHP15nc9zkZF6S7REiNYU",
  "key7": "3JRgWxeVH9gWKsWwrLGQYD3tsaC5eEbteK5XitESt4A3dMC4PwruBexVnn6nwyR4HiqQvyi74nrseyDj7jsKUwvw",
  "key8": "4bKaMXQvFtyPmyss9QAjSrfMcL1VA4CbAE3Ee5Hjp6jrUQHoVzZUpeC7vhWB44wDuPEtmHSbuyxWY8eQX4FjMz5Z",
  "key9": "2Yc5BnYPT2vuGDcnfHf1qDwtsARC4EZ8TGRwuPQwuUt1rmxiZ6AsGuF22AR2Atfim9MA4rzNkKDe58T4BvFVx6pU",
  "key10": "2XL4P1Q21UDwmXFLoaXdSaEb2WGXmLcY8i4bd6qBH3dUpe7ZvGD8R6rK1vr9fyXMAuUK6dkGpTRJ4UdGZ4NQbuSB",
  "key11": "278EzUxvHuVoKC45apLPLYtZFkpUKoVR3MzMuFzz5PmzcXqgHV6K8hJsXyen6q5nehC12k8qWShHXSQWMiew3i5q",
  "key12": "2tHMtY4fXDSqoAufUnFS2sDtvuJZ4Ji8fRAZU4LpNiXzn3DbdvXRfDWNxyqJJCExNDRGKvfPfUnTC72XX48JjFRD",
  "key13": "qhPLdVvEMHY3ZWiT93JSf3qDdNDiEnfDVEPob84vCjQstWmStvZDymMtKfWWFLUaKgPNSxxfxo8Vn1w55xBNk57",
  "key14": "MNUCid4yxLcS21MzPQ1u2PNrwoBoJmfy3hNjezjSPYmHNHsoruSE2s6vrSRihC9Z2zzbx9kGQ2XhykFTU8Z31sN",
  "key15": "3PLMAnsY8hZjjHuwWrHRJD9N7bjAyYwE7EQWfJyyNKYvwfk6P6LY9HKWuX7xJedQxtmidP3Y5HBtX93JFj2BR52d",
  "key16": "5KbfeMYQa365Ub1aT1TehdvPahQ6MmWZgpjBmFLaWerRvXpXxxMhHReCKAUSHkGUyfNA6w2LiQE2KPwCA4rF2VMA",
  "key17": "31YEjj9uRgmaGZyUkLGQch82XU1ZrB3ij5fGpPDZoKrs9wxc7qXQSJaZUUb5TcnFniU6xRfXVJs1EeaJRki2KxHw",
  "key18": "xsqxUrk3V9vw9Lo8veCThar3DrN7Tea9sxf78wKMnKKC7BCEa5jGQQswR2qCDiSq2Jx6x9gg6DkSdm9DrvjfWBC",
  "key19": "3eUFAyTLLnt2rkBNhV21gD744GQV1YBY8YpbV6YuP3rznW1F3YZ1tMufmBTCVeunWDT1FM8QYAymz3QZCX7Yw2WK",
  "key20": "46tV7yYEKQte3UPiZogruYEcDb4o1SnUtxb5vESkMv5erkq1ktDAo8J2oW6BeLRqhUP3L54gwCcjYCKppSKkyM7L",
  "key21": "2y3KBt9B6Fe4cwJZ3BfQoPB6WdWzHsmVuduXi7X6zoMUmyRP9xKnFH17bHXb39xpN2XEojhAEPLU3RYUaXUMZ4Zq",
  "key22": "5jGhEYJhjcy7RdTNqYR6qM43UgpmdGvtrkPoLf9CuUGGzsF6gqFXxagK85NVUhGnLVVAVGwtGMfcnDCEymnmZSsm",
  "key23": "Kh5Q3yGr5nDUReVJ2u87SBmatirALJMfK2S3aU8Vy52CXeXWjnqHzRPm2AmcRcd5JtFaPgkRhUXHnMDofkRYqF3",
  "key24": "3eGy1vHvjuMR9eNUjbS74W7zs2tm8Es7tDjnHFJ3BQFHqTAZwjCD71t7d25rs7npcTyhBtq1qUzAoiY36mbCwts3",
  "key25": "CanooS7KpxSxzkcBM9dev9MoF4bbnSkwLghXVaqfyi768LM14QyVFhMWympJt1n2Vn2KaCFYDHj6bWcXP8CYwVQ",
  "key26": "4AqiWCmqm5yGrmXsAnLU8urmsgwCAmJJAyhKCiaPrEaFm1XPXeQFuroPS2ucSNee2XRg93xysejzgP7KUQ7Dt9od",
  "key27": "5SUqc5xG252xs7zYkDfwLP1jYkKdSQFSRmZZLTQaHzFZsozxaUyFrp7fAnjeZqexKo6zqnqDpcZhCtuHpbhoyiGb",
  "key28": "53LLVrNzXYmNkkLq8rJJD6gFQA85nzp467d9zGU7r68pwXBHumP8XgcNDZLscoguHCYuC577z7Yov7qvVTpG6Zgu",
  "key29": "5KAJAv4tRbT83ySahPY1UqwLEL9Pmu6YinGZ5Zo5GcCrMqar84r26tFYvhK8dfjHm7waJUCXzUfqgaPLk4gSHkMA",
  "key30": "3D3TbDbUYKZV9KYjFJxWFZB54fYL9HUDDrtqTmCUDrAXjFGD4nPrDskBmv4wbao2NneYjB5gDqxTdBq6QguHSdsN",
  "key31": "2qBaJkJ63kkXjrJhhQhvwE2D5UniSGXEFFGP9hMqjw2sp7u3n86CrPp3QmccqCA1RpixSVvGSAiB8LWMTJ4rA6T4",
  "key32": "2dwSpWh8LwWdFZP39X8rQZXSRmfJYaMLBBYZRXTWxKdpXeRDQSZxrHc8AuybZxeB7g88DVPpjd9nLteX8URNnHJ8",
  "key33": "5CBCket5AWQg54eDgvT6M8xmj5VyTf2ax1Kf4QCwkeymFSSYoAc9JE5wSYBde6ReQRsDMTDw6YnNXcf92vAv8VnB",
  "key34": "3g2DCh2cSKhHTzmyLFVt4fWy8XahcFr2wuNPbVu5hcTuZDZmRdWVUAAnUrYU5Fw6n1tUEsZ3zxqZesiV2YmTfhU7",
  "key35": "4RJzAYkpfFh132Xbc568Y7aVotuoesd5oFaw3q15CfF1ceto5aiAG1VNnBnUHng5SdPze75mB5smZbpZaSoMcCX1",
  "key36": "5maJjkPKjg2dVbHZ1mBL479aDpbacgKsufTTTs46H9M2G6cTG8NbdGzEU8FDbDkdiw28hEGa5QFXmyCNPBUm3fHw",
  "key37": "5pD4R4f9y4wsSbvdwhwBDXT4tmBLx2fUQGnycnQDv4r5eEvtNWDoKQMByS8RoMzsY2g6PGhRPMc97SGtfLwX85LS",
  "key38": "2nhJerxVX4kYHCpapM3hGfL1mJYqaTusdqRu4XJE9AYntKorqDdyN64a2ZBBSQpd9mBHSMBU8KKErbAQEbetewX4",
  "key39": "2XnMbT8AeSGXtkizXsyiQAQzHMa7eQp2Bjn88V2NSaDSm2FUaAPES8qtiNFgKd9mHfKG9SsKmtmES1hTVMnPwxuR",
  "key40": "55mhXcTCAWcbYVLiEhGAcZ1JZjjzNiTkJWx2diuZn9uxieQnepGTkCymA58ex4X5ka7uo2YG2pZUGvVEdsxxA4XR",
  "key41": "4avyDjwgSCVS4dV9buiKCYz3uRKzxCMt9XopRVj1K2KHkLBvuatTx3B5b4aJpMJJUuWiBJLFAzAZBjTNbrSu6Mbc"
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
