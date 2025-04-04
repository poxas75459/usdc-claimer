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
    "2YiyNYKy97HF4TaRqrjSvUQPKwFbHLrYMhWKXAseFi8ic3jaE9j8AxSRGL97NtBFjhGFP9WXHtKN5Tkw5mnW1P49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "628sbwkqCbksBfpW2Mc1JpDL7DhbCLsb2dWQJqjWV22PiAqZVAdzK1YKpmqJt6bs2GSGk3uwjkb2EsT8MeDqqc8Q",
  "key1": "5cFPcCmCDnMmDa78ma55LiFhtjUqZADzVNP6K7gJvkgk2CQ8L5ibiuXJXyyF11WEeFARBJbpZXyaXyXvkMtgeKvw",
  "key2": "3AsV6MHAjQnRQBAJPbopkcj6Z7eH6tx611Vd7cXi9NxAjyZ6a4SSVucML7rAf6kRFgzny3uBfvzzZNEGr4rzmiv5",
  "key3": "3TKYtmVGoizmf3n5dtK1FWRy9h2KTaHzdwVXVi5u4z4FUgzLxD4NnuEpNjDGvMPuQ5axb1veuC8k8MLrTCu7Wv1a",
  "key4": "3revU1uczpKL84KFn9t9oKS5u7ZhBBj4WUyQyVQcJ5svqMt9y2Zhxj46GMfuwhPwUzmrcxXGKmgeu3DsHFjhp9Wn",
  "key5": "3um6qCouZMQdJmkr3FbXM9q1mDDGP4wMt2Dgj7smTjAfXmqAJNQwE28WzUQCYCSUBMzFNbnjU6U9QvpJrpj3jDY2",
  "key6": "WqMX96AQ8S1efEBHz7skiXhFe4Te2xzDKkHHYHiJGiGGMdcf4Wt8coRbjDspEm7xoAwEzp86RCw1mTfWHta9fo3",
  "key7": "5bQF11dxP9rpNynw1SeEmsNcLt6uC8BY19TeMtVAD1oYjt548weinigFTGxX28p47rnvaT5AXBSQngGLovCJg1QC",
  "key8": "21kNA3w6Mwphzxfm6bdHTF4hLDUyLGxeKvg7dqK1gmYFv4qq1b9AiDjEa8RdAweqGFZPt3riRjTJPrZLLnF6HAsq",
  "key9": "4kRbiKFDYaSwP9k5z1Uxq92iBnyeix3riSLR9vPWY8bn1K2MYUceB97wCA2B174fn5oFSoMP8Lcw5GMvLPBrGopH",
  "key10": "4q9tanyr5jeLN5XDjKFzoVYV9xDSht3mhLKVTSFPNmtR2fCHKdn9X9msEu7ophm31TVuFNSG9o6NNXMXmChfZBQH",
  "key11": "WVotPdM8j3J6wgwzdTwsat4Z36pttXHXSM7RsbuB73U44TAycFuSTQEWhyDYPErHSDkHRPzrTrtVvfjg4mdjtxR",
  "key12": "4AgxsoZzmn93MX3PhnYCidCzXBqifiNiDivAzHegZbqduuJw2LR32EF6J9TkwhcwMPocTqoz5jKTnXk2uJKh2zoE",
  "key13": "2Q5G9CetSnghdkWDSjnbyePnjxpnBABsM9LHykYDx5Bwd45q4qPBbVM9PxcZFBH5tGiYBTATsMYoCNC51mhJrUqi",
  "key14": "J9R61uoRwAj75kGsDXyjVM8SdJd1SVH7hPzj63xm34WfeAb5JPEmXrtiZeUMswYkA8GoviwG6TatNdECNaWYw33",
  "key15": "4S8EDjrBD2Z1FYGQtmTtAi5KxrogXZaPZypzfkAMxoUPs4Zpv6VdPEDnN1CMdqZsqxGpyidmeiUNAdqXzRa5h8ed",
  "key16": "3rRAB2CVkxG5b4zK4iz1Tcn7DeqMx8nDKm4fUcP1n5w6ust8kwFuBXreCspKysrWg4sJFHWh3YuFLB4Zbi23ABCY",
  "key17": "2LwgBoyosXtQGmpu9wFjTYxrn63VMFmRYdHuL8QWLdYg24u9vKR75FnMdFtNGTFBZ3r8pzKtQXvYJwg6uTSahHuZ",
  "key18": "59hxADDpHBDuJi6m9QJtUFEEzV1yWBLqMqqVYXooejEZfU1GE4npwSCRoQsUrEd4saFX6aiCfQmUDNeUj1WhudqA",
  "key19": "5Bv8Rc1oRwRk2yatUwGNehkW5FX4oqA7vru95JSXiCsgESrtsyX1L6G6enYXbc2xmvW8SuLE6wZbaMacb6jfYZNZ",
  "key20": "1Ts3PiM9TR1KmTswSX1DmkqQkSWetFkXkk3ToWeQZZPt4PMTKiRM2whsy1mcNHZPTD8C69nYvYSTaWS5f5417Zx",
  "key21": "5xWDVQKrGbRfsFheNanif6mpmLK6fNjgFsLuWxBdsMpZ6QBjcBmUGt6hU47RHSLd5opcQau4BPFUEBkMWwvtUavm",
  "key22": "5B3ZqvDtoaMGEX94QFqNfpe9wRUAutVB1RNnhGcS1jsVtkRychGELUnQHmzaGervMMNKSDm9wEaPSChCn8XrrjVp",
  "key23": "54KV11CNZycxD5kyhFdWjVoooo5QTd56KHJUryjkLPqGC9iS9gsLd5G1YgFKkSWDhzSNuiZTLxN2bLM6sZpniMhP",
  "key24": "2eJU1dwUVVoRc38aF3EwiWqLgy6ZbxNxHJmLU8BHh1GW3MYq8j1mupWztQkeUmj57qWQFgQSJN7tQFNoc2SkLzLW",
  "key25": "3rJVEhwtUv5bDhf6cbsBEznzungbz1esSJ2vuQZB63BK2pLXhLoqn8mAwtg6KyGcfwAS3Va3PoXbEjrG1tdCiqV2",
  "key26": "22gmNpcNwzQj6LJcTWqk9EJPU8Nfie13rPUkkNu4So2ghjk2VXLdCxVVtdvLfPtVVbssN4zjpuaGp2pxhDYoKiSf",
  "key27": "KxQQ99ugtftiurdK7Nup65mX2Nz7TUpmoR4P36LA5faS6PVY8v5b15sckX9tVccoBqPptds1wLQVu9GrsCXhFL4",
  "key28": "5AYJwGFbAdmiaNPwfsFzFZ65eRAEhQgrdxKq4CRDb4TbKAMeJsGizbU8EAvQufjzBUEVukyEioRHy6RwZpt1q1sN",
  "key29": "Mk4R2CjbmRT8TTawqEA3Piuak2TNXKVso617V4gkEhsaMEAuyTAfh8XiJnQCdWowRr9vy2vYm2M295dH4UFis9u",
  "key30": "Dycof8uP94gZhU27Bu83uDTgkQLbrwQQjiMJoV7BktyZkQ9fh5PJb7zvvmLAqLdK9wcAF2U7a4EcHNL9sogdb9i",
  "key31": "454Tw43k3S3k5EBECesN2XKEjeUPuqFxVxBw8sVUmHQbvHdrz411f57hP1rnDVSaUexhEM23n3yLxE7d23zydm5i",
  "key32": "3A2iFjfWrR3MUrJcSfTMavWg2UgJXNUVitTvEGZbAnfDHQpbTXTCWFz61oJSXxaEcqEZodQfxkZDJ3cJEPCsreVo",
  "key33": "2tKbDda85naRuDMYKxUdBvngw2KoCpxWDnYjQm9dFdP5jXKrbK9yFk3qaHr19XDzU8YgiwewYhP5BEFd9k8iwQ2k"
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
