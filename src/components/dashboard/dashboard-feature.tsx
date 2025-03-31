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
    "3ULiu81odFRxex773Cij6A6PuMyhGioeqN6rQmFupFgfCVgheQay3WMdm5ReHAWK1kDbBZatixkaM1Y3rpNgyg8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YmwbfermZNULkSCCGCJS4Xc857ujAEvzozFuca1VCL4A6z5nmCQrZBu5uGJABLRiEZMrP5Mg6WwryjB2LZRA4GJ",
  "key1": "23nnuXJsmgXviugfU5ZqvAfWEFF8yEqeExgShMQSx3W2mGvvv1cNXPiVqhDWo7Qn3j2qMWruFfGvJZLRkBdCMMbT",
  "key2": "2XTXj6wPBMJ22AxHU9szLF5D3Cs2szCqfrqfUSmhCYEM19wHpr7dvsBuH6nwUUzzAZXkiq7zRq8NBDH8aUzhcTcF",
  "key3": "4m5VZdekSThH5zNcpf2SzPMcPwB4tYmPSt6FczbgpJvV8grFVQBkHNredR9f9vxsmHnCrwFu6qyMZZtspyYgAZQR",
  "key4": "34LNyU9ZzNovziutoXBUHbhpx95PqhHKrLc5AQMoWERXtjpANpN93QHHryKj2M5npoHV6fv1xim6Kv3UuGH8K64R",
  "key5": "2gsFiN4MVjmGseEMyJKbXyiFJ9W5nyz8hau1ePZWGx6EgSzpAsPPG7rTMGRC9CgUYhVA97GixTW2EyLJj9uKhj3P",
  "key6": "5Z9yXRhdyHUNeGgRtchLxFf2QYS47oQidRtmH1b9cu7PvTqwiRi76wpP7wvLPfiAGADNSBX6utSn2J5cvqR9iNdH",
  "key7": "B3zm78h2E3PTvM49iohV5dDRXSDe5aHPBXsS8A8asnbvdPtVc1a9jeEfLjeF3sDPZMwv2imLe5dw2X7cNKCWFXR",
  "key8": "3K3BN7Yyrm2qy83BVxW4FnMSQ8zmqeug1AkdMFMj78Dz66b1v3bw1hj8YsKY5dv1o154g2fX5YKyUGzkFfKrNTgH",
  "key9": "2J7SoEPj3XdqzTAcx5WL2k4Z3191aQDaKFDmo6YXR3boMf1vuMKFE2qEWBE5sUENegrWzZvUSGojFdwZaHUHBW9K",
  "key10": "4M2wXwKoiaRpVra9MsmQeuBxhTDTXVMi3DvQtfZQmam2M3f2To1koEA5kj74A9YZi6k3HKD7Ux2A6GapyiADD9ek",
  "key11": "5CNhqe4M6GxayVJmctke5wvqSJJTT2vVigEraaCWqco8mLCa9fA9v9ryUjdEnvB7KtoMvHH9uH772bPoTgEyb6SV",
  "key12": "efGDHVibDenUzNunfYPRkfmcaFa9HkwQ2ffg7jo3zuNCoiRdV9Wyg9jWxx1T459EYNu63LVirNJF2zLABvXEcz1",
  "key13": "3G1jXoDuTSfWZZSKBmU2pvxhCXyuJbjhx3jSVd6JL2wDy5MWGmddtmNsYDzVnRMmsx8ryScaWv1kbtNisjtJXLXS",
  "key14": "2hnsqF5iX7mpfmadfLetbfdq1nF8LYcm9uvhzmKUtJiw66nLtUvzhZEDW4HfukzCoUgBA33fnAgLXZDF7Z58FGoz",
  "key15": "4CT4cKPA9ytMCTpSbazUo2YtFxZ8qLQAruKD8TBai11QJQ9tJBgHnX8dyN1P8uNEWvYEKW84Ty85w2NLoD2y7Sz4",
  "key16": "y3XuKYfApuG2noicursXGCajuegEKpVyn5z1YwtdXZR7Wgy1uzGTmL2JMMd21xrRRbNAjdDWHudmgGemsqFbQGM",
  "key17": "5FyXiC35onrvCq23VUQtgm5Mkt9GXWBJcUZ2ZPdGuSfezV2dNSyorSd5nvsJiJgAohyvCuAuHmy4RX8PqZjM55sb",
  "key18": "4TmERVRrh5fVMUxPoTnZPiaKS1NxkfJ3JvDeyg3qKZLSTBMUYz2Gp5R4Tm4wcDC3o7DwBxGNFEfUi1b59BrrZHD8",
  "key19": "4GkaDYUm2FY3w9Q8YSQiq3yo76yF9JhmkkWbrCoSPCYh9X5rcYdxUoj15DkNWSoaXkiiG55oQMqLqLH5G5ahaCtS",
  "key20": "ZdfPPWpAfvBHz8KvVopyZaxctxqvswWG1RgLiW7932NNa2USitUWyQDEpQJLw8FwoJG8oQGAmDvdxH5ja4WwHdR",
  "key21": "3Tr8kHaBicxiU5CX7aknc72d2QyPpzYJRWKDMqroZkx1Cobcn66DDq6hWHt1keWk1ekKYJq2Kt46oNVzw1AMBcna",
  "key22": "2zazPN42Q63ckwdjn4NmUvFfPKpiD4JukT3UhkvUZURD7tbvMWzwxNkh8dZhgwMTN8WrDUxjvsZewyvZ8J8UjWTt",
  "key23": "PVP3cQuyaSM6GiQowjgRuMNozN1HDi4K3FEwu4yTYNczxvdqtESgW3i6ETcLqLKq8ofSEjiifnJ4r96UPMYEZpJ",
  "key24": "5nXhF1BUbBv3vg4dxSn5NDwyE4MMb93mACwvHkoVCe2wih2MVfNCKrV4dyRgxMhQwp9KMLecBcUmovkrUPDjjf8y",
  "key25": "ujiaJuZ2u2BUKSp9EViTz43ZAMPxEJB1wJCZ76VtU6oEvi1BKFb6XdaSizLEA8BjRXjau41ncL2GYVdNBPxCuD6",
  "key26": "MVCkgd4tqWKcSeoEcZ3Dtd4hRCJKo1ifkgwKpe3WoCsEDatJYKfamtRg8eG6E5k7r7rigeSNmTKZ7nKT6REeG9r",
  "key27": "2FpvAHsPGf6b3RwweeG7QVtxccXFHojPnoda46FXVm8dphtNknqTjc2qxqvZLxxbBXXEj5RbCQsHkFkyNEQZ6cxg",
  "key28": "2C3inCWi8oMhiPBFbcc66ZXoEeLk52jB9NY1SzzZ4y54TXVktT6zjChEQy3Dh6o4QUvZ7fUZ15UaVfvi195zcnDL",
  "key29": "ZrY9NP3wKAjT6CebYwV6yTQWhVsR1TpfGzkwCUvU537yQtjFwqx2YpWVxVD2kezH4CaCB5ZQ7srK5WxZfxcm76z",
  "key30": "D5aQ17x8H2hSdDPCEuLvdjcGPFmmy5ivncXcbP1vVzU3gLeYjR3jU3cmguBbYVENgpbWss5ebzruZZxsMQeCdRh",
  "key31": "2B5kZKkMP6pJKPQt3xBw3EzULoijkD2cWHWyARRDwiH2oyGcTgNjwN5XqPn9epL8pnzybx4Hd756r9NcmXbPtEK",
  "key32": "nYr16LU6ajbG2rf5TPgmryWaYriQQSLX2VqAfaKRsTyN6nLx6vseoaxkaAdyWnwsDH4TnJDwSsmkzqsQ8kEypvC",
  "key33": "2DH6RsUqoVhCs37tCjSDWe7Tt39xfQd3wK6c37WZgFDLzVffk1J8XHVhBQs74uGrSF1cMVrrvS27Uvye8f6HX6bF",
  "key34": "5bvoDgRy1ZchFs1MJrK4m1M2MzkwH9dYA8HStb9zorXyFQChSGpMoFxBHj8cdqjiV8XfdDpQ8AKVQUNXgfVPHUfS",
  "key35": "44DtZadfVRSRu1WsPcdPXkkXJ7WGjfw8f6YyXhtThB38xgwz5vK3BKYxMJrnwAMHf4qhrH9pMJQUTfFyzHRrZkQk",
  "key36": "mk8kv3unVTmfsmyxDW7QmA1921S1qJRAqMEedaKpGzjbwekng3YFDKQdG65mjAu1HzibnRUDhN5t5QsxgsqQHH7",
  "key37": "2sbuH8mpoWqZZ43ichYsDbH7EME8fPcSYUcBGuCyBefWPdCr9erfboWGq96U7f2qiozBhqtEF6DCHfKjSZ2k5Hb3",
  "key38": "4ynJ8vke32K91Wq2sFcihx2e4KQGoqrRVDfnJ7thyjBsLJpgrFMiVmKwpZGCEAaWTZvV5AF7VH9wMRypuQwNZpxv",
  "key39": "2iZJF9EHLA8LbmrCKP6brnz6tjFxuuX3jbpTS3fttxcACVcw5dxDAuwwyJp8TCVoEg32iVhgCShYywRyi33NtnN2",
  "key40": "5WSiBESSUuRJCRjT4j3KRxN8iYbdxk7YyoU87ayv3fAo2hx16yX1Cvn2wH2aruFs4FvKKYPyetPdve346M28nwjo",
  "key41": "B1LEf6bTcKCWnxHAYecqFyY3SJnPajsbTwDBz9xnUf9v2yoNbFLgST31gi3rv47hTDVaJ4iqKUcjGTmiKNTZ65v",
  "key42": "P5gDrnt1kYqpnqshtJfHrFhEpMnxTXpjrxLYQ5v35V6PVD78jLvnVx24ZVsin5f7vWq219YoketWTZ4CYSwu2Bw",
  "key43": "3veNFR8QxqJQyHZTVBXGWiLmDdpSmCk4aMbPxd3FtWYBYKUEhhti2PY7gctTVhrajrAi6BuBaRvCP3BpBP4jjt6U",
  "key44": "5vYAfPK26CgHA1vG9URJLXWzZzcy7XaW1A9Rq3BnX3WsoEN3wqcVXQeadntBj1vevjd3tSoctWrzBdtD8UYZA95X"
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
