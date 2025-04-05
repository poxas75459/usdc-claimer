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
    "2cUrto36Wm3ND566GFV68PWc2bq5peC5Zn5qGKLmDhoVEwJ8Gg59kacdHXLLZwTtrpW69LZPBXVxoP2FKD7uKtTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bkZiuvFteu4VnDR437akYmgBbeXzhNAHMqi4GpWH8HG8gQauiZ6HhrVd1wzYnEAQVTBfHrjmaqeiKZzxKM98gFW",
  "key1": "3x1o66RNYJCFPC5aZtSdpSVnV6nMT1SYtrrW8VpJQky2fyG8cjH1PPtBAGLMw66kWPSyiVFHoCQQgayJpYumDXGa",
  "key2": "3hGChnUES4sU3wyRSN2g87nSqNawH4PYua6ZBcxedCN2VmDv9gW3AJvoN3Cf3PFqqcnS1wkyNTUqtcCYiJkDspy2",
  "key3": "4LLEuQzbNGcZKB9SgTiHH4MHb7S1ePoBLWX4feB5Z556oG5s4YodUJ5STS7VZ49o3woP1Rnh92PB1JcW1upA9gaq",
  "key4": "2e1NyGNU325a8QLesX1nnFdJqSPyikMFoNNuD6kSi54zSQsvDtTTpsoNxPGwbuBrzYgYvzJ91UCm3hV4fLymPSdp",
  "key5": "2oYPVx9AUtdFMQ8fHaGNkurJpg7eZ3jiX5KCxC4JY4UeR3m3rQGnsHvaxKf94m5vdw9MZfpgTf42MAYhh61rCVM9",
  "key6": "3TD8hBeBKqf8vspRtzAafY38YKasx9cx1N4N2Hv6BNXADyEKBzibdopc3yL5zp6myycErXomxm3nCCSSMUmsSY6i",
  "key7": "4eTvg1nS9GTmAksJETpwWYzoJrDS4hwrvR7az3S5r9hiFKdMiGDNzqS7MAsJFcF3eUMCyzyxXnHpxFKvFREkGAF7",
  "key8": "3QsemuKwv9GkzyC7tXEJVNtkGyZLX4zZFEwaZ6Ya2BxjauYEf3NMpgzjGxLEh5BBDi85423ybpSQh6stUH8yEPCB",
  "key9": "BXNr6phLtAzQGHE3PxoE43V1nSkzPH4hbTV9CfUCg3Z7QQPsEkc9E6vZyQ4gjksH2UoJV7kQNks98XPefn2hpUG",
  "key10": "4zfW7BprqZF9bfCTJhCYHeZgxEAVnn3AMdUDBr6vmQbqQiTSHmHB7aKM2c8t3KbLowM2qtSpEfRNDN7xuU9mhCEA",
  "key11": "4VVmK3CzvgbpMk2kinfQwLr9eWYTw8eUg9qH1UUkTrr2iB2fQrQtQoUQxRmLFhjpsX4GcCcezgjNpaC4A9yhChSj",
  "key12": "5au5HiXz4YBPDMzrWzesgZSg3BgPWWuLWCUvxeP8g6nBEzj3h9uoZ2fobKCu1jrRdEfjAUT92sDoBfkMGi4wchY5",
  "key13": "xdwpMtLNutNoYWTM5AAVjYTDXsoYR4UtoubhD3PxUYpQPB5HQbJYVKPDwGx59WFm2aTN3ENmrhS4hrsBBxKbdFp",
  "key14": "MZFxv4GWzcybsBopmHdjniu4KTFoWzggttC1ALGLSq5yZ7oYZjKUCErhXvLvkYhgDPveQgy46Mq2qi5yeQYj3Q6",
  "key15": "5uHQGUkPB46rLFFKeZs4VoThd9R4UucNpFa92WudFhu7GxwbJa1LnaiCqgEHw1iTx83nGeBwhHUekHKiYAWFidzp",
  "key16": "2V61Te4JSEpoZotjn7SLjko9v9v5f5P8QeKo312aNGdXRtZgykLvX6ZZqvkHjiUgQPx8uLqEsrw29iAQzeCF3e7i",
  "key17": "2HSCMA57MPks3K8VN9AoiA1vBvx2qjHXBFw1JzPDUd4hWu1P6jrF6RxEfKxmwo9dQLYpMgAYuq5a7ZB8NWv43uwg",
  "key18": "3J3CD7mGVRrFowJ4aJPFmzHNaVU2bHGJkxLPa7dY5bfkPhGs1FQQk9qGtonGV1Zd1hEwBCdbgX1SXTebRkwtguPR",
  "key19": "3gMzUAECZCm6tMyGUKwd5HeLHhFgEHPiVX8Vnvc32JnftKyxXvG4BGMznxfMXCGVuTHsfhFGxDY3tiPbP9i2rqsw",
  "key20": "3JqDoXfemMxR8dma9gtHXT2JMk2NgYAyUuG3kcxDh6ebRJSP6UqvySVB8UJou1iswW4xLuHWN9SfevGVR1NatEXX",
  "key21": "3irvXC4UrEV6nEt8iptnP5ixSVgHiHN3xjHenWoCdYaBRNitD5De3Dbb8vERwwQfrfj4qGkTnhSzaXVT6eXh1kXp",
  "key22": "3puteUkU2YY9WSQa8ArTRnLpthFXoKeQsvyZAWBPrMABtvTf5yP3F3hyP2mH4YrPCEjjwhoChJCRBAAjUPr6mA2a",
  "key23": "mkS9d5Ei6E185ieA1A5NbCyVHTJf4wWPpGH6az9GXbEkBpXcHA8pY6CP1fhFwdWyUNWdMEE3dJ76GC525QkLK38",
  "key24": "5S6wsHJyEzUgAVXA4SvsiSb78YEdipsDNooB1hsZzqc4wtCte9ms13mWasdwDpg7XefoBNuRWXGqSAJFXUMigzSb",
  "key25": "5LqrPAqU6QLqCPAznZDxRnWQd4XisdnkRMTAMUo9nDhsVQitsEBhJ9m76Bzkv13S3TKb5pkZrA296Q14csHzYtmg"
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
