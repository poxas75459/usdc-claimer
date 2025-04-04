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
    "49U1ubmS4RuhquL912PAuFQT1dt5CqQGbkedd7VSjQRZYUR7XMMrdAXd6LoygcKsEqXPks4ivepMbmWt9VGUMwgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mNXcaUubQx4vd28m6ETDkZUaz2dho37hStMmU1HMPsgVoaH52hdr81N1BBio5cEEhP3capKAVFeoUx9PT7mvDU6",
  "key1": "5HikGZdCGnYbw6sjEGHetmarEa3wywCsH5KzQs9ZPSmLc9YviwRxsnrid6Wm5wFrv6Xoh8L8zui4bobfiMT616tN",
  "key2": "5Py9RtdskqGjhodpF78qmGPnk1T9p5pzCmivEy8H5t9E9rXRX5vbN7oxT2Vuud1nzYan4BmTszRxSe4zvezbFwzR",
  "key3": "3kpTQnAUcTfwDD5bsffuFB5dSS91RH5iggS6KqkRx2fzrrWRnD31nTDXp4wd6aopMxtXJFfxA793ondQXtXmzBQA",
  "key4": "49TMb2GVoLh7TdLoAM8vEnsxypK63ZEn3nTVZzDRaxsvQvmzHUCVpPYJV1mPV8XiVFmY21ffaPub4ubVFie9SB2e",
  "key5": "4hDTBtLQDgDAvcihBevvZSMn2YPGyhZQvvpSnkhg2F6rFgEBzUqiFtPBDLgcstzeTfsjChVQGZYqi3JocjFBzBMP",
  "key6": "4y1UvXuwBRTD4sWcmKMxjAfoeR7atgLaWsBMWNXbkHa9j6y6Fmrv2L3YV19jcoua64RJEk8MAVU9etNmADzGf9ti",
  "key7": "5NAKLxXVFjYvyZgTdosCUpnPtuHTQAeCrnp9ddb2kJBNnPbygEP5B1diugKKqKThEydpYym7pkoojdG2Lzh4n2dC",
  "key8": "5gBDMKkgkWAXX4WmikTWja4jrAt6GrCCp5c1NY1WYRhXAb3dJ8svhBC9grvaBzq1nxFGRpAbwZwiSdM16XVd7G57",
  "key9": "31vyKsCK5739DpJjod3XuhRTUM7Kcw1xG7sgyfrFe3hv78jM7XsiWTZbDayrmuQrpbfUvfy5WEYqwgv1xCWpkbRj",
  "key10": "XLUFHL6GNEcUPviw65h5crsK5datTTChna5YdJjTrvyLSTWM1QBgB8GWageK9T9jptfVjnTj4uZpgsAAb9apVxu",
  "key11": "3qnzDgaVVasi7Y1A8kwSm9F8Fh2NuGpEkFG1JWfe3ePhRDGSdSLHyVKSSQCeyR39xib7dkr3CJFgTeXctf9ew8WR",
  "key12": "4avhmxAqoe5DUXnfzJs4KkuSXMrFUqy47xZYjSuaRM5e3oVSXybz3J9U9w3BPJxKmmPsMaZwSzkPaH4TJbsCzNPq",
  "key13": "CPtuLTw1nb9dQ6Jz376C4EF2QetLsJ1wBAkMFZBnH9AF4TP3YJBJyn8tkygUxzJBvuXi8ByH94xMrLpm5wbeydr",
  "key14": "2r7daUdDdEoymPC7wjS5znBLysd5z66BjcTrFq2PVsMYXzvHYWaz9p6SuSUgEmin4yS3nb6DtXycxP48SYwmfPjP",
  "key15": "5NHjFpVGTwbGvsaPVNQKqjNJ8UNT69RqBqRQzxtzLCqeRJD8xeZLyaF6caoBCjbUEW4AipGvxtz5uk3ZXjeBFqk1",
  "key16": "4n91SEbUMNQh4b5wcdeDVdZYsAMv4TuLsw7KB5Lwciob785hUyrCPDRusnBM6wqhTigsVwff3so6LVJihaiFaSJA",
  "key17": "5oVdfj5HW9BFbwNUcdyHFB7qh2YQUhnr2rRkqsGsHCKrZ5F5P7PgNZ1JLPoUCravqwVsSesdbHpbrceyNz78o5vV",
  "key18": "44eGaPu5DuwPHVX1T1eQjhxcfFRL4r2gR8jSnSVaaPbTBNXbHV6ZcLYyttU29qwQQY9vEvc3AHNuptSyKMDyU5VR",
  "key19": "5KARZL12F1mfKS8JuuVzSADZUNDd9DGcw2movtufmsGSutNRMpywqmAQuHJBe4mXfX5SUXMXH7GB9m4VApxvAm5W",
  "key20": "3VsLbEPQneAGRGpgawqo8cAHL65VTzxYbsuPDmSqbGtc3hf7kVqrzigQie25esYvRmSja9nD5ArSwUNWZ9RL3WJq",
  "key21": "5rT7ZHXHo41QYiqt1GDzdVxA9KLMo5Bo71GCcAN33hun7DRyzzf3uQLsMDNoftrQtjBfGUTYhzjsQtKVpfiA8iL5",
  "key22": "41iwa7M1pNA3t6B4RtoZR2JAeiynHga5Qaxx5WexT6s7i6VySzc4Qp8n7VBcbS6Q1A8mNfLjb2DNWznZ31xykBWC",
  "key23": "5U5TeE8zJhrJ9CUDf76o3rEhaEjks1smXSeKMXN7GtLigDp8UyWog4TrqLzvZHLVjqc4Q1tmEUizVJExn1yb27nk",
  "key24": "UvnhGjq7nRpsk64a84nawStHjJrqGjgnevwUyBZXpULQ37N5d3ze9td4D12g8Nek2c5xrRcw5tk3WaeCQKb1Gmk",
  "key25": "3B6bZ72fgZy3Q56nvmgguF8JLnmryAyWUEDEPco2bB6SgHRc7dR55XhzaiEipPiadMUPfDSM6H4YGoz12dhRfjMo",
  "key26": "ffJiJJZsFcXwUbHfDyEUZRavnTxwZKJYRBc6YMULgJprkw61L8V6FinwxJGq57iizPHFfxZBFWBRw83pWUaAZ1b",
  "key27": "3CgBsK1gufkSdmxRB4vfhQWqUJ6Q2KDR9hhzWg2BtNbrVyNaSJo7JhfSbFTDCj7UYBd6caY8Vm1PwRsiofnSwx3w",
  "key28": "49ZL2ewtP6jLuqiRdheWqgPDrbrMktVwGdsixRHAxV4j56QYtBzZLgxQdBw3tA38tYsRWfBAAh5thKUMgAfAyN4P",
  "key29": "DreowBvYaFAgvuEJrymhYSJfe1d5unj1cEKC4wZ2RiHgK19cNavLtdS3qTxN3ovtuJy3RJ88UC8SN6X8LWp8Tw2",
  "key30": "w41z8GGCHiMuPcLccaxQ8SZhsJE7RiF6LLK65qRyDehpjc64yWuvj1v4SZThy8CVxAK2tEbNL47RjsZ2GtuGmaG"
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
