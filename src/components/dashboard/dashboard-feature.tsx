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
    "33eUszYPDvNd3bBWtpwLzj8fzzdBCawHkNGgqRBkpsDcYkPQ7nFvrqEaU689cvbSec9MVM62P8bTKQo6MzDNY5XL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zcxzgxo8xEdiY9UiyHZz6nQ13m3mJV5vQiaWGxyxWjuZHiudB4APC3qHYH1gyMPC2MFbTmePCWsR3bFdyrtvTDz",
  "key1": "Y9ti97skKMYs6Q86RvqPcLkAW6NWkfD2bGnUqq5hex9TY8v45a1L2C6ovkTTu2Tmv9TBDbtG8D58QX5xYPnA1rn",
  "key2": "5WN2A2L5yaJTLG57o6k4jo5XZ6tSKeJgmYZbu1o5szAeUaqPJSML48WzHryozNquYCSSeUuPuoMbzfhJUkfqSViu",
  "key3": "LFsmLTN8dgjbLNFiup59rGnV3K749tPJj7fYCcLS9BsHrKHGT8oXEvn6uUdJiBwGLpwZWsk72vsoyaFoWSzWrJj",
  "key4": "2ybHnroPPGZMNtu9pHqxw6P756dS38846D5tRpSBVsNyX7Fxmipug43Umy3aRMEwoSuA6uFbakJuMh3ZtdB6s8vM",
  "key5": "3nb2agQ7J6KXPdgkEEqrKK4WbCRENyi9NrbukJmnuuE9KR7AQahy5eVakBSDSpsvr9sitRXGZ12h2bjeHD5nbVMy",
  "key6": "3triyTuKYhDuo3VDBtBVi5c5uhVFam7NmdGUKss1KKhcmqHNUtHitvGkisezPexfjE6Du9rNXJ3cBbV5ENu7T6gT",
  "key7": "2xxdLSUF4QTjD7U8ehx6pDrYffAhzpfgQV7LQdojGC5ZwYg2pE7LxZy9r9gLrywxjD6XmiXFUYmMSXJKpHEB6ums",
  "key8": "4Le8BNbQCKZR9z2LY4fGDwWUAD3FybKPBotUUCUWsXHoZqeoqQyT2iQ6Yi2CpDA1r3krSUUhNvkD8ZZERZCn1rKN",
  "key9": "5WMLAutWjWN6UkJrEf43KdeUdnRrDKBGbWS6byYzYR6jyu7gkdxk5799ZJnksDdn6HmShCKs1gEG4okBAGRxDQ41",
  "key10": "2pkmiBsNqHpUc1FybYqfTDgBtWv7iXB1NqEdSppE4u6UfUxhwn2rby8PKzkuZHS4tWH1XLDbn1VVmj8m69iBvB96",
  "key11": "JEqnxkGdqPf9jqEgMHNP9uaHgrseJfMA2WmtjSXALiA8gqtVAzy3N3rkd5TViUsZF3raN2ifYoDdNkUB4976z2y",
  "key12": "3qWMY2fuGbSoaxYqW12uzkkkbUGyKXZStHdqbDGFiHoEAA2kx9f6Y5N9pBUuHkWJvJFQs6fEPxcgTtQAYSKCTjyG",
  "key13": "2n6z2cciwqKwogc3N1f5tz9mu4ijbtXw7xHURFus2m12qvNMQFBdgrvsH6LCHQncSxhh8vBDMSVPefq4hha33gxL",
  "key14": "nUBwe9FL4WgPSEb7cAQDqQqE1KC8YAeYAEXsdwhmgy43HumzecDvY2zNNzn71kH5FGXGbcZ2KQYDtH3W1BS6vVK",
  "key15": "48CohbLqHL5gkLi2j7qvjb1o31TRNYaCH3oucrjpHqUwB9euM9fTmQPuR4xzayNGJhHcwZKePfZ989WBpo9RiaYn",
  "key16": "51Q4YD819EyVR5oe1uS4qirfZwYV94uAj2aTgKnjwaAgpp9ez7CDKS1E7zoB5Wu4vsHv6nkXnwvX89iLitvdJ9RX",
  "key17": "3mPiQfCCbHgHYECcneyYzwMg2G9HwZCBCnFi3CfgZCRgj8TWPDENFQsY8LbctqkCZLdu9meXr3SomfLBKDJutqjf",
  "key18": "3gbnW5QbsUfKokAk6VCzkU7NT1JWfpFtnaUfoQXTMopqaygdvFcE4TN3VFb7xQpacvKpAdJmwpCchhL8UCLrZ4PU",
  "key19": "2J7wGFbh8WRTiNX8zPZ7sBMigkEnynozoN6LUP3RTcKxZx3poFZmHFTjAFgpTVuvxVkVqJn57qNiZawFSqpoDfkW",
  "key20": "4LMpShmqkKpsALAhGwcJWAmCPEv9NkyFxy2U28Kc1VjWvypRKkCcB5YnpYkt47x7dinftcn7wUuSZPArQLxNi1jQ",
  "key21": "Wr485DBnMx6KfEThbE5F2j7o5raaDnxiA9c6vVdJvc5J1menSijhFmSkASSB8dRovRmpZSssfzdx1qnZs3GV2Av",
  "key22": "48PVBpgC7ZPVn24z5mkMsjYfTVVwk6bWUHV778W8BnyV9tj8ASZB6fzDHqaUPcUoWrBgiJU3GyHQn3sWxCKLDxW2",
  "key23": "3wnWx5cMiY7NcDCWWGxLLjjEKPuzthVHx6CxLiuMmo2n6nSKp1rYfG5SyYXK7zg1NL4mXoRxWkFXx9jZBSaufkZS",
  "key24": "4ZX2vH7CzJnHE9xF9r9HVYf4v6qTierrtxSZBhqGF4nyVLEs5uSmNytV48NfKhneH9QHLMsVy8bYqS1m8T1YQ5KU",
  "key25": "3vog1P8p3kyCDweEvvt6F8xLTvhPzZVVvSJBYxBRwWmtHf2MHNGkBA4aXfhoYd1T4WQUdPqiB4T3CBjat86wvdkn",
  "key26": "3XDma5iicJUKdsrqsVpaY5HPKEPrZqhQcgEEQNa8Ev4mBUHq1KutBh9UYbXSveJPBSjXuCidVPrWwJWuQaq4VSD7",
  "key27": "5MQBaVo4kcBvN4HQ43oFZowvLcxe37er1dp9tVFTfzNZPfJehanzwhDmaztmiPFyxZ6DRVhdqPszwJiPSVkdiG9A",
  "key28": "84m9WTW2jFHWeewu53MSQSWKjnBbz1JUMbhhX5HMYymYqy6PovSsNjHqMzcD1fHpo495vFsxAZQchQGrwWXBSpo",
  "key29": "3PdEGVa8LAyXGoTvpyMqqUGLcAcF2wNHxH59AVvpPAz4DKud8agJnZxctSggSztce6yMjfv47xv84wqFgjNqnyN2",
  "key30": "28Fc4Gjzkqtt3fnZSbPL7pegoQ3fAEoyt5dzcw2ZASx4zB39EevRMghEGpajyiPMbRrYaEyRMmgssProsyN4JGUN",
  "key31": "5gFMzg538hPFm7afxfC2GkYTLXSGY3wFWeyVvfX2B8c3K3mjUYqQeiuYuycqUbK9DKHuZjD8PxJyurKRLSUHefzo",
  "key32": "2PeMc7Wj6vtiJSCDi3Vggak2kdcSHUHD96LRYciBysLooqcMYGPHUWZwiMacCu3rqu3UxZpkbC7VteP5CgUKQjUJ",
  "key33": "2r1phfe2VxH4PFe7mewLfE2g37j7VVKVBM61DrGy1UJWZg3cKT4nbMWRPr5bFSkXCCtGb5eyxVZmrqadp6e7MRsd",
  "key34": "62YErDVcafsz1nWiTn2zXp3mDfxTWisu6SAuQE46ynzZrNazW2N8PxJG3GsUDMcnYgRMwZQ5KV1taCyLjtWgxt36",
  "key35": "3A1SZGs8iSAAMxrsw14NdfLRNN8vLnLvoA3B9vzuom36UtAN3wbgeerkacjDKrtbQhS3KmwdJAGKfKL3VYMoH5QG",
  "key36": "4eebnFPH7odX9QuaK91X55amZLnWaeYs4ufoWdgrJBJc61MREKJFPv5D3spSKkaczpK8qpCpAxo5iafenDRjWVAr",
  "key37": "2cQEEFvpr76QaLQRPgCnBzF1XTrqbLZwBbGk2uNp8FtqJZ3xQUAMTCQmpxKAo8siGKj8qeEBYB6CsXRhHZGLW51X"
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
