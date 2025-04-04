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
    "5tZSBm3NTcFfhDJe7yDLwAH6QtSAXGFd3fZt8edQ2VK1u4EVSraFETkAaWir3yewSVQztdQXdXcGEfVHCGkgdjtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E9NC6xp5SG3BfQnnGsF8hE2fRuHYTdaEP2TDCyyrD7nuiKpghYhPASzE3LXez9Kw2vUNvmA5W6Fe2ZH1agr9i5y",
  "key1": "U9szg52sQuVdtN51jCx3JfKKXNKoszDjBmCDjSHRMoNgEnYqdTzqihu4Z8uKW9otmhWnVAjFNybZMMvRGsHqVi3",
  "key2": "4DVVv2gZy4XpNkbuB9RZyJqsbT4syfjUUxweMQ4Mc1qDaVyKPuft7biLfBiKfYNEapPdhd5inGpvjvZrTAXS9ZTf",
  "key3": "619m8YVGUZgMHhCGt31Xf9eShSWGmSXW12c1t4gT4YGmNoAeyqSZNjoATUHrLMxmyLaha1ut84AoiFw8s9hJye2q",
  "key4": "3w5pE88zddMfPzWnTPZB1WTx7AZEPSfMQsbtsNYD1M323g7x3PzBqMGZTeTQkewRvpXVGArcpuCQpMFgEkqJLYp5",
  "key5": "2G88q3XcrYVzG9SiWe27AJ5wbKNVaDZU4PjQdRof9cDLEHGofhGsEYj6goG2vyr7RBnPzm6w8xFMQmBRTiZYYzLp",
  "key6": "2UzQYpufK9Zy5Ma5ruA5Lb3g44pE7kC4ZPAisge6iveUGPKkEuznAAN9sNeCbomKinySL2MVG7CGv2zJsK9A364f",
  "key7": "5B97msKY5hFTy2KM2A2SaH8CE2UWyKhPjUtzv3KLzTRYMdCuc2GXYBeUKNi65wyjHr5chFKyAd4hXSCJzgwTTWBK",
  "key8": "4qpBTjdpkCW92Kxmwc8mEXHnR8xvJYGYQAcqrEhDVP7bXahnh628U8m9gJnD7Tc4ivMS88szGQcRf2t3LWgD936L",
  "key9": "33UNqDY8qS7drFFGhTzR8mVr7mJp7DL5LFNpLMgi9n5urgbPFk3kiAP5ipAUbL3xV1xQPYCxciiBejPJ9ou4QzDU",
  "key10": "CThiPMjte1UT2FXdWaQc9mvysPZQQJUuw8j8eUPq3BfhffwcSt2qDH99icFBJm2ZqGZwdvC7Vt7JHxW42MjyguE",
  "key11": "27JpUjDqKiZh2pZnLoAvc9PPNFw2X6jbj2Taob2vCCat3U25rraqgNZ8BZfivsP4UNWn748xArcZhx6pCFMHCnd2",
  "key12": "5UzPGce6jcKz5JkLGgAVBGvY8PCVRvz5CDGi5mwNaqpAaVToZDCMw79yVooKckBcCHXCPg5sA5d3sGpxUTTixhfg",
  "key13": "3XMxfNKCekKFxAJqLpbhtnkVWPMNxayMjGUMJ8gu8gHoNSwpCd9Pa3XC98LQkngiMR2EFFgKuSxPNs6gXbFJ1TMx",
  "key14": "3EAs9Y4DxYVRFw7wb4WLcM8MZJ8wK8wDyx9AgdAQMvUXpMViJDRTMJ9S7RLwkrFHFA9dAatPv8AXNnZeoLMTVNZw",
  "key15": "3F7iJSDtAbqWZiEzka1jRo5DZY2GTG9nVrTiewAbrrJ3xmwr8qTtxs7yv4U2bXsMyVyTiEtpvuJmiRmjRQvpenTL",
  "key16": "4r821aM3uVeeKdQdpcUfHcSha5HCSqYY9PHoai6XMtsToRmHKRh7Kg1umzuCa7b6aRwdhcDBNc6w69VfSxCXLUKT",
  "key17": "2Fu22UFt6aZ2JRCv1Pd4Y5jneYP8YusCEtsPD2svXuQPnNbnK8FADigdaZzxY6DFteXq2cHUXLiqTNFR98pC2C5y",
  "key18": "4dKgVLU5b4zqHHdw4quDSqtNqevqAbazXTXRz24D6yguPrAAe52GMrWy3EbVRbXg2cwHLxB2fL4SLBUjYoh6f7be",
  "key19": "5mCUNto6wmszKtg6ubw8F3nCcrjRoHb19Dqfqca5LpYamygXPsR5t7pCrgt6VAt94kcCGJwRmQdLLeXSt2CVjdDt",
  "key20": "VogdEd9Rj2r9NeKWzg2ZWENaniyV6iAGhPJaah5zg3g4YXUGY2wTHbWrYyJJz6Ugn4W15UC4BMNbfUG9Phw8ViU",
  "key21": "4H7ZJusrBrUMnq3yzfsBjHiyMjg9fbifqPaE4nbPZb477FhT7mWuTgcRGW9oaiGuM9jgxzQf2VSDvMqvtzgvBLYn",
  "key22": "2aY8mAnVXHJrrmUUcuGnN5WWTkaAuyeVVAscbBA2HmNv6zuhmNugN1c1w5iCN3tQM6Zw8FyZhafLr4z26o2PuMsx",
  "key23": "2281nQPsabAM7RJEAvNkM5sa732m1i2VbdDYxGGMfoVbbTViX2CJjSQmNSjac13fTdzSfeLPM7Gysxu8346Tb66v",
  "key24": "2GxGy84bgN157jz2tukWpKcQNRxQdGZ5oizwoZHqrxRTtEMsf6zDmVXxiSBghN7ZQzxx8JyR7HQ2WUm3E8UELPQk",
  "key25": "87kLrHBUiQfhZsm7BWDMMXNanrp8qF1KAvL4scw9RJQEnrc8HSDsmhm5oxotdLx2VHBjELtzzGgAGWoNFAdJk3J",
  "key26": "2r7oyvRG1sezJRVwWbAgrYerSvxkWYPrBLyzofYptYHEyuVnCZ9Ct2BWuaDCN3GwBXgPKsMZjnNCwNXdzUvZPodg",
  "key27": "jzAkR7MzhrmoQXYFALgfUWmCaBGB8EkKVp9RfoLfHy12QUEM5ad7RC5a6eTqMdM9rMoxt3nbauA33xgDWHamk9p",
  "key28": "4wgZE5tMGnYPuY4wUWrRRhjvAnP5WiaiNsDV6anHG9W7Kfa5hAoMGivrcRsUqH8XcNETkbTMpnfbmEmxy1XoENwU",
  "key29": "3rdeGqToBunAZ8nMW4MVzvZ86WpSKQvPvNR8kEL6wbPisq2eFbo6bspLD2epFLBCib6i49ruyR4kY74v7GG9Vm52",
  "key30": "4Yrke3gHgHAeKXyU3YDMGGhTEX1UrEbjVYBiPzeK9KQUjj2gW1sH3bpHrvzkiLEuk831aQihxk7f46YLTW2Fu2yE",
  "key31": "4zzN5mJLtPFVn5GrCC6bACktYzXvSDCsfKQuXUEz1ZCAKLHza7T9AnzY5spfJX7vVBHA3jyuu7i1LSWey1UyCsfM",
  "key32": "4Sb4B5gpsrEFmL3e1vU1yRoHfyEt3Qerpm9p48QY8tNkVanwvgAVpGFPK7Fp2EAwqvW2QmLUApTJPDGbuiQRucvH",
  "key33": "5XNZDG9FsQRaatuodGjKgUBneeNjXtGQKJGkBCnUDhAGhsABcigGUamjpZnwoyBR1Pz5HvW3oq87vpyAMwKWks19",
  "key34": "5vr1vBwvYYTXfVLV8RewNehdMb8FzChj6koBMh7fVCHFaFf4v3zBCZ9yGqkR2a8TCEB872oep9YoBYt8giLr4jHh",
  "key35": "4oVERLkSqMfsw4Vc4pLPuSgEq1AGyv1rMVqFH9fzFxFVP15eA1LmdUB5HYySa2s2wb2358kHWFKwM9gfd1qRG8i5",
  "key36": "5oTEsPdQcQhGbn4GVVePNVj4Uq7wy9HehGSVihdyunxwMreiefoQpHkDfUqehLmAbabsMy45PvX6m4zk3Y6APr6B",
  "key37": "4qEFKVyxEHxcKaBceM5mi91wFVSNqYe7Qopiz3bPf22Vrk5XvrnsHT9TMua3jAdhAaS77Dzx51SpsNRDwMRmT65G",
  "key38": "26T5cDtURaTwtiuGBRN3diRWPuYZXkL3ARyUsx9vSkUVeVWztJkyHwR3hsYD7K1AGV2vi4zMpG7yd8SHNNdQrSvz",
  "key39": "56mYGbz68MYTeXCBiZyiDBVQ2UVhsYjaUwThWe5BLbjfFrZ7rbWTAmiwj6oTfCN7AscSVdfiMZYSn2mQ9BZYUgGT",
  "key40": "4R1CHfK6B98XwjaErJ421igTfDvVDupmNT6WvqxBziLqLnT1221bgSXHZ3rNn5zjGtUDd9PqeNDzqg9McNG585yT",
  "key41": "emawM7TbN1LuVtiPe5tN1tBqY69AwoWfWW3xCBrn2T1fcqrPSRhjKWAwEeRWyW7hiiY7gbzJD2nmNgJRmH52Xoe",
  "key42": "UXzsVuVwqKV2XUscF5xVweCvLfKuNtVreKpnCSWd4K8ENBgeSqMPSXu26LrAy2JY5arjXMok99KdbTwAgu5jTBW",
  "key43": "CQtbzyR13x5NRFpJ2LFMRndCQE726Z13cLBwaTX8wjoXyXxVZExEkZFjMRRURzdwvTbh8mqCCUverjvQNMhTtcb",
  "key44": "2EDvGqJzuGKyRoRAguErFAKrBqK9aLr2Vidw9EAwqRN7qaoXitTmvUTSWpRqdwYXqdoi5xFvCiFfCEViGxboioEK",
  "key45": "3pFZsSyWNufh3kRUj9XBLrqP2p9v6naWGQ1vZs3iJ4ejTX3Jt3WwWTxnB5iEa8CzaBgCxfFz1XbpWbHpq4xj9uDL"
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
