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
    "3mPF3cJBpmLZEWaabDjkzzHHs5QkUvSqUJ6nYfiGFqDB6SBRa4QaBQSd7zxGy4cQgmmRTdxikaAVxBdmogWvk31y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yLYnXkWFZeaY8w5sPsJACuR7T3jGQbCnfmiF19ngr8KXzqhNxLW1gtXDXfXKW1rnkBuUKjpjMeYCaQz4Csc7CLx",
  "key1": "xMMjb5VaNjGMqy7sTT23uYFYdWGwzMRpsao7JuKfeNxGKcGC5mU36dhtTRLMCNip6ixXTTPhe2xmnT5EvM5xdyJ",
  "key2": "2paDHTBeTT1Pytspgy5Fq1TSgLakSAfqc1prEt2fJo1ae5vFiqdbg6cubDyu5BPqmC8jU8PXCtPUEtCwg69YvpoB",
  "key3": "H8TsYX8EyptTfFngtDNB4S1F3ZQ6GVqG67bnNodL627pbep4FbYvyBjaYp61Cy58gq44DCQmcUjWLvcHJf3BBZE",
  "key4": "schBuMQtFLWqfXSG9GAgj3thx3Y7WErmusyibS19WQmMCTjGApSo6BZwEsXzVXDn71HxWGxgiZJPri4Zf7adNu3",
  "key5": "2N7oTvF4AWjbEHnAqQ6wP9yKrrv4HxPYpB2tvrqkPAJCEKQ1EnkiGzLnn58Fs7YLGuqFWGnXppFkvTWZVe4wUHFH",
  "key6": "diXHfvEWUd3p7qNndw6Pj39xRGX16k4nau8vP581woC4PLrySefeNnBzp418hrUj74z3vFMnR5M6MMzZbBLw5Wc",
  "key7": "2WuZLvtb4irwqH1gnqac5Cs2EPLD7ih9EWG6qZAsWsvENLyn8sukBzM4PnWvcpWgELr9ygfP7MVT7SwDuQTumsR8",
  "key8": "2wJXrW2U1jyS4zjFsG7ciMPh3NHaprQdUYb61bsupbURpFdYJZiK9diY3ND52CQdwMyKrpoBdZXzmKtWqtxqtdnw",
  "key9": "X5MCc2U48PWcqfBiAFYoms75sNFo6CycoHcwoZmhGLK469syH3u8vDYRfyECW1EaLr3B8xx1TBKBMvegVaFGQ8e",
  "key10": "5y6H1tEacZSXfezn76p76vYDdA3m5K771sUuwtzPXZBYFoK7iT8DZQieehCUTqj6XiCeBxuphsvqoz4oEC2wdmDB",
  "key11": "5GizDwbNnYR8E6k1NKGNejegA6uxLr12iDUySTv5yUz2pQsAdXoPSzjEKPWujyLBJdwcgTJmXpfrY6kE2mXJHMZB",
  "key12": "sQ71HhLcRjGVzniCG9f6iXyoDeiKSqzCLHBu4h8fvGPwVuKpPwjseTqizKWbvWvRvRKgL7rrFfpQT7M5SkSTqZB",
  "key13": "5sQPCKRWFF5BzhzDrR4KeFCo3AxDeTk6zVBvt9paeaV2dR4gbfeCjBRV3TkJB4wrwLkiPBxVbVWvfgwb6C4ZvEpJ",
  "key14": "4Cetkv4PqgNsMx9TKh5Bt2K3zMjZ5A2QGuJVhes2cZ6qW7cY3aDLV3fiDKjuFkSuGR2M5uAM2UebeXZ3ehBBeAGc",
  "key15": "4n2xfEKiL2Q5MbhQmfGDZDmr5n7uWDhZFNQDgoTzYnUMCvgJZQh7KKwLEBVkC1TGaWnBCnruQuj4yE6u8fbpcgx6",
  "key16": "2fV19KGzTTvwt66ZMTANd3TzVcF1gzoYdFGej3HsQ9YWWkE3DADbpx3SPg6QfouzCyPfdm6Kquw9bghnamaJDn6o",
  "key17": "33Z1EJaRBCc7gEJpBcW5ZW8fWbPDJmGKiMKLZK8StcxLFMMHc64yfNfrHALTNR9GJErye1vQchC28SrJ114qncG1",
  "key18": "5eL2rAXWVDJnPmLLjdkaDSQx2rTFoUuip2yQtJDvQhMGHaVgqmU7ZWHcVjh2Q4y4USsGAY1thUdv1FB3KZoTQRvQ",
  "key19": "34MQkEEXCyxi6KwTeiLuNryid2cG2wBTNpwXiPq1N9kTJoQ8oxEvfU7cdn5GnVD2DC6QCnze8XRAhKsyAjCfmiHe",
  "key20": "5fcHyoyGdnsUVUxFrXdronqjXMPy4E8f8tPQUPvgJ6GQ6mu8xD4yWur1XG6QJFx1FHMgEFjCz73JDWAJfk3RrxSg",
  "key21": "435cTCkdJinB8X4TL7myaEM68ezX5FJFweGRvurSJpVRCEJo3hh3MNvFob4hfCwE9ymZujo1pFGbu7avPwkVxcTN",
  "key22": "3r76eMYEuTC5mM6q12Xaf4wwHf8AiZeRUKug3goezaVnLCm7AXFadpLJ9tEyGfb9gam4yhfGKtKAwFHJpocC2BPZ",
  "key23": "2vCpiyMYR2dKuYVPsHdRbyEAoxRDE9M8R1yrCHRp8drNYqD2UQA7WQYQLoDvSmJ5URgef5ux9VV98RKstN5d7eTH",
  "key24": "5qLEmkA3QeCp4QbvQAWrd3QkkcT3kXgvPQdguVkYx7toAihNeHYtU6iiShVqZGyPyVffEM6AWSKbbbrjcF9uoocm",
  "key25": "k1KjT9bh6zgNVB8D77oGRSUYEbUbA7j5X9FwfxLySYhTNGqpA2GT1JkaDnKJqJHB2eMo372AHaZ7nMVBJGnaj5Q",
  "key26": "2fjSjvoPKseeKuYwmHBpgNCcJVugzjfSb3SQ7Xa6xxNvM6srCukgSYaqgEc1jpi1dmNHMG6MxMnhDsTKxrkU5fZ9",
  "key27": "61CHTTYSssCF9yZMGY96c9ee1BbexrYcp6uFrsyKkxW3mxVqDC9TKJwGoUvd1xgR3uRW5aj1gkJavBYf15UK9JLT"
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
