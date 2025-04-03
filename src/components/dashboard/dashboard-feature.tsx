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
    "XTH9eLLJf2Cpjkq8ko1TC9NAvWrXHEU2xgNzYz2npoQ2QgTEWR4Xa9vzKb4LTSE5oQjLLKqB3kHxM4dVAVFkuBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hFxvXaiXNetGKvCPnqoDakJEKbC44PCXR7St2Uq1xDiqJm9wcGgtgno1shvqBRyA5nMSqHs9g4Nb1wF1Pu1zUbA",
  "key1": "4vEpseeYBJjA1NmYvfd92h4gLsYmik8pdKSgZK1HiibEcFezHREsnffgRGTLZUNSW9EEdY47dc1ivee6J6FgQrp5",
  "key2": "5onydfEqvFUG7v2uYu8x6y1rZrsxTDz5Gogr4FazMyQBRR2GywF9ZonGKcGKLwyBhpZ4SXqFndwFdiF2igzNibXB",
  "key3": "2UvZYP84ntnXK5xvAqZSC4Xr9ZGg6Fvvwkb21nQR9yxUied7egRmyX9UJxgsPiAwqjbi6YCynognniCy9qyAf9Gr",
  "key4": "4s8Fqt6drAoMZPNzxXcwoc94r1d4p4zH4aBG2xb9iCsiVGMoSwk1V5jD53qR8eZxSJV1vTns24xDPc4jroAMXKyA",
  "key5": "RZcZPBw1JepNvD21o4ohgKYDztWm8gmJGJCbxpQtPwb8SDqAMbAPQLo3oGFptnKmbeCWjESdsmQmNKLdxBiKqfe",
  "key6": "4EN5ohPmgUDGq39QnUfW1XdCpVmDr8d7oQRHaXpjvyw9uNGBwu2EDSd6SvxCH8wqadg15zucgnvVBam5yCDRtpVQ",
  "key7": "NCb5di6xi6zMUWihXY5FfFNabmaixqcNCtNvP1GcqjDeUmwtERqc6SH7yGAxSQzXM9tbShMZvG7WUGvQ64sX4gg",
  "key8": "3TBjt7gCoLNGUVzVJyXLYfk3nmsFokRx2Lp8BE3xmrsNunNtga8J3rUAB73yfvub9L3UrUoTk6gh99zq42qSeur7",
  "key9": "PvnRNdG1G6Xi5t2HpRC3hUSU4SCr558hKwnXoDBRZvkcy5Cjqk13y2eY58ZfHLbcNdWo3TUxriaUYd829caTKdJ",
  "key10": "2nGgJ3Ljc6hpzpAZ7Uut217M2XA5MD5tmyk7rwU5raHeM7L4xtevyBLDuCVEDgpKmeTrkCsQSoVzHZ5FPWSjim8w",
  "key11": "5tN8D5WTAz1smdD4jPZgtGxsqSEFS1css2tiHHHBqtSonP8ykSqaJgc2BgJLzLXUGoggvy2QPCMBWESHvALVFZP6",
  "key12": "5oKQrUDbzTqFRCGohqtPwWMG9y8zT139xAeMUXisQe9hrdGhA4kiZNRzDrj9mNc6SkzsruSEffhkL1QR4k6a1FR4",
  "key13": "4NKwYe1zSMZP3p9fRdFGb4xC5Wk4posBbT3sNPxoWte5siUhSNpBWDdYUoGPbLn6Fk8aLuDi8MWi5ZxJySbcBAwP",
  "key14": "3yMcg59rME8WKNrmRuirzDFqwR9nb3jcRqbc2kJoHsbbu8NGqcaMs328zKL1SsGQxST3JWak6uZ3CxbJHjF5U4tp",
  "key15": "4p6KZk5zJEMZLPiww9aduWv3xK5FMogTW4M1WWXRgFECjPZq7qZC71iYprQFCaBkQBbTi8jfsKgxarYT5NEspm4E",
  "key16": "4aQPZRGUJqJXq3SXcNZPobmjoJC4qSCyobvpJTyUiRjLfgzdedkNZfC7E27ABw9xksdWyVHgbPxWzocZLbxgDtnS",
  "key17": "2tYuhvk1vGobsDFXtGKdznJNeZWb2vM7bW66LUkWCyvoujRgYoiVo112MqLtSGXcMMSzA6S2vreXyXefSmxqCmGr",
  "key18": "5rQAM7UrGzFKdJNi26eBfShKNqUQWXurkowp8FZp8s9dE4sCQTAqaWagAg7kHfHzSbFXfXLJy9kncezCQSWsorsE",
  "key19": "2PBgDPyrSeC9wvoCHuPhwivp5UcpH3y9ye2GZBzWtoKGPofKYtSCmzjTwe1rZ2sL7WGLorXsvyk2AuQpemFnBmTq",
  "key20": "26iwi5EKxVb62PQypo3YoLT6P87obUyqTUuMAH2vxVDTgG43pZwatSjnZWFDsMvuX64UTFz9RDUawRR2RqCKQZW4",
  "key21": "2JmsybW71Jn2JjauPzNTY14ev3ch8XLxEm5R5gE2e4P7cXvv2dT5wrEjsDaYBs1oc2hHsV1DsT2sXce9F5xHYv2m",
  "key22": "3sBj6gZWdvuR9hgKxowuzaskbyimjniov9ohVJez2Dfvb7djFvN1G7JGSDuB14RzptH52XCqSeZ8nwQx3ShBk38C",
  "key23": "4wQpe5FFdZTHKuSR91CCxzSWXF577QSEXU4Dqs9ViFw6TquQA3QGLKn8mBXFLjfPuQCrWfLsaQaKApkbkUDeU2Tb",
  "key24": "3SdLyjtEUR9223w7gvMVvA1crm5ZjZTEr44WmKygbq3V4yUkg2QRSAu8TPiS5AnCKy9b9XtbEbjHzmWSDQZsy3w5",
  "key25": "2NGPJgNiR6WMnmYeXt5vy63J24GbU2zSjDxq4E8yvNx8KRXWrZ9ztNwkEnbGUzxBSUUvfi4kb1pyvmAHU8RYPHGW",
  "key26": "5ZoBQTaByNyqXwbgonngSQUsYbTnnQ83cg1GRHc2ZET9nXnZ9p9yFWxzBFzvw41LqgivCQ6RouRdmwnM6QTHDLUu",
  "key27": "4yUDSJw91UsFsc2sXobQPUNubJrVFSRrxCyKeoSsVpu2fijq1NPcyP27fXNsUFEUgUuUwAWVVXSKhVa8WqPKRrE4",
  "key28": "4xRb1Bu2xw8DHESDWvMv4QJaaYLiij5FA3Vhg9Yu2BPofE6WFRu6CYzJdasxZg7XwaAUHd9HB2dZ4dNyYyBhQnae"
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
