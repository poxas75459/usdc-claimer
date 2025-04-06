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
    "4m4HKq215K4h3M2dwTrC4Vekzq1URbbe7vfy8rZn49LJ43Ex82LVGqZuMDvBvztLyFk2dqS1pkWPGru58qdxiyqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zHgHkVUA3HZoXHmBPRCjkQuaMBdjwPvys5VDocYfTics5FkgsatziNkq2GchyvCr9cUNtmT7UJ5iSzmX1Tz4o75",
  "key1": "4sN3buxp9kCuih9ApE2kRQo4sni61Rg6cJbkxDyP5NVRme4eaZe3Fca7vFeaBMvL71DbVDjtEHSX3FHAvg3uWaQj",
  "key2": "3aQ75zjPFrvZT8bmQfFo6EepJv4wJnYwweFBXp1g77rJuxvbykZQ89wLteDxcM5FD5Zh8tVC3eVPrbWsZYruCTFR",
  "key3": "2tuznS84N2VMnm9vbN5vv86dCpsbn1LfNvYFxCDqqHiVoskREHwCHHRv7oNJSchnWUe2iYuDAK773eiChVz4KCzD",
  "key4": "2VkJFZphbkGwnPTALg3h6mjYC6BcAo6H6AU2X38daFjArNN4Ttvd1BnxdaKeazSmxJiHpuFExGMAuP9W8GNWhCaD",
  "key5": "4yQtPzYBJb5WmL5iD3wREX61EZNSdH7jzYjQAQi8jJJztpZUozhozBZtioNMtzRDiyZjvS5m8jC6siRbQRqBmw2R",
  "key6": "5zMTPNDEfu1vN8msmkzJ4mr7aaex57c1gzELszM4AGwjRSdAEod3V1jnPE7vB8JzNGZ5o7rcF1EoCYUSx7FkhiY6",
  "key7": "4uPVmS1g8sGgWnToUY9j9p8fk8BoHnrEK8MZMM2g3McaDH85bZUAtFa94pGmNZSn7dQeeMjojYUmzFTyCtKDBTEW",
  "key8": "5dRFbSjyjVs82jHADg74SnxjzT1G1sttGAVCvRVkZv7dE5t6GbpUfbTERuao4dKHG2C2huzS5PvPPnthg4rMowoy",
  "key9": "58ZFEfvFoHnRCYbv7NnEeBmbn45fCBcteWWLJkv45tcKiZ2GPmhSAsuWoEHxnPeG2cu8YZyQhQSKeyKdNJaq4idY",
  "key10": "2C43TjEJdv9YYvAgPemL2mERRFn7GAHAmHMp4rryo1J8htv2fcPmqDrGkFQksq4gKNedkq3kJSpzaeucwFg9qNmD",
  "key11": "CDunQcPmJV8uWGP61hsSKrX9M1f73HxHeNN5DuGjGH6DvzST79acei4Sczch7pCStJJFB49JgLxeKTwN3fbC6SB",
  "key12": "5qcfzTzVT83kukybM5AVk5mXVNzwgJnaPKp6zQkzoCUPDPWXBLKY55ZCUZwszCrSVwDCUWWYMvvafaRVebmwbQa4",
  "key13": "4gLjTzj9nnxFRhgF3EbrDKmf1258ZdfKwdcSjNHtTySqWddKBLe3rX93PotVkZGNLJDhsRPKpzXz5jNwKAxqjVda",
  "key14": "5Lvz51WKMbyk2rP9CBqV7BM1Fq7TZi1rf5vVL2qBhGenUvduvewNiYd2bV2XBA6zi8TsSfiWgDjW68Jz9xUi2mi7",
  "key15": "4gbHi5vxy7MCDogPdmiy8uSjwFFU2rRnC3KY8CVLHYMnDA9yrvaHKzfASnVeRHJQPDU7FgJNem2renc7G3SGy1c8",
  "key16": "1ERae1fod9RZA5nBTneUB1hSf6k2kNtCAqsnbu2uY8RzCsjmcJSPWF66KZbkaHQJPJz2GyEin3tAcytjVnsmtVL",
  "key17": "34RFHxiJBgzV1yoXR1ZNjjn8MtdcabUbTcTHWEXD7bkvNuvmzWinVr6x1G1SFGMG3xRnGmPH3tBbesycKg9XVVtY",
  "key18": "4eofyW4GKNwSAZpzGW8FC2ApN4D5KNMcY2fbfyxsx2raeuVdSLLZ1XUvNtvX7ha1HbQTkMJx8QSLrjPnxa5UMzm2",
  "key19": "EJuHxVTq9mcfQkG6L24beGQUwpwKju8KXEUqTiw7PvcafufHd7MNDN2GWeXLGGrrmnroUxogUo3QtndNMZLzXYc",
  "key20": "3sk47jVhpXzKFErXnaF5QQbESUof7YAJycyguRpu2bWkkswZv3rHWKW7BdAMeXg3m8bnkJBDKCpXnGWMudkq8XTi",
  "key21": "4esKR47PU2KGCXxAwMxivV6jHzsEZbU27T5C3MDTJhcP12CrULmqAF8eS2PfYNku9Gj4u2JW9Hby9tS4rBAoFkL5",
  "key22": "2WLy7c3AK5Ji61TiEDRbQ8K4ykxFKEhGp9ACf62YyZyUE1LW34RWVTDYpsZUrMKKGoWMKvT1fbvD1WhGSyDx1QHr",
  "key23": "3Y1D5ANpvJCWAx1tRivYzispwm9jyides38z8ABc4AN8sxUm2Y9BKssUxkspPEBPEtFwQ25Ko6bQVMX982TaCZbs",
  "key24": "WLaa3jjcWaAMXAeixJTpN3yUwP6MvyCZsqUfSFtCW1Rg43JXGdjnVr6CAh7HUda74uTzgVf3KUFmqbMB6RJ9Mri",
  "key25": "3jmiP2Qt1rWFkHRZLNyWTreEBMn9fb1XTDBqn69hqvkUhK92hYZ7bSdzefGw81jqy1CGmr9jFwLEC3QNewwrkwj1",
  "key26": "67UyE6AxCSd1QzkYhXYo43PeWAPGorJdvLQQuM2KrHqqAdBGRn6YKs4EaqpVNchbhE6xaxtgZ9WFzN13zg4une4E",
  "key27": "2twsBXvqtPtasVaG9MxJcRxGPMEU4buWpgvdQr98HunXtbG7rqNhL5wwXQyJU7WsJj9MMvBkLemszK3mLRRBR2TC",
  "key28": "2DBopcYXnYjnQuCLpbn48Rahzwr2V3W9rc6846tmKmkbjkRkbNwWjTcJ9bJA7KiyQdtg4vHBYA1kgZemAcjKsvqd",
  "key29": "4jLN2iMV3yyNPZzmDJJUWzZkj3MZnZDgg1Ys5nBLbLp2eydEZmYYZDMiZnMuJX6AARinsNXWc5dUSD5NQAyeq5TZ",
  "key30": "4xhN3sE7KJSFGtLR7FAX82cfSTnHdKxBscL9Sm92k6pjS2xU9Uz2gSRUt4VzTAdYsve4U7Xuwzctv4aQocyuo2G6",
  "key31": "47ezeJR1mZaAUEi7aQsRdgHVhu8fWyreYbRLFxBHPpFKaiLXuTxp8y92GqRNpt2CAgw2P95cJvrBFHNwfCZsCXQG",
  "key32": "37dgMfmQ4XmnhjicQcNdY2VoJBHL23AatiHruVGpGGYS3QEjJgDGBMVoAyuwH2452oSEk9FSsyi5jQ1oxyLhY4Hu",
  "key33": "e17rMPfphGfdL5pntGqqfqnh4U6BksUg4rs4NqzpYbQayw4sHtwaQvPBbcstJfrWMeUcjjVJnjLaGpYFEtkSpW1"
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
