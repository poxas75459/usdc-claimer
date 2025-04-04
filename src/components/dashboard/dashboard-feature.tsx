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
    "ZX9APtGzuHPKpt32cTdWQpy4x7cmqkFPbcg4LeHaLL9i2tHRF7F7WJnpZuf3y4mGuYR1jC9hkhdfb1KL1U6oPkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oc8tiego2FHGYDZPxYtYdLNQ2DCodfLzgqCeS2z1icauVwq83RkwTWNUHMfbVhJfHg6eMJBBM8N9jdUJHsozVbW",
  "key1": "59F95YTmqDf9uDuSUmXVDYMYM1YwZgnbMJgM6RGwy1kU3W2zDKzUYv1RtcKDRY1Fq7gvFtP8Y2BTeooDnNZn198m",
  "key2": "3VjxGgJwBQ5P8JddqeW16sUHzddwuAvYL9V21wjbKwcUjTri9F7K57Nwypy27zVtcAG3Rob1GM5cLhUjRk5M37pZ",
  "key3": "5GYk93hmhcbEqJQNhznYUBfB3mnbADRKdh7aawiNnPtS9b8LPgw9d4wA28rgiURm9TjXafBEFvNSc9VUzFAsYDoD",
  "key4": "t35q2pVMm5i1o358mHB57CUw9fWWtzo6vjVouVd7c4cP3P29oSTyXtWZndzRQYywnYNNPdjhvUJip7ozv63n3Kv",
  "key5": "5ArxnCrU2ymnoYB9VoBmbm2cRwxRpa3NnD4ivhf1kEmdoMjYGSfUtpQ97pH82kxEETErM3U4tyYeY5WdmdixsMV1",
  "key6": "2PFCqE8FnUqeGANZYhcTiBVT9XRfbs8M99Wtm3NxDJkvNEd6DsrSz6EQKuAUZt5KX2fjhNvdZ1Sx5Mtg2S6jfNNg",
  "key7": "RGBSBUUyM2wZv8MAwVm5QMAKvmZL59muS6fDovykj5SP8qW7aP6Mxk7Gxb5pSw9zYewNWQqS8YH3zGcjxyEWqCn",
  "key8": "5e8AbPbb2uRTjC4uuVrZCypfjcsjbwGpqmizS4oBoYgv3zrnKDZeJ1o8Ww4J3kDjtjTjPqEerYwEKzFBA8wQXNao",
  "key9": "35byUGTLx7mB2EXrez9g5e7W8SJqfstbes9cEdhT2AaQdZKRrRHHudSBRjuv9duD9g7gyYAeLDTFF1xDHR839JpQ",
  "key10": "62cW5EiKsq5UGyyCUYhnCyWRLMYmkDQS35pfCgeWR8Gw63zZiu9492fnH5qvDSDB1JmhD9PdKWDnNsAgfzdxfuCr",
  "key11": "4V224DwyrM8XL1cqLqGDMko89PZYZAq8b1W3oCcGDyoFTmx8p4vbdGZpKJn1siFzuLKNtCY61DyL2MC3eeYyjQ5G",
  "key12": "31aMUXnmAAFRUxv1KE3hMqEZiR26eABUX2CDbucoReUHxEL2bcA3F7XfT3KyJFQ8NN2Wf3MGd8MDciwHnoRxVaUH",
  "key13": "49tJuRnWoJ916wUGWBLgESkqMwbitRi7n21kW63DjsC78E7464c7Ea5MrypJtdLh1otYLAxZJK9tn1bBXWgmCSNH",
  "key14": "5ZihTFg3EWHaz4updGhoYHX7XFmQ5uAtViYzeAMF7Hb94KavWYGooFyHu5ymVDxSJWd6ys6ZeBAqzPSfvAZ7BsgG",
  "key15": "5i81zUgstyBPJ7xmixsb6724abK1Uv2Vt28HBtruPgpRgnjdgftG5RWbyonScyCRp4JN9WYw41dky9c2ULvgaups",
  "key16": "54g4eH2udmdgzxr4e1sPivh64Ap3YWZeFytTr9rMMcSXU3jDrUR4fPHemtvtu2nPaMSEcB5FUYbjZUKS5kVaqHXh",
  "key17": "LieAUWyBqhFm3QiPkJZk2EYZ5Y9XwXfZJiUADir2E1CrowK92iWRReqrQNDoHtudqcqduNG9VQZFjCeGqyxAmX7",
  "key18": "vQi5HxRKp41nB8EARiRS3f8ofXckJq7iNpv9KqbYPwrtA5bioXbKYL3s9fUqhhbfbCezJPiLH1wJRzEkWBquB9Q",
  "key19": "34hSRYVAvkEh5aDf1aAwtHvHmBoiUgvUh4JoyGSNZQcpx1YceSBtjMc8E1JAT6eixPFdx7UcRGHdULRpat2Pi4nW",
  "key20": "3pMhfDU2F85DuLgjCoVvsrF4EQBvQcNyv1wubbgCYtjyvfr9vNFEp4wN9gCrc9zLXFYVVoJdmgrjvHcGVAHPgwXe",
  "key21": "2QBLFHu7kZerVabBJKviuqjtEvFBxiCWxEnbYKnF6EWc3P4YHL4za18ST9LGZrQFE2CrDkZSk4tz1UxaJTmG9mnH",
  "key22": "3FpNftpBVgpxfVzPSwcjYwFZv3yHEU4CABBQpPXEaDmEaL6kwkXYifDMMQnF3KmtdQDs45hMdKkfxaeQaKnkzApb",
  "key23": "o1JbkfNqmhJbKnZTCtkipNQ4eUzibAxvK8ZDtx8ZRswPzt9Mq17F5CrH23mEv8E35HQ5YmMC6iENSUvZYnoN31y",
  "key24": "5Y7i2bMmYY6wP6Q4ZkVzD6WSHt88LMR5ECsux7DKAWMUFFoYb2uVDfEZnTsgL3rQonhuxiYTZG8hk8Y4mmmjKTmn",
  "key25": "61sFBBToUsGtZjUoBH7nTDjtWMcVpNMFMKvprYikUqDNKdkNLYzaGcMJQFDXUMMDG4tSDtXz97eF2yN9EhvE5zr7",
  "key26": "2JNHJW4SoZSf4XdGC7ChcB27oHcLNv9sneoq4QawzyzrDXwRy9hcMqMDSCZS9Bd6tgmC1vKFeL2DqPq48MTpvj2Z",
  "key27": "JtMdGD2QwNfe7QMDXai9oqCesqoCHACRGnFxWEscvrTwKY8wEez13QCEV7ZHwXvh77rRVsot3SA38UY5uCvQ94L",
  "key28": "2nQ3uV1DT3gosyX1KzWupd6jS9uwGn9cqyuwt35uhCL3M4UzqgvkNT2jMwoAbUQeoH81B5HWsX9p9bsE9XhK2S4Y",
  "key29": "31hUG75jccu5BjiNS3j5x6Ju8fRrPY3Hkis1epu97nVAiW6MTmYAJfcmUL6HAo829jWbb2NASmQJFkkV3aB2jX6r",
  "key30": "1qaNZ722orzUvoJ64VUL84f2NkZy83txS5jPgMq3bYF98KdGUtJZgZ1K6oVv1gs3rYGEcFLPD1M8NF3rb2MewxG",
  "key31": "2jt9NDft2XBWmzvZzQPXB4opBSWx6d7ygaerAwW1ZJjDMHLH41rGMi7mU7Pxi7omEMpGgP3yU2utcCcFULNnsjcm",
  "key32": "5m2MWCwwo7ynd48CkYwQMNG2qF71NCjT8GagX2e4dbSkLJkjgiQUvuESdNX7w5CEM2QGBWQkkprpzqkFZNTfb58L",
  "key33": "5Wn9F78MwJHQHBCSr1NGhopxbQRAmrHqLKy3cM6cJYLDTvWK6oAkH9kPSJhAXwLcmz1FKA4jqkLYDv6QkaiSuzXs",
  "key34": "3ssZyGJrGJhsLerAQ1VUUNXou5hug5r5qa6X7QnpEaWg3ZQ8kiRmMWyQXicbcfsejRxBzKXKQfF2t3sEmiwSrCGE",
  "key35": "3QHE1rq2ggpomoDXR6SJANdgfdKNjmbaSD1rJREXWsteF3ymcKa2kUNrthLjZ5S37Lu5zfuKPDoQE1kFo7dzWU6t",
  "key36": "4N2NFq3dmNdt1inXKGa7dgMCtdFTMe4XxHN4DHTAqKdQi7gVmna67YmncUGxPQhSrq8GRRdwFqeMDWAo2aimaNet",
  "key37": "3omj3gcoLSo8Y6oAJxP2wMXGrRLxyGCEHxBQvNi6mA22Jd1LXrJTMJ8GyRVg36984rGDo2LEJWxso2v8Xi86ANis",
  "key38": "4URjrVZ1obMCdFR2eVuB76PNLbuoKLDfHw5cnEQSHVankAerzbyAxb2R9Uu7kuVXCeHsHiMJy8pPj1Wh7MvryUtU",
  "key39": "55ZWPPRKme1qNiHYuNL71xkr1UegXEPQMMWYWZpEHKmaHCE13cWfmxuTMqPrDYuBHYsG9pQs3EadSju9QQGoQtmL",
  "key40": "4kTgynFrRj9Npgs2886gL7ZQZRBpY344LzUjwQJCWbAcHx3euk86Gt8scVXQYGtSa5pwUKc6vH7K5UDibvZZShuw",
  "key41": "7JEQnmGDr2fVD2hNoUjE3ZthTLgQKmPcTfJERQcrRgzwkqKLTAjZNi1oapBPaWYmzqdvcCXqLoEwN4W7DANzMPD"
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
