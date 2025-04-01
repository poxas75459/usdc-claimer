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
    "MZPTMAfrUoQcp1ejQKbqGRUkwf6uS21MFtFHCBXGCLhcBkxpuEs27HoFifTdXcPUuZEkXNFAbsHD4ChHWcmxnCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PRm74GPwT68vMZ4Z9ZNh7YL4aCB62gu9DPkQ3T2PBsBpSebT2ecLMQPLuKbaSX4oaZ93PXgytKmRjrG4htZxWir",
  "key1": "4XxGnrvuDqwoQqfcXHFweeV6gDbu53pHeLt79VGyfqHJ3DArPTGdvm5JDPzgZqCjMYBTi3CtNcpTb6rJhNhQJL2n",
  "key2": "4FcuLj3NkafST48ui1bFVM7ThQ2HErZB8yLNXxTaGy6MDHgoenGd6ggfw9RAoss9BqKQ6Zbgze1smvGTGeKNajUR",
  "key3": "MgQSh3rsVnri3e1vFT4MUHnKpknqcMGMx3YpijTGGihmkDJC9yFwQ3SayGt5jy4bS3xBdFt9yepfFZyPg6iDygu",
  "key4": "2bejRxj4WPgfLqjYioGMBZBFXiiKNgWhzhiGLnBvvQiAX3zPf6tyYmEASeQaCEbGQHcmvxmribF7yfQJmUF8WmjZ",
  "key5": "3VpANfixo6Wj5HXmG4U2YwjGouB3LHqre3dPGT5i9tYS2iTiaG8HhBdAZUinSPQxmzNANc7sTShKK7bgLX2tJnHT",
  "key6": "2tTQTzhF2uqUqeSoV1f8LTjTx1pcCtTkwEu5eRiLrhTC5b1XkQCeEBpXzEG1rrjXaQq4aUSYeoq1bKS8P4kzfB9w",
  "key7": "3GyrgcM1yZRN4jnDpnRt1yr4b6jembE4W8wCTTU2NuG4ofpCRu2iBqciQU4svNvg3aRGXyCYJEVYGDozEXsnudQD",
  "key8": "HQ6xpKhRWAV6Wc1uCNG5rpRaeWDXCLzMWQFD1Gto4wayCTbxFCwpYXrbFUZQeGVGcNtqjopzc7sG8XMueoCTfLN",
  "key9": "LwSp3vjfHE3eNbnUotLJ42qY2tVu58ctQCDYj2oyUZoJj75yUwNqBDK37bMqTDP9ZiGontSK9ut6z9oWZg1wcW9",
  "key10": "4Fvs9prwB4bF15QyKEAXdw6v2LRnLntYSDjZqXodwWEcZg8RNqsMnr9CgwcaBdh7GRfw6pUdDdsW5M1KKgLGAuff",
  "key11": "2mbAg8K1jGvbEABbrvThNKWUc1NaK2jAaDLVt5vzpLXqKJMS7LASZyRRVMwbNx5K8TYAn2M6PVBVnSZdYzRmdr7r",
  "key12": "2C1S8gCNyVZ8TFbZMBuiyvh9S7auz5NUreVJDs85DpcxSb88Swe6KEhFc62P3qMgC7vSDRmvyqcvGmsJyRvQAR8D",
  "key13": "2uK2pzJh1sZajfsGGa1vxSvwLfFuwyxgZanLafoF7EhUgSGsN8CkU74SfzwQnWrriCaxGrERKCSMkSicr7furMPj",
  "key14": "fmguFAxFgXoe2n5vNt3m6PUTckbHkUQwyp5uLq43sR1USZfcM9Yc9sTbSwHJjKCogvVwYiMnSyNBPHeyv1ck7bP",
  "key15": "2jvLd2Zm63GQz4cGzFjGxa4AYTXK3PVcxV7NTusHCAc6ajoyutKiEkWQfEjSoWg7JDAcqsrJP5ncbFYxuUuwEUjR",
  "key16": "5PLnmaVKk51DBee8m1A6nmFXjgtV6EceJwGRUHtp4EpJYMRexrgDkibdADP7kGuePisVYsbHc2hiKD8TznybPkET",
  "key17": "3KYvkWE3fPypd2W3mgLBZVWb5QTuDJQU1Lf7BcVYY6rHpP9So3FY5Yr73MHqJYGmUSvxUwUEQNnvKSmiEs8AAjB9",
  "key18": "5GmvBiXMBhXoBkvSqCf1amACAD1MQwS2KEc8D5bUj8yEZw36eqTh4McEDXa6ZC49qeJyzZxM7zF4RVfadUAKExf",
  "key19": "2oexnbnAd9j4Rk6t9jrhVcRsU56gYhE9GE93eg1GfmVj1xUn7mem1R8cAJUtXdRDDeyZBNDSMtYnU6avh1MNZ4rW",
  "key20": "41EZUwRzZZMjaZwWDuSBUnChhn5CXBSRG6sCd73DRJWctKoTNFtGcGW4ScrDw7ymq2WztEKjFoXCRdtHD322JGnU",
  "key21": "5Lgio4yphvPqM1R9odKBLJ9svqTpWuwP5B7NTpLKfg3SLZiz2kxu7EnzpwUdeT2pYyhqZo26vzD6fPD8K7LowsVB",
  "key22": "4RauyG7BBUS2zVrkPfVZGXDPdbTVCHvSmMF4QMNt2z9YkoF8kdtUwnRnzsf1w4NB9KRcJMGT1wnE67U1bw9wAfuy",
  "key23": "3twXkRoFoGo3gaR8NoEc5Ca4NM7SnfYHabhPwBWWRcM1CzhDzeRHZYQdVe1dwX34yeE4NLxgcePurYsv8j7stUAo",
  "key24": "51Wn3H1SvGL5Z6fo8SAi8NMMG7MTHMvKQfhsiqtrYd6JUnb6jdodMhxkvUCxEpzkshPaVn9FrNyfkbJBEY3vq7Nn",
  "key25": "3EYafNcJo9w4sF4jo7DtF8otJAc3fMyz2BcVM1FYJFNs3fZYbLFz6dZgnNfasphruP38kTN8QQ119hbSVGHjyCCr",
  "key26": "4wnycBN9Bn9KWQJgrFm8ViJ4zU4JNTJmyc3raDMwkR3ZdVigaEuvckeiaz4gRF6t8j4hAjKGwDto3CVSgxcrjGbX",
  "key27": "m2x88UDLJ5pZsRTUnowsN74PdR9gz9GoUZjVefiGJYEsVQcDWhp78K2ctdEZ3HnjNSbXYVcUYLQDzaVSvNoUCs7",
  "key28": "2PTuWk51qqL5jPdKT3kVtVF7URzbFmjRchgoVr1PxzmtLZwTf3FNWUBrizFx17EZRVYwadhgPxpJEBTuFiZZ4nSi",
  "key29": "h5r3fa3oHce13ZCdYNX8ABKzQizGBE83FGcGnH61gLr3Cv96WSuSTjvvNgEvze7W9JAWiVdm7BdQ5UrRyMdN2tX",
  "key30": "557YqPtUjKjrwVdh1L9VdxgaqaUhJD4wj8NCFoGSQUH5kSmkdywA8qK9P1zv3mqTFrjsKQthBpd7P44Z47yMRGwe",
  "key31": "4fBaJh91vV7aLPYcx3UaFY6QRFj22QPYNfwDCh5o5gJMZsdt9EqADcUf8zTxr2NrzLp2Rq9hcYnjLoT8JnBPLt51",
  "key32": "34ye1r3kAcD14jJQDwAnsE9DbuEaXhu2hSHKZoTwRSHMxBMNkxxLceLGvhrESQQTi4FTygNmE3XHfRw4yifJFpGi",
  "key33": "5ev6qTr4hz9WcEDnVvuYvjxjA9BGw4RBnim3WoEDAinJyrKCDvVYEenXUwTPZScuVvkpaSAArBjH51yL6QtFXwfS",
  "key34": "4RtYRg4wfiLLAYAGp7b6uuNoMRXnbxHsCLWZjRSYLoPVy9qDQrS9upFftzLfoCLTRwneH9jtHCvSTLUNajr3NbNb",
  "key35": "2LqnwxQnydm4oqqp92Z1Epe8GTRF7t3L1GTjdVSCBSmm3XuRoH5EjCU2vvt4x35cVRWQPi24Uzq3TfVDFcQNENeK",
  "key36": "o66UWEj6K5837jvrA4ZjZ9vAxH4AWd5VWBYDsLVAFVfirio63MhCnQwbXy6e3Y1are3RWBJL8hNUhVLDCH5GdsM",
  "key37": "2EW6yzrGp2DstcXskLUbXupTrVPamAWS2vLzns4QknuWwjmJzFuJNpfE17GVXjTAN4DjK2iuwwN2rWgvjiXTzahM",
  "key38": "5nZxqu1QxGBEejWzCFmeyKfjhVRU8vhjBV6P67prX83Nbd36H4DX2FdqXDYqxXVLJ7sz3sj26vCdECKpV76K3Aiq",
  "key39": "547KUqy4eiXQKVFvruixX6FSCZEUtzyeF88jTuEjF4ZbANrtiZVTbrLiPM9NVxaHpLihCvox9oPcan7j3Hw9kgDw",
  "key40": "4Pt6kXXF7MRuuxyaSHzkhgqYwgE7YHZBCJNeZRHKE34KksUCXmRDQ2cVwsxonA8b1NHCrZRyFS69ZU5hhbeJjhee",
  "key41": "5jgTjX2gCbwECMrDjqwpcYSe94LBswgta4REPMup7NU2uZQ9s6qCtYFXQWoTQDLJNRMm8FqRzFUZEyfGr96ySdPv",
  "key42": "5FwaUvDZxQ1HcJcu5uMJ1Hwi5tiGXSfmYeJHnMzRsL4prjt3iBWSiXTTLHF5N2W82UgfimfpA8t6hFtaPRXkQV8F",
  "key43": "4J1zX1MbGCxY8uH6qWu5NQi8Fk47rRgh4Wvrnu4H2zYDmnpGHAbnQzfrLTuSzJ7YY2MYr9M8iJh4JKe8Q6ukFFtM",
  "key44": "27Yvdym66h9Y2EYZkKHUvbJeAAAGrRwKFvWKvCLya6h7HPgppdp6K1i251g7EogY6rddvvWptnQcFT24E9bkJPo2"
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
