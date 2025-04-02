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
    "AFrpkMRLt7BDE9XH5WEb9A3ngE7aAnh6tNMUQwWNbqo941qNGPwbpX2srHZAb8L81brSiA64HLbSjqvNFg1CnwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yzCWkTrFhXKtdmGZfckoaWzbzYeiUyzMTagKmhtDCtkxuGdDU1RiueCE7mhcmtNgWmKRa2y3odoXxDeh4qPQfcd",
  "key1": "5kGCK9MBHrsSAsmKX2QSYcupek2g8fG8QgTGiugS5ZCodkWwcivkyb8YRTU2m3aUKmdtafDYSbPEKjonoRpTTg9N",
  "key2": "giwFyyPVxnCEviUMsGUNPWXW1bUTkXSovZ4JoAh2CuhdkPkmBiPnaTtd2F9BNAfzJZdXxJPW8DQsKSzS6AtcSNt",
  "key3": "54Two1dTeBZrYWDX4BaXgYSFPkxJvqtk7G3rhhUVPbRQ6KKbbqkyuakHnRLRKaK3CLrkSK9zsUm5DvzQ38x4HJVc",
  "key4": "56PsLJFDf3xCkaGCmc3RiXdbcFheYNZQukqR8WtvhxfKFjDFneWCnXKBDBha61iyzhAFDfv76e7Z5YBc3rDeT2d1",
  "key5": "5KLe3DPY9uCDqFsC7DPJ3dVTeHnvBiCqAGPFwG3niz7TPi8mxjfFUVvtAfnfAReXnoFJ2fVqeeXmjYaRrFrSncDC",
  "key6": "4KPHKQKYrjTNYy6Aq6gx29h4vudcET4zjqtQK7RHbshC6GvFq8ttSLEbjkQ2VkTyHUvdm3JFxzZg3sur2kmceGJw",
  "key7": "5f6anNjYL27Px1uWQDWQUYug98pGi44fAw9QGrBXkRRRsom5aiqdW7AzaDnkmKZSzpKYwgwmBnUsP1P9pVFYr1YB",
  "key8": "3GKqvT6YnTKZq8dfD3zwFvJqacPhfrUZ1xVuMFCtAei6jWD5GkBFPNhKAUkMZ6oW4FZGcAPBsukvHrTFXpM57oDo",
  "key9": "336fuktiqJbq2NwkQvgqnDmoZgDbRUvokCGVjYxznkrvN7roKHeeZygwCPnqSmd2nvfFKqxdebdQreHu52VwViKW",
  "key10": "5GzbT6bhvuqi6N2kMdTyDSwgkKWQMFqFkEcuE7iWdAEpYVK9zEfMxznku1L424S2oSNNYE1Tmi2NUQznxVjwfm1m",
  "key11": "54pZZtdJzpkkWHRFTKtWPKesDVFeTXsdCYX9FSscoqkJcCt779QQ5C1G9XE1wL3uPh1BYvFNS3Zf3zQcgDZtcLXY",
  "key12": "jimzTHTETGWYE6icofYBmWpx78B2RC3nEKm9bqVi8ihHbpFiWwhhewCVgoFuJ15MtweLKi95gBsduotHDcBWV2c",
  "key13": "2g5XagFX446nZ934FKodMHeGjM2asc7hRAVFjRQFJ4B1NAdYHAurNko5fKGGwmWpNYYKbAN82hpY79VguPArSBVy",
  "key14": "M6p6BbgzoRkkMhv1LmA3Wx9jxaNH7URigkdkMNnjYq2o4RHqmapcij8zAv4HXQ1daGmkFHRM811q8pHHeSwX6DC",
  "key15": "5wk8qJ1Lzsc24nTRCod3HsdThd7XNiBqETnDSVtS31Mo5tEE4dghA23mnevkqPwQLmphnNjJQwgeig7E7nhfBx3j",
  "key16": "AMB562ADnkycGrNKCSGCXTQjvL2Byf7q6ns61Svyf8oxTFsM9LHDPRzJVgSPqywDvLtkKJSLKGuX9XcKQjjdLfC",
  "key17": "5vMh4CCiFcAYNeTiJRs8pD2fkQQCk88RUHsvNeehmbMsMV76PFNMnuiU5ZqyRrHVpfnaXrPVgnPGxRBpmeyvx9fx",
  "key18": "5nxC5KJAcXvrmRgPrQKATyf5drmD7fd4Jx7XtrnkgdCHXLajSspPT4UatashKq1yDvpbpiN417Za3ygkprZPMsr",
  "key19": "2WwbSPoxP6PUzQWYqXxFT6JZay4iEw8MvBtr4GguUGnd9Rd2DsTPSKBSkRzCxVS1LUTLCSBhuHARCHfF2snTUn3P",
  "key20": "4bYyq6dR5rccoGPa1y8VHTfBgwfU5gZEZqWt8PUi1387gA1D7ETUu1hWJbFm3jfrzkopu7WAzY3aeuZuZE3GVFnS",
  "key21": "2XJUUNEbgSoBu8q3ULZv7RfyX4hUxY9LJJmSLZ4EzQzZMyYh983TCUMJ2M5kUVooJHFHtcWhhUPqhNjJmQL24JcD",
  "key22": "4DkzjHBCcyS9M5YgJLhvfoEdfPFvYFctm4bLnpgnj8956tgXLraciRiecSrp2biUvGcbwdn3PK1LUtVZy9eXtMqz",
  "key23": "5daLD13mZR3pEMPs5bHCLA7ZYExm8UJj7aQSzXWLpMtDTcEJ5Yp7ZnjrqD2vUvm3p2ZRzGJ19rzitxRPTCuRT79m",
  "key24": "2tU1xV6fFFdud5djaLvS1zSetcwWnbcYN6s7KU3p2c5QvwtNGwVTPZ5cSxyCvK4pqD9Ly8edMwZ6zsLjLNz4E7yY",
  "key25": "366Cm43Lti5f9MGHpCH4Lb37HfZHNcVbeD9NKHMYPZ3seQ8eeBwuDcAtmvXGjuSMDKyrMa2vKSNfF8EQ2adJUTTa",
  "key26": "PmRA55DBoN2mtaCy3kyV1Qi21hKkVneMXJBxCJHgn6JoQw8ingn4gf9ohfzjekrAoevHGoq8niXneobUJtFHQqZ",
  "key27": "4kHua72LxxYKSy7dDvv5AdNyYVaMRRDCmbDRKpW9vRJ8EYT953YtitkutBPHkMjFWbeV5AT9W1uwJAfTp2moS6YB",
  "key28": "5arpaXrqNv9QTSX7P9dUzuLr7hdQV1WhkkZaPVBouFei2hvThgDQ4qjLadSmvtA5WL8dSEVDRuRGYk9g1PTbCmPr",
  "key29": "3gffJAW74chRtBKa3tPJ7MbjNGVMhSQfABt7fHTjT2QCgfsMqdTxbACjj5uVFJ6JnmFoTZkMvb3bTcXtScrjHhmm",
  "key30": "3ery5L8CrboL4dMvVHWwXJQmV5VCVmqxdXhywLNskh4zSxVpJG1nT7ELscuzp7RKhEkyzLTj4zrh7T2rxDPrkrQn",
  "key31": "3hmfeypdrUEhK9ubf7QR6cwZEroKUAQuWQz8BUDDmAaGu6iXFwt3t1L5ATPwkyYSapAHMhbJFN4CtztgnWUkYB6H",
  "key32": "4USvG44eC2buZiNM4icPz74tm3eXsoCRZFfX63cxdMxYcVZam5JF2RZk4x7HedZkk7QXCb8q1uQNRya4GvsuEFdX",
  "key33": "66Nisjt5pJidLuc3V1Euw7tcmAzQnrPe169By4xNiYd7TiJALYKU9pyZXD7i2RANE31ja3qSm4nHMk8fEpa3jYFZ",
  "key34": "4Gd32UjgP8PP63Q14QZZ4LYPx7PrM8d3b7Ycefy9gjwfcBErcPctbKwhE9LGpjDE3Xi4SeqDoTkPPHHorUqQDBkK",
  "key35": "2UUaYaC9thMc3HbWMEJFEbbGWz4v65TgN9Log3e5xsQKsmds4R8vGrfjb3CqxLHbP4ERe2yxA3WyFguehesh9QaB",
  "key36": "3tyazvJyqmeDAMiZxiqDYnGMsdqY2rLGbH8bVBJewArXFctRgouUWhCJaJTZkd8EZKW1mHHx1Z44TakH28WYbse7",
  "key37": "zho2PCU2b4ax5uzdc9ZMyMx5o9JgH5YJ6QceKebguTauR3jnS9y6x6nA39v31TCKEMezHb5fEmZrh28KQA51VtU"
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
