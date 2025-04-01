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
    "AYwvXCJ7ndV7TK5ynzjJ8V1NccREyBAVFhrTJhzig4Bnc1xB2V7WcZwiudu6zurYd2N3AH9U3B66KPTKbv39e9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "386AZF4uyaSvbKDaY7nXgwxUGntSqhpTkYFK7aBTSbrnvvnVq63zEfW6EDokbBwWZNs5Q8cozZegrxgE2vhTzMj4",
  "key1": "5h5FjTbsbrWowryMYNyrHBNdnyH7615jYBtQGA5y3iX7M1PhfCRqJgZq5PKKYfh57A5Rr9HNQTM8dNg7NJXNto2Q",
  "key2": "2FspKEmixfKvCC1sGfdkP7ey4Q3rKXUBzWHpJ4NMEcsuNutFcgvY2V2n8fdQfsW8CYnRQKWtkb5n1SxfYdzs3fzf",
  "key3": "4MdZYSnKoYLxTYcHdZF5d1a5rSEXgKyfxw7vMqYtRPXuUGCXkQi5eaUF2oWoM9uTyGj4Txk7sFbixSAduMaS3U2j",
  "key4": "5genmad3utKnPapPzSE4uWEE79r7hAp1xtsb3PAiRFbuefmRWubR3L9G8RDUVTZHPUfXFrNe4UqTB6ZmDn9aD9rL",
  "key5": "5mdVhDm5fhx7TqfrWvKe8FSC42xAxd4cRWf3EPz1Zz3ZK913K3jsxA1Hwn8m2sqxhXgK5SvzkJYRjhvtZjd3Tx3K",
  "key6": "5GAzM6j6xDr7BZqbZ9UCQKF52HkrKd33qPFWpmRHp6udYamUHUHux6V3VYdRXuW4rTUzZHiuYmAKzipLA9pjkUgT",
  "key7": "3b2Eq22we7HnCFRKzUiSMTgTrF21XcRFvnyicBFeJCupBYpWGbuHASVHjxuY2r9WbpTZ74x3Z5D7f1XszyVJFz5C",
  "key8": "2wr5N6UrswxE7gPE8yt4U4P29BbB3H1ZwU6Kh7uCXYntyQF8TmNkbRnzLSTSKrMQeQkMtYbA73BAdsrghwnP8N55",
  "key9": "2NCpQvycuEkwMDAPKbjKZpsg4icDjq4ezoNXjbrqyLyNnn923RGTCRnYoNcKorBaKJ6Bp1p4CFNf1pJ88FzjMzzb",
  "key10": "2R4k8vCWb558KLYz8cTzb84drveBKgcdBC1yjCWDKCvdv65VcvAQVRbPSDvaRuvVLbsqHSrvXwHMe36DVzhMq3vb",
  "key11": "5eWNhJwHfpb2aBmbi1GknMJaVjpNYMCTG4wsYoYDECMHyLG5Jv7AT7G4wkjbnruywxrM3cCdWijqc5ckRkEUiNff",
  "key12": "Wm1ebwKKmqCUAXmyH7aYFGQoFuemDJCRR5HRCKc9pNo42WiaUDA7BUVQHwFmbcu4r58u333tm379qFytTz6wrQD",
  "key13": "4rsV45Epqa2fcYts85rrBQtyuAp1SNiJt1hwfCiC25fSK2NsXWokyMb5ioHrFuE7EqNTrAueUgTsSCiAiVwSgQbZ",
  "key14": "4pdbjaJFwt99tqFJNRV2b3Uk2kHtrUdhojHqgCDgMfDxhbqyqGeL7RmeGiULNekXmUaaEHEsVcZ2LGHyQrfYLTTU",
  "key15": "Zc7fAnvFRd9sn6wsaLeRRioizH2kuTDXc3c4z74iNH97XSisC66LCK59nuYgFYR9Dm5PTgoSBrmfqvFm9KWRzxf",
  "key16": "5Tfm2siVNceFvuN8nGAkK7akzpsBhWwUvKsFDs7yoiXSdGfC619wFq5XohMUPxpFf8KCdbAK3SMchEf9Fqbfz5nD",
  "key17": "5PfzAkV4eWQJyNMowqp3GzV2tAkvNzhDDXWVTSdLgMpFXWYxvhsfThwUL56k2CzStvrK95gXmjS9jiBBeje5qRwM",
  "key18": "4FsGLSsqLyZsTUo6FjQ8ZS1gYgesJVQjQuPJ4PQJK6H7q34dgy9LVwmerTvN3SsGYVoeiFgGh2wKQ39vw8ok91rD",
  "key19": "4NMzCt2XWWk4xHxZMzryAMH6aQ8j8xkk4RDozkVoNMga7efnNCAZy6UKXwzQoSbgnqyBmMWV3gWtTPYw1qZStwax",
  "key20": "4rfWLAPndmUNqPCURpcoHWvdegQRDrewxS118HWH4WWgXAm6ym1BysguPEiKDTjJwe3Z48WLjVXUAjLrSBSDLwBP",
  "key21": "2P7DKkVyHemvLx33pbFg7iPVHEQrEgRwaCdXn5dLSQWxEu5ej9hHzKspEo3tphCaRKFLZah7gM8vnF3qxWFiwMpf",
  "key22": "p69Hx8XintfKqbxWWrRSCXDmY7zDXWSmF1u77GdFgXy92tSmrTLv3iMgvGU46rspdAZPs6fNxKnZB5dGBRpXFoe",
  "key23": "3SHcLynDo2Kf4AU4hVa6g1GbtUKryUKQit3KvWVDkpiP63VsgVR7MX8iMvafioYFb3BZWLW32WskEQenkGfPhxGU",
  "key24": "3BBaxVavo27t1K3JjUgrXi1nnYNmdngfKCDC5uXvHKCohtvsGUsAFzYXGaseqcujSoMkFEcmeCVd9ALF4WQy6AGg",
  "key25": "5gj3aaLByj8DEG9bwVJG1X5Kn8Cx3LBk9TZBuu4T9B3si7v3H4GQg4ByDgsdomjwvdeKuk2Rz18tmc4RnVoLbnMY",
  "key26": "31cU3HYaZxzomUx7zjZdr5onvSAW27WDRzXbNfmwR4mAbAomqhNkcPuJEhqxXmC9DSGDF9pzmuRiojbyfLH3qox1",
  "key27": "2W3XDUTvGdwfzeDra7YyyfFEhU21R6H5fouVyXk8dgqikjTzLrurQwH7LvRpUq5yXxUEhQxAQ3aqPNYBxBDB2FgP"
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
