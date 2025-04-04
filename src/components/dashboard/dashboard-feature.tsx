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
    "4mbaF5G4uaqcRnwdNXFRLTwoHD35LBZXc9E8hua8hy8Pfii8jGwUM8haH8kH839KuSqHRz1dRz1pZ5oWwmqZMpXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bnDEhbFLrmy5W4e2L2vqKKiE86AHKp5QQVSvymZNfdiNnswouULUSE9rqyLqGvbrHtiLjSEH3R2jy7m97A9yZAF",
  "key1": "5yh4yVc48cYdpNNMjxfghmyjDJNr9RSFhDCGEPY5N5s3jgNPwev76bmP6uNPddrp7mmsVGfxbRTSAmguWEdcSt3",
  "key2": "4PNqz8ckaLHrbvtHh8AmusLWpGCJkG8EgK2i2MvtnVorE3YfPCb8yHeL9boxcdXErAeXDto2revQWDHEY4f3QiKp",
  "key3": "3MS57AAvPJM15ibRXk1recRxz9binTEZGssSyCxe9VrCYTQog85d4ZcuYqxwaoh6WBb47Bw4tNW3pCj93ew3hcyd",
  "key4": "2BV513sq9NWYTaXFU2swdKwAy2tDPuiBVTZshx8gNm84NDRY8bqu88vyGozn1omafC1a4qHN3ecqrchSnopqqbS5",
  "key5": "2Zh2RViTpVyFVynqRqMWmahUvkbQvGAK9P2XQnr87tbg7bNddupD7739Bi5wS1L5gF881A9FsJEYNRzKahYzrSBd",
  "key6": "2rvZ26rsNi6pn6ituxtvs36iBPPKwHvg4CV4LmP6drhiZhAeDx6SqZ9xTBFY7fcrZ2HdfLERdawqLFSxXhFyWD58",
  "key7": "3JoEvHKRUtd6NXqwu9Xw35uE296dwgwAnDxJjFozzW7TH7ovH2WDG2QEwj6d2Xap1WYpb4XAxsLn3BBKAv38kq3T",
  "key8": "23EG98qJLmtZ5PSZsKMg77KaAcUmEK4dsN1twH1weB8FfbbSF9YGVWKDRWNN4VJQJdoHcg23PSmcHUChP6VxrNzC",
  "key9": "RPXaWCFPyV5tb29aCdhuwq8S8uCW13hrPe1cvhohiitRX1kFeyXNbU8SFspQeSWKB9hhfEaUDEYyZx9rtvWEtjR",
  "key10": "icLoNkRsbpjiVpjeVLP1A453FvUS74zMWdLrnuKBPPMPrJfTA47azeqLfCB5YVuH23UktZM9yjLuUR9wfkRQU4d",
  "key11": "5uZka5eMpwiN8ygK4dsoKhkMmW3PFSyPDfyzbPFhqknnZgyKqrgDdexooQd254eDoy5VBebDXmAkNesJVZMCqdx",
  "key12": "2HTPrwQYT3ezAxBuMwSuPVLy7xxeGTwHHBRxtiUyLQHWGmUMnBosLsu8B1rfM4xHg83WM7ZXVZb5mx2Z8GGRHj2f",
  "key13": "4KnwB8rQFBgmuhu83ZYU1ePA5XtXovF77Ye22qGC7o5nnMFmZ6Zshtdf7jnCNx1ze7TA4QVwNHP4XK4FWVJ9xnsJ",
  "key14": "ab7j3gLxjGJZ9Yzv8V7gMi8wRfMxs4QqibyWtcZo2qs7fMart1Rgy9wSNyixnvLvaGkW2nXMaMTRZS6kazR7ZfC",
  "key15": "4Tkt6ESsspEmVth6Qac8Ebx2Ln7zntfNs99Ap3BWh2vahrCGfNd6JXEsraRHDfZGY9qN9GMNBacof2pu6HLVGeoG",
  "key16": "235MfJZg5pL2JwUHJJWodQeNanUguSXUfg2wnkW4bfYhhiXndA36QFqrkcfSrBcgJT6nqCuJYqbiAjbEaMdVQ7DG",
  "key17": "3ZZFLLfdhNht5hzsUU6ffCdw1KB8DJGsoWPCgAT6GFqdgpmRuJE1PfRfp1ZQSryLR2Y9v1yrkMiAtHC2mNB3T5VW",
  "key18": "WvDs8A9aT5b13nemij5qfR9UtXweSsH7k8B7sqbQsPgPtzLJRssxD8TB9m5wQyZupHihJmFf2btyzM9JjJw5qH4",
  "key19": "44tPh1LAfxVB6ZW6gsDs8V3eocBzneKCLQoYcecA6hTKDyZHHYiHb4opcD2Gta1eqJT91d3yrD364JLKqzX2A16V",
  "key20": "5GXaFZCmLhoq1pCNTNRch4DHhGZpfFMuwA7YkB66UgF7vP3maSbqhiUWG6qqxTwrvmf5rt4jVbu3S4fDihyrErjd",
  "key21": "4FTQkktzeLaUVF2xbWjLAFeRaSgKY4gJMb2sejkqCska7vybx3zcnAXoXL1G5Upc8o9iWdyndQbwgUwj2MtgvXri",
  "key22": "5PH3xRieUijAC8QeFvfsTukgY71kFVUbpExvg8juY2RJZLF85fiEXnsouK3YA4ewbcMGwwnpnyzgysbD4N5hR9eC",
  "key23": "2b5iDqUsMzYyVuk1kXSxgod3knBbo5u95ZgytLSbfZ4Ngvxu9hgNCGueEaFs51r8PLDV9i6hAdooXoMWDCvYBgfG",
  "key24": "5Vek84gY2pnLLekhnuX9XoQdthoJLuwwMx7i7RhEt84tD3UpZL5LUZcqLYdgpLmsB2irVmtQpeXwAFtBD7WUbNzB",
  "key25": "43srmTHEVdFSYuK2rHy4AtrrCw8xZJbTtfiZWyg1HgKmjqojnsZR4TstS399WWnd4twwx2VyMZQEdqxgLQaK7kLU",
  "key26": "42UFt3WWwBS2rD8fosbBNmi9TxypbEtXrbRGHpcSU7695T2Fz5Zq9bvP8s6ZyqCLLipx2VTvP48vhRcfQpeLjXp6",
  "key27": "3pYmxMY1p6E5QWfEHTBnytEWNZY23ZZHtpKB94NPnDi2VZuKkTZkquMYkmaqksbfxDGgaJzgmK47unMuM6eZF4vK",
  "key28": "2x6V6ePAMZEpfeSamXHeS7eu96j1iLMYz1Z7P19SdY2uQKbLYyN1eAc6RWvsjWWdTCqrSW3GPxDdLmKTt4WaaiUw",
  "key29": "3PaB2v2xJTQKhm24Q3Z93fzyNVMAfVSTTDs51p6VV93xa93QVVeLHWDf9dcxLytzzrnmwD2wbgkN7uamHV96QdWv",
  "key30": "7brNoTUQHw3m2k6dm6x4Q9T6jgqmPpvG7w96N6Mv6aFhTqmVvi32Q6RdNFLHxpPuG91bDyZUswZmcJE1eEq5Vc5",
  "key31": "2fCFpuLVi6eu1H95yZuJf4WNEWKT33MdTBJoJXmLkuNSroZe1nfjQgNateYVUDNobruQx34CrgYa9LVmFC3BraaM",
  "key32": "V3u5oz68NBoyQkgzbiwBBFxbdocgKdBd4vuhqjcj975hS17kexQ225CZRwxsuXb5vu71SLzKULKBWRg5NgC7Q55",
  "key33": "3ZWZSHVkA2DYdBzbZfAbTCbSW6RW1XssQNwVs9qYdcpRuFbW8kyp6tuezYQoMNSzgqiiVWUESRtuhH5rZFDeYvRD",
  "key34": "63T5pABbBaWfoR2GMpqTLcz8e5g6fCyUAC86LiY5bg5RwZ6z4UfpVSyepDWU947WXeyztDv25KPv97ZbAoUbM21X",
  "key35": "5nJJYSZxMHwXruH9duVAHmeonpKaBFEGAiUbEsAWinCC3s1ZbjTRjC6bd9MnsHEsSDW3oEY3Cs11QSe5pzmBnR5g",
  "key36": "56UL8axSVjzxj1QgCEDQtjQWZfttBX8GdGdGFskiJjg8H8LRgWDA6J33FFYJZNre971zoDpDvoykHWT4hNgEJYmM",
  "key37": "ZYhw9SE8sZttL6aQMKPVPRmes6jnn3x7Nd32ssTqiwaRERQhaxKnZGtyDL1JBkjyGNedV8A7x3wdaMcxCNhCEPR",
  "key38": "Qxw5PbZPhEwAAQTKSjdLGWqttVcpb9FikcSMeAuowiSbqRyGunkDVShpGqmRGbqU1TKgFEVfHuzct5FsN926saS",
  "key39": "5NejHY54XpuiF8fe8ntwcPXnEHDkbXXzrg9WDr6pgmbByRkWkW1CKS3fX2dYeH89QEEz9KmVzTw6gFYqQwz5Gds5",
  "key40": "EGW1sVWLuE7u3eKbyPUs5bAFLRb77HehhwTWHKsTTrsGENr96rSyiUGB9vSwahGAQiyuWxHZDa8JKXidJK7RTcG"
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
