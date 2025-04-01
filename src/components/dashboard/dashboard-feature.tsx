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
    "2qs9zRCuEjXa94zSSteynFBXBBymcmQ6WmvcSf35rfADWmB9qnGtW5j8Av2nbjiRp7mJ9bWXSMvuANh4F2CKjaVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUyYPDLYXy9C3JYdWaFGBHyaiRQW29KugvffJyQR4RtwAUNFAAWc6jFb16ebu4YJpBXcHUVzZXEeV1yijaNh4Fm",
  "key1": "5Xw9VQckcxwu2ysEd2UeCbymA8UBAfBfKAiBi4bc7DW9E8yS9kb2i92mSrGJujZKAm5HmZe53ba2DBKL6SjYJevR",
  "key2": "3yPfLWdufx58ZeJaH71VuauEoWwcTFBXBQzpGJ9fKso543jRL2asZvMo1ivJdis15GQ8TiKrAs7bMei2FNDx8DiT",
  "key3": "2zoWoun7CCgBkXAFjt57oSbfBQ4Dvy3iUQhLGqRARmk6LrTF4rYmzx6ofXcnDRsuoRVnLughr1QdqPorH9BebtGp",
  "key4": "5MnU9qD7C3kMHgGrk6UvNVgamXGcndE4wnfussK631TfkPjjFT5Y6UEdwiTTz4m5N17hEQXraPKUvc9nGQYUJJid",
  "key5": "eMRCsUocf5CAgAuZQRSeyMM2qxQLVbr8wLeUqp2dpm5WPbaBaMtREBxYroRe8pNeYPpwUnMoQiKY1Kb73iifELk",
  "key6": "4EFeLXbPtYozrt2EsW6bpFW38NKRnvXGpxewfeYN7yNs2Gqcjn4wskHcDLGnEwimuhTYBBYBoHc5uVm4XCwEXDjX",
  "key7": "4PFG2xuPzNzPToBX8q4tDGNMSA3ucoYoKhF2mRhQEJKBnqp39NSrDgWwikAhVUEzczex6cX3evkx6f8gNZgpYVUe",
  "key8": "53sF7hTZmfpZiZmGSir13rcSEYknQzvR7wXFzBuixzhWkzXR4NkjReRZNA7prq6g9sVYEvUHJswX27ecpuSrgnwq",
  "key9": "4FPffTaKt8Ah2MiW3UiEHMoZ4bkvGJbeWS4Zh7vuC1tUsNwW7WkxASgSMfaRdiN48CNp1ertvFQ8KctpUuXEbeRv",
  "key10": "Areaiq4SMsTSCNWbpEuUHzivnTHms3GbkcZc8STBE3uSKP31xjrxJ9JRf2oZqkbea9WPHmuvaFKd4DL6ZzTU6T7",
  "key11": "2BEVYEAD2NktbZQmocLofRSPPZG3zCRgqDCRtitYvV51x3AkZafuGbEyAmZB67AX7uxhjyMqXHfJRK8jwjTDi1Cg",
  "key12": "5c81PuPbvzbVZh2giVBNZrsoRQeBBKX2FrNTSSHQoLdQXs22nCuLvNM5sEeQJoR3e1gsUw4yCFgFY6Daop312p7u",
  "key13": "3tkTsm4iifCK3C2yGpn1pVP1uiW9GtN2mvD5bfgsVB7SGwShgnyVA3UePehjTHMyUYju9UouPdSxx1TyTSyngewh",
  "key14": "4ecqKy78sifYdCZftxNNh6WSDZtjYDUapXffLwdWUbDqFSf5FHfGkondSBjg9yuTXmfGie9Aybnr4iWMEfP8Qkgg",
  "key15": "4PbYUk9gwvreKMZPvhN7Ud7kGtninc5q3aXyikkvJa9i3KmAz9MWPtFS1msqHUNC8RSS3rDFRFZg3aPo46dSgHqz",
  "key16": "2JVW8PiM744UiMHPaySYecPCqjCdNqqbhCZfp86PHKfmLhHhpLDfC9rg9FbGRSvQcQjpfNwPstS5UvTmjUfjY5kR",
  "key17": "3FRKKsjWiHnEVuCyvirqupFrCQKmzKERbLLW7WiD8U6k3im3y3765sMGJnGXyZrkYj76q5AgfuSM2DArwhbC5J7F",
  "key18": "2Z4moYMZapAmdkyv8Zv1v4v9mskPAN5e14WeeFcnZpaUyC6XR7EJtgfNqpxLooLYekKDvUmjfnKA7FtKu36dFWjh",
  "key19": "2oqnJXrxvqceCKRZxqDVtTFwQEqnCnG3pWuKuDmLg9G9t2ViiNMPkFedGd7XUGBfrfbbt29M4UALsoNXZ4p9mWVi",
  "key20": "28jEH8AZ6F9QToEnvbBeS5uCFytThZKHwHuFpKVvETHXBrKoP8wXwyVBycppyaAc8SKxwvBo8mBdaGBQtF6wsf5v",
  "key21": "5stjuR6wupi8Pzr83yseWrkXy5UD5sNA3stwwTfETHFvvR3zJ9nh3iYrVcM6LKvoaYrCQawTVagb7HkLdrULJFPJ",
  "key22": "5pCiVNehNaNnACciptzrPinwAc2uLifoJ7pxbPNDpeunZPk8S6xJhPTcsm23n2qBdzjSt8yeKmWAZqKk8CCcTDqd",
  "key23": "2xVjkVjkYwA58uuuzfNVW6vhcvB5N5AB5xGZbeqEE4K2zXTBkuCeoLzjhcoZLiBVTVp88fApZDyBoXCrPNJA2atJ",
  "key24": "3vnuzrrNBcYF3gdm9Y2gFyZhn3bjbQe9iXAFePwevgHnA7NZmNCfX2mB52RqU6qkXTmhURfTzt6TEyrRxbcL4H7b",
  "key25": "JSXBQBQubzur5L5iLcNFN2zTXKvzB9rMQ7GVMs7XqbRctMzmxGEJMyhn6hBRvtea9PbYnqF9mV5EgAsuimDgUnZ"
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
