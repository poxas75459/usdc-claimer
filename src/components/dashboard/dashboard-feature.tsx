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
    "JvzZ7DxdHK5Sm6xojFDP2RVGFYPPHPLy3t7yzbNgN5x1zejKkb55XGmjAYMqaZrUkXPpG8aMHDKTXDy9DYjiQ8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4za5Rr4q9ZsyJ8CijQf6TajeKJbkTASoHT37psfBNJcjo27KcFNw5NjrpS3GXQHZCkJwhr2fX6gsxN2dEHG24s3W",
  "key1": "JL1kVdGtFeec8X6a8VMseSQ2UBkS6wMtLEZnGsi4RaNc7ejQJMUoe9HcYg2fjurWwaLmevBHr3nuGLo15GZf9GL",
  "key2": "3ryiKNivTsjy6tBKmefaoj9jDzTqDSdWkE12XB1EGutDJrwg2HxhFDyXadDi5z78aZW9Co1LRmm6hi25CQJN64W8",
  "key3": "4BGJkyiUwE5TiLu9ZguK3jNnyGd2BduxEn4GGfY1UgoxfJZTskAaeNRkrVgAEsxwKXDBWNA8Vm8TsumgbGZK3uNj",
  "key4": "3tuES62BD6nYb7cp79KD6SQ6A4eRJFbPxuwZxmqHRhBCCMCfPsggD2nByPFR539gRi1Go6WGziMwXncMPztFV78n",
  "key5": "4NcRrMuP4sr4t5yhC2D8wq41xMyjGPoEhNza6DpEKrW5MRjjV6zspK1wLnF6eQ2Pg3S3VLgpMG847xxG9UNM32Zi",
  "key6": "4JA8QhUq33RPrVuVZcQwYAoc27fmHKDrPqAGhdAcibNmcsF67M9tR2o7f4EJ9BryW6djBDvYqXo1hr7gspaDG3vQ",
  "key7": "4yVQp7LW53gmAcZSscSJSTn1yECZym6witqHddgucpgqA1iE99TgsKszqJsBaZfvCRRCEWGpaxEq5Pr5PzrwgSkY",
  "key8": "4QsLLRttGmRs6qT3yofGvr6hbq43BpMHnqjGQocAzm7zob1F34A9cw2SwXSpRVTz99PabiLgdCKkxw8MwtRPCPQE",
  "key9": "2W1MXEBv5QrYdf8nusg2HZvVZAJxobgB54NQz3SDNjLK5duZJQx8wgsLVhMvKBgbsismi3K1kFqvcoS72fnmkiuo",
  "key10": "332yD4yuuSfvbUa171qV7gdeZTCKJvQcndGWVb8qu6kr2tbMZBNVL3oWYaSSo7QFQJNBkTHxJwgQxczom9fKGS5d",
  "key11": "Z2GoTN83xKhg3G3MFV68jVcvJqE2XT8Fjowxs99PDdv3wGV1JBC2H61ffnKmbHKnFFjxV1qmRrjQPq7wGytww47",
  "key12": "5y2wyrEbmdLCpmftXhff6kfSk6d4tcBTwHMSv2Vv2M63W6jyJK77EnDbykcWv84FLJrjCQks3mwC6hR6JLKbw4Ts",
  "key13": "5WfGmhr6uAEHHoGHopDv9BkBfQrfQTgJzfXFACTi4pDByn1oXykzeYPnH2fpsVdsD1nssH6Y4f4SeZGChR1ogkTn",
  "key14": "K6J1nuYpTyfYnaENnDRQRJh6AQb4oGa72BbUeYEpohtaWxah9hQ14dmSN5GDWNtHwEg2wjZ4TrNApQgPtukE7n1",
  "key15": "3VFgSc91dF1ad1aUd9m771MPxMcJwich7vCvJfAQPPVBxKuAVnvRrarwkp6KBgJekYBD771J7znZ4Fj98qscAms7",
  "key16": "2irvThjfVhX7HGeUTEUfTxjB6igwtAa6sRuSphGKxMYAbx6DRHvf9smP3wfiMv2SpfRRj1xVR3nhh9GFgse7Qxyz",
  "key17": "stkXQwXNmyV1EozE7TQvrtzhawKZhe4yDWMonruw4NJJ1ZuZ8eHKZN54FJ6tim4mzqLktaqXKEkQCVmLGsBGywr",
  "key18": "3XmykNEVcQ4LdbPMmowiSrZL5MxNoMxBVwoAZaErutxnTtxHWjcMHoce1N6xwBnAQ2PMYfXwQhe83UMRsZdTrSUa",
  "key19": "J5JqHFnyosk8hyJXiRzAWTZnap19vv77FJ43pf4EzV2Ge2rp6bJ2wx39ScCmW4AMmZ11qkSk9cFAUEiSfV93ZhK",
  "key20": "3sdV2zs1E6wqtjnYJ4w6SgF8qWKKgxfJYoDSB53xUbW31HqqrCxpvFwamfuCpDsj19mjk1HsU2kAXbgLMUHNZkz9",
  "key21": "3JkvnPo1Frpe45jvnGPmeDibZtJJe9PbGAcqLWRqVBaTDMGMV9N8ExbZbPz5SPGC7oeL2oPtU3NX63tp526KnHRd",
  "key22": "qbfhty6vWZxJcXrzmEVS9Y8mvU4Wo1ufi9QRtY22p3mo5t2xZ4b8dtedKcZVZzK2MPdTEuC8qXFuuJ4pgmMhzC6",
  "key23": "2oSzTMBxMnmpE4CSBDrKsju4ZSnDQWUcemAeV8ZmZzeZuqPVz8vVakFxjmKj8C3HMQS7iPqr9LXdUXCShMrcxojy",
  "key24": "2jopqfC7xRs5817Bzj3A1nznJUwXuBtv3NkBuX378YAieDKuxH3tsshunPohg5aNim9wt2Qpsx1dm2NqL7zaDEWE",
  "key25": "21zghGyoQFoo9iQpCcneKbk16ede6dcr81MndRKNzNWq9MTj9Paaf6bhsFsGCtec6rVZcBMNxXHawNipqQiFsdnm",
  "key26": "2gVqXTYEfTswC1gvqCiJGdaVrX5NTjsRTbG9uBzdE93JL3MRsaQvfxtvXznAQFcXb9RdnxKf99BuXvv7Xve4wLS4",
  "key27": "2QPLzfYH4HNdAXfhFo7ad7zTERDzumKQ5n5ZFH1aQqgjAVLJc9uSuU3n2RxoqkpRik5vgU5qCMu4KDv8mbJoPiy1",
  "key28": "4XYHZjrBMewYx5iz9nzDoQ6mnKfCF2NyhJT3MNzhBzbyLe4vLdCyZ9BGLrjvPCWC4pmqduVo3qNTEUh4TkGPgkdx",
  "key29": "33xPKmDNYK1EHtaYoGodwGJhcG7hqcdETeT471GwHr7kLchhzQZdutiN9BpLDYL6LECpYHCaVVmousmAvWBfvJLb",
  "key30": "5dwEnw9WMDo7Qng7N1R8YdPn17AK3Vb1psWpVRvMVtTzEQiAfagP2q6yDsMbwbukG5X2ZbpTqotrU7DVJJYW8cza",
  "key31": "4hghrjETpvvJbu1kxu7oahkVtDaiJe1i6ADRsueGmk2y3abyWEKFTtDcrTbzTr5oLa4Go127Lp4YP4p5iGzYJcDs",
  "key32": "4RJhfqZDXNo2APEFtCGib7VABEvxoa7LTybkbG21Un6Stvw4k4nqWk9yLE5B92VUNLYhhBWHgpH61CKfmmo87Jp3",
  "key33": "48HZDfm9fEe583dJs35oHFdba267GrxA8GiWU3pGMjxHUA1PbVnUjNbcEKGojYuGzXQCryMuoSTjK9GhCLBWvUqF"
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
