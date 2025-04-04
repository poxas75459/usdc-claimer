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
    "5uMHGNKc9ZF1X3yzhMGwtkksTk9DgvKybcHTmUT2fPsZCwWHiVFfLuwguZXDTmHUrvZ84kUrNy5N24iRK9TdYqnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3owFs65JzN7tmj2Kxa7A2Uwr1CW4CZKwtNj2vmGpcjNyopRMZnrdD5W7f2r78qj6xvz7DUSMasi2hErgtoNkf26S",
  "key1": "4ha2Err9JD7YPmVH7qmfDorMHyKJZieZB5MrzahAKPtkuNMdX5LjRmSkAM1YLDJT3eqso9tW1Vy4ZnPfGVUGty2A",
  "key2": "5YVkWF6yyi5mk2d9yPa5rK9jnCXFMTYYgTVgZQdLNcKo1mtvFA2fpERKJmMfzbnwCukubBG8BGuC5WRxDFiZU6n6",
  "key3": "x3Vh2fFfithhEfR9AjNk1MMLU2gxzYF6ds2SKtRq9QqYwCbGX8Eh8ZcWGjAwghuPTEGzva2bBDsDpGDFUHSuomt",
  "key4": "4pHkEkgrugs8xe7NTSihimGLBYQgqKE97wDi1iKM9yLTkhpTWnxbXtC5e6XcnWMSKJoZLREeytJjHmb9h9ET8AVa",
  "key5": "27TmWaWgEVXHVQEYRmWpvYFxfAtbifxwVa85RcvpU7MAW48wsHi1tHW4BRvwhW86TvgSG2YF2CB8PmHPsVAbkZon",
  "key6": "dAwyP7UPj3ZTWbA13agvqS4x4VwNZhJ56Fj2szLJoxyoTMJVUEPUuGFVs1JdXdbFYiixJqmZNZaCdPpCopHrby8",
  "key7": "4KJTCyBgbAb7zuwasheqYiUZx5ZVBuwSM9MDWXy8yyV3MP411g4YyTSbkuwWcqJQqr51oyHhR4SyxE6N3xbVRGGG",
  "key8": "4ccbhN1v9Gs8E8YtiSTvZ8GsSPHFNyQpuTk6kG55KWuzoq6rqkbXsLap2eQH78d6RbvB5iBu46QC8Hqyr5Dnv6ds",
  "key9": "3it7DAcs1G9FQjFBwsho2Vq2epJNVbnm9B9rRCZy1dXGzEjD4qPpt5sGDS3s5s6TLSBqt8rmhYXCCNeQqkBER5km",
  "key10": "2fknUF8V7YgWRegVfs1gHGEfgGmqvQB93dcBQ9HtVRM9Fs1yBWfeazQP2jkHXESodXgF2DTRLT5xj5cyiq6zQZmd",
  "key11": "5YVaGFwixKnpUivY9ceW21zLJgNywyqwUUu9tFy7avP6KUi21awW61qaUn65R8WHtYTzBaBKqq28fztLGcWUwVoJ",
  "key12": "2vEn4txfzcgqXfSkWM36dna6FZXmsRLkLcrCqR3BSWxt74Fzueggdzm1xU53W66huKPmWAyBKNo8ztDJBeaGpegr",
  "key13": "31eiZoEhXSHq3PPnjoWxDmTGZHV8w8UEjTXXT4RKEZgenPRQVm3UqPAA58L42m48YFQvgCKFEfKi3p4wCpEGivMp",
  "key14": "mUgpvJvLNohdAA77WiANtfbR1avmRGTJPuTDRpEsNZ2398AnGWJvcJBF6qPbhV5PGgtfH6dScWYrzVUajdJLVXm",
  "key15": "2YWeTko8DM4yiJv9Ueupz5KwUkfqx1xsGN6f5qXaNtkWXbGHLSHPDUScKm5vZDSKQJbbtV4qNJcEWUR6CPTczHeC",
  "key16": "5QkMeMSEHVefNWqDnWRJ4XMGyn6kWSXQzJpkxXhZYznaaAiwRheYi6TL3mGTkaASdnVuHyfejchJ9356kSZGs4AK",
  "key17": "4zJd7VPKzibW6QfJMZTfc9KpR5x766bDkATfBBRi38Bxr3R7JHzwGYyGb6kxHc3HD5A8wFZtid3bgs3SxJfou6Yc",
  "key18": "2SJr4tQR3z3VqcSd6S6Sn72etF3SooMWVbTP7WmxvfXTsHJqCj7rzEyfJeir5T1zN4rsRcLckdQPmPchq79rivh9",
  "key19": "5jcUfUDEFCXvwWkS5mMGyiHofDQwat1q9hYeyPmqYAqsLyaqWSHebGxD9TL9TuttaXDNvdB2JP6e7AyTRLSB6Eht",
  "key20": "4earLXmPffNw9rWZfgqFjwRR3p4b3vQmivosr2odkTZk41Ca5gccoo8mc3kBW79A6VFLW9cVF1ee4q4AusnXrayV",
  "key21": "2JWiRA6YCGKVZLPFtK2BVu69GygDaYaGJpSebPCUMKkUk23FkeFKp2yJ2uJz27CRtSxaUKYq5XmvFVjHHPYVzeF1",
  "key22": "2aSYdMwRSzV5SkfaGwALZwydsJ8UG6E3hx4WG2gJagNCjpNyEhbmkx8rLmXzei73R5h9haeJ4rRf6xboCRk3oPCn",
  "key23": "3nbUG2SjRvTF6QZmqZHbnBDducrAprjPZ2Cy3A1uYkMnARPmmPtRjaLNNZd66E88RAngaVpJXfjJLFBaRacNHkVg",
  "key24": "5sZUMiwy6xutqyjy7MWJ3KpqYhN8mpBUR6cPFMjycSWfTH9th9xRpyThZVVo2kGpGnQkC6DRryn9w6cmNWbzCbLF",
  "key25": "4bh17Kk9hVcVLKFQoveSS7dPVx6JL8MWHVnsBJ5zQjT1RzEgkQou7WHAwS398PwZEgTEjUFN9cknq6RzRqDJtM8",
  "key26": "351fqPHc4Y4fQgrFBNnsK2iRXedLrzKnjjqpfXuNzhPcZeuSNFhJJstqCmYXFAoFsCgEieQ82ryi77hsdMde7wim",
  "key27": "3bESC4aqzBxBX3QEtVrHEvC6AazLwaWxCeH86GmPVs26LpL1UnrwyoesoxVHnYwMMbmAL1Jo4ASpy7TpqAYrwu6i",
  "key28": "3mvjFmPMiMgtwnnYpECatYrVz4a7KubTxSBk2zYtksEEbQM4WFYvLXnG7vr6M3T9eXTcJ9SBb2oeA4FDpfK92Eer"
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
