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
    "sy9FoHj8Nv8sMCFcJ7c4zk491nJpDTSHdpd4nNmP3BNRYGCX5Fij1Wut7fXRD1WfYt6GWfD4on9EkoHQkC3aJV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q8cofShDApVPp9ytNonEZyFVN2Hn3DCnaJrxs6iky8DdLPqagTNZRXCuTYpv9ZkWFLe8YNrHgsBWpNg1NgyMzwE",
  "key1": "65yhewnMdYLRfDVjhyay7n5653ubX5oxRo3jzFmRDXXCg2h3t2LEBjvHRrYxu7EJn2beF6RSjdodgTMbgc9sYwRH",
  "key2": "zjffcHauBDQotSJcih9eg1FLVN9CeA6oKfdr3pfNBTrjUXssZj5enDCTqacgU3q6UBTaB6YishGxkGFHTcuvcsp",
  "key3": "UgyDrGsQYgje1rY6mEVg2F8Wj2QP3LzrnhpTpwNBXpFA7Cr67zeA3gHPCbe6hiua68frHj7Aty9gnBGUrpDFiHT",
  "key4": "2i7K4gx9vbgMwXCFdt3qVGsuyMjQaYFgWwoRTe7gZNuZf14UxkEGnnC8a6NcPHBm52BRP3kzBwFKnGG7zZS4mqZS",
  "key5": "28XiRd3zM34n3QYEWRa29JdGnTt2GGxuJcrJDTngH6sTyLpezf7rBsadQT5nJgqEgXqUPci1U7uJhrinbVqkFDe5",
  "key6": "Yv7ACcHAz8PTsvHLS9V7iGwdSXU1vAooUrRNZ4dnYS4h4LdXbUyQSUKdrFVqiimf9S4y3WZSdpuNThGF2S7tSfL",
  "key7": "4AZqFHuAuw66heQmBr38PUZMW465SqaCqD7upg3LMdYFaUYXi9Wh8ExS2Jg7YSuwvPZeRVmSnJVnmR69xKkLzE4E",
  "key8": "2MFnqDmoqGo9vMegQCAWRSc9tPK3tzs53PR966MtCG9J9EJPK9uV7ra55J7fx6KHezVBFB2vPZpxcfBQ41rJrisG",
  "key9": "57siDEDZBQQ3n7SeZsWBBFufWGL8zdaK16tXuEp5qzd6UsmkQJ2cHXbECNk48exGW1KyEseyzqjAN7c3xPqkZKPg",
  "key10": "3xi89wJYZQwi1oeWgW1jpaS9xhU6XMqjmUxEB91V6Ap9SRUefWooAKQ7rPXAbCaLa14ydiE5WDFBY8bGKUtBfZv7",
  "key11": "5x9Feh4Dv2rEU9m1SCgkMBRcfcyG7foxYT1MsiUPagzzVtr9UxpkiY5p7FmuF1GvE6Lw6MpfWkRdpHWbnrhJE1sv",
  "key12": "NXAjK4AgVLCXazEAHVHiJ5uvpm4dzS9iKFyYK3Ayvbic3c6iFVDLxLdNBpFRZNyScZXQzTR3PBfTYhakNuKCMy3",
  "key13": "4chDCBb5Cr9LwDXb8QiozsE9FDvDQ78GvLb95QbeXQz3ZNZpPafwamrGqUwcqvJ39dyJVHAQahK8xJGD4sA8gKHd",
  "key14": "42iU3TgrMcKqYtUuJG7ofZ3qX53sY5ixnG6m5G7ujfTB7ubTGachiVtLLPZd6RsRZQmpJLt3itETyqnvsNhjxQFc",
  "key15": "5BzgH2WUhELrQm2aXn8rnf823LMGZJFwJEYDBzb8k8ekfm9fQ4Y6CV3vmwQBg1sYtfJtPCvd25tHN3bRnQchZsJX",
  "key16": "23ofk6EL4Zm7pNGNWNGNnyKfLNw73fvAx9UWDBNgxgJYsSDvr4bTKFkhcMoUSJaZ8eSLNmT4XpsEicpCoLdw17oA",
  "key17": "4HjMWaSi6neDeJHWMc5a7suF8PwuWq65peHv7SRG9tUA8Cxzpj7FjqcwpE2KBvJHzmKepPkXcLZVDqui8UAdiKND",
  "key18": "4Wkv5qEidfUKFi7Hng6TtdSHnpmMW6mAAs7jmfNZ9w7j9pTefnuJHwqhUALBmWK2Zrj5JdYG8FNrYTsTbryG5BKB",
  "key19": "2DT5sXzsc8LYsZruKR7B761JMApbUqRDbcR2jAhkXnnHUYQuyaoYufWc5r11v14pPU7riU3j572MNFKsHXcAJyVo",
  "key20": "5A2EmPsS2fdNHyv9pFja93ovbYBYqjaFsJTCv72wfn7oWoZSeZG6oXAjTbPsMgV3SD5ai525MwDNggbeyfSGuWJw",
  "key21": "3tPz3pqAeUCTiLGczAF5mbMfzff2bCg3ECoTNuHJMWSEarRAkNjQx9CMXVchzo8s7Xth1CcrKinCqPgs4CequFa3",
  "key22": "C2TyjUSsuVjxHmmwXn2fCGCHdt9vae8L5kohfMgadFS8j3BQaxc7qQpdJgm9JMuQdp4mdyrBzagdvQDEzcTBMoL",
  "key23": "49T2FPNQBNJVy8dBHoByebxQjEhn4bQpUEcTFrrm7ajTfosUA1n43Hcf1Frf2L8h8ZJyixN7smqPsBh7EAf57M2Q",
  "key24": "5BxSQbMXJsYfFvQeBYAHVDZN9mEU5XaK7DyZYmFkZqD5P4GnV6XS9bTH93zzFBMCgc5oGCuU9N2zPD9xH7vwLkLK",
  "key25": "3zY8msCU6Y2wMa9xmXwMPXJtxfigG79J7Dr1tMeoepk3HZ7g2SJtYRb2QvrnCxTJV78L21zoKuihqun8UNqXi52e",
  "key26": "3B4qC3yNayvgH7N6nyNb5DULiCkRVYJKUfvPpqZYEh7dEiyYEfSrdmdGjWGqWTcEsmaqUtY4xzZCftMPMrBTQFyV"
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
