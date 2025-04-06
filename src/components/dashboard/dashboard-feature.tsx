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
    "N1ZHhJkygHEdu937yUfSudV16uNXFwHFhRebRtfw2caYegjvAPpApe97i97WEoJBsTo3uB5qnzWgxNCb5yCw21Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mxexJdF6Q1XzA44o2gDxXKAKoAhimd8tBnSrgLZoZT7fQSU39BF7jmnu4q6Z7DawVLkwHEx3QRhyETSc6JjeLg",
  "key1": "Nyy9MKVzJbsat25Aia8x5UDixoDgzsPt6XAZXoFivmC99HD41WDPfBgeL6jsHAYZKUEj8rBgmLvLUfiy7NcxzEN",
  "key2": "4g8vUvyuoYy2Tus1E8iBAyXxYgTp7jVAscsKT4VYdoPP3DEToFaRCgr3nHxggYyHNSTsSSmFTgHepiYdK4fccDTp",
  "key3": "2jiK3ZnTtnUxTzKD8S1x3ETzYpHXuER8YkJXiXE2Gy6yhWXVvKeRYipMJLmkzykfce9fF36XmcJFTXyr6yy1kqmg",
  "key4": "5KFjqJ3isLvKsRveMqYHCbehXba4Fg2cBDWwhByZqDUHsXzPsD56HzTsiZKeKCNT1oU9k6yuiPgcEfySTZeBWxZ1",
  "key5": "5XgFxYr9YyzhoSND1S6UK1g3fRr6mgs2TpDL2FdPJappSc6dQKzknapxe8kS1n53tiUY2owM5cjCqww5W28F7JTr",
  "key6": "4qot9Akxd39XBDPLi9pPXtBvXCeMdtMUZ8xkDfc6NxLWdzbN4Q7eqBkheSbNNZXndY6TXVaadsMWg5AWufUAv6uS",
  "key7": "U5iHFyy66CTzQWdQY8xomNhHNqbtXQRd2R8DvXY1ur4bPd5tJkvWgojp4qwr12MXUNKbDMw7XbNtTa8jhJ1VUrV",
  "key8": "4ybpoJdoJnMK23cR6NidFwc63cGynUNXbf1vaL6X4ey8BemdbKRWYSURvtN3H8gagVSRb9ehCs4SzoyRiZaHnksa",
  "key9": "4cSxks7NMfjpCaFa1RdhFGuTPu7Zyf9ms3cZbEmfr2EroGQfnDg4qQWGyt6BczvrV9Lc7mJ5EPyRiFuooznQWVct",
  "key10": "9hGw8Dt3aD8XpEuTYwiKxp4129K1Jv7PSQy4nowiY1szzbNXjhHiUzUw7x2FtaQ8evoomX5EbvpN3qRqQmwyoAU",
  "key11": "37p3NFs7G8XYuzPQGMq31pRZecGkFbSEbaP4SQth3y9nqtZt6cbvM8Jy8gJEDHZH5VJoY3RTiFEM1jSdKkJyCShK",
  "key12": "3TLt15wWsuetbACG8dHF9SaxZvkEGfENDRmVS8HXD7mHSryX1oRvUPi6xCTtANzvo5WFGiZQCtt8XASjci6H6s7h",
  "key13": "5JwrK24eLGQMiLPMo7Nas7KYYcWCcrirjxgiVmBJtiLqQLeGF6aCgd8zfMw98jUXJ7jkeeDYBqc5QeLTR4HkuVvb",
  "key14": "5CeJuYn8T4vyELzsauXyVZhrZTKW91cWSY2m6E46vhR9seowQaPrUmAz9K1zCW7J9zDjeG4JA3g4H7eBGxFLXEhF",
  "key15": "66YqyfFd3aNtHHap2YgNo1WtuAG49roqiBHTjgyrPppwi5vxAphFRRPsy7fPhjPQ9XzZ3gm7gU2BBG8xzurB1Vgf",
  "key16": "4FVAzoWKGTMdoYGo7vvFJCgfLKPsjJi7nySBmEJTThjgWNBoYgztiwykgqGqZL6qcWZ7ydnry8EB2ksH3p2crc1W",
  "key17": "54hva7tDUBznxzorK9fRtD1tCEseTtxhwRhoAQUoMbewFGGRqt615oF6nJEnMkif1aKT4oy9ybkM8t8Rvg1aZo4e",
  "key18": "2dUjMqtQP8JcfomknEJXLCmzDVARf6kLxRTf9971c3CedbxqWhiNr7VKimM92vtRwqkg8yohjoVFLcXuJ86RmJVG",
  "key19": "nQ4xzbnnQyDdviSfWsTCecvmfPrWBY4JWm4qPScWEE65DmTg9yhmN2g1xM948VMRXz77K6sa2t5jFPakHYtL6eZ",
  "key20": "3CZGiPGaKiWBedHicCz4YV9h8b6RXMt5LM93mjz2xfVKjUMARbkBjEL9bVRE7cfRi6U61mmZXsD3dngTuMKtzvLM",
  "key21": "VBMF6qGruzm9CdLVLPw6eSCphtbGjDB1PfqKNa31AQLEAgo3pgDDgkfvvxFW2os9j3PASu9iNfisYnZvT1m1nwV",
  "key22": "5rg6V7MziDKN2A3C6NV1sakCpLLigcc6m3iT4kvWFctiRBuBXYUpfvVSFH48hUpAotQAzU8YWZWuAWf6LJ8VdW9i",
  "key23": "5SdRDeGQojkG3agDZCvNZtHwYo1fwiGSmdgwV225HkWSZ88q7ggiyVZ8r9hMQDxbHwe1HrME6N6WRUQXmqXZeXpj",
  "key24": "2NtPt7GMPwZCkm7mRmeKojSFo9yu8yER4AD55g8BGwYEF3GeAPXWX59QqoVo4kz5i67yspR6r1Ym1A2RHt8M8z3d",
  "key25": "677Eh6p71XhWCZ6Mo3CSUjVcQM5JfK1cUtRVfTGR358zswwto5XTKkhDuQUXJxzSiurgPX5auRnYX6LK6hzY6D8W",
  "key26": "4a4yZ9ehEd7bCwvUWeRs5BhMN4om68tyC7mtBaTgk96u7Nk1AHxpaQbrxmVoPvpMHhBvGbWfP5TLH1NvjoyeGAMt"
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
