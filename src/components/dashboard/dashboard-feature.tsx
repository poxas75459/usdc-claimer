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
    "5qkJtiC6BA6vdBFA1dBr4Dn837TAKmvaYpzpcneenTXEhy7hLDkBU5CVqXMh1KBtKDLFBUeY6FgBuY64DJFYSHdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kvFnAt5xKPibyFiTqYMKjT3o997kxkiNqHoCCnX1Qwe8MQYYPktYK9vt3GaUoyXJ1MmNeKBsjfuLZZrX9vqa53C",
  "key1": "3rJPMR3yJDv8WHWEABjwwwuJN2ztvJVnT68ssvQDg3UUmNc2ct7iFnqbNYh7KYbefHLrqG1KJmwRCQyVMFG72kTs",
  "key2": "3Kq6sj7p5T7C396LX4X5wZcXKuHtaPJEXWmVw3MrAUVmsT7UzCbKLxKHkKyZU1w2Qc2cWXVMcQXJpRYNyFBXza5k",
  "key3": "4fU1prbUrBffhqW7inL3TdD6XXJu4F89DKmwqLpprzCFVYUsepDyUUM46h8W19a9BryCMgpKjUr5Exyypn5vL358",
  "key4": "4bv3k9GHd8MehdDsi3r1NELqU5F6iwFucEREgE7JhbNVXRUcwwSMfZBxdFZjmePR8eyAc6QkNBbDYqvYSWFqCzHv",
  "key5": "3Gs2biyeeHQDJt8bdytTTyTzM6EpBPsq2tvjZpYLL2uGqLSANZRkjbhrBGuiuHJNuXnkuawQRiMNVGPMwxPg7Jto",
  "key6": "b47A2EUkJrpwHBN8Ap6JFoaeX1foma6fuy8o4sL13fm7V3v4CthngwGqAniYrr3QpdpYkTrL4QL4dYxBd2fM5qD",
  "key7": "oXqyuE4LcvcDpfkcKdtTktdy1YzG66D9dZdoWaiTLDHxgL5DVPmkTuNUUsXurksXaEv19Gs2U6Nng6uTkhhEy5t",
  "key8": "3eeurSjMTV4kyJNzFRq1rSaHHkFnAA4rUWxVXrd8Ew8yP1PekVmhSv9uFC5rdkSWdV3FnKtDc3SXQx9shxYXy6uK",
  "key9": "rLJGEVRPK5hf8RGxt5kczBDu9hGiAkSq3ZdYtCdLN4yPFS1abFsShkUd7ZbrwdYZ6AEHy7JCyyqWnho4CLfxQ3p",
  "key10": "4NMepC4SeUMEDeqj3gZLfErmeLmphKEFv94LoQGEPgyiXFVE1y5HiUXf9AG6qA4NX54F6F88F7zdzTXFhazsWQr4",
  "key11": "34yeD2xEypUF3ybZYRLNsVE39RBZSn36hP5tH72fppn71doXB1X4EvgCg291JimbCQa24wGMSj5en86kpcsQbhqD",
  "key12": "4bovf1KcA69HuJ5ycC6AWPv79vshRDsFGCj6iRsiq667tKAasfB1LKkFs4BbFfTLTndBj7ymg1i4iyVNM9U1cibp",
  "key13": "zWaoV7yZpZYqNuqDemPuDq4H9dk617sKe14U8UGg6s4Wmz3jfbUxAUXuoGDey3RZooozCq5MkKUC5rqBvPAFkCE",
  "key14": "4K78BtdF2EHdLxNeaswKXkqWd9xcYuoKxxx1t3dKyqJjN4FU4AqYZ4hH6wh7DTwsAwWWHhrfqJhy7DwmTMGNfu89",
  "key15": "67LqvCLBWVEYiDrqirbDbE7yMmc2QFhkYM55iwW85awrgWknk5cXjC61kUaLjQ34pR5m2iptUJuC5RhQdXy2rPDm",
  "key16": "2LLUVoc5jDDeVevJh36uVuCnibVSw5sgsPQXXsBR1DPMCuv5ofZCu9S5eUBmxdGQ6PZAbMVjHtEqp5PPGEp2S1K1",
  "key17": "xbPLCpTnJeT7gYo3th9pLLt5AcT22Hu97LDcVGDpf1sX2YEobw3GQvVHQt5Tuejwm6vdB2itihDoW9pNsZdiAHE",
  "key18": "5ZZNMbhuKYX2vBPne7FDuerX9vEQNEyneXGyrup2pNzrjBimKQaUy5CTMS2DSSSTQUDW4GBy4untxefuXw5TJLVp",
  "key19": "5cQoMTNED9oGL3KnLnAjiEuU1AqhbcwR8MwMSmjpUwBYWQf4YWqZ74SmLDr2QVa7sxF22MvAZg3mUzJVG678M5CR",
  "key20": "zR7zPi7CWAk8TiUFZdE9h8SmdfG8d1KkCracvnQkrpZ2DHr42uqVFUhZGUbtDgvqoTLbA4uwKmqVarmC6hh1MVu",
  "key21": "sZaSxiyd7CHLs68f9Mh5XmSkbjxXLgbBuUxCBf7HXm2jtkQ7Nr5uB6sz219jVPkCM3qyoL4RJL9csiYaKjXa4tH",
  "key22": "5R9SHEwVZuZySMpWm4aNayfJQqd2cq4Ud5HdwYkrjmYVgV91KhTa7e12CiKVi2r4x5DUNaQoWMg9f5zUuY4YdDFm",
  "key23": "5p7KzvcBZhF9JATjSqREBvB7iVCVtnNKLMkEnnkLs2pSk6xaS8YDATg17c6BbvPTDvVkUvnZac1WFHP52KTyXsAb",
  "key24": "3RvbZk1xnq81MHYCRxBqEsVJoMNSthTd6qg4uAPbvW26X1knwaeMcRy1Xe89DvDq5s6LN9E1YUc6oEg6MhVJ4fgX"
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
