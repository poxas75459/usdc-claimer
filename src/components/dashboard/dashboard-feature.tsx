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
    "2Be6VSkeJbXcwe2Ns6oGB2hvjXYRTbkoRjh38Rbcqg5SV67HqjqHDcWffzh1JdmFGz48r7xVrGxLvGk3GfKCtjNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AJk8bZt6DzWVm9gRQPBQUwDDrnxWhUfw1aP3Q1vR55rUZcgyK7frynKhLCEXM38vYjSVeUNSSCpAzXkkFM2qnHB",
  "key1": "65Sxh5mvxc53JoGmfdtfX7G3GbjTQi9V2LGu9MV3Q14LBMNY7zUGFXQVx2j8hZ4go9FRsBY4kHqi52w5bhdwdxoD",
  "key2": "2ngMsddY8dci94ZtpHhgYH9eGWd4C5UzRkNM1rvbwRSpcjqCM4tKTLKMyNCgGVMKvk21MUaVCjpwDe2obEUFkW4K",
  "key3": "4qy62EEkRX8Y6dV8fRD3autjWuxZ6Q1BcDnindmzUuykrxwrEL2LuUk4ZNkuMsDkY7zFYg72RqdqGDmU69bukwVn",
  "key4": "4MASGWrDgyxEWXbEUpnqvZuMoVcLr8JeeM5ivT8EPuroeGXrv7yKtDixwA4eKTsP77Yeyz7Fuk4Pnox4nv1YVPys",
  "key5": "2ZCTkae4Yv3SWxYi1hCT34ezBwcymD3LeFRguHDWFTFYT2oZXsTZMLKUM8swMxEYfDAyskoNpbb2zjsSU3Uw1EiD",
  "key6": "3pyosaQJAFuXMHCEVjmqa6dyF2CuGc5PMm8EJpxYTTuqLHFuaMALwNFemr7VXJzJtL6792JveaJVHQhpT6eRWGzN",
  "key7": "4weEsUPjRRVMb1jRTBDh7FyfLdrAA8VeRjDtFRPvbvmHF1wYVQjwtmgeWZJhiDyyo67A2yJ4Bhg6V1GRH7Dv3wL1",
  "key8": "PxTGNhEGRJmamNz9jMUa12XRkSqcarviC8bXdSPaGTecrBGyELm4rhUo3xAAk6Xpes37NqsKAHqUTkeojDrfFyn",
  "key9": "25GhKasZxRLCM4N5wRFt2CFAZx5awScnvsJ5BiMkAayPfRfynE85FUTyFsGzF1WxMfQcbUnBWEM47AdUduScpuXw",
  "key10": "3TUXLeQ3XxEk7gqr4mRfNee5QfNqmB48tcTAMJSeUujVZVhD4EwNVs6CkTa4kJ911sdKX29gU1T1F9sJEGqjHu2B",
  "key11": "5prE4ET7PASg3F3WcqoTTDdjJQZYsyCbcJxxL1dmN34vVbLRwzZUF5kSkQqySq2Ayoxsd3kRo7n3AWZTfhdygagN",
  "key12": "2YP154uwDXpkLMuYsmrtPGJZdcHNCLiJ4Eh3dgPEsaSszekFfHUCfMrKEFjQcRa9FrJHBjimumQ4NQjWLRgSF9jP",
  "key13": "5ghrKs5XgUYSsJoEvRG24cPFEr3wyLkFFq2uiBD72R8i1L8jr2t64heUD7fUhoPa3wZf7ehhP75mx7FYNsPxVh6G",
  "key14": "4pinqxyyAsJxrwkoeYXVW2z2wen9QoC8ripRmF1UYJUjciHKGwyNrc3niJenLNwGbsWx3zXJUHsabZZtdML5sS7w",
  "key15": "5rVjLzSm1uWRA9rXPBNcWVGEcsTBbLkrxZ8pcjpTFoAnwuGqBu1Rce9gZWxrcPZ9rczwajqRfTKz6VuDaaRUuwdh",
  "key16": "2c1rxBtiWqiCCooCKyz8uKLgLMnYxTu6tGEmAQ1CKnv7o9q9VLTAuKqbQY8XKU9Zvobz6FNA5gNDCiY8GwYcKjeD",
  "key17": "5ZuA2udafyGqGcWRVgBHKn2qtAyoAae4HFwUNDmKyPpuoAb1ryuXbcY8NWs9acKnTbGuP7rbNm4qWd6vA5CzFyrx",
  "key18": "4rp3H3Dp7kR4n248XJb7QSaqdJMphBHwFujeezbAvtpLrYDBUUdnKAMDnxNZ71xaUAqBruRzUWaPQiZm7uWBd6i9",
  "key19": "5Aad89EP1t9cvQyZV1khYCBSmMtdfwg79X2GkvLmVQd2VCaYG87KbXb7iVCzp8zateD6hKxMBT9k7nrc8hSBE2Jq",
  "key20": "3xbAGHEHqhUnu1ibR1gDzE7KE6wHRkhKBzn9QGTxBDRSfqoLmbwFoZagH3qSsg6CayQ5G6HrHo8XKXRXUT6NjgX5",
  "key21": "2SwsxKQNE2JY58bimPLxN4NwTpWmxXjHuuitqqRKaSrB7JFzpQrq1iY8ESpxUuo9Apz2s6YRBd6yynpK56soJr2F",
  "key22": "4927NDqAFiYVEguJ7SjPXkc73NUVkwwWoQ83WtRynro32exGobD9yfUqndBneEafeKMj3feKKhLKWVHyC2khj8VK",
  "key23": "NCn5b7QTq2DhnvQVVAJKQS8ieQ7SyeNA2xjzsA2qqXPAZ7NC1aZSsPQwTJpNSetq9vmk463RNwbopLiGwrp4Ntw",
  "key24": "3ZfyGmjQUff4SrwfonsnjyJJiSdpWsy45ZMMmHCoHDfHHM9pnHwyo6VWo97GeYVVJpyFuQZSVpigzR4TA5jYKLjs",
  "key25": "3cxXfme6sR1C1TKmYbKxkn6zYwGsxB5XWvop73MKgA5NBdQA1VDfHsWaDrbPdBuuYshTGeoHFgEbFyfGcx9vE51r",
  "key26": "4NV3PEvSboDhczFXFN8jaYfD5H7XCeFfuNWgMJj6bYSNAWWZBVAhsLmkUDCvURkE2yCGEf6h1m8VsZ6RBVxSaBcF",
  "key27": "jMgpmVPeYjXkvsoYo7SskAcrQe95cewP4AJZaTv4smHW4eKgoQes5M97gcNUmJHcNiEwfxxpzCTcuWW3Ez5u5N8"
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
