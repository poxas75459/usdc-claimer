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
    "4c147zYed8Dg6JD6QnEEHUheSatNzAguDf936ppM9j6UpR9QvB9KYFrPE1yN1jpmSSFEBndfLiraCJ3syh22HHgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rrWZLbcfz19Vnc2G24B15ffvg8qMUbdxMnfDkiMQYfFYD4hhcnMi7eLU9ULDudxmSPCeyXJBCkG1yRrRDQrCb7T",
  "key1": "2iSWAbh48PEmeTkKpkTTKMgwedCJLpHzEYb5xtMSiZZpGEgrTWA1rd9JEtnNn9pyrPH1sL3mFue5KdpJm3rthMaS",
  "key2": "GRDGt22nJ2WNzdcTo1CbPjbLGU9tFecXFSE7HnpVP5KPeQ4eH42G7cPFkQyGKMYtsTifRNy939BGPaJ92ZEN1UN",
  "key3": "3PtbJfWDiDkKAeMmLZmraVH6fEcooBPF6R6vqozSVrKhywHkdXmB3gE6gMhB3L9HakkeC9ucsYXUm41uCCrgY9tc",
  "key4": "45bgs674D7HvsTvLCu2mdzJMauy7HdU6kq6jiiE74KxJUYEM3fXwZYFgnHRAN6zQFnZ8hhLXozLVWyx9aK6E8D9d",
  "key5": "3vK4WzjgyKdQxWVMRPYaVfdHxSQ7XySdb4KHWcvXRXUGswkbQwbhtq8NWZ8Xx78518NZkqyPK67TwpYcSU3jc9Qv",
  "key6": "2aojDApzHxiZ3Py9cXfrT2xzMt81iV177CvjAdWARExVoPn9QVjpD2Zbv2WfgmJ6cKKVkL84Zr4VKBEjxQ5tsdnd",
  "key7": "EyAxPPSuKKe9G2VMXJenWUYokw2eSBKn1RXf6SCma8YicjvyjGmVPEVBtvF6cM5rLPX4Tm14HQz2fyo2XHtZ5xb",
  "key8": "ycRJd7ALqmSfwPxmZKazjev7kmxU1U1rynzUFjCN5ttLW4w5PBBRQUN25B51kdQZLz4m81wWH5vrjAnMWd5p8MM",
  "key9": "5hJ7RNdnAJTNVSxRKWATaLbLtTjmwxdAJ5SpNMACN6VpNKRMeuJJtrvVo9fKbhVnjyM9kXT1dypKB8zGAuRAFRMD",
  "key10": "48DgGv1hNUg74jnTwszf1kv2G2wqtb2C9KDmiuDaXE4JqDWNvknFXT4pJg3JWyxRhBoYFtnqpojyNQ6zVb9NhP36",
  "key11": "4zu7p33cYb2R4Fb9RRkid8djzYwJVkpJAT3PrJFvQh1ciAu4PT2xC596LBA2xs9AWRbWViByDyDmRy9woDXQAp1d",
  "key12": "e3AwQnqHUWMcjUSnZLE39JC2Cr4s4dsK3DJiXjeYB7UDj7ss4CMYNYfLaiGpKpEwMW2bRL8HrR5qdJdMV6YGa9z",
  "key13": "3Fm4nqaWzRYw6rBG62bZtGjDidpgt5EXos3P6Z6spjy6MgQTaU2JD85P1g7pYHx7SDBdmidzsegkioikqxGcLECq",
  "key14": "42wCWXQh8UvwhF1i5G7UrNoq9axFpbK7Zwg6arfhsVGMkh7pCadbHqfQwK1JotQn4Li744MsEQoHCqUXGPYAYYTp",
  "key15": "47hfK1kSbmBXK7dxEoGMrBbEwjYT61M2Xp3WBtmV6AhissXiWewM8f3uUxLHmX98doydysYoQA12h2NYSPePjjNH",
  "key16": "2owh4UatUaMP6WLDNtouNCVRvjBAxzPDgEYdgmLYmDN4TEyr9MtFCUEmVkFwwKM2c2qUJZyHbD6FyqfCJjWbdj6X",
  "key17": "Wa8DcSkjYXWNBiJumYkDoHJutM7KMY2gmHSmpCfzWuQwALCndAQk41mgujVmDxa6ps4T2kWcncHyHSeHsuda65z",
  "key18": "2N5H3jxsFLfYxP4d2Vh4omMRhFrjZ3PWCCdh27ipAAwc1SwcsV9mAPbvmVnyy69R5Cu8ssrmpR2GjYsPsb98H9Pp",
  "key19": "5JT154azvPxeeScMfLYN2bkbdwCeCjKq1PkGyF4oJo3AsxNaPRQ9EXrAirh8u3oUpGakbSeAQrByuJ3ZFEGgboMW",
  "key20": "5Twi2EQ5KYmHmgEtWWx2mmVfBRETrTVLYTrozndo7HMjAc5iVXt6aj5Fa2f22ohY6bjTs1igBGpDig9wR6bcgRXg",
  "key21": "5XbB1DtuuN5XFhXj3xDjNfLTyT5vkLsLkKvu1nA4H1sJT1s3i52Sgqo6apt7TCa4DzdEGeVhYfDYeTCD2RXsYWTE",
  "key22": "5ohmDSpFLWSDAqbfErBbXbt8m6DAz6ujxtchTNfVbFJPvqSBBYaV72aoVL39jUMWpwv6ox25qLJQMDB5HX3ruqUE",
  "key23": "5T7aQBqQVkrWQYEeaWaxtVYnKfyN8uw2Aa9B4AjjB9hRzyTvR9HYxi8Dfgh7ytC1uCu9wxHUeKDcpa5Ys2bCNrVt",
  "key24": "2MH5W3EgS8n7gYZqwKSdHtdX2jgPgmicqjA9iKJmq6T7Tj3FfHS4nJSmZxbwhapCmf6Q5XwWZqakcg9pydPmAsxn",
  "key25": "29AfMrZRKj8G4Vn1fFX8XGztaEH8X2F2QWFL5YKNTtMzLcz1VYC2msCv3uizr2gvPxWxGbkW7Gg6nnzS9j4NqyyT",
  "key26": "5XJs5mbvR3Tgaw3tTJRBXws5rmyQRyVaxPVqUbbDyvDYNKHaMrKgyPBZxPETU8LT8X6u8oaN39FQjDipMPhdSrFm",
  "key27": "8bYMtkgidkdRwPwfPTiy8Zoi6Pbna4Mfio36d64oSEPqs5oPHcDv6QpaFWgXuuAPXRQjoaCsFZGhb2mFxfvEREu",
  "key28": "3qitQac17Ra5wQDdiAWF5Z255ChiomQZNYXGVNWLgDYYxhd9go1x9AzfMFraoZZ7TF7ZgQQix3qqpMTXsS8yJxws",
  "key29": "3XcDgPXxYczjMhmMczj9zp1tno5Fq2PatFPc4Z7mQXf6jp1kUFc17MaMX9MHa7Ca7Asq4HxfJTyTfK6ppFs5Qwfm",
  "key30": "4ir74fyZyJz5nGd9fgsWYmJpUAxxVUS9dxnJpZxFBfZsi4G7AHHTYP3JH1MTDpwcbiEJskmCkKiQfuqb58NjUrVd",
  "key31": "2CqFc5GMt1oGhsESND5z1225oyYzdEDgemR7V7YhHXiFqq2iuXCemLjLZn5VaCSQMqUwkF7X8nhne4zDtpDeToEH",
  "key32": "5kfKLBywQoo2RQZDzxzQaz6McCb7iF1RfP4abrjv3XQJMwbb5AKrSiwpZX1EegrWMor8efWWkiioHsZAFSunHR9r",
  "key33": "4PJ5A6jUDt2NVbBkpJHFXRoSZZi2GHh7RiXet2qfNXuWbNjjTbDigZkeqfePMdetNrexTmJ4eyrGH8Uk98dEAKrf",
  "key34": "4a3XoLPqRU3KwVm1qAsXJVs3pEDi3d72KbCL6bSjaHNLGe15xP1pb8TWtHWTzN5TYWWwsz2iNysQQFSTiMefRkV1"
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
