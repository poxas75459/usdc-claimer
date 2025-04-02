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
    "5K33XB6LMNbSRPnixU75EKW1zyP1f6akxwQAujQyyiExvwJkv6cHcDp9bVDwwv2DH7sW1YEbgsJs7NJJoc6vKbdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54FxWTTYCMR16jB2wPn4VZE3e2psvMK4AVvdxRhRDjYUyX1hMNdrmSEUUSkVernEGfPQ5hXAEpmPabCsHf4GTLLM",
  "key1": "3X4jVX3ZmvybRd5GRYrrunuXbWE7s7UXJrr3aoU9CJVHVDxCzfDHPgxjCLJABZnSBuuuPjboivmJdkmoswbtRMRX",
  "key2": "5T1ChdkEuNatqjQgqdZqdY8qDXxgrtQU6QHfoPRNQ5gMGVDCLtWYEdi3RemWcBHkf7kZuVpEcNQcDDko9rVC8ewv",
  "key3": "2haLRQrZFPeFKj4CWUHVqp5r5GRpxSHsvJdPLR7z2xac1BpBkyi3aZqWniTVExp4wwViznTy3hBh73pELT5CGLha",
  "key4": "2iwihrGGb5E7nQ4kg3MuGyd69775h9koN3V5EQkXEecgaon6bPbk1cav41dppmUJdensgjHc45VidX9dGUAy3fqJ",
  "key5": "3rev7obmBKLCgB1YXCLsLUVNxbFGek7kk2xYjeLXYET5KfrXQEBprPUWS8w94o4nbedFQf2FD8iAYy236Zhc55PF",
  "key6": "2X8tofn69FVfSBjJ6Nbv4MA4fDNNP8Ft6nymvEco7F59Dvt4Nv4mSrDnXYYtiH4spKtj8wLEDnd2BvYwkQgXKU6p",
  "key7": "5DC1Hr7ruHqJhEi3y36vqtJLCzwHUCsvpJroCQL3hFWq6LTHN9nk8gHQ1jYBAWJUXdjCdbCSfkPhw2j6dsPyoxEe",
  "key8": "3Vf2FtLM2sSLKAtvf3byGSpNiHAMvbAoRkiUwnoJoHZR6S5YrAzpzUMB3CEYw6RXFqCSFSDZoXXAYjUHpQ5dESA",
  "key9": "2aM25sChnLoT9E8z5WHWhK3yvJ12kHs274CakXGgR24D3kDsNsxGFfEtPZkcHkwpWxU3D3iQ1xNJ7QPgn3B9bcK5",
  "key10": "21VfntxT1ZCvz7KiLUvVGgG7nenxY5XF6FWgadU4PWU9c1unQC5seZvy46VrUSA9hZ8fqJsz5iGFqhPUkAqEXjXX",
  "key11": "4pmqXY4npBxqtJgX6ZGszXiSAa265auQaRX1bCLD7kXRyRqXPN7KHp5yBoPZYKd1Pizp56CBMJMsuxhPYGWiLriR",
  "key12": "4UGMzmPyGxUu3KQuYuR2iS2qdvBDjYQxuSpyGZ2TyNdYnjG1Ti8LHL1QTfRXdfNo5xWfDWoNYguZW6928vChWDyK",
  "key13": "2op3Jsn9FM2DkhesLXXJeZfEG69TcD3EigZiZLZaJnJJ87ZAqHh5MngYJq9hKh3q6ck3YdyL9Z11o5SiiUeVbXKk",
  "key14": "289pb1AR4n4iU41wcRBW4yMjHBtAbcMmFeCJhe94bBGMhJyd8h73NiZXhp1W3ekCq2hJwvxxfaGxM3tcMTEhBXPp",
  "key15": "rZ2o13hBRXFkHGJbXkCNBPcub8LvhTgKkaTSkaQdGahCGgDUsg8bHPWgMLEHxXByrXGB9CV5nDuQZcvdxiNiMVr",
  "key16": "2Bv7SHHByfXgttTffybkYAATiTGBkb3EMTs7EELTjzkxK8jNZTP1CS9F1zfpArvaB2JGSmJs8gPrW8YqNsb1cRXK",
  "key17": "33gLgvNcQ5VPzyAGKEWrmLoSMmAMYhj8xMVuDnXhfcyMu3vVdtGmqEAg1eabqxAjZFcFqmziYQtmV4vhoeboGeU2",
  "key18": "47rqR1Yo4YD7ZCXxuvMKkpg4aJE85k6YTNg3oP8a1UutTgbWewLKAkHpPZFUL7bPnfHyANZeUo4doFGjiqPaSFTa",
  "key19": "3MEy8tWh5UcGpFs8mNZ4nM6URrKc8ZjqFXEcxHxVZoQHmks9TqHYNQSeFArLx5nQWPyXgz6zeiePRXKfwHWAQE3c",
  "key20": "LhDFvjjSEDU4F7Gsb1pBcTvSY1it4MYyMcgx5spXb9BpVExmwKFxavAbP5W1Nd91eTNuGZeYZE3QLBMTwqurbWu",
  "key21": "3j49CjShBGTbhs4eaajSSg61TdwqRYtBsgRTycJxU4heKUBJAm82MSeA2wvJ8mdQZS9hFRmTbCjQNDchVPD1kgjy",
  "key22": "3rNiv9zQFfmi1swYdQYiXCroGNjkGyfgP5XPG1CuKGmk4qrdFcxvGWCwwHHMzRjxyarpa2ebpQpcbjytduPWw6bK",
  "key23": "27eqTPXhRuLFLVUKvjifT1Ed6uqmSkhfxKyaGZ9zmBpgWKcSk6d6nQ68X8w3BbM3WGT1X2tGDZbjkoDeU8R3oZso",
  "key24": "ZcZmMq4rj41CHY2ReagBBPKkdgprKXRLKiERLM1XWEjvoHRvtxtoUgmPVcRzALsVjwe7yEia2yyxoUPsxX8dYdR",
  "key25": "4S8qrU7oSBjNP454pFDdat6G6XVb6yK7fNNwmAaNFuKavw23semQxZPFeBjHngedgPxNMxkp98DerkuMZKj6CTAX"
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
