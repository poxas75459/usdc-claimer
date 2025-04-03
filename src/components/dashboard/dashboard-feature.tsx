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
    "44Zwm1GyWc8fkoEMcyqX1Mq619FbAocXDBxXjhs5ixSEZvas6qhwQFTbFkWkSczwptBiaLGC9YCtoqt152TTu1DR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dSKFjYQCKmRBaVoh5bwGfwQZ2CsAy8CmK4pGbDWM3pMz3rvtvemH55pWpRjRveE5v3XeNEZcZnM5pYg5pMwuJY1",
  "key1": "2mAXe2CNCxT7xkNkpCmce4UZZATM8uomKMB11u4Ya9Zn44swxNeAUBxCXiHMgV9uAwdXrG39Jwvm9hCWzMVBaqCv",
  "key2": "5V1VgPoSpwz43GvLBqqZJBhNvCXdWjG4b1MAdb1KPqCVrwgnx6zSgRuKjL5X9xHsZNGYs5bhLa3s2wgQPyHSY2MM",
  "key3": "3HQvYtF5LVXGJuakuWg3pViUbZ7WHNM97PynxVR5iJqVycPybJz1iVQcRb2CMfPj7YhqKxu486tp4NqNa7NasdAg",
  "key4": "8vV7rzMVTtZZojvY7Tqmo1UnA83VvSfConxjCHpMifoknUegX3vq3UrUP4ZZEoPRs7SesP5m75TinV9oeMBmVcF",
  "key5": "c1pXKNkbraWoLzRMVL7cc254KbLhj99fLttsUtmPgrVAjjRUWEUAB3YzD934CwDwVfaGt9sxnSaafnnWsQ7iaEE",
  "key6": "5i2rL5Nxjf4Y9CFoPod7774w85Su32B9z5PW3A7ZTSxUbzx4yYTDrZYXpjW3UbsdGxGodHHU5gLkq5VnWY4G5yuZ",
  "key7": "31ux3DABRVMtzfcyAb5qAY3ziiHLvRvjyceDrUppTngGeFKuuKDHwkAmJXwBYsyzMuimfxBUtDZgPCukMwwS9Zmb",
  "key8": "3PSjxBZH7gtY8yaNrfNMecHLkhzEpE6CrnXovV5ne9FgsXzJpcWrt5GjtnAs5fy8GNMjQR3MCAmwX6ioSHWc1zJ6",
  "key9": "ZZ4wbk1eHHTHTi1wTbXqwAKw9CgrPdZR1XSaPUrpVQdBoiNmCSSWgz2MZGjpbEMs9kDdWw6NbBZ4g58dMuxFFtu",
  "key10": "5Hkrr2P9y3JViKeZaVMFaqRs4GHFWUfS2ALReUcLwa5tNU7KBXE9jvsDxZMpGMgTPBY2kjnjSainuzT3wJSArqtF",
  "key11": "3hCeHMMeDpmdbRn7Qvhfdbd2osR1jhL5SGKfhDoaYLxqvR323Cusj8BqPvnuBo8XJdLpYfdYamFSqyduJKMMbQQu",
  "key12": "2hPWWEEhx1cydqxc8EkY1iYK4zb51d53PzVhRwdeCnK1Q18QhqEKdqxYQbZchQ6rKtgMbaGg5y2nee8L2vjeQH3k",
  "key13": "4HRTb4KZF8tL64krRyP1qNBBRw9x7V23BqnSxV7M6YfASdksaD3rJXRMSXgfM7PYXNTMPsY8vDuSgKQzQVYyLPhZ",
  "key14": "5baNPL6sHaBgzcJFZWxEzpe88vWrnVR7Es4ZaftQ2PZ1noCoGXttNy8k26W3dQs9yHXsQPYJW2jUKGjyqqZEcNYF",
  "key15": "4U7CzPoJeZrCJAXw8q1aU6KBc3R1zfX9tNQPPbSguWqkCuuabx2FteKmMzemnjeNkXiyTKvS1A4c8ZYcfwQj3Wxp",
  "key16": "43noibpT3jc3iby9ZjG33Cr9Y4ZZnrhCLT4a1MsSY12SqjD3RVxrrbMrxC2EPQdXWg4QujXsHexVtF7fd5ktsSAy",
  "key17": "4HXphhHamFFp9FFtohgs6FLkGuJNwwKY5NDFMDqkXKdxsAnKGZgaPHqpDtHpCXtvwx3onmpyjWYmoxY1HR4kU1pD",
  "key18": "292De74SDb1TeDbwTk6R3MZuoo1UBgYw9gXbrSxR2rZdrgpnp68VVnxwy3rmUJ8HBFUF6hJ6zWgC2WEn6u3y4hxa",
  "key19": "2uevRKsSJPKS6fN4oX8uaLuytBV4imrGbhFxtPzL2pk5h15mZKwfsVAr1NvBuczsRv2PrBsB2zP6N3J5yPQney7J",
  "key20": "BByqdurHRUSidreN2o2cjJE2sKWgZU3tkn7RhQCPk6v66SaHDohhAazZ9FDbQf2WbWaYEkjF9racuMbDNvctsZB",
  "key21": "4y73XScsyT7WHGHyCioH9zsB2mhk5mtfMVU7U9rHM3prJN83vHTF7hw4Zv3pkm8fDGvNydPPxtHA5Aq62qwF9iqb",
  "key22": "5xrhQqkmKDttZDNWXcHzB65C3gN7Bnh5ciHotGNjCAwnJJ9aXsJytgALV2t8oWYwoz7SgZiKfZZTCTroaL5qhvtQ",
  "key23": "2izHG4u27yEnVDF2vzzwkckQvYH9z86ZYYL2xarkERYqe6kt4S6vcu7EZE7nKPYWagdZNGsyDWnxbwVz2GLv1dFA",
  "key24": "5eudi7fHkrD2pTcoqQPwP8HYK3tghpw717z7TqmpfyhzEVyiLRYGYvxZWfKBjGCNAD58VDW538T8EoPpn2L8AzJN",
  "key25": "5kNLyg46zHqwHaKScHNSuYv2cY6UkxEdVouc2zfYe43KT2EjihmFn92rJ1oqctTuWsifiUevrT4bBZHqTpdYZaH",
  "key26": "3TkEhCqFxFejQU3864EG8GGaT6dRTaY8hU6dRDVwFHLZsua7keJ9oqpKfHpn4G6r8FBXQwvh77hHhs8zPh3DKLf7",
  "key27": "2A6jaWCAGUgWVyfDuUT8jHJjAbxaE5XNTcud9XFq7zPPaLvCoRef71MJfC1KNxhvU9Vm3eyBG6zvF2HKezq6thqG",
  "key28": "2m1iJFm5VUKzdwDG9KPjedmNm2oDrgPfFJd2N7ECUw4AaFn1SeYYi2rFZey8RsshW1tKUokkQzHi2UhouauSBdUw",
  "key29": "2K1r8j1gPXVSuFgtYsmPXKbm1pwvgk5TH2bqeTmHihDE75LXSEX41hkSzmvy1Sv5u3NrM9Pqa47TZRnt6XSws1bX"
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
