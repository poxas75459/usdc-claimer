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
    "8Fb7a8FgA4ZBhVpYThBKET7w3V1PfM7KHeF5KQhGGKHRx8YkFQbuLLJaZxxFTibpmPAKD6HywsNDXCm8osHzacP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LSh9QDiMmZ3Xarxrcv29xaXmTbQNLY3DgeqdYZmGZnk247F6M9aWa9SAFtVuDfagGYp5o1ZGWYH6rG9CLwU5MBz",
  "key1": "3GUQddrpLMiA1MNZDmHr4pa6ywxF2BeCqjUcfWucUoUEu5KDTcmBvGiQ4ZmyBybDXpbLPpKfL3D1b5sMCrBr92U6",
  "key2": "3ZkaNgK5kdT8Ur7bRjBgiVajBar9s3EphT4hindhm4jDDK9KwbmVwWZ4adnj68wV4LteeaVhLZs1gNuZ9zu7o6SQ",
  "key3": "2Q3Tc8CDKpGq37GRmzJ2cQM3TRppsnNpYXHuSPoaUxXqw2fHWwaUaPywQdWvoJUP6mFytDmiDmuUrCfumXsDSva6",
  "key4": "3aFbV8v8CgwV5EQtTDF9Z5z8tkXzJoJqbMNkTy9mvCw1GovgcVVPVe44323Yk3LpD374gi7RfyBSKfDJ9TNGHd6B",
  "key5": "2njFCWhJpgwCLvxaajQLsKaGZYcHWe3gSQ5cQHS4kXfzZc6HvVKvFQaWcLEzYopthX76MfaPLqFBVB3vPYS1gNNZ",
  "key6": "5wRbKr4kEk7Z7zrLAxbk8ZfeaHkGHiofBz9hnoFzHnez6MzhPTFvo29eQPufkdNcXZYGfLnVau1VVAoS1SGXk21h",
  "key7": "dseY81WJbdUhSzQnJZoR49qociiH2xuLp9hTHBBPbwC43LxkpBTFF5jYG1ZpVhUZznDrhEMmCH2fdWGgsSZSdDM",
  "key8": "3Q3FWfwSykPd4emwJJ3et9bkrUCm7DPSnXbWvGYng1NoBRujr8n8xfjSamMGjDR9rxJYEgH8WFYtR8ffgZH7bFsH",
  "key9": "4bvwLRtbgSn75gbxubU6KFijitH9bGEbns8d89e9CKivr4yhxu93SnNxYnqS8uVtPG9PVMcLiekWUfsyAM6wQ6kz",
  "key10": "2v1Lbq5sqwwGZQB2eZJvdBBueCk2cEjxUoE1SRoCiyQbf1AiQv66Qe6igsyzUztSyCWcqMY1PH1K3NnqVwySXFLL",
  "key11": "4VNjz6Dgw7KNpGZxvkVre3V4ZATFTQzzkdC3eNrnajPqN92cs9iddE666wNvw658sEn4Q3fnaysgYwnhD391R1vW",
  "key12": "phVcbTzq87SoeD7ePYNrgtXViMNuyS55o3E2p2bKBgpBhHntjV54KpHGbsjXJ3GTGkb2RCedf4W9tLwA63WnH4p",
  "key13": "waTnEkChU5gXv8t63H9ZpJ7AmTVsc1QuLE28rcSV6kYWBfNPZFJKwjypz7pYRrqbA1K4JrQMFrN3pLF9cMzkmoS",
  "key14": "2qnQnyxyaHxCRhcW9fLFY7b7R7bkZzYwVqf1YAWSCkABjX1HjTa6tAmexnKEiAEUddZ2GdtpEorK7pkfk3T76Vtu",
  "key15": "nxTPDwErSPMFddW6dfRLvdgBBuxdtPnioGPKNxEKQcNmAkbb5S8kihUXtfp8FCEeD65Rsnrep8XxDA5sfkrA1gi",
  "key16": "5JBq5xE6F19L4zGUNRD5TEsXf2RuVvh4f4DaEXPWdUsvFnHkNZH6kGrmkbrXS3QzmUDBRVaDaxnenu7N8ycwj5ob",
  "key17": "3V2SVXYroc343dt9s3GERbpQgKR5zFTRn5N5odzwkhbG8i28JdmuKPuC6gmPW7XEF6B92q4jk8eNrjU1UdXJbfgB",
  "key18": "5eKWxMQ5iCcPJhw3gxZTZ6tvvy2SVLVazAb7wVeRMb3DWLzR1vBTVhbsW5BUWcZtnPEZUnggyp2RMQjmMNtdFK8f",
  "key19": "3rF6A6Md4cUQUkwBC1QjTgV5ajFbr4aLKNmbBLq7N4KdqnYirTPzYdrQ7N9oB5uYTeS9PW4v1pBHAHkXtccm3gn7",
  "key20": "2zadGzmAe6BmTEjWEUgQYLUdqfsPvB2q4WcPrddZdudr4TYiFMdfABa2wrXCWVjHPUVeEguiJJicK6UQEMSG4jgy",
  "key21": "BmukAQPRsgi4FzWqR3MGY2hWpG1kAsqh8c8pF6gq78jw5R1ZgYK2aaH7tUP333a3p7vK5Dxy7oTnRA3DZ5sm9Q8",
  "key22": "2Dw6xHycAwbmk6U3hTJAGGFa2fBk2yFjexEPbXRpAQMgoNBHTeV7g2Ax4wm2Bcc6KhdcgE4vceiNVry8mgai1mhQ",
  "key23": "4bkKBp3gYVcrGDTcJetSGuK7MeHGJXu9GsmQQWiZXrzJcWQ94sdpWMiySfpHYNVgAjjjrMhZ35YmFPiT8FwznYTV",
  "key24": "4HV9hdq229CF1cgqSQuFJEad9Ljm3Gkd4umJYQn5NWSkT29H4JV5WFowubTQMm3t4t96eoFNjx36FjfgS3fADaTB",
  "key25": "5zFVAaWqBmSjccvCbaxtq6zYBBT1KR3PBktiwjxP9kot9GFTP8xbPU52V48uTQ3Y26jmZ6rapSiskh8agh494fSe",
  "key26": "4sF2u2yMR8hL9RybdAuKCZVmgQRypDuzytdfZeZU71Q9GjiA6JBYG1qXbTh4SmDajD8usnEtwADaeeup62xXKqEU",
  "key27": "4Xf43hpu1kUM4EibjbUJ7AVURh3nnXR4i5zGMW9xjhYSEwqJJ629pcxRVJ63wxNsqG3tHaqwBgjki23qZiNUEZQ6",
  "key28": "2ALM4Viapo5JQS8ksyiyQZh8TgrpCrru1wBBQRj942jeTFZ6DwRoHcbsizegEcB7YEQcGJfHz7pnJfuLTqF8eSsn",
  "key29": "4fRS5XK48LYzE2gq815W7iHcbXK2xYDiVXh3igy4nwkEyaYHqBKdoi5tG7sr6jDZDLSfR1SA2ookQAQoyH6BuNy8",
  "key30": "DS9yY6Fnyf5QvLhsKUKgRzisD9G8b6M9m7Up6zeERxAeboKcaaFhejDi32dEBv8RX7y4EV3WUhG4pGcHSAsB7Mh",
  "key31": "J4mKnLc99vYdP5FWr7nNLGBzjyjW1Hybgs912PMScjbi8SER7PX8nZ9yrzJYE6evMunUXZ5Lc6pWGcCcvnjQZ9H",
  "key32": "4t9kiqoaX69fMYrAmR3kRwnARiYFLE2nPsmKwofeJ3gdadxU58ndTRutVyvhP4WFRoXcQNsMKfvwE11jDeBkxPKr",
  "key33": "5uHmicyzF1u1yQDpyWmoLBYvyoa3zQzu6NCniqxw9CGJkBNhT7dWn8JPPbUotqeVepxHnkWX9Bc5cJnsBwRWeqoW",
  "key34": "5uxTFu9xpvpj8myJeR1DU9kidQcJuZSSXR6pdEdV7VTeZtdQ5u6sRkCpbdWCuKFe3Te8GDXuF8pWCAEQSsn5n3Ny"
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
