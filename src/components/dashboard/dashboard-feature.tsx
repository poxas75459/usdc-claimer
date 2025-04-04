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
    "uxix5hRqDbK7Kn5pDcSwdXuffixF1nk5x9NrAGTpvWzNLxLWzqpCvWXfR2JQwP4GWR8ujyVMSPFmBZmbHSNFo6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hm5GH7b3i7dY98KNBEiErXa6Dps9odygwhRiPWa7Qk9P9QNH5bXqaEve6c4V6bnu8j9qnSS6Qa9qrqRyd1U7qzB",
  "key1": "3Fq6vpG9CcNgGZ6jEyk3tW8nLFSRVWogUtnPDWMfFU2RiPmQQMrAdHLjgSXsd2gJShFKA8MwNg1nG9nnjatLZCU2",
  "key2": "4KFLUpmCEbH1MKURgwGzhuQtGR75zYX7y3cJQFqaGcegHEUmuXBPxzA5SLMTStobUtpXzqLWLDV8okqmyaMukkE6",
  "key3": "2vxiWo19cEbs89xv6RAtUXDAKZUgAGRxhp6Aq9LRB4wJ9CKbGuE5sw3c8jJfDWW2ns3enY87U7Pj4DkoBUW3MaSD",
  "key4": "43UnFFiUC2USkCtZ4HK7H9LbcuoFq8x5zcifQHYtYcz4xhYC2wppKYHahkeXq4gzMbo7BghyczbjuxLjpbGXHoXr",
  "key5": "4Jzs8A7QRJf4oq63askxsdi8ipukhiHEPW8fDTLBgwTKFhrQtoesmCE6k5qSu6KR1UWJgyQPVFPV7agV2beuXCBG",
  "key6": "2K3Gd5kbHkMMxRqL3LEgcviEshpeVZWjsygqJDKryw8Bx5LQ58VpYvnUqFcJWwxd3xCzxAskbnhL3u3qoPvrnCmu",
  "key7": "2bats9x2EThdVfStPNK86JprMdAaJQF2wT7HgZy2h89Rx4Fai4TZcD4p7kB2jLUay496WRPQgVpW7VFhwho6pHd6",
  "key8": "4AopZSKa8f2WvhPMjifTx6GZJoML4KFGwHy1ZosDph8jCQqCAGwvUguSjjfWdtm3hPyqLuWcyXEvEtykHMxJB1iX",
  "key9": "vy68bRXNRczPc3yv9v7MuJbzSuFYLj5AsHoDXkNvZbSgzAMR4YoX64zsAeEYHGBGDcoof8aEUuXVtHQR1viyQc3",
  "key10": "47wuURrwFhkqfYBro1p74dE18iNPMBdqCnhVqujoduPWrjPCuNMRGXqWPx3A4g9TVeTyYYayLVeG5ZmWetJ5jp42",
  "key11": "2WRqBfZMLheAnN3HjqRy6ZTeQrDRFprJmnFDkSpN6t9qiyBVoJtuWBDXxGNzMffuUSoe4V5ymzQ8rUMzrv2krSuy",
  "key12": "4gDa6zLfScZy3k7cdADB5sTAWrshoHA5T69HFNBhKgYMZ3SiEiCet5KakCcDUaiUjhmTzWb9k9yZzvzcWgbJ9FWb",
  "key13": "44LJc4oQz9UHy5gqLfxXSFkoqpVWn19oufyGvtfSYy9SwWQKvdYGrPf6oXdXXJD6XHmEn5nVaZmDFHd8jpyGZti1",
  "key14": "2uKrmGbGnk2Wpv5ny5WT8biMkCtFi7D72piwcVRTWDMraGtSHmTQsrdRRaqZUum4T68791Fprjap15tYPhC2Mznx",
  "key15": "3fnasiP53Rxsdr61BmYjtfUHM53k4QmRcbMc3z2z46EUmABpB2TuFimxvyzUm2vqiF9cB63R2vcaAs7yHAGwq8Uh",
  "key16": "3TnSpRsmMFzJcBe1uRuj72nXMYXD8FHUjexRLtt3o9j1LNnq3YdwYCn1wAixWWC7mJtBiASDUq8Xfin8hW5qP3Fe",
  "key17": "4666gdHqTTaL1jS7PCnhkcJWaWXoqio8oY4e7FAC247TMBnpVcQ3Mx6C8da5ntfMe8BGEYoFZyKi6E3wWhSsVakt",
  "key18": "5AoxdV1kef1vip2Kb33yBLaj7BtJ3VbrXaSB6miArnyunzA76TSiM79KH9VecM8q3qyrpY6wqfpRzsTnnFZpUHrh",
  "key19": "18uFeJWdCpwAgkbAdMsZPDUPYDsAjpJASduesntBPwhn2KwLdzbcAg8dJP2t1GTeKJqY7aUB5K3EL2EZj7mnbko",
  "key20": "myonFDvp24nBj2pbXK4ZD7HMk153RzopwJyyWyYgGyQA6fA1JExJV5tRqAATkrxfMnaXXGpEq1uwyeiqsKVSkAY",
  "key21": "3tRA5APA8hKYZt4HFZzvvmyvySYsfsZ9LwzfEf43hfaXu1Gz4VoP3wnpfkRMjV4K1JPYPyzAmz9H7woUuRPL3rYX",
  "key22": "2WxeoTN7aWRpU4DnRgZTzHbodrBtg8jxZr1jbAbWtVC64fkRi2S9buZ649GKhCkQFnTTFfAJ8k5kpiwdpfy91T3i",
  "key23": "2xDHMq8PkpSw2zFkceyXhXwM2FDZxUjHr2VVMjxU9i2QhY4xoHJjWNoSK14zh3b3TWreHXcXuzdeEknJxMbD8FcN",
  "key24": "5zkoDbPYyH3GKvDnwMTFbmZUQELav3ajuHLpGFjFb2n7oZfGYnv6Br2J3PypAjz8oGe1m1bVtRQjFdPKcM6fMELy",
  "key25": "got3pvGqxmgGfev91eyWznGjWjPnfTTFB5y4HXSoLoaKCBcQAfGiJrMr8pypJ8w8fNppi5MYMbU68RYEAmpGRKk",
  "key26": "3E4n5f89NSmixyus8XPxazirnVgjizZXA35ZDGYjAuu8P1BHBwwRnrEFr5zUj6GXRee8PDCF6uL6y1PS9anMX7gS",
  "key27": "5jsuL4arPmGH3JiRZ1AzBFuX1Dcy6YqExA59jCKQDYJDmFBVVJnoDBuyb4e1rwSYNrXXKkrHVSEhsKyVb9fmNees",
  "key28": "2A8vZyQNC5ih26GFG2PeuuSRA5JJsMPieQiUEjVGAVaXGFACN5HjnfmaoLmwV1uT4gcensJwtYBVfgE3YMYaxqjy"
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
