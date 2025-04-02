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
    "34XQoYHWW275Pn4gxbM7v2875GtaBMjEiLsqELqRFAhP6vEF2YDr2VyLqVz7gKcpvVdbLa9DnANBsPyugkTrbVPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KnTnUMnb6JE2u8hN6v5hgof9yBCTYhxZGcxzvw5usgNZtKPFUDkKLXa7dn27W1DsyThPxbR7HL3zNjuHfW1Qm7H",
  "key1": "2bbDLMRi14mRYseXiTRdZiAq3us6kM6M6Luj7JxVkm3cWSCqfdniS2vEGhQLKegtPxMX5CamifwKReerRdtFmbaE",
  "key2": "5touKm3rNMwYHVcxfvQJzz9WpQAGzwTkqtje2kgMey2B5B57i5F9GKGotNad8wSqsa4sw6RkYCW98DVRnL4W1aQf",
  "key3": "2TBB2gfuCMXk51ij4rFYJJT6sjF7MVPYUYU8tKrTFY1CADe1sUufhdcFwiV2pmDiqvEPuqKn76DzcWA6Mx7oSWNc",
  "key4": "2ymEbSR2pmQ1LkrL7PvaTsX2ZAiHzKz6nSXVrhu6hSDX96WzNeVdxWqLKe64ik5UhAiE6UZU9b72EFf1Dy8VNjEk",
  "key5": "5xuJHUuafHXX5mYuEVEoqrCBTwRLaSXNiw73rLZWP2nChsg62WkmxH68Wotj1V5EDjAaWCKsPXTw9D7uxcA9dawc",
  "key6": "122TZwsH7CHKaFKLHxMkB5AXhPdiusqexD5qHm1ZgRvhhhq9oi8KtFseS2yBoKLQ1LVfkbhe7M4FPRSCRS7QfxrM",
  "key7": "3i4weDBbHep44R7nQFBtGMWwdBprx3ta4xiXdw9J9NKXyvRodfStPqWihPnCgasfaP5nhsyvYtAEpVtqzVHrrHMK",
  "key8": "5sRxjmra67BmcaMMF1GeCgqf42wR7pbkH2XFYeAEb8u261Zu4ADbD2p7AQxdcKDwxyaShyT1r6kVS83QCRfrpZ5",
  "key9": "29MhnGADZVjW3Y9V6UxFzVdhUayurTAMNARRxnbc7Ec7bRmJfxSvoL97zua7tsoDWr7fiV3J2oviH4wguC4VBAWW",
  "key10": "5jGnNXhCYjLBaRieHTAVnGWVntDsdeWyCw9nJ3vvZqrQCQiHB6uktKUguB5SiLpVYzEDPogRbKeUD6UPBxQR7eBX",
  "key11": "4yGywbYFkcTDvHgssF27rSTtf5ZvuTcFnZDrsSv6eBYeaD3x9rM6Yq5UQDXGFeuAhkeXkkyVQt2kNfpBpd56VtEq",
  "key12": "2pcnjXY67ezXHivPz6hu888dabatSb7471Bo3tVATRVk4MBgg8UGPCKtA6SM1tqeWfDKNDvHGj81tpKu9tq4pu9N",
  "key13": "2Z35987EikGT9K4baRARZtQkMgUNgyz9Q1TFqJFQxmY5bigra3PW287271foEVMwWHqPrg4cQFqPqM69HeBLUW1E",
  "key14": "L5WkWTAQwSdG52FDEVh32bPgaWmtoaHG1wM6Bb1HxzFqQWBRQb8qkY4bagx7PDZ7Edbyx1rxF8PQ6WvMFmwiXPB",
  "key15": "3dRoAomxHabeF4vWewFaygNpRxEyXW2ydxnTNvG2SkvJdCTj8RsW3eFy7vG5fY2ne6FANpWbm6WswyG7ztokUQM",
  "key16": "3dBDCBfzJWGTGJJM3yhx52R9D7miwvETKqTt8pW3ivqLsbUEVw64zahm3Ntou5zqpV2WbSRXJfAXpRwZSAsaTwic",
  "key17": "D2iZ5P5mkLiz8xCtyQRANTf15GBTUCuiCZt9VDmYqzg2tw4Fn364UGmkBNw6kN2AYuA9vnsKDYhDieaNLSPRuGW",
  "key18": "2Ydn6CpMoFWaYsUTGxKVKdAixPhBNr2wgUkwUZ6213g1DrJ4fSk2nqWpaNiJNT9sYoE1DhkNA3pdzb39UtWpdSkh",
  "key19": "4eJaTbuVrAvhtXS465mkntr2KUSMYjwmCJdtsFKNienEFjd9paKQT5ap6KCz5HFkQCLmNRHVA1CCrPYMy71sYGnm",
  "key20": "4pV381UvFaXYsgzA9hngyLiti5NtS5irbJvwRCzbRyerzuNT3xq54iFAzwHhxH97UvVwzCDhW4839dDBWrd6oQdZ",
  "key21": "2TNBdHguRohrkRGhkAHGSA4BtzEHmnKkKyEv9xnoENJU4djjhVNCW3cKWnAiz5htNxxW7yRv6xY6bysfHdwasKV4",
  "key22": "mUBf2oMUsjayatejHspihXwPaEjDVq7Sehzjp93V8QiSn5c6KFVSD8dnNN8yv5PnFrgRNhKnVGfKwrjjiCa3TMu",
  "key23": "3zDUbUZjxuPESLp9GBGd9PYHfu8hjVSdb5TWVBcNvst9geVeZWHKZg1fQvbemyNG4Kpd32KWC6rdQowUxwYdb3c7",
  "key24": "3dkVPJE1YhPhgQwmehhzHdJBmGqPhTJjdNsm7pCJsHrpkrio6ZWgP9tiW641rwr9qogW4D5c6kcfGNtJUP9kCcoA"
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
