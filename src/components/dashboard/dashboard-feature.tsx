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
    "4UxJMZmL3d1vjW4xouHhcJhEZFHzwnedXArZMap8g23fR71fhHfk9qNAGXGGmfN7UjwqCS27WiJqVkybXBLJWzDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tRy49do2YZ13GfmfHdhEG7MhbpPGSEhn3kZpXmHkb1mN7cD3GvCDxgoys7iA4W6q1RFt6PPcWEgQdfZJULBJyMH",
  "key1": "fwYdtApXrfJ4J3Zp8G28LdxPjfPpRD2QQkbJpKD6AF6PdFFmAAVYx3fResspkpa4rNVXdbZjKx8HDhndBU8iwuh",
  "key2": "4mZB7ECvPuD78JeC9bTrVt5bXctH8EMrVXoqJNXrxppzGPU6gjPbXgvJBzpAx3iaopyUZTbpQN8nKyhsprq7ArsH",
  "key3": "2w2Pgw4e6fSkaxePvchgnijw4Jy66T6Fte8Kun9yXdKhzn53AJzGQcNXYmNN7f2a3Pb1pZ5NVebsMCaozaaMd2Cd",
  "key4": "38vySsbXm7C4bgqpp4k7PY9dMrD9g6rG4RSPCnKy1E1t5vUdXGVzKk5ttBBUZJ2s37ZrTr2sKNDMa5e7MYKNJL27",
  "key5": "4Ybz64z3DNPGSSDN4AqLB6DYx6DNinRvdcWse4Yq6J1sHi1K1yeMUstjxSvNvK6iPyaxGVHDmin7pr7QXbmyBV7D",
  "key6": "3f9DtNQCAQLkBMANrouR7kZ99wcL6zsU1CV2SMyMT3cUiGQMjBrUkpnCuHRcuCBVW7gZ4VrbA1TfY5HXiJEni4sG",
  "key7": "3GMakApAwof24QzP4bpUeHFwPnw83fPLZb6Yes7xXUjBxLMg3es94eYho8oMP7299C4RqDwv1y6ntzCapKbxnsE5",
  "key8": "2ddmeUN8mDpibxXH8euTvsvR9EJESbzHBH8AFiDvdKa2A7H6PPbR7rKi9ZRNE2Awz5sUmnirqWZdbvDhNYXBZJhF",
  "key9": "Pf6UHJAfU5rVh7vuymGS3ZG3SADmznT37pGmPFjaRoJN1vhXrQHCtGaaVuCzhcfq9va9BgQQPGQT7CrNWu9mpiT",
  "key10": "5MnFXqcWcxF9hs7GFGmMdsyShFzz39tonUXaSnaGD3L3cp4LGQ31DjdcNeNPoYBkGxWKAA7SCeJZvHxpc693rehW",
  "key11": "378MJbiJj7zBt3dEuTfDdC3rn4vCatN9v1wAbcf2bXeGnjHZWcWwDjDbmzpSQyBo83LwBjPadEJ4BRdZYnv1epYN",
  "key12": "5qcYvh2PjzjJn5LCvA1kffaxZahbtF88qzWCv4asVB795i7Dq1x4CQ8KeQVSnZsJMrXaYfYTwmkvtmBkHNhSCUXf",
  "key13": "54gLKDTKx8c4epFLrWbgrqVU2mfAqBntkK7Rg8obHKSzj26KQCJEYt2mkywsvz76NSDgESaFyFhgTWPBF9tW4TUT",
  "key14": "n2zrcuSSUZAr52yHXxmGejk2v6mFrxnFJCkx42eHtKKL2nZnJ26iUCNJP3YchUXdGXPk8rPuBkBeH5wTyruDu9i",
  "key15": "49wtd8st9kSm4aCEfBsNAo62pxHQJdDZ4KMCJixtqGQeAHZieVxsD1e4TV25xHaNdQyYxoc37JktFmFK9q42gNmz",
  "key16": "5bJYnsg3fkNADte5YVS5hxD1EpuqNbxhofmzrTm1yzkzdtBp2crLFd6qr5zEGFbSMDtePCrZ4LD89Vh5c7xwKANk",
  "key17": "2MgwaNEMTbzTXHaf8PcZxyJTpnKwJDtX7Mi2qbnvLh3Q3GgxFpsrZapMN9xQoDcGWEkTjYpwkujek3SqWiYCycLc",
  "key18": "gPbd35vJzCxcPghqkhDeJtyCoEjGA8hrNuxw8J3i4DuNvokcDZFk4SWNi9iMR35szQvpkQzaP71gBkmuT2eWmPj",
  "key19": "5AGNDmPbcVaauAE7ms4wkcuppQpddecuvURGRoWDmS3waimvdhuVZCbf3nSWKpwkGStSo9wPSbG4qt6yFMf45wGt",
  "key20": "4KUcemimHbRbtr3VV5RfUNgbaZyrnAqZuawRC4pd9XmLWanDT2VC8adpLwMrYQ98nigXai1cV7pwS79b6jfwp7hz",
  "key21": "2MHfxLKvSF8EfH4DrsgWdbCVuBTx37kXu3v6vbiNJq763StthuH8UMwHgynCtoCKfczcTgutYHdAUSrUfKFSfGMg",
  "key22": "xrR61Gz1mqBtNFhWssmKeUt58KqDC8gNupQyYqY71XfzrjY5s8PWpySjmzBd6YpRityhFSnJtwWmbKmHzgsGTrJ",
  "key23": "cPrd37ajEDPEMJbboKJ912yLrbigkQYhe5KAuWVUKEqB1AmcdgSAqxo7FnLnBjm38dS39C3QgNEE6q3Cgrd6Xgg",
  "key24": "4j7kzkB3oNCkoAsmo3tGyzfTTV2sQJ2yBNvLTa1zDPcDxLEkVcJqq2HaBggTqZJgy8iK1M163aWmfQTJEEvFKaC5",
  "key25": "3Q5ZLR73T9EVsjgjXx5y4Ptbmr8oGh4dWGJjVi14JoaaczpmsCvc1pxwUMp2SgBFLn7FcN5b5oEDvCcniPUiiwzV",
  "key26": "2SnKsSvk3MuyV9gSSm28bDyQz2xstiBytgaaTqMH6boazMbXAhud5ZzpJh5tfe2kitVkxngLk4d3wHFGejWk6GJY",
  "key27": "2Bw8jBMNK3mZTMaXAs99ty3z5a2u84mJr7A9XfjdH2r7r6vDQVu7Sy9joMP5ZwFHMVhUZyuygyPb7Qp66hPGjZTv",
  "key28": "5m2nz9mx4kqs5PizxasdBCUAD7tLLq8yUowcxzdoh1XChDMDgFiV1LikRsLHLqajDJvb426jtJp15ER9V8pnRS5",
  "key29": "4Y5ky24dL6VSL8JLfp6pxJCUPjTe64w97JL6jRT84zb8o5b9zm7Jjdqz42UojFTLkxgD7kQCLbYZBYnSXQAwdWn5",
  "key30": "C1NeVovuwhmszjj5Bj99bSesdFUVB1mFLh4NqrJ2SPTUg4F1LhEMq9pnaohMk1JripyvcRVheahyoGJz52ep91B",
  "key31": "1yGhHZnnXw9BvSEFbESTqXdGTScGhLmbPbbiPxvKEyxBkpHEhLR5Yh8MBnEcV8LsJ4R2QLuKsULPWN21B8qjujq",
  "key32": "3sYpRAkUkBx73bAW6NFcKW6QDtyVX62q6PnPPwdzkabqikZRmZmEc9zxB4JjeRVKcmNG1y1hQaKXZi4gN1CvTw9M",
  "key33": "MhLtHBKRFH8XK9xGs3YZsd723AoABKVhsvXsY2AjxNV2j7AoQeJYupuoTvX1zimTQDRke58cyWEg7G1Kg6zFqxr"
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
