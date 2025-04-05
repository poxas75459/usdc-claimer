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
    "3rS65e9eivRVafYSQKcBQMtBe2aLDpuNBFwtPSgD9XqeKwYKj4ojEacW5roQQ8QnUN56Fo7ocFTD99aLTMXUWW3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qV6c9dc7udDdbwgQmdHNbHtjyzHJZaSG7t1hHdryvsogZ1P2uJkqzu2YtZPcFkt1g6GbYCz9Gb6okDSm7xQcCay",
  "key1": "5CrbvViwnZNNKSN1N8osa9bho51cysXiSxaSmRKgnrDgSP2nbYZcxZ4b1XuyA74J9bWZEL3S8TUT9vcXdoUvijPW",
  "key2": "ZCTyisALA3bCJtKA2fR9AUthXfrnYtndE6hEj7k1ihRC98m2PHLrZMf7rxNQaQLTrRQW5jQwu8dUkewZBA63inH",
  "key3": "5UQWeRXrUoYyz9QZyPozYZmSHP93FMFK3c5ifcMnwDUqYPdz75J3eoYjsRAaJ1Z7KRDC3R6WiKVN2oqRsQHDt7Do",
  "key4": "5h6gRZhFtNKdDJYKNivGJbHJ9q6CwQnTa3EuWR9k49JnknquNQDFAKP2sZGGEdBTkDEhzsg9JsJ7Css8Z6BcaZLh",
  "key5": "5LYEpqQBKc9wWRzYvNcET7rNPUdRU3QfUxqyMP32TGEMqGEQXUWvh1gUBWFuGKod7rFYKcWtbezoj9ph3LTbaMVp",
  "key6": "54EgHpEpZFubQqmc8aB9bTHJwcmL5ZnvbgrbCcmso1z9csoZpUKb9EazGfcA1E6ydEm69KE9WwvBx6fVXEC4ZQkb",
  "key7": "38LJXuG9ERsk6zFpu1maNmpcdf69TZxuwg1YatBCH2t52WMdf1o4gPx7wxnZ2eSMKavowa8G5vzE2bvPAK8cghs8",
  "key8": "5Q9Aw1qFL7L1TNRvAt5FPkjzSwnq4frzLQeJJi1jHdMTemAj9udqQzjiKM6R3zcC7PR8P3tXXZhwBPLVAGrV76iS",
  "key9": "2qc39obd3uHLHh76xtavLAHKmdNzjJMBxBvaQtjVL69LwKXie4tLqNccRFbd6kQv9xTVoaewGGJqTgKZGV9UcLtK",
  "key10": "1v4iCdsv89wcgvXJZ5Jf7zA36ZchghHwLBPoWc6Q4kapPnqhRA6Nth939K6MMgkRKBxqs1QRDzDkFSTJAPERwYR",
  "key11": "2K6zuBKtVdUjH3W7DKqS7zsHem7zaq7HdgW5Vi4dMXCXmrxq2LYKnqPb1Uw57xNMp5qGbQDREzv1sxsyjLJmdqwR",
  "key12": "2RXsNEM23SSDhfTKaW2kko2nc8nNiYohQHsVRAsfo7pZtgKoeymVqCsNfCJHLmPpGez3CLBGP7rkWwBfKsm2pgta",
  "key13": "4XCzTD2EpSjQctHdKq1oKnGJd7umxPk12n15TNJ4JjZc2NHEhnYcMvxqyRFJLggKpYSExnMFxsaaeMejcNucX9fL",
  "key14": "2wwr8yoNb2YMmG8dzoBqn7jG9vJuDbmFm3VB842YFxFA8NhP4LQ83TwkvgQhB3JaQKEL9HD5i6LLMgbEwAhTwpns",
  "key15": "2QsNKa1NmW9pH3TddxBKGGoUet6jV79KArYfp7EFoHavM4vWveivahV3aWbvzKP8rqED57sn7MmuLxRZ6NZw5vmY",
  "key16": "56jn5TRBe21DBobbwFKaUu5Enzv9n4pZjBCSpdthw1BtGE1U92vxbjEqAmuAfJXotiK9JZPvT5myZwRgVhJs5wiK",
  "key17": "4RGkHa86yU2iyNHhU8ALbEMSTodY84XuAPfLtnFP81rQ24hQHWbd1ZSzJtj4xHKeDGjptjG5RDBbmPZRFFgvp6W4",
  "key18": "zGWyNAk53Le3B3ha4ASwsELYYaq2nHiU82tLFAh8MPT7hR5u5mE9mpKXdkcArV5ay44Xb6pkYCUjVpDto4RVXAh",
  "key19": "PcB5UaExSDZn5UFCo7Ekdgdx2i6gBEDvNjPzBwFmNGZPxbWQ14GyDExDaciq53BYV9cs9uASk62brd82Pn5Xpf4",
  "key20": "4DCUAzTYtW1suTU8rJVgP4KmrmjHNfm7tJ4CXB3MK7CCEVX46KcFTr8Vw38WEPjUpqpw4ziVchGWSriCnXDEmnQd",
  "key21": "3kmxbddysWwiakAfQf7i3sfeHmFBux1x2dovJs2jtV2FtCfR4pC9XdQ2aAHc9fhm7e55rMocopt2vMswCHxs4Qgo",
  "key22": "8XKCaEAf3TgFQLe2hqNFjjSGW5jThTyeQxXSZoTHGGgjTBo6feXJCszLkQMm7H46L1paHrj2uJN2f9vPSH7ebzY",
  "key23": "5DMUi1XdvMtNFkpcE6TWCMyAAr2F76yWUNKivmhj7gSBaNTnMb8Tg6pjnjzWEGxdcx5XBUZb5QFiwNvrURPYkKFR",
  "key24": "3CURg548izz7D89Rbj9hsYH378GDwPRgPJxXWZqcZKSGXhF8qSeXaK3TjNf5xU8Ngcvg5CCzGfgCia2uNECmQs9s",
  "key25": "2RS2ts1Jznaq5WqGicnLqL6tKeC9n2xFccZb5nTNXypsLXUQmB5aCp1UVR4QnTcCKCgfiDaRdADEDsGetYAGAo2v",
  "key26": "4mwTp59y9gfbRRmY26qwsHQmhWtAWFR8EmxuAP4Rvv9bPc3gdEFXDSi1oYW31KM5p49VWHx4NVdyUvHmsD3FkEQV",
  "key27": "4x47C2k21Stx6Rx8UeCAdMB329G955STRVrGFaCWuscGW1XnagG9q6PFbGokefm21orBgfBbGDsUag2PpsJfaBDT",
  "key28": "2EaJs6JgVEMx2teUsX6Avs8oeJFksjfYu1cbw7jGDGAa9znZ3pxzghsEWpnPRJw9s45ZDJobCjSExv3iB2V2sHZ4",
  "key29": "3zxXs4D1yQ64PWGdPKtDmcwTZdM7YftYqQ5vrZ4gw6WGoUNHjwrPWQfzkeJuCAqmN73otVUps1zaVydK99mqQThY",
  "key30": "4qDojZGpiTjqKM9PtM9ej3Gbb8tStQ6iT3e2iryxG5StaRCXVrF7ao5xVPsqDYgYrAKshk7UA8AP5ZPRFABMWSPk",
  "key31": "4uxFFHV88nF2hfFNP38C3LxQ6okqNmawfJqeYEqWFAgTUQsTFx3LwBWws9mvdqK2snjP96uix4ajQhNQ98n9j42",
  "key32": "2Xav1kc1xKMMqbgveupGiPMfZYupFnEgRApLqTUvQV3KHBPwwo19r47BsXN5wV3iVJj16unSM4kyf8iPbKsfgHfk",
  "key33": "57EyodbrCDGyA41yNYfuyYPFq3bu958t45cfUbjYq6wrWj2QZG2EEM94eWJZx27Nj7iPtapcTUiiH764LeQJUUCs",
  "key34": "4uCkkKUc7Q9pLbaov1waZsY9NpJgGjquKWK2Fqq4UuCMti2oNwYPFa8PCCmZQZ6mjZgTP5hP6yFMZCRg9fHdkDnZ",
  "key35": "2yVVCRs4oGM9d2UAM4jwc4ubPe745tH1W5mxUEHF7cRjmmj4Wsfweh8TUoufvqhXje5tvFLZqBducrXptf4beH8t",
  "key36": "yJpaiDuLzjVMGHizA6uPK474g3ovfPmfbXYjNUR5uuaA4k4bo8wsZVmt1EVvSozNdBpxd6ixT1zGY9T2y7p6jNQ",
  "key37": "3hiRm2rdp3aJAMA8aNGjZXtkpAtu3YzGKi6UMX7QFvW5jjXyKGEqP9jWHHDr6BjifpRkdLo5Spzm9cmKbcNcAcYE",
  "key38": "oBhfTg2ComeCTCraTxwybp6WYWMuXQFfk3iUmgodBhTGjE9kcnPFFSsmajtT2kUZvC7DME9FMor6Bw24fWeiWdf",
  "key39": "51y6sfFLaKKD51TeNzGZcveBj2i5TEWnhPBvyFjGssnJrxvG2fAqUhGiDphEJkzdx2Qtmyht1mUSy6sH1JQfGCdB",
  "key40": "azrUGjfHgtHVHHnjYzy9PARfJfCWhTSpDFzPufetypx48vLMR5p44TK94feEV3iBvFdHX6cqUmzD5K2k8CEwcxq"
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
