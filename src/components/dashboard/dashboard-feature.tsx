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
    "4FYQC7wEG6DLLt5CUP3i2KsTB4ngnM8nQtcRafBMApHncVhdQqcsPx3vZHtZWTRJ7fuPdyY9qxQ7fw1xQf2f1UWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ftxHwEQ6tQBJCJy9M67L3wMdTuMCFw7L1fSNJLr5mpWNSJU8AG3iaYkWtbf66mFJ9q9WS5GC4AMe8haYxrg2hs",
  "key1": "2bye9FxKEqMMZe3TS4MtvVwkRA14qbtPA7QvSfa4DPjUgFZhi6LsZqYZZbhUiKzHKKVTD17J4tNuAUVmWozBdFmf",
  "key2": "425chr5qZ7NtpDTz9qkeezWsyQhsQL3kzyFwrTUUXfkFQxjwdy3gbSJWtn97ueFGJjMW8BMze22fZaYMErbnmxnL",
  "key3": "ismAf2sxED13V8nLWcfLA5b7XdrxdLBrmZK1vimwKFCVhdNqGQYTpqXXfVC9jaxrVEHAjwfxSMc6qyxFVBduTUY",
  "key4": "5YR2F7y25eLrquK8RkSPWDeB1EHzbiq4fSoKqhoBP4GPEVUNcXB4CQagL154wqxujyCdoa7UxViGXb9fBqfMrjvS",
  "key5": "2UQpyzCqBoy7bsMRUs6b8S1NLQPaH1TtW7E7eCmxYhdsswx1ZBjJrucxBnYUgaKqpdWPEVXBkqz1ZrFgTgCqg2zM",
  "key6": "4BMjFtmQecQtBv6aCnUCHRLRr2DqUXscNZcwZzmAFQUzohq95fACAdhMVDMhxodx3WgjXGsSfECZeUkQQp3Qmbpy",
  "key7": "MdQ8cdEoaoY7aWjcwvV1FcwUFW9hEPVyC31eEfGD6zmZDhSud4zVZBPdV145T8J3KrVnVwWPRTF5ACM2AQA9vfe",
  "key8": "2Tjz2kX9cBatGFTKrd9mCfyZR5m4GotW22YKYeQCvSNGkSRbJn3owV7Zdeco2ANwXJ8gb4oTJMk1RjTHajascMr4",
  "key9": "2A1sVU9q34EkTrJjau5CMUBsufLzp8hvMqZqQ1DJjXLeX5VKugSvH82mGvJyMFuQbQ9MKy4ChQLjKbBqxjzJwp1b",
  "key10": "5q7hYa4fbFZsisAehd9LV75PRyiZZJbUYYhxURDJJ6q9xpxS8TgNCwieKKVz8e3HpDtsHqomjHCbwvZFecVDCD61",
  "key11": "4VB5fW6M3mazNr7dLbdPcxYRF81NCpTTFk2aw3mHPP5y3GVuf76UAuxSLm9JSBi76r8nCJS8oAErQk5QzNS2SEDW",
  "key12": "32DuhBfETzdTx3p18cE7uoqSVQNcRzpV9FS2mRS9iY2Fo9SFB4tGA5mnucA9pNWFsFpqrvJqvXCsMwJsQVVfNk9A",
  "key13": "fKsG6SFYtZmJMpanN89oHWTQLnbzrvS1jqkFR1ragSSQSPWCGz446HRf6ZTszToaZJ7M1ZjSezGRzZ8bQbGKpZM",
  "key14": "65bzyNdqStQevEKeGC45NLyBjvf9iJHeUykwAQQFvxPNQCG9Fz37RBE37aFwzYGuVW6UbZJEENjYvLGCc1eMWD3W",
  "key15": "2c3mcXhkhc5gb4H8MX2SxMyab3ViwDmBjbUgqS3gNXF258hMJtvgjC7pXYWe4ztUE8PmjcEqNgKp627jrDmsnQ2h",
  "key16": "46JT72Hj7Lbho5ABgoFhX2EXVzWvHvMwYuvmtbL4FjzSUQ9qwiabG9EUpoJiscYe7YaadaEuf5TvVVbmrctiShHZ",
  "key17": "2ri5J9Qiw3X3pYBHX6uysnztbwqxHdKvvC5gPsLZeZMnmGDih7wFdTinRcYT6dPMUsxo9m683LUrr38gDSgawc1F",
  "key18": "4a8GiaJCLzyDc1VeqSLtwHuGwE9zKgHkdF5vQymfV7Dbjnw2NiNbVG6ABeyjdX7XJgmnvkUbTvvsWV25WiYPhyyk",
  "key19": "2fJx8TUGdX5VsXpG19AEgBDKnmRGhepW7W5DFdnMNSjvTfiLCzrgb5twPtgfFStAgm3WuP7U7hMhVA5vMZVNDHUv",
  "key20": "4NNeShbTscKT4RibZarNUdoCYfd8udm1aBs3vMcSsjnxhhYqeRiEhopKugwJgfpp2WXTX4VUzk7ocq7LYysMHJY7",
  "key21": "HrWjtUphvkJtsQmxNbHzYicXaMA2QG47jk3Se98NFQ8ux9F3579p31EQS7aZ5EMeChHSiHe2ZjQYfhTZwUHZb5A",
  "key22": "58Pwjeykc28jVShaRQGrJLv2VqjuZvwaKxAHB24Ge4QfvxwwPggo98HFuxmKTnGVMurDfbgfS2uYHi1xTbyMf2mN",
  "key23": "jdUYYz7Hiq6p9XAmkBpDHLSUuyL3ydTrm3hMwpL9SV5WoZhhCFY4P6cpDYjLQ2c9GuYRjk4H1TaDNTX5QbeXDmh",
  "key24": "3VnexjLs7L6kM6ckFCJatfmk9fPFKNu1NK9HKGtVcoeCpvWodK7xVNAB5HWcjHrmDcohxjNni9UQnrCbnSwJPLNy",
  "key25": "2GbFm1AsKxBJsXb4kxgZJuZ2cBkDGzgMxxuKEXH7ZgBiFWnwPAew4FK7f9JNwo9D7ofBp42h7esZ36b6X2qzkFwH",
  "key26": "2xNTfYHhGWBGU8wZxayknqZMQbaaRuTUtFqfLCrnXNKXikG1aymvgeT4n7Jfnva9gAUYqUzTFSHkz4uX5TntNvjN",
  "key27": "SUPnStZT8S5ZMArHfafiDQnZmJyT1P7doDVRn2ZgCmY9rAbU88AF881qFTJnfEDrrFdGrJFh3tjmGWM3BZaUn2g",
  "key28": "H6rBK3hfvwVKwVwqwkrLBfwQtjy7C8NzyuYzRNfF1BfaqVBtebxk5n6XKpdjWrppzSfDdL3pMfTLqCubD7JbW1Q",
  "key29": "4pidccjWHgNYMQrE3YH9cYVZ76UiTHjhme1C6RTFTwjVoHoqy5jKJiq3LMAuVciSUi1zum5gJqCrDfK9r49sZGvw",
  "key30": "2K3iUuew3zg73rvWuPDMRk4VgJsmpsryKN5C2ZLSN6WXjGhWhTUTUB89GVVEn6jxxDyQ6sw59Fobz7tkm5uM9y2W",
  "key31": "5deYBGbg8VHHFnk397qy14eTs1fN2fFUr4PRSmUsK7tdy5W78PBMxpUFLdVpuXXmUabUfbyYsxdHvjQditUwUymX",
  "key32": "2B2PWLPddqofKEYoxDaMGvo6RNCYFMX75sg8xqm7QNQAuViAtaE9TfuadeoUk8mHe9tuj9JVzGZ3k4igPBuAc2vL",
  "key33": "5cmuN3beTSnxKCCRgqho38zgJgHDb5XxmkwFBFumyaKe7TQnFqgP49QMS85Nw2XgYFTUEquCxAnR7yAzKTiTnsh9",
  "key34": "52h6ArA2cp72uh93GCuvA5WcVbBykKR5F3icW1Jyx4UVphVbAnW5H49HyQd2bX89DQrNYshwY5iEi2DdZYsrnhY",
  "key35": "4KAzhFwcNkafhcrXgQPK5Z1YWHy7geCVoPWEnDWPNHLCUroxMrjnfpem6AwRAjMiUeDz1dQzAoW7A9BDrAsVETDx",
  "key36": "4Eq1zVQ7qRiaLsvMnu31Cepd7voqCs64FNDGMtLiusYFfyRUcaxhRz8SfTf4riMew7H8jc8hkLjZGCKuauuMg2CN",
  "key37": "46pRJUqjNUKKh1KuMJ9T9yWYLQbSXFGQnxYjqAKMTjjEm9wxpGQ8pB1XUyfJU626DnqCJsAEneaPg18NHshZKJvr",
  "key38": "27m8MhQXMaMAjzzpbyLJY2DWvuwiPR39VoXW77MtWQHms8ubMo68abWCx9wsA9b6thvVf77RTeLVt4LJyDsR3Y8u"
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
