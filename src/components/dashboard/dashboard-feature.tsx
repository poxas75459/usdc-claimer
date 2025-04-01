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
    "2CedmfHrCyu85u832wL93ahmVmiS2KVgPtkDo9xU7cmTyJShsPKSxAJcxWzAgzuzXmBwnTsCK4J7Dvsic4rszvxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ArTkHLhBzhyTKAafuNABXGMSBtL2YJE1eBrm9RP72W71wtUBBEEKLeuaiBd1w2uW9JmwwETGPuTT5moydpBJSpf",
  "key1": "4SovS1NuQFcAXvciCReaCFKrH8ExtAt1HfsNuVn9ZpV8AySxAPkMbccx8jw6g2Uf9dHGXNu9rvAemiehnYd6Suzu",
  "key2": "2vrynumQdLe8mShRtDWvC5d4VtyXgxQqW9vKsxxaF462Dbv1rcCToUbnymiuaKCEyh8ufWgER7fsDL5ooApN2qWW",
  "key3": "2b6cXps8j6J8iZ6uyWaW5Bqmyr5Z2zfhrrryYLtUdU84hjyS9XcXnXFCNk7VaDAgbsaF2DdpdqM75iLP4Qs8qBbf",
  "key4": "3FUTH2n73jLRKNh59uow2Ybo2hpBLUu7PxpC4pZHhNihFoYUuF7QDWqbm7uq9MERoM8VJiz1ogJ3RTr82UavdR1M",
  "key5": "2h4iQV1FMyghoShiMVrAaGDmps1c9xHko2DvVbbz8Bpq832dAHWGAJh8feoKkZ3RvUZGBWfcZYScLXmCA7DRwwxY",
  "key6": "4151nkyLFG41ySDohEKDrrFZnErTDVAEsCteJpxEEUoSCwhuZWh8mgE7hRwy8AbBmdMVHi4nSEiASs4eEqycPgNg",
  "key7": "2JAXc1vXYifZh5zoEFMQuGqiWGTnevBwggUyVtSaZpqCDPQcLAtetLwSdozZqsh8QpDPzScaf6BSRQejpj6byuLB",
  "key8": "3R8eRhW46rXE734GHSy3oJMSC4oEykn7rcJaMi1EiH242s5mknBx8XWxRHPqE7xDmTvz7EQiTMYy69mF48Z3DUqB",
  "key9": "4heq7S7JeTxzKUSttetHYsqLVDYpzrQjSwx3AFaQTo9NZodYyHzs3q16gHGDDfTcd8YS1iwj2HjuCFNfeVsMB4Z1",
  "key10": "4YNmsi9DoJVxtAm89Z8EvVjwPTHi5rEbKG5EoVKCCACFtd8opnYrcroEEXtfKcVueCVu18FyafBMkRuJPuu3t3m6",
  "key11": "364uQe5HxxmBLBxvUJvktRLQNHBmUKKRqEYem6wBnyD1a2mXH3MAp3DZWRVVtY74Gji3HkGkFa9PHn5zZjZ8frk7",
  "key12": "d3mJsiev494dkxo9ijkEaXNpqRYESR5j16MPxDzjtUsA4k7rLfgnfdK2drx38VmSwKUNKJ866Lir9ziZvwpsWWg",
  "key13": "2PEEV9GYbqQ39BKx5fE8cDCg9xPM6NHCv2MMBDQh9Sg9ccphRYpsXav1SfWC6pu5G1u9TLRauTfD1RyzXvLWeAtK",
  "key14": "xxZRH1KnqYHqZpz9m9cLrmbNrsiXwxjkxBMgfi9ZJH1rTedDjDs3rcKtr2WovbPLa3znC1v4cvHaeYVRWqNd6QH",
  "key15": "4i6WrrpEZs1fwt6tMtvF1kKQRiTGvrepcrLKisB6J6Jk3cPpyD7n7Crj6voyMF4YZXKMMqLsnGVsD9b74iNitkwJ",
  "key16": "4cjd5mJ4XpVRNSs2LnxgMWM4XbbosvGdENTBd2QAVeFzjao68Dm2LX5qeWpJMRhkjRBfHnijcR9dAjE2Tx4aFKBr",
  "key17": "3eyiDthx2kYCXH7ERt9meSE7aYne1FhAQf2qwDUhJUyJ3MiqwkmTQWxFKcs2zJ61TfmnVUPeV51WRRanQJAh3Qmw",
  "key18": "4R2BBUJ1HPmYW4KJN3rAKb2ufgmUnNRUkiPF92S1DQU3W3jp2CmxrkihG6VoSdLD8pAURdr5CyjfFeMsCcefM4Lf",
  "key19": "tLamo4XKhEZMboqs6iodstMekb7gKwXdhgbjH9aasoh9arzJGSEjkAujVztqhtJ8DNsswnW7oR64DZFf71ncqM6",
  "key20": "3MLp6fSr4hdXJZ6CSsyvoopGAPcHVDQ6hoJdcYAiXEqxX5LYtgHpmugRWP6ooh7G3wfAiCdLyyMbcqjTDR8sY1Km",
  "key21": "WBiaCKxcBGtxCWH1379NYQViGhTJXk6HbMCUfxVNxUjP8igQ8rSZxpNB7sVWPwpSsV4abngrHGhziXvCffS7DVt",
  "key22": "4oViPmFqDag7Z82s5REdKMFTjX9aW49M6Zz9GTeYZ7tGAT3nxukHwDLzFS3RgjEFuYfQJqjV4aQbzsNShPhysC6G",
  "key23": "4hVRe2EDvXscwHo1UuTVsVxZdK8VTGp4ARdPWfooZrMpT3x6rG27tYP9EWjDrjGhDP5eowjuTbMTnhhjwB4tt8aL",
  "key24": "3Czzv4Ft9HxyCxvGwXFdXQ7FhooVyVCZNJUchW3hK4AagrCtydSr8ksFMikndnrKfKPcgvnW95J6x9MCX4omA99H",
  "key25": "5r2RSnirq8MBKxF9Wba1mNyHEAYBR723qyLaMAbBCT6cX3UrmnfnFQ9C2Cb7ahRFvVDBQeCsU8JZ8DdQKjCg1vgp",
  "key26": "634bLnRVLRs5AxgFrp1PjBvoBvay2aW5yzQfkFPRK82GTtw1ze8eUfD4xuohs9j56T2joibPAoDT7LePCMEsyyC3",
  "key27": "5bUA27ZqDatjDYEASHeszbU4tj8KxhLmZhFDwzQcEwgGcV1S8DgayniN6qFRYb1QGPuBocS7tBj7iKuqLUVCXTJ5",
  "key28": "3rkRbqt84yUvWNgVgcxg2dGiTduBaZKdCi52fiBzqhU2f5h5L814eYxkFX3o6kcgghWXP33Grve5efLLfkxnRRym",
  "key29": "e7cG4zHeXuRngGBLjYYipWHzWvQLNi193PtyckvDp941q74zcbZSJkSj8vyGaarXeBi95Bxpu8PccfTMZBDMR83",
  "key30": "ky8rHPgbpvq8y7YdHoVSfPVLSVxFL6vnGDpHYMoU1jpNbpKUadnPHpF2zUrzTcec2k1sR36SaeVYL62EWKzrhZ1",
  "key31": "hS34VdqL81zEE1pTCS8JpsSP9ZAsSVwSiNGzAQmgcww9C145XbuhzT9JJBwtQVoP9b7i41Uz9VJuPqXLZX3QyN1",
  "key32": "jPX3WLUhZ36JabYWC4cJ1nrFacSfhcZ3pbo7vWEqmA85y1VhRTVLnfefmqQBGEYtNmC5fdv3DoD7CkPG1bmWLkB",
  "key33": "64Am8WWMTaRND347LJQy5EhC1w6KyL4vpJ8DFN16d1apZryoWjMJu5Mq5UuAqJwnYoDdx6frTF94LnJWJgQuyvzZ",
  "key34": "3vxEU8CVS7ugRStMmYh2XVFyi728ussPPCqAxSy8mkW3RLwLhJR1L9nWqNEceaANowjvPpj2WFdNXn951bJbTuA2",
  "key35": "fKS6vH1wmJG58Wu1BuVNfx2aMV1zwUxRhAHnPhLjrC7xESV5SmwaRRa4ujZMFTNZvdzrYKXSq29dK2M5YzVenFd",
  "key36": "2FZUVGe7UznbWNKKxQaYzSAHYYEDVoj1FqXrbpZymWYS4HWsZ9jC8u2iYBG1qSHUszeD4YDjkxJMwqYQ5W4FavRK",
  "key37": "3Mfs2YKpJehcLSeNymHmajAexZ9966iBUyXkr3gZ2SUNodpxpamhZYu8SM6auhgrJMTYXbK4qeKDDgz1KuQZS9Va",
  "key38": "4MFrVhL9fZhh33jPooYhVG8hZFV7eZu5qw3ySBNmXVozBAnQw8BTDBJV5XLUowtYWyfAzBX2Vr28cx7vcsAecnv",
  "key39": "48VVr79YgsxW2nPhd2YK2AgPvnLiWyfDceNXSd44kQGch6EUHUyznX5ETofwue32vq63fAp6veRBqDxvYqB75AVN",
  "key40": "2gLAhkDVPCN238uJEGPXGBqfeBWqi9EPgmwBCp3evbedKAtc5bovt7dUWgC2GmBxRdFWuoG8eRwTW7fPYqhcSLUn"
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
