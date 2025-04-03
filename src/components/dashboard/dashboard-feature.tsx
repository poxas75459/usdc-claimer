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
    "26KApLHJTFdsALL3nwf9MmULEGqbBSWqnu9XGrQKzJEQBr3PLe5PwqqBTix6hthgbF4WEyaEuXDNV3YjDCgmPA6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNFMK4hrT7AvURkj48nzbCDW38kmxNdKkWQ2PYaghDVCC2oF9uWLtwRLfVeyED5wrWbPQJMGGrwxcrcQ6CKvYTB",
  "key1": "Ndi52uBX8TdsxTq94c2Wmstdbv6LXMHS2mtfeVjrckJYivpxBYC6qkTvSHWMofUN3jWWw956LEYdyzTf5eS2HAT",
  "key2": "2GUD1WuCczE2YJPra4v6m1J4oD9zKJZVYYdqQtuchjsrctzRbJgGcow1FCqahhK2KemGmnjQcGKEctdAaLcpUT2h",
  "key3": "WWVeNSGfm3iBCscoGMx2MgdsSEY2o9VxKN1HzJQ1tW19Lp7D6yHzi9ArzpgnopGedYWQZLSuSQ6T6eVikxeApfZ",
  "key4": "3s6qa1jqL9PDfm5Fr4aagdoAfRKg2YFMdUKbaPFuNUfibPmTatZcMZTeQumphbWvHCncgeEw3E2TVVyJ3BHpNnpj",
  "key5": "2ckmP9LBLMvBd3dmKihSAvukP8CVHgcScano41Uep1FhPur4BTvFFk55E36SacvPo85k1XRwsz5FrZwJs6iRQAbz",
  "key6": "5TDaZxTpZBDWp9GLSeBwWJu3ZczyJTNjcTQjXWtXT5JfHm6bAMckpFuLbpuTnZSi3CPTDYqbRzdWJv6M7gZGYmAN",
  "key7": "4LtLtrcUuobMUgqgdi4F4DvyTMWU7M3Fmx8aTea8JVs7EG7Xi45UM4yzgvLBtyRN4KQdDKcKbL5USZQdAdmy5gpP",
  "key8": "35oxsByTCDLAyoaFpSjx6fKUn1dHFq7dNKN6HsTyP2vUWaSqEgzbxE64FTALLbk7B889AzxXJWKhHPNKP17K3dix",
  "key9": "3fR8vLxqnoHTJgC9CqLENqHPHD8igMh7FmynBXBDk4u7Hfqo6yj4NhSnpj6UxXW17z57RqrsApv57SRH7Xv5B61C",
  "key10": "3EFZ3NDEkiswTY9PuH4y3RS8qJ9ibWD678ifSKigg32Wsm5yrkjb56V7ZH2sToCEKDZuXgU4xkLR93mkW3w2fJtB",
  "key11": "5K7dgMYLUxjtvSaH31mk1tVKTReMNEUydmMXTntVCxQryzm6uzNBCLX2tjsCSn3dm3G6Zk2zZJmydgEQH59gPB8o",
  "key12": "2ECCivAgVkpjPLgT2BX7w4FnupMZfapLFArCJzPu6e5XFxsuJ8knT9PYTdbKAQWZQyyeZmbL6LXosvNxvQuzWSju",
  "key13": "4P49wNnvoiCiH2QNJ8vkQarkdB9wtdC6hrVi7azm4aMSRE5UyLeQW1iEcLxceAd7gY6L1xsmYeQY9VpxYpCNr4BG",
  "key14": "4hoYbZbYPimhKMdBkMBcMRyYVZc42V9uWhXTeNd8JkFjua2UmcBtA43bfPGvieMNYhPsSxR6f8yRGSgGkjbNubmh",
  "key15": "66uAwLBqi8PtwDAmVREr9DKWn1tuzVrfj8TCzmPhb4Pn4KisTVvkxqnVunDAXfyuwSCR7X5Lhv1yGFyg89iXubE9",
  "key16": "51hymBTFRYMvtpX5XpGuVa9HMxifuaUnQeAa6mFVsZBfXAFraggGkgho9V8hcAPyn7f191unfGNCq4swrUXnG5U6",
  "key17": "5KML7XFF9cgoqxRDmNsn2Y4ZeBrNKbo7PLFaLyriBttFbfxfk8prfRL15SG5BogRjoKgcFzo45HHWzbCxJXyLRWu",
  "key18": "4fpYGzdR4NxetRpj1NBM7NTio9tkEN3Zrj84ZitDcKkj3Z3T55uLkL1DCgxDEqzgE8dJQcJYDkZPqWjST7f4KpL4",
  "key19": "L56gmnYU9tGuJED8QRP6AcxavqVwswecqocCHkypyW1sPhbpx5QzY1zwFCkVuzfWCVpYZthWQe5t8bHhpqBuMjA",
  "key20": "QocmjnBWEvgt2MejBnM9FX5QeEe6mpJVVs9X2fTzEqDfiADD3ZNgoDn2MkfhfVUT6eYxKG18h8jm2xQypTMdWh9",
  "key21": "4VcFHjzzJgNaa6bR6ZKWKyRAHWsY7jgotVcpECyx4QbA5N4hHgN3gZnZ8D4x2xcDS2zLK7E4k7Q9R53faGafEEjd",
  "key22": "2uKaEt5xfnZQq4PGAwK2TderQmNz3GXjn5mA6Etxa66FHtKSzJvTPsEZd5BMRwYgzQLRnoh82csy9987rUsm6LHN",
  "key23": "54DUToRCYMNEhRTgAoaX1Rw13mJZB4aV1LNT3GfhufUC4MyT5tsQQWW1Jdf7LAqvKYhNFvfWwvSaj23s3QaRM7ML",
  "key24": "7UAfEkZWHw2WiJ9Axe2pMNXbgSFeCZp7qr7gqWDcjcfF679XrDgHLXEERVpizVgin7PUvhVGgAvEEzEBZ56oJdY",
  "key25": "4Xn1jiZ3SfZndmzntYGQsjZVerxq29V8GBRDFQNoirNeYapwh1ysLb3ab7dk1RCVrVcotd47F5hZdjXUiskTk12X",
  "key26": "qFDajGgRX8L81mHbzR4tUiPpiAGABsyXFeZ3kwBDpTQcbx4mbtt8ZKfW8BD9qxdu6Fj7sqLxNGmiAaPC3sQ9jkc",
  "key27": "37TPiEFQH47e8pX2vnR38ZkbbCr5WPkZ24CN9Cqdy7zJpsMnMZbQejSzxS7NJPg9Sou6S6gFZnDihgKMoTtHsg7G",
  "key28": "3yF4VpgoPpPUNGXXCo8x5irKPo5YY53QGe1jH8D5RwF7GEoFSDv9CbRNyU3RuBSqpaULAmNHm7XJG99GMiwJKJbk",
  "key29": "2xNh322uMwyHSRWzKVSdz5HiAnhwEFNauj2XN5ocjLMEcE2b5BpwVD3RsUohxQPvm72RBf98jJLJoRSK1aTJeiSj",
  "key30": "MZdRyTiWXGsP6Mdncd2K9KkRKa1Gire6UCdRv6oe7cWNJuPbRbcyCFScFgFQYksKT4aeT5YqmnKpaPFrPpYimvW",
  "key31": "3CJjzgAAK3X3NBunmRKPSwx9q1GWK4PMyX337rQD85Hvx3UGDy6jMojS7qDqp2wty8eG1YnzrirLTpfy9NfxesKh",
  "key32": "3AovEmyVoG3gzC35DGdiLfZkxsyNWDXRrBAKz5pXpUshuDNE8XmnnWurAD95gwc4qLzkPwYrHBuXhXQgCEPSMnDW",
  "key33": "5eMDRYCnwkK3VcHNUD8U9dvfV9yigLuD49TB94Lnk2U5feUewSETdT56wLUmwn1vTMugZQkMhAPWMA6BEgTJWjtK",
  "key34": "4xUNU1km4h5KQTvJ1HedkNs8a7W7xncPYAretqxQmdu8sDSE3N9n9ZLUzK5gNcWijWbEBBP3va5pWQvw5CK5wJaU",
  "key35": "4mrg74gHtkkckXqJq7QAAcc4mwmmPL1H1UoeHUpcDGKYCLGtjXTc1aCiR9gtuw6NBRgE4WxNYGto9xkhkFeU3HEp",
  "key36": "h4eJN3zdDNENM7eECh3di9ceADQTYTL3vwfNYQB9TptAnaVJaDPomZmwfJ2fEAjecMCno8nKvBzLV1YySrcCBtC",
  "key37": "3aoLu1ADJZ1FSXpE1aqfkfbHMh8zizCd2sAtLVJrE1EXHeZaiXPuQN47rhtoW8z9Qu49deB6T25zurZbpWSve79q",
  "key38": "fcna1oq5brgmGCyEZRtepmykS3M1Fu2uNKnPS62ZNW4jC84enZc8e2h7aQQXmM3kdqCbKkXFhhUqwPfoTzYCDXT",
  "key39": "3zcrM1bhsGq7muiXAd4gFU1Ee2wYh5RuYZ8vtiso76tem42ETWQUqF4Bn5M47WHLddfwbPB3AaPKm658vid8Gdae"
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
