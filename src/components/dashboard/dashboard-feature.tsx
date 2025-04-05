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
    "4zaXFiaG9iRPFHrPsnCqqwZYPRx3wC1oJgCtZo3QMLd6e5UJdhofLJBHnCgHTDEYz2siVXwSh8A3qf8AisyBkJqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39LZ7E6sxGtfCistWQpxsGXPkMX5xrioQP6PycoquHv9hsyCRe7mhRbL6Ehq4dBwiKyBfH54CxjV6KmUvXmGPbpy",
  "key1": "2pUuoupD6s5MeL7FPtfdTMxTZGb4wQtq8yupCFJcqc7gVgeWJCmN6qaGfmUGNNRcBNfAkhLtjpQDU3ifZ6vZrJ7A",
  "key2": "3dh3FVS7J4GhWiGDCXvrm1NevvTYb5UZJw2b8jHS8NP5XsxKT4KWAGb2rZbFp4shHzKgs6bvWFq2QbTYYJeUoR3y",
  "key3": "UxQp9wbhiZo9ZQeeKa72nTUnkDuG7kTwtBCP22KAKPf2T7rHaKmprbYdz7vBdJ4ou8yRiTXkfFQp6znFJsGsBcX",
  "key4": "CjbVxsbSiJ7nXZ9v3WFfcNuh6PEqPYR34DDSXohMawu9QaA2z9zxB3f38V3G38FH5qpZ4y3zMdtgX39CTaPeuHP",
  "key5": "36ABgnyrgtP1UEFnyeZcqUz7836qxa9nU3ZYmcf3fH8MXoE4u9yvC655A1FtqUVSRocGjV3tqYb42BqJJW1GLhJk",
  "key6": "5HC3jwk5S1ewGU8p7AZpmE2LuaRuFWRQPMDfZ7mQCFGfZCL7Fuh6MktkU3cpfBXyzKoVpT9yre2BXbk3snQHSa57",
  "key7": "3PC6CaXy4DmsrXPSowZarWoXjsbAkwtcw3rV1o5KMubvTuHjC4pPt81MaL6SYGpbLRJ8pFz6dnJrYJiDej6rXXUY",
  "key8": "4XBMopQuu6uwwZVspX7zxaAf2XgQ97Jpv45d6JrS3DPvjNKegdt1CuVCBMZgH98G6jHU2mUd8wcbrBaMcTSBMDmY",
  "key9": "3byZCUWjU9n2zTxNqYvBw55zu4BJkizYTzGxHYRQb4Lzuh3CayiW6fXotLuyGTkFdgcNdpEews6z1dBwJoXawQ6C",
  "key10": "dojdoCaZJwKSdSBufAhXu9jRUd19cvxUGPp4k49PhePKXBXLj9kqfKu7CHQutQJS6MG1R5eyAxTjsUR3cvj33N3",
  "key11": "46hFnVLGEQmzyBVK4YqEnRYjhHus4X4Pk5FLrutdRZdXjKMqGN8X76iViibtoK9yCjdHKRH76gRMYxwHCnMfXiq9",
  "key12": "5v28eAVaFqSBpKtSpnrvec4tmnTCaaC3np7tsvFgYmRNycA9HuSDC9HP6sMUwBsnVMaix2D77twRXSXo4prv3AbL",
  "key13": "37PLCpkS17ku3UMimA497fN9sgfzVPZse3hdRRJobPS1u1MmM8MDoCjSYp6x99WXJfB1FgsDGoqAoeJcE9rkWCuC",
  "key14": "GXjVrKxzuKDW3gqDRwFSMWpvXWiby1wzwxH39JKALFiBhaHDFpfttRaUiDnCEdRcMPGvzXGAdNFqopL2aHK68nF",
  "key15": "3D4d2s7VTZh62WLN2kef5sX7Dsab7GrsGRv2aZD2GRNtQxid5pydvcRxwow9nmLk9oP2esvpHJzc2fLXrWfCwH2x",
  "key16": "2HtbQsCCfYFFQ7TSpLiuEe6LHQe6qrwi9H8miG7FHf6cuCE51MMMTjdEXhUNrwAdEtocxJyDas5xZXetWUEnZN1X",
  "key17": "KEFaiTbDFodg1Q2NNjMRo5YM1sLPTCq8jScwcVjwWv5QqSBns4toKYB2LR34jQVQWM4o2u5aQVHADZA41gQ7M45",
  "key18": "2U6vSvAbTwb5RLuzynEatNRrsWDNwoNzNvagPSurcU8somRFfGufzG4i9DjJYqEE35vvJU5vSJmVtvXF7FckFNGw",
  "key19": "3EM4nf3kT9w41vhpirJ69FW4pqHyW45QVWS7FDWqmji4mLa3opcSLSXo1CHLNxoLhUiM7aRjhgXfNrB4p62QRATR",
  "key20": "AwwyrB3miRik69VPibLSku7mcB8YKvya5H2gFn7pK6D1j3oBGXWXmWYDnz2TcVmpNbvqjSsRWRx9LiL8ghpaVGY",
  "key21": "3x3zzAquKUdwyb62eJT1ovLCzxEjKeQNViVMRtatoHkUxMYwuFLm1GYwGFsG4hh48dKJ4BCUgsPKCWfNqaim9ppg",
  "key22": "5zUr8cL45w59jg87MoTLtJhCdwFtwar5u2FGHfoZvyvaRTtMxSyLtVMyE9XMcT1PwMUJtTUaW8gbm8DZ1piVBMAP",
  "key23": "4WJWGsANckJLdow4bW7BLMGSnGpoz4UdYRwAQ71Mq1gxCywuLKXwqJXWdfp1uU11bQo7jUPEnCMb7WLnHJdXhU7T",
  "key24": "yL1J3zprrC6x7iXGMxYgShqLUqKWKshrYdA4Qqit9C4oJb9E9bkNrDWBVxBEVwzygBh2s2VzuyWtoR7ina9emHC",
  "key25": "4N1PSZC3e7GeZ3aPF5oXJ9wrxb4HjuipzSrt7jwo9Dk4tqbw4NktPdKTEoa7c3mbqgJxfcMPUoqEgaqgWhNmcz5b",
  "key26": "3qQEbBTMZKEfhgfvrs6UAFkJ55cdvnWJdjvFpBHdTLR6qiqEsRXHDM6pKvAvxR3SAHJUjB8YXAfREmF8EmN6oZpP",
  "key27": "2XgNbq64RA3LKgXB2NdN7u4aB4Y1c1LZuTvqNGPGHjD2ogySbYYr86dYfEB2mjJ99Zz2mqt4dBBZKHEJkxQZoTw6",
  "key28": "5rC8QZKRUxsfZCEv7ys6LKLiV7o53x4jPeJUvYFqSjF2f2hBGVE95A2uVXdWymGqPU8W7x23yCj4dgPNPyh3NrEF",
  "key29": "2bKXRsxjkeujgAGpecmiRrEv87q6dD3aFdgkN5VAnRf1ncWFa5Dz59d8tQ8ffTWFU5qFaFyMPbReYUYmTCn2QDKp",
  "key30": "3nw8jd4on68jYvEzsYSrKcKURjoqLqPxDoFXpPw9YnTU3Y3FCj7ey1tbuX8YXCUM9fsLc9ncJhkXcLF171S1wYBG",
  "key31": "HZMfDhjdJ8xM6ceSwFobCv7Yc88vBYu7MUz1a9B3F2THpkJLEqDKinSovnx7r2eaxpMtd6yh4SB35FE4GbHJC9k",
  "key32": "cYQvAz9KWuvxaAuDun3ti9GuN8PLhENFXfrnwFSvaXbMhp9myt5SYNYdDSCoS614qnSH3diKGe9HCFjL7VisVSK",
  "key33": "2iiFHvEZXphm9YuAbpUCNWzUyYWAqQPUC7WhzqZtEmQfDP6rqMrqvj3G9Hv5QjMczcHMw7N3RnWjyM9dtWh3VcEe",
  "key34": "2oWE7zJcBAqGGrJJTCWwaAb3TKjKmJHYW1kj7dZ3Gu798sFyw73pVs4dJx6SrcGNSkZBsVx87Vr9jugxf37v1og4"
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
