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
    "4giDKL7YZVMcZxtku9md1uVjDfbQCHqGtT3GM3UFZ1kBDKhPvou1aLSdELErVgX6HFHRQyViYC5iffi8b9ps4Ke2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36XSo2TLJWwSz6gyYjxvum5T1SRZNCUCLsYLtmSbNefCrjeD8RFF5axH7WUx5DVoTgxtnbydq7jS7aDZ32XhMebg",
  "key1": "5exo3pSB4hhAnw2pkHeQ7BKv1DjdYXYsptf4XZc8C2kmQcUKdJhUTvwkHu8UCU1qaY8uqRfigNdViZwJA1ZwGDET",
  "key2": "3R5WQwcUJEpMN2EGLeSSQVf2xi1yNNks9ZVDBjvKujusf7VdkqphHh3UrfPJTGPY5GDkdvLED1nyMrzi312tEgjU",
  "key3": "3YL4s29vHJahGyk8DfVgHsCoZXbz9AWr5M4zvw5EE7wJRQiYXbHGwE5DtKhivTkqgpMxWgNyvjk9DQ5HUjgzsjkv",
  "key4": "4odmFcH99gNdWS4xtS9BvB99ondTtofHMFMgfjxcMUDcAjeMN1EzfzazJkm1XXgqGfdi1C64auUxSvMhzZ1DbzF1",
  "key5": "3S1iPtNEfrBkc4RkHfQXF5MEe2zECby7ESmYY8D5TS3suJqUhQwuUzSMsJff74L8vvf7khaEwT2v7qRyNxBW2azk",
  "key6": "5knSQUsdYKNo34cBWQm69CyDi31BDteJpGy1dLUGgs8MJgb8HKmCRcdt6CEiTkeojgRaS42HHzPrryZCTuUkFKMR",
  "key7": "2jvNpixnjKGzUGbTekJzXNXPchzYg9CRjpcG8gX9d4FkoQA9MxQgWUZrjW6dmJc6mMgHxzQJMQyXpT4Bo7sgEfap",
  "key8": "3urNWwgjz7yY6eqWhNWaoVw5iNvHQCWJnNk8FUqbQnk2vM2xjS8k8BrYM7HPJgiBUqruvhpgqXsZkENDUKCaEtE8",
  "key9": "KPQvDsQbdRXMY6n25TcciVrFWKuqUGHTn4jGBMqH3XVVYJXs67ePhYEQyHSfXbE3F2Z2sbAkS2SSy71m2c72T9W",
  "key10": "3buQQsoEPscKqiuY34VPH5MHSFqKktbcMvMMmagroGVQ3iN1zaMAasUrGtdRAXssGW3jY5ph41aDoKCk6RLLLVUK",
  "key11": "5BBbuwUf7BKHViLoeXpjhVqPjVF3h7JQm5LSgnV6Sh8wwXHYY1UaGAskRbwLUtuNknFqAY848QQwT5Rg9hRzFF4V",
  "key12": "sd8yAWXHn26WFTDaTvFpsbmC5yH7jG8d5JybnmxLZChy7S6TDfboH75exxkgHpNs8o3tYBQEMybca6Ggxbor3aH",
  "key13": "29CwXLHTES1T2RZHhJ6xQY4k7okdL8izar4urNnmXUnZgWRx5Ad8SHUKS21ux17RyA7pV72QwcKAjo58vjQLViCM",
  "key14": "3LYryqBvyGon9Z41WUGLbTD2y1TQ1bAhX94pbTDRogFZyETwuCgVwMX1taawL7HpLeE5J6qEMQDiyE8z2ZLdeBmo",
  "key15": "4RmfzAeVbRmofCMBShSzjA2nn6C4Y1DW1TddNB7c1QezzkPCyaGmKRw4b2SMxbmEMux4G3swvFbRX7cn989Q5w55",
  "key16": "4afAMKnxTegFk8X9J1j7SfCeUHtXMBwQp9nExLtVgFZNuf1PVfhw4ZnnDvKB9wXwByojfkkxjUaUKgTWGpAf63RA",
  "key17": "5U4ak5z8sjNEvJJPwEcvirR1MMhv5NtYMsc2F5fvwkbRWWUj2KWcKYJScdAU6D18EA3vcLEmgAgcLxqbd9QndqmQ",
  "key18": "jRFfNhRKRxxLUaREYL8Hc99eAoA3ECkvFcpiPrMf8TbHarE6Qz2KSFCTGaTHHcDeXm51SGPJmhJs3D3GLw6MFrC",
  "key19": "ZrGwwC52YKHpMJCYBRUS3eRdASREgRgMC5mCoHQLWgKo1YGvUtf1g95ywyymSmpGAjPEnD6jvFPXGfxANwXibRt",
  "key20": "WMVtXbojheov9ijqLv9FxD7uDgCumQowbihq2B4GPwkqPcn3gEJ8oxtuaYqZtJeJRExhSgegxRV8R13fNFF6yHm",
  "key21": "4s8cP1oWBcFmSa93Zrkgx3JoiY5ALuCF54dqegQn7RSQKZFrq59RUNkLNexfDa4hXZvKPxp6v8EKeeesBUa9dkGd",
  "key22": "46XiH1jzm9bE1osKNbhieAzePRcVKHJCQ33i8oQdQhJQtUMu8i2Q1P5NBRq7Rg1UnWszZDkPHkaeZTpyW5q7cWsy",
  "key23": "1g8HxAWi45Q2jE7pN5k95Dwr8X3ZiTNpfxoKUQiAzmJRSc8gj2pEwE2UQhkmWREfKjGF6YwnLQYT8hi4KwMAKW2",
  "key24": "4uKKFTzLHoQAbSguuk6uouvgbYEV9KESqKRGMrreBfkcDcvA7fC1EXFZUgpVdzTt33wW7RJWgFjQ34s4ZgVtVLNv",
  "key25": "4cJKmvAz3aX1mZReGtqf9TeeEnCQYAJYXWueFcWRjej9bqgQrAWmzB5q4Cr974xu7cHKuSP2fL3E1KaZVFoDnXUJ",
  "key26": "5GdZQnNZbRiVnwy8Ahkmk66q9bQBX9bT3GGwBUQjSM7PwedLbDUgKndfrHmg7PkZ6LZPvXP9v8HiSSrhwBXx2eEa",
  "key27": "5A1yR8sgm69tb1tAZj5235f9uLtANtAvjgB3oaoxvJLFmNGyJmAUjoVMN7ZVKuwzy2gbsBGCkpd1BRkpyRbAhWZ1",
  "key28": "57HsTgX2QRMDDvrRrJTcq5kkkJeMKvWq8MCDYg4pZDrtgYHdrBhBANZParrEFD6ayVejvQkSnYmhVE6CNCVptemC",
  "key29": "56kT1APA3664iEaTJPLU9sMsbhBLbK9kxp1tAM2QMgobPzwMBWRLXLsuvC88gLfpNYHKMHhxXVNbaigkzeN7rvd9",
  "key30": "4jnKtb2MVFrjo1UxaMtoD6vHC2KiFB8FW56VuNzjMSYFZhgYSPYMABcqEFCjPmpBte5h8dJx3wqQBQcTzETBnXGL"
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
