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
    "22MVYWbvUkWHSb7GfvM9C3a4MeuKkG19KD9FuyEjxq8fKY1CXyC86fAhe3Ca1Mgd34daGXyFoFHd8knokBTaTkXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BRMsuEemwm67RGVi7Gmd4HoYGZWsdCqZhQSTBnkEQKzK9FiEsECA7NF3Z6dpy3WMs8JdCTAMuHCLsxE1xdVVyL3",
  "key1": "2FshoJNxxaNHucwgbHhVDC84tfT4VxFEh45oQkahXtJBLP9xMnEnvdUF4yqK6UX3Zq8pWv9prVtyHPqXa6izUjko",
  "key2": "WoqEinXXZ5s45epdNRhbXF3DtXLGS9TWez7d5BrnPTckqqUguLvTZaWX1kEsQxPQLPnv7VQVj9M9ez5NsGv9WY1",
  "key3": "5imCmUahP4kifCb1wJAVWKqmsi1EeXCNVDgvUYpkvFs8gskQBcEugVWM4DLyM3poL163CusgbWeAZ9jrEAsK6a6N",
  "key4": "ReiziPQUFWbNZigK9gHxAfG1iy1PrFp2mRe3YGtW4ua5hUJxYUe4xziRBacpEsC4YACYw8iCrFa2sXXKBuaKcHJ",
  "key5": "28Kn8J1TgLeABmWQDdWYWV7dsTKRJyx8eXk65JHeULkmpY4Ec1jRh6dnpLsYFSLW1vqpmBTfVNy88SNiH6hKaN9A",
  "key6": "4ifDpiVntUgX9TRcmc98RGPYdwZMzS6by2HDjsTW7P2uUHq6pp28QYgPf1Zrpq9BwqhzVDA3dQZSNvCCrRAJb5wi",
  "key7": "3ZW3tF7FKAaDHxvQhhneMWQaxhRPhjXMseUvjH5PZ8YADugH3h3RRuA1YquEM78EQF92UcRukJreAbFewdGSB4Sc",
  "key8": "4hxpEf1FBxd1RDGjUs3TfcrjQZ6epU61p2XHKrGyZHoFxtANM2r7SmJueEjnEatkCZmVRyvSTpQb3y9FpmFVTaLK",
  "key9": "VL1nsS1BSdEowj7cT6gNDmBpJKtdBZwXTrsKYcFhsCFGief1vvwW8YgMog5YhzKVMP1rqwED7Kn4cn14HZNbDE1",
  "key10": "4ZHA8Wx9NPG62hYAaqiH6gcDaBkqtTDTUArd6GEuVy9wBVZp5Nf3mM2GCfxDpa8U9NDadzgTkgudS2U3eYWr2rhB",
  "key11": "3ub7kACWAVQ1HKzPym6oGoXf1rhqJ3ZSza4Gi7RKnDEv6Q9fuQ1CwXc5eD8wMokBEUqTtTr5GqpEQMT27961i9xF",
  "key12": "2M2V88XCdgLeN2KakXvMsHhF22dxNz6S4FLst95aKA69L4vsPeBoDwr6pQw4aWQXgeBQZhmdE1xVk3LEJWiaW7rk",
  "key13": "3rWw6HL5wcB4i24kXnmtHwZFxfGfaG7dNGxJdudz9fZ6o56K5Z3F5H4A51KqWGbkJZEFTD6SYuBSWaw91roV7XGs",
  "key14": "4jsdFazQHW7qafCuw52VGSPV1qoj2nBiNw2AArREent4tj4qPRcEVpLhVsNeii4UdZCiGT5KoFymwVzxtGjau5GU",
  "key15": "5wHZ13ApcFVH2kBH3wgRHZGPgiFquzKF7LBvfwG1WMnT23oTH9cCJKoDFu9Ho8Rqw8w4E4UhoES4uJsc2AoTG5Eg",
  "key16": "4n2s9VutX8EZnPk2Y62mT2RFjLgdzXcQ1ANE7WavMnQYtykA9sRatexCEF75oaqxihYxZyBtpF2ZUzymzpZ8g7Qb",
  "key17": "3nzVvsihGfNhBfiU65injVmxPrD4VfZW8X8eE8AdqsX1VSmTLf9WVpqRb9mwP3CHeBinFxuYx6KwVxiqZ44EmMoB",
  "key18": "2RYycxJ8TAoV6TRu5KiK3jnjgYntiMTnV2uubLddCpnK14NyZM1zhNcyN7XSZLzX9jH96JGXG8G5EfGQL6QYNqmX",
  "key19": "4icQGoy2iC31aZKCeAeLZRZMoYmgtRyFLbHWwdN1sr8gxhD7sgTsF8YAFDWMEFwJUsesssjtkrJD7oTeukrBAmvo",
  "key20": "mK3tnJbA92JuEUjaYsxb61dLemoUbrAYhArgvN3rGpd8qeNE1e3MHCstyikDoENaEAti6UVarrtHZLozquyPgKq",
  "key21": "5GkgdkJV6FX2YP8oEQUG3Bs33FtXYp4bq52RqgTHq1PuVASfceuifnsxheEYmy1RC5HHX5T52ymwCAZHKYcxjiFG",
  "key22": "44opEJorBk8q5GphKPWeR7TFv81mCpHxMQz9XHnQqTRTy5jiEVfAcLL2qhefLMfRzqGjRzHUb5gsef8PHAs1hTVc",
  "key23": "3ZTdT57FiptnRwFTrYXntLr783rVFYHk591zN8aVPFD7AEhtSARvvT45m8VUSU7jy2pKodviUXv9LiR3P8UoDMph",
  "key24": "42rkR1SxUjxYcBE5okKVXftk2kU3zyH8N2ZU9SxwDfYuRBwrdneuLneuWWwbLvaNHhQ1edU4dZTbcuDMAnZ1sNmC",
  "key25": "4tKd8vXMtgwSbGFZXHvgrQ4BG1oFyrtwDKjNuGMbMekv7sM9Hp5zsAKqfjmusBiyngoDZopexP1GpMceYtvEQsn9",
  "key26": "4FhALUSTBS8bYydMYMUHHYuVBuLx7SQaPcfVkebgtZHj83MBA2XYoZCZRVd4cTC5hYJcGgoWEd4kKTZEXeTQd7at",
  "key27": "65UU6YCagJwaoYoESFz7rFKQdX7sV2fs5dgQ2fXBcAcPtyZYcf6oSZto9dh15nmJETmcMrdUE2qBhiv8kvzxSuXE",
  "key28": "3V79oJwviHD4574Hkn4d9cdQN13gwYPemCPpgnNAKBQHMRioFPDQzg6kqHSkJHw4HDDT6TRb3CzJck7bCJfCagEE",
  "key29": "2WZYJ1URMsfiQWN6ip37P47Vtz5EX4vV2We6BSfWtEwoDJjEnhnjqPRsMKueZ1VwLy38khLVGBP7QTyjZAvVzdCU",
  "key30": "57HSrwA7xrj8C6As39ogFUmz2XHmZjk6RbZKHMT8sn3NbPwyZHG4mGDo3os7VG8dzFDdqs59J5KamjeDY5fdfunb",
  "key31": "5U2ucwczEmdRagjsA2ELvSuawDB8ALtCFBv5ojhV1jjP3FtEdpvrj8GCZWHD4nCB6xXWFroBxZrut4kuGiQDBmY8",
  "key32": "Y54Hqya6GznhRY6SdTE5rh8YuFWagfviAEeBF1zMk1azKZeni2yUCtx3vSkXruZTjCfKLDrJv7Hv3w21bucsRX2",
  "key33": "3CSa1TYqtuvKwvUwqWSuUXbvc8h6QWAVJGfJX4gtFNUwFe6KbnDP79MmW3yTNBU44eTNuMpJDcq4E5HSFFggiEnr",
  "key34": "3Gf6JMf7LESbHXyvdUFNpsTe5or5sdS3NzGSaCs4UQuD9nrVSmvdX2PFHWkg3W8Vrk8JbaDLdkF1kVpoG84QaiRL",
  "key35": "2mrvEVgdyAWhMe48f22TCJa3gDhVEpyheV3BazG7zRepyn4n7WJpQ5oJu9oGbVgTsuoocqaju26KWD2VUXNMSZ6J",
  "key36": "3sx2VKLDvDLvPc3sKeZgJsUNXEuiwFojz7rRHyhs84WgNmtX7jW6yLJPkypseHdz9sFBXZA5BMXNa3jLYwCQoL63",
  "key37": "1SJgjtedQtMZoUxgpXrQx4rdRSqE5zygyC7ZJDBpVvLmcccCxsC8Mva6jq3ZnPzjq1TUA3PmNmFygTGmSW8fFwZ",
  "key38": "5qJKSoQBxBWtpNCcfDUkZsp9pjB5HcfpQvb7KjR5opbfXC9wqkz44jGUvt3Nar4v2F17PLTUaiSbTFdhbhc7w5Tz",
  "key39": "46qpRFsYDc7iBeZ6gnQEGqEqaJX76Y9x6o9wBJcyydWHQhrMN929Ncier8ZvNUGWbkxeQS5p5VKkFzPgV6Rf4Po7",
  "key40": "267tpCGHFCpraCaovfn6x2kQzGvs95BriktvkNtPfQxJXmWhnXzozbwy9XkGbrSnTnsit3uusGdY5abuEPRWEJ2J",
  "key41": "3fwDGswXSVFPt5gvh6JCjGuikyiiXbtYQnNVNiQ57C1EeDLBEfSXJ5dBYLNjZTjNFh7T3jwpR1RRrPTmEbQhS2k9",
  "key42": "P2uqbc1cvpyHhSgUdSCiSqzfcHEF35xgEbi572NMU6qtvt1sFXHrZMZshHZenqqvDnpCxZhjKVuyv5pgmZaT6ry",
  "key43": "5Pb3xHSNArn8TwDjUYZpx7pk3XyuQ4VfKaekxJznG8pwZgpZckF9hsLXW7f8igzUxv78CjCBzRZgGi2wZYn9BDpg"
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
