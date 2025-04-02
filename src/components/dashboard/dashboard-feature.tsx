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
    "3eZgLA98Qt2FgpsVSGPdDvY4qic5GskMAjA7kv8hbPFDbkNdyYWYzXTsbejYiPBxVFvmM7Hc3xWgqm41MwJFzz27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MwQedp2sGgTHUs5stecEGj1ostXBZGKxqMoJK1LosEfrRDvKEsqrsToYUmpGCnGwA39UaobKtxYaQFTjmZRru4z",
  "key1": "4C7EKVEoLSTKja3nCoMx7UK9wS3XXmQT88A166XbwrLsrTZbUKYwcPuhmNymnAayyG91hSjWdrMxnf717AvB7w2B",
  "key2": "8Wc2SKBr96Bk95pUvot7zaz7bSc58nsVnK1aMccBv4h5SkU8pfNkVvXzzDeJGgZgt22by9weXqtgjNiJQVhmbHg",
  "key3": "5JkaGWmaL2CzexLamQBygN1BVpFvTHx1yFVgQwcayC6VNtZdLdcjDhav4mh5MncYnvKUV2XEQzZXZF5aA5Wx8smX",
  "key4": "5D6UvwrjHsZE5bGDhXc87PJV4dXRoEN6xp1jwejAFPgWj2UQMyVgDuYd2UDqQhLBfxwzuxccynzgcoaaaDHCZFYb",
  "key5": "2JfyRzPzGEPQNwhwVb5UE2KFc66eJjsiWfA8bFLh4rvMeBYWsUSPpi6RuN3Wnx9zEDzAMK3YybyHSfcLdLkHqZzf",
  "key6": "6183WWGADCHrFEdzTxWQbCNm9g3V4fTQcQVyBcFPgazu8grgqKJUgPBaEh4jX9uA4s8iMSAhq2UTzFqRMkxpPgkE",
  "key7": "pCRuxhvuDtFH9vdEjTrQhGo4CX6fxSb9vZxMGHDc7ZyRC55N6HbNmrZgbNpDf6wMEJkNFW9yjnfmdURr9qa7EKE",
  "key8": "4R7cWFFQSsKen7X4SakD9EN2UzxsBMvwNpBYy1c2XnYhh7g83AKHnH6dkhQNBXoGqMrELWSz3ABYJ4g4sszb1KMn",
  "key9": "4ThPibuujAH5FhfzTrbEutXeUdpEZapNfzKDUmz34N4ZT3HUE634tRchz4HCs4xGfbYF8GX1EcjtmL1UEaFxtMsy",
  "key10": "4zeRu36AKZnk4xkJtjXnGhnrjPBeTkgVXggv9SXd2hwfeyKB4VuKjcFT1TBd2Wy8atJHGnstVptc6DAhVgN2Bkc1",
  "key11": "27ATZaPtbtPaEbboff2jUH5BtuecysKuhVfzbmdAne7h37GSkWtLJAvPcBBbQkeYgkXvDp4xGRDRxQcD5FQWyEvX",
  "key12": "2xiXGwsVLesGqkAf4ZW19WMZp8Wgm69cnZX1g9E4BCW7FFNsPn4CGBLdnwzZA5NhcYE27JUSKggybb2XBL5J1625",
  "key13": "5tBRDK2YsKEXQpVG3fzbqx2BJRSe9akQk8AfuNks4WJPPqSY4wMFQSCT4UnYSAWZyYhtgSMSMUxZdy6NtT6UjPDy",
  "key14": "5L3gAkeUCrhBPjxQUQ2DuMymVNSg3qHXUXGpVUSKVuUG9NFXAyN1GM15oEjmwrV9Y92YFYWzmzrSoUJYrr6X5DEv",
  "key15": "VL7W132JjyHbRTAxwG8v65XjN3DLFywRvEukDcyZLcAK61VNfEUFEDW5WJ6SnMqmBmc6fQG4RuqxkaQF7H6MCAM",
  "key16": "5MNovXCJwKYTzEJ3b5qiWVhoBMJRCkLE7M8atYYSwxWQU7FrgNazF8opiJ48VzYzUszcZCqtBECprJmib3jZhSzJ",
  "key17": "2f2SWLGVsopPmSxrB9hbhrekMzMGgjGnhNdaCjkqkcSNXnuZNkToQGQoaBJcWdFZdpMfZi8YzgMin45CLuNr7avf",
  "key18": "2r4GqLVuKATWbLFa4whSLUip7Fph3NqENiNVPymrzq4X7yg7zkiEZpLKd9ftmmMtg71C7RiUZXGbhRvSH1KEwrn1",
  "key19": "32q3FxsfGLWqwqZ2REEW6A4mXW8Eob8pha2ibixHATkEez5iMU38co1dQfwytsjNm3vFLwnmcnTARcNc5qXSaxUu",
  "key20": "ySqJVCJ69M2CXp17Jdfwx2jjrCBupH3uFwpLCQfh78egpMat7T1xEkhY46QumaVPGrTigZi3CckYzMwuSs1pNZ6",
  "key21": "58efRvnbgvLRgrUEZ88kC7fjA6ADaqXvoC4ChxFvkxQW5SnC13LRJtks8qEesqReiwybM2YWYcmex7rbxwJPo7L9",
  "key22": "HnF3JjQ8bpAoca7uQ5EX1jLvixb48CVJkUxPPGguuogA3R2yJKat3mVxUEKmo55b9p2PFP1XmkYEdDmyYMPe1pV",
  "key23": "STmDj7x8XQM4fLrSDZoRKrPqqMtMd13jE1EXyyncvpQWt6vPWx3zHcNQux4bMhJY3qvyEmkMssoYVjJgqEXdRhv",
  "key24": "3x8V1hqtUVAJttKbiwLuLKAGBqwQScn2EX6L9vn1MvXn9baytszePQTi6DPiwdQeY4DNk3PyueBZWZUMVowCksXn",
  "key25": "etFG4kV9wwgbvs6N36JoFD4eKbwqpRVY4DRVAwrjnvdUaChXa5X58ieYwXXdtYyHr6v4qWaRyAdHs1ABen3x2B7",
  "key26": "3Jc4PpyhFh8qgutdt5NDPhQcGS4gDVADFLDNirEYNHT4CFZADT3f4QsU9E7S71ugPaKzBBLZio5aRwFh2BkXZFF4",
  "key27": "2dHKirq9j6CZE3tcoQN6a76VssMTUiT6JgtsStJpE1vrc2dukeEX3dvJjm8BboQGgxTPschvLbgZhb3EoBrzuPBL",
  "key28": "5AP5zJTvAJmFUXSBNDLgGVmzXV7Gqpubgb5MyzjTgFgDtchyQLwCyuWUcPh2DSbugrtPE5EMmPLeejRVCZiZRB8y",
  "key29": "3zcGeZAtpKTeg8Tuv1kD3dMJHdWXDaUChBnoBrSpMnM2nwR2b6EChPpFquETHGGqj9EpAAJhYJ7ASAFTkGnpfWwH",
  "key30": "4vFAYqc6RaqAW1xnxebEJKNB37mW3ZdRWPX6UMP18geLb5gRk4Jn93d2iWeuypgQWEFm96znWrVpvBVdKD7PYwZ5",
  "key31": "K45oKrzcX5x2kRoUFtxXoMLv89UGpfrhG7rNPwCQw4qU2b7L6Pw6tm8VG5RMUR6eXVeMNMUVJu8YKZHf7E2cVq5",
  "key32": "Kw7iCmJGsp5qgdSapYx632BysiojLQ4kSccMtmTp8og9fW8oGBpdpujVB65wEqfGhTxsfHJdsXB8dZCwEg8ztyc",
  "key33": "AzXkr2ePyUA46mEGzni59wiqif9QZKBV8cFBFLL1sG3s6BT3Fevor3VcEkUxMHtxBx1b25oYxtXjvEVs9P1tFZ7",
  "key34": "2p4xFxruaCaH14i4bAMdzvHQMNzCB3qoBv5b2r9oi9PzsqHvVMPTmN5G9hSWeVFFro3zvdv6e1RpHPh1RyjzXKsg",
  "key35": "2AGGzPh5cScwzKgcRwUJjqaqFnx7usmUZQCSPV64AfsGhGdyaCLcaxSLA1MyWxuv779XrxeucQWAHeFBWGiWsPk2",
  "key36": "2TM52Ba1Aei5rB6PKLbn9YZfyVKQxEfKPbffCxjNsXMx5TWxes2h73iVUjAtwwJgifLYeFyXwWd8pNi2v7fdns4N",
  "key37": "2N252BysmrE4oxsUYJ48DVHnzUBVEzwgBsVvsUtCvW52K93PRyZ5VWQuijBZ6cV8vY3BBG5crm2Afb5MrJGomibG",
  "key38": "5MR8AVhFK3o7DP4KFjTrkvyqwjUoaSH1sAWwK5KEv2Wnh5QJwgLZPYeAF2uZkt9NWtShTseEQkuyj2DgEEW2tqyt",
  "key39": "5SPFJkRy62oN8VmbwQsSZkQFVRTkU1VXuCCuVpeGfBi16qgyzfn8HPkqKwZZzucN1FyzrtSke36u2dtsMxp9rdej",
  "key40": "37cKrqdBCmJezsNMnYcFJcPK5hFzRo7XSdJ65AZNCm3597rc86NoTBSiVkn5cWWTvridPrioMbBNT22jY9GXTLCs",
  "key41": "25kp97Czj5AnbJMsrjAFcEizs7TLFa1xhjiA3zD9vYaMt2rXMNqSF5uzyZdmnWU4KT5wBVjnGXsCiWgmoYkDJyCx"
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
