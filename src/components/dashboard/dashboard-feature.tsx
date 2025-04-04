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
    "3QkCpYsitXbBqBSHEctBv15NGgFphdtLADD4xmYFbgSJpARi1gJXVtfJ3jzsSdXxduY8f5Tio6ZHREW2CTex3Zmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gWrWug3BCKY8Wyb2TWY3NcSByxKwdRKQrAJSucJxuYcb7bsQFjNdv4jxK9tTRq29kGjw3N59TcFjkBPTu14TKZc",
  "key1": "Ux1FegkhXcKhDV7BMQD2LtcpKLuPeZVJeBQsLY6rNieHTFY8pbkgH7g7kPKbNj7QGWrDxCKttX4d5hvW8Uoz96b",
  "key2": "wswcLyuxBuyyRDV4wBhntmrrd1QMezYXqahrqVBfRJkfXcDWnUq34zCfQHtUp8abmsBQhcyUiDGu1N4ZXL9rbua",
  "key3": "29fh1FBWJ3WE8Aj91FZ4jVQmUE1e54By7gijH1TAtiRpKEh5An28ak7Dghrf5MWwZJPNRcyznT3A7Byqx4ef5yKs",
  "key4": "3E43UJEn4vs7a6b3kLFLVXum8NKdUetjU3NA7pGKNaQz9vwcv3KurfYLBB5ZjocU6XeRBXtXN8Lgu28pThCZmx7c",
  "key5": "51vDYoDeUR2weSbGHtDR76eNT82FGAAVi7H5T8dRqvtJtoo3WccWRBND7V2fGiErLAi6PSiDwmEXsqnCkz1bbYMw",
  "key6": "4MysBuaVHt5FLHKfELhgCDTZhv3mRA8GLRRXsdUUTwWpv4tSucXQcpA8AyqQR4wi5XNmqUGCzrZjv4T81SG7bgre",
  "key7": "5da4DSyyKdDuNBK4Sses16JauyXjDsaLSJSBPvnTroopP7a7yDDXmt766UZVQHG2VYJvEj1GqGo56EWStZyd1ecX",
  "key8": "4JiyFUk5YSSnhKySE46aaSuWb85XGmMKxSBQiDNVgoGLCpF6RtqZntjQF7sCkxWFVpU7JtmeWmkiegTgxHD4kQiR",
  "key9": "AuAsz4PAufcyKVJuhJU4bV77Y3AdFwD5FBkydQXTwWvTLW8rE5DLm7ATyzuHh4phGeVPurcEi7V4phiZ9eTpNQB",
  "key10": "5t6gSicixkzPRaVEGPveA9KFn78jmUA9xtE2DFJexqMk94RURDR6TaBQnG8h21o9YTvrrGzs3h4Zz5tkUtGb3Ra6",
  "key11": "5NFJDnXFkkB5b6huab6Vyq1weVxDxr9WKGb4B1EMqNCUaabqFBb54pEDVTSr5ZAUZ5C9cNPAuvu4VeX2usqdUbYL",
  "key12": "5T8wEx9YtQRyM3deyhX9kJQFYonekpqg3VBBQjJ5ejmt7WGJK1TR3QCjp4guEt3HRGkAgj9KTRmEgBonJKM9CxBy",
  "key13": "LLQcWEffEyikmhxsfLdx1jiUP7mpeSV1sVw1XvGGA3aByC5A8q7R6zgur48rGrrr4YXpSDEA4sVUSB4x8EpGW9b",
  "key14": "Zos3urAQpTDWbZKTumQLcqBPRoturAq31wx5St24a3w2m9jVAV25kbQKGYdwjEjg3dYiTZVzPJGxYQCUzmqWr3C",
  "key15": "22KJZ5omgyEnX4W1gPhMKiChTMcyegWAmQtX2gX2cMMb9jYT5ujMVLDeDdzSt7EbNLtMPtKBE2WQNeXTaW8sfGTi",
  "key16": "37pkJqZFsuD5wjPHtKBCQX5uwkumzaNSe8NayDBofEDov9myQJkbQyLFjtaUCF2GrYQCxJhe32diqxmEusAbd5N5",
  "key17": "3o2ZVa8ShcEoH2Fn5LmP9X6Hbd8mYf5xSfGuz19feQua6LnfMH822da6T9BhcprdscVUTCF6ccVFQNjJJPX1TrFA",
  "key18": "5RsMmfoHByJTFtJJRkttLySw8AuqjTyRDEYH4WB2gMEoMZBnKca2LefDo1Um5g2k9ZgPS4BASwMwStGSRyzypqsc",
  "key19": "5JF9PW9VzXro57qiFGxVrXbDAdZj8LCjDsygq9rRNGzSfLwVKi85cFjxbjojunnPaTfGU7bmVw4jqu751ueoni15",
  "key20": "3ZhkRVDp5aghxnCL5aGpnQNN3BRYXrU5Pmy1qmJaAj2pAerKCUJMPcBux4cEAzoRPQcUaPf7vABH5sQZXfdsZkQr",
  "key21": "48DPUTVhYcYiGx3fvarRzSvNHXjmc6ArspBqJ9NRuQnw437zbJmYneAjpmqnfM8T8WYnkPxDgU1oyspWJYMDoGva",
  "key22": "5uGyWDJKCV5td5pbYZd5g7ALcA6RMvAvcEcCuSSwsScq4pnYu1VmGyBy9rFb33qLgSquqypvEJU1SAZMycL8TfDM",
  "key23": "2z5atPyWGVeYeVgnoVqBJxJbeU1YpcxbeyuCAWpc3jCpJTrNtg9zGAiP5Td1FdnEEPPjzwMDj6jTvRWNPg5DYeSL",
  "key24": "XCqLw7YVf2R79cL4YEuzsiYk5obNZda7CtmDyEHo1PG5XVeUojsrb2Gisdh3NQnPVCfeSv3dhXviaoqn8GiXa9P",
  "key25": "2TxaXMkjaLqCBCh6Wd3gdtn4C6uGbdHUmhbgwWUrMjgD3dSoz68wcirxvZQBjgL2GqQjFj5XT6FPtFqDqYHfJByB",
  "key26": "3Phr2Rc8DxdNKn1UTx2DXZTicsxvfT59z8TWe454uJ7gjqPd25Wc3qo8royPm6rHE8eiscyYJHAx5LjqvkLygxh4"
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
