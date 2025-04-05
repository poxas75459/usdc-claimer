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
    "5Z4SNyMmSyBY3GQFKEbJ2MAUXCguvxvwE1yc3s4RyrT4RENnd5uBZe2TvW4SohFSkGFREHjt5JkmzKtrFNaX9JfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UHLc6zBS8xKS62BaN4eoTsttxiqwTkJx7guwFn6wgfPA6ynDSDxEkGwHP7Pvep9xw8gESHFaJrXbuVqFeV6SP4u",
  "key1": "1hHDNFu9JsSebS9vZPvHsrzhh4ncUn3gRovRAwmsYMtfjvGxwMAZoqT3Leb6HnHkeWN1CR1rZs9NJwRYJSJ4e3S",
  "key2": "2azxepYRB5jwNLVoPtUDHgUHcfA8QHZPgdtbY35BbVPCSPUmYDmJcK7N4KiMaLbhPAwvGeJEK44yPJycWxS6eyCv",
  "key3": "D19hkXec22njfYf2juHnypVy45bqpAXo8z2MWHqUuyP8AwdC1LbcEMQQJsd1LAy45nfamLNXzc3sPcuuvL6heR7",
  "key4": "2jzQ7X6u33HpECbmCTsZiovRMPxL1jq57JqydYPLuCKpBHMeokB8JGtpBwRRxKapFsCKWpWUtJuE2xoa8a2SVs9u",
  "key5": "4sztwEb9XWah8ob1vMGhL79SN1ywmMRe8na7QYCACFLGrMDrkbTa4PQpGX5Z55AbcD1LQZhg86xXgV7xsN1S138N",
  "key6": "38UR35VfhhuMxb9XXnt4NtbYCBej68tpKodRyMvqC5tmkpfFcH4kRswbQYAA2v6Sh1h9x3wTiMyFCQ63JKn7Kf1r",
  "key7": "3ZNJg71Pgmkh5JaUpBTHsFC2o543UbLmbK8aaxVgQLqrNjgzXTmJ9zpZDDcbdvR73Mea5zrFqY3VxNpMRxSZQoY6",
  "key8": "ehyEpdF8q8sXbNTMDx68kt6qEYbgxetpTFsjH9TjP2viXZoMY7Cg3dza13PyrjpvBgeKSYe6GwTrhmdLjCTJCUm",
  "key9": "AxjNsa9LjpF7dZu1x6kiZxxMTE7eB4vwAdqcD68iax72ypuYcgRLdwY7xoAiqBppF99YLoBDLsCCR44MeXjkzCj",
  "key10": "FLFKjd6jsfZfpqhuRYRSMM5kaSdEYLPYmHuLejorGpx2rvBg5MwRCzsevJXQ1tDjjxRAE2ZSeBhFFMM1FQxx5bA",
  "key11": "2kweuyfr3antSzEVAWHvhdZ5WGVpmhsZ5eoqzfeqA8saxVqFLaJPQ5MKPp9PSxqkzTRciWsmFRWzry36jy6AiSQr",
  "key12": "3tg634y8C85DgdnXx2ZbBoFB7rW8JehVBYHPBHioPVNG7JyqkQCbxMHx8mw4XaXRqzkM9ncbHzo7zjtafaZnwaaz",
  "key13": "44ZNpNAiUNcweQuca5Aoptpa3MCGFCqkiAA7YCCrfisKRT8iHk5CyhgDket4Pqc97LjCB5AejvPYjMptm9bSrHpr",
  "key14": "2hGLcWzvyR7Wp5HLob2kjF2jsKfNXUSN4TZmKWt5oa1yqgUtgZNsAwocVfDX6Wqof9RkzWkYnNvjn4dzDFwATxJc",
  "key15": "4du6RR3rkXMTnnMaDmF4N6y3hVbVXFiWfWjL2iwbxUUq3DdpTaZXDKQhG2hvMTFGKWHzWjdiuohSDj5mkmEaG6yP",
  "key16": "3JPoFzQFeDhDp3SpMGLxzK7fq12Tez6iPYv8sARMnxsG1eKjfAKxcD5YCw3vX5bzhvV2YcLuYbbbk4RCFj18RLny",
  "key17": "2Vt24rM1kW1YsAwjL7gjAPwk7kmQJyi4WdUuTXprvn9SwsHrYq5rdnBoXsu2ZGyb7a12nhCMzAM8R5dN1sGw9w7A",
  "key18": "3WLc3mWNLWFpbRsjhHL8N5n3wgkgJMEp9FN7qcpYAnQ8atP6gNYaQ8eXhQozRXnzZyhanpNqBad9fcDDcqHqbr2v",
  "key19": "kM1FJdrWejE7P1DcpmXRmtx8nPwzfJ4EpSa6sKnwwEDnyBbNrn5C8SyFmNkVU5C63QAbxWEQ7Bb6d7YHed1D6EZ",
  "key20": "U9tXTcwstjzJHibGxqDWqAdNLmuPwmCVPdiNC5wFF5ZjjeAGxvsmTK39XPhe4DW12mR9Www2h1Ciyqnvcp1S1ij",
  "key21": "5vmJjxfuieQitk63pfnorfQpLGvnXj35KUo6QyRd8bNJB2HBsYJmoS1v8MvgbkSxS4qnPwLXcgD8P2Dr4hcuDLJj",
  "key22": "2rGrQYcbRTKBp31nLsuoYzNFiCLiiSoBoTvXaP6Jc3kqJTZf29JUrEpTPeqZ8D1iWDXZssGJVKuv8wqELv3gZD9D",
  "key23": "2v8ohT6sy7DU6hBTUFmTc3RRtAK1TWo9JdYbr2XFAJZNgUSwtbxVHp1BY2WUxvNaUukrDQt5938yApRZyktpPFeK",
  "key24": "3dHpDBBXCDxT4by3ezktZT2gfzifb3AWrAVitTGaGULpQ61WhYV5nhUJQiVFiEZwenybXiTos9sWppWdpcGmQJpo",
  "key25": "59eEY23CeKxwJw6d239Wjfm6CzyLY9uT8dVQhjis4xfJdqxxDisLJUb1ps77kVnx1fuke1csNSXk71ehjqsBvjZg",
  "key26": "2aa3F4pTFU2b6cqsrrDSjsUzjrT55KbhzN7p3FFMnHy4gpX965LNeYB6AkDZxGcrK822bFo71QaMow7Y7MKDKX9X",
  "key27": "2LoZF2BitaPmwKrup96Gwn67UcNHpH1Fvg6Q4Kc4CvHci8wYFu9EXXerH3qctdKz5deib42opkeo9mTKkhQXqBRo",
  "key28": "54VPjJyqSAfDHnnPULWTKvB6VBJrWfCA6SCShG7mEzkyAfBkEHtWH4gwqLJ1kBQwGHqnLYabdVYWcYoVUAN93SCF",
  "key29": "5EqrjpRcVupkLk4XrtNVNLrZV1vmFTH4BjQhnUx8VA9T5WY6FWB4kyPiCXwKDHSrgujcqeGGPMATYYas4jDD9DhY",
  "key30": "2aa1J5p1Ziqu5XVJNtJACpSLNv4GHy2zQsiSmDjkSPV8bKLADv7pmA25K7gsAN7hM6XVuP7DrPSgc41vA2kNkFwM",
  "key31": "4guNLgeoLevNxeddt6g2mCfJXS3Ni6iJ51MBdkLXMQeap5tRh6z6TWarndamNsYZ31dY7A3cJo6M1EkCdoNGZGns",
  "key32": "5Am7sdUXsBk1SDxapzzn44Fcg2GbbyVB7aLACH1t5AJYutLoGn6xSFE6AnkXXkHYsomFmTtFvHFLYthkcRhjaboz",
  "key33": "3bymcSm1gwfhb38t6PCFM9N59B6jUWZh6m3waZDrCxSnjjcZUNgajbq82r7EBt9fUwX4bcYD5fdF9kTsvYLioGGj",
  "key34": "5eBMy61VzSFPJcUKMmjYx1mTuG4D3FiStiq6DQV2vu7PvsWnLaKj62XkEBX9vDnie74VTEpagRqMsJkrGGn3q2NH",
  "key35": "4tc1s4xNA81iFmsB7ryLRhnGm5q9AZwFw8MhG1YrdebC7xya1m6AwoiTFtn55xBro1EqCinUNwB99h6otK7qH9pb",
  "key36": "3Z9MAS7UPTmVNosZSwmaczn7XotWUEWvLjNfa9W6ZvijUzfmD2JvD3j2xffaiMWACb2xtiTr7DLGmqPFipRb8sRv",
  "key37": "33QCBAgi53z5jiLLQZv3y8M5AMPzLpJVgyWP3eUNsPHAoSL5AN2ooGoS82QCW51HC91wZ9o7ED7R2ddDdZdqS4fM",
  "key38": "5jUM5NctEfuZ6HBXWAK36vp11dXUnoNPErBGtrU2oAjZ62Lsp53hcWrHDfCKSx5xAUVaPnwNw8tUpJH6FPEqs8B8",
  "key39": "2rYXoNZHN2JJtfQs52DdJrrhymPSKTWHi6SevdmfsimHRBGcWGV4p1eZsKhG84J7f4nHyiFi5rzdzRmytuVePZt2",
  "key40": "GQDux8CTKB1nDBYZoa4PtbpxnKvL9yQebhfA7Uos4pTdAPq7zhWPN11rcz6nynfmDX7u8bf4WtURzRYBeoDLdNE",
  "key41": "UP9gHG6UsghaiHyEZpMoRZUDZWWLPoZ14SXTNDt68YmyDtqd41eXcYm1e7JD5pJC63HbLoy3iaXdYz4BbygrDqd",
  "key42": "vfuS1eyoYSendR6ok8AZNi5apA6jnNSGrWfYbuR8Co1G35V4Fm8s3A2iH2WrmsTvVMAVm4TzTNo9ya85uZ2rcQT",
  "key43": "32NcggZy68xMMbJAFDKs9Scbt3wQqVcW3yjEXcsKiwhHCEQYejBPsNLyTCVCRctBDcgegH3rf3QagkFX4R5WGb8o",
  "key44": "G4uaZp34UFv8VFXWN1WYZNAr6MDq8MPpAqNGL8FtRzRqHDATcVgKfAuP9Y4vmYZVkBiWViWRoG2CnoT991nkwAz"
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
