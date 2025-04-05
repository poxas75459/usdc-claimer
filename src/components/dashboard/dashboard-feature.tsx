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
    "2r9yHcy25r4KCeHu5UXMeHa2bcNm2qeUW1BBi6BJ25bQicc9vJMAXoe9jJwXA3Kp9ndKtQbLFsro6qFS9q8V26os"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kPcNkMHj1cVLEamM5T2nPTqWFcJhr4mb14je3nkGRmJKG4dKGcJ8L7Frr7FMkzjuFBgXE78TnobHdhSq7rwrRz",
  "key1": "49sE3L2WwukbboQA2VgwNEFoVcVJXiQGJRBxDJSnku5wM1dXd1LBnFystKLev1NyEwNS37yTzA2zKUkort6TRRLr",
  "key2": "5Q6NB2GqMgEsfTLGVt7acz3RQXzdw8SipeFyDayub5R3aww1Pdt17VNVMpXM9cb1UUmWo31Z1CD8NWk83SoWNsfs",
  "key3": "3PDyew2KCZt6wefjih3cCNPD7vjCwCzksRT5JgpTRjEhZktLAZ5pW1pbgucLAUyB1eviyE8pUh7KoijSiM6WJnkJ",
  "key4": "2YZmHnVfin2JEKqqXSB38rJC3XQNADxBgcQhhHaDi4b1W7YyjJNAajURZn1VaAjbps1GCNKemuu8GNMhGpEgrT6a",
  "key5": "XMTxCjYXfiMvG38x37NfsesPNzNar2dHhMXPsSYXcwHu1gxAYmR6vcWfHWPShBhrywyECdw6UgpHjjtgvc9sCtJ",
  "key6": "3yQX6Aiy1p3ujRXcDyqyRUK7QrdaZTBnDeKrVVeekDpQSdZFaHoK6uBbzPh3ehNvstA773bPU5pVvEjwFWwKKwuj",
  "key7": "2ikNKLU3Nmzuu3mzKypB7jxdtjpAt74wKX4JbRMoCYt1Z6tTUkoc7HBuHXFThHwVJ4PrMXqWAesDyqoLzRNkeGeS",
  "key8": "2vhNmV4D7ndYhj6seVQpDQjfYoH2pkrBuUPoLA96oGLz886khmgz3G9m9FZDRo1Jh9xsigHecbFJ5sU5bjF17RWt",
  "key9": "SMKocSiE9bRxptW4TQkh3dviXi37YmhQZowjW91yvgs1Fbk4tmED1G98mTWinQvQQQVNpvBAk1xnoMhaWuryZer",
  "key10": "5yEPrrSC61wVsgHmiB6zK4dbJW24iwnMCDwvXyGRAvRsKutNsvZUghpQ5X1Zig3HxyaxUsyhPk2Hw8wQD9cGMDgk",
  "key11": "39DDSEn2VUWrCqj9csKcAxbiknnqTBmsimC3SXickAQT7D1EGhjCDDcbqrk8jzbcmVX3EwSaShj5VySAg6rE3LyD",
  "key12": "3Fxi6Gxgmz1ftd3tdnnborRNh4GGnWFSzBZcnjBgKjCkvKzVZxbf7uvsQY4ReqCicgqTTEspQaDQoQij4R1YqzpV",
  "key13": "Yc4rbK2KFo8Etq2kCsCtuZ28VLJrnPy2oq3rZtK3DKnKdAeVqaSdaTHas4TPUEANvSu92afPMakvnQiMVgJCorN",
  "key14": "4f9SepEHxmW7ZeUtSJscHifnMPg6HXkuY4qhcFs8MfxnmX6ndFmuNQB1r2HTHFuPdKBMMF9td2Tr23sjpoxZ1X13",
  "key15": "wMygHSUTZNrs3SnaPJJdPUwXxoxjTEFc9qiwQb5HXA2ca6g736NWnYSrY35EwZaYYnPnQhMuafG8YmMBEcbCPiD",
  "key16": "2pEWv7vKo4FTWjf76VXn5RbJdE64suNMjuczaxHj8rw9TxWN1gTsrCMiWdnLMtT1j5sg2T4hnQToWFNyZX6675sn",
  "key17": "3Hsk89AKagwYfMHMHuXLsJd3hhXtm3633CHdQu9QxKZpL3GehmcAhVzT1UNHPb2TQ9KXRV2cVPxxp6yAshfCUZLx",
  "key18": "S34VVMFtL2VqxK5DWT5EqpXxo8jcheSKM4gDLP4xfFinA9TWtUpdKcPU6ifS6Tq9hK8VejQ71XoBnt4U1zfbNaC",
  "key19": "4ZSudwYHQLcrsVJEmCHycr5CAYTpNy46Pmyc1xKF9SyAhC4KQxAF485hVC2AkU25rrrnS3ujvkQ21CdhcJTkh9or",
  "key20": "3VSCqpjBL7Vd5tFLfYsgGjheSiVSqPyRvCqHckadNXLtL19s6Pqy54abjAhqPHwk3cDiZQU63B5RjacW2nq4w4Mb",
  "key21": "3dHA8HQ8HfrK38EV8CPtQmLRXb8GTj4hahUTZ3XF4tYdCzog345ri54MU1EDUCxK6RQRZ4RwpsJtgHVKVVdfZ2M7",
  "key22": "5VxG7uYjSS956GS3LGbVFpaDW639ifHmn4mJYGTWqzvYC7pKzsPDZS9kBUixKP3jMaxeFXNP5SNCGqHx4Vt9FjTm",
  "key23": "ECesSgQPx6391XsSwriXxocKZoahhyS6rRhT9CoQh2Q3pJhYArySr6DNBuC7CuC4tMZdB6cLQ6ma7d8SjJJGF81",
  "key24": "5HwSqTkWPemy9rnS2VvNztGL1FpifTG6Vox9Dr6txecvG61jhCHsN5c3G9bVc3xYqJYYAsNxYrN9jKfpBFsH4Ppv",
  "key25": "s1acHAFP2DzjpfW4pLsNqVL1Eu6xTeppFwYJggEKR6GH7mir6x4n7otu4XsQAuo13FDBGfr1Cqj56tWrCokP4Jz",
  "key26": "4jBg9TLwQGpY2etsZJCVwARrefBPFFFeR82M6srEaDegwyexMuw6GNv6uAxGJw7oUqLiPCJWJe5mjWT3XgwotvZe",
  "key27": "3vA9r5gUqWe4DNFsi5VqbEiQLXKSTSZLKf3NHVSWndusBtbAHnNAnSdxRsh1x73AZNXGRtfu4Y8a82XLUB2RvdXE",
  "key28": "4fsqUQMppiaHAmHhBDzSiiVDzKsFTMgsjGmpkdazbnzteZKoxD2aPv7SVaF7hvd9vNLsdht964SsxBGn9ErVJrw9"
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
