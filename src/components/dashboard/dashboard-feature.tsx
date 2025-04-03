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
    "3fo8g91TtKyShKdjyGKiZCmxzZ469cqT3XKrErTDyTs4Fvwm8wGwgcHkjujEUgipXS9fbfT4iXtN2LvoRz6J4qme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X9i4RDNfbKp74cLCLJNw1zKKPHasfqobNRBdhgTd8p9nemXW4wPSb7zQ4FUaooXFV5f6sgiCdL1h9EK9PevVuWF",
  "key1": "1sKQyAxFWr5iNFjvohhp9ZjDoYoA1aCCazUqmxcbPgcsQ9emzpMFDRDvPbcSpw56pWV1nrEEzmXedZa4K84qkNe",
  "key2": "unwnCY1bikvPYBFsx1U7utxXosHoC9scNjW6SNUuGZj22P1RZsntD3rmwkCQy3EEgdWG3zewx25xL9VkTcePjiP",
  "key3": "3LoudWqqA2Fiq3NqpFaMcPpDCYaHjLL7F9WbYJQHG8NtFoLpb4vWzdQZRmDx5VFvDYLtqAzBgSrV7dT7qJTXxJ65",
  "key4": "2Bi6RTpmMZ7awR5J2QyirTGaWisdbDwKrqFFUAWw9GPNBFGvLd8jwfPJUirgPAq9nZWuueg2HhbAFMCHAhMowYF5",
  "key5": "3B6aEWiSdymhdPUChDqeRWi7HSXvLHpkGGSfaW9h8xgj8E9JVBdvBG96i5jJpED9h5GiuEsFPc7pK1zaNJkZKRJB",
  "key6": "4mocSjygkrMEJTpjy67EmGu3NNLrxiV1RTZgrCvoKmaXCBZFTxTBBWu2VvrRqPBXwjEFKYu7BQLLCp3A1B5pEKGb",
  "key7": "5N6zCoHFqUBeVyxzFEwKJG31BtSX9mH98XMsK7kgAPFL5K5uZWx5beJAjQu1z9GT7fqrCSigmVhyUdnZN2yMk7cZ",
  "key8": "PFmbBkYLWcQFSR4hySpAMRMwBUYg3dNHGkCb79PPfEhYMSpTXmPyEEszetkqbgb3zTf42SYupAPCmKEPcSzRrCx",
  "key9": "5tCkQPqHcxreKN7Jf85ztHVawUQteLAD5XLf9zF9tMQJCuWJcs7WMezoK4A6FwrmcTn6fLYTW7ENYo7VmK9HLz6g",
  "key10": "Kp7rMq9tv6zKoj3EePU9mwnqAz3XJpUirdWCkvaxDQCYLJmQyN67ey8waaMLhYK5gJX6SrxKgM55K4KFXSYESPV",
  "key11": "2twi3UwHtELFdGguLPAhk9rg3MwqCjhdk4WAnd31DP2Ft1UCpjWPxqDZmRADZVisRiVsts77uF8GdYa7zNRm4yEi",
  "key12": "3MrNjCitAyCunuP6nSuw4NmmQ5zrtXvQYTqL8qT9ZgdDhobvAMYfnS5sP6dp7DFKMDt4VE6qFwKi7m6hhqr7PMub",
  "key13": "363FV1Ch18Ms67nryB7x2YHaMx6G18s3nZYyAJtgy3pXDTA663F1oTjv1URobYrWfywafxDf4ps7QpQQBkeYJahq",
  "key14": "3NZYcbUn7xBZuf18tAJYv17KKJaTe4vtrLKUUaedu8MFoL9v8nMPGZN5pVdUuwELmVJcbK3k5Z4jtY3n72tCjkjQ",
  "key15": "5Hn9jn2CLrxvtaj9ZP6VzG4rBBsi3Uu5p4LAG7SLo9g6WxeJaF8Wrh9aYbYZtBnPDVxswyPyR9gzAsMKjaKAtWoK",
  "key16": "2GCnz3eWuBpXNwRZEU8ZjKX4Moe7g67DbKjKnfwPcbjZAMov6XtHQ7fPk99FMeUJnriaTLJizbAau1Cab4e7qKNo",
  "key17": "28wK1UzQKDKFWt9q64jrRRN2KTgkVGiLHqMvLjBJu2sx4uNY3yfsyzG9E7hReao9dpAx2Fkw58y1vFh9baKR9piN",
  "key18": "2PSEunMsTkC5uZiRogg1WNX392auSbhsEv7JaFoF79EwHYSuHXjNtoT4GGBEKWspdNhvKrczCFHafLv9TKWEHNN",
  "key19": "4tqRoEUri1T4xrarVS1EUgTuCL8iKSnDw3nZG1WqmosPGYRFMP8aMs6BspYBx8aXwUAeVi6WsBaPd98LkC57Dvgm",
  "key20": "3pjX7HTubjiwZSNCj95REMGVTdUfAMb9Q3tFot9fNq9tUTmqioUSVRabnaygPTpfse4FjLKuQMzJDQ9aCZwLzdwy",
  "key21": "3EcmK5nGpGPXTKaCvHjERuSQCcA6ALwD8GW5NWyNoSqArx4ZeUeUCYkQtGYguTW98o16wJq66mJypMigGxpcDMxx",
  "key22": "5YeiTVnXGjcMzcCujbfxBikPESKWdYfqa9BMEg6rpYwz4MDUA9B8bKL7eoEXo5iuNjHF4izMTD2dU4kLN87JKVAU",
  "key23": "58DB1X9K1vs1knW8zNdksAP7gYEGPuM1bCnVbsGmRKRiLAJviv97GtgZ2hyZVV4p6tgCeC87RNKUaVWe39c17yh1",
  "key24": "5kqrUPW44BwKCrMbRdRTMKzFStcRBoPBFRrGfFyURdZLUiSmVsEEFGS7vvC8AHU4yGLmMCtSMejVTimYGX3jAsSm",
  "key25": "5MsjRTmajUwYjSkGFX84T6VAtbsRkWw4WDMX4LMgvYVtF1FLAVJH27ofM3iMh7yek5fCe6sZKCUZaW67YYKt2bY5",
  "key26": "pXpQ2Q1w2Ci9mSJNYEPZYSPQCJb7S2dhEmBvTF9wm9EmrJWARcpMPRKcMjx2W4hpeYPFF1sN4PAMjuWmjWsyaej",
  "key27": "MBv2x6vNR2kLzD1dekWRhwYnzQFscGBEhzQgaguckByMNgoCs2q5rWu7nFmJ3d2S7rbL1vHAnenGYP5HbHSTvJG",
  "key28": "2maX27QxbnXKkchTrkaCRTpkXtbwxyrMbbz3itsMN32SKf6FZTDhc6ScMs6BPkG37M8B1xr588dLSiZXe2sLyMUU",
  "key29": "5CRxUpUEYQ3UBPGme1ty4ktx8hRKe9wAgM3RoPEYpFm6kGLWm1uE2YGA7NPJ66ey7M2jXuVv2gGmbvXbGcSKNyjg",
  "key30": "F7RvV1kHP235KWgzqxTtqNuLG2CG5gLjD2K3TmkFkaraeyDz4TvqKtaAajy9BwXbDfxU9rokr3hKRL5aWUvSu5C",
  "key31": "UKiXPjDmwAhXfTF9qVbsW5HUxwGuG4Kk419ucAPfBqgC9H7BWFjMUABy8Ff2FpbpvJvRYrbac3FVM594jfwDCAU",
  "key32": "5mRenrXE1opCbqFPmeLNR5DNXKsif5Zoxe491b9uf2xcHafGabELwTSttPsCRpJMQA26kqPDERJ7v29YhyccijNT",
  "key33": "4rXGEUM3ue9Rz5HqZqxBxijHUuNRwhZ9LQxa29JUvFgCjsRnJZAbYXzQ6ZWRgFep3LfhJnEd1j2MnuPV7GhvDse3",
  "key34": "5cvAgW4MrPXGUPRJHXyv5x5rPCmqLxa5QFsKoZVeKAaDDFmwgW5MyDsijc4UWnKUP1nYdTJ7C2a4rrqXyFZ9UNS7",
  "key35": "sKc52rFb886MxVDF8rZW4MTziz5CFG4kPSUgsYwkEjJawjJfhtV1KV7ymFxu7ZrBFgw5NQyPFzcCpjQWeuPpP1p"
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
