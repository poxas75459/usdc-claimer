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
    "SgepVWDNcoFkiK6E5QzsKeHpNqpZkyk28XoyDXKMiAbGJFrZUghKmiyVZq2fjAHVkqxKLPw4o1RAit8wMZUvMWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qynt9t744G5dfvrV6frEebq9o65DJHuLVQDxX2XvaA2n6vuVqR6V6rNfGDSd1Gk1mQKyKDY5wQbmzBKibKoQS2E",
  "key1": "Fc68DB79UMimo9ew5kVfdYfuk5hVWWmMNgjTBTvgEs8RksWDWKvWopt1cvr3xGAB6V4KrxzsepFM8tsrC3d9wJe",
  "key2": "ST6hgB7T1dUChB84SpfkcJZraZqAK1xyVbEUDWQaZUAnaX3qoaLkJXWyBUEqi5Z3XSvNRCpKw2kpNnc9DaK5qhZ",
  "key3": "3CRmE1ExxAtcq6XrCK3uNBvKYaK9sz9ztwBhsSwk1ez7gJkEvBiNAyuUj7m9SpCbc187zj75gfocYogQaVMcJiv4",
  "key4": "29GuT7AytTag9knSifpWfAhXuGY9NyGJhy8Mr4xr8684BxVCSh5yWCPg6WUre9g4MF8fLHsbFPaXnYn4drotkCqz",
  "key5": "3gUkHzHq4emspBX2zQY6hCffviTZeCdMkpvgLe7uqri9gJVVJgFEzmmc2mqDfzFSvb1DDGH9ZNcbVFC5t4pLZVBM",
  "key6": "5MTj7cedcrkRbuRZZNfvGBLyfznJiDdTyH2vdKjqDY3uAmwpgB3T7S4STmRJ9uHFRdVkfLrEDz8Y1EQduno9u46j",
  "key7": "21qBSEguiFgB2EvFMq7orm8dyEpRrcMw2z3Q8xzTUgF6BN7RQJjQDASJR8D6CSJvsbrwFQpmXRoNYkvXXmspvmrh",
  "key8": "3oTwiMPMmj4N7g9HzDBWo9gjTFodnVuphbeMQf8iZhb9xsyoMEuogGEvHDMhS8ZBHMfVxKKPKHK9nMGujLHcUQ5t",
  "key9": "y2oDng7yMdMtwqaTvSBmxKGYMKHPxtxW7a8gSubtjRhjs9Urby6Dx1QrwyhbuvSoyStUBgcgBi6DGhHz23N2uGd",
  "key10": "5v7MuHWY48UULxNc8bhohjuWqXK1xTipnjz7HRqx2iS8ogs9oMf4LMfvQrMWZLgPMJYYTL8GJWcDnLdwDzXaiLiy",
  "key11": "5922hiSQJeqy8MkyEnfpy462VjVMkY1MkKbY22dLnacgut8Xna2zumWJt3Z2QmJf6xyxnvfDxbQNQqLH6t15dANr",
  "key12": "4hs3f5rwJuUrxTe8dc7sv8XaUFDVqwqS2CnaNeyGhn9xRTsVp6ieSXHd4UbjtuC1hjKMpcFgh2BcYMnoebVCyJEz",
  "key13": "44YDstCnHhKq6vGb1Axn2PRfCwPeWxV8jiXqn3pwMzTseyaWafdzZHh7jCuRNhYed32VsYm1kY5rVXy3TvcL5Zt3",
  "key14": "9qwK3u2SgkRmxW1jGQVxFrt46XqwhMngHBREvnhUPnn2rPKcSVFXGeLmwe4PB9YgmmbiHB9T1BU6woqDgcJmq4x",
  "key15": "63QCJSTuok5dJbZGMngAiYAxpM6qc5Nwb2oRy1spciFWQ3mVxwr6hvmFvfEZwZGE4vmjfLHPW4g356vz5PTSd8sG",
  "key16": "2598qMtxxfvaLCfb1R1BnDbJ4UQxKkKGSioQxfnYZDFAcQAsdHSDqNoJ2vVZzPzbKUQZGsK6L6UnyjfpBZEmjg8T",
  "key17": "39qH1WJ7stsLhRVB4a21yu8Z8XS4FN3CKqkDAgjsNdgCTfrazqR6vSwaSe2TQQS2f8dNLzXT5s5gpt9uVjT9bXNP",
  "key18": "3FppjaLxkAV3gnENFY5PrGa5J3wjCieS4oyMRgWyKG7bqZjExPWBwzMwY4k6te9AyUj3XgCniHwCAtPaVcmLxzL9",
  "key19": "23Pvkt6ZaHeoBzwmGairA6mVMnrmt8cwSQ9tFErNvjfrzehGx7h4EHiwU45JhVNFfTirqnER3QCbxPkrN94ifQHm",
  "key20": "4sN8KfAyuA2PsZtNRR1hxtGQn3irCvDynRndvMGXGGVUZkgB5tChUjAaD8m4TnMc8cq4fomoqnBngnfsjRNJsPY9",
  "key21": "EoawtB3BdMBouga2tN6WyDzShywvDVahDWEVAtcKQ7LP7FLo8QYcdjHEo3e6GCwEUk7SViqebTUXjuEjiaXribS",
  "key22": "dzXFgDfbbgnuPmhJetQyRLhptMzFPo3R6XgFgZZy11PX4TJ7VDNVpTyQXH5P744EBMCmMT372VciB3dQ8tcA4pB",
  "key23": "5bpBeKarqbtV2tc1yFfMkZWUH8VrpnBbswCq2MxyLjiKLmB8L98hsEN4pqDHMPRBuEupn6PuD93FMUxsPCZCDoN2",
  "key24": "4cC3hf9G3xMeH31JKWxBMgrV3H1CpxgbFwv8thLmN5t9ej2Cxo1z8ra3V43FMUmj6ZqX71aciNDjVKBvkEu1TVqn",
  "key25": "52S2wyL1dyUU26tCg7AsdDYJDgQhM74rXRJpJNZzoiUUdPywp2DrZDRuyjmTVnKMTfqjeLVKgRtgZiWFH7YEF5Bn",
  "key26": "26EsMCyTDSAL844wHjq4ALw5Nz5i2UjrGLyY3PJGjw6ocZfmogLfxXp7oqwVYea2cVumrhPZTPgSXRxqtBkWS3Ds",
  "key27": "FdRrq7ReAnKGfyC1DxTm2MuvuKT6afiXdNXATVvAmhKqx8VVbbikBboXHSR74qWQj1s5xxZM2Xoya7wGAYVEtyG",
  "key28": "43ToYRGuz7KSHwRnRMnso8wuTmSVTcratVC4cHvKpvbNeTHGcc3RcuxnzAhpYwakBmUHQuQpH1hc6jJKvLtXZ265",
  "key29": "5sJ9sw4wswHE2EKjKPzZkHHNwR2D6ocqJTwHyjqS88qZ42q5UDEe5MWSPkyLv9DEhxoTCgJ6kHSdyr4BUWARWFoo",
  "key30": "pBDfHmHpYVPXTe9s77JpKeKxiVUGFJXN1EyTygN5cZ4PPqVgFQmqboLX7vpJpRMsJuaKTf2EEkQQhQ84hgY6nFi",
  "key31": "5rEHotpJjUZZGAYu6FwiPhtb5zZYG3hQfichjnCBWEtQKB8c1vNXndhBgZBhsyfS1j3CjX96qjp6YYgfoeWo4qJF",
  "key32": "2kSzbTnT3E476voNpCU9Xm5QucDWLxHrBHruZmE3G2vxgrkTTGdS69FYmF8nvVswha4MbeU9bPSU9Q5t7P4rLmT4",
  "key33": "2FpEogWXEYvFDR7pUCiBDod25tMiAwpgYfqSw1M4muDgbWq8bpuXR2u7mLotCDB7EvenCkcKG1bMEnxfEH6iTbr6",
  "key34": "4SUX8AMQXe72SAWhKoBxVWrJ17RAVJw8UHhkkbDY7JYgBjy9Q2HqZnCdh2Uo6g8pbYqkKfbZMSFY2sbjWkzPLrP8",
  "key35": "4HReBnPRdGPKi9mw4WVZV3MmKRkvRDTGbGTqMKMXfmMDusGNrNRynAUq8j1dNadhrcmB6b22GjKtzKX1XFH5uGVW",
  "key36": "3DyrLtdbYCdd8Z3xvoWmJbm6uLxwKgjttq4dFBmB3sFdoGVRLMTFV8VjWH3RgTRbF5fBPYuvoU6hUNdgmTSxRrqm",
  "key37": "rDguzvx68iGN6beKtvVBFr76UruCrzZiQCD8VYoxyWg64MGXKPYwvGz6rb4vsCSgQx57v4pBjSA8XqD7EZqvKV2"
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
