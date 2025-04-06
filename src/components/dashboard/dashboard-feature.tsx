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
    "2mQMsAmfX4f3NvdxQQmJwGjZgfd9wUQfWG2vpaWSEqR6EaJWUcw7WeAjR3nFMYCxxg1QeHnxzzB5mcHgt2Tq77Bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d3DFtQ6vMotopqDeRnPxJkMjC73h19Y7LzXXDPUPBqCzGKbrJH3PbijmWm6LfqPVt3zDC1G364GtuWiXBhwu5sy",
  "key1": "4w5VERjx1cAGUEXubeu8uVK7fVEggjbYRthsacApomAL66nWDmYwJSfa2mDr9p3QfgwaX9yh4xJR9M9wGFbqrnRR",
  "key2": "4W5At3cNc5KgkcVaxeEVtGDHXDs21XTLGyoGEjoGJVc73H1NJWycm54hRgHr2C8HqcpqU5jN7pKffFkfpxYw6FzF",
  "key3": "41m741ppqbRqQWQFwAsvtzBfADwVoydV4eVzUmKkWetFwEXXQq3impjr3vyhTKqUbfUBQfNM1wht5UFtYv9ZktCz",
  "key4": "pDDnd1K7CxKwUAqrthMdHc38mXHZcdFscXx4yJyiwWkKBNPrNjpX53LumHNUMnBtVNrL6VcRC8qAFxPdzEuWXPT",
  "key5": "3mVqt4kd75yyypS4A2yhHNwCpQ5kFqFqrH8Hs4gkNdW6CeusAY2oVek5bHNAkfbPEnSNAQNhP9BD2FkHgkxNoRfu",
  "key6": "3dhRpjoqfDx5iXVqXQNJxqSWtQ7oHLP2coW7HdRcscTQ9pXfTqbDNMWU4dhCPEFEAJUiHBmXtkQnHQBLTNKFUiJk",
  "key7": "uSp6LW3ejZXXvrANNaVGjRF4raDhL3pmePHNzvZH6dpPrr1qgPWwLPVgxcYQzL2g7XgHdrzvrqfikqxBhpfcFsh",
  "key8": "poX6vpS6GCgnT9UgDV1QvYJEtaLD5LtYV8FcSXen3o4uwYLWPrim2vbyAHQsGiyuUZkrDJjzyEkW32ZLUebfhve",
  "key9": "4TwVpFjkNPXX5xuA1qfJ15vEXR8DVhA8q5YzvpGSsX6Nv4NbD7GTNQqBo1Lv8CRepUYvyNmpWCeJy8dnvEy2nHQH",
  "key10": "416jZEHAG3fASD4VPwJsYU4God5vm1JxAJTuNFqLUke6yepJK1Fz4Vru1TmzvTaRWcaUUHGGkfExSXr6QK8JsuLm",
  "key11": "28Dt2cHgPxcaMwPqVNWyfC6e879KiGUiD2fZjNcdGWZeHhk3Ak5RYQqFvdEVes8A6XemAuoW2nr1SPXdpkrq84Qq",
  "key12": "5BwzfTU5iLwBYRmkWBm3ydUUBKetVaDJB71x8FxrHyKUJbgF3KmzeTeLJXuaLDb17JV3mF4BqWeK4KvzAbs1iXrA",
  "key13": "3XswsyAu2R6HeUtS8xjneZUbZm5sWciRkZv3iib15eg8QZfc4FDhDpkNEyttFJ9Pbg4mskDrjHVfoTGTfyc1yLrG",
  "key14": "24ZjpjFaVLrUqBmQ1tXtpj28N2acp7qAPb5cXzyobzfF94rsWurJjAuXTrikdjgWr3tu9cxN1wPCqJwuDCA2vT4s",
  "key15": "5t5SaFn3biqHf3mFAGctjqDUynhsHWgDvPHnYGVuMusgtkgoyGFgBe6RGUhWS3vhqUqiTa9eCciQLktUAaNDUBgU",
  "key16": "5UxSg6pcAtqFyQzpJcwwJdn4Tf68TLJytvWYZPBwojMxip9x5SVAGbX3DxLUAcneeQvXeVPXS7AJw8r8ReuVhJvb",
  "key17": "5xK1dDRnbveQtSxA2zc5w6QgagkutL97GE7XNmq9m3GV5se1FdghTq6S4Xiuw2RDHn6NiTmpupKmLGxfH1fUgPmw",
  "key18": "CVwSVCaEB7zsr6kNQzKN6z9pRKRgvDgoZVHwbc1jmcWbUkUqRNbsE6oobMsJXnkuZGZFKDjNf6bNKCxVnTnfnD9",
  "key19": "54W1rUzaTiSb55iYKvt8p5e4rSSFqKshsorGJKnH9W76Q5G6FAskNZejjpuYZjYfVuF5bJNwr8pd5LS5V5CFnXNn",
  "key20": "3sgTnwwHapz8dMNxYn8y98iyYV2f4mk2uog3BRCxtBtVyc6SigHkJrmfwF6pACBbtunK6CveZ5nVhkPUCxFsKBur",
  "key21": "G62pPt1FgRGoK7g5yFyps9DMEw4zcNiw6VG9gkjZRdMUSD6kiaxH7TbHNd2Wu83wvfziLHCLrHF8G1yBuRkR2nm",
  "key22": "2HrNRok5tFcSjrJTPw1N8JtzB96wbWQwdDJF54HqutZBXaUXEBe6TJE5tCcQCwUUHcpUgR5Vwyj7ioLiws5JJ2Fd",
  "key23": "3yKHKkzRUMCuo1mJKwCP1agbMVPMTVoN69XPaWwFkNcsJ5bzVWSHmZPWka7qijbzKpyK6LfcVytPGWqAmJD3WqAi",
  "key24": "4jLGBBkitbtnG6rSyxjabN8uCeNns1ypEbHXvNAAqosGVERttifpwKSyuWtuSQLPDnoTFdgtDCsUaqgySftcr1nR"
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
