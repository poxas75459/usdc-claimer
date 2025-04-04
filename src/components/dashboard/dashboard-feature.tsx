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
    "4PKeV6K1gh1TS8p7cNjhNkERcYRoYppZ7AM6aAcNxuE2STo1wsZXzDk9JUaLvqC7hxohhs7Wwv29ATYetA3x13pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KKbTXAfSNpAdf4xjajjeFpRziuhAJdW7yZ7z2f9xq3kG89z6rkAkRwcQPukjCr9YC3bgGicDn5qVboaVLMzgWc6",
  "key1": "67Y2CcmiSacsxqyKAmVNZC3funWQ1xMCpBWt6oxzp3JxrWJEyB3aGPx5QhJxKcts8uLNN9bcoSU2YP1s6KqWiHua",
  "key2": "5J6Ke7mfb4Jmd4TUfFVsJ1oWcdiVEobehsT5wmTLkXLzsPNrecjybgsoSncAGH5iUmUatTsc2mL7NgYzqU5p2sbd",
  "key3": "dEXmpW16LoZDoxKGFxt1pLte4sF5bA1fRKGtdvaBLViZS4uy75G8gNVjMnHWWw2AcUsgpkVQGD9DAt2sZXEWUi5",
  "key4": "AxhbBEkAXacGDhjSfAEigJawTV4fDDmD8WKntAMFm6brotJi72cEeXdDjFrGMNeFdytjhaYPzX86UkqAUiXiukA",
  "key5": "2dV85sqrMjin9ADgJ3LL7fFTTzocRg4NpHRPXGuZ5WSzCs5bHNzvrWQHYosSAo8tKpAErkuq95MvhqFPY7eEpFuK",
  "key6": "2yHXm8aq6GwvAHrTfiN1W131LWo4b2c6y6E3TUDTmJL3WwtURNDDPAyg4WnyAxztSV2ewDxBR5cqbHFr7A4zaKrU",
  "key7": "524rm99SN5XU7iesGm927z4MZVkrmrGYJnb8rna9kHgZLRZwRuAB98H7QEyLoNzftjgL44qoyx7XpuxWpiHKr7cC",
  "key8": "44tKDub41EjDFp21mTUv9gbpUisJLsJaxzB9YECyfrhqFgPpWyJ93XWNC3EgEVBFvsGRvMghGtsYzyCjdVFUG75M",
  "key9": "2aQM6tvz7AFVkAcChpzPH1ZJ2vnswd2N45XExHH5PkfQtHuuvxDFvgmnR9ouRbDm4Dgq9HB73SDNWY94SbMBfnc6",
  "key10": "5XzXdmkXppGXs7YwaWBhXn89gJXxfwRKNEorrtnb8PDA36vNbMrFFCPduowncJiDqsSGSDGxTHdNAYjmS7oaTc29",
  "key11": "PYxSscq7n6HoFBbfJbnzHTTPwZUSXfaK4VTyPGeeiG65ozdgxkgbvREaswK8W4G2sBgKmLvKf6Y7xfsAj8zEmyv",
  "key12": "3z1EikC9e5BuLPerRJkNTvmE4SpEsGQNLvyF2LUV6xUXyz4wGfwuqFoqCPwCbEHokAy3yzqiB4AkaLXJLB24QAi5",
  "key13": "4ekbw7NobrNd865RsSG7CKGVt1GS81tH7nZMPVxLYALeFPB73YtLquhjmQRHeCuvQvUmAbJtf1pB4bEkLhbVLj1y",
  "key14": "8JxT48CppZ1pNpE7NsfzwfweP91KAWqySifNjvhz4x81mPBX9BdhuXJ8gRFtxvz8qY6zJqdHWuag9Sk1zYwxRWT",
  "key15": "gccnYFAQgfozfnbs2W8d1oMUMep9F2c1UiFWKjJhuAzyWF9aYswDviVeMu3urpcbabg4hzTes1frULMaHnoGHWm",
  "key16": "3hGtNnbonGsCbH1dMZ84czJ5tEfcY2kLYGx9kCxpySviv3gUN22Gxu1ZNYvcNcRickZMFncdF2WnGs2GNP9BMF9V",
  "key17": "2U6zhJVJ7zVCMYAunmUFi2PxSWMsCa2H9dnfUBePnNQJTUFyRjM7Q4nqi7VPsPXjTUzYNy9iSpxee2jMLuRK3jg9",
  "key18": "52pmfv3FFJuzRRLD9HcBp4hsMdMT6S1qzAs8P2WecswyHnz9fj1zLoYJrykAgiWiT6GCuUTEiWB3bJynDEeV2mxo",
  "key19": "21NANEWRf8R51BnWgFMsGR9V4JZXPPXx26jgLqxM6nMGs4oiz3n8m33T3bJyY1zz8tZT2LKg5sDLvWagcYSFGtDC",
  "key20": "5gB9wzXtj34zaWtke12N6yMtqFCuu8Ro3WGmj2DrQG6h8QDtQw8s439Rfyepii4M8BP2JR89HnCvCwJKWWfoBXSZ",
  "key21": "zm9KruKpmmicV7uV6DxMwXzdnNMUFLSaKLuV7HLmM9tZYJpmrmRLn3j2B99wX82Z9CHVSADLBJXPUeHJXqpLNe5",
  "key22": "2zZEcsgWpmLkSg5z4fQGN1xkDzoAP2WSWMcZq1esn7TzFAzUgWgLG6htRvXWr44A64XF3WBFCHNxs89CPfj41Bsz",
  "key23": "31KtUQE52ob693NnX3HPSNuQ9pKYXX4fZtYR9rKihWA2wSpVFJD9tdHd2ubQU4RMhDBm16RJvwxUuqWNTJpL3koi",
  "key24": "3HMhs9FA79hL7M1EwHSzXTXFHjsuahp2A72Xet9enPua6d6GGLMtFf9wYd8cRMJnDXDf5Z61mRuMJ61wGyifdJK2",
  "key25": "2JprF82jHxPSr4DjbcViCPZJgssqWvHUtJ31Q3hfSCVA1MNxZgyMmYtHuJjpUkd74h83Q3aFCVFM2ctUj5yG3JMg",
  "key26": "34yRn3GsjEKaWWBHq2o32R3kidL6DGn5BUFAMHzsQt6CmReU3kSPHJ5xff45wUXCsdnp7Qr7cvqoSK53t2oCTnhw",
  "key27": "3PQ9AaePFPDocE5NJKnVZMDbnw5FctdBfdG7HXmECxtqoZ6mAyZGU4fGTF7dZqE6bjhUZX99N1D8z4BaRgSrJqpe",
  "key28": "5e8ob5MhgL1TqDV2xpipgZe4EeaZPkmz1Y8FQM6KN2mKGKB8Wen1jZigsgCJP5Y8nCFGoQZ9DfuBznBAtY1tuTrx",
  "key29": "3kEAj6zQ21D7BhYEzN7V15XHVTnRVFzSagmv4t5b5QgQibZuwoGneCLqqSLuLH3ZSAWeTaRfA4NfW4ikwvXnfgrB",
  "key30": "3S7wnX65cfVQGXhEyEXu8UXUasU6DiW8CN1is1xYtDsfegmiuR19byPAzv7ghHGYjBHecQPpXicjFfbvszVuK8Wr",
  "key31": "8fMXX6ye51GUefi8dFU5p8dUVnieEjAQDedVqrmLvLrz1rr9EL5DYFD4LU6T2qPTxvPTnr6hdjss4YZCRXtKFjw",
  "key32": "2BvPyntALMZzEPbp1eApfBcoeR4QRxEc8uJvrA2Yz4ZEFcosvF1AszA5ezE7det6fb5c5sCae5z9LEdx5GK58J8p",
  "key33": "43hYyx3iA7JyFpNTyhzY3gAsT7uRt9u35jaAmJpybMhS72SbiCg3C44PKbYUJNwPXtbrC6NN5FF5LduJ1q8mLK18",
  "key34": "2crJK8PJuRSQ3yCSv81KT8jqHePdP8E2cJefZLkix6GUwab7W94CqPnLKJbr9NVnMQWWpR2gUMBs6MjLetX9uWee",
  "key35": "4xp38EhohshntAXJiUS9mBMpEMpBZSK4UaRAiiqS61fFrPNqFJm8JhkaFpEj3Kegu9eVS5P58mjTnwir3F37Keg1",
  "key36": "33qAeUXETST3aXFTpjteteuH9y4SxeRk7LRHbJspCpJRqcLgPuNszw6YDyfwARoyeY6RPpcbPJg1reAQiVerHxpZ",
  "key37": "5jVeFR3q7hn3ycs6S7HuaXvZ6aq5kGQg2FNfdoLd5RJPTwJUmjfF5ECC1bSbNTv3eQSsdVuecJTRCcPdxSuq9W6s",
  "key38": "4heUHnQor28dt6zx8tnMyTtWNGvfFWTj15e4HBn13ZFL9sccLHo55F1YG9L79T2kHXzpZ6KCHRTTRZkDJtx2PqFn",
  "key39": "2pUtP6PVBtyQo8Pv4Q7SQBf4zuThWwcVYYQecvZC8sDgd1epCYqp1bWo2hcBHRX7fZRbujQV3Rk5KZ9Qz3NuqpFU",
  "key40": "31mbuDF2QKzcrHSZpEaGq2kk9bSsr631ERNvLaZA77bw6R18mqXSdUvUdyQCfWPeZ1r5gjpBcrCKotJtwZwtCimj",
  "key41": "PSDqW7cKJoJFSmoF21MmZfKPPPLPpStYQhxUH326RXBby7n7S6Usv5c6KZfNjZBTj3WNAftE4XYW2t8HfJzas6F",
  "key42": "qqTCbkreDg4ZXFanzMACtsihHT12KfizpMhgckQdB4h22uMyzdX4cTViYL4rVkdkwfHJshHf5WoEhXB257dfVvY",
  "key43": "67YcNzkJLkB1gpJWEFXM1hwgewLwFZc1AbTwJvAJj12Q8GdfTEs4R1efaMinyN2om17tuK8rjNXqRcaczTvsTT73",
  "key44": "54ZLWSpBbqnVcwES2fvukaSPaP1Ziset6ck7razGginE2EnRom3ryjogzHatbk1zPzByr1hpXottJ58HFAyMHYYT",
  "key45": "UkndxLp8JS1xYtYJwD1yJVZKeBF193GXjRAn4n5Xj72sp5uuc56EFrqxszK3uqyPPiSb68jB3nwqTijwutNjpaF",
  "key46": "4qDR5UzR9X2SUUPu8ykWyujkzyj6SNjwJNX8bVFiHHv9FtAix9gfWFjJDZwAFjQbCxey2GYHFzeDLw6ws2UopsYd"
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
