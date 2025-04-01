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
    "szJrHB18kLA3P6MKyh59yTtZSrHsaCRjPDNX1Rte3Dgpqfatxi1JKZAMeLS2DGDeCvu8BsmAZHiekKb6tagEa8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zaXDwJb1gc2ygDdL5N7P9hywpH4irM5FsiNXrJHHM3vH87ncditCgB2iwvm6XgPNGSVBtf6vf5282CqQpYHqGdY",
  "key1": "SwtyPpNFJqEwoYvJeKfGpwAWDecrsz8PzpbCXUv9z8UHKf2fDBWZHnP27vYZ94hzmGMSm1AiqzvotWavnSa2ere",
  "key2": "5pryUwi2Ts4f5opPLDjXinjLNpe1s7Go77vKysVEjvPsLxNVuTyG8he4ja3M6TNskEXn2efGNc5BbJvksor7jLUk",
  "key3": "3LC8191EENNYTG5XipB5FEahiYGGRwizTcEp9KpRjfk7WzG7fUkUSUEnNf5BDqpyByM9Nd1ExbN1eP3hJBhi2zU2",
  "key4": "2CV73s7akF1bXv1EBsmVaJtAdeeMJ5FycChxgtDWLBAwom1R6VTKz67prJNCoip1kFtxcvSAKPHxsyYFXm941kjE",
  "key5": "3W351Bfzh3nCSU9iri9d1hcgqriWZd8WGeSdKn3vowq9ftfwY3nCKH5hwLQwrukYRHCyvHJiyXpDL2GiAeiKRpvr",
  "key6": "422qyqLJivYNLhQdG2VxVz1sdVMsR3rvJWseXd8RhEEq3FUT6fJMMtBnejrBKP9fYLRWvo8XYXjci8NxmsmHo99z",
  "key7": "zKsKELAbkpuaQJdJVHknSkCdXZimhvp7b7ZZL6n2yMugv1HebtNifLRsAhgJKQGVtuaZABj3fDioTdc3kYoC1zy",
  "key8": "5zT6NY2EU3vaNuwETD993wSYaSQsoNwKB1VrTuw1ymJgXn2e2M3v8pkwsqYGUhGr92JnK2iz3Fqw1EjddRQRCLJy",
  "key9": "4migGUAswgBWsVYDa7EfJUpkZu6gJhqL14BJyQ3bdkB1nMCEcm4rGitqi7L7YvqomxQNv4GfeGksXh1CS3D7YoKz",
  "key10": "4VubMSWGY5BZvEFKx5ForeLfxXDfsTpGBSEopJvZuDjpxY1wfUaJmPYjvaJcWWH7qN3dCCCiyGi6hR1eRoKNEgvb",
  "key11": "2TQ29KpMs2RV7hq9cKrw1C43DmX3mvqjAvr3pXnjDkWb5jVYrJhppJKqQfLR4adQL875BiEmHs9EiyjuJo1N36HL",
  "key12": "4C9UKMhLd5tJNyAVvgwc9tLDTBy59Fu1AkRYV77qTF2FHafCq1eh4nErxmAAp8F43X32G3MmXuz5e26seZ7F5Mjv",
  "key13": "2jyQ4JcqNwZmVcyiniDCA9LRStg5BKH1tCRcgVXnpQst9qo5yVPjaZNjRc4EDugatFUZEvBz1Cnzw6SvMMLnwMzV",
  "key14": "4pAFu9mMqQGbWyNLCwtDVv8qKqgfiLzbN3MQh9bS4PsxMhfu1DXvqJyQzUiQybND2sWBwMKCDiXrJWMbqFr6jfWz",
  "key15": "2CMKwbR4mRRmSNjciDsrY9eT3mUoM8nya7WbdeW1XyXBFzuv47idZYGDMzbGDoCncST4dT3fVXsoRghUKNX48cnL",
  "key16": "2JtZjyEW8Xu9pFFA4unrNCRzrY5othpXmdqwy7KsVJx894HwKBjrHzHH8RzY1ciQ6uUeMQNv6bYhsXV5cgx23mJy",
  "key17": "4oRNpnxhJ8pVNvpH5NzrCqH1226s1Ua67ZkyJv8nvuCo9fVPcuyPtcQqhMNHGdURVX9sh47vMj51XHYXH5finfus",
  "key18": "256oJiqT3v4VAp86Q3PwoThTmUnhPdTXMPETPr4xerkvxVov3vRVgxkERPbxpEcZMGHMgSfBzvJ4KVXSrSWps8yU",
  "key19": "487XjddEhynndW3kGcTd7uTofGDmx9U53SUKAvj6cVzdxnqwa4GEcKnxsDg62L8fqtbBV2u6D3eU5HaBh2jpax22",
  "key20": "3pU1SVpr6zyHxAzHXx7hcyaJuBC3uVW8EVKCcSUeFjpVTV5SUvg314n4jRAam62cPJaeh9fLNeWHQPdw8xsXzTgs",
  "key21": "63aVxBGyUUdXx2UhfJ4vCr8ZPQSmMAYrCtYHBido8bX2KUQgc7bYah1ViPKHEsNsLgST85pZK3BzRTfMBFz1xWex",
  "key22": "5PLrttJzJBBqNPPuuPxeGBMp1pQN29sz9iG3pC6cqNqMGFnQdYcDxGf9qBxTFRNAU2YoeYMtJAMuU5KSy2CwxRrh",
  "key23": "4R3ShLUmBM1tacdCQs483S2ysAdz8Ch3Ti7YJxe4YCvRXnpAprj2sD5ZiMLgbK2KUtjJMeToZQ5u6BvCcWWHYaFr",
  "key24": "42mqiF8KRBFBtM9NJDTkC3LV6CL2pGb5WLkF5DXofqQXxCdN88xfP1D17MRYUACevsD299aArp395LMDYm6W8VtA",
  "key25": "4N4QZ36PZFJJhUAWypV5L4iWAzTFr5Z8kTXD5HQEiUNFhxYfUrdRP3bpHZENkaQGTz2fe4Vkza8aMgnwpK7FhAUp",
  "key26": "3y49NccyMLM5RswZ1FS16Xp4wk9TRuZMye3Ar9yK4QU7faemtqzSCrmR8y4PebsfxoKgHWzLNu9sMiw5PGpvQCiV",
  "key27": "34FWPiqmErgNtLpfwtXKwszG72UmUkNRNVfQaQ97bhq38TRmgoSkjz4RQphadfKeWn6p8MzoTjXJP9c2t4kR1Kzx",
  "key28": "38zbhpm57qJgRXCiyJcMtjkSMEdwQzaFu3YAQH2siyLFXcVtUg7ar7niz4LxSgTScTqGe6qYmtN7p4bFqX1CQYio",
  "key29": "3xgaufoHGpHwgni9y7p4N7aMJkAjKcafrRg6hhrXL7MQPunKW91wAb6z87JbBLmpLyzRtFRiwCxU2KwjEBm5Nen2",
  "key30": "6316qVHSwjsZgT22tns6Wv9orc2ytBfMFw97kR1HuG7ybeJ41PiTLziTqx4MbLp4kQzizKj9NGtJk1dSd6KTSPRR",
  "key31": "5BLL27JwaFm5Gg1xW8KbnBibhEnvGqQihJrKY27X6bHRzi7e8GeGe1TAHxj8h2XEgPWUAefQCr4BkfuudSSH1jHF",
  "key32": "5SE2T5sLXruw5pHCqJsn4erXyZzC14hUJt3J3XX4xGJkdZLKX9D2rJhRanpgpbB1CiFFYwb8AbYzN34Rbw3q6Cu",
  "key33": "247mVDPr4J4L64L6H71CGQ6ZH9q6YiPVss81HjqLj8uUDHdg6rZXVcJpcpU7hhnzAmL1ksodDK2ZfFATc9oh6KiP",
  "key34": "tZqzFgKZhE3QPZjDA7AetxqRkeLuwcoVRuc8JCLxN7FbbpSZNPKMc15Jegxr9k2c4LSLCY3eoLcy1L2GUrFZs1j",
  "key35": "3cGfsSMPPj3rvzyG38ivQRxjX2RFFh97vpyijmrEEDhNN5t2zvfi1Wmjy23ZQQSy4xv3DeipoW3XgPh2QNYuBenc",
  "key36": "Hu3y6SSJriqWEnmKHQtscdCPqcWrnS4gJwUdBfkic7XV8knTYXtP9cgowmMCLhq1SxseaLDoSL5iK9h1PFRKYuf",
  "key37": "2qiyPtfLShqv3RpwEnPZcy2BDiQPK1y2DiViLHtcjFAm57JXmKmhTHtxNMCi2Cnaq3jrvUFPzTh2hfDHP1mUctAm",
  "key38": "3gaUFH9Mdv5HJp5LPMnJDD8846A7Jx2LaGXpF5MFg5ZGXLUSqpFErfnwr19QXyAwmozmAhC3VTGJWDGWXydwFagH",
  "key39": "4bcp7kuY4LAPZR29ytKS35RqYYKZgD4hbkowtD1doVFxnUGVtf1cyeMxyXj1rjhhR47rEogCNuxvxJGu9JtNqQzi",
  "key40": "5X4AYcX7yBziNbBAGJLmVdB4g4MuEvNmjuR7atS44YUceZFFvesSYJ8249kgVvP7fSgnvpxvMLPpGhvBDcKt8gsK",
  "key41": "5jRGStmVuGAk3UQEc1FaV1Q3Hq7LZbYB269ity9AFVB9RehMkN7b4YvHLTTVHcVooKWsfaLcReD2NaM5k9jojV6S",
  "key42": "EjyTvELsg9osKaZDoPjpf2xrBjCurUyd4a3SA68nxDgN5xBz7zAsFu7h2szYLZ4HaHUF6ozAq33w6JRXiAfUWgC",
  "key43": "Cf8u4vKCQr7Dcxbjfbjxqd4zTboqdYLL3UuuGxGRR482uwzP43ZRpPf3VcWmffvQeNQ8DAUunLcodCjoeR2Hmki",
  "key44": "4BbZcbdobtfgCv7U8ppUWXbJFQpP2zjHeovmhQA7Mz8cP8rdEghVsjNkMTR89Za6PwnwvP9nGVzMWV6NpDZdKuVy",
  "key45": "28k22KYsCVjodgLZbSwX2HuBbQzbzmrwVTWMoCZ7PjfB9eqmEmThmdcq1QTVzQQxkGrMLumZABUM3aXYe18K55rp"
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
