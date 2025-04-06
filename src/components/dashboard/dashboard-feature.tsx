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
    "4SFKsSKTjDfbqtPUczBQuUEKjh3wXZiWKFq9ix21KydmBjYzVvWg78Pbx5R2k3XhXATzngUdHaqNU6GvUBbk7rDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XLTC6vxmP6gyCDPnrW8jbkcHsvdh7bJXhHAiqyCeoKUPMKuSLutxYNZdeXz6frytJG3apanjCSHLHWxud6DUAYS",
  "key1": "Pxz52mXeMHw9H2exd7T4LRhqsyKMNL2nozq4V2AxVaq2Ttswyzh27vHC68Jc9RXtkyW95PPjBLq22uN5M8djjSk",
  "key2": "2iMRvRY7uwTNnsdR8a2cZrJ4CzJdTsLYKzJ5PRC5vfnbdZACWrbNEXgRRHJZ9MEuChyMiLEQtjL1rs815fiVRrvF",
  "key3": "2AJPcg49GbfKMNV3NQMyxEUzmCXE1d1CsG7joujhRtT7oMk3aC6JWySRzjksYy1JQNFBkNK61rtkXoyFW2YdyNUQ",
  "key4": "N82wQnqrhTRYeCTaV5qCWZ6nPpa54ojrxRBzaUWmPGgd4vYsKfW1JZVkfAeNiiZ7nmyLJ77gA7DLnbP9tZNhpqa",
  "key5": "5432P1bTjhyn3uEDbGbACWHZZU5R4mvAgoN3rHmHe7xCFxdkrPpNw9DaP6GPwqJrDLovFyj7Qt6JRAMadtos8hDg",
  "key6": "2ZpkcwHDGXQkHD55MPgNBC6GJX9Vm7Jg9CYn1gKXxKfis6mmgUcyCibnfFwLocmaSsDFA2zNnU2NqCXaq6GnRMRS",
  "key7": "SCJ9c2pZvEpt9bDidnomqa8oJnENgdyPWrRugYuNrKSgGWSgsoTQHmxh8AMio8vE9R7o6vtEVv7QENnHd4mBVNA",
  "key8": "3C1r9C8Sk8HsRYnS1hG1XXY5NmdPchqGvux3kwRXk3izwf8nMizk6yfKk6ggokn8T4SAk721CSUcejSkLc4oLzkf",
  "key9": "2ACy64ZNp92SheDAEmA3cfc3yr1YQkRpUdLuBxCpkNdq3hQzaaADdymTtCkE6WNRUSQtopLXsr46FPfSxiDKEscw",
  "key10": "2TrXWVNT5yu1WNsQngePYDKf1SzoawbjoFSv9jEdZ2dcVa9u5S1iNZyGjhNwJyyC7sVFJvkZUym95t4f7ERGD1Hk",
  "key11": "3hMkG9DxMzAmZpQmtURve6WoShD2DKBi61gcSmKyKtAb4s5xsevpgP6DydhkV7iarMMiMZziksqhudw5HWaK54e2",
  "key12": "42Eodar922mXjGR6HJScjJDhBgu3XXYrFJapXu6Q4xNxarNrBGcgJaQdCiQRM187rqx3W6BPzq97AK4HbPSc3D58",
  "key13": "3beCp4eFwShX3dCETLEeCzvrmsVGtSPM1sLSbnYgdS9jok12mKXq8XbUQDW7kq5bAwbsMNAhB2Jpcq3yDSYLTMTC",
  "key14": "3LsTsCWUubUbnMYb9d4XisE1u9kq67rHSkVPLTDUBG4oocQybqmLndbdRdXUeJrw8hJif655LdynV6q2HXTRd3Pj",
  "key15": "2nV8NDR4DcPU2jQEYtAFCct1bCLkg9Mq8Nwrpf67MtY41R1NqCYboo8SZhxTSa7h5iEdH2RKCmK1WYNKTWyJLtnz",
  "key16": "5s3SK6HKrUuA81tYhQEHP8gnjSyyEBqyws5c9MujZwcuLZmyn9C9Ryom74N1c8yFWSErwFt3aEGd65xnNpyLjCZq",
  "key17": "4hEgwPhMr2tNd2zEPmjCgRSmDk2f4M6Eku1CaWTrGfRC2QAyxUc52SyDPda4GDqEytugYsNdwABc3QRHnBYeGEUP",
  "key18": "4EWihdpAZEtXUCRtPdj27UR5zxmTiUm6jF9EDhatLdt4AxqYjKDWmHzcwVC82oAUXoYefGKZtwLzE1AxiFxiNvWu",
  "key19": "2j9AEHBxczX6W8k6i7suYdbRDLvHHZx1uXHT4JsSuVMoznwCnwwPaBbifRLQZtc7Z2mjUH9n8kwCGMddRywvgBjL",
  "key20": "uZWHhhr9zmxVzVXWuyMed6p28VkNT2rDb7fBFXhR1H4brRMbX7E7Gb8qN81CcX7iu8DjiG9xSRRxGhRVF6wKVDK",
  "key21": "2R52YKfwSbnj5BZLS3vKh93dFVHqHHs73qhfXTzbwkM7Da7LKUkiRwVEqTx9NuuwbqJRGFw7AqBKUVcLgwUEDqg8",
  "key22": "5T859bV5pUAgrRk93djeiQJFYv6FeRvpt7xphMtoexApC9Duppn38m71Jwc9cpkGEkNuAzkyPsaPvCs4Dieo2mBq",
  "key23": "5cgWUce6yRwpRWF18HSzmFNq6Gmkok7pRrugTscTZTuKm8mdbLJD4kmZhBteX34bNPfYoLKR7EfCEHLPDmu2umDU",
  "key24": "3LGWTPYYBmn5CjdXhA3QYjDGZjnhmZo3LUDmkRrzZA9rgLMeipsx8pvpb67YoHtHCkVThrrB7GY1sQhZvxWAuEQn",
  "key25": "m1y4BJ1M7QkHhZRKv1t33VST311mUEqsvRr2dpEi1ih1XTK4k4exNMATQr6c4FouzhtjSNwn6cheGUEsHCBYvKw",
  "key26": "2NtLKf7hFnhDNsH8CYpQ53k15bwRjX5tGTRBqi3ub9m8bCTqQSaWi9U8yDcLZVxiiRQQbcpormi7SvA4ktkkayLn",
  "key27": "2ssJ41ExWEewbJ1a3jGqLLntk2oqNtuGXUsojPFfsKSSb7n7ZT8NuKvwMavQEuY9EXXsH2ZcxwE5PMqTnKnJhWqc"
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
