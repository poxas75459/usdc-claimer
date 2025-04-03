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
    "5YjH8t1YT5WJwvyfXaeCMHGqDpbdYDLptQyxJGZtWYJePncghKfQD7nzQa8FtCUA5Qmbk3ycNBzoMHEEqbzRu1zD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UyAJP3UXB8TYKuJkfRER3jjmUdGo8XEeXiy2e3pR4M6izHCUsSYmnUUkqsd8enQ5pDKwpGPJ1x6KDBDbFffYs1z",
  "key1": "2pGQP87Jx7LkZiCb3cBaDLyEmpyyp85rksHijzp7zArsmvFf1WUgfkHK2iNKSbgVDrFBf73rrZaZrT3hhGP2vNko",
  "key2": "4Uf7yJoNz8FkehPKDqx63zs5AYnmroLBHxnkRvxnH2eR7aU5MG4Ge8fg3dAcUX3cw7aeEjzDkiFsuV98fsNqQWBa",
  "key3": "3UzQTsJeFW9N9dCs5B2QqLSN9N5FrcPXxyzzqyJikM8bqMxZLfHhLXNLUx9AEYLDStbvHQ6JXgLaZfAFahDBbj12",
  "key4": "t2Etnt8Fym1c3BGZifjjCJbQaLx819k7yaszu2et7SemWd57rRFZm8SKGL1ortcimYRTphYihJKq1GXFRAfRzfD",
  "key5": "5Afj5AqYb7uPRjFVkx29hYt1urmwEzEnbhVGR9rC2oevuh3WC26YAMNag1Y4ffk5nauW7Ztn5LsG78nG6sp6raky",
  "key6": "2kES6MS67rKoPH9mAsygwVtg2wtDcwpZvdQ95AbtpCkacCdEJE4p8RrzieKXw78TBJyTiYjLY9XufVrK4QSgjHvZ",
  "key7": "5vUB1TgEyDZsQbRLoYujDxySB1JTX8Sx5i7QxRKdyNJLKbNFMUabS9g1dACsTF1SdKkoXivoHfsK59MwNKKYW7N5",
  "key8": "35jqRLEePVDtN294ssHjuci7NFrGPq2Di5QtxwrH5iYJC6Sh6MHdgoyMyuZ54rSZW4TEjGQPBDgUng64DAwkKKvj",
  "key9": "2JF8SXQgVNNingVECPaLZRZawwGyP9FxgSgFkDsbBohP6mRR7vvq1HpPDuCmLdGTCD4VGEgZAo4KB2ARzc3wxJgU",
  "key10": "CwswvS6T13L8nWQfQbvvbmsPjrr23yArLYDMZRvhShDnam5YNjSx52mFc6JjmQ4MnzcYjphsQwTiWYJjZmmgbdj",
  "key11": "2SWpm1HfwEYwsStnwcQSMiNoHKKjJCRrimYREcYY8jXkW2bSJbgWxSsxPUwtk2xBWJ7YcgKwZSVnNGKduxaxTkV5",
  "key12": "4HS1Zy2RrhitB2Yu7TU24rTmq6Ve5ppMyFakHXgzQMG4aU8YDit9Rv6nw8gaEPvygf6BUXbiM7nxt33Wa6uWruCU",
  "key13": "3CBDZ3yTerMu3ivytZUFhj3U9FXQT2XpV7TagWvmnaK5LBQpeg2r6cQnGNsyJA5iEiqnLPNL3QspQYwD8CEVEY2Y",
  "key14": "414Ji4ijEBywbRcC6ZZxgvtHpiBMj6ZMfnSSHyGN2eGuAAvLxgq7ZsKe6XmPZJoojx9zhGSK53aM5iqrHmSZ3uyo",
  "key15": "4kJGAxV8P1T3PTfNdHm6PZ4JCSgS4jityQUC81Htisp6hyWcuZnuUeicnrbAQhxAA2eNQ9UxKWxPfnKWUkCmwRFA",
  "key16": "3iP7FKPmvNkVhkZF6FBmuPL1ebNk4Q7mw3Q13ci3Y185UVkfktnGEL7n22Y9Ua1tidPH3ef4Zk1F1inLYTAoVwCW",
  "key17": "5EUnjXV96WuvaWV4y9cBdtDpJvZEET5HCq5BDxHY5Er6xu6pW4CY1e9Sggk2JNsT7iCq4CJGiQNCNp8pq2nbv4T8",
  "key18": "4cHPwKshMyaMvghTjRh7VonawNqroZncdozo9JCWq3B4Hm6qvV97RL4Kw11KpbX8Y9HFUvQ5pj5aadfkH9rV4pZW",
  "key19": "2WFgiGUfnQYeSF4UiCK2Gv3GF64xqf9b9sPSBLv5MSfxQY18cmyoHbxt61wadS9f2MrCJbVS18zvNvAtnRKHS43N",
  "key20": "qSgMoZrSkD43wFuuwaguU7jStcViGxbTaU62NrxxfmUtV6eCtV5qUQtHRxfhAsXaZkDWvyCEhGa1aM6x4szdbJD",
  "key21": "3VyNWkbUFRAHw4XVxocHnN4zU8Wa5CVWoJDVCz7oiKyuA1UvDS4Nn4EDXxKnAKeGcMFktEEnghNqpunMDMF2iDkZ",
  "key22": "2hJKHposuRsgp2Jz6fhjZjKVSTHVVpjhMExd4wSn9UdAVhGdYNQu9WQKhfZymdKZP8inUEfNWPD5xtmW3KLqmo3L",
  "key23": "3PDnfJcPZvSGYF5NosbAhyfdbYY8pnEfftwo7RXhZUThDjspnQSEyEMYJLsqq8ScQNFJcgRMvGdwjmuEXz1UCbKW",
  "key24": "4a7qnfHALsaDGoQa7YfYZVP9fL9NA4SvV5wYBasEFfYoo3c6izcg3TPTe56nvL9N4qKWUnGqYRthyuG1NfKK9KBW",
  "key25": "KEzrgKALkzssdNwACFBw76Fy64aCMqrjgPugXyVFU3gVxw5XtDy3RiRurA6XQ2sD7RxSPPejdYq98J5dtNpCizt",
  "key26": "57bMThm3PiGcpdur19gqH6xsbzFRSroF6DJz6e4erHZWxS33u95mApA3BtTffLT47LG82ajoUZUmFbjs5u4yRmxd",
  "key27": "2HKNjZGB1inTBSGX1ZXakMfspNvCmZrkqmVSv52GFtjraUBEGFw4JJM8jAHTcXmG1CxMsosC82QyuFmB4x8yuwpz",
  "key28": "eZfKqDBCcDa2d42ZcDZnGNKESRrnGNHr4Ac2ZbTGUgJuFVG6prQyeaQgU4kZwt6tNPUeqz1GWvTPFXg5JBrAcNm",
  "key29": "5pg2Ky7eDyiiNoFYZ3ew2h9NcrtorGdV4JkZYpMX72jQ3dpgdbCpJvsA1J8bAp9fZNZKr6WkkCJc8VycXgT9vVwA",
  "key30": "4J3yKDwkKfJ54pHE7hiouxmXCKkY7hkrZvEDkNFmRRYbLxFuds5qsvvQghtPP9an9j4BK8FqMxmvfPooVSSGAnjq",
  "key31": "2kPEQyyd2Hmt5UsKCCpvjrQ7RFs5GJLPomkgdzhR4pGfboRkVgTC8z95XfEMJReqTny1ChNjMPFZPQgTjBF9Xp2A",
  "key32": "4V7zp7kZzsSa3tVemRSSKad7r6XJ1kFcVnqh9oBmZQQzr3r5WAHBcAKemnj9zNzK2Tfjtz8fRcnhS6w8KeyYYz9b",
  "key33": "3j18XAj98QGpKmkssr52oUoEcyzQWjGFzxVPsz4bXkuEA6GxUqyrpSyxuEPoDgjja6v1aiMdRTszyStL5BGEk5cJ"
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
