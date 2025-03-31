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
    "xA9BpyBeHoeWup3ufnYhthBdGcM28W7u4EWMDdvidmNSdMmdnqXiartyWHjwh3EY4dTGQrzvSB6Ss2tRd7hjVaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46EoDarykUgv32t2HoZUDPRaC3HKgF6bNVtHipy5RUYDNY7MDo4dL46P2JLLVW5emyvCmuaqFYiACYNSVz5FQRXJ",
  "key1": "5VZJj5L7Nm4eiLHKLkbi3uvAz14nc7MpxCLzp6chYcFPRZYTRBPRJoTyLHVuAWSM3r3oRgDunMrEKrJBQtswBLt4",
  "key2": "2JRAgYw1mUV1daPcyVceDKw1DvuNzytA14ZFGXmdJM4vawAAV2Akyr2BrcBmgQ13Bsjx2mqJmfH9XyqEAJGU4yj3",
  "key3": "ph2u9zjho69GCgJShspAo2TqAQTfVkssrrsEHhBpBr5oLbkuz7Cm46JToXpUSc6haZidBzUDJ9RAng4tEZxvx4y",
  "key4": "8BoumDTvLLrgiKknCzM4WRCtsq2mLGBvoLGdajpuRoD3hRuJbaGn8btBP3gJQk89Pf9AhLEN9WxBqt5xRcXd66M",
  "key5": "4xj1RKrBGtmmYqzwpCmyG4tZaHbJNTyie4Lq7VhcN7Cny3UhwfoFAZfaNZnB3TufzabJ5ghyT1PmpnUqAaMCjVAw",
  "key6": "4MLcwuW1ULDsrXwmRJz4rhkmjpg1XRyynaAjAEvFQAouq5uc31DSaP8D6t9KCi9sKvrExfXVjJNoEwBA1BXT4hQD",
  "key7": "NYGNAu2osaMmkHpPYyzufMewPs7DNWHVzJ6yTHFeqDiAQDh8YKHUrCJk8hQ9Lko3kSnCThRoMwK5tnnU2qjKmTJ",
  "key8": "3zhtTa51oG5uRnX2wZ3Hgp1ZgfPbcFmSkjmrxpXuiMfP8rJfhNqMBXfz5JvNV9UK4uhZSe4kZ3A2YJAFxhE6JVQU",
  "key9": "3jazH8oHzogaGE4Ba2TgaT27xqRAbYBW4mBbyyEaYH6W54FCPkiNJ5u1A31tz2HigVjpCbr1sPSj3GNsWF1C9Cc6",
  "key10": "5pCceL4kPPzWrkh9Ht9me5a2KFgB4P2TAkiAH2uU6gFSSAkfwi8XPzzwGRJd3F6BvpBVEDKDQkBe8t9Auc1tZUij",
  "key11": "3DLJMuBF99kdybZzY8d4RQKVistMjXYPnaJSC1AxqPwP9HkMmtEtEyjTC2us26xR33WoAaTdsWrP8SPpyBACjaTR",
  "key12": "45ynB8iKUczV1aptkKrvTLtpYvWxZTUgpjTLSSyXQZ1sU7DEvVDbfQbBv3gzWhLSauJqMt2fyP8YNcT58rKv3h3G",
  "key13": "FuHLY8eDhRysJ4gnTYWrVL1UWJhJcmd4cwZrx32TaDMtDYzm419Hgjcppeh6iUVm3yqDCHNxKV2JXKqgq8EBx5t",
  "key14": "57UrHyXAK9PU4EGHEroqmnuqXKMqHrxfmYETRsmhRh84ZERoQYWCj7sqmfGEDyBiKDo3UrW52Q6iuByxEcfKTrVk",
  "key15": "4pY9dqqu1amVMfGGqSvTarm4iQ8tTt6xRk2SUiDWdBhZgVKuCoA9qVPRBfe1mjDnR2nXcm4wzyanZ9JgQuyajEYY",
  "key16": "28oV8pMnvz4DrjNZz2CbB3z1Yg4vUA58L7wqNCXCn2mxzrBqCXxujwjkTH2ufuDoDLCmCowJS2cgMAP5TDB3viFk",
  "key17": "5wzuyp6QvjJjfvYvikBLwC1SCXhnCju3C9g9i64TXMJ6qg9Lo3tnYgUyuWXYE8YKL47GAoqneq73SwCTPFHo4w4g",
  "key18": "49qeHbKfyfc912p5LtyUZQnRPMhjyzWhP9DSx5R9X7EFrXtxyYq3VrnTGCRCDvgNpWNTRtjwUWJxCB2K5RX8QqDx",
  "key19": "4gjwzT2wFK7RLcKWkr29gGJv2cMj4frFeN1rnSYChrkb2M46YYKtsAUHePRFRHrBAg9zipMTtF4WjsyihmcgGvZU",
  "key20": "5cwMsnJB5yo2bFypUFNAoCf9tW2bYWfKtVidbPprM2HvySJ2BkKvGfWQRPbTnXDZp4kzu56VUnn4BTB3PoNwVyq7",
  "key21": "5UVoyRWX4iFedugMHhq9MHUxoMkhrF5iK2hBwMiyraj9sF1FGJN9uCckUe7abF5HomqPsbntHDjPdZUbvoo3fkxz",
  "key22": "3qwb2GNURXYQmHwwNjCfpDnF2HK8ZBNtFX7rMxyXCgEWBVdo9JAUp4rHhaCgRTL9UAFeGSqJbmZVDK2Rxshb6dko",
  "key23": "j1CfjZTeVuSaqvijcHPXiAgLn4QBieu86cJgRdEPDAtGcZ7EdZiUGTjLpphpN7mqEy6cyz1aexYKWK1ArSStPsP",
  "key24": "4MUzwkiECTr3CV8xgWqyozh78yVuriMKWfSXt8AmPxBcidAkcNNzCYP1EMXReuqvWR4B3jPum6YBKRUs6g77XfAh"
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
