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
    "5GkzubyEXQDinawyoRCCgcpAn3ahTpVhnhrMnchLxYqxY6C2phBUxYWJts65iJFTi8dJvBkpyQ2X8uyxouREYRKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o7p9GgnExxs5uhWMdkjbhUKzvJuCFaL5razHv2n7oexJyjgfrvRYgH3EvyMx84QHtuTaPZok8JCrmXLURvBdYj3",
  "key1": "jXZNkk363tZpc2BCtbb37uXjVhmAq1tziEkrkSZKfM94fui8uW69m5ZTHM8iAuTW6gLxmRQtaNdtCd13jreWnim",
  "key2": "GyFYqPPVtqwoHYkGXLtXBprCeqzeBksQVZZUjzNs7nBJFjQjmLNcD6ELG84UWqhBXtopN7JTjus36yGE5LKwmzJ",
  "key3": "2EBf1v8jnBNFfaJzhvuKiFj7F5oUHqfS5ZB4tD8s9yooUkasGRzEE2XEJ6YGGbhadyQVRkBceXnU9GWjR13zbKUZ",
  "key4": "ggBmJz6QvxfApGXwvsiKBbth7H3f7J21STBqurY6sr4UPf8DwXvyuCd1NHJvMrqkxj7pU3tJZQiseZ2NnEWDp4w",
  "key5": "4tzEikBcHmgnPrppvbjZ6TtZHri1KfJ55edFS9HdbD97RZLGHTkgk7hhDPrdop9USTv5uLTAg7FVqL483uhg9dDo",
  "key6": "59KjRc1EoPMYoiibMwY21BrY8uSCg9FywGkk4HvHr5w4AW3VZZc7TVXa51kLnhy9D4vYC622YssqhKJHXgX5iReb",
  "key7": "F7wSUP7389wsfzR2CFjuTeuQgTTKvuPVcnEUCYKFcCUihvzzqGK3y5age9b571innYTXVwkG1ysmZJ7WHx2otv7",
  "key8": "3LMXvzVcDH8bP6Ss9cPw7axo4PBUTwUj4QSYVz3Un6AM2KVF15pVkxKTUYWGuDGzc5hwng2Mbc6o549Y7ZL6Tw1q",
  "key9": "23tiaeXFEHsDSmjpUB5wbAM8PQg1sMWX3tcaSASryu69B7Eh2ZbMcDNF42uPa6R98uLHrdBSCJaBpeUAAYWpEBcs",
  "key10": "2Xuj8Bna8wPFsz1rimSRm2vQNiC9tkZvPWK3pdyXK4dYs5WiHUEKdG7FekU49bpXTL6aDPM5UQ3bw65v69GquwhL",
  "key11": "62nEyAes5nda2GKXmsKTsEYjZZCPoKtk9yhtTQTdG6KDGqSaN1VFgHPXNikHqmLqA3FC9SBkJrpjDRdLchDtx11R",
  "key12": "2fQHzENk7MHHmBzBUVKJJTHiKUspY5PCCmdwhGYS8Y4MrKugtgVguRLeLu311n9oL6i24JxNoyz6Cs12Qp3btGSC",
  "key13": "2JfVF8811cuHPTsXLuyUAc3hkEarMWdnqNQCTJ8GD13yUnKzeSAeAQALX1euufEiEFb9rSSp4s6zMV5YbgxXFQus",
  "key14": "3Q7PWanNcg5taCiHBXsWGGEmKkq41bD2fVmm49gVyfeHjQhr38KqH6QLh2XDajiTxumh4jup5kaNzXFf8w6jUwKT",
  "key15": "2rZ8riYVWoxKtNbhz2SGMMEgmybrdHQ2GhxERUEmji6eFsDmnxxbSCaVYwPjS9sR6kADQbYfVmJMuMUAQyYkwNts",
  "key16": "2bUR2VGyaKQqGqZkVhD55QiMEcgW7TRaM1vLrgT5AtxLfpkniLFaQFpsAEbjZBJApbpck2aWpuscWmxSSF616na2",
  "key17": "5RKAZNiqCJMsi7iL5UQK97mS9aseuKvbgRexLLykVWTnzQZgBRs84MNFs9MkMeMAdWmVdZ9Gqq7BjTTH8LwpyzW5",
  "key18": "H9KRrSMgndfc8ZUeBEcJZ66qnFG718tT9pBiKpfBjMJCk8F4aTEYdh9qpjZMkmEemtzaqZnTaNavJai1MTaqrpZ",
  "key19": "38opDypQaJPN6Ayby9XZ3yck1CM4G4Gj2DDcvyUmfT7vyfwpccydqG386kqgyWnJYEm9QS7PNqGmyQqTaDrAfg8e",
  "key20": "3KUs1PK9cxqW5mxjb2fVxLC7mBr22FyMuyPLL2wxqw6Yjfo6tN7kXWJj7ii5so3aH2uqgzQnkxTdRfZ7KvCscWow",
  "key21": "4bjxZN2SKTYJsKjQJgPzT7DZvnujq5pnG7iW5uGgoCVbuFECbpTaUiBKN5rPVb51FjmcEx5hbTyDRgBoU6yLeTBf",
  "key22": "53JpAkpEthsQkTB2KsZPZo6SZHGAR5UdvqC1kYwJLkz188bSbacSZzrwmHtx718aUxf4nL17G6Dq68BDCcMG8ppo",
  "key23": "5ZAGykxk3Tn52Egj9xUJKfNqGMdC1GhUpfW8AWFBoryedZz29AptziEwbwcWzspb4PjNueEcqpPHEmf1LWdLFs4b",
  "key24": "2y9GiigXVfkLhqfebFmPpeZiRe5kRhKgjEt4vqpc2KiZ4XuaLgCH4o4GW73RCYPAbF2F2D6VLboJsKgHnLL9jyfv",
  "key25": "3CDjd9PoQKqVYxPUvk5B4pyNLaRhyqXP4uGAWrp1k2qzZuNrrjgkXyUuyBJvCvdnpkHBY1cNrrd5PEPkfnM8sKpw",
  "key26": "5SbnMTVPQ7k2ifypvd4CHLoJjjvi1CS9rM9rMDcTZsR35Gs2hoknje93gFj4ZHtj9fyXdh7HgXoRWHKLQCVxSMV",
  "key27": "2H5v3F6rvEjzFHrFWDkUarmzLyi6ZFrzr1oZy3Y3J4LJYfuMUuj2nBfz6UwhFEjYhbio2LTjAQUWijPyeU63383d",
  "key28": "4PxNjuQUBtj8PD9cbZLbDfQqmAmnA2NqbN3fGbZtQcbVx3W4cCPeK31kTFFGCCVewn4YrMqZgZAdfQz4GbWpXYtB",
  "key29": "2s91fW75D1c8t5rjenwnw8PHZtwkactEy9QQiiZqfcE5WApUvYvZ1h4Vn6o7A8E9kDzCiYWkHCw7nHaPv7caFbh5",
  "key30": "5ukZNG2fCSZZc6rxiTNJwGSyqF6VQaFtC1VVQPprb7r3FurBBVtvFGEJjx4QDG4buMmSqkDJEeZhWb5iTrGnQhx5",
  "key31": "3vayToE6cbsRxdzn7VGgXMeMYbEskgtGVE2JJ9ufqbmpMTUovnnnA4oQSr7gKeoLQsxdr5ZmWtqj4UaVL8qeFGbJ",
  "key32": "H6FS4gHpZTZV5dYuDgQ2j8c75F91s75bHxnjBUinAxeQNqCU42kbPi7YqCBMbGzFEStYbN3UiE6B4GVEegpV3Yb",
  "key33": "5fA3sfHEt2GVrvZb6KuYp8VVuBZR33tvrATgb74ydy74Ngyrx67hSEfBrFiwdmdMcVbxUmuZCF1Em1s9ueAUY4gi",
  "key34": "4Bw1QBqvnZGq7Vyo1UpakmH3t8fJuPmoQcXUbfvV5kcEc2TegcVxJWuBbphvG9HnNuGbHoo8YruTJ7gTYKhmgGCT",
  "key35": "3Af82nCMK8gT8fuJ6jiFA5Q6SLpEv3BBc16ayXxUTaLaJcH8Tat2DEB5sAx3FrRwExqC8u1J9xLx89T77jWBYBCv",
  "key36": "57HqQB7XXn3KWhufsjFE9nTUh7brCYyNTvUfcXm8goziqo6iJ4tWW9cwcbh9hxckvkrL3aCh71LVXMo9dA7UpVqG",
  "key37": "x2oj5jbpsmMwN8mtBRwHFVV78bqvth8KCUt6muFqKr7p23gW9fpF7mzwJtSdqTw1N5pvvnW219xuWLE3hLtDBBa",
  "key38": "qGsFQKG4UXt4qbTR2WrDqzbEVr22rLB43rXyZTtJwDQuW25wgZ3cA56xn6DsADbgUcfeZMqDN5W1hM2mGTW1xKo",
  "key39": "2PJEYZQGdimNxTDLDLG1AWeoqDMKx4iH2PSCyfaMsKHrmN7ZEZBBrRmA3Gtd6d8X6iGxgvFwqSG9jnzyu5sfQfiK",
  "key40": "k6o9N1eGXaZrn3UUHD2Zjt99vgwPKBug9jJYAcdst4J39TZYirFjjJ6UqQhXXJWSrzuqPLwYhTxRsLW62AN7FJb",
  "key41": "36xf51DbQkMqqvSmrQ3Z2r2yMvsjbEHqWanNt79xHL6kK6ausRLRTXbv987Jgdm4GL7uu2mZzovChxUehstmbZgB",
  "key42": "4YiMQfzxE8WUFF8xhKnav4gmCoZtdx9Fzw2aTgkLLymb2TyCkLgPskL8acKCQTajXcPDZ8f5BdSP5jLaNhcpr7rQ",
  "key43": "4thoPEDRAHq8aGAwKZwfQ436QSbgXiGPdpG7zfxAfggo21wMMiujVbCs4wS6ANh2F2g4Emnq1ZZ8uaCmkeY7Z7kk",
  "key44": "3vQLGmN3MpdGwy1mvbWykKpGnjZANYpFv7BdfmbQTNhMVvB58wnbvbW6v6jKGNbHm85PbtfJV7o3DCbHJvCNn7Lf",
  "key45": "2eHfJBnVohaA1MQzLzrKGVup4RBTp2Kinno2UsseVFWGymtgkPJUHv4VX4ax3U3AN4BQutJTqjNBpVq7rVyyTNYP",
  "key46": "kcev9YQN4UrgSihdbRVQg2aHVBVSienY5o3repYYty8GHG4TpSHP6aRcJtUGcBQYTxczCy8ztU7CoFrNkRFmoW5",
  "key47": "4zEFP9Sn3wJ3WML3bfdnnHMTcVqCnRjdT5EoLdfjofiMycqJKPSZkyB4RM9bxMsiwwffWA5cz9Q9hJ4eotp3SMfz",
  "key48": "2fdWT9NB7ugYEr4gpY22sFm1axBFGQuZh2GjmWSV6thNP6ZfioDNkvBNteaTa8Zfbqhv5JYMEijQFaRa4QGwoDik",
  "key49": "3hH1zqNnWiQbuX7Wr5vaVrFRu2ggvYJM1fi4heegd3pynp3gUN8E8aZ9RMNGeSdeknmgqkqFgCZ19qNFxNxVYk7H"
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
