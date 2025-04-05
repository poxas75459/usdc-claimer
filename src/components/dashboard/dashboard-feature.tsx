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
    "vCujjrfNCwu9WMVGHjDB7DbZHRRkzQUAnwyMDDGob482RuWwAno1qbyk1Lpt1b8jvRKaPR13oTB4ENDZbBcTBfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o9ad1ZNWtZ2scxLKRQ2uAcTpEVsF8DxUPBESxJunKrbqAp6ZP4tAxiwqM9SKdba5qeMfPzNJHfCHihPfR5foi2N",
  "key1": "5h76KLimq2MJBnQ6XwoVpWYzKfz3qJcaJj13FzdvxKsbCbBRk7m8PvNkxY1UdYfaLxnTgYigzuA8iUarxEf1uw4v",
  "key2": "EcCosPyGxxt97oM33YCRQrDYaLxiGwedKmMWutkTiiqoPmoYpEhbPRyPNSi32NMmcF4MoYK4Fz4ARFeegzN8psg",
  "key3": "4KVG4LHjgQuNkQAbAjdcD2Pwit6RwgBNSzpaxMp6pMTDYK3dQ59y3PshmHqhkqHJijV2y5WVnnSmhPMTf6Y9C2zS",
  "key4": "4Dm6Vd5j2jrJdHBHpfEnakokTN5WVXNyX2n9ND1wNLvuZbPrhAwhXhNF1K27s8HM5o1oXSzYQbHoiHjVNwRoYLf6",
  "key5": "P46GPJF15KQx3vn4TfEYTRfbTRnG6GrSvTes4b16jStmQFuwnXU7k83QsTZyL5pPDhy3DFduxyfZC7wZhZ5G56c",
  "key6": "5cugaLT897R4pam5QT9BK4z1xhAyqPPerw9Yfv88zpdV3iSv4nNrr4tCsWENYYSqGy2xnBvydZjaEbsw7BnSB45w",
  "key7": "4oLibmFTrekbUYxc9xTJWXpxFBad5GJcWBbjjL6hv9xTDU71sQNdtpNkXCp152ZNBFXeyQT6K27uhZhDRVrJMDQE",
  "key8": "3QsqUwD584wZFDNB3x7XkuwK4hFxqjNBjFefyGzxwbt9VMrRwmYw2W5hj3FgWWhQHVR9XxvKztCJ8XjBEHowNqc8",
  "key9": "sDnJUPJAzyQF1nZ6NmEwV7WYEow9xBiSjr8wGaogSeqSdpXLkGmZFb3ncMVgFnkvPxMvq52K7y9VkziMJNq8yk3",
  "key10": "2cyp1CYPU8My8tpAaakwTg4TgvAv9mLQhb5yNm61UnfHqK2BBCDWrPhj8oRdCYufJyaRGCY3rZVQDFayr6hwysv4",
  "key11": "2bSWNvpA3m1ebApLHcC2ntGwQNBh2aaVKXh3DNJN51CYBe91DLhtBayNEj8wEariZoHZNqViX3ksvEtPWEqifMDS",
  "key12": "3jv1yN3XtPY8sChA1CtgEcJ9ofimHrMtgex9yPv5QgARSdf5zeDdxqYEXqTY5JrVw5t323SXBRPqA8SUSkgNpHsJ",
  "key13": "3sfp14D71VqRHeLN3qGeDApP7xfrLh7JVwe49HdJV3S3agMUAVZKytnfsNzGRWdFVgZoj93xnEX3FwxfcYscZkSJ",
  "key14": "vrWf2qdbngS6Hk5X6SaYmrosY9fMwgo3YwXb8E4EvkM9uVqi6z6kRA6qitXSAUZnhk4ZCTDCgq9gxWazsvAYawA",
  "key15": "4EVikwvFtK5JAx3tEzUJGWi7BDJ31JYCKj3cmMLBoNrSQSt9XQKrt28uhKDCzdnGJYSXHMx5SH24AfBPABtjb4oL",
  "key16": "4M1aqydv535PfRkyspJyDVjrmhMbmmY6Eb7zQ3dbEjHDjaAM1YKK7hPpvVw6Mfbvkv3C4hWx8MAvnJkFuSnUC2su",
  "key17": "66b3bPvi6AJPJYySNgRtvXHzPkGEvo5A6gxAKTqhS6jiGUKrxauQU7d7Zdzi9UChwuuDuwUAANHiVjmAQ3eVgzk6",
  "key18": "4yZeTC2bJziX47HKHimXsBcccsEmhgFgiUUoJ7XuM5oXDrNLLgLj4LJFBM6S4GDVmc8mc58rNhTR6HHujcyTVTkn",
  "key19": "3fpQiHEtt2Fi1aWNhTyHXakR8qbwRhdhKzkLNCb1546BQciTTGm8uEpEuGh4jYNaBH3TvvUXfEEHi2Jre3f34ENb",
  "key20": "3nx5amiEVPozWuwov9BGViyC5XRHF576Hr31ABLqur2YE3jzUSuqnAshE3r8ZqraFkFNjRE5AEHtUNXRjzWGTJZ4",
  "key21": "5fo3bzQVWsoHomyxrBmKxajGeVeExT46u8a35PzhBLQJTt7bEX22L7tz1QDUnk4TwfsQQgBakNdeC5Y6J1Vdni4K",
  "key22": "51dQFLXhWvgDwkn78GsDiBj2dEoszD4GMQf4Ed6QvQF7XH9dJk8AbbB8xqYzmtBuqMFdSbxU3rnQRsKFSL4hBiEw",
  "key23": "63g99EWwgoQhscj2BPqKaxPpVnm8jc1BUmKpD3SC667ihyTYNDyLU84vPqm9J9TJQSVf98w2SZK4mqRTwPpbF3FV",
  "key24": "2AuFpxJJjiDHJBcEj74nEvWYd5VPnJbv3inLs7j9S3WZ7RokzhMbDdsNVxj21SZrbyoCwFeWWBkVoaLktDRJrPtW",
  "key25": "4R5QFxDKsySVZmGkU6kzqtpUkz3P2A9PnBtQtG66eekvAkMoY1pWy21TXDcivAVE6PtkDUtsTuCwqzNQPCugmhX4",
  "key26": "BU4DaHwAtHLXQyjT9QY8YcvKbts3PyAeHzPDwQ3cJvJprbyKYmLFYuWKHAPxi8DetjYESYqDhKsnzFsKuBh5KyT",
  "key27": "1wsDitZMRMQyfvz7cRARSiVXnpP8o5a695h6YsWt7kMMmNCjJCNDviSTNcaSzXDP4sesXPU2QRVv4GPoKvZav6Y"
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
