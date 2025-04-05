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
    "53LuMVtS9F4EC8Q9j9uYGH1LtcLT3jz6W2geNH1fxr7ujNAkDqjTWN6ShYznB7Ta2foDA86KSKg493zd6EBiNMsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jDRx2oPGTfp5fbrGgJXkTpL3ETcfWY2PJdgbiwQkrdQTwcmfD4pQVQZi1aaEaXV6qtpHkDQPtzVQAvY9KnsFmp3",
  "key1": "xsK7TJHwY1jMJ2VPrwRoj67aTNzXc8U8iTizmv3SyshYebQF9rFsbnUELDmKAuh6o323c4efrahQttVEnptSRX3",
  "key2": "34dZBr1ppUpmgdNxrQ3xWbF7YbuNWG1Q8x2vvqFLCLegEajGpobmDy1h4khLQxFAEVC8mNUcPuP86sy8zrHBKgAn",
  "key3": "4SHmhtKZAgAthipkxsSBGTu2yYBcLKcaoGoWct6eksf19vXVZv5eyL3bN6K6Qb4oCfizEVhkjTw3ddTPDKnxQw4T",
  "key4": "2eXDZ5wcubwNbwn7eRjpmRneLza4otnyM5WMPCqVBDwMys2DuLkQWXbPZdytgeGtncQPASRtJ9p4j7s4g922KTJP",
  "key5": "3FGuH2QXtqdaRC8u3iTzwT42MNZEc17taon4P4Pit6Q1mTYkBxakioK7R7DPX2pUG3isegtQMH5scjCvVTtkBo1F",
  "key6": "43xYXDi6vLYS7FMJzzRcpnp1LLeFdfDm7hSNiK1iJhSuutZ39MWMokTzQTRhHELaNhLh51ppYsLQrRQ4HXUPW5TM",
  "key7": "2Eq1Hox6Qd47yfVPDHyeLX2ksfmrTh7zb6jHo7vXHPKwEqyHKZYDKruxTGBLcLuShJ6wdeRpP6mcmdzB81VhyoZ4",
  "key8": "2XkqYpz94kKB49YLjcbGetgziH2HXvmnNnKM3hp1zaAP5dUsQoNcSuFKKf1gtdCtpEoboDaGbBAJ6qXqxuzWh5Gh",
  "key9": "Mn4zXCYtoxnYaRcE1y1F7YXujTQJRtsgtWJeuomjXnGXyHEaenGU8NYmpj2Far4J3qmSeG2eVbYbtDQ4dSPGUbh",
  "key10": "oGgpy8jANwoWniUsRhZcbz7HGGHswMbmj4A44KUwGpJeVivn4C9v9NottPMXVC6Ff9S1WcTkESC9vxehXCUuSt7",
  "key11": "2k7moMLYwHCpZ8cf3XH4qP5Df6JMjgbFyxphSk4xQYMFNg1HMzsPLjZgX6i7zjj22HS9XTHsr5X7od5d18KBmiD4",
  "key12": "3gnSBsN28p1XW5NXULcSGxopfexCwSuv83eq2ja2JXMHtJSoH48YtRC6e3VqwJuZpYRMyBY5RBqrw1rZynUTESw1",
  "key13": "2czREqyVRFfAcPkmADfxcMUFqhY1AHtN9mFKzHeC57zuSWWE1hBg31bTB2vQc9ULcr2A7Jkxw1pH7DfAcP6WVNuT",
  "key14": "3HEi7uRKrviMFZ3jKNnz2AD7d2gmnHsBJ52AqRcE5EBD9Pa99Mm68Bnm3WbiU478jcokBUMHAE5DjnQZS4KPjwCg",
  "key15": "XbWLZiBr89fcFBpadtKfuou2GK9mUfRQkAQjhJb7yr7bgagVSyAScp1BA9eT1Pn2yYkzzfVfEMEfCaYUZP6wiUN",
  "key16": "j4W7PgfTgcq6rRcivN44ewF32uvV6529jiTYWaTKUpj2izN3CKcggznB6j2oLEPLp6MrxPVinomx1uJDbkxp6ZQ",
  "key17": "5dEnLKAiy84ECqjVV4xgC3vonxDnTHgC9ufQA7EjgGrMwmKAj2Kw8aokCuWwfW6PT5Z1pj6zM39KSAKh53zKSgSu",
  "key18": "3w3TpG6FFgAMmNdWKMntQP6Tc5YUdQtvBoCaVy1bJNiQ4eiqjGzSM1Fcgbm822gqDVTpaqTpnShE1WSfpxcPTrQw",
  "key19": "5MTR8tBZwnDEL9FFQi1yRYuAAEp7eVaRk3YbyQBFPG7hgWtUPSRNpt31bLmbkZ5uDb6UkEVyF65ioMufjsiUdJHx",
  "key20": "43vC4V8Ff3qDfi5MtKhi4o1xRdxNkJ9xxrZAsJZo2nCfbNp89jZEeMnC8R79m7tN3c5buSwHmAcZHdmYHwM8jMtk",
  "key21": "5snVZcpqVNmPRVch4Wq3vuAu2dkWvBTd5DXKyUvQei8ZDnDr4U4wVNYEBNGYKQAvQA6HrzDgX9Q2b3sQz9zXUacA",
  "key22": "4Z4icF2ey6TXQtEAFeAFPzH29e3moiFFfVbpF9ohVWrcby75ZeGod1qEYoeZQs8KUjwdu3oQWyS7qsAxUerj3kLW",
  "key23": "51rSq8MhXbHkm2FBDK3beBxzSRVbZyzHVSdt4vMpmMAphsC9bAiBceLFHNjAi3DbN3Z4sQckbaQEmHXvMNwg9EmD",
  "key24": "2Jsn2RCuSsprC9SxeSvqTkjGMYm99PhUvdo7QENaNBAYmSnC1ZA7KcUGRXndhNfW3Uy1VH4bNAvJw5ZXSw2MKede",
  "key25": "2BDabJotQe8xrR8PcmYPfHBkTXA96twi9jvxAAsa9THAnQZj2Dx6ymDRUEn94ZVMiGinnceaweDm9SCtwazuEbbr",
  "key26": "mBNW3yF587gpmNybWyz92FYbbAQHRwf67GBKcuHp36HPm8JCmwM3ZcrGuzn82sWKwzNDMsCjVGN2HajRw1zFtNu",
  "key27": "2xvFz2DQuNhaJfZEUkhQuANbTgkkFPg9hCYPBy5if9hpYNxHBwP79wZqgSDpX59TA9hWAyjC43LHSoeveo6PBgnm",
  "key28": "rLrdhC7KENo3W6qjSUgSQtfNQWnr5XAnx9V6ezacMuLtNcAW1DBryqNWCxxmcwW3v8ySHbdqRy2x9VyDa8Bnrhq",
  "key29": "5S3Ygb7Tyjsm4yzpGXtPAhVRpHnBukBpsdfVZBTmW8LtrKSak6bM6CugHaLuagsBaGPsgw3kvEznd88XuS3q414w",
  "key30": "3T7DwBRYRcVVLARZ854YKvWkjJrY9hC8ByGomYnELWDrdM1EftAnHnGt2822wbz49eNu4wB5HZ71VZCUpHEUCv7G",
  "key31": "2t8PwTq4SdmLUpFGvJKW4fyna3QAGBReF8QCn7NC3CNVKHYR5tBWgGbAFEtaZmFf2QRwhGiw4hBrHvtzRbqAZJLS",
  "key32": "2PjfjFZm7R2ocPWiADmCbJVZLkN2iFivJ8kkAhYTvZhJQmBkn91g9E2N1ersgzwbNxeG9ow3pxXViXgkryN5sPeK",
  "key33": "4iqHSrrd6QMvJkY8Er5mDWCg4a655JgRjYp8ceBZQfviZYZrXMzuJ3Jhom72BsbcxYJsr6RZjehSp2UDqNJQEeRt",
  "key34": "4Kk7hiUUNgVZTxSt7S3KTvXQ95XgDeg6UftY6WLkNVBkKFtm8HFxcEksDCJcFHAUGpjn7fhGLiPdDZXsD62DFJ4d",
  "key35": "3ErbVFQhpap9LAHF8qzpdZCuLe5VVa8T9hUR6EZdwttWhVG11QJsKx5TeabvJahtgSCn22QtothGXhTKYagbychS",
  "key36": "2prndKUQCKeyLQgaMztn6i3eBGoP2aLtyMwFAPYVN2dbvcu4GB5wK4Yzp9y1xydeGk2KFnu7LF4qFDxo4jxJirEz",
  "key37": "oAidLs5fkPMGVzGQevNZZn7a6dcPvxKyzgKDU1fWf6wsJVToUUC5PTrUcpjCSRktq9RZsZgtms9hMQP8Dz5kU7z",
  "key38": "3jLERqpxJncqTkiSUnsv6Mvhv3SVxqzWM1D1aoNdHaXzFCCEyU188CzWnnB4s3USxFBB8DJfDDiesfZpJWpfjBAM"
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
