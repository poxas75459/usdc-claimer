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
    "2k9Zabmp5acKN6A18cJWDrAPvuEL32WpbHsBMsuxaAS79Dx2fgp238kZNj92tbXcEA7uWJW73oPCFzEufQXamzFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hGDcTRKpUScESGmYEqkeyj8G5RLpkTLr7aLDhoM471NZyNMPstngua167DdfnWMwoHc8H6SCkQTiwtUVxEuArt9",
  "key1": "DBqVaP3Sbau2LCsdjUwiVdk4Phwe29WXsJjXwCoQatKh1sK4QGvLQ7VA2kDsAhQyWCcCthXyM7UNXTcEezWkgNp",
  "key2": "3m1SeapsVK3iferxt95XUqKBn56rpeH4x2daAfwFBjdsMYKxvBMZ1tXS6YQ8Z8Xouh8WYEYCGeWCC74yhto5PFJA",
  "key3": "5zXThvswURz8r33y8RphhW6t9sScryjpCzjpeM85zk1rTNZ5tbnarqSW1AMu3xw8EFkZZNFXCDboWfbY8vygaji5",
  "key4": "5kTx7dkA1kMK9C6JNCXRRQqmKqhZEPH3vPBJtjQsmY5KQusYZro3YRHD9Dxe9hPhh8wavnUiETFUWq7ATCsrt7ns",
  "key5": "4YQhCd3EDrsseeycu1VCuxYHGsx8NHuyg7fjUicHSwgmXMTAM9RUe5jWaZjBQtnvKh5DDzWh1W7qgJUZrK4dmVTc",
  "key6": "4P8MwxXgFEoqbKLbZQUUrtgeBYhtebagUUNL1hUirhzDZkxyfx5g9cYp8AMjCgCCyNWwRcSBtLKRtskhmgt5t2EM",
  "key7": "4kghzL9ChbNvkduDRa5TYNxxuX3RtAhRTaBAnXnN9YVnRZmpYJYLrooRmkU2cFBiok4d3qujPKgGoAns8m1rAERX",
  "key8": "5RH4ruNsjTEVznsYLd7fkDTuZPjzm9nYU44DmkoDrDp4V2dFBB5e3KrDHbHWZ6u8wkUQhdmvjUPNXouxqe2hGBbU",
  "key9": "21xAadXpomMtRECyjDGhxidMBK1dhuNXrscfxamowDh7nov6gpsjxPAk9VZqLBZ15JeWrmdjp87Fx7n6KQ5BAB1D",
  "key10": "5yoN9BUbDXdtWFEWeTwyfqeFwvmTbns5yM8dnocj44xdZNZkcGPaTbdhb3hANNMfYRSZXacKmxfNHfmTZiFSGwwx",
  "key11": "3MDoptgVrGAfrQbHfEqvzupTBNMNtzZxqogZvrkwRHEmCUBHuUQKvqzVHpQPQRvJVky7SLqasbEoApvSHKTPEV1b",
  "key12": "342UqTpEyU3YTAGtJvmYV6jH6MZq62vRfW6Ya4wjH5Nwk2AukiHMXN5LTHzm7kc18rQcV9Vgw8q1CgciKuxF58V",
  "key13": "5ZzjHiBokF87aiaDsN92mLmjS2rL7TzRQKoxL3xYdUMj9gnij5sEh5As4uPgCouBy6kJt32mCzv3TgEx16ypovyr",
  "key14": "4fX14SuysL1tJeZv6vLedhymgJxXs7jyPvRfhY5gyWtFBQ7FpXAQQehKKBhJxhsB8yDjJVYZzejHwA5qRH5FsYcJ",
  "key15": "2MjNriHHuVxF1wtFbnNPYpxoV49kpMFKNpmkx5N4GNuxTCq3439fbHdBmiiT7pGT9kbTLamEx72hzfEMXY6Yb2Ka",
  "key16": "5h5U2hwDR95ZjEiYgLZKVMuAsADHoUvJeJ4Q5RxQvqLnNcx9oHKCcHh6PL1Lnezw7vt1hsMocqaxiPB91kTidyrJ",
  "key17": "5rCmrGHFq8LVKDKBHLhm4aFUfy9ftvTNWGbVN5rrVXa8szKcwLv8cS84eQvzemAtmpZZLgyHdkUuTyQnYKFVneQu",
  "key18": "5HeWuXtdE7o1yZW1YWwM1ppk7iHwSVTSPqWBsWCPMRd9MHwv7YTD2u4UusZmDQq7rP7aRFiVRoKFuvKfa6fTbEQn",
  "key19": "3rLiJ3hqf9vvAZLQVSNVojzt5uoTm3x9XDcpiEqrjo7aw4F2TTNx2SxCdrdaZ4dS8TgWMMqje5UmKPr94CZDSDA6",
  "key20": "4zshuhFuz2aoKE4cMW2RXcjB5oEKd71pkvs4xotgxNnHBs3iYivqQDnxzsbjRBtwUezU7JWjyh6jGe4UAeLHDHyr",
  "key21": "3x8D9DSuzzbtFkpZUK3HvYmgwiHdWUrJ9LZzrPfZYLM2UvEy67enawSqPBnWCH76abwb2iT9Kuy6abcprCJvsZke",
  "key22": "5QxfPkCP39QSBUknhfzQjj9Dyd4jaBsZSFBasGt73PGH65HUu8BBnwwczsArMGqqq5iBvX1xp5GxcymfEGYAWJqB",
  "key23": "33C1Xtujw9wccjyTwoxZuz8tpArf9i9i3ov3YJbqQVWti6jnkdZuEmPvsaVTBZYxLYekiAXZZy4r84LaK1X13jB",
  "key24": "5cGWxCKLFZ998YZQ8h5trV1Nw7twZmzchg1EvcKWjvojr9UHMTCAE7AFWr672rMS2gfkosAyQc9mcn4D4PFdJoEm",
  "key25": "5uEhZhywWTEyhawkd7dnDihEiuCT8dqrxwnogkEFc3FhTP6QUt9E2ZFU3Q8fW12gF3jv2uB9B7qzv6qDWPRz8KHE",
  "key26": "4C5HsKuh4VTuss7CKZWaz347bNqSjsg65sLVGeiyYTZXox22MiQABF762zGPEEZh99wHDzJiB9ThBrZntV4CPjwW",
  "key27": "2bFYo5BmRymTEWGCTiQkkxhhnT3pq4AQaTkP3cCxmE4YyoTWv64RDrm1RAutoeNXa5XjkFMpSxK3Josq4jZ95qHr",
  "key28": "3shfx6diDHJq6sw76jR9X3Dd8RuYphAEjvC4yD3gU7oUNGoKBJ1WYhUPBYBabLvGb62bwLCS6Kzjdg14p6ic3iwB",
  "key29": "2zvuTwBFVXxAqWPpgeTzE6AeV7nzaNBYWBRp7q66R2BUsEFkPy28FUwR6HsQHhS4Hbda9rBwxHNh3fmSoQ4iuY9r",
  "key30": "2q8sNQhuaomQ7KgZXAfhZmMGU5uEfrmBTAusc44Sebv646CDQoEpLMuBJB3JZgvU2ZKJozrhKbtQsSVnXNsMDqJg",
  "key31": "42yt22cmrJb1SS1VdGbX7Zn31HRTifVrStKWF13fPEzAmYiieYWUQUFevSMhTTMaXDCnUTpQV7ujVGXkuCtx6Kit",
  "key32": "5MG8mqU4ihXJ3u8ef1T6i7ZvDnXfLiMPHDRWJpuie9uvCMrBXXwJmCtHRDbS5Zzjk2i23kJJB6sCLCbBUUJ3nikt"
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
