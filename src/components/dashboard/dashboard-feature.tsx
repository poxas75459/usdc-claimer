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
    "4P5V4fm57ootrLt3FfV2a2vRY7NTsh8dR2tYsjxaH7qvapfDBw1r3CnRWXxE15UJRjqTmJNb48xvPewyosp3nTwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GUov5KPkijJNEHoaFxwZ9HvkEUpU6P4tLn1sNxWYkKC9LAL6kxkmCdfHRRE8CzJM3dfzqh3aW3yfjUqiM7X2VA7",
  "key1": "47yzFuPcJoCXXNHPqsimgq1SsbbyRj1VDriKYXLBbLk7TdEk6UTbwAerPeiUGSt31NsooeGq4Hev5UNw9uXQHfyF",
  "key2": "2aRtvwhJBqADTSHPp1db3yHigpVXmzXFbxajGioZb9qaXZjjTd5RvbEa3iWT8duJyQCNYp48tcgGgTuXXSYvMU6r",
  "key3": "54pUdxVoYwBVntCYGiBjTezpJVYiFbA62ZpSB37R5MtfsL6UB9ouCc5xbfiuqU5WLS5KsyMe9xeTSQkfrfbvqw5p",
  "key4": "38iB33ce3V3TCJ1tGoDHZ6G3toxohvKi4SCTrUry3pxpbpqrLYkTT9mx8Nrk66JvU8gsrVZ1zJQ6qfkwTudACcPz",
  "key5": "2Zq1JVrphAjSKGEq1ex76HvPrzYLFAJABtbQHTpEaUH8ehaZTjyUG3Bc8QvWc8xHri8naEmCkZHcZfXo7o8GS52U",
  "key6": "581iKdSr2DcYZqnuhMXCMhfmmhiZSWzoU6oXy2kECLiBfPHj2pBqJ5bhec77TogrzNrgtDc2pToDfBRBrWR6Vbce",
  "key7": "29w3USJBVZByMvtCRdMZ8KZEEVUDjNfZ7dUCCXxayzJwi3Q9Hy8ag4GzawzyVUkWdFwfipd1LaWcGF9nX6vePakP",
  "key8": "5fgtxdRUm665wz3NQ4b4W4qpZeB6R8Zzt9vV9pNqXNg8DyiwSvTAZn19JGvGDFJAKkgYuV8yUbr4GmaBBDNBg1Ge",
  "key9": "WLWpfznFEt9u7wVbCYcy6T8vJg2BrjXyS4ieLAtN83VijXrdg4wU3HU8kpu8fJRCDNM7hsDoNV9ztsm7FWk694M",
  "key10": "42xg4iYfi7H589Bf23QPVbJvrJLhrxsiZZz5zfV4Y4PfcCapKRTjeK9gSjrzGbws18yDDNtV42sG6g61xQ4Dw1So",
  "key11": "5DxENVcwBLY2b1WY1fvqNdBXeaXVaE5E57wCFkLmuhCWzc1Gqt8WvVYgknnpaimDi8iEFrPRd8iZPpCJ3g4RhqxD",
  "key12": "4KXReJLb85oMo3VdC4uNeAcc4hKRTLhwabYvum3pAto4uyZRY7C9kv2xwv8SKFnfL3xcLPgNTg1C4HUjGrMDJQSG",
  "key13": "GAx2hNmCYcVV2r5kf7ENA8K4QBNHPfCaYVjJ3GXzLGsUdPZJgEhANFN7jUtmfFNzhU3rZbwV1QF8ArYS8moCFVT",
  "key14": "5z2qmktifQLcPfvFXXs34QzruDNx394rshjqaWLPMpEcBwRcZb9KSjgkzGStWXvH9QWT3E6xHm2XxQxzphbSXnfk",
  "key15": "5uMfb9ky7Ek1751cA1jkhNnW3KL9d67om8a6g57wbxptR25D36rT3gyHHY6SWFsDTkcpWngzrS7CHrex4u7pmJyY",
  "key16": "2owPcZjqWJ9sMmaLCmMu1487oDfhhPc6YDbj731vu7sg2PTDT4ykXZr3dnEMnwL5MwbL89rqVXFphJrXTzpgC162",
  "key17": "2GARsi4eyM8cPfAkn553BkDQ7ZB6Y6DopD1CFqmDvYGzRZpJkVDdmGtQxEcvEYh2WsSPs8xuB15p9fHHvnJUZf4X",
  "key18": "uHokwhb95yBdJc9HY9d2v6WzXQ4Mf5SgBNPwxC2EpxYtYXUxNkHj6px6YPY8ACfbB2F7ZWu6MttBJ3iB171mB84",
  "key19": "4UG9xespbMbDZEzsghUcmGtuZ2joyipHK5UQk6dMfo8dxgzFNy1pMJrdfki52HBHX9wiSjpDfNoCosj9bBZpS5oV",
  "key20": "3hBW25uduT9WL8vhDEVKYVeqkvuGenaHsScXZeFXCLKDvg4eBWry9CziAdzvc9WDa8ySKbkR4PUVzqUXnBfd1Zcm",
  "key21": "3d622XW4hNYZ2Y8EgXAT7AqaJeTJFe6oC3n3B4DBBNLUf8P2NU5Gj1w8Lo1Fux4AbfMt2CYcw2isw6M4G1vHDnSw",
  "key22": "59nd8JUispQNWG3PXvZKgWDYQriSSZHM1mN1DiQ9oHL91Y1joteKHXLrzUCvdUJVyUpmBz5fmkMhmgpoubhZrHYA",
  "key23": "4fp2ZEXQiJJYxyzPd29eKQ7phmNM55rNYiPeumUbsZtRoYzCp1YWghv5zgfCbHx2dPHeDA11EdcvnCzPVNsyLnm",
  "key24": "5ySzg7ADgtfoko1DTHVXYq5a5mHaXxuprJox26Pa39Da1zks3TUgp8u2XbkF2oycqauY7unBSTN8s1Va4NBeFw6i",
  "key25": "StrJWw5ha5anHg1owrCgSQfTNfBV83k3jYoGHQUy3HrhEqFuiWNzht7H9yk7UYBUktQMNp1jkw3ex3kNw7GUbmt",
  "key26": "3o66pEqBPyCP7ib1WjYcn7WYn4A3FjWmEAENrNUtHkV3M3nhZEvaFVGqR8WZXLWF8ihMHjXxU8Rnmnbmhv1JAULG",
  "key27": "44gJtfkY7Aaak6xeJmbPpgw19DgeAfF4ePDw8jVGzghxK7WN3FDpV4YkBZ1BGxXuR3yFAF2xiyAurFbeg3449Trc",
  "key28": "QKs3QctcNdrE7ocmDPZ3fUnAjx5VBsASaDf5kWUemFNjQescLJRYvyzZDznDdidnBVzrwhZ6L2Fu91oeyuPH2LP",
  "key29": "2EtqttUWjVoAhx3DTkpnZ6wnzrpZQ3iZrBRBuEMXNMSqCaaZbSRsE8CGznsXCTcCjRn8be4tFJbxSh9r8ZScAbqT",
  "key30": "2QAEe5Z6a6hiMS8nRFAfZrBjW1ew6GEn7MQL2pojrea3TPk5K2WZ4fLGaHkTc4NYMfyx4koqaSL6DrZKFFLCXFNe",
  "key31": "3yZDTZRycEV5UacqQkMCSnCK4pAz1NCE7vxz3aUoKiCXcLFkRw59iHwc6k2mmBhd6e3ioit7dK8AB9Gs43EXeZ6s"
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
