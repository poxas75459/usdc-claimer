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
    "3XcFHskuZxLjrE1gEZWuaVzgBEBBv7xQ59eEWaMvrgVrr8is3G7gbNk9kifyKdPkrxDZAFuyJdtrcfb9zw2pGqYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22T8hgqZJNEWQ45mN7ZfcCxDsuESaZqXyNxfzTaJjn3n75qotmk7bWDZvYwc8SUPRpCUDHghfn9NTf3t4MWHi56r",
  "key1": "24KREvhsSoC3JvPmtKRLaZfB73wMxcdkesjvCSczqwNLYC6qHa88qxTMc5xCtZfWzBgsffEaqwcFgAJLhuRhoZUo",
  "key2": "4iq14bEZvgmyUbGmAHJo12twL6T1f6udhK72psYFii1fxwtEKWAbq6RiSYJ6efRGEDxutKTwSbFnRJf2M1VBAxnZ",
  "key3": "5TXQD18Rkgmbd4kA2JJEFWJBxw3V61cCRfKdwbtVvLefQVQ5K1iweYVUKGQmomYWWivUUv2m5fGJqxJrJ4229EKL",
  "key4": "2jou7y8oS9bMVWR2HjUy36Whdv38jcHyHLcraDviLrTTVWyxQCh4mS3ZUheEzEnczWLKmu7FGWNCkCQEsxzxLW7a",
  "key5": "24xFZ8oTyTGvcwdh4VcojqQebnqESrjZsqSd3eshWb8YuHsZNCV9AADgzVN8VNCzLaKQv5VqgKBZG7yEhgynUmqm",
  "key6": "2ExtMk9kFJf4peLa58xCuGK7iKWYxwjRF3jJwzw91sDMSSaf3mzS9qdSGiMusTAPmjES1daa8Jf6MSdAFBMpLZUw",
  "key7": "5HuzYw2YGB5gkQGY3nMSeXG67fFQPJeFC7v9pHUgoXzosnVwDii5627Hr4fF9urVDnm43xtbKSoftqYa1ZE4Rt3U",
  "key8": "3PuHtJ75SpwywrHTABXAefrNWfoGXuofXWLtwoZTUTiqujRMXzK6cPgEbHGBPYheWRqYue7EPRPwrZ1CMrmCzwqA",
  "key9": "2LHGvY9VuMio4CrmbjjZnYqoSS2ty5inVpVTM5ddMvKySEGYjdjnu6Pw7sg4xbQEzq864tke6vjRZ1NYjWoycyiu",
  "key10": "2HQGKSpKdH4J7SGrmDvQxo516XNzznxN9zMBsqUuKxNtbjwnJvmD3y7auBgQkodUdF1GgUnuXMijzAPDVocvFCcu",
  "key11": "63ih6CAkQTkwQo7znqJx6fYTGcZgWWQzurJo5fHs1jEpe2AmaeGzJN7FMpY9UTVDyV1ticcAMBj4eabayvz85eJj",
  "key12": "2LjgQtno6u5EdTLSRk8Kw3NNqTc5ncUjhZcGnUepiGVLubMektgtjBzwEybALFWy3kP8L9fLPqVh2XP1Uqf1HcPu",
  "key13": "3WUMGZLZFtxhRGeE9GcJp1niVunjuaAjofVBgcSgJ36YBQz4gL1evwqwcaq4a9jU6TBDhRRpkk6K7SnQDBCjEe9h",
  "key14": "3UuXohbSPGAPSt6wTbXaopEj8fgQ1aeEo9YJ5LZPqcMbwLKt3mAodMFSQFc466AX6Z9MpUYdiJ22h6btd7sZ9kr",
  "key15": "2w2kEMwwvngGzR9n9HizH8gHo5nsY6oX1gyCPS7eKPWakQaKt4WbuT4dGYdmn9w7X1Zm9WaED7o8SHGcdHG4xjjn",
  "key16": "LsMn7w1GZBeLtXcM1oC5QpeM83hAkavi17XqcqHdYFTUarkdyYFynnEQDQ26LEAKVgCT2jSWzoB6dT99FtymovX",
  "key17": "1Ji4fdWv79oJ7q4oNFMYYcfgRJqay5ymHNyefa5MRwg2yyztHSKkPCfJM92rWopw3dHAyVM6BD9ZBup5BUbwa67",
  "key18": "KKYvfDx5AooXSvx8VbXscb2ukU3Anj94McwsigGfgfcEfMb6yW2i3919fixDfBNkHb2vGGrbXLPLjhh3BqUYwBB",
  "key19": "5zTAWGg9ZoBMw8Tx4P4ajTsSHxRbw4NLwCjjk6nyTQ2DdpssbFbMa14T1KFP1KHAQiVTeLmnhCWUToZCJctb8JiN",
  "key20": "3S1E2RH6XBHx14aEg6w5ktuA3XLibcyyuXREcDsSZMFtiyyceByEkpRR9gFiYMS1Z4tsnXkWSc4Trxpombd9yVeT",
  "key21": "4usVF1Tx91EL8gQJmoGyhyZDeXE4HC5G1JXYxG3CWnyu88EwnLSNvSRRjFCd9mdFa29QbmHVbEoGzbQWwfnG33uA",
  "key22": "5k1xhBrzBFC6oaHyo7RmbAS3Y6Tm5V3rsuXFq6cEd1XwczxuVcmg3UyEw99C48U4A8QZXDSBRGcGAG7LpQm5RBAx",
  "key23": "38NaBEQyrhwWamVAhgrC7mrKyB9zyRVHRGGoY9SuwFA6HdTEvfLaGAKXzcB6zvhMc2nngviSotU2LuPDgrkEzzCQ",
  "key24": "3G1t9VBzCBFK6e6RhssnMYEtA1mHDuYZ9p2XCuFzwwBhrE7ojjhibhTLWCTRtghyLAqStp4dimKPqu8oR9XEfRyq",
  "key25": "3AB9J9mJ5dAuqG6CrECsGJT6DtdLSeCivfNen2yQ4DQ67k2Q3uKQWCkubiTXg8TRYyec8z686AV4QzAF9AyTKoJt",
  "key26": "5aArD9jWJiQt2dxV6p75qc115Zg9fRAxnoydGdNbMFGLwQsmKLBrTMLt9NkWy9BmWiZZ42Cx3w4XEhybVtdtegLt",
  "key27": "4CypEKSuHEreTfeBQCwxQap1q51mQ6AgsJq8US81DLXzLXEoC3GKMfcZNuDuzHokq7TJ94ewEmprcd6La3bcpGri",
  "key28": "BoHhgxFRxoun7ZSUcZHy5w4nt797rSRkYZee8tY3Q3mRZ6yBPZRycUoNi8M353xM8QWZHU2oLXuAWvL4bsWMWgX",
  "key29": "5jFUaVcijdgLA1Fo9LuLr5r12YXwHD88pmHwYtgQt1PUgcStjsFD4sQ6BcoemsbXDtYaT9CSGx3ogRcojKs8PPW6",
  "key30": "5h1mm1Hw6a2b6nqHbkAjHnekT5i7kDmXhsnGQvE2GxQRGUGAediDnqmVUGUhJag2g1xft7tLnpxxVphToxfwVwep",
  "key31": "91irERDnpyXHaY1gUi5iEPHpoeGeWq9D2SE8t7UxFB73ZeKrMurUp2HMG73HsUpyudjaNM4sYsit6i9vjaJe6Cz",
  "key32": "4CgRofqRjHqdvV4zqZcp4ReXqX8MFdru9y8tiYKbqQ44rer7GSJBgUj9vYYFeRdjhHwzsQxSMqnhgCnDJL8FbQ5Q"
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
