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
    "36M3NcmVs2k2mdf8NhX2H1ze8c4PREBMJ5bSMm3V1zMbHhwDnbTcYgVfsHPSY2K8T5QSP71BMAdyH1GDNavZvBNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gTaXxAosuGrJSxzo5EKfENanffZn5ea1s1vjPidUrLw24qw6rqNL3zj6Xi7sB9BTLJxaQwGT8347rMdom75HJUK",
  "key1": "2CZBxYqQj2NerWH1SzEG4yuN9qaDGHdXGE98X8BRm5a1KsZzduGCrXWM97PV2AF2BHFxSrg4ChUr9vWqMc9jCKUB",
  "key2": "3YCXeE48Uxsv2cPZjffr8YvVUHdzDR5d6jGkinHfZEq7ibP39EdT3Bjt38tkW7XEy82gXs9LFK3spmBH5GpThJVu",
  "key3": "2hxJQaobh4Mf1AAUXnk5G7Hvh1hsPcfwhQmu6Fmiwc7jdooXPPRL9mWzGGcMfdCzetJ2TutDyLSpsUR7K6R4hHa",
  "key4": "4zNPvq9oa1MXphUJj49m3TN2QHC4gAK3pyzS9GQQfG9bn6oHb4h4ZwTskfYhfv8Q2cCmDeveSLKk4nv593VVeeSj",
  "key5": "3RFMBuXmz1x5qYSvLcopkRRRP1VQwYkBTh2QnYgmTaVH9KTSXssmCS24EQKamMV7Wu94jcJyr7jXFTnWq3Hdc66Z",
  "key6": "7KtfseN3A1orn4aTcvKX4TjA6frDukkizNrYFLBptyoAqpr2WHhEvY9NDPx5RjUeF7WEwZtqWiq44bSRqdQ4ajg",
  "key7": "4BUEWjbfyRaYh46cFT6weKiXZCdS1bS2TshVCUEMZSPd1KjPi7zAt4X477xfxiSbC7zA4NUSg1E5hogZC67HwZCY",
  "key8": "5stTGix3bPnbs9Gt1AqQt1z3Nbq4J9EuzV6rFLmgvbRR7Cuqai7zRtw5E9B9jjVh495D6UtxwLVqc3EpKBZHddQe",
  "key9": "44Bq9fSDFemY54KHnYEkJwpxK3MX3iSNpXmtorUcGE1WQMttUndGsm8f5Kon2XqQGhVGQhkJaEtovYksoDjW4Bd1",
  "key10": "4GyweVoyvqR4k3WN9RWj6sn8pmcY9ftZxYLhccWCh34TDT18DEntnZ3C1FGgPw9YDbrJDfTfcUebQfeQj49qukg2",
  "key11": "28UQsmLViJw9x6uxMCHZpLY2fT97gQ83VPndd11JstMD64x5fyNVStmiAim9K2iySKV4tZ8ZSdKFDiQWkchT8MAZ",
  "key12": "uW4xsTxPHf4dzZCDrBwu422dmB2xTgrzgYX15PmipyXRAqHGJk8djei1F16CkhLbN1ssuHP3aiabMQBNY5fud2k",
  "key13": "2WFAaGepBBW7Qu9r35SmMDxAoW5aSktfHpsgo8EUgzjfVLsvUXLxU9XS85B6aPwW7r1pa2hymYMMuncU7b8yTEAe",
  "key14": "6FdQaeVh9aV3gi7t6uN4EDNY9Lg6ZRa83u6NARUCyLt5zvzCUesNq8tTSRH6kETJoCKSdqD6c8v7TmmTg2QE771",
  "key15": "3GK3RYe56ZBBrnjJFzj2sSiUgVjbMVjcm1YDKtr546bzPMvaRReSWJwtV1QbyPvgaiYQLq2nQr4uGfKV3auDHp2U",
  "key16": "4NmLSYCwvzLz8sbNt3o6BQofbDfbxDetkcxgpPtxHu1MoLrTAwH6w3uYGrDUQiP5f1AUa5DuU1GZ8jhWuCVc5zrE",
  "key17": "4n2YWrWDJsVYbn7UpP8fPCm9YikyptY1HCABAbxx1gTpP6G4amm81FFWhs3vth5EkJazFcBnK4PHiwNRk7msXVH8",
  "key18": "abiwNYM9JEMk1juXpcXbR9wE2hgRH4dfvRdP2NwisXA55gFBd4ybnLHaWyeZJkHynUDZUU7X3xyXV3JRrHDiQzU",
  "key19": "3CdoGYHJYEVm6NHhcDriY4B2JYQNgecuKr7qaYdXJNFAqd32PPVdKbu9jf1H9AF1b4AQWYEt2T4vpPJqnTzjpMuX",
  "key20": "5GDvY5NdaBM2LcLSzm5fEvwJmPt8EahZY3wxYPkqGbbxam1MDgVahvPnapd1jggqoHzHf4iPAvasypKLXuJUJixk",
  "key21": "3PpZxVbj7yGr1bNRpkuVGdtqPZnLa29qALqkkqdTpKEkTdVoshno5Tb27UCJ8oCto2nFpsM1hoKEjVVUFsJpwgok",
  "key22": "5SLhhaJePoQctFkWaWYSine3iVzLha87sF3XAT81q7LDh5DCtCqHyvspfTebDm6fj1Eoz2CJkmvuBMWJnLWqFAwd",
  "key23": "2X7gDCX77kCQHApo4XWM9UtwbQ9KE5de1ppq5hDPf5bY4M5scEcSgvU1NjHCPCHNQBVnBaXh3JvjBfVngAqccJrq",
  "key24": "VVf1BsY7dzZZYmiMGA6SzHoQFDCXUV5DZWm9ivnzNKZ18Bo5ccQpBN3oNgKaVgvapCJXzVnpE5Bymvz28sHr46D",
  "key25": "5rmu54qPssGxbk3jrwBQJqqJQ6FMm6UXjqnddM9ZrHSbShbYYeGqWTzgLCSvwPgmNV6QwdNg3R1tNVNo3NwwRjzJ",
  "key26": "4GApbkydBxMWjhbYmR5EeX9cBkipT8ePdxqM2f3yxvtsWN11VKmeShKMYat6evVu1shdcvxV2BgjAXzbmL4w7Qyz",
  "key27": "47MdmB4eqWEwBGpSNGCqTppECjuN2H71rGNLhtEjZThAKQUAzRK6UBQ4yr2tjnM6MabmCMfU3Q3yYHSc7wNJ88Bg",
  "key28": "2QbfZTLgNqhS4geYtqNZ3NjcSZ1yirLhhFeuC4tdjkN8mgtEPd7t3nzGiaqk9hvjYNEfgrAyC49asemHFJRqCRBz",
  "key29": "Lsfv1WykR2dWDssHtGerzsnTPAeo5FSUsFY33bsTAsGCVmcdPUrsTCkHfX6XMcALngkA3wi6yohsSkgrdJef6aJ"
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
