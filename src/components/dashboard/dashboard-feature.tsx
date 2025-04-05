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
    "5HgaHg2E2x9tD6yyY4jWcE7gahe1WqwAwcAJXiHqxm81B1qmGU28ri28PQr5NjnaGFGShNf96DS8bHp8LWnNvhVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZrCHGboC176njV78Cbanr7Uk1h383SK7r3wSsbjk92CTfKVf5MzBk2equsEpTM1ZvnwkirQXbRhfVhYNxX34Liu",
  "key1": "FgVemF4suyTsJb3D56mWRzJGiTWtyR5mweBrTEK7X7AU9euu3b6pk1JWotDuYnWupef7KpkM9YpqkWnBpTRAwLc",
  "key2": "3tgnsKhzBTzuxEt7C7rdLBWoKi7Li8GssacyAFowRZdKNLMiahXuu2TyWfreyrXUBM77koWM3V1xjbHmV7GzXhJU",
  "key3": "5QGf4WjE4jFTvioSQJwiqWCNhN5fCVWcHsaJniHuz6uewDLhu2jwoXTMFJPGZPrPZpkVAhTZwYQgzunsTxW5XRF2",
  "key4": "3mEVuAyuZB5ospN85rvTTkoc1L1vKNus7rKaT2LrbJVMgMECTqdkMpApsyaPwUBad7YkrgYYMZyUPbQSsRgomEo2",
  "key5": "5b1bAmzz2bz63ZHsXPEgje7HWFToBQUPA1ytiFZ4xYomhYVwv1NhRgbqSDqQ2Pt64u6JnL2U5aM22vsB77JZ18KK",
  "key6": "668Ps9voXfozP4KVkbBh88hAayRn7ERydUV3gXtpAqrHBZWgiwUmTTobz5g4zUYBWnCLLTicffMXdd77pXvx9r3y",
  "key7": "481gsPFA9gzcKxLQF4hZBDrFK4L9G9BLw5Gur1x2ymCpAWsMWwfBo5xVsW1Pa66w9YMw3D1qK1RGzGfm3bLG74Dh",
  "key8": "dCSdVqHam8eX6dQXaZzgCgM6PA89RgUvw9zaE6tFgAkdK8bRUun2GoioyBygjKp2854eDzUVMSfxDVVtnXwTaG5",
  "key9": "uwHngQk6SsgaNwbCarar1mXgi7NmRRCQRji7vupRckScfQnKhMBQ9ahbUs58uvmKaCq7mTcog3LVTKNAtjjkkgX",
  "key10": "4Cq7Xqma43BKr1yXDxgZycR6ALctK3Zn33ejtTY8Zo26EFaTrdnfsRPVxkryddP8QcDXURSVY83ieSKLDU6B337H",
  "key11": "2xNRk4oHEo3zmLFjf7h7mbRFYnUpgdn8LaYdYpte4vcEDNQhM7gXVfnCDz31s5AezDtuENUcRaQESFQw44B9TPa1",
  "key12": "2YaCJcnAwaXookJUpyGnhBaKnzsd7x7bbd1GbE4ovVrWNG3szGuVxHKQP4rFkJCP7DCqZ8CasqoL7MPvX719YFid",
  "key13": "2bjGCJ4mtuSPZ6q1n2294tTMEvKXZLqjhtEgBWBdXpdSBqrSWiJSStuBwtJMsrjMifvr7jPnfkshh6f7Dt6J1Lgx",
  "key14": "trX2SugdKFdNkT8UZD7rEyTg7WPzNTJXVggZcBsXY395r1uJBEVh85eo9gFUM9UWpLc2Wv8AmKVo1yQgDVd2mYw",
  "key15": "YzBgeF9geVKC5MJ5ndacHTCbovwbMYqQJDi3kJQsbn2cFZEnsbkxZGgCeBoYga1jRH8GkVUXvfidbjEGa73e4S4",
  "key16": "3hvmAo8H6199dWewcFs7YRQV1kCZ7kU7RwumoQQLSiNMhLS6mnmZRP1DEbJLkydsGrWCAeLaowE46jnysmExpArX",
  "key17": "4F85Au6Bk2MRA6VFXt4ZyexZJbtExr31ZgDdnLmevFZ39GrcVGDw7b3eMBBd8acPcySLKtRsQtkQC7oVwvzCrSsw",
  "key18": "5Z1iRk8eF322zehWwykNwo9JemAzo7opCKsgZQfqVQKKdkEWpTHvHrGmSkuA55kczNvxkYnA8Dw9L51aokvrpnGB",
  "key19": "YrWzjjrDwWPaRKSULUePzcCfvVYiu36sb3NNYmXEhe1eErmWYfpocicJedCc9xQVk69tCivY8yKSW5cJrncrC9k",
  "key20": "5SxXRtBvxiQP2ezsZmztGVoXYvvjaZ7x1ZSEYsc98rTw5e5CNMoQjtY63qZEUWshJxFcxiNuxeAmY8EU9odhjQzV",
  "key21": "4jFQJznohgTTNro6LpXfVCAsskWo6tKJvB2PFaWAYcceWZeMGiK63cr7h3uB4yWT6xgTJGH7pj123xJF9axDWa6R",
  "key22": "8Ffdfo2opuZskcUYdjEr2FifyJGRkmBPc6vX4JfGSX31PBE8VpMkCoRgkFgyGaYdEqJGVUVrUt2XTZwpwsch33H",
  "key23": "H2sHgvgHfgfs2SJH7argMbHc2skRebyrez6JY93a8hDPHQndEZNFAozhR5rEo6Xfa2iv6iLm5g3ZLkiwf9akqv1",
  "key24": "3W7K1XWWZAebmy1b7kiwvgzfnuaoeKNki37cGosFMMzb5JXEp8oVrUY3prSwgV7vDAi3fnMFqBMbiEyvMr19g4pY",
  "key25": "4PXu3uXVAx16Bcs6UwRyTjT2vAtrTMpf7zqKBiCaYNA2Fu31TFJgQG2vsXNGXA4FQZ4agaFyjjAkrBodh4xF8T2b",
  "key26": "5TtQnqHgs4Ty34gNrsx9Grz18oDvokXusk6Uz1wmkN68aDzBDA3mLQDcEdB9KTiaEuSguJhUPeo1r74x2b8HpMzA",
  "key27": "CAgWU8gok28Chmjh4R22UAgjVoRvV1XADx4EmPZRe7qo91mMhnqW11bb2UXEc4ebqDvUQHB1FTvSWr9wTXt3YPe",
  "key28": "2rxorgX35Whfv7kPjBvExYC1ssSPP275zQTJj79mgMJSp7PZogFv4tubDHWpFFQdPbj5wGnUUk9yzo7DMDoWmnrq",
  "key29": "5gS127HVhCXiQFqtyFgtLCFa5xpxfC1PQpZDQYnYfUu1kSP34JdJMjqYL2sicQuRCWhR1XvyNn5AoEodktdAPhPQ",
  "key30": "31XcfL77iVW3jKCDfp1uiNAa14TxmpBhRQguw67sANPvGA5RQWzMN2NqeKmhfrZiV2WLhD33KYGr4mQcMCJaqQ9N",
  "key31": "4UfeMnCgwAop9GJaiuEJWfRr3tdKKr588D7KM2MyTvUD4L34JpcDxAVZQGSRpzSgpT1cqXbSSLT7XU1AmmaUa1KW",
  "key32": "5t6dWqLfTmswE8ELSpKk3ns2qRNuVHjaR5kpWkNevrkYjUqyhHzdzbmVSzCyge13MxqLzUSCX6SDbbn7MUkXXYoz",
  "key33": "3FFfuZ2Q7QqzhsQbbYVjTZ3VNeMiuBqi7ghsEHheZAXtYZWDiNCxjBbzxKEUJkkJ8c3j2um6uzfpb5j6r33QmVBu",
  "key34": "KGh14dukdtuNT8soRvP7Lpi5Tn4uBXNp2hGrDKRxt9x5JdynXvX6frYCLVeKC9EmiheUAvMxhuFdZYtR9BoDm5X",
  "key35": "23CT7iQ8b5ob6HJxXCssiAogE3RjmzeHzMnmVinUPLxuw7oKc7nwXKUpYFUz1YUfoEbrhBmZvBQnEy6bX4vnXUod",
  "key36": "46tFFzgyPVX97Vx6QCvAzKz1b8Tuqr6NaR2jD9eqWiZ33RhuecxVSXwD2tHFP5KnYrUZiBpiDtXYfbfZnAUaRnuU"
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
