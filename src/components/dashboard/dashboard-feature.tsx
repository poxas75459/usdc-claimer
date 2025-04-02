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
    "3cRJNhCRyGEh4u4PJ6VSmRz1XmaMPLAzAbicurpDFCPFa4jwUJDeqGfnY2qCzvMFWzx3H3xPscPbzdHWsmvHSQvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wSoPA4UW3UQAvyV57iLJguVa6NkiNHycPDSvPPEd84qqmMxTtzyKkXUR7fVxggwdMjTqxpcU66qX9z4rPh25Wn9",
  "key1": "5dTEKRVaX84rACCiw3dA4XkERwr6u69BpJxBrnQNCxTS5G4k811mWYrXrMsvEcgC5pzQDDSxvmX2QVMi9qdtbFg4",
  "key2": "3VyCBurP2wuqHfLXqoSESEnFVpEiaUygQzNiyYCbkfhLSD1yuEKM9i1x8F1aQvCjUXAQredxPDHYb9ac7Uv4TTHD",
  "key3": "6LjaSZkeBSDU2QS3pLS2LVP6X8WmZ8Yqr9rhBLFsa6TSbHy1aamzxuYZMhCQd6Mu4ZzEmHnsRfzACQuCtAQFx2h",
  "key4": "4FG2ieCmmaLxB8pYjEhMpyx2ShdDTtABpvodCRHwE76SwisFiwvimyvyeRtzsU66A45AnGABP2BX4dMvXr4yrsD4",
  "key5": "2BKv5KDSeYy3v8mYuu2M6XWBr1vijQvGaoKf5VFuQqkh5kV4UkSSVtKgeCSGzLSmutA6BT56XsBwW3tQcQii3pA",
  "key6": "4ygCLYg9QyXXfFCcZZX658ooDaaE94DLyNd6G7teAcrBqfHUPzRSgVCfddUU7qB3GfwXQMASdQJogzBoonej6onz",
  "key7": "37U79tPaFXCnxtYueASfoXTxWXM8SUFnk4oXEGzgtQwGDrpdP3paRWvGjZbeypkAnHdUN23pMH1nHVWDnk7KemLU",
  "key8": "2rPXHuWQVZ5XyTRGJyEPAa9SM28QZ8tXVbZAdJTa9sPDJpJwJVuRWj5FGAHxqUu2DSnyzFu6kR7RDzDQ8KoniDqU",
  "key9": "4941ZSCTgwX5KWxtQueTxsQg1hw6Hb5zDZnSEw7F9PqhqNafcyVW7sNiDAcwZxnjYgVg7hWNWfgZPy9sixXsLjhB",
  "key10": "5CPWrPbgMMjd53Z2v4yfKXdUBX69p6GppwAjJBBW8Bvodq9anvNep9PLr8aEMNFjLuWRd6xLh3wEJ6fSZvi8ERJL",
  "key11": "3NqhkufdaK1TW98sRKBZLZ3tL6aRJzW4MyhZFWQNSFQawQLdupAVCfUvrTFmBR9wNqXxUWzitwufWmpD5QXznHYM",
  "key12": "3z11qEt5fGNUHZEcAzaw74t19i2JUUji2pYRrvoswE9x8Ud1KgVUZB6RjMYbmQQpD8ByLQoHn9TaPjpyYjrwJw22",
  "key13": "4bGxZZWhhnUUVEFkNF6RUXKs8bFwnvgxfCT4XbPWhcQbEEzwyjSJorrb21T5cZT1b7R3R1bRogVZeFH9q3GJ44eD",
  "key14": "5JG4b32kJVfXuUL9tR2pYVodzEG3sb1tJg89ptS1ACNoCGMG2d2BJ2biNg7YPQ1oLEhU2bEdXUt7pVLj1fKeCVwo",
  "key15": "5oCRKgEsGLtF7Av4cNPAs4t1SsDFv5Y5Rtb16vTFhczQsjHUUz4hWNDYyA6hfmnnSM1eCWy1ntJ7hJHeVx9MHvbi",
  "key16": "396ot9yfz16ccGztzvtFaGD3vs2XSA75eYfrD5v2aVSro3NqXkDwGsZxjoTZRVukhK7G7sAwsD2cAnSJFtPYfSed",
  "key17": "4p9Ld3ny6iZjBFddpmyQhrZyhKFu7XFFoLJFbtYfS8sZfbaZi3J2N1dCFZwqRuzB5pnQ4gkYzYVELavkZ5VPqitv",
  "key18": "5LiMve6ywLfszEmgNqG2w5UwAH8SDSncbiEDVmBNWFv5Gnje5quK6MkYDeK4CpTX4b1Kqo7Zh9DLdBLU9EQbh12p",
  "key19": "2VTC7idxy1TS9fEQKPS9DNmMExYSCan4UBTcoUJDZm4WY5cDAVVjCHriwvh5vUC5omUztmGuK1kU9263av89d34x",
  "key20": "39hrSFhixXaEokaieHjwj8rFENjeUUDeiuarJjz4RywUBPyGLk6LPyozQkQdzfGcFLZzNxAow5xPSszMmM9JpFtG",
  "key21": "5tEfuCvMSUrANmj4shczweNGYk7MRGpFbZHCGtoeURvZmHwGW2vEjLCNZ6BnC5fNi87C8jqqp6M4ptEHQjk3toqt",
  "key22": "2Nfaqm3nxRtsZ45X4m8XXdEWzXv5YNfBDtgeXBp4zGF1WDFPg2hzs2RoE9bgWmVytTeChggXS5N9E4A7yvR7d2P3",
  "key23": "3Tozk4EjLEdgEDV6x6H4NfjRKJ4EyR7rVxk3UeFkJULiTn1mbFur554CEC9vpM55CBhGX71ZVXauAm1xkKfrJyHY",
  "key24": "2XxsxsBNKpEjZfjKo5pmBcHMHUje94FFtfAkAZBrTdbUBHxp3FiSw53Xao8YCKdCe48te2BD3DZSvXAjq6sKm3KK",
  "key25": "vW6TfczntPXSXdDwZPtDNWBmpU2UCAaxxAnJjQ4NhCK8rBhYfB8AXLBbqWRed92BMbSm5RBTaphMyHjkbjZ8DRa",
  "key26": "Qnw8g4V88H4eVQeyGzvUTNM5LF7PmRRZZTpZVLaHrue2WvhUs7hq4odNCkFNYcanwtUD8cgFLYLJ2XpzmTSeCgQ",
  "key27": "EvcfVSKj96XmSHwMFpwcRzZAV9bfu9qA7A4nt1ztZUhz5SnjiBUbaQu7zhprQKm2Y3a7rVQ2CtA3tejnNVKgEhb",
  "key28": "3R1xnqYwGTMd8WwTC6tCFGWVqc5GXQy6h8wAtKSe11gqkqEQHohRJvmt3DnyYsT1sAYE4oMc4t64s6APJH2WPSLf"
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
