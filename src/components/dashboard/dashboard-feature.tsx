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
    "2JEVFLTtjrtcubt8haPPVu76JLV8SmhAm7Lm6nn7mkDjzZowerfXTJDjdnGhZ7jzLK76XqPEp9464JKLfGmEtdWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U9SUgJzbNzs3KCa8WsfjKNeq8HMXFdfmhZHqzVRBbMkGf26HqtPL7gCagmfCRJBYmwvDU7Yks4MuJQSvHauHnsZ",
  "key1": "2ntgFEGNkynkyLomCH7k9x5fkSRLTo1i73zKFMBV5b9mP1z7a19hoEgTFXnXD6h5bEhhvWhqHCbTq7MspT43sBhT",
  "key2": "4ZS2A4UqT25s6Xxw6rAV7KGc5NgyVcvYnknE6krddPphn3WHSgJMFAehdfRvDFhb1f2dRqJCJFN1mDHUZq353awt",
  "key3": "dduGy6FgXCitKu1EttY6ZPjcKRVadhgKeY1AX6rN7cVJ3MmLAWh3aoe97VPnLWV8KNmCsw5kExvcDamAzDcdDyJ",
  "key4": "24GyFWULv8CCuUM3q4EnX3KxxhKaEz5xs8A2UzR6j7Tm2hmABhxC68u9djbEghoQnf7s5i3jWUdJ35WSFvwvCCNR",
  "key5": "FXQMMKYkjGRdbx6mUEAdTaGNj8LpYNpHLTFVGrY67CzRYrJhLQrFiwR6snDVkYQXwWNdigRp7xQxDoju9W1HayA",
  "key6": "3kHgYKnCw6U1T9KN2gd84V6mieHypSma4AusrZ6mbUXkeXoY69Qxy43TaHi3LyqJD19tW3ebPzPXTfnHS6eBj6rf",
  "key7": "4kMZ6coDxQfGZHiZ1Fnu4XDgoh5i6eXPfbu68GihJAwahuytXZ29EL7DLRoVASfgZhGpcHrxizbz2onu2k7HY5j",
  "key8": "DKgMPxcnskLrzhVdbsGZc12bBE7ddhJH8WRtqe6HDs7p9mh6RhaBY91mtBH3bQZujhF5qUKZRqkE2RrfQ3ZVuMx",
  "key9": "36kPnzMRaQ6VHTjppQ1VKkaJU9PQRV1omzg9v5P5JRCdUGvNha1HnwXBjMz9QgvAUTHqMSCnkL78iNFYcKnaESX5",
  "key10": "4cXaQGZnKBDiZbU6s8QpFyQR5sMfxLNvthtb1Hm4ze15ujr2h8yomEhDwrbSDWck2KQzv2Ui1eVpXXAYUamQRPBR",
  "key11": "58xVcepjaPXboEakbzo7BTKLmPrCmDyXT9wD3r66kWSBAAtr3an13R6RdcF1nKBovVvQEXQum5sae23FgM2iaYoL",
  "key12": "5gNE1CGS4eDt8848aXNWekZKjpm7kTxPz24ZwQFFh2HGwyGqXWHcKbT4g3JMxoWoD3xtyXiGKyrYaD2skpevF6ny",
  "key13": "2b3vzAoZoHkKZXS616ZA1UFUDxVmY1nLCXok87jHDiBaw85RNWRRMX3MfnYTTdUWzdetBE6qfdhhVzvqg8sSuDdQ",
  "key14": "umRR2GeNu3NrQcuEC3diFYKYJqdJnj6czcgU8Vqfgw3nwPx5bRvV8CP27tfhdPKYs7nPfCgEA28AXW2AwHMGsZ9",
  "key15": "5X8L2Ff1ySYA7TdP3RFtSGQnS1ESNg88Yy2Hs5PmDyi5oRpBywLtxGXcaUcirBGyEJaUmB4qW616bMLRd1VFTdY8",
  "key16": "5Dt9TScq9U7z1uKhWP9vG1RcPzcykCARBVuvYovUE81QGxGKLuM49tYhgJWnGa3Cs52AUio63X5qa9KdAu4EaxxD",
  "key17": "33SM86GxGRt9vcJFn8qwuX8Z42CK5NFDsQZPaeKhqKj5r5EQKrBpRss1tkUVkRhfTsSqBsqhYSE2Ay4Pdp6KDx8i",
  "key18": "2Cz7PzMLZfmgkhopdJ4UTj2T4vGN5kHNbZBx3eHao6curbqcD7z2VtNRDBKoCLskZNcaVipajVjSg7r5rckfwZXn",
  "key19": "5qHuFmGE19t2BHjJw1ApAidWzQqZfpnTYw6b7qMjnvHifgWrzHRgy2hPLnr88hDn2z6rBJEK24iczH2theoEsWmh",
  "key20": "3ZqK7tPkczjxZwLMjK9SJd5DvRCrXyT72qe7rZCooXX1eTpxdGbydfNnpemaVebraJ4UfUb9vwWk1AytNSV8fR1k",
  "key21": "3MVN7q5xr6ayL7w9NNus7b8TBQcxSA8sFwkdyhygH4RpNMu8UTNDGsNdEDEfxKyN1rXAtkE59BrDHBU7umxixmWC",
  "key22": "8QYy2JCFWNGddg49BHgYsg2rAduFg9Rr1YPpo1LqhZREG8DudkuHgK4bPwnaFz1wiRpX7i57FVU84Mm44pTmvwT",
  "key23": "46jq7DLMy9wdpRazytzhobdEz9wS3uz4tNjrpza9dFGyc3HypeuZoFe7dN9ZuQYVt4AxoAtRbJpoJU3LkZuDVCJ8",
  "key24": "5XKRwsV4yHPWmw1KqEXXRaMZ6kY3SfkAJ74aosM67koJLqAaBXdDZ8YsrzWLwyt7DorYbYZN8hz4Jjgjy1uhLy6v"
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
