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
    "4TMiJ15UBDJV99XyKwewStCkPpHyk4K1kxhb5vawoeLU6hpHHo6yEmf4hj3ctVeeBzF12nksMviNyCJ8uV3LrZAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nLH6ifNg8qZYCsG5wv63vuDer5JUbxhLqoMtLFAXQWTCUoaYF2i9rQceSWTAVgM9CAQQUF3kPraWRKvXTfS2JxY",
  "key1": "NoSxpj3BYC1k4YrMyBKJhXyB3R1jXUcJcgzkTDMCmhqiTWR22UicYYHTTANZ7zpYHtkmKssmRwsytPiPQ8bJEY4",
  "key2": "322C7cnELzrpyCcnm7jeoXieXwD9FdkfxskCe8s7gRqkVngJF7XsXjHL1p7BguZ893w7XTyNMcGuXsB7wUBeSDCi",
  "key3": "3UrgHoGgogWpmJNHFu57hDunhkLLyyTUB9drWreVacpW8UUszT42X3j4KvvT9mUGLgpKFpgASWKuipiw33v6nz5J",
  "key4": "2JhniWEiXPuZXCRn8Kjmysm97HQFf932H7i8QYPimerH3Eem87a7H1MUQrwCfcR8KofLmz7sZUX4kSEYNGX5PSGF",
  "key5": "3mZPgY2YYYBnapAJQssxuz6jMjGWskxqW7n8hKVM66s1w2ZZNcPbDcEYWWPAuPJFUXKYd5U9jEv6GHSxGH3pfdze",
  "key6": "4ef6zwJxuk5Cg6vT29HXsTrZDUSmzDbuQxJB4vaMorRvV82cbWEAMcXDN19KvP5QoUXuNJ1uTVrpfWbzguVZVBKw",
  "key7": "YngHt2sBS3HAPc4qZ5wXWKSVtWz9RXupqWtFS6t73FuCUkWn6MK1NViGdYFxZW2KfQq1tYZXC4yNK4tfewwCcyP",
  "key8": "36iDgNGdwvWMjvBec2vE3Mgm5eQndbTDsyNyUhuGhCd55A1qEeB4WdxrCLhASFLnTbCeFPzQyM5zpNWZfyH4dFaB",
  "key9": "4QRgewGADqjUN7isn84es34b3st279L9L2xCjttiRH5Rv4VwWxjkVADHVfKJR4ftzedHm1eQmoyJ3Me1YxPTVvT9",
  "key10": "22LKa96xaHyznrGuk4Ah1W3fJrF9LajHcHrjzuvVEyHJY5Qnp5oGA2nJECAahSt77SZRZasYPFVL8KZzKfuxFf2b",
  "key11": "3nmaryUsmGhhrZYKJxLcZkUdRfneeDBcp1vPTUSeuDHkaa8AtwtK27Hdki9r3q5xX9ZmWuC88qNubwfaSepaFcEG",
  "key12": "2PPXRB69SHAXzxaDpZbJ3RZ1eFvKftuUpXdHmY83b8Q1sbUXuLs1Cjti1SABgaXLAjSN2bsCzEJPd2QM6KhdJ5aG",
  "key13": "54P47uLDUDigPM1TUiqi5sC132tDKMt1PjreEit6aXADSPUczm7zN8b9MSp3trusuEFRVbSapVtCB5HDqVjVUyfW",
  "key14": "4ez2sd2bCh4S5oVmzXevRVN6HYdJhpHLLNvmWWR1qavHF7MQazVDf1xmuHCbtHbDi48Gt2CQrq91D95RpuPNV3aG",
  "key15": "4HHX3224nLBQLp3xE2P7Wi4jY87BuWdQiHbwCwYdhZYtyd665tMnj4jXAbm3euWeQBdER9kQ2fbHNeNt2jBFHqdQ",
  "key16": "2dfYg5goqjAahM6wFJJ8tWm3HrxwbdgnYcNmLKtE1Dvj3G4NZGqMAotYSByNhhrQjN1ZJKVeF7NJtHQx7W9XSVp3",
  "key17": "CRA5wgECiVYZUqvChzKdrzxAz4kTyN297pRTvDtB3BqvXWuayNQPT53H86wrpSKwNxGx7WUkwy5hLkeiV4wEZ8K",
  "key18": "qr9YnTVX7kqNXYZTxdzFiyKF4wWNxaq9fE3ExqNzxVmj2r17FXQ7f2V9dk9ZVFWaHo8bjGEC3947JS4qReEVSxD",
  "key19": "24kaNh69zZfUfLuZ6ffJQQdE7erwydf9qaea3bhkYFkewRaNXDrxcNTGVWUNXsUAGWKFavQCimDVBR8kfDRygXL1",
  "key20": "5huZanGaH9CY12XmVMZRmFhQn84sSfbVLqrrFg6Hzy7Y2BskZzVgLWhy2bg6Tm81fkh32zPB1NWuNrt5PqvGB11Y",
  "key21": "2WHSoSexgU5zxMirr8JPrRiK9R88JrXQYAwPKvEyDUdzwtZECBfhsyH6iDZSQrZs6JHmAwmZ65uo6Mv3ja29Fczi",
  "key22": "3ZdMgYj8cB5wMJCkt26jsZXJA5SnG4yS2niBxZUGi2esSQca2Rb3dE8DYgFgH7GqKSFvXRC6ukahTi94CTHyigss",
  "key23": "4cDS7KHm58i3ojwjv364tFrVAnHjrM9fwKQD73WkyUu4d11rQqKcjiyVAr349qhgrTEjNXCKwniN4du2A6unSuXN",
  "key24": "2wNoyv3DCS32AZijs3U8vbbeq8fyDnAP59TLWLC3URTLEtwgKo24E5647GmwcpHzLAt8cC2m9r4NaNBZ18D5KfSR",
  "key25": "XfHpCymjgtA6S5pA8oK9cWm43Vew4gioX8QCQPDTYAzJ7WYRZai253VtFpNMHAFEnGPiyHqW7YM6YWwxpGF7LQP",
  "key26": "4UFDHLKqkLZ3WYa6gdT2V5NNozYJnV5g3ojEFkVWasG4EuugTdQAKUfVoojdPtW3W91n4mppCDHPBZAxtUf3cHZ6",
  "key27": "2aUX1T4a4epex8pX9Qp7zP5mNqRMn7xHup8XHfWwnxR5QPhbPox1PQsrkdwvqURErUwBKehDeon4BTrBYhxor7KM",
  "key28": "26jLCdHxVkNT4buYrTRePDzDVH4j5e14y6Z2Rs8uarqGr49by2bELavrXgLTGfsi8eFxq69vVw1XAnWeJV18edwX"
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
