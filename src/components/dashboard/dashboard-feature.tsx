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
    "5jN9zcRUN2sZ4KUGHBuDe2Hfcj8YevhdbWFsxQjFXXTykCLsfJku2aruqpaWGoojphd2srTNZ7gA6vVPbKPcW94H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hZRJtDCyx5kYi95Ffy8fHmhmufq3RrxehPXzyjqJ9GdxE8Qc7pkwkSYfHAWgnp3DbMjWGiZFoCSxJ55hhwqswtm",
  "key1": "pr369JGaCq2BLZMmbQfpfPwbmm5jLVVWBoK6fFZyjXn14gDaBLdUeFDyZXNogtzkxLX4oc2d7BrgDXZEBNSF86u",
  "key2": "62Fk6heVMyDjnnrtjMZqTMygAvnk6soBkGAU67NSkrv2LbHBY456hMRikAcSkLcAopfxMJe37nYkLPzeDVr5digH",
  "key3": "23YdBhmrt57zSV2J8TSHyamAAcu5JrNKGBqk4Xfut4RPHPDrBFjHtquLBT4cnmbFEJvYwW7gDBZYCyVBzagZf8Sq",
  "key4": "2T79Tg5CxcgS57jBr92xjrq1AYFqwDpxFC8soC5jkimbVB36yPgtTy7iDJuktfuckQoYaJ2YsTruGdHoJj1P3fai",
  "key5": "31on7hDwmKquFra4zkjzfLi1Gq51TyGsBHmwoUH4yLyFgzbEy8Gv9rkzdFgjnTbZggqUMZmGEAXmw2GMWTn3i3cs",
  "key6": "4kwmadEF5QWySfJHnm27o1QAmcBhtJMd9DDEmGF6rb6n89FgXdDLgcZKq1KgKVwXHAPHmKWTamHWEzSBuPLxJKui",
  "key7": "gFXByHn8D7KxqkQ9jZWWTJpACfJvgRwdCd7zb54gPJo6Cm1Lq45jzweDcRQeGoYF9XqBqYH2ef1NEAFuqG93v4q",
  "key8": "3iuxvTNeRf7sM2jhk9AWwMmCnzyR2As42RmF1Vc6vWCpgGpB9sB3KB5LpuhUbqvJLpez7YvMNgiqDnDDnZiZT5PJ",
  "key9": "5GsUQ5anzrsnbcv7VMzTk9AosdxuAPVsTQ7rwaK4msAXS5xs6WK6SHJPsznqKmjFoecx948UCWAvTN3N9whDgqQX",
  "key10": "64fT1uX3zxLBwCRZbUwmUA28pAyF1FDf23RFVRk7PK8zNLr938T665eJVBGnYjy9MFjcjMokXv4DFDW1UQKKEDn8",
  "key11": "5aJqSTuFLnYJBuaqntg2QEvSPFUXSP5XgYLCuCcpkTmgXuKtH9CY4PL9krZUPs6diKyFFyLuJEFvdngFFoWPhs6X",
  "key12": "5jEeF8hWSNQirZvHb6hnDGsT5yyHhdgF5pk6T4Q2fDQkVd4stxAMEwcVvvDVtzXHCVBxyd3U6kwmyHrxPPxmTChH",
  "key13": "5cKnodZYY5mjtX7Kxe8XswUTrHTAiaT91w4NpbxrjJY65Swejfax1h1VVwDAY528cs5gh7HKeQh4tRCrf6Y8ryvQ",
  "key14": "65kyy58mptnuuPyrtagRS2mJ2kpWiipDph2AtZe3Lc3nCfobXxaFV4HH6ZigW3n3895B1wmpp4aAg7UgwSgeRD7f",
  "key15": "5oLQCNxBuUaAEXn7eMjfM1Z9B7RYbMtJNom5J1eEKH7XphfbpQsmNcoxvNJbUbopQ6hA7zor86Nb8AkiSvXXbiEL",
  "key16": "56Lehzt9xinsZCTv3ULBQ7jJRFJfdL4YhFvCX51jAQSqNQ7U8MYCjAkBAt5m4kWtUysT3jcVv8iuC4yvryf5YDe9",
  "key17": "bhE18NoADqw6kJSAAxj5QcFNkoqBdGjsF4kxNxizk8foYw2D2BKEcNPYPWJ8a48193DpbmSocFjQcGmuCMzEhpi",
  "key18": "4M7Hp8fFyyDowdwbwWWMVBkKzV3KAPq4qCW5ou2Utcrr64L116JeUp3Q21fBKxzYBgv1EUWzLx1snbhWBMkgVxAo",
  "key19": "4wjduwFPgfXiAZByDBgMpKcuMtJneoX8dKxQusTYS1coCK1HxLQbabHuqMakxSJGrkkJafjxMGD3htd94QckjxxH",
  "key20": "3Zkkh5tMfj492baycFMRfsv9X9LFpBPGb1mSyNZNBWGb23o1Zb5ERDTLU3NLb5TiccHCe9gQNB3CQsUYwQvLR2Hm",
  "key21": "2MFynXwc3f5QH97caFPxuHFYNs2Fm7aagUaJX1SQmWWePDfDerG76NFfErh4orpAgd6z8N2QQSAFvWpQLukuTtJh",
  "key22": "afZnUv3EvVxH8mm8RBEwodvc2rWToyg3W8J5PXMFmEfTyGgcqcj8vyukTR2d75gjVjRPM9qxcBhg7uw9zKXBaVg",
  "key23": "2E17me1inCVb8rfhwKtbxJsLd6Svpnw62Lxp9Hc5GM89KvBCCoVH1g2hpHXUjqogsj4f8htsAgTRsy7wa7UkQp67",
  "key24": "NkkZtUN9G6wWd5iFAsvtnnXg2ERkf2REzZHdH6qV1r2RL4VjA7QpxBJ7xq6AcnHkBMcy1ZiNnGYay2aKVt88VY9",
  "key25": "4X1cqXqqftXziTmDJZLomrXqD7t3j5wrmEJytNxGSvLhmMEqY9LcKbpWEM9WccpJnEdWB7BY4FJNL7tYpUFBesGJ",
  "key26": "4PkHYn5Vdwk8j71KoLYrb3fdJSLEWFcsRoXxCJPZjRQeXb2BbsSUWripFWNTAxirtNs5grHPLnLndZzBVqKYgmH1",
  "key27": "4YQj36tYcPAaUFN3jARa5AvcUnjjKg4U5p7QZzCkRLKjqGs7ZHVRnmQpFyRBySjXaUMm8yGe2pYqAtdpdAsnokyF",
  "key28": "H7am3Y8c46tnXYwwkCSBox85zMi8Ruq6x9DSHvMEFZ2ii8csVEKkhUXEw1QNHtwV9qrKsvoCKyboxdcapVXhpT4",
  "key29": "Ea4s2kTBGPp7u25XBoqearUZ7PNqJsZKtGNtEGxk7oPzMbyBruTECoe9yzTac12rfnyDMW6dfC5ba1TVwWnL7zK"
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
