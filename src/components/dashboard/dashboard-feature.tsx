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
    "3eXyPqiqKdZ4pu14UdmUpiwbvmMRQgQUsxr1gcQ7FS1E2826MFVvzJ7DwRqnAW7A8mWjqMq5S8U4qjRZvUCjwEMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MLiuyVFwtamXq34NxUQWPJXhnYDLPLkz5xAuS5YscNU2QS6fWEsjiv7uoMn2LtNpca1TzTtSgaxDtsUnLucd4Gg",
  "key1": "iML6k97BRs5Y92KmZ14FNkZg6VceS4hezuVVHC6y7W49vs85deZttBmRLQSxiVLiJKjR7jz8iLh9dQDXpciCMXu",
  "key2": "2bnrSTQVUfMtNPd6K6Gf3xSBPoRnv7Xz2JBG3MgQ1Zd3KFjC3NDeUgDVaqcLhuhf2hCPq5givgmZ42RUvjyrGhyo",
  "key3": "FPSK2Nn76LKcgL2j89Kn4egSutD31abqiqmvjH15YTZCKnyuCyyrxM5M3KzZ63QrDbmsbenh6dLbzB5cMo5D5fk",
  "key4": "QxuoaRNzw2Yi5Mu9cohnoCGbBzRQ6Nhravav2PaoR39sAAzY4yiVqspqXFqgL25YtmTpzj5Bx5AJSE75aBgDneM",
  "key5": "5hAEkUtZnvfFFzMYuZPnux6D36nQ8GjZh9u4JuKqSexer8cpEVYJBAMzSfMAgeJf8FJALYwBjunLcuJjS9cS8225",
  "key6": "2TmBgmAxsfigxuZHCMzS6K1BgofSJ6oBVVoWfuNcUresG42aA1nUdeB4jjTpaMmhfgDSrwdthQWwdcKD1kEj1Typ",
  "key7": "fuUuyGMzQqjHCwG2F2Szhn5U3R29brrt6LNxMpEBpW2bpRVpLdN86BRgqoJ3seYnSF1PHBZaQ4HcsPcxjKG8hmw",
  "key8": "droRDjwv5JYLvRNoDnPpEQ87yf2ezKz6jzzpw3rRSzzYqjpUWJneyU7j9zi7hMWaqaSPj8nUg3T13hwXkzTAqfp",
  "key9": "4ic1Bd3kUWgALEWfS5CaPxyfzkJU9jRy2K9ebLAQmN2NtdSyRksU6nUHNXtX9KyQcCxRPBZqUZLWe93ne8XJ7TEY",
  "key10": "3xi2bXHoerbVLUyvxQYkAmGkEcoxjkHHpfMx6FstuCgVeLzPoAwHNAGcECN5JBEpqgZTY1fNByGLkiaen2x81tH",
  "key11": "23CPXk7yK2TiK3bCGBcXaGTGvrTGuuufZCtaVwaTZZFhgzBnUMCznht62qhHoLXoQHU6qygSGf17xWcvUweA4Qrv",
  "key12": "4wByb2SMdyfznAxUjZnZWAfTR6nsKEsXqwMTnwhCTvESFc67SLjz189oMH6YcThXfMitNTre2D4CQgKHTztQdGq9",
  "key13": "5U87PPNQx3Y9JK4w3STkMkPKizVQVmKqniZNWAETm73Wgf6T6jTiukmDvK74KTcSae5RPDdX9RV15hFJAPfV2k5B",
  "key14": "4BAufBEzaj41qLcWDbh6jjXoqvZVPq56c549Mk22QLz6AWyGN9th7zbYhjSG7CgaXxEepCCQHJhJ8XkxHfhZsPWF",
  "key15": "4VUzVPpPPY2Ug1ZAswa37ysaMv5NZoyqvjuiaTCrKsLXEYBqaAPtPQbTdZJvmpSDMto8Jm541TtUuDV1vUYQrrq7",
  "key16": "4C5cnSiACYHUw1tEj7zXwo2tBrAMnYyLrH6RpKWDiZRmbu6tFeugkyzyGht8bjwvKW7d7eHy9B4o2gdDKhArMFHo",
  "key17": "Vog21BntgwMxDDKjLPCXY3k3d8UkzSuYniEn9zW8N7CS3wmBruFWc2Lz8N4HJD7yXKc1FMgu6ch4jpWDGF8s45u",
  "key18": "5cHny81cqAQuXwZRYPwHZzW2idkGZousmCbLibBgcG1qZBt9fTh9fwR8UR6daxvNNUFMg5A2GcSn3NdQN7TvBy3P",
  "key19": "2SXmeB2cjNpksthQHLiRQb21qae6M4S7gXjaSqxuL6oWHAtD647hDKMK56VuxYRkZKU6kpvreP6FTyWRhcW2vNgM",
  "key20": "2KHGyZmwhtpiyoGNCvUDkpRAoMCVCp2dvboz37X7Hm9mZUmAiRTK5926Jk2LJG5EePr4fYh4Z9dyeTeyeemZk4vT",
  "key21": "rQisdydx7naUMp1F2XCyNiBkzN22sQ9fXg5xfn2ZwuLVEkhX6XaHoT9GsUfRAVmnkzGiKaCPF1PW54Eh8Qhjnt2",
  "key22": "4fPVGZwnbVz5oH3C9vi4VNp5dMyXAUJ8B863Ecre5UG66PKpmxW9QcNASp3RzsaKR2ciGfDdmFR9jVZPrhv2vJq2",
  "key23": "2L8kAt152GnggtEUKVGiYyUscTdcdmq8PYoFxTKFGtK8S4XNGauYdPfYX6vmX5gQr8L5nehEB3xzdeCNhL8iemNQ",
  "key24": "2qzf9TBCgCGnAaHPMGHGGbPDFtfc6GFMhexAEoPtSnYakN2obSASuwRKNv5UXCXBiQpm52YeLWjFu48UG5pb1gMu",
  "key25": "63AZZQF6w82jdkDPvLN96KujHJTDwd16jaBtipLX5FMJUrmxcXs7ubUiz1CJERB7Ffsr8GhPW1ySuXkT8oCujSMW",
  "key26": "3fzhB4sFNCWSGrQr5cyEshsZoAMoTefx9pcKAjK495SrqhUPjxiK9ykcHSaUyRfhaSV5czKwYNcuvxJBPd1qcYr1",
  "key27": "5G6iHHFHRUzvcnZhZdJwmUKUv45yjYcWYU5LLieTYkLFt6QZUNMjHTHKrpyHj6DVY4ER8S9WZn8UsTV8uPLJSTrH"
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
