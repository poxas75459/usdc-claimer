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
    "3zqUwvoNoLeZoEwU2z5nx528Nd51rbEhvsPx8c8AsSEThK3Us8SmTGMy2Fn2qHsuzMJkmBELgLx5jULh7ax4Mdnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1w7GQK8P9p5XXQ8jKhFmSqJyzjFBsmd481jMACpNFFkDmqcnhLTDH2g1FCTVGaZuafzHd279FkSfiL5AuErgvG",
  "key1": "5RKUkL2N2CUwPyGL7QNDB2GQ8V6CgY13z4Dna4gEbxuj1UoVALYNnvh1P9tVYXvduJhGVZTCcznQyDjd1kXmfGPg",
  "key2": "3FeAD4cpJCQutjxNcvA969cbmdKDNdgkxB5tBhzS6bn7Mv3adjJaGz42aswHtCqy7wwBt7jVbHh1zgS2Wk5ysBti",
  "key3": "25HoApkqUSYV82THuhPcWti3LXyoPjf8M2oy68vES69UCdwKKWX8BpkkAoR9qhsctxFtTVWcgoAWVQe8zdT7aGUj",
  "key4": "3c6xXL9xayNkdWtmhmfHsLV22XRQZgSwxASWBk4ZUpuwW7PNK3XGe1kQ8TJeGaPztjdQzf2QxAxrDh4TvFhjMvEt",
  "key5": "3J46Y39rYQpsUHdasqRSQbXUtuNmdpUe9RFskwx74CRLiZYUsQhVTBtFFwN9Ba92CnXRf3yJejZYg4LMK6ULvSEK",
  "key6": "4nTZLnPBK23RNkze7tfJUb45jJcQQFzNKroSafQYYHC1MAKCQ18FqWwnzixSCKU2nvqSj8RS5G4W4AhnFGZbTmTi",
  "key7": "4ESnDntSS2pEoLzL81sEsvN2rn2eCx7cV4LeFXddLaPTb3Fpi1hK2X2noF9Ma7gpertPrVVk1ZrxHzUp2ZqY9DK5",
  "key8": "5r2Vg9mt3Sh63nQz6DBtaYAyaYn8tUfsUab73CSf8t36qnSU1MPsYKr1Azj8KiR7MCY5TY3Vv6jHr5RVc3GEHZ7E",
  "key9": "VgBAQZ9F1k3LW9GfjEX63nNZThyiSKjyveNFVWHgCKBbYzhQESeXsvoCbZwPTS8khtZrcstr1y1yDYj1yeEiZME",
  "key10": "3yRzeJwsCgwqt46oPmeSJBoQgxaMLZ4ViDa9xF3QozRd4wfbQxT4zV413RbKrGoRqCkaxfknbYNnWmbmW8CtAa28",
  "key11": "3r7P3qmSouuwnPScA94BuMd48CiuCN2rPcVqqthkfAvDQL2VEgH996k63FiukbEvu2yR23s5fdKV6M5t1yunQPBX",
  "key12": "2NYPfKCKaMpYdMHhsxzFwm2PHohUTz94aPVHtCHdtg3tknHLMXgosBS5TMGsupqx6kRHVZbRAR1J3D2jjFecL1n5",
  "key13": "41pjCmrXbTkLiEBmch9dUfTcrptfHj8DYYVSMQVBV4AVwzWDspKtA244KX96jjKkzkeVZwCQ4TUnVbvVj91XNimp",
  "key14": "38pTPCJ2n63eX7zBvSYky43hGn1uepeFMGCTH24F8KsUQVRTfZjVE9vm7aofJfsUupfyWuEhvZwXXXS3jNPyryCM",
  "key15": "29wQRWwnvsfc2A7mJT7WXnEvQawJLvSCiVDWgA12Fkazray1BckzfpFfVGud5uU9G1SNXSv1LovyDh5fn18hLKf6",
  "key16": "5Z1SKwLkU794AjuSMWh5eXL9eyutuv8U6ii2Tr6JV9hfjG1oBLxNPM425F3iKFUC9VSSWiCCqSJpV9zwZjWNGjr1",
  "key17": "4v8nShr1ctrPM7vSmixxv1shn9KoVvH7rEi9JbTVZxwXi8bLFzq3nrTf4V13DJeM7nYCtvAHdTk1XutkqUFeUrw3",
  "key18": "b6d2VXJe6eFEdsBTj3umEEfwxhVvTMjhSx2P4ZSP2R84FfQLkfURYrHJGD3ejCTrGa36kmDFMucNacWinKb5DW7",
  "key19": "2ywo9NjWyU8RuHBMCckuxjduCMv7XsVjxWLETFvLdUGwdbLgLNiVkzqiTdF2LuMT4AWANn1M1RPpvRxSZe4gPuu7",
  "key20": "3VkhyeLrR7FpVVMsq5ZdVvnhC5gcZaSxj6EpXmk19KE6XidVdd9c1Tsk1S2eBU7C6JGrE87gdpy2aEocVeJCyTGa",
  "key21": "6JqmS3ARRZMDoTJ1Tq5NNM1m9Czcu5qEJY1pcdarYwrJNVwVvoJXHqrXHQnpSh7YyRh9TncQBp3CZpBW6bxjkVs",
  "key22": "3mgRQxWiijo7dinw8xEzpt4QDnDbPDefvpN6N222mTswtUWGP19u9mnCEUqEsDZLQwAxYkLZyv2SqHt1L8f6Sgh4",
  "key23": "4eEU5nW8fbHd8dDmAQW67gNMnvWsViZpjAN1nG8kYqfLkx1Q7aK6DQb3JmwFATtSTDQrhZDXJjTyeC2FbRnDFFFV",
  "key24": "fLCHBx9V1gq1QVH8PK6Tg5wPsyi9geSK8oYXMA2xfQmH6swxaoFuC283L58wdTzKQXypmzSCJsJS3Ly4tacpiP1",
  "key25": "2uSoSxLkC7LEZ7xtBjpg8wxdghfi4mg8fmthZ83hEDrtdQPf8rsuQDSQdpzCLE8P4RDusA1Qdyv4LyadtiVhizjq",
  "key26": "RRx8ucbXALqBpnfcrPiUvkqHhcaYmXwgAMBnfR9BELe432EddX36EDXqK272dN7h6hqDyafNkagfzrPhcJPmRGw",
  "key27": "3mVBGRa3KTqwDmRwQD99Mm3SSLn2qGV8GnArP5bAZ5fnrYDAFyxP9UfMNVrTVAaQg3Xafpf6vyWsYu924reSj78d",
  "key28": "4CMGNsDqZEM6tkrHKfj8GRyou9Fjk17AbJ2WdsBLLacv2SKQk274BebzzQtQuLRaS2a6fjeCBCbW2wq4JfW9RG6H",
  "key29": "Bye9oGgUG1r6o7PAMgfwX8MfARq28LUFPPxKxT1Q4xajhfwWHdqak2TUrZPFqtWJBZ5osi9CZYmkW74uErPcz3v",
  "key30": "pTCpamhkmFNjANVdX4eWpjW3ssFJdzt3s8zYuQbVewNfdvcZ2iGmH3f97JJd7op55fawYpUhzXR8V1phR2JgxfN",
  "key31": "3ptbnbgd1yetbV55dzB4k96oxqVuef81J3LWwkw4bV1EoRpYbC8EagXwRfmGqYVKS4wtjRd6Vu3cTwUtcD9GQA7T"
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
