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
    "21dYv3JG2ZUEy52bNZENBCVU48EdnSTczQRcFmsYcVXTyQUwJaomapDKv6yQbEGqrELXEVxAUAA3rTZtyLtDWqox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39drqrSFSHCSivb45TArE8MpLA44KwYj1UfdSbyBo75ce99bD1uAHQVWbGqAVQ9VmSbmpA7rNmp1i91rZ67ir17v",
  "key1": "5mnfB2dfM2BUropahKmyH8MLuSiK7yWfWB7PAax19GPpvNDn2jvuxgjKdMEcZexVPWmN3NYJT25SsrJXikHNxzas",
  "key2": "2boeNiPHftMmuQCb8m3m7Bk38N1rovHXryHTyCFJaYDXZpN7J5JambXToMaSYs37pYwjC1UtGhuytbcmomvRFxEJ",
  "key3": "5kkoFFY4h5MhyGHpqGHqGCLN7ZvEFH3ZmA5jiEdq3N4WUwJ7Y3e9eNrR9RTpV1rhmjAGCtNBa7VpfsipC1SHrtec",
  "key4": "4u2EZJNTAQLm7agMHdKjWWhRqDEaVvvRZR8awZCW5hEScnMjkNgAGaBuH1ZNqFLMhfUhRKP6RC5j2kyZMCkcG4Jc",
  "key5": "4ev6VGt5Nc77SN1fADyz5vLDNodcfXJ1CXXgJXqXrYk2LUAj9TcpJPiPUwiTXXsEzSjbYo2EMto3QyK3vLrXjNHA",
  "key6": "2KDEueb2wo9PseT1UuBq2KNAnLM7q41BkVpSFYFDXJMzg9wFg9LMkmStfgVk9CDFmL9wbwaruEjTYVdhEmHzDoZz",
  "key7": "4NCPYLHjJP1Y15W8xr82hEoPusRg6Mv39ijGfvoCa9dCzFVhU1txmyMJ3ng5oR9gtXqfQnSiraMXJY6hij9jZzWg",
  "key8": "4SxXKXvEeJMWdkpRdexsSy9hYegM1PfSZeEtXAEtCDxzn4UJio6X4Hjp5DoU2RdkF6Jpfm1XLVehMaXoVsBaqe6o",
  "key9": "9NjWPiHNaT5D1wfSV6sfCZMpu6MXc7iY5cyu1BUmf2DT1jx2FMN8Jb4MwJo8aDt6vJXtYWa36TrRYqZWwrsKc7W",
  "key10": "2CmmNapfT15cpVEjS7wX9JKzGEYzaH9UBtfWuWv2PcfH2VDPEgevMpBZdDL8ZXXSZEMNzWMiRkxYggrPmLW9Y9q",
  "key11": "6NzHHskg2BSCXnpUtxA6FrSS9fX3SbfFbYh516k6hXcsqMvtpuzNtjkCB1VbRwZZPfyirZyzAUbL44ekNEGktWT",
  "key12": "dKMuyGvqK8gim89EpjvRi2fmKuFW4KHx5uJ33dTB6kni6DWYUDf7HAwEkqCovmpa9vseQMGrV5HoCRJQ7uKfzhT",
  "key13": "3HXUBtZMytYYSaVs8NpWLSyY1qEJPxgav4ECXPxnsPgB3kGBV4BfhtkM3QY7fNSDcqcGNxm6hGGP7c5Ga7YUy2XS",
  "key14": "2B51LJaoV7GqZrFanKcncBASPpGFZApjnP1L6Eb6AiUZ6P2DjnoxEVftRKczUg2aiuh9gd9Pvu1YQ695zkyyNbgb",
  "key15": "3rDstxGAr8Z9iC3mxQXKQkfhtkP6FjFNhLRLiUreL4vrw1atv8x1X3XQ9i4Qjk81V8rkTvxkmmSujDemYfpcABCE",
  "key16": "2PVxEPBkCN8ZG3tx3iYhGmEMg6f5z5SBR12t5dKpJEqxC2mALp1L49AXeQUSKdBZLC4t9BU3MaCugp7mEvu7uX9H",
  "key17": "3utPoSLH7dDEy9xhDwAmbhLbXkfbWD8xtkjFGEckfBgrCcxPHwxq9FMz2a1EXKuaq27rYfeGACREGeRy4NXtm6sC",
  "key18": "2DXWmPB7QyguPaYKsnrGeEfGGCqcH2YPRG3LP4gMsqM5ao4JP1nKC5fvH6BSCVmMXv6ooHdah9bWJpYDCTvGpfY3",
  "key19": "528EgDjGGGXZVY8nuezfywSpszoGdV2rerwxCfCyP8naqp56KpBvZEKmep5DJk7w8riwmwoDgrUVTXSC7dNCohDz",
  "key20": "5fRfDatbz4dN8ExePGnBGda4QbZgbFF2BWY8XWEjNsAbSCUTCZskUsrUrrQuwDKpFxT8yaQSxW8jqBCENKisgjgX",
  "key21": "44CdJc7aB63WMy2FzGv5gPGwGzw7pLPEyGPuDVZ6ccErMMCvxtVLSH6xdDRdFyZgNdL5kYhtZ8e2wh7gpdZEWjPX",
  "key22": "r132GQXaB47GMPTTMX9CZQyAyTSAtMLP3DiqCTrH5ZSXkS7nyt31ucmkkhsWLskRUTxYDSU5MkFbinc1XxSSnWA",
  "key23": "5RJ7nf9cmegf1wRKfGEs1DkD1uai2UCDw5t43CdPSSxT3roLp2pqVJuxXETrNoBymFpe74rUwcLzm1YAcQxRLMeg",
  "key24": "4TFhgfywkUbh7wKLzWjLp5Cy43y7HnkeNcrXHLDtwssxjJxvtYyjJyxnVJ2H7S2YqX14AbESLU6ZzAKjveV77DD7",
  "key25": "Ru6MRuX1zo89tijufPQS7PwtWb9i76BSLjAn2nqVHV85SYGm2Q3XhUsBj98fPLXUN7Lovk4aqM49WpWcB244YMu"
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
