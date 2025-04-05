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
    "FZRJ3No31FCpDqD9VdtUBR3VpDua85FaLVhWarYXvNQj8Ewp8Nh3yb6M29GDwgdCyJA8nKfPNLcHJwK8dWf7nXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EYkSv6u7hsv4xS6s3Nz56jc6ZwVNVCS5fTiMPN1mBbVEoYBK3TbykyYxBuJcR8SMD3oKa3AGbZK3MsnT6JB99mx",
  "key1": "UN7pc4MA87BFfyxwcDP1Qx5Gko9KR5zMoc8DpDpbk9Ha7WvGdio5NGM329J1KQ3Dj1FXB3e5WJNZ9FHGRrHuHWH",
  "key2": "3mnVLCpTjwGNpLkUMD15nqZtjkQPRsQR6gnxrPrKhtDGZo15DAR3DftMfzuVNSXKEtoxDT1iAfjDs4pgeVTi71Wh",
  "key3": "5SGjutXt2SspEMV1rRBc56VgKjTPomJr7HjPtrzt6eq33DRQVndXoAK9UFR3Z5dswqhRxCV1sKBGXN55XwNA3Loc",
  "key4": "5CtnuWoBZ1jV4fW6Vc9DzSPXUh4ocVoyRhy7q33jQ2Rf73iqrqY57i6APXRmjt6UZZHEhePjD5k7Drz4DkNF9XPd",
  "key5": "4k1fcPqKnpRU4hGBUBYXKWkKZWesmxiAjHwbuzLp12x83ydDL4BYTCwDRmQL7kk8WhqsP2hGpuezWx3TSUGsXSsH",
  "key6": "2Z158Cq3RbQR5HTtLyFF8Q6DezYj5fNJbiTxXko6mtbMCc7G859koDz3s52PX4qUPf3W8K9uboJ7KjDzgZvMnJ44",
  "key7": "3q4zhNzfnNUtu7j76V7KgLdMS4zkhti1H6QPHhrzHbhfaE5gF3MvrTW9zWmivj72PYevXRZAnmjWcgR8rCzvWpSG",
  "key8": "2NE4k5Z4QxYXKhQZXethiMNqmvtJDzK1JcQCBzEkqkyM8h8he6hFE1d4kzHa6ycuLKpBbjdC3TswThnomXbMYN8D",
  "key9": "3b9BfUP4wNMiAizLsKfXdQc72e2nX8ibYik3fhNSUNQTpa7rz223rGHwRp3ZzE85dYE9nCxwn4fALy3a5ENq9EN8",
  "key10": "5opazdZZof65uo19biWaxBgACz8PtyTpHjs35woHieWJMkoQfdjTS25C11BvwGkrhrMaNNgHBvt2TiGxADsdz9Zj",
  "key11": "623cM252mvtybs6PGySAFLH8FjxbrK1CdG1VsjCN36iMrjDTAaCE5RRbHByJsXuVnByUvKM5EJTeHknRyDkemJRP",
  "key12": "z9JLdL2cd5RnL2E5jFGGHFwr7g833YJfKemz3XcjVHVCcRH3oCv7Ppr8Age8Jpj6YhbwuSA19Nu8a2P6yjYJqF1",
  "key13": "5G4WSm1Uu3G8SKbX33vinpXK4SpBr58UKPfKCHdcPYx1a1MRDfante8SkMbsn3V73dBXf7LfGKUQNbYvhsC1TnUA",
  "key14": "vH4ZikEYGKawR7MYzhJJGmdCj8ss8TYjWpFcNaE1sqSq2vX9DrqK1XZCAFi7PvqKJzh5uphgRVG8TKXJXQyJh5G",
  "key15": "ZXW5Q6BPQ6chBjzJ7MY8VouyvJifpURZcVAXSiMDkYC74EHK1MPMwNJBxTeSjy7gxf7qFcfdNdQqXUfhDnPcreG",
  "key16": "2XBWtCnUBpHw4YoHASvMFVSUVdXYXmsdcGBGQxk8YYzSGNPR8DnJt84c3akhzU3dWKCt4XqRLZ9AMJVf1BW9H4UR",
  "key17": "2XEd6LjJEuRDu1qRvBL5oNvFizw7oPDKoH3niSYKGvMqfQsMmgYkzHpQzTZqNnQvsoCUCwQo4gFewQgWMHqYsMt7",
  "key18": "2BNWXufosUUMZ169bbGp1PtMQyBKiJ3bvi7KiSfgwpYEALDoBGmmu2uVryh5cNaV3NFkf64GpgubBqAVRBiYv9oF",
  "key19": "5JZJnYKUct6v6DnkzFBp3fHg1HUerHSJB8uQesPyRH9GKJfe92zpvncwz6XHreSZWeRc8jjXGSxPxZmTu673wQvR",
  "key20": "43ieZL4HeJRG1WTUrCHBJdD6eWZQRFidj7cM9YMohkrobyzmz1936tb1Ukw7P8cQXvwwpvn1M4Mj2beumVFZCWGX",
  "key21": "37HXsfFgRQgP6Pa6EtJ6BmnspKrU41vuqTpRaxSwMzjSnDsPArz8v3PfXVXavnxxjvajk995BYFQja37cdNSy698",
  "key22": "SnLYjKnwVBe268eZ5NGhuoSwNVfcp4Y7NzpFp6uft8JEBRqK6LtfdVWRPx7TPogA9dmEGGviXCcwTggrCkMdDSK",
  "key23": "24nFjK4VizasxCdSNEJixEY3nktkfoRG2zJ2f5NwkshfANAiRtYunRekFc5MKa61NSdJvV5r84vNwDmH7ziMTJex",
  "key24": "4HbtmRM1Ns7jHtGt7MXrRCTGMJVPBbpmjATKDGZf2qVAquS6APRA9kcwMpdaBqr66q4Q7YMPgJS74jziSmYGwX5j",
  "key25": "8uTcocbnhU2BuN1epf2aNCbdwvMaUzbQquNREsgVSARwbLJkqBkDNHmL1qoYsKjWNnRebcnHnSDs5ZoDjXYVmTb",
  "key26": "dtJdALcLPF6nBxdVWZ9JfcTXWMZqfUBqLRoVnugRfaobzZt6trwnbsvrHocyMaXycEku9NPLQ5Lek5WbDfqbH8a",
  "key27": "4khgWWgXC355P7moXw2JrFcRpGsgX1UabcZktQPKRWfK3Kjq9cDg4jdTMdPbmUN2xaeZTmRCakQ2SQmDpgmHuQj6",
  "key28": "iYBs7Fcq2c2qMfFX1sN3qRST9i7x38CALnv6VCTgxo5qHsN5KPbtemPtLfja8cmkLzoBzqgUKV2yTJ954cnnCZe",
  "key29": "5q4MVGdvqk8RBUpazZPBZCZcFVgn8JrzrGUhamvYUBStRBkqBxL8HJgotXT1p1FUMV8bCsDisX94wDfanQMdgNsY",
  "key30": "5h2Yj5mSBE1SECD9YzZXLs49D6yUBYhsDbbZgdi6NUpXk3MBdhCy68xiWGV9tK6sbdXnPy6ZfwkJ9uGBvwYkZD1T",
  "key31": "rc9h5gEXXZyzFmUnQkpXo9hPcLNS2Kmr9hT2zbNWqkyTwPJTHmYCxXqKP8yASFunuTjBhgT2qPQViENwosyBZGs",
  "key32": "2NkzCv9fvbyCHAiBQbEUNM9BUBaF68vDoZjXNK1B9PRQLPzS71JQE2PftWfvjSu8n3QHK2o9GCo78cPyTCkanhsm",
  "key33": "2Vi7pgoHt2RskAmfrPji4WZSMq7q55MFbnTAjWCeWcAm38apCkwnLokTsxmATdJFVscwUQUTZKJ9bzuPHhNpFmAk",
  "key34": "5eF636ntzdxbsu7FBUbHzjNGn5Wje2XZkZyeoLwktLe7sJwWXhQpWb8PRWuFFXYDxGpqsXuLKySqY5gf7XBq1fQA",
  "key35": "Cdi1XFrxLE5tQH9bfyd955vELyY1yghkGXKkZymhqEDJw6DvVfe1i1XkDKKkvFfztNo6XQDRCofy2dHC82NFE3R",
  "key36": "XPi38jip63sm2CSttCUxiSVMJchpRgnSXY2TEm1pv5kBtGAR196JMnsVKWjefDiLS66dhsund3xcwfLbAx8voeS",
  "key37": "5ifrF3MED77wE4QgN9jjtdQsuJ4wKT7uxyYj7JcxbzhKJYo2UCteheQHXqhK2F7qNJAvM9cefatFhPAXPN4CdUop",
  "key38": "4kRxFSdAip54UWXQTkPb17uiPxJstsMdLFE92JKT2LEdt5P2abwSzBdLGEDrPxghUqMQNSgPcuZTuLCgnJkw9xMv",
  "key39": "Z3vLD2U3fJADivKpyxAxmy4EcyF1LEwYK9mbSbsFd7evBs1Xh3DYNQgeva11AkTa8E4oLqeGDv1jXWvnSPzgGsC",
  "key40": "3oJf75L3GFJ9wDAeuhqz81ocBX5ARtMb7VF1tfBHk1tyHYCvoSUfCkwDdQwuheBxXwKd1Bnu7ubcVg5S2joANzyT",
  "key41": "3Sm8ZSsRF5DhBU4JKYbtaQkY2gc4ZSdrzscCZd9DyDBPrDdWxf2VKWBfv2jbqGVoEUEcCPJCL9gMQXxyVL18dETR",
  "key42": "4S1bvJG3q9e5evpFJffonLhiTkqDXrv8NHgEiJfxHaEBqqfM6Db21gHay45sungB6CyzDFrVfBTjRbqgEh9enayd",
  "key43": "5TZPKqmAQZBGbRuRetQAwjwmBbymxJa9vnFNQr4F15g5Aq7E7sYhm5ERTbAdPi1cVAEVRZNpYodmAeGiWxH4N4ks",
  "key44": "2PU1rovBSVUYmUa4oJfkA9hgvceohTwfUvg9BieEXuXMgCRoZoMstmbcKvpLZ8659LAwbgpFZT4RYfP9zQzZWx9c",
  "key45": "2CwAPR8AkSQA6UYbFVbY6HhygXCirP4HZmRhyCDZAvcxwZi3vcZrPGBy3YQy5urLup7qLnLKSEfokFZQnSUpWgyg",
  "key46": "4JW1TY5KQTEwFWDmEn364oMFNDJ22WWt5dkKhrVRkFA7o2rt1Mg4NZkyZCvx4RCquf5F6kdYRXPzAtkGdZyqU4hh"
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
