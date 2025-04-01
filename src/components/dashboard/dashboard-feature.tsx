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
    "X7cSVkhAhvxK754C41fu2g6B5a5XS1AGynkKhEv9jbophPMZ3a8EFwC7jEoCrpbATj5HBHx5QD9VFjpaEKnKyid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JAQu6TGqNMKvWHQfAGr4YY87Cj6aShRwbWH8vQ44YcXpbkRw6M4kjxMqkG7b1ipTLLG4YW2KUKQWxBKSV7x57x4",
  "key1": "2zgXSocmWyWXdUtGAaVLNqxUdAQP53f3QQAQ4ZBRKehUq8U3AShTddFYuhK7ecZP3vp2qvbmujQg9RhpfS51qGkg",
  "key2": "5T8jG5P2hqzKkHvXY1PPjVVYJ2CMA9GngLnVwW4CdqgbBZWEi3DsM45NEzka9EY8y1nQHra6btkEbRoyYjuWnc1V",
  "key3": "56DjqKPZewHpEj4QrYHH4EJGcbUaKzD6vqQGjexH1Y7JtknVorSbxbPaQxNFpZ6hzTGmSiMzYuEy9UQtcHi727kW",
  "key4": "5aEB4MkA99fW7gCdNNgtHsWw4NDsswmvy87kLaBtjBVtKvuosdczXBX31oGYiAuvB6komW9ZjSDgr8355qdtPbTe",
  "key5": "H3ZJvZPd5gZ2PQy7BXzpHGDVQ7DeqHUs8qGwxyEHfwiaWycQEXWvb4RE1vMj3TUmZaRi5xMcvRSejxpS5jmyDL9",
  "key6": "2cVykCrNgizsQB4gxYKc47fXP7gMJ9eiHmADjkQWpTLZFhXmu18Y1BQsVWEVGKdKMU8F1jEEiWknf8RpsbHWtmSV",
  "key7": "55Ws3rNH51gmupLszn9QzWpMu7Qtx6Y3gCXGsFhvf74MAK65yV2FnZDaHu1BsWmrCpWo6pUuXyZmsE9wyiz2kEu",
  "key8": "5WPUW7tQzMxFPJfXyyvYaNFg5XF9yZSfJs7NmYjik2KQWA1ef8egK8kMESWhEkyU877ycKbfrkgfMghVEjvZYq71",
  "key9": "4g38ia1fwXznu7yuy6RX7a9AN7WAgHUzQoLg1VJbnQtppJnacFTY12GPEjq79ngWRzchiNkTXNuPtWSbnae7Qn7X",
  "key10": "4WzWdRRxrJcxi6jUEjLNxoJpq7w277kE9fmfHr2YChuYinfaFptQmhTvwqLRQiqczo9YZqKaP9nkWUHudP3NQs9b",
  "key11": "2K9AKxZdNmr8cZn3bTaFWxbdKAHKfzZgNUcAPtgHgPx6gkoaUJLX6QRohTCVeEM6NZQ72JjBuvePNEw2aKv8nH3o",
  "key12": "3f6twTLquzwiWcjAUoq3Zwf2ipaTuqojDbJ8yMYVMyYcR7RjUbExdnbhoQKHf9reAtrPAbmY1r9VKLucJkR6mn7j",
  "key13": "4La5rdWU5jYG6HSsniY1efxLaHUZf4fG3vjbXU2jMLD3HdJgCEtknDUCazEAUzRUjbS7GAAiXj37MKYAenS4QjY2",
  "key14": "2d4P5crZVU7UCUXTb2K3Me3SLL4NSJCuzMdVx8CmPH3oCHkPHMPkB25dHWNHD89TN5GTXgFtpngQhpMb1X2aUz2U",
  "key15": "HTWWMhnbZkYz8UmENN8KsDDJG4N8vjZCpjR9bMRreexfshwVcfQAWLct26SMMR88Zdr61HcZBNevDakq5xukUGQ",
  "key16": "jjgFugFmxdtHpb6JXtwsHHuXZ2D7QeooCKE28a3yFYHgQ9eL3cisJacmeJwCYf2pHyTHKuKx2yEpSombSMyuAVF",
  "key17": "4GWAVE51EijFv72f2XAqprpfCL1qz8u8tCEP2ynsiengvRTWwqGQe3DYFN3fP61dixXpBQ2CixemwWJkFXfepYHM",
  "key18": "vnU2D4HvD5dvYszMA9kb2CRyKQ1yi15bKcvq5BZPeiZTTpkhLUWbspnGjXKLR4XuKNhPBiVRDevyaagDDhzCZWh",
  "key19": "4C96jDekwRcosoo2hkWii7exgKXEf1RFTviWKvpuEDKK8QhvaQNpchmNJ3TsLvnYmkHe8oYKU1eTRPCc7SS7sAa3",
  "key20": "2oLAnDqET2mjarKKSJQLzSk86dz3dgotfJtGMKBA2ArxNKEJrjF2NzxLDhRoWn6DXPJoVeZgrnBrG9WFd3d8yEdJ",
  "key21": "caDLJxFRv45fLVS3PGPyFv7j3pAT7Fia1y9hVVpRrsx5P1LiGYzHt5vqcQruD2SbXiVUQL4AKQZqzMR2EXS2pC6",
  "key22": "3Xsa8phiwyJvxBFftS9ta5d3cRxPEV2UBtct1bwp6wznkGRWNzNRzEPbBvrAdi3yt7MMDUR9NehNdEW5TYoE8GR8",
  "key23": "kMLf9zYDW9kVvhpJAS9Xc5j9bhSzZhEKmeyRcGWS8EjoGnk2p54fdn91AvwPL5hkGMxYbetmpwMFmCcj5Uf8WaH",
  "key24": "3K6Ks4A5BsHBtbPbQwHQNdJiEceS6CWEXmRKXYwcmRicCJeXcUprHmuApGcgxxTfndwRXyiyu2UJZBWZcgzwCN1w",
  "key25": "3GDkrSTnotVtNf7MdtgByNnfP9YHLDwCj6cWsmvnYXvUVLRxJiGt6QyA6RvumjRcQf1EyUS18189evNaU9N3adUX",
  "key26": "38oTcbhraTN7UeNrYRFS9qoYDuLCUcKtztRzVu7XR5MAneL2zpCvWKiY1X3rd12PmBu3Njy2MxczpRenyRm2CWU4",
  "key27": "4dFnTSVrhb7aHMxpBqwVZ7cZNRRg7BMMhYhnvwBkpPF6aDxtJFvF4H76fC2qg46Q7jmb1fRdZAqM6WuXfHVijhew",
  "key28": "3RfN3yvhfEQgk6ujVS32AyfT4aEW17kUaiYg4Ya73JRmCgiPFCSMcD8bZ5vcHaHo12cnsiKtHzuUSfebw19aGhK",
  "key29": "5CpBMAfLN8BfPzs5is3Dei6YodiadHcVb8tZxbtg2htwuPyYa5iaW4EzUbceXTkH7ZKE2jr1YywGgt6R6vpGcnw9",
  "key30": "58jJD7hm9iuWa7k1A5J4iaxYPt9S9wWtU3bzd9X7dhygFm3gZSVZ44Tu24xa5YQVr1it72SQyVU7r7LBsAeBqjWi",
  "key31": "4qKWdbYxbod2BmbJ6joKDpdJ782GivgEisaakccPLivQgaDkqVJQPgCYZJbrdPXXanj5RHKqM37p2P7iH5KhyFC3",
  "key32": "2pbDTer65i2eNHRHs91jeKqmJ78pAox6KL72zEncpiNwpejdTnDKvGkQzat7T5vXuaeaEQBrmFzt3rzcSd374vj9",
  "key33": "2TMwnVvtK71HeGkUX5R6wvjQTQhQoe2pTLfvPYnYDE4CvTsqNBDotjUD5o6FMpyJ1wZEr7rGtsERV7oHzfdhz9He",
  "key34": "2uMz55Bg5jGorqqJUt3xZcNVcsDf6RbGDw5NMiGwX9yQKwdpXvcc1ibReiwhxEUdqjjMgcn9SMSVJ8t2QNhXyB26",
  "key35": "VCs6BxDWXXfyzHMMtVE2YL3nPeTdMuJV3n82RrzAUUVJSjj9fmY488Wavc9gsuGChBp3GFro33ycz4YBcx5ydqz",
  "key36": "3JSQtetKPLgSwSCN2uNdr9Budm4WchkqqZYHa2AP8oZigHpiC5nxdky7LgdgZhUkmEYn7PNYMDgLBUm7hVvi5SCZ",
  "key37": "3a3pFT7ghV33rAdaZubCBWCnRUhbHfv2rN95CbCR5Lm4oyZiV4G64SrrT2HWzgi3ujrSZvxHxADAiagjii39BH72",
  "key38": "5cFSKYiFtgFSs59kUeXhLNh42vFq7kz6sqwuisG3zU38cPdZn9dPJyg74k3mGdMBj7FDjMWkq9Z7hcbDD2gQcS2N",
  "key39": "3jLKZh93pp7M2Ug7utjrhSMA3aZh4tAuZjGo6rP8mCjxMYFQL5Cxcdg8Zad9sX5qkqP3CiWbgqLkxaGxnrTuKmXr",
  "key40": "r6MXj5hqVBHCfGN2gVCvABJh3fjFC5Vch8PbhA8SsgQtbB9AFrFoFPR1xQpbYPMBiSgp8w3mtTeQvm2aRrYanwD",
  "key41": "5wqVanRLJvgVv19smBkMqQXdigpweqMLdYdwTef1Dpd3J2HveoFBuAPSGY3yg8eVHKQZ1CbxmXLwY2Sxz2dd5cvW",
  "key42": "5BjoksSURgBf8Hwp5K3SfEQAhjyESyTmGbUyovxaWSdcbvWYHph4Prt1RA8SgkYUzZxrNzCQYej4VVbBuoDfqAt6",
  "key43": "2KWN5geonqdQPEqtiRyBzmxW5G3Xf2j1XhiyEaMEdarnCfioWkXmnnBNwPsT8zBcv5MAjEB1Dt3frjba6ZUfxgVY",
  "key44": "SBvKUAqMnSupQ4zejam18SJUZqPftACSXk3hDVohh4byrYxMMm9ytv8Jhdp9RtK6DRNDEJhQL5oN1MrLMKDgPNw",
  "key45": "356C77dj7wj9Db5rzrnrb9YeqpbbyD7qQmKarWPUvhCpPS2u26S6nG8yLsn1oDKXWF3WsxYQ5ydgATJAa8JbAq3A",
  "key46": "2QYmLXukv3Fjk2wCUoYm4sbQVyQuS8m6aTCjLJmza8Na4c7voifSKmPuKsanCsyhRPK6FuEeJbe3mjjZRB26RHME",
  "key47": "3q9Lnnp6ZpS12F5JtddCFHeGj91LbvD7pMC7QJzZp83Be4jvzcjiJdBkGL8cTavKX3bBGPMvnMYYeWeUzq44wwxz",
  "key48": "2fTw9LRx3TRsZFQkmWF2XXDNgauLTMUm2zK5K3dZqjwiQNe34bH1xF1c8p7spBzKJcjJZtDXTEa9jpxEP75NVWM9",
  "key49": "5CqQFXzNwvXozxKgkAJtsusBKeUAsTW3Qjk54gk9xt636cfATW5x2wyumtnL8DrfHDc1F3sCRWsFzFnh4m5pqnrp"
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
