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
    "4EhLgLBhmeGP5V8hLBRY7Vj1fzzqJSK9RdRFW25NFXxNYM48amXa7wsrTtCM4PoTc3FhxTYVhD2uZHQjWxE1JEa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtpY9aCQrHhXjyj1hgnwXrRWgbbjtGH2f6Cj5X94hYcYJNPE3m4BRa1e55HE4hQWtzQVqdFXoV63steYvqNe8gF",
  "key1": "3Dof1mMXoZB3cRnbLN3rZKL4G3DzsfJ4xVMeMtd4D2r1i3vzZ33x5uVkgeKXF1iNYP1j5m9int7uATMYKYcdBzCv",
  "key2": "3xPPxcNqvRVAuWe8Jen5b5PjNDmY3uffUkkwjqHpiNmJPmQTt3GoqSVRZEBNZPtHoAWE16rLibYpgS3wbwLcqFg",
  "key3": "48BdWze1zi2SvZXKqyZp5qdYm5oWF8Y1yp2meAJevb2vvvkGSQYdL7nMQ1xL6svcQgkYBbR1GP8FSwHgzdZHT5Le",
  "key4": "5AeRnXPbMertEwMDvexfcqgsgwyvnbFkoxVQeqXAAZXbL7K2fXohkRNdRFwjeeMBEf47gVgoLGn7qJoov9EgsxEf",
  "key5": "42mc2e3nWX4wxrUco4PxYN53FbjEHdX3LDD2esUgVEFzCwQHyCisZF4iLeEcZR5596j5RHe2Nbmx3XjNjbofftX6",
  "key6": "4eQLTKyDLn3KF6ekuiTifQm7eQfHe45E5CY7BPFxwUFkC2GSVDz7gy9JAx1Twuyr2eNavsteyM3JzwURfsC8jF6W",
  "key7": "32PZ1z5zEZnbtBQ2Q7bjNsgjFt6Mw5X1NKXRNiA1kMCZWVYoAF3eRQn3KUskVCGeVEXLLYqMThPVgMXqQXUQfaEQ",
  "key8": "3nnu4qjuqwBf4hBvThLFN9Kk469tTnKfWTAnKzakzpRwkDi7pUzrpwAwmvSAfJHPVafzABEpLMKpD8ZTYuqtY3rA",
  "key9": "2rxwMmR3aKh7a4B3nWr9X5fmeuKCjiQzZSjdMzSUNbM4T78jJfg4tru2kUYdhxdxy2MQTbmXJyNf84TyBiipZUjR",
  "key10": "37nLZVsQRoJMDWtCFhLNejj91hsrgCBC1riE7r5UeKjWoYKeqsaXMqBU8gNcebDkTczqBbGPwG4QNyd97x37LtgR",
  "key11": "3FVo5bRWnjePcVwJG5xvBNmSuXqcUaLL5G2PdRhb5JSQThGHuvf2eFo2nJ1cN6t9c11zEURc6FKpmRcTZuANUzLe",
  "key12": "2NwF51nNN6NEYhS4JWTWXidnQyx7ANTAJxyScC6SN9YfPJ2WHwC5iyHxLBVxCnAUjjTgu9iwvmEaeQfpXNRXJa49",
  "key13": "3T1YyvUsuy3Scnmue6v3eMfrcYMLs5ztRswqQ2AG6y8frF5f4KFD2swh9qX3AZystSNYxViUBK22KXEBQ9wrsat3",
  "key14": "XypXA8ZaAngfbdsPLvQrGYSVJHwnN445DmiuLiLZWGW795KtAgCTgQA9KThaGRC1cSd1X69cKku6QvLk82eNia3",
  "key15": "5UKDSvpGy7zzdXceR2kDL1xLyE91WZpRKELtf8cHwnQu7JA68JGySq5KHYgCaQ1ELg3rtXTUnqBn7zybvuYeYtNC",
  "key16": "4xeok9R1fn8SH8yRHb2Q1YNQXf2Te8DsKHoUjcJyFFVKBKexVfxHtSYgDV3zminT1JWSHWHcRw7SoJjg7JTPcdoE",
  "key17": "3DNC8Yxv59QP8bsDGgmRHAevxjvd31XFcRbrGd6QM51mmckbWTStnUJDSM4YPa2WLTwKf66KjaHRYpMZhZLP63fe",
  "key18": "2iNH7ekpjgf53wUWyxF694y9wpVpk5TVmNqaDVgXJRdyST1X2xRC761tCmsViU799yEgSdmL5DLeJQvCQmyQxpAk",
  "key19": "46LzPTxCP6vVYm35TAFLb39zR7iobyPP7CUsdJkHJdBoUgKXaJ3FZdcQAJNqZ1iR62iE1xs7yQuercG99ytk6eRy",
  "key20": "5xJuqD17N5n84hgGkZNsEKt67ktsCrR7Qjes1mMjP1hQG5FjsHoT3MUDobTyxaVopqijmj2A31h23vJKBKuzZMPg",
  "key21": "3UQ4Wc8LRx8PEZGtbHU7dGpRL6ynkKFEhSxZ3dqHdRHGtS9EpZxKNc5YYnnLg2yg1Dm4tfHgM4WXuNACQgXGkSek",
  "key22": "2W1yzqdBdtJ4SaZGZvrPsgf3YkeG9VvuLroVLhoVEDtHiYfwrZZcZmb3bSHC1P1Hh92wYAK19PxdHXN1XcQQZo7X",
  "key23": "3146hjduKEAiFM3m9s8tH4v87YN3V8yjqRshPZU6FYavmS2puyLcgcEAhyT8kSBp9iWsLY4a6a2LEPaKutEzHFrt",
  "key24": "3JcvMun2Z4T89NtpGNKFdjSX2huoH2J8R9EMrsBpML7e8aGDBTgLtGDytKbfdyQqdMxxcErW7MdvDa8HLk8Wh3YA",
  "key25": "V1T4TjJofvocMSmkP6qq6SuMFPCgYtrf2GzihksYQBmvjdp1ZcTU8NJsR14yD6Cgbt87Q6Nm8wDo4UnAVDWvCMa",
  "key26": "2UGGC318J1Ba6hj6ydytWpy1gd7yDChwWcwoMKrGbTvefeFH8y6rncWfxr2obCMKC3BT9M2YLVT1a4jaYXuFywe1",
  "key27": "3oZV941o3cHb1oZ4hUB5mw4LAzdtDQvh6RX1KFCsWGACzdKEQuA16Vffitj15FLGCRzFuQijjnabddRmpKM7EJ7H",
  "key28": "4GavxjwydSrmcmTwuickWVmT466W2zS3QY1yRkC1cBK4qc9EWp9UrgALd153X9sRvSRo7i3Eb6dGwvCkYuBdoz87",
  "key29": "y7FT8J7AopRRxPYNonkGPn3DMWWSTKgLUZwTFczBnfxr5KH6ZUAyyFSNmeXXYZ5HoXhWxEsq1FDT4MXDqSbGu2C",
  "key30": "2wsYg6iV82ozkmcs5dQjb7skzDgYjccfqwMXQaNd3t6iJmnk9zbdeut2RXCNkZ7MDKvnKQ3TGFgfqWXtP2q972Xx"
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
