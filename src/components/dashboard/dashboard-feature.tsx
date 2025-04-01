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
    "2SRqjC5kK8s714ZHkhvpCBX94Wf7FeLGAqtbEQaeQXPoWxsx6K1gDFAM6ciDpyyvwvy5RnSGdAe1F2CLFdKDdw4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dnupe6X4tqju2tkNTN3N2iEkkg7pHzB1xotRB6CygSeRVgQUEJvjjiwcYpNL5PPmbTU6G8BvYum2wEu7jwikpmY",
  "key1": "fvqXUeT5oAF2XM6pzNShrqGPp1bsCMvZ1bK4ZgXedYa9V32dz85G2WX7kUC2dZ2rVNYGwBg1BapaPbVAm2KDsdk",
  "key2": "4WFePheiivthDKCa1Fh1VXjSfbaoj7fAHPrsKKDfjmNPeJc3PED9cW3CrkofVrPa8dTAn47PjoaV8SEwzG1M49uH",
  "key3": "2kKeZmceShyMDESxBbc9iVmxY5jhEAaXRdWVTRHsXMXDoKdBcGVVFNdBjJ5yjDs4dz1F1zjhzJ27V1KneY1k6rnG",
  "key4": "3nUSNXxm2qgf6hfE7ZHq5Hu1W7aHheboFQixDtvMy2PobAYdnsLgNc4ivzYqaj6Gt4URFPXaYgwNwpqmAueJFLDa",
  "key5": "54N9rD2amcCQgokwAupyQTnaaoKCwKQbtHPUZtSnf4TJ24GLW3cWBYGAvCJrxxfhRuJhkbXKCvLF37KYby3RPrQG",
  "key6": "2i4h19Se86y929WcsXohcJamM4MtrjtUN5k1NedsZse9B5QWPG5uhQL6XfvNQgh42EgVhZn2sN9q6XihfCYPgQ4F",
  "key7": "2ZZY2KPiXQunwLgDbXbPw424p1gnyBHkvMFPmvHC48bc6kUwgixsMTKNgHobyQqG8n47UsrNb2a9mfokK6vTGmTr",
  "key8": "niRkJdoLo9PPU57gDzH7TP5twtJi2iVxF87jvtEeZrFPLw8zKV58B8VrcT9NUdPi7GxLyNe1K8LwaVw5aAimPDo",
  "key9": "5kT3Wk2fwsk5yKYUy47TeSVYgmkXKxXHibA8zDhWPQ5Umu93niG8N8u71Y5oNWmN3qJHnaDszXUqpAuH13km1EEB",
  "key10": "HsDzbMrk32GyWBq2jbdfAqnWFfUGq5LYmkFjL7q11UsZueApjyinu9ao6PCVf835bjXwPVFPinoGPnYTM8peZgj",
  "key11": "3UQxiWYb3jn5DT4ncxUY3vkiDwpmwYaiKUZ9PZJmdcXaW2C8MSawyxwvNZststMCo6c8VamrmpVwLLqnLyCyckCB",
  "key12": "5qCGfXfmEBoiQ1skbroy4PkUDGy6ntKEe2vRKNVmrU115fYQ7j6yZhEr23Tv6252KHsp7bMuzJv6GjU1mkrDbKoc",
  "key13": "2Byp21VdUNYggLP2maeqyEbeV58dwY6HFS4EmsGPcPuREgecXDbBMorFhfQmXqU19BNwfoQpogd3fYmskHGpURtc",
  "key14": "nXi8akek2hrrm5ERN2RnmqHBVqyF7F3iPLxB2dx1wCTXtzbM5wYuMhBAw1y1gnbcpETmyzLyWPtsoQSY77K9Eyt",
  "key15": "3tH455BSxTXvHJxBxs13QDR9E8pdwDS2H1pqiQmg1hXp1d2oCKtNaP1pQN2h1vVCUaf4FKhMMYJiGUrHrhqSukXj",
  "key16": "2CcG9jKTThC47mnDiDwsY67JSE5rjacQxiEwmDVCUPNCYZ9MXAavDdcqm3x5CobTgods4pqTBMpDpB4aspgKRG5R",
  "key17": "5xFgoQEYQn6wL26JzPHoF9SiGMWjNLu7RcUjKPHqmaKDZ2JCsQa6N26vqLk6RTxBsZEQAjHQvSaHWkT2sQaAGxRM",
  "key18": "LBwRt9weqCZpaE3QNz2t3YfLYXcXLzMaNknLy15Ba6hfUobon4ApsfcrXpENJftTfeR3B2ZAbaqNrAHBM5x3jvi",
  "key19": "5karkLUcvbsq9mc8MzKNxjhBQLFhLNsfhaihdzrexS45HxzGZBELjUhn7gvVJYpHgfcumSxroEkqcChtLQy19HCw",
  "key20": "2jo86u9sJsybkXyc6gqRrH8pQocsWa4TvRhEmtv9Vc2uQBS12n5fhKGn4Jk24qdHNGwkRoWiQkbAsYWerBNk2vJF",
  "key21": "5JQZvbh3TAz3dpe7pDqYD2PEkLQzoDY9yNbcCE1FsSRcwy7y8hynhrbNGiBYj2L9nj2gLXKnERNA3XVrXapKFVoA",
  "key22": "4h6wYpHKskizkToDjez64DG4F4AZBvVi2AZLXLzbDxbSDW16DFDdHGoNRVyD1ipXU1HgGcE2JMBwpXdNS37FXpr",
  "key23": "ypBpXdDrMjHQWHHqRtdhUzVu7kCPV4x1xhdHkxQLf8JAT3Gs2GgSCxFNwLExLtXHNtEi4hMyddCN6g8qinvf2aa",
  "key24": "4EfDhHmR1tx5Ly4S5p9vdrDjTTnftz4GgaBMQpnbNYpeFo7Mea1L8XyekUUExHtdi3SfzgmuUPTvsiSRBkjGnCTy",
  "key25": "4wAwQKRFqwCgbyytVu836Y5aPrbxRds5bQJ41L9cDt58AHFgN3beJCjZv2wzrtwWcFVEXZpgHopbAeEvafnVFsyR",
  "key26": "5YpcC2AWGwPDTJ7gjAbv6pn1G1D1T98qqZam2b3sc6KunYcmcPvYVAvgTmQkkfZJGeySxZb6SrkcfXmGd9SJjXfi",
  "key27": "4MANDuD45phESKuf5axnK9kxJEHhz8kqxEQ7w9fUP27eYCJqgDKTp1PXpfYCgERCj86sz5Gp5AikqGPWKoNyyXZ",
  "key28": "33P3LUp4WPHP43w7PhK3mGYS8KTWLSmZsae18DCPhLCTdLgvcUPC1We7nbS5GEsCTx8eEJHeLoTsqPAFHyVvsrbb"
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
