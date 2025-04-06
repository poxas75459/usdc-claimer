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
    "2oDF56mMnPq9bxoEs57YDeh1FwJbPRNdkeS4x6oGijf8j6PWsXvyH88gdnCqkFNc1vsputzNbQ6wU9YYniedMab2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VwGDRsUR875pdsBbjrag2Gnhp7qSCN3NBBjxx1HquUPZx1rSQ3YxsWGb6SYXAA3BjBczCuK77X2FXdeo69cKq2m",
  "key1": "49UGLgqLPu24mKaRMCYu4teiNpn8pmpTkGx93MMgh6rmi84uobYHqiFi2hL66aPzAKZDLVq68to55C2iAbQvb8u3",
  "key2": "5JcUHdCJDQc4oWCVqss9Y2qjGs8av62NcwCZoDCNGWVDh1J36RVDQMF1GveXrQ5RziYSKgMGZehg1ptTiDKXgA3o",
  "key3": "4y5yakfi1vKWsZcaFgTvDZbfqZtqB1kTwipwSXi5LSvUhy5Zd1chsZJ1fCWbvsESy93pifCPDLbB4GgjMt2wgeWy",
  "key4": "w9VpcJEBDPZ3gpJd77dgr7UpJ9Yrjo7GJjsH5VWEzdR3WYympDaep7T4WiBHEBNLr8XHRcj6mpxSoaQMD2D7hSQ",
  "key5": "5Yo64YwRny9poH3BHHdbCX45KGkbeUtUvGTbu8A93rjPGyQMdntmedDyhT2YhvFhsH2tkNJjnk9DPQzLCy2jo719",
  "key6": "4FF63BqQzWkoLopEmBjJBawnDp2JUrUdrAQKNH582oePhCprdXDmB4JZaUciopKRDaJYvLbemESsto3HjeeQ59Z4",
  "key7": "5gR99DkpyjKPyouipSM3pG9k9khFhTpU8ig4787WRmgLWdQE9eEPJcLUCKPS7mune2G7VsRd81XCu4BZWgvizkDz",
  "key8": "2SSkUZivctnw3mqYTJVrAJHuzLR53ez98xPoDsTpkiDVJZE9AhyoLn3YkBvxycB6pwjMja18mijcbM4jnhC5oksz",
  "key9": "2pxCi2Zp1CmtFuNGonaZtWVvxVCMH9KcqfQwHoGLa63WGNZP8ePzoPrLXgxiUHt6HzdiGJWDhu7aD25kvuMbZGfb",
  "key10": "4a4i44U29J8g8tg4T9sZ4tXU6rEXbX8unmpcT31kjCgJKdARkfXDmYk9gcgu8Tw651EnUY6m3EstY4B46E8d99pJ",
  "key11": "2i2Q9KWy8Kff1v5DRirkVCuGUHFpjtn62cNBGddNpsfGwSVL3t3Sp1b62cgzBgVW8L9fdvtJ4cwrVSUjtvBFg8pH",
  "key12": "4FJnbRUsU7Ft64jQXW1ktFXJoxGkuHKZ2vTDtWp18TbBwCCdBwznxeWT9KXJhNnnVmMSbevxaPMZQMjzpA3S4imm",
  "key13": "Wmq418WnHoPYnSHYtwFSrbx4bwPrKMFH3QKAbMcKhLQhcLPgZEiTwp8egbcZBfZRHiz5K1fpd2DNZYPnkXvZjLu",
  "key14": "4kAXui7Wua8QWXvzVxZXnDYyV4LpzTxjVUhJL8a8M2x8GAkvk73Vwca2nqhZGSw46B2eVS8Exg4b6hwWgW6J8EfC",
  "key15": "31MvkrPZSvvjFUG9RoBjutLtKCWFEzooF9xALr4wpAorivv233r9NC6r3ab7tMKqFQAgH5rHZuUZc3gjUxRJFwQ3",
  "key16": "2jnkP6nCtUSvKS6jrPHsCSW3seQYmzJ4WWbcmVxrgjN9DQxb4pLvgYkLUd8k9Xg8XqSmDFQ8fLm39nnb8CVow6FC",
  "key17": "NzqBfKywU4MNgAkbekyjxtHAkHHKbDNTSUtszVqNnLGF4tFoHNEucWi65XmHctUDCc21rV4YmeYLwr24W4WeamD",
  "key18": "5zmb93hBTjyR44QNN6D3rY499h97HyY5N8NiUGhDAY49jMjDbeWVt2aTevTxu4U5Khr3Pvurd9LnzLAv3vGrn9Nt",
  "key19": "N2kAnkdGMM4Eb6htGa62uWjZMu8cpgNNkZ6spTLVLFEB89xS75vGm7H8bDvBvnKbVV7rEgRtBhw9HLub4JbAnG5",
  "key20": "2grPASYk1q5T2et4csFZ1yonvk4vLHoJtohAR1gDhpCXBYdaBYz7sEEPnu3RUGv8pwhg2eqbBPZieohErpXb8Qns",
  "key21": "62yxEKbtQij7MPUYiHop5DT6yQEvxQkYxWUuazrGxcNUoQkjwvY6Zs8guZUSr2reNepED5ysavorc2qEAfCuXUSq",
  "key22": "5MLtTjwVv2Zx5cKwBot2KW56fBXpMR4T4r5r5WnUkktewzp6ej1nJoSCRuv6xi9uygwSZEy88VWRoj3U9n87eHfA",
  "key23": "28F9YX1GX3RJGdUA4MFZgYN8Wi9N7rSBSG62Z6o9w1GKhi3UH4N51Vrj2Rn3T4siJGjozci4saJdyANAAraDYH4M",
  "key24": "51kbgJF25yVQS3GdwB7sKrwdgBdKtSneXXZZHnkDY5KtEA7mvQ7ot14dxuQCFG1mK8q3zBG8NP3FNo3qHSnzb18m",
  "key25": "5PUvUDQp2jzDTUNzGqNTnNRrS2B3DmCMJ3v79RiLsbjadaGWNJ962Xdb3Y4aQmLH67vi9H8fgswaMinZF4Q83sA7",
  "key26": "2jCLccqcPAXSd76uq3Mj3oTZhL2Qp4AVoLDNkNVRudhbyQYVJpTv28xat6mfLpcgHve3dmE4UgfqnbMudY7n3hyN",
  "key27": "rKkdJgQUYn4cdKJ1Udc4vJ6yFDDYozMigSe264YZVdsSBQgsrd2XUt4aJcSAujqxqjXexiRTtpTZUP2NwYKceWh",
  "key28": "5BNC7wtHyTQushU4gMLfpnFsV2QQKs5WEPBte6Xgki1nQmnb2TbpxGQm4EDDEcE7fofARrpsFs5n8bD5EeEL7AiC",
  "key29": "K1u4gi9saVnLtqNm1jdcbwmMndpZvpE8aezbwdmviykesVykwXToa6XqYr9BYXGnWAEnq3Nt6uXvzekf6xvt8qS"
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
