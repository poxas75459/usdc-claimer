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
    "2T1ztGjv3L2uacKBCSbg9bhcctyorSHLKZrZMJZpe6SXovU29aK3eXBqeGf5UQ7BKXbrDt2t1qHVb3PpR6trTppd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJeGwsiv61KwhC2SkiLDnScxmRMzxSgeeHVJ8sNjDZXSnmBKFgrsFdCjEKVoFSDrVtu1fH3iPYEQ5mPcCmFahBE",
  "key1": "a74b2ghsYPMmgAwhRwW6ag8fsG4drZfLwi874F46AoQBcVMqvTLMVPUHBHwBZXQiT3DnrwSSayPpErZLcNiDQ5d",
  "key2": "5qTBtSioBxgLK1uYfSV5gnbszvG9tePGwM74ooS6xHan2bdPdtiDjYyzrh99LPvEpjs2y5Cbq7WmfzUuM4oxgeem",
  "key3": "67TSm4fiqarfNH9aWgdt1JQAoAQtNtd81rueFvQjBjhfZkmG8W9thv1132ftyAEpXkG5TEiMPbBRjv8XkbHBv6gQ",
  "key4": "4wLoRdPqhDMzUWsyjGPgRY1jKM828WbCZW9BYyH26najmY88ccvtMo2fRHBBedGhJxEypkn2yPBtZBhBmh2uDF1R",
  "key5": "5GyQ3Eum8q3MDGVv7WpsKK312CCVsVL9uBdKXK7BauwSZ7jvH9haPqXzWdfBMDKVascf3Q1jQurGC8MDPGBhULgF",
  "key6": "5XGfP66tPhhD6WgGcgXHxBY1yLYc9oaBEb1jYJ9JgfoJQ6t478fgv4JZSDPiqaTTyEjevJCNFRMebYWKqhnb3n1A",
  "key7": "4CYnCQvRPpDqLYYBHZkcEJRvcRmrJKgdscf1jfBe2xkxHCaMrujTWKVTdGZysFEpWwYqtZEvdU8Nmn73zZZ5uyKK",
  "key8": "4hMCWWMMEq7wjsgFD9LjwdunPoGVXNN2XuKPsYdCBwX1H6J6UdKftanwpzMH2xFes5oBEP4zdmqAFHKjcDgVgLaW",
  "key9": "oRhy3JviXyJKhba9bgzyxLLgydNieDvAiPfGjePRzBtfafjmntXPbN9rz4vjHaEPFVUfJH779UHArF5K7QdyzeC",
  "key10": "FLQMVN4UWaxe3R1YDeBygD46dj3tssYpwdbZ6WAxgKGjZKkY45bs3KbmQi73C27wdJwFLAho7vckzzpEPmgNNiG",
  "key11": "42TsZx1egqwddYkxWVdEQGh3CXrs3frBFTBovYcGQxxfRRsqUiuSMjkQSGcasCmcxEksWeQeczy7KmSQn3Qn9wcF",
  "key12": "5EAGwg8q4Pso7bb6qMWGWt2N62mLDMdgj3aJim77MQmthHPGv1FAh7yQq17tsV3EhsHBvev3Z3UBbi5psJphLeoc",
  "key13": "v7kw53gMGQAPJbNCeMwCz4vE3ZpE4qzDxnDKuXgoRZSvJCWc3taZ5yc7JKDNAqY3hm7Zx3Z1AznWdBAFkqDXeXU",
  "key14": "42XWyUGtnvPSCywAZj11zkgFKx1nAsXm1qFF9qMkncFWrw4NVFvpenDE23duHQ2GRFe998hvqowNnwiuwrNTczkV",
  "key15": "2v6PZFKEiSaHBa4H5fbErXBhxX8Bsz6nLjtBKzWZAEjyiWQi98JgdykdJGmLhzKL6x2VvvXVM8YjAxpWwNNDBBqK",
  "key16": "4F37irgNQzQgL77SLtWoginxN5pUib4EnZBJvEL91w5pwM62UGgx4gPDjS5ogzh95JWQ8yFKD3Udcpyf6eVta3Rm",
  "key17": "2yqvkdyCKqN3fS13fzckAucUcX2u1QRQkWpmeeJCsEc5QQUYR4dU2JFJMac1WmYmf3NY5MsQFV4idEvWM9KvkVKe",
  "key18": "kvHKBvUdsVbmYbFouzTzc5VGzENFRB9aevzJS48FBAXpbkuQXGPVYVb3JXDadBwrzcLxhJhr5E3t4h11qRbS9gc",
  "key19": "4jj9YBhgo6Fa3Yd5Rf5P6MAEiZ4HL89XRCFw6gdj1burMwEtHR5KDz6FoRQPGfaNSGCQo1nxhw5B8Lty1txoEq6N",
  "key20": "4jLLUmpgtuR9ZiG8zgsMQSfq22j9pMpsVNM1sqmBhd9VwfBghbqTSKKjEHQi7x2YcZyxKsVDAENSyHMLEhASggRj",
  "key21": "3T3fYzLV9M8MNWSba8e88f1yuTPVgmd42KAxNFDMY1Ti1rsptJVydSwpfYjQczmw9FeSg8Lb6SkdJdPCGmGYsHRZ",
  "key22": "3PEFRokyB9rDGXw8K2cwhD3wo4RsTosmLgn5Jvk46NCAZZvaY6PYxtViC7jWDeze3GX2EAWynyrmvaYq9jMFVx3F",
  "key23": "3ZyTi9bshDRD3yyG2N7KHyYJaejpGEzSMr61zJDz5UmtTt5eWW28vV8eBvh9nAvmgRzT26DB1KKXvaUvyCjx7Z2d",
  "key24": "4Ebi4sT3UdnGfeXYF8BinoFuFsHpF5HRDAxnnBaGGeCPxbbkAEwpnhHEg2mPisGfquWzkBrbKh6MCD5RbhvoRnLH",
  "key25": "2d9fMi1jxkXRYCgGTZtdjUcFdYRj8TDdbqCyHZWLnqqTGECCEsSMpxm63zX7pjK1EvCPHoWerW6qgy51U8yrsSrB",
  "key26": "48JL1AaYZKZ6WFPmBmHvds3NNydzmoik9Ls6UtKFUmTmgq7iL4jNkBoyK3JQRd9gis4JdYKH1ZXJhoGLTKTgu4oG",
  "key27": "3VjVnnixb4GmaxneB9b7x6jC9QSJSKTwH1TkHcKfoBSvbxV1ab7w4uc7DSASWAByest4JziCnrbE1JCoNQS7Bc6o",
  "key28": "aNVgXiuNbyU7ApsgpEazZpDvs8EydKxs5sD7vKvdfjLUgu69WupwHPwGDi3c1goWH6T1GFRiZsg7NNj3f9r1NBz",
  "key29": "4CxsLryFxj1oM3d9h53cVGZKsZR6V8F1SHMULqkSNKtzupKLqkL3ytqijz7XfQNYTaBAEYD2fkCsZSaHCLYsgwPj",
  "key30": "5fmuV43LHvsz7cSFCGm7ggFC8AXj9w7C7of9oiue9fpmA36L93b6QBUjWKXK6sHajE5Z8L1yA3zgT59THnRgJBju",
  "key31": "QRuzu6JxjtAzjGSuSoRJpFhSE78RVezhPRY8qWwtBewBHsVB4wXaBrY1mECYhJAAPiZTm1ZKZr776hHL7kZb6KM",
  "key32": "3pDdRXHivKxZuyAzK6EC6ScdAhww8U2R3yMKqphzJrbUVTu4un1d9kwUVkiewwnQ9RyT1ZnJ5Z71YwmHgf8VUtxj",
  "key33": "5jRtZVSW58VCqB5NvyCoohsADajWrb7xGetfP7sjbrsmRggn1dRBgWsdsHzt1ZAJE4mD7StNZufayQsqppivrxrm",
  "key34": "577fSCHTBaWsDYrrYWSisV6kTRdgAvzbtw6iiMD9W77rVASkH8oRcfRfpZDAe6xkDNtXDizU3BYFnAb5Ue4PysWB",
  "key35": "3p2uEfsgzGHeoyhko4KeD64VTqGVt4foaYFZoTcNZtor1GnV45svQR3ET9j9jPKfbrTwBQtguNmiwDhuLnLHH2so",
  "key36": "2sdjFPvCf6ogJdvgkCAYQm5VVY62B1d3dtAe7ACPJTVCQ6iDLx2m7LLgPcpR2Nps67heqcdU2Jita8iEHdobGqJs",
  "key37": "4RJ8FcwqoWd3Exy55tkLCnE4rsK4YFHHRtMjZW5mP1y5DmnqSbKEWHNuikTFFuebzBCYxLpKW1LCZeTteNrjdSdF",
  "key38": "HmCsBCyWk1wQbMHTWYC2RXjMmFUcKj565PsZ1y6EsCEuz2dxsAcji5sMTu54jLffrsGd8cXwKYEencCtYVBjdLe",
  "key39": "hUkomHj1F2qwYSz6d6sv3SU2HEYK5vYQgan1GTccXsgeMu9fuq9ciqBKfKdvirNFkdY9vxyT4195qDtGWew9k8m",
  "key40": "3YYiV5VmcREFeEaic4t5H3JJHQ58MPT33m9WKEAcMWGDLU3ErJ7JVLyDNNUN98MJjPGGM3kF6QhCbvLwM3GpRMvS",
  "key41": "2BioNHLtZYA2fd9EQ7jdZhsTV3Qwdide1nkjBdFPeQyzTLKbc42u8kiHqTeox81vQTp4ShZFpaeKHbDHDE8jKnE2",
  "key42": "3z76KmcmZzNnG911SYxE5mB722scQqLL5gL5rVaajKSPWWdDggEQkKx9NTVqmdhMfrSLeXQH2N2dYoriDNN15oGw"
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
