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
    "3DgisfZmXywuV6pLkXwaytAVB73CfA5Ub9Ea9EJ6FwBePEJdkQENVdqDin44pwSR6pjxhXQoAUj6dk7HDyVouVJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uddZ12GrGcEd6roP5pcrBobCfeoaqd4XS69Qa7DQwcnx2jk8UaQdAbPfYF5qn1JgBUmQYT4XAfxmNG3HaenLEgK",
  "key1": "4xc1gXMe8gPPR3eLR6h3WWexZK25ssA6cFef49XAYBMHVWURMLGbSocUh6SXpEHVsbuvHQEXm9UbW9Dqnb7xAGbA",
  "key2": "4EaiPtr8ghrn3TQFvYhNvwVRYqVcVxV7VrqrYUKHxvcFD4zyLyuiDoGVbVhxapVwAo6rQZkdgAX78fJbHagSETa5",
  "key3": "3iMn5EZuyMfWc1qC97hhiS6gVNhRLB4H8UFzmhMkMLGHR7EXKvuZjWfyFMowrCfjKMZiwJR8StxtNRSDg6EU7MEJ",
  "key4": "4DGwERg8brjDSkmoKJfpbRQCZ24kET3RZ4DRa9a3qTN1cnwDjbBevsKSYZ3CL7gYMD2GzCRVxWAHvXaBFdHbYRSu",
  "key5": "5pVJesynHxYgApVwY484YUedjdLyk8o6uk3QfU5uh8THqYjSvqmk3tJXwjPngv7aGL9ozv1Us1NGEuo9VYJWv3dj",
  "key6": "4QUUuw51NhQvqNr1u6WYb5jrhaE1NhfAtSkHf2iHbrgnJ7eQJfydrZkqx1AP8QUZVYtFiXrzbwEFq4kpNxdzAn3Y",
  "key7": "2nuk9BzB8TTrcAozTYJJ2g713TjQ4g5zR98bAaTdTJmfvZAF2TrCPLLLv4cVjSR5bDjfNYoyMM57w3rKGG84UR8a",
  "key8": "4ixqXubWxCzbXw8YVRGBZFXzEfNwARtWFsy5F48LkFdEau3v7L1NUQ7tf8ea9QDipm9P4fBVjUipENmBAdvgYTnC",
  "key9": "3unwtAuW7DpC6iL4Bvmw6Epvun4N6FqnuhyKHdF6Mfr4rmSwQgao1gEbLqeoGA52DooAefUSaEd6yQtjS6gRK26v",
  "key10": "51MstZhSoNnkiukDMD67Hsg3jJQx8cEdnuWv6mcf6JWvdtmUpdUv3jDbqRfQjhF3PZyWswQGoQhZ9LuqeeBuVd8e",
  "key11": "bxDSnNusfWDZvFCsNZFu9vDSTP7RtvxFvwupvHKYKMzJhnLrfRvsKbbcjrBSgKWGSmknra1XiR9BXaE9KHnfAjH",
  "key12": "WQ6pJKpcM3Xkjj8D419PCGq4PjGr1fondTpEz2qkPZsL53gRiig1qsAN6ATEUvcrSU9gmMStHuMjVGjwYvvzitu",
  "key13": "5iCYuyAgQC9CL87eeAaMxFVAAQK8UYvig61amdGtejq5D27KSbWzSRs579TwDxxoPddVUZbAoUVFKLLpVkdgWgZt",
  "key14": "2Aw9bUQw8p3kkKDV8kToTE2C7jaVPgV7r3eB1mpFZB2PKFMkqEyvXajjpATEhA4vh8dNnaBVKVzA8gDU4XwCfF9u",
  "key15": "6636kZomfJoPnDewagSPV3ZV1FNhyGjwvUD35uYjPt4rD7TNtzMrrPhbs7HY1fTs2u1KJCUE26UjNFs3BBNj3BwZ",
  "key16": "2Bd3DqwVy55L8a6KdZsXpnGkaJsp7jyxoZYnLTLtvNZB9E9k71fA8XQs5za4PCnZRxLbeQgHXFjskmWDtSrFNZQz",
  "key17": "4kjcNpLUDAtuU9fZcf8X3ffs9nQB34xYAMqRh1pJSW8CPoBvyyojqsDisjtTY49pWLuHSR5JgU2WSRsSZMWtni9U",
  "key18": "4D8Zjf2coWsWBXPeJs3S6DKSNJpVFVWwY25HMPWFrz8aGaVF8kBEoK9eS1QeK5GFjgr7J4whSSiUmWURrPYRjicZ",
  "key19": "M2UWNbnPaMCZCirrxYqhf744SeHymqeCyjFjHHJyUkK3DZuLuoZcUcKn8UdFr3wAvJ9ESuKyCpn9S4c5Qiqzd2c",
  "key20": "2SYkcKUQgyZHEyfuAnhB4XnkrxWNYK7RZPSv3bHPXKSnp1EMpyxS1L4GH6XAGsHYELbyXBFSmvurkePAhSzjmWM4",
  "key21": "61ahL742QjskzJiG3HrXH98tqw1F8Ng68m3Rycd1G8QVVFm6nnjv4xqVLfTUJxiQEyeAtxSTq7eGcHyDSQdSGESS",
  "key22": "61BKEdiRjP7UDTF5oMog6y1LW14Zjg9t8jx2mkNQvnTqmGU55WVR8fgCC4xbXVpfSeCcipyuoU9BXrQkZroVwoGv",
  "key23": "c8fHNXR4BECzRKpuA6RaYi2WgPsQPX8oBF4m7mA8PaKAuADU7uaC2NwwsFRM9f8swut8dUkcrM2gFKPD53WAGqF",
  "key24": "5jAgmkMfiK1PgNcDUzBBsBjf7KgpbbB9oC6qpkrc1i6K9TeDVUFcAgkwMLK4YphmXJ7YgDt2YMvEZKYTH8HkbCVH",
  "key25": "5Dsu9CrBsKaNnnACxbjf3N5XXt4v9hG7JmKToxakQj4ZXNgcW79kFULhnwsTZyqM6wb7K3msSvitYUeMkb84Jfjj",
  "key26": "2kcjyHNU5eLs1QfXh98GRnRScz9RWZM5ekkVdwMZYLqmiQR6Aa1gHcZNXcTyLvimFvybYjbPBdmdixGxaidsKfEv",
  "key27": "5tGMcc7F9pawgxHv8bT7Tv9GmUa9VhLQPvYS7cw7KWTBuPa64LFjhjRr6TbVKnvYY9124uKzENsaTiaX3yF7cwcx"
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
