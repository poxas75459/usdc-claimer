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
    "5DEjJn7udKsyeaNQF1awzjRhxtDbm3zu4HZf6gPHYW44YUrneP5JXMCmdhoj95raJF21hLkdzLZ4b2Bds2SceFGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B3XXGBzpKCJAUP7kaUwxmMSuLjcCjiMNonaeDxraquJwwiTbGpsUBYfg4H8BX7guMuy4zxDePrfLqNP4QqgnMDN",
  "key1": "fyWEs11ittu9MbAUyFmTkR7iksJmVkC2df46RnnaBvRgyKZb9s5aHsfPi74MsWjiauZiHnTVyYkwQdWkmPrzrpM",
  "key2": "5fBCzh7iAuTwcPTvp8moAqdAcp1TqCZrJfPh3DG42uXBi996mqa3RmbnXiUq5eHsyEM5ByCizLdswMZiA3Us5UZo",
  "key3": "5AoajsvMDAL5BKWBn4KJj4k67cRhLMKh7y1hxwvT7mkVNMfE4xZXQraVWnzZdQWhS8B7VYXiiXH8JCmRNZjnTNxx",
  "key4": "3oyWUufPtLin5QW5bTeEKik5nd5K4WrudskpM1LWxzTuaYqYVfp3kEw5x4yecamRXuSXTFd92XeFE8QvrwjWiQre",
  "key5": "Z864oCCrwECU32rhxLBtp913Kk6KzuzNBuNqQaDLYmb63vATjCK3DsDa5BZhniUb2kUyFqq4BjaLP6fH1MgwdCQ",
  "key6": "3fjYGqXYuTdN2RjU6Fa3SNkkUAYTGR8vztmKDamcp82aDFXhZfCGsVRFSzu6bS79dSMs9GmfXbmsmXK74KND9J4Z",
  "key7": "FAG6CJY8Q7NSJsk3kTdem53uEaigTsjJQZXYMUWPbtjZup66ayyCFENWqXKy5bc1T35JTALTLjweJ5TWEyR4b8q",
  "key8": "638mQSRrWYz9xyGSKhcyUB6Kx1SmLnSGZFeYt5ffGRQRcbretLWPLiJcLtzZqSR1kFYU9ijkYZny2PpuqwFjeTYr",
  "key9": "39JXryNuQz31PMRdbFta3bo4UTteFsMDhJRwRrqMVySVAJyVRVcfr9PWJvrBUduancpif4EcdG2GfGhFdyTSPRQo",
  "key10": "Lhba3SA64VthxorFYJLcboPFFSZcB8zUJ1Vg48BZGNDCrGqEYvjyGv1SiejpfJwDNan8ZwxFRJcrTzUZi27BTwH",
  "key11": "5Zhq65N9g5J3wBDxx8z223D1LycwtBhikYTeccoXfF8MezAaaWH1QcurVCj6ztqHeZdTb2emm7ctTusS4iLCHsmo",
  "key12": "2Zxn1C93oFtfda4FPKcMukyEsVkrjbS4cCMeLpLnEJo26LqCzSnZSD8t4DNqLiRMV9EuZrQ5tjYB5yoqanLFBazz",
  "key13": "3QNvqH2vojMpgXhSvLkjcFnebG5Mgwirc3vWdRma5PyXqHvGQ4KEJs6D6SLpvV8GSCJDPX5WBJSimHumD4N8sXjL",
  "key14": "VKGkWqKCSNrdUJb1sKD3uEWszUwrvEwQY4tExFde4phbBdRq4jtAtS8HGb3zxxffT1bdA8Px4o26fcZsEKvRCfc",
  "key15": "4roj8mDSJEiKvjLKA8Ex5TvwkwK6x51vXCGC62joVmhwZLX6nx896KLb2e6dzpZta8ipo7K6Ww4QqhNBFrrbu4qY",
  "key16": "5m1rEBv6sSRRcSSPakuaCDBBeGwG8dKW1DR38kfHBqZ3s9ff58fqApWBT4z75JbBzAfYxc4JQoEkfmcAMYuTt6jE",
  "key17": "3qy8R7GLXs3nWdJ2z1mAMNnxQeiq5C7RtRT4U6yLVQwUzhWGqAxARU4VnGPPjcpCU5tbKi7efWQrCXEbUZpe5Xyd",
  "key18": "5m498N1TU4yeebth7oXrxhmTB85YZuj1gA9cVMkaJF5VBinWUuGQ9ty7g8teRjEsQS2Si9xFpijeWWnRFzTCRMgt",
  "key19": "4fikku9JdfzhMMmmRojfPQaPMVFhKEFJbt5keBT5V8we5samabbBw9UXL7wBPDKeHZV2RrLJfD1mZTDwAR8GsUeT",
  "key20": "sgNfTDHdz1xT4LUCrrsokTZukuFAq7vB3KgPpZTDbeKF9izzrhgokxwNzG6pwm4ELn2AD2TESncf5xsWBrNFQSW",
  "key21": "2mde5LCccqUU8oY7zg2yAeiNmKPkWWgDerJ5KSJtWJQAePpEQJphvqGfp7ev1fosPe4LhLWDVNqPJ54DCNrdSfdk",
  "key22": "345Fz1SMcu196VDrhmoQU4BY8U8mjhQxaEzJyoUne9pshACYXRtwEzKc5mM9ocRGpa3XsjdDb4Vs7eonUxz7iQet",
  "key23": "5TzGmuRUqPZhXnDfDxU4ZGd8XfrB1m2YcGJcHhXGHQWcacA5hdVzwma8XXUPxzKy9i2mH5JQuTeJoVw3jQ1dPscH",
  "key24": "HoUuMLRATWou129H6YzSMZsHjStAiFSdpYirsqY9SN9S6Z57n3yxniMv6H4t2XEMjuvYqahHZFgZLfA8TBDf6Ez",
  "key25": "NAwbgMYPEDdBWsdeUyPJkZr3YW56SQcQJqgWGts7cX7xVQSvHnDCxN3VA3Y9ky78QPrLpaBRfetEreaJaHAB2ku",
  "key26": "qKDm8Bt4PoP7UZ482SWCW3FHc5sokkTjDeNVBgwraiZ8yT3zQMiswVMy1wEunT2285P3QLTXbHSukXmPjRJ67JZ",
  "key27": "ioDZcoDmEb1e6HVmmd8LywJHXBUnydAEhGW1n9G3b2kpo9jWYtE3wrWGMCvTxPDE3m2qrdCfJhf7qv9GMYFMi2Z",
  "key28": "agr8HeaLtxU3vMNMFmdbryzSr5K2da4fwbEzyEqEUWQQZSD9duquU3Wk9FdcFJMW335FesLSbSYhEgDvZsPtnDC",
  "key29": "YcVbAdzjFht8ENjdiLqzjKzzf6KMnbR5ipthZaKuSmSSh1p4YAGcNpW4Ym3aLhE4omeisMcugz7jkCB58xg1tPZ",
  "key30": "3L7zmTAZaGGXqsBfEwHSnFGhnQUj8jhBH9QfNpsmyGQmEGFgVbr2EZMy7k5vGWyMZYwkXSMQvBNB35tYYuVDhf1J",
  "key31": "YP4rTe8R38yeKW1GHoVaKfvX4PfyxssF7MMKtd7SgEqWvTouCWkmbtdLGQdMfDKjf7gPnDgxtwAEY8y8aNzXutK",
  "key32": "2785gyPiirrEw95jCx9nL8G96XW6F5G752pHgeG5CnitUfhr23dwaUigzfubaMbMtLV6tqR7P3AFbkGNuN6gWT3V",
  "key33": "3Du1NGiKq9Nn9TVkM9f3yuXCjh86m2xpb235578aQY1HYPHRRhz94te2Tr1iJMQ2mDPwuVzLK7viCmZeMQAvppdu",
  "key34": "65ugDHdXsK2MJGqJk1bmE6ejGWcXmo9A5LthrGoh1KCY8GNjYSjw1YjsGto4qZiVcK4MpitXJQtFWGPQoFRUsoHd",
  "key35": "313azM7AvJw3ABtnT8fnVii7svWzLjwFpPWT4Vi27TwYPmCZGUn5uZGDEvQdWWgK8oHgHAT9TcF7iyam3QiGHYWj"
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
