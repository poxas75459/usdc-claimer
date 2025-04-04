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
    "7eHt9B2QyGcLviFda6KzKU4L9NCd68ByLTcLkaLKVv67ir37QdEinh2oHGDWGBZv7JUJQ2WeH3uiCfh8ML6jKsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MsMkPhPxwN6x6kjknk2q5EWPjNsgt8woA9Cfzoz1TY5WoPrbNTmPpFzP25S4a5fpH4TtMiJwcvFPJokqAurSAn2",
  "key1": "3x4iDDMmQqk43qqcz6DEWQRPkEU3x3C2DRXVfdzC6QWqHhyMxR9WA8afZvGAVVkYvwYFMExzfFyr6tZMhQSEXqHC",
  "key2": "4oZHaFQygtBiA3ku9txRQmD28WaRoke1fiQdh2DnieXHmDTg5f6xEwtALruy1C8P8vKVCBp6NKeTYmPrpaGPHMQr",
  "key3": "5ncaii9A3mV8HoYwcnug4Ci5aa1GvHCduenptYDyJcX44iaTRG1ZEEtFZ2BpbNGZq6jbWSpSygHnDEkaC34SwTbM",
  "key4": "3oztM77DSeAM8zWivyJ3yKH9pgkH76CndHZN8oBWx1KA48fmx7Mxy23NnKtiFLARjHN6rJMZ8b3wfaAHyZbgLTtF",
  "key5": "3DcXZfmLHPXmCA85WfAkompp4Pfogu5nRcwuo7fkp8Bzu8e3M1KaFmYJ2NR5vtQeAXgr6wnp4c4Zf6ri3WU6Jszg",
  "key6": "2FyuRZ6U1BACW2JJ677cPmhgBmnS6VFjRSs9JVW1FgNQfh88cf9FFCexhfMh3sYSMekbF4ZhFmfzHenFHqUmvYJq",
  "key7": "3pbREtoSP4wXFMdMoegZNp7nLMh367STDJ8Aq5KarNizjzAocxwoRgo3TzZDME986Ejn9usAoWRoMg6PZkzj2CVK",
  "key8": "5oazn3vxVngSNKabSSdTtTaqs8KJmBxC2qRxfgnygUTa53PqAnvCmUKrxUn4coVtiN3xp9C21x3MnxMfRaNtDiUX",
  "key9": "dN6QXLTfyRvfeRhfMhsun1piScXfWf1RB7tpw5XPKGpp2XhEUgQL2TDu8ctZSWLAkE9D7z3HezagL62vviaVaQN",
  "key10": "3B3CByPqtUfAPsg89PU8TxVAjgTm2oUT3Px8aM9uJPTMhuoYuUvNphJyJeSvyb3gZKVBgE6KjmEU5rcg21qwpFPU",
  "key11": "qpJaE9ZAwYGEkgVPFAS7zqbMJPFeLPqSXwCGd8piUWZT4BGdrt66tW5ZSmkTyBgqeW36NNnK21cr6i6EK64p8La",
  "key12": "5aYnvbCygi7WM6T49dqKVE2tw8uXDvo1B9sLTL1rWomZj7hSbMyfWpYnFHfmZ2CpWpa4DZjamL1wkYLM2qe9ZEaF",
  "key13": "3cDrEQVGfcUzoeyqJtXJQyLZxE4bwDdhRgHxEqbH2FySiVFv9i9pQS2a3jkcpGSiQcj184cZRNfyEMjjLdT7PpNA",
  "key14": "5gkk7CtvcmdK4hYyy1V3us7fAL8KYNHdvS91ZvKQKCerbbcWMj2RBDhv1BLdrpibR33M5kfL6zVkDek45WgTYQSk",
  "key15": "3TvbVd8SWMJgGSpGAXj5oiT43BB88hBehdxy5dPPqmRuATxmSwTF4rcq73aKW1DM2gat3tLfkAphjUXMxRr6qKWP",
  "key16": "3gyEEEKGgDWaoe4W4h5gbkt7AJ8UQiDU6TdDuWACYqmTLqKP3eeABZFsfa9EgVRZCDe26VRVcoGYmDQFQHUr64fP",
  "key17": "2A9FKHHx4xQgKFnT3TpgpFwMejuM7W1fQUtBujj5F6aPqhRVs4fELxG4k3FzRE9uYp4TtHqm2qN1azjiaSU4Zpz9",
  "key18": "4R5WvXxuYbuKv45WpkdgxXxkMsUy1yTtoSEr9tkGoRXjCN5BNV22PDpzACEo9MnSj3FHuRLtD9RE2ncC5HVndWMQ",
  "key19": "59JkXpH45HXx9omLjwc86YExgMs5Q4gvdGa8vXA3oTHH6soWBB7RJEZ8H2BowhXoKDLdcTGgyMZxGKNLTiYUBt8T",
  "key20": "4ph52TM45FJVNnnYNQk2GkB6W8a4Mr5PeqYcQtvDbYw7LjGrY7tfW7g3M7uMigaSWx7vTRQnDyB72VeSwBrXAwAc",
  "key21": "5xmAnECqiVtPGx8VpTFymjfSFjv4PfZrKWsADDeY4FnthxGaMSXnhcyvddPpZTMMsJXxMWC6Es6PngvJqmDMXdif",
  "key22": "4w1EAkKdYuqxhTuoc4QuqVzJViwAwVSchCDkDTzkNQqri4hgwRSk6GXRoj4tAGz1WipRV1YAikU3vEk1VYevojEm",
  "key23": "5AeTX5tLdUknFVRT4HD7NKzEdND6Ti26XkaDqmkBf53eYL8YWYWtBbgkmYNLBM6E8tjfTy3NAmFJfPr9W7FwTHr5",
  "key24": "51sS7JVqdUM7k1mofoLGE79b2CbyWAQeWdTYap1pF7ddwMTe6B1xVqWVWUA7CUEnxSC2jaGPpP6E5hSe2xYZBVu9"
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
