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
    "5XqzDBpUW3R7SDh7VqRgTS1o4Cqwehwx7EmfQ1CY92H4cuxtCd3tDxs1vc1AbYzvH2K4dSW3SNkg31o5T8mLmhBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TxtkWWADq2WUKsDeYcu5pP5UtKmpGtnGBS3KP4C1uFGWz92WrdtapByH9mH7SZcPy3UG6kz9k85QmS7A5ooArgN",
  "key1": "4jtTxiDTgyuBASf6vh6NA8efzpDAQnADD7ur8PpGj9DufrFjc3tKKvpWdGwHeTXTQAPxb19MiARZ4XYyToDztcqk",
  "key2": "2HuCpr7kqxmjbunTsYdPGCreTCV6r7BNPV32euoquy8ddUimNJ1wzRZLVkka26Rpc1EuskbDWRP2MFzzwDfhpdXk",
  "key3": "62cXQVuHUVLcy5k7p6xTRAApGHqxxsN1PWApWKWupmDu7r83K3crZnd5wKZNZEiUuGrxcbvgmR553k7boqQsM7TA",
  "key4": "46RVtnJhMM48Dx3WCRwriEmiQF2G8dHVtU1GZwkDDwi7e2TaZqwFuo6kdBEViumrnV9PfCJT61TAFrPcxCdZVRyi",
  "key5": "1TT9LkQAiGZJ4sqSYmSrJMZYvg1oF4jHnCYrBwBtbfXZjV8MYPbWFS2xBYSufBLh1VtFCQ38Z8vgHv347b6eVq8",
  "key6": "3btYrjPKtLRiaTMZss4aT1PVQU1Po3AU85Pzaje4SEuhx6YQDBtHjHhkoXyz41dThrqYiH24VYnfhhqeaYGs2XjV",
  "key7": "33sXuPfJ1AxA5xjqdmCDWHR71jfmJmhfAMYRB27gZEyqjNgH1AdtZyuCvT8vPXwo32oVxCd1RCAnazj5oJawjoBU",
  "key8": "2Ht76MTFvJGSq9gLhJCbPAHj942TpjeCKKUS1TpYnJKLrDCu9hfhAQZUEECF3y2xkhD8ZyqWdArAttxgBvKkNiey",
  "key9": "4SMfbwjhg8AATAeEpRvAm1MzUdhjwir2kPGYG2RK9fspCXmGmaBCTvyQydDHNkr4Lm8TRmTVaAipKGobRm97GteT",
  "key10": "gkSVxFJj5Z7Xa16KG5EEX1A1iXcvnZCWHeJXDdVS4A6aLifXr5JwStTETTDZkJD6wtdAyFThUtJEFv7MvY8hkCj",
  "key11": "4vpkwt9X6YgRTWLBSTvaVyiu3zj5PSYBW6mzNd3bxDi6o7fiaU6cjgjY8QRQVCxm1keEBLftHv3x9vBa2CiKReUh",
  "key12": "5uLkaVmGuHx8hhG4c13SQcygyRLE2od9oSR1zZLBmg2GXsFHf77gWUSCHmJLR9QZsC6d9NRmmsaUvZczo1rdSETg",
  "key13": "23cotJivUGtxHhGAAJQNrwv3ALLdxve1ey2TnBUPYMrshywmh8WUfyzkgtwSrkSj5cMTePuW2iXwBcvv56mZZp7M",
  "key14": "5PSmR5D6TyQfspynR7fTAyKDBc2iwVYgENqeeEEmDYLGf4RBPiq2ECTTAkFW5Nvzr47aK2S1xYdfB9DBUyRr2iGU",
  "key15": "4g4kBgTxZHJdQhyEMsg6R8ZwzyobMyEjNedJ77HTbatPXc2vxr2qcyxRDupQ56LiZVZc6vbHcK3JMfYWfYm5EcV7",
  "key16": "4pM3dR7aaHFCXo2TfDgHUqoB2KWmEaLqqmRYkxjHEEeVwP3ZsjwU9pPpTBUt9WW26Hhpk7kBJDBceaaSuYm2XiAm",
  "key17": "5Eq2KKU2J7zAxmtY9eYc8nm4114TeosLSgHzKLXzftjdJwdAaSHRjXRCm1Cs8xuxdDzeJPEBbPCDWdic7erqZyHK",
  "key18": "4sXHHQE4X2M2AP2yRg2nBNo5j8tXcbw6nbCEvi63QgcJfK8qZUr2W1fdtApSQycAgFwWPtgtn2vnmBAeS1eXFh26",
  "key19": "45Wij2sKeaEZqZRgLxYbLyLq6qRD9wtYWkDXmvCjtEYDyteLohfXc6jTiydqa4f19vnX13UD2E5tZDxgxkZRbfcB",
  "key20": "63x3vsLqLovGyg4Lu2pF682aipH9hTUpRfAU65bRK5MZ7a59SxmRVRpggiRKM6Sfw1fvxQp2Ge8a6aMCXomkWyU2",
  "key21": "2DHaKRXNJQ6qdmpSrc48n4eexbSBLTAUkQ2cHqJLBYho5FVd3m1QrS5w6ytp8NFKXQrG4kkkiSq47YqEH1qqnSZ6",
  "key22": "42MTrjNoRsd6MGy8mYMVigkQXPr115uF1yN4QnKrtVBDqDxGd6Rzes9KM2jGEw11dqCQ5SGPfQQBEtfxWzJcLLPi",
  "key23": "5czzURzTRWYQH4Ydtn3QQLuJdAa7y8CKYheoc6wnoBEqbvyfRNA9ttnU8XWNSAUpcDFTgizsh14bePJ1Migndqfv",
  "key24": "5WQTaZka9pudzSj3oDYUip2UpiamGkzKWA6pJKgUkmbHxop1tqfpYMqPwhKrRtjzbTFQrTDFgSBiNNmmkw27nddt",
  "key25": "Z7ryocwZX6wxDdPBZkukxyf22HpChTE22H7Ws8pwCCHkuDDV3fDhW34PBSuRRQrs1KSxV2ge3EmugCssDCDwCrV",
  "key26": "2WZDxyeb8tEZskyYh4Jb8AsSZcGaucbffSHckXST6YhNRRvYieyKYJ6yy1a3zrQ7faidWDk9LZp8mUiNV52iwYYt"
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
