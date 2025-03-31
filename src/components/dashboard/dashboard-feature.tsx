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
    "52QTfTM4sKzgkd8xp2CYb8XjjqCeL5Y3XrrGpteW8aTsiQENqQ66Qv8rqR6D6VEuKFSo1Z5jUSYofTNMGH5q9Lkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64JA229a8bSySZrfc5dTjXsvvUnv8DwtU1WXgyr2UPWDYWV9iDCeEmYKQHoAKAc82sVrZikBEPcFkZ7dXPN6TaVE",
  "key1": "5fad1hUYEtvHWVLoU7B946UuqzdzkeLn3LuzUR2FHji4xp9sQAWCHrh8wPS7SX3ZYk7HBNjUdgXRTFKvDBCyrEYc",
  "key2": "3H8gVJrzUhh6VidCTkSnFTJbsVYGC6d937zAHzwoJ1U65RpJ1DZjPPz8pmHngnPwpuScXZidgRRPAihuz5mCHeFX",
  "key3": "3nm6LG2H6AWL5FRtdgEawohtNwtyNouC7zrkAFjMEBJswvPTyEgmMs4GaVWQjjQmNzp6UgWD9WPW66ooE6Cykxet",
  "key4": "5p8qtNkVn7ZfWpwrQYaTqpovu94vgaLL6roc8o9NVXtsCmpRLPW8o9Dt1KESs3TVMCHGKDTYj5j92KG3AefUg4mD",
  "key5": "4WjaVnsk31TrFQS1C6Yr34euZfatK4VyJG7fp3Ln14ipT2PNpaq1n5fMwXwvEqqWEsUAyaqcb3M6wqwsjJRqgHLH",
  "key6": "447uLXkzFhPPxRrzY7Fvnq7LT6Mm9SNt6YgDDVxP5v8UKjEKtHYX5hi9yjjwx4CsL2tNA3Qcs6CrPT5qmHBuetPp",
  "key7": "3kwe6a5qjLaSJGkCpp5zgwrcWZNCB1pi37UV7q2yXX3bjoryfYskcUGuzFDXH2CAdvzAm2eKc1u8pjCLzHoa2d3u",
  "key8": "jWjf2ps9nFdgp56VQg1owUxYG2S8oT71AnCG16ZZnHz5w6aD6YQtrsL5V7Dj64h32at7KnNDeGKuqVB813VzSHY",
  "key9": "2GjTV9RiBzVgzumep2Pmtr8uGB9uAESuP3eugkgGnBCEP7v5MZwkh56wSnTAM3gYyG6eUDWbH41PsfL6QMixJ86N",
  "key10": "2nZAdFXd7Vbtpms43mFWkVjA1KY6XdubWSmUZ4RUPTHn4miBRg7a8vXtAsoEhiG6F3axrbBsvqy334XQw4bBaztw",
  "key11": "4uQgdkQ3FHXUb1HT3261bjkvYLZeRX6SJBShFmTziqTMML9mH2z5YdBHpPeMZFVcLpvXMkaKvoKkVYMztvS4FUf5",
  "key12": "3XUw1XxFmpXKtCxP2teho2v96oFN6L9d5iWNnxyft5UGeNoyndbLYrNseFiR3doKWdwqWTiAj5M7y7f55WEbmr4U",
  "key13": "5poLzuse37capMumNwte5kr18TkkP7gjpZJy1nLLK8KSyGRTQN9UoAtHeELeq2afuR7hwi4QzcdGg9V4jGxATNsp",
  "key14": "5kFpnzfZZ8JWFJEqDd43g74PXvfZNrAbnUm4Lzbum39VSWg8m6e9c8nW7Zx9BrCxZewZna7FevYxQTBYKN49kcgA",
  "key15": "5GM2W1fdGaPQqPVVNGodf3hB4SeiVimpocCji2TUqTU5qxcZnC9Vk8dn3YzewXXK4qhApf63umTK3dYKLnmQ2wPs",
  "key16": "yCu9MgACz8i67Z41jkZAsBbNQtF5W7RWqSYrY8JYUkzSdS16RxBtHgGNMjz4NMpSVEdAqKYutWYyjhbQ6VXju8j",
  "key17": "4WH7YCUGWJ2tZNqGbfZ8ZjyBSB6e1yp63NB6JRXoWVVVSci63rdhNv4wZJC9x1UHU7iiRqdeQR3efbMHL8ZX9xwH",
  "key18": "3wb1gpaChCn9tezhoB3oSx3iDz2eJKELbYcQTkSwijYUGdB3NuZ7GDcJqpt3Di5ZEjbCfmJLnaH1Bq61uAFgXznK",
  "key19": "2EmAvg4RguNdtVtzE1yCxBwuk7Jy8MUhAuiGd2PB7snC7FuT3mKAkbiuzzH2HzzAeaPtViEtQmVHD163oNBo7zu1",
  "key20": "mL9szKZdm7k9A87PSPiWcix19BwDXbUGPFVEvED288sWvYhUnJZjFN3kNnGEHJwhCegp8FYEhc7EXV7W65XcYTo",
  "key21": "53ZodnbcJFXnFxozvnggJV2oi6Mm6RVKukzoyebgbWPC4x7yLHHZ9qrKNTB6BTEtAA8CreCzEyHrtY8B42b5fttf",
  "key22": "5e3K554nfL2uPHxh41JdPsZVgp6DzDc3fEHKMRuh51gtgKQvWPV8FnDvKur2pytwgDy1brVtkiEbpsvnitCqD7Ag",
  "key23": "2aCAtJJaaMHqmYNHrY9k4c317k2hF7bd8c6bD9PSAyDCpJRLXsnS7pguBnBsVM9ocXLvKgWpjSoeSMZkRXnJ5LSA",
  "key24": "6371LzXZitnU1z5AYLbsQDiYsLppU4RrdXAda1tNssreSs8fzsjrQatDRUwGrK6Jwfy6hQfeAwbjjPs9fU9NJoAi",
  "key25": "4rA7k4EKexYQrbsibKBqqpfxwBQjLK7rhHdx53hUNA5s19FEt4VSCasNxYUpr3o6a4rBQE1H189uwPZNv3AJTTta",
  "key26": "3z6A26GhYp4cYm3rBaUnxmfiroKNvMBE3wPZvkpEF38FePV6jwHYk4WVjc56coypsCHmenFWUXjM9q2fVZY1NLwj",
  "key27": "vCjGZsMC4gphAitRGjVfHmpJWXacv9q6SN5bsFnyGNsbxo738mYVaaD68a3jck2p4ctpmy2BnpyWLWZ6h1q2hAK",
  "key28": "dsGjmhy3bDyC1vf9dxZ9vTry3beWXWcQcNQYHLf3V9xbfGb2YCks2hETkG7sAzx4J6AWqakbmPiKBEJB5mjURFT",
  "key29": "5Fku1D6S41ofX6Qw71Vzqehe4WGc7RuWpTwCCJw2TvXWEBsj1TdcTrCchLbmUWMVoKuyvkJcqGaygf6roVrfkMgT",
  "key30": "4apQcCNsWYNPKSZ2BTg44g9tL8VGxuRedyDS6WBQUAEmTLNYSEcpqr8BhuU1cjBrdR8LYiN7Qf3mjsF6mzaZ1gcb",
  "key31": "21xYoveh1QnQbdPowjLxdisYFPVXwYQBQbMkNSm9aiMBRMC3h5CP62jx59DE52PSWSanVa8NnLDW6BzA2BmmUQT5",
  "key32": "2MmMnQjBoXWTBbrq4R9hnMhSpZs8wG5uLhJsnzNaExQRu4ASGyCmAXCHcxSJ84rSWTf1ELViY9MEaYevKFeRVhJ",
  "key33": "4y4v5LEk7b3LbsyKP7L1YY1erNMVQLcCrUq7Zy11dxQEjtgbMft6nETZS1MEkyEEuJPwobZ4fnWjzK1U6nVAZbSi",
  "key34": "4BecD9gHpgovHCxSDPK1afwpQQbS1WuSaGtnJXHmuWT9y9C8bS6agrhxLZ3v985BEcWJ28r9MCtPxLsLopqUZ55A",
  "key35": "4HtdmnUkXL6BY4Cof9y9ZGKu6z5N8Pp71bJCnxTGYXNQWC7LKErKCfhtcgSXhSw1Xsy3Cigw7p93txoWiTHoTSAJ",
  "key36": "2fHbnYBoTGj3KDDZGwPC9E3zDLfpVQh3qXAHccbRAdpZFvBYvjg5SwdRcaHUWVGn9VqNV5S2od4cSjcbzauVtGX9",
  "key37": "4DkJzGPDbf2PbTfkcS6wsGG9pP73n7Tb5bJ2MxjLQL6M18yPP5av1wco3EvHL6YnzCrVTSKJWccgzBHNB9vAGDLS"
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
