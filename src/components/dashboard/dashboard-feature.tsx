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
    "2EnvuvqeJcMoEwJdojBSCfh2f163UwizL94w7ZZsJWXz6ArbiifuyuWgAFGjHz1N3PKcBq1JZUp3DwgHVrteMS1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JYaaTyGoheZguGj93BDaymv3Sxnw5TqdUhkFRXiNrahzeeGPu33q5VdoKNsn77mhuQpf92oeycyzewzUarLhWki",
  "key1": "5MWBnRE5nGi6YxZ298kv2t9Jdiay6Xjf8mofRj9n41urYJSgANne72gG7Mopzd1r9EYsLfZUSNENQV1tUXHLWcNf",
  "key2": "5QNBSqTgEBbPHshAZbngHW2VCr9e5adFR8JPSh7t8ASALMxr4MsCzJChG3vNu4zRqTewUHYNqg4e6XZAEfZB1Mp4",
  "key3": "3hViADuwDgZCE15Hbr7CpWRnH2iDCj3w9iWrW9ZwrZdbi7mise1xyXj6sj5dSjnpPiVB75xdZoG6yYWQ9VruM22u",
  "key4": "43tj1vMY7dZuCnxVBhC7CxG9CyWCxU61WuUYbafCfG7VUK7DA2EGEkKSCDWqGQHvrvhsYEyWgUAWotNJmbk9mtA",
  "key5": "k3YJsy3Drev75G2gheJGZhdXb8TGUDRNy86ZsdKRR1PQXE5s5rJgFFDwib1PDBsTVLKEZGgLy2kNi8BbxdtEqcH",
  "key6": "2dAQpezNAVRh3PW3HFCPTSoeZ7bJuF9n3LwL5qKfRgqsBFHDdwyFXxYMwbnAVK2ZzVCn9PpRzhcGg9j74M6MxpLR",
  "key7": "5mUmZTfepyfrukk6jUeUk921vJQH7dAdyyKYyL7EEwyJYdtAkQ6tYjDVZYTvVLJWgHbJUtRo6DMfKMMGSLew7pwT",
  "key8": "2NiXKqN5DwTfoa6EMLVa31UPAJp2ag4AZfxUqRR1doA4gFQaZzuLRnwL6GatxBXkzaRbHqKf5nfvk7VtURv9J1Qj",
  "key9": "2FKqkh5PnFyXJGiHhAcGtx3sMkdnvnKXZQmoQXmLmkLY2EKu9AWS5DxeRjM99z3q4oPrZW1iCU2ty6sWMXfZZRAR",
  "key10": "4szGZxJfMRc1LtY7riR4o8PioKeyeTHaq5xe1WsEuYodTzprbfrX9FHvZzw1ANSDxY3h3LP7FZcpB1ynXMyGTWM1",
  "key11": "3YSBoGe8ciFK1V3WZcpai9rgLemNSoBqNUmUaqJuSpAjtDRSrvZsv3Z74W4vFawqr6rnf82CraPqvmNQ5FVS6ggG",
  "key12": "5CEbBxLTZUrLDuMMZHD5pD5qJH4T5yz2bJwaxaC32wXwYK5sd7K7qJ8iWN5CmgKbmJnxodhoUkWJ5aMs9SvetoeL",
  "key13": "2dG3mfBkugS98nsrR1oDgm9zFDKfpwbs3ABNFhfeiPaq6WzbBNaKv21x6Yrz5h4yiL9DgAaJz5g1oRxXkB2sMA7p",
  "key14": "5SdtMd58UkvcusBomcSfxxNBn9dt2QKTxpA6K4tuNvtZh2QfmLof9wtapRcJjjUXWd4j98G4ApwhQPozd4LZ5Z43",
  "key15": "3hLoBvvvN75BQRP2iz6yGCuDHoU8R3Z1gqChy2RE1FvDcp55LDFyb8Dg5nTEaSDbAA5xhmowSzZNpVsFbR4U1VUf",
  "key16": "5FEuCyW5qmoQs1UbfW7vagGop8e2rP9wVCYizSUw4VNVv4YKgQKhvqHR7SFL4zGcSqroapdreXyCvh64QhqoxxWC",
  "key17": "sydgjp3kxeYpqEB6EkjmcWrMqHmYEC6R9UMgmihGyBAE1gstdySsv6kqY7dPRBmWcPtP2VaWM7vqsmxyNZo284s",
  "key18": "629K18WM5VxEwrTjgyFAMdP2Ly1BEmvQcQWnQ76XDFDgT5M7FqqbahduVCkMPHuhSJyTLeEiWYUsiVYnZ2EeScS7",
  "key19": "4kvUjvS2H5RXXx11AT5u8GFawqPR9rkNnpk7VUSiq9exz8FjGnKCMSVAtEd1CTnxcDGXPmLh6jWbeTq7o1npqhgk",
  "key20": "3Rry7yv2HT5CHjd9EFM8aNtaF8yjCot8GpK6tzoCXqKhQV69W31DxzoyH8wbM7WiwKmHzrx4gnwiwhLTs9R7pdLf",
  "key21": "2J7gjThg9w7yakiBnER7y9ghicBTP2JGEdVye5Gyd4zQNAemqmrY8VvqaQLzixSdi63UAAu1yFtuL962fJH1TEBi",
  "key22": "51V4fPcDtkpS7mRvD9xXQ7ENj5txg2aiJj5qsFMLJok3yusXzx57qmAyXB7X6S8xeKGbz85rxfgqcBAxseya32ez",
  "key23": "44kTgrhmVUfBBjgLGUm8TDXHdbD8QsxNhPTvV2neS8JKvcZ7FUpX6mSXxDXZ4MPW5in4wKpqC6Vx6rGhNu2tFpcs",
  "key24": "5oahh1oevxTDYyGwBj8XthTSBPp6XAiFMYV3WGP7MKBh4WAkufjnGZKaW2vTBQHYfr7ozskMqGGUxSriHQTVFsRo",
  "key25": "BxoCPo3ukAuaX9V5USdphNoifTph8jmjZUkf4m2K4ddBwnCKQNhDEmiVQzJXgTYmN7v9GaZdTbnBuFMpbnaM9pS",
  "key26": "4jMAfm4xFesqXiPjGcQaYFNBNmYMwHSirGi1m4obQaRVxkt2KyiuWFcVZ2Ja8HEqefrHPA5NR3SDGc57xZzP8Svx",
  "key27": "3E1dejT2hhdKwPUSP4Zby1DaXgWiFzu5dAjQrzqjRsp2pkcX8uAbK5ntpUr4jYAWywdPQ6WNCZHxEdxDUizohxZv",
  "key28": "42eZm924257nsBAqb45z6LnL3txCgczaQZKEHzm39Urfa3nZ46xwV79LQWKnLbd9DiZxdX6BEcMWNoiANXmDgCCV"
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
