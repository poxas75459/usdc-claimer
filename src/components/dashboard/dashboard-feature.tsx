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
    "4dyMEfVxug4wc9eyPqTTHrp56Q6LTRXBcXt11EgASFP9yEFDMv6Vz9UJE4rvH4dN3y4Q7wvCWtNWszh2w3RbWwPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38rtYoaEPxEyCEPxTies4sZmhJYnYP8WTZMKVRCqa7JNWSYb5dQ75b98Zsyp56aaBvtKPDFwxG8wxnQ6nLPmjHSE",
  "key1": "3oejXw6zKqumaiARKpom3y4fHXZnjehe2VPF3q9vRhF9RvnMz3FvS99BZbZGhL4YdREgNdGY8mVaFmUdmQKV8oSP",
  "key2": "3NkvoxMb7jRqdLrR9hJT7eDR1BmjwvDzB4MQQSR5k7VKW1xGnh2U1LpoqNdyYSfDNN5z6p5fGLQGwCxextQxeSU4",
  "key3": "4vEGd23TKeYtdTraRBi5chxS9CjRvH6FpCsqxCQm6boQGnrnynoCJSUSz6mt3xm59xwfDL2u8ukx9CTWTTWF49rt",
  "key4": "4CzV7ZJkaCfDFLB2bybgzqxCfcgWtaJALuoC35hmY69F44jjYSgCgunzU77qBN8nytcTDoBrdvr3kGFr9Ushg41v",
  "key5": "43vqbKXwMWPEEEHg444MiUXVL1yLnszodAh1icZ7aZ2d2Bu15Ecv5rzzXdMkULDaEW1PZ6vvFjURob2ihhMXo3TT",
  "key6": "5BuXWXwo82fmngeHy8WJ182rLRzydDZdbh1QRbEpDBTYCrAcEvJSxB1isNu7nGgEaZsSKHNUfLynYNhjZUWX3KvY",
  "key7": "5kqhXcdiNiVXmLxTFKXD8z5HygySsJsXNgP7wkDjKjs3FsAyGxMfgrCo6bQuoHCZL3SUE9hakdprVn33Ue98br4y",
  "key8": "4bLom5JTkCaAi4YpDEiHVUxKfd2YbpXyWVtfgW2h1GQJ8MRM5iPBVwkVxD5znL9qwVP91DvvZY9pt1GiimDi9cN6",
  "key9": "3yV8kFEQuQYtgGMHUG9KoM9AVA6tXKhq5uQpHN7jcpKotMnQ9SuW7Kto5DfrentRjHFAH9fcKmeMM9HhZAniiZoP",
  "key10": "5bJLUfzb61NYCFMxR4p9cNNTeoo3vrvvYDAZzmrcRfU4zhjTL47dTfWwttrzQmKdZTHw2LNYkkRtEMqrVzxPuZqa",
  "key11": "fVytMVYRQZ9TfZFpi8FvniocEQwNrRRuEY9TAPghHc6kGETCA95VkBoN4DH4s4USv3C3etPiScJkhzUAdGmror4",
  "key12": "4iPAqHp2twTFZ6PjXDPzauqivqqxDrbaNaT6A8A3xmnF6cXbxauMZWPLhnV7joEpkbcVTyqeVTUZGwq67qifHHFs",
  "key13": "2FdVhr15vnZxLrsD9yzSZGDUXccFs8wrZyW9i2izzmwWmjde6PhxMKW59aBDvyZihYqbdrF5VsJyzdSsJWhuuPFv",
  "key14": "35JSHCWqZgNoMfF8usW4Q2YT7pyEFSk2vG2QxMMds18xjfAiUFKhqFLrxYDRD2Zwf7Ln46hxt2WNgVWorcdXCBKz",
  "key15": "rRcLJirNoBHC9ceKkPCWrpmEKkwrVrzcpxuBTYHMJCFjsXC8tmXMHFwTQ3KVWNFa4n6He9AYZZsTA67U9bvPjBm",
  "key16": "5EjXF4BuLkJJQx2TEU3ctjzV1wtMSVZp14UNYXBMaSto1czP3CP1k14B9HW8jfEHUnNB7akfKK4YHzyPq8Y2KPjP",
  "key17": "Zuk4uC6fErqPghbspDN3tX9gtLY55Fi4GxomvEgh5KPdAoDsJhr9yNb6x5n9kyjkx1RpeiToqPdLWEh1RbxtHZ2",
  "key18": "4JnCJ7nFFj9FgHLqYHtqpsyrBK9kpBsUknSTRrZQKQuBpERBih1reXgcgmdDvcdzq1zixuBrnN2YsRgU9hHPjq66",
  "key19": "2AoQ8ghJFWk43EKXEYW6KrKiqM7s4tnZf636UonwKQQafAGQEQDj5ATpxuu82nPB1ftjnmynfd6PUFbfF2Wu1b5G",
  "key20": "2SZBcvMudEA5oeMcQibwAtRE3P2RLKrjmUbtFUmPGTqug7iJup9SWEW5f3NfvVwZZ5G1HxQe24iPizxxtz6EEKsq",
  "key21": "5KUqCEEazgVTZhU4zL1rTqRMHSWHEPRPzQyJTkK8cnCkfEGyo2FDym4mtLQ7hY7aQ8TpDtxkMXsgKZoEeoDqSA1S",
  "key22": "37auq8okPKT31y5Xo6eMkwDCnz39TkQaSFAk3yw3epnu14867oDVem8CPQmEnPnPfDgnQrjHCEVPqZSykfzn5qcu",
  "key23": "2e5x9Hy3DGn7yyLVDhB4VUoGf4dNv8GsNQNViPeAmJhGExoQuX9y38Epy4D7p4Kkcsr2tY2supwiqvejtAZ3sExe",
  "key24": "251XcBNS3CSacq6qtME7huKbDGZvqjbP33NjMyXXzMCvkzBds8mRs9w3i9w3MjDqZdaYLT6Ugv5G8oedB88Kv99S",
  "key25": "2maVFmbyPasESRYdJ29phPReWW49mEYjkjxq2DzDcRxf6K1Vwht1Psh7C9QRtyPb9kBjpRnTg8ZxvFFiuSEkrNSC",
  "key26": "kkLvaUzdGiHpWAZux3NY7L46Z6Shxq7THTx7MSifBr9BKEmgeGDyaJLX6C1EJaKcvCiBudPkqiBteSmbAgxsBnb",
  "key27": "3tNrrhGanwLZsRXddZqWcnu1qxaud5DdK32UKpiSAFUByZLxt2gQyzMZjU3zqRtp49LigMWMtrXfkCcUXpHqufHN",
  "key28": "2MFEEr1okwWCAJebMkoKhq3VdpChz1Z9RkcRxSEtYMUrfmwuRYJGrNA64zN6jrbrXdpZHyUm8LAJPjzjwYb5pamh",
  "key29": "4Ki4rs7igNXDcnBxwQVVeUpLabtVKsQ3BsBLMRxjCPHBhxmnaBNXpWyjNHB2Cdf6DAFQUwu16aVbPHUmNkMoMm8v",
  "key30": "4Znbfe6SiAkJpFCpDP3G8QFCdviuaxymo6RorQRu3uWAJeCt19UhUbX9VAD1LcAjMjCy1oLMm7kPv5mKuHjVkcFx",
  "key31": "5dur33m1cficbpp4wsGYoKMXKmM5XYVy33BDsPLX56BxcD2FCfeyeNc3g4C3EaApCfr1S7eQ7rWSF1UbCJRnEaUY",
  "key32": "uv3B8kzDW6BxfgwJ1DrEDnfbbAQ8UXHufjr5nHtDQmHXFT2sEj6TG4Cm4ga6NwRgrKifEYq96BkXeJGfJtQ5Soq",
  "key33": "3mk6jRhpN1bfGXYtkRAubjFTH8fkKb46bRdiJFe8S3o9CPgS4cNbSBTYtdMxaEpDNsQGFi3HzZXbd9GqUX6ZJcen",
  "key34": "2wLiz9dc3PDmeNuTHj1jH2CBCHYwqATrQeQGqU9WgrBx3zQn6hSfU7wvS7t53vw1nyHeQsNUgpe4R3SmqDVvymQr",
  "key35": "wjdjfb3jsRN8fz2UavcMXvXukKgJhjxvVQqE919CUmhPdrh2XF4dGLqkZzuipC1uyZkCteZAEPQNDziR5fBNZJ9",
  "key36": "58xrFSvXj4X2L1xVA4EeVj9EJ65Uf2jUggJNa4Ro3najT42ifyoZrJdHFAs6MxRHxu8b7ukyMVefYkZc4ebRpuo8",
  "key37": "3AVS6nvcF61fzx2eEadg7Mc61rAs6rTkN3Xu82mX5Luh6SkaLbb7EAKYLgiFTruqFTbWKKaKSacdkcs5DTSR2WW8",
  "key38": "4f5DmdZt4K1B3VU6QahcZ5hVRkYBvwxWWq3AFYUQwSdfi8mREpjtoaKZbhsdts8tZyQ8mgFngSm2UtsYjpzpfs4p",
  "key39": "hBBmk4asetihF1kCisD9mdYLDcLAKUa3UutNXqhu3tyUpQhVcbJWhxEC7yaTvvc4Mu3MtMT6MLbPLX16Xh13Bdj",
  "key40": "2gsZx9uphb2cT2H86yaVri3AjYGLVdrCdypHsidLaVQm8oYesCTb1hhwghwrFh1xJ11YqyK6kKorf1kcPPChcD8o",
  "key41": "5WwLWfNRDAGXxDpQFx87sFWg2bRxzpx6LK6NtroENuFXjCNysCGEqvjPKbtVCEfFxKKfPWK9PxqyHSBNfSXoMj8A",
  "key42": "5W4RBQJ7rNBcZhQ867HTJkcXpijmzrFfLoNxwHyHjU9SjXgNPyWjUqtWq4u9HGLLTSsthwTd4tvvoSSsBi91eow5",
  "key43": "4qaHA9LYRUJajW4h9F3ViLv59mM7otRgi5tBRW8tdDeSjdXfzpTZtBdHZqqyzm75UtzUGWD4C6zYggrefqMn9J6",
  "key44": "4u59dKYfS9JiAzaU8PkmejnJKeRngiMawmKsymVATSU8dJ23ZzpfwqZHmqjSNqzLeELh5LCbHXhA4xbdixMYVM3F",
  "key45": "tcQYtrz7T28K9gD2an2kwZNuSuRZGRdposnt97ht4t35q83MiKG5rmNkrHuD7TDQ57ftcyc2V6Wx2RRcskhoBCw"
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
