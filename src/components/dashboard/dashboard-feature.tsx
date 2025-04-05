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
    "568dP4b9NeHLqVPfKnnzbG2AdCdY7vAqb3B1dMaQdErVHgWFYbzxRZpAS9XiiuHnaGnWFdgmUSMwym3voh6fMxDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25JP1y3LVC2RaHMDE19wgKoxL3eUTFLsTtw5VfTNdaa17L6VMQzECMaywkE4TSyS3AnbN1ERqEJnbi56jsnwND1G",
  "key1": "NXi2LJBKGaXcCuPcnkYiew1zzoJW6jR52W6SQB7TG5T6C5DYTjF8rbMdkbYDq4VXoC12rrC65AWq4Za18Ar8Psv",
  "key2": "4tFHbi5wc8K4nEHdqUcYL476GJJc4gZY7vQQJNusbA7KnXmFLXXyVjkoYc3z9DoCb8ttvQMi7SgyZ8qwUDDAJrrH",
  "key3": "5ScZvg3zwgm71GJf2oWRw1sK8enGxHgaxXxUzgpaVjHiZLzp4dCbRiPV9FD5YaqGpYDwfjGrZZwJ5EutNWH82rpx",
  "key4": "4XZNYk5BxsiwFB785ncjfnHJsoYV97AJ7FhTGym4ymoPmbBFkV5AK5U8heKW1FyBDXnhvUNzjycpLXiuvMKBvGaB",
  "key5": "5QQ2QXACD7v4jhA5CkRVLfGhNvEtxpoKxb25ea2kSbjKX3EvanvinYmmfLLaGSfqxvPLK9zdRmfQAeEm1gTzJEyk",
  "key6": "4e9YFrRQo2Cp4N4M633ADVCL8xDKtBSe2GiBBmVVAe3kPkQn4886yRNBwHsNaDS4pco115xvMpnJmgywz4eohrGd",
  "key7": "5DGfvwQFbwjrno1txfmp4SbtjqfoZtJcys4Ric6w2JAzsVLK3H7Fj5R9N1fyK2U4ZRsEm1dhe1NLbL39yuhK2ZrX",
  "key8": "1kerA1oWn8CY9E3MBytLAxvKWjrwnTb4bQbWUUjWq5TbgiKA53CqmGYCisqFPWR8R2F4RXKEMzBNr4NmZesYbTY",
  "key9": "5QQLVX8TGyAkVWxppGApmJkAqMUp9fMm8H6rYWYtkDEShXCRaW4GWj1kqx3VkomJyJxY52L2eXtWtdU5eqwhR1xX",
  "key10": "SpcDZpAVpdhrtiVp3VGznujuGx5VjVWxPRUHkdpBzUdTQgdHbYAT6Z2aJk6hLoP3btWPM9SdqL1EwdVNPSFuRdT",
  "key11": "51pbsP5HThjw2UYA24cobqq91jEuVXuoJgMuNup8Sc9zkvpZ27QBrJ5Bi1JHvqEDEvLF63FxiDh9fpyMCMj56v2L",
  "key12": "4jZRkThBEFTtsCML11qNFfain9F5N6x3Ybz25FmSt1iHd6YJxhsgiXsFQJvow9vrmBtXrh4zvZABGDq1eeX4SyqB",
  "key13": "3s1fUvtd7vUGQKdJB3brVCPJKQELFgkJJ2sE33EC899j74ApiN2Dx2jB96NS7VeWx6N5enVBq38aCPJcAdYyfQDW",
  "key14": "4d4LqWTocPwJfRtoqp7xFHLdt2HDeqMyXSAcqjt1nacibj3wEpvXUfbREBTZ7u4Cxnuwj4SwPZMP6SShKaUjKQFJ",
  "key15": "3D8HXFqTd6ikwqmXNG4EUhvr5irbXuKwGES7CHFWGfQ1xsDT5JE8PPhtCiekJTKhf1dissJiYmA8uDXYr4RGruDr",
  "key16": "4MXX215hJvt9TEYyXtVEK3hyn4WPrmGr6sapZcZtU3ap7ijyXUmTbWUzvJS6SZtxxtX2mUpSBRDq18pYgFHY6g6q",
  "key17": "4XVixNxz7EifALM6yZAkUDdx3PecaP5rexeojXpZiJ9jXfyqyyBLJYHa8aegAkxfvjhfcNaCBbnkdVAAqKdxn98a",
  "key18": "4Jn3v2riTCRauhE2XVVW8PcD27XZGkVCRXP5vhjsj1Eo2TDb8fnugPXoFVm81qPkR694NrYFb19Uqbvy2PiFg91M",
  "key19": "3tzYQjJWYiRZEBaMze1uxLYwE4YBgZQaobSB3833vw7vY3xMfbaNZW3x1THL98DtskionmrM9RvhQDcS8LH6q31D",
  "key20": "2oGsXQVAv56XiBqU6uGgX5hfA4cAhzDwpwQZVctfZAE36izM17a3aTTQUAMd2sJEmELMjFSQLR5LtfrEPSBYXTJv",
  "key21": "6nf1ZW6vinqrgb424GJdvPz313bCwNwaBdDNaBVnoJvDqEgdX1Nz1WTLVB6Mi82pTRWud9yac4CyrutD77QnNVm",
  "key22": "2VZFBo9gQEpgdc5n5HugQA7eTpD8CSVuNuwWTb6uVy8vqVxzj4Sjd773vFYmQ86XfAqKT1qK3qTEK3pE6DNytnBe",
  "key23": "5qHTutDKKwGbUiVmvzqtGNm2CDn9qy2B9WgeFiFdpkpwooH95NcfPZyhkVhMfw2xv7wZLBTCmBBqP4ku6zmEsk73",
  "key24": "67p7yEgv4Q2gHzwWoRNjJB2K7CAtC2WNWR4sXbuNLLBupHSTSbb76rnAivPcc5AQFFC1gmy3bZh3KU5FWCRLPwLo",
  "key25": "4uMs7Sm5XZXQ9UbBv7yicnTXr2h1JaXqK3S5TxnarwyVELZs7jixXHqd8pgjmEGRcfcRd5ZZrd3GNCFTxH7pv69T",
  "key26": "3JiFyYgMiDZr5Wuc5L6zJ8DX7JZr7DLcvTcc7LvaUigU3Fv9iM1RaXUz2TNheX6Bu3wAbu3AFrsvpX3uDQ9hzMkm",
  "key27": "5XCyMAtXB9sNY1NR2BFWgDYMPxGyMSPNNWig633zBVhGLpSvXVha1sMNwy2zwr4dW1wMmURBRWoMGm7nqffwPJsr"
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
